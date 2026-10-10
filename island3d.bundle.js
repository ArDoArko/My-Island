var MyIsland3D=(()=>{var Ua=Object.defineProperty;var _u=Object.getOwnPropertyDescriptor;var yu=Object.getOwnPropertyNames;var vu=Object.prototype.hasOwnProperty;var Mu=(i,e)=>{for(var t in e)Ua(i,t,{get:e[t],enumerable:!0})},bu=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of yu(e))!vu.call(i,r)&&r!==t&&Ua(i,r,{get:()=>e[r],enumerable:!(n=_u(e,r))||n.enumerable});return i};var Su=i=>bu(Ua({},"__esModule",{value:!0}),i);var d0={};Mu(d0,{SCALE:()=>_e,actionPose:()=>gu,baseElevation:()=>ic,buildBase:()=>pu,buildHuman:()=>rc,cameraVector:()=>du,create:()=>u0,createCampaign:()=>l0,drawCampaign2D:()=>tc,fishPose:()=>xu,legPose:()=>fu,terrainHeight:()=>qt,walkSurface:()=>nc});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Uc=0,pl=1,Nc=2;var ml=1,_r=2,An=3,zn=0,Bt=1,bt=2,Hn=0,gi=1,gl=2,xl=3,_l=4,Fc=5,Qn=100,Oc=101,Bc=102,zc=103,kc=104,Vc=200,Gc=201,Hc=202,Wc=203,$s=204,Ks=205,Xc=206,qc=207,Yc=208,Zc=209,Jc=210,$c=211,Kc=212,jc=213,Qc=214,To=0,wo=1,Eo=2,xi=3,Ao=4,Ro=5,Co=6,Io=7,yl=0,eh=1,th=2,Wn=0,nh=1,ih=2,rh=3,yr=4,sh=5,oh=6,ah=7;var vl=300,Ii=301,Pi=302,Po=303,Do=304,as=306,ir=1e3,jn=1001,js=1002,Kt=1003,lh=1004;var ls=1005;var _n=1006,Lo=1007;var si=1008;var vn=1009,Ml=1010,bl=1011,vr=1012,Uo=1013,oi=1014,Mn=1015,Mr=1016,No=1017,Fo=1018,br=1020,Sl=35902,Tl=35899,wl=1021,El=1022,hn=1023,rr=1026,Sr=1027,Oo=1028,Bo=1029,Al=1030,zo=1031;var ko=1033,cs=33776,hs=33777,us=33778,ds=33779,Vo=35840,Go=35841,Ho=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Zo=37808,Jo=37809,$o=37810,Ko=37811,jo=37812,Qo=37813,ea=37814,ta=37815,na=37816,ia=37817,ra=37818,sa=37819,oa=37820,aa=37821,la=36492,ca=36494,ha=36495,ua=36283,da=36284,fa=36285,pa=36286;var Wr=2300,Qs=2301,Zs=2302,ol=2400,al=2401,ll=2402;var ch=3200,hh=3201;var Rl=0,uh=1,bn="",Tt="srgb",_i="srgb-linear",Xr="linear",gt="srgb";var mi=7680;var cl=519,dh=512,fh=513,ph=514,Cl=515,mh=516,gh=517,xh=518,_h=519,eo=35044;var Il="300 es",xn=2e3,qr=2001;var kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sc=1234567,Gr=Math.PI/180,sr=180/Math.PI;function On(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Pl(i,e){return(i%e+e)%e}function Tu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function wu(i,e,t){return i!==e?(t-i)/(e-i):0}function Hr(i,e,t){return(1-t)*i+t*e}function Eu(i,e,t,n){return Hr(i,e,1-Math.exp(-t*n))}function Au(i,e=1){return e-Math.abs(Pl(i,e*2)-e)}function Ru(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Iu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pu(i,e){return i+Math.random()*(e-i)}function Du(i){return i*(.5-Math.random())}function Lu(i){i!==void 0&&(sc=i);let e=sc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uu(i){return i*Gr}function Nu(i){return i*sr}function Fu(i){return(i&i-1)===0&&i!==0}function Ou(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zu(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),f=s((e-n)/2),p=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,c*f,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var fs={DEG2RAD:Gr,RAD2DEG:sr,generateUUID:On,clamp:tt,euclideanModulo:Pl,mapLinear:Tu,inverseLerp:wu,lerp:Hr,damp:Eu,pingpong:Au,smoothstep:Ru,smootherstep:Cu,randInt:Iu,randFloat:Pu,randFloatSpread:Du,seededRandom:Lu,degToRad:Uu,radToDeg:Nu,isPowerOfTwo:Fu,ceilPowerOfTwo:Ou,floorPowerOfTwo:Bu,setQuaternionFromProperEuler:zu,normalize:mt,denormalize:gn},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3],p=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(f!==x||c!==p||l!==d||h!==g){let m=1-a,u=c*p+l*d+h*g+f*x,_=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){let A=Math.sqrt(T),E=Math.atan2(A,u*_);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}let v=a*_;if(c=c*m+p*v,l=l*m+d*v,h=h*m+g*v,f=f*m+x*v,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=A,l*=A,h*=A,f*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[o],p=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+h*f+c*d-l*p,e[t+1]=c*g+h*p+l*f-a*d,e[t+2]=l*g+h*d+a*p-c*f,e[t+3]=h*g-a*f-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),f=a(s/2),p=c(n/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=p*h*f+l*d*g,this._y=l*d*f-p*h*g,this._z=l*h*g+p*d*f,this._w=l*h*f-p*d*g;break;case"YXZ":this._x=p*h*f+l*d*g,this._y=l*d*f-p*h*g,this._z=l*h*g-p*d*f,this._w=l*h*f+p*d*g;break;case"ZXY":this._x=p*h*f-l*d*g,this._y=l*d*f+p*h*g,this._z=l*h*g+p*d*f,this._w=l*h*f-p*d*g;break;case"ZYX":this._x=p*h*f-l*d*g,this._y=l*d*f+p*h*g,this._z=l*h*g-p*d*f,this._w=l*h*f+p*d*g;break;case"YZX":this._x=p*h*f+l*d*g,this._y=l*d*f+p*h*g,this._z=l*h*g-p*d*f,this._w=l*h*f-p*d*g;break;case"XZY":this._x=p*h*f-l*d*g,this._y=l*d*f-p*h*g,this._z=l*h*g+p*d*f,this._w=l*h*f+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],p=n+a+f;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-s*f,this.z=r+c*f+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Na=new F,oc=new Vn,$e=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],p=n[2],d=n[5],g=n[8],x=r[0],m=r[3],u=r[6],_=r[1],T=r[4],v=r[7],A=r[2],E=r[5],I=r[8];return s[0]=o*x+a*_+c*A,s[3]=o*m+a*T+c*E,s[6]=o*u+a*v+c*I,s[1]=l*x+h*_+f*A,s[4]=l*m+h*T+f*E,s[7]=l*u+h*v+f*I,s[2]=p*x+d*_+g*A,s[5]=p*m+d*T+g*E,s[8]=p*u+d*v+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,p=a*c-h*s,d=l*s-o*c,g=t*f+n*p+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(r*l-h*n)*x,e[2]=(a*n-r*o)*x,e[3]=p*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fa=new $e;function Dl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yh(){let i=or("canvas");return i.style.display="block",i}var ac={};function ar(i){i in ac||(ac[i]=!0,console.warn(i))}function vh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var lc=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ku(){let i={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bn?Xr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_i]:{primaries:e,whitePoint:n,transfer:Xr,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var ct=ku();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bi,to=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bi===void 0&&(Bi=or("canvas")),Bi.width=e.width,Bi.height=e.height;let r=Bi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vu=0,lr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oa(r[o].image)):s.push(Oa(r[o]))}else s=Oa(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?to.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gu=0,Ba=new F,Wt=class i extends kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jn,r=jn,s=_n,o=si,a=hn,c=vn,l=i.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=On(),this.name="",this.source=new lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ba).x}get height(){return this.source.getSize(Ba).y}get depth(){return this.source.getSize(Ba).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ir:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ir:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=vl;Wt.DEFAULT_ANISOTROPY=1;var ht=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],f=c[8],p=c[1],d=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,v=(d+1)/2,A=(u+1)/2,E=(h+p)/4,I=(f+x)/4,L=(g+m)/4;return T>v&&T>A?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=E/n,s=I/n):v>A?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=L/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=I/s,r=L/s),this.set(n,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(p-h)/_,this.w=Math.acos((l+d+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},no=class extends kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new Wt(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new lr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends no{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yr=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var io=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),ws.subVectors(this.max,Pr),zi.subVectors(e.a,Pr),ki.subVectors(e.b,Pr),Vi.subVectors(e.c,Pr),qn.subVectors(ki,zi),Yn.subVectors(Vi,ki),ui.subVectors(zi,Vi);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ui.z,ui.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ui.z,0,-ui.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ui.y,ui.x,0];return!za(t,zi,ki,Vi,ws)||(t=[1,0,0,0,1,0,0,0,1],!za(t,zi,ki,Vi,ws))?!1:(Es.crossVectors(qn,Yn),t=[Es.x,Es.y,Es.z],za(t,zi,ki,Vi,ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pn=[new F,new F,new F,new F,new F,new F,new F,new F],fn=new F,Ts=new wn,zi=new F,ki=new F,Vi=new F,qn=new F,Yn=new F,ui=new F,Pr=new F,ws=new F,Es=new F,di=new F;function za(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){di.fromArray(i,s);let a=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),c=e.dot(di),l=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Hu=new wn,Dr=new F,ka=new F,Gn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Dr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(ka)),this.expandByPoint(Dr.copy(e.center).sub(ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dn=new F,Va=new F,As=new F,Zn=new F,Ga=new F,Rs=new F,Ha=new F,cr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Va.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(Va);let s=e.distanceTo(t)*.5,o=-this.direction.dot(As),a=Zn.dot(this.direction),c=-Zn.dot(As),l=Zn.lengthSq(),h=Math.abs(1-o*o),f,p,d,g;if(h>0)if(f=o*c-a,p=o*a-c,g=s*h,f>=0)if(p>=-g)if(p<=g){let x=1/h;f*=x,p*=x,d=f*(f+o*p+2*a)+p*(o*f+p+2*c)+l}else p=s,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*c)+l;else p=-s,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*c)+l;else p<=-g?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+p*(p+2*c)+l):p<=g?(f=0,p=Math.min(Math.max(-s,-c),s),d=p*(p+2*c)+l):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+p*(p+2*c)+l);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Va).addScaledVector(As,p),d}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);let n=Dn.dot(this.direction),r=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,r,s){Ga.subVectors(t,e),Rs.subVectors(n,e),Ha.crossVectors(Ga,Rs);let o=this.direction.dot(Ha),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,e);let c=a*this.direction.dot(Rs.crossVectors(Zn,Rs));if(c<0)return null;let l=a*this.direction.dot(Ga.cross(Zn));if(l<0||c+l>o)return null;let h=-a*Zn.dot(Ha);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class i{constructor(e,t,n,r,s,o,a,c,l,h,f,p,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,f,p,d,g,x,m)}set(e,t,n,r,s,o,a,c,l,h,f,p,d,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=p,u[3]=d,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let p=o*h,d=o*f,g=a*h,x=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+g*l,t[5]=p-x*l,t[9]=-a*c,t[2]=x-p*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let p=c*h,d=c*f,g=l*h,x=l*f;t[0]=p+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+p*a,t[10]=o*c}else if(e.order==="ZXY"){let p=c*h,d=c*f,g=l*h,x=l*f;t[0]=p-x*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let p=o*h,d=o*f,g=a*h,x=a*f;t[0]=c*h,t[4]=g*l-d,t[8]=p*l+x,t[1]=c*f,t[5]=x*l+p,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let p=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-p*f,t[8]=g*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*f+g,t[10]=p-x*f}else if(e.order==="XZY"){let p=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=p*f+x,t[5]=o*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*h,t[10]=x*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wu,e,Xu)}lookAt(e,t,n){let r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Jn.crossVectors(n,Qt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Jn.crossVectors(n,Qt)),Jn.normalize(),Cs.crossVectors(Qt,Jn),r[0]=Jn.x,r[4]=Cs.x,r[8]=Qt.x,r[1]=Jn.y,r[5]=Cs.y,r[9]=Qt.y,r[2]=Jn.z,r[6]=Cs.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],p=n[9],d=n[13],g=n[2],x=n[6],m=n[10],u=n[14],_=n[3],T=n[7],v=n[11],A=n[15],E=r[0],I=r[4],L=r[8],b=r[12],M=r[1],U=r[5],z=r[9],q=r[13],B=r[2],W=r[6],Z=r[10],ne=r[14],K=r[3],pe=r[7],Se=r[11],Ue=r[15];return s[0]=o*E+a*M+c*B+l*K,s[4]=o*I+a*U+c*W+l*pe,s[8]=o*L+a*z+c*Z+l*Se,s[12]=o*b+a*q+c*ne+l*Ue,s[1]=h*E+f*M+p*B+d*K,s[5]=h*I+f*U+p*W+d*pe,s[9]=h*L+f*z+p*Z+d*Se,s[13]=h*b+f*q+p*ne+d*Ue,s[2]=g*E+x*M+m*B+u*K,s[6]=g*I+x*U+m*W+u*pe,s[10]=g*L+x*z+m*Z+u*Se,s[14]=g*b+x*q+m*ne+u*Ue,s[3]=_*E+T*M+v*B+A*K,s[7]=_*I+T*U+v*W+A*pe,s[11]=_*L+T*z+v*Z+A*Se,s[15]=_*b+T*q+v*ne+A*Ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],p=e[10],d=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*c*f-r*l*f-s*a*p+n*l*p+r*a*d-n*c*d)+x*(+t*c*d-t*l*p+s*o*p-r*o*d+r*l*h-s*c*h)+m*(+t*l*f-t*a*d-s*o*f+n*o*d+s*a*h-n*l*h)+u*(-r*a*h-t*c*f+t*a*p+r*o*f-n*o*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],p=e[10],d=e[11],g=e[12],x=e[13],m=e[14],u=e[15],_=f*m*l-x*p*l+x*c*d-a*m*d-f*c*u+a*p*u,T=g*p*l-h*m*l-g*c*d+o*m*d+h*c*u-o*p*u,v=h*x*l-g*f*l+g*a*d-o*x*d-h*a*u+o*f*u,A=g*f*c-h*x*c-g*a*p+o*x*p+h*a*m-o*f*m,E=t*_+n*T+r*v+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/E;return e[0]=_*I,e[1]=(x*p*s-f*m*s-x*r*d+n*m*d+f*r*u-n*p*u)*I,e[2]=(a*m*s-x*c*s+x*r*l-n*m*l-a*r*u+n*c*u)*I,e[3]=(f*c*s-a*p*s-f*r*l+n*p*l+a*r*d-n*c*d)*I,e[4]=T*I,e[5]=(h*m*s-g*p*s+g*r*d-t*m*d-h*r*u+t*p*u)*I,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*u-t*c*u)*I,e[7]=(o*p*s-h*c*s+h*r*l-t*p*l-o*r*d+t*c*d)*I,e[8]=v*I,e[9]=(g*f*s-h*x*s-g*n*d+t*x*d+h*n*u-t*f*u)*I,e[10]=(o*x*s-g*a*s+g*n*l-t*x*l-o*n*u+t*a*u)*I,e[11]=(h*a*s-o*f*s-h*n*l+t*f*l+o*n*d-t*a*d)*I,e[12]=A*I,e[13]=(h*x*r-g*f*r+g*n*p-t*x*p-h*n*m+t*f*m)*I,e[14]=(g*a*r-o*x*r-g*n*c+t*x*c+o*n*m-t*a*m)*I,e[15]=(o*f*r-h*a*r+h*n*c-t*f*c-o*n*p+t*a*p)*I,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,f=a+a,p=s*l,d=s*h,g=s*f,x=o*h,m=o*f,u=a*f,_=c*l,T=c*h,v=c*f,A=n.x,E=n.y,I=n.z;return r[0]=(1-(x+u))*A,r[1]=(d+v)*A,r[2]=(g-T)*A,r[3]=0,r[4]=(d-v)*E,r[5]=(1-(p+u))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(g+T)*I,r[9]=(m-_)*I,r[10]=(1-(p+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Gi.set(r[0],r[1],r[2]).length(),o=Gi.set(r[4],r[5],r[6]).length(),a=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);let l=1/s,h=1/o,f=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,t.setFromRotationMatrix(pn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=xn,c=!1){let l=this.elements,h=2*s/(t-e),f=2*s/(n-r),p=(t+e)/(t-e),d=(n+r)/(n-r),g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===xn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===qr)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=xn,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-r),p=-(t+e)/(t-e),d=-(n+r)/(n-r),g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===xn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===qr)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gi=new F,pn=new xt,Wu=new F(0,0,0),Xu=new F(1,1,1),Jn=new F,Cs=new F,Qt=new F,hc=new xt,uc=new Vn,yn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],f=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uc.setFromEuler(this),this.setFromQuaternion(uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qu=0,dc=new F,Hi=new Vn,Ln=new xt,Is=new F,Lr=new F,Yu=new F,Zu=new Vn,fc=new F(1,0,0),pc=new F(0,1,0),mc=new F(0,0,1),gc={type:"added"},Ju={type:"removed"},Wi={type:"childadded",child:null},Wa={type:"childremoved",child:null},vt=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new yn,n=new Vn,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new $e}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(fc,e)}rotateY(e){return this.rotateOnAxis(pc,e)}rotateZ(e){return this.rotateOnAxis(mc,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fc,e)}translateY(e){return this.translateOnAxis(pc,e)}translateZ(e){return this.translateOnAxis(mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Is.copy(e):Is.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Lr,Is,this.up):Ln.lookAt(Is,Lr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Hi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gc),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ju),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gc),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,Yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Zu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};vt.DEFAULT_UP=new F(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new F,Un=new F,Xa=new F,Nn=new F,Xi=new F,qi=new F,xc=new F,qa=new F,Ya=new F,Za=new F,Ja=new ht,$a=new ht,Ka=new ht,Fn=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),mn.subVectors(e,t),r.cross(mn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){mn.subVectors(r,t),Un.subVectors(n,t),Xa.subVectors(e,t);let o=mn.dot(mn),a=mn.dot(Un),c=mn.dot(Xa),l=Un.dot(Un),h=Un.dot(Xa),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;let p=1/f,d=(l*c-a*h)*p,g=(o*h-a*c)*p;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ja.setScalar(0),$a.setScalar(0),Ka.setScalar(0),Ja.fromBufferAttribute(e,t),$a.fromBufferAttribute(e,n),Ka.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ja,s.x),o.addScaledVector($a,s.y),o.addScaledVector(Ka,s.z),o}static isFrontFacing(e,t,n,r){return mn.subVectors(n,t),Un.subVectors(e,t),mn.cross(Un).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),mn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Xi.subVectors(r,n),qi.subVectors(s,n),qa.subVectors(e,n);let c=Xi.dot(qa),l=qi.dot(qa);if(c<=0&&l<=0)return t.copy(n);Ya.subVectors(e,r);let h=Xi.dot(Ya),f=qi.dot(Ya);if(h>=0&&f<=h)return t.copy(r);let p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Xi,o);Za.subVectors(e,s);let d=Xi.dot(Za),g=qi.dot(Za);if(g>=0&&d<=g)return t.copy(s);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(qi,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return xc.subVectors(s,r),a=(f-h)/(f-h+(d-g)),t.copy(r).addScaledVector(xc,a);let u=1/(m+x+p);return o=x*u,a=p*u,t.copy(n).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function ja(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=Pl(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ja(o,s,e+1/3),this.g=ja(o,s,e),this.b=ja(o,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Mh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ct.workingToColorSpace(Ht.copy(this),e),Math.round(tt(Ht.r*255,0,255))*65536+Math.round(tt(Ht.g*255,0,255))*256+Math.round(tt(Ht.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Ht.copy(this),t);let n=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Tt){ct.workingToColorSpace(Ht.copy(this),e);let t=Ht.r,n=Ht.g,r=Ht.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Ps);let n=Hr($n.h,Ps.h,t),r=Hr($n.s,Ps.s,t),s=Hr($n.l,Ps.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ht=new We;We.NAMES=Mh;var $u=0,En=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=On(),this.name="",this.type="Material",this.blending=gi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$s,this.blendDst=Ks,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$s&&(n.blendSrc=this.blendSrc),this.blendDst!==Ks&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tn=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wt=new F,Ds=new Ne,Ku=0,It=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ku++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eo,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eo&&(e.usage=this.usage),e}};var Zr=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Jr=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},ju=0,an=new xt,Qa=new vt,Yi=new F,en=new wn,Ur=new wn,Ut=new F,ft=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dl(e)?Jr:Zr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(en.min,Ur.min),en.expandByPoint(Ut),Ut.addVectors(en.max,Ur.max),en.expandByPoint(Ut)):(en.expandByPoint(Ur.min),en.expandByPoint(Ur.max))}en.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ut.fromBufferAttribute(a,l),c&&(Yi.fromBufferAttribute(e,l),Ut.add(Yi)),r=Math.max(r,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new F,c[L]=new F;let l=new F,h=new F,f=new F,p=new Ne,d=new Ne,g=new Ne,x=new F,m=new F;function u(L,b,M){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),p.fromBufferAttribute(s,L),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),h.sub(l),f.sub(l),d.sub(p),g.sub(p);let U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(U),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(U),a[L].add(x),a[b].add(x),a[M].add(x),c[L].add(m),c[b].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,b=_.length;L<b;++L){let M=_[L],U=M.start,z=M.count;for(let q=U,B=U+z;q<B;q+=3)u(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let T=new F,v=new F,A=new F,E=new F;function I(L){A.fromBufferAttribute(r,L),E.copy(A);let b=a[L];T.copy(b),T.sub(A.multiplyScalar(A.dot(b))).normalize(),v.crossVectors(E,b);let U=v.dot(c[L])<0?-1:1;o.setXYZW(L,T.x,T.y,T.z,U)}for(let L=0,b=_.length;L<b;++L){let M=_[L],U=M.start,z=M.count;for(let q=U,B=U+z;q<B;q+=3)I(e.getX(q+0)),I(e.getX(q+1)),I(e.getX(q+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,h=new F,f=new F;if(e)for(let p=0,d=e.count;p<d;p+=3){let g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,p=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let u=0;u<h;u++)p[g++]=l[d++]}return new It(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){let p=l[h],d=e(p,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){let d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],f=s[l];for(let p=0,d=f.length;p<d;p++)h.push(f[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_c=new xt,fi=new cr,Ls=new Gn,yc=new F,Us=new F,Ns=new F,Fs=new F,el=new F,Os=new F,vc=new F,Bs=new F,it=class extends vt{constructor(e=new ft,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Os.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],f=s[c];h!==0&&(el.fromBufferAttribute(f,e),o?Os.addScaledVector(el,h):Os.addScaledVector(el.sub(t),h))}t.add(Os)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(Ls.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Ls,yc)===null||fi.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(_c.copy(s).invert(),fi.copy(e.ray).applyMatrix4(_c),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=o[m.materialIndex],_=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,A=T;v<A;v+=3){let E=a.getX(v),I=a.getX(v+1),L=a.getX(v+2);r=zs(this,u,e,n,l,h,f,E,I,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,u=x;m<u;m+=3){let _=a.getX(m),T=a.getX(m+1),v=a.getX(m+2);r=zs(this,o,e,n,l,h,f,_,T,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=o[m.materialIndex],_=Math.max(m.start,d.start),T=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,A=T;v<A;v+=3){let E=v,I=v+1,L=v+2;r=zs(this,u,e,n,l,h,f,E,I,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,u=x;m<u;m+=3){let _=m,T=m+1,v=m+2;r=zs(this,o,e,n,l,h,f,_,T,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Qu(i,e,t,n,r,s,o,a){let c;if(e.side===Bt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===zn,a),c===null)return null;Bs.copy(a),Bs.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Bs);return l<t.near||l>t.far?null:{distance:l,point:Bs.clone(),object:i}}function zs(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Us),i.getVertexPosition(c,Ns),i.getVertexPosition(l,Fs);let h=Qu(i,e,t,n,Us,Ns,Fs,vc);if(h){let f=new F;Fn.getBarycoord(vc,Us,Ns,Fs,f),r&&(h.uv=Fn.getInterpolatedAttribute(r,a,c,l,f,new Ne)),s&&(h.uv1=Fn.getInterpolatedAttribute(s,a,c,l,f,new Ne)),o&&(h.normal=Fn.getInterpolatedAttribute(o,a,c,l,f,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new F,materialIndex:0};Fn.getNormal(Us,Ns,Fs,p.normal),h.face=p,h.barycoord=f}return h}var nn=class i extends ft{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],f=[],p=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(f,2));function g(x,m,u,_,T,v,A,E,I,L,b){let M=v/I,U=A/L,z=v/2,q=A/2,B=E/2,W=I+1,Z=L+1,ne=0,K=0,pe=new F;for(let Se=0;Se<Z;Se++){let Ue=Se*U-q;for(let Ze=0;Ze<W;Ze++){let nt=Ze*M-z;pe[x]=nt*_,pe[m]=Ue*T,pe[u]=B,l.push(pe.x,pe.y,pe.z),pe[x]=0,pe[m]=0,pe[u]=E>0?1:-1,h.push(pe.x,pe.y,pe.z),f.push(Ze/I),f.push(1-Se/L),ne+=1}}for(let Se=0;Se<L;Se++)for(let Ue=0;Ue<I;Ue++){let Ze=p+Ue+W*Se,nt=p+Ue+W*(Se+1),lt=p+(Ue+1)+W*(Se+1),et=p+(Ue+1)+W*Se;c.push(Ze,nt,et),c.push(nt,lt,et),K+=6}a.addGroup(d,K,b),d+=K,p+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Di(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Xt(i){let e={};for(let t=0;t<i.length;t++){let n=Di(i[t]);for(let r in n)e[r]=n[r]}return e}function ed(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ll(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var ma={clone:Di,merge:Xt},td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jt=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=td,this.fragmentShader=nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=ed(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$r=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kn=new F,Mc=new Ne,bc=new Ne,Ct=class extends $r{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Mc,bc),t.subVectors(bc,Mc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zi=-90,Ji=1,ro=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ct(Zi,Ji,e,t);r.layers=this.layers,this.add(r);let s=new Ct(Zi,Ji,e,t);s.layers=this.layers,this.add(s);let o=new Ct(Zi,Ji,e,t);o.layers=this.layers,this.add(o);let a=new Ct(Zi,Ji,e,t);a.layers=this.layers,this.add(a);let c=new Ct(Zi,Ji,e,t);c.layers=this.layers,this.add(c);let l=new Ct(Zi,Ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,p,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Kr=class extends Wt{constructor(e=[],t=Ii,n,r,s,o,a,c,l,h){super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},so=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Kr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nn(5,5,5),s=new jt({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Hn});s.uniforms.tEquirect.value=t;let o=new it(r,s),a=t.minFilter;return t.minFilter===si&&(t.minFilter=_n),new ro(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Be=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},id={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&p>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(id)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var yi=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vi=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},jr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eo,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new F,dr=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fr=class extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$i,Nr=new F,Ki=new F,ji=new F,Qi=new Ne,Fr=new Ne,bh=new xt,ks=new F,Or=new F,Vs=new F,Sc=new Ne,tl=new Ne,Tc=new Ne,Qr=class extends vt{constructor(e=new fr){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jr(t,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new dr(n,3,0,!1)),$i.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=$i,this.material=e,this.center=new Ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),bh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-ji.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Gs(ks.set(-.5,-.5,0),ji,o,Ki,r,s),Gs(Or.set(.5,-.5,0),ji,o,Ki,r,s),Gs(Vs.set(.5,.5,0),ji,o,Ki,r,s),Sc.set(0,0),tl.set(1,0),Tc.set(1,1);let a=e.ray.intersectTriangle(ks,Or,Vs,!1,Nr);if(a===null&&(Gs(Or.set(-.5,.5,0),ji,o,Ki,r,s),tl.set(0,1),a=e.ray.intersectTriangle(ks,Vs,Or,!1,Nr),a===null))return;let c=e.ray.origin.distanceTo(Nr);c<e.near||c>e.far||t.push({distance:c,point:Nr.clone(),uv:Fn.getInterpolation(Nr,ks,Or,Vs,Sc,tl,Tc,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Gs(i,e,t,n,r,s){Qi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Fr.x=s*Qi.x-r*Qi.y,Fr.y=r*Qi.x+s*Qi.y):Fr.copy(Qi),i.copy(e),i.x+=Fr.x,i.y+=Fr.y,i.applyMatrix4(bh)}var oo=class extends Wt{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Kt,h=Kt,f,p){super(null,o,a,c,l,h,r,s,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends It{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},er=new xt,wc=new xt,Hs=[],Ec=new wn,rd=new xt,Br=new it,zr=new Gn,Nt=class extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,rd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),Ec.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(Ec)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),zr.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),e.ray.intersectsSphere(zr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,er),wc.multiplyMatrices(n,er),Br.matrixWorld=wc,Br.raycast(e,Hs);for(let o=0,a=Hs.length;o<a;o++){let c=Hs[o];c.instanceId=s,c.object=this,t.push(c)}Hs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new oo(new Float32Array(r*this.count),r,this.count,Oo,Mn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},nl=new F,sd=new F,od=new $e,Sn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=nl.subVectors(n,t).cross(sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(nl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||od.getNormalMatrix(e),r=this.coplanarPoint(nl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new Gn,ad=new Ne(.5,.5),Ws=new F,mr=class{constructor(e=new Sn,t=new Sn,n=new Sn,r=new Sn,s=new Sn,o=new Sn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],f=s[5],p=s[6],d=s[7],g=s[8],x=s[9],m=s[10],u=s[11],_=s[12],T=s[13],v=s[14],A=s[15];if(r[0].setComponents(l-o,d-h,u-g,A-_).normalize(),r[1].setComponents(l+o,d+h,u+g,A+_).normalize(),r[2].setComponents(l+a,d+f,u+x,A+T).normalize(),r[3].setComponents(l-a,d-f,u-x,A-T).normalize(),n)r[4].setComponents(c,p,m,v).normalize(),r[5].setComponents(l-c,d-p,u-m,A-v).normalize();else if(r[4].setComponents(l-c,d-p,u-m,A-v).normalize(),t===xn)r[5].setComponents(l+c,d+p,u+m,A+v).normalize();else if(t===qr)r[5].setComponents(c,p,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);let t=ad.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ws.x=r.normal.x>0?e.max.x:e.min.x,Ws.y=r.normal.y>0?e.max.y:e.min.y,Ws.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ei=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ao=new F,lo=new F,Ac=new xt,kr=new cr,Xs=new Gn,il=new F,Rc=new F,Mi=class extends vt{constructor(e=new ft,t=new ei){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ao.fromBufferAttribute(t,r-1),lo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ao.distanceTo(lo);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),Xs.radius+=s,e.ray.intersectsSphere(Xs)===!1)return;Ac.copy(r).invert(),kr.copy(e.ray).applyMatrix4(Ac);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let u=h.getX(x),_=h.getX(x+1),T=qs(this,e,kr,c,u,_,x);T&&t.push(T)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),u=qs(this,e,kr,c,x,m,g-1);u&&t.push(u)}}else{let d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let u=qs(this,e,kr,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){let x=qs(this,e,kr,c,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function qs(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(ao.fromBufferAttribute(a,r),lo.fromBufferAttribute(a,s),t.distanceSqToSegment(ao,lo,il,Rc)>n)return;il.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(il);if(!(l<e.near||l>e.far))return{distance:l,point:Rc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ti=class extends Wt{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},es=class extends Wt{constructor(e,t,n=oi,r,s,o,a=Kt,c=Kt,l,h=rr,f=1){if(h!==rr&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:f};super(p,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ts=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ot=class i extends ft{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],f=[],p=[],d=[],g=0,x=[],m=n/2,u=0;_(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(p,3)),this.setAttribute("uv",new Je(d,2));function _(){let v=new F,A=new F,E=0,I=(t-e)/n;for(let L=0;L<=s;L++){let b=[],M=L/s,U=M*(t-e)+e;for(let z=0;z<=r;z++){let q=z/r,B=q*c+a,W=Math.sin(B),Z=Math.cos(B);A.x=U*W,A.y=-M*n+m,A.z=U*Z,f.push(A.x,A.y,A.z),v.set(W,I,Z).normalize(),p.push(v.x,v.y,v.z),d.push(q,1-M),b.push(g++)}x.push(b)}for(let L=0;L<r;L++)for(let b=0;b<s;b++){let M=x[b][L],U=x[b+1][L],z=x[b+1][L+1],q=x[b][L+1];(e>0||b!==0)&&(h.push(M,U,q),E+=3),(t>0||b!==s-1)&&(h.push(U,z,q),E+=3)}l.addGroup(u,E,0),u+=E}function T(v){let A=g,E=new Ne,I=new F,L=0,b=v===!0?e:t,M=v===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,m*M,0),p.push(0,M,0),d.push(.5,.5),g++;let U=g;for(let z=0;z<=r;z++){let B=z/r*c+a,W=Math.cos(B),Z=Math.sin(B);I.x=b*Z,I.y=m*M,I.z=b*W,f.push(I.x,I.y,I.z),p.push(0,M,0),E.x=W*.5+.5,E.y=Z*.5*M+.5,d.push(E.x,E.y),g++}for(let z=0;z<r;z++){let q=A+z,B=U+z;v===!0?h.push(B,B+1,q):h.push(B+1,B,q),L+=3}l.addGroup(u,L,v===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ni=class i extends Ot{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},co=class i extends ft{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let T=new F,v=new F,A=new F;for(let E=0;E<t.length;E+=3)d(t[E+0],T),d(t[E+1],v),d(t[E+2],A),c(T,v,A,_)}function c(_,T,v,A){let E=A+1,I=[];for(let L=0;L<=E;L++){I[L]=[];let b=_.clone().lerp(v,L/E),M=T.clone().lerp(v,L/E),U=E-L;for(let z=0;z<=U;z++)z===0&&L===E?I[L][z]=b:I[L][z]=b.clone().lerp(M,z/U)}for(let L=0;L<E;L++)for(let b=0;b<2*(E-L)-1;b++){let M=Math.floor(b/2);b%2===0?(p(I[L][M+1]),p(I[L+1][M]),p(I[L][M])):(p(I[L][M+1]),p(I[L+1][M+1]),p(I[L+1][M]))}}function l(_){let T=new F;for(let v=0;v<s.length;v+=3)T.x=s[v+0],T.y=s[v+1],T.z=s[v+2],T.normalize().multiplyScalar(_),s[v+0]=T.x,s[v+1]=T.y,s[v+2]=T.z}function h(){let _=new F;for(let T=0;T<s.length;T+=3){_.x=s[T+0],_.y=s[T+1],_.z=s[T+2];let v=m(_)/2/Math.PI+.5,A=u(_)/Math.PI+.5;o.push(v,1-A)}g(),f()}function f(){for(let _=0;_<o.length;_+=6){let T=o[_+0],v=o[_+2],A=o[_+4],E=Math.max(T,v,A),I=Math.min(T,v,A);E>.9&&I<.1&&(T<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),A<.2&&(o[_+4]+=1))}}function p(_){s.push(_.x,_.y,_.z)}function d(_,T){let v=_*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function g(){let _=new F,T=new F,v=new F,A=new F,E=new Ne,I=new Ne,L=new Ne;for(let b=0,M=0;b<s.length;b+=9,M+=6){_.set(s[b+0],s[b+1],s[b+2]),T.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),E.set(o[M+0],o[M+1]),I.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),A.copy(_).add(T).add(v).divideScalar(3);let U=m(A);x(E,M+0,_,U),x(I,M+2,T,U),x(L,M+4,v,U)}}function x(_,T,v,A){A<0&&_.x===1&&(o[T]=_.x-1),v.x===0&&v.z===0&&(o[T]=A/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var bi=class i extends co{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ns=class i extends ft{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=tt(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/t,f=new F,p=new Ne,d=new F,g=new F,x=new F,m=0,u=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,u=e[_+1].y-e[_].y,d.x=u*1,d.y=-m,d.z=u*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,u=e[_+1].y-e[_].y,d.x=u*1,d.y=-m,d.z=u*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=t;_++){let T=n+_*h*r,v=Math.sin(T),A=Math.cos(T);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*v,f.y=e[E].y,f.z=e[E].x*A,o.push(f.x,f.y,f.z),p.x=_/t,p.y=E/(e.length-1),a.push(p.x,p.y);let I=c[3*E+0]*v,L=c[3*E+1],b=c[3*E+0]*A;l.push(I,L,b)}}for(let _=0;_<t;_++)for(let T=0;T<e.length-1;T++){let v=T+_*e.length,A=v,E=v+e.length,I=v+e.length+1,L=v+1;s.push(A,E,L),s.push(I,L,E)}this.setIndex(s),this.setAttribute("position",new Je(o,3)),this.setAttribute("uv",new Je(a,2)),this.setAttribute("normal",new Je(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ln=class i extends ft{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,f=e/a,p=t/c,d=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let _=u*p-o;for(let T=0;T<l;T++){let v=T*f-s;g.push(v,-_,0),x.push(0,0,1),m.push(T/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let _=0;_<a;_++){let T=_+l*u,v=_+l*(u+1),A=_+1+l*(u+1),E=_+1+l*u;d.push(T,v,E),d.push(v,A,E)}this.setIndex(d),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Si=class i extends ft{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],c=[],l=[],h=[],f=e,p=(t-e)/r,d=new F,g=new Ne;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){let u=s+m/n*o;d.x=f*Math.cos(u),d.y=f*Math.sin(u),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}f+=p}for(let x=0;x<r;x++){let m=x*(n+1);for(let u=0;u<n;u++){let _=u+m,T=_,v=_+n+1,A=_+n+2,E=_+1;a.push(T,v,E),a.push(v,A,E)}}this.setIndex(a),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var cn=class i extends ft{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new F,p=new F,d=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let _=[],T=u/n,v=0;u===0&&o===0?v=.5/t:u===n&&c===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){let E=A/t;f.x=-e*Math.cos(r+E*s)*Math.sin(o+T*a),f.y=e*Math.cos(o+T*a),f.z=e*Math.sin(r+E*s)*Math.sin(o+T*a),g.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),m.push(E+v,1-T),_.push(l++)}h.push(_)}for(let u=0;u<n;u++)for(let _=0;_<t;_++){let T=h[u][_+1],v=h[u][_],A=h[u+1][_],E=h[u+1][_+1];(u!==0||o>0)&&d.push(T,v,E),(u!==n-1||c<Math.PI)&&d.push(v,A,E)}this.setIndex(d),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ti=class i extends ft{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new F,f=new F,p=new F;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){let x=g/r*s,m=d/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(f,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){let x=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,u=(r+1)*(d-1)+g,_=(r+1)*d+g;o.push(x,m,_),o.push(m,u,_)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Et=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},is=class extends Et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ho=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uo=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ys(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ld(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var wi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fo=class extends wi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ol,endingEnd:ol}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case al:s=e,a=2*t-n;break;case ll:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case al:o=e,c=2*n-t;break;case ll:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,u=-p*m+2*p*x-p*g,_=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,T=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let A=0;A!==a;++A)s[A]=u*o[h+A]+_*o[l+A]+T*o[c+A]+v*o[f+A];return s}},po=class extends wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(r-t),f=1-h;for(let p=0;p!==a;++p)s[p]=o[l+p]*f+o[c+p]*h;return s}},mo=class extends wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},rn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ys(t,this.TimeBufferType),this.values=Ys(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ys(e.times,Array),values:Ys(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wr:t=this.InterpolantFactoryMethodDiscrete;break;case Qs:t=this.InterpolantFactoryMethodLinear;break;case Zs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Qs;case this.InterpolantFactoryMethodSmooth:return Zs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&ld(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Zs,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let f=a*n,p=f-n,d=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[p+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,p=o*n;for(let d=0;d!==n;++d)t[p+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Qs;var ii=class extends rn{constructor(e,t,n){super(e,t,n)}};ii.prototype.ValueTypeName="bool";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Wr;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends rn{constructor(e,t,n,r){super(e,t,n,r)}};go.prototype.ValueTypeName="color";var xo=class extends rn{constructor(e,t,n,r){super(e,t,n,r)}};xo.prototype.ValueTypeName="number";var _o=class extends wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)Vn.slerpFlat(s,0,o,l-a,o,l,c);return s}},rs=class extends rn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new _o(this.times,this.values,this.getValueSize(),e)}};rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends rn{constructor(e,t,n){super(e,t,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Wr;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends rn{constructor(e,t,n,r){super(e,t,n,r)}};yo.prototype.ValueTypeName="vector";var Js={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},vo=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=l.length;f<p;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Sh=new vo,gr=class{constructor(e){this.manager=e!==void 0?e:Sh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr=new WeakMap,Mo=class extends gr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Js.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=tr.get(o);f===void 0&&(f=[],tr.set(o,f)),f.push({onLoad:t,onError:r})}return o}let a=or("img");function c(){h(),t&&t(this);let f=tr.get(this)||[];for(let p=0;p<f.length;p++){let d=f[p];d.onLoad&&d.onLoad(this)}tr.delete(this),s.manager.itemEnd(e)}function l(f){h(),r&&r(f),Js.remove(`image:${e}`);let p=tr.get(this)||[];for(let d=0;d<p.length;d++){let g=p[d];g.onError&&g.onError(f)}tr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Js.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var ss=class extends gr{constructor(e){super(e)}load(e,t,n,r){let s=new Wt,o=new Mo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},xr=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ei=class extends xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},rl=new xt,Cc=new F,Ic=new F,bo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Cc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cc),Ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ic),t.updateMatrixWorld(),rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Pc=new xt,Vr=new F,sl=new F,hl=class extends bo{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vr),sl.copy(n.position),sl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sl),n.updateMatrixWorld(),r.makeTranslation(-Vr.x,-Vr.y,-Vr.z),Pc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc,n.coordinateSystem,n.reversedDepth)}},Ai=class extends xr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new hl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},os=class extends $r{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ul=class extends bo{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ri=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new ul}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var So=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ul="\\[\\]\\.:\\/",cd=new RegExp("["+Ul+"]","g"),Nl="[^"+Ul+"]",hd="[^"+Ul.replace("\\.","")+"]",ud=/((?:WC+[\/:])*)/.source.replace("WC",Nl),dd=/(WCOD+)?/.source.replace("WCOD",hd),fd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),pd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),md=new RegExp("^"+ud+dd+fd+pd+"$"),gd=["material","materials","bones","map"],dl=class{constructor(e,t,n){let r=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cd,"")}static parseTrackName(e){let t=md.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);gd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=dl;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p0=new Float32Array(1);var Dc=new xt,Ci=class{constructor(e,t,n=0,r=1/0){this.ray=new cr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dc),this}intersectObject(e,t=!0,n=[]){return fl(e,this,n,t),n.sort(Lc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)fl(e[r],this,n,t);return n.sort(Lc),n}};function Lc(i,e){return i.distance-e.distance}function fl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)fl(s[o],e,t,!0)}}function Fl(i,e,t,n){let r=xd(n);switch(t){case wl:return i*e;case Oo:return i*e/r.components*r.byteLength;case Bo:return i*e/r.components*r.byteLength;case Al:return i*e*2/r.components*r.byteLength;case zo:return i*e*2/r.components*r.byteLength;case El:return i*e*3/r.components*r.byteLength;case hn:return i*e*4/r.components*r.byteLength;case ko:return i*e*4/r.components*r.byteLength;case cs:case hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case us:case ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Go:case Wo:return Math.max(i,16)*Math.max(e,8)/4;case Vo:case Ho:return Math.max(i,8)*Math.max(e,8)/2;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case la:case ca:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ua:case da:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fa:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xd(i){switch(i){case vn:case Ml:return{byteLength:1,components:1};case vr:case bl:case Mr:return{byteLength:2,components:1};case No:case Fo:return{byteLength:2,components:4};case oi:case Uo:case Mn:return{byteLength:4,components:1};case Sl:case Tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function bd(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<f.length;d++){let g=f[p],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,f[p]=x)}f.length=p+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
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
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
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
#endif`,Id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pd=`#ifdef USE_BATCHING
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
#endif`,Dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fd=`#ifdef USE_IRIDESCENCE
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
#endif`,Od=`#ifdef USE_BUMPMAP
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qd=`#define PI 3.141592653589793
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
} // validated`,Yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tf=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
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
}`,df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
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
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mf=`PhysicalMaterial material;
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
#endif`,bf=`struct PhysicalMaterial {
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
}`,Sf=`
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lf=`#if defined( USE_POINTS_UV )
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
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Of=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
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
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qf=`#ifdef USE_NORMALMAP
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
#endif`,Yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lp=`float getShadowMask() {
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
}`,cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hp=`#ifdef USE_SKINNING
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
#endif`,up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`#include <common>
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
}`,Ip=`#if DEPTH_PACKING == 3200
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
}`,Pp=`#define DISTANCE
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
}`,Dp=`#define DISTANCE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Op=`#include <common>
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
}`,Bp=`uniform vec3 diffuse;
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
}`,zp=`#define LAMBERT
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
}`,kp=`#define LAMBERT
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
}`,Vp=`#define MATCAP
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
}`,Gp=`#define MATCAP
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
}`,Hp=`#define NORMAL
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define PHONG
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
}`,qp=`#define PHONG
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
}`,Yp=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
}`,Jp=`#define TOON
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
}`,$p=`#define TOON
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
}`,Kp=`uniform float size;
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
}`,jp=`uniform vec3 diffuse;
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
}`,Qp=`#include <common>
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
}`,em=`uniform vec3 color;
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
}`,tm=`uniform float rotation;
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
}`,nm=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Sd,alphahash_pars_fragment:Td,alphamap_fragment:wd,alphamap_pars_fragment:Ed,alphatest_fragment:Ad,alphatest_pars_fragment:Rd,aomap_fragment:Cd,aomap_pars_fragment:Id,batching_pars_vertex:Pd,batching_vertex:Dd,begin_vertex:Ld,beginnormal_vertex:Ud,bsdfs:Nd,iridescence_fragment:Fd,bumpmap_pars_fragment:Od,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:zd,clipping_planes_pars_vertex:kd,clipping_planes_vertex:Vd,color_fragment:Gd,color_pars_fragment:Hd,color_pars_vertex:Wd,color_vertex:Xd,common:qd,cube_uv_reflection_fragment:Yd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:Jd,displacementmap_vertex:$d,emissivemap_fragment:Kd,emissivemap_pars_fragment:jd,colorspace_fragment:Qd,colorspace_pars_fragment:ef,envmap_fragment:tf,envmap_common_pars_fragment:nf,envmap_pars_fragment:rf,envmap_pars_vertex:sf,envmap_physical_pars_fragment:gf,envmap_vertex:of,fog_vertex:af,fog_pars_vertex:lf,fog_fragment:cf,fog_pars_fragment:hf,gradientmap_pars_fragment:uf,lightmap_pars_fragment:df,lights_lambert_fragment:ff,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:xf,lights_toon_pars_fragment:_f,lights_phong_fragment:yf,lights_phong_pars_fragment:vf,lights_physical_fragment:Mf,lights_physical_pars_fragment:bf,lights_fragment_begin:Sf,lights_fragment_maps:Tf,lights_fragment_end:wf,logdepthbuf_fragment:Ef,logdepthbuf_pars_fragment:Af,logdepthbuf_pars_vertex:Rf,logdepthbuf_vertex:Cf,map_fragment:If,map_pars_fragment:Pf,map_particle_fragment:Df,map_particle_pars_fragment:Lf,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Nf,morphinstance_vertex:Ff,morphcolor_vertex:Of,morphnormal_vertex:Bf,morphtarget_pars_vertex:zf,morphtarget_vertex:kf,normal_fragment_begin:Vf,normal_fragment_maps:Gf,normal_pars_fragment:Hf,normal_pars_vertex:Wf,normal_vertex:Xf,normalmap_pars_fragment:qf,clearcoat_normal_fragment_begin:Yf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:$f,opaque_fragment:Kf,packing:jf,premultiplied_alpha_fragment:Qf,project_vertex:ep,dithering_fragment:tp,dithering_pars_fragment:np,roughnessmap_fragment:ip,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:sp,shadowmap_pars_vertex:op,shadowmap_vertex:ap,shadowmask_pars_fragment:lp,skinbase_vertex:cp,skinning_pars_vertex:hp,skinning_vertex:up,skinnormal_vertex:dp,specularmap_fragment:fp,specularmap_pars_fragment:pp,tonemapping_fragment:mp,tonemapping_pars_fragment:gp,transmission_fragment:xp,transmission_pars_fragment:_p,uv_pars_fragment:yp,uv_pars_vertex:vp,uv_vertex:Mp,worldpos_vertex:bp,background_vert:Sp,background_frag:Tp,backgroundCube_vert:wp,backgroundCube_frag:Ep,cube_vert:Ap,cube_frag:Rp,depth_vert:Cp,depth_frag:Ip,distanceRGBA_vert:Pp,distanceRGBA_frag:Dp,equirect_vert:Lp,equirect_frag:Up,linedashed_vert:Np,linedashed_frag:Fp,meshbasic_vert:Op,meshbasic_frag:Bp,meshlambert_vert:zp,meshlambert_frag:kp,meshmatcap_vert:Vp,meshmatcap_frag:Gp,meshnormal_vert:Hp,meshnormal_frag:Wp,meshphong_vert:Xp,meshphong_frag:qp,meshphysical_vert:Yp,meshphysical_frag:Zp,meshtoon_vert:Jp,meshtoon_frag:$p,points_vert:Kp,points_frag:jp,shadow_vert:Qp,shadow_frag:em,sprite_vert:tm,sprite_frag:nm},be={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Rn={basic:{uniforms:Xt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Xt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Xt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Xt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Xt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Xt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Xt([be.points,be.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Xt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Xt([be.common,be.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Xt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Xt([be.sprite,be.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Xt([be.common,be.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Xt([be.lights,be.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Rn.physical={uniforms:Xt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var ga={r:0,b:0,g:0},Li=new yn,im=new xt;function rm(i,e,t,n,r,s,o){let a=new We(0),c=s===!0?0:1,l,h,f=null,p=0,d=null;function g(T){let v=T.isScene===!0?T.background:null;return v&&v.isTexture&&(v=(T.backgroundBlurriness>0?t:e).get(v)),v}function x(T){let v=!1,A=g(T);A===null?u(a,c):A&&A.isColor&&(u(A,1),v=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,v){let A=g(v);A&&(A.isCubeTexture||A.mapping===as)?(h===void 0&&(h=new it(new nn(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:Di(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Li.copy(v.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(im.makeRotationFromEuler(Li)),h.material.toneMapped=ct.getTransfer(A.colorSpace)!==gt,(f!==A||p!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=A,p=A.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new it(new ln(2,2),new jt({name:"BackgroundMaterial",uniforms:Di(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ct.getTransfer(A.colorSpace)!==gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||p!==A.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=A,p=A.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function u(T,v){T.getRGB(ga,Ll(i)),n.buffers.color.setClear(ga.r,ga.g,ga.b,v,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,v=1){a.set(T),c=v,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,u(a,c)},render:x,addToRenderList:m,dispose:_}}function sm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null),s=r,o=!1;function a(M,U,z,q,B){let W=!1,Z=f(q,z,U);s!==Z&&(s=Z,l(s.object)),W=d(M,q,z,B),W&&g(M,q,z,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(M,U,z,q),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,U,z){let q=z.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let W=B[U.id];W===void 0&&(W={},B[U.id]=W);let Z=W[q];return Z===void 0&&(Z=p(c()),W[q]=Z),Z}function p(M){let U=[],z=[],q=[];for(let B=0;B<t;B++)U[B]=0,z[B]=0,q[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:q,object:M,attributes:{},index:null}}function d(M,U,z,q){let B=s.attributes,W=U.attributes,Z=0,ne=z.getAttributes();for(let K in ne)if(ne[K].location>=0){let Se=B[K],Ue=W[K];if(Ue===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(Ue=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(Ue=M.instanceColor)),Se===void 0||Se.attribute!==Ue||Ue&&Se.data!==Ue.data)return!0;Z++}return s.attributesNum!==Z||s.index!==q}function g(M,U,z,q){let B={},W=U.attributes,Z=0,ne=z.getAttributes();for(let K in ne)if(ne[K].location>=0){let Se=W[K];Se===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor));let Ue={};Ue.attribute=Se,Se&&Se.data&&(Ue.data=Se.data),B[K]=Ue,Z++}s.attributes=B,s.attributesNum=Z,s.index=q}function x(){let M=s.newAttributes;for(let U=0,z=M.length;U<z;U++)M[U]=0}function m(M){u(M,0)}function u(M,U){let z=s.newAttributes,q=s.enabledAttributes,B=s.attributeDivisors;z[M]=1,q[M]===0&&(i.enableVertexAttribArray(M),q[M]=1),B[M]!==U&&(i.vertexAttribDivisor(M,U),B[M]=U)}function _(){let M=s.newAttributes,U=s.enabledAttributes;for(let z=0,q=U.length;z<q;z++)U[z]!==M[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function T(M,U,z,q,B,W,Z){Z===!0?i.vertexAttribIPointer(M,U,z,B,W):i.vertexAttribPointer(M,U,z,q,B,W)}function v(M,U,z,q){x();let B=q.attributes,W=z.getAttributes(),Z=U.defaultAttributeValues;for(let ne in W){let K=W[ne];if(K.location>=0){let pe=B[ne];if(pe===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){let Se=pe.normalized,Ue=pe.itemSize,Ze=e.get(pe);if(Ze===void 0)continue;let nt=Ze.buffer,lt=Ze.type,et=Ze.bytesPerElement,te=lt===i.INT||lt===i.UNSIGNED_INT||pe.gpuType===Uo;if(pe.isInterleavedBufferAttribute){let ce=pe.data,we=ce.stride,Ve=pe.offset;if(ce.isInstancedInterleavedBuffer){for(let De=0;De<K.locationSize;De++)u(K.location+De,ce.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let De=0;De<K.locationSize;De++)m(K.location+De);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let De=0;De<K.locationSize;De++)T(K.location+De,Ue/K.locationSize,lt,Se,we*et,(Ve+Ue/K.locationSize*De)*et,te)}else{if(pe.isInstancedBufferAttribute){for(let ce=0;ce<K.locationSize;ce++)u(K.location+ce,pe.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ce=0;ce<K.locationSize;ce++)m(K.location+ce);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ce=0;ce<K.locationSize;ce++)T(K.location+ce,Ue/K.locationSize,lt,Se,Ue*et,Ue/K.locationSize*ce*et,te)}}else if(Z!==void 0){let Se=Z[ne];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(K.location,Se);break;case 3:i.vertexAttrib3fv(K.location,Se);break;case 4:i.vertexAttrib4fv(K.location,Se);break;default:i.vertexAttrib1fv(K.location,Se)}}}}_()}function A(){L();for(let M in n){let U=n[M];for(let z in U){let q=U[z];for(let B in q)h(q[B].object),delete q[B];delete U[z]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let U=n[M.id];for(let z in U){let q=U[z];for(let B in q)h(q[B].object),delete q[B];delete U[z]}delete n[M.id]}function I(M){for(let U in n){let z=n[U];if(z[M.id]===void 0)continue;let q=z[M.id];for(let B in q)h(q[B].object),delete q[B];delete z[M.id]}}function L(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function om(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function a(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,n,1)}function c(l,h,f,p){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*p[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function am(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==hn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let L=I===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==vn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Mn&&!L)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:A,maxSamples:E}}function lm(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Sn,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let d=f.length!==0||p||n!==0||r;return r=p,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let _=s?0:n,T=_*4,v=u.clippingState||null;c.value=v,v=h(g,p,T,d);for(let A=0;A!==T;++A)v[A]=t[A];u.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=d+x*4,_=p.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let T=0,v=d;T!==x;++T,v+=4)o.copy(f[T]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function cm(i){let e=new WeakMap;function t(o,a){return a===Po?o.mapping=Ii:a===Do&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Po||a===Do)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new so(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var wr=4,Th=[.125,.215,.35,.446,.526,.582],Fi=20,Ol=new os,wh=new We,Bl=null,zl=0,kl=0,Vl=!1,Ni=(1+Math.sqrt(5))/2,Tr=1/Ni,Eh=[new F(-Ni,Tr,0),new F(Ni,Tr,0),new F(-Tr,0,Ni),new F(Tr,0,Ni),new F(0,Ni,-Tr),new F(0,Ni,Tr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],hm=new F,ya=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=hm}=s;Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl,zl,kl),this._renderer.xr.enabled=Vl,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Mr,format:hn,colorSpace:_i,depthBuffer:!1},r=Ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=um(s)),this._blurMaterial=dm(s,e,t)}return r}_compileMaterial(e){let t=new it(this._lodPlanes[0],e);this._renderer.compile(t,Ol)}_sceneToCubeUV(e,t,n,r,s){let c=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,d=f.toneMapping;f.getClearColor(wh),f.toneMapping=Wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));let x=new tn({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),m=new it(new nn,x),u=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,u=!0):(x.color.copy(wh),u=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));let A=this._cubeSize;xa(r,v*A,T>2?A:0,A,A),f.setRenderTarget(r),u&&f.render(m,c),f.render(e,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=p,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ii||e.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;xa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ol)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Eh[(r-s-1)%Eh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new it(this._lodPlanes[r],l),p=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Fi;m>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let u=[],_=0;for(let I=0;I<Fi;++I){let L=I/x,b=Math.exp(-L*L/2);u.push(b),I===0?_+=b:I<m&&(_+=2*b)}for(let I=0;I<u.length;I++)u[I]=u[I]/_;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:T}=this;p.dTheta.value=g,p.mipInt.value=T-n;let v=this._sizeLods[r],A=3*v*(r>T-wr?r-T+wr:0),E=4*(this._cubeSize-v);xa(t,A,E,3*v,2*v),c.setRenderTarget(t),c.render(f,Ol)}};function um(i){let e=[],t=[],n=[],r=i,s=i-wr+1+Th.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-wr?c=Th[o-i+wr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,m=2,u=1,_=new Float32Array(x*g*d),T=new Float32Array(m*g*d),v=new Float32Array(u*g*d);for(let E=0;E<d;E++){let I=E%3*2/3-1,L=E>2?0:-1,b=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];_.set(b,x*g*E),T.set(p,m*g*E);let M=[E,E,E,E,E,E];v.set(M,u*g*E)}let A=new ft;A.setAttribute("position",new It(_,x)),A.setAttribute("uv",new It(T,m)),A.setAttribute("faceIndex",new It(v,u)),e.push(A),r>wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ah(i,e,t){let n=new Tn(i,e,t);return n.texture.mapping=as,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function dm(i,e,t){let n=new Float32Array(Fi),r=new F(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Rh(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ch(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function fm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Po||c===Do,h=c===Ii||c===Pi;if(l||h){let f=e.get(a),p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new ya(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new ya(i)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function pm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function mm(i,e,t,n){let r={},s=new WeakMap;function o(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id];let d=s.get(p);d&&(e.remove(d),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(f){let p=f.attributes;for(let d in p)e.update(p[d],i.ARRAY_BUFFER)}function l(f){let p=[],d=f.index,g=f.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let T=0,v=_.length;T<v;T+=3){let A=_[T+0],E=_[T+1],I=_[T+2];p.push(A,E,E,I,I,A)}}else if(g!==void 0){let _=g.array;x=g.version;for(let T=0,v=_.length/3-1;T<v;T+=3){let A=T+0,E=T+1,I=T+2;p.push(A,E,E,I,I,A)}}else return;let m=new(Dl(p)?Jr:Zr)(p,1);m.version=x;let u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){let p=s.get(f);if(p){let d=f.index;d!==null&&p.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function gm(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,d){i.drawElements(n,d,s,p*o),t.update(d,n,1)}function l(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,p*o,g),t.update(d,n,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,g);let m=0;for(let u=0;u<g;u++)m+=d[u];t.update(m,n,1)}function f(p,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/o,d[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,p,0,x,0,g);let u=0;for(let _=0;_<g;_++)u+=d[_]*x[_];t.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function xm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function _m(i,e,t){let n=new WeakMap,r=new ht;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==f){let b=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],T=0;d===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let v=a.attributes.position.count*T,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*A*4*f),I=new Yr(E,v,A,f);I.type=Mn,I.needsUpdate=!0;let L=T*4;for(let M=0;M<f;M++){let U=m[M],z=u[M],q=_[M],B=v*A*4*M;for(let W=0;W<U.count;W++){let Z=W*L;d===!0&&(r.fromBufferAttribute(U,W),E[B+Z+0]=r.x,E[B+Z+1]=r.y,E[B+Z+2]=r.z,E[B+Z+3]=0),g===!0&&(r.fromBufferAttribute(z,W),E[B+Z+4]=r.x,E[B+Z+5]=r.y,E[B+Z+6]=r.z,E[B+Z+7]=0),x===!0&&(r.fromBufferAttribute(q,W),E[B+Z+8]=r.x,E[B+Z+9]=r.y,E[B+Z+10]=r.z,E[B+Z+11]=q.itemSize===4?r.w:1)}}p={count:f,texture:I,size:new Ne(v,A)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function ym(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return f}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Zh=new Wt,Ih=new es(1,1),Jh=new Yr,$h=new io,Kh=new Kr,Ph=[],Dh=[],Lh=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function Rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Ph[r];if(s===void 0&&(s=new Float32Array(r),Ph[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function va(i,e){let t=Dh[e];t===void 0&&(t=new Int32Array(e),Dh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Sm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Tm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Nh.set(n),i.uniformMatrix2fv(this.addr,!1,Nh),Dt(t,n)}}function wm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),Dt(t,n)}}function Em(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Lh.set(n),i.uniformMatrix4fv(this.addr,!1,Lh),Dt(t,n)}}function Am(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Pm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Nm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ih.compareFunction=Cl,s=Ih):s=Zh,t.setTexture2D(e||s,r)}function Fm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||$h,r)}function Om(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Kh,r)}function Bm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Jh,r)}function zm(i){switch(i){case 5126:return vm;case 35664:return Mm;case 35665:return bm;case 35666:return Sm;case 35674:return Tm;case 35675:return wm;case 35676:return Em;case 5124:case 35670:return Am;case 35667:case 35671:return Rm;case 35668:case 35672:return Cm;case 35669:case 35673:return Im;case 5125:return Pm;case 36294:return Dm;case 36295:return Lm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}function km(i,e){i.uniform1fv(this.addr,e)}function Vm(i,e){let t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function Gm(i,e){let t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function Hm(i,e){let t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function Wm(i,e){let t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xm(i,e){let t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qm(i,e){let t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ym(i,e){i.uniform1iv(this.addr,e)}function Zm(i,e){i.uniform2iv(this.addr,e)}function Jm(i,e){i.uniform3iv(this.addr,e)}function $m(i,e){i.uniform4iv(this.addr,e)}function Km(i,e){i.uniform1uiv(this.addr,e)}function jm(i,e){i.uniform2uiv(this.addr,e)}function Qm(i,e){i.uniform3uiv(this.addr,e)}function eg(i,e){i.uniform4uiv(this.addr,e)}function tg(i,e,t){let n=this.cache,r=e.length,s=va(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zh,s[o])}function ng(i,e,t){let n=this.cache,r=e.length,s=va(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$h,s[o])}function ig(i,e,t){let n=this.cache,r=e.length,s=va(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Kh,s[o])}function rg(i,e,t){let n=this.cache,r=e.length,s=va(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jh,s[o])}function sg(i){switch(i){case 5126:return km;case 35664:return Vm;case 35665:return Gm;case 35666:return Hm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return $m;case 5125:return Km;case 36294:return jm;case 36295:return Qm;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return rg}}var Hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zm(t.type)}},Wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sg(t.type)}},Xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Gl=/(\w+)(\])?(\[|\.)?/g;function Fh(i,e){i.seq.push(e),i.map[e.id]=e}function og(i,e,t){let n=i.name,r=n.length;for(Gl.lastIndex=0;;){let s=Gl.exec(n),o=Gl.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Fh(t,l===void 0?new Hl(a,i,e):new Wl(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Xl(a),Fh(t,f)),t=f}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);og(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Oh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ag=37297,lg=0;function cg(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Bh=new $e;function hg(i){ct._getMatrix(Bh,ct.workingColorSpace,i);let e=`mat3( ${Bh.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Xr:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+cg(i.getShaderSource(e),a)}else return s}function ug(i,e){let t=hg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dg(i,e){let t;switch(e){case nh:t="Linear";break;case ih:t="Reinhard";break;case rh:t="Cineon";break;case yr:t="ACESFilmic";break;case oh:t="AgX";break;case ah:t="Neutral";break;case sh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _a=new F;function fg(){ct.getLuminanceCoefficients(_a);let i=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function mg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ps(i){return i!==""}function kh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(i){return i.replace(xg,yg)}var _g=new Map;function yg(i,e){let t=Qe[e];if(t===void 0){let n=_g.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ql(t)}var vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(vg,Mg)}function Mg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function bg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_r?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function Sg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Pi:e="ENVMAP_TYPE_CUBE";break;case as:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function wg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case eh:e="ENVMAP_BLENDING_MIX";break;case th:e="ENVMAP_BLENDING_ADD";break}return e}function Eg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ag(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=bg(t),l=Sg(t),h=Tg(t),f=wg(t),p=Eg(t),d=pg(t),g=mg(s),x=r.createProgram(),m,u,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ps).join(`
`),u.length>0&&(u+=`
`)):(m=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),u=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Wn?dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,ug("linearToOutputTexel",t.outputColorSpace),fg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),o=ql(o),o=kh(o,t),o=Vh(o,t),a=ql(a),a=kh(a,t),a=Vh(a,t),o=Gh(o),a=Gh(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let T=_+m+o,v=_+u+a,A=Oh(r,r.VERTEX_SHADER,T),E=Oh(r,r.FRAGMENT_SHADER,v);r.attachShader(x,A),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(U){if(i.debug.checkShaderErrors){let z=r.getProgramInfoLog(x)||"",q=r.getShaderInfoLog(A)||"",B=r.getShaderInfoLog(E)||"",W=z.trim(),Z=q.trim(),ne=B.trim(),K=!0,pe=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,A,E);else{let Se=zh(r,A,"vertex"),Ue=zh(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+Se+`
`+Ue)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(Z===""||ne==="")&&(pe=!1);pe&&(U.diagnostics={runnable:K,programLog:W,vertexShader:{log:Z,prefix:m},fragmentShader:{log:ne,prefix:u}})}r.deleteShader(A),r.deleteShader(E),L=new Er(r,x),b=gg(r,x)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,ag)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}var Rg=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zl(e),t.set(e,n)),n}},Zl=class{constructor(e){this.id=Rg++,this.code=e,this.usedTimes=0}};function Cg(i,e,t,n,r,s,o){let a=new hr,c=new Yl,l=new Set,h=[],f=r.logarithmicDepthBuffer,p=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,U,z,q){let B=z.fog,W=q.geometry,Z=b.isMeshStandardMaterial?z.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),K=ne&&ne.mapping===as?ne.image.height:null,pe=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let Se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ue=Se!==void 0?Se.length:0,Ze=0;W.morphAttributes.position!==void 0&&(Ze=1),W.morphAttributes.normal!==void 0&&(Ze=2),W.morphAttributes.color!==void 0&&(Ze=3);let nt,lt,et,te;if(pe){let Xe=Rn[pe];nt=Xe.vertexShader,lt=Xe.fragmentShader}else nt=b.vertexShader,lt=b.fragmentShader,c.update(b),et=c.getVertexShaderID(b),te=c.getFragmentShaderID(b);let ce=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Ve=q.isInstancedMesh===!0,De=q.isBatchedMesh===!0,Ye=!!b.map,pt=!!b.matcap,D=!!ne,ut=!!b.aoMap,ze=!!b.lightMap,He=!!b.bumpMap,Te=!!b.normalMap,st=!!b.displacementMap,Re=!!b.emissiveMap,Fe=!!b.metalnessMap,_t=!!b.roughnessMap,je=b.anisotropy>0,R=b.clearcoat>0,y=b.dispersion>0,G=b.iridescence>0,Q=b.sheen>0,oe=b.transmission>0,J=je&&!!b.anisotropyMap,Ae=R&&!!b.clearcoatMap,me=R&&!!b.clearcoatNormalMap,Ee=R&&!!b.clearcoatRoughnessMap,Ce=G&&!!b.iridescenceMap,he=G&&!!b.iridescenceThicknessMap,Me=Q&&!!b.sheenColorMap,ke=Q&&!!b.sheenRoughnessMap,O=!!b.specularMap,N=!!b.specularColorMap,le=!!b.specularIntensityMap,C=oe&&!!b.transmissionMap,se=oe&&!!b.thicknessMap,ae=!!b.gradientMap,ve=!!b.alphaMap,re=b.alphaTest>0,Y=!!b.alphaHash,xe=!!b.extensions,ge=Wn;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ge=i.toneMapping);let Ge={shaderID:pe,shaderType:b.type,shaderName:b.name,vertexShader:nt,fragmentShader:lt,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:De,batchingColor:De&&q._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&q.instanceColor!==null,instancingMorph:Ve&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:_i,alphaToCoverage:!!b.alphaToCoverage,map:Ye,matcap:pt,envMap:D,envMapMode:D&&ne.mapping,envMapCubeUVHeight:K,aoMap:ut,lightMap:ze,bumpMap:He,normalMap:Te,displacementMap:p&&st,emissiveMap:Re,normalMapObjectSpace:Te&&b.normalMapType===uh,normalMapTangentSpace:Te&&b.normalMapType===Rl,metalnessMap:Fe,roughnessMap:_t,anisotropy:je,anisotropyMap:J,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:me,clearcoatRoughnessMap:Ee,dispersion:y,iridescence:G,iridescenceMap:Ce,iridescenceThicknessMap:he,sheen:Q,sheenColorMap:Me,sheenRoughnessMap:ke,specularMap:O,specularColorMap:N,specularIntensityMap:le,transmission:oe,transmissionMap:C,thicknessMap:se,gradientMap:ae,opaque:b.transparent===!1&&b.blending===gi&&b.alphaToCoverage===!1,alphaMap:ve,alphaTest:re,alphaHash:Y,combine:b.combine,mapUv:Ye&&x(b.map.channel),aoMapUv:ut&&x(b.aoMap.channel),lightMapUv:ze&&x(b.lightMap.channel),bumpMapUv:He&&x(b.bumpMap.channel),normalMapUv:Te&&x(b.normalMap.channel),displacementMapUv:st&&x(b.displacementMap.channel),emissiveMapUv:Re&&x(b.emissiveMap.channel),metalnessMapUv:Fe&&x(b.metalnessMap.channel),roughnessMapUv:_t&&x(b.roughnessMap.channel),anisotropyMapUv:J&&x(b.anisotropyMap.channel),clearcoatMapUv:Ae&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&x(b.sheenRoughnessMap.channel),specularMapUv:O&&x(b.specularMap.channel),specularColorMapUv:N&&x(b.specularColorMap.channel),specularIntensityMapUv:le&&x(b.specularIntensityMap.channel),transmissionMapUv:C&&x(b.transmissionMap.channel),thicknessMapUv:se&&x(b.thicknessMap.channel),alphaMapUv:ve&&x(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Te||je),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!W.attributes.uv&&(Ye||ve),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:we,skinning:q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:Ye&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===gt,decodeVideoTextureEmissive:Re&&b.emissiveMap.isVideoTexture===!0&&ct.getTransfer(b.emissiveMap.colorSpace)===gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bt,flipSided:b.side===Bt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&b.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function u(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)M.push(U),M.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(_(M,b),T(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function T(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let M=g[b.type],U;if(M){let z=Rn[M];U=ma.clone(z.uniforms)}else U=b.uniforms;return U}function A(b,M){let U;for(let z=0,q=h.length;z<q;z++){let B=h[z];if(B.cacheKey===M){U=B,++U.usedTimes;break}}return U===void 0&&(U=new Ag(i,M,b,s),h.push(U)),U}function E(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function I(b){c.remove(b)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:I,programs:h,dispose:L}}function Ig(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Pg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xh(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,p,d,g,x,m){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=d,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=x,u.group=m),e++,u}function a(f,p,d,g,x,m){let u=o(f,p,d,g,x,m);d.transmission>0?n.push(u):d.transparent===!0?r.push(u):t.push(u)}function c(f,p,d,g,x,m){let u=o(f,p,d,g,x,m);d.transmission>0?n.unshift(u):d.transparent===!0?r.unshift(u):t.unshift(u)}function l(f,p){t.length>1&&t.sort(f||Pg),n.length>1&&n.sort(p||Wh),r.length>1&&r.sort(p||Wh)}function h(){for(let f=e,p=i.length;f<p;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function Dg(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Xh,i.set(n,[o])):r>=s.length?(o=new Xh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Lg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new We};break;case"SpotLight":t={position:new F,direction:new F,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Ug(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ng=0;function Fg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Og(i){let e=new Lg,t=Ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let r=new F,s=new xt,o=new xt;function a(l){let h=0,f=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,u=0,_=0,T=0,v=0,A=0,E=0,I=0;l.sort(Fg);for(let b=0,M=l.length;b<M;b++){let U=l[b],z=U.color,q=U.intensity,B=U.distance,W=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*q,f+=z.g*q,p+=z.b*q;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(U.sh.coefficients[Z],q);I++}else if(U.isDirectionalLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ne=U.shadow,K=t.get(U);K.shadowIntensity=ne.intensity,K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,n.directionalShadow[d]=K,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=U.shadow.matrix,_++}n.directional[d]=Z,d++}else if(U.isSpotLight){let Z=e.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(z).multiplyScalar(q),Z.distance=B,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,n.spot[x]=Z;let ne=U.shadow;if(U.map&&(n.spotLightMap[A]=U.map,A++,ne.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[x]=ne.matrix,U.castShadow){let K=t.get(U);K.shadowIntensity=ne.intensity,K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,n.spotShadow[x]=K,n.spotShadowMap[x]=W,v++}x++}else if(U.isRectAreaLight){let Z=e.get(U);Z.color.copy(z).multiplyScalar(q),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=Z,m++}else if(U.isPointLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){let ne=U.shadow,K=t.get(U);K.shadowIntensity=ne.intensity,K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,K.shadowCameraNear=ne.camera.near,K.shadowCameraFar=ne.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=U.shadow.matrix,T++}n.point[g]=Z,g++}else if(U.isHemisphereLight){let Z=e.get(U);Z.skyColor.copy(U.color).multiplyScalar(q),Z.groundColor.copy(U.groundColor).multiplyScalar(q),n.hemi[u]=Z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;let L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==_||L.numPointShadows!==T||L.numSpotShadows!==v||L.numSpotMaps!==A||L.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,L.directionalLength=d,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=_,L.numPointShadows=T,L.numSpotShadows=v,L.numSpotMaps=A,L.numLightProbes=I,n.version=Ng++)}function c(l,h){let f=0,p=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,_=l.length;u<_;u++){let T=l[u];if(T.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(T.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(T.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function qh(i){let e=new Og(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Bg(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new qh(i),e.set(r,[a])):s>=o.length?(a=new qh(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
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
}`;function Vg(i,e,t){let n=new mr,r=new Ne,s=new Ne,o=new ht,a=new ho({depthPacking:hh}),c=new uo,l={},h=t.maxTextureSize,f={[zn]:Bt,[Bt]:zn,[bt]:bt},p=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:zg,fragmentShader:kg}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new ft;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let u=this.type;this.render=function(E,I,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Hn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=u!==An&&this.type===An,B=u===An&&this.type!==An;for(let W=0,Z=E.length;W<Z;W++){let ne=E[W],K=ne.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);let pe=K.getFrameExtents();if(r.multiply(pe),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/pe.x),r.x=s.x*pe.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/pe.y),r.y=s.y*pe.y,K.mapSize.y=s.y)),K.map===null||q===!0||B===!0){let Ue=this.type!==An?{minFilter:Kt,magFilter:Kt}:{};K.map!==null&&K.map.dispose(),K.map=new Tn(r.x,r.y,Ue),K.map.texture.name=ne.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let Se=K.getViewportCount();for(let Ue=0;Ue<Se;Ue++){let Ze=K.getViewport(Ue);o.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),z.viewport(o),K.updateMatrices(ne,Ue),n=K.getFrustum(),v(I,L,K.camera,ne,this.type)}K.isPointLightShadow!==!0&&this.type===An&&_(K,L),K.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,U)};function _(E,I){let L=e.update(x);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Tn(r.x,r.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,L,p,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,L,d,x,null)}function T(E,I,L,b){let M=null,U=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)M=U;else if(M=L.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let z=M.uuid,q=I.uuid,B=l[z];B===void 0&&(B={},l[z]=B);let W=B[q];W===void 0&&(W=M.clone(),B[q]=W,I.addEventListener("dispose",A)),M=W}if(M.visible=I.visible,M.wireframe=I.wireframe,b===An?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:f[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=i.properties.get(M);z.light=L}return M}function v(E,I,L,b,M){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===An)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let q=e.update(E),B=E.material;if(Array.isArray(B)){let W=q.groups;for(let Z=0,ne=W.length;Z<ne;Z++){let K=W[Z],pe=B[K.materialIndex];if(pe&&pe.visible){let Se=T(E,pe,b,M);E.onBeforeShadow(i,E,I,L,q,Se,K),i.renderBufferDirect(L,null,q,Se,E,K),E.onAfterShadow(i,E,I,L,q,Se,K)}}}else if(B.visible){let W=T(E,B,b,M);E.onBeforeShadow(i,E,I,L,q,W,null),i.renderBufferDirect(L,null,q,W,E,null),E.onAfterShadow(i,E,I,L,q,W,null)}}let z=E.children;for(let q=0,B=z.length;q<B;q++)v(z[q],I,L,b,M)}function A(E){E.target.removeEventListener("dispose",A);for(let L in l){let b=l[L],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Gg={[To]:wo,[Eo]:Co,[Ao]:Io,[xi]:Ro,[wo]:To,[Co]:Eo,[Io]:Ao,[Ro]:xi};function Hg(i,e){function t(){let C=!1,se=new ht,ae=null,ve=new ht(0,0,0,0);return{setMask:function(re){ae!==re&&!C&&(i.colorMask(re,re,re,re),ae=re)},setLocked:function(re){C=re},setClear:function(re,Y,xe,ge,Ge){Ge===!0&&(re*=ge,Y*=ge,xe*=ge),se.set(re,Y,xe,ge),ve.equals(se)===!1&&(i.clearColor(re,Y,xe,ge),ve.copy(se))},reset:function(){C=!1,ae=null,ve.set(-1,0,0,0)}}}function n(){let C=!1,se=!1,ae=null,ve=null,re=null;return{setReversed:function(Y){if(se!==Y){let xe=e.get("EXT_clip_control");Y?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),se=Y;let ge=re;re=null,this.setClear(ge)}},getReversed:function(){return se},setTest:function(Y){Y?ce(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Y){ae!==Y&&!C&&(i.depthMask(Y),ae=Y)},setFunc:function(Y){if(se&&(Y=Gg[Y]),ve!==Y){switch(Y){case To:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case xi:i.depthFunc(i.LEQUAL);break;case Ao:i.depthFunc(i.EQUAL);break;case Ro:i.depthFunc(i.GEQUAL);break;case Co:i.depthFunc(i.GREATER);break;case Io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Y}},setLocked:function(Y){C=Y},setClear:function(Y){re!==Y&&(se&&(Y=1-Y),i.clearDepth(Y),re=Y)},reset:function(){C=!1,ae=null,ve=null,re=null,se=!1}}}function r(){let C=!1,se=null,ae=null,ve=null,re=null,Y=null,xe=null,ge=null,Ge=null;return{setTest:function(Xe){C||(Xe?ce(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Xe){se!==Xe&&!C&&(i.stencilMask(Xe),se=Xe)},setFunc:function(Xe,At,Yt){(ae!==Xe||ve!==At||re!==Yt)&&(i.stencilFunc(Xe,At,Yt),ae=Xe,ve=At,re=Yt)},setOp:function(Xe,At,Yt){(Y!==Xe||xe!==At||ge!==Yt)&&(i.stencilOp(Xe,At,Yt),Y=Xe,xe=At,ge=Yt)},setLocked:function(Xe){C=Xe},setClear:function(Xe){Ge!==Xe&&(i.clearStencil(Xe),Ge=Xe)},reset:function(){C=!1,se=null,ae=null,ve=null,re=null,Y=null,xe=null,ge=null,Ge=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,h={},f={},p=new WeakMap,d=[],g=null,x=!1,m=null,u=null,_=null,T=null,v=null,A=null,E=null,I=new We(0,0,0),L=0,b=!1,M=null,U=null,z=null,q=null,B=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ne=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=ne>=1):K.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=ne>=2);let pe=null,Se={},Ue=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),nt=new ht().fromArray(Ue),lt=new ht().fromArray(Ze);function et(C,se,ae,ve){let re=new Uint8Array(4),Y=i.createTexture();i.bindTexture(C,Y),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<ae;xe++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(se+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return Y}let te={};te[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(xi),He(!1),Te(pl),ce(i.CULL_FACE),ut(Hn);function ce(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function we(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Ve(C,se){return f[C]!==se?(i.bindFramebuffer(C,se),f[C]=se,C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=se),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=se),!0):!1}function De(C,se){let ae=d,ve=!1;if(C){ae=p.get(se),ae===void 0&&(ae=[],p.set(se,ae));let re=C.textures;if(ae.length!==re.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,xe=re.length;Y<xe;Y++)ae[Y]=i.COLOR_ATTACHMENT0+Y;ae.length=re.length,ve=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ae)}function Ye(C){return g!==C?(i.useProgram(C),g=C,!0):!1}let pt={[Qn]:i.FUNC_ADD,[Oc]:i.FUNC_SUBTRACT,[Bc]:i.FUNC_REVERSE_SUBTRACT};pt[zc]=i.MIN,pt[kc]=i.MAX;let D={[Vc]:i.ZERO,[Gc]:i.ONE,[Hc]:i.SRC_COLOR,[$s]:i.SRC_ALPHA,[Jc]:i.SRC_ALPHA_SATURATE,[Yc]:i.DST_COLOR,[Xc]:i.DST_ALPHA,[Wc]:i.ONE_MINUS_SRC_COLOR,[Ks]:i.ONE_MINUS_SRC_ALPHA,[Zc]:i.ONE_MINUS_DST_COLOR,[qc]:i.ONE_MINUS_DST_ALPHA,[$c]:i.CONSTANT_COLOR,[Kc]:i.ONE_MINUS_CONSTANT_COLOR,[jc]:i.CONSTANT_ALPHA,[Qc]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(C,se,ae,ve,re,Y,xe,ge,Ge,Xe){if(C===Hn){x===!0&&(we(i.BLEND),x=!1);return}if(x===!1&&(ce(i.BLEND),x=!0),C!==Fc){if(C!==m||Xe!==b){if((u!==Qn||v!==Qn)&&(i.blendEquation(i.FUNC_ADD),u=Qn,v=Qn),Xe)switch(C){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}_=null,T=null,A=null,E=null,I.set(0,0,0),L=0,m=C,b=Xe}return}re=re||se,Y=Y||ae,xe=xe||ve,(se!==u||re!==v)&&(i.blendEquationSeparate(pt[se],pt[re]),u=se,v=re),(ae!==_||ve!==T||Y!==A||xe!==E)&&(i.blendFuncSeparate(D[ae],D[ve],D[Y],D[xe]),_=ae,T=ve,A=Y,E=xe),(ge.equals(I)===!1||Ge!==L)&&(i.blendColor(ge.r,ge.g,ge.b,Ge),I.copy(ge),L=Ge),m=C,b=!1}function ze(C,se){C.side===bt?we(i.CULL_FACE):ce(i.CULL_FACE);let ae=C.side===Bt;se&&(ae=!ae),He(ae),C.blending===gi&&C.transparent===!1?ut(Hn):ut(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),s.setMask(C.colorWrite);let ve=C.stencilWrite;a.setTest(ve),ve&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Re(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(C){M!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),M=C)}function Te(C){C!==Uc?(ce(i.CULL_FACE),C!==U&&(C===pl?i.cullFace(i.BACK):C===Nc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),U=C}function st(C){C!==z&&(Z&&i.lineWidth(C),z=C)}function Re(C,se,ae){C?(ce(i.POLYGON_OFFSET_FILL),(q!==se||B!==ae)&&(i.polygonOffset(se,ae),q=se,B=ae)):we(i.POLYGON_OFFSET_FILL)}function Fe(C){C?ce(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function _t(C){C===void 0&&(C=i.TEXTURE0+W-1),pe!==C&&(i.activeTexture(C),pe=C)}function je(C,se,ae){ae===void 0&&(pe===null?ae=i.TEXTURE0+W-1:ae=pe);let ve=Se[ae];ve===void 0&&(ve={type:void 0,texture:void 0},Se[ae]=ve),(ve.type!==C||ve.texture!==se)&&(pe!==ae&&(i.activeTexture(ae),pe=ae),i.bindTexture(C,se||te[C]),ve.type=C,ve.texture=se)}function R(){let C=Se[pe];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{i.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{i.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{i.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ce(){try{i.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{i.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(C){nt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),nt.copy(C))}function ke(C){lt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),lt.copy(C))}function O(C,se){let ae=l.get(se);ae===void 0&&(ae=new WeakMap,l.set(se,ae));let ve=ae.get(C);ve===void 0&&(ve=i.getUniformBlockIndex(se,C.name),ae.set(C,ve))}function N(C,se){let ve=l.get(se).get(C);c.get(se)!==ve&&(i.uniformBlockBinding(se,ve,C.__bindingPointIndex),c.set(se,ve))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pe=null,Se={},f={},p=new WeakMap,d=[],g=null,x=!1,m=null,u=null,_=null,T=null,v=null,A=null,E=null,I=new We(0,0,0),L=0,b=!1,M=null,U=null,z=null,q=null,B=null,nt.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:we,bindFramebuffer:Ve,drawBuffers:De,useProgram:Ye,setBlending:ut,setMaterial:ze,setFlipSided:He,setCullFace:Te,setLineWidth:st,setPolygonOffset:Re,setScissorTest:Fe,activeTexture:_t,bindTexture:je,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:G,texImage2D:Ce,texImage3D:he,updateUBOMapping:O,uniformBlockBinding:N,texStorage2D:me,texStorage3D:Ee,texSubImage2D:Q,texSubImage3D:oe,compressedTexSubImage2D:J,compressedTexSubImage3D:Ae,scissor:Me,viewport:ke,reset:le}}function Wg(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,f,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return d?new OffscreenCanvas(R,y):or("canvas")}function x(R,y,G){let Q=1,oe=je(R);if((oe.width>G||oe.height>G)&&(Q=G/Math.max(oe.width,oe.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let J=Math.floor(Q*oe.width),Ae=Math.floor(Q*oe.height);f===void 0&&(f=g(J,Ae));let me=y?g(J,Ae):f;return me.width=J,me.height=Ae,me.getContext("2d").drawImage(R,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+J+"x"+Ae+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){i.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,y,G,Q,oe=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=y;if(y===i.RED&&(G===i.FLOAT&&(J=i.R32F),G===i.HALF_FLOAT&&(J=i.R16F),G===i.UNSIGNED_BYTE&&(J=i.R8)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.R8UI),G===i.UNSIGNED_SHORT&&(J=i.R16UI),G===i.UNSIGNED_INT&&(J=i.R32UI),G===i.BYTE&&(J=i.R8I),G===i.SHORT&&(J=i.R16I),G===i.INT&&(J=i.R32I)),y===i.RG&&(G===i.FLOAT&&(J=i.RG32F),G===i.HALF_FLOAT&&(J=i.RG16F),G===i.UNSIGNED_BYTE&&(J=i.RG8)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RG8UI),G===i.UNSIGNED_SHORT&&(J=i.RG16UI),G===i.UNSIGNED_INT&&(J=i.RG32UI),G===i.BYTE&&(J=i.RG8I),G===i.SHORT&&(J=i.RG16I),G===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGB8UI),G===i.UNSIGNED_SHORT&&(J=i.RGB16UI),G===i.UNSIGNED_INT&&(J=i.RGB32UI),G===i.BYTE&&(J=i.RGB8I),G===i.SHORT&&(J=i.RGB16I),G===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),G===i.UNSIGNED_INT&&(J=i.RGBA32UI),G===i.BYTE&&(J=i.RGBA8I),G===i.SHORT&&(J=i.RGBA16I),G===i.INT&&(J=i.RGBA32I)),y===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),y===i.RGBA){let Ae=oe?Xr:ct.getTransfer(Q);G===i.FLOAT&&(J=i.RGBA32F),G===i.HALF_FLOAT&&(J=i.RGBA16F),G===i.UNSIGNED_BYTE&&(J=Ae===gt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,y){let G;return R?y===null||y===oi||y===br?G=i.DEPTH24_STENCIL8:y===Mn?G=i.DEPTH32F_STENCIL8:y===vr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===oi||y===br?G=i.DEPTH_COMPONENT24:y===Mn?G=i.DEPTH_COMPONENT32F:y===vr&&(G=i.DEPTH_COMPONENT16),G}function A(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kt&&R.minFilter!==_n?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function E(R){let y=R.target;y.removeEventListener("dispose",E),L(y),y.isVideoTexture&&h.delete(y)}function I(R){let y=R.target;y.removeEventListener("dispose",I),M(y)}function L(R){let y=n.get(R);if(y.__webglInit===void 0)return;let G=R.source,Q=p.get(G);if(Q){let oe=Q[y.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(R),Object.keys(Q).length===0&&p.delete(G)}n.remove(R)}function b(R){let y=n.get(R);i.deleteTexture(y.__webglTexture);let G=R.source,Q=p.get(G);delete Q[y.__cacheKey],o.memory.textures--}function M(R){let y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let oe=0;oe<y.__webglFramebuffer[Q].length;oe++)i.deleteFramebuffer(y.__webglFramebuffer[Q][oe]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let G=R.textures;for(let Q=0,oe=G.length;Q<oe;Q++){let J=n.get(G[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(R)}let U=0;function z(){U=0}function q(){let R=U;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),U+=1,R}function B(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function W(R,y){let G=n.get(R);if(R.isVideoTexture&&Fe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(G,R,y);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function Z(R,y){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){te(G,R,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function ne(R,y){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){te(G,R,y);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function K(R,y){let G=n.get(R);if(R.version>0&&G.__version!==R.version){ce(G,R,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}let pe={[ir]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[js]:i.MIRRORED_REPEAT},Se={[Kt]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},Ue={[dh]:i.NEVER,[_h]:i.ALWAYS,[fh]:i.LESS,[Cl]:i.LEQUAL,[ph]:i.EQUAL,[xh]:i.GEQUAL,[mh]:i.GREATER,[gh]:i.NOTEQUAL};function Ze(R,y){if(y.type===Mn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===_n||y.magFilter===Lo||y.magFilter===ls||y.magFilter===si||y.minFilter===_n||y.minFilter===Lo||y.minFilter===ls||y.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,pe[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,pe[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,pe[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Se[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Se[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ue[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Kt||y.minFilter!==ls&&y.minFilter!==si||y.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function nt(R,y){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",E));let Q=y.source,oe=p.get(Q);oe===void 0&&(oe={},p.set(Q,oe));let J=B(y);if(J!==R.__cacheKey){oe[J]===void 0&&(oe[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),oe[J].usedTimes++;let Ae=oe[R.__cacheKey];Ae!==void 0&&(oe[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(y)),R.__cacheKey=J,R.__webglTexture=oe[J].texture}return G}function lt(R,y,G){return Math.floor(Math.floor(R/G)/y)}function et(R,y,G,Q){let J=R.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,G,Q,y.data);else{J.sort((he,Me)=>he.start-Me.start);let Ae=0;for(let he=1;he<J.length;he++){let Me=J[Ae],ke=J[he],O=Me.start+Me.count,N=lt(ke.start,y.width,4),le=lt(Me.start,y.width,4);ke.start<=O+1&&N===le&&lt(ke.start+ke.count-1,y.width,4)===N?Me.count=Math.max(Me.count,ke.start+ke.count-Me.start):(++Ae,J[Ae]=ke)}J.length=Ae+1;let me=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let he=0,Me=J.length;he<Me;he++){let ke=J[he],O=Math.floor(ke.start/4),N=Math.ceil(ke.count/4),le=O%y.width,C=Math.floor(O/y.width),se=N,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,le),i.pixelStorei(i.UNPACK_SKIP_ROWS,C),t.texSubImage2D(i.TEXTURE_2D,0,le,C,se,ae,G,Q,y.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function te(R,y,G){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);let oe=nt(R,y),J=y.source;t.bindTexture(Q,R.__webglTexture,i.TEXTURE0+G);let Ae=n.get(J);if(J.version!==Ae.__version||oe===!0){t.activeTexture(i.TEXTURE0+G);let me=ct.getPrimaries(ct.workingColorSpace),Ee=y.colorSpace===bn?null:ct.getPrimaries(y.colorSpace),Ce=y.colorSpace===bn||me===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let he=x(y.image,!1,r.maxTextureSize);he=_t(y,he);let Me=s.convert(y.format,y.colorSpace),ke=s.convert(y.type),O=T(y.internalFormat,Me,ke,y.colorSpace,y.isVideoTexture);Ze(Q,y);let N,le=y.mipmaps,C=y.isVideoTexture!==!0,se=Ae.__version===void 0||oe===!0,ae=J.dataReady,ve=A(y,he);if(y.isDepthTexture)O=v(y.format===Sr,y.type),se&&(C?t.texStorage2D(i.TEXTURE_2D,1,O,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,O,he.width,he.height,0,Me,ke,null));else if(y.isDataTexture)if(le.length>0){C&&se&&t.texStorage2D(i.TEXTURE_2D,ve,O,le[0].width,le[0].height);for(let re=0,Y=le.length;re<Y;re++)N=le[re],C?ae&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,N.width,N.height,Me,ke,N.data):t.texImage2D(i.TEXTURE_2D,re,O,N.width,N.height,0,Me,ke,N.data);y.generateMipmaps=!1}else C?(se&&t.texStorage2D(i.TEXTURE_2D,ve,O,he.width,he.height),ae&&et(y,he,Me,ke)):t.texImage2D(i.TEXTURE_2D,0,O,he.width,he.height,0,Me,ke,he.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){C&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,O,le[0].width,le[0].height,he.depth);for(let re=0,Y=le.length;re<Y;re++)if(N=le[re],y.format!==hn)if(Me!==null)if(C){if(ae)if(y.layerUpdates.size>0){let xe=Fl(N.width,N.height,y.format,y.type);for(let ge of y.layerUpdates){let Ge=N.data.subarray(ge*xe/N.data.BYTES_PER_ELEMENT,(ge+1)*xe/N.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,ge,N.width,N.height,1,Me,Ge)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,N.width,N.height,he.depth,Me,N.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,O,N.width,N.height,he.depth,0,N.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,N.width,N.height,he.depth,Me,ke,N.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,O,N.width,N.height,he.depth,0,Me,ke,N.data)}else{C&&se&&t.texStorage2D(i.TEXTURE_2D,ve,O,le[0].width,le[0].height);for(let re=0,Y=le.length;re<Y;re++)N=le[re],y.format!==hn?Me!==null?C?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,N.width,N.height,Me,N.data):t.compressedTexImage2D(i.TEXTURE_2D,re,O,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?ae&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,N.width,N.height,Me,ke,N.data):t.texImage2D(i.TEXTURE_2D,re,O,N.width,N.height,0,Me,ke,N.data)}else if(y.isDataArrayTexture)if(C){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,O,he.width,he.height,he.depth),ae)if(y.layerUpdates.size>0){let re=Fl(he.width,he.height,y.format,y.type);for(let Y of y.layerUpdates){let xe=he.data.subarray(Y*re/he.data.BYTES_PER_ELEMENT,(Y+1)*re/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,he.width,he.height,1,Me,ke,xe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Me,ke,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,O,he.width,he.height,he.depth,0,Me,ke,he.data);else if(y.isData3DTexture)C?(se&&t.texStorage3D(i.TEXTURE_3D,ve,O,he.width,he.height,he.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Me,ke,he.data)):t.texImage3D(i.TEXTURE_3D,0,O,he.width,he.height,he.depth,0,Me,ke,he.data);else if(y.isFramebufferTexture){if(se)if(C)t.texStorage2D(i.TEXTURE_2D,ve,O,he.width,he.height);else{let re=he.width,Y=he.height;for(let xe=0;xe<ve;xe++)t.texImage2D(i.TEXTURE_2D,xe,O,re,Y,0,Me,ke,null),re>>=1,Y>>=1}}else if(le.length>0){if(C&&se){let re=je(le[0]);t.texStorage2D(i.TEXTURE_2D,ve,O,re.width,re.height)}for(let re=0,Y=le.length;re<Y;re++)N=le[re],C?ae&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Me,ke,N):t.texImage2D(i.TEXTURE_2D,re,O,Me,ke,N);y.generateMipmaps=!1}else if(C){if(se){let re=je(he);t.texStorage2D(i.TEXTURE_2D,ve,O,re.width,re.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,ke,he)}else t.texImage2D(i.TEXTURE_2D,0,O,Me,ke,he);m(y)&&u(Q),Ae.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ce(R,y,G){if(y.image.length!==6)return;let Q=nt(R,y),oe=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let J=n.get(oe);if(oe.version!==J.__version||Q===!0){t.activeTexture(i.TEXTURE0+G);let Ae=ct.getPrimaries(ct.workingColorSpace),me=y.colorSpace===bn?null:ct.getPrimaries(y.colorSpace),Ee=y.colorSpace===bn||Ae===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,he=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let Y=0;Y<6;Y++)!Ce&&!he?Me[Y]=x(y.image[Y],!0,r.maxCubemapSize):Me[Y]=he?y.image[Y].image:y.image[Y],Me[Y]=_t(y,Me[Y]);let ke=Me[0],O=s.convert(y.format,y.colorSpace),N=s.convert(y.type),le=T(y.internalFormat,O,N,y.colorSpace),C=y.isVideoTexture!==!0,se=J.__version===void 0||Q===!0,ae=oe.dataReady,ve=A(y,ke);Ze(i.TEXTURE_CUBE_MAP,y);let re;if(Ce){C&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,le,ke.width,ke.height);for(let Y=0;Y<6;Y++){re=Me[Y].mipmaps;for(let xe=0;xe<re.length;xe++){let ge=re[xe];y.format!==hn?O!==null?C?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe,0,0,ge.width,ge.height,O,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe,le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe,0,0,ge.width,ge.height,O,N,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe,le,ge.width,ge.height,0,O,N,ge.data)}}}else{if(re=y.mipmaps,C&&se){re.length>0&&ve++;let Y=je(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,le,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(he){C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Me[Y].width,Me[Y].height,O,N,Me[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,le,Me[Y].width,Me[Y].height,0,O,N,Me[Y].data);for(let xe=0;xe<re.length;xe++){let Ge=re[xe].image[Y].image;C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe+1,0,0,Ge.width,Ge.height,O,N,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe+1,le,Ge.width,Ge.height,0,O,N,Ge.data)}}else{C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,O,N,Me[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,le,O,N,Me[Y]);for(let xe=0;xe<re.length;xe++){let ge=re[xe];C?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe+1,0,0,O,N,ge.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe+1,le,O,N,ge.image[Y])}}}m(y)&&u(i.TEXTURE_CUBE_MAP),J.__version=oe.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function we(R,y,G,Q,oe,J){let Ae=s.convert(G.format,G.colorSpace),me=s.convert(G.type),Ee=T(G.internalFormat,Ae,me,G.colorSpace),Ce=n.get(y),he=n.get(G);if(he.__renderTarget=y,!Ce.__hasExternalTextures){let Me=Math.max(1,y.width>>J),ke=Math.max(1,y.height>>J);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,J,Ee,Me,ke,y.depth,0,Ae,me,null):t.texImage2D(oe,J,Ee,Me,ke,0,Ae,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Re(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,oe,he.__webglTexture,0,st(y)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,oe,he.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(R,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){let Q=y.depthTexture,oe=Q&&Q.isDepthTexture?Q.type:null,J=v(y.stencilBuffer,oe),Ae=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=st(y);Re(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,J,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,R)}else{let Q=y.textures;for(let oe=0;oe<Q.length;oe++){let J=Q[oe],Ae=s.convert(J.format,J.colorSpace),me=s.convert(J.type),Ee=T(J.internalFormat,Ae,me,J.colorSpace),Ce=st(y);G&&Re(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Ee,y.width,y.height):Re(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Ee,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);let oe=Q.__webglTexture,J=st(y);if(y.depthTexture.format===rr)Re(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(y.depthTexture.format===Sr)Re(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ye(R){let y=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let Q=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){let oe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",oe)};Q.addEventListener("dispose",oe),y.__depthDisposeCallback=oe}y.__boundDepthTexture=Q}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let Q=R.texture.mipmaps;Q&&Q.length>0?De(y.__webglFramebuffer[0],R):De(y.__webglFramebuffer,R)}else if(G){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),Ve(y.__webglDepthbuffer[Q],R,!1);else{let oe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,J)}}else{let Q=R.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ve(y.__webglDepthbuffer,R,!1);else{let oe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(R,y,G){let Q=n.get(R);y!==void 0&&we(Q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ye(R)}function D(R){let y=R.texture,G=n.get(R),Q=n.get(y);R.addEventListener("dispose",I);let oe=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ae=oe.length>1;if(Ae||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)G.__webglFramebuffer[me][Ee]=i.createFramebuffer()}else G.__webglFramebuffer[me]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<y.mipmaps.length;me++)G.__webglFramebuffer[me]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let me=0,Ee=oe.length;me<Ee;me++){let Ce=n.get(oe[me]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Re(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<oe.length;me++){let Ee=oe[me];G.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[me]);let Ce=s.convert(Ee.format,Ee.colorSpace),he=s.convert(Ee.type),Me=T(Ee.internalFormat,Ce,he,Ee.colorSpace,R.isXRRenderTarget===!0),ke=st(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,G.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,y);for(let me=0;me<6;me++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)we(G.__webglFramebuffer[me][Ee],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee);else we(G.__webglFramebuffer[me],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(y)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let me=0,Ee=oe.length;me<Ee;me++){let Ce=oe[me],he=n.get(Ce),Me=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Me=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,he.__webglTexture),Ze(Me,Ce),we(G.__webglFramebuffer,R,Ce,i.COLOR_ATTACHMENT0+me,Me,0),m(Ce)&&u(Me)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Q.__webglTexture),Ze(me,y),y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)we(G.__webglFramebuffer[Ee],R,y,i.COLOR_ATTACHMENT0,me,Ee);else we(G.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,me,0);m(y)&&u(me),t.unbindTexture()}R.depthBuffer&&Ye(R)}function ut(R){let y=R.textures;for(let G=0,Q=y.length;G<Q;G++){let oe=y[G];if(m(oe)){let J=_(R),Ae=n.get(oe).__webglTexture;t.bindTexture(J,Ae),u(J),t.unbindTexture()}}}let ze=[],He=[];function Te(R){if(R.samples>0){if(Re(R)===!1){let y=R.textures,G=R.width,Q=R.height,oe=i.COLOR_BUFFER_BIT,J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(R),me=y.length>1;if(me)for(let Ce=0;Ce<y.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ce=0;Ce<y.length;Ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);let he=n.get(y[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,G,Q,0,0,G,Q,oe,i.NEAREST),c===!0&&(ze.length=0,He.length=0,ze.push(i.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ze.push(J),He.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Ce=0;Ce<y.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);let he=n.get(y[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function st(R){return Math.min(r.maxSamples,R.samples)}function Re(R){let y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Fe(R){let y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function _t(R,y){let G=R.colorSpace,Q=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==_i&&G!==bn&&(ct.getTransfer(G)===gt?(Q!==hn||oe!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=Z,this.setTexture3D=ne,this.setTextureCube=K,this.rebindTextures=pt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Re}function Xg(i,e){function t(n,r=bn){let s,o=ct.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===No)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ml)return i.BYTE;if(n===bl)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===Uo)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Mr)return i.HALF_FLOAT;if(n===wl)return i.ALPHA;if(n===El)return i.RGB;if(n===hn)return i.RGBA;if(n===rr)return i.DEPTH_COMPONENT;if(n===Sr)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===Bo)return i.RED_INTEGER;if(n===Al)return i.RG;if(n===zo)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===cs||n===hs||n===us||n===ds)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vo||n===Go||n===Ho||n===Wo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ho)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xo||n===qo)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zo||n===Jo||n===$o||n===Ko||n===jo||n===Qo||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===oa||n===aa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Zo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ra)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===ca||n===ha)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===la)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ca)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ha)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ua)return s.COMPRESSED_RED_RGTC1_EXT;if(n===da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yg=`
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

}`,Jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ts(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jt({vertexShader:qg,fragmentShader:Yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$l=class extends kn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,p=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Jl,u={},_=t.getContextAttributes(),T=null,v=null,A=[],E=[],I=new Ne,L=null,b=new Ct;b.viewport=new ht;let M=new Ct;M.viewport=new ht;let U=[b,M],z=new So,q=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=A[te];return ce===void 0&&(ce=new ur,A[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=A[te];return ce===void 0&&(ce=new ur,A[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=A[te];return ce===void 0&&(ce=new ur,A[te]=ce),ce.getHandSpace()};function W(te){let ce=E.indexOf(te.inputSource);if(ce===-1)return;let we=A[ce];we!==void 0&&(we.update(te.inputSource,te.frame,l||o),we.dispatchEvent({type:te.type,data:te.inputSource}))}function Z(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",ne);for(let te=0;te<A.length;te++){let ce=E[te];ce!==null&&(E[te]=null,A[te].disconnect(ce))}q=null,B=null,m.reset();for(let te in u)delete u[te];e.setRenderTarget(T),d=null,p=null,f=null,r=null,v=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ve=null,De=null;_.depth&&(De=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=_.stencil?Sr:rr,Ve=_.stencil?br:oi);let Ye={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};f=this.getBinding(),p=f.createProjectionLayer(Ye),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Tn(p.textureWidth,p.textureHeight,{format:hn,type:vn,depthTexture:new es(p.textureWidth,p.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let we={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Tn(d.framebufferWidth,d.framebufferHeight,{format:hn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(te){for(let ce=0;ce<te.removed.length;ce++){let we=te.removed[ce],Ve=E.indexOf(we);Ve>=0&&(E[Ve]=null,A[Ve].disconnect(we))}for(let ce=0;ce<te.added.length;ce++){let we=te.added[ce],Ve=E.indexOf(we);if(Ve===-1){for(let Ye=0;Ye<A.length;Ye++)if(Ye>=E.length){E.push(we),Ve=Ye;break}else if(E[Ye]===null){E[Ye]=we,Ve=Ye;break}if(Ve===-1)break}let De=A[Ve];De&&De.connect(we)}}let K=new F,pe=new F;function Se(te,ce,we){K.setFromMatrixPosition(ce.matrixWorld),pe.setFromMatrixPosition(we.matrixWorld);let Ve=K.distanceTo(pe),De=ce.projectionMatrix.elements,Ye=we.projectionMatrix.elements,pt=De[14]/(De[10]-1),D=De[14]/(De[10]+1),ut=(De[9]+1)/De[5],ze=(De[9]-1)/De[5],He=(De[8]-1)/De[0],Te=(Ye[8]+1)/Ye[0],st=pt*He,Re=pt*Te,Fe=Ve/(-He+Te),_t=Fe*-He;if(ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(_t),te.translateZ(Fe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),De[10]===-1)te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let je=pt+Fe,R=D+Fe,y=st-_t,G=Re+(Ve-_t),Q=ut*D/R*je,oe=ze*D/R*je;te.projectionMatrix.makePerspective(y,G,Q,oe,je,R),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Ue(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ce=te.near,we=te.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(we=m.depthFar)),z.near=M.near=b.near=ce,z.far=M.far=b.far=we,(q!==z.near||B!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),q=z.near,B=z.far),z.layers.mask=te.layers.mask|6,b.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;let Ve=te.parent,De=z.cameras;Ue(z,Ve);for(let Ye=0;Ye<De.length;Ye++)Ue(De[Ye],Ve);De.length===2?Se(z,b,M):z.projectionMatrix.copy(b.projectionMatrix),Ze(te,z,Ve)};function Ze(te,ce,we){we===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=sr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(te){c=te,p!==null&&(p.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(te){return u[te]};let nt=null;function lt(te,ce){if(h=ce.getViewerPose(l||o),g=ce,h!==null){let we=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ve=!1;we.length!==z.cameras.length&&(z.cameras.length=0,Ve=!0);for(let D=0;D<we.length;D++){let ut=we[D],ze=null;if(d!==null)ze=d.getViewport(ut);else{let Te=f.getViewSubImage(p,ut);ze=Te.viewport,D===0&&(e.setRenderTargetTextures(v,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(v))}let He=U[D];He===void 0&&(He=new Ct,He.layers.enable(D),He.viewport=new ht,U[D]=He),He.matrix.fromArray(ut.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ut.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ze.x,ze.y,ze.width,ze.height),D===0&&(z.matrix.copy(He.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ve===!0&&z.cameras.push(He)}let De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let D=f.getDepthInformation(we[0]);D&&D.isValid&&D.texture&&m.init(D,r.renderState)}if(De&&De.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let D=0;D<we.length;D++){let ut=we[D].camera;if(ut){let ze=u[ut];ze||(ze=new ts,u[ut]=ze);let He=f.getCameraImage(ut);ze.sourceTexture=He}}}}for(let we=0;we<A.length;we++){let Ve=E[we],De=A[we];Ve!==null&&De!==void 0&&De.update(Ve,ce,l||o)}nt&&nt(te,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}let et=new Yh;et.setAnimationLoop(lt),this.setAnimationLoop=function(te){nt=te},this.dispose=function(){}}},Ui=new yn,Zg=new xt;function Jg(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Ll(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,T,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&d(m,u,v)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,_,T):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Bt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Bt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=e.get(u),T=_.envMap,v=_.envMapRotation;T&&(m.envMap.value=T,Ui.copy(v),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(Ui)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,_,T){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=T*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Bt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $g(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,T){let v=T.program;n.uniformBlockBinding(_,v)}function l(_,T){let v=r[_.id];v===void 0&&(g(_),v=h(_),r[_.id]=v,_.addEventListener("dispose",m));let A=T.program;n.updateUBOMapping(_,A);let E=e.render.frame;s[_.id]!==E&&(p(_),s[_.id]=E)}function h(_){let T=f();_.__bindingPointIndex=T;let v=i.createBuffer(),A=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,v),v}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){let T=r[_.id],v=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,I=v.length;E<I;E++){let L=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,M=L.length;b<M;b++){let U=L[b];if(d(U,E,b,A)===!0){let z=U.__offset,q=Array.isArray(U.value)?U.value:[U.value],B=0;for(let W=0;W<q.length;W++){let Z=q[W],ne=x(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,z+B,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,B),B+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,T,v,A){let E=_.value,I=T+"_"+v;if(A[I]===void 0)return typeof E=="number"||typeof E=="boolean"?A[I]=E:A[I]=E.clone(),!0;{let L=A[I];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return A[I]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(_){let T=_.uniforms,v=0,A=16;for(let I=0,L=T.length;I<L;I++){let b=Array.isArray(T[I])?T[I]:[T[I]];for(let M=0,U=b.length;M<U;M++){let z=b[M],q=Array.isArray(z.value)?z.value:[z.value];for(let B=0,W=q.length;B<W;B++){let Z=q[B],ne=x(Z),K=v%A,pe=K%ne.boundary,Se=K+pe;v+=pe,Se!==0&&A-Se<ne.storage&&(v+=A-Se),z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=ne.storage}}}let E=v%A;return E>0&&(v+=A-E),_.__size=v,_.__cache={},this}function x(_){let T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),T}function m(_){let T=_.target;T.removeEventListener("dispose",m);let v=o.indexOf(T.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(let _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}var Ar=class{constructor(e={}){let{canvas:t=yh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,_=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=Tt;let E=0,I=0,L=null,b=-1,M=null,U=new ht,z=new ht,q=null,B=new We(0),W=0,Z=t.width,ne=t.height,K=1,pe=null,Se=null,Ue=new ht(0,0,Z,ne),Ze=new ht(0,0,Z,ne),nt=!1,lt=new mr,et=!1,te=!1,ce=new xt,we=new F,Ve=new ht,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function pt(){return L===null?K:1}let D=n;function ut(S,k){return t.getContext(S,k)}try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",re,!1),D===null){let k="webgl2";if(D=ut(k,S),D===null)throw ut(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ze,He,Te,st,Re,Fe,_t,je,R,y,G,Q,oe,J,Ae,me,Ee,Ce,he,Me,ke,O,N,le;function C(){ze=new pm(D),ze.init(),O=new Xg(D,ze),He=new am(D,ze,e,O),Te=new Hg(D,ze),He.reversedDepthBuffer&&p&&Te.buffers.depth.setReversed(!0),st=new xm(D),Re=new Ig,Fe=new Wg(D,ze,Te,Re,He,O,st),_t=new cm(v),je=new fm(v),R=new bd(D),N=new sm(D,R),y=new mm(D,R,st,N),G=new ym(D,y,R,st),he=new _m(D,He,Fe),me=new lm(Re),Q=new Cg(v,_t,je,ze,He,N,me),oe=new Jg(v,Re),J=new Dg,Ae=new Bg(ze),Ce=new rm(v,_t,je,Te,G,d,c),Ee=new Vg(v,G,He),le=new $g(D,st,He,Te),Me=new om(D,ze,st),ke=new gm(D,ze,st),st.programs=Q.programs,v.capabilities=He,v.extensions=ze,v.properties=Re,v.renderLists=J,v.shadowMap=Ee,v.state=Te,v.info=st}C();let se=new $l(v,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=ze.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ze.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(Z,ne,!1))},this.getSize=function(S){return S.set(Z,ne)},this.setSize=function(S,k,$=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,ne=k,t.width=Math.floor(S*K),t.height=Math.floor(k*K),$===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(Z*K,ne*K).floor()},this.setDrawingBufferSize=function(S,k,$){Z=S,ne=k,K=$,t.width=Math.floor(S*$),t.height=Math.floor(k*$),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(U)},this.getViewport=function(S){return S.copy(Ue)},this.setViewport=function(S,k,$,j){S.isVector4?Ue.set(S.x,S.y,S.z,S.w):Ue.set(S,k,$,j),Te.viewport(U.copy(Ue).multiplyScalar(K).round())},this.getScissor=function(S){return S.copy(Ze)},this.setScissor=function(S,k,$,j){S.isVector4?Ze.set(S.x,S.y,S.z,S.w):Ze.set(S,k,$,j),Te.scissor(z.copy(Ze).multiplyScalar(K).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(S){Te.setScissorTest(nt=S)},this.setOpaqueSort=function(S){pe=S},this.setTransparentSort=function(S){Se=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,$=!0){let j=0;if(S){let V=!1;if(L!==null){let ue=L.texture.format;V=ue===ko||ue===zo||ue===Bo}if(V){let ue=L.texture.type,w=ue===vn||ue===oi||ue===vr||ue===br||ue===No||ue===Fo,P=Ce.getClearColor(),X=Ce.getClearAlpha(),H=P.r,ee=P.g,ie=P.b;w?(g[0]=H,g[1]=ee,g[2]=ie,g[3]=X,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=H,x[1]=ee,x[2]=ie,x[3]=X,D.clearBufferiv(D.COLOR,0,x))}else j|=D.COLOR_BUFFER_BIT}k&&(j|=D.DEPTH_BUFFER_BIT),$&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Ce.dispose(),J.dispose(),Ae.dispose(),Re.dispose(),_t.dispose(),je.dispose(),G.dispose(),N.dispose(),le.dispose(),Q.dispose(),se.dispose(),se.removeEventListener("sessionstart",Yt),se.removeEventListener("sessionend",zt),sn.stop()};function ae(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=st.autoReset,k=Ee.enabled,$=Ee.autoUpdate,j=Ee.needsUpdate,V=Ee.type;C(),st.autoReset=S,Ee.enabled=k,Ee.autoUpdate=$,Ee.needsUpdate=j,Ee.type=V}function re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Y(S){let k=S.target;k.removeEventListener("dispose",Y),xe(k)}function xe(S){ge(S),Re.remove(S)}function ge(S){let k=Re.get(S).programs;k!==void 0&&(k.forEach(function($){Q.releaseProgram($)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,$,j,V,ue){k===null&&(k=De);let w=V.isMesh&&V.matrixWorld.determinant()<0,P=Ms(S,k,$,j,V);Te.setMaterial(j,w);let X=$.index,H=1;if(j.wireframe===!0){if(X=y.getWireframeAttribute($),X===void 0)return;H=2}let ee=$.drawRange,ie=$.attributes.position,de=ee.start*H,fe=(ee.start+ee.count)*H;ue!==null&&(de=Math.max(de,ue.start*H),fe=Math.min(fe,(ue.start+ue.count)*H)),X!==null?(de=Math.max(de,0),fe=Math.min(fe,X.count)):ie!=null&&(de=Math.max(de,0),fe=Math.min(fe,ie.count));let Pe=fe-de;if(Pe<0||Pe===1/0)return;N.setup(V,j,P,$,X);let Le,qe=Me;if(X!==null&&(Le=R.get(X),qe=ke,qe.setIndex(Le)),V.isMesh)j.wireframe===!0?(Te.setLineWidth(j.wireframeLinewidth*pt()),qe.setMode(D.LINES)):qe.setMode(D.TRIANGLES);else if(V.isLine){let Ie=j.linewidth;Ie===void 0&&(Ie=1),Te.setLineWidth(Ie*pt()),V.isLineSegments?qe.setMode(D.LINES):V.isLineLoop?qe.setMode(D.LINE_LOOP):qe.setMode(D.LINE_STRIP)}else V.isPoints?qe.setMode(D.POINTS):V.isSprite&&qe.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))qe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ie=V._multiDrawStarts,at=V._multiDrawCounts,rt=V._multiDrawCount,ye=X?R.get(X).bytesPerElement:1,Oe=Re.get(j).currentProgram.getUniforms();for(let Mt=0;Mt<rt;Mt++)Oe.setValue(D,"_gl_DrawID",Mt),qe.render(Ie[Mt]/ye,at[Mt])}else if(V.isInstancedMesh)qe.renderInstances(de,Pe,V.count);else if($.isInstancedBufferGeometry){let Ie=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,at=Math.min($.instanceCount,Ie);qe.renderInstances(de,Pe,at)}else qe.render(de,Pe)};function Ge(S,k,$){S.transparent===!0&&S.side===bt&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,In(S,k,$),S.side=zn,S.needsUpdate=!0,In(S,k,$),S.side=bt):In(S,k,$)}this.compile=function(S,k,$=null){$===null&&($=S),u=Ae.get($),u.init(k),T.push(u),$.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(u.pushLight(V),V.castShadow&&u.pushShadow(V))}),S!==$&&S.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(u.pushLight(V),V.castShadow&&u.pushShadow(V))}),u.setupLights();let j=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ue=V.material;if(ue)if(Array.isArray(ue))for(let w=0;w<ue.length;w++){let P=ue[w];Ge(P,$,V),j.add(P)}else Ge(ue,$,V),j.add(ue)}),u=T.pop(),j},this.compileAsync=function(S,k,$=null){let j=this.compile(S,k,$);return new Promise(V=>{function ue(){if(j.forEach(function(w){Re.get(w).currentProgram.isReady()&&j.delete(w)}),j.size===0){V(S);return}setTimeout(ue,10)}ze.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Xe=null;function At(S){Xe&&Xe(S)}function Yt(){sn.stop()}function zt(){sn.start()}let sn=new Yh;sn.setAnimationLoop(At),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(S){Xe=S,se.setAnimationLoop(S),S===null?sn.stop():sn.start()},se.addEventListener("sessionstart",Yt),se.addEventListener("sessionend",zt),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(k),k=se.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,k,L),u=Ae.get(S,T.length),u.init(k),T.push(u),ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),lt.setFromProjectionMatrix(ce,xn,k.reversedDepth),te=this.localClippingEnabled,et=me.init(this.clippingPlanes,te),m=J.get(S,_.length),m.init(),_.push(m),se.enabled===!0&&se.isPresenting===!0){let ue=v.xr.getDepthSensingMesh();ue!==null&&Cn(ue,k,-1/0,v.sortObjects)}Cn(S,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(pe,Se),Ye=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ye&&Ce.addToRenderList(m,S),this.info.render.frame++,et===!0&&me.beginShadows();let $=u.state.shadowsArray;Ee.render($,S,k),et===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,V=m.transmissive;if(u.setupLights(),k.isArrayCamera){let ue=k.cameras;if(V.length>0)for(let w=0,P=ue.length;w<P;w++){let X=ue[w];on(j,V,S,X)}Ye&&Ce.render(S);for(let w=0,P=ue.length;w<P;w++){let X=ue[w];kt(m,S,X,X.viewport)}}else V.length>0&&on(j,V,S,k),Ye&&Ce.render(S),kt(m,S,k);L!==null&&I===0&&(Fe.updateMultisampleRenderTarget(L),Fe.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(v,S,k),N.resetDefaultState(),b=-1,M=null,T.pop(),T.length>0?(u=T[T.length-1],et===!0&&me.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Cn(S,k,$,j){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||lt.intersectsSprite(S)){j&&Ve.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);let w=G.update(S),P=S.material;P.visible&&m.push(S,w,P,$,Ve.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||lt.intersectsObject(S))){let w=G.update(S),P=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ve.copy(S.boundingSphere.center)):(w.boundingSphere===null&&w.computeBoundingSphere(),Ve.copy(w.boundingSphere.center)),Ve.applyMatrix4(S.matrixWorld).applyMatrix4(ce)),Array.isArray(P)){let X=w.groups;for(let H=0,ee=X.length;H<ee;H++){let ie=X[H],de=P[ie.materialIndex];de&&de.visible&&m.push(S,w,de,$,Ve.z,ie)}}else P.visible&&m.push(S,w,P,$,Ve.z,null)}}let ue=S.children;for(let w=0,P=ue.length;w<P;w++)Cn(ue[w],k,$,j)}function kt(S,k,$,j){let V=S.opaque,ue=S.transmissive,w=S.transparent;u.setupLightsView($),et===!0&&me.setGlobalState(v.clippingPlanes,$),j&&Te.viewport(U.copy(j)),V.length>0&&li(V,k,$),ue.length>0&&li(ue,k,$),w.length>0&&li(w,k,$),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function on(S,k,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[j.id]===void 0&&(u.state.transmissionRenderTarget[j.id]=new Tn(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Mr:vn,minFilter:si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let ue=u.state.transmissionRenderTarget[j.id],w=j.viewport||U;ue.setSize(w.z*v.transmissionResolutionScale,w.w*v.transmissionResolutionScale);let P=v.getRenderTarget(),X=v.getActiveCubeFace(),H=v.getActiveMipmapLevel();v.setRenderTarget(ue),v.getClearColor(B),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Ye&&Ce.render($);let ee=v.toneMapping;v.toneMapping=Wn;let ie=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),u.setupLightsView(j),et===!0&&me.setGlobalState(v.clippingPlanes,j),li(S,$,j),Fe.updateMultisampleRenderTarget(ue),Fe.updateRenderTargetMipmap(ue),ze.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let fe=0,Pe=k.length;fe<Pe;fe++){let Le=k[fe],qe=Le.object,Ie=Le.geometry,at=Le.material,rt=Le.group;if(at.side===bt&&qe.layers.test(j.layers)){let ye=at.side;at.side=Bt,at.needsUpdate=!0,ys(qe,$,j,Ie,at,rt),at.side=ye,at.needsUpdate=!0,de=!0}}de===!0&&(Fe.updateMultisampleRenderTarget(ue),Fe.updateRenderTargetMipmap(ue))}v.setRenderTarget(P,X,H),v.setClearColor(B,W),ie!==void 0&&(j.viewport=ie),v.toneMapping=ee}function li(S,k,$){let j=k.isScene===!0?k.overrideMaterial:null;for(let V=0,ue=S.length;V<ue;V++){let w=S[V],P=w.object,X=w.geometry,H=w.group,ee=w.material;ee.allowOverride===!0&&j!==null&&(ee=j),P.layers.test($.layers)&&ys(P,k,$,X,ee,H)}}function ys(S,k,$,j,V,ue){S.onBeforeRender(v,k,$,j,V,ue),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(v,k,$,j,S,ue),V.transparent===!0&&V.side===bt&&V.forceSinglePass===!1?(V.side=Bt,V.needsUpdate=!0,v.renderBufferDirect($,k,j,V,S,ue),V.side=zn,V.needsUpdate=!0,v.renderBufferDirect($,k,j,V,S,ue),V.side=bt):v.renderBufferDirect($,k,j,V,S,ue),S.onAfterRender(v,k,$,j,V,ue)}function In(S,k,$){k.isScene!==!0&&(k=De);let j=Re.get(S),V=u.state.lights,ue=u.state.shadowsArray,w=V.state.version,P=Q.getParameters(S,V.state,ue,k,$),X=Q.getProgramCacheKey(P),H=j.programs;j.environment=S.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(S.isMeshStandardMaterial?je:_t).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,H===void 0&&(S.addEventListener("dispose",Y),H=new Map,j.programs=H);let ee=H.get(X);if(ee!==void 0){if(j.currentProgram===ee&&j.lightsStateVersion===w)return Pa(S,P),ee}else P.uniforms=Q.getUniforms(S),S.onBeforeCompile(P,v),ee=Q.acquireProgram(P,X),H.set(X,ee),j.uniforms=P.uniforms;let ie=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ie.clippingPlanes=me.uniform),Pa(S,P),j.needsLights=dn(S),j.lightsStateVersion=w,j.needsLights&&(ie.ambientLightColor.value=V.state.ambient,ie.lightProbe.value=V.state.probe,ie.directionalLights.value=V.state.directional,ie.directionalLightShadows.value=V.state.directionalShadow,ie.spotLights.value=V.state.spot,ie.spotLightShadows.value=V.state.spotShadow,ie.rectAreaLights.value=V.state.rectArea,ie.ltc_1.value=V.state.rectAreaLTC1,ie.ltc_2.value=V.state.rectAreaLTC2,ie.pointLights.value=V.state.point,ie.pointLightShadows.value=V.state.pointShadow,ie.hemisphereLights.value=V.state.hemi,ie.directionalShadowMap.value=V.state.directionalShadowMap,ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ie.spotShadowMap.value=V.state.spotShadowMap,ie.spotLightMatrix.value=V.state.spotLightMatrix,ie.spotLightMap.value=V.state.spotLightMap,ie.pointShadowMap.value=V.state.pointShadowMap,ie.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=ee,j.uniformsList=null,ee}function vs(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=Er.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Pa(S,k){let $=Re.get(S);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Ms(S,k,$,j,V){k.isScene!==!0&&(k=De),Fe.resetTextureUnits();let ue=k.fog,w=j.isMeshStandardMaterial?k.environment:null,P=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:_i,X=(j.isMeshStandardMaterial?je:_t).get(j.envMap||w),H=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ee=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ie=!!$.morphAttributes.position,de=!!$.morphAttributes.normal,fe=!!$.morphAttributes.color,Pe=Wn;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Pe=v.toneMapping);let Le=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,qe=Le!==void 0?Le.length:0,Ie=Re.get(j),at=u.state.lights;if(et===!0&&(te===!0||S!==M)){let Ft=S===M&&j.id===b;me.setState(j,S,Ft)}let rt=!1;j.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==at.state.version||Ie.outputColorSpace!==P||V.isBatchedMesh&&Ie.batching===!1||!V.isBatchedMesh&&Ie.batching===!0||V.isBatchedMesh&&Ie.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ie.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ie.instancing===!1||!V.isInstancedMesh&&Ie.instancing===!0||V.isSkinnedMesh&&Ie.skinning===!1||!V.isSkinnedMesh&&Ie.skinning===!0||V.isInstancedMesh&&Ie.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ie.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ie.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ie.instancingMorph===!1&&V.morphTexture!==null||Ie.envMap!==X||j.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==me.numPlanes||Ie.numIntersection!==me.numIntersection)||Ie.vertexAlphas!==H||Ie.vertexTangents!==ee||Ie.morphTargets!==ie||Ie.morphNormals!==de||Ie.morphColors!==fe||Ie.toneMapping!==Pe||Ie.morphTargetsCount!==qe)&&(rt=!0):(rt=!0,Ie.__version=j.version);let ye=Ie.currentProgram;rt===!0&&(ye=In(j,k,V));let Oe=!1,Mt=!1,Lt=!1,dt=ye.getUniforms(),Vt=Ie.uniforms;if(Te.useProgram(ye.program)&&(Oe=!0,Mt=!0,Lt=!0),j.id!==b&&(b=j.id,Mt=!0),Oe||M!==S){Te.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),dt.setValue(D,"projectionMatrix",S.projectionMatrix),dt.setValue(D,"viewMatrix",S.matrixWorldInverse);let Rt=dt.map.cameraPosition;Rt!==void 0&&Rt.setValue(D,we.setFromMatrixPosition(S.matrixWorld)),He.logarithmicDepthBuffer&&dt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&dt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Mt=!0,Lt=!0)}if(V.isSkinnedMesh){dt.setOptional(D,V,"bindMatrix"),dt.setOptional(D,V,"bindMatrixInverse");let Ft=V.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),dt.setValue(D,"boneTexture",Ft.boneTexture,Fe))}V.isBatchedMesh&&(dt.setOptional(D,V,"batchingTexture"),dt.setValue(D,"batchingTexture",V._matricesTexture,Fe),dt.setOptional(D,V,"batchingIdTexture"),dt.setValue(D,"batchingIdTexture",V._indirectTexture,Fe),dt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&dt.setValue(D,"batchingColorTexture",V._colorsTexture,Fe));let $t=$.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&he.update(V,$,ye),(Mt||Ie.receiveShadow!==V.receiveShadow)&&(Ie.receiveShadow=V.receiveShadow,dt.setValue(D,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Vt.envMap.value=X,Vt.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(Vt.envMapIntensity.value=k.environmentIntensity),Mt&&(dt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&ci(Vt,Lt),ue&&j.fog===!0&&oe.refreshFogUniforms(Vt,ue),oe.refreshMaterialUniforms(Vt,j,K,ne,u.state.transmissionRenderTarget[S.id]),Er.upload(D,vs(Ie),Vt,Fe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Er.upload(D,vs(Ie),Vt,Fe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&dt.setValue(D,"center",V.center),dt.setValue(D,"modelViewMatrix",V.modelViewMatrix),dt.setValue(D,"normalMatrix",V.normalMatrix),dt.setValue(D,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Ft=j.uniformsGroups;for(let Rt=0,La=Ft.length;Rt<La;Rt++){let hi=Ft[Rt];le.update(hi,ye),le.bind(hi,ye)}}return ye}function ci(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function dn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,k,$){let j=Re.get(S);j.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Re.get(S.texture).__webglTexture=k,Re.get(S.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){let $=Re.get(S);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0};let bs=D.createFramebuffer();this.setRenderTarget=function(S,k=0,$=0){L=S,E=k,I=$;let j=!0,V=null,ue=!1,w=!1;if(S){let X=Re.get(S);if(X.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(X.__webglFramebuffer===void 0)Fe.setupRenderTarget(S);else if(X.__hasExternalTextures)Fe.rebindTextures(S,Re.get(S.texture).__webglTexture,Re.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ie=S.depthTexture;if(X.__boundDepthTexture!==ie){if(ie!==null&&Re.has(ie)&&(S.width!==ie.image.width||S.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(S)}}let H=S.texture;(H.isData3DTexture||H.isDataArrayTexture||H.isCompressedArrayTexture)&&(w=!0);let ee=Re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ee[k])?V=ee[k][$]:V=ee[k],ue=!0):S.samples>0&&Fe.useMultisampledRTT(S)===!1?V=Re.get(S).__webglMultisampledFramebuffer:Array.isArray(ee)?V=ee[$]:V=ee,U.copy(S.viewport),z.copy(S.scissor),q=S.scissorTest}else U.copy(Ue).multiplyScalar(K).floor(),z.copy(Ze).multiplyScalar(K).floor(),q=nt;if($!==0&&(V=bs),Te.bindFramebuffer(D.FRAMEBUFFER,V)&&j&&Te.drawBuffers(S,V),Te.viewport(U),Te.scissor(z),Te.setScissorTest(q),ue){let X=Re.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,X.__webglTexture,$)}else if(w){let X=k;for(let H=0;H<S.textures.length;H++){let ee=Re.get(S.textures[H]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+H,ee.__webglTexture,$,X)}}else if(S!==null&&$!==0){let X=Re.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,X.__webglTexture,$)}b=-1},this.readRenderTargetPixels=function(S,k,$,j,V,ue,w,P=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let X=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&w!==void 0&&(X=X[w]),X){Te.bindFramebuffer(D.FRAMEBUFFER,X);try{let H=S.textures[P],ee=H.format,ie=H.type;if(!He.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-j&&$>=0&&$<=S.height-V&&(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+P),D.readPixels(k,$,j,V,O.convert(ee),O.convert(ie),ue))}finally{let H=L!==null?Re.get(L).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,H)}}},this.readRenderTargetPixelsAsync=async function(S,k,$,j,V,ue,w,P=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let X=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&w!==void 0&&(X=X[w]),X)if(k>=0&&k<=S.width-j&&$>=0&&$<=S.height-V){Te.bindFramebuffer(D.FRAMEBUFFER,X);let H=S.textures[P],ee=H.format,ie=H.type;if(!He.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,de),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+P),D.readPixels(k,$,j,V,O.convert(ee),O.convert(ie),0);let fe=L!==null?Re.get(L).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,fe);let Pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await vh(D,Pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,de),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.deleteBuffer(de),D.deleteSync(Pe),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,$=0){let j=Math.pow(2,-$),V=Math.floor(S.image.width*j),ue=Math.floor(S.image.height*j),w=k!==null?k.x:0,P=k!==null?k.y:0;Fe.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,w,P,V,ue),Te.unbindTexture()};let Ss=D.createFramebuffer(),Da=D.createFramebuffer();this.copyTextureToTexture=function(S,k,$=null,j=null,V=0,ue=null){ue===null&&(V!==0?(ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=V,V=0):ue=0);let w,P,X,H,ee,ie,de,fe,Pe,Le=S.isCompressedTexture?S.mipmaps[ue]:S.image;if($!==null)w=$.max.x-$.min.x,P=$.max.y-$.min.y,X=$.isBox3?$.max.z-$.min.z:1,H=$.min.x,ee=$.min.y,ie=$.isBox3?$.min.z:0;else{let $t=Math.pow(2,-V);w=Math.floor(Le.width*$t),P=Math.floor(Le.height*$t),S.isDataArrayTexture?X=Le.depth:S.isData3DTexture?X=Math.floor(Le.depth*$t):X=1,H=0,ee=0,ie=0}j!==null?(de=j.x,fe=j.y,Pe=j.z):(de=0,fe=0,Pe=0);let qe=O.convert(k.format),Ie=O.convert(k.type),at;k.isData3DTexture?(Fe.setTexture3D(k,0),at=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Fe.setTexture2DArray(k,0),at=D.TEXTURE_2D_ARRAY):(Fe.setTexture2D(k,0),at=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let rt=D.getParameter(D.UNPACK_ROW_LENGTH),ye=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Oe=D.getParameter(D.UNPACK_SKIP_PIXELS),Mt=D.getParameter(D.UNPACK_SKIP_ROWS),Lt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Le.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Le.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,H),D.pixelStorei(D.UNPACK_SKIP_ROWS,ee),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ie);let dt=S.isDataArrayTexture||S.isData3DTexture,Vt=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){let $t=Re.get(S),Ft=Re.get(k),Rt=Re.get($t.__renderTarget),La=Re.get(Ft.__renderTarget);Te.bindFramebuffer(D.READ_FRAMEBUFFER,Rt.__webglFramebuffer),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,La.__webglFramebuffer);for(let hi=0;hi<X;hi++)dt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(S).__webglTexture,V,ie+hi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(k).__webglTexture,ue,Pe+hi)),D.blitFramebuffer(H,ee,w,P,de,fe,w,P,D.DEPTH_BUFFER_BIT,D.NEAREST);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||Re.has(S)){let $t=Re.get(S),Ft=Re.get(k);Te.bindFramebuffer(D.READ_FRAMEBUFFER,Ss),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,Da);for(let Rt=0;Rt<X;Rt++)dt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$t.__webglTexture,V,ie+Rt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$t.__webglTexture,V),Vt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.__webglTexture,ue,Pe+Rt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ft.__webglTexture,ue),V!==0?D.blitFramebuffer(H,ee,w,P,de,fe,w,P,D.COLOR_BUFFER_BIT,D.NEAREST):Vt?D.copyTexSubImage3D(at,ue,de,fe,Pe+Rt,H,ee,w,P):D.copyTexSubImage2D(at,ue,de,fe,H,ee,w,P);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Vt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(at,ue,de,fe,Pe,w,P,X,qe,Ie,Le.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(at,ue,de,fe,Pe,w,P,X,qe,Le.data):D.texSubImage3D(at,ue,de,fe,Pe,w,P,X,qe,Ie,Le):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,de,fe,w,P,qe,Ie,Le.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,de,fe,Le.width,Le.height,qe,Le.data):D.texSubImage2D(D.TEXTURE_2D,ue,de,fe,w,P,qe,Ie,Le);D.pixelStorei(D.UNPACK_ROW_LENGTH,rt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ye),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Mt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Lt),ue===0&&k.generateMipmaps&&D.generateMipmap(at),Te.unbindTexture()},this.initRenderTarget=function(S){Re.get(S).__webglFramebuffer===void 0&&Fe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Fe.setTextureCube(S,0):S.isData3DTexture?Fe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Fe.setTexture2DArray(S,0):Fe.setTexture2D(S,0),Te.unbindTexture()},this.resetState=function(){E=0,I=0,L=null,Te.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Kg={x:1630,y:1160},jg={x:3370,y:430},gs={x:1450,y:1320};function jh(i,e){if(!i||!e)return null;let t=[Kg,jg].filter(g=>Math.hypot(g.x-i.x,g.y-i.y)<400).sort((g,x)=>Math.hypot(g.x-i.x,g.y-i.y)-Math.hypot(x.x-i.x,x.y-i.y))[0],n=0,r=1;if(t){let g=t.x-i.x,x=t.y-i.y;Math.abs(g)>Math.abs(x)?(n=Math.sign(g)||1,r=0):r=Math.sign(x)||1}let s=[0,280,320,360][e],o=[0,220,260,300][e],a=112,c={x:i.x-n*o/2,y:i.y-r*o/2},l=(g,x)=>({x:c.x+r*g+n*x,y:c.y-n*g+r*x}),h=(g,x,m,u)=>{let _=l(g,x);return{x:_.x,y:_.y,w:r?m:u,h:r?u:m}},f=[];if(e>=2){f.push(h(0,-o/2,s,10));for(let g of[-s/2,s/2])f.push(h(g,0,10,o))}if(e>=3){let g=(s-a)/2;for(let x of[-1,1])f.push(h(x*(a/2+g/2),o/2,g,10))}let p=e===1?[-1,1].flatMap(g=>[-1,1].map(x=>({...l(g*(s/2-8),x*(o/2-8)),radius:6}))):[],d=[h(-s/2+53,-o/2+64,52,90)];return e>=3&&d.push(h(s/2-53,-o/2+64,52,90)),{center:c,width:s,depth:o,door:a,fx:n,fy:r,yaw:Math.atan2(n,r),floor:h(0,0,s,o),walls:f,posts:p,beds:d,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var Qg=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],e0=["#e3b185","#be895f","#efc69d","#a67152"],t0=["#463b32","#24282b","#99673b","#c9a465"];function n0(i){let e={shirt:0,skin:0,hair:0,style:0};for(let[t,n]of[["shirt",6],["skin",4],["hair",4],["style",3]])Number.isInteger(i?.[t])&&i[t]>=0&&i[t]<n&&(e[t]=i[t]);return e}function Ma(i){let e=n0(i);return{shirt:Qg[e.shirt],skin:e0[e.skin],hair:t0[e.hair],style:e.style}}var Qh={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function eu(i,e){let t=Math.sin(e*Math.PI*4);return i==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:i==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:i==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:i==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:i==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var i0="assets/materials-v018/",tu=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],r0=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function nu(i){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[n,r,s,o]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(n,r,s,o,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function ba(i){let e=new Map,t=new Map,n=0,r=0,s=new ss;for(let h of tu){let f=s.load(i0+h+".webp",()=>n++,void 0,()=>r++);f.colorSpace=Tt,f.wrapS=f.wrapT=ir,f.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),e.set(h,f)}function o(h,f="#ffffff",p=1,d=.035){let g=h+f+p+d;if(!t.has(g)){let x=e.get(h).clone();x.repeat.set(p,p);let m=new Et({color:f,map:x,bumpMap:x,bumpScale:d,roughness:h==="leaf"?.78:.93});e.get(h).addEventListener("dispose",()=>x.dispose());let u=e.get(h);m.userData.textureSource=u,t.set(g,m)}return t.get(g)}function a(h){return r0.has(h)?o("wood","#ded4c4",1,.045):h==="#e2dbc7"?o("plaster","#f8f4e7",1,.027):h==="#ba7655"?o("roof","#e4d6c7",2,.055):h==="#a7c4b7"?o("teal","#e7ede3",1,.035):h==="#92968b"||h==="#777a6b"?o("rock","#ddd9cf",1,.065):null}function c(){for(let h of t.values())h.userData.textureSource.image&&h.map.image!==h.userData.textureSource.image&&(h.map.source=h.userData.textureSource.source,h.map.needsUpdate=!0);for(let h of t.values())h.map.image&&!h.userData.uploaded&&(h.map.needsUpdate=!0,h.userData.uploaded=!0)}function l(h){h.colorSpace=bn;let f=new Et({color:"#ffffff",map:h,roughness:1});return f.onBeforeCompile=p=>{p.uniforms.uSand={value:e.get("sand")},p.uniforms.uGrass={value:e.get("grass")},p.uniforms.uPaving={value:e.get("paving")},p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
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
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},f}return{textures:e,surface:o,forColor:a,ground:l,update:c,stats:()=>({loaded:n,failed:r,total:tu.length}),dispose(){for(let h of t.values())h.map.dispose(),h.dispose();for(let h of e.values())h.dispose()}}}function Sa({x:i,z:e,surface:t,yaw:n,pitch:r,mode:s="first",distance:o=4.8,bob:a=0}){let c=t+1.64+a;if(s==="first")return{position:new F(i,c,e),target:new F(i-Math.sin(n)*Math.cos(r),c-Math.sin(r),e-Math.cos(n)*Math.cos(r))};let l=new F(i,t+1.3,e);return{position:new F(i+Math.sin(n)*Math.cos(r)*o,l.y+.65+Math.sin(r)*o,e+Math.cos(n)*Math.cos(r)*o),target:l}}function iu(i,e,t,n,r){let s=(()=>{let x=90210;return()=>(x=Math.imul(x,1664525)+1013904223>>>0)/4294967296})(),o=new ft;o.setAttribute("position",new Je([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),o.setAttribute("uv",new Je([0,0,1,0,0,.5,1,.5,.5,1],2)),o.setIndex([0,1,2,1,3,2,2,3,4]),o.computeVertexNormals();let a=new Et({color:"#ffffff",side:bt,roughness:1});a.defines={USE_UV:""};let c={value:0},l={value:new ht(0,0,0,0)};a.onBeforeCompile=x=>{x.uniforms.uWind=c,x.uniforms.uBase=l,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let h=r?2800:5500,f=new Nt(o,a,h);f.receiveShadow=!0,f.frustumCulled=!1;let p=n.getContext("2d").getImageData(0,0,n.width,n.height).data,d=new vt,g=0;for(let x=0;x<h*8&&g<h;x++){let m=s()*4600,u=s()*2900,_=(Math.min(n.height-1,Math.floor(u/2900*n.height))*n.width+Math.min(n.width-1,Math.floor(m/4600*n.width)))*4;if(p[_+1]<p[_]+12||p[_+1]<85)continue;let T=m/t,v=u/t,A=e(T,v);A<.1||(d.position.set(T,A-.015,v),d.rotation.set(0,s()*Math.PI*2,0),d.scale.setScalar(.7+s()*.8),d.updateMatrix(),f.setMatrixAt(g,d.matrix),f.setColorAt(g,new We().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),g++)}return f.count=g,i.add(f),{update(x,m){c.value=x,m?l.value.set(m.floor.x/t,m.floor.y/t,m.floor.w/(t*2)+.1,m.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){i.remove(f),o.dispose(),a.dispose(),f.dispose()}}}function ru(i,e,{cube:t,tube:n},r){let s=e.width/80,o=e.depth/80,a=e.wallHeight/80,c=e.roofRidge/80;for(let f of i.children)f.name==="floor"&&(f.material=r.surface("paving","#e5ded0",2,.045)),f.name==="wall"&&(f.material=r.surface("plaster","#f8f4e7",1,.025)),f.name==="roof"&&(f.material=r.surface("roof","#efe2d5",2,.045));for(let f of[-1,1]){let p=t(i,"#876742",[f*s/2,a-.09,0],[.13,.16,o+.18]);if(p.name="trim",e.walls.length){let d=t(i,"#a7c4b7",[f*(s/2+.064),1.55,-o*.16],[.02,.9,.7]);d.name="shutter";for(let g=0;g<8;g++)t(i,"#876742",[f*(s/2+.08),1.17+g*.11,-o*.16],[.025,.035,.69]);for(let g of[-o*.16-.39,-o*.16+.39])t(i,"#e2dbc7",[f*(s/2+.078),1.56,g],[.045,1.02,.065])}}let l=n(i,"#ba7655",[0,c+.02,0],[.09,o+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let h=t(i,"#e2dbc7",[0,a-.05,-o/2-.066],[s+.08,.16,.06]);return h.name="trim",i}var Jt=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),su=Object.freeze(Object.fromEntries(Jt.map(i=>[i.id,i])));function Ta(i,e){return!Number.isFinite(i)||!Number.isFinite(e)?null:Jt.find(t=>Math.hypot(i-t.x,e-t.z)<=t.radius)??null}function jl(i,e){let t=i.x*.002+i.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function Cr(i,e,t){let n=(e-i.x)/i.radius,r=(t-i.z)/i.radius,s=Math.hypot(n,r);if(s>=1)return-.32;let o=Math.atan2(r,n),a=jl(i,o),c=Math.max(0,Math.min(1,(a-s)/.12));if(s>a)return-.32*Math.min(1,(s-a)/.04);let l=Math.max(0,Math.min(1,(.79-s)/.22)),h=l*l*(3-2*l),f=Math.exp(-((n+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((n-.36)**2*11+(r+.25)**2*8))*.42,p=i.biome==="highlands"?8.5:i.biome==="rainforest"?2.2:i.biome==="rocky"?1.6:.55;return .005+c*.35+h*f*p}function Ql(i,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,Cr(i,i.x,i.z),0],n=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let h=0;h<=e;h++){let f=h/e*Math.PI*2,p=i.radius*1.02*l/s,d=Math.cos(f)*p,g=Math.sin(f)*p;t.push(d,Cr(i,i.x+d,i.z+g),g),n.push(.5+d/(i.radius*2.04),.5+g/(i.radius*2.04));let x=1+(l-1)*(e+1)+h;if(h!==e)if(l===1)r.push(0,x+1,x);else{let m=x-(e+1);r.push(m,x+1,x,m,m+1,x+1)}}let o=new ft;o.setAttribute("position",new Je(t,3)),o.setAttribute("uv",new Je(n,2)),o.setIndex(r),o.computeVertexNormals();let a=new Et({color:i.biome==="beach"?11779972:5538650,roughness:1,side:bt}),c=new it(o,a);return c.name="archipelago-"+i.id,c.position.set(i.x,0,i.z),c.receiveShadow=!0,c}function ou(i={}){let e=new Be;e.name="archipelago-terrain";for(let t of Jt)e.add(Ql(t,i));return e}function lu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new ft,l=0;for(let h=0;h<i.length;++h){let f=i[h],p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,f=[];for(let p=0;p<i.length;++p){let d=i[p].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[p].attributes.position.count}c.setIndex(f)}for(let h in s){let f=au(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<f;++p){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][p]);let g=au(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function au(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let o=new e(s),a=new It(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/t;for(let p=0,d=h.count;p<d;p++)for(let g=0;g<t;g++){let x=h.getComponent(p,g);a.setComponent(p+f,g,x)}}else o.set(h.array,c);c+=h.count*t}return r!==void 0&&(a.gpuType=r),a}var xs=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function Oi(i,e){return e==="home"&&xs.some(t=>Math.abs(i.x-t.x)<t.w/2+7&&Math.abs(i.z-t.z)<t.d/2+7)}var ec=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function wa(i,{size:e=900,segments:t=72}={}){let n=Array.from({length:9},(a,c)=>new ht(...i[c]||[1e4,1e4,1,1])),r=new jt({fog:!0,uniforms:{...ma.clone(be.fog),uTime:{value:0},uEye:{value:new F},uCoasts:{value:n}},vertexShader:`uniform float uTime;varying vec3 vWater;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;
    p.y+=sin(dot(p.xz,vec2(.41,.19))+uTime*.75)*.024+sin(dot(p.xz,vec2(-.17,.36))-uTime*.58)*.019;
    vWater=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=viewMatrix*vec4(vWater,1.);gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,fragmentShader:`uniform float uTime;uniform vec3 uEye;uniform vec4 uCoasts[9];varying vec3 vWater;
    #include <fog_pars_fragment>
    ${ec}
    float wave(vec2 p){return sin(dot(p,vec2(.7,.3))+uTime*.8)*.046+
      sin(dot(p,vec2(-.43,.81))-uTime*.62)*.038+sin(dot(p,vec2(1.36,.67))+uTime*1.12)*.016+
      (fbm21(p*1.6+vec2(uTime*.09,-uTime*.07))-.5)*.10;}
    void main(){vec2 p=vWater.xz;float eps=.055,h=wave(p);
      vec3 n=normalize(vec3((h-wave(p+vec2(eps,0.)))/eps,1.,(h-wave(p+vec2(0.,eps)))/eps));
      vec3 view=normalize(uEye-vWater);float fresnel=.025+.975*pow(1.-max(dot(n,view),0.),5.);
      float coast=1000.;for(int i=0;i<9;i++){vec4 c=uCoasts[i];coast=min(coast,(length((p-c.xy)/c.zw)-1.)*min(c.z,c.w));}
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
    }`}),s=new ln(e,e,t,t);s.rotateX(-Math.PI/2);let o=new it(s,r);return o.name="tropical-ocean",o.position.y=-.045,{mesh:o,update(a,c){r.uniforms.uTime.value=a,r.uniforms.uEye.value.copy(c)},dispose(){s.dispose(),r.dispose()}}}function Ea(i=420){let e=new jt({side:Bt,depthWrite:!1,vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vSky;${ec}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3;float n=fbm21(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`}),t=new it(new cn(i,32,20),e);return t.name="tropical-sky",t.renderOrder=-10,t.frustumCulled=!1,t}function Aa(i,e){let t=new Et({roughness:1,color:"#ffffff",vertexColors:!0});return t.onBeforeCompile=n=>{Object.assign(n.uniforms,{uGrass:{value:i.textures.get("grass")},uSand:{value:i.textures.get("sand")},uRock:{value:i.textures.get("rock")}}),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${ec}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=fbm21(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38);
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},t.customProgramCacheKey=()=>`tropical-island-${e}`,t}function s0(i=14){let e=[],t=[],n=[],r=(o,a,c,l)=>{let h=a*2.2,f=Math.sin(a*Math.PI)*.55-a*a*.95;return[Math.sin(o)*h+Math.cos(o)*l*c,f-l*.17,Math.cos(o)*h-Math.sin(o)*l*c]};for(let o=0;o<9;o++){let a=o*Math.PI*2/9;for(let c=1;c<i;c++)for(let l of[-1,1]){let h=c/i,f=Math.sin(h*Math.PI)*.44,p=e.length/3;e.push(...r(a,h-.03,l,.012),...r(a,h-.09,l,f),...r(a,h+.025,l,f*.87),...r(a,h+.03,l,.012)),t.push(h,0,h,.9,h+.03,1,h+.03,0),n.push(p,p+1,p+2,p,p+2,p+3)}}let s=new ft;return s.setAttribute("position",new Je(e,3)),s.setAttribute("uv",new Je(t,2)),s.setIndex(n),s.computeVertexNormals(),s}function Ra(i,e,{scale:t,height:n,surfaces:r,small:s=!1,clear:o=()=>!1}={}){let a=[];for(let u of e)for(let _=0;_<(s?22:42);_++){let T=_*2.39996+u.x*.001,v=u.radius*(.36+_%7*.075),A=u.x+Math.sin(T)*v,E=u.z+Math.cos(T)*v;o(u,A,E)||a.push({x:A/t,z:E/t,y:n(A,E),a:T,h:3.8+_%5*.42,size:.76+_%4*.11})}let c=new Ot(.085,.16,1,10,8);c.translate(0,.5,0);let l=c.attributes.position;for(let u=0;u<l.count;u++)l.setX(u,l.getX(u)+l.getY(u)**2*.2);c.computeVertexNormals();let h=r.surface("wood","#bc9c71",2,.03),f=r.surface("leaf","#9cb384",1,.01).clone();f.side=bt;let p=new Nt(s0(s?9:14),f,a.length),d=new Nt(c,h,a.length),g=new vt;d.name="grove-trunks",p.name="grove-fronds";for(let u=0;u<a.length;u++){let _=a[u];g.position.set(_.x,_.y,_.z),g.rotation.set(0,_.a,.035*Math.sin(_.a)),g.scale.set(_.size,_.h,_.size),g.updateMatrix(),d.setMatrixAt(u,g.matrix),g.position.set(_.x+.2*_.size*Math.cos(_.a),_.y+_.h,_.z-.2*_.size*Math.sin(_.a)),g.rotation.set(0,_.a,0),g.scale.setScalar(_.size),g.updateMatrix(),p.setMatrixAt(u,g.matrix),p.setColorAt(u,new We().setHSL(.26+u%5*.01,.26,.63+u%3*.045))}for(let u of[d,p])u.castShadow=u.receiveShadow=!0,i.add(u);let x=new Nt(new bi(1,1),r.surface("rock","#a9aaa0",2,.08),e.length*(s?14:24));x.name="shore-rocks";let m=0;for(let u of e)for(let _=0;_<(s?14:24);_++){let T=_*2.399+.6,v=u.radius*(.87+_%4*.024),A=u.x+Math.sin(T)*v,E=u.z+Math.cos(T)*v;o(u,A,E)||(g.position.set(A/t,n(A,E)-.1,E/t),g.rotation.set(.2*_,T,.17*_),g.scale.set(.3+_%4*.14,.22+_%3*.18,.4+_%3*.15),g.updateMatrix(),x.setMatrixAt(m++,g.matrix))}return x.count=m,x.castShadow=x.receiveShadow=!0,i.add(x),{trees:d,foliage:p,rocks:x}}function Ca(i,{scale:e,height:t,surfaces:n,helpers:r}){let{cube:s,tube:o}=r,a=[];function c(d){let g=new Map;d.updateMatrix();for(let x of[...d.children])if(x.isMesh){x.updateMatrix();let m=x.geometry.clone().applyMatrix4(x.matrix);g.has(x.material)||g.set(x.material,[]),g.get(x.material).push(m),d.remove(x)}for(let[x,m]of g){let u=lu(m,!1);m.forEach(T=>T.dispose());let _=new it(u,x);_.castShadow=_.receiveShadow=!0,d.add(_)}}function l(d,g=i,x=!0){let m=new Be;m.name="village-house",g.add(m),m.position.set(x?d.x/e:d.x,x?t(d.x,d.z):0,x?d.z/e:d.z),d.z>60&&(m.rotation.y=Math.PI);let u=d.w/e,_=d.d/e,T=d.h,v=s(m,d.color,[0,T/2,0],[u,T,_]);v.material=n.surface("plaster",d.color,2,.035);let A=n.surface("roof","#d5bbab",2,.065);for(let I of[-1,1]){let L=s(m,"#ba7655",[I*u/4,T+.43,0],[Math.hypot(u/2+.25,.85),.13,_+.5]);L.rotation.z=-I*Math.atan2(.85,u/2+.25),L.material=A}for(let I of[.17,T*.52,T-.16])s(m,"#e2dbc7",[0,I,_/2+.035],[u+.16,.14,.1]);let E=T>5?2:1;for(let I=0;I<E;I++)for(let L of[-u*.31,u*.31]){let b=1.5+I*2.35,M=_/2+.08;s(m,"#415d63",[L,b,M],[.75,1.2,.05]);for(let U of[-1,1]){let z=s(m,d.shutter,[L+U*.56,b,M+.03],[.34,1.3,.07]);z.rotation.y=U*.24;for(let q=0;q<9;q++)s(m,"#876742",[L+U*.56,b-.52+q*.13,M+.085],[.33,.024,.04])}s(m,"#e2dbc7",[L,b-.68,M],[1.7,.1,.16]),s(m,"#e2dbc7",[L,b+.68,M],[1.7,.13,.15])}if(s(m,"#5a4b3d",[0,1.05,_/2+.06],[.78,2.1,.1]),s(m,"#e2dbc7",[0,2.18,_/2+.11],[1.1,.16,.18]),E===2){s(m,"#e2dbc7",[0,2.75,_/2+.48],[u+.15,.18,.9]);for(let I=0;I<=10;I++)o(m,"#e2dbc7",[-u/2+I*u/10,3.18,_/2+.84],[.034,.76,.034]);s(m,"#e2dbc7",[0,3.58,_/2+.84],[u+.17,.08,.1])}for(let I of[-1,1])for(let L=0;L<E;L++)for(let b of[-_*.26,_*.26])s(m,d.shutter,[I*(u/2+.03),1.5+L*2.35,b],[.06,1.22,.8]),s(m,"#e2dbc7",[I*(u/2+.07),.82+L*2.35,b],[.16,.1,1.05]),s(m,"#e2dbc7",[I*(u/2+.07),2.18+L*2.35,b],[.16,.12,1.05]);return c(m),a.push(m),m}for(let d of xs)l(d);function h(d,g){let x=[],m=[],u=[],_=0;for(let A=0;A<d.length;A++){let E=d[Math.max(0,A-1)],I=d[Math.min(d.length-1,A+1)],L=d[A],b=I.x-E.x,M=I.z-E.z,U=Math.hypot(b,M)||1;A&&(_+=Math.hypot(L.x-d[A-1].x,L.z-d[A-1].z)/e);for(let z of[-1,1]){let q=L.x-M/U*g/2*z,B=L.z+b/U*g/2*z;x.push(q/e,t(q,B)+.018,B/e),m.push((z+1)/2*g/e,_)}if(A){let z=A*2;u.push(z-2,z-1,z,z-1,z+1,z)}}let T=new ft;T.setAttribute("position",new Je(x,3)),T.setAttribute("uv",new Je(m,2)),T.setIndex(u),T.computeVertexNormals();let v=new it(T,n.surface("paving","#ded9c9",.75,.045));v.name="village-path",v.receiveShadow=!0,i.add(v)}h(Array.from({length:31},(d,g)=>({x:385-g*21,z:36+Math.sin(g*.19)*9})),55),h(Array.from({length:15},(d,g)=>({x:23,z:-280+g*39})),40);let f=new Be;f.name="harbor-market",f.position.set(290/e,t(290,-30),-30/e),i.add(f);for(let d of[-1.4,1.4])for(let g of[-.6,.6])o(f,"#876742",[d,1.2,g],[.045,2.4,.045]);let p=s(f,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);p.rotation.x=.07,s(f,"#a98961",[0,.7,0],[2.8,.15,.9]);for(let d=0;d<5;d++)s(f,"#a68854",[(d-2)*.5,.88,0],[.43,.2,.68]);return c(f),{building:l,houses:a}}var Ke=20,Ir=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);var St=Object.fromEntries(Jt.map(i=>{let e=Math.hypot(i.dock.x-i.x,i.dock.z-i.z),t=(i.dock.x-i.x)/e,n=(i.dock.z-i.z)/e;return[i.id,{id:i.id,x:i.x+t*i.radius*1.06,z:i.z+n*i.radius*1.06,shore:{x:i.x+t*i.radius*.84,z:i.z+n*i.radius*.84},ux:t,uz:n}]})),ot={pump:{x:330,z:65},cave:{x:1080,z:-415},estate:{x:1900,z:652},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60},supply:{x:1230,z:-520}},Xn=Array.from({length:5},(i,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2}));function un(i,e){let t=Ta(i,e);return t?t.id==="fortress"&&Math.abs(i-t.x)<110&&Math.abs(e-t.z)<110?.85:Cr(t,i,e):-.32}function o0(i){return Object.values(St).filter(e=>Ir(e,i.p)<125).sort((e,t)=>Ir(e,i.p)-Ir(t,i.p))[0]}function a0(i){if(i.interior==="cave")return[{id:"paper",...ot.paper,label:i.paper?i.gun?"supplies":"take-gun":"move-paper"},{id:"cave-exit",...ot.caveExit,label:"leave-cave"}];if(i.interior==="estate")return[{id:"key",...ot.key,label:"take-key"},{id:"stairs",...ot.stairs,label:"cellar"},{id:"estate-exit",...ot.estateExit,label:"leave-estate"}];if(i.interior==="cellar")return[...Xn.filter(n=>!i.released.includes(n.id)).map(n=>({...n,id:"cell-"+n.id,label:"free-person"})),{id:"cellar-exit",...ot.cellarExit,label:"upstairs"}];if(i.boat){let n=o0(i);return n?[{...n,id:"dock-"+n.id,label:"dock"}]:[]}let e=St[i.island],t=[{...e.shore,id:"boat",label:i.released.length===5&&!i.boarded?"board-group":"boat"}];if(i.island==="home"&&t.push({id:"pump",...ot.pump,label:"refuel"}),i.island==="jungle"&&t.push({id:"cave",...ot.cave,label:"enter-cave"},{id:"supply",...ot.supply,label:"supplies"}),i.island==="fortress"&&t.push({id:"estate",...ot.estate,label:"enter-estate"}),["highlands","smugglers","paradise"].includes(i.island)){let n=su[i.island];t.push({id:"supplies",x:n.x,z:n.z,label:"supplies"})}return t}function cu(i){return a0(i).filter(e=>Ir(e,i.p)<(e.id.startsWith("cell-")?85:e.id.startsWith("dock-")?125:65)).sort((e,t)=>Ir(e,i.p)-Ir(t,i.p))[0]||null}function _s(i){if(i.complete)return{key:"complete",target:null};if(!i.docked)return{key:"dock-goal",target:St.home};if(!i.tanked)return{key:"fuel-goal",target:i.boat?St.home:ot.pump};if(!i.gun)return i.interior==="cave"?{key:i.paper?"gun-goal":"paper-goal",target:ot.paper}:{key:"cave-goal",target:i.boat?St.jungle:i.island==="jungle"?ot.cave:St[i.island].shore};if(i.interior==="cave")return{key:"exit-cave-goal",target:ot.caveExit};if(!i.key){if(i.interior==="estate"){let e=i.guards.find(t=>t.id==="boss");return{key:e.hp>0?"boss-goal":"key-goal",target:e.hp>0?e:ot.key}}return{key:"estate-goal",target:i.boat?St.fortress:i.island==="fortress"?ot.estate:St[i.island].shore}}return i.released.length<5?i.interior==="cellar"?{key:"people-goal",target:Xn.find(e=>!i.released.includes(e.id))}:{key:"cellar-goal",target:i.interior==="estate"?ot.stairs:i.boat?St.fortress:ot.estate}:i.interior?{key:"escort-goal",target:i.interior==="cellar"?ot.cellarExit:ot.estateExit}:i.boarded?{key:"home-goal",target:i.boat?St.home:i.island==="home"?St.home.shore:St[i.island].shore}:{key:"boat-goal",target:St.fortress.shore}}function tc(i,e,t,n,r){let s=e.interior?1.8:e.boat?.65:1.3;if(i.fillStyle=e.interior?"#25312d":"#176475",i.fillRect(0,0,t,n),i.save(),i.translate(t/2-e.p.x*s,n/2-e.p.z*s),i.scale(s,s),e.interior){if(i.fillStyle="#6f7568",i.fillRect(-115,-125,230,310),i.strokeStyle="#beb99e",i.lineWidth=8,i.strokeRect(-115,-125,230,310),e.interior==="cave"&&(i.fillStyle="#967756",i.fillRect(-25,-60,50,35),i.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||i.fillRect(-17,-55,34,22)),e.interior==="estate"&&(i.fillStyle="#9b7751",i.fillRect(-45,-105,90,25),i.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&i.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of Xn)i.strokeStyle="#bac6bf",e.released.includes(l.id)||i.strokeRect(l.x-18,-112,36,80)}else{for(let l of Jt){a(l,1.045,"#398b8b"),a(l,1,"#d9cba2"),a(l,.83,l.biome==="highlands"?"#8f9882":"#759575");for(let f=0;f<26;f++){let p=f*2.39996+l.x*.001,d=l.radius*(.36+f%7*.075),g=l.x+Math.sin(p)*d,x=l.z+Math.cos(p)*d;if(!(l.id==="home"&&(Oi({x:g,z:x},l.id)||g>220||Math.abs(x-40)<55||Math.abs(g-23)<45))&&!(l.id==="fortress"&&Math.abs(g-l.x)<125&&Math.abs(x-l.z)<155)){i.strokeStyle="#365e49",i.lineWidth=5;for(let m=0;m<7;m++){let u=m*Math.PI*2/7;i.beginPath(),i.moveTo(g,x),i.quadraticCurveTo(g+Math.sin(u+.25)*13,x+Math.cos(u+.25)*13,g+Math.sin(u)*25,x+Math.cos(u)*25),i.stroke()}}}i.fillStyle="#fff4cc",i.font="18px system-ui",i.textAlign="center",i.fillText(r(l.id),l.x,l.z-l.radius*.58);let h=St[l.id];i.strokeStyle="#a2865b",i.lineWidth=24,i.beginPath(),i.moveTo(h.shore.x,h.shore.z),i.lineTo(h.x,h.z),i.stroke()}i.strokeStyle="#b7baa5",i.lineWidth=50,i.beginPath(),i.moveTo(385,40),i.lineTo(-250,40),i.stroke(),i.lineWidth=36,i.beginPath(),i.moveTo(23,-270),i.lineTo(23,270),i.stroke();for(let l of xs)i.fillStyle="#304f43",i.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),i.fillStyle=l.color,i.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),i.fillStyle="#ab7861",i.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),i.strokeStyle="#d4aa83",i.lineWidth=4,i.beginPath(),i.moveTo(l.x-l.w/2,l.z),i.lineTo(l.x+l.w/2,l.z),i.stroke();i.fillStyle="#e0d5b9",i.fillRect(1820,470,160,160),i.fillStyle="#352e25",i.fillRect(1880,626,40,12),i.fillStyle="#404b40",i.fillRect(ot.cave.x-36,ot.cave.z-30,72,36),i.fillStyle="#d28757",i.fillRect(ot.pump.x-15,ot.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of Xn)e.released.includes(l.id)||c(l,"#d3dcbe",10);let o=_s(e).target;o&&(i.strokeStyle="#f5d281",i.lineWidth=3,i.beginPath(),i.arc(o.x,o.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),i.stroke()),i.save(),i.translate(e.p.x,e.p.z),i.rotate(-e.heading),e.boat?(i.fillStyle="#efe4c9",i.beginPath(),i.moveTo(-18,-32),i.lineTo(18,-32),i.lineTo(22,28),i.lineTo(0,50),i.lineTo(-22,28),i.closePath(),i.fill()):(i.fillStyle="#b6ddd3",i.beginPath(),i.arc(0,0,9,0,Math.PI*2),i.fill()),i.strokeStyle="#fff6c7",i.lineWidth=3,i.beginPath(),i.moveTo(0,6),i.lineTo(0,28),i.stroke(),i.restore(),e.shot&&(i.strokeStyle="#ffeac5",i.lineWidth=2,i.beginPath(),i.moveTo(e.shot.from.x,e.shot.from.z),i.lineTo(e.shot.to.x,e.shot.to.z),i.stroke()),i.restore();function a(l,h,f){i.fillStyle=f,i.beginPath();for(let p=0;p<=96;p++){let d=p/96*Math.PI*2,g=l.radius*jl(l,d)*h,x=l.x+Math.cos(d)*g,m=l.z+Math.sin(d)*g;p?i.lineTo(x,m):i.moveTo(x,m)}i.closePath(),i.fill()}function c(l,h,f){i.fillStyle=h,i.beginPath(),i.arc(l.x,l.z,f,0,Math.PI*2),i.fill()}}function hu({canvas:i,getState:e,makeHuman:t,onLost:n,rendererFactory:r=s=>new Ar(s)}){let s=r({canvas:i,antialias:!0,powerPreference:"high-performance"}),o=innerWidth<=700;s.setPixelRatio(Math.min(devicePixelRatio||1,o?1.1:1.5)),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Tt,s.toneMapping=yr,s.shadowMap.enabled=!0,s.shadowMap.type=_r;let a=new vi,c=new Ct(68,innerWidth/innerHeight,.04,500);a.add(c),a.background=new We("#b9dbe5"),a.fog=new yi("#b9dbe5",130,380);let l=new Ei("#d5ecfa","#566143",2),h=new Ri("#fff2d6",2.8);h.castShadow=!0,h.shadow.mapSize.set(o?1024:2048,o?1024:2048),Object.assign(h.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),h.shadow.normalBias=.025,a.add(l,h,h.target);let f=ba(s),p=new Map,d=new Map,g=O=>(p.has(O)||p.set(O,f.forColor(O)||new Et({color:O,roughness:.85})),p.get(O)),x=(O,N)=>(d.has(O)||d.set(O,N()),d.get(O)),m=(O,N,le,C=[0,0,0],se=[1,1,1])=>{let ae=new it(N,le);return ae.position.set(...C),ae.scale.set(...se),ae.castShadow=ae.receiveShadow=!0,O.add(ae),ae},u=(O,N,le,C)=>m(O,x("box",()=>new nn),g(N),le,C),_=(O,N,le,C)=>m(O,x("cylinder",()=>new Ot(1,1,1,12)),g(N),le,C),T=(O,N,le,C)=>m(O,x("sphere",()=>new cn(1,16,12)),g(N),le,C),v={mat:g,geo:x,mesh:m,cube:u,tube:_,ell:T},A=new Be,E=new Be;a.add(A,E);for(let O of Jt){let N=Ql(O,{segments:o?32:64});N.scale.set(1/Ke,1,1/Ke),N.position.set(O.x/Ke,0,O.z/Ke);let le=N.geometry.attributes.position;for(let Y=0;Y<le.count;Y++)le.setY(Y,un(O.x+le.getX(Y),O.z+le.getZ(Y)));let C=new Float32Array(le.count*3),se=new We;for(let Y=0;Y<le.count;Y++){let xe=Math.hypot(le.getX(Y),le.getZ(Y))/O.radius;se.set(xe>.8?"#fff7e4":O.biome==="rocky"?"#d1d4c5":"#dce2c8"),se.toArray(C,Y*3)}N.geometry.setAttribute("color",new It(C,3)),N.geometry.computeVertexNormals(),N.material.dispose(),N.material=Aa(f,Ke),N.material.vertexColors=!0,A.add(N);let ae=St[O.id],ve=new Be;ve.position.set(ae.shore.x/Ke,.18,ae.shore.z/Ke),ve.rotation.y=Math.atan2(ae.ux,ae.uz),A.add(ve);let re=Ia(ae,ae.shore)/Ke;u(ve,"#a98961",[0,.02,re/2],[1.5,.16,re+.6]);for(let Y=0;Y<=Math.ceil(re*3);Y++)u(ve,"#876742",[0,.12,Y/3],[1.47,.025,.06]);for(let Y of[-.65,.65])for(let xe of[0,re])_(ve,"#876742",[Y,-.38,xe],[.075,1.3,.075]);if(["paradise","smugglers","highlands"].includes(O.id)){let Y=new Be;Y.position.set(O.x/Ke,un(O.x,O.z),O.z/Ke),A.add(Y),u(Y,"#a98961",[0,.35,0],[1.3,.7,.8]),u(Y,"#debb63",[0,.73,0],[1.4,.08,.85])}}let I=wa(Jt.map(O=>[O.x/Ke,O.z/Ke,O.radius*.955/Ke,O.radius*.955/Ke]));A.add(I.mesh);let L=Ea();A.add(L);let b=Ra(A,Jt,{scale:Ke,height:un,surfaces:f,small:o,clear:(O,N,le)=>Oi({x:N,z:le},O.id)||O.id==="home"&&(N>220||Math.abs(le-40)<55||Math.abs(N-23)<45)||O.id==="jungle"&&Ia({x:N,z:le},ot.cave)<100||O.id==="fortress"&&Math.abs(N-O.x)<125&&Math.abs(le-O.z)<155||Ia({x:N,z:le},St[O.id].shore)<65}),M=Ca(A,{scale:Ke,height:un,surfaces:f,helpers:v}),U=new Be;A.add(U),T(U,"#233f52",[0,.05,0],[.85,.36,1.9]),T(U,"#dedbd0",[0,.22,0],[.8,.23,1.85]),u(U,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]),u(U,"#3b5355",[0,.57,-.6],[1.15,.3,.48]),u(U,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let z=new it(new nn(1.2,.48,.025),new is({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));z.position.set(0,1.15,.68),U.add(z);let q=new it(new Ti(.2,.026,8,20),g("#2e3538"));q.position.set(0,1.02,.28),U.add(q),u(U,"#303b40",[0,.35,-1.75],[.42,.6,.38]),u(U,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let B=new it(new ln(1.5,5),new tn({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.position.set(0,.03,-3.3),U.add(B);let W=new Be;W.position.set(ot.pump.x/Ke,un(ot.pump.x,ot.pump.z),ot.pump.z/Ke),A.add(W),u(W,"#e6d6b8",[0,.6,0],[.75,1.2,.65]),u(W,"#bd6e4e",[0,1.3,0],[.78,.3,.68]),u(W,"#263f41",[0,.94,.34],[.42,.2,.04]),_(W,"#2d3435",[.53,.7,0],[.035,1.1,.035]);let Z=new Be;Z.position.set(ot.cave.x/Ke,un(ot.cave.x,ot.cave.z),ot.cave.z/Ke),A.add(Z);for(let O of[-1.6,1.6])T(Z,"#92968b",[O,1.5,0],[.7,1.7,1.3]);T(Z,"#777a6b",[0,2.9,0],[2.1,.8,1.3]),u(Z,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let ne=new Be;ne.position.set(95,.85,27.5),A.add(ne),u(ne,"#e2dbc7",[0,1.55,0],[8,3.1,8]),u(ne,"#a68854",[0,3.2,0],[8.6,.25,8.6]),u(ne,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let O of[-1,1]){let N=u(ne,"#ba7655",[O*1.7,5.9,-.4],[3.7,.15,7.4]);N.rotation.z=-O*.3}u(ne,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let O of[-2.7,2.7])for(let N of[1.7,4.3])u(ne,"#425761",[O,N,4.04],[1.15,1.3,.06]),u(ne,"#e2dbc7",[O,N,4.11],[.08,1.38,.08]),u(ne,"#e2dbc7",[O,N,4.11],[1.2,.08,.08]);for(let O of[-1.4,1.4])_(ne,"#e2dbc7",[O,1.3,4.65],[.16,2.6,.16]);u(ne,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let O=0;O<3;O++)u(ne,"#92968b",[0,-.03+O*.06,4.4+O*.4],[2.6,.15,1.25-O*.25]);for(let O of[-3.4,3.4])for(let N of[1.7,4.3]){u(ne,"#587e7c",[O,N,4.07],[.32,1.35,.1]);for(let le=0;le<8;le++)u(ne,"#876742",[O,N-.5+le*.14,4.14],[.3,.025,.045])}u(ne,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let O=-10;O<=10;O++)_(ne,"#e2dbc7",[O*.39,3.57,5.05],[.033,.83,.033]);u(ne,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);let K={};function pe(O,N=11,le=15){let C=new Be;C.name=O,E.add(C),K[O]=C,u(C,O==="cave"?"#777a6b":"#a68854",[0,-.1,1],[N,.2,le]);for(let ae of[-N/2,N/2])u(C,O==="cave"?"#92968b":"#e2dbc7",[ae,1.65,1],[.3,3.3,le]);u(C,O==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-le/2],[N,3.3,.3]),u(C,"#313f38",[0,1.1,le/2-.2],[1.7,2.2,.15]);let se=new Ai(O==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return se.position.set(0,2.7,1),C.add(se),C}let Se=pe("cave",12,17);for(let O=0;O<9;O++)T(Se,"#777a6b",[-4.8+O*3%10,2.9,-5+O],[.25,.8,.25]);let Ue=u(Se,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let O of[-.75,.75])_(Se,"#876742",[O,.35,-2],[.065,.7,.065]);let Ze=document.createElement("canvas");Ze.width=256,Ze.height=320;let nt=Ze.getContext("2d");nt.fillStyle="#ddd5bd",nt.fillRect(0,0,256,320),nt.fillStyle="#3a3b32",nt.font="bold 26px serif",nt.fillText("ISLAND DAILY",18,38),nt.fillRect(18,51,220,3);for(let O=0;O<20;O++)nt.fillRect(18,72+O*10,94-O%4*6,2),nt.fillRect(128,72+O*10,104-O%3*8,2);let lt=new ti(Ze);lt.colorSpace=Tt;let et=new it(new ln(.9,1.05),new Et({map:lt,side:bt}));et.rotation.x=-Math.PI/2,et.position.set(0,.83,-2),Se.add(et);function te(O){let N=new Be;O.add(N),u(N,"#333a3d",[0,0,.06],[.12,.12,.34]);let le=u(N,"#695646",[0,-.11,-.03],[.1,.23,.13]);return le.rotation.x=-.22,u(N,"#8b9294",[0,.08,.03],[.11,.035,.3]),N}let ce=te(Se);ce.position.set(0,.87,-2),ce.rotation.y=Math.PI/2;let we=pe("estate",11,15);u(we,"#816947",[0,.42,-4.6],[2.6,.85,.9]),u(we,"#decc9f",[0,.05,1],[3,.025,10]);for(let O=0;O<6;O++)u(we,"#777a6b",[3.5,.06*O,-4.75+O*.28],[1.7,.12,.65]);let Ve=new it(new Ti(.13,.036,8,16),new Et({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));Ve.position.set(0,.88,-3),we.add(Ve),u(Ve,"#debb63",[0,-.2,0],[.065,.32,.065]);let De=pe("cellar",11,15),Ye=[];for(let O of Xn){let N=new Be;N.position.set(O.x/Ke,0,-1.5),De.add(N),Ye[O.id]=N;for(let le=-2;le<=2;le++)_(N,"#475759",[le*.32,1.3,0],[.025,2.6,.025]);for(let le of[.1,2.5])u(N,"#475759",[0,le,0],[1.65,.055,.055]);u(De,"#a68854",[O.x/Ke,.18,-4.8],[1.55,.36,.8]),u(De,"#e2dbc7",[O.x/Ke,.4,-4.8],[1.5,.1,.8])}let pt=t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",v);a.add(pt.root);let D=new Map,ut=new Map;for(let O of e().guards){let N=t({shirt:O.id==="boss"?"#43433e":"#526252",skin:"#c29574",hair:"#302e28"},"guard",v);a.add(N.root),te(N.arms[1].forearm).position.set(0,-.24,.14),D.set(O.id,N)}for(let O of Xn){let N=t({shirt:["#8da4b1","#b78876","#9caa8c","#c3b487","#92b2b6"][O.id],skin:"#dbb18d",hair:"#544432"},"resident",v);O.child&&N.root.scale.setScalar(.72),a.add(N.root),ut.set(O.id,N)}let ze=new Be;c.add(ze),te(ze).position.set(.26,-.23,-.48);let He=T(ze,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),Te=_(ze,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);Te.rotation.x=-.5;let st=new it(new Ti(.42,.035,8,32),new tn({color:"#f3d48a"}));st.rotation.x=-Math.PI/2,a.add(st);let Re=new Mi(new ft().setFromPoints([new F,new F]),new ei({color:"#ffe8ad"}));a.add(Re);let Fe=new Ci,_t=new F,je=0,R=.05,y="first",G=0,Q=!0,oe=!1,J=null,Ae,me=e(),Ee=_s(me).target;Ee&&(je=Math.atan2(me.p.x-Ee.x,me.p.z-Ee.z));function Ce(O,N,le,C,se,ae){O.root.position.set(N.x/Ke,le,N.z/Ke),O.rig.rotation.y=C;let ve=ae*7,re=se?.24:0;for(let Y of O.legs)Y.thigh.rotation.x=Math.sin(ve+(Y.side<0?Math.PI:0))*re,Y.calf.rotation.x=Math.max(0,-Math.sin(ve+(Y.side<0?Math.PI:0)))*re,Y.shoe.rotation.x=-Y.calf.rotation.x*.6;for(let Y of O.arms)Y.arm.rotation.x=se?Math.sin(ve+(Y.side<0?0:Math.PI))*.25:0,Y.forearm.rotation.x=-.18;O.hips.position.y=.87+(se?Math.cos(ve*2)*.009:0)}function he(O){if(!Q||oe)return;let N=e(),le=O/1e3;G=O,f.update();let C=N.interior;A.visible=!C,E.visible=!!C;for(let[ge,Ge]of Object.entries(K))Ge.visible=ge===C;a.background.set(C?"#202c29":"#b9dbe5"),a.fog.color.copy(a.background),l.intensity=C?.65:2,h.intensity=C?.15:2.8;let se=C?0:N.boat?.28:un(N.p.x,N.p.z);if(pt.root.visible=!N.boat||y==="third",Ce(pt,N.p,se+(N.boat?.35:0),N.heading,N.walking&&!N.boat,le),pt.rig.visible=y==="third",U.position.set((N.boat?N.p.x:St[N.boatAt].x)/Ke,.02,(N.boat?N.p.z:St[N.boatAt].z)/Ke),U.rotation.y=N.boat?N.heading:Math.atan2(St[N.boatAt].ux,St[N.boatAt].uz),U.rotation.z=N.boat?Math.sin(le*2)*.015:0,B.visible=N.boat&&N.walking,N.boat){for(let ge of pt.arms)ge.arm.rotation.x=-.8,ge.forearm.rotation.x=-.4;for(let ge of pt.legs)ge.thigh.rotation.x=-1.1,ge.calf.rotation.x=1.2}et.visible=!N.paper,ce.visible=N.paper&&!N.gun,Ve.visible=!N.key&&N.guards.find(ge=>ge.id==="boss").hp===0,Ve.rotation.y=le,Ye.forEach((ge,Ge)=>ge.visible=!N.released.includes(Ge));for(let ge of N.guards){let Ge=D.get(ge.id);Ge.root.visible=ge.area===C&&!N.boat&&(!ge.area||N.island==="fortress"),Ce(Ge,ge,ge.area?0:un(ge.x,ge.z),Math.atan2(N.p.x-ge.x,N.p.z-ge.z),ge.hp>0&&Ia(ge,N.p)<210,le),ge.hp<=0?(Ge.rig.rotation.x=-Math.PI/2,Ge.root.position.y+=ge.area?0:.15,Ge.root.scale.setScalar(.8)):(Ge.rig.rotation.x=0,Ge.arms[1].arm.rotation.x=-1.05,Ge.arms[1].forearm.rotation.x=-.35)}for(let ge of Xn){let Ge=ut.get(ge.id),Xe=N.released.includes(ge.id);Ge.root.visible=N.boarded?!1:Xe?!N.boat&&(C==="estate"||C==="cellar"||N.island==="fortress"):C==="cellar";let At=Xe?{x:N.p.x-Math.sin(N.heading)*(35+ge.id*15)+Math.cos(N.heading)*(ge.id%2?16:-16),z:N.p.z-Math.cos(N.heading)*(35+ge.id*15)-Math.sin(N.heading)*(ge.id%2?16:-16)}:ge;Ce(Ge,At,C?0:un(At.x,At.z),N.heading,Xe&&N.walking,le+ge.id*.18)}let ae=_s(N).target,ve=cu(N),re=ve||ae;st.visible=!!re,re&&st.position.set(re.x/Ke,(C?0:un(re.x,re.z))+.08,re.z/Ke),st.scale.setScalar(1+Math.sin(le*3)*.1),ze.visible=N.gun&&!N.boat&&y==="first",ze.position.z=N.shot?.025:0;let Y=N.boat?.75:se,xe=Sa({x:N.p.x/Ke,z:N.p.z/Ke,surface:Y,yaw:je,pitch:R,mode:y,distance:N.boat?7.5:4.6});if(C&&y==="third"&&(xe.position.x=fs.clamp(xe.position.x,-5.1,5.1),xe.position.z=fs.clamp(xe.position.z,-5,8.1)),!C&&y==="third"){A.updateMatrixWorld(!0),_t.subVectors(xe.position,xe.target);let ge=_t.length();_t.normalize(),Fe.set(xe.target,_t),Fe.far=ge;let Ge=Fe.intersectObjects([...M.houses,ne],!0).find(Xe=>Xe.distance>.2);Ge&&xe.position.copy(xe.target).addScaledVector(_t,Math.max(.35,Ge.distance-.22)),xe.position.y=Math.max(xe.position.y,un(xe.position.x*Ke,xe.position.z*Ke)+.24)}if(c.position.copy(xe.position),c.lookAt(xe.target),h.position.set(N.p.x/Ke-12,25,N.p.z/Ke-8),h.target.position.set(N.p.x/Ke,0,N.p.z/Ke),I.update(le,c.position),L.position.copy(c.position),Re.visible=!!N.shot,N.shot){let ge=se+1.35,Ge=N.shot.from,Xe=N.shot.to;Re.geometry.setFromPoints([new F(Ge.x/Ke,ge,Ge.z/Ke),new F(Xe.x/Ke,ge,Xe.z/Ke)])}Ae!==C&&(Ae=C,C?je=0:ae&&(je=Math.atan2(N.p.x-ae.x,N.p.z-ae.z))),s.render(a,c)}function Me(){c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function ke(O,N=0){e().paused||(je+=O,R=fs.clamp(R+N,y==="first"?-.95:-.05,.75))}i.addEventListener("pointerdown",O=>{e().paused||O.button!==0||(J={id:O.pointerId,x:O.clientX,y:O.clientY},i.setPointerCapture(O.pointerId))}),i.addEventListener("pointermove",O=>{J?.id===O.pointerId&&(ke(-(O.clientX-J.x)*.006,(O.clientY-J.y)*.005),J.x=O.clientX,J.y=O.clientY)});for(let O of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(O,()=>J=null);return i.addEventListener("webglcontextlost",O=>{O.preventDefault(),oe=!0,Q=!1,n?.()}),{frame:he,resize:Me,orbit:ke,setCamera(O){y=O==="first"?"first":"third",R=y==="first"?.05:.22},get cameraMode(){return y},get enabled(){return Q&&!oe},vector:(O,N)=>({x:O*Math.cos(je)+N*Math.sin(je),z:-O*Math.sin(je)+N*Math.cos(je)}),aim:()=>je+Math.PI,setEnabled(O){Q=!!O&&!oe},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,eye:c.position.toArray(),camera:y}),dispose(){s.dispose(),f.dispose();let O=new Set,N=new Set;a.traverse(le=>{if(le.geometry&&O.add(le.geometry),le.material)for(let C of Array.isArray(le.material)?le.material:[le.material])N.add(C)}),O.forEach(le=>le.dispose()),N.forEach(le=>le.dispose()),lt.dispose()}}}function Ia(i,e){return Math.hypot(i.x-e.x,i.z-e.z)}function l0(i){return hu({...i,makeHuman:rc})}var _e=80,uu=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],ai=(i,e,t)=>Math.max(e,Math.min(t,i)),c0=i=>(i=ai(i,0,1),i*i*(3-2*i)),h0=(i,e)=>Math.atan2(Math.sin(e-i),Math.cos(e-i));function qt(i,e){let t=i*_e,n=e*_e,r=-1;for(let[o,a,c,l]of uu)r=Math.max(r,1-Math.hypot((t-o)/c,(n-a)/l));return r<=0?-.32:.015+c0(r/.17)*(.25+.28*(1+Math.sin(i*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(i*.7)*Math.sin(e*.6))}function du(i,e,t){return{x:i*Math.cos(t)+e*Math.sin(t),y:-i*Math.sin(t)+e*Math.cos(t)}}function fu(i,e){let r=ai(Math.hypot(i,e),.08,.855);return{hip:-Math.atan2(e,-i)-Math.acos(ai((.43*.43+r*r-.43*.43)/(2*.43*r),-1,1)),knee:Math.PI-Math.acos(ai((.43*.43+.43*.43-r*r)/(2*.43*.43),-1,1))}}function ic(i){return i?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let n=i.point(e*i.width/2,t*i.depth/2);return qt(n.x/_e,n.y/_e)}))):0}function nc(i,e,t,n=ic(t)){let r=qt(i,e);if(!t)return r;let s=t.floor;if(Math.abs(i*_e-s.x)<=s.w/2&&Math.abs(e*_e-s.y)<=s.h/2)return Math.max(r,n+.16);let o=i*_e-t.center.x,a=e*_e-t.center.y,c=o*t.fy-a*t.fx,l=o*t.fx+a*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,n+.16)-r)*(1-(l-t.depth/2)/64):r}function pu(i,e,t={}){let n=(p,d,g,x,m)=>{let u=new it(m,new Et({color:d}));return u.position.set(...g),u.scale.set(...x),p.add(u),u},r=t.cube||((p,d,g,x)=>n(p,d,g,x,new nn(1,1,1))),s=t.tube||((p,d,g,x)=>n(p,d,g,x,new Ot(1,1,1,10))),o=new Be,a=i.width/_e,c=i.depth/_e,l=i.wallHeight/_e,h=i.roofRidge/_e,f=i.door/_e;o.name="base",o.position.set(i.center.x/_e,e,i.center.y/_e),o.rotation.y=i.yaw,r(o,"#a68854",[0,.08,0],[a,.16,c]).name="floor";for(let p of[-a/2+.1,a/2-.1])for(let d of[-c/2+.1,c/2-.1])s(o,"#876742",[p,l/2,d],[.075,l,.075]).name="post";for(let p of[-1,1]){let d=r(o,"#ba7655",[p*a/4,(l+h)/2,0],[Math.hypot(a/2+.2,h-l),.1,c+.36]);d.rotation.z=-p*Math.atan2(h-l,a/2+.2),d.name="roof"}for(let p of i.walls){let d=p.x-i.center.x,g=p.y-i.center.y,x=(d*i.fy-g*i.fx)/_e,m=(d*i.fx+g*i.fy)/_e;r(o,"#e2dbc7",[x,l/2,m],[i.fy?p.w/_e:p.h/_e,l,i.fy?p.h/_e:p.w/_e]).name="wall"}if(i.walls.length>=5){let p=i.doorHeight/_e;r(o,"#845f3f",[0,(l+p)/2,c/2],[f,l-p,.125]).name="lintel"}for(let p of i.beds){let d=p.x-i.center.x,g=p.y-i.center.y,x=(d*i.fy-g*i.fx)/_e,m=(d*i.fx+g*i.fy)/_e;r(o,"#7d654b",[x,.17,m],[.65,.34,1.125]).name="bed",r(o,"#cec6a0",[x,.38,m],[.65,.14,1.125]),r(o,"#ede3bd",[x,.49,m-.35],[.5,.09,.26])}return o}function mu(i,e,{cube:t,tube:n,ell:r}){if(i==="gather"&&(n(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),i==="fish"){let s=n(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let o=n(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);o.rotation.x=.6}if(i==="cook"){let s=n(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function rc(i={},e="player",t={}){let n=new Map,r=new Map,s=t.mat||(B=>(n.has(B)||n.set(B,new Et({color:B})),n.get(B))),o=t.geo||((B,W)=>(r.has(B)||r.set(B,W()),r.get(B))),a=t.mesh||((B,W,Z,ne=[0,0,0],K=[1,1,1])=>{let pe=new it(W,Z);return pe.position.set(...ne),pe.scale.set(...K),B.add(pe),pe}),c=t.ell||((B,W,Z,ne)=>a(B,o("ball",()=>new cn(1,14,10)),s(W),Z,ne)),l=t.cube||((B,W,Z,ne)=>a(B,o("box",()=>new nn(1,1,1)),s(W),Z,ne)),h=t.tube||((B,W,Z,ne)=>a(B,o("cyl",()=>new Ot(1,1,1,10)),s(W),Z,ne)),f=new Be,p=new Be;f.add(p);let d=i.skin||"#dda879",g=i.hair||"#43332b",x=i.shirt||"#4c9cba",m=new Be;m.position.y=.87,p.add(m),c(m,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let u=o("human-torso",()=>new ns([new Ne(.16,.13),new Ne(.205,.2),new Ne(.215,.38),new Ne(.25,.49),new Ne(.26,.52),new Ne(.19,.57),new Ne(.09,.64)],18));a(m,u,s(x),[0,0,0],[1,1,.66]);for(let B of[-1,1]){let W=l(m,x,[B*.065,.6,.071],[.085,.075,.024]);W.rotation.z=-B*.3,l(m,x,[B*.11,.37,.142],[.105,.09,.022])}for(let B=0;B<4;B++)c(m,"#d7d5c2",[0,.24+B*.075,.15],[.009,.01,.005]);e==="guard"&&l(m,"#39483f",[0,.35,.11],[.34,.36,.09]),l(m,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),h(m,d,[0,.64,0],[.064,.13,.064]);let _=new Be;_.position.y=.79,m.add(_),c(_,d,[0,0,0],[.135,.175,.133]),c(_,d,[-.137,-.005,0],[.025,.048,.025]),c(_,d,[.137,-.005,0],[.025,.048,.025]),c(_,d,[0,-.015,.136],[.026,.033,.036]);for(let B of[-1,1])c(_,"#f6f3df",[B*.052,.02,.115],[.03,.017,.014]),c(_,"#31433e",[B*.053,.02,.128],[.012,.013,.007]),l(_,g,[B*.052,.061,.11],[.062,.01,.014]);l(_,"#af735b",[0,-.071,.117],[.051,.009,.012]);let T=o("hair",()=>new cn(1,16,10,0,Math.PI*2,0,Math.PI*.56));a(_,T,s(e==="nela"?"#8d4931":g),[0,.015,-.015],[.145,.18,.143]);let v=[new Be,new Be,new Be];v.forEach(B=>_.add(B));let A=_.children.find(B=>B.isMesh&&B.geometry===T);_.remove(A),v[0].add(A),a(v[1],T,s(g),[0,.015,-.015],[.145,.18,.143]),c(v[1],g,[0,-.04,-.17],[.072,.14,.08]);for(let B=0;B<12;B++){let W=B*Math.PI*2/12;c(v[2],g,[Math.sin(W)*.1,.1+B%2*.018,Math.cos(W)*.1-.015],[.066,.067,.066])}if(c(v[2],g,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(_,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),v.forEach((B,W)=>B.visible=W===(i.style||0)),e==="leon")h(_,"#c5a775",[0,.15,0],[.16,.12,.16]),h(_,"#c5a775",[0,.095,0],[.22,.028,.22]),l(m,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(m,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let B of[-1,1])l(m,"#b6caa4",[B*.17,.38,-.04],[.034,.35,.029])}let E=[],I=[];for(let B of[-1,1]){let W=new Be;W.position.set(B*.27,.54,0),m.add(W),h(W,x,[0,-.095,0],[.087,.19,.087]),h(W,d,[0,-.24,0],[.061,.15,.061]);let Z=new Be;Z.position.y=-.31,W.add(Z),a(Z,o("human-forearm",()=>new Ot(.057,.04,.26,12)),s(d),[0,-.13,0]),c(Z,d,[0,-.28,0],[.06,.082,.046]),E.push({arm:W,forearm:Z,side:B});let ne=new Be;ne.position.set(B*.115,0,0),m.add(ne),a(ne,o("human-thigh",()=>new Ot(.098,.074,.42,12)),s("#52625f"),[0,-.21,0]);let K=new Be;K.position.y=-.43,ne.add(K),a(K,o("human-calf",()=>new Ot(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let pe=c(K,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);I.push({thigh:ne,calf:K,shoe:pe,side:B})}let L=new Be;h(L,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(L,"#dad9c5",[0,1.45,0],[.045,.15,.03]),L.position.set(.35,.2,.08),p.add(L),L.visible=!1;let b={};for(let B of["gather","fish","cook"]){let W=new Be;mu(B,W,{cube:l,tube:h,ell:c}),W.position.set(0,-.28,0),E[1].forearm.add(W),W.visible=!1,b[B]=W}let M=new Be;f.add(M);for(let B=0;B<5;B++){let W=h(M,"#a17d48",[(B-2)*.25,.08,0],[.115,1.7,.115]);W.rotation.x=Math.PI/2}for(let B of[-.5,.5])l(M,"#6e5937",[0,.19,B],[1.24,.05,.1]);M.visible=!1;let U=[],z=[],q=[];return p.traverse(B=>{B.isMesh&&(B.material===s(x)&&U.push(B),B.material===s(d)&&z.push(B),B.material===s(g)&&q.push(B))}),{root:f,rig:p,hips:m,head:_,arms:E,legs:I,spear:L,raft:M,shirtParts:U,skinParts:z,hairParts:q,hairStyles:v,props:b,yaw:0,lastX:null,lastZ:null,phase:0}}function gu(i,e){let t=e&&eu(e.kind,e.phase);i.rig.rotation.x=t?.bend||0;for(let[n,r]of Object.entries(i.props))r.visible=!!t&&e.kind===n;if(t)for(let n of i.arms)n.arm.rotation.x=n.side<0?t.left:t.right,n.forearm.rotation.x=-.25,n.arm.rotation.z=-n.side*.08+((n.side>0||e.kind==="cheer")&&t.wave||0)}function xu(i,e,t){let n=i.phase||0,r=i.x+Math.sin(e*.65+n)*14,s=i.y+Math.cos(e*.65+n)*14;return t(r,s)?{x:r/_e,z:s/_e,y:.055+Math.sin(e*3+n)*.008,yaw:Math.atan2(Math.cos(e*.65+n),-Math.sin(e*.65+n))}:null}function u0({canvas:i,terrain:e,getState:t,onLost:n}){let r=new Ar({canvas:i,antialias:!0,powerPreference:"high-performance"}),s=innerWidth<=700;r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Tt,r.toneMapping=yr,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=_r;let o=new vi;o.background=new We("#c5dbe5"),o.fog=new yi("#c5dbe5",70,240);let a=new Ct(72,innerWidth/innerHeight,.04,350);o.add(a);let c=new Ei("#c9e3ff","#71694d",1.85);o.add(c);let l=new Ri("#fff0d2",3.1);l.castShadow=!0,l.shadow.mapSize.set(s?1024:2048,s?1024:2048),l.shadow.camera.left=-16,l.shadow.camera.right=16,l.shadow.camera.top=16,l.shadow.camera.bottom=-16,l.shadow.camera.near=.5,l.shadow.camera.far=65,l.shadow.bias=-12e-5,l.shadow.normalBias=.012,o.add(l,l.target);let h=ba(r),f=new Map,p=new Map;function d(w,P={}){if(!Object.keys(P).length){let H=h.forColor(w);if(H)return H}let X=w+JSON.stringify(P);return f.has(X)||f.set(X,new Et({color:w,roughness:.86,...P})),f.get(X)}function g(w,P){return p.has(w)||p.set(w,P()),p.get(w)}function x(){return g("ball",()=>new cn(1,14,10))}function m(){return g("box",()=>new nn(1,1,1))}function u(){return g("cyl",()=>new Ot(1,1,1,10))}function _(w,P,X,H=[0,0,0],ee=[1,1,1],ie=!0){let de=new it(P,X);return de.position.set(...H),de.scale.set(...ee),de.castShadow=ie,de.receiveShadow=!0,w.add(de),de}function T(w,P,X,H){return _(w,x(),d(P),X,H)}function v(w,P,X,H){return _(w,m(),d(P),X,H)}function A(w,P,X,H){return _(w,u(),d(P),X,H)}let E=new vt,I=new ln(4600/_e,2900/_e,230,145);I.rotateX(-Math.PI/2),I.translate(2300/_e,0,1450/_e);let L=I.attributes.position;for(let w=0;w<L.count;w++)L.setY(w,qt(L.getX(w),L.getZ(w)));I.computeVertexNormals();let b=nu(e),M=new ti(b);M.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let U=h.ground(M),z=new it(I,U);z.receiveShadow=!0,o.add(z);let q=ou({segments:s?24:48}),B=40;q.scale.set(1/B,1,1/B),q.position.x=6500/_e;for(let w of q.children)w.material.dispose(),w.material=Aa(h,B),w.geometry.setAttribute("color",new Je(new Float32Array(w.geometry.attributes.position.count*3).fill(1),3));let W=new Be;W.scale.set(B,1,B),q.add(W);let Z=(w,P)=>{let X=Ta(w,P);return X?Cr(X,w,P):-.32};Ra(W,Jt,{scale:B,height:Z,surfaces:h,small:s,clear:(w,P,X)=>Oi({x:P,z:X},w.id)||w.id==="home"&&(Math.abs(X-40)<55||Math.abs(P-23)<45)}),Ca(W,{scale:B,height:Z,surfaces:h,helpers:{cube:v,tube:A}}),o.add(q);let ne=iu(o,qt,_e,b,s),K=wa([...uu.map(([w,P,X,H])=>[w/_e,P/_e,X/_e,H/_e]),...Jt.map(w=>[q.position.x+w.x/B,w.z/B,w.radius*.955/B,w.radius*.955/B])]);o.add(K.mesh);let pe=Ea(320);o.add(pe);function Se(){let w=[],P=[],X=[],H=(ie,de,fe,Pe)=>{let Le=de*2.05,qe=Math.sin(de*Math.PI)*.46-de*de*.8;return[Math.sin(ie)*Le+Math.cos(ie)*Pe*fe,qe-Pe*.22,Math.cos(ie)*Le-Math.sin(ie)*Pe*fe]};for(let ie=0;ie<11;ie++){let de=ie*Math.PI*2/11;for(let fe=1;fe<17;fe++)for(let Pe of[-1,1]){let Le=fe/18,qe=Math.sin(Le*Math.PI)*.42,Ie=w.length/3;w.push(...H(de,Le-.023,Pe,.015),...H(de,Le-.085,Pe,qe),...H(de,Le+.038,Pe,qe*.88),...H(de,Le+.025,Pe,.015)),X.push(Le,0,Le,.9,Le+.03,1,Le+.03,0),P.push(Ie,Ie+1,Ie+2,Ie,Ie+2,Ie+3)}}let ee=new ft;return ee.setAttribute("position",new Je(w,3)),ee.setAttribute("uv",new Je(X,2)),ee.setIndex(P),ee.computeVertexNormals(),ee}let Ue=new Ot(.085,.16,4.35,14,12);Ue.translate(0,2.175,0);for(let w=0;w<Ue.attributes.position.count;w++){let P=Ue.attributes.position;P.setX(w,P.getX(w)+.16*(P.getY(w)/4.35)**2)}Ue.computeVertexNormals();let Ze=d("#9d7750",{bumpMap:h.textures.get("rock"),bumpScale:.025});Ze.onBeforeCompile=w=>{w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let nt=Se(),lt=h.surface("leaf","#ffffff",1,.018).clone();lt.side=bt;let et={value:0};lt.onBeforeCompile=w=>{w.uniforms.uWind=et,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let te={tree:new Nt(Ue,Ze,400),leaves:new Nt(nt,lt,400),rock:new Nt(new bi(1,2),d("#92968b"),400),food:new Nt(x(),d("#7a5638"),400),shell:new Nt(new cn(1,12,6,0,Math.PI),d("#f1d0b7"),400)};for(let w of Object.values(te))w.count=0,w.castShadow=!0,w.receiveShadow=!0,w.frustumCulled=!1,o.add(w);function ce(w,P){let X={tree:0,leaves:0,rock:0,food:0,shell:0};for(let H of w){let ee=H.x/_e,ie=H.y/_e,de=qt(ee,ie),fe=H.phase||0;if(H.t==="tree"){let Pe=.84+.17*Math.sin(H.x*.033+H.y*.027),Le=1.35+.28*Math.cos(fe);E.position.set(ee,de,ie),E.rotation.set(.03*Math.sin(fe),fe,.04*Math.cos(fe)),E.scale.set(Pe,Le,Pe),E.updateMatrix(),te.tree.setMatrixAt(X.tree++,E.matrix),E.position.set(ee+.16*Pe*Math.cos(fe),de+4.3*Le,ie-.16*Pe*Math.sin(fe)),E.rotation.set(Math.sin(P*.7+fe)*.025,fe,Math.cos(P*.6+fe)*.025),E.scale.set(Pe,Pe,Pe),E.updateMatrix(),te.leaves.setMatrixAt(X.leaves++,E.matrix)}else te[H.t]&&(E.position.set(ee,de+(H.t==="rock"?.23:H.t==="food"?.13:.025),ie),E.rotation.set(0,fe,0),E.scale.set(...H.t==="rock"?[.34+.18*Math.abs(Math.sin(fe)),.3,.4]:H.t==="food"?[.15,.13,.15]:[.12,.04,.14]),E.updateMatrix(),te[H.t].setMatrixAt(X[H.t]++,E.matrix))}for(let[H,ee]of Object.entries(te))ee.count=X[H],ee.instanceMatrix.needsUpdate=!0}function we(w,P="#ffe9b5"){let X=document.createElement("canvas");X.width=512,X.height=96;let H=X.getContext("2d");H.fillStyle="#123e43",H.beginPath(),H.roundRect(6,10,500,76,25),H.fill(),H.fillStyle=P,H.font="700 29px system-ui",H.textAlign="center",H.textBaseline="middle",H.fillText(String(w).slice(0,45),256,48,480);let ee=new ti(X);ee.colorSpace=Tt;let ie=new Qr(new fr({map:ee,depthTest:!0,transparent:!0}));return ie.scale.set(2.45,.46,1),ie.position.y=2.32,ie}let Ve=["#4c9cba","#df8168","#9974c7","#76b677"];function De(w={},P="player",X=""){let H=rc(w,P,{ell:T,cube:v,tube:A,mesh:_,mat:d,geo:g});return o.add(H.root),H.name=X,H.tag=null,X&&(H.tag=we(X,w.shirt),H.root.add(H.tag)),H}let Ye=De(Ma()),pt=new Map,D=De({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),ut=De({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function ze(w,P,X){!P||P===w.name||(w.tag&&(w.root.remove(w.tag),w.tag.material.map.dispose(),w.tag.material.dispose()),w.name=P,w.tag=we(P,X),w.root.add(w.tag))}function He(w,P){if(w.lookKey!==JSON.stringify(P)){w.lookKey=JSON.stringify(P);for(let X of w.shirtParts)X.material=d(P.shirt||"#4c9cba");for(let X of w.skinParts)X.material=d(P.skin||"#dda879");for(let X of w.hairParts)X.material=d(P.hair||"#43332b");w.hairStyles.forEach((X,H)=>X.visible=H===(P.style||0))}}let Te=null,st=0;function Re(w,P,X,H,ee,ie,de,fe){let Pe=P.x/_e,Le=P.y/_e,qe=fe.sea(P.x,P.y),Ie=qe?0:nc(Pe,Le,Te,st);w.root.position.set(Pe,Ie+(qe?fe.raft?.18:-.95:0),Le),w.yaw+=h0(w.yaw,X)*Math.min(1,ie*12),w.rig.rotation.y=w.yaw;let at=H&&de>.05;w.phase+=at?ie*(de>4?10:7):0;let rt=at?de>4?.31:.22:0,ye=w.phase;w.hips.position.y=(at?.9:.92)+(at?Math.cos(ye*2)*.012:Math.sin(ee*1.7)*.004);for(let Oe of w.legs){let Mt=ye+(Oe.side<0?Math.PI:0),Lt=Math.sin(Mt)*rt,dt=at?Math.max(0,Math.cos(Mt))*.105:0,Vt=Pe+Math.cos(w.yaw)*Oe.side*.115+Math.sin(w.yaw)*Lt,$t=Le-Math.sin(w.yaw)*Oe.side*.115+Math.cos(w.yaw)*Lt,Ft=qe?0:nc(Vt,$t,Te,st)-Ie,Rt=fu(-w.hips.position.y+.07+Ft+dt,Lt);Oe.thigh.rotation.x=Rt.hip,Oe.calf.rotation.x=Rt.knee,Oe.shoe.rotation.x=-Rt.hip-Rt.knee}for(let Oe of w.arms)Oe.arm.rotation.x=at?Math.sin(ye+(Oe.side<0?0:Math.PI))*.45:Math.sin(ee*1.3+Oe.side)*.025,Oe.arm.rotation.z=-Oe.side*.07,Oe.forearm.rotation.x=at?-.22:-.08,qe&&!fe.raft&&(Oe.arm.rotation.x=-Math.PI/2+Math.sin(ye+Oe.side)*.35,Oe.forearm.rotation.x=-.28);gu(w,fe.motion),w.raft.visible=!!(qe&&fe.raft),w.raft.rotation.y=w.yaw,w.spear.visible=!!fe.spear&&!qe&&!fe.motion,fe.blocked&&(w.arms[0].arm.rotation.x=-1,w.arms[0].forearm.rotation.x=-1),w.tag&&(w.tag.visible=Math.hypot(Pe-Ye.root.position.x,Le-Ye.root.position.z)<13),w.lastX=Pe,w.lastZ=Le}let Fe=new Be;o.add(Fe);for(let w of[-.55,.55])for(let P of[-.27,.27])A(Fe,"#866642",[w,1.24,P],[.038,2.48,.038]);v(Fe,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),v(Fe,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let w of[-1,1]){let P=v(Fe,"#ba7655",[w*.39,2.63,0],[.9,.07,1.14]);P.rotation.z=-w*.34}let _t=A(Fe,"#ba7655",[0,2.79,0],[.055,1.18,.055]);_t.rotation.x=Math.PI/2;for(let w of[-.5,.5])v(Fe,"#e2dbc7",[0,2.4,w],[1.7,.1,.07]);for(let w=0;w<5;w++)v(Fe,"#a98961",[(w-2)*.24,.32,.344],[.21,.53,.025]);for(let w=0;w<4;w++)T(Fe,"#b1b967",[(w-1.5)*.19,.78,0],[.09,.08,.08]);let je=new Be;o.add(je),v(je,"#765734",[0,.18,0],[.56,.36,.4]),v(je,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let w of[-.19,.19])v(je,"#d5b15a",[w,.2,.215],[.045,.35,.026]);v(je,"#ecd178",[0,.32,.22],[.08,.09,.03]);let R=new it(new Si(.24,.29,32),new tn({color:"#ffe087",transparent:!0,opacity:.8,side:bt,depthWrite:!1}));R.rotation.x=-Math.PI/2,o.add(R);let y={root:new Be,tag:null,name:null};o.add(y.root),y.root.position.set(gs.x/_e,qt(gs.x/_e,gs.y/_e),gs.y/_e),A(y.root,"#786040",[0,.95,0],[.12,1.9,.12]),v(y.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let G=new Be;o.add(G);let Q=new it(new Si(.93,1.06,40),new tn({color:"#54e4ef",transparent:!0,opacity:.85,side:bt,depthWrite:!1}));Q.rotation.x=-Math.PI/2,Q.position.y=.04,G.add(Q);let oe=_(G,new Ot(.035,.035,1,8),new tn({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),J=null,Ae=0,me="",Ee=new Be,Ce=null,he=null,Me=[];o.add(Ee);function ke(w){let P=w.activities?.completed||0,X=P>=3&&w.activities.gardenClaimed<P,H=JSON.stringify([w.baseLevel,w.basePos,w.campfire,w.fire,P>=1,P>=3,P>=6,X,w.activities?.raceWon]);if(H!==me){me=H,he&&(he.geometry.dispose(),he.material.dispose());for(let ee of Me)ee.dispose();if(Me=[],o.remove(Ee),Ee=new Be,o.add(Ee),he=null,Ce=null,w.basePos&&w.baseLevel){let ee=Te,ie=ru(pu(ee,st,{cube:v,tube:A}),ee,{cube:v,tube:A},h);if(Ee.add(ie),ie.traverse(de=>{["roof","wall","lintel"].includes(de.name)&&(de.material=de.material.clone(),de.material.transparent=!0,Me.push(de.material))}),P>=1)for(let de of[-1,1]){let fe=T(ie,"#ffdc80",[de*(ee.width/_e/2-.15),2.35,ee.depth/_e/2],[.09,.14,.09]);fe.material=d("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(P>=6&&(A(ie,"#6e5942",[ee.width/_e/2+.2,1.75,-ee.depth/_e/2],[.03,3.5,.03]),v(ie,"#5bbca9",[ee.width/_e/2+.55,3.1,-ee.depth/_e/2],[.7,.42,.03])),P>=3&&w.garden){let de=w.garden,fe=new Be;fe.position.set(de.x/_e,qt(de.x/_e,de.y/_e),de.y/_e),Ee.add(fe),v(fe,"#785d40",[0,.07,0],[1.35,.14,1]);for(let Pe of[-.4,0,.4])for(let Le of[-.25,.25])A(fe,"#587b37",[Pe,.21,Le],[.025,.3,.025]),T(fe,"#6caa49",[Pe,.35,Le],[.16,.12,.12]),X&&T(fe,"#cfa565",[Pe+.055,.27,Le],[.07,.065,.07])}}if(w.campfire&&w.fire){let ee=new Be,ie=w.fire.x/_e,de=w.fire.y/_e;ee.position.set(ie,qt(ie,de),de),Ee.add(ee);for(let fe=0;fe<8;fe++){let Pe=fe*Math.PI/4;T(ee,"#777a6b",[Math.sin(Pe)*.3,.07,Math.cos(Pe)*.3],[.095,.07,.105])}for(let fe of[.5,-.5]){let Pe=A(ee,"#614b35",[0,.09,0],[.06,.5,.06]);Pe.rotation.z=Math.PI/2,Pe.rotation.y=fe}he=_(ee,new ni(.17,.46,8),new tn({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),Ce=new Ai("#ffa145",2.5,4),Ce.position.y=.5,ee.add(Ce)}}}let O=[];function N(){let w=new Be;o.add(w),T(w,"#765745",[0,.29,0],[.24,.25,.43]),T(w,"#765745",[0,.3,.4],[.19,.18,.2]),T(w,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let X of[-1,1]){let H=_(w,new ni(.08,.17,3),d("#644937"),[X*.13,.47,.43]);H.rotation.z=X*.45}let P=[];for(let X of[-.17,.17])for(let H of[-.27,.24])P.push(A(w,"#5e493b",[X,.105,H],[.037,.2,.037]));return{root:w,legs:P,lastX:null,lastZ:null}}function le(w,P){for(;O.length<w.length;)O.push(N());for(let X=0;X<O.length;X++){let H=O[X],ee=w[X];if(H.root.visible=!!ee,!ee){H.lastX=H.lastZ=null;continue}let ie=ee.x/_e,de=ee.y/_e,fe=H.lastX===null?0:ie-H.lastX,Pe=H.lastZ===null?0:de-H.lastZ,Le=Math.hypot(fe,Pe)>1e-4;H.root.position.set(ie,qt(ie,de),de),Le&&(H.root.rotation.y=Math.atan2(fe,Pe));for(let qe=0;qe<4;qe++)H.legs[qe].rotation.x=Le?Math.sin(P*6+qe*Math.PI)*.15:0;H.lastX=ie,H.lastZ=de}}let C=[new Nt(x(),d("#adddd0",{roughness:.4}),96),new Nt(new ni(1,1,3),d("#668e93"),96),new Nt(new ni(1,1,3),d("#779da0"),96)];for(let w of C)w.count=0,w.frustumCulled=!1,o.add(w);function se(w,P,X){let H=0;for(let ee of w||[]){let ie=xu(ee,P,X);if(!ie||H>=96)continue;let de=(fe,Pe,Le,qe,Ie=0)=>{E.position.set(ie.x+Math.sin(ie.yaw)*Le+Math.cos(ie.yaw)*fe,ie.y+Pe,ie.z+Math.cos(ie.yaw)*Le-Math.sin(ie.yaw)*fe),E.rotation.set(Ie,ie.yaw,0),E.scale.set(...qe),E.updateMatrix()};de(0,0,0,[.09,.045,.22]),C[0].setMatrixAt(H,E.matrix),de(0,0,-.25,[.095,.12,.025],Math.PI/2),C[1].setMatrixAt(H,E.matrix),de(0,.045,-.02,[.04,.1,.11]),C[2].setMatrixAt(H,E.matrix),H++}for(let ee of C)ee.count=H,ee.instanceMatrix.needsUpdate=!0}let ae="",ve=[];function re(w,P){let X=JSON.stringify(w);if(X!==ae){ae=X;for(let H of ve)o.remove(H),H.traverse(ee=>{ee.isSprite&&(ee.material.map.dispose(),ee.material.dispose()),ee.userData.privateGeometry&&ee.geometry.dispose()});ve=[];for(let H of w||[]){if(H.type==="return")continue;let ee=new Be;ee.position.set(H.x/_e,qt(H.x/_e,H.y/_e),H.y/_e),o.add(ee),ve.push(ee);let ie=new it(new Si(.4,.46,28),d(H.done?"#6d9c89":"#8cebd5",{side:bt}));if(ie.rotation.x=-Math.PI/2,ie.position.y=.03,ie.userData.privateGeometry=!0,ee.add(ie),H.type==="fragment"&&(v(ee,"#e1c587",[0,.38,0],[.37,.45,.06]),v(ee,"#a68752",[0,.18,-.035],[.035,.42,.035]),v(ee,"#826b4d",[0,.4,.035],[.19,.022,.02])),H.type==="rune"){T(ee,"#87998a",[0,.26,0],[.27,.3,.21]);let fe=we(H.symbol,"#ffe29b");fe.position.y=.8,fe.scale.set(.65,.32,1),ee.add(fe)}if(H.type==="chest"){v(ee,"#795a39",[0,.2,0],[.65,.4,.44]),v(ee,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let fe of[-.21,.21])v(ee,"#f1d584",[fe,.23,.235],[.05,.36,.025])}if(H.type==="signal"){for(let fe of[-1,1]){let Pe=A(ee,"#8a6d49",[fe*.22,.55,0],[.04,1.1,.04]);Pe.rotation.z=fe*.22}if(v(ee,"#927652",[0,1.1,0],[.7,.16,.45]),H.done){let fe=T(ee,"#ffe28d",[0,1.34,0],[.16,.21,.16]);fe.material=d("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else v(ee,"#344f57",[0,1.3,0],[.3,.18,.24])}let de=we(H.label,H.done?"#b5d1c5":"#ffe9b5");de.position.y=H.type==="signal"?1.95:1.35,ee.add(de),ee.userData.done=H.done}}for(let H of ve)H.children[0].scale.setScalar(H.userData.done?1:1+Math.sin(P*2.8)*.05)}let Y=[];for(let w=0;w<4;w++){let P=new ft().setFromPoints([new F(-.3,0,0),new F(0,-.08,0),new F(.3,0,0)]),X=new Mi(P,new ei({color:"#fff7de"}));o.add(X),Y.push(X)}let xe=Math.atan2(-130,-60),ge=0,Ge=4.8,Xe=!0,At=!0,Yt=0,zt=null,sn=!1,Cn=0,kt="first",on=new Be;a.add(on);let li=A(on,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);li.rotation.x=-.65;let ys=T(on,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),In=new Be;on.add(In);let vs=A(In,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);vs.rotation.x=-.22;let Pa=T(In,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),Ms={};for(let w of["gather","fish","cook"]){let P=new Be;P.position.set(.29,-.26,-.61),on.add(P),mu(w,P,{cube:v,tube:A,ell:T}),Ms[w]=P}on.traverse(w=>{w.isMesh&&(w.castShadow=!1,w.receiveShadow=!1,w.frustumCulled=!1)});let ci=new F,dn=new F,bs=new F;function Ss(w,P=0){!Xe||t().paused||(xe+=w,ge=ai(ge+P,kt==="first"?-1.12:-.05,kt==="first"?1.12:.75))}function Da(w){kt=w==="third"?"third":"first",ge=w==="third"?.22:0,a.fov=w==="third"?58:72,a.updateProjectionMatrix(),zt=null,At=!0}i.addEventListener("pointerdown",w=>{let P=t();!Xe||!P.play||P.paused||w.button>0||zt||(zt={id:w.pointerId,x:w.clientX,y:w.clientY},i.setPointerCapture(w.pointerId))}),i.addEventListener("pointermove",w=>{!zt||zt.id!==w.pointerId||(Ss(-(w.clientX-zt.x)*.006,(w.clientY-zt.y)*.005),zt.x=w.clientX,zt.y=w.clientY)});let S=w=>{zt?.id===w.pointerId&&(zt=null)};for(let w of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(w,S);i.addEventListener("wheel",w=>{!Xe||t().paused||(w.preventDefault(),kt==="first"?(a.fov=ai(a.fov+w.deltaY*.025,58,85),a.updateProjectionMatrix()):Ge=ai(Ge+w.deltaY*.004,2.5,8))},{passive:!1}),i.addEventListener("webglcontextlost",w=>{w.preventDefault(),sn=!0,Xe=!1,zt=null,n()}),i.addEventListener("webglcontextrestored",()=>{sn=!1,At=!0});function k(){r.setSize(innerWidth,innerHeight,!1),a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix()}function $(w){if(!Xe||sn)return;let P=t(),X=w/1e3,H=Yt?ai((w-Yt)/1e3,0,.06):1/60;Yt=w,Te=jh(P.basePos,P.baseLevel),st=ic(Te),ze(y,P.labels?.board,"#ffe087"),y.tag&&(y.tag.position.y=1.65,y.tag.scale.set(1.4,.36,1)),G.visible=!!P.trail,P.trail&&(G.position.set(P.trail.x/_e,qt(P.trail.x/_e,P.trail.y/_e),P.trail.y/_e),oe.material.opacity=.35+.13*Math.sin(X*3),(Ae!==P.trailNumber||J?.userData.text!==(P.trailNumber===4?P.labels?.finish||"4":P.trailNumber?String(P.trailNumber):P.trail.label))&&(J&&(G.remove(J),J.material.map.dispose(),J.material.dispose()),Ae=P.trailNumber,J=we(Ae===4?P.labels?.finish||"4":Ae?String(Ae):P.trail.label,"#54e4ef"),J.userData.text=Ae===4?P.labels?.finish||"4":Ae?String(Ae):P.trail.label,J.position.y=1.5,J.scale.set(P.trailNumber?1:2.45,.4,1),G.add(J))),ze(D,P.labels?.leon,"#b49966"),ze(ut,P.labels?.nela,"#609991");let ee=P.P.x/_e,ie=P.P.y/_e;h.update(),ne.update(X,Te),et.value=X,ce(P.objects,X),se(P.fishes,X,P.sea),re(P.chapterMarkers,X);let de={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2};Re(Ye,P.P,Number.isFinite(P.heading)?P.heading:de[P.face]||0,P.moving,X,H,P.fast?5.25:3,P),D.root.visible=ut.root.visible=!0;for(let[ye,Oe]of[[D,P.leon],[ut,P.nela]])Re(ye,Oe,Math.atan2(ee-Oe.x/_e,ie-Oe.y/_e),!1,X,H,0,{...P,raft:!1,spear:!1,blocked:!1,motion:null});let fe=new Set;for(let ye of P.players){if(ye.id===P.you)continue;fe.add(ye.id);let Oe=pt.get(ye.id),Mt=ye.appearance?Ma(ye.appearance):P.looks[ye.slot]||{};(!Oe||Oe.name!==ye.name)&&(Oe&&j(Oe),Oe=De(Mt,"player",ye.name),pt.set(ye.id,Oe)),He(Oe,Mt);let Lt=Oe.lastX===null?0:ye.point.x/_e-Oe.lastX,dt=Oe.lastZ===null?0:ye.point.y/_e-Oe.lastZ,Vt=ye.moving&&Math.hypot(Lt,dt)>.002?Math.atan2(Lt,dt):de[ye.face]||0;Re(Oe,ye.point,Vt,ye.moving,X,H,3,{...P,spear:P.spearOwned&&!ye.spearStowed,blocked:ye.blocked,motion:ye.motion&&ye.motion.remaining-(w-ye.received)>0?{kind:ye.motion.kind,phase:1-(ye.motion.remaining-(w-ye.received))/(Qh[ye.motion.kind]||1e3)}:null})}for(let[ye,Oe]of pt)fe.has(ye)||(j(Oe),pt.delete(ye));He(Ye,P.appearance||Ma()),Fe.position.set(P.leon.x/_e+.9,qt(P.leon.x/_e+.9,P.leon.y/_e+.15),P.leon.y/_e+.15),je.position.set(P.chest.x/_e,qt(P.chest.x/_e,P.chest.y/_e),P.chest.y/_e),je.visible=!P.treasure,ke(P),le(P.enemies,X);let Pe=Te&&Math.abs(P.P.x-Te.floor.x)<Te.floor.w/2&&Math.abs(P.P.y-Te.floor.y)<Te.floor.h/2;for(let ye of Me)ye.opacity=Pe&&kt==="third"?.23:1,ye.depthWrite=!(Pe&&kt==="third");he&&(he.scale.y=1+Math.sin(X*13)*.18,Ce.intensity=2.5+Math.sin(X*17)*.4);let Le=P.objects.filter(ye=>Math.hypot(ye.x-P.P.x,ye.y-P.P.y)<75).sort((ye,Oe)=>Math.hypot(ye.x-P.P.x,ye.y-P.P.y)-Math.hypot(Oe.x-P.P.x,Oe.y-P.P.y))[0];R.visible=!!(P.play&&!P.paused&&Le),Le&&R.position.set(Le.x/_e,qt(Le.x/_e,Le.y/_e)+.03,Le.y/_e);for(let ye=0;ye<Y.length;ye++){let Oe=Y[ye];Oe.position.set(19+Math.sin(X*.08+ye*1.7)*8,7+Math.sin(X*.2+ye)*.5,12+Math.cos(X*.1+ye*1.3)*5),Oe.rotation.y=X*.1+ye,Oe.scale.y=1+Math.sin(X*7+ye)*.5}Ye.rig.visible=kt!=="first";let qe=P.moving&&!P.paused?Math.sin(Ye.phase*2)*.012:0,Ie=Sa({x:ee,z:ie,surface:Ye.root.position.y,yaw:xe,pitch:ge,mode:kt,distance:Ge*(a.aspect<.85?1.12:1),bob:qe});if(ci.copy(Ie.target),dn.copy(Ie.position),kt==="third"){dn.y=Math.max(dn.y,qt(dn.x,dn.z)+.55);let ye=dn.clone().sub(ci),Oe=ye.length();ye.normalize();let Lt=new Ci(ci,ye,.08,Oe).intersectObjects([Ee,Fe],!0).find(dt=>dt.object.isMesh&&dt.distance>.1);Lt&&dn.copy(ci).addScaledVector(ye,Math.max(.35,Lt.distance-.15))}kt==="first"||At||bs.distanceTo(Ye.root.position)>5?(a.position.copy(dn),At=!1):a.position.lerp(dn,1-Math.exp(-H*8)),a.lookAt(ci),bs.copy(Ye.root.position);let at=new F;o.updateMatrixWorld(!0),o.traverse(ye=>{if(!ye.isSprite)return;ye.userData.signScale||(ye.userData.signScale=ye.scale.clone()),ye.scale.copy(ye.userData.signScale),ye.getWorldPosition(at);let Oe=Math.max(.1,at.distanceTo(a.position)),Mt=ye.scale.x*a.projectionMatrix.elements[0]*innerWidth/(2*Oe),Lt=Math.min(240,innerWidth*.52);Mt>Lt&&ye.scale.multiplyScalar(Lt/Mt)});let rt=!!P.spear||!!P.motion&&["gather","fish","cook"].includes(P.motion.kind);on.visible=kt==="first"&&P.play&&rt&&!P.sea(P.P.x,P.P.y),In.visible=!!P.spear&&!P.motion;for(let[ye,Oe]of Object.entries(Ms))Oe.visible=P.motion?.kind===ye;on.position.y=qe*.4,on.rotation.x=P.motion?Math.sin(P.motion.phase*Math.PI*2)*.07:0,ys.material=d(P.appearance?.skin||"#dda879"),li.material=d(P.appearance?.shirt||"#4c9cba"),l.position.set(ee-12,18,ie-8),l.target.position.set(ee,0,ie),pe.position.copy(a.position),K.update(X,a.position),r.render(o,a),P.play&&H>.038?Cn+=H:Cn=Math.max(0,Cn-H),Cn>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),k(),Cn=0)}function j(w){o.remove(w.root),w.tag&&(w.tag.material.map.dispose(),w.tag.material.dispose())}function V(w){return Xe=!!w&&!sn,zt=null,At=!0,Yt=0,Xe}function ue(){Xe=!1,r.dispose(),I.dispose(),U.dispose(),K.dispose(),pe.geometry.dispose(),pe.material.dispose(),q.traverse(w=>{w.geometry&&w.geometry.dispose(),w.material&&w.material.dispose()}),M.dispose(),ne.dispose(),h.dispose(),lt.dispose();for(let w of[...Object.values(te),...C])w.geometry.dispose(),w.dispose();for(let w of p.values())w.dispose();for(let w of f.values())w.dispose()}return{frame:$,resize:k,orbit:Ss,setEnabled:V,setCamera:Da,dispose:ue,vector:(w,P)=>du(w,P,xe),get enabled(){return Xe},get yaw(){return xe},get cameraMode(){return kt},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:pt.size+3,camera:kt,eye:a.position.toArray(),materials:h.stats()})}}return Su(d0);})();
