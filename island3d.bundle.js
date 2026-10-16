var MyIsland3D=(()=>{var Ya=Object.defineProperty;var Ou=Object.getOwnPropertyDescriptor;var Bu=Object.getOwnPropertyNames;var ku=Object.prototype.hasOwnProperty;var Vu=(i,e)=>{for(var t in e)Ya(i,t,{get:e[t],enumerable:!0})},Gu=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Bu(e))!ku.call(i,r)&&r!==t&&Ya(i,r,{get:()=>e[r],enumerable:!(n=Ou(e,r))||n.enumerable});return i};var Hu=i=>Gu(Ya({},"__esModule",{value:!0}),i);var U0={};Vu(U0,{SCALE:()=>xe,actionPose:()=>Fu,baseElevation:()=>yc,buildBase:()=>Uu,buildHuman:()=>vc,cameraVector:()=>Du,create:()=>L0,createCampaign:()=>I0,drawCampaign2D:()=>xc,fishPose:()=>zu,legPose:()=>Lu,terrainHeight:()=>Qt,walkSurface:()=>_c});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var $c=0,Al=1,Kc=2;var Cl=1,Lr=2,Un=3,Yn=0,Xt=1,At=2,jn=0,Ci=1,Rl=2,Il=3,Pl=4,jc=5,hi=100,Qc=101,eh=102,th=103,nh=104,ih=200,rh=201,sh=202,oh=203,fo=204,po=205,ah=206,lh=207,ch=208,hh=209,uh=210,dh=211,fh=212,ph=213,mh=214,ko=0,Vo=1,Go=2,Ri=3,Ho=4,Wo=5,Xo=6,qo=7,Dl=0,gh=1,xh=2,Qn=0,_h=1,yh=2,vh=3,Ur=4,Mh=5,bh=6,Sh=7;var Ll=300,Vi=301,Gi=302,Yo=303,Zo=304,Es=306,_r=1e3,ci=1001,mo=1002,sn=1003,wh=1004;var As=1005;var Sn=1006,Jo=1007;var mi=1008;var En=1009,Ul=1010,Nl=1011,Nr=1012,$o=1013,gi=1014,An=1015,Fr=1016,Ko=1017,jo=1018,zr=1020,Fl=35902,zl=35899,Ol=1021,Bl=1022,xn=1023,yr=1026,Or=1027,Qo=1028,ea=1029,kl=1030,ta=1031;var na=1033,Cs=33776,Rs=33777,Is=33778,Ps=33779,ia=35840,ra=35841,sa=35842,oa=35843,aa=36196,la=37492,ca=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,xa=37815,_a=37816,ya=37817,va=37818,Ma=37819,ba=37820,Sa=37821,wa=36492,Ta=36494,Ea=36495,Aa=36283,Ca=36284,Ra=36285,Ia=36286;var cs=2300,go=2301,ho=2302,yl=2400,vl=2401,Ml=2402;var Th=3200,Eh=3201;var Vl=0,Ah=1,Cn="",It="srgb",Ii="srgb-linear",hs="linear",Mt="srgb";var Ai=7680;var bl=519,Ch=512,Rh=513,Ih=514,Gl=515,Ph=516,Dh=517,Lh=518,Uh=519,xo=35044;var Hl="300 es",bn=2e3,us=2001;var Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mc=1234567,as=Math.PI/180,vr=180/Math.PI;function Xn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Wl(i,e){return(i%e+e)%e}function Wu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Xu(i,e,t){return i!==e?(t-i)/(e-i):0}function ls(i,e,t){return(1-t)*i+t*e}function qu(i,e,t,n){return ls(i,e,1-Math.exp(-t*n))}function Yu(i,e=1){return e-Math.abs(Wl(i,e*2)-e)}function Zu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $u(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ku(i,e){return i+Math.random()*(e-i)}function ju(i){return i*(.5-Math.random())}function Qu(i){i!==void 0&&(Mc=i);let e=Mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ed(i){return i*as}function td(i){return i*vr}function nd(i){return(i&i-1)===0&&i!==0}function id(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sd(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),p=o((e-n)/2),f=s((n-e)/2),x=o((n-e)/2);switch(r){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ds={DEG2RAD:as,RAD2DEG:vr,generateUUID:Xn,clamp:at,euclideanModulo:Wl,mapLinear:Wu,inverseLerp:Xu,lerp:ls,damp:qu,pingpong:Yu,smoothstep:Zu,smootherstep:Ju,randInt:$u,randFloat:Ku,randFloatSpread:ju,seededRandom:Qu,degToRad:ed,radToDeg:td,isPowerOfTwo:nd,ceilPowerOfTwo:id,floorPowerOfTwo:rd,setQuaternionFromProperEuler:sd,normalize:vt,denormalize:Mn},Ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],p=s[o+0],f=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=f,e[t+2]=x,e[t+3]=_;return}if(u!==_||c!==p||l!==f||h!==x){let g=1-a,d=c*p+l*f+h*x+u*_,b=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let R=Math.sqrt(E),C=Math.atan2(R,d*b);g=Math.sin(g*C)/R,a=Math.sin(a*C)/R}let y=a*b;if(c=c*g+p*y,l=l*g+f*y,h=h*g+x*y,u=u*g+_*y,g===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],p=s[o+1],f=s[o+2],x=s[o+3];return e[t]=a*x+h*u+c*f-l*p,e[t+1]=c*x+h*p+l*u-a*f,e[t+2]=l*x+h*f+a*p-c*u,e[t+3]=h*x-a*u-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),p=c(n/2),f=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=p*h*u+l*f*x,this._y=l*f*u-p*h*x,this._z=l*h*x+p*f*u,this._w=l*h*u-p*f*x;break;case"YXZ":this._x=p*h*u+l*f*x,this._y=l*f*u-p*h*x,this._z=l*h*x-p*f*u,this._w=l*h*u+p*f*x;break;case"ZXY":this._x=p*h*u-l*f*x,this._y=l*f*u+p*h*x,this._z=l*h*x+p*f*u,this._w=l*h*u-p*f*x;break;case"ZYX":this._x=p*h*u-l*f*x,this._y=l*f*u+p*h*x,this._z=l*h*x-p*f*u,this._w=l*h*u+p*f*x;break;case"YZX":this._x=p*h*u+l*f*x,this._y=l*f*u+p*h*x,this._z=l*h*x-p*f*u,this._w=l*h*u-p*f*x;break;case"XZY":this._x=p*h*u-l*f*x,this._y=l*f*u-p*h*x,this._z=l*h*x+p*f*u,this._w=l*h*u+p*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=r*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Za=new V,bc=new Jn,it=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],f=n[5],x=n[8],_=r[0],g=r[3],d=r[6],b=r[1],E=r[4],y=r[7],R=r[2],C=r[5],P=r[8];return s[0]=o*_+a*b+c*R,s[3]=o*g+a*E+c*C,s[6]=o*d+a*y+c*P,s[1]=l*_+h*b+u*R,s[4]=l*g+h*E+u*C,s[7]=l*d+h*y+u*P,s[2]=p*_+f*b+x*R,s[5]=p*g+f*E+x*C,s[8]=p*d+f*y+x*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,p=a*c-h*s,f=l*s-o*c,x=t*u+n*p+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=u*_,e[1]=(r*l-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=p*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ja=new it;function Xl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nh(){let i=Mr("canvas");return i.style.display="block",i}var Sc={};function br(i){i in Sc||(Sc[i]=!0,console.warn(i))}function Fh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var wc=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function od(){let i={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cn?hs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ii]:{primaries:e,whitePoint:n,transfer:hs,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}var dt=od();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qi,_o=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qi===void 0&&(Qi=Mr("canvas")),Qi.width=e.width,Qi.height=e.height;let r=Qi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ad=0,Sr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($a(r[o].image)):s.push($a(r[o]))}else s=$a(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_o.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ld=0,Ka=new V,$t=class i extends Zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ci,r=ci,s=Sn,o=mi,a=xn,c=En,l=i.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Xn(),this.name="",this.source=new Sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Ll;$t.DEFAULT_ANISOTROPY=1;var ft=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],f=c[5],x=c[9],_=c[2],g=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(x+g)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,y=(f+1)/2,R=(d+1)/2,C=(h+p)/4,P=(u+_)/4,U=(x+g)/4;return E>y&&E>R?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=C/n,s=P/n):y>R?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=C/r,s=U/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=P/s,r=U/s),this.set(n,r,s,t),this}let b=Math.sqrt((g-x)*(g-x)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(g-x)/b,this.y=(u-_)/b,this.z=(p-h)/b,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yo=class extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new $t(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Sr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ds=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vo=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Vs.subVectors(this.max,$r),er.subVectors(e.a,$r),tr.subVectors(e.b,$r),nr.subVectors(e.c,$r),ii.subVectors(tr,er),ri.subVectors(nr,tr),Si.subVectors(er,nr);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Si.z,Si.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Si.z,0,-Si.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Si.y,Si.x,0];return!ja(t,er,tr,nr,Vs)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,er,tr,nr,Vs))?!1:(Gs.crossVectors(ii,ri),t=[Gs.x,Gs.y,Gs.z],ja(t,er,tr,nr,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bn=[new V,new V,new V,new V,new V,new V,new V,new V],_n=new V,ks=new Dn,er=new V,tr=new V,nr=new V,ii=new V,ri=new V,Si=new V,$r=new V,Vs=new V,Gs=new V,wi=new V;function ja(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){wi.fromArray(i,s);let a=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var cd=new Dn,Kr=new V,Qa=new V,$n=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);let t=Kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Kr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Qa)),this.expandByPoint(Kr.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kn=new V,el=new V,Hs=new V,si=new V,tl=new V,Ws=new V,nl=new V,wr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){el.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),si.copy(this.origin).sub(el);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Hs),a=si.dot(this.direction),c=-si.dot(Hs),l=si.lengthSq(),h=Math.abs(1-o*o),u,p,f,x;if(h>0)if(u=o*c-a,p=o*a-c,x=s*h,u>=0)if(p>=-x)if(p<=x){let _=1/h;u*=_,p*=_,f=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=s,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;else p=-s,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;else p<=-x?(u=Math.max(0,-(-o*s+a)),p=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+p*(p+2*c)+l):p<=x?(u=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(u=Math.max(0,-(o*s+a)),p=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+p*(p+2*c)+l);else p=o>0?-s:s,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(el).addScaledVector(Hs,p),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);let n=kn.dot(this.direction),r=kn.dot(kn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,r,s){tl.subVectors(t,e),Ws.subVectors(n,e),nl.crossVectors(tl,Ws);let o=this.direction.dot(nl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);let c=a*this.direction.dot(Ws.crossVectors(si,Ws));if(c<0)return null;let l=a*this.direction.dot(tl.cross(si));if(l<0||c+l>o)return null;let h=-a*si.dot(nl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class i{constructor(e,t,n,r,s,o,a,c,l,h,u,p,f,x,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,u,p,f,x,_,g)}set(e,t,n,r,s,o,a,c,l,h,u,p,f,x,_,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=f,d[7]=x,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let p=o*h,f=o*u,x=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+x*l,t[5]=p-_*l,t[9]=-a*c,t[2]=_-p*l,t[6]=x+f*l,t[10]=o*c}else if(e.order==="YXZ"){let p=c*h,f=c*u,x=l*h,_=l*u;t[0]=p+_*a,t[4]=x*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-x,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){let p=c*h,f=c*u,x=l*h,_=l*u;t[0]=p-_*a,t[4]=-o*u,t[8]=x+f*a,t[1]=f+x*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let p=o*h,f=o*u,x=a*h,_=a*u;t[0]=c*h,t[4]=x*l-f,t[8]=p*l+_,t[1]=c*u,t[5]=_*l+p,t[9]=f*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let p=o*c,f=o*l,x=a*c,_=a*l;t[0]=c*h,t[4]=_-p*u,t[8]=x*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+x,t[10]=p-_*u}else if(e.order==="XZY"){let p=o*c,f=o*l,x=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+_,t[5]=o*h,t[9]=f*u-x,t[2]=x*u-f,t[6]=a*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hd,e,ud)}lookAt(e,t,n){let r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),oi.crossVectors(n,un),oi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),oi.crossVectors(n,un)),oi.normalize(),Xs.crossVectors(un,oi),r[0]=oi.x,r[4]=Xs.x,r[8]=un.x,r[1]=oi.y,r[5]=Xs.y,r[9]=un.y,r[2]=oi.z,r[6]=Xs.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],f=n[13],x=n[2],_=n[6],g=n[10],d=n[14],b=n[3],E=n[7],y=n[11],R=n[15],C=r[0],P=r[4],U=r[8],w=r[12],S=r[1],A=r[5],N=r[9],k=r[13],F=r[2],B=r[6],W=r[10],$=r[14],Y=r[3],ie=r[7],se=r[11],_e=r[15];return s[0]=o*C+a*S+c*F+l*Y,s[4]=o*P+a*A+c*B+l*ie,s[8]=o*U+a*N+c*W+l*se,s[12]=o*w+a*k+c*$+l*_e,s[1]=h*C+u*S+p*F+f*Y,s[5]=h*P+u*A+p*B+f*ie,s[9]=h*U+u*N+p*W+f*se,s[13]=h*w+u*k+p*$+f*_e,s[2]=x*C+_*S+g*F+d*Y,s[6]=x*P+_*A+g*B+d*ie,s[10]=x*U+_*N+g*W+d*se,s[14]=x*w+_*k+g*$+d*_e,s[3]=b*C+E*S+y*F+R*Y,s[7]=b*P+E*A+y*B+R*ie,s[11]=b*U+E*N+y*W+R*se,s[15]=b*w+E*k+y*$+R*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],f=e[14],x=e[3],_=e[7],g=e[11],d=e[15];return x*(+s*c*u-r*l*u-s*a*p+n*l*p+r*a*f-n*c*f)+_*(+t*c*f-t*l*p+s*o*p-r*o*f+r*l*h-s*c*h)+g*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+d*(-r*a*h-t*c*u+t*a*p+r*o*u-n*o*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],f=e[11],x=e[12],_=e[13],g=e[14],d=e[15],b=u*g*l-_*p*l+_*c*f-a*g*f-u*c*d+a*p*d,E=x*p*l-h*g*l-x*c*f+o*g*f+h*c*d-o*p*d,y=h*_*l-x*u*l+x*a*f-o*_*f-h*a*d+o*u*d,R=x*u*c-h*_*c-x*a*p+o*_*p+h*a*g-o*u*g,C=t*b+n*E+r*y+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/C;return e[0]=b*P,e[1]=(_*p*s-u*g*s-_*r*f+n*g*f+u*r*d-n*p*d)*P,e[2]=(a*g*s-_*c*s+_*r*l-n*g*l-a*r*d+n*c*d)*P,e[3]=(u*c*s-a*p*s-u*r*l+n*p*l+a*r*f-n*c*f)*P,e[4]=E*P,e[5]=(h*g*s-x*p*s+x*r*f-t*g*f-h*r*d+t*p*d)*P,e[6]=(x*c*s-o*g*s-x*r*l+t*g*l+o*r*d-t*c*d)*P,e[7]=(o*p*s-h*c*s+h*r*l-t*p*l-o*r*f+t*c*f)*P,e[8]=y*P,e[9]=(x*u*s-h*_*s-x*n*f+t*_*f+h*n*d-t*u*d)*P,e[10]=(o*_*s-x*a*s+x*n*l-t*_*l-o*n*d+t*a*d)*P,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*P,e[12]=R*P,e[13]=(h*_*r-x*u*r+x*n*p-t*_*p-h*n*g+t*u*g)*P,e[14]=(x*a*r-o*_*r-x*n*c+t*_*c+o*n*g-t*a*g)*P,e[15]=(o*u*r-h*a*r+h*n*c-t*u*c-o*n*p+t*a*p)*P,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,p=s*l,f=s*h,x=s*u,_=o*h,g=o*u,d=a*u,b=c*l,E=c*h,y=c*u,R=n.x,C=n.y,P=n.z;return r[0]=(1-(_+d))*R,r[1]=(f+y)*R,r[2]=(x-E)*R,r[3]=0,r[4]=(f-y)*C,r[5]=(1-(p+d))*C,r[6]=(g+b)*C,r[7]=0,r[8]=(x+E)*P,r[9]=(g-b)*P,r[10]=(1-(p+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=ir.set(r[0],r[1],r[2]).length(),o=ir.set(r[4],r[5],r[6]).length(),a=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);let l=1/s,h=1/o,u=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=bn,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-r),p=(t+e)/(t-e),f=(n+r)/(n-r),x,_;if(c)x=s/(o-s),_=o*s/(o-s);else if(a===bn)x=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===us)x=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=bn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-r),p=-(t+e)/(t-e),f=-(n+r)/(n-r),x,_;if(c)x=1/(o-s),_=o/(o-s);else if(a===bn)x=-2/(o-s),_=-(o+s)/(o-s);else if(a===us)x=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ir=new V,yn=new xt,hd=new V(0,0,0),ud=new V(1,1,1),oi=new V,Xs=new V,un=new V,Ec=new xt,Ac=new Jn,wn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dd=0,Cc=new V,rr=new Jn,Vn=new xt,qs=new V,jr=new V,fd=new V,pd=new Jn,Rc=new V(1,0,0),Ic=new V(0,1,0),Pc=new V(0,0,1),Dc={type:"added"},md={type:"removed"},sr={type:"childadded",child:null},il={type:"childremoved",child:null},mt=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new wn,n=new Jn,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new it}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(jr,qs,this.up):Vn.lookAt(qs,jr,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(Vn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(md),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),f=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};mt.DEFAULT_UP=new V(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new V,Gn=new V,rl=new V,Hn=new V,or=new V,ar=new V,Lc=new V,sl=new V,ol=new V,al=new V,ll=new ft,cl=new ft,hl=new ft,Wn=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){vn.subVectors(r,t),Gn.subVectors(n,t),rl.subVectors(e,t);let o=vn.dot(vn),a=vn.dot(Gn),c=vn.dot(rl),l=Gn.dot(Gn),h=Gn.dot(rl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let p=1/u,f=(l*c-a*h)*p,x=(o*h-a*c)*p;return s.set(1-f-x,x,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return ll.setScalar(0),cl.setScalar(0),hl.setScalar(0),ll.fromBufferAttribute(e,t),cl.fromBufferAttribute(e,n),hl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ll,s.x),o.addScaledVector(cl,s.y),o.addScaledVector(hl,s.z),o}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),Gn.subVectors(e,t),vn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),vn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;or.subVectors(r,n),ar.subVectors(s,n),sl.subVectors(e,n);let c=or.dot(sl),l=ar.dot(sl);if(c<=0&&l<=0)return t.copy(n);ol.subVectors(e,r);let h=or.dot(ol),u=ar.dot(ol);if(h>=0&&u<=h)return t.copy(r);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(or,o);al.subVectors(e,s);let f=or.dot(al),x=ar.dot(al);if(x>=0&&f<=x)return t.copy(s);let _=f*l-c*x;if(_<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(ar,a);let g=h*x-f*u;if(g<=0&&u-h>=0&&f-x>=0)return Lc.subVectors(s,r),a=(u-h)/(u-h+(f-x)),t.copy(r).addScaledVector(Lc,a);let d=1/(g+_+p);return o=_*d,a=p*d,t.copy(n).addScaledVector(or,o).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function ul(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=Wl(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ul(o,s,e+1/3),this.g=ul(o,s,e),this.b=ul(o,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=It){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=zh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return dt.workingToColorSpace(Jt.copy(this),e),Math.round(at(Jt.r*255,0,255))*65536+Math.round(at(Jt.g*255,0,255))*256+Math.round(at(Jt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=It){dt.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,r=Jt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Ys);let n=ls(ai.h,Ys.h,t),r=ls(ai.s,Ys.s,t),s=ls(ai.l,Ys.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Je;Je.NAMES=zh;var gd=0,Ln=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Ci,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fo&&(n.blendSrc=this.blendSrc),this.blendDst!==po&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Lt=new V,Zs=new Ve,xd=0,zt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xo,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xo&&(e.usage=this.usage),e}};var fs=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ps=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},_d=0,gn=new xt,dl=new mt,lr=new V,dn=new Dn,Qr=new Dn,kt=new V,_t=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xl(e)?ps:fs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(dn.min,Qr.min),dn.expandByPoint(kt),kt.addVectors(dn.max,Qr.max),dn.expandByPoint(kt)):(dn.expandByPoint(Qr.min),dn.expandByPoint(Qr.max))}dn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)kt.fromBufferAttribute(a,l),c&&(lr.fromBufferAttribute(e,l),kt.add(lr)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new V,c[U]=new V;let l=new V,h=new V,u=new V,p=new Ve,f=new Ve,x=new Ve,_=new V,g=new V;function d(U,w,S){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),p.fromBufferAttribute(s,U),f.fromBufferAttribute(s,w),x.fromBufferAttribute(s,S),h.sub(l),u.sub(l),f.sub(p),x.sub(p);let A=1/(f.x*x.y-x.x*f.y);isFinite(A)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(A),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(A),a[U].add(_),a[w].add(_),a[S].add(_),c[U].add(g),c[w].add(g),c[S].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,w=b.length;U<w;++U){let S=b[U],A=S.start,N=S.count;for(let k=A,F=A+N;k<F;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new V,y=new V,R=new V,C=new V;function P(U){R.fromBufferAttribute(r,U),C.copy(R);let w=a[U];E.copy(w),E.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(C,w);let A=y.dot(c[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,A)}for(let U=0,w=b.length;U<w;++U){let S=b[U],A=S.start,N=S.count;for(let k=A,F=A+N;k<F;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,h=new V,u=new V;if(e)for(let p=0,f=e.count;p<f;p+=3){let x=e.getX(p+0),_=e.getX(p+1),g=e.getX(p+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h),f=0,x=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let d=0;d<h;d++)p[x++]=l[f++]}return new zt(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let p=l[h],f=e(p,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uc=new xt,Ti=new wr,Js=new $n,Nc=new V,$s=new V,Ks=new V,js=new V,fl=new V,Qs=new V,Fc=new V,eo=new V,rt=class extends mt{constructor(e=new _t,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Qs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(fl.fromBufferAttribute(u,e),o?Qs.addScaledVector(fl,h):Qs.addScaledVector(fl.sub(t),h))}t.add(Qs)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(Js.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Js,Nc)===null||Ti.origin.distanceToSquared(Nc)>(e.far-e.near)**2))&&(Uc.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=p.length;x<_;x++){let g=p[x],d=o[g.materialIndex],b=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,R=E;y<R;y+=3){let C=a.getX(y),P=a.getX(y+1),U=a.getX(y+2);r=to(this,d,e,n,l,h,u,C,P,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let x=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=x,d=_;g<d;g+=3){let b=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);r=to(this,o,e,n,l,h,u,b,E,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,_=p.length;x<_;x++){let g=p[x],d=o[g.materialIndex],b=Math.max(g.start,f.start),E=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,R=E;y<R;y+=3){let C=y,P=y+1,U=y+2;r=to(this,d,e,n,l,h,u,C,P,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let x=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=x,d=_;g<d;g+=3){let b=g,E=g+1,y=g+2;r=to(this,o,e,n,l,h,u,b,E,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function yd(i,e,t,n,r,s,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Yn,a),c===null)return null;eo.copy(a),eo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(eo);return l<t.near||l>t.far?null:{distance:l,point:eo.clone(),object:i}}function to(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,$s),i.getVertexPosition(c,Ks),i.getVertexPosition(l,js);let h=yd(i,e,t,n,$s,Ks,js,Fc);if(h){let u=new V;Wn.getBarycoord(Fc,$s,Ks,js,u),r&&(h.uv=Wn.getInterpolatedAttribute(r,a,c,l,u,new Ve)),s&&(h.uv1=Wn.getInterpolatedAttribute(s,a,c,l,u,new Ve)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,c,l,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new V,materialIndex:0};Wn.getNormal($s,Ks,js,p.normal),h.face=p,h.barycoord=u}return h}var Wt=class i extends _t{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],p=0,f=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function x(_,g,d,b,E,y,R,C,P,U,w){let S=y/P,A=R/U,N=y/2,k=R/2,F=C/2,B=P+1,W=U+1,$=0,Y=0,ie=new V;for(let se=0;se<W;se++){let _e=se*A-k;for(let Le=0;Le<B;Le++){let Fe=Le*S-N;ie[_]=Fe*b,ie[g]=_e*E,ie[d]=F,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[g]=0,ie[d]=C>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Le/P),u.push(1-se/U),$+=1}}for(let se=0;se<U;se++)for(let _e=0;_e<P;_e++){let Le=p+_e+B*se,Fe=p+_e+B*(se+1),tt=p+(_e+1)+B*(se+1),Be=p+(_e+1)+B*se;c.push(Le,Fe,Be),c.push(Fe,tt,Be),Y+=6}a.addGroup(f,Y,w),f+=Y,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Kt(i){let e={};for(let t=0;t<i.length;t++){let n=Hi(i[t]);for(let r in n)e[r]=n[r]}return e}function vd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ql(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Pa={clone:Hi,merge:Kt},Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=vd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ms=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new V,zc=new Ve,Oc=new Ve,Ft=class extends ms{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,zc,Oc),t.subVectors(Oc,zc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(as*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cr=-90,hr=1,Mo=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ft(cr,hr,e,t);r.layers=this.layers,this.add(r);let s=new Ft(cr,hr,e,t);s.layers=this.layers,this.add(s);let o=new Ft(cr,hr,e,t);o.layers=this.layers,this.add(o);let a=new Ft(cr,hr,e,t);a.layers=this.layers,this.add(a);let c=new Ft(cr,hr,e,t);c.layers=this.layers,this.add(c);let l=new Ft(cr,hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,p,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},gs=class extends $t{constructor(e=[],t=Vi,n,r,s,o,a,c,l,h){super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bo=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wt(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:jn});s.uniforms.tEquirect.value=t;let o=new rt(r,s),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=Sn),new Mo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Oe=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sd={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),d=this._getHandJoint(l,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,x=.005;l.inputState.pinching&&p>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Pi=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Di=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xo,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},tn=new V,Ar=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cr=class extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur,es=new V,dr=new V,fr=new V,pr=new Ve,ts=new Ve,Oh=new xt,no=new V,ns=new V,io=new V,Bc=new Ve,pl=new Ve,kc=new Ve,_s=class extends mt{constructor(e=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new _t;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xs(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new Ar(n,3,0,!1)),ur.setAttribute("uv",new Ar(n,2,3,!1))}this.geometry=ur,this.material=e,this.center=new Ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),Oh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-fr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;ro(no.set(-.5,-.5,0),fr,o,dr,r,s),ro(ns.set(.5,-.5,0),fr,o,dr,r,s),ro(io.set(.5,.5,0),fr,o,dr,r,s),Bc.set(0,0),pl.set(1,0),kc.set(1,1);let a=e.ray.intersectTriangle(no,ns,io,!1,es);if(a===null&&(ro(ns.set(-.5,.5,0),fr,o,dr,r,s),pl.set(0,1),a=e.ray.intersectTriangle(no,io,ns,!1,es),a===null))return;let c=e.ray.origin.distanceTo(es);c<e.near||c>e.far||t.push({distance:c,point:es.clone(),uv:Wn.getInterpolation(es,no,ns,io,Bc,pl,kc,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ro(i,e,t,n,r,s){pr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ts.x=s*pr.x-r*pr.y,ts.y=r*pr.x+s*pr.y):ts.copy(pr),i.copy(e),i.x+=ts.x,i.y+=ts.y,i.applyMatrix4(Oh)}var So=class extends $t{constructor(e=null,t=1,n=1,r,s,o,a,c,l=sn,h=sn,u,p){super(null,o,a,c,l,h,r,s,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new xt,Vc=new xt,so=[],Gc=new Dn,wd=new xt,is=new rt,rs=new $n,gt=class extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,wd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Gc.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Gc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),rs.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(n),e.ray.intersectsSphere(rs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mr),Vc.multiplyMatrices(n,mr),is.matrixWorld=Vc,is.raycast(e,so);for(let o=0,a=so.length;o<a;o++){let c=so[o];c.instanceId=s,c.object=this,t.push(c)}so.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new So(new Float32Array(r*this.count),r,this.count,Qo,An));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ml=new V,Td=new V,Ed=new it,In=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ml.subVectors(n,t).cross(Td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ml),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ed.getNormalMatrix(e),r=this.coplanarPoint(ml).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ei=new $n,Ad=new Ve(.5,.5),oo=new V,Ir=class{constructor(e=new In,t=new In,n=new In,r=new In,s=new In,o=new In){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],p=s[6],f=s[7],x=s[8],_=s[9],g=s[10],d=s[11],b=s[12],E=s[13],y=s[14],R=s[15];if(r[0].setComponents(l-o,f-h,d-x,R-b).normalize(),r[1].setComponents(l+o,f+h,d+x,R+b).normalize(),r[2].setComponents(l+a,f+u,d+_,R+E).normalize(),r[3].setComponents(l-a,f-u,d-_,R-E).normalize(),n)r[4].setComponents(c,p,g,y).normalize(),r[5].setComponents(l-c,f-p,d-g,R-y).normalize();else if(r[4].setComponents(l-c,f-p,d-g,R-y).normalize(),t===bn)r[5].setComponents(l+c,f+p,d+g,R+y).normalize();else if(t===us)r[5].setComponents(c,p,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);let t=Ad.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(oo.x=r.normal.x>0?e.max.x:e.min.x,oo.y=r.normal.y>0?e.max.y:e.min.y,oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ui=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wo=new V,To=new V,Hc=new xt,ss=new wr,ao=new $n,gl=new V,Wc=new V,Li=class extends mt{constructor(e=new _t,t=new ui){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)wo.fromBufferAttribute(t,r-1),To.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=wo.distanceTo(To);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),ao.radius+=s,e.ray.intersectsSphere(ao)===!1)return;Hc.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Hc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let _=f,g=x-1;_<g;_+=l){let d=h.getX(_),b=h.getX(_+1),E=lo(this,e,ss,c,d,b,_);E&&t.push(E)}if(this.isLineLoop){let _=h.getX(x-1),g=h.getX(f),d=lo(this,e,ss,c,_,g,x-1);d&&t.push(d)}}else{let f=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let _=f,g=x-1;_<g;_+=l){let d=lo(this,e,ss,c,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){let _=lo(this,e,ss,c,x-1,f,x-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function lo(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(wo.fromBufferAttribute(a,r),To.fromBufferAttribute(a,s),t.distanceSqToSegment(wo,To,gl,Wc)>n)return;gl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(gl);if(!(l<e.near||l>e.far))return{distance:l,point:Wc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var di=class extends $t{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ys=class extends $t{constructor(e,t,n=gi,r,s,o,a=sn,c=sn,l,h=yr,u=1){if(h!==yr&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vs=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Tt=class i extends _t{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],p=[],f=[],x=0,_=[],g=n/2,d=0;b(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(p,3)),this.setAttribute("uv",new Qe(f,2));function b(){let y=new V,R=new V,C=0,P=(t-e)/n;for(let U=0;U<=s;U++){let w=[],S=U/s,A=S*(t-e)+e;for(let N=0;N<=r;N++){let k=N/r,F=k*c+a,B=Math.sin(F),W=Math.cos(F);R.x=A*B,R.y=-S*n+g,R.z=A*W,u.push(R.x,R.y,R.z),y.set(B,P,W).normalize(),p.push(y.x,y.y,y.z),f.push(k,1-S),w.push(x++)}_.push(w)}for(let U=0;U<r;U++)for(let w=0;w<s;w++){let S=_[w][U],A=_[w+1][U],N=_[w+1][U+1],k=_[w][U+1];(e>0||w!==0)&&(h.push(S,A,k),C+=3),(t>0||w!==s-1)&&(h.push(A,N,k),C+=3)}l.addGroup(d,C,0),d+=C}function E(y){let R=x,C=new Ve,P=new V,U=0,w=y===!0?e:t,S=y===!0?1:-1;for(let N=1;N<=r;N++)u.push(0,g*S,0),p.push(0,S,0),f.push(.5,.5),x++;let A=x;for(let N=0;N<=r;N++){let F=N/r*c+a,B=Math.cos(F),W=Math.sin(F);P.x=w*W,P.y=g*S,P.z=w*B,u.push(P.x,P.y,P.z),p.push(0,S,0),C.x=B*.5+.5,C.y=W*.5*S+.5,f.push(C.x,C.y),x++}for(let N=0;N<r;N++){let k=R+N,F=A+N;y===!0?h.push(F,F+1,k):h.push(F+1,F,k),U+=3}l.addGroup(d,U,y===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Tn=class i extends Tt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Eo=class i extends _t{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(s.slice(),3)),this.setAttribute("uv",new Qe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let E=new V,y=new V,R=new V;for(let C=0;C<t.length;C+=3)f(t[C+0],E),f(t[C+1],y),f(t[C+2],R),c(E,y,R,b)}function c(b,E,y,R){let C=R+1,P=[];for(let U=0;U<=C;U++){P[U]=[];let w=b.clone().lerp(y,U/C),S=E.clone().lerp(y,U/C),A=C-U;for(let N=0;N<=A;N++)N===0&&U===C?P[U][N]=w:P[U][N]=w.clone().lerp(S,N/A)}for(let U=0;U<C;U++)for(let w=0;w<2*(C-U)-1;w++){let S=Math.floor(w/2);w%2===0?(p(P[U][S+1]),p(P[U+1][S]),p(P[U][S])):(p(P[U][S+1]),p(P[U+1][S+1]),p(P[U+1][S]))}}function l(b){let E=new V;for(let y=0;y<s.length;y+=3)E.x=s[y+0],E.y=s[y+1],E.z=s[y+2],E.normalize().multiplyScalar(b),s[y+0]=E.x,s[y+1]=E.y,s[y+2]=E.z}function h(){let b=new V;for(let E=0;E<s.length;E+=3){b.x=s[E+0],b.y=s[E+1],b.z=s[E+2];let y=g(b)/2/Math.PI+.5,R=d(b)/Math.PI+.5;o.push(y,1-R)}x(),u()}function u(){for(let b=0;b<o.length;b+=6){let E=o[b+0],y=o[b+2],R=o[b+4],C=Math.max(E,y,R),P=Math.min(E,y,R);C>.9&&P<.1&&(E<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),R<.2&&(o[b+4]+=1))}}function p(b){s.push(b.x,b.y,b.z)}function f(b,E){let y=b*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function x(){let b=new V,E=new V,y=new V,R=new V,C=new Ve,P=new Ve,U=new Ve;for(let w=0,S=0;w<s.length;w+=9,S+=6){b.set(s[w+0],s[w+1],s[w+2]),E.set(s[w+3],s[w+4],s[w+5]),y.set(s[w+6],s[w+7],s[w+8]),C.set(o[S+0],o[S+1]),P.set(o[S+2],o[S+3]),U.set(o[S+4],o[S+5]),R.copy(b).add(E).add(y).divideScalar(3);let A=g(R);_(C,S+0,b,A),_(P,S+2,E,A),_(U,S+4,y,A)}}function _(b,E,y,R){R<0&&b.x===1&&(o[E]=b.x-1),y.x===0&&y.z===0&&(o[E]=R/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ui=class i extends Eo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ms=class i extends _t{constructor(e=[new Ve(0,-.5),new Ve(.5,0),new Ve(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=at(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/t,u=new V,p=new Ve,f=new V,x=new V,_=new V,g=0,d=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,d=e[b+1].y-e[b].y,f.x=d*1,f.y=-g,f.z=d*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[b+1].x-e[b].x,d=e[b+1].y-e[b].y,f.x=d*1,f.y=-g,f.z=d*0,x.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(x)}for(let b=0;b<=t;b++){let E=n+b*h*r,y=Math.sin(E),R=Math.cos(E);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*y,u.y=e[C].y,u.z=e[C].x*R,o.push(u.x,u.y,u.z),p.x=b/t,p.y=C/(e.length-1),a.push(p.x,p.y);let P=c[3*C+0]*y,U=c[3*C+1],w=c[3*C+0]*R;l.push(P,U,w)}}for(let b=0;b<t;b++)for(let E=0;E<e.length-1;E++){let y=E+b*e.length,R=y,C=y+e.length,P=y+e.length+1,U=y+1;s.push(R,C,U),s.push(P,U,C)}this.setIndex(s),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var fn=class i extends _t{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=e/a,p=t/c,f=[],x=[],_=[],g=[];for(let d=0;d<h;d++){let b=d*p-o;for(let E=0;E<l;E++){let y=E*u-s;x.push(y,-b,0),_.push(0,0,1),g.push(E/a),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){let E=b+l*d,y=b+l*(d+1),R=b+1+l*(d+1),C=b+1+l*d;f.push(E,y,C),f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new Qe(x,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ni=class i extends _t{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],c=[],l=[],h=[],u=e,p=(t-e)/r,f=new V,x=new Ve;for(let _=0;_<=r;_++){for(let g=0;g<=n;g++){let d=s+g/n*o;f.x=u*Math.cos(d),f.y=u*Math.sin(d),c.push(f.x,f.y,f.z),l.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,h.push(x.x,x.y)}u+=p}for(let _=0;_<r;_++){let g=_*(n+1);for(let d=0;d<n;d++){let b=d+g,E=b,y=b+n+1,R=b+n+2,C=b+1;a.push(E,y,C),a.push(y,R,C)}}this.setIndex(a),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ln=class i extends _t{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new V,p=new V,f=[],x=[],_=[],g=[];for(let d=0;d<=n;d++){let b=[],E=d/n,y=0;d===0&&o===0?y=.5/t:d===n&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let C=R/t;u.x=-e*Math.cos(r+C*s)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(r+C*s)*Math.sin(o+E*a),x.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),g.push(C+y,1-E),b.push(l++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){let E=h[d][b+1],y=h[d][b],R=h[d+1][b],C=h[d+1][b+1];(d!==0||o>0)&&f.push(E,y,C),(d!==n-1||c<Math.PI)&&f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new Qe(x,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Kn=class i extends _t{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new V,u=new V,p=new V;for(let f=0;f<=n;f++)for(let x=0;x<=r;x++){let _=x/r*s,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(x/r),l.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=r;x++){let _=(r+1)*f+x-1,g=(r+1)*(f-1)+x-1,d=(r+1)*(f-1)+x,b=(r+1)*f+x;o.push(_,g,b),o.push(g,d,b)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var bt=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bs=class extends bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ao=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Co=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function co(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Cd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Fi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ro=class extends Fi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yl,endingEnd:yl}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case vl:s=e,a=2*t-n;break;case Ml:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case vl:o=e,c=2*n-t;break;case Ml:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,x=(n-t)/(r-t),_=x*x,g=_*x,d=-p*g+2*p*_-p*x,b=(1+p)*g+(-1.5-2*p)*_+(-.5+p)*x+1,E=(-1-f)*g+(1.5+f)*_+.5*x,y=f*g-f*_;for(let R=0;R!==a;++R)s[R]=d*o[h+R]+b*o[l+R]+E*o[c+R]+y*o[u+R];return s}},Io=class extends Fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(r-t),u=1-h;for(let p=0;p!==a;++p)s[p]=o[l+p]*u+o[c+p]*h;return s}},Po=class extends Fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ro(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cs:t=this.InterpolantFactoryMethodDiscrete;break;case go:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cs;case this.InterpolantFactoryMethodLinear:return go;case this.InterpolantFactoryMethodSmooth:return ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Cd(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ho,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*n,p=u-n,f=u+n;for(let x=0;x!==n;++x){let _=t[u+x];if(_!==t[p+x]||_!==t[f+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,p=o*n;for(let f=0;f!==n;++f)t[p+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=go;var fi=class extends pn{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=cs;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}};Do.prototype.ValueTypeName="color";var Lo=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}};Lo.prototype.ValueTypeName="number";var Uo=class extends Fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)Jn.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ss=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}};Ss.prototype.ValueTypeName="quaternion";Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends pn{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=cs;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}};No.prototype.ValueTypeName="vector";var uo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Fo=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let f=l[u],x=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Bh=new Fo,Pr=class{constructor(e){this.manager=e!==void 0?e:Bh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Pr.DEFAULT_MATERIAL_NAME="__DEFAULT";var gr=new WeakMap,zo=class extends Pr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=uo.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=gr.get(o);u===void 0&&(u=[],gr.set(o,u)),u.push({onLoad:t,onError:r})}return o}let a=Mr("img");function c(){h(),t&&t(this);let u=gr.get(this)||[];for(let p=0;p<u.length;p++){let f=u[p];f.onLoad&&f.onLoad(this)}gr.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),uo.remove(`image:${e}`);let p=gr.get(this)||[];for(let f=0;f<p.length;f++){let x=p[f];x.onError&&x.onError(u)}gr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),uo.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var ws=class extends Pr{constructor(e){super(e)}load(e,t,n,r){let s=new $t,o=new zo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Dr=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},zi=class extends Dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xl=new xt,Xc=new V,qc=new V,Oo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xc),qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qc),t.updateMatrixWorld(),xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Yc=new xt,os=new V,_l=new V,Sl=class extends Oo{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),_l.copy(n.position),_l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_l),n.updateMatrixWorld(),r.makeTranslation(-os.x,-os.y,-os.z),Yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc,n.coordinateSystem,n.reversedDepth)}},Oi=class extends Dr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Sl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ts=class extends ms{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wl=class extends Oo{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bi=class extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new wl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Bo=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Yl="\\[\\]\\.:\\/",Rd=new RegExp("["+Yl+"]","g"),Zl="[^"+Yl+"]",Id="[^"+Yl.replace("\\.","")+"]",Pd=/((?:WC+[\/:])*)/.source.replace("WC",Zl),Dd=/(WCOD+)?/.source.replace("WCOD",Id),Ld=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),Ud=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),Nd=new RegExp("^"+Pd+Dd+Ld+Ud+"$"),Fd=["material","materials","bones","map"],Tl=class{constructor(e,t,n){let r=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rd,"")}static parseTrackName(e){let t=Nd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Fd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Tl;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F0=new Float32Array(1);var Zc=new xt,ki=class{constructor(e,t,n=0,r=1/0){this.ray=new wr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zc),this}intersectObject(e,t=!0,n=[]){return El(e,this,n,t),n.sort(Jc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)El(e[r],this,n,t);return n.sort(Jc),n}};function Jc(i,e){return i.distance-e.distance}function El(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)El(s[o],e,t,!0)}}function Jl(i,e,t,n){let r=zd(n);switch(t){case Ol:return i*e;case Qo:return i*e/r.components*r.byteLength;case ea:return i*e/r.components*r.byteLength;case kl:return i*e*2/r.components*r.byteLength;case ta:return i*e*2/r.components*r.byteLength;case Bl:return i*e*3/r.components*r.byteLength;case xn:return i*e*4/r.components*r.byteLength;case na:return i*e*4/r.components*r.byteLength;case Cs:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Is:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ra:case oa:return Math.max(i,16)*Math.max(e,8)/4;case ia:case sa:return Math.max(i,8)*Math.max(e,8)/2;case aa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wa:case Ta:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Aa:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ra:case Ia:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zd(i){switch(i){case En:case Ul:return{byteLength:1,components:1};case Nr:case Nl:case Fr:return{byteLength:2,components:1};case Ko:case jo:return{byteLength:2,components:4};case gi:case $o:case An:return{byteLength:4,components:1};case Fl:case zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Gd(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,x)=>f.start-x.start);let p=0;for(let f=1;f<u.length;f++){let x=u[p],_=u[f];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++p,u[p]=_)}u.length=p+1;for(let f=0,x=u.length;f<x;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
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
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
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
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ff=`#define PI 3.141592653589793
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
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mf=`vec3 transformedNormal = objectNormal;
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
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pf=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
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
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
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
#endif`,Gf=`struct PhysicalMaterial {
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
}`,Hf=`
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qf=`#if defined( USE_POINTS_UV )
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
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
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
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cp=`float getShadowMask() {
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
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,$p=`#if DEPTH_PACKING == 3200
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
}`,Kp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`uniform float scale;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,rm=`uniform vec3 diffuse;
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
}`,sm=`#define LAMBERT
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
}`,om=`#define LAMBERT
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
}`,am=`#define MATCAP
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
}`,lm=`#define MATCAP
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
}`,cm=`#define NORMAL
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
}`,hm=`#define NORMAL
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
}`,um=`#define PHONG
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
}`,dm=`#define PHONG
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
}`,fm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
}`,mm=`#define TOON
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
}`,gm=`#define TOON
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
}`,xm=`uniform float size;
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
}`,_m=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,vm=`uniform vec3 color;
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
}`,Mm=`uniform float rotation;
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
}`,bm=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Hd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:qd,alphatest_fragment:Yd,alphatest_pars_fragment:Zd,aomap_fragment:Jd,aomap_pars_fragment:$d,batching_pars_vertex:Kd,batching_vertex:jd,begin_vertex:Qd,beginnormal_vertex:ef,bsdfs:tf,iridescence_fragment:nf,bumpmap_pars_fragment:rf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:of,clipping_planes_pars_vertex:af,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:hf,color_pars_vertex:uf,color_vertex:df,common:ff,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:xf,emissivemap_fragment:_f,emissivemap_pars_fragment:yf,colorspace_fragment:vf,colorspace_pars_fragment:Mf,envmap_fragment:bf,envmap_common_pars_fragment:Sf,envmap_pars_fragment:wf,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Ff,envmap_vertex:Ef,fog_vertex:Af,fog_pars_vertex:Cf,fog_fragment:Rf,fog_pars_fragment:If,gradientmap_pars_fragment:Pf,lightmap_pars_fragment:Df,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Uf,lights_pars_begin:Nf,lights_toon_fragment:zf,lights_toon_pars_fragment:Of,lights_phong_fragment:Bf,lights_phong_pars_fragment:kf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Hf,lights_fragment_maps:Wf,lights_fragment_end:Xf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:Yf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:Jf,map_fragment:$f,map_pars_fragment:Kf,map_particle_fragment:jf,map_particle_pars_fragment:Qf,metalnessmap_fragment:ep,metalnessmap_pars_fragment:tp,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:rp,morphtarget_pars_vertex:sp,morphtarget_vertex:op,normal_fragment_begin:ap,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:hp,normal_vertex:up,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:xp,packing:_p,premultiplied_alpha_fragment:yp,project_vertex:vp,dithering_fragment:Mp,dithering_pars_fragment:bp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ep,shadowmap_vertex:Ap,shadowmask_pars_fragment:Cp,skinbase_vertex:Rp,skinning_pars_vertex:Ip,skinning_vertex:Pp,skinnormal_vertex:Dp,specularmap_fragment:Lp,specularmap_pars_fragment:Up,tonemapping_fragment:Np,tonemapping_pars_fragment:Fp,transmission_fragment:zp,transmission_pars_fragment:Op,uv_pars_fragment:Bp,uv_pars_vertex:kp,uv_vertex:Vp,worldpos_vertex:Gp,background_vert:Hp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:qp,cube_vert:Yp,cube_frag:Zp,depth_vert:Jp,depth_frag:$p,distanceRGBA_vert:Kp,distanceRGBA_frag:jp,equirect_vert:Qp,equirect_frag:em,linedashed_vert:tm,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:rm,meshlambert_vert:sm,meshlambert_frag:om,meshmatcap_vert:am,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:hm,meshphong_vert:um,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:xm,points_frag:_m,shadow_vert:ym,shadow_frag:vm,sprite_vert:Mm,sprite_frag:bm},Me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Nn={basic:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Kt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Kt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Kt([Me.points,Me.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Kt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Kt([Me.common,Me.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Kt([Me.sprite,Me.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Kt([Me.common,Me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Kt([Me.lights,Me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Nn.physical={uniforms:Kt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Da={r:0,b:0,g:0},Wi=new wn,Sm=new xt;function wm(i,e,t,n,r,s,o){let a=new Je(0),c=s===!0?0:1,l,h,u=null,p=0,f=null;function x(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1,R=x(E);R===null?d(a,c):R&&R.isColor&&(d(R,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,y){let R=x(y);R&&(R.isCubeTexture||R.mapping===Es)?(h===void 0&&(h=new rt(new Wt(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Hi(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Wi.copy(y.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(Wi)),h.material.toneMapped=dt.getTransfer(R.colorSpace)!==Mt,(u!==R||p!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,p=R.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new rt(new fn(2,2),new an({name:"BackgroundMaterial",uniforms:Hi(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=dt.getTransfer(R.colorSpace)!==Mt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||p!==R.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=R,p=R.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,y){E.getRGB(Da,ql(i)),n.buffers.color.setClear(Da.r,Da.g,Da.b,y,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(a,c)},render:_,addToRenderList:g,dispose:b}}function Tm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null),s=r,o=!1;function a(S,A,N,k,F){let B=!1,W=u(k,N,A);s!==W&&(s=W,l(s.object)),B=f(S,k,N,F),B&&x(S,k,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(S,A,N,k),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,A,N){let k=N.wireframe===!0,F=n[S.id];F===void 0&&(F={},n[S.id]=F);let B=F[A.id];B===void 0&&(B={},F[A.id]=B);let W=B[k];return W===void 0&&(W=p(c()),B[k]=W),W}function p(S){let A=[],N=[],k=[];for(let F=0;F<t;F++)A[F]=0,N[F]=0,k[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,A,N,k){let F=s.attributes,B=A.attributes,W=0,$=N.getAttributes();for(let Y in $)if($[Y].location>=0){let se=F[Y],_e=B[Y];if(_e===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),se===void 0||se.attribute!==_e||_e&&se.data!==_e.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function x(S,A,N,k){let F={},B=A.attributes,W=0,$=N.getAttributes();for(let Y in $)if($[Y].location>=0){let se=B[Y];se===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));let _e={};_e.attribute=se,se&&se.data&&(_e.data=se.data),F[Y]=_e,W++}s.attributes=F,s.attributesNum=W,s.index=k}function _(){let S=s.newAttributes;for(let A=0,N=S.length;A<N;A++)S[A]=0}function g(S){d(S,0)}function d(S,A){let N=s.newAttributes,k=s.enabledAttributes,F=s.attributeDivisors;N[S]=1,k[S]===0&&(i.enableVertexAttribArray(S),k[S]=1),F[S]!==A&&(i.vertexAttribDivisor(S,A),F[S]=A)}function b(){let S=s.newAttributes,A=s.enabledAttributes;for(let N=0,k=A.length;N<k;N++)A[N]!==S[N]&&(i.disableVertexAttribArray(N),A[N]=0)}function E(S,A,N,k,F,B,W){W===!0?i.vertexAttribIPointer(S,A,N,F,B):i.vertexAttribPointer(S,A,N,k,F,B)}function y(S,A,N,k){_();let F=k.attributes,B=N.getAttributes(),W=A.defaultAttributeValues;for(let $ in B){let Y=B[$];if(Y.location>=0){let ie=F[$];if(ie===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){let se=ie.normalized,_e=ie.itemSize,Le=e.get(ie);if(Le===void 0)continue;let Fe=Le.buffer,tt=Le.type,Be=Le.bytesPerElement,J=tt===i.INT||tt===i.UNSIGNED_INT||ie.gpuType===$o;if(ie.isInterleavedBufferAttribute){let j=ie.data,me=j.stride,Ue=ie.offset;if(j.isInstancedInterleavedBuffer){for(let ue=0;ue<Y.locationSize;ue++)d(Y.location+ue,j.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ue=0;ue<Y.locationSize;ue++)g(Y.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let ue=0;ue<Y.locationSize;ue++)E(Y.location+ue,_e/Y.locationSize,tt,se,me*Be,(Ue+_e/Y.locationSize*ue)*Be,J)}else{if(ie.isInstancedBufferAttribute){for(let j=0;j<Y.locationSize;j++)d(Y.location+j,ie.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let j=0;j<Y.locationSize;j++)g(Y.location+j);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let j=0;j<Y.locationSize;j++)E(Y.location+j,_e/Y.locationSize,tt,se,_e*Be,_e/Y.locationSize*j*Be,J)}}else if(W!==void 0){let se=W[$];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(Y.location,se);break;case 3:i.vertexAttrib3fv(Y.location,se);break;case 4:i.vertexAttrib4fv(Y.location,se);break;default:i.vertexAttrib1fv(Y.location,se)}}}}b()}function R(){U();for(let S in n){let A=n[S];for(let N in A){let k=A[N];for(let F in k)h(k[F].object),delete k[F];delete A[N]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;let A=n[S.id];for(let N in A){let k=A[N];for(let F in k)h(k[F].object),delete k[F];delete A[N]}delete n[S.id]}function P(S){for(let A in n){let N=n[A];if(N[S.id]===void 0)continue;let k=N[S.id];for(let F in k)h(k[F].object),delete k[F];delete N[S.id]}}function U(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function Em(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];t.update(f,n,1)}function c(l,h,u,p){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<l.length;x++)o(l[x],h[x],p[x]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*p[_];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Am(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==xn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let U=P===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==En&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==An&&!U)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:R,maxSamples:C}}function Cm(i){let e=this,t=null,n=0,r=!1,s=!1,o=new In,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let f=u.length!==0||p||n!==0||r;return r=p,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,f){let x=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,d=i.get(u);if(!r||x===null||x.length===0||s&&!g)s?h(null):l();else{let b=s?0:n,E=b*4,y=d.clippingState||null;c.value=y,y=h(x,p,E,f);for(let R=0;R!==E;++R)y[R]=t[R];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,f,x){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,x!==!0||g===null){let d=f+_*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<d)&&(g=new Float32Array(d));for(let E=0,y=f;E!==_;++E,y+=4)o.copy(u[E]).applyMatrix4(b,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Rm(i){let e=new WeakMap;function t(o,a){return a===Yo?o.mapping=Vi:a===Zo&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Yo||a===Zo)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new bo(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var kr=4,kh=[.125,.215,.35,.446,.526,.582],Yi=20,$l=new Ts,Vh=new Je,Kl=null,jl=0,Ql=0,ec=!1,qi=(1+Math.sqrt(5))/2,Br=1/qi,Gh=[new V(-qi,Br,0),new V(qi,Br,0),new V(-Br,0,qi),new V(Br,0,qi),new V(0,qi,-Br),new V(0,qi,Br),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Im=new V,Na=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=Im}=s;Kl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kl,jl,Ql),this._renderer.xr.enabled=ec,e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Fr,format:xn,colorSpace:Ii,depthBuffer:!1},r=Hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pm(s)),this._blurMaterial=Dm(s,e,t)}return r}_compileMaterial(e){let t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,n,r,s){let c=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,f=u.toneMapping;u.getClearColor(Vh),u.toneMapping=Qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let _=new on({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new rt(new Wt,_),d=!1,b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,d=!0):(_.color.copy(Vh),d=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[E],s.y,s.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[E]));let R=this._cubeSize;La(r,y*R,E>2?R:0,R,R),u.setRenderTarget(r),d&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=p,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Vi||e.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;La(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,$l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Gh[(r-s-1)%Gh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new rt(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),_=s/x,g=isFinite(s)?1+Math.floor(h*_):Yi;g>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yi}`);let d=[],b=0;for(let P=0;P<Yi;++P){let U=P/_,w=Math.exp(-U*U/2);d.push(w),P===0?b+=w:P<g&&(b+=2*w)}for(let P=0;P<d.length;P++)d[P]=d[P]/b;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:E}=this;p.dTheta.value=x,p.mipInt.value=E-n;let y=this._sizeLods[r],R=3*y*(r>E-kr?r-E+kr:0),C=4*(this._cubeSize-y);La(t,R,C,3*y,2*y),c.setRenderTarget(t),c.render(u,$l)}};function Pm(i){let e=[],t=[],n=[],r=i,s=i-kr+1+kh.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-kr?c=kh[o-i+kr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,_=3,g=2,d=1,b=new Float32Array(_*x*f),E=new Float32Array(g*x*f),y=new Float32Array(d*x*f);for(let C=0;C<f;C++){let P=C%3*2/3-1,U=C>2?0:-1,w=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];b.set(w,_*x*C),E.set(p,g*x*C);let S=[C,C,C,C,C,C];y.set(S,d*x*C)}let R=new _t;R.setAttribute("position",new zt(b,_)),R.setAttribute("uv",new zt(E,g)),R.setAttribute("faceIndex",new zt(y,d)),e.push(R),r>kr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hh(i,e,t){let n=new Pn(i,e,t);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function La(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Dm(i,e,t){let n=new Float32Array(Yi),r=new V(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Wh(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Xh(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}function Lm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Yo||c===Zo,h=c===Vi||c===Gi;if(l||h){let u=e.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Na(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new Na(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Um(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&br("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Nm(i,e,t,n){let r={},s=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete r[p.id];let f=s.get(p);f&&(e.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(u){let p=u.attributes;for(let f in p)e.update(p[f],i.ARRAY_BUFFER)}function l(u){let p=[],f=u.index,x=u.attributes.position,_=0;if(f!==null){let b=f.array;_=f.version;for(let E=0,y=b.length;E<y;E+=3){let R=b[E+0],C=b[E+1],P=b[E+2];p.push(R,C,C,P,P,R)}}else if(x!==void 0){let b=x.array;_=x.version;for(let E=0,y=b.length/3-1;E<y;E+=3){let R=E+0,C=E+1,P=E+2;p.push(R,C,C,P,P,R)}}else return;let g=new(Xl(p)?ps:fs)(p,1);g.version=_;let d=s.get(u);d&&e.remove(d),s.set(u,g)}function h(u){let p=s.get(u);if(p){let f=u.index;f!==null&&p.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Fm(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,f){i.drawElements(n,f,s,p*o),t.update(f,n,1)}function l(p,f,x){x!==0&&(i.drawElementsInstanced(n,f,s,p*o,x),t.update(f,n,x))}function h(p,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,x);let g=0;for(let d=0;d<x;d++)g+=f[d];t.update(g,n,1)}function u(p,f,x,_){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<p.length;d++)l(p[d]/o,f[d],_[d]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,_,0,x);let d=0;for(let b=0;b<x;b++)d+=f[b]*_[b];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Om(i,e,t){let n=new WeakMap,r=new ft;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==u){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;f===!0&&(E=1),x===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*R*4*u),P=new ds(C,y,R,u);P.type=An,P.needsUpdate=!0;let U=E*4;for(let S=0;S<u;S++){let A=g[S],N=d[S],k=b[S],F=y*R*4*S;for(let B=0;B<A.count;B++){let W=B*U;f===!0&&(r.fromBufferAttribute(A,B),C[F+W+0]=r.x,C[F+W+1]=r.y,C[F+W+2]=r.z,C[F+W+3]=0),x===!0&&(r.fromBufferAttribute(N,B),C[F+W+4]=r.x,C[F+W+5]=r.y,C[F+W+6]=r.z,C[F+W+7]=0),_===!0&&(r.fromBufferAttribute(k,B),C[F+W+8]=r.x,C[F+W+9]=r.y,C[F+W+10]=r.z,C[F+W+11]=k.itemSize===4?r.w:1)}}p={count:u,texture:P,size:new Ve(y,R)},n.set(a,p),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let x=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Bm(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var hu=new $t,qh=new ys(1,1),uu=new ds,du=new vo,fu=new gs,Yh=[],Zh=[],Jh=new Float32Array(16),$h=new Float32Array(9),Kh=new Float32Array(4);function Hr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Yh[r];if(s===void 0&&(s=new Float32Array(r),Yh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fa(i,e){let t=Zh[e];t===void 0&&(t=new Int32Array(e),Zh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function Wm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;Kh.set(n),i.uniformMatrix2fv(this.addr,!1,Kh),Bt(t,n)}}function Xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),Bt(t,n)}}function qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;Jh.set(n),i.uniformMatrix4fv(this.addr,!1,Jh),Bt(t,n)}}function Ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function Km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function tg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(qh.compareFunction=Gl,s=qh):s=hu,t.setTexture2D(e||s,r)}function ng(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||du,r)}function ig(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fu,r)}function rg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||uu,r)}function sg(i){switch(i){case 5126:return km;case 35664:return Vm;case 35665:return Gm;case 35666:return Hm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return $m;case 5125:return Km;case 36294:return jm;case 36295:return Qm;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return rg}}function og(i,e){i.uniform1fv(this.addr,e)}function ag(i,e){let t=Hr(e,this.size,2);i.uniform2fv(this.addr,t)}function lg(i,e){let t=Hr(e,this.size,3);i.uniform3fv(this.addr,t)}function cg(i,e){let t=Hr(e,this.size,4);i.uniform4fv(this.addr,t)}function hg(i,e){let t=Hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ug(i,e){let t=Hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dg(i,e){let t=Hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fg(i,e){i.uniform1iv(this.addr,e)}function pg(i,e){i.uniform2iv(this.addr,e)}function mg(i,e){i.uniform3iv(this.addr,e)}function gg(i,e){i.uniform4iv(this.addr,e)}function xg(i,e){i.uniform1uiv(this.addr,e)}function _g(i,e){i.uniform2uiv(this.addr,e)}function yg(i,e){i.uniform3uiv(this.addr,e)}function vg(i,e){i.uniform4uiv(this.addr,e)}function Mg(i,e,t){let n=this.cache,r=e.length,s=Fa(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||hu,s[o])}function bg(i,e,t){let n=this.cache,r=e.length,s=Fa(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||du,s[o])}function Sg(i,e,t){let n=this.cache,r=e.length,s=Fa(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||fu,s[o])}function wg(i,e,t){let n=this.cache,r=e.length,s=Fa(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||uu,s[o])}function Tg(i){switch(i){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return xg;case 36294:return _g;case 36295:return yg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return wg}}var nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sg(t.type)}},ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tg(t.type)}},rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},tc=/(\w+)(\])?(\[|\.)?/g;function jh(i,e){i.seq.push(e),i.map[e.id]=e}function Eg(i,e,t){let n=i.name,r=n.length;for(tc.lastIndex=0;;){let s=tc.exec(n),o=tc.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){jh(t,l===void 0?new nc(a,i,e):new ic(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new rc(a),jh(t,u)),t=u}}}var Vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Eg(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Qh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ag=37297,Cg=0;function Rg(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var eu=new it;function Ig(i){dt._getMatrix(eu,dt.workingColorSpace,i);let e=`mat3( ${eu.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case hs:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Rg(i.getShaderSource(e),a)}else return s}function Pg(i,e){let t=Ig(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dg(i,e){let t;switch(e){case _h:t="Linear";break;case yh:t="Reinhard";break;case vh:t="Cineon";break;case Ur:t="ACESFilmic";break;case bh:t="AgX";break;case Sh:t="Neutral";break;case Mh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ua=new V;function Lg(){dt.getLuminanceCoefficients(Ua);let i=Ua.x.toFixed(4),e=Ua.y.toFixed(4),t=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function Ng(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ls(i){return i!==""}function nu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(zg,Bg)}var Og=new Map;function Bg(i,e){let t=st[e];if(t===void 0){let n=Og.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sc(t)}var kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(i){return i.replace(kg,Vg)}function Vg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function su(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Gg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function Hg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Gi:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function Xg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dl:e="ENVMAP_BLENDING_MULTIPLY";break;case gh:e="ENVMAP_BLENDING_MIX";break;case xh:e="ENVMAP_BLENDING_ADD";break}return e}function qg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Yg(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Gg(t),l=Hg(t),h=Wg(t),u=Xg(t),p=qg(t),f=Ug(t),x=Ng(s),_=r.createProgram(),g,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ls).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ls).join(`
`),d.length>0&&(d+=`
`)):(g=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),d=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?st.tonemapping_pars_fragment:"",t.toneMapping!==Qn?Dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Pg("linearToOutputTexel",t.outputColorSpace),Lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),o=sc(o),o=nu(o,t),o=iu(o,t),a=sc(a),a=nu(a,t),a=iu(a,t),o=ru(o),a=ru(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=b+g+o,y=b+d+a,R=Qh(r,r.VERTEX_SHADER,E),C=Qh(r,r.FRAGMENT_SHADER,y);r.attachShader(_,R),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(A){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(R)||"",F=r.getShaderInfoLog(C)||"",B=N.trim(),W=k.trim(),$=F.trim(),Y=!0,ie=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,C);else{let se=tu(r,R,"vertex"),_e=tu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+se+`
`+_e)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(W===""||$==="")&&(ie=!1);ie&&(A.diagnostics={runnable:Y,programLog:B,vertexShader:{log:W,prefix:g},fragmentShader:{log:$,prefix:d}})}r.deleteShader(R),r.deleteShader(C),U=new Vr(r,_),w=Fg(r,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Ag)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}var Zg=0,oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ac(e),t.set(e,n)),n}},ac=class{constructor(e){this.id=Zg++,this.code=e,this.usedTimes=0}};function Jg(i,e,t,n,r,s,o){let a=new Tr,c=new oc,l=new Set,h=[],u=r.logarithmicDepthBuffer,p=r.vertexTextures,f=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,S,A,N,k){let F=N.fog,B=k.geometry,W=w.isMeshStandardMaterial?N.environment:null,$=(w.isMeshStandardMaterial?t:e).get(w.envMap||W),Y=$&&$.mapping===Es?$.image.height:null,ie=x[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_e=se!==void 0?se.length:0,Le=0;B.morphAttributes.position!==void 0&&(Le=1),B.morphAttributes.normal!==void 0&&(Le=2),B.morphAttributes.color!==void 0&&(Le=3);let Fe,tt,Be,J;if(ie){let je=Nn[ie];Fe=je.vertexShader,tt=je.fragmentShader}else Fe=w.vertexShader,tt=w.fragmentShader,c.update(w),Be=c.getVertexShaderID(w),J=c.getFragmentShaderID(w);let j=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,ue=k.isBatchedMesh===!0,Ge=!!w.map,lt=!!w.matcap,z=!!$,ut=!!w.aoMap,Ye=!!w.lightMap,He=!!w.bumpMap,Re=!!w.normalMap,ot=!!w.displacementMap,Ee=!!w.emissiveMap,Xe=!!w.metalnessMap,St=!!w.roughnessMap,nt=w.anisotropy>0,I=w.clearcoat>0,v=w.dispersion>0,Z=w.iridescence>0,ee=w.sheen>0,oe=w.transmission>0,Q=nt&&!!w.anisotropyMap,De=I&&!!w.clearcoatMap,pe=I&&!!w.clearcoatNormalMap,Ae=I&&!!w.clearcoatRoughnessMap,be=Z&&!!w.iridescenceMap,ce=Z&&!!w.iridescenceThicknessMap,ye=ee&&!!w.sheenColorMap,We=ee&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,ve=!!w.specularColorMap,Ze=!!w.specularIntensityMap,H=oe&&!!w.transmissionMap,he=oe&&!!w.thicknessMap,ge=!!w.gradientMap,Pe=!!w.alphaMap,fe=w.alphaTest>0,re=!!w.alphaHash,Ie=!!w.extensions,$e=Qn;w.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&($e=i.toneMapping);let pt={shaderID:ie,shaderType:w.type,shaderName:w.name,vertexShader:Fe,fragmentShader:tt,defines:w.defines,customVertexShaderID:Be,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ue,batchingColor:ue&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ii,alphaToCoverage:!!w.alphaToCoverage,map:Ge,matcap:lt,envMap:z,envMapMode:z&&$.mapping,envMapCubeUVHeight:Y,aoMap:ut,lightMap:Ye,bumpMap:He,normalMap:Re,displacementMap:p&&ot,emissiveMap:Ee,normalMapObjectSpace:Re&&w.normalMapType===Ah,normalMapTangentSpace:Re&&w.normalMapType===Vl,metalnessMap:Xe,roughnessMap:St,anisotropy:nt,anisotropyMap:Q,clearcoat:I,clearcoatMap:De,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ae,dispersion:v,iridescence:Z,iridescenceMap:be,iridescenceThicknessMap:ce,sheen:ee,sheenColorMap:ye,sheenRoughnessMap:We,specularMap:Ne,specularColorMap:ve,specularIntensityMap:Ze,transmission:oe,transmissionMap:H,thicknessMap:he,gradientMap:ge,opaque:w.transparent===!1&&w.blending===Ci&&w.alphaToCoverage===!1,alphaMap:Pe,alphaTest:fe,alphaHash:re,combine:w.combine,mapUv:Ge&&_(w.map.channel),aoMapUv:ut&&_(w.aoMap.channel),lightMapUv:Ye&&_(w.lightMap.channel),bumpMapUv:He&&_(w.bumpMap.channel),normalMapUv:Re&&_(w.normalMap.channel),displacementMapUv:ot&&_(w.displacementMap.channel),emissiveMapUv:Ee&&_(w.emissiveMap.channel),metalnessMapUv:Xe&&_(w.metalnessMap.channel),roughnessMapUv:St&&_(w.roughnessMap.channel),anisotropyMapUv:Q&&_(w.anisotropyMap.channel),clearcoatMapUv:De&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(w.sheenRoughnessMap.channel),specularMapUv:Ne&&_(w.specularMap.channel),specularColorMapUv:ve&&_(w.specularColorMap.channel),specularIntensityMapUv:Ze&&_(w.specularIntensityMap.channel),transmissionMapUv:H&&_(w.transmissionMap.channel),thicknessMapUv:he&&_(w.thicknessMap.channel),alphaMapUv:Pe&&_(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Re||nt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(Ge||Pe),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ge&&w.map.isVideoTexture===!0&&dt.getTransfer(w.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ee&&w.emissiveMap.isVideoTexture===!0&&dt.getTransfer(w.emissiveMap.colorSpace)===Mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===At,flipSided:w.side===Xt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ie&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&w.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function d(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let A in w.defines)S.push(A),S.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(b(S,w),E(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function b(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function E(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let S=x[w.type],A;if(S){let N=Nn[S];A=Pa.clone(N.uniforms)}else A=w.uniforms;return A}function R(w,S){let A;for(let N=0,k=h.length;N<k;N++){let F=h[N];if(F.cacheKey===S){A=F,++A.usedTimes;break}}return A===void 0&&(A=new Yg(i,S,w,s),h.push(A)),A}function C(w){if(--w.usedTimes===0){let S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function P(w){c.remove(w)}function U(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:U}}function $g(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ou(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function au(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,p,f,x,_,g){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:x,renderOrder:u.renderOrder,z:_,group:g},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=_,d.group=g),e++,d}function a(u,p,f,x,_,g){let d=o(u,p,f,x,_,g);f.transmission>0?n.push(d):f.transparent===!0?r.push(d):t.push(d)}function c(u,p,f,x,_,g){let d=o(u,p,f,x,_,g);f.transmission>0?n.unshift(d):f.transparent===!0?r.unshift(d):t.unshift(d)}function l(u,p){t.length>1&&t.sort(u||Kg),n.length>1&&n.sort(p||ou),r.length>1&&r.sort(p||ou)}function h(){for(let u=e,p=i.length;u<p;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function jg(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new au,i.set(n,[o])):r>=s.length?(o=new au,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Je};break;case"SpotLight":t={position:new V,direction:new V,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function e0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var t0=0;function n0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i0(i){let e=new Qg,t=e0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let r=new V,s=new xt,o=new xt;function a(l){let h=0,u=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,x=0,_=0,g=0,d=0,b=0,E=0,y=0,R=0,C=0,P=0;l.sort(n0);for(let w=0,S=l.length;w<S;w++){let A=l[w],N=A.color,k=A.intensity,F=A.distance,B=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=N.r*k,u+=N.g*k,p+=N.b*k;else if(A.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(A.sh.coefficients[W],k);P++}else if(A.isDirectionalLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let $=A.shadow,Y=t.get(A);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=A.shadow.matrix,b++}n.directional[f]=W,f++}else if(A.isSpotLight){let W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(N).multiplyScalar(k),W.distance=F,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,n.spot[_]=W;let $=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,$.updateMatrices(A),A.castShadow&&C++),n.spotLightMatrix[_]=$.matrix,A.castShadow){let Y=t.get(A);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=B,y++}_++}else if(A.isRectAreaLight){let W=e.get(A);W.color.copy(N).multiplyScalar(k),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=W,g++}else if(A.isPointLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){let $=A.shadow,Y=t.get(A);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,n.pointShadow[x]=Y,n.pointShadowMap[x]=B,n.pointShadowMatrix[x]=A.shadow.matrix,E++}n.point[x]=W,x++}else if(A.isHemisphereLight){let W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(k),W.groundColor.copy(A.groundColor).multiplyScalar(k),n.hemi[d]=W,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let U=n.hash;(U.directionalLength!==f||U.pointLength!==x||U.spotLength!==_||U.rectAreaLength!==g||U.hemiLength!==d||U.numDirectionalShadows!==b||U.numPointShadows!==E||U.numSpotShadows!==y||U.numSpotMaps!==R||U.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,U.directionalLength=f,U.pointLength=x,U.spotLength=_,U.rectAreaLength=g,U.hemiLength=d,U.numDirectionalShadows=b,U.numPointShadows=E,U.numSpotShadows=y,U.numSpotMaps=R,U.numLightProbes=P,n.version=t0++)}function c(l,h){let u=0,p=0,f=0,x=0,_=0,g=h.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){let E=l[d];if(E.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),u++}else if(E.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(E.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(E.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),p++}else if(E.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function lu(i){let e=new i0(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function r0(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new lu(i),e.set(r,[a])):s>=o.length?(a=new lu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o0=`uniform sampler2D shadow_pass;
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
}`;function a0(i,e,t){let n=new Ir,r=new Ve,s=new Ve,o=new ft,a=new Ao({depthPacking:Eh}),c=new Co,l={},h=t.maxTextureSize,u={[Yn]:Xt,[Xt]:Yn,[At]:At},p=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:s0,fragmentShader:o0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let x=new _t;x.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new rt(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let d=this.type;this.render=function(C,P,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),N=i.state;N.setBlending(jn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=d!==Un&&this.type===Un,F=d===Un&&this.type!==Un;for(let B=0,W=C.length;B<W;B++){let $=C[B],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);let ie=Y.getFrameExtents();if(r.multiply(ie),s.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,Y.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,Y.mapSize.y=s.y)),Y.map===null||k===!0||F===!0){let _e=this.type!==Un?{minFilter:sn,magFilter:sn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Pn(r.x,r.y,_e),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let se=Y.getViewportCount();for(let _e=0;_e<se;_e++){let Le=Y.getViewport(_e);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),N.viewport(o),Y.updateMatrices($,_e),n=Y.getFrustum(),y(P,U,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Un&&b(Y,U),Y.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(w,S,A)};function b(C,P){let U=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pn(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,U,p,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,U,f,_,null)}function E(C,P,U,w){let S=null,A=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)S=A;else if(S=U.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let N=S.uuid,k=P.uuid,F=l[N];F===void 0&&(F={},l[N]=F);let B=F[k];B===void 0&&(B=S.clone(),F[k]=B,P.addEventListener("dispose",R)),S=B}if(S.visible=P.visible,S.wireframe=P.wireframe,w===Un?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:u[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=i.properties.get(S);N.light=U}return S}function y(C,P,U,w,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Un)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let k=e.update(C),F=C.material;if(Array.isArray(F)){let B=k.groups;for(let W=0,$=B.length;W<$;W++){let Y=B[W],ie=F[Y.materialIndex];if(ie&&ie.visible){let se=E(C,ie,w,S);C.onBeforeShadow(i,C,P,U,k,se,Y),i.renderBufferDirect(U,null,k,se,C,Y),C.onAfterShadow(i,C,P,U,k,se,Y)}}}else if(F.visible){let B=E(C,F,w,S);C.onBeforeShadow(i,C,P,U,k,B,null),i.renderBufferDirect(U,null,k,B,C,null),C.onAfterShadow(i,C,P,U,k,B,null)}}let N=C.children;for(let k=0,F=N.length;k<F;k++)y(N[k],P,U,w,S)}function R(C){C.target.removeEventListener("dispose",R);for(let U in l){let w=l[U],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var l0={[ko]:Vo,[Go]:Xo,[Ho]:qo,[Ri]:Wo,[Vo]:ko,[Xo]:Go,[qo]:Ho,[Wo]:Ri};function c0(i,e){function t(){let H=!1,he=new ft,ge=null,Pe=new ft(0,0,0,0);return{setMask:function(fe){ge!==fe&&!H&&(i.colorMask(fe,fe,fe,fe),ge=fe)},setLocked:function(fe){H=fe},setClear:function(fe,re,Ie,$e,pt){pt===!0&&(fe*=$e,re*=$e,Ie*=$e),he.set(fe,re,Ie,$e),Pe.equals(he)===!1&&(i.clearColor(fe,re,Ie,$e),Pe.copy(he))},reset:function(){H=!1,ge=null,Pe.set(-1,0,0,0)}}}function n(){let H=!1,he=!1,ge=null,Pe=null,fe=null;return{setReversed:function(re){if(he!==re){let Ie=e.get("EXT_clip_control");re?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),he=re;let $e=fe;fe=null,this.setClear($e)}},getReversed:function(){return he},setTest:function(re){re?j(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(re){ge!==re&&!H&&(i.depthMask(re),ge=re)},setFunc:function(re){if(he&&(re=l0[re]),Pe!==re){switch(re){case ko:i.depthFunc(i.NEVER);break;case Vo:i.depthFunc(i.ALWAYS);break;case Go:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Wo:i.depthFunc(i.GEQUAL);break;case Xo:i.depthFunc(i.GREATER);break;case qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=re}},setLocked:function(re){H=re},setClear:function(re){fe!==re&&(he&&(re=1-re),i.clearDepth(re),fe=re)},reset:function(){H=!1,ge=null,Pe=null,fe=null,he=!1}}}function r(){let H=!1,he=null,ge=null,Pe=null,fe=null,re=null,Ie=null,$e=null,pt=null;return{setTest:function(je){H||(je?j(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(je){he!==je&&!H&&(i.stencilMask(je),he=je)},setFunc:function(je,Ut,Nt){(ge!==je||Pe!==Ut||fe!==Nt)&&(i.stencilFunc(je,Ut,Nt),ge=je,Pe=Ut,fe=Nt)},setOp:function(je,Ut,Nt){(re!==je||Ie!==Ut||$e!==Nt)&&(i.stencilOp(je,Ut,Nt),re=je,Ie=Ut,$e=Nt)},setLocked:function(je){H=je},setClear:function(je){pt!==je&&(i.clearStencil(je),pt=je)},reset:function(){H=!1,he=null,ge=null,Pe=null,fe=null,re=null,Ie=null,$e=null,pt=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,h={},u={},p=new WeakMap,f=[],x=null,_=!1,g=null,d=null,b=null,E=null,y=null,R=null,C=null,P=new Je(0,0,0),U=0,w=!1,S=null,A=null,N=null,k=null,F=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,$=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=$>=2);let ie=null,se={},_e=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Fe=new ft().fromArray(_e),tt=new ft().fromArray(Le);function Be(H,he,ge,Pe){let fe=new Uint8Array(4),re=i.createTexture();i.bindTexture(H,re),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<ge;Ie++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(he+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return re}let J={};J[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Ri),He(!1),Re(Al),j(i.CULL_FACE),ut(jn);function j(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function me(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Ue(H,he){return u[H]!==he?(i.bindFramebuffer(H,he),u[H]=he,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ue(H,he){let ge=f,Pe=!1;if(H){ge=p.get(he),ge===void 0&&(ge=[],p.set(he,ge));let fe=H.textures;if(ge.length!==fe.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ie=fe.length;re<Ie;re++)ge[re]=i.COLOR_ATTACHMENT0+re;ge.length=fe.length,Pe=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(ge)}function Ge(H){return x!==H?(i.useProgram(H),x=H,!0):!1}let lt={[hi]:i.FUNC_ADD,[Qc]:i.FUNC_SUBTRACT,[eh]:i.FUNC_REVERSE_SUBTRACT};lt[th]=i.MIN,lt[nh]=i.MAX;let z={[ih]:i.ZERO,[rh]:i.ONE,[sh]:i.SRC_COLOR,[fo]:i.SRC_ALPHA,[uh]:i.SRC_ALPHA_SATURATE,[ch]:i.DST_COLOR,[ah]:i.DST_ALPHA,[oh]:i.ONE_MINUS_SRC_COLOR,[po]:i.ONE_MINUS_SRC_ALPHA,[hh]:i.ONE_MINUS_DST_COLOR,[lh]:i.ONE_MINUS_DST_ALPHA,[dh]:i.CONSTANT_COLOR,[fh]:i.ONE_MINUS_CONSTANT_COLOR,[ph]:i.CONSTANT_ALPHA,[mh]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(H,he,ge,Pe,fe,re,Ie,$e,pt,je){if(H===jn){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),H!==jc){if(H!==g||je!==w){if((d!==hi||y!==hi)&&(i.blendEquation(i.FUNC_ADD),d=hi,y=hi),je)switch(H){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFunc(i.ONE,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Il:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,E=null,R=null,C=null,P.set(0,0,0),U=0,g=H,w=je}return}fe=fe||he,re=re||ge,Ie=Ie||Pe,(he!==d||fe!==y)&&(i.blendEquationSeparate(lt[he],lt[fe]),d=he,y=fe),(ge!==b||Pe!==E||re!==R||Ie!==C)&&(i.blendFuncSeparate(z[ge],z[Pe],z[re],z[Ie]),b=ge,E=Pe,R=re,C=Ie),($e.equals(P)===!1||pt!==U)&&(i.blendColor($e.r,$e.g,$e.b,pt),P.copy($e),U=pt),g=H,w=!1}function Ye(H,he){H.side===At?me(i.CULL_FACE):j(i.CULL_FACE);let ge=H.side===Xt;he&&(ge=!ge),He(ge),H.blending===Ci&&H.transparent===!1?ut(jn):ut(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);let Pe=H.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ee(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(H){S!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),S=H)}function Re(H){H!==$c?(j(i.CULL_FACE),H!==A&&(H===Al?i.cullFace(i.BACK):H===Kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),A=H}function ot(H){H!==N&&(W&&i.lineWidth(H),N=H)}function Ee(H,he,ge){H?(j(i.POLYGON_OFFSET_FILL),(k!==he||F!==ge)&&(i.polygonOffset(he,ge),k=he,F=ge)):me(i.POLYGON_OFFSET_FILL)}function Xe(H){H?j(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function St(H){H===void 0&&(H=i.TEXTURE0+B-1),ie!==H&&(i.activeTexture(H),ie=H)}function nt(H,he,ge){ge===void 0&&(ie===null?ge=i.TEXTURE0+B-1:ge=ie);let Pe=se[ge];Pe===void 0&&(Pe={type:void 0,texture:void 0},se[ge]=Pe),(Pe.type!==H||Pe.texture!==he)&&(ie!==ge&&(i.activeTexture(ge),ie=ge),i.bindTexture(H,he||J[H]),Pe.type=H,Pe.texture=he)}function I(){let H=se[ie];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{i.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{i.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{i.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{i.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{i.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{i.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(H){Fe.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Fe.copy(H))}function We(H){tt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),tt.copy(H))}function Ne(H,he){let ge=l.get(he);ge===void 0&&(ge=new WeakMap,l.set(he,ge));let Pe=ge.get(H);Pe===void 0&&(Pe=i.getUniformBlockIndex(he,H.name),ge.set(H,Pe))}function ve(H,he){let Pe=l.get(he).get(H);c.get(he)!==Pe&&(i.uniformBlockBinding(he,Pe,H.__bindingPointIndex),c.set(he,Pe))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ie=null,se={},u={},p=new WeakMap,f=[],x=null,_=!1,g=null,d=null,b=null,E=null,y=null,R=null,C=null,P=new Je(0,0,0),U=0,w=!1,S=null,A=null,N=null,k=null,F=null,Fe.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:me,bindFramebuffer:Ue,drawBuffers:ue,useProgram:Ge,setBlending:ut,setMaterial:Ye,setFlipSided:He,setCullFace:Re,setLineWidth:ot,setPolygonOffset:Ee,setScissorTest:Xe,activeTexture:St,bindTexture:nt,unbindTexture:I,compressedTexImage2D:v,compressedTexImage3D:Z,texImage2D:be,texImage3D:ce,updateUBOMapping:Ne,uniformBlockBinding:ve,texStorage2D:pe,texStorage3D:Ae,texSubImage2D:ee,texSubImage3D:oe,compressedTexSubImage2D:Q,compressedTexSubImage3D:De,scissor:ye,viewport:We,reset:Ze}}function h0(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,h=new WeakMap,u,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,v){return f?new OffscreenCanvas(I,v):Mr("canvas")}function _(I,v,Z){let ee=1,oe=nt(I);if((oe.width>Z||oe.height>Z)&&(ee=Z/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Q=Math.floor(ee*oe.width),De=Math.floor(ee*oe.height);u===void 0&&(u=x(Q,De));let pe=v?x(Q,De):u;return pe.width=Q,pe.height=De,pe.getContext("2d").drawImage(I,0,0,Q,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Q+"x"+De+")."),pe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function g(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(I,v,Z,ee,oe=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=v;if(v===i.RED&&(Z===i.FLOAT&&(Q=i.R32F),Z===i.HALF_FLOAT&&(Q=i.R16F),Z===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.R8UI),Z===i.UNSIGNED_SHORT&&(Q=i.R16UI),Z===i.UNSIGNED_INT&&(Q=i.R32UI),Z===i.BYTE&&(Q=i.R8I),Z===i.SHORT&&(Q=i.R16I),Z===i.INT&&(Q=i.R32I)),v===i.RG&&(Z===i.FLOAT&&(Q=i.RG32F),Z===i.HALF_FLOAT&&(Q=i.RG16F),Z===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),Z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),Z===i.UNSIGNED_INT&&(Q=i.RG32UI),Z===i.BYTE&&(Q=i.RG8I),Z===i.SHORT&&(Q=i.RG16I),Z===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),Z===i.UNSIGNED_INT&&(Q=i.RGB32UI),Z===i.BYTE&&(Q=i.RGB8I),Z===i.SHORT&&(Q=i.RGB16I),Z===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),Z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),Z===i.BYTE&&(Q=i.RGBA8I),Z===i.SHORT&&(Q=i.RGBA16I),Z===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&(Z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),v===i.RGBA){let De=oe?hs:dt.getTransfer(ee);Z===i.FLOAT&&(Q=i.RGBA32F),Z===i.HALF_FLOAT&&(Q=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(Q=De===Mt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(I,v){let Z;return I?v===null||v===gi||v===zr?Z=i.DEPTH24_STENCIL8:v===An?Z=i.DEPTH32F_STENCIL8:v===Nr&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===gi||v===zr?Z=i.DEPTH_COMPONENT24:v===An?Z=i.DEPTH_COMPONENT32F:v===Nr&&(Z=i.DEPTH_COMPONENT16),Z}function R(I,v){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==sn&&I.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function C(I){let v=I.target;v.removeEventListener("dispose",C),U(v),v.isVideoTexture&&h.delete(v)}function P(I){let v=I.target;v.removeEventListener("dispose",P),S(v)}function U(I){let v=n.get(I);if(v.__webglInit===void 0)return;let Z=I.source,ee=p.get(Z);if(ee){let oe=ee[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&w(I),Object.keys(ee).length===0&&p.delete(Z)}n.remove(I)}function w(I){let v=n.get(I);i.deleteTexture(v.__webglTexture);let Z=I.source,ee=p.get(Z);delete ee[v.__cacheKey],o.memory.textures--}function S(I){let v=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(v.__webglFramebuffer[ee]))for(let oe=0;oe<v.__webglFramebuffer[ee].length;oe++)i.deleteFramebuffer(v.__webglFramebuffer[ee][oe]);else i.deleteFramebuffer(v.__webglFramebuffer[ee]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ee])}else{if(Array.isArray(v.__webglFramebuffer))for(let ee=0;ee<v.__webglFramebuffer.length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[ee]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ee=0;ee<v.__webglColorRenderbuffer.length;ee++)v.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ee]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Z=I.textures;for(let ee=0,oe=Z.length;ee<oe;ee++){let Q=n.get(Z[ee]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(Z[ee])}n.remove(I)}let A=0;function N(){A=0}function k(){let I=A;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),A+=1,I}function F(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function B(I,v){let Z=n.get(I);if(I.isVideoTexture&&Xe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){let ee=I.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Z,I,v);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+v)}function W(I,v){let Z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){J(Z,I,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+v)}function $(I,v){let Z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){J(Z,I,v);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+v)}function Y(I,v){let Z=n.get(I);if(I.version>0&&Z.__version!==I.version){j(Z,I,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+v)}let ie={[_r]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[mo]:i.MIRRORED_REPEAT},se={[sn]:i.NEAREST,[wh]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},_e={[Ch]:i.NEVER,[Uh]:i.ALWAYS,[Rh]:i.LESS,[Gl]:i.LEQUAL,[Ih]:i.EQUAL,[Lh]:i.GEQUAL,[Ph]:i.GREATER,[Dh]:i.NOTEQUAL};function Le(I,v){if(v.type===An&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===Jo||v.magFilter===As||v.magFilter===mi||v.minFilter===Sn||v.minFilter===Jo||v.minFilter===As||v.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ie[v.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ie[v.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ie[v.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,se[v.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,se[v.minFilter]),v.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,_e[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===sn||v.minFilter!==As&&v.minFilter!==mi||v.type===An&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Fe(I,v){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",C));let ee=v.source,oe=p.get(ee);oe===void 0&&(oe={},p.set(ee,oe));let Q=F(v);if(Q!==I.__cacheKey){oe[Q]===void 0&&(oe[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),oe[Q].usedTimes++;let De=oe[I.__cacheKey];De!==void 0&&(oe[I.__cacheKey].usedTimes--,De.usedTimes===0&&w(v)),I.__cacheKey=Q,I.__webglTexture=oe[Q].texture}return Z}function tt(I,v,Z){return Math.floor(Math.floor(I/Z)/v)}function Be(I,v,Z,ee){let Q=I.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,Z,ee,v.data);else{Q.sort((ce,ye)=>ce.start-ye.start);let De=0;for(let ce=1;ce<Q.length;ce++){let ye=Q[De],We=Q[ce],Ne=ye.start+ye.count,ve=tt(We.start,v.width,4),Ze=tt(ye.start,v.width,4);We.start<=Ne+1&&ve===Ze&&tt(We.start+We.count-1,v.width,4)===ve?ye.count=Math.max(ye.count,We.start+We.count-ye.start):(++De,Q[De]=We)}Q.length=De+1;let pe=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ce=0,ye=Q.length;ce<ye;ce++){let We=Q[ce],Ne=Math.floor(We.start/4),ve=Math.ceil(We.count/4),Ze=Ne%v.width,H=Math.floor(Ne/v.width),he=ve,ge=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,Ze,H,he,ge,Z,ee,v.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function J(I,v,Z){let ee=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=i.TEXTURE_3D);let oe=Fe(I,v),Q=v.source;t.bindTexture(ee,I.__webglTexture,i.TEXTURE0+Z);let De=n.get(Q);if(Q.version!==De.__version||oe===!0){t.activeTexture(i.TEXTURE0+Z);let pe=dt.getPrimaries(dt.workingColorSpace),Ae=v.colorSpace===Cn?null:dt.getPrimaries(v.colorSpace),be=v.colorSpace===Cn||pe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ce=_(v.image,!1,r.maxTextureSize);ce=St(v,ce);let ye=s.convert(v.format,v.colorSpace),We=s.convert(v.type),Ne=E(v.internalFormat,ye,We,v.colorSpace,v.isVideoTexture);Le(ee,v);let ve,Ze=v.mipmaps,H=v.isVideoTexture!==!0,he=De.__version===void 0||oe===!0,ge=Q.dataReady,Pe=R(v,ce);if(v.isDepthTexture)Ne=y(v.format===Or,v.type),he&&(H?t.texStorage2D(i.TEXTURE_2D,1,Ne,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Ne,ce.width,ce.height,0,ye,We,null));else if(v.isDataTexture)if(Ze.length>0){H&&he&&t.texStorage2D(i.TEXTURE_2D,Pe,Ne,Ze[0].width,Ze[0].height);for(let fe=0,re=Ze.length;fe<re;fe++)ve=Ze[fe],H?ge&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ve.width,ve.height,ye,We,ve.data):t.texImage2D(i.TEXTURE_2D,fe,Ne,ve.width,ve.height,0,ye,We,ve.data);v.generateMipmaps=!1}else H?(he&&t.texStorage2D(i.TEXTURE_2D,Pe,Ne,ce.width,ce.height),ge&&Be(v,ce,ye,We)):t.texImage2D(i.TEXTURE_2D,0,Ne,ce.width,ce.height,0,ye,We,ce.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){H&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Ne,Ze[0].width,Ze[0].height,ce.depth);for(let fe=0,re=Ze.length;fe<re;fe++)if(ve=Ze[fe],v.format!==xn)if(ye!==null)if(H){if(ge)if(v.layerUpdates.size>0){let Ie=Jl(ve.width,ve.height,v.format,v.type);for(let $e of v.layerUpdates){let pt=ve.data.subarray($e*Ie/ve.data.BYTES_PER_ELEMENT,($e+1)*Ie/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,$e,ve.width,ve.height,1,ye,pt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,ve.width,ve.height,ce.depth,ye,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Ne,ve.width,ve.height,ce.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,ve.width,ve.height,ce.depth,ye,We,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Ne,ve.width,ve.height,ce.depth,0,ye,We,ve.data)}else{H&&he&&t.texStorage2D(i.TEXTURE_2D,Pe,Ne,Ze[0].width,Ze[0].height);for(let fe=0,re=Ze.length;fe<re;fe++)ve=Ze[fe],v.format!==xn?ye!==null?H?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Ne,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ge&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ve.width,ve.height,ye,We,ve.data):t.texImage2D(i.TEXTURE_2D,fe,Ne,ve.width,ve.height,0,ye,We,ve.data)}else if(v.isDataArrayTexture)if(H){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Ne,ce.width,ce.height,ce.depth),ge)if(v.layerUpdates.size>0){let fe=Jl(ce.width,ce.height,v.format,v.type);for(let re of v.layerUpdates){let Ie=ce.data.subarray(re*fe/ce.data.BYTES_PER_ELEMENT,(re+1)*fe/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,ce.width,ce.height,1,ye,We,Ie)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,We,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,ce.width,ce.height,ce.depth,0,ye,We,ce.data);else if(v.isData3DTexture)H?(he&&t.texStorage3D(i.TEXTURE_3D,Pe,Ne,ce.width,ce.height,ce.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,We,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,ce.width,ce.height,ce.depth,0,ye,We,ce.data);else if(v.isFramebufferTexture){if(he)if(H)t.texStorage2D(i.TEXTURE_2D,Pe,Ne,ce.width,ce.height);else{let fe=ce.width,re=ce.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ne,fe,re,0,ye,We,null),fe>>=1,re>>=1}}else if(Ze.length>0){if(H&&he){let fe=nt(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Pe,Ne,fe.width,fe.height)}for(let fe=0,re=Ze.length;fe<re;fe++)ve=Ze[fe],H?ge&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ye,We,ve):t.texImage2D(i.TEXTURE_2D,fe,Ne,ye,We,ve);v.generateMipmaps=!1}else if(H){if(he){let fe=nt(ce);t.texStorage2D(i.TEXTURE_2D,Pe,Ne,fe.width,fe.height)}ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,We,ce)}else t.texImage2D(i.TEXTURE_2D,0,Ne,ye,We,ce);g(v)&&d(ee),De.__version=Q.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function j(I,v,Z){if(v.image.length!==6)return;let ee=Fe(I,v),oe=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Z);let Q=n.get(oe);if(oe.version!==Q.__version||ee===!0){t.activeTexture(i.TEXTURE0+Z);let De=dt.getPrimaries(dt.workingColorSpace),pe=v.colorSpace===Cn?null:dt.getPrimaries(v.colorSpace),Ae=v.colorSpace===Cn||De===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let be=v.isCompressedTexture||v.image[0].isCompressedTexture,ce=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let re=0;re<6;re++)!be&&!ce?ye[re]=_(v.image[re],!0,r.maxCubemapSize):ye[re]=ce?v.image[re].image:v.image[re],ye[re]=St(v,ye[re]);let We=ye[0],Ne=s.convert(v.format,v.colorSpace),ve=s.convert(v.type),Ze=E(v.internalFormat,Ne,ve,v.colorSpace),H=v.isVideoTexture!==!0,he=Q.__version===void 0||ee===!0,ge=oe.dataReady,Pe=R(v,We);Le(i.TEXTURE_CUBE_MAP,v);let fe;if(be){H&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ze,We.width,We.height);for(let re=0;re<6;re++){fe=ye[re].mipmaps;for(let Ie=0;Ie<fe.length;Ie++){let $e=fe[Ie];v.format!==xn?Ne!==null?H?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,$e.width,$e.height,Ne,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,Ze,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,$e.width,$e.height,Ne,ve,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,Ze,$e.width,$e.height,0,Ne,ve,$e.data)}}}else{if(fe=v.mipmaps,H&&he){fe.length>0&&Pe++;let re=nt(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ze,re.width,re.height)}for(let re=0;re<6;re++)if(ce){H?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ye[re].width,ye[re].height,Ne,ve,ye[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ze,ye[re].width,ye[re].height,0,Ne,ve,ye[re].data);for(let Ie=0;Ie<fe.length;Ie++){let pt=fe[Ie].image[re].image;H?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,pt.width,pt.height,Ne,ve,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,Ze,pt.width,pt.height,0,Ne,ve,pt.data)}}else{H?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ne,ve,ye[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ze,Ne,ve,ye[re]);for(let Ie=0;Ie<fe.length;Ie++){let $e=fe[Ie];H?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,Ne,ve,$e.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,Ze,Ne,ve,$e.image[re])}}}g(v)&&d(i.TEXTURE_CUBE_MAP),Q.__version=oe.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function me(I,v,Z,ee,oe,Q){let De=s.convert(Z.format,Z.colorSpace),pe=s.convert(Z.type),Ae=E(Z.internalFormat,De,pe,Z.colorSpace),be=n.get(v),ce=n.get(Z);if(ce.__renderTarget=v,!be.__hasExternalTextures){let ye=Math.max(1,v.width>>Q),We=Math.max(1,v.height>>Q);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,Q,Ae,ye,We,v.depth,0,De,pe,null):t.texImage2D(oe,Q,Ae,ye,We,0,De,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ee(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,oe,ce.__webglTexture,0,ot(v)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,oe,ce.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(I,v,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,I),v.depthBuffer){let ee=v.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,Q=y(v.stencilBuffer,oe),De=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=ot(v);Ee(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,Q,v.width,v.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,I)}else{let ee=v.textures;for(let oe=0;oe<ee.length;oe++){let Q=ee[oe],De=s.convert(Q.format,Q.colorSpace),pe=s.convert(Q.type),Ae=E(Q.internalFormat,De,pe,Q.colorSpace),be=ot(v);Z&&Ee(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Ae,v.width,v.height):Ee(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,Ae,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(I,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=n.get(v.depthTexture);ee.__renderTarget=v,(!ee.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),B(v.depthTexture,0);let oe=ee.__webglTexture,Q=ot(v);if(v.depthTexture.format===yr)Ee(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(v.depthTexture.format===Or)Ee(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ge(I){let v=n.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let ee=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ee){let oe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),v.__depthDisposeCallback=oe}v.__boundDepthTexture=ee}if(I.depthTexture&&!v.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");let ee=I.texture.mipmaps;ee&&ee.length>0?ue(v.__webglFramebuffer[0],I):ue(v.__webglFramebuffer,I)}else if(Z){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]===void 0)v.__webglDepthbuffer[ee]=i.createRenderbuffer(),Ue(v.__webglDepthbuffer[ee],I,!1);else{let oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Q)}}else{let ee=I.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ue(v.__webglDepthbuffer,I,!1);else{let oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(I,v,Z){let ee=n.get(I);v!==void 0&&me(ee.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Ge(I)}function z(I){let v=I.texture,Z=n.get(I),ee=n.get(v);I.addEventListener("dispose",P);let oe=I.textures,Q=I.isWebGLCubeRenderTarget===!0,De=oe.length>1;if(De||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=v.version,o.memory.textures++),Q){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer[pe]=[];for(let Ae=0;Ae<v.mipmaps.length;Ae++)Z.__webglFramebuffer[pe][Ae]=i.createFramebuffer()}else Z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pe=0;pe<v.mipmaps.length;pe++)Z.__webglFramebuffer[pe]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(De)for(let pe=0,Ae=oe.length;pe<Ae;pe++){let be=n.get(oe[pe]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Ee(I)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){let Ae=oe[pe];Z.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[pe]);let be=s.convert(Ae.format,Ae.colorSpace),ce=s.convert(Ae.type),ye=E(Ae.internalFormat,be,ce,Ae.colorSpace,I.isXRRenderTarget===!0),We=ot(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,ye,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Z.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Le(i.TEXTURE_CUBE_MAP,v);for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)me(Z.__webglFramebuffer[pe][Ae],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae);else me(Z.__webglFramebuffer[pe],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(v)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let pe=0,Ae=oe.length;pe<Ae;pe++){let be=oe[pe],ce=n.get(be),ye=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ye=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,ce.__webglTexture),Le(ye,be),me(Z.__webglFramebuffer,I,be,i.COLOR_ATTACHMENT0+pe,ye,0),g(be)&&d(ye)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ee.__webglTexture),Le(pe,v),v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)me(Z.__webglFramebuffer[Ae],I,v,i.COLOR_ATTACHMENT0,pe,Ae);else me(Z.__webglFramebuffer,I,v,i.COLOR_ATTACHMENT0,pe,0);g(v)&&d(pe),t.unbindTexture()}I.depthBuffer&&Ge(I)}function ut(I){let v=I.textures;for(let Z=0,ee=v.length;Z<ee;Z++){let oe=v[Z];if(g(oe)){let Q=b(I),De=n.get(oe).__webglTexture;t.bindTexture(Q,De),d(Q),t.unbindTexture()}}}let Ye=[],He=[];function Re(I){if(I.samples>0){if(Ee(I)===!1){let v=I.textures,Z=I.width,ee=I.height,oe=i.COLOR_BUFFER_BIT,Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(I),pe=v.length>1;if(pe)for(let be=0;be<v.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);let Ae=I.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let be=0;be<v.length;be++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[be]);let ce=n.get(v[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,oe,i.NEAREST),c===!0&&(Ye.length=0,He.length=0,Ye.push(i.COLOR_ATTACHMENT0+be),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ye.push(Q),He.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let be=0;be<v.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,De.__webglColorRenderbuffer[be]);let ce=n.get(v[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let v=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ot(I){return Math.min(r.maxSamples,I.samples)}function Ee(I){let v=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Xe(I){let v=o.render.frame;h.get(I)!==v&&(h.set(I,v),I.update())}function St(I,v){let Z=I.colorSpace,ee=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Ii&&Z!==Cn&&(dt.getTransfer(Z)===Mt?(ee!==xn||oe!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),v}function nt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=Y,this.rebindTextures=lt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ee}function u0(i,e){function t(n,r=Cn){let s,o=dt.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===Ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ul)return i.BYTE;if(n===Nl)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===Ol)return i.ALPHA;if(n===Bl)return i.RGB;if(n===xn)return i.RGBA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Or)return i.DEPTH_STENCIL;if(n===Qo)return i.RED;if(n===ea)return i.RED_INTEGER;if(n===kl)return i.RG;if(n===ta)return i.RG_INTEGER;if(n===na)return i.RGBA_INTEGER;if(n===Cs||n===Rs||n===Is||n===Ps)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===ra||n===sa||n===oa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ia)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ra)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===la||n===ca)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===aa||n===la)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ca)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===xa||n===_a||n===ya||n===va||n===Ma||n===ba||n===Sa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ha)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===va)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===Ta||n===Ea)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wa)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ea)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Aa||n===Ca||n===Ra||n===Ia)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var d0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
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

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new vs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new an({vertexShader:d0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends Zn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,f=null,x=null,_=typeof XRWebGLBinding<"u",g=new lc,d={},b=t.getContextAttributes(),E=null,y=null,R=[],C=[],P=new Ve,U=null,w=new Ft;w.viewport=new ft;let S=new Ft;S.viewport=new ft;let A=[w,S],N=new Bo,k=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let j=R[J];return j===void 0&&(j=new Er,R[J]=j),j.getTargetRaySpace()},this.getControllerGrip=function(J){let j=R[J];return j===void 0&&(j=new Er,R[J]=j),j.getGripSpace()},this.getHand=function(J){let j=R[J];return j===void 0&&(j=new Er,R[J]=j),j.getHandSpace()};function B(J){let j=C.indexOf(J.inputSource);if(j===-1)return;let me=R[j];me!==void 0&&(me.update(J.inputSource,J.frame,l||o),me.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let J=0;J<R.length;J++){let j=C[J];j!==null&&(C[J]=null,R[J].disconnect(j))}k=null,F=null,g.reset();for(let J in d)delete d[J];e.setRenderTarget(E),f=null,p=null,u=null,r=null,y=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,ue=null;b.depth&&(ue=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?Or:yr,Ue=b.stencil?zr:gi);let Ge={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};u=this.getBinding(),p=u.createProjectionLayer(Ge),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Pn(p.textureWidth,p.textureHeight,{format:xn,type:En,depthTexture:new ys(p.textureWidth,p.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Pn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(J){for(let j=0;j<J.removed.length;j++){let me=J.removed[j],Ue=C.indexOf(me);Ue>=0&&(C[Ue]=null,R[Ue].disconnect(me))}for(let j=0;j<J.added.length;j++){let me=J.added[j],Ue=C.indexOf(me);if(Ue===-1){for(let Ge=0;Ge<R.length;Ge++)if(Ge>=C.length){C.push(me),Ue=Ge;break}else if(C[Ge]===null){C[Ge]=me,Ue=Ge;break}if(Ue===-1)break}let ue=R[Ue];ue&&ue.connect(me)}}let Y=new V,ie=new V;function se(J,j,me){Y.setFromMatrixPosition(j.matrixWorld),ie.setFromMatrixPosition(me.matrixWorld);let Ue=Y.distanceTo(ie),ue=j.projectionMatrix.elements,Ge=me.projectionMatrix.elements,lt=ue[14]/(ue[10]-1),z=ue[14]/(ue[10]+1),ut=(ue[9]+1)/ue[5],Ye=(ue[9]-1)/ue[5],He=(ue[8]-1)/ue[0],Re=(Ge[8]+1)/Ge[0],ot=lt*He,Ee=lt*Re,Xe=Ue/(-He+Re),St=Xe*-He;if(j.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(St),J.translateZ(Xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ue[10]===-1)J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let nt=lt+Xe,I=z+Xe,v=ot-St,Z=Ee+(Ue-St),ee=ut*z/I*nt,oe=Ye*z/I*nt;J.projectionMatrix.makePerspective(v,Z,ee,oe,nt,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _e(J,j){j===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(j.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let j=J.near,me=J.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(me=g.depthFar)),N.near=S.near=w.near=j,N.far=S.far=w.far=me,(k!==N.near||F!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,F=N.far),N.layers.mask=J.layers.mask|6,w.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;let Ue=J.parent,ue=N.cameras;_e(N,Ue);for(let Ge=0;Ge<ue.length;Ge++)_e(ue[Ge],Ue);ue.length===2?se(N,w,S):N.projectionMatrix.copy(w.projectionMatrix),Le(J,N,Ue)};function Le(J,j,me){me===null?J.matrix.copy(j.matrixWorld):(J.matrix.copy(me.matrixWorld),J.matrix.invert(),J.matrix.multiply(j.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=vr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(J){c=J,p!==null&&(p.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(J){return d[J]};let Fe=null;function tt(J,j){if(h=j.getViewerPose(l||o),x=j,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ue=!1;me.length!==N.cameras.length&&(N.cameras.length=0,Ue=!0);for(let z=0;z<me.length;z++){let ut=me[z],Ye=null;if(f!==null)Ye=f.getViewport(ut);else{let Re=u.getViewSubImage(p,ut);Ye=Re.viewport,z===0&&(e.setRenderTargetTextures(y,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(y))}let He=A[z];He===void 0&&(He=new Ft,He.layers.enable(z),He.viewport=new ft,A[z]=He),He.matrix.fromArray(ut.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ut.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),z===0&&(N.matrix.copy(He.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ue===!0&&N.cameras.push(He)}let ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let z=u.getDepthInformation(me[0]);z&&z.isValid&&z.texture&&g.init(z,r.renderState)}if(ue&&ue.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let z=0;z<me.length;z++){let ut=me[z].camera;if(ut){let Ye=d[ut];Ye||(Ye=new vs,d[ut]=Ye);let He=u.getCameraImage(ut);Ye.sourceTexture=He}}}}for(let me=0;me<R.length;me++){let Ue=C[me],ue=R[me];Ue!==null&&ue!==void 0&&ue.update(Ue,j,l||o)}Fe&&Fe(J,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),x=null}let Be=new cu;Be.setAnimationLoop(tt),this.setAnimationLoop=function(J){Fe=J},this.dispose=function(){}}},Xi=new wn,p0=new xt;function m0(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,ql(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,b,E,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),u(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d)):d.isMeshStandardMaterial?(s(g,d),p(g,d),d.isMeshPhysicalMaterial&&f(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),_(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?c(g,d,b,E):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Xt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Xt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let b=e.get(d),E=b.envMap,y=b.envMapRotation;E&&(g.envMap.value=E,Xi.copy(y),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),g.envMapRotation.value.setFromMatrix4(p0.makeRotationFromEuler(Xi)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,b,E){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*b,g.scale.value=E*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function f(g,d,b){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){let b=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function g0(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){let y=E.program;n.uniformBlockBinding(b,y)}function l(b,E){let y=r[b.id];y===void 0&&(x(b),y=h(b),r[b.id]=y,b.addEventListener("dispose",g));let R=E.program;n.updateUBOMapping(b,R);let C=e.render.frame;s[b.id]!==C&&(p(b),s[b.id]=C)}function h(b){let E=u();b.__bindingPointIndex=E;let y=i.createBuffer(),R=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){let E=r[b.id],y=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,P=y.length;C<P;C++){let U=Array.isArray(y[C])?y[C]:[y[C]];for(let w=0,S=U.length;w<S;w++){let A=U[w];if(f(A,C,w,R)===!0){let N=A.__offset,k=Array.isArray(A.value)?A.value:[A.value],F=0;for(let B=0;B<k.length;B++){let W=k[B],$=_(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,N+F,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,F),F+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,E,y,R){let C=b.value,P=E+"_"+y;if(R[P]===void 0)return typeof C=="number"||typeof C=="boolean"?R[P]=C:R[P]=C.clone(),!0;{let U=R[P];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return R[P]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function x(b){let E=b.uniforms,y=0,R=16;for(let P=0,U=E.length;P<U;P++){let w=Array.isArray(E[P])?E[P]:[E[P]];for(let S=0,A=w.length;S<A;S++){let N=w[S],k=Array.isArray(N.value)?N.value:[N.value];for(let F=0,B=k.length;F<B;F++){let W=k[F],$=_(W),Y=y%R,ie=Y%$.boundary,se=Y+ie;y+=ie,se!==0&&R-se<$.storage&&(y+=R-se),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=$.storage}}}let C=y%R;return C>0&&(y+=R-C),b.__size=y,b.__cache={},this}function _(b){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function g(b){let E=b.target;E.removeEventListener("dispose",g);let y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(let b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}var Gr=class{constructor(e={}){let{canvas:t=Nh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=new Uint32Array(4),_=new Int32Array(4),g=null,d=null,b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=It;let C=0,P=0,U=null,w=-1,S=null,A=new ft,N=new ft,k=null,F=new Je(0),B=0,W=t.width,$=t.height,Y=1,ie=null,se=null,_e=new ft(0,0,W,$),Le=new ft(0,0,W,$),Fe=!1,tt=new Ir,Be=!1,J=!1,j=new xt,me=new V,Ue=new ft,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function lt(){return U===null?Y:1}let z=n;function ut(m,M){return t.getContext(m,M)}try{let m={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",fe,!1),z===null){let M="webgl2";if(z=ut(M,m),z===null)throw ut(M)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(m){throw console.error("THREE.WebGLRenderer: "+m.message),m}let Ye,He,Re,ot,Ee,Xe,St,nt,I,v,Z,ee,oe,Q,De,pe,Ae,be,ce,ye,We,Ne,ve,Ze;function H(){Ye=new Um(z),Ye.init(),Ne=new u0(z,Ye),He=new Am(z,Ye,e,Ne),Re=new c0(z,Ye),He.reversedDepthBuffer&&p&&Re.buffers.depth.setReversed(!0),ot=new zm(z),Ee=new $g,Xe=new h0(z,Ye,Re,Ee,He,Ne,ot),St=new Rm(y),nt=new Lm(y),I=new Gd(z),ve=new Tm(z,I),v=new Nm(z,I,ot,ve),Z=new Bm(z,v,I,ot),ce=new Om(z,He,Xe),pe=new Cm(Ee),ee=new Jg(y,St,nt,Ye,He,ve,pe),oe=new m0(y,Ee),Q=new jg,De=new r0(Ye),be=new wm(y,St,nt,Re,Z,f,c),Ae=new a0(y,Z,He),Ze=new g0(z,ot,He,Re),ye=new Em(z,Ye,ot),We=new Fm(z,Ye,ot),ot.programs=ee.programs,y.capabilities=He,y.extensions=Ye,y.properties=Ee,y.renderLists=Q,y.shadowMap=Ae,y.state=Re,y.info=ot}H();let he=new cc(y,z);this.xr=he,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let m=Ye.get("WEBGL_lose_context");m&&m.loseContext()},this.forceContextRestore=function(){let m=Ye.get("WEBGL_lose_context");m&&m.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(m){m!==void 0&&(Y=m,this.setSize(W,$,!1))},this.getSize=function(m){return m.set(W,$)},this.setSize=function(m,M,L=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=m,$=M,t.width=Math.floor(m*Y),t.height=Math.floor(M*Y),L===!0&&(t.style.width=m+"px",t.style.height=M+"px"),this.setViewport(0,0,m,M)},this.getDrawingBufferSize=function(m){return m.set(W*Y,$*Y).floor()},this.setDrawingBufferSize=function(m,M,L){W=m,$=M,Y=L,t.width=Math.floor(m*L),t.height=Math.floor(M*L),this.setViewport(0,0,m,M)},this.getCurrentViewport=function(m){return m.copy(A)},this.getViewport=function(m){return m.copy(_e)},this.setViewport=function(m,M,L,O){m.isVector4?_e.set(m.x,m.y,m.z,m.w):_e.set(m,M,L,O),Re.viewport(A.copy(_e).multiplyScalar(Y).round())},this.getScissor=function(m){return m.copy(Le)},this.setScissor=function(m,M,L,O){m.isVector4?Le.set(m.x,m.y,m.z,m.w):Le.set(m,M,L,O),Re.scissor(N.copy(Le).multiplyScalar(Y).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(m){Re.setScissorTest(Fe=m)},this.setOpaqueSort=function(m){ie=m},this.setTransparentSort=function(m){se=m},this.getClearColor=function(m){return m.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(m=!0,M=!0,L=!0){let O=0;if(m){let G=!1;if(U!==null){let ne=U.texture.format;G=ne===na||ne===ta||ne===ea}if(G){let ne=U.texture.type,ae=ne===En||ne===gi||ne===Nr||ne===zr||ne===Ko||ne===jo,T=be.getClearColor(),D=be.getClearAlpha(),K=T.r,X=T.g,q=T.b;ae?(x[0]=K,x[1]=X,x[2]=q,x[3]=D,z.clearBufferuiv(z.COLOR,0,x)):(_[0]=K,_[1]=X,_[2]=q,_[3]=D,z.clearBufferiv(z.COLOR,0,_))}else O|=z.COLOR_BUFFER_BIT}M&&(O|=z.DEPTH_BUFFER_BIT),L&&(O|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),be.dispose(),Q.dispose(),De.dispose(),Ee.dispose(),St.dispose(),nt.dispose(),Z.dispose(),ve.dispose(),Ze.dispose(),ee.dispose(),he.dispose(),he.removeEventListener("sessionstart",Nt),he.removeEventListener("sessionend",Ct),Et.stop()};function ge(m){m.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let m=ot.autoReset,M=Ae.enabled,L=Ae.autoUpdate,O=Ae.needsUpdate,G=Ae.type;H(),ot.autoReset=m,Ae.enabled=M,Ae.autoUpdate=L,Ae.needsUpdate=O,Ae.type=G}function fe(m){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",m.statusMessage)}function re(m){let M=m.target;M.removeEventListener("dispose",re),Ie(M)}function Ie(m){$e(m),Ee.remove(m)}function $e(m){let M=Ee.get(m).programs;M!==void 0&&(M.forEach(function(L){ee.releaseProgram(L)}),m.isShaderMaterial&&ee.releaseShaderCache(m))}this.renderBufferDirect=function(m,M,L,O,G,ne){M===null&&(M=ue);let ae=G.isMesh&&G.matrixWorld.determinant()<0,T=ti(m,M,L,O,G);Re.setMaterial(O,ae);let D=L.index,K=1;if(O.wireframe===!0){if(D=v.getWireframeAttribute(L),D===void 0)return;K=2}let X=L.drawRange,q=L.attributes.position,te=X.start*K,le=(X.start+X.count)*K;ne!==null&&(te=Math.max(te,ne.start*K),le=Math.min(le,(ne.start+ne.count)*K)),D!==null?(te=Math.max(te,0),le=Math.min(le,D.count)):q!=null&&(te=Math.max(te,0),le=Math.min(le,q.count));let de=le-te;if(de<0||de===1/0)return;ve.setup(G,O,T,L,D);let Ce,Te=ye;if(D!==null&&(Ce=I.get(D),Te=We,Te.setIndex(Ce)),G.isMesh)O.wireframe===!0?(Re.setLineWidth(O.wireframeLinewidth*lt()),Te.setMode(z.LINES)):Te.setMode(z.TRIANGLES);else if(G.isLine){let Se=O.linewidth;Se===void 0&&(Se=1),Re.setLineWidth(Se*lt()),G.isLineSegments?Te.setMode(z.LINES):G.isLineLoop?Te.setMode(z.LINE_LOOP):Te.setMode(z.LINE_STRIP)}else G.isPoints?Te.setMode(z.POINTS):G.isSprite&&Te.setMode(z.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Se=G._multiDrawStarts,ke=G._multiDrawCounts,qe=G._multiDrawCount,Rt=D?I.get(D).bytesPerElement:1,we=Ee.get(O).currentProgram.getUniforms();for(let ze=0;ze<qe;ze++)we.setValue(z,"_gl_DrawID",ze),Te.render(Se[ze]/Rt,ke[ze])}else if(G.isInstancedMesh)Te.renderInstances(te,de,G.count);else if(L.isInstancedBufferGeometry){let Se=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,ke=Math.min(L.instanceCount,Se);Te.renderInstances(te,de,ke)}else Te.render(te,de)};function pt(m,M,L){m.transparent===!0&&m.side===At&&m.forceSinglePass===!1?(m.side=Xt,m.needsUpdate=!0,Gt(m,M,L),m.side=Yn,m.needsUpdate=!0,Gt(m,M,L),m.side=At):Gt(m,M,L)}this.compile=function(m,M,L=null){L===null&&(L=m),d=De.get(L),d.init(M),E.push(d),L.traverseVisible(function(G){G.isLight&&G.layers.test(M.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),m!==L&&m.traverseVisible(function(G){G.isLight&&G.layers.test(M.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();let O=new Set;return m.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ne=G.material;if(ne)if(Array.isArray(ne))for(let ae=0;ae<ne.length;ae++){let T=ne[ae];pt(T,L,G),O.add(T)}else pt(ne,L,G),O.add(ne)}),d=E.pop(),O},this.compileAsync=function(m,M,L=null){let O=this.compile(m,M,L);return new Promise(G=>{function ne(){if(O.forEach(function(ae){Ee.get(ae).currentProgram.isReady()&&O.delete(ae)}),O.size===0){G(m);return}setTimeout(ne,10)}Ye.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let je=null;function Ut(m){je&&je(m)}function Nt(){Et.stop()}function Ct(){Et.start()}let Et=new cu;Et.setAnimationLoop(Ut),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(m){je=m,he.setAnimationLoop(m),m===null?Et.stop():Et.start()},he.addEventListener("sessionstart",Nt),he.addEventListener("sessionend",Ct),this.render=function(m,M){if(M!==void 0&&M.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),M.parent===null&&M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(M),M=he.getCamera()),m.isScene===!0&&m.onBeforeRender(y,m,M,U),d=De.get(m,E.length),d.init(M),E.push(d),j.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),tt.setFromProjectionMatrix(j,bn,M.reversedDepth),J=this.localClippingEnabled,Be=pe.init(this.clippingPlanes,J),g=Q.get(m,b.length),g.init(),b.push(g),he.enabled===!0&&he.isPresenting===!0){let ne=y.xr.getDepthSensingMesh();ne!==null&&nn(ne,M,-1/0,y.sortObjects)}nn(m,M,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ie,se),Ge=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ge&&be.addToRenderList(g,m),this.info.render.frame++,Be===!0&&pe.beginShadows();let L=d.state.shadowsArray;Ae.render(L,m,M),Be===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=g.opaque,G=g.transmissive;if(d.setupLights(),M.isArrayCamera){let ne=M.cameras;if(G.length>0)for(let ae=0,T=ne.length;ae<T;ae++){let D=ne[ae];rn(O,G,m,D)}Ge&&be.render(m);for(let ae=0,T=ne.length;ae<T;ae++){let D=ne[ae];yt(g,m,D,D.viewport)}}else G.length>0&&rn(O,G,m,M),Ge&&be.render(m),yt(g,m,M);U!==null&&P===0&&(Xe.updateMultisampleRenderTarget(U),Xe.updateRenderTargetMipmap(U)),m.isScene===!0&&m.onAfterRender(y,m,M),ve.resetDefaultState(),w=-1,S=null,E.pop(),E.length>0?(d=E[E.length-1],Be===!0&&pe.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function nn(m,M,L,O){if(m.visible===!1)return;if(m.layers.test(M.layers)){if(m.isGroup)L=m.renderOrder;else if(m.isLOD)m.autoUpdate===!0&&m.update(M);else if(m.isLight)d.pushLight(m),m.castShadow&&d.pushShadow(m);else if(m.isSprite){if(!m.frustumCulled||tt.intersectsSprite(m)){O&&Ue.setFromMatrixPosition(m.matrixWorld).applyMatrix4(j);let ae=Z.update(m),T=m.material;T.visible&&g.push(m,ae,T,L,Ue.z,null)}}else if((m.isMesh||m.isLine||m.isPoints)&&(!m.frustumCulled||tt.intersectsObject(m))){let ae=Z.update(m),T=m.material;if(O&&(m.boundingSphere!==void 0?(m.boundingSphere===null&&m.computeBoundingSphere(),Ue.copy(m.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Ue.copy(ae.boundingSphere.center)),Ue.applyMatrix4(m.matrixWorld).applyMatrix4(j)),Array.isArray(T)){let D=ae.groups;for(let K=0,X=D.length;K<X;K++){let q=D[K],te=T[q.materialIndex];te&&te.visible&&g.push(m,ae,te,L,Ue.z,q)}}else T.visible&&g.push(m,ae,T,L,Ue.z,null)}}let ne=m.children;for(let ae=0,T=ne.length;ae<T;ae++)nn(ne[ae],M,L,O)}function yt(m,M,L,O){let G=m.opaque,ne=m.transmissive,ae=m.transparent;d.setupLightsView(L),Be===!0&&pe.setGlobalState(y.clippingPlanes,L),O&&Re.viewport(A.copy(O)),G.length>0&&mn(G,M,L),ne.length>0&&mn(ne,M,L),ae.length>0&&mn(ae,M,L),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function rn(m,M,L,O){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new Pn(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Fr:En,minFilter:mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let ne=d.state.transmissionRenderTarget[O.id],ae=O.viewport||A;ne.setSize(ae.z*y.transmissionResolutionScale,ae.w*y.transmissionResolutionScale);let T=y.getRenderTarget(),D=y.getActiveCubeFace(),K=y.getActiveMipmapLevel();y.setRenderTarget(ne),y.getClearColor(F),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),Ge&&be.render(L);let X=y.toneMapping;y.toneMapping=Qn;let q=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),Be===!0&&pe.setGlobalState(y.clippingPlanes,O),mn(m,L,O),Xe.updateMultisampleRenderTarget(ne),Xe.updateRenderTargetMipmap(ne),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let le=0,de=M.length;le<de;le++){let Ce=M[le],Te=Ce.object,Se=Ce.geometry,ke=Ce.material,qe=Ce.group;if(ke.side===At&&Te.layers.test(O.layers)){let Rt=ke.side;ke.side=Xt,ke.needsUpdate=!0,zn(Te,L,O,Se,ke,qe),ke.side=Rt,ke.needsUpdate=!0,te=!0}}te===!0&&(Xe.updateMultisampleRenderTarget(ne),Xe.updateRenderTargetMipmap(ne))}y.setRenderTarget(T,D,K),y.setClearColor(F,B),q!==void 0&&(O.viewport=q),y.toneMapping=X}function mn(m,M,L){let O=M.isScene===!0?M.overrideMaterial:null;for(let G=0,ne=m.length;G<ne;G++){let ae=m[G],T=ae.object,D=ae.geometry,K=ae.group,X=ae.material;X.allowOverride===!0&&O!==null&&(X=O),T.layers.test(L.layers)&&zn(T,M,L,D,X,K)}}function zn(m,M,L,O,G,ne){m.onBeforeRender(y,M,L,O,G,ne),m.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,m.matrixWorld),m.normalMatrix.getNormalMatrix(m.modelViewMatrix),G.onBeforeRender(y,M,L,O,m,ne),G.transparent===!0&&G.side===At&&G.forceSinglePass===!1?(G.side=Xt,G.needsUpdate=!0,y.renderBufferDirect(L,M,O,G,m,ne),G.side=Yn,G.needsUpdate=!0,y.renderBufferDirect(L,M,O,G,m,ne),G.side=At):y.renderBufferDirect(L,M,O,G,m,ne),m.onAfterRender(y,M,L,O,G,ne)}function Gt(m,M,L){M.isScene!==!0&&(M=ue);let O=Ee.get(m),G=d.state.lights,ne=d.state.shadowsArray,ae=G.state.version,T=ee.getParameters(m,G.state,ne,M,L),D=ee.getProgramCacheKey(T),K=O.programs;O.environment=m.isMeshStandardMaterial?M.environment:null,O.fog=M.fog,O.envMap=(m.isMeshStandardMaterial?nt:St).get(m.envMap||O.environment),O.envMapRotation=O.environment!==null&&m.envMap===null?M.environmentRotation:m.envMapRotation,K===void 0&&(m.addEventListener("dispose",re),K=new Map,O.programs=K);let X=K.get(D);if(X!==void 0){if(O.currentProgram===X&&O.lightsStateVersion===ae)return vi(m,T),X}else T.uniforms=ee.getUniforms(m),m.onBeforeCompile(T,y),X=ee.acquireProgram(T,D),K.set(D,X),O.uniforms=T.uniforms;let q=O.uniforms;return(!m.isShaderMaterial&&!m.isRawShaderMaterial||m.clipping===!0)&&(q.clippingPlanes=pe.uniform),vi(m,T),O.needsLights=On(m),O.lightsStateVersion=ae,O.needsLights&&(q.ambientLightColor.value=G.state.ambient,q.lightProbe.value=G.state.probe,q.directionalLights.value=G.state.directional,q.directionalLightShadows.value=G.state.directionalShadow,q.spotLights.value=G.state.spot,q.spotLightShadows.value=G.state.spotShadow,q.rectAreaLights.value=G.state.rectArea,q.ltc_1.value=G.state.rectAreaLTC1,q.ltc_2.value=G.state.rectAreaLTC2,q.pointLights.value=G.state.point,q.pointLightShadows.value=G.state.pointShadow,q.hemisphereLights.value=G.state.hemi,q.directionalShadowMap.value=G.state.directionalShadowMap,q.directionalShadowMatrix.value=G.state.directionalShadowMatrix,q.spotShadowMap.value=G.state.spotShadowMap,q.spotLightMatrix.value=G.state.spotLightMatrix,q.spotLightMap.value=G.state.spotLightMap,q.pointShadowMap.value=G.state.pointShadowMap,q.pointShadowMatrix.value=G.state.pointShadowMatrix),O.currentProgram=X,O.uniformsList=null,X}function yi(m){if(m.uniformsList===null){let M=m.currentProgram.getUniforms();m.uniformsList=Vr.seqWithValue(M.seq,m.uniforms)}return m.uniformsList}function vi(m,M){let L=Ee.get(m);L.outputColorSpace=M.outputColorSpace,L.batching=M.batching,L.batchingColor=M.batchingColor,L.instancing=M.instancing,L.instancingColor=M.instancingColor,L.instancingMorph=M.instancingMorph,L.skinning=M.skinning,L.morphTargets=M.morphTargets,L.morphNormals=M.morphNormals,L.morphColors=M.morphColors,L.morphTargetsCount=M.morphTargetsCount,L.numClippingPlanes=M.numClippingPlanes,L.numIntersection=M.numClipIntersection,L.vertexAlphas=M.vertexAlphas,L.vertexTangents=M.vertexTangents,L.toneMapping=M.toneMapping}function ti(m,M,L,O,G){M.isScene!==!0&&(M=ue),Xe.resetTextureUnits();let ne=M.fog,ae=O.isMeshStandardMaterial?M.environment:null,T=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ii,D=(O.isMeshStandardMaterial?nt:St).get(O.envMap||ae),K=O.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,X=!!L.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),q=!!L.morphAttributes.position,te=!!L.morphAttributes.normal,le=!!L.morphAttributes.color,de=Qn;O.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(de=y.toneMapping);let Ce=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Te=Ce!==void 0?Ce.length:0,Se=Ee.get(O),ke=d.state.lights;if(Be===!0&&(J===!0||m!==S)){let Ht=m===S&&O.id===w;pe.setState(O,m,Ht)}let qe=!1;O.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==ke.state.version||Se.outputColorSpace!==T||G.isBatchedMesh&&Se.batching===!1||!G.isBatchedMesh&&Se.batching===!0||G.isBatchedMesh&&Se.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Se.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Se.instancing===!1||!G.isInstancedMesh&&Se.instancing===!0||G.isSkinnedMesh&&Se.skinning===!1||!G.isSkinnedMesh&&Se.skinning===!0||G.isInstancedMesh&&Se.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Se.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Se.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Se.instancingMorph===!1&&G.morphTexture!==null||Se.envMap!==D||O.fog===!0&&Se.fog!==ne||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==pe.numPlanes||Se.numIntersection!==pe.numIntersection)||Se.vertexAlphas!==K||Se.vertexTangents!==X||Se.morphTargets!==q||Se.morphNormals!==te||Se.morphColors!==le||Se.toneMapping!==de||Se.morphTargetsCount!==Te)&&(qe=!0):(qe=!0,Se.__version=O.version);let Rt=Se.currentProgram;qe===!0&&(Rt=Gt(O,M,G));let we=!1,ze=!1,en=!1,ht=Rt.getUniforms(),Dt=Se.uniforms;if(Re.useProgram(Rt.program)&&(we=!0,ze=!0,en=!0),O.id!==w&&(w=O.id,ze=!0),we||S!==m){Re.buffers.depth.getReversed()&&m.reversedDepth!==!0&&(m._reversedDepth=!0,m.updateProjectionMatrix()),ht.setValue(z,"projectionMatrix",m.projectionMatrix),ht.setValue(z,"viewMatrix",m.matrixWorldInverse);let Yt=ht.map.cameraPosition;Yt!==void 0&&Yt.setValue(z,me.setFromMatrixPosition(m.matrixWorld)),He.logarithmicDepthBuffer&&ht.setValue(z,"logDepthBufFC",2/(Math.log(m.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ht.setValue(z,"isOrthographic",m.isOrthographicCamera===!0),S!==m&&(S=m,ze=!0,en=!0)}if(G.isSkinnedMesh){ht.setOptional(z,G,"bindMatrix"),ht.setOptional(z,G,"bindMatrixInverse");let Ht=G.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),ht.setValue(z,"boneTexture",Ht.boneTexture,Xe))}G.isBatchedMesh&&(ht.setOptional(z,G,"batchingTexture"),ht.setValue(z,"batchingTexture",G._matricesTexture,Xe),ht.setOptional(z,G,"batchingIdTexture"),ht.setValue(z,"batchingIdTexture",G._indirectTexture,Xe),ht.setOptional(z,G,"batchingColorTexture"),G._colorsTexture!==null&&ht.setValue(z,"batchingColorTexture",G._colorsTexture,Xe));let qt=L.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&ce.update(G,L,Rt),(ze||Se.receiveShadow!==G.receiveShadow)&&(Se.receiveShadow=G.receiveShadow,ht.setValue(z,"receiveShadow",G.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Dt.envMap.value=D,Dt.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&M.environment!==null&&(Dt.envMapIntensity.value=M.environmentIntensity),ze&&(ht.setValue(z,"toneMappingExposure",y.toneMappingExposure),Se.needsLights&&cn(Dt,en),ne&&O.fog===!0&&oe.refreshFogUniforms(Dt,ne),oe.refreshMaterialUniforms(Dt,O,Y,$,d.state.transmissionRenderTarget[m.id]),Vr.upload(z,yi(Se),Dt,Xe)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Vr.upload(z,yi(Se),Dt,Xe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ht.setValue(z,"center",G.center),ht.setValue(z,"modelViewMatrix",G.modelViewMatrix),ht.setValue(z,"normalMatrix",G.normalMatrix),ht.setValue(z,"modelMatrix",G.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Ht=O.uniformsGroups;for(let Yt=0,ni=Ht.length;Yt<ni;Yt++){let bi=Ht[Yt];Ze.update(bi,Rt),Ze.bind(bi,Rt)}}return Rt}function cn(m,M){m.ambientLightColor.needsUpdate=M,m.lightProbe.needsUpdate=M,m.directionalLights.needsUpdate=M,m.directionalLightShadows.needsUpdate=M,m.pointLights.needsUpdate=M,m.pointLightShadows.needsUpdate=M,m.spotLights.needsUpdate=M,m.spotLightShadows.needsUpdate=M,m.rectAreaLights.needsUpdate=M,m.hemisphereLights.needsUpdate=M}function On(m){return m.isMeshLambertMaterial||m.isMeshToonMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isShadowMaterial||m.isShaderMaterial&&m.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(m,M,L){let O=Ee.get(m);O.__autoAllocateDepthBuffer=m.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ee.get(m.texture).__webglTexture=M,Ee.get(m.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:L,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(m,M){let L=Ee.get(m);L.__webglFramebuffer=M,L.__useDefaultFramebuffer=M===void 0};let hn=z.createFramebuffer();this.setRenderTarget=function(m,M=0,L=0){U=m,C=M,P=L;let O=!0,G=null,ne=!1,ae=!1;if(m){let D=Ee.get(m);if(D.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(z.FRAMEBUFFER,null),O=!1;else if(D.__webglFramebuffer===void 0)Xe.setupRenderTarget(m);else if(D.__hasExternalTextures)Xe.rebindTextures(m,Ee.get(m.texture).__webglTexture,Ee.get(m.depthTexture).__webglTexture);else if(m.depthBuffer){let q=m.depthTexture;if(D.__boundDepthTexture!==q){if(q!==null&&Ee.has(q)&&(m.width!==q.image.width||m.height!==q.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(m)}}let K=m.texture;(K.isData3DTexture||K.isDataArrayTexture||K.isCompressedArrayTexture)&&(ae=!0);let X=Ee.get(m).__webglFramebuffer;m.isWebGLCubeRenderTarget?(Array.isArray(X[M])?G=X[M][L]:G=X[M],ne=!0):m.samples>0&&Xe.useMultisampledRTT(m)===!1?G=Ee.get(m).__webglMultisampledFramebuffer:Array.isArray(X)?G=X[L]:G=X,A.copy(m.viewport),N.copy(m.scissor),k=m.scissorTest}else A.copy(_e).multiplyScalar(Y).floor(),N.copy(Le).multiplyScalar(Y).floor(),k=Fe;if(L!==0&&(G=hn),Re.bindFramebuffer(z.FRAMEBUFFER,G)&&O&&Re.drawBuffers(m,G),Re.viewport(A),Re.scissor(N),Re.setScissorTest(k),ne){let D=Ee.get(m.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+M,D.__webglTexture,L)}else if(ae){let D=M;for(let K=0;K<m.textures.length;K++){let X=Ee.get(m.textures[K]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+K,X.__webglTexture,L,D)}}else if(m!==null&&L!==0){let D=Ee.get(m.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,D.__webglTexture,L)}w=-1},this.readRenderTargetPixels=function(m,M,L,O,G,ne,ae,T=0){if(!(m&&m.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let D=Ee.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&ae!==void 0&&(D=D[ae]),D){Re.bindFramebuffer(z.FRAMEBUFFER,D);try{let K=m.textures[T],X=K.format,q=K.type;if(!He.textureFormatReadable(X)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}M>=0&&M<=m.width-O&&L>=0&&L<=m.height-G&&(m.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+T),z.readPixels(M,L,O,G,Ne.convert(X),Ne.convert(q),ne))}finally{let K=U!==null?Ee.get(U).__webglFramebuffer:null;Re.bindFramebuffer(z.FRAMEBUFFER,K)}}},this.readRenderTargetPixelsAsync=async function(m,M,L,O,G,ne,ae,T=0){if(!(m&&m.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let D=Ee.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&ae!==void 0&&(D=D[ae]),D)if(M>=0&&M<=m.width-O&&L>=0&&L<=m.height-G){Re.bindFramebuffer(z.FRAMEBUFFER,D);let K=m.textures[T],X=K.format,q=K.type;if(!He.textureFormatReadable(X))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,te),z.bufferData(z.PIXEL_PACK_BUFFER,ne.byteLength,z.STREAM_READ),m.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+T),z.readPixels(M,L,O,G,Ne.convert(X),Ne.convert(q),0);let le=U!==null?Ee.get(U).__webglFramebuffer:null;Re.bindFramebuffer(z.FRAMEBUFFER,le);let de=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Fh(z,de,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,te),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ne),z.deleteBuffer(te),z.deleteSync(de),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(m,M=null,L=0){let O=Math.pow(2,-L),G=Math.floor(m.image.width*O),ne=Math.floor(m.image.height*O),ae=M!==null?M.x:0,T=M!==null?M.y:0;Xe.setTexture2D(m,0),z.copyTexSubImage2D(z.TEXTURE_2D,L,0,0,ae,T,G,ne),Re.unbindTexture()};let ji=z.createFramebuffer(),Mi=z.createFramebuffer();this.copyTextureToTexture=function(m,M,L=null,O=null,G=0,ne=null){ne===null&&(G!==0?(br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=G,G=0):ne=0);let ae,T,D,K,X,q,te,le,de,Ce=m.isCompressedTexture?m.mipmaps[ne]:m.image;if(L!==null)ae=L.max.x-L.min.x,T=L.max.y-L.min.y,D=L.isBox3?L.max.z-L.min.z:1,K=L.min.x,X=L.min.y,q=L.isBox3?L.min.z:0;else{let qt=Math.pow(2,-G);ae=Math.floor(Ce.width*qt),T=Math.floor(Ce.height*qt),m.isDataArrayTexture?D=Ce.depth:m.isData3DTexture?D=Math.floor(Ce.depth*qt):D=1,K=0,X=0,q=0}O!==null?(te=O.x,le=O.y,de=O.z):(te=0,le=0,de=0);let Te=Ne.convert(M.format),Se=Ne.convert(M.type),ke;M.isData3DTexture?(Xe.setTexture3D(M,0),ke=z.TEXTURE_3D):M.isDataArrayTexture||M.isCompressedArrayTexture?(Xe.setTexture2DArray(M,0),ke=z.TEXTURE_2D_ARRAY):(Xe.setTexture2D(M,0),ke=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,M.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,M.unpackAlignment);let qe=z.getParameter(z.UNPACK_ROW_LENGTH),Rt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),we=z.getParameter(z.UNPACK_SKIP_PIXELS),ze=z.getParameter(z.UNPACK_SKIP_ROWS),en=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ce.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ce.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,K),z.pixelStorei(z.UNPACK_SKIP_ROWS,X),z.pixelStorei(z.UNPACK_SKIP_IMAGES,q);let ht=m.isDataArrayTexture||m.isData3DTexture,Dt=M.isDataArrayTexture||M.isData3DTexture;if(m.isDepthTexture){let qt=Ee.get(m),Ht=Ee.get(M),Yt=Ee.get(qt.__renderTarget),ni=Ee.get(Ht.__renderTarget);Re.bindFramebuffer(z.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Re.bindFramebuffer(z.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let bi=0;bi<D;bi++)ht&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ee.get(m).__webglTexture,G,q+bi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ee.get(M).__webglTexture,ne,de+bi)),z.blitFramebuffer(K,X,ae,T,te,le,ae,T,z.DEPTH_BUFFER_BIT,z.NEAREST);Re.bindFramebuffer(z.READ_FRAMEBUFFER,null),Re.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(G!==0||m.isRenderTargetTexture||Ee.has(m)){let qt=Ee.get(m),Ht=Ee.get(M);Re.bindFramebuffer(z.READ_FRAMEBUFFER,ji),Re.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mi);for(let Yt=0;Yt<D;Yt++)ht?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qt.__webglTexture,G,q+Yt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,qt.__webglTexture,G),Dt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ht.__webglTexture,ne,de+Yt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ht.__webglTexture,ne),G!==0?z.blitFramebuffer(K,X,ae,T,te,le,ae,T,z.COLOR_BUFFER_BIT,z.NEAREST):Dt?z.copyTexSubImage3D(ke,ne,te,le,de+Yt,K,X,ae,T):z.copyTexSubImage2D(ke,ne,te,le,K,X,ae,T);Re.bindFramebuffer(z.READ_FRAMEBUFFER,null),Re.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Dt?m.isDataTexture||m.isData3DTexture?z.texSubImage3D(ke,ne,te,le,de,ae,T,D,Te,Se,Ce.data):M.isCompressedArrayTexture?z.compressedTexSubImage3D(ke,ne,te,le,de,ae,T,D,Te,Ce.data):z.texSubImage3D(ke,ne,te,le,de,ae,T,D,Te,Se,Ce):m.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ne,te,le,ae,T,Te,Se,Ce.data):m.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ne,te,le,Ce.width,Ce.height,Te,Ce.data):z.texSubImage2D(z.TEXTURE_2D,ne,te,le,ae,T,Te,Se,Ce);z.pixelStorei(z.UNPACK_ROW_LENGTH,qe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Rt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,we),z.pixelStorei(z.UNPACK_SKIP_ROWS,ze),z.pixelStorei(z.UNPACK_SKIP_IMAGES,en),ne===0&&M.generateMipmaps&&z.generateMipmap(ke),Re.unbindTexture()},this.initRenderTarget=function(m){Ee.get(m).__webglFramebuffer===void 0&&Xe.setupRenderTarget(m)},this.initTexture=function(m){m.isCubeTexture?Xe.setTextureCube(m,0):m.isData3DTexture?Xe.setTexture3D(m,0):m.isDataArrayTexture||m.isCompressedArrayTexture?Xe.setTexture2DArray(m,0):Xe.setTexture2D(m,0),Re.unbindTexture()},this.resetState=function(){C=0,P=0,U=null,Re.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var x0={x:1630,y:1160},_0={x:3370,y:430},Us={x:1450,y:1320};function pu(i,e){if(!i||!e)return null;let t=[x0,_0].filter(x=>Math.hypot(x.x-i.x,x.y-i.y)<400).sort((x,_)=>Math.hypot(x.x-i.x,x.y-i.y)-Math.hypot(_.x-i.x,_.y-i.y))[0],n=0,r=1;if(t){let x=t.x-i.x,_=t.y-i.y;Math.abs(x)>Math.abs(_)?(n=Math.sign(x)||1,r=0):r=Math.sign(_)||1}let s=[0,280,320,360][e],o=[0,220,260,300][e],a=112,c={x:i.x-n*o/2,y:i.y-r*o/2},l=(x,_)=>({x:c.x+r*x+n*_,y:c.y-n*x+r*_}),h=(x,_,g,d)=>{let b=l(x,_);return{x:b.x,y:b.y,w:r?g:d,h:r?d:g}},u=[];if(e>=2){u.push(h(0,-o/2,s,10));for(let x of[-s/2,s/2])u.push(h(x,0,10,o))}if(e>=3){let x=(s-a)/2;for(let _ of[-1,1])u.push(h(_*(a/2+x/2),o/2,x,10))}let p=e===1?[-1,1].flatMap(x=>[-1,1].map(_=>({...l(x*(s/2-8),_*(o/2-8)),radius:6}))):[],f=[h(-s/2+53,-o/2+64,52,90)];return e>=3&&f.push(h(s/2-53,-o/2+64,52,90)),{center:c,width:s,depth:o,door:a,fx:n,fy:r,yaw:Math.atan2(n,r),floor:h(0,0,s,o),walls:u,posts:p,beds:f,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var y0=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],v0=["#e3b185","#be895f","#efc69d","#a67152"],M0=["#463b32","#24282b","#99673b","#c9a465"];function b0(i){let e={shirt:0,skin:0,hair:0,style:0};for(let[t,n]of[["shirt",6],["skin",4],["hair",4],["style",3]])Number.isInteger(i?.[t])&&i[t]>=0&&i[t]<n&&(e[t]=i[t]);return e}function za(i){let e=b0(i);return{shirt:y0[e.shirt],skin:v0[e.skin],hair:M0[e.hair],style:e.style}}var mu={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function gu(i,e){let t=Math.sin(e*Math.PI*4);return i==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:i==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:i==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:i==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:i==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var S0="assets/materials-v018/",xu=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],w0=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function _u(i){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[n,r,s,o]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(n,r,s,o,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function Oa(i){let e=new Map,t=new Map,n=0,r=0,s=new ws;for(let h of xu){let u=s.load(S0+h+".webp",()=>n++,void 0,()=>r++);u.colorSpace=It,u.wrapS=u.wrapT=_r,u.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),e.set(h,u)}function o(h,u="#ffffff",p=1,f=.035){let x=h+u+p+f;if(!t.has(x)){let _=e.get(h).clone();_.repeat.set(p,p);let g=new bt({color:u,map:_,bumpMap:_,bumpScale:f,roughness:h==="leaf"?.78:.93});e.get(h).addEventListener("dispose",()=>_.dispose());let d=e.get(h);g.userData.textureSource=d,t.set(x,g)}return t.get(x)}function a(h){return w0.has(h)?o("wood","#ded4c4",1,.045):h==="#e2dbc7"?o("plaster","#f8f4e7",1,.027):h==="#ba7655"?o("roof","#e4d6c7",2,.055):h==="#a7c4b7"?o("teal","#e7ede3",1,.035):h==="#92968b"||h==="#777a6b"?o("rock","#ddd9cf",1,.065):null}function c(){for(let h of t.values())h.userData.textureSource.image&&h.map.image!==h.userData.textureSource.image&&(h.map.source=h.userData.textureSource.source,h.map.needsUpdate=!0);for(let h of t.values())h.map.image&&!h.userData.uploaded&&(h.map.needsUpdate=!0,h.userData.uploaded=!0)}function l(h){h.colorSpace=Cn;let u=new bt({color:"#ffffff",map:h,roughness:1});return u.onBeforeCompile=p=>{p.uniforms.uSand={value:e.get("sand")},p.uniforms.uGrass={value:e.get("grass")},p.uniforms.uPaving={value:e.get("paving")},p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uSand; uniform sampler2D uGrass; uniform sampler2D uPaving;`),p.fragmentShader=p.fragmentShader.replace("#include <map_fragment>",`
        vec3 maskColor=texture2D(map,vMapUv).rgb;
        vec2 detailUV=vMapUv*vec2(57.5,36.25);
        float green=maskColor.g;
        float trail=maskColor.r;
        vec3 sand=texture2D(uSand,detailUV*1.4).rgb;
        vec3 grass=texture2D(uGrass,detailUV*1.15).rgb;
        vec3 paving=texture2D(uPaving,detailUV*.72).rgb;
        diffuseColor.rgb=sand*maskColor.b+paving*trail+grass*green;
        diffuseColor.rgb*=.94+.06*sin(vMapUv.x*170.0)*sin(vMapUv.y*155.0);`),p.fragmentShader=p.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        float relief=dot(texture2D(uSand,vMapUv*vec2(90.,57.)).rgb,vec3(.333));
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},u}return{textures:e,surface:o,forColor:a,ground:l,update:c,stats:()=>({loaded:n,failed:r,total:xu.length}),dispose(){for(let h of t.values())h.map.dispose(),h.dispose();for(let h of e.values())h.dispose()}}}function Ba({x:i,z:e,surface:t,yaw:n,pitch:r,mode:s="first",distance:o=4.8,bob:a=0}){let c=t+1.64+a;if(s==="first")return{position:new V(i,c,e),target:new V(i-Math.sin(n)*Math.cos(r),c-Math.sin(r),e-Math.cos(n)*Math.cos(r))};let l=new V(i,t+1.3,e);return{position:new V(i+Math.sin(n)*Math.cos(r)*o,l.y+.65+Math.sin(r)*o,e+Math.cos(n)*Math.cos(r)*o),target:l}}function uc(i,e,t,n){return!(t>0)||!(n>0)?i:i.lerp(e,1-Math.exp(-t*n))}function ka(i,e,t,{height:n=18,offsetX:r=-12,offsetZ:s=-8}={}){let o=Math.abs(i.shadow.camera.right-i.shadow.camera.left),a=i.shadow.mapSize.width,c=o>0&&a>0?o/a:0,l=c?Math.round(e/c)*c:e,h=c?Math.round(t/c)*c:t;return i.position.set(l+r,n,h+s),i.target.position.set(l,0,h),c}function yu(i,e,t,n,r){let s=(()=>{let _=90210;return()=>(_=Math.imul(_,1664525)+1013904223>>>0)/4294967296})(),o=new _t;o.setAttribute("position",new Qe([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),o.setAttribute("uv",new Qe([0,0,1,0,0,.5,1,.5,.5,1],2)),o.setIndex([0,1,2,1,3,2,2,3,4]),o.computeVertexNormals();let a=new bt({color:"#ffffff",side:At,roughness:1});a.defines={USE_UV:""};let c={value:0},l={value:new ft(0,0,0,0)};a.onBeforeCompile=_=>{_.uniforms.uWind=c,_.uniforms.uBase=l,_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),_.vertexShader=_.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),_.fragmentShader=_.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let h=r?2800:5500,u=new gt(o,a,h);u.receiveShadow=!0,u.frustumCulled=!1;let p=n.getContext("2d").getImageData(0,0,n.width,n.height).data,f=new mt,x=0;for(let _=0;_<h*8&&x<h;_++){let g=s()*4600,d=s()*2900,b=(Math.min(n.height-1,Math.floor(d/2900*n.height))*n.width+Math.min(n.width-1,Math.floor(g/4600*n.width)))*4;if(p[b+1]<p[b]+12||p[b+1]<85)continue;let E=g/t,y=d/t,R=e(E,y);R<.1||(f.position.set(E,R-.015,y),f.rotation.set(0,s()*Math.PI*2,0),f.scale.setScalar(.7+s()*.8),f.updateMatrix(),u.setMatrixAt(x,f.matrix),u.setColorAt(x,new Je().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),x++)}return u.count=x,i.add(u),{update(_,g){c.value=_,g?l.value.set(g.floor.x/t,g.floor.y/t,g.floor.w/(t*2)+.1,g.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){i.remove(u),o.dispose(),a.dispose(),u.dispose()}}}function vu(i,e,{cube:t,tube:n},r){let s=e.width/80,o=e.depth/80,a=e.wallHeight/80,c=e.roofRidge/80;for(let u of i.children)u.name==="floor"&&(u.material=r.surface("paving","#e5ded0",2,.045)),u.name==="wall"&&(u.material=r.surface("plaster","#f8f4e7",1,.025)),u.name==="roof"&&(u.material=r.surface("roof","#efe2d5",2,.045));for(let u of[-1,1]){let p=t(i,"#876742",[u*s/2,a-.09,0],[.13,.16,o+.18]);if(p.name="trim",e.walls.length){let f=t(i,"#a7c4b7",[u*(s/2+.064),1.55,-o*.16],[.02,.9,.7]);f.name="shutter";for(let x=0;x<8;x++)t(i,"#876742",[u*(s/2+.08),1.17+x*.11,-o*.16],[.025,.035,.69]);for(let x of[-o*.16-.39,-o*.16+.39])t(i,"#e2dbc7",[u*(s/2+.078),1.56,x],[.045,1.02,.065])}}let l=n(i,"#ba7655",[0,c+.02,0],[.09,o+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let h=t(i,"#e2dbc7",[0,a-.05,-o/2-.066],[s+.08,.16,.06]);return h.name="trim",i}var Rn=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),Yy=Object.freeze(Object.fromEntries(Rn.map(i=>[i.id,i])));function Mu(i,e){return!Number.isFinite(i)||!Number.isFinite(e)?null:Rn.find(t=>Math.hypot(i-t.x,e-t.z)<=t.radius)??null}function Xr(i,e){if(Number.isFinite(i.coastSeed)){let n=i.coastSeed;return .855+.07*Math.sin(e*2+n)+.045*Math.cos(e*3-n)+.025*Math.sin(e*7+n)}let t=i.x*.002+i.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function Zi(i,e,t){let n=(e-i.x)/i.radius,r=(t-i.z)/i.radius,s=Math.hypot(n,r);if(s>=1)return-.32;let o=Math.atan2(r,n),a=Xr(i,o),c=Math.max(0,Math.min(1,(a-s)/.12));if(s>a)return-.32*Math.min(1,(s-a)/.04);if(Number.isFinite(i.relief)){let f=(a-s)*i.radius/20,x=Math.min(1,f/18),_=Math.max(0,Math.min(1,(f-18)/85)),g=Math.exp(-((n+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((n-.36)**2*11+(r+.25)**2*8))*.42;return .005+x*.65+_*_*(3-2*_)*g*i.relief}let l=Math.max(0,Math.min(1,(.79-s)/.22)),h=l*l*(3-2*l),u=Math.exp(-((n+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((n-.36)**2*11+(r+.25)**2*8))*.42,p=i.biome==="highlands"?8.5:i.biome==="rainforest"?2.2:i.biome==="rocky"?1.6:.55;return .005+c*.35+h*u*p}function dc(i,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,Zi(i,i.x,i.z),0],n=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let h=0;h<=e;h++){let u=h/e*Math.PI*2,p=Number.isFinite(i.relief)?Xr(i,u)+.03:1.02,f=i.radius*p*l/s,x=Math.cos(u)*f,_=Math.sin(u)*f;t.push(x,Zi(i,i.x+x,i.z+_),_),n.push(.5+x/(i.radius*2.04),.5+_/(i.radius*2.04));let g=1+(l-1)*(e+1)+h;if(h!==e)if(l===1)r.push(0,g+1,g);else{let d=g-(e+1);r.push(d,g+1,g,d,d+1,g+1)}}let o=new _t;o.setAttribute("position",new Qe(t,3)),o.setAttribute("uv",new Qe(n,2)),o.setIndex(r),o.computeVertexNormals();let a=new bt({color:i.biome==="beach"?11779972:5538650,roughness:1,side:At}),c=new rt(o,a);return c.name="archipelago-"+i.id,c.position.set(i.x,0,i.z),c.receiveShadow=!0,c}function bu(i={}){let e=new Oe;e.name="archipelago-terrain";for(let t of Rn)e.add(dc(t,i));return e}function Ns(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new _t,l=0;for(let h=0;h<i.length;++h){let u=i[h],p=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let p=0;p<i.length;++p){let f=i[p].index;for(let x=0;x<f.count;++x)u.push(f.getX(x)+h);h+=i[p].attributes.position.count}c.setIndex(u)}for(let h in s){let u=Su(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<u;++p){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][p]);let x=Su(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function Su(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let o=new e(s),a=new zt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let p=0,f=h.count;p<f;p++)for(let x=0;x<t;x++){let _=h.getComponent(p,x);a.setComponent(p+u,x,_)}}else o.set(h.array,c);c+=h.count*t}return r!==void 0&&(a.gpuType=r),a}var Fs=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function Ji(i,e,t=Fs){return e==="home"&&t.some(n=>Math.abs(i.x-n.x)<n.w/2+7&&Math.abs(i.z-n.z)<n.d/2+7)}var fc=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function Va(i,{size:e=900,segments:t=72,coastSeeds:n=[]}={}){let r=Array.from({length:9},(c,l)=>new ft(...i[l]||[1e4,1e4,1,1])),s=new an({fog:!0,uniforms:{...Pa.clone(Me.fog),uTime:{value:0},uEye:{value:new V},uCoasts:{value:r},uCoastSeeds:{value:Array.from({length:9},(c,l)=>n[l]??-100)}},vertexShader:`uniform float uTime;varying vec3 vWater;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;
    p.y+=sin(dot(p.xz,vec2(.41,.19))+uTime*.75)*.024+sin(dot(p.xz,vec2(-.17,.36))-uTime*.58)*.019;
    vWater=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=viewMatrix*vec4(vWater,1.);gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,fragmentShader:`uniform float uTime;uniform vec3 uEye;uniform vec4 uCoasts[9];uniform float uCoastSeeds[9];varying vec3 vWater;
    #include <fog_pars_fragment>
    ${fc}
    float wave(vec2 p){return sin(dot(p,vec2(.7,.3))+uTime*.8)*.046+
      sin(dot(p,vec2(-.43,.81))-uTime*.62)*.038+sin(dot(p,vec2(1.36,.67))+uTime*1.12)*.016+
      (fbm21(p*1.6+vec2(uTime*.09,-uTime*.07))-.5)*.10;}
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
    }`}),o=new fn(e,e,t,t);o.rotateX(-Math.PI/2);let a=new rt(o,s);return a.name="tropical-ocean",a.position.y=-.045,{mesh:a,update(c,l){s.uniforms.uTime.value=c,s.uniforms.uEye.value.copy(l)},dispose(){o.dispose(),s.dispose()}}}function Ga(i=420){let e=new an({side:Xt,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying vec3 vSky;${fc}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3+vec2(uTime*.006,uTime*.0025);float n=fbm21(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`}),t=new rt(new ln(i,32,20),e);return t.name="tropical-sky",t.renderOrder=-10,t.frustumCulled=!1,t}function Ha(i,e){let t=new bt({roughness:1,color:"#ffffff",vertexColors:!0});return t.onBeforeCompile=n=>{Object.assign(n.uniforms,{uGrass:{value:i.textures.get("grass")},uSand:{value:i.textures.get("sand")},uRock:{value:i.textures.get("rock")}}),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${fc}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=fbm21(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38);
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},t.customProgramCacheKey=()=>`tropical-island-${e}`,t}function T0(i=14){let e=[],t=[],n=[],r=(o,a,c,l)=>{let h=a*2.2,u=Math.sin(a*Math.PI)*.55-a*a*.95;return[Math.sin(o)*h+Math.cos(o)*l*c,u-l*.17,Math.cos(o)*h-Math.sin(o)*l*c]};for(let o=0;o<9;o++){let a=o*Math.PI*2/9;for(let c=1;c<i;c++)for(let l of[-1,1]){let h=c/i,u=Math.sin(h*Math.PI)*.44,p=e.length/3;e.push(...r(a,h-.03,l,.012),...r(a,h-.09,l,u),...r(a,h+.025,l,u*.87),...r(a,h+.03,l,.012)),t.push(h,0,h,.9,h+.03,1,h+.03,0),n.push(p,p+1,p+2,p,p+2,p+3)}}let s=new _t;return s.setAttribute("position",new Qe(e,3)),s.setAttribute("uv",new Qe(t,2)),s.setIndex(n),s.computeVertexNormals(),s}var Vt=(i,e=0)=>{let t=Math.sin((i+1)*12.9898+(e+1)*78.233)*43758.5453;return t-Math.floor(t)};function Wa(i,e,{scale:t,height:n,surfaces:r,small:s=!1,clear:o=()=>!1,dense:a=!1}={}){let c=new Tt(.085,.16,1,8,6);c.translate(0,.5,0);let l=c.attributes.position;for(let y=0;y<l.count;y++)l.setX(y,l.getX(y)+l.getY(y)**2*.2);c.computeVertexNormals();let h=r.surface("wood","#bc9c71",2,.03),u=r.surface("leaf","#9cb384",1,.01).clone();u.side=At;let p=T0(s?9:12),f=[],x=[],_=new mt,g=0;for(let y of e){let R=[];for(let P=0;P<(a?y.id==="home"?s?700:1500:s?280:650:s?22:42);P++){let U=P+y.x*.013+y.z*.017,w=P*2.39996+y.x*.001+(Vt(U,0)-.5)*.72,S=a?Math.min(.93,Math.max(.12,Math.sqrt(P*.6180339%1)*.91+(Vt(U,1)-.5)*.09)):Math.min(.91,.34+P%7*.075+(Vt(U,1)-.5)*.08),A=y.radius*S,N=y.x+Math.sin(w)*A,k=y.z+Math.cos(w)*A;o(y,N,k)||n(N,k)<.32||R.push({x:N/t,z:k/t,y:n(N,k),a:w,h:3.45+Vt(U,2)*2.15,size:.7+Vt(U,3)*.43,leanX:(Vt(U,4)-.5)*.12,leanZ:(Vt(U,5)-.5)*.14,index:g++})}if(!R.length)continue;let C=Array.from({length:4},()=>[]);R.forEach(P=>C[(P.x>=y.x/t?1:0)+(P.z>=y.z/t?2:0)].push(P)),C.forEach((P,U)=>{if(!P.length)return;let w=new gt(c,h,P.length),S=new gt(p,u,P.length);w.name=f.length?`grove-trunks-${y.id}-${U+1}`:"grove-trunks",S.name=x.length?`grove-fronds-${y.id}-${U+1}`:"grove-fronds";for(let A=0;A<P.length;A++){let N=P[A];_.position.set(N.x,N.y,N.z),_.rotation.set(N.leanX,N.a,N.leanZ),_.scale.set(N.size,N.h,N.size),_.updateMatrix(),w.setMatrixAt(A,_.matrix),_.position.set(N.x+.2*N.size*Math.cos(N.a),N.y+N.h,N.z-.2*N.size*Math.sin(N.a)),_.rotation.set(N.leanX*.35,N.a+Vt(N.index,6)*Math.PI*.35,N.leanZ*.35),_.scale.setScalar(N.size),_.updateMatrix(),S.setMatrixAt(A,_.matrix),S.setColorAt(A,new Je().setHSL(.245+Vt(N.index,7)*.065,.22+Vt(N.index,8)*.13,.59+Vt(N.index,9)*.12))}for(let A of[w,S])A.userData.cullingRegion={island:y.id,sector:U+1},A.castShadow=A.receiveShadow=!0,A.instanceMatrix.needsUpdate=!0,A.computeBoundingSphere(),i.add(A);f.push(w),x.push(S)})}let d=new Ui(1,1),b=r.surface("rock","#a9aaa0",2,.08),E=[];for(let y of e){let R=[];for(let P=0;P<(s?14:24);P++){let U=P+y.x*.019+y.z*.023,w=P*2.399+.6+(Vt(U,10)-.5)*.62,S=y.radius*(.84+Vt(U,11)*.1),A=y.x+Math.sin(w)*S,N=y.z+Math.cos(w)*S;o(y,A,N)||R.push({x:A/t,y:n(A,N)-.1,z:N/t,a:w,j:P,seed:U})}if(!R.length)continue;let C=new gt(d,b,R.length);C.name=E.length?"shore-rocks-"+y.id:"shore-rocks";for(let P=0;P<R.length;P++){let U=R[P];_.position.set(U.x,U.y,U.z),_.rotation.set(Vt(U.seed,12)*1.2,U.a,Vt(U.seed,13)*1.1),_.scale.set(.27+Vt(U.seed,14)*.5,.2+Vt(U.seed,15)*.43,.31+Vt(U.seed,16)*.53),_.updateMatrix(),C.setMatrixAt(P,_.matrix)}C.castShadow=C.receiveShadow=!0,C.instanceMatrix.needsUpdate=!0,C.computeBoundingSphere(),i.add(C),E.push(C)}return{trees:f[0],foliage:x[0],treeBatches:f,foliageBatches:x,rocks:E[0],rockBatches:E}}function Xa(i,{scale:e,height:t,surfaces:n,helpers:r,village:s=Fs,paths:o,marketPoint:a={x:290,z:-30}}){let{cube:c,tube:l,ell:h}=r,u=[];function p(A){let N=new Map;A.updateMatrix();for(let k of[...A.children])if(k.isMesh){k.updateMatrix();let F=k.geometry.clone().applyMatrix4(k.matrix);N.has(k.material)||N.set(k.material,[]),N.get(k.material).push(F),A.remove(k)}for(let[k,F]of N){let B=Ns(F,!1);F.forEach($=>$.dispose());let W=new rt(B,k);W.castShadow=W.receiveShadow=!0,A.add(W)}}function f(A,N){let k=new Map,F=0;i.updateMatrixWorld(!0),N.updateMatrixWorld(!0);let B=new xt().copy(N.matrixWorld).invert(),W=new xt;for(let $ of A)for(let Y of[...$.children])if(Y.isMesh){Y.updateMatrixWorld(!0),W.multiplyMatrices(B,Y.matrixWorld);let ie=Y.geometry.clone().applyMatrix4(W);k.has(Y.material)||k.set(Y.material,[]),k.get(Y.material).push(ie),F++,$.remove(Y),Y.geometry.dispose()}for(let[$,Y]of k){let ie=Ns(Y,!1);Y.forEach(_e=>_e.dispose()),ie.computeBoundingSphere();let se=new rt(ie,$);se.castShadow=se.receiveShadow=!0,N.add(se)}return{sourceBatches:F,materialBatches:N.children.length}}function x(A,N=i,k=!0,F=0){let B=new Oe;B.name="village-house",N.add(B),B.position.set(k?A.x/e:A.x,k?t(A.x,A.z):0,k?A.z/e:A.z),B.rotation.y=A.facing??(A.z>60?Math.PI:0);let W=A.w/e,$=A.d/e,Y=A.h,ie=c(B,A.color,[0,Y/2,0],[W,Y,$]);ie.material=n.surface("plaster",A.color,2,.035);let se=n.surface("roof","#d5bbab",2,.065);for(let J of[-1,1]){let j=c(B,"#ba7655",[J*W/4,Y+.43,0],[Math.hypot(W/2+.25,.85),.13,$+.5]);j.rotation.z=-J*Math.atan2(.85,W/2+.25),j.material=se,c(B,"#a75f45",[J*(W/2+.13),Y+.01,0],[.14,.22,$+.58])}let _e=l(B,"#a75f45",[0,Y+.86,0],[.12,$+.62,.12]);_e.rotation.x=Math.PI/2;for(let J of[.17,Y*.52,Y-.16])c(B,"#e2dbc7",[0,J,$/2+.035],[W+.16,.14,.1]);let Le=Y>5?2:1;for(let J=0;J<Le;J++)for(let j of[-W*.31,W*.31]){let me=1.5+J*2.35,Ue=$/2+.08,ue=c(B,"#415d63",[j,me,Ue],[.75,1.2,.05]);ue.material.roughness=.24,ue.material.metalness=.1,c(B,"#e2dbc7",[j,me,Ue+.045],[.065,1.15,.075]),c(B,"#e2dbc7",[j,me,Ue+.046],[.7,.065,.076]);for(let Ge of[-1,1]){let lt=c(B,A.shutter,[j+Ge*.56,me,Ue+.03],[.34,1.3,.07]);lt.rotation.y=Ge*.24;for(let z=0;z<9;z++)c(B,"#876742",[j+Ge*.56,me-.52+z*.13,Ue+.085],[.33,.024,.04])}if(c(B,"#e2dbc7",[j,me-.68,Ue],[1.7,.1,.16]),c(B,"#e2dbc7",[j,me+.68,Ue],[1.7,.13,.15]),J===0){let Ge=c(B,"#876742",[j,.79,$/2+.25],[1.28,.2,.3]);if(Ge.rotation.x=-.04,h)for(let lt=-2;lt<=2;lt++){let z=h(B,lt%2?"#6f8f58":"#88a866",[j+lt*.22,.99+Math.abs(lt)*.025,$/2+.27],[.17,.31,.15]);z.rotation.z=lt*.14}if(Le===1){let lt=c(B,A.shutter,[j,2.32,$/2+.46],[1.55,.08,.82]);lt.rotation.x=-.15,c(B,A.shutter,[j,2.2,$/2+.83],[1.55,.17,.07])}}}c(B,"#5a4b3d",[0,1.05,$/2+.06],[.78,2.1,.1]);for(let J of[.55,1.42])for(let j of[-.19,.19])c(B,"#745f4c",[j,J,$/2+.125],[.29,.6,.045]);for(let J of[-.48,.48])c(B,"#e2dbc7",[J,1.08,$/2+.11],[.16,2.22,.18]);c(B,"#e2dbc7",[0,2.18,$/2+.11],[1.1,.16,.18]),c(B,"#c9baa1",[0,.07,$/2+.34],[1.16,.14,.58]),h&&h(B,"#caa457",[.27,1.04,$/2+.19],[.055,.055,.035]);let Fe=(F%2?-1:1)*W*.42,tt=$/2+.55,Be=l(B,"#e2dbc7",[Fe,2.91,$/2+.34],[.035,.7,.035]);Be.rotation.x=Math.PI/2,c(B,A.shutter,[Fe,2.62,tt],[.09,.56,.64]);for(let J of[-1,1]){let j=c(B,"#e2dbc7",[Fe+J*.052,2.62,tt],[.018,.22,.24]);j.rotation.x=(F%3-1)*.22}if(Le===2){c(B,"#e2dbc7",[0,2.75,$/2+.48],[W+.15,.18,.9]);for(let J=0;J<=10;J++)l(B,"#e2dbc7",[-W/2+J*W/10,3.18,$/2+.84],[.034,.76,.034]);c(B,"#e2dbc7",[0,3.58,$/2+.84],[W+.17,.08,.1])}for(let J of[-1,1])for(let j=0;j<Le;j++)for(let me of[-$*.26,$*.26])c(B,A.shutter,[J*(W/2+.03),1.5+j*2.35,me],[.06,1.22,.8]),c(B,"#e2dbc7",[J*(W/2+.07),.82+j*2.35,me],[.16,.1,1.05]),c(B,"#e2dbc7",[J*(W/2+.07),2.18+j*2.35,me],[.16,.12,1.05]);return B.userData.facadeDetails={planters:2,awnings:Le===1?2:0,balcony:Le===2,windowPanes:Le*8,doorPanels:4,doorway:!0,ridgeCaps:1,eaveFascias:2,hangingSigns:1,signMarks:2,signClearance:!0},p(B),u.push(B),B}s.forEach((A,N)=>x(A,i,!0,N));let _=new Oe;_.name="village-buildings",i.add(_),_.userData.batchDetails={sourceHouses:u.length,...f(u,_)},_.userData.cameraBlocker=!0;let g=new Oe;g.name="village-overhead-laundry",i.add(g);let d=["#bd6f53","#e8d99e","#587e7c","#73868b"],b=[...s].sort((A,N)=>A.z-N.z),E=Math.ceil(b.length/2),y=0,R=0;for(let A of[b.slice(0,E),b.slice(E)]){let N=[...A].sort((k,F)=>k.x-F.x);for(let k=1;k<N.length;k++){let F=N[k-1],B=N[k],W=F.x+F.w/2,$=B.x-B.w/2;if($<=W)continue;let Y=(W+$)/2,ie=(F.z+B.z)/2,se=Math.max(t(Y,ie)+3.35,3.55),_e=($-W)/e,Le=l(g,"#5a4b3d",[Y/e,se,ie/e],[.012,_e,.012]);Le.rotation.z=Math.PI/2,y++;for(let Fe=0;Fe<3;Fe++){let tt=(W+($-W)*(Fe+1)/4)/e,Be=d[(y+Fe)%d.length],J=c(g,Be,[tt,se-.24-Fe%2*.05,ie/e],[.46,.48+Fe%2*.1,.025]);J.rotation.z=(Fe-1)*.06,R++}}}g.userData.laundryDetails={lines:y,garments:R,clearance:!0},p(g);function C(A,N,k=!1){let F=[],B=[],W=[],$=0;for(let se=0;se<A.length;se++){let _e=A[Math.max(0,se-1)],Le=A[Math.min(A.length-1,se+1)],Fe=A[se],tt=Le.x-_e.x,Be=Le.z-_e.z,J=Math.hypot(tt,Be)||1;se&&($+=Math.hypot(Fe.x-A[se-1].x,Fe.z-A[se-1].z)/e);for(let j of[-1,1]){let me=Fe.x-Be/J*N/2*j,Ue=Fe.z+tt/J*N/2*j;F.push(me/e,t(me,Ue)+.018,Ue/e),B.push((j+1)/2*N/e,$)}if(se){let j=se*2;W.push(j-2,j-1,j,j-1,j+1,j)}}let Y=new _t;Y.setAttribute("position",new Qe(F,3)),Y.setAttribute("uv",new Qe(B,2)),Y.setIndex(W),Y.computeVertexNormals();let ie=new rt(Y,n.surface("paving","#ded9c9",.75,.045));if(ie.name="village-path",ie.receiveShadow=!0,i.add(ie),k){let se=Math.max(4,N*.08),_e=new Wt(1,1,1),Le=new gt(_e,n.surface("rock","#dad4c6",1.2,.025),(A.length-1)*2),Fe=new mt;Le.name="village-curb";let tt=0;for(let Be=1;Be<A.length;Be++){let J=A[Be-1],j=A[Be],me=j.x-J.x,Ue=j.z-J.z,ue=Math.hypot(me,Ue),Ge=-Ue/ue,lt=me/ue;for(let z of[-1,1]){let ut=(J.x+j.x)/2+Ge*(N/2+se/2)*z,Ye=(J.z+j.z)/2+lt*(N/2+se/2)*z;Fe.position.set(ut/e,t(ut,Ye)+.065,Ye/e),Fe.rotation.set(0,Math.atan2(me,Ue),0),Fe.scale.set(se/e,.1,ue/e+.025),Fe.updateMatrix(),Le.setMatrixAt(tt++,Fe.matrix)}}Le.castShadow=Le.receiveShadow=!0,Le.instanceMatrix.needsUpdate=!0,Le.computeBoundingSphere(),i.add(Le)}}let P=[];for(let A of o||[{points:Array.from({length:31},(N,k)=>({x:385-k*21,z:36+Math.sin(k*.19)*9})),width:55,curb:!0},{points:Array.from({length:15},(N,k)=>({x:23,z:-280+k*39})),width:40,curb:!0}]){let N=[A.points[0]];for(let k=1;k<A.points.length;k++){let F=A.points[k-1],B=A.points[k],W=Math.ceil(Math.hypot(B.x-F.x,B.z-F.z)/30);for(let $=1;$<=W;$++)N.push({x:F.x+(B.x-F.x)*$/W,z:F.z+(B.z-F.z)*$/W})}if(C(N,A.width,A.curb),A.curb)for(let k=3;k<A.points.length-3;k+=6){let F=A.points[k-1],B=A.points[k+1],W=A.points[k],$=B.x-F.x,Y=B.z-F.z,ie=Math.hypot($,Y)||1,se=Math.floor(k/6)%2?1:-1,_e=A.width/2+9,Le=W.x-Y/ie*_e*se,Fe=W.z+$/ie*_e*se;P.push({x:Le/e,y:t(Le,Fe),z:Fe/e})}}if(P.length){let A=new Tt(1,1,1,10),N=new ln(1,12,8),k=new mt,F=new gt(A,new bt({color:"#394447",roughness:.62,metalness:.38}),P.length),B=new gt(N,new bt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34}),P.length);F.name="village-lamp-posts",B.name="village-lamp-globes";for(let W=0;W<P.length;W++){let $=P[W];k.position.set($.x,$.y+1.35,$.z),k.scale.set(.065,2.7,.065),k.updateMatrix(),F.setMatrixAt(W,k.matrix),k.position.set($.x,$.y+2.76,$.z),k.scale.set(.18,.22,.18),k.updateMatrix(),B.setMatrixAt(W,k.matrix)}F.castShadow=F.receiveShadow=!0,B.castShadow=!1,B.receiveShadow=!0;for(let W of[F,B])W.instanceMatrix.needsUpdate=!0,W.computeBoundingSphere(),i.add(W)}let U=new Oe;U.name="harbor-market",U.position.set(a.x/e,t(a.x,a.z),a.z/e),i.add(U);for(let A of[-1.4,1.4])for(let N of[-.6,.6])l(U,"#876742",[A,1.2,N],[.045,2.4,.045]);let w=c(U,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);w.rotation.x=.07;for(let A=0;A<6;A++){let N=A%2?"#f3dfbe":"#bd6f53",k=(A-2.5)*.53,F=c(U,N,[k,2.395,0],[.53,.035,1.76]);F.rotation.x=.07,c(U,N,[k,2.27,.92],[.49,.18,.055])}c(U,"#a98961",[0,.7,0],[2.8,.15,.9]);let S=["#ce5949","#e6b64d","#709a55"];for(let A=0;A<5;A++){let N=(A-2)*.5;if(c(U,"#a68854",[N,.88,0],[.43,.2,.68]),h)for(let k=0;k<3;k++)h(U,S[(A+k)%S.length],[N+(k-1)*.11,1.05,k%2?-.11:.11],[.075,.085,.075])}return U.userData.marketDetails={canopyStripes:6,valances:6,produce:15},p(U),{building:x,houses:u,buildings:_}}var Ke=20;var jt=Rn.map((i,e)=>({...i,x:i.x*16,z:i.z*16,dock:{x:i.dock.x*16,z:i.dock.z*16},radius:i.id==="home"?9e3:i.radius*16,coastSeed:1.3+e*1.7,relief:i.id==="home"?24:i.biome==="highlands"?85:i.biome==="rainforest"?42:i.biome==="rocky"?28:12})),mc=Object.fromEntries(jt.map(i=>[i.id,i])),Zr={minX:Math.min(...jt.map(i=>i.x-i.radius))-1600,maxX:Math.max(...jt.map(i=>i.x+i.radius))+1600,minZ:Math.min(...jt.map(i=>i.z-i.radius))-1600,maxZ:Math.max(...jt.map(i=>i.z+i.radius))+1600},wu=(i,e)=>jt.find(t=>Math.hypot(i-t.x,e-t.z)<t.radius)||null,ct=Object.fromEntries(jt.map((i,e)=>{let t=Rn[e],n=Math.hypot(t.dock.x-t.x,t.dock.z-t.z),r=(t.dock.x-t.x)/n,s=(t.dock.z-t.z)/n,o=i.radius*Xr(i,Math.atan2(s,r)),a=c=>({x:i.x+r*c,z:i.z+s*c});return[i.id,{id:i.id,...a(o+320),ux:r,uz:s,land:a(o-320),end:a(o+240),shore:a(o+200),width:38,deck:.72}]})),Yr={x:ct.home.land.x-385,z:ct.home.land.z-40},$i=Fs.map(i=>({...i,x:i.x+Yr.x,z:i.z+Yr.z,facing:i.z>60?Math.PI:0})),qr=(i,e)=>({x:i+Yr.x,z:e+Yr.z}),zs=[{width:55,curb:!0,points:Array.from({length:31},(i,e)=>e===0?{...ct.home.land}:qr(385-e*21,36+Math.sin(e*.19)*9))},{width:40,curb:!0,points:Array.from({length:15},(i,e)=>qr(23,-280+e*39))},{width:36,points:[qr(-245,40),qr(-600,30),{x:mc.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}],Tu=qr(290,-30),Pt={x:ct.fortress.land.x-ct.fortress.ux*800,z:ct.fortress.land.z-ct.fortress.uz*800},Eu={x:Pt.x-115,z:Pt.z+145},et={pump:qr(330,65),cave:{x:ct.jungle.land.x-ct.jungle.ux*700,z:ct.jungle.land.z-ct.jungle.uz*700},estate:{x:Pt.x,z:Pt.z+102},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}};et.supply={x:et.cave.x+150,z:et.cave.z-105};var E0=[{id:"gate",area:null,...Eu,hp:2},{id:"patrol",area:null,x:Pt.x+110,z:Pt.z+85,hp:2},{id:"hall",area:"estate",x:-65,z:15,hp:2},{id:"boss",area:"estate",x:0,z:-60,hp:3}];function pc(i,e,t){return t=Math.max(0,Math.min(1,t)),t=t*t*(3-2*t),i+(e-i)*t}function Ki(i,e,t=wu(i,e)){if(!t)return-.32;let n=Zi(t,i,e);if(n<=.01)return n;if(t.id==="home"){let r=Math.hypot(i-Yr.x+80,e-Yr.z);r<820&&(n=pc(.68,n,(r-470)/350))}if(t.id==="fortress"){let r=Math.max(Math.abs(i-Pt.x),Math.abs(e-Pt.z));r<400&&(n=pc(.85,n,(r-180)/220))}if(t.id==="jungle"){let r=Math.hypot(i-et.cave.x,e-et.cave.z);r<230&&(n=pc(1.2,n,(r-100)/130))}return n}function gc(i,e,t){for(let n of t?[ct[t]]:Object.values(ct)){if(!n)continue;let r=i-n.land.x,s=e-n.land.z,o=r*n.ux+s*n.uz,a=r*n.uz-s*n.ux,c=Math.hypot(n.end.x-n.land.x,n.end.z-n.land.z);if(o>=-.5&&o<=c+.5&&Math.abs(a)<=n.width/2){let l=Ki(n.land.x,n.land.z);return{dock:n,height:l+(n.deck-l)*Math.max(0,Math.min(1,o/c))}}}return null}function Fn(i,e){return gc(i,e)?.height??Ki(i,e)}function qa(i,e){return zs.some(t=>t.points.some((n,r)=>{if(!r)return!1;let s=t.points[r-1],o=n.x-s.x,a=n.z-s.z,c=Math.max(0,Math.min(1,((i-s.x)*o+(e-s.z)*a)/(o*o+a*a)));return Math.hypot(i-s.x-o*c,e-s.z-a*c)<t.width/2+35}))}var ov=Object.fromEntries(Rn.map(i=>{let e=Math.hypot(i.dock.x-i.x,i.dock.z-i.z),t=(i.dock.x-i.x)/e,n=(i.dock.z-i.z)/e;return[i.id,{x:i.x+t*i.radius*1.06,z:i.z+n*i.radius*1.06,shore:{x:i.x+t*i.radius*.84,z:i.z+n*i.radius*.84}}]}));var Jr={seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};function Au(i,{cube:e,ell:t,mat:n}){let r=new Oe;r.name="campaign-boat",i.add(r),t(r,"#233f52",[0,.05,0],[.85,.36,1.9]),t(r,"#dedbd0",[0,.22,0],[.8,.23,1.85]);let s=e(r,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]);s.name="boat-deck";let o=e(r,"#3b5355",[0,.57,Jr.seatZ],[.92,.3,.48]);o.name="boat-seat",e(r,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let a=new rt(new Wt(1.2,.48,.025),new bs({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));a.position.set(0,1.15,.68),r.add(a);let c=new rt(new Kn(.2,.026,8,20),n("#2e3538"));c.name="boat-wheel",c.position.set(0,1.05,.28),r.add(c);let l=new Tt(1,1,1,8),h=new gt(l,n("#d6dedc"),10),u=new mt;h.name="boat-rails";let p=0;for(let b of[-.68,.68]){for(let E of[.15,.85,1.55])u.position.set(b,.75,E),u.rotation.set(0,0,0),u.scale.set(.025,.5,.025),u.updateMatrix(),h.setMatrixAt(p++,u.matrix);for(let E of[.86,1.01])u.position.set(b,E,.85),u.rotation.set(Math.PI/2,0,0),u.scale.set(.025,1.4,.025),u.updateMatrix(),h.setMatrixAt(p++,u.matrix)}h.castShadow=!0,h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere(),r.add(h);let f=new bt({color:"#b7d6d8",emissive:"#31545a",emissiveIntensity:.38,roughness:.28}),x=new gt(new Tt(.1,.1,.03,16),f,3);x.name="boat-gauges";for(let b=0;b<3;b++)u.position.set((b-1)*.28,.91,.3),u.rotation.set(Math.PI/2,0,0),u.scale.set(b===1?1:.82,b===1?1:.82,1),u.updateMatrix(),x.setMatrixAt(b,u.matrix);x.instanceMatrix.needsUpdate=!0,x.computeBoundingSphere(),r.add(x);let _=t(r,"#d84e46",[-.65,.79,.94],[.075,.075,.075]),g=t(r,"#52b878",[.65,.79,.94],[.075,.075,.075]);_.name="boat-port-light",g.name="boat-starboard-light",_.material=new bt({color:"#d84e46",emissive:"#b32b25",emissiveIntensity:.9}),g.material=new bt({color:"#52b878",emissive:"#238547",emissiveIntensity:.9}),e(r,"#303b40",[0,.35,-1.75],[.42,.6,.38]),e(r,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let d=new rt(new fn(1.5,5),new on({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));return d.rotation.x=-Math.PI/2,d.position.set(0,.03,-3.3),r.add(d),r.userData.boatDetails={rails:10,gauges:3,navigationLights:2},{boat:r,wake:d}}function Cu(i,e){e.add(i.root),i.root.position.set(0,0,Jr.seatZ),i.root.rotation.set(0,0,0),i.rig.rotation.set(0,0,0),i.hips.position.y=Jr.hips;for(let t of i.arms)t.arm.rotation.x=-.85,t.arm.rotation.z=-t.side*.18,t.forearm.rotation.x=-.72;for(let t of i.legs)t.thigh.rotation.x=-1.68,t.calf.rotation.x=1.68,t.shoe.rotation.x=0}var xi=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);var ei=Array.from({length:5},(i,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2}));function A0(i){return Object.values(ct).filter(e=>xi(e,i.p)<125).sort((e,t)=>xi(e,i.p)-xi(t,i.p))[0]}function C0(i){if(i.interior==="cave")return[{id:"paper",...et.paper,label:i.paper?i.gun?"supplies":"take-gun":"move-paper"},{id:"cave-exit",...et.caveExit,label:"leave-cave"}];if(i.interior==="estate")return[{id:"key",...et.key,label:"take-key"},{id:"stairs",...et.stairs,label:"cellar"},{id:"estate-exit",...et.estateExit,label:"leave-estate"}];if(i.interior==="cellar")return[...ei.filter(n=>!i.released.includes(n.id)).map(n=>({...n,id:"cell-"+n.id,label:"free-person"})),{id:"cellar-exit",...et.cellarExit,label:"upstairs"}];if(i.boat){let n=A0(i);return n?[{...n,id:"dock-"+n.id,label:"dock"}]:[]}let e=ct[i.island],t=[{...e.shore,id:"boat",label:i.released.length===5&&!i.boarded?"board-group":"boat"}];if(i.island==="home"&&t.push({id:"pump",...et.pump,label:"refuel"}),i.island==="jungle"&&t.push({id:"cave",...et.cave,label:"enter-cave"},{id:"supply",...et.supply,label:"supplies"}),i.island==="fortress"&&t.push({id:"estate",...et.estate,label:"enter-estate"}),["highlands","smugglers","paradise"].includes(i.island)){let n=mc[i.island];t.push({id:"supplies",x:n.x,z:n.z,label:"supplies"})}return t}function Ru(i){return C0(i).filter(e=>xi(e,i.p)<(e.id.startsWith("cell-")?85:e.id.startsWith("dock-")?125:65)).sort((e,t)=>xi(e,i.p)-xi(t,i.p))[0]||null}function R0(i){if(i.complete)return{key:"complete",target:null};if(!i.docked)return{key:"dock-goal",target:ct.home};if(!i.tanked)return{key:"fuel-goal",target:i.boat?ct.home:et.pump};if(!i.gun)return i.interior==="cave"?{key:i.paper?"gun-goal":"paper-goal",target:et.paper}:{key:"cave-goal",target:i.boat?ct.jungle:i.island==="jungle"?et.cave:ct[i.island].shore};if(i.interior==="cave")return{key:"exit-cave-goal",target:et.caveExit};if(!i.key){if(i.interior==="estate"){let e=i.guards.find(t=>t.id==="boss");return{key:e.hp>0?"boss-goal":"key-goal",target:e.hp>0?e:et.key}}return{key:"estate-goal",target:i.boat?ct.fortress:i.island==="fortress"?et.estate:ct[i.island].shore}}return i.released.length<5?i.interior==="cellar"?{key:"people-goal",target:ei.find(e=>!i.released.includes(e.id))}:{key:"cellar-goal",target:i.interior==="estate"?et.stairs:i.boat?ct.fortress:et.estate}:i.interior?{key:"escort-goal",target:i.interior==="cellar"?et.cellarExit:et.estateExit}:i.boarded?{key:"home-goal",target:i.boat?ct.home:i.island==="home"?ct.home.shore:ct[i.island].shore}:{key:"boat-goal",target:ct.fortress.shore}}function Os(i){let e=R0(i);if(i.boat||i.interior||!e.target)return e;let t=ct[i.island],n=!!gc(i.p.x,i.p.z,i.island);if(e.target===t.shore){if(!n&&xi(i.p,t.land)>65)return{...e,target:t.land}}else if(n&&xi(i.p,t.land)>45)return{...e,target:t.land};return e}function xc(i,e,t,n,r){let s=e.interior?1.8:e.boat?.65:1.3;if(i.fillStyle=e.interior?"#25312d":"#176475",i.fillRect(0,0,t,n),i.save(),i.translate(t/2-e.p.x*s,n/2-e.p.z*s),i.scale(s,s),e.interior){if(i.fillStyle="#6f7568",i.fillRect(-115,-125,230,310),i.strokeStyle="#beb99e",i.lineWidth=8,i.strokeRect(-115,-125,230,310),e.interior==="cave"&&(i.fillStyle="#967756",i.fillRect(-25,-60,50,35),i.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||i.fillRect(-17,-55,34,22)),e.interior==="estate"&&(i.fillStyle="#9b7751",i.fillRect(-45,-105,90,25),i.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&i.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of ei)i.strokeStyle="#bac6bf",e.released.includes(l.id)||i.strokeRect(l.x-18,-112,36,80)}else{for(let l of jt){a(l,1,"#398b8b",-4*Ke),a(l,1,"#d9cba2"),a(l,1,l.biome==="highlands"?"#8f9882":"#759575",18*Ke);for(let u=0;u<26;u++){let p=u*2.39996+l.x*.001,f=l.radius*(.36+u%7*.075),x=l.x+Math.sin(p)*f,_=l.z+Math.cos(p)*f;if(!(l.id==="home"&&(Ji({x,z:_},l.id,$i)||qa(x,_)))&&!(l.id==="fortress"&&Math.abs(x-Pt.x)<125&&Math.abs(_-Pt.z)<155)){i.strokeStyle="#365e49",i.lineWidth=5;for(let g=0;g<7;g++){let d=g*Math.PI*2/7;i.beginPath(),i.moveTo(x,_),i.quadraticCurveTo(x+Math.sin(d+.25)*13,_+Math.cos(d+.25)*13,x+Math.sin(d)*25,_+Math.cos(d)*25),i.stroke()}}}i.fillStyle="#fff4cc",i.font="18px system-ui",i.textAlign="center",i.fillText(r(l.id),l.x,l.z-l.radius*.58);let h=ct[l.id];i.strokeStyle="#a2865b",i.lineWidth=h.width,i.beginPath(),i.moveTo(h.land.x,h.land.z),i.lineTo(h.end.x,h.end.z),i.stroke()}for(let l of zs)i.strokeStyle="#b7baa5",i.lineWidth=l.width,i.beginPath(),l.points.forEach((h,u)=>u?i.lineTo(h.x,h.z):i.moveTo(h.x,h.z)),i.stroke();for(let l of $i)i.fillStyle="#304f43",i.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),i.fillStyle=l.color,i.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),i.fillStyle="#ab7861",i.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),i.strokeStyle="#d4aa83",i.lineWidth=4,i.beginPath(),i.moveTo(l.x-l.w/2,l.z),i.lineTo(l.x+l.w/2,l.z),i.stroke();i.fillStyle="#e0d5b9",i.fillRect(Pt.x-80,Pt.z-80,160,160),i.fillStyle="#352e25",i.fillRect(Pt.x-20,Pt.z+76,40,12),i.fillStyle="#404b40",i.fillRect(et.cave.x-36,et.cave.z-30,72,36),i.fillStyle="#d28757",i.fillRect(et.pump.x-15,et.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of ei)e.released.includes(l.id)||c(l,"#d3dcbe",10);let o=Os(e).target;o&&(i.strokeStyle="#f5d281",i.lineWidth=3,i.beginPath(),i.arc(o.x,o.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),i.stroke()),i.save(),i.translate(e.p.x,e.p.z),i.rotate(-e.heading),e.boat?(i.fillStyle="#efe4c9",i.beginPath(),i.moveTo(-18,-32),i.lineTo(18,-32),i.lineTo(22,28),i.lineTo(0,50),i.lineTo(-22,28),i.closePath(),i.fill()):(i.fillStyle="#b6ddd3",i.beginPath(),i.arc(0,0,9,0,Math.PI*2),i.fill()),i.strokeStyle="#fff6c7",i.lineWidth=3,i.beginPath(),i.moveTo(0,6),i.lineTo(0,28),i.stroke(),i.restore(),e.shot&&(i.strokeStyle="#ffeac5",i.lineWidth=2,i.beginPath(),i.moveTo(e.shot.from.x,e.shot.from.z),i.lineTo(e.shot.to.x,e.shot.to.z),i.stroke()),i.restore();function a(l,h,u,p=0){i.fillStyle=u,i.beginPath();for(let f=0;f<=96;f++){let x=f/96*Math.PI*2,_=l.radius*Xr(l,x)*h-p,g=l.x+Math.cos(x)*_,d=l.z+Math.sin(x)*_;f?i.lineTo(g,d):i.moveTo(g,d)}i.closePath(),i.fill()}function c(l,h,u){i.fillStyle=h,i.beginPath(),i.arc(l.x,l.z,u,0,Math.PI*2),i.fill()}}function Iu({canvas:i,getState:e,makeHuman:t,onLost:n,rendererFactory:r=s=>new Gr(s)}){let s=r({canvas:i,antialias:!0,powerPreference:"high-performance"}),o=innerWidth<=700;s.setPixelRatio(Math.min(devicePixelRatio||1,o?1.1:1.5)),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=It,s.toneMapping=Ur,s.shadowMap.enabled=!0,s.shadowMap.type=Lr;let a=new Di,c=new Ft(68,innerWidth/innerHeight,.04,6e3);a.add(c),a.background=new Je("#b9dbe5"),a.fog=new Pi("#b9dbe5",650,2400);let l=new zi("#d5ecfa","#566143",2),h=new Bi("#fff2d6",2.8);h.castShadow=!0,h.shadow.mapSize.set(o?1024:2048,o?1024:2048),Object.assign(h.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),h.shadow.normalBias=.025,a.add(l,h,h.target);let u=Oa(s),p=new Map,f=new Map,x=m=>(p.has(m)||p.set(m,u.forColor(m)||new bt({color:m,roughness:.85})),p.get(m)),_=(m,M)=>(f.has(m)||f.set(m,M()),f.get(m)),g=(m,M,L,O=[0,0,0],G=[1,1,1])=>{let ne=new rt(M,L);return ne.position.set(...O),ne.scale.set(...G),ne.castShadow=ne.receiveShadow=!0,m.add(ne),ne},d=(m,M,L,O)=>g(m,_("box",()=>new Wt),x(M),L,O),b=(m,M,L,O)=>g(m,_("cylinder",()=>new Tt(1,1,1,12)),x(M),L,O),E=(m,M,L,O)=>g(m,_("sphere",()=>new ln(1,16,12)),x(M),L,O),y={mat:x,geo:_,mesh:g,cube:d,tube:b,ell:E},R=new Oe,C=new Oe,P=m=>{let M=new Map;m.updateMatrix();for(let L of[...m.children])if(L.isMesh){L.updateMatrix();let O=L.geometry.clone().applyMatrix4(L.matrix);M.has(L.material)||M.set(L.material,[]),M.get(L.material).push(O),m.remove(L)}for(let[L,O]of M){let G=Ns(O,!1);O.forEach(ae=>ae.dispose());let ne=new rt(G,L);ne.castShadow=ne.receiveShadow=!0,m.add(ne)}},U=(m,M,L)=>{let O=new Oe;O.name="campaign-supply-cache-"+m,O.position.set(M/Ke,Fn(M,L),L/Ke),R.add(O),d(O,"#a98961",[0,.34,0],[1.45,.68,.88]),d(O,"#debb63",[0,.72,0],[1.52,.09,.94]);for(let G of[-.54,.54])d(O,"#debb63",[G,.35,.46],[.1,.62,.06]);d(O,"#bd6e4e",[-1.02,.42,.04],[.42,.84,.55]),d(O,"#394447",[-1.02,.87,.04],[.2,.08,.22]);for(let G of[-1.15,-.89])d(O,"#394447",[G,.75,.04],[.05,.24,.05]);return d(O,"#394447",[-1.02,.84,.04],[.26,.05,.05]),d(O,"#596b4e",[.93,.23,.04],[.72,.46,.58]),d(O,"#394447",[.93,.48,.04],[.48,.05,.26]),d(O,"#e2dbc7",[.82,.86,-.03],[.7,.34,.5]),d(O,"#bd6e4e",[.82,.87,.235],[.34,.08,.025]),d(O,"#bd6e4e",[.82,.87,.235],[.08,.25,.025]),O.userData.supplyDetails={crate:!0,fuelCan:!0,medkit:!0,ammoBox:!0},P(O),O};a.add(R,C);let w=o?96:192,S=Math.max(...jt.map(m=>m.radius)),A=[];for(let m of jt){let M=Math.max(o?48:72,Math.round(w*m.radius/S/8)*8),L=dc(m,{segments:M});L.userData.terrainSegments=M,A.push(L),L.scale.set(1/Ke,1,1/Ke),L.position.set(m.x/Ke,0,m.z/Ke);let O=L.geometry.attributes.position;for(let ke=0;ke<O.count;ke++)O.setY(ke,Ki(m.x+O.getX(ke),m.z+O.getZ(ke),m));let G=new Float32Array(O.count*3),ne=new Je;for(let ke=0;ke<O.count;ke++){let qe=Math.hypot(O.getX(ke),O.getZ(ke))/m.radius;ne.set(qe>.8?"#fff7e4":m.biome==="rocky"?"#d1d4c5":"#dce2c8"),ne.toArray(G,ke*3)}L.geometry.setAttribute("color",new zt(G,3)),L.geometry.computeVertexNormals(),L.material.dispose(),L.material=Ha(u,Ke),L.material.vertexColors=!0,R.add(L);let ae=ct[m.id],T=new Oe,D=Ki(ae.land.x,ae.land.z);T.name="pier-"+m.id,T.position.set(ae.land.x/Ke,D,ae.land.z/Ke),T.rotation.y=Math.atan2(ae.ux,ae.uz),R.add(T);let K=Bs(ae.end,ae.land)/Ke,X=Math.ceil(K/.26),q=new gt(_("box",()=>new Wt),x("#a98961"),X+1),te=new mt;q.name="pier-deck-"+m.id;for(let ke=0;ke<=X;ke++){let qe=K*ke/X;te.position.set(0,(ae.deck-D)*ke/X-.075,qe),te.scale.set(ae.width/Ke,.15,K/X+.006),te.updateMatrix(),q.setMatrixAt(ke,te.matrix)}q.castShadow=q.receiveShadow=!0,T.add(q);let le=_("pier-piling",()=>new Tt(1,1,1,12)),de=new gt(le,x("#876742"),8);de.name="pier-pilings-"+m.id;let Ce=0;for(let ke of[-.8,.8])for(let qe of[0,K*.33,K*.66,K]){let Rt=(ae.deck-D)*qe/K;te.position.set(ke,Rt-.65,qe),te.scale.set(.075,1.6,.075),te.updateMatrix(),de.setMatrixAt(Ce++,te.matrix)}de.castShadow=de.receiveShadow=!0,de.instanceMatrix.needsUpdate=!0,de.computeBoundingSphere(),T.add(de);let Te=new gt(le,x("#394447"),8);Te.name="pier-bollards-"+m.id;let Se=0;for(let ke of[-.72,.72])for(let qe of[K*.78,K*.98]){let Rt=(ae.deck-D)*qe/K;te.position.set(ke,Rt+.25,qe),te.scale.set(.075,.5,.075),te.updateMatrix(),Te.setMatrixAt(Se++,te.matrix),te.position.set(ke,Rt+.51,qe),te.scale.set(.13,.08,.13),te.updateMatrix(),Te.setMatrixAt(Se++,te.matrix)}Te.castShadow=Te.receiveShadow=!0,Te.instanceMatrix.needsUpdate=!0,Te.computeBoundingSphere(),T.add(Te),["paradise","smugglers","highlands"].includes(m.id)&&U(m.id,m.x,m.z)}U("jungle",et.supply.x,et.supply.z);let N=Math.max(Zr.maxX-Zr.minX,Zr.maxZ-Zr.minZ)/Ke+12e3,k=Va(jt.map(m=>[m.x/Ke,m.z/Ke,m.radius/Ke,m.radius/Ke]),{size:N,coastSeeds:jt.map(m=>m.coastSeed)});R.add(k.mesh);let F=Ga(5e3);R.add(F);let B=Wa(R,jt,{scale:Ke,height:Ki,surfaces:u,small:o,dense:!0,clear:(m,M,L)=>Ji({x:M,z:L},m.id,$i)||m.id==="home"&&qa(M,L)||m.id==="jungle"&&(Bs({x:M,z:L},et.cave)<100||Bs({x:M,z:L},et.supply)<58)||m.id==="fortress"&&Math.abs(M-Pt.x)<125&&Math.abs(L-Pt.z)<155||Bs({x:M,z:L},ct[m.id].land)<90}),W=Xa(R,{scale:Ke,height:Ki,surfaces:u,helpers:y,village:$i,paths:zs,marketPoint:Tu}),{boat:$,wake:Y}=Au(R,y),ie=new Oe;ie.name="harbor-fuel-pump",ie.position.set(et.pump.x/Ke,Fn(et.pump.x,et.pump.z),et.pump.z/Ke),R.add(ie),d(ie,"#a98961",[0,.06,0],[1.05,.12,.92]),d(ie,"#e6d6b8",[0,.68,0],[.75,1.24,.65]),d(ie,"#bd6e4e",[0,1.34,0],[.82,.28,.72]),d(ie,"#263f41",[0,.99,.34],[.48,.25,.045]),d(ie,"#e8d99e",[0,.99,.37],[.31,.1,.018]),b(ie,"#2d3435",[.53,.72,0],[.035,1.18,.035]);let se=d(ie,"#394447",[.53,.39,.29],[.1,.24,.08]);se.rotation.z=-.22,d(ie,"#bd6e4e",[0,.39,.35],[.3,.1,.055]),b(ie,"#e6d6b8",[0,2.18,-.06],[.055,1.42,.055]);let _e=b(ie,"#bd6e4e",[0,2.9,-.06],[.42,.1,.42]);_e.rotation.x=Math.PI/2;let Le=b(ie,"#f3dfbe",[0,2.9,.005],[.31,.115,.31]);Le.rotation.x=Math.PI/2,ie.userData.fuelDetails={display:!0,hose:!0,nozzle:!0,marker:!0},P(ie);let Fe=new Oe;Fe.name="campaign-cave-entrance",Fe.position.set(et.cave.x/Ke,Fn(et.cave.x,et.cave.z),et.cave.z/Ke),R.add(Fe);let tt=[[-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],[2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],[-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]],Be=new mt,J=new gt(_("cave-mouth-rock",()=>new ln(1,12,8)),x("#92968b"),tt.length);J.name="cave-entrance-rocks",J.castShadow=!0,J.receiveShadow=!0,tt.forEach(([m,M,L,O,G,ne,ae],T)=>{Be.position.set(m,M,L),Be.scale.set(O,G,ne),Be.rotation.set(0,0,ae),Be.updateMatrix(),J.setMatrixAt(T,Be.matrix)}),J.instanceMatrix.needsUpdate=!0,J.computeBoundingSphere(),Fe.add(J),d(Fe,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let j=new gt(_("cave-torch-handle",()=>new Tt(1,1,1,7)),x("#4c3525"),2);j.name="cave-entrance-torches",j.castShadow=!0;let me=new bt({color:"#ffcf75",emissive:"#ff7f32",emissiveIntensity:1.15,roughness:.55}),Ue=new gt(_("cave-torch-flame",()=>new Tn(1,1,7)),me,2);Ue.name="cave-entrance-flames",[-1,1].forEach((m,M)=>{Be.position.set(m*1.18,1.15,.18),Be.scale.set(.035,.85,.035),Be.rotation.set(0,0,-m*.15),Be.updateMatrix(),j.setMatrixAt(M,Be.matrix),Be.position.set(m*1.18,1.65,.18),Be.scale.set(.12,.22,.12),Be.rotation.set(0,0,m*.08),Be.updateMatrix(),Ue.setMatrixAt(M,Be.matrix)}),j.instanceMatrix.needsUpdate=!0,Ue.instanceMatrix.needsUpdate=!0,j.computeBoundingSphere(),Ue.computeBoundingSphere(),Fe.add(j,Ue),Fe.userData.entranceDetails={archStones:12,torches:2,clearOpening:!0};let ue=new Oe;ue.name="guarded-estate",ue.position.set(Pt.x/Ke,.85,Pt.z/Ke),R.add(ue),d(ue,"#e2dbc7",[0,1.55,0],[8,3.1,8]),d(ue,"#a68854",[0,3.2,0],[8.6,.25,8.6]),d(ue,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let m of[-1,1]){let M=d(ue,"#ba7655",[m*1.7,5.9,-.4],[3.7,.15,7.4]);M.rotation.z=-m*.3}d(ue,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let m of[-2.7,2.7])for(let M of[1.7,4.3])d(ue,"#425761",[m,M,4.04],[1.15,1.3,.06]),d(ue,"#e2dbc7",[m,M,4.11],[.08,1.38,.08]),d(ue,"#e2dbc7",[m,M,4.11],[1.2,.08,.08]);for(let m of[-1.4,1.4])b(ue,"#e2dbc7",[m,1.3,4.65],[.16,2.6,.16]);d(ue,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let m=0;m<3;m++)d(ue,"#92968b",[0,-.03+m*.06,4.4+m*.4],[2.6,.15,1.25-m*.25]);for(let m of[-3.4,3.4])for(let M of[1.7,4.3]){d(ue,"#587e7c",[m,M,4.07],[.32,1.35,.1]);for(let L=0;L<8;L++)d(ue,"#876742",[m,M-.5+L*.14,4.14],[.3,.025,.045])}d(ue,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let m=-10;m<=10;m++)b(ue,"#e2dbc7",[m*.39,3.57,5.05],[.033,.83,.033]);d(ue,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);for(let m of[-2.45,2.45]){d(ue,"#a98961",[m,.3,4.62],[1.25,.42,.55]);for(let M=-2;M<=2;M++){let L=E(ue,M%2?"#6f8f58":"#88a866",[m+M*.2,.67+Math.abs(M)*.025,4.62],[.18,.38,.18]);L.rotation.z=M*.12}}let Ge=new bt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34});for(let m of[-1.03,1.03]){d(ue,"#394447",[m,2.05,4.14],[.08,.1,.24]);let M=E(ue,"#ffe4a8",[m,1.88,4.27],[.13,.19,.13]);M.material=Ge}let lt=b(ue,"#d4a957",[0,3.02,4.11],[.38,.1,.38]);lt.rotation.x=Math.PI/2,ue.userData.estateDetails={planters:2,lanterns:2,crest:!0},P(ue),ue.userData.cameraBlocker=!0;let z=[W.buildings,ue];z.forEach(m=>m.updateWorldMatrix(!0,!0));let ut={};function Ye(m,M=11,L=15){let O=new Oe;O.name=m,C.add(O),ut[m]=O,d(O,m==="cave"?"#777a6b":"#a68854",[0,-.1,1],[M,.2,L]);for(let ne of[-M/2,M/2])d(O,m==="cave"?"#92968b":"#e2dbc7",[ne,1.65,1],[.3,3.3,L]);d(O,m==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-L/2],[M,3.3,.3]),d(O,"#313f38",[0,1.1,L/2-.2],[1.7,2.2,.15]);let G=new Oi(m==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return G.position.set(0,2.7,1),O.add(G),O}let He=Ye("cave",12,17),Re=_("cave-formation",()=>new Tn(1,1,9)),ot=new gt(Re,x("#777a6b"),16),Ee=new mt;ot.name="cave-formations";let Xe=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],[5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]],St=0;for(let[m,M,L,O]of Xe)Ee.position.set(m,O/2,M),Ee.rotation.set(0,St*.71%Math.PI,0),Ee.scale.set(L,O,L),Ee.updateMatrix(),ot.setMatrixAt(St++,Ee.matrix),Ee.position.set(-m,3.3-O*.48,M+.55),Ee.rotation.set(0,St*.53%Math.PI,Math.PI),Ee.scale.set(L*.82,O*.92,L*.82),Ee.updateMatrix(),ot.setMatrixAt(St++,Ee.matrix);ot.castShadow=ot.receiveShadow=!0,ot.instanceMatrix.needsUpdate=!0,ot.computeBoundingSphere(),He.add(ot),He.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:!0};let nt=new Oe;nt.name="cave-evidence-table",He.add(nt),d(nt,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let m of[-.75,.75])for(let M of[-2.45,-1.55])b(nt,"#876742",[m,.35,M],[.065,.7,.065]);for(let m of[-2.47,-1.53])d(nt,"#876742",[0,.57,m],[1.72,.2,.07]);d(nt,"#876742",[0,.56,-1.38],[.72,.27,.08]),E(nt,"#394447",[0,.56,-1.32],[.045,.045,.04]),b(nt,"#394447",[.72,.86,-2.18],[.17,.1,.17]);let I=new bt({color:"#ffe4a8",emissive:"#ff9f45",emissiveIntensity:1.05,roughness:.28,transparent:!0,opacity:.88}),v=E(nt,"#ffe4a8",[.72,1.08,-2.18],[.14,.22,.14]);v.material=I,b(nt,"#394447",[.72,1.31,-2.18],[.12,.07,.12]),nt.userData.evidenceDetails={legs:4,drawer:!0,lantern:!0,newspaper:!0,hiddenGun:!0},P(nt);let Z=document.createElement("canvas");Z.width=256,Z.height=320;let ee=Z.getContext("2d");ee.fillStyle="#ddd5bd",ee.fillRect(0,0,256,320),ee.fillStyle="#3a3b32",ee.font="bold 26px serif",ee.fillText("ISLAND DAILY",18,38),ee.fillRect(18,51,220,3);for(let m=0;m<20;m++)ee.fillRect(18,72+m*10,94-m%4*6,2),ee.fillRect(128,72+m*10,104-m%3*8,2);let oe=new di(Z);oe.colorSpace=It;let Q=new rt(new fn(.9,1.05),new bt({map:oe,side:At}));Q.name="cave-newspaper",Q.rotation.x=-Math.PI/2,Q.position.set(0,.83,-2),He.add(Q);function De(m){let M=new Oe;m.add(M),d(M,"#333a3d",[0,0,.06],[.12,.12,.34]);let L=d(M,"#695646",[0,-.11,-.03],[.1,.23,.13]);return L.rotation.x=-.22,d(M,"#8b9294",[0,.08,.03],[.11,.035,.3]),M}let pe=De(He);pe.name="cave-hidden-gun",pe.position.set(0,.87,-2),pe.rotation.y=Math.PI/2;let Ae=Ye("estate",11,15);d(Ae,"#816947",[0,.42,-4.6],[2.6,.85,.9]),d(Ae,"#decc9f",[0,.05,1],[3,.025,10]);for(let m=0;m<6;m++)d(Ae,"#777a6b",[3.5,.06*m,-4.75+m*.28],[1.7,.12,.65]);let be=new Oe;be.name="estate-interior-details",Ae.add(be);let ce=["#6f443d","#40626a","#718052"];for(let[m,M]of[-2.7,0,2.7].entries())d(be,"#a68854",[M,1.9,-6.31],[1.42,1.22,.08]),d(be,ce[m],[M,1.9,-6.25],[1.12,.92,.045]);d(be,"#a68854",[0,.93,-6.29],[8.7,.08,.08]);for(let m of[-4.35,4.35]){d(be,"#394447",[m,2.02,-6.24],[.1,.32,.1]);let M=E(be,"#ffe4a8",[m,1.79,-6.15],[.14,.19,.11]);M.material=Ge}d(be,"#394447",[0,.86,-4.58],[1.12,.025,.52]);for(let m of[-.52,0,.52])d(be,"#d8d2c3",[m,.88,-4.57],[.4,.012,.3]);b(be,"#394447",[.93,1.08,-4.58],[.035,.42,.035]);let ye=E(be,"#ffe4a8",[.93,1.34,-4.58],[.18,.16,.18]);ye.material=Ge,Ae.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:!0},P(be);let We=new rt(new Kn(.13,.036,8,16),new bt({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));We.position.set(0,.88,-3),Ae.add(We),d(We,"#debb63",[0,-.2,0],[.065,.32,.065]);let Ne=Ye("cellar",11,15),ve=[],Ze=new Oe;Ze.name="cellar-static",Ne.add(Ze);for(let m of ei){let M=new Oe;M.name="cell-door-"+m.id,M.position.set(m.x/Ke,0,-1.5),Ne.add(M),ve[m.id]=M;for(let G=-2;G<=2;G++)b(M,"#475759",[G*.32,1.3,0],[.025,2.6,.025]);for(let G of[.1,2.5])d(M,"#475759",[0,G,0],[1.65,.055,.055]);for(let G of[.45,2.15])b(M,"#394447",[-.78,G,.07],[.045,.12,.045]);g(M,_("cell-padlock",()=>new Kn(.09,.022,6,12)),x("#a68854"),[.61,1.42,.07]),d(M,"#a68854",[.61,1.27,.07],[.18,.2,.08]);let L=m.x/Ke,O=["#738b90","#9b796d"][m.id%2];d(Ze,"#a98961",[L,.18,-4.8],[1.55,.36,.8]),d(Ze,"#e2dbc7",[L,.4,-4.8],[1.5,.1,.8]),d(Ze,O,[L,.47,-4.65],[1.42,.045,.48]),d(Ze,"#d8d2c3",[L,.5,-5.08],[.64,.1,.24])}for(let m of[-3.8,0,3.8]){d(Ze,"#394447",[m,2.54,-6.28],[.36,.15,.1]);let M=E(Ze,"#ffe4a8",[m,2.34,-6.2],[.15,.2,.11]);M.material=Ge}Ne.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5},P(Ze);function H(m,M,L){let O=m.hairStyles[M],G=new Set;return O.name=`${L}-hair-${M}`,O.visible=!0,O.traverse(ne=>{ne.isMesh&&G.add(ne)}),m.hairStyles.forEach((ne,ae)=>{ae!==M&&ne.removeFromParent()}),m.hairStyles=[O],m.hairParts=m.hairParts.filter(ne=>G.has(ne)),m.spear.removeFromParent(),m.raft.removeFromParent(),Object.values(m.props).forEach(ne=>ne.removeFromParent()),m.spear=m.raft=null,m.props={},m.root.userData.renderProfile={hairVariants:1,unusedToolMeshes:0},m}let he=H(t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",y),0,"campaign-player");he.root.name="campaign-player",a.add(he.root);let ge=new Map,Pe=new Map,fe={gate:{shirt:"#526252",skin:"#c29574",hair:"#302e28",style:0},patrol:{shirt:"#59665a",skin:"#a96f55",hair:"#211f1e",style:1},hall:{shirt:"#4b5958",skin:"#d1a17d",hair:"#5b4032",style:2},boss:{shirt:"#34383a",skin:"#b67d60",hair:"#251f1c",style:1}};for(let m of e().guards){let M=fe[m.id],L=H(t(M,"guard",y),M.style,"campaign-guard-"+m.id);if(L.root.name="campaign-guard-"+m.id,L.root.userData.guardProfile={boss:m.id==="boss",style:M.style},m.id==="boss"){let O=new Oe;O.name="campaign-boss-insignia",L.hips.add(O);for(let ne of[-1,1])d(O,"#d2aa58",[ne*.2,.56,.02],[.12,.035,.18]);let G=d(O,"#8f2f2d",[0,.34,.15],[.055,.52,.025]);G.rotation.z=-.48,L.root.userData.guardProfile.insignia=!0}a.add(L.root),De(L.arms[1].forearm).position.set(0,-.24,.14),ge.set(m.id,L)}let re=[{shirt:"#8da4b1",skin:"#c99370",hair:"#302d2a",style:0,scale:1.02},{shirt:"#b78876",skin:"#e1b894",hair:"#6a4938",style:1,scale:.96},{shirt:"#9caa8c",skin:"#b98264",hair:"#2f2927",style:2,scale:1},{shirt:"#c3b487",skin:"#dca984",hair:"#704936",style:1,scale:.72},{shirt:"#92b2b6",skin:"#e4bb96",hair:"#3f302b",style:2,scale:.76}];for(let m of ei){let M=re[m.id],L=H(t(M,"resident",y),M.style,"campaign-prisoner-"+m.id);L.root.name="campaign-prisoner-"+m.id,L.root.scale.setScalar(M.scale),L.root.userData.residentProfile={child:m.child,style:M.style,scale:M.scale},a.add(L.root),Pe.set(m.id,L)}let Ie=new Oe;c.add(Ie),De(Ie).position.set(.26,-.23,-.48);let $e=E(Ie,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),pt=b(Ie,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);pt.rotation.x=-.5;let je=new rt(new Kn(.42,.035,8,32),new on({color:"#f3d48a"}));je.rotation.x=-Math.PI/2,a.add(je);let Ut=new Li(new _t().setFromPoints([new V,new V]),new ui({color:"#ffe8ad"}));a.add(Ut);let Nt=new ki,Ct=new V,Et=0,nn=.05,yt="first",rn=0,mn=!0,zn=!1,Gt=null,yi,vi=0,ti=e(),cn=Os(ti).target;cn&&(Et=Math.atan2(ti.p.x-cn.x,ti.p.z-cn.z));function On(m,M,L,O,G,ne){vi++,m.root.position.set(M.x/Ke,L,M.z/Ke),m.root.rotation.set(0,0,0),m.rig.rotation.y=O;let ae=ne*7,T=G?.24:0;for(let D of m.legs)D.thigh.rotation.x=Math.sin(ae+(D.side<0?Math.PI:0))*T,D.calf.rotation.x=Math.max(0,-Math.sin(ae+(D.side<0?Math.PI:0)))*T,D.shoe.rotation.x=-D.calf.rotation.x*.6;for(let D of m.arms)D.arm.rotation.x=G?Math.sin(ae+(D.side<0?0:Math.PI))*.25:0,D.arm.rotation.z=0,D.forearm.rotation.x=-.18;m.hips.position.y=.87+(G?Math.cos(ae*2)*.009:0)}function hn(m){if(!mn||zn)return;let M=e(),L=m/1e3;rn=m,vi=0,u.update(),F.material.uniforms.uTime.value=L;let O=M.interior;R.visible=!O,C.visible=!!O;for(let[q,te]of Object.entries(ut))te.visible=q===O;a.background.set(O?"#202c29":"#b9dbe5"),a.fog.color.copy(a.background),l.intensity=O?.65:2,h.intensity=O?.15:2.8;let G=O?0:Fn(M.p.x,M.p.z);he.root.visible=!M.boat||yt==="third",M.boat||(a.add(he.root),On(he,M.p,G,M.heading,M.walking,L)),he.rig.visible=yt==="third",$.position.set((M.boat?M.p.x:ct[M.boatAt].x)/Ke,.02,(M.boat?M.p.z:ct[M.boatAt].z)/Ke),$.rotation.y=M.boat?M.heading:Math.atan2(ct[M.boatAt].ux,ct[M.boatAt].uz),$.rotation.z=M.boat?Math.sin(L*2)*.015:0,Y.visible=M.boat&&M.walking,M.boat&&Cu(he,$),Q.visible=!M.paper,pe.visible=M.paper&&!M.gun,We.visible=!M.key&&M.guards.find(q=>q.id==="boss").hp===0,We.rotation.y=L,ve.forEach((q,te)=>q.visible=!M.released.includes(te));for(let q of M.guards){let te=ge.get(q.id),le=q.area===O&&!M.boat&&(!q.area||M.island==="fortress");te.root.visible=le,le&&(On(te,q,q.area?0:Fn(q.x,q.z),Math.atan2(M.p.x-q.x,M.p.z-q.z),q.hp>0&&Bs(q,M.p)<210,L),q.hp<=0?(te.rig.rotation.x=-Math.PI/2,te.root.position.y+=q.area?0:.15,te.root.scale.setScalar(.8)):(te.rig.rotation.x=0,te.arms[1].arm.rotation.x=-1.05,te.arms[1].forearm.rotation.x=-.35))}for(let q of ei){let te=Pe.get(q.id),le=M.released.includes(q.id),de=M.boarded?!1:le?!M.boat&&(O==="estate"||O==="cellar"||M.island==="fortress"):O==="cellar";if(te.root.visible=de,!de)continue;let Ce=le?{x:M.p.x-Math.sin(M.heading)*(35+q.id*15)+Math.cos(M.heading)*(q.id%2?16:-16),z:M.p.z-Math.cos(M.heading)*(35+q.id*15)-Math.sin(M.heading)*(q.id%2?16:-16)}:q;On(te,Ce,O?0:Fn(Ce.x,Ce.z),M.heading,le&&M.walking,L+q.id*.18)}let ne=Os(M).target,ae=Ru(M),T=ae||ne;je.visible=!!T,T&&je.position.set(T.x/Ke,(O?0:Fn(T.x,T.z))+.08,T.z/Ke),je.scale.setScalar(1+Math.sin(L*3)*.1),Ie.visible=M.gun&&!M.boat&&yt==="first",Ie.position.z=M.shot?.025:0;let D=M.boat?.02+Jr.eye-1.64:G,K=M.boat?Jr.seatZ:0,X=Ba({x:M.p.x/Ke+Math.sin(M.heading)*K,z:M.p.z/Ke+Math.cos(M.heading)*K,surface:D,yaw:Et,pitch:nn,mode:yt,distance:M.boat?7.5:4.6});if(O&&yt==="third"&&(X.position.x=Ds.clamp(X.position.x,-5.1,5.1),X.position.z=Ds.clamp(X.position.z,-5,8.1)),!O&&yt==="third"){Ct.subVectors(X.position,X.target);let q=Ct.length();Ct.normalize(),Nt.set(X.target,Ct),Nt.far=q;let te=Nt.intersectObjects(z,!0).find(le=>le.distance>.2);te&&X.position.copy(X.target).addScaledVector(Ct,Math.max(.35,te.distance-.22)),X.position.y=Math.max(X.position.y,Fn(X.position.x*Ke,X.position.z*Ke)+.24)}if(c.position.copy(X.position),c.lookAt(X.target),ka(h,M.p.x/Ke,M.p.z/Ke,{height:25}),k.update(L,c.position),F.position.copy(c.position),Ut.visible=!!M.shot,M.shot){let q=G+1.35,te=M.shot.from,le=M.shot.to;Ut.geometry.setFromPoints([new V(te.x/Ke,q,te.z/Ke),new V(le.x/Ke,q,le.z/Ke)])}yi!==O&&(yi=O,O?Et=0:ne&&(Et=Math.atan2(M.p.x-ne.x,M.p.z-ne.z))),s.render(a,c)}function ji(){c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function Mi(m,M=0){e().paused||(Et+=m,nn=Ds.clamp(nn+M,yt==="first"?-.95:-.05,.75))}i.addEventListener("pointerdown",m=>{e().paused||m.button!==0||(Gt={id:m.pointerId,x:m.clientX,y:m.clientY},i.setPointerCapture(m.pointerId))}),i.addEventListener("pointermove",m=>{Gt?.id===m.pointerId&&(Mi(-(m.clientX-Gt.x)*.006,(m.clientY-Gt.y)*.005),Gt.x=m.clientX,Gt.y=m.clientY)});for(let m of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(m,()=>Gt=null);return i.addEventListener("webglcontextlost",m=>{m.preventDefault(),zn=!0,mn=!1,n?.()}),{frame:hn,resize:ji,orbit:Mi,setCamera(m){yt=m==="first"?"first":"third",nn=yt==="first"?.05:.22},get cameraMode(){return yt},get enabled(){return mn&&!zn},vector:(m,M)=>({x:m*Math.cos(Et)+M*Math.sin(Et),z:-m*Math.sin(Et)+M*Math.cos(Et)}),aim:()=>Et+Math.PI,setEnabled(m){mn=!!m&&!zn},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,eye:c.position.toArray(),camera:yt,cameraBlockers:z.length,palmBatches:B.treeBatches.length,largestPalmBatch:Math.max(...B.treeBatches.map(m=>m.count)),posedCharacters:vi,terrainTriangles:A.reduce((m,M)=>m+M.geometry.index.count/3,0)}),dispose(){s.dispose(),u.dispose();let m=new Set,M=new Set;a.traverse(L=>{if(L.geometry&&m.add(L.geometry),L.material)for(let O of Array.isArray(L.material)?L.material:[L.material])M.add(O)}),m.forEach(L=>L.dispose()),M.forEach(L=>L.dispose()),oe.dispose()}}}function Bs(i,e){return Math.hypot(i.x-e.x,i.z-e.z)}function I0(i){return Iu({...i,makeHuman:vc})}var xe=80,Pu=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],_i=(i,e,t)=>Math.max(e,Math.min(t,i)),P0=i=>(i=_i(i,0,1),i*i*(3-2*i)),D0=(i,e)=>Math.atan2(Math.sin(e-i),Math.cos(e-i));function Qt(i,e){let t=i*xe,n=e*xe,r=-1;for(let[o,a,c,l]of Pu)r=Math.max(r,1-Math.hypot((t-o)/c,(n-a)/l));return r<=0?-.32:.015+P0(r/.17)*(.25+.28*(1+Math.sin(i*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(i*.7)*Math.sin(e*.6))}function Du(i,e,t){return{x:i*Math.cos(t)+e*Math.sin(t),y:-i*Math.sin(t)+e*Math.cos(t)}}function Lu(i,e){let r=_i(Math.hypot(i,e),.08,.855);return{hip:-Math.atan2(e,-i)-Math.acos(_i((.43*.43+r*r-.43*.43)/(2*.43*r),-1,1)),knee:Math.PI-Math.acos(_i((.43*.43+.43*.43-r*r)/(2*.43*.43),-1,1))}}function yc(i){return i?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let n=i.point(e*i.width/2,t*i.depth/2);return Qt(n.x/xe,n.y/xe)}))):0}function _c(i,e,t,n=yc(t)){let r=Qt(i,e);if(!t)return r;let s=t.floor;if(Math.abs(i*xe-s.x)<=s.w/2&&Math.abs(e*xe-s.y)<=s.h/2)return Math.max(r,n+.16);let o=i*xe-t.center.x,a=e*xe-t.center.y,c=o*t.fy-a*t.fx,l=o*t.fx+a*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,n+.16)-r)*(1-(l-t.depth/2)/64):r}function Uu(i,e,t={}){let n=(p,f,x,_,g)=>{let d=new rt(g,new bt({color:f}));return d.position.set(...x),d.scale.set(..._),p.add(d),d},r=t.cube||((p,f,x,_)=>n(p,f,x,_,new Wt(1,1,1))),s=t.tube||((p,f,x,_)=>n(p,f,x,_,new Tt(1,1,1,10))),o=new Oe,a=i.width/xe,c=i.depth/xe,l=i.wallHeight/xe,h=i.roofRidge/xe,u=i.door/xe;o.name="base",o.position.set(i.center.x/xe,e,i.center.y/xe),o.rotation.y=i.yaw,r(o,"#a68854",[0,.08,0],[a,.16,c]).name="floor";for(let p of[-a/2+.1,a/2-.1])for(let f of[-c/2+.1,c/2-.1])s(o,"#876742",[p,l/2,f],[.075,l,.075]).name="post";for(let p of[-1,1]){let f=r(o,"#ba7655",[p*a/4,(l+h)/2,0],[Math.hypot(a/2+.2,h-l),.1,c+.36]);f.rotation.z=-p*Math.atan2(h-l,a/2+.2),f.name="roof"}for(let p of i.walls){let f=p.x-i.center.x,x=p.y-i.center.y,_=(f*i.fy-x*i.fx)/xe,g=(f*i.fx+x*i.fy)/xe;r(o,"#e2dbc7",[_,l/2,g],[i.fy?p.w/xe:p.h/xe,l,i.fy?p.h/xe:p.w/xe]).name="wall"}if(i.walls.length>=5){let p=i.doorHeight/xe;r(o,"#845f3f",[0,(l+p)/2,c/2],[u,l-p,.125]).name="lintel"}for(let p of i.beds){let f=p.x-i.center.x,x=p.y-i.center.y,_=(f*i.fy-x*i.fx)/xe,g=(f*i.fx+x*i.fy)/xe;r(o,"#7d654b",[_,.17,g],[.65,.34,1.125]).name="bed",r(o,"#cec6a0",[_,.38,g],[.65,.14,1.125]),r(o,"#ede3bd",[_,.49,g-.35],[.5,.09,.26])}return o}function Nu(i,e,{cube:t,tube:n,ell:r}){if(i==="gather"&&(n(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),i==="fish"){let s=n(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let o=n(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);o.rotation.x=.6}if(i==="cook"){let s=n(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function vc(i={},e="player",t={}){let n=new Map,r=new Map,s=t.mat||(F=>(n.has(F)||n.set(F,new bt({color:F})),n.get(F))),o=t.geo||((F,B)=>(r.has(F)||r.set(F,B()),r.get(F))),a=t.mesh||((F,B,W,$=[0,0,0],Y=[1,1,1])=>{let ie=new rt(B,W);return ie.position.set(...$),ie.scale.set(...Y),F.add(ie),ie}),c=t.ell||((F,B,W,$)=>a(F,o("ball",()=>new ln(1,14,10)),s(B),W,$)),l=t.cube||((F,B,W,$)=>a(F,o("box",()=>new Wt(1,1,1)),s(B),W,$)),h=t.tube||((F,B,W,$)=>a(F,o("cyl",()=>new Tt(1,1,1,10)),s(B),W,$)),u=new Oe,p=new Oe;u.add(p);let f=i.skin||"#dda879",x=i.hair||"#43332b",_=i.shirt||"#4c9cba",g=new Oe;g.position.y=.87,p.add(g),c(g,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let d=o("human-torso",()=>new Ms([new Ve(.16,.13),new Ve(.205,.2),new Ve(.215,.38),new Ve(.25,.49),new Ve(.26,.52),new Ve(.19,.57),new Ve(.09,.64)],18));a(g,d,s(_),[0,0,0],[1,1,.66]);for(let F of[-1,1]){let B=l(g,_,[F*.065,.6,.071],[.085,.075,.024]);B.rotation.z=-F*.3,l(g,_,[F*.11,.37,.142],[.105,.09,.022])}for(let F=0;F<4;F++)c(g,"#d7d5c2",[0,.24+F*.075,.15],[.009,.01,.005]);e==="guard"&&l(g,"#39483f",[0,.35,.11],[.34,.36,.09]),l(g,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),h(g,f,[0,.64,0],[.064,.13,.064]);let b=new Oe;b.position.y=.79,g.add(b),c(b,f,[0,0,0],[.135,.175,.133]),c(b,f,[-.137,-.005,0],[.025,.048,.025]),c(b,f,[.137,-.005,0],[.025,.048,.025]),c(b,f,[0,-.015,.136],[.026,.033,.036]);for(let F of[-1,1])c(b,"#f6f3df",[F*.052,.02,.115],[.03,.017,.014]),c(b,"#31433e",[F*.053,.02,.128],[.012,.013,.007]),l(b,x,[F*.052,.061,.11],[.062,.01,.014]);l(b,"#af735b",[0,-.071,.117],[.051,.009,.012]);let E=o("hair",()=>new ln(1,16,10,0,Math.PI*2,0,Math.PI*.56));a(b,E,s(e==="nela"?"#8d4931":x),[0,.015,-.015],[.145,.18,.143]);let y=[new Oe,new Oe,new Oe];y.forEach(F=>b.add(F));let R=b.children.find(F=>F.isMesh&&F.geometry===E);b.remove(R),y[0].add(R),a(y[1],E,s(x),[0,.015,-.015],[.145,.18,.143]),c(y[1],x,[0,-.04,-.17],[.072,.14,.08]);for(let F=0;F<12;F++){let B=F*Math.PI*2/12;c(y[2],x,[Math.sin(B)*.1,.1+F%2*.018,Math.cos(B)*.1-.015],[.066,.067,.066])}if(c(y[2],x,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(b,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),y.forEach((F,B)=>F.visible=B===(i.style||0)),e==="leon")h(b,"#c5a775",[0,.15,0],[.16,.12,.16]),h(b,"#c5a775",[0,.095,0],[.22,.028,.22]),l(g,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(g,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let F of[-1,1])l(g,"#b6caa4",[F*.17,.38,-.04],[.034,.35,.029])}let C=[],P=[];for(let F of[-1,1]){let B=new Oe;B.position.set(F*.27,.54,0),g.add(B);let W=c(B,_,[-F*.018,-.025,0],[.105,.13,.11]);W.name="human-shoulder",a(B,o("human-upper-arm",()=>new Tt(.068,.086,.19,12)),s(_),[0,-.105,0]),a(B,o("human-lower-upper-arm",()=>new Tt(.055,.064,.15,12)),s(f),[0,-.24,0]);let $=new Oe;$.position.y=-.31,B.add($);let Y=c($,f,[0,0,0],[.061,.063,.061]);Y.name="human-elbow",a($,o("human-forearm",()=>new Tt(.057,.04,.26,12)),s(f),[0,-.13,0]),c($,f,[0,-.28,0],[.06,.082,.046]),C.push({arm:B,forearm:$,side:F});let ie=new Oe;ie.position.set(F*.115,0,0),g.add(ie),a(ie,o("human-thigh",()=>new Tt(.092,.108,.42,12)),s("#52625f"),[0,-.21,0]);let se=new Oe;se.position.y=-.43,ie.add(se);let _e=c(se,"#52625f",[0,0,.014],[.079,.074,.075]);_e.name="human-knee",a(se,o("human-calf",()=>new Tt(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let Le=c(se,"#52625f",[0,-.36,0],[.052,.06,.052]);Le.name="human-ankle";let Fe=c(se,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);P.push({thigh:ie,calf:se,shoe:Fe,side:F})}let U=new Oe;h(U,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(U,"#dad9c5",[0,1.45,0],[.045,.15,.03]),U.position.set(.35,.2,.08),p.add(U),U.visible=!1;let w={};for(let F of["gather","fish","cook"]){let B=new Oe;Nu(F,B,{cube:l,tube:h,ell:c}),B.position.set(0,-.28,0),C[1].forearm.add(B),B.visible=!1,w[F]=B}let S=new Oe;u.add(S);for(let F=0;F<5;F++){let B=h(S,"#a17d48",[(F-2)*.25,.08,0],[.115,1.7,.115]);B.rotation.x=Math.PI/2}for(let F of[-.5,.5])l(S,"#6e5937",[0,.19,F],[1.24,.05,.1]);S.visible=!1;let A=[],N=[],k=[];return p.traverse(F=>{F.isMesh&&(F.material===s(_)&&A.push(F),F.material===s(f)&&N.push(F),F.material===s(x)&&k.push(F))}),{root:u,rig:p,hips:g,head:b,arms:C,legs:P,spear:U,raft:S,shirtParts:A,skinParts:N,hairParts:k,hairStyles:y,props:w,yaw:0,lastX:null,lastZ:null,phase:0}}function Fu(i,e){let t=e&&gu(e.kind,e.phase);i.rig.rotation.x=t?.bend||0;for(let[n,r]of Object.entries(i.props))r.visible=!!t&&e.kind===n;if(t)for(let n of i.arms)n.arm.rotation.x=n.side<0?t.left:t.right,n.forearm.rotation.x=-.25,n.arm.rotation.z=-n.side*.08+((n.side>0||e.kind==="cheer")&&t.wave||0)}function zu(i,e,t){let n=i.phase||0,r=i.x+Math.sin(e*.65+n)*14,s=i.y+Math.cos(e*.65+n)*14;return t(r,s)?{x:r/xe,z:s/xe,y:.055+Math.sin(e*3+n)*.008,yaw:Math.atan2(Math.cos(e*.65+n),-Math.sin(e*.65+n))}:null}function L0({canvas:i,terrain:e,getState:t,onLost:n}){let r=new Gr({canvas:i,antialias:!0,powerPreference:"high-performance"}),s=innerWidth<=700;r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=It,r.toneMapping=Ur,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=Lr;let o=new Di;o.background=new Je("#c5dbe5"),o.fog=new Pi("#c5dbe5",70,240);let a=new Ft(72,innerWidth/innerHeight,.04,350);o.add(a);let c=new zi("#c9e3ff","#71694d",1.85);o.add(c);let l=new Bi("#fff0d2",3.1);l.castShadow=!0,l.shadow.mapSize.set(s?1024:2048,s?1024:2048),l.shadow.camera.left=-16,l.shadow.camera.right=16,l.shadow.camera.top=16,l.shadow.camera.bottom=-16,l.shadow.camera.near=.5,l.shadow.camera.far=65,l.shadow.bias=-12e-5,l.shadow.normalBias=.012,o.add(l,l.target);let h=Oa(r),u=new Map,p=new Map;function f(T,D={}){if(!Object.keys(D).length){let X=h.forColor(T);if(X)return X}let K=T+JSON.stringify(D);return u.has(K)||u.set(K,new bt({color:T,roughness:.86,...D})),u.get(K)}function x(T,D){return p.has(T)||p.set(T,D()),p.get(T)}function _(){return x("ball",()=>new ln(1,14,10))}function g(){return x("box",()=>new Wt(1,1,1))}function d(){return x("cyl",()=>new Tt(1,1,1,10))}function b(T,D,K,X=[0,0,0],q=[1,1,1],te=!0){let le=new rt(D,K);return le.position.set(...X),le.scale.set(...q),le.castShadow=te,le.receiveShadow=!0,T.add(le),le}function E(T,D,K,X){return b(T,_(),f(D),K,X)}function y(T,D,K,X){return b(T,g(),f(D),K,X)}function R(T,D,K,X){return b(T,d(),f(D),K,X)}let C=new mt,P=new fn(4600/xe,2900/xe,230,145);P.rotateX(-Math.PI/2),P.translate(2300/xe,0,1450/xe);let U=P.attributes.position;for(let T=0;T<U.count;T++)U.setY(T,Qt(U.getX(T),U.getZ(T)));P.computeVertexNormals();let w=_u(e),S=new di(w);S.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let A=h.ground(S),N=new rt(P,A);N.receiveShadow=!0,o.add(N);let k=bu({segments:s?24:48}),F=40;k.scale.set(1/F,1,1/F),k.position.x=6500/xe;for(let T of k.children)T.material.dispose(),T.material=Ha(h,F),T.geometry.setAttribute("color",new Qe(new Float32Array(T.geometry.attributes.position.count*3).fill(1),3));let B=new Oe;B.scale.set(F,1,F),k.add(B);let W=(T,D)=>{let K=Mu(T,D);return K?Zi(K,T,D):-.32};Wa(B,Rn,{scale:F,height:W,surfaces:h,small:s,clear:(T,D,K)=>Ji({x:D,z:K},T.id)||T.id==="home"&&(Math.abs(K-40)<55||Math.abs(D-23)<45)}),Xa(B,{scale:F,height:W,surfaces:h,helpers:{cube:y,tube:R,ell:E}}),o.add(k);let $=yu(o,Qt,xe,w,s),Y=Va([...Pu.map(([T,D,K,X])=>[T/xe,D/xe,K/xe,X/xe]),...Rn.map(T=>[k.position.x+T.x/F,T.z/F,T.radius*.955/F,T.radius*.955/F])]);o.add(Y.mesh);let ie=Ga(320);o.add(ie);function se(){let T=[],D=[],K=[],X=(te,le,de,Ce)=>{let Te=le*2.05,Se=Math.sin(le*Math.PI)*.46-le*le*.8;return[Math.sin(te)*Te+Math.cos(te)*Ce*de,Se-Ce*.22,Math.cos(te)*Te-Math.sin(te)*Ce*de]};for(let te=0;te<11;te++){let le=te*Math.PI*2/11;for(let de=1;de<17;de++)for(let Ce of[-1,1]){let Te=de/18,Se=Math.sin(Te*Math.PI)*.42,ke=T.length/3;T.push(...X(le,Te-.023,Ce,.015),...X(le,Te-.085,Ce,Se),...X(le,Te+.038,Ce,Se*.88),...X(le,Te+.025,Ce,.015)),K.push(Te,0,Te,.9,Te+.03,1,Te+.03,0),D.push(ke,ke+1,ke+2,ke,ke+2,ke+3)}}let q=new _t;return q.setAttribute("position",new Qe(T,3)),q.setAttribute("uv",new Qe(K,2)),q.setIndex(D),q.computeVertexNormals(),q}let _e=new Tt(.085,.16,4.35,14,12);_e.translate(0,2.175,0);for(let T=0;T<_e.attributes.position.count;T++){let D=_e.attributes.position;D.setX(T,D.getX(T)+.16*(D.getY(T)/4.35)**2)}_e.computeVertexNormals();let Le=f("#9d7750",{bumpMap:h.textures.get("rock"),bumpScale:.025});Le.onBeforeCompile=T=>{T.vertexShader=T.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),T.fragmentShader=T.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let Fe=se(),tt=h.surface("leaf","#ffffff",1,.018).clone();tt.side=At;let Be={value:0};tt.onBeforeCompile=T=>{T.uniforms.uWind=Be,T.vertexShader=T.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let J={tree:new gt(_e,Le,400),leaves:new gt(Fe,tt,400),rock:new gt(new Ui(1,2),f("#92968b"),400),food:new gt(_(),f("#7a5638"),400),shell:new gt(new ln(1,12,6,0,Math.PI),f("#f1d0b7"),400)};for(let T of Object.values(J))T.count=0,T.castShadow=!0,T.receiveShadow=!0,T.frustumCulled=!1,o.add(T);function j(T,D){let K={tree:0,leaves:0,rock:0,food:0,shell:0};for(let X of T){let q=X.x/xe,te=X.y/xe,le=Qt(q,te),de=X.phase||0;if(X.t==="tree"){let Ce=.84+.17*Math.sin(X.x*.033+X.y*.027),Te=1.35+.28*Math.cos(de);C.position.set(q,le,te),C.rotation.set(.03*Math.sin(de),de,.04*Math.cos(de)),C.scale.set(Ce,Te,Ce),C.updateMatrix(),J.tree.setMatrixAt(K.tree++,C.matrix),C.position.set(q+.16*Ce*Math.cos(de),le+4.3*Te,te-.16*Ce*Math.sin(de)),C.rotation.set(Math.sin(D*.7+de)*.025,de,Math.cos(D*.6+de)*.025),C.scale.set(Ce,Ce,Ce),C.updateMatrix(),J.leaves.setMatrixAt(K.leaves++,C.matrix)}else J[X.t]&&(C.position.set(q,le+(X.t==="rock"?.23:X.t==="food"?.13:.025),te),C.rotation.set(0,de,0),C.scale.set(...X.t==="rock"?[.34+.18*Math.abs(Math.sin(de)),.3,.4]:X.t==="food"?[.15,.13,.15]:[.12,.04,.14]),C.updateMatrix(),J[X.t].setMatrixAt(K[X.t]++,C.matrix))}for(let[X,q]of Object.entries(J))q.count=K[X],q.instanceMatrix.needsUpdate=!0}function me(T,D="#ffe9b5"){let K=document.createElement("canvas");K.width=512,K.height=96;let X=K.getContext("2d");X.fillStyle="#123e43",X.beginPath(),X.roundRect(6,10,500,76,25),X.fill(),X.fillStyle=D,X.font="700 29px system-ui",X.textAlign="center",X.textBaseline="middle",X.fillText(String(T).slice(0,45),256,48,480);let q=new di(K);q.colorSpace=It;let te=new _s(new Cr({map:q,depthTest:!0,transparent:!0}));return te.scale.set(2.45,.46,1),te.position.y=2.32,te}let Ue=["#4c9cba","#df8168","#9974c7","#76b677"];function ue(T={},D="player",K=""){let X=vc(T,D,{ell:E,cube:y,tube:R,mesh:b,mat:f,geo:x});return o.add(X.root),X.name=K,X.tag=null,K&&(X.tag=me(K,T.shirt),X.root.add(X.tag)),X}let Ge=ue(za()),lt=new Map,z=ue({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),ut=ue({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function Ye(T,D,K){!D||D===T.name||(T.tag&&(T.root.remove(T.tag),T.tag.material.map.dispose(),T.tag.material.dispose()),T.name=D,T.tag=me(D,K),T.root.add(T.tag))}function He(T,D){if(T.lookKey!==JSON.stringify(D)){T.lookKey=JSON.stringify(D);for(let K of T.shirtParts)K.material=f(D.shirt||"#4c9cba");for(let K of T.skinParts)K.material=f(D.skin||"#dda879");for(let K of T.hairParts)K.material=f(D.hair||"#43332b");T.hairStyles.forEach((K,X)=>K.visible=X===(D.style||0))}}let Re=null,ot=0;function Ee(T,D,K,X,q,te,le,de){let Ce=D.x/xe,Te=D.y/xe,Se=de.sea(D.x,D.y),ke=Se?0:_c(Ce,Te,Re,ot);T.root.position.set(Ce,ke+(Se?de.raft?.18:-.95:0),Te),T.yaw+=D0(T.yaw,K)*Math.min(1,te*12),T.rig.rotation.y=T.yaw;let qe=X&&le>.05;T.phase+=qe?te*(le>4?10:7):0;let Rt=qe?le>4?.31:.22:0,we=T.phase;T.hips.position.y=(qe?.9:.92)+(qe?Math.cos(we*2)*.012:Math.sin(q*1.7)*.004);for(let ze of T.legs){let en=we+(ze.side<0?Math.PI:0),ht=Math.sin(en)*Rt,Dt=qe?Math.max(0,Math.cos(en))*.105:0,qt=Ce+Math.cos(T.yaw)*ze.side*.115+Math.sin(T.yaw)*ht,Ht=Te-Math.sin(T.yaw)*ze.side*.115+Math.cos(T.yaw)*ht,Yt=Se?0:_c(qt,Ht,Re,ot)-ke,ni=Lu(-T.hips.position.y+.07+Yt+Dt,ht);ze.thigh.rotation.x=ni.hip,ze.calf.rotation.x=ni.knee,ze.shoe.rotation.x=-ni.hip-ni.knee}for(let ze of T.arms)ze.arm.rotation.x=qe?Math.sin(we+(ze.side<0?0:Math.PI))*.45:Math.sin(q*1.3+ze.side)*.025,ze.arm.rotation.z=-ze.side*.07,ze.forearm.rotation.x=qe?-.22:-.08,Se&&!de.raft&&(ze.arm.rotation.x=-Math.PI/2+Math.sin(we+ze.side)*.35,ze.forearm.rotation.x=-.28);Fu(T,de.motion),T.raft.visible=!!(Se&&de.raft),T.raft.rotation.y=T.yaw,T.spear.visible=!!de.spear&&!Se&&!de.motion,de.blocked&&(T.arms[0].arm.rotation.x=-1,T.arms[0].forearm.rotation.x=-1),T.tag&&(T.tag.visible=Math.hypot(Ce-Ge.root.position.x,Te-Ge.root.position.z)<13),T.lastX=Ce,T.lastZ=Te}let Xe=new Oe;o.add(Xe);for(let T of[-.55,.55])for(let D of[-.27,.27])R(Xe,"#866642",[T,1.24,D],[.038,2.48,.038]);y(Xe,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),y(Xe,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let T of[-1,1]){let D=y(Xe,"#ba7655",[T*.39,2.63,0],[.9,.07,1.14]);D.rotation.z=-T*.34}let St=R(Xe,"#ba7655",[0,2.79,0],[.055,1.18,.055]);St.rotation.x=Math.PI/2;for(let T of[-.5,.5])y(Xe,"#e2dbc7",[0,2.4,T],[1.7,.1,.07]);for(let T=0;T<5;T++)y(Xe,"#a98961",[(T-2)*.24,.32,.344],[.21,.53,.025]);for(let T=0;T<4;T++)E(Xe,"#b1b967",[(T-1.5)*.19,.78,0],[.09,.08,.08]);let nt=new Oe;o.add(nt),y(nt,"#765734",[0,.18,0],[.56,.36,.4]),y(nt,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let T of[-.19,.19])y(nt,"#d5b15a",[T,.2,.215],[.045,.35,.026]);y(nt,"#ecd178",[0,.32,.22],[.08,.09,.03]);let I=new rt(new Ni(.24,.29,32),new on({color:"#ffe087",transparent:!0,opacity:.8,side:At,depthWrite:!1}));I.rotation.x=-Math.PI/2,o.add(I);let v={root:new Oe,tag:null,name:null};o.add(v.root),v.root.position.set(Us.x/xe,Qt(Us.x/xe,Us.y/xe),Us.y/xe),R(v.root,"#786040",[0,.95,0],[.12,1.9,.12]),y(v.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let Z=new Oe;o.add(Z);let ee=new rt(new Ni(.93,1.06,40),new on({color:"#54e4ef",transparent:!0,opacity:.85,side:At,depthWrite:!1}));ee.rotation.x=-Math.PI/2,ee.position.y=.04,Z.add(ee);let oe=b(Z,new Tt(.035,.035,1,8),new on({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),Q=null,De=0,pe="",Ae=new Oe,be=null,ce=null,ye=[];o.add(Ae);function We(T){let D=T.activities?.completed||0,K=D>=3&&T.activities.gardenClaimed<D,X=JSON.stringify([T.baseLevel,T.basePos,T.campfire,T.fire,D>=1,D>=3,D>=6,K,T.activities?.raceWon]);if(X!==pe){pe=X,ce&&(ce.geometry.dispose(),ce.material.dispose());for(let q of ye)q.dispose();if(ye=[],o.remove(Ae),Ae=new Oe,o.add(Ae),ce=null,be=null,T.basePos&&T.baseLevel){let q=Re,te=vu(Uu(q,ot,{cube:y,tube:R}),q,{cube:y,tube:R},h);if(Ae.add(te),te.traverse(le=>{["roof","wall","lintel"].includes(le.name)&&(le.material=le.material.clone(),le.material.transparent=!0,ye.push(le.material))}),D>=1)for(let le of[-1,1]){let de=E(te,"#ffdc80",[le*(q.width/xe/2-.15),2.35,q.depth/xe/2],[.09,.14,.09]);de.material=f("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(D>=6&&(R(te,"#6e5942",[q.width/xe/2+.2,1.75,-q.depth/xe/2],[.03,3.5,.03]),y(te,"#5bbca9",[q.width/xe/2+.55,3.1,-q.depth/xe/2],[.7,.42,.03])),D>=3&&T.garden){let le=T.garden,de=new Oe;de.position.set(le.x/xe,Qt(le.x/xe,le.y/xe),le.y/xe),Ae.add(de),y(de,"#785d40",[0,.07,0],[1.35,.14,1]);for(let Ce of[-.4,0,.4])for(let Te of[-.25,.25])R(de,"#587b37",[Ce,.21,Te],[.025,.3,.025]),E(de,"#6caa49",[Ce,.35,Te],[.16,.12,.12]),K&&E(de,"#cfa565",[Ce+.055,.27,Te],[.07,.065,.07])}}if(T.campfire&&T.fire){let q=new Oe,te=T.fire.x/xe,le=T.fire.y/xe;q.position.set(te,Qt(te,le),le),Ae.add(q);for(let de=0;de<8;de++){let Ce=de*Math.PI/4;E(q,"#777a6b",[Math.sin(Ce)*.3,.07,Math.cos(Ce)*.3],[.095,.07,.105])}for(let de of[.5,-.5]){let Ce=R(q,"#614b35",[0,.09,0],[.06,.5,.06]);Ce.rotation.z=Math.PI/2,Ce.rotation.y=de}ce=b(q,new Tn(.17,.46,8),new on({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),be=new Oi("#ffa145",2.5,4),be.position.y=.5,q.add(be)}}}let Ne=[];function ve(){let T=new Oe;o.add(T),E(T,"#765745",[0,.29,0],[.24,.25,.43]),E(T,"#765745",[0,.3,.4],[.19,.18,.2]),E(T,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let K of[-1,1]){let X=b(T,new Tn(.08,.17,3),f("#644937"),[K*.13,.47,.43]);X.rotation.z=K*.45}let D=[];for(let K of[-.17,.17])for(let X of[-.27,.24])D.push(R(T,"#5e493b",[K,.105,X],[.037,.2,.037]));return{root:T,legs:D,lastX:null,lastZ:null}}function Ze(T,D){for(;Ne.length<T.length;)Ne.push(ve());for(let K=0;K<Ne.length;K++){let X=Ne[K],q=T[K];if(X.root.visible=!!q,!q){X.lastX=X.lastZ=null;continue}let te=q.x/xe,le=q.y/xe,de=X.lastX===null?0:te-X.lastX,Ce=X.lastZ===null?0:le-X.lastZ,Te=Math.hypot(de,Ce)>1e-4;X.root.position.set(te,Qt(te,le),le),Te&&(X.root.rotation.y=Math.atan2(de,Ce));for(let Se=0;Se<4;Se++)X.legs[Se].rotation.x=Te?Math.sin(D*6+Se*Math.PI)*.15:0;X.lastX=te,X.lastZ=le}}let H=[new gt(_(),f("#adddd0",{roughness:.4}),96),new gt(new Tn(1,1,3),f("#668e93"),96),new gt(new Tn(1,1,3),f("#779da0"),96)];for(let T of H)T.count=0,T.frustumCulled=!1,o.add(T);function he(T,D,K){let X=0;for(let q of T||[]){let te=zu(q,D,K);if(!te||X>=96)continue;let le=(de,Ce,Te,Se,ke=0)=>{C.position.set(te.x+Math.sin(te.yaw)*Te+Math.cos(te.yaw)*de,te.y+Ce,te.z+Math.cos(te.yaw)*Te-Math.sin(te.yaw)*de),C.rotation.set(ke,te.yaw,0),C.scale.set(...Se),C.updateMatrix()};le(0,0,0,[.09,.045,.22]),H[0].setMatrixAt(X,C.matrix),le(0,0,-.25,[.095,.12,.025],Math.PI/2),H[1].setMatrixAt(X,C.matrix),le(0,.045,-.02,[.04,.1,.11]),H[2].setMatrixAt(X,C.matrix),X++}for(let q of H)q.count=X,q.instanceMatrix.needsUpdate=!0}let ge="",Pe=[];function fe(T,D){let K=JSON.stringify(T);if(K!==ge){ge=K;for(let X of Pe)o.remove(X),X.traverse(q=>{q.isSprite&&(q.material.map.dispose(),q.material.dispose()),q.userData.privateGeometry&&q.geometry.dispose()});Pe=[];for(let X of T||[]){if(X.type==="return")continue;let q=new Oe;q.position.set(X.x/xe,Qt(X.x/xe,X.y/xe),X.y/xe),o.add(q),Pe.push(q);let te=new rt(new Ni(.4,.46,28),f(X.done?"#6d9c89":"#8cebd5",{side:At}));if(te.rotation.x=-Math.PI/2,te.position.y=.03,te.userData.privateGeometry=!0,q.add(te),X.type==="fragment"&&(y(q,"#e1c587",[0,.38,0],[.37,.45,.06]),y(q,"#a68752",[0,.18,-.035],[.035,.42,.035]),y(q,"#826b4d",[0,.4,.035],[.19,.022,.02])),X.type==="rune"){E(q,"#87998a",[0,.26,0],[.27,.3,.21]);let de=me(X.symbol,"#ffe29b");de.position.y=.8,de.scale.set(.65,.32,1),q.add(de)}if(X.type==="chest"){y(q,"#795a39",[0,.2,0],[.65,.4,.44]),y(q,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let de of[-.21,.21])y(q,"#f1d584",[de,.23,.235],[.05,.36,.025])}if(X.type==="signal"){for(let de of[-1,1]){let Ce=R(q,"#8a6d49",[de*.22,.55,0],[.04,1.1,.04]);Ce.rotation.z=de*.22}if(y(q,"#927652",[0,1.1,0],[.7,.16,.45]),X.done){let de=E(q,"#ffe28d",[0,1.34,0],[.16,.21,.16]);de.material=f("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else y(q,"#344f57",[0,1.3,0],[.3,.18,.24])}let le=me(X.label,X.done?"#b5d1c5":"#ffe9b5");le.position.y=X.type==="signal"?1.95:1.35,q.add(le),q.userData.done=X.done}}for(let X of Pe)X.children[0].scale.setScalar(X.userData.done?1:1+Math.sin(D*2.8)*.05)}let re=[];for(let T=0;T<4;T++){let D=new _t().setFromPoints([new V(-.3,0,0),new V(0,-.08,0),new V(.3,0,0)]),K=new Li(D,new ui({color:"#fff7de"}));o.add(K),re.push(K)}let Ie=Math.atan2(-130,-60),$e=0,pt=4.8,je=!0,Ut=!0,Nt=0,Ct=null,Et=!1,nn=0,yt="first",rn=new Oe;a.add(rn);let mn=R(rn,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);mn.rotation.x=-.65;let zn=E(rn,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),Gt=new Oe;rn.add(Gt);let yi=R(Gt,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);yi.rotation.x=-.22;let vi=E(Gt,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),ti={};for(let T of["gather","fish","cook"]){let D=new Oe;D.position.set(.29,-.26,-.61),rn.add(D),Nu(T,D,{cube:y,tube:R,ell:E}),ti[T]=D}rn.traverse(T=>{T.isMesh&&(T.castShadow=!1,T.receiveShadow=!1,T.frustumCulled=!1)});let cn=new V,On=new V,hn=new V,ji=new V;function Mi(T,D=0){!je||t().paused||(Ie+=T,$e=_i($e+D,yt==="first"?-1.12:-.05,yt==="first"?1.12:.75))}function m(T){yt=T==="third"?"third":"first",$e=T==="third"?.22:0,a.fov=T==="third"?58:72,a.updateProjectionMatrix(),Ct=null,Ut=!0}i.addEventListener("pointerdown",T=>{let D=t();!je||!D.play||D.paused||T.button>0||Ct||(Ct={id:T.pointerId,x:T.clientX,y:T.clientY},i.setPointerCapture(T.pointerId))}),i.addEventListener("pointermove",T=>{!Ct||Ct.id!==T.pointerId||(Mi(-(T.clientX-Ct.x)*.006,(T.clientY-Ct.y)*.005),Ct.x=T.clientX,Ct.y=T.clientY)});let M=T=>{Ct?.id===T.pointerId&&(Ct=null)};for(let T of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(T,M);i.addEventListener("wheel",T=>{!je||t().paused||(T.preventDefault(),yt==="first"?(a.fov=_i(a.fov+T.deltaY*.025,58,85),a.updateProjectionMatrix()):pt=_i(pt+T.deltaY*.004,2.5,8))},{passive:!1}),i.addEventListener("webglcontextlost",T=>{T.preventDefault(),Et=!0,je=!1,Ct=null,n()}),i.addEventListener("webglcontextrestored",()=>{Et=!1,Ut=!0});function L(){r.setSize(innerWidth,innerHeight,!1),a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix()}function O(T){if(!je||Et)return;let D=t(),K=T/1e3,X=Nt?_i((T-Nt)/1e3,0,.06):1/60;Nt=T,Re=pu(D.basePos,D.baseLevel),ot=yc(Re),Ye(v,D.labels?.board,"#ffe087"),v.tag&&(v.tag.position.y=1.65,v.tag.scale.set(1.4,.36,1)),Z.visible=!!D.trail,D.trail&&(Z.position.set(D.trail.x/xe,Qt(D.trail.x/xe,D.trail.y/xe),D.trail.y/xe),oe.material.opacity=.35+.13*Math.sin(K*3),(De!==D.trailNumber||Q?.userData.text!==(D.trailNumber===4?D.labels?.finish||"4":D.trailNumber?String(D.trailNumber):D.trail.label))&&(Q&&(Z.remove(Q),Q.material.map.dispose(),Q.material.dispose()),De=D.trailNumber,Q=me(De===4?D.labels?.finish||"4":De?String(De):D.trail.label,"#54e4ef"),Q.userData.text=De===4?D.labels?.finish||"4":De?String(De):D.trail.label,Q.position.y=1.5,Q.scale.set(D.trailNumber?1:2.45,.4,1),Z.add(Q))),Ye(z,D.labels?.leon,"#b49966"),Ye(ut,D.labels?.nela,"#609991");let q=D.P.x/xe,te=D.P.y/xe;h.update(),$.update(K,Re),Be.value=K,ie.material.uniforms.uTime.value=K,j(D.objects,K),he(D.fishes,K,D.sea),fe(D.chapterMarkers,K);let le={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2};Ee(Ge,D.P,Number.isFinite(D.heading)?D.heading:le[D.face]||0,D.moving,K,X,D.fast?5.25:3,D),z.root.visible=ut.root.visible=!0;for(let[we,ze]of[[z,D.leon],[ut,D.nela]])Ee(we,ze,Math.atan2(q-ze.x/xe,te-ze.y/xe),!1,K,X,0,{...D,raft:!1,spear:!1,blocked:!1,motion:null});let de=new Set;for(let we of D.players){if(we.id===D.you)continue;de.add(we.id);let ze=lt.get(we.id),en=we.appearance?za(we.appearance):D.looks[we.slot]||{};(!ze||ze.name!==we.name)&&(ze&&G(ze),ze=ue(en,"player",we.name),lt.set(we.id,ze)),He(ze,en);let ht=ze.lastX===null?0:we.point.x/xe-ze.lastX,Dt=ze.lastZ===null?0:we.point.y/xe-ze.lastZ,qt=we.moving&&Math.hypot(ht,Dt)>.002?Math.atan2(ht,Dt):le[we.face]||0;Ee(ze,we.point,qt,we.moving,K,X,3,{...D,spear:D.spearOwned&&!we.spearStowed,blocked:we.blocked,motion:we.motion&&we.motion.remaining-(T-we.received)>0?{kind:we.motion.kind,phase:1-(we.motion.remaining-(T-we.received))/(mu[we.motion.kind]||1e3)}:null})}for(let[we,ze]of lt)de.has(we)||(G(ze),lt.delete(we));He(Ge,D.appearance||za()),Xe.position.set(D.leon.x/xe+.9,Qt(D.leon.x/xe+.9,D.leon.y/xe+.15),D.leon.y/xe+.15),nt.position.set(D.chest.x/xe,Qt(D.chest.x/xe,D.chest.y/xe),D.chest.y/xe),nt.visible=!D.treasure,We(D),Ze(D.enemies,K);let Ce=Re&&Math.abs(D.P.x-Re.floor.x)<Re.floor.w/2&&Math.abs(D.P.y-Re.floor.y)<Re.floor.h/2;for(let we of ye)we.opacity=Ce&&yt==="third"?.23:1,we.depthWrite=!(Ce&&yt==="third");ce&&(ce.scale.y=1+Math.sin(K*13)*.18,be.intensity=2.5+Math.sin(K*17)*.4);let Te=D.objects.filter(we=>Math.hypot(we.x-D.P.x,we.y-D.P.y)<75).sort((we,ze)=>Math.hypot(we.x-D.P.x,we.y-D.P.y)-Math.hypot(ze.x-D.P.x,ze.y-D.P.y))[0];I.visible=!!(D.play&&!D.paused&&Te),Te&&I.position.set(Te.x/xe,Qt(Te.x/xe,Te.y/xe)+.03,Te.y/xe);for(let we=0;we<re.length;we++){let ze=re[we];ze.position.set(19+Math.sin(K*.08+we*1.7)*8,7+Math.sin(K*.2+we)*.5,12+Math.cos(K*.1+we*1.3)*5),ze.rotation.y=K*.1+we,ze.scale.y=1+Math.sin(K*7+we)*.5}Ge.rig.visible=yt!=="first";let Se=D.moving&&!D.paused?Math.sin(Ge.phase*2)*.012:0,ke=Ba({x:q,z:te,surface:Ge.root.position.y,yaw:Ie,pitch:$e,mode:yt,distance:pt*(a.aspect<.85?1.12:1),bob:Se});if(cn.copy(ke.target),hn.copy(ke.position),yt==="third"){hn.y=Math.max(hn.y,Qt(hn.x,hn.z)+.55);let we=hn.clone().sub(cn),ze=we.length();we.normalize();let ht=new ki(cn,we,.08,ze).intersectObjects([Ae,Xe],!0).find(Dt=>Dt.object.isMesh&&Dt.distance>.1);ht&&hn.copy(cn).addScaledVector(we,Math.max(.35,ht.distance-.15))}yt==="first"||Ut||ji.distanceTo(Ge.root.position)>5?(a.position.copy(hn),On.copy(cn),Ut=!1):(uc(a.position,hn,X,8),uc(On,cn,X,12)),a.lookAt(yt==="first"?cn:On),ji.copy(Ge.root.position);let qe=new V;o.updateMatrixWorld(!0),o.traverse(we=>{if(!we.isSprite)return;we.userData.signScale||(we.userData.signScale=we.scale.clone()),we.scale.copy(we.userData.signScale),we.getWorldPosition(qe);let ze=Math.max(.1,qe.distanceTo(a.position)),en=we.scale.x*a.projectionMatrix.elements[0]*innerWidth/(2*ze),ht=Math.min(240,innerWidth*.52);en>ht&&we.scale.multiplyScalar(ht/en)});let Rt=!!D.spear||!!D.motion&&["gather","fish","cook"].includes(D.motion.kind);rn.visible=yt==="first"&&D.play&&Rt&&!D.sea(D.P.x,D.P.y),Gt.visible=!!D.spear&&!D.motion;for(let[we,ze]of Object.entries(ti))ze.visible=D.motion?.kind===we;rn.position.y=Se*.4,rn.rotation.x=D.motion?Math.sin(D.motion.phase*Math.PI*2)*.07:0,zn.material=f(D.appearance?.skin||"#dda879"),mn.material=f(D.appearance?.shirt||"#4c9cba"),ka(l,q,te),ie.position.copy(a.position),Y.update(K,a.position),r.render(o,a),D.play&&X>.038?nn+=X:nn=Math.max(0,nn-X),nn>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),L(),nn=0)}function G(T){o.remove(T.root),T.tag&&(T.tag.material.map.dispose(),T.tag.material.dispose())}function ne(T){return je=!!T&&!Et,Ct=null,Ut=!0,Nt=0,je}function ae(){je=!1,r.dispose(),P.dispose(),A.dispose(),Y.dispose(),ie.geometry.dispose(),ie.material.dispose(),k.traverse(T=>{T.geometry&&T.geometry.dispose(),T.material&&T.material.dispose()}),S.dispose(),$.dispose(),h.dispose(),tt.dispose();for(let T of[...Object.values(J),...H])T.geometry.dispose(),T.dispose();for(let T of p.values())T.dispose();for(let T of u.values())T.dispose()}return{frame:O,resize:L,orbit:Mi,setEnabled:ne,setCamera:m,dispose:ae,vector:(T,D)=>Du(T,D,Ie),get enabled(){return je},get yaw(){return Ie},get cameraMode(){return yt},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:lt.size+3,camera:yt,eye:a.position.toArray(),materials:h.stats()})}}return Hu(U0);})();
