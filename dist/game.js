var nm=0,n0=1,im=2;var Cr=1,sm=2,Io=3,gs=0,qn=1,Mn=2,ri=0,Lo=1,rs=2,i0=3,s0=4,rm=5;var Pr=100,om=101,am=102,lm=103,cm=104,um=200,hm=201,fm=202,dm=203,r0=204,o0=205,pm=206,mm=207,gm=208,vm=209,xm=210,ym=211,_m=212,bm=213,Mm=214,Uc=0,Bc=1,Oc=2,go=3,kc=4,zc=5,Hc=6,Vc=7,a0=0,Sm=1,wm=2,os=0,l0=1,c0=2,u0=3,h0=4,f0=5,d0=6,ll=7;var p0=300,rr=301,Ir=302,_u=303,bu=304,cl=306,Ds=1e3,hs=1001,Wc=1002,Cn=1003,Tm=1004;var ul=1005;var zt=1006,Mu=1007;var Nn=1008;var jn=1009,m0=1010,g0=1011,Do=1012,Su=1013,as=1014,Oi=1015,Sn=1016,wu=1017,Tu=1018,No=1020,v0=35902,x0=35899,y0=1021,_0=1022,Qn=1023,fs=1026,or=1027,ar=1028,Eu=1029,lr=1030,Au=1031;var Ru=1033,hl=33776,fl=33777,dl=33778,pl=33779,Cu=35840,Pu=35841,Iu=35842,Lu=35843,Du=36196,Nu=37492,Fu=37496,Uu=37488,Bu=37489,ml=37490,Ou=37491,ku=37808,zu=37809,Hu=37810,Vu=37811,Wu=37812,Gu=37813,qu=37814,Xu=37815,Yu=37816,Zu=37817,Ku=37818,$u=37819,Ju=37820,ju=37821,Qu=36492,eh=36494,th=36495,nh=36283,ih=36284,gl=36285,sh=36286;var Ia=2300,Gc=2301,Dc=2302,Gf=2303,qf=2400,Xf=2401,Yf=2402;var Em=3200;var rh=0,Am=1,oi="",Wt="srgb",La="srgb-linear",Da="linear",Gt="srgb";var Nc=7680;var Rm=519,Cm=512,Pm=513,Im=514,oh=515,Lm=516,Dm=517,ah=518,Nm=519,Fm=35044;var b0="300 es",ns=2e3,vo=2001;function xx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Um(){let i=xo("canvas");return i.style.display="block",i}var bp={},yo=null;function M0(...i){let e="THREE."+i.shift();yo?yo("log",e,...i):console.log(e,...i)}function Bm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function dt(...i){i=Bm(i);let e="THREE."+i.shift();if(yo)yo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function vt(...i){i=Bm(i);let e="THREE."+i.shift();if(yo)yo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Tr(...i){let e=i.join(" ");e in bp||(bp[e]=!0,dt(...i))}function Om(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var km={[Uc]:Bc,[Oc]:Hc,[kc]:Vc,[go]:zc,[Bc]:Uc,[Hc]:Oc,[Vc]:kc,[zc]:go},ds=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vf=Math.PI/180,Na=180/Math.PI;function Fo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zn[i&255]+Zn[i>>8&255]+Zn[i>>16&255]+Zn[i>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[t&63|128]+Zn[t>>8&255]+"-"+Zn[t>>16&255]+Zn[t>>24&255]+Zn[n&255]+Zn[n>>8&255]+Zn[n>>16&255]+Zn[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function _x(i,e){return(i%e+e)%e}function xf(i,e,t){return(1-t)*i+t*e}function _a(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var R0=class R0{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};R0.prototype.isVector2=!0;var Ie=R0,xn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let a=n[s+0],u=n[s+1],h=n[s+2],p=n[s+3],m=r[o+0],x=r[o+1],_=r[o+2],M=r[o+3];if(p!==M||a!==m||u!==x||h!==_){let c=a*m+u*x+h*_+p*M;c<0&&(m=-m,x=-x,_=-_,M=-M,c=-c);let f=1-l;if(c<.9995){let d=Math.acos(c),g=Math.sin(d);f=Math.sin(f*d)/g,l=Math.sin(l*d)/g,a=a*f+m*l,u=u*f+x*l,h=h*f+_*l,p=p*f+M*l}else{a=a*f+m*l,u=u*f+x*l,h=h*f+_*l,p=p*f+M*l;let d=1/Math.sqrt(a*a+u*u+h*h+p*p);a*=d,u*=d,h*=d,p*=d}}e[t]=a,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],a=n[s+1],u=n[s+2],h=n[s+3],p=r[o],m=r[o+1],x=r[o+2],_=r[o+3];return e[t]=l*_+h*p+a*x-u*m,e[t+1]=a*_+h*m+u*p-l*x,e[t+2]=u*_+h*x+l*m-a*p,e[t+3]=h*_-l*p-a*m-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,a=Math.sin,u=l(n/2),h=l(s/2),p=l(r/2),m=a(n/2),x=a(s/2),_=a(r/2);switch(o){case"XYZ":this._x=m*h*p+u*x*_,this._y=u*x*p-m*h*_,this._z=u*h*_+m*x*p,this._w=u*h*p-m*x*_;break;case"YXZ":this._x=m*h*p+u*x*_,this._y=u*x*p-m*h*_,this._z=u*h*_-m*x*p,this._w=u*h*p+m*x*_;break;case"ZXY":this._x=m*h*p-u*x*_,this._y=u*x*p+m*h*_,this._z=u*h*_+m*x*p,this._w=u*h*p-m*x*_;break;case"ZYX":this._x=m*h*p-u*x*_,this._y=u*x*p+m*h*_,this._z=u*h*_-m*x*p,this._w=u*h*p+m*x*_;break;case"YZX":this._x=m*h*p+u*x*_,this._y=u*x*p+m*h*_,this._z=u*h*_-m*x*p,this._w=u*h*p-m*x*_;break;case"XZY":this._x=m*h*p-u*x*_,this._y=u*x*p-m*h*_,this._z=u*h*_+m*x*p,this._w=u*h*p+m*x*_;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],a=t[9],u=t[2],h=t[6],p=t[10],m=n+l+p;if(m>0){let x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(h-a)*x,this._y=(r-u)*x,this._z=(o-s)*x}else if(n>l&&n>p){let x=2*Math.sqrt(1+n-l-p);this._w=(h-a)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+u)/x}else if(l>p){let x=2*Math.sqrt(1+l-n-p);this._w=(r-u)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(a+h)/x}else{let x=2*Math.sqrt(1+p-n-l);this._w=(o-s)/x,this._x=(r+u)/x,this._y=(a+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,a=t._y,u=t._z,h=t._w;return this._x=n*h+o*l+s*u-r*a,this._y=s*h+o*a+r*l-n*u,this._z=r*h+o*u+n*a-s*l,this._w=o*h-n*l-s*a-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let a=1-t;if(l<.9995){let u=Math.acos(l),h=Math.sin(u);a=Math.sin(a*u)/h,t=Math.sin(t*u)/h,this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C0=class C0{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,a=e.w,u=2*(o*s-l*n),h=2*(l*t-r*s),p=2*(r*n-o*t);return this.x=t+a*u+o*p-l*h,this.y=n+a*h+l*u-r*p,this.z=s+a*p+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,a=t.z;return this.x=s*a-r*l,this.y=r*o-n*a,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yf.copy(this).projectOnVector(e),this.sub(yf)}reflect(e){return this.sub(yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};C0.prototype.isVector3=!0;var H=C0,yf=new H,Mp=new xn,P0=class P0{constructor(e,t,n,s,r,o,l,a,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,u)}set(e,t,n,s,r,o,l,a,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=a,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],a=n[6],u=n[1],h=n[4],p=n[7],m=n[2],x=n[5],_=n[8],M=s[0],c=s[3],f=s[6],d=s[1],g=s[4],v=s[7],b=s[2],T=s[5],w=s[8];return r[0]=o*M+l*d+a*b,r[3]=o*c+l*g+a*T,r[6]=o*f+l*v+a*w,r[1]=u*M+h*d+p*b,r[4]=u*c+h*g+p*T,r[7]=u*f+h*v+p*w,r[2]=m*M+x*d+_*b,r[5]=m*c+x*g+_*T,r[8]=m*f+x*v+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8];return t*o*h-t*l*u-n*r*h+n*l*a+s*r*u-s*o*a}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8],p=h*o-l*u,m=l*a-h*r,x=u*r-o*a,_=t*p+n*m+s*x;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=p*M,e[1]=(s*u-h*n)*M,e[2]=(l*n-s*o)*M,e[3]=m*M,e[4]=(h*t-s*a)*M,e[5]=(s*r-l*t)*M,e[6]=x*M,e[7]=(n*a-u*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let a=Math.cos(r),u=Math.sin(r);return this.set(n*a,n*u,-n*(a*o+u*l)+o+e,-s*u,s*a,-s*(-u*o+a*l)+l+t,0,0,1),this}scale(e,t){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_f.makeScale(e,t)),this}rotate(e){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_f.makeRotation(-e)),this}translate(e,t){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_f.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};P0.prototype.isMatrix3=!0;var xt=P0,_f=new xt,Sp=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wp=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bx(){let i={enabled:!0,workingColorSpace:La,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Gt&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Gt&&(s.r=po(s.r),s.g=po(s.g),s.b=po(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[La]:{primaries:e,whitePoint:n,transfer:Da,toXYZ:Sp,fromXYZ:wp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Gt,toXYZ:Sp,fromXYZ:wp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}var Lt=bx();function Ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function po(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jr,qc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jr===void 0&&(jr=xo("canvas")),jr.width=e.width,jr.height=e.height;let s=jr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=jr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ls(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ls(t[n]/255)*255):t[n]=Ls(t[n]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mx=0,_o=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(bf(s[o].image)):r.push(bf(s[o]))}else r=bf(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}var Sx=0,Mf=new H,$n=class i extends ds{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hs,s=hs,r=zt,o=Nn,l=Qn,a=jn,u=i.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Fo(),this.name="",this.source=new _o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mf).x}get height(){return this.source.getSize(Mf).y}get depth(){return this.source.getSize(Mf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ds:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case Wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ds:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case Wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=p0;$n.DEFAULT_ANISOTROPY=1;var I0=class I0{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,a=e.elements,u=a[0],h=a[4],p=a[8],m=a[1],x=a[5],_=a[9],M=a[2],c=a[6],f=a[10];if(Math.abs(h-m)<.01&&Math.abs(p-M)<.01&&Math.abs(_-c)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+M)<.1&&Math.abs(_+c)<.1&&Math.abs(u+x+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(u+1)/2,v=(x+1)/2,b=(f+1)/2,T=(h+m)/4,w=(p+M)/4,y=(_+c)/4;return g>v&&g>b?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=T/n,r=w/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=y/r),this.set(n,s,r,t),this}let d=Math.sqrt((c-_)*(c-_)+(p-M)*(p-M)+(m-h)*(m-h));return Math.abs(d)<.001&&(d=1),this.x=(c-_)/d,this.y=(p-M)/d,this.z=(m-h)/d,this.w=Math.acos((u+x+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};I0.prototype.isVector4=!0;var pt=I0,Xc=class extends ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new $n(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new _o(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fa=class extends $n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yc=class extends $n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var yu=class yu{constructor(e,t,n,s,r,o,l,a,u,h,p,m,x,_,M,c){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,u,h,p,m,x,_,M,c)}set(e,t,n,s,r,o,l,a,u,h,p,m,x,_,M,c){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=l,f[13]=a,f[2]=u,f[6]=h,f[10]=p,f[14]=m,f[3]=x,f[7]=_,f[11]=M,f[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yu().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Qr.setFromMatrixColumn(e,0).length(),r=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(s),u=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let m=o*h,x=o*p,_=l*h,M=l*p;t[0]=a*h,t[4]=-a*p,t[8]=u,t[1]=x+_*u,t[5]=m-M*u,t[9]=-l*a,t[2]=M-m*u,t[6]=_+x*u,t[10]=o*a}else if(e.order==="YXZ"){let m=a*h,x=a*p,_=u*h,M=u*p;t[0]=m+M*l,t[4]=_*l-x,t[8]=o*u,t[1]=o*p,t[5]=o*h,t[9]=-l,t[2]=x*l-_,t[6]=M+m*l,t[10]=o*a}else if(e.order==="ZXY"){let m=a*h,x=a*p,_=u*h,M=u*p;t[0]=m-M*l,t[4]=-o*p,t[8]=_+x*l,t[1]=x+_*l,t[5]=o*h,t[9]=M-m*l,t[2]=-o*u,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){let m=o*h,x=o*p,_=l*h,M=l*p;t[0]=a*h,t[4]=_*u-x,t[8]=m*u+M,t[1]=a*p,t[5]=M*u+m,t[9]=x*u-_,t[2]=-u,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){let m=o*a,x=o*u,_=l*a,M=l*u;t[0]=a*h,t[4]=M-m*p,t[8]=_*p+x,t[1]=p,t[5]=o*h,t[9]=-l*h,t[2]=-u*h,t[6]=x*p+_,t[10]=m-M*p}else if(e.order==="XZY"){let m=o*a,x=o*u,_=l*a,M=l*u;t[0]=a*h,t[4]=-p,t[8]=u*h,t[1]=m*p+M,t[5]=o*h,t[9]=x*p-_,t[2]=_*p-x,t[6]=l*h,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wx,e,Tx)}lookAt(e,t,n){let s=this.elements;return Ti.subVectors(e,t),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ys.crossVectors(n,Ti),Ys.lengthSq()===0&&(Math.abs(n.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ys.crossVectors(n,Ti)),Ys.normalize(),ac.crossVectors(Ti,Ys),s[0]=Ys.x,s[4]=ac.x,s[8]=Ti.x,s[1]=Ys.y,s[5]=ac.y,s[9]=Ti.y,s[2]=Ys.z,s[6]=ac.z,s[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],a=n[8],u=n[12],h=n[1],p=n[5],m=n[9],x=n[13],_=n[2],M=n[6],c=n[10],f=n[14],d=n[3],g=n[7],v=n[11],b=n[15],T=s[0],w=s[4],y=s[8],S=s[12],E=s[1],R=s[5],C=s[9],L=s[13],A=s[2],I=s[6],D=s[10],F=s[14],z=s[3],U=s[7],V=s[11],k=s[15];return r[0]=o*T+l*E+a*A+u*z,r[4]=o*w+l*R+a*I+u*U,r[8]=o*y+l*C+a*D+u*V,r[12]=o*S+l*L+a*F+u*k,r[1]=h*T+p*E+m*A+x*z,r[5]=h*w+p*R+m*I+x*U,r[9]=h*y+p*C+m*D+x*V,r[13]=h*S+p*L+m*F+x*k,r[2]=_*T+M*E+c*A+f*z,r[6]=_*w+M*R+c*I+f*U,r[10]=_*y+M*C+c*D+f*V,r[14]=_*S+M*L+c*F+f*k,r[3]=d*T+g*E+v*A+b*z,r[7]=d*w+g*R+v*I+b*U,r[11]=d*y+g*C+v*D+b*V,r[15]=d*S+g*L+v*F+b*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],a=e[9],u=e[13],h=e[2],p=e[6],m=e[10],x=e[14],_=e[3],M=e[7],c=e[11],f=e[15],d=a*x-u*m,g=l*x-u*p,v=l*m-a*p,b=o*x-u*h,T=o*m-a*h,w=o*p-l*h;return t*(M*d-c*g+f*v)-n*(_*d-c*b+f*T)+s*(_*g-M*b+f*w)-r*(_*v-M*T+c*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],a=e[2],u=e[6],h=e[10];return t*(o*h-l*u)-n*(r*h-l*a)+s*(r*u-o*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8],p=e[9],m=e[10],x=e[11],_=e[12],M=e[13],c=e[14],f=e[15],d=t*l-n*o,g=t*a-s*o,v=t*u-r*o,b=n*a-s*l,T=n*u-r*l,w=s*u-r*a,y=h*M-p*_,S=h*c-m*_,E=h*f-x*_,R=p*c-m*M,C=p*f-x*M,L=m*f-x*c,A=d*L-g*C+v*R+b*E-T*S+w*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=(l*L-a*C+u*R)*I,e[1]=(s*C-n*L-r*R)*I,e[2]=(M*w-c*T+f*b)*I,e[3]=(m*T-p*w-x*b)*I,e[4]=(a*E-o*L-u*S)*I,e[5]=(t*L-s*E+r*S)*I,e[6]=(c*v-_*w-f*g)*I,e[7]=(h*w-m*v+x*g)*I,e[8]=(o*C-l*E+u*y)*I,e[9]=(n*E-t*C-r*y)*I,e[10]=(_*T-M*v+f*d)*I,e[11]=(p*v-h*T-x*d)*I,e[12]=(l*S-o*R-a*y)*I,e[13]=(t*R-n*S+s*y)*I,e[14]=(M*g-_*b-c*d)*I,e[15]=(h*b-p*g+m*d)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,a=e.z,u=r*o,h=r*l;return this.set(u*o+n,u*l-s*a,u*a+s*l,0,u*l+s*a,h*l+n,h*a-s*o,0,u*a-s*l,h*a+s*o,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,a=t._w,u=r+r,h=o+o,p=l+l,m=r*u,x=r*h,_=r*p,M=o*h,c=o*p,f=l*p,d=a*u,g=a*h,v=a*p,b=n.x,T=n.y,w=n.z;return s[0]=(1-(M+f))*b,s[1]=(x+v)*b,s[2]=(_-g)*b,s[3]=0,s[4]=(x-v)*T,s[5]=(1-(m+f))*T,s[6]=(c+d)*T,s[7]=0,s[8]=(_+g)*w,s[9]=(c-d)*w,s[10]=(1-(m+M))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Qr.set(s[0],s[1],s[2]).length(),l=Qr.set(s[4],s[5],s[6]).length(),a=Qr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ji.copy(this);let u=1/o,h=1/l,p=1/a;return ji.elements[0]*=u,ji.elements[1]*=u,ji.elements[2]*=u,ji.elements[4]*=h,ji.elements[5]*=h,ji.elements[6]*=h,ji.elements[8]*=p,ji.elements[9]*=p,ji.elements[10]*=p,t.setFromRotationMatrix(ji),n.x=o,n.y=l,n.z=a,this}makePerspective(e,t,n,s,r,o,l=ns,a=!1){let u=this.elements,h=2*r/(t-e),p=2*r/(n-s),m=(t+e)/(t-e),x=(n+s)/(n-s),_,M;if(a)_=r/(o-r),M=o*r/(o-r);else if(l===ns)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(l===vo)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=p,u[9]=x,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=ns,a=!1){let u=this.elements,h=2/(t-e),p=2/(n-s),m=-(t+e)/(t-e),x=-(n+s)/(n-s),_,M;if(a)_=1/(o-r),M=o/(o-r);else if(l===ns)_=-2/(o-r),M=-(o+r)/(o-r);else if(l===vo)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=p,u[9]=0,u[13]=x,u[2]=0,u[6]=0,u[10]=_,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};yu.prototype.isMatrix4=!0;var et=yu,Qr=new H,ji=new et,wx=new H(0,0,0),Tx=new H(1,1,1),Ys=new H,ac=new H,Ti=new H,Tp=new et,Ep=new xn,Jn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],a=s[1],u=s[5],h=s[9],p=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(a,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-Ct(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,x),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Ua=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ex=0,Ap=new H,eo=new xn,As=new et,lc=new H,ba=new H,Ax=new H,Rx=new xn,Rp=new H(1,0,0),Cp=new H(0,1,0),Pp=new H(0,0,1),Ip={type:"added"},Cx={type:"removed"},to={type:"childadded",child:null},Sf={type:"childremoved",child:null},Pn=class i extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Jn,n=new xn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new xt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Pp,e)}translateOnAxis(e,t){return Ap.copy(e).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(As.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lc.copy(e):lc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?As.lookAt(ba,lc,this.up):As.lookAt(lc,ba,this.up),this.quaternion.setFromRotationMatrix(As),s&&(As.extractRotation(s.matrixWorld),eo.setFromRotationMatrix(As),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ip),to.child=e,this.dispatchEvent(to),to.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cx),Sf.child=e,this.dispatchEvent(Sf),Sf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),As.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),As.multiply(e.parent.matrixWorld)),e.applyMatrix4(As),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ip),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,Ax),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,Rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let a=l.shapes;if(Array.isArray(a))for(let u=0,h=a.length;u<h;u++){let p=a[u];r(e.shapes,p)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let a=0,u=this.material.length;a<u;a++)l.push(r(e.materials,this.material[a]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let a=this.animations[l];s.animations.push(r(e.animations,a))}}if(t){let l=o(e.geometries),a=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),x=o(e.animations),_=o(e.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(l){let a=[];for(let u in l){let h=l[u];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pn.DEFAULT_UP=new H(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=class extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Px={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,a=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let M of e.hand.values()){let c=t.getJointPose(M,n),f=this._getHandJoint(u,M);c!==null&&(f.matrix.fromArray(c.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=c.radius),f.visible=c!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=h.position.distanceTo(p.position),x=.02,_=.005;u.inputState.pinching&&m>x+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=x-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Px)))}return l!==null&&(l.visible=s!==null),a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zs={h:0,s:0,l:0},cc={h:0,s:0,l:0};function wf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Lt.workingColorSpace){if(e=_x(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wf(o,r,e+1/3),this.g=wf(o,r,e),this.b=wf(o,r,e-1/3)}return Lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=zm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Lt.workingToColorSpace(Kn.copy(this),e),Math.round(Ct(Kn.r*255,0,255))*65536+Math.round(Ct(Kn.g*255,0,255))*256+Math.round(Ct(Kn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Kn.copy(this),t);let n=Kn.r,s=Kn.g,r=Kn.b,o=Math.max(n,s,r),l=Math.min(n,s,r),a,u,h=(l+o)/2;if(l===o)a=0,u=0;else{let p=o-l;switch(u=h<=.5?p/(o+l):p/(2-o-l),o){case n:a=(s-r)/p+(s<r?6:0);break;case s:a=(r-n)/p+2;break;case r:a=(n-s)/p+4;break}a/=6}return e.h=a,e.s=u,e.l=h,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Wt){Lt.workingToColorSpace(Kn.copy(this),e);let t=Kn.r,n=Kn.g,s=Kn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zs),this.setHSL(Zs.h+e,Zs.s+t,Zs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zs),e.getHSL(cc);let n=xf(Zs.h,cc.h,t),s=xf(Zs.s,cc.s,t),r=xf(Zs.l,cc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kn=new ue;ue.NAMES=zm;var Ba=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ue(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Er=class extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qi=new H,Rs=new H,Tf=new H,Cs=new H,no=new H,io=new H,Lp=new H,Ef=new H,Af=new H,Rf=new H,Cf=new pt,Pf=new pt,If=new pt,js=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qi.subVectors(e,t),s.cross(Qi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Qi.subVectors(s,t),Rs.subVectors(n,t),Tf.subVectors(e,t);let o=Qi.dot(Qi),l=Qi.dot(Rs),a=Qi.dot(Tf),u=Rs.dot(Rs),h=Rs.dot(Tf),p=o*u-l*l;if(p===0)return r.set(0,0,0),null;let m=1/p,x=(u*a-l*h)*m,_=(o*h-l*a)*m;return r.set(1-x-_,_,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Cs)===null?!1:Cs.x>=0&&Cs.y>=0&&Cs.x+Cs.y<=1}static getInterpolation(e,t,n,s,r,o,l,a){return this.getBarycoord(e,t,n,s,Cs)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,Cs.x),a.addScaledVector(o,Cs.y),a.addScaledVector(l,Cs.z),a)}static getInterpolatedAttribute(e,t,n,s,r,o){return Cf.setScalar(0),Pf.setScalar(0),If.setScalar(0),Cf.fromBufferAttribute(e,t),Pf.fromBufferAttribute(e,n),If.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Cf,r.x),o.addScaledVector(Pf,r.y),o.addScaledVector(If,r.z),o}static isFrontFacing(e,t,n,s){return Qi.subVectors(n,t),Rs.subVectors(e,t),Qi.cross(Rs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qi.subVectors(this.c,this.b),Rs.subVectors(this.a,this.b),Qi.cross(Rs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;no.subVectors(s,n),io.subVectors(r,n),Ef.subVectors(e,n);let a=no.dot(Ef),u=io.dot(Ef);if(a<=0&&u<=0)return t.copy(n);Af.subVectors(e,s);let h=no.dot(Af),p=io.dot(Af);if(h>=0&&p<=h)return t.copy(s);let m=a*p-h*u;if(m<=0&&a>=0&&h<=0)return o=a/(a-h),t.copy(n).addScaledVector(no,o);Rf.subVectors(e,r);let x=no.dot(Rf),_=io.dot(Rf);if(_>=0&&x<=_)return t.copy(r);let M=x*u-a*_;if(M<=0&&u>=0&&_<=0)return l=u/(u-_),t.copy(n).addScaledVector(io,l);let c=h*_-x*p;if(c<=0&&p-h>=0&&x-_>=0)return Lp.subVectors(r,s),l=(p-h)/(p-h+(x-_)),t.copy(s).addScaledVector(Lp,l);let f=1/(c+M+m);return o=M*f,l=m*f,t.copy(n).addScaledVector(no,o).addScaledVector(io,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gi=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(es.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(es.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=es.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,es):es.fromBufferAttribute(r,o),es.applyMatrix4(e.matrixWorld),this.expandByPoint(es);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uc.copy(n.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,es),es.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),hc.subVectors(this.max,Ma),so.subVectors(e.a,Ma),ro.subVectors(e.b,Ma),oo.subVectors(e.c,Ma),Ks.subVectors(ro,so),$s.subVectors(oo,ro),br.subVectors(so,oo);let t=[0,-Ks.z,Ks.y,0,-$s.z,$s.y,0,-br.z,br.y,Ks.z,0,-Ks.x,$s.z,0,-$s.x,br.z,0,-br.x,-Ks.y,Ks.x,0,-$s.y,$s.x,0,-br.y,br.x,0];return!Lf(t,so,ro,oo,hc)||(t=[1,0,0,0,1,0,0,0,1],!Lf(t,so,ro,oo,hc))?!1:(fc.crossVectors(Ks,$s),t=[fc.x,fc.y,fc.z],Lf(t,so,ro,oo,hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,es).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(es).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ps=[new H,new H,new H,new H,new H,new H,new H,new H],es=new H,uc=new gi,so=new H,ro=new H,oo=new H,Ks=new H,$s=new H,br=new H,Ma=new H,hc=new H,fc=new H,Mr=new H;function Lf(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mr.fromArray(i,r);let l=s.x*Math.abs(Mr.x)+s.y*Math.abs(Mr.y)+s.z*Math.abs(Mr.z),a=e.dot(Mr),u=t.dot(Mr),h=n.dot(Mr);if(Math.max(-Math.max(a,u,h),Math.min(a,u,h))>l)return!1}return!0}var Rn=new H,dc=new Ie,Ix=0,St=class extends ds{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ix++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fm,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dc.fromBufferAttribute(this,t),dc.applyMatrix3(e),this.setXY(t,dc.x,dc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix3(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_a(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_a(t,this.array)),t}setX(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_a(t,this.array)),t}setY(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_a(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_a(t,this.array)),t}setW(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),n=mi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),n=mi(n,this.array),s=mi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),n=mi(n,this.array),s=mi(s,this.array),r=mi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Oa=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ka=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lx=new gi,Sa=new H,Df=new H,vi=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Lx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);let t=Sa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Sa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(Df)),this.expandByPoint(Sa.copy(e.center).sub(Df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dx=0,Ui=new et,Nf=new Pn,ao=new H,Ei=new gi,wa=new gi,On=new H,yt=class i extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xx(e)?ka:Oa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,t,n){return Ui.makeTranslation(e,t,n),this.applyMatrix4(Ui),this}scale(e,t,n){return Ui.makeScale(e,t,n),this.applyMatrix4(Ui),this}lookAt(e){return Nf.lookAt(e),Nf.updateMatrix(),this.applyMatrix4(Nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ei.setFromBufferAttribute(r),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];wa.setFromBufferAttribute(l),this.morphTargetsRelative?(On.addVectors(Ei.min,wa.min),Ei.expandByPoint(On),On.addVectors(Ei.max,wa.max),Ei.expandByPoint(On)):(Ei.expandByPoint(wa.min),Ei.expandByPoint(wa.max))}Ei.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)On.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(On));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],a=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)On.fromBufferAttribute(l,u),a&&(ao.fromBufferAttribute(e,u),On.add(ao)),s=Math.max(s,n.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new St(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],a=[];for(let y=0;y<n.count;y++)l[y]=new H,a[y]=new H;let u=new H,h=new H,p=new H,m=new Ie,x=new Ie,_=new Ie,M=new H,c=new H;function f(y,S,E){u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),p.fromBufferAttribute(n,E),m.fromBufferAttribute(r,y),x.fromBufferAttribute(r,S),_.fromBufferAttribute(r,E),h.sub(u),p.sub(u),x.sub(m),_.sub(m);let R=1/(x.x*_.y-_.x*x.y);isFinite(R)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(p,-x.y).multiplyScalar(R),c.copy(p).multiplyScalar(x.x).addScaledVector(h,-_.x).multiplyScalar(R),l[y].add(M),l[S].add(M),l[E].add(M),a[y].add(c),a[S].add(c),a[E].add(c))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let y=0,S=d.length;y<S;++y){let E=d[y],R=E.start,C=E.count;for(let L=R,A=R+C;L<A;L+=3)f(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let g=new H,v=new H,b=new H,T=new H;function w(y){b.fromBufferAttribute(s,y),T.copy(b);let S=l[y];g.copy(S),g.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(T,S);let R=v.dot(a[y])<0?-1:1;o.setXYZW(y,g.x,g.y,g.z,R)}for(let y=0,S=d.length;y<S;++y){let E=d[y],R=E.start,C=E.count;for(let L=R,A=R+C;L<A;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);let s=new H,r=new H,o=new H,l=new H,a=new H,u=new H,h=new H,p=new H;if(e)for(let m=0,x=e.count;m<x;m+=3){let _=e.getX(m+0),M=e.getX(m+1),c=e.getX(m+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,c),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),l.fromBufferAttribute(n,_),a.fromBufferAttribute(n,M),u.fromBufferAttribute(n,c),l.add(h),a.add(h),u.add(h),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(c,u.x,u.y,u.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)On.fromBufferAttribute(e,t),On.normalize(),e.setXYZ(t,On.x,On.y,On.z)}toNonIndexed(){function e(l,a){let u=l.array,h=l.itemSize,p=l.normalized,m=new u.constructor(a.length*h),x=0,_=0;for(let M=0,c=a.length;M<c;M++){l.isInterleavedBufferAttribute?x=a[M]*l.data.stride+l.offset:x=a[M]*h;for(let f=0;f<h;f++)m[_++]=u[x++]}return new St(m,h,p)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let a=s[l],u=e(a,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let a=[],u=r[l];for(let h=0,p=u.length;h<p;h++){let m=u[h],x=e(m,n);a.push(x)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,a=o.length;l<a;l++){let u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let u in a)a[u]!==void 0&&(e[u]=a[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let a in n){let u=n[a];e.data.attributes[a]=u.toJSON(e.data)}let s={},r=!1;for(let a in this.morphAttributes){let u=this.morphAttributes[a],h=[];for(let p=0,m=u.length;p<m;p++){let x=u[p];h.push(x.toJSON(e.data))}h.length>0&&(s[a]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],p=r[u];for(let m=0,x=p.length;m<x;m++)h.push(p[m].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ff=new H,Nx=new H,Fx=new xt,ts=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ff.subVectors(n,t).cross(Nx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ff),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fx.getNormalMatrix(e),s=this.coplanarPoint(Ff).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ux=0,ps=class extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Lo,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=r0,this.blendDst=o0,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nc,this.stencilZFail=Nc,this.stencilZPass=Nc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let a=r[l];delete a.metadata,o.push(a)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ts().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Is=new H,Uf=new H,pc=new H,mc=new H,Mo=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Is)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Is.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Is.copy(this.origin).addScaledVector(this.direction,t),Is.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Uf.copy(e).add(t).multiplyScalar(.5),pc.copy(t).sub(e).normalize(),mc.copy(this.origin).sub(Uf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(pc),l=mc.dot(this.direction),a=-mc.dot(pc),u=mc.lengthSq(),h=Math.abs(1-o*o),p,m,x,_;if(h>0)if(p=o*a-l,m=o*l-a,_=r*h,p>=0)if(m>=-_)if(m<=_){let M=1/h;p*=M,m*=M,x=p*(p+o*m+2*l)+m*(o*p+m+2*a)+u}else m=r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;else m=-r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;else m<=-_?(p=Math.max(0,-(-o*r+l)),m=p>0?-r:Math.min(Math.max(-r,-a),r),x=-p*p+m*(m+2*a)+u):m<=_?(p=0,m=Math.min(Math.max(-r,-a),r),x=m*(m+2*a)+u):(p=Math.max(0,-(o*r+l)),m=p>0?r:Math.min(Math.max(-r,-a),r),x=-p*p+m*(m+2*a)+u);else m=o>0?-r:r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Uf).addScaledVector(pc,m),x}intersectSphere(e,t){if(e.radius<0)return null;Is.subVectors(e.center,this.origin);let n=Is.dot(this.direction),s=Is.dot(Is)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,a,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),h>=0?(r=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(l=(e.min.z-m.z)*p,a=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,a=(e.min.z-m.z)*p),n>a||l>s)||((l>n||n!==n)&&(n=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Is)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,a=l.x,u=l.y,h=l.z,p=e.x-o.x,m=e.y-o.y,x=e.z-o.z,_=t.x-o.x,M=t.y-o.y,c=t.z-o.z,f=n.x-o.x,d=n.y-o.y,g=n.z-o.z,v=Math.abs(a),b=Math.abs(u),T=Math.abs(h),w,y,S,E,R,C,L,A,I,D,F,z;if(v>=b&&v>=T?(S=a,C=p,I=_,z=f,a>=0?(w=u,y=h,E=m,R=x,L=M,A=c,D=d,F=g):(w=h,y=u,E=x,R=m,L=c,A=M,D=g,F=d)):b>=T?(S=u,C=m,I=M,z=d,u>=0?(w=h,y=a,E=x,R=p,L=c,A=_,D=g,F=f):(w=a,y=h,E=p,R=x,L=_,A=c,D=f,F=g)):(S=h,C=x,I=c,z=g,h>=0?(w=a,y=u,E=p,R=m,L=_,A=M,D=f,F=d):(w=u,y=a,E=m,R=p,L=M,A=_,D=d,F=f)),S===0)return null;let U=w/S,V=y/S,k=1/S,X=E-U*C,j=R-V*C,Me=L-U*I,Se=A-V*I,we=D-U*z,Z=F-V*z,q=we*Se-Z*Me,ve=X*Z-j*we,Pe=Me*j-Se*X;if(s){if(q<0||ve<0||Pe<0)return null}else if((q<0||ve<0||Pe<0)&&(q>0||ve>0||Pe>0))return null;let ee=q+ve+Pe;if(ee===0)return null;let xe=k*(q*C+ve*I+Pe*z);return(ee>0?xe<0:xe>0)?null:this.at(xe/ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=a0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dp=new et,Sr=new Mo,gc=new vi,Np=new H,vc=new H,xc=new H,yc=new H,Bf=new H,_c=new H,Fp=new H,bc=new H,mt=class extends Pn{constructor(e=new yt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){_c.set(0,0,0);for(let a=0,u=r.length;a<u;a++){let h=l[a],p=r[a];h!==0&&(Bf.fromBufferAttribute(p,e),o?_c.addScaledVector(Bf,h):_c.addScaledVector(Bf.sub(t),h))}t.add(_c)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(r),Sr.copy(e.ray).recast(e.near),!(gc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(gc,Np)===null||Sr.origin.distanceToSquared(Np)>(e.far-e.near)**2))&&(Dp.copy(r).invert(),Sr.copy(e.ray).applyMatrix4(Dp),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Sr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,m=r.groups,x=r.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,M=m.length;_<M;_++){let c=m[_],f=o[c.materialIndex],d=Math.max(c.start,x.start),g=Math.min(l.count,Math.min(c.start+c.count,x.start+x.count));for(let v=d,b=g;v<b;v+=3){let T=l.getX(v),w=l.getX(v+1),y=l.getX(v+2);s=Mc(this,f,e,n,u,h,p,T,w,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{let _=Math.max(0,x.start),M=Math.min(l.count,x.start+x.count);for(let c=_,f=M;c<f;c+=3){let d=l.getX(c),g=l.getX(c+1),v=l.getX(c+2);s=Mc(this,o,e,n,u,h,p,d,g,v),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(o))for(let _=0,M=m.length;_<M;_++){let c=m[_],f=o[c.materialIndex],d=Math.max(c.start,x.start),g=Math.min(a.count,Math.min(c.start+c.count,x.start+x.count));for(let v=d,b=g;v<b;v+=3){let T=v,w=v+1,y=v+2;s=Mc(this,f,e,n,u,h,p,T,w,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{let _=Math.max(0,x.start),M=Math.min(a.count,x.start+x.count);for(let c=_,f=M;c<f;c+=3){let d=c,g=c+1,v=c+2;s=Mc(this,o,e,n,u,h,p,d,g,v),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}}};function Bx(i,e,t,n,s,r,o,l){let a;if(e.side===qn?a=n.intersectTriangle(o,r,s,!0,l):a=n.intersectTriangle(s,r,o,e.side===gs,l),a===null)return null;bc.copy(l),bc.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(bc);return u<t.near||u>t.far?null:{distance:u,point:bc.clone(),object:i}}function Mc(i,e,t,n,s,r,o,l,a,u){i.getVertexPosition(l,vc),i.getVertexPosition(a,xc),i.getVertexPosition(u,yc);let h=Bx(i,e,t,n,vc,xc,yc,Fp);if(h){let p=new H;js.getBarycoord(Fp,vc,xc,yc,p),s&&(h.uv=js.getInterpolatedAttribute(s,l,a,u,p,new Ie)),r&&(h.uv1=js.getInterpolatedAttribute(r,l,a,u,p,new Ie)),o&&(h.normal=js.getInterpolatedAttribute(o,l,a,u,p,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a:l,b:a,c:u,normal:new H,materialIndex:0};js.getNormal(vc,xc,yc,m.normal),h.face=m,h.barycoord=p}return h}var is=class extends $n{constructor(e=null,t=1,n=1,s,r,o,l,a,u=Cn,h=Cn,p,m){super(null,o,l,a,u,h,s,r,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class extends St{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},lo=new et,Up=new et,Sc=[],Bp=new gi,Ox=new et,Ta=new mt,Ea=new vi,ss=class extends mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ox)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lo),Bp.copy(e.boundingBox).applyMatrix4(lo),this.boundingBox.union(Bp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lo),Ea.copy(e.boundingSphere).applyMatrix4(lo),this.boundingSphere.union(Ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(n),e.ray.intersectsSphere(Ea)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,lo),Up.multiplyMatrices(n,lo),Ta.matrixWorld=Up,Ta.raycast(e,Sc);for(let o=0,l=Sc.length;o<l;o++){let a=Sc[o];a.instanceId=r,a.object=this,t.push(a)}Sc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Dn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new is(new Float32Array(s*this.count),s,this.count,ar,Oi));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let l=this.geometry.morphTargetsRelative?1:1-o,a=s*e;return r[a]=l,r.set(n,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wr=new vi,kx=new Ie(.5,.5),wc=new H,So=class{constructor(e=new ts,t=new ts,n=new ts,s=new ts,r=new ts,o=new ts){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ns,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],a=r[2],u=r[3],h=r[4],p=r[5],m=r[6],x=r[7],_=r[8],M=r[9],c=r[10],f=r[11],d=r[12],g=r[13],v=r[14],b=r[15];if(s[0].setComponents(u-o,x-h,f-_,b-d).normalize(),s[1].setComponents(u+o,x+h,f+_,b+d).normalize(),s[2].setComponents(u+l,x+p,f+M,b+g).normalize(),s[3].setComponents(u-l,x-p,f-M,b-g).normalize(),n)s[4].setComponents(a,m,c,v).normalize(),s[5].setComponents(u-a,x-m,f-c,b-v).normalize();else if(s[4].setComponents(u-a,x-m,f-c,b-v).normalize(),t===ns)s[5].setComponents(u+a,x+m,f+c,b+v).normalize();else if(t===vo)s[5].setComponents(a,m,c,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);let t=kx.distanceTo(e.center);return wr.radius=.7071067811865476+t,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(wc.x=s.normal.x>0?e.max.x:e.min.x,wc.y=s.normal.y>0?e.max.y:e.min.y,wc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zc=class extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kc=new H,$c=new H,Op=new et,Aa=new Mo,Tc=new vi,Of=new H,kp=new H,za=class extends Pn{constructor(e=new yt,t=new Zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Kc.fromBufferAttribute(t,s-1),$c.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Kc.distanceTo($c);e.setAttribute("lineDistance",new je(n,1))}else dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(s),Tc.radius+=r,e.ray.intersectsSphere(Tc)===!1)return;Op.copy(s).invert(),Aa.copy(e.ray).applyMatrix4(Op);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let x=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let M=x,c=_-1;M<c;M+=u){let f=h.getX(M),d=h.getX(M+1),g=Ec(this,e,Aa,a,f,d,M);g&&t.push(g)}if(this.isLineLoop){let M=h.getX(_-1),c=h.getX(x),f=Ec(this,e,Aa,a,M,c,_-1);f&&t.push(f)}}else{let x=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let M=x,c=_-1;M<c;M+=u){let f=Ec(this,e,Aa,a,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){let M=Ec(this,e,Aa,a,_-1,x,_-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Ec(i,e,t,n,s,r,o){let l=i.geometry.attributes.position;if(Kc.fromBufferAttribute(l,s),$c.fromBufferAttribute(l,r),t.distanceSqToSegment(Kc,$c,Of,kp)>n)return;Of.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Of);if(!(u<e.near||u>e.far))return{distance:u,point:kp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var wo=class extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zp=new et,Zf=new Mo,Ac=new vi,Rc=new H,Ha=class extends Pn{constructor(e=new yt,t=new wo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ac.copy(n.boundingSphere),Ac.applyMatrix4(s),Ac.radius+=r,e.ray.intersectsSphere(Ac)===!1)return;zp.copy(s).invert(),Zf.copy(e.ray).applyMatrix4(zp);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=n.index,p=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let _=m,M=x;_<M;_++){let c=u.getX(_);Rc.fromBufferAttribute(p,c),Hp(Rc,c,a,s,e,t,this)}}else{let m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let _=m,M=x;_<M;_++)Rc.fromBufferAttribute(p,_),Hp(Rc,_,a,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Hp(i,e,t,n,s,r,o){let l=Zf.distanceSqToPoint(i);if(l<t){let a=new H;Zf.closestPointToPoint(i,a),a.applyMatrix4(n);let u=s.ray.origin.distanceTo(a);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Va=class extends $n{constructor(e=[],t=rr,n,s,r,o,l,a,u,h){super(e,t,n,s,r,o,l,a,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},si=class extends $n{constructor(e,t,n,s,r,o,l,a,u){super(e,t,n,s,r,o,l,a,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qs=class extends $n{constructor(e,t,n=as,s,r,o,l=Cn,a=Cn,u,h=fs,p=1){if(h!==fs&&h!==or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:p};super(m,s,r,o,l,a,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _o(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Jc=class extends Qs{constructor(e,t=as,n=rr,s,r,o=Cn,l=Cn,a,u=fs){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,a,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wa=class extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},en=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let a=[],u=[],h=[],p=[],m=0,x=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(a),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(p,2));function _(M,c,f,d,g,v,b,T,w,y,S){let E=v/w,R=b/y,C=v/2,L=b/2,A=T/2,I=w+1,D=y+1,F=0,z=0,U=new H;for(let V=0;V<D;V++){let k=V*R-L;for(let X=0;X<I;X++){let j=X*E-C;U[M]=j*d,U[c]=k*g,U[f]=A,u.push(U.x,U.y,U.z),U[M]=0,U[c]=0,U[f]=T>0?1:-1,h.push(U.x,U.y,U.z),p.push(X/w),p.push(1-V/y),F+=1}}for(let V=0;V<y;V++)for(let k=0;k<w;k++){let X=m+k+I*V,j=m+k+I*(V+1),Me=m+(k+1)+I*(V+1),Se=m+(k+1)+I*V;a.push(X,j,Se),a.push(j,Me,Se),z+=6}l.addGroup(x,z,S),x+=z,m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ar=class i extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],a=[],u=new H,h=new Ie;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){let x=n+p/t*s;u.x=e*Math.cos(x),u.y=e*Math.sin(x),o.push(u.x,u.y,u.z),l.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,a.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bi=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],m=[],x=[],_=0,M=[],c=n/2,f=0;d(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(m,3)),this.setAttribute("uv",new je(x,2));function d(){let v=new H,b=new H,T=0,w=(t-e)/n;for(let y=0;y<=r;y++){let S=[],E=y/r,R=E*(t-e)+e;for(let C=0;C<=s;C++){let L=C/s,A=L*a+l,I=Math.sin(A),D=Math.cos(A);b.x=R*I,b.y=-E*n+c,b.z=R*D,p.push(b.x,b.y,b.z),v.set(I,w,D).normalize(),m.push(v.x,v.y,v.z),x.push(L,1-E),S.push(_++)}M.push(S)}for(let y=0;y<s;y++)for(let S=0;S<r;S++){let E=M[S][y],R=M[S+1][y],C=M[S+1][y+1],L=M[S][y+1];(e>0||S!==0)&&(h.push(E,R,L),T+=3),(t>0||S!==r-1)&&(h.push(R,C,L),T+=3)}u.addGroup(f,T,0),f+=T}function g(v){let b=_,T=new Ie,w=new H,y=0,S=v===!0?e:t,E=v===!0?1:-1;for(let C=1;C<=s;C++)p.push(0,c*E,0),m.push(0,E,0),x.push(.5,.5),_++;let R=_;for(let C=0;C<=s;C++){let A=C/s*a+l,I=Math.cos(A),D=Math.sin(A);w.x=S*D,w.y=c*E,w.z=S*I,p.push(w.x,w.y,w.z),m.push(0,E,0),T.x=I*.5+.5,T.y=D*.5*E+.5,x.push(T.x,T.y),_++}for(let C=0;C<s;C++){let L=b+C,A=R+C;v===!0?h.push(A,A+1,L):h.push(A+1,A,L),y+=3}u.addGroup(f,y,v===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var jc=class i extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),u(n),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(d){let g=new H,v=new H,b=new H;for(let T=0;T<t.length;T+=3)x(t[T+0],g),x(t[T+1],v),x(t[T+2],b),a(g,v,b,d)}function a(d,g,v,b){let T=b+1,w=[];for(let y=0;y<=T;y++){w[y]=[];let S=d.clone().lerp(v,y/T),E=g.clone().lerp(v,y/T),R=T-y;for(let C=0;C<=R;C++)C===0&&y===T?w[y][C]=S:w[y][C]=S.clone().lerp(E,C/R)}for(let y=0;y<T;y++)for(let S=0;S<2*(T-y)-1;S++){let E=Math.floor(S/2);S%2===0?(m(w[y][E+1]),m(w[y+1][E]),m(w[y][E])):(m(w[y][E+1]),m(w[y+1][E+1]),m(w[y+1][E]))}}function u(d){let g=new H;for(let v=0;v<r.length;v+=3)g.x=r[v+0],g.y=r[v+1],g.z=r[v+2],g.normalize().multiplyScalar(d),r[v+0]=g.x,r[v+1]=g.y,r[v+2]=g.z}function h(){let d=new H;for(let g=0;g<r.length;g+=3){d.x=r[g+0],d.y=r[g+1],d.z=r[g+2];let v=c(d)/2/Math.PI+.5,b=f(d)/Math.PI+.5;o.push(v,1-b)}_(),p()}function p(){for(let d=0;d<o.length;d+=6){let g=o[d+0],v=o[d+2],b=o[d+4],T=Math.max(g,v,b),w=Math.min(g,v,b);T>.9&&w<.1&&(g<.2&&(o[d+0]+=1),v<.2&&(o[d+2]+=1),b<.2&&(o[d+4]+=1))}}function m(d){r.push(d.x,d.y,d.z)}function x(d,g){let v=d*3;g.x=e[v+0],g.y=e[v+1],g.z=e[v+2]}function _(){let d=new H,g=new H,v=new H,b=new H,T=new Ie,w=new Ie,y=new Ie;for(let S=0,E=0;S<r.length;S+=9,E+=6){d.set(r[S+0],r[S+1],r[S+2]),g.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),y.set(o[E+4],o[E+5]),b.copy(d).add(g).add(v).divideScalar(3);let R=c(b);M(T,E+0,d,R),M(w,E+2,g,R),M(y,E+4,v,R)}}function M(d,g,v,b){b<0&&d.x===1&&(o[g]=d.x-1),v.x===0&&v.z===0&&(o[g]=b/2/Math.PI+.5)}function c(d){return Math.atan2(d.z,-d.x)}function f(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){dt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,a=r-1,u;for(;l<=a;)if(s=Math.floor(l+(a-l)/2),u=n[s]-o,u<0)l=s+1;else if(u>0)a=s-1;else{a=s;break}if(s=a,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,x=(o-h)/m;return(s+x)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),a=t||(o.isVector2?new Ie:new H);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,s=[],r=[],o=[],l=new H,a=new et;for(let x=0;x<=e;x++){let _=x/e;s[x]=this.getTangentAt(_,new H)}r[0]=new H,o[0]=new H;let u=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),m<=u&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let x=1;x<=e;x++){if(r[x]=r[x-1].clone(),o[x]=o[x-1].clone(),l.crossVectors(s[x-1],s[x]),l.length()>Number.EPSILON){l.normalize();let _=Math.acos(Ct(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(a.makeRotationAxis(l,_))}o[x].crossVectors(s[x],r[x])}if(t===!0){let x=Math.acos(Ct(r[0].dot(r[e]),-1,1));x/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(x=-x);for(let _=1;_<=e;_++)r[_].applyMatrix4(a.makeRotationAxis(s[_],x*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},To=class extends Ai{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new Ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=a-this.aX,x=u-this.aY;a=m*h-x*p+this.aX,u=m*p+x*h+this.aY}return n.set(a,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qc=class extends To{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function S0(){let i=0,e=0,t=0,n=0;function s(r,o,l,a){i=r,e=l,t=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,u){s(o,l,u*(l-r),u*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,u,h,p){let m=(o-r)/u-(l-r)/(u+h)+(l-o)/h,x=(l-o)/h-(a-o)/(h+p)+(a-l)/p;m*=h,x*=h,s(o,l,m,x)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var Vp=new H,Wp=new H,kf=new S0,zf=new S0,Hf=new S0,eu=class extends Ai{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new H){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let u,h;this.closed||l>0?u=s[(l-1)%r]:(Wp.subVectors(s[0],s[1]).add(s[0]),u=Wp);let p=s[l%r],m=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(Vp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vp),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,_=Math.pow(u.distanceToSquared(p),x),M=Math.pow(p.distanceToSquared(m),x),c=Math.pow(m.distanceToSquared(h),x);M<1e-4&&(M=1),_<1e-4&&(_=M),c<1e-4&&(c=M),kf.initNonuniformCatmullRom(u.x,p.x,m.x,h.x,_,M,c),zf.initNonuniformCatmullRom(u.y,p.y,m.y,h.y,_,M,c),Hf.initNonuniformCatmullRom(u.z,p.z,m.z,h.z,_,M,c)}else this.curveType==="catmullrom"&&(kf.initCatmullRom(u.x,p.x,m.x,h.x,this.tension),zf.initCatmullRom(u.y,p.y,m.y,h.y,this.tension),Hf.initCatmullRom(u.z,p.z,m.z,h.z,this.tension));return n.set(kf.calc(a),zf.calc(a),Hf.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,a=i*l;return(2*t-2*n+r+o)*a+(-3*t+3*n-2*r-o)*l+r*i+t}function zx(i,e){let t=1-i;return t*t*e}function Hx(i,e){return 2*(1-i)*i*e}function Vx(i,e){return i*i*e}function Ca(i,e,t,n){return zx(i,e)+Hx(i,t)+Vx(i,n)}function Wx(i,e){let t=1-i;return t*t*t*e}function Gx(i,e){let t=1-i;return 3*t*t*i*e}function qx(i,e){return 3*(1-i)*i*i*e}function Xx(i,e){return i*i*i*e}function Pa(i,e,t,n,s){return Wx(i,e)+Gx(i,t)+qx(i,n)+Xx(i,s)}var Ga=class extends Ai{constructor(e=new Ie,t=new Ie,n=new Ie,s=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Pa(e,s.x,r.x,o.x,l.x),Pa(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tu=class extends Ai{constructor(e=new H,t=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Pa(e,s.x,r.x,o.x,l.x),Pa(e,s.y,r.y,o.y,l.y),Pa(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends Ai{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nu=class extends Ai{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Ai{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ca(e,s.x,r.x,o.x),Ca(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},iu=class extends Ai{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ca(e,s.x,r.x,o.x),Ca(e,s.y,r.y,o.y),Ca(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,a=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Gp(l,a.x,u.x,h.x,p.x),Gp(l,a.y,u.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ie().fromArray(s))}return this}},qp=Object.freeze({__proto__:null,ArcCurve:Qc,CatmullRomCurve3:eu,CubicBezierCurve:Ga,CubicBezierCurve3:tu,EllipseCurve:To,LineCurve:qa,LineCurve3:nu,QuadraticBezierCurve:Xa,QuadraticBezierCurve3:iu,SplineCurve:Ya}),su=class extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],a=l.getLength(),u=a===0?0:1-o/a;return l.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let u=0;u<a.length;u++){let h=a[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new qp[s.type]().fromJSON(s))}return this}},Za=class extends su{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new qa(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Xa(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new Ga(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s),new Ie(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ya(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,a){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,r,o,l,a),this}absellipse(e,t,n,s,r,o,l,a){let u=new To(e,t,n,s,r,o,l,a);if(this.curves.length>0){let p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);let h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Eo=class extends Za{constructor(e){super(e),this.uuid=Fo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Za().fromJSON(s))}return this}};function Yx(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Hm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,a,u;if(n&&(r=jx(i,e,r,t)),i.length>80*t){l=i[0],a=i[1];let h=l,p=a;for(let m=t;m<s;m+=t){let x=i[m],_=i[m+1];x<l&&(l=x),_<a&&(a=_),x>h&&(h=x),_>p&&(p=_)}u=Math.max(h-l,p-a),u=u!==0?32767/u:0}return Ka(r,o,t,l,a,u,0),o}function Hm(i,e,t,n,s){let r;if(s===c2(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Xp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Xp(o/n|0,i[o],i[o+1],r);return r&&Ao(r,r.next)&&(Ja(r),r=r.next),r}function Rr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ao(t,t.next)||gn(t.prev,t,t.next)===0)){if(Ja(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ka(i,e,t,n,s,r,o){if(!i)return;!o&&r&&i2(i,n,s,r);let l=i;for(;i.prev!==i.next;){let a=i.prev,u=i.next;if(r?Kx(i,n,s,r):Zx(i)){e.push(a.i,i.i,u.i),Ja(i),i=u.next,l=u.next;continue}if(i=u,i===l){o?o===1?(i=$x(Rr(i),e),Ka(i,e,t,n,s,r,2)):o===2&&Jx(i,e,t,n,s,r):Ka(Rr(i),e,t,n,s,r,1);break}}}function Zx(i){let e=i.prev,t=i,n=i.next;if(gn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,a=t.y,u=n.y,h=Math.min(s,r,o),p=Math.min(l,a,u),m=Math.max(s,r,o),x=Math.max(l,a,u),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=m&&_.y>=p&&_.y<=x&&Ra(s,l,r,a,o,u,_.x,_.y)&&gn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Kx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(gn(s,r,o)>=0)return!1;let l=s.x,a=r.x,u=o.x,h=s.y,p=r.y,m=o.y,x=Math.min(l,a,u),_=Math.min(h,p,m),M=Math.max(l,a,u),c=Math.max(h,p,m),f=Kf(x,_,e,t,n),d=Kf(M,c,e,t,n),g=i.prevZ,v=i.nextZ;for(;g&&g.z>=f&&v&&v.z<=d;){if(g.x>=x&&g.x<=M&&g.y>=_&&g.y<=c&&g!==s&&g!==o&&Ra(l,h,a,p,u,m,g.x,g.y)&&gn(g.prev,g,g.next)>=0||(g=g.prevZ,v.x>=x&&v.x<=M&&v.y>=_&&v.y<=c&&v!==s&&v!==o&&Ra(l,h,a,p,u,m,v.x,v.y)&&gn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;g&&g.z>=f;){if(g.x>=x&&g.x<=M&&g.y>=_&&g.y<=c&&g!==s&&g!==o&&Ra(l,h,a,p,u,m,g.x,g.y)&&gn(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;v&&v.z<=d;){if(v.x>=x&&v.x<=M&&v.y>=_&&v.y<=c&&v!==s&&v!==o&&Ra(l,h,a,p,u,m,v.x,v.y)&&gn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function $x(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ao(n,s)&&Wm(n,t,t.next,s)&&$a(n,s)&&$a(s,n)&&(e.push(n.i,t.i,s.i),Ja(t),Ja(t.next),t=i=s),t=t.next}while(t!==i);return Rr(t)}function Jx(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&o2(o,l)){let a=Gm(o,l);o=Rr(o,o.next),a=Rr(a,a.next),Ka(o,e,t,n,s,r,0),Ka(a,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function jx(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,a=r<o-1?e[r+1]*n:i.length,u=Hm(i,l,a,n,!1);u===u.next&&(u.steiner=!0),s.push(r2(u))}s.sort(Qx);for(let r=0;r<s.length;r++)t=e2(s[r],t);return t}function Qx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function e2(i,e){let t=t2(i,e);if(!t)return e;let n=Gm(t,i);return Rr(n,n.next),Rr(t,t.next)}function t2(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ao(i,t))return t;do{if(Ao(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,a=o.x,u=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=a&&n!==t.x&&Vm(s<u?n:r,s,a,u,s<u?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);$a(t,i)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&n2(o,t)))&&(o=t,h=p)}t=t.next}while(t!==l);return o}function n2(i,e){return gn(i.prev,i,e.prev)<0&&gn(e.next,i,i.next)<0}function i2(i,e,t,n){let s=i;do s.z===0&&(s.z=Kf(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,s2(s)}function s2(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let u=0;u<t&&(l++,o=o.nextZ,!!o);u++);let a=t;for(;l>0||a>0&&o;)l!==0&&(a===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,a--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Kf(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function r2(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vm(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function Ra(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&Vm(i,e,t,n,s,r,o,l)}function o2(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!a2(i,e)&&($a(i,e)&&$a(e,i)&&l2(i,e)&&(gn(i.prev,i,e.prev)||gn(i,e.prev,e))||Ao(i,e)&&gn(i.prev,i,i.next)>0&&gn(e.prev,e,e.next)>0)}function gn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ao(i,e){return i.x===e.x&&i.y===e.y}function Wm(i,e,t,n){let s=Pc(gn(i,e,t)),r=Pc(gn(i,e,n)),o=Pc(gn(t,n,i)),l=Pc(gn(t,n,e));return!!(s!==r&&o!==l||s===0&&Cc(i,t,e)||r===0&&Cc(i,n,e)||o===0&&Cc(t,i,n)||l===0&&Cc(t,e,n))}function Cc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Pc(i){return i>0?1:i<0?-1:0}function a2(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $a(i,e){return gn(i.prev,i,i.next)<0?gn(i,e,i.next)>=0&&gn(i,i.prev,e)>=0:gn(i,e,i.prev)<0||gn(i,i.next,e)<0}function l2(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gm(i,e){let t=$f(i.i,i.x,i.y),n=$f(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xp(i,e,t,n){let s=$f(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ja(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $f(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function c2(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Jf=class{static triangulate(e,t,n=2){return Yx(e,t,n)}},mo=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Yp(e),Zp(n,e);let o=e.length;t.forEach(Yp);for(let a=0;a<t.length;a++)s.push(o),o+=t[a].length,Zp(n,t[a]);let l=Jf.triangulate(n,s);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}};function Yp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ja=class i extends jc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var on=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),a=Math.floor(s),u=l+1,h=a+1,p=e/l,m=t/a,x=[],_=[],M=[],c=[];for(let f=0;f<h;f++){let d=f*m-o;for(let g=0;g<u;g++){let v=g*p-r;_.push(v,-d,0),M.push(0,0,1),c.push(g/l),c.push(1-f/a)}}for(let f=0;f<a;f++)for(let d=0;d<l;d++){let g=d+u*f,v=d+u*(f+1),b=d+1+u*(f+1),T=d+1+u*f;x.push(g,v,T),x.push(v,b,T)}this.setIndex(x),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(M,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Qa=class i extends yt{constructor(e=new Eo([new Ie(0,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],l=0,a=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(l,a,h),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function u(h){let p=s.length/3,m=h.extractPoints(t),x=m.shape,_=m.holes;mo.isClockWise(x)===!1&&(x=x.reverse());for(let c=0,f=_.length;c<f;c++){let d=_[c];mo.isClockWise(d)===!0&&(_[c]=d.reverse())}let M=mo.triangulateShape(x,_);for(let c=0,f=_.length;c<f;c++){let d=_[c];x=x.concat(d)}for(let c=0,f=x.length;c<f;c++){let d=x[c];s.push(d.x,d.y,0),r.push(0,0,1),o.push(d.x,d.y)}for(let c=0,f=M.length;c<f;c++){let d=M[c],g=d[0]+p,v=d[1]+p,b=d[2]+p;n.push(g,v,b),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return u2(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function u2(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var el=class i extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let a=Math.min(o+l,Math.PI),u=0,h=[],p=new H,m=new H,x=[],_=[],M=[],c=[];for(let f=0;f<=n;f++){let d=[],g=f/n,v=o+g*l,b=e*Math.cos(v),T=Math.sqrt(e*e-b*b),w=0;f===0&&o===0?w=.5/t:f===n&&a===Math.PI&&(w=-.5/t);for(let y=0;y<=t;y++){let S=y/t,E=s+S*r;p.x=-T*Math.cos(E),p.y=b,p.z=T*Math.sin(E),_.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),c.push(S+w,1-g),d.push(u++)}h.push(d)}for(let f=0;f<n;f++)for(let d=0;d<t;d++){let g=h[f][d+1],v=h[f][d],b=h[f+1][d],T=h[f+1][d+1];(f!==0||o>0)&&x.push(g,v,T),(f!==n-1||a<Math.PI)&&x.push(v,b,T)}this.setIndex(x),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(M,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var tl=class i extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let a=[],u=[],h=[],p=[],m=new H,x=new H,_=new H;for(let M=0;M<=n;M++){let c=o+M/n*l;for(let f=0;f<=s;f++){let d=f/s*r;x.x=(e+t*Math.cos(c))*Math.cos(d),x.y=(e+t*Math.cos(c))*Math.sin(d),x.z=t*Math.sin(c),u.push(x.x,x.y,x.z),m.x=e*Math.cos(d),m.y=e*Math.sin(d),_.subVectors(x,m).normalize(),h.push(_.x,_.y,_.z),p.push(f/s),p.push(M/n)}}for(let M=1;M<=n;M++)for(let c=1;c<=s;c++){let f=(s+1)*M+c-1,d=(s+1)*(M-1)+c-1,g=(s+1)*(M-1)+c,v=(s+1)*M+c;a.push(f,d,v),a.push(d,g,v)}this.setIndex(a),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Lr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Kp(s))s.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Kp(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ei(i){let e={};for(let t=0;t<i.length;t++){let n=Lr(i[t]);for(let s in n)e[s]=n[s]}return e}function Kp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function h2(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function w0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}var Dr={clone:Lr,merge:ei},f2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ft=class extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f2,this.fragmentShader=d2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=h2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ru=class extends ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var an=class extends ps{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var er=class extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ou=class extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function co(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vf(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var tr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},au=class extends tr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qf,endingEnd:qf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],a=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Xf:r=e,l=2*t-n;break;case Yf:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Xf:o=e,a=2*n-t;break;case Yf:o=1,a=n+s[1]-s[0];break;default:o=e-1,a=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(a-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,x=this._weightNext,_=(n-t)/(s-t),M=_*_,c=M*_,f=-m*c+2*m*M-m*_,d=(1+m)*c+(-1.5-2*m)*M+(-.5+m)*_+1,g=(-1-x)*c+(1.5+x)*M+.5*_,v=x*c-x*M;for(let b=0;b!==l;++b)r[b]=f*o[h+b]+d*o[u+b]+g*o[a+b]+v*o[p+b];return r}},lu=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=(n-t)/(s-t),p=1-h;for(let m=0;m!==l;++m)r[m]=o[u+m]*p+o[a+m]*h;return r}},cu=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},uu=class extends tr{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(n-t)/(s-t),M=1-_;for(let c=0;c!==l;++c)r[c]=o[u+c]*M+o[a+c]*_;return r}let m=l*2,x=e-1;for(let _=0;_!==l;++_){let M=o[u+_],c=o[a+_],f=x*m+_*2,d=p[f],g=p[f+1],v=e*m+_*2,b=h[v],T=h[v+1],w=m2(n,t,d,b,s);r[_]=qm(w,M,g,T,c)}return r}};function qm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function p2(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function m2(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=qm(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let a=p2(r,e,t,n,s);if(Math.abs(a)<1e-10)break;r=Math.max(0,Math.min(1,r-l/a))}return r}var Ri=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Vf(e.settings)&&(n.settings={inTangents:co(e.settings.inTangents,Array),outTangents:co(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new uu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ia:t=this.InterpolantFactoryMethodDiscrete;break;case Gc:t=this.InterpolantFactoryMethodLinear;break;case Dc:t=this.InterpolantFactoryMethodSmooth;break;case Gf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return dt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Gc;case this.InterpolantFactoryMethodSmooth:return Dc;case this.InterpolantFactoryMethodBezier:return Gf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Vf(this.settings)&&($p(this.settings.inTangents,e),$p(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(vt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(vt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let a=n[l];if(typeof a=="number"&&isNaN(a)){vt("KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(o!==null&&o>a){vt("KeyframeTrack: Out of order keys.",this,l,a,o),e=!1;break}o=a}if(s!==void 0&&yx(s))for(let l=0,a=s.length;l!==a;++l){let u=s[l];if(isNaN(u)){vt("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Dc,r=e.length-1,o=1;for(let l=1;l<r;++l){let a=!1,u=e[l],h=e[l+1];if(u!==h&&(l!==1||u!==e[0]))if(s)a=!0;else{let p=l*n,m=p-n,x=p+n;for(let _=0;_!==n;++_){let M=t[p+_];if(M!==t[m+_]||M!==t[x+_]){a=!0;break}}}if(a){if(l!==o){e[o]=e[l];let p=l*n,m=o*n;for(let x=0;x!==n;++x)t[m+x]=t[p+x]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,a=o*n,u=0;u!==n;++u)t[a+u]=t[l+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Vf(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $p(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Gc;var nr=class extends Ri{constructor(e,t,n){super(e,t,n)}};nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Ia;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var hu=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}};hu.prototype.ValueTypeName="color";var fu=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}};fu.prototype.ValueTypeName="number";var du=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(n-t)/(s-t),u=e*l;for(let h=u+l;u!==h;u+=4)xn.slerpFlat(r,0,o,u-l,o,u,a);return r}},nl=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new du(this.times,this.values,this.getValueSize(),e)}};nl.prototype.ValueTypeName="quaternion";nl.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends Ri{constructor(e,t,n){super(e,t,n)}};ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Ia;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var pu=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}};pu.prototype.ValueTypeName="vector";var Fc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Jp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Jp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Jp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var mu=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,a,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=u.length;p<m;p+=2){let x=u[p],_=u[p+1];if(x.global&&(x.lastIndex=0),x.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xm=new mu,Ro=class{constructor(e){this.manager=e!==void 0?e:Xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var uo=new WeakMap,gu=class extends Ro{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Fc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let p=uo.get(o);p===void 0&&(p=[],uo.set(o,p)),p.push({onLoad:t,onError:s})}return o}let l=xo("img");function a(){h(),t&&t(this);let p=uo.get(this)||[];for(let m=0;m<p.length;m++){let x=p[m];x.onLoad&&x.onLoad(this)}uo.delete(this),r.manager.itemEnd(e)}function u(p){h(),s&&s(p),Fc.remove(`image:${e}`);let m=uo.get(this)||[];for(let x=0;x<m.length;x++){let _=m[x];_.onError&&_.onError(p)}uo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",a,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Fc.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}};var il=class extends Ro{constructor(e){super(e)}load(e,t,n,s){let r=new $n,o=new gu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Co=class extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},sl=class extends Co{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wf=new et,jp=new H,Qp=new H,rl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(jp),Qp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Wf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,a=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===vo||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(Wf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ic=new H,Lc=new xn,us=new H,Ns=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=ns,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ic,Lc,us),us.x===1&&us.y===1&&us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,Lc,us.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ic,Lc,us),us.x===1&&us.y===1&&us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,Lc,us.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Js=new H,em=new Ie,tm=new Ie,Gn=class extends Ns{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Na*2*Math.atan(Math.tan(vf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Js.x,Js.y).multiplyScalar(-e/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Js.x,Js.y).multiplyScalar(-e/Js.z)}getViewSize(e,t){return this.getViewBounds(e,em,tm),t.subVectors(tm,em)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vf*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let a=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/a,t-=o.offsetY*n/u,s*=o.width/a,n*=o.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},jf=class extends rl{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Na*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ol=class extends Co{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var sr=class extends Ns{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,a=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qf=class extends rl{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Po=class extends Co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new Qf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ms=class extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ho=-90,fo=1,vu=class extends Pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gn(ho,fo,e,t);s.layers=this.layers,this.add(s);let r=new Gn(ho,fo,e,t);r.layers=this.layers,this.add(r);let o=new Gn(ho,fo,e,t);o.layers=this.layers,this.add(o);let l=new Gn(ho,fo,e,t);l.layers=this.layers,this.add(l);let a=new Gn(ho,fo,e,t);a.layers=this.layers,this.add(a);let u=new Gn(ho,fo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,a]=t;for(let u of t)this.remove(u);if(e===ns)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,a,u,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let c=!1;e.isWebGLRenderer===!0?c=e.state.buffers.depth.getReversed():c=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,4,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,m,x),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},xu=class extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},al=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=g2.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function g2(){this._document.hidden===!1&&this.reset()}var T0="\\[\\]\\.:\\/",v2=new RegExp("["+T0+"]","g"),E0="[^"+T0+"]",x2="[^"+T0.replace("\\.","")+"]",y2=/((?:WC+[\/:])*)/.source.replace("WC",E0),_2=/(WCOD+)?/.source.replace("WCOD",x2),b2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",E0),M2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",E0),S2=new RegExp("^"+y2+_2+b2+M2+"$"),w2=["material","materials","bones","map"],e0=class{constructor(e,t,n){let s=n||rn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v2,"")}static parseTrackName(e){let t=S2.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);w2.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let a=n(l.children);if(a)return a}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;vt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rn.Composite=e0;rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rn.prototype.GetterByBindingType=[rn.prototype._getValue_direct,rn.prototype._getValue_array,rn.prototype._getValue_arrayElement,rn.prototype._getValue_toArray];rn.prototype.SetterByBindingTypeAndVersioning=[[rn.prototype._setValue_direct,rn.prototype._setValue_direct_setNeedsUpdate,rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_array,rn.prototype._setValue_array_setNeedsUpdate,rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_arrayElement,rn.prototype._setValue_arrayElement_setNeedsUpdate,rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_fromArray,rn.prototype._setValue_fromArray_setNeedsUpdate,rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pw=new Float32Array(1);var L0=class L0{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};L0.prototype.isMatrix2=!0;var t0=L0;function A0(i,e,t,n){let s=T2(n);switch(t){case y0:return i*e;case ar:return i*e/s.components*s.byteLength;case Eu:return i*e/s.components*s.byteLength;case lr:return i*e*2/s.components*s.byteLength;case Au:return i*e*2/s.components*s.byteLength;case _0:return i*e*3/s.components*s.byteLength;case Qn:return i*e*4/s.components*s.byteLength;case Ru:return i*e*4/s.components*s.byteLength;case hl:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dl:case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pu:case Lu:return Math.max(i,16)*Math.max(e,8)/4;case Cu:case Iu:return Math.max(i,8)*Math.max(e,8)/2;case Du:case Nu:case Uu:case Bu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fu:case ml:case Ou:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $u:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ju:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qu:case eh:case th:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nh:case ih:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gl:case sh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T2(i){switch(i){case jn:case m0:return{byteLength:1,components:1};case Do:case g0:case Sn:return{byteLength:2,components:1};case wu:case Tu:return{byteLength:2,components:4};case as:case Su:case Oi:return{byteLength:4,components:1};case v0:case x0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function pg(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function L2(i){let e=new WeakMap;function t(l,a){let u=l.array,h=l.usage,p=u.byteLength,m=i.createBuffer();i.bindBuffer(a,m),i.bufferData(a,u,h),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)x=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,a,u){let h=a.array,p=a.updateRanges;if(i.bindBuffer(u,l),p.length===0)i.bufferSubData(u,0,h);else{p.sort((x,_)=>x.start-_.start);let m=0;for(let x=1;x<p.length;x++){let _=p[m],M=p[x];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++m,p[m]=M)}p.length=m+1;for(let x=0,_=p.length;x<_;x++){let M=p[x];i.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let a=e.get(l);a&&(i.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,a));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,a),u.version=l.version}}return{get:s,remove:r,update:o}}var D2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N2=`#ifdef USE_ALPHAHASH
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
#endif`,F2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k2=`#ifdef USE_AOMAP
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
#endif`,z2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H2=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,V2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X2=`#ifdef USE_IRIDESCENCE
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
#endif`,Y2=`#ifdef USE_BUMPMAP
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
#endif`,Z2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Q2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ny=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sy=`vec3 transformedNormal = objectNormal;
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
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_y=`#ifdef USE_GRADIENTMAP
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
}`,by=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,My=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wy=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Ty=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Py=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Iy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ly=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,By=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wy=`#if defined( USE_POINTS_UV )
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
#endif`,Gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`#ifdef USE_MORPHTARGETS
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
#endif`,$y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,n_=`#ifdef USE_NORMALMAP
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
#endif`,i_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,c_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,g_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,v_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,x_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,__=`#ifdef USE_SKINNING
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
#endif`,b_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M_=`#ifdef USE_SKINNING
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
#endif`,S_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R_=`#ifdef USE_TRANSMISSION
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
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N_=`uniform sampler2D t2D;
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`#include <common>
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
}`,z_=`#if DEPTH_PACKING == 3200
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
}`,H_=`#define DISTANCE
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
}`,V_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`uniform float scale;
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
}`,X_=`uniform vec3 diffuse;
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
}`,Y_=`#include <common>
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
}`,Z_=`uniform vec3 diffuse;
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
}`,K_=`#define LAMBERT
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
}`,$_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,J_=`#define MATCAP
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
}`,j_=`#define MATCAP
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
}`,Q_=`#define NORMAL
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
}`,eb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tb=`#define PHONG
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
}`,nb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,ib=`#define STANDARD
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
}`,sb=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,rb=`#define TOON
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
}`,ob=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ab=`uniform float size;
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
}`,lb=`uniform vec3 diffuse;
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
}`,cb=`#include <common>
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
}`,ub=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,hb=`uniform float rotation;
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
}`,fb=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:D2,alphahash_pars_fragment:N2,alphamap_fragment:F2,alphamap_pars_fragment:U2,alphatest_fragment:B2,alphatest_pars_fragment:O2,aomap_fragment:k2,aomap_pars_fragment:z2,batching_pars_vertex:H2,batching_vertex:V2,begin_vertex:W2,beginnormal_vertex:G2,bsdfs:q2,iridescence_fragment:X2,bumpmap_pars_fragment:Y2,clipping_planes_fragment:Z2,clipping_planes_pars_fragment:K2,clipping_planes_pars_vertex:$2,clipping_planes_vertex:J2,color_fragment:j2,color_pars_fragment:Q2,color_pars_vertex:ey,color_vertex:ty,common:ny,cube_uv_reflection_fragment:iy,defaultnormal_vertex:sy,displacementmap_pars_vertex:ry,displacementmap_vertex:oy,emissivemap_fragment:ay,emissivemap_pars_fragment:ly,colorspace_fragment:cy,colorspace_pars_fragment:uy,envmap_fragment:hy,envmap_common_pars_fragment:fy,envmap_pars_fragment:dy,envmap_pars_vertex:py,envmap_physical_pars_fragment:Ty,envmap_vertex:my,fog_vertex:gy,fog_pars_vertex:vy,fog_fragment:xy,fog_pars_fragment:yy,gradientmap_pars_fragment:_y,lightmap_pars_fragment:by,lights_lambert_fragment:My,lights_lambert_pars_fragment:Sy,lights_pars_begin:wy,lights_toon_fragment:Ey,lights_toon_pars_fragment:Ay,lights_phong_fragment:Ry,lights_phong_pars_fragment:Cy,lights_physical_fragment:Py,lights_physical_pars_fragment:Iy,lights_fragment_begin:Ly,lights_fragment_maps:Dy,lights_fragment_end:Ny,lightprobes_pars_fragment:Fy,logdepthbuf_fragment:Uy,logdepthbuf_pars_fragment:By,logdepthbuf_pars_vertex:Oy,logdepthbuf_vertex:ky,map_fragment:zy,map_pars_fragment:Hy,map_particle_fragment:Vy,map_particle_pars_fragment:Wy,metalnessmap_fragment:Gy,metalnessmap_pars_fragment:qy,morphinstance_vertex:Xy,morphcolor_vertex:Yy,morphnormal_vertex:Zy,morphtarget_pars_vertex:Ky,morphtarget_vertex:$y,normal_fragment_begin:Jy,normal_fragment_maps:jy,normal_pars_fragment:Qy,normal_pars_vertex:e_,normal_vertex:t_,normalmap_pars_fragment:n_,clearcoat_normal_fragment_begin:i_,clearcoat_normal_fragment_maps:s_,clearcoat_pars_fragment:r_,iridescence_pars_fragment:o_,opaque_fragment:a_,packing:l_,premultiplied_alpha_fragment:c_,project_vertex:u_,dithering_fragment:h_,dithering_pars_fragment:f_,roughnessmap_fragment:d_,roughnessmap_pars_fragment:p_,shadowmap_pars_fragment:m_,shadowmap_pars_vertex:g_,shadowmap_vertex:v_,shadowmask_pars_fragment:x_,skinbase_vertex:y_,skinning_pars_vertex:__,skinning_vertex:b_,skinnormal_vertex:M_,specularmap_fragment:S_,specularmap_pars_fragment:w_,tonemapping_fragment:T_,tonemapping_pars_fragment:E_,transmission_fragment:A_,transmission_pars_fragment:R_,uv_pars_fragment:C_,uv_pars_vertex:P_,uv_vertex:I_,worldpos_vertex:L_,background_vert:D_,background_frag:N_,backgroundCube_vert:F_,backgroundCube_frag:U_,cube_vert:B_,cube_frag:O_,depth_vert:k_,depth_frag:z_,distance_vert:H_,distance_frag:V_,equirect_vert:W_,equirect_frag:G_,linedashed_vert:q_,linedashed_frag:X_,meshbasic_vert:Y_,meshbasic_frag:Z_,meshlambert_vert:K_,meshlambert_frag:$_,meshmatcap_vert:J_,meshmatcap_frag:j_,meshnormal_vert:Q_,meshnormal_frag:eb,meshphong_vert:tb,meshphong_frag:nb,meshphysical_vert:ib,meshphysical_frag:sb,meshtoon_vert:rb,meshtoon_frag:ob,points_vert:ab,points_frag:lb,shadow_vert:cb,shadow_frag:ub,sprite_vert:hb,sprite_frag:fb},Ze={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},xs={basic:{uniforms:ei([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:ei([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:ei([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:ei([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:ei([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new ue(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:ei([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:ei([Ze.points,Ze.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:ei([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:ei([Ze.common,Ze.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:ei([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:ei([Ze.sprite,Ze.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:ei([Ze.common,Ze.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:ei([Ze.lights,Ze.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};xs.physical={uniforms:ei([xs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var lh={r:0,b:0,g:0},db=new et,mg=new xt;mg.set(-1,0,0,0,1,0,0,0,1);function pb(i,e,t,n,s,r){let o=new ue(0),l=s===!0?0:1,a,u,h=null,p=0,m=null;function x(d){let g=d.isScene===!0?d.background:null;if(g&&g.isTexture){let v=d.backgroundBlurriness>0;g=e.get(g,v)}return g}function _(d){let g=!1,v=x(d);v===null?c(o,l):v&&v.isColor&&(c(v,1),g=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||g)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(d,g){let v=x(g);v&&(v.isCubeTexture||v.mapping===cl)?(u===void 0&&(u=new mt(new en(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:Lr(xs.backgroundCube.uniforms),vertexShader:xs.backgroundCube.vertexShader,fragmentShader:xs.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(db.makeRotationFromEuler(g.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(mg),u.material.toneMapped=Lt.getTransfer(v.colorSpace)!==Gt,(h!==v||p!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(a===void 0&&(a=new mt(new on(2,2),new ft({name:"BackgroundMaterial",uniforms:Lr(xs.background.uniforms),vertexShader:xs.background.vertexShader,fragmentShader:xs.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=v,a.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,a.material.toneMapped=Lt.getTransfer(v.colorSpace)!==Gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||m!==i.toneMapping)&&(a.material.needsUpdate=!0,h=v,p=v.version,m=i.toneMapping),a.layers.enableAll(),d.unshift(a,a.geometry,a.material,0,0,null))}function c(d,g){d.getRGB(lh,w0(i)),t.buffers.color.setClear(lh.r,lh.g,lh.b,g,r)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,g=1){o.set(d),l=g,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,c(o,l)},render:_,addToRenderList:M,dispose:f}}function mb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function l(R,C,L,A,I){let D=!1,F=p(R,A,L,C);r!==F&&(r=F,u(r.object)),D=x(R,A,L,I),D&&_(R,A,L,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,v(R,C,L,A),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function a(){return i.createVertexArray()}function u(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function p(R,C,L,A){let I=A.wireframe===!0,D=n[C.id];D===void 0&&(D={},n[C.id]=D);let F=R.isInstancedMesh===!0?R.id:0,z=D[F];z===void 0&&(z={},D[F]=z);let U=z[L.id];U===void 0&&(U={},z[L.id]=U);let V=U[I];return V===void 0&&(V=m(a()),U[I]=V),V}function m(R){let C=[],L=[],A=[];for(let I=0;I<t;I++)C[I]=0,L[I]=0,A[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:A,object:R,attributes:{},index:null}}function x(R,C,L,A){let I=r.attributes,D=C.attributes,F=0,z=L.getAttributes();for(let U in z)if(z[U].location>=0){let k=I[U],X=D[U];if(X===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(X=R.instanceColor)),k===void 0||k.attribute!==X||X&&k.data!==X.data)return!0;F++}return r.attributesNum!==F||r.index!==A}function _(R,C,L,A){let I={},D=C.attributes,F=0,z=L.getAttributes();for(let U in z)if(z[U].location>=0){let k=D[U];k===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(k=R.instanceColor));let X={};X.attribute=k,k&&k.data&&(X.data=k.data),I[U]=X,F++}r.attributes=I,r.attributesNum=F,r.index=A}function M(){let R=r.newAttributes;for(let C=0,L=R.length;C<L;C++)R[C]=0}function c(R){f(R,0)}function f(R,C){let L=r.newAttributes,A=r.enabledAttributes,I=r.attributeDivisors;L[R]=1,A[R]===0&&(i.enableVertexAttribArray(R),A[R]=1),I[R]!==C&&(i.vertexAttribDivisor(R,C),I[R]=C)}function d(){let R=r.newAttributes,C=r.enabledAttributes;for(let L=0,A=C.length;L<A;L++)C[L]!==R[L]&&(i.disableVertexAttribArray(L),C[L]=0)}function g(R,C,L,A,I,D,F){F===!0?i.vertexAttribIPointer(R,C,L,I,D):i.vertexAttribPointer(R,C,L,A,I,D)}function v(R,C,L,A){M();let I=A.attributes,D=L.getAttributes(),F=C.defaultAttributeValues;for(let z in D){let U=D[z];if(U.location>=0){let V=I[z];if(V===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(V=R.instanceColor)),V!==void 0){let k=V.normalized,X=V.itemSize,j=e.get(V);if(j===void 0)continue;let Me=j.buffer,Se=j.type,we=j.bytesPerElement,Z=Se===i.INT||Se===i.UNSIGNED_INT||V.gpuType===Su;if(V.isInterleavedBufferAttribute){let q=V.data,ve=q.stride,Pe=V.offset;if(q.isInstancedInterleavedBuffer){for(let ee=0;ee<U.locationSize;ee++)f(U.location+ee,q.meshPerAttribute);R.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ee=0;ee<U.locationSize;ee++)c(U.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let ee=0;ee<U.locationSize;ee++)g(U.location+ee,X/U.locationSize,Se,k,ve*we,(Pe+X/U.locationSize*ee)*we,Z)}else{if(V.isInstancedBufferAttribute){for(let q=0;q<U.locationSize;q++)f(U.location+q,V.meshPerAttribute);R.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let q=0;q<U.locationSize;q++)c(U.location+q);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let q=0;q<U.locationSize;q++)g(U.location+q,X/U.locationSize,Se,k,X*we,X/U.locationSize*q*we,Z)}}else if(F!==void 0){let k=F[z];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(U.location,k);break;case 3:i.vertexAttrib3fv(U.location,k);break;case 4:i.vertexAttrib4fv(U.location,k);break;default:i.vertexAttrib1fv(U.location,k)}}}}d()}function b(){S();for(let R in n){let C=n[R];for(let L in C){let A=C[L];for(let I in A){let D=A[I];for(let F in D)h(D[F].object),delete D[F];delete A[I]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let C=n[R.id];for(let L in C){let A=C[L];for(let I in A){let D=A[I];for(let F in D)h(D[F].object),delete D[F];delete A[I]}}delete n[R.id]}function w(R){for(let C in n){let L=n[C];for(let A in L){let I=L[A];if(I[R.id]===void 0)continue;let D=I[R.id];for(let F in D)h(D[F].object),delete D[F];delete I[R.id]}}}function y(R){for(let C in n){let L=n[C],A=R.isInstancedMesh===!0?R.id:0,I=L[A];if(I!==void 0){for(let D in I){let F=I[D];for(let z in F)h(F[z].object),delete F[z];delete I[D]}delete L[A],Object.keys(L).length===0&&delete n[C]}}}function S(){E(),o=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:S,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:c,disableUnusedAttributes:d}}function gb(i,e,t){let n;function s(a){n=a}function r(a,u){i.drawArrays(n,a,u),t.update(u,n,1)}function o(a,u,h){h!==0&&(i.drawArraysInstanced(n,a,u,h),t.update(u,n,h))}function l(a,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,u,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x];t.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function vb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Qn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){let y=w===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==jn&&w!==Oi&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function a(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",h=a(u);h!==u&&(dt("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),c=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:c,maxAttributes:f,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:v,maxSamples:b,samples:T}}function xb(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ts,l=new xt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){let x=p.length!==0||m||n!==0||s;return s=m,n=p.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,x){let _=p.clippingPlanes,M=p.clipIntersection,c=p.clipShadows,f=i.get(p);if(!s||_===null||_.length===0||r&&!c)r?h(null):u();else{let d=r?0:n,g=d*4,v=f.clippingState||null;a.value=v,v=h(_,m,g,x);for(let b=0;b!==g;++b)v[b]=t[b];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=d}};function u(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,x,_){let M=p!==null?p.length:0,c=null;if(M!==0){if(c=a.value,_!==!0||c===null){let f=x+M*4,d=m.matrixWorldInverse;l.getNormalMatrix(d),(c===null||c.length<f)&&(c=new Float32Array(f));for(let g=0,v=x;g!==M;++g,v+=4)o.copy(p[g]).applyMatrix4(d,l),o.normal.toArray(c,v),c[v+3]=o.constant}a.value=c,a.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,c}}var Bo=4,yb=6,_b=20,bb=256,vl=new sr,Ym=new ue,D0=null,N0=0,F0=0,U0=!1,Mb=new H,Nr=new H,uh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=Mb}=r;D0=this._renderer.getRenderTarget(),N0=this._renderer.getActiveCubeFace(),F0=this._renderer.getActiveMipmapLevel(),U0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a,l),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(D0,N0,F0),this._renderer.xr.enabled=U0,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),D0=this._renderer.getRenderTarget(),N0=this._renderer.getActiveCubeFace(),F0=this._renderer.getActiveMipmapLevel(),U0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Sn,format:Qn,colorSpace:La,depthBuffer:!1},s=Zm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Sb(r)),this._blurMaterial=Tb(r,e,t),this._ggxMaterial=wb(r,e,t)}return s}_compileMaterial(e){let t=new mt(new yt,e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,n,s,r){let a=new Gn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,x=p.toneMapping;p.getClearColor(Ym),p.toneMapping=os,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new en,new yn({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,c=M.material,f=!1,d=e.background;d?d.isColor&&(c.color.copy(d),e.background=null,f=!0):(c.color.copy(Ym),f=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,u[g],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+h[g],r.y,r.z)):v===1?(a.up.set(0,0,u[g]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+h[g],r.z)):(a.up.set(0,u[g],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+h[g]));let b=this._cubeSize;Uo(s,v*b,g>2?b:0,b,b),p.setRenderTarget(s),f&&p.render(M,a),p.render(e,a)}p.toneMapping=x,p.autoClear=m,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===rr||e.mapping===Ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let a=this._cubeSize;Uo(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(o,vl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let a=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),m=u*1.25,x=p*m,{_lodMax:_}=this,M=this._sizeLods[n],c=3*M*(n>_-Bo?n-_+Bo:0),f=4*(this._cubeSize-M);a.envMap.value=e.texture,a.roughness.value=x,a.mipInt.value=_-t,Uo(r,c,f,3*M,2*M),s.setRenderTarget(r),s.render(l,vl),a.envMap.value=r.texture,a.roughness.value=0,a.mipInt.value=_-n,Uo(e,c,f,3*M,2*M),s.setRenderTarget(e),s.render(l,vl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,a=this._lodMeshes[s];a.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Bo?s-this._lodMax+Bo:0),m=4*(this._cubeSize-h);Uo(t,p,m,3*h,2*h),o.setRenderTarget(t),o.render(a,vl)}};function Sb(i){let e=[],t=[],n=i,s=i-Bo+1+yb;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),a=-l,u=1+l,h=[a,a,u,a,u,u,a,a,u,u,a,u],p=6,m=6,x=3,_=new Float32Array(x*m*p),M=new Float32Array(x*m*p);for(let f=0;f<p;f++){let d=f%3*2/3-1,g=f>2?0:-1,v=[d,g,0,d+2/3,g,0,d+2/3,g+1,0,d,g,0,d+2/3,g+1,0,d,g+1,0];_.set(v,x*m*f);for(let b=0;b<m;b++){let T=h[b*2]*2-1,w=h[b*2+1]*2-1;f===0?Nr.set(1,w,T):f===1?Nr.set(-T,1,-w):f===2?Nr.set(-T,w,1):f===3?Nr.set(-1,w,-T):f===4?Nr.set(-T,-1,w):Nr.set(T,w,-1),Nr.toArray(M,(f*m+b)*x)}}let c=new yt;c.setAttribute("position",new St(_,x)),c.setAttribute("outputDirection",new St(M,x)),t.push(new mt(c,null)),n>Bo&&n--}return{lodMeshes:t,sizeLods:e}}function Zm(i,e,t){let n=new Yt(i,e,t);return n.texture.mapping=cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wb(i,e,t){return new ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Tb(i,e,t){return new ft({name:"SphericalGaussianBlur",defines:{SAMPLES:_b,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Km(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function $m(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function dh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var hh=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Va(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:ri});r.uniforms.tEquirect.value=t;let o=new mt(s,r),l=t.minFilter;return t.minFilter===Nn&&(t.minFilter=zt),new vu(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Eb(i){let e=new WeakMap,t=new WeakMap,n=null;function s(m,x=!1){return m==null?null:x?o(m):r(m)}function r(m){if(m&&m.isTexture){let x=m.mapping;if(x===_u||x===bu)if(e.has(m)){let _=e.get(m).texture;return l(_,m.mapping)}else{let _=m.image;if(_&&_.height>0){let M=new hh(_.height);return M.fromEquirectangularTexture(i,m),e.set(m,M),m.addEventListener("dispose",u),l(M.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){let x=m.mapping,_=x===_u||x===bu,M=x===rr||x===Ir;if(_||M){let c=t.get(m),f=c!==void 0?c.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==f)return n===null&&(n=new uh(i)),c=_?n.fromEquirectangular(m,c):n.fromCubemap(m,c),c.texture.pmremVersion=m.pmremVersion,t.set(m,c),c.texture;if(c!==void 0)return c.texture;{let d=m.image;return _&&d&&d.height>0||M&&d&&a(d)?(n===null&&(n=new uh(i)),c=_?n.fromEquirectangular(m):n.fromCubemap(m),c.texture.pmremVersion=m.pmremVersion,t.set(m,c),m.addEventListener("dispose",h),c.texture):null}}}return m}function l(m,x){return x===_u?m.mapping=rr:x===bu&&(m.mapping=Ir),m}function a(m){let x=0,_=6;for(let M=0;M<_;M++)m[M]!==void 0&&x++;return x===_}function u(m){let x=m.target;x.removeEventListener("dispose",u);let _=e.get(x);_!==void 0&&(e.delete(x),_.dispose())}function h(m){let x=m.target;x.removeEventListener("dispose",h);let _=t.get(x);_!==void 0&&(t.delete(x),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Ab(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Tr("WebGLRenderer: "+n+" extension not supported."),s}}}function Rb(i,e,t,n){let s={},r=new WeakMap;function o(p){let m=p.target;m.index!==null&&e.remove(m.index);for(let _ in m.attributes)e.remove(m.attributes[_]);m.removeEventListener("dispose",o),delete s[m.id];let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function a(p){let m=p.attributes;for(let x in m)e.update(m[x],i.ARRAY_BUFFER)}function u(p){let m=[],x=p.index,_=p.attributes.position,M=0;if(_===void 0)return;if(x!==null){let d=x.array;M=x.version;for(let g=0,v=d.length;g<v;g+=3){let b=d[g+0],T=d[g+1],w=d[g+2];m.push(b,T,T,w,w,b)}}else{let d=_.array;M=_.version;for(let g=0,v=d.length/3-1;g<v;g+=3){let b=g+0,T=g+1,w=g+2;m.push(b,T,T,w,w,b)}}let c=new(_.count>=65535?ka:Oa)(m,1);c.version=M;let f=r.get(p);f&&e.remove(f),r.set(p,c)}function h(p){let m=r.get(p);if(m){let x=p.index;x!==null&&m.version<x.version&&u(p)}else u(p);return r.get(p)}return{get:l,update:a,getWireframeAttribute:h}}function Cb(i,e,t){let n;function s(p){n=p}let r,o;function l(p){r=p.type,o=p.bytesPerElement}function a(p,m){i.drawElements(n,m,r,p*o),t.update(m,n,1)}function u(p,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,p*o,x),t.update(m,n,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,x);let M=0;for(let c=0;c<x;c++)M+=m[c];t.update(M,n,1)}this.setMode=s,this.setIndex=l,this.render=a,this.renderInstances=u,this.renderMultiDraw=h}function Pb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:vt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ib(i,e,t){let n=new WeakMap,s=new pt;function r(o,l,a){let u=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0,m=n.get(l);if(m===void 0||m.count!==p){let S=function(){w.dispose(),n.delete(l),l.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();let x=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],d=l.morphAttributes.color||[],g=0;x===!0&&(g=1),_===!0&&(g=2),M===!0&&(g=3);let v=l.attributes.position.count*g,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*b*4*p),w=new Fa(T,v,b,p);w.type=Oi,w.needsUpdate=!0;let y=g*4;for(let E=0;E<p;E++){let R=c[E],C=f[E],L=d[E],A=v*b*4*E;for(let I=0;I<R.count;I++){let D=I*y;x===!0&&(s.fromBufferAttribute(R,I),T[A+D+0]=s.x,T[A+D+1]=s.y,T[A+D+2]=s.z,T[A+D+3]=0),_===!0&&(s.fromBufferAttribute(C,I),T[A+D+4]=s.x,T[A+D+5]=s.y,T[A+D+6]=s.z,T[A+D+7]=0),M===!0&&(s.fromBufferAttribute(L,I),T[A+D+8]=s.x,T[A+D+9]=s.y,T[A+D+10]=s.z,T[A+D+11]=L.itemSize===4?s.w:1)}}m={count:p,texture:w,size:new Ie(v,b)},n.set(l,m),l.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let M=0;M<u.length;M++)x+=u[M];let _=l.morphTargetsRelative?1:1-x;a.getUniforms().setValue(i,"morphTargetBaseInfluence",_),a.getUniforms().setValue(i,"morphTargetInfluences",u)}a.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),a.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function Lb(i,e,t,n,s){let r=new WeakMap;function o(u){let h=s.render.frame,p=u.geometry,m=e.get(u,p);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let x=u.skeleton;r.get(x)!==h&&(x.update(),r.set(x,h))}return m}function l(){r=new WeakMap}function a(u){let h=u.target;h.removeEventListener("dispose",a),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var Db={[l0]:"LINEAR_TONE_MAPPING",[c0]:"REINHARD_TONE_MAPPING",[u0]:"CINEON_TONE_MAPPING",[h0]:"ACES_FILMIC_TONE_MAPPING",[d0]:"AGX_TONE_MAPPING",[ll]:"NEUTRAL_TONE_MAPPING",[f0]:"CUSTOM_TONE_MAPPING"};function Nb(i,e,t,n,s,r){let o=new Yt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,a=null,u=new yt;u.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new je([0,2,0,0,2,0],2));let h=new ru({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new mt(u,h),m=new sr(-1,1,1,-1,0,1),x=null,_=null,M=!1,c,f=null,d=[],g=!1;this.setSize=function(v,b){o.setSize(v,b),l!==null&&l.setSize(v,b),a!==null&&a.setSize(v,b);for(let T=0;T<d.length;T++){let w=d[T];w.setSize&&w.setSize(v,b)}},this.setEffects=function(v){d=v,g=d.length>0&&d[0].isRenderPass===!0;let b=o.width,T=o.height;d.length>0&&l===null&&(l=new Yt(b,T,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),a=new Yt(b,T,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<d.length;w++){let y=d[w];y.setSize&&y.setSize(b,T)}},this.begin=function(v,b){if(M||v.toneMapping===os&&d.length===0)return!1;if(f=b,b!==null){let T=b.width,w=b.height;(o.width!==T||o.height!==w)&&this.setSize(T,w)}return g===!1&&v.setRenderTarget(o),c=v.toneMapping,v.toneMapping=os,!0},this.hasRenderPass=function(){return g},this.end=function(v,b){v.toneMapping=c,M=!0;let T=o,w=l;for(let y=0;y<d.length;y++){let S=d[y];S.enabled!==!1&&(S.render(v,w,T,b),S.needsSwap!==!1&&(T=w,w=w===l?a:l))}if(x!==v.outputColorSpace||_!==v.toneMapping){x=v.outputColorSpace,_=v.toneMapping,h.defines={},Lt.getTransfer(x)===Gt&&(h.defines.SRGB_TRANSFER="");let y=Db[_];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(f),v.render(p,m),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),a!==null&&a.dispose(),u.dispose(),h.dispose()}}var gg=new $n,k0=new Qs(1,1),vg=new Fa,xg=new Yc,yg=new Va,Jm=[],jm=[],Qm=new Float32Array(16),eg=new Float32Array(9),tg=new Float32Array(4);function ko(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Jm[s];if(r===void 0&&(r=new Float32Array(s),Jm[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function Fn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ph(i,e){let t=jm[e];t===void 0&&(t=new Int32Array(e),jm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ub(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;i.uniform2fv(this.addr,e),Un(t,e)}}function Bb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Fn(t,e))return;i.uniform3fv(this.addr,e),Un(t,e)}}function Ob(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;i.uniform4fv(this.addr,e),Un(t,e)}}function kb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Un(t,e)}else{if(Fn(t,n))return;tg.set(n),i.uniformMatrix2fv(this.addr,!1,tg),Un(t,n)}}function zb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Un(t,e)}else{if(Fn(t,n))return;eg.set(n),i.uniformMatrix3fv(this.addr,!1,eg),Un(t,n)}}function Hb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Un(t,e)}else{if(Fn(t,n))return;Qm.set(n),i.uniformMatrix4fv(this.addr,!1,Qm),Un(t,n)}}function Vb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;i.uniform2iv(this.addr,e),Un(t,e)}}function Gb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;i.uniform3iv(this.addr,e),Un(t,e)}}function qb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;i.uniform4iv(this.addr,e),Un(t,e)}}function Xb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;i.uniform2uiv(this.addr,e),Un(t,e)}}function Zb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;i.uniform3uiv(this.addr,e),Un(t,e)}}function Kb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;i.uniform4uiv(this.addr,e),Un(t,e)}}function $b(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(k0.compareFunction=t.isReversedDepthBuffer()?ah:oh,r=k0):r=gg,t.setTexture2D(e||r,s)}function Jb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xg,s)}function jb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yg,s)}function Qb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vg,s)}function eM(i){switch(i){case 5126:return Fb;case 35664:return Ub;case 35665:return Bb;case 35666:return Ob;case 35674:return kb;case 35675:return zb;case 35676:return Hb;case 5124:case 35670:return Vb;case 35667:case 35671:return Wb;case 35668:case 35672:return Gb;case 35669:case 35673:return qb;case 5125:return Xb;case 36294:return Yb;case 36295:return Zb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Qb}}function tM(i,e){i.uniform1fv(this.addr,e)}function nM(i,e){let t=ko(e,this.size,2);i.uniform2fv(this.addr,t)}function iM(i,e){let t=ko(e,this.size,3);i.uniform3fv(this.addr,t)}function sM(i,e){let t=ko(e,this.size,4);i.uniform4fv(this.addr,t)}function rM(i,e){let t=ko(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function oM(i,e){let t=ko(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function aM(i,e){let t=ko(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lM(i,e){i.uniform1iv(this.addr,e)}function cM(i,e){i.uniform2iv(this.addr,e)}function uM(i,e){i.uniform3iv(this.addr,e)}function hM(i,e){i.uniform4iv(this.addr,e)}function fM(i,e){i.uniform1uiv(this.addr,e)}function dM(i,e){i.uniform2uiv(this.addr,e)}function pM(i,e){i.uniform3uiv(this.addr,e)}function mM(i,e){i.uniform4uiv(this.addr,e)}function gM(i,e,t){let n=this.cache,s=e.length,r=ph(t,s);Fn(n,r)||(i.uniform1iv(this.addr,r),Un(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=k0:o=gg;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function vM(i,e,t){let n=this.cache,s=e.length,r=ph(t,s);Fn(n,r)||(i.uniform1iv(this.addr,r),Un(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xg,r[o])}function xM(i,e,t){let n=this.cache,s=e.length,r=ph(t,s);Fn(n,r)||(i.uniform1iv(this.addr,r),Un(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yg,r[o])}function yM(i,e,t){let n=this.cache,s=e.length,r=ph(t,s);Fn(n,r)||(i.uniform1iv(this.addr,r),Un(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vg,r[o])}function _M(i){switch(i){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return sM;case 35674:return rM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return hM;case 5125:return fM;case 36294:return dM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return yM}}var z0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eM(t.type)}},H0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_M(t.type)}},V0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},B0=/(\w+)(\])?(\[|\.)?/g;function ng(i,e){i.seq.push(e),i.map[e.id]=e}function bM(i,e,t){let n=i.name,s=n.length;for(B0.lastIndex=0;;){let r=B0.exec(n),o=B0.lastIndex,l=r[1],a=r[2]==="]",u=r[3];if(a&&(l=l|0),u===void 0||u==="["&&o+2===s){ng(t,u===void 0?new z0(l,i,e):new H0(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new V0(l),ng(t,p)),t=p}}}var Oo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),a=e.getUniformLocation(t,l.name);bM(l,a,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ig(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var MM=37297,SM=0;function wM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var sg=new xt;function TM(i){Lt._getMatrix(sg,Lt.workingColorSpace,i);let e=`mat3( ${sg.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(i)){case Da:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+wM(i.getShaderSource(e),l)}else return r}function EM(i,e){let t=TM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var AM={[l0]:"Linear",[c0]:"Reinhard",[u0]:"Cineon",[h0]:"ACESFilmic",[d0]:"AgX",[ll]:"Neutral",[f0]:"Custom"};function RM(i,e){let t=AM[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ch=new H;function CM(){Lt.getLuminanceCoefficients(ch);let i=ch.x.toFixed(4),e=ch.y.toFixed(4),t=ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yl).join(`
`)}function IM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function LM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function yl(i){return i!==""}function og(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ag(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var DM=/^[ \t]*#include +<([\w\d./]+)>/gm;function W0(i){return i.replace(DM,FM)}var NM=new Map;function FM(i,e){let t=gt[e];if(t===void 0){let n=NM.get(e);if(n!==void 0)t=gt[n],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return W0(t)}var UM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lg(i){return i.replace(UM,BM)}function BM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var OM={[Cr]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function kM(i){return OM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zM={[rr]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[cl]:"ENVMAP_TYPE_CUBE_UV"};function HM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":zM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var VM={[Ir]:"ENVMAP_MODE_REFRACTION"};function WM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":VM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var GM={[a0]:"ENVMAP_BLENDING_MULTIPLY",[Sm]:"ENVMAP_BLENDING_MIX",[wm]:"ENVMAP_BLENDING_ADD"};function qM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":GM[i.combine]||"ENVMAP_BLENDING_NONE"}function XM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function YM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,a=kM(t),u=HM(t),h=WM(t),p=qM(t),m=XM(t),x=PM(t),_=IM(r),M=s.createProgram(),c,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yl).join(`
`),c.length>0&&(c+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yl).join(`
`),f.length>0&&(f+=`
`)):(c=[cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yl).join(`
`),f=[cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?gt.tonemapping_pars_fragment:"",t.toneMapping!==os?RM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,EM("linearToOutputTexel",t.outputColorSpace),CM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yl).join(`
`)),o=W0(o),o=og(o,t),o=ag(o,t),l=W0(l),l=og(l,t),l=ag(l,t),o=lg(o),l=lg(l),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,c=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,f=["#define varying in",t.glslVersion===b0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===b0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let g=d+c+o,v=d+f+l,b=ig(s,s.VERTEX_SHADER,g),T=ig(s,s.FRAGMENT_SHADER,v);s.attachShader(M,b),s.attachShader(M,T),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(R){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(M)||"",L=s.getShaderInfoLog(b)||"",A=s.getShaderInfoLog(T)||"",I=C.trim(),D=L.trim(),F=A.trim(),z=!0,U=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,T);else{let V=rg(s,b,"vertex"),k=rg(s,T,"fragment");vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+V+`
`+k)}else I!==""?dt("WebGLProgram: Program Info Log:",I):(D===""||F==="")&&(U=!1);U&&(R.diagnostics={runnable:z,programLog:I,vertexShader:{log:D,prefix:c},fragmentShader:{log:F,prefix:f}})}s.deleteShader(b),s.deleteShader(T),y=new Oo(s,M),S=LM(s,M)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(M,MM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=T,this}var ZM=0,G0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new q0(e),t.set(e,n)),n}},q0=class{constructor(e){this.id=ZM++,this.code=e,this.usedTimes=0}};function KM(i){return i===lr||i===ml||i===gl}function $M(i,e,t,n,s,r){let o=new Ua,l=new G0,a=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,m=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return a.add(y),y===0?"uv":`uv${y}`}function M(y,S,E,R,C,L){let A=R.fog,I=C.geometry,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,z=e.get(y.envMap||D,F),U=z&&z.mapping===cl?z.image.height:null,V=x[y.type];y.precision!==null&&(m=n.getMaxPrecision(y.precision),m!==y.precision&&dt("WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let k=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,X=k!==void 0?k.length:0,j=0;I.morphAttributes.position!==void 0&&(j=1),I.morphAttributes.normal!==void 0&&(j=2),I.morphAttributes.color!==void 0&&(j=3);let Me,Se,we,Z;if(V){let Zt=xs[V];Me=Zt.vertexShader,Se=Zt.fragmentShader}else{Me=y.vertexShader,Se=y.fragmentShader;let Zt=l.getVertexShaderStage(y),Ot=l.getFragmentShaderStage(y);l.update(y,Zt,Ot),we=Zt.id,Z=Ot.id}let q=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Pe=C.isInstancedMesh===!0,ee=C.isBatchedMesh===!0,xe=!!y.map,Fe=!!y.matcap,ke=!!z,Le=!!y.aoMap,Ye=!!y.lightMap,ne=!!y.bumpMap&&y.wireframe===!1,Te=!!y.normalMap,Q=!!y.displacementMap,le=!!y.emissiveMap,re=!!y.metalnessMap,oe=!!y.roughnessMap,B=y.anisotropy>0,_e=y.clearcoat>0,$=y.dispersion>0,N=y.retroreflectivity>0,P=y.iridescence>0,W=y.sheen>0,G=y.transmission>0,te=B&&!!y.anisotropyMap,de=_e&&!!y.clearcoatMap,fe=_e&&!!y.clearcoatNormalMap,he=_e&&!!y.clearcoatRoughnessMap,me=P&&!!y.iridescenceMap,De=P&&!!y.iridescenceThicknessMap,Je=W&&!!y.sheenColorMap,Ne=W&&!!y.sheenRoughnessMap,Be=!!y.specularMap,Ve=!!y.specularColorMap,it=!!y.specularIntensityMap,ut=G&&!!y.transmissionMap,K=G&&!!y.thicknessMap,Ue=!!y.gradientMap,ye=!!y.alphaMap,ze=y.alphaTest>0,Ge=!!y.alphaHash,Ae=!!y.extensions,ot=os;y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ot=i.toneMapping);let st={shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:Me,fragmentShader:Se,defines:y.defines,customVertexShaderID:we,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:ee,batchingColor:ee&&C._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&C.instanceColor!==null,instancingMorph:Pe&&C.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:xe,matcap:Fe,envMap:ke,envMapMode:ke&&z.mapping,envMapCubeUVHeight:U,aoMap:Le,lightMap:Ye,bumpMap:ne,normalMap:Te,displacementMap:Q,emissiveMap:le,normalMapObjectSpace:Te&&y.normalMapType===Am,normalMapTangentSpace:Te&&y.normalMapType===rh,packedNormalMap:Te&&y.normalMapType===rh&&KM(y.normalMap.format),metalnessMap:re,roughnessMap:oe,anisotropy:B,anisotropyMap:te,clearcoat:_e,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:he,dispersion:$,retroreflection:N,iridescence:P,iridescenceMap:me,iridescenceThicknessMap:De,sheen:W,sheenColorMap:Je,sheenRoughnessMap:Ne,specularMap:Be,specularColorMap:Ve,specularIntensityMap:it,transmission:G,transmissionMap:ut,thicknessMap:K,gradientMap:Ue,opaque:y.transparent===!1&&y.blending===Lo&&y.alphaToCoverage===!1,alphaMap:ye,alphaTest:ze,alphaHash:Ge,combine:y.combine,mapUv:xe&&_(y.map.channel),aoMapUv:Le&&_(y.aoMap.channel),lightMapUv:Ye&&_(y.lightMap.channel),bumpMapUv:ne&&_(y.bumpMap.channel),normalMapUv:Te&&_(y.normalMap.channel),displacementMapUv:Q&&_(y.displacementMap.channel),emissiveMapUv:le&&_(y.emissiveMap.channel),metalnessMapUv:re&&_(y.metalnessMap.channel),roughnessMapUv:oe&&_(y.roughnessMap.channel),anisotropyMapUv:te&&_(y.anisotropyMap.channel),clearcoatMapUv:de&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(y.sheenRoughnessMap.channel),specularMapUv:Be&&_(y.specularMap.channel),specularColorMapUv:Ve&&_(y.specularColorMap.channel),specularIntensityMapUv:it&&_(y.specularIntensityMap.channel),transmissionMapUv:ut&&_(y.transmissionMap.channel),thicknessMapUv:K&&_(y.thicknessMap.channel),alphaMapUv:ye&&_(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Te||B),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!I.attributes.uv&&(xe||ye),fog:!!A,useFog:y.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&Te===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:j,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:xe&&y.map.isVideoTexture===!0&&Lt.getTransfer(y.map.colorSpace)===Gt,decodeVideoTextureEmissive:le&&y.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(y.emissiveMap.colorSpace)===Gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===qn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ae&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&y.extensions.multiDraw===!0||ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return st.vertexUv1s=a.has(1),st.vertexUv2s=a.has(2),st.vertexUv3s=a.has(3),a.clear(),st}function c(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let E in y.defines)S.push(E),S.push(y.defines[E]);return y.isRawShaderMaterial===!1&&(f(S,y),d(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function f(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function d(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function g(y){let S=x[y.type],E;if(S){let R=xs[S];E=Dr.clone(R.uniforms)}else E=y.uniforms;return E}function v(y,S){let E=h.get(S);return E!==void 0?++E.usedTimes:(E=new YM(i,S,y,s),u.push(E),h.set(S,E)),E}function b(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){l.remove(y)}function w(){l.dispose()}return{getParameters:M,getProgramCacheKey:c,getUniforms:g,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:w}}function JM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,a){i.get(o)[l]=a}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ug(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function l(m,x,_,M,c,f){let d=i[e];return d===void 0?(d={id:m.id,object:m,geometry:x,material:_,materialVariant:o(m),groupOrder:M,renderOrder:m.renderOrder,z:c,group:f},i[e]=d):(d.id=m.id,d.object=m,d.geometry=x,d.material=_,d.materialVariant=o(m),d.groupOrder=M,d.renderOrder=m.renderOrder,d.z=c,d.group=f),e++,d}function a(m,x,_,M,c,f,d){d.reversedDepth===!0&&(c=-c);let g=l(m,x,_,M,c,f);_.transmission>0?n.push(g):_.transparent===!0?s.push(g):t.push(g)}function u(m,x,_,M,c,f){let d=l(m,x,_,M,c,f);_.transmission>0?n.unshift(d):_.transparent===!0?s.unshift(d):t.unshift(d)}function h(m,x){t.length>1&&t.sort(m||jM),n.length>1&&n.sort(x||ug),s.length>1&&s.sort(x||ug)}function p(){for(let m=e,x=i.length;m<x;m++){let _=i[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:u,finish:p,sort:h}}function QM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new hg,i.set(n,[o])):s>=r.length?(o=new hg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function eS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new ue};break;case"SpotLight":t={position:new H,direction:new H,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function tS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var nS=0;function iS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sS(i){let e=new eS,t=tS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new H);let s=new H,r=new et,o=new et;function l(u){let h=0,p=0,m=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let x=0,_=0,M=0,c=0,f=0,d=0,g=0,v=0,b=0,T=0,w=0,y=0,S=0,E=0;u.sort(iS);for(let C=0,L=u.length;C<L;C++){let A=u[C],I=A.color,D=A.intensity,F=A.distance,z=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===lr?z=A.shadow.map.texture:z=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=I.r*D,p+=I.g*D,m+=I.b*D;else if(A.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(A.sh.coefficients[U],D);E++}else if(A.isSunLight){let U=e.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let V=A.shadow,k=t.get(A);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[_]=k,n.sunShadowMap[_]=z;let X=V.getViewportCount();for(let j=0;j<X;j++)n.sunShadowMatrix[M+j]=V.getMatrix(j),n.sunShadowCascade[M+j]=V._cascadeData[j];M+=X,_++}n.sun[x]=U,x++}else if(A.isDirectionalLight){let U=e.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let V=A.shadow,k=t.get(A);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.directionalShadow[c]=k,n.directionalShadowMap[c]=z,n.directionalShadowMatrix[c]=A.shadow.matrix,b++}n.directional[c]=U,c++}else if(A.isSpotLight){let U=e.get(A);U.position.setFromMatrixPosition(A.matrixWorld),U.color.copy(I).multiplyScalar(D),U.distance=F,U.coneCos=Math.cos(A.angle),U.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),U.decay=A.decay,n.spot[d]=U;let V=A.shadow;if(A.map&&(n.spotLightMap[y]=A.map,y++,V.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[d]=V.matrix,A.castShadow){let k=t.get(A);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.spotShadow[d]=k,n.spotShadowMap[d]=z,w++}d++}else if(A.isRectAreaLight){let U=e.get(A);U.color.copy(I).multiplyScalar(D),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=U,g++}else if(A.isPointLight){let U=e.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),U.distance=A.distance,U.decay=A.decay,A.castShadow){let V=A.shadow,k=t.get(A);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,n.pointShadow[f]=k,n.pointShadowMap[f]=z,n.pointShadowMatrix[f]=A.shadow.matrix,T++}n.point[f]=U,f++}else if(A.isHemisphereLight){let U=e.get(A);U.skyColor.copy(A.color).multiplyScalar(D),U.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[v]=U,v++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ze.LTC_FLOAT_1,n.rectAreaLTC2=Ze.LTC_FLOAT_2):(n.rectAreaLTC1=Ze.LTC_HALF_1,n.rectAreaLTC2=Ze.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=m;let R=n.hash;(R.sunLength!==x||R.directionalLength!==c||R.pointLength!==f||R.spotLength!==d||R.rectAreaLength!==g||R.hemiLength!==v||R.numSunShadows!==_||R.numDirectionalShadows!==b||R.numPointShadows!==T||R.numSpotShadows!==w||R.numSpotMaps!==y||R.numLightProbes!==E)&&(n.sun.length=x,n.directional.length=c,n.spot.length=d,n.rectArea.length=g,n.point.length=f,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-S,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,R.sunLength=x,R.directionalLength=c,R.pointLength=f,R.spotLength=d,R.rectAreaLength=g,R.hemiLength=v,R.numSunShadows=_,R.numDirectionalShadows=b,R.numPointShadows=T,R.numSpotShadows=w,R.numSpotMaps=y,R.numLightProbes=E,n.version=nS++)}function a(u,h){let p=0,m=0,x=0,_=0,M=0,c=0,f=h.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){let v=u[d];if(v.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let b=n.directional[m];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(v.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),_++}else if(v.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),M++}else if(v.isPointLight){let b=n.point[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),x++}else if(v.isHemisphereLight){let b=n.hemi[c];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),c++}}}return{setup:l,setupView:a,state:n}}function fg(i){let e=new sS(i),t=[],n=[],s=[];function r(m){p.camera=m,t.length=0,n.length=0,s.length=0}function o(m){t.push(m)}function l(m){n.push(m)}function a(m){s.push(m)}function u(){e.setup(t)}function h(m){e.setupView(t,m)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:a}}function rS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new fg(i),e.set(s,[l])):r>=o.length?(l=new fg(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var oS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lS=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],cS=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],dg=new et,xl=new H,O0=new H;function uS(i,e,t){let n=new So,s=new Ie,r=new Ie,o=new pt,l=new er,a=new ou,u={},h=t.maxTextureSize,p={[gs]:qn,[qn]:gs,[Mn]:Mn},m=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:oS,fragmentShader:aS}),x=m.clone();x.defines.HORIZONTAL_PASS=1;let _=new yt;_.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new mt(_,m),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let f=this.type;this.render=function(T,w,y){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||T.length===0)return;this.type===sm&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cr);let S=i.getRenderTarget(),E=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),C=i.state;C.setBlending(ri),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let L=f!==this.type;L&&w.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(I=>I.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,I=T.length;A<I;A++){let D=T[A],F=D.shadow;if(F===void 0){dt("WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let z=F.getFrameExtents();s.multiply(z),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,F.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=U,F.map===null||L===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Io){if(D.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Yt(s.x,s.y,{format:lr,type:Sn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),F.map.texture.name=D.name+".shadowMap",F.map.depthTexture=new Qs(s.x,s.y,Oi),F.map.depthTexture.name=D.name+".shadowMapDepth",F.map.depthTexture.format=fs,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Cn,F.map.depthTexture.magFilter=Cn}else D.isPointLight?(F.map=new hh(s.x),F.map.depthTexture=new Jc(s.x,as)):(F.map=new Yt(s.x,s.y),F.map.depthTexture=new Qs(s.x,s.y,as)),F.map.depthTexture.name=D.name+".shadowMap",F.map.depthTexture.format=fs,this.type===Cr?(F.map.depthTexture.compareFunction=U?ah:oh,F.map.depthTexture.minFilter=zt,F.map.depthTexture.magFilter=zt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Cn,F.map.depthTexture.magFilter=Cn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let V=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();D.isPointLight!==!0&&F.updateMatrices(D,y);for(let k=0;k<V;k++){let X=F.getCamera(k);if(D.isPointLight){let j=F.camera,Me=F.matrix,Se=D.distance||j.far;Se!==j.far&&(j.far=Se,j.updateProjectionMatrix()),xl.setFromMatrixPosition(D.matrixWorld),j.position.copy(xl),O0.copy(j.position),O0.add(lS[k]),j.up.copy(cS[k]),j.lookAt(O0),j.updateMatrixWorld(),Me.makeTranslation(-xl.x,-xl.y,-xl.z),dg.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),F._frustum.setFromProjectionMatrix(dg,j.coordinateSystem,j.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,k),i.clear();else{k===0&&(i.setRenderTarget(F.map),i.clear());let j=F.getViewport(k);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),C.viewport(o)}n=F.getFrustum(k),v(w,y,X,D,this.type)}F.isPointLightShadow!==!0&&this.type===Io&&d(F,y),F.needsUpdate=!1}f=this.type,c.needsUpdate=!1,i.setRenderTarget(S,E,R)};function d(T,w){let y=e.update(M);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,x.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),T.mapPass===null?T.mapPass=new Yt(s.x,s.y,{format:lr,type:Sn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),m.uniforms.shadow_pass.value=T.map.depthTexture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,y,m,M,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value.set(T.map.width,T.map.height),x.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,y,x,M,null)}function g(T,w,y,S){let E=null,R=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)E=R;else if(E=y.isPointLight===!0?a:l,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let C=E.uuid,L=w.uuid,A=u[C];A===void 0&&(A={},u[C]=A);let I=A[L];I===void 0&&(I=E.clone(),A[L]=I,w.addEventListener("dispose",b)),E=I}if(E.visible=w.visible,E.wireframe=w.wireframe,S===Io?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:p[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let C=i.properties.get(E);C.light=y}return E}function v(T,w,y,S,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Io)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let L=e.update(T),A=T.material;if(Array.isArray(A)){let I=L.groups;for(let D=0,F=I.length;D<F;D++){let z=I[D],U=A[z.materialIndex];if(U&&U.visible){let V=g(T,U,S,E);T.onBeforeShadow(i,T,w,y,L,V,z),i.renderBufferDirect(y,null,L,V,T,z),T.onAfterShadow(i,T,w,y,L,V,z)}}}else if(A.visible){let I=g(T,A,S,E);T.onBeforeShadow(i,T,w,y,L,I,null),i.renderBufferDirect(y,null,L,I,T,null),T.onAfterShadow(i,T,w,y,L,I,null)}}let C=T.children;for(let L=0,A=C.length;L<A;L++)v(C[L],w,y,S,E)}function b(T){T.target.removeEventListener("dispose",b);for(let y in u){let S=u[y],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function hS(i,e){function t(){let K=!1,Ue=new pt,ye=null,ze=new pt(0,0,0,0);return{setMask:function(Ge){ye!==Ge&&!K&&(i.colorMask(Ge,Ge,Ge,Ge),ye=Ge)},setLocked:function(Ge){K=Ge},setClear:function(Ge,Ae,ot,st,Zt){Zt===!0&&(Ge*=st,Ae*=st,ot*=st),Ue.set(Ge,Ae,ot,st),ze.equals(Ue)===!1&&(i.clearColor(Ge,Ae,ot,st),ze.copy(Ue))},reset:function(){K=!1,ye=null,ze.set(-1,0,0,0)}}}function n(){let K=!1,Ue=!1,ye=null,ze=null,Ge=null;return{setReversed:function(Ae){if(Ue!==Ae){let ot=e.get("EXT_clip_control");Ae?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),Ue=Ae;let st=Ge;Ge=null,this.setClear(st)}},getReversed:function(){return Ue},setTest:function(Ae){Ae?q(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(Ae){ye!==Ae&&!K&&(i.depthMask(Ae),ye=Ae)},setFunc:function(Ae){if(Ue&&(Ae=km[Ae]),ze!==Ae){switch(Ae){case Uc:i.depthFunc(i.NEVER);break;case Bc:i.depthFunc(i.ALWAYS);break;case Oc:i.depthFunc(i.LESS);break;case go:i.depthFunc(i.LEQUAL);break;case kc:i.depthFunc(i.EQUAL);break;case zc:i.depthFunc(i.GEQUAL);break;case Hc:i.depthFunc(i.GREATER);break;case Vc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ze=Ae}},setLocked:function(Ae){K=Ae},setClear:function(Ae){Ge!==Ae&&(Ge=Ae,Ue&&(Ae=1-Ae),i.clearDepth(Ae))},reset:function(){K=!1,ye=null,ze=null,Ge=null,Ue=!1}}}function s(){let K=!1,Ue=null,ye=null,ze=null,Ge=null,Ae=null,ot=null,st=null,Zt=null;return{setTest:function(Ot){K||(Ot?q(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Ot){Ue!==Ot&&!K&&(i.stencilMask(Ot),Ue=Ot)},setFunc:function(Ot,Mi,Ni){(ye!==Ot||ze!==Mi||Ge!==Ni)&&(i.stencilFunc(Ot,Mi,Ni),ye=Ot,ze=Mi,Ge=Ni)},setOp:function(Ot,Mi,Ni){(Ae!==Ot||ot!==Mi||st!==Ni)&&(i.stencilOp(Ot,Mi,Ni),Ae=Ot,ot=Mi,st=Ni)},setLocked:function(Ot){K=Ot},setClear:function(Ot){Zt!==Ot&&(i.clearStencil(Ot),Zt=Ot)},reset:function(){K=!1,Ue=null,ye=null,ze=null,Ge=null,Ae=null,ot=null,st=null,Zt=null}}}let r=new t,o=new n,l=new s,a=new WeakMap,u=new WeakMap,h={},p={},m={},x=new WeakMap,_=[],M=null,c=!1,f=null,d=null,g=null,v=null,b=null,T=null,w=null,y=new ue(0,0,0),S=0,E=!1,R=null,C=null,L=null,A=null,I=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,z=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(U)[1]),F=z>=1):U.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),F=z>=2);let V=null,k={},X=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),Me=new pt().fromArray(X),Se=new pt().fromArray(j);function we(K,Ue,ye,ze){let Ge=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(K,Ae),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<ye;ot++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Ue,0,i.RGBA,1,1,ze,0,i.RGBA,i.UNSIGNED_BYTE,Ge):i.texImage2D(Ue+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ge);return Ae}let Z={};Z[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),q(i.DEPTH_TEST),o.setFunc(go),ne(!1),Te(n0),q(i.CULL_FACE),Le(ri);function q(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function ve(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function Pe(K,Ue){return m[K]!==Ue?(i.bindFramebuffer(K,Ue),m[K]=Ue,K===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ue),K===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ue),!0):!1}function ee(K,Ue){let ye=_,ze=!1;if(K){ye=x.get(Ue),ye===void 0&&(ye=[],x.set(Ue,ye));let Ge=K.textures;if(ye.length!==Ge.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,ot=Ge.length;Ae<ot;Ae++)ye[Ae]=i.COLOR_ATTACHMENT0+Ae;ye.length=Ge.length,ze=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,ze=!0);ze&&i.drawBuffers(ye)}function xe(K){return M!==K?(i.useProgram(K),M=K,!0):!1}let Fe={[Pr]:i.FUNC_ADD,[om]:i.FUNC_SUBTRACT,[am]:i.FUNC_REVERSE_SUBTRACT};Fe[lm]=i.MIN,Fe[cm]=i.MAX;let ke={[um]:i.ZERO,[hm]:i.ONE,[fm]:i.SRC_COLOR,[r0]:i.SRC_ALPHA,[xm]:i.SRC_ALPHA_SATURATE,[gm]:i.DST_COLOR,[pm]:i.DST_ALPHA,[dm]:i.ONE_MINUS_SRC_COLOR,[o0]:i.ONE_MINUS_SRC_ALPHA,[vm]:i.ONE_MINUS_DST_COLOR,[mm]:i.ONE_MINUS_DST_ALPHA,[ym]:i.CONSTANT_COLOR,[_m]:i.ONE_MINUS_CONSTANT_COLOR,[bm]:i.CONSTANT_ALPHA,[Mm]:i.ONE_MINUS_CONSTANT_ALPHA};function Le(K,Ue,ye,ze,Ge,Ae,ot,st,Zt,Ot){if(K===ri){c===!0&&(ve(i.BLEND),c=!1);return}if(c===!1&&(q(i.BLEND),c=!0),K!==rm){if(K!==f||Ot!==E){if((d!==Pr||b!==Pr)&&(i.blendEquation(i.FUNC_ADD),d=Pr,b=Pr),Ot)switch(K){case Lo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFunc(i.ONE,i.ONE);break;case i0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case s0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:vt("WebGLState: Invalid blending: ",K);break}else switch(K){case Lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case i0:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s0:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",K);break}g=null,v=null,T=null,w=null,y.set(0,0,0),S=0,f=K,E=Ot}return}Ge=Ge||Ue,Ae=Ae||ye,ot=ot||ze,(Ue!==d||Ge!==b)&&(i.blendEquationSeparate(Fe[Ue],Fe[Ge]),d=Ue,b=Ge),(ye!==g||ze!==v||Ae!==T||ot!==w)&&(i.blendFuncSeparate(ke[ye],ke[ze],ke[Ae],ke[ot]),g=ye,v=ze,T=Ae,w=ot),(st.equals(y)===!1||Zt!==S)&&(i.blendColor(st.r,st.g,st.b,Zt),y.copy(st),S=Zt),f=K,E=!1}function Ye(K,Ue){K.side===Mn?ve(i.CULL_FACE):q(i.CULL_FACE);let ye=K.side===qn;Ue&&(ye=!ye),ne(ye),K.blending===Lo&&K.transparent===!1?Le(ri):Le(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);let ze=K.stencilWrite;l.setTest(ze),ze&&(l.setMask(K.stencilWriteMask),l.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),l.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),le(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(K){R!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),R=K)}function Te(K){K!==nm?(q(i.CULL_FACE),K!==C&&(K===n0?i.cullFace(i.BACK):K===im?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),C=K}function Q(K){K!==L&&(F&&i.lineWidth(K),L=K)}function le(K,Ue,ye){K?(q(i.POLYGON_OFFSET_FILL),(A!==Ue||I!==ye)&&(A=Ue,I=ye,o.getReversed()&&(Ue=-Ue),i.polygonOffset(Ue,ye))):ve(i.POLYGON_OFFSET_FILL)}function re(K){K?q(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function oe(K){K===void 0&&(K=i.TEXTURE0+D-1),V!==K&&(i.activeTexture(K),V=K)}function B(K,Ue,ye){ye===void 0&&(V===null?ye=i.TEXTURE0+D-1:ye=V);let ze=k[ye];ze===void 0&&(ze={type:void 0,texture:void 0},k[ye]=ze),(ze.type!==K||ze.texture!==Ue)&&(V!==ye&&(i.activeTexture(ye),V=ye),i.bindTexture(K,Ue||Z[K]),ze.type=K,ze.texture=Ue)}function _e(){let K=k[V];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function $(){try{i.compressedTexImage2D(...arguments)}catch(K){vt("WebGLState:",K)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(K){vt("WebGLState:",K)}}function P(){try{i.texSubImage2D(...arguments)}catch(K){vt("WebGLState:",K)}}function W(){try{i.texSubImage3D(...arguments)}catch(K){vt("WebGLState:",K)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(K){vt("WebGLState:",K)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(K){vt("WebGLState:",K)}}function de(){try{i.texStorage2D(...arguments)}catch(K){vt("WebGLState:",K)}}function fe(){try{i.texStorage3D(...arguments)}catch(K){vt("WebGLState:",K)}}function he(){try{i.texImage2D(...arguments)}catch(K){vt("WebGLState:",K)}}function me(){try{i.texImage3D(...arguments)}catch(K){vt("WebGLState:",K)}}function De(K){return p[K]!==void 0?p[K]:i.getParameter(K)}function Je(K,Ue){p[K]!==Ue&&(i.pixelStorei(K,Ue),p[K]=Ue)}function Ne(K){Me.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Me.copy(K))}function Be(K){Se.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Se.copy(K))}function Ve(K,Ue){let ye=u.get(Ue);ye===void 0&&(ye=new WeakMap,u.set(Ue,ye));let ze=ye.get(K);ze===void 0&&(ze=i.getUniformBlockIndex(Ue,K.name),ye.set(K,ze))}function it(K,Ue){let ze=u.get(Ue).get(K);a.get(Ue)!==ze&&(i.uniformBlockBinding(Ue,ze,K.__bindingPointIndex),a.set(Ue,ze))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},V=null,k={},m={},x=new WeakMap,_=[],M=null,c=!1,f=null,d=null,g=null,v=null,b=null,T=null,w=null,y=new ue(0,0,0),S=0,E=!1,R=null,C=null,L=null,A=null,I=null,Me.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:q,disable:ve,bindFramebuffer:Pe,drawBuffers:ee,useProgram:xe,setBlending:Le,setMaterial:Ye,setFlipSided:ne,setCullFace:Te,setLineWidth:Q,setPolygonOffset:le,setScissorTest:re,activeTexture:oe,bindTexture:B,unbindTexture:_e,compressedTexImage2D:$,compressedTexImage3D:N,texImage2D:he,texImage3D:me,pixelStorei:Je,getParameter:De,updateUBOMapping:Ve,uniformBlockBinding:it,texStorage2D:de,texStorage3D:fe,texSubImage2D:P,texSubImage3D:W,compressedTexSubImage2D:G,compressedTexSubImage3D:te,scissor:Ne,viewport:Be,reset:ut}}function fS(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ie,h=new WeakMap,p=new Set,m,x=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,P){return _?new OffscreenCanvas(N,P):xo("canvas")}function c(N,P,W){let G=1,te=$(N);if((te.width>W||te.height>W)&&(G=W/Math.max(te.width,te.height)),G<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let de=Math.floor(G*te.width),fe=Math.floor(G*te.height);m===void 0&&(m=M(de,fe));let he=P?M(de,fe):m;return he.width=de,he.height=fe,he.getContext("2d").drawImage(N,0,0,de,fe),dt("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+de+"x"+fe+")."),he}else return"data"in N&&dt("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),N;return N}function f(N){return N.generateMipmaps}function d(N){i.generateMipmap(N)}function g(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,P,W,G,te,de=!1){if(N!==null){if(i[N]!==void 0)return i[N];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe;G&&(fe=e.get("EXT_texture_norm16"),fe||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=P;if(P===i.RED&&(W===i.FLOAT&&(he=i.R32F),W===i.HALF_FLOAT&&(he=i.R16F),W===i.UNSIGNED_BYTE&&(he=i.R8),W===i.UNSIGNED_SHORT&&fe&&(he=fe.R16_EXT),W===i.SHORT&&fe&&(he=fe.R16_SNORM_EXT)),P===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.R8UI),W===i.UNSIGNED_SHORT&&(he=i.R16UI),W===i.UNSIGNED_INT&&(he=i.R32UI),W===i.BYTE&&(he=i.R8I),W===i.SHORT&&(he=i.R16I),W===i.INT&&(he=i.R32I)),P===i.RG&&(W===i.FLOAT&&(he=i.RG32F),W===i.HALF_FLOAT&&(he=i.RG16F),W===i.UNSIGNED_BYTE&&(he=i.RG8),W===i.UNSIGNED_SHORT&&fe&&(he=fe.RG16_EXT),W===i.SHORT&&fe&&(he=fe.RG16_SNORM_EXT)),P===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.RG8UI),W===i.UNSIGNED_SHORT&&(he=i.RG16UI),W===i.UNSIGNED_INT&&(he=i.RG32UI),W===i.BYTE&&(he=i.RG8I),W===i.SHORT&&(he=i.RG16I),W===i.INT&&(he=i.RG32I)),P===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.RGB8UI),W===i.UNSIGNED_SHORT&&(he=i.RGB16UI),W===i.UNSIGNED_INT&&(he=i.RGB32UI),W===i.BYTE&&(he=i.RGB8I),W===i.SHORT&&(he=i.RGB16I),W===i.INT&&(he=i.RGB32I)),P===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),W===i.UNSIGNED_INT&&(he=i.RGBA32UI),W===i.BYTE&&(he=i.RGBA8I),W===i.SHORT&&(he=i.RGBA16I),W===i.INT&&(he=i.RGBA32I)),P===i.RGB&&(W===i.UNSIGNED_SHORT&&fe&&(he=fe.RGB16_EXT),W===i.SHORT&&fe&&(he=fe.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),P===i.RGBA){let me=de?Da:Lt.getTransfer(te);W===i.FLOAT&&(he=i.RGBA32F),W===i.HALF_FLOAT&&(he=i.RGBA16F),W===i.UNSIGNED_BYTE&&(he=me===Gt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&fe&&(he=fe.RGBA16_EXT),W===i.SHORT&&fe&&(he=fe.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(N,P){let W;return N?P===null||P===as||P===No?W=i.DEPTH24_STENCIL8:P===Oi?W=i.DEPTH32F_STENCIL8:P===Do&&(W=i.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===as||P===No?W=i.DEPTH_COMPONENT24:P===Oi?W=i.DEPTH_COMPONENT32F:P===Do&&(W=i.DEPTH_COMPONENT16),W}function T(N,P){return f(N)===!0||N.isFramebufferTexture&&N.minFilter!==Cn&&N.minFilter!==zt?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function w(N){let P=N.target;P.removeEventListener("dispose",w),S(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&p.delete(P)}function y(N){let P=N.target;P.removeEventListener("dispose",y),R(P)}function S(N){let P=n.get(N);if(P.__webglInit===void 0)return;let W=N.source,G=x.get(W);if(G){let te=G[P.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(N),Object.keys(G).length===0&&x.delete(W)}n.remove(N)}function E(N){let P=n.get(N);i.deleteTexture(P.__webglTexture);let W=N.source,G=x.get(W);delete G[P.__cacheKey],o.memory.textures--}function R(N){let P=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(P.__webglFramebuffer[G]))for(let te=0;te<P.__webglFramebuffer[G].length;te++)i.deleteFramebuffer(P.__webglFramebuffer[G][te]);else i.deleteFramebuffer(P.__webglFramebuffer[G]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[G])}else{if(Array.isArray(P.__webglFramebuffer))for(let G=0;G<P.__webglFramebuffer.length;G++)i.deleteFramebuffer(P.__webglFramebuffer[G]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let G=0;G<P.__webglColorRenderbuffer.length;G++)P.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[G]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let W=N.textures;for(let G=0,te=W.length;G<te;G++){let de=n.get(W[G]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(W[G])}n.remove(N)}let C=0;function L(){C=0}function A(){return C}function I(N){C=N}function D(){let N=C;return N>=s.maxTextures&&dt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,N}function F(N){let P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function z(N,P){let W=n.get(N);if(N.isVideoTexture&&B(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let G=N.image;if(G===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(W,N,P);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+P)}function U(N,P){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ve(W,N,P);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+P)}function V(N,P){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ve(W,N,P);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+P)}function k(N,P){let W=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){Pe(W,N,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+P)}let X={[Ds]:i.REPEAT,[hs]:i.CLAMP_TO_EDGE,[Wc]:i.MIRRORED_REPEAT},j={[Cn]:i.NEAREST,[Tm]:i.NEAREST_MIPMAP_NEAREST,[ul]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Mu]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},Me={[Cm]:i.NEVER,[Nm]:i.ALWAYS,[Pm]:i.LESS,[oh]:i.LEQUAL,[Im]:i.EQUAL,[ah]:i.GEQUAL,[Lm]:i.GREATER,[Dm]:i.NOTEQUAL};function Se(N,P){if(P.type===Oi&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===zt||P.magFilter===Mu||P.magFilter===ul||P.magFilter===Nn||P.minFilter===zt||P.minFilter===Mu||P.minFilter===ul||P.minFilter===Nn)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,X[P.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,X[P.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,X[P.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,j[P.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,j[P.minFilter]),P.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Me[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Cn||P.minFilter!==ul&&P.minFilter!==Nn||P.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function we(N,P){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",w));let G=P.source,te=x.get(G);te===void 0&&(te={},x.set(G,te));let de=F(P);if(de!==N.__cacheKey){te[de]===void 0&&(te[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),te[de].usedTimes++;let fe=te[N.__cacheKey];fe!==void 0&&(te[N.__cacheKey].usedTimes--,fe.usedTimes===0&&E(P)),N.__cacheKey=de,N.__webglTexture=te[de].texture}return W}function Z(N,P,W){return Math.floor(Math.floor(N/W)/P)}function q(N,P,W,G){let de=N.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,W,G,P.data);else{de.sort((Je,Ne)=>Je.start-Ne.start);let fe=0;for(let Je=1;Je<de.length;Je++){let Ne=de[fe],Be=de[Je],Ve=Ne.start+Ne.count,it=Z(Be.start,P.width,4),ut=Z(Ne.start,P.width,4);Be.start<=Ve+1&&it===ut&&Z(Be.start+Be.count-1,P.width,4)===it?Ne.count=Math.max(Ne.count,Be.start+Be.count-Ne.start):(++fe,de[fe]=Be)}de.length=fe+1;let he=t.getParameter(i.UNPACK_ROW_LENGTH),me=t.getParameter(i.UNPACK_SKIP_PIXELS),De=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let Je=0,Ne=de.length;Je<Ne;Je++){let Be=de[Je],Ve=Math.floor(Be.start/4),it=Math.ceil(Be.count/4),ut=Ve%P.width,K=Math.floor(Ve/P.width),Ue=it,ye=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,ut,K,Ue,ye,W,G,P.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,he),t.pixelStorei(i.UNPACK_SKIP_PIXELS,me),t.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function ve(N,P,W){let G=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(G=i.TEXTURE_3D);let te=we(N,P),de=P.source;t.bindTexture(G,N.__webglTexture,i.TEXTURE0+W);let fe=n.get(de);if(de.version!==fe.__version||te===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let ye=Lt.getPrimaries(Lt.workingColorSpace),ze=P.colorSpace===oi?null:Lt.getPrimaries(P.colorSpace),Ge=P.colorSpace===oi||ye===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment);let me=c(P.image,!1,s.maxTextureSize);me=_e(P,me);let De=r.convert(P.format,P.colorSpace),Je=r.convert(P.type),Ne=v(P.internalFormat,De,Je,P.normalized,P.colorSpace,P.isVideoTexture);Se(G,P);let Be,Ve=P.mipmaps,it=P.isVideoTexture!==!0,ut=fe.__version===void 0||te===!0,K=de.dataReady,Ue=T(P,me);if(P.isDepthTexture)Ne=b(P.format===or,P.type),ut&&(it?t.texStorage2D(i.TEXTURE_2D,1,Ne,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Ne,me.width,me.height,0,De,Je,null));else if(P.isDataTexture)if(Ve.length>0){it&&ut&&t.texStorage2D(i.TEXTURE_2D,Ue,Ne,Ve[0].width,Ve[0].height);for(let ye=0,ze=Ve.length;ye<ze;ye++)Be=Ve[ye],it?K&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Be.width,Be.height,De,Je,Be.data):t.texImage2D(i.TEXTURE_2D,ye,Ne,Be.width,Be.height,0,De,Je,Be.data);P.generateMipmaps=!1}else it?(ut&&t.texStorage2D(i.TEXTURE_2D,Ue,Ne,me.width,me.height),K&&q(P,me,De,Je)):t.texImage2D(i.TEXTURE_2D,0,Ne,me.width,me.height,0,De,Je,me.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){it&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ne,Ve[0].width,Ve[0].height,me.depth);for(let ye=0,ze=Ve.length;ye<ze;ye++)if(Be=Ve[ye],P.format!==Qn)if(De!==null)if(it){if(K)if(P.layerUpdates.size>0){let Ge=A0(Be.width,Be.height,P.format,P.type);for(let Ae of P.layerUpdates){let ot=Be.data.subarray(Ae*Ge/Be.data.BYTES_PER_ELEMENT,(Ae+1)*Ge/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Ae,Be.width,Be.height,1,De,ot)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Be.width,Be.height,me.depth,De,Be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Ne,Be.width,Be.height,me.depth,0,Be.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Be.width,Be.height,me.depth,De,Je,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Ne,Be.width,Be.height,me.depth,0,De,Je,Be.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{it&&ut&&t.texStorage2D(i.TEXTURE_2D,Ue,Ne,Ve[0].width,Ve[0].height);for(let ye=0,ze=Ve.length;ye<ze;ye++)Be=Ve[ye],P.format!==Qn?De!==null?it?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Be.width,Be.height,De,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Ne,Be.width,Be.height,0,Be.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?K&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Be.width,Be.height,De,Je,Be.data):t.texImage2D(i.TEXTURE_2D,ye,Ne,Be.width,Be.height,0,De,Je,Be.data)}else if(P.isDataArrayTexture)if(it){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ne,me.width,me.height,me.depth),K)if(P.layerUpdates.size>0){let ye=A0(me.width,me.height,P.format,P.type);for(let ze of P.layerUpdates){let Ge=me.data.subarray(ze*ye/me.data.BYTES_PER_ELEMENT,(ze+1)*ye/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ze,me.width,me.height,1,De,Je,Ge)}P.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,De,Je,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,me.width,me.height,me.depth,0,De,Je,me.data);else if(P.isData3DTexture)it?(ut&&t.texStorage3D(i.TEXTURE_3D,Ue,Ne,me.width,me.height,me.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,De,Je,me.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,me.width,me.height,me.depth,0,De,Je,me.data);else if(P.isFramebufferTexture){if(ut)if(it)t.texStorage2D(i.TEXTURE_2D,Ue,Ne,me.width,me.height);else{let ye=me.width,ze=me.height;for(let Ge=0;Ge<Ue;Ge++)t.texImage2D(i.TEXTURE_2D,Ge,Ne,ye,ze,0,De,Je,null),ye>>=1,ze>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in i){let ye=i.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),me.parentNode!==ye){ye.appendChild(me),p.add(P),ye.onpaint=ze=>{let Ge=ze.changedElements;for(let Ae of p)Ge.includes(Ae.image)&&(Ae.needsUpdate=!0)},ye.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,me);else{let Ge=i.RGBA,Ae=i.RGBA,ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ge,Ae,ot,me)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(it&&ut){let ye=$(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Ne,ye.width,ye.height)}for(let ye=0,ze=Ve.length;ye<ze;ye++)Be=Ve[ye],it?K&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,De,Je,Be):t.texImage2D(i.TEXTURE_2D,ye,Ne,De,Je,Be);P.generateMipmaps=!1}else if(it){if(ut){let ye=$(me);t.texStorage2D(i.TEXTURE_2D,Ue,Ne,ye.width,ye.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Je,me)}else t.texImage2D(i.TEXTURE_2D,0,Ne,De,Je,me);f(P)&&d(G),fe.__version=de.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function Pe(N,P,W){if(P.image.length!==6)return;let G=we(N,P),te=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+W);let de=n.get(te);if(te.version!==de.__version||G===!0){t.activeTexture(i.TEXTURE0+W);let fe=Lt.getPrimaries(Lt.workingColorSpace),he=P.colorSpace===oi?null:Lt.getPrimaries(P.colorSpace),me=P.colorSpace===oi||fe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let De=P.isCompressedTexture||P.image[0].isCompressedTexture,Je=P.image[0]&&P.image[0].isDataTexture,Ne=[];for(let Ae=0;Ae<6;Ae++)!De&&!Je?Ne[Ae]=c(P.image[Ae],!0,s.maxCubemapSize):Ne[Ae]=Je?P.image[Ae].image:P.image[Ae],Ne[Ae]=_e(P,Ne[Ae]);let Be=Ne[0],Ve=r.convert(P.format,P.colorSpace),it=r.convert(P.type),ut=v(P.internalFormat,Ve,it,P.normalized,P.colorSpace),K=P.isVideoTexture!==!0,Ue=de.__version===void 0||G===!0,ye=te.dataReady,ze=T(P,Be);Se(i.TEXTURE_CUBE_MAP,P);let Ge;if(De){K&&Ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,ut,Be.width,Be.height);for(let Ae=0;Ae<6;Ae++){Ge=Ne[Ae].mipmaps;for(let ot=0;ot<Ge.length;ot++){let st=Ge[ot];P.format!==Qn?Ve!==null?K?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ot,0,0,st.width,st.height,Ve,st.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ot,ut,st.width,st.height,0,st.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ot,0,0,st.width,st.height,Ve,it,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ot,ut,st.width,st.height,0,Ve,it,st.data)}}}else{if(Ge=P.mipmaps,K&&Ue){Ge.length>0&&ze++;let Ae=$(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,ut,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Je){K?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ne[Ae].width,Ne[Ae].height,Ve,it,Ne[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,Ne[Ae].width,Ne[Ae].height,0,Ve,it,Ne[Ae].data);for(let ot=0;ot<Ge.length;ot++){let Zt=Ge[ot].image[Ae].image;K?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ot+1,0,0,Zt.width,Zt.height,Ve,it,Zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ot+1,ut,Zt.width,Zt.height,0,Ve,it,Zt.data)}}else{K?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ve,it,Ne[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,Ve,it,Ne[Ae]);for(let ot=0;ot<Ge.length;ot++){let st=Ge[ot];K?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ot+1,0,0,Ve,it,st.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ot+1,ut,Ve,it,st.image[Ae])}}}f(P)&&d(i.TEXTURE_CUBE_MAP),de.__version=te.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function ee(N,P,W,G,te,de){let fe=r.convert(W.format,W.colorSpace),he=r.convert(W.type),me=v(W.internalFormat,fe,he,W.normalized,W.colorSpace),De=n.get(P),Je=n.get(W);if(Je.__renderTarget=P,!De.__hasExternalTextures){let Ne=Math.max(1,P.width>>de),Be=Math.max(1,P.height>>de);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,de,me,Ne,Be,P.depth,0,fe,he,null):t.texImage2D(te,de,me,Ne,Be,0,fe,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),oe(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,te,Je.__webglTexture,0,re(P)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,te,Je.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(N,P,W){if(i.bindRenderbuffer(i.RENDERBUFFER,N),P.depthBuffer){let G=P.depthTexture,te=G&&G.isDepthTexture?G.type:null,de=b(P.stencilBuffer,te),fe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;oe(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(P),de,P.width,P.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(P),de,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,de,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,N)}else{let G=P.textures;for(let te=0;te<G.length;te++){let de=G[te],fe=r.convert(de.format,de.colorSpace),he=r.convert(de.type),me=v(de.internalFormat,fe,he,de.normalized,de.colorSpace);oe(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(P),me,P.width,P.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(P),me,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,me,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(N,P,W){let G=P.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(P.depthTexture);if(te.__renderTarget=P,(!te.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),G){if(te.__webglInit===void 0&&(te.__webglInit=!0,P.depthTexture.addEventListener("dispose",w)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Se(i.TEXTURE_CUBE_MAP,P.depthTexture);let De=r.convert(P.depthTexture.format),Je=r.convert(P.depthTexture.type),Ne;P.depthTexture.format===fs?Ne=i.DEPTH_COMPONENT24:P.depthTexture.format===or&&(Ne=i.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Ne,P.width,P.height,0,De,Je,null)}}else z(P.depthTexture,0);let de=te.__webglTexture,fe=re(P),he=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,me=P.depthTexture.format===or?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===fs)oe(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,he,de,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,me,he,de,0);else if(P.depthTexture.format===or)oe(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,he,de,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,me,he,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(N){let P=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==N.depthTexture){let G=N.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),G){let te=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,G.removeEventListener("dispose",te)};G.addEventListener("dispose",te),P.__depthDisposeCallback=te}P.__boundDepthTexture=G}if(N.depthTexture&&!P.__autoAllocateDepthBuffer)if(W)for(let G=0;G<6;G++)Fe(P.__webglFramebuffer[G],N,G);else{let G=N.texture.mipmaps;G&&G.length>0?Fe(P.__webglFramebuffer[0],N,0):Fe(P.__webglFramebuffer,N,0)}else if(W){P.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[G]),P.__webglDepthbuffer[G]===void 0)P.__webglDepthbuffer[G]=i.createRenderbuffer(),xe(P.__webglDepthbuffer[G],N,!1);else{let te=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=P.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,de)}}else{let G=N.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),xe(P.__webglDepthbuffer,N,!1);else{let te=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(N,P,W){let G=n.get(N);P!==void 0&&ee(G.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ke(N)}function Ye(N){let P=N.texture,W=n.get(N),G=n.get(P);N.addEventListener("dispose",y);let te=N.textures,de=N.isWebGLCubeRenderTarget===!0,fe=te.length>1;if(fe||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=P.version,o.memory.textures++),de){W.__webglFramebuffer=[];for(let he=0;he<6;he++)if(P.mipmaps&&P.mipmaps.length>0){W.__webglFramebuffer[he]=[];for(let me=0;me<P.mipmaps.length;me++)W.__webglFramebuffer[he][me]=i.createFramebuffer()}else W.__webglFramebuffer[he]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){W.__webglFramebuffer=[];for(let he=0;he<P.mipmaps.length;he++)W.__webglFramebuffer[he]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(fe)for(let he=0,me=te.length;he<me;he++){let De=n.get(te[he]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&oe(N)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){let me=te[he];W.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[he]);let De=r.convert(me.format,me.colorSpace),Je=r.convert(me.type),Ne=v(me.internalFormat,De,Je,me.normalized,me.colorSpace,N.isXRRenderTarget===!0),Be=re(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Ne,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,W.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Se(i.TEXTURE_CUBE_MAP,P);for(let he=0;he<6;he++)if(P.mipmaps&&P.mipmaps.length>0)for(let me=0;me<P.mipmaps.length;me++)ee(W.__webglFramebuffer[he][me],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else ee(W.__webglFramebuffer[he],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);f(P)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let he=0,me=te.length;he<me;he++){let De=te[he],Je=n.get(De),Ne=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ne=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Je.__webglTexture),Se(Ne,De),ee(W.__webglFramebuffer,N,De,i.COLOR_ATTACHMENT0+he,Ne,0),f(De)&&d(Ne)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(he=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,G.__webglTexture),Se(he,P),P.mipmaps&&P.mipmaps.length>0)for(let me=0;me<P.mipmaps.length;me++)ee(W.__webglFramebuffer[me],N,P,i.COLOR_ATTACHMENT0,he,me);else ee(W.__webglFramebuffer,N,P,i.COLOR_ATTACHMENT0,he,0);f(P)&&d(he),t.unbindTexture()}N.depthBuffer&&ke(N)}function ne(N){let P=N.textures;for(let W=0,G=P.length;W<G;W++){let te=P[W];if(f(te)){let de=g(N),fe=n.get(te).__webglTexture;t.bindTexture(de,fe),d(de),t.unbindTexture()}}}let Te=[],Q=[];function le(N){if(N.samples>0){if(oe(N)===!1){let P=N.textures,W=N.width,G=N.height,te=i.COLOR_BUFFER_BIT,de=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(N),he=P.length>1;if(he)for(let De=0;De<P.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let me=N.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let De=0;De<P.length;De++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[De]);let Je=n.get(P[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,W,G,0,0,W,G,te,i.NEAREST),a===!0&&(Te.length=0,Q.length=0,Te.push(i.COLOR_ATTACHMENT0+De),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Te.push(de),Q.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let De=0;De<P.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,fe.__webglColorRenderbuffer[De]);let Je=n.get(P[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&a){let P=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function re(N){return Math.min(s.maxSamples,N.samples)}function oe(N){let P=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function B(N){let P=o.render.frame;h.get(N)!==P&&(h.set(N,P),N.update())}function _e(N,P){let W=N.colorSpace,G=N.format,te=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==La&&W!==oi&&(Lt.getTransfer(W)===Gt?(G!==Qn||te!==jn)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",W)),P}function $(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.getTextureUnits=A,this.setTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=U,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=Le,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dS(i,e){function t(n,s=oi){let r,o=Lt.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===wu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===v0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===x0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===m0)return i.BYTE;if(n===g0)return i.SHORT;if(n===Do)return i.UNSIGNED_SHORT;if(n===Su)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===Oi)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===y0)return i.ALPHA;if(n===_0)return i.RGB;if(n===Qn)return i.RGBA;if(n===fs)return i.DEPTH_COMPONENT;if(n===or)return i.DEPTH_STENCIL;if(n===ar)return i.RED;if(n===Eu)return i.RED_INTEGER;if(n===lr)return i.RG;if(n===Au)return i.RG_INTEGER;if(n===Ru)return i.RGBA_INTEGER;if(n===hl||n===fl||n===dl||n===pl)if(o===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cu||n===Pu||n===Iu||n===Lu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Iu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Du||n===Nu||n===Fu||n===Uu||n===Bu||n===ml||n===Ou)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Du||n===Nu)return o===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uu)return r.COMPRESSED_R11_EAC;if(n===Bu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ml)return r.COMPRESSED_RG11_EAC;if(n===Ou)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ku||n===zu||n===Hu||n===Vu||n===Wu||n===Gu||n===qu||n===Xu||n===Yu||n===Zu||n===Ku||n===$u||n===Ju||n===ju)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ku)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ku)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$u)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ju)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ju)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qu||n===eh||n===th)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qu)return o===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nh||n===ih||n===gl||n===sh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===nh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===No?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var pS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mS=`
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

}`,X0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ft({vertexShader:pS,fragmentShader:mS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Y0=class extends ds{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",a=1,u=null,h=null,p=null,m=null,x=null,_=null,M=typeof XRWebGLBinding<"u",c=new X0,f={},d=t.getContextAttributes(),g=null,v=null,b=[],T=[],w=new Ie,y=null,S=null,E=new Gn;E.viewport=new pt;let R=new Gn;R.viewport=new pt;let C=[E,R],L=new xu,A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let q=b[Z];return q===void 0&&(q=new bo,b[Z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Z){let q=b[Z];return q===void 0&&(q=new bo,b[Z]=q),q.getGripSpace()},this.getHand=function(Z){let q=b[Z];return q===void 0&&(q=new bo,b[Z]=q),q.getHandSpace()};function D(Z){let q=T.indexOf(Z.inputSource);if(q===-1)return;let ve=b[q];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,u||o),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",z);for(let Z=0;Z<b.length;Z++){let q=T[Z];q!==null&&(T[Z]=null,b[Z].disconnect(q))}A=null,I=null,c.reset();for(let Z in f)delete f[Z];if(e.setRenderTarget(g),x=null,m=null,p=null,s=null,v=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),S!==null){let Z=S.camera;Z.fov=S.fov,Z.zoom=S.zoom,Z.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,n.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",z),d.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Pe=null,ee=null;d.depth&&(ee=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=d.stencil?or:fs,Pe=d.stencil?No:as);let xe={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};p=this.getBinding(),m=p.createProjectionLayer(xe),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),v=new Yt(m.textureWidth,m.textureHeight,{format:Qn,type:jn,depthTexture:new Qs(m.textureWidth,m.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let ve={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),v=new Yt(x.framebufferWidth,x.framebufferHeight,{format:Qn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(a),u=null,o=await s.requestReferenceSpace(l),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function z(Z){for(let q=0;q<Z.removed.length;q++){let ve=Z.removed[q],Pe=T.indexOf(ve);Pe>=0&&(T[Pe]=null,b[Pe].disconnect(ve))}for(let q=0;q<Z.added.length;q++){let ve=Z.added[q],Pe=T.indexOf(ve);if(Pe===-1){for(let xe=0;xe<b.length;xe++)if(xe>=T.length){T.push(ve),Pe=xe;break}else if(T[xe]===null){T[xe]=ve,Pe=xe;break}if(Pe===-1)break}let ee=b[Pe];ee&&ee.connect(ve)}}let U=new H,V=new H;function k(Z,q,ve){U.setFromMatrixPosition(q.matrixWorld),V.setFromMatrixPosition(ve.matrixWorld);let Pe=U.distanceTo(V),ee=q.projectionMatrix.elements,xe=ve.projectionMatrix.elements,Fe=ee[14]/(ee[10]-1),ke=ee[14]/(ee[10]+1),Le=(ee[9]+1)/ee[5],Ye=(ee[9]-1)/ee[5],ne=(ee[8]-1)/ee[0],Te=(xe[8]+1)/xe[0],Q=Fe*ne,le=Fe*Te,re=Pe/(-ne+Te),oe=re*-ne;if(q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(oe),Z.translateZ(re),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ee[10]===-1)Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let B=Fe+re,_e=ke+re,$=Q-oe,N=le+(Pe-oe),P=Le*ke/_e*B,W=Ye*ke/_e*B;Z.projectionMatrix.makePerspective($,N,P,W,B,_e),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function X(Z,q){q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let q=Z.near,ve=Z.far;c.texture!==null&&(c.depthNear>0&&(q=c.depthNear),c.depthFar>0&&(ve=c.depthFar)),L.near=R.near=E.near=q,L.far=R.far=E.far=ve,(A!==L.near||I!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),A=L.near,I=L.far),L.layers.mask=Z.layers.mask|6,E.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;let Pe=Z.parent,ee=L.cameras;X(L,Pe);for(let xe=0;xe<ee.length;xe++)X(ee[xe],Pe);ee.length===2?k(L,E,R):L.projectionMatrix.copy(E.projectionMatrix),S===null&&Z.isPerspectiveCamera&&(S={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,L,Pe)};function j(Z,q,ve){ve===null?Z.matrix.copy(q.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Na*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(m===null&&x===null))return a},this.setFoveation=function(Z){a=Z,m!==null&&(m.fixedFoveation=Z),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Z)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(L)},this.getCameraTexture=function(Z){return f[Z]};let Me=null;function Se(Z,q){if(h=q.getViewerPose(u||o),_=q,h!==null){let ve=h.views;x!==null&&(e.setRenderTargetFramebuffer(v,x.framebuffer),e.setRenderTarget(v));let Pe=!1;ve.length!==L.cameras.length&&(L.cameras.length=0,Pe=!0);for(let ke=0;ke<ve.length;ke++){let Le=ve[ke],Ye=null;if(x!==null)Ye=x.getViewport(Le);else{let Te=p.getViewSubImage(m,Le);Ye=Te.viewport,ke===0&&(e.setRenderTargetTextures(v,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(v))}let ne=C[ke];ne===void 0&&(ne=new Gn,ne.layers.enable(ke),ne.viewport=new pt,C[ke]=ne),ne.matrix.fromArray(Le.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Le.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ke===0&&(L.matrix.copy(ne.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Pe===!0&&L.cameras.push(ne)}let ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let ke=p.getDepthInformation(ve[0]);ke&&ke.isValid&&ke.texture&&c.init(ke,s.renderState)}if(ee&&ee.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let ke=0;ke<ve.length;ke++){let Le=ve[ke].camera;if(Le){let Ye=f[Le];Ye||(Ye=new Wa,f[Le]=Ye);let ne=p.getCameraImage(Le);Ye.sourceTexture=ne}}}}for(let ve=0;ve<b.length;ve++){let Pe=T[ve],ee=b[ve];Pe!==null&&ee!==void 0&&ee.update(Pe,q,u||o)}Me&&Me(Z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),_=null}let we=new pg;we.setAnimationLoop(Se),this.setAnimationLoop=function(Z){Me=Z},this.dispose=function(){}}},gS=new et,_g=new xt;_g.set(-1,0,0,0,1,0,0,0,1);function vS(i,e){function t(c,f){c.matrixAutoUpdate===!0&&c.updateMatrix(),f.value.copy(c.matrix)}function n(c,f){f.color.getRGB(c.fogColor.value,w0(i)),f.isFog?(c.fogNear.value=f.near,c.fogFar.value=f.far):f.isFogExp2&&(c.fogDensity.value=f.density)}function s(c,f,d,g,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(c,f):f.isMeshLambertMaterial?(r(c,f),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(c,f),p(c,f)):f.isMeshPhongMaterial?(r(c,f),h(c,f),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(c,f),m(c,f),f.isMeshPhysicalMaterial&&x(c,f,v)):f.isMeshMatcapMaterial?(r(c,f),_(c,f)):f.isMeshDepthMaterial?r(c,f):f.isMeshDistanceMaterial?(r(c,f),M(c,f)):f.isMeshNormalMaterial?r(c,f):f.isLineBasicMaterial?(o(c,f),f.isLineDashedMaterial&&l(c,f)):f.isPointsMaterial?a(c,f,d,g):f.isSpriteMaterial?u(c,f):f.isShadowMaterial?(c.color.value.copy(f.color),c.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(c,f){c.opacity.value=f.opacity,f.color&&c.diffuse.value.copy(f.color),f.emissive&&c.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(c.map.value=f.map,t(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.bumpMap&&(c.bumpMap.value=f.bumpMap,t(f.bumpMap,c.bumpMapTransform),c.bumpScale.value=f.bumpScale,f.side===qn&&(c.bumpScale.value*=-1)),f.normalMap&&(c.normalMap.value=f.normalMap,t(f.normalMap,c.normalMapTransform),c.normalScale.value.copy(f.normalScale),f.side===qn&&c.normalScale.value.negate()),f.displacementMap&&(c.displacementMap.value=f.displacementMap,t(f.displacementMap,c.displacementMapTransform),c.displacementScale.value=f.displacementScale,c.displacementBias.value=f.displacementBias),f.emissiveMap&&(c.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,c.emissiveMapTransform)),f.specularMap&&(c.specularMap.value=f.specularMap,t(f.specularMap,c.specularMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest);let d=e.get(f),g=d.envMap,v=d.envMapRotation;g&&(c.envMap.value=g,c.envMapRotation.value.setFromMatrix4(gS.makeRotationFromEuler(v)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(_g),c.reflectivity.value=f.reflectivity,c.ior.value=f.ior,c.refractionRatio.value=f.refractionRatio),f.lightMap&&(c.lightMap.value=f.lightMap,c.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,c.lightMapTransform)),f.aoMap&&(c.aoMap.value=f.aoMap,c.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,c.aoMapTransform))}function o(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,f.map&&(c.map.value=f.map,t(f.map,c.mapTransform))}function l(c,f){c.dashSize.value=f.dashSize,c.totalSize.value=f.dashSize+f.gapSize,c.scale.value=f.scale}function a(c,f,d,g){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.size.value=f.size*d,c.scale.value=g*.5,f.map&&(c.map.value=f.map,t(f.map,c.uvTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function u(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.rotation.value=f.rotation,f.map&&(c.map.value=f.map,t(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function h(c,f){c.specular.value.copy(f.specular),c.shininess.value=Math.max(f.shininess,1e-4)}function p(c,f){f.gradientMap&&(c.gradientMap.value=f.gradientMap)}function m(c,f){c.metalness.value=f.metalness,f.metalnessMap&&(c.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,c.metalnessMapTransform)),c.roughness.value=f.roughness,f.roughnessMap&&(c.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,c.roughnessMapTransform)),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)}function x(c,f,d){c.ior.value=f.ior,f.sheen>0&&(c.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),c.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(c.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,c.sheenColorMapTransform)),f.sheenRoughnessMap&&(c.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,c.sheenRoughnessMapTransform))),f.clearcoat>0&&(c.clearcoat.value=f.clearcoat,c.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(c.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,c.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(c.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qn&&c.clearcoatNormalScale.value.negate())),f.dispersion>0&&(c.dispersion.value=f.dispersion),f.retroreflectivity>0&&(c.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(c.iridescence.value=f.iridescence,c.iridescenceIOR.value=f.iridescenceIOR,c.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(c.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,c.iridescenceMapTransform)),f.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),f.transmission>0&&(c.transmission.value=f.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),f.transmissionMap&&(c.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,c.transmissionMapTransform)),c.thickness.value=f.thickness,f.thicknessMap&&(c.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=f.attenuationDistance,c.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(c.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(c.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=f.specularIntensity,c.specularColor.value.copy(f.specularColor),f.specularColorMap&&(c.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,c.specularColorMapTransform)),f.specularIntensityMap&&(c.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,c.specularIntensityMapTransform))}function _(c,f){f.matcap&&(c.matcap.value=f.matcap)}function M(c,f){let d=e.get(f).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xS(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(v,b){let T=b.program;n.uniformBlockBinding(v,T)}function u(v,b){let T=s[v.id];T===void 0&&(c(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",d));let w=b.program;n.updateUBOMapping(v,w);let y=e.render.frame;r[v.id]!==y&&(m(v),r[v.id]=y)}function h(v){let b=p();v.__bindingPointIndex=b;let T=i.createBuffer(),w=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function p(){for(let v=0;v<l;v++)if(o.indexOf(v)===-1)return o.push(v),v;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(v){let b=s[v.id],T=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,S=T.length;y<S;y++){let E=T[y];if(Array.isArray(E))for(let R=0,C=E.length;R<C;R++)x(E[R],y,R,w);else x(E,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(v,b,T,w){if(M(v,b,T,w)===!0){let y=v.__offset,S=v.value;if(Array.isArray(S)){let E=0;for(let R=0;R<S.length;R++){let C=S[R],L=f(C);_(C,v.__data,E),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(E+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function _(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function M(v,b,T,w){let y=v.value,S=b+"_"+T;if(w[S]===void 0)return typeof y=="number"||typeof y=="boolean"?w[S]=y:ArrayBuffer.isView(y)?w[S]=y.slice():w[S]=y.clone(),!0;{let E=w[S];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return w[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function c(v){let b=v.uniforms,T=0,w=16;for(let S=0,E=b.length;S<E;S++){let R=Array.isArray(b[S])?b[S]:[b[S]];for(let C=0,L=R.length;C<L;C++){let A=R[C],I=Array.isArray(A.value)?A.value:[A.value];for(let D=0,F=I.length;D<F;D++){let z=I[D],U=f(z),V=T%w,k=V%U.boundary,X=V+k;T+=k,X!==0&&w-X<U.storage&&(T+=w-X),A.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=T,T+=U.storage}}}let y=T%w;return y>0&&(T+=w-y),v.__size=T,v.__cache={},this}function f(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",v),b}function d(v){let b=v.target;b.removeEventListener("dispose",d);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:a,update:u,dispose:g}}var yS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vs=null;function _S(){return vs===null&&(vs=new is(yS,16,16,lr,Sn),vs.name="DFG_LUT",vs.minFilter=zt,vs.magFilter=zt,vs.wrapS=hs,vs.wrapT=hs,vs.generateMipmaps=!1,vs.needsUpdate=!0),vs}var fh=class{constructor(e={}){let{canvas:t=Um(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:x=jn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let M=x,c=new Set([Ru,Au,Eu]),f=new Set([jn,as,Do,No,wu,Tu]),d=new Uint32Array(4),g=new Int32Array(4),v=new H,b=null,T=null,w=[],y=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,R=!1,C=null,L=null,A=null,I=null;this._outputColorSpace=Wt;let D=0,F=0,z=null,U=-1,V=null,k=new pt,X=new pt,j=null,Me=new ue(0),Se=0,we=t.width,Z=t.height,q=1,ve=null,Pe=null,ee=new pt(0,0,we,Z),xe=new pt(0,0,we,Z),Fe=!1,ke=new So,Le=!1,Ye=!1,ne=new et,Te=new H,Q=new pt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function oe(){return z===null?q:1}let B=n;function _e(O,J){return t.getContext(O,J)}let $,N,P,W,G,te,de,fe,he,me,De,Je,Ne,Be,Ve,it,ut,K,Ue,ye,ze,Ge,Ae;try{let O={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Zt,!1),t.addEventListener("webglcontextrestored",Ot,!1),t.addEventListener("webglcontextcreationerror",Mi,!1),B===null){let J="webgl2";if(B=_e(J,O),B===null)throw _e(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(O){throw t.removeEventListener("webglcontextlost",Zt,!1),t.removeEventListener("webglcontextrestored",Ot,!1),t.removeEventListener("webglcontextcreationerror",Mi,!1),vt("WebGLRenderer: "+O.message),O}function ot(){$=new Ab(B),$.init(),ze=new dS(B,$),N=new vb(B,$,e,ze),P=new hS(B,$),N.reversedDepthBuffer&&m&&P.buffers.depth.setReversed(!0),L=B.createFramebuffer(),A=B.createFramebuffer(),I=B.createFramebuffer(),W=new Pb(B),G=new JM,te=new fS(B,$,P,G,N,ze,W),de=new Eb(E),fe=new L2(B),Ge=new mb(B,fe),he=new Rb(B,fe,W,Ge),me=new Lb(B,he,fe,Ge,W),K=new Ib(B,N,te),Ve=new xb(G),De=new $M(E,de,$,N,Ge,Ve),Je=new vS(E,G),Ne=new QM,Be=new rS($),ut=new pb(E,de,P,me,_,a),it=new uS(E,me,N),Ae=new xS(B,W,N,P),Ue=new gb(B,$,W),ye=new Cb(B,$,W),W.programs=De.programs,E.capabilities=N,E.extensions=$,E.properties=G,E.renderLists=Ne,E.shadowMap=it,E.state=P,E.info=W}M!==jn&&(S=new Nb(M,t.width,t.height,l,s,r));let st=new Y0(E,B);this.xr=st,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let O=$.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=$.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(O){O!==void 0&&(q=O,this.setSize(we,Z,!1))},this.getSize=function(O){return O.set(we,Z)},this.setSize=function(O,J,pe=!0){if(st.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}we=O,Z=J,t.width=Math.floor(O*q),t.height=Math.floor(J*q),pe===!0&&(t.style.width=O+"px",t.style.height=J+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,O,J)},this.getDrawingBufferSize=function(O){return O.set(we*q,Z*q).floor()},this.setDrawingBufferSize=function(O,J,pe){we=O,Z=J,q=pe,t.width=Math.floor(O*pe),t.height=Math.floor(J*pe),this.setViewport(0,0,O,J)},this.setEffects=function(O){if(M===jn){vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(O){for(let J=0;J<O.length;J++)if(O[J].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(O||[])},this.getCurrentViewport=function(O){return O.copy(k)},this.getViewport=function(O){return O.copy(ee)},this.setViewport=function(O,J,pe,ce){O.isVector4?ee.set(O.x,O.y,O.z,O.w):ee.set(O,J,pe,ce),P.viewport(k.copy(ee).multiplyScalar(q).round())},this.getScissor=function(O){return O.copy(xe)},this.setScissor=function(O,J,pe,ce){O.isVector4?xe.set(O.x,O.y,O.z,O.w):xe.set(O,J,pe,ce),P.scissor(X.copy(xe).multiplyScalar(q).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(O){P.setScissorTest(Fe=O)},this.setOpaqueSort=function(O){ve=O},this.setTransparentSort=function(O){Pe=O},this.getClearColor=function(O){return O.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(O=!0,J=!0,pe=!0){let ce=0;if(O){let ae=!1;if(z!==null){let We=z.texture.format;ae=c.has(We)}if(ae){let We=z.texture.type,Ke=f.has(We),Xe=ut.getClearColor(),$e=ut.getClearAlpha(),nt=Xe.r,Mt=Xe.g,wt=Xe.b;Ke?(d[0]=nt,d[1]=Mt,d[2]=wt,d[3]=$e,B.clearBufferuiv(B.COLOR,0,d)):(g[0]=nt,g[1]=Mt,g[2]=wt,g[3]=$e,B.clearBufferiv(B.COLOR,0,g))}else ce|=B.COLOR_BUFFER_BIT}J&&(ce|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ce|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&B.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(O){O.setRenderer(this),C=O},this.dispose=function(){t.removeEventListener("webglcontextlost",Zt,!1),t.removeEventListener("webglcontextrestored",Ot,!1),t.removeEventListener("webglcontextcreationerror",Mi,!1),ut.dispose(),Ne.dispose(),Be.dispose(),G.dispose(),de.dispose(),me.dispose(),Ge.dispose(),Ae.dispose(),De.dispose(),st.dispose(),st.removeEventListener("sessionstart",Zl),st.removeEventListener("sessionend",Kl),ws.stop()};function Zt(O){O.preventDefault(),M0("WebGLRenderer: Context Lost."),R=!0}function Ot(){M0("WebGLRenderer: Context Restored."),R=!1;let O=W.autoReset,J=it.enabled,pe=it.autoUpdate,ce=it.needsUpdate,ae=it.type;ot(),W.autoReset=O,it.enabled=J,it.autoUpdate=pe,it.needsUpdate=ce,it.type=ae}function Mi(O){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function Ni(O){let J=O.target;J.removeEventListener("dispose",Ni),$h(J)}function $h(O){Jh(O),G.remove(O)}function Jh(O){let J=G.get(O).programs;J!==void 0&&(J.forEach(function(pe){De.releaseProgram(pe)}),O.isShaderMaterial&&De.releaseShaderCache(O))}this.renderBufferDirect=function(O,J,pe,ce,ae,We){J===null&&(J=le);let Ke=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Xe=tf(O,J,pe,ce,ae);P.setMaterial(ce,Ke);let $e=pe.index,nt=1;if(ce.wireframe===!0){if($e=he.getWireframeAttribute(pe),$e===void 0)return;nt=2}let Mt=pe.drawRange,wt=pe.attributes.position,Qe=Mt.start*nt,It=(Mt.start+Mt.count)*nt;We!==null&&(Qe=Math.max(Qe,We.start*nt),It=Math.min(It,(We.start+We.count)*nt)),$e!==null?(Qe=Math.max(Qe,0),It=Math.min(It,$e.count)):wt!=null&&(Qe=Math.max(Qe,0),It=Math.min(It,wt.count));let jt=It-Qe;if(jt<0||jt===1/0)return;Ge.setup(ae,ce,Xe,pe,$e);let Xt,Ht=Ue;if($e!==null&&(Xt=fe.get($e),Ht=ye,Ht.setIndex(Xt)),ae.isMesh)ce.wireframe===!0?(P.setLineWidth(ce.wireframeLinewidth*oe()),Ht.setMode(B.LINES)):Ht.setMode(B.TRIANGLES);else if(ae.isLine){let ie=ce.linewidth;ie===void 0&&(ie=1),P.setLineWidth(ie*oe()),ae.isLineSegments?Ht.setMode(B.LINES):ae.isLineLoop?Ht.setMode(B.LINE_LOOP):Ht.setMode(B.LINE_STRIP)}else ae.isPoints?Ht.setMode(B.POINTS):ae.isSprite&&Ht.setMode(B.TRIANGLES);if(ae.isBatchedMesh)if($.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let ie=ae._multiDrawStarts,qe=ae._multiDrawCounts,Wn=ae._multiDrawCount,Nt=$e?fe.get($e).bytesPerElement:1,ui=G.get(ce).currentProgram.getUniforms();for(let _t=0;_t<Wn;_t++)ui.setValue(B,"_gl_DrawID",_t),Ht.render(ie[_t]/Nt,qe[_t])}else if(ae.isInstancedMesh)Ht.renderInstances(Qe,jt,ae.count);else if(pe.isInstancedBufferGeometry){let ie=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,qe=Math.min(pe.instanceCount,ie);Ht.renderInstances(Qe,jt,qe)}else Ht.render(Qe,jt)};function Yl(O,J,pe,ce){C!==null&&O.isNodeMaterial&&C.setObject(ce,O),Le===!0&&Ve.setState(O,pe,!1),O.transparent===!0&&O.side===Mn&&O.forceSinglePass===!1?(O.side=qn,O.needsUpdate=!0,ha(O,J,ce),O.side=gs,O.needsUpdate=!0,ha(O,J,ce),O.side=Mn):ha(O,J,ce)}this.compile=function(O,J,pe=null){pe===null&&(pe=O),C!==null&&C.renderStart(O,J,pe),T=Be.get(pe),T.init(J),y.push(T),pe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(J.layers)&&(T.pushLight(ae),ae.castShadow&&T.pushShadow(ae))}),O!==pe&&O.traverseVisible(function(ae){ae.isLight&&ae.layers.test(J.layers)&&(T.pushLight(ae),ae.castShadow&&T.pushShadow(ae))}),T.setupLights(),C!==null&&C.updateLights(T.state.lightsArray),Ye=this.localClippingEnabled,Le=Ve.init(this.clippingPlanes,Ye),Le===!0&&Ve.setGlobalState(this.clippingPlanes,J),C!==null&&it.render(T.state.shadowsArray,pe,J);let ce=new Set;return O.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let We=ae.material;if(We)if(Array.isArray(We))for(let Ke=0;Ke<We.length;Ke++){let Xe=We[Ke];Yl(Xe,pe,J,ae),ce.add(Xe)}else Yl(We,pe,J,ae),ce.add(We)}),T=y.pop(),C!==null&&C.renderEnd(),ce},this.compileAsync=function(O,J,pe=null){let ce=this.compile(O,J,pe);return new Promise(ae=>{function We(){if(ce.forEach(function(Ke){let $e=G.get(Ke).currentProgram;($e===void 0||$e.isReady())&&ce.delete(Ke)}),ce.size===0){ae(O);return}setTimeout(We,10)}$.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let ca=null;function jh(O){ca&&ca(O)}function Zl(){ws.stop()}function Kl(){ws.start()}let ws=new pg;ws.setAnimationLoop(jh),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(O){ca=O,st.setAnimationLoop(O),O===null?ws.stop():ws.start()},st.addEventListener("sessionstart",Zl),st.addEventListener("sessionend",Kl),this.render=function(O,J){if(J!==void 0&&J.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;C!==null&&C.renderStart(O,J);let pe=st.enabled===!0&&st.isPresenting===!0,ce=S!==null&&(z===null||pe)&&S.begin(E,z);if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(J),J=st.getCamera()),O.isScene===!0&&O.onBeforeRender(E,O,J,z),T=Be.get(O,y.length),T.init(J),T.state.textureUnits=te.getTextureUnits(),y.push(T),ne.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ke.setFromProjectionMatrix(ne,ns,J.reversedDepth),Ye=this.localClippingEnabled,Le=Ve.init(this.clippingPlanes,Ye),b=Ne.get(O,w.length),b.init(),w.push(b),st.enabled===!0&&st.isPresenting===!0){let Ke=E.xr.getDepthSensingMesh();Ke!==null&&qs(Ke,J,-1/0,E.sortObjects)}qs(O,J,0,E.sortObjects),b.finish(),C!==null&&C.updateLights(T.state.lightsArray),E.sortObjects===!0&&b.sort(ve,Pe),re=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,re&&ut.addToRenderList(b,O),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Le===!0&&Ve.beginShadows();let ae=T.state.shadowsArray;if(it.render(ae,O,J),Le===!0&&Ve.endShadows(),(ce&&S.hasRenderPass())===!1){let Ke=b.opaque,Xe=b.transmissive;if(T.setupLights(),J.isArrayCamera){let $e=J.cameras;if(Xe.length>0)for(let nt=0,Mt=$e.length;nt<Mt;nt++){let wt=$e[nt];Jl(Ke,Xe,O,wt)}re&&ut.render(O);for(let nt=0,Mt=$e.length;nt<Mt;nt++){let wt=$e[nt];$l(b,O,wt,wt.viewport)}}else Xe.length>0&&Jl(Ke,Xe,O,J),re&&ut.render(O),$l(b,O,J)}z!==null&&F===0&&(te.updateMultisampleRenderTarget(z),te.updateRenderTargetMipmap(z)),ce&&S.end(E),O.isScene===!0&&O.onAfterRender(E,O,J),Ge.resetDefaultState(),U=-1,V=null,y.pop(),y.length>0?(T=y[y.length-1],te.setTextureUnits(T.state.textureUnits),Le===!0&&Ve.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,C!==null&&C.renderEnd()};function qs(O,J,pe,ce){if(O.visible===!1)return;if(O.layers.test(J.layers)){if(O.isGroup)pe=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(J);else if(O.isLightProbeGrid)T.pushLightProbeGrid(O);else if(O.isLight)T.pushLight(O),O.castShadow&&T.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||O.intersectsFrustum(ke)){ce&&Q.setFromMatrixPosition(O.matrixWorld).applyMatrix4(ne);let Ke=me.update(O),Xe=O.material;Xe.visible&&b.push(O,Ke,Xe,pe,Q.z,null,J)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||O.intersectsFrustum(ke))){let Ke=me.update(O),Xe=O.material;if(ce&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Q.copy(O.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),Q.copy(Ke.boundingSphere.center)),Q.applyMatrix4(O.matrixWorld).applyMatrix4(ne)),Array.isArray(Xe)){let $e=Ke.groups;for(let nt=0,Mt=$e.length;nt<Mt;nt++){let wt=$e[nt],Qe=Xe[wt.materialIndex];Qe&&Qe.visible&&b.push(O,Ke,Qe,pe,Q.z,wt,J)}}else Xe.visible&&b.push(O,Ke,Xe,pe,Q.z,null,J)}}let We=O.children;for(let Ke=0,Xe=We.length;Ke<Xe;Ke++)qs(We[Ke],J,pe,ce)}function $l(O,J,pe,ce){let{opaque:ae,transmissive:We,transparent:Ke}=O;T.setupLightsView(pe),Le===!0&&Ve.setGlobalState(E.clippingPlanes,pe),ce&&P.viewport(k.copy(ce)),ae.length>0&&ua(ae,J,pe),We.length>0&&ua(We,J,pe),Ke.length>0&&ua(Ke,J,pe),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Jl(O,J,pe,ce){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ce.id]===void 0){let Qe=$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ce.id]=new Yt(1,1,{generateMipmaps:!0,type:Qe?Sn:jn,minFilter:Nn,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}let We=T.state.transmissionRenderTarget[ce.id],Ke=ce.viewport||k;We.setSize(Ke.z*E.transmissionResolutionScale,Ke.w*E.transmissionResolutionScale);let Xe=E.getRenderTarget(),$e=E.getActiveCubeFace(),nt=E.getActiveMipmapLevel();E.setRenderTarget(We),E.getClearColor(Me),Se=E.getClearAlpha(),Se<1&&E.setClearColor(16777215,.5),E.clear(),re&&ut.render(pe);let Mt=E.toneMapping;E.toneMapping=os;let wt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),T.setupLightsView(ce),Le===!0&&Ve.setGlobalState(E.clippingPlanes,ce),ua(O,pe,ce),te.updateMultisampleRenderTarget(We),te.updateRenderTargetMipmap(We),$.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let It=0,jt=J.length;It<jt;It++){let Xt=J[It],{object:Ht,geometry:ie,material:qe,group:Wn}=Xt;if(qe.side===Mn&&Ht.layers.test(ce.layers)){let Nt=qe.side;qe.side=qn,qe.needsUpdate=!0,Qh(Ht,pe,ce,ie,qe,Wn),qe.side=Nt,qe.needsUpdate=!0,Qe=!0}}Qe===!0&&(te.updateMultisampleRenderTarget(We),te.updateRenderTargetMipmap(We))}E.setRenderTarget(Xe,$e,nt),E.setClearColor(Me,Se),wt!==void 0&&(ce.viewport=wt),E.toneMapping=Mt}function ua(O,J,pe){let ce=J.isScene===!0?J.overrideMaterial:null;for(let ae=0,We=O.length;ae<We;ae++){let Ke=O[ae],{object:Xe,geometry:$e,group:nt}=Ke,Mt=Ke.material;Mt.allowOverride===!0&&ce!==null&&(Mt=ce),Xe.layers.test(pe.layers)&&Qh(Xe,J,pe,$e,Mt,nt)}}function Qh(O,J,pe,ce,ae,We){C!==null&&ae.isNodeMaterial&&C.setObject(O,ae),O.onBeforeRender(E,J,pe,ce,ae,We),O.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),ae.onBeforeRender(E,J,pe,ce,O,We),ae.transparent===!0&&ae.side===Mn&&ae.forceSinglePass===!1?(ae.side=qn,ae.needsUpdate=!0,E.renderBufferDirect(pe,J,ce,ae,O,We),ae.side=gs,ae.needsUpdate=!0,E.renderBufferDirect(pe,J,ce,ae,O,We),ae.side=Mn):E.renderBufferDirect(pe,J,ce,ae,O,We),O.onAfterRender(E,J,pe,ce,ae,We)}function ha(O,J,pe){J.isScene!==!0&&(J=le);let ce=G.get(O),ae=T.state.lights,We=T.state.shadowsArray,Ke=ae.state.version,Xe=De.getParameters(O,ae.state,We,J,pe,T.state.lightProbeGridArray),$e=De.getProgramCacheKey(Xe),nt=ce.programs;ce.environment=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?J.environment:null,ce.fog=J.fog;let Mt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap;ce.envMap=de.get(O.envMap||ce.environment,Mt),ce.envMapRotation=ce.environment!==null&&O.envMap===null?J.environmentRotation:O.envMapRotation,nt===void 0&&(O.addEventListener("dispose",Ni),nt=new Map,ce.programs=nt);let wt=nt.get($e);if(wt!==void 0){if(ce.currentProgram===wt&&ce.lightsStateVersion===Ke)return jl(O,Xe),wt}else Xe.uniforms=De.getUniforms(O),C!==null&&O.isNodeMaterial&&C.build(O,pe,Xe),O.onBeforeCompile(Xe,E),wt=De.acquireProgram(Xe,$e),nt.set($e,wt),ce.uniforms=Xe.uniforms;let Qe=ce.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(Qe.clippingPlanes=Ve.uniform),jl(O,Xe),ce.needsLights=Ts(O),ce.lightsStateVersion=Ke,ce.needsLights&&(Qe.ambientLightColor.value=ae.state.ambient,Qe.lightProbe.value=ae.state.probe,Qe.sunLights.value=ae.state.sun,Qe.sunLightShadows.value=ae.state.sunShadow,Qe.directionalLights.value=ae.state.directional,Qe.directionalLightShadows.value=ae.state.directionalShadow,Qe.spotLights.value=ae.state.spot,Qe.spotLightShadows.value=ae.state.spotShadow,Qe.rectAreaLights.value=ae.state.rectArea,Qe.ltc_1.value=ae.state.rectAreaLTC1,Qe.ltc_2.value=ae.state.rectAreaLTC2,Qe.pointLights.value=ae.state.point,Qe.pointLightShadows.value=ae.state.pointShadow,Qe.hemisphereLights.value=ae.state.hemi,Qe.sunShadowMatrix.value=ae.state.sunShadowMatrix,Qe.sunShadowCascade.value=ae.state.sunShadowCascade,Qe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ae.state.spotLightMatrix,Qe.spotLightMap.value=ae.state.spotLightMap,Qe.pointShadowMatrix.value=ae.state.pointShadowMatrix),ce.lightProbeGrid=T.state.lightProbeGridArray.length>0,ce.currentProgram=wt,ce.uniformsList=null,wt}function ef(O){if(O.uniformsList===null){let J=O.currentProgram.getUniforms();O.uniformsList=Oo.seqWithValue(J.seq,O.uniforms)}return O.uniformsList}function jl(O,J){let pe=G.get(O);pe.outputColorSpace=J.outputColorSpace,pe.batching=J.batching,pe.batchingColor=J.batchingColor,pe.instancing=J.instancing,pe.instancingColor=J.instancingColor,pe.instancingMorph=J.instancingMorph,pe.skinning=J.skinning,pe.morphTargets=J.morphTargets,pe.morphNormals=J.morphNormals,pe.morphColors=J.morphColors,pe.morphTargetsCount=J.morphTargetsCount,pe.numClippingPlanes=J.numClippingPlanes,pe.numIntersection=J.numClipIntersection,pe.vertexAlphas=J.vertexAlphas,pe.vertexTangents=J.vertexTangents,pe.toneMapping=J.toneMapping}function vr(O,J){if(O.length===0)return null;if(O.length===1)return O[0].texture!==null?O[0]:null;v.setFromMatrixPosition(J.matrixWorld);for(let pe=0,ce=O.length;pe<ce;pe++){let ae=O[pe];if(ae.texture!==null&&ae.boundingBox.containsPoint(v))return ae}return null}function tf(O,J,pe,ce,ae){J.isScene!==!0&&(J=le),te.resetTextureUnits();let We=J.fog,Ke=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?J.environment:null,Xe=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Lt.workingColorSpace,$e=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,nt=de.get(ce.envMap||Ke,$e),Mt=ce.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,wt=!!pe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Qe=!!pe.morphAttributes.position,It=!!pe.morphAttributes.normal,jt=!!pe.morphAttributes.color,Xt=os;ce.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Xt=E.toneMapping);let Ht=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,ie=Ht!==void 0?Ht.length:0,qe=G.get(ce),Wn=T.state.lights;if(Le===!0&&(Ye===!0||O!==V)){let kt=O===V&&ce.id===U;Ve.setState(ce,O,kt)}let Nt=!1;ce.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Wn.state.version||qe.outputColorSpace!==Xe||ae.isBatchedMesh&&qe.batching===!1||!ae.isBatchedMesh&&qe.batching===!0||ae.isBatchedMesh&&qe.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&qe.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&qe.instancing===!1||!ae.isInstancedMesh&&qe.instancing===!0||ae.isSkinnedMesh&&qe.skinning===!1||!ae.isSkinnedMesh&&qe.skinning===!0||ae.isInstancedMesh&&qe.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&qe.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&qe.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&qe.instancingMorph===!1&&ae.morphTexture!==null||qe.envMap!==nt||ce.fog===!0&&qe.fog!==We||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ve.numPlanes||qe.numIntersection!==Ve.numIntersection)||qe.vertexAlphas!==Mt||qe.vertexTangents!==wt||qe.morphTargets!==Qe||qe.morphNormals!==It||qe.morphColors!==jt||qe.toneMapping!==Xt||qe.morphTargetsCount!==ie||!!qe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Nt=!0):(Nt=!0,qe.__version=ce.version);let ui=qe.currentProgram;Nt===!0&&(ui=ha(ce,J,ae),C&&ce.isNodeMaterial&&C.onUpdateProgram(ce,ui,qe));let _t=!1,bt=!1,Ft=!1,at=ui.getUniforms(),mn=qe.uniforms;if(P.useProgram(ui.program)&&(_t=!0,bt=!0,Ft=!0),ce.id!==U&&(U=ce.id,bt=!0),qe.needsLights){let kt=vr(T.state.lightProbeGridArray,ae);qe.lightProbeGrid!==kt&&(qe.lightProbeGrid=kt,bt=!0)}if(_t||V!==O){P.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),at.setValue(B,"projectionMatrix",O.projectionMatrix),at.setValue(B,"viewMatrix",O.matrixWorldInverse);let vn=at.map.cameraPosition;vn!==void 0&&vn.setValue(B,Te.setFromMatrixPosition(O.matrixWorld)),N.logarithmicDepthBuffer&&at.setValue(B,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&at.setValue(B,"isOrthographic",O.isOrthographicCamera===!0),V!==O&&(V=O,bt=!0,Ft=!0)}if(qe.needsLights&&(Wn.state.sunShadowMap.length>0&&at.setValue(B,"sunShadowMap",Wn.state.sunShadowMap,te),Wn.state.directionalShadowMap.length>0&&at.setValue(B,"directionalShadowMap",Wn.state.directionalShadowMap,te),Wn.state.spotShadowMap.length>0&&at.setValue(B,"spotShadowMap",Wn.state.spotShadowMap,te),Wn.state.pointShadowMap.length>0&&at.setValue(B,"pointShadowMap",Wn.state.pointShadowMap,te)),ae.isSkinnedMesh){at.setOptional(B,ae,"bindMatrix"),at.setOptional(B,ae,"bindMatrixInverse");let kt=ae.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),at.setValue(B,"boneTexture",kt.boneTexture,te))}ae.isBatchedMesh&&(at.setOptional(B,ae,"batchingTexture"),at.setValue(B,"batchingTexture",ae._matricesTexture,te),at.setOptional(B,ae,"batchingIdTexture"),at.setValue(B,"batchingIdTexture",ae._indirectTexture,te),at.setOptional(B,ae,"batchingColorTexture"),ae._colorsTexture!==null&&at.setValue(B,"batchingColorTexture",ae._colorsTexture,te));let hi=pe.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&K.update(ae,pe,ui),(bt||qe.receiveShadow!==ae.receiveShadow)&&(qe.receiveShadow=ae.receiveShadow,at.setValue(B,"receiveShadow",ae.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&J.environment!==null&&(mn.envMapIntensity.value=J.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=_S()),bt){if(at.setValue(B,"toneMappingExposure",E.toneMappingExposure),qe.needsLights&&nf(mn,Ft),We&&ce.fog===!0&&Je.refreshFogUniforms(mn,We),Je.refreshMaterialUniforms(mn,ce,q,Z,T.state.transmissionRenderTarget[O.id]),qe.needsLights&&qe.lightProbeGrid){let kt=qe.lightProbeGrid;mn.probesSH.value=kt.texture,mn.probesMin.value.copy(kt.boundingBox.min),mn.probesMax.value.copy(kt.boundingBox.max),mn.probesResolution.value.copy(kt.resolution)}Oo.upload(B,ef(qe),mn,te)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Oo.upload(B,ef(qe),mn,te),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&at.setValue(B,"center",ae.center),at.setValue(B,"modelViewMatrix",ae.modelViewMatrix),at.setValue(B,"normalMatrix",ae.normalMatrix),at.setValue(B,"modelMatrix",ae.matrixWorld),ce.uniformsGroups!==void 0){let kt=ce.uniformsGroups;for(let vn=0,Zi=kt.length;vn<Zi;vn++){let Xr=kt[vn];Ae.update(Xr,ui),Ae.bind(Xr,ui)}}return ui}function nf(O,J){O.ambientLightColor.needsUpdate=J,O.lightProbe.needsUpdate=J,O.sunLights.needsUpdate=J,O.sunLightShadows.needsUpdate=J,O.directionalLights.needsUpdate=J,O.directionalLightShadows.needsUpdate=J,O.pointLights.needsUpdate=J,O.pointLightShadows.needsUpdate=J,O.spotLights.needsUpdate=J,O.spotLightShadows.needsUpdate=J,O.rectAreaLights.needsUpdate=J,O.hemisphereLights.needsUpdate=J}function Ts(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(O,J,pe){let ce=G.get(O);ce.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),G.get(O.texture).__webglTexture=J,G.get(O.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:pe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,J){let pe=G.get(O);pe.__webglFramebuffer=J,pe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(O,J=0,pe=0){z=O,D=J,F=pe;let ce=null,ae=!1,We=!1;if(O){let Xe=G.get(O);if(Xe.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(B.FRAMEBUFFER,Xe.__webglFramebuffer),k.copy(O.viewport),X.copy(O.scissor),j=O.scissorTest,P.viewport(k),P.scissor(X),P.setScissorTest(j),U=-1;return}else if(Xe.__webglFramebuffer===void 0)te.setupRenderTarget(O);else if(Xe.__hasExternalTextures)te.rebindTextures(O,G.get(O.texture).__webglTexture,G.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let Mt=O.depthTexture;if(Xe.__boundDepthTexture!==Mt){if(Mt!==null&&G.has(Mt)&&(O.width!==Mt.image.width||O.height!==Mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(O)}}let $e=O.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(We=!0);let nt=G.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(nt[J])?ce=nt[J][pe]:ce=nt[J],ae=!0):O.samples>0&&te.useMultisampledRTT(O)===!1?ce=G.get(O).__webglMultisampledFramebuffer:Array.isArray(nt)?ce=nt[pe]:ce=nt,k.copy(O.viewport),X.copy(O.scissor),j=O.scissorTest}else k.copy(ee).multiplyScalar(q).floor(),X.copy(xe).multiplyScalar(q).floor(),j=Fe;if(pe!==0&&(ce=L),P.bindFramebuffer(B.FRAMEBUFFER,ce)&&P.drawBuffers(O,ce),P.viewport(k),P.scissor(X),P.setScissorTest(j),ae){let Xe=G.get(O.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+J,Xe.__webglTexture,pe)}else if(We){let Xe=J;for(let $e=0;$e<O.textures.length;$e++){let nt=G.get(O.textures[$e]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+$e,nt.__webglTexture,pe,Xe)}}else if(O!==null&&pe!==0){let Xe=G.get(O.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xe.__webglTexture,pe)}U=-1};function qr(O){let J=G.get(O);return(J.__readFormat!==O.format||J.__readType!==O.type)&&(J.__readFormat=O.format,J.__readType=O.type,J.__formatReadable=N.textureFormatReadable(O.format),J.__typeReadable=N.textureTypeReadable(O.type)),J}this.readRenderTargetPixels=function(O,J,pe,ce,ae,We,Ke,Xe=0){if(!(O&&O.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=G.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ke!==void 0&&($e=$e[Ke]),$e){P.bindFramebuffer(B.FRAMEBUFFER,$e);try{let nt=O.textures[Xe],Mt=nt.format,wt=nt.type;O.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Xe);let Qe=qr(nt);if(Qe.__formatReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=O.width-ce&&pe>=0&&pe<=O.height-ae&&B.readPixels(J,pe,ce,ae,ze.convert(Mt),ze.convert(wt),We)}finally{let nt=z!==null?G.get(z).__webglFramebuffer:null;P.bindFramebuffer(B.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(O,J,pe,ce,ae,We,Ke,Xe=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=G.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ke!==void 0&&($e=$e[Ke]),$e)if(J>=0&&J<=O.width-ce&&pe>=0&&pe<=O.height-ae){P.bindFramebuffer(B.FRAMEBUFFER,$e);let nt=O.textures[Xe],Mt=nt.format,wt=nt.type;O.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Xe);let Qe=qr(nt);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,It),B.bufferData(B.PIXEL_PACK_BUFFER,We.byteLength,B.STREAM_READ),B.readPixels(J,pe,ce,ae,ze.convert(Mt),ze.convert(wt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let jt=z!==null?G.get(z).__webglFramebuffer:null;P.bindFramebuffer(B.FRAMEBUFFER,jt);let Xt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Om(B,Xt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,It),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,We),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(It),B.deleteSync(Xt),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,J=null,pe=0){let ce=Math.pow(2,-pe),ae=Math.floor(O.image.width*ce),We=Math.floor(O.image.height*ce),Ke=J!==null?J.x:0,Xe=J!==null?J.y:0;te.setTexture2D(O,0),B.copyTexSubImage2D(B.TEXTURE_2D,pe,0,0,Ke,Xe,ae,We),P.unbindTexture()},this.copyTextureToTexture=function(O,J,pe=null,ce=null,ae=0,We=0){let Ke,Xe,$e,nt,Mt,wt,Qe,It,jt,Xt=O.isCompressedTexture?O.mipmaps[We]:O.image;if(pe!==null)Ke=pe.max.x-pe.min.x,Xe=pe.max.y-pe.min.y,$e=pe.isBox3?pe.max.z-pe.min.z:1,nt=pe.min.x,Mt=pe.min.y,wt=pe.isBox3?pe.min.z:0;else{let mn=Math.pow(2,-ae);Ke=Math.floor(Xt.width*mn),Xe=Math.floor(Xt.height*mn),O.isDataArrayTexture?$e=Xt.depth:O.isData3DTexture?$e=Math.floor(Xt.depth*mn):$e=1,nt=0,Mt=0,wt=0}ce!==null?(Qe=ce.x,It=ce.y,jt=ce.z):(Qe=0,It=0,jt=0);let Ht=ze.convert(J.format),ie=ze.convert(J.type),qe;J.isData3DTexture?(te.setTexture3D(J,0),qe=B.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(te.setTexture2DArray(J,0),qe=B.TEXTURE_2D_ARRAY):(te.setTexture2D(J,0),qe=B.TEXTURE_2D),P.activeTexture(B.TEXTURE0),P.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),P.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),P.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment);let Wn=P.getParameter(B.UNPACK_ROW_LENGTH),Nt=P.getParameter(B.UNPACK_IMAGE_HEIGHT),ui=P.getParameter(B.UNPACK_SKIP_PIXELS),_t=P.getParameter(B.UNPACK_SKIP_ROWS),bt=P.getParameter(B.UNPACK_SKIP_IMAGES);P.pixelStorei(B.UNPACK_ROW_LENGTH,Xt.width),P.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xt.height),P.pixelStorei(B.UNPACK_SKIP_PIXELS,nt),P.pixelStorei(B.UNPACK_SKIP_ROWS,Mt),P.pixelStorei(B.UNPACK_SKIP_IMAGES,wt);let Ft=O.isDataArrayTexture||O.isData3DTexture,at=J.isDataArrayTexture||J.isData3DTexture;if(O.isDepthTexture){let mn=G.get(O),hi=G.get(J),kt=G.get(mn.__renderTarget),vn=G.get(hi.__renderTarget);P.bindFramebuffer(B.READ_FRAMEBUFFER,kt.__webglFramebuffer),P.bindFramebuffer(B.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let Zi=0;Zi<$e;Zi++)Ft&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,G.get(O).__webglTexture,ae,wt+Zi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,G.get(J).__webglTexture,We,jt+Zi)),B.blitFramebuffer(nt,Mt,Ke,Xe,Qe,It,Ke,Xe,B.DEPTH_BUFFER_BIT,B.NEAREST);P.bindFramebuffer(B.READ_FRAMEBUFFER,null),P.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ae!==0||O.isRenderTargetTexture||G.has(O)){let mn=G.get(O),hi=G.get(J);P.bindFramebuffer(B.READ_FRAMEBUFFER,A),P.bindFramebuffer(B.DRAW_FRAMEBUFFER,I);for(let kt=0;kt<$e;kt++)Ft?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,ae,wt+kt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,ae),at?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,hi.__webglTexture,We,jt+kt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,hi.__webglTexture,We),ae!==0?B.blitFramebuffer(nt,Mt,Ke,Xe,Qe,It,Ke,Xe,B.COLOR_BUFFER_BIT,B.NEAREST):at?B.copyTexSubImage3D(qe,We,Qe,It,jt+kt,nt,Mt,Ke,Xe):B.copyTexSubImage2D(qe,We,Qe,It,nt,Mt,Ke,Xe);P.bindFramebuffer(B.READ_FRAMEBUFFER,null),P.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else at?O.isDataTexture||O.isData3DTexture?B.texSubImage3D(qe,We,Qe,It,jt,Ke,Xe,$e,Ht,ie,Xt.data):J.isCompressedArrayTexture?B.compressedTexSubImage3D(qe,We,Qe,It,jt,Ke,Xe,$e,Ht,Xt.data):B.texSubImage3D(qe,We,Qe,It,jt,Ke,Xe,$e,Ht,ie,Xt):O.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,We,Qe,It,Ke,Xe,Ht,ie,Xt.data):O.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,We,Qe,It,Xt.width,Xt.height,Ht,Xt.data):B.texSubImage2D(B.TEXTURE_2D,We,Qe,It,Ke,Xe,Ht,ie,Xt);P.pixelStorei(B.UNPACK_ROW_LENGTH,Wn),P.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt),P.pixelStorei(B.UNPACK_SKIP_PIXELS,ui),P.pixelStorei(B.UNPACK_SKIP_ROWS,_t),P.pixelStorei(B.UNPACK_SKIP_IMAGES,bt),We===0&&J.generateMipmaps&&B.generateMipmap(qe),P.unbindTexture()},this.initRenderTarget=function(O){G.get(O).__webglFramebuffer===void 0&&te.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?te.setTextureCube(O,0):O.isData3DTexture?te.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?te.setTexture2DArray(O,0):te.setTexture2D(O,0),P.unbindTexture()},this.resetState=function(){D=0,F=0,z=null,P.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}};var $t=(i,e,t)=>i<e?e:i>t?t:i,rt=(i,e,t)=>i+(e-i)*t,_l=i=>i*i*(3-2*i),At=(i,e,t)=>{let n=$t((t-i)/(e-i),0,1);return n*n*(3-2*n)},bg=1337;function Mg(i){bg=i|0}function bS(i){return i=i^bg|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var _n=(i,e)=>bS(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function Ci(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return rt(_n(t,e),_n(t+1,e),s)}var gh=(i,e=0)=>Ci(i,e)*.55+Ci(i*2.03,e+7)*.3+Ci(i*4.1,e+13)*.15;function Et(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var mh=new ue,be=i=>(mh.set(i),[mh.r,mh.g,mh.b]),Z0=(i,e,t)=>[rt(i[0],e[0],t),rt(i[1],e[1],t),rt(i[2],e[2],t)],kn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Pi=["city","sakura","coast","country","mountain","snow"],bl={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:.25,base:1.05,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Ii=1500,zo=260,ls=0,Sl=2,MS=-2.2,Ml=0;function wg(i){Ml=Math.max(0,Pi.indexOf(i))}function cr(i){let e=Math.floor(i/Ii),t=i-e*Ii,n=_l($t((t-(Ii-zo))/zo,0,1)),s=Pi.length;return{a:Pi[((e+Ml)%s+s)%s],b:Pi[((e+Ml+1)%s+s)%s],t:n}}function Dt(i){let e=cr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var pn=i=>{let e=cr(i);return e.t<.5?e.a:e.b};function yh(i,e){let t=Math.floor(i/Ii),n=i-t*Ii,s=_l($t((n-(Ii-zo))/zo,0,1)),r=Pi.length;return(Pi[((t+Ml)%r+r)%r]===e?1-s:0)+(Pi[((t+Ml+1)%r+r)%r]===e?s:0)}function zn(i,e){let t=cr(i);return rt(bl[t.a][e],bl[t.b][e],t.t)}var Fr=650,Ur=375,Ho=i=>i*Fr+Ur;function wl(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Dt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var K0={x:new Map,r:new Map,t:new Map};function $0(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function ur(i){let e=Math.round((i-Ur)/Fr);return $0(K0.x,e,()=>{let t=Ho(e);return wl(t)?{k:e,s:t}:null})}function SS(i){let e=ur(i);return e?1-At(8,45,Math.abs(i-e.s)):0}var Br=1150,Vo=820,Tl=4.6,J0=i=>i*Br+Vo;function j0(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Dt(i+t);if(n.country+n.sakura<.9)return!1}let e=ur(i);return!(e&&Math.abs(e.s-i)<170)}function ki(i){let e=Math.round((i-Vo)/Br);return $0(K0.r,e,()=>{let t=J0(e);return j0(t)?{k:e,s:t}:null})}function wS(i){let e=ki(i);return e?1-At(30,70,Math.abs(i-e.s)):0}function TS(i){let e=-Tl;return i<11?e-1.3:i<16?rt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?rt(e+.7,.35,(i-20)/5.5):.35}var Tg=1050,Eg=525,bn=85,ln=125,ES=24,AS=i=>i*Tg+Eg;function RS(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Dt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function zi(i){let e=Math.round((i-Eg)/Tg);return $0(K0.t,e,()=>{let t=AS(e);return RS(t)?{k:e,s:t}:null})}function CS(i){let e=zi(i);return e?1-At(bn+20,ln+25,Math.abs(i-e.s)):0}var vh=0,_h=(i,e)=>{let t=i/ln;return ES*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var ys=2,xh=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(Ci(e/300,11)-.5)*2+(Ci(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*zn(e,"curv")*(1-Math.max(SS(e),wS(e),CS(e)))}elevRaw(e){return zn(e,"base")+zn(e,"hill")*(gh(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=ur(e);if(n){let o=1-At(8,45,Math.abs(e-n.s));o>0&&(t=rt(t,this.elevRaw(n.s),o))}let s=ki(e);if(s){let o=1-At(30,70,Math.abs(e-s.s));o>0&&(t=rt(t,this.elevRaw(s.s),o))}let r=zi(e);if(r){let o=1-At(bn+10,ln+45,Math.abs(e-r.s));o>0&&(t=rt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*ys<e+ys;){let t=this.X.length-1,n=t*ys,s=this.curv(n+ys/2)*ys,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*ys),this.Z.push(this.Z[t]+Math.cos(r+s/2)*ys),this.H.push(r+s),this.Y.push(this.elev(n+ys))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+ys);let n=e/ys,s=Math.floor(n),r=n-s;t.x=rt(this.X[s],this.X[s+1],r),t.z=rt(this.Z[s],this.Z[s+1],r),t.y=rt(this.Y[s],this.Y[s+1],r),t.h=rt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),l=Math.cos(t.h);return t.fx=o,t.fz=l,t.rx=-l,t.rz=o,t}};function Sg(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+At(45,190,r)*16*(.45+.55*Ci(e/160+(t>0?50:0),3));case"coast":return t>0?r<s+.9?-.06:-.15+At(s+1.5,80,r)*24*(.5+.5*Ci(e/170,5))+At(80,200,r)*30:r<s+1.5?-.06:r<s+1.95?-.04:MS-Math.min(r-(s+2),40)*.13-n;case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*Ci(e/140,61),a=r-(s+1);return a<l?a:Math.min(l+(a-l)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+At(105,230,r)*95*(.6+.4*Ci(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?rt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(Ci(e/40+(t>0?3:0),71)-.5):.55+At(125,210,r)*40*(.45+.55*Ci(e/230+(t>0?11:0),73));case"country":default:return r<s+2?-.08:r<s+2.6?-.08-(r-s-2)*.62:r<135?-.45:-.45+At(140,215,r)*7*(.4+.6*Ci(e/210+(t>0?9:0),7))}}function _s(i,e,t,n){let s=cr(i),r=Sg(s.a,i,e,t,n),o=s.t;e<0&&o>0&&(s.b==="coast"?o=At(.25,.9,o):s.a==="coast"&&(o=At(.1,.75,o)));let l=s.t>0?rt(r,Sg(s.b,i,e,t,n),o):r;vh=0;let a=ki(i);if(a){let M=Math.abs(i-a.s);if(M>=36)return l;let c=M<29?TS(M):rt(.35,l,At(29,36,M));return Math.abs(e)<n+3.2&&(c=Math.min(c,-.08)),c}let u=zi(i);if(!u)return l;let h=i-u.s,p=Math.abs(h);if(p>=2*ln)return l;let m=Math.abs(e),x=_h(h,e),_;return p<bn?_=m<=n+1.46?-.25:Math.max(l,x):_=Math.max(l,Math.min(x,m<n+1?-.06:m-(n+1))),vh=Math.max(0,_-l),_}function Ag(i){let e=ki(i);return e?1-At(27,34,Math.abs(i-e.s)):0}var El=new H,bh=new H,PS=[1,1,1],IS=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],Cg=(()=>{let i=Math.tan(Math.PI/8),e=[[1,-i],[1,i],[i,1],[-i,1],[-1,i],[-1,-i],[-i,-1],[i,-1]],t=[];for(let n=1;n<7;n++)t.push(...e[0],...e[n],...e[n+1]);return t})(),Pg=(()=>{let i=[],e=[];for(let t=0;t<6;t++){let n=Math.PI/3*t-Math.PI/6,s=2/Math.sqrt(3);i.push([Math.cos(n)*s,Math.sin(n)*s])}for(let t=1;t<5;t++)e.push(...i[0],...i[t],...i[t+1]);return e})(),Jt=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1,off:r=!1,idx:o=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.hasOff=r,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.hasIdx=o,this.I=null,this.ni=0,this.icap=0,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.O=null,this.offX=0,this.offY=0,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new et,this.nm=new xt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}if(this.hasOff){let o=new Float32Array(t*2);this.O&&o.set(this.O.subarray(0,n*2)),this.O=o}this.cap=t}growI(e){let t=Math.max(this.icap*2,e,1024),n=new Uint32Array(t);this.I&&n.set(this.I.subarray(0,this.ni)),this.I=n,this.icap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,l,a,u){this.n>=this.cap&&this.grow(this.n+1);let h=this.e,p=this.ne,m=this.n*3,x=this.P,_=this.bb,M=h[0]*e+h[4]*t+h[8]*n+h[12],c=h[1]*e+h[5]*t+h[9]*n+h[13],f=h[2]*e+h[6]*t+h[10]*n+h[14];x[m]=M,x[m+1]=c,x[m+2]=f,M<_[0]&&(_[0]=M),c<_[1]&&(_[1]=c),f<_[2]&&(_[2]=f),M>_[3]&&(_[3]=M),c>_[4]&&(_[4]=c),f>_[5]&&(_[5]=f);let d=p[0]*s+p[3]*r+p[6]*o,g=p[1]*s+p[4]*r+p[7]*o,v=p[2]*s+p[5]*r+p[8]*o,b=127/(Math.sqrt(d*d+g*g+v*v)||1);if(this.N[m]=Math.round(d*b),this.N[m+1]=Math.round(g*b),this.N[m+2]=Math.round(v*b),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=a),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(c)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasOff&&(this.O[this.n*2]=this.offX,this.O[this.n*2+1]=this.offY),this.hasColor){let T=u||PS,w=this.Cl;w[m]=T[0]>=1?255:T[0]<=0?0:T[0]*255+.5,w[m+1]=T[1]>=1?255:T[1]<=0?0:T[1]*255+.5,w[m+2]=T[2]>=1?255:T[2]<=0?0:T[2]*255+.5}this.n++}quad(e,t,n,s,r,o){El.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),bh.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),bh.lengthSq()<1e-12&&bh.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),El.cross(bh).normalize();let l=El.x,a=El.y,u=El.z,h=o?o.u0:0,p=o?o.u1:1,m=o?o.v0:0,x=o?o.v1:1;this.vtx(e[0],e[1],e[2],l,a,u,h,m,r),this.vtx(t[0],t[1],t[2],l,a,u,p,m,r),this.vtx(n[0],n[1],n[2],l,a,u,p,x,r),this.vtx(e[0],e[1],e[2],l,a,u,h,m,r),this.vtx(n[0],n[1],n[2],l,a,u,p,x,r),this.vtx(s[0],s[1],s[2],l,a,u,h,x,r)}box(e,t,n,s,r,o,l,a=null,u=null){let h=a||{},p=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],p.nz||l,h.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],p.pz||l,h.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],p.nx||l,h.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],p.px||l,h.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],p.py||l,h.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],p.ny||l,h.ny)}cyl(e,t,n,s,r,o,l,a,u=!0){let h=(s-r)/o;for(let p=0;p<l;p++){let m=p/l*Math.PI*2,x=(p+1)/l*Math.PI*2,_=Math.cos(m),M=Math.sin(m),c=Math.cos(x),f=Math.sin(x),d=[e+_*s,t,n+M*s],g=[e+c*s,t,n+f*s],v=[e+c*r,t+o,n+f*r],b=[e+_*r,t+o,n+M*r];this.vtx(d[0],d[1],d[2],_,h,M,0,0,a),this.vtx(b[0],b[1],b[2],_,h,M,0,0,a),this.vtx(v[0],v[1],v[2],c,h,f,0,0,a),this.vtx(d[0],d[1],d[2],_,h,M,0,0,a),this.vtx(v[0],v[1],v[2],c,h,f,0,0,a),this.vtx(g[0],g[1],g[2],c,h,f,0,0,a),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,a),this.vtx(v[0],v[1],v[2],0,1,0,0,0,a),this.vtx(b[0],b[1],b[2],0,1,0,0,0,a))}}rod(e,t,n,s,r,o){let l=t[0]-e[0],a=t[1]-e[1],u=t[2]-e[2],h=Math.hypot(l,a,u);l/=h,a/=h,u/=h;let p=0,m=1,x=0;Math.abs(a)>.99&&(p=1,m=0);let _=a*x-u*m,M=u*p-l*x,c=l*m-a*p,f=Math.hypot(_,M,c);_/=f,M/=f,c/=f;let d=M*u-c*a,g=c*l-_*u,v=_*a-M*l;for(let b=0;b<r;b++){let T=b/r*Math.PI*2,w=(b+1)/r*Math.PI*2,y=Math.cos(T),S=Math.sin(T),E=Math.cos(w),R=Math.sin(w),C=_*y+d*S,L=M*y+g*S,A=c*y+v*S,I=_*E+d*R,D=M*E+g*R,F=c*E+v*R,z=[e[0]+C*n,e[1]+L*n,e[2]+A*n],U=[e[0]+I*n,e[1]+D*n,e[2]+F*n],V=[t[0]+I*s,t[1]+D*s,t[2]+F*s],k=[t[0]+C*s,t[1]+L*s,t[2]+A*s];this.vtx(z[0],z[1],z[2],C,L,A,0,0,o),this.vtx(U[0],U[1],U[2],I,D,F,0,0,o),this.vtx(V[0],V[1],V[2],I,D,F,0,0,o),this.vtx(z[0],z[1],z[2],C,L,A,0,0,o),this.vtx(V[0],V[1],V[2],I,D,F,0,0,o),this.vtx(k[0],k[1],k[2],C,L,A,0,0,o)}return h}blob(e,t,n,s,r,o,l=0,a=1){let u=Rg[l%Rg.length],h=u.attributes.position.array,p=u.attributes.normal.array,m=u.userData.disp;for(let x=0;x<h.length;x+=3){let _=1+m[x/3],M=Math.max(0,Math.min(1,p[x+1]*.5+.5)),c=[o[0]+(r[0]-o[0])*M,o[1]+(r[1]-o[1])*M,o[2]+(r[2]-o[2])*M];this.vtx(e+h[x]*s*_,t+h[x+1]*s*_*a,n+h[x+2]*s*_,p[x],p[x+1],p[x+2],0,0,c)}}wire(e,t,n,s,r,o=10){let l=e;this.noShadow=!0;for(let a=1;a<=o;a++){let u=a/o,h=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(l,h,s,s,3,r),l=h}this.noShadow=!1}tube(e,t,n,s,r=null,o=0){let l=e.length,a=this.n,u=n+1,h=0,p=0,m=0,x=o;for(let c=0;c<l;c++){let f=e[c>0?c-1:0],d=e[c<l-1?c+1:l-1],g=d[0]-f[0],v=d[1]-f[1],b=d[2]-f[2],T=Math.hypot(g,v,b)||1;if(g/=T,v/=T,b/=T,c===0){let I=r||(Math.abs(v)<.9?[0,1,0]:[1,0,0]);h=I[0],p=I[1],m=I[2]}else x+=Math.hypot(e[c][0]-e[c-1][0],e[c][1]-e[c-1][1],e[c][2]-e[c-1][2]);let w=h*g+p*v+m*b;h-=w*g,p-=w*v,m-=w*b;let y=Math.hypot(h,p,m);y<1e-4&&(h=Math.abs(g)<.9?0:1,p=Math.abs(g)<.9?1:0,m=0,w=h*g+p*v+m*b,h-=w*g,p-=w*v,m-=w*b,y=Math.hypot(h,p,m)),h/=y,p/=y,m/=y;let S=v*m-b*p,E=b*h-g*m,R=g*p-v*h,C=(t[c<l-1?c+1:l-1]-t[c>0?c-1:0])/(T||1),L=e[c],A=t[c];for(let I=0;I<=n;I++){let D=I/n*Math.PI*2,F=Math.cos(D),z=Math.sin(D),U=h*F+S*z,V=p*F+E*z,k=m*F+R*z;this.vtx(L[0]+U*A,L[1]+V*A,L[2]+k*A,U-C*g,V-C*v,k-C*b,D,x,s)}}let _=(l-1)*n*6;this.ni+_>this.icap&&this.growI(this.ni+_);let M=this.I;for(let c=0;c<l-1;c++)for(let f=0;f<n;f++){let d=a+c*u+f,g=d+1,v=d+u,b=v+1,T=this.ni;M[T]=d,M[T+1]=g,M[T+2]=b,M[T+3]=d,M[T+4]=b,M[T+5]=v,this.ni+=6}return x}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,l,a]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],l,a,s[o])}bill(e,t,n,s,r,o,l,a,u,h,p=IS,m=1){let x=(u.u1-u.u0)*.5,_=(u.v1-u.v0)*.5,M=u.u0+x,c=u.v0+_;for(let f=0;f<p.length;f+=2){let d=p[f],g=p[f+1];this.offX=d*l,this.offY=g*a,this.vtx(e,t,n,s,r,o,M+d*x*m,c+g*_*m,h)}this.offX=this.offY=0}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null,O:this.hasOff&&this.O?this.O.slice(0,e*2):null,I:this.hasIdx&&this.I?this.I.slice(0,this.ni):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,l=e.C,a=e.U,u=this.n,h=this.bb;for(let p=0;p<e.n*3;p+=3){let m=r[p],x=r[p+1],_=r[p+2],M=u*3+p,c=n[0]*m+n[4]*x+n[8]*_+n[12],f=n[1]*m+n[5]*x+n[9]*_+n[13],d=n[2]*m+n[6]*x+n[10]*_+n[14];this.P[M]=c,this.P[M+1]=f,this.P[M+2]=d,this.hasAO&&(this.A[u+p/3]=this.aoByte(f)),c<h[0]&&(h[0]=c),f<h[1]&&(h[1]=f),d<h[2]&&(h[2]=d),c>h[3]&&(h[3]=c),f>h[4]&&(h[4]=f),d>h[5]&&(h[5]=d);let g=o[p],v=o[p+1],b=o[p+2],T=s[0]*g+s[3]*v+s[6]*b,w=s[1]*g+s[4]*v+s[7]*b,y=s[2]*g+s[5]*v+s[8]*b,S=127/(Math.sqrt(T*T+w*w+y*y)||1);this.N[M]=Math.round(T*S),this.N[M+1]=Math.round(w*S),this.N[M+2]=Math.round(y*S)}if(this.hasColor&&(l?this.Cl.set(l,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(a?this.U.set(a,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.hasIdx&&e.I){let p=e.I,m=this.ni;m+p.length>this.icap&&this.growI(m+p.length);for(let x=0;x<p.length;x++)this.I[m+x]=p[x]+u;this.ni+=p.length}if(this.hasOff){let p=Math.hypot(n[0],n[1],n[2]),m=e.O;if(m)for(let x=0;x<e.n*2;x++)this.O[u*2+x]=m[x]*p;else this.O.fill(0,u*2,(u+e.n)*2)}this.n+=e.n}build(){if(!this.n)return null;let e=new yt,t=this.n,n=this.bb;if(e.setAttribute("position",new St(this.P.slice(0,t*3),3)),e.setAttribute("normal",new St(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new St(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new St(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new St(this.Lt.slice(0,t),1,!0)),this.hasOff&&e.setAttribute("aOff",new St(this.O.slice(0,t*2),2)),this.hasColor&&e.setAttribute("color",new St(this.Cl.slice(0,t*3),3,!0)),this.hasIdx&&e.setIndex(new St(t>65535?this.I.slice(0,this.ni):new Uint16Array(this.I.subarray(0,this.ni)),1)),e.boundingBox=new gi(new H(n[0],n[1],n[2]),new H(n[3],n[4],n[5])),this.hasOff){let s=0;for(let r=0;r<t*2;r++){let o=Math.abs(this.O[r]);o>s&&(s=o)}e.boundingBox.expandByScalar(s*Math.SQRT2)}return e.boundingSphere=e.boundingBox.getBoundingSphere(new vi),e}},Rg=[0,1,2,3].map(i=>{let e=new ja(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,l)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});gt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var LS=gt.shadowmap_pars_fragment;function td(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;gt.shadowmap_pars_fragment=LS.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}td(1);function Ug(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";gt.shadowmap_pars_fragment=t+gt.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}gt.lights_fragment_begin=gt.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
	directionalLight = directionalLights[ 0 ];
	getDirectionalLightInfo( directionalLight, directLight );
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	if ( directLight.visible && receiveShadow ) {
		directionalLightShadow = directionalLightShadows[ 0 ];
		float sh = getShadow( directionalShadowMap[ 0 ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ 0 ] );
		#ifdef GRAZE_FADE
		// walls the sun only grazes keep the toon ramp: there the map can't resolve their own depth (acne stripes that crawl as the sun moves)
		sh = mix( 1.0, sh, smoothstep( GRAZE_LO, GRAZE_HI, dot( geometryNormal, directLight.direction ) ) );
		#endif
		#if NUM_DIR_LIGHT_SHADOWS > 1
		// surfaces turning away from the sun keep just the toon ramp: the sharp map would cut their wrapped light
		// into jagged bands (the car shadowing its own back)
		float nl = smoothstep( 0.0, 0.2, dot( geometryNormal, directLight.direction ) );
		if ( nl > 0.0 ) { directionalLightShadow = directionalLightShadows[ 1 ];
			sh = min( sh, mix( 1.0, getShadow( directionalShadowMap[ 1 ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ 1 ] ), nl ) ); }
		#endif
		directLight.color *= sh;
	}
	#endif
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var ti=4200,Re={uSkyHor:{value:new ue(.7,.8,.9)},uSkyZen:{value:new ue(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uSakWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Ie},uSunDir:{value:new H(0,1,0)},uSunCol:{value:new ue(1,1,1)},uTuftV:{value:new pt(.167,.333,.164,.165)},uGhShade:{value:new H(.3,.85,1.7)},uGhTint:{value:new H(1,1,1)},uTpK:{value:0},uTpD:{value:new ue},uTpS:{value:new ue},uTpM:{value:new ue},uTpL:{value:new ue},uTpFL:{value:new ue},uTpFS:{value:new ue},uBkK:{value:0},uBkS:{value:new ue},uBkM:{value:new ue},uBkL:{value:new ue},uBkS2:{value:new ue},uBkM2:{value:new ue},uBkL2:{value:new ue},uBlShade:{value:new H(7.5,3,2.3)},uBlMid:{value:new pt(.6105,.1413,.305,1/.7)},uBlTip:{value:new pt(1-.6105,.807-.1413,.8879-.305,-.3/.7)},uRoadN:{value:new H(1,1,1)},uRoadF:{value:new H(1,1,1)},uTunA:{value:new H(0,-1e4,0)},uTunB:{value:new H(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new H},uCarFwd:{value:new H(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:DS()},uCloudTex:{value:null},uCloudOrg:{value:new Ie},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Ie(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function Bg(i){let e=new is(new Uint8Array(i),i.length,1,ar);return e.minFilter=e.magFilter=Cn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var xi=Bg([16,16,16,70,200,255,255,255]),Al=Bg([28,40,70,130,200,240,255,255]);function DS(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new is(e,256,256,Qn);return s.wrapS=s.wrapT=Ds,s.magFilter=zt,s.minFilter=Nn,s.generateMipmaps=!0,s.colorSpace=oi,s.needsUpdate=!0,s}var Li=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,Mh=1600,Q0=256,NS=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/Mh).toFixed(8)} + 0.5).r * uCloudSh; }`,FS=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,Og=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/Mh).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,kg=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,US=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,BS=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,Sh=new er;Sh.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};Sh.customProgramCacheKey=()=>"propdepth";function zg(){let i=new Yt(Q0,Q0,{format:ar,type:jn,depthBuffer:!1,minFilter:zt,magFilter:zt,generateMipmaps:!1}),e=new ft({uniforms:{uCenter:{value:new Ie},uOrigin:Re.uOrigin,uTime:Re.uTime,uNoiseTex:Re.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${Mh.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new mt(new on(2,2),e),n=new Ns;t.frustumCulled=!1,Re.uCloudTex.value=i.texture,Re.uCloudTex.rt=i;let s=Mh/Q0;return{update(r,o,l,a,u){let h=Math.round((o+a)/s)*s-a,p=Math.round((l+u)/s)*s-u;e.uniforms.uCenter.value.set(h,p),Re.uCloudOrg.value.set(h,p);let m=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(m)}}}function bs(i,e="",t="",n=!0){i.uniforms.uOrigin=Re.uOrigin,i.uniforms.uCloudSh=Re.uCloudSh,i.uniforms.uTime=Re.uTime,i.uniforms.uNoiseTex=Re.uNoiseTex,i.uniforms.uCloudTex=Re.uCloudTex,i.uniforms.uCloudOrg=Re.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=Re[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?Og:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Li}${NS}${US}${e}`).replace("#include <opaque_fragment>",`${n?kg:FS}${t}${BS}
#include <opaque_fragment>`)}var OS=`
// an anti-aliased line of half-width hw (world units) at d = 0, given d's screen-space footprint fw; fades out once it is
// thinner than a pixel
float crackLine(float d, float hw, float fw){ fw = max(fw, 1e-4); return clamp((hw - abs(d)) / fw + 0.5, 0.0, 1.0) * min(1.0, 2.0 * hw / fw); }
#ifdef Z_SAKURA
// fallen cherry petals (\u82B1\u3073\u3089): a scatter of little pink ovals, one chance in each 15 cm cell (dens: that chance), each
// turned its own way. Anti-aliased: once a cell is under ~3 pixels they fade to their average, a faint pink
const vec3 PETAL = vec3(0.96, 0.66, 0.76);
float petalsAt(vec2 p, float dens){
  vec2 q = p * 6.5, id = floor(q), f = fract(q) - 0.5;
  float h = hash12(id), fw = fwidth(q.x) + fwidth(q.y);
  vec2 d = f - (vec2(fract(h * 37.1), fract(h * 91.7)) - 0.5) * 0.5;
  d.x += d.y * (fract(h * 13.3) - 0.5) * 2.4;                       // (a shear turns each petal its own way)
  float pet = (1.0 - smoothstep(0.17 - fw * 0.5, 0.17 + fw * 0.5, length(d * vec2(1.0, 1.7)))) * step(h, dens);
  return mix(pet, dens * 0.05, clamp(fw * 1.5 - 0.5, 0.0, 1.0));
}
#endif
vec3 roadCol(float s, float u, float rw){
  float a = abs(u); vec2 p = vec2(s, u);
  vec3 c = L(vec3(0.58, 0.57, 0.57));
  // the aggregate: a fine mottled grain with pale chips and dark pits, a little longer along the road (it was square
  // 4.5 cm cells of hashed noise, a blocky mosaic up close); mip-filtered, so it fades to its mean with distance
  float ag = vnoise(p * vec2(26.0, 44.0) + 3.1);
  c *= 0.90 + 0.14*fbm2(p*0.45) + 0.12*(ag - 0.5) + 0.16*smoothstep(0.66, 0.9, ag) - 0.08*smoothstep(0.32, 0.1, ag);
  float d1 = (abs(u + 1.6) - 0.75) / 0.22, d2 = (abs(u - 1.6) - 0.75) / 0.22; // (pow() of a negative base is NaN on many mobile GPUs)
  float tr = exp(-d1 * d1) + exp(-d2 * d2);
  c *= 1.0 - 0.08*tr;
  vec2 pc = vec2(s/9.0, (u + rw)/2.3); vec2 pf = fract(pc);
  if (hash12(floor(pc) + 3.7) > 0.88 && pf.x > 0.12 && pf.x < 0.82 && pf.y > 0.1 && pf.y < 0.9) c *= 0.85;
  // sealed cracks (\u30AF\u30E9\u30C3\u30AF\u30B7\u30FC\u30EB): thin tar lines \u2014 short ones across a lane every few metres, the odd long one along a
  // wheel track \u2014 ~3.6 cm wide in world space and anti-aliased, so they thin out with distance (they used to be the 0.5
  // contour of a noise field: round loops, thickest right in front of the camera). Only in some stretches of road; the
  // rest skips the maths (derivatives are taken first, outside the branch).
  float crk = 0.0, fS = fwidth(s), fU = fwidth(u);
  if (vnoise(p * 0.05 + 4.0) > 0.4) {
    float ci = floor(s / 6.0), s0 = (ci + 0.15 + 0.7 * hash12(vec2(ci, 3.1))) * 6.0;
    float uc = (hash12(vec2(ci, 5.3)) * 2.0 - 1.0) * rw * 0.6, hw = rw * (0.25 + 0.55 * hash12(vec2(ci, 7.9)));
    float dT = s - s0 - 0.35 * (vnoiseL(vec2(u * 0.9, ci * 1.3)) - 0.5) - 0.03 * sin(u * 11.0 + ci * 1.7);
    crk += step(0.5, hash12(vec2(ci, 1.7))) * step(abs(u - uc), hw) * crackLine(dT, 0.018, fS + 0.35 * fU);
    float cj = floor(s / 27.0), u0 = (hash12(vec2(cj, 13.1)) * 2.0 - 1.0) * rw * 0.75;
    float sa = (cj + 0.1 + 0.4 * hash12(vec2(cj, 17.7))) * 27.0, sb = sa + 6.0 + 14.0 * hash12(vec2(cj, 19.3));
    float dL = u - u0 - 0.25 * (vnoiseL(vec2(s * 0.15, cj * 1.7)) - 0.5) - 0.025 * sin(s * 1.9 + cj * 2.3);
    crk += step(0.65, hash12(vec2(cj, 11.3))) * step(sa, s) * step(s, sb) * crackLine(dL, 0.018, fU + 0.1 * fS);
  }
  c *= 1.0 - 0.32 * clamp(crk, 0.0, 1.0);
  float city = vZW.x, paint = 0.0, mtn = clamp(1.0 - dot(vZW, vec4(1.0)) - vZS, 0.0, 1.0);
#ifdef Z_CITY
  c *= mix(vec3(1.0), vec3(0.70, 0.68, 0.80), city); // the shopping street's asphalt: darker, a violet grey, as in the city painting
#endif
#if defined(Z_COAST) || defined(Z_COUNTRY)
  // the coast's and the country's asphalt as painted: in the sun a cool blue-grey, darkest near the eye and paler and
  // bluer with distance (uRoadN \u2192 uRoadF over 3\u201322 m; by the time of day under a clear sky, 1 under grey skies). It tints
  // the sunlight on it only (gRoadT, after the lights): its shade keeps the painted navy it had
  float wR = vZW.z + vZW.w;
  if (wR > 0.004) gRoadT = mix(vec3(1.0), mix(uRoadN, uRoadF, smoothstep(3.0, 22.0, distance(vWP, cameraPosition))), wR);
#endif
  paint += step(abs(a - (rw - 0.28)), 0.07);
  paint += (1.0 - step(0.5, mtn)) * step(a, 0.07) * step(fract(s/10.0), 0.55); // (the dashed centre line: in the city too, as in its painting)
  float cs = mod(s, 150.0);
#ifdef Z_CITY
  // (only at the signalised crossings, every 4th opening: chunks.js bigX. The alleys between have no markings)
  if (city > 0.5 && mod(floor((s + 36.0) / 150.0), 4.0) < 0.5) {
    if (cs < 4.0 && a < rw - 0.45) paint += step(0.5, fract(u/0.9 + 0.25));
    if (cs > 147.2 && cs < 147.65 && u < -0.1 && u > -rw + 0.4) paint += 1.0;
    vec2 dm = vec2((cs - 118.0)/3.2, (u + 1.55)/0.62); float dd = abs(dm.x) + abs(dm.y);
    if (dd < 1.0 && dd > 0.82) paint += 1.0;
  }
#endif
  paint = clamp(paint, 0.0, 1.0) * (0.8 + 0.2*vnoise(p*6.0));
  c = mix(c, L(vec3(0.96, 0.96, 0.93)), paint);
#ifdef Z_SAKURA
  c = mix(c, PETAL, petalsAt(p, mix(0.02, 0.3, smoothstep(rw - 0.7, rw - 0.1, a))) * vZW.y); // (gathered along the kerb)
#endif
#ifdef Z_SNOW
  if (vZS > 0.01) {
    vec3 packed = L(vec3(0.84, 0.86, 0.91)) * (0.92 + 0.1 * fbm2(p * 0.6));
    float trk = clamp(exp(-d1 * d1 * 1.4) + exp(-d2 * d2 * 1.4), 0.0, 1.0) * (0.75 + 0.25 * vnoise(p * vec2(0.3, 4.0)));
    c = mix(c, mix(packed, L(vec3(0.42, 0.43, 0.47)) * (0.9 + 0.15 * vnoise(p * 3.0)), trk * 0.85), vZS);
  }
#endif
#ifdef Z_MTN
  if (mtn > 0.01) {
    float yl = step(0.5, mtn) * step(a, 0.075) * (0.85 + 0.15*vnoise(p*6.0));           // \u306F\u307F\u51FA\u3057\u7981\u6B62: solid yellow centre line
    c = mix(c, L(vec3(0.95, 0.68, 0.12)), yl);
    // fallen leaves: little scattered leaf shapes, thickest along the edges
    vec2 q = p * 4.5, id = floor(q), fq = fract(q) - 0.5; float hh = hash12(id + 17.0);
    float ang = hh * 6.2832; fq = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * (fq + (vec2(hash12(id + 3.0), hash12(id + 9.0)) - 0.5) * 0.4);
    float dens = mix(0.08, 0.6, smoothstep(rw - 2.2, rw - 0.3, a)) * mtn;
    float lf = step(1.0 - dens, hash12(id + 41.0)) * (1.0 - smoothstep(0.16, 0.2, length(fq * vec2(1.0, 1.8))));
    vec3 leaf = mix(L(vec3(0.78, 0.2, 0.1)), L(vec3(0.95, 0.62, 0.15)), hh);
    c = mix(c, leaf, lf * 0.92);
  }
#endif
  return c;
}
// seen from a distance a forest is a mass of individual crowns (a Worley pattern: each crown a soft dome, darker in
// the gaps) whose colours cluster into regions \u2014 autumn: cedar, still-green, orange, red, gold; otherwise greens
vec3 forestCanopy(vec2 p, float autumn){
  vec2 q = p / 3.2, iq = floor(q), fq = fract(q);
  float best = 9.0; vec2 bid = vec2(0.0);
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 o = vec2(float(x), float(y)), id = iq + o;
    vec2 pt = o + vec2(hash12(id), hash12(id + 7.7)) * 0.8 + 0.1 - fq;
    float d = dot(pt, pt);
    if (d < best) { best = d; bid = id; }
  }
  float region = fbm2(p * 0.025 + 13.0);
  float pick = clamp(region * 1.25 - 0.12 + (hash12(bid + 3.1) - 0.5) * 0.55, 0.0, 0.999);
  vec3 c = autumn > 0.5
    ? (pick < 0.22 ? L(vec3(0.17, 0.28, 0.19)) : pick < 0.36 ? L(vec3(0.3, 0.42, 0.22)) : pick < 0.58 ? L(vec3(0.82, 0.44, 0.16)) : pick < 0.8 ? L(vec3(0.72, 0.22, 0.12)) : L(vec3(0.84, 0.64, 0.22)))
    : (pick < 0.3 ? L(vec3(0.14, 0.27, 0.17)) : pick < 0.55 ? L(vec3(0.24, 0.4, 0.2)) : pick < 0.8 ? L(vec3(0.36, 0.5, 0.24)) : L(vec3(0.44, 0.52, 0.26)));
  float dome = 1.0 - smoothstep(0.0, 0.62, best);
  vec2 cpt = bid + vec2(hash12(bid), hash12(bid + 7.7)) * 0.8 + 0.1 - q;                 // a soft lit side on every crown
  float lit = 1.0 - smoothstep(0.0, 0.32, dot(cpt - vec2(0.16, 0.18), cpt - vec2(0.16, 0.18)));
  return c * (0.55 + 0.5 * dome + 0.22 * lit) * (0.9 + 0.15 * vnoise(p * 1.7));
}
vec3 mountainGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  vec3 floorC = mix(L(vec3(0.44, 0.34, 0.2)), L(vec3(0.66, 0.4, 0.18)), fbm2(p * 0.07)) * (0.85 + 0.2 * vnoise(p * 1.8));
  floorC = mix(floorC, L(vec3(0.34, 0.42, 0.22)), 0.38 * smoothstep(0.4, 0.7, fbm2(p * 0.03 + 3.0)));
  if (u > 0.0) {
    if (a < rw + 0.5) return L(vec3(0.55, 0.53, 0.5)) * (0.9 + 0.1 * vnoise(p * 3.0));
    if (a < rw + 1.05) return L(vec3(0.66, 0.65, 0.62)) * (0.72 + 0.16 * vnoise(p * 2.0));   // concrete gutter
    // \u6CD5\u9762: a concrete lattice on the steep cut, blending into the wooded slope above it (smoothly, by steepness)
    vec2 g = fract(vec2(s / 2.6, (a - rw - 1.0) * 1.414 / 2.6));
    float beam = max(step(g.x, 0.11), step(g.y, 0.11));
    vec3 cell = mix(L(vec3(0.56, 0.58, 0.3)), L(vec3(0.74, 0.6, 0.3)), vnoise(p * 0.8)) * (0.84 + 0.22 * vnoise(p * 4.0));
    vec3 face = mix(cell, L(vec3(0.76, 0.75, 0.71)) * (0.88 + 0.12 * vnoise(p * 2.0)), beam);
    return mix(face, forestCanopy(p, 1.0), smoothstep(0.76, 0.88, vWN.y));
  }
  if (a < rw + 1.2) return L(vec3(0.5, 0.48, 0.42)) * (0.85 + 0.2 * vnoise(p * 2.0));       // shoulder
  float dw = abs(a - (rw + 75.0 + 14.0 * sin(s / 90.0)));                                    // a stream on the valley floor
  if (dw < 4.0) return mix(L(vec3(0.12, 0.36, 0.4)), uSkyHor, 0.35) * (0.85 + 0.2 * vnoise(vec2(s * 0.3 - uTime, u)));
  if (dw < 9.0) return L(vec3(0.62, 0.6, 0.56)) * (0.78 + 0.26 * hash12(floor(p * 3.0)));   // pale river stones
  if (a < rw + 3.7) return floorC;                                                           // brush right below the rail
  float meadow = smoothstep(rw + 31.0, rw + 36.0, a) * (1.0 - smoothstep(100.0, 112.0, a));  // the valley floor
  return mix(forestCanopy(p, 1.0), mix(floorC, L(vec3(0.42, 0.52, 0.25)) * (0.85 + 0.2 * vnoise(p * 0.9)), 0.55), meadow);
}
// a tunnel's ridge: concrete lattice where it was cut steeply, forest crowns elsewhere
vec3 ridgeCol(float s, float u, float autumn){
  vec2 p = vec2(s, u), g = fract(vec2(s / 2.6, abs(u) * 1.414 / 2.6));
  float beam = max(step(g.x, 0.11), step(g.y, 0.11));
  vec3 cell = mix(L(vec3(0.5, 0.56, 0.3)), L(vec3(0.66, 0.6, 0.32)), vnoise(p * 0.8)) * (0.84 + 0.22 * vnoise(p * 4.0));
  vec3 face = mix(cell, L(vec3(0.76, 0.75, 0.71)) * (0.88 + 0.12 * vnoise(p * 2.0)), beam);
  return mix(face, forestCanopy(p, autumn), smoothstep(0.76, 0.88, vWN.y));
}
// \u96EA\u56FD: soft, slightly blue snow; plowed banks greyer near the road; faint sparkle; fence posts and field edges peeking out
vec3 snowGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  vec3 c = mix(L(vec3(0.88, 0.91, 0.97)), L(vec3(0.97, 0.98, 1.0)), fbm2(p * 0.08)) * (0.96 + 0.06 * vnoise(p * 1.7));
  c = mix(c, L(vec3(0.74, 0.76, 0.8)), 0.4 * (1.0 - smoothstep(rw + 0.2, rw + 1.8, a)));
  c += step(0.986, hash12(floor(p * 9.0))) * 0.22;
  vec2 q = vec2(s / 30.0, (a - rw - 2.6) / 17.0); vec2 fq = fract(q);
  if (a > rw + 2.7 && a < 125.0) c *= 1.0 - 0.06 * max(step(fq.x, 0.02), step(fq.y, 0.03));   // buried paddy ridges
  return c;
}
vec3 sidewalkCol(float s, float u, float rw){
  float d = abs(u) - rw;
  vec2 t = vec2(s, d) / 0.3, f = fract(t), id = floor(t);
  vec3 base = mix(L(vec3(0.90, 0.85, 0.81)), L(vec3(0.82, 0.77, 0.73)), hash12(id));
  vec3 c = base * (1.0 - 0.2*clamp(step(f.x, 0.05) + step(f.y, 0.05), 0.0, 1.0));
  if (d > 0.45 && d < 0.75) { c = L(vec3(0.93, 0.78, 0.2)); vec2 q = fract(vec2(s, d)/0.075) - 0.5; c *= 1.0 - 0.18*(1.0 - smoothstep(0.18, 0.24, length(q))); }
#ifdef Z_SAKURA
  c = mix(c, PETAL, petalsAt(vec2(s, u), 0.09) * vZW.y);
#endif
  return c * (0.92 + 0.12*fbm2(vec2(s, u)*0.8));
}
vec3 cityGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
  return mix(L(vec3(0.64, 0.63, 0.60)), L(vec3(0.55, 0.53, 0.49)), fbm2(p*0.3)) * (0.9 + 0.12*vnoise(p*4.0));
}
// grass that reads as a living field instead of a flat lawn: broad patches from lush to light green, the odd sun-dried
// patch, darker clumps a metre or two across, and blade texture up close (mip-filtered away in the distance) \u2014 five
// noise reads, as many as the old two-tone mix
vec3 grassCol(vec2 p, vec3 lush, vec3 light){
  float broad = 0.6 * vnoise(p * 0.045) + 0.4 * vnoise(p * 0.11 + 3.1);
  vec3 g = mix(lush, light, smoothstep(0.3, 0.75, broad));
  g = mix(g, L(vec3(0.68, 0.66, 0.40)), 0.25 * smoothstep(0.6, 0.85, vnoise(p * 0.02 + 7.3)));
  g *= 0.8 + 0.28 * vnoise(p * vec2(0.5, 0.7) + 1.7);
  return g * (0.9 + 0.18 * vnoise(p * vec2(2.4, 9.0) + 5.9));
}
#ifdef F_PAINT
// \u8349\u539F: the painted meadow (painted.js loadFieldTexture), the country painting's grass seen from above, read once per
// pixel. It runs along the road (s) and across it (u), its strokes 1.75\xD7 longer along the road (from the chase camera
// they stand up more, like the painting's blades). Its coordinates and their screen footprint are taken at the top of
// groundAlbedo, in uniform control flow, so the mip and anisotropic filtering stay right inside the branches. The coast's
// green slope and the cherry avenue's lawns take the same painting in their own paintings' colours
uniform sampler2D uFieldTex; uniform vec2 uFieldK; uniform vec3 uFieldC, uFieldCo, uFieldSa, uFieldM; // 1 / the tile (m) across, along; tints: the country's, the coast's, the avenue's; its average colour
vec2 fUV, fDX, fDY; float fPU;
// the painting at k\xD7 its size (k: a tile's length along the road, 21 m / k, must divide S_WRAP)
vec3 fieldTex(float k){ return textureGrad(uFieldTex, fUV * k, fDX * k, fDY * k).rgb; }
#endif
#ifdef Z_SAKURA
// (only in the variants with the avenue: it needs petalsAt, and nothing else calls it)
vec3 sakuraGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
#ifdef F_PAINT
  // the lawns: the painted meadow's strokes at 1.75\xD7 and at 60% of their contrast (a mown lawn's finer, even grass) in
  // the sakura painting's light, warm green, a little lighter and yellower here and there (one broad noise read)
  vec3 g = mix(uFieldM, fieldTex(1.75), 0.6) * uFieldSa * (1.0 + 0.3 * (vnoise(p * 0.04 + 2.3) - 0.5) * vec3(1.4, 1.0, 0.3));
#else
  // (the painting's lawns are a light, warm green in the sun: (167, 193, 70) against our (117, 172, 47))
  vec3 g = grassCol(p, L(vec3(0.44, 0.64, 0.27)), L(vec3(0.74, 0.84, 0.38)));
#endif
  // a few petals on the lawn, most under the avenue's trees (the painting's lawns are a clean green: they used to be
  // splashed with pink blotches)
  return mix(g, PETAL, petalsAt(p, 0.12 * (1.0 - 0.8 * smoothstep(rw + 5.0, rw + 12.0, abs(u)))));
}
#endif
vec3 coastGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
#ifdef F_PAINT
  if (u > 0.0) {
    // the green slope above the road: the painted meadow in the coast painting's colours, broad patches lighter and
    // yellower or a deeper green (one noise read; the folds' shade comes from the light), and along the road's edge a
    // strip of bare soil, then the verge's long grass in its own shade (its clump cards stand on it: chunks.js)
    float tone = 0.55 * (vnoise(p * 0.035 + 9.1) - 0.5);
    vec3 g = fieldTex(1.25) * uFieldCo * (1.0 + tone * vec3(1.8, 1.0, 0.2));
    g *= mix(0.5, 1.0, smoothstep(rw + 0.35, rw + 2.6, a));
    return mix(L(vec3(0.42, 0.34, 0.24)) * (0.85 + 0.3 * vnoise(p * vec2(1.5, 9.0))), g, smoothstep(rw + 0.12, rw + 0.32, a));
  }
#else
  if (u > 0.0) return grassCol(p, L(vec3(0.31, 0.60, 0.25)), L(vec3(0.52, 0.79, 0.32)));
#endif
  if (a < rw + 1.45) return L(vec3(0.73, 0.72, 0.69)) * (0.9 + 0.1*fbm2(p));
  // the sea wall: its top a warm sand-coloured concrete, as in the reference art; its face grey, dark and wet low down
  if (a < rw + 1.97) return L(vec3(0.86, 0.76, 0.6)) * (0.86 + 0.14*vnoise(p*vec2(0.4, 5.0)));
  if (a < rw + 2.08) return L(vec3(0.70, 0.70, 0.68)) * (0.82 + 0.12*vnoise(p*vec2(0.4, 5.0))) * (0.45 + 0.55 * smoothstep(0.2, 1.4, vWY));
  vec3 sand = mix(L(vec3(0.94, 0.87, 0.71)), L(vec3(0.85, 0.77, 0.62)), fbm2(p*0.2));
  return mix(sand, L(vec3(0.6, 0.55, 0.46)), 0.6*(1.0 - smoothstep(0.0, 0.9, vWY)));
}
vec3 countryGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  // the verge under its bank of tall grass (the clump cards, chunks.js placeBanks): dense grass in its own shade right
  // up to the asphalt, lighter towards the field (it used to be a gravel shoulder and a ditch)
  if (a < rw + 2.3) return mix(L(vec3(0.1, 0.25, 0.08)), L(vec3(0.3, 0.54, 0.18)), smoothstep(rw + 0.9, rw + 2.3, a) * (0.55 + 0.45 * vnoise(vec2(s * 1.4, u * 12.0) + 3.1)));
#ifdef F_PAINT
  if (a < 135.0) {
    // plots 30 \xD7 34 m in their own tones, the lighter ones yellower (the painting's far fields are bands of lime and of
    // deeper green), evened out beside the road (one even meadow there, as in the painting), and broad sunlit patches
    // over it all: a hash and one noise read (the painted meadow itself is evenly lit)
    float pu = a - (rw + 2.1), sd = u > 0.0 ? 31.0 : 0.0;
    vec2 q = vec2(s / 30.0, pu / 34.0), id = floor(q);
    float du = (q.y - id.y - 0.5) * 34.0;
    // (a plot's long sides run along the road and slant on screen: there it blends into the next plot's tone over ~1.5
    // pixels; a hard step stair-stepped)
    float hp = mix(hash12(id + sd), hash12(id + vec2(0.0, sign(du)) + sd), 0.5 - 0.5 * smoothstep(0.0, fPU, 17.0 - abs(du)));
    float tone = 0.55 * (hp - 0.5) * smoothstep(9.0, 30.0, pu) + 0.4 * (vnoise(p * 0.018 + 5.3) - 0.5);
    return fieldTex(1.0) * uFieldC * (1.0 + tone * vec3(1.8, 1.0, 0.2));
  }
#else
  if (a < 135.0) {
    float pu = a - (rw + 2.1);
    vec2 q = vec2(s/30.0, pu/17.0), id = floor(q), f = fract(q);
    float h = hash12(id + (u > 0.0 ? 31.0 : 0.0)), hm = id.y > 1.5 ? h : 0.3 + 0.4 * h; // (the plots beside the road: one even meadow)
    // rows of rice 33 cm apart, hills 16 cm apart along them. Anti-aliased: once a row is narrower than ~2 pixels it
    // fades to its average (the bare smoothstep used to crawl in moir\xE9 bands across the far fields as we drove)
    vec2 cg = vec2(pu / 0.33, s / 0.16), cf = fract(cg) - 0.5;
    float aa = clamp(max(fwidth(cg.x), fwidth(cg.y)) * 1.6 - 0.3, 0.0, 1.0);
    float rows = mix(smoothstep(0.30, 0.48, abs(cf.x)), 0.4, aa);
    // painted blade strokes up close (mip-filtered away in the distance), as in the reference art's meadow
    vec3 field = mix(L(vec3(0.44, 0.66, 0.29)), L(vec3(0.58, 0.77, 0.36)), hm) * (0.88 + 0.14*rows) * (0.8 + 0.42 * vnoise(vec2(s * 2.6, pu * 9.0) + 7.7));
    if (h < 0.28 && id.y > 1.5) { // (none in the first two plots beside the road: the reference art has green fields there)
      // a flooded paddy after planting (\u7530\u690D\u3048\u5F8C): seedlings standing in muddy water. This is the light coming up through
      // the water; MIRROR adds the sky's reflection by the Fresnel law \u2014 only ~20% looking down beside the road, a mirror
      // towards the horizon. (The water used to be painted sky-blue *and* reflect at least 40%: pale ice sheets up close)
      // each seedling hill is a small tuft a few cm across, a little off the grid and now and then missing; along the
      // row they merge into lines at a slant, the way planted rows run off towards the horizon
      vec3 vw = normalize(cameraPosition - vWP); float gz = 1.0 - vw.y; gz *= gz;
      float hc = hash12(floor(cg) + 7.7), tx = abs(cf.x + (hc - 0.5) * 0.12), ty = abs(cf.y + (fract(hc * 31.0) - 0.5) * 0.25);
      float tuft = (1.0 - smoothstep(0.05, 0.11, tx)) * (1.0 - smoothstep(0.18, 0.38, ty)) * step(0.08, fract(hc * 57.0));
      float plant = clamp(mix(tuft, 0.1, aa) * (1.0 + 3.0 * gz), 0.0, 1.0); // at a slant the seedlings hide more water
      vec3 mud = mix(L(vec3(0.47, 0.43, 0.31)), L(vec3(0.55, 0.49, 0.35)), fract(h * 7.3)); // shallow water over the mud
      field = mix(mud, L(vec3(0.50, 0.68, 0.24)) * (0.9 + 0.2 * fract(h * 13.7)), plant);
      gWater = 1.0 - plant;
    }
    else if (h > 0.86 && id.y > 1.5) field = L(vec3(0.36, 0.54, 0.25)) * (0.88 + 0.16*rows);
    float ridge = max(max(step(f.x, 0.025), step(0.975, f.x)), max(step(f.y, 0.04), step(0.96, f.y)));
    gWater *= 1.0 - ridge;
    return mix(field, L(vec3(0.48, 0.64, 0.32)), ridge) * (0.94 + 0.1*fbm2(p*0.03));
  }
#endif
  return mix(L(vec3(0.18, 0.34, 0.19)), L(vec3(0.30, 0.46, 0.24)), fbm2(p*0.04));
}
vec3 trackBed(float ds, float u){
  vec2 p = vec2(ds, u);
  vec3 g = mix(L(vec3(0.50, 0.48, 0.45)), L(vec3(0.68, 0.65, 0.60)), hash12(floor(p * 14.0))) * (0.85 + 0.2 * vnoise(p * 2.0));
  float ad = abs(ds), t = abs(ad - 2.0);
  if (t < 1.25) g = mix(g, L(vec3(0.72, 0.71, 0.68)) * (0.9 + 0.1 * vnoise(p * 8.0)), step(fract(u / 0.62), 0.3));
  if (abs(t - 0.53) < 0.14) g *= 0.8;
  return mix(g, L(vec3(0.42, 0.54, 0.28)) * (0.9 + 0.15 * vnoise(p * 1.3)), 0.75 * smoothstep(4.3, 5.6, ad));
}
vec3 crossingPanel(float ds, float u){
  vec2 p = vec2(ds, u);
  vec3 c = L(vec3(0.34, 0.34, 0.36)) * (0.9 + 0.12 * vnoise(p * 3.0));
  c *= 1.0 - 0.3 * step(fract(u), 0.025);
  float t = abs(abs(ds) - 2.0);
  if ((t > 0.9 && t < 1.25) || abs(ds) > 3.05) c = mix(c, L(vec3(0.6, 0.59, 0.57)), 0.7);
  return c;
}
vec3 sideStreet(float ds, float u){
  vec2 p = vec2(ds, u);
  vec3 c = L(vec3(0.6, 0.59, 0.58)) * (0.9 + 0.14 * fbm2(p * 0.45) + 0.1 * (hash12(floor(p * 22.0)) - 0.5));
  float paint = step(abs(abs(ds) - 2.62), 0.06) * (0.8 + 0.2 * vnoise(p * 6.0));
  return mix(c, L(vec3(0.95, 0.95, 0.92)), paint);
}
vec3 riverBankCol(float s, float u){
  vec2 p = vec2(s, u);
  vec3 g = mix(L(vec3(0.33, 0.58, 0.26)), L(vec3(0.51, 0.73, 0.32)), fbm2(p * 0.12)) * (0.88 + 0.16 * vnoise(p * 2.1));
  float fl = smoothstep(0.78, 0.84, vnoise(p * 4.3));            // little yellow and white wildflowers
  return mix(g, mix(L(vec3(0.98, 0.86, 0.3)), L(vec3(0.97, 0.97, 0.92)), step(0.5, vnoise(p * 1.7))), fl * 0.8);
}
vec3 groundAlbedo(){
  float s = vSU.x, u = vSU.y, rw = vRK.x, kind = vRK.y;
#ifdef F_PAINT
  fUV = vec2(u, s) * uFieldK; fDX = dFdx(fUV); fDY = dFdy(fUV); fPU = max(1.5 * (abs(fDX.x) + abs(fDY.x)) / uFieldK.x, 0.05); // (fPU: ~1.5 pixels across, in m)
#endif
  if (kind > 0.5 && kind < 1.5) return roadCol(s, u, rw);
  if (kind > 1.5 && kind < 2.5) return sidewalkCol(s, u, rw);
  if (kind > 2.5 && kind < 3.5) return L(vec3(0.80, 0.80, 0.78)) * (0.9 + 0.12*fbm2(vec2(s, u)*2.0));
#ifdef K_XING
  if (kind > 4.5 && kind < 5.5) return trackBed(s, u);
  if (kind > 5.5 && kind < 6.5) return crossingPanel(s, u);
#endif
#ifdef Z_CITY
  if (kind > 9.5) return sideStreet(s, u);
#endif
#ifdef K_RIVER
  if (kind > 8.5) return L(vec3(0.78, 0.72, 0.6)) * (0.86 + 0.18 * vnoise(vec2(s, u) * 3.0));   // levee-top path
#endif
  if (kind > 6.5) return L(vec3(0.95, 0.95, 0.92)) * (0.82 + 0.18 * vnoise(vec2(s, u) * 6.0));
  vec3 c = vec3(0.0);
#ifdef Z_CITY
  if (vZW.x > 0.004) c += vZW.x * cityGround(s, u, rw);
#endif
#ifdef Z_SAKURA
  if (vZW.y > 0.004) c += vZW.y * sakuraGround(s, u, rw);
#endif
#ifdef Z_COAST
  if (vZW.z > 0.004) c += vZW.z * coastGround(s, u, rw);
#endif
#ifdef Z_COUNTRY
  if (vZW.w > 0.004) c += vZW.w * countryGround(s, u, rw);
#endif
  float wMtn = clamp(1.0 - dot(vZW, vec4(1.0)) - vZS, 0.0, 1.0);
#ifdef Z_MTN
  if (wMtn > 0.004) c += wMtn * mountainGround(s, u, rw);
#endif
#ifdef Z_SNOW
  if (vZS > 0.004) { // snow arrives in patches (a linear blend would turn red leaves pink)
    float n = fbm2(vec2(s, u) * 0.09 + 31.0), cover = smoothstep(n - 0.07, n + 0.07, vZS * 1.25 - 0.12);
    c = mix(c / max(1.0 - vZS, 0.001), snowGround(s, u, rw), vZS > 0.996 ? 1.0 : cover);
  }
#endif
  float rbw = max(vRV, 0.0), rdg = max(-vRV, 0.0);               // + river bank, \u2212 a tunnel's ridge
  gWater *= vZW.w * (1.0 - rbw) * (1.0 - rdg);
#ifdef K_RIVER
  c = mix(c, riverBankCol(s, u), rbw);
#endif
#ifdef K_RIDGE
  c = mix(c, ridgeCol(s, u, wMtn), rdg);
#endif
  return c * (0.92 + 0.16*fbm2(vec2(s, u)*0.015));
}
`,kS=`
#if defined(Z_COUNTRY) && !defined(F_PAINT)
if (gWater > 0.01) {
  vec3 V = normalize(vWP - cameraPosition);
  vec3 R = reflect(V, vec3(0.0, 1.0, 0.0));
  vec2 rip = vec2(vnoise(vWP.xz * 0.9 + uTime * 0.7), vnoise(vWP.zx * 0.9 - uTime * 0.6)) - 0.5;
  R = normalize(R + vec3(rip.x, 0.0, rip.y) * 0.05);
  float hgt = clamp(R.y, 0.0, 1.0);
  vec3 sky = mix(uSkyHor, uSkyZen, pow(hgt, 0.55));
  float cl = smoothstep(0.5, 0.78, fbm2(R.xz / (R.y + 0.12) * 1.1 + 7.0));
  sky = mix(sky, mix(uSkyHor, vec3(1.0), 0.55) * (1.0 - 0.6 * uNight), cl * 0.55);
  sky += uSunCol * pow(max(dot(R, uSunDir), 0.0), 260.0) * 3.0 * (1.0 - uNight);
  float fi = 1.0 - clamp(-V.y, 0.0, 1.0), fi2 = fi * fi, fr = 0.02 + 0.98 * fi2 * fi2 * fi; // Fresnel (Schlick, water)
  outgoingLight = mix(outgoingLight, sky, clamp(gWater * fr, 0.0, 0.95));
}
#endif`,zS=`
float isRoad = step(0.5, vRK.y) * step(vRK.y, 1.5);
#ifdef Z_SAKURA
float wetS = uSakWet * vZW.y * isRoad; // (only the road: the rest of the avenue skips all this when it isn't raining)
#else
const float wetS = 0.0;
#endif
if (uWet > 0.01 || wetS > 0.01) {
  float kind = vRK.y;
  float hard = ((kind > 0.5 && kind < 7.5) || kind > 9.5) ? 1.0 : 0.0;
  float fr = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 4.0);
  float puddle = 0.0, ring = 0.0;
  if (uWet > 0.01) {
    puddle = smoothstep(0.6, 0.72, fbm2(vSU * vec2(0.22, 0.35) + 3.7)) * isRoad;
    vec2 rc = vSU * 1.6, fp = fract(rc) - 0.5; float ph = fract(uTime * 0.85 + hash12(floor(rc)));
    ring = (1.0 - smoothstep(0.0, 0.045, abs(length(fp) - ph * 0.48))) * (1.0 - ph) * puddle;
  }
  vec3 refl = mix(uSkyHor, uSkyZen, 0.35) * (0.75 - 0.4 * uNight);
  // (the avenue: a darker asphalt and a stronger mirror than rain gives, even looking down at the road near the car)
  float k = max(uWet * hard * clamp(0.05 + fr * 0.55 + puddle * 0.6, 0.0, 0.9), wetS * clamp(0.04 + fr * 0.75, 0.0, 0.9));
  if (uReflOn > 0.5 && k > 0.08) { // the lights and the street mirror in the wet road (skipped where it reflects little):
    vec2 suv = gl_FragCoord.xy / uReflRes;   // sample last frame's light above the horizon, where the reflected ray's scenery
    float my = uHorizon + (uHorizon - suv.y) * uReflK, st = mix(0.03, 0.012, puddle); // sits (uReflK corrects for the camera
    vec3 r = textureLod(uReflTex, vec2(suv.x, my), 0.0).rgb * 0.45 + textureLod(uReflTex, vec2(suv.x, my + st), 0.0).rgb * 0.33 // height), stretched
      + textureLod(uReflTex, vec2(suv.x, my + 2.2 * st), 0.0).rgb * 0.22;                       // into vertical streaks like rough wet asphalt
    // (the avenue's mirror keeps a third of the sky's colour in it: the painting's wet road is a blue-grey with pink in it,
    // not a mirror of the crowns)
    float skyMix = wetS > uWet * hard ? 0.33 : 0.0;
    refl = mix(refl, mix(r, refl, skyMix), smoothstep(1.0, 0.9, my) * smoothstep(0.08, 0.14, k)); // (off the top of the screen: the sky colour as before)
  }
  outgoingLight = mix(outgoingLight * (1.0 - max(0.38 * uWet * hard, 0.3 * wetS)), refl, k) + ring * 0.1 * uWet * (refl + 0.05);
  outgoingLight *= 1.0 - 0.12 * uWet * (1.0 - hard);
}`,Hg={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"},yi={tex:null,uFieldK:{value:new Ie(1/12,1/21)},uFieldC:{value:new H(1,1,1)},uFieldCo:{value:new H(1,1,1)},uFieldSa:{value:new H(1,1,1)},uFieldM:{value:new H(.16,.32,.05)}};function Vg(i){let e={};for(let t of i)e[Hg[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),yi.tex&&(i.includes("country")||i.includes("coast")||i.includes("sakura"))&&(e.F_PAINT=""),e}var Ig=new Map;function Rl(i){let e=[...new Set(i)].sort().join("+"),t=Ig.get(e);return t||(t=Wg(Vg(e.split("+")),e),Ig.set(e,t)),t}function Wg(i=Vg(Object.keys(Hg)),e="all"){let t=new an({color:16777215,gradientMap:xi});t.defines=i;let n=i.F_PAINT!==void 0;return t.onBeforeCompile=s=>{s.uniforms.uSkyHor=Re.uSkyHor,s.uniforms.uSkyZen=Re.uSkyZen,s.uniforms.uWet=Re.uWet,s.uniforms.uSakWet=Re.uSakWet,s.uniforms.uNight=Re.uNight,s.uniforms.uSunDir=Re.uSunDir,s.uniforms.uSunCol=Re.uSunCol;for(let r of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK","uRoadN","uRoadF"])s.uniforms[r]=Re[r];if(n){s.uniforms.uFieldTex={value:yi.tex};for(let r of["uFieldK","uFieldC","uFieldCo","uFieldSa","uFieldM"])s.uniforms[r]=yi[r]}s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),bs(s,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol, uRoadN, uRoadF; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0; vec3 gRoadT = vec3(1.0);
${OS}`,zS+kS,!1),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
#if defined(Z_COAST) || defined(Z_COUNTRY)
reflectedLight.directDiffuse *= gRoadT;
#endif`)},t.customProgramCacheKey=()=>"ground-v21-"+e+(n?"-fp":""),t}function Lg(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),bs(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function Gg(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=Re[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function HS(i){i.uniforms.uLightsOn=Re.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function ed(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function qg(i,e=!1){let t=new an({vertexColors:!0,gradientMap:wh(-.15,.3,0)});return e&&(t.defines={TP_LITE:""}),t.onBeforeCompile=n=>{for(let s of["uTpK","uTpD","uTpS","uTpM","uTpL","uTpFL","uTpFS"])n.uniforms[s]=Re[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD; varying vec2 vTp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD; vTp = uv;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTpK; uniform vec3 uTpD, uTpS, uTpM, uTpL, uTpFL, uTpFS; varying float vAoD; varying vec2 vTp;
${i}`).replace("#include <color_fragment>",`#include <color_fragment>
// painted mottling: broad soft patches and finer strokes
#ifdef TP_LITE
float tpN = vnoise(vWP.xz * 1.7 + vWP.y * 1.2), tpMot = 0.93 + 0.14 * tpN;
#else
float tpN = vnoise(vWP.xz * 1.3 + vWP.y * 0.9) * 0.55 + vnoise(vec2(vWP.x - vWP.z, vWP.y) * 4.1) * 0.45, tpMot = 0.92 + 0.16 * tpN;
#endif
// how high the water reaches up the block: a low swell, surging up as each wave hits it (as the spray bursts), its edge
// ragged; below it white foam (lace: thinning upwards), above it the wet band it leaves (darker and bluer, drying upwards)
float tpP2 = (shorePhase(vTp.y, 4.0) - 0.04) * 2.0, tpPh = fract(tpP2), tpHit = smoothstep(0.0, 0.08, tpPh) * (1.0 - smoothstep(0.12, 0.6, tpPh)) * (1.0 - 0.45 * mod(floor(tpP2), 2.0));
float tpLc = vnoise(vec2(vWP.x + vWP.z, vWP.y * 0.6) * 6.0 + vec2(0.0, uTime * 0.5));
float tpW = 0.08 + 0.06 * sin(uTime * 1.3 + vWP.x * 0.7 + vWP.z * 0.5) + 0.45 * tpHit;
float tpWet = 1.0 - smoothstep(0.35, 0.95, vWP.y - 0.3 * tpN);
float tpFoam = smoothstep(-0.06, 0.06, tpW - vWP.y + 0.35 * (tpLc - 0.5) - 0.25 * max(vWP.y - 0.05, 0.0));
diffuseColor.rgb *= tpMot * mix(vec3(1.0), vec3(0.6, 0.66, 0.76), tpWet);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93), tpFoam);`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ // the creases where the legs meet in soft shade, a little darker towards the water (vAoD: 255 at 0.7 m under it \u2026 0 from
  // 1.85 m over it); not the foam
  float tpAO = mix(0.55, 1.0, smoothstep(0.24, 0.6, vTp.x)) * mix(0.8, 1.0, smoothstep(0.0, 1.0, (1.0 - vAoD) * 2.55));
  tpAO = mix(tpAO, 1.0, tpFoam * 0.7);
  vec3 tpDD = reflectedLight.directDiffuse * mix(1.0, tpAO, 0.5), tpID = reflectedLight.indirectDiffuse * tpAO;
  #if NUM_DIR_LIGHTS > 0
  if (uTpK > 0.001) {
    vec3 tpW3 = vec3(0.2126, 0.7152, 0.0722);
    float lf = clamp(dot(reflectedLight.directDiffuse, tpW3) / max(dot(directionalLights[0].color * BRDF_Lambert(diffuseColor.rgb), tpW3), 1e-6), 0.0, 1.0);
    vec3 pc = (lf < 0.5 ? mix(uTpS, uTpM, lf * 2.0) : mix(uTpM, uTpL, lf * 2.0 - 1.0)) * tpMot;
    pc = mix(uTpD, pc, tpAO * (1.0 - 0.55 * tpWet));
    pc = mix(pc, mix(uTpFS, uTpFL, lf), tpFoam);
    tpDD = mix(tpDD, pc, uTpK); tpID *= 1.0 - uTpK;
  }
  #endif
  reflectedLight.directDiffuse = tpDD; reflectedLight.indirectDiffuse = tpID; }`),bs(n)},t.customProgramCacheKey=()=>e?"tetra-v1-lite":"tetra-v1",t}var VS="#7a6556",WS="#6a5444",Dg=i=>{let e=new ue(i);return`vec3(${e.r.toFixed(4)}, ${e.g.toFixed(4)}, ${e.b.toFixed(4)})`};function Xg(i=!1){let e=new an({vertexColors:!0,gradientMap:wh(-.35,.42,0)});return i&&(e.defines={BK_LITE:""}),e.onBeforeCompile=t=>{for(let n of["uBkK","uBkS","uBkM","uBkL","uBkS2","uBkM2","uBkL2"])t.uniforms[n]=Re[n];ed(t),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vBk;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBk = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uBkK; uniform vec3 uBkS, uBkM, uBkL, uBkS2, uBkM2, uBkL2; varying vec2 vBk;`).replace("#include <color_fragment>",`
// the bark: furrows wandering up it (9 round any tube), a soft mottling, fading to their average once under a pixel or two
float bkW = vnoise(vec2(vBk.y * 0.9, 7.0 + 5.0 * vColor.r)), bkPh = vBk.x * 9.0 + bkW * 5.0 + sin(vBk.x * 2.0) * 1.5;
float bkFw = fwidth(bkPh), bkFur = (0.5 + 0.5 * sin(bkPh)) * (1.0 - smoothstep(0.6, 1.6, bkFw));
float bkMot = vnoise(vec2(cos(vBk.x), sin(vBk.x)) * 2.2 + vec2(vBk.y * 1.6, -vBk.y * 0.9));
float bk = 0.88 + 0.24 * bkMot - 0.3 * smoothstep(0.55, 0.95, bkFur);
#ifndef BK_LITE
{ // lenticels (\u76AE\u76EE): a few short horizontal marks, lighter (7 cells round, 11 cm apart up the trunk)
  vec2 lq = vec2(vBk.x * 1.1141, vBk.y * 9.0), li = floor(lq), lf = fract(lq) - 0.5;
  float on = step(0.66, hash12(li + 17.0 * vColor.r)) * (1.0 - smoothstep(0.05, 0.11, abs(lf.y))) * (1.0 - smoothstep(0.22, 0.4, abs(lf.x)));
  bk = mix(bk, 1.3, on * 0.55 * (1.0 - smoothstep(0.2, 0.5, fwidth(lq.y)))); }
#endif
diffuseColor.rgb = mix(${Dg(VS)}, ${Dg(WS)}, vColor.r) * vColor.g * bk;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
#if NUM_DIR_LIGHTS > 0
if (uBkK > 0.001) { // a bright day: the painting's tones by how much sun reaches here (the soft ramp and the shadows)
  vec3 bkW3 = vec3(0.2126, 0.7152, 0.0722);
  float lf = clamp(dot(reflectedLight.directDiffuse, bkW3) / max(dot(directionalLights[0].color * BRDF_Lambert(diffuseColor.rgb), bkW3), 1e-6), 0.0, 1.0);
  // in a crown's shadow a painter still paints the trunk's body and a softer lit edge: the shadow takes at most 28% of the
  // light the ramp gives (the ramp without the shadow: the gradient map read again)
  lf = max(lf, 0.72 * texture2D(gradientMap, vec2(dot(normal, directionalLights[0].direction) * 0.5 + 0.5, 0.0)).r);
  vec3 pc = mix(mix(uBkS, uBkS2, vColor.r), mix(uBkM, uBkM2, vColor.r), smoothstep(0.0, 0.35, lf));
  pc = mix(pc, mix(uBkL, uBkL2, vColor.r), smoothstep(0.55, 0.92, lf)) * bk * vColor.g;
  reflectedLight.directDiffuse = mix(reflectedLight.directDiffuse, pc, uBkK); reflectedLight.indirectDiffuse *= 1.0 - uBkK;
}
#endif`),bs(t)},e.customProgramCacheKey=()=>i?"bark-v1-lite":"bark-v1",e}function nd(i){return i.onBeforeCompile=e=>bs(e),i.customProgramCacheKey=()=>"cs",i}var GS="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",qS=(i,e,t="")=>`
{ float gm = ${i.toFixed(3)};
  #ifdef USE_COLOR_ALPHA
  gm *= vColor.a;
  #endif
  vec3 nV = normalize(normal), vV = normalize(vViewPosition);
  vec3 Rw = reflect(-vV, nV) * mat3(viewMatrix); // the reflected ray in world space
  vec3 env = mix(uSkyHor * vec3(0.30, 0.32, 0.30), mix(uSkyHor, uSkyZen, smoothstep(0.0, 0.7, Rw.y)), smoothstep(-0.03, 0.03, Rw.y)) * (1.0 - 0.75 * uNight);
  float fr = ${e.toFixed(3)} + ${(1-e).toFixed(3)} * pow(1.0 - clamp(dot(nV, vV), 0.0, 1.0), 5.0);
  outgoingLight = mix(outgoingLight, env, clamp(fr * gm, 0.0, 1.0));
  float lit = clamp(dot(reflectedLight.directDiffuse, vec3(0.3, 0.59, 0.11)) * 3.0, 0.0, 1.0);
  vec3 H = normalize(normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz) + vV);
  outgoingLight += uSunCol * pow(max(dot(nV, H), 0.0), 90.0) * 1.6 * gm * lit;
  ${t}
}`;function id(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=Re[o];s&&Object.assign(r.uniforms,s.uniforms),bs(r,GS+(s?s.pars:""),qS(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}var hr=48;function Yg(i,e){let t=new an({color:16777215,gradientMap:Al}),n=!!yi.tex;return t.onBeforeCompile=s=>{Object.assign(s.uniforms,e,i);for(let r of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])s.uniforms[r]=Re[r];n&&(s.uniforms.uFieldC=yi.uFieldC,s.uniforms.uFieldM=yi.uFieldM),s.vertexShader=s.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${Og}
uniform vec4 uG[${hr}], uGM[${hr/4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;${n?`
uniform vec3 uFieldC, uFieldM;`:""}
varying vec3 vBladeCol;
float gHash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 gL(vec3 c){ return pow(c, vec3(2.2)); }`).replace("#include <beginnormal_vertex>",`
// which blade: rows \xD7 left columns, then rows \xD7 right columns of the sub-ring's grid (uRing: first row, rows, cell (m),
// coarse; uRingC: columns left, right, the band's width in m). The coarse rings' blades are the even cells of the fine
// grid, so blades keep their place as they pass from one ring to the next
int gid = gl_InstanceID, nL = int(uRing.y) * int(uRingC.x);
float side = gid < nL ? -1.0 : 1.0; int cols = gid < nL ? int(uRingC.x) : int(uRingC.y); gid = gid < nL ? gid : gid - nL;
int row = gid / cols;
float coarse = uRing.w, cf = uRing.z / (1.0 + coarse);
vec2 cell = vec2(uRing.x + float(row), float(gid - row * cols)) * (1.0 + coarse);
vec2 hc = cell + vec2(0.0, side > 0.0 ? 7919.0 : 0.0);
float h1 = gHash(hc), h2 = gHash(hc + 17.31), h5 = gHash(hc + 63.7);
float gs = (cell.x + h1) * cf, pu = (cell.y + h2) * cf, gd = gs - uGP.w;     // along the road; out from the field's edge
// LOD: the fine rings keep every blade up to L1 (uRingD.x), all but the even cells fading out over the last 6 m; the
// coarse rings carry the even ones from L1 and thin them out gradually by L2. Only where the road samples say there is
// meadow, as densely as they say
bool even = mod(cell.x, 2.0) < 0.5 && mod(cell.y, 2.0) < 0.5;
float keep = coarse > 0.5 ? step(uRingD.x, gd) * (1.0 - smoothstep(uRingD.x + 2.0, uRingD.y, gd))
                          : step(gd, uRingD.x) * (even ? 1.0 : 1.0 - smoothstep(uRingD.x - 6.0, uRingD.x, gd));
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${hr-2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
float gm = uGM[i0 >> 2][i0 & 3], gsd = mod(gm, 4.0);                         // its sides, and its density (gm / 4: 0\u202615)
float gu = side * (uGP.z + 2.6 + pu);
keep *= (side > 0.0 ? step(1.5, gsd) : mod(gsd, 2.0)) * floor(gm * 0.25) * (1.0 / 15.0)
      * step(0.0, gd) * step(abs(gu - uGQ.x), uGQ.y * gd + uGQ.z) // (and within the view)
      * (1.0 - smoothstep(0.55 * uRingC.z, uRingC.z, pu)); // (thinning out towards the band's outer edge: no line where it ends)
bool gCull = h5 >= keep;
vec3 gPos = vec3(0.0); vec3 objectNormal = vec3(0.0, 1.0, 0.0); vBladeCol = vec3(0.0); vCloud = 0.0;
if (!gCull) {
  float h3 = gHash(hc + 41.17), h4 = gHash(hc + 7.93), h6 = gHash(hc + 23.9);
  vec4 A = uG[i0], B = uG[i0 + 1];
  vec3 P = mix(A.xyz, B.xyz, ft); float hd = mix(A.w, B.w, ft);
  vec3 base = vec3(P.x - cos(hd) * gu, P.y - 0.45, P.z + sin(hd) * gu);
  // patches of taller and shorter grass (and the field's broad light and dark), from one noise read; the coarse rings'
  // blades are wider, so the fewer blades still read
  float nz = vnoiseV(vec2(gs, gu) * 0.35 + 3.0);
  float H = (0.24 + 0.28 * h3) * (0.7 + 0.6 * nz) * smoothstep(0.0, 0.15, keep - h5);    // (blades grow in at a ring's edge)
  float W = (0.03 + 0.02 * h4) * (1.0 + 0.7 * coarse) * (1.0 + gd * 0.012);
  vec3 toC = cameraPosition - base; vec3 wdir = normalize(vec3(toC.z, 0.0, -toC.x)); // the blade's face to the camera (front-facing: wound anticlockwise as seen)
  float a = h6 * 6.2832; vec2 lean = vec2(cos(a), sin(a)) * (0.15 + 0.3 * h1) * H;
  float sw = sin(uTime * 1.7 + base.x * 0.23 + base.z * 0.19) * 0.6 + sin(uTime * 2.9 + base.x * 0.61 - base.z * 0.37) * 0.4;
  lean += vec2(0.7, 0.5) * sw * 0.21 * uWind * H;
  float t = position.y, sd = position.x;
  gPos = base + vec3(lean.x * t * t, H * t * (1.0 - 0.12 * t * t), lean.y * t * t) + wdir * (W * (1.0 - t) * sd * 0.5);
  objectNormal = normalize(vec3(wdir.x * sd * 0.35, 1.0, wdir.z * sd * 0.35)); // shaded like the ground, a little rounded
  // one blade in ~70 of the fine rings is a wildflower instead (\u767D\u8A70\u8349 white clover, \u91D1\u9CF3\u82B1 yellow buttercups): its five
  // vertices laid out as a small round head facing the camera, held just above the grass
  bool flower = coarse < 0.5 && h4 < 0.015;
  if (flower) {
    float r = 0.035 + 0.015 * h3, fx = sd * (t > 0.75 ? 0.0 : t > 0.25 ? 1.0 : 0.55), fy = t > 0.75 ? 1.0 : t > 0.25 ? 0.15 : -0.85;
    gPos = base + vec3(lean.x, H * 0.95, lean.y) + wdir * (fx * r) + vec3(0.0, fy * r, 0.0);
    objectNormal = vec3(0.0, 1.0, 0.0);
  }
  // the colour of the field plot it stands in (countryGround: the same hash of the same plot), dark at the root, sunlit
  // at the tip${n?`. The painted meadow: its painting's average colour in the plot's tone and the broad sunlit
  // patches, a little warmer and darker than the ground (the painting's blades are a deeper, yellower green than its fields)
  float gsw = mod(gs, ${ti.toFixed(1)}), gpu = abs(gu) - uGP.z - 2.1;
  float tone = 0.55 * (gHash(floor(vec2(gsw / 30.0, gpu / 34.0)) + (side > 0.0 ? 31.0 : 0.0)) - 0.5) * smoothstep(9.0, 30.0, gpu)
             + 0.4 * (vnoiseV(vec2(gsw, gu) * 0.018 + 5.3) - 0.5);
  vec3 plot = uFieldM * uFieldC * vec3(0.86, 0.87, 0.48) * (1.0 + tone * vec3(1.8, 1.0, 0.2)) * (0.9 + 0.2 * nz);`:`
  vec2 pid = floor(vec2(mod(gs, ${ti.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);`}
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`).replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`#include <project_vertex>
if (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
varying vec3 vBladeCol; varying float vCloud;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${kg}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>n?"grass-v5-fp":"grass-v5",t}function Ng(i,e,t=!1){i.uniforms.uPMap={value:e.map},t||(i.uniforms.uPEm={value:e.emissive}),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uPMap;${t?"":" uniform sampler2D uPEm;"}`).replace("#include <map_fragment>",`
bool pgP = vMapUv.x > 1.5;
vec4 sampledDiffuseColor;
if (pgP) sampledDiffuseColor = texture2D(uPMap, vMapUv - vec2(2.0, 0.0));
else sampledDiffuseColor = texture2D(map, vMapUv);
diffuseColor *= sampledDiffuseColor;`),t||(i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`
vec4 emissiveColor;
if (pgP) emissiveColor = texture2D(uPEm, vEmissiveMapUv - vec2(2.0, 0.0));
else emissiveColor = texture2D(emissiveMap, vEmissiveMapUv);
totalEmissiveRadiance *= emissiveColor.rgb;`))}function Zg(i,e,t){let n={};n.ground=Wg(),n.color=Lg(new an({vertexColors:!0,gradientMap:xi}),1.6,.1,"color-v3",ed),n.atlas=new an({vertexColors:!0,gradientMap:xi,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),n.atlas.onBeforeCompile=a=>{ed(a),HS(a),bs(a),Ng(a,t)},n.atlas.customProgramCacheKey=()=>"atlas-v7",n.atlasDepth=new er,n.atlasDepth.onBeforeCompile=a=>Ng(a,t,!0),n.atlasDepth.customProgramCacheKey=()=>"atlasdepth-v2",n.ptex=t,n.foliage=Lg(new an({vertexColors:!0,gradientMap:Al}),2.6,.24,"foliage-v2"),n.lamp=new yn({color:15789798}),n.sig=new yn({color:new ue(.15,1.7,1.1)}),n.sodium=new yn({color:new ue(5,2.3,.65)}),n.decal=new an({vertexColors:!0,gradientMap:xi,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),n.decal.onBeforeCompile=a=>bs(a),n.decal.customProgramCacheKey=()=>"decal-v1",e&&(n.leaf=new an({map:e,vertexColors:!0,gradientMap:Al,alphaTest:.42,side:Mn}),n.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",gt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),bs(a),Gg(a),a.uniforms.uTuftV=Re.uTuftV,a.uniforms.uWind=Re.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},n.leaf.customProgramCacheKey=()=>"leaf-v5"),n.wire=new yn({color:2303020});let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.4,"rgba(255,255,255,0.45)"),o.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=o,r.fillRect(0,0,128,128);let l=new si(s);return n.pool=new yn({map:l,color:16762746,transparent:!0,opacity:0,blending:rs,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),n.glowTex=l,n}function wh(i,e,t){let s=new Uint8Array(64);for(let o=0;o<64;o++){let l=(o+.5)/64*2-1,a=Math.min(1,Math.max(0,(l-i)/(e-i))),u=a*a*(3-2*a);s[o]=Math.round(255*(t+(1-t)*u))}let r=new is(s,64,1,ar);return r.minFilter=r.magFilter=zt,r.generateMipmaps=!1,r.needsUpdate=!0,r}var XS=wh(-.05,.5,.05),YS=wh(-.5,.45,.12);function Fg(i,e){i.uniforms.uTime=Re.uTime,i.uniforms.uWind=Re.uWind,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aOff; uniform float uWind;`+(e?" uniform float uTime;":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += bbR * (aOff.x + sw) + bbU * aOff.y; }`),e&&(i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`))}var ZS=(i,e,t)=>{let n=new ue().setRGB(i/255,e/255,t/255,Wt);return`vec3(${n.r.toFixed(4)}, ${n.g.toFixed(4)}, ${n.b.toFixed(4)})`},KS=`float blT = clamp(gTx.b * uBlMid.w + uBlTip.w, 0.0, 1.0); // (smoothstep(edge, 1, b): the edge's maths done on the CPU)
diffuseColor.rgb *= mix(${ZS(62,38,34)}, uBlMid.rgb + uBlTip.rgb * (blT * blT * (3.0 - 2.0 * blT)), smoothstep(0.1, 0.26, gTx.b));`;function sd(i,{blossom:e=!1}={}){let t=new an({map:i,vertexColors:!0,color:e?16777215:new ue().setRGB(.68,.85,.46,Wt),gradientMap:e?YS:XS,alphaTest:.5,side:gs});t.shadowSide=Mn,t.onBeforeCompile=s=>{bs(s),Gg(s),Fg(s,!1),s.uniforms.uGhShade=e?Re.uBlShade:Re.uGhShade,e?(s.uniforms.uBlMid=Re.uBlMid,s.uniforms.uBlTip=Re.uBlTip):s.uniforms.uGhTint=Re.uGhTint,s.vertexShader=s.vertexShader.replace("#include <shadowmap_vertex>",`#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGhShade;`+(e?" uniform vec4 uBlMid, uBlTip;":" uniform vec3 uGhTint;")).replace("#include <map_fragment>",`
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${e?KS:"diffuseColor.rgb *= gTx.b * uGhTint;"}
diffuseColor.a *= gTx.a;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, 0.72));`).replace("#include <aomap_fragment>",`#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`)},t.customProgramCacheKey=()=>e?"gblossom-v2":"gleaf-v1";let n=new er;return n.onBeforeCompile=s=>Fg(s,!0),n.customProgramCacheKey=()=>"gleaf-depth-v1",{mat:t,depth:n}}var $S=be("#f2c230"),Kg=be("#26272c");function Th(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=zn(s,"rw"),l=n*(o+.8),a=Dt(s),u=a.city+a.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function $g(){let i=new dn,e=nd(new an({vertexColors:!0,gradientMap:xi})),t=new yn({color:new ue(6,.45,.3)}),n=new yn({color:new ue(.22,.03,.03)}),s=[0,1].map(()=>{let r=new dn,o=new dn;r.add(o),o.position.set(-.42,1.02,-.02);let l=new Jt,a=3.6;for(let p=0,m=0;m<a;p++,m+=.45)l.box(-Math.min(m+.45,a),-.065,-.065,-m,.065,.065,p%2?Kg:$S);l.box(0,-.09,-.07,.38,.09,.07,Kg);let u=new mt(l.build(),e);u.castShadow=!0,o.add(u);let h=[-.28,.28].map(p=>{let m=new mt(new Ar(.13,18),n);return m.position.set(p,2.75,-.1),m.rotation.y=Math.PI,r.add(m),m});return i.add(r),{root:r,pivot:o,arm:u,lamps:h,L:a}});return i.visible=!1,{group:i,update(r,o,l,a,u){i.visible=!!r,r&&r.forEach((h,p)=>{let m=s[p];m.root.position.set(h.x-o.x,h.y,h.z-o.z),m.root.rotation.y=h.yaw,m.arm.scale.x=(h.rw+.25)/m.L,m.pivot.rotation.z=-l*(Math.PI/2-.06);let x=Math.floor(u*2.5)%2;m.lamps[0].material=a&&x===0?t:n,m.lamps[1].material=a&&x===1?t:n})}}}function JS(){let t=()=>{let f=document.createElement("canvas");return f.width=1024,f.height=512,f},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let a=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,a);for(let f=0;f<1024;f+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(f,0,2,a);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,a-14,1024,14);let u=[.1,.36,.62,.88].map(f=>f*1024),h=(f,d,g,v)=>{let b=r.createLinearGradient(f,d,f+g*.3,d+v);b.addColorStop(0,"#5d7fae"),b.addColorStop(.6,"#9db7d6"),b.addColorStop(1,"#2f3f55"),r.fillStyle=b,r.fillRect(f,d,g,v),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(f+g*.2,d),r.lineTo(f+g*.38,d),r.lineTo(f+g*.1,d+v),r.lineTo(f-g*.08,d+v),r.fill(),o.fillStyle="#ffeccc",o.fillRect(f,d,g,v)};for(let f=0;f<u.length-1;f++){let d=u[f]+40,g=u[f+1]-40,v=3,b=(g-d)/v;for(let T=0;T<v;T++)r.fillStyle="#6b737c",r.fillRect(d+T*b+2,34,b-4,58),h(d+T*b+6,38,b-12,50)}for(let f of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(f+2,34,28,58),h(f+5,38,22,50);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,22,60,a-36),r.fillStyle="#7b828a",r.fillRect(f-1,22,2,a-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(f-30,22,60,a-36),h(f-24,34,20,46),h(f+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let p=0,m=176,x=256,_=256;r.fillStyle="#d3d7dc",r.fillRect(p,m,x,_),r.fillStyle="#20262e",r.fillRect(p+14,m+44,x-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(p+40,m+44),r.lineTo(p+80,m+44),r.lineTo(p+40,m+140),r.lineTo(p+14,m+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(p+x/2-4,m+44,8,96),r.fillStyle="#111",r.fillRect(p+50,m+12,x-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,m+26),r.fillStyle="#1f9a50",r.fillRect(p,m+150,x,18),r.fillStyle="#e8892b",r.fillRect(p,m+170,x,7);for(let f of[p+40,p+x-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(f,m+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(f+(f<p+x/2?28:-28),m+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(p,m+_-30,x,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",p+x/2,m+220),o.fillStyle="#111",o.fillRect(p,m,x,_),o.fillStyle="#ff9a2a",o.font=`800 18px ${l}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,m+26);for(let f of[p+40,p+x-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(f,m+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let M=f=>{let d=new si(f);return d.colorSpace=Wt,d.anisotropy=4,d},c=(f,d,g,v)=>({u0:f/1024,u1:(f+g)/1024,v0:1-(d+v)/512,v1:1-d/512});return{map:M(n),em:M(s),side:c(0,0,1024,a),sideR:{...c(0,0,1024,a),flip:!0},front:c(p,m,x,_),plain:c(342,202,28,28)}}function Jg(){let i=JS(),e=nd(new an({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:xi})),t=new Jt({uv:!0}),n=[1,1,1],s=be("#9aa1a9"),r=be("#3b4047"),o=be("#2a2d33"),l=19.5,a=.6,u=3,h=1.45,p=.95,m=4,x=4,_=.3,M=be("#33363b"),c={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},f=(y,S,E,R,C,L,A,I=!1)=>t.box(y,S,E,R,C,L,A,c,I?{noBottom:!0}:null),d=(y,S,E,R,C,L)=>{let I=E-C/2,D=E+C/2;for(let F=0;F<12;F++){let z=F/12*Math.PI*2,U=(F+1)/12*Math.PI*2,V=y+Math.cos(z)*R,k=S+Math.sin(z)*R,X=y+Math.cos(U)*R,j=S+Math.sin(U)*R;t.quad([V,k,I],[X,j,I],[X,j,D],[V,k,D],L,i.plain),t.quad([y,S,D],[V,k,D],[X,j,D],[X,j,D],L,i.plain),t.quad([y,S,I],[X,j,I],[V,k,I],[V,k,I],L,i.plain)}},g=u*l+(u-1)*a;for(let y=0;y<u;y++){let S=-g/2+l/2+y*(l+a),E=S-l/2,R=S+l/2;t.quad([E,p,h],[R,p,h],[R,m,h],[E,m,h],n,i.side),t.quad([R,p,-h],[E,p,-h],[E,m,-h],[R,m,-h],n,i.side);let C=y===u-1,L=y===0;t.quad([R,p,h],[R,p,-h],[R,m,-h],[R,m,h],C?n:be("#c9ced4"),C?i.front:i.plain),t.quad([E,p,-h],[E,p,h],[E,m,h],[E,m,-h],L?n:be("#c9ced4"),L?i.front:i.plain);for(let A=0;A<x;A++)for(let I of[1,-1]){let D=A/x*Math.PI/2,F=(A+1)/x*Math.PI/2,z=I*h*Math.cos(D),U=m+_*Math.sin(D),V=I*h*Math.cos(F),k=m+_*Math.sin(F);t.quad([E,U,z],[R,U,z],[R,k,V],[E,k,V],s,i.plain);for(let X of[E,R]){let j=[[X,m,0],[X,U,z],[X,k,V]];t.quad(j[0],j[1],j[2],j[2],s,i.plain),t.quad(j[0],j[2],j[1],j[1],s,i.plain)}}for(let A of[1,-1])f(E,m-.02,A*h-.04,R,m+.05,A*h+.04,r);for(let A of[S-5.5,S+5.5])f(A-1.3,m+.2,-.8,A+1.3,m+.62,.8,be("#c4c9cf"),!0);f(E+.3,.82,-h+.1,R-.3,p,h-.1,o);for(let[A,I,D,F]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])f(S+A-I/2,.82-D,-1.15+F*.2,S+A+I/2,.82,1.15+F*.2,F>0?o:r);for(let A of[S-7,S+7]){for(let I of[1,-1]){f(A-1.35,.32,I*.86,A+1.35,.56,I*1.02,r);for(let D of[-1.05,1.05])f(A+D-.17,.3,I*.84,A+D+.17,.58,I*1.06,o)}f(A-.35,.5,-1,A+.35,.8,1,r);for(let I of[-1.05,1.05])for(let D of[1,-1])d(A+I,.43,D*.6,.43,.13,M)}if(y<u-1&&f(R,p+.15,-.95,R+a,m-.1,.95,be("#3a3e44")),y===0){let A=S-3,I=m+.7;t.box(A-.6,m+.26,-.6,A+.6,m+.42,.6,r),t.rod([A-.5,m+.42,0],[A,I+.9,0],.03,.03,4,r),t.rod([A+.5,m+.42,0],[A,I+.9,0],.03,.03,4,r),t.rod([A,I+.9,-.85],[A,I+.9,.85],.03,.03,4,r)}}let v=new mt(t.build(),e);v.castShadow=!0,v.receiveShadow=!0,v.frustumCulled=!1;let b=new dn;b.add(v),b.visible=!1;let T={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:g},w={};return{group:b,st:T,start(y,S,E=16){Object.assign(T,{active:!0,sx:y,dir:S,speed:E,u:-S*290,ds:S>0?-2:2,cleared:!1}),b.visible=!0},update(y,S,E,R,C){if(!T.active)return;T.u+=T.dir*T.speed*y;let L=T.u-T.dir*T.length/2;if(!T.cleared&&(T.dir>0?L>C+1:L<-C-1)&&(T.cleared=!0),Math.abs(T.u)>330){T.active=!1,b.visible=!1;return}S.at(T.sx,w),b.position.set(w.x+w.fx*T.ds+w.rx*T.u-E.x,w.y+.34,w.z+w.fz*T.ds+w.rz*T.u-E.z),b.rotation.y=w.h+(T.dir>0?Math.PI:0),e.emissiveIntensity=.3+R*1.1}}}var jS='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',Bs=2048,QS=4096;function Ah(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var t1=Ah(256,256);{let i=t1.getContext("2d"),e=i.createImageData(256,256),t=Et(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var Rh=class{constructor(e=QS,t=0,n={}){let s=this.H=e;this.cA=Ah(Bs,s),this.cE=Ah(Bs/2,s/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,Bs/2,s/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,Bs,s),this.x=0,this.y=0,this.rowH=0,this.cells=n,this.uOff=t,this.grain=this.a.createPattern(t1,"repeat")}add(e,t,n,s){if(this.x+t+4>Bs&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>this.H)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let h of[this.a,this.e])h.save(),h===this.e&&h.scale(.5,.5),h.translate(o.x,o.y),h.beginPath(),h.rect(0,0,t,n),h.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5,a=this.H,u=this.uOff;return this.cells[e]={u0:u+(o.x+l)/Bs,u1:u+(o.x+t-l)/Bs,v0:1-(o.y+n-l)/a,v1:1-(o.y+l)/a,w:t,h:n,px:o.x,py:o.y},this.cells[e]}paintCell(e,t,n,s,r,o,l){let a=this.cells[e];!a||a.u0>1.5!=this.uOff>1.5||(this.a.drawImage(t,n,s,r,o,a.px,a.py,a.w,a.h),l>=0?this.e.drawImage(t,n,l,r,o,a.px/2,a.py/2,a.w/2,a.h/2):(this.e.fillStyle="#000",this.e.fillRect(a.px/2,a.py/2,a.w/2,a.h/2)))}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new si(n);return s.colorSpace=Wt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Nn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function cn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Tn(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,a])=>o.addColorStop(l,a)),i.fillStyle=o,i.fillRect(e,t,n,s)}function Wo(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Tn(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}cn(i,e,t,n,.13)}function Fs(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function Y(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function Go(i,e,t,n,s,r,o="#d9dde2",l="rgba(40,45,60,0.55)"){Y(i,e-r,t-r,n+2*r,s+2*r,o),Y(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function Us(i,e,t,n,s,r,o=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),a=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";l.addColorStop(0,a),l.addColorStop(.55,u),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let h=e+n*r();i.beginPath(),i.moveTo(h,t),i.lineTo(h+n*.18,t),i.lineTo(h-n*.25,t+s),i.lineTo(h-n*.43,t+s),i.fill(),i.restore()}function jg(i,e,t,n,s,r="#efe6d2"){Y(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Tn(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function Ch(i,e,t=800){i.font=`${t} ${e}px ${jS}`}function Pt(i,e,t,n,s,r,o,l=800,a=null){Ch(i,r,l);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,Ch(i,u,l);i.textAlign="center",i.textBaseline="middle",a&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=a,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function kr(i,e,t,n,s,r,o,l=800,a=null){let u=[...e],h=u.length,p=Math.min(r*1.05,(s-n)/h),m=Math.min(r,p*.95);Ch(i,m,l),i.textAlign="center",i.textBaseline="middle",u.forEach((x,_)=>{let M=n+(s-n-p*h)/2+p*(_+.5);a&&(i.lineWidth=Math.max(2,m*.12),i.strokeStyle=a,i.strokeText(x,t,M)),i.fillStyle=o,i.fillText(x,t,M)})}function Or(i,e,t,n,s,r,o,l=!0){if(Y(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Tn(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let a=e+n*.2*o();a<e+n-4;a+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-a),h=s*(.12+o()*.25);i.fillRect(a,t+s-h,u,h)}}i.restore()}function e3(i,e,t,n,s,r,o){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",Y(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,Y(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Tn(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var Qg=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Eh=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],e1=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],t3=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function n1(){let i=new Rh,e=Et(2024),t=240,n=(c,f,d,g,v,b,T=!1)=>{Wo(c,i,d,g,"#ece8e0",0);let w=Et(b*31+(v?7:0)+5);if(b===0){let y=d*.14,S=g*.22,E=d*.72,R=g*.5;Go(c,y,S,E,R,5),Us(c,y,S,E/2,R,w),Us(c,y+E/2,S,E/2,R,w);let C=w()<.8?E*(.18+w()*.25):0;C&&jg(c,y+2,S+2,C,R-4,w()<.5?"#efe6d2":"#d9e4ea"),Y(c,y+E/2-2,S,4,R,"#cfd4da"),Y(c,y-8,S+R+5,E+16,6,"#d8d8d4"),Fs(c,y-4,S+R+11,8,60),Fs(c,y+E-4,S+R+11,8,60),v&&(Or(f,y,S,E,R,T?"#e6eeff":"#ffcf8f",w),C&&Y(f,y+2,S+2,C,R-4,T?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),Y(f,y+E/2-2,S,4,R,"#000"))}else if(b===1){for(let y of[.12,.56]){let S=d*y,E=g*.28,R=d*.3,C=g*.36;Go(c,S,E,R,C,4),Us(c,S,E,R,C,w,1),c.fillStyle="rgba(255,255,255,0.35)",c.fillRect(S,E,R,C*.45),Fs(c,S,E+C+6,R,40,.1),v&&w()<.8&&Or(f,S,E,R,C,w()<.5?"#ffd9a0":"#e8f0ff",w)}c.fillStyle="#c9c9c4",c.beginPath(),c.arc(d*.88,g*.2,9,0,7),c.fill()}else if(b===2){let y=d*.1,S=g*.12,E=d*.8,R=g*.84;Go(c,y,S,E,R,4),Us(c,y,S,E/2,R,w),Us(c,y+E/2,S,E/2,R,w);let C=E*(.2+w()*.3);jg(c,y+2,S+2,C,R-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),Y(c,y+E/2-2,S,4,R,"#cfd4da"),v&&(Or(f,y,S,E,R,T?"#e6eeff":"#ffcb85",w),Y(f,y+2,S+2,C,R-4,T?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),Y(f,y+E/2-2,S,4,R,"#000"))}else if(b===3){Wo(c,i,d,g,"#dfe3e6",0);let y=g*.25,S=g*.55;Us(c,0,y,d,S,w,1);for(let E=0;E<=d;E+=d/4)Y(c,E-2,y,4,S,"#8d98a6");if(Y(c,0,y-4,d,4,"#8d98a6"),Y(c,0,y+S,d,5,"#7d8796"),v)for(let E=0;E<4;E++)w()<.7&&Or(f,E*d/4+2,y,d/4-4,S,w()<.6?"#f2f6ff":"#ffe2b0",w)}else if(b===4){c.fillStyle="#6b4a35",c.fillRect(0,0,d,g);for(let C=0;C<g;C+=12)Y(c,0,C,d,2,"rgba(30,18,10,0.35)"),Y(c,0,C+2,d,1,"rgba(255,220,180,0.06)");cn(c,i,d,g,.15);let y=d*.18,S=g*.25,E=d*.64,R=g*.45;Y(c,y-6,S-6,E+12,R+12,"#4a3020"),Y(c,y,S,E,R,"#efe4c8"),c.fillStyle="#5a3a26";for(let C=1;C<6;C++)c.fillRect(y+C*E/6-1.5,S,3,R);for(let C=1;C<3;C++)c.fillRect(y,S+C*R/3-1.5,E,3);if(v){Or(f,y,S,E,R,"#ffc070",w,!1),f.fillStyle="#000";for(let C=1;C<6;C++)f.fillRect(y+C*E/6-1.5,S,3,R);for(let C=1;C<3;C++)f.fillRect(y,S+C*R/3-1.5,E,3)}}else if(b===5){Y(c,d*.08,0,7,g,"#bdbdb6"),Y(c,d*.08+5,0,2,g,"rgba(0,0,0,0.2)");let y=d*.55,S=g*.3,E=d*.22,R=g*.24;Go(c,y,S,E,R,3),Y(c,y,S,E,R,"#d6dfe4"),c.fillStyle="rgba(255,255,255,0.4)",c.fillRect(y,S,E,R/2),Fs(c,y,S+R+4,E,50,.12),Y(c,d*.22,g*.55,26,34,"#cfcfca"),Y(c,d*.22+4,g*.55+6,18,12,"#9aa2a8"),v&&Or(f,y,S,E,R,T?"#eef2ff":"#fff0d8",w,!1)}else if(b===6){let y=d*.4,S=g*.35,E=d*.2,R=g*.28;Go(c,y,S,E,R,3),Us(c,y,S,E,R,w,1),Fs(c,y,S+R+4,E,70,.14),v&&Or(f,y,S,E,R,T?"#e8efff":"#ffd9a0",w)}};for(let c=0;c<7;c++)i.add("win"+c,t,t,(f,d,g,v)=>n(f,d,g,v,!1,c)),i.add("win"+c+"L",t,t,(f,d,g,v)=>n(f,d,g,v,!0,c));for(let c of[0,2,5,6])i.add("win"+c+"C",t,t,(f,d,g,v)=>n(f,d,g,v,!0,c,!0));i.add("plain",t,t,(c,f,d,g)=>{Wo(c,i,d,g,"#ece8e0"),Fs(c,d*.3,0,12,g*.6,.06)}),i.add("concrete",t,t,(c,f,d,g)=>{Wo(c,i,d,g,"#d9d7d0",60);for(let v=0;v<6;v++)Fs(c,v*41%d,0,10,g*.5,.07)});let s=288,r=(c,f,d,g,v,b,T)=>{let w=(S,E,R,C,L,A=0)=>{c.fillStyle=L,c.beginPath(),c.ellipse(S,E,R,C,A,0,7),c.fill()},y=S=>S[Math.floor(b()*S.length)];if(T==="bakery"){Y(c,f,d,g,v,"#d9b98a"),Tn(c,f,d,g,v,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let S=d+v*.28;S<d+v*.72;S+=v*.2){Y(c,f,S,g,5,"#8a5a32");for(let E=f+8;E<f+g-8;E+=15+b()*10){let R=7+b()*6,C=4+b()*3;w(E,S-C,R,C,y(["#c98a3e","#b4732e","#d9a256","#a4632a"])),w(E-R*.2,S-C*1.4,R*.5,C*.35,"rgba(255,230,180,0.5)")}}Y(c,f+4,d+v*.8,g-8,v*.2,"#efe7d8"),Y(c,f+4,d+v*.8,g-8,3,"#9a9a96");for(let S=f+14;S<f+g-10;S+=18)w(S,d+v*.9,6,4,y(["#e8b35a","#c06a3a","#f2d29a"]));Y(c,f+g-64,d+10,52,22,"#7a3e1e"),Pt(c,"\u713C\u304D\u305F\u3066",f+g-38,d+21,46,14,"#fff3dc",800)}else if(T==="books"){Y(c,f,d,g,v,"#6f5a46");for(let S=d+6;S<d+v*.72;S+=v*.17){Y(c,f,S+v*.15,g,4,"#4a3828");for(let E=f+3;E<f+g-4;){let R=3+b()*4,C=v*(.1+b()*.045);Y(c,E,S+v*.15-C,R,C,y(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),E+=R+(b()<.1?4:.6)}}Y(c,f+4,d+v*.76,g-8,v*.24,"#8a7560");for(let S=f+8;S<f+g-22;S+=24)Y(c,S,d+v*.79,20,28,y(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),Y(c,S+3,d+v*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(T==="florist"){Y(c,f,d,g,v,"#e8e2d2"),Tn(c,f,d,g,v,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let S=0;S<7;S++){let E=f+8+b()*(g-16),R=v*(.15+b()*.25);for(let C=0;C<R;C+=3.5)w(E+Math.sin(C*.25+S)*4+(b()-.5)*6,d+4+C,3.4,1.8,y(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),b()*3)}for(let S=0;S<3;S++){let E=d+v*(.5+S*.17);Y(c,f,E+14,g,4,"#9a8a76");for(let R=f+10+S*6;R<f+g-8;R+=19){let C=y(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let L=0;L<6;L++){c.strokeStyle="#4a7a3a",c.lineWidth=1.2,c.beginPath();let A=R+(b()-.5)*14;c.moveTo(R,E+10),c.lineTo(A,E-6-b()*8),c.stroke(),w(A,E-8-b()*8,3.2,3,C)}Y(c,R-6,E+4,12,11,y(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(T==="clothes"){Y(c,f,d,g,v,"#efece6"),Tn(c,f,d,g,v,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),Y(c,f+6,d+v*.18,g-60,3,"#7a7a7a");for(let E=f+12;E<f+g-66;E+=13+b()*5){c.fillStyle=y(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let R=d+v*.18+3,C=v*(.3+b()*.2);c.beginPath(),c.moveTo(E-5,R),c.lineTo(E+5,R),c.lineTo(E+8,R+C),c.lineTo(E-8,R+C),c.closePath(),c.fill()}let S=f+g-32;w(S,d+v*.16,7,8,"#d8cfc4"),c.fillStyle=y(["#c84a5a","#4a6a9a","#e8d8b8"]),c.beginPath(),c.moveTo(S-14,d+v*.24),c.lineTo(S+14,d+v*.24),c.lineTo(S+18,d+v*.66),c.lineTo(S-18,d+v*.66),c.closePath(),c.fill(),Y(c,S-2,d+v*.66,4,v*.24,"#8a8a8a"),Y(c,f+8,d+v*.74,g*.55,6,"#8a6a4a");for(let E=f+12;E<f+g*.55;E+=14)Y(c,E,d+v*.74-8,11,8,y(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let S=7;for(let E=d+v*.25;E<d+v;E+=v*.22)for(let R=f+3;R<f+g-6;R+=6+b()*8)e(),S=Math.imul(S,31)+Math.floor(b()*997+b()*61+b()*7)|0;T==="cafe"?h(c,f,d,g,v,Et(S>>>0)):u(c,f,d,g,v,Et(S>>>0),T==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],l=(c,f,d,g,v,b,T="bbccutp")=>{let w=f+1+b()*3;for(;w<d-4;){let y=T[Math.floor(b()*T.length)],S=o[Math.floor(b()*o.length)],E=b()<.5?"#f8f6f0":o[Math.floor(b()*o.length)],R={b:8+b()*6,c:6+b()*2,u:9+b()*2,t:5+b()*2,p:12+b()*5}[y],C=Math.min(v,{b:14+b()*12,c:11+b()*3,u:10+b()*3,t:18+b()*9,p:14+b()*8}[y]),L=2+Math.floor(b()*5);for(let A=0;A<L&&w+R<d-1;A++,w+=R+.6){let I=g-C;y==="t"?(Y(c,w,I+C*.3,R,C*.7,S),Y(c,w+R*.3,I+C*.1,R*.4,C*.22,S),Y(c,w+R*.28,I,R*.44,C*.11,E==="#f8f6f0"?"#e8e8e4":"#d83a2a"),Y(c,w,I+C*.5,R,C*.22,E)):y==="c"?(Y(c,w,I,R,C,S),Y(c,w,I,R,1.5,"#d8dce0"),Y(c,w,I+C*.35,R,C*.3,E)):y==="u"?(c.fillStyle=S,c.beginPath(),c.moveTo(w,I+2),c.lineTo(w+R,I+2),c.lineTo(w+R-1.2,g),c.lineTo(w+1.2,g),c.fill(),Y(c,w-.4,I,R+.8,2.2,"#f2efe6"),Y(c,w+1,I+C*.45,R-2,C*.25,E)):y==="p"?(c.fillStyle=S,c.beginPath(),c.moveTo(w,g),c.lineTo(w,I+3),c.quadraticCurveTo(w+R/2,I-1.5,w+R,I+3),c.lineTo(w+R,g),c.fill(),Y(c,w+1.5,I+C*.35,R-3,C*.35,E),Y(c,w,I+2,R,1,"rgba(0,0,0,0.18)")):(Y(c,w,I,R,C,S),Y(c,w+1.5,I+C*.3,R-3,C*.4,E)),Y(c,w,I+1,1,C-1,"rgba(255,255,255,0.28)"),Y(c,w+R-1.3,I+1,1.3,C-1,"rgba(0,0,0,0.22)")}w+=1.5+b()*3}},a=(c,f,d,g,v)=>{Tn(c,f,g+4,d,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),Y(c,f,g,d,4,"#d3d6da"),Y(c,f,g+3.2,d,.8,"rgba(40,40,50,0.45)");for(let b=f+4+v()*10;b<f+d-6;b+=14+v()*16)Y(c,b,g+.6,5,2.6,v()<.25?"#f2d23a":v()<.2?"#e84a3a":"#ffffff")},u=(c,f,d,g,v,b,T)=>{Y(c,f,d,g,v,T?"#f3f1ea":"#ece5d8"),Y(c,f,d,g,v*.13,T?"#f6f6f2":"#efebe2");for(let E of[.035,.085])Y(c,f,d+v*E,g,2.4,"#ffffff"),Tn(c,f,d+v*E+2.4,g,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Tn(c,f,d+v*.13,g,v*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let E=0,R=f+18+b()*30;E<2&&R<f+g-40;E++,R+=90+b()*40)Y(c,R+13,d+v*.13,1,6,"#888"),Y(c,R,d+v*.13+6,28,9,o[Math.floor(b()*9)]),Y(c,R+4,d+v*.13+9.5,20,2,"rgba(255,255,255,0.8)");let y=d+v*.25,S=v*.165;Y(c,f,y-4,g,4,"#c9ccd0");for(let E=0;E<4;E++){let R=y+S*(E+1);Tn(c,f,R-S,g,S,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),l(c,f,f+g,R,S-6,b),a(c,f,g,R,b)}Y(c,f,y+S*4+4,g,d+v-y-S*4-4,"#5c6068"),Y(c,f,y+S*4+4,g,1.5,"#8a8e96");for(let E=f+2+b()*20;E<f+g;E+=70+b()*12)Y(c,E,y-4,3,S*4+8,"#b4b8be"),Y(c,E+2.2,y-4,.8,S*4+8,"rgba(0,0,0,0.3)");if(T){let E=d+v*.7;Y(c,f,E+26,g,d+v-E-26,"#7a7e86"),Y(c,f,E+26,g,2,"#a8acb2");for(let R=f+2;R<f+g-14;R+=15.5){let C=o[Math.floor(b()*o.length)],L=b()*2;Y(c,R,E+L,14,26-L,C),Y(c,R,E+L,14,5,b()<.6?"#ffffff":"#e8343a"),Y(c,R+2,E+L+8,10,10,b()<.5?"#f2c8a8":o[Math.floor(b()*o.length)]),Y(c,R+13,E+L,1,26-L,"rgba(0,0,0,0.25)")}}},h=(c,f,d,g,v,b)=>{Y(c,f,d,g,v,"#b88a5e"),Tn(c,f,d,g,v,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let w=f;w<f+g;w+=9)Y(c,w,d+v*.55,1,v*.45,"rgba(60,35,20,0.25)");let T=d+v*.3;for(let w=0;w<2;w++){let y=T+w*22;Y(c,f+8,y,g*.55,3,"#6a4428"),l(c,f+10,f+g*.55+6,y,14,b,"ctu")}Y(c,f+g*.64,d+v*.22,g*.28,v*.26,"#2e3a32"),Y(c,f+g*.64,d+v*.22,g*.28,2,"#6a4428");for(let w=0;w<5;w++)Y(c,f+g*.67,d+v*(.27+w*.04),g*(.12+b()*.1),1.6,"rgba(240,240,230,0.75)");Y(c,f+4,d+v*.56,g-8,6,"#5a3820"),Y(c,f+4,d+v*.56+6,g-8,v*.08,"#7a5232"),Y(c,f+g*.3,d+v*.47,18,v*.09,"#c8ccd0"),Y(c,f+g*.3+3,d+v*.47+3,12,5,"#3a3a40");for(let w=f+30+b()*20;w<f+g-20;w+=70+b()*20)Y(c,w,d,1,v*.14,"#3a2a1e"),c.fillStyle="#2f3a36",c.beginPath(),c.moveTo(w-9,d+v*.2),c.quadraticCurveTo(w+.5,d+v*.12,w+10,d+v*.2),c.fill(),c.fillStyle="rgba(255,214,150,0.9)",c.beginPath(),c.ellipse(w+.5,d+v*.2,7,2,0,0,7),c.fill();for(let w=f+26+b()*16;w<f+g-26;w+=78+b()*20){Y(c,w-16,d+v*.74,32,4,"#4a2e1c"),Y(c,w-1.5,d+v*.74+4,3,v*.2,"#2e2420"),Y(c,w-8,d+v*.94,16,2,"#2e2420");for(let y of[-24,24])Y(c,w+y-6,d+v*.8,12,3,"#3a2618"),Y(c,w+y+(y<0?-6:4),d+v*.66,2,v*.17,"#3a2618"),Y(c,w+y-5,d+v*.83,1.6,v*.13,"#3a2618"),Y(c,w+y+3.4,d+v*.83,1.6,v*.13,"#3a2618");c.fillStyle="#f4f0e8",c.beginPath(),c.ellipse(w-6,d+v*.74-1.5,3,1.5,0,0,7),c.fill()}},p=(c,f,d,g,v,b,T="")=>{let w=Et(b);if(Wo(c,i,d,g,"#e6e2da"),v==="glass"||v==="door"||v==="konbini"||v==="cafe"){let S=g*.22,E=d-12,R=g*.78-4;Y(c,6,S,E,R,v==="konbini"?"#f6f4ea":v==="cafe"?"#7a5a40":"#8a7a68"),r(c,6,S,E,R,w,T||v),v==="konbini"&&Y(c,6,S+4,E,5,"#ffffff"),v==="door"&&(Y(c,d/2-30,S+18,60,24,"#fff"),Pt(c,"\u55B6\u696D\u4E2D",d/2,S+30,54,18,"#c82828")),v==="glass"&&!T&&w()<.7&&(Y(c,16,S+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),Pt(c,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,S+44,40,16,"#c02020")),e3(c,f,6,S,E,R,v==="konbini"?"#e4eef8":v==="cafe"?"#f0a868":"#f2d2a6"),c.save(),c.globalAlpha=.35,Us(c,6,S,E,R,w),c.restore(),Y(c,6,S,E,4,"#4a4e57"),Y(f,6,S,E,4,"#000"),v==="door"&&(Y(c,d/2-2,S,4,R,"#4a4e57"),Y(f,d/2-2,S,4,R,"#000"),Y(c,d/2-14,S+R*.45,3,40,"#c0c4c8"),Y(c,d/2+11,S+R*.45,3,40,"#c0c4c8")),v==="cafe"&&(Y(c,d*.62,g-70,46,62,"#2c3a30"),Y(f,d*.62,g-70,46,62,"#000"),Pt(c,"\u30E9\u30F3\u30C1",d*.62+23,g-50,40,13,"#fff",700))}else if(v==="shutter"){let S=g*.2,E=d-12,R=g*.8;Y(c,6,S,E,R,"#b8bcc0");for(let C=S;C<S+R;C+=7)Y(c,6,C,E,2,"rgba(60,64,72,0.35)"),Y(c,6,C+2,E,1,"rgba(255,255,255,0.35)");Y(c,6,S,E,10,"#8f949a"),cn(c,i,d,g,.12),w()<.5&&(Y(c,d/2-40,S+R*.35,80,26,"#fff"),Pt(c,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),d/2,S+R*.35+13,74,16,"#333",700))}else if(v==="noren"){Y(c,0,0,d,g,"#5b3c28");for(let L=0;L<d;L+=10)Y(c,L,g*.2,3,g*.8,"rgba(25,15,8,0.6)");cn(c,i,d,g,.15);let y=d*.12,S=g*.24,E=d*.76,R=g*.34,C=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);Y(c,y,S,E,R,C);for(let L=1;L<3;L++)Y(c,y+E*L/3-1,S+R*.25,2,R*.75,"rgba(255,255,255,0.25)");Pt(c,e.pick(t3),d/2,S+R*.55,E*.9,46,"#f5f0e6",800),Y(c,y,S,E,6,"#3a2a1c"),f.fillStyle="#ffae5c",f.fillRect(y,S+R,E,g-S-R),f.fillStyle="rgba(255,170,90,0.6)",f.fillRect(y,S,E,R),c.fillStyle="#d8352a",c.beginPath(),c.ellipse(d*.9,g*.36,13,19,0,0,7),c.fill(),Pt(c,"\u9152",d*.9,g*.36,16,14,"#fff"),f.fillStyle="#ff6a3a",f.beginPath(),f.ellipse(d*.9,g*.36,13,19,0,0,7),f.fill()}else if(v==="house"){let y=d*.18,S=g*.3,E=d*.34,R=g*.7;Y(c,y-6,S-6,E+12,R+6,"#9a9a96"),Y(c,y,S,E,R,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),Y(c,y+E-14,S+R*.5,4,22,"#d8d0c0"),Y(c,y+6,S+10,E-12,R*.25,"rgba(255,255,255,0.18)"),Y(c,d*.62,g*.48,30,22,"#cfcfca"),Y(c,d*.62+6,g*.48+5,18,4,"#555");let C=d*.6,L=g*.22,A=d*.3,I=g*.2;Go(c,C,L,A,I,3),Us(c,C,L,A,I,w,1);for(let D=0;D<3;D++)c.fillStyle="#7b5a43",c.fillRect(d*.6+D*22,g-26,16,18),c.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),c.beginPath(),c.arc(d*.6+D*22+8,g-32,11,0,7),c.fill();f.fillStyle="#ffd08a",f.beginPath(),f.arc(y+E+14,S+8,6,0,7),f.fill(),w()<.6&&(f.fillStyle="#ffcf8f",f.fillRect(C,L,A,I))}else if(v==="garage"){let S=g*.25,E=d-16,R=g*.75;Y(c,8,S,E,R,"#efefec");for(let C=S;C<S+R;C+=9)Y(c,8,C,E,1.5,"rgba(80,80,90,0.25)");cn(c,i,d,g,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((c,f)=>{i.add("shop_"+c,t,s,(d,g,v,b)=>p(d,g,v,b,c,100+f)),(c==="glass"||c==="noren"||c==="house")&&i.add("shop_"+c+"2",t,s,(d,g,v,b)=>p(d,g,v,b,c,200+f)),c==="glass"&&["bakery","books","florist","clothes"].forEach((d,g)=>i.add("shop_glass"+(g+3),t,s,(v,b,T,w)=>p(v,b,T,w,"glass",300+g,d)))});for(let c=0;c<14;c++)i.add("hs"+c,512,76,(f,d,g,v)=>{let[b,T]=Eh[c%Eh.length],w=Qg[c*7%Qg.length];Y(f,0,0,g,v,b),Y(f,0,0,g,5,"rgba(255,255,255,0.35)"),Y(f,0,v-6,g,6,"rgba(0,0,0,0.18)"),c%3===0&&(Y(f,12,12,v-24,v-24,T),Pt(f,w[0],12+(v-24)/2,v/2,v-30,34,b)),Pt(f,w,g/2+(c%3===0?24:0),v/2+2,g*.7,50,T,900),cn(f,i,g,v,.08),d.fillStyle=b==="#fff"||b==="#f5efe0"?"#d9d6cc":b,d.fillRect(0,0,g,v),d.globalAlpha=.9,Pt(d,w,g/2+(c%3===0?24:0),v/2+2,g*.7,50,T==="#fff"?"#ffffff":T,900),d.globalAlpha=1});for(let[c,f,d]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+c,512,76,(g,v,b,T)=>{Y(g,0,0,b,T,f),Y(g,0,0,b,5,"rgba(255,255,255,0.35)"),Y(g,0,T-6,b,6,"rgba(0,0,0,0.18)"),Pt(g,c,b/2,T/2+2,b*.7,50,d,900),cn(g,i,b,T,.08),v.fillStyle=f,v.fillRect(0,0,b,T),v.globalAlpha=.9,Pt(v,c,b/2,T/2+2,b*.7,50,d,900),v.globalAlpha=1});let m=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],x=(c,f,d,g,v,b)=>{c.beginPath(),c.moveTo(f+b,d),c.arcTo(f+g,d,f+g,d+v,b),c.arcTo(f+g,d+v,f,d+v,b),c.arcTo(f,d+v,f,d,b),c.arcTo(f,d,f+g,d,b),c.closePath()};for(let c=0;c<10;c++)i.add("vs"+c,72,288,(f,d,g,v)=>{let b=e1[c%e1.length],T=m[(c*5+2)%m.length],w=c%10===3||c%10===6||c%10===8,[y,S]=Eh[(c*3+1)%Eh.length],E=w?y==="#fff"||y==="#f5efe0"?"#2b2b33":y:"#fbf7ef",R=w?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][c%4];Y(f,0,0,g,v,"#2a2b30"),x(f,3,3,g-6,v-6,8),f.fillStyle=E,f.fill(),Tn(f,3,3,g-6,v-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),f.save(),x(f,8,8,g-16,v-16,6),f.strokeStyle=T,f.globalAlpha=.55,f.lineWidth=7,f.stroke(),f.globalAlpha=1,f.strokeStyle="#fff6fb",f.lineWidth=2.2,f.stroke(),f.restore(),kr(f,b,g/2,18,v-18,50,R,900),cn(f,i,g,v,.06),Y(d,0,0,g,v,"#000"),x(d,3,3,g-6,v-6,8),d.fillStyle=w?"#3a3a3e":"#4a4844",d.fill(),d.save(),x(d,8,8,g-16,v-16,6),d.strokeStyle=T,d.lineWidth=7,d.stroke(),d.strokeStyle="#ffffff",d.lineWidth=2.5,d.stroke(),d.restore(),kr(d,b,g/2,18,v-18,50,w?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([c,f,d],g)=>i.add("bb"+g,512,240,(v,b,T,w)=>{Y(v,0,0,T,w,"#fbfaf5"),Y(v,0,0,T,w*.62,d),Pt(v,c,T/2,w*.32,T*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Pt(v,f,T/2,w*.8,T*.85,52,"#333",800),cn(v,i,T,w,.08),Y(b,0,0,T,w,"#555"),b.globalAlpha=.85,Y(b,0,0,T,w*.62,d),Pt(b,c,T/2,w*.32,T*.9,96,"#fff",900),b.globalAlpha=1})),i.add("konbini_band",480,72,(c,f,d,g)=>{Y(c,0,0,d,g,"#fbfbf7"),Y(c,0,g*.62,d,g*.14,"#2a9a4a"),Y(c,0,g*.76,d,g*.12,"#f08a24"),Y(c,0,g*.88,d,g*.12,"#2f6fd8"),Pt(c,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,g*.32,d*.8,40,"#1d3d8a",900),f.fillStyle="#f3f6f0",f.fillRect(0,0,d,g),Pt(f,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,g*.32,d*.8,40,"#1d3d8a",900)});for(let c=0;c<3;c++)i.add("vend"+c,128,234,(f,d,g,v)=>{let b=["#d8352a","#2f6fd8","#f4f4f0"][c];Y(f,0,0,g,v,b),Y(f,8,10,g-16,v*.55,"#eef4f8");let T=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let w=0;w<4;w++)for(let y=0;y<6;y++){let S=14+y*17,E=18+w*30;f.fillStyle=T[(w*6+y+c)%T.length],f.fillRect(S,E,11,20),f.fillStyle="rgba(255,255,255,0.5)",f.fillRect(S+2,E+2,3,14),f.fillStyle="#2a2a2a",f.fillRect(S,E+23,11,3)}Y(f,10,v*.62,g-20,22,"#222"),Y(f,g-34,v*.66,14,22,"#bbb"),Y(f,14,v*.82,g-28,22,"#1b1b1b"),Pt(f,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][c],g/2,v*.62+11,g-28,14,"#fff",700),cn(f,i,g,v,.08),d.fillStyle="#f2f8ff",d.fillRect(8,10,g-16,v*.55);for(let w=0;w<4;w++)for(let y=0;y<6;y++)d.fillStyle=T[(w*6+y+c)%T.length],d.fillRect(14+y*17,18+w*30,11,20);d.fillStyle="#9fd0ff",d.fillRect(10,v*.62,g-20,22)});i.add("ac",128,88,(c,f,d,g)=>{Y(c,0,0,d,g,"#e9e9e4"),Tn(c,0,0,d,g,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),c.fillStyle="#9a9c9e",c.beginPath(),c.arc(d*.4,g*.5,g*.36,0,7),c.fill(),c.strokeStyle="#d6d6d2",c.lineWidth=2;for(let v=6;v<g*.36;v+=6)c.beginPath(),c.arc(d*.4,g*.5,v,0,7),c.stroke();for(let v=12;v<g-10;v+=6)Y(c,d*.78,v,d*.16,2,"#b8b8b2")}),i.add("plate",128,64,(c,f,d,g)=>{Y(c,0,0,d,g,"#f2cf3a"),c.strokeStyle="#2f5a2f",c.lineWidth=3,c.strokeRect(3,3,d-6,g-6),Pt(c,"\u54C1\u5DDD 580",d/2,16,d*.6,14,"#2f5a2f",700),Pt(c,"\u3042 12-34",d/2,42,d*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.moveTo(2,2),c.lineTo(d-2,2),c.lineTo(d/2,g-2),c.fill(),c.fillStyle="#d8231c",c.beginPath(),c.moveTo(10,7),c.lineTo(d-10,7),c.lineTo(d/2,g-12),c.fill(),Pt(c,"\u6B62\u307E\u308C",d/2,34,d*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.fillStyle="#1e5bb8",c.beginPath(),c.arc(d/2,g/2,d/2-6,0,7),c.fill(),c.fillStyle="#fff",c.beginPath(),c.moveTo(d/2,22),c.lineTo(d/2+22,50),c.lineTo(d/2+8,50),c.lineTo(d/2+8,88),c.lineTo(d/2-8,88),c.lineTo(d/2-8,50),c.lineTo(d/2-22,50),c.fill()}),i.add("sign_speed",112,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=12,c.beginPath(),c.arc(d/2,g/2,d/2-9,0,7),c.stroke(),Pt(c,"30",d/2,g/2+2,d*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(c,f,d,g)=>{Y(c,0,0,d,g,"#1d4f9a"),c.strokeStyle="#fff",c.lineWidth=2,c.strokeRect(3,3,d-6,g-6),kr(c,"\u672C\u753A\u4E8C\u4E01\u76EE",d/2,10,g-10,24,"#fff",700)});for(let c=0;c<4;c++)i.add("poster"+c,64,90,(f,d,g,v)=>{let b=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][c];Y(f,0,0,g,v,b),Y(f,4,4,g-8,v*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][c]),Pt(f,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][c],g/2,v*.25,g-12,18,"#fff",900);for(let T=0;T<4;T++)Y(f,8,v*.58+T*8,g-16-T%2*14,3,"rgba(60,60,60,0.5)")});for(let c=0;c<3;c++)i.add("bal"+c,t,88,(f,d,g,v)=>{let b=["#e9e3d6","#dfe6ea","#efe2dc"][c];if(Wo(f,i,g,v,b),c===1)for(let T=10;T<g-6;T+=g/6)Y(f,T,10,g/6-8,v-20,"rgba(220,235,245,0.9)"),f.fillStyle="rgba(255,255,255,0.45)",f.fillRect(T,10,g/6-8,(v-20)*.4);else{Y(f,0,0,g,7,"rgba(255,255,255,0.4)");for(let T=g/3;T<g;T+=g/3)Y(f,T-1,0,2,v,"rgba(0,0,0,0.08)")}Y(f,0,v-6,g,6,"rgba(0,0,0,0.12)"),Fs(f,g*.3,v-6,10,10,.2)});i.add("kawara",272,256,(c,f,d,g)=>{Y(c,0,0,d,g,"#58617a");for(let v=0;v<g;v+=16)Tn(c,0,v,d,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let v=-4;v<d;v+=20)Y(c,v,0,2,g,"rgba(0,0,0,0.18)");cn(c,i,d,g,.12)}),i.add("wood",256,256,(c,f,d,g)=>{Y(c,0,0,d,g,"#6d4c37");for(let v=0;v<g;v+=14)Y(c,0,v,d,2,"rgba(25,15,8,0.4)"),Y(c,0,v+2,d,1,"rgba(255,220,180,0.07)");cn(c,i,d,g,.16)}),i.add("block",256,128,(c,f,d,g)=>{Y(c,0,0,d,g,"#c9c7bf");for(let v=0;v<g;v+=32)for(let b=v/32%2?-32:0;b<d;b+=64)c.strokeStyle="rgba(80,80,80,0.35)",c.lineWidth=2,c.strokeRect(b+1,v+1,62,30);for(let v=0;v<d;v+=64)c.fillStyle="rgba(70,70,70,0.25)",c.fillRect(v+20,40,24,16);cn(c,i,d,g,.15),Fs(c,0,0,d,40,.1)}),i.add("lantern",64,96,(c,f,d,g)=>{c.fillStyle="#d8352a",c.beginPath(),c.ellipse(d/2,g/2,d/2-2,g/2-8,0,0,7),c.fill();for(let v=16;v<g-12;v+=7)Y(c,4,v,d-8,1.5,"rgba(0,0,0,0.2)");Y(c,d/2-14,2,28,8,"#222"),Y(c,d/2-14,g-10,28,8,"#222"),Pt(c,"\u796D",d/2,g/2,d*.6,28,"#fff",900),f.fillStyle="#ff6a35",f.beginPath(),f.ellipse(d/2,g/2,d/2-2,g/2-8,0,0,7),f.fill()}),i.add("busstop",96,96,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=8,c.beginPath(),c.arc(d/2,g/2,d/2-6,0,7),c.stroke(),Pt(c,"\u30D0\u30B9\u505C",d/2,g/2,d*.66,20,"#1d3d8a",900)}),i.add("white",16,16,c=>Y(c,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(c,f,d,g)=>{c.save(),c.translate(d/2,g/2),c.rotate(Math.PI/4),c.fillStyle="#1b1b1b",c.fillRect(-41,-41,82,82),c.fillStyle="#f2c230",c.fillRect(-37,-37,74,74),c.restore(),c.fillStyle="#1b1b1b",c.fillRect(d/2-22,g/2-6,44,18),c.fillRect(d/2-16,g/2-16,18,12),c.fillRect(d/2+8,g/2-13,5,7),c.beginPath(),c.arc(d/2-12,g/2+15,5,0,7),c.arc(d/2+12,g/2+15,5,0,7),c.fill(),Pt(c,"\u8E0F\u5207",d/2,g/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((c,f)=>i.add("bridge"+f,64,176,(d,g,v,b)=>{Y(d,0,0,v,b,"#b9b5ab"),cn(d,i,v,b,.2),Y(d,6,6,v-12,b-12,"#a7a398"),kr(d,c,v/2,14,b-14,34,"#3f3c37",800)})),i.add("signal",240,84,(c,f,d,g)=>{Y(c,0,0,d,g,"#4a4d52"),Y(c,0,0,d,5,"#5c6066"),cn(c,i,d,g,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([v,b])=>{c.fillStyle="#26282c",c.beginPath(),c.arc(b,g/2,33,0,7),c.fill(),c.fillStyle=v,c.beginPath(),c.arc(b,g/2,27,0,7),c.fill()})}),i.add("ped_sig",64,128,(c,f,d,g)=>{Y(c,0,0,d,g,"#3d4045"),c.fillStyle="#5a1814",c.fillRect(8,8,d-16,g/2-12),c.fillStyle="#0d4f44",c.fillRect(8,g/2+4,d-16,g/2-12),c.fillStyle="rgba(255,255,255,0.18)",c.beginPath(),c.arc(d/2,g*.18,6,0,7),c.fill(),c.fillRect(d/2-5,g*.24,10,18)}),i.add("tomare",256,96,(c,f,d,g)=>{c.clearRect(0,0,d,g),c.fillStyle="rgba(244,244,238,0.012)",c.fillRect(0,0,d,g),Pt(c,"\u6B62\u307E\u308C",d/2,g/2+4,d*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((c,f)=>i.add("hodokyo"+f,256,44,(d,g,v,b)=>{Y(d,0,0,v,b,"#1f4f96"),d.strokeStyle="#fff",d.lineWidth=3,d.strokeRect(4,4,v-8,b-8),Pt(d,c,v/2,b/2+1,v*.85,28,"#fff",800)}));let M=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];M.forEach(([c,f,d],g)=>{let v=M[(g+3)%4][0],b=M[(g+1)%4][0];i.add("ekimei"+g,320,124,(T,w,y,S)=>{Y(T,0,0,y,S,"#3a3d42"),Y(T,4,4,y-8,S-8,"#f8f8f3"),Pt(T,f,y/2,20,y*.5,15,"#2b2b2b",700),Pt(T,c,y/2,52,y*.6,40,"#151515",900),Pt(T,d,y/2,80,y*.5,12,"#555",600),Y(T,4,S-30,y-8,26,"#1f9a50"),T.fillStyle="#fff",Ch(T,12,700),T.textBaseline="middle",T.textAlign="left",T.fillText("\u2190 "+v,12,S-17),T.textAlign="right",T.fillText(b+" \u2192",y-12,S-17),cn(T,i,y,S,.06),Y(w,4,4,y-8,S-8,"#8a8a84")}),i.add("ekiplate"+g,220,48,(T,w,y,S)=>{Y(T,0,0,y,S,"#4b3326"),cn(T,i,y,S,.2),Pt(T,c+"\u99C5",y/2,S/2+1,y*.8,30,"#f3ead8",800)})});for(let c of["l","r"])i.add("chev_"+c,96,120,(f,d,g,v)=>{Y(f,0,0,g,v,"#f4f4ef"),Y(f,4,4,g-8,v-8,"#1e5bb8"),f.fillStyle="#f8f8f4",f.beginPath();let b=c==="r"?1:-1,T=g/2,w=v/2;f.moveTo(T-b*26,w-40),f.lineTo(T+b*22,w),f.lineTo(T-b*26,w+40),f.lineTo(T-b*8,w+40),f.lineTo(T+b*40,w),f.lineTo(T-b*8,w-40),f.closePath(),f.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((c,f)=>i.add("tunnel"+f,360,80,(d,g,v,b)=>{Y(d,0,0,v,b,"#e9e7e0"),Y(d,4,4,v-8,b-8,"#24403b"),cn(d,i,v,b,.08),Pt(d,c,v/2,b*.42,v*.8,38,"#f4f2ea",800),Pt(d,"L = 170 m",v/2,b*.8,v*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(c,f,d,g)=>{Y(c,0,0,d,g,"#f6f6f2"),c.fillStyle="#d42a22";for(let v=-20;v<g;v+=26)c.beginPath(),c.moveTo(4,v),c.lineTo(d/2,v+20),c.lineTo(d-4,v),c.lineTo(d-4,v+11),c.lineTo(d/2,v+31),c.lineTo(4,v+11),c.closePath(),c.fill();c.strokeStyle="#222",c.lineWidth=3,c.strokeRect(1.5,1.5,d-3,g-3)}),i.add("xing_plate",128,48,(c,f,d,g)=>{Y(c,0,0,d,g,"#f6f6f2"),c.strokeStyle="#d8231c",c.lineWidth=4,c.strokeRect(3,3,d-6,g-6),Pt(c,"\u8E0F\u5207\u6CE8\u610F",d/2,g/2,d*.8,26,"#d8231c",900)}),i.add("rail",240,80,(c,f,d,g)=>{c.clearRect(0,0,d,g),Y(c,0,0,d,7,"#e9ebee"),Y(c,0,6,d,2,"rgba(60,70,80,0.5)"),Y(c,0,g-6,d,6,"#d5d8dc");for(let v=3;v<d;v+=9)Y(c,v,7,3,g-13,"#e2e5e9"),Y(c,v+2,7,1,g-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(c,f,d,g)=>{let v=Et(4242);Y(c,0,0,d,g,"#3d3f3c");let b=38,T=b/Math.SQRT2;c.save(),c.beginPath(),c.rect(0,22,d,g-22),c.clip();for(let w=-2;w*T<g+b;w++)for(let y=-2;y*b<d+b;y++){let S=y*b+(w%2?b/2:0),E=22+w*T,R=.52+v()*.17,C=Math.min(1,Math.max(0,(E-g*.55)/(g*.4))),L=Math.round(255*R*(1-.38*C)),A=`rgb(${L-4},${L-2},${L-9})`;c.fillStyle=A,c.beginPath(),c.moveTo(S,E-T+3.5),c.lineTo(S+T-3.5,E),c.lineTo(S,E+T-3.5),c.lineTo(S-T+3.5,E),c.closePath(),c.fill(),c.fillStyle="rgba(255,255,255,0.12)",c.beginPath(),c.moveTo(S,E-T+3.5),c.lineTo(S+T-3.5,E),c.lineTo(S,E),c.closePath(),c.fill(),C>.3&&v()<.5&&(c.fillStyle=`rgba(70,96,52,${.25+.3*v()})`,c.beginPath(),c.arc(S+(v()-.5)*10,E+6,4+v()*6,0,7),c.fill())}c.restore(),Tn(c,0,g*.55,d,g*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),Y(c,0,0,d,22,"#8c8d87"),Y(c,0,18,d,4,"rgba(0,0,0,0.3)"),Y(c,0,0,d,3,"rgba(255,255,255,0.2)"),cn(c,i,d,g,.12)}),i.add("wrail",240,80,(c,f,d,g)=>{c.clearRect(0,0,d,g),Y(c,0,0,d,9,"#6a4a34"),Y(c,0,0,d,2,"rgba(255,225,190,0.25)"),Y(c,0,8,d,2,"rgba(20,10,5,0.45)"),Y(c,0,g-10,d,10,"#5e412e"),Y(c,0,g-10,d,2,"rgba(255,225,190,0.18)");for(let v=4;v<d;v+=12)Y(c,v,9,5,g-19,"#634632"),Y(c,v,9,1.2,g-19,"rgba(255,225,190,0.18)"),Y(c,v+4,9,1,g-19,"rgba(20,10,5,0.4)");cn(c,i,d,g,.15)}),i.add("woodwall",t,t,(c,f,d,g)=>{let v=Et(5151);Y(c,0,0,d,g,"#5e4130");for(let b=0;b<g;b+=16){let T=v();Y(c,0,b,d,16,T<.15?"#6b4b37":T<.3?"#553a2b":"#5e4130"),Y(c,0,b,d,2,"rgba(255,220,180,0.12)"),Y(c,0,b+14,d,2,"rgba(15,8,4,0.45)");for(let w=v()*80;w<d;w+=60+v()*90)Y(c,w,b+2,1.5,12,"rgba(15,8,4,0.35)")}Tn(c,0,0,d,g,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),cn(c,i,d,g,.2)}),i}var n3=11,i3=[7,8,9,10,11],s3=[["\u713C\u304D\u9CE5","#fbf6f2","#c8102e","#ff4fd8",1],["\u5C45\u9152\u5C4B","#fdf8ee","#c41e2a",null,1],["\u305D\u3070","#fbf7ef","#1f2a6e","#3fd8ff",1],["\u6D0B\u54C1\u5E97","#2a8a5a","#ffffff",null,0],["\u30B9\u30CA\u30C3\u30AF","#2a1f4a","#ff8ae8","#b45cff",0],["\u30AB\u30E9\u30AA\u30B1","#c8287a","#ffffff","#ffd0f0",0],["\u4E2D\u83EF\u6599\u7406","#1f4fa8","#ffffff",null,0],["\u30E9\u30FC\u30E1\u30F3","#c8241c","#fff6d8","#ffc94a",0],["\u55AB\u8336","#fdf4e4","#6a3a1e","#ffb84a",1],["\u713C\u8089","#fbf6f2","#b8186a","#b45cff",1],["\u713C\u304D\u9CE5","#fbf4fb","#a0128a","#b45cff",1]],Cl=(i,e,t,n,s,r)=>{i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()};function r3(i,e,t,n,s,[r,o,l,a,u]){let h=n/160,p=6*h,m=12*h;Y(e,0,0,n,s,"#2a2b30"),Cl(e,p*.5,p*.5,n-p,s-p,m),e.fillStyle=o,e.fill(),e.save(),Cl(e,p*.5,p*.5,n-p,s-p,m),e.clip();let x=e.createRadialGradient(n/2,s/2,n*.1,n/2,s/2,s*.62);x.addColorStop(0,u?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.12)"),x.addColorStop(1,"rgba(0,0,0,0.14)"),e.fillStyle=x,e.fillRect(0,0,n,s),e.restore();let _=(d,g,v,b)=>{d.save(),Cl(d,p+5*h,p+5*h,n-2*p-10*h,s-2*p-10*h,m*.8),d.shadowColor=g,d.shadowBlur=v*h,d.strokeStyle=g,d.lineWidth=6*h,d.stroke(),d.shadowBlur=0,d.strokeStyle=b,d.lineWidth=2.2*h,d.stroke(),d.restore()};a?_(e,a,10,"#fff4fb"):(e.save(),Cl(e,p+5*h,p+5*h,n-2*p-10*h,s-2*p-10*h,m*.8),e.strokeStyle=l,e.globalAlpha=.7,e.lineWidth=3*h,e.stroke(),e.restore());let M=p+20*h,c=s-p-20*h,f=Math.min(n*.62,(c-M)/[...r].length);kr(e,r,n/2,M,c,f,l,900,u?"rgba(255,255,255,0.9)":"rgba(0,0,0,0.25)"),cn(e,i,n,s,.05),Y(t,0,0,n,s,"#000"),Cl(t,p*.5,p*.5,n-p,s-p,m),t.fillStyle=u?"#b4aea4":a&&o==="#2a1f4a"?"#100c1c":o,t.globalAlpha=u?1:.55,t.fill(),t.globalAlpha=1,a&&_(t,a,12,"#ffffff"),kr(t,r,n/2,M,c,f,u||o==="#2a1f4a"?l:"#ffffff",900),u&&(t.save(),t.globalCompositeOperation="multiply",kr(t,r,n/2,M,c,f,"#8a8a8a",900),t.restore())}function o3(i,e,t,n,s){let r=Et(7331),o=s/1.26/(n/3);e.clearRect(0,0,n,s);let l=11,a=n/l,u=.15*(s/1.26);Y(e,0,0,n,s-u*.5,"#4d5f92");for(let h=0;h<l;h++){let p=h*a,m=e.createLinearGradient(p,0,p+a,0);m.addColorStop(0,"#2c3760"),m.addColorStop(.18,"#5a70a8"),m.addColorStop(.45,"#9fb4e0"),m.addColorStop(.7,"#6a80b8"),m.addColorStop(1,"#33416e"),e.fillStyle=m,e.fillRect(p,0,a,s-u*.5)}for(let h=s-u*.5-52;h>0;h-=52)Tn(e,0,h,n,10,[[0,"rgba(20,26,50,0.45)"],[1,"rgba(20,26,50,0)"]]),Y(e,0,h-2,n,2,"rgba(200,215,240,0.35)");for(let h=0;h<l;h++){let p=(h+.5)*a,m=s-u*.5,x=a*.47;e.save(),e.translate(p,m),e.scale(1,o),e.fillStyle="#26305a",e.beginPath(),e.arc(0,0,x,0,7),e.fill(),e.fillStyle="#5c72aa",e.beginPath(),e.arc(0,0,x*.8,0,7),e.fill(),e.fillStyle="rgba(190,206,240,0.8)",e.beginPath(),e.arc(-x*.2,-x*.25,x*.38,0,7),e.fill(),e.fillStyle="#3a4878",e.beginPath(),e.arc(0,0,x*.22,0,7),e.fill(),e.restore()}e.save(),e.globalCompositeOperation="source-atop",e.globalAlpha=.12,e.fillStyle=i.grain,e.fillRect(0,0,n,s),e.restore();for(let h=0;h<40;h++)e.fillStyle=r()<.5?"rgba(255,255,255,0.08)":"rgba(0,0,20,0.1)",e.fillRect(r()*n,r()*(s-u),a*(.5+r()),3+r()*6)}function a3(i,e,t,n,s,r){Y(e,0,0,n,s,"#1c2b5e"),Y(e,0,0,n,4,"rgba(255,255,255,0.3)"),Y(e,0,s-5,n,5,"rgba(0,0,0,0.25)"),e.strokeStyle="#d9b44a",e.lineWidth=2,e.strokeRect(7,7,n-14,s-14),Pt(e,r,n/2,s/2+2,n*.66,52,"#f6d35a",900,"rgba(60,40,0,0.5)"),cn(e,i,n,s,.06),Y(t,0,0,n,s,"#0a1024"),Pt(t,r,n/2,s/2+2,n*.66,52,"#f0c850",900)}function l3(i,e,t,n,s,r,o){let l=Et(r),a=n/360;Y(e,0,0,n,s,"#4b3426"),Tn(e,0,0,n,s,[[0,"rgba(255,230,200,0.08)"],[1,"rgba(0,0,0,0.2)"]]);let u=n*.12,h=s*(o?.3:.17),p=n*.76,m=s*(o?.62:.56);for(let x of[e,t])Y(x,u,h,p,m,"#e9b56c"),Tn(x,u,h,p,m,[[0,"rgba(255,240,200,0.55)"],[1,"rgba(110,60,25,0.4)"]]);if(!o)for(let x=h+m*.32;x<h+m-6*a;x+=m*.22){for(let _=u+4*a;_<u+p-10*a;_+=(9+l()*12)*a){let M=(10+l()*12)*a;Y(e,_,x-M,7*a,M,["#c0503a","#3a6ab0","#e8c050","#5a9a50","#d07a9a"][Math.floor(l()*5)])}Y(e,u,x,p,5*a,"#6e4a30")}o&&(Y(e,u,h-s*.12,p,s*.16,"#28356a"),Y(t,u,h-s*.12,p,s*.16,"#000")),Y(e,u+p/2-4*a,h,8*a,m,"#4b3426"),Y(t,u+p/2-4*a,h,8*a,m,"#000"),Y(e,0,h+m,n,6*a,"#3a281d"),cn(e,i,n,s,.15)}function c3(i,e,t,n,s,r,o){let l=n/360;if(Y(e,0,0,n,s,r?"#5e4130":"#ece2cc"),r)for(let m=0;m<s;m+=16*l)Y(e,0,m,n,2*l,"rgba(15,8,4,0.4)");for(let m of[0,n-14*l])Y(e,m,0,14*l,s,"#4b3426");Y(e,0,s-12*l,n,12*l,"#3a281d");let a=n*.2,u=s*.22,h=n*.6,p=s*.46;Y(e,a-8*l,u-8*l,h+16*l,p+16*l,"#4a3020"),Tn(e,a,u,h,p,[[0,"#4f78b8"],[1,"#a6c8ec"]]),Y(e,a+h/2-3*l,u,6*l,p,"#4a3020"),o&&(Y(t,a,u,h,p,"#ffcf8f"),Y(t,a+h/2-3*l,u,6*l,p,"#000")),cn(e,i,n,s,.12)}function u3(i){let e=0,t=0,n=0;for(let[s,r]of i)e+s+4>Bs&&(e=0,t+=n+4,n=0),e+=s+4,n=Math.max(n,r);return t+n}function i1(i,e,t,n){let s=e==="hi"?1:.5,r=[360*s,432*s],o=[360*s,348*s],l=[160*s,384*s],a=[512,76],u=[],h=[],p=[];for(let c=0;c<n3;c++)u.push(["shop_p"+c,r,(f,d,g,v,b)=>l3(f,d,g,v,b,6100+c,c===2||c===7||c===10)]);for(let c of i3)for(let f of[!1,!0])h.push(["win"+c+(f?"L":""),o,(d,g,v,b,T)=>c3(d,g,v,b,T,c===8||c===11,f)]);s3.forEach((c,f)=>p.push(["vsB"+f,l,(d,g,v,b,T)=>r3(d,g,v,b,T,c)]));let m=[...u.slice(0,5),p[0],...u.slice(5,10),p[1],u[10],...h.slice(0,4),p[2],...h.slice(4,9),p[3],h[9],...p.slice(4),["hsN_\u6D0B\u54C1\u5E97",a,(c,f,d,g,v)=>a3(c,f,d,g,v,"\u6D0B\u54C1\u5E97")],["kawaraC",[240,256],o3]],x=u3(m.map(c=>c[1])),_=Math.ceil((x+(n?16+n.rows:4))/4)*4,M=new Rh(_,2,i.cells);for(let[c,[f,d],g]of m)M.add(c,f,d,(v,b,T,w)=>g(M,v,b,T,w));if(t){let c=t.img.width,f=t.img.height;for(let d of t.tiles)M.paintCell(d.name,t.img,d.x*c,d.y*f,d.w*c,d.h*f,d.ey<0?-1:d.ey*f)}return M.houses=!!n&&h3(M,n),M}function h3(i,e){let n=i.y+i.rowH+4+12;if(n+e.rows>i.H)return!1;i.x=0,i.y=n,i.rowH=0,i.a.clearRect(0,n-8,Bs,i.H-n+8);try{for(let s of e.tiles)i.add(s.name,s.w,s.h,(r,o,l,a)=>{r.clearRect(0,0,l,a),r.drawImage(e.img,s.x,s.y,s.w,s.h,0,0,l,a),o.drawImage(e.img,s.x,s.ey,s.w,s.h,0,0,l,a)})}catch(s){return console.warn("painted houses:",s.message),!1}return!0}function s1(i){let l=Ah(1024,3328),a=l.getContext("2d"),u=Et(321),h={},p={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},m=(b,T,w)=>{let y=p[b],S=256,E=b==="pine",R=b==="sakura";a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let C=[[S,S,E?80:92]];for(let A=0;A<(E?10:14);A++){let I=u()*6.28,D=45+u()*120;C.push([S+Math.cos(I)*D,S+Math.sin(I)*D*(E?.42:.9),Math.min(34+u()*52,232-D)])}let L=R?2300:E?2600:2300;for(let A=0;A<L;A++){let I=C[Math.floor(u()*C.length)],D=u()*6.28,F=Math.sqrt(u())*I[2],z=I[0]+Math.cos(D)*F,U=I[1]+Math.sin(D)*F*(E?.45:1),V=F/I[2],k=Math.min(4,Math.max(0,Math.floor(.55+u()*2.7+(V>.82?.5:0))));if(a.fillStyle=y[k],R){let X=7+u()*8;a.beginPath(),a.arc(z,U,X,0,7),a.fill(),u()<.25&&(a.fillStyle=y[4],a.beginPath(),a.arc(z-X*.3,U-X*.3,X*.4,0,7),a.fill())}else if(E)a.save(),a.translate(z,U),a.rotate((u()-.5)*1.2),a.fillRect(-11,-1.6,22,3.2),a.restore();else if(b==="momiji"){let X=8+u()*7;a.save(),a.translate(z,U),a.rotate(u()*6.28),a.beginPath();for(let j=0;j<10;j++){let Me=j%2?X*.42:X,Se=j/10*6.2832;a.lineTo(Math.cos(Se)*Me,Math.sin(Se)*Me)}a.closePath(),a.fill(),a.restore()}else if(b==="ginkgo"){let X=9+u()*7;a.save(),a.translate(z,U),a.rotate(u()*6.28),a.beginPath(),a.moveTo(0,0),a.arc(0,0,X,-.95,.95),a.closePath(),a.fill(),a.restore()}else{let X=9+u()*10;a.beginPath(),a.ellipse(z,U,X,X*.55,u()*6.28,0,7),a.fill()}}for(let A=0;A<90;A++){let I=u()*6.28,D=150+u()*85,F=S+Math.cos(I)*D,z=S+Math.sin(I)*D*(E?.45:.92);a.fillStyle=y[1+Math.floor(u()*4)],E?(a.save(),a.translate(F,z),a.rotate((u()-.5)*1.2),a.fillRect(-9,-1.6,18,3.2),a.restore()):(a.beginPath(),a.arc(F,z,R?6+u()*6:7+u()*6,0,7),a.fill())}if(R)for(let A=0;A<14;A++){a.strokeStyle="rgba(150,90,100,0.35)",a.lineWidth=1.5;let I=S+(u()-.5)*300,D=S+60+u()*120;a.beginPath(),a.moveTo(I,D),a.lineTo(I+(u()-.5)*40,D-20-u()*30),a.stroke()}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},x=(b,T,w,y)=>{a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let S=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],E=y?120:170;for(let R=0;R<E;R++){let C=256+(u()-.5)*(y?330:380)*Math.sqrt(u()),L=150+u()*(y?230:300)*(1-Math.abs(C-256)/300),A=(C-256)*.35+(u()-.5)*90,I=9+u()*9,D=C+A,F=512-L,z=Math.min(4,Math.floor(u()*2.2+L/380*2.6)),U=a.createLinearGradient(0,512,0,F);U.addColorStop(0,S[0]),U.addColorStop(.6,S[Math.max(1,z-1)]),U.addColorStop(1,S[z]),a.fillStyle=U,a.beginPath(),a.moveTo(C-I/2,512),a.quadraticCurveTo(C-I/2+A*.3,512-L*.55,D,F),a.quadraticCurveTo(C+I/2+A*.3,512-L*.5,C+I/2,512),a.fill()}if(y)for(let R=0;R<16;R++){let C=110+u()*290,L=150+u()*200,A=u();if(a.strokeStyle="#3e7334",a.lineWidth=5,a.beginPath(),a.moveTo(C+(u()-.5)*20,512),a.quadraticCurveTo(C+(u()-.5)*30,(L+512)/2,C,L),a.stroke(),A<.55){a.fillStyle="#fbfaf2";for(let I=0;I<12;I++){let D=I/12*6.283;a.beginPath(),a.ellipse(C+Math.cos(D)*11,L+Math.sin(D)*11,9,4.5,D,0,7),a.fill()}a.fillStyle="#f2c230",a.beginPath(),a.arc(C,L,8,0,7),a.fill()}else if(A<.85)a.fillStyle="#f6c62e",a.beginPath(),a.arc(C,L,15,0,7),a.fill(),a.fillStyle="#ffe27a",a.beginPath(),a.arc(C-3,L-3,8,0,7),a.fill();else{a.fillStyle="#9b7fd6";for(let I=0;I<6;I++)a.beginPath(),a.arc(C+(u()-.5)*16,L+(u()-.5)*16,6,0,7),a.fill()}}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},_=(b,T,w)=>{let y=Et(97);a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip(),a.lineCap="round";let S=(E,R,C,L,A,I)=>{let D=E+Math.cos(C)*L,F=R+Math.sin(C)*L;if(a.strokeStyle=I>3?"#76605f":I>1?"#6c5458":"#62494f",a.lineWidth=A,a.beginPath(),a.moveTo(E,R),a.lineTo(D,F),a.stroke(),I<=0||A<.7)return;let z=2+(y()<.4?1:0);for(let U=0;U<z;U++){let V=C+(y()-.5)*1.1+(U-(z-1)/2)*.42;V=V*.8+-Math.PI/2*.2,S(D,F,V,L*(.62+y()*.2),A*.68,I-1)}};for(let E=0;E<6;E++)S(256+(y()-.5)*40,500,-Math.PI/2+(y()-.5)*.9,110+y()*50,5.6,6);a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},M=(b,T,w,y,S,E=4,R=!1)=>{let C=Et(y),L=1024,A=504,I=R?246/504:1;a.save(),a.translate(T,w+8*I),a.beginPath(),a.rect(0,0,512,A*I),a.clip(),a.scale(.5,I);let D=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],F=j=>{let Me=j/L;return(.5+.5*Math.min(1,Me/.45)**.8)*(1-.4*Math.max(0,(Me-.9)/.1))},z=(j,Me,Se,we)=>{Me=Math.min(Me,A*.985);let Z=j+Se,q=A-Me,ve=j+Se*.25,Pe=A-Me*.62-Math.abs(Se)*.35;a.moveTo(j-we/2,A),a.quadraticCurveTo(ve-we*.42,Pe,Z,q),a.quadraticCurveTo(ve+we*.42,Pe+we*.5,j+we/2,A),a.closePath()},U=[];for(let j=24+C()*24;j<L-20;j+=(j<L*.25?56:44)+C()*26)U.push(j);let V=()=>U[Math.floor(C()*U.length)],k=(j,Me,Se,we,Z,q,ve,Pe,ee)=>{let xe=D.map(()=>[]);for(let Fe=0;Fe<j;Fe++){let ke=V(),Le=ke+(C()-.5)*34,Ye=F(Le),ne=Le/L,Te=A*(Me+C()*(Se-Me))*Ye*1.12,Q=(C()-.5)*we+(Le-L*.45)*.12;xe[Math.min(8,Pe+Math.floor(C()*(ee-Pe+1)+ne*1.2))].push([Le,Te,Q,Z+C()*(q-Z)])}xe.forEach((Fe,ke)=>{if(!Fe.length)return;let Le=a.createLinearGradient(0,A,0,A*(1-Se*.8));Le.addColorStop(0,D[ve]),Le.addColorStop(.55,D[Math.round((ve+ke)/2)]),Le.addColorStop(1,D[ke]),a.fillStyle=Le,a.beginPath();for(let Ye of Fe)z(Ye[0],Ye[1],Ye[2],Ye[3]);a.fill()})};k(360,.25,.55,150,12,22,0,2,3),k(240,.4,.78,260,10,17,1,4,6);let X=[];for(let j=0;j<E;j++){let Me=L*(.14+C()*.74),Se=F(Me);X.push({fx:Me,fy:Math.max(56,A-A*(.56+C()*.38)*Se*1.05),kind:C()<S?0:1,sz:.85+C()*.4,tilt:.72+C()*.28,rot:C()*6.28,sx:Me+(C()-.5)*60})}a.lineCap="round";for(let j of X)a.strokeStyle="#2c6623",a.lineWidth=6,a.beginPath(),a.moveTo(j.sx,A),a.quadraticCurveTo((j.sx+j.fx)/2+(C()-.5)*40,(A+j.fy)/2,j.fx,j.fy+8),a.stroke();k(150,.5,.92,330,9,16,2,6,7);for(let j of X){if(a.save(),a.translate(j.fx,j.fy),a.scale(1,j.tilt),j.kind===0){let Me=38*j.sz;for(let Se=0;Se<16;Se++){let we=j.rot+Se/16*6.283;a.fillStyle=Math.sin(we)>.4?"#e2e3ea":"#fdfdf6",a.beginPath(),a.ellipse(Math.cos(we)*Me*.56,Math.sin(we)*Me*.56,Me*.48,Me*.14,we,0,7),a.fill()}a.fillStyle="#f2b51a",a.beginPath(),a.arc(0,0,Me*.28,0,7),a.fill(),a.fillStyle="#fbe060",a.beginPath(),a.arc(-Me*.07,-Me*.07,Me*.14,0,7),a.fill()}else{let Me=40*j.sz;for(let Se=0;Se<5;Se++){let we=j.rot+Se/5*6.283;a.fillStyle="#fccc1e",a.beginPath(),a.ellipse(Math.cos(we)*Me*.52,Math.sin(we)*Me*.52,Me*.52,Me*.38,we,0,7),a.fill()}for(let Se=0;Se<5;Se++){let we=j.rot+Se/5*6.283;a.fillStyle="#ffe873",a.beginPath(),a.ellipse(Math.cos(we)*Me*.62,Math.sin(we)*Me*.62-3,Me*.26,Me*.15,we,0,7),a.fill()}a.fillStyle="#e39b14",a.beginPath(),a.arc(0,0,Me*.2,0,7),a.fill()}a.restore()}k(40,.42,.85,280,8,14,3,6,7),a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512*I)/3328,v1:1-(w+8*I)/3328}},c=(b,T,w,y)=>{let S=Et(y),E=["#173d1d","#21512a","#2f6a33","#46853c","#64a048","#8dbd58","#b6d872"];a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let R=[];for(let C=0;C<15;C++){let L=(C+S()*.6)/15,A=40+L*432,I=500-300*Math.sqrt(Math.max(0,1-((A-256)/232)**2));R.push([A,I+60+S()*50,54+S()*46])}for(let C=0;C<2600;C++){let L=R[Math.floor(S()*R.length)],A=S()*6.283,I=Math.sqrt(S())*L[2],D=L[0]+Math.cos(A)*I,F=Math.min(505,L[1]+Math.sin(A)*I*.85),z=Math.sin(A)<-.2?1:0,U=Math.max(0,Math.min(6,Math.floor(S()*2.4+(1-F/512)*3.2+z*1.3+I/L[2]*.8)));a.fillStyle=E[U],a.beginPath(),a.ellipse(D,F,7+S()*7,4+S()*4,S()*6.28,0,7),a.fill()}for(let C=0;C<130;C++){let L=R[Math.floor(S()*R.length)],A=-Math.PI*(.1+S()*.8),I=(.35+S()*.6)*L[2],D=L[0]+Math.cos(A)*I,F=L[1]+Math.sin(A)*I*.85;if(F>470)continue;let z=6+S()*5,U=S()*6.28,V=S()<.12;a.fillStyle=V?"#f3d2dc":"#fbfbf6";for(let k=0;k<5;k++){let X=U+k/5*6.283;a.beginPath(),a.ellipse(D+Math.cos(X)*z*.55,F+Math.sin(X)*z*.5,z*.5,z*.36,X,0,7),a.fill()}a.fillStyle="#d9b628",a.beginPath(),a.arc(D,F,z*.22,0,7),a.fill()}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},f=(b,T,w,y)=>{let S=Et(y),E=1024,R=512;a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,250),a.clip(),a.scale(.5,250/512);let C=["#0c2a12","#143a19","#1f4f23","#2e682f","#46843a","#66a047","#8ebd58","#b6d874"],L=F=>Math.max(0,1-((F-E/2)/(E*.47))**2)**.6,A=(F,z,U,V)=>{let k=F+U,X=R-z,j=F+U*.3,Me=R-z*.6;a.moveTo(F-V/2,R),a.quadraticCurveTo(j-V*.5,Me,k,X),a.quadraticCurveTo(j+V*.5,Me+V*.4,F+V/2,R),a.closePath()},I=(F,z,U,V,k,X,j)=>{let Me=C.map(()=>[]);for(let Se=0;Se<F;Se++){let we=E/2+(S()-.5)*E*.8*Math.sqrt(S()),Z=L(we),q=R*.9*Z*(z+S()*(U-z)),ve=(we-E/2)*.22+(S()-.5)*120,Pe=Math.min(7,X+Math.floor(S()*(j-X+1)));Z>.03&&Me[Pe].push([we,q,ve,V+S()*(k-V)])}Me.forEach((Se,we)=>{if(!Se.length)return;let Z=a.createLinearGradient(0,R,0,R*.1);Z.addColorStop(0,C[Math.max(0,we-3)]),Z.addColorStop(1,C[we]),a.fillStyle=Z,a.beginPath();for(let q of Se)A(q[0],q[1],q[2],q[3]);a.fill()})};I(150,.35,.7,26,46,1,3),I(110,.5,.92,22,38,3,5);let D=[["#d27ac4","#f4bce6"],["#9f74da","#d2b6f4"],["#fbfbf6","#ffffff"],["#ea88b2","#fcc8de"]];for(let F=0;F<48;F++){let z=E/2+(S()-.5)*E*.84,U=L(z),V=R-R*.9*U*(.55+S()*.42),[k,X]=D[Math.floor(S()*D.length)],j=22+S()*12,Me=S()*6.28;if(!(U<.15)){a.fillStyle=k;for(let Se=0;Se<5;Se++){let we=Me+Se*1.2566;a.beginPath(),a.ellipse(z+Math.cos(we)*j*.55,V+Math.sin(we)*j*.45,j*.52,j*.36,we,0,7),a.fill()}a.fillStyle=X;for(let Se=0;Se<5;Se++){let we=Me+Se*1.2566;a.beginPath(),a.ellipse(z+Math.cos(we)*j*.45,V+Math.sin(we)*j*.35-3,j*.25,j*.16,we,0,7),a.fill()}a.fillStyle=k==="#fbfbf6"?"#f2b51a":"#6e2f62",a.beginPath(),a.arc(z,V,j*.18,0,7),a.fill()}}I(34,.4,.75,20,34,4,6),a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+250)/3328,v1:1-w/3328}};_("twigs",0,0),c("flowerbush",512,0,6151),m("leafA",0,512),m("leafB",512,512),m("sakura",0,1024),m("pine",512,1024),m("momiji",0,1536),m("ginkgo",512,1536),x("grass",0,2304,!1),x("flowers",512,2304,!0),M("bankA",0,2816,4111,.7),M("bankB",512,2816,4127,.35),f("bedA",0,2048,7741),M("bankC",512,2048,4133,0,0,!0);let d=new si(l);d.colorSpace=Wt,d.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let g=1-2816/3328,v=1-2824/3328;return{tex:d,cells:h,tuftV:[g,1-2304/3328,v,(g+v)/2]}}var hn=[1,1,1],Ce={pole:be("#b1b0a9"),metal:be("#8d9198"),black:be("#2a2b30"),yellow:be("#f2c230"),white:be("#f4f3ee"),trans:be("#a0a3a8"),lampPole:be("#727780"),lampHead:be("#dcdcd6"),trunk:be("#6a5444"),trunkDark:be("#4b3a33"),bark:be("#7a6556"),leaf:be("#86ba4c"),leafShade:be("#2c6640"),sakura:be("#ffd3e3"),sakuraShade:be("#de94b4"),pine:be("#55874c"),pineShade:be("#1d4632"),cedar:be("#41713e"),cedarShade:be("#1b3e2a"),roof:be("#bdbbb3"),parapet:be("#dcdad2"),pipe:be("#c4c4bf"),orange:be("#f07a22"),red:be("#d8352a"),vermilion:be("#e2482c"),concrete:be("#c9c7c0"),stone:be("#a8a69e"),terracotta:be("#b8653d"),rail:be("#eeeeea")},ud=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(be),Os=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(be),f3=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(be),r1=["#c62f2a","#2b46a6","#7b3c9e","#b8336f","#a8282a","#273b86"].map(be),Nh=null;function x1(i){Nh=i}var ai=i=>Nh.uv(i),Zo=ai,y1=(i,e)=>{let t=1;for(;Nh.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function _1(i,e,t,n,s=0){let r=new et().makeRotationY(s);r.setPosition(e,t,n);let o=new et().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var hd=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let l=e[5];(l==="g"&&e[6]==="l"||l==="d"||l==="k"||l==="c"||l==="n"||l==="p")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},un=(i,e,t,n,s,r,o,l=hn)=>{hd(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,ai(o)),i.litV=0},Vi=(i,e,t,n,s,r,o,l=hn)=>{hd(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,ai(o)),i.litV=0},Wi=(i,e,t,n,s,r,o,l=hn)=>{hd(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,ai(o)),i.litV=0},Xo=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?ai(r):void 0),d3=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function b1(i){return d3.map(e=>new H(e[0],e[1],e[2]).applyMatrix4(i))}function fd(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,Ce.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?Ce.black:Ce.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,Ce.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,Ce.metal);let o=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,Ce.white);for(let u of l)s.cyl(0,r-1.65,u,.045,.03,.15,6,Ce.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,Ce.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,Ce.trans),s.box(-.06,7.2,.12,.06,7.35,.26,Ce.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,Ce.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,Ce.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,Ce.concrete);for(let u=2.4,h=0;u<r-2;u+=.45,h++)s.rod([0,u,0],[h%2?.3:-.3,u,0],.015,.015,3,Ce.metal);return i.atlas.setM(e),un(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&un(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...l.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new H(u[0],u[1],u[2]).applyMatrix4(e))}var Ph=new H;function fr(i,e,t,n,s,r){i.lamps&&(Ph.set(t,n,s).applyMatrix4(e),i.lamps.push(Ph.x,Ph.y,Ph.z,r))}function dd(i,e,t,n={}){let s=i.color;s.setM(e),fr(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,Ce.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,Ce.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,Ce.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,Ce.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,hn);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],hn,{u0:0,u1:1,v0:0,v1:1})}function M1(i,e,t=.04){let n=i.color;n.setM(e),fr(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,Ce.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,Ce.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,Ce.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,hn),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],hn,{u0:0,u1:1,v0:0,v1:1})}function qo(i,e,t,n,s,r,o=!1,l=!1){let a=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let u=0;u<4;u++){let[h,p]=a[u],[m,x]=a[(u+1)%4];i.quad([h*n,e,p*n],[h*s,t,p*s],[m*s,t,x*s],[m*n,e,x*n],r)}o&&s>.001&&i.quad([-s,t,-s],[-s,t,s],[s,t,s],[s,t,-s],r),l&&i.quad([-n,e,-n],[n,e,-n],[n,e,n],[-n,e,n],r)}var p3=be("#202127");function Ll(i,e){let t=i.color;t.setM(e),fr(i,e,0,3.4,0,.9);let n=p3,s={noBottom:!0};t.cyl(0,0,0,.12,.1,.28,6,n),t.cyl(0,.28,0,.065,.05,2.8,6,n,!1),qo(t,3.04,3.17,.05,.17,n,!0);for(let[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.box(r*.155-.018,3.17,o*.155-.018,r*.155+.018,3.6,o*.155+.018,n,null,s);t.box(-.165,3.6,-.165,.165,3.64,.165,n,null,s),qo(t,3.64,3.84,.23,.05,n),qo(t,3.6,3.64,.2,.23,n,!1,!0),t.cyl(0,3.84,0,.035,0,.12,4,n,!1),i.lamp.setM(e),i.lamp.box(-.14,3.17,-.14,.14,3.6,.14,hn),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],hn,{u0:0,u1:1,v0:0,v1:1})}function pd(i,e,t){let n=Math.floor(t()*3),s=[Ce.red,be("#2f6fd8"),Ce.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,kn(s,.8)),i.atlas.setM(e),un(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function ld(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,be("#e6e6e1")),i.atlas.setM(e),un(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function S1(i,e,t){let n=i.color;n.setM(e);let s=t.pick([be("#c8ccd2"),be("#c0392b"),be("#2c6fb7"),be("#2b2b2b"),be("#e8c84a"),be("#e98fb0")]);for(let o of[-.52,.52])for(let l=0;l<12;l++){let a=l/12*Math.PI*2,u=(l+1)/12*Math.PI*2;n.rod([o+Math.cos(a)*.33,.34+Math.sin(a)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,Ce.black)}let r=(o,l)=>n.rod(o,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,Ce.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,Ce.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,Ce.metal)}function w1(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,Ce.orange),t.cyl(0,.04,0,.16,.03,.68,10,Ce.orange),t.cyl(0,.32,0,.115,.095,.12,10,Ce.white,!1)}function md(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,Ce.terracotta),i.leaf.setM(e),Gi(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}var m3=[[.35,.455],[.455,.56],[.56,.665]],o1=be("#6b4a32");function a1(i,e,t,n,s){let r=i.color,o=i.atlas,l=.62,a=ai("shop_p1"),u=a.u1-a.u0,h=a.v1-a.v0;r.setM(e),o.setM(e);for(let p of[-1,1])r.box(t+p*l-.03,0,n-.32,t+p*l+.03,1.32,n+.24,o1);for(let p=0,m=Math.floor(s()*3);p<3;p++){let x=.2+p*.4,_=x+.36,M=n-.26+p*.16,c=M+.14,[f,d]=m3[(p+m)%3];o.quad([t+l,x,M],[t-l,x,M],[t-l,_,c],[t+l,_,c],hn,{u0:a.u0+u*.14,u1:a.u0+u*.86,v0:a.v1-h*d,v1:a.v1-h*f}),r.box(t-l,x-.05,M-.06,t+l,x,M+.12,o1)}}function T1(i,e,t,n=.8){i.leaf.setM(e),Gi(i,[0,n*.3,0],0,n*.6,0,n,t()<.5?"leafA":"leafB",7,t,[1,1,1],[.5,.58,.66],[0,n*1.4])}function dr(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,Ce.metal),i.atlas.setM(e),n<0?Wi(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Vi(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function gd(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?Ce.white:Ce.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,Ce.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,Ce.black),i.atlas.setM(e),t<0?Wi(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Vi(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function E1(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,be("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,be("#f0a020"))}function vd(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,Ce.orange);let s=0,r=3.25,o=.42,l=14;for(let a=0;a<l;a++){let u=a/l*Math.PI*2,h=(a+1)/l*Math.PI*2,p=(m,x,_)=>[t*_,r+Math.sin(m)*x,s+Math.cos(m)*x-.25];Xo(n,p(0,0,-.02),p(t>0?h:u,o,-.02),p(t>0?u:h,o,-.02),Ce.orange),Xo(n,p(0,0,-.035),p(t>0?h:u,o*.86,-.035),p(t>0?u:h,o*.86,-.035),be("#dfe9f2"))}}var Ko=null;function A1(i){Ko=i}var Yo=1;function R1(i){Yo=i}function Gi(i,e,t,n,s,r,o,l,a,u,h,p,m=0){let x=Ko[o],_=1+(1-Yo)*.35;l=Math.max(2,Math.round(l*Yo));for(let M=0;M<l;M++){let c=a()*2-1,f=a()*2-1,d=a()*2-1;m&&(f=1.2+a());let g=Math.hypot(c,f,d)||1;c/=g,f/=g,d/=g;let v=-d,b=0,T=c;g=Math.hypot(v,T),g<.1&&(v=1,T=0,g=1),v/=g,T/=g;let w=f*T-d*b,y=d*v-c*T,S=c*b-f*v,E=Math.PI+(a()-.5)*.9,R=Math.cos(E),C=Math.sin(E),L=v*R+w*C,A=b*R+y*C,I=T*R+S*C,D=w*R-v*C,F=y*R-b*C,z=S*R-T*C,U=r*(1.3+a()*.45)*_/2,V=t+(a()-.5)*r*.6,k=n+(a()-.5)*r*(m?.15:.5),X=s+(a()-.5)*r*.6,j=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([we,Z])=>[V+(L*we+D*Z)*U,k+(A*we+F*Z)*U*(m?.6:1),X+(I*we+z*Z)*U]),Me=j.map(we=>{let Z=we[0]-e[0],q=we[1]-e[1],ve=we[2]-e[2],Pe=Math.hypot(Z,q,ve)||1;Z/=Pe,q/=Pe,ve/=Pe;let ee=we[0]-t,xe=we[1]-n,Fe=we[2]-s;return Pe=Math.hypot(ee,xe,Fe)||1,[Z*.7+ee/Pe*.3,q*.7+xe/Pe*.3+(m?.5:0),ve*.7+Fe/Pe*.3]}),Se=j.map(we=>Z0(h,u,.45+.55*Math.max(0,Math.min(1,(we[1]-p[0])/(p[1]-p[0])))));i.leaf.card(j,Me,x,Se)}}function xd(i,e,t,n="grass",s=1){let r=Ko[n],o=(.42+t()*.38)*s,l=o*1.2,a=t()*Math.PI,u=[0,1,0],h=[u,u,u,u],p=[.6,.64,.58],m=[1,1,1];i.leaf.setM(e);for(let x of[a,a+Math.PI/2]){let _=Math.cos(x)*l/2,M=Math.sin(x)*l/2;i.leaf.card([[-_,-.05,-M],[_,-.05,M],[_,o,M],[-_,o,-M]],h,r,[p,p,m,m])}}function Dl(i,e,t,n=1){let s=Ko.flowerbush;if(!s)return;let r=(.8+t()*.35)*n,o=r*1.7,l=t()*Math.PI,a=[0,1,0],u=[a,a,a,a],h=[.6,.64,.6],p=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let x=Math.cos(m)*o/2,_=Math.sin(m)*o/2;i.leaf.card([[-x,-.06,-_],[x,-.06,_],[x,r,_],[-x,r,-_]],u,s,[h,h,p,p])}}function Fh(i,e,t,n=1){let s=Ko.bedA;if(!s)return;let r=(.36+t()*.16)*n,o=r*2,l=t()*Math.PI,a=[0,1,0],u=[a,a,a,a],h=[.6,.64,.6],p=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let x=Math.cos(m)*o/2,_=Math.sin(m)*o/2;i.leaf.card([[-x,-.04,-_],[x,-.04,_],[x,r,_],[-x,r,-_]],u,s,[h,h,p,p])}}var g3=[.62,.68,.74],C1=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],v3=[0,1,2,0,2,3,0,3,4],x3=C1.map(([,i])=>Z0(g3,hn,i));function yd(i,e,t,n,s,r,o,l=1,a=null){let u=Ko[a||(o()<.5?"bankA":"bankB")],h=.82*l,p=(h+.06)*2.03,m=i.leaf;for(let x of v3){let[_,M]=C1[x],c=(_-.5)*p;m.vtx(e+s*c,t+M*(h+.06)-.06,n+r*c,0,1,0,u.u0+(u.u1-u.u0)*_,u.v0+(u.v1-u.v0)*M,x3[x])}}var P1=()=>Yo>.7?.9:1.25;function y3(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,Ce.trunk);for(let u=0;u<3;u++){let h=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(h)*1.1*n,s*.68,Math.sin(h)*1.1*n],.09*n,.05*n,5,Ce.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],a=7+Math.floor(t()*3);for(let u=0;u<a;u++){let h=t()*6.28,p=(.6+t())*1.3*n;Gi(i,r,Math.cos(h)*p,s*(.62+t()*.3),Math.sin(h)*p,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],l)}Gi(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],l)}function l1(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,Ce.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(2.2+t()*1.6)*n,m=[Math.cos(h)*p,s*(.62+t()*.18),Math.sin(h)*p];i.color.rod([0,s*.4,0],m,.12*n,.05*n,5,Ce.trunkDark),r.push(m),i.color.rod(m,[m[0]*1.25,m[1]+.9*n,m[2]*1.25],.05*n,.02*n,4,Ce.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],l=[s*.5,s*1.1],a=[.72,.62,.72];for(let u of r)for(let h=0;h<2;h++)Gi(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],a,l);Gi(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],a,l)}function _3(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,l=[r*.4,o*.45,.2],a=[r,o*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,Ce.trunkDark),s.rod(l,a,.15*n,.09*n,6,Ce.trunkDark),i.leaf.setM(e);let u=[[a[0],a[1]+.3,a[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[a[0]+.9*n,a[1]-.6,.8,1.1]];for(let[h,p,m,x]of u)s.rod(h>l[0]?l:a,[h,p-.2,m],.07*n,.04*n,4,Ce.trunkDark),Gi(i,[h,p-.8,m],h,p,m,x*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[p-.7,p+.5],1)}function b3(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,Ce.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(1.8+t()*1.4)*n,m=[Math.cos(h)*p,s*(.55+t()*.2),Math.sin(h)*p];i.color.rod([0,s*.38,0],m,.09*n,.04*n,5,Ce.trunkDark),r.push(m)}i.leaf.setM(e);let o=[0,s*.7,0],l=[s*.45,s*1.1],a=[.62,.52,.56];for(let u of r)Gi(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],a,l);Gi(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],a,l)}function M3(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,Ce.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],l=[.68,.6,.52];for(let a=0;a<7;a++){let u=s*(.34+a*.09),h=(2.1-a*.24)*n,p=t()*6.28;Gi(i,r,Math.cos(p)*h*.35,u,Math.sin(p)*h*.35,Math.max(.7,h)*1.05,"ginkgo",5,t,[1,1,1],l,o)}}function S3(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,be("#eeece6"));for(let u=0;u<7;u++){let h=t.range(.4,r*.85),p=h/r;s.cyl(o*p,h,0,.135*n*(1-p*.6),.13*n*(1-p*.6),.05,7,be("#2b2b30"),!1)}for(let u=0;u<7;u++){let h=r*(.45+t()*.5),p=t()*6.28,m=(.8+t()*1.6)*n,x=h/r;s.rod([o*x,h,0],[o*x+Math.cos(p)*m,h+m*.9,Math.sin(p)*m],.035*n,.012*n,4,be("#8b7f78"))}let l=r*.7,a=(1.5+t()*.5)*n;i.leaf.setM(e),Gi(i,[o*.7,l,0],o*.7,l,0,a,"twigs",3,t,[1,1,1],[.92,.9,.92],[l-a,l+a])}function w3(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Ce.trunkDark),i.foliage.setM(e);let r=be("#1d3a2c"),o=be("#eef2f8"),l=be("#d7e0ec");for(let a=0;a<4;a++){let u=s*(.16+a*.19),h=(1.9-a*.38)*n,p=s*.3;i.foliage.cyl(0,u,0,h,h*.3,p,9,r),i.foliage.cyl(0,u+p*.45,0,h*.72,.05,p*.62,9,a%2?o:l)}}function T3(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Ce.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,Ce.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,Ce.cedar)}var I1=()=>Yo>.7?[12,9,6,4,5]:[8,6,4,3,4],c1=[0,1,1],u1=[1,1,1],h1=[0,.82,1],E3=[1,.8,1],Ih=[0,1,0],A3=[0,0,1],Lh=i=>{let e=[];for(let t=0;t<=i;t++)e.push(t/i);return e};function Il(i,e,t,n){let s=2*e[0]-(i[0]+t[0])/2,r=2*e[1]-(i[1]+t[1])/2,o=2*e[2]-(i[2]+t[2])/2;return n.map(l=>{let a=1-l,u=a*a,h=2*a*l,p=l*l;return[u*i[0]+h*s+p*t[0],u*i[1]+h*r+p*t[1],u*i[2]+h*o+p*t[2]]})}var Dh=(i,e,t)=>i.map(n=>t+(e-t)*Math.pow(1-n,.7));function L1(i,e,t,n,s,r,o){let l=[0,.06,.15,.4,.7,1],a=-.25,u=e[1]+.1,h=Il([0,a,0],[e[0]*.5+s[0],(a+u)/2,e[2]*.5+s[1]],[e[0],u,e[2]],l),p=l.map((m,x)=>{let _=Math.max(0,1-(h[x][1]-a)/.75);return(t+(n-t)*Math.pow(m,1.3))*(1+.62*Math.pow(_,2.5))});h.push([e[0],u+n*.5,e[2]]),p.push(n*.1),i.tube(h,p,r,o,A3)}var Hi={cells:null,bcells:null};function R3(i,e,t,n=1){let s=t()<.3?1.22:1,r=t.range(6.2,8)*n*s,o=i.bark;o.setM(e);let l=r*t.range(.3,.38),a=Et(Math.floor(r*7919+l*104729)),[u,h,p,,m]=I1();L1(o,[0,l,0],.27*n*s,.2*n*s,[a.range(-.05,.05)*n,a.range(-.05,.05)*n],u,u1);let x=r*.64,_=t.range(2.6,3.2)*n*s,M=t.range(2,2.5)*n*s,c=n*s,f=[],d=5+Math.floor(t()*3);for(let y=0;y<d;y++){let S=y/d*6.283+t()*.6,E=t.range(-.15,.75),R=Math.sqrt(1-E*E);f.push([Math.cos(S)*R,E,Math.sin(S)*R])}f.push([0,1,0]);let g=[[0,x+.15*M,0,1.76*c,1]],v=26+Math.floor(t()*7);for(let y=0;y<v;y++){let S=t()*2-1,E=t.range(-.55,1),R=t()*2-1,C=Math.hypot(S,E,R)||1;S/=C,E/=C,R/=C;let L=f[0],A=-2;for(let D of f){let F=D[0]*S+D[1]*E+D[2]*R;F>A&&(A=F,L=D)}S=S*.45+L[0]*.55,E=E*.45+L[1]*.55,R=R*.45+L[2]*.55,C=Math.hypot(S,E,R)||1,S/=C,E/=C,R/=C;let I=t.range(.78,.95);g.push([S*_*I,x+E*M*I,R*_*I,t.range(.8,1.1)*c,0])}for(let y=0;y<4;y++){let S=f[y%d],E=Math.hypot(S[0],S[2])||1,R=S[0]/E,C=S[2]/E,L=[R*.06*c,l*.86,C*.06*c],A=[S[0]*_*.55,x+Math.min(0,S[1])*M*.4-.3*n,S[2]*_*.55],I=[(L[0]+A[0])*.5-R*.12*c,(L[1]+A[1])*.5+.18*c,(L[2]+A[2])*.5-C*.12*c],D=Lh(m),F=Il(L,I,A,D);o.tube(F,Dh(D,.16*c,.06*n),h,u1,Ih);for(let z=0,U=1+(a()<.5?1:0);z<U;z++){let V=F[m-2+z],k=Math.atan2(C,R)+(z?1:-1)*a.range(.35,.8),X=a.range(.9,1.4)*c,j=[V[0]+Math.cos(k)*X*.8,V[1]+X*a.range(.6,.9),V[2]+Math.sin(k)*X*.8],Me=Lh(3);o.tube(Il(V,[(V[0]+j[0])/2,(V[1]+j[1])/2+.1*X,(V[2]+j[2])/2],j,Me),Dh(Me,.07*c,.025*n),p,E3,Ih)}}let b=t(),T=b<.5?[1,1,.92+b*.16]:[1-(b-.5)*.12,1,.9],w=i.gleaf;w.setM(e);for(let[y,S,E,R,C]of g){let L=y,A=(S-x)*(_/M)+.1*_,I=E,D=Math.hypot(L,A,I)||1;L/=D,A/=D,I/=D,C&&(L=I=0,A=-1);let F=Math.min(1,Math.max(0,(S-(x-M))/(2*M))),z=C?.55:.72+.28*F,U=R/.8*.88;w.bill(y,S,E,L,A,I,U,U,Hi.cells[Math.floor(t()*Hi.cells.length)],[T[0]*z,T[1]*z,T[2]*z],Cg,.88)}}function f1(i,e,t,n=1,s=!1){let r=i.bark;r.setM(e);let o=s?1:0,l=t.range(2.2,2.7)*n,a=t.range(.3,.35)*n,u=[t.range(-.15,.15)*n,l,o*.3*n],h=Et(Math.floor(l*7919+a*104729)+(s?17:0)),[p,m,x,_,M]=I1();L1(r,u,a,a*.8,[h.range(-.07,.07)*n,h.range(-.07,.07)*n],p,c1);let c=t.range(6.3,6.9)*n,f=-o*.5*n,d=t.range(4,4.5)*n,g=t.range(3.6,4)*n,v=t.range(1.7,2)*n,b=t()<.35?4:3,T=s?-Math.PI/2+t.range(-.35,.35):t()*6.283;for(let L=0;L<b;L++){let A=T+L/b*6.283+t.range(-.3,.3),I=Math.cos(A),D=Math.sin(A),F=t.range(.32,.46),z=[u[0]+I*d*F,c-v*t.range(.35,.55),u[2]*.5+f*.4+D*g*F],U=[u[0]+(z[0]-u[0])*.45+I*.25*n,l+(z[1]-l)*.55,u[2]+(z[2]-u[2])*.45+D*.25*n],V=[u[0]+I*a*.3,l-a*.45,u[2]+D*a*.3],k=Lh(M),X=Il(V,U,z,k);r.tube(X,Dh(k,a*.64,a*.3),m,c1,Ih);let j=X[M-1],Me=L%2?1:2;for(let Se=0;Se<Me;Se++){let we=(Se?1:-1)*t.range(.3,.9),Z=t.range(1.2,1.9)*n,q=[z[0]+Math.cos(A+we)*Z,z[1]+t.range(.7,1.2)*n,z[2]+Math.sin(A+we)*Z],ve=Lh(3),Pe=Il(j,[(j[0]+q[0])/2,(j[1]+q[1])/2+Z*.1,(j[2]+q[2])/2],q,ve);r.tube(Pe,Dh(ve,a*.27,.035*n),x,h1,Ih);let ee=Pe[1],xe=A+we+(h()<.5?-1:1)*h.range(.5,1),Fe=h.range(.8,1.3)*n,ke=[ee[0]+Math.cos(xe)*Fe,ee[1]+Fe*h.range(.15,.45),ee[2]+Math.sin(xe)*Fe];r.tube([ee,[(ee[0]+ke[0])/2,(ee[1]+ke[1])/2+.06*Fe,(ee[2]+ke[2])/2],ke],[.05*n,.032*n,.014*n],_,h1)}}let w=[],y=6+Math.floor(t()*2);for(let L=0;L<y;L++){let A=L/y*6.283+t()*.5,I=t.range(-.2,.6),D=Math.sqrt(1-I*I);w.push([Math.cos(A)*D,I,Math.sin(A)*D])}w.push([0,1,0]);let S=[[-d*.3,c,f,1.75*n,1],[d*.3,c,f,1.75*n,1]],E=21+Math.floor(t()*4);for(let L=0;L<E;L++){let A=t()*2-1,I=t.range(-.3,1),D=t()*2-1,F=Math.hypot(A,I,D)||1;A/=F,I/=F,D/=F;let z=w[0],U=-2;for(let k of w){let X=k[0]*A+k[1]*I+k[2]*D;X>U&&(U=X,z=k)}A=A*.5+z[0]*.5,I=I*.5+z[1]*.5,D=D*.5+z[2]*.5,F=Math.hypot(A,I,D)||1,A/=F,I/=F,D/=F;let V=t.range(.8,.95);S.push([A*d*V,c+I*v*V,f+D*g*V,t.range(1,1.3)*n,0])}let R=[1,t.range(.96,1.03),t.range(.97,1.02)],C=i.gblossom;C.setM(e);for(let[L,A,I,D,F]of S){let z=L/d,U=(A-c)/v+.12,V=(I-f)/g,k=Math.hypot(z,U,V)||1;z/=k,U/=k,V/=k,F&&(z=V=0,U=-1);let X=Math.min(1,Math.max(0,(A-(c-v))/(2*v))),j=F?.62:.8+.2*X,Me=D/.8*.86;C.bill(L,A,I,z,U,V,Me,Me,Hi.bcells[Math.floor(t()*Hi.bcells.length)],[R[0]*j,R[1]*j,R[2]*j],Pg,.86)}}var D1={broad:(i,e,t,n)=>(Hi.cells?R3:y3)(i,e,t,n),sakura:(i,e,t,n)=>Hi.bcells?f1(i,e,t,n):l1(i,e,t,n),sakuraAve:(i,e,t,n)=>Hi.bcells?f1(i,e,t,n,!0):l1(i,e,t,n),pine:_3,cedar:T3,maple:b3,ginkgo:M3,birch:S3,snowcedar:w3},d1={};function N1(i,e){let t=i+e,n=d1[t];if(!n){let s={color:new Jt,foliage:new Jt,leaf:new Jt({uv:!0}),gleaf:new Jt({uv:!0,off:!0}),gblossom:new Jt({uv:!0,off:!0}),bark:new Jt({uv:!0,idx:!0})};D1[i](s,new et,Et(1e3+e*77+i.length*13),1),n=d1[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays(),g:s.gleaf.toArrays(),b:s.gblossom.toArrays(),k:s.bark.toArrays()}}return n}function F1(){for(let i in D1)for(let e=0;e<4;e++)N1(i,e)}function Xn(i,e,t,n,s=1){let r=N1(t,Math.floor(n()*4)),o=e.clone().scale(new H(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o),r.g.n&&i.gleaf.stamp(r.g,o),r.b.n&&i.gblossom.stamp(r.b,o),r.k.n&&i.bark.stamp(r.k,o)}var C3=new Set(["win0","win2","win5","win6"]),Ms=(i,e,t)=>e<t?i+(e<t*.35&&C3.has(i)?"C":"L"):i;function Nl(i,e,t,n,s,r,o){let l=Math.max(1,Math.round(t/3)),a=t/l;for(let u of[-1,1])for(let h=0;h<n.length-1;h++)for(let p=0;p<l;p++){let m=h>0&&r()<.3?Ms("win6",r(),o):r()<.2?"win5":"plain";(u>0?Vi:Wi)(i,u*e/2,p*a,(p+1)*a,n[h],n[h+1],m,s)}}function Fl(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],Ce.roof);let o=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+o,l,Ce.parapet),i.box(-e/2,n,t-l,e/2,n+o,t,Ce.parapet),i.box(-e/2,n,0,-e/2+l,n+o,t,Ce.parapet),i.box(e/2-l,n,0,e/2,n+o,t,Ce.parapet),s()<.4){let a=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[h,p]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(a+h-.05,n,u+p-.05,a+h+.05,n+1,u+p+.05,Ce.metal);i.cyl(a,n+1,u,.85,.85,1.3,12,be("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,Ce.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,Ce.metal)}function _d(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,Ce.black);let r="vs"+Math.floor(s()*10);Wi(i.atlas,e-.065,-.88,-.12,t,n,r),Vi(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,Ce.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,Ce.metal)}var rd=be("#d9d6cf");function P3(i,e,t,n,s,r=""){let o=Math.floor(s()*10),l=r||"vsB"+o,a=Math.min(1.15,(n-t)*.417),u=-.14,h=u-a,p=.1,m=i.color;m.quad([e+p,t,h],[e-p,t,h],[e-p,n,h],[e+p,n,h],rd),m.quad([e-p,n,u],[e+p,n,u],[e+p,n,h],[e-p,n,h],rd),m.quad([e-p,t,h],[e+p,t,h],[e+p,t,u],[e-p,t,u],rd),Wi(i.atlas,e-p,h,u,t,n,l),Vi(i.atlas,e+p,h,u,t,n,l);for(let x of[t+.28,n-.34])i.color.box(e-.03,x,u,e+.03,x+.06,0,Ce.metal)}function qi(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,Ce.concrete,null,{noBottom:!0}),n.type){case"shop":return N3(i,e,t,n);case"machiya":return F3(i,e,t,n);case"apt":return U3(i,e,t,n);case"office":return B3(i,e,t,n);case"konbini":return O3(i,e,t,n);case"house":return n.ptype?V3(i,e,t,n):z3(i,e,t,n);case"tower":return W3(i,e,t,n)}}var U1=new Set(["glass","door","cafe","noren"]),p1=["shop_p0","shop_p3","shop_p4","shop_p5","shop_p6","shop_p8","shop_p9"],I3=["shop_p2","shop_p2","shop_p7","shop_p10"],L3={shop_p1:"hs9",shop_p3:"hs7",shop_p4:"hs5",shop_p5:"hs_\u82B1\u5C4B",shop_p6:"hsN_\u6D0B\u54C1\u5E97",shop_p8:"hs13",shop_p9:"hs12"},D3={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function N3(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.6,m=3,x=p+(o-1)*m,_=Math.max(1,Math.round(s/3)),M=s/_,c=-s/2,f=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),d=[],g=0;for(let y=0;y<_;y++){let S=y1(t,"shop_"+f[y%f.length]);d.push(S),!g&&S.startsWith("shop_glass")&&S.length>10&&(g=+S.slice(10))}for(let y=0;y<_;y++){let S=f[y%f.length];un(u,c+y*M,c+(y+1)*M,0,p,0,g&&S==="glass"?"shop_glass"+g:d[y]),U1.has(S)&&fr(i,e,c+(y+.5)*M,1.9,-.8,.7)}let v=t.pick([0,0,1,5,0,1]),b=[0,p];for(let y=1;y<o;y++)b.push(p+y*m);for(let y=1;y<o;y++)for(let S=0;S<_;S++){let E=S%2===1&&t()<.3?5:v;un(u,c+S*M,c+(S+1)*M,b[y],b[y+1],0,Ms("win"+E,t(),a),l)}Nl(u,s,r,b,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],kn(l,.8)),Fl(h,s,r,x,t);let T=s*.94;h.box(-T/2,p-.8,-.3,T/2,p+.08,-.02,Ce.black);let w="hs"+Math.floor(t()*14);if(un(u,-T/2,T/2,p-.8,p+.08,-.305,D3[g]||w),t()<.55){let y=t.pick(f3),S=p-.85;h.quad([s/2-.2,S-.35,-1.1],[-s/2+.2,S-.35,-1.1],[-s/2+.2,S,-.02],[s/2-.2,S,-.02],y),h.quad([s/2-.2,S-.6,-1.1],[-s/2+.2,S-.6,-1.1],[-s/2+.2,S-.35,-1.1],[s/2-.2,S-.35,-1.1],kn(y,.85))}if(o>=2&&t()<.85){let y=(t()<.5?1:-1)*(s/2-.35);_d(i,y,p+.3,Math.min(x-.15,p+2.8),t)}for(let y=1;y<o;y++)if(t()<.4){let S=Math.floor(t()*_),E=c+S*M+.15,R=c+(S+1)*M-.15,C=b[y];h.box(E,C-.12,-.9,R,C,0,Ce.parapet),un(u,E,R,C,C+1,-.9,"rail"),Wi(u,E,-.9,0,C,C+1,"rail"),Vi(u,R,-.9,0,C,C+1,"rail"),t()<.45&&V1(h,E+.1,R-.1,C+1.95,-.55,t),t()<.6&&ld(i,e,(E+R)/2+.6,C,-.75)}else if(t()<.35){let S=Math.floor(t()*_);ld(i,e,c+(S+.5)*M,b[y]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}h.cyl(c+.12,0,-.08,.05,.05,x,6,Ce.pipe,!1),h.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,be("#d9d9d3")),o>=3&&t()<.18&&B1(i,s,x,r,t)}function F3(i,e,t,n){let{w:s,d:r,floors:o,litP:l}=n,a=i.atlas,u=i.color,h=3.6,p=2.9,m=h+(o-1)*p,x=-s/2,_=Math.max(2,Math.round(s/3)),M=s/_,c=be("#5c4030"),f=be("#3a2a20"),d=t.pick([["glass","door","glass"],["noren","door"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),g=n.at!==void 0&&Math.abs(n.at-(n.side<0?139:146))<s/2&&o>=2?n.side:0;g&&(d=["glass","door","glass"]);let v=Et(Math.floor((i.atlas.e[12]*71.3+i.atlas.e[14]*37.9)*977)^11101),b=t.pick(["shop_p0","shop_p0","shop_p1","shop_p3"]),T=[],w=g?g<0?"shop_p1":"shop_p6":b==="shop_p1"?b:p1[Math.floor(v()*p1.length)],y=v.pick(I3),S=v()<.65?v.pick(["shop_p7","shop_p10"]):"";for(let ee=0;ee<_;ee++){let xe=d[ee%d.length];T.push(xe==="glass"?w:xe==="door"?y:xe==="cafe"?"shop_p3":(Fe=>xe==="noren"&&S||Fe)(y1(t,"shop_"+xe)))}let E=t(),R=E<.5?"":d.includes("glass")&&b==="shop_p1"?"hs9":d.includes("cafe")||d.includes("glass")&&b==="shop_p3"?"hs7":"",C=T.includes("shop_p7")?"hs0":T.includes("shop_p10")?"hs3":"",L=g?g>0?"hsN_\u6D0B\u54C1\u5E97":"hs9":d.includes("glass")&&E>=.2?L3[w]||C:d.includes("cafe")&&E>=.5?"hs7":E>=.2?C:"";for(let ee=0;ee<_;ee++){let xe=d[ee%d.length];un(a,x+ee*M,x+(ee+1)*M,0,h,0,T[ee]),U1.has(xe)&&fr(i,e,x+(ee+.5)*M,1.9,-.8,.7)}let A=!!n.plaster,I=n.tint,D=[0,h];for(let ee=1;ee<o;ee++)D.push(h+ee*p);let F=A?v.pick(["win7","win7","win9","win10"]):v.pick(["win8","win8","win11"]);for(let ee=1;ee<o;ee++)for(let xe=0;xe<_;xe++){let Fe=A&&xe%2===1&&t()<.3?"win5":F;un(a,x+xe*M,x+(xe+1)*M,D[ee],D[ee+1],0,Ms(Fe,t(),l),Fe==="win5"?I:hn)}{let ee=Math.max(1,Math.round(r/3)),xe=r/ee;for(let Fe of[-1,1])for(let ke=0;ke<D.length-1;ke++)for(let Le=0;Le<ee;Le++){let Ye=A?ke>0?Ms(t()<.5?"win7":"win6",t(),l):"plain":ke>0&&t()<.45?Ms("win4",t(),l):"woodwall";(Fe>0?Vi:Wi)(a,Fe*s/2,Le*xe,(Le+1)*xe,D[ke],D[ke+1],Ye,A&&Ye[3]!=="7"?I:hn)}}u.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],A?kn(I,.8):be("#6a5240"));for(let ee of[x,-x])u.box(ee-.09,0,-.12,ee+.09,m,.02,f);if(A)for(let ee=2;ee<o;ee++)u.box(x,D[ee]-.1,-.08,-x,D[ee]+.06,0,f);let{RC:z,k:U}=O1(i,n,s,r,m,t,!A),V=h+.62,k=1.05,X=.7,j=Math.max(2,Math.round((s+.3)/3)),Me=Nh.has("kawaraC")?ai("kawaraC"):null;for(let ee=0;ee<j;ee++){let xe=x-.15+(s+.3)*ee/j,Fe=x-.15+(s+.3)*(ee+1)/j;a.quad([Fe,V-X,-k],[xe,V-X,-k],[xe,V,0],[Fe,V,0],Me?hn:z,Me||U)}u.quad([x-.15,V-X-.03,-k],[-x+.15,V-X-.03,-k],[-x+.15,V-.1,0],[x-.15,V-.1,0],c);let Se=Math.min(s*.9,4.4),we=V-X+.02,Z=we-.62;u.box(-Se/2,Z,-k-.02,Se/2,we,-k+.07,f);{let ee=R?"":"hs"+Math.floor(t()*14);un(a,-Se/2,Se/2,Z,we,-k-.025,L||ee||"hs"+Math.floor(v()*14))}for(let ee of[-Se/2+.25,Se/2-.25])u.box(ee-.03,we,-k+.02,ee+.03,V-X*.1,-k+.06,f);i.sodium.setM(e),u.noShadow=!0;for(let ee=0;ee<_;ee++){let xe=x+(ee+.5)*M;u.box(xe-.008,Z-.02,-.62,xe+.008,V-X*.6,-.6,f),i.sodium.box(xe-.06,Z-.16,-.67,xe+.06,Z-.04,-.55,null)}u.noShadow=!1;let q=!1;if(t()<.5||g){q=!0;let ee=g?r1[0]:t.pick(r1),xe=Z-.12;u.quad([s/2-.2,xe-.32,-.95],[-s/2+.2,xe-.32,-.95],[-s/2+.2,xe,-.02],[s/2-.2,xe,-.02],ee),u.quad([s/2-.2,xe-.55,-.95],[-s/2+.2,xe-.55,-.95],[-s/2+.2,xe-.32,-.95],[s/2-.2,xe-.32,-.95],kn(ee,.85))}if(o>=2&&(!A||t()<.5)){let ee=D[1]+.42,xe=-.5,Fe=x+.12,ke=-x-.12;u.box(Fe,ee-.07,xe-.04,ke,ee,0,c);for(let Le=0;Le<_;Le++)un(a,x+.12+(s-.24)*Le/_,x+.12+(s-.24)*(Le+1)/_,ee,ee+.95,xe,"wrail");Wi(a,Fe,xe,0,ee,ee+.95,"wrail"),Vi(a,ke,xe,0,ee,ee+.95,"wrail"),i.leaf.setM(e);for(let Le=0;Le<_;Le++)if(t()<.7){let Ye=x+(Le+.5)*M,ne=Math.min(M*.7,1.6);u.noShadow=!0,u.box(Ye-ne/2,ee+.72,xe-.2,Ye+ne/2,ee+.92,xe-.02,be("#7a5236")),u.noShadow=!1;for(let Te=Ye-ne/2+.2;Te<Ye+ne/2-.1;Te+=.32)Gi(i,[Te,ee+.95,xe-.11],Te,ee+1.05,xe-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[ee+.9,ee+1.3])}}if(o>=2&&(t()<.9||g)){let ee=t()<.5?1:-1,xe=g||ee;P3(i,xe*(s/2-.35),V+.1,Math.min(m-.2,V+2.8),t,g?g<0?"vsB10":"vsB0":""),s>7&&t()<.35&&_d(i,-xe*(s/2-.35),h+.8,Math.min(m-.2,h+2.5),t)}{let ee=d.includes("noren")||d.includes("cafe"),xe=q?0:ee?2:t()<.3?1:0;i.sodium.setM(e);for(let Fe=0;Fe<xe;Fe++){let ke=xe===2?(Fe?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),Le=Z-.5;u.noShadow=!0,u.box(ke-.006,Le+.42,-k+.12,ke+.006,Z,-k+.14,f),i.sodium.cyl(ke,Le,-k+.13,.11,.16,.18,10,null,!1),i.sodium.cyl(ke,Le+.18,-k+.13,.16,.11,.18,10,null,!1),u.cyl(ke,Le-.035,-k+.13,.1,.1,.04,8,f),u.cyl(ke,Le+.355,-k+.13,.1,.1,.04,8,f),u.noShadow=!1}}let ve=1e9,Pe=1e9;w==="shop_p1"&&d.includes("glass")&&(ve=x+(d.indexOf("glass")+.5)*M,a1(i,e,ve,-.62,t)),g<0&&_>=3&&(Pe=x+2.5*M,a1(i,e,Pe,-.62,t));for(let ee=x+.45+t()*.4;ee<-x-.3;ee+=.7+t()*1.3)t()<.7&&Math.abs(ee-ve)>.95&&Math.abs(ee-Pe)>.95&&md(i,e,t,ee,-.4);i.color.setM(e),i.atlas.setM(e)}function B1(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,l=n*.3;for(let a of[-r*.35,r*.35])i.color.box(a-.06,t,l,a+.06,t+1.2+o,l+.12,Ce.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+o,l+.3,Ce.metal),un(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,l+.115,"bb"+Math.floor(s()*4))}function U3(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.2,m=2.95,x=p+(o-1)*m,_=Math.max(2,Math.round(s/3.2)),M=s/_,c=-s/2,f=[0,p];for(let v=1;v<o;v++)f.push(p+v*m);for(let v=0;v<_;v++)un(u,c+v*M,c+(v+1)*M,0,p,0,v===Math.floor(_/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),v===Math.floor(_/2)?hn:l);let d="bal"+Math.floor(t()*3),g=kn(l,.97);for(let v=1;v<o;v++){let b=f[v];for(let T=0;T<_;T++)un(u,c+T*M,c+(T+1)*M,b,f[v+1],0,Ms("win2",t(),a),l);h.box(c,b-.15,-1.3,-c,b,0,g),h.box(c,b,-1.3,-c,b+1.1,-1.18,g,null,{noBottom:!0});for(let T=0;T<_;T++)un(u,c+T*M,c+(T+1)*M,b,b+1.1,-1.305,d,l);for(let T=0;T<=_;T++)h.box(c+T*M-.05,b,-1.18,c+T*M+.05,b+2.4,0,kn(l,.92));for(let T=0;T<_;T++){let w=t(),y=c+T*M+.2,S=c+(T+1)*M-.2;w<.34?V1(h,y,S,b+2.02,-.98,t):w<.46&&X3(h,y+.25,Math.min(S-.25,y+1.9),b+1.1,-1.3,t)}i.atlas.setM(e);for(let T=0;T<_;T++)t()<.55&&(ld(i,e,c+(T+.78)*M,b,-.55),i.atlas.setM(e),i.color.setM(e))}h.box(c,x-.15,-1.3,-c,x,0,g),Nl(u,s,r,f,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],kn(l,.8)),Fl(h,s,r,x,t,!0)}function B3(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=4,m=3.4,x=p+(o-1)*m,_=Math.max(2,Math.round(s/3)),M=s/_,c=-s/2,f=[0,p];for(let d=1;d<o;d++)f.push(p+d*m);for(let d=0;d<_;d++)un(u,c+d*M,c+(d+1)*M,0,p,0,d===1?"shop_door":"shop_glass");for(let d=1;d<o;d++)for(let g=0;g<_;g++)un(u,c+g*M,c+(g+1)*M,f[d],f[d+1],0,Ms("win3",t(),a),l);Nl(u,s,r,f,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],kn(l,.8)),Fl(h,s,r,x,t,!0),t()<.6&&_d(i,(t()<.5?1:-1)*(s/2-.3),p+.4,Math.min(x-.3,p+4.5),t),t()<.3&&B1(i,s,x,r,t)}function O3(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,l=i.color,a=4.4,u=-s/2,h=Math.max(3,Math.round(s/3)),p=s/h;for(let m=0;m<h;m++)un(o,u+m*p,u+(m+1)*p,0,3.4,0,"shop_konbini"),fr(i,e,u+(m+.5)*p,1.9,-.8,.8);l.box(u,3.4,-.35,-u,a,0,Ce.white),un(o,u,-u,3.4,a,-.355,"konbini_band"),Nl(o,s,r,[0,a],be("#f2f2ee"),t,0),Fl(l,s,r,a,t)}var m1=(i,e)=>e?be("#7a5a42"):i.tint,od=null,k3=()=>{if(!od){let i=ai("kawara"),e=16/272*(i.u1-i.u0);od={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return od};function O1(i,e,t,n,s,r,o){let l=i.atlas,a=i.color,u=!!e.snow,h=u?.75:.6,p=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),m=u?ai("white"):k3(),x=u?be("#f3f5fa"):be("#c8ccd8"),_=u?be("#e4e8f0"):be("#3d4456"),M=u?1:Math.max(2,Math.round((t+2*h)/3)),c=g=>-t/2-h+(t+2*h)*g/M;for(let g=0;g<M;g++){let v=c(g),b=c(g+1);l.quad([b,s-.25,-h],[v,s-.25,-h],[v,s+p,n/2],[b,s+p,n/2],x,m),l.quad([v,s-.25,n+h],[b,s-.25,n+h],[b,s+p,n/2],[v,s+p,n/2],x,m)}let f=(g,v,b,T,w,y)=>{y<0?(a.quad([v,b,w],[g,b,w],[g,T,w],[v,T,w],_),a.quad([g,b,w],[v,b,w],[v,b,w+.08],[g,b,w+.08],_)):(a.quad([g,b,w],[v,b,w],[v,T,w],[g,T,w],_),a.quad([v,b,w],[g,b,w],[g,b,w-.08],[v,b,w-.08],_))};for(let[g,v]of[[-h,0],[n+h,n]])f(-t/2-h,t/2+h,s-.42,s-.22,g<0?g-.04:g+.04,g<0?-1:1),a.quad(g<0?[-t/2-h,s-.26,g]:[t/2+h,s-.26,g],g<0?[t/2+h,s-.26,g]:[-t/2-h,s-.26,g],g<0?[t/2+h,s-.26,v]:[-t/2-h,s-.26,v],g<0?[-t/2-h,s-.26,v]:[t/2+h,s-.26,v],kn(m1(e,o),.62));for(let g of[-1,1]){let v=g*(t/2+h+.02),b=.2,T=[v,s-.25,-h],w=[v,s+p,n/2],y=[v,s-.25,n+h],S=E=>[E[0],E[1]-b,E[2]];g>0?(a.quad(S(w),S(T),T,w,_),a.quad(S(y),S(w),w,y,_)):(a.quad(S(T),S(w),w,T,_),a.quad(S(w),S(y),y,w,_))}let d=m1(e,o);if(Xo(a,[-t/2,s,0],[-t/2,s,n],[-t/2,s+p-.1,n/2],d),Xo(a,[t/2,s,n],[t/2,s,0],[t/2,s+p-.1,n/2],d),a.box(-t/2-h,s+p-.05,n/2-.15,t/2+h,s+p+.18,n/2+.15,u?be("#f6f7fb"):be("#3d4456")),u){a.box(-t/2-h-.05,s-.42,-h-.1,t/2+h+.05,s-.12,-h+.3,be("#eef1f7")),a.box(-t/2-h-.05,s-.42,n+h-.3,t/2+h+.05,s-.12,n+h+.1,be("#eef1f7"));for(let g=-t/2;g<t/2;g+=.45+r()*.5)a.cyl(g,s-.42-.35,-h+.02,0,.04,.35,4,be("#dfe8f3"),!1)}return{RC:x,k:m,fascia:f,nS:M}}function z3(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=2.9,m=o*p,x=-s/2,_=t()<.5,M=Math.max(2,Math.round(s/3)),c=s/M,f=[];for(let w=0;w<=o;w++)f.push(w*p);let d=_?hn:l;for(let w=0;w<o;w++)for(let y=0;y<M;y++){let S=_?"win4":"win0";w===0&&y===0?S="shop_house":S=Ms(S,t(),a),un(u,x+y*c,x+(y+1)*c,f[w],f[w+1],0,S,S==="shop_house"?hn:d)}Nl(u,s,r,f,_?be("#9a7a62"):l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],kn(l,.75));let{RC:g,k:v,fascia:b,nS:T}=O1(i,n,s,r,m,t,_);if(o>1){let w=p+.05;for(let y=0;y<T;y++){let S=-s/2-.1+(s+.2)*y/T,E=-s/2-.1+(s+.2)*(y+1)/T;u.quad([E,w-.3,-.75],[S,w-.3,-.75],[S,w+.05,0],[E,w+.05,0],g,v)}b(-s/2-.1,s/2+.1,w-.42,w-.28,-.79,-1)}if(n.fence){let w=-n.fence,y=1.2;for(let[S,E]of[[-s/2,-1],[.4,s/2]])h.box(S,0,w-.08,E,y,w+.08,Ce.concrete),un(u,S,E,0,y,w-.085,"block")}}var cd={byZone:null};function k1(i){let e={};for(let t of i)for(let n of t.zones)(e[n]||(e[n]=[])).push(t);cd.byZone=e}function Uh(i,e){let t=cd.byZone&&cd.byZone[i];return t?t[Math.floor(e()*t.length)]:null}var Pl={u0:0,u1:0,v0:0,v1:0},cs=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],g1=(i,e)=>{for(let t=0;t<4;t++)cs[t][0]=i[e+t*3],cs[t][1]=i[e+t*3+1],cs[t][2]=i[e+t*3+2]},H3=(i,e,t)=>{let n=Math.sin(e*12.9898+t*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;return 24+Math.floor((n-Math.floor(n))*231)};function V3(i,e,t,n){let s=n.ptype,r=i.atlas,o=i.color,l=ai(s.f),a=ai(s.s);for(let u of s.pieces){let h=u.t==="f"?l:a,p=h.u1-h.u0,m=h.v1-h.v0;Pl.u0=h.u0+u.uv[0]*p,Pl.u1=h.u0+u.uv[2]*p,Pl.v1=h.v1-u.uv[1]*m,Pl.v0=h.v1-u.uv[3]*m,g1(u.p,0),u.lit&&r.hasLit&&(r.litV=s.day?6:H3(r,u.p[0]+u.p[2],u.p[1])),r.quad(cs[0],cs[1],cs[2],cs[3],hn,Pl),r.litV=0}o.noShadow=!0;for(let u of s.soffits)g1(u,0),o.quad(cs[0],cs[1],cs[2],cs[3],s.soffit);if(o.noShadow=!1,n.fence){let u=-n.fence,h=1.1,p=s.ww+1;for(let[m,x]of[[-p/2,-1],[.4,p/2]])o.box(m,0,u-.08,x,h,u+.08,Ce.concrete),un(r,m,x,0,h,u-.085,"block")}}function W3(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.4,m=o*p,x=Math.max(2,Math.round(s/6)),_=s/x,M=-s/2,c=t()<.5?"win3":"win2",f=[];for(let v=0;v<=o;v++)f.push(v*p);for(let v=0;v<o;v++)for(let b=0;b<x;b++)un(u,M+b*_,M+(b+1)*_,f[v],f[v+1],0,Ms(c,t(),a),l);let d=Math.max(1,Math.round(r/6)),g=r/d;for(let v of[-1,1])for(let b=0;b<o;b++)for(let T=0;T<d;T++)(v>0?Vi:Wi)(u,v*s/2,T*g,(T+1)*g,f[b],f[b+1],Ms(c,t(),a),l);Fl(h,s,r,m,t,!0)}function bd(i,e,t,n){let s=i.color,r=be("#8d9096"),o=be("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,a=-n+.62;s.box(-.14,5.08,l,.14,5.56,a,o);let u=t*.141;i.atlas.setM(e),(t>0?Vi:Wi)(i.atlas,u,l,a,5.08,5.56,"signal");let h=t>0?a:l,p=t>0?-1:1;for(let x=0;x<3;x++){let _=h+p*(.2+x*.4);s.box(t>0?.14:-.36,5.47,_-.15,t>0?.36:-.14,5.5,_+.15,o)}let m=h+p*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,m-.11,t>0?.16:-.145,5.43,m+.11,hn)}function z1(i,e,t,n){let s=i.color,r=be("#3d6ea8"),o=be("#e8eef2"),l=be("#c7c5bf"),a=5.35;s.setM(e),s.box(-1.1,a-.65,-t,1.1,a,t,r);for(let u of[-1.1,1])s.box(u,a,-t,u+.1,a+1.1,t,o),s.box(u-.02,a+1.1,-t,u+.12,a+1.18,t,r);i.atlas.setM(e),Wi(i.atlas,-1.105,-2.2,2.2,a-.62,a-.06,n),Vi(i.atlas,1.105,-2.2,2.2,a-.62,a-.06,n),s.setM(e);for(let u of[-1,1]){let h=u*(t-1.65),p=u*(t-.15),m=Math.min(h,p),x=Math.max(h,p);s.box(-.45,.15,m+.3,.45,a-.65,x-.3,r);let _=20,M=(a-.15)/_;for(let c=0;c<_;c++)s.box(1.1+c*.3,.15,m,1.1+(c+1)*.3,a-(c+1)*M+.04,x,l);s.box(1.1,a-.1,m-.05,1.1+_*.3,a-.02,m+.05,r)}}function H1(i,e,t,n,s,r,o){let l=i.color,a=1.22,u=3.55,h=6.7,p=be("#c8c5bd"),m=be("#ebe8de"),x=be("#7a5a42"),_=be("#5e4433"),M=be("#4d5468");l.setM(e),l.box(t,-1.4,u,n,a,h,p,null,{noBottom:!0}),l.box(t,a,u,n,a+.025,u+.32,m),l.box(t,a,u+.6,n,a+.04,u+.9,Ce.yellow);let c=Math.sign(s-(t+n)/2),f=c>0?n:t,d=f+c*6.2,g=u+.9,v=h-.2,b=(U,V,k)=>[U,V,k];c>0?l.quad(b(d,.1,v),b(d,.1,g),b(f,a,g),b(f,a,v),p):l.quad(b(d,.1,g),b(d,.1,v),b(f,a,v),b(f,a,g),p);for(let U of[g,v]){let V=be("#9aa0a6");l.rod([d,.1+.9,U],[f,a+.9,U],.03,.03,5,V);for(let k=0;k<=3;k++){let X=d+(f-d)*k/3,j=.1+(a-.1)*k/3;l.box(X-.03,j,U-.03,X+.03,j+.9,U+.03,V)}}i.atlas.setM(e);for(let U=t;U<n-.01;U+=3){let V=Math.min(n,U+3);i.atlas.quad([U,-.6,h+.004],[V,-.6,h+.004],[V,a,h+.004],[U,a,h+.004],be("#d8d4ca"),ai("concrete"))}l.setM(e);for(let U=t+.4;U<n;U+=2)l.box(U-.05,a,h-.12,U+.05,a+1,h-.02,be("#8f949a"));for(let U of[.45,.95])l.box(t,a+U,h-.1,n,a+U+.06,h-.04,be("#8f949a"));let T=n-t,w=U=>c>0?n-T*U:t+T*U,y=w(.47),S=y-2.3,E=y+2.3,R=u+1.35,C=h-.25;l.box(S,a,C-.12,E,a+2.45,C,x);for(let U of[S,E-.12])l.box(U,a,R+.6,U+.12,a+2.45,C,_);for(let U of[S,E-.12])l.box(U,a,R,U+.12,a+2.45,R+.12,_);l.quad([E+.4,a+2.5,R-.45],[S-.4,a+2.5,R-.45],[S-.4,a+2.85,C+.35],[E+.4,a+2.85,C+.35],M),l.quad([S-.4,a+2.42,R-.45],[E+.4,a+2.42,R-.45],[E+.4,a+2.77,C+.35],[S-.4,a+2.77,C+.35],be("#3a3f50")),l.box(S+.3,a+.42,C-.55,E-.3,a+.48,C-.15,be("#8a6a4a"));for(let U of[S+.4,E-.5])l.box(U,a,C-.5,U+.08,a+.42,C-.2,Ce.metal);i.atlas.setM(e),i.atlas.quad([y-1.1,a+1.55,C+.005],[y+1.1,a+1.55,C+.005],[y+1.1,a+2.03,C+.005],[y-1.1,a+2.03,C+.005],hn,ai("ekiplate"+r));let L=w(.2),A=u+1.6,I=1.25,D=a+1.25,F=D+.95;l.setM(e);for(let U of[L-I+.12,L+I-.12])l.cyl(U,a,A,.05,.05,F-a+.05,8,be("#6b7078"));l.box(L-I,D-.03,A-.03,L+I,F+.03,A+.03,be("#3a3d42")),i.atlas.setM(e),i.atlas.quad([L-I,D,A+.035],[L+I,D,A+.035],[L+I,F,A+.035],[L-I,F,A+.035],hn,ai("ekimei"+r)),i.atlas.quad([L+I,D,A-.035],[L-I,D,A-.035],[L-I,F,A-.035],[L+I,F,A-.035],hn,ai("ekimei"+r)),l.setM(e);let z=y-c*4.2;l.box(z-.9,a+.42,h-1.25,z+.9,a+.47,h-.85,be("#3b6ea8")),l.box(z-.9,a+.47,h-.88,z+.9,a+.9,h-.83,be("#3b6ea8"));for(let U of[z-.75,z+.7])l.box(U,a,h-1.2,U+.06,a+.42,h-.9,Ce.metal);for(let U=t+3;U<n-1;U+=9)Ll(i,_1(e,U,a,h-.45))}var G3=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(be),q3=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(be);function V1(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,Ce.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let l=.28+r()*.34,a=.36+r()*.42,u=r.pick(G3),h=s+(r()-.5)*.06;i.quad([o+l,n-a,h],[o,n-a,h],[o,n-.02,h],[o+l,n-.02,h],u),i.quad([o,n-a,h+.01],[o+l,n-a,h+.01],[o+l,n-.02,h+.01],[o,n-.02,h+.01],kn(u,.85)),r()<.4&&i.box(o+l*.45,n-.02,h-.02,o+l*.55,n+.06,h+.02,be("#d8d8d0")),o+=l+.06+r()*.22}}function X3(i,e,t,n,s,r){let o=r.pick(q3),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,o),i.box(e,n-.72,s-l,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,kn(o,.86))}function W1(i,e){let t=i.color,n=be("#a19f97"),s=be("#6b4a35"),r=be("#4f4a44"),o=be("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,be("#8d8b84"));for(let l of[-.52,.48])for(let a of[-.36,.32])t.box(l,.32,a,l+.05,1.5,a+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,kn(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,be("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,be("#5b8d3d"))}function G1(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?Ce.black:Ce.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,Ce.black),t.box(-.5,2.55,-.06,.5,2.95,.02,Ce.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,Ce.black);t.box(-.78,-.9,-.34,.3,0,.34,Ce.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,be("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,Ce.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new et().multiplyMatrices(e,new et().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?Ce.black:Ce.yellow)}t.setM(e),i.atlas.setM(e),un(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function q1(i,e){let t=i.color;t.setM(e);let n=Ce.stone,s=kn(Ce.stone,1.06),r=kn(Ce.stone,.92);t.box(-.36,0,-.36,.36,.18,.36,r),t.box(-.26,.18,-.26,.26,.26,.26,n),t.box(-.13,.26,-.13,.13,1,.13,n),qo(t,1,1.1,.16,.3,s,!0,!0),t.box(-.2,1.1,-.2,.2,1.48,.2,s),qo(t,1.48,1.54,.25,.35,r,!1,!0),qo(t,1.54,1.78,.35,.07,r),t.cyl(0,1.78,0,.07,.04,.1,6,n),t.cyl(0,1.88,0,.05,0,.08,6,n),i.lamp.setM(e),i.lamp.box(-.1,1.2,-.205,.1,1.38,-.195,hn),i.lamp.box(-.1,1.2,.195,.1,1.38,.205,hn)}function Md(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,Ce.vermilion),s.cyl(0,0,r,.38,.38,.5,12,Ce.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,Ce.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,Ce.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,Ce.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,Ce.vermilion)}function X1(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,be("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,be("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,be("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,be("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,Ce.metal),n.box(1.1,0,.3,1.2,.42,.55,Ce.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,Ce.metal),i.atlas.setM(e),Wi(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Vi(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}var Y3=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],Z3=be("#a7a7aa"),K3=[1,.95,.9],v1={},$3=()=>Yo>.7?12:6;function Y1(i,e){let t=i*16+e,n=v1[t];if(!n){let s=new Jt({uv:!0,idx:!0}),r=kn(Z3,K3[i]),o=.42,l=.25,a=.075,u=o-l,h=1-a,p=o+(l-o)*h,m=p-a,x=(M,c,f)=>s.vtx(M[0],M[1],M[2],c[0],c[1],c[2],f,0,r),_=[];for(let M of Y3){let c=0,f=1,d=0;Math.abs(M[1])>.99&&(c=1,f=0);let g=M[1]*d-M[2]*f,v=M[2]*c-M[0]*d,b=M[0]*f-M[1]*c,T=Math.hypot(g,v,b);g/=T,v/=T,b/=T;let w=v*M[2]-b*M[1],y=b*M[0]-g*M[2],S=g*M[1]-v*M[0],E=[];for(let D=0;D<e;D++){let F=D/e*Math.PI*2,z=Math.cos(F),U=Math.sin(F);E.push([g*z+w*U,v*z+y*U,b*z+S*U])}let R=(D,F,z)=>[M[0]*z+D[0]*F,M[1]*z+D[1]*F,M[2]*z+D[2]*F],C=s.n,L=C+e,A=L+e,I=A+e;for(let D of E)x(R(D,o,0),[D[0]+M[0]*u,D[1]+M[1]*u,D[2]+M[2]*u],0);for(let D of E)x(R(D,p,h),[D[0]+M[0]*u,D[1]+M[1]*u,D[2]+M[2]*u],h);for(let D of E)x(R(D,m,1),M,1);x(M,M,1);for(let D=0;D<e;D++){let F=(D+1)%e;_.push(C+D,L+F,C+F,C+D,L+D,L+F),_.push(L+D,A+F,L+F,L+D,A+D,A+F),_.push(I,A+F,A+D)}}n=v1[t]=s.toArrays(),n.I=Uint16Array.from(_)}return n}var J3=new xn,ad=new Jn,j3=new H,Q3=new H;function Sd(i,e,t,n,s,r,o=0,l=.6,a=0){s()<l?ad.set((s()-.5)*.4,s()*6.283,(s()-.5)*.4):ad.set(s()*6.283,s()*6.283,s()*6.283);let u=new et().compose(j3.set(e,t,n),J3.setFromEuler(ad),Q3.set(r,r,r));u.groundY=o;let h=i.tetra,p=h.n;h.stamp(Y1(Math.floor(s()*3),$3()),u);for(let m=p*2+1;m<h.n*2;m+=2)h.U[m]=a}function Z1(){for(let i=0;i<3;i++)for(let e of[6,12])Y1(i,e)}function K1(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,be("#8f8a80"),be("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,Ce.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,Ce.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,Ce.black),t.cyl(0,18.6,0,1,.25,1.2,12,Ce.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,hn)}function $1(i,e,t){let n=i.color;n.setM(e);let s=t.pick([be("#f4f4f0"),be("#3b6ea5"),be("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),Xo(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),Xo(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,Ce.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,Ce.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,be("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,Ce.metal)}function J1(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,Ce.stone),n.box(-.55,.5,.9,.55,1.5,1.8,be("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],be("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],be("#4d5468")),Md(i,_1(e,0,0,-.3,Math.PI/2),.75,2.2)}var $o=[[0,"#070b26","#1c2752","#a8b6f0",.55,"#30427a","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#b0bcf2",.45,"#46548a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#1d4492","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#283c88","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#232f78","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1a2260","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#a8b6f0",.55,"#32447c","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#a8b6f0",.55,"#30427a","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new ue(e):e)),se={zenith:new ue,horizon:new ue,sunCol:new ue,sunI:1,hemiSky:new ue,hemiGround:new ue,hemiI:1,fog:new ue,cLit:new ue,cShade:new ue,cRim:new ue,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new H,moonDir:new H,lightDir:new H,sunEl:0,t:.4};function Q1(i){se.t=i;let e=0;for(;e<$o.length-2&&$o[e+1][0]<=i;)e++;let t=$o[e],n=$o[e+1],s=_l($t((i-t[0])/(n[0]-t[0]),0,1)),r=(o,l)=>l.copy(t[o]).lerp(n[o],s);r(1,se.zenith),r(2,se.horizon),r(3,se.sunCol),se.sunI=rt(t[4],n[4],s),r(5,se.hemiSky),r(6,se.hemiGround),se.hemiI=rt(t[7],n[7],s),r(8,se.fog),r(9,se.cLit),r(10,se.cShade),r(11,se.cRim),se.night=rt(t[12],n[12],s),se.warm=rt(t[13],n[13],s),se.sunEl=ev(i,se.sunDir,se.moonDir,se.lightDir)}function ev(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,$t((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var tw=new H,nw=new H;function Td(i,e){return ev((i%1+1)%1,tw,nw,e),e}var j1={zenith:[new ue("#7b8594"),new ue("#141a28")],horizon:[new ue("#b5bcc6"),new ue("#283042")],fog:[new ue("#a8b0ba"),new ue("#232b3c")],hemiSky:[new ue("#aab3bf"),new ue("#3c4866")],hemiGround:[new ue("#8b8983"),new ue("#1e2030")],cLit:[new ue("#d0d5dc"),new ue("#2c3240")],cShade:[new ue("#7c8593"),new ue("#151922")]},wd=new ue;function tv(i,e){if(se.overcast=i,se.rain=e,se.bright=(1-se.night)*(1-se.warm)*(1-i),i<=.001)return;let t=se.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])wd.copy(j1[n][0]).lerp(j1[n][1],t),se[n].lerp(wd,i*(n==="cLit"||n==="cShade"?.75:.85));se.sunI*=1-.82*i,se.warm*=1-i,se.cRim.multiplyScalar(1-i),se.sunCol.lerp(wd.setRGB(.85,.87,.9),i*.6)}function nv(){let i=new ft({side:qn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:se.zenith},uHorizon:{value:se.horizon},uSunDir:{value:se.sunDir},uMoonDir:{value:se.moonDir},uNoiseTex:Re.uNoiseTex,uSunCol:{value:se.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new ue},uOvercast:{value:0},uDeckLit:{value:new ue},uDeckDark:{value:new ue},uMilky:{value:0},uMetA:{value:new H(0,1,0)},uMetB:{value:new H(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright;
      varying vec3 vDir;
      ${Li}
      float hash13(vec3 p){ p = fract(p * .1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
      void main(){
        vec3 d = normalize(vDir); float e = d.y;
        float h = pow(clamp(1.0 - max(e, 0.0), 0.0, 1.0), 4.0);
        // on a clear day the painted gradient of the reference art: deep azure from ~20\xB0 up, through a bright saturated
        // sky blue (red comes in last) to near-white at the horizon; dawn, dusk, night and grey skies keep the old curve
        float hb = clamp(1.0 - max(e, 0.0) * 2.8, 0.0, 1.0);
        vec3 col = mix(uZenith, uHorizon, mix(vec3(h), vec3(hb * hb, hb, hb), uBright));
        if (e < 0.0) col = uHorizon * (1.0 - clamp(-e * 2.0, 0.0, 0.25));
        float sd = max(dot(d, uSunDir), 0.0);
        float day = (1.0 - uNight) * (1.0 - uOvercast);
        col += uSunCol * (pow(sd, 6.0) * (0.10 + 0.35 * uWarm) * (0.4 + h) + pow(sd, 48.0) * 0.45) * day;
        // high wispy cirrus, brushed along one direction
        if (e > 0.015) {
          vec2 p = d.xz / (e + 0.12);
          p = mat2(0.8, -0.6, 0.6, 0.8) * p;
          float c = fbm2(p * vec2(1.4, 5.0) + vec2(uTime * 0.004, 0.0)) * 0.75 + fbm2(p * 6.0) * 0.25;
          c = smoothstep(0.52, 0.86, c) * smoothstep(0.015, 0.22, e) * (1.0 - smoothstep(0.55, 0.95, e));
          col = mix(col, uCirrusCol, c * uCirrus);
        }
        float disc = smoothstep(0.99935, 0.99965, sd);
        col = mix(col, uSunCol * 4.0 + 1.5, disc * day);
        // a soft grey stratus deck when the weather turns
        if (uOvercast > 0.01 && e > -0.02) {
          vec2 q = d.xz / (e + 0.22) * 0.75 + vec2(uTime * 0.012, uTime * 0.004);
          float n = fbm2(q) * 0.7 + fbm2(q * 2.6 + 5.0) * 0.3;
          float cov = smoothstep(0.2, 0.62, n + uOvercast * 0.5 - 0.2);
          vec3 deck = mix(uDeckDark, uDeckLit, smoothstep(0.35, 0.85, n));
          col = mix(col, deck, cov * uOvercast * smoothstep(-0.02, 0.1, e));
        }
        vec3 bn = normalize(vec3(0.62, 0.3, 0.72)); float v = dot(d, bn), band = 0.0;
        if (uMilky > 0.01 && e > -0.05) band = exp(-(v * v) / 0.045);
        if (band > 0.001) { // the Milky Way: a soft, clumpy band with dark dust lanes (farther from it, its light is under a level)
          vec3 t1 = normalize(cross(bn, vec3(0.0, 1.0, 0.0))), t2 = cross(bn, t1);
          float ang = atan(dot(d, t2), dot(d, t1));
          float clump = fbm2(vec2(ang * 3.2, v * 9.0)) * 0.7 + fbm2(vec2(ang * 9.0 + 4.0, v * 26.0)) * 0.3;
          float dust = smoothstep(0.52, 0.68, fbm2(vec2(ang * 6.0 + 11.0, v * 30.0 + 2.0))) * exp(-(v * v) / 0.006);
          float speck = 0.55 + 0.45 * vnoise(vec2(ang * 60.0, v * 160.0));   // grainy, made of faint stars
          float glow = band * smoothstep(0.36, 0.8, clump) * (1.0 - 0.8 * dust) * speck;
          vec3 mw = mix(vec3(0.36, 0.44, 0.85), vec3(0.8, 0.76, 0.78), smoothstep(0.6, 0.88, clump) * exp(-(v * v) / 0.008));
          col += mw * glow * 0.36 * uMilky * smoothstep(-0.05, 0.3, e);
        }
        if (uNight * (1.0 - uOvercast) > 0.01 && e > 0.0) {
          vec3 sp = d * 380.0; vec3 cell = floor(sp); float hs = hash13(cell);
          if (hs > 0.9965 - 0.004 * band * uMilky) { float st = (1.0 - smoothstep(0.0, 0.42, length(fract(sp) - 0.5))) * (0.55 + 0.45 * sin(uTime * 1.7 + hs * 400.0));
            col += vec3(0.85, 0.9, 1.0) * st * uNight * smoothstep(0.0, 0.25, e) * 1.3; }
          if (uMetP >= 0.0 && uMetP < 1.3) { // a shooting star: a bright head with a fading tail
            float p = min(uMetP, 1.0);
            vec3 head = normalize(mix(uMetA, uMetB, p)), tail = normalize(mix(uMetA, uMetB, max(0.0, p - 0.32)));
            vec3 ab = head - tail; float tt = clamp(dot(d - tail, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
            float dist = length(d - (tail + ab * tt));
            float fade = smoothstep(0.0, 0.06, uMetP) * (1.0 - smoothstep(1.0, 1.3, uMetP));
            col += vec3(0.9, 0.95, 1.0) * (1.0 - smoothstep(0.0, 0.0024, dist)) * tt * tt * fade * 2.2 * uNight;
          }
          float md = dot(d, uMoonDir);
          col += vec3(0.5, 0.58, 0.85) * pow(max(md, 0.0), 60.0) * 0.35 * uNight;
          col = mix(col, vec3(1.6, 1.6, 1.5), smoothstep(0.99955, 0.9998, md) * uNight);
        }
        gl_FragColor = vec4(col, 1.0);
      }`}),e=new mt(new el(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function iw(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let d=0;d<o;d++){let g=.06+i()*.05;t.push([(d/(o-1)-.5)*s+(i()-.5)*.03,.1+g*.5,(i()-.5)*.2,g])}let l=e?6:2,a=s*.82,u=.1+.09;for(let d=0;d<l;d++){let g=Math.max(1,Math.round(a/.11));for(let v=0;v<g;v++){let b=(g===1?0:v/(g-1)-.5)*a+(i()-.5)*.05+r*d;t.push([b,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,a*=e?.8:.66}let h=t.slice();for(let d of h){if(t.length>84)break;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.35+i()*2.4,T=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(b)*d[3]*.82,d[1]+Math.sin(b)*d[3]*.82,d[2]+.04,T])}}let p=t.slice(h.length);for(let d of h){if(d[1]<.1+.12||t.length>104)continue;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.3+i()*2.5,T=d[3]*(.3+i()*.4),w=d[3]*(.28+i()*.16);t.push([d[0]+Math.cos(b)*T,d[1]+Math.sin(b)*T,d[2]+Math.sqrt(d[3]*d[3]-T*T)-w*.6,w])}}for(let d of p){if(t.length>124)break;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.2+i()*2.7,T=d[3]*(.38+i()*.2);t.push([d[0]+Math.cos(b)*d[3]*.85,d[1]+Math.sin(b)*d[3]*.85,d[2]+.02,T])}}let m=t.slice(0,128),x=1e9,_=-1e9,M=-1e9;for(let d of m)x=Math.min(x,d[0]-d[3]*1.12),_=Math.max(_,d[0]+d[3]*1.12),M=Math.max(M,d[1]+d[3]*1.12);let c=Math.min(1,.92/(_-x),(.95-.1)/(M-.1)),f=(x+_)/2;for(let d of m)d[0]=(d[0]-f)*c,d[1]=.1+(d[1]-.1)*c,d[3]*=c;return m}function iv(i){let t={value:Array.from({length:128},()=>new pt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new ft({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:Re.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Li}
      void main(){
        vec2 p = vec2(vUv.x - 0.5, vUv.y);
        float m = -1.0, s = 0.0, cov = 0.0; vec3 ns = vec3(0.0);
        for (int i = 0; i < 128; i++) {
          if (i >= uN) break;
          vec4 q = uP[i]; vec2 d = p - q.xy; float dd = dot(d, d), rm = q.w * 1.1;
          if (dd > rm * rm) continue;
          // the rim wobbles (noise read along the direction, so there is no seam at \xB1180\xB0); the core stays round
          float fi = float(i), dist = sqrt(dd); vec2 u = d / max(dist, 1e-5);
          float wob = 0.08 * (vnoiseL(u * 2.2 + vec2(fi * 7.1, uSeed)) - 0.5) + 0.035 * (vnoiseL(u * 7.0 + vec2(fi * 3.3, uSeed + 5.0)) - 0.5);
          float r = q.w * (1.0 + wob * smoothstep(0.4, 0.9, dist / q.w));
          cov = max(cov, 1.0 - smoothstep(r - 0.004, r, dist));
          if (dist < r) {
            float hz = sqrt(r * r - dd), h = q.z + hz;
            if (h > m) { float sc = exp((m - h) * 220.0); s *= sc; ns *= sc; m = h; }
            float w = exp((h - m) * 220.0); s += w; ns += w * vec3(d, hz) / r;
          }
        }
        float jag = (vnoiseL(vec2(p.x * 40.0, uSeed)) - 0.5) * 0.012;
        cov *= smoothstep(uBase - 0.014, uBase + 0.022, p.y + jag);
        if (s <= 0.0) { gl_FragColor = vec4(0.0, 0.5, 0.5, 0.0); return; }
        float H = m + log(s) / 220.0; vec3 n = normalize(ns);
        gl_FragColor = vec4(clamp((H + 0.12) / 0.5, 0.0, 1.0), n.xy * 0.5 + 0.5, cov);
      }`,depthTest:!1,depthWrite:!1,blending:ri}),r=new Yt(1024,1024,{generateMipmaps:!0,minFilter:Nn,magFilter:zt,depthBuffer:!1}),o=new ft({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:Re.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${Li}
      float hAt(vec2 uv, float l){ return textureLod(uH, uv, l).r * 0.5 - 0.12; }
      float light(vec2 uv, vec3 L, vec3 nM, vec3 nm){
        float lam = dot(normalize(mix(nM, nm, 0.72)), L);
        // lobes in front shadow the ones behind and below them (a soft march over the height field)
        float sh = 1.0, t = 0.012, hb = hAt(uv, 2.0);
        for (int i = 0; i < 11; i++) {
          float h = hAt(uv + L.xy * t, 2.0);
          sh = min(sh, clamp(3.0 * (hb + L.z * t - h) / max(t, 0.04) + 0.6, 0.0, 1.0));
          t *= 1.33;
        }
        // light dims as it crosses the cloud: optical depth along the light, from the blurred coverage
        float tau = 0.0; t = 0.02;
        for (int i = 0; i < 8; i++) { tau += textureLod(uH, uv + L.xy * t, 3.0).a * t * 0.3; t *= 1.38; }
        float tr = exp(-tau * 5.0);
        return smoothstep(0.06, 0.3, lam) * mix(0.28, 1.0, sh) * mix(0.55, 1.0, smoothstep(0.2, 0.9, tr));
      }
      void main(){
        vec4 A = textureLod(uH, vUv, 0.0);
        float a = A.a;
        if (a < 0.002) { gl_FragColor = vec4(0.0); return; }
        float h0 = A.r * 0.5 - 0.12;
        vec3 nm = vec3(A.gb * 2.0 - 1.0, 0.0); nm.z = sqrt(max(1.0 - dot(nm.xy, nm.xy), 0.0));
        nm = normalize(vec3(nm.xy * 0.8, nm.z));
        float e = 1.0 / 64.0, l = 4.5;
        vec2 g = vec2(hAt(vUv + vec2(e, 0.0), l) - hAt(vUv - vec2(e, 0.0), l), hAt(vUv + vec2(0.0, e), l) - hAt(vUv - vec2(0.0, e), l)) / (2.0 * e);
        vec3 nM = normalize(vec3(-g * 1.4, 1.0));
        float crease = clamp(1.0 + (h0 - hAt(vUv, 2.5)) * 9.0, 0.0, 1.0);
        vec2 p = vec2(vUv.x - 0.5, vUv.y);
        float base = smoothstep(uBase, uBase + 0.26, p.y), grain = (fbm2(p * 18.0 + uSeed) - 0.5) * 0.08;
        float k = mix(0.3, 1.0, base) * mix(0.62, 1.0, crease), amb = 0.1 * base;
        float litL = clamp(amb + (1.0 - amb) * light(vUv, normalize(vec3(-0.55, 0.62, 0.55)), nM, nm) * k + grain, 0.0, 1.0);
        float litR = clamp(amb + (1.0 - amb) * light(vUv, normalize(vec3(0.55, 0.62, 0.55)), nM, nm) * k + grain, 0.0, 1.0);
        // the silver lining is the thin outer edge only (not every lobe's outline)
        float rim = 1.0 - smoothstep(0.35, 0.95, textureLod(uH, vUv, 3.5).a);
        gl_FragColor = vec4(vec3(litL, rim, litR) * a, a);
      }`,depthTest:!1,depthWrite:!1,blending:ri}),l=new mt(new on(1,1),s),a=new Er,u=new Ns;a.add(l);let h=new Yt(1024*2,1024*2,{generateMipmaps:!0,minFilter:Nn,magFilter:zt}),p=i.getRenderTarget(),m=i.autoClear,x=Et(99);i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let _=[];for(let M=0;M<4;M++){let c=M%2===0,f=iw(x,c);f.forEach((d,g)=>t.value[g].set(d[0],d[1],d[2],d[3])),s.uniforms.uN.value=f.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=M*13.7,l.material=s,i.setRenderTarget(r),i.render(a,u),l.material=o,h.viewport.set(M%2*1024,Math.floor(M/2)*1024,1024,1024),i.setRenderTarget(h),i.render(a,u),_.push({cell:[M%2,Math.floor(M/2)],tall:c})}return h.viewport.set(0,0,1024*2,1024*2),i.autoClear=m,i.setRenderTarget(p),s.dispose(),o.dispose(),r.dispose(),l.geometry.dispose(),{tex:h.texture,kinds:_,rt:h}}function sv(i){let e=Et(5),t=22,n=[],s=new on(1,1);s.translate(0,.5,0);let r=new Dn(new Float32Array(t*4),4),o=new Dn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let l=new ft({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new ue},uShade:{value:se.cShade},uRim:{value:se.cRim},uHaze:{value:se.horizon},uOpacity:{value:1}},vertexShader:`
      attribute vec4 aD; attribute float aR; varying vec2 vUv; varying vec4 vD; varying float vR;
      void main(){ vUv = uv; vD = aD; vR = aR; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D map; uniform vec3 uLit, uShade, uRim, uHaze; uniform float uOpacity; varying vec2 vUv; varying vec4 vD; varying float vR;
      void main(){
        vec4 t = texture2D(map, (vD.xy + vUv) * 0.5);
        if (t.a < 0.003) discard;
        vec3 v = t.rgb / t.a;
        float lit = mix(v.r, v.b, vD.z);
        vec3 c = mix(uShade, uLit, lit) + uRim * v.g * smoothstep(0.35, 0.8, lit) * vR;
        c = mix(c, uHaze, clamp(vD.w * (1.0 - smoothstep(0.0, 0.75, vUv.y)), 0.0, 1.0));
        gl_FragColor = vec4(c, 1.0) * t.a * uOpacity;
      }`}),a=new ss(s,l,t);a.frustumCulled=!1,a.renderOrder=-5;for(let _=0;_<t;_++){let M=_<12,c=i.kinds[(_*3+(M?0:1))%i.kinds.length],f=M?c.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:_/t*Math.PI*2+e.range(-.15,.15),d:M?e.range(2600,3400):e.range(1300,2200),base:M?e.range(-60,60):e.range(260,700),size:f,cell:c.cell,haze:M?.45:.18})}let u=new et,h=new xn,p=new H,m=new H,x=new H(0,1,0);return{group:a,update(_,M){let c=Math.atan2(se.lightDir.x,se.lightDir.z);for(let d of n)d.phi+=M*1.2/d.d;n.slice().sort((d,g)=>g.d-d.d).forEach((d,g)=>{p.set(_.x+Math.sin(d.phi)*d.d,_.y+d.base,_.z+Math.cos(d.phi)*d.d),h.setFromAxisAngle(x,d.phi+Math.PI),m.set(d.size,d.size,1),u.compose(p,h,m),a.setMatrixAt(g,u);let v=c-d.phi;v=Math.atan2(Math.sin(v),Math.cos(v));let b=Math.max(0,Math.min(1,(v+.35)/.7)),T=1-b*b*(3-2*b);r.setXYZW(g,d.cell[0],d.cell[1],T,d.haze),o.setX(g,.35+.9*Math.pow(Math.max(Math.cos(v),0),3)*(.4+se.warm))}),a.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,l.uniforms.uOpacity.value=(1-se.night*.35)*(1-se.overcast*.55)*(1-.85*se.rain),l.uniforms.uLit.value.copy(se.cLit).multiplyScalar(1+.35*se.bright)}}}function rv(){let i=new dn;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],l=[];for(let p=0;p<=360;p++){let m=p/360*Math.PI*2,x=Math.sin(m)*t.R,_=Math.cos(m)*t.R,M=gh(p/360*t.k*4,40+n*9),c=Math.pow(Math.max(0,M-.18)/.82,1.6),f=t.h*(.12+c);if(r.push(x,-60,_,x,-60+f,_),o.push(0,p/360,1,p/360),p<360){let d=p*2;l.push(d,d+1,d+2,d+1,d+3,d+2)}}let a=new yt;a.setAttribute("position",new je(r,3)),a.setAttribute("hf",new je(o,2)),a.setIndex(l);let u=new ft({side:Mn,fog:!1,uniforms:{uCol:{value:new ue(t.col)},uHaze:{value:se.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:Re.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Li}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),h=new mt(a,u);h.frustumCulled=!1,h.renderOrder=999,i.add(h)}),{group:i,update(t,n=0,s=1){if(i.visible=s>.002,!i.visible)return;i.position.set(t.x,0,t.z),i.scale.y=Math.min(1,s);for(let o of i.children)o.material.uniforms.uSnow.value=n;let r=(.35+.65*(1-se.night))*(1-.35*se.overcast);for(let o of i.children)o.material.uniforms.uLight.value=r}}}var Hr="./assets/",hv=`
uniform float toneMappingExposure, uSat, uVig, uDay; uniform vec3 uLo; uniform vec2 uGRes;
vec3 pgSrgbToLin(vec3 c){ return mix(pow((c + 0.055) / 1.055, vec3(2.4)), c / 12.92, step(c, vec3(0.04045))); }
vec3 pgInvNeutral(vec3 o){
  const float SC = 0.76, D = 0.24;
  o = clamp(o, 0.0, 0.985);
  float np = max(o.r, max(o.g, o.b));
  vec3 c = o;
  if (np >= SC) {
    float peak = D * D / (1.0 - np) - D + SC;
    float g = 1.0 - 1.0 / (0.15 * (peak - np) + 1.0);
    c = (o - g * np) / max(1.0 - g, 1e-3) * (peak / np);
  }
  float m = min(c.r, min(c.g, c.b));
  float off = m < 0.04 ? sqrt(max(m, 0.0) / 6.25) - m : 0.04;
  return (c + off) / toneMappingExposure;
}
vec3 ungrade(vec3 p){
  vec2 v = gl_FragCoord.xy / uGRes - 0.5;
  p /= max(1.0 - dot(v, v) * uVig, 0.2);
  const vec3 LW = vec3(0.299, 0.587, 0.114), WARM = vec3(0.03, 0.014, -0.018);
  float lo = dot(uLo, LW), wl = dot(WARM, LW) * uDay;
  float l = (dot(p, LW) - lo) / (1.0 - lo + wl);
  vec3 c2 = p - uLo * (1.0 - l) - WARM * l * uDay;
  vec3 c = l + (c2 - l) / uSat;
  return pgInvNeutral(pgSrgbToLin(clamp(c, 0.0, 1.0)));
}`,ks=[.299,.587,.114],Jo=[.03,.014,-.018],sw=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),_i=[0,0,0],Ed=(i,e,t,n,s,r)=>{let o=i-e*(1-n)-t*n*s;return Math.min(.985,Math.max(0,sw(Math.min(1,Math.max(0,n+(o-n)/r)))))};function rw(i,e,t,n,s){let r=i.toneMappingExposure.value,o=i.uSat.value,l=i.uLo.value,a=i.uDay.value,u=e/255,h=t/255,p=n/255,m=l.x*ks[0]+l.y*ks[1]+l.z*ks[2],x=(Jo[0]*ks[0]+Jo[1]*ks[1]+Jo[2]*ks[2])*a,_=(u*ks[0]+h*ks[1]+p*ks[2]-m)/(1-m+x);_i[0]=Ed(u,l.x,Jo[0],_,a,o),_i[1]=Ed(h,l.y,Jo[1],_,a,o),_i[2]=Ed(p,l.z,Jo[2],_,a,o);let M=.76,c=.24,f=Math.max(_i[0],_i[1],_i[2]);if(f>=M){let v=c*c/(1-f)-c+M,b=1-1/(.15*(v-f)+1),T=v/f;for(let w=0;w<3;w++)_i[w]=(_i[w]-b*f)/Math.max(1-b,.001)*T}let d=Math.min(_i[0],_i[1],_i[2]),g=d<.04?Math.sqrt(Math.max(d,0)/6.25)-d:.04;return s.setRGB((_i[0]+g)/r,(_i[1]+g)/r,(_i[2]+g)/r)}function zs(i){let e=Object.keys(i[0][1]),t={};for(let n of e)t[n]=[0,0,0];return{cur:t,at(n){let s=0;for(;s<i.length-2&&i[s+1][0]<=n;)s++;let r=i[s],o=i[s+1],l=Math.min(Math.max((n-r[0])/(o[0]-r[0]),0),1),a=l*l*(3-2*l);for(let u of e){let h=r[1][u],p=o[1][u],m=t[u];m[0]=h[0]+(p[0]-h[0])*a,m[1]=h[1]+(p[1]-h[1])*a,m[2]=h[2]+(p[2]-h[2])*a}return this},ug(n,s,r){let o=t[s];return rw(n,o[0],o[1],o[2],r)},rgb(n){return t[n]}}}function fn(i,e,t){let n={};for(let s of Object.keys(i))n[s]=[0,1,2].map(r=>i[s][r]+(e[s][r]-i[s][r])*t);return n}var Ol={on:1},gr=()=>{let i=Math.min(Math.max(((Ol.on?1-se.overcast:se.bright)-.55)/.4,0),1);return i*i*(3-2*i)},fv={value:new Ie(1280,720)};function dv(i){i.getDrawingBufferSize(fv.value)}function pv(i){let e=i.grade.uniforms;return{toneMappingExposure:e.toneMappingExposure,uSat:e.uSat,uVig:e.uVig,uDay:e.uDay,uLo:e.uLo,uGRes:fv}}async function Id(i,e,t){let n=e.files[t]?t:"hi",s=await fetch(i+e.files[n]);if(!s.ok)throw new Error(e.files[n]+" "+s.status);let r=await s.blob();if(e.bytes&&e.bytes[n]&&r.size!==e.bytes[n])throw new Error(e.files[n]+" is "+r.size+" bytes, not "+e.bytes[n]);let o=URL.createObjectURL(r),l;try{l=await new il().loadAsync(o)}catch(a){throw URL.revokeObjectURL(o),a}return l.onUpdate=()=>{URL.revokeObjectURL(o),l.onUpdate=null},l.colorSpace=oi,l.generateMipmaps=!0,l.minFilter=Nn,l.magFilter=zt,{tex:l,file:n}}async function Vr(i,e,t){let n,s=new Promise(r=>{n=setTimeout(()=>r(null),e)});try{return await Promise.race([i,s])}catch(r){return console.warn(t,r.message||r),null}finally{clearTimeout(n)}}async function mv(i,e=15e3){let t=Hr+"clouds/";return Vr((async()=>{let n=await fetch(t+"clouds2.json");if(!n.ok)throw new Error("clouds2.json "+n.status);let s=await n.json(),r=(s.clouds||[]).filter(l=>l.u1>l.u0&&l.v1>l.v0&&l.w>0&&l.h>0&&l.lum&&l.lum[1]>l.lum[0]);if(!r.length)throw new Error("no clouds listed");let{tex:o}=await Id(t,s,i);return{tex:o,list:r,tier:i}})(),e,"painted clouds unavailable, keeping the procedural ones:")}async function gv(i,e=15e3){let t=Hr+"fronts/";return Vr((async()=>{let n=await fetch(t+"fronts3.json");if(!n.ok)throw new Error("fronts3.json "+n.status);let s=await n.json(),r=(s.tiles||[]).filter(h=>h.name&&h.w>0&&h.h>0&&h.x>=0&&h.x+h.w<=1&&h.y>=0&&h.y+h.h<=1&&h.ey+h.h<=1);if(!r.length)throw new Error("no fronts listed");let o=s.files&&s.files[i]?i:"hi",l=await fetch(t+s.files[o]);if(!l.ok)throw new Error(s.files[o]+" "+l.status);let a=await l.blob();if(s.bytes&&s.bytes[o]&&a.size!==s.bytes[o])throw new Error(s.files[o]+" is "+a.size+" bytes, not "+s.bytes[o]);let u=await createImageBitmap(a);if(s.size&&s.size[o]&&(u.width!==s.size[o][0]||u.height!==s.size[o][1]))throw new Error(s.files[o]+" has the wrong size");return{img:u,tiles:r,tier:o}})(),e,"painted fronts unavailable, keeping the procedural shopfronts:")}async function vv(i,e=15e3){let t=Hr+"houses/";return Vr((async()=>{let n=await fetch(t+"houses2.json");if(!n.ok)throw new Error("houses2.json "+n.status);let s=await n.json(),r=s.files&&s.files[i]?i:"hi",o=s.tiles&&s.tiles[r]||[],l=(s.types||[]).filter(p=>p.f&&p.s&&p.pieces&&p.pieces.length&&o.some(m=>m.name===p.f)&&o.some(m=>m.name===p.s));if(!l.length||!(s.rows&&s.rows[r]>0))throw new Error("no houses listed");let a=await fetch(t+s.files[r]);if(!a.ok)throw new Error(s.files[r]+" "+a.status);let u=await a.blob();if(s.bytes&&s.bytes[r]&&u.size!==s.bytes[r])throw new Error(s.files[r]+" is "+u.size+" bytes, not "+s.bytes[r]);let h=await createImageBitmap(u,{premultiplyAlpha:"none"});if(s.size&&s.size[r]&&(h.width!==s.size[r][0]||h.height!==s.size[r][1]))throw new Error(s.files[r]+" has the wrong size");if(o.some(p=>!(p.w>0&&p.h>0&&p.x>=0&&p.x+p.w<=h.width&&p.ey+p.h<=h.height)))throw new Error("a tile lies outside the sheet");return{img:h,tiles:o,types:l,rows:s.rows[r],tier:r}})(),e,"painted houses unavailable, keeping the procedural ones:")}async function xv(i,e=15e3){let t=Hr+"fields/";return Vr((async()=>{let n=await fetch(t+"fields2.json");if(!n.ok)throw new Error("fields2.json "+n.status);let s=await n.json();if(!(s.tile&&s.tile[0]>0&&s.tile[1]>0&&Math.abs(ti/s.tile[1]-Math.round(ti/s.tile[1]))<1e-6))throw new Error("bad tile size");if(!(s.mean&&s.mean.length===3))throw new Error("no average colour listed");let{tex:r,file:o}=await Id(t,s,i);return r.colorSpace=Wt,r.wrapS=r.wrapT=Ds,{tex:r,tile:s.tile,mean:s.mean,tier:o}})(),e,"painted fields unavailable, keeping the procedural paddies:")}var Bh=[["tower",10,[4300,4800],[-1.6,-.4],[22,33],["tower"],.3],["bank",8,[4820,4960],[-1.2,.2],[5,8.5],["wide","mid"],.42],["mid",8,[3500,4200],[-1,2],[9,15],["mid","wide","tower"],.26],["high",7,[2300,3200],[11,27],[6,11],["mid","wide","tower"],0]],ow=140*Math.PI/180,kh=Math.PI/180,mr=i=>Math.atan2(Math.sin(i),Math.cos(i));function aw(i,e){let t=Et(e),n=[],s=t()*Math.PI*2,r=Math.PI*2/Bh[0][1];for(let[a,u,h,p,m,x,_]of Bh)for(let M=0;M<u;M++){let c;a==="tower"?c=s+M*r+t.range(-.22,.22)*r:a==="mid"?c=s+(M+.5)*r*(Bh[0][1]/u)+t.range(-.2,.2)*r:a==="high"?c=s+(M*(Bh[0][1]/u)+.5)*r+t.range(-.3,.3)*r:c=s+(M+t())/u*Math.PI*2,n.push({role:a,kinds:x,phi:c,d:t.range(h[0],h[1]),e0:t.range(p[0],p[1])*kh,ah:t.range(m[0],m[1])*kh,haze:_,k:-1,flip:!1})}let o=i.map(()=>[]),l=n.map((a,u)=>u);for(let a=l.length-1;a>0;a--){let u=Math.floor(t()*(a+1)),h=l[a];l[a]=l[u],l[u]=h}for(let a of l){let u=n[a],h=-1,p=1e9;i.forEach((m,x)=>{let _=u.kinds.indexOf(m.kind);if(_<0)return;let c=(o[x].some(f=>Math.abs(mr(f-u.phi))<ow)?1e3:0)+o[x].length*10+_*4+t();c<p&&(p=c,h=x)}),h<0&&(h=Math.floor(t()*i.length)),u.k=h,o[h].push(u.phi)}for(let a of n){let u=i[a.k],h=a.d*Math.tan(a.e0);a.y0=h,a.h=a.d*Math.tan(a.e0+a.ah)-h,a.w=a.h*u.w/u.h,a.half=Math.atan2(a.w/2,a.d)}return n.sort((a,u)=>u.d-a.d)}var ov={shade:[172,196,234],mid:[214,226,246],lit:[246,249,253],rim:[255,246,228]},av={shade:[137,114,117],mid:[184,147,138],lit:[238,196,146],rim:[255,214,150]},Ad={shade:[96,65,92],mid:[158,82,98],lit:[226,124,100],rim:[242,172,122]},Oh={shade:[33,58,90],mid:[45,76,116],lit:[78,112,152],rim:[140,166,200]},Rd={shade:[58,56,96],mid:[104,86,132],lit:[170,128,168],rim:[214,150,170]},lw=zs([[0,Oh],[.2,fn(Oh,Rd,.5)],[.245,fn(Ad,av,.4)],[.3,ov],[.62,ov],[.7,av],[.75,Ad],[.765,fn(Ad,Rd,.4)],[.8,Rd],[.86,Oh],[1,Oh]]),lv=new ue;function yv(i,e,t=5){let n=i.list,s=aw(n,t),r=s.length,o=new on(1,1);o.translate(0,.5,0);let l=new Dn(new Float32Array(r*4),4),a=new Dn(new Float32Array(r*4),4),u=new Dn(new Float32Array(r),1);o.setAttribute("aRect",l),o.setAttribute("aInfo",a),o.setAttribute("aRim",u),s.forEach((b,T)=>{let w=n[b.k];l.setXYZW(T,w.u0,w.v0,w.u1-w.u0,w.v1-w.v0),a.setXYZW(T,0,w.lum[0],1/Math.max(.05,w.lum[1]-w.lum[0]),b.haze)});let h=new ft({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new ue},uMid:{value:new ue},uShade:{value:new ue},uRimCol:{value:new ue},uHaze:{value:se.horizon},uPaint:{value:1},uOpacity:{value:1},uRimLod:{value:i.tier==="hi"?3:2},...pv(e)},vertexShader:`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:hv+`
      uniform sampler2D map; uniform vec3 uLit, uMid, uShade, uRimCol, uHaze; uniform float uPaint, uOpacity, uRimLod;
      varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vec4 t = texture2D(map, vUv);
        if (t.a < 0.004) discard;
        vec3 c = vec3(0.0);
        if (uPaint < 0.999) { // the time-of-day palette, keeping the brushwork (the painted luminance) and a silver lining
          float k = clamp((dot(t.rgb, vec3(0.299, 0.587, 0.114)) - vInfo.y) * vInfo.z, 0.0, 1.0);
          float rim = 1.0 - smoothstep(0.35, 0.95, textureLod(map, vUv, uRimLod).a);
          c = (k < 0.5 ? mix(uShade, uMid, k * 2.0) : mix(uMid, uLit, k * 2.0 - 1.0)) + uRimCol * rim * smoothstep(0.35, 0.8, k) * vRim;
        }
        if (uPaint > 0.001) c = mix(c, clamp(ungrade(t.rgb), 0.0, 2.0), uPaint); // a bright day: the painting itself
        c = mix(c, uHaze, vInfo.w * (1.0 - smoothstep(0.0, 0.45, vY)));         // the far feet melt into the horizon haze
        gl_FragColor = vec4(c, 1.0) * (t.a * uOpacity);
      }`}),p=new ss(o,h,r);p.frustumCulled=!1,p.renderOrder=-5;let m=new et,x=new xn,_=new H,M=new H,c=new H(0,1,0),f=new H,d=!0;function g(b,T){let w=s.filter(A=>A.role==="tower").sort((A,I)=>mr(A.phi-b)-mr(I.phi-b)),y=null,S=1e9;for(let A=0;A<w.length;A++){let I=w[A],D=w[(A+1)%w.length],F=T==="center"?I.phi:I.phi+mr(D.phi-I.phi)/2,z=Math.abs(mr(F-b));z<S&&(S=z,y=T==="center"?[I,I,F]:[I,D,F])}if(!y)return;let[E,R,C]=y,L=mr(b-C);for(let A of s)A.phi+=L;for(let A of new Set([E,R])){let I=Math.max(A.ah,31*kh),D=A.d*Math.tan(A.e0+I)-A.y0;A.w*=D/A.h,A.h=D,A.ah=I,A.half=Math.atan2(A.w/2,A.d)}}let v={mesh:p,count:r,opening:"flank",layout:s,update(b,T){let w=b.position,y=Math.atan2(se.lightDir.x,se.lightDir.z);b.getWorldDirection(f);let S=Math.atan2(f.x,f.z),E=Math.atan(Math.tan(b.fov*kh/2)*b.aspect);d&&g(S,v.opening);for(let I=0;I<r;I++){let D=s[I];D.phi+=T*1.2/D.d,_.set(w.x+Math.sin(D.phi)*D.d,w.y+D.y0,w.z+Math.cos(D.phi)*D.d),x.setFromAxisAngle(c,D.phi+Math.PI),M.set(D.w,D.h,1),m.compose(_,x,M),p.setMatrixAt(I,m);let F=mr(y-D.phi),z=F>0!==n[D.k].litLeft;z!==D.flip&&Math.abs(Math.sin(F))>.2&&(d||Math.abs(mr(D.phi-S))>E+D.half+.05)&&(D.flip=z),a.setX(I,D.flip?1:0);let U=Math.max(Math.cos(F),0);u.setX(I,.35+.9*U*U*U*(.4+se.warm))}d=!1,p.instanceMatrix.needsUpdate=!0,a.needsUpdate=!0,u.needsUpdate=!0;let R=h.uniforms;{let I=Math.min(Math.max((se.bright-.55)/.4,0),1);R.uPaint.value=I*I*(3-2*I)}let C=e.grade.uniforms,L=lw.at(se.t),A=1-gr();L.ug(C,"shade",R.uShade.value).lerp(se.cShade,A),L.ug(C,"mid",R.uMid.value).lerp(lv.copy(se.cShade).lerp(se.cLit,.5),A),L.ug(C,"lit",R.uLit.value).lerp(lv.copy(se.cLit).multiplyScalar(1+.35*se.bright),A),L.ug(C,"rim",R.uRimCol.value).lerp(se.cRim,A),R.uOpacity.value=(1-se.night*(.08+.27*A))*(1-se.overcast*.55)*(1-.85*se.rain)}};return v}async function _v(i,e=15e3){let t=Hr+"band/";return Vr((async()=>{let n=await fetch(t+"band3.json");if(!n.ok)throw new Error("band3.json "+n.status);let s=await n.json(),{tex:r,file:o}=await Id(t,s,i),l={};for(let[a,u]of Object.entries(s.zones&&s.zones[o]||{}))u.v1>u.v0&&u.e1>u.e0&&(l[a]=new pt(u.v0,u.v1,Math.tan(u.e0*Math.PI/180),Math.tan(u.e1*Math.PI/180)));if(!Object.keys(l).length)throw new Error("no zones listed");return r.wrapS=Ds,{tex:r,zones:l,period:s.period||120,tier:o}})(),e,"painted horizon unavailable, keeping the mountain rings:")}var cv={shade:[84,112,132],mid:[142,170,190],lit:[200,220,234],ch:[.6,.6,.6]},uv={shade:[70,78,100],mid:[110,108,124],lit:[160,140,134],ch:[.3,.3,.3]},Ul={shade:[46,36,58],mid:[84,56,84],lit:[130,76,92],ch:[.25,.25,.25]},jo={shade:[20,38,60],mid:[30,54,84],lit:[46,76,112],ch:[.12,.12,.12]},cw=zs([[0,jo],[.2,fn(jo,Ul,.3)],[.245,fn(Ul,uv,.4)],[.3,cv],[.62,cv],[.7,uv],[.75,Ul],[.765,fn(Ul,jo,.25)],[.8,fn(Ul,jo,.55)],[.86,jo],[1,jo]]),Bl=2500,uw=-8,zr=new H,pr=new ue,Cd=new ue("#fff5dd").multiplyScalar(3.35),Pd=new ue("#8fb1ec").multiplyScalar(1.35*2);function bv(i,e,t){let n=i.zones,s=Math.max(...Object.values(n).map(v=>v.w)),r=192,o=360/i.period,l=new Float32Array((r+1)*6),a=new Float32Array((r+1)*4),u=[],h=Math.tan(uw*Math.PI/180),p=s+.004;for(let v=0;v<=r;v++){let b=v/r*Math.PI*2,T=Math.sin(b)*Bl,w=Math.cos(b)*Bl;if(l.set([T,h*Bl,w,T,p*Bl,w],v*6),a.set([-(v/r)*o,h,-(v/r)*o,p],v*4),v<r){let y=v*2;u.push(y,y+2,y+1,y+1,y+2,y+3)}}let m=new yt;m.setAttribute("position",new St(l,3)),m.setAttribute("uv",new St(a,2)),m.setIndex(u);let x=Math.PI/180,_=(e.composer.readBuffer.samples||0)>0,M=new ft({fog:!1,side:Mn,alphaToCoverage:_,defines:_?{A2C:1}:{},uniforms:{map:{value:i.tex},uRowA:{value:new pt},uRowB:{value:new pt},uMix:{value:0},uAlpha:{value:1},uRot:{value:0},uLightC:{value:new ue(1,1,1)},uPaint:{value:1},uFogC:{value:t},uHaze:{value:0},uHz:{value:Math.tan(.8*x)},uGnd:{value:new H(2.8,.0014,700)},uSpan:{value:new Ie(h,p)},...pv(e),uTone:{value:0},uBS:{value:new H},uBM:{value:new H},uBH:{value:new H},uBCh:{value:0},uWin:{value:new Ie},uLightsOn:Re.uLightsOn},vertexShader:`
      uniform vec2 uSpan; varying vec2 vUv;
      void main(){
        float y = uv.y > 0.0 ? uSpan.y : uSpan.x; vUv = vec2(uv.x, y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, y * ${Bl.toFixed(1)}, position.z, 1.0);
      }`,fragmentShader:hv+`
      uniform sampler2D map; uniform vec4 uRowA, uRowB; uniform float uMix, uAlpha, uRot, uHaze, uHz, uPaint; uniform vec3 uLightC, uFogC, uGnd;
      uniform float uTone, uBCh, uLightsOn; uniform vec3 uBS, uBM, uBH; uniform vec2 uWin;
      varying vec2 vUv;
      // a zone's row: x = v of its bottom edge, y = v of its top edge, z / w = tan(elevation) there. Above it, sky (the
      // top rows fade out: coarse mips bleed the next row's fields into them); below it, its bottom row (opaque far
      // fields, hazed into the fog: the skirt under the painting). Sampled in uniform control flow (mip selection)
      vec4 band(vec4 r){
        float t = (vUv.y - r.z) / (r.w - r.z);
        return texture2D(map, vec2(vUv.x + uRot, mix(r.x, r.y, clamp(t, 0.0, 1.0)))) * (1.0 - smoothstep(0.96, 0.995, t));
      }
      void main(){
        vec4 t = band(uRowA);
        if (uMix > 0.001) { // the next zone's band (premultiplied: ridges dissolve into each other)
          vec4 b = band(uRowB);
          t = vec4(mix(t.rgb * t.a, b.rgb * b.a, uMix), mix(t.a, b.a, uMix));
          t.rgb /= max(t.a, 1e-4);
        }
        float a = t.a * uAlpha;
        #ifdef A2C
        if (a < 0.02) discard; // (the rest: coverage from alpha, resolved by MSAA into a soft edge or a cross-fade)
        #else
        if (a < 0.5) discard;
        #endif
        // a bright day: the painting itself; under a clear sky at golden hour, sunset and night the painting in that hour's
        // tones (as the targets repaint it: its lightness through a shade-middle-light ramp, keeping some of its own colour);
        // under grey skies its colours relit (a plain linear relight, bounded: the inverse grade would blow its pale peaks up
        // past the bloom threshold at dusk)
        vec3 c = pgSrgbToLin(t.rgb) * 0.8 * uLightC;
        if (uTone > 0.001) {
          float l = dot(t.rgb, vec3(0.299, 0.587, 0.114)), k = clamp((l - 0.25) * 1.54, 0.0, 1.0);
          vec3 d = (k < 0.5 ? mix(uBS, uBM, k * 2.0) : mix(uBM, uBH, k * 2.0 - 1.0)) + (t.rgb - l) * uBCh;
          c = mix(c, ungrade(clamp(d, 0.0, 0.97)), uTone);
        }
        if (uPaint > 0.001) c = mix(c, ungrade(t.rgb), uPaint);
        // the far city's windows lit at night (the city's row only): a grid of small windows over its pale towers (the
        // painting's own opaque, light pixels), some lit, warm or cool white, coming on as the town's do
        float win = mix(uWin.x, uWin.y, uMix);
        if (win > 0.003) {
          vec2 wq = vec2((vUv.x + uRot) * 720.0, vUv.y * 400.0), ww = fwidth(wq); // (derivatives first, while every pixel is here)
          // (only the towers' opaque light pixels hold a window, and only a fifth of those windows are lit: the rest skip it)
          if (t.a >= 0.97 && dot(t.rgb, vec3(0.299, 0.587, 0.114)) >= 0.42) {
            vec2 wi = floor(wq), wf = fract(wq) - 0.5;
            vec3 h3 = fract(vec3(wi.xyx) * 0.1031); h3 += dot(h3, h3.yzx + 33.33); float h = fract((h3.x + h3.y) * h3.z);
            if (h <= 0.2 * uLightsOn) {
              float h2 = fract(h * 13.7);
              float box = (1.0 - smoothstep(0.26 - ww.x * 0.5, 0.26 + ww.x * 0.5, abs(wf.x))) * (1.0 - smoothstep(0.22 - ww.y * 0.5, 0.22 + ww.y * 0.5, abs(wf.y)));
              c += mix(vec3(1.25, 0.8, 0.36), vec3(0.85, 0.8, 0.68), step(0.75, h2)) * (0.45 + 0.4 * h2) * box * win;
            }
          }
        }
        // haze: below the horizon as much as the 3D world's own fog puts on flat ground seen at that angle (uGnd: the
        // camera's height above it, the fog density, the draw distance, where the world fades out completely), so the
        // band's foot meets the world's far edge in its colour, and from a high camera the skirt reads as far fields;
        // above it the mountains' feet stand in haze; and more haze all over at dusk, under grey skies and in rain
        float e = vUv.y, hz = 1.0 - smoothstep(0.0, uHz, e);
        if (e < 0.0) { float d = uGnd.x / max(-e, 1e-5), fd = d * uGnd.y; hz = max(1.0 - exp(-fd * fd), smoothstep(uGnd.z * 0.8, uGnd.z, d)); }
        c = mix(c, uFogC, max(uHaze, hz));
        #ifdef A2C
        gl_FragColor = vec4(c, a);
        #else
        gl_FragColor = vec4(c, 1.0);
        #endif
      }`}),c=new mt(m,M);c.frustumCulled=!1,c.renderOrder=999;let f=M.uniforms,d=new H,g=!0;return{mesh:c,zones:n,hero:.125,update(v,b,T=2.8,w=.0014,y=700){let S=n[b.a],E=n[b.b],R=b.t,C=0;if(S&&E?(f.uRowA.value.copy(S),f.uRowB.value.copy(E),f.uMix.value=S===E?0:R,C=1):(S||E)&&(f.uRowA.value.copy(S||E),f.uMix.value=0,C=S?1-R:R),f.uAlpha.value=C,c.visible=C>.002,!c.visible)return 0;c.position.copy(v.position),f.uGnd.value.set(T,w,y),f.uSpan.value.set(Math.max(h,-Math.tan(Math.atan(T/140)+.3*x)),Math.max(S?S.w:0,E?E.w:0)+.003),g&&(v.getWorldDirection(d),f.uRot.value=this.hero+Math.atan2(d.x,d.z)/(Math.PI*2)*o,g=!1),pr.copy(se.sunCol).multiplyScalar(se.sunI),zr.set(pr.r,pr.g,pr.b),pr.copy(se.hemiSky).multiplyScalar(se.hemiI*2),zr.x+=pr.r,zr.y+=pr.g,zr.z+=pr.b;let L=Math.min(Math.max((se.bright-.55)/.4,0),1),A=L*L*(3-2*L);if(f.uLightC.value.setRGB(zr.x/(Cd.r+Pd.r),zr.y/(Cd.g+Pd.g),zr.z/(Cd.b+Pd.b)),f.uPaint.value=A,f.uTone.value=gr()*(1-A),f.uTone.value>0){let U=cw.at(se.t);f.uBS.value.fromArray(U.rgb("shade")).divideScalar(255),f.uBM.value.fromArray(U.rgb("mid")).divideScalar(255),f.uBH.value.fromArray(U.rgb("lit")).divideScalar(255),f.uBCh.value=U.rgb("ch")[0]}let I=Math.min(Math.max((se.night-.15)/.65,0),1),D=I*I*(3-2*I)*(1-.6*se.overcast);f.uWin.value.set(b.a==="city"?D*Ol.on:0,b.b==="city"?D*Ol.on:0);let F=Math.max(4*f.uMix.value*(1-f.uMix.value),Math.min(1,2*(1-C))),z=_?0:.45*F*F*F;return f.uHaze.value=1-(1-(1-(1-.12*se.warm-.25*se.night)*(1-.55*se.overcast)*(1-.6*se.rain))*(1-A))*(1-z),C}}}async function hw(i){let e=new Uint8Array(i),t=new DataView(i),n=[137,80,78,71,13,10,26,10];if(e.length<33||n.some((m,x)=>e[x]!==m))throw new Error("not a PNG");let s=8,r=0,o=0,l=[];for(;s+12<=e.length;){let m=t.getUint32(s),x=String.fromCharCode(e[s+4],e[s+5],e[s+6],e[s+7]);if(s+12+m>e.length)throw new Error("PNG truncated");if(x==="IHDR"){if(r=t.getUint32(s+8),o=t.getUint32(s+12),e[s+16]!==8||e[s+17]!==6||e[s+20]!==0)throw new Error("PNG is not 8-bit RGBA")}else if(x==="IDAT")l.push(e.subarray(s+8,s+8+m));else if(x==="IEND")break;s+=12+m}if(!r||!o||!l.length)throw new Error("PNG has no image");let a=new Uint8Array(await new Response(new Blob(l).stream().pipeThrough(new DecompressionStream("deflate"))).arrayBuffer()),u=r*4,h=new Uint8Array(u*o),p=new Uint8Array(u);if(a.length<(u+1)*o)throw new Error("PNG data short");for(let m=0;m<o;m++){let x=a[m*(u+1)],_=m*(u+1)+1,M=(o-1-m)*u,c=m?h.subarray(M+u,M+2*u):p,f=h.subarray(M,M+u),d=a.subarray(_,_+u);if(x===0)f.set(d);else if(x===1){for(let g=0;g<4;g++)f[g]=d[g];for(let g=4;g<u;g++)f[g]=d[g]+f[g-4]}else if(x===2)for(let g=0;g<u;g++)f[g]=d[g]+c[g];else if(x===3){for(let g=0;g<4;g++)f[g]=d[g]+(c[g]>>1);for(let g=4;g<u;g++)f[g]=d[g]+(f[g-4]+c[g]>>1)}else if(x===4){for(let g=0;g<4;g++)f[g]=d[g]+c[g];for(let g=4;g<u;g++){let v=f[g-4],b=c[g],T=c[g-4],w=Math.abs(b-T),y=Math.abs(v-T),S=Math.abs(v+b-T-T);f[g]=d[g]+(w<=y&&w<=S?v:y<=S?b:T)}}else throw new Error("PNG filter "+x)}return{w:r,h:o,data:h}}function fw(i,e,t,n,s,r=.5){let o=[{data:t,width:i,height:e}],l=Math.floor(r*255)+1,a=new Uint32Array(256),u=[],h=(_,M,c,f,d,g)=>{a.fill(0);for(let v=0;v<g;v++){let b=((f+v)*M+c)*4+3;for(let T=0;T<d;T++)a[_[b+T*4]]++}};for(let _=0;_<s;_++)for(let M=0;M<n;M++){let c=i/n,f=e/s;h(t,i,M*c,_*f,c,f);let d=0;for(let g=l;g<256;g++)d+=a[g];u.push(d/(c*f))}let p=i,m=e,x=t;for(;p>1&&m>1;){let _=p>>1,M=m>>1,c=new Uint8Array(_*M*4),f=p*4;for(let v=0;v<M;v++){let b=v*2*f,T=v*_*4;for(let w=0;w<_;w++,b+=8)for(let y=0;y<4;y++,T++)c[T]=x[b+y]+x[b+y+4]+x[b+y+f]+x[b+y+f+4]+2>>2}let d=_/n,g=M/s;if(d>=2&&g>=2&&d===Math.floor(d)&&g===Math.floor(g))for(let v=0;v<s;v++)for(let b=0;b<n;b++){h(c,_,b*d,v*g,d,g);let T=Math.round(u[v*n+b]*d*g),w=255,y=a[255];for(;w>1&&y<T;)y+=a[--w];let S=T>0?Math.min(6,Math.max(.5,l/w)):1;if(S!==1)for(let E=0;E<g;E++){let R=((v*g+E)*_+b*d)*4+3;for(let C=0;C<d;C++)c[R+C*4]=Math.min(255,Math.round(c[R+C*4]*S))}}o.push({data:c,width:_,height:M}),x=c,p=_,m=M}return o}async function Mv(i,e=15e3){let t=Hr+"trees/";return Vr((async()=>{if(typeof DecompressionStream>"u")throw new Error("no DecompressionStream");let n=await fetch(t+"crowns.json");if(!n.ok)throw new Error("crowns.json "+n.status);let s=await n.json(),r=s.files[i]?i:"hi",o=await fetch(t+s.files[r]);if(!o.ok)throw new Error(s.files[r]+" "+o.status);let l=await o.arrayBuffer();if(s.bytes&&s.bytes[r]&&l.byteLength!==s.bytes[r])throw new Error(s.files[r]+" is "+l.byteLength+" bytes, not "+s.bytes[r]);let a=await hw(l),u=s.cols,h=s.rows;if(!(u>0&&h>0)||a.w%u||a.h%h)throw new Error("bad atlas layout");let p=(s.cells||[]).filter(_=>_.col<u&&_.row<h).map(_=>{let M=.5/a.w,c=.5/a.h;return{kind:_.kind,u0:_.col/u+M,u1:(_.col+1)/u-M,v0:1-(_.row+1)/h+c,v1:1-_.row/h-c}});if(!p.some(_=>_.kind==="leaf"))throw new Error("no leaf clusters listed");let m=fw(a.w,a.h,a.data,u,h,.5),x=new is(a.data,a.w,a.h,Qn);return x.mipmaps=m,x.generateMipmaps=!1,x.minFilter=Nn,x.magFilter=zt,x.colorSpace=oi,x.needsUpdate=!0,{tex:x,cells:p,tier:r}})(),e,"painted tree crowns unavailable, keeping the card crowns:")}var Hs={T:6.5,N:400,TH:.75},Cv=Hs.N/ti,dw=Cv*Math.tan(Hs.TH),Hh=Math.cos(Hs.TH),zl=Math.sin(Hs.TH),Vh=4,Yn=i=>i.toFixed(7),Wl=`
float shorePhase(float s, float d){ return uTime * ${Yn(1/Hs.T)} + s * ${Yn(Cv)} + d * ${Yn(dw)}; }`,Hl=256/ti,Sv=i=>Math.max(1,Math.round(i*zl/Hl))*Hl/zl,pw=i=>Math.max(1,Math.round(i*Hh/Hl))*Hl/Hh,Ld=i=>Math.max(1,Math.round(i*Hs.N*Vh/256))*256/(Hs.N*Vh),mw=`
vec4 vnoise4(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0); }`,Vl={uNoiseTex:Re.uNoiseTex,uOrigin:Re.uOrigin,uTime:{value:0},uCam:{value:new H},uSunDir:{value:se.lightDir},uSunCol:{value:se.sunCol},uHorizon:{value:se.horizon},uZenith:{value:se.zenith},uFog:{value:se.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0},uPaint:{value:0},uPTrough:{value:new ue},uPMid:{value:new ue},uPFace:{value:new ue},uPLite:{value:new ue},uPMidD:{value:new ue},uPMidM:{value:new ue},uPMidF:{value:new ue},uPMidL:{value:new ue},uPFarD:{value:new ue},uPFar:{value:new ue},uPFarF:{value:new ue},uPFarL:{value:new ue},uPHz:{value:new ue},uFoamLit:{value:new ue(1,1,1)},uFoamShade:{value:new ue(.5,.6,.8)},uSeaDir:{value:new Ie(1,0)},uWaves:{value:1},uPWBack:{value:new ue},uPWFace:{value:new ue},uPWLite:{value:new ue},uPWTurq:{value:new ue},uShoreW:{value:1},uPPath:{value:new ue},uPGlint:{value:new ue},uPathDir:{value:new H(0,1,0)},uPathK:{value:0},uPSpark:{value:new ue(1,1,1)}},wv={trough:[0,98,182],mid:[10,132,218],face:[49,163,242],lite:[140,210,250],midD:[4,124,212],midM:[27,148,232],midF:[49,163,242],midL:[140,205,248],farD:[36,139,221],far:[69,169,243],farF:[114,191,246],farL:[190,228,251],hz:[111,196,250],foam:[246,251,254],foamShade:[160,205,240],wBack:[1,109,193],wFace:[68,163,212],wLite:[113,188,241],wTurq:[46,154,201],path:[140,210,250],glint:[246,251,254],pk:[0,0,0],spark:[246,251,254]},Tv={trough:[62,71,85],mid:[100,105,118],face:[157,129,131],lite:[193,169,149],midD:[82,97,123],midM:[146,129,126],midF:[212,165,128],midL:[242,200,139],farD:[137,119,127],far:[228,186,134],farF:[246,222,154],farL:[243,227,168],hz:[238,201,149],foam:[250,223,177],foamShade:[182,164,157],wBack:[63,79,98],wFace:[148,128,110],wLite:[181,149,139],wTurq:[94,114,112],path:[238,197,147],glint:[253,232,165],pk:[.8,.8,.8],spark:[244,214,172]},kl={trough:[63,47,73],mid:[91,73,99],face:[129,80,110],lite:[202,125,125],midD:[74,63,95],midM:[94,76,105],midF:[101,74,105],midL:[122,86,102],farD:[84,58,86],far:[104,70,98],farF:[124,78,100],farL:[146,84,98],hz:[126,76,100],foam:[247,180,162],foamShade:[177,122,140],wBack:[67,56,82],wFace:[125,86,95],wLite:[157,106,126],wTurq:[94,84,91],path:[244,171,118],glint:[255,228,149],pk:[1,1,1],spark:[196,128,128]},Qo={trough:[8,33,62],mid:[17,57,92],face:[28,64,106],lite:[50,88,126],midD:[9,42,76],midM:[17,53,90],midF:[18,55,95],midL:[32,62,96],farD:[14,41,72],far:[29,63,96],farF:[20,66,111],farL:[40,78,120],hz:[13,76,131],foam:[133,172,202],foamShade:[70,105,140],wBack:[12,43,73],wFace:[50,77,103],wLite:[63,96,136],wTurq:[32,71,90],path:[185,221,236],glint:[230,250,254],pk:[.75,.75,.75],spark:[58,96,134]},gw=zs([[0,Qo],[.2,{...fn(Qo,kl,.25),pk:[0,0,0]}],[.245,fn(kl,Tv,.35)],[.3,wv],[.62,wv],[.7,Tv],[.75,kl],[.765,{...fn(kl,Qo,.25),pk:[0,0,0]}],[.8,{...fn(kl,Qo,.55),pk:[0,0,0]}],[.86,Qo],[1,Qo]]),Pv=`
uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright, uPaint, uWaves, uPathK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog;
uniform vec3 uPTrough, uPMid, uPFace, uPLite, uPMidD, uPMidM, uPMidF, uPMidL, uPFarD, uPFar, uPFarF, uPFarL, uPHz, uFoamLit, uFoamShade, uPPath, uPGlint, uPathDir, uPSpark;
uniform vec2 uOrigin, uSeaDir;
${Li}${mw}
vec4 vnoise4g(vec2 p, vec2 gx, vec2 gy){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, gx / 256.0, gy / 256.0); }
float wh(vec2 p){ return vnoise(p * 0.18 + vec2(uTime * 0.05, uTime * 0.03)) * 0.6 + vnoise(p * 0.55 - vec2(uTime * 0.09, -uTime * 0.04)) * 0.4; }
// ---- the painted waves (a bright day), in the reference art's manner: a field of wavelets drawn as horizontal lenses of
// deep blue (their faces turned towards us, which mirror the deep sky overhead), light streaks along their backs (which
// mirror the pale sky low down), the lightest and white glints on the highest. The wavelets are value noise stretched
// along the crests and rolling in. They grow with distance just enough that the far ones shrink on screen as in the
// painting without ever going under a pixel or two: each time the distance doubles, 2^1.75 times longer across the
// crests and 2^0.75 times along them (two neighbouring sizes blended, keeping their contrast), so the far sea keeps a
// fine texture right out to the far shore and never shimmers.
// the wavelets' height and their slope up away from us (per cell), broad ones with a finer chop over them (phones: the
// broad ones only); z: a sparkle field, for the glints. (gx, gy: q's footprint on screen, worked out from the smooth
// world position: q itself jumps where one size of wavelet hands over to the next, and the noise's own derivatives
// would blur a line of pixels there)
vec3 ripple(vec2 q, vec2 gx, vec2 gy){
  vec4 n0 = vnoise4g(q, gx, gy); float h1 = vnoise4g(q + vec2(0.0, 0.2), gx, gy).x;
#ifdef SEA_LITE
  return vec3(n0.x, (h1 - n0.x) * 5.0, n0.y);
#else
  vec2 k = vec2(2.3, 2.7), q2 = q * k + vec2(13.7, 7.1), g2x = gx * k, g2y = gy * k;
  float d0 = vnoise4g(q2, g2x, g2y).x, d1 = vnoise4g(q2 + vec2(0.0, 0.54), g2x, g2y).x;
  return vec3(n0.x * 0.65 + d0 * 0.35, ((h1 - n0.x) * 0.65 + (d1 - d0) * 0.35) * 5.0, n0.y);
#endif
}
/** p: the world position (absolute), d: from the camera, dist: its length; pw: how much of the low sun's (or the moon's)
 *  path on the water is here (0 \u2026 1) */
vec3 paintedSea(vec2 p, vec2 d, float dist, float pw){
  vec2 V = d / max(dist, 1e-3), e = vec2(-uSeaDir.y, uSeaDir.x);
  float c = dot(uSeaDir, V);
  float al = dot(p, e), ac = dot(p, uSeaDir);   // (along the crests, and the way they roll)
  vec2 dx = dFdx(d), dy = dFdy(d), gx = vec2(dot(dx, e), dot(dx, uSeaDir)), gy = vec2(dot(dy, e), dot(dy, uSeaDir));
  float lod = max(log2(dist / 40.0), 0.0), k0 = floor(lod), fr = lod - k0;
  float lam = 3.0 * exp2(1.75 * k0), mu = 1.1 * exp2(0.75 * k0), lb = lam * 3.3635857, mb = mu * 1.6817928;
  vec2 sa = vec2(1.0 / mu, 1.0 / lam), sb = vec2(1.0 / mb, 1.0 / lb);
  vec3 ra = ripple(vec2(al / mu, (ac - 1.25 * sqrt(lam) * uTime) / lam) + k0 * vec2(37.0, 53.0), gx * sa, gy * sa);
  vec3 rb = ripple(vec2(al / mb, (ac - 1.25 * sqrt(lb) * uTime) / lb) + (k0 + 1.0) * vec2(37.0, 53.0), gx * sb, gy * sb);
  float sn = inversesqrt((1.0 - fr) * (1.0 - fr) + fr * fr);              // (a blend that keeps the contrast)
  float h = 0.5 + (mix(ra.x, rb.x, fr) - 0.5) * sn, sl = mix(ra.y, rb.y, fr) * sn * (c < 0.0 ? -1.0 : 1.0); // (slope: up away from us)
  float con = smoothstep(0.05, 0.3, abs(c));                               // (no faces seen looking along the crests)
  // the tones by distance, measured in the painting row by row: its water pales steadily from the wall out to ~250 m,
  // then (all its tones together, keeping their contrast) on towards the light azure of the far shore
  float f1 = clamp(log2(dist / 33.0) * 1.16, 0.0, 1.0), ff = clamp(log2(dist / 60.0) * 0.485, 0.0, 1.0);
  vec3 hz = (uPHz - uPFar) * smoothstep(0.0, 1.0, log2(dist / 230.0) * 0.5);
  vec3 T = mix(mix(uPTrough, uPMidD, f1), uPFarD, ff) + hz, M = mix(mix(uPMid, uPMidM, f1), uPFar, ff) + hz;
  vec3 F = mix(mix(uPFace, uPMidF, f1), uPFarF, ff) + hz, Li = mix(mix(uPLite, uPMidL, f1), uPFarL, ff);
  float aw = fwidth(sl) * 0.6 + 0.02, hw = fwidth(h) * 0.6 + 0.01;
  float dark = smoothstep(0.22 - aw, 0.22 + aw, sl) * con, lite = smoothstep(0.22 - aw, 0.22 + aw, -sl) * con;
  vec3 col = mix(M, T, dark * (0.7 + 0.3 * smoothstep(0.22, 0.72, sl)));
  col = mix(col, F, lite);
  col = mix(col, Li, lite * smoothstep(0.59 - hw, 0.59 + hw, h));
  float gl = mix(ra.z, rb.z, fr), gw = fwidth(gl) * 0.6 + 0.01, gt = 0.67 - 0.14 * ff;   // (more glints far out)
  float white = lite * max(smoothstep(0.77 - hw, 0.77 + hw, h), smoothstep(gt - gw, gt + gw, gl) * smoothstep(0.45, 0.6, h));
  col = mix(col, mix(uPSpark, uPFarL, ff * 0.5), white);
  if (pw > 0.003) {
    // the low sun's (or the moon's) path, as the paintings draw it: a column of light on the water under it, its wavelets'
    // lit backs taking its colour and most of them glinting, the water between lighter too
    col = mix(col, mix(col, uPPath, 0.5), pw * (1.0 - lite) * 0.75);
    col = mix(col, uPPath, min(lite * 1.5, 1.0) * pw);
    float pg = lite * max(smoothstep(0.6 - 0.25 * pw - hw, 0.6 - 0.25 * pw + hw, h), smoothstep(gt - 0.2 * pw - gw, gt - 0.2 * pw + gw, gl));
    col = mix(col, uPGlint, pg * pw);
  }
  return col;
}
vec3 seaColour(vec3 w){
  vec3 V = normalize(uCam - w); float dist = length(uCam.xz - w.xz);
  vec2 p = w.xz + uOrigin;   // (world-anchored: the patterns stay put when the world's origin moves)
  vec3 col = vec3(0.0);
  if (uPaint < 0.999) {
    float e = 0.6, h0 = wh(p);
    vec3 N = normalize(vec3((h0 - wh(p + vec2(e, 0.0))) * 1.4, 1.0, (h0 - wh(p + vec2(0.0, e))) * 1.4));
    N = normalize(mix(N, vec3(0.0, 1.0, 0.0), smoothstep(80.0, 900.0, dist) * 0.8));
    vec3 R = reflect(-V, N);
    float al = max(dot(R, uSunDir), 0.0);
    float spec = pow(al, 300.0) * 5.0;
    float broad = pow(al, 18.0);
    float spark = step(0.86, vnoise(p * 2.2 + vec2(uTime * 0.7, -uTime * 0.5))) * step(0.5, vnoise(p * 0.7 - uTime * 0.3));
    vec3 glint = uSunCol * (spec + spark * broad * 3.0 + broad * 0.15) * (1.0 - uNight * 0.6) * uSpecK;
    float fres = pow(1.0 - max(dot(V, N), 0.0), 3.0);
    // dawn, dusk, night and grey skies: the water mirrors the sky (more of the blue overhead the brighter the day), with
    // the sun's glints, in the fog
    vec3 deep = mix(mix(vec3(0.010, 0.10, 0.26), vec3(0.004, 0.11, 0.40), uBright), mix(vec3(0.03, 0.22, 0.40), vec3(0.02, 0.25, 0.62), uBright), 0.5 + 0.5 * vnoise(p * 0.02));
    vec3 sky = mix(uHorizon, uZenith, 0.25 + 0.45 * uBright);
    col = mix(deep, sky, clamp(fres * (1.15 - 0.3 * uBright) + 0.08 - 0.03 * uBright, 0.0, 1.0));
    // painted wave crests: thin light streaks
    float crest = smoothstep(0.78, 0.86, vnoise(vec2(p.x * 0.08, p.y * 0.5) + uTime * 0.04)) * (1.0 - smoothstep(60.0, 400.0, dist));
    col = mix(col, sky * 1.15, crest * 0.35);
    col += glint;
    float fd = dist * uFogD;
    col = mix(col, uFog, 1.0 - exp(-fd * fd));
  }
  if (uPaint > 0.001) {
    // the painted sea (under a clear sky): the painting's wavelets, paling into the light azure at the far shore by day
    // (uWaves off, a test switch: its flat tones). The low sun's (or the moon's) path: where the water would mirror it into
    // the eye with a wave tilted no more than the painted waves are (the half-vector's tilt from the vertical)
    float pw = 0.0;
    if (uPathK > 0.001) { vec3 H = normalize(uPathDir + V); pw = uPathK * exp(-(1.0 - H.y) * 16.0); }
    vec3 pc = uWaves > 0.5 ? paintedSea(p, w.xz - uCam.xz, dist, pw) : mix(uPMid, uPFar, smoothstep(15.0, 260.0, dist));
    pc = mix(pc, uPHz, smoothstep(1500.0, 4000.0, dist) * 0.7);
    col = mix(col, pc, uPaint);
  }
  return col;
}`;function Iv(i=!1){let e=new ft({fog:!1,defines:i?{SEA_LITE:""}:{},uniforms:Vl,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${Pv}
      varying vec3 vW;
      void main(){ gl_FragColor = vec4(mix(uFog, seaColour(vW), uVis), 1.0); }`}),t=new mt(new on(14e3,14e3),e);t.rotation.x=-Math.PI/2,t.position.y=ls,t.renderOrder=998,t.frustumCulled=!1;let n=Vl;return{mesh:t,u:n,update(s,r,o,l=1,a=null,u=null,h=0){t.position.x=s.x,t.position.z=s.z,u&&l>0&&vw(u,h,n.uSeaDir.value),n.uTime.value=r,n.uCam.value.copy(s),n.uNight.value=se.night,n.uBright.value=se.bright,n.uFogD.value=o,n.uVis.value=l,n.uSpecK.value=1-se.overcast*.85;let p=a?gr():0;n.uPaint.value=p;let m=1+.25*se.bright,x=1/(Math.PI*m),_=se.sunCol,M=se.hemiSky,c=se.sunI*.8,f=se.hemiI;if(n.uFoamLit.value.setRGB((_.r*c+M.r*f)*x,(_.g*c+M.g*f)*x,(_.b*c+M.b*f)*x),n.uFoamShade.value.setRGB(M.r*f*.9*x,M.g*f*.9*x,M.b*f*.9*x),n.uPathK.value=0,p>0){let d=gw.at(se.t),g=a;d.ug(g,"trough",n.uPTrough.value),d.ug(g,"mid",n.uPMid.value),d.ug(g,"face",n.uPFace.value),d.ug(g,"lite",n.uPLite.value),d.ug(g,"midD",n.uPMidD.value),d.ug(g,"midM",n.uPMidM.value),d.ug(g,"midF",n.uPMidF.value),d.ug(g,"midL",n.uPMidL.value),d.ug(g,"farD",n.uPFarD.value),d.ug(g,"far",n.uPFar.value),d.ug(g,"farF",n.uPFarF.value),d.ug(g,"farL",n.uPFarL.value),d.ug(g,"hz",n.uPHz.value),n.uFoamLit.value.lerp(d.ug(g,"foam",Ev),p),n.uFoamShade.value.lerp(d.ug(g,"foamShade",Ev),p),d.ug(g,"spark",n.uPSpark.value),zh(d,g,"wBack",n.uPWBack.value,n.uPMid.value),zh(d,g,"wFace",n.uPWFace.value,n.uPMid.value),zh(d,g,"wLite",n.uPWLite.value,n.uPMid.value),zh(d,g,"wTurq",n.uPWTurq.value,n.uPMid.value);let v=se.sunEl>-.04?se.sunDir:se.moonDir,b=Math.min(Math.max((v.y-.3)/.3,0),1);n.uPathK.value=d.rgb("pk")[0]*p*n.uWaves.value*(1-b*b*(3-2*b)),n.uPathK.value>0&&(n.uPathDir.value.copy(v),d.ug(g,"path",n.uPPath.value),d.ug(g,"glint",n.uPGlint.value))}}}}var Ev=new ue,zh=(i,e,t,n,s)=>{i.ug(e,t,n),n.r-=s.r,n.g-=s.g,n.b-=s.b},ea={zone:-1,x:1,z:0},Av={},Rv=.35;function vw(i,e,t){let n=Math.floor((e-150)/Ii),s=Math.floor((e+800)/Ii)+1;for(let r=n;r<=s;r++)if(!(yh(r*Ii+Ii/2,"coast")<.99)){if(r!==ea.zone){let o=0,l=0;for(let h=r*Ii-zo;h<=(r+1)*Ii;h+=25)i.at(Math.max(h,0),Av),o+=Av.h,l++;o/=l,ea.zone=r;let a=Math.cos(Rv),u=Math.sin(Rv);ea.x=-Math.sin(o)*a-Math.cos(o)*u,ea.z=-Math.cos(o)*a+Math.sin(o)*u}t.set(ea.x,ea.z);return}}function Lv(i=!1){let e=Sv(5.5),t=Sv(.45),n=8*Hl/zl,s=pw(2.6),r=Ld(.8),o=Ld(17.3),l=Ld(3.7);return new ft({fog:!1,defines:i?{SHORE_LITE:"",SEA_LITE:""}:{},uniforms:Vl,vertexShader:"attribute vec2 su; attribute vec2 hf; varying vec2 vSU; varying vec2 vHF; varying vec3 vW; void main(){ vSU = su; vHF = hf; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${Pv}${Wl}
      uniform vec3 uPWBack, uPWFace, uPWLite, uPWTurq; uniform float uShoreW;
      varying vec2 vSU; varying vec2 vHF; varying vec3 vW;
      vec4 vnoise4L(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0); }
      // a wave's profile as the painting draws it, by e (from its line of foam, in waves; > 0 beyond it): the water just
      // beyond the foam a bright clear cyan, lightest at the foam, fading into the blue; the trough between two waves navy
      float faceW(float e, float aa){ return (1.0 - smoothstep(0.05, 0.38, e)) * smoothstep(0.0, aa, e); }
      float troughW(float e){ return smoothstep(0.2, 0.4, abs(e)); }
      void main(){
        vec3 sea = seaColour(vW), col = sea;
        float s = vSU.x, d = max(vSU.y, 0.0), dist = length(uCam - vW);
        if (uShoreW > 0.5) {
          // the waves' frame (m): a along their crests (out from the wall), b square to them (away from us, out to sea)
          float a = d * ${Yn(Hh)} - s * ${Yn(zl)}, b = s * ${Yn(Hh)} + d * ${Yn(zl)};
          vec4 nA = vnoise4(vec2(s * 0.0609524, d * 0.12 + uTime * 0.01));
          float wob = (nA.x - 0.5) * 0.9;   // (the rows wander)
          // the waves drawn here: the smallest (OCT to each big one) out to 8 m from us, then doubling at each doubling of
          // the distance, every other crest fading out in between, so the sizes hand over without a seam. q: the phase in
          // this size's waves; e: from the nearest crest of this size, e1: of the next size up (in their own waves); f:
          // since the last big wave passed
          float ph1 = (shorePhase(s, d) + wob) * ${Vh.toFixed(1)}, f = fract(ph1 * ${(1/Vh).toFixed(3)}), fw1 = fwidth(ph1) + 1e-4;
          float L = clamp(log2(dist * 0.125), 0.0, 3.0), k0 = floor(L), fr = L - k0, P = exp2(k0);
          float q = ph1 / P, n0 = floor(q + 0.5), n1 = floor(0.5 * q + 0.5), ev = 1.0 - mod(n0, 2.0), aa = fw1 / P * 1.2;
          // the details' coordinates and their footprints on screen first (they are read only near the crests and where
          // there is foam): the crest's torn edge and its beads ride with the crest; the lace stays in the water as the
          // waves pass through it, drifting in slowly. Along the road they repeat with S_WRAP
          vec2 pC = vec2(a * ${Yn(e)}, ph1 * ${Yn(r)}), cx = dFdx(pC), cy = dFdy(pC);
          vec2 pL = vec2(a * ${Yn(t)}, (b + uTime * 0.3) * ${Yn(s)}), lx = dFdx(pL), ly = dFdy(pL);
          // the waves in full out to ~14 m from the wall, easing into the open sea's own wavelets by the strip's edge; their
          // crests fade as they shrink to a few pixels far ahead
          float near = 1.0 - smoothstep(14.0, 36.0, d), vis = 1.0 - smoothstep(0.07, 0.18, aa * 0.8333), nw = 1.0 - smoothstep(3.0, 20.0, d);
          // a short-crested sea, as the painting's: each crest a few of its wavelengths long, bowed, bigger and smaller
          // along it, breaking where it is biggest (more of it near the wall), each its own: one pattern per crest, riding
          // with it, at its size (E0 for the crests of this size, E1 for the next size's)
          vec4 E0 = vnoise4L(vec2(a * ${Yn(n)} / P + n0 * P * ${Yn(o)}, n0 * P * ${Yn(l)})), E1 = vec4(0.5);
          // (the next size's only between two sizes: inside 8 m and beyond 64 m every use of it is weighted by fr = 0)
          if (fr > 0.0) E1 = vnoise4L(vec2(a * ${Yn(n)} * 0.5 / P + n1 * 2.0 * P * ${Yn(o)}, n1 * 2.0 * P * ${Yn(l)}));
          float e = q - n0 + (E0.y - 0.5) * 0.45, e1 = 0.5 * q - n1 + (E1.y - 0.5) * 0.45, bz = 0.12 + 0.1 * nw;
          float A0 = smoothstep(0.26, 0.5, E0.x + bz), A1 = smoothstep(0.26, 0.5, E1.x + bz);
          float B0 = smoothstep(0.46, 0.66, E0.x + bz + 0.08 * nw), B1 = smoothstep(0.46, 0.66, E1.x + bz + 0.08 * nw);
          // the crest drawn: this size's (the ones the next size up doesn't have fading out, the others growing into it)
          float Ac = mix(A0, A1 * ev, fr), brk = mix(B0, B1 * ev, fr), ec = mix(e, 2.0 * e1, fr * ev), gw = 1.0 + fr * ev;
          // the painted tones (a bright day): the open sea's own (Ms, at this distance) with the waves' cyan and navy, its
          // wavelets riding on them calmed
          float f1 = clamp(log2(dist / 33.0) * 1.16, 0.0, 1.0), ff = clamp(log2(dist / 60.0) * 0.485, 0.0, 1.0);
          vec3 Ms = mix(mix(uPMid, uPMidM, f1), uPFar, ff);
          float face = mix(faceW(e, aa) * (0.55 + 0.45 * A0), faceW(e1, aa * 0.5) * (0.55 + 0.45 * A1), fr);
          float back = mix(troughW(e) * (0.6 + 0.4 * A0), troughW(e1) * (0.6 + 0.4 * A1), fr);
          vec3 tone = Ms + uPWBack * (back * 1.35) + mix(uPWFace, uPWLite, smoothstep(0.55, 1.0, face)) * (face * 1.4) + uPWTurq * (0.6 - 0.6 * smoothstep(1.0, 7.0, d));
          col = mix(sea, max(tone + (sea - Ms) * (0.35 - 0.15 * face), vec3(0.0)), uPaint * near);
          // the line of foam: beads and dashes of white along it (nearly unbroken where it breaks); where it breaks a white
          // crest with a torn top and streaks of foam falling from it. Lit on top, in its own light-blue shade below
          float crest = 0.0, cl = 1.0;
          // (its torn top and the streaks are spray and foam standing up off the water, seen from the side: looking down
          // on it from high up they shrink to the crest. Its reach (rc): the noise is read only within it)
          float lw = (0.027 + 0.021 * E0.w) * gw, cw = 0.16 * brk * (0.6 + 0.8 * E0.z) * gw;
          float sv = 1.0 - 0.75 * smoothstep(0.25, 0.7, (uCam.y - vW.y) / max(dist, 1.0)), fl = 0.4 * brk * sv;
          float rc = max(lw + 0.01, ec > 0.0 ? cw * (0.15 + 5.12 * sv) : cw * 1.2 + fl) + aa;
          if (abs(ec) < min(rc, 0.45) && vis * near * Ac > 0.01) {
            vec4 nC = vnoise4g(pC, cx, cy);
            float line = (1.0 - smoothstep(lw - aa, lw + aa, abs(ec + 0.008))) * smoothstep(-0.05, 0.05, nC.x - mix(0.62, 0.3, brk));
            float up = cw * (0.15 + 3.2 * nC.y * nC.y * nC.y * (0.4 + 1.2 * E0.w) * sv), dn = cw * (0.3 + 0.9 * nC.w);
            float out1 = ec > 0.0 ? ec - up : -ec - dn;                     // (outside the crest, in waves)
            float tuft = (1.0 - smoothstep(-aa, aa, out1)) * step(0.01, cw);
            float t = clamp(out1 / max(fl, 1e-3), 0.0, 1.0);
            float fing = ec < 0.0 ? smoothstep(0.0, 0.05, nC.z - 0.5 - 0.42 * t) * (1.0 - t) * step(0.0, out1) * brk : 0.0;
            crest = max(max(line, tuft), fing) * Ac * vis * near;
            cl = clamp(0.6 + (ec + dn * 0.5) / max(cw + lw, 1e-3) * 0.5 + 0.35 * (nC.w - 0.5), 0.0, 1.0);
          }
          // the lace: running back from a breaking crest and streaked beyond it, churned along the wall as each big wave
          // hits it (and on through the water near it), and round the heaps
          float trail = brk * near * smoothstep(0.0, aa, ec) * (1.0 - smoothstep(0.02, 0.25, ec)) * 0.55;
          float hit = 1.0 - smoothstep(0.0, 0.35, fract(shorePhase(s, 0.0) + wob));
          float amt = max(trail, max(faceW(ec, aa) * brk * near * 0.3, (1.0 - smoothstep(0.3, 0.9 + 2.2 * hit, d)) * (0.55 + 0.45 * hit)));
          amt = max(amt, (1.0 - smoothstep(1.0, 8.0, d)) * (0.36 + 0.5 * hit));
          amt = max(amt, vHF.x * (0.6 + 0.4 * (1.0 - smoothstep(0.0, 0.4, f))));
          float la = 0.0; vec3 foam = uFoamLit;
          if (amt > 0.08) {
            vec4 nB = vnoise4g(pL, lx, ly);
            float lf = length(lx) + length(ly), lw = 0.01 + 0.3 * lf, th = mix(1.25, 0.5, amt), ww = 0.045 * amt;
            la = max(smoothstep(th - lw, th + lw, nB.x), (1.0 - smoothstep(ww - lw, ww + lw, abs(nB.x - 0.5))) * (1.0 - smoothstep(0.08, 0.22, lf))) * smoothstep(0.08, 0.2, amt);
            foam = mix(uFoamShade, uFoamLit, clamp(0.45 + 0.8 * (nB.y - 0.35), 0.0, 1.0));
          }
          foam = mix(foam, mix(uFoamShade, uFoamLit, cl), crest);
          // it all fades out with the sea's fog, towards the end of the built world and towards the strip's ends
          float fd = dist * uFogD, k = exp(-fd * fd) * (1.0 - smoothstep(420.0, 700.0, dist)) * vHF.y;
          col = mix(mix(sea, col, k), foam, max(la, crest) * k);
        }
        gl_FragColor = vec4(mix(uFog, col, uVis), 1.0);
      }`})}function Dv(){return new ft({fog:!1,uniforms:{uNoiseTex:Re.uNoiseTex,uTime:{value:0},uSunDir:{value:se.lightDir},uSunCol:{value:se.sunCol},uHorizon:{value:se.horizon},uZenith:{value:se.zenith},uFog:{value:se.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${Li}
      void main(){
        vec3 V = normalize(vW - cameraPosition); float dist = length(cameraPosition - vW);
        vec2 p = vec2(vSU.y * 0.22 - uTime * 0.55, vSU.x * 0.6);   // flows along the channel
        float n1 = vnoise(p), n2 = vnoise(p * 2.7 + 5.0);
        vec3 N = normalize(vec3((n1 - 0.5) * 0.25, 1.0, (n2 - 0.5) * 0.25));
        vec3 R = reflect(V, N);
        float hgt = clamp(R.y, 0.0, 1.0);
        vec3 sky = mix(uHorizon, uZenith, pow(hgt, 0.55));
        vec3 deep = mix(vec3(0.02, 0.12, 0.13), vec3(0.05, 0.2, 0.22), n1);
        float fr = 0.3 + 0.7 * pow(1.0 - clamp(-V.y, 0.0, 1.0), 3.0);
        vec3 col = mix(deep * (1.0 - 0.6 * uNight), sky, fr * 0.85);
        float streak = smoothstep(0.72, 0.8, vnoise(vec2(vSU.y * 0.08 - uTime * 0.3, vSU.x * 1.4)));
        col += streak * 0.06 * (1.0 - uNight);
        col += uSunCol * pow(max(dot(R, uSunDir), 0.0), 180.0) * 4.0 * uSpecK * (1.0 - uNight * 0.7);
        float edge = smoothstep(12.2, 14.2, abs(vSU.x));              // a little foam where it meets the banks
        col = mix(col, vec3(0.85, 0.9, 0.92) * (1.0 - 0.7 * uNight), edge * 0.35 * vnoise(vec2(vSU.y * 0.5 - uTime, vSU.x)));
        float fd = dist * uFogD;
        gl_FragColor = vec4(mix(col, uFog, 1.0 - exp(-fd * fd)), 1.0);
      }`})}var ta={n:8,drops:4};function Nv(){return new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:Vl,vertexShader:`
      uniform float uTime, uVis; attribute vec4 aB; attribute vec3 aC; attribute float aK;
      varying vec2 vUv; varying vec4 vK;
      ${Wl}
      float h11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
      void main(){
        float seed = aB.w, s = aC.z;
        // two bursts to each big wave: its own, and a smaller one halfway to the next (the waves between, as the shore's)
        float ph = (shorePhase(s, aB.z) - 0.02 - 0.08 * fract(seed * 7.13)) * 2.0; // (each a moment after the wave arrives)
        float wave = floor(ph), str = h11(wave * 7.37 + floor(s / 12.0) * 1.13) * (1.0 - 0.4 * mod(wave, 2.0)); // how hard it hits here
        float age = fract(ph) * ${(Hs.T/2).toFixed(3)};
        float h1 = fract(seed * 13.7), h2 = fract(seed * 71.3), h3 = fract(seed * 3.31), h4 = fract(seed * 27.9);
        vec3 base = position - vec3(0.0, 0.3, 0.0);                                 // (the water's surface)
        float H = (0.8 + 1.2 * h1) * (0.6 + 0.6 * str), k, a;
        vec2 half2;
        vec3 p;
        if (aK < 0.5) {
          // the lace sheet: up fast (most of its height in a fifth of a second), then eroding as it falls back
          float dur = 1.0 + 0.6 * str; k = age / dur;
          float g = 1.0 - (1.0 - min(age / 0.28, 1.0)) * (1.0 - min(age / 0.28, 1.0));
          float hh = H * g * (1.0 - 0.25 * smoothstep(0.5, 1.0, k));
          half2 = vec2(H * (0.5 + 0.3 * h4), 0.5 * hh);
          p = base - vec3(0.0, 0.35 * H * smoothstep(0.55, 1.0, k), 0.0);
          a = smoothstep(0.0, 0.05, k) * (1.0 - smoothstep(0.88, 1.0, k));
        } else {
          // a droplet: flung up and out from the sheet's upper half, falling back into the sea
          float j = aK * 1.618, d1 = fract(seed * 91.7 + j * 0.37), d2 = fract(seed * 37.1 + j * 0.71), d3 = fract(seed * 17.9 + j * 0.13), d4 = fract(seed * 53.3 + j * 0.53);
          float t = age - 0.08 - 0.12 * d1; k = t / 1.3;
          float up = (2.2 + 2.6 * d2) * (0.6 + 0.5 * str), out1 = (0.6 + 1.6 * d3);
          vec2 o = aB.xy, sd = vec2(-o.y, o.x) * (d4 - 0.5) * 2.6;
          vec2 hv = o * out1 * (d1 - 0.35) + sd;
          p = base + vec3((d4 - 0.5) * H * 0.6, H * (0.25 + 0.35 * d2), 0.0) + vec3(hv.x * t, up * t - 4.9 * t * t, hv.y * t);
          float r = (0.035 + 0.05 * d3) * (0.7 + 0.5 * str);
          half2 = vec2(r);
          a = step(0.0, t) * step(-0.15, p.y - base.y) * (1.0 - smoothstep(0.85, 1.0, k));
        }
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float near = smoothstep(2.5, 7.0, -mv.z);   // (right by the camera it thins out and shrinks: big cards cost fill)
        // (droplets fade out before they shrink under a pixel or two far off)
        float far = aK < 0.5 ? 1.0 : 1.0 - smoothstep(45.0, 90.0, -mv.z);
        vec2 off = aC.xy * half2 * (0.4 + 0.6 * near);
        if (aK < 0.5) off.y += half2.y * (0.4 + 0.6 * near);   // (the sheet stands on its foot)
        mv.xy += off;
        vUv = aC.xy; vK = vec4(k, uVis * near * far * a, seed, aK);
        gl_Position = k < 1.0 && str > 0.25 && vK.y > 0.01 ? projectionMatrix * mv : vec4(2.0, 2.0, 2.0, 1.0);
      }`,fragmentShader:`
      uniform vec3 uFoamLit, uFoamShade; varying vec2 vUv; varying vec4 vK;
      ${Li}
      vec4 vnoise4g(vec2 p, vec2 gx, vec2 gy){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, gx / 256.0, gy / 256.0); }
      void main(){
        if (vK.w > 0.5) {
          // a droplet: a crisp round drop, white on top, light blue below
          float r = length(vUv), fw = fwidth(r) * 1.2;
          float a = (1.0 - smoothstep(1.0 - fw, 1.0, r)) * vK.y;
          if (a < 0.01) discard;
          gl_FragColor = vec4(mix(uFoamShade, uFoamLit, 0.55 + 0.45 * vUv.y), a);
          return;
        }
        // the lace sheet: a fan of streaks from its foot (the card's bottom middle), each its own length, ragged and spiky at
        // the tips; lace holes open and the tips break into drops as it erodes (k: its age, 0\u20261)
        vec2 q = vec2(vUv.x, (vUv.y + 1.0) * 0.5);       // (x \u22121\u20261 across, y 0\u20261 up from the foot)
        float th = atan(q.x, q.y * 1.15 + 0.05), r = length(vec2(q.x * 0.85, q.y));
        float sd = vK.z * 97.0;
        // (the noise's footprint first: taken before any branch or discard)
        vec2 pa = vec2(th * 3.2 + sd, sd * 0.37), pb = vUv * vec2(3.4, 4.6) + sd, pc = vUv * vec2(7.5, 9.0) + sd * 1.7;
        vec2 ax = dFdx(pa), ay = dFdy(pa), bx = dFdx(pb), by = dFdy(pb), cx = dFdx(pc), cy = dFdy(pc);
        float fr = fwidth(r) + 1e-4;
        if (abs(th) > 1.35 || vK.y < 0.01) discard;
        vec4 nA = vnoise4g(pa, ax, ay), nB = vnoise4g(pb, bx, by), nC = vnoise4g(pc, cx, cy);
        // each streak's reach (a ridged noise along the fan: spikes), shorter towards the fan's sides
        float rid = 1.0 - abs(2.0 * nA.x - 1.0);
        float reach = (0.5 + 0.5 * rid * rid + 0.12 * (nA.y - 0.5)) * (1.0 - 0.42 * th * th);
        float k = vK.x, ero = smoothstep(0.15, 1.0, k);
        // lace: holes that open as it erodes, most where it is thin (up towards the tips)
        float lace = nB.x * 0.6 + nC.x * 0.4;
        float m = (reach - r) * 3.0 + (lace - 0.5) * (0.9 + 1.4 * ero) - ero * (1.6 + 1.2 * r);
        float a = smoothstep(-fr * 3.0, fr * 3.0, m) * vK.y;
        if (a < 0.01) discard;
        // white on top and at the streaks' tips, its foot and its thick middle in a light blue shade
        float lit = clamp(0.2 + 1.2 * r - 0.35 * smoothstep(0.0, 0.6, m) + 0.3 * (nC.y - 0.5), 0.0, 1.0);
        gl_FragColor = vec4(mix(uFoamShade, uFoamLit, lit), a);
      }`})}function Fv(i){let e=i.length/8;if(!e)return null;let t=1+ta.drops,n=e*t,s=new Float32Array(n*12),r=new Float32Array(n*16),o=new Float32Array(n*12),l=new Float32Array(n*4),a=new Uint16Array(n*6),u=[-1,1,1,-1],h=[-1,-1,1,1],p=1/0,m=1/0,x=1/0,_=-1/0,M=-1/0,c=-1/0;for(let d=0;d<e;d++){let g=d*8;for(let v=0;v<t;v++){let b=d*t+v;for(let T=0;T<4;T++){let w=b*4+T;s[w*3]=i[g],s[w*3+1]=i[g+1],s[w*3+2]=i[g+2],r[w*4]=i[g+3],r[w*4+1]=i[g+4],r[w*4+2]=i[g+5],r[w*4+3]=i[g+6],o[w*3]=u[T],o[w*3+1]=h[T],o[w*3+2]=i[g+7],l[w]=v}a.set([b*4,b*4+1,b*4+2,b*4,b*4+2,b*4+3],b*6)}p=Math.min(p,i[g]),m=Math.min(m,i[g+1]),x=Math.min(x,i[g+2]),_=Math.max(_,i[g]),M=Math.max(M,i[g+1]),c=Math.max(c,i[g+2])}let f=new yt;return f.setAttribute("position",new St(s,3)),f.setAttribute("aB",new St(r,4)),f.setAttribute("aC",new St(o,3)),f.setAttribute("aK",new St(l,1)),f.setIndex(new St(a,1)),f.boundingBox=new gi(new H(p-4,m-1,x-4),new H(_+4,M+4,c+4)),f.boundingSphere=f.boundingBox.getBoundingSphere(new vi),f}var qt=60,Dd=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],Uv=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],Bv=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Vs=32,Nd=[-.2,2.2,5.5,10,17,27,38],Gl=[.025,.026,.032],Ov=[.05,.05,.065],kv=new et,Ss=(i,e)=>(i%e+e)%e,Ws=(i,e)=>{let t=ur(i);return!!t&&Math.abs(i-t.s)<e},Wh=i=>Ss(i,4)===0,xw=i=>Ss(i,2)===0,Od=1.4,zv=i=>Wh(i)?4.4:Od+.9,Fd=i=>Wh(i)?3.4:Od-.1,Ud=(i,e)=>Math.abs(i-Math.round(i/300)*300)<e,Di=(i,e)=>{let t=zi(i);return!!t&&Math.abs(i-t.s)<e},li=(i,e)=>{let t=ki(i);return!!t&&Math.abs(i-t.s)<e},Bd=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let l=n(r,o);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let l=s+r*t+o,a=l+1,u=l+t,h=u+1;this.I.push(l,a,u,a,h,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,l=new Array(e*o);for(let u=0;u<e;u++)for(let h=0;h<o;h++)l[u*o+h]=n(u,h-s);let a=(u,h)=>l[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,h))];for(let u=0;u<e;u++)for(let h=s;h<s+t;h++){let p=a(u,h-1),m=a(u,h+1),x=a(u-1,h),_=a(u+1,h),M=l[u*o+h],c=m[0]-p[0],f=m[1]-p[1],d=m[2]-p[2],g=_[0]-x[0],v=_[1]-x[1],b=_[2]-x[2],T=f*b-d*v,w=d*g-c*b,y=c*v-f*g;w<0&&(T=-T,w=-w,y=-y);let S=Math.hypot(T,w,y)||1;M[3]=T/S,M[4]=w/S,M[5]=y/S}this.grid(e,t,(u,h)=>l[u*o+h+s])}build(){let e=new yt;return e.setAttribute("position",new je(this.P,3)),e.setAttribute("normal",new je(this.N,3)),e.setAttribute("su",new je(this.SU,2)),e.setAttribute("zw",new je(this.ZW,4)),e.setAttribute("rk",new je(this.RK,2)),e.setAttribute("rv",new je(this.RV,1)),e.setAttribute("zs",new je(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},Gh=class{constructor(e,t,n,s){this.path=t,this.M=n,this.riverMat=s,this.heapCache=new Map,this.group=new dn,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/qt),s=Math.floor((e+this.ahead)/qt);for(let[o,l]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(l),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let l=o.pending.shift();l&&o.group.add(l),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let a=Math.max(0,n);a<=s;a++)if(!this.chunks.has(a)){l=a;break}if(l<0)return 0;l*qt-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let o=this.job.it.next();if(o.done){let l=o.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let l=o*qt-e,a=r.group.children;for(let u=0;u<a.length;u++){let h=a[u],p=h.userData.detail;p&&(h.visible=p==="leaf"?l<s:l<t||n&&p==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*qt,s=n+qt,r=t.at(n),o=r.x,l=r.z,a=Et(Math.floor(_n(e,777)*4294967295)),u={atlas:new Jt({uv:!0,ao:!0,lit:!0}),color:new Jt({ao:!0}),foliage:new Jt,leaf:new Jt({uv:!0}),lamp:new Jt({color:!1}),sig:new Jt({color:!1}),sodium:new Jt({color:!1}),decal:new Jt({uv:!0}),pool:new Jt({uv:!0,color:!1}),gleaf:new Jt({uv:!0,off:!0}),gblossom:new Jt({uv:!0,off:!0}),tetra:new Jt({uv:!0,ao:!0,idx:!0}),bark:new Jt({uv:!0,ao:!0,idx:!0})},h=new Bd,p={rows:[],puffs:[]},m=[];u.lamps=[];let x={},_={},M=(E,R)=>{t.at(E,_);let C=zn(E,"rw");return _.y+_s(E,R,_.y,C)},c=E=>{let R=Dt(E);return[R.city,R.sakura,R.coast,R.country,R.snow]},f=(E,R,C)=>(t.at(E,x),[x.x+x.rx*R-o,C,x.z+x.rz*R-l]),d=(E,R,C,L=0,A=!0)=>{t.at(E,x);let I=x.h-Math.PI/2+(A&&R<0?Math.PI:0)+L,D=new et().makeRotationY(I);return D.setPosition(x.x+x.rx*R-o,C,x.z+x.rz*R-l),D.groundY=C,D},g=(E,R,C=0,L=0,A=!0)=>{let I=M(E,R),D=d(E,R,I+C,L,A);return D.groundY=I,D},v=E=>t.at(E,_).y,b=E=>zn(E,"rw"),T=E=>{let R=Dt(E);return R.city+R.sakura>.5?R.city>=R.sakura?3:2.6:0};{let E=ki(n+qt/2),R=!!E&&E.s>n-40&&E.s<s+40,C=R?61:21,L=b(n+qt/2),A=(()=>{let X=[0,...Uv].map(j=>j);return Bv.forEach(j=>X.push(j-L)),X})(),I=[...A.slice().reverse().map(k=>-k),...A],D=I.length,F=Array.from({length:C},(k,X)=>n+X/(C-1)*qt);{let k=zi(n+qt/2);if(k)for(let X of[k.s-bn,k.s+bn])X>n+.1&&X<s-.1&&F.push(X-.03,X+.03)}F.sort((k,X)=>k-X);let z=D/2,U=F.map(k=>(t.at(k,x),{s:k,f:{...x},rw:b(k),w:c(k),rb:R?Ag(k):0})),V=Math.round(z/2);for(let[k,X,j,Me]of[[0,V,0,1],[V-1,z,1,0],[z,z+V+1,0,1],[z+V,D,1,0]])h.gridN(U.length,X-k,(Se,we)=>{let Z=U[Se],q=Z.f,ve=k+we,Pe=I[ve],ee=Pe===0&&Z.w[2]>0?.15:0,xe=Pe<0||Pe===0&&ve<z?Pe-Z.rw+ee:Pe+Z.rw-ee,Fe=q.y+_s(Z.s,xe,q.y,Z.rw),ke=Math.abs(xe)>Z.rw+.98?Math.min(1,vh/.5):0;return[q.x+q.rx*xe-o,Fe,q.z+q.rz*xe-l,0,1,0,Ss(Z.s,ti),xe,Z.w[0],Z.w[1],Z.w[2],Z.w[3],Z.rw,0,Z.rb>0?Z.rb:-ke,Z.w[4]]},j,Me),yield}yield,h.grid(31,2,(R,C)=>{let L=n+R/30*qt,A=b(L),I=C?A:-A;t.at(L,x);let D=x.y,F=(v(L+1)-v(L-1))/2,z=-F*x.fx,U=1,V=-F*x.fz,k=Math.hypot(z,U,V),X=c(L);return[x.x+x.rx*I-o,D,x.z+x.rz*I-l,z/k,U/k,V/k,Ss(L,ti),I,X[0],X[1],X[2],X[3],A,1,0,X[4]]});{let E=[];for(let L=0;L<=30;L++){let A=n+L/30*qt;E.push({s:A,sw:T(A)})}let R=[],C=null;for(let L of E)L.sw>0?(C||(C=[],R.push(C)),C.push(L)):C=null;for(let L of R)if(!(L.length<2))for(let A of[-1,1])h.grid(L.length,2,(I,D)=>{let{s:F,sw:z}=L[I],U=b(F),V=A*(D===(A>0?0:1)?U:U+z);t.at(F,x);let k=c(F);return[x.x+x.rx*V-o,x.y+.15,x.z+x.rz*V-l,0,1,0,Ss(F,ti),V,k[0],k[1],k[2],k[3],U,2,0,k[4]]}),h.grid(L.length,2,(I,D)=>{let{s:F}=L[I],z=b(F),U=A*z,V=A>0?D:1-D;t.at(F,x);let k=c(F);return[x.x+x.rx*U-o,x.y+(V?.15:0),x.z+x.rz*U-l,-A*x.rx,0,-A*x.rz,Ss(F,ti),U,k[0],k[1],k[2],k[3],z,3,0,k[4]]})}yield,yield*this.placePoles(e,n,s,a,u,d,M,f,v,b);{let E=Math.ceil((n-Ur)/Fr),R=Ho(E);R<s&&wl(R)&&(yield*this.placeCrossing(u,h,R,d,v,b,M,T,o,l));let C=Math.ceil((n-Vo)/Br),L=J0(C);L<s&&j0(L)&&(yield*this.placeRiver(u,h,L,d,v,b,M,T,o,l,a,m));let A=zi(n+qt/2);A&&A.s+ln>n&&A.s-ln<s&&(yield*this.placeTunnel(u,h,A,n,s,d,g,M,b,o,l,a))}yield;for(let E=n;E<s;E+=4){let R=pn(E);(R==="coast"&&Dt(E).coast>.45||R==="mountain"&&Dt(E).mountain>.45)&&!Di(E+2,ln+4)&&this.guardrail(u,E,Math.min(E+4,s),f,v,b)}yield*this.placeCity(u,a,n,s,d,g,v,b,T,M,h,o,l),yield*this.placeSakura(u,a,n,s,d,g,v,b,M),yield*this.placeCoast(u,a,e,n,s,d,g,b,p,f),yield,yield*this.placeCountry(u,a,n,s,d,g,v,b,M),yield*this.placeMountain(u,a,n,s,d,g,v,b,M),yield*this.placeSnow(u,a,n,s,d,g,v,b,M),yield*this.placeVerge(u,a,n,s,d,M,b,e,o,l),yield;let w=new dn,y=(E,R,C,L,A=0,I)=>{if(!E)return null;let D=new mt(E,R);return D.castShadow=C,D.receiveShadow=L,D.renderOrder=A,I&&(D.userData.detail=I),w.add(D),D},S=new Set;for(let E of[n,n+20,n+40,s]){let R=cr(E);S.add(R.a),R.t>0&&S.add(R.b)}y(h.build(),Rl([...S]),!1,!0),yield;{let E=y(u.atlas.build(),this.M.atlas,!0,!0);E&&(E.customDepthMaterial=this.M.atlasDepth)}yield;{let E=y(u.color.build(),this.M.color,!0,!0);E&&(E.customDepthMaterial=Sh)}if(yield,y(u.tetra.build(),this.M.tetra,!0,!0),y(u.bark.build(),this.M.bark,!0,!0,0,"leaf"),yield,y(u.foliage.build(),this.M.foliage,!0,!0),y(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),this.M.gleaf){let E=y(u.gleaf.build(),this.M.gleaf,!0,!0,0,"leaf");E&&(E.customDepthMaterial=this.M.gleafDepth)}if(this.M.gblossom){let E=y(u.gblossom.build(),this.M.gblossom,!0,!1,0,"leaf");E&&(E.customDepthMaterial=this.M.gleafDepth)}if(yield,y(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),y(u.sig.build(),this.M.sig,!1,!1,0,"small"),y(u.sodium.build(),this.M.sodium,!1,!1),y(u.decal.build(),this.M.decal,!1,!0,1,"small"),y(u.pool.build(),this.M.pool,!1,!1,2,"light"),p.rows.length>1){let E=p.rows,R=Nd.length,C=E.length*R,L=new Float32Array(C*3),A=new Float32Array(C*2),I=new Float32Array(C*2),D=[];E.forEach((z,U)=>{for(let V=0;V<R;V++){let k=U*R+V,X=V*7;L.set(z.subarray(X,X+3),k*3),A[k*2]=z[X+3],A[k*2+1]=z[X+4],I[k*2]=z[X+5],I[k*2+1]=z[X+6]}if(U>0)for(let V=0;V<R-1;V++){let k=(U-1)*R+V,X=k+R;D.push(k,X,k+1,k+1,X,X+1)}});let F=new yt;F.setAttribute("position",new St(L,3)),F.setAttribute("su",new St(A,2)),F.setAttribute("hf",new St(I,2)),F.setIndex(D),F.computeBoundingSphere(),y(F,this.M.shore,!1,!1,997)}p.puffs.length&&y(Fv(p.puffs),this.M.surf,!1,!1,2,"small");for(let E of m)y(E,this.riverMat,!1,!0);return w.position.set(o-this.origin.x,0,l-this.origin.z),{group:w,ox:o,oz:l,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*Vs+6,n=pn(t);if(n==="sakura"||Ws(t,6)||li(t,34)||Di(t,ln+12))return null;let s=zn(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,l,a,u,h){let p=Math.ceil((t-6)/Vs),m=Math.floor((n-6-.001)/Vs);for(let x=p;x<=m;x++){let _=this.poleSpec(x);if(!_)continue;let M=_.z==="city"?u(_.s)+.15:l(_.s,_.u),c=o(_.s,_.u,M),f=Et(Math.floor(_n(x,31)*4294967295)),d=fd(r,c,f,{trans:f()<.45});_.z==="city"&&x%2===0&&M1(r,c,-.11),x%2&&(yield);let g=this.poleSpec(x+1);if(g){let v=g.z==="city"?u(g.s)+.15:l(g.s,g.u),b=b1(o(g.s,g.u,v));r.color.setM(new et);let T=[];for(let w=0;w<d.length;w++){let y=d[w],S=b[w],E=.35+f()*.4+(w>=7?.3:0);T.push(E),r.color.wire([y.x,y.y,y.z],[S.x,S.y,S.z],E,w>=7?.022:.015,Gl,10)}if(_.z!=="coast"&&f()<.38){let w=Math.floor(f()*4),y=d[w],S=b[w],E=1+Math.floor(f()*4),R=.18+f()*.5;for(let C=0;C<E;C++){let L=Math.min(.92,R+C*(.018+f()*.025)),A=y.x+(S.x-y.x)*L,I=y.z+(S.z-y.z)*L,D=y.y+(S.y-y.y)*L-T[w]*4*L*(1-L);r.color.box(A-.07,D+.015,I-.07,A+.07,D+.19,I+.07,Ov),r.color.box(A-.045,D+.19,I-.045,A+.045,D+.27,I+.045,Ov)}}}if(_.z==="city"){r.color.setM(new et);let v=1+Math.floor(f()*3);for(let b=0;b<v;b++){let T=d[7+b%2],w=(f()-.5)*14,y=h(_.s+w),S=f()<.55,E=S?-(y+3.15):y+3.15,R=a(_.s+w,E,u(_.s+w)+5.2+f()*2.5);r.color.wire([T.x,T.y,T.z],R,.25+f()*.4,.012,Gl,8)}}}}*intersection(e,t,n,s,r,o,l,a,u,h,p){let m=this.path.at(n,{}),x=o(n),_=l(n),M=a(n)||3,c=n-.5,f=Dt(n),d=[f.city,f.sakura,f.coast,f.country],g=(w,y,S)=>[m.x+m.fx*(w-.5)+m.rx*y-h,S,m.z+m.fz*(w-.5)+m.rz*y-p],v=_+M+.15,b=Wh(s),T=b?3:Od;for(let w of[-1,1]){let y=w*(_+M),S=w*80;if(u.grid(21,2,(L,A)=>{let I=y+(S-y)*L/20,D=(A?-T:T)*w,F=g(D,I,x+.165);return[F[0],F[1],F[2],0,1,0,D*w,I,d[0],d[1],d[2],d[3],_,10]}),b){let L=w*(_+M+3.2),A=-w*1.35,I=1.15,D=.42,F=(z,U)=>g(A+w*z,L-w*U,x+.18);e.decal.setM(new et),e.decal.quad(F(-I,-D),F(I,-D),F(I,D),F(-I,D),[1,1,1],Zo("tomare"))}for(let L of[-1,1]){let A=v+15+t()*3;for(;A<52;){let I=t.range(5.5,8.5),D=w*(A+I/2),F=t(),z=r(c+L*(T+.3),D,x+.14,L>0?Math.PI/2:-Math.PI/2,!1);qi(e,z,t,{type:F<.5?"house":"shop",w:I,d:t.range(7,10),floors:F<.5?2:t.int(2,3),tint:t.pick(Os),litP:.45,fence:0}),A+=I+t.range(.2,1.2),yield}yield}let E=[30,54].map(L=>r(c+T-.2,w*L,x+.15,-Math.PI/2,!1)),R=Et(Math.floor(_n(s,w>0?71:73)*4294967295)),C=E.map(L=>fd(e,L,R,{trans:R()<.4}));e.color.setM(new et);for(let L=0;L<7;L++){let A=C[0][L],I=C[1][L];e.color.wire([A.x,A.y,A.z],[I.x,I.y,I.z],.3+R()*.4,.014,Gl,10)}}b&&(bd(e,r(n-9,-(_+.55),x+.15,0,!0),1,_+.55-1.6),bd(e,r(n+8,_+.55,x+.15,0,!0),1,_+.55-1.6),s%8===0&&z1(e,r(n+15,0,x,0,!1),_+M+.1,"hodokyo"+Math.abs(s/8)%3))}*placeCrossing(e,t,n,s,r,o,l,a,u,h){let p=this.path.at(n,{}),m=p.y,x=o(n),_=a(n),M=x+_+.2,c=150,f=m+.18,d=Dt(n),g=[d.city,d.sakura,d.coast,d.country],v=(I,D,F)=>[p.x+p.fx*I+p.rx*D-u,F,p.z+p.fz*I+p.rz*D-h],b=[7.6,4.7,-4.7,-7.6];for(let[I,D]of[[-c,-M],[M,c]])t.grid(25,b.length,(z,U)=>{let V=I+(D-I)*z/24,k=b[U],j=Math.abs(k)<5?f:Math.min(f-.05,l(n+k,V)-.03),Me=v(k,V,j);return[Me[0],Me[1],Me[2],0,1,0,k,V,g[0],g[1],g[2],g[3],x,5]});let T=(I,D,F)=>t.grid(2,2,(z,U)=>{let V=z?D:I,k=U?-3.3:3.3,X=v(k,V,F);return[X[0],X[1],X[2],0,1,0,k,V,g[0],g[1],g[2],g[3],x,6]});T(-x,x,m+.03),_>0&&(T(-M,-x,m+.165),T(x,M,m+.165));let w=(I,D,F,z)=>t.grid(2,2,(U,V)=>{let k=U?z:F,X=V?D:I,j=v(X,k,m+.025);return[j[0],j[1],j[2],0,1,0,X,k,g[0],g[1],g[2],g[3],x,7]});w(-7.15,-7.6,-x+.3,-.12),w(7.6,7.15,.12,x-.3),yield;let y=s(n,0,m,-Math.PI/2,!1),S=e.color;S.setM(y);let E=[.42,.4,.38],R=[.3,.29,.28],C=[.55,.57,.6];for(let I of[-2,2])for(let D of[-.5335,.5335]){let F=-(I+D);for(let[z,U]of[[-c,-M],[M,c]])S.box(z,.26,F-.035,U,.34,F+.035,E);S.box(-M,0,F-.035,M,.04,F+.035,R)}let L=[-146,-104,-64,-26,26,64,104,146];for(let I of L){for(let D of[-4.95,4.95])S.box(I-.12,.18,D-.12,I+.12,7.4,D+.12,C);S.box(I-.1,6.95,-5.15,I+.1,7.2,5.15,C);for(let D of[-2,2])S.box(I-.04,6.3,-D-.04,I+.04,6.95,-D+.04,C)}for(let I of[-2,2])for(let D=0;D<L.length-1;D++)S.wire([L[D],5.35,-I],[L[D+1],5.35,-I],.05,.011,Gl,6),S.wire([L[D],6.4,-I],[L[D+1],6.4,-I],.45,.011,Gl,8);yield;let A=Math.round((n-Ur)/Fr);if(d.country>.9&&_n(A,17)<.7){let I=_n(A,19)<.5?-1:1,D=I>0?x+9:-(x+9+46),F=I>0?x+9+46:-(x+9);H1(e,y,D,F,I*(x+9),Math.abs(A)%4,Et(Math.floor(_n(A,23)*4294967295))),S.setM(y)}yield;for(let I of Th(this.path,n)){let D=new et().makeRotationY(I.yaw);D.setPosition(I.x-u,I.y,I.z-h),G1(e,D)}dr(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85),dr(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,l,a,u,h,p,m){let x=this.path.at(n,{}),_=x.y,M=o(n),c=a(n),f=Dt(n),d=[f.city,f.sakura,f.coast,f.country],g=f.sakura>.5,v=222,b=M+c+.5,T=_-Tl,w=(A,I,D)=>[x.x+x.fx*A+x.rx*I-u,D,x.z+x.fz*A+x.rz*I-h];{let A=[],I=[],D=[];for(let U=0;U<=74;U++){let V=-v+2*v*U/74;for(let k of[14.3,-14.3]){let X=w(k,V,T);A.push(X[0],X[1],X[2]),I.push(k,V)}if(U>0){let k=(U-1)*2;D.push(k,k+1,k+2,k+1,k+3,k+2)}}let z=new yt;z.setAttribute("position",new je(A,3)),z.setAttribute("su",new je(I,2)),z.setIndex(D),z.computeBoundingSphere(),m.push(z)}for(let[A,I]of[[28.9,25.7],[-25.7,-28.9]])for(let[D,F]of[[-v,-(M+3.4)],[M+3.4,v]])t.grid(41,2,(z,U)=>{let V=D+(F-D)*z/40,k=U?I:A,X=w(k,V,_+.38);return[X[0],X[1],X[2],0,1,0,k,V,d[0],d[1],d[2],d[3],M,9,1]});yield;let y=s(n,0,_,0,!1),S=e.color,E=[.74,.73,.7],R=g?[.78,.2,.15]:[.55,.72,.64];S.setM(y),S.box(-24.5,-1,-b,24.5,-.03,b,E,null,{noBottom:!1});for(let A of[-1,1])S.box(-24.5,-1.3,A>0?b-.35:-b,24.5,-.95,A>0?b:-b+.35,[.62,.61,.58]);for(let A of[-8,8])S.box(A-.7,-Tl-1.4,-b+.6,A+.7,-1,b-.6,E);for(let A of[-25.7,25.7])S.box(A-1.2,-Tl+.4,-b-.4,A+1.2,-.05,b+.4,E);for(let A of[-24.5,24.5])S.box(A-.16,.004,-M,A+.16,.016,M,[.33,.32,.31]),S.box(A-.02,.016,-M,A+.02,.02,M,[.2,.19,.19]);let C=c>0?.15:0;for(let A of[-1,1]){let I=A*(b-.14);for(let D=-24;D<=24.01;D+=2)S.box(D-.06,C,I-.06,D+.06,C+1,I+.06,R);S.box(-24,C+.95,I-.08,24,C+1.08,I+.08,R),S.box(-24,C+.48,I-.03,24,C+.54,I+.03,R),S.box(-24,C+.06,I-.03,24,C+.12,I+.03,R)}let L="bridge"+Math.abs(Math.round(n/Br))%4;for(let A of[-25,25])for(let I of[-1,1]){let D=I*(b-.1),F=[.7,.69,.65];S.box(A-.32,C,D-.32,A+.32,C+1.45,D+.32,F),S.box(A-.38,C+1.45,D-.38,A+.38,C+1.58,D+.38,[.62,.61,.57]),e.atlas.setM(y);let z=(A<0?-1:1)*.325,U=L;A<0?e.atlas.quad([A-.325,C+.3,D-.22],[A-.325,C+.3,D+.22],[A-.325,C+1.3,D+.22],[A-.325,C+1.3,D-.22],[1,1,1],Zo(U)):e.atlas.quad([A+.325,C+.3,D+.22],[A+.325,C+.3,D-.22],[A+.325,C+1.3,D-.22],[A+.325,C+1.3,D+.22],[1,1,1],Zo(U)),S.setM(y)}Ll(e,s(n-14,-(b-.45),_+C,0,!0)),Ll(e,s(n+14,b-.45,_+C,0,!0)),yield;{e.atlas.setM(new et);let A=Zo("gogan"),I=2.4,D=150;for(let F of[-1,1])for(let z=-D;z<D-.01;z+=I){let U=z+I,V=w(F*13.9,z,T-.12),k=w(F*13.9,U,T-.12),X=w(F*16.05,U,T+.72),j=w(F*16.05,z,T+.72),Me=(k[1]-V[1])*(j[2]-V[2])-(k[2]-V[2])*(j[1]-V[1]),Se=(k[0]-V[0])*(j[1]-V[1])-(k[1]-V[1])*(j[0]-V[0]),we=w(0,(z+U)/2,T),Z=Me*(we[0]-V[0])+Se*(we[2]-V[2])>0,q={u0:A.u0,u1:A.u1,v0:A.v0,v1:A.v1};Z?e.atlas.quad(V,k,X,j,[1,1,1],q):e.atlas.quad(k,V,j,X,[1,1,1],{u0:A.u1,u1:A.u0,v0:A.v0,v1:A.v1})}for(let F of[-1,1])for(let z of[-1,1])for(let U=14+p()*3;U<125;U+=p.range(2.4,5)){if(p()<.35)continue;let V=F*(16.2+p()*1.1),k=z*U,X=1+(p()<.4?1:0);for(let j=0;j<X;j++){let Me=w(V+F*p()*.6,k+(p()-.5)*.9,T+.7),Se=new et().makeRotationY(p()*6.28);Se.setPosition(Me[0],Me[1],Me[2]),xd(e,Se,p,"grass",p.range(1.9,2.8))}}}yield;for(let A of[-18,18])for(let I of[-1,1]){yield;for(let D=11+p()*4;D<(g?125:170);D+=g?p.range(8.5,11):p.range(18,34)){let F=n+A+(p()-.5)*1.5,z=I*D;Xn(e,s(F,z,l(F,z),p()*6,!1),g?"sakura":"broad",p,g?p.range(1,1.25):p.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,l,a,u,h,p,m){let x=this.path.at(n.s,{}),_=x.y,M=u(n.s),c=M+1.4,f=Dt(n.s),d=[f.city,f.sakura,f.coast,f.country],g=o(n.s,0,_,0,!1),v=e.color,b=Math.max(s,n.s-bn)-n.s,T=Math.min(r,n.s+bn)-n.s;if(T>b+.01){let U=Math.max(2,Math.ceil((T-b)/3)+1),V=[-(M+1.5),-M,-M*.5,0,M*.5,M,M+1.5];t.gridN(U,V.length,(q,ve)=>{let Pe=b+(T-b)*q/(U-1),ee=n.s+Pe,xe=V[ve],Fe=_+_h(Pe,xe);return[x.x+x.fx*Pe+x.rx*xe-h,Fe,x.z+x.fz*Pe+x.rz*xe-p,0,1,0,Ss(ee,ti),xe,d[0],d[1],d[2],d[3],M,0,-1]});let k=[[-M,0],[-M,.2],[-c,.2],[-c,3.2]];for(let q=1;q<12;q++){let ve=Math.PI*(1-q/12);k.push([c*Math.cos(ve),3.2+3*Math.sin(ve)])}k.push([c,3.2],[c,.2],[M,.2],[M,0]);let X=[.86,.82,.72],j=[.44,.45,.47],Me=[.62,.61,.58],Se=[];for(let q=b;q<T-.01;q+=6)Se.push(q);Se.push(T),v.setM(g);for(let q=0;q<Se.length-1;q++)for(let ve=0;ve<k.length-1;ve++){let[Pe,ee]=k[ve],[xe,Fe]=k[ve+1],ke=Math.max(ee,Fe)<=.21?Me:Math.abs(Pe)>c-.01&&Math.abs(xe)>c-.01?X:j;v.quad([Se[q],ee,Pe],[Se[q+1],ee,Pe],[Se[q+1],Fe,xe],[Se[q],Fe,xe],ke)}e.sodium.setM(g),e.sig.setM(g);let we=c*Math.cos(Math.PI/6)-.12,Z=3.2+3*Math.sin(Math.PI/6)-.08;for(let q=Math.ceil((b+bn-3)/6)*6+3-bn;q<T;q+=6)for(let ve of[-1,1])e.sodium.box(q-.45,Z-.07,ve*we-.13,q+.45,Z+.07,ve*we+.13,null),fr(e,g,q,Z-.1,ve*we,1);for(let q=Math.ceil((b+bn)/24)*24-bn;q<T;q+=24)e.sig.box(q-.3,.95,-c+.01,q+.3,1.2,-c+.06,null);for(let q=Math.ceil((b+bn-30)/60)*60+30-bn;q<T;q+=60)for(let ve of[-1.15,1.15])v.box(q-1.1,5.2,ve-.36,q+1.1,5.78,ve+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),v.box(q-.08,5.78,ve-.05,q+.08,6.15,ve+.05,[.4,.4,.42]);yield}let w=(U,V)=>{let k=Math.sin(U*12.9898+V*78.233+n.k*37.719)*43758.5453;return k-Math.floor(k)},y=(U,V,k)=>[U[0]+(V[0]-U[0])*k,U[1]+(V[1]-U[1])*k,U[2]+(V[2]-U[2])*k],S=[.5,.5,.47],E=[.55,.53,.47],R=[.6,.6,.57],C=[.58,.58,.55],L=[.42,.42,.4],A=(U,V)=>{let k=w(U,V);return I?y([.26,.29,.08],[.42,.3,.09],k):y([.22,.29,.08],[.36,.36,.12],k)},I=f.mountain>.5,D=c+2.6,F=2.6;for(let U of[-1,1]){let V=n.s+U*bn,k=U*(bn+.08);if(V<s||V>=r)continue;let X=[];for(let $ of Uv)$>=1.44&&X.push(M+$,-(M+$));for(let $ of Bv)$>M+3.5&&$<M+21&&X.push($,-$);for(let $=0;$<=24;$++)X.push(-c+2*c*$/24);X.push(-c-.01,c+.01,-D,D),X.sort(($,N)=>$-N);let j=$=>3.2+3*Math.sqrt(Math.max(0,1-($/c)**2)),Me=$=>Math.max(a(V-U*.03,$)-_,_h(U*(bn-.03),$)),Se=$=>Math.abs($)<=c+1e-6?j($):a(V+U*.03,$)-_,we=8.4;for(let $ of X)Math.abs($)<=D&&(we=Math.min(we,Me($)-.4));let Z=we>6.6;v.setM(g);let q=U,ve=($,N,P,W,G,te,de,fe)=>{let he=[k,P,$],me=[k,W,N],De=[k,te,N],Je=[k,G,$],Ne=U<0?[he,me,De,Je]:[me,he,Je,De],Be=U<0?[de,de,fe,fe]:[de,de,fe,fe];for(let Ve of[0,1,2,0,2,3])v.vtx(Ne[Ve][0],Ne[Ve][1],Ne[Ve][2],q,0,0,0,0,Be[Ve])},Pe=($,N,P)=>$+(N-$)*P;for(let $=0;$<X.length-1;$++){let N=X[$],P=X[$+1];if(P-N<1e-4)continue;let W=Me(N),G=Me(P),te=Se(N),de=Se(P);if(W-te<.01&&G-de<.01)continue;let fe=(N+P)/2,he=Z&&Math.abs(fe)<D,me=te,De=de;if(he){let Ve=y(S,[.46,.46,.44],w(Math.floor(fe/2.4),3.1)),it=.8+2.6*w(Math.floor(fe/.8),7.7),ut=y(Ve,[.27,.27,.26],.35+.3*w(Math.floor(fe/.8),9.9)),K=Math.min(we,W),Ue=Math.min(we,G),ye=Math.max(te,K-it),ze=Math.max(de,Ue-it);if(Math.abs(fe)>c){let Ge=Math.min(ye,te+.9),Ae=Math.min(ze,de+.9);ve(N,P,te,de,Ge,Ae,y(Ve,[.25,.29,.18],.45),Ve),ve(N,P,Ge,Ae,ye,ze,Ve,Ve)}else ve(N,P,te,de,ye,ze,Ve,Ve);if(ve(N,P,ye,ze,K,Ue,Ve,ut),me=K,De=Ue,W-K<.01&&G-Ue<.01)continue}let Je=Math.floor(fe/F),Ne=me,Be=De;for(let Ve=Math.floor(Math.min(Ne,Be)/F)+1;Ne<W-.01||Be<G-.01;Ve++){let it=Ve*F,ut=Math.min(W,Math.max(Ne,it)),K=Math.min(G,Math.max(Be,it)),Ue=A(Je,Ve);if(ve(N,P,Ne,Be,ut,K,y(Ue,[.2,.22,.1],.25),Ue),Ne=ut,Be=K,Ve>60)break}}let ee=Math.min(k,k+U*.12),xe=Math.max(k,k+U*.12),Fe=$=>{for(let N=0;N<X.length-1;N++)if($>=X[N]&&$<=X[N+1]&&X[N+1]>X[N]){let P=($-X[N])/(X[N+1]-X[N]);return[Pe(Se(X[N]),Se(X[N+1]),P),Pe(Me(X[N]),Me(X[N+1]),P)]}return null},ke=X[0],Le=X[X.length-1];for(let $=Math.ceil(ke/F)*F;$<Le;$+=F){let N=Fe($);if(!N)continue;let P=(Z&&Math.abs($)<D?Math.max(we+.3,N[0]):N[0])+.05,W=N[1]-.05;W-P>.4&&!(Math.abs($)<=c+.3&&!Z)&&v.box(ee,P,$-.14,xe,W,$+.14,E)}for(let $=1;$<60;$++){let N=$*F,P=null,W=()=>{P&&P[1]-P[0]>.3&&v.box(ee,N-.14,P[0],xe,N+.14,P[1],E),P=null},G=!1;for(let te=0;te<X.length-1;te++){let de=X[te],fe=X[te+1];if(fe-de<1e-4)continue;let he=(de+fe)/2,me=Math.max(Se(de),Se(fe),Z&&Math.abs(he)<D?we+.3:-1e9),De=Math.min(Me(de),Me(fe));N>me+.2&&N<De-.2?(G=!0,P?P[1]=fe:P=[de,fe]):W()}if(W(),!G&&N>30)break}Z&&v.box(Math.min(k,k+U*.32),we-.05,-D,Math.max(k,k+U*.32),we+.3,D,R);let Ye=k+U*.32,ne=$=>-c+2*c*$/24,Te=$=>[ne($),j(ne($))],Q=$=>[ne($)*1.12,j(ne($))+.6];for(let $=0;$<24;$++){let[N,P]=Te($),[W,G]=Te($+1),[te,de]=Q($),[fe,he]=Q($+1);U<0?v.quad([Ye,P,N],[Ye,G,W],[Ye,he,fe],[Ye,de,te],C):v.quad([Ye,G,W],[Ye,P,N],[Ye,de,te],[Ye,he,fe],C),U<0?v.quad([k,P,N],[k,G,W],[Ye,G,W],[Ye,P,N],L):v.quad([k,G,W],[k,P,N],[Ye,P,N],[Ye,G,W],L),U<0?v.quad([k,he,fe],[k,de,te],[Ye,de,te],[Ye,he,fe],C):v.quad([k,de,te],[k,he,fe],[Ye,he,fe],[Ye,de,te],C)}for(let $ of[-1,1])v.box(Math.min(k,Ye),.2,$>0?c:-c*1.12,Math.max(k,Ye),3.2,$>0?c*1.12:-c,C);e.atlas.setM(g);let le=1.9,re=7.05,oe=7.85,B=k+U*.03,_e=Zo("tunnel"+(f.coast>.5?1:Math.abs(n.k)%2?2:0));U<0?e.atlas.quad([B,re,-le],[B,re,le],[B,oe,le],[B,oe,-le],[1,1,1],_e):e.atlas.quad([B,re,le],[B,re,-le],[B,oe,-le],[B,oe,le],[1,1,1],_e)}yield;let z=f.mountain>.5;for(let U=Math.max(s,n.s-ln*.95)+m()*3;U<Math.min(r,n.s+ln*.95);U+=m.range(4,8)){let V=Math.abs(U-n.s)>bn-4?17:4;for(let k of[-1,1]){let X=k*(M+m.range(V,50)),j=m();Xn(e,l(U,X,-.3,m()*6,!1),z?j<.5?"maple":j<.8?"cedar":"ginkgo":j<.65?"pine":"broad",m,m.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,l,a,u){let h=p=>Dt(p).snow;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*20;m<s;m+=t.range(22,40)){if(h(m)<.6||t()<.5)continue;let x=p*t.range(18,90);qi(e,o(m,x,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(Os),litP:.62,fence:0,snow:!0});for(let _=0;_<2+t()*3;_++)Xn(e,o(m+t.range(-9,9),x+p*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let m=n+t()*5;m<s;m+=t.range(3,7))h(m)<.5||(t()<.32&&Xn(e,o(m,p*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&Xn(e,o(m,p*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let p=Math.ceil(n/36)*36;p<s;p+=36){if(h(p)<.55)continue;let m=a(p);{let x=r(p,-(m+.95),l(p)+1.3),_=r(p+18,m+.95,l(p+18)+1.3);x.groundY=l(p),_.groundY=l(p+18),gd(e,x,1),gd(e,_,-1)}}}}*placeMountain(e,t,n,s,r,o,l,a,u){let h=p=>Dt(p).mountain;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*4;m<s;m+=t.range(4.5,8.5)){if(h(m)<.45||Di(m,ln+6))continue;let x=a(m),_=t();if(p>0){let M=_<.5?"maple":_<.72?"ginkgo":"cedar";Xn(e,o(m,x+t.range(17,70),-.25,t()*6,!1),M,t,t.range(.9,1.3))}else{let M=_<.55?"maple":_<.8?"cedar":"ginkgo";Xn(e,o(m,-(x+t.range(3.5,34)),-.25,t()*6,!1),M,t,t.range(.95,1.35))}}yield}for(let p=n+t()*4;p<s;p+=t.range(3,6)){if(h(p)<.5)continue;let m=t()<.7,x=-(a(p)+(m?t.range(108,205):t.range(36,100)));Xn(e,o(p,x,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new et);for(let p=Math.ceil(n/10)*10;p<s;p+=10){if(h(p)<.5||Di(p,ln+4))continue;let m=a(p),x=r(p,-(m+.95),l(p));E1(e,x)}for(let p=Math.ceil(n/14)*14;p<s;p+=14){if(h(p)<.6)continue;let m=this.path.curv(p);if(Math.abs(m)<1/230)continue;let x=a(p);m>0?dr(e,r(p,x+.42,l(p)),"chev_l",-1,1.25,.58):dr(e,r(p,-(x+1.15),l(p)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,s,r,o,l){let a=this.path,u={},h=Et(Math.floor(_n(t,1789)*4294967295)),p=P1(),m=Math.floor((n+qt/2)/600)*600+300,x=Math.floor((n+qt/2)/700)*700+120,_=Math.floor((n+qt/2)/380)*380+190,M=_n(Math.round(_),5)<.5?-1:1;for(let g of[-1,1]){e.leaf.setM(kv);for(let v=n+h()*p;v<s;v+=p*h.range(.75,1.25)){if(pn(v)!=="country"||Ws(v,10)||li(v,31)||g<0&&(Math.abs(v-m)<2.9||v>x-1.3&&v<x+2.7)||g===M&&Math.abs(v-_)<1.6)continue;a.at(v,u);let b=l(v),T=g*(b+.95+(h()-.5)*.36),w=u.y+_s(v,T,u.y,b),y=(h()-.5)*.8,S=Math.cos(y)*g,E=Math.sin(y)*g;yd(e,u.x+u.rx*T-r,w,u.z+u.rz*T-o,u.rx*S+u.fx*E,u.rz*S+u.fz*E,h,h.range(.85,1.15))}yield}let c=Et(Math.floor(_n(t,1811)*4294967295)),f=p>1?p*1.35:p;e.leaf.setM(kv);for(let g=n+c()*f;g<s;g+=f*c.range(.75,1.25)){if(Dt(g).coast<.6||Di(g,ln+6))continue;let v=g-6-Math.round((g-6)/Vs)*Vs;if(Math.abs(v)<.9||Math.abs(g-(n+12))<.8)continue;a.at(g,u);let b=l(g),T=b+.95+(c()-.5)*.3,w=u.y+_s(g,T,u.y,b),y=(c()-.5)*.8,S=Math.cos(y),E=Math.sin(y);yd(e,u.x+u.rx*T-r,w,u.z+u.rz*T-o,u.rx*S+u.fx*E,u.rz*S+u.fz*E,c,c.range(.62,.85),"bankC")}for(let g=n+c()*14;g<s;g+=c.range(14,30)){if(Dt(g).coast<.6||Di(g,ln+6))continue;let v=g-6-Math.round((g-6)/Vs)*Vs;if(Math.abs(v)<1.4||Math.abs(g-(n+12))<1.2)continue;a.at(g,u);let b=l(g),T=b+c.range(1.3,2.3),w=u.y+_s(g,T,u.y,b),y=new et().makeRotationY(c()*6.28);y.setPosition(u.x+u.rx*T-r,w,u.z+u.rz*T-o),Fh(e,y,c,c.range(1.1,1.4))}let d=Et(Math.floor(_n(t,2417)*4294967295));for(let g of[-1,1])for(let v=n+d()*8;v<s;v+=d.range(8,14)){if(Dt(v).sakura<.6||li(v,31))continue;let b=1+Math.floor(d()*3),T=g*(l(v)+2.95+d()*.4);a.at(v,u);let w=u.y+_s(v,T,u.y,l(v));for(let y=0;y<b;y++){let S=y*.75+d()*.25,E=T+g*(d()-.5)*.3,R=new et().makeRotationY(d()*6.28);R.setPosition(u.x+u.fx*S+u.rx*E-r,w,u.z+u.fz*S+u.rz*E-o),d()<.5?Fh(e,R,d,d.range(1.05,1.35)):Dl(e,R,d,d.range(.45,.6))}}}*placeVerge(e,t,n,s,r,o,l,a,u,h){yield*this.placeBanks(e,a,n,s,u,h,l);for(let p of[-1,1]){for(let m=n+t()*1.2;m<s;m+=t.range(.55,1.5)){if(Ws(m,10)||li(m,31)||Di(m,ln+4))continue;let x=pn(m),_=l(m),M,c,f=.22,d=1;if(x==="country")M=_+t.range(2.05,2.8),c=.25,f=.35;else if(x==="sakura")M=_+2.68+t()*1.3,c=.55,f=.3;else if(x==="coast"){if(p<0)continue;M=_+.95+t()*1.7,c=.75,f=.18}else{if(x==="snow")continue;if(x==="mountain")M=p<0?_+1+t()*.35:_+.25+t()*.2,c=p<0?.55:.18,f=.12,d=.85;else{if(Ud(m,5))continue;M=_+3.02+t()*.1,c=.1,f=.08,d=.65}}if(t()>c)continue;let g=p*M;xd(e,r(m,g,o(m,g),t()*6.28,!1),t,t()<f?"flowers":"grass",d*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new et);let l=Math.max(1,Math.round((n-t)/2)),a=Ce.rail,u=[.62,.64,.66],h=[.74,.76,.79],p=[.95,.55,.16];for(let m=0;m<l;m++){let x=t+(n-t)*m/l,_=t+(n-t)*(m+1)/l,M=-(o(x)+.95),c=-(o(_)+.95),f=r(x),d=r(_);for(let v=0;v<Dd.length-1;v++){let[b,T]=Dd[v],[w,y]=Dd[v+1];e.color.quad(s(x,M+T,f+b),s(_,c+T,d+b),s(_,c+y,d+w),s(x,M+y,f+w),a)}e.color.quad(s(_,c+.05,d+.5),s(x,M+.05,f+.5),s(x,M+.05,f+.84),s(_,c+.05,d+.84),u),e.color.noShadow=!0;let g=s(x,M-.04,f);if(e.color.cyl(g[0],f,g[2],.055,.055,.8,6,h,!1),Math.round(x/2)%2===0){let v=s(x,M+.035,f+.64),b=s(x+.09,M+.035,f+.64);e.color.quad(b,v,[v[0],v[1]+.07,v[2]],[b[0],b[1]+.07,b[2]],p)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,l,a,u,h,p,m,x){for(let c of[-1,1]){let f=n+t()*2;for(;f<s-2;){{let I=Dt(f);if(I.city<.62||I.mountain>.1){f+=4;continue}}{let I=ur(f+6);if(I&&f<I.s+8.5&&f+14>I.s-8.5){f=Math.max(f+1,I.s+8.5);continue}}let d=2*Math.round(f/300),g=d*150;if(f>g-zv(d)&&f<g+Fd(d)){f=g+Fd(d)+.05;continue}let v=a(f),b=u(f)||3,T=v+b+.15,w=t(),y=f<420||w<.84?"machiya":w<.89?"shop":w<.93?"apt":w<.96?"konbini":"house",S=y==="shop"?t.range(5,9):y==="machiya"?t.range(6,9.5):y==="apt"?t.range(10,16):y==="house"?t.range(7,9.5):t.range(12,14);if(f+S>s){if(s-f<5||y==="konbini")break;S=s-f-.2}{let I=f<g?d:d+2,D=I*150-zv(I);if(f+S>D-.1){if(D-.1-f<4){f=I*150+Fd(I)+.05;continue}S=D-.1-f}}let E=f+S/2,R=l(E),C=t.pick(Os),L=.42,A=y==="machiya"&&t()<.6;{let I=r(E,c*T,R+.15),D={type:y,w:S,at:E,side:c,d:y==="apt"?t.range(10,14):t.range(8,12),floors:y==="shop"?t.int(2,4):y==="machiya"?t()<.7?2:3:y==="apt"?t.int(4,9):2,tint:A?ud[Math.floor(t()*ud.length)]:C,litP:L,plaster:A,fence:y==="house"&&t()<.5?1.2:0};if(qi(e,I,t,D),y!=="house"&&t()<.28&&pd(e,r(E+(t()-.5)*(S-1.2),c*(T-.42),R+.15),t),(y==="shop"||y==="konbini"||y==="machiya")&&t()<.3)for(let F=0;F<1+t()*3;F++)S1(e,r(E-S/2+.8+F*.55,c*(T-.75),R+.15,Math.PI/2+.1),t);if(y==="house"&&t()<.6)for(let F=0;F<2+t()*3;F++)md(e,r(E+1+F*.5,c*(T-.3),R+.15),t);if(t()<.03)for(let F=0;F<3;F++)w1(e,r(E+F*.9,c*(v+.35),R))}f+=S+t.range(.05,.5),yield}for(let d=n+t()*10;d<s-8;d+=t.range(14,26)){if(Dt(d).city<.7||Dt(d).mountain>.1||t()<.3||Ws(d,18)||Ud(d,15))continue;let g=a(d),v=r(d,c*(g+3.2+t.range(14,20)),l(d)+.1);qi(e,v,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(Os),litP:.4})}if(Dt(n+30).city>.7&&Dt(n+30).mountain<.1&&t()<.65){let d=n+t()*qt;if(Ws(d,24)||Ud(d,20))continue;let g=r(d,c*t.range(55,150),l(d));qi(e,g,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(Os),litP:.45})}}let _=Math.ceil(n/150),M=Math.floor((s-.01)/150);for(let c=_;c<=M;c++){let f=c*150;if(!xw(c)||pn(f)!=="city"||Dt(f).mountain>.1)continue;let d=a(f);yield*this.intersection(e,t,f,c,r,l,a,u,p,m,x),Wh(c)&&(dr(e,r(f-1,-(d+.4),l(f)+.15),"sign_blue",1),dr(e,r(f-6,-(d+.4),l(f)+.15),"sign_stop",1,2.1,.75),vd(e,r(f+7,d+.4,l(f)+.15),-1),c%8===4&&dr(e,r(f+20,-(d+.4),l(f)+.15),"sign_speed",1))}}houseGarden(e,t,n,s,r,o,l,a,u,h){let p=o.ww/2;if(a)for(let m=-p-.6;m<p+.6;m+=t.range(1.2,1.9)){if(Math.abs(m)<.9&&a===1&&t()<.7)continue;let x=l(n+m,s-r*t.range(1.1,1.7),0,t()*6,!1);a===2&&t()<.6?Dl(e,x,t,t.range(.75,1)):T1(e,x,t,t.range(.5,.75))}for(let m=0;m<u;m++){let x=(m%2?-1:1)*(t()<.5?1:-1);Xn(e,l(n+x*(p+t.range(3.2,5.5)),s+r*t.range(1,o.wd),0,t()*6),"broad",t,t.range(.9,1.25))}for(let m=0;m<h;m++)Xn(e,l(n+t.range(-p-2,p+2),s+r*(o.wd+t.range(3.5,7)),0,t()*6),"broad",t,t.range(.95,1.3))}*placeSakura(e,t,n,s,r,o,l,a,u){let h=Et(Math.floor(_n(Math.round(n/qt),2423)*4294967295));for(let x of[-1,1]){for(let _=n+t()*4;_<s;_+=t.range(7.5,10)){if(Dt(_).sakura<.45||li(_,30))continue;let M=a(_);if(Xn(e,o(_,x*(M+3.7),0,Hi.bcells?(t()-.5)*.6:t()*6),"sakuraAve",t,t.range(1.05,1.3)),Dt(_).sakura>.6&&h()<.65)for(let c=0,f=2+(h()<.4?1:0),d=h()*6.28;c<f;c++){let g=d+c/f*6.28+(h()-.5)*1.2,v=h.range(.75,1.15),b=Math.max(M+2.9,M+3.7+Math.sin(g)*v*.8),T=o(_+Math.cos(g)*v,x*b,0,h()*6.28,!1);h()<.6?Fh(e,T,h,h.range(1.2,1.55)):Dl(e,T,h,h.range(.5,.65))}t()<.45&&Xn(e,o(_+3,x*(M+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let _=n+(x>0?0:12);_<s;_+=24){if(pn(_)!=="sakura"||li(_,30))continue;let M=a(_);Ll(e,r(_,x*(M+2.25),l(_)+.15)),Ss(_,48)<24&&q1(e,r(_+6,x*(M+3),u(_+6,x*(M+3))))}for(let _=n+t()*15;_<s;_+=t.range(14,24)){if(pn(_)!=="sakura"||t()<.35||li(_,45))continue;let M=a(_),c=Uh("sakura",t);if(!c){qi(e,o(_,x*(M+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(Os),litP:.45,fence:t()<.6?1.4:0});continue}let f=x*(M+t.range(19,26)),d=t()<.45?1.4:0;qi(e,o(_,f),t,{type:"house",w:c.ww,d:c.wd,ptype:c,fence:d}),this.houseGarden(e,t,_,f,x,c,o,d?0:1,0,0)}}let m=Math.floor((n+qt/2)/480)*480+240;m>=n&&m<s&&pn(m)==="sakura"&&!li(m,60)&&Md(e,r(m,0,l(m),0,!1),a(m)+1.6,6.4)}coastWall(e){return Dt(e).coast>=.7&&!Di(e,ln+14)}coastHeaps(e){let t=this.heapCache.get(e);if(t)return t;t=[];let n=Et(Math.floor(_n(e,5501)*4294967295)),s=e*qt,r=s+qt;for(let o=s+1+n()*12;o<r-3;o+=n.range(12,26)){let l=n.range(1.25,1.5),a=n.range(4.5,11),u=n()<.4?3:2,h=Math.min(o+a,r-.5);!this.coastWall(o)||!this.coastWall(h)||t.push({sa:o,sb:h,L:l,rows:u,dOut:(.8+(u-1)*1.45+.95)*l})}return this.heapCache.size>48&&this.heapCache.clear(),this.heapCache.set(e,t),t}*placeCoast(e,t,n,s,r,o,l,a,u,h){let p=this.path,m={},x=this.coastHeaps(n),_=Et(Math.floor(_n(n,5507)*4294967295)),M=Ss(s,ti)-s;for(let w of x){let y=w.L;for(let E=0;E<w.rows;E++){let R=.8*y+E*1.45*y,C=(E===0?.28:E===1?0:-.3)*y;for(let L=w.sa+_()*.7*y;L<w.sb;L+=1.5*y*_.range(.88,1.12)){let A=a(L),I=h(L,-(A+Sl+R+(_()-.5)*.45*y),0);if(Sd(e,I[0],ls+C+(_()-.5)*.3*y,I[2],_,y*_.range(.92,1.08),ls-.7,E===0?.8:.45,L+M),E===0&&w.rows>1&&_()<.4){let D=h(L+.7*y,-(A+Sl+R+.72*y),0);Sd(e,D[0],ls+1.05*y,D[2],_,y*_.range(.9,1),ls-.7,.6,L+M)}}}let S=Math.max(3,Math.round(ta.n*(w.sb-w.sa+2)/7));for(let E=0;E<S;E++){let R=w.sa+(w.sb-w.sa)*(E+.5)/S+(_()-.5)*1.4,C=a(R);p.at(R,m);let L=h(R,-(C+Sl+w.dOut*(.8+.3*_())-.2),ls+.35);u.puffs.push(L[0],L[1],L[2],-m.rx,-m.rz,w.dOut,_(),R+M)}yield}let c=[...this.coastHeaps(n-1),...x,...this.coastHeaps(n+1)],f=Ss(s,ti),d=[];for(let w=0;w<=10;w++)d.push(s+w*6);for(let w of c)for(let y of[w.sa-3.2,w.sa-.4,w.sb+.4,w.sb+3.2])y>s+.5&&y<r-.5&&d.push(y);d.sort((w,y)=>w-y);for(let w=0;w<d.length;w++){let y=d[w];if(w>0&&y-d[w-1]<.6)continue;if(!this.coastWall(y)){if(u.rows.length)break;continue}let S=1;for(let C=1;C<=3;C++)if(!this.coastWall(y-2*C)||!this.coastWall(y+2*C)){S=(C-1)/3;break}let E=a(y),R=new Float32Array(Nd.length*7);Nd.forEach((C,L)=>{let A=h(y,-(E+Sl+C),ls+.03),I=0;for(let D of c)I=Math.max(I,(1-At(.4,3.2,Math.max(D.sa-y,y-D.sb,0)))*(1-At(.2,3.4,C-D.dOut)));R.set([A[0],A[1],A[2],f+(y-s),C,I,S],L*7)}),u.rows.push(R)}u.rows.length&&(yield);let g=Et(Math.floor(_n(n,5531)*4294967295)),v=null;if(pn(s+30)==="coast"&&g()<.5){let w=s+g()*qt,y=a(w);Di(w,ln+25)||(v={s:w,rw:y,T:Uh("coast",g),u:y+g.range(11,17)})}for(let w=s+t()*6;w<r;w+=t.range(5,9)){if(pn(w)!=="coast"||Di(w,ln+6))continue;let y=a(w),S=t();if(S>=.58)continue;let E=y+t.range(4.5,30);v&&v.T&&Math.abs(w-v.s)<v.T.ww/2+2.5&&E>v.u-3.5&&E<v.u+v.T.wd+2.5||Xn(e,l(w,E,0,t()*6,!1),S<.48?"broad":"pine",t,t.range(1,1.4))}for(let w=s+4;w<r;)w+=t.range(18,30);for(let w=s+12;w<r;w+=48){if(pn(w)!=="coast"||Di(w,ln+4))continue;let y=a(w);dd(e,l(w,y+1),t)}let b=Et(Math.floor(_n(n,5519)*4294967295));for(let w=s+b()*5;w<r;w+=b.range(5,11)){if(Dt(w).coast<.6||Di(w,ln+6))continue;let y=1+Math.floor(b()*2.4);for(let S=0;S<y;S++){let E=w+S*b.range(1.1,1.8),R=a(E)+b.range(1.4,2.5),C=b()*6.28,L=b.range(1.05,1.45),A=E-6-Math.round((E-6)/Vs)*Vs,I=E-12-Math.round((E-12)/48)*48;Math.abs(A)<1.4||Math.abs(I)<1.2||Dl(e,l(E,R,0,C,!1),b,L)}}if(v){let{s:w,rw:y,T:S,u:E}=v;S?(qi(e,l(w,E),g,{type:"house",w:S.ww,d:S.wd,ptype:S}),this.houseGarden(e,g,w,E,1,S,l,2,1,1)):qi(e,l(w,y+g.range(9,16)),g,{type:"house",w:g.range(7,10),d:8,floors:g()<.5?2:1,tint:g.pick(Os),litP:.5,fence:0})}if(pn(s+30)==="coast"&&t()<.55){let w=s+t()*qt;$1(e,o(w,-(a(w)+t.range(45,220)),ls-.25,t()*6,!1),t)}let T=Math.floor((s+qt/2)/1500)*1500+700;T>=s&&T<r&&pn(T)==="coast"&&!Di(T,ln*1.6)&&K1(e,o(T,-(a(T)+75),ls-1,0,!1))}*placeCountry(e,t,n,s,r,o,l,a,u){for(let _ of[-1,1]){yield;for(let M=n+t()*20;M<s;M+=t.range(20,40)){if(pn(M)!=="country"||t()<.55||Ws(M,16)||li(M,48))continue;let c=_*t.range(16,95),f=o(M,c),d=Uh("country",t);if(d){qi(e,f,t,{type:"house",w:d.ww,d:d.wd,ptype:d}),this.houseGarden(e,t,M,c,_,d,o,1,2,2);continue}qi(e,f,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(Os),litP:.5,fence:0});for(let g=0;g<2+t()*3;g++){let v=c+_*t.range(6,14),b=M+t.range(-8,8);Xn(e,o(b,v,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let M=n+t()*8;M<s;M+=t.range(5,9)){if(pn(M)!=="country"||Ws(M,7)||li(M,36))continue;let c=_*t.range(140,210);Xn(e,o(M,c,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Ws(M+2,8)&&!li(M+2,34)&&Xn(e,o(M+2,_*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let h=Math.floor((n+qt/2)/600)*600+300;if(h>=n&&h<s&&pn(h)==="country"&&!li(h,40)){let _=a(h);X1(e,r(h,-(_+1.6),l(h)-.08),t)}let p=Math.floor((n+qt/2)/700)*700+120;if(p>=n&&p<s&&pn(p)==="country"&&!li(p,40)){let _=a(p);pd(e,r(p,-(_+.95),l(p)-.08),t),dd(e,r(p+2,-(_+.8),l(p)-.08),t)}let m=Math.floor((n+qt/2)/900)*900+450;if(m>=n&&m<s&&pn(m)==="country"&&!li(m,40)){let _=a(m);J1(e,o(m,_+5),t)}let x=Math.floor((n+qt/2)/380)*380+190;if(x>=n&&x<s&&pn(x)==="country"&&!li(x,40)&&!Ws(x,30)){let _=a(x),M=(_n(Math.round(x),5)<.5?-1:1)*(_+2.75);W1(e,o(x,M,0))}for(let _=n;_<s;_+=30){if(pn(_)!=="country")continue;let M=this.path.curv(_);if(Math.abs(M)>1/450&&t()<.5){let c=M>0?-1:1,f=a(_);vd(e,o(_,c*(f+.75)),c>0?-1:1)}}}};var na={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function Hv(i){let e=i.get("weather"),t={mode:na[e]?e:"auto",kind:na[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return na[e]&&(t.ov=na[e][0],t.rain=na[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=na[t.kind];t.ov+=$t(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=$t(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var Xi={uHeadPos:{value:new H},uHeadDir:{value:new H(0,0,1)},uHeadI:{value:0},uLampW:{value:[new pt(0,-1e3,0,0),new pt(0,-1e3,0,0)]},uLampCol:{value:new ue(1,.8,.52)}},qh=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function Vv(){let e=new H(42,22,42),t=new on(1,1),n=new ms;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new Dn(s,4)),n.instanceCount=2400;let r=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uAmt:{value:0},uBox:{value:e},uCol:{value:new ue(1,1,1)},...Xi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${qh}
      void main(){
        vUv = uv;
        if (aOff.w > uAmt) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vA = 0.0; return; }
        float ph = aOff.w * 40.0;
        vec3 p = aOff.xyz * uBox + vec3(sin(uTime * 0.6 + ph) * 0.7 + uTime * 0.35, -uTime * (0.8 + aOff.w * 0.8), cos(uTime * 0.45 + ph * 1.3) * 0.6);
        vec3 w = uCam + mod(p - uCam, uBox) - uBox * 0.5;
        vec3 toCam = normalize(uCam - w), right = normalize(cross(vec3(0.0, 1.0, 0.0), toCam)), up = cross(toCam, right);
        float size = 0.045 + fract(ph) * 0.05;
        vec3 pos = w + (right * position.x + up * position.y) * size;
        float d = length(uCam - w);
        vLit = particleLight(w); float lk = min(dot(vLit, vec3(0.33)), 1.0); // (lit flakes stay visible further out)
        vA = (1.0 - smoothstep(9.0 + 9.0 * lk, 21.0, d)) * smoothstep(0.5, 1.6, d);
        gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
      }`,fragmentShader:`
      uniform vec3 uCol; varying float vA; varying vec2 vUv; varying vec3 vLit;
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new mt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,u,h){o.visible=u>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*h,.33+.67*h,.42+.58*h)}}}function Wv(){let e=new H(46,24,46),t=new on(1,1);t.translate(0,.5,0);let n=new ms;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new Dn(s,4)),n.instanceCount=2600;let r=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uRain:{value:0},uBox:{value:e},uCol:{value:new ue(.8,.85,.95)},...Xi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${qh}
      void main(){
        vUv = uv;
        if (aOff.w > uRain) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vA = 0.0; return; }
        float fall = 10.0 + aOff.w * 4.0;
        vec3 p = aOff.xyz * uBox + vec3(uTime * 1.6, -uTime * fall, uTime * 0.6);
        vec3 w = uCam + mod(p - uCam, uBox) - uBox * 0.5;
        vec3 toCam = normalize(uCam - w); vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), toCam));
        vec3 up = normalize(vec3(0.12, 1.0, 0.05));
        vec3 pos = w + right * (position.x * 0.018) + up * (position.y * 0.62);
        float d = length(uCam - w);
        vLit = particleLight(w); float lk = min(dot(vLit, vec3(0.33)), 1.0); // (lit drops stay visible further out: the beam
        vA = (1.0 - smoothstep(6.0 + 14.0 * lk, 23.0, d)) * smoothstep(0.6, 2.0, d); // starts ~9 m ahead of the camera)
        gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
      }`,fragmentShader:`
      uniform vec3 uCol; varying float vA; varying vec2 vUv; varying vec3 vLit;
      void main(){ // lit drops also show more (they glint in the beam)
        float lit = min(dot(vLit, vec3(0.33)), 1.0);
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new mt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,u,h){o.visible=u>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*h,.12+.83*h,.16+.84*h)}}}var ci=64,kd=[2.2,1.3,2.6],yw=[-2.4,.35,-1.6];function Gv(){let i=new Float32Array(ci*3),e=new Float32Array(ci*3),t=new Float32Array(ci*4),n=new Float32Array(ci),s=new Uint8Array(ci),r=new Float32Array(ci);for(let g=0;g<ci;g++)t[g*4]=t[g*4+1]=1;let o=new on(1,1),l=new ms;l.index=o.index,l.setAttribute("position",o.attributes.position),l.setAttribute("uv",o.attributes.uv),l.instanceCount=0;let a=new Float32Array(ci*4),u=new Float32Array(ci*4),h={uP:{value:a},uC:{value:u},uNoiseTex:Re.uNoiseTex,uAmb:{value:new ue},uSun:{value:new ue},uTail:{value:new pt},uCam:{value:new H},...Xi},p=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:h,vertexShader:`
      uniform vec4 uP[${ci}], uC[${ci}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${qh}
      void main(){
        vec4 aP = uP[gl_InstanceID]; vUv = uv; vC = uC[gl_InstanceID];
        float near = smoothstep(4.5, 6.5, length(aP.xyz - uCam)); // it thins (and shrinks: cheap) before it reaches the camera
        vec4 mv = viewMatrix * vec4(aP.xyz, 1.0); mv.xy += position.xy * aP.w * (0.35 + 0.65 * near);
        vec3 tv = aP.xyz - uTail.xyz;
        vLit = particleLight(aP.xyz) * 0.35 + vec3(1.0, 0.12, 0.07) * uTail.w * 0.6 / (1.0 + dot(tv, tv) * 0.5); // lamps; red from the tail lights
        vC.x *= near;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform sampler2D uNoiseTex; uniform vec3 uAmb, uSun; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      void main(){
        float r = length(vUv - 0.5), n = texture(uNoiseTex, vUv * 0.02 + vC.z).r; // wispy, not a disc
        float a = vC.x * (1.0 - smoothstep(0.0, 0.5, r)) * (0.3 + 1.4 * n); // (soft edges, uneven: mist, not discs)
        vec3 col = uAmb * (vC.y > 1.5 ? 1.35 : vC.y > 0.5 ? 1.1 : 1.3) + uSun * (vC.y > 0.5 ? 0.45 : 0.25) + vLit; // mist is brighter than the wet road
        gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
      }`}),m=new mt(l,p);m.frustumCulled=!1,m.renderOrder=4,m.visible=!1;let x=0,_=0,M=0,c=0,f=!1;function d(g,v,b,T,w,y,S,E,R,C,L){let A=x;x=(x+1)%ci,i[A*3]=v,i[A*3+1]=b,i[A*3+2]=T,e[A*3]=w,e[A*3+1]=y,e[A*3+2]=S,t[A*4]=0,t[A*4+1]=E,t[A*4+2]=R,t[A*4+3]=C,n[A]=L,s[A]=g,r[A]=Math.random()}return{mesh:m,update(g,v,b,T,w,y,S,E,R,C,L){if(!L){if(f){for(let Z=0;Z<ci;Z++)t[Z*4]=t[Z*4+1];f=!1}m.visible=!1;return}let A=v.position,I=v.rotation.y,D=Math.cos(I),F=Math.sin(I),z=F*b,U=D*b,V=Math.min(1,Math.max(0,(b-2)/14)),k=w>.3?2:0,X=k?w:T;for(_+=24*X*V*g;_>=1;){_-=1;let Z=(c^=1)?1:-1,q=Z*.67,ve=-1.28-Math.random()*.2,Pe=Math.random(),ee=Math.random(),xe=1.6+1.6*Pe,Fe=k?.5+.7*ee:.9+1*ee,ke=Z*(.3+.6*Math.random());d(k,A.x+q*D+ve*F,A.y+.12,A.z-q*F+ve*D,z*.55-F*xe+ke*D,Fe,U*.55-D*xe-ke*F,k?.45+.3*Pe:.55+.35*Pe,.2+.1*ee,k?.7+.35*ee:.8+.4*ee,.5*(.5+.5*V)*Math.min(1,X*1.5))}for(M+=(5+4*V)*y*g;M>=1;){M-=1;let Z=Math.random();d(1,A.x-.42*D-1.78*F,A.y+.26,A.z+.42*F-1.78*D,z*.5-F*.8,.25+.2*Z,U*.5-D*.8,1.3+.6*Z,.14,.8+.4*Math.random(),.32*Math.min(1,y*1.5))}let j=0,Me=Math.exp(-kd[0]*g),Se=Math.exp(-kd[1]*g),we=Math.exp(-kd[2]*g);for(let Z=0;Z<ci;Z++){let q=Z*4;if(t[q]>=t[q+1])continue;let ve=t[q]+=g,Pe=t[q+1];if(ve>=Pe)continue;let ee=s[Z],xe=ee===0?Me:ee===1?Se:we,Fe=Z*3,ke=i[Fe]-C.x,Le=i[Fe+1]-C.y,Ye=i[Fe+2]-C.z;if(ke*ke+Le*Le+Ye*Ye<20.25){t[q]=Pe;continue}e[Fe]*=xe,e[Fe+1]=e[Fe+1]*xe+yw[ee]*g,e[Fe+2]*=xe,i[Fe]+=e[Fe]*g,i[Fe+1]=Math.max(A.y+.05,i[Fe+1]+e[Fe+1]*g),i[Fe+2]+=e[Fe+2]*g;let ne=ve/Pe,Te=j*4;a[Te]=i[Fe],a[Te+1]=i[Fe+1],a[Te+2]=i[Fe+2],a[Te+3]=t[q+2]+(t[q+3]-t[q+2])*Math.sqrt(ne),u[Te]=n[Z]*Math.min(1,ne*6)*(1-ne)*(1-ne),u[Te+1]=ee,u[Te+2]=r[Z],j++}f=j>0,m.visible=f,l.instanceCount=j,f&&(h.uAmb.value.copy(S),h.uSun.value.copy(E),h.uTail.value.copy(R),h.uCam.value.copy(C))},shift(g,v){for(let b=0;b<ci;b++)i[b*3]-=g,i[b*3+2]-=v}}}var Wr=24,_w=55,bw=12;function qv(){let i=[],e=new Float32Array(Wr*2*2),t=new Float32Array(Wr*2*3);for(let u=0;u<Wr;u++)if(e.set([u,-1,u,1],u*4),u<Wr-1){let h=u*2;i.push(h,h+1,h+2,h+1,h+3,h+2)}let n=new yt;n.setAttribute("position",new St(t,3)),n.setAttribute("aI",new St(e,2)),n.setIndex(i);let s=new Float32Array(Wr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new ue},uTime:{value:0},uNoiseTex:Re.uNoiseTex},o=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${Wr}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${Li}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),l=new mt(n,o);l.frustumCulled=!1,l.renderOrder=1,l.visible=!1;let a={};return{mesh:l,update(u,h,p,m,x,_,M,c){if(l.visible=_>.01,!!l.visible){for(let f=0;f<Wr;f++)u.at(h+_w+f*bw,a),s[f*4]=a.x-p,s[f*4+1]=a.y,s[f*4+2]=a.z-m,s[f*4+3]=a.h;r.uW.value=x*.85,r.uHot.value=_,r.uTime.value=M,r.uSky.value.copy(c)}}}}var ia=1.6;function Xv(i,e=null){let t=i==="high",[n,s,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,l=t?16:14,a=[4,Math.round(s*.4),Math.round(s*.65),s].filter((L,A,I)=>!A||L>I[A-1]),u=[s,Math.round((s+r)/2),r],h=(L,A)=>{let I=new ms;return I.setAttribute("position",new je(L,3)),I.setIndex(A),I},p=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],m=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],x=new Float32Array(hr*4),_=new Float32Array(hr),M={uG:{value:x},uGM:{value:_},uGP:{value:new pt(0,1/ia,3.1,0)},uGQ:{value:new pt(0,1.05,3,0)},uRingD:{value:new pt(s,r,0,0)}},c=[],f=(L,A,I)=>{let D={uRing:{value:new pt(0,0,I?2*n:n,I)},uRingC:{value:new pt(0,0,0,0)}},F=h(...I?m:p);F.instanceCount=0;let z=new mt(F,Yg(D,M));z.frustumCulled=!1,z.castShadow=!1,z.receiveShadow=!1,z.visible=!1,c.push({mesh:z,u:D,dA:L,dB:A,size:I?2*n:n,W:I?l:o,last:A===s||A===r})};for(let L=0;L<a.length-1;L++)f(a[L],a[L+1],0);for(let L=0;L<u.length-1;L++)f(u[L],u[L+1],1);let d=new Int32Array(64).fill(-2147483648),g=new Float32Array(64),v=new Uint8Array(64),b=L=>{let A=L&63;if(d[A]!==L){d[A]=L;let I=L*ia,D=ur(I),F=ki(I),z=Dt(I).country,U=Math.min(1,Math.max(0,(z-.97)/.025))*(D?Math.min(1,Math.max(0,(Math.abs(I-D.s)-13)/7)):1)*(F?Math.min(1,Math.max(0,(Math.abs(I-F.s)-38)/10)):1);g[A]=U>0?3+4*Math.round(U*15):0,v[A]=z>0?1:0}return A},T=L=>g[b(L)],w=L=>v[b(L)],y={},S=NaN,E=NaN,R=NaN,C=0;return{meshes:c.map(L=>L.mesh),hide(){for(let L=0;L<c.length;L++)c[L].mesh.visible=!1},warm(L){for(let A of c)A.mesh.visible=L,L&&(A.u.uRing.value.y=1,A.u.uRingC.value.set(1,1,A.W,0),A.mesh.geometry.instanceCount=2)},update(L,A,I,D,F,z,U){let V=Math.floor((A-3)/ia);if(!w(V)&&!w(V+hr-1))C=0;else{if(V!==S||D!==E||F!==R){S=V,E=D,R=F,C=0;for(let k=0;k<hr;k++)L.at((V+k)*ia,y),x[k*4]=y.x-D,x[k*4+1]=y.y,x[k*4+2]=y.z-F,x[k*4+3]=y.h,C|=_[k]=T(V+k)}M.uGP.value.set(V*ia,1/ia,z,A),M.uGQ.value.set(I,U,3,0)}for(let k=0;k<c.length;k++){let X=c[k];if(!C){X.mesh.visible=!1;continue}let j=Math.floor((A+X.dA)/X.size),Me=Math.floor((A+X.dB)/X.size)+(X.last?1:0),Se=U*X.dB+3,we=z+2.6,Z=Math.min(X.W,Math.max(0,Se-(we+I))),q=Math.min(X.W,Math.max(0,Se-(we-I))),ve=Z>0?Math.ceil(Z/X.size)+1:0,Pe=q>0?Math.ceil(q/X.size)+1:0;X.u.uRing.value.x=j,X.u.uRing.value.y=Me-j,X.u.uRingC.value.set(ve,Pe,X.W,0),X.mesh.geometry.instanceCount=(Me-j)*(ve+Pe),X.mesh.visible=X.mesh.geometry.instanceCount>0}}}}var sa=72;function Mw(){let i=[],e=[],t=(s,r,o,l,a,u)=>{i.push(...s,...r,...o),e.push(l,a,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new yt;return n.setAttribute("position",new je(i,3)),n.setAttribute("aWing",new je(e,1)),n}function Yv(){let i=Mw(),e=new Dn(new Float32Array(sa*3),3),t=new Dn(new Float32Array(sa*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new ft({side:Mn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:se.fog},uFogD:{value:.002},uCam:{value:new H}},vertexShader:`
      attribute float aWing; attribute vec3 aCol; attribute vec2 aFlap; uniform float uTime; varying vec3 vCol; varying float vD; uniform vec3 uCam;
      void main(){
        vec3 p = position;
        float f = sin(uTime * aFlap.x + aFlap.y);
        float glide = step(0.5, fract(aFlap.y * 0.37 + uTime * 0.05)) * step(aFlap.x, 6.0); // big birds glide now and then
        f = mix(f, 0.15, glide);
        p.y += aWing * (0.32 + f * 0.42);           // a V-shaped dihedral reads from below and from the side
        p.x *= 1.0 - aWing * abs(f) * 0.12;
        vec4 w = modelMatrix * instanceMatrix * vec4(p, 1.0);
        vCol = aCol; vD = length(w.xyz - uCam);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform vec3 uFog; uniform float uFogD; varying vec3 vCol; varying float vD;
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new ss(i,n,sa);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},l=new et,a=new xn,u=new Jn(0,0,0,"YXZ"),h=new H,p=new H,m=()=>r.reduce((M,c)=>M+c.birds.length,0);function x(M,c,f,d){let g=M==="small"?6+Math.floor(Math.random()*7):M==="crow"?3+Math.floor(Math.random()*5):4;if(m()+g>sa)return;let v=45+Math.random()*85,b=(Math.random()-.5)*120,T=Math.random()<.5?1:-1,w=new H().copy(c).addScaledVector(f,v).addScaledVector(d,b-T*75);w.y=c.y+(M==="crow"?18+Math.random()*24:10+Math.random()*18);let y=M==="small"?11+Math.random()*4:8+Math.random()*3,S=new H().copy(d).multiplyScalar(T*y).addScaledVector(f,(Math.random()-.3)*y*.6),E=M==="small"?.8:1.45,R=Array.from({length:g},(C,L)=>({off:new H((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:M==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:M,c:w,vel:S,birds:R,size:E,life:60})}function _(M,c,f,d){if(r.some(b=>b.kind==="gull")||m()+4>sa)return;let g=new H().copy(M).addScaledVector(c,70).addScaledVector(f,-d*45);g.y=M.y+18;let v=Array.from({length:4},(b,T)=>({off:new H,ph:Math.random()*6.28,fq:5.5,w:T/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:g,vel:new H,birds:v,size:1.25,life:1e9})}return{mesh:s,update(M,c,f,d,g,v,b,T,w){n.uniforms.uTime.value=c,n.uniforms.uCam.value.copy(f);let y=b>.35&&T<.3,S=se.warm>.25&&se.sunEl<.6&&b>.2;y&&(o.small-=M)<0&&(o.small=22+Math.random()*35,v.coast<.6&&x("small",f,d,g)),(S||y&&v.city+v.country>.6&&Math.random()<4e-4)&&(o.crow-=M)<0&&(o.crow=S?14+Math.random()*18:60,x("crow",f,d,g)),v.coast>.6&&y&&_(f,d,g,1);let E=[.1+.08*b,.11+.09*b,.15+.1*b],R=0;for(let C=r.length-1;C>=0;C--){let L=r[C];if(L.kind==="gull"?(L.c.lerp(h.copy(w).addScaledVector(d,60).addScaledVector(g,-42).setY(w.y+16),Math.min(1,M*.25)),(v.coast<.4||!y)&&(L.life=Math.min(L.life,8),L.c.y+=M*6)):L.c.addScaledVector(L.vel,M),L.life-=M,L.life<0||L.kind!=="gull"&&L.c.distanceTo(f)>300){r.splice(C,1);continue}for(let A of L.birds){if(R>=sa)break;let I,D,F,z;L.kind==="gull"?(A.w+=M*(14/A.r),I=L.c.x+Math.cos(A.w)*A.r,F=L.c.z+Math.sin(A.w)*A.r,D=L.c.y+A.h+Math.sin(c*.4+A.ph)*2,z=Math.atan2(-Math.sin(A.w),Math.cos(A.w))):(I=L.c.x+A.off.x+Math.sin(c*.7+A.ph)*1.2,D=L.c.y+A.off.y+Math.sin(c*1.1+A.ph)*.6,F=L.c.z+A.off.z,z=Math.atan2(L.vel.x,L.vel.z)),u.set(0,z,Math.sin(c+A.ph)*.15),a.setFromEuler(u),p.setScalar(L.size),l.compose(h.set(I,D,F),a,p),s.setMatrixAt(R,l);let U=L.kind==="gull"?[.92*(.5+.5*b),.93*(.5+.5*b),.95*(.5+.5*b)]:L.kind==="crow"?[.05,.05,.07]:E;e.setXYZ(R,U[0],U[1],U[2]),t.setXY(R,A.fq,A.ph),R++}}s.count=R,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(M){n.uniforms.uFogD.value=M},shift(M,c){for(let f of r)f.c.x-=M,f.c.z-=c}}}var ql=new H;function Yi(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),a=Math.PI/4;ql.copy(e),ql[n]=0,ql.normalize();let u=.5*o/(o+l),h=1-ql.angleTo(i)/a;return Math.sign(ql[t])===1?h*u:l/(o+l)+u+u*(1-h)}var Hn=class i extends en{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let a=new H,u=new H,h=new H(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,m=this.attributes.normal.array,x=this.attributes.uv.array,_=p.length/6,M=new H,c=.5/o;for(let f=0,d=0;f<p.length;f+=3,d+=2)switch(a.fromArray(p,f),u.copy(a),u.x-=Math.sign(u.x)*c,u.y-=Math.sign(u.y)*c,u.z-=Math.sign(u.z)*c,u.normalize(),p[f+0]=h.x*Math.sign(a.x)+u.x*r,p[f+1]=h.y*Math.sign(a.y)+u.y*r,p[f+2]=h.z*Math.sign(a.z)+u.z*r,m[f+0]=u.x,m[f+1]=u.y,m[f+2]=u.z,Math.floor(f/_)){case 0:M.set(1,0,0),x[d+0]=Yi(M,u,"z","y",r,n),x[d+1]=1-Yi(M,u,"y","z",r,t);break;case 1:M.set(-1,0,0),x[d+0]=1-Yi(M,u,"z","y",r,n),x[d+1]=1-Yi(M,u,"y","z",r,t);break;case 2:M.set(0,1,0),x[d+0]=1-Yi(M,u,"x","z",r,e),x[d+1]=Yi(M,u,"z","x",r,n);break;case 3:M.set(0,-1,0),x[d+0]=1-Yi(M,u,"x","z",r,e),x[d+1]=1-Yi(M,u,"z","x",r,n);break;case 4:M.set(0,0,1),x[d+0]=1-Yi(M,u,"x","y",r,e),x[d+1]=1-Yi(M,u,"y","x",r,t);break;case 5:M.set(0,0,-1),x[d+0]=Yi(M,u,"x","y",r,e),x[d+1]=1-Yi(M,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Xh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,a=new yt,u=0;for(let h=0;h<i.length;++h){let p=i[h],m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in p.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(p.attributes[x]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in p.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[x]===void 0&&(o[x]=[]),o[x].push(p.morphAttributes[x])}if(e){let x;if(t)x=p.index.count;else if(p.attributes.position!==void 0)x=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(u,x,h),u+=x}}if(t){let h=0,p=[];for(let m=0;m<i.length;++m){let x=i[m].index;for(let _=0;_<x.count;++_)p.push(x.getX(_)+h);h+=i[m].attributes.position.count}a.setIndex(p)}for(let h in r){let p=Zv(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let m=0;m<p;++m){let x=[];for(let M=0;M<o[h].length;++M)x.push(o[h][M][m]);let _=Zv(x);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(_)}}}return a}function Zv(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),l=new St(o,t,n),a=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=a/t;for(let m=0,x=h.count;m<x;m++)for(let _=0;_<t;_++){let M=h.getComponent(m,_);l.setComponent(m+p,_,M)}}else o.set(h.array,a);a+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function Sw(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new si(i);return n.colorSpace=Wt,n}var zd=4;function ww(){let t=document.createElement("canvas");t.width=128*zd,t.height=128;let n=t.getContext("2d"),s=(o,l,a,u,h)=>{n.beginPath(),n.moveTo(o+h,l),n.arcTo(o+a,l,o+a,l+u,h),n.arcTo(o+a,l+u,o,l+u,h),n.arcTo(o,l+u,o,l,h),n.arcTo(o,l,o+a,l,h),n.closePath(),n.fill()};for(let o=0;o<zd;o++){let l=o*128,a=n.createLinearGradient(0,0,0,128);a.addColorStop(0,"#9fbfe6"),a.addColorStop(.45,"#4a6690"),a.addColorStop(1,"#1d2638"),n.fillStyle=a,n.fillRect(l,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(l+14,84,30,50,9),s(l+84,84,30,50,9),n.fillRect(l+6,112,116,16),s(l+52,92,24,40,7)),o===2&&(s(l+62,66,44,70,12),n.fillRect(l+50,118,70,10)),o===3&&(s(l+70,78,40,60,11),n.fillRect(l+56,120,64,8)),n.save(),n.beginPath(),n.rect(l,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(l+40,0),n.lineTo(l+68,0),n.lineTo(l+20,128),n.lineTo(l-8,128),n.fill(),n.restore()}let r=new si(t);return r.colorSpace=Wt,r}function Kv(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/zd)}return i}function $v(){let i=new dn,e=new dn,t=new dn;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new pt,new pt],s=new ue(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=id(new an({color:"#ffffff",vertexColors:!0,gradientMap:Al}),.85,.06,"paint-l",r),l=(ne,Te)=>Object.assign(new ue(ne),{gloss:Te}),a=l("#9fd8c8",1),u=l("#eeece4",.6),h=l("#2a2c33",.35),p=l("#1b1c20",.04),m=l("#c8ccd2",.8),x=l("#d4d8de",1.3),_=(ne,Te)=>{let Q=ne.attributes.position.count,le=new Float32Array(Q*4);for(let re=0;re<Q;re++)le.set([Te.r,Te.g,Te.b,Te.gloss],re*4);return ne.setAttribute("color",new je(le,4)),ne},M=id(new an({color:"#ffffff",map:ww(),gradientMap:xi}),1.2,.08,"glass-l",r),c=new an({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:xi}),f=new an({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:xi}),d=new an({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:xi}),g=new an({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:xi}),v=new an({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:xi}),b=new yn({map:Sw()}),T=new Map,w=[],y=!1,S=new et,E=new Jn,R=new xn,C=new H(1,1,1),L=(ne,Te,Q,le,re,oe=0,B=0,_e=0)=>{let $=ne.index?ne.toNonIndexed():ne;if(Te.isColor&&(_($,Te),Te=o),E.set(oe,B,_e),R.setFromEuler(E),S.compose(new H(Q,le,re),R,C),$.applyMatrix4(S),y){w.push($);return}T.has(Te)||T.set(Te,[]),T.get(Te).push($)},A=l("#16171b",0),I=l("#2b3134",.15),D=l("#b9bfc6",.9),F=l("#4d5258",.4),z=l("#9a1c22",.6),U=1.7,V=.745,k=.3,X=(ne,Te,Q)=>{let le=Math.min(1,Math.max(0,(Q-ne)/(Te-ne)));return le*le*(3-2*le)},j=ne=>ne<.8?1.8:ne<1.22?1.8-.6*X(.8,1.22,ne):1.2-.1*((ne-1.22)/(U-1.22))**2,Me=ne=>1-.085*X(1.15,1.8,ne),Se=(ne,Te)=>{let Q=V-Te,le=k+Te*.6,re=j(ne)-Te*(ne<0?.4:1),oe=Math.max(.05,.1-Te*.5),B=Math.max(.06,(ne<.8?.17:.13)-Te*.5),_e=[[0,le],[(Q-oe)*.5,le],[Q-oe,le]];for(let N=1;N<4;N++){let P=-Math.PI/2+N/8*Math.PI;_e.push([Q-oe+oe*Math.cos(P),le+oe+oe*Math.sin(P)])}for(let N=0;N<=8;N++)_e.push([Q,le+oe+N/8*(re-B-le-oe)]);for(let N=1;N<5;N++){let P=N/10*Math.PI;_e.push([Q-B+B*Math.cos(P),re-B+B*Math.sin(P)])}_e.push([Q-B,re],[(Q-B)*.5,re],[0,re]);let $=_e.map(([N,P])=>[N*Me(P),P]);for(let N=_e.length-2;N>0;N--)$.push([-$[N][0],$[N][1]]);return $};{let ne=[];for(let W=0;W<=6;W++){let G=W/6*Math.PI/2;ne.push([-U+.2*(1-Math.cos(G)),.2*(1-Math.sin(G))])}for(let W=-U+.2+.12;W<.78;W+=.13)ne.push([W,0]);for(let W=.8;W<1.225;W+=.06)ne.push([W,0]);for(let W of[1.3,1.39])ne.push([W,0]);for(let W=6;W>=0;W--){let G=W/6*Math.PI/2;ne.push([U-.22*(1-Math.cos(G)),.22*(1-Math.sin(G))])}let le=[],re=[],oe=ne.map(([W,G])=>Se(W,G)),B=oe[0].length;oe.forEach((W,G)=>W.forEach(([te,de])=>le.push(te,de,ne[G][0])));for(let W=0;W<oe.length-1;W++)for(let G=0;G<B;G++){let te=W*B+G,de=W*B+(G+1)%B,fe=te+B,he=de+B;re.push(te,de,fe,de,he,fe)}for(let[W,G]of[[0,-1],[oe.length-1,1]]){let te=le.length/3,de=oe[W];le.push(0,(de[0][1]+de[B/2|0][1])/2,ne[W][0]);for(let fe=0;fe<B;fe++){let he=W*B+fe,me=W*B+(fe+1)%B;G<0?re.push(te,me,he):re.push(te,he,me)}}let _e=new yt;_e.setAttribute("position",new je(le,3)),_e.setIndex(re),_e.computeVertexNormals();{let W=_e.attributes.normal,G=B*10+12;if(W.getX(G)<0){for(let te=0;te<re.length;te+=3){let de=re[te+1];re[te+1]=re[te+2],re[te+2]=de}_e.setIndex(re),_e.computeVertexNormals()}}_e.setAttribute("uv",new je(new Float32Array(le.length/3*2),2));let $=_e.toNonIndexed(),N=$.attributes.position,P=new Float32Array(N.count*4);for(let W=0;W<N.count;W+=3){let G=(N.getY(W)+N.getY(W+1)+N.getY(W+2))/3,te=(N.getZ(W)+N.getZ(W+1)+N.getZ(W+2))/3,de=G>1.665&&te<.84&&te>-1.52?u:a;for(let fe=0;fe<3;fe++)P.set([de.r,de.g,de.b,de.gloss],(W+fe)*4)}$.setAttribute("color",new je(P,4)),L($,o,0,0,0)}L(new Hn(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let we=(ne,Te,Q,le,re)=>{let oe=new yt,B=[],_e=[],$=[],N=[];for(let P=0;P<=Q;P++)for(let W=0;W<=Te;W++){let G=W/Te,te=P/Q,de=ne(G,te);B.push(de[0]+de[3]*.004,de[1]+de[4]*.004,de[2]+de[5]*.004),_e.push(de[3],de[4],de[5]),$.push(G,te)}for(let P=0;P<Q;P++)for(let W=0;W<Te;W++){let G=P*(Te+1)+W,te=G+1,de=G+Te+1,fe=de+1;N.push(G,te,fe,G,fe,de)}oe.setAttribute("position",new je(B,3)),oe.setAttribute("normal",new je(_e,3)),oe.setAttribute("uv",new je($,2)),oe.setIndex(N);{let P=new H().fromArray(B,0),W=new H().fromArray(B,3),G=new H().fromArray(B,(Te+1)*3),te=new H().fromArray(_e,0);if(W.sub(P).cross(G.sub(P)).dot(te)<0){for(let de=0;de<N.length;de+=3){let fe=N[de+1];N[de+1]=N[de+2],N[de+2]=fe}oe.setIndex(N)}}return Kv(oe,le,re)},Z=ne=>{let Q=V*(Me(ne+.01)-Me(ne-.01))/.02,le=Math.hypot(1,Q);return[1/le,-Q/le]},q=ne=>{let Te=.8,Q=1.22;for(let le=0;le<24;le++){let re=(Te+Q)/2;j(re)>ne?Te=re:Q=re}return Te};for(let ne of[-1,1]){let Te=ne<0,Q=(le,re,oe)=>L(we((B,_e)=>{let $=1.21+_e*.39,N=ne>0?re($)+(le($)-re($))*B:le($)+(re($)-le($))*B,[P,W]=Z($);return[ne*V*Me($),$,N,ne*P,W,0]},1,6,oe,!1),M,0,0,0);Q(()=>.06,le=>q(le)-.07,2),Q(()=>-.72,()=>-.08,3),Q(()=>-1.42,()=>-.84,0),L(new en(.012,.41,.07),h,ne*.731,1.405,-.01,0,0,-ne*.07),L(new en(.014,.022,2.42),A,ne*.748,1.2,-.26);for(let[le,re]of[[.8,.64],[-.06,.42],[-.76,.64]])L(new en(.008,1.17-re,.012),I,ne*.749,(re+1.17)/2,le);L(new en(.02,.028,.13),I,ne*.752,1.06,.06),L(new en(.02,.028,.13),I,ne*.752,1.06,-.2),L(new en(.01,.022,.62),I,ne*.749,1.155,-1.08);for(let le of[1.12,-1.12])L(new Ar(.345,18,0,Math.PI),A,ne*.749,.29,le,0,ne*Math.PI/2,0),L(new tl(.35,.024,5,18,Math.PI),h,ne*.752,.29,le,0,ne*Math.PI/2,0);L(new Hn(.1,.12,.2,2,.04),a,ne*.83,1.24,1.02),L(new en(.07,.035,.05),h,ne*.775,1.2,1.03),L(new Hn(.16,.4,.05,3,.075),x,ne*.56,.95,-1.703),L(new Hn(.13,.37,.05,3,.062),c,ne*.56,.95,-1.716),L(new Hn(.036,.27,.02,2,.016),f,ne*.56,.95,-1.742),L(new Hn(.11,.06,.04,2,.02),g,ne*.56,.69,-1.707)}{let ne=new Eo,Te=.52,Q=1.15,le=1.66,re=.07;ne.moveTo(-Te+re,Q),ne.lineTo(Te-re,Q),ne.absarc(Te-re,Q+re,re,-Math.PI/2,0),ne.lineTo(Te,le-re),ne.absarc(Te-re,le-re,re,0,Math.PI/2),ne.lineTo(-Te+re,le),ne.absarc(-Te+re,le-re,re,Math.PI/2,Math.PI),ne.lineTo(-Te,Q+re),ne.absarc(-Te+re,Q+re,re,Math.PI,Math.PI*1.5);let oe=new Qa(ne,6),B=oe.attributes.position,_e=oe.attributes.uv;for(let $=0;$<B.count;$++){let N=B.getX($),P=B.getY($),W=(P-Q)/(le-Q);_e.setXY($,(N+Te)/(2*Te),W),B.setX($,N*(1-.08*W))}L(Kv(oe,1),M,0,0,-U-.004,0,Math.PI,0)}L(new Hn(.36,.04,.03,2,.014),d,0,1.69,-1.712),L(we((ne,Te)=>{let Q=1.19-Te*.36,le=j(Q),re=.56-.07*Te,oe=.005,B=(j(Q+oe)-j(Q-oe))/(2*oe),_e=Math.hypot(1,B);return[(ne*2-1)*re,le,Q,0,1/_e,-B/_e]},2,7,0,!1),M,0,0,0),L(new Hn(.46,.25,.012,2,.05),l("#86bdb0",.6),0,.73,-1.701),L(new on(.34,.17),b,0,.72,-1.709,0,Math.PI,0),L(new Hn(.25,.034,.03,2,.013),x,0,.9,-1.708);for(let ne of[-1,1])L(new en(.01,.56,.006),I,ne*.47,.85,-1.703);L(new en(.95,.01,.006),I,0,.565,-1.703),L(new Hn(1.5,.2,.26,3,.08),a,0,.44,-1.6),L(new Hn(1.38,.08,.22,2,.03),h,0,.33,-1.61);for(let ne of[-1,1])L(new en(.13,.035,.01),z,ne*.56,.44,-1.731);L(new Bi(.036,.036,.12,12),x,.46,.29,-1.68,Math.PI/2,0,0),L(new Bi(.024,.024,.124,10),A,.46,.29,-1.68,Math.PI/2,0,0);for(let ne of[-1,1])L(new Hn(.4,.26,.04,2,.06),h,ne*.42,.85,1.702),L(new Bi(.105,.105,.03,16),v,ne*.46,.85,1.72,Math.PI/2,0,0),L(new Bi(.055,.055,.03,12),v,ne*.3,.85,1.718,Math.PI/2,0,0),L(new Hn(.1,.06,.04,2,.015),g,ne*.52,.66,1.705),L(new en(.46,.014,.014),A,ne*.25,1.215,1.2,-.3,ne*.12,0);L(new Hn(.36,.12,.03,2,.03),A,0,.84,1.704);for(let ne=0;ne<3;ne++)L(new en(.32,.012,.012),I,0,.805+ne*.035,1.722);L(new Hn(1.52,.24,.22,2,.07),h,0,.44,1.62),L(new en(.7,.07,.02),A,0,.4,1.732),L(new en(.34,.17,.01),l("#f0cc38",.3),0,.62,1.733),L(new en(.3,.05,.004),l("#2f5a2f",.1),0,.6,1.739),y=!0;for(let[ne,Te]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){L(new Bi(.29,.29,.19,24),p,ne,.29,Te,0,0,Math.PI/2),L(new Bi(.195,.195,.194,20),D,ne,.29,Te,0,0,Math.PI/2),L(new Bi(.155,.155,.198,16),F,ne,.29,Te,0,0,Math.PI/2);for(let Q=0;Q<5;Q++){let le=Q/5*Math.PI*2+.3;L(new en(.202,.03,.15),D,ne,.29-.085*Math.sin(le),Te+.085*Math.cos(le),le,0,0)}L(new Bi(.045,.045,.206,10),m,ne,.29,Te,0,0,Math.PI/2)}y=!1;for(let[ne,Te]of T){let Q=new mt(Xh(Te),ne);Q.castShadow=ne!==M&&ne!==b&&ne!==d&&ne!==v&&ne!==f,Q.receiveShadow=!0,t.add(Q)}{let ne=new mt(Xh(w),o);ne.castShadow=ne.receiveShadow=!0,i.add(ne)}{let Q=document.createElement("canvas");Q.width=48,Q.height=96;let le=Q.getContext("2d"),re=le.createImageData(48,96);for(let B=0;B<96;B++)for(let _e=0;_e<48;_e++){let $=Math.max(0,Math.abs((_e+.5)/48-.5)*2.1-.62),N=Math.max(0,Math.abs((B+.5)/96-.5)*2.05-.78),P=Math.hypot($/.42,N/.24),W=Math.max(0,1-P),G=(B*48+_e)*4;re.data[G]=re.data[G+1]=re.data[G+2]=Math.round(255*W*W*(3-2*W)),re.data[G+3]=255}le.putImageData(re,0,0);let oe=new mt(new on(2.2,4.1),new yn({color:0,alphaMap:new si(Q),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));oe.rotation.x=-Math.PI/2,oe.position.y=.03,oe.renderOrder=3,i.add(oe)}let ve=(()=>{let Q=document.createElement("canvas");Q.width=16,Q.height=64;let le=Q.getContext("2d"),re=le.createImageData(16,64);for(let oe=0;oe<64;oe++)for(let B=0;B<16;B++){let _e=1-(oe+.5)/64,$=((B+.5)/16-.5)*2,N=Math.exp(-$*$*5)*Math.min(1,_e/.06)*Math.pow(1-_e,1.6)*(.78+.22*Math.sin(_e*31+$*2)),P=(oe*16+B)*4;re.data[P]=re.data[P+1]=re.data[P+2]=Math.round(255*Math.max(0,N)),re.data[P+3]=255}return le.putImageData(re,0,0),new yn({map:new si(Q),color:16726576,transparent:!0,opacity:0,blending:rs,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})})();{let ne=[];for(let Q of[-.56,.56]){let le=new on(.22,1.5);le.rotateX(-Math.PI/2),le.translate(Q,.035,-1.72-.75),ne.push(le)}let Te=new mt(Xh(ne),ve);Te.renderOrder=3,Te.visible=!1,i.add(Te),ve.mesh=Te}let Pe=new dn;Pe.position.set(.02,1.19,-1.716),t.add(Pe);let ee=new en(.52,.026,.02);ee.translate(.27,0,0);let xe=new mt(_(ee,h),o);xe.rotation.z=.18,Pe.add(xe);let Fe=0,ke=new ol(16773328,0,70,.55,.65,1.2);ke.position.set(0,.8,1.6),ke.target.position.set(0,0,18),t.add(ke,ke.target);let Le={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},Ye=(ne,Te)=>Te*Math.tanh(ne/Te);return{group:i,lamps:n,lampCol:s,head:ke,update(ne,Te,Q,le=0,re=null,oe=0){if(re){let B=Ye(-re.lat*.016,.045),_e=Ye(-re.lon*.008,.03);Le.rv+=((B-Le.roll)*55-Le.rv*8)*ne,Le.roll+=Le.rv*ne,Le.pv+=((_e-Le.pitch)*60-Le.pv*9)*ne+re.kick,Le.pitch+=Le.pv*ne,Le.yv+=((re.road-Le.y)*85-Le.yv*8)*ne+re.jolt,Le.y+=Le.yv*ne,e.rotation.set(Le.pitch,0,Le.roll),e.position.y=.35+Le.y}if(Le.br+=((re?re.brake:0)-Le.br)*Math.min(1,ne*14),c.emissiveIntensity=.35+Q*3.2+Le.br*(1.7+Q*2),d.emissiveIntensity=Le.br*(2.4+Q*1.6),f.emissiveIntensity=1+Q*3+Le.br*(2+Q*2),ve.opacity=oe*Math.min(1,.22+c.emissiveIntensity*.22),ve.mesh.visible=ve.opacity>.01,le>.15||Fe%2.6>.01){Fe+=ne;let B=Fe%2.6/2.6,_e=N=>N*N*(3-2*N),$=B<.25?_e(B/.25):B<.5?_e(1-(B-.25)/.25):0;xe.rotation.z=.18+$*2.5,le<=.15&&B>=.5&&(Fe=0)}ke.intensity=Q*60,v.emissiveIntensity=.15+Q*2.6}}}var ra={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var bi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Tw=new sr(-1,1,1,-1,0,1),Hd=class extends yt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},Ew=new Hd,Gs=class{constructor(e){this._mesh=new mt(Ew,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Tw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var oa=class extends bi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Dr.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Gs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xl=class extends bi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Yh=class extends bi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Zh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ie);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oa(ra),this.copyPass.material.blending=ri,this.timer=new al}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Xl!==void 0&&(o instanceof Xl?n=!0:o instanceof Yh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Kh=class extends bi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ue}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Jv={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var aa=class i extends bi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,o,{type:Sn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new Yt(r,o,{type:Sn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new Yt(r,o,{type:Sn,depthBuffer:!1});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let l=Jv;this.highPassUniforms=Dr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Dr.clone(ra.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader,premultipliedAlpha:!0,blending:rs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ue,this._oldClearAlpha=1,this._basic=new yn,this._fsQuad=new Gs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[a];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let l=t[o],a=o+1<e?t[o+1]:0,u=l+a;s.push((o*l+(o+1)*a)/u),r.push(u)}return new ft({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};aa.BlurDirectionX=new Ie(1,0);aa.BlurDirectionY=new Ie(0,1);var Vd=class extends bi{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Yt(4,4,{type:Sn,depthBuffer:!1,minFilter:zt,magFilter:zt,generateMipmaps:!1}),this.mat=new ft({uniforms:{tDiffuse:{value:null},uTexel:{value:new Ie(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new Gs(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},jv=[1,.8,.6,.4,.2],Wd="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";function Aw(i){let e=[],t=i/3,n=r=>r.toFixed(6);for(let r=0;r<i;r++)e.push(.39894*Math.exp(-.5*r*r/(t*t))/t);let s="";for(let r=1;r<i;r+=2){let o=e[r],l=r+1<i?e[r+1]:0,a=(r*o+(r+1)*l)/(o+l);s+=` s += (texture2D(tSrc, vUv + uStep * ${n(a)}).rgb + texture2D(tSrc, vUv - uStep * ${n(a)}).rgb) * ${n(o+l)};`}return new ft({uniforms:{tSrc:{value:null},uStep:{value:new Ie}},vertexShader:Wd,depthTest:!1,depthWrite:!1,fragmentShader:`uniform sampler2D tSrc; uniform vec2 uStep; varying vec2 vUv; void main(){ vec3 s = texture2D(tSrc, vUv).rgb * ${n(e[0])};${s} gl_FragColor = vec4(s, 1.0); }`})}var Gd=class extends bi{constructor(){super(),this.needsSwap=!1,this.strength=1,this.radius=0,this.threshold=1;let e=()=>new Yt(1,1,{type:Sn,depthBuffer:!1,generateMipmaps:!1});this.bright=e(),this.rtH=[],this.rtV=[],this.blur=[];for(let t=0;t<5;t++)this.rtH.push(e()),this.rtV.push(e()),this.blur.push(Aw(3+2*t));this.high=new ft({uniforms:{tDiffuse:{value:null},uHalf:{value:new Ie(1,1)},uThreshold:{value:1}},vertexShader:Wd,depthTest:!1,depthWrite:!1,fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uHalf; uniform float uThreshold;
        vec3 hp(vec2 p){ vec3 c = texture2D(tDiffuse, p / uHalf).rgb; return c * smoothstep(uThreshold, uThreshold + 0.01, luminance(c)); }
        void main(){ vec2 p = floor(gl_FragCoord.xy) * 2.0 + 0.5; gl_FragColor = vec4(0.25 * (hp(p) + hp(p + vec2(1.0, 0.0)) + hp(p + vec2(0.0, 1.0)) + hp(p + 1.0)), 1.0); }`}),this.comp=new ft({uniforms:{t0:{value:this.rtV[0].texture},t1:{value:this.rtV[1].texture},t2:{value:this.rtV[2].texture},t3:{value:this.rtV[3].texture},t4:{value:this.rtV[4].texture},uW:{value:[0,0,0,0,0]}},vertexShader:Wd,depthTest:!1,depthWrite:!1,fragmentShader:`uniform sampler2D t0, t1, t2, t3, t4; uniform float uW[5]; varying vec2 vUv;
        void main(){ gl_FragColor = vec4(uW[0] * texture2D(t0, vUv).rgb + uW[1] * texture2D(t1, vUv).rgb + uW[2] * texture2D(t2, vUv).rgb + uW[3] * texture2D(t3, vUv).rgb + uW[4] * texture2D(t4, vUv).rgb, 1.0); }`}),this.texture=this.rtH[0].texture,this.uvScale=new Ie(1,1),this.quad=new Gs(null),this.clearColor=new ue(0,0,0),this.oldClear=new ue}setSize(e,t){let n=Math.max(1,Math.round(e/2)),s=Math.max(1,Math.round(t/2)),r=Math.ceil(n/2),o=Math.ceil(s/2);this.high.uniforms.uHalf.value.set(n,s),this.uvScale.set(n/(2*r),s/(2*o)),this.bright.setSize(r,o);for(let l=0;l<5;l++)this.rtH[l].setSize(r,o),this.rtV[l].setSize(r,o),r=Math.max(1,Math.round(r/2)),o=Math.max(1,Math.round(o/2))}draw(e,t,n){this.quad.material=t,e.setRenderTarget(n),e.clear(),this.quad.render(e)}render(e,t,n){let s=e.autoClear,r=e.getClearAlpha();e.getClearColor(this.oldClear),e.autoClear=!1,e.setClearColor(this.clearColor,0),this.high.uniforms.tDiffuse.value=n.texture,this.high.uniforms.uThreshold.value=this.threshold,this.draw(e,this.high,this.bright);let o=this.bright;for(let u=0;u<5;u++){let h=this.blur[u],p=h.uniforms,m=this.rtH[u],x=this.rtV[u];p.tSrc.value=o.texture,p.uStep.value.set(1/m.width,0),this.draw(e,h,m),p.tSrc.value=m.texture,p.uStep.value.set(0,1/x.height),this.draw(e,h,x),o=x}let l=this.comp.uniforms.uW.value,a=3*this.strength;for(let u=0;u<5;u++)l[u]=a*(jv[u]+(1.2-2*jv[u])*this.radius);this.draw(e,this.comp,this.rtH[0]),e.setClearColor(this.oldClear,r),e.autoClear=s}},Rw={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Ie(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Ie(1/1280,1/720)},uLo:{value:new H(-.014,0,.03)},tBloom:{value:null},uBloomK:{value:0},uBloomUv:{value:new Ie(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    // tone mapping + sRGB output and the anime grade in ONE full-screen pass (was OutputPass + a separate grade pass)
    #include <tonemapping_pars_fragment>
    uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uSunVis, uDay, uWarm, uTime, uAspect, uVig, uSat; uniform vec3 uLo; varying vec2 vUv;
    #ifdef LITE_BLOOM
    uniform sampler2D tBloom; uniform float uBloomK; uniform vec2 uBloomUv; // (phones: the bloom, added here)
    #endif
    float h11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
    float n1(float x){ float i = floor(x), f = fract(x); return mix(h11(i), h11(i + 1.0), f * f * (3.0 - 2.0 * f)); }
    #ifdef USE_FXAA
    // FXAA (the classic 5 + 4 tap version) on the HDR input, with a tone-mapped luma: smooths edges in this same pass, so
    // phones can drop MSAA (its 2\xD7 buffer and resolve were up to a third of the frame on a mobile-class GPU)
    uniform vec2 uTexel;
    float fxLuma(vec3 c){ float l = dot(c, vec3(0.299, 0.587, 0.114)); return sqrt(l / (1.0 + l)); }
    vec3 fxaa(vec2 uv){
      vec3 nw = texture2D(tDiffuse, uv + vec2(-1.0, -1.0) * uTexel).rgb, ne = texture2D(tDiffuse, uv + vec2(1.0, -1.0) * uTexel).rgb;
      vec3 sw = texture2D(tDiffuse, uv + vec2(-1.0, 1.0) * uTexel).rgb, se = texture2D(tDiffuse, uv + vec2(1.0, 1.0) * uTexel).rgb;
      vec3 m = texture2D(tDiffuse, uv).rgb;
      float lnw = fxLuma(nw), lne = fxLuma(ne), lsw = fxLuma(sw), lse = fxLuma(se), lm = fxLuma(m);
      float lmin = min(lm, min(min(lnw, lne), min(lsw, lse))), lmax = max(lm, max(max(lnw, lne), max(lsw, lse)));
      if (lmax - lmin < max(0.03, lmax * 0.1)) return m;
      vec2 dir = vec2(-((lnw + lne) - (lsw + lse)), (lnw + lsw) - (lne + lse));
      float red = max((lnw + lne + lsw + lse) * 0.03125, 0.0078125);
      dir = clamp(dir / (min(abs(dir.x), abs(dir.y)) + red), vec2(-8.0), vec2(8.0)) * uTexel;
      vec3 a = 0.5 * (texture2D(tDiffuse, uv - dir / 6.0).rgb + texture2D(tDiffuse, uv + dir / 6.0).rgb);
      vec3 b = 0.5 * a + 0.25 * (texture2D(tDiffuse, uv - dir * 0.5).rgb + texture2D(tDiffuse, uv + dir * 0.5).rgb);
      float lb = fxLuma(b);
      return (lb < lmin || lb > lmax) ? a : b;
    }
    #endif
    void main(){
      #ifdef USE_FXAA
      vec4 src = vec4(fxaa(vUv), 1.0);
      #else
      vec4 src = texture2D(tDiffuse, vUv);
      #endif
      #ifdef LITE_BLOOM
      if (uBloomK > 0.0) src.rgb += texture2D(tBloom, vUv * uBloomUv).rgb;
      #endif
      src.rgb = NeutralToneMapping(src.rgb);
      vec3 c = sRGBTransferOETF(src).rgb;
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, uSat);
      c += uLo * (1.0 - l) + vec3(0.03, 0.014, -0.018) * l * uDay; // cool shadows (indigo on a bright day), warm highlights
      if (uSunVis > 0.001) { // sun streaks and lens ghosts only while the sun is on screen
        vec2 d = vUv - uSun; d.x *= uAspect; float dist = length(d), ang = atan(d.y, d.x);
        vec3 rc = mix(vec3(1.0, 0.97, 0.88), vec3(1.0, 0.78, 0.52), uWarm);
        float rays = pow(n1(ang * 7.0 + 3.0) * 0.55 + n1(ang * 19.0 - uTime * 0.03) * 0.45, 2.6);
        c += rc * rays * exp(-dist * 1.5) * 0.2 * uSunVis;
        c += rc * exp(-dist * 4.5) * 0.12 * uSunVis;
        vec2 axis = vec2(0.5) - uSun;
        for (int i = 1; i <= 3; i++) {
          vec2 gp = uSun + axis * (0.55 + float(i) * 0.42), gd = vUv - gp; gd.x *= uAspect;
          float g = 1.0 - smoothstep(0.0, 0.05 + float(i) * 0.025, length(gd));
          c += rc * g * 0.045 * uSunVis;
        }
      }
      vec2 v = vUv - 0.5; c *= 1.0 - dot(v, v) * uVig;
      gl_FragColor = vec4(c, 1.0);
    }`};function Qv(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1,lite:o=!1}={}){let l=i.getSize(new Ie),a=new Yt(l.x*i.getPixelRatio(),l.y*i.getPixelRatio(),{type:Sn,samples:n}),u=new Zh(i,a);u.addPass(new Kh(e,t));let h=new Vd;u.addPass(h);let p=o?new Gd:new aa(new Ie(l.x*r*.5,l.y*r*.5),.42,.55,.86);u.addPass(p);let m=new oa(Rw);m.material.defines={NEUTRAL_TONE_MAPPING:""},s&&(m.material.defines.USE_FXAA=""),o&&(m.material.defines.LITE_BLOOM="",m.uniforms.tBloom.value=p.texture,m.uniforms.uBloomUv.value=p.uvScale),m.material.toneMapped=!1,u.addPass(m);let x=u.render.bind(u);return u.render=_=>{m.uniforms.toneMappingExposure.value=i.toneMappingExposure,m.uniforms.uBloomK.value=p.enabled?1:0,x(_)},{composer:u,bloom:p,grade:m,refl:h}}function ex(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let Q=0;Q<2;Q++){let le=s.getChannelData(Q);for(let re=0;re<n;re++)le[re]=(Math.random()*2-1)*Math.pow(1-re/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let a=e.createGain();a.gain.value=.11,l.connect(a),a.connect(t),a.connect(r);let u=(Q,le)=>{let re=e.createBuffer(1,e.sampleRate*Q,e.sampleRate),oe=re.getChannelData(0),B=0;for(let _e=0;_e<oe.length;_e++)le?(B=(B+.02*(Math.random()*2-1))/1.02,oe[_e]=B*3.5):oe[_e]=Math.random()*2-1;return re},h=(Q,le,re)=>{let oe=e.createBufferSource();oe.buffer=Q,oe.loop=!0;let B=e.createBiquadFilter();B.type=le,B.frequency.value=re;let _e=e.createGain();return _e.gain.value=0,oe.connect(B),B.connect(_e),_e.connect(t),oe.start(),{f:B,g:_e}},p=h(u(2,!0),"lowpass",400),m=h(u(3,!1),"lowpass",700);m.g.connect(r);let x=h(u(2,!1),"bandpass",5200);x.f.Q.value=6;let _=h(u(2,!0),"lowpass",240),M=h(u(3,!1),"bandpass",2600);M.f.Q.value=.35;let c=h(u(2,!0),"lowpass",520),f=h(u(2,!1),"bandpass",1500);f.f.Q.value=.7;let d=e.createBiquadFilter(),g=e.createGain(),v=e.createOscillator(),b=e.createOscillator(),T=e.createGain();v.type="sawtooth",b.type="triangle",d.type="lowpass",d.frequency.value=320,d.Q.value=.6,g.gain.value=0,T.gain.value=.5,v.connect(d),b.connect(T),T.connect(d),d.connect(g),g.connect(t),v.start(),b.start();let w=h(u(3,!1),"bandpass",750);w.f.Q.value=.6;let y=h(u(3,!0),"lowpass",420),S=h(u(2,!0),"lowpass",140),E=u(.03,!1),R=0;function C(Q,le){let re=e.createBufferSource(),oe=e.createBiquadFilter(),B=e.createGain();re.buffer=E,oe.type="bandpass",oe.frequency.value=1800+Math.random()*2600,oe.Q.value=1.2,B.gain.setValueAtTime(le*(.02+Math.random()*.03),Q),B.gain.exponentialRampToValueAtTime(1e-4,Q+.03),re.connect(oe),oe.connect(B),B.connect(t),re.start(Q),re.stop(Q+.04)}let L=0,A=0;function I(Q,le){let re=e.createOscillator(),oe=e.createOscillator(),B=e.createGain(),_e=e.createBiquadFilter();_e.type="bandpass",_e.frequency.value=1150,_e.Q.value=2.2,re.type="square",re.frequency.value=745,oe.type="triangle",oe.frequency.value=1490,B.gain.setValueAtTime(0,Q),B.gain.linearRampToValueAtTime(.085*le,Q+.004),B.gain.exponentialRampToValueAtTime(1e-4,Q+.3),re.connect(_e),oe.connect(_e),_e.connect(B),B.connect(t),B.connect(r),re.start(Q),oe.start(Q),re.stop(Q+.33),oe.stop(Q+.33)}function D(Q,le){let re=e.createOscillator(),oe=e.createGain();re.type="sine",re.frequency.setValueAtTime(110,Q),re.frequency.exponentialRampToValueAtTime(48,Q+.12),oe.gain.setValueAtTime(1e-4,Q),oe.gain.linearRampToValueAtTime(.22*le,Q+.006),oe.gain.exponentialRampToValueAtTime(1e-4,Q+.17),re.connect(oe),oe.connect(t),re.start(Q),re.stop(Q+.2)}let F=e.createGain();F.gain.value=1,F.connect(t);let z=e.createGain();z.gain.value=.35,F.connect(z),z.connect(r);let U=(Q=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return F;let le=e.createStereoPanner();return le.pan.value=Q,le.connect(F),le};function V(Q,le,re,oe,B,_e,$="sine",N=0){let P=e.createOscillator(),W=e.createGain();if(P.type=$,P.frequency.setValueAtTime(le,Q),P.frequency.exponentialRampToValueAtTime(re,Q+oe),N){let G=e.createOscillator(),te=e.createGain();G.frequency.value=N,te.gain.value=le*.012,G.connect(te),te.connect(P.frequency),G.start(Q),G.stop(Q+oe+.05)}return W.gain.setValueAtTime(1e-4,Q),W.gain.linearRampToValueAtTime(B,Q+Math.min(.04,oe*.25)),W.gain.setValueAtTime(B,Q+oe*.7),W.gain.exponentialRampToValueAtTime(1e-4,Q+oe),P.connect(W),W.connect(_e),P.start(Q),P.stop(Q+oe+.02),W}function k(Q,le){let re=U(),oe=2+Math.floor(Math.random()*4),B=3200+Math.random()*1500;for(let _e=0;_e<oe;_e++){let $=Q+_e*(.09+Math.random()*.07);V($,B,B*(1.2+Math.random()*.3),.06,le*.022,re)}}function X(Q,le){let re=U();V(Q,1120,1390,1,le*.03,re,"sine",5.5),V(Q+1.15,2350,2150,.14,le*.03,re),V(Q+1.32,1700,1520,.13,le*.028,re),V(Q+1.5,2750,2480,.36,le*.032,re)}function j(Q,le){let re=U(),oe=1+Math.floor(Math.random()*3);for(let B=0;B<oe;B++){let _e=Q+B*.48,$=e.createOscillator(),N=e.createBiquadFilter(),P=e.createGain();$.type="sawtooth",$.frequency.setValueAtTime(560,_e),$.frequency.exponentialRampToValueAtTime(420,_e+.32),N.type="bandpass",N.frequency.value=1150,N.Q.value=1.6,P.gain.setValueAtTime(1e-4,_e),P.gain.linearRampToValueAtTime(le*.03,_e+.03),P.gain.exponentialRampToValueAtTime(1e-4,_e+.36),$.connect(N),N.connect(P),P.connect(re),$.start(_e),$.stop(_e+.4)}}function Me(Q,le){let re=U(),oe=2+Math.floor(Math.random()*2);for(let B=0;B<oe;B++)V(Q+B*.42,1750,1150,.36,le*.022,re,"triangle",11)}function Se(Q,le){let re=U(),oe=e.createOscillator(),B=e.createBiquadFilter(),_e=e.createGain(),$=240+Math.random()*220,N=5+Math.floor(Math.random()*4);oe.type="square",oe.frequency.value=$,B.type="bandpass",B.frequency.value=$*2.4,B.Q.value=3,_e.gain.setValueAtTime(1e-4,Q);for(let P=0;P<N;P++){let W=Q+P*.038;_e.gain.linearRampToValueAtTime(le*.014,W+.008),_e.gain.linearRampToValueAtTime(1e-4,W+.028)}oe.connect(B),B.connect(_e),_e.connect(re),oe.start(Q),oe.stop(Q+N*.038+.05)}function we(Q,le){let re=U(),oe=4300+Math.random()*700;for(let B=0;B<3;B++)V(Q+B*.055,oe,oe*1.01,.035,le*.009,re)}function Z(Q,le){let re=U(0);for(let[oe,B,_e]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let $=e.createOscillator(),N=e.createGain();$.type="sine",$.frequency.value=oe,$.detune.value=(Math.random()-.5)*8,N.gain.setValueAtTime(1e-4,Q),N.gain.linearRampToValueAtTime(le*.05*B,Q+.03),N.gain.exponentialRampToValueAtTime(1e-4,Q+_e),$.connect(N),N.connect(re),$.start(Q),$.stop(Q+_e+.1)}}function q(Q,le){let re=U();for(let oe of[Q,Q+.22])V(oe,2650,2600,.5,le*.018,re),V(oe,3950,3900,.35,le*.008,re)}let ve={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Pe=Q=>Q>1e-4?-Math.log(1-Math.random()*.98)/Q:1e9,ee=Q=>440*Math.pow(2,(Q-69)/12),xe=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Fe=[72,74,76,79,81,84,86,88],ke=0,Le=e.currentTime+.2,Ye=e.currentTime+3;function ne(Q){let le=xe[ke++%xe.length],re=11;for(let oe of le)for(let B of[-5,5]){let _e=e.createOscillator(),$=e.createGain();_e.type=B<0?"sine":"triangle",_e.frequency.value=ee(oe),_e.detune.value=B,$.gain.setValueAtTime(0,Q),$.gain.linearRampToValueAtTime(.18,Q+3.5),$.gain.setValueAtTime(.18,Q+re-4),$.gain.linearRampToValueAtTime(0,Q+re+1),_e.connect($),$.connect(l),_e.start(Q),_e.stop(Q+re+1.2)}}function Te(Q){let le=Fe[Math.floor(Math.random()*Fe.length)],re=e.createOscillator(),oe=e.createOscillator(),B=e.createGain(),_e=e.createGain();re.type=oe.type="sine",re.frequency.value=ee(le),oe.frequency.value=ee(le)*2.01,_e.gain.value=.25,oe.connect(_e),_e.connect(B),B.gain.setValueAtTime(0,Q),B.gain.linearRampToValueAtTime(.05,Q+.02),B.gain.exponentialRampToValueAtTime(1e-4,Q+4),re.connect(B),B.connect(r),B.connect(t),re.start(Q),oe.start(Q),re.stop(Q+4.2),oe.stop(Q+4.2)}return{ac:e,muted:!1,tyres:f,engG:g,bump(Q){D(e.currentTime+.01,Q)},update(Q,le,re,oe={}){let B=e.currentTime;if((oe.bell||0)>.01)for(L<B&&(L=B+.02);L<B+.12;)I(L,oe.bell),L+=.41;let _e=oe.rain||0;M.g.gain.setTargetAtTime(_e*.05,B,.6),c.g.gain.setTargetAtTime(_e*.05,B,.6);let $=(oe.wetRoad||0)*Math.min(1,Q)**1.5,N=.8+.2*Math.sin(B*2.3)*Math.sin(B*.9+1);if(f.g.gain.setTargetAtTime($*.045*N,B,.4),f.f.frequency.setTargetAtTime(900+1500*Math.min(Q,2),B,.4),_e>.05&&oe.roof)for(R<B&&(R=B+.02);R<B+.12;)C(R,_e),R+=.04+Math.random()*.12/_e;let P=oe.water||0,W=.6+.4*Math.sin(B*1.3)*Math.sin(B*.37);w.g.gain.setTargetAtTime(P*.035*W,B,.25),w.f.frequency.setTargetAtTime(600+400*W,B,.25);let G=.35+.65*Math.pow(.5+.5*Math.sin(B*.23)*Math.sin(B*.071+2),2),te=oe.rush||0;y.g.gain.setTargetAtTime(((le.mountain||0)+(le.snow||0)*.7)*.06*G+te*.055,B,.8),y.f.frequency.setTargetAtTime(260+420*G+te*500,B,.8);let de=oe.train||0;if(_.g.gain.setTargetAtTime(de*.16,B,.2),de>.04)for(A<B&&(A=B+.02);A<B+.12;)D(A,de),D(A+.15,de*.8),A+=1.2;for(;Le<B+1;)ne(Le),Le+=8;Ye<B+.5&&(Te(Ye),Ye+=1.5+Math.random()*4.5);let fe=oe.tunnel||0;{let K=oe.speed||0,Ue=oe.load||0,ye=850+2400*(1-Math.exp(-K/15))+Math.max(0,K-25)*60+Ue*1300,ze=ye/40;v.frequency.setTargetAtTime(ze,B,.25),b.frequency.setTargetAtTime(ze*2,B,.25),d.frequency.setTargetAtTime(200+ye*.08+Ue*260,B,.3),g.gain.setTargetAtTime((.008+.01*Math.min(1,K/15)+.024*Ue)*(1-.6*(oe.rush||0))*(oe.roof===!1?.5:1)*(1+.7*fe),B,.3)}p.g.gain.setTargetAtTime((.03+Q*.06)*(1+1.6*fe),B,.35),p.f.frequency.setTargetAtTime((250+Q*500)*(1+.5*fe),B,.35),S.g.gain.setTargetAtTime(fe*.07,B,.4),o.gain.setTargetAtTime(.55+.6*fe,B,.4);let he=.5+.5*Math.sin(B*.55)*Math.sin(B*.21+1);m.g.gain.setTargetAtTime(le.coast*(.012+he*.05),B,.3),m.f.frequency.setTargetAtTime(400+he*900,B,.3);let me=1-Math.min(1,_e*1.4),De=1-re,Je=oe.dusk||0,Ne=le.snow||0,Be=1-Ne,Ve={sparrow:re*me*.22*(.3+le.city*.5+le.sakura+le.country*.8+le.coast*.2+(le.mountain||0)*.5)*(1-Ne*.8),uguisu:re*me*le.sakura*.06,crow:me*(Je*.14+re*(le.city+le.country+(le.mountain||0)*1.5+Ne*2.5)*.012),gull:re*le.coast*me*.16,frog:De*(le.country*5+le.sakura*.6+le.coast*.3)*(1+_e*.6)*Be,cricket:De*me*(1.6-le.city*1.1+(le.mountain||0)*.8)*Be,bike:re*me*le.city*.014,bell:Ne*.022+(le.mountain||0)*.006},it={sparrow:k,uguisu:X,crow:j,gull:Me,frog:Se,cricket:we,bike:q,bell:Z};for(let K in Ve)B<ve[K]||(Ve[K]>1e-4&&it[K](B+.05,.6+Math.random()*.4),ve[K]=B+Math.max(.12,Pe(Ve[K]||1e-6)));let ut=.5+.5*Math.sin(B*7)*Math.sin(B*.4);x.g.gain.setTargetAtTime((le.country+le.sakura*.3)*re*.006*ut*(1-(le.snow||0)),B,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function tx(i){let t=new on(.075,.05),n=new yn({color:16777215,side:Mn}),s=new ss(t,n,420);s.frustumCulled=!1,s.count=0;let r=new ue("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(v=>new ue(v));for(let v=0;v<420;v++)s.setColorAt(v,r);let l=Array.from({length:420},()=>({p:new H(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),a=new et,u=new xn,h=new Jn,p=new H(1,1,1),m=new H,x=90,_=new Float32Array(x*3),M=Array.from({length:x},()=>({p:new H(1e9,0,0),ph:Math.random()*6.28})),c=new yt;c.setAttribute("position",new St(_,3));let f=new wo({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:rs,opacity:0}),d=new Ha(c,f);d.frustumCulled=!1;let g=(v,b,T,w,y)=>{let S=y?8+Math.random()*42:-4+Math.random()*50,E=(Math.random()-.5)*40;v.p.set(b.x+T.x*S+w.x*E,b.y-1+Math.random()*9,b.z+T.z*S+w.z*E)};return{group:[s,d],shift(v,b){for(let T of l)T.p.x-=v,T.p.z-=b;for(let T of M)T.p.x-=v,T.p.z-=b},update(v,b,T,w,y,S,E,R,C,L=0){let A=Math.floor(420*Math.min(1,S*1.1+L*.55));n.color.setScalar(1-.72*R);let I=!1;s.count=A;for(let F=0;F<A;F++){let z=l[F];m.subVectors(z.p,T);let U=m.x*w.x+m.z*w.z,V=m.x*y.x+m.z*y.z;if(z.p.x>1e8||U<-6||U>55||Math.abs(V)>24||z.p.y<E-.5){g(z,T,w,y,z.p.x<1e8);let k=Math.random()*(S+L)<L;(k!==z.leaf||k)&&(z.leaf=k,s.setColorAt(F,k?o[Math.floor(Math.random()*o.length)]:r),I=!0)}z.p.y-=z.v*v,z.p.x+=Math.sin(b*.7+z.ph)*.4*v+.25*v,z.p.z+=Math.cos(b*.5+z.ph)*.3*v,h.set(b*z.sp+z.ph,b*z.sp*.7,z.ph),u.setFromEuler(h),p.setScalar(z.leaf?1.9:1),a.compose(z.p,u,p),s.setMatrixAt(F,a)}s.instanceMatrix.needsUpdate=!0,I&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let D=R*C;if(f.opacity=D,d.visible=D>.01,d.visible){for(let F=0;F<x;F++){let z=M[F];m.subVectors(z.p,T);let U=m.x*w.x+m.z*w.z,V=m.x*y.x+m.z*y.z;if(z.p.x>1e8||U<-4||U>60||Math.abs(V)>30){let k=2+Math.random()*55,X=(Math.random()-.5)*55;z.p.set(T.x+w.x*k+y.x*X,E+.3+Math.random()*2.2,T.z+w.z*k+y.z*X)}z.p.x+=Math.sin(b*.6+z.ph*3)*.3*v,z.p.y+=Math.sin(b*.9+z.ph)*.2*v,z.p.z+=Math.cos(b*.5+z.ph*2)*.3*v,_[F*3]=z.p.x,_[F*3+1]=z.p.y,_[F*3+2]=z.p.z}c.attributes.position.needsUpdate=!0}}}}var ct=new URLSearchParams(location.search),la=ct.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();la&&document.body.classList.add("embed");ct.has("shot")&&document.body.classList.add("shot");Mg(ct.has("seed")?parseInt(ct.get("seed")):Math.random()*1e9|0);wg(ct.get("env")||"city");var Vn=i=>document.getElementById(i),Gr=i=>{let e=Vn("loading");e&&(e.textContent=i)};async function Cw(){await new Promise(ge=>setTimeout(ge,30));let i=Vn("c"),e=new fh({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ct.get("q")||(la||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?la?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=Wt,e.toneMapping=ll,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Cr,e.debug.checkShaderErrors=ct.has("debug");let r=ct.get("clouds")||"painted",o=n==="high"&&innerHeight*s>=900?"hi":"lo",l=Mv(n==="high"&&innerHeight*s>=560?"hi":"lo"),a=xv(o),u=gv(n==="high"&&innerHeight*s>=560?"hi":"lo"),h=n==="high"&&innerHeight*s>=560?"hi":"lo",p=vv(h),m=Promise.race([Promise.all([l,a,u,p]),new Promise(ge=>setTimeout(ge,4e3))]),x=r==="old"?Promise.resolve(null):m.then(()=>mv(o)),_=m.then(()=>_v(o)),M=new Er;M.fog=new Ba(13032946,.0019,700);let c=new Gn(52,innerWidth/innerHeight,.5,7e3),f=new Po(16777215,3);f.castShadow=!0;let d=n==="low"?1024:n==="mid"?1536:2048;f.shadow.mapSize.set(d,d),td(ct.has("pcf")?parseInt(ct.get("pcf")):1);let g=62,v=f.shadow.camera,b=new et,T=new et;Object.assign(v,{left:-g,right:g,top:g,bottom:-g,near:1,far:420});let w=new H(0,1,0),y=new H,S=new H,E=new H,R=new H(0,1,0),C=new H(0,150,60),L=new H,A=new H,I=null,D=0,F=0,z=0;f.shadow.updateMatrices=function(){v.position.copy(C),v.lookAt(L),v.updateMatrixWorld(),v.updateProjectionMatrix(),T.multiplyMatrices(v.matrixWorldInverse,b).multiply(v.matrixWorld),v.projectionMatrix.multiply(T),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),this._updateMatrix(v,this.matrix,this._frustum)};let U=!0;f.shadow.bias=-4e-4;let V=()=>{f.shadow.normalBias=ct.has("nb")?parseFloat(ct.get("nb")):1.5*2*g/f.shadow.mapSize.x};V();{let[ge,lt]=(ct.get("graze")||"0,0.12").split(",").map(Number);Ug(ge,lt)}M.add(f,f.target);let k=new Po(16777215,0);k.castShadow=n!=="low"&&!ct.has("nocarsh");{let ge=ct.has("carsm")?parseInt(ct.get("carsm")):n==="high"?512:384;k.shadow.mapSize.set(ge,ge)}if(Object.assign(k.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),k.shadow.bias=-2e-4,k.shadow.normalBias=.025,M.add(k,k.target),k.castShadow){let ge=f.shadow.getFrustum(),lt=k.shadow.getFrustum();for(let tt of[mt,za]){let Kt=tt.prototype.intersectsFrustum;tt.prototype.intersectsFrustum=function(ni){return ni===lt?this.userData.car===!0:(ni!==ge||this.userData.car!==!0)&&Kt.call(this,ni)}}}let X=new sl(10799359,13154464,1.6);M.add(X),Gr("painting the town\u2026"),await new Promise(ge=>setTimeout(ge,10));let j=n1();x1(j);let Me=await u,Se=await p,we=i1(j,h,Me,Se);we.houses&&k1(Se.types),Me&&Me.img.close(),Se&&Se.img.close();let Z=s1(e);A1(Z.cells),Re.uTuftV.value.set(...Z.tuftV);let q=Zg(j.textures(e),Z.tex,we.textures(e)),ve=zg();ve.update(e,0,0,0,0),Gr("painting the clouds\u2026"),await new Promise(ge=>setTimeout(ge,10)),R1(ct.has("leafd")?parseFloat(ct.get("leafd")):n==="high"?.72:.62);{let ge=await l;if(ge){Hi.cells=ge.cells.filter(Kt=>Kt.kind==="leaf"),ge.tex.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy());let lt=sd(ge.tex);q.gleaf=lt.mat,q.gleafDepth=lt.depth;let tt=ge.cells.filter(Kt=>Kt.kind==="blossom");tt.length&&(Hi.bcells=tt,q.gblossom=sd(ge.tex,{blossom:!0}).mat)}}F1(),Z1();let Pe=[2.1,1.75,3.2],ee=[1.42,1.47,1.74],xe=[.95,1.05,1.8],Fe=[.91,1.34,1.2],ke=[1.88,1.28,2],Le=[1.97,1.54,1.62],Ye=(ge,lt,tt)=>({c:ge,co:lt,sa:tt}),ne=Ye([...Pe],[...xe],[...ke]),Te=Ye([3.8,1.6,3.2],[3.4,2,3],[7,4.6,2.6]),Q=Ye([2.3,1.4,5.6],[.62,.85,4],[2.6,2.3,10]),le=Ye([2.6,1.8,6],[5.5,3,8],[4,2.6,6]),re=zs([[0,le],[.2,fn(le,Q,.3)],[.245,fn(Q,Te,.4)],[.3,ne],[.62,ne],[.7,Te],[.75,Q],[.765,fn(Q,le,.25)],[.8,fn(Q,le,.55)],[.86,le],[1,le]]);{let ge=await a;ge&&(ge.tex.anisotropy=Math.min(n==="high"?16:4,e.capabilities.getMaxAnisotropy()),yi.tex=ge.tex,yi.uFieldK.value.set(1/ge.tile[0],1/ge.tile[1]),yi.uFieldM.value.set(...ge.mean))}let oe=new xh;q.shore=Lv(n!=="high"),q.surf=Nv(),ta.n=n==="high"?8:4,ta.drops=n==="high"?4:2,q.tetra=qg(Wl,n!=="high"),q.bark=Xg(n!=="high");let B=Dv(),_e=Xv(n,ct.has("grass")?ct.get("grass").split(",").map(Number):null);for(let ge of _e.meshes)M.add(ge);let $=new Gh(M,oe,q,B),N=nv();M.add(N);let P=rv();M.add(P.group);let W=Iv(n!=="high");M.add(W.mesh);let G=$v();G.group.rotation.order="YXZ",M.add(G.group),G.group.traverse(ge=>{ge.userData.car=!0});let te=tx(q.glowTex);te.group.forEach(ge=>M.add(ge));let de=ct.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),fe=Qv(e,M,c,{msaa:de==="msaa"?n==="high"?4:2:0,fxaa:de==="fxaa",lite:n!=="high"});Re.uReflTex.value=fe.refl.rt.texture;let he=null,me=null,De=null,Je=new H,Ne=new H,Be=ct.get("refl")||"auto",Ve=ct.has("backlit")?parseFloat(ct.get("backlit")):1,it=[7.5,3,2.3],ut=[1.7,1.15,1],K=.7,Ue={b:[...it]},ye={c:[1,1,1]},ze={c:[.78,.82,1.15]},Ge={c:[.52,.56,1.3]},Ae={c:[1.25,1.9,2.2]},ot=zs([[0,Ae],[.2,fn(Ae,Ge,.3)],[.245,fn(Ge,ze,.4)],[.3,ye],[.62,ye],[.7,ze],[.75,Ge],[.765,fn(Ge,Ae,.25)],[.8,fn(Ge,Ae,.55)],[.86,Ae],[1,Ae]]),st=zs([[0,{b:[22,16,6]}],[.2,{b:[16,12,5.5]}],[.245,{b:[7,4.6,3]}],[.3,Ue],[.62,Ue],[.7,{b:[7.5,5,2.3]}],[.75,{b:[4.2,3,2.6]}],[.765,{b:[8,6.5,3.8]}],[.8,{b:[14,11,5]}],[.86,{b:[22,16,6]}],[1,{b:[22,16,6]}]]),Zt={d:[57,76,94],s:[82,96,114],m:[156,151,148],l:[207,197,189],fl:[246,251,254],fs:[160,205,240]},Ot={d:[77,65,62],s:[93,73,69],m:[160,111,81],l:[209,153,107],fl:[250,223,177],fs:[182,164,157]},Mi={d:[42,33,47],s:[56,41,56],m:[74,52,68],l:[124,80,90],fl:[247,180,162],fs:[177,122,140]},Ni={d:[30,38,48],s:[42,52,64],m:[56,68,82],l:[84,98,116],fl:[133,172,202],fs:[70,105,140]},$h=["d","s","m","l","fl","fs"],Jh=[Re.uTpD.value,Re.uTpS.value,Re.uTpM.value,Re.uTpL.value,Re.uTpFL.value,Re.uTpFS.value],Yl={s:[38,23,16],m:[54,34,25],l:[104,70,48],s2:[60,50,37],m2:[112,90,65],l2:[164,126,86]},ca={s:[41,24,18],m:[51,29,20],l:[100,58,34],s2:[81,43,24],m2:[106,61,36],l2:[150,95,50]},jh={s:[26,18,22],m:[34,22,26],l:[72,42,42],s2:[55,32,35],m2:[80,45,45],l2:[132,70,50]},Zl={s:[14,15,22],m:[20,22,30],l:[40,48,66],s2:[30,32,38],m2:[42,44,52],l2:[70,78,95]},Kl=["s","m","l","s2","m2","l2"],ws=[Re.uBkS.value,Re.uBkM.value,Re.uBkL.value,Re.uBkS2.value,Re.uBkM2.value,Re.uBkL2.value],qs=(ge,lt,tt,Kt)=>zs([[0,ge],[.2,fn(ge,lt,.3)],[.245,fn(lt,Kt,.4)],[.3,tt],[.62,tt],[.7,Kt],[.75,lt],[.765,fn(lt,ge,.25)],[.8,fn(lt,ge,.55)],[.86,ge],[1,ge]]),$l=qs(Ni,Mi,Zt,Ot),Jl=qs(Zl,jh,Yl,ca),jl=qs({n:[1,1,1],f:[1,1,1]},{n:[.4,.8,1.2],f:[1.1,1.5,1.4]},{n:[.46,.53,.68],f:[.95,1.05,1.3]},{n:[.55,.55,.7],f:[.85,.62,.75]}),vr={m:[205,105,150],w:[.3,0,0]},tf={m:[188,88,132],w:[.47,0,0]},nf=qs(vr,vr,tf,vr),Ts=new ue,qr=new ue().setRGB(1,232/255,242/255,Wt),O=ct.has("lightson")?parseFloat(ct.get("lightson")):-1,J=new H,pe=ct.has("haze")?parseFloat(ct.get("haze")):1,ce=$g();M.add(ce.group);let ae=Jg();M.add(ae.group);let We=Hv(ct),Ke=Wv(),Xe=Vv();M.add(Ke.mesh,Xe.mesh);let $e=Gv();M.add($e.mesh);let nt=qv();M.add(nt.mesh);let Mt=new ue,wt=new ue,Qe=new pt,It=Yv();M.add(It.mesh);let jt=We.W.rain,Xt=.4,Ht=5.5,ie={s:Math.max(100,parseFloat(ct.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:$t(parseFloat(ct.get("t"))||.4,0,.999),todPaused:ct.has("freeze"),dist:0,spray:ct.has("nospray")?0:1,grass:1,pclouds:1,band:1,waves:1,shore:1,surf:1,tetra:1,bark:1,trunks:1,todpaint:1,road:1,cam:{low:1,eye:2,top:3,film:4}[ct.get("cam")]??(la?4:0)},qe=!1;Gr("building the road\u2026"),await new Promise(ge=>setTimeout(ge,10));let Wn=la?620:$.ahead;$.ahead=260;let Nt=ct.has("detail")?parseFloat(ct.get("detail")):380,ui=ct.has("farleaf")?parseFloat(ct.get("farleaf")):540;for(;$.update(ie.s,1e9););$.flush(),$.ahead=Wn;{Gr("preparing the light\u2026"),await new Promise(sn=>setTimeout(sn,10));let ge=new dn,lt=new yt;lt.setAttribute("position",new je([0,0,0,.01,0,0,0,.01,0],3)),lt.setAttribute("normal",new je([0,1,0,0,1,0,0,1,0],3)),lt.setAttribute("uv",new je([0,0,1,0,0,1],2)),lt.setAttribute("color",new je([1,1,1,1,1,1,1,1,1],3));let tt=new yt;tt.setAttribute("position",lt.attributes.position);let Kt=new Set([q.shore,q.surf,B]),ni=[q.color,q.atlas,q.foliage,q.leaf,q.lamp,q.sig,q.sodium,q.decal,q.pool,q.shore,q.surf,B,q.tetra,q.bark,...q.gleaf?[q.gleaf]:[],...q.gblossom?[q.gblossom]:[]];for(let sn=0;sn<Pi.length;sn++)ni.push(Rl([Pi[sn]])),ni.push(Rl([Pi[sn],Pi[(sn+1)%Pi.length]]));for(let sn of ni){let Ki=new mt(Kt.has(sn)?tt:lt,sn);Ki.castShadow=Ki.receiveShadow=!Kt.has(sn),Ki.frustumCulled=!1,(sn===q.gleaf||sn===q.gblossom)&&(Ki.customDepthMaterial=q.gleafDepth),sn===q.atlas&&(Ki.customDepthMaterial=q.atlasDepth),ge.add(Ki)}ge.position.set(0,0,0),M.add(ge),f.target.position.set(0,0,0),f.position.set(0,150,60);let An=[Ke.mesh,Xe.mesh,$e.mesh,nt.mesh,ae.group,ce.group,W.mesh].filter(sn=>!sn.visible);for(let sn of An)sn.visible=!0;_e.warm(!0),e.setRenderTarget(fe.composer.readBuffer),e.compile(M,c),e.render(M,c),e.setRenderTarget(null);for(let sn of An)sn.visible=!1;_e.warm(!1),M.remove(ge),lt.dispose(),tt.dispose(),fe.bloom.enabled=fe.refl.enabled=!0,fe.composer.render(0),fe.bloom.enabled=fe.refl.enabled=!1}{Gr("painting the sky\u2026");let ge=await x;he=ge?yv(ge,fe):null,he&&M.add(he.mesh),me=!he||r==="both"?sv(iv(e)):null,me&&M.add(me.group),he&&(he.opening=["sakura","city"].includes(pn(ie.s))?"center":"flank");let lt=await _;De=lt?bv(lt,fe,M.fog.color):null,De&&M.add(De.mesh),e.setRenderTarget(fe.composer.readBuffer),e.compile(M,c),e.setRenderTarget(null),ge&&e.initTexture(ge.tex),lt&&e.initTexture(lt.tex)}let _t={k:Math.ceil((ie.s-Ur)/Fr),phase:"idle",raise:1,decided:!1,t2:0},bt={},Ft={},at={},mn=ct.has("yaw")||ct.get("cam")==="top",hi=new H,kt=new H,vn=new H,Zi=!1,Xr=new H,sf=new H,nx=Vn("spd"),ix=Vn("dist"),sx=Vn("clock"),Ql=Vn("zone"),ec=Vn("start"),qd=Vn("hint"),En=null,Xd=null,Yd=0,Zd=0;function rx(ge){!qe||ge===Xd||(Xd=ge,Ql.querySelector(".jp").textContent=bl[ge].jp,Ql.querySelector(".en").textContent=bl[ge].en,Ql.classList.add("on"),clearTimeout(Yd),Yd=setTimeout(()=>Ql.classList.remove("on"),5200))}function rf(){if(!qe){if(qe=!0,document.body.classList.remove("pre"),!ct.has("auto"))try{En=ex(),En&&En.ac.resume()}catch{En=null}ec.style.opacity=0,setTimeout(()=>ec.remove(),1500),la||(qd.style.opacity=.75,setTimeout(()=>qd.style.opacity=0,9e3))}}let fi={};addEventListener("keydown",ge=>{fi[ge.key]=!0,(ge.key==="m"||ge.key==="M")&&$d(),(ge.key==="t"||ge.key==="T")&&Jd(),(ge.key==="c"||ge.key==="C")&&Qd(),(ge.key==="r"||ge.key==="R")&&np(),!qe&&(ge.key===" "||ge.key==="Enter")&&rf()}),addEventListener("keyup",ge=>{fi[ge.key]=!1});let In=null;i.addEventListener("pointerdown",ge=>{In={id:ge.pointerId,x:ge.clientX,y:ge.clientY,sy:ge.clientY,sc:ie.mult}});let Kd=ge=>$t(ge.sc*Math.exp(-((ge.y-ge.sy)/innerHeight)*3.4),Xt,Ht);addEventListener("pointermove",ge=>{In&&ge.pointerId===In.id&&(In.x=ge.clientX,In.y=ge.clientY,ie.mult=Kd(In))}),addEventListener("pointerup",()=>{In=null}),addEventListener("pointercancel",()=>{In=null}),i.addEventListener("touchstart",ge=>{let lt=ge.changedTouches[0];In={id:"touch",x:lt.clientX,y:lt.clientY,sy:lt.clientY,sc:ie.mult},ge.preventDefault()},{passive:!1}),i.addEventListener("touchmove",ge=>{if(!In)return;let lt=ge.changedTouches[0];In.x=lt.clientX,In.y=lt.clientY,ie.mult=Kd(In),ge.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{In=null}),i.addEventListener("touchcancel",()=>{In=null});function $d(){En&&(En.toggle(),Vn("snd").style.opacity=En.muted?.4:1)}function Jd(){ie.todPaused=!ie.todPaused,Vn("tim").style.opacity=ie.todPaused?.4:1}let of=[0,1,2,4],jd={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function Qd(){ie.cam=of[(of.indexOf(ie.cam)+1)%of.length],Vn("cam").textContent=jd[ie.cam]||"\u25D0",ie.cam===4&&af()}let ep=["chase","side","road","crane","eye","side","road"],tn={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function af(){let ge;do ge=ep[Math.floor(Math.random()*ep.length)];while(ge===tn.last);{let lt=zi(ie.s+60);lt&&Math.abs(ie.s+60-lt.s)<ln+120&&(ge=Math.random()<.6?"chase":"eye")}if(Object.assign(tn,{type:ge,last:ge,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),ge==="road"){let lt=ie.s+40+Math.random()*18,tt=zn(lt,"rw"),Kt=Math.random()<.6?-1:1,ni=Kt*(tt+(Kt<0?.9:1.3)),An=oe.at(lt,{}),sn=An.y+_s(lt,ni,An.y,tt);tn.anchor={x:An.x+An.rx*ni,y:Math.max(sn,An.y)+1.05,z:An.z+An.rz*ni,s:lt}}Zi=!1}let tp={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function np(){Vn("wx").textContent=tp[We.cycle()]}Vn("wx").textContent=tp[We.W.mode],Vn("cam").textContent=jd[ie.cam]||"\u25D0",ie.cam===4&&af(),Vn("wx").onclick=ge=>{ge.stopPropagation(),np()},Vn("snd").onclick=ge=>{ge.stopPropagation(),$d()},Vn("tim").onclick=ge=>{ge.stopPropagation(),Jd()},Vn("cam").onclick=ge=>{ge.stopPropagation(),Qd()};let ip=0,ox=ge=>{let lt=performance.now();lt-ip<120||(ip=lt,ge.cancelable&&ge.type!=="click"&&ge.preventDefault(),rf())};for(let ge of["touchstart","pointerdown","mousedown","click"])ec.addEventListener(ge,ox,{passive:!1});let ax=()=>{En&&En.ac.state!=="running"&&En.ac.resume()};for(let ge of["touchend","click","keydown"])addEventListener(ge,ax,{passive:!0});document.addEventListener("visibilitychange",()=>{En&&(document.hidden?En.ac.suspend():En.ac.resume())});let fa=!1,sp="",da=52,pa=0;function rp(){let ge=innerWidth,lt=innerHeight,tt=ge/lt,Kt=ge+"x"+lt+"@"+s;Kt!==sp&&(sp=Kt,e.setPixelRatio(s),e.setSize(ge,lt,!1),fe.composer.setPixelRatio(s),fe.composer.setSize(ge,lt),c.aspect=tt,da=tt>=1?52:$t(2*Math.atan(Math.tan(34*Math.PI/180)/tt)*180/Math.PI,52,80),c.fov=da+pa,c.updateProjectionMatrix(),fe.grade.uniforms.uAspect.value=tt,fe.grade.uniforms.uTexel.value.set(1/fe.composer.readBuffer.width,1/fe.composer.readBuffer.height),Re.uReflRes.value.set(fe.composer.readBuffer.width,fe.composer.readBuffer.height),dv(e))}addEventListener("resize",()=>{fa=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{fa=!0}),rp();let tc=0;function op(ge=!0){if(s>1.05)s=Math.max(1,s-.25),fa=!0;else if(U)U=!1,fe.bloom.enabled=!1;else if(f.shadow.mapSize.x>1024)f.shadow.mapSize.set(1024,1024),V(),f.shadow.map&&(f.shadow.map.dispose(),f.shadow.map=null);else if($.ahead>430)$.ahead=430;else return;if(tc++,ge)try{localStorage.setItem("icd-q",String(tc))}catch{}}try{let ge=parseInt(localStorage.getItem("icd-q")||"0");if(!ct.has("q"))for(let lt=0;lt<Math.min(ge,6);lt++)op(!1);tc=Math.max(tc,ge||0)}catch{}let ap=performance.now(),di=0,lp=0,ma=0,ga=()=>1-se.night,lf=0,nn=0,cp=0,Tt=ct.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;Tt&&(Tt.gl=e.getContext(),Tt.tq=Tt.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let Si={p:-1,a:new H,b:new H,next:5},Ut={lat:0,lon:0,road:0,jolt:0,kick:0,u:ie.u,vu:0,v:0,s:ie.s,yaw:0,brake:0,rk:NaN,rb:null},lx=new ue(3.6,2.8,1.8),cx=[-2.5335,-1.4665,1.4665,2.5335],up=[1.12,-1.12],ux=[-24.5,24.5];function hp(ge){requestAnimationFrame(hp);let lt=performance.now();fa&&(fa=!1,rp());let tt=Math.min(.05,Math.max(0,(ge-ap)/1e3));ap=ge,di+=tt,ie.steer=0,(fi.ArrowLeft||fi.a||fi.A)&&(ie.steer=-1),(fi.ArrowRight||fi.d||fi.D)&&(ie.steer=1),(fi.ArrowUp||fi.w||fi.W)&&(ie.mult=$t(ie.mult*Math.exp(tt*.9),Xt,Ht)),(fi.ArrowDown||fi.s||fi.S)&&(ie.mult=$t(ie.mult*Math.exp(-tt*.9),Xt,Ht)),In&&Math.abs(In.y-In.sy)<30&&(ie.steer=In.x<innerWidth/2?-1:1),ie.steer&&(ie.lastInput=ge,ie.uHome=ie.u);let Kt=Ho(_t.k);ie.s-Kt>24&&(_t.k++,Kt=Ho(_t.k),Object.assign(_t,{phase:"idle",raise:1,decided:!1}));let ni=wl(Kt),An=Kt-ie.s;ni&&!_t.decided&&An<150&&(_t.decided=!0,An>75&&qe&&ie.speed*ie.speed/2.5<An-14&&(ct.has("xing")||_n(_t.k,99)<.8)&&(_t.phase="warn",ae.start(Kt,_n(_t.k,7)<.5?1:-1,16))),_t.phase==="warn"?(_t.raise=Math.max(0,_t.raise-tt/6),ae.st.cleared&&(_t.phase="clear",_t.t2=0)):_t.phase==="clear"?(_t.raise=Math.max(0,_t.raise-tt/6),(_t.t2+=tt)>2.2&&(_t.phase="raise")):_t.phase==="raise"&&(_t.raise=Math.min(1,_t.raise+tt/5),_t.raise>=1&&(_t.phase="idle"));let sn=_t.phase==="warn"||_t.phase==="clear"||_t.phase==="raise"&&_t.raise<.25,Ki=zn(ie.s,"speed")*ie.mult*(qe?1:.55);if(_t.phase!=="idle"&&_t.raise<.8&&An>0){let Ee=An-11.2,Oe=Ee>0?Math.sqrt(2*1.25*Ee):0;Ki=Math.min(Ki,Oe),ie.speed=Math.min(ie.speed,Oe)}ct.has("park")&&(Ki=0,ie.speed=0),ie.speed+=(Ki-ie.speed)*Math.min(1,tt*.5),ie.s+=ie.speed*tt,ie.dist+=ie.speed*tt;let nc=zn(ie.s,"rw");ie.steer?ie.u=$t(ie.u+ie.steer*tt*2.4,-nc+.85,nc-.85):ge-ie.lastInput>3e3&&(ie.u+=($t(ie.uHome,-nc+.85,nc-.85)+Math.sin(di/11)*.1-ie.u)*Math.min(1,tt*.9)),!ie.todPaused&&qe&&(ie.tod=(ie.tod+tt/480*(se.night>.5?1.7:1))%1),Q1(ie.tod),We.update(tt);let Ln=We.W.ov,Es=We.W.rain;tv(Ln,Es),jt=$t(jt+(Es>.25?tt/18:-tt/120),0,1);let fp=performance.now();$.update(ie.s,qe?3.5:14);let dp=performance.now();if(oe.at(ie.s,bt),Math.abs(bt.x-$.origin.x)>900||Math.abs(bt.z-$.origin.z)>900){let Ee=Math.round(bt.x)-$.origin.x,Oe=Math.round(bt.z)-$.origin.z;$.setOrigin(Math.round(bt.x),Math.round(bt.z)),hi.x-=Ee,hi.z-=Oe,kt.x-=Ee,kt.z-=Oe,te.shift&&te.shift(Ee,Oe),It.shift(Ee,Oe),$e.shift(Ee,Oe)}let $i=$.origin.x,Ji=$.origin.z,hx=(oe.at(ie.s+1.5,at).y-oe.at(ie.s-1.5,Ft).y)/3,fx=(at.h-Ft.h)/3;if(G.group.position.set(bt.x+bt.rx*ie.u-$i,bt.y+.01,bt.z+bt.rz*ie.u-Ji),tt>0){let Ee=Ut.vu+((ie.u-Ut.u)/tt-Ut.vu)*Math.min(1,tt*6),Oe=(Ee-Ut.vu)/tt;Ut.u=ie.u,Ut.vu=Ee,Ut.lat=Oe-ie.speed*ie.speed*fx,Ut.lon+=((ie.speed-Ut.v)/tt-Ut.lon)*Math.min(1,tt*8),Ut.v=ie.speed;let He=_t.phase!=="idle"&&An>0&&An<20&&ie.speed<.5;if(Ut.brake=Ut.lon<-.6||He?1:Ut.lon>-.3?0:Ut.brake,Ut.yaw=-$t(Math.atan(Ee/Math.max(ie.speed,6))*.8,-.1,.1),Ut.road=.004*Math.sin(ie.s*.48)+.003*Math.sin(ie.s*.86+1.3),Ut.jolt=Ut.kick=0,ni)for(let ht=0;ht<4;ht++)for(let Bt=0;Bt<2;Bt++){let Vt=Kt+cx[ht]-up[Bt];if(Ut.s<Vt&&ie.s>=Vt){let Rt=.05+Math.min(ie.speed,25)*.004;Ut.jolt+=Rt,Ut.kick+=Bt?Rt*.9:-Rt*.9,En&&En.bump(.25+Math.min(ie.speed,25)/50)}}{let ht=Math.round((ie.s-Vo)/Br);ht!==Ut.rk&&(Ut.rk=ht,Ut.rb=ki(ie.s));let Bt=Ut.rb;if(Bt)for(let Vt=0;Vt<2;Vt++)for(let Rt=0;Rt<2;Rt++){let pi=Bt.s+ux[Vt]-up[Rt];if(Ut.s<pi&&ie.s>=pi){let Bn=.035+Math.min(ie.speed,25)*.003;Ut.jolt+=Bn,Ut.kick+=Rt?Bn*.9:-Bn*.9,En&&En.bump(.2+Math.min(ie.speed,25)/60)}}}Ut.s=ie.s}G.group.rotation.set(-Math.atan(hx),bt.h+Ut.yaw,0);let xr=zi(ie.s);xr&&Math.abs(ie.s-xr.s)<700?(oe.at(xr.s-bn,at),Re.uTunA.value.set(at.x-$i,at.y,at.z-Ji),oe.at(xr.s+bn,at),Re.uTunB.value.set(at.x-$i,at.y,at.z-Ji),Re.uTunR.value=zn(xr.s,"rw")+1.7):(Re.uTunA.value.set(0,-1e4,0),Re.uTunB.value.set(0,-1e4,0));let cf=xr&&Math.abs(ie.s+1-xr.s)<bn-1.5?1:0;nn+=(cf-nn)*Math.min(1,tt*(cf?1.6:.7)),Re.uCarPos.value.set(G.group.position.x+bt.fx*1.7,G.group.position.y+.8,G.group.position.z+bt.fz*1.7),Re.uCarFwd.value.set(bt.fx,-.05,bt.fz).normalize(),Re.uHead.value=cf,G.update(tt,ie.speed,Math.max(se.night,nn),Es,Ut,cp),ce.update(ni&&An>-24&&An<700?Th(oe,Kt):null,$.origin,_t.raise,sn,di),ae.update(tt,oe,$.origin,At(.15,.8,se.night),zn(Kt,"rw")+3.2);let uf=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ct.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(ct.has("rig")){let[Ee,Oe,He,ht]=ct.get("rig").split(",").map(Number);Object.assign(uf[0],{back:Ee,up:Oe,ahead:He,lookY:ht})}let yr=new H,va=6,pp=ie.cam===2;if(ie.cam===4){tn.t+=tt;{let He=zi(ie.s+30);He&&Math.abs(ie.s+30-He.s)<ln+70&&tn.type!=="chase"&&tn.type!=="eye"&&(tn.type="chase",tn.t=0,tn.dur=20,Zi=!1)}(tn.t>tn.dur+(tn.type==="road"?8:0)||tn.type==="road"&&tn.anchor&&ie.s>tn.anchor.s+24)&&af();let Ee=G.group.position,Oe=tn.type;if(Oe==="chase"||Oe==="eye"){let He=uf[Oe==="eye"?2:0];pp=Oe==="eye",oe.at(ie.s-He.back,Ft),oe.at(ie.s+He.ahead,at),vn.set(Ft.x+Ft.rx*ie.u*He.cu-$i,Ft.y+He.up,Ft.z+Ft.rz*ie.u*He.cu-Ji),yr.set(at.x+at.rx*ie.u*He.lu-$i,at.y+He.lookY,at.z+at.rz*ie.u*He.lu-Ji)}else if(Oe==="side"){oe.at(ie.s+1.5,Ft);let He=Dt(ie.s),ht=He.city+He.sakura>.5,Bt=zn(ie.s,"rw"),Vt=tn.sideSign>0?Bt+(ht?1.45:3.4):-(Bt+1.5),Rt=Ft.y+_s(ie.s+1.5,Vt,Ft.y,Bt);vn.set(Ft.x+Ft.rx*Vt-$i,Math.max(Rt+1.55,Ft.y+1.25),Ft.z+Ft.rz*Vt-Ji),yr.set(Ee.x+bt.fx*2.5,Ee.y+.9,Ee.z+bt.fz*2.5),va=4}else if(Oe==="road"&&tn.anchor)vn.set(tn.anchor.x-$i,tn.anchor.y,tn.anchor.z-Ji),yr.set(Ee.x,Ee.y+.85,Ee.z),va=30;else{oe.at(ie.s-20,Ft),oe.at(ie.s+34,at);let He=14+Math.min(tn.t,20)*.35;vn.set(Ft.x+Ft.rx*ie.u*.4-$i,Ft.y+He,Ft.z+Ft.rz*ie.u*.4-Ji),yr.set(at.x-$i,at.y+1,at.z-Ji),va=3}}else{let Ee=uf[ie.cam];oe.at(ie.s-Ee.back,Ft),oe.at(ie.s+Ee.ahead,at);let Oe=ie.u*Ee.cu,He=Oe+(Ee.side||0);vn.set(Ft.x+Ft.rx*He-$i,Ft.y+Ee.up,Ft.z+Ft.rz*He-Ji),yr.set(at.x+at.rx*ie.u*Ee.lu-$i,at.y+Ee.lookY,at.z+at.rz*ie.u*Ee.lu-Ji)}G.group.visible=!pp,ie.cam===3?c.up.set(bt.fx,0,bt.fz):c.up.set(0,1,0),Zi||(hi.copy(vn),kt.copy(yr),Zi=!0);let mp=1+Math.max(0,ie.speed-12)/12;hi.lerp(vn,1-Math.exp(-tt*va*mp)),kt.lerp(yr,1-Math.exp(-tt*Math.min(va,8)*mp));{let Ee=ie.cam===3?0:Math.min($t((ie.speed-16)*.22,0,11),Math.max(0,84-da));pa+=(Ee-pa)*Math.min(1,tt*1.5),Math.abs(c.fov-(da+pa))>.02&&(c.fov=da+pa,c.updateProjectionMatrix())}c.position.copy(hi),c.lookAt(kt),ct.has("yaw")&&c.rotateY(parseFloat(ct.get("yaw"))*Math.PI/180),ct.has("pitch")&&c.rotateX(parseFloat(ct.get("pitch"))*Math.PI/180),Xr.set(bt.fx,0,bt.fz),sf.set(bt.rx,0,bt.rz);{let Ee=G.group.position,Oe=c.position.x-Ee.x,He=c.position.z-Ee.z,ht=ie.cam===4&&tn.type!=="chase"&&tn.type!=="eye",Bt=ie.s+Oe*bt.fx+He*bt.fz-(ht?10:0),Vt=ht||mn?40:Math.tan(c.fov*Math.PI/360)*c.aspect*1.08;_e.update(oe,Bt,ie.u+Oe*bt.rx+He*bt.rz,$.origin.x,$.origin.z,zn(ie.s,"rw"),Vt),ie.grass||_e.hide()}let Qt=Dt(ie.s),hf=1+.25*se.bright*(1-nn);f.color.copy(se.sunCol),f.intensity=se.sunI/hf;{let Ee=se.lightDir;if(w.angleTo(Ee)>.1){let Bn=0;if(qe&&!ie.todPaused)for(let ii=1;ii<=60&&!(Td(ie.tod+ii*.001,A).angleTo(Ee)>.09);ii++)Bn=ii;Td(ie.tod+Bn*.001,w),D=F=0}y.crossVectors(R,w).normalize(),S.crossVectors(w,y),E.set(G.group.position.x+bt.fx*26,G.group.position.y,G.group.position.z+bt.fz*26),f.target.position.copy(E),f.position.copy(E).addScaledVector(Ee,200);let Oe=2*g/f.shadow.mapSize.x,He=w.x/w.y-Ee.x/Ee.y,ht=w.z/w.y-Ee.z/Ee.y;Oe!==z&&(z=Oe,D=F=0);{let Bn=Math.round(G.group.position.y);if(I===null)I=Bn;else if(Math.abs(G.group.position.y-I)>3){let ii=Bn-I;D-=ii*(He*y.x+ht*y.z),F-=ii*(He*S.x+ht*S.z),I=Bn}}let Bt=$.origin.x,Vt=$.origin.z,Rt=E.dot(y)+Bt*y.x+Vt*y.z-D,pi=E.dot(S)+Bt*S.x+Vt*S.z-F;E.addScaledVector(y,Math.round(Rt/Oe)*Oe-Rt).addScaledVector(S,Math.round(pi/Oe)*Oe-pi),L.copy(E),C.copy(E).addScaledVector(w,200),b.set(1,He,0,-I*He,0,1,0,0,0,ht,1,-I*ht,0,0,0,1)}k.target.position.set(G.group.position.x,G.group.position.y+.9,G.group.position.z),k.position.copy(k.target.position).addScaledVector(se.lightDir,12),X.color.copy(se.hemiSky),X.groundColor.copy(se.hemiGround),X.intensity=se.hemiI/hf;{let Ee=(1-se.night)*(1-Ln);if(Ee>.001){c.getWorldDirection(J);let Oe=J.x,He=J.z,ht=Math.hypot(Oe,He)||1,Bt=se.sunDir,Vt=0;for(let pi=-2;pi<=2;pi++){let Bn=pi*.3,ii=Math.cos(Bn),_r=Math.sin(Bn),Zr=(Oe*ii-He*_r)/ht,Kr=(Oe*_r+He*ii)/ht,xa=Math.max(0,Zr*Bt.x+Kr*Bt.z),$r=xa*xa;Vt+=$r*$r*$r}let Rt=Vt/5*(.1+.35*se.warm)*1.4*Ee*pe;se.fog.r+=se.sunCol.r*Rt,se.fog.g+=se.sunCol.g*Rt,se.fog.b+=se.sunCol.b*Rt}}M.fog.color.copy(se.fog);let gp=(Qt.city*.0022+Qt.sakura*.0019+Qt.coast*.0011+Qt.country*.0014+Qt.mountain*.0017+Qt.snow*.0021)*(1+se.night*.25);M.fog.near=gp*(1+.55*Ln+.45*Es),M.fog.far=$.ahead*.92,Re.uSkyHor.value.copy(se.horizon),Re.uSkyZen.value.copy(se.zenith),Re.uTime.value=di,Re.uWet.value=jt*(1-Qt.snow),Re.uSakWet.value=K,cp=Math.max(Re.uWet.value,Re.uSakWet.value*Qt.sakura)*(1-nn);{let Ee=(Re.uWet.value>.04||Re.uSakWet.value*Math.max(Qt.sakura,yh(ie.s+120,"sakura"))>.04)&&n!=="low"&&nn<.5&&Be!=="0";if(fe.refl.enabled=Ee&&Be!=="taps",Re.uReflOn.value=Ee&&Be!=="copy"?1:0,Ee){c.getWorldDirection(Ne),Ne.y=0,Ne.normalize(),Je.copy(c.position).addScaledVector(Ne,1e4).project(c),Re.uHorizon.value=Je.y*.5+.5;let Oe=Math.max(.5,c.position.y-G.group.position.y);Re.uReflK.value=$t(1-2*Oe/(5+Oe),.05,1)}}Re.uOrigin.value.set($.origin.x,$.origin.z),Re.uWind.value=1+.8*Es,Re.uCloudSh.value=(1-Ln)*At(.04,.3,se.sunEl)*(1-se.night),Re.uCloudSh.value>.001&&ve.update(e,c.position.x,c.position.z,$.origin.x,$.origin.z);let wi=N.material.uniforms;if(wi.uBright.value=se.bright,wi.uNight.value=se.night,wi.uWarm.value=se.warm,wi.uTime.value=di,wi.uCirrusCol.value.copy(se.cLit).lerp(se.horizon,.25),wi.uCirrus.value=.6*(1-Ln)*(1-.65*At(.4,.9,se.night)),wi.uOvercast.value=Ln,wi.uMilky.value=At(.55,.95,se.night)*(1-Ln),se.night>.65&&Ln<.3&&Si.p<0&&(Si.next-=tt)<0){let Ee=Math.atan2(bt.fx,bt.fz)+(Math.random()-.5)*1.5,Oe=.45+Math.random()*.6,He=.22+Math.random()*.2,ht=(Math.random()-.5)*.6,Bt=(Vt,Rt)=>new H(Math.cos(Vt)*Math.sin(Rt),Math.sin(Vt),Math.cos(Vt)*Math.cos(Rt));Si.a.copy(Bt(Oe,Ee)),Si.b.copy(Bt(Oe-He,Ee+ht)),Si.p=0,Si.next=ct.has("meteors")?1:6+Math.random()*20}Si.p>=0&&(Si.p+=tt/.85,Si.p>1.3&&(Si.p=-1)),wi.uMetP.value=Si.p,wi.uMetA.value.copy(Si.a),wi.uMetB.value.copy(Si.b),wi.uDeckLit.value.copy(se.horizon).lerp(se.cLit,.35),wi.uDeckDark.value.copy(se.zenith).lerp(se.horizon,.25).multiplyScalar(.82),N.position.copy(c.position);{let Ee=!!he&&(ie.pclouds!==0||!me);he&&(he.mesh.visible=Ee,Ee&&he.update(c,tt)),me&&(me.group.visible=!Ee,Ee||me.update(c.position,tt))}let dx=De&&ie.band!==0?De.update(c,cr(ie.s+200),Math.max(1,c.position.y-bt.y+.45),M.fog.near,M.fog.far):0;De&&ie.band===0&&(De.mesh.visible=!1),P.update(c.position,Math.max(Qt.snow,Dt(ie.s+600).snow*.7),1-dx);let ic=0;for(let Ee of[-150,0,250,500,800])ic=Math.max(ic,Dt(ie.s+Ee).coast);W.mesh.visible=ic>.001,Ol.on=ie.todpaint,W.u.uWaves.value=ie.waves,W.u.uShoreW.value=ie.shore,q.surf.visible=ie.surf>0,q.tetra.visible=ie.tetra>0,q.bark.visible=ie.trunks>0,W.update(c.position,di,gp*.8,At(0,.35,ic),fe.grade.uniforms,oe,ie.s),B.uniforms.uTime.value=di,B.uniforms.uFogD.value=M.fog.near,B.uniforms.uNight.value=se.night,B.uniforms.uSpecK.value=1-se.overcast*.85,Re.uSunDir.value.copy(se.lightDir),Re.uSunCol.value.copy(se.sunCol);let Fi=At(.15,.8,se.night);q.atlas.emissiveIntensity=.1+Fi*1.05,Re.uBacklit.value=Ve*1.6*(1-Ln)*(1-se.night)*At(0,.08,se.sunEl)*(1-At(.25,.55,se.sunEl))*(1-nn),Re.uGhShade.value.set(rt(.8,.3,se.bright),rt(.8,.85,se.bright),rt(.8,1.7,se.bright));{let Ee=ot.at(se.t).rgb("c"),Oe=1-Ln;Re.uGhTint.value.set(rt(1,Ee[0],Oe),rt(1,Ee[1],Oe),rt(1,Ee[2],Oe))}{let Ee=fe.grade.uniforms;if(Re.uTpK.value=gr(),Re.uTpK.value>0){let Oe=$l.at(se.t);for(let He=0;He<6;He++)Oe.ug(Ee,$h[He],Jh[He])}if(Re.uBkK.value=Re.uTpK.value*ie.bark,Re.uBkK.value>0){let Oe=Jl.at(se.t);for(let He=0;He<6;He++)Oe.ug(Ee,Kl[He],ws[He])}}{let Ee=jl.at(se.t),Oe=Ee.rgb("n"),He=Ee.rgb("f"),ht=gr()*ie.road;Re.uRoadN.value.set(rt(1,Oe[0],ht),rt(1,Oe[1],ht),rt(1,Oe[2],ht)),Re.uRoadF.value.set(rt(1,He[0],ht),rt(1,He[1],ht),rt(1,He[2],ht))}if(yi.tex){let Ee=1-se.warm;for(let Rt=0;Rt<3;Rt++)ne.c[Rt]=rt(ee[Rt],Pe[Rt],Ee),ne.co[Rt]=rt(Fe[Rt],xe[Rt],Ee),ne.sa[Rt]=rt(Le[Rt],ke[Rt],Ee);let Oe=1-Ln,He=re.at(se.t),ht=He.rgb("c"),Bt=He.rgb("co"),Vt=He.rgb("sa");yi.uFieldC.value.set(rt(ee[0],ht[0],Oe),rt(ee[1],ht[1],Oe),rt(ee[2],ht[2],Oe)),yi.uFieldCo.value.set(rt(Fe[0],Bt[0],Oe),rt(Fe[1],Bt[1],Oe),rt(Fe[2],Bt[2],Oe)),yi.uFieldSa.value.set(rt(Le[0],Vt[0],Oe),rt(Le[1],Vt[1],Oe),rt(Le[2],Vt[2],Oe))}{for(let He=0;He<3;He++)Ue.b[He]=rt(ut[He],it[He],1-se.warm);let Ee=st.at(se.t).rgb("b"),Oe=1-Ln;Re.uBlShade.value.set(rt(ut[0],Ee[0],Oe),rt(ut[1],Ee[1],Oe),rt(ut[2],Ee[2],Oe))}{let Ee=nf.at(se.t),Oe=Ee.rgb("m"),He=vr.m,ht=gr();Ts.setRGB(rt(He[0],Oe[0],ht)/255,rt(He[1],Oe[1],ht)/255,rt(He[2],Oe[2],ht)/255,Wt);let Bt=rt(vr.w[0],Ee.rgb("w")[0],ht);Re.uBlMid.value.set(Ts.r,Ts.g,Ts.b,1/(1-Bt)),Re.uBlTip.value.set(qr.r-Ts.r,qr.g-Ts.g,qr.b-Ts.b,-Bt/(1-Bt))}Re.uLightsOn.value=O>=0?O:Math.max(At(.02,.75,se.night),.3*Ln),q.lamp.color.setRGB(.9,.86,.74).lerp(lx,Fi),q.pool.opacity=Fi*.42*(1+.8*jt);{let Ee=G.group.position,Oe=G.lamps,He=Math.max(Fi,nn),ht=0,Bt=0,Vt=0,Rt=-1e3,pi=0,Bn=0,ii=-1e3,_r=0,Zr=900,Kr=900;if(He>.01){let yp=Math.floor(ie.s/qt);for(let ff=yp-1;ff<=yp+1;ff++){let rc=$.chunks.get(ff);if(!rc||!rc.lamps)continue;let ya=rc.lamps,_p=rc.group.position;for(let Jr=0;Jr<ya.length;Jr+=4){let df=ya[Jr]+_p.x,pf=ya[Jr+1],mf=ya[Jr+2]+_p.z,gf=(df-Ee.x)**2+(pf-Ee.y)**2+(mf-Ee.z)**2,oc=ya[Jr+3]/(1+.045*gf);oc>ht?(Bt=ht,Kr=Zr,Bn=Vt,ii=Rt,_r=pi,ht=oc,Zr=gf,Vt=df,Rt=pf,pi=mf):oc>Bt&&(Bt=oc,Kr=gf,Bn=df,ii=pf,_r=mf)}}c.updateMatrixWorld()}let xa=He*ht*(1+.045*Zr)*(1-At(18,30,Math.sqrt(Zr))),$r=He*Bt*(1+.045*Kr)*(1-At(18,30,Math.sqrt(Kr)));Oe[0].set(Vt,Rt,pi,1).applyMatrix4(c.matrixWorldInverse).w=xa,Oe[1].set(Bn,ii,_r,1).applyMatrix4(c.matrixWorldInverse).w=$r,G.lampCol.setRGB(1,.8-.32*nn,.52-.38*nn),Xi.uLampW.value[0].set(Vt,Rt,pi,xa),Xi.uLampW.value[1].set(Bn,ii,_r,$r),Xi.uLampCol.value.copy(G.lampCol),G.head.getWorldPosition(Xi.uHeadPos.value),G.head.target.getWorldPosition(J),Xi.uHeadDir.value.copy(J).sub(Xi.uHeadPos.value).normalize(),Xi.uHeadI.value=G.head.intensity/60}q.pool.visible=q.pool.opacity>.003,$.lod(ie.s,Nt,Fi>.15,ui),Re.uNight.value=Fi,fe.bloom.strength=rt(.32,.55,Fi),fe.bloom.threshold=rt(1.35,.95,Fi),fe.bloom.radius=rt(.55,.35,Fi);{let Ee=Math.max(Fi,nn,At(.25,.6,se.warm)*(1-Ln));fe.bloom.enabled=U&&Ee>.02,fe.bloom.strength*=Math.min(1,Ee*4)}e.toneMappingExposure=rt(1,1.15,Fi)*(1+.35*nn)*hf,vn.copy(c.position).addScaledVector(se.sunDir,1e3).project(c);let Xs=fe.grade.uniforms,px=vn.z<1?1:0,mx=Math.max(Math.abs(vn.x),Math.abs(vn.y));Xs.uSun.value.set(vn.x*.5+.5,vn.y*.5+.5),Xs.uSunVis.value=px*(1-At(1,1.9,mx))*At(-.02,.15,se.sunEl)*(1-se.night)*(1-Ln)*(1-nn),Xs.uSat.value=1.22-.24*Ln,Xs.uVig.value=.55-.43*se.bright,Xs.uLo.value.set(-.014+.026*se.bright,0,.03),Xs.uDay.value=ga(),Xs.uWarm.value=se.warm,Xs.uTime.value=di,Ke.update(c.position,di,Es*(1-nn)*(1-Qt.snow),ga());{let Ee=zi(ie.s+190),Oe=(Qt.city+Qt.country+Qt.coast)*(1-Ln)*(1-jt)*At(.6,.9,se.sunEl)*(ie.mirage??1)*(Ee&&Math.abs(ie.s+190-Ee.s)<330?0:1);nt.update(oe,ie.s,$.origin.x,$.origin.z,zn(ie.s+150,"rw"),Oe,di,se.horizon)}{let Ee=$t(Qt.snow+Qt.mountain*.6*Math.max(se.night,1-At(.27,.36,ie.tod)),0,1)*(1-nn);Mt.copy(se.fog).multiplyScalar(.92),wt.copy(se.sunCol).multiplyScalar(Math.min(1,se.sunI/3)*(1-Ln)*.6);let Oe=Math.cos(G.group.rotation.y),He=Math.sin(G.group.rotation.y),ht=G.group.position;Qe.set(ht.x-1.75*He,ht.y+.95,ht.z-1.75*Oe,Math.max(se.night,nn)*(.5+1.2*Ut.brake)),$e.update(tt,G.group,ie.speed,Re.uWet.value*(1-nn),Qt.snow*(1-nn),Ee,Mt,wt,Qe,c.position,ie.spray)}Xe.update(c.position,di,Qt.snow*(.3+.7*Ln)*(1-nn),ga()),It.setFog(M.fog.near),It.update(tt,di,c.position,Xr,sf,Qt,ga(),Es,G.group.position);let gx=performance.now();te.update(tt,di,c.position,Xr,sf,Qt.sakura*(1-nn),bt.y,Fi,(Qt.country+Qt.sakura*.4)*(1-Es)*(1-nn),Qt.mountain*(1-nn));let vx=performance.now();if(En){oe.at(Kt,at);let Ee=Math.hypot(at.x-$.origin.x-c.position.x,at.z-$.origin.z-c.position.z),Oe=ae.st.active?ae.group.position.distanceTo(c.position):1e9,He=ie.speed/15;En.update(He<1.5?He:1.5+(He-1.5)*.4,Qt,ga(),{rush:$t((ie.speed-25)/40,0,1),bell:sn?Math.pow($t(1-Ee/260,0,1),1.5):0,train:Math.pow($t(1-Oe/230,0,1),2),rain:Es*(1-nn)*(1-Qt.snow),wetRoad:Re.uWet.value*(1-nn),speed:ie.speed,load:$t(Ut.lon/3,0,1),roof:ie.cam!==2,tunnel:nn,water:(()=>{let ht=ki(ie.s);return Math.max(ht?1-At(12,150,Math.abs(ie.s-ht.s)):0,Qt.mountain*.45)})(),dusk:se.warm*(ie.tod>.5?1:.3)})}rx(pn(ie.s+40)),Tt&&(e.info.autoReset=!1,e.info.reset());let sc=null;Tt&&Tt.tq&&(sc=Tt.gl.createQuery(),Tt.gl.beginQuery(Tt.tq.TIME_ELAPSED_EXT,sc));let vp=performance.now();fe.composer.render(tt);let xp=performance.now();if(sc){let Ee=Tt.gl;for(Ee.endQuery(Tt.tq.TIME_ELAPSED_EXT),Tt.pend.push(sc);Tt.pend.length&&Ee.getQueryParameter(Tt.pend[0],Ee.QUERY_RESULT_AVAILABLE);){let Oe=Tt.pend.shift(),He=Ee.getQueryParameter(Oe,Ee.QUERY_RESULT);Ee.deleteQuery(Oe),Ee.getParameter(Tt.tq.GPU_DISJOINT_EXT)||(Tt.gpu=He/1e6,Tt.gpuN++,Tt.gpuSum+=Tt.gpu,Tt.gpu>Tt.gpuMax&&(Tt.gpuMax=Tt.gpu))}}let Yr=window.__pb||(window.__pb={world:0,parts:0,render:0});if(Yr.world=Yr.world*.95+(dp-fp)*.05,Yr.parts=Yr.parts*.95+(vx-gx)*.05,Yr.render=Yr.render*.95+(xp-vp)*.05,lf=lf*.95+(performance.now()-lt)*.05,window.__ft=lf,Tt){let Ee=e.info,Oe=performance.now()-lt,He={t:+di.toFixed(2),s:Math.round(ie.s),total:+Oe.toFixed(1),world:+(dp-fp).toFixed(1),render:+(xp-vp).toFixed(1),gpu:+(Tt.gpu||0).toFixed(1),progs:Ee.programs.length-Tt.progs,geos:Ee.memory.geometries-Tt.geos,tex:Ee.memory.textures-Tt.tex,calls:Ee.render.calls,tris:Ee.render.triangles};He.progs>0&&qe&&(He.newProgs=Ee.programs.slice(-He.progs).map(ht=>(ht.name||"")+":"+String(ht.cacheKey).slice(0,60))),Tt.progs=Ee.programs.length,Tt.geos=Ee.memory.geometries,Tt.tex=Ee.memory.textures,Tt.frames++,Tt.sum+=Oe,Oe>Tt.max&&(Tt.max=Oe),Oe>12&&qe&&Tt.spikes.push(He),Tt.last=He}if((Zd+=tt)>.25){Zd=0,nx.textContent=Math.round(ie.speed*3.6),ix.textContent=(ie.dist/1e3).toFixed(1);let Ee=Math.floor(ie.tod*1440);sx.textContent=`${String(Math.floor(Ee/60)).padStart(2,"0")}:${String(Ee%60).padStart(2,"0")}`}lp++,qe&&lp>150&&tt>.03?ma+=tt:ma=Math.max(0,ma-tt*.5),ma>3&&!ct.has("q")&&(ma=0,op())}window.__dbg={renderer:e,st:ie,scene:M,camera:c,world:$,TOD:se,KEYS:$o,X:_t,train:ae,weather:We,U:Re,birds:It,cine:tn,post:fe,car:G,sun:f,M:q,clouds:me,pclouds:he,band:De,sky:N,mountains:P,shadowDir:w,CM:Ut,spray:$e,grass:_e,sea:W,get audio(){return En}},Gr(""),ec.classList.add("ready"),ct.has("auto")&&rf(),requestAnimationFrame(hp)}Cw().catch(i=>{console.error(i),Gr("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
