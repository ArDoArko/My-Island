var MyIsland3D=(()=>{var Ya=Object.defineProperty;var Ou=Object.getOwnPropertyDescriptor;var Bu=Object.getOwnPropertyNames;var ku=Object.prototype.hasOwnProperty;var Vu=(i,e)=>{for(var t in e)Ya(i,t,{get:e[t],enumerable:!0})},Gu=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Bu(e))!ku.call(i,r)&&r!==t&&Ya(i,r,{get:()=>e[r],enumerable:!(n=Ou(e,r))||n.enumerable});return i};var Hu=i=>Gu(Ya({},"__esModule",{value:!0}),i);var U0={};Vu(U0,{SCALE:()=>_e,actionPose:()=>Fu,baseElevation:()=>yc,buildBase:()=>Uu,buildHuman:()=>vc,cameraVector:()=>Du,create:()=>L0,createCampaign:()=>I0,drawCampaign2D:()=>xc,fishPose:()=>zu,legPose:()=>Lu,terrainHeight:()=>on,walkSurface:()=>_c});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var $c=0,Al=1,Kc=2;var Cl=1,Lr=2,Bn=3,Kn=0,Kt=1,Lt=2,ni=0,Ci=1,Rl=2,Il=3,Pl=4,jc=5,fi=100,Qc=101,eh=102,th=103,nh=104,ih=200,rh=201,sh=202,oh=203,uo=204,fo=205,ah=206,lh=207,ch=208,hh=209,uh=210,dh=211,fh=212,ph=213,mh=214,Bo=0,ko=1,Vo=2,Ri=3,Go=4,Ho=5,Wo=6,Xo=7,Dl=0,gh=1,xh=2,ii=0,_h=1,yh=2,vh=3,Ur=4,Mh=5,bh=6,Sh=7;var Ll=300,Vi=301,Gi=302,qo=303,Yo=304,Es=306,_r=1e3,di=1001,po=1002,un=1003,wh=1004;var As=1005;var Cn=1006,Zo=1007;var _i=1008;var Pn=1009,Ul=1010,Nl=1011,Nr=1012,Jo=1013,yi=1014,Dn=1015,Fr=1016,$o=1017,Ko=1018,zr=1020,Fl=35902,zl=35899,Ol=1021,Bl=1022,bn=1023,yr=1026,Or=1027,jo=1028,Qo=1029,kl=1030,ea=1031;var ta=1033,Cs=33776,Rs=33777,Is=33778,Ps=33779,na=35840,ia=35841,ra=35842,sa=35843,oa=36196,aa=37492,la=37496,ca=37808,ha=37809,ua=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,xa=37816,_a=37817,ya=37818,va=37819,Ma=37820,ba=37821,Sa=36492,wa=36494,Ta=36495,Ea=36283,Aa=36284,Ca=36285,Ra=36286;var cs=2300,mo=2301,co=2302,yl=2400,vl=2401,Ml=2402;var Th=3200,Eh=3201;var Vl=0,Ah=1,Ln="",Ft="srgb",Ii="srgb-linear",hs="linear",wt="srgb";var Ai=7680;var bl=519,Ch=512,Rh=513,Ih=514,Gl=515,Ph=516,Dh=517,Lh=518,Uh=519,go=35044;var Hl="300 es",An=2e3,us=2001;var jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mc=1234567,as=Math.PI/180,vr=180/Math.PI;function Jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Wl(i,e){return(i%e+e)%e}function Wu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Xu(i,e,t){return i!==e?(t-i)/(e-i):0}function ls(i,e,t){return(1-t)*i+t*e}function qu(i,e,t,n){return ls(i,e,1-Math.exp(-t*n))}function Yu(i,e=1){return e-Math.abs(Wl(i,e*2)-e)}function Zu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $u(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ku(i,e){return i+Math.random()*(e-i)}function ju(i){return i*(.5-Math.random())}function Qu(i){i!==void 0&&(Mc=i);let e=Mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ed(i){return i*as}function td(i){return i*vr}function nd(i){return(i&i-1)===0&&i!==0}function id(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sd(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),p=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ds={DEG2RAD:as,RAD2DEG:vr,generateUUID:Jn,clamp:ft,euclideanModulo:Wl,mapLinear:Wu,inverseLerp:Xu,lerp:ls,damp:qu,pingpong:Yu,smoothstep:Zu,smootherstep:Ju,randInt:$u,randFloat:Ku,randFloatSpread:ju,seededRandom:Qu,degToRad:ed,radToDeg:td,isPowerOfTwo:nd,ceilPowerOfTwo:id,floorPowerOfTwo:rd,setQuaternionFromProperEuler:sd,normalize:St,denormalize:En},Ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],p=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==p||l!==f||h!==g){let m=1-a,d=c*p+l*f+h*g+u*x,S=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let E=Math.sqrt(v),b=Math.atan2(E,d*S);m=Math.sin(m*b)/E,a=Math.sin(a*b)/E}let _=a*S;if(c=c*m+p*_,l=l*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],p=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*f-l*p,e[t+1]=c*g+h*p+l*u-a*f,e[t+2]=l*g+h*f+a*p-c*u,e[t+3]=h*g-a*u-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),p=c(n/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=p*h*u+l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u-p*f*g;break;case"YXZ":this._x=p*h*u+l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u+p*f*g;break;case"ZXY":this._x=p*h*u-l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u-p*f*g;break;case"ZYX":this._x=p*h*u-l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u+p*f*g;break;case"YZX":this._x=p*h*u+l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u-p*f*g;break;case"XZY":this._x=p*h*u-l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=r*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Za=new N,bc=new Qn,st=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],f=n[5],g=n[8],x=r[0],m=r[3],d=r[6],S=r[1],v=r[4],_=r[7],E=r[2],b=r[5],R=r[8];return s[0]=o*x+a*S+c*E,s[3]=o*m+a*v+c*b,s[6]=o*d+a*_+c*R,s[1]=l*x+h*S+u*E,s[4]=l*m+h*v+u*b,s[7]=l*d+h*_+u*R,s[2]=p*x+f*S+g*E,s[5]=p*m+f*v+g*b,s[8]=p*d+f*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,p=a*c-h*s,f=l*s-o*c,g=t*u+n*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(r*l-h*n)*x,e[2]=(a*n-r*o)*x,e[3]=p*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ja=new st;function Xl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nh(){let i=Mr("canvas");return i.style.display="block",i}var Sc={};function br(i){i in Sc||(Sc[i]=!0,console.warn(i))}function Fh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var wc=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function od(){let i={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(r.r=$n(r.r),r.g=$n(r.g),r.b=$n(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?hs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ii]:{primaries:e,whitePoint:n,transfer:hs,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}var _t=od();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qi,xo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qi===void 0&&(Qi=Mr("canvas")),Qi.width=e.width,Qi.height=e.height;let r=Qi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$n(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ad=0,Sr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($a(r[o].image)):s.push($a(r[o]))}else s=$a(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ld=0,Ka=new N,rn=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=di,r=di,s=Cn,o=_i,a=bn,c=Pn,l=i.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Jn(),this.name="",this.source=new Sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Ll;rn.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],f=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,_=(f+1)/2,E=(d+1)/2,b=(h+p)/4,R=(u+x)/4,C=(g+m)/4;return v>_&&v>E?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=b/n,s=R/n):_>E?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=b/r,s=C/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=R/s,r=C/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(p-h)/S,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_o=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new rn(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Sr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends _o{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ds=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yo=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),ks.subVectors(this.max,$r),er.subVectors(e.a,$r),tr.subVectors(e.b,$r),nr.subVectors(e.c,$r),oi.subVectors(tr,er),ai.subVectors(nr,tr),Si.subVectors(er,nr);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Si.z,Si.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Si.z,0,-Si.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Si.y,Si.x,0];return!ja(t,er,tr,nr,ks)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,er,tr,nr,ks))?!1:(Vs.crossVectors(oi,ai),t=[Vs.x,Vs.y,Vs.z],ja(t,er,tr,nr,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hn=[new N,new N,new N,new N,new N,new N,new N,new N],Sn=new N,Bs=new zn,er=new N,tr=new N,nr=new N,oi=new N,ai=new N,Si=new N,$r=new N,ks=new N,Vs=new N,wi=new N;function ja(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){wi.fromArray(i,s);let a=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var cd=new zn,Kr=new N,Qa=new N,ei=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);let t=Kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Kr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Qa)),this.expandByPoint(Kr.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wn=new N,el=new N,Gs=new N,li=new N,tl=new N,Hs=new N,nl=new N,wr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){el.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),li.copy(this.origin).sub(el);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Gs),a=li.dot(this.direction),c=-li.dot(Gs),l=li.lengthSq(),h=Math.abs(1-o*o),u,p,f,g;if(h>0)if(u=o*c-a,p=o*a-c,g=s*h,u>=0)if(p>=-g)if(p<=g){let x=1/h;u*=x,p*=x,f=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=s,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;else p=-s,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-o*s+a)),p=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(u=Math.max(0,-(o*s+a)),p=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+p*(p+2*c)+l);else p=o>0?-s:s,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(el).addScaledVector(Gs,p),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);let n=Wn.dot(this.direction),r=Wn.dot(Wn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,r,s){tl.subVectors(t,e),Hs.subVectors(n,e),nl.crossVectors(tl,Hs);let o=this.direction.dot(nl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);let c=a*this.direction.dot(Hs.crossVectors(li,Hs));if(c<0)return null;let l=a*this.direction.dot(tl.cross(li));if(l<0||c+l>o)return null;let h=-a*li.dot(nl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class i{constructor(e,t,n,r,s,o,a,c,l,h,u,p,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,u,p,f,g,x,m)}set(e,t,n,r,s,o,a,c,l,h,u,p,f,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=f,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let p=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=p-x*l,t[9]=-a*c,t[2]=x-p*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let p=c*h,f=c*u,g=l*h,x=l*u;t[0]=p+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+p*a,t[10]=o*c}else if(e.order==="ZXY"){let p=c*h,f=c*u,g=l*h,x=l*u;t[0]=p-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let p=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=p*l+x,t[1]=c*u,t[5]=x*l+p,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let p=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-p*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=p-x*u}else if(e.order==="XZY"){let p=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hd,e,ud)}lookAt(e,t,n){let r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ci.crossVectors(n,gn),ci.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ci.crossVectors(n,gn)),ci.normalize(),Ws.crossVectors(gn,ci),r[0]=ci.x,r[4]=Ws.x,r[8]=gn.x,r[1]=ci.y,r[5]=Ws.y,r[9]=gn.y,r[2]=ci.z,r[6]=Ws.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],f=n[13],g=n[2],x=n[6],m=n[10],d=n[14],S=n[3],v=n[7],_=n[11],E=n[15],b=r[0],R=r[4],C=r[8],y=r[12],T=r[1],U=r[5],O=r[9],Z=r[13],P=r[2],k=r[6],X=r[10],ne=r[14],$=r[3],re=r[7],ae=r[11],Me=r[15];return s[0]=o*b+a*T+c*P+l*$,s[4]=o*R+a*U+c*k+l*re,s[8]=o*C+a*O+c*X+l*ae,s[12]=o*y+a*Z+c*ne+l*Me,s[1]=h*b+u*T+p*P+f*$,s[5]=h*R+u*U+p*k+f*re,s[9]=h*C+u*O+p*X+f*ae,s[13]=h*y+u*Z+p*ne+f*Me,s[2]=g*b+x*T+m*P+d*$,s[6]=g*R+x*U+m*k+d*re,s[10]=g*C+x*O+m*X+d*ae,s[14]=g*y+x*Z+m*ne+d*Me,s[3]=S*b+v*T+_*P+E*$,s[7]=S*R+v*U+_*k+E*re,s[11]=S*C+v*O+_*X+E*ae,s[15]=S*y+v*Z+_*ne+E*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],f=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+s*c*u-r*l*u-s*a*p+n*l*p+r*a*f-n*c*f)+x*(+t*c*f-t*l*p+s*o*p-r*o*f+r*l*h-s*c*h)+m*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+d*(-r*a*h-t*c*u+t*a*p+r*o*u-n*o*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],f=e[11],g=e[12],x=e[13],m=e[14],d=e[15],S=u*m*l-x*p*l+x*c*f-a*m*f-u*c*d+a*p*d,v=g*p*l-h*m*l-g*c*f+o*m*f+h*c*d-o*p*d,_=h*x*l-g*u*l+g*a*f-o*x*f-h*a*d+o*u*d,E=g*u*c-h*x*c-g*a*p+o*x*p+h*a*m-o*u*m,b=t*S+n*v+r*_+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/b;return e[0]=S*R,e[1]=(x*p*s-u*m*s-x*r*f+n*m*f+u*r*d-n*p*d)*R,e[2]=(a*m*s-x*c*s+x*r*l-n*m*l-a*r*d+n*c*d)*R,e[3]=(u*c*s-a*p*s-u*r*l+n*p*l+a*r*f-n*c*f)*R,e[4]=v*R,e[5]=(h*m*s-g*p*s+g*r*f-t*m*f-h*r*d+t*p*d)*R,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*d-t*c*d)*R,e[7]=(o*p*s-h*c*s+h*r*l-t*p*l-o*r*f+t*c*f)*R,e[8]=_*R,e[9]=(g*u*s-h*x*s-g*n*f+t*x*f+h*n*d-t*u*d)*R,e[10]=(o*x*s-g*a*s+g*n*l-t*x*l-o*n*d+t*a*d)*R,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*R,e[12]=E*R,e[13]=(h*x*r-g*u*r+g*n*p-t*x*p-h*n*m+t*u*m)*R,e[14]=(g*a*r-o*x*r-g*n*c+t*x*c+o*n*m-t*a*m)*R,e[15]=(o*u*r-h*a*r+h*n*c-t*u*c-o*n*p+t*a*p)*R,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,p=s*l,f=s*h,g=s*u,x=o*h,m=o*u,d=a*u,S=c*l,v=c*h,_=c*u,E=n.x,b=n.y,R=n.z;return r[0]=(1-(x+d))*E,r[1]=(f+_)*E,r[2]=(g-v)*E,r[3]=0,r[4]=(f-_)*b,r[5]=(1-(p+d))*b,r[6]=(m+S)*b,r[7]=0,r[8]=(g+v)*R,r[9]=(m-S)*R,r[10]=(1-(p+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=ir.set(r[0],r[1],r[2]).length(),o=ir.set(r[4],r[5],r[6]).length(),a=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);let l=1/s,h=1/o,u=1/a;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=An,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-r),p=(t+e)/(t-e),f=(n+r)/(n-r),g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===An)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===us)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=An,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-r),p=-(t+e)/(t-e),f=-(n+r)/(n-r),g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===An)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===us)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ir=new N,wn=new At,hd=new N(0,0,0),ud=new N(1,1,1),ci=new N,Ws=new N,gn=new N,Ec=new At,Ac=new Qn,Rn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dd=0,Cc=new N,rr=new Qn,Xn=new At,Xs=new N,jr=new N,fd=new N,pd=new Qn,Rc=new N(1,0,0),Ic=new N(0,1,0),Pc=new N(0,0,1),Dc={type:"added"},md={type:"removed"},sr={type:"childadded",child:null},il={type:"childremoved",child:null},vt=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Rn,n=new Qn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new st}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(jr,Xs,this.up):Xn.lookAt(Xs,jr,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(Xn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(md),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};vt.DEFAULT_UP=new N(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new N,qn=new N,rl=new N,Yn=new N,or=new N,ar=new N,Lc=new N,sl=new N,ol=new N,al=new N,ll=new yt,cl=new yt,hl=new yt,Zn=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Tn.subVectors(e,t),r.cross(Tn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Tn.subVectors(r,t),qn.subVectors(n,t),rl.subVectors(e,t);let o=Tn.dot(Tn),a=Tn.dot(qn),c=Tn.dot(rl),l=qn.dot(qn),h=qn.dot(rl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let p=1/u,f=(l*c-a*h)*p,g=(o*h-a*c)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Yn.x),c.addScaledVector(o,Yn.y),c.addScaledVector(a,Yn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return ll.setScalar(0),cl.setScalar(0),hl.setScalar(0),ll.fromBufferAttribute(e,t),cl.fromBufferAttribute(e,n),hl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ll,s.x),o.addScaledVector(cl,s.y),o.addScaledVector(hl,s.z),o}static isFrontFacing(e,t,n,r){return Tn.subVectors(n,t),qn.subVectors(e,t),Tn.cross(qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Tn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;or.subVectors(r,n),ar.subVectors(s,n),sl.subVectors(e,n);let c=or.dot(sl),l=ar.dot(sl);if(c<=0&&l<=0)return t.copy(n);ol.subVectors(e,r);let h=or.dot(ol),u=ar.dot(ol);if(h>=0&&u<=h)return t.copy(r);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(or,o);al.subVectors(e,s);let f=or.dot(al),g=ar.dot(al);if(g>=0&&f<=g)return t.copy(s);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ar,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Lc.subVectors(s,r),a=(u-h)/(u-h+(f-g)),t.copy(r).addScaledVector(Lc,a);let d=1/(m+x+p);return o=x*d,a=p*d,t.copy(n).addScaledVector(or,o).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},qs={h:0,s:0,l:0};function ul(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=Wl(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ul(o,s,e+1/3),this.g=ul(o,s,e),this.b=ul(o,s,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Ft){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=zh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return _t.workingToColorSpace(nn.copy(this),e),Math.round(ft(nn.r*255,0,255))*65536+Math.round(ft(nn.g*255,0,255))*256+Math.round(ft(nn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(nn.copy(this),t);let n=nn.r,r=nn.g,s=nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ft){_t.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,r=nn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(qs);let n=ls(hi.h,qs.h,t),r=ls(hi.s,qs.s,t),s=ls(hi.l,qs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Ze;Ze.NAMES=zh;var gd=0,On=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Ci,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=fo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},dn=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new N,Ys=new Ge,xd=0,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=go,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==go&&(e.usage=this.usage),e}};var fs=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ps=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},_d=0,Mn=new At,dl=new vt,lr=new N,xn=new zn,Qr=new zn,qt=new N,bt=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xl(e)?ps:fs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(xn.min,Qr.min),xn.expandByPoint(qt),qt.addVectors(xn.max,Qr.max),xn.expandByPoint(qt)):(xn.expandByPoint(Qr.min),xn.expandByPoint(Qr.max))}xn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(qt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)qt.fromBufferAttribute(a,l),c&&(lr.fromBufferAttribute(e,l),qt.add(lr)),r=Math.max(r,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new N,c[C]=new N;let l=new N,h=new N,u=new N,p=new Ge,f=new Ge,g=new Ge,x=new N,m=new N;function d(C,y,T){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,T),p.fromBufferAttribute(s,C),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,T),h.sub(l),u.sub(l),f.sub(p),g.sub(p);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(U),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),a[C].add(x),a[y].add(x),a[T].add(x),c[C].add(m),c[y].add(m),c[T].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,y=S.length;C<y;++C){let T=S[C],U=T.start,O=T.count;for(let Z=U,P=U+O;Z<P;Z+=3)d(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}let v=new N,_=new N,E=new N,b=new N;function R(C){E.fromBufferAttribute(r,C),b.copy(E);let y=a[C];v.copy(y),v.sub(E.multiplyScalar(E.dot(y))).normalize(),_.crossVectors(b,y);let U=_.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,U)}for(let C=0,y=S.length;C<y;++C){let T=S[C],U=T.start,O=T.count;for(let Z=U,P=U+O;Z<P;Z+=3)R(e.getX(Z+0)),R(e.getX(Z+1)),R(e.getX(Z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let p=0,f=e.count;p<f;p+=3){let g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let d=0;d<h;d++)p[g++]=l[f++]}return new Ht(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let p=l[h],f=e(p,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uc=new At,Ti=new wr,Zs=new ei,Nc=new N,Js=new N,$s=new N,Ks=new N,fl=new N,js=new N,Fc=new N,Qs=new N,lt=class extends vt{constructor(e=new bt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){js.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(fl.fromBufferAttribute(u,e),o?js.addScaledVector(fl,h):js.addScaledVector(fl.sub(t),h))}t.add(js)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(Zs.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Zs,Nc)===null||Ti.origin.distanceToSquared(Nc)>(e.far-e.near)**2))&&(Uc.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],d=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,E=v;_<E;_+=3){let b=a.getX(_),R=a.getX(_+1),C=a.getX(_+2);r=eo(this,d,e,n,l,h,u,b,R,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,d=x;m<d;m+=3){let S=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);r=eo(this,o,e,n,l,h,u,S,v,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],d=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,E=v;_<E;_+=3){let b=_,R=_+1,C=_+2;r=eo(this,d,e,n,l,h,u,b,R,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,d=x;m<d;m+=3){let S=m,v=m+1,_=m+2;r=eo(this,o,e,n,l,h,u,S,v,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function yd(i,e,t,n,r,s,o,a){let c;if(e.side===Kt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Kn,a),c===null)return null;Qs.copy(a),Qs.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Qs);return l<t.near||l>t.far?null:{distance:l,point:Qs.clone(),object:i}}function eo(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Js),i.getVertexPosition(c,$s),i.getVertexPosition(l,Ks);let h=yd(i,e,t,n,Js,$s,Ks,Fc);if(h){let u=new N;Zn.getBarycoord(Fc,Js,$s,Ks,u),r&&(h.uv=Zn.getInterpolatedAttribute(r,a,c,l,u,new Ge)),s&&(h.uv1=Zn.getInterpolatedAttribute(s,a,c,l,u,new Ge)),o&&(h.normal=Zn.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new N,materialIndex:0};Zn.getNormal(Js,$s,Ks,p.normal),h.face=p,h.barycoord=u}return h}var $t=class i extends bt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],p=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(x,m,d,S,v,_,E,b,R,C,y){let T=_/R,U=E/C,O=_/2,Z=E/2,P=b/2,k=R+1,X=C+1,ne=0,$=0,re=new N;for(let ae=0;ae<X;ae++){let Me=ae*U-Z;for(let Oe=0;Oe<k;Oe++){let ot=Oe*T-O;re[x]=ot*S,re[m]=Me*v,re[d]=P,l.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[d]=b>0?1:-1,h.push(re.x,re.y,re.z),u.push(Oe/R),u.push(1-ae/C),ne+=1}}for(let ae=0;ae<C;ae++)for(let Me=0;Me<R;Me++){let Oe=p+Me+k*ae,ot=p+Me+k*(ae+1),ct=p+(Me+1)+k*(ae+1),ht=p+(Me+1)+k*ae;c.push(Oe,ot,ht),c.push(ot,ct,ht),$+=6}a.addGroup(f,$,y),f+=$,p+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=Hi(i[t]);for(let r in n)e[r]=n[r]}return e}function vd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ql(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var Ia={clone:Hi,merge:sn},Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=vd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ms=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new N,zc=new Ge,Oc=new Ge,Gt=class extends ms{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,zc,Oc),t.subVectors(Oc,zc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(as*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cr=-90,hr=1,vo=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gt(cr,hr,e,t);r.layers=this.layers,this.add(r);let s=new Gt(cr,hr,e,t);s.layers=this.layers,this.add(s);let o=new Gt(cr,hr,e,t);o.layers=this.layers,this.add(o);let a=new Gt(cr,hr,e,t);a.layers=this.layers,this.add(a);let c=new Gt(cr,hr,e,t);c.layers=this.layers,this.add(c);let l=new Gt(cr,hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,p,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},gs=class extends rn{constructor(e=[],t=Vi,n,r,s,o,a,c,l,h){super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mo=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $t(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:ni});s.uniforms.tEquirect.value=t;let o=new lt(r,s),a=t.minFilter;return t.minFilter===_i&&(t.minFilter=Cn),new vo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},ke=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sd={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Pi=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Di=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=go,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},cn=new N,Ar=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cr=class extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur,es=new N,dr=new N,fr=new N,pr=new Ge,ts=new Ge,Oh=new At,to=new N,ns=new N,no=new N,Bc=new Ge,pl=new Ge,kc=new Ge,_s=class extends vt{constructor(e=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xs(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new Ar(n,3,0,!1)),ur.setAttribute("uv",new Ar(n,2,3,!1))}this.geometry=ur,this.material=e,this.center=new Ge(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),Oh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-fr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;io(to.set(-.5,-.5,0),fr,o,dr,r,s),io(ns.set(.5,-.5,0),fr,o,dr,r,s),io(no.set(.5,.5,0),fr,o,dr,r,s),Bc.set(0,0),pl.set(1,0),kc.set(1,1);let a=e.ray.intersectTriangle(to,ns,no,!1,es);if(a===null&&(io(ns.set(-.5,.5,0),fr,o,dr,r,s),pl.set(0,1),a=e.ray.intersectTriangle(to,no,ns,!1,es),a===null))return;let c=e.ray.origin.distanceTo(es);c<e.near||c>e.far||t.push({distance:c,point:es.clone(),uv:Zn.getInterpolation(es,to,ns,no,Bc,pl,kc,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function io(i,e,t,n,r,s){pr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ts.x=s*pr.x-r*pr.y,ts.y=r*pr.x+s*pr.y):ts.copy(pr),i.copy(e),i.x+=ts.x,i.y+=ts.y,i.applyMatrix4(Oh)}var bo=class extends rn{constructor(e=null,t=1,n=1,r,s,o,a,c,l=un,h=un,u,p){super(null,o,a,c,l,h,r,s,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends Ht{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new At,Vc=new At,ro=[],Gc=new zn,wd=new At,is=new lt,rs=new ei,Mt=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,wd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Gc.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Gc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),rs.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(n),e.ray.intersectsSphere(rs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mr),Vc.multiplyMatrices(n,mr),is.matrixWorld=Vc,is.raycast(e,ro);for(let o=0,a=ro.length;o<a;o++){let c=ro[o];c.instanceId=s,c.object=this,t.push(c)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new bo(new Float32Array(r*this.count),r,this.count,jo,Dn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ml=new N,Td=new N,Ed=new st,Nn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ml.subVectors(n,t).cross(Td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ml),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ed.getNormalMatrix(e),r=this.coplanarPoint(ml).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ei=new ei,Ad=new Ge(.5,.5),so=new N,Ir=class{constructor(e=new Nn,t=new Nn,n=new Nn,r=new Nn,s=new Nn,o=new Nn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],p=s[6],f=s[7],g=s[8],x=s[9],m=s[10],d=s[11],S=s[12],v=s[13],_=s[14],E=s[15];if(r[0].setComponents(l-o,f-h,d-g,E-S).normalize(),r[1].setComponents(l+o,f+h,d+g,E+S).normalize(),r[2].setComponents(l+a,f+u,d+x,E+v).normalize(),r[3].setComponents(l-a,f-u,d-x,E-v).normalize(),n)r[4].setComponents(c,p,m,_).normalize(),r[5].setComponents(l-c,f-p,d-m,E-_).normalize();else if(r[4].setComponents(l-c,f-p,d-m,E-_).normalize(),t===An)r[5].setComponents(l+c,f+p,d+m,E+_).normalize();else if(t===us)r[5].setComponents(c,p,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);let t=Ad.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(so.x=r.normal.x>0?e.max.x:e.min.x,so.y=r.normal.y>0?e.max.y:e.min.y,so.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pi=class extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},So=new N,wo=new N,Hc=new At,ss=new wr,oo=new ei,gl=new N,Wc=new N,Li=class extends vt{constructor(e=new bt,t=new pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)So.fromBufferAttribute(t,r-1),wo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=So.distanceTo(wo);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),oo.radius+=s,e.ray.intersectsSphere(oo)===!1)return;Hc.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Hc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let d=h.getX(x),S=h.getX(x+1),v=ao(this,e,ss,c,d,S,x);v&&t.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),d=ao(this,e,ss,c,x,m,g-1);d&&t.push(d)}}else{let f=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let d=ao(this,e,ss,c,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){let x=ao(this,e,ss,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ao(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(So.fromBufferAttribute(a,r),wo.fromBufferAttribute(a,s),t.distanceSqToSegment(So,wo,gl,Wc)>n)return;gl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(gl);if(!(l<e.near||l>e.far))return{distance:l,point:Wc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var mi=class extends rn{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ys=class extends rn{constructor(e,t,n=yi,r,s,o,a=un,c=un,l,h=yr,u=1){if(h!==yr&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vs=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var It=class i extends bt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],p=[],f=[],g=0,x=[],m=n/2,d=0;S(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(p,3)),this.setAttribute("uv",new Qe(f,2));function S(){let _=new N,E=new N,b=0,R=(t-e)/n;for(let C=0;C<=s;C++){let y=[],T=C/s,U=T*(t-e)+e;for(let O=0;O<=r;O++){let Z=O/r,P=Z*c+a,k=Math.sin(P),X=Math.cos(P);E.x=U*k,E.y=-T*n+m,E.z=U*X,u.push(E.x,E.y,E.z),_.set(k,R,X).normalize(),p.push(_.x,_.y,_.z),f.push(Z,1-T),y.push(g++)}x.push(y)}for(let C=0;C<r;C++)for(let y=0;y<s;y++){let T=x[y][C],U=x[y+1][C],O=x[y+1][C+1],Z=x[y][C+1];(e>0||y!==0)&&(h.push(T,U,Z),b+=3),(t>0||y!==s-1)&&(h.push(U,O,Z),b+=3)}l.addGroup(d,b,0),d+=b}function v(_){let E=g,b=new Ge,R=new N,C=0,y=_===!0?e:t,T=_===!0?1:-1;for(let O=1;O<=r;O++)u.push(0,m*T,0),p.push(0,T,0),f.push(.5,.5),g++;let U=g;for(let O=0;O<=r;O++){let P=O/r*c+a,k=Math.cos(P),X=Math.sin(P);R.x=y*X,R.y=m*T,R.z=y*k,u.push(R.x,R.y,R.z),p.push(0,T,0),b.x=k*.5+.5,b.y=X*.5*T+.5,f.push(b.x,b.y),g++}for(let O=0;O<r;O++){let Z=E+O,P=U+O;_===!0?h.push(P,P+1,Z):h.push(P+1,P,Z),C+=3}l.addGroup(d,C,_===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},In=class i extends It{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},To=class i extends bt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(s.slice(),3)),this.setAttribute("uv",new Qe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let v=new N,_=new N,E=new N;for(let b=0;b<t.length;b+=3)f(t[b+0],v),f(t[b+1],_),f(t[b+2],E),c(v,_,E,S)}function c(S,v,_,E){let b=E+1,R=[];for(let C=0;C<=b;C++){R[C]=[];let y=S.clone().lerp(_,C/b),T=v.clone().lerp(_,C/b),U=b-C;for(let O=0;O<=U;O++)O===0&&C===b?R[C][O]=y:R[C][O]=y.clone().lerp(T,O/U)}for(let C=0;C<b;C++)for(let y=0;y<2*(b-C)-1;y++){let T=Math.floor(y/2);y%2===0?(p(R[C][T+1]),p(R[C+1][T]),p(R[C][T])):(p(R[C][T+1]),p(R[C+1][T+1]),p(R[C+1][T]))}}function l(S){let v=new N;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(S),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function h(){let S=new N;for(let v=0;v<s.length;v+=3){S.x=s[v+0],S.y=s[v+1],S.z=s[v+2];let _=m(S)/2/Math.PI+.5,E=d(S)/Math.PI+.5;o.push(_,1-E)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){let v=o[S+0],_=o[S+2],E=o[S+4],b=Math.max(v,_,E),R=Math.min(v,_,E);b>.9&&R<.1&&(v<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),E<.2&&(o[S+4]+=1))}}function p(S){s.push(S.x,S.y,S.z)}function f(S,v){let _=S*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function g(){let S=new N,v=new N,_=new N,E=new N,b=new Ge,R=new Ge,C=new Ge;for(let y=0,T=0;y<s.length;y+=9,T+=6){S.set(s[y+0],s[y+1],s[y+2]),v.set(s[y+3],s[y+4],s[y+5]),_.set(s[y+6],s[y+7],s[y+8]),b.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),C.set(o[T+4],o[T+5]),E.copy(S).add(v).add(_).divideScalar(3);let U=m(E);x(b,T+0,S,U),x(R,T+2,v,U),x(C,T+4,_,U)}}function x(S,v,_,E){E<0&&S.x===1&&(o[v]=S.x-1),_.x===0&&_.z===0&&(o[v]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ui=class i extends To{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ms=class i extends bt{constructor(e=[new Ge(0,-.5),new Ge(.5,0),new Ge(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ft(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/t,u=new N,p=new Ge,f=new N,g=new N,x=new N,m=0,d=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,f.x=d*1,f.y=-m,f.z=d*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,f.x=d*1,f.y=-m,f.z=d*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let S=0;S<=t;S++){let v=n+S*h*r,_=Math.sin(v),E=Math.cos(v);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*_,u.y=e[b].y,u.z=e[b].x*E,o.push(u.x,u.y,u.z),p.x=S/t,p.y=b/(e.length-1),a.push(p.x,p.y);let R=c[3*b+0]*_,C=c[3*b+1],y=c[3*b+0]*E;l.push(R,C,y)}}for(let S=0;S<t;S++)for(let v=0;v<e.length-1;v++){let _=v+S*e.length,E=_,b=_+e.length,R=_+e.length+1,C=_+1;s.push(E,b,C),s.push(R,C,b)}this.setIndex(s),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var _n=class i extends bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=e/a,p=t/c,f=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let S=d*p-o;for(let v=0;v<l;v++){let _=v*u-s;g.push(_,-S,0),x.push(0,0,1),m.push(v/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<a;S++){let v=S+l*d,_=S+l*(d+1),E=S+1+l*(d+1),b=S+1+l*d;f.push(v,_,b),f.push(_,E,b)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ni=class i extends bt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],c=[],l=[],h=[],u=e,p=(t-e)/r,f=new N,g=new Ge;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){let d=s+m/n*o;f.x=u*Math.cos(d),f.y=u*Math.sin(d),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=p}for(let x=0;x<r;x++){let m=x*(n+1);for(let d=0;d<n;d++){let S=d+m,v=S,_=S+n+1,E=S+n+2,b=S+1;a.push(v,_,b),a.push(_,E,b)}}this.setIndex(a),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var pn=class i extends bt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new N,p=new N,f=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let S=[],v=d/n,_=0;d===0&&o===0?_=.5/t:d===n&&c===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let b=E/t;u.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),x.push(p.x,p.y,p.z),m.push(b+_,1-v),S.push(l++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){let v=h[d][S+1],_=h[d][S],E=h[d+1][S],b=h[d+1][S+1];(d!==0||o>0)&&f.push(v,_,b),(d!==n-1||c<Math.PI)&&f.push(_,E,b)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ti=class i extends bt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new N,u=new N,p=new N;for(let f=0;f<=n;f++)for(let g=0;g<=r;g++){let x=g/r*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=r;g++){let x=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,d=(r+1)*(f-1)+g,S=(r+1)*f+g;o.push(x,m,S),o.push(m,d,S)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Tt=class extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bs=class extends Tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Eo=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ao=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function lo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Cd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Fi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Co=class extends Fi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yl,endingEnd:yl}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case vl:s=e,a=2*t-n;break;case Ml:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case vl:o=e,c=2*n-t;break;case Ml:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,d=-p*m+2*p*x-p*g,S=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let E=0;E!==a;++E)s[E]=d*o[h+E]+S*o[l+E]+v*o[c+E]+_*o[u+E];return s}},Ro=class extends Fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(r-t),u=1-h;for(let p=0;p!==a;++p)s[p]=o[l+p]*u+o[c+p]*h;return s}},Io=class extends Fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Co(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cs:t=this.InterpolantFactoryMethodDiscrete;break;case mo:t=this.InterpolantFactoryMethodLinear;break;case co:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cs;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return co}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Cd(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===co,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*n,p=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[p+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,p=o*n;for(let f=0;f!==n;++f)t[p+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=mo;var gi=class extends yn{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=cs;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends yn{constructor(e,t,n,r){super(e,t,n,r)}};Po.prototype.ValueTypeName="color";var Do=class extends yn{constructor(e,t,n,r){super(e,t,n,r)}};Do.prototype.ValueTypeName="number";var Lo=class extends Fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)Qn.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ss=class extends yn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}};Ss.prototype.ValueTypeName="quaternion";Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends yn{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=cs;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends yn{constructor(e,t,n,r){super(e,t,n,r)}};Uo.prototype.ValueTypeName="vector";var ho={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},No=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Bh=new No,Pr=class{constructor(e){this.manager=e!==void 0?e:Bh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Pr.DEFAULT_MATERIAL_NAME="__DEFAULT";var gr=new WeakMap,Fo=class extends Pr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ho.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=gr.get(o);u===void 0&&(u=[],gr.set(o,u)),u.push({onLoad:t,onError:r})}return o}let a=Mr("img");function c(){h(),t&&t(this);let u=gr.get(this)||[];for(let p=0;p<u.length;p++){let f=u[p];f.onLoad&&f.onLoad(this)}gr.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),ho.remove(`image:${e}`);let p=gr.get(this)||[];for(let f=0;f<p.length;f++){let g=p[f];g.onError&&g.onError(u)}gr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ho.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var ws=class extends Pr{constructor(e){super(e)}load(e,t,n,r){let s=new rn,o=new Fo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Dr=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},zi=class extends Dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xl=new At,Xc=new N,qc=new N,zo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xc),qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qc),t.updateMatrixWorld(),xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Yc=new At,os=new N,_l=new N,Sl=class extends zo{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),_l.copy(n.position),_l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_l),n.updateMatrixWorld(),r.makeTranslation(-os.x,-os.y,-os.z),Yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc,n.coordinateSystem,n.reversedDepth)}},Oi=class extends Dr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Sl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ts=class extends ms{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wl=class extends zo{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bi=class extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new wl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Oo=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Yl="\\[\\]\\.:\\/",Rd=new RegExp("["+Yl+"]","g"),Zl="[^"+Yl+"]",Id="[^"+Yl.replace("\\.","")+"]",Pd=/((?:WC+[\/:])*)/.source.replace("WC",Zl),Dd=/(WCOD+)?/.source.replace("WCOD",Id),Ld=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),Ud=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),Nd=new RegExp("^"+Pd+Dd+Ld+Ud+"$"),Fd=["material","materials","bones","map"],Tl=class{constructor(e,t,n){let r=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rd,"")}static parseTrackName(e){let t=Nd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Fd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Tl;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F0=new Float32Array(1);var Zc=new At,ki=class{constructor(e,t,n=0,r=1/0){this.ray=new wr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zc),this}intersectObject(e,t=!0,n=[]){return El(e,this,n,t),n.sort(Jc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)El(e[r],this,n,t);return n.sort(Jc),n}};function Jc(i,e){return i.distance-e.distance}function El(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)El(s[o],e,t,!0)}}function Jl(i,e,t,n){let r=zd(n);switch(t){case Ol:return i*e;case jo:return i*e/r.components*r.byteLength;case Qo:return i*e/r.components*r.byteLength;case kl:return i*e*2/r.components*r.byteLength;case ea:return i*e*2/r.components*r.byteLength;case Bl:return i*e*3/r.components*r.byteLength;case bn:return i*e*4/r.components*r.byteLength;case ta:return i*e*4/r.components*r.byteLength;case Cs:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Is:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:case sa:return Math.max(i,16)*Math.max(e,8)/4;case na:case ra:return Math.max(i,8)*Math.max(e,8)/2;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Sa:case wa:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ea:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ca:case Ra:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zd(i){switch(i){case Pn:case Ul:return{byteLength:1,components:1};case Nr:case Nl:case Fr:return{byteLength:2,components:1};case $o:case Ko:return{byteLength:2,components:4};case yi:case Jo:case Dn:return{byteLength:4,components:1};case Fl:case zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Gd(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<u.length;f++){let g=u[p],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,u[p]=x)}u.length=p+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Hd=`#ifdef USE_ALPHAHASH
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
}`,at={alphahash_fragment:Hd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:qd,alphatest_fragment:Yd,alphatest_pars_fragment:Zd,aomap_fragment:Jd,aomap_pars_fragment:$d,batching_pars_vertex:Kd,batching_vertex:jd,begin_vertex:Qd,beginnormal_vertex:ef,bsdfs:tf,iridescence_fragment:nf,bumpmap_pars_fragment:rf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:of,clipping_planes_pars_vertex:af,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:hf,color_pars_vertex:uf,color_vertex:df,common:ff,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:xf,emissivemap_fragment:_f,emissivemap_pars_fragment:yf,colorspace_fragment:vf,colorspace_pars_fragment:Mf,envmap_fragment:bf,envmap_common_pars_fragment:Sf,envmap_pars_fragment:wf,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Ff,envmap_vertex:Ef,fog_vertex:Af,fog_pars_vertex:Cf,fog_fragment:Rf,fog_pars_fragment:If,gradientmap_pars_fragment:Pf,lightmap_pars_fragment:Df,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Uf,lights_pars_begin:Nf,lights_toon_fragment:zf,lights_toon_pars_fragment:Of,lights_phong_fragment:Bf,lights_phong_pars_fragment:kf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Hf,lights_fragment_maps:Wf,lights_fragment_end:Xf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:Yf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:Jf,map_fragment:$f,map_pars_fragment:Kf,map_particle_fragment:jf,map_particle_pars_fragment:Qf,metalnessmap_fragment:ep,metalnessmap_pars_fragment:tp,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:rp,morphtarget_pars_vertex:sp,morphtarget_vertex:op,normal_fragment_begin:ap,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:hp,normal_vertex:up,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:xp,packing:_p,premultiplied_alpha_fragment:yp,project_vertex:vp,dithering_fragment:Mp,dithering_pars_fragment:bp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ep,shadowmap_vertex:Ap,shadowmask_pars_fragment:Cp,skinbase_vertex:Rp,skinning_pars_vertex:Ip,skinning_vertex:Pp,skinnormal_vertex:Dp,specularmap_fragment:Lp,specularmap_pars_fragment:Up,tonemapping_fragment:Np,tonemapping_pars_fragment:Fp,transmission_fragment:zp,transmission_pars_fragment:Op,uv_pars_fragment:Bp,uv_pars_vertex:kp,uv_vertex:Vp,worldpos_vertex:Gp,background_vert:Hp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:qp,cube_vert:Yp,cube_frag:Zp,depth_vert:Jp,depth_frag:$p,distanceRGBA_vert:Kp,distanceRGBA_frag:jp,equirect_vert:Qp,equirect_frag:em,linedashed_vert:tm,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:rm,meshlambert_vert:sm,meshlambert_frag:om,meshmatcap_vert:am,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:hm,meshphong_vert:um,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:xm,points_frag:_m,shadow_vert:ym,shadow_frag:vm,sprite_vert:Mm,sprite_frag:bm},Se={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},kn={basic:{uniforms:sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:sn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:sn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:sn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:sn([Se.points,Se.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:sn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:sn([Se.common,Se.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:sn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:sn([Se.sprite,Se.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:sn([Se.common,Se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:sn([Se.lights,Se.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};kn.physical={uniforms:sn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Pa={r:0,b:0,g:0},Wi=new Rn,Sm=new At;function wm(i,e,t,n,r,s,o){let a=new Ze(0),c=s===!0?0:1,l,h,u=null,p=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function x(v){let _=!1,E=g(v);E===null?d(a,c):E&&E.isColor&&(d(E,1),_=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,_){let E=g(_);E&&(E.isCubeTexture||E.mapping===Es)?(h===void 0&&(h=new lt(new $t(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Hi(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Wi.copy(_.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(Wi)),h.material.toneMapped=_t.getTransfer(E.colorSpace)!==wt,(u!==E||p!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,p=E.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new lt(new _n(2,2),new fn({name:"BackgroundMaterial",uniforms:Hi(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=_t.getTransfer(E.colorSpace)!==wt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||p!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,p=E.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,_){v.getRGB(Pa,ql(i)),n.buffers.color.setClear(Pa.r,Pa.g,Pa.b,_,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(a,c)},render:x,addToRenderList:m,dispose:S}}function Tm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null),s=r,o=!1;function a(T,U,O,Z,P){let k=!1,X=u(Z,O,U);s!==X&&(s=X,l(s.object)),k=f(T,Z,O,P),k&&g(T,Z,O,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(T,U,O,Z),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,U,O){let Z=O.wireframe===!0,P=n[T.id];P===void 0&&(P={},n[T.id]=P);let k=P[U.id];k===void 0&&(k={},P[U.id]=k);let X=k[Z];return X===void 0&&(X=p(c()),k[Z]=X),X}function p(T){let U=[],O=[],Z=[];for(let P=0;P<t;P++)U[P]=0,O[P]=0,Z[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:Z,object:T,attributes:{},index:null}}function f(T,U,O,Z){let P=s.attributes,k=U.attributes,X=0,ne=O.getAttributes();for(let $ in ne)if(ne[$].location>=0){let ae=P[$],Me=k[$];if(Me===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor)),ae===void 0||ae.attribute!==Me||Me&&ae.data!==Me.data)return!0;X++}return s.attributesNum!==X||s.index!==Z}function g(T,U,O,Z){let P={},k=U.attributes,X=0,ne=O.getAttributes();for(let $ in ne)if(ne[$].location>=0){let ae=k[$];ae===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(ae=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(ae=T.instanceColor));let Me={};Me.attribute=ae,ae&&ae.data&&(Me.data=ae.data),P[$]=Me,X++}s.attributes=P,s.attributesNum=X,s.index=Z}function x(){let T=s.newAttributes;for(let U=0,O=T.length;U<O;U++)T[U]=0}function m(T){d(T,0)}function d(T,U){let O=s.newAttributes,Z=s.enabledAttributes,P=s.attributeDivisors;O[T]=1,Z[T]===0&&(i.enableVertexAttribArray(T),Z[T]=1),P[T]!==U&&(i.vertexAttribDivisor(T,U),P[T]=U)}function S(){let T=s.newAttributes,U=s.enabledAttributes;for(let O=0,Z=U.length;O<Z;O++)U[O]!==T[O]&&(i.disableVertexAttribArray(O),U[O]=0)}function v(T,U,O,Z,P,k,X){X===!0?i.vertexAttribIPointer(T,U,O,P,k):i.vertexAttribPointer(T,U,O,Z,P,k)}function _(T,U,O,Z){x();let P=Z.attributes,k=O.getAttributes(),X=U.defaultAttributeValues;for(let ne in k){let $=k[ne];if($.location>=0){let re=P[ne];if(re===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(re=T.instanceColor)),re!==void 0){let ae=re.normalized,Me=re.itemSize,Oe=e.get(re);if(Oe===void 0)continue;let ot=Oe.buffer,ct=Oe.type,ht=Oe.bytesPerElement,ee=ct===i.INT||ct===i.UNSIGNED_INT||re.gpuType===Jo;if(re.isInterleavedBufferAttribute){let Q=re.data,Re=Q.stride,Je=re.offset;if(Q.isInstancedInterleavedBuffer){for(let ze=0;ze<$.locationSize;ze++)d($.location+ze,Q.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ze=0;ze<$.locationSize;ze++)m($.location+ze);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let ze=0;ze<$.locationSize;ze++)v($.location+ze,Me/$.locationSize,ct,ae,Re*ht,(Je+Me/$.locationSize*ze)*ht,ee)}else{if(re.isInstancedBufferAttribute){for(let Q=0;Q<$.locationSize;Q++)d($.location+Q,re.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Q=0;Q<$.locationSize;Q++)m($.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Q=0;Q<$.locationSize;Q++)v($.location+Q,Me/$.locationSize,ct,ae,Me*ht,Me/$.locationSize*Q*ht,ee)}}else if(X!==void 0){let ae=X[ne];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv($.location,ae);break;case 3:i.vertexAttrib3fv($.location,ae);break;case 4:i.vertexAttrib4fv($.location,ae);break;default:i.vertexAttrib1fv($.location,ae)}}}}S()}function E(){C();for(let T in n){let U=n[T];for(let O in U){let Z=U[O];for(let P in Z)h(Z[P].object),delete Z[P];delete U[O]}delete n[T]}}function b(T){if(n[T.id]===void 0)return;let U=n[T.id];for(let O in U){let Z=U[O];for(let P in Z)h(Z[P].object),delete Z[P];delete U[O]}delete n[T.id]}function R(T){for(let U in n){let O=n[U];if(O[T.id]===void 0)continue;let Z=O[T.id];for(let P in Z)h(Z[P].object),delete Z[P];delete O[T.id]}}function C(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Em(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,p){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*p[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Am(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==bn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let C=R===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Dn&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:E,maxSamples:b}}function Cm(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Nn,a=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let f=u.length!==0||p||n!==0||r;return r=p,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let S=s?0:n,v=S*4,_=d.clippingState||null;c.value=_,_=h(g,p,v,f);for(let E=0;E!==v;++E)_[E]=t[E];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=f+x*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Rm(i){let e=new WeakMap;function t(o,a){return a===qo?o.mapping=Vi:a===Yo&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qo||a===Yo)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Mo(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var kr=4,kh=[.125,.215,.35,.446,.526,.582],Yi=20,$l=new Ts,Vh=new Ze,Kl=null,jl=0,Ql=0,ec=!1,qi=(1+Math.sqrt(5))/2,Br=1/qi,Gh=[new N(-qi,Br,0),new N(qi,Br,0),new N(-Br,0,qi),new N(Br,0,qi),new N(0,qi,-Br),new N(0,qi,Br),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Im=new N,Ua=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=Im}=s;Kl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kl,jl,Ql),this._renderer.xr.enabled=ec,e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Fr,format:bn,colorSpace:Ii,depthBuffer:!1},r=Hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pm(s)),this._blurMaterial=Dm(s,e,t)}return r}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,n,r,s){let c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,f=u.toneMapping;u.getClearColor(Vh),u.toneMapping=ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let x=new dn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new lt(new $t,x),d=!1,S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,d=!0):(x.color.copy(Vh),d=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[v],s.y,s.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[v],s.z)):(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[v]));let E=this._cubeSize;Da(r,_*E,v>2?E:0,E,E),u.setRenderTarget(r),d&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=p,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Vi||e.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Da(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,$l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Gh[(r-s-1)%Gh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new lt(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Yi;m>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);let d=[],S=0;for(let R=0;R<Yi;++R){let C=R/x,y=Math.exp(-C*C/2);d.push(y),R===0?S+=y:R<m&&(S+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/S;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;let _=this._sizeLods[r],E=3*_*(r>v-kr?r-v+kr:0),b=4*(this._cubeSize-_);Da(t,E,b,3*_,2*_),c.setRenderTarget(t),c.render(u,$l)}};function Pm(i){let e=[],t=[],n=[],r=i,s=i-kr+1+kh.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-kr?c=kh[o-i+kr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,d=1,S=new Float32Array(x*g*f),v=new Float32Array(m*g*f),_=new Float32Array(d*g*f);for(let b=0;b<f;b++){let R=b%3*2/3-1,C=b>2?0:-1,y=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];S.set(y,x*g*b),v.set(p,m*g*b);let T=[b,b,b,b,b,b];_.set(T,d*g*b)}let E=new bt;E.setAttribute("position",new Ht(S,x)),E.setAttribute("uv",new Ht(v,m)),E.setAttribute("faceIndex",new Ht(_,d)),e.push(E),r>kr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hh(i,e,t){let n=new Fn(i,e,t);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Da(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Dm(i,e,t){let n=new Float32Array(Yi),r=new N(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Wh(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Xh(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}function Lm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===qo||c===Yo,h=c===Vi||c===Gi;if(l||h){let u=e.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Ua(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new Ua(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Um(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&br("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Nm(i,e,t,n){let r={},s=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id];let f=s.get(p);f&&(e.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(u){let p=u.attributes;for(let f in p)e.update(p[f],i.ARRAY_BUFFER)}function l(u){let p=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let S=f.array;x=f.version;for(let v=0,_=S.length;v<_;v+=3){let E=S[v+0],b=S[v+1],R=S[v+2];p.push(E,b,b,R,R,E)}}else if(g!==void 0){let S=g.array;x=g.version;for(let v=0,_=S.length/3-1;v<_;v+=3){let E=v+0,b=v+1,R=v+2;p.push(E,b,b,R,R,E)}}else return;let m=new(Xl(p)?ps:fs)(p,1);m.version=x;let d=s.get(u);d&&e.remove(d),s.set(u,m)}function h(u){let p=s.get(u);if(p){let f=u.index;f!==null&&p.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Fm(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,f){i.drawElements(n,f,s,p*o),t.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,p*o,g),t.update(f,n,g))}function h(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,g);let m=0;for(let d=0;d<g;d++)m+=f[d];t.update(m,n,1)}function u(p,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)l(p[d]/o,f[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,x,0,g);let d=0;for(let S=0;S<g;S++)d+=f[S]*x[S];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Om(i,e,t){let n=new WeakMap,r=new yt;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==u){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};p!==void 0&&p.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*E*4*u),R=new ds(b,_,E,u);R.type=Dn,R.needsUpdate=!0;let C=v*4;for(let T=0;T<u;T++){let U=m[T],O=d[T],Z=S[T],P=_*E*4*T;for(let k=0;k<U.count;k++){let X=k*C;f===!0&&(r.fromBufferAttribute(U,k),b[P+X+0]=r.x,b[P+X+1]=r.y,b[P+X+2]=r.z,b[P+X+3]=0),g===!0&&(r.fromBufferAttribute(O,k),b[P+X+4]=r.x,b[P+X+5]=r.y,b[P+X+6]=r.z,b[P+X+7]=0),x===!0&&(r.fromBufferAttribute(Z,k),b[P+X+8]=r.x,b[P+X+9]=r.y,b[P+X+10]=r.z,b[P+X+11]=Z.itemSize===4?r.w:1)}}p={count:u,texture:R,size:new Ge(_,E)},n.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Bm(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var hu=new rn,qh=new ys(1,1),uu=new ds,du=new yo,fu=new gs,Yh=[],Zh=[],Jh=new Float32Array(16),$h=new Float32Array(9),Kh=new Float32Array(4);function Hr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Yh[r];if(s===void 0&&(s=new Float32Array(r),Yh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Na(i,e){let t=Zh[e];t===void 0&&(t=new Int32Array(e),Zh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Wm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Kh.set(n),i.uniformMatrix2fv(this.addr,!1,Kh),Xt(t,n)}}function Xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),Xt(t,n)}}function qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Jh.set(n),i.uniformMatrix4fv(this.addr,!1,Jh),Xt(t,n)}}function Ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function tg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(qh.compareFunction=Gl,s=qh):s=hu,t.setTexture2D(e||s,r)}function ng(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||du,r)}function ig(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fu,r)}function rg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||uu,r)}function sg(i){switch(i){case 5126:return km;case 35664:return Vm;case 35665:return Gm;case 35666:return Hm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return $m;case 5125:return Km;case 36294:return jm;case 36295:return Qm;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return rg}}function og(i,e){i.uniform1fv(this.addr,e)}function ag(i,e){let t=Hr(e,this.size,2);i.uniform2fv(this.addr,t)}function lg(i,e){let t=Hr(e,this.size,3);i.uniform3fv(this.addr,t)}function cg(i,e){let t=Hr(e,this.size,4);i.uniform4fv(this.addr,t)}function hg(i,e){let t=Hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ug(i,e){let t=Hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dg(i,e){let t=Hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fg(i,e){i.uniform1iv(this.addr,e)}function pg(i,e){i.uniform2iv(this.addr,e)}function mg(i,e){i.uniform3iv(this.addr,e)}function gg(i,e){i.uniform4iv(this.addr,e)}function xg(i,e){i.uniform1uiv(this.addr,e)}function _g(i,e){i.uniform2uiv(this.addr,e)}function yg(i,e){i.uniform3uiv(this.addr,e)}function vg(i,e){i.uniform4uiv(this.addr,e)}function Mg(i,e,t){let n=this.cache,r=e.length,s=Na(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||hu,s[o])}function bg(i,e,t){let n=this.cache,r=e.length,s=Na(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||du,s[o])}function Sg(i,e,t){let n=this.cache,r=e.length,s=Na(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||fu,s[o])}function wg(i,e,t){let n=this.cache,r=e.length,s=Na(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||uu,s[o])}function Tg(i){switch(i){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return xg;case 36294:return _g;case 36295:return yg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return wg}}var nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sg(t.type)}},ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tg(t.type)}},rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},tc=/(\w+)(\])?(\[|\.)?/g;function jh(i,e){i.seq.push(e),i.map[e.id]=e}function Eg(i,e,t){let n=i.name,r=n.length;for(tc.lastIndex=0;;){let s=tc.exec(n),o=tc.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){jh(t,l===void 0?new nc(a,i,e):new ic(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new rc(a),jh(t,u)),t=u}}}var Vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Eg(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Qh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ag=37297,Cg=0;function Rg(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var eu=new st;function Ig(i){_t._getMatrix(eu,_t.workingColorSpace,i);let e=`mat3( ${eu.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case hs:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Rg(i.getShaderSource(e),a)}else return s}function Pg(i,e){let t=Ig(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dg(i,e){let t;switch(e){case _h:t="Linear";break;case yh:t="Reinhard";break;case vh:t="Cineon";break;case Ur:t="ACESFilmic";break;case bh:t="AgX";break;case Sh:t="Neutral";break;case Mh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var La=new N;function Lg(){_t.getLuminanceCoefficients(La);let i=La.x.toFixed(4),e=La.y.toFixed(4),t=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function Ng(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ls(i){return i!==""}function nu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(zg,Bg)}var Og=new Map;function Bg(i,e){let t=at[e];if(t===void 0){let n=Og.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sc(t)}var kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(i){return i.replace(kg,Vg)}function Vg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function su(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Gg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Gi:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function Xg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dl:e="ENVMAP_BLENDING_MULTIPLY";break;case gh:e="ENVMAP_BLENDING_MIX";break;case xh:e="ENVMAP_BLENDING_ADD";break}return e}function qg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Yg(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Gg(t),l=Hg(t),h=Wg(t),u=Xg(t),p=qg(t),f=Ug(t),g=Ng(s),x=r.createProgram(),m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),d.length>0&&(d+=`
`)):(m=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),d=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?at.tonemapping_pars_fragment:"",t.toneMapping!==ii?Dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Pg("linearToOutputTexel",t.outputColorSpace),Lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),o=sc(o),o=nu(o,t),o=iu(o,t),a=sc(a),a=nu(a,t),a=iu(a,t),o=ru(o),a=ru(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=S+m+o,_=S+d+a,E=Qh(r,r.VERTEX_SHADER,v),b=Qh(r,r.FRAGMENT_SHADER,_);r.attachShader(x,E),r.attachShader(x,b),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(U){if(i.debug.checkShaderErrors){let O=r.getProgramInfoLog(x)||"",Z=r.getShaderInfoLog(E)||"",P=r.getShaderInfoLog(b)||"",k=O.trim(),X=Z.trim(),ne=P.trim(),$=!0,re=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,E,b);else{let ae=tu(r,E,"vertex"),Me=tu(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+ae+`
`+Me)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(X===""||ne==="")&&(re=!1);re&&(U.diagnostics={runnable:$,programLog:k,vertexShader:{log:X,prefix:m},fragmentShader:{log:ne,prefix:d}})}r.deleteShader(E),r.deleteShader(b),C=new Vr(r,x),y=Fg(r,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(x,Ag)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}var Zg=0,oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ac(e),t.set(e,n)),n}},ac=class{constructor(e){this.id=Zg++,this.code=e,this.usedTimes=0}};function Jg(i,e,t,n,r,s,o){let a=new Tr,c=new oc,l=new Set,h=[],u=r.logarithmicDepthBuffer,p=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,T,U,O,Z){let P=O.fog,k=Z.geometry,X=y.isMeshStandardMaterial?O.environment:null,ne=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),$=ne&&ne.mapping===Es?ne.image.height:null,re=g[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Me=ae!==void 0?ae.length:0,Oe=0;k.morphAttributes.position!==void 0&&(Oe=1),k.morphAttributes.normal!==void 0&&(Oe=2),k.morphAttributes.color!==void 0&&(Oe=3);let ot,ct,ht,ee;if(re){let rt=kn[re];ot=rt.vertexShader,ct=rt.fragmentShader}else ot=y.vertexShader,ct=y.fragmentShader,c.update(y),ht=c.getVertexShaderID(y),ee=c.getFragmentShaderID(y);let Q=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Je=Z.isInstancedMesh===!0,ze=Z.isBatchedMesh===!0,$e=!!y.map,Et=!!y.matcap,L=!!ne,pt=!!y.aoMap,He=!!y.lightMap,qe=!!y.bumpMap,we=!!y.normalMap,nt=!!y.displacementMap,Ne=!!y.emissiveMap,We=!!y.metalnessMap,Ct=!!y.roughnessMap,ut=y.anisotropy>0,I=y.clearcoat>0,M=y.dispersion>0,q=y.iridescence>0,te=y.sheen>0,oe=y.transmission>0,K=ut&&!!y.anisotropyMap,De=I&&!!y.clearcoatMap,pe=I&&!!y.clearcoatNormalMap,Ae=I&&!!y.clearcoatRoughnessMap,Le=q&&!!y.iridescenceMap,le=q&&!!y.iridescenceThicknessMap,me=te&&!!y.sheenColorMap,Ve=te&&!!y.sheenRoughnessMap,Fe=!!y.specularMap,be=!!y.specularColorMap,Ye=!!y.specularIntensityMap,F=oe&&!!y.transmissionMap,he=oe&&!!y.thicknessMap,de=!!y.gradientMap,Ie=!!y.alphaMap,ce=y.alphaTest>0,ie=!!y.alphaHash,Te=!!y.extensions,Xe=ii;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Xe=i.toneMapping);let it={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:ct,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ze,batchingColor:ze&&Z._colorsTexture!==null,instancing:Je,instancingColor:Je&&Z.instanceColor!==null,instancingMorph:Je&&Z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ii,alphaToCoverage:!!y.alphaToCoverage,map:$e,matcap:Et,envMap:L,envMapMode:L&&ne.mapping,envMapCubeUVHeight:$,aoMap:pt,lightMap:He,bumpMap:qe,normalMap:we,displacementMap:p&&nt,emissiveMap:Ne,normalMapObjectSpace:we&&y.normalMapType===Ah,normalMapTangentSpace:we&&y.normalMapType===Vl,metalnessMap:We,roughnessMap:Ct,anisotropy:ut,anisotropyMap:K,clearcoat:I,clearcoatMap:De,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ae,dispersion:M,iridescence:q,iridescenceMap:Le,iridescenceThicknessMap:le,sheen:te,sheenColorMap:me,sheenRoughnessMap:Ve,specularMap:Fe,specularColorMap:be,specularIntensityMap:Ye,transmission:oe,transmissionMap:F,thicknessMap:he,gradientMap:de,opaque:y.transparent===!1&&y.blending===Ci&&y.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ce,alphaHash:ie,combine:y.combine,mapUv:$e&&x(y.map.channel),aoMapUv:pt&&x(y.aoMap.channel),lightMapUv:He&&x(y.lightMap.channel),bumpMapUv:qe&&x(y.bumpMap.channel),normalMapUv:we&&x(y.normalMap.channel),displacementMapUv:nt&&x(y.displacementMap.channel),emissiveMapUv:Ne&&x(y.emissiveMap.channel),metalnessMapUv:We&&x(y.metalnessMap.channel),roughnessMapUv:Ct&&x(y.roughnessMap.channel),anisotropyMapUv:K&&x(y.anisotropyMap.channel),clearcoatMapUv:De&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&x(y.sheenRoughnessMap.channel),specularMapUv:Fe&&x(y.specularMap.channel),specularColorMapUv:be&&x(y.specularColorMap.channel),specularIntensityMapUv:Ye&&x(y.specularIntensityMap.channel),transmissionMapUv:F&&x(y.transmissionMap.channel),thicknessMapUv:he&&x(y.thicknessMap.channel),alphaMapUv:Ie&&x(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(we||ut),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!k.attributes.uv&&($e||Ie),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Re,skinning:Z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:$e&&y.map.isVideoTexture===!0&&_t.getTransfer(y.map.colorSpace)===wt,decodeVideoTextureEmissive:Ne&&y.emissiveMap.isVideoTexture===!0&&_t.getTransfer(y.emissiveMap.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Lt,flipSided:y.side===Kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Te&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&y.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function d(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let U in y.defines)T.push(U),T.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(S(T,y),v(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function S(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){let T=g[y.type],U;if(T){let O=kn[T];U=Ia.clone(O.uniforms)}else U=y.uniforms;return U}function E(y,T){let U;for(let O=0,Z=h.length;O<Z;O++){let P=h[O];if(P.cacheKey===T){U=P,++U.usedTimes;break}}return U===void 0&&(U=new Yg(i,T,y,s),h.push(U)),U}function b(y){if(--y.usedTimes===0){let T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),y.destroy()}}function R(y){c.remove(y)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:E,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:C}}function $g(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ou(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function au(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,p,f,g,x,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function a(u,p,f,g,x,m){let d=o(u,p,f,g,x,m);f.transmission>0?n.push(d):f.transparent===!0?r.push(d):t.push(d)}function c(u,p,f,g,x,m){let d=o(u,p,f,g,x,m);f.transmission>0?n.unshift(d):f.transparent===!0?r.unshift(d):t.unshift(d)}function l(u,p){t.length>1&&t.sort(u||Kg),n.length>1&&n.sort(p||ou),r.length>1&&r.sort(p||ou)}function h(){for(let u=e,p=i.length;u<p;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function jg(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new au,i.set(n,[o])):r>=s.length?(o=new au,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ze};break;case"SpotLight":t={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function e0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var t0=0;function n0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i0(i){let e=new Qg,t=e0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let r=new N,s=new At,o=new At;function a(l){let h=0,u=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,x=0,m=0,d=0,S=0,v=0,_=0,E=0,b=0,R=0;l.sort(n0);for(let y=0,T=l.length;y<T;y++){let U=l[y],O=U.color,Z=U.intensity,P=U.distance,k=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=O.r*Z,u+=O.g*Z,p+=O.b*Z;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],Z);R++}else if(U.isDirectionalLight){let X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ne=U.shadow,$=t.get(U);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=U.shadow.matrix,S++}n.directional[f]=X,f++}else if(U.isSpotLight){let X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(O).multiplyScalar(Z),X.distance=P,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[x]=X;let ne=U.shadow;if(U.map&&(n.spotLightMap[E]=U.map,E++,ne.updateMatrices(U),U.castShadow&&b++),n.spotLightMatrix[x]=ne.matrix,U.castShadow){let $=t.get(U);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=k,_++}x++}else if(U.isRectAreaLight){let X=e.get(U);X.color.copy(O).multiplyScalar(Z),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=X,m++}else if(U.isPointLight){let X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){let ne=U.shadow,$=t.get(U);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,$.shadowCameraNear=ne.camera.near,$.shadowCameraFar=ne.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=U.shadow.matrix,v++}n.point[g]=X,g++}else if(U.isHemisphereLight){let X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(Z),X.groundColor.copy(U.groundColor).multiplyScalar(Z),n.hemi[d]=X,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==S||C.numPointShadows!==v||C.numSpotShadows!==_||C.numSpotMaps!==E||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,C.directionalLength=f,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=S,C.numPointShadows=v,C.numSpotShadows=_,C.numSpotMaps=E,C.numLightProbes=R,n.version=t0++)}function c(l,h){let u=0,p=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){let v=l[d];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),u++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function lu(i){let e=new i0(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function r0(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new lu(i),e.set(r,[a])):s>=o.length?(a=new lu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var s0=`void main() {
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
}`;function a0(i,e,t){let n=new Ir,r=new Ge,s=new Ge,o=new yt,a=new Eo({depthPacking:Eh}),c=new Ao,l={},h=t.maxTextureSize,u={[Kn]:Kt,[Kt]:Kn,[Lt]:Lt},p=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:s0,fragmentShader:o0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new bt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new lt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let d=this.type;this.render=function(b,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let y=i.getRenderTarget(),T=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ni),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Z=d!==Bn&&this.type===Bn,P=d===Bn&&this.type!==Bn;for(let k=0,X=b.length;k<X;k++){let ne=b[k],$=ne.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let re=$.getFrameExtents();if(r.multiply(re),s.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/re.x),r.x=s.x*re.x,$.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/re.y),r.y=s.y*re.y,$.mapSize.y=s.y)),$.map===null||Z===!0||P===!0){let Me=this.type!==Bn?{minFilter:un,magFilter:un}:{};$.map!==null&&$.map.dispose(),$.map=new Fn(r.x,r.y,Me),$.map.texture.name=ne.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let ae=$.getViewportCount();for(let Me=0;Me<ae;Me++){let Oe=$.getViewport(Me);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),O.viewport(o),$.updateMatrices(ne,Me),n=$.getFrustum(),_(R,C,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===Bn&&S($,C),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,T,U)};function S(b,R){let C=e.update(x);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fn(r.x,r.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,C,p,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,C,f,x,null)}function v(b,R,C,y){let T=null,U=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)T=U;else if(T=C.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let O=T.uuid,Z=R.uuid,P=l[O];P===void 0&&(P={},l[O]=P);let k=P[Z];k===void 0&&(k=T.clone(),P[Z]=k,R.addEventListener("dispose",E)),T=k}if(T.visible=R.visible,T.wireframe=R.wireframe,y===Bn?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:u[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let O=i.properties.get(T);O.light=C}return T}function _(b,R,C,y,T){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Bn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);let Z=e.update(b),P=b.material;if(Array.isArray(P)){let k=Z.groups;for(let X=0,ne=k.length;X<ne;X++){let $=k[X],re=P[$.materialIndex];if(re&&re.visible){let ae=v(b,re,y,T);b.onBeforeShadow(i,b,R,C,Z,ae,$),i.renderBufferDirect(C,null,Z,ae,b,$),b.onAfterShadow(i,b,R,C,Z,ae,$)}}}else if(P.visible){let k=v(b,P,y,T);b.onBeforeShadow(i,b,R,C,Z,k,null),i.renderBufferDirect(C,null,Z,k,b,null),b.onAfterShadow(i,b,R,C,Z,k,null)}}let O=b.children;for(let Z=0,P=O.length;Z<P;Z++)_(O[Z],R,C,y,T)}function E(b){b.target.removeEventListener("dispose",E);for(let C in l){let y=l[C],T=b.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}var l0={[Bo]:ko,[Vo]:Wo,[Go]:Xo,[Ri]:Ho,[ko]:Bo,[Wo]:Vo,[Xo]:Go,[Ho]:Ri};function c0(i,e){function t(){let F=!1,he=new yt,de=null,Ie=new yt(0,0,0,0);return{setMask:function(ce){de!==ce&&!F&&(i.colorMask(ce,ce,ce,ce),de=ce)},setLocked:function(ce){F=ce},setClear:function(ce,ie,Te,Xe,it){it===!0&&(ce*=Xe,ie*=Xe,Te*=Xe),he.set(ce,ie,Te,Xe),Ie.equals(he)===!1&&(i.clearColor(ce,ie,Te,Xe),Ie.copy(he))},reset:function(){F=!1,de=null,Ie.set(-1,0,0,0)}}}function n(){let F=!1,he=!1,de=null,Ie=null,ce=null;return{setReversed:function(ie){if(he!==ie){let Te=e.get("EXT_clip_control");ie?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),he=ie;let Xe=ce;ce=null,this.setClear(Xe)}},getReversed:function(){return he},setTest:function(ie){ie?Q(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(ie){de!==ie&&!F&&(i.depthMask(ie),de=ie)},setFunc:function(ie){if(he&&(ie=l0[ie]),Ie!==ie){switch(ie){case Bo:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case Go:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=ie}},setLocked:function(ie){F=ie},setClear:function(ie){ce!==ie&&(he&&(ie=1-ie),i.clearDepth(ie),ce=ie)},reset:function(){F=!1,de=null,Ie=null,ce=null,he=!1}}}function r(){let F=!1,he=null,de=null,Ie=null,ce=null,ie=null,Te=null,Xe=null,it=null;return{setTest:function(rt){F||(rt?Q(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(rt){he!==rt&&!F&&(i.stencilMask(rt),he=rt)},setFunc:function(rt,Ot,Bt){(de!==rt||Ie!==Ot||ce!==Bt)&&(i.stencilFunc(rt,Ot,Bt),de=rt,Ie=Ot,ce=Bt)},setOp:function(rt,Ot,Bt){(ie!==rt||Te!==Ot||Xe!==Bt)&&(i.stencilOp(rt,Ot,Bt),ie=rt,Te=Ot,Xe=Bt)},setLocked:function(rt){F=rt},setClear:function(rt){it!==rt&&(i.clearStencil(rt),it=rt)},reset:function(){F=!1,he=null,de=null,Ie=null,ce=null,ie=null,Te=null,Xe=null,it=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,h={},u={},p=new WeakMap,f=[],g=null,x=!1,m=null,d=null,S=null,v=null,_=null,E=null,b=null,R=new Ze(0,0,0),C=0,y=!1,T=null,U=null,O=null,Z=null,P=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ne=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ne>=1):$.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ne>=2);let re=null,ae={},Me=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),ot=new yt().fromArray(Me),ct=new yt().fromArray(Oe);function ht(F,he,de,Ie){let ce=new Uint8Array(4),ie=i.createTexture();i.bindTexture(F,ie),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<de;Te++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(he+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return ie}let ee={};ee[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(Ri),qe(!1),we(Al),Q(i.CULL_FACE),pt(ni);function Q(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Re(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Je(F,he){return u[F]!==he?(i.bindFramebuffer(F,he),u[F]=he,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ze(F,he){let de=f,Ie=!1;if(F){de=p.get(he),de===void 0&&(de=[],p.set(he,de));let ce=F.textures;if(de.length!==ce.length||de[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Te=ce.length;ie<Te;ie++)de[ie]=i.COLOR_ATTACHMENT0+ie;de.length=ce.length,Ie=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(de)}function $e(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let Et={[fi]:i.FUNC_ADD,[Qc]:i.FUNC_SUBTRACT,[eh]:i.FUNC_REVERSE_SUBTRACT};Et[th]=i.MIN,Et[nh]=i.MAX;let L={[ih]:i.ZERO,[rh]:i.ONE,[sh]:i.SRC_COLOR,[uo]:i.SRC_ALPHA,[uh]:i.SRC_ALPHA_SATURATE,[ch]:i.DST_COLOR,[ah]:i.DST_ALPHA,[oh]:i.ONE_MINUS_SRC_COLOR,[fo]:i.ONE_MINUS_SRC_ALPHA,[hh]:i.ONE_MINUS_DST_COLOR,[lh]:i.ONE_MINUS_DST_ALPHA,[dh]:i.CONSTANT_COLOR,[fh]:i.ONE_MINUS_CONSTANT_COLOR,[ph]:i.CONSTANT_ALPHA,[mh]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(F,he,de,Ie,ce,ie,Te,Xe,it,rt){if(F===ni){x===!0&&(Re(i.BLEND),x=!1);return}if(x===!1&&(Q(i.BLEND),x=!0),F!==jc){if(F!==m||rt!==y){if((d!==fi||_!==fi)&&(i.blendEquation(i.FUNC_ADD),d=fi,_=fi),rt)switch(F){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFunc(i.ONE,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Il:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,v=null,E=null,b=null,R.set(0,0,0),C=0,m=F,y=rt}return}ce=ce||he,ie=ie||de,Te=Te||Ie,(he!==d||ce!==_)&&(i.blendEquationSeparate(Et[he],Et[ce]),d=he,_=ce),(de!==S||Ie!==v||ie!==E||Te!==b)&&(i.blendFuncSeparate(L[de],L[Ie],L[ie],L[Te]),S=de,v=Ie,E=ie,b=Te),(Xe.equals(R)===!1||it!==C)&&(i.blendColor(Xe.r,Xe.g,Xe.b,it),R.copy(Xe),C=it),m=F,y=!1}function He(F,he){F.side===Lt?Re(i.CULL_FACE):Q(i.CULL_FACE);let de=F.side===Kt;he&&(de=!de),qe(de),F.blending===Ci&&F.transparent===!1?pt(ni):pt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let Ie=F.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ne(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){T!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),T=F)}function we(F){F!==$c?(Q(i.CULL_FACE),F!==U&&(F===Al?i.cullFace(i.BACK):F===Kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),U=F}function nt(F){F!==O&&(X&&i.lineWidth(F),O=F)}function Ne(F,he,de){F?(Q(i.POLYGON_OFFSET_FILL),(Z!==he||P!==de)&&(i.polygonOffset(he,de),Z=he,P=de)):Re(i.POLYGON_OFFSET_FILL)}function We(F){F?Q(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function Ct(F){F===void 0&&(F=i.TEXTURE0+k-1),re!==F&&(i.activeTexture(F),re=F)}function ut(F,he,de){de===void 0&&(re===null?de=i.TEXTURE0+k-1:de=re);let Ie=ae[de];Ie===void 0&&(Ie={type:void 0,texture:void 0},ae[de]=Ie),(Ie.type!==F||Ie.texture!==he)&&(re!==de&&(i.activeTexture(de),re=de),i.bindTexture(F,he||ee[F]),Ie.type=F,Ie.texture=he)}function I(){let F=ae[re];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(F){ot.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ot.copy(F))}function Ve(F){ct.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ct.copy(F))}function Fe(F,he){let de=l.get(he);de===void 0&&(de=new WeakMap,l.set(he,de));let Ie=de.get(F);Ie===void 0&&(Ie=i.getUniformBlockIndex(he,F.name),de.set(F,Ie))}function be(F,he){let Ie=l.get(he).get(F);c.get(he)!==Ie&&(i.uniformBlockBinding(he,Ie,F.__bindingPointIndex),c.set(he,Ie))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,ae={},u={},p=new WeakMap,f=[],g=null,x=!1,m=null,d=null,S=null,v=null,_=null,E=null,b=null,R=new Ze(0,0,0),C=0,y=!1,T=null,U=null,O=null,Z=null,P=null,ot.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:Re,bindFramebuffer:Je,drawBuffers:ze,useProgram:$e,setBlending:pt,setMaterial:He,setFlipSided:qe,setCullFace:we,setLineWidth:nt,setPolygonOffset:Ne,setScissorTest:We,activeTexture:Ct,bindTexture:ut,unbindTexture:I,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:Le,texImage3D:le,updateUBOMapping:Fe,uniformBlockBinding:be,texStorage2D:pe,texStorage3D:Ae,texSubImage2D:te,texSubImage3D:oe,compressedTexSubImage2D:K,compressedTexSubImage3D:De,scissor:me,viewport:Ve,reset:Ye}}function h0(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,h=new WeakMap,u,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,M){return f?new OffscreenCanvas(I,M):Mr("canvas")}function x(I,M,q){let te=1,oe=ut(I);if((oe.width>q||oe.height>q)&&(te=q/Math.max(oe.width,oe.height)),te<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let K=Math.floor(te*oe.width),De=Math.floor(te*oe.height);u===void 0&&(u=g(K,De));let pe=M?g(K,De):u;return pe.width=K,pe.height=De,pe.getContext("2d").drawImage(I,0,0,K,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+K+"x"+De+")."),pe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function m(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,M,q,te,oe=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=M;if(M===i.RED&&(q===i.FLOAT&&(K=i.R32F),q===i.HALF_FLOAT&&(K=i.R16F),q===i.UNSIGNED_BYTE&&(K=i.R8)),M===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(K=i.R8UI),q===i.UNSIGNED_SHORT&&(K=i.R16UI),q===i.UNSIGNED_INT&&(K=i.R32UI),q===i.BYTE&&(K=i.R8I),q===i.SHORT&&(K=i.R16I),q===i.INT&&(K=i.R32I)),M===i.RG&&(q===i.FLOAT&&(K=i.RG32F),q===i.HALF_FLOAT&&(K=i.RG16F),q===i.UNSIGNED_BYTE&&(K=i.RG8)),M===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(K=i.RG8UI),q===i.UNSIGNED_SHORT&&(K=i.RG16UI),q===i.UNSIGNED_INT&&(K=i.RG32UI),q===i.BYTE&&(K=i.RG8I),q===i.SHORT&&(K=i.RG16I),q===i.INT&&(K=i.RG32I)),M===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(K=i.RGB8UI),q===i.UNSIGNED_SHORT&&(K=i.RGB16UI),q===i.UNSIGNED_INT&&(K=i.RGB32UI),q===i.BYTE&&(K=i.RGB8I),q===i.SHORT&&(K=i.RGB16I),q===i.INT&&(K=i.RGB32I)),M===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),q===i.UNSIGNED_INT&&(K=i.RGBA32UI),q===i.BYTE&&(K=i.RGBA8I),q===i.SHORT&&(K=i.RGBA16I),q===i.INT&&(K=i.RGBA32I)),M===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),M===i.RGBA){let De=oe?hs:_t.getTransfer(te);q===i.FLOAT&&(K=i.RGBA32F),q===i.HALF_FLOAT&&(K=i.RGBA16F),q===i.UNSIGNED_BYTE&&(K=De===wt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(I,M){let q;return I?M===null||M===yi||M===zr?q=i.DEPTH24_STENCIL8:M===Dn?q=i.DEPTH32F_STENCIL8:M===Nr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===yi||M===zr?q=i.DEPTH_COMPONENT24:M===Dn?q=i.DEPTH_COMPONENT32F:M===Nr&&(q=i.DEPTH_COMPONENT16),q}function E(I,M){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==un&&I.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function b(I){let M=I.target;M.removeEventListener("dispose",b),C(M),M.isVideoTexture&&h.delete(M)}function R(I){let M=I.target;M.removeEventListener("dispose",R),T(M)}function C(I){let M=n.get(I);if(M.__webglInit===void 0)return;let q=I.source,te=p.get(q);if(te){let oe=te[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&y(I),Object.keys(te).length===0&&p.delete(q)}n.remove(I)}function y(I){let M=n.get(I);i.deleteTexture(M.__webglTexture);let q=I.source,te=p.get(q);delete te[M.__cacheKey],o.memory.textures--}function T(I){let M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let oe=0;oe<M.__webglFramebuffer[te].length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[te][oe]);else i.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)i.deleteFramebuffer(M.__webglFramebuffer[te]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let q=I.textures;for(let te=0,oe=q.length;te<oe;te++){let K=n.get(q[te]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(q[te])}n.remove(I)}let U=0;function O(){U=0}function Z(){let I=U;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),U+=1,I}function P(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function k(I,M){let q=n.get(I);if(I.isVideoTexture&&We(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){let te=I.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(q,I,M);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+M)}function X(I,M){let q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){ee(q,I,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+M)}function ne(I,M){let q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){ee(q,I,M);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+M)}function $(I,M){let q=n.get(I);if(I.version>0&&q.__version!==I.version){Q(q,I,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+M)}let re={[_r]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},ae={[un]:i.NEAREST,[wh]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Zo]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},Me={[Ch]:i.NEVER,[Uh]:i.ALWAYS,[Rh]:i.LESS,[Gl]:i.LEQUAL,[Ih]:i.EQUAL,[Lh]:i.GEQUAL,[Ph]:i.GREATER,[Dh]:i.NOTEQUAL};function Oe(I,M){if(M.type===Dn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===Zo||M.magFilter===As||M.magFilter===_i||M.minFilter===Cn||M.minFilter===Zo||M.minFilter===As||M.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,re[M.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,re[M.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,re[M.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ae[M.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ae[M.minFilter]),M.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===un||M.minFilter!==As&&M.minFilter!==_i||M.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ot(I,M){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",b));let te=M.source,oe=p.get(te);oe===void 0&&(oe={},p.set(te,oe));let K=P(M);if(K!==I.__cacheKey){oe[K]===void 0&&(oe[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),oe[K].usedTimes++;let De=oe[I.__cacheKey];De!==void 0&&(oe[I.__cacheKey].usedTimes--,De.usedTimes===0&&y(M)),I.__cacheKey=K,I.__webglTexture=oe[K].texture}return q}function ct(I,M,q){return Math.floor(Math.floor(I/q)/M)}function ht(I,M,q,te){let K=I.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,q,te,M.data);else{K.sort((le,me)=>le.start-me.start);let De=0;for(let le=1;le<K.length;le++){let me=K[De],Ve=K[le],Fe=me.start+me.count,be=ct(Ve.start,M.width,4),Ye=ct(me.start,M.width,4);Ve.start<=Fe+1&&be===Ye&&ct(Ve.start+Ve.count-1,M.width,4)===be?me.count=Math.max(me.count,Ve.start+Ve.count-me.start):(++De,K[De]=Ve)}K.length=De+1;let pe=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let le=0,me=K.length;le<me;le++){let Ve=K[le],Fe=Math.floor(Ve.start/4),be=Math.ceil(Ve.count/4),Ye=Fe%M.width,F=Math.floor(Fe/M.width),he=be,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ye,F,he,de,q,te,M.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function ee(I,M,q){let te=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=i.TEXTURE_3D);let oe=ot(I,M),K=M.source;t.bindTexture(te,I.__webglTexture,i.TEXTURE0+q);let De=n.get(K);if(K.version!==De.__version||oe===!0){t.activeTexture(i.TEXTURE0+q);let pe=_t.getPrimaries(_t.workingColorSpace),Ae=M.colorSpace===Ln?null:_t.getPrimaries(M.colorSpace),Le=M.colorSpace===Ln||pe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let le=x(M.image,!1,r.maxTextureSize);le=Ct(M,le);let me=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type),Fe=v(M.internalFormat,me,Ve,M.colorSpace,M.isVideoTexture);Oe(te,M);let be,Ye=M.mipmaps,F=M.isVideoTexture!==!0,he=De.__version===void 0||oe===!0,de=K.dataReady,Ie=E(M,le);if(M.isDepthTexture)Fe=_(M.format===Or,M.type),he&&(F?t.texStorage2D(i.TEXTURE_2D,1,Fe,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Fe,le.width,le.height,0,me,Ve,null));else if(M.isDataTexture)if(Ye.length>0){F&&he&&t.texStorage2D(i.TEXTURE_2D,Ie,Fe,Ye[0].width,Ye[0].height);for(let ce=0,ie=Ye.length;ce<ie;ce++)be=Ye[ce],F?de&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,be.width,be.height,me,Ve,be.data):t.texImage2D(i.TEXTURE_2D,ce,Fe,be.width,be.height,0,me,Ve,be.data);M.generateMipmaps=!1}else F?(he&&t.texStorage2D(i.TEXTURE_2D,Ie,Fe,le.width,le.height),de&&ht(M,le,me,Ve)):t.texImage2D(i.TEXTURE_2D,0,Fe,le.width,le.height,0,me,Ve,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){F&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Fe,Ye[0].width,Ye[0].height,le.depth);for(let ce=0,ie=Ye.length;ce<ie;ce++)if(be=Ye[ce],M.format!==bn)if(me!==null)if(F){if(de)if(M.layerUpdates.size>0){let Te=Jl(be.width,be.height,M.format,M.type);for(let Xe of M.layerUpdates){let it=be.data.subarray(Xe*Te/be.data.BYTES_PER_ELEMENT,(Xe+1)*Te/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Xe,be.width,be.height,1,me,it)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,be.width,be.height,le.depth,me,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Fe,be.width,be.height,le.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,be.width,be.height,le.depth,me,Ve,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Fe,be.width,be.height,le.depth,0,me,Ve,be.data)}else{F&&he&&t.texStorage2D(i.TEXTURE_2D,Ie,Fe,Ye[0].width,Ye[0].height);for(let ce=0,ie=Ye.length;ce<ie;ce++)be=Ye[ce],M.format!==bn?me!==null?F?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,be.width,be.height,me,be.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?de&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,be.width,be.height,me,Ve,be.data):t.texImage2D(i.TEXTURE_2D,ce,Fe,be.width,be.height,0,me,Ve,be.data)}else if(M.isDataArrayTexture)if(F){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Fe,le.width,le.height,le.depth),de)if(M.layerUpdates.size>0){let ce=Jl(le.width,le.height,M.format,M.type);for(let ie of M.layerUpdates){let Te=le.data.subarray(ie*ce/le.data.BYTES_PER_ELEMENT,(ie+1)*ce/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,me,Ve,Te)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,me,Ve,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,le.width,le.height,le.depth,0,me,Ve,le.data);else if(M.isData3DTexture)F?(he&&t.texStorage3D(i.TEXTURE_3D,Ie,Fe,le.width,le.height,le.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,me,Ve,le.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,le.width,le.height,le.depth,0,me,Ve,le.data);else if(M.isFramebufferTexture){if(he)if(F)t.texStorage2D(i.TEXTURE_2D,Ie,Fe,le.width,le.height);else{let ce=le.width,ie=le.height;for(let Te=0;Te<Ie;Te++)t.texImage2D(i.TEXTURE_2D,Te,Fe,ce,ie,0,me,Ve,null),ce>>=1,ie>>=1}}else if(Ye.length>0){if(F&&he){let ce=ut(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Fe,ce.width,ce.height)}for(let ce=0,ie=Ye.length;ce<ie;ce++)be=Ye[ce],F?de&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,me,Ve,be):t.texImage2D(i.TEXTURE_2D,ce,Fe,me,Ve,be);M.generateMipmaps=!1}else if(F){if(he){let ce=ut(le);t.texStorage2D(i.TEXTURE_2D,Ie,Fe,ce.width,ce.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ve,le)}else t.texImage2D(i.TEXTURE_2D,0,Fe,me,Ve,le);m(M)&&d(te),De.__version=K.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Q(I,M,q){if(M.image.length!==6)return;let te=ot(I,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+q);let K=n.get(oe);if(oe.version!==K.__version||te===!0){t.activeTexture(i.TEXTURE0+q);let De=_t.getPrimaries(_t.workingColorSpace),pe=M.colorSpace===Ln?null:_t.getPrimaries(M.colorSpace),Ae=M.colorSpace===Ln||De===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Le=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!Le&&!le?me[ie]=x(M.image[ie],!0,r.maxCubemapSize):me[ie]=le?M.image[ie].image:M.image[ie],me[ie]=Ct(M,me[ie]);let Ve=me[0],Fe=s.convert(M.format,M.colorSpace),be=s.convert(M.type),Ye=v(M.internalFormat,Fe,be,M.colorSpace),F=M.isVideoTexture!==!0,he=K.__version===void 0||te===!0,de=oe.dataReady,Ie=E(M,Ve);Oe(i.TEXTURE_CUBE_MAP,M);let ce;if(Le){F&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Ye,Ve.width,Ve.height);for(let ie=0;ie<6;ie++){ce=me[ie].mipmaps;for(let Te=0;Te<ce.length;Te++){let Xe=ce[Te];M.format!==bn?Fe!==null?F?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,Xe.width,Xe.height,Fe,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,Ye,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,Xe.width,Xe.height,Fe,be,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,Ye,Xe.width,Xe.height,0,Fe,be,Xe.data)}}}else{if(ce=M.mipmaps,F&&he){ce.length>0&&Ie++;let ie=ut(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Ye,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,Fe,be,me[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ye,me[ie].width,me[ie].height,0,Fe,be,me[ie].data);for(let Te=0;Te<ce.length;Te++){let it=ce[Te].image[ie].image;F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,it.width,it.height,Fe,be,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,Ye,it.width,it.height,0,Fe,be,it.data)}}else{F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Fe,be,me[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ye,Fe,be,me[ie]);for(let Te=0;Te<ce.length;Te++){let Xe=ce[Te];F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,Fe,be,Xe.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,Ye,Fe,be,Xe.image[ie])}}}m(M)&&d(i.TEXTURE_CUBE_MAP),K.__version=oe.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Re(I,M,q,te,oe,K){let De=s.convert(q.format,q.colorSpace),pe=s.convert(q.type),Ae=v(q.internalFormat,De,pe,q.colorSpace),Le=n.get(M),le=n.get(q);if(le.__renderTarget=M,!Le.__hasExternalTextures){let me=Math.max(1,M.width>>K),Ve=Math.max(1,M.height>>K);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,K,Ae,me,Ve,M.depth,0,De,pe,null):t.texImage2D(oe,K,Ae,me,Ve,0,De,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ne(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,oe,le.__webglTexture,0,nt(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,oe,le.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(I,M,q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),M.depthBuffer){let te=M.depthTexture,oe=te&&te.isDepthTexture?te.type:null,K=_(M.stencilBuffer,oe),De=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=nt(M);Ne(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,K,M.width,M.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,K,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,K,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,I)}else{let te=M.textures;for(let oe=0;oe<te.length;oe++){let K=te[oe],De=s.convert(K.format,K.colorSpace),pe=s.convert(K.type),Ae=v(K.internalFormat,De,pe,K.colorSpace),Le=nt(M);q&&Ne(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Ae,M.width,M.height):Ne(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,Ae,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(I,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(M.depthTexture);te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);let oe=te.__webglTexture,K=nt(M);if(M.depthTexture.format===yr)Ne(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(M.depthTexture.format===Or)Ne(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function $e(I){let M=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let te=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),te){let oe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,te.removeEventListener("dispose",oe)};te.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=te}if(I.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");let te=I.texture.mipmaps;te&&te.length>0?ze(M.__webglFramebuffer[0],I):ze(M.__webglFramebuffer,I)}else if(q){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]===void 0)M.__webglDepthbuffer[te]=i.createRenderbuffer(),Je(M.__webglDepthbuffer[te],I,!1);else{let oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,K)}}else{let te=I.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Je(M.__webglDepthbuffer,I,!1);else{let oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(I,M,q){let te=n.get(I);M!==void 0&&Re(te.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&$e(I)}function L(I){let M=I.texture,q=n.get(I),te=n.get(M);I.addEventListener("dispose",R);let oe=I.textures,K=I.isWebGLCubeRenderTarget===!0,De=oe.length>1;if(De||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=M.version,o.memory.textures++),K){q.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[pe]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)q.__webglFramebuffer[pe][Ae]=i.createFramebuffer()}else q.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)q.__webglFramebuffer[pe]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(De)for(let pe=0,Ae=oe.length;pe<Ae;pe++){let Le=n.get(oe[pe]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Ne(I)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){let Ae=oe[pe];q.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[pe]);let Le=s.convert(Ae.format,Ae.colorSpace),le=s.convert(Ae.type),me=v(Ae.internalFormat,Le,le,Ae.colorSpace,I.isXRRenderTarget===!0),Ve=nt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,me,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,q.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Re(q.__webglFramebuffer[pe][Ae],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae);else Re(q.__webglFramebuffer[pe],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(M)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let pe=0,Ae=oe.length;pe<Ae;pe++){let Le=oe[pe],le=n.get(Le),me=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,le.__webglTexture),Oe(me,Le),Re(q.__webglFramebuffer,I,Le,i.COLOR_ATTACHMENT0+pe,me,0),m(Le)&&d(me)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,te.__webglTexture),Oe(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Re(q.__webglFramebuffer[Ae],I,M,i.COLOR_ATTACHMENT0,pe,Ae);else Re(q.__webglFramebuffer,I,M,i.COLOR_ATTACHMENT0,pe,0);m(M)&&d(pe),t.unbindTexture()}I.depthBuffer&&$e(I)}function pt(I){let M=I.textures;for(let q=0,te=M.length;q<te;q++){let oe=M[q];if(m(oe)){let K=S(I),De=n.get(oe).__webglTexture;t.bindTexture(K,De),d(K),t.unbindTexture()}}}let He=[],qe=[];function we(I){if(I.samples>0){if(Ne(I)===!1){let M=I.textures,q=I.width,te=I.height,oe=i.COLOR_BUFFER_BIT,K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(I),pe=M.length>1;if(pe)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);let Ae=I.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Le]);let le=n.get(M[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,q,te,0,0,q,te,oe,i.NEAREST),c===!0&&(He.length=0,qe.length=0,He.push(i.COLOR_ATTACHMENT0+Le),I.depthBuffer&&I.resolveDepthBuffer===!1&&(He.push(K),qe.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,De.__webglColorRenderbuffer[Le]);let le=n.get(M[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let M=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function nt(I){return Math.min(r.maxSamples,I.samples)}function Ne(I){let M=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function We(I){let M=o.render.frame;h.get(I)!==M&&(h.set(I,M),I.update())}function Ct(I,M){let q=I.colorSpace,te=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Ii&&q!==Ln&&(_t.getTransfer(q)===wt?(te!==bn||oe!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}function ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=X,this.setTexture3D=ne,this.setTextureCube=$,this.rebindTextures=Et,this.setupRenderTarget=L,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ne}function u0(i,e){function t(n,r=Ln){let s,o=_t.getTransfer(r);if(n===Pn)return i.UNSIGNED_BYTE;if(n===$o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ul)return i.BYTE;if(n===Nl)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===Jo)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===Ol)return i.ALPHA;if(n===Bl)return i.RGB;if(n===bn)return i.RGBA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Or)return i.DEPTH_STENCIL;if(n===jo)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===kl)return i.RG;if(n===ea)return i.RG_INTEGER;if(n===ta)return i.RGBA_INTEGER;if(n===Cs||n===Rs||n===Is||n===Ps)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===na||n===ia||n===ra||n===sa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ia)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===aa||n===la)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oa||n===aa)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===la)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===xa||n===_a||n===ya||n===va||n===Ma||n===ba)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ca)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_a)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===va)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===wa||n===Ta)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Sa)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ea||n===Aa||n===Ca||n===Ra)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ra)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var d0=`
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

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new vs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:d0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new _n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends jn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new lc,d={},S=t.getContextAttributes(),v=null,_=null,E=[],b=[],R=new Ge,C=null,y=new Gt;y.viewport=new yt;let T=new Gt;T.viewport=new yt;let U=[y,T],O=new Oo,Z=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Q=E[ee];return Q===void 0&&(Q=new Er,E[ee]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(ee){let Q=E[ee];return Q===void 0&&(Q=new Er,E[ee]=Q),Q.getGripSpace()},this.getHand=function(ee){let Q=E[ee];return Q===void 0&&(Q=new Er,E[ee]=Q),Q.getHandSpace()};function k(ee){let Q=b.indexOf(ee.inputSource);if(Q===-1)return;let Re=E[Q];Re!==void 0&&(Re.update(ee.inputSource,ee.frame,l||o),Re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<E.length;ee++){let Q=b[ee];Q!==null&&(b[ee]=null,E[ee].disconnect(Q))}Z=null,P=null,m.reset();for(let ee in d)delete d[ee];e.setRenderTarget(v),f=null,p=null,u=null,r=null,_=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Je=null,ze=null;S.depth&&(ze=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=S.stencil?Or:yr,Je=S.stencil?zr:yi);let $e={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};u=this.getBinding(),p=u.createProjectionLayer($e),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),_=new Fn(p.textureWidth,p.textureHeight,{format:bn,type:Pn,depthTexture:new ys(p.textureWidth,p.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let Re={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Re),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Fn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(ee){for(let Q=0;Q<ee.removed.length;Q++){let Re=ee.removed[Q],Je=b.indexOf(Re);Je>=0&&(b[Je]=null,E[Je].disconnect(Re))}for(let Q=0;Q<ee.added.length;Q++){let Re=ee.added[Q],Je=b.indexOf(Re);if(Je===-1){for(let $e=0;$e<E.length;$e++)if($e>=b.length){b.push(Re),Je=$e;break}else if(b[$e]===null){b[$e]=Re,Je=$e;break}if(Je===-1)break}let ze=E[Je];ze&&ze.connect(Re)}}let $=new N,re=new N;function ae(ee,Q,Re){$.setFromMatrixPosition(Q.matrixWorld),re.setFromMatrixPosition(Re.matrixWorld);let Je=$.distanceTo(re),ze=Q.projectionMatrix.elements,$e=Re.projectionMatrix.elements,Et=ze[14]/(ze[10]-1),L=ze[14]/(ze[10]+1),pt=(ze[9]+1)/ze[5],He=(ze[9]-1)/ze[5],qe=(ze[8]-1)/ze[0],we=($e[8]+1)/$e[0],nt=Et*qe,Ne=Et*we,We=Je/(-qe+we),Ct=We*-qe;if(Q.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ct),ee.translateZ(We),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ze[10]===-1)ee.projectionMatrix.copy(Q.projectionMatrix),ee.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let ut=Et+We,I=L+We,M=nt-Ct,q=Ne+(Je-Ct),te=pt*L/I*ut,oe=He*L/I*ut;ee.projectionMatrix.makePerspective(M,q,te,oe,ut,I),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Me(ee,Q){Q===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Q.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let Q=ee.near,Re=ee.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),O.near=T.near=y.near=Q,O.far=T.far=y.far=Re,(Z!==O.near||P!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),Z=O.near,P=O.far),O.layers.mask=ee.layers.mask|6,y.layers.mask=O.layers.mask&3,T.layers.mask=O.layers.mask&5;let Je=ee.parent,ze=O.cameras;Me(O,Je);for(let $e=0;$e<ze.length;$e++)Me(ze[$e],Je);ze.length===2?ae(O,y,T):O.projectionMatrix.copy(y.projectionMatrix),Oe(ee,O,Je)};function Oe(ee,Q,Re){Re===null?ee.matrix.copy(Q.matrixWorld):(ee.matrix.copy(Re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Q.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Q.projectionMatrix),ee.projectionMatrixInverse.copy(Q.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=vr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(ee){c=ee,p!==null&&(p.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(ee){return d[ee]};let ot=null;function ct(ee,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){let Re=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Je=!1;Re.length!==O.cameras.length&&(O.cameras.length=0,Je=!0);for(let L=0;L<Re.length;L++){let pt=Re[L],He=null;if(f!==null)He=f.getViewport(pt);else{let we=u.getViewSubImage(p,pt);He=we.viewport,L===0&&(e.setRenderTargetTextures(_,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(_))}let qe=U[L];qe===void 0&&(qe=new Gt,qe.layers.enable(L),qe.viewport=new yt,U[L]=qe),qe.matrix.fromArray(pt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(pt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(He.x,He.y,He.width,He.height),L===0&&(O.matrix.copy(qe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Je===!0&&O.cameras.push(qe)}let ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let L=u.getDepthInformation(Re[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(ze&&ze.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<Re.length;L++){let pt=Re[L].camera;if(pt){let He=d[pt];He||(He=new vs,d[pt]=He);let qe=u.getCameraImage(pt);He.sourceTexture=qe}}}}for(let Re=0;Re<E.length;Re++){let Je=b[Re],ze=E[Re];Je!==null&&ze!==void 0&&ze.update(Je,Q,l||o)}ot&&ot(ee,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ht=new cu;ht.setAnimationLoop(ct),this.setAnimationLoop=function(ee){ot=ee},this.dispose=function(){}}},Xi=new Rn,p0=new At;function m0(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ql(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,S,v,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,_)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,S,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d),v=S.envMap,_=S.envMapRotation;v&&(m.envMap.value=v,Xi.copy(_),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(p0.makeRotationFromEuler(Xi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Kt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function g0(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){let _=v.program;n.uniformBlockBinding(S,_)}function l(S,v){let _=r[S.id];_===void 0&&(g(S),_=h(S),r[S.id]=_,S.addEventListener("dispose",m));let E=v.program;n.updateUBOMapping(S,E);let b=e.render.frame;s[S.id]!==b&&(p(S),s[S.id]=b)}function h(S){let v=u();S.__bindingPointIndex=v;let _=i.createBuffer(),E=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let v=r[S.id],_=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,R=_.length;b<R;b++){let C=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,T=C.length;y<T;y++){let U=C[y];if(f(U,b,y,E)===!0){let O=U.__offset,Z=Array.isArray(U.value)?U.value:[U.value],P=0;for(let k=0;k<Z.length;k++){let X=Z[k],ne=x(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,O+P,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,P),P+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,v,_,E){let b=S.value,R=v+"_"+_;if(E[R]===void 0)return typeof b=="number"||typeof b=="boolean"?E[R]=b:E[R]=b.clone(),!0;{let C=E[R];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return E[R]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(S){let v=S.uniforms,_=0,E=16;for(let R=0,C=v.length;R<C;R++){let y=Array.isArray(v[R])?v[R]:[v[R]];for(let T=0,U=y.length;T<U;T++){let O=y[T],Z=Array.isArray(O.value)?O.value:[O.value];for(let P=0,k=Z.length;P<k;P++){let X=Z[P],ne=x(X),$=_%E,re=$%ne.boundary,ae=$+re;_+=re,ae!==0&&E-ae<ne.storage&&(_+=E-ae),O.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=ne.storage}}}let b=_%E;return b>0&&(_+=E-b),S.__size=_,S.__cache={},this}function x(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){let v=S.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(let S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}var Gr=class{constructor(e={}){let{canvas:t=Nh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,S=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,E=!1;this._outputColorSpace=Ft;let b=0,R=0,C=null,y=-1,T=null,U=new yt,O=new yt,Z=null,P=new Ze(0),k=0,X=t.width,ne=t.height,$=1,re=null,ae=null,Me=new yt(0,0,X,ne),Oe=new yt(0,0,X,ne),ot=!1,ct=new Ir,ht=!1,ee=!1,Q=new At,Re=new N,Je=new yt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function Et(){return C===null?$:1}let L=n;function pt(w,G){return t.getContext(w,G)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ce,!1),L===null){let G="webgl2";if(L=pt(G,w),L===null)throw pt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let He,qe,we,nt,Ne,We,Ct,ut,I,M,q,te,oe,K,De,pe,Ae,Le,le,me,Ve,Fe,be,Ye;function F(){He=new Um(L),He.init(),Fe=new u0(L,He),qe=new Am(L,He,e,Fe),we=new c0(L,He),qe.reversedDepthBuffer&&p&&we.buffers.depth.setReversed(!0),nt=new zm(L),Ne=new $g,We=new h0(L,He,we,Ne,qe,Fe,nt),Ct=new Rm(_),ut=new Lm(_),I=new Gd(L),be=new Tm(L,I),M=new Nm(L,I,nt,be),q=new Bm(L,M,I,nt),le=new Om(L,qe,We),pe=new Cm(Ne),te=new Jg(_,Ct,ut,He,qe,be,pe),oe=new m0(_,Ne),K=new jg,De=new r0(He),Le=new wm(_,Ct,ut,we,q,f,c),Ae=new a0(_,q,qe),Ye=new g0(L,nt,qe,we),me=new Em(L,He,nt),Ve=new Fm(L,He,nt),nt.programs=te.programs,_.capabilities=qe,_.extensions=He,_.properties=Ne,_.renderLists=K,_.shadowMap=Ae,_.state=we,_.info=nt}F();let he=new cc(_,L);this.xr=he,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=He.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=He.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(X,ne,!1))},this.getSize=function(w){return w.set(X,ne)},this.setSize=function(w,G,Y=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,ne=G,t.width=Math.floor(w*$),t.height=Math.floor(G*$),Y===!0&&(t.style.width=w+"px",t.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(X*$,ne*$).floor()},this.setDrawingBufferSize=function(w,G,Y){X=w,ne=G,$=Y,t.width=Math.floor(w*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(Me)},this.setViewport=function(w,G,Y,B){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,G,Y,B),we.viewport(U.copy(Me).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(Oe)},this.setScissor=function(w,G,Y,B){w.isVector4?Oe.set(w.x,w.y,w.z,w.w):Oe.set(w,G,Y,B),we.scissor(O.copy(Oe).multiplyScalar($).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(w){we.setScissorTest(ot=w)},this.setOpaqueSort=function(w){re=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,Y=!0){let B=0;if(w){let z=!1;if(C!==null){let se=C.texture.format;z=se===ta||se===ea||se===Qo}if(z){let se=C.texture.type,ve=se===Pn||se===yi||se===Nr||se===zr||se===$o||se===Ko,A=Le.getClearColor(),D=Le.getClearAlpha(),J=A.r,W=A.g,j=A.b;ve?(g[0]=J,g[1]=W,g[2]=j,g[3]=D,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=J,x[1]=W,x[2]=j,x[3]=D,L.clearBufferiv(L.COLOR,0,x))}else B|=L.COLOR_BUFFER_BIT}G&&(B|=L.DEPTH_BUFFER_BIT),Y&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Le.dispose(),K.dispose(),De.dispose(),Ne.dispose(),Ct.dispose(),ut.dispose(),q.dispose(),be.dispose(),Ye.dispose(),te.dispose(),he.dispose(),he.removeEventListener("sessionstart",Bt),he.removeEventListener("sessionend",Pt),an.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=nt.autoReset,G=Ae.enabled,Y=Ae.autoUpdate,B=Ae.needsUpdate,z=Ae.type;F(),nt.autoReset=w,Ae.enabled=G,Ae.autoUpdate=Y,Ae.needsUpdate=B,Ae.type=z}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ie(w){let G=w.target;G.removeEventListener("dispose",ie),Te(G)}function Te(w){Xe(w),Ne.remove(w)}function Xe(w){let G=Ne.get(w).programs;G!==void 0&&(G.forEach(function(Y){te.releaseProgram(Y)}),w.isShaderMaterial&&te.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,Y,B,z,se){G===null&&(G=ze);let ve=z.isMesh&&z.matrixWorld.determinant()<0,A=fe(w,G,Y,B,z);we.setMaterial(B,ve);let D=Y.index,J=1;if(B.wireframe===!0){if(D=M.getWireframeAttribute(Y),D===void 0)return;J=2}let W=Y.drawRange,j=Y.attributes.position,ue=W.start*J,ye=(W.start+W.count)*J;se!==null&&(ue=Math.max(ue,se.start*J),ye=Math.min(ye,(se.start+se.count)*J)),D!==null?(ue=Math.max(ue,0),ye=Math.min(ye,D.count)):j!=null&&(ue=Math.max(ue,0),ye=Math.min(ye,j.count));let xe=ye-ue;if(xe<0||xe===1/0)return;be.setup(z,B,A,Y,D);let Pe,Ue=me;if(D!==null&&(Pe=I.get(D),Ue=Ve,Ue.setIndex(Pe)),z.isMesh)B.wireframe===!0?(we.setLineWidth(B.wireframeLinewidth*Et()),Ue.setMode(L.LINES)):Ue.setMode(L.TRIANGLES);else if(z.isLine){let Ce=B.linewidth;Ce===void 0&&(Ce=1),we.setLineWidth(Ce*Et()),z.isLineSegments?Ue.setMode(L.LINES):z.isLineLoop?Ue.setMode(L.LINE_LOOP):Ue.setMode(L.LINE_STRIP)}else z.isPoints?Ue.setMode(L.POINTS):z.isSprite&&Ue.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ue.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ue.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ce=z._multiDrawStarts,dt=z._multiDrawCounts,tt=z._multiDrawCount,Zt=D?I.get(D).bytesPerElement:1,Ee=Ne.get(B).currentProgram.getUniforms();for(let Be=0;Be<tt;Be++)Ee.setValue(L,"_gl_DrawID",Be),Ue.render(Ce[Be]/Zt,dt[Be])}else if(z.isInstancedMesh)Ue.renderInstances(ue,xe,z.count);else if(Y.isInstancedBufferGeometry){let Ce=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,dt=Math.min(Y.instanceCount,Ce);Ue.renderInstances(ue,xe,dt)}else Ue.render(ue,xe)};function it(w,G,Y){w.transparent===!0&&w.side===Lt&&w.forceSinglePass===!1?(w.side=Kt,w.needsUpdate=!0,vn(w,G,Y),w.side=Kn,w.needsUpdate=!0,vn(w,G,Y),w.side=Lt):vn(w,G,Y)}this.compile=function(w,G,Y=null){Y===null&&(Y=w),d=De.get(Y),d.init(G),v.push(d),Y.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),w!==Y&&w.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();let B=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let se=z.material;if(se)if(Array.isArray(se))for(let ve=0;ve<se.length;ve++){let A=se[ve];it(A,Y,z),B.add(A)}else it(se,Y,z),B.add(se)}),d=v.pop(),B},this.compileAsync=function(w,G,Y=null){let B=this.compile(w,G,Y);return new Promise(z=>{function se(){if(B.forEach(function(ve){Ne.get(ve).currentProgram.isReady()&&B.delete(ve)}),B.size===0){z(w);return}setTimeout(se,10)}He.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let rt=null;function Ot(w){rt&&rt(w)}function Bt(){an.stop()}function Pt(){an.start()}let an=new cu;an.setAnimationLoop(Ot),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(w){rt=w,he.setAnimationLoop(w),w===null?an.stop():an.start()},he.addEventListener("sessionstart",Bt),he.addEventListener("sessionend",Pt),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(G),G=he.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,G,C),d=De.get(w,v.length),d.init(G),v.push(d),Q.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ct.setFromProjectionMatrix(Q,An,G.reversedDepth),ee=this.localClippingEnabled,ht=pe.init(this.clippingPlanes,ee),m=K.get(w,S.length),m.init(),S.push(m),he.enabled===!0&&he.isPresenting===!0){let se=_.xr.getDepthSensingMesh();se!==null&&mn(se,G,-1/0,_.sortObjects)}mn(w,G,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(re,ae),$e=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,$e&&Le.addToRenderList(m,w),this.info.render.frame++,ht===!0&&pe.beginShadows();let Y=d.state.shadowsArray;Ae.render(Y,w,G),ht===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,z=m.transmissive;if(d.setupLights(),G.isArrayCamera){let se=G.cameras;if(z.length>0)for(let ve=0,A=se.length;ve<A;ve++){let D=se[ve];jt(B,z,w,D)}$e&&Le.render(w);for(let ve=0,A=se.length;ve<A;ve++){let D=se[ve];Ut(m,w,D,D.viewport)}}else z.length>0&&jt(B,z,w,G),$e&&Le.render(w),Ut(m,w,G);C!==null&&R===0&&(We.updateMultisampleRenderTarget(C),We.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(_,w,G),be.resetDefaultState(),y=-1,T=null,v.pop(),v.length>0?(d=v[v.length-1],ht===!0&&pe.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function mn(w,G,Y,B){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ct.intersectsSprite(w)){B&&Je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);let ve=q.update(w),A=w.material;A.visible&&m.push(w,ve,A,Y,Je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ct.intersectsObject(w))){let ve=q.update(w),A=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Je.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Je.copy(ve.boundingSphere.center)),Je.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(A)){let D=ve.groups;for(let J=0,W=D.length;J<W;J++){let j=D[J],ue=A[j.materialIndex];ue&&ue.visible&&m.push(w,ve,ue,Y,Je.z,j)}}else A.visible&&m.push(w,ve,A,Y,Je.z,null)}}let se=w.children;for(let ve=0,A=se.length;ve<A;ve++)mn(se[ve],G,Y,B)}function Ut(w,G,Y,B){let z=w.opaque,se=w.transmissive,ve=w.transparent;d.setupLightsView(Y),ht===!0&&pe.setGlobalState(_.clippingPlanes,Y),B&&we.viewport(U.copy(B)),z.length>0&&Gn(z,G,Y),se.length>0&&Gn(se,G,Y),ve.length>0&&Gn(ve,G,Y),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function jt(w,G,Y,B){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new Fn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Fr:Pn,minFilter:_i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));let se=d.state.transmissionRenderTarget[B.id],ve=B.viewport||U;se.setSize(ve.z*_.transmissionResolutionScale,ve.w*_.transmissionResolutionScale);let A=_.getRenderTarget(),D=_.getActiveCubeFace(),J=_.getActiveMipmapLevel();_.setRenderTarget(se),_.getClearColor(P),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),$e&&Le.render(Y);let W=_.toneMapping;_.toneMapping=ii;let j=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),ht===!0&&pe.setGlobalState(_.clippingPlanes,B),Gn(w,Y,B),We.updateMultisampleRenderTarget(se),We.updateRenderTargetMipmap(se),He.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let ye=0,xe=G.length;ye<xe;ye++){let Pe=G[ye],Ue=Pe.object,Ce=Pe.geometry,dt=Pe.material,tt=Pe.group;if(dt.side===Lt&&Ue.layers.test(B.layers)){let Zt=dt.side;dt.side=Kt,dt.needsUpdate=!0,ji(Ue,Y,B,Ce,dt,tt),dt.side=Zt,dt.needsUpdate=!0,ue=!0}}ue===!0&&(We.updateMultisampleRenderTarget(se),We.updateRenderTargetMipmap(se))}_.setRenderTarget(A,D,J),_.setClearColor(P,k),j!==void 0&&(B.viewport=j),_.toneMapping=W}function Gn(w,G,Y){let B=G.isScene===!0?G.overrideMaterial:null;for(let z=0,se=w.length;z<se;z++){let ve=w[z],A=ve.object,D=ve.geometry,J=ve.group,W=ve.material;W.allowOverride===!0&&B!==null&&(W=B),A.layers.test(Y.layers)&&ji(A,G,Y,D,W,J)}}function ji(w,G,Y,B,z,se){w.onBeforeRender(_,G,Y,B,z,se),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(_,G,Y,B,w,se),z.transparent===!0&&z.side===Lt&&z.forceSinglePass===!1?(z.side=Kt,z.needsUpdate=!0,_.renderBufferDirect(Y,G,B,z,w,se),z.side=Kn,z.needsUpdate=!0,_.renderBufferDirect(Y,G,B,z,w,se),z.side=Lt):_.renderBufferDirect(Y,G,B,z,w,se),w.onAfterRender(_,G,Y,B,z,se)}function vn(w,G,Y){G.isScene!==!0&&(G=ze);let B=Ne.get(w),z=d.state.lights,se=d.state.shadowsArray,ve=z.state.version,A=te.getParameters(w,z.state,se,G,Y),D=te.getProgramCacheKey(A),J=B.programs;B.environment=w.isMeshStandardMaterial?G.environment:null,B.fog=G.fog,B.envMap=(w.isMeshStandardMaterial?ut:Ct).get(w.envMap||B.environment),B.envMapRotation=B.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,J===void 0&&(w.addEventListener("dispose",ie),J=new Map,B.programs=J);let W=J.get(D);if(W!==void 0){if(B.currentProgram===W&&B.lightsStateVersion===ve)return H(w,A),W}else A.uniforms=te.getUniforms(w),w.onBeforeCompile(A,_),W=te.acquireProgram(A,D),J.set(D,W),B.uniforms=A.uniforms;let j=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(j.clippingPlanes=pe.uniform),H(w,A),B.needsLights=mt(w),B.lightsStateVersion=ve,B.needsLights&&(j.ambientLightColor.value=z.state.ambient,j.lightProbe.value=z.state.probe,j.directionalLights.value=z.state.directional,j.directionalLightShadows.value=z.state.directionalShadow,j.spotLights.value=z.state.spot,j.spotLightShadows.value=z.state.spotShadow,j.rectAreaLights.value=z.state.rectArea,j.ltc_1.value=z.state.rectAreaLTC1,j.ltc_2.value=z.state.rectAreaLTC2,j.pointLights.value=z.state.point,j.pointLightShadows.value=z.state.pointShadow,j.hemisphereLights.value=z.state.hemi,j.directionalShadowMap.value=z.state.directionalShadowMap,j.directionalShadowMatrix.value=z.state.directionalShadowMatrix,j.spotShadowMap.value=z.state.spotShadowMap,j.spotLightMatrix.value=z.state.spotLightMatrix,j.spotLightMap.value=z.state.spotLightMap,j.pointShadowMap.value=z.state.pointShadowMap,j.pointShadowMatrix.value=z.state.pointShadowMatrix),B.currentProgram=W,B.uniformsList=null,W}function V(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=Vr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function H(w,G){let Y=Ne.get(w);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function fe(w,G,Y,B,z){G.isScene!==!0&&(G=ze),We.resetTextureUnits();let se=G.fog,ve=B.isMeshStandardMaterial?G.environment:null,A=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ii,D=(B.isMeshStandardMaterial?ut:Ct).get(B.envMap||ve),J=B.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,W=!!Y.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),j=!!Y.morphAttributes.position,ue=!!Y.morphAttributes.normal,ye=!!Y.morphAttributes.color,xe=ii;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xe=_.toneMapping);let Pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ue=Pe!==void 0?Pe.length:0,Ce=Ne.get(B),dt=d.state.lights;if(ht===!0&&(ee===!0||w!==T)){let Jt=w===T&&B.id===y;pe.setState(B,w,Jt)}let tt=!1;B.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==dt.state.version||Ce.outputColorSpace!==A||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==D||B.fog===!0&&Ce.fog!==se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==pe.numPlanes||Ce.numIntersection!==pe.numIntersection)||Ce.vertexAlphas!==J||Ce.vertexTangents!==W||Ce.morphTargets!==j||Ce.morphNormals!==ue||Ce.morphColors!==ye||Ce.toneMapping!==xe||Ce.morphTargetsCount!==Ue)&&(tt=!0):(tt=!0,Ce.__version=B.version);let Zt=Ce.currentProgram;tt===!0&&(Zt=vn(B,G,z));let Ee=!1,Be=!1,ln=!1,xt=Zt.getUniforms(),kt=Ce.uniforms;if(we.useProgram(Zt.program)&&(Ee=!0,Be=!0,ln=!0),B.id!==y&&(y=B.id,Be=!0),Ee||T!==w){we.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xt.setValue(L,"projectionMatrix",w.projectionMatrix),xt.setValue(L,"viewMatrix",w.matrixWorldInverse);let en=xt.map.cameraPosition;en!==void 0&&en.setValue(L,Re.setFromMatrixPosition(w.matrixWorld)),qe.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&xt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Be=!0,ln=!0)}if(z.isSkinnedMesh){xt.setOptional(L,z,"bindMatrix"),xt.setOptional(L,z,"bindMatrixInverse");let Jt=z.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),xt.setValue(L,"boneTexture",Jt.boneTexture,We))}z.isBatchedMesh&&(xt.setOptional(L,z,"batchingTexture"),xt.setValue(L,"batchingTexture",z._matricesTexture,We),xt.setOptional(L,z,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",z._indirectTexture,We),xt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",z._colorsTexture,We));let Qt=Y.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&le.update(z,Y,Zt),(Be||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,xt.setValue(L,"receiveShadow",z.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(kt.envMap.value=D,kt.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&G.environment!==null&&(kt.envMapIntensity.value=G.environmentIntensity),Be&&(xt.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ce.needsLights&&ge(kt,ln),se&&B.fog===!0&&oe.refreshFogUniforms(kt,se),oe.refreshMaterialUniforms(kt,B,$,ne,d.state.transmissionRenderTarget[w.id]),Vr.upload(L,V(Ce),kt,We)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Vr.upload(L,V(Ce),kt,We),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&xt.setValue(L,"center",z.center),xt.setValue(L,"modelViewMatrix",z.modelViewMatrix),xt.setValue(L,"normalMatrix",z.normalMatrix),xt.setValue(L,"modelMatrix",z.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Jt=B.uniformsGroups;for(let en=0,si=Jt.length;en<si;en++){let bi=Jt[en];Ye.update(bi,Zt),Ye.bind(bi,Zt)}}return Zt}function ge(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function mt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,G,Y){let B=Ne.get(w);B.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ne.get(w.texture).__webglTexture=G,Ne.get(w.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:Y,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let Y=Ne.get(w);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0};let je=L.createFramebuffer();this.setRenderTarget=function(w,G=0,Y=0){C=w,b=G,R=Y;let B=!0,z=null,se=!1,ve=!1;if(w){let D=Ne.get(w);if(D.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(L.FRAMEBUFFER,null),B=!1;else if(D.__webglFramebuffer===void 0)We.setupRenderTarget(w);else if(D.__hasExternalTextures)We.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let j=w.depthTexture;if(D.__boundDepthTexture!==j){if(j!==null&&Ne.has(j)&&(w.width!==j.image.width||w.height!==j.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(w)}}let J=w.texture;(J.isData3DTexture||J.isDataArrayTexture||J.isCompressedArrayTexture)&&(ve=!0);let W=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(W[G])?z=W[G][Y]:z=W[G],se=!0):w.samples>0&&We.useMultisampledRTT(w)===!1?z=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(W)?z=W[Y]:z=W,U.copy(w.viewport),O.copy(w.scissor),Z=w.scissorTest}else U.copy(Me).multiplyScalar($).floor(),O.copy(Oe).multiplyScalar($).floor(),Z=ot;if(Y!==0&&(z=je),we.bindFramebuffer(L.FRAMEBUFFER,z)&&B&&we.drawBuffers(w,z),we.viewport(U),we.scissor(O),we.setScissorTest(Z),se){let D=Ne.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,D.__webglTexture,Y)}else if(ve){let D=G;for(let J=0;J<w.textures.length;J++){let W=Ne.get(w.textures[J]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+J,W.__webglTexture,Y,D)}}else if(w!==null&&Y!==0){let D=Ne.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,D.__webglTexture,Y)}y=-1},this.readRenderTargetPixels=function(w,G,Y,B,z,se,ve,A=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let D=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(D=D[ve]),D){we.bindFramebuffer(L.FRAMEBUFFER,D);try{let J=w.textures[A],W=J.format,j=J.type;if(!qe.textureFormatReadable(W)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-B&&Y>=0&&Y<=w.height-z&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+A),L.readPixels(G,Y,B,z,Fe.convert(W),Fe.convert(j),se))}finally{let J=C!==null?Ne.get(C).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,J)}}},this.readRenderTargetPixelsAsync=async function(w,G,Y,B,z,se,ve,A=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let D=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(D=D[ve]),D)if(G>=0&&G<=w.width-B&&Y>=0&&Y<=w.height-z){we.bindFramebuffer(L.FRAMEBUFFER,D);let J=w.textures[A],W=J.format,j=J.type;if(!qe.textureFormatReadable(W))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ue),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+A),L.readPixels(G,Y,B,z,Fe.convert(W),Fe.convert(j),0);let ye=C!==null?Ne.get(C).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,ye);let xe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Fh(L,xe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(ue),L.deleteSync(xe),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,Y=0){let B=Math.pow(2,-Y),z=Math.floor(w.image.width*B),se=Math.floor(w.image.height*B),ve=G!==null?G.x:0,A=G!==null?G.y:0;We.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,ve,A,z,se),we.unbindTexture()};let Dt=L.createFramebuffer(),Nt=L.createFramebuffer();this.copyTextureToTexture=function(w,G,Y=null,B=null,z=0,se=null){se===null&&(z!==0?(br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=z,z=0):se=0);let ve,A,D,J,W,j,ue,ye,xe,Pe=w.isCompressedTexture?w.mipmaps[se]:w.image;if(Y!==null)ve=Y.max.x-Y.min.x,A=Y.max.y-Y.min.y,D=Y.isBox3?Y.max.z-Y.min.z:1,J=Y.min.x,W=Y.min.y,j=Y.isBox3?Y.min.z:0;else{let Qt=Math.pow(2,-z);ve=Math.floor(Pe.width*Qt),A=Math.floor(Pe.height*Qt),w.isDataArrayTexture?D=Pe.depth:w.isData3DTexture?D=Math.floor(Pe.depth*Qt):D=1,J=0,W=0,j=0}B!==null?(ue=B.x,ye=B.y,xe=B.z):(ue=0,ye=0,xe=0);let Ue=Fe.convert(G.format),Ce=Fe.convert(G.type),dt;G.isData3DTexture?(We.setTexture3D(G,0),dt=L.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(We.setTexture2DArray(G,0),dt=L.TEXTURE_2D_ARRAY):(We.setTexture2D(G,0),dt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);let tt=L.getParameter(L.UNPACK_ROW_LENGTH),Zt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ee=L.getParameter(L.UNPACK_SKIP_PIXELS),Be=L.getParameter(L.UNPACK_SKIP_ROWS),ln=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,J),L.pixelStorei(L.UNPACK_SKIP_ROWS,W),L.pixelStorei(L.UNPACK_SKIP_IMAGES,j);let xt=w.isDataArrayTexture||w.isData3DTexture,kt=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let Qt=Ne.get(w),Jt=Ne.get(G),en=Ne.get(Qt.__renderTarget),si=Ne.get(Jt.__renderTarget);we.bindFramebuffer(L.READ_FRAMEBUFFER,en.__webglFramebuffer),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let bi=0;bi<D;bi++)xt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.get(w).__webglTexture,z,j+bi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.get(G).__webglTexture,se,xe+bi)),L.blitFramebuffer(J,W,ve,A,ue,ye,ve,A,L.DEPTH_BUFFER_BIT,L.NEAREST);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||Ne.has(w)){let Qt=Ne.get(w),Jt=Ne.get(G);we.bindFramebuffer(L.READ_FRAMEBUFFER,Dt),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,Nt);for(let en=0;en<D;en++)xt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qt.__webglTexture,z,j+en):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qt.__webglTexture,z),kt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Jt.__webglTexture,se,xe+en):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Jt.__webglTexture,se),z!==0?L.blitFramebuffer(J,W,ve,A,ue,ye,ve,A,L.COLOR_BUFFER_BIT,L.NEAREST):kt?L.copyTexSubImage3D(dt,se,ue,ye,xe+en,J,W,ve,A):L.copyTexSubImage2D(dt,se,ue,ye,J,W,ve,A);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else kt?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(dt,se,ue,ye,xe,ve,A,D,Ue,Ce,Pe.data):G.isCompressedArrayTexture?L.compressedTexSubImage3D(dt,se,ue,ye,xe,ve,A,D,Ue,Pe.data):L.texSubImage3D(dt,se,ue,ye,xe,ve,A,D,Ue,Ce,Pe):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,se,ue,ye,ve,A,Ue,Ce,Pe.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,se,ue,ye,Pe.width,Pe.height,Ue,Pe.data):L.texSubImage2D(L.TEXTURE_2D,se,ue,ye,ve,A,Ue,Ce,Pe);L.pixelStorei(L.UNPACK_ROW_LENGTH,tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Zt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Be),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ln),se===0&&G.generateMipmaps&&L.generateMipmap(dt),we.unbindTexture()},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&We.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?We.setTextureCube(w,0):w.isData3DTexture?We.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?We.setTexture2DArray(w,0):We.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){b=0,R=0,C=null,we.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var x0={x:1630,y:1160},_0={x:3370,y:430},Us={x:1450,y:1320};function pu(i,e){if(!i||!e)return null;let t=[x0,_0].filter(g=>Math.hypot(g.x-i.x,g.y-i.y)<400).sort((g,x)=>Math.hypot(g.x-i.x,g.y-i.y)-Math.hypot(x.x-i.x,x.y-i.y))[0],n=0,r=1;if(t){let g=t.x-i.x,x=t.y-i.y;Math.abs(g)>Math.abs(x)?(n=Math.sign(g)||1,r=0):r=Math.sign(x)||1}let s=[0,280,320,360][e],o=[0,220,260,300][e],a=112,c={x:i.x-n*o/2,y:i.y-r*o/2},l=(g,x)=>({x:c.x+r*g+n*x,y:c.y-n*g+r*x}),h=(g,x,m,d)=>{let S=l(g,x);return{x:S.x,y:S.y,w:r?m:d,h:r?d:m}},u=[];if(e>=2){u.push(h(0,-o/2,s,10));for(let g of[-s/2,s/2])u.push(h(g,0,10,o))}if(e>=3){let g=(s-a)/2;for(let x of[-1,1])u.push(h(x*(a/2+g/2),o/2,g,10))}let p=e===1?[-1,1].flatMap(g=>[-1,1].map(x=>({...l(g*(s/2-8),x*(o/2-8)),radius:6}))):[],f=[h(-s/2+53,-o/2+64,52,90)];return e>=3&&f.push(h(s/2-53,-o/2+64,52,90)),{center:c,width:s,depth:o,door:a,fx:n,fy:r,yaw:Math.atan2(n,r),floor:h(0,0,s,o),walls:u,posts:p,beds:f,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var y0=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],v0=["#e3b185","#be895f","#efc69d","#a67152"],M0=["#463b32","#24282b","#99673b","#c9a465"];function b0(i){let e={shirt:0,skin:0,hair:0,style:0};for(let[t,n]of[["shirt",6],["skin",4],["hair",4],["style",3]])Number.isInteger(i?.[t])&&i[t]>=0&&i[t]<n&&(e[t]=i[t]);return e}function Fa(i){let e=b0(i);return{shirt:y0[e.shirt],skin:v0[e.skin],hair:M0[e.hair],style:e.style}}var mu={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function gu(i,e){let t=Math.sin(e*Math.PI*4);return i==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:i==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:i==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:i==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:i==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var S0="assets/materials-v018/",xu=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],w0=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function _u(i){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[n,r,s,o]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(n,r,s,o,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function za(i){let e=new Map,t=new Map,n=0,r=0,s=new ws;for(let h of xu){let u=s.load(S0+h+".webp",()=>n++,void 0,()=>r++);u.colorSpace=Ft,u.wrapS=u.wrapT=_r,u.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),e.set(h,u)}function o(h,u="#ffffff",p=1,f=.035){let g=h+u+p+f;if(!t.has(g)){let x=e.get(h).clone();x.repeat.set(p,p);let m=new Tt({color:u,map:x,bumpMap:x,bumpScale:f,roughness:h==="leaf"?.78:.93});e.get(h).addEventListener("dispose",()=>x.dispose());let d=e.get(h);m.userData.textureSource=d,t.set(g,m)}return t.get(g)}function a(h){return w0.has(h)?o("wood","#ded4c4",1,.045):h==="#e2dbc7"?o("plaster","#f8f4e7",1,.027):h==="#ba7655"?o("roof","#e4d6c7",2,.055):h==="#a7c4b7"?o("teal","#e7ede3",1,.035):h==="#92968b"||h==="#777a6b"?o("rock","#ddd9cf",1,.065):null}function c(){for(let h of t.values())h.userData.textureSource.image&&h.map.image!==h.userData.textureSource.image&&(h.map.source=h.userData.textureSource.source,h.map.needsUpdate=!0);for(let h of t.values())h.map.image&&!h.userData.uploaded&&(h.map.needsUpdate=!0,h.userData.uploaded=!0)}function l(h){h.colorSpace=Ln;let u=new Tt({color:"#ffffff",map:h,roughness:1});return u.onBeforeCompile=p=>{p.uniforms.uSand={value:e.get("sand")},p.uniforms.uGrass={value:e.get("grass")},p.uniforms.uPaving={value:e.get("paving")},p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
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
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},u}return{textures:e,surface:o,forColor:a,ground:l,update:c,stats:()=>({loaded:n,failed:r,total:xu.length}),dispose(){for(let h of t.values())h.map.dispose(),h.dispose();for(let h of e.values())h.dispose()}}}function Oa({x:i,z:e,surface:t,yaw:n,pitch:r,mode:s="first",distance:o=4.8,bob:a=0}){let c=t+1.64+a;if(s==="first")return{position:new N(i,c,e),target:new N(i-Math.sin(n)*Math.cos(r),c-Math.sin(r),e-Math.cos(n)*Math.cos(r))};let l=new N(i,t+1.3,e);return{position:new N(i+Math.sin(n)*Math.cos(r)*o,l.y+.65+Math.sin(r)*o,e+Math.cos(n)*Math.cos(r)*o),target:l}}function uc(i,e,t,n){return!(t>0)||!(n>0)?i:i.lerp(e,1-Math.exp(-t*n))}function Ba(i,e,t,{height:n=18,offsetX:r=-12,offsetZ:s=-8}={}){let o=Math.abs(i.shadow.camera.right-i.shadow.camera.left),a=i.shadow.mapSize.width,c=o>0&&a>0?o/a:0,l=c?Math.round(e/c)*c:e,h=c?Math.round(t/c)*c:t;return i.position.set(l+r,n,h+s),i.target.position.set(l,0,h),c}function yu(i,e,t,n,r){let s=(()=>{let x=90210;return()=>(x=Math.imul(x,1664525)+1013904223>>>0)/4294967296})(),o=new bt;o.setAttribute("position",new Qe([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),o.setAttribute("uv",new Qe([0,0,1,0,0,.5,1,.5,.5,1],2)),o.setIndex([0,1,2,1,3,2,2,3,4]),o.computeVertexNormals();let a=new Tt({color:"#ffffff",side:Lt,roughness:1});a.defines={USE_UV:""};let c={value:0},l={value:new yt(0,0,0,0)};a.onBeforeCompile=x=>{x.uniforms.uWind=c,x.uniforms.uBase=l,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let h=r?2800:5500,u=new Mt(o,a,h);u.receiveShadow=!0,u.frustumCulled=!1;let p=n.getContext("2d").getImageData(0,0,n.width,n.height).data,f=new vt,g=0;for(let x=0;x<h*8&&g<h;x++){let m=s()*4600,d=s()*2900,S=(Math.min(n.height-1,Math.floor(d/2900*n.height))*n.width+Math.min(n.width-1,Math.floor(m/4600*n.width)))*4;if(p[S+1]<p[S]+12||p[S+1]<85)continue;let v=m/t,_=d/t,E=e(v,_);E<.1||(f.position.set(v,E-.015,_),f.rotation.set(0,s()*Math.PI*2,0),f.scale.setScalar(.7+s()*.8),f.updateMatrix(),u.setMatrixAt(g,f.matrix),u.setColorAt(g,new Ze().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),g++)}return u.count=g,i.add(u),{update(x,m){c.value=x,m?l.value.set(m.floor.x/t,m.floor.y/t,m.floor.w/(t*2)+.1,m.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){i.remove(u),o.dispose(),a.dispose(),u.dispose()}}}function vu(i,e,{cube:t,tube:n},r){let s=e.width/80,o=e.depth/80,a=e.wallHeight/80,c=e.roofRidge/80;for(let u of i.children)u.name==="floor"&&(u.material=r.surface("paving","#e5ded0",2,.045)),u.name==="wall"&&(u.material=r.surface("plaster","#f8f4e7",1,.025)),u.name==="roof"&&(u.material=r.surface("roof","#efe2d5",2,.045));for(let u of[-1,1]){let p=t(i,"#876742",[u*s/2,a-.09,0],[.13,.16,o+.18]);if(p.name="trim",e.walls.length){let f=t(i,"#a7c4b7",[u*(s/2+.064),1.55,-o*.16],[.02,.9,.7]);f.name="shutter";for(let g=0;g<8;g++)t(i,"#876742",[u*(s/2+.08),1.17+g*.11,-o*.16],[.025,.035,.69]);for(let g of[-o*.16-.39,-o*.16+.39])t(i,"#e2dbc7",[u*(s/2+.078),1.56,g],[.045,1.02,.065])}}let l=n(i,"#ba7655",[0,c+.02,0],[.09,o+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let h=t(i,"#e2dbc7",[0,a-.05,-o/2-.066],[s+.08,.16,.06]);return h.name="trim",i}var Un=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),Yy=Object.freeze(Object.fromEntries(Un.map(i=>[i.id,i])));function Mu(i,e){return!Number.isFinite(i)||!Number.isFinite(e)?null:Un.find(t=>Math.hypot(i-t.x,e-t.z)<=t.radius)??null}function Xr(i,e){if(Number.isFinite(i.coastSeed)){let n=i.coastSeed;return .855+.07*Math.sin(e*2+n)+.045*Math.cos(e*3-n)+.025*Math.sin(e*7+n)}let t=i.x*.002+i.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function Zi(i,e,t){let n=(e-i.x)/i.radius,r=(t-i.z)/i.radius,s=Math.hypot(n,r);if(s>=1)return-.32;let o=Math.atan2(r,n),a=Xr(i,o),c=Math.max(0,Math.min(1,(a-s)/.12));if(s>a)return-.32*Math.min(1,(s-a)/.04);if(Number.isFinite(i.relief)){let f=(a-s)*i.radius/20,g=Math.min(1,f/18),x=Math.max(0,Math.min(1,(f-18)/85)),m=Math.exp(-((n+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((n-.36)**2*11+(r+.25)**2*8))*.42;return .005+g*.65+x*x*(3-2*x)*m*i.relief}let l=Math.max(0,Math.min(1,(.79-s)/.22)),h=l*l*(3-2*l),u=Math.exp(-((n+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((n-.36)**2*11+(r+.25)**2*8))*.42,p=i.biome==="highlands"?8.5:i.biome==="rainforest"?2.2:i.biome==="rocky"?1.6:.55;return .005+c*.35+h*u*p}function dc(i,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,Zi(i,i.x,i.z),0],n=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let h=0;h<=e;h++){let u=h/e*Math.PI*2,p=Number.isFinite(i.relief)?Xr(i,u)+.03:1.02,f=i.radius*p*l/s,g=Math.cos(u)*f,x=Math.sin(u)*f;t.push(g,Zi(i,i.x+g,i.z+x),x),n.push(.5+g/(i.radius*2.04),.5+x/(i.radius*2.04));let m=1+(l-1)*(e+1)+h;if(h!==e)if(l===1)r.push(0,m+1,m);else{let d=m-(e+1);r.push(d,m+1,m,d,d+1,m+1)}}let o=new bt;o.setAttribute("position",new Qe(t,3)),o.setAttribute("uv",new Qe(n,2)),o.setIndex(r),o.computeVertexNormals();let a=new Tt({color:i.biome==="beach"?11779972:5538650,roughness:1,side:Lt}),c=new lt(o,a);return c.name="archipelago-"+i.id,c.position.set(i.x,0,i.z),c.receiveShadow=!0,c}function bu(i={}){let e=new ke;e.name="archipelago-terrain";for(let t of Un)e.add(dc(t,i));return e}function ka(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new bt,l=0;for(let h=0;h<i.length;++h){let u=i[h],p=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let p=0;p<i.length;++p){let f=i[p].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[p].attributes.position.count}c.setIndex(u)}for(let h in s){let u=Su(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<u;++p){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][p]);let g=Su(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Su(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let o=new e(s),a=new Ht(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let p=0,f=h.count;p<f;p++)for(let g=0;g<t;g++){let x=h.getComponent(p,g);a.setComponent(p+u,g,x)}}else o.set(h.array,c);c+=h.count*t}return r!==void 0&&(a.gpuType=r),a}var Ns=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function Ji(i,e,t=Ns){return e==="home"&&t.some(n=>Math.abs(i.x-n.x)<n.w/2+7&&Math.abs(i.z-n.z)<n.d/2+7)}var fc=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function Va(i,{size:e=900,segments:t=72,coastSeeds:n=[]}={}){let r=Array.from({length:9},(c,l)=>new yt(...i[l]||[1e4,1e4,1,1])),s=new fn({fog:!0,uniforms:{...Ia.clone(Se.fog),uTime:{value:0},uEye:{value:new N},uCoasts:{value:r},uCoastSeeds:{value:Array.from({length:9},(c,l)=>n[l]??-100)}},vertexShader:`uniform float uTime;varying vec3 vWater;
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
    }`}),o=new _n(e,e,t,t);o.rotateX(-Math.PI/2);let a=new lt(o,s);return a.name="tropical-ocean",a.position.y=-.045,{mesh:a,update(c,l){s.uniforms.uTime.value=c,s.uniforms.uEye.value.copy(l)},dispose(){o.dispose(),s.dispose()}}}function Ga(i=420){let e=new fn({side:Kt,depthWrite:!1,vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vSky;${fc}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3;float n=fbm21(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`}),t=new lt(new pn(i,32,20),e);return t.name="tropical-sky",t.renderOrder=-10,t.frustumCulled=!1,t}function Ha(i,e){let t=new Tt({roughness:1,color:"#ffffff",vertexColors:!0});return t.onBeforeCompile=n=>{Object.assign(n.uniforms,{uGrass:{value:i.textures.get("grass")},uSand:{value:i.textures.get("sand")},uRock:{value:i.textures.get("rock")}}),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${fc}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=fbm21(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38);
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},t.customProgramCacheKey=()=>`tropical-island-${e}`,t}function T0(i=14){let e=[],t=[],n=[],r=(o,a,c,l)=>{let h=a*2.2,u=Math.sin(a*Math.PI)*.55-a*a*.95;return[Math.sin(o)*h+Math.cos(o)*l*c,u-l*.17,Math.cos(o)*h-Math.sin(o)*l*c]};for(let o=0;o<9;o++){let a=o*Math.PI*2/9;for(let c=1;c<i;c++)for(let l of[-1,1]){let h=c/i,u=Math.sin(h*Math.PI)*.44,p=e.length/3;e.push(...r(a,h-.03,l,.012),...r(a,h-.09,l,u),...r(a,h+.025,l,u*.87),...r(a,h+.03,l,.012)),t.push(h,0,h,.9,h+.03,1,h+.03,0),n.push(p,p+1,p+2,p,p+2,p+3)}}let s=new bt;return s.setAttribute("position",new Qe(e,3)),s.setAttribute("uv",new Qe(t,2)),s.setIndex(n),s.computeVertexNormals(),s}var Yt=(i,e=0)=>{let t=Math.sin((i+1)*12.9898+(e+1)*78.233)*43758.5453;return t-Math.floor(t)};function Wa(i,e,{scale:t,height:n,surfaces:r,small:s=!1,clear:o=()=>!1,dense:a=!1}={}){let c=new It(.085,.16,1,10,8);c.translate(0,.5,0);let l=c.attributes.position;for(let _=0;_<l.count;_++)l.setX(_,l.getX(_)+l.getY(_)**2*.2);c.computeVertexNormals();let h=r.surface("wood","#bc9c71",2,.03),u=r.surface("leaf","#9cb384",1,.01).clone();u.side=Lt;let p=T0(s?9:14),f=[],g=[],x=new vt,m=0;for(let _ of e){let E=[];for(let C=0;C<(a?_.id==="home"?s?700:1500:s?280:650:s?22:42);C++){let y=C+_.x*.013+_.z*.017,T=C*2.39996+_.x*.001+(Yt(y,0)-.5)*.72,U=a?Math.min(.93,Math.max(.12,Math.sqrt(C*.6180339%1)*.91+(Yt(y,1)-.5)*.09)):Math.min(.91,.34+C%7*.075+(Yt(y,1)-.5)*.08),O=_.radius*U,Z=_.x+Math.sin(T)*O,P=_.z+Math.cos(T)*O;o(_,Z,P)||n(Z,P)<.32||E.push({x:Z/t,z:P/t,y:n(Z,P),a:T,h:3.45+Yt(y,2)*2.15,size:.7+Yt(y,3)*.43,leanX:(Yt(y,4)-.5)*.12,leanZ:(Yt(y,5)-.5)*.14,index:m++})}if(!E.length)continue;let b=new Mt(c,h,E.length),R=new Mt(p,u,E.length);b.name=f.length?"grove-trunks-"+_.id:"grove-trunks",R.name=g.length?"grove-fronds-"+_.id:"grove-fronds";for(let C=0;C<E.length;C++){let y=E[C];x.position.set(y.x,y.y,y.z),x.rotation.set(y.leanX,y.a,y.leanZ),x.scale.set(y.size,y.h,y.size),x.updateMatrix(),b.setMatrixAt(C,x.matrix),x.position.set(y.x+.2*y.size*Math.cos(y.a),y.y+y.h,y.z-.2*y.size*Math.sin(y.a)),x.rotation.set(y.leanX*.35,y.a+Yt(y.index,6)*Math.PI*.35,y.leanZ*.35),x.scale.setScalar(y.size),x.updateMatrix(),R.setMatrixAt(C,x.matrix),R.setColorAt(C,new Ze().setHSL(.245+Yt(y.index,7)*.065,.22+Yt(y.index,8)*.13,.59+Yt(y.index,9)*.12))}for(let C of[b,R])C.castShadow=C.receiveShadow=!0,C.instanceMatrix.needsUpdate=!0,C.computeBoundingSphere(),i.add(C);f.push(b),g.push(R)}let d=new Ui(1,1),S=r.surface("rock","#a9aaa0",2,.08),v=[];for(let _ of e){let E=[];for(let R=0;R<(s?14:24);R++){let C=R+_.x*.019+_.z*.023,y=R*2.399+.6+(Yt(C,10)-.5)*.62,T=_.radius*(.84+Yt(C,11)*.1),U=_.x+Math.sin(y)*T,O=_.z+Math.cos(y)*T;o(_,U,O)||E.push({x:U/t,y:n(U,O)-.1,z:O/t,a:y,j:R,seed:C})}if(!E.length)continue;let b=new Mt(d,S,E.length);b.name=v.length?"shore-rocks-"+_.id:"shore-rocks";for(let R=0;R<E.length;R++){let C=E[R];x.position.set(C.x,C.y,C.z),x.rotation.set(Yt(C.seed,12)*1.2,C.a,Yt(C.seed,13)*1.1),x.scale.set(.27+Yt(C.seed,14)*.5,.2+Yt(C.seed,15)*.43,.31+Yt(C.seed,16)*.53),x.updateMatrix(),b.setMatrixAt(R,x.matrix)}b.castShadow=b.receiveShadow=!0,b.instanceMatrix.needsUpdate=!0,b.computeBoundingSphere(),i.add(b),v.push(b)}return{trees:f[0],foliage:g[0],treeBatches:f,foliageBatches:g,rocks:v[0],rockBatches:v}}function Xa(i,{scale:e,height:t,surfaces:n,helpers:r,village:s=Ns,paths:o,marketPoint:a={x:290,z:-30}}){let{cube:c,tube:l,ell:h}=r,u=[];function p(v){let _=new Map;v.updateMatrix();for(let E of[...v.children])if(E.isMesh){E.updateMatrix();let b=E.geometry.clone().applyMatrix4(E.matrix);_.has(E.material)||_.set(E.material,[]),_.get(E.material).push(b),v.remove(E)}for(let[E,b]of _){let R=ka(b,!1);b.forEach(y=>y.dispose());let C=new lt(R,E);C.castShadow=C.receiveShadow=!0,v.add(C)}}function f(v,_=i,E=!0){let b=new ke;b.name="village-house",_.add(b),b.position.set(E?v.x/e:v.x,E?t(v.x,v.z):0,E?v.z/e:v.z),b.rotation.y=v.facing??(v.z>60?Math.PI:0);let R=v.w/e,C=v.d/e,y=v.h,T=c(b,v.color,[0,y/2,0],[R,y,C]);T.material=n.surface("plaster",v.color,2,.035);let U=n.surface("roof","#d5bbab",2,.065);for(let P of[-1,1]){let k=c(b,"#ba7655",[P*R/4,y+.43,0],[Math.hypot(R/2+.25,.85),.13,C+.5]);k.rotation.z=-P*Math.atan2(.85,R/2+.25),k.material=U,c(b,"#a75f45",[P*(R/2+.13),y+.01,0],[.14,.22,C+.58])}let O=l(b,"#a75f45",[0,y+.86,0],[.12,C+.62,.12]);O.rotation.x=Math.PI/2;for(let P of[.17,y*.52,y-.16])c(b,"#e2dbc7",[0,P,C/2+.035],[R+.16,.14,.1]);let Z=y>5?2:1;for(let P=0;P<Z;P++)for(let k of[-R*.31,R*.31]){let X=1.5+P*2.35,ne=C/2+.08,$=c(b,"#415d63",[k,X,ne],[.75,1.2,.05]);$.material.roughness=.24,$.material.metalness=.1,c(b,"#e2dbc7",[k,X,ne+.045],[.065,1.15,.075]),c(b,"#e2dbc7",[k,X,ne+.046],[.7,.065,.076]);for(let re of[-1,1]){let ae=c(b,v.shutter,[k+re*.56,X,ne+.03],[.34,1.3,.07]);ae.rotation.y=re*.24;for(let Me=0;Me<9;Me++)c(b,"#876742",[k+re*.56,X-.52+Me*.13,ne+.085],[.33,.024,.04])}if(c(b,"#e2dbc7",[k,X-.68,ne],[1.7,.1,.16]),c(b,"#e2dbc7",[k,X+.68,ne],[1.7,.13,.15]),P===0){let re=c(b,"#876742",[k,.79,C/2+.25],[1.28,.2,.3]);if(re.rotation.x=-.04,h)for(let ae=-2;ae<=2;ae++){let Me=h(b,ae%2?"#6f8f58":"#88a866",[k+ae*.22,.99+Math.abs(ae)*.025,C/2+.27],[.17,.31,.15]);Me.rotation.z=ae*.14}if(Z===1){let ae=c(b,v.shutter,[k,2.32,C/2+.46],[1.55,.08,.82]);ae.rotation.x=-.15,c(b,v.shutter,[k,2.2,C/2+.83],[1.55,.17,.07])}}}c(b,"#5a4b3d",[0,1.05,C/2+.06],[.78,2.1,.1]);for(let P of[.55,1.42])for(let k of[-.19,.19])c(b,"#745f4c",[k,P,C/2+.125],[.29,.6,.045]);for(let P of[-.48,.48])c(b,"#e2dbc7",[P,1.08,C/2+.11],[.16,2.22,.18]);if(c(b,"#e2dbc7",[0,2.18,C/2+.11],[1.1,.16,.18]),c(b,"#c9baa1",[0,.07,C/2+.34],[1.16,.14,.58]),h&&h(b,"#caa457",[.27,1.04,C/2+.19],[.055,.055,.035]),Z===2){c(b,"#e2dbc7",[0,2.75,C/2+.48],[R+.15,.18,.9]);for(let P=0;P<=10;P++)l(b,"#e2dbc7",[-R/2+P*R/10,3.18,C/2+.84],[.034,.76,.034]);c(b,"#e2dbc7",[0,3.58,C/2+.84],[R+.17,.08,.1])}for(let P of[-1,1])for(let k=0;k<Z;k++)for(let X of[-C*.26,C*.26])c(b,v.shutter,[P*(R/2+.03),1.5+k*2.35,X],[.06,1.22,.8]),c(b,"#e2dbc7",[P*(R/2+.07),.82+k*2.35,X],[.16,.1,1.05]),c(b,"#e2dbc7",[P*(R/2+.07),2.18+k*2.35,X],[.16,.12,1.05]);return b.userData.facadeDetails={planters:2,awnings:Z===1?2:0,balcony:Z===2,windowPanes:Z*8,doorPanels:4,doorway:!0,ridgeCaps:1,eaveFascias:2},p(b),u.push(b),b}for(let v of s)f(v);function g(v,_,E=!1){let b=[],R=[],C=[],y=0;for(let O=0;O<v.length;O++){let Z=v[Math.max(0,O-1)],P=v[Math.min(v.length-1,O+1)],k=v[O],X=P.x-Z.x,ne=P.z-Z.z,$=Math.hypot(X,ne)||1;O&&(y+=Math.hypot(k.x-v[O-1].x,k.z-v[O-1].z)/e);for(let re of[-1,1]){let ae=k.x-ne/$*_/2*re,Me=k.z+X/$*_/2*re;b.push(ae/e,t(ae,Me)+.018,Me/e),R.push((re+1)/2*_/e,y)}if(O){let re=O*2;C.push(re-2,re-1,re,re-1,re+1,re)}}let T=new bt;T.setAttribute("position",new Qe(b,3)),T.setAttribute("uv",new Qe(R,2)),T.setIndex(C),T.computeVertexNormals();let U=new lt(T,n.surface("paving","#ded9c9",.75,.045));if(U.name="village-path",U.receiveShadow=!0,i.add(U),E){let O=Math.max(4,_*.08),Z=new $t(1,1,1),P=new Mt(Z,n.surface("rock","#dad4c6",1.2,.025),(v.length-1)*2),k=new vt;P.name="village-curb";let X=0;for(let ne=1;ne<v.length;ne++){let $=v[ne-1],re=v[ne],ae=re.x-$.x,Me=re.z-$.z,Oe=Math.hypot(ae,Me),ot=-Me/Oe,ct=ae/Oe;for(let ht of[-1,1]){let ee=($.x+re.x)/2+ot*(_/2+O/2)*ht,Q=($.z+re.z)/2+ct*(_/2+O/2)*ht;k.position.set(ee/e,t(ee,Q)+.065,Q/e),k.rotation.set(0,Math.atan2(ae,Me),0),k.scale.set(O/e,.1,Oe/e+.025),k.updateMatrix(),P.setMatrixAt(X++,k.matrix)}}P.castShadow=P.receiveShadow=!0,P.instanceMatrix.needsUpdate=!0,P.computeBoundingSphere(),i.add(P)}}let x=[];for(let v of o||[{points:Array.from({length:31},(_,E)=>({x:385-E*21,z:36+Math.sin(E*.19)*9})),width:55,curb:!0},{points:Array.from({length:15},(_,E)=>({x:23,z:-280+E*39})),width:40,curb:!0}]){let _=[v.points[0]];for(let E=1;E<v.points.length;E++){let b=v.points[E-1],R=v.points[E],C=Math.ceil(Math.hypot(R.x-b.x,R.z-b.z)/30);for(let y=1;y<=C;y++)_.push({x:b.x+(R.x-b.x)*y/C,z:b.z+(R.z-b.z)*y/C})}if(g(_,v.width,v.curb),v.curb)for(let E=3;E<v.points.length-3;E+=6){let b=v.points[E-1],R=v.points[E+1],C=v.points[E],y=R.x-b.x,T=R.z-b.z,U=Math.hypot(y,T)||1,O=Math.floor(E/6)%2?1:-1,Z=v.width/2+9,P=C.x-T/U*Z*O,k=C.z+y/U*Z*O;x.push({x:P/e,y:t(P,k),z:k/e})}}if(x.length){let v=new It(1,1,1,10),_=new pn(1,12,8),E=new vt,b=new Mt(v,new Tt({color:"#394447",roughness:.62,metalness:.38}),x.length),R=new Mt(_,new Tt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34}),x.length);b.name="village-lamp-posts",R.name="village-lamp-globes";for(let C=0;C<x.length;C++){let y=x[C];E.position.set(y.x,y.y+1.35,y.z),E.scale.set(.065,2.7,.065),E.updateMatrix(),b.setMatrixAt(C,E.matrix),E.position.set(y.x,y.y+2.76,y.z),E.scale.set(.18,.22,.18),E.updateMatrix(),R.setMatrixAt(C,E.matrix)}b.castShadow=b.receiveShadow=!0,R.castShadow=!1,R.receiveShadow=!0;for(let C of[b,R])C.instanceMatrix.needsUpdate=!0,C.computeBoundingSphere(),i.add(C)}let m=new ke;m.name="harbor-market",m.position.set(a.x/e,t(a.x,a.z),a.z/e),i.add(m);for(let v of[-1.4,1.4])for(let _ of[-.6,.6])l(m,"#876742",[v,1.2,_],[.045,2.4,.045]);let d=c(m,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);d.rotation.x=.07;for(let v=0;v<6;v++){let _=v%2?"#f3dfbe":"#bd6f53",E=(v-2.5)*.53,b=c(m,_,[E,2.395,0],[.53,.035,1.76]);b.rotation.x=.07,c(m,_,[E,2.27,.92],[.49,.18,.055])}c(m,"#a98961",[0,.7,0],[2.8,.15,.9]);let S=["#ce5949","#e6b64d","#709a55"];for(let v=0;v<5;v++){let _=(v-2)*.5;if(c(m,"#a68854",[_,.88,0],[.43,.2,.68]),h)for(let E=0;E<3;E++)h(m,S[(v+E)%S.length],[_+(E-1)*.11,1.05,E%2?-.11:.11],[.075,.085,.075])}return m.userData.marketDetails={canopyStripes:6,valances:6,produce:15},p(m),{building:f,houses:u}}var Ke=20;var hn=Un.map((i,e)=>({...i,x:i.x*16,z:i.z*16,dock:{x:i.dock.x*16,z:i.dock.z*16},radius:i.id==="home"?9e3:i.radius*16,coastSeed:1.3+e*1.7,relief:i.id==="home"?24:i.biome==="highlands"?85:i.biome==="rainforest"?42:i.biome==="rocky"?28:12})),mc=Object.fromEntries(hn.map(i=>[i.id,i])),Zr={minX:Math.min(...hn.map(i=>i.x-i.radius))-1600,maxX:Math.max(...hn.map(i=>i.x+i.radius))+1600,minZ:Math.min(...hn.map(i=>i.z-i.radius))-1600,maxZ:Math.max(...hn.map(i=>i.z+i.radius))+1600},wu=(i,e)=>hn.find(t=>Math.hypot(i-t.x,e-t.z)<t.radius)||null,gt=Object.fromEntries(hn.map((i,e)=>{let t=Un[e],n=Math.hypot(t.dock.x-t.x,t.dock.z-t.z),r=(t.dock.x-t.x)/n,s=(t.dock.z-t.z)/n,o=i.radius*Xr(i,Math.atan2(s,r)),a=c=>({x:i.x+r*c,z:i.z+s*c});return[i.id,{id:i.id,...a(o+320),ux:r,uz:s,land:a(o-320),end:a(o+240),shore:a(o+200),width:38,deck:.72}]})),Yr={x:gt.home.land.x-385,z:gt.home.land.z-40},$i=Ns.map(i=>({...i,x:i.x+Yr.x,z:i.z+Yr.z,facing:i.z>60?Math.PI:0})),qr=(i,e)=>({x:i+Yr.x,z:e+Yr.z}),Fs=[{width:55,curb:!0,points:Array.from({length:31},(i,e)=>e===0?{...gt.home.land}:qr(385-e*21,36+Math.sin(e*.19)*9))},{width:40,curb:!0,points:Array.from({length:15},(i,e)=>qr(23,-280+e*39))},{width:36,points:[qr(-245,40),qr(-600,30),{x:mc.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}],Tu=qr(290,-30),zt={x:gt.fortress.land.x-gt.fortress.ux*800,z:gt.fortress.land.z-gt.fortress.uz*800},Eu={x:zt.x-115,z:zt.z+145},et={pump:qr(330,65),cave:{x:gt.jungle.land.x-gt.jungle.ux*700,z:gt.jungle.land.z-gt.jungle.uz*700},estate:{x:zt.x,z:zt.z+102},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}};et.supply={x:et.cave.x+150,z:et.cave.z-105};var E0=[{id:"gate",area:null,...Eu,hp:2},{id:"patrol",area:null,x:zt.x+110,z:zt.z+85,hp:2},{id:"hall",area:"estate",x:-65,z:15,hp:2},{id:"boss",area:"estate",x:0,z:-60,hp:3}];function pc(i,e,t){return t=Math.max(0,Math.min(1,t)),t=t*t*(3-2*t),i+(e-i)*t}function Ki(i,e,t=wu(i,e)){if(!t)return-.32;let n=Zi(t,i,e);if(n<=.01)return n;if(t.id==="home"){let r=Math.hypot(i-Yr.x+80,e-Yr.z);r<820&&(n=pc(.68,n,(r-470)/350))}if(t.id==="fortress"){let r=Math.max(Math.abs(i-zt.x),Math.abs(e-zt.z));r<400&&(n=pc(.85,n,(r-180)/220))}if(t.id==="jungle"){let r=Math.hypot(i-et.cave.x,e-et.cave.z);r<230&&(n=pc(1.2,n,(r-100)/130))}return n}function gc(i,e,t){for(let n of t?[gt[t]]:Object.values(gt)){if(!n)continue;let r=i-n.land.x,s=e-n.land.z,o=r*n.ux+s*n.uz,a=r*n.uz-s*n.ux,c=Math.hypot(n.end.x-n.land.x,n.end.z-n.land.z);if(o>=-.5&&o<=c+.5&&Math.abs(a)<=n.width/2){let l=Ki(n.land.x,n.land.z);return{dock:n,height:l+(n.deck-l)*Math.max(0,Math.min(1,o/c))}}}return null}function Vn(i,e){return gc(i,e)?.height??Ki(i,e)}function qa(i,e){return Fs.some(t=>t.points.some((n,r)=>{if(!r)return!1;let s=t.points[r-1],o=n.x-s.x,a=n.z-s.z,c=Math.max(0,Math.min(1,((i-s.x)*o+(e-s.z)*a)/(o*o+a*a)));return Math.hypot(i-s.x-o*c,e-s.z-a*c)<t.width/2+35}))}var ov=Object.fromEntries(Un.map(i=>{let e=Math.hypot(i.dock.x-i.x,i.dock.z-i.z),t=(i.dock.x-i.x)/e,n=(i.dock.z-i.z)/e;return[i.id,{x:i.x+t*i.radius*1.06,z:i.z+n*i.radius*1.06,shore:{x:i.x+t*i.radius*.84,z:i.z+n*i.radius*.84}}]}));var Jr={seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};function Au(i,{cube:e,ell:t,mat:n}){let r=new ke;r.name="campaign-boat",i.add(r),t(r,"#233f52",[0,.05,0],[.85,.36,1.9]),t(r,"#dedbd0",[0,.22,0],[.8,.23,1.85]);let s=e(r,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]);s.name="boat-deck";let o=e(r,"#3b5355",[0,.57,Jr.seatZ],[.92,.3,.48]);o.name="boat-seat",e(r,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let a=new lt(new $t(1.2,.48,.025),new bs({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));a.position.set(0,1.15,.68),r.add(a);let c=new lt(new ti(.2,.026,8,20),n("#2e3538"));c.name="boat-wheel",c.position.set(0,1.05,.28),r.add(c);let l=new It(1,1,1,8),h=new Mt(l,n("#d6dedc"),10),u=new vt;h.name="boat-rails";let p=0;for(let S of[-.68,.68]){for(let v of[.15,.85,1.55])u.position.set(S,.75,v),u.rotation.set(0,0,0),u.scale.set(.025,.5,.025),u.updateMatrix(),h.setMatrixAt(p++,u.matrix);for(let v of[.86,1.01])u.position.set(S,v,.85),u.rotation.set(Math.PI/2,0,0),u.scale.set(.025,1.4,.025),u.updateMatrix(),h.setMatrixAt(p++,u.matrix)}h.castShadow=!0,h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere(),r.add(h);let f=new Tt({color:"#b7d6d8",emissive:"#31545a",emissiveIntensity:.38,roughness:.28}),g=new Mt(new It(.1,.1,.03,16),f,3);g.name="boat-gauges";for(let S=0;S<3;S++)u.position.set((S-1)*.28,.91,.3),u.rotation.set(Math.PI/2,0,0),u.scale.set(S===1?1:.82,S===1?1:.82,1),u.updateMatrix(),g.setMatrixAt(S,u.matrix);g.instanceMatrix.needsUpdate=!0,g.computeBoundingSphere(),r.add(g);let x=t(r,"#d84e46",[-.65,.79,.94],[.075,.075,.075]),m=t(r,"#52b878",[.65,.79,.94],[.075,.075,.075]);x.name="boat-port-light",m.name="boat-starboard-light",x.material=new Tt({color:"#d84e46",emissive:"#b32b25",emissiveIntensity:.9}),m.material=new Tt({color:"#52b878",emissive:"#238547",emissiveIntensity:.9}),e(r,"#303b40",[0,.35,-1.75],[.42,.6,.38]),e(r,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let d=new lt(new _n(1.5,5),new dn({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));return d.rotation.x=-Math.PI/2,d.position.set(0,.03,-3.3),r.add(d),r.userData.boatDetails={rails:10,gauges:3,navigationLights:2},{boat:r,wake:d}}function Cu(i,e){e.add(i.root),i.root.position.set(0,0,Jr.seatZ),i.root.rotation.set(0,0,0),i.rig.rotation.set(0,0,0),i.hips.position.y=Jr.hips;for(let t of i.arms)t.arm.rotation.x=-.85,t.arm.rotation.z=-t.side*.18,t.forearm.rotation.x=-.72;for(let t of i.legs)t.thigh.rotation.x=-1.68,t.calf.rotation.x=1.68,t.shoe.rotation.x=0}var vi=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);var ri=Array.from({length:5},(i,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2}));function A0(i){return Object.values(gt).filter(e=>vi(e,i.p)<125).sort((e,t)=>vi(e,i.p)-vi(t,i.p))[0]}function C0(i){if(i.interior==="cave")return[{id:"paper",...et.paper,label:i.paper?i.gun?"supplies":"take-gun":"move-paper"},{id:"cave-exit",...et.caveExit,label:"leave-cave"}];if(i.interior==="estate")return[{id:"key",...et.key,label:"take-key"},{id:"stairs",...et.stairs,label:"cellar"},{id:"estate-exit",...et.estateExit,label:"leave-estate"}];if(i.interior==="cellar")return[...ri.filter(n=>!i.released.includes(n.id)).map(n=>({...n,id:"cell-"+n.id,label:"free-person"})),{id:"cellar-exit",...et.cellarExit,label:"upstairs"}];if(i.boat){let n=A0(i);return n?[{...n,id:"dock-"+n.id,label:"dock"}]:[]}let e=gt[i.island],t=[{...e.shore,id:"boat",label:i.released.length===5&&!i.boarded?"board-group":"boat"}];if(i.island==="home"&&t.push({id:"pump",...et.pump,label:"refuel"}),i.island==="jungle"&&t.push({id:"cave",...et.cave,label:"enter-cave"},{id:"supply",...et.supply,label:"supplies"}),i.island==="fortress"&&t.push({id:"estate",...et.estate,label:"enter-estate"}),["highlands","smugglers","paradise"].includes(i.island)){let n=mc[i.island];t.push({id:"supplies",x:n.x,z:n.z,label:"supplies"})}return t}function Ru(i){return C0(i).filter(e=>vi(e,i.p)<(e.id.startsWith("cell-")?85:e.id.startsWith("dock-")?125:65)).sort((e,t)=>vi(e,i.p)-vi(t,i.p))[0]||null}function R0(i){if(i.complete)return{key:"complete",target:null};if(!i.docked)return{key:"dock-goal",target:gt.home};if(!i.tanked)return{key:"fuel-goal",target:i.boat?gt.home:et.pump};if(!i.gun)return i.interior==="cave"?{key:i.paper?"gun-goal":"paper-goal",target:et.paper}:{key:"cave-goal",target:i.boat?gt.jungle:i.island==="jungle"?et.cave:gt[i.island].shore};if(i.interior==="cave")return{key:"exit-cave-goal",target:et.caveExit};if(!i.key){if(i.interior==="estate"){let e=i.guards.find(t=>t.id==="boss");return{key:e.hp>0?"boss-goal":"key-goal",target:e.hp>0?e:et.key}}return{key:"estate-goal",target:i.boat?gt.fortress:i.island==="fortress"?et.estate:gt[i.island].shore}}return i.released.length<5?i.interior==="cellar"?{key:"people-goal",target:ri.find(e=>!i.released.includes(e.id))}:{key:"cellar-goal",target:i.interior==="estate"?et.stairs:i.boat?gt.fortress:et.estate}:i.interior?{key:"escort-goal",target:i.interior==="cellar"?et.cellarExit:et.estateExit}:i.boarded?{key:"home-goal",target:i.boat?gt.home:i.island==="home"?gt.home.shore:gt[i.island].shore}:{key:"boat-goal",target:gt.fortress.shore}}function zs(i){let e=R0(i);if(i.boat||i.interior||!e.target)return e;let t=gt[i.island],n=!!gc(i.p.x,i.p.z,i.island);if(e.target===t.shore){if(!n&&vi(i.p,t.land)>65)return{...e,target:t.land}}else if(n&&vi(i.p,t.land)>45)return{...e,target:t.land};return e}function xc(i,e,t,n,r){let s=e.interior?1.8:e.boat?.65:1.3;if(i.fillStyle=e.interior?"#25312d":"#176475",i.fillRect(0,0,t,n),i.save(),i.translate(t/2-e.p.x*s,n/2-e.p.z*s),i.scale(s,s),e.interior){if(i.fillStyle="#6f7568",i.fillRect(-115,-125,230,310),i.strokeStyle="#beb99e",i.lineWidth=8,i.strokeRect(-115,-125,230,310),e.interior==="cave"&&(i.fillStyle="#967756",i.fillRect(-25,-60,50,35),i.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||i.fillRect(-17,-55,34,22)),e.interior==="estate"&&(i.fillStyle="#9b7751",i.fillRect(-45,-105,90,25),i.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&i.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of ri)i.strokeStyle="#bac6bf",e.released.includes(l.id)||i.strokeRect(l.x-18,-112,36,80)}else{for(let l of hn){a(l,1,"#398b8b",-4*Ke),a(l,1,"#d9cba2"),a(l,1,l.biome==="highlands"?"#8f9882":"#759575",18*Ke);for(let u=0;u<26;u++){let p=u*2.39996+l.x*.001,f=l.radius*(.36+u%7*.075),g=l.x+Math.sin(p)*f,x=l.z+Math.cos(p)*f;if(!(l.id==="home"&&(Ji({x:g,z:x},l.id,$i)||qa(g,x)))&&!(l.id==="fortress"&&Math.abs(g-zt.x)<125&&Math.abs(x-zt.z)<155)){i.strokeStyle="#365e49",i.lineWidth=5;for(let m=0;m<7;m++){let d=m*Math.PI*2/7;i.beginPath(),i.moveTo(g,x),i.quadraticCurveTo(g+Math.sin(d+.25)*13,x+Math.cos(d+.25)*13,g+Math.sin(d)*25,x+Math.cos(d)*25),i.stroke()}}}i.fillStyle="#fff4cc",i.font="18px system-ui",i.textAlign="center",i.fillText(r(l.id),l.x,l.z-l.radius*.58);let h=gt[l.id];i.strokeStyle="#a2865b",i.lineWidth=h.width,i.beginPath(),i.moveTo(h.land.x,h.land.z),i.lineTo(h.end.x,h.end.z),i.stroke()}for(let l of Fs)i.strokeStyle="#b7baa5",i.lineWidth=l.width,i.beginPath(),l.points.forEach((h,u)=>u?i.lineTo(h.x,h.z):i.moveTo(h.x,h.z)),i.stroke();for(let l of $i)i.fillStyle="#304f43",i.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),i.fillStyle=l.color,i.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),i.fillStyle="#ab7861",i.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),i.strokeStyle="#d4aa83",i.lineWidth=4,i.beginPath(),i.moveTo(l.x-l.w/2,l.z),i.lineTo(l.x+l.w/2,l.z),i.stroke();i.fillStyle="#e0d5b9",i.fillRect(zt.x-80,zt.z-80,160,160),i.fillStyle="#352e25",i.fillRect(zt.x-20,zt.z+76,40,12),i.fillStyle="#404b40",i.fillRect(et.cave.x-36,et.cave.z-30,72,36),i.fillStyle="#d28757",i.fillRect(et.pump.x-15,et.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of ri)e.released.includes(l.id)||c(l,"#d3dcbe",10);let o=zs(e).target;o&&(i.strokeStyle="#f5d281",i.lineWidth=3,i.beginPath(),i.arc(o.x,o.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),i.stroke()),i.save(),i.translate(e.p.x,e.p.z),i.rotate(-e.heading),e.boat?(i.fillStyle="#efe4c9",i.beginPath(),i.moveTo(-18,-32),i.lineTo(18,-32),i.lineTo(22,28),i.lineTo(0,50),i.lineTo(-22,28),i.closePath(),i.fill()):(i.fillStyle="#b6ddd3",i.beginPath(),i.arc(0,0,9,0,Math.PI*2),i.fill()),i.strokeStyle="#fff6c7",i.lineWidth=3,i.beginPath(),i.moveTo(0,6),i.lineTo(0,28),i.stroke(),i.restore(),e.shot&&(i.strokeStyle="#ffeac5",i.lineWidth=2,i.beginPath(),i.moveTo(e.shot.from.x,e.shot.from.z),i.lineTo(e.shot.to.x,e.shot.to.z),i.stroke()),i.restore();function a(l,h,u,p=0){i.fillStyle=u,i.beginPath();for(let f=0;f<=96;f++){let g=f/96*Math.PI*2,x=l.radius*Xr(l,g)*h-p,m=l.x+Math.cos(g)*x,d=l.z+Math.sin(g)*x;f?i.lineTo(m,d):i.moveTo(m,d)}i.closePath(),i.fill()}function c(l,h,u){i.fillStyle=h,i.beginPath(),i.arc(l.x,l.z,u,0,Math.PI*2),i.fill()}}function Iu({canvas:i,getState:e,makeHuman:t,onLost:n,rendererFactory:r=s=>new Gr(s)}){let s=r({canvas:i,antialias:!0,powerPreference:"high-performance"}),o=innerWidth<=700;s.setPixelRatio(Math.min(devicePixelRatio||1,o?1.1:1.5)),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Ft,s.toneMapping=Ur,s.shadowMap.enabled=!0,s.shadowMap.type=Lr;let a=new Di,c=new Gt(68,innerWidth/innerHeight,.04,6e3);a.add(c),a.background=new Ze("#b9dbe5"),a.fog=new Pi("#b9dbe5",650,2400);let l=new zi("#d5ecfa","#566143",2),h=new Bi("#fff2d6",2.8);h.castShadow=!0,h.shadow.mapSize.set(o?1024:2048,o?1024:2048),Object.assign(h.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),h.shadow.normalBias=.025,a.add(l,h,h.target);let u=za(s),p=new Map,f=new Map,g=V=>(p.has(V)||p.set(V,u.forColor(V)||new Tt({color:V,roughness:.85})),p.get(V)),x=(V,H)=>(f.has(V)||f.set(V,H()),f.get(V)),m=(V,H,fe,ge=[0,0,0],mt=[1,1,1])=>{let je=new lt(H,fe);return je.position.set(...ge),je.scale.set(...mt),je.castShadow=je.receiveShadow=!0,V.add(je),je},d=(V,H,fe,ge)=>m(V,x("box",()=>new $t),g(H),fe,ge),S=(V,H,fe,ge)=>m(V,x("cylinder",()=>new It(1,1,1,12)),g(H),fe,ge),v=(V,H,fe,ge)=>m(V,x("sphere",()=>new pn(1,16,12)),g(H),fe,ge),_={mat:g,geo:x,mesh:m,cube:d,tube:S,ell:v},E=new ke,b=new ke,R=V=>{let H=new Map;V.updateMatrix();for(let fe of[...V.children])if(fe.isMesh){fe.updateMatrix();let ge=fe.geometry.clone().applyMatrix4(fe.matrix);H.has(fe.material)||H.set(fe.material,[]),H.get(fe.material).push(ge),V.remove(fe)}for(let[fe,ge]of H){let mt=ka(ge,!1);ge.forEach(Dt=>Dt.dispose());let je=new lt(mt,fe);je.castShadow=je.receiveShadow=!0,V.add(je)}},C=(V,H,fe)=>{let ge=new ke;ge.name="campaign-supply-cache-"+V,ge.position.set(H/Ke,Vn(H,fe),fe/Ke),E.add(ge),d(ge,"#a98961",[0,.34,0],[1.45,.68,.88]),d(ge,"#debb63",[0,.72,0],[1.52,.09,.94]);for(let mt of[-.54,.54])d(ge,"#debb63",[mt,.35,.46],[.1,.62,.06]);d(ge,"#bd6e4e",[-1.02,.42,.04],[.42,.84,.55]),d(ge,"#394447",[-1.02,.87,.04],[.2,.08,.22]);for(let mt of[-1.15,-.89])d(ge,"#394447",[mt,.75,.04],[.05,.24,.05]);return d(ge,"#394447",[-1.02,.84,.04],[.26,.05,.05]),d(ge,"#596b4e",[.93,.23,.04],[.72,.46,.58]),d(ge,"#394447",[.93,.48,.04],[.48,.05,.26]),d(ge,"#e2dbc7",[.82,.86,-.03],[.7,.34,.5]),d(ge,"#bd6e4e",[.82,.87,.235],[.34,.08,.025]),d(ge,"#bd6e4e",[.82,.87,.235],[.08,.25,.025]),ge.userData.supplyDetails={crate:!0,fuelCan:!0,medkit:!0,ammoBox:!0},R(ge),ge};a.add(E,b);for(let V of hn){let H=dc(V,{segments:o?96:192});H.scale.set(1/Ke,1,1/Ke),H.position.set(V.x/Ke,0,V.z/Ke);let fe=H.geometry.attributes.position;for(let J=0;J<fe.count;J++)fe.setY(J,Ki(V.x+fe.getX(J),V.z+fe.getZ(J),V));let ge=new Float32Array(fe.count*3),mt=new Ze;for(let J=0;J<fe.count;J++){let W=Math.hypot(fe.getX(J),fe.getZ(J))/V.radius;mt.set(W>.8?"#fff7e4":V.biome==="rocky"?"#d1d4c5":"#dce2c8"),mt.toArray(ge,J*3)}H.geometry.setAttribute("color",new Ht(ge,3)),H.geometry.computeVertexNormals(),H.material.dispose(),H.material=Ha(u,Ke),H.material.vertexColors=!0,E.add(H);let je=gt[V.id],Dt=new ke,Nt=Ki(je.land.x,je.land.z);Dt.name="pier-"+V.id,Dt.position.set(je.land.x/Ke,Nt,je.land.z/Ke),Dt.rotation.y=Math.atan2(je.ux,je.uz),E.add(Dt);let w=Os(je.end,je.land)/Ke,G=Math.ceil(w/.26),Y=new Mt(x("box",()=>new $t),g("#a98961"),G+1),B=new vt;Y.name="pier-deck-"+V.id;for(let J=0;J<=G;J++){let W=w*J/G;B.position.set(0,(je.deck-Nt)*J/G-.075,W),B.scale.set(je.width/Ke,.15,w/G+.006),B.updateMatrix(),Y.setMatrixAt(J,B.matrix)}Y.castShadow=Y.receiveShadow=!0,Dt.add(Y);let z=x("pier-piling",()=>new It(1,1,1,12)),se=new Mt(z,g("#876742"),8);se.name="pier-pilings-"+V.id;let ve=0;for(let J of[-.8,.8])for(let W of[0,w*.33,w*.66,w]){let j=(je.deck-Nt)*W/w;B.position.set(J,j-.65,W),B.scale.set(.075,1.6,.075),B.updateMatrix(),se.setMatrixAt(ve++,B.matrix)}se.castShadow=se.receiveShadow=!0,se.instanceMatrix.needsUpdate=!0,se.computeBoundingSphere(),Dt.add(se);let A=new Mt(z,g("#394447"),8);A.name="pier-bollards-"+V.id;let D=0;for(let J of[-.72,.72])for(let W of[w*.78,w*.98]){let j=(je.deck-Nt)*W/w;B.position.set(J,j+.25,W),B.scale.set(.075,.5,.075),B.updateMatrix(),A.setMatrixAt(D++,B.matrix),B.position.set(J,j+.51,W),B.scale.set(.13,.08,.13),B.updateMatrix(),A.setMatrixAt(D++,B.matrix)}A.castShadow=A.receiveShadow=!0,A.instanceMatrix.needsUpdate=!0,A.computeBoundingSphere(),Dt.add(A),["paradise","smugglers","highlands"].includes(V.id)&&C(V.id,V.x,V.z)}C("jungle",et.supply.x,et.supply.z);let y=Math.max(Zr.maxX-Zr.minX,Zr.maxZ-Zr.minZ)/Ke+12e3,T=Va(hn.map(V=>[V.x/Ke,V.z/Ke,V.radius/Ke,V.radius/Ke]),{size:y,coastSeeds:hn.map(V=>V.coastSeed)});E.add(T.mesh);let U=Ga(5e3);E.add(U);let O=Wa(E,hn,{scale:Ke,height:Ki,surfaces:u,small:o,dense:!0,clear:(V,H,fe)=>Ji({x:H,z:fe},V.id,$i)||V.id==="home"&&qa(H,fe)||V.id==="jungle"&&(Os({x:H,z:fe},et.cave)<100||Os({x:H,z:fe},et.supply)<58)||V.id==="fortress"&&Math.abs(H-zt.x)<125&&Math.abs(fe-zt.z)<155||Os({x:H,z:fe},gt[V.id].land)<90}),Z=Xa(E,{scale:Ke,height:Ki,surfaces:u,helpers:_,village:$i,paths:Fs,marketPoint:Tu}),{boat:P,wake:k}=Au(E,_),X=new ke;X.name="harbor-fuel-pump",X.position.set(et.pump.x/Ke,Vn(et.pump.x,et.pump.z),et.pump.z/Ke),E.add(X),d(X,"#a98961",[0,.06,0],[1.05,.12,.92]),d(X,"#e6d6b8",[0,.68,0],[.75,1.24,.65]),d(X,"#bd6e4e",[0,1.34,0],[.82,.28,.72]),d(X,"#263f41",[0,.99,.34],[.48,.25,.045]),d(X,"#e8d99e",[0,.99,.37],[.31,.1,.018]),S(X,"#2d3435",[.53,.72,0],[.035,1.18,.035]);let ne=d(X,"#394447",[.53,.39,.29],[.1,.24,.08]);ne.rotation.z=-.22,d(X,"#bd6e4e",[0,.39,.35],[.3,.1,.055]),S(X,"#e6d6b8",[0,2.18,-.06],[.055,1.42,.055]);let $=S(X,"#bd6e4e",[0,2.9,-.06],[.42,.1,.42]);$.rotation.x=Math.PI/2;let re=S(X,"#f3dfbe",[0,2.9,.005],[.31,.115,.31]);re.rotation.x=Math.PI/2,X.userData.fuelDetails={display:!0,hose:!0,nozzle:!0,marker:!0},R(X);let ae=new ke;ae.name="campaign-cave-entrance",ae.position.set(et.cave.x/Ke,Vn(et.cave.x,et.cave.z),et.cave.z/Ke),E.add(ae);let Me=[[-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],[2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],[-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]],Oe=new vt,ot=new Mt(x("cave-mouth-rock",()=>new pn(1,12,8)),g("#92968b"),Me.length);ot.name="cave-entrance-rocks",ot.castShadow=!0,ot.receiveShadow=!0,Me.forEach(([V,H,fe,ge,mt,je,Dt],Nt)=>{Oe.position.set(V,H,fe),Oe.scale.set(ge,mt,je),Oe.rotation.set(0,0,Dt),Oe.updateMatrix(),ot.setMatrixAt(Nt,Oe.matrix)}),ot.instanceMatrix.needsUpdate=!0,ot.computeBoundingSphere(),ae.add(ot),d(ae,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let ct=new Mt(x("cave-torch-handle",()=>new It(1,1,1,7)),g("#4c3525"),2);ct.name="cave-entrance-torches",ct.castShadow=!0;let ht=new Tt({color:"#ffcf75",emissive:"#ff7f32",emissiveIntensity:1.15,roughness:.55}),ee=new Mt(x("cave-torch-flame",()=>new In(1,1,7)),ht,2);ee.name="cave-entrance-flames",[-1,1].forEach((V,H)=>{Oe.position.set(V*1.18,1.15,.18),Oe.scale.set(.035,.85,.035),Oe.rotation.set(0,0,-V*.15),Oe.updateMatrix(),ct.setMatrixAt(H,Oe.matrix),Oe.position.set(V*1.18,1.65,.18),Oe.scale.set(.12,.22,.12),Oe.rotation.set(0,0,V*.08),Oe.updateMatrix(),ee.setMatrixAt(H,Oe.matrix)}),ct.instanceMatrix.needsUpdate=!0,ee.instanceMatrix.needsUpdate=!0,ct.computeBoundingSphere(),ee.computeBoundingSphere(),ae.add(ct,ee),ae.userData.entranceDetails={archStones:12,torches:2,clearOpening:!0};let Q=new ke;Q.name="guarded-estate",Q.position.set(zt.x/Ke,.85,zt.z/Ke),E.add(Q),d(Q,"#e2dbc7",[0,1.55,0],[8,3.1,8]),d(Q,"#a68854",[0,3.2,0],[8.6,.25,8.6]),d(Q,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let V of[-1,1]){let H=d(Q,"#ba7655",[V*1.7,5.9,-.4],[3.7,.15,7.4]);H.rotation.z=-V*.3}d(Q,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let V of[-2.7,2.7])for(let H of[1.7,4.3])d(Q,"#425761",[V,H,4.04],[1.15,1.3,.06]),d(Q,"#e2dbc7",[V,H,4.11],[.08,1.38,.08]),d(Q,"#e2dbc7",[V,H,4.11],[1.2,.08,.08]);for(let V of[-1.4,1.4])S(Q,"#e2dbc7",[V,1.3,4.65],[.16,2.6,.16]);d(Q,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let V=0;V<3;V++)d(Q,"#92968b",[0,-.03+V*.06,4.4+V*.4],[2.6,.15,1.25-V*.25]);for(let V of[-3.4,3.4])for(let H of[1.7,4.3]){d(Q,"#587e7c",[V,H,4.07],[.32,1.35,.1]);for(let fe=0;fe<8;fe++)d(Q,"#876742",[V,H-.5+fe*.14,4.14],[.3,.025,.045])}d(Q,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let V=-10;V<=10;V++)S(Q,"#e2dbc7",[V*.39,3.57,5.05],[.033,.83,.033]);d(Q,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);for(let V of[-2.45,2.45]){d(Q,"#a98961",[V,.3,4.62],[1.25,.42,.55]);for(let H=-2;H<=2;H++){let fe=v(Q,H%2?"#6f8f58":"#88a866",[V+H*.2,.67+Math.abs(H)*.025,4.62],[.18,.38,.18]);fe.rotation.z=H*.12}}let Re=new Tt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34});for(let V of[-1.03,1.03]){d(Q,"#394447",[V,2.05,4.14],[.08,.1,.24]);let H=v(Q,"#ffe4a8",[V,1.88,4.27],[.13,.19,.13]);H.material=Re}let Je=S(Q,"#d4a957",[0,3.02,4.11],[.38,.1,.38]);Je.rotation.x=Math.PI/2,Q.userData.estateDetails={planters:2,lanterns:2,crest:!0},R(Q);let ze={};function $e(V,H=11,fe=15){let ge=new ke;ge.name=V,b.add(ge),ze[V]=ge,d(ge,V==="cave"?"#777a6b":"#a68854",[0,-.1,1],[H,.2,fe]);for(let je of[-H/2,H/2])d(ge,V==="cave"?"#92968b":"#e2dbc7",[je,1.65,1],[.3,3.3,fe]);d(ge,V==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-fe/2],[H,3.3,.3]),d(ge,"#313f38",[0,1.1,fe/2-.2],[1.7,2.2,.15]);let mt=new Oi(V==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return mt.position.set(0,2.7,1),ge.add(mt),ge}let Et=$e("cave",12,17),L=x("cave-formation",()=>new In(1,1,9)),pt=new Mt(L,g("#777a6b"),16),He=new vt;pt.name="cave-formations";let qe=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],[5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]],we=0;for(let[V,H,fe,ge]of qe)He.position.set(V,ge/2,H),He.rotation.set(0,we*.71%Math.PI,0),He.scale.set(fe,ge,fe),He.updateMatrix(),pt.setMatrixAt(we++,He.matrix),He.position.set(-V,3.3-ge*.48,H+.55),He.rotation.set(0,we*.53%Math.PI,Math.PI),He.scale.set(fe*.82,ge*.92,fe*.82),He.updateMatrix(),pt.setMatrixAt(we++,He.matrix);pt.castShadow=pt.receiveShadow=!0,pt.instanceMatrix.needsUpdate=!0,pt.computeBoundingSphere(),Et.add(pt),Et.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:!0};let nt=new ke;nt.name="cave-evidence-table",Et.add(nt),d(nt,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let V of[-.75,.75])for(let H of[-2.45,-1.55])S(nt,"#876742",[V,.35,H],[.065,.7,.065]);for(let V of[-2.47,-1.53])d(nt,"#876742",[0,.57,V],[1.72,.2,.07]);d(nt,"#876742",[0,.56,-1.38],[.72,.27,.08]),v(nt,"#394447",[0,.56,-1.32],[.045,.045,.04]),S(nt,"#394447",[.72,.86,-2.18],[.17,.1,.17]);let Ne=new Tt({color:"#ffe4a8",emissive:"#ff9f45",emissiveIntensity:1.05,roughness:.28,transparent:!0,opacity:.88}),We=v(nt,"#ffe4a8",[.72,1.08,-2.18],[.14,.22,.14]);We.material=Ne,S(nt,"#394447",[.72,1.31,-2.18],[.12,.07,.12]),nt.userData.evidenceDetails={legs:4,drawer:!0,lantern:!0,newspaper:!0,hiddenGun:!0},R(nt);let Ct=document.createElement("canvas");Ct.width=256,Ct.height=320;let ut=Ct.getContext("2d");ut.fillStyle="#ddd5bd",ut.fillRect(0,0,256,320),ut.fillStyle="#3a3b32",ut.font="bold 26px serif",ut.fillText("ISLAND DAILY",18,38),ut.fillRect(18,51,220,3);for(let V=0;V<20;V++)ut.fillRect(18,72+V*10,94-V%4*6,2),ut.fillRect(128,72+V*10,104-V%3*8,2);let I=new mi(Ct);I.colorSpace=Ft;let M=new lt(new _n(.9,1.05),new Tt({map:I,side:Lt}));M.name="cave-newspaper",M.rotation.x=-Math.PI/2,M.position.set(0,.83,-2),Et.add(M);function q(V){let H=new ke;V.add(H),d(H,"#333a3d",[0,0,.06],[.12,.12,.34]);let fe=d(H,"#695646",[0,-.11,-.03],[.1,.23,.13]);return fe.rotation.x=-.22,d(H,"#8b9294",[0,.08,.03],[.11,.035,.3]),H}let te=q(Et);te.name="cave-hidden-gun",te.position.set(0,.87,-2),te.rotation.y=Math.PI/2;let oe=$e("estate",11,15);d(oe,"#816947",[0,.42,-4.6],[2.6,.85,.9]),d(oe,"#decc9f",[0,.05,1],[3,.025,10]);for(let V=0;V<6;V++)d(oe,"#777a6b",[3.5,.06*V,-4.75+V*.28],[1.7,.12,.65]);let K=new ke;K.name="estate-interior-details",oe.add(K);let De=["#6f443d","#40626a","#718052"];for(let[V,H]of[-2.7,0,2.7].entries())d(K,"#a68854",[H,1.9,-6.31],[1.42,1.22,.08]),d(K,De[V],[H,1.9,-6.25],[1.12,.92,.045]);d(K,"#a68854",[0,.93,-6.29],[8.7,.08,.08]);for(let V of[-4.35,4.35]){d(K,"#394447",[V,2.02,-6.24],[.1,.32,.1]);let H=v(K,"#ffe4a8",[V,1.79,-6.15],[.14,.19,.11]);H.material=Re}d(K,"#394447",[0,.86,-4.58],[1.12,.025,.52]);for(let V of[-.52,0,.52])d(K,"#d8d2c3",[V,.88,-4.57],[.4,.012,.3]);S(K,"#394447",[.93,1.08,-4.58],[.035,.42,.035]);let pe=v(K,"#ffe4a8",[.93,1.34,-4.58],[.18,.16,.18]);pe.material=Re,oe.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:!0},R(K);let Ae=new lt(new ti(.13,.036,8,16),new Tt({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));Ae.position.set(0,.88,-3),oe.add(Ae),d(Ae,"#debb63",[0,-.2,0],[.065,.32,.065]);let Le=$e("cellar",11,15),le=[],me=new ke;me.name="cellar-static",Le.add(me);for(let V of ri){let H=new ke;H.name="cell-door-"+V.id,H.position.set(V.x/Ke,0,-1.5),Le.add(H),le[V.id]=H;for(let mt=-2;mt<=2;mt++)S(H,"#475759",[mt*.32,1.3,0],[.025,2.6,.025]);for(let mt of[.1,2.5])d(H,"#475759",[0,mt,0],[1.65,.055,.055]);for(let mt of[.45,2.15])S(H,"#394447",[-.78,mt,.07],[.045,.12,.045]);m(H,x("cell-padlock",()=>new ti(.09,.022,6,12)),g("#a68854"),[.61,1.42,.07]),d(H,"#a68854",[.61,1.27,.07],[.18,.2,.08]);let fe=V.x/Ke,ge=["#738b90","#9b796d"][V.id%2];d(me,"#a98961",[fe,.18,-4.8],[1.55,.36,.8]),d(me,"#e2dbc7",[fe,.4,-4.8],[1.5,.1,.8]),d(me,ge,[fe,.47,-4.65],[1.42,.045,.48]),d(me,"#d8d2c3",[fe,.5,-5.08],[.64,.1,.24])}for(let V of[-3.8,0,3.8]){d(me,"#394447",[V,2.54,-6.28],[.36,.15,.1]);let H=v(me,"#ffe4a8",[V,2.34,-6.2],[.15,.2,.11]);H.material=Re}Le.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5},R(me);let Ve=t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",_);Ve.root.name="campaign-player",a.add(Ve.root);let Fe=new Map,be=new Map;for(let V of e().guards){let H=t({shirt:V.id==="boss"?"#43433e":"#526252",skin:"#c29574",hair:"#302e28"},"guard",_);a.add(H.root),q(H.arms[1].forearm).position.set(0,-.24,.14),Fe.set(V.id,H)}for(let V of ri){let H=t({shirt:["#8da4b1","#b78876","#9caa8c","#c3b487","#92b2b6"][V.id],skin:"#dbb18d",hair:"#544432"},"resident",_);V.child&&H.root.scale.setScalar(.72),a.add(H.root),be.set(V.id,H)}let Ye=new ke;c.add(Ye),q(Ye).position.set(.26,-.23,-.48);let F=v(Ye,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),he=S(Ye,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);he.rotation.x=-.5;let de=new lt(new ti(.42,.035,8,32),new dn({color:"#f3d48a"}));de.rotation.x=-Math.PI/2,a.add(de);let Ie=new Li(new bt().setFromPoints([new N,new N]),new pi({color:"#ffe8ad"}));a.add(Ie);let ce=new ki,ie=new N,Te=0,Xe=.05,it="first",rt=0,Ot=!0,Bt=!1,Pt=null,an,mn=e(),Ut=zs(mn).target;Ut&&(Te=Math.atan2(mn.p.x-Ut.x,mn.p.z-Ut.z));function jt(V,H,fe,ge,mt,je){V.root.position.set(H.x/Ke,fe,H.z/Ke),V.root.rotation.set(0,0,0),V.rig.rotation.y=ge;let Dt=je*7,Nt=mt?.24:0;for(let w of V.legs)w.thigh.rotation.x=Math.sin(Dt+(w.side<0?Math.PI:0))*Nt,w.calf.rotation.x=Math.max(0,-Math.sin(Dt+(w.side<0?Math.PI:0)))*Nt,w.shoe.rotation.x=-w.calf.rotation.x*.6;for(let w of V.arms)w.arm.rotation.x=mt?Math.sin(Dt+(w.side<0?0:Math.PI))*.25:0,w.arm.rotation.z=0,w.forearm.rotation.x=-.18;V.hips.position.y=.87+(mt?Math.cos(Dt*2)*.009:0)}function Gn(V){if(!Ot||Bt)return;let H=e(),fe=V/1e3;rt=V,u.update();let ge=H.interior;E.visible=!ge,b.visible=!!ge;for(let[B,z]of Object.entries(ze))z.visible=B===ge;a.background.set(ge?"#202c29":"#b9dbe5"),a.fog.color.copy(a.background),l.intensity=ge?.65:2,h.intensity=ge?.15:2.8;let mt=ge?0:Vn(H.p.x,H.p.z);Ve.root.visible=!H.boat||it==="third",H.boat||(a.add(Ve.root),jt(Ve,H.p,mt,H.heading,H.walking,fe)),Ve.rig.visible=it==="third",P.position.set((H.boat?H.p.x:gt[H.boatAt].x)/Ke,.02,(H.boat?H.p.z:gt[H.boatAt].z)/Ke),P.rotation.y=H.boat?H.heading:Math.atan2(gt[H.boatAt].ux,gt[H.boatAt].uz),P.rotation.z=H.boat?Math.sin(fe*2)*.015:0,k.visible=H.boat&&H.walking,H.boat&&Cu(Ve,P),M.visible=!H.paper,te.visible=H.paper&&!H.gun,Ae.visible=!H.key&&H.guards.find(B=>B.id==="boss").hp===0,Ae.rotation.y=fe,le.forEach((B,z)=>B.visible=!H.released.includes(z));for(let B of H.guards){let z=Fe.get(B.id);z.root.visible=B.area===ge&&!H.boat&&(!B.area||H.island==="fortress"),jt(z,B,B.area?0:Vn(B.x,B.z),Math.atan2(H.p.x-B.x,H.p.z-B.z),B.hp>0&&Os(B,H.p)<210,fe),B.hp<=0?(z.rig.rotation.x=-Math.PI/2,z.root.position.y+=B.area?0:.15,z.root.scale.setScalar(.8)):(z.rig.rotation.x=0,z.arms[1].arm.rotation.x=-1.05,z.arms[1].forearm.rotation.x=-.35)}for(let B of ri){let z=be.get(B.id),se=H.released.includes(B.id);z.root.visible=H.boarded?!1:se?!H.boat&&(ge==="estate"||ge==="cellar"||H.island==="fortress"):ge==="cellar";let ve=se?{x:H.p.x-Math.sin(H.heading)*(35+B.id*15)+Math.cos(H.heading)*(B.id%2?16:-16),z:H.p.z-Math.cos(H.heading)*(35+B.id*15)-Math.sin(H.heading)*(B.id%2?16:-16)}:B;jt(z,ve,ge?0:Vn(ve.x,ve.z),H.heading,se&&H.walking,fe+B.id*.18)}let je=zs(H).target,Dt=Ru(H),Nt=Dt||je;de.visible=!!Nt,Nt&&de.position.set(Nt.x/Ke,(ge?0:Vn(Nt.x,Nt.z))+.08,Nt.z/Ke),de.scale.setScalar(1+Math.sin(fe*3)*.1),Ye.visible=H.gun&&!H.boat&&it==="first",Ye.position.z=H.shot?.025:0;let w=H.boat?.02+Jr.eye-1.64:mt,G=H.boat?Jr.seatZ:0,Y=Oa({x:H.p.x/Ke+Math.sin(H.heading)*G,z:H.p.z/Ke+Math.cos(H.heading)*G,surface:w,yaw:Te,pitch:Xe,mode:it,distance:H.boat?7.5:4.6});if(ge&&it==="third"&&(Y.position.x=Ds.clamp(Y.position.x,-5.1,5.1),Y.position.z=Ds.clamp(Y.position.z,-5,8.1)),!ge&&it==="third"){E.updateMatrixWorld(!0),ie.subVectors(Y.position,Y.target);let B=ie.length();ie.normalize(),ce.set(Y.target,ie),ce.far=B;let z=ce.intersectObjects([...Z.houses,Q],!0).find(se=>se.distance>.2);z&&Y.position.copy(Y.target).addScaledVector(ie,Math.max(.35,z.distance-.22)),Y.position.y=Math.max(Y.position.y,Vn(Y.position.x*Ke,Y.position.z*Ke)+.24)}if(c.position.copy(Y.position),c.lookAt(Y.target),Ba(h,H.p.x/Ke,H.p.z/Ke,{height:25}),T.update(fe,c.position),U.position.copy(c.position),Ie.visible=!!H.shot,H.shot){let B=mt+1.35,z=H.shot.from,se=H.shot.to;Ie.geometry.setFromPoints([new N(z.x/Ke,B,z.z/Ke),new N(se.x/Ke,B,se.z/Ke)])}an!==ge&&(an=ge,ge?Te=0:je&&(Te=Math.atan2(H.p.x-je.x,H.p.z-je.z))),s.render(a,c)}function ji(){c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function vn(V,H=0){e().paused||(Te+=V,Xe=Ds.clamp(Xe+H,it==="first"?-.95:-.05,.75))}i.addEventListener("pointerdown",V=>{e().paused||V.button!==0||(Pt={id:V.pointerId,x:V.clientX,y:V.clientY},i.setPointerCapture(V.pointerId))}),i.addEventListener("pointermove",V=>{Pt?.id===V.pointerId&&(vn(-(V.clientX-Pt.x)*.006,(V.clientY-Pt.y)*.005),Pt.x=V.clientX,Pt.y=V.clientY)});for(let V of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(V,()=>Pt=null);return i.addEventListener("webglcontextlost",V=>{V.preventDefault(),Bt=!0,Ot=!1,n?.()}),{frame:Gn,resize:ji,orbit:vn,setCamera(V){it=V==="first"?"first":"third",Xe=it==="first"?.05:.22},get cameraMode(){return it},get enabled(){return Ot&&!Bt},vector:(V,H)=>({x:V*Math.cos(Te)+H*Math.sin(Te),z:-V*Math.sin(Te)+H*Math.cos(Te)}),aim:()=>Te+Math.PI,setEnabled(V){Ot=!!V&&!Bt},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,eye:c.position.toArray(),camera:it}),dispose(){s.dispose(),u.dispose();let V=new Set,H=new Set;a.traverse(fe=>{if(fe.geometry&&V.add(fe.geometry),fe.material)for(let ge of Array.isArray(fe.material)?fe.material:[fe.material])H.add(ge)}),V.forEach(fe=>fe.dispose()),H.forEach(fe=>fe.dispose()),I.dispose()}}}function Os(i,e){return Math.hypot(i.x-e.x,i.z-e.z)}function I0(i){return Iu({...i,makeHuman:vc})}var _e=80,Pu=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],Mi=(i,e,t)=>Math.max(e,Math.min(t,i)),P0=i=>(i=Mi(i,0,1),i*i*(3-2*i)),D0=(i,e)=>Math.atan2(Math.sin(e-i),Math.cos(e-i));function on(i,e){let t=i*_e,n=e*_e,r=-1;for(let[o,a,c,l]of Pu)r=Math.max(r,1-Math.hypot((t-o)/c,(n-a)/l));return r<=0?-.32:.015+P0(r/.17)*(.25+.28*(1+Math.sin(i*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(i*.7)*Math.sin(e*.6))}function Du(i,e,t){return{x:i*Math.cos(t)+e*Math.sin(t),y:-i*Math.sin(t)+e*Math.cos(t)}}function Lu(i,e){let r=Mi(Math.hypot(i,e),.08,.855);return{hip:-Math.atan2(e,-i)-Math.acos(Mi((.43*.43+r*r-.43*.43)/(2*.43*r),-1,1)),knee:Math.PI-Math.acos(Mi((.43*.43+.43*.43-r*r)/(2*.43*.43),-1,1))}}function yc(i){return i?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let n=i.point(e*i.width/2,t*i.depth/2);return on(n.x/_e,n.y/_e)}))):0}function _c(i,e,t,n=yc(t)){let r=on(i,e);if(!t)return r;let s=t.floor;if(Math.abs(i*_e-s.x)<=s.w/2&&Math.abs(e*_e-s.y)<=s.h/2)return Math.max(r,n+.16);let o=i*_e-t.center.x,a=e*_e-t.center.y,c=o*t.fy-a*t.fx,l=o*t.fx+a*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,n+.16)-r)*(1-(l-t.depth/2)/64):r}function Uu(i,e,t={}){let n=(p,f,g,x,m)=>{let d=new lt(m,new Tt({color:f}));return d.position.set(...g),d.scale.set(...x),p.add(d),d},r=t.cube||((p,f,g,x)=>n(p,f,g,x,new $t(1,1,1))),s=t.tube||((p,f,g,x)=>n(p,f,g,x,new It(1,1,1,10))),o=new ke,a=i.width/_e,c=i.depth/_e,l=i.wallHeight/_e,h=i.roofRidge/_e,u=i.door/_e;o.name="base",o.position.set(i.center.x/_e,e,i.center.y/_e),o.rotation.y=i.yaw,r(o,"#a68854",[0,.08,0],[a,.16,c]).name="floor";for(let p of[-a/2+.1,a/2-.1])for(let f of[-c/2+.1,c/2-.1])s(o,"#876742",[p,l/2,f],[.075,l,.075]).name="post";for(let p of[-1,1]){let f=r(o,"#ba7655",[p*a/4,(l+h)/2,0],[Math.hypot(a/2+.2,h-l),.1,c+.36]);f.rotation.z=-p*Math.atan2(h-l,a/2+.2),f.name="roof"}for(let p of i.walls){let f=p.x-i.center.x,g=p.y-i.center.y,x=(f*i.fy-g*i.fx)/_e,m=(f*i.fx+g*i.fy)/_e;r(o,"#e2dbc7",[x,l/2,m],[i.fy?p.w/_e:p.h/_e,l,i.fy?p.h/_e:p.w/_e]).name="wall"}if(i.walls.length>=5){let p=i.doorHeight/_e;r(o,"#845f3f",[0,(l+p)/2,c/2],[u,l-p,.125]).name="lintel"}for(let p of i.beds){let f=p.x-i.center.x,g=p.y-i.center.y,x=(f*i.fy-g*i.fx)/_e,m=(f*i.fx+g*i.fy)/_e;r(o,"#7d654b",[x,.17,m],[.65,.34,1.125]).name="bed",r(o,"#cec6a0",[x,.38,m],[.65,.14,1.125]),r(o,"#ede3bd",[x,.49,m-.35],[.5,.09,.26])}return o}function Nu(i,e,{cube:t,tube:n,ell:r}){if(i==="gather"&&(n(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),i==="fish"){let s=n(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let o=n(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);o.rotation.x=.6}if(i==="cook"){let s=n(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function vc(i={},e="player",t={}){let n=new Map,r=new Map,s=t.mat||(P=>(n.has(P)||n.set(P,new Tt({color:P})),n.get(P))),o=t.geo||((P,k)=>(r.has(P)||r.set(P,k()),r.get(P))),a=t.mesh||((P,k,X,ne=[0,0,0],$=[1,1,1])=>{let re=new lt(k,X);return re.position.set(...ne),re.scale.set(...$),P.add(re),re}),c=t.ell||((P,k,X,ne)=>a(P,o("ball",()=>new pn(1,14,10)),s(k),X,ne)),l=t.cube||((P,k,X,ne)=>a(P,o("box",()=>new $t(1,1,1)),s(k),X,ne)),h=t.tube||((P,k,X,ne)=>a(P,o("cyl",()=>new It(1,1,1,10)),s(k),X,ne)),u=new ke,p=new ke;u.add(p);let f=i.skin||"#dda879",g=i.hair||"#43332b",x=i.shirt||"#4c9cba",m=new ke;m.position.y=.87,p.add(m),c(m,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let d=o("human-torso",()=>new Ms([new Ge(.16,.13),new Ge(.205,.2),new Ge(.215,.38),new Ge(.25,.49),new Ge(.26,.52),new Ge(.19,.57),new Ge(.09,.64)],18));a(m,d,s(x),[0,0,0],[1,1,.66]);for(let P of[-1,1]){let k=l(m,x,[P*.065,.6,.071],[.085,.075,.024]);k.rotation.z=-P*.3,l(m,x,[P*.11,.37,.142],[.105,.09,.022])}for(let P=0;P<4;P++)c(m,"#d7d5c2",[0,.24+P*.075,.15],[.009,.01,.005]);e==="guard"&&l(m,"#39483f",[0,.35,.11],[.34,.36,.09]),l(m,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),h(m,f,[0,.64,0],[.064,.13,.064]);let S=new ke;S.position.y=.79,m.add(S),c(S,f,[0,0,0],[.135,.175,.133]),c(S,f,[-.137,-.005,0],[.025,.048,.025]),c(S,f,[.137,-.005,0],[.025,.048,.025]),c(S,f,[0,-.015,.136],[.026,.033,.036]);for(let P of[-1,1])c(S,"#f6f3df",[P*.052,.02,.115],[.03,.017,.014]),c(S,"#31433e",[P*.053,.02,.128],[.012,.013,.007]),l(S,g,[P*.052,.061,.11],[.062,.01,.014]);l(S,"#af735b",[0,-.071,.117],[.051,.009,.012]);let v=o("hair",()=>new pn(1,16,10,0,Math.PI*2,0,Math.PI*.56));a(S,v,s(e==="nela"?"#8d4931":g),[0,.015,-.015],[.145,.18,.143]);let _=[new ke,new ke,new ke];_.forEach(P=>S.add(P));let E=S.children.find(P=>P.isMesh&&P.geometry===v);S.remove(E),_[0].add(E),a(_[1],v,s(g),[0,.015,-.015],[.145,.18,.143]),c(_[1],g,[0,-.04,-.17],[.072,.14,.08]);for(let P=0;P<12;P++){let k=P*Math.PI*2/12;c(_[2],g,[Math.sin(k)*.1,.1+P%2*.018,Math.cos(k)*.1-.015],[.066,.067,.066])}if(c(_[2],g,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(S,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),_.forEach((P,k)=>P.visible=k===(i.style||0)),e==="leon")h(S,"#c5a775",[0,.15,0],[.16,.12,.16]),h(S,"#c5a775",[0,.095,0],[.22,.028,.22]),l(m,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(m,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let P of[-1,1])l(m,"#b6caa4",[P*.17,.38,-.04],[.034,.35,.029])}let b=[],R=[];for(let P of[-1,1]){let k=new ke;k.position.set(P*.27,.54,0),m.add(k);let X=c(k,x,[-P*.018,-.025,0],[.105,.13,.11]);X.name="human-shoulder",a(k,o("human-upper-arm",()=>new It(.068,.086,.19,12)),s(x),[0,-.105,0]),a(k,o("human-lower-upper-arm",()=>new It(.055,.064,.15,12)),s(f),[0,-.24,0]);let ne=new ke;ne.position.y=-.31,k.add(ne);let $=c(ne,f,[0,0,0],[.061,.063,.061]);$.name="human-elbow",a(ne,o("human-forearm",()=>new It(.057,.04,.26,12)),s(f),[0,-.13,0]),c(ne,f,[0,-.28,0],[.06,.082,.046]),b.push({arm:k,forearm:ne,side:P});let re=new ke;re.position.set(P*.115,0,0),m.add(re),a(re,o("human-thigh",()=>new It(.092,.108,.42,12)),s("#52625f"),[0,-.21,0]);let ae=new ke;ae.position.y=-.43,re.add(ae);let Me=c(ae,"#52625f",[0,0,.014],[.079,.074,.075]);Me.name="human-knee",a(ae,o("human-calf",()=>new It(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let Oe=c(ae,"#52625f",[0,-.36,0],[.052,.06,.052]);Oe.name="human-ankle";let ot=c(ae,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);R.push({thigh:re,calf:ae,shoe:ot,side:P})}let C=new ke;h(C,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(C,"#dad9c5",[0,1.45,0],[.045,.15,.03]),C.position.set(.35,.2,.08),p.add(C),C.visible=!1;let y={};for(let P of["gather","fish","cook"]){let k=new ke;Nu(P,k,{cube:l,tube:h,ell:c}),k.position.set(0,-.28,0),b[1].forearm.add(k),k.visible=!1,y[P]=k}let T=new ke;u.add(T);for(let P=0;P<5;P++){let k=h(T,"#a17d48",[(P-2)*.25,.08,0],[.115,1.7,.115]);k.rotation.x=Math.PI/2}for(let P of[-.5,.5])l(T,"#6e5937",[0,.19,P],[1.24,.05,.1]);T.visible=!1;let U=[],O=[],Z=[];return p.traverse(P=>{P.isMesh&&(P.material===s(x)&&U.push(P),P.material===s(f)&&O.push(P),P.material===s(g)&&Z.push(P))}),{root:u,rig:p,hips:m,head:S,arms:b,legs:R,spear:C,raft:T,shirtParts:U,skinParts:O,hairParts:Z,hairStyles:_,props:y,yaw:0,lastX:null,lastZ:null,phase:0}}function Fu(i,e){let t=e&&gu(e.kind,e.phase);i.rig.rotation.x=t?.bend||0;for(let[n,r]of Object.entries(i.props))r.visible=!!t&&e.kind===n;if(t)for(let n of i.arms)n.arm.rotation.x=n.side<0?t.left:t.right,n.forearm.rotation.x=-.25,n.arm.rotation.z=-n.side*.08+((n.side>0||e.kind==="cheer")&&t.wave||0)}function zu(i,e,t){let n=i.phase||0,r=i.x+Math.sin(e*.65+n)*14,s=i.y+Math.cos(e*.65+n)*14;return t(r,s)?{x:r/_e,z:s/_e,y:.055+Math.sin(e*3+n)*.008,yaw:Math.atan2(Math.cos(e*.65+n),-Math.sin(e*.65+n))}:null}function L0({canvas:i,terrain:e,getState:t,onLost:n}){let r=new Gr({canvas:i,antialias:!0,powerPreference:"high-performance"}),s=innerWidth<=700;r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Ft,r.toneMapping=Ur,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=Lr;let o=new Di;o.background=new Ze("#c5dbe5"),o.fog=new Pi("#c5dbe5",70,240);let a=new Gt(72,innerWidth/innerHeight,.04,350);o.add(a);let c=new zi("#c9e3ff","#71694d",1.85);o.add(c);let l=new Bi("#fff0d2",3.1);l.castShadow=!0,l.shadow.mapSize.set(s?1024:2048,s?1024:2048),l.shadow.camera.left=-16,l.shadow.camera.right=16,l.shadow.camera.top=16,l.shadow.camera.bottom=-16,l.shadow.camera.near=.5,l.shadow.camera.far=65,l.shadow.bias=-12e-5,l.shadow.normalBias=.012,o.add(l,l.target);let h=za(r),u=new Map,p=new Map;function f(A,D={}){if(!Object.keys(D).length){let W=h.forColor(A);if(W)return W}let J=A+JSON.stringify(D);return u.has(J)||u.set(J,new Tt({color:A,roughness:.86,...D})),u.get(J)}function g(A,D){return p.has(A)||p.set(A,D()),p.get(A)}function x(){return g("ball",()=>new pn(1,14,10))}function m(){return g("box",()=>new $t(1,1,1))}function d(){return g("cyl",()=>new It(1,1,1,10))}function S(A,D,J,W=[0,0,0],j=[1,1,1],ue=!0){let ye=new lt(D,J);return ye.position.set(...W),ye.scale.set(...j),ye.castShadow=ue,ye.receiveShadow=!0,A.add(ye),ye}function v(A,D,J,W){return S(A,x(),f(D),J,W)}function _(A,D,J,W){return S(A,m(),f(D),J,W)}function E(A,D,J,W){return S(A,d(),f(D),J,W)}let b=new vt,R=new _n(4600/_e,2900/_e,230,145);R.rotateX(-Math.PI/2),R.translate(2300/_e,0,1450/_e);let C=R.attributes.position;for(let A=0;A<C.count;A++)C.setY(A,on(C.getX(A),C.getZ(A)));R.computeVertexNormals();let y=_u(e),T=new mi(y);T.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let U=h.ground(T),O=new lt(R,U);O.receiveShadow=!0,o.add(O);let Z=bu({segments:s?24:48}),P=40;Z.scale.set(1/P,1,1/P),Z.position.x=6500/_e;for(let A of Z.children)A.material.dispose(),A.material=Ha(h,P),A.geometry.setAttribute("color",new Qe(new Float32Array(A.geometry.attributes.position.count*3).fill(1),3));let k=new ke;k.scale.set(P,1,P),Z.add(k);let X=(A,D)=>{let J=Mu(A,D);return J?Zi(J,A,D):-.32};Wa(k,Un,{scale:P,height:X,surfaces:h,small:s,clear:(A,D,J)=>Ji({x:D,z:J},A.id)||A.id==="home"&&(Math.abs(J-40)<55||Math.abs(D-23)<45)}),Xa(k,{scale:P,height:X,surfaces:h,helpers:{cube:_,tube:E,ell:v}}),o.add(Z);let ne=yu(o,on,_e,y,s),$=Va([...Pu.map(([A,D,J,W])=>[A/_e,D/_e,J/_e,W/_e]),...Un.map(A=>[Z.position.x+A.x/P,A.z/P,A.radius*.955/P,A.radius*.955/P])]);o.add($.mesh);let re=Ga(320);o.add(re);function ae(){let A=[],D=[],J=[],W=(ue,ye,xe,Pe)=>{let Ue=ye*2.05,Ce=Math.sin(ye*Math.PI)*.46-ye*ye*.8;return[Math.sin(ue)*Ue+Math.cos(ue)*Pe*xe,Ce-Pe*.22,Math.cos(ue)*Ue-Math.sin(ue)*Pe*xe]};for(let ue=0;ue<11;ue++){let ye=ue*Math.PI*2/11;for(let xe=1;xe<17;xe++)for(let Pe of[-1,1]){let Ue=xe/18,Ce=Math.sin(Ue*Math.PI)*.42,dt=A.length/3;A.push(...W(ye,Ue-.023,Pe,.015),...W(ye,Ue-.085,Pe,Ce),...W(ye,Ue+.038,Pe,Ce*.88),...W(ye,Ue+.025,Pe,.015)),J.push(Ue,0,Ue,.9,Ue+.03,1,Ue+.03,0),D.push(dt,dt+1,dt+2,dt,dt+2,dt+3)}}let j=new bt;return j.setAttribute("position",new Qe(A,3)),j.setAttribute("uv",new Qe(J,2)),j.setIndex(D),j.computeVertexNormals(),j}let Me=new It(.085,.16,4.35,14,12);Me.translate(0,2.175,0);for(let A=0;A<Me.attributes.position.count;A++){let D=Me.attributes.position;D.setX(A,D.getX(A)+.16*(D.getY(A)/4.35)**2)}Me.computeVertexNormals();let Oe=f("#9d7750",{bumpMap:h.textures.get("rock"),bumpScale:.025});Oe.onBeforeCompile=A=>{A.vertexShader=A.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),A.fragmentShader=A.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let ot=ae(),ct=h.surface("leaf","#ffffff",1,.018).clone();ct.side=Lt;let ht={value:0};ct.onBeforeCompile=A=>{A.uniforms.uWind=ht,A.vertexShader=A.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let ee={tree:new Mt(Me,Oe,400),leaves:new Mt(ot,ct,400),rock:new Mt(new Ui(1,2),f("#92968b"),400),food:new Mt(x(),f("#7a5638"),400),shell:new Mt(new pn(1,12,6,0,Math.PI),f("#f1d0b7"),400)};for(let A of Object.values(ee))A.count=0,A.castShadow=!0,A.receiveShadow=!0,A.frustumCulled=!1,o.add(A);function Q(A,D){let J={tree:0,leaves:0,rock:0,food:0,shell:0};for(let W of A){let j=W.x/_e,ue=W.y/_e,ye=on(j,ue),xe=W.phase||0;if(W.t==="tree"){let Pe=.84+.17*Math.sin(W.x*.033+W.y*.027),Ue=1.35+.28*Math.cos(xe);b.position.set(j,ye,ue),b.rotation.set(.03*Math.sin(xe),xe,.04*Math.cos(xe)),b.scale.set(Pe,Ue,Pe),b.updateMatrix(),ee.tree.setMatrixAt(J.tree++,b.matrix),b.position.set(j+.16*Pe*Math.cos(xe),ye+4.3*Ue,ue-.16*Pe*Math.sin(xe)),b.rotation.set(Math.sin(D*.7+xe)*.025,xe,Math.cos(D*.6+xe)*.025),b.scale.set(Pe,Pe,Pe),b.updateMatrix(),ee.leaves.setMatrixAt(J.leaves++,b.matrix)}else ee[W.t]&&(b.position.set(j,ye+(W.t==="rock"?.23:W.t==="food"?.13:.025),ue),b.rotation.set(0,xe,0),b.scale.set(...W.t==="rock"?[.34+.18*Math.abs(Math.sin(xe)),.3,.4]:W.t==="food"?[.15,.13,.15]:[.12,.04,.14]),b.updateMatrix(),ee[W.t].setMatrixAt(J[W.t]++,b.matrix))}for(let[W,j]of Object.entries(ee))j.count=J[W],j.instanceMatrix.needsUpdate=!0}function Re(A,D="#ffe9b5"){let J=document.createElement("canvas");J.width=512,J.height=96;let W=J.getContext("2d");W.fillStyle="#123e43",W.beginPath(),W.roundRect(6,10,500,76,25),W.fill(),W.fillStyle=D,W.font="700 29px system-ui",W.textAlign="center",W.textBaseline="middle",W.fillText(String(A).slice(0,45),256,48,480);let j=new mi(J);j.colorSpace=Ft;let ue=new _s(new Cr({map:j,depthTest:!0,transparent:!0}));return ue.scale.set(2.45,.46,1),ue.position.y=2.32,ue}let Je=["#4c9cba","#df8168","#9974c7","#76b677"];function ze(A={},D="player",J=""){let W=vc(A,D,{ell:v,cube:_,tube:E,mesh:S,mat:f,geo:g});return o.add(W.root),W.name=J,W.tag=null,J&&(W.tag=Re(J,A.shirt),W.root.add(W.tag)),W}let $e=ze(Fa()),Et=new Map,L=ze({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),pt=ze({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function He(A,D,J){!D||D===A.name||(A.tag&&(A.root.remove(A.tag),A.tag.material.map.dispose(),A.tag.material.dispose()),A.name=D,A.tag=Re(D,J),A.root.add(A.tag))}function qe(A,D){if(A.lookKey!==JSON.stringify(D)){A.lookKey=JSON.stringify(D);for(let J of A.shirtParts)J.material=f(D.shirt||"#4c9cba");for(let J of A.skinParts)J.material=f(D.skin||"#dda879");for(let J of A.hairParts)J.material=f(D.hair||"#43332b");A.hairStyles.forEach((J,W)=>J.visible=W===(D.style||0))}}let we=null,nt=0;function Ne(A,D,J,W,j,ue,ye,xe){let Pe=D.x/_e,Ue=D.y/_e,Ce=xe.sea(D.x,D.y),dt=Ce?0:_c(Pe,Ue,we,nt);A.root.position.set(Pe,dt+(Ce?xe.raft?.18:-.95:0),Ue),A.yaw+=D0(A.yaw,J)*Math.min(1,ue*12),A.rig.rotation.y=A.yaw;let tt=W&&ye>.05;A.phase+=tt?ue*(ye>4?10:7):0;let Zt=tt?ye>4?.31:.22:0,Ee=A.phase;A.hips.position.y=(tt?.9:.92)+(tt?Math.cos(Ee*2)*.012:Math.sin(j*1.7)*.004);for(let Be of A.legs){let ln=Ee+(Be.side<0?Math.PI:0),xt=Math.sin(ln)*Zt,kt=tt?Math.max(0,Math.cos(ln))*.105:0,Qt=Pe+Math.cos(A.yaw)*Be.side*.115+Math.sin(A.yaw)*xt,Jt=Ue-Math.sin(A.yaw)*Be.side*.115+Math.cos(A.yaw)*xt,en=Ce?0:_c(Qt,Jt,we,nt)-dt,si=Lu(-A.hips.position.y+.07+en+kt,xt);Be.thigh.rotation.x=si.hip,Be.calf.rotation.x=si.knee,Be.shoe.rotation.x=-si.hip-si.knee}for(let Be of A.arms)Be.arm.rotation.x=tt?Math.sin(Ee+(Be.side<0?0:Math.PI))*.45:Math.sin(j*1.3+Be.side)*.025,Be.arm.rotation.z=-Be.side*.07,Be.forearm.rotation.x=tt?-.22:-.08,Ce&&!xe.raft&&(Be.arm.rotation.x=-Math.PI/2+Math.sin(Ee+Be.side)*.35,Be.forearm.rotation.x=-.28);Fu(A,xe.motion),A.raft.visible=!!(Ce&&xe.raft),A.raft.rotation.y=A.yaw,A.spear.visible=!!xe.spear&&!Ce&&!xe.motion,xe.blocked&&(A.arms[0].arm.rotation.x=-1,A.arms[0].forearm.rotation.x=-1),A.tag&&(A.tag.visible=Math.hypot(Pe-$e.root.position.x,Ue-$e.root.position.z)<13),A.lastX=Pe,A.lastZ=Ue}let We=new ke;o.add(We);for(let A of[-.55,.55])for(let D of[-.27,.27])E(We,"#866642",[A,1.24,D],[.038,2.48,.038]);_(We,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),_(We,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let A of[-1,1]){let D=_(We,"#ba7655",[A*.39,2.63,0],[.9,.07,1.14]);D.rotation.z=-A*.34}let Ct=E(We,"#ba7655",[0,2.79,0],[.055,1.18,.055]);Ct.rotation.x=Math.PI/2;for(let A of[-.5,.5])_(We,"#e2dbc7",[0,2.4,A],[1.7,.1,.07]);for(let A=0;A<5;A++)_(We,"#a98961",[(A-2)*.24,.32,.344],[.21,.53,.025]);for(let A=0;A<4;A++)v(We,"#b1b967",[(A-1.5)*.19,.78,0],[.09,.08,.08]);let ut=new ke;o.add(ut),_(ut,"#765734",[0,.18,0],[.56,.36,.4]),_(ut,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let A of[-.19,.19])_(ut,"#d5b15a",[A,.2,.215],[.045,.35,.026]);_(ut,"#ecd178",[0,.32,.22],[.08,.09,.03]);let I=new lt(new Ni(.24,.29,32),new dn({color:"#ffe087",transparent:!0,opacity:.8,side:Lt,depthWrite:!1}));I.rotation.x=-Math.PI/2,o.add(I);let M={root:new ke,tag:null,name:null};o.add(M.root),M.root.position.set(Us.x/_e,on(Us.x/_e,Us.y/_e),Us.y/_e),E(M.root,"#786040",[0,.95,0],[.12,1.9,.12]),_(M.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let q=new ke;o.add(q);let te=new lt(new Ni(.93,1.06,40),new dn({color:"#54e4ef",transparent:!0,opacity:.85,side:Lt,depthWrite:!1}));te.rotation.x=-Math.PI/2,te.position.y=.04,q.add(te);let oe=S(q,new It(.035,.035,1,8),new dn({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),K=null,De=0,pe="",Ae=new ke,Le=null,le=null,me=[];o.add(Ae);function Ve(A){let D=A.activities?.completed||0,J=D>=3&&A.activities.gardenClaimed<D,W=JSON.stringify([A.baseLevel,A.basePos,A.campfire,A.fire,D>=1,D>=3,D>=6,J,A.activities?.raceWon]);if(W!==pe){pe=W,le&&(le.geometry.dispose(),le.material.dispose());for(let j of me)j.dispose();if(me=[],o.remove(Ae),Ae=new ke,o.add(Ae),le=null,Le=null,A.basePos&&A.baseLevel){let j=we,ue=vu(Uu(j,nt,{cube:_,tube:E}),j,{cube:_,tube:E},h);if(Ae.add(ue),ue.traverse(ye=>{["roof","wall","lintel"].includes(ye.name)&&(ye.material=ye.material.clone(),ye.material.transparent=!0,me.push(ye.material))}),D>=1)for(let ye of[-1,1]){let xe=v(ue,"#ffdc80",[ye*(j.width/_e/2-.15),2.35,j.depth/_e/2],[.09,.14,.09]);xe.material=f("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(D>=6&&(E(ue,"#6e5942",[j.width/_e/2+.2,1.75,-j.depth/_e/2],[.03,3.5,.03]),_(ue,"#5bbca9",[j.width/_e/2+.55,3.1,-j.depth/_e/2],[.7,.42,.03])),D>=3&&A.garden){let ye=A.garden,xe=new ke;xe.position.set(ye.x/_e,on(ye.x/_e,ye.y/_e),ye.y/_e),Ae.add(xe),_(xe,"#785d40",[0,.07,0],[1.35,.14,1]);for(let Pe of[-.4,0,.4])for(let Ue of[-.25,.25])E(xe,"#587b37",[Pe,.21,Ue],[.025,.3,.025]),v(xe,"#6caa49",[Pe,.35,Ue],[.16,.12,.12]),J&&v(xe,"#cfa565",[Pe+.055,.27,Ue],[.07,.065,.07])}}if(A.campfire&&A.fire){let j=new ke,ue=A.fire.x/_e,ye=A.fire.y/_e;j.position.set(ue,on(ue,ye),ye),Ae.add(j);for(let xe=0;xe<8;xe++){let Pe=xe*Math.PI/4;v(j,"#777a6b",[Math.sin(Pe)*.3,.07,Math.cos(Pe)*.3],[.095,.07,.105])}for(let xe of[.5,-.5]){let Pe=E(j,"#614b35",[0,.09,0],[.06,.5,.06]);Pe.rotation.z=Math.PI/2,Pe.rotation.y=xe}le=S(j,new In(.17,.46,8),new dn({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),Le=new Oi("#ffa145",2.5,4),Le.position.y=.5,j.add(Le)}}}let Fe=[];function be(){let A=new ke;o.add(A),v(A,"#765745",[0,.29,0],[.24,.25,.43]),v(A,"#765745",[0,.3,.4],[.19,.18,.2]),v(A,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let J of[-1,1]){let W=S(A,new In(.08,.17,3),f("#644937"),[J*.13,.47,.43]);W.rotation.z=J*.45}let D=[];for(let J of[-.17,.17])for(let W of[-.27,.24])D.push(E(A,"#5e493b",[J,.105,W],[.037,.2,.037]));return{root:A,legs:D,lastX:null,lastZ:null}}function Ye(A,D){for(;Fe.length<A.length;)Fe.push(be());for(let J=0;J<Fe.length;J++){let W=Fe[J],j=A[J];if(W.root.visible=!!j,!j){W.lastX=W.lastZ=null;continue}let ue=j.x/_e,ye=j.y/_e,xe=W.lastX===null?0:ue-W.lastX,Pe=W.lastZ===null?0:ye-W.lastZ,Ue=Math.hypot(xe,Pe)>1e-4;W.root.position.set(ue,on(ue,ye),ye),Ue&&(W.root.rotation.y=Math.atan2(xe,Pe));for(let Ce=0;Ce<4;Ce++)W.legs[Ce].rotation.x=Ue?Math.sin(D*6+Ce*Math.PI)*.15:0;W.lastX=ue,W.lastZ=ye}}let F=[new Mt(x(),f("#adddd0",{roughness:.4}),96),new Mt(new In(1,1,3),f("#668e93"),96),new Mt(new In(1,1,3),f("#779da0"),96)];for(let A of F)A.count=0,A.frustumCulled=!1,o.add(A);function he(A,D,J){let W=0;for(let j of A||[]){let ue=zu(j,D,J);if(!ue||W>=96)continue;let ye=(xe,Pe,Ue,Ce,dt=0)=>{b.position.set(ue.x+Math.sin(ue.yaw)*Ue+Math.cos(ue.yaw)*xe,ue.y+Pe,ue.z+Math.cos(ue.yaw)*Ue-Math.sin(ue.yaw)*xe),b.rotation.set(dt,ue.yaw,0),b.scale.set(...Ce),b.updateMatrix()};ye(0,0,0,[.09,.045,.22]),F[0].setMatrixAt(W,b.matrix),ye(0,0,-.25,[.095,.12,.025],Math.PI/2),F[1].setMatrixAt(W,b.matrix),ye(0,.045,-.02,[.04,.1,.11]),F[2].setMatrixAt(W,b.matrix),W++}for(let j of F)j.count=W,j.instanceMatrix.needsUpdate=!0}let de="",Ie=[];function ce(A,D){let J=JSON.stringify(A);if(J!==de){de=J;for(let W of Ie)o.remove(W),W.traverse(j=>{j.isSprite&&(j.material.map.dispose(),j.material.dispose()),j.userData.privateGeometry&&j.geometry.dispose()});Ie=[];for(let W of A||[]){if(W.type==="return")continue;let j=new ke;j.position.set(W.x/_e,on(W.x/_e,W.y/_e),W.y/_e),o.add(j),Ie.push(j);let ue=new lt(new Ni(.4,.46,28),f(W.done?"#6d9c89":"#8cebd5",{side:Lt}));if(ue.rotation.x=-Math.PI/2,ue.position.y=.03,ue.userData.privateGeometry=!0,j.add(ue),W.type==="fragment"&&(_(j,"#e1c587",[0,.38,0],[.37,.45,.06]),_(j,"#a68752",[0,.18,-.035],[.035,.42,.035]),_(j,"#826b4d",[0,.4,.035],[.19,.022,.02])),W.type==="rune"){v(j,"#87998a",[0,.26,0],[.27,.3,.21]);let xe=Re(W.symbol,"#ffe29b");xe.position.y=.8,xe.scale.set(.65,.32,1),j.add(xe)}if(W.type==="chest"){_(j,"#795a39",[0,.2,0],[.65,.4,.44]),_(j,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let xe of[-.21,.21])_(j,"#f1d584",[xe,.23,.235],[.05,.36,.025])}if(W.type==="signal"){for(let xe of[-1,1]){let Pe=E(j,"#8a6d49",[xe*.22,.55,0],[.04,1.1,.04]);Pe.rotation.z=xe*.22}if(_(j,"#927652",[0,1.1,0],[.7,.16,.45]),W.done){let xe=v(j,"#ffe28d",[0,1.34,0],[.16,.21,.16]);xe.material=f("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else _(j,"#344f57",[0,1.3,0],[.3,.18,.24])}let ye=Re(W.label,W.done?"#b5d1c5":"#ffe9b5");ye.position.y=W.type==="signal"?1.95:1.35,j.add(ye),j.userData.done=W.done}}for(let W of Ie)W.children[0].scale.setScalar(W.userData.done?1:1+Math.sin(D*2.8)*.05)}let ie=[];for(let A=0;A<4;A++){let D=new bt().setFromPoints([new N(-.3,0,0),new N(0,-.08,0),new N(.3,0,0)]),J=new Li(D,new pi({color:"#fff7de"}));o.add(J),ie.push(J)}let Te=Math.atan2(-130,-60),Xe=0,it=4.8,rt=!0,Ot=!0,Bt=0,Pt=null,an=!1,mn=0,Ut="first",jt=new ke;a.add(jt);let Gn=E(jt,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);Gn.rotation.x=-.65;let ji=v(jt,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),vn=new ke;jt.add(vn);let V=E(vn,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);V.rotation.x=-.22;let H=v(vn,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),fe={};for(let A of["gather","fish","cook"]){let D=new ke;D.position.set(.29,-.26,-.61),jt.add(D),Nu(A,D,{cube:_,tube:E,ell:v}),fe[A]=D}jt.traverse(A=>{A.isMesh&&(A.castShadow=!1,A.receiveShadow=!1,A.frustumCulled=!1)});let ge=new N,mt=new N,je=new N,Dt=new N;function Nt(A,D=0){!rt||t().paused||(Te+=A,Xe=Mi(Xe+D,Ut==="first"?-1.12:-.05,Ut==="first"?1.12:.75))}function w(A){Ut=A==="third"?"third":"first",Xe=A==="third"?.22:0,a.fov=A==="third"?58:72,a.updateProjectionMatrix(),Pt=null,Ot=!0}i.addEventListener("pointerdown",A=>{let D=t();!rt||!D.play||D.paused||A.button>0||Pt||(Pt={id:A.pointerId,x:A.clientX,y:A.clientY},i.setPointerCapture(A.pointerId))}),i.addEventListener("pointermove",A=>{!Pt||Pt.id!==A.pointerId||(Nt(-(A.clientX-Pt.x)*.006,(A.clientY-Pt.y)*.005),Pt.x=A.clientX,Pt.y=A.clientY)});let G=A=>{Pt?.id===A.pointerId&&(Pt=null)};for(let A of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(A,G);i.addEventListener("wheel",A=>{!rt||t().paused||(A.preventDefault(),Ut==="first"?(a.fov=Mi(a.fov+A.deltaY*.025,58,85),a.updateProjectionMatrix()):it=Mi(it+A.deltaY*.004,2.5,8))},{passive:!1}),i.addEventListener("webglcontextlost",A=>{A.preventDefault(),an=!0,rt=!1,Pt=null,n()}),i.addEventListener("webglcontextrestored",()=>{an=!1,Ot=!0});function Y(){r.setSize(innerWidth,innerHeight,!1),a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix()}function B(A){if(!rt||an)return;let D=t(),J=A/1e3,W=Bt?Mi((A-Bt)/1e3,0,.06):1/60;Bt=A,we=pu(D.basePos,D.baseLevel),nt=yc(we),He(M,D.labels?.board,"#ffe087"),M.tag&&(M.tag.position.y=1.65,M.tag.scale.set(1.4,.36,1)),q.visible=!!D.trail,D.trail&&(q.position.set(D.trail.x/_e,on(D.trail.x/_e,D.trail.y/_e),D.trail.y/_e),oe.material.opacity=.35+.13*Math.sin(J*3),(De!==D.trailNumber||K?.userData.text!==(D.trailNumber===4?D.labels?.finish||"4":D.trailNumber?String(D.trailNumber):D.trail.label))&&(K&&(q.remove(K),K.material.map.dispose(),K.material.dispose()),De=D.trailNumber,K=Re(De===4?D.labels?.finish||"4":De?String(De):D.trail.label,"#54e4ef"),K.userData.text=De===4?D.labels?.finish||"4":De?String(De):D.trail.label,K.position.y=1.5,K.scale.set(D.trailNumber?1:2.45,.4,1),q.add(K))),He(L,D.labels?.leon,"#b49966"),He(pt,D.labels?.nela,"#609991");let j=D.P.x/_e,ue=D.P.y/_e;h.update(),ne.update(J,we),ht.value=J,Q(D.objects,J),he(D.fishes,J,D.sea),ce(D.chapterMarkers,J);let ye={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2};Ne($e,D.P,Number.isFinite(D.heading)?D.heading:ye[D.face]||0,D.moving,J,W,D.fast?5.25:3,D),L.root.visible=pt.root.visible=!0;for(let[Ee,Be]of[[L,D.leon],[pt,D.nela]])Ne(Ee,Be,Math.atan2(j-Be.x/_e,ue-Be.y/_e),!1,J,W,0,{...D,raft:!1,spear:!1,blocked:!1,motion:null});let xe=new Set;for(let Ee of D.players){if(Ee.id===D.you)continue;xe.add(Ee.id);let Be=Et.get(Ee.id),ln=Ee.appearance?Fa(Ee.appearance):D.looks[Ee.slot]||{};(!Be||Be.name!==Ee.name)&&(Be&&z(Be),Be=ze(ln,"player",Ee.name),Et.set(Ee.id,Be)),qe(Be,ln);let xt=Be.lastX===null?0:Ee.point.x/_e-Be.lastX,kt=Be.lastZ===null?0:Ee.point.y/_e-Be.lastZ,Qt=Ee.moving&&Math.hypot(xt,kt)>.002?Math.atan2(xt,kt):ye[Ee.face]||0;Ne(Be,Ee.point,Qt,Ee.moving,J,W,3,{...D,spear:D.spearOwned&&!Ee.spearStowed,blocked:Ee.blocked,motion:Ee.motion&&Ee.motion.remaining-(A-Ee.received)>0?{kind:Ee.motion.kind,phase:1-(Ee.motion.remaining-(A-Ee.received))/(mu[Ee.motion.kind]||1e3)}:null})}for(let[Ee,Be]of Et)xe.has(Ee)||(z(Be),Et.delete(Ee));qe($e,D.appearance||Fa()),We.position.set(D.leon.x/_e+.9,on(D.leon.x/_e+.9,D.leon.y/_e+.15),D.leon.y/_e+.15),ut.position.set(D.chest.x/_e,on(D.chest.x/_e,D.chest.y/_e),D.chest.y/_e),ut.visible=!D.treasure,Ve(D),Ye(D.enemies,J);let Pe=we&&Math.abs(D.P.x-we.floor.x)<we.floor.w/2&&Math.abs(D.P.y-we.floor.y)<we.floor.h/2;for(let Ee of me)Ee.opacity=Pe&&Ut==="third"?.23:1,Ee.depthWrite=!(Pe&&Ut==="third");le&&(le.scale.y=1+Math.sin(J*13)*.18,Le.intensity=2.5+Math.sin(J*17)*.4);let Ue=D.objects.filter(Ee=>Math.hypot(Ee.x-D.P.x,Ee.y-D.P.y)<75).sort((Ee,Be)=>Math.hypot(Ee.x-D.P.x,Ee.y-D.P.y)-Math.hypot(Be.x-D.P.x,Be.y-D.P.y))[0];I.visible=!!(D.play&&!D.paused&&Ue),Ue&&I.position.set(Ue.x/_e,on(Ue.x/_e,Ue.y/_e)+.03,Ue.y/_e);for(let Ee=0;Ee<ie.length;Ee++){let Be=ie[Ee];Be.position.set(19+Math.sin(J*.08+Ee*1.7)*8,7+Math.sin(J*.2+Ee)*.5,12+Math.cos(J*.1+Ee*1.3)*5),Be.rotation.y=J*.1+Ee,Be.scale.y=1+Math.sin(J*7+Ee)*.5}$e.rig.visible=Ut!=="first";let Ce=D.moving&&!D.paused?Math.sin($e.phase*2)*.012:0,dt=Oa({x:j,z:ue,surface:$e.root.position.y,yaw:Te,pitch:Xe,mode:Ut,distance:it*(a.aspect<.85?1.12:1),bob:Ce});if(ge.copy(dt.target),je.copy(dt.position),Ut==="third"){je.y=Math.max(je.y,on(je.x,je.z)+.55);let Ee=je.clone().sub(ge),Be=Ee.length();Ee.normalize();let xt=new ki(ge,Ee,.08,Be).intersectObjects([Ae,We],!0).find(kt=>kt.object.isMesh&&kt.distance>.1);xt&&je.copy(ge).addScaledVector(Ee,Math.max(.35,xt.distance-.15))}Ut==="first"||Ot||Dt.distanceTo($e.root.position)>5?(a.position.copy(je),mt.copy(ge),Ot=!1):(uc(a.position,je,W,8),uc(mt,ge,W,12)),a.lookAt(Ut==="first"?ge:mt),Dt.copy($e.root.position);let tt=new N;o.updateMatrixWorld(!0),o.traverse(Ee=>{if(!Ee.isSprite)return;Ee.userData.signScale||(Ee.userData.signScale=Ee.scale.clone()),Ee.scale.copy(Ee.userData.signScale),Ee.getWorldPosition(tt);let Be=Math.max(.1,tt.distanceTo(a.position)),ln=Ee.scale.x*a.projectionMatrix.elements[0]*innerWidth/(2*Be),xt=Math.min(240,innerWidth*.52);ln>xt&&Ee.scale.multiplyScalar(xt/ln)});let Zt=!!D.spear||!!D.motion&&["gather","fish","cook"].includes(D.motion.kind);jt.visible=Ut==="first"&&D.play&&Zt&&!D.sea(D.P.x,D.P.y),vn.visible=!!D.spear&&!D.motion;for(let[Ee,Be]of Object.entries(fe))Be.visible=D.motion?.kind===Ee;jt.position.y=Ce*.4,jt.rotation.x=D.motion?Math.sin(D.motion.phase*Math.PI*2)*.07:0,ji.material=f(D.appearance?.skin||"#dda879"),Gn.material=f(D.appearance?.shirt||"#4c9cba"),Ba(l,j,ue),re.position.copy(a.position),$.update(J,a.position),r.render(o,a),D.play&&W>.038?mn+=W:mn=Math.max(0,mn-W),mn>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),Y(),mn=0)}function z(A){o.remove(A.root),A.tag&&(A.tag.material.map.dispose(),A.tag.material.dispose())}function se(A){return rt=!!A&&!an,Pt=null,Ot=!0,Bt=0,rt}function ve(){rt=!1,r.dispose(),R.dispose(),U.dispose(),$.dispose(),re.geometry.dispose(),re.material.dispose(),Z.traverse(A=>{A.geometry&&A.geometry.dispose(),A.material&&A.material.dispose()}),T.dispose(),ne.dispose(),h.dispose(),ct.dispose();for(let A of[...Object.values(ee),...F])A.geometry.dispose(),A.dispose();for(let A of p.values())A.dispose();for(let A of u.values())A.dispose()}return{frame:B,resize:Y,orbit:Nt,setEnabled:se,setCamera:w,dispose:ve,vector:(A,D)=>Du(A,D,Te),get enabled(){return rt},get yaw(){return Te},get cameraMode(){return Ut},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:Et.size+3,camera:Ut,eye:a.position.toArray(),materials:h.stats()})}}return Hu(U0);})();
