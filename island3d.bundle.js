var MyIsland3D=(()=>{var gl=Object.defineProperty;var Dd=Object.getOwnPropertyDescriptor;var Ld=Object.getOwnPropertyNames;var Ud=Object.prototype.hasOwnProperty;var Nd=(n,e)=>{for(var t in e)gl(n,t,{get:e[t],enumerable:!0})},Fd=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ld(e))!Ud.call(n,r)&&r!==t&&gl(n,r,{get:()=>e[r],enumerable:!(i=Dd(e,r))||i.enumerable});return n};var zd=n=>Fd(gl({},"__esModule",{value:!0}),n);var Ux={};Nd(Ux,{SCALE:()=>we,actionPose:()=>Sd,baseElevation:()=>Wc,buildBase:()=>Md,buildHuman:()=>Xc,cameraVector:()=>hd,create:()=>Lx,createCampaign:()=>Rx,drawCampaign2D:()=>Gc,fishPose:()=>wd,legPose:()=>gd,nearestWithin:()=>ud,scaleWorldLabels:()=>md,terrainHeight:()=>Rn,updateAppearanceKey:()=>xd,updateAvatarFrameCycle:()=>fd,updateAvatarPoseCycle:()=>pd,updateBaseFrame:()=>_d,updateBuildingState:()=>yd,updateChapterState:()=>vd,updateRemoteMotion:()=>dd,updateTerrainAnchor:()=>ta,walkSurface:()=>Hc});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var bh=0,$l=1,Sh=2;var Kl=1,Jr=2,jn=3,ui=0,rn=1,Wt=2,gi=0,Xi=1,jl=2,Ql=3,ec=4,wh=5,Ii=100,Th=101,Eh=102,Ah=103,Ch=104,Rh=200,Ih=201,Ph=202,Dh=203,Ra=204,Ia=205,Lh=206,Uh=207,Nh=208,Fh=209,zh=210,Oh=211,Bh=212,kh=213,Vh=214,no=0,io=1,ro=2,qi=3,so=4,ao=5,oo=6,lo=7,tc=0,Gh=1,Hh=2,xi=0,Wh=1,Xh=2,qh=3,$r=4,Yh=5,Zh=6,Jh=7;var nc=300,rr=301,sr=302,co=303,ho=304,Ws=306,Ur=1e3,Ri=1001,Pa=1002,gn=1003,$h=1004;var Xs=1005;var kn=1006,uo=1007;var Ni=1008;var Hn=1009,ic=1010,rc=1011,Kr=1012,fo=1013,Fi=1014,Wn=1015,jr=1016,po=1017,mo=1018,Qr=1020,sc=35902,ac=35899,oc=1021,lc=1022,Dn=1023,Nr=1026,es=1027,go=1028,xo=1029,cc=1030,_o=1031;var yo=1033,qs=33776,Ys=33777,Zs=33778,Js=33779,vo=35840,Mo=35841,bo=35842,So=35843,wo=36196,To=37492,Eo=37496,Ao=37808,Co=37809,Ro=37810,Io=37811,Po=37812,Do=37813,Lo=37814,Uo=37815,No=37816,Fo=37817,zo=37818,Oo=37819,Bo=37820,ko=37821,Vo=36492,Go=36494,Ho=36495,Wo=36283,Xo=36284,qo=36285,Yo=36286;var As=2300,Da=2301,Aa=2302,Gl=2400,Hl=2401,Wl=2402;var Kh=3200,jh=3201;var hc=0,Qh=1,Xn="",Xt="srgb",Yi="srgb-linear",Cs="linear",Ft="srgb";var Wi=7680;var Xl=519,eu=512,tu=513,nu=514,uc=515,iu=516,ru=517,su=518,au=519,La=35044;var dc="300 es",Bn=2e3,Rs=2001;var di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=1234567,Ts=Math.PI/180,Fr=180/Math.PI;function ci(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function pt(n,e,t){return Math.max(e,Math.min(t,n))}function fc(n,e){return(n%e+e)%e}function Od(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Bd(n,e,t){return n!==e?(t-n)/(e-n):0}function Es(n,e,t){return(1-t)*n+t*e}function kd(n,e,t,i){return Es(n,e,1-Math.exp(-t*i))}function Vd(n,e=1){return e-Math.abs(fc(n,e*2)-e)}function Gd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Wd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xd(n,e){return n+Math.random()*(e-n)}function qd(n){return n*(.5-Math.random())}function Yd(n){n!==void 0&&(Yc=n);let e=Yc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zd(n){return n*Ts}function Jd(n){return n*Fr}function $d(n){return(n&n-1)===0&&n!==0}function Kd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function jd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qd(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),p=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*d,c*p,o*l);break;case"YZY":n.set(c*p,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*p,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function On(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var $s={DEG2RAD:Ts,RAD2DEG:Fr,generateUUID:ci,clamp:pt,euclideanModulo:fc,mapLinear:Od,inverseLerp:Bd,lerp:Es,damp:kd,pingpong:Vd,smoothstep:Gd,smootherstep:Hd,randInt:Wd,randFloat:Xd,randFloatSpread:qd,seededRandom:Yd,degToRad:Zd,radToDeg:Jd,isPowerOfTwo:$d,ceilPowerOfTwo:Kd,floorPowerOfTwo:jd,setQuaternionFromProperEuler:Qd,normalize:Nt,denormalize:On},Xe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3],p=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==p||l!==f||h!==g){let m=1-o,u=c*p+l*f+h*g+d*x,_=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){let I=Math.sqrt(w),A=Math.atan2(I,u*_);m=Math.sin(m*A)/I,o=Math.sin(o*A)/I}let y=o*_;if(c=c*m+p*y,l=l*m+f*y,h=h*m+g*y,d=d*m+x*y,m===1-o){let I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],p=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*f-l*p,e[t+1]=c*g+h*p+l*d-o*f,e[t+2]=l*g+h*f+o*p-c*d,e[t+3]=h*g-o*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),p=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"YZX":this._x=p*h*d+l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d-p*f*g;break;case"XZY":this._x=p*h*d-l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=i+o+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xl=new k,Zc=new fi,ct=class n{constructor(e,t,i,r,s,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],p=i[2],f=i[5],g=i[8],x=r[0],m=r[3],u=r[6],_=r[1],w=r[4],y=r[7],I=r[2],A=r[5],U=r[8];return s[0]=a*x+o*_+c*I,s[3]=a*m+o*w+c*A,s[6]=a*u+o*y+c*U,s[1]=l*x+h*_+d*I,s[4]=l*m+h*w+d*A,s[7]=l*u+h*y+d*U,s[2]=p*x+f*_+g*I,s[5]=p*m+f*w+g*A,s[8]=p*u+f*y+g*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,p=o*c-h*s,f=l*s-a*c,g=t*d+i*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(r*l-h*i)*x,e[2]=(o*i-r*a)*x,e[3]=p*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_l.makeScale(e,t)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_l=new ct;function pc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ou(){let n=zr("canvas");return n.style.display="block",n}var Jc={};function Or(n){n in Jc||(Jc[n]=!0,console.warn(n))}function lu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var $c=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ef(){let n={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ft&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ft&&(r.r=Lr(r.r),r.g=Lr(r.g),r.b=Lr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xn?Cs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Or("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Or("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yi]:{primaries:e,whitePoint:i,transfer:Cs,toXYZ:$c,fromXYZ:Kc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:$c,fromXYZ:Kc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}var wt=ef();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var mr,Ua=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{mr===void 0&&(mr=zr("canvas")),mr.width=e.width,mr.height=e.height;let r=mr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=mr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=hi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tf=0,Br=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(yl(r[a].image)):s.push(yl(r[a]))}else s=yl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ua.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nf=0,vl=new k,cn=class n extends di{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ri,r=Ri,s=kn,a=Ni,o=Dn,c=Hn,l=n.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=ci(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ur:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ur:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=nc;cn.DEFAULT_ANISOTROPY=1;var Tt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,y=(f+1)/2,I=(u+1)/2,A=(h+p)/4,U=(d+x)/4,L=(g+m)/4;return w>y&&w>I?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=A/i,s=U/i):y>I?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=L/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=U/s,r=L/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(p-h)/_,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Na=class extends di{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new cn(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Na{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Is=class extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fa=class extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),ra.subVectors(this.max,ps),gr.subVectors(e.a,ps),xr.subVectors(e.b,ps),_r.subVectors(e.c,ps),Si.subVectors(xr,gr),wi.subVectors(_r,xr),ki.subVectors(gr,_r);let t=[0,-Si.z,Si.y,0,-wi.z,wi.y,0,-ki.z,ki.y,Si.z,0,-Si.x,wi.z,0,-wi.x,ki.z,0,-ki.x,-Si.y,Si.x,0,-wi.y,wi.x,0,-ki.y,ki.x,0];return!Ml(t,gr,xr,_r,ra)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,gr,xr,_r,ra))?!1:(sa.crossVectors(Si,wi),t=[sa.x,sa.y,sa.z],Ml(t,gr,xr,_r,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new k,new k,new k,new k,new k,new k,new k,new k],Nn=new k,ia=new $n,gr=new k,xr=new k,_r=new k,Si=new k,wi=new k,ki=new k,ps=new k,ra=new k,sa=new k,Vi=new k;function Ml(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vi.fromArray(n,s);let o=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var rf=new $n,ms=new k,bl=new k,pi=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):rf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);let t=ms.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(bl)),this.expandByPoint(ms.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ri=new k,Sl=new k,aa=new k,Ti=new k,wl=new k,oa=new k,Tl=new k,kr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sl.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Sl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(aa),o=Ti.dot(this.direction),c=-Ti.dot(aa),l=Ti.lengthSq(),h=Math.abs(1-a*a),d,p,f,g;if(h>0)if(d=a*c-o,p=a*o-c,g=s*h,d>=0)if(p>=-g)if(p<=g){let x=1/h;d*=x,p*=x,f=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Sl).addScaledVector(aa,p),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);let i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,r,s){wl.subVectors(t,e),oa.subVectors(i,e),Tl.crossVectors(wl,oa);let a=this.direction.dot(Tl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);let c=o*this.direction.dot(oa.crossVectors(Ti,oa));if(c<0)return null;let l=o*this.direction.dot(wl.cross(Ti));if(l<0||c+l>a)return null;let h=-o*Ti.dot(Tl);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pt=class n{constructor(e,t,i,r,s,a,o,c,l,h,d,p,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,d,p,f,g,x,m)}set(e,t,i,r,s,a,o,c,l,h,d,p,f,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),s=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let p=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,f=c*d,g=l*h,x=l*d;t[0]=p+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,f=c*d,g=l*h,x=l*d;t[0]=p-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=p*l+x,t[1]=c*d,t[5]=x*l+p,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-p*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=p-x*d}else if(e.order==="XZY"){let p=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sf,e,af)}lookAt(e,t,i){let r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ei.crossVectors(i,wn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ei.crossVectors(i,wn)),Ei.normalize(),la.crossVectors(wn,Ei),r[0]=Ei.x,r[4]=la.x,r[8]=wn.x,r[1]=Ei.y,r[5]=la.y,r[9]=wn.y,r[2]=Ei.z,r[6]=la.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],p=i[9],f=i[13],g=i[2],x=i[6],m=i[10],u=i[14],_=i[3],w=i[7],y=i[11],I=i[15],A=r[0],U=r[4],L=r[8],S=r[12],M=r[1],T=r[5],D=r[9],O=r[13],P=r[2],N=r[6],z=r[10],Y=r[14],X=r[3],oe=r[7],ie=r[11],ve=r[15];return s[0]=a*A+o*M+c*P+l*X,s[4]=a*U+o*T+c*N+l*oe,s[8]=a*L+o*D+c*z+l*ie,s[12]=a*S+o*O+c*Y+l*ve,s[1]=h*A+d*M+p*P+f*X,s[5]=h*U+d*T+p*N+f*oe,s[9]=h*L+d*D+p*z+f*ie,s[13]=h*S+d*O+p*Y+f*ve,s[2]=g*A+x*M+m*P+u*X,s[6]=g*U+x*T+m*N+u*oe,s[10]=g*L+x*D+m*z+u*ie,s[14]=g*S+x*O+m*Y+u*ve,s[3]=_*A+w*M+y*P+I*X,s[7]=_*U+w*T+y*N+I*oe,s[11]=_*L+w*D+y*z+I*ie,s[15]=_*S+w*O+y*Y+I*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],f=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*c*d-r*l*d-s*o*p+i*l*p+r*o*f-i*c*f)+x*(+t*c*f-t*l*p+s*a*p-r*a*f+r*l*h-s*c*h)+m*(+t*l*d-t*o*f-s*a*d+i*a*f+s*o*h-i*l*h)+u*(-r*o*h-t*c*d+t*o*p+r*a*d-i*a*p+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],f=e[11],g=e[12],x=e[13],m=e[14],u=e[15],_=d*m*l-x*p*l+x*c*f-o*m*f-d*c*u+o*p*u,w=g*p*l-h*m*l-g*c*f+a*m*f+h*c*u-a*p*u,y=h*x*l-g*d*l+g*o*f-a*x*f-h*o*u+a*d*u,I=g*d*c-h*x*c-g*o*p+a*x*p+h*o*m-a*d*m,A=t*_+i*w+r*y+s*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/A;return e[0]=_*U,e[1]=(x*p*s-d*m*s-x*r*f+i*m*f+d*r*u-i*p*u)*U,e[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*u+i*c*u)*U,e[3]=(d*c*s-o*p*s-d*r*l+i*p*l+o*r*f-i*c*f)*U,e[4]=w*U,e[5]=(h*m*s-g*p*s+g*r*f-t*m*f-h*r*u+t*p*u)*U,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*u-t*c*u)*U,e[7]=(a*p*s-h*c*s+h*r*l-t*p*l-a*r*f+t*c*f)*U,e[8]=y*U,e[9]=(g*d*s-h*x*s-g*i*f+t*x*f+h*i*u-t*d*u)*U,e[10]=(a*x*s-g*o*s+g*i*l-t*x*l-a*i*u+t*o*u)*U,e[11]=(h*o*s-a*d*s-h*i*l+t*d*l+a*i*f-t*o*f)*U,e[12]=I*U,e[13]=(h*x*r-g*d*r+g*i*p-t*x*p-h*i*m+t*d*m)*U,e[14]=(g*o*r-a*x*r-g*i*c+t*x*c+a*i*m-t*o*m)*U,e[15]=(a*d*r-h*o*r+h*i*c-t*d*c-a*i*p+t*o*p)*U,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,p=s*l,f=s*h,g=s*d,x=a*h,m=a*d,u=o*d,_=c*l,w=c*h,y=c*d,I=i.x,A=i.y,U=i.z;return r[0]=(1-(x+u))*I,r[1]=(f+y)*I,r[2]=(g-w)*I,r[3]=0,r[4]=(f-y)*A,r[5]=(1-(p+u))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+w)*U,r[9]=(m-_)*U,r[10]=(1-(p+x))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=yr.set(r[0],r[1],r[2]).length(),a=yr.set(r[4],r[5],r[6]).length(),o=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);let l=1/s,h=1/a,d=1/o;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,t.setFromRotationMatrix(Fn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Bn,c=!1){let l=this.elements,h=2*s/(t-e),d=2*s/(i-r),p=(t+e)/(t-e),f=(i+r)/(i-r),g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===Bn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Rs)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Bn,c=!1){let l=this.elements,h=2/(t-e),d=2/(i-r),p=-(t+e)/(t-e),f=-(i+r)/(i-r),g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===Bn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Rs)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},yr=new k,Fn=new Pt,sf=new k(0,0,0),af=new k(1,1,1),Ei=new k,la=new k,wn=new k,jc=new Pt,Qc=new fi,Vn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},of=0,eh=new k,vr=new fi,si=new Pt,ca=new k,gs=new k,lf=new k,cf=new fi,th=new k(1,0,0),nh=new k(0,1,0),ih=new k(0,0,1),rh={type:"added"},hf={type:"removed"},Mr={type:"childadded",child:null},El={type:"childremoved",child:null},At=class n extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new Vn,i=new fi,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new ct}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ca.copy(e):ca.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(gs,ca,this.up):si.lookAt(ca,gs,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(si),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rh),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rh),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,cf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};At.DEFAULT_UP=new k(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new k,ai=new k,Al=new k,oi=new k,br=new k,Sr=new k,sh=new k,Cl=new k,Rl=new k,Il=new k,Pl=new Tt,Dl=new Tt,Ll=new Tt,li=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zn.subVectors(e,t),r.cross(zn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zn.subVectors(r,t),ai.subVectors(i,t),Al.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(ai),c=zn.dot(Al),l=ai.dot(ai),h=ai.dot(Al),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let p=1/d,f=(l*c-o*h)*p,g=(a*h-o*c)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,oi.x),c.addScaledVector(a,oi.y),c.addScaledVector(o,oi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Pl.setScalar(0),Dl.setScalar(0),Ll.setScalar(0),Pl.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,i),Ll.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Pl,s.x),a.addScaledVector(Dl,s.y),a.addScaledVector(Ll,s.z),a}static isFrontFacing(e,t,i,r){return zn.subVectors(i,t),ai.subVectors(e,t),zn.cross(ai).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),zn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;br.subVectors(r,i),Sr.subVectors(s,i),Cl.subVectors(e,i);let c=br.dot(Cl),l=Sr.dot(Cl);if(c<=0&&l<=0)return t.copy(i);Rl.subVectors(e,r);let h=br.dot(Rl),d=Sr.dot(Rl);if(h>=0&&d<=h)return t.copy(r);let p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(br,a);Il.subVectors(e,s);let f=br.dot(Il),g=Sr.dot(Il);if(g>=0&&f<=g)return t.copy(s);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Sr,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return sh.subVectors(s,r),o=(d-h)/(d-h+(f-g)),t.copy(r).addScaledVector(sh,o);let u=1/(m+x+p);return a=x*u,o=p*u,t.copy(i).addScaledVector(br,a).addScaledVector(Sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Ul(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=wt.workingColorSpace){if(e=fc(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ul(a,s,e+1/3),this.g=Ul(a,s,e),this.b=Ul(a,s,e-1/3)}return wt.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let i=cu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return wt.workingToColorSpace(ln.copy(this),e),Math.round(pt(ln.r*255,0,255))*65536+Math.round(pt(ln.g*255,0,255))*256+Math.round(pt(ln.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(ln.copy(this),t);let i=ln.r,r=ln.g,s=ln.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Xt){wt.workingToColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,r=ln.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(ha);let i=Es(Ai.h,ha.h,t),r=Es(Ai.s,ha.s,t),s=Es(Ai.l,ha.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new tt;tt.NAMES=cu;var uf=0,Kn=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Xi,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ia,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ra&&(i.blendSrc=this.blendSrc),this.blendDst!==Ia&&(i.blendDst=this.blendDst),this.blendEquation!==Ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xn=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Yt=new k,ua=new Xe,df=0,Jt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:df++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=La,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=On(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==La&&(e.usage=this.usage),e}};var Ps=class extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ds=class extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var st=class extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},ff=0,Pn=new Pt,Nl=new At,wr=new k,Tn=new $n,xs=new $n,jt=new k,Lt=class n extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pc(e)?Ds:Ps)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ct().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Tn.min,xs.min),Tn.expandByPoint(jt),jt.addVectors(Tn.max,xs.max),Tn.expandByPoint(jt)):(Tn.expandByPoint(xs.min),Tn.expandByPoint(xs.max))}Tn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)jt.fromBufferAttribute(o,l),c&&(wr.fromBufferAttribute(e,l),jt.add(wr)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<i.count;L++)o[L]=new k,c[L]=new k;let l=new k,h=new k,d=new k,p=new Xe,f=new Xe,g=new Xe,x=new k,m=new k;function u(L,S,M){l.fromBufferAttribute(i,L),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),p.fromBufferAttribute(s,L),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(l),d.sub(l),f.sub(p),g.sub(p);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),o[L].add(x),o[S].add(x),o[M].add(x),c[L].add(m),c[S].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,S=_.length;L<S;++L){let M=_[L],T=M.start,D=M.count;for(let O=T,P=T+D;O<P;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let w=new k,y=new k,I=new k,A=new k;function U(L){I.fromBufferAttribute(r,L),A.copy(I);let S=o[L];w.copy(S),w.sub(I.multiplyScalar(I.dot(S))).normalize(),y.crossVectors(A,S);let T=y.dot(c[L])<0?-1:1;a.setXYZW(L,w.x,w.y,w.z,T)}for(let L=0,S=_.length;L<S;++L){let M=_[L],T=M.start,D=M.count;for(let O=T,P=T+D;O<P;O+=3)U(e.getX(O+0)),U(e.getX(O+1)),U(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);let r=new k,s=new k,a=new k,o=new k,c=new k,l=new k,h=new k,d=new k;if(e)for(let p=0,f=e.count;p<f;p+=3){let g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let u=0;u<h;u++)p[g++]=l[f++]}return new Jt(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let p=l[h],f=e(p,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ah=new Pt,Gi=new kr,da=new pi,oh=new k,fa=new k,pa=new k,ma=new k,Fl=new k,ga=new k,lh=new k,xa=new k,ut=class extends At{constructor(e=new Lt,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ga.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Fl.fromBufferAttribute(d,e),a?ga.addScaledVector(Fl,h):ga.addScaledVector(Fl.sub(t),h))}t.add(ga)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!(da.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(da,oh)===null||Gi.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(ah.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(ah),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=a[m.materialIndex],_=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,I=w;y<I;y+=3){let A=o.getX(y),U=o.getX(y+1),L=o.getX(y+2);r=_a(this,u,e,i,l,h,d,A,U,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){let _=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);r=_a(this,a,e,i,l,h,d,_,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=a[m.materialIndex],_=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,I=w;y<I;y+=3){let A=y,U=y+1,L=y+2;r=_a(this,u,e,i,l,h,d,A,U,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){let _=m,w=m+1,y=m+2;r=_a(this,a,e,i,l,h,d,_,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function pf(n,e,t,i,r,s,a,o){let c;if(e.side===rn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===ui,o),c===null)return null;xa.copy(o),xa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(xa);return l<t.near||l>t.far?null:{distance:l,point:xa.clone(),object:n}}function _a(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,fa),n.getVertexPosition(c,pa),n.getVertexPosition(l,ma);let h=pf(n,e,t,i,fa,pa,ma,lh);if(h){let d=new k;li.getBarycoord(lh,fa,pa,ma,d),r&&(h.uv=li.getInterpolatedAttribute(r,o,c,l,d,new Xe)),s&&(h.uv1=li.getInterpolatedAttribute(s,o,c,l,d,new Xe)),a&&(h.normal=li.getInterpolatedAttribute(a,o,c,l,d,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new k,materialIndex:0};li.getNormal(fa,pa,ma,p.normal),h.face=p,h.barycoord=d}return h}var nn=class n extends Lt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],p=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2));function g(x,m,u,_,w,y,I,A,U,L,S){let M=y/U,T=I/L,D=y/2,O=I/2,P=A/2,N=U+1,z=L+1,Y=0,X=0,oe=new k;for(let ie=0;ie<z;ie++){let ve=ie*T-O;for(let Pe=0;Pe<N;Pe++){let He=Pe*M-D;oe[x]=He*_,oe[m]=ve*w,oe[u]=P,l.push(oe.x,oe.y,oe.z),oe[x]=0,oe[m]=0,oe[u]=A>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(Pe/U),d.push(1-ie/L),Y+=1}}for(let ie=0;ie<L;ie++)for(let ve=0;ve<U;ve++){let Pe=p+ve+N*ie,He=p+ve+N*(ie+1),rt=p+(ve+1)+N*(ie+1),it=p+(ve+1)+N*ie;c.push(Pe,He,it),c.push(He,rt,it),X+=6}o.addGroup(f,X,S),f+=X,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ar(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function hn(n){let e={};for(let t=0;t<n.length;t++){let i=ar(n[t]);for(let r in i)e[r]=i[r]}return e}function mf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var Zo={clone:ar,merge:hn},gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ls=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ci=new k,ch=new Xe,hh=new Xe,Zt=class extends Ls{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,ch,hh),t.subVectors(hh,ch)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ts*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tr=-90,Er=1,za=class extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(Tr,Er,e,t);r.layers=this.layers,this.add(r);let s=new Zt(Tr,Er,e,t);s.layers=this.layers,this.add(s);let a=new Zt(Tr,Er,e,t);a.layers=this.layers,this.add(a);let o=new Zt(Tr,Er,e,t);o.layers=this.layers,this.add(o);let c=new Zt(Tr,Er,e,t);c.layers=this.layers,this.add(c);let l=new Zt(Tr,Er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Us=class extends cn{constructor(e=[],t=rr,i,r,s,a,o,c,l,h){super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oa=class extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Us(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nn(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:gi});s.uniforms.tEquirect.value=t;let a=new ut(r,s),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=kn),new za(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Oe=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},_f={type:"move"},Gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_f)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Oe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Zi=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ji=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ns=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=La,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},fn=new k,Hr=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=On(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wr=class extends Kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ar,_s=new k,Cr=new k,Rr=new k,Ir=new Xe,ys=new Xe,hu=new Pt,ya=new k,vs=new k,va=new k,uh=new Xe,zl=new Xe,dh=new Xe,Fs=class extends At{constructor(e=new Wr){if(super(),this.isSprite=!0,this.type="Sprite",Ar===void 0){Ar=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ns(t,5);Ar.setIndex([0,1,2,0,2,3]),Ar.setAttribute("position",new Hr(i,3,0,!1)),Ar.setAttribute("uv",new Hr(i,2,3,!1))}this.geometry=Ar,this.material=e,this.center=new Xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),hu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-Rr.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;Ma(ya.set(-.5,-.5,0),Rr,a,Cr,r,s),Ma(vs.set(.5,-.5,0),Rr,a,Cr,r,s),Ma(va.set(.5,.5,0),Rr,a,Cr,r,s),uh.set(0,0),zl.set(1,0),dh.set(1,1);let o=e.ray.intersectTriangle(ya,vs,va,!1,_s);if(o===null&&(Ma(vs.set(-.5,.5,0),Rr,a,Cr,r,s),zl.set(0,1),o=e.ray.intersectTriangle(ya,va,vs,!1,_s),o===null))return;let c=e.ray.origin.distanceTo(_s);c<e.near||c>e.far||t.push({distance:c,point:_s.clone(),uv:li.getInterpolation(_s,ya,vs,va,uh,zl,dh,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ma(n,e,t,i,r,s){Ir.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ys.x=s*Ir.x-r*Ir.y,ys.y=r*Ir.x+s*Ir.y):ys.copy(Ir),n.copy(e),n.x+=ys.x,n.y+=ys.y,n.applyMatrix4(hu)}var Ba=class extends cn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=gn,h=gn,d,p){super(null,a,o,c,l,h,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xr=class extends Jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Pr=new Pt,fh=new Pt,ba=[],ph=new $n,yf=new Pt,Ms=new ut,bs=new pi,Ct=class extends ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,yf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pr),ph.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(ph)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pr),bs.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(i),e.ray.intersectsSphere(bs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Pr),fh.multiplyMatrices(i,Pr),Ms.matrixWorld=fh,Ms.raycast(e,ba);for(let a=0,o=ba.length;a<o;a++){let c=ba[a];c.instanceId=s,c.object=this,t.push(c)}ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ba(new Float32Array(r*this.count),r,this.count,go,Wn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ol=new k,vf=new k,Mf=new ct,Zn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ol.subVectors(i,t).cross(vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Mf.getNormalMatrix(e),r=this.coplanarPoint(Ol).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new pi,bf=new Xe(.5,.5),Sa=new k,qr=class{constructor(e=new Zn,t=new Zn,i=new Zn,r=new Zn,s=new Zn,a=new Zn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],p=s[6],f=s[7],g=s[8],x=s[9],m=s[10],u=s[11],_=s[12],w=s[13],y=s[14],I=s[15];if(r[0].setComponents(l-a,f-h,u-g,I-_).normalize(),r[1].setComponents(l+a,f+h,u+g,I+_).normalize(),r[2].setComponents(l+o,f+d,u+x,I+w).normalize(),r[3].setComponents(l-o,f-d,u-x,I-w).normalize(),i)r[4].setComponents(c,p,m,y).normalize(),r[5].setComponents(l-c,f-p,u-m,I-y).normalize();else if(r[4].setComponents(l-c,f-p,u-m,I-y).normalize(),t===Bn)r[5].setComponents(l+c,f+p,u+m,I+y).normalize();else if(t===Rs)r[5].setComponents(c,p,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);let t=bf.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Sa.x=r.normal.x>0?e.max.x:e.min.x,Sa.y=r.normal.y>0?e.max.y:e.min.y,Sa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pi=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ka=new k,Va=new k,mh=new Pt,Ss=new kr,wa=new pi,Bl=new k,gh=new k,$i=class extends At{constructor(e=new Lt,t=new Pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ka.fromBufferAttribute(t,r-1),Va.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ka.distanceTo(Va);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),wa.radius+=s,e.ray.intersectsSphere(wa)===!1)return;mh.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(mh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let u=h.getX(x),_=h.getX(x+1),w=Ta(this,e,Ss,c,u,_,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),u=Ta(this,e,Ss,c,x,m,g-1);u&&t.push(u)}}else{let f=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let u=Ta(this,e,Ss,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){let x=Ta(this,e,Ss,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ta(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(ka.fromBufferAttribute(o,r),Va.fromBufferAttribute(o,s),t.distanceSqToSegment(ka,Va,Bl,gh)>i)return;Bl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Bl);if(!(l<e.near||l>e.far))return{distance:l,point:gh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Di=class extends cn{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},zs=class extends cn{constructor(e,t,i=Fi,r,s,a,o=gn,c=gn,l,h=Nr,d=1){if(h!==Nr&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Os=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Gt=class n extends Lt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],p=[],f=[],g=0,x=[],m=i/2,u=0;_(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(f,2));function _(){let y=new k,I=new k,A=0,U=(t-e)/i;for(let L=0;L<=s;L++){let S=[],M=L/s,T=M*(t-e)+e;for(let D=0;D<=r;D++){let O=D/r,P=O*c+o,N=Math.sin(P),z=Math.cos(P);I.x=T*N,I.y=-M*i+m,I.z=T*z,d.push(I.x,I.y,I.z),y.set(N,U,z).normalize(),p.push(y.x,y.y,y.z),f.push(O,1-M),S.push(g++)}x.push(S)}for(let L=0;L<r;L++)for(let S=0;S<s;S++){let M=x[S][L],T=x[S+1][L],D=x[S+1][L+1],O=x[S][L+1];(e>0||S!==0)&&(h.push(M,T,O),A+=3),(t>0||S!==s-1)&&(h.push(T,D,O),A+=3)}l.addGroup(u,A,0),u+=A}function w(y){let I=g,A=new Xe,U=new k,L=0,S=y===!0?e:t,M=y===!0?1:-1;for(let D=1;D<=r;D++)d.push(0,m*M,0),p.push(0,M,0),f.push(.5,.5),g++;let T=g;for(let D=0;D<=r;D++){let P=D/r*c+o,N=Math.cos(P),z=Math.sin(P);U.x=S*z,U.y=m*M,U.z=S*N,d.push(U.x,U.y,U.z),p.push(0,M,0),A.x=N*.5+.5,A.y=z*.5*M+.5,f.push(A.x,A.y),g++}for(let D=0;D<r;D++){let O=I+D,P=T+D;y===!0?h.push(P,P+1,O):h.push(P+1,P,O),L+=3}l.addGroup(u,L,y===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gn=class n extends Gt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ga=class n extends Lt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(s.slice(),3)),this.setAttribute("uv",new st(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let w=new k,y=new k,I=new k;for(let A=0;A<t.length;A+=3)f(t[A+0],w),f(t[A+1],y),f(t[A+2],I),c(w,y,I,_)}function c(_,w,y,I){let A=I+1,U=[];for(let L=0;L<=A;L++){U[L]=[];let S=_.clone().lerp(y,L/A),M=w.clone().lerp(y,L/A),T=A-L;for(let D=0;D<=T;D++)D===0&&L===A?U[L][D]=S:U[L][D]=S.clone().lerp(M,D/T)}for(let L=0;L<A;L++)for(let S=0;S<2*(A-L)-1;S++){let M=Math.floor(S/2);S%2===0?(p(U[L][M+1]),p(U[L+1][M]),p(U[L][M])):(p(U[L][M+1]),p(U[L+1][M+1]),p(U[L+1][M]))}}function l(_){let w=new k;for(let y=0;y<s.length;y+=3)w.x=s[y+0],w.y=s[y+1],w.z=s[y+2],w.normalize().multiplyScalar(_),s[y+0]=w.x,s[y+1]=w.y,s[y+2]=w.z}function h(){let _=new k;for(let w=0;w<s.length;w+=3){_.x=s[w+0],_.y=s[w+1],_.z=s[w+2];let y=m(_)/2/Math.PI+.5,I=u(_)/Math.PI+.5;a.push(y,1-I)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){let w=a[_+0],y=a[_+2],I=a[_+4],A=Math.max(w,y,I),U=Math.min(w,y,I);A>.9&&U<.1&&(w<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),I<.2&&(a[_+4]+=1))}}function p(_){s.push(_.x,_.y,_.z)}function f(_,w){let y=_*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){let _=new k,w=new k,y=new k,I=new k,A=new Xe,U=new Xe,L=new Xe;for(let S=0,M=0;S<s.length;S+=9,M+=6){_.set(s[S+0],s[S+1],s[S+2]),w.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),A.set(a[M+0],a[M+1]),U.set(a[M+2],a[M+3]),L.set(a[M+4],a[M+5]),I.copy(_).add(w).add(y).divideScalar(3);let T=m(I);x(A,M+0,_,T),x(U,M+2,w,T),x(L,M+4,y,T)}}function x(_,w,y,I){I<0&&_.x===1&&(a[w]=_.x-1),y.x===0&&y.z===0&&(a[w]=I/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Ki=class n extends Ga{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Bs=class n extends Lt{constructor(e=[new Xe(0,-.5),new Xe(.5,0),new Xe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=pt(r,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new k,p=new Xe,f=new k,g=new k,x=new k,m=0,u=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,u=e[_+1].y-e[_].y,f.x=u*1,f.y=-m,f.z=u*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,u=e[_+1].y-e[_].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=t;_++){let w=i+_*h*r,y=Math.sin(w),I=Math.cos(w);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*y,d.y=e[A].y,d.z=e[A].x*I,a.push(d.x,d.y,d.z),p.x=_/t,p.y=A/(e.length-1),o.push(p.x,p.y);let U=c[3*A+0]*y,L=c[3*A+1],S=c[3*A+0]*I;l.push(U,L,S)}}for(let _=0;_<t;_++)for(let w=0;w<e.length-1;w++){let y=w+_*e.length,I=y,A=y+e.length,U=y+e.length+1,L=y+1;s.push(I,A,L),s.push(U,L,A)}this.setIndex(s),this.setAttribute("position",new st(a,3)),this.setAttribute("uv",new st(o,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var En=class n extends Lt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=e/o,p=t/c,f=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let _=u*p-a;for(let w=0;w<l;w++){let y=w*d-s;g.push(y,-_,0),x.push(0,0,1),m.push(w/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let _=0;_<o;_++){let w=_+l*u,y=_+l*(u+1),I=_+1+l*(u+1),A=_+1+l*u;f.push(w,y,A),f.push(y,I,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ji=class n extends Lt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);let o=[],c=[],l=[],h=[],d=e,p=(t-e)/r,f=new k,g=new Xe;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let u=s+m/i*a;f.x=d*Math.cos(u),f.y=d*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=p}for(let x=0;x<r;x++){let m=x*(i+1);for(let u=0;u<i;u++){let _=u+m,w=_,y=_+i+1,I=_+i+2,A=_+1;o.push(w,y,A),o.push(y,I,A)}}this.setIndex(o),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var yn=class n extends Lt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new k,p=new k,f=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){let _=[],w=u/i,y=0;u===0&&a===0?y=.5/t:u===i&&c===Math.PI&&(y=-.5/t);for(let I=0;I<=t;I++){let A=I/t;d.x=-e*Math.cos(r+A*s)*Math.sin(a+w*o),d.y=e*Math.cos(a+w*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+w*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),m.push(A+y,1-w),_.push(l++)}h.push(_)}for(let u=0;u<i;u++)for(let _=0;_<t;_++){let w=h[u][_+1],y=h[u][_],I=h[u+1][_],A=h[u+1][_+1];(u!==0||a>0)&&f.push(w,y,A),(u!==i-1||c<Math.PI)&&f.push(y,I,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mi=class n extends Lt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new k,d=new k,p=new k;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){let x=g/r*s,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){let x=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,u=(r+1)*(f-1)+g,_=(r+1)*f+g;a.push(x,m,_),a.push(m,u,_)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var zt=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ks=class extends zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ha=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wa=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ea(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Sf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Qi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xa=class extends Qi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gl,endingEnd:Gl}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hl:s=e,o=2*t-i;break;case Wl:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Hl:a=e,c=2*i-t;break;case Wl:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,u=-p*m+2*p*x-p*g,_=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,w=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let I=0;I!==o;++I)s[I]=u*a[h+I]+_*a[l+I]+w*a[c+I]+y*a[d+I];return s}},qa=class extends Qi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(r-t),d=1-h;for(let p=0;p!==o;++p)s[p]=a[l+p]*d+a[c+p]*h;return s}},Ya=class extends Qi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},An=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ea(t,this.TimeBufferType),this.values=Ea(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ea(e.times,Array),values:Ea(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case As:t=this.InterpolantFactoryMethodDiscrete;break;case Da:t=this.InterpolantFactoryMethodLinear;break;case Aa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return Da;case this.InterpolantFactoryMethodSmooth:return Aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Sf(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Aa,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)c=!0;else{let d=o*i,p=d-i,f=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[p+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*i,p=a*i;for(let f=0;f!==i;++f)t[p+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Da;var Li=class extends An{constructor(e,t,i){super(e,t,i)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=As;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends An{constructor(e,t,i,r){super(e,t,i,r)}};Za.prototype.ValueTypeName="color";var Ja=class extends An{constructor(e,t,i,r){super(e,t,i,r)}};Ja.prototype.ValueTypeName="number";var $a=class extends Qi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)fi.slerpFlat(s,0,a,l-o,a,l,c);return s}},Vs=class extends An{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}};Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends An{constructor(e,t,i){super(e,t,i)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=As;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends An{constructor(e,t,i,r){super(e,t,i,r)}};Ka.prototype.ValueTypeName="vector";var Ca={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ja=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},uu=new ja,Yr=class{constructor(e){this.manager=e!==void 0?e:uu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Dr=new WeakMap,Qa=class extends Yr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ca.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Dr.get(a);d===void 0&&(d=[],Dr.set(a,d)),d.push({onLoad:t,onError:r})}return a}let o=zr("img");function c(){h(),t&&t(this);let d=Dr.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onLoad&&f.onLoad(this)}Dr.delete(this),s.manager.itemEnd(e)}function l(d){h(),r&&r(d),Ca.remove(`image:${e}`);let p=Dr.get(this)||[];for(let f=0;f<p.length;f++){let g=p[f];g.onError&&g.onError(d)}Dr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ca.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Gs=class extends Yr{constructor(e){super(e)}load(e,t,i,r){let s=new cn,a=new Qa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Zr=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},er=class extends Zr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},kl=new Pt,xh=new k,_h=new k,eo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(xh),_h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_h),t.updateMatrixWorld(),kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var yh=new Pt,ws=new k,Vl=new k,ql=class extends eo{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ws.setFromMatrixPosition(e.matrixWorld),i.position.copy(ws),Vl.copy(i.position),Vl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vl),i.updateMatrixWorld(),r.makeTranslation(-ws.x,-ws.y,-ws.z),yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh,i.coordinateSystem,i.reversedDepth)}},tr=class extends Zr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ql}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Hs=class extends Ls{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yl=class extends eo{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nr=class extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Yl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var to=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var gc="\\[\\]\\.:\\/",wf=new RegExp("["+gc+"]","g"),xc="[^"+gc+"]",Tf="[^"+gc.replace("\\.","")+"]",Ef=/((?:WC+[\/:])*)/.source.replace("WC",xc),Af=/(WCOD+)?/.source.replace("WCOD",Tf),Cf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),Rf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),If=new RegExp("^"+Ef+Af+Cf+Rf+"$"),Pf=["material","materials","bones","map"],Zl=class{constructor(e,t,i){let r=i||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wf,"")}static parseTrackName(e){let t=If.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Pf.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=Zl;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fx=new Float32Array(1);var vh=new Pt,ir=class{constructor(e,t,i=0,r=1/0){this.ray=new kr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(e,t=!0,i=[]){return Jl(e,this,i,t),i.sort(Mh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Jl(e[r],this,i,t);return i.sort(Mh),i}};function Mh(n,e){return n.distance-e.distance}function Jl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let a=0,o=s.length;a<o;a++)Jl(s[a],e,t,!0)}}function _c(n,e,t,i){let r=Df(i);switch(t){case oc:return n*e;case go:return n*e/r.components*r.byteLength;case xo:return n*e/r.components*r.byteLength;case cc:return n*e*2/r.components*r.byteLength;case _o:return n*e*2/r.components*r.byteLength;case lc:return n*e*3/r.components*r.byteLength;case Dn:return n*e*4/r.components*r.byteLength;case yo:return n*e*4/r.components*r.byteLength;case qs:case Ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mo:case So:return Math.max(n,16)*Math.max(e,8)/4;case vo:case bo:return Math.max(n,8)*Math.max(e,8)/2;case wo:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Io:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vo:case Go:case Ho:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wo:case Xo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case qo:case Yo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Df(n){switch(n){case Hn:case ic:return{byteLength:1,components:1};case Kr:case rc:case jr:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case Fi:case fo:case Wn:return{byteLength:4,components:1};case sc:case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function zf(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){let g=d[p],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,d[p]=x)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
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
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
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
#endif`,Yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,op=`#define PI 3.141592653589793
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
} // validated`,lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cp=`vec3 transformedNormal = objectNormal;
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
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
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
}`,Ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
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
#endif`,Fp=`struct PhysicalMaterial {
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
}`,zp=`
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yp=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bm=`float getShadowMask() {
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
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Om=`uniform sampler2D t2D;
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`#include <common>
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
}`,Wm=`#if DEPTH_PACKING == 3200
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
}`,Xm=`#define DISTANCE
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
}`,qm=`#define DISTANCE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,jm=`uniform vec3 diffuse;
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
}`,Qm=`#define LAMBERT
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
}`,eg=`#define LAMBERT
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
}`,tg=`#define MATCAP
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
}`,ng=`#define MATCAP
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
}`,ig=`#define NORMAL
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
}`,rg=`#define NORMAL
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
}`,sg=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,og=`#define STANDARD
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
}`,lg=`#define STANDARD
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
}`,cg=`#define TOON
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
}`,hg=`#define TOON
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
}`,ug=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 color;
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
}`,mg=`uniform float rotation;
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
}`,gg=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Of,alphahash_pars_fragment:Bf,alphamap_fragment:kf,alphamap_pars_fragment:Vf,alphatest_fragment:Gf,alphatest_pars_fragment:Hf,aomap_fragment:Wf,aomap_pars_fragment:Xf,batching_pars_vertex:qf,batching_vertex:Yf,begin_vertex:Zf,beginnormal_vertex:Jf,bsdfs:$f,iridescence_fragment:Kf,bumpmap_pars_fragment:jf,clipping_planes_fragment:Qf,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:tp,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:rp,color_pars_vertex:sp,color_vertex:ap,common:op,cube_uv_reflection_fragment:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:hp,displacementmap_vertex:up,emissivemap_fragment:dp,emissivemap_pars_fragment:fp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:xp,envmap_pars_fragment:_p,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Ip,envmap_vertex:vp,fog_vertex:Mp,fog_pars_vertex:bp,fog_fragment:Sp,fog_pars_fragment:wp,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:Ep,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Cp,lights_pars_begin:Rp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Lp,lights_phong_pars_fragment:Up,lights_physical_fragment:Np,lights_physical_pars_fragment:Fp,lights_fragment_begin:zp,lights_fragment_maps:Op,lights_fragment_end:Bp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Hp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:qp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:$p,morphcolor_vertex:Kp,morphnormal_vertex:jp,morphtarget_pars_vertex:Qp,morphtarget_vertex:em,normal_fragment_begin:tm,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:rm,normal_vertex:sm,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:um,packing:dm,premultiplied_alpha_fragment:fm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:xm,roughnessmap_pars_fragment:_m,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:vm,shadowmap_vertex:Mm,shadowmask_pars_fragment:bm,skinbase_vertex:Sm,skinning_pars_vertex:wm,skinning_vertex:Tm,skinnormal_vertex:Em,specularmap_fragment:Am,specularmap_pars_fragment:Cm,tonemapping_fragment:Rm,tonemapping_pars_fragment:Im,transmission_fragment:Pm,transmission_pars_fragment:Dm,uv_pars_fragment:Lm,uv_pars_vertex:Um,uv_vertex:Nm,worldpos_vertex:Fm,background_vert:zm,background_frag:Om,backgroundCube_vert:Bm,backgroundCube_frag:km,cube_vert:Vm,cube_frag:Gm,depth_vert:Hm,depth_frag:Wm,distanceRGBA_vert:Xm,distanceRGBA_frag:qm,equirect_vert:Ym,equirect_frag:Zm,linedashed_vert:Jm,linedashed_frag:$m,meshbasic_vert:Km,meshbasic_frag:jm,meshlambert_vert:Qm,meshlambert_frag:eg,meshmatcap_vert:tg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:rg,meshphong_vert:sg,meshphong_frag:ag,meshphysical_vert:og,meshphysical_frag:lg,meshtoon_vert:cg,meshtoon_frag:hg,points_vert:ug,points_frag:dg,shadow_vert:fg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},Se={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Qn={basic:{uniforms:hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new tt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:hn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:hn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new tt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:hn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:hn([Se.points,Se.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:hn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:hn([Se.common,Se.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:hn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:hn([Se.sprite,Se.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:hn([Se.common,Se.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:hn([Se.lights,Se.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Qn.physical={uniforms:hn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Jo={r:0,b:0,g:0},or=new Vn,xg=new Pt;function _g(n,e,t,i,r,s,a){let o=new tt(0),c=s===!0?0:1,l,h,d=null,p=0,f=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function x(w){let y=!1,I=g(w);I===null?u(o,c):I&&I.isColor&&(u(I,1),y=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,y){let I=g(y);I&&(I.isCubeTexture||I.mapping===Ws)?(h===void 0&&(h=new ut(new nn(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:ar(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,U,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),or.copy(y.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(or)),h.material.toneMapped=wt.getTransfer(I.colorSpace)!==Ft,(d!==I||p!==I.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=I,p=I.version,f=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new ut(new En(2,2),new _n({name:"BackgroundMaterial",uniforms:ar(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=wt.getTransfer(I.colorSpace)!==Ft,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||p!==I.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=I,p=I.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function u(w,y){w.getRGB(Jo,mc(n)),i.buffers.color.setClear(Jo.r,Jo.g,Jo.b,y,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,y=1){o.set(w),c=y,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,u(o,c)},render:x,addToRenderList:m,dispose:_}}function yg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null),s=r,a=!1;function o(M,T,D,O,P){let N=!1,z=d(O,D,T);s!==z&&(s=z,l(s.object)),N=f(M,O,D,P),N&&g(M,O,D,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,y(M,T,D,O),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,T,D){let O=D.wireframe===!0,P=i[M.id];P===void 0&&(P={},i[M.id]=P);let N=P[T.id];N===void 0&&(N={},P[T.id]=N);let z=N[O];return z===void 0&&(z=p(c()),N[O]=z),z}function p(M){let T=[],D=[],O=[];for(let P=0;P<t;P++)T[P]=0,D[P]=0,O[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:D,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,T,D,O){let P=s.attributes,N=T.attributes,z=0,Y=D.getAttributes();for(let X in Y)if(Y[X].location>=0){let ie=P[X],ve=N[X];if(ve===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ie===void 0||ie.attribute!==ve||ve&&ie.data!==ve.data)return!0;z++}return s.attributesNum!==z||s.index!==O}function g(M,T,D,O){let P={},N=T.attributes,z=0,Y=D.getAttributes();for(let X in Y)if(Y[X].location>=0){let ie=N[X];ie===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));let ve={};ve.attribute=ie,ie&&ie.data&&(ve.data=ie.data),P[X]=ve,z++}s.attributes=P,s.attributesNum=z,s.index=O}function x(){let M=s.newAttributes;for(let T=0,D=M.length;T<D;T++)M[T]=0}function m(M){u(M,0)}function u(M,T){let D=s.newAttributes,O=s.enabledAttributes,P=s.attributeDivisors;D[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),P[M]!==T&&(n.vertexAttribDivisor(M,T),P[M]=T)}function _(){let M=s.newAttributes,T=s.enabledAttributes;for(let D=0,O=T.length;D<O;D++)T[D]!==M[D]&&(n.disableVertexAttribArray(D),T[D]=0)}function w(M,T,D,O,P,N,z){z===!0?n.vertexAttribIPointer(M,T,D,P,N):n.vertexAttribPointer(M,T,D,O,P,N)}function y(M,T,D,O){x();let P=O.attributes,N=D.getAttributes(),z=T.defaultAttributeValues;for(let Y in N){let X=N[Y];if(X.location>=0){let oe=P[Y];if(oe===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){let ie=oe.normalized,ve=oe.itemSize,Pe=e.get(oe);if(Pe===void 0)continue;let He=Pe.buffer,rt=Pe.type,it=Pe.bytesPerElement,q=rt===n.INT||rt===n.UNSIGNED_INT||oe.gpuType===fo;if(oe.isInterleavedBufferAttribute){let $=oe.data,pe=$.stride,Fe=oe.offset;if($.isInstancedInterleavedBuffer){for(let Ce=0;Ce<X.locationSize;Ce++)u(X.location+Ce,$.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ce=0;Ce<X.locationSize;Ce++)m(X.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Ce=0;Ce<X.locationSize;Ce++)w(X.location+Ce,ve/X.locationSize,rt,ie,pe*it,(Fe+ve/X.locationSize*Ce)*it,q)}else{if(oe.isInstancedBufferAttribute){for(let $=0;$<X.locationSize;$++)u(X.location+$,oe.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let $=0;$<X.locationSize;$++)m(X.location+$);n.bindBuffer(n.ARRAY_BUFFER,He);for(let $=0;$<X.locationSize;$++)w(X.location+$,ve/X.locationSize,rt,ie,ve*it,ve/X.locationSize*$*it,q)}}else if(z!==void 0){let ie=z[Y];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(X.location,ie);break;case 3:n.vertexAttrib3fv(X.location,ie);break;case 4:n.vertexAttrib4fv(X.location,ie);break;default:n.vertexAttrib1fv(X.location,ie)}}}}_()}function I(){L();for(let M in i){let T=i[M];for(let D in T){let O=T[D];for(let P in O)h(O[P].object),delete O[P];delete T[D]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;let T=i[M.id];for(let D in T){let O=T[D];for(let P in O)h(O[P].object),delete O[P];delete T[D]}delete i[M.id]}function U(M){for(let T in i){let D=i[T];if(D[M.id]===void 0)continue;let O=D[M.id];for(let P in O)h(O[P].object),delete O[P];delete D[M.id]}}function L(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function vg(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function c(l,h,d,p){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,p,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*p[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Mg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==Dn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){let L=U===jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Hn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Wn&&!L)}function c(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:I,maxSamples:A}}function bg(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Zn,o=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||i!==0||r;return r=p,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let _=s?0:i,w=_*4,y=u.clippingState||null;c.value=y,y=h(g,p,w,f);for(let I=0;I!==w;++I)y[I]=t[I];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=f+x*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let w=0,y=f;w!==x;++w,y+=4)a.copy(d[w]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Sg(n){let e=new WeakMap;function t(a,o){return o===co?a.mapping=rr:o===ho&&(a.mapping=sr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===co||o===ho)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Oa(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var ns=4,du=[.125,.215,.35,.446,.526,.582],hr=20,yc=new Hs,fu=new tt,vc=null,Mc=0,bc=0,Sc=!1,cr=(1+Math.sqrt(5))/2,ts=1/cr,pu=[new k(-cr,ts,0),new k(cr,ts,0),new k(-ts,0,cr),new k(ts,0,cr),new k(0,cr,-ts),new k(0,cr,ts),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],wg=new k,jo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=wg}=s;vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,Mc,bc),this._renderer.xr.enabled=Sc,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:jr,format:Dn,colorSpace:Yi,depthBuffer:!1},r=mu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(s)),this._blurMaterial=Eg(s,e,t)}return r}_compileMaterial(e){let t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,yc)}_sceneToCubeUV(e,t,i,r,s){let c=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(fu),d.toneMapping=xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let x=new xn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),m=new ut(new nn,x),u=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,u=!0):(x.color.copy(fu),u=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[w],s.y,s.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[w]));let I=this._cubeSize;$o(r,y*I,w>2?I:0,I,I),d.setRenderTarget(r),u&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===rr||e.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;$o(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,yc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pu[(r-s-1)%pu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ut(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*hr-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):hr;m>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);let u=[],_=0;for(let U=0;U<hr;++U){let L=U/x,S=Math.exp(-L*L/2);u.push(S),U===0?_+=S:U<m&&(_+=2*S)}for(let U=0;U<u.length;U++)u[U]=u[U]/_;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:w}=this;p.dTheta.value=g,p.mipInt.value=w-i;let y=this._sizeLods[r],I=3*y*(r>w-ns?r-w+ns:0),A=4*(this._cubeSize-y);$o(t,I,A,3*y,2*y),c.setRenderTarget(t),c.render(d,yc)}};function Tg(n){let e=[],t=[],i=[],r=n,s=n-ns+1+du.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>n-ns?c=du[a-n+ns-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,u=1,_=new Float32Array(x*g*f),w=new Float32Array(m*g*f),y=new Float32Array(u*g*f);for(let A=0;A<f;A++){let U=A%3*2/3-1,L=A>2?0:-1,S=[U,L,0,U+2/3,L,0,U+2/3,L+1,0,U,L,0,U+2/3,L+1,0,U,L+1,0];_.set(S,x*g*A),w.set(p,m*g*A);let M=[A,A,A,A,A,A];y.set(M,u*g*A)}let I=new Lt;I.setAttribute("position",new Jt(_,x)),I.setAttribute("uv",new Jt(w,m)),I.setAttribute("faceIndex",new Jt(y,u)),e.push(I),r>ns&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mu(n,e,t){let i=new Jn(n,e,t);return i.texture.mapping=Ws,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $o(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Eg(n,e,t){let i=new Float32Array(hr),r=new k(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function gu(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function xu(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function Ag(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===co||c===ho,h=c===rr||c===sr;if(l||h){let d=e.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new jo(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new jo(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Cg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Or("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Rg(n,e,t,i){let r={},s=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete r[p.id];let f=s.get(p);f&&(e.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function c(d){let p=d.attributes;for(let f in p)e.update(p[f],n.ARRAY_BUFFER)}function l(d){let p=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let w=0,y=_.length;w<y;w+=3){let I=_[w+0],A=_[w+1],U=_[w+2];p.push(I,A,A,U,U,I)}}else if(g!==void 0){let _=g.array;x=g.version;for(let w=0,y=_.length/3-1;w<y;w+=3){let I=w+0,A=w+1,U=w+2;p.push(I,A,A,U,U,I)}}else return;let m=new(pc(p)?Ds:Ps)(p,1);m.version=x;let u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){let p=s.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Ig(n,e,t){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,f){n.drawElements(i,f,s,p*a),t.update(f,i,1)}function l(p,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,p*a,g),t.update(f,i,g))}function h(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];t.update(m,i,1)}function d(p,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/a,f[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,p,0,x,0,g);let u=0;for(let _=0;_<g;_++)u+=f[_]*x[_];t.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Pg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Dg(n,e,t){let i=new WeakMap,r=new Tt;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,p=i.get(o);if(p===void 0||p.count!==d){let S=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let y=o.attributes.position.count*w,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*I*4*d),U=new Is(A,y,I,d);U.type=Wn,U.needsUpdate=!0;let L=w*4;for(let M=0;M<d;M++){let T=m[M],D=u[M],O=_[M],P=y*I*4*M;for(let N=0;N<T.count;N++){let z=N*L;f===!0&&(r.fromBufferAttribute(T,N),A[P+z+0]=r.x,A[P+z+1]=r.y,A[P+z+2]=r.z,A[P+z+3]=0),g===!0&&(r.fromBufferAttribute(D,N),A[P+z+4]=r.x,A[P+z+5]=r.y,A[P+z+6]=r.z,A[P+z+7]=0),x===!0&&(r.fromBufferAttribute(O,N),A[P+z+8]=r.x,A[P+z+9]=r.y,A[P+z+10]=r.z,A[P+z+11]=O.itemSize===4?r.w:1)}}p={count:d,texture:U,size:new Xe(y,I)},i.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function Lg(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var Fu=new cn,_u=new zs(1,1),zu=new Is,Ou=new Fa,Bu=new Us,yu=[],vu=[],Mu=new Float32Array(16),bu=new Float32Array(9),Su=new Float32Array(4);function ss(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=yu[r];if(s===void 0&&(s=new Float32Array(r),yu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qo(n,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ug(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ng(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function Fg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function zg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function Og(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,i))return;Su.set(i),n.uniformMatrix2fv(this.addr,!1,Su),Kt(t,i)}}function Bg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,i))return;bu.set(i),n.uniformMatrix3fv(this.addr,!1,bu),Kt(t,i)}}function kg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,i))return;Mu.set(i),n.uniformMatrix4fv(this.addr,!1,Mu),Kt(t,i)}}function Vg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function Hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function Wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function Xg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function Yg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function Zg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function Jg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(_u.compareFunction=uc,s=_u):s=Fu,t.setTexture2D(e||s,r)}function $g(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ou,r)}function Kg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bu,r)}function jg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zu,r)}function Qg(n){switch(n){case 5126:return Ug;case 35664:return Ng;case 35665:return Fg;case 35666:return zg;case 35674:return Og;case 35675:return Bg;case 35676:return kg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Hg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return jg}}function e0(n,e){n.uniform1fv(this.addr,e)}function t0(n,e){let t=ss(e,this.size,2);n.uniform2fv(this.addr,t)}function n0(n,e){let t=ss(e,this.size,3);n.uniform3fv(this.addr,t)}function i0(n,e){let t=ss(e,this.size,4);n.uniform4fv(this.addr,t)}function r0(n,e){let t=ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function s0(n,e){let t=ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function a0(n,e){let t=ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function o0(n,e){n.uniform1iv(this.addr,e)}function l0(n,e){n.uniform2iv(this.addr,e)}function c0(n,e){n.uniform3iv(this.addr,e)}function h0(n,e){n.uniform4iv(this.addr,e)}function u0(n,e){n.uniform1uiv(this.addr,e)}function d0(n,e){n.uniform2uiv(this.addr,e)}function f0(n,e){n.uniform3uiv(this.addr,e)}function p0(n,e){n.uniform4uiv(this.addr,e)}function m0(n,e,t){let i=this.cache,r=e.length,s=Qo(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Fu,s[a])}function g0(n,e,t){let i=this.cache,r=e.length,s=Qo(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ou,s[a])}function x0(n,e,t){let i=this.cache,r=e.length,s=Qo(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Bu,s[a])}function _0(n,e,t){let i=this.cache,r=e.length,s=Qo(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zu,s[a])}function y0(n){switch(n){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return r0;case 35675:return s0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return _0}}var Tc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qg(t.type)}},Ec=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y0(t.type)}},Ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},wc=/(\w+)(\])?(\[|\.)?/g;function wu(n,e){n.seq.push(e),n.map[e.id]=e}function v0(n,e,t){let i=n.name,r=i.length;for(wc.lastIndex=0;;){let s=wc.exec(i),a=wc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){wu(t,l===void 0?new Tc(o,n,e):new Ec(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Ac(o),wu(t,d)),t=d}}}var is=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);v0(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Tu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var M0=37297,b0=0;function S0(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Eu=new ct;function w0(n){wt._getMatrix(Eu,wt.workingColorSpace,n);let e=`mat3( ${Eu.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case Cs:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Au(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+S0(n.getShaderSource(e),o)}else return s}function T0(n,e){let t=w0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function E0(n,e){let t;switch(e){case Wh:t="Linear";break;case Xh:t="Reinhard";break;case qh:t="Cineon";break;case $r:t="ACESFilmic";break;case Zh:t="AgX";break;case Jh:t="Neutral";break;case Yh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ko=new k;function A0(){wt.getLuminanceCoefficients(Ko);let n=Ko.x.toFixed(4),e=Ko.y.toFixed(4),t=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function R0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function I0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ks(n){return n!==""}function Cu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ru(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(n){return n.replace(P0,L0)}var D0=new Map;function L0(n,e){let t=dt[e];if(t===void 0){let i=D0.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cc(t)}var U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(n){return n.replace(U0,N0)}function N0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function F0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jr?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function z0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rr:case sr:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function B0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tc:e="ENVMAP_BLENDING_MULTIPLY";break;case Gh:e="ENVMAP_BLENDING_MIX";break;case Hh:e="ENVMAP_BLENDING_ADD";break}return e}function k0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function V0(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=F0(t),l=z0(t),h=O0(t),d=B0(t),p=k0(t),f=C0(t),g=R0(s),x=r.createProgram(),m,u,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),u.length>0&&(u+=`
`)):(m=[Pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),u=[Pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?dt.tonemapping_pars_fragment:"",t.toneMapping!==xi?E0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,T0("linearToOutputTexel",t.outputColorSpace),A0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=Cc(a),a=Cu(a,t),a=Ru(a,t),o=Cc(o),o=Cu(o,t),o=Ru(o,t),a=Iu(a),o=Iu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let w=_+m+a,y=_+u+o,I=Tu(r,r.VERTEX_SHADER,w),A=Tu(r,r.FRAGMENT_SHADER,y);r.attachShader(x,I),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function U(T){if(n.debug.checkShaderErrors){let D=r.getProgramInfoLog(x)||"",O=r.getShaderInfoLog(I)||"",P=r.getShaderInfoLog(A)||"",N=D.trim(),z=O.trim(),Y=P.trim(),X=!0,oe=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,A);else{let ie=Au(r,I,"vertex"),ve=Au(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+N+`
`+ie+`
`+ve)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||Y==="")&&(oe=!1);oe&&(T.diagnostics={runnable:X,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(I),r.deleteShader(A),L=new is(r,x),S=I0(r,x)}let L;this.getUniforms=function(){return L===void 0&&U(this),L};let S;this.getAttributes=function(){return S===void 0&&U(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,M0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}var G0=0,Rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ic(e),t.set(e,i)),i}},Ic=class{constructor(e){this.id=G0++,this.code=e,this.usedTimes=0}};function H0(n,e,t,i,r,s,a){let o=new Vr,c=new Rc,l=new Set,h=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,T,D,O){let P=D.fog,N=O.geometry,z=S.isMeshStandardMaterial?D.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),X=Y&&Y.mapping===Ws?Y.image.height:null,oe=g[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ie=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ve=ie!==void 0?ie.length:0,Pe=0;N.morphAttributes.position!==void 0&&(Pe=1),N.morphAttributes.normal!==void 0&&(Pe=2),N.morphAttributes.color!==void 0&&(Pe=3);let He,rt,it,q;if(oe){let gt=Qn[oe];He=gt.vertexShader,rt=gt.fragmentShader}else He=S.vertexShader,rt=S.fragmentShader,c.update(S),it=c.getVertexShaderID(S),q=c.getFragmentShaderID(S);let $=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Ce=O.isBatchedMesh===!0,Me=!!S.map,yt=!!S.matcap,F=!!Y,Et=!!S.aoMap,Je=!!S.lightMap,ke=!!S.bumpMap,Ee=!!S.normalMap,Dt=!!S.displacementMap,Te=!!S.emissiveMap,Ye=!!S.metalnessMap,Ht=!!S.roughnessMap,mt=S.anisotropy>0,C=S.clearcoat>0,v=S.dispersion>0,Z=S.iridescence>0,ne=S.sheen>0,ae=S.transmission>0,ee=mt&&!!S.anisotropyMap,ze=C&&!!S.clearcoatMap,de=C&&!!S.clearcoatNormalMap,De=C&&!!S.clearcoatRoughnessMap,Ue=Z&&!!S.iridescenceMap,he=Z&&!!S.iridescenceThicknessMap,ge=ne&&!!S.sheenColorMap,Ze=ne&&!!S.sheenRoughnessMap,Le=!!S.specularMap,xe=!!S.specularColorMap,nt=!!S.specularIntensityMap,V=ae&&!!S.transmissionMap,le=ae&&!!S.thicknessMap,me=!!S.gradientMap,Ie=!!S.alphaMap,ce=S.alphaTest>0,re=!!S.alphaHash,Ae=!!S.extensions,$e=xi;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&($e=n.toneMapping);let Rt={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:He,fragmentShader:rt,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Yi,alphaToCoverage:!!S.alphaToCoverage,map:Me,matcap:yt,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:X,aoMap:Et,lightMap:Je,bumpMap:ke,normalMap:Ee,displacementMap:p&&Dt,emissiveMap:Te,normalMapObjectSpace:Ee&&S.normalMapType===Qh,normalMapTangentSpace:Ee&&S.normalMapType===hc,metalnessMap:Ye,roughnessMap:Ht,anisotropy:mt,anisotropyMap:ee,clearcoat:C,clearcoatMap:ze,clearcoatNormalMap:de,clearcoatRoughnessMap:De,dispersion:v,iridescence:Z,iridescenceMap:Ue,iridescenceThicknessMap:he,sheen:ne,sheenColorMap:ge,sheenRoughnessMap:Ze,specularMap:Le,specularColorMap:xe,specularIntensityMap:nt,transmission:ae,transmissionMap:V,thicknessMap:le,gradientMap:me,opaque:S.transparent===!1&&S.blending===Xi&&S.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ce,alphaHash:re,combine:S.combine,mapUv:Me&&x(S.map.channel),aoMapUv:Et&&x(S.aoMap.channel),lightMapUv:Je&&x(S.lightMap.channel),bumpMapUv:ke&&x(S.bumpMap.channel),normalMapUv:Ee&&x(S.normalMap.channel),displacementMapUv:Dt&&x(S.displacementMap.channel),emissiveMapUv:Te&&x(S.emissiveMap.channel),metalnessMapUv:Ye&&x(S.metalnessMap.channel),roughnessMapUv:Ht&&x(S.roughnessMap.channel),anisotropyMapUv:ee&&x(S.anisotropyMap.channel),clearcoatMapUv:ze&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&x(S.sheenRoughnessMap.channel),specularMapUv:Le&&x(S.specularMap.channel),specularColorMapUv:xe&&x(S.specularColorMap.channel),specularIntensityMapUv:nt&&x(S.specularIntensityMap.channel),transmissionMapUv:V&&x(S.transmissionMap.channel),thicknessMapUv:le&&x(S.thicknessMap.channel),alphaMapUv:Ie&&x(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ee||mt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Me||Ie),fog:!!P,useFog:S.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Pe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:Me&&S.map.isVideoTexture===!0&&wt.getTransfer(S.map.colorSpace)===Ft,decodeVideoTextureEmissive:Te&&S.emissiveMap.isVideoTexture===!0&&wt.getTransfer(S.emissiveMap.colorSpace)===Ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wt,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ae&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&S.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function u(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let T in S.defines)M.push(T),M.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(_(M,S),w(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function w(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){let M=g[S.type],T;if(M){let D=Qn[M];T=Zo.clone(D.uniforms)}else T=S.uniforms;return T}function I(S,M){let T;for(let D=0,O=h.length;D<O;D++){let P=h[D];if(P.cacheKey===M){T=P,++T.usedTimes;break}}return T===void 0&&(T=new V0(n,M,S,s),h.push(T)),T}function A(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function U(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:I,releaseProgram:A,releaseShaderCache:U,programs:h,dispose:L}}function W0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function X0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Du(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lu(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,p,f,g,x,m){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},n[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function o(d,p,f,g,x,m){let u=a(d,p,f,g,x,m);f.transmission>0?i.push(u):f.transparent===!0?r.push(u):t.push(u)}function c(d,p,f,g,x,m){let u=a(d,p,f,g,x,m);f.transmission>0?i.unshift(u):f.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,p){t.length>1&&t.sort(d||X0),i.length>1&&i.sort(p||Du),r.length>1&&r.sort(p||Du)}function h(){for(let d=e,p=n.length;d<p;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function q0(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new Lu,n.set(i,[a])):r>=s.length?(a=new Lu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Y0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new tt};break;case"SpotLight":t={position:new k,direction:new k,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Z0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var J0=0;function $0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function K0(n){let e=new Y0,t=Z0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let r=new k,s=new Pt,a=new Pt;function o(l){let h=0,d=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,u=0,_=0,w=0,y=0,I=0,A=0,U=0;l.sort($0);for(let S=0,M=l.length;S<M;S++){let T=l[S],D=T.color,O=T.intensity,P=T.distance,N=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=D.r*O,d+=D.g*O,p+=D.b*O;else if(T.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(T.sh.coefficients[z],O);U++}else if(T.isDirectionalLight){let z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Y=T.shadow,X=t.get(T);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=T.shadow.matrix,_++}i.directional[f]=z,f++}else if(T.isSpotLight){let z=e.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(D).multiplyScalar(O),z.distance=P,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,i.spot[x]=z;let Y=T.shadow;if(T.map&&(i.spotLightMap[I]=T.map,I++,Y.updateMatrices(T),T.castShadow&&A++),i.spotLightMatrix[x]=Y.matrix,T.castShadow){let X=t.get(T);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=N,y++}x++}else if(T.isRectAreaLight){let z=e.get(T);z.color.copy(D).multiplyScalar(O),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=z,m++}else if(T.isPointLight){let z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){let Y=T.shadow,X=t.get(T);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=T.shadow.matrix,w++}i.point[g]=z,g++}else if(T.isHemisphereLight){let z=e.get(T);z.skyColor.copy(T.color).multiplyScalar(O),z.groundColor.copy(T.groundColor).multiplyScalar(O),i.hemi[u]=z,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;let L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==_||L.numPointShadows!==w||L.numSpotShadows!==y||L.numSpotMaps!==I||L.numLightProbes!==U)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=U,L.directionalLength=f,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=_,L.numPointShadows=w,L.numSpotShadows=y,L.numSpotMaps=I,L.numLightProbes=U,i.version=J0++)}function c(l,h){let d=0,p=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,_=l.length;u<_;u++){let w=l[u];if(w.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(w.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){let y=i.point[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),p++}else if(w.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function Uu(n){let e=new K0(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function j0(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Uu(n),e.set(r,[o])):s>=a.length?(o=new Uu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
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
}`;function tx(n,e,t){let i=new qr,r=new Xe,s=new Xe,a=new Tt,o=new Ha({depthPacking:jh}),c=new Wa,l={},h=t.maxTextureSize,d={[ui]:rn,[rn]:ui,[Wt]:Wt},p=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Q0,fragmentShader:ex}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new Lt;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let u=this.type;this.render=function(A,U,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),D=n.state;D.setBlending(gi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=u!==jn&&this.type===jn,P=u===jn&&this.type!==jn;for(let N=0,z=A.length;N<z;N++){let Y=A[N],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let oe=X.getFrameExtents();if(r.multiply(oe),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,X.mapSize.y=s.y)),X.map===null||O===!0||P===!0){let ve=this.type!==jn?{minFilter:gn,magFilter:gn}:{};X.map!==null&&X.map.dispose(),X.map=new Jn(r.x,r.y,ve),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let ie=X.getViewportCount();for(let ve=0;ve<ie;ve++){let Pe=X.getViewport(ve);a.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),D.viewport(a),X.updateMatrices(Y,ve),i=X.getFrustum(),y(U,L,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===jn&&_(X,L),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,T)};function _(A,U){let L=e.update(x);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jn(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(U,null,L,p,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(U,null,L,f,x,null)}function w(A,U,L,S){let M=null,T=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)M=T;else if(M=L.isPointLight===!0?c:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let D=M.uuid,O=U.uuid,P=l[D];P===void 0&&(P={},l[D]=P);let N=P[O];N===void 0&&(N=M.clone(),P[O]=N,U.addEventListener("dispose",I)),M=N}if(M.visible=U.visible,M.wireframe=U.wireframe,S===jn?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:d[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=n.properties.get(M);D.light=L}return M}function y(A,U,L,S,M){if(A.visible===!1)return;if(A.layers.test(U.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===jn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let O=e.update(A),P=A.material;if(Array.isArray(P)){let N=O.groups;for(let z=0,Y=N.length;z<Y;z++){let X=N[z],oe=P[X.materialIndex];if(oe&&oe.visible){let ie=w(A,oe,S,M);A.onBeforeShadow(n,A,U,L,O,ie,X),n.renderBufferDirect(L,null,O,ie,A,X),A.onAfterShadow(n,A,U,L,O,ie,X)}}}else if(P.visible){let N=w(A,P,S,M);A.onBeforeShadow(n,A,U,L,O,N,null),n.renderBufferDirect(L,null,O,N,A,null),A.onAfterShadow(n,A,U,L,O,N,null)}}let D=A.children;for(let O=0,P=D.length;O<P;O++)y(D[O],U,L,S,M)}function I(A){A.target.removeEventListener("dispose",I);for(let L in l){let S=l[L],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var nx={[no]:io,[ro]:oo,[so]:lo,[qi]:ao,[io]:no,[oo]:ro,[lo]:so,[ao]:qi};function ix(n,e){function t(){let V=!1,le=new Tt,me=null,Ie=new Tt(0,0,0,0);return{setMask:function(ce){me!==ce&&!V&&(n.colorMask(ce,ce,ce,ce),me=ce)},setLocked:function(ce){V=ce},setClear:function(ce,re,Ae,$e,Rt){Rt===!0&&(ce*=$e,re*=$e,Ae*=$e),le.set(ce,re,Ae,$e),Ie.equals(le)===!1&&(n.clearColor(ce,re,Ae,$e),Ie.copy(le))},reset:function(){V=!1,me=null,Ie.set(-1,0,0,0)}}}function i(){let V=!1,le=!1,me=null,Ie=null,ce=null;return{setReversed:function(re){if(le!==re){let Ae=e.get("EXT_clip_control");re?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),le=re;let $e=ce;ce=null,this.setClear($e)}},getReversed:function(){return le},setTest:function(re){re?$(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(re){me!==re&&!V&&(n.depthMask(re),me=re)},setFunc:function(re){if(le&&(re=nx[re]),Ie!==re){switch(re){case no:n.depthFunc(n.NEVER);break;case io:n.depthFunc(n.ALWAYS);break;case ro:n.depthFunc(n.LESS);break;case qi:n.depthFunc(n.LEQUAL);break;case so:n.depthFunc(n.EQUAL);break;case ao:n.depthFunc(n.GEQUAL);break;case oo:n.depthFunc(n.GREATER);break;case lo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=re}},setLocked:function(re){V=re},setClear:function(re){ce!==re&&(le&&(re=1-re),n.clearDepth(re),ce=re)},reset:function(){V=!1,me=null,Ie=null,ce=null,le=!1}}}function r(){let V=!1,le=null,me=null,Ie=null,ce=null,re=null,Ae=null,$e=null,Rt=null;return{setTest:function(gt){V||(gt?$(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(gt){le!==gt&&!V&&(n.stencilMask(gt),le=gt)},setFunc:function(gt,Mn,pn){(me!==gt||Ie!==Mn||ce!==pn)&&(n.stencilFunc(gt,Mn,pn),me=gt,Ie=Mn,ce=pn)},setOp:function(gt,Mn,pn){(re!==gt||Ae!==Mn||$e!==pn)&&(n.stencilOp(gt,Mn,pn),re=gt,Ae=Mn,$e=pn)},setLocked:function(gt){V=gt},setClear:function(gt){Rt!==gt&&(n.clearStencil(gt),Rt=gt)},reset:function(){V=!1,le=null,me=null,Ie=null,ce=null,re=null,Ae=null,$e=null,Rt=null}}}let s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap,h={},d={},p=new WeakMap,f=[],g=null,x=!1,m=null,u=null,_=null,w=null,y=null,I=null,A=null,U=new tt(0,0,0),L=0,S=!1,M=null,T=null,D=null,O=null,P=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Y=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=Y>=2);let oe=null,ie={},ve=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),He=new Tt().fromArray(ve),rt=new Tt().fromArray(Pe);function it(V,le,me,Ie){let ce=new Uint8Array(4),re=n.createTexture();n.bindTexture(V,re),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<me;Ae++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(le+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return re}let q={};q[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(n.DEPTH_TEST),a.setFunc(qi),ke(!1),Ee($l),$(n.CULL_FACE),Et(gi);function $(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function pe(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function Fe(V,le){return d[V]!==le?(n.bindFramebuffer(V,le),d[V]=le,V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Ce(V,le){let me=f,Ie=!1;if(V){me=p.get(le),me===void 0&&(me=[],p.set(le,me));let ce=V.textures;if(me.length!==ce.length||me[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Ae=ce.length;re<Ae;re++)me[re]=n.COLOR_ATTACHMENT0+re;me.length=ce.length,Ie=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(me)}function Me(V){return g!==V?(n.useProgram(V),g=V,!0):!1}let yt={[Ii]:n.FUNC_ADD,[Th]:n.FUNC_SUBTRACT,[Eh]:n.FUNC_REVERSE_SUBTRACT};yt[Ah]=n.MIN,yt[Ch]=n.MAX;let F={[Rh]:n.ZERO,[Ih]:n.ONE,[Ph]:n.SRC_COLOR,[Ra]:n.SRC_ALPHA,[zh]:n.SRC_ALPHA_SATURATE,[Nh]:n.DST_COLOR,[Lh]:n.DST_ALPHA,[Dh]:n.ONE_MINUS_SRC_COLOR,[Ia]:n.ONE_MINUS_SRC_ALPHA,[Fh]:n.ONE_MINUS_DST_COLOR,[Uh]:n.ONE_MINUS_DST_ALPHA,[Oh]:n.CONSTANT_COLOR,[Bh]:n.ONE_MINUS_CONSTANT_COLOR,[kh]:n.CONSTANT_ALPHA,[Vh]:n.ONE_MINUS_CONSTANT_ALPHA};function Et(V,le,me,Ie,ce,re,Ae,$e,Rt,gt){if(V===gi){x===!0&&(pe(n.BLEND),x=!1);return}if(x===!1&&($(n.BLEND),x=!0),V!==wh){if(V!==m||gt!==S){if((u!==Ii||y!==Ii)&&(n.blendEquation(n.FUNC_ADD),u=Ii,y=Ii),gt)switch(V){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFunc(n.ONE,n.ONE);break;case Ql:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ec:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ql:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,w=null,I=null,A=null,U.set(0,0,0),L=0,m=V,S=gt}return}ce=ce||le,re=re||me,Ae=Ae||Ie,(le!==u||ce!==y)&&(n.blendEquationSeparate(yt[le],yt[ce]),u=le,y=ce),(me!==_||Ie!==w||re!==I||Ae!==A)&&(n.blendFuncSeparate(F[me],F[Ie],F[re],F[Ae]),_=me,w=Ie,I=re,A=Ae),($e.equals(U)===!1||Rt!==L)&&(n.blendColor($e.r,$e.g,$e.b,Rt),U.copy($e),L=Rt),m=V,S=!1}function Je(V,le){V.side===Wt?pe(n.CULL_FACE):$(n.CULL_FACE);let me=V.side===rn;le&&(me=!me),ke(me),V.blending===Xi&&V.transparent===!1?Et(gi):Et(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);let Ie=V.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Te(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(V){M!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),M=V)}function Ee(V){V!==bh?($(n.CULL_FACE),V!==T&&(V===$l?n.cullFace(n.BACK):V===Sh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),T=V}function Dt(V){V!==D&&(z&&n.lineWidth(V),D=V)}function Te(V,le,me){V?($(n.POLYGON_OFFSET_FILL),(O!==le||P!==me)&&(n.polygonOffset(le,me),O=le,P=me)):pe(n.POLYGON_OFFSET_FILL)}function Ye(V){V?$(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Ht(V){V===void 0&&(V=n.TEXTURE0+N-1),oe!==V&&(n.activeTexture(V),oe=V)}function mt(V,le,me){me===void 0&&(oe===null?me=n.TEXTURE0+N-1:me=oe);let Ie=ie[me];Ie===void 0&&(Ie={type:void 0,texture:void 0},ie[me]=Ie),(Ie.type!==V||Ie.texture!==le)&&(oe!==me&&(n.activeTexture(me),oe=me),n.bindTexture(V,le||q[V]),Ie.type=V,Ie.texture=le)}function C(){let V=ie[oe];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ne(){try{n.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{n.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{n.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{n.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{n.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{n.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{n.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(V){He.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),He.copy(V))}function Ze(V){rt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),rt.copy(V))}function Le(V,le){let me=l.get(le);me===void 0&&(me=new WeakMap,l.set(le,me));let Ie=me.get(V);Ie===void 0&&(Ie=n.getUniformBlockIndex(le,V.name),me.set(V,Ie))}function xe(V,le){let Ie=l.get(le).get(V);c.get(le)!==Ie&&(n.uniformBlockBinding(le,Ie,V.__bindingPointIndex),c.set(le,Ie))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,ie={},d={},p=new WeakMap,f=[],g=null,x=!1,m=null,u=null,_=null,w=null,y=null,I=null,A=null,U=new tt(0,0,0),L=0,S=!1,M=null,T=null,D=null,O=null,P=null,He.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:pe,bindFramebuffer:Fe,drawBuffers:Ce,useProgram:Me,setBlending:Et,setMaterial:Je,setFlipSided:ke,setCullFace:Ee,setLineWidth:Dt,setPolygonOffset:Te,setScissorTest:Ye,activeTexture:Ht,bindTexture:mt,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:Z,texImage2D:Ue,texImage3D:he,updateUBOMapping:Le,uniformBlockBinding:xe,texStorage2D:de,texStorage3D:De,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:ee,compressedTexSubImage3D:ze,scissor:ge,viewport:Ze,reset:nt}}function rx(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,h=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return f?new OffscreenCanvas(C,v):zr("canvas")}function x(C,v,Z){let ne=1,ae=mt(C);if((ae.width>Z||ae.height>Z)&&(ne=Z/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ee=Math.floor(ne*ae.width),ze=Math.floor(ne*ae.height);d===void 0&&(d=g(ee,ze));let de=v?g(ee,ze):d;return de.width=ee,de.height=ze,de.getContext("2d").drawImage(C,0,0,ee,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ee+"x"+ze+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){n.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(C,v,Z,ne,ae=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=v;if(v===n.RED&&(Z===n.FLOAT&&(ee=n.R32F),Z===n.HALF_FLOAT&&(ee=n.R16F),Z===n.UNSIGNED_BYTE&&(ee=n.R8)),v===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ee=n.R8UI),Z===n.UNSIGNED_SHORT&&(ee=n.R16UI),Z===n.UNSIGNED_INT&&(ee=n.R32UI),Z===n.BYTE&&(ee=n.R8I),Z===n.SHORT&&(ee=n.R16I),Z===n.INT&&(ee=n.R32I)),v===n.RG&&(Z===n.FLOAT&&(ee=n.RG32F),Z===n.HALF_FLOAT&&(ee=n.RG16F),Z===n.UNSIGNED_BYTE&&(ee=n.RG8)),v===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ee=n.RG8UI),Z===n.UNSIGNED_SHORT&&(ee=n.RG16UI),Z===n.UNSIGNED_INT&&(ee=n.RG32UI),Z===n.BYTE&&(ee=n.RG8I),Z===n.SHORT&&(ee=n.RG16I),Z===n.INT&&(ee=n.RG32I)),v===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),Z===n.UNSIGNED_INT&&(ee=n.RGB32UI),Z===n.BYTE&&(ee=n.RGB8I),Z===n.SHORT&&(ee=n.RGB16I),Z===n.INT&&(ee=n.RGB32I)),v===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),Z===n.UNSIGNED_INT&&(ee=n.RGBA32UI),Z===n.BYTE&&(ee=n.RGBA8I),Z===n.SHORT&&(ee=n.RGBA16I),Z===n.INT&&(ee=n.RGBA32I)),v===n.RGB&&(Z===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),v===n.RGBA){let ze=ae?Cs:wt.getTransfer(ne);Z===n.FLOAT&&(ee=n.RGBA32F),Z===n.HALF_FLOAT&&(ee=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ee=ze===Ft?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(C,v){let Z;return C?v===null||v===Fi||v===Qr?Z=n.DEPTH24_STENCIL8:v===Wn?Z=n.DEPTH32F_STENCIL8:v===Kr&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fi||v===Qr?Z=n.DEPTH_COMPONENT24:v===Wn?Z=n.DEPTH_COMPONENT32F:v===Kr&&(Z=n.DEPTH_COMPONENT16),Z}function I(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==gn&&C.minFilter!==kn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){let v=C.target;v.removeEventListener("dispose",A),L(v),v.isVideoTexture&&h.delete(v)}function U(C){let v=C.target;v.removeEventListener("dispose",U),M(v)}function L(C){let v=i.get(C);if(v.__webglInit===void 0)return;let Z=C.source,ne=p.get(Z);if(ne){let ae=ne[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&S(C),Object.keys(ne).length===0&&p.delete(Z)}i.remove(C)}function S(C){let v=i.get(C);n.deleteTexture(v.__webglTexture);let Z=C.source,ne=p.get(Z);delete ne[v.__cacheKey],a.memory.textures--}function M(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(v.__webglFramebuffer[ne]))for(let ae=0;ae<v.__webglFramebuffer[ne].length;ae++)n.deleteFramebuffer(v.__webglFramebuffer[ne][ae]);else n.deleteFramebuffer(v.__webglFramebuffer[ne]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ne])}else{if(Array.isArray(v.__webglFramebuffer))for(let ne=0;ne<v.__webglFramebuffer.length;ne++)n.deleteFramebuffer(v.__webglFramebuffer[ne]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ne=0;ne<v.__webglColorRenderbuffer.length;ne++)v.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ne]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Z=C.textures;for(let ne=0,ae=Z.length;ne<ae;ne++){let ee=i.get(Z[ne]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(Z[ne])}i.remove(C)}let T=0;function D(){T=0}function O(){let C=T;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),T+=1,C}function P(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function N(C,v){let Z=i.get(C);if(C.isVideoTexture&&Ye(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Z.__version!==C.version){let ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(Z,C,v);return}}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+v)}function z(C,v){let Z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){q(Z,C,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+v)}function Y(C,v){let Z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){q(Z,C,v);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+v)}function X(C,v){let Z=i.get(C);if(C.version>0&&Z.__version!==C.version){$(Z,C,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+v)}let oe={[Ur]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[Pa]:n.MIRRORED_REPEAT},ie={[gn]:n.NEAREST,[$h]:n.NEAREST_MIPMAP_NEAREST,[Xs]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[uo]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},ve={[eu]:n.NEVER,[au]:n.ALWAYS,[tu]:n.LESS,[uc]:n.LEQUAL,[nu]:n.EQUAL,[su]:n.GEQUAL,[iu]:n.GREATER,[ru]:n.NOTEQUAL};function Pe(C,v){if(v.type===Wn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===kn||v.magFilter===uo||v.magFilter===Xs||v.magFilter===Ni||v.minFilter===kn||v.minFilter===uo||v.minFilter===Xs||v.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,oe[v.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,oe[v.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,oe[v.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ie[v.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ie[v.minFilter]),v.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===gn||v.minFilter!==Xs&&v.minFilter!==Ni||v.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function He(C,v){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));let ne=v.source,ae=p.get(ne);ae===void 0&&(ae={},p.set(ne,ae));let ee=P(v);if(ee!==C.__cacheKey){ae[ee]===void 0&&(ae[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ae[ee].usedTimes++;let ze=ae[C.__cacheKey];ze!==void 0&&(ae[C.__cacheKey].usedTimes--,ze.usedTimes===0&&S(v)),C.__cacheKey=ee,C.__webglTexture=ae[ee].texture}return Z}function rt(C,v,Z){return Math.floor(Math.floor(C/Z)/v)}function it(C,v,Z,ne){let ee=C.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,Z,ne,v.data);else{ee.sort((he,ge)=>he.start-ge.start);let ze=0;for(let he=1;he<ee.length;he++){let ge=ee[ze],Ze=ee[he],Le=ge.start+ge.count,xe=rt(Ze.start,v.width,4),nt=rt(ge.start,v.width,4);Ze.start<=Le+1&&xe===nt&&rt(Ze.start+Ze.count-1,v.width,4)===xe?ge.count=Math.max(ge.count,Ze.start+Ze.count-ge.start):(++ze,ee[ze]=Ze)}ee.length=ze+1;let de=n.getParameter(n.UNPACK_ROW_LENGTH),De=n.getParameter(n.UNPACK_SKIP_PIXELS),Ue=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let he=0,ge=ee.length;he<ge;he++){let Ze=ee[he],Le=Math.floor(Ze.start/4),xe=Math.ceil(Ze.count/4),nt=Le%v.width,V=Math.floor(Le/v.width),le=xe,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,nt,V,le,me,Z,ne,v.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function q(C,v,Z){let ne=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=n.TEXTURE_3D);let ae=He(C,v),ee=v.source;t.bindTexture(ne,C.__webglTexture,n.TEXTURE0+Z);let ze=i.get(ee);if(ee.version!==ze.__version||ae===!0){t.activeTexture(n.TEXTURE0+Z);let de=wt.getPrimaries(wt.workingColorSpace),De=v.colorSpace===Xn?null:wt.getPrimaries(v.colorSpace),Ue=v.colorSpace===Xn||de===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let he=x(v.image,!1,r.maxTextureSize);he=Ht(v,he);let ge=s.convert(v.format,v.colorSpace),Ze=s.convert(v.type),Le=w(v.internalFormat,ge,Ze,v.colorSpace,v.isVideoTexture);Pe(ne,v);let xe,nt=v.mipmaps,V=v.isVideoTexture!==!0,le=ze.__version===void 0||ae===!0,me=ee.dataReady,Ie=I(v,he);if(v.isDepthTexture)Le=y(v.format===es,v.type),le&&(V?t.texStorage2D(n.TEXTURE_2D,1,Le,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Le,he.width,he.height,0,ge,Ze,null));else if(v.isDataTexture)if(nt.length>0){V&&le&&t.texStorage2D(n.TEXTURE_2D,Ie,Le,nt[0].width,nt[0].height);for(let ce=0,re=nt.length;ce<re;ce++)xe=nt[ce],V?me&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,xe.width,xe.height,ge,Ze,xe.data):t.texImage2D(n.TEXTURE_2D,ce,Le,xe.width,xe.height,0,ge,Ze,xe.data);v.generateMipmaps=!1}else V?(le&&t.texStorage2D(n.TEXTURE_2D,Ie,Le,he.width,he.height),me&&it(v,he,ge,Ze)):t.texImage2D(n.TEXTURE_2D,0,Le,he.width,he.height,0,ge,Ze,he.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){V&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Le,nt[0].width,nt[0].height,he.depth);for(let ce=0,re=nt.length;ce<re;ce++)if(xe=nt[ce],v.format!==Dn)if(ge!==null)if(V){if(me)if(v.layerUpdates.size>0){let Ae=_c(xe.width,xe.height,v.format,v.type);for(let $e of v.layerUpdates){let Rt=xe.data.subarray($e*Ae/xe.data.BYTES_PER_ELEMENT,($e+1)*Ae/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,$e,xe.width,xe.height,1,ge,Rt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,xe.width,xe.height,he.depth,ge,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Le,xe.width,xe.height,he.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,xe.width,xe.height,he.depth,ge,Ze,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Le,xe.width,xe.height,he.depth,0,ge,Ze,xe.data)}else{V&&le&&t.texStorage2D(n.TEXTURE_2D,Ie,Le,nt[0].width,nt[0].height);for(let ce=0,re=nt.length;ce<re;ce++)xe=nt[ce],v.format!==Dn?ge!==null?V?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,xe.width,xe.height,ge,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?me&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,xe.width,xe.height,ge,Ze,xe.data):t.texImage2D(n.TEXTURE_2D,ce,Le,xe.width,xe.height,0,ge,Ze,xe.data)}else if(v.isDataArrayTexture)if(V){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Le,he.width,he.height,he.depth),me)if(v.layerUpdates.size>0){let ce=_c(he.width,he.height,v.format,v.type);for(let re of v.layerUpdates){let Ae=he.data.subarray(re*ce/he.data.BYTES_PER_ELEMENT,(re+1)*ce/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,he.width,he.height,1,ge,Ze,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ge,Ze,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,he.width,he.height,he.depth,0,ge,Ze,he.data);else if(v.isData3DTexture)V?(le&&t.texStorage3D(n.TEXTURE_3D,Ie,Le,he.width,he.height,he.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ge,Ze,he.data)):t.texImage3D(n.TEXTURE_3D,0,Le,he.width,he.height,he.depth,0,ge,Ze,he.data);else if(v.isFramebufferTexture){if(le)if(V)t.texStorage2D(n.TEXTURE_2D,Ie,Le,he.width,he.height);else{let ce=he.width,re=he.height;for(let Ae=0;Ae<Ie;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Le,ce,re,0,ge,Ze,null),ce>>=1,re>>=1}}else if(nt.length>0){if(V&&le){let ce=mt(nt[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Le,ce.width,ce.height)}for(let ce=0,re=nt.length;ce<re;ce++)xe=nt[ce],V?me&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ge,Ze,xe):t.texImage2D(n.TEXTURE_2D,ce,Le,ge,Ze,xe);v.generateMipmaps=!1}else if(V){if(le){let ce=mt(he);t.texStorage2D(n.TEXTURE_2D,Ie,Le,ce.width,ce.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ze,he)}else t.texImage2D(n.TEXTURE_2D,0,Le,ge,Ze,he);m(v)&&u(ne),ze.__version=ee.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function $(C,v,Z){if(v.image.length!==6)return;let ne=He(C,v),ae=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Z);let ee=i.get(ae);if(ae.version!==ee.__version||ne===!0){t.activeTexture(n.TEXTURE0+Z);let ze=wt.getPrimaries(wt.workingColorSpace),de=v.colorSpace===Xn?null:wt.getPrimaries(v.colorSpace),De=v.colorSpace===Xn||ze===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Ue=v.isCompressedTexture||v.image[0].isCompressedTexture,he=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let re=0;re<6;re++)!Ue&&!he?ge[re]=x(v.image[re],!0,r.maxCubemapSize):ge[re]=he?v.image[re].image:v.image[re],ge[re]=Ht(v,ge[re]);let Ze=ge[0],Le=s.convert(v.format,v.colorSpace),xe=s.convert(v.type),nt=w(v.internalFormat,Le,xe,v.colorSpace),V=v.isVideoTexture!==!0,le=ee.__version===void 0||ne===!0,me=ae.dataReady,Ie=I(v,Ze);Pe(n.TEXTURE_CUBE_MAP,v);let ce;if(Ue){V&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,nt,Ze.width,Ze.height);for(let re=0;re<6;re++){ce=ge[re].mipmaps;for(let Ae=0;Ae<ce.length;Ae++){let $e=ce[Ae];v.format!==Dn?Le!==null?V?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,0,0,$e.width,$e.height,Le,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,nt,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,0,0,$e.width,$e.height,Le,xe,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,nt,$e.width,$e.height,0,Le,xe,$e.data)}}}else{if(ce=v.mipmaps,V&&le){ce.length>0&&Ie++;let re=mt(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,nt,re.width,re.height)}for(let re=0;re<6;re++)if(he){V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ge[re].width,ge[re].height,Le,xe,ge[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,nt,ge[re].width,ge[re].height,0,Le,xe,ge[re].data);for(let Ae=0;Ae<ce.length;Ae++){let Rt=ce[Ae].image[re].image;V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,0,0,Rt.width,Rt.height,Le,xe,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,nt,Rt.width,Rt.height,0,Le,xe,Rt.data)}}else{V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le,xe,ge[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,nt,Le,xe,ge[re]);for(let Ae=0;Ae<ce.length;Ae++){let $e=ce[Ae];V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,0,0,Le,xe,$e.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,nt,Le,xe,$e.image[re])}}}m(v)&&u(n.TEXTURE_CUBE_MAP),ee.__version=ae.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function pe(C,v,Z,ne,ae,ee){let ze=s.convert(Z.format,Z.colorSpace),de=s.convert(Z.type),De=w(Z.internalFormat,ze,de,Z.colorSpace),Ue=i.get(v),he=i.get(Z);if(he.__renderTarget=v,!Ue.__hasExternalTextures){let ge=Math.max(1,v.width>>ee),Ze=Math.max(1,v.height>>ee);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,ee,De,ge,Ze,v.depth,0,ze,de,null):t.texImage2D(ae,ee,De,ge,Ze,0,ze,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Te(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ae,he.__webglTexture,0,Dt(v)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ae,he.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(C,v,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),v.depthBuffer){let ne=v.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,ee=y(v.stencilBuffer,ae),ze=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=Dt(v);Te(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,ee,v.width,v.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,ee,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ee,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ze,n.RENDERBUFFER,C)}else{let ne=v.textures;for(let ae=0;ae<ne.length;ae++){let ee=ne[ae],ze=s.convert(ee.format,ee.colorSpace),de=s.convert(ee.type),De=w(ee.internalFormat,ze,de,ee.colorSpace),Ue=Dt(v);Z&&Te(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,De,v.width,v.height):Te(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,De,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,De,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=i.get(v.depthTexture);ne.__renderTarget=v,(!ne.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),N(v.depthTexture,0);let ae=ne.__webglTexture,ee=Dt(v);if(v.depthTexture.format===Nr)Te(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(v.depthTexture.format===es)Te(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Me(C){let v=i.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let ne=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){let ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=ne}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");let ne=C.texture.mipmaps;ne&&ne.length>0?Ce(v.__webglFramebuffer[0],C):Ce(v.__webglFramebuffer,C)}else if(Z){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=n.createRenderbuffer(),Fe(v.__webglDepthbuffer[ne],C,!1);else{let ae=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ee)}}else{let ne=C.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Fe(v.__webglDepthbuffer,C,!1);else{let ae=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(C,v,Z){let ne=i.get(C);v!==void 0&&pe(ne.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Me(C)}function F(C){let v=C.texture,Z=i.get(C),ne=i.get(v);C.addEventListener("dispose",U);let ae=C.textures,ee=C.isWebGLCubeRenderTarget===!0,ze=ae.length>1;if(ze||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=v.version,a.memory.textures++),ee){Z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer[de]=[];for(let De=0;De<v.mipmaps.length;De++)Z.__webglFramebuffer[de][De]=n.createFramebuffer()}else Z.__webglFramebuffer[de]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)Z.__webglFramebuffer[de]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(ze)for(let de=0,De=ae.length;de<De;de++){let Ue=i.get(ae[de]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Te(C)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){let De=ae[de];Z.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[de]);let Ue=s.convert(De.format,De.colorSpace),he=s.convert(De.type),ge=w(De.internalFormat,Ue,he,De.colorSpace,C.isXRRenderTarget===!0),Ze=Dt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,ge,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Z.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(Z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let De=0;De<v.mipmaps.length;De++)pe(Z.__webglFramebuffer[de][De],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De);else pe(Z.__webglFramebuffer[de],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(v)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let de=0,De=ae.length;de<De;de++){let Ue=ae[de],he=i.get(Ue),ge=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,he.__webglTexture),Pe(ge,Ue),pe(Z.__webglFramebuffer,C,Ue,n.COLOR_ATTACHMENT0+de,ge,0),m(Ue)&&u(ge)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ne.__webglTexture),Pe(de,v),v.mipmaps&&v.mipmaps.length>0)for(let De=0;De<v.mipmaps.length;De++)pe(Z.__webglFramebuffer[De],C,v,n.COLOR_ATTACHMENT0,de,De);else pe(Z.__webglFramebuffer,C,v,n.COLOR_ATTACHMENT0,de,0);m(v)&&u(de),t.unbindTexture()}C.depthBuffer&&Me(C)}function Et(C){let v=C.textures;for(let Z=0,ne=v.length;Z<ne;Z++){let ae=v[Z];if(m(ae)){let ee=_(C),ze=i.get(ae).__webglTexture;t.bindTexture(ee,ze),u(ee),t.unbindTexture()}}}let Je=[],ke=[];function Ee(C){if(C.samples>0){if(Te(C)===!1){let v=C.textures,Z=C.width,ne=C.height,ae=n.COLOR_BUFFER_BIT,ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ze=i.get(C),de=v.length>1;if(de)for(let Ue=0;Ue<v.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);let De=C.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ue=0;Ue<v.length;Ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Ue]);let he=i.get(v[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,Z,ne,0,0,Z,ne,ae,n.NEAREST),c===!0&&(Je.length=0,ke.length=0,Je.push(n.COLOR_ATTACHMENT0+Ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Je.push(ee),ke.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Ue=0;Ue<v.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Ue]);let he=i.get(v[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let v=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Dt(C){return Math.min(r.maxSamples,C.samples)}function Te(C){let v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ye(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function Ht(C,v){let Z=C.colorSpace,ne=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==Yi&&Z!==Xn&&(wt.getTransfer(Z)===Ft?(ne!==Dn||ae!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),v}function mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=N,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=yt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Te}function sx(n,e){function t(i,r=Xn){let s,a=wt.getTransfer(r);if(i===Hn)return n.UNSIGNED_BYTE;if(i===po)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ac)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ic)return n.BYTE;if(i===rc)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===fo)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===jr)return n.HALF_FLOAT;if(i===oc)return n.ALPHA;if(i===lc)return n.RGB;if(i===Dn)return n.RGBA;if(i===Nr)return n.DEPTH_COMPONENT;if(i===es)return n.DEPTH_STENCIL;if(i===go)return n.RED;if(i===xo)return n.RED_INTEGER;if(i===cc)return n.RG;if(i===_o)return n.RG_INTEGER;if(i===yo)return n.RGBA_INTEGER;if(i===qs||i===Ys||i===Zs||i===Js)if(a===Ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vo||i===Mo||i===bo||i===So)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===So)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wo||i===To||i===Eo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wo||i===To)return a===Ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Eo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ao||i===Co||i===Ro||i===Io||i===Po||i===Do||i===Lo||i===Uo||i===No||i===Fo||i===zo||i===Oo||i===Bo||i===ko)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ao)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Co)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ro)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Io)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Po)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Do)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===No)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ko)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vo||i===Go||i===Ho)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vo)return a===Ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Go)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ho)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wo||i===Xo||i===qo||i===Yo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ox=`
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

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Os(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new _n({vertexShader:ax,fragmentShader:ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new En(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends di{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Pc,u={},_=t.getContextAttributes(),w=null,y=null,I=[],A=[],U=new Xe,L=null,S=new Zt;S.viewport=new Tt;let M=new Zt;M.viewport=new Tt;let T=[S,M],D=new to,O=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=I[q];return $===void 0&&($=new Gr,I[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=I[q];return $===void 0&&($=new Gr,I[q]=$),$.getGripSpace()},this.getHand=function(q){let $=I[q];return $===void 0&&($=new Gr,I[q]=$),$.getHandSpace()};function N(q){let $=A.indexOf(q.inputSource);if($===-1)return;let pe=I[$];pe!==void 0&&(pe.update(q.inputSource,q.frame,l||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Y);for(let q=0;q<I.length;q++){let $=A[q];$!==null&&(A[q]=null,I[q].disconnect($))}O=null,P=null,m.reset();for(let q in u)delete u[q];e.setRenderTarget(w),f=null,p=null,d=null,r=null,y=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(U),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,Ce=null;_.depth&&(Ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=_.stencil?es:Nr,Fe=_.stencil?Qr:Fi);let Me={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(Me),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Jn(p.textureWidth,p.textureHeight,{format:Dn,type:Hn,depthTexture:new zs(p.textureWidth,p.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let pe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),it.setContext(r),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(q){for(let $=0;$<q.removed.length;$++){let pe=q.removed[$],Fe=A.indexOf(pe);Fe>=0&&(A[Fe]=null,I[Fe].disconnect(pe))}for(let $=0;$<q.added.length;$++){let pe=q.added[$],Fe=A.indexOf(pe);if(Fe===-1){for(let Me=0;Me<I.length;Me++)if(Me>=A.length){A.push(pe),Fe=Me;break}else if(A[Me]===null){A[Me]=pe,Fe=Me;break}if(Fe===-1)break}let Ce=I[Fe];Ce&&Ce.connect(pe)}}let X=new k,oe=new k;function ie(q,$,pe){X.setFromMatrixPosition($.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);let Fe=X.distanceTo(oe),Ce=$.projectionMatrix.elements,Me=pe.projectionMatrix.elements,yt=Ce[14]/(Ce[10]-1),F=Ce[14]/(Ce[10]+1),Et=(Ce[9]+1)/Ce[5],Je=(Ce[9]-1)/Ce[5],ke=(Ce[8]-1)/Ce[0],Ee=(Me[8]+1)/Me[0],Dt=yt*ke,Te=yt*Ee,Ye=Fe/(-ke+Ee),Ht=Ye*-ke;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ht),q.translateZ(Ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let mt=yt+Ye,C=F+Ye,v=Dt-Ht,Z=Te+(Fe-Ht),ne=Et*F/C*mt,ae=Je*F/C*mt;q.projectionMatrix.makePerspective(v,Z,ne,ae,mt,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ve(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let $=q.near,pe=q.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),D.near=M.near=S.near=$,D.far=M.far=S.far=pe,(O!==D.near||P!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,P=D.far),D.layers.mask=q.layers.mask|6,S.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;let Fe=q.parent,Ce=D.cameras;ve(D,Fe);for(let Me=0;Me<Ce.length;Me++)ve(Ce[Me],Fe);Ce.length===2?ie(D,S,M):D.projectionMatrix.copy(S.projectionMatrix),Pe(q,D,Fe)};function Pe(q,$,pe){pe===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Fr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(q){c=q,p!==null&&(p.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(q){return u[q]};let He=null;function rt(q,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Fe=!1;pe.length!==D.cameras.length&&(D.cameras.length=0,Fe=!0);for(let F=0;F<pe.length;F++){let Et=pe[F],Je=null;if(f!==null)Je=f.getViewport(Et);else{let Ee=d.getViewSubImage(p,Et);Je=Ee.viewport,F===0&&(e.setRenderTargetTextures(y,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(y))}let ke=T[F];ke===void 0&&(ke=new Zt,ke.layers.enable(F),ke.viewport=new Tt,T[F]=ke),ke.matrix.fromArray(Et.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Et.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Je.x,Je.y,Je.width,Je.height),F===0&&(D.matrix.copy(ke.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Fe===!0&&D.cameras.push(ke)}let Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let F=d.getDepthInformation(pe[0]);F&&F.isValid&&F.texture&&m.init(F,r.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let F=0;F<pe.length;F++){let Et=pe[F].camera;if(Et){let Je=u[Et];Je||(Je=new Os,u[Et]=Je);let ke=d.getCameraImage(Et);Je.sourceTexture=ke}}}}for(let pe=0;pe<I.length;pe++){let Fe=A[pe],Ce=I[pe];Fe!==null&&Ce!==void 0&&Ce.update(Fe,$,l||a)}He&&He(q,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let it=new Nu;it.setAnimationLoop(rt),this.setAnimationLoop=function(q){He=q},this.dispose=function(){}}},lr=new Vn,lx=new Pt;function cx(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,mc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,w,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,_,w):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===rn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===rn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=e.get(u),w=_.envMap,y=_.envMapRotation;w&&(m.envMap.value=w,lr.copy(y),lr.x*=-1,lr.y*=-1,lr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(lx.makeRotationFromEuler(lr)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,_,w){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=w*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hx(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){let y=w.program;i.uniformBlockBinding(_,y)}function l(_,w){let y=r[_.id];y===void 0&&(g(_),y=h(_),r[_.id]=y,_.addEventListener("dispose",m));let I=w.program;i.updateUBOMapping(_,I);let A=e.render.frame;s[_.id]!==A&&(p(_),s[_.id]=A)}function h(_){let w=d();_.__bindingPointIndex=w;let y=n.createBuffer(),I=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,y),y}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){let w=r[_.id],y=_.uniforms,I=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,U=y.length;A<U;A++){let L=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,M=L.length;S<M;S++){let T=L[S];if(f(T,A,S,I)===!0){let D=T.__offset,O=Array.isArray(T.value)?T.value:[T.value],P=0;for(let N=0;N<O.length;N++){let z=O[N],Y=x(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,D+P,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,w,y,I){let A=_.value,U=w+"_"+y;if(I[U]===void 0)return typeof A=="number"||typeof A=="boolean"?I[U]=A:I[U]=A.clone(),!0;{let L=I[U];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return I[U]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(_){let w=_.uniforms,y=0,I=16;for(let U=0,L=w.length;U<L;U++){let S=Array.isArray(w[U])?w[U]:[w[U]];for(let M=0,T=S.length;M<T;M++){let D=S[M],O=Array.isArray(D.value)?D.value:[D.value];for(let P=0,N=O.length;P<N;P++){let z=O[P],Y=x(z),X=y%I,oe=X%Y.boundary,ie=X+oe;y+=oe,ie!==0&&I-ie<Y.storage&&(y+=I-ie),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=Y.storage}}}let A=y%I;return A>0&&(y+=I-A),_.__size=y,_.__cache={},this}function x(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function m(_){let w=_.target;w.removeEventListener("dispose",m);let y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function u(){for(let _ in r)n.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}var rs=class{constructor(e={}){let{canvas:t=ou(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,_=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,I=!1;this._outputColorSpace=Xt;let A=0,U=0,L=null,S=-1,M=null,T=new Tt,D=new Tt,O=null,P=new tt(0),N=0,z=t.width,Y=t.height,X=1,oe=null,ie=null,ve=new Tt(0,0,z,Y),Pe=new Tt(0,0,z,Y),He=!1,rt=new qr,it=!1,q=!1,$=new Pt,pe=new k,Fe=new Tt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function yt(){return L===null?X:1}let F=i;function Et(b,G){return t.getContext(b,G)}try{let b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ce,!1),F===null){let G="webgl2";if(F=Et(G,b),F===null)throw Et(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Je,ke,Ee,Dt,Te,Ye,Ht,mt,C,v,Z,ne,ae,ee,ze,de,De,Ue,he,ge,Ze,Le,xe,nt;function V(){Je=new Cg(F),Je.init(),Le=new sx(F,Je),ke=new Mg(F,Je,e,Le),Ee=new ix(F,Je),ke.reversedDepthBuffer&&p&&Ee.buffers.depth.setReversed(!0),Dt=new Pg(F),Te=new W0,Ye=new rx(F,Je,Ee,Te,ke,Le,Dt),Ht=new Sg(y),mt=new Ag(y),C=new zf(F),xe=new yg(F,C),v=new Rg(F,C,Dt,xe),Z=new Lg(F,v,C,Dt),he=new Dg(F,ke,Ye),de=new bg(Te),ne=new H0(y,Ht,mt,Je,ke,xe,de),ae=new cx(y,Te),ee=new q0,ze=new j0(Je),Ue=new _g(y,Ht,mt,Ee,Z,f,c),De=new tx(y,Z,ke),nt=new hx(F,Dt,ke,Ee),ge=new vg(F,Je,Dt),Ze=new Ig(F,Je,Dt),Dt.programs=ne.programs,y.capabilities=ke,y.extensions=Je,y.properties=Te,y.renderLists=ee,y.shadowMap=De,y.state=Ee,y.info=Dt}V();let le=new Dc(y,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=Je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(z,Y,!1))},this.getSize=function(b){return b.set(z,Y)},this.setSize=function(b,G,j=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,Y=G,t.width=Math.floor(b*X),t.height=Math.floor(G*X),j===!0&&(t.style.width=b+"px",t.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(z*X,Y*X).floor()},this.setDrawingBufferSize=function(b,G,j){z=b,Y=G,X=j,t.width=Math.floor(b*j),t.height=Math.floor(G*j),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(ve)},this.setViewport=function(b,G,j,K){b.isVector4?ve.set(b.x,b.y,b.z,b.w):ve.set(b,G,j,K),Ee.viewport(T.copy(ve).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Pe)},this.setScissor=function(b,G,j,K){b.isVector4?Pe.set(b.x,b.y,b.z,b.w):Pe.set(b,G,j,K),Ee.scissor(D.copy(Pe).multiplyScalar(X).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(b){Ee.setScissorTest(He=b)},this.setOpaqueSort=function(b){oe=b},this.setTransparentSort=function(b){ie=b},this.getClearColor=function(b){return b.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(b=!0,G=!0,j=!0){let K=0;if(b){let W=!1;if(L!==null){let ue=L.texture.format;W=ue===yo||ue===_o||ue===xo}if(W){let ue=L.texture.type,be=ue===Hn||ue===Fi||ue===Kr||ue===Qr||ue===po||ue===mo,Ne=Ue.getClearColor(),Re=Ue.getClearAlpha(),qe=Ne.r,We=Ne.g,Ve=Ne.b;be?(g[0]=qe,g[1]=We,g[2]=Ve,g[3]=Re,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=qe,x[1]=We,x[2]=Ve,x[3]=Re,F.clearBufferiv(F.COLOR,0,x))}else K|=F.COLOR_BUFFER_BIT}G&&(K|=F.DEPTH_BUFFER_BIT),j&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ue.dispose(),ee.dispose(),ze.dispose(),Te.dispose(),Ht.dispose(),mt.dispose(),Z.dispose(),xe.dispose(),nt.dispose(),ne.dispose(),le.dispose(),le.removeEventListener("sessionstart",pn),le.removeEventListener("sessionend",sn),Yn.stop()};function me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let b=Dt.autoReset,G=De.enabled,j=De.autoUpdate,K=De.needsUpdate,W=De.type;V(),Dt.autoReset=b,De.enabled=G,De.autoUpdate=j,De.needsUpdate=K,De.type=W}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function re(b){let G=b.target;G.removeEventListener("dispose",re),Ae(G)}function Ae(b){$e(b),Te.remove(b)}function $e(b){let G=Te.get(b).programs;G!==void 0&&(G.forEach(function(j){ne.releaseProgram(j)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,j,K,W,ue){G===null&&(G=Ce);let be=W.isMesh&&W.matrixWorld.determinant()<0,Ne=an(b,G,j,K,W);Ee.setMaterial(K,be);let Re=j.index,qe=1;if(K.wireframe===!0){if(Re=v.getWireframeAttribute(j),Re===void 0)return;qe=2}let We=j.drawRange,Ve=j.attributes.position,et=We.start*qe,bt=(We.start+We.count)*qe;ue!==null&&(et=Math.max(et,ue.start*qe),bt=Math.min(bt,(ue.start+ue.count)*qe)),Re!==null?(et=Math.max(et,0),bt=Math.min(bt,Re.count)):Ve!=null&&(et=Math.max(et,0),bt=Math.min(bt,Ve.count));let kt=bt-et;if(kt<0||kt===1/0)return;xe.setup(W,K,Ne,j,Re);let xt,vt=ge;if(Re!==null&&(xt=C.get(Re),vt=Ze,vt.setIndex(xt)),W.isMesh)K.wireframe===!0?(Ee.setLineWidth(K.wireframeLinewidth*yt()),vt.setMode(F.LINES)):vt.setMode(F.TRIANGLES);else if(W.isLine){let E=K.linewidth;E===void 0&&(E=1),Ee.setLineWidth(E*yt()),W.isLineSegments?vt.setMode(F.LINES):W.isLineLoop?vt.setMode(F.LINE_LOOP):vt.setMode(F.LINE_STRIP)}else W.isPoints?vt.setMode(F.POINTS):W.isSprite&&vt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))vt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let E=W._multiDrawStarts,B=W._multiDrawCounts,Q=W._multiDrawCount,se=Re?C.get(Re).bytesPerElement:1,Qe=Te.get(K).currentProgram.getUniforms();for(let Ke=0;Ke<Q;Ke++)Qe.setValue(F,"_gl_DrawID",Ke),vt.render(E[Ke]/se,B[Ke])}else if(W.isInstancedMesh)vt.renderInstances(et,kt,W.count);else if(j.isInstancedBufferGeometry){let E=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,B=Math.min(j.instanceCount,E);vt.renderInstances(et,kt,B)}else vt.render(et,kt)};function Rt(b,G,j){b.transparent===!0&&b.side===Wt&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,dn(b,G,j),b.side=ui,b.needsUpdate=!0,dn(b,G,j),b.side=Wt):dn(b,G,j)}this.compile=function(b,G,j=null){j===null&&(j=b),u=ze.get(j),u.init(G),w.push(u),j.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),b!==j&&b.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights();let K=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ue=W.material;if(ue)if(Array.isArray(ue))for(let be=0;be<ue.length;be++){let Ne=ue[be];Rt(Ne,j,W),K.add(Ne)}else Rt(ue,j,W),K.add(ue)}),u=w.pop(),K},this.compileAsync=function(b,G,j=null){let K=this.compile(b,G,j);return new Promise(W=>{function ue(){if(K.forEach(function(be){Te.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){W(b);return}setTimeout(ue,10)}Je.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let gt=null;function Mn(b){gt&&gt(b)}function pn(){Yn.stop()}function sn(){Yn.start()}let Yn=new Nu;Yn.setAnimationLoop(Mn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(b){gt=b,le.setAnimationLoop(b),b===null?Yn.stop():Yn.start()},le.addEventListener("sessionstart",pn),le.addEventListener("sessionend",sn),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(G),G=le.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,G,L),u=ze.get(b,w.length),u.init(G),w.push(u),$.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),rt.setFromProjectionMatrix($,Bn,G.reversedDepth),q=this.localClippingEnabled,it=de.init(this.clippingPlanes,q),m=ee.get(b,_.length),m.init(),_.push(m),le.enabled===!0&&le.isPresenting===!0){let ue=y.xr.getDepthSensingMesh();ue!==null&&Oi(ue,G,-1/0,y.sortObjects)}Oi(b,G,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(oe,ie),Me=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Me&&Ue.addToRenderList(m,b),this.info.render.frame++,it===!0&&de.beginShadows();let j=u.state.shadowsArray;De.render(j,b,G),it===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,W=m.transmissive;if(u.setupLights(),G.isArrayCamera){let ue=G.cameras;if(W.length>0)for(let be=0,Ne=ue.length;be<Ne;be++){let Re=ue[be];Bi(K,W,b,Re)}Me&&Ue.render(b);for(let be=0,Ne=ue.length;be<Ne;be++){let Re=ue[be];bn(m,b,Re,Re.viewport)}}else W.length>0&&Bi(K,W,b,G),Me&&Ue.render(b),bn(m,b,G);L!==null&&U===0&&(Ye.updateMultisampleRenderTarget(L),Ye.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(y,b,G),xe.resetDefaultState(),S=-1,M=null,w.pop(),w.length>0?(u=w[w.length-1],it===!0&&de.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Oi(b,G,j,K){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||rt.intersectsSprite(b)){K&&Fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4($);let be=Z.update(b),Ne=b.material;Ne.visible&&m.push(b,be,Ne,j,Fe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||rt.intersectsObject(b))){let be=Z.update(b),Ne=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Fe.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Fe.copy(be.boundingSphere.center)),Fe.applyMatrix4(b.matrixWorld).applyMatrix4($)),Array.isArray(Ne)){let Re=be.groups;for(let qe=0,We=Re.length;qe<We;qe++){let Ve=Re[qe],et=Ne[Ve.materialIndex];et&&et.visible&&m.push(b,be,et,j,Fe.z,Ve)}}else Ne.visible&&m.push(b,be,Ne,j,Fe.z,null)}}let ue=b.children;for(let be=0,Ne=ue.length;be<Ne;be++)Oi(ue[be],G,j,K)}function bn(b,G,j,K){let W=b.opaque,ue=b.transmissive,be=b.transparent;u.setupLightsView(j),it===!0&&de.setGlobalState(y.clippingPlanes,j),K&&Ee.viewport(T.copy(K)),W.length>0&&In(W,G,j),ue.length>0&&In(ue,G,j),be.length>0&&In(be,G,j),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Bi(b,G,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[K.id]===void 0&&(u.state.transmissionRenderTarget[K.id]=new Jn(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?jr:Hn,minFilter:Ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));let ue=u.state.transmissionRenderTarget[K.id],be=K.viewport||T;ue.setSize(be.z*y.transmissionResolutionScale,be.w*y.transmissionResolutionScale);let Ne=y.getRenderTarget(),Re=y.getActiveCubeFace(),qe=y.getActiveMipmapLevel();y.setRenderTarget(ue),y.getClearColor(P),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),Me&&Ue.render(j);let We=y.toneMapping;y.toneMapping=xi;let Ve=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),u.setupLightsView(K),it===!0&&de.setGlobalState(y.clippingPlanes,K),In(b,j,K),Ye.updateMultisampleRenderTarget(ue),Ye.updateRenderTargetMipmap(ue),Je.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let bt=0,kt=G.length;bt<kt;bt++){let xt=G[bt],vt=xt.object,E=xt.geometry,B=xt.material,Q=xt.group;if(B.side===Wt&&vt.layers.test(K.layers)){let se=B.side;B.side=rn,B.needsUpdate=!0,Ln(vt,j,K,E,B,Q),B.side=se,B.needsUpdate=!0,et=!0}}et===!0&&(Ye.updateMultisampleRenderTarget(ue),Ye.updateRenderTargetMipmap(ue))}y.setRenderTarget(Ne,Re,qe),y.setClearColor(P,N),Ve!==void 0&&(K.viewport=Ve),y.toneMapping=We}function In(b,G,j){let K=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ue=b.length;W<ue;W++){let be=b[W],Ne=be.object,Re=be.geometry,qe=be.group,We=be.material;We.allowOverride===!0&&K!==null&&(We=K),Ne.layers.test(j.layers)&&Ln(Ne,G,j,Re,We,qe)}}function Ln(b,G,j,K,W,ue){b.onBeforeRender(y,G,j,K,W,ue),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(y,G,j,K,b,ue),W.transparent===!0&&W.side===Wt&&W.forceSinglePass===!1?(W.side=rn,W.needsUpdate=!0,y.renderBufferDirect(j,G,K,W,b,ue),W.side=ui,W.needsUpdate=!0,y.renderBufferDirect(j,G,K,W,b,ue),W.side=Wt):y.renderBufferDirect(j,G,K,W,b,ue),b.onAfterRender(y,G,j,K,W,ue)}function dn(b,G,j){G.isScene!==!0&&(G=Ce);let K=Te.get(b),W=u.state.lights,ue=u.state.shadowsArray,be=W.state.version,Ne=ne.getParameters(b,W.state,ue,G,j),Re=ne.getProgramCacheKey(Ne),qe=K.programs;K.environment=b.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(b.isMeshStandardMaterial?mt:Ht).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,qe===void 0&&(b.addEventListener("dispose",re),qe=new Map,K.programs=qe);let We=qe.get(Re);if(We!==void 0){if(K.currentProgram===We&&K.lightsStateVersion===be)return mn(b,Ne),We}else Ne.uniforms=ne.getUniforms(b),b.onBeforeCompile(Ne,y),We=ne.acquireProgram(Ne,Re),qe.set(Re,We),K.uniforms=Ne.uniforms;let Ve=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=de.uniform),mn(b,Ne),K.needsLights=en(b),K.lightsStateVersion=be,K.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.directionalShadowMap.value=W.state.directionalShadowMap,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotShadowMap.value=W.state.spotShadowMap,Ve.spotLightMatrix.value=W.state.spotLightMatrix,Ve.spotLightMap.value=W.state.spotLightMap,Ve.pointShadowMap.value=W.state.pointShadowMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=We,K.uniformsList=null,We}function _i(b){if(b.uniformsList===null){let G=b.currentProgram.getUniforms();b.uniformsList=is.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function mn(b,G){let j=Te.get(b);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function an(b,G,j,K,W){G.isScene!==!0&&(G=Ce),Ye.resetTextureUnits();let ue=G.fog,be=K.isMeshStandardMaterial?G.environment:null,Ne=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Yi,Re=(K.isMeshStandardMaterial?mt:Ht).get(K.envMap||be),qe=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,We=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,bt=!!j.morphAttributes.color,kt=xi;K.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(kt=y.toneMapping);let xt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,vt=xt!==void 0?xt.length:0,E=Te.get(K),B=u.state.lights;if(it===!0&&(q===!0||b!==M)){let It=b===M&&K.id===S;de.setState(K,b,It)}let Q=!1;K.version===E.__version?(E.needsLights&&E.lightsStateVersion!==B.state.version||E.outputColorSpace!==Ne||W.isBatchedMesh&&E.batching===!1||!W.isBatchedMesh&&E.batching===!0||W.isBatchedMesh&&E.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&E.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&E.instancing===!1||!W.isInstancedMesh&&E.instancing===!0||W.isSkinnedMesh&&E.skinning===!1||!W.isSkinnedMesh&&E.skinning===!0||W.isInstancedMesh&&E.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&E.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&E.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&E.instancingMorph===!1&&W.morphTexture!==null||E.envMap!==Re||K.fog===!0&&E.fog!==ue||E.numClippingPlanes!==void 0&&(E.numClippingPlanes!==de.numPlanes||E.numIntersection!==de.numIntersection)||E.vertexAlphas!==qe||E.vertexTangents!==We||E.morphTargets!==Ve||E.morphNormals!==et||E.morphColors!==bt||E.toneMapping!==kt||E.morphTargetsCount!==vt)&&(Q=!0):(Q=!0,E.__version=K.version);let se=E.currentProgram;Q===!0&&(se=dn(K,G,W));let Qe=!1,Ke=!1,ft=!1,Be=se.getUniforms(),Ut=E.uniforms;if(Ee.useProgram(se.program)&&(Qe=!0,Ke=!0,ft=!0),K.id!==S&&(S=K.id,Ke=!0),Qe||M!==b){Ee.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Be.setValue(F,"projectionMatrix",b.projectionMatrix),Be.setValue(F,"viewMatrix",b.matrixWorldInverse);let Ot=Be.map.cameraPosition;Ot!==void 0&&Ot.setValue(F,pe.setFromMatrixPosition(b.matrixWorld)),ke.logarithmicDepthBuffer&&Be.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Be.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ke=!0,ft=!0)}if(W.isSkinnedMesh){Be.setOptional(F,W,"bindMatrix"),Be.setOptional(F,W,"bindMatrixInverse");let It=W.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Be.setValue(F,"boneTexture",It.boneTexture,Ye))}W.isBatchedMesh&&(Be.setOptional(F,W,"batchingTexture"),Be.setValue(F,"batchingTexture",W._matricesTexture,Ye),Be.setOptional(F,W,"batchingIdTexture"),Be.setValue(F,"batchingIdTexture",W._indirectTexture,Ye),Be.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Be.setValue(F,"batchingColorTexture",W._colorsTexture,Ye));let at=j.morphAttributes;if((at.position!==void 0||at.normal!==void 0||at.color!==void 0)&&he.update(W,j,se),(Ke||E.receiveShadow!==W.receiveShadow)&&(E.receiveShadow=W.receiveShadow,Be.setValue(F,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Ut.envMap.value=Re,Ut.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(Ut.envMapIntensity.value=G.environmentIntensity),Ke&&(Be.setValue(F,"toneMappingExposure",y.toneMappingExposure),E.needsLights&&yi(Ut,ft),ue&&K.fog===!0&&ae.refreshFogUniforms(Ut,ue),ae.refreshMaterialUniforms(Ut,K,X,Y,u.state.transmissionRenderTarget[b.id]),is.upload(F,_i(E),Ut,Ye)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(is.upload(F,_i(E),Ut,Ye),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Be.setValue(F,"center",W.center),Be.setValue(F,"modelViewMatrix",W.modelViewMatrix),Be.setValue(F,"normalMatrix",W.normalMatrix),Be.setValue(F,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let It=K.uniformsGroups;for(let Ot=0,R=It.length;Ot<R;Ot++){let H=It[Ot];nt.update(H,se),nt.bind(H,se)}}return se}function yi(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function en(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,G,j){let K=Te.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Te.get(b.texture).__webglTexture=G,Te.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,G){let j=Te.get(b);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0};let vi=F.createFramebuffer();this.setRenderTarget=function(b,G=0,j=0){L=b,A=G,U=j;let K=!0,W=null,ue=!1,be=!1;if(b){let Re=Te.get(b);if(Re.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(F.FRAMEBUFFER,null),K=!1;else if(Re.__webglFramebuffer===void 0)Ye.setupRenderTarget(b);else if(Re.__hasExternalTextures)Ye.rebindTextures(b,Te.get(b.texture).__webglTexture,Te.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ve=b.depthTexture;if(Re.__boundDepthTexture!==Ve){if(Ve!==null&&Te.has(Ve)&&(b.width!==Ve.image.width||b.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(b)}}let qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(be=!0);let We=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(We[G])?W=We[G][j]:W=We[G],ue=!0):b.samples>0&&Ye.useMultisampledRTT(b)===!1?W=Te.get(b).__webglMultisampledFramebuffer:Array.isArray(We)?W=We[j]:W=We,T.copy(b.viewport),D.copy(b.scissor),O=b.scissorTest}else T.copy(ve).multiplyScalar(X).floor(),D.copy(Pe).multiplyScalar(X).floor(),O=He;if(j!==0&&(W=vi),Ee.bindFramebuffer(F.FRAMEBUFFER,W)&&K&&Ee.drawBuffers(b,W),Ee.viewport(T),Ee.scissor(D),Ee.setScissorTest(O),ue){let Re=Te.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,Re.__webglTexture,j)}else if(be){let Re=G;for(let qe=0;qe<b.textures.length;qe++){let We=Te.get(b.textures[qe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+qe,We.__webglTexture,j,Re)}}else if(b!==null&&j!==0){let Re=Te.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Re.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(b,G,j,K,W,ue,be,Ne=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){Ee.bindFramebuffer(F.FRAMEBUFFER,Re);try{let qe=b.textures[Ne],We=qe.format,Ve=qe.type;if(!ke.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-K&&j>=0&&j<=b.height-W&&(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ne),F.readPixels(G,j,K,W,Le.convert(We),Le.convert(Ve),ue))}finally{let qe=L!==null?Te.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(b,G,j,K,W,ue,be,Ne=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re)if(G>=0&&G<=b.width-K&&j>=0&&j<=b.height-W){Ee.bindFramebuffer(F.FRAMEBUFFER,Re);let qe=b.textures[Ne],We=qe.format,Ve=qe.type;if(!ke.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.bufferData(F.PIXEL_PACK_BUFFER,ue.byteLength,F.STREAM_READ),b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ne),F.readPixels(G,j,K,W,Le.convert(We),Le.convert(Ve),0);let bt=L!==null?Te.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,bt);let kt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await lu(F,kt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ue),F.deleteBuffer(et),F.deleteSync(kt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,G=null,j=0){let K=Math.pow(2,-j),W=Math.floor(b.image.width*K),ue=Math.floor(b.image.height*K),be=G!==null?G.x:0,Ne=G!==null?G.y:0;Ye.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,be,Ne,W,ue),Ee.unbindTexture()};let ti=F.createFramebuffer(),Bt=F.createFramebuffer();this.copyTextureToTexture=function(b,G,j=null,K=null,W=0,ue=null){ue===null&&(W!==0?(Or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=W,W=0):ue=0);let be,Ne,Re,qe,We,Ve,et,bt,kt,xt=b.isCompressedTexture?b.mipmaps[ue]:b.image;if(j!==null)be=j.max.x-j.min.x,Ne=j.max.y-j.min.y,Re=j.isBox3?j.max.z-j.min.z:1,qe=j.min.x,We=j.min.y,Ve=j.isBox3?j.min.z:0;else{let at=Math.pow(2,-W);be=Math.floor(xt.width*at),Ne=Math.floor(xt.height*at),b.isDataArrayTexture?Re=xt.depth:b.isData3DTexture?Re=Math.floor(xt.depth*at):Re=1,qe=0,We=0,Ve=0}K!==null?(et=K.x,bt=K.y,kt=K.z):(et=0,bt=0,kt=0);let vt=Le.convert(G.format),E=Le.convert(G.type),B;G.isData3DTexture?(Ye.setTexture3D(G,0),B=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Ye.setTexture2DArray(G,0),B=F.TEXTURE_2D_ARRAY):(Ye.setTexture2D(G,0),B=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);let Q=F.getParameter(F.UNPACK_ROW_LENGTH),se=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Qe=F.getParameter(F.UNPACK_SKIP_PIXELS),Ke=F.getParameter(F.UNPACK_SKIP_ROWS),ft=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,qe),F.pixelStorei(F.UNPACK_SKIP_ROWS,We),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ve);let Be=b.isDataArrayTexture||b.isData3DTexture,Ut=G.isDataArrayTexture||G.isData3DTexture;if(b.isDepthTexture){let at=Te.get(b),It=Te.get(G),Ot=Te.get(at.__renderTarget),R=Te.get(It.__renderTarget);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,R.__webglFramebuffer);for(let H=0;H<Re;H++)Be&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.get(b).__webglTexture,W,Ve+H),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.get(G).__webglTexture,ue,kt+H)),F.blitFramebuffer(qe,We,be,Ne,et,bt,be,Ne,F.DEPTH_BUFFER_BIT,F.NEAREST);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Te.has(b)){let at=Te.get(b),It=Te.get(G);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,ti),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bt);for(let Ot=0;Ot<Re;Ot++)Be?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,at.__webglTexture,W,Ve+Ot):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,at.__webglTexture,W),Ut?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,ue,kt+Ot):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,It.__webglTexture,ue),W!==0?F.blitFramebuffer(qe,We,be,Ne,et,bt,be,Ne,F.COLOR_BUFFER_BIT,F.NEAREST):Ut?F.copyTexSubImage3D(B,ue,et,bt,kt+Ot,qe,We,be,Ne):F.copyTexSubImage2D(B,ue,et,bt,qe,We,be,Ne);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ut?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(B,ue,et,bt,kt,be,Ne,Re,vt,E,xt.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(B,ue,et,bt,kt,be,Ne,Re,vt,xt.data):F.texSubImage3D(B,ue,et,bt,kt,be,Ne,Re,vt,E,xt):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ue,et,bt,be,Ne,vt,E,xt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ue,et,bt,xt.width,xt.height,vt,xt.data):F.texSubImage2D(F.TEXTURE_2D,ue,et,bt,be,Ne,vt,E,xt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Q),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,se),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Qe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ft),ue===0&&G.generateMipmaps&&F.generateMipmap(B),Ee.unbindTexture()},this.initRenderTarget=function(b){Te.get(b).__webglFramebuffer===void 0&&Ye.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ye.setTextureCube(b,0):b.isData3DTexture?Ye.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ye.setTexture2DArray(b,0):Ye.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){A=0,U=0,L=null,Ee.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var ux={x:1630,y:1160},dx={x:3370,y:430},js={x:1450,y:1320};function ku(n,e){if(!n||!e)return null;let t=[ux,dx].filter(g=>Math.hypot(g.x-n.x,g.y-n.y)<400).sort((g,x)=>Math.hypot(g.x-n.x,g.y-n.y)-Math.hypot(x.x-n.x,x.y-n.y))[0],i=0,r=1;if(t){let g=t.x-n.x,x=t.y-n.y;Math.abs(g)>Math.abs(x)?(i=Math.sign(g)||1,r=0):r=Math.sign(x)||1}let s=[0,280,320,360][e],a=[0,220,260,300][e],o=112,c={x:n.x-i*a/2,y:n.y-r*a/2},l=(g,x)=>({x:c.x+r*g+i*x,y:c.y-i*g+r*x}),h=(g,x,m,u)=>{let _=l(g,x);return{x:_.x,y:_.y,w:r?m:u,h:r?u:m}},d=[];if(e>=2){d.push(h(0,-a/2,s,10));for(let g of[-s/2,s/2])d.push(h(g,0,10,a))}if(e>=3){let g=(s-o)/2;for(let x of[-1,1])d.push(h(x*(o/2+g/2),a/2,g,10))}let p=e===1?[-1,1].flatMap(g=>[-1,1].map(x=>({...l(g*(s/2-8),x*(a/2-8)),radius:6}))):[],f=[h(-s/2+53,-a/2+64,52,90)];return e>=3&&f.push(h(s/2-53,-a/2+64,52,90)),{center:c,width:s,depth:a,door:o,fx:i,fy:r,yaw:Math.atan2(i,r),floor:h(0,0,s,a),walls:d,posts:p,beds:f,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var fx=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],px=["#e3b185","#be895f","#efc69d","#a67152"],mx=["#463b32","#24282b","#99673b","#c9a465"];var el=(n,e,t)=>Number.isInteger(n?.[e])&&n[e]>=0&&n[e]<t?n[e]:0;function Uc(n,e){return n.shirt=fx[el(e,"shirt",6)],n.skin=px[el(e,"skin",4)],n.hair=mx[el(e,"hair",4)],n.style=el(e,"style",3),n}function tl(n){return Uc({},n)}var Vu={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function Gu(n,e){let t=Math.sin(e*Math.PI*4);return n==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:n==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:n==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:n==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:n==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var gx="assets/materials-v018/",Nc=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],xx=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function Hu(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[i,r,s,a]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(i,r,s,a,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function nl(n){let e=new Map,t=new Map,i=new Set,r=0,s=0,a=!0,o=0,c=new Gs;for(let f of Nc){let g=c.load(gx+f+".webp",()=>{r++,a=!0},void 0,()=>{s++,i.add(f),a=!0});g.userData.materialAssetName=f,g.colorSpace=Xt,g.wrapS=g.wrapT=Ur,g.anisotropy=Math.min(8,n.capabilities.getMaxAnisotropy()),e.set(f,g)}function l(f,g="#ffffff",x=1,m=.035){let u=f+g+x+m;if(!t.has(u)){let _=e.get(f).clone();_.repeat.set(x,x);let w=new zt({color:g,map:_,bumpMap:_,bumpScale:m,roughness:f==="leaf"?.78:.93});e.get(f).addEventListener("dispose",()=>_.dispose());let y=e.get(f);w.userData.textureSource=y,t.set(u,w),a=!0}return t.get(u)}function h(f){return xx.has(f)?l("wood","#ded4c4",1,.045):f==="#e2dbc7"?l("plaster","#f8f4e7",1,.027):f==="#ba7655"?l("roof","#e4d6c7",2,.055):f==="#a7c4b7"?l("teal","#e7ede3",1,.035):f==="#92968b"||f==="#777a6b"?l("rock","#ddd9cf",1,.065):null}function d(){if(!a)return;o++;let f=r+s<Nc.length;for(let g of t.values()){let x=g.userData.textureSource;x.image&&g.map.image!==x.image&&(g.map.source=x.source,g.map.needsUpdate=!0),g.map.image&&!g.userData.uploaded&&(g.map.needsUpdate=!0,g.userData.uploaded=!0),!g.userData.uploaded&&!i.has(x.userData.materialAssetName)&&(f=!0)}a=f}function p(f){f.colorSpace=Xn;let g=new zt({color:"#ffffff",map:f,roughness:1});return g.onBeforeCompile=x=>{x.uniforms.uSand={value:e.get("sand")},x.uniforms.uGrass={value:e.get("grass")},x.uniforms.uPaving={value:e.get("paving")},x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
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
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},g}return{textures:e,surface:l,forColor:h,ground:p,update:d,stats:()=>({loaded:r,failed:s,total:Nc.length,materials:t.size,syncPending:a,syncPasses:o}),dispose(){for(let f of t.values())f.map.dispose(),f.dispose();for(let f of e.values())f.dispose()}}}function il({x:n,z:e,surface:t,yaw:i,pitch:r,mode:s="first",distance:a=4.8,bob:o=0},c={position:new k,target:new k}){let l=t+1.64+o;return s==="first"?(c.position.set(n,l,e),c.target.set(n-Math.sin(i)*Math.cos(r),l-Math.sin(r),e-Math.cos(i)*Math.cos(r)),c):(c.target.set(n,t+1.3,e),c.position.set(n+Math.sin(i)*Math.cos(r)*a,c.target.y+.65+Math.sin(r)*a,e+Math.cos(i)*Math.cos(r)*a),c)}function Fc(n,e,t,i){return!(t>0)||!(i>0)?n:n.lerp(e,1-Math.exp(-t*i))}function rl(n,e,t,i){return i.length=0,n.intersectObjects(e,t,i),i}var _x={};function sl(n,e,t,{height:i=18,offsetX:r=-12,offsetZ:s=-8}=_x){let a=Math.abs(n.shadow.camera.right-n.shadow.camera.left),o=n.shadow.mapSize.width,c=a>0&&o>0?a/o:0,l=c?Math.round(e/c)*c:e,h=c?Math.round(t/c)*c:t;return n.position.set(l+r,i,h+s),n.target.position.set(l,0,h),c}function Wu(n,e,t,i,r){let s=(()=>{let x=90210;return()=>(x=Math.imul(x,1664525)+1013904223>>>0)/4294967296})(),a=new Lt;a.setAttribute("position",new st([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),a.setAttribute("uv",new st([0,0,1,0,0,.5,1,.5,.5,1],2)),a.setIndex([0,1,2,1,3,2,2,3,4]),a.computeVertexNormals();let o=new zt({color:"#ffffff",side:Wt,roughness:1});o.defines={USE_UV:""};let c={value:0},l={value:new Tt(0,0,0,0)};o.onBeforeCompile=x=>{x.uniforms.uWind=c,x.uniforms.uBase=l,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let h=r?2800:5500,d=new Ct(a,o,h);d.receiveShadow=!0,d.frustumCulled=!1;let p=i.getContext("2d").getImageData(0,0,i.width,i.height).data,f=new At,g=0;for(let x=0;x<h*8&&g<h;x++){let m=s()*4600,u=s()*2900,_=(Math.min(i.height-1,Math.floor(u/2900*i.height))*i.width+Math.min(i.width-1,Math.floor(m/4600*i.width)))*4;if(p[_+1]<p[_]+12||p[_+1]<85)continue;let w=m/t,y=u/t,I=e(w,y);I<.1||(f.position.set(w,I-.015,y),f.rotation.set(0,s()*Math.PI*2,0),f.scale.setScalar(.7+s()*.8),f.updateMatrix(),d.setMatrixAt(g,f.matrix),d.setColorAt(g,new tt().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),g++)}return d.count=g,n.add(d),{update(x,m){c.value=x,m?l.value.set(m.floor.x/t,m.floor.y/t,m.floor.w/(t*2)+.1,m.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){n.remove(d),a.dispose(),o.dispose(),d.dispose()}}}function Xu(n,e,{cube:t,tube:i},r){let s=e.width/80,a=e.depth/80,o=e.wallHeight/80,c=e.roofRidge/80;for(let d of n.children)d.name==="floor"&&(d.material=r.surface("paving","#e5ded0",2,.045)),d.name==="wall"&&(d.material=r.surface("plaster","#f8f4e7",1,.025)),d.name==="roof"&&(d.material=r.surface("roof","#efe2d5",2,.045));for(let d of[-1,1]){let p=t(n,"#876742",[d*s/2,o-.09,0],[.13,.16,a+.18]);if(p.name="trim",e.walls.length){let f=t(n,"#a7c4b7",[d*(s/2+.064),1.55,-a*.16],[.02,.9,.7]);f.name="shutter";for(let g=0;g<8;g++)t(n,"#876742",[d*(s/2+.08),1.17+g*.11,-a*.16],[.025,.035,.69]);for(let g of[-a*.16-.39,-a*.16+.39])t(n,"#e2dbc7",[d*(s/2+.078),1.56,g],[.045,1.02,.065])}}let l=i(n,"#ba7655",[0,c+.02,0],[.09,a+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let h=t(n,"#e2dbc7",[0,o-.05,-a/2-.066],[s+.08,.16,.06]);return h.name="trim",n}var qn=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),Yv=Object.freeze(Object.fromEntries(qn.map(n=>[n.id,n])));function qu(n,e){return!Number.isFinite(n)||!Number.isFinite(e)?null:qn.find(t=>Math.hypot(n-t.x,e-t.z)<=t.radius)??null}function os(n,e){if(Number.isFinite(n.coastSeed)){let i=n.coastSeed;return .855+.07*Math.sin(e*2+i)+.045*Math.cos(e*3-i)+.025*Math.sin(e*7+i)}let t=n.x*.002+n.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function ur(n,e,t){let i=(e-n.x)/n.radius,r=(t-n.z)/n.radius,s=Math.hypot(i,r);if(s>=1)return-.32;let a=Math.atan2(r,i),o=os(n,a),c=Math.max(0,Math.min(1,(o-s)/.12));if(s>o)return-.32*Math.min(1,(s-o)/.04);if(Number.isFinite(n.relief)){let f=(o-s)*n.radius/20,g=Math.min(1,f/18),x=Math.max(0,Math.min(1,(f-18)/85)),m=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42;return .005+g*.65+x*x*(3-2*x)*m*n.relief}let l=Math.max(0,Math.min(1,(.79-s)/.22)),h=l*l*(3-2*l),d=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42,p=n.biome==="highlands"?8.5:n.biome==="rainforest"?2.2:n.biome==="rocky"?1.6:.55;return .005+c*.35+h*d*p}function zc(n,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,ur(n,n.x,n.z),0],i=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let h=0;h<=e;h++){let d=h/e*Math.PI*2,p=Number.isFinite(n.relief)?os(n,d)+.03:1.02,f=n.radius*p*l/s,g=Math.cos(d)*f,x=Math.sin(d)*f;t.push(g,ur(n,n.x+g,n.z+x),x),i.push(.5+g/(n.radius*2.04),.5+x/(n.radius*2.04));let m=1+(l-1)*(e+1)+h;if(h!==e)if(l===1)r.push(0,m+1,m);else{let u=m-(e+1);r.push(u,m+1,m,u,u+1,m+1)}}let a=new Lt;a.setAttribute("position",new st(t,3)),a.setAttribute("uv",new st(i,2)),a.setIndex(r),a.computeVertexNormals();let o=new zt({color:n.biome==="beach"?11779972:5538650,roughness:1,side:Wt}),c=new ut(a,o);return c.name="archipelago-"+n.id,c.position.set(n.x,0,n.z),c.receiveShadow=!0,c}function Yu(n={}){let e=new Oe;e.name="archipelago-terrain";for(let t of qn)e.add(zc(t,n));return e}function ls(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Lt,l=0;for(let h=0;h<n.length;++h){let d=n[h],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,d=[];for(let p=0;p<n.length;++p){let f=n[p].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[p].attributes.position.count}c.setIndex(d)}for(let h in s){let d=Zu(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<d;++p){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][p]);let g=Zu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Zu(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new Jt(a,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let p=0,f=h.count;p<f;p++)for(let g=0;g<t;g++){let x=h.getComponent(p,g);o.setComponent(p+d,g,x)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}var Qs=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function dr(n,e,t=Qs){return e==="home"&&t.some(i=>Math.abs(n.x-i.x)<i.w/2+7&&Math.abs(n.z-i.z)<i.d/2+7)}var yx=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,$u=`
float hashFast(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseFast(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashFast(i),hashFast(i+vec2(1.,0.)),f.x),mix(hashFast(i+vec2(0.,1.)),hashFast(i+vec2(1.)),f.x),f.y);}
float fbmFast(vec2 p){float f=0.,a=.535714;for(int i=0;i<3;i++){f+=a*noiseFast(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function al(n,{size:e=900,segments:t=72,coastSeeds:i=[]}={}){let r=Array.from({length:9},(c,l)=>new Tt(...n[l]||[1e4,1e4,1,1])),s=new _n({fog:!0,uniforms:{...Zo.clone(Se.fog),uTime:{value:0},uEye:{value:new k},uCoasts:{value:r},uCoastSeeds:{value:Array.from({length:9},(c,l)=>i[l]??-100)}},vertexShader:`uniform float uTime;varying vec3 vWater;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;
    p.y+=sin(dot(p.xz,vec2(.41,.19))+uTime*.75)*.024+sin(dot(p.xz,vec2(-.17,.36))-uTime*.58)*.019;
    vWater=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=viewMatrix*vec4(vWater,1.);gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,fragmentShader:`uniform float uTime;uniform vec3 uEye;uniform vec4 uCoasts[9];uniform float uCoastSeeds[9];varying vec3 vWater;
    #include <fog_pars_fragment>
    ${yx}
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
    }`}),a=new En(e,e,t,t);a.rotateX(-Math.PI/2),s.userData.fragmentNoiseLayers=7;let o=new ut(a,s);return o.name="tropical-ocean",o.position.y=-.045,{mesh:o,update(c,l){s.uniforms.uTime.value=c,s.uniforms.uEye.value.copy(l)},dispose(){a.dispose(),s.dispose()}}}function ol(n=420){let e=new _n({side:rn,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying vec3 vSky;${$u}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3+vec2(uTime*.006,uTime*.0025);float n=fbmFast(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`});e.userData.fragmentNoiseLayers=3;let t=new ut(new yn(n,32,20),e);return t.name="tropical-sky",t.renderOrder=-10,t.frustumCulled=!1,t}function ll(n,e){let t=new zt({roughness:1,color:"#ffffff",vertexColors:!0});return t.userData.fragmentNoiseLayers=3,t.onBeforeCompile=i=>{Object.assign(i.uniforms,{uGrass:{value:n.textures.get("grass")},uSand:{value:n.textures.get("sand")},uRock:{value:n.textures.get("rock")}}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${$u}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=fbmFast(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38);
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},t.customProgramCacheKey=()=>`tropical-island-${e}`,t}function Ju(n=14){let e=[],t=[],i=[],r=(a,o,c,l)=>{let h=o*2.2,d=Math.sin(o*Math.PI)*.55-o*o*.95;return[Math.sin(a)*h+Math.cos(a)*l*c,d-l*.17,Math.cos(a)*h-Math.sin(a)*l*c]};for(let a=0;a<9;a++){let o=a*Math.PI*2/9;for(let c=1;c<n;c++)for(let l of[-1,1]){let h=c/n,d=Math.sin(h*Math.PI)*.44,p=e.length/3;e.push(...r(o,h-.03,l,.012),...r(o,h-.09,l,d),...r(o,h+.025,l,d*.87),...r(o,h+.03,l,.012)),t.push(h,0,h,.9,h+.03,1,h+.03,0),i.push(p,p+1,p+2,p,p+2,p+3)}}let s=new Lt;return s.setAttribute("position",new st(e,3)),s.setAttribute("uv",new st(t,2)),s.setIndex(i),s.computeVertexNormals(),s}var Qt=(n,e=0)=>{let t=Math.sin((n+1)*12.9898+(e+1)*78.233)*43758.5453;return t-Math.floor(t)};function cl(n,e,{scale:t,height:i,surfaces:r,small:s=!1,clear:a=()=>!1,dense:o=!1,lod:c=!1}={}){let l=(L,S)=>{let M=new Gt(.085,.16,1,L,S);M.translate(0,.5,0);let T=M.attributes.position;for(let D=0;D<T.count;D++)T.setX(D,T.getX(D)+T.getY(D)**2*.2);return M.computeVertexNormals(),M},h=l(8,6),d=c?l(6,3):h,p=r.surface("wood","#bc9c71",2,.03),f=r.surface("leaf","#9cb384",1,.01).clone();f.side=Wt;let g=Ju(s?9:12),x=c?Ju(s?6:7):g,m=[],u=[],_=new At,w=650/t,y=0;for(let L of e){let S=[];for(let T=0;T<(o?L.id==="home"?s?700:1500:s?280:650:s?22:42);T++){let D=T+L.x*.013+L.z*.017,O=T*2.39996+L.x*.001+(Qt(D,0)-.5)*.72,P=o?Math.min(.93,Math.max(.12,Math.sqrt(T*.6180339%1)*.91+(Qt(D,1)-.5)*.09)):Math.min(.91,.34+T%7*.075+(Qt(D,1)-.5)*.08),N=L.radius*P,z=L.x+Math.sin(O)*N,Y=L.z+Math.cos(O)*N;a(L,z,Y)||i(z,Y)<.32||S.push({x:z/t,z:Y/t,y:i(z,Y),a:O,h:3.45+Qt(D,2)*2.15,size:.7+Qt(D,3)*.43,leanX:(Qt(D,4)-.5)*.12,leanZ:(Qt(D,5)-.5)*.14,index:y++})}if(!S.length)continue;let M=Array.from({length:4},()=>[]);S.forEach(T=>M[(T.x>=L.x/t?1:0)+(T.z>=L.z/t?2:0)].push(T)),M.forEach((T,D)=>{if(!T.length)return;let O=new Ct(h,p,T.length),P=new Ct(g,f,T.length);O.name=m.length?`grove-trunks-${L.id}-${D+1}`:"grove-trunks",P.name=u.length?`grove-fronds-${L.id}-${D+1}`:"grove-fronds";for(let N=0;N<T.length;N++){let z=T[N];_.position.set(z.x,z.y,z.z),_.rotation.set(z.leanX,z.a,z.leanZ),_.scale.set(z.size,z.h,z.size),_.updateMatrix(),O.setMatrixAt(N,_.matrix),_.position.set(z.x+.2*z.size*Math.cos(z.a),z.y+z.h,z.z-.2*z.size*Math.sin(z.a)),_.rotation.set(z.leanX*.35,z.a+Qt(z.index,6)*Math.PI*.35,z.leanZ*.35),_.scale.setScalar(z.size),_.updateMatrix(),P.setMatrixAt(N,_.matrix),P.setColorAt(N,new tt().setHSL(.245+Qt(z.index,7)*.065,.22+Qt(z.index,8)*.13,.59+Qt(z.index,9)*.12))}for(let N of[O,P])N.userData.cullingRegion={island:L.id,sector:D+1},N.castShadow=!0,N.instanceMatrix.needsUpdate=!0,N.computeBoundingSphere(),n.add(N);O.userData.lod={high:h,low:d,distance:w,level:"high",shadowReceiverLod:c,center:O.boundingSphere.center.clone(),radius:O.boundingSphere.radius},P.userData.lod={high:g,low:x,distance:w,level:"high",center:P.boundingSphere.center.clone(),radius:P.boundingSphere.radius},O.receiveShadow=!0,P.receiveShadow=!1,m.push(O),u.push(P)})}let I=new Ki(1,1),A=r.surface("rock","#a9aaa0",2,.08),U=[];for(let L of e){let S=[];for(let T=0;T<(s?14:24);T++){let D=T+L.x*.019+L.z*.023,O=T*2.399+.6+(Qt(D,10)-.5)*.62,P=L.radius*(.84+Qt(D,11)*.1),N=L.x+Math.sin(O)*P,z=L.z+Math.cos(O)*P;a(L,N,z)||S.push({x:N/t,y:i(N,z)-.1,z:z/t,a:O,j:T,seed:D})}if(!S.length)continue;let M=new Ct(I,A,S.length);M.name=U.length?"shore-rocks-"+L.id:"shore-rocks";for(let T=0;T<S.length;T++){let D=S[T];_.position.set(D.x,D.y,D.z),_.rotation.set(Qt(D.seed,12)*1.2,D.a,Qt(D.seed,13)*1.1),_.scale.set(.27+Qt(D.seed,14)*.5,.2+Qt(D.seed,15)*.43,.31+Qt(D.seed,16)*.53),_.updateMatrix(),M.setMatrixAt(T,_.matrix)}M.castShadow=M.receiveShadow=!0,M.instanceMatrix.needsUpdate=!0,M.computeBoundingSphere(),n.add(M),U.push(M)}return{trees:m[0],foliage:u[0],treeBatches:m,foliageBatches:u,rocks:U[0],rockBatches:U,lodGeometries:[h,d,g,x],update(L){for(let S of[...m,...u]){let M=S.userData.lod,T=M.distance+M.radius,D=L.distanceToSquared(M.center)<=T*T?"high":"low";D!==M.level&&(S.geometry=M[D],M.level=D,M.shadowReceiverLod&&(S.receiveShadow=D==="high"))}}}}function hl(n,{scale:e,height:t,surfaces:i,helpers:r,village:s=Qs,paths:a,marketPoint:o={x:290,z:-30}}){let{cube:c,tube:l,ell:h}=r,d=[];function p(T){let D=new Map;T.updateMatrix();for(let O of[...T.children])if(O.isMesh){O.updateMatrix();let P=O.geometry.clone().applyMatrix4(O.matrix);D.has(O.material)||D.set(O.material,[]),D.get(O.material).push(P),T.remove(O)}for(let[O,P]of D){let N=ls(P,!1);P.forEach(Y=>Y.dispose());let z=new ut(N,O);z.castShadow=z.receiveShadow=!0,T.add(z)}}function f(T,D){let O=new Map,P=0;n.updateMatrixWorld(!0),D.updateMatrixWorld(!0);let N=new Pt().copy(D.matrixWorld).invert(),z=new Pt;for(let Y of T)for(let X of[...Y.children])if(X.isMesh){X.updateMatrixWorld(!0),z.multiplyMatrices(N,X.matrixWorld);let oe=X.geometry.clone().applyMatrix4(z);O.has(X.material)||O.set(X.material,[]),O.get(X.material).push(oe),P++,Y.remove(X),X.geometry.dispose()}for(let[Y,X]of O){let oe=ls(X,!1);X.forEach(ve=>ve.dispose()),oe.computeBoundingSphere();let ie=new ut(oe,Y);ie.castShadow=ie.receiveShadow=!0,D.add(ie)}return{sourceBatches:P,materialBatches:D.children.length}}function g(T,D=n,O=!0,P=0){let N=new Oe;N.name="village-house",D.add(N),N.position.set(O?T.x/e:T.x,O?t(T.x,T.z):0,O?T.z/e:T.z),N.rotation.y=T.facing??(T.z>60?Math.PI:0);let z=T.w/e,Y=T.d/e,X=T.h,oe=c(N,T.color,[0,X/2,0],[z,X,Y]);oe.material=i.surface("plaster",T.color,2,.035);let ie=i.surface("roof","#d5bbab",2,.065);for(let q of[-1,1]){let $=c(N,"#ba7655",[q*z/4,X+.43,0],[Math.hypot(z/2+.25,.85),.13,Y+.5]);$.rotation.z=-q*Math.atan2(.85,z/2+.25),$.material=ie,c(N,"#a75f45",[q*(z/2+.13),X+.01,0],[.14,.22,Y+.58])}let ve=l(N,"#a75f45",[0,X+.86,0],[.12,Y+.62,.12]);ve.rotation.x=Math.PI/2;for(let q of[.17,X*.52,X-.16])c(N,"#e2dbc7",[0,q,Y/2+.035],[z+.16,.14,.1]);let Pe=X>5?2:1;for(let q=0;q<Pe;q++)for(let $ of[-z*.31,z*.31]){let pe=1.5+q*2.35,Fe=Y/2+.08,Ce=c(N,"#415d63",[$,pe,Fe],[.75,1.2,.05]);Ce.material.roughness=.24,Ce.material.metalness=.1,c(N,"#e2dbc7",[$,pe,Fe+.045],[.065,1.15,.075]),c(N,"#e2dbc7",[$,pe,Fe+.046],[.7,.065,.076]);for(let Me of[-1,1]){let yt=c(N,T.shutter,[$+Me*.56,pe,Fe+.03],[.34,1.3,.07]);yt.rotation.y=Me*.24;for(let F=0;F<9;F++)c(N,"#876742",[$+Me*.56,pe-.52+F*.13,Fe+.085],[.33,.024,.04])}if(c(N,"#e2dbc7",[$,pe-.68,Fe],[1.7,.1,.16]),c(N,"#e2dbc7",[$,pe+.68,Fe],[1.7,.13,.15]),q===0){let Me=c(N,"#876742",[$,.79,Y/2+.25],[1.28,.2,.3]);if(Me.rotation.x=-.04,h)for(let yt=-2;yt<=2;yt++){let F=h(N,yt%2?"#6f8f58":"#88a866",[$+yt*.22,.99+Math.abs(yt)*.025,Y/2+.27],[.17,.31,.15]);F.rotation.z=yt*.14}if(Pe===1){let yt=c(N,T.shutter,[$,2.32,Y/2+.46],[1.55,.08,.82]);yt.rotation.x=-.15,c(N,T.shutter,[$,2.2,Y/2+.83],[1.55,.17,.07])}}}c(N,"#5a4b3d",[0,1.05,Y/2+.06],[.78,2.1,.1]);for(let q of[.55,1.42])for(let $ of[-.19,.19])c(N,"#745f4c",[$,q,Y/2+.125],[.29,.6,.045]);for(let q of[-.48,.48])c(N,"#e2dbc7",[q,1.08,Y/2+.11],[.16,2.22,.18]);c(N,"#e2dbc7",[0,2.18,Y/2+.11],[1.1,.16,.18]),c(N,"#c9baa1",[0,.07,Y/2+.34],[1.16,.14,.58]),h&&h(N,"#caa457",[.27,1.04,Y/2+.19],[.055,.055,.035]);let He=(P%2?-1:1)*z*.42,rt=Y/2+.55,it=l(N,"#e2dbc7",[He,2.91,Y/2+.34],[.035,.7,.035]);it.rotation.x=Math.PI/2,c(N,T.shutter,[He,2.62,rt],[.09,.56,.64]);for(let q of[-1,1]){let $=c(N,"#e2dbc7",[He+q*.052,2.62,rt],[.018,.22,.24]);$.rotation.x=(P%3-1)*.22}if(Pe===2){c(N,"#e2dbc7",[0,2.75,Y/2+.48],[z+.15,.18,.9]);for(let q=0;q<=10;q++)l(N,"#e2dbc7",[-z/2+q*z/10,3.18,Y/2+.84],[.034,.76,.034]);c(N,"#e2dbc7",[0,3.58,Y/2+.84],[z+.17,.08,.1])}for(let q of[-1,1])for(let $=0;$<Pe;$++)for(let pe of[-Y*.26,Y*.26])c(N,T.shutter,[q*(z/2+.03),1.5+$*2.35,pe],[.06,1.22,.8]),c(N,"#e2dbc7",[q*(z/2+.07),.82+$*2.35,pe],[.16,.1,1.05]),c(N,"#e2dbc7",[q*(z/2+.07),2.18+$*2.35,pe],[.16,.12,1.05]);return N.userData.facadeDetails={planters:2,awnings:Pe===1?2:0,balcony:Pe===2,windowPanes:Pe*8,doorPanels:4,doorway:!0,ridgeCaps:1,eaveFascias:2,hangingSigns:1,signMarks:2,signClearance:!0},p(N),d.push(N),N}s.forEach((T,D)=>g(T,n,!0,D));let x=new Oe;x.name="village-buildings",n.add(x),x.userData.batchDetails={sourceHouses:d.length,...f(d,x)},x.userData.cameraBlocker=!0;let m=new Oe;m.name="village-overhead-laundry",n.add(m);let u=["#bd6f53","#e8d99e","#587e7c","#73868b"],_=[...s].sort((T,D)=>T.z-D.z),w=Math.ceil(_.length/2),y=0,I=0;for(let T of[_.slice(0,w),_.slice(w)]){let D=[...T].sort((O,P)=>O.x-P.x);for(let O=1;O<D.length;O++){let P=D[O-1],N=D[O],z=P.x+P.w/2,Y=N.x-N.w/2;if(Y<=z)continue;let X=(z+Y)/2,oe=(P.z+N.z)/2,ie=Math.max(t(X,oe)+3.35,3.55),ve=(Y-z)/e,Pe=l(m,"#5a4b3d",[X/e,ie,oe/e],[.012,ve,.012]);Pe.rotation.z=Math.PI/2,y++;for(let He=0;He<3;He++){let rt=(z+(Y-z)*(He+1)/4)/e,it=u[(y+He)%u.length],q=c(m,it,[rt,ie-.24-He%2*.05,oe/e],[.46,.48+He%2*.1,.025]);q.rotation.z=(He-1)*.06,I++}}}m.userData.laundryDetails={lines:y,garments:I,clearance:!0},p(m);function A(T,D,O=!1){let P=[],N=[],z=[],Y=0;for(let ie=0;ie<T.length;ie++){let ve=T[Math.max(0,ie-1)],Pe=T[Math.min(T.length-1,ie+1)],He=T[ie],rt=Pe.x-ve.x,it=Pe.z-ve.z,q=Math.hypot(rt,it)||1;ie&&(Y+=Math.hypot(He.x-T[ie-1].x,He.z-T[ie-1].z)/e);for(let $ of[-1,1]){let pe=He.x-it/q*D/2*$,Fe=He.z+rt/q*D/2*$;P.push(pe/e,t(pe,Fe)+.018,Fe/e),N.push(($+1)/2*D/e,Y)}if(ie){let $=ie*2;z.push($-2,$-1,$,$-1,$+1,$)}}let X=new Lt;X.setAttribute("position",new st(P,3)),X.setAttribute("uv",new st(N,2)),X.setIndex(z),X.computeVertexNormals();let oe=new ut(X,i.surface("paving","#ded9c9",.75,.045));if(oe.name="village-path",oe.receiveShadow=!0,n.add(oe),O){let ie=Math.max(4,D*.08),ve=new nn(1,1,1),Pe=new Ct(ve,i.surface("rock","#dad4c6",1.2,.025),(T.length-1)*2),He=new At;Pe.name="village-curb";let rt=0;for(let it=1;it<T.length;it++){let q=T[it-1],$=T[it],pe=$.x-q.x,Fe=$.z-q.z,Ce=Math.hypot(pe,Fe),Me=-Fe/Ce,yt=pe/Ce;for(let F of[-1,1]){let Et=(q.x+$.x)/2+Me*(D/2+ie/2)*F,Je=(q.z+$.z)/2+yt*(D/2+ie/2)*F;He.position.set(Et/e,t(Et,Je)+.065,Je/e),He.rotation.set(0,Math.atan2(pe,Fe),0),He.scale.set(ie/e,.1,Ce/e+.025),He.updateMatrix(),Pe.setMatrixAt(rt++,He.matrix)}}Pe.castShadow=Pe.receiveShadow=!0,Pe.instanceMatrix.needsUpdate=!0,Pe.computeBoundingSphere(),n.add(Pe)}}let U=[];for(let T of a||[{points:Array.from({length:31},(D,O)=>({x:385-O*21,z:36+Math.sin(O*.19)*9})),width:55,curb:!0},{points:Array.from({length:15},(D,O)=>({x:23,z:-280+O*39})),width:40,curb:!0}]){let D=[T.points[0]];for(let O=1;O<T.points.length;O++){let P=T.points[O-1],N=T.points[O],z=Math.ceil(Math.hypot(N.x-P.x,N.z-P.z)/30);for(let Y=1;Y<=z;Y++)D.push({x:P.x+(N.x-P.x)*Y/z,z:P.z+(N.z-P.z)*Y/z})}if(A(D,T.width,T.curb),T.curb)for(let O=3;O<T.points.length-3;O+=6){let P=T.points[O-1],N=T.points[O+1],z=T.points[O],Y=N.x-P.x,X=N.z-P.z,oe=Math.hypot(Y,X)||1,ie=Math.floor(O/6)%2?1:-1,ve=T.width/2+9,Pe=z.x-X/oe*ve*ie,He=z.z+Y/oe*ve*ie;U.push({x:Pe/e,y:t(Pe,He),z:He/e})}}if(U.length){let T=new Gt(1,1,1,10),D=new yn(1,12,8),O=new At,P=new Ct(T,new zt({color:"#394447",roughness:.62,metalness:.38}),U.length),N=new Ct(D,new zt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34}),U.length);P.name="village-lamp-posts",N.name="village-lamp-globes";for(let z=0;z<U.length;z++){let Y=U[z];O.position.set(Y.x,Y.y+1.35,Y.z),O.scale.set(.065,2.7,.065),O.updateMatrix(),P.setMatrixAt(z,O.matrix),O.position.set(Y.x,Y.y+2.76,Y.z),O.scale.set(.18,.22,.18),O.updateMatrix(),N.setMatrixAt(z,O.matrix)}P.castShadow=P.receiveShadow=!0,N.castShadow=!1,N.receiveShadow=!0;for(let z of[P,N])z.instanceMatrix.needsUpdate=!0,z.computeBoundingSphere(),n.add(z)}let L=new Oe;L.name="harbor-market",L.position.set(o.x/e,t(o.x,o.z),o.z/e),n.add(L);for(let T of[-1.4,1.4])for(let D of[-.6,.6])l(L,"#876742",[T,1.2,D],[.045,2.4,.045]);let S=c(L,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);S.rotation.x=.07;for(let T=0;T<6;T++){let D=T%2?"#f3dfbe":"#bd6f53",O=(T-2.5)*.53,P=c(L,D,[O,2.395,0],[.53,.035,1.76]);P.rotation.x=.07,c(L,D,[O,2.27,.92],[.49,.18,.055])}c(L,"#a98961",[0,.7,0],[2.8,.15,.9]);let M=["#ce5949","#e6b64d","#709a55"];for(let T=0;T<5;T++){let D=(T-2)*.5;if(c(L,"#a68854",[D,.88,0],[.43,.2,.68]),h)for(let O=0;O<3;O++)h(L,M[(T+O)%M.length],[D+(O-1)*.11,1.05,O%2?-.11:.11],[.075,.085,.075])}return L.userData.marketDetails={canopyStripes:6,valances:6,produce:15},p(L),{building:g,houses:d,buildings:x}}var lt=20;var un=qn.map((n,e)=>({...n,x:n.x*16,z:n.z*16,dock:{x:n.dock.x*16,z:n.dock.z*16},radius:n.id==="home"?9e3:n.radius*16,coastSeed:1.3+e*1.7,relief:n.id==="home"?24:n.biome==="highlands"?85:n.biome==="rainforest"?42:n.biome==="rocky"?28:12})),Bc=Object.fromEntries(un.map(n=>[n.id,n])),us={minX:Math.min(...un.map(n=>n.x-n.radius))-1600,maxX:Math.max(...un.map(n=>n.x+n.radius))+1600,minZ:Math.min(...un.map(n=>n.z-n.radius))-1600,maxZ:Math.max(...un.map(n=>n.z+n.radius))+1600},Ku=(n,e)=>un.find(t=>Math.hypot(n-t.x,e-t.z)<t.radius)||null,_t=Object.fromEntries(un.map((n,e)=>{let t=qn[e],i=Math.hypot(t.dock.x-t.x,t.dock.z-t.z),r=(t.dock.x-t.x)/i,s=(t.dock.z-t.z)/i,a=n.radius*os(n,Math.atan2(s,r)),o=c=>({x:n.x+r*c,z:n.z+s*c});return[n.id,{id:n.id,...o(a+320),ux:r,uz:s,land:o(a-320),end:o(a+240),shore:o(a+200),width:38,deck:.72}]})),hs={x:_t.home.land.x-385,z:_t.home.land.z-40},fr=Qs.map(n=>({...n,x:n.x+hs.x,z:n.z+hs.z,facing:n.z>60?Math.PI:0})),cs=(n,e)=>({x:n+hs.x,z:e+hs.z}),ea=[{width:55,curb:!0,points:Array.from({length:31},(n,e)=>e===0?{..._t.home.land}:cs(385-e*21,36+Math.sin(e*.19)*9))},{width:40,curb:!0,points:Array.from({length:15},(n,e)=>cs(23,-280+e*39))},{width:36,points:[cs(-245,40),cs(-600,30),{x:Bc.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}],ju=cs(290,-30),qt={x:_t.fortress.land.x-_t.fortress.ux*800,z:_t.fortress.land.z-_t.fortress.uz*800},Qu={x:qt.x-115,z:qt.z+145},ot={pump:cs(330,65),cave:{x:_t.jungle.land.x-_t.jungle.ux*700,z:_t.jungle.land.z-_t.jungle.uz*700},estate:{x:qt.x,z:qt.z+102},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}};ot.supply={x:ot.cave.x+150,z:ot.cave.z-105};var vx=[{id:"gate",area:null,...Qu,hp:2},{id:"patrol",area:null,x:qt.x+110,z:qt.z+85,hp:2},{id:"hall",area:"estate",x:-65,z:15,hp:2},{id:"boss",area:"estate",x:0,z:-60,hp:3}];function Oc(n,e,t){return t=Math.max(0,Math.min(1,t)),t=t*t*(3-2*t),n+(e-n)*t}function pr(n,e,t=Ku(n,e)){if(!t)return-.32;let i=ur(t,n,e);if(i<=.01)return i;if(t.id==="home"){let r=Math.hypot(n-hs.x+80,e-hs.z);r<820&&(i=Oc(.68,i,(r-470)/350))}if(t.id==="fortress"){let r=Math.max(Math.abs(n-qt.x),Math.abs(e-qt.z));r<400&&(i=Oc(.85,i,(r-180)/220))}if(t.id==="jungle"){let r=Math.hypot(n-ot.cave.x,e-ot.cave.z);r<230&&(i=Oc(1.2,i,(r-100)/130))}return i}function kc(n,e,t){for(let i of t?[_t[t]]:Object.values(_t)){if(!i)continue;let r=n-i.land.x,s=e-i.land.z,a=r*i.ux+s*i.uz,o=r*i.uz-s*i.ux,c=Math.hypot(i.end.x-i.land.x,i.end.z-i.land.z);if(a>=-.5&&a<=c+.5&&Math.abs(o)<=i.width/2){let l=pr(i.land.x,i.land.z);return{dock:i,height:l+(i.deck-l)*Math.max(0,Math.min(1,a/c))}}}return null}function ei(n,e){return kc(n,e)?.height??pr(n,e)}function ul(n,e){return ea.some(t=>t.points.some((i,r)=>{if(!r)return!1;let s=t.points[r-1],a=i.x-s.x,o=i.z-s.z,c=Math.max(0,Math.min(1,((n-s.x)*a+(e-s.z)*o)/(a*a+o*o)));return Math.hypot(n-s.x-a*c,e-s.z-o*c)<t.width/2+35}))}var aM=Object.fromEntries(qn.map(n=>{let e=Math.hypot(n.dock.x-n.x,n.dock.z-n.z),t=(n.dock.x-n.x)/e,i=(n.dock.z-n.z)/e;return[n.id,{x:n.x+t*n.radius*1.06,z:n.z+i*n.radius*1.06,shore:{x:n.x+t*n.radius*.84,z:n.z+i*n.radius*.84}}]}));var ds={seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};function ed(n,{cube:e,ell:t,mat:i}){let r=new Oe;r.name="campaign-boat",n.add(r),t(r,"#233f52",[0,.05,0],[.85,.36,1.9]),t(r,"#dedbd0",[0,.22,0],[.8,.23,1.85]);let s=e(r,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]);s.name="boat-deck";let a=e(r,"#3b5355",[0,.57,ds.seatZ],[.92,.3,.48]);a.name="boat-seat",e(r,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let o=new ut(new nn(1.2,.48,.025),new ks({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));o.position.set(0,1.15,.68),r.add(o);let c=new ut(new mi(.2,.026,8,20),i("#2e3538"));c.name="boat-wheel",c.position.set(0,1.05,.28),r.add(c);let l=new Gt(1,1,1,8),h=new Ct(l,i("#d6dedc"),10),d=new At;h.name="boat-rails";let p=0;for(let _ of[-.68,.68]){for(let w of[.15,.85,1.55])d.position.set(_,.75,w),d.rotation.set(0,0,0),d.scale.set(.025,.5,.025),d.updateMatrix(),h.setMatrixAt(p++,d.matrix);for(let w of[.86,1.01])d.position.set(_,w,.85),d.rotation.set(Math.PI/2,0,0),d.scale.set(.025,1.4,.025),d.updateMatrix(),h.setMatrixAt(p++,d.matrix)}h.castShadow=!0,h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere(),r.add(h);let f=new zt({color:"#b7d6d8",emissive:"#31545a",emissiveIntensity:.38,roughness:.28}),g=new Ct(new Gt(.1,.1,.03,16),f,3);g.name="boat-gauges";for(let _=0;_<3;_++)d.position.set((_-1)*.28,.91,.3),d.rotation.set(Math.PI/2,0,0),d.scale.set(_===1?1:.82,_===1?1:.82,1),d.updateMatrix(),g.setMatrixAt(_,d.matrix);g.instanceMatrix.needsUpdate=!0,g.computeBoundingSphere(),r.add(g);let x=t(r,"#d84e46",[-.65,.79,.94],[.075,.075,.075]),m=t(r,"#52b878",[.65,.79,.94],[.075,.075,.075]);x.name="boat-port-light",m.name="boat-starboard-light",x.material=new zt({color:"#d84e46",emissive:"#b32b25",emissiveIntensity:.9}),m.material=new zt({color:"#52b878",emissive:"#238547",emissiveIntensity:.9}),e(r,"#303b40",[0,.35,-1.75],[.42,.6,.38]),e(r,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let u=new ut(new En(1.5,5),new xn({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.position.set(0,.03,-3.3),r.add(u),r.userData.boatDetails={rails:10,gauges:3,navigationLights:2},{boat:r,wake:u}}function td(n,e){e.add(n.root),n.root.position.set(0,0,ds.seatZ),n.root.rotation.set(0,0,0),n.rig.rotation.set(0,0,0),n.hips.position.y=ds.hips;for(let t of n.arms)t.arm.rotation.x=-.85,t.arm.rotation.z=-t.side*.18,t.forearm.rotation.x=-.72;for(let t of n.legs)t.thigh.rotation.x=-1.68,t.calf.rotation.x=1.68,t.shoe.rotation.x=0}var nd=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);var id=Object.values(_t),Cn=Array.from({length:5},(n,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2})),Mx=Cn.map(n=>"cell-"+n.id),bx=Object.fromEntries(id.map(n=>[n.id,"dock-"+n.id]));function Sx(n){let e=null,t=15625;for(let i of id){let r=i.x-n.p.x,s=i.z-n.p.z,a=r*r+s*s;a<t&&(e=i,t=a)}return e}function vn(n,e,t,i,r){let s=n[e]||(n[e]={});return Object.assign(s,i),s.id=t,s.label=r,e+1}function rd(n,e){let t=0;if(e.interior==="cave")return t=vn(n,t,"paper",ot.paper,e.paper?e.gun?"supplies":"take-gun":"move-paper"),t=vn(n,t,"cave-exit",ot.caveExit,"leave-cave"),n.length=t,n;if(e.interior==="estate")return t=vn(n,t,"key",ot.key,"take-key"),t=vn(n,t,"stairs",ot.stairs,"cellar"),t=vn(n,t,"estate-exit",ot.estateExit,"leave-estate"),n.length=t,n;if(e.interior==="cellar"){for(let r of Cn)e.released.includes(r.id)||(t=vn(n,t,Mx[r.id],r,"free-person"));return t=vn(n,t,"cellar-exit",ot.cellarExit,"upstairs"),n.length=t,n}if(e.boat){let r=Sx(e);return r&&(t=vn(n,t,bx[r.id],r,"dock")),n.length=t,n}let i=_t[e.island];if(t=vn(n,t,"boat",i.shore,e.released.length===5&&!e.boarded?"board-group":"boat"),e.island==="home"&&(t=vn(n,t,"pump",ot.pump,"refuel")),e.island==="jungle"&&(t=vn(n,t,"cave",ot.cave,"enter-cave"),t=vn(n,t,"supply",ot.supply,"supplies")),e.island==="fortress"&&(t=vn(n,t,"estate",ot.estate,"enter-estate")),["highlands","smugglers","paradise"].includes(e.island)){let r=Bc[e.island];t=vn(n,t,"supplies",r,"supplies")}return n.length=t,n}function sd(n,e){let t=null,i=1/0;for(let r of n){let s=r.id.startsWith("cell-")?85:r.id.startsWith("dock-")?125:65,a=r.x-e.x,o=r.z-e.z,c=a*a+o*o;c<s*s&&c<i&&(t=r,i=c)}return t}function wx(n,e){if(e.complete)return n.key="complete",n.target=null,n;if(!e.docked)return n.key="dock-goal",n.target=_t.home,n;if(!e.tanked)return n.key="fuel-goal",n.target=e.boat?_t.home:ot.pump,n;if(!e.gun)return e.interior==="cave"?(n.key=e.paper?"gun-goal":"paper-goal",n.target=ot.paper,n):(n.key="cave-goal",n.target=e.boat?_t.jungle:e.island==="jungle"?ot.cave:_t[e.island].shore,n);if(e.interior==="cave")return n.key="exit-cave-goal",n.target=ot.caveExit,n;if(!e.key){if(e.interior==="estate"){let t=e.guards.find(i=>i.id==="boss");return n.key=t.hp>0?"boss-goal":"key-goal",n.target=t.hp>0?t:ot.key,n}return n.key="estate-goal",n.target=e.boat?_t.fortress:e.island==="fortress"?ot.estate:_t[e.island].shore,n}return e.released.length<5?(n.key=e.interior==="cellar"?"people-goal":"cellar-goal",n.target=e.interior==="cellar"?Cn.find(t=>!e.released.includes(t.id)):e.interior==="estate"?ot.stairs:e.boat?_t.fortress:ot.estate,n):e.interior?(n.key="escort-goal",n.target=e.interior==="cellar"?ot.cellarExit:ot.estateExit,n):e.boarded?(n.key="home-goal",n.target=e.boat?_t.home:e.island==="home"?_t.home.shore:_t[e.island].shore,n):(n.key="boat-goal",n.target=_t.fortress.shore,n)}function Vc(n,e){if(wx(n,e),e.boat||e.interior||!n.target)return n;let t=_t[e.island],i=!!kc(e.p.x,e.p.z,e.island);return n.target===t.shore?!i&&nd(e.p,t.land)>65&&(n.target=t.land):i&&nd(e.p,t.land)>45&&(n.target=t.land),n}function dl(n){return Vc({},n)}function Gc(n,e,t,i,r){let s=e.interior?1.8:e.boat?.65:1.3;if(n.fillStyle=e.interior?"#25312d":"#176475",n.fillRect(0,0,t,i),n.save(),n.translate(t/2-e.p.x*s,i/2-e.p.z*s),n.scale(s,s),e.interior){if(n.fillStyle="#6f7568",n.fillRect(-115,-125,230,310),n.strokeStyle="#beb99e",n.lineWidth=8,n.strokeRect(-115,-125,230,310),e.interior==="cave"&&(n.fillStyle="#967756",n.fillRect(-25,-60,50,35),n.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||n.fillRect(-17,-55,34,22)),e.interior==="estate"&&(n.fillStyle="#9b7751",n.fillRect(-45,-105,90,25),n.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&n.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of Cn)n.strokeStyle="#bac6bf",e.released.includes(l.id)||n.strokeRect(l.x-18,-112,36,80)}else{for(let l of un){o(l,1,"#398b8b",-4*lt),o(l,1,"#d9cba2"),o(l,1,l.biome==="highlands"?"#8f9882":"#759575",18*lt);for(let d=0;d<26;d++){let p=d*2.39996+l.x*.001,f=l.radius*(.36+d%7*.075),g=l.x+Math.sin(p)*f,x=l.z+Math.cos(p)*f;if(!(l.id==="home"&&(dr({x:g,z:x},l.id,fr)||ul(g,x)))&&!(l.id==="fortress"&&Math.abs(g-qt.x)<125&&Math.abs(x-qt.z)<155)){n.strokeStyle="#365e49",n.lineWidth=5;for(let m=0;m<7;m++){let u=m*Math.PI*2/7;n.beginPath(),n.moveTo(g,x),n.quadraticCurveTo(g+Math.sin(u+.25)*13,x+Math.cos(u+.25)*13,g+Math.sin(u)*25,x+Math.cos(u)*25),n.stroke()}}}n.fillStyle="#fff4cc",n.font="18px system-ui",n.textAlign="center",n.fillText(r(l.id),l.x,l.z-l.radius*.58);let h=_t[l.id];n.strokeStyle="#a2865b",n.lineWidth=h.width,n.beginPath(),n.moveTo(h.land.x,h.land.z),n.lineTo(h.end.x,h.end.z),n.stroke()}for(let l of ea)n.strokeStyle="#b7baa5",n.lineWidth=l.width,n.beginPath(),l.points.forEach((h,d)=>d?n.lineTo(h.x,h.z):n.moveTo(h.x,h.z)),n.stroke();for(let l of fr)n.fillStyle="#304f43",n.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),n.fillStyle=l.color,n.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),n.fillStyle="#ab7861",n.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),n.strokeStyle="#d4aa83",n.lineWidth=4,n.beginPath(),n.moveTo(l.x-l.w/2,l.z),n.lineTo(l.x+l.w/2,l.z),n.stroke();n.fillStyle="#e0d5b9",n.fillRect(qt.x-80,qt.z-80,160,160),n.fillStyle="#352e25",n.fillRect(qt.x-20,qt.z+76,40,12),n.fillStyle="#404b40",n.fillRect(ot.cave.x-36,ot.cave.z-30,72,36),n.fillStyle="#d28757",n.fillRect(ot.pump.x-15,ot.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of Cn)e.released.includes(l.id)||c(l,"#d3dcbe",10);let a=dl(e).target;a&&(n.strokeStyle="#f5d281",n.lineWidth=3,n.beginPath(),n.arc(a.x,a.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),n.stroke()),n.save(),n.translate(e.p.x,e.p.z),n.rotate(-e.heading),e.boat?(n.fillStyle="#efe4c9",n.beginPath(),n.moveTo(-18,-32),n.lineTo(18,-32),n.lineTo(22,28),n.lineTo(0,50),n.lineTo(-22,28),n.closePath(),n.fill()):(n.fillStyle="#b6ddd3",n.beginPath(),n.arc(0,0,9,0,Math.PI*2),n.fill()),n.strokeStyle="#fff6c7",n.lineWidth=3,n.beginPath(),n.moveTo(0,6),n.lineTo(0,28),n.stroke(),n.restore(),e.shot&&(n.strokeStyle="#ffeac5",n.lineWidth=2,n.beginPath(),n.moveTo(e.shot.from.x,e.shot.from.z),n.lineTo(e.shot.to.x,e.shot.to.z),n.stroke()),n.restore();function o(l,h,d,p=0){n.fillStyle=d,n.beginPath();for(let f=0;f<=96;f++){let g=f/96*Math.PI*2,x=l.radius*os(l,g)*h-p,m=l.x+Math.cos(g)*x,u=l.z+Math.sin(g)*x;f?n.lineTo(m,u):n.moveTo(m,u)}n.closePath(),n.fill()}function c(l,h,d){n.fillStyle=h,n.beginPath(),n.arc(l.x,l.z,d,0,Math.PI*2),n.fill()}}function Tx(n,e,t=!1){let i=e.interior||"",r=!!e.boat,s=Math.round(e.p.x/20),a=Math.round(e.p.z/20),o=Math.round(e.heading*12),c=!!e.boarded,l=e.guards||[],h=e.released||[],d=!n.ready||n.area!==i||n.island!==e.island||n.boat!==r||n.x!==s||n.z!==a||n.heading!==o||n.boarded!==c||n.animated!==t||n.guardCount!==l.length||n.releasedCount!==h.length,p=n.guards||(n.guards=[]),f=n.released||(n.released=[]);for(let g=0;g<l.length;g++){let x=l[g].hp>0;p[g]!==x&&(d=!0),p[g]=x}for(let g=0;g<h.length;g++)f[g]!==h[g]&&(d=!0),f[g]=h[g];return p.length=l.length,f.length=h.length,n.ready=!0,n.area=i,n.island=e.island,n.boat=r,n.x=s,n.z=a,n.heading=o,n.boarded=c,n.animated=t,n.guardCount=l.length,n.releasedCount=h.length,d}function Ex(n,e,t,i){let r=Math.sin(i),s=Math.cos(i);for(let a=0;a<e.length;a++){let o=e[a],c=n[a],l=35+o.id*15,h=o.id%2?16:-16;c.x=t.x-r*l+s*h,c.z=t.z-s*l-r*h}return n}function Ax(n,e,t,i,r=lt){return n.setXYZ(0,e.x/r,i,e.z/r),n.setXYZ(1,t.x/r,i,t.z/r),n.needsUpdate=!0,n}function Cx(n,e,t){let i=e*7;return n.swing=Math.sin(i),n.step=t?.24:0,n.bounce=t?Math.cos(i*2):0,n}function ad({canvas:n,getState:e,makeHuman:t,onLost:i,rendererFactory:r=s=>new rs(s)}){let s=r({canvas:n,antialias:!0,powerPreference:"high-performance"}),a=innerWidth<=700;s.setPixelRatio(Math.min(devicePixelRatio||1,a?1.1:1.5)),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Xt,s.toneMapping=$r,s.shadowMap.enabled=!0,s.shadowMap.type=Jr,s.shadowMap.autoUpdate=!1;let o=new Ji,c=new Zt(68,innerWidth/innerHeight,.04,6e3);o.add(c),o.background=new tt("#b9dbe5"),o.fog=new Zi("#b9dbe5",650,2400);let l=new er("#d5ecfa","#566143",2),h=new nr("#fff2d6",2.8);h.castShadow=!0,h.shadow.mapSize.set(a?1024:2048,a?1024:2048),Object.assign(h.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),h.shadow.normalBias=.025,o.add(l,h,h.target);let d=nl(s),p=new Map,f=new Map,g=E=>(p.has(E)||p.set(E,d.forColor(E)||new zt({color:E,roughness:.85})),p.get(E)),x=(E,B)=>(f.has(E)||f.set(E,B()),f.get(E)),m=(E,B,Q,se=[0,0,0],Qe=[1,1,1])=>{let Ke=new ut(B,Q);return Ke.position.set(...se),Ke.scale.set(...Qe),Ke.castShadow=Ke.receiveShadow=!0,E.add(Ke),Ke},u=(E,B,Q,se)=>m(E,x("box",()=>new nn),g(B),Q,se),_=(E,B,Q,se)=>m(E,x("cylinder",()=>new Gt(1,1,1,12)),g(B),Q,se),w=(E,B,Q,se)=>m(E,x("sphere",()=>new yn(1,16,12)),g(B),Q,se),y={mat:g,geo:x,mesh:m,cube:u,tube:_,ell:w},I=new Oe,A=new Oe,U=E=>{let B=new Map;E.updateMatrix();for(let Q of[...E.children])if(Q.isMesh){Q.updateMatrix();let se=Q.geometry.clone().applyMatrix4(Q.matrix);B.has(Q.material)||B.set(Q.material,[]),B.get(Q.material).push(se),E.remove(Q)}for(let[Q,se]of B){let Qe=ls(se,!1);se.forEach(ft=>ft.dispose());let Ke=new ut(Qe,Q);Ke.castShadow=Ke.receiveShadow=!0,E.add(Ke)}},L=(E,B)=>{let Q=new Set(E.legs.map(Be=>Be.shoe)),se=0,Qe=0,Ke=0;E.root.traverse(Be=>{Be.isMesh&&se++});let ft=Be=>{for(let at of[...Be.children])at.isMesh||ft(at);let Ut=new Map;for(let at of[...Be.children])at.isMesh&&!Q.has(at)&&!at.isInstancedMesh&&(Ut.has(at.material)||Ut.set(at.material,[]),Ut.get(at.material).push(at));for(let[at,It]of Ut)if(It.length>1){let Ot=It.map(te=>(te.updateMatrix(),te.geometry.clone().applyMatrix4(te.matrix))),R=ls(Ot,!1);Ot.forEach(te=>te.dispose());let H=new ut(R,at);H.name=`${B}-rigid-batch-${Ke++}`,H.castShadow=It.some(te=>te.castShadow),H.receiveShadow=It.some(te=>te.receiveShadow),It.forEach(te=>Be.remove(te)),Be.add(H)}};ft(E.root),E.root.traverse(Be=>{Be.isMesh&&Qe++}),E.root.userData.rigidBatchProfile={sourceMeshes:se,renderMeshes:Qe,batches:Ke,animatedShoes:Q.size}},S=(E,B,Q)=>{let se=new Oe;se.name="campaign-supply-cache-"+E,se.position.set(B/lt,ei(B,Q),Q/lt),I.add(se),u(se,"#a98961",[0,.34,0],[1.45,.68,.88]),u(se,"#debb63",[0,.72,0],[1.52,.09,.94]);for(let Qe of[-.54,.54])u(se,"#debb63",[Qe,.35,.46],[.1,.62,.06]);u(se,"#bd6e4e",[-1.02,.42,.04],[.42,.84,.55]),u(se,"#394447",[-1.02,.87,.04],[.2,.08,.22]);for(let Qe of[-1.15,-.89])u(se,"#394447",[Qe,.75,.04],[.05,.24,.05]);return u(se,"#394447",[-1.02,.84,.04],[.26,.05,.05]),u(se,"#596b4e",[.93,.23,.04],[.72,.46,.58]),u(se,"#394447",[.93,.48,.04],[.48,.05,.26]),u(se,"#e2dbc7",[.82,.86,-.03],[.7,.34,.5]),u(se,"#bd6e4e",[.82,.87,.235],[.34,.08,.025]),u(se,"#bd6e4e",[.82,.87,.235],[.08,.25,.025]),se.userData.supplyDetails={crate:!0,fuelCan:!0,medkit:!0,ammoBox:!0},U(se),se};o.add(I,A);let M=a?96:192,T=Math.max(...un.map(E=>E.radius)),D=[];for(let E of un){let B=Math.max(a?48:72,Math.round(M*E.radius/T/8)*8),Q=zc(E,{segments:B});Q.userData.terrainSegments=B,D.push(Q),Q.scale.set(1/lt,1,1/lt),Q.position.set(E.x/lt,0,E.z/lt);let se=Q.geometry.attributes.position;for(let fe=0;fe<se.count;fe++)se.setY(fe,pr(E.x+se.getX(fe),E.z+se.getZ(fe),E));let Qe=new Float32Array(se.count*3),Ke=new tt;for(let fe=0;fe<se.count;fe++){let je=Math.hypot(se.getX(fe),se.getZ(fe))/E.radius;Ke.set(je>.8?"#fff7e4":E.biome==="rocky"?"#d1d4c5":"#dce2c8"),Ke.toArray(Qe,fe*3)}Q.geometry.setAttribute("color",new Jt(Qe,3)),Q.geometry.computeVertexNormals(),Q.material.dispose(),Q.material=ll(d,lt),Q.material.vertexColors=!0,I.add(Q);let ft=_t[E.id],Be=new Oe,Ut=pr(ft.land.x,ft.land.z);Be.name="pier-"+E.id,Be.position.set(ft.land.x/lt,Ut,ft.land.z/lt),Be.rotation.y=Math.atan2(ft.ux,ft.uz),I.add(Be);let at=fl(ft.end,ft.land)/lt,It=Math.ceil(at/.26),Ot=new Ct(x("box",()=>new nn),g("#a98961"),It+1),R=new At;Ot.name="pier-deck-"+E.id;for(let fe=0;fe<=It;fe++){let je=at*fe/It;R.position.set(0,(ft.deck-Ut)*fe/It-.075,je),R.scale.set(ft.width/lt,.15,at/It+.006),R.updateMatrix(),Ot.setMatrixAt(fe,R.matrix)}Ot.castShadow=Ot.receiveShadow=!0,Be.add(Ot);let H=x("pier-piling",()=>new Gt(1,1,1,12)),te=new Ct(H,g("#876742"),8);te.name="pier-pilings-"+E.id;let J=0;for(let fe of[-.8,.8])for(let je of[0,at*.33,at*.66,at]){let Mt=(ft.deck-Ut)*je/at;R.position.set(fe,Mt-.65,je),R.scale.set(.075,1.6,.075),R.updateMatrix(),te.setMatrixAt(J++,R.matrix)}te.castShadow=te.receiveShadow=!0,te.instanceMatrix.needsUpdate=!0,te.computeBoundingSphere(),Be.add(te);let ye=new Ct(H,g("#394447"),8);ye.name="pier-bollards-"+E.id;let _e=0;for(let fe of[-.72,.72])for(let je of[at*.78,at*.98]){let Mt=(ft.deck-Ut)*je/at;R.position.set(fe,Mt+.25,je),R.scale.set(.075,.5,.075),R.updateMatrix(),ye.setMatrixAt(_e++,R.matrix),R.position.set(fe,Mt+.51,je),R.scale.set(.13,.08,.13),R.updateMatrix(),ye.setMatrixAt(_e++,R.matrix)}ye.castShadow=ye.receiveShadow=!0,ye.instanceMatrix.needsUpdate=!0,ye.computeBoundingSphere(),Be.add(ye),["paradise","smugglers","highlands"].includes(E.id)&&S(E.id,E.x,E.z)}S("jungle",ot.supply.x,ot.supply.z);let O=Math.max(us.maxX-us.minX,us.maxZ-us.minZ)/lt+12e3,P=al(un.map(E=>[E.x/lt,E.z/lt,E.radius/lt,E.radius/lt]),{size:O,coastSeeds:un.map(E=>E.coastSeed)});I.add(P.mesh);let N=ol(5e3);I.add(N);let z=cl(I,un,{scale:lt,height:pr,surfaces:d,small:a,dense:!0,lod:!0,clear:(E,B,Q)=>dr({x:B,z:Q},E.id,fr)||E.id==="home"&&ul(B,Q)||E.id==="jungle"&&(fl({x:B,z:Q},ot.cave)<100||fl({x:B,z:Q},ot.supply)<58)||E.id==="fortress"&&Math.abs(B-qt.x)<125&&Math.abs(Q-qt.z)<155||fl({x:B,z:Q},_t[E.id].land)<90}),Y=hl(I,{scale:lt,height:pr,surfaces:d,helpers:y,village:fr,paths:ea,marketPoint:ju}),{boat:X,wake:oe}=ed(I,y),ie=new Oe;ie.name="harbor-fuel-pump",ie.position.set(ot.pump.x/lt,ei(ot.pump.x,ot.pump.z),ot.pump.z/lt),I.add(ie),u(ie,"#a98961",[0,.06,0],[1.05,.12,.92]),u(ie,"#e6d6b8",[0,.68,0],[.75,1.24,.65]),u(ie,"#bd6e4e",[0,1.34,0],[.82,.28,.72]),u(ie,"#263f41",[0,.99,.34],[.48,.25,.045]),u(ie,"#e8d99e",[0,.99,.37],[.31,.1,.018]),_(ie,"#2d3435",[.53,.72,0],[.035,1.18,.035]);let ve=u(ie,"#394447",[.53,.39,.29],[.1,.24,.08]);ve.rotation.z=-.22,u(ie,"#bd6e4e",[0,.39,.35],[.3,.1,.055]),_(ie,"#e6d6b8",[0,2.18,-.06],[.055,1.42,.055]);let Pe=_(ie,"#bd6e4e",[0,2.9,-.06],[.42,.1,.42]);Pe.rotation.x=Math.PI/2;let He=_(ie,"#f3dfbe",[0,2.9,.005],[.31,.115,.31]);He.rotation.x=Math.PI/2,ie.userData.fuelDetails={display:!0,hose:!0,nozzle:!0,marker:!0},U(ie);let rt=new Oe;rt.name="campaign-cave-entrance",rt.position.set(ot.cave.x/lt,ei(ot.cave.x,ot.cave.z),ot.cave.z/lt),I.add(rt);let it=[[-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],[2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],[-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]],q=new At,$=new Ct(x("cave-mouth-rock",()=>new yn(1,12,8)),g("#92968b"),it.length);$.name="cave-entrance-rocks",$.castShadow=!0,$.receiveShadow=!0,it.forEach(([E,B,Q,se,Qe,Ke,ft],Be)=>{q.position.set(E,B,Q),q.scale.set(se,Qe,Ke),q.rotation.set(0,0,ft),q.updateMatrix(),$.setMatrixAt(Be,q.matrix)}),$.instanceMatrix.needsUpdate=!0,$.computeBoundingSphere(),rt.add($),u(rt,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let pe=new Ct(x("cave-torch-handle",()=>new Gt(1,1,1,7)),g("#4c3525"),2);pe.name="cave-entrance-torches",pe.castShadow=!0;let Fe=new zt({color:"#ffcf75",emissive:"#ff7f32",emissiveIntensity:1.15,roughness:.55}),Ce=new Ct(x("cave-torch-flame",()=>new Gn(1,1,7)),Fe,2);Ce.name="cave-entrance-flames",[-1,1].forEach((E,B)=>{q.position.set(E*1.18,1.15,.18),q.scale.set(.035,.85,.035),q.rotation.set(0,0,-E*.15),q.updateMatrix(),pe.setMatrixAt(B,q.matrix),q.position.set(E*1.18,1.65,.18),q.scale.set(.12,.22,.12),q.rotation.set(0,0,E*.08),q.updateMatrix(),Ce.setMatrixAt(B,q.matrix)}),pe.instanceMatrix.needsUpdate=!0,Ce.instanceMatrix.needsUpdate=!0,pe.computeBoundingSphere(),Ce.computeBoundingSphere(),rt.add(pe,Ce),rt.userData.entranceDetails={archStones:12,torches:2,clearOpening:!0};let Me=new Oe;Me.name="guarded-estate",Me.position.set(qt.x/lt,.85,qt.z/lt),I.add(Me),u(Me,"#e2dbc7",[0,1.55,0],[8,3.1,8]),u(Me,"#a68854",[0,3.2,0],[8.6,.25,8.6]),u(Me,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let E of[-1,1]){let B=u(Me,"#ba7655",[E*1.7,5.9,-.4],[3.7,.15,7.4]);B.rotation.z=-E*.3}u(Me,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let E of[-2.7,2.7])for(let B of[1.7,4.3])u(Me,"#425761",[E,B,4.04],[1.15,1.3,.06]),u(Me,"#e2dbc7",[E,B,4.11],[.08,1.38,.08]),u(Me,"#e2dbc7",[E,B,4.11],[1.2,.08,.08]);for(let E of[-1.4,1.4])_(Me,"#e2dbc7",[E,1.3,4.65],[.16,2.6,.16]);u(Me,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let E=0;E<3;E++)u(Me,"#92968b",[0,-.03+E*.06,4.4+E*.4],[2.6,.15,1.25-E*.25]);for(let E of[-3.4,3.4])for(let B of[1.7,4.3]){u(Me,"#587e7c",[E,B,4.07],[.32,1.35,.1]);for(let Q=0;Q<8;Q++)u(Me,"#876742",[E,B-.5+Q*.14,4.14],[.3,.025,.045])}u(Me,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let E=-10;E<=10;E++)_(Me,"#e2dbc7",[E*.39,3.57,5.05],[.033,.83,.033]);u(Me,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);for(let E of[-2.45,2.45]){u(Me,"#a98961",[E,.3,4.62],[1.25,.42,.55]);for(let B=-2;B<=2;B++){let Q=w(Me,B%2?"#6f8f58":"#88a866",[E+B*.2,.67+Math.abs(B)*.025,4.62],[.18,.38,.18]);Q.rotation.z=B*.12}}let yt=new zt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34});for(let E of[-1.03,1.03]){u(Me,"#394447",[E,2.05,4.14],[.08,.1,.24]);let B=w(Me,"#ffe4a8",[E,1.88,4.27],[.13,.19,.13]);B.material=yt}let F=_(Me,"#d4a957",[0,3.02,4.11],[.38,.1,.38]);F.rotation.x=Math.PI/2,Me.userData.estateDetails={planters:2,lanterns:2,crest:!0},U(Me),Me.userData.cameraBlocker=!0;let Et=[Y.buildings,Me];Et.forEach(E=>E.updateWorldMatrix(!0,!0));let Je={};function ke(E,B=11,Q=15){let se=new Oe;se.name=E,A.add(se),Je[E]=se,u(se,E==="cave"?"#777a6b":"#a68854",[0,-.1,1],[B,.2,Q]);let Qe=new Oe;Qe.name=E+"-walls",se.add(Qe);for(let ft of[-B/2,B/2])u(Qe,E==="cave"?"#92968b":"#e2dbc7",[ft,1.65,1],[.3,3.3,Q]);u(Qe,E==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-Q/2],[B,3.3,.3]),U(Qe),u(se,"#313f38",[0,1.1,Q/2-.2],[1.7,2.2,.15]);let Ke=new tr(E==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return Ke.position.set(0,2.7,1),se.add(Ke),se.userData.shellDetails={sourceMeshes:5,renderMeshes:3},se}let Ee=ke("cave",12,17),Dt=x("cave-formation",()=>new Gn(1,1,9)),Te=new Ct(Dt,g("#777a6b"),16),Ye=new At;Te.name="cave-formations";let Ht=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],[5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]],mt=0;for(let[E,B,Q,se]of Ht)Ye.position.set(E,se/2,B),Ye.rotation.set(0,mt*.71%Math.PI,0),Ye.scale.set(Q,se,Q),Ye.updateMatrix(),Te.setMatrixAt(mt++,Ye.matrix),Ye.position.set(-E,3.3-se*.48,B+.55),Ye.rotation.set(0,mt*.53%Math.PI,Math.PI),Ye.scale.set(Q*.82,se*.92,Q*.82),Ye.updateMatrix(),Te.setMatrixAt(mt++,Ye.matrix);Te.castShadow=Te.receiveShadow=!0,Te.instanceMatrix.needsUpdate=!0,Te.computeBoundingSphere(),Ee.add(Te),Ee.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:!0};let C=new Oe;C.name="cave-evidence-table",Ee.add(C),u(C,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let E of[-.75,.75])for(let B of[-2.45,-1.55])_(C,"#876742",[E,.35,B],[.065,.7,.065]);for(let E of[-2.47,-1.53])u(C,"#876742",[0,.57,E],[1.72,.2,.07]);u(C,"#876742",[0,.56,-1.38],[.72,.27,.08]),w(C,"#394447",[0,.56,-1.32],[.045,.045,.04]),_(C,"#394447",[.72,.86,-2.18],[.17,.1,.17]);let v=new zt({color:"#ffe4a8",emissive:"#ff9f45",emissiveIntensity:1.05,roughness:.28,transparent:!0,opacity:.88}),Z=w(C,"#ffe4a8",[.72,1.08,-2.18],[.14,.22,.14]);Z.material=v,_(C,"#394447",[.72,1.31,-2.18],[.12,.07,.12]),C.userData.evidenceDetails={legs:4,drawer:!0,lantern:!0,newspaper:!0,hiddenGun:!0},U(C);let ne=document.createElement("canvas");ne.width=256,ne.height=320;let ae=ne.getContext("2d");ae.fillStyle="#ddd5bd",ae.fillRect(0,0,256,320),ae.fillStyle="#3a3b32",ae.font="bold 26px serif",ae.fillText("ISLAND DAILY",18,38),ae.fillRect(18,51,220,3);for(let E=0;E<20;E++)ae.fillRect(18,72+E*10,94-E%4*6,2),ae.fillRect(128,72+E*10,104-E%3*8,2);let ee=new Di(ne);ee.colorSpace=Xt;let ze=new ut(new En(.9,1.05),new zt({map:ee,side:Wt}));ze.name="cave-newspaper",ze.rotation.x=-Math.PI/2,ze.position.set(0,.83,-2),Ee.add(ze);function de(E){let B=new Oe;E.add(B),u(B,"#333a3d",[0,0,.06],[.12,.12,.34]);let Q=u(B,"#695646",[0,-.11,-.03],[.1,.23,.13]);return Q.rotation.x=-.22,u(B,"#8b9294",[0,.08,.03],[.11,.035,.3]),B}let De=de(Ee);De.name="cave-hidden-gun",De.position.set(0,.87,-2),De.rotation.y=Math.PI/2;let Ue=ke("estate",11,15),he=new Oe;he.name="estate-fixtures",Ue.add(he),u(he,"#816947",[0,.42,-4.6],[2.6,.85,.9]),u(he,"#decc9f",[0,.05,1],[3,.025,10]);for(let E=0;E<6;E++)u(he,"#777a6b",[3.5,.06*E,-4.75+E*.28],[1.7,.12,.65]);he.userData.batchDetails={sourceMeshes:8,renderMeshes:3},U(he);let ge=new Oe;ge.name="estate-interior-details",Ue.add(ge);let Ze=["#6f443d","#40626a","#718052"];for(let[E,B]of[-2.7,0,2.7].entries())u(ge,"#a68854",[B,1.9,-6.31],[1.42,1.22,.08]),u(ge,Ze[E],[B,1.9,-6.25],[1.12,.92,.045]);u(ge,"#a68854",[0,.93,-6.29],[8.7,.08,.08]);for(let E of[-4.35,4.35]){u(ge,"#394447",[E,2.02,-6.24],[.1,.32,.1]);let B=w(ge,"#ffe4a8",[E,1.79,-6.15],[.14,.19,.11]);B.material=yt}u(ge,"#394447",[0,.86,-4.58],[1.12,.025,.52]);for(let E of[-.52,0,.52])u(ge,"#d8d2c3",[E,.88,-4.57],[.4,.012,.3]);_(ge,"#394447",[.93,1.08,-4.58],[.035,.42,.035]);let Le=w(ge,"#ffe4a8",[.93,1.34,-4.58],[.18,.16,.18]);Le.material=yt,Ue.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:!0},U(ge);let xe=new ut(new mi(.13,.036,8,16),new zt({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));xe.position.set(0,.88,-3),Ue.add(xe),u(xe,"#debb63",[0,-.2,0],[.065,.32,.065]);let nt=ke("cellar",11,15),V=[],le=new Oe;le.name="cellar-static",nt.add(le);let me=Object.entries(Je);for(let E of Cn){let B=new Oe;B.name="cell-door-"+E.id,B.position.set(E.x/lt,0,-1.5),nt.add(B),V[E.id]=B;for(let Qe=-2;Qe<=2;Qe++)_(B,"#475759",[Qe*.32,1.3,0],[.025,2.6,.025]);for(let Qe of[.1,2.5])u(B,"#475759",[0,Qe,0],[1.65,.055,.055]);for(let Qe of[.45,2.15])_(B,"#394447",[-.78,Qe,.07],[.045,.12,.045]);m(B,x("cell-padlock",()=>new mi(.09,.022,6,12)),g("#a68854"),[.61,1.42,.07]),u(B,"#a68854",[.61,1.27,.07],[.18,.2,.08]),U(B);let Q=E.x/lt,se=["#738b90","#9b796d"][E.id%2];u(le,"#a98961",[Q,.18,-4.8],[1.55,.36,.8]),u(le,"#e2dbc7",[Q,.4,-4.8],[1.5,.1,.8]),u(le,se,[Q,.47,-4.65],[1.42,.045,.48]),u(le,"#d8d2c3",[Q,.5,-5.08],[.64,.1,.24])}for(let E of[-3.8,0,3.8]){u(le,"#394447",[E,2.54,-6.28],[.36,.15,.1]);let B=w(le,"#ffe4a8",[E,2.34,-6.2],[.15,.2,.11]);B.material=yt}nt.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5},U(le);function Ie(E,B,Q){let se=E.hairStyles[B],Qe=new Set;return se.name=`${Q}-hair-${B}`,se.visible=!0,se.traverse(Ke=>{Ke.isMesh&&Qe.add(Ke)}),E.hairStyles.forEach((Ke,ft)=>{ft!==B&&Ke.removeFromParent()}),E.hairStyles=[se],E.hairParts=E.hairParts.filter(Ke=>Qe.has(Ke)),E.spear.removeFromParent(),E.raft.removeFromParent(),Object.values(E.props).forEach(Ke=>Ke.removeFromParent()),E.spear=E.raft=null,E.props={},E.root.userData.renderProfile={hairVariants:1,unusedToolMeshes:0},L(E,Q),E}let ce=Ie(t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",y),0,"campaign-player");ce.root.name="campaign-player",o.add(ce.root);let re=new Map,Ae=new Map,$e=new Uint8Array(Cn.length),Rt=Cn.map(()=>({x:0,z:0})),gt={swing:0,step:0,bounce:0},Mn={gate:{shirt:"#526252",skin:"#c29574",hair:"#302e28",style:0},patrol:{shirt:"#59665a",skin:"#a96f55",hair:"#211f1e",style:1},hall:{shirt:"#4b5958",skin:"#d1a17d",hair:"#5b4032",style:2},boss:{shirt:"#34383a",skin:"#b67d60",hair:"#251f1c",style:1}};for(let E of e().guards){let B=Mn[E.id],Q=Ie(t(B,"guard",y),B.style,"campaign-guard-"+E.id);if(Q.root.name="campaign-guard-"+E.id,Q.root.userData.guardProfile={boss:E.id==="boss",style:B.style},E.id==="boss"){let se=new Oe;se.name="campaign-boss-insignia",Q.hips.add(se);for(let Ke of[-1,1])u(se,"#d2aa58",[Ke*.2,.56,.02],[.12,.035,.18]);let Qe=u(se,"#8f2f2d",[0,.34,.15],[.055,.52,.025]);Qe.rotation.z=-.48,Q.root.userData.guardProfile.insignia=!0}o.add(Q.root),de(Q.arms[1].forearm).position.set(0,-.24,.14),re.set(E.id,Q)}let pn=[{shirt:"#8da4b1",skin:"#c99370",hair:"#302d2a",style:0,scale:1.02},{shirt:"#b78876",skin:"#e1b894",hair:"#6a4938",style:1,scale:.96},{shirt:"#9caa8c",skin:"#b98264",hair:"#2f2927",style:2,scale:1},{shirt:"#c3b487",skin:"#dca984",hair:"#704936",style:1,scale:.72},{shirt:"#92b2b6",skin:"#e4bb96",hair:"#3f302b",style:2,scale:.76}];for(let E of Cn){let B=pn[E.id],Q=Ie(t(B,"resident",y),B.style,"campaign-prisoner-"+E.id);Q.root.name="campaign-prisoner-"+E.id,Q.root.scale.setScalar(B.scale),Q.root.userData.residentProfile={child:E.child,style:B.style,scale:B.scale},o.add(Q.root),Ae.set(E.id,Q)}let sn=new Oe;c.add(sn),de(sn).position.set(.26,-.23,-.48);let Yn=w(sn,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),Oi=_(sn,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);Oi.rotation.x=-.5;let bn=new ut(new mi(.42,.035,8,32),new xn({color:"#f3d48a"}));bn.rotation.x=-Math.PI/2,o.add(bn);let Bi=new st(new Float32Array(6),3),In=new $i(new Lt().setAttribute("position",Bi),new Pi({color:"#ffe8ad"}));In.frustumCulled=!1,o.add(In);let Ln=new ir,dn=new k,_i={position:new k,target:new k},mn=[],an={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.6},yi=E=>E.distance>.2,en={height:25},vi={},ti=[],Bt=0,b=.05,G="first",j=0,K=!0,W=!1,ue=null,be,Ne=0,Re={},qe=-1/0,We=0,Ve=e(),et=dl(Ve).target;et&&(Bt=Math.atan2(Ve.p.x-et.x,Ve.p.z-et.z));function bt(E,B,Q,se,Qe,Ke){Ne++,E.root.position.set(B.x/lt,Q,B.z/lt),E.root.rotation.set(0,0,0),E.rig.rotation.y=se;let ft=Cx(gt,Ke,Qe);for(let Be of E.legs){let Ut=(Be.side<0?-ft.swing:ft.swing)*ft.step;Be.thigh.rotation.x=Ut,Be.calf.rotation.x=Math.max(0,-Ut),Be.shoe.rotation.x=-Be.calf.rotation.x*.6}for(let Be of E.arms)Be.arm.rotation.x=Qe?(Be.side<0?ft.swing:-ft.swing)*.25:0,Be.arm.rotation.z=0,Be.forearm.rotation.x=-.18;E.hips.position.y=.87+ft.bounce*.009}function kt(E){if(!K||W)return;let B=e(),Q=E/1e3;j=E,Ne=0,d.update(),N.material.uniforms.uTime.value=Q;let se=B.interior;I.visible=!se,A.visible=!!se;for(let[J,ye]of me)ye.visible=J===se;o.background.set(se?"#202c29":"#b9dbe5"),o.fog.color.copy(o.background),l.intensity=se?.65:2,h.intensity=se?.15:2.8;let Qe=se?0:ei(B.p.x,B.p.z);ce.root.visible=!B.boat||G==="third",B.boat||(o.add(ce.root),bt(ce,B.p,Qe,B.heading,B.walking,Q)),ce.rig.visible=G==="third",X.position.set((B.boat?B.p.x:_t[B.boatAt].x)/lt,.02,(B.boat?B.p.z:_t[B.boatAt].z)/lt),X.rotation.y=B.boat?B.heading:Math.atan2(_t[B.boatAt].ux,_t[B.boatAt].uz),X.rotation.z=B.boat?Math.sin(Q*2)*.015:0,oe.visible=B.boat&&B.walking,B.boat&&td(ce,X),ze.visible=!B.paper,De.visible=B.paper&&!B.gun,xe.visible=!B.key&&B.guards.find(J=>J.id==="boss").hp===0,xe.rotation.y=Q,$e.fill(0);for(let J of B.released)$e[J]=1;V.forEach((J,ye)=>J.visible=!$e[ye]);let Ke=!1;for(let J of B.guards){let ye=re.get(J.id),_e=J.area===se&&!B.boat&&(!J.area||B.island==="fortress");if(ye.root.visible=_e,!_e)continue;let fe=J.x-B.p.x,je=J.z-B.p.z,Mt=J.hp>0&&fe*fe+je*je<44100;Ke||(Ke=Mt),bt(ye,J,J.area?0:ei(J.x,J.z),Math.atan2(B.p.x-J.x,B.p.z-J.z),Mt,Q),J.hp<=0?(ye.rig.rotation.x=-Math.PI/2,ye.root.position.y+=J.area?0:.15,ye.root.scale.setScalar(.8)):(ye.rig.rotation.x=0,ye.arms[1].arm.rotation.x=-1.05,ye.arms[1].forearm.rotation.x=-.35)}B.released.length&&!B.boarded&&!B.boat&&(se==="estate"||se==="cellar"||B.island==="fortress")&&Ex(Rt,Cn,B.p,B.heading);for(let J of Cn){let ye=Ae.get(J.id),_e=!!$e[J.id],fe=B.boarded?!1:_e?!B.boat&&(se==="estate"||se==="cellar"||B.island==="fortress"):se==="cellar";if(ye.root.visible=fe,!fe)continue;let je=_e?Rt[J.id]:J;bt(ye,je,se?0:ei(je.x,je.z),B.heading,_e&&B.walking,Q+J.id*.18)}let Be=Vc(vi,B).target,Ut=sd(rd(ti,B),B.p),at=Ut||Be;bn.visible=!!at,at&&bn.position.set(at.x/lt,(se?0:ei(at.x,at.z))+.08,at.z/lt),bn.scale.setScalar(1+Math.sin(Q*3)*.1),sn.visible=B.gun&&!B.boat&&G==="first",sn.position.z=B.shot?.025:0;let It=B.boat?.02+ds.eye-1.64:Qe,Ot=B.boat?ds.seatZ:0;an.x=B.p.x/lt+Math.sin(B.heading)*Ot,an.z=B.p.z/lt+Math.cos(B.heading)*Ot,an.surface=It,an.yaw=Bt,an.pitch=b,an.mode=G,an.distance=B.boat?7.5:4.6;let R=il(an,_i);if(se&&G==="third"&&(R.position.x=$s.clamp(R.position.x,-5.1,5.1),R.position.z=$s.clamp(R.position.z,-5,8.1)),!se&&G==="third"){dn.subVectors(R.position,R.target);let J=dn.length();dn.normalize(),Ln.set(R.target,dn),Ln.far=J;let ye=rl(Ln,Et,!0,mn).find(yi);ye&&R.position.copy(R.target).addScaledVector(dn,Math.max(.35,ye.distance-.22)),R.position.y=Math.max(R.position.y,ei(R.position.x*lt,R.position.z*lt)+.24)}c.position.copy(R.position),c.lookAt(R.target),z.update(c.position),sl(h,B.p.x/lt,B.p.z/lt,en);let H=!B.paused&&(B.walking||B.boat||Ke),te=Tx(Re,B,H)||H&&E-qe>=1e3/30;s.shadowMap.needsUpdate=te,te&&(qe=E,We++),P.update(Q,c.position),N.position.copy(c.position),In.visible=!!B.shot,B.shot&&Ax(Bi,B.shot.from,B.shot.to,Qe+1.35),be!==se&&(be=se,se?Bt=0:Be&&(Bt=Math.atan2(B.p.x-Be.x,B.p.z-Be.z))),s.render(o,c)}function xt(){c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function vt(E,B=0){e().paused||(Bt+=E,b=$s.clamp(b+B,G==="first"?-.95:-.05,.75))}n.addEventListener("pointerdown",E=>{e().paused||E.button!==0||(ue={id:E.pointerId,x:E.clientX,y:E.clientY},n.setPointerCapture(E.pointerId))}),n.addEventListener("pointermove",E=>{ue?.id===E.pointerId&&(vt(-(E.clientX-ue.x)*.006,(E.clientY-ue.y)*.005),ue.x=E.clientX,ue.y=E.clientY)});for(let E of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(E,()=>ue=null);return n.addEventListener("webglcontextlost",E=>{E.preventDefault(),W=!0,K=!1,i?.()}),{frame:kt,resize:xt,orbit:vt,setCamera(E){G=E==="first"?"first":"third",b=G==="first"?.05:.22},get cameraMode(){return G},get enabled(){return K&&!W},vector:(E,B)=>({x:E*Math.cos(Bt)+B*Math.sin(Bt),z:-E*Math.sin(Bt)+B*Math.cos(Bt)}),aim:()=>Bt+Math.PI,setEnabled(E){K=!!E&&!W},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,eye:c.position.toArray(),camera:G,cameraBlockers:Et.length,palmBatches:z.treeBatches.length,largestPalmBatch:Math.max(...z.treeBatches.map(E=>E.count)),posedCharacters:Ne,palmLodDistanceChecks:z.treeBatches.length+z.foliageBatches.length,palmTrunkTriangles:z.treeBatches.reduce((E,B)=>E+B.count*B.geometry.index.count/3,0),unshadowedPalmTrunkTriangles:z.treeBatches.filter(E=>!E.receiveShadow).reduce((E,B)=>E+B.count*B.geometry.index.count/3,0),palmCrownTriangles:z.foliageBatches.reduce((E,B)=>E+B.count*B.geometry.index.count/3,0),lowDetailPalmBatches:z.treeBatches.filter(E=>E.userData.lod.level==="low").length,terrainTriangles:D.reduce((E,B)=>E+B.geometry.index.count/3,0),shadowUpdates:We}),dispose(){s.dispose(),d.dispose();let E=new Set([...f.values(),...z.lodGeometries]),B=new Set(p.values());o.traverse(Q=>{if(Q.geometry&&E.add(Q.geometry),Q.material)for(let se of Array.isArray(Q.material)?Q.material:[Q.material])B.add(se)}),E.forEach(Q=>Q.dispose()),B.forEach(Q=>Q.dispose()),ee.dispose()}}}function fl(n,e){return Math.hypot(n.x-e.x,n.z-e.z)}function Rx(n){return ad({...n,makeHuman:Xc})}var we=80,cd=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],zi=(n,e,t)=>Math.max(e,Math.min(t,n)),Ix=n=>(n=zi(n,0,1),n*n*(3-2*n)),Px=(n,e)=>Math.atan2(Math.sin(e-n),Math.cos(e-n)),Dx=Object.freeze({}),od=Math.cos(1),ld=Math.sin(1);function Rn(n,e){let t=n*we,i=e*we,r=-1;for(let[a,o,c,l]of cd)r=Math.max(r,1-Math.hypot((t-a)/c,(i-o)/l));return r<=0?-.32:.015+Ix(r/.17)*(.25+.28*(1+Math.sin(n*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(n*.7)*Math.sin(e*.6))}function hd(n,e,t){return{x:n*Math.cos(t)+e*Math.sin(t),y:-n*Math.sin(t)+e*Math.cos(t)}}function ud(n,e,t=75){let i,r=t*t;for(let s of n||[]){let a=s.x-e.x,o=s.y-e.y,c=a*a+o*o;c<r&&(i=s,r=c)}return i}function dd(n,e,t,i){let r=e&&e.remaining-(i-t);return r>0?(n.kind=e.kind,n.phase=1-r/(Vu[e.kind]||1e3),n):null}function fd(n,e){let t=e*1.3;return n.idleHip=Math.sin(e*1.7),n.idleArmSin=Math.sin(t),n.idleArmCos=Math.cos(t),n}function pd(n,e,t,i,r,s){return n.yawSin=Math.sin(t),n.yawCos=Math.cos(t),i||r?(n.phaseSin=Math.sin(e),n.phaseCos=Math.cos(e)):n.phaseSin=n.phaseCos=0,n.hips=(i?.9:.92)+(i?Math.cos(e*2)*.012:s.idleHip*.004),n}function md(n,e,t,i=new k){let r=Math.min(240,t*.52),s=e.projectionMatrix.elements[0]*t/2,a=0;for(let o of n){o.userData.signScale||(o.userData.signScale=o.scale.clone()),o.scale.copy(o.userData.signScale),o.getWorldPosition(i);let c=Math.max(.1,i.distanceTo(e.position)),l=o.scale.x*s/c;l>r&&o.scale.multiplyScalar(r/l),a++}return a}function gd(n,e){let r=zi(Math.hypot(n,e),.08,.855);return{hip:-Math.atan2(e,-n)-Math.acos(zi((.43*.43+r*r-.43*.43)/(2*.43*r),-1,1)),knee:Math.PI-Math.acos(zi((.43*.43+.43*.43-r*r)/(2*.43*.43),-1,1))}}function xd(n,e={}){let t=e.shirt||"#4c9cba",i=e.skin||"#dda879",r=e.hair||"#43332b",s=e.style||0;return n.lookShirt===t&&n.lookSkin===i&&n.lookHair===r&&n.lookStyle===s?!1:(n.lookShirt=t,n.lookSkin=i,n.lookHair=r,n.lookStyle=s,!0)}function Wc(n){return n?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let i=n.point(e*n.width/2,t*n.depth/2);return Rn(i.x/we,i.y/we)}))):0}function _d(n,e,t){let i=e?.x??null,r=e?.y??null,s=t||0;return n.ready&&n.x===i&&n.y===r&&n.level===s?!1:(n.ready=!0,n.x=i,n.y=r,n.level=s,n.layout=ku(e,t),n.elevation=Wc(n.layout),!0)}function yd(n,e={}){let t=e.activities||{},i=t.completed||0,r=e.basePos?.x??null,s=e.basePos?.y??null,a=e.baseLevel??null,o=e.campfire??null,c=e.fire?.x??null,l=e.fire?.y??null,h=i>=1,d=i>=3,p=i>=6,f=d&&t.gardenClaimed<i,g=t.raceWon??null;return n.ready&&n.level===a&&n.baseX===r&&n.baseY===s&&n.campfire===o&&n.fireX===c&&n.fireY===l&&n.first===h&&n.garden===d&&n.flag===p&&n.harvest===f&&n.raceWon===g?!1:(n.ready=!0,n.level=a,n.baseX=r,n.baseY=s,n.campfire=o,n.fireX=c,n.fireY=l,n.first=h,n.garden=d,n.flag=p,n.harvest=f,n.raceWon=g,!0)}function vd(n,e=[]){let t=n.values||(n.values=[]),i=!n.ready||n.count!==e.length,r=0;for(let s of e){let a=s.type??null,o=s.x??null,c=s.y??null,l=!!s.done,h=s.symbol??null,d=s.label??null;t[r]!==a&&(i=!0),t[r++]=a,t[r]!==o&&(i=!0),t[r++]=o,t[r]!==c&&(i=!0),t[r++]=c,t[r]!==l&&(i=!0),t[r++]=l,t[r]!==h&&(i=!0),t[r++]=h,t[r]!==d&&(i=!0),t[r++]=d}return t.length=r,n.ready=!0,n.count=e.length,i}function ta(n,e,t=0,i=0){let r=e?.x??null,s=e?.y??null;return n.ready&&n.pointX===r&&n.pointY===s&&n.offsetX===t&&n.offsetZ===i?!1:(n.ready=!0,n.pointX=r,n.pointY=s,n.offsetX=t,n.offsetZ=i,n.valid=r!==null&&s!==null,n.valid&&(n.x=r/we+t,n.z=s/we+i,n.y=Rn(n.x,n.z)),!0)}function Hc(n,e,t,i=Wc(t)){let r=Rn(n,e);if(!t)return r;let s=t.floor;if(Math.abs(n*we-s.x)<=s.w/2&&Math.abs(e*we-s.y)<=s.h/2)return Math.max(r,i+.16);let a=n*we-t.center.x,o=e*we-t.center.y,c=a*t.fy-o*t.fx,l=a*t.fx+o*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,i+.16)-r)*(1-(l-t.depth/2)/64):r}function Md(n,e,t={}){let i=(p,f,g,x,m)=>{let u=new ut(m,new zt({color:f}));return u.position.set(...g),u.scale.set(...x),p.add(u),u},r=t.cube||((p,f,g,x)=>i(p,f,g,x,new nn(1,1,1))),s=t.tube||((p,f,g,x)=>i(p,f,g,x,new Gt(1,1,1,10))),a=new Oe,o=n.width/we,c=n.depth/we,l=n.wallHeight/we,h=n.roofRidge/we,d=n.door/we;a.name="base",a.position.set(n.center.x/we,e,n.center.y/we),a.rotation.y=n.yaw,r(a,"#a68854",[0,.08,0],[o,.16,c]).name="floor";for(let p of[-o/2+.1,o/2-.1])for(let f of[-c/2+.1,c/2-.1])s(a,"#876742",[p,l/2,f],[.075,l,.075]).name="post";for(let p of[-1,1]){let f=r(a,"#ba7655",[p*o/4,(l+h)/2,0],[Math.hypot(o/2+.2,h-l),.1,c+.36]);f.rotation.z=-p*Math.atan2(h-l,o/2+.2),f.name="roof"}for(let p of n.walls){let f=p.x-n.center.x,g=p.y-n.center.y,x=(f*n.fy-g*n.fx)/we,m=(f*n.fx+g*n.fy)/we;r(a,"#e2dbc7",[x,l/2,m],[n.fy?p.w/we:p.h/we,l,n.fy?p.h/we:p.w/we]).name="wall"}if(n.walls.length>=5){let p=n.doorHeight/we;r(a,"#845f3f",[0,(l+p)/2,c/2],[d,l-p,.125]).name="lintel"}for(let p of n.beds){let f=p.x-n.center.x,g=p.y-n.center.y,x=(f*n.fy-g*n.fx)/we,m=(f*n.fx+g*n.fy)/we;r(a,"#7d654b",[x,.17,m],[.65,.34,1.125]).name="bed",r(a,"#cec6a0",[x,.38,m],[.65,.14,1.125]),r(a,"#ede3bd",[x,.49,m-.35],[.5,.09,.26])}return a}function bd(n,e,{cube:t,tube:i,ell:r}){if(n==="gather"&&(i(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),n==="fish"){let s=i(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let a=i(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);a.rotation.x=.6}if(n==="cook"){let s=i(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function Xc(n={},e="player",t={}){let i=new Map,r=new Map,s=t.mat||(P=>(i.has(P)||i.set(P,new zt({color:P})),i.get(P))),a=t.geo||((P,N)=>(r.has(P)||r.set(P,N()),r.get(P))),o=t.mesh||((P,N,z,Y=[0,0,0],X=[1,1,1])=>{let oe=new ut(N,z);return oe.position.set(...Y),oe.scale.set(...X),P.add(oe),oe}),c=t.ell||((P,N,z,Y)=>o(P,a("ball",()=>new yn(1,14,10)),s(N),z,Y)),l=t.cube||((P,N,z,Y)=>o(P,a("box",()=>new nn(1,1,1)),s(N),z,Y)),h=t.tube||((P,N,z,Y)=>o(P,a("cyl",()=>new Gt(1,1,1,10)),s(N),z,Y)),d=new Oe,p=new Oe;d.add(p);let f=n.skin||"#dda879",g=n.hair||"#43332b",x=n.shirt||"#4c9cba",m=new Oe;m.position.y=.87,p.add(m),c(m,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let u=a("human-torso",()=>new Bs([new Xe(.16,.13),new Xe(.205,.2),new Xe(.215,.38),new Xe(.25,.49),new Xe(.26,.52),new Xe(.19,.57),new Xe(.09,.64)],18));o(m,u,s(x),[0,0,0],[1,1,.66]);for(let P of[-1,1]){let N=l(m,x,[P*.065,.6,.071],[.085,.075,.024]);N.rotation.z=-P*.3,l(m,x,[P*.11,.37,.142],[.105,.09,.022])}for(let P=0;P<4;P++)c(m,"#d7d5c2",[0,.24+P*.075,.15],[.009,.01,.005]);e==="guard"&&l(m,"#39483f",[0,.35,.11],[.34,.36,.09]),l(m,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),h(m,f,[0,.64,0],[.064,.13,.064]);let _=new Oe;_.position.y=.79,m.add(_),c(_,f,[0,0,0],[.135,.175,.133]),c(_,f,[-.137,-.005,0],[.025,.048,.025]),c(_,f,[.137,-.005,0],[.025,.048,.025]),c(_,f,[0,-.015,.136],[.026,.033,.036]);for(let P of[-1,1])c(_,"#f6f3df",[P*.052,.02,.115],[.03,.017,.014]),c(_,"#31433e",[P*.053,.02,.128],[.012,.013,.007]),l(_,g,[P*.052,.061,.11],[.062,.01,.014]);l(_,"#af735b",[0,-.071,.117],[.051,.009,.012]);let w=a("hair",()=>new yn(1,16,10,0,Math.PI*2,0,Math.PI*.56));o(_,w,s(e==="nela"?"#8d4931":g),[0,.015,-.015],[.145,.18,.143]);let y=[new Oe,new Oe,new Oe];y.forEach(P=>_.add(P));let I=_.children.find(P=>P.isMesh&&P.geometry===w);_.remove(I),y[0].add(I),o(y[1],w,s(g),[0,.015,-.015],[.145,.18,.143]),c(y[1],g,[0,-.04,-.17],[.072,.14,.08]);for(let P=0;P<12;P++){let N=P*Math.PI*2/12;c(y[2],g,[Math.sin(N)*.1,.1+P%2*.018,Math.cos(N)*.1-.015],[.066,.067,.066])}if(c(y[2],g,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(_,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),y.forEach((P,N)=>P.visible=N===(n.style||0)),e==="leon")h(_,"#c5a775",[0,.15,0],[.16,.12,.16]),h(_,"#c5a775",[0,.095,0],[.22,.028,.22]),l(m,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(m,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let P of[-1,1])l(m,"#b6caa4",[P*.17,.38,-.04],[.034,.35,.029])}let A=[],U=[];for(let P of[-1,1]){let N=new Oe;N.position.set(P*.27,.54,0),m.add(N);let z=c(N,x,[-P*.018,-.025,0],[.105,.13,.11]);z.name="human-shoulder",o(N,a("human-upper-arm",()=>new Gt(.068,.086,.19,12)),s(x),[0,-.105,0]),o(N,a("human-lower-upper-arm",()=>new Gt(.055,.064,.15,12)),s(f),[0,-.24,0]);let Y=new Oe;Y.position.y=-.31,N.add(Y);let X=c(Y,f,[0,0,0],[.061,.063,.061]);X.name="human-elbow",o(Y,a("human-forearm",()=>new Gt(.057,.04,.26,12)),s(f),[0,-.13,0]),c(Y,f,[0,-.28,0],[.06,.082,.046]),A.push({arm:N,forearm:Y,side:P});let oe=new Oe;oe.position.set(P*.115,0,0),m.add(oe),o(oe,a("human-thigh",()=>new Gt(.092,.108,.42,12)),s("#52625f"),[0,-.21,0]);let ie=new Oe;ie.position.y=-.43,oe.add(ie);let ve=c(ie,"#52625f",[0,0,.014],[.079,.074,.075]);ve.name="human-knee",o(ie,a("human-calf",()=>new Gt(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let Pe=c(ie,"#52625f",[0,-.36,0],[.052,.06,.052]);Pe.name="human-ankle";let He=c(ie,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);U.push({thigh:oe,calf:ie,shoe:He,side:P})}let L=new Oe;h(L,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(L,"#dad9c5",[0,1.45,0],[.045,.15,.03]),L.position.set(.35,.2,.08),p.add(L),L.visible=!1;let S={};for(let P of["gather","fish","cook"]){let N=new Oe;bd(P,N,{cube:l,tube:h,ell:c}),N.position.set(0,-.28,0),A[1].forearm.add(N),N.visible=!1,S[P]=N}let M=new Oe;d.add(M);for(let P=0;P<5;P++){let N=h(M,"#a17d48",[(P-2)*.25,.08,0],[.115,1.7,.115]);N.rotation.x=Math.PI/2}for(let P of[-.5,.5])l(M,"#6e5937",[0,.19,P],[1.24,.05,.1]);M.visible=!1;let T=[],D=[],O=[];return p.traverse(P=>{P.isMesh&&(P.material===s(x)&&T.push(P),P.material===s(f)&&D.push(P),P.material===s(g)&&O.push(P))}),{root:d,rig:p,hips:m,head:_,arms:A,legs:U,spear:L,raft:M,shirtParts:T,skinParts:D,hairParts:O,hairStyles:y,props:S,yaw:0,lastX:null,lastZ:null,phase:0}}function Sd(n,e){let t=e&&Gu(e.kind,e.phase);n.rig.rotation.x=t?.bend||0;for(let[i,r]of Object.entries(n.props))r.visible=!!t&&e.kind===i;if(t)for(let i of n.arms)i.arm.rotation.x=i.side<0?t.left:t.right,i.forearm.rotation.x=-.25,i.arm.rotation.z=-i.side*.08+((i.side>0||e.kind==="cheer")&&t.wave||0)}function wd(n,e,t){let i=n.phase||0,r=n.x+Math.sin(e*.65+i)*14,s=n.y+Math.cos(e*.65+i)*14;return t(r,s)?{x:r/we,z:s/we,y:.055+Math.sin(e*3+i)*.008,yaw:Math.atan2(Math.cos(e*.65+i),-Math.sin(e*.65+i))}:null}function Lx({canvas:n,terrain:e,getState:t,onLost:i}){let r=new rs({canvas:n,antialias:!0,powerPreference:"high-performance"}),s=innerWidth<=700;r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Xt,r.toneMapping=$r,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=Jr;let a=new Ji;a.background=new tt("#c5dbe5"),a.fog=new Zi("#c5dbe5",70,240);let o=new Zt(72,innerWidth/innerHeight,.04,350);a.add(o);let c=new er("#c9e3ff","#71694d",1.85);a.add(c);let l=new nr("#fff0d2",3.1);l.castShadow=!0,l.shadow.mapSize.set(s?1024:2048,s?1024:2048),l.shadow.camera.left=-16,l.shadow.camera.right=16,l.shadow.camera.top=16,l.shadow.camera.bottom=-16,l.shadow.camera.near=.5,l.shadow.camera.far=65,l.shadow.bias=-12e-5,l.shadow.normalBias=.012,a.add(l,l.target);let h=nl(r),d=new Map,p=new Map;function f(R,H={}){if(!Object.keys(H).length){let J=h.forColor(R);if(J)return J}let te=R+JSON.stringify(H);return d.has(te)||d.set(te,new zt({color:R,roughness:.86,...H})),d.get(te)}function g(R,H){return p.has(R)||p.set(R,H()),p.get(R)}function x(){return g("ball",()=>new yn(1,14,10))}function m(){return g("box",()=>new nn(1,1,1))}function u(){return g("cyl",()=>new Gt(1,1,1,10))}function _(R,H,te,J=[0,0,0],ye=[1,1,1],_e=!0){let fe=new ut(H,te);return fe.position.set(...J),fe.scale.set(...ye),fe.castShadow=_e,fe.receiveShadow=!0,R.add(fe),fe}function w(R,H,te,J){return _(R,x(),f(H),te,J)}function y(R,H,te,J){return _(R,m(),f(H),te,J)}function I(R,H,te,J){return _(R,u(),f(H),te,J)}let A=new At,U=new En(4600/we,2900/we,230,145);U.rotateX(-Math.PI/2),U.translate(2300/we,0,1450/we);let L=U.attributes.position;for(let R=0;R<L.count;R++)L.setY(R,Rn(L.getX(R),L.getZ(R)));U.computeVertexNormals();let S=Hu(e),M=new Di(S);M.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let T=h.ground(M),D=new ut(U,T);D.receiveShadow=!0,a.add(D);let O=Yu({segments:s?24:48}),P=40;O.scale.set(1/P,1,1/P),O.position.x=6500/we;for(let R of O.children)R.material.dispose(),R.material=ll(h,P),R.geometry.setAttribute("color",new st(new Float32Array(R.geometry.attributes.position.count*3).fill(1),3));let N=new Oe;N.scale.set(P,1,P),O.add(N);let z=(R,H)=>{let te=qu(R,H);return te?ur(te,R,H):-.32};cl(N,qn,{scale:P,height:z,surfaces:h,small:s,clear:(R,H,te)=>dr({x:H,z:te},R.id)||R.id==="home"&&(Math.abs(te-40)<55||Math.abs(H-23)<45)}),hl(N,{scale:P,height:z,surfaces:h,helpers:{cube:y,tube:I,ell:w}}),a.add(O);let Y=Wu(a,Rn,we,S,s),X=al([...cd.map(([R,H,te,J])=>[R/we,H/we,te/we,J/we]),...qn.map(R=>[O.position.x+R.x/P,R.z/P,R.radius*.955/P,R.radius*.955/P])]);a.add(X.mesh);let oe=ol(320);a.add(oe);function ie(){let R=[],H=[],te=[],J=(_e,fe,je,Mt)=>{let St=fe*2.05,Ge=Math.sin(fe*Math.PI)*.46-fe*fe*.8;return[Math.sin(_e)*St+Math.cos(_e)*Mt*je,Ge-Mt*.22,Math.cos(_e)*St-Math.sin(_e)*Mt*je]};for(let _e=0;_e<11;_e++){let fe=_e*Math.PI*2/11;for(let je=1;je<17;je++)for(let Mt of[-1,1]){let St=je/18,Ge=Math.sin(St*Math.PI)*.42,ht=R.length/3;R.push(...J(fe,St-.023,Mt,.015),...J(fe,St-.085,Mt,Ge),...J(fe,St+.038,Mt,Ge*.88),...J(fe,St+.025,Mt,.015)),te.push(St,0,St,.9,St+.03,1,St+.03,0),H.push(ht,ht+1,ht+2,ht,ht+2,ht+3)}}let ye=new Lt;return ye.setAttribute("position",new st(R,3)),ye.setAttribute("uv",new st(te,2)),ye.setIndex(H),ye.computeVertexNormals(),ye}let ve=new Gt(.085,.16,4.35,14,12);ve.translate(0,2.175,0);for(let R=0;R<ve.attributes.position.count;R++){let H=ve.attributes.position;H.setX(R,H.getX(R)+.16*(H.getY(R)/4.35)**2)}ve.computeVertexNormals();let Pe=f("#9d7750",{bumpMap:h.textures.get("rock"),bumpScale:.025});Pe.onBeforeCompile=R=>{R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),R.fragmentShader=R.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let He=ie(),rt=h.surface("leaf","#ffffff",1,.018).clone();rt.side=Wt;let it={value:0};rt.onBeforeCompile=R=>{R.uniforms.uWind=it,R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let q={tree:new Ct(ve,Pe,400),leaves:new Ct(He,rt,400),rock:new Ct(new Ki(1,2),f("#92968b"),400),food:new Ct(x(),f("#7a5638"),400),shell:new Ct(new yn(1,12,6,0,Math.PI),f("#f1d0b7"),400)};for(let R of Object.values(q))R.count=0,R.castShadow=!0,R.receiveShadow=!0,R.frustumCulled=!1,a.add(R);let $=-1,pe=[],Fe=0;function Ce(R,H,te){if(te!==$){let ye={tree:0,rock:0,food:0,shell:0};pe=[];for(let _e of R){let fe=_e.x/we,je=_e.y/we,Mt=Rn(fe,je),St=_e.phase||0;if(_e.t==="tree"){let Ge=.84+.17*Math.sin(_e.x*.033+_e.y*.027),ht=1.35+.28*Math.cos(St);A.position.set(fe,Mt,je),A.rotation.set(.03*Math.sin(St),St,.04*Math.cos(St)),A.scale.set(Ge,ht,Ge),A.updateMatrix(),q.tree.setMatrixAt(ye.tree++,A.matrix),pe.push({x:fe+.16*Ge*Math.cos(St),y:Mt+4.3*ht,z:je-.16*Ge*Math.sin(St),p:St,size:Ge})}else q[_e.t]&&(A.position.set(fe,Mt+(_e.t==="rock"?.23:_e.t==="food"?.13:.025),je),A.rotation.set(0,St,0),A.scale.set(..._e.t==="rock"?[.34+.18*Math.abs(Math.sin(St)),.3,.4]:_e.t==="food"?[.15,.13,.15]:[.12,.04,.14]),A.updateMatrix(),q[_e.t].setMatrixAt(ye[_e.t]++,A.matrix))}for(let _e of["tree","rock","food","shell"])q[_e].count=ye[_e],q[_e].instanceMatrix.needsUpdate=!0;$=te,Fe++}let J=0;for(let ye of pe)A.position.set(ye.x,ye.y,ye.z),A.rotation.set(Math.sin(H*.7+ye.p)*.025,ye.p,Math.cos(H*.6+ye.p)*.025),A.scale.set(ye.size,ye.size,ye.size),A.updateMatrix(),q.leaves.setMatrixAt(J++,A.matrix);q.leaves.count=J,q.leaves.instanceMatrix.needsUpdate=!0}let Me=new Set,yt=new k;function F(R,H="#ffe9b5"){let te=document.createElement("canvas");te.width=512,te.height=96;let J=te.getContext("2d");J.fillStyle="#123e43",J.beginPath(),J.roundRect(6,10,500,76,25),J.fill(),J.fillStyle=H,J.font="700 29px system-ui",J.textAlign="center",J.textBaseline="middle",J.fillText(String(R).slice(0,45),256,48,480);let ye=new Di(te);ye.colorSpace=Xt;let _e=new Fs(new Wr({map:ye,depthTest:!0,transparent:!0}));return _e.scale.set(2.45,.46,1),_e.position.y=2.32,Me.add(_e),_e}let Et=["#4c9cba","#df8168","#9974c7","#76b677"];function Je(R={},H="player",te=""){let J=Xc(R,H,{ell:w,cube:y,tube:I,mesh:_,mat:f,geo:g});return a.add(J.root),J.name=te,J.tag=null,te&&(J.tag=F(te,R.shirt),J.root.add(J.tag)),J}let ke=Je(tl()),Ee=new Map,Dt=Je({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),Te=Je({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function Ye(R,H,te){!H||H===R.name||(R.tag&&(Me.delete(R.tag),R.root.remove(R.tag),R.tag.material.map.dispose(),R.tag.material.dispose()),R.name=H,R.tag=F(H,te),R.root.add(R.tag))}function Ht(R,H){if(xd(R,H)){for(let te of R.shirtParts)te.material=f(R.lookShirt);for(let te of R.skinParts)te.material=f(R.lookSkin);for(let te of R.hairParts)te.material=f(R.lookHair);R.hairStyles.forEach((te,J)=>te.visible=J===R.lookStyle)}}let mt=null,C=0,v={},Z={idleHip:0,idleArmSin:0,idleArmCos:0},ne={yawSin:0,yawCos:1,phaseSin:0,phaseCos:1};function ae(R,H,te,J,ye,_e,fe,je,Mt=!1,St=null,Ge=!1,ht=!1){let Un=H.x/we,Mi=H.y/we,ni=je(H.x,H.y),fs=ni?0:Hc(Un,Mi,mt,C);R.root.position.set(Un,fs+(ni?Mt?.18:-.95:0),Mi),R.yaw+=Px(R.yaw,te)*Math.min(1,_e*12),R.rig.rotation.y=R.yaw;let bi=J&&fe>.05;R.phase+=bi?_e*(fe>4?10:7):0;let pl=bi?fe>4?.31:.22:0,Td=R.phase,qc=ni&&!Mt,Sn=pd(ne,Td,R.yaw,bi,qc,Z);R.hips.position.y=Sn.hips;for(let tn of R.legs){let Ed=tn.side<0?-Sn.phaseSin:Sn.phaseSin,Ad=tn.side<0?-Sn.phaseCos:Sn.phaseCos,ml=Ed*pl,Cd=bi?Math.max(0,Ad)*.105:0,Rd=Un+Sn.yawCos*tn.side*.115+Sn.yawSin*ml,Id=Mi-Sn.yawSin*tn.side*.115+Sn.yawCos*ml,Pd=ni?0:Hc(Rd,Id,mt,C)-fs,na=gd(-R.hips.position.y+.07+Pd+Cd,ml);tn.thigh.rotation.x=na.hip,tn.calf.rotation.x=na.knee,tn.shoe.rotation.x=-na.hip-na.knee}for(let tn of R.arms)tn.arm.rotation.x=bi?(tn.side<0?Sn.phaseSin:-Sn.phaseSin)*.45:(Z.idleArmSin*od+Z.idleArmCos*tn.side*ld)*.025,tn.arm.rotation.z=-tn.side*.07,tn.forearm.rotation.x=bi?-.22:-.08,qc&&(tn.arm.rotation.x=-Math.PI/2+(Sn.phaseSin*od+Sn.phaseCos*tn.side*ld)*.35,tn.forearm.rotation.x=-.28);Sd(R,St),R.raft.visible=!!(ni&&Mt),R.raft.rotation.y=R.yaw,R.spear.visible=!!Ge&&!ni&&!St,ht&&(R.arms[0].arm.rotation.x=-1,R.arms[0].forearm.rotation.x=-1),R.tag&&(R.tag.visible=Math.hypot(Un-ke.root.position.x,Mi-ke.root.position.z)<13),R.lastX=Un,R.lastZ=Mi}let ee=new Oe;a.add(ee);for(let R of[-.55,.55])for(let H of[-.27,.27])I(ee,"#866642",[R,1.24,H],[.038,2.48,.038]);y(ee,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),y(ee,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let R of[-1,1]){let H=y(ee,"#ba7655",[R*.39,2.63,0],[.9,.07,1.14]);H.rotation.z=-R*.34}let ze=I(ee,"#ba7655",[0,2.79,0],[.055,1.18,.055]);ze.rotation.x=Math.PI/2;for(let R of[-.5,.5])y(ee,"#e2dbc7",[0,2.4,R],[1.7,.1,.07]);for(let R=0;R<5;R++)y(ee,"#a98961",[(R-2)*.24,.32,.344],[.21,.53,.025]);for(let R=0;R<4;R++)w(ee,"#b1b967",[(R-1.5)*.19,.78,0],[.09,.08,.08]);let de=new Oe;a.add(de),y(de,"#765734",[0,.18,0],[.56,.36,.4]),y(de,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let R of[-.19,.19])y(de,"#d5b15a",[R,.2,.215],[.045,.35,.026]);y(de,"#ecd178",[0,.32,.22],[.08,.09,.03]);let De=new ut(new ji(.24,.29,32),new xn({color:"#ffe087",transparent:!0,opacity:.8,side:Wt,depthWrite:!1}));De.rotation.x=-Math.PI/2,a.add(De);let Ue={},he={},ge={},Ze={},Le={root:new Oe,tag:null,name:null};a.add(Le.root),Le.root.position.set(js.x/we,Rn(js.x/we,js.y/we),js.y/we),I(Le.root,"#786040",[0,.95,0],[.12,1.9,.12]),y(Le.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let xe=new Oe;a.add(xe);let nt=new ut(new ji(.93,1.06,40),new xn({color:"#54e4ef",transparent:!0,opacity:.85,side:Wt,depthWrite:!1}));nt.rotation.x=-Math.PI/2,nt.position.y=.04,xe.add(nt);let V=_(xe,new Gt(.035,.035,1,8),new xn({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),le=null,me=0,Ie={},ce=new Oe,re=null,Ae=null,$e=[];a.add(ce);function Rt(R){let H=R.activities?.completed||0,te=H>=3&&R.activities.gardenClaimed<H;if(yd(Ie,R)){Ae&&(Ae.geometry.dispose(),Ae.material.dispose());for(let J of $e)J.dispose();if($e=[],a.remove(ce),ce=new Oe,a.add(ce),Ae=null,re=null,R.basePos&&R.baseLevel){let J=mt,ye=Xu(Md(J,C,{cube:y,tube:I}),J,{cube:y,tube:I},h);if(ce.add(ye),ye.traverse(_e=>{["roof","wall","lintel"].includes(_e.name)&&(_e.material=_e.material.clone(),_e.material.transparent=!0,$e.push(_e.material))}),H>=1)for(let _e of[-1,1]){let fe=w(ye,"#ffdc80",[_e*(J.width/we/2-.15),2.35,J.depth/we/2],[.09,.14,.09]);fe.material=f("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(H>=6&&(I(ye,"#6e5942",[J.width/we/2+.2,1.75,-J.depth/we/2],[.03,3.5,.03]),y(ye,"#5bbca9",[J.width/we/2+.55,3.1,-J.depth/we/2],[.7,.42,.03])),H>=3&&R.garden){let _e=R.garden,fe=new Oe;fe.position.set(_e.x/we,Rn(_e.x/we,_e.y/we),_e.y/we),ce.add(fe),y(fe,"#785d40",[0,.07,0],[1.35,.14,1]);for(let je of[-.4,0,.4])for(let Mt of[-.25,.25])I(fe,"#587b37",[je,.21,Mt],[.025,.3,.025]),w(fe,"#6caa49",[je,.35,Mt],[.16,.12,.12]),te&&w(fe,"#cfa565",[je+.055,.27,Mt],[.07,.065,.07])}}if(R.campfire&&R.fire){let J=new Oe,ye=R.fire.x/we,_e=R.fire.y/we;J.position.set(ye,Rn(ye,_e),_e),ce.add(J);for(let fe=0;fe<8;fe++){let je=fe*Math.PI/4;w(J,"#777a6b",[Math.sin(je)*.3,.07,Math.cos(je)*.3],[.095,.07,.105])}for(let fe of[.5,-.5]){let je=I(J,"#614b35",[0,.09,0],[.06,.5,.06]);je.rotation.z=Math.PI/2,je.rotation.y=fe}Ae=_(J,new Gn(.17,.46,8),new xn({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),re=new tr("#ffa145",2.5,4),re.position.y=.5,J.add(re)}}}let gt=[];function Mn(){let R=new Oe;a.add(R),w(R,"#765745",[0,.29,0],[.24,.25,.43]),w(R,"#765745",[0,.3,.4],[.19,.18,.2]),w(R,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let te of[-1,1]){let J=_(R,new Gn(.08,.17,3),f("#644937"),[te*.13,.47,.43]);J.rotation.z=te*.45}let H=[];for(let te of[-.17,.17])for(let J of[-.27,.24])H.push(I(R,"#5e493b",[te,.105,J],[.037,.2,.037]));return{root:R,legs:H,lastX:null,lastZ:null}}function pn(R,H){for(;gt.length<R.length;)gt.push(Mn());for(let te=0;te<gt.length;te++){let J=gt[te],ye=R[te];if(J.root.visible=!!ye,!ye){J.lastX=J.lastZ=null;continue}let _e=ye.x/we,fe=ye.y/we,je=J.lastX===null?0:_e-J.lastX,Mt=J.lastZ===null?0:fe-J.lastZ,St=Math.hypot(je,Mt)>1e-4;J.root.position.set(_e,Rn(_e,fe),fe),St&&(J.root.rotation.y=Math.atan2(je,Mt));for(let Ge=0;Ge<4;Ge++)J.legs[Ge].rotation.x=St?Math.sin(H*6+Ge*Math.PI)*.15:0;J.lastX=_e,J.lastZ=fe}}let sn=[new Ct(x(),f("#adddd0",{roughness:.4}),96),new Ct(new Gn(1,1,3),f("#668e93"),96),new Ct(new Gn(1,1,3),f("#779da0"),96)];for(let R of sn)R.count=0,R.frustumCulled=!1,a.add(R);function Yn(R,H,te){let J=0;for(let ye of R||[]){let _e=wd(ye,H,te);if(!_e||J>=96)continue;let fe=(je,Mt,St,Ge,ht=0)=>{A.position.set(_e.x+Math.sin(_e.yaw)*St+Math.cos(_e.yaw)*je,_e.y+Mt,_e.z+Math.cos(_e.yaw)*St-Math.sin(_e.yaw)*je),A.rotation.set(ht,_e.yaw,0),A.scale.set(...Ge),A.updateMatrix()};fe(0,0,0,[.09,.045,.22]),sn[0].setMatrixAt(J,A.matrix),fe(0,0,-.25,[.095,.12,.025],Math.PI/2),sn[1].setMatrixAt(J,A.matrix),fe(0,.045,-.02,[.04,.1,.11]),sn[2].setMatrixAt(J,A.matrix),J++}for(let ye of sn)ye.count=J,ye.instanceMatrix.needsUpdate=!0}let Oi={},bn=[];function Bi(R,H){if(vd(Oi,R)){for(let te of bn)a.remove(te),te.traverse(J=>{J.isSprite&&(Me.delete(J),J.material.map.dispose(),J.material.dispose()),J.userData.privateGeometry&&J.geometry.dispose()});bn=[];for(let te of R||[]){if(te.type==="return")continue;let J=new Oe;J.position.set(te.x/we,Rn(te.x/we,te.y/we),te.y/we),a.add(J),bn.push(J);let ye=new ut(new ji(.4,.46,28),f(te.done?"#6d9c89":"#8cebd5",{side:Wt}));if(ye.rotation.x=-Math.PI/2,ye.position.y=.03,ye.userData.privateGeometry=!0,J.add(ye),te.type==="fragment"&&(y(J,"#e1c587",[0,.38,0],[.37,.45,.06]),y(J,"#a68752",[0,.18,-.035],[.035,.42,.035]),y(J,"#826b4d",[0,.4,.035],[.19,.022,.02])),te.type==="rune"){w(J,"#87998a",[0,.26,0],[.27,.3,.21]);let fe=F(te.symbol,"#ffe29b");fe.position.y=.8,fe.scale.set(.65,.32,1),J.add(fe)}if(te.type==="chest"){y(J,"#795a39",[0,.2,0],[.65,.4,.44]),y(J,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let fe of[-.21,.21])y(J,"#f1d584",[fe,.23,.235],[.05,.36,.025])}if(te.type==="signal"){for(let fe of[-1,1]){let je=I(J,"#8a6d49",[fe*.22,.55,0],[.04,1.1,.04]);je.rotation.z=fe*.22}if(y(J,"#927652",[0,1.1,0],[.7,.16,.45]),te.done){let fe=w(J,"#ffe28d",[0,1.34,0],[.16,.21,.16]);fe.material=f("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else y(J,"#344f57",[0,1.3,0],[.3,.18,.24])}let _e=F(te.label,te.done?"#b5d1c5":"#ffe9b5");_e.position.y=te.type==="signal"?1.95:1.35,J.add(_e),J.userData.done=te.done}}for(let te of bn)te.children[0].scale.setScalar(te.userData.done?1:1+Math.sin(H*2.8)*.05)}let In=[];for(let R=0;R<4;R++){let H=new Lt().setFromPoints([new k(-.3,0,0),new k(0,-.08,0),new k(.3,0,0)]),te=new $i(H,new Pi({color:"#fff7de"}));a.add(te),In.push(te)}let Ln=Math.atan2(-130,-60),dn=0,_i=4.8,mn=!0,an=!0,yi=0,en=null,vi=!1,ti=0,Bt="first",b=new Oe;o.add(b);let G=I(b,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);G.rotation.x=-.65;let j=w(b,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),K=new Oe;b.add(K);let W=I(K,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);W.rotation.x=-.22;let ue=w(K,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),be={};for(let R of["gather","fish","cook"]){let H=new Oe;H.position.set(.29,-.26,-.61),b.add(H),bd(R,H,{cube:y,tube:I,ell:w}),be[R]=H}let Ne=Object.entries(be),Re={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2},qe=new Set;b.traverse(R=>{R.isMesh&&(R.castShadow=!1,R.receiveShadow=!1,R.frustumCulled=!1)});let We=new k,Ve=new k,et=new k,bt=new k,kt={position:et,target:We},xt={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.8,bob:0},vt=new k,E=new ir,B=[ce,ee],Q=[],se=R=>R.object.isMesh&&R.distance>.1;function Qe(R,H=0){!mn||t().paused||(Ln+=R,dn=zi(dn+H,Bt==="first"?-1.12:-.05,Bt==="first"?1.12:.75))}function Ke(R){Bt=R==="third"?"third":"first",dn=R==="third"?.22:0,o.fov=R==="third"?58:72,o.updateProjectionMatrix(),en=null,an=!0}n.addEventListener("pointerdown",R=>{let H=t();!mn||!H.play||H.paused||R.button>0||en||(en={id:R.pointerId,x:R.clientX,y:R.clientY},n.setPointerCapture(R.pointerId))}),n.addEventListener("pointermove",R=>{!en||en.id!==R.pointerId||(Qe(-(R.clientX-en.x)*.006,(R.clientY-en.y)*.005),en.x=R.clientX,en.y=R.clientY)});let ft=R=>{en?.id===R.pointerId&&(en=null)};for(let R of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(R,ft);n.addEventListener("wheel",R=>{!mn||t().paused||(R.preventDefault(),Bt==="first"?(o.fov=zi(o.fov+R.deltaY*.025,58,85),o.updateProjectionMatrix()):_i=zi(_i+R.deltaY*.004,2.5,8))},{passive:!1}),n.addEventListener("webglcontextlost",R=>{R.preventDefault(),vi=!0,mn=!1,en=null,i()}),n.addEventListener("webglcontextrestored",()=>{vi=!1,an=!0});function Be(){r.setSize(innerWidth,innerHeight,!1),o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix()}function Ut(R){if(!mn||vi)return;let H=t(),te=R/1e3,J=yi?zi((R-yi)/1e3,0,.06):1/60;yi=R,fd(Z,te),_d(v,H.basePos,H.baseLevel),mt=v.layout,C=v.elevation,Ye(Le,H.labels?.board,"#ffe087"),Le.tag&&(Le.tag.position.y=1.65,Le.tag.scale.set(1.4,.36,1)),xe.visible=!!H.trail,H.trail&&(ta(ge,H.trail)&&xe.position.set(ge.x,ge.y,ge.z),V.material.opacity=.35+.13*Math.sin(te*3),(me!==H.trailNumber||le?.userData.text!==(H.trailNumber===4?H.labels?.finish||"4":H.trailNumber?String(H.trailNumber):H.trail.label))&&(le&&(Me.delete(le),xe.remove(le),le.material.map.dispose(),le.material.dispose()),me=H.trailNumber,le=F(me===4?H.labels?.finish||"4":me?String(me):H.trail.label,"#54e4ef"),le.userData.text=me===4?H.labels?.finish||"4":me?String(me):H.trail.label,le.position.y=1.5,le.scale.set(H.trailNumber?1:2.45,.4,1),xe.add(le))),Ye(Dt,H.labels?.leon,"#b49966"),Ye(Te,H.labels?.nela,"#609991");let ye=H.P.x/we,_e=H.P.y/we;h.update(),Y.update(te,mt),it.value=te,oe.material.uniforms.uTime.value=te,Ce(H.objects,te,H.resourceRevision),Yn(H.fishes,te,H.sea),Bi(H.chapterMarkers,te),ae(ke,H.P,Number.isFinite(H.heading)?H.heading:Re[H.face]||0,H.moving,te,J,H.fast?5.25:3,H.sea,H.raft,H.motion,H.spear,H.blocked),Dt.root.visible=Te.root.visible=!0,ae(Dt,H.leon,Math.atan2(ye-H.leon.x/we,_e-H.leon.y/we),!1,te,J,0,H.sea),ae(Te,H.nela,Math.atan2(ye-H.nela.x/we,_e-H.nela.y/we),!1,te,J,0,H.sea),qe.clear();for(let Ge of H.players){if(Ge.id===H.you)continue;qe.add(Ge.id);let ht=Ee.get(Ge.id),Un,Mi=H.looks[Ge.slot]||Dx;!ht||ht.name!==Ge.name?(Un=Ge.appearance?tl(Ge.appearance):Mi,ht&&at(ht),ht=Je(Un,"player",Ge.name),ht.remoteLook={...Un},ht.remoteMotion={kind:null,phase:0},Ee.set(Ge.id,ht)):Un=Ge.appearance?Uc(ht.remoteLook,Ge.appearance):Mi,Ht(ht,Un);let ni=ht.lastX===null?0:Ge.point.x/we-ht.lastX,fs=ht.lastZ===null?0:Ge.point.y/we-ht.lastZ,bi=Ge.moving&&Math.hypot(ni,fs)>.002?Math.atan2(ni,fs):Re[Ge.face]||0,pl=dd(ht.remoteMotion,Ge.motion,Ge.received,R);ae(ht,Ge.point,bi,Ge.moving,te,J,3,H.sea,!1,pl,H.spearOwned&&!Ge.spearStowed,Ge.blocked)}for(let[Ge,ht]of Ee)qe.has(Ge)||(at(ht),Ee.delete(Ge));Ht(ke,H.appearance||tl()),ta(Ue,H.leon,.9,.15)&&ee.position.set(Ue.x,Ue.y,Ue.z),ta(he,H.chest)&&de.position.set(he.x,he.y,he.z),de.visible=!H.treasure,Rt(H),pn(H.enemies,te);let fe=mt&&Math.abs(H.P.x-mt.floor.x)<mt.floor.w/2&&Math.abs(H.P.y-mt.floor.y)<mt.floor.h/2;for(let Ge of $e)Ge.opacity=fe&&Bt==="third"?.23:1,Ge.depthWrite=!(fe&&Bt==="third");Ae&&(Ae.scale.y=1+Math.sin(te*13)*.18,re.intensity=2.5+Math.sin(te*17)*.4);let je=ud(H.objects,H.P);De.visible=!!(H.play&&!H.paused&&je),je&&ta(Ze,je)&&De.position.set(Ze.x,Ze.y+.03,Ze.z);for(let Ge=0;Ge<In.length;Ge++){let ht=In[Ge];ht.position.set(19+Math.sin(te*.08+Ge*1.7)*8,7+Math.sin(te*.2+Ge)*.5,12+Math.cos(te*.1+Ge*1.3)*5),ht.rotation.y=te*.1+Ge,ht.scale.y=1+Math.sin(te*7+Ge)*.5}ke.rig.visible=Bt!=="first";let Mt=H.moving&&!H.paused?Math.sin(ke.phase*2)*.012:0;if(xt.x=ye,xt.z=_e,xt.surface=ke.root.position.y,xt.yaw=Ln,xt.pitch=dn,xt.mode=Bt,xt.distance=_i*(o.aspect<.85?1.12:1),xt.bob=Mt,il(xt,kt),Bt==="third"){et.y=Math.max(et.y,Rn(et.x,et.z)+.55),vt.subVectors(et,We);let Ge=vt.length();vt.normalize(),E.set(We,vt),E.near=.08,E.far=Ge;let ht=rl(E,B,!0,Q).find(se);ht&&et.copy(We).addScaledVector(vt,Math.max(.35,ht.distance-.15))}Bt==="first"||an||bt.distanceTo(ke.root.position)>5?(o.position.copy(et),Ve.copy(We),an=!1):(Fc(o.position,et,J,8),Fc(Ve,We,J,12)),o.lookAt(Bt==="first"?We:Ve),bt.copy(ke.root.position),md(Me,o,innerWidth,yt);let St=!!H.spear||!!H.motion&&(H.motion.kind==="gather"||H.motion.kind==="fish"||H.motion.kind==="cook");b.visible=Bt==="first"&&H.play&&St&&!H.sea(H.P.x,H.P.y),K.visible=!!H.spear&&!H.motion;for(let[Ge,ht]of Ne)ht.visible=H.motion?.kind===Ge;b.position.y=Mt*.4,b.rotation.x=H.motion?Math.sin(H.motion.phase*Math.PI*2)*.07:0,j.material=f(H.appearance?.skin||"#dda879"),G.material=f(H.appearance?.shirt||"#4c9cba"),sl(l,ye,_e),oe.position.copy(o.position),X.update(te,o.position),r.render(a,o),H.play&&J>.038?ti+=J:ti=Math.max(0,ti-J),ti>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),Be(),ti=0)}function at(R){a.remove(R.root),R.tag&&(Me.delete(R.tag),R.tag.material.map.dispose(),R.tag.material.dispose())}function It(R){return mn=!!R&&!vi,en=null,an=!0,yi=0,mn}function Ot(){mn=!1,r.dispose(),U.dispose(),T.dispose(),X.dispose(),oe.geometry.dispose(),oe.material.dispose(),O.traverse(R=>{R.geometry&&R.geometry.dispose(),R.material&&R.material.dispose()}),M.dispose(),Y.dispose(),h.dispose(),rt.dispose();for(let R of[...Object.values(q),...sn])R.geometry.dispose(),R.dispose();for(let R of p.values())R.dispose();for(let R of d.values())R.dispose()}return{frame:Ut,resize:Be,orbit:Qe,setEnabled:It,setCamera:Ke,dispose:Ot,vector:(R,H)=>hd(R,H,Ln),get enabled(){return mn},get yaw(){return Ln},get cameraMode(){return Bt},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:Ee.size+3,camera:Bt,eye:o.position.toArray(),resourceStaticUpdates:Fe,materials:h.stats()})}}return zd(Ux);})();
