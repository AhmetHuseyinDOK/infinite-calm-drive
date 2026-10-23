var Ud=0,gh=1,Fd=2;var Xs=1,Bd=2,Gr=3,Ms=0,Cn=1,En=2,Vn=0,Wr=1,es=2,vh=3,xh=4,Od=5;var qs=100,zd=101,kd=102,Hd=103,Vd=104,Gd=200,Wd=201,Xd=202,qd=203,_h=204,yh=205,Yd=206,Zd=207,$d=208,Jd=209,Kd=210,jd=211,Qd=212,e0=213,t0=214,xl=0,_l=1,yl=2,Rr=3,Ml=4,bl=5,Sl=6,Tl=7,Mh=0,n0=1,i0=2,wi=0,bh=1,Sh=2,Th=3,Eh=4,wh=5,Ah=6,ma=7;var Rh=300,bs=301,Ys=302,nc=303,ic=304,ga=306,Cr=1e3,Fi=1001,El=1002,fn=1003,s0=1004;var va=1005;var Ot=1006,sc=1007;var Gn=1008;var Fn=1009,Ch=1010,Ph=1011,Xr=1012,rc=1013,Ai=1014,pi=1015,pn=1016,oc=1017,ac=1018,qr=1020,Ih=35902,Lh=35899,Dh=1021,Nh=1022,Jn=1023,Bi=1026,Ss=1027,Zs=1028,lc=1029,Ts=1030,cc=1031;var uc=1033,xa=33776,_a=33777,ya=33778,Ma=33779,hc=35840,fc=35841,dc=35842,pc=35843,mc=36196,gc=37492,vc=37496,xc=37488,_c=37489,ba=37490,yc=37491,Mc=37808,bc=37809,Sc=37810,Tc=37811,Ec=37812,wc=37813,Ac=37814,Rc=37815,Cc=37816,Pc=37817,Ic=37818,Lc=37819,Dc=37820,Nc=37821,Uc=36492,Fc=36494,Bc=36495,Oc=36283,zc=36284,Sa=36285,kc=36286;var Oo=2300,wl=2301,gl=2302,sh=2303,rh=2400,oh=2401,ah=2402;var r0=3200;var Hc=0,o0=1,Ri="",jt="srgb",zo="srgb-linear",ko="linear",Ct="srgb";var vl=7680;var a0=519,l0=512,c0=513,u0=514,Vc=515,h0=516,f0=517,Gc=518,d0=519,p0=35044;var Uh="300 es",Ei=2e3,Pr=2001;function zm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function km(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function m0(){let i=Ho("canvas");return i.style.display="block",i}var td={},Ir=null;function Fh(...i){let e="THREE."+i.shift();Ir?Ir("log",e,...i):console.log(e,...i)}function g0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ut(...i){i=g0(i);let e="THREE."+i.shift();if(Ir)Ir("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dt(...i){i=g0(i);let e="THREE."+i.shift();if(Ir)Ir("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Hs(...i){let e=i.join(" ");e in td||(td[e]=!0,ut(...i))}function v0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var x0={[xl]:_l,[yl]:Sl,[Ml]:Tl,[Rr]:bl,[_l]:xl,[Sl]:yl,[Tl]:Ml,[bl]:Rr},Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Iu=Math.PI/180,Vo=180/Math.PI;function Yr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Hm(i,e){return(i%e+e)%e}function Lu(i,e,t){return(1-t)*i+t*e}function Ao(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vh=class Vh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vh.prototype.isVector2=!0;var Ie=Vh,Tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],u=n[s+1],h=n[s+2],m=n[s+3],v=r[o+0],g=r[o+1],_=r[o+2],b=r[o+3];if(m!==b||c!==v||u!==g||h!==_){let l=c*v+u*g+h*_+m*b;l<0&&(v=-v,g=-g,_=-_,b=-b,l=-l);let f=1-a;if(l<.9995){let d=Math.acos(l),x=Math.sin(d);f=Math.sin(f*d)/x,a=Math.sin(a*d)/x,c=c*f+v*a,u=u*f+g*a,h=h*f+_*a,m=m*f+b*a}else{c=c*f+v*a,u=u*f+g*a,h=h*f+_*a,m=m*f+b*a;let d=1/Math.sqrt(c*c+u*u+h*h+m*m);c*=d,u*=d,h*=d,m*=d}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],u=n[s+2],h=n[s+3],m=r[o],v=r[o+1],g=r[o+2],_=r[o+3];return e[t]=a*_+h*m+c*g-u*v,e[t+1]=c*_+h*v+u*m-a*g,e[t+2]=u*_+h*g+a*v-c*m,e[t+3]=h*_-a*m-c*v-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(s/2),m=a(r/2),v=c(n/2),g=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=v*h*m+u*g*_,this._y=u*g*m-v*h*_,this._z=u*h*_+v*g*m,this._w=u*h*m-v*g*_;break;case"YXZ":this._x=v*h*m+u*g*_,this._y=u*g*m-v*h*_,this._z=u*h*_-v*g*m,this._w=u*h*m+v*g*_;break;case"ZXY":this._x=v*h*m-u*g*_,this._y=u*g*m+v*h*_,this._z=u*h*_+v*g*m,this._w=u*h*m-v*g*_;break;case"ZYX":this._x=v*h*m-u*g*_,this._y=u*g*m+v*h*_,this._z=u*h*_-v*g*m,this._w=u*h*m+v*g*_;break;case"YZX":this._x=v*h*m+u*g*_,this._y=u*g*m+v*h*_,this._z=u*h*_-v*g*m,this._w=u*h*m-v*g*_;break;case"XZY":this._x=v*h*m-u*g*_,this._y=u*g*m-v*h*_,this._z=u*h*_+v*g*m,this._w=u*h*m+v*g*_;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],u=t[2],h=t[6],m=t[10],v=n+a+m;if(v>0){let g=.5/Math.sqrt(v+1);this._w=.25/g,this._x=(h-c)*g,this._y=(r-u)*g,this._z=(o-s)*g}else if(n>a&&n>m){let g=2*Math.sqrt(1+n-a-m);this._w=(h-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+u)/g}else if(a>m){let g=2*Math.sqrt(1+a-n-m);this._w=(r-u)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+h)/g}else{let g=2*Math.sqrt(1+m-n-a);this._w=(o-s)/g,this._x=(r+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+s*u-r*c,this._y=s*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-s*a,this._w=o*h-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let u=Math.acos(a),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gh=class Gh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*s-a*n),h=2*(a*t-r*s),m=2*(r*n-o*t);return this.x=t+c*u+o*m-a*h,this.y=n+c*h+a*u-r*m,this.z=s+c*m+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gh.prototype.isVector3=!0;var k=Gh,Du=new k,nd=new Tn,Wh=class Wh{constructor(e,t,n,s,r,o,a,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u)}set(e,t,n,s,r,o,a,c,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],m=n[7],v=n[2],g=n[5],_=n[8],b=s[0],l=s[3],f=s[6],d=s[1],x=s[4],p=s[7],M=s[2],T=s[5],E=s[8];return r[0]=o*b+a*d+c*M,r[3]=o*l+a*x+c*T,r[6]=o*f+a*p+c*E,r[1]=u*b+h*d+m*M,r[4]=u*l+h*x+m*T,r[7]=u*f+h*p+m*E,r[2]=v*b+g*d+_*M,r[5]=v*l+g*x+_*T,r[8]=v*f+g*p+_*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*c+s*r*u-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],m=h*o-a*u,v=a*c-h*r,g=u*r-o*c,_=t*m+n*v+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return e[0]=m*b,e[1]=(s*u-h*n)*b,e[2]=(a*n-s*o)*b,e[3]=v*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-a*t)*b,e[6]=g*b,e[7]=(n*c-u*t)*b,e[8]=(o*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-s*u,s*c,-s*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nu.makeScale(e,t)),this}rotate(e){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nu.makeRotation(-e)),this}translate(e,t){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wh.prototype.isMatrix3=!0;var pt=Wh,Nu=new pt,id=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vm(){let i={enabled:!0,workingColorSpace:zo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zo]:{primaries:e,whitePoint:n,transfer:ko,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}var bt=Vm();function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fr,Al=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=Ho("canvas")),fr.width=e.width,fr.height=e.height;let s=fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ho("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gm=0,Lr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uu(s[o].image)):r.push(Uu(s[o]))}else r=Uu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}var Wm=0,Fu=new k,kn=class i extends Oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Fi,s=Fi,r=Ot,o=Gn,a=Jn,c=Fn,u=i.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Yr(),this.name="",this.source=new Lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fu).x}get height(){return this.source.getSize(Fu).y}get depth(){return this.source.getSize(Fu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case El:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case El:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Rh;kn.DEFAULT_ANISOTROPY=1;var Xh=class Xh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],h=c[4],m=c[8],v=c[1],g=c[5],_=c[9],b=c[2],l=c[6],f=c[10];if(Math.abs(h-v)<.01&&Math.abs(m-b)<.01&&Math.abs(_-l)<.01){if(Math.abs(h+v)<.1&&Math.abs(m+b)<.1&&Math.abs(_+l)<.1&&Math.abs(u+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(u+1)/2,p=(g+1)/2,M=(f+1)/2,T=(h+v)/4,E=(m+b)/4,y=(_+l)/4;return x>p&&x>M?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=E/n):p>M?p<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(p),n=T/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=E/r,s=y/r),this.set(n,s,r,t),this}let d=Math.sqrt((l-_)*(l-_)+(m-b)*(m-b)+(v-h)*(v-h));return Math.abs(d)<.001&&(d=1),this.x=(l-_)/d,this.y=(m-b)/d,this.z=(v-h)/d,this.w=Math.acos((u+g+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xh.prototype.isVector4=!0;var St=Xh,Rl=class extends Oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new kn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Lr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ut=class extends Rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Go=class extends kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cl=class extends kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var tc=class tc{constructor(e,t,n,s,r,o,a,c,u,h,m,v,g,_,b,l){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u,h,m,v,g,_,b,l)}set(e,t,n,s,r,o,a,c,u,h,m,v,g,_,b,l){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=u,f[6]=h,f[10]=m,f[14]=v,f[3]=g,f[7]=_,f[11]=b,f[15]=l,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let v=o*h,g=o*m,_=a*h,b=a*m;t[0]=c*h,t[4]=-c*m,t[8]=u,t[1]=g+_*u,t[5]=v-b*u,t[9]=-a*c,t[2]=b-v*u,t[6]=_+g*u,t[10]=o*c}else if(e.order==="YXZ"){let v=c*h,g=c*m,_=u*h,b=u*m;t[0]=v+b*a,t[4]=_*a-g,t[8]=o*u,t[1]=o*m,t[5]=o*h,t[9]=-a,t[2]=g*a-_,t[6]=b+v*a,t[10]=o*c}else if(e.order==="ZXY"){let v=c*h,g=c*m,_=u*h,b=u*m;t[0]=v-b*a,t[4]=-o*m,t[8]=_+g*a,t[1]=g+_*a,t[5]=o*h,t[9]=b-v*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let v=o*h,g=o*m,_=a*h,b=a*m;t[0]=c*h,t[4]=_*u-g,t[8]=v*u+b,t[1]=c*m,t[5]=b*u+v,t[9]=g*u-_,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let v=o*c,g=o*u,_=a*c,b=a*u;t[0]=c*h,t[4]=b-v*m,t[8]=_*m+g,t[1]=m,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=g*m+_,t[10]=v-b*m}else if(e.order==="XZY"){let v=o*c,g=o*u,_=a*c,b=a*u;t[0]=c*h,t[4]=-m,t[8]=u*h,t[1]=v*m+b,t[5]=o*h,t[9]=g*m-_,t[2]=_*m-g,t[6]=a*h,t[10]=b*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xm,e,qm)}lookAt(e,t,n){let s=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),ls.crossVectors(n,ti),ls.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),ls.crossVectors(n,ti)),ls.normalize(),Wa.crossVectors(ti,ls),s[0]=ls.x,s[4]=Wa.x,s[8]=ti.x,s[1]=ls.y,s[5]=Wa.y,s[9]=ti.y,s[2]=ls.z,s[6]=Wa.z,s[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],m=n[5],v=n[9],g=n[13],_=n[2],b=n[6],l=n[10],f=n[14],d=n[3],x=n[7],p=n[11],M=n[15],T=s[0],E=s[4],y=s[8],S=s[12],A=s[1],R=s[5],P=s[9],I=s[13],C=s[2],L=s[6],O=s[10],H=s[14],W=s[3],D=s[7],z=s[11],V=s[15];return r[0]=o*T+a*A+c*C+u*W,r[4]=o*E+a*R+c*L+u*D,r[8]=o*y+a*P+c*O+u*z,r[12]=o*S+a*I+c*H+u*V,r[1]=h*T+m*A+v*C+g*W,r[5]=h*E+m*R+v*L+g*D,r[9]=h*y+m*P+v*O+g*z,r[13]=h*S+m*I+v*H+g*V,r[2]=_*T+b*A+l*C+f*W,r[6]=_*E+b*R+l*L+f*D,r[10]=_*y+b*P+l*O+f*z,r[14]=_*S+b*I+l*H+f*V,r[3]=d*T+x*A+p*C+M*W,r[7]=d*E+x*R+p*L+M*D,r[11]=d*y+x*P+p*O+M*z,r[15]=d*S+x*I+p*H+M*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],u=e[13],h=e[2],m=e[6],v=e[10],g=e[14],_=e[3],b=e[7],l=e[11],f=e[15],d=c*g-u*v,x=a*g-u*m,p=a*v-c*m,M=o*g-u*h,T=o*v-c*h,E=o*m-a*h;return t*(b*d-l*x+f*p)-n*(_*d-l*M+f*T)+s*(_*x-b*M+f*E)-r*(_*p-b*T+l*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],u=e[6],h=e[10];return t*(o*h-a*u)-n*(r*h-a*c)+s*(r*u-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],m=e[9],v=e[10],g=e[11],_=e[12],b=e[13],l=e[14],f=e[15],d=t*a-n*o,x=t*c-s*o,p=t*u-r*o,M=n*c-s*a,T=n*u-r*a,E=s*u-r*c,y=h*b-m*_,S=h*l-v*_,A=h*f-g*_,R=m*l-v*b,P=m*f-g*b,I=v*f-g*l,C=d*I-x*P+p*R+M*A-T*S+E*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return e[0]=(a*I-c*P+u*R)*L,e[1]=(s*P-n*I-r*R)*L,e[2]=(b*E-l*T+f*M)*L,e[3]=(v*T-m*E-g*M)*L,e[4]=(c*A-o*I-u*S)*L,e[5]=(t*I-s*A+r*S)*L,e[6]=(l*p-_*E-f*x)*L,e[7]=(h*E-v*p+g*x)*L,e[8]=(o*P-a*A+u*y)*L,e[9]=(n*A-t*P-r*y)*L,e[10]=(_*T-b*p+f*d)*L,e[11]=(m*p-h*T-g*d)*L,e[12]=(a*S-o*R-c*y)*L,e[13]=(t*R-n*S+s*y)*L,e[14]=(b*x-_*M-l*d)*L,e[15]=(h*M-m*x+v*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,h*a+n,h*c-s*o,0,u*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,u=r+r,h=o+o,m=a+a,v=r*u,g=r*h,_=r*m,b=o*h,l=o*m,f=a*m,d=c*u,x=c*h,p=c*m,M=n.x,T=n.y,E=n.z;return s[0]=(1-(b+f))*M,s[1]=(g+p)*M,s[2]=(_-x)*M,s[3]=0,s[4]=(g-p)*T,s[5]=(1-(v+f))*T,s[6]=(l+d)*T,s[7]=0,s[8]=(_+x)*E,s[9]=(l-d)*E,s[10]=(1-(v+b))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=dr.set(s[0],s[1],s[2]).length(),a=dr.set(s[4],s[5],s[6]).length(),c=dr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Mi.copy(this);let u=1/o,h=1/a,m=1/c;return Mi.elements[0]*=u,Mi.elements[1]*=u,Mi.elements[2]*=u,Mi.elements[4]*=h,Mi.elements[5]*=h,Mi.elements[6]*=h,Mi.elements[8]*=m,Mi.elements[9]*=m,Mi.elements[10]*=m,t.setFromRotationMatrix(Mi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Ei,c=!1){let u=this.elements,h=2*r/(t-e),m=2*r/(n-s),v=(t+e)/(t-e),g=(n+s)/(n-s),_,b;if(c)_=r/(o-r),b=o*r/(o-r);else if(a===Ei)_=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===Pr)_=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=v,u[12]=0,u[1]=0,u[5]=m,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ei,c=!1){let u=this.elements,h=2/(t-e),m=2/(n-s),v=-(t+e)/(t-e),g=-(n+s)/(n-s),_,b;if(c)_=1/(o-r),b=o/(o-r);else if(a===Ei)_=-2/(o-r),b=-(o+r)/(o-r);else if(a===Pr)_=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=v,u[1]=0,u[5]=m,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=_,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};tc.prototype.isMatrix4=!0;var it=tc,dr=new k,Mi=new it,Xm=new k(0,0,0),qm=new k(1,1,1),ls=new k,Wa=new k,ti=new k,rd=new it,od=new Tn,Zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],h=s[9],m=s[2],v=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(v,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(v,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return od.setFromEuler(this),this.setFromQuaternion(od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Wo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ym=0,ad=new k,pr=new Tn,qi=new it,Xa=new k,Ro=new k,Zm=new k,$m=new Tn,ld=new k(1,0,0),cd=new k(0,1,0),ud=new k(0,0,1),hd={type:"added"},Jm={type:"removed"},mr={type:"childadded",child:null},Bu={type:"childremoved",child:null},dn=class i extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Zn,n=new Tn,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new pt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(ld,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(ud,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ld,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xa.copy(e):Xa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ro,Xa,this.up):qi.lookAt(Xa,Ro,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(qi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),mr.child=e,this.dispatchEvent(mr),mr.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jm),Bu.child=e,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,Zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,$m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let m=c[u];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),m=o(e.shapes),v=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),v.length>0&&(n.skeletons=v),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let u in a){let h=a[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new k(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Km={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let b of e.hand.values()){let l=t.getJointPose(b,n),f=this._getHandJoint(u,b);l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=l.radius),f.visible=l!==null}let h=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],v=h.position.distanceTo(m.position),g=.02,_=.005;u.inputState.pinching&&v>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&v<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Ou(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=Hm(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ou(o,r,e+1/3),this.g=Ou(o,r,e),this.b=Ou(o,r,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=_0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return bt.workingToColorSpace(Un.copy(this),e),Math.round(Mt(Un.r*255,0,255))*65536+Math.round(Mt(Un.g*255,0,255))*256+Math.round(Mt(Un.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Un.copy(this),t);let n=Un.r,s=Un.g,r=Un.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,u,h=(a+o)/2;if(a===o)c=0,u=0;else{let m=o-a;switch(u=h<=.5?m/(o+a):m/(2-o-a),o){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=jt){bt.workingToColorSpace(Un.copy(this),e);let t=Un.r,n=Un.g,s=Un.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(qa);let n=Lu(cs.h,qa.h,t),s=Lu(cs.s,qa.s,t),r=Lu(cs.l,qa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new Te;Te.NAMES=_0;var Xo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vs=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},bi=new k,Yi=new k,zu=new k,Zi=new k,gr=new k,vr=new k,fd=new k,ku=new k,Hu=new k,Vu=new k,Gu=new St,Wu=new St,Xu=new St,ds=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bi.subVectors(e,t),s.cross(bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){bi.subVectors(s,t),Yi.subVectors(n,t),zu.subVectors(e,t);let o=bi.dot(bi),a=bi.dot(Yi),c=bi.dot(zu),u=Yi.dot(Yi),h=Yi.dot(zu),m=o*u-a*a;if(m===0)return r.set(0,0,0),null;let v=1/m,g=(u*c-a*h)*v,_=(o*h-a*c)*v;return r.set(1-g-_,_,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zi.x),c.addScaledVector(o,Zi.y),c.addScaledVector(a,Zi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Gu.setScalar(0),Wu.setScalar(0),Xu.setScalar(0),Gu.fromBufferAttribute(e,t),Wu.fromBufferAttribute(e,n),Xu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Gu,r.x),o.addScaledVector(Wu,r.y),o.addScaledVector(Xu,r.z),o}static isFrontFacing(e,t,n,s){return bi.subVectors(n,t),Yi.subVectors(e,t),bi.cross(Yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),bi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;gr.subVectors(s,n),vr.subVectors(r,n),ku.subVectors(e,n);let c=gr.dot(ku),u=vr.dot(ku);if(c<=0&&u<=0)return t.copy(n);Hu.subVectors(e,s);let h=gr.dot(Hu),m=vr.dot(Hu);if(h>=0&&m<=h)return t.copy(s);let v=c*m-h*u;if(v<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(gr,o);Vu.subVectors(e,r);let g=gr.dot(Vu),_=vr.dot(Vu);if(_>=0&&g<=_)return t.copy(r);let b=g*u-c*_;if(b<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(vr,a);let l=h*_-g*m;if(l<=0&&m-h>=0&&g-_>=0)return fd.subVectors(r,s),a=(m-h)/(m-h+(g-_)),t.copy(s).addScaledVector(fd,a);let f=1/(l+b+v);return o=b*f,a=v*f,t.copy(n).addScaledVector(gr,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Si):Si.fromBufferAttribute(r,o),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ya.copy(n.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),Za.subVectors(this.max,Co),xr.subVectors(e.a,Co),_r.subVectors(e.b,Co),yr.subVectors(e.c,Co),us.subVectors(_r,xr),hs.subVectors(yr,_r),Bs.subVectors(xr,yr);let t=[0,-us.z,us.y,0,-hs.z,hs.y,0,-Bs.z,Bs.y,us.z,0,-us.x,hs.z,0,-hs.x,Bs.z,0,-Bs.x,-us.y,us.x,0,-hs.y,hs.x,0,-Bs.y,Bs.x,0];return!qu(t,xr,_r,yr,Za)||(t=[1,0,0,0,1,0,0,0,1],!qu(t,xr,_r,yr,Za))?!1:($a.crossVectors(us,hs),t=[$a.x,$a.y,$a.z],qu(t,xr,_r,yr,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$i=[new k,new k,new k,new k,new k,new k,new k,new k],Si=new k,Ya=new hi,xr=new k,_r=new k,yr=new k,us=new k,hs=new k,Bs=new k,Co=new k,Za=new k,$a=new k,Os=new k;function qu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Os.fromArray(i,r);let a=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),c=e.dot(Os),u=t.dot(Os),h=n.dot(Os);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}var hn=new k,Ja=new Ie,jm=0,Bt=class extends Oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=p0,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ao(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var qo=class extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Yo=class extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qm=new hi,Po=new k,Yu=new k,fi=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);let t=Po.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Po,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Yu)),this.expandByPoint(Po.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},eg=0,ui=new it,Zu=new dn,Mr=new k,ni=new hi,Io=new hi,Sn=new k,yt=class i extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zm(e)?Yo:qo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(ni.min,Io.min),ni.expandByPoint(Sn),Sn.addVectors(ni.max,Io.max),ni.expandByPoint(Sn)):(ni.expandByPoint(Io.min),ni.expandByPoint(Io.max))}ni.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Sn.fromBufferAttribute(a,u),c&&(Mr.fromBufferAttribute(e,u),Sn.add(Mr)),s=Math.max(s,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new k,c[y]=new k;let u=new k,h=new k,m=new k,v=new Ie,g=new Ie,_=new Ie,b=new k,l=new k;function f(y,S,A){u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),m.fromBufferAttribute(n,A),v.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),_.fromBufferAttribute(r,A),h.sub(u),m.sub(u),g.sub(v),_.sub(v);let R=1/(g.x*_.y-_.x*g.y);isFinite(R)&&(b.copy(h).multiplyScalar(_.y).addScaledVector(m,-g.y).multiplyScalar(R),l.copy(m).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(R),a[y].add(b),a[S].add(b),a[A].add(b),c[y].add(l),c[S].add(l),c[A].add(l))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let y=0,S=d.length;y<S;++y){let A=d[y],R=A.start,P=A.count;for(let I=R,C=R+P;I<C;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let x=new k,p=new k,M=new k,T=new k;function E(y){M.fromBufferAttribute(s,y),T.copy(M);let S=a[y];x.copy(S),x.sub(M.multiplyScalar(M.dot(S))).normalize(),p.crossVectors(T,S);let R=p.dot(c[y])<0?-1:1;o.setXYZW(y,x.x,x.y,x.z,R)}for(let y=0,S=d.length;y<S;++y){let A=d[y],R=A.start,P=A.count;for(let I=R,C=R+P;I<C;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,g=n.count;v<g;v++)n.setXYZ(v,0,0,0);let s=new k,r=new k,o=new k,a=new k,c=new k,u=new k,h=new k,m=new k;if(e)for(let v=0,g=e.count;v<g;v+=3){let _=e.getX(v+0),b=e.getX(v+1),l=e.getX(v+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,l),h.subVectors(o,r),m.subVectors(s,r),h.cross(m),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,l),a.add(h),c.add(h),u.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(l,u.x,u.y,u.z)}else for(let v=0,g=t.count;v<g;v+=3)s.fromBufferAttribute(t,v+0),r.fromBufferAttribute(t,v+1),o.fromBufferAttribute(t,v+2),h.subVectors(o,r),m.subVectors(s,r),h.cross(m),n.setXYZ(v+0,h.x,h.y,h.z),n.setXYZ(v+1,h.x,h.y,h.z),n.setXYZ(v+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(a,c){let u=a.array,h=a.itemSize,m=a.normalized,v=new u.constructor(c.length*h),g=0,_=0;for(let b=0,l=c.length;b<l;b++){a.isInterleavedBufferAttribute?g=c[b]*a.data.stride+a.offset:g=c[b]*h;for(let f=0;f<h;f++)v[_++]=u[g++]}return new Bt(v,h,m)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],u=e(c,n);t.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let c=[],u=r[a];for(let h=0,m=u.length;h<m;h++){let v=u[h],g=e(v,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let m=0,v=u.length;m<v;m++){let g=u[m];h.push(g.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],m=r[u];for(let v=0,g=m.length;v<g;v++)h.push(m[v].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let m=o[u];this.addGroup(m.start,m.count,m.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $u=new k,tg=new k,ng=new pt,Ti=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$u.subVectors(n,t).cross(tg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta($u),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ng.getNormalMatrix(e),s=this.coplanarPoint($u).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ig=0,zi=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=Wr,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=yh,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vl,this.stencilZFail=vl,this.stencilZPass=vl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ti().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ji=new k,Ju=new k,Ka=new k,ja=new k,Nr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ju.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),ja.copy(this.origin).sub(Ju);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ka),a=ja.dot(this.direction),c=-ja.dot(Ka),u=ja.lengthSq(),h=Math.abs(1-o*o),m,v,g,_;if(h>0)if(m=o*c-a,v=o*a-c,_=r*h,m>=0)if(v>=-_)if(v<=_){let b=1/h;m*=b,v*=b,g=m*(m+o*v+2*a)+v*(o*m+v+2*c)+u}else v=r,m=Math.max(0,-(o*v+a)),g=-m*m+v*(v+2*c)+u;else v=-r,m=Math.max(0,-(o*v+a)),g=-m*m+v*(v+2*c)+u;else v<=-_?(m=Math.max(0,-(-o*r+a)),v=m>0?-r:Math.min(Math.max(-r,-c),r),g=-m*m+v*(v+2*c)+u):v<=_?(m=0,v=Math.min(Math.max(-r,-c),r),g=v*(v+2*c)+u):(m=Math.max(0,-(o*r+a)),v=m>0?r:Math.min(Math.max(-r,-c),r),g=-m*m+v*(v+2*c)+u);else v=o>0?-r:r,m=Math.max(0,-(o*v+a)),g=-m*m+v*(v+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Ju).addScaledVector(Ka,v),g}intersectSphere(e,t){if(e.radius<0)return null;Ji.subVectors(e.center,this.origin);let n=Ji.dot(this.direction),s=Ji.dot(Ji)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,u=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,v=this.origin;return u>=0?(n=(e.min.x-v.x)*u,s=(e.max.x-v.x)*u):(n=(e.max.x-v.x)*u,s=(e.min.x-v.x)*u),h>=0?(r=(e.min.y-v.y)*h,o=(e.max.y-v.y)*h):(r=(e.max.y-v.y)*h,o=(e.min.y-v.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(e.min.z-v.z)*m,c=(e.max.z-v.z)*m):(a=(e.max.z-v.z)*m,c=(e.min.z-v.z)*m),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,u=a.y,h=a.z,m=e.x-o.x,v=e.y-o.y,g=e.z-o.z,_=t.x-o.x,b=t.y-o.y,l=t.z-o.z,f=n.x-o.x,d=n.y-o.y,x=n.z-o.z,p=Math.abs(c),M=Math.abs(u),T=Math.abs(h),E,y,S,A,R,P,I,C,L,O,H,W;if(p>=M&&p>=T?(S=c,P=m,L=_,W=f,c>=0?(E=u,y=h,A=v,R=g,I=b,C=l,O=d,H=x):(E=h,y=u,A=g,R=v,I=l,C=b,O=x,H=d)):M>=T?(S=u,P=v,L=b,W=d,u>=0?(E=h,y=c,A=g,R=m,I=l,C=_,O=x,H=f):(E=c,y=h,A=m,R=g,I=_,C=l,O=f,H=x)):(S=h,P=g,L=l,W=x,h>=0?(E=c,y=u,A=m,R=v,I=_,C=b,O=f,H=d):(E=u,y=c,A=v,R=m,I=b,C=_,O=d,H=f)),S===0)return null;let D=E/S,z=y/S,V=1/S,ee=A-D*P,le=R-z*P,Xe=I-D*L,Ae=C-z*L,Be=O-D*W,J=H-z*W,Z=Be*Ae-J*Xe,Me=ee*J-le*Be,Le=Xe*le-Ae*ee;if(s){if(Z<0||Me<0||Le<0)return null}else if((Z<0||Me<0||Le<0)&&(Z>0||Me>0||Le>0))return null;let we=Z+Me+Le;if(we===0)return null;let Ge=V*(Z*P+Me*L+Le*W);return(we>0?Ge<0:Ge>0)?null:this.at(Ge/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dd=new it,zs=new Nr,Qa=new fi,pd=new k,el=new k,tl=new k,nl=new k,Ku=new k,il=new k,md=new k,sl=new k,gt=class extends dn{constructor(e=new yt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){il.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let h=a[c],m=r[c];h!==0&&(Ku.fromBufferAttribute(m,e),o?il.addScaledVector(Ku,h):il.addScaledVector(Ku.sub(t),h))}t.add(il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(r),zs.copy(e.ray).recast(e.near),!(Qa.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Qa,pd)===null||zs.origin.distanceToSquared(pd)>(e.far-e.near)**2))&&(dd.copy(r).invert(),zs.copy(e.ray).applyMatrix4(dd),!(n.boundingBox!==null&&zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,v=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,b=v.length;_<b;_++){let l=v[_],f=o[l.materialIndex],d=Math.max(l.start,g.start),x=Math.min(a.count,Math.min(l.start+l.count,g.start+g.count));for(let p=d,M=x;p<M;p+=3){let T=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);s=rl(this,f,e,n,u,h,m,T,E,y),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=l.materialIndex,t.push(s))}}else{let _=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let l=_,f=b;l<f;l+=3){let d=a.getX(l),x=a.getX(l+1),p=a.getX(l+2);s=rl(this,o,e,n,u,h,m,d,x,p),s&&(s.faceIndex=Math.floor(l/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,b=v.length;_<b;_++){let l=v[_],f=o[l.materialIndex],d=Math.max(l.start,g.start),x=Math.min(c.count,Math.min(l.start+l.count,g.start+g.count));for(let p=d,M=x;p<M;p+=3){let T=p,E=p+1,y=p+2;s=rl(this,f,e,n,u,h,m,T,E,y),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=l.materialIndex,t.push(s))}}else{let _=Math.max(0,g.start),b=Math.min(c.count,g.start+g.count);for(let l=_,f=b;l<f;l+=3){let d=l,x=l+1,p=l+2;s=rl(this,o,e,n,u,h,m,d,x,p),s&&(s.faceIndex=Math.floor(l/3),t.push(s))}}}};function sg(i,e,t,n,s,r,o,a){let c;if(e.side===Cn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ms,a),c===null)return null;sl.copy(a),sl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(sl);return u<t.near||u>t.far?null:{distance:u,point:sl.clone(),object:i}}function rl(i,e,t,n,s,r,o,a,c,u){i.getVertexPosition(a,el),i.getVertexPosition(c,tl),i.getVertexPosition(u,nl);let h=sg(i,e,t,n,el,tl,nl,md);if(h){let m=new k;ds.getBarycoord(md,el,tl,nl,m),s&&(h.uv=ds.getInterpolatedAttribute(s,a,c,u,m,new Ie)),r&&(h.uv1=ds.getInterpolatedAttribute(r,a,c,u,m,new Ie)),o&&(h.normal=ds.getInterpolatedAttribute(o,a,c,u,m,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let v={a,b:c,c:u,normal:new k,materialIndex:0};ds.getNormal(el,tl,nl,v.normal),h.face=v,h.barycoord=m}return h}var ps=class extends kn{constructor(e=null,t=1,n=1,s,r,o,a,c,u=fn,h=fn,m,v){super(null,o,a,c,u,h,s,r,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class extends Bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new it,gd=new it,ol=[],vd=new hi,rg=new it,Lo=new gt,Do=new fi,ji=class extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),vd.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(vd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),Do.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(Do)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(n),e.ray.intersectsSphere(Do)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,br),gd.multiplyMatrices(n,br),Lo.matrixWorld=gd,Lo.raycast(e,ol);for(let o=0,a=ol.length;o<a;o++){let c=ol[o];c.instanceId=r,c.object=this,t.push(c)}ol.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Hn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ps(new Float32Array(s*this.count),s,this.count,Zs,pi));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ks=new fi,og=new Ie(.5,.5),al=new k,Ur=class{constructor(e=new Ti,t=new Ti,n=new Ti,s=new Ti,r=new Ti,o=new Ti){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],u=r[3],h=r[4],m=r[5],v=r[6],g=r[7],_=r[8],b=r[9],l=r[10],f=r[11],d=r[12],x=r[13],p=r[14],M=r[15];if(s[0].setComponents(u-o,g-h,f-_,M-d).normalize(),s[1].setComponents(u+o,g+h,f+_,M+d).normalize(),s[2].setComponents(u+a,g+m,f+b,M+x).normalize(),s[3].setComponents(u-a,g-m,f-b,M-x).normalize(),n)s[4].setComponents(c,v,l,p).normalize(),s[5].setComponents(u-c,g-v,f-l,M-p).normalize();else if(s[4].setComponents(u-c,g-v,f-l,M-p).normalize(),t===Ei)s[5].setComponents(u+c,g+v,f+l,M+p).normalize();else if(t===Pr)s[5].setComponents(c,v,l,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){ks.center.set(0,0,0);let t=og.distanceTo(e.center);return ks.radius=.7071067811865476+t,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(al.x=s.normal.x>0?e.max.x:e.min.x,al.y=s.normal.y>0?e.max.y:e.min.y,al.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pl=class extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Il=new k,Ll=new k,xd=new it,No=new Nr,ll=new fi,ju=new k,_d=new k,Zo=class extends dn{constructor(e=new yt,t=new Pl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Il.fromBufferAttribute(t,s-1),Ll.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Il.distanceTo(Ll);e.setAttribute("lineDistance",new Je(n,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(s),ll.radius+=r,e.ray.intersectsSphere(ll)===!1)return;xd.copy(s).invert(),No.copy(e.ray).applyMatrix4(xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,v=n.attributes.position;if(h!==null){let g=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let b=g,l=_-1;b<l;b+=u){let f=h.getX(b),d=h.getX(b+1),x=cl(this,e,No,c,f,d,b);x&&t.push(x)}if(this.isLineLoop){let b=h.getX(_-1),l=h.getX(g),f=cl(this,e,No,c,b,l,_-1);f&&t.push(f)}}else{let g=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let b=g,l=_-1;b<l;b+=u){let f=cl(this,e,No,c,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){let b=cl(this,e,No,c,_-1,g,_-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Il.fromBufferAttribute(a,s),Ll.fromBufferAttribute(a,r),t.distanceSqToSegment(Il,Ll,ju,_d)>n)return;ju.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(ju);if(!(u<e.near||u>e.far))return{distance:u,point:_d.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Fr=class extends zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yd=new it,lh=new Nr,ul=new fi,hl=new k,$o=class extends dn{constructor(e=new yt,t=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;yd.copy(s).invert(),lh.copy(e.ray).applyMatrix4(yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,m=n.attributes.position;if(u!==null){let v=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=v,b=g;_<b;_++){let l=u.getX(_);hl.fromBufferAttribute(m,l),Md(hl,l,c,s,e,t,this)}}else{let v=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let _=v,b=g;_<b;_++)hl.fromBufferAttribute(m,_),Md(hl,_,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Md(i,e,t,n,s,r,o){let a=lh.distanceSqToPoint(i);if(a<t){let c=new k;lh.closestPointToPoint(i,c),c.applyMatrix4(n);let u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Jo=class extends kn{constructor(e=[],t=bs,n,s,r,o,a,c,u,h){super(e,t,n,s,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$n=class extends kn{constructor(e,t,n,s,r,o,a,c,u){super(e,t,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ms=class extends kn{constructor(e,t,n=Ai,s,r,o,a=fn,c=fn,u,h=Bi,m=1){if(h!==Bi&&h!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let v={width:e,height:t,depth:m};super(v,s,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Dl=class extends ms{constructor(e,t=Ai,n=bs,s,r,o=fn,a=fn,c,u=Bi){let h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ko=class extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vt=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],u=[],h=[],m=[],v=0,g=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(m,2));function _(b,l,f,d,x,p,M,T,E,y,S){let A=p/E,R=M/y,P=p/2,I=M/2,C=T/2,L=E+1,O=y+1,H=0,W=0,D=new k;for(let z=0;z<O;z++){let V=z*R-I;for(let ee=0;ee<L;ee++){let le=ee*A-P;D[b]=le*d,D[l]=V*x,D[f]=C,u.push(D.x,D.y,D.z),D[b]=0,D[l]=0,D[f]=T>0?1:-1,h.push(D.x,D.y,D.z),m.push(ee/E),m.push(1-z/y),H+=1}}for(let z=0;z<y;z++)for(let V=0;V<E;V++){let ee=v+V+L*z,le=v+V+L*(z+1),Xe=v+(V+1)+L*(z+1),Ae=v+(V+1)+L*z;c.push(ee,le,Ae),c.push(le,Xe,Ae),W+=6}a.addGroup(g,W,S),g+=W,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Gs=class i extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],u=new k,h=new Ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let m=0,v=3;m<=t;m++,v+=3){let g=n+m/t*s;u.x=e*Math.cos(g),u.y=e*Math.sin(g),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[v]/e+1)/2,h.y=(o[v+1]/e+1)/2,c.push(h.x,h.y)}for(let m=1;m<=t;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},di=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],v=[],g=[],_=0,b=[],l=n/2,f=0;d(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(g,2));function d(){let p=new k,M=new k,T=0,E=(t-e)/n;for(let y=0;y<=r;y++){let S=[],A=y/r,R=A*(t-e)+e;for(let P=0;P<=s;P++){let I=P/s,C=I*c+a,L=Math.sin(C),O=Math.cos(C);M.x=R*L,M.y=-A*n+l,M.z=R*O,m.push(M.x,M.y,M.z),p.set(L,E,O).normalize(),v.push(p.x,p.y,p.z),g.push(I,1-A),S.push(_++)}b.push(S)}for(let y=0;y<s;y++)for(let S=0;S<r;S++){let A=b[S][y],R=b[S+1][y],P=b[S+1][y+1],I=b[S][y+1];(e>0||S!==0)&&(h.push(A,R,I),T+=3),(t>0||S!==r-1)&&(h.push(R,P,I),T+=3)}u.addGroup(f,T,0),f+=T}function x(p){let M=_,T=new Ie,E=new k,y=0,S=p===!0?e:t,A=p===!0?1:-1;for(let P=1;P<=s;P++)m.push(0,l*A,0),v.push(0,A,0),g.push(.5,.5),_++;let R=_;for(let P=0;P<=s;P++){let C=P/s*c+a,L=Math.cos(C),O=Math.sin(C);E.x=S*O,E.y=l*A,E.z=S*L,m.push(E.x,E.y,E.z),v.push(0,A,0),T.x=L*.5+.5,T.y=O*.5*A+.5,g.push(T.x,T.y),_++}for(let P=0;P<s;P++){let I=M+P,C=R+P;p===!0?h.push(C,C+1,I):h.push(C+1,C,I),y+=3}u.addGroup(f,y,p===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Nl=class i extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),u(n),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(d){let x=new k,p=new k,M=new k;for(let T=0;T<t.length;T+=3)g(t[T+0],x),g(t[T+1],p),g(t[T+2],M),c(x,p,M,d)}function c(d,x,p,M){let T=M+1,E=[];for(let y=0;y<=T;y++){E[y]=[];let S=d.clone().lerp(p,y/T),A=x.clone().lerp(p,y/T),R=T-y;for(let P=0;P<=R;P++)P===0&&y===T?E[y][P]=S:E[y][P]=S.clone().lerp(A,P/R)}for(let y=0;y<T;y++)for(let S=0;S<2*(T-y)-1;S++){let A=Math.floor(S/2);S%2===0?(v(E[y][A+1]),v(E[y+1][A]),v(E[y][A])):(v(E[y][A+1]),v(E[y+1][A+1]),v(E[y+1][A]))}}function u(d){let x=new k;for(let p=0;p<r.length;p+=3)x.x=r[p+0],x.y=r[p+1],x.z=r[p+2],x.normalize().multiplyScalar(d),r[p+0]=x.x,r[p+1]=x.y,r[p+2]=x.z}function h(){let d=new k;for(let x=0;x<r.length;x+=3){d.x=r[x+0],d.y=r[x+1],d.z=r[x+2];let p=l(d)/2/Math.PI+.5,M=f(d)/Math.PI+.5;o.push(p,1-M)}_(),m()}function m(){for(let d=0;d<o.length;d+=6){let x=o[d+0],p=o[d+2],M=o[d+4],T=Math.max(x,p,M),E=Math.min(x,p,M);T>.9&&E<.1&&(x<.2&&(o[d+0]+=1),p<.2&&(o[d+2]+=1),M<.2&&(o[d+4]+=1))}}function v(d){r.push(d.x,d.y,d.z)}function g(d,x){let p=d*3;x.x=e[p+0],x.y=e[p+1],x.z=e[p+2]}function _(){let d=new k,x=new k,p=new k,M=new k,T=new Ie,E=new Ie,y=new Ie;for(let S=0,A=0;S<r.length;S+=9,A+=6){d.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),p.set(r[S+6],r[S+7],r[S+8]),T.set(o[A+0],o[A+1]),E.set(o[A+2],o[A+3]),y.set(o[A+4],o[A+5]),M.copy(d).add(x).add(p).divideScalar(3);let R=l(M);b(T,A+0,d,R),b(E,A+2,x,R),b(y,A+4,p,R)}}function b(d,x,p,M){M<0&&d.x===1&&(o[x]=d.x-1),p.x===0&&p.z===0&&(o[x]=M/2/Math.PI+.5)}function l(d){return Math.atan2(d.z,-d.x)}function f(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,u;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],v=n[s+1]-h,g=(o-h)/v;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ie:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,s=[],r=[],o=[],a=new k,c=new it;for(let g=0;g<=e;g++){let _=g/e;s[g]=this.getTangentAt(_,new k)}r[0]=new k,o[0]=new k;let u=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),v=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),m<=u&&(u=m,n.set(0,1,0)),v<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Mt(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(c.makeRotationAxis(a,_))}o[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(Mt(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(g=-g);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],g*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Br=class extends ii{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),v=c-this.aX,g=u-this.aY;c=v*h-g*m+this.aX,u=v*m+g*h+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ul=class extends Br{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Bh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,u){s(o,a,u*(a-r),u*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,u,h,m){let v=(o-r)/u-(a-r)/(u+h)+(a-o)/h,g=(a-o)/h-(c-o)/(h+m)+(c-a)/m;v*=h,g*=h,s(o,a,v,g)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var bd=new k,Sd=new k,Qu=new Bh,eh=new Bh,th=new Bh,Fl=class extends ii{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let u,h;this.closed||a>0?u=s[(a-1)%r]:(Sd.subVectors(s[0],s[1]).add(s[0]),u=Sd);let m=s[a%r],v=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(bd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bd),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,_=Math.pow(u.distanceToSquared(m),g),b=Math.pow(m.distanceToSquared(v),g),l=Math.pow(v.distanceToSquared(h),g);b<1e-4&&(b=1),_<1e-4&&(_=b),l<1e-4&&(l=b),Qu.initNonuniformCatmullRom(u.x,m.x,v.x,h.x,_,b,l),eh.initNonuniformCatmullRom(u.y,m.y,v.y,h.y,_,b,l),th.initNonuniformCatmullRom(u.z,m.z,v.z,h.z,_,b,l)}else this.curveType==="catmullrom"&&(Qu.initCatmullRom(u.x,m.x,v.x,h.x,this.tension),eh.initCatmullRom(u.y,m.y,v.y,h.y,this.tension),th.initCatmullRom(u.z,m.z,v.z,h.z,this.tension));return n.set(Qu.calc(c),eh.calc(c),th.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Td(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function ag(i,e){let t=1-i;return t*t*e}function lg(i,e){return 2*(1-i)*i*e}function cg(i,e){return i*i*e}function Fo(i,e,t,n){return ag(i,e)+lg(i,t)+cg(i,n)}function ug(i,e){let t=1-i;return t*t*t*e}function hg(i,e){let t=1-i;return 3*t*t*i*e}function fg(i,e){return 3*(1-i)*i*i*e}function dg(i,e){return i*i*i*e}function Bo(i,e,t,n,s){return ug(i,e)+hg(i,t)+fg(i,n)+dg(i,s)}var jo=class extends ii{constructor(e=new Ie,t=new Ie,n=new Ie,s=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bo(e,s.x,r.x,o.x,a.x),Bo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bl=class extends ii{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bo(e,s.x,r.x,o.x,a.x),Bo(e,s.y,r.y,o.y,a.y),Bo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qo=class extends ii{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends ii{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends ii{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fo(e,s.x,r.x,o.x),Fo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zl=class extends ii{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fo(e,s.x,r.x,o.x),Fo(e,s.y,r.y,o.y),Fo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],m=s[o>s.length-3?s.length-1:o+2];return n.set(Td(a,c.x,u.x,h.x,m.x),Td(a,c.y,u.y,h.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ie().fromArray(s))}return this}},Ed=Object.freeze({__proto__:null,ArcCurve:Ul,CatmullRomCurve3:Fl,CubicBezierCurve:jo,CubicBezierCurve3:Bl,EllipseCurve:Br,LineCurve:Qo,LineCurve3:Ol,QuadraticBezierCurve:ea,QuadraticBezierCurve3:zl,SplineCurve:ta}),kl=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ed[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),u=c===0?0:1-o/c;return a.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let u=0;u<c.length;u++){let h=c[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ed[s.type]().fromJSON(s))}return this}},na=class extends kl{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qo(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ea(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new jo(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s),new Ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ta(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let u=new Br(e,t,n,s,r,o,a,c);if(this.curves.length>0){let m=u.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(u);let h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Or=class extends na{constructor(e){super(e),this.uuid=Yr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new na().fromJSON(s))}return this}};function pg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=y0(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,u;if(n&&(r=_g(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,m=c;for(let v=t;v<s;v+=t){let g=i[v],_=i[v+1];g<a&&(a=g),_<c&&(c=_),g>h&&(h=g),_>m&&(m=_)}u=Math.max(h-a,m-c),u=u!==0?32767/u:0}return ia(r,o,t,a,c,u,0),o}function y0(i,e,t,n,s){let r;if(s===Pg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=wd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=wd(o/n|0,i[o],i[o+1],r);return r&&zr(r,r.next)&&(ra(r),r=r.next),r}function Ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zr(t,t.next)||Qt(t.prev,t,t.next)===0)){if(ra(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ia(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Tg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,u=i.next;if(r?gg(i,n,s,r):mg(i)){e.push(c.i,i.i,u.i),ra(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=vg(Ws(i),e),ia(i,e,t,n,s,r,2)):o===2&&xg(i,e,t,n,s,r):ia(Ws(i),e,t,n,s,r,1);break}}}function mg(i){let e=i.prev,t=i,n=i.next;if(Qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,u=n.y,h=Math.min(s,r,o),m=Math.min(a,c,u),v=Math.max(s,r,o),g=Math.max(a,c,u),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=v&&_.y>=m&&_.y<=g&&Uo(s,a,r,c,o,u,_.x,_.y)&&Qt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function gg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Qt(s,r,o)>=0)return!1;let a=s.x,c=r.x,u=o.x,h=s.y,m=r.y,v=o.y,g=Math.min(a,c,u),_=Math.min(h,m,v),b=Math.max(a,c,u),l=Math.max(h,m,v),f=ch(g,_,e,t,n),d=ch(b,l,e,t,n),x=i.prevZ,p=i.nextZ;for(;x&&x.z>=f&&p&&p.z<=d;){if(x.x>=g&&x.x<=b&&x.y>=_&&x.y<=l&&x!==s&&x!==o&&Uo(a,h,c,m,u,v,x.x,x.y)&&Qt(x.prev,x,x.next)>=0||(x=x.prevZ,p.x>=g&&p.x<=b&&p.y>=_&&p.y<=l&&p!==s&&p!==o&&Uo(a,h,c,m,u,v,p.x,p.y)&&Qt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;x&&x.z>=f;){if(x.x>=g&&x.x<=b&&x.y>=_&&x.y<=l&&x!==s&&x!==o&&Uo(a,h,c,m,u,v,x.x,x.y)&&Qt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;p&&p.z<=d;){if(p.x>=g&&p.x<=b&&p.y>=_&&p.y<=l&&p!==s&&p!==o&&Uo(a,h,c,m,u,v,p.x,p.y)&&Qt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function vg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!zr(n,s)&&b0(n,t,t.next,s)&&sa(n,s)&&sa(s,n)&&(e.push(n.i,t.i,s.i),ra(t),ra(t.next),t=i=s),t=t.next}while(t!==i);return Ws(t)}function xg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ag(o,a)){let c=S0(o,a);o=Ws(o,o.next),c=Ws(c,c.next),ia(o,e,t,n,s,r,0),ia(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _g(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,u=y0(i,a,c,n,!1);u===u.next&&(u.steiner=!0),s.push(wg(u))}s.sort(yg);for(let r=0;r<s.length;r++)t=Mg(s[r],t);return t}function yg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Mg(i,e){let t=bg(i,e);if(!t)return e;let n=S0(t,i);return Ws(n,n.next),Ws(t,t.next)}function bg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(zr(i,t))return t;do{if(zr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let m=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=n&&m>r&&(r=m,o=t.x<t.next.x?t:t.next,m===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,u=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&M0(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)){let m=Math.abs(s-t.y)/(n-t.x);sa(t,i)&&(m<h||m===h&&(t.x>o.x||t.x===o.x&&Sg(o,t)))&&(o=t,h=m)}t=t.next}while(t!==a);return o}function Sg(i,e){return Qt(i.prev,i,e.prev)<0&&Qt(e.next,i,i.next)<0}function Tg(i,e,t,n){let s=i;do s.z===0&&(s.z=ch(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Eg(s)}function Eg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ch(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function M0(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Uo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&M0(i,e,t,n,s,r,o,a)}function Ag(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Rg(i,e)&&(sa(i,e)&&sa(e,i)&&Cg(i,e)&&(Qt(i.prev,i,e.prev)||Qt(i,e.prev,e))||zr(i,e)&&Qt(i.prev,i,i.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zr(i,e){return i.x===e.x&&i.y===e.y}function b0(i,e,t,n){let s=dl(Qt(i,e,t)),r=dl(Qt(i,e,n)),o=dl(Qt(t,n,i)),a=dl(Qt(t,n,e));return!!(s!==r&&o!==a||s===0&&fl(i,t,e)||r===0&&fl(i,n,e)||o===0&&fl(t,i,n)||a===0&&fl(t,e,n))}function fl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function dl(i){return i>0?1:i<0?-1:0}function Rg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&b0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function sa(i,e){return Qt(i.prev,i,i.next)<0?Qt(i,e,i.next)>=0&&Qt(i,i.prev,e)>=0:Qt(i,e,i.prev)<0||Qt(i,i.next,e)<0}function Cg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function S0(i,e){let t=uh(i.i,i.x,i.y),n=uh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function wd(i,e,t,n){let s=uh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ra(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var hh=class{static triangulate(e,t,n=2){return pg(e,t,n)}},Ar=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ad(e),Rd(n,e);let o=e.length;t.forEach(Ad);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Rd(n,t[c]);let a=hh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ad(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Rd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var oa=class i extends Nl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var nn=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),u=a+1,h=c+1,m=e/a,v=t/c,g=[],_=[],b=[],l=[];for(let f=0;f<h;f++){let d=f*v-o;for(let x=0;x<u;x++){let p=x*m-r;_.push(p,-d,0),b.push(0,0,1),l.push(x/a),l.push(1-f/c)}}for(let f=0;f<c;f++)for(let d=0;d<a;d++){let x=d+u*f,p=d+u*(f+1),M=d+1+u*(f+1),T=d+1+u*f;g.push(x,p,T),g.push(p,M,T)}this.setIndex(g),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(b,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var aa=class i extends yt{constructor(e=new Or([new Ie(0,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(o,2));function u(h){let m=s.length/3,v=h.extractPoints(t),g=v.shape,_=v.holes;Ar.isClockWise(g)===!1&&(g=g.reverse());for(let l=0,f=_.length;l<f;l++){let d=_[l];Ar.isClockWise(d)===!0&&(_[l]=d.reverse())}let b=Ar.triangulateShape(g,_);for(let l=0,f=_.length;l<f;l++){let d=_[l];g=g.concat(d)}for(let l=0,f=g.length;l<f;l++){let d=g[l];s.push(d.x,d.y,0),r.push(0,0,1),o.push(d.x,d.y)}for(let l=0,f=b.length;l<f;l++){let d=b[l],x=d[0]+m,p=d[1]+m,M=d[2]+m;n.push(x,p,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ig(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Ig(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var la=class i extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),u=0,h=[],m=new k,v=new k,g=[],_=[],b=[],l=[];for(let f=0;f<=n;f++){let d=[],x=f/n,p=o+x*a,M=e*Math.cos(p),T=Math.sqrt(e*e-M*M),E=0;f===0&&o===0?E=.5/t:f===n&&c===Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){let S=y/t,A=s+S*r;m.x=-T*Math.cos(A),m.y=M,m.z=T*Math.sin(A),_.push(m.x,m.y,m.z),v.copy(m).normalize(),b.push(v.x,v.y,v.z),l.push(S+E,1-x),d.push(u++)}h.push(d)}for(let f=0;f<n;f++)for(let d=0;d<t;d++){let x=h[f][d+1],p=h[f][d],M=h[f+1][d],T=h[f+1][d+1];(f!==0||o>0)&&g.push(x,p,T),(f!==n-1||c<Math.PI)&&g.push(p,M,T)}this.setIndex(g),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(b,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ca=class i extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],h=[],m=[],v=new k,g=new k,_=new k;for(let b=0;b<=n;b++){let l=o+b/n*a;for(let f=0;f<=s;f++){let d=f/s*r;g.x=(e+t*Math.cos(l))*Math.cos(d),g.y=(e+t*Math.cos(l))*Math.sin(d),g.z=t*Math.sin(l),u.push(g.x,g.y,g.z),v.x=e*Math.cos(d),v.y=e*Math.sin(d),_.subVectors(g,v).normalize(),h.push(_.x,_.y,_.z),m.push(f/s),m.push(b/n)}}for(let b=1;b<=n;b++)for(let l=1;l<=s;l++){let f=(s+1)*b+l-1,d=(s+1)*(b-1)+l-1,x=(s+1)*(b-1)+l,p=(s+1)*b+l;c.push(f,d,p),c.push(d,x,p)}this.setIndex(c),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function $s(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Cd(s))s.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Cd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Bn(i){let e={};for(let t=0;t<i.length;t++){let n=$s(i[t]);for(let s in n)e[s]=n[s]}return e}function Cd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Oh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var Js={clone:$s,merge:Bn},Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_t=class extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Lg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new it().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Hl=class extends _t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var an=class extends zi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kr=class extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vl=class extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function nh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Gl=class extends gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case oh:r=e,a=2*t-n;break;case ah:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case oh:o=e,c=2*n-t;break;case ah:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=this._offsetPrev,m=this._offsetNext,v=this._weightPrev,g=this._weightNext,_=(n-t)/(s-t),b=_*_,l=b*_,f=-v*l+2*v*b-v*_,d=(1+v)*l+(-1.5-2*v)*b+(-.5+v)*_+1,x=(-1-g)*l+(1.5+g)*b+.5*_,p=g*l-g*b;for(let M=0;M!==a;++M)r[M]=f*o[h+M]+d*o[u+M]+x*o[c+M]+p*o[m+M];return r}},Wl=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=(n-t)/(s-t),m=1-h;for(let v=0;v!==a;++v)r[v]=o[u+v]*m+o[c+v]*h;return r}},Xl=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ql=class extends gs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=this.inTangents,m=this.outTangents;if(!h||!m){let _=(n-t)/(s-t),b=1-_;for(let l=0;l!==a;++l)r[l]=o[u+l]*b+o[c+l]*_;return r}let v=a*2,g=e-1;for(let _=0;_!==a;++_){let b=o[u+_],l=o[c+_],f=g*v+_*2,d=m[f],x=m[f+1],p=e*v+_*2,M=h[p],T=h[p+1],E=Fg(n,t,d,M,s);r[_]=T0(E,b,x,T,l)}return r}};function T0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ug(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Fg(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=T0(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Ug(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var si=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),nh(e.settings)&&(n.settings={inTangents:Sr(e.settings.inTangents,Array),outTangents:Sr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ql(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Oo:t=this.InterpolantFactoryMethodDiscrete;break;case wl:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break;case sh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ut("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return wl;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;nh(this.settings)&&(Pd(this.settings.inTangents,e),Pd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(dt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(dt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){dt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){dt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&km(s))for(let a=0,c=s.length;a!==c;++a){let u=s[a];if(isNaN(u)){dt("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(s)c=!0;else{let m=a*n,v=m-n,g=m+n;for(let _=0;_!==n;++_){let b=t[m+_];if(b!==t[v+_]||b!==t[g+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let m=a*n,v=o*n;for(let g=0;g!==n;++g)t[v+g]=t[m+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,nh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=wl;var vs=class extends si{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Oo;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends si{constructor(e,t,n,s){super(e,t,n,s)}};Yl.prototype.ValueTypeName="color";var Zl=class extends si{constructor(e,t,n,s){super(e,t,n,s)}};Zl.prototype.ValueTypeName="number";var $l=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),u=e*a;for(let h=u+a;u!==h;u+=4)Tn.slerpFlat(r,0,o,u-a,o,u,c);return r}},ua=class extends si{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $l(this.times,this.values,this.getValueSize(),e)}};ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends si{constructor(e,t,n){super(e,t,n)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Oo;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends si{constructor(e,t,n,s){super(e,t,n,s)}};Jl.prototype.ValueTypeName="vector";var Kl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,m){return u.push(h,m),this},this.removeHandler=function(h){let m=u.indexOf(h);return m!==-1&&u.splice(m,2),this},this.getHandler=function(h){for(let m=0,v=u.length;m<v;m+=2){let g=u[m],_=u[m+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},E0=new Kl,jl=class{constructor(e){this.manager=e!==void 0?e:E0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ha=class extends Hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ih=new it,Id=new k,Ld=new k,fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Id.setFromMatrixPosition(e.matrixWorld),t.position.copy(Id),Ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ld),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ih.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ih,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Pr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),t.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pl=new k,ml=new Tn,Ui=new k,Qi=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pl,ml,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pl,ml,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new k,Dd=new Ie,Nd=new Ie,Rn=class extends Qi{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(Iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Nd),t.subVectors(Nd,Dd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Iu*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fh=class extends fa{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Vo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},da=class extends Hr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var _s=class extends Qi{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dh=class extends fa{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new dh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ys=class extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Tr=-90,Er=1,Ql=class extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(Tr,Er,e,t);s.layers=this.layers,this.add(s);let r=new Rn(Tr,Er,e,t);r.layers=this.layers,this.add(r);let o=new Rn(Tr,Er,e,t);o.layers=this.layers,this.add(o);let a=new Rn(Tr,Er,e,t);a.layers=this.layers,this.add(a);let c=new Rn(Tr,Er,e,t);c.layers=this.layers,this.add(c);let u=new Rn(Tr,Er,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let u of t)this.remove(u);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,u,h]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let l=!1;e.isWebGLRenderer===!0?l=e.state.buffers.depth.getReversed():l=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(m,v,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ec=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},pa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Bg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Bg(){this._document.hidden===!1&&this.reset()}var zh="\\[\\]\\.:\\/",Og=new RegExp("["+zh+"]","g"),kh="[^"+zh+"]",zg="[^"+zh.replace("\\.","")+"]",kg=/((?:WC+[\/:])*)/.source.replace("WC",kh),Hg=/(WCOD+)?/.source.replace("WCOD",zg),Vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),Wg=new RegExp("^"+kg+Hg+Vg+Gg+"$"),Xg=["material","materials","bones","map"],ph=class{constructor(e,t,n){let s=n||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Og,"")}static parseTrackName(e){let t=Wg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;dt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=ph;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j2=new Float32Array(1);var qh=class qh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};qh.prototype.isMatrix2=!0;var mh=qh;function Hh(i,e,t,n){let s=qg(n);switch(t){case Dh:return i*e;case Zs:return i*e/s.components*s.byteLength;case lc:return i*e/s.components*s.byteLength;case Ts:return i*e*2/s.components*s.byteLength;case cc:return i*e*2/s.components*s.byteLength;case Nh:return i*e*3/s.components*s.byteLength;case Jn:return i*e*4/s.components*s.byteLength;case uc:return i*e*4/s.components*s.byteLength;case xa:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:case pc:return Math.max(i,16)*Math.max(e,8)/4;case hc:case dc:return Math.max(i,8)*Math.max(e,8)/2;case mc:case gc:case xc:case _c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vc:case ba:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Uc:case Fc:case Bc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oc:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sa:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qg(i){switch(i){case Fn:case Ch:return{byteLength:1,components:1};case Xr:case Ph:case pn:return{byteLength:2,components:1};case oc:case ac:return{byteLength:2,components:4};case Ai:case rc:case pi:return{byteLength:4,components:1};case Ih:case Lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Y0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qg(i){let e=new WeakMap;function t(a,c){let u=a.array,h=a.usage,m=u.byteLength,v=i.createBuffer();i.bindBuffer(c,v),i.bufferData(c,u,h),a.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,c,u){let h=c.array,m=c.updateRanges;if(i.bindBuffer(u,a),m.length===0)i.bufferSubData(u,0,h);else{m.sort((g,_)=>g.start-_.start);let v=0;for(let g=1;g<m.length;g++){let _=m[v],b=m[g];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++v,m[v]=b)}m.length=v+1;for(let g=0,_=m.length;g<_;g++){let b=m[g];i.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var e1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t1=`#ifdef USE_ALPHAHASH
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
#endif`,n1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o1=`#ifdef USE_AOMAP
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
#endif`,a1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l1=`#ifdef USE_BATCHING
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
#endif`,c1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d1=`#ifdef USE_IRIDESCENCE
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
#endif`,p1=`#ifdef USE_BUMPMAP
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
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,M1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,b1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,S1=`#define PI 3.141592653589793
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
} // validated`,T1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,E1=`vec3 transformedNormal = objectNormal;
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
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P1="gl_FragColor = linearToOutputTexel( gl_FragColor );",I1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H1=`#ifdef USE_GRADIENTMAP
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
}`,V1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,q1=`#ifdef USE_ENVMAP
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
#endif`,Y1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K1=`PhysicalMaterial material;
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
#endif`,j1=`uniform sampler2D dfgLUT;
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
}`,Q1=`
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
#endif`,ev=`#if defined( RE_IndirectDiffuse )
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uv=`#if defined( USE_POINTS_UV )
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
#endif`,hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`#ifdef USE_MORPHTARGETS
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
#endif`,vv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_v=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sv=`#ifdef USE_NORMALMAP
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
#endif`,Tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zv=`float getShadowMask() {
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
}`,kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hv=`#ifdef USE_SKINNING
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
#endif`,Vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gv=`#ifdef USE_SKINNING
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
#endif`,Wv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#ifdef USE_TRANSMISSION
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
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
}`,ax=`#if DEPTH_PACKING == 3200
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
}`,lx=`#define DISTANCE
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
}`,cx=`#define DISTANCE
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#define LAMBERT
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
}`,vx=`#define LAMBERT
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
}`,xx=`#define MATCAP
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
}`,_x=`#define MATCAP
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
}`,yx=`#define NORMAL
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
}`,Mx=`#define NORMAL
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
}`,bx=`#define PHONG
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
}`,Sx=`#define PHONG
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
}`,Tx=`#define STANDARD
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
}`,Ex=`#define STANDARD
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
}`,wx=`#define TOON
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
}`,Ax=`#define TOON
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
}`,Rx=`uniform float size;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Lx=`uniform float rotation;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:e1,alphahash_pars_fragment:t1,alphamap_fragment:n1,alphamap_pars_fragment:i1,alphatest_fragment:s1,alphatest_pars_fragment:r1,aomap_fragment:o1,aomap_pars_fragment:a1,batching_pars_vertex:l1,batching_vertex:c1,begin_vertex:u1,beginnormal_vertex:h1,bsdfs:f1,iridescence_fragment:d1,bumpmap_pars_fragment:p1,clipping_planes_fragment:m1,clipping_planes_pars_fragment:g1,clipping_planes_pars_vertex:v1,clipping_planes_vertex:x1,color_fragment:_1,color_pars_fragment:y1,color_pars_vertex:M1,color_vertex:b1,common:S1,cube_uv_reflection_fragment:T1,defaultnormal_vertex:E1,displacementmap_pars_vertex:w1,displacementmap_vertex:A1,emissivemap_fragment:R1,emissivemap_pars_fragment:C1,colorspace_fragment:P1,colorspace_pars_fragment:I1,envmap_fragment:L1,envmap_common_pars_fragment:D1,envmap_pars_fragment:N1,envmap_pars_vertex:U1,envmap_physical_pars_fragment:q1,envmap_vertex:F1,fog_vertex:B1,fog_pars_vertex:O1,fog_fragment:z1,fog_pars_fragment:k1,gradientmap_pars_fragment:H1,lightmap_pars_fragment:V1,lights_lambert_fragment:G1,lights_lambert_pars_fragment:W1,lights_pars_begin:X1,lights_toon_fragment:Y1,lights_toon_pars_fragment:Z1,lights_phong_fragment:$1,lights_phong_pars_fragment:J1,lights_physical_fragment:K1,lights_physical_pars_fragment:j1,lights_fragment_begin:Q1,lights_fragment_maps:ev,lights_fragment_end:tv,lightprobes_pars_fragment:nv,logdepthbuf_fragment:iv,logdepthbuf_pars_fragment:sv,logdepthbuf_pars_vertex:rv,logdepthbuf_vertex:ov,map_fragment:av,map_pars_fragment:lv,map_particle_fragment:cv,map_particle_pars_fragment:uv,metalnessmap_fragment:hv,metalnessmap_pars_fragment:fv,morphinstance_vertex:dv,morphcolor_vertex:pv,morphnormal_vertex:mv,morphtarget_pars_vertex:gv,morphtarget_vertex:vv,normal_fragment_begin:xv,normal_fragment_maps:_v,normal_pars_fragment:yv,normal_pars_vertex:Mv,normal_vertex:bv,normalmap_pars_fragment:Sv,clearcoat_normal_fragment_begin:Tv,clearcoat_normal_fragment_maps:Ev,clearcoat_pars_fragment:wv,iridescence_pars_fragment:Av,opaque_fragment:Rv,packing:Cv,premultiplied_alpha_fragment:Pv,project_vertex:Iv,dithering_fragment:Lv,dithering_pars_fragment:Dv,roughnessmap_fragment:Nv,roughnessmap_pars_fragment:Uv,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Bv,shadowmap_vertex:Ov,shadowmask_pars_fragment:zv,skinbase_vertex:kv,skinning_pars_vertex:Hv,skinning_vertex:Vv,skinnormal_vertex:Gv,specularmap_fragment:Wv,specularmap_pars_fragment:Xv,tonemapping_fragment:qv,tonemapping_pars_fragment:Yv,transmission_fragment:Zv,transmission_pars_fragment:$v,uv_pars_fragment:Jv,uv_pars_vertex:Kv,uv_vertex:jv,worldpos_vertex:Qv,background_vert:ex,background_frag:tx,backgroundCube_vert:nx,backgroundCube_frag:ix,cube_vert:sx,cube_frag:rx,depth_vert:ox,depth_frag:ax,distance_vert:lx,distance_frag:cx,equirect_vert:ux,equirect_frag:hx,linedashed_vert:fx,linedashed_frag:dx,meshbasic_vert:px,meshbasic_frag:mx,meshlambert_vert:gx,meshlambert_frag:vx,meshmatcap_vert:xx,meshmatcap_frag:_x,meshnormal_vert:yx,meshnormal_frag:Mx,meshphong_vert:bx,meshphong_frag:Sx,meshphysical_vert:Tx,meshphysical_frag:Ex,meshtoon_vert:wx,meshtoon_frag:Ax,points_vert:Rx,points_frag:Cx,shadow_vert:Px,shadow_frag:Ix,sprite_vert:Lx,sprite_frag:Dx},Ve={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Hi={basic:{uniforms:Bn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Bn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Bn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Bn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Bn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Te(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Bn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Bn([Ve.points,Ve.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Bn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Bn([Ve.common,Ve.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Bn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Bn([Ve.sprite,Ve.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Bn([Ve.common,Ve.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Bn([Ve.lights,Ve.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Hi.physical={uniforms:Bn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Wc={r:0,b:0,g:0},Nx=new it,Z0=new pt;Z0.set(-1,0,0,0,1,0,0,0,1);function Ux(i,e,t,n,s,r){let o=new Te(0),a=s===!0?0:1,c,u,h=null,m=0,v=null;function g(d){let x=d.isScene===!0?d.background:null;if(x&&x.isTexture){let p=d.backgroundBlurriness>0;x=e.get(x,p)}return x}function _(d){let x=!1,p=g(d);p===null?l(o,a):p&&p.isColor&&(l(p,1),x=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(d,x){let p=g(x);p&&(p.isCubeTexture||p.mapping===ga)?(u===void 0&&(u=new gt(new Vt(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:$s(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=p,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(x.backgroundRotation)).transpose(),p.isCubeTexture&&p.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Z0),u.material.toneMapped=bt.getTransfer(p.colorSpace)!==Ct,(h!==p||m!==p.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,h=p,m=p.version,v=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new gt(new nn(2,2),new _t({name:"BackgroundMaterial",uniforms:$s(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=bt.getTransfer(p.colorSpace)!==Ct,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||m!==p.version||v!==i.toneMapping)&&(c.material.needsUpdate=!0,h=p,m=p.version,v=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function l(d,x){d.getRGB(Wc,Oh(i)),t.buffers.color.setClear(Wc.r,Wc.g,Wc.b,x,r)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,x=1){o.set(d),a=x,l(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,l(o,a)},render:_,addToRenderList:b,dispose:f}}function Fx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=v(null),r=s,o=!1;function a(R,P,I,C,L){let O=!1,H=m(R,C,I,P);r!==H&&(r=H,u(r.object)),O=g(R,C,I,L),O&&_(R,C,I,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,p(R,P,I,C),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function u(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function m(R,P,I,C){let L=C.wireframe===!0,O=n[P.id];O===void 0&&(O={},n[P.id]=O);let H=R.isInstancedMesh===!0?R.id:0,W=O[H];W===void 0&&(W={},O[H]=W);let D=W[I.id];D===void 0&&(D={},W[I.id]=D);let z=D[L];return z===void 0&&(z=v(c()),D[L]=z),z}function v(R){let P=[],I=[],C=[];for(let L=0;L<t;L++)P[L]=0,I[L]=0,C[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:C,object:R,attributes:{},index:null}}function g(R,P,I,C){let L=r.attributes,O=P.attributes,H=0,W=I.getAttributes();for(let D in W)if(W[D].location>=0){let V=L[D],ee=O[D];if(ee===void 0&&(D==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),D==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),V===void 0||V.attribute!==ee||ee&&V.data!==ee.data)return!0;H++}return r.attributesNum!==H||r.index!==C}function _(R,P,I,C){let L={},O=P.attributes,H=0,W=I.getAttributes();for(let D in W)if(W[D].location>=0){let V=O[D];V===void 0&&(D==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),D==="instanceColor"&&R.instanceColor&&(V=R.instanceColor));let ee={};ee.attribute=V,V&&V.data&&(ee.data=V.data),L[D]=ee,H++}r.attributes=L,r.attributesNum=H,r.index=C}function b(){let R=r.newAttributes;for(let P=0,I=R.length;P<I;P++)R[P]=0}function l(R){f(R,0)}function f(R,P){let I=r.newAttributes,C=r.enabledAttributes,L=r.attributeDivisors;I[R]=1,C[R]===0&&(i.enableVertexAttribArray(R),C[R]=1),L[R]!==P&&(i.vertexAttribDivisor(R,P),L[R]=P)}function d(){let R=r.newAttributes,P=r.enabledAttributes;for(let I=0,C=P.length;I<C;I++)P[I]!==R[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function x(R,P,I,C,L,O,H){H===!0?i.vertexAttribIPointer(R,P,I,L,O):i.vertexAttribPointer(R,P,I,C,L,O)}function p(R,P,I,C){b();let L=C.attributes,O=I.getAttributes(),H=P.defaultAttributeValues;for(let W in O){let D=O[W];if(D.location>=0){let z=L[W];if(z===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),z!==void 0){let V=z.normalized,ee=z.itemSize,le=e.get(z);if(le===void 0)continue;let Xe=le.buffer,Ae=le.type,Be=le.bytesPerElement,J=Ae===i.INT||Ae===i.UNSIGNED_INT||z.gpuType===rc;if(z.isInterleavedBufferAttribute){let Z=z.data,Me=Z.stride,Le=z.offset;if(Z.isInstancedInterleavedBuffer){for(let we=0;we<D.locationSize;we++)f(D.location+we,Z.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let we=0;we<D.locationSize;we++)l(D.location+we);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let we=0;we<D.locationSize;we++)x(D.location+we,ee/D.locationSize,Ae,V,Me*Be,(Le+ee/D.locationSize*we)*Be,J)}else{if(z.isInstancedBufferAttribute){for(let Z=0;Z<D.locationSize;Z++)f(D.location+Z,z.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Z=0;Z<D.locationSize;Z++)l(D.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Z=0;Z<D.locationSize;Z++)x(D.location+Z,ee/D.locationSize,Ae,V,ee*Be,ee/D.locationSize*Z*Be,J)}}else if(H!==void 0){let V=H[W];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(D.location,V);break;case 3:i.vertexAttrib3fv(D.location,V);break;case 4:i.vertexAttrib4fv(D.location,V);break;default:i.vertexAttrib1fv(D.location,V)}}}}d()}function M(){S();for(let R in n){let P=n[R];for(let I in P){let C=P[I];for(let L in C){let O=C[L];for(let H in O)h(O[H].object),delete O[H];delete C[L]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let P=n[R.id];for(let I in P){let C=P[I];for(let L in C){let O=C[L];for(let H in O)h(O[H].object),delete O[H];delete C[L]}}delete n[R.id]}function E(R){for(let P in n){let I=n[P];for(let C in I){let L=I[C];if(L[R.id]===void 0)continue;let O=L[R.id];for(let H in O)h(O[H].object),delete O[H];delete L[R.id]}}}function y(R){for(let P in n){let I=n[P],C=R.isInstancedMesh===!0?R.id:0,L=I[C];if(L!==void 0){for(let O in L){let H=L[O];for(let W in H)h(H[W].object),delete H[W];delete L[O]}delete I[C],Object.keys(I).length===0&&delete n[P]}}}function S(){A(),o=!0,r!==s&&(r=s,u(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:l,disableUnusedAttributes:d}}function Bx(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let v=0;for(let g=0;g<h;g++)v+=u[g];t.update(v,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ox(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Jn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let y=E===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Fn&&E!==pi&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(ut("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let m=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&v===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),l=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:v,maxTextures:g,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:l,maxAttributes:f,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:p,maxSamples:M,samples:T}}function zx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ti,a=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){let g=m.length!==0||v||n!==0||s;return s=v,n=m.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,v){t=h(m,v,0)},this.setState=function(m,v,g){let _=m.clippingPlanes,b=m.clipIntersection,l=m.clipShadows,f=i.get(m);if(!s||_===null||_.length===0||r&&!l)r?h(null):u();else{let d=r?0:n,x=d*4,p=f.clippingState||null;c.value=p,p=h(_,v,x,g);for(let M=0;M!==x;++M)p[M]=t[M];f.clippingState=p,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=d}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,v,g,_){let b=m!==null?m.length:0,l=null;if(b!==0){if(l=c.value,_!==!0||l===null){let f=g+b*4,d=v.matrixWorldInverse;a.getNormalMatrix(d),(l===null||l.length<f)&&(l=new Float32Array(f));for(let x=0,p=g;x!==b;++x,p+=4)o.copy(m[x]).applyMatrix4(d,a),o.normal.toArray(l,p),l[p+3]=o.constant}c.value=l,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,l}}var $r=4,kx=6,Hx=20,Vx=256,Ta=new _s,w0=new Te,Yh=null,Zh=0,$h=0,Jh=!1,Gx=new k,Ks=new k,qc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Gx}=r;Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yh,Zh,$h),this._renderer.xr.enabled=Jh,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:pn,format:Jn,colorSpace:zo,depthBuffer:!1},s=A0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wx(r)),this._blurMaterial=qx(r,e,t),this._ggxMaterial=Xx(r,e,t)}return s}_compileMaterial(e){let t=new gt(new yt,e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,s,r){let c=new Rn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,g=m.toneMapping;m.getClearColor(w0),m.toneMapping=wi,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new Vt,new on({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,l=b.material,f=!1,d=e.background;d?d.isColor&&(l.color.copy(d),e.background=null,f=!0):(l.color.copy(w0),f=!0);for(let x=0;x<6;x++){let p=x%3;p===0?(c.up.set(0,u[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):p===1?(c.up.set(0,0,u[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,u[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));let M=this._cubeSize;Zr(s,p*M,x>2?M:0,M,M),m.setRenderTarget(s),f&&m.render(b,c),m.render(e,c)}m.toneMapping=g,m.autoClear=v,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===bs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Zr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ta)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),m=Math.sqrt(u*u-h*h),v=u*1.25,g=m*v,{_lodMax:_}=this,b=this._sizeLods[n],l=3*b*(n>_-$r?n-_+$r:0),f=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=_-t,Zr(r,l,f,3*b,2*b),s.setRenderTarget(r),s.render(a,Ta),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Zr(e,l,f,3*b,2*b),s.setRenderTarget(e),s.render(a,Ta)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let u=a.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],m=3*h*(s>this._lodMax-$r?s-this._lodMax+$r:0),v=4*(this._cubeSize-h);Zr(t,m,v,3*h,2*h),o.setRenderTarget(t),o.render(c,Ta)}};function Wx(i){let e=[],t=[],n=i,s=i-$r+1+kx;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,u=1+a,h=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,v=6,g=3,_=new Float32Array(g*v*m),b=new Float32Array(g*v*m);for(let f=0;f<m;f++){let d=f%3*2/3-1,x=f>2?0:-1,p=[d,x,0,d+2/3,x,0,d+2/3,x+1,0,d,x,0,d+2/3,x+1,0,d,x+1,0];_.set(p,g*v*f);for(let M=0;M<v;M++){let T=h[M*2]*2-1,E=h[M*2+1]*2-1;f===0?Ks.set(1,E,T):f===1?Ks.set(-T,1,-E):f===2?Ks.set(-T,E,1):f===3?Ks.set(-1,E,-T):f===4?Ks.set(-T,-1,E):Ks.set(T,E,-1),Ks.toArray(b,(f*v+M)*g)}}let l=new yt;l.setAttribute("position",new Bt(_,g)),l.setAttribute("outputDirection",new Bt(b,g)),t.push(new gt(l,null)),n>$r&&n--}return{lodMeshes:t,sizeLods:e}}function A0(i,e,t){let n=new Ut(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xx(i,e,t){return new _t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function qx(i,e,t){return new _t({name:"SphericalGaussianBlur",defines:{SAMPLES:Hx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function R0(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function C0(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function $c(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Yc=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new _t({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Vn});r.uniforms.tEquirect.value=t;let o=new gt(s,r),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Ot),new Ql(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Yx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(v,g=!1){return v==null?null:g?o(v):r(v)}function r(v){if(v&&v.isTexture){let g=v.mapping;if(g===nc||g===ic)if(e.has(v)){let _=e.get(v).texture;return a(_,v.mapping)}else{let _=v.image;if(_&&_.height>0){let b=new Yc(_.height);return b.fromEquirectangularTexture(i,v),e.set(v,b),v.addEventListener("dispose",u),a(b.texture,v.mapping)}else return null}}return v}function o(v){if(v&&v.isTexture){let g=v.mapping,_=g===nc||g===ic,b=g===bs||g===Ys;if(_||b){let l=t.get(v),f=l!==void 0?l.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==f)return n===null&&(n=new qc(i)),l=_?n.fromEquirectangular(v,l):n.fromCubemap(v,l),l.texture.pmremVersion=v.pmremVersion,t.set(v,l),l.texture;if(l!==void 0)return l.texture;{let d=v.image;return _&&d&&d.height>0||b&&d&&c(d)?(n===null&&(n=new qc(i)),l=_?n.fromEquirectangular(v):n.fromCubemap(v),l.texture.pmremVersion=v.pmremVersion,t.set(v,l),v.addEventListener("dispose",h),l.texture):null}}}return v}function a(v,g){return g===nc?v.mapping=bs:g===ic&&(v.mapping=Ys),v}function c(v){let g=0,_=6;for(let b=0;b<_;b++)v[b]!==void 0&&g++;return g===_}function u(v){let g=v.target;g.removeEventListener("dispose",u);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function h(v){let g=v.target;g.removeEventListener("dispose",h);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Zx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hs("WebGLRenderer: "+n+" extension not supported."),s}}}function $x(i,e,t,n){let s={},r=new WeakMap;function o(m){let v=m.target;v.index!==null&&e.remove(v.index);for(let _ in v.attributes)e.remove(v.attributes[_]);v.removeEventListener("dispose",o),delete s[v.id];let g=r.get(v);g&&(e.remove(g),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function a(m,v){return s[v.id]===!0||(v.addEventListener("dispose",o),s[v.id]=!0,t.memory.geometries++),v}function c(m){let v=m.attributes;for(let g in v)e.update(v[g],i.ARRAY_BUFFER)}function u(m){let v=[],g=m.index,_=m.attributes.position,b=0;if(_===void 0)return;if(g!==null){let d=g.array;b=g.version;for(let x=0,p=d.length;x<p;x+=3){let M=d[x+0],T=d[x+1],E=d[x+2];v.push(M,T,T,E,E,M)}}else{let d=_.array;b=_.version;for(let x=0,p=d.length/3-1;x<p;x+=3){let M=x+0,T=x+1,E=x+2;v.push(M,T,T,E,E,M)}}let l=new(_.count>=65535?Yo:qo)(v,1);l.version=b;let f=r.get(m);f&&e.remove(f),r.set(m,l)}function h(m){let v=r.get(m);if(v){let g=m.index;g!==null&&v.version<g.version&&u(m)}else u(m);return r.get(m)}return{get:a,update:c,getWireframeAttribute:h}}function Jx(i,e,t){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function c(m,v){i.drawElements(n,v,r,m*o),t.update(v,n,1)}function u(m,v,g){g!==0&&(i.drawElementsInstanced(n,v,r,m*o,g),t.update(v,n,g))}function h(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,r,m,0,g);let b=0;for(let l=0;l<g;l++)b+=v[l];t.update(b,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function Kx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:dt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jx(i,e,t){let n=new WeakMap,s=new St;function r(o,a,c){let u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=h!==void 0?h.length:0,v=n.get(a);if(v===void 0||v.count!==m){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};v!==void 0&&v.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,l=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],d=a.morphAttributes.color||[],x=0;g===!0&&(x=1),_===!0&&(x=2),b===!0&&(x=3);let p=a.attributes.position.count*x,M=1;p>e.maxTextureSize&&(M=Math.ceil(p/e.maxTextureSize),p=e.maxTextureSize);let T=new Float32Array(p*M*4*m),E=new Go(T,p,M,m);E.type=pi,E.needsUpdate=!0;let y=x*4;for(let A=0;A<m;A++){let R=l[A],P=f[A],I=d[A],C=p*M*4*A;for(let L=0;L<R.count;L++){let O=L*y;g===!0&&(s.fromBufferAttribute(R,L),T[C+O+0]=s.x,T[C+O+1]=s.y,T[C+O+2]=s.z,T[C+O+3]=0),_===!0&&(s.fromBufferAttribute(P,L),T[C+O+4]=s.x,T[C+O+5]=s.y,T[C+O+6]=s.z,T[C+O+7]=0),b===!0&&(s.fromBufferAttribute(I,L),T[C+O+8]=s.x,T[C+O+9]=s.y,T[C+O+10]=s.z,T[C+O+11]=I.itemSize===4?s.w:1)}}v={count:m,texture:E,size:new Ie(p,M)},n.set(a,v),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let b=0;b<u.length;b++)g+=u[b];let _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:r}}function Qx(i,e,t,n,s){let r=new WeakMap;function o(u){let h=s.render.frame,m=u.geometry,v=e.get(u,m);if(r.get(v)!==h&&(e.update(v),r.set(v,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let g=u.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return v}function a(){r=new WeakMap}function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var e_={[bh]:"LINEAR_TONE_MAPPING",[Sh]:"REINHARD_TONE_MAPPING",[Th]:"CINEON_TONE_MAPPING",[Eh]:"ACES_FILMIC_TONE_MAPPING",[Ah]:"AGX_TONE_MAPPING",[ma]:"NEUTRAL_TONE_MAPPING",[wh]:"CUSTOM_TONE_MAPPING"};function t_(i,e,t,n,s,r){let o=new Ut(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,u=new yt;u.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Je([0,2,0,0,2,0],2));let h=new Hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new gt(u,h),v=new _s(-1,1,1,-1,0,1),g=null,_=null,b=!1,l,f=null,d=[],x=!1;this.setSize=function(p,M){o.setSize(p,M),a!==null&&a.setSize(p,M),c!==null&&c.setSize(p,M);for(let T=0;T<d.length;T++){let E=d[T];E.setSize&&E.setSize(p,M)}},this.setEffects=function(p){d=p,x=d.length>0&&d[0].isRenderPass===!0;let M=o.width,T=o.height;d.length>0&&a===null&&(a=new Ut(M,T,{type:pn,depthBuffer:!1,stencilBuffer:!1}),c=new Ut(M,T,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<d.length;E++){let y=d[E];y.setSize&&y.setSize(M,T)}},this.begin=function(p,M){if(b||p.toneMapping===wi&&d.length===0)return!1;if(f=M,M!==null){let T=M.width,E=M.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return x===!1&&p.setRenderTarget(o),l=p.toneMapping,p.toneMapping=wi,!0},this.hasRenderPass=function(){return x},this.end=function(p,M){p.toneMapping=l,b=!0;let T=o,E=a;for(let y=0;y<d.length;y++){let S=d[y];S.enabled!==!1&&(S.render(p,E,T,M),S.needsSwap!==!1&&(T=E,E=E===a?c:a))}if(g!==p.outputColorSpace||_!==p.toneMapping){g=p.outputColorSpace,_=p.toneMapping,h.defines={},bt.getTransfer(g)===Ct&&(h.defines.SRGB_TRANSFER="");let y=e_[_];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,p.setRenderTarget(f),p.render(m,v),f=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}var $0=new kn,Qh=new ms(1,1),J0=new Go,K0=new Cl,j0=new Jo,P0=[],I0=[],L0=new Float32Array(16),D0=new Float32Array(9),N0=new Float32Array(4);function Kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=P0[s];if(r===void 0&&(r=new Float32Array(s),P0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jc(i,e){let t=I0[e];t===void 0&&(t=new Int32Array(e),I0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),vn(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),vn(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),vn(t,e)}}function o_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;N0.set(n),i.uniformMatrix2fv(this.addr,!1,N0),vn(t,n)}}function a_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;D0.set(n),i.uniformMatrix3fv(this.addr,!1,D0),vn(t,n)}}function l_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;L0.set(n),i.uniformMatrix4fv(this.addr,!1,L0),vn(t,n)}}function c_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),vn(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),vn(t,e)}}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),vn(t,e)}}function d_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),vn(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),vn(t,e)}}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),vn(t,e)}}function v_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qh.compareFunction=t.isReversedDepthBuffer()?Gc:Vc,r=Qh):r=$0,t.setTexture2D(e||r,s)}function x_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||K0,s)}function __(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||j0,s)}function y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||J0,s)}function M_(i){switch(i){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return u_;case 35668:case 35672:return h_;case 35669:case 35673:return f_;case 5125:return d_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return y_}}function b_(i,e){i.uniform1fv(this.addr,e)}function S_(i,e){let t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function T_(i,e){let t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function E_(i,e){let t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function w_(i,e){let t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function A_(i,e){let t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function R_(i,e){let t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function C_(i,e){i.uniform1iv(this.addr,e)}function P_(i,e){i.uniform2iv(this.addr,e)}function I_(i,e){i.uniform3iv(this.addr,e)}function L_(i,e){i.uniform4iv(this.addr,e)}function D_(i,e){i.uniform1uiv(this.addr,e)}function N_(i,e){i.uniform2uiv(this.addr,e)}function U_(i,e){i.uniform3uiv(this.addr,e)}function F_(i,e){i.uniform4uiv(this.addr,e)}function B_(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Qh:o=$0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function O_(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||K0,r[o])}function z_(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||j0,r[o])}function k_(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||J0,r[o])}function H_(i){switch(i){case 5126:return b_;case 35664:return S_;case 35665:return T_;case 35666:return E_;case 35674:return w_;case 35675:return A_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return P_;case 35668:case 35672:return I_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return N_;case 36295:return U_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return k_}}var ef=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M_(t.type)}},tf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H_(t.type)}},nf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Kh=/(\w+)(\])?(\[|\.)?/g;function U0(i,e){i.seq.push(e),i.map[e.id]=e}function V_(i,e,t){let n=i.name,s=n.length;for(Kh.lastIndex=0;;){let r=Kh.exec(n),o=Kh.lastIndex,a=r[1],c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){U0(t,u===void 0?new ef(a,i,e):new tf(a,i,e));break}else{let m=t.map[a];m===void 0&&(m=new nf(a),U0(t,m)),t=m}}}var Jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);V_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function F0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var G_=37297,W_=0;function X_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var B0=new pt;function q_(i){bt._getMatrix(B0,bt.workingColorSpace,i);let e=`mat3( ${B0.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case ko:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function O0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+X_(i.getShaderSource(e),a)}else return r}function Y_(i,e){let t=q_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Z_={[bh]:"Linear",[Sh]:"Reinhard",[Th]:"Cineon",[Eh]:"ACESFilmic",[Ah]:"AgX",[ma]:"Neutral",[wh]:"Custom"};function $_(i,e){let t=Z_[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xc=new k;function J_(){bt.getLuminanceCoefficients(Xc);let i=Xc.x.toFixed(4),e=Xc.y.toFixed(4),t=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function j_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wa(i){return i!==""}function z0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function sf(i){return i.replace(ey,ny)}var ty=new Map;function ny(i,e){let t=ft[e];if(t===void 0){let n=ty.get(e);if(n!==void 0)t=ft[n],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sf(t)}var iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H0(i){return i.replace(iy,sy)}function sy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function V0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var ry={[Xs]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function oy(i){return ry[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ay={[bs]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE_UV"};function ly(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ay[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var cy={[Ys]:"ENVMAP_MODE_REFRACTION"};function uy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":cy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hy={[Mh]:"ENVMAP_BLENDING_MULTIPLY",[n0]:"ENVMAP_BLENDING_MIX",[i0]:"ENVMAP_BLENDING_ADD"};function fy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hy[i.combine]||"ENVMAP_BLENDING_NONE"}function dy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function py(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=oy(t),u=ly(t),h=uy(t),m=fy(t),v=dy(t),g=K_(t),_=j_(r),b=s.createProgram(),l,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wa).join(`
`),l.length>0&&(l+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wa).join(`
`),f.length>0&&(f+=`
`)):(l=[V0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),f=[V0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?ft.tonemapping_pars_fragment:"",t.toneMapping!==wi?$_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Y_("linearToOutputTexel",t.outputColorSpace),J_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),o=sf(o),o=z0(o,t),o=k0(o,t),a=sf(a),a=z0(a,t),a=k0(a,t),o=H0(o),a=H0(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,l=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,f=["#define varying in",t.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=d+l+o,p=d+f+a,M=F0(s,s.VERTEX_SHADER,x),T=F0(s,s.FRAGMENT_SHADER,p);s.attachShader(b,M),s.attachShader(b,T),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function E(R){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(b)||"",I=s.getShaderInfoLog(M)||"",C=s.getShaderInfoLog(T)||"",L=P.trim(),O=I.trim(),H=C.trim(),W=!0,D=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,M,T);else{let z=O0(s,M,"vertex"),V=O0(s,T,"fragment");dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+z+`
`+V)}else L!==""?ut("WebGLProgram: Program Info Log:",L):(O===""||H==="")&&(D=!1);D&&(R.diagnostics={runnable:W,programLog:L,vertexShader:{log:O,prefix:l},fragmentShader:{log:H,prefix:f}})}s.deleteShader(M),s.deleteShader(T),y=new Jr(s,b),S=Q_(s,b)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(b,G_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W_++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=T,this}var my=0,rf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new of(e),t.set(e,n)),n}},of=class{constructor(e){this.id=my++,this.code=e,this.usedTimes=0}};function gy(i){return i===Ts||i===ba||i===Sa}function vy(i,e,t,n,s,r){let o=new Wo,a=new rf,c=new Set,u=[],h=new Map,m=n.logarithmicDepthBuffer,v=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function b(y,S,A,R,P,I){let C=R.fog,L=P.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,W=e.get(y.envMap||O,H),D=W&&W.mapping===ga?W.image.height:null,z=g[y.type];y.precision!==null&&(v=n.getMaxPrecision(y.precision),v!==y.precision&&ut("WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));let V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=V!==void 0?V.length:0,le=0;L.morphAttributes.position!==void 0&&(le=1),L.morphAttributes.normal!==void 0&&(le=2),L.morphAttributes.color!==void 0&&(le=3);let Xe,Ae,Be,J;if(z){let It=Hi[z];Xe=It.vertexShader,Ae=It.fragmentShader}else{Xe=y.vertexShader,Ae=y.fragmentShader;let It=a.getVertexShaderStage(y),lt=a.getFragmentShaderStage(y);a.update(y,It,lt),Be=It.id,J=lt.id}let Z=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Le=P.isInstancedMesh===!0,we=P.isBatchedMesh===!0,Ge=!!y.map,Ke=!!y.matcap,Oe=!!W,mt=!!y.aoMap,Q=!!y.lightMap,ge=!!y.bumpMap&&y.wireframe===!1,Ee=!!y.normalMap,K=!!y.displacementMap,te=!!y.emissiveMap,re=!!y.metalnessMap,se=!!y.roughnessMap,F=y.anisotropy>0,ve=y.clearcoat>0,j=y.dispersion>0,U=y.retroreflectivity>0,w=y.iridescence>0,G=y.sheen>0,Y=y.transmission>0,B=F&&!!y.anisotropyMap,ce=ve&&!!y.clearcoatMap,ye=ve&&!!y.clearcoatNormalMap,oe=ve&&!!y.clearcoatRoughnessMap,he=w&&!!y.iridescenceMap,me=w&&!!y.iridescenceThicknessMap,Ce=G&&!!y.sheenColorMap,xe=G&&!!y.sheenRoughnessMap,_e=!!y.specularMap,Ue=!!y.specularColorMap,je=!!y.specularIntensityMap,et=Y&&!!y.transmissionMap,X=Y&&!!y.thicknessMap,Pe=!!y.gradientMap,de=!!y.alphaMap,De=y.alphaTest>0,ke=!!y.alphaHash,Se=!!y.extensions,nt=wi;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(nt=i.toneMapping);let Qe={shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:Xe,fragmentShader:Ae,defines:y.defines,customVertexShaderID:Be,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:we,batchingColor:we&&P._colorsTexture!==null,instancing:Le,instancingColor:Le&&P.instanceColor!==null,instancingMorph:Le&&P.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:Ke,envMap:Oe,envMapMode:Oe&&W.mapping,envMapCubeUVHeight:D,aoMap:mt,lightMap:Q,bumpMap:ge,normalMap:Ee,displacementMap:K,emissiveMap:te,normalMapObjectSpace:Ee&&y.normalMapType===o0,normalMapTangentSpace:Ee&&y.normalMapType===Hc,packedNormalMap:Ee&&y.normalMapType===Hc&&gy(y.normalMap.format),metalnessMap:re,roughnessMap:se,anisotropy:F,anisotropyMap:B,clearcoat:ve,clearcoatMap:ce,clearcoatNormalMap:ye,clearcoatRoughnessMap:oe,dispersion:j,retroreflection:U,iridescence:w,iridescenceMap:he,iridescenceThicknessMap:me,sheen:G,sheenColorMap:Ce,sheenRoughnessMap:xe,specularMap:_e,specularColorMap:Ue,specularIntensityMap:je,transmission:Y,transmissionMap:et,thicknessMap:X,gradientMap:Pe,opaque:y.transparent===!1&&y.blending===Wr&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:De,alphaHash:ke,combine:y.combine,mapUv:Ge&&_(y.map.channel),aoMapUv:mt&&_(y.aoMap.channel),lightMapUv:Q&&_(y.lightMap.channel),bumpMapUv:ge&&_(y.bumpMap.channel),normalMapUv:Ee&&_(y.normalMap.channel),displacementMapUv:K&&_(y.displacementMap.channel),emissiveMapUv:te&&_(y.emissiveMap.channel),metalnessMapUv:re&&_(y.metalnessMap.channel),roughnessMapUv:se&&_(y.roughnessMap.channel),anisotropyMapUv:B&&_(y.anisotropyMap.channel),clearcoatMapUv:ce&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(y.sheenRoughnessMap.channel),specularMapUv:_e&&_(y.specularMap.channel),specularColorMapUv:Ue&&_(y.specularColorMap.channel),specularIntensityMapUv:je&&_(y.specularIntensityMap.channel),transmissionMapUv:et&&_(y.transmissionMap.channel),thicknessMapUv:X&&_(y.thicknessMap.channel),alphaMapUv:de&&_(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ee||F),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Ge||de),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&Ee===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Me,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:le,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&bt.getTransfer(y.map.colorSpace)===Ct,decodeVideoTextureEmissive:te&&y.emissiveMap.isVideoTexture===!0&&bt.getTransfer(y.emissiveMap.colorSpace)===Ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===En,flipSided:y.side===Cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function l(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)S.push(A),S.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(f(S,y),d(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function f(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function d(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function x(y){let S=g[y.type],A;if(S){let R=Hi[S];A=Js.clone(R.uniforms)}else A=y.uniforms;return A}function p(y,S){let A=h.get(S);return A!==void 0?++A.usedTimes:(A=new py(i,S,y,s),u.push(A),h.set(S,A)),A}function M(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function E(){a.dispose()}return{getParameters:b,getProgramCacheKey:l,getUniforms:x,acquireProgram:p,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:E}}function xy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function _y(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function G0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function W0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(v){let g=0;return v.isInstancedMesh&&(g+=2),v.isSkinnedMesh&&(g+=1),g}function a(v,g,_,b,l,f){let d=i[e];return d===void 0?(d={id:v.id,object:v,geometry:g,material:_,materialVariant:o(v),groupOrder:b,renderOrder:v.renderOrder,z:l,group:f},i[e]=d):(d.id=v.id,d.object=v,d.geometry=g,d.material=_,d.materialVariant=o(v),d.groupOrder=b,d.renderOrder=v.renderOrder,d.z=l,d.group=f),e++,d}function c(v,g,_,b,l,f,d){d.reversedDepth===!0&&(l=-l);let x=a(v,g,_,b,l,f);_.transmission>0?n.push(x):_.transparent===!0?s.push(x):t.push(x)}function u(v,g,_,b,l,f){let d=a(v,g,_,b,l,f);_.transmission>0?n.unshift(d):_.transparent===!0?s.unshift(d):t.unshift(d)}function h(v,g){t.length>1&&t.sort(v||_y),n.length>1&&n.sort(g||G0),s.length>1&&s.sort(g||G0)}function m(){for(let v=e,g=i.length;v<g;v++){let _=i[v];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:m,sort:h}}function yy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new W0,i.set(n,[o])):s>=r.length?(o=new W0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function My(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new Te};break;case"SpotLight":t={position:new k,direction:new k,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function by(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Sy=0;function Ty(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ey(i){let e=new My,t=by(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new k);let s=new k,r=new it,o=new it;function a(u){let h=0,m=0,v=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let g=0,_=0,b=0,l=0,f=0,d=0,x=0,p=0,M=0,T=0,E=0,y=0,S=0,A=0;u.sort(Ty);for(let P=0,I=u.length;P<I;P++){let C=u[P],L=C.color,O=C.intensity,H=C.distance,W=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ts?W=C.shadow.map.texture:W=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=L.r*O,m+=L.g*O,v+=L.b*O;else if(C.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(C.sh.coefficients[D],O);A++}else if(C.isSunLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,V=t.get(C);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[_]=V,n.sunShadowMap[_]=W;let ee=z.getViewportCount();for(let le=0;le<ee;le++)n.sunShadowMatrix[b+le]=z.getMatrix(le),n.sunShadowCascade[b+le]=z._cascadeData[le];b+=ee,_++}n.sun[g]=D,g++}else if(C.isDirectionalLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,V=t.get(C);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,n.directionalShadow[l]=V,n.directionalShadowMap[l]=W,n.directionalShadowMatrix[l]=C.shadow.matrix,M++}n.directional[l]=D,l++}else if(C.isSpotLight){let D=e.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(L).multiplyScalar(O),D.distance=H,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,n.spot[d]=D;let z=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,z.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[d]=z.matrix,C.castShadow){let V=t.get(C);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,n.spotShadow[d]=V,n.spotShadowMap[d]=W,E++}d++}else if(C.isRectAreaLight){let D=e.get(C);D.color.copy(L).multiplyScalar(O),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=D,x++}else if(C.isPointLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){let z=C.shadow,V=t.get(C);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,V.shadowCameraNear=z.camera.near,V.shadowCameraFar=z.camera.far,n.pointShadow[f]=V,n.pointShadowMap[f]=W,n.pointShadowMatrix[f]=C.shadow.matrix,T++}n.point[f]=D,f++}else if(C.isHemisphereLight){let D=e.get(C);D.skyColor.copy(C.color).multiplyScalar(O),D.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=D,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=v;let R=n.hash;(R.sunLength!==g||R.directionalLength!==l||R.pointLength!==f||R.spotLength!==d||R.rectAreaLength!==x||R.hemiLength!==p||R.numSunShadows!==_||R.numDirectionalShadows!==M||R.numPointShadows!==T||R.numSpotShadows!==E||R.numSpotMaps!==y||R.numLightProbes!==A)&&(n.sun.length=g,n.directional.length=l,n.spot.length=d,n.rectArea.length=x,n.point.length=f,n.hemi.length=p,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-S,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,R.sunLength=g,R.directionalLength=l,R.pointLength=f,R.spotLength=d,R.rectAreaLength=x,R.hemiLength=p,R.numSunShadows=_,R.numDirectionalShadows=M,R.numPointShadows=T,R.numSpotShadows=E,R.numSpotMaps=y,R.numLightProbes=A,n.version=Sy++)}function c(u,h){let m=0,v=0,g=0,_=0,b=0,l=0,f=h.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){let p=u[d];if(p.isSunLight){let M=n.sun[m];M.direction.setFromMatrixPosition(p.matrixWorld),M.direction.transformDirection(f),m++}else if(p.isDirectionalLight){let M=n.directional[v];M.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),v++}else if(p.isSpotLight){let M=n.spot[_];M.position.setFromMatrixPosition(p.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),_++}else if(p.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(p.matrixWorld),M.position.applyMatrix4(f),o.identity(),r.copy(p.matrixWorld),r.premultiply(f),o.extractRotation(r),M.halfWidth.set(p.width*.5,0,0),M.halfHeight.set(0,p.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),b++}else if(p.isPointLight){let M=n.point[g];M.position.setFromMatrixPosition(p.matrixWorld),M.position.applyMatrix4(f),g++}else if(p.isHemisphereLight){let M=n.hemi[l];M.direction.setFromMatrixPosition(p.matrixWorld),M.direction.transformDirection(f),l++}}}return{setup:a,setupView:c,state:n}}function X0(i){let e=new Ey(i),t=[],n=[],s=[];function r(v){m.camera=v,t.length=0,n.length=0,s.length=0}function o(v){t.push(v)}function a(v){n.push(v)}function c(v){s.push(v)}function u(){e.setup(t)}function h(v){e.setupView(t,v)}let m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function wy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new X0(i),e.set(s,[a])):r>=o.length?(a=new X0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ry=`uniform sampler2D shadow_pass;
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
}`,Cy=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Py=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],q0=new it,Ea=new k,jh=new k;function Iy(i,e,t){let n=new Ur,s=new Ie,r=new Ie,o=new St,a=new kr,c=new Vl,u={},h=t.maxTextureSize,m={[Ms]:Cn,[Cn]:Ms,[En]:En},v=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Ay,fragmentShader:Ry}),g=v.clone();g.defines.HORIZONTAL_PASS=1;let _=new yt;_.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new gt(_,v),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xs;let f=this.type;this.render=function(T,E,y){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||T.length===0)return;this.type===Bd&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xs);let S=i.getRenderTarget(),A=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Vn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let I=f!==this.type;I&&E.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(L=>L.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,L=T.length;C<L;C++){let O=T[C],H=O.shadow;if(H===void 0){ut("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let W=H.getFrameExtents();s.multiply(W),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,H.mapSize.y=r.y));let D=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=D,H.map===null||I===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Gr){if(O.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ut(s.x,s.y,{format:Ts,type:pn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new ms(s.x,s.y,pi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=Bi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=fn,H.map.depthTexture.magFilter=fn}else O.isPointLight?(H.map=new Yc(s.x),H.map.depthTexture=new Dl(s.x,Ai)):(H.map=new Ut(s.x,s.y),H.map.depthTexture=new ms(s.x,s.y,Ai)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=Bi,this.type===Xs?(H.map.depthTexture.compareFunction=D?Gc:Vc,H.map.depthTexture.minFilter=Ot,H.map.depthTexture.magFilter=Ot):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=fn,H.map.depthTexture.magFilter=fn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();O.isPointLight!==!0&&H.updateMatrices(O,y);for(let V=0;V<z;V++){let ee=H.getCamera(V);if(O.isPointLight){let le=H.camera,Xe=H.matrix,Ae=O.distance||le.far;Ae!==le.far&&(le.far=Ae,le.updateProjectionMatrix()),Ea.setFromMatrixPosition(O.matrixWorld),le.position.copy(Ea),jh.copy(le.position),jh.add(Cy[V]),le.up.copy(Py[V]),le.lookAt(jh),le.updateMatrixWorld(),Xe.makeTranslation(-Ea.x,-Ea.y,-Ea.z),q0.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),H._frustum.setFromProjectionMatrix(q0,le.coordinateSystem,le.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,V),i.clear();else{V===0&&(i.setRenderTarget(H.map),i.clear());let le=H.getViewport(V);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),P.viewport(o)}n=H.getFrustum(V),p(E,y,ee,O,this.type)}H.isPointLightShadow!==!0&&this.type===Gr&&d(H,y),H.needsUpdate=!1}f=this.type,l.needsUpdate=!1,i.setRenderTarget(S,A,R)};function d(T,E){let y=e.update(b);v.defines.VSM_SAMPLES!==T.blurSamples&&(v.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,v.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ut(s.x,s.y,{format:Ts,type:pn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),v.uniforms.shadow_pass.value=T.map.depthTexture,v.uniforms.resolution.value.set(T.map.width,T.map.height),v.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,y,v,b,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value.set(T.map.width,T.map.height),g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,y,g,b,null)}function x(T,E,y,S){let A=null,R=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)A=R;else if(A=y.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=A.uuid,I=E.uuid,C=u[P];C===void 0&&(C={},u[P]=C);let L=C[I];L===void 0&&(L=A.clone(),C[I]=L,E.addEventListener("dispose",M)),A=L}if(A.visible=E.visible,A.wireframe=E.wireframe,S===Gr?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:m[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let P=i.properties.get(A);P.light=y}return A}function p(T,E,y,S,A){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===Gr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let I=e.update(T),C=T.material;if(Array.isArray(C)){let L=I.groups;for(let O=0,H=L.length;O<H;O++){let W=L[O],D=C[W.materialIndex];if(D&&D.visible){let z=x(T,D,S,A);T.onBeforeShadow(i,T,E,y,I,z,W),i.renderBufferDirect(y,null,I,z,T,W),T.onAfterShadow(i,T,E,y,I,z,W)}}}else if(C.visible){let L=x(T,C,S,A);T.onBeforeShadow(i,T,E,y,I,L,null),i.renderBufferDirect(y,null,I,L,T,null),T.onAfterShadow(i,T,E,y,I,L,null)}}let P=T.children;for(let I=0,C=P.length;I<C;I++)p(P[I],E,y,S,A)}function M(T){T.target.removeEventListener("dispose",M);for(let y in u){let S=u[y],A=T.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function Ly(i,e){function t(){let X=!1,Pe=new St,de=null,De=new St(0,0,0,0);return{setMask:function(ke){de!==ke&&!X&&(i.colorMask(ke,ke,ke,ke),de=ke)},setLocked:function(ke){X=ke},setClear:function(ke,Se,nt,Qe,It){It===!0&&(ke*=Qe,Se*=Qe,nt*=Qe),Pe.set(ke,Se,nt,Qe),De.equals(Pe)===!1&&(i.clearColor(ke,Se,nt,Qe),De.copy(Pe))},reset:function(){X=!1,de=null,De.set(-1,0,0,0)}}}function n(){let X=!1,Pe=!1,de=null,De=null,ke=null;return{setReversed:function(Se){if(Pe!==Se){let nt=e.get("EXT_clip_control");Se?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Pe=Se;let Qe=ke;ke=null,this.setClear(Qe)}},getReversed:function(){return Pe},setTest:function(Se){Se?Z(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Se){de!==Se&&!X&&(i.depthMask(Se),de=Se)},setFunc:function(Se){if(Pe&&(Se=x0[Se]),De!==Se){switch(Se){case xl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=Se}},setLocked:function(Se){X=Se},setClear:function(Se){ke!==Se&&(ke=Se,Pe&&(Se=1-Se),i.clearDepth(Se))},reset:function(){X=!1,de=null,De=null,ke=null,Pe=!1}}}function s(){let X=!1,Pe=null,de=null,De=null,ke=null,Se=null,nt=null,Qe=null,It=null;return{setTest:function(lt){X||(lt?Z(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(lt){Pe!==lt&&!X&&(i.stencilMask(lt),Pe=lt)},setFunc:function(lt,Xn,jn){(de!==lt||De!==Xn||ke!==jn)&&(i.stencilFunc(lt,Xn,jn),de=lt,De=Xn,ke=jn)},setOp:function(lt,Xn,jn){(Se!==lt||nt!==Xn||Qe!==jn)&&(i.stencilOp(lt,Xn,jn),Se=lt,nt=Xn,Qe=jn)},setLocked:function(lt){X=lt},setClear:function(lt){It!==lt&&(i.clearStencil(lt),It=lt)},reset:function(){X=!1,Pe=null,de=null,De=null,ke=null,Se=null,nt=null,Qe=null,It=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,u=new WeakMap,h={},m={},v={},g=new WeakMap,_=[],b=null,l=!1,f=null,d=null,x=null,p=null,M=null,T=null,E=null,y=new Te(0,0,0),S=0,A=!1,R=null,P=null,I=null,C=null,L=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,W=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(D)[1]),H=W>=1):D.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),H=W>=2);let z=null,V={},ee=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Xe=new St().fromArray(ee),Ae=new St().fromArray(le);function Be(X,Pe,de,De){let ke=new Uint8Array(4),Se=i.createTexture();i.bindTexture(X,Se),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<de;nt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(Pe+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return Se}let J={};J[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Rr),ge(!1),Ee(gh),Z(i.CULL_FACE),mt(Vn);function Z(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function Me(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function Le(X,Pe){return v[X]!==Pe?(i.bindFramebuffer(X,Pe),v[X]=Pe,X===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Pe),X===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function we(X,Pe){let de=_,De=!1;if(X){de=g.get(Pe),de===void 0&&(de=[],g.set(Pe,de));let ke=X.textures;if(de.length!==ke.length||de[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,nt=ke.length;Se<nt;Se++)de[Se]=i.COLOR_ATTACHMENT0+Se;de.length=ke.length,De=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,De=!0);De&&i.drawBuffers(de)}function Ge(X){return b!==X?(i.useProgram(X),b=X,!0):!1}let Ke={[qs]:i.FUNC_ADD,[zd]:i.FUNC_SUBTRACT,[kd]:i.FUNC_REVERSE_SUBTRACT};Ke[Hd]=i.MIN,Ke[Vd]=i.MAX;let Oe={[Gd]:i.ZERO,[Wd]:i.ONE,[Xd]:i.SRC_COLOR,[_h]:i.SRC_ALPHA,[Kd]:i.SRC_ALPHA_SATURATE,[$d]:i.DST_COLOR,[Yd]:i.DST_ALPHA,[qd]:i.ONE_MINUS_SRC_COLOR,[yh]:i.ONE_MINUS_SRC_ALPHA,[Jd]:i.ONE_MINUS_DST_COLOR,[Zd]:i.ONE_MINUS_DST_ALPHA,[jd]:i.CONSTANT_COLOR,[Qd]:i.ONE_MINUS_CONSTANT_COLOR,[e0]:i.CONSTANT_ALPHA,[t0]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(X,Pe,de,De,ke,Se,nt,Qe,It,lt){if(X===Vn){l===!0&&(Me(i.BLEND),l=!1);return}if(l===!1&&(Z(i.BLEND),l=!0),X!==Od){if(X!==f||lt!==A){if((d!==qs||M!==qs)&&(i.blendEquation(i.FUNC_ADD),d=qs,M=qs),lt)switch(X){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case es:i.blendFunc(i.ONE,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dt("WebGLState: Invalid blending: ",X);break}else switch(X){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vh:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xh:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",X);break}x=null,p=null,T=null,E=null,y.set(0,0,0),S=0,f=X,A=lt}return}ke=ke||Pe,Se=Se||de,nt=nt||De,(Pe!==d||ke!==M)&&(i.blendEquationSeparate(Ke[Pe],Ke[ke]),d=Pe,M=ke),(de!==x||De!==p||Se!==T||nt!==E)&&(i.blendFuncSeparate(Oe[de],Oe[De],Oe[Se],Oe[nt]),x=de,p=De,T=Se,E=nt),(Qe.equals(y)===!1||It!==S)&&(i.blendColor(Qe.r,Qe.g,Qe.b,It),y.copy(Qe),S=It),f=X,A=!1}function Q(X,Pe){X.side===En?Me(i.CULL_FACE):Z(i.CULL_FACE);let de=X.side===Cn;Pe&&(de=!de),ge(de),X.blending===Wr&&X.transparent===!1?mt(Vn):mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let De=X.stencilWrite;a.setTest(De),De&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),te(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(X){R!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),R=X)}function Ee(X){X!==Ud?(Z(i.CULL_FACE),X!==P&&(X===gh?i.cullFace(i.BACK):X===Fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),P=X}function K(X){X!==I&&(H&&i.lineWidth(X),I=X)}function te(X,Pe,de){X?(Z(i.POLYGON_OFFSET_FILL),(C!==Pe||L!==de)&&(C=Pe,L=de,o.getReversed()&&(Pe=-Pe),i.polygonOffset(Pe,de))):Me(i.POLYGON_OFFSET_FILL)}function re(X){X?Z(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function se(X){X===void 0&&(X=i.TEXTURE0+O-1),z!==X&&(i.activeTexture(X),z=X)}function F(X,Pe,de){de===void 0&&(z===null?de=i.TEXTURE0+O-1:de=z);let De=V[de];De===void 0&&(De={type:void 0,texture:void 0},V[de]=De),(De.type!==X||De.texture!==Pe)&&(z!==de&&(i.activeTexture(de),z=de),i.bindTexture(X,Pe||J[X]),De.type=X,De.texture=Pe)}function ve(){let X=V[z];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function j(){try{i.compressedTexImage2D(...arguments)}catch(X){dt("WebGLState:",X)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(X){dt("WebGLState:",X)}}function w(){try{i.texSubImage2D(...arguments)}catch(X){dt("WebGLState:",X)}}function G(){try{i.texSubImage3D(...arguments)}catch(X){dt("WebGLState:",X)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(X){dt("WebGLState:",X)}}function B(){try{i.compressedTexSubImage3D(...arguments)}catch(X){dt("WebGLState:",X)}}function ce(){try{i.texStorage2D(...arguments)}catch(X){dt("WebGLState:",X)}}function ye(){try{i.texStorage3D(...arguments)}catch(X){dt("WebGLState:",X)}}function oe(){try{i.texImage2D(...arguments)}catch(X){dt("WebGLState:",X)}}function he(){try{i.texImage3D(...arguments)}catch(X){dt("WebGLState:",X)}}function me(X){return m[X]!==void 0?m[X]:i.getParameter(X)}function Ce(X,Pe){m[X]!==Pe&&(i.pixelStorei(X,Pe),m[X]=Pe)}function xe(X){Xe.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Xe.copy(X))}function _e(X){Ae.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Ae.copy(X))}function Ue(X,Pe){let de=u.get(Pe);de===void 0&&(de=new WeakMap,u.set(Pe,de));let De=de.get(X);De===void 0&&(De=i.getUniformBlockIndex(Pe,X.name),de.set(X,De))}function je(X,Pe){let De=u.get(Pe).get(X);c.get(Pe)!==De&&(i.uniformBlockBinding(Pe,De,X.__bindingPointIndex),c.set(Pe,De))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},z=null,V={},v={},g=new WeakMap,_=[],b=null,l=!1,f=null,d=null,x=null,p=null,M=null,T=null,E=null,y=new Te(0,0,0),S=0,A=!1,R=null,P=null,I=null,C=null,L=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:Me,bindFramebuffer:Le,drawBuffers:we,useProgram:Ge,setBlending:mt,setMaterial:Q,setFlipSided:ge,setCullFace:Ee,setLineWidth:K,setPolygonOffset:te,setScissorTest:re,activeTexture:se,bindTexture:F,unbindTexture:ve,compressedTexImage2D:j,compressedTexImage3D:U,texImage2D:oe,texImage3D:he,pixelStorei:Ce,getParameter:me,updateUBOMapping:Ue,uniformBlockBinding:je,texStorage2D:ce,texStorage3D:ye,texSubImage2D:w,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:B,scissor:xe,viewport:_e,reset:et}}function Dy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ie,h=new WeakMap,m=new Set,v,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,w){return _?new OffscreenCanvas(U,w):Ho("canvas")}function l(U,w,G){let Y=1,B=j(U);if((B.width>G||B.height>G)&&(Y=G/Math.max(B.width,B.height)),Y<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ce=Math.floor(Y*B.width),ye=Math.floor(Y*B.height);v===void 0&&(v=b(ce,ye));let oe=w?b(ce,ye):v;return oe.width=ce,oe.height=ye,oe.getContext("2d").drawImage(U,0,0,ce,ye),ut("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+ce+"x"+ye+")."),oe}else return"data"in U&&ut("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),U;return U}function f(U){return U.generateMipmaps}function d(U){i.generateMipmap(U)}function x(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(U,w,G,Y,B,ce=!1){if(U!==null){if(i[U]!==void 0)return i[U];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ye;Y&&(ye=e.get("EXT_texture_norm16"),ye||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=w;if(w===i.RED&&(G===i.FLOAT&&(oe=i.R32F),G===i.HALF_FLOAT&&(oe=i.R16F),G===i.UNSIGNED_BYTE&&(oe=i.R8),G===i.UNSIGNED_SHORT&&ye&&(oe=ye.R16_EXT),G===i.SHORT&&ye&&(oe=ye.R16_SNORM_EXT)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.R8UI),G===i.UNSIGNED_SHORT&&(oe=i.R16UI),G===i.UNSIGNED_INT&&(oe=i.R32UI),G===i.BYTE&&(oe=i.R8I),G===i.SHORT&&(oe=i.R16I),G===i.INT&&(oe=i.R32I)),w===i.RG&&(G===i.FLOAT&&(oe=i.RG32F),G===i.HALF_FLOAT&&(oe=i.RG16F),G===i.UNSIGNED_BYTE&&(oe=i.RG8),G===i.UNSIGNED_SHORT&&ye&&(oe=ye.RG16_EXT),G===i.SHORT&&ye&&(oe=ye.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RG8UI),G===i.UNSIGNED_SHORT&&(oe=i.RG16UI),G===i.UNSIGNED_INT&&(oe=i.RG32UI),G===i.BYTE&&(oe=i.RG8I),G===i.SHORT&&(oe=i.RG16I),G===i.INT&&(oe=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),G===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),G===i.UNSIGNED_INT&&(oe=i.RGB32UI),G===i.BYTE&&(oe=i.RGB8I),G===i.SHORT&&(oe=i.RGB16I),G===i.INT&&(oe=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),G===i.UNSIGNED_INT&&(oe=i.RGBA32UI),G===i.BYTE&&(oe=i.RGBA8I),G===i.SHORT&&(oe=i.RGBA16I),G===i.INT&&(oe=i.RGBA32I)),w===i.RGB&&(G===i.UNSIGNED_SHORT&&ye&&(oe=ye.RGB16_EXT),G===i.SHORT&&ye&&(oe=ye.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),w===i.RGBA){let he=ce?ko:bt.getTransfer(B);G===i.FLOAT&&(oe=i.RGBA32F),G===i.HALF_FLOAT&&(oe=i.RGBA16F),G===i.UNSIGNED_BYTE&&(oe=he===Ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ye&&(oe=ye.RGBA16_EXT),G===i.SHORT&&ye&&(oe=ye.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(U,w){let G;return U?w===null||w===Ai||w===qr?G=i.DEPTH24_STENCIL8:w===pi?G=i.DEPTH32F_STENCIL8:w===Xr&&(G=i.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ai||w===qr?G=i.DEPTH_COMPONENT24:w===pi?G=i.DEPTH_COMPONENT32F:w===Xr&&(G=i.DEPTH_COMPONENT16),G}function T(U,w){return f(U)===!0||U.isFramebufferTexture&&U.minFilter!==fn&&U.minFilter!==Ot?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function E(U){let w=U.target;w.removeEventListener("dispose",E),S(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&m.delete(w)}function y(U){let w=U.target;w.removeEventListener("dispose",y),R(w)}function S(U){let w=n.get(U);if(w.__webglInit===void 0)return;let G=U.source,Y=g.get(G);if(Y){let B=Y[w.__cacheKey];B.usedTimes--,B.usedTimes===0&&A(U),Object.keys(Y).length===0&&g.delete(G)}n.remove(U)}function A(U){let w=n.get(U);i.deleteTexture(w.__webglTexture);let G=U.source,Y=g.get(G);delete Y[w.__cacheKey],o.memory.textures--}function R(U){let w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let B=0;B<w.__webglFramebuffer[Y].length;B++)i.deleteFramebuffer(w.__webglFramebuffer[Y][B]);else i.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)i.deleteFramebuffer(w.__webglFramebuffer[Y]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let G=U.textures;for(let Y=0,B=G.length;Y<B;Y++){let ce=n.get(G[Y]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(G[Y])}n.remove(U)}let P=0;function I(){P=0}function C(){return P}function L(U){P=U}function O(){let U=P;return U>=s.maxTextures&&ut("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,U}function H(U){let w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function W(U,w){let G=n.get(U);if(U.isVideoTexture&&F(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&G.__version!==U.version){let Y=U.image;if(Y===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(G,U,w);return}}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function D(U,w){let G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){Me(G,U,w);return}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function z(U,w){let G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){Me(G,U,w);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function V(U,w){let G=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&G.__version!==U.version){Le(G,U,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}let ee={[Cr]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[El]:i.MIRRORED_REPEAT},le={[fn]:i.NEAREST,[s0]:i.NEAREST_MIPMAP_NEAREST,[va]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[sc]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},Xe={[l0]:i.NEVER,[d0]:i.ALWAYS,[c0]:i.LESS,[Vc]:i.LEQUAL,[u0]:i.EQUAL,[Gc]:i.GEQUAL,[h0]:i.GREATER,[f0]:i.NOTEQUAL};function Ae(U,w){if(w.type===pi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ot||w.magFilter===sc||w.magFilter===va||w.magFilter===Gn||w.minFilter===Ot||w.minFilter===sc||w.minFilter===va||w.minFilter===Gn)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ee[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ee[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ee[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,le[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,le[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Xe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===fn||w.minFilter!==va&&w.minFilter!==Gn||w.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Be(U,w){let G=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",E));let Y=w.source,B=g.get(Y);B===void 0&&(B={},g.set(Y,B));let ce=H(w);if(ce!==U.__cacheKey){B[ce]===void 0&&(B[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),B[ce].usedTimes++;let ye=B[U.__cacheKey];ye!==void 0&&(B[U.__cacheKey].usedTimes--,ye.usedTimes===0&&A(w)),U.__cacheKey=ce,U.__webglTexture=B[ce].texture}return G}function J(U,w,G){return Math.floor(Math.floor(U/G)/w)}function Z(U,w,G,Y){let ce=U.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,G,Y,w.data);else{ce.sort((Ce,xe)=>Ce.start-xe.start);let ye=0;for(let Ce=1;Ce<ce.length;Ce++){let xe=ce[ye],_e=ce[Ce],Ue=xe.start+xe.count,je=J(_e.start,w.width,4),et=J(xe.start,w.width,4);_e.start<=Ue+1&&je===et&&J(_e.start+_e.count-1,w.width,4)===je?xe.count=Math.max(xe.count,_e.start+_e.count-xe.start):(++ye,ce[ye]=_e)}ce.length=ye+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),he=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Ce=0,xe=ce.length;Ce<xe;Ce++){let _e=ce[Ce],Ue=Math.floor(_e.start/4),je=Math.ceil(_e.count/4),et=Ue%w.width,X=Math.floor(Ue/w.width),Pe=je,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,et,X,Pe,de,G,Y,w.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function Me(U,w,G){let Y=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=i.TEXTURE_3D);let B=Be(U,w),ce=w.source;t.bindTexture(Y,U.__webglTexture,i.TEXTURE0+G);let ye=n.get(ce);if(ce.version!==ye.__version||B===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let de=bt.getPrimaries(bt.workingColorSpace),De=w.colorSpace===Ri?null:bt.getPrimaries(w.colorSpace),ke=w.colorSpace===Ri||de===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let he=l(w.image,!1,s.maxTextureSize);he=ve(w,he);let me=r.convert(w.format,w.colorSpace),Ce=r.convert(w.type),xe=p(w.internalFormat,me,Ce,w.normalized,w.colorSpace,w.isVideoTexture);Ae(Y,w);let _e,Ue=w.mipmaps,je=w.isVideoTexture!==!0,et=ye.__version===void 0||B===!0,X=ce.dataReady,Pe=T(w,he);if(w.isDepthTexture)xe=M(w.format===Ss,w.type),et&&(je?t.texStorage2D(i.TEXTURE_2D,1,xe,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,xe,he.width,he.height,0,me,Ce,null));else if(w.isDataTexture)if(Ue.length>0){je&&et&&t.texStorage2D(i.TEXTURE_2D,Pe,xe,Ue[0].width,Ue[0].height);for(let de=0,De=Ue.length;de<De;de++)_e=Ue[de],je?X&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,_e.width,_e.height,me,Ce,_e.data):t.texImage2D(i.TEXTURE_2D,de,xe,_e.width,_e.height,0,me,Ce,_e.data);w.generateMipmaps=!1}else je?(et&&t.texStorage2D(i.TEXTURE_2D,Pe,xe,he.width,he.height),X&&Z(w,he,me,Ce)):t.texImage2D(i.TEXTURE_2D,0,xe,he.width,he.height,0,me,Ce,he.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){je&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,xe,Ue[0].width,Ue[0].height,he.depth);for(let de=0,De=Ue.length;de<De;de++)if(_e=Ue[de],w.format!==Jn)if(me!==null)if(je){if(X)if(w.layerUpdates.size>0){let ke=Hh(_e.width,_e.height,w.format,w.type);for(let Se of w.layerUpdates){let nt=_e.data.subarray(Se*ke/_e.data.BYTES_PER_ELEMENT,(Se+1)*ke/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,Se,_e.width,_e.height,1,me,nt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,he.depth,me,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,xe,_e.width,_e.height,he.depth,0,_e.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,he.depth,me,Ce,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,xe,_e.width,_e.height,he.depth,0,me,Ce,_e.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{je&&et&&t.texStorage2D(i.TEXTURE_2D,Pe,xe,Ue[0].width,Ue[0].height);for(let de=0,De=Ue.length;de<De;de++)_e=Ue[de],w.format!==Jn?me!==null?je?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,_e.width,_e.height,me,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,de,xe,_e.width,_e.height,0,_e.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?X&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,_e.width,_e.height,me,Ce,_e.data):t.texImage2D(i.TEXTURE_2D,de,xe,_e.width,_e.height,0,me,Ce,_e.data)}else if(w.isDataArrayTexture)if(je){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,xe,he.width,he.height,he.depth),X)if(w.layerUpdates.size>0){let de=Hh(he.width,he.height,w.format,w.type);for(let De of w.layerUpdates){let ke=he.data.subarray(De*de/he.data.BYTES_PER_ELEMENT,(De+1)*de/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,he.width,he.height,1,me,Ce,ke)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,me,Ce,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,he.width,he.height,he.depth,0,me,Ce,he.data);else if(w.isData3DTexture)je?(et&&t.texStorage3D(i.TEXTURE_3D,Pe,xe,he.width,he.height,he.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,me,Ce,he.data)):t.texImage3D(i.TEXTURE_3D,0,xe,he.width,he.height,he.depth,0,me,Ce,he.data);else if(w.isFramebufferTexture){if(et)if(je)t.texStorage2D(i.TEXTURE_2D,Pe,xe,he.width,he.height);else{let de=he.width,De=he.height;for(let ke=0;ke<Pe;ke++)t.texImage2D(i.TEXTURE_2D,ke,xe,de,De,0,me,Ce,null),de>>=1,De>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),he.parentNode!==de){de.appendChild(he),m.add(w),de.onpaint=De=>{let ke=De.changedElements;for(let Se of m)ke.includes(Se.image)&&(Se.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,he);else{let ke=i.RGBA,Se=i.RGBA,nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ke,Se,nt,he)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(je&&et){let de=j(Ue[0]);t.texStorage2D(i.TEXTURE_2D,Pe,xe,de.width,de.height)}for(let de=0,De=Ue.length;de<De;de++)_e=Ue[de],je?X&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,me,Ce,_e):t.texImage2D(i.TEXTURE_2D,de,xe,me,Ce,_e);w.generateMipmaps=!1}else if(je){if(et){let de=j(he);t.texStorage2D(i.TEXTURE_2D,Pe,xe,de.width,de.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ce,he)}else t.texImage2D(i.TEXTURE_2D,0,xe,me,Ce,he);f(w)&&d(Y),ye.__version=ce.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Le(U,w,G){if(w.image.length!==6)return;let Y=Be(U,w),B=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+G);let ce=n.get(B);if(B.version!==ce.__version||Y===!0){t.activeTexture(i.TEXTURE0+G);let ye=bt.getPrimaries(bt.workingColorSpace),oe=w.colorSpace===Ri?null:bt.getPrimaries(w.colorSpace),he=w.colorSpace===Ri||ye===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let me=w.isCompressedTexture||w.image[0].isCompressedTexture,Ce=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let Se=0;Se<6;Se++)!me&&!Ce?xe[Se]=l(w.image[Se],!0,s.maxCubemapSize):xe[Se]=Ce?w.image[Se].image:w.image[Se],xe[Se]=ve(w,xe[Se]);let _e=xe[0],Ue=r.convert(w.format,w.colorSpace),je=r.convert(w.type),et=p(w.internalFormat,Ue,je,w.normalized,w.colorSpace),X=w.isVideoTexture!==!0,Pe=ce.__version===void 0||Y===!0,de=B.dataReady,De=T(w,_e);Ae(i.TEXTURE_CUBE_MAP,w);let ke;if(me){X&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,et,_e.width,_e.height);for(let Se=0;Se<6;Se++){ke=xe[Se].mipmaps;for(let nt=0;nt<ke.length;nt++){let Qe=ke[nt];w.format!==Jn?Ue!==null?X?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt,0,0,Qe.width,Qe.height,Ue,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt,et,Qe.width,Qe.height,0,Qe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt,0,0,Qe.width,Qe.height,Ue,je,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt,et,Qe.width,Qe.height,0,Ue,je,Qe.data)}}}else{if(ke=w.mipmaps,X&&Pe){ke.length>0&&De++;let Se=j(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,et,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ce){X?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,xe[Se].width,xe[Se].height,Ue,je,xe[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,et,xe[Se].width,xe[Se].height,0,Ue,je,xe[Se].data);for(let nt=0;nt<ke.length;nt++){let It=ke[nt].image[Se].image;X?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt+1,0,0,It.width,It.height,Ue,je,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt+1,et,It.width,It.height,0,Ue,je,It.data)}}else{X?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ue,je,xe[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,et,Ue,je,xe[Se]);for(let nt=0;nt<ke.length;nt++){let Qe=ke[nt];X?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt+1,0,0,Ue,je,Qe.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt+1,et,Ue,je,Qe.image[Se])}}}f(w)&&d(i.TEXTURE_CUBE_MAP),ce.__version=B.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function we(U,w,G,Y,B,ce){let ye=r.convert(G.format,G.colorSpace),oe=r.convert(G.type),he=p(G.internalFormat,ye,oe,G.normalized,G.colorSpace),me=n.get(w),Ce=n.get(G);if(Ce.__renderTarget=w,!me.__hasExternalTextures){let xe=Math.max(1,w.width>>ce),_e=Math.max(1,w.height>>ce);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?t.texImage3D(B,ce,he,xe,_e,w.depth,0,ye,oe,null):t.texImage2D(B,ce,he,xe,_e,0,ye,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),se(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,B,Ce.__webglTexture,0,re(w)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,B,Ce.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(U,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){let Y=w.depthTexture,B=Y&&Y.isDepthTexture?Y.type:null,ce=M(w.stencilBuffer,B),ye=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;se(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(w),ce,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(w),ce,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ce,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,U)}else{let Y=w.textures;for(let B=0;B<Y.length;B++){let ce=Y[B],ye=r.convert(ce.format,ce.colorSpace),oe=r.convert(ce.type),he=p(ce.internalFormat,ye,oe,ce.normalized,ce.colorSpace);se(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(w),he,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(w),he,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,he,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(U,w,G){let Y=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let B=n.get(w.depthTexture);if(B.__renderTarget=w,(!B.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y){if(B.__webglInit===void 0&&(B.__webglInit=!0,w.depthTexture.addEventListener("dispose",E)),B.__webglTexture===void 0){B.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,w.depthTexture);let me=r.convert(w.depthTexture.format),Ce=r.convert(w.depthTexture.type),xe;w.depthTexture.format===Bi?xe=i.DEPTH_COMPONENT24:w.depthTexture.format===Ss&&(xe=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,xe,w.width,w.height,0,me,Ce,null)}}else W(w.depthTexture,0);let ce=B.__webglTexture,ye=re(w),oe=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,he=w.depthTexture.format===Ss?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Bi)se(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,oe,ce,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,he,oe,ce,0);else if(w.depthTexture.format===Ss)se(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,oe,ce,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,he,oe,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(U){let w=n.get(U),G=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){let Y=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){let B=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",B)};Y.addEventListener("dispose",B),w.__depthDisposeCallback=B}w.__boundDepthTexture=Y}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)Ke(w.__webglFramebuffer[Y],U,Y);else{let Y=U.texture.mipmaps;Y&&Y.length>0?Ke(w.__webglFramebuffer[0],U,0):Ke(w.__webglFramebuffer,U,0)}else if(G){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ge(w.__webglDepthbuffer[Y],U,!1);else{let B=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,ce)}}else{let Y=U.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ge(w.__webglDepthbuffer,U,!1);else{let B=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(U,w,G){let Y=n.get(U);w!==void 0&&we(Y.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Oe(U)}function Q(U){let w=U.texture,G=n.get(U),Y=n.get(w);U.addEventListener("dispose",y);let B=U.textures,ce=U.isWebGLCubeRenderTarget===!0,ye=B.length>1;if(ye||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=w.version,o.memory.textures++),ce){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let he=0;he<w.mipmaps.length;he++)G.__webglFramebuffer[oe][he]=i.createFramebuffer()}else G.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)G.__webglFramebuffer[oe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ye)for(let oe=0,he=B.length;oe<he;oe++){let me=n.get(B[oe]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&se(U)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<B.length;oe++){let he=B[oe];G.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);let me=r.convert(he.format,he.colorSpace),Ce=r.convert(he.type),xe=p(he.internalFormat,me,Ce,he.normalized,he.colorSpace,U.isXRRenderTarget===!0),_e=re(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,xe,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(G.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,w);for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)we(G.__webglFramebuffer[oe][he],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else we(G.__webglFramebuffer[oe],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);f(w)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let oe=0,he=B.length;oe<he;oe++){let me=B[oe],Ce=n.get(me),xe=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Ce.__webglTexture),Ae(xe,me),we(G.__webglFramebuffer,U,me,i.COLOR_ATTACHMENT0+oe,xe,0),f(me)&&d(xe)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(oe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),Ae(oe,w),w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)we(G.__webglFramebuffer[he],U,w,i.COLOR_ATTACHMENT0,oe,he);else we(G.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,oe,0);f(w)&&d(oe),t.unbindTexture()}U.depthBuffer&&Oe(U)}function ge(U){let w=U.textures;for(let G=0,Y=w.length;G<Y;G++){let B=w[G];if(f(B)){let ce=x(U),ye=n.get(B).__webglTexture;t.bindTexture(ce,ye),d(ce),t.unbindTexture()}}}let Ee=[],K=[];function te(U){if(U.samples>0){if(se(U)===!1){let w=U.textures,G=U.width,Y=U.height,B=i.COLOR_BUFFER_BIT,ce=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(U),oe=w.length>1;if(oe)for(let me=0;me<w.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let he=U.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let me=0;me<w.length;me++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);let Ce=n.get(w[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,G,Y,0,0,G,Y,B,i.NEAREST),c===!0&&(Ee.length=0,K.length=0,Ee.push(i.COLOR_ATTACHMENT0+me),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Ee.push(ce),K.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let me=0;me<w.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);let Ce=n.get(w[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){let w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function re(U){return Math.min(s.maxSamples,U.samples)}function se(U){let w=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function F(U){let w=o.render.frame;h.get(U)!==w&&(h.set(U,w),U.update())}function ve(U,w){let G=U.colorSpace,Y=U.format,B=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||G!==zo&&G!==Ri&&(bt.getTransfer(G)===Ct?(Y!==Jn||B!==Fn)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",G)),w}function j(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.getTextureUnits=C,this.setTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=D,this.setTexture3D=z,this.setTextureCube=V,this.rebindTextures=mt,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ny(i,e){function t(n,s=Ri){let r,o=bt.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ch)return i.BYTE;if(n===Ph)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===pi)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Nh)return i.RGB;if(n===Jn)return i.RGBA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===Zs)return i.RED;if(n===lc)return i.RED_INTEGER;if(n===Ts)return i.RG;if(n===cc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===xa||n===_a||n===ya||n===Ma)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hc||n===fc||n===dc||n===pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mc||n===gc||n===vc||n===xc||n===_c||n===ba||n===yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mc||n===gc)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xc)return r.COMPRESSED_R11_EAC;if(n===_c)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ba)return r.COMPRESSED_RG11_EAC;if(n===yc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mc||n===bc||n===Sc||n===Tc||n===Ec||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ac)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uc||n===Fc||n===Bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Uc)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oc||n===zc||n===Sa||n===kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fy=`
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

}`,af=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _t({vertexShader:Uy,fragmentShader:Fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lf=class extends Oi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,m=null,v=null,g=null,_=null,b=typeof XRWebGLBinding<"u",l=new af,f={},d=t.getContextAttributes(),x=null,p=null,M=[],T=[],E=new Ie,y=null,S=null,A=new Rn;A.viewport=new St;let R=new Rn;R.viewport=new St;let P=[A,R],I=new ec,C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Z=M[J];return Z===void 0&&(Z=new Dr,M[J]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(J){let Z=M[J];return Z===void 0&&(Z=new Dr,M[J]=Z),Z.getGripSpace()},this.getHand=function(J){let Z=M[J];return Z===void 0&&(Z=new Dr,M[J]=Z),Z.getHandSpace()};function O(J){let Z=T.indexOf(J.inputSource);if(Z===-1)return;let Me=M[Z];Me!==void 0&&(Me.update(J.inputSource,J.frame,u||o),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",W);for(let J=0;J<M.length;J++){let Z=T[J];Z!==null&&(T[J]=null,M[J].disconnect(Z))}C=null,L=null,l.reset();for(let J in f)delete f[J];if(e.setRenderTarget(x),g=null,v=null,m=null,s=null,p=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),S!==null){let J=S.camera;J.fov=S.fov,J.zoom=S.zoom,J.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return v!==null?v:g},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",W),d.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Le=null,we=null;d.depth&&(we=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=d.stencil?Ss:Bi,Le=d.stencil?qr:Ai);let Ge={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};m=this.getBinding(),v=m.createProjectionLayer(Ge),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),p=new Ut(v.textureWidth,v.textureHeight,{format:Jn,type:Fn,depthTexture:new ms(v.textureWidth,v.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{let Me={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),p=new Ut(g.framebufferWidth,g.framebufferHeight,{format:Jn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function W(J){for(let Z=0;Z<J.removed.length;Z++){let Me=J.removed[Z],Le=T.indexOf(Me);Le>=0&&(T[Le]=null,M[Le].disconnect(Me))}for(let Z=0;Z<J.added.length;Z++){let Me=J.added[Z],Le=T.indexOf(Me);if(Le===-1){for(let Ge=0;Ge<M.length;Ge++)if(Ge>=T.length){T.push(Me),Le=Ge;break}else if(T[Ge]===null){T[Ge]=Me,Le=Ge;break}if(Le===-1)break}let we=M[Le];we&&we.connect(Me)}}let D=new k,z=new k;function V(J,Z,Me){D.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(Me.matrixWorld);let Le=D.distanceTo(z),we=Z.projectionMatrix.elements,Ge=Me.projectionMatrix.elements,Ke=we[14]/(we[10]-1),Oe=we[14]/(we[10]+1),mt=(we[9]+1)/we[5],Q=(we[9]-1)/we[5],ge=(we[8]-1)/we[0],Ee=(Ge[8]+1)/Ge[0],K=Ke*ge,te=Ke*Ee,re=Le/(-ge+Ee),se=re*-ge;if(Z.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(se),J.translateZ(re),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let F=Ke+re,ve=Oe+re,j=K-se,U=te+(Le-se),w=mt*Oe/ve*F,G=Q*Oe/ve*F;J.projectionMatrix.makePerspective(j,U,w,G,F,ve),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ee(J,Z){Z===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Z.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Z=J.near,Me=J.far;l.texture!==null&&(l.depthNear>0&&(Z=l.depthNear),l.depthFar>0&&(Me=l.depthFar)),I.near=R.near=A.near=Z,I.far=R.far=A.far=Me,(C!==I.near||L!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),C=I.near,L=I.far),I.layers.mask=J.layers.mask|6,A.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;let Le=J.parent,we=I.cameras;ee(I,Le);for(let Ge=0;Ge<we.length;Ge++)ee(we[Ge],Le);we.length===2?V(I,A,R):I.projectionMatrix.copy(A.projectionMatrix),S===null&&J.isPerspectiveCamera&&(S={camera:J,fov:J.fov,zoom:J.zoom}),le(J,I,Le)};function le(J,Z,Me){Me===null?J.matrix.copy(Z.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(Z.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Vo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(v===null&&g===null))return c},this.setFoveation=function(J){c=J,v!==null&&(v.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(I)},this.getCameraTexture=function(J){return f[J]};let Xe=null;function Ae(J,Z){if(h=Z.getViewerPose(u||o),_=Z,h!==null){let Me=h.views;g!==null&&(e.setRenderTargetFramebuffer(p,g.framebuffer),e.setRenderTarget(p));let Le=!1;Me.length!==I.cameras.length&&(I.cameras.length=0,Le=!0);for(let Oe=0;Oe<Me.length;Oe++){let mt=Me[Oe],Q=null;if(g!==null)Q=g.getViewport(mt);else{let Ee=m.getViewSubImage(v,mt);Q=Ee.viewport,Oe===0&&(e.setRenderTargetTextures(p,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(p))}let ge=P[Oe];ge===void 0&&(ge=new Rn,ge.layers.enable(Oe),ge.viewport=new St,P[Oe]=ge),ge.matrix.fromArray(mt.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(mt.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Q.x,Q.y,Q.width,Q.height),Oe===0&&(I.matrix.copy(ge.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Le===!0&&I.cameras.push(ge)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){m=n.getBinding();let Oe=m.getDepthInformation(Me[0]);Oe&&Oe.isValid&&Oe.texture&&l.init(Oe,s.renderState)}if(we&&we.includes("camera-access")&&b){e.state.unbindTexture(),m=n.getBinding();for(let Oe=0;Oe<Me.length;Oe++){let mt=Me[Oe].camera;if(mt){let Q=f[mt];Q||(Q=new Ko,f[mt]=Q);let ge=m.getCameraImage(mt);Q.sourceTexture=ge}}}}for(let Me=0;Me<M.length;Me++){let Le=T[Me],we=M[Me];Le!==null&&we!==void 0&&we.update(Le,Z,u||o)}Xe&&Xe(J,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}let Be=new Y0;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(J){Xe=J},this.dispose=function(){}}},By=new it,Q0=new pt;Q0.set(-1,0,0,0,1,0,0,0,1);function Oy(i,e){function t(l,f){l.matrixAutoUpdate===!0&&l.updateMatrix(),f.value.copy(l.matrix)}function n(l,f){f.color.getRGB(l.fogColor.value,Oh(i)),f.isFog?(l.fogNear.value=f.near,l.fogFar.value=f.far):f.isFogExp2&&(l.fogDensity.value=f.density)}function s(l,f,d,x,p){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(l,f):f.isMeshLambertMaterial?(r(l,f),f.envMap&&(l.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(l,f),m(l,f)):f.isMeshPhongMaterial?(r(l,f),h(l,f),f.envMap&&(l.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(l,f),v(l,f),f.isMeshPhysicalMaterial&&g(l,f,p)):f.isMeshMatcapMaterial?(r(l,f),_(l,f)):f.isMeshDepthMaterial?r(l,f):f.isMeshDistanceMaterial?(r(l,f),b(l,f)):f.isMeshNormalMaterial?r(l,f):f.isLineBasicMaterial?(o(l,f),f.isLineDashedMaterial&&a(l,f)):f.isPointsMaterial?c(l,f,d,x):f.isSpriteMaterial?u(l,f):f.isShadowMaterial?(l.color.value.copy(f.color),l.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(l,f){l.opacity.value=f.opacity,f.color&&l.diffuse.value.copy(f.color),f.emissive&&l.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(l.map.value=f.map,t(f.map,l.mapTransform)),f.alphaMap&&(l.alphaMap.value=f.alphaMap,t(f.alphaMap,l.alphaMapTransform)),f.bumpMap&&(l.bumpMap.value=f.bumpMap,t(f.bumpMap,l.bumpMapTransform),l.bumpScale.value=f.bumpScale,f.side===Cn&&(l.bumpScale.value*=-1)),f.normalMap&&(l.normalMap.value=f.normalMap,t(f.normalMap,l.normalMapTransform),l.normalScale.value.copy(f.normalScale),f.side===Cn&&l.normalScale.value.negate()),f.displacementMap&&(l.displacementMap.value=f.displacementMap,t(f.displacementMap,l.displacementMapTransform),l.displacementScale.value=f.displacementScale,l.displacementBias.value=f.displacementBias),f.emissiveMap&&(l.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,l.emissiveMapTransform)),f.specularMap&&(l.specularMap.value=f.specularMap,t(f.specularMap,l.specularMapTransform)),f.alphaTest>0&&(l.alphaTest.value=f.alphaTest);let d=e.get(f),x=d.envMap,p=d.envMapRotation;x&&(l.envMap.value=x,l.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(p)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.envMapRotation.value.premultiply(Q0),l.reflectivity.value=f.reflectivity,l.ior.value=f.ior,l.refractionRatio.value=f.refractionRatio),f.lightMap&&(l.lightMap.value=f.lightMap,l.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,l.lightMapTransform)),f.aoMap&&(l.aoMap.value=f.aoMap,l.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,l.aoMapTransform))}function o(l,f){l.diffuse.value.copy(f.color),l.opacity.value=f.opacity,f.map&&(l.map.value=f.map,t(f.map,l.mapTransform))}function a(l,f){l.dashSize.value=f.dashSize,l.totalSize.value=f.dashSize+f.gapSize,l.scale.value=f.scale}function c(l,f,d,x){l.diffuse.value.copy(f.color),l.opacity.value=f.opacity,l.size.value=f.size*d,l.scale.value=x*.5,f.map&&(l.map.value=f.map,t(f.map,l.uvTransform)),f.alphaMap&&(l.alphaMap.value=f.alphaMap,t(f.alphaMap,l.alphaMapTransform)),f.alphaTest>0&&(l.alphaTest.value=f.alphaTest)}function u(l,f){l.diffuse.value.copy(f.color),l.opacity.value=f.opacity,l.rotation.value=f.rotation,f.map&&(l.map.value=f.map,t(f.map,l.mapTransform)),f.alphaMap&&(l.alphaMap.value=f.alphaMap,t(f.alphaMap,l.alphaMapTransform)),f.alphaTest>0&&(l.alphaTest.value=f.alphaTest)}function h(l,f){l.specular.value.copy(f.specular),l.shininess.value=Math.max(f.shininess,1e-4)}function m(l,f){f.gradientMap&&(l.gradientMap.value=f.gradientMap)}function v(l,f){l.metalness.value=f.metalness,f.metalnessMap&&(l.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,l.metalnessMapTransform)),l.roughness.value=f.roughness,f.roughnessMap&&(l.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,l.roughnessMapTransform)),f.envMap&&(l.envMapIntensity.value=f.envMapIntensity)}function g(l,f,d){l.ior.value=f.ior,f.sheen>0&&(l.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),l.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(l.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,l.sheenColorMapTransform)),f.sheenRoughnessMap&&(l.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,l.sheenRoughnessMapTransform))),f.clearcoat>0&&(l.clearcoat.value=f.clearcoat,l.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(l.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,l.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(l.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Cn&&l.clearcoatNormalScale.value.negate())),f.dispersion>0&&(l.dispersion.value=f.dispersion),f.retroreflectivity>0&&(l.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(l.iridescence.value=f.iridescence,l.iridescenceIOR.value=f.iridescenceIOR,l.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(l.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,l.iridescenceMapTransform)),f.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),f.transmission>0&&(l.transmission.value=f.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),f.transmissionMap&&(l.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,l.transmissionMapTransform)),l.thickness.value=f.thickness,f.thicknessMap&&(l.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=f.attenuationDistance,l.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(l.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(l.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=f.specularIntensity,l.specularColor.value.copy(f.specularColor),f.specularColorMap&&(l.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,l.specularColorMapTransform)),f.specularIntensityMap&&(l.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,l.specularIntensityMapTransform))}function _(l,f){f.matcap&&(l.matcap.value=f.matcap)}function b(l,f){let d=e.get(f).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(p,M){let T=M.program;n.uniformBlockBinding(p,T)}function u(p,M){let T=s[p.id];T===void 0&&(l(p),T=h(p),s[p.id]=T,p.addEventListener("dispose",d));let E=M.program;n.updateUBOMapping(p,E);let y=e.render.frame;r[p.id]!==y&&(v(p),r[p.id]=y)}function h(p){let M=m();p.__bindingPointIndex=M;let T=i.createBuffer(),E=p.__size,y=p.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function m(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(p){let M=s[p.id],T=p.uniforms,E=p.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,S=T.length;y<S;y++){let A=T[y];if(Array.isArray(A))for(let R=0,P=A.length;R<P;R++)g(A[R],y,R,E);else g(A,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(p,M,T,E){if(b(p,M,T,E)===!0){let y=p.__offset,S=p.value;if(Array.isArray(S)){let A=0;for(let R=0;R<S.length;R++){let P=S[R],I=f(P);_(P,p.__data,A),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(A+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(S,p.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,p.__data)}}function _(p,M,T){typeof p=="number"||typeof p=="boolean"?M[0]=p:p.isMatrix3?(M[0]=p.elements[0],M[1]=p.elements[1],M[2]=p.elements[2],M[3]=0,M[4]=p.elements[3],M[5]=p.elements[4],M[6]=p.elements[5],M[7]=0,M[8]=p.elements[6],M[9]=p.elements[7],M[10]=p.elements[8],M[11]=0):ArrayBuffer.isView(p)?M.set(new p.constructor(p.buffer,p.byteOffset,M.length)):p.toArray(M,T)}function b(p,M,T,E){let y=p.value,S=M+"_"+T;if(E[S]===void 0)return typeof y=="number"||typeof y=="boolean"?E[S]=y:ArrayBuffer.isView(y)?E[S]=y.slice():E[S]=y.clone(),!0;{let A=E[S];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return E[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function l(p){let M=p.uniforms,T=0,E=16;for(let S=0,A=M.length;S<A;S++){let R=Array.isArray(M[S])?M[S]:[M[S]];for(let P=0,I=R.length;P<I;P++){let C=R[P],L=Array.isArray(C.value)?C.value:[C.value];for(let O=0,H=L.length;O<H;O++){let W=L[O],D=f(W),z=T%E,V=z%D.boundary,ee=z+V;T+=V,ee!==0&&E-ee<D.storage&&(T+=E-ee),C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=D.storage}}}let y=T%E;return y>0&&(T+=E-y),p.__size=T,p.__cache={},this}function f(p){let M={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(M.boundary=4,M.storage=4):p.isVector2?(M.boundary=8,M.storage=8):p.isVector3||p.isColor?(M.boundary=16,M.storage=12):p.isVector4?(M.boundary=16,M.storage=16):p.isMatrix3?(M.boundary=48,M.storage=48):p.isMatrix4?(M.boundary=64,M.storage=64):p.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(M.boundary=16,M.storage=p.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",p),M}function d(p){let M=p.target;M.removeEventListener("dispose",d);let T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function x(){for(let p in s)i.deleteBuffer(s[p]);o=[],s={},r={}}return{bind:c,update:u,dispose:x}}var ky=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ki=null;function Hy(){return ki===null&&(ki=new ps(ky,16,16,Ts,pn),ki.name="DFG_LUT",ki.minFilter=Ot,ki.magFilter=Ot,ki.wrapS=Fi,ki.wrapT=Fi,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}var Zc=class{constructor(e={}){let{canvas:t=m0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1,outputBufferType:g=Fn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let b=g,l=new Set([uc,cc,lc]),f=new Set([Fn,Ai,Xr,qr,oc,ac]),d=new Uint32Array(4),x=new Int32Array(4),p=new k,M=null,T=null,E=[],y=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,R=!1,P=null,I=null,C=null,L=null;this._outputColorSpace=jt;let O=0,H=0,W=null,D=-1,z=null,V=new St,ee=new St,le=null,Xe=new Te(0),Ae=0,Be=t.width,J=t.height,Z=1,Me=null,Le=null,we=new St(0,0,Be,J),Ge=new St(0,0,Be,J),Ke=!1,Oe=new Ur,mt=!1,Q=!1,ge=new it,Ee=new k,K=new St,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function se(){return W===null?Z:1}let F=n;function ve(N,$){return t.getContext(N,$)}let j,U,w,G,Y,B,ce,ye,oe,he,me,Ce,xe,_e,Ue,je,et,X,Pe,de,De,ke,Se;try{let N={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Xn,!1),F===null){let $="webgl2";if(F=ve($,N),F===null)throw ve($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(N){throw t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),dt("WebGLRenderer: "+N.message),N}function nt(){j=new Zx(F),j.init(),De=new Ny(F,j),U=new Ox(F,j,e,De),w=new Ly(F,j),U.reversedDepthBuffer&&v&&w.buffers.depth.setReversed(!0),I=F.createFramebuffer(),C=F.createFramebuffer(),L=F.createFramebuffer(),G=new Kx(F),Y=new xy,B=new Dy(F,j,w,Y,U,De,G),ce=new Yx(A),ye=new Qg(F),ke=new Fx(F,ye),oe=new $x(F,ye,G,ke),he=new Qx(F,oe,ye,ke,G),X=new jx(F,U,B),Ue=new zx(Y),me=new vy(A,ce,j,U,ke,Ue),Ce=new Oy(A,Y),xe=new yy,_e=new wy(j),et=new Ux(A,ce,w,he,_,c),je=new Iy(A,he,U),Se=new zy(F,G,U,w),Pe=new Bx(F,j,G),de=new Jx(F,j,G),G.programs=me.programs,A.capabilities=U,A.extensions=j,A.properties=Y,A.renderLists=xe,A.shadowMap=je,A.state=w,A.info=G}b!==Fn&&(S=new t_(b,t.width,t.height,a,s,r));let Qe=new lf(A,F);this.xr=Qe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let N=j.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=j.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(N){N!==void 0&&(Z=N,this.setSize(Be,J,!1))},this.getSize=function(N){return N.set(Be,J)},this.setSize=function(N,$,ae=!0){if(Qe.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=N,J=$,t.width=Math.floor(N*Z),t.height=Math.floor($*Z),ae===!0&&(t.style.width=N+"px",t.style.height=$+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,N,$)},this.getDrawingBufferSize=function(N){return N.set(Be*Z,J*Z).floor()},this.setDrawingBufferSize=function(N,$,ae){Be=N,J=$,Z=ae,t.width=Math.floor(N*ae),t.height=Math.floor($*ae),this.setViewport(0,0,N,$)},this.setEffects=function(N){if(b===Fn){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let $=0;$<N.length;$++)if(N[$].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(V)},this.getViewport=function(N){return N.copy(we)},this.setViewport=function(N,$,ae,ne){N.isVector4?we.set(N.x,N.y,N.z,N.w):we.set(N,$,ae,ne),w.viewport(V.copy(we).multiplyScalar(Z).round())},this.getScissor=function(N){return N.copy(Ge)},this.setScissor=function(N,$,ae,ne){N.isVector4?Ge.set(N.x,N.y,N.z,N.w):Ge.set(N,$,ae,ne),w.scissor(ee.copy(Ge).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(N){w.setScissorTest(Ke=N)},this.setOpaqueSort=function(N){Me=N},this.setTransparentSort=function(N){Le=N},this.getClearColor=function(N){return N.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(N=!0,$=!0,ae=!0){let ne=0;if(N){let ie=!1;if(W!==null){let He=W.texture.format;ie=l.has(He)}if(ie){let He=W.texture.type,Fe=f.has(He),ze=et.getClearColor(),Ye=et.getClearAlpha(),Ze=ze.r,vt=ze.g,tt=ze.b;Fe?(d[0]=Ze,d[1]=vt,d[2]=tt,d[3]=Ye,F.clearBufferuiv(F.COLOR,0,d)):(x[0]=Ze,x[1]=vt,x[2]=tt,x[3]=Ye,F.clearBufferiv(F.COLOR,0,x))}else ne|=F.COLOR_BUFFER_BIT}$&&(ne|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&F.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),P=N},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),et.dispose(),xe.dispose(),_e.dispose(),Y.dispose(),ce.dispose(),he.dispose(),ke.dispose(),Se.dispose(),me.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",go),Qe.removeEventListener("sessionend",vo),Ni.stop()};function It(N){N.preventDefault(),Fh("WebGLRenderer: Context Lost."),R=!0}function lt(){Fh("WebGLRenderer: Context Restored."),R=!1;let N=G.autoReset,$=je.enabled,ae=je.autoUpdate,ne=je.needsUpdate,ie=je.type;nt(),G.autoReset=N,je.enabled=$,je.autoUpdate=ae,je.needsUpdate=ne,je.type=ie}function Xn(N){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function jn(N){let $=N.target;$.removeEventListener("dispose",jn),Oa($)}function Oa(N){yu(N),Y.remove(N)}function yu(N){let $=Y.get(N).programs;$!==void 0&&($.forEach(function(ae){me.releaseProgram(ae)}),N.isShaderMaterial&&me.releaseShaderCache(N))}this.renderBufferDirect=function(N,$,ae,ne,ie,He){$===null&&($=te);let Fe=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,ze=Mu(N,$,ae,ne,ie);w.setMaterial(ne,Fe);let Ye=ae.index,Ze=1;if(ne.wireframe===!0){if(Ye=oe.getWireframeAttribute(ae),Ye===void 0)return;Ze=2}let vt=ae.drawRange,tt=ae.attributes.position,Re=vt.start*Ze,xt=(vt.start+vt.count)*Ze;He!==null&&(Re=Math.max(Re,He.start*Ze),xt=Math.min(xt,(He.start+He.count)*Ze)),Ye!==null?(Re=Math.max(Re,0),xt=Math.min(xt,Ye.count)):tt!=null&&(Re=Math.max(Re,0),xt=Math.min(xt,tt.count));let st=xt-Re;if(st<0||st===1/0)return;ke.setup(ie,ne,ze,ae,Ye);let Ft,Lt=Pe;if(Ye!==null&&(Ft=ye.get(Ye),Lt=de,Lt.setIndex(Ft)),ie.isMesh)ne.wireframe===!0?(w.setLineWidth(ne.wireframeLinewidth*se()),Lt.setMode(F.LINES)):Lt.setMode(F.TRIANGLES);else if(ie.isLine){let mn=ne.linewidth;mn===void 0&&(mn=1),w.setLineWidth(mn*se()),ie.isLineSegments?Lt.setMode(F.LINES):ie.isLineLoop?Lt.setMode(F.LINE_LOOP):Lt.setMode(F.LINE_STRIP)}else ie.isPoints?Lt.setMode(F.POINTS):ie.isSprite&&Lt.setMode(F.TRIANGLES);if(ie.isBatchedMesh)if(j.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let mn=ie._multiDrawStarts,qe=ie._multiDrawCounts,Mn=ie._multiDrawCount,ue=Ye?ye.get(Ye).bytesPerElement:1,ot=Y.get(ne).currentProgram.getUniforms();for(let $e=0;$e<Mn;$e++)ot.setValue(F,"_gl_DrawID",$e),Lt.render(mn[$e]/ue,qe[$e])}else if(ie.isInstancedMesh)Lt.renderInstances(Re,st,ie.count);else if(ae.isInstancedBufferGeometry){let mn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,qe=Math.min(ae.instanceCount,mn);Lt.renderInstances(Re,st,qe)}else Lt.render(Re,st)};function or(N,$,ae,ne){P!==null&&N.isNodeMaterial&&P.setObject(ne,N),mt===!0&&Ue.setState(N,ae,!1),N.transparent===!0&&N.side===En&&N.forceSinglePass===!1?(N.side=Cn,N.needsUpdate=!0,os(N,$,ne),N.side=Ms,N.needsUpdate=!0,os(N,$,ne),N.side=En):os(N,$,ne)}this.compile=function(N,$,ae=null){ae===null&&(ae=N),P!==null&&P.renderStart(N,$,ae),T=_e.get(ae),T.init($),y.push(T),ae.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(T.pushLight(ie),ie.castShadow&&T.pushShadow(ie))}),N!==ae&&N.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(T.pushLight(ie),ie.castShadow&&T.pushShadow(ie))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),Q=this.localClippingEnabled,mt=Ue.init(this.clippingPlanes,Q),mt===!0&&Ue.setGlobalState(this.clippingPlanes,$),P!==null&&je.render(T.state.shadowsArray,ae,$);let ne=new Set;return N.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let He=ie.material;if(He)if(Array.isArray(He))for(let Fe=0;Fe<He.length;Fe++){let ze=He[Fe];or(ze,ae,$,ie),ne.add(ze)}else or(He,ae,$,ie),ne.add(He)}),T=y.pop(),P!==null&&P.renderEnd(),ne},this.compileAsync=function(N,$,ae=null){let ne=this.compile(N,$,ae);return new Promise(ie=>{function He(){if(ne.forEach(function(Fe){let Ye=Y.get(Fe).currentProgram;(Ye===void 0||Ye.isReady())&&ne.delete(Fe)}),ne.size===0){ie(N);return}setTimeout(He,10)}j.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let yn=null;function rn(N){yn&&yn(N)}function go(){Ni.stop()}function vo(){Ni.start()}let Ni=new Y0;Ni.setAnimationLoop(rn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(N){yn=N,Qe.setAnimationLoop(N),N===null?Ni.stop():Ni.start()},Qe.addEventListener("sessionstart",go),Qe.addEventListener("sessionend",vo),this.render=function(N,$){if($!==void 0&&$.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(N,$);let ae=Qe.enabled===!0&&Qe.isPresenting===!0,ne=S!==null&&(W===null||ae)&&S.begin(A,W);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera($),$=Qe.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,$,W),T=_e.get(N,y.length),T.init($),T.state.textureUnits=B.getTextureUnits(),y.push(T),ge.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Oe.setFromProjectionMatrix(ge,Ei,$.reversedDepth),Q=this.localClippingEnabled,mt=Ue.init(this.clippingPlanes,Q),M=xe.get(N,E.length),M.init(),E.push(M),Qe.enabled===!0&&Qe.isPresenting===!0){let Fe=A.xr.getDepthSensingMesh();Fe!==null&&Is(Fe,$,-1/0,A.sortObjects)}Is(N,$,0,A.sortObjects),M.finish(),P!==null&&P.updateLights(T.state.lightsArray),A.sortObjects===!0&&M.sort(Me,Le),re=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,re&&et.addToRenderList(M,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Ue.beginShadows();let ie=T.state.shadowsArray;if(je.render(ie,N,$),mt===!0&&Ue.endShadows(),(ne&&S.hasRenderPass())===!1){let Fe=M.opaque,ze=M.transmissive;if(T.setupLights(),$.isArrayCamera){let Ye=$.cameras;if(ze.length>0)for(let Ze=0,vt=Ye.length;Ze<vt;Ze++){let tt=Ye[Ze];_o(Fe,ze,N,tt)}re&&et.render(N);for(let Ze=0,vt=Ye.length;Ze<vt;Ze++){let tt=Ye[Ze];xo(M,N,tt,tt.viewport)}}else ze.length>0&&_o(Fe,ze,N,$),re&&et.render(N),xo(M,N,$)}W!==null&&H===0&&(B.updateMultisampleRenderTarget(W),B.updateRenderTargetMipmap(W)),ne&&S.end(A),N.isScene===!0&&N.onAfterRender(A,N,$),ke.resetDefaultState(),D=-1,z=null,y.pop(),y.length>0?(T=y[y.length-1],B.setTextureUnits(T.state.textureUnits),mt===!0&&Ue.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,P!==null&&P.renderEnd()};function Is(N,$,ae,ne){if(N.visible===!1)return;if(N.layers.test($.layers)){if(N.isGroup)ae=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update($);else if(N.isLightProbeGrid)T.pushLightProbeGrid(N);else if(N.isLight)T.pushLight(N),N.castShadow&&T.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(Oe)){ne&&K.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ge);let Fe=he.update(N),ze=N.material;ze.visible&&M.push(N,Fe,ze,ae,K.z,null,$)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(Oe))){let Fe=he.update(N),ze=N.material;if(ne&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),K.copy(N.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),K.copy(Fe.boundingSphere.center)),K.applyMatrix4(N.matrixWorld).applyMatrix4(ge)),Array.isArray(ze)){let Ye=Fe.groups;for(let Ze=0,vt=Ye.length;Ze<vt;Ze++){let tt=Ye[Ze],Re=ze[tt.materialIndex];Re&&Re.visible&&M.push(N,Fe,Re,ae,K.z,tt,$)}}else ze.visible&&M.push(N,Fe,ze,ae,K.z,null,$)}}let He=N.children;for(let Fe=0,ze=He.length;Fe<ze;Fe++)Is(He[Fe],$,ae,ne)}function xo(N,$,ae,ne){let{opaque:ie,transmissive:He,transparent:Fe}=N;T.setupLightsView(ae),mt===!0&&Ue.setGlobalState(A.clippingPlanes,ae),ne&&w.viewport(V.copy(ne)),ie.length>0&&Ls(ie,$,ae),He.length>0&&Ls(He,$,ae),Fe.length>0&&Ls(Fe,$,ae),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function _o(N,$,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ne.id]===void 0){let Re=j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ne.id]=new Ut(1,1,{generateMipmaps:!0,type:Re?pn:Fn,minFilter:Gn,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let He=T.state.transmissionRenderTarget[ne.id],Fe=ne.viewport||V;He.setSize(Fe.z*A.transmissionResolutionScale,Fe.w*A.transmissionResolutionScale);let ze=A.getRenderTarget(),Ye=A.getActiveCubeFace(),Ze=A.getActiveMipmapLevel();A.setRenderTarget(He),A.getClearColor(Xe),Ae=A.getClearAlpha(),Ae<1&&A.setClearColor(16777215,.5),A.clear(),re&&et.render(ae);let vt=A.toneMapping;A.toneMapping=wi;let tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),T.setupLightsView(ne),mt===!0&&Ue.setGlobalState(A.clippingPlanes,ne),Ls(N,ae,ne),B.updateMultisampleRenderTarget(He),B.updateRenderTargetMipmap(He),j.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let xt=0,st=$.length;xt<st;xt++){let Ft=$[xt],{object:Lt,geometry:mn,material:qe,group:Mn}=Ft;if(qe.side===En&&Lt.layers.test(ne.layers)){let ue=qe.side;qe.side=Cn,qe.needsUpdate=!0,kt(Lt,ae,ne,mn,qe,Mn),qe.side=ue,qe.needsUpdate=!0,Re=!0}}Re===!0&&(B.updateMultisampleRenderTarget(He),B.updateRenderTargetMipmap(He))}A.setRenderTarget(ze,Ye,Ze),A.setClearColor(Xe,Ae),tt!==void 0&&(ne.viewport=tt),A.toneMapping=vt}function Ls(N,$,ae){let ne=$.isScene===!0?$.overrideMaterial:null;for(let ie=0,He=N.length;ie<He;ie++){let Fe=N[ie],{object:ze,geometry:Ye,group:Ze}=Fe,vt=Fe.material;vt.allowOverride===!0&&ne!==null&&(vt=ne),ze.layers.test(ae.layers)&&kt(ze,$,ae,Ye,vt,Ze)}}function kt(N,$,ae,ne,ie,He){P!==null&&ie.isNodeMaterial&&P.setObject(N,ie),N.onBeforeRender(A,$,ae,ne,ie,He),N.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ie.onBeforeRender(A,$,ae,ne,N,He),ie.transparent===!0&&ie.side===En&&ie.forceSinglePass===!1?(ie.side=Cn,ie.needsUpdate=!0,A.renderBufferDirect(ae,$,ne,ie,N,He),ie.side=Ms,ie.needsUpdate=!0,A.renderBufferDirect(ae,$,ne,ie,N,He),ie.side=En):A.renderBufferDirect(ae,$,ne,ie,N,He),N.onAfterRender(A,$,ae,ne,ie,He)}function os(N,$,ae){$.isScene!==!0&&($=te);let ne=Y.get(N),ie=T.state.lights,He=T.state.shadowsArray,Fe=ie.state.version,ze=me.getParameters(N,ie.state,He,$,ae,T.state.lightProbeGridArray),Ye=me.getProgramCacheKey(ze),Ze=ne.programs;ne.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?$.environment:null,ne.fog=$.fog;let vt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ne.envMap=ce.get(N.envMap||ne.environment,vt),ne.envMapRotation=ne.environment!==null&&N.envMap===null?$.environmentRotation:N.envMapRotation,Ze===void 0&&(N.addEventListener("dispose",jn),Ze=new Map,ne.programs=Ze);let tt=Ze.get(Ye);if(tt!==void 0){if(ne.currentProgram===tt&&ne.lightsStateVersion===Fe)return Mo(N,ze),tt}else ze.uniforms=me.getUniforms(N),P!==null&&N.isNodeMaterial&&P.build(N,ae,ze),N.onBeforeCompile(ze,A),tt=me.acquireProgram(ze,Ye),Ze.set(Ye,tt),ne.uniforms=ze.uniforms;let Re=ne.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Re.clippingPlanes=Ue.uniform),Mo(N,ze),ne.needsLights=Ds(N),ne.lightsStateVersion=Fe,ne.needsLights&&(Re.ambientLightColor.value=ie.state.ambient,Re.lightProbe.value=ie.state.probe,Re.sunLights.value=ie.state.sun,Re.sunLightShadows.value=ie.state.sunShadow,Re.directionalLights.value=ie.state.directional,Re.directionalLightShadows.value=ie.state.directionalShadow,Re.spotLights.value=ie.state.spot,Re.spotLightShadows.value=ie.state.spotShadow,Re.rectAreaLights.value=ie.state.rectArea,Re.ltc_1.value=ie.state.rectAreaLTC1,Re.ltc_2.value=ie.state.rectAreaLTC2,Re.pointLights.value=ie.state.point,Re.pointLightShadows.value=ie.state.pointShadow,Re.hemisphereLights.value=ie.state.hemi,Re.sunShadowMatrix.value=ie.state.sunShadowMatrix,Re.sunShadowCascade.value=ie.state.sunShadowCascade,Re.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Re.spotLightMatrix.value=ie.state.spotLightMatrix,Re.spotLightMap.value=ie.state.spotLightMap,Re.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=T.state.lightProbeGridArray.length>0,ne.currentProgram=tt,ne.uniformsList=null,tt}function yo(N){if(N.uniformsList===null){let $=N.currentProgram.getUniforms();N.uniformsList=Jr.seqWithValue($.seq,N.uniforms)}return N.uniformsList}function Mo(N,$){let ae=Y.get(N);ae.outputColorSpace=$.outputColorSpace,ae.batching=$.batching,ae.batchingColor=$.batchingColor,ae.instancing=$.instancing,ae.instancingColor=$.instancingColor,ae.instancingMorph=$.instancingMorph,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function za(N,$){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;p.setFromMatrixPosition($.matrixWorld);for(let ae=0,ne=N.length;ae<ne;ae++){let ie=N[ae];if(ie.texture!==null&&ie.boundingBox.containsPoint(p))return ie}return null}function Mu(N,$,ae,ne,ie){$.isScene!==!0&&($=te),B.resetTextureUnits();let He=$.fog,Fe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?$.environment:null,ze=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:bt.workingColorSpace,Ye=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ze=ce.get(ne.envMap||Fe,Ye),vt=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,tt=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Re=!!ae.morphAttributes.position,xt=!!ae.morphAttributes.normal,st=!!ae.morphAttributes.color,Ft=wi;ne.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ft=A.toneMapping);let Lt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,mn=Lt!==void 0?Lt.length:0,qe=Y.get(ne),Mn=T.state.lights;if(mt===!0&&(Q===!0||N!==z)){let Rt=N===z&&ne.id===D;Ue.setState(ne,N,Rt)}let ue=!1;ne.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Mn.state.version||qe.outputColorSpace!==ze||ie.isBatchedMesh&&qe.batching===!1||!ie.isBatchedMesh&&qe.batching===!0||ie.isBatchedMesh&&qe.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&qe.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&qe.instancing===!1||!ie.isInstancedMesh&&qe.instancing===!0||ie.isSkinnedMesh&&qe.skinning===!1||!ie.isSkinnedMesh&&qe.skinning===!0||ie.isInstancedMesh&&qe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&qe.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&qe.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&qe.instancingMorph===!1&&ie.morphTexture!==null||qe.envMap!==Ze||ne.fog===!0&&qe.fog!==He||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ue.numPlanes||qe.numIntersection!==Ue.numIntersection)||qe.vertexAlphas!==vt||qe.vertexTangents!==tt||qe.morphTargets!==Re||qe.morphNormals!==xt||qe.morphColors!==st||qe.toneMapping!==Ft||qe.morphTargetsCount!==mn||!!qe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,qe.__version=ne.version);let ot=qe.currentProgram;ue===!0&&(ot=os(ne,$,ie),P&&ne.isNodeMaterial&&P.onUpdateProgram(ne,ot,qe));let $e=!1,Dt=!1,wt=!1,ct=ot.getUniforms(),Ht=qe.uniforms;if(w.useProgram(ot.program)&&($e=!0,Dt=!0,wt=!0),ne.id!==D&&(D=ne.id,Dt=!0),qe.needsLights){let Rt=za(T.state.lightProbeGridArray,ie);qe.lightProbeGrid!==Rt&&(qe.lightProbeGrid=Rt,Dt=!0)}if($e||z!==N){w.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),ct.setValue(F,"projectionMatrix",N.projectionMatrix),ct.setValue(F,"viewMatrix",N.matrixWorldInverse);let Gt=ct.map.cameraPosition;Gt!==void 0&&Gt.setValue(F,Ee.setFromMatrixPosition(N.matrixWorld)),U.logarithmicDepthBuffer&&ct.setValue(F,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&ct.setValue(F,"isOrthographic",N.isOrthographicCamera===!0),z!==N&&(z=N,Dt=!0,wt=!0)}if(qe.needsLights&&(Mn.state.sunShadowMap.length>0&&ct.setValue(F,"sunShadowMap",Mn.state.sunShadowMap,B),Mn.state.directionalShadowMap.length>0&&ct.setValue(F,"directionalShadowMap",Mn.state.directionalShadowMap,B),Mn.state.spotShadowMap.length>0&&ct.setValue(F,"spotShadowMap",Mn.state.spotShadowMap,B),Mn.state.pointShadowMap.length>0&&ct.setValue(F,"pointShadowMap",Mn.state.pointShadowMap,B)),ie.isSkinnedMesh){ct.setOptional(F,ie,"bindMatrix"),ct.setOptional(F,ie,"bindMatrixInverse");let Rt=ie.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ct.setValue(F,"boneTexture",Rt.boneTexture,B))}ie.isBatchedMesh&&(ct.setOptional(F,ie,"batchingTexture"),ct.setValue(F,"batchingTexture",ie._matricesTexture,B),ct.setOptional(F,ie,"batchingIdTexture"),ct.setValue(F,"batchingIdTexture",ie._indirectTexture,B),ct.setOptional(F,ie,"batchingColorTexture"),ie._colorsTexture!==null&&ct.setValue(F,"batchingColorTexture",ie._colorsTexture,B));let Qn=ae.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&X.update(ie,ae,ot),(Dt||qe.receiveShadow!==ie.receiveShadow)&&(qe.receiveShadow=ie.receiveShadow,ct.setValue(F,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&$.environment!==null&&(Ht.envMapIntensity.value=$.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=Hy()),Dt){if(ct.setValue(F,"toneMappingExposure",A.toneMappingExposure),qe.needsLights&&bu(Ht,wt),He&&ne.fog===!0&&Ce.refreshFogUniforms(Ht,He),Ce.refreshMaterialUniforms(Ht,ne,Z,J,T.state.transmissionRenderTarget[N.id]),qe.needsLights&&qe.lightProbeGrid){let Rt=qe.lightProbeGrid;Ht.probesSH.value=Rt.texture,Ht.probesMin.value.copy(Rt.boundingBox.min),Ht.probesMax.value.copy(Rt.boundingBox.max),Ht.probesResolution.value.copy(Rt.resolution)}Jr.upload(F,yo(qe),Ht,B)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Jr.upload(F,yo(qe),Ht,B),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&ct.setValue(F,"center",ie.center),ct.setValue(F,"modelViewMatrix",ie.modelViewMatrix),ct.setValue(F,"normalMatrix",ie.normalMatrix),ct.setValue(F,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){let Rt=ne.uniformsGroups;for(let Gt=0,Dn=Rt.length;Gt<Dn;Gt++){let So=Rt[Gt];Se.update(So,ot),Se.bind(So,ot)}}return ot}function bu(N,$){N.ambientLightColor.needsUpdate=$,N.lightProbe.needsUpdate=$,N.sunLights.needsUpdate=$,N.sunLightShadows.needsUpdate=$,N.directionalLights.needsUpdate=$,N.directionalLightShadows.needsUpdate=$,N.pointLights.needsUpdate=$,N.pointLightShadows.needsUpdate=$,N.spotLights.needsUpdate=$,N.spotLightShadows.needsUpdate=$,N.rectAreaLights.needsUpdate=$,N.hemisphereLights.needsUpdate=$}function Ds(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(N,$,ae){let ne=Y.get(N);ne.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Y.get(N.texture).__webglTexture=$,Y.get(N.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,$){let ae=Y.get(N);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(N,$=0,ae=0){W=N,O=$,H=ae;let ne=null,ie=!1,He=!1;if(N){let ze=Y.get(N);if(ze.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(F.FRAMEBUFFER,ze.__webglFramebuffer),V.copy(N.viewport),ee.copy(N.scissor),le=N.scissorTest,w.viewport(V),w.scissor(ee),w.setScissorTest(le),D=-1;return}else if(ze.__webglFramebuffer===void 0)B.setupRenderTarget(N);else if(ze.__hasExternalTextures)B.rebindTextures(N,Y.get(N.texture).__webglTexture,Y.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let vt=N.depthTexture;if(ze.__boundDepthTexture!==vt){if(vt!==null&&Y.has(vt)&&(N.width!==vt.image.width||N.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(N)}}let Ye=N.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(He=!0);let Ze=Y.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ze[$])?ne=Ze[$][ae]:ne=Ze[$],ie=!0):N.samples>0&&B.useMultisampledRTT(N)===!1?ne=Y.get(N).__webglMultisampledFramebuffer:Array.isArray(Ze)?ne=Ze[ae]:ne=Ze,V.copy(N.viewport),ee.copy(N.scissor),le=N.scissorTest}else V.copy(we).multiplyScalar(Z).floor(),ee.copy(Ge).multiplyScalar(Z).floor(),le=Ke;if(ae!==0&&(ne=I),w.bindFramebuffer(F.FRAMEBUFFER,ne)&&w.drawBuffers(N,ne),w.viewport(V),w.scissor(ee),w.setScissorTest(le),ie){let ze=Y.get(N.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+$,ze.__webglTexture,ae)}else if(He){let ze=$;for(let Ye=0;Ye<N.textures.length;Ye++){let Ze=Y.get(N.textures[Ye]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ye,Ze.__webglTexture,ae,ze)}}else if(N!==null&&ae!==0){let ze=Y.get(N.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ze.__webglTexture,ae)}D=-1};function bo(N){let $=Y.get(N);return($.__readFormat!==N.format||$.__readType!==N.type)&&($.__readFormat=N.format,$.__readType=N.type,$.__formatReadable=U.textureFormatReadable(N.format),$.__typeReadable=U.textureTypeReadable(N.type)),$}this.readRenderTargetPixels=function(N,$,ae,ne,ie,He,Fe,ze=0){if(!(N&&N.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Y.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ye=Ye[Fe]),Ye){w.bindFramebuffer(F.FRAMEBUFFER,Ye);try{let Ze=N.textures[ze],vt=Ze.format,tt=Ze.type;N.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ze);let Re=bo(Ze);if(Re.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=N.width-ne&&ae>=0&&ae<=N.height-ie&&F.readPixels($,ae,ne,ie,De.convert(vt),De.convert(tt),He)}finally{let Ze=W!==null?Y.get(W).__webglFramebuffer:null;w.bindFramebuffer(F.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(N,$,ae,ne,ie,He,Fe,ze=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Y.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ye=Ye[Fe]),Ye)if($>=0&&$<=N.width-ne&&ae>=0&&ae<=N.height-ie){w.bindFramebuffer(F.FRAMEBUFFER,Ye);let Ze=N.textures[ze],vt=Ze.format,tt=Ze.type;N.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ze);let Re=bo(Ze);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.bufferData(F.PIXEL_PACK_BUFFER,He.byteLength,F.STREAM_READ),F.readPixels($,ae,ne,ie,De.convert(vt),De.convert(tt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let st=W!==null?Y.get(W).__webglFramebuffer:null;w.bindFramebuffer(F.FRAMEBUFFER,st);let Ft=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await v0(F,Ft,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,He),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(xt),F.deleteSync(Ft),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,$=null,ae=0){let ne=Math.pow(2,-ae),ie=Math.floor(N.image.width*ne),He=Math.floor(N.image.height*ne),Fe=$!==null?$.x:0,ze=$!==null?$.y:0;B.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,ae,0,0,Fe,ze,ie,He),w.unbindTexture()},this.copyTextureToTexture=function(N,$,ae=null,ne=null,ie=0,He=0){let Fe,ze,Ye,Ze,vt,tt,Re,xt,st,Ft=N.isCompressedTexture?N.mipmaps[He]:N.image;if(ae!==null)Fe=ae.max.x-ae.min.x,ze=ae.max.y-ae.min.y,Ye=ae.isBox3?ae.max.z-ae.min.z:1,Ze=ae.min.x,vt=ae.min.y,tt=ae.isBox3?ae.min.z:0;else{let Ht=Math.pow(2,-ie);Fe=Math.floor(Ft.width*Ht),ze=Math.floor(Ft.height*Ht),N.isDataArrayTexture?Ye=Ft.depth:N.isData3DTexture?Ye=Math.floor(Ft.depth*Ht):Ye=1,Ze=0,vt=0,tt=0}ne!==null?(Re=ne.x,xt=ne.y,st=ne.z):(Re=0,xt=0,st=0);let Lt=De.convert($.format),mn=De.convert($.type),qe;$.isData3DTexture?(B.setTexture3D($,0),qe=F.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(B.setTexture2DArray($,0),qe=F.TEXTURE_2D_ARRAY):(B.setTexture2D($,0),qe=F.TEXTURE_2D),w.activeTexture(F.TEXTURE0),w.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),w.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),w.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);let Mn=w.getParameter(F.UNPACK_ROW_LENGTH),ue=w.getParameter(F.UNPACK_IMAGE_HEIGHT),ot=w.getParameter(F.UNPACK_SKIP_PIXELS),$e=w.getParameter(F.UNPACK_SKIP_ROWS),Dt=w.getParameter(F.UNPACK_SKIP_IMAGES);w.pixelStorei(F.UNPACK_ROW_LENGTH,Ft.width),w.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ft.height),w.pixelStorei(F.UNPACK_SKIP_PIXELS,Ze),w.pixelStorei(F.UNPACK_SKIP_ROWS,vt),w.pixelStorei(F.UNPACK_SKIP_IMAGES,tt);let wt=N.isDataArrayTexture||N.isData3DTexture,ct=$.isDataArrayTexture||$.isData3DTexture;if(N.isDepthTexture){let Ht=Y.get(N),Qn=Y.get($),Rt=Y.get(Ht.__renderTarget),Gt=Y.get(Qn.__renderTarget);w.bindFramebuffer(F.READ_FRAMEBUFFER,Rt.__webglFramebuffer),w.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Dn=0;Dn<Ye;Dn++)wt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(N).__webglTexture,ie,tt+Dn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get($).__webglTexture,He,st+Dn)),F.blitFramebuffer(Ze,vt,Fe,ze,Re,xt,Fe,ze,F.DEPTH_BUFFER_BIT,F.NEAREST);w.bindFramebuffer(F.READ_FRAMEBUFFER,null),w.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ie!==0||N.isRenderTargetTexture||Y.has(N)){let Ht=Y.get(N),Qn=Y.get($);w.bindFramebuffer(F.READ_FRAMEBUFFER,C),w.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let Rt=0;Rt<Ye;Rt++)wt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,ie,tt+Rt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ht.__webglTexture,ie),ct?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qn.__webglTexture,He,st+Rt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qn.__webglTexture,He),ie!==0?F.blitFramebuffer(Ze,vt,Fe,ze,Re,xt,Fe,ze,F.COLOR_BUFFER_BIT,F.NEAREST):ct?F.copyTexSubImage3D(qe,He,Re,xt,st+Rt,Ze,vt,Fe,ze):F.copyTexSubImage2D(qe,He,Re,xt,Ze,vt,Fe,ze);w.bindFramebuffer(F.READ_FRAMEBUFFER,null),w.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ct?N.isDataTexture||N.isData3DTexture?F.texSubImage3D(qe,He,Re,xt,st,Fe,ze,Ye,Lt,mn,Ft.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(qe,He,Re,xt,st,Fe,ze,Ye,Lt,Ft.data):F.texSubImage3D(qe,He,Re,xt,st,Fe,ze,Ye,Lt,mn,Ft):N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,He,Re,xt,Fe,ze,Lt,mn,Ft.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,He,Re,xt,Ft.width,Ft.height,Lt,Ft.data):F.texSubImage2D(F.TEXTURE_2D,He,Re,xt,Fe,ze,Lt,mn,Ft);w.pixelStorei(F.UNPACK_ROW_LENGTH,Mn),w.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue),w.pixelStorei(F.UNPACK_SKIP_PIXELS,ot),w.pixelStorei(F.UNPACK_SKIP_ROWS,$e),w.pixelStorei(F.UNPACK_SKIP_IMAGES,Dt),He===0&&$.generateMipmaps&&F.generateMipmap(qe),w.unbindTexture()},this.initRenderTarget=function(N){Y.get(N).__webglFramebuffer===void 0&&B.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?B.setTextureCube(N,0):N.isData3DTexture?B.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?B.setTexture2DArray(N,0):B.setTexture2D(N,0),w.unbindTexture()},this.resetState=function(){O=0,H=0,W=null,w.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var zt=(i,e,t)=>i<e?e:i>t?t:i,Pt=(i,e,t)=>i+(e-i)*t,jc=i=>i*i*(3-2*i),At=(i,e,t)=>{let n=zt((t-i)/(e-i),0,1);return n*n*(3-2*n)},ep=1337;function tp(i){ep=i|0}function Vy(i){return i=i^ep|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var oi=(i,e)=>Vy(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function ri(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return Pt(oi(t,e),oi(t+1,e),s)}var Qc=(i,e=0)=>ri(i,e)*.55+ri(i*2.03,e+7)*.3+ri(i*4.1,e+13)*.15;function ln(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Kc=new Te,fe=i=>(Kc.set(i),[Kc.r,Kc.g,Kc.b]),np=(i,e,t)=>[Pt(i[0],e[0],t),Pt(i[1],e[1],t),Pt(i[2],e[2],t)],xn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Gi=["city","sakura","coast","country","mountain","snow"],Aa={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},cf=1500,ip=260,Es=0,uf=0;function rp(i){uf=Math.max(0,Gi.indexOf(i))}function jr(i){let e=Math.floor(i/cf),t=i-e*cf,n=jc(zt((t-(cf-ip))/ip,0,1)),s=Gi.length;return{a:Gi[((e+uf)%s+s)%s],b:Gi[((e+uf+1)%s+s)%s],t:n}}function Nt(i){let e=jr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var en=i=>{let e=jr(i);return e.t<.5?e.a:e.b};function In(i,e){let t=jr(i);return Pt(Aa[t.a][e],Aa[t.b][e],t.t)}var js=650,Qs=375,Qr=i=>i*js+Qs;function Ra(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Nt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var hf={x:new Map,r:new Map,t:new Map};function ff(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function eo(i){let e=Math.round((i-Qs)/js);return ff(hf.x,e,()=>{let t=Qr(e);return Ra(t)?{k:e,s:t}:null})}function Gy(i){let e=eo(i);return e?1-At(8,45,Math.abs(i-e.s)):0}var er=1150,to=820,Ca=4.6,df=i=>i*er+to;function pf(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Nt(i+t);if(n.country+n.sakura<.9)return!1}let e=eo(i);return!(e&&Math.abs(e.s-i)<170)}function Wi(i){let e=Math.round((i-to)/er);return ff(hf.r,e,()=>{let t=df(e);return pf(t)?{k:e,s:t}:null})}function Wy(i){let e=Wi(i);return e?1-At(30,70,Math.abs(i-e.s)):0}function Xy(i){let e=-Ca;return i<11?e-1.3:i<16?Pt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?Pt(e+.7,.35,(i-20)/5.5):.35}var op=1050,ap=525,sn=85,tn=125,qy=24,Yy=i=>i*op+ap;function Zy(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Nt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function mi(i){let e=Math.round((i-ap)/op);return ff(hf.t,e,()=>{let t=Yy(e);return Zy(t)?{k:e,s:t}:null})}function $y(i){let e=mi(i);return e?1-At(sn+20,tn+25,Math.abs(i-e.s)):0}var eu=0,nu=(i,e)=>{let t=i/tn;return qy*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var Vi=2,tu=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(ri(e/300,11)-.5)*2+(ri(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*In(e,"curv")*(1-Math.max(Gy(e),Wy(e),$y(e)))}elevRaw(e){return In(e,"base")+In(e,"hill")*(Qc(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=eo(e);if(n){let o=1-At(8,45,Math.abs(e-n.s));o>0&&(t=Pt(t,this.elevRaw(n.s),o))}let s=Wi(e);if(s){let o=1-At(30,70,Math.abs(e-s.s));o>0&&(t=Pt(t,this.elevRaw(s.s),o))}let r=mi(e);if(r){let o=1-At(sn+10,tn+45,Math.abs(e-r.s));o>0&&(t=Pt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*Vi<e+Vi;){let t=this.X.length-1,n=t*Vi,s=this.curv(n+Vi/2)*Vi,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*Vi),this.Z.push(this.Z[t]+Math.cos(r+s/2)*Vi),this.H.push(r+s),this.Y.push(this.elev(n+Vi))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+Vi);let n=e/Vi,s=Math.floor(n),r=n-s;t.x=Pt(this.X[s],this.X[s+1],r),t.z=Pt(this.Z[s],this.Z[s+1],r),t.y=Pt(this.Y[s],this.Y[s+1],r),t.h=Pt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),a=Math.cos(t.h);return t.fx=o,t.fz=a,t.rx=-a,t.rz=o,t}};function sp(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+At(45,190,r)*16*(.45+.55*ri(e/160+(t>0?50:0),3));case"coast":{if(t>0)return r<s+.9?-.06:-.15+At(s+1.5,80,r)*24*(.5+.5*ri(e/170,5))+At(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let o=r-(s+2);return(o<26?Pt(1.25,-1.6,o/26):Pt(-1.6,-7,zt((o-26)/20,0,1)))-n}case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let a=8+6*ri(e/140,61),c=r-(s+1);return c<a?c:Math.min(a+(c-a)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+At(105,230,r)*95*(.6+.4*ri(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Pt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(ri(e/40+(t>0?3:0),71)-.5):.55+At(125,210,r)*40*(.45+.55*ri(e/230+(t>0?11:0),73));case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+At(135,215,r)*36*(.4+.6*ri(e/210+(t>0?9:0),7))}}function no(i,e,t,n){let s=jr(i),r=sp(s.a,i,e,t,n),o=s.t>0?Pt(r,sp(s.b,i,e,t,n),s.t):r;eu=0;let a=Wi(i);if(a){let _=Math.abs(i-a.s);if(_>=36)return o;let b=_<29?Xy(_):Pt(.35,o,At(29,36,_));return Math.abs(e)<n+3.2&&(b=Math.min(b,-.08)),b}let c=mi(i);if(!c)return o;let u=i-c.s,h=Math.abs(u);if(h>=2*tn)return o;let m=Math.abs(e),v=nu(u,e),g;return h<sn?g=m<=n+1.46?-.25:Math.max(o,v):g=Math.max(o,Math.min(v,m<n+1?-.06:m-(n+1))),eu=Math.max(0,g-o),g}function lp(i){let e=Wi(i);return e?1-At(27,34,Math.abs(i-e.s)):0}var Pa=new k,iu=new k,Jy=[1,1,1],_n=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new it,this.nm=new pt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,a,c,u){this.n>=this.cap&&this.grow(this.n+1);let h=this.e,m=this.ne,v=this.n*3,g=this.P,_=this.bb,b=h[0]*e+h[4]*t+h[8]*n+h[12],l=h[1]*e+h[5]*t+h[9]*n+h[13],f=h[2]*e+h[6]*t+h[10]*n+h[14];g[v]=b,g[v+1]=l,g[v+2]=f,b<_[0]&&(_[0]=b),l<_[1]&&(_[1]=l),f<_[2]&&(_[2]=f),b>_[3]&&(_[3]=b),l>_[4]&&(_[4]=l),f>_[5]&&(_[5]=f);let d=m[0]*s+m[3]*r+m[6]*o,x=m[1]*s+m[4]*r+m[7]*o,p=m[2]*s+m[5]*r+m[8]*o,M=127/(Math.sqrt(d*d+x*x+p*p)||1);if(this.N[v]=Math.round(d*M),this.N[v+1]=Math.round(x*M),this.N[v+2]=Math.round(p*M),this.hasUV&&(this.U[this.n*2]=a,this.U[this.n*2+1]=c),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(l)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasColor){let T=u||Jy,E=this.Cl;E[v]=T[0]>=1?255:T[0]<=0?0:T[0]*255+.5,E[v+1]=T[1]>=1?255:T[1]<=0?0:T[1]*255+.5,E[v+2]=T[2]>=1?255:T[2]<=0?0:T[2]*255+.5}this.n++}quad(e,t,n,s,r,o){Pa.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),iu.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),iu.lengthSq()<1e-12&&iu.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Pa.cross(iu).normalize();let a=Pa.x,c=Pa.y,u=Pa.z,h=o?o.u0:0,m=o?o.u1:1,v=o?o.v0:0,g=o?o.v1:1;this.vtx(e[0],e[1],e[2],a,c,u,h,v,r),this.vtx(t[0],t[1],t[2],a,c,u,m,v,r),this.vtx(n[0],n[1],n[2],a,c,u,m,g,r),this.vtx(e[0],e[1],e[2],a,c,u,h,v,r),this.vtx(n[0],n[1],n[2],a,c,u,m,g,r),this.vtx(s[0],s[1],s[2],a,c,u,h,g,r)}box(e,t,n,s,r,o,a,c=null,u=null){let h=c||{},m=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],m.nz||a,h.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],m.pz||a,h.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],m.nx||a,h.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],m.px||a,h.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],m.py||a,h.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],m.ny||a,h.ny)}cyl(e,t,n,s,r,o,a,c,u=!0){let h=(s-r)/o;for(let m=0;m<a;m++){let v=m/a*Math.PI*2,g=(m+1)/a*Math.PI*2,_=Math.cos(v),b=Math.sin(v),l=Math.cos(g),f=Math.sin(g),d=[e+_*s,t,n+b*s],x=[e+l*s,t,n+f*s],p=[e+l*r,t+o,n+f*r],M=[e+_*r,t+o,n+b*r];this.vtx(d[0],d[1],d[2],_,h,b,0,0,c),this.vtx(M[0],M[1],M[2],_,h,b,0,0,c),this.vtx(p[0],p[1],p[2],l,h,f,0,0,c),this.vtx(d[0],d[1],d[2],_,h,b,0,0,c),this.vtx(p[0],p[1],p[2],l,h,f,0,0,c),this.vtx(x[0],x[1],x[2],l,h,f,0,0,c),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,c),this.vtx(p[0],p[1],p[2],0,1,0,0,0,c),this.vtx(M[0],M[1],M[2],0,1,0,0,0,c))}}rod(e,t,n,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],u=t[2]-e[2],h=Math.hypot(a,c,u);a/=h,c/=h,u/=h;let m=0,v=1,g=0;Math.abs(c)>.99&&(m=1,v=0);let _=c*g-u*v,b=u*m-a*g,l=a*v-c*m,f=Math.hypot(_,b,l);_/=f,b/=f,l/=f;let d=b*u-l*c,x=l*a-_*u,p=_*c-b*a;for(let M=0;M<r;M++){let T=M/r*Math.PI*2,E=(M+1)/r*Math.PI*2,y=Math.cos(T),S=Math.sin(T),A=Math.cos(E),R=Math.sin(E),P=_*y+d*S,I=b*y+x*S,C=l*y+p*S,L=_*A+d*R,O=b*A+x*R,H=l*A+p*R,W=[e[0]+P*n,e[1]+I*n,e[2]+C*n],D=[e[0]+L*n,e[1]+O*n,e[2]+H*n],z=[t[0]+L*s,t[1]+O*s,t[2]+H*s],V=[t[0]+P*s,t[1]+I*s,t[2]+C*s];this.vtx(W[0],W[1],W[2],P,I,C,0,0,o),this.vtx(D[0],D[1],D[2],L,O,H,0,0,o),this.vtx(z[0],z[1],z[2],L,O,H,0,0,o),this.vtx(W[0],W[1],W[2],P,I,C,0,0,o),this.vtx(z[0],z[1],z[2],L,O,H,0,0,o),this.vtx(V[0],V[1],V[2],P,I,C,0,0,o)}return h}blob(e,t,n,s,r,o,a=0,c=1){let u=cp[a%cp.length],h=u.attributes.position.array,m=u.attributes.normal.array,v=u.userData.disp;for(let g=0;g<h.length;g+=3){let _=1+v[g/3],b=Math.max(0,Math.min(1,m[g+1]*.5+.5)),l=[o[0]+(r[0]-o[0])*b,o[1]+(r[1]-o[1])*b,o[2]+(r[2]-o[2])*b];this.vtx(e+h[g]*s*_,t+h[g+1]*s*_*c,n+h[g+2]*s*_,m[g],m[g+1],m[g+2],0,0,l)}}wire(e,t,n,s,r,o=10){let a=e;this.noShadow=!0;for(let c=1;c<=o;c++){let u=c/o,h=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(a,h,s,s,3,r),a=h}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,a,c]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],a,c,s[o])}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,a=e.C,c=e.U,u=this.n,h=this.bb;for(let m=0;m<e.n*3;m+=3){let v=r[m],g=r[m+1],_=r[m+2],b=u*3+m,l=n[0]*v+n[4]*g+n[8]*_+n[12],f=n[1]*v+n[5]*g+n[9]*_+n[13],d=n[2]*v+n[6]*g+n[10]*_+n[14];this.P[b]=l,this.P[b+1]=f,this.P[b+2]=d,this.hasAO&&(this.A[u+m/3]=this.aoByte(f)),l<h[0]&&(h[0]=l),f<h[1]&&(h[1]=f),d<h[2]&&(h[2]=d),l>h[3]&&(h[3]=l),f>h[4]&&(h[4]=f),d>h[5]&&(h[5]=d);let x=o[m],p=o[m+1],M=o[m+2],T=s[0]*x+s[3]*p+s[6]*M,E=s[1]*x+s[4]*p+s[7]*M,y=s[2]*x+s[5]*p+s[8]*M,S=127/(Math.sqrt(T*T+E*E+y*y)||1);this.N[b]=Math.round(T*S),this.N[b+1]=Math.round(E*S),this.N[b+2]=Math.round(y*S)}this.hasColor&&(a?this.Cl.set(a,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(c?this.U.set(c,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.n+=e.n}build(){if(!this.n)return null;let e=new yt,t=this.n,n=this.bb;return e.setAttribute("position",new Bt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new Bt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new Bt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new Bt(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new Bt(this.Lt.slice(0,t),1,!0)),this.hasColor&&e.setAttribute("color",new Bt(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new hi(new k(n[0],n[1],n[2]),new k(n[3],n[4],n[5])),e.boundingSphere=e.boundingBox.getBoundingSphere(new fi),e}},cp=[0,1,2,3].map(i=>{let e=new oa(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,a)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(a*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});ft.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var Ky=ft.shadowmap_pars_fragment;function gf(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;ft.shadowmap_pars_fragment=Ky.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}gf(1);function dp(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";ft.shadowmap_pars_fragment=t+ft.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}ft.lights_fragment_begin=ft.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var ws=4200,We={uSkyHor:{value:new Te(.7,.8,.9)},uSkyZen:{value:new Te(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Ie},uSunDir:{value:new k(0,1,0)},uSunCol:{value:new Te(1,1,1)},uTuftV:{value:new Ie(0,.333)},uTunA:{value:new k(0,-1e4,0)},uTunB:{value:new k(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new k},uCarFwd:{value:new k(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:jy()},uCloudTex:{value:null},uCloudOrg:{value:new Ie},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Ie(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function pp(i){let e=new ps(new Uint8Array(i),i.length,1,Zs);return e.minFilter=e.magFilter=fn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var Kn=pp([16,16,16,70,200,255,255,255]),su=pp([28,40,70,130,200,240,255,255]);function jy(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new ps(e,256,256,Jn);return s.wrapS=s.wrapT=Cr,s.magFilter=Ot,s.minFilter=Gn,s.generateMipmaps=!0,s.colorSpace=Ri,s.needsUpdate=!0,s}var gi=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,ru=1600,mf=256,Qy=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/ru).toFixed(8)} + 0.5).r * uCloudSh; }`,e2=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,t2=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/ru).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,n2=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,i2=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,s2=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,ou=new kr;ou.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};ou.customProgramCacheKey=()=>"propdepth";function mp(){let i=new Ut(mf,mf,{format:Zs,type:Fn,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),e=new _t({uniforms:{uCenter:{value:new Ie},uOrigin:We.uOrigin,uTime:We.uTime,uNoiseTex:We.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${ru.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new gt(new nn(2,2),e),n=new Qi;t.frustumCulled=!1,We.uCloudTex.value=i.texture,We.uCloudTex.rt=i;let s=ru/mf;return{update(r,o,a,c,u){let h=Math.round((o+c)/s)*s-c,m=Math.round((a+u)/s)*s-u;e.uniforms.uCenter.value.set(h,m),We.uCloudOrg.value.set(h,m);let v=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(v)}}}function tr(i,e="",t="",n=!0){i.uniforms.uOrigin=We.uOrigin,i.uniforms.uCloudSh=We.uCloudSh,i.uniforms.uTime=We.uTime,i.uniforms.uNoiseTex=We.uNoiseTex,i.uniforms.uCloudTex=We.uCloudTex,i.uniforms.uCloudOrg=We.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=We[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?t2:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${gi}${Qy}${i2}${e}`).replace("#include <opaque_fragment>",`${n?n2:e2}${t}${s2}
#include <opaque_fragment>`)}var r2=`
// an anti-aliased line of half-width hw (world units) at d = 0, given d's screen-space footprint fw; fades out once it is
// thinner than a pixel
float crackLine(float d, float hw, float fw){ fw = max(fw, 1e-4); return clamp((hw - abs(d)) / fw + 0.5, 0.0, 1.0) * min(1.0, 2.0 * hw / fw); }
vec3 roadCol(float s, float u, float rw){
  float a = abs(u); vec2 p = vec2(s, u);
  vec3 c = L(vec3(0.58, 0.57, 0.57));
  c *= 0.90 + 0.14*fbm2(p*0.45) + 0.10*(hash12(floor(p*22.0)) - 0.5);
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
  paint += step(abs(a - (rw - 0.28)), 0.07);
  paint += (1.0 - step(0.5, city)) * (1.0 - step(0.5, mtn)) * step(a, 0.07) * step(fract(s/10.0), 0.55);
  float cs = mod(s, 150.0);
#ifdef Z_CITY
  if (city > 0.5) {
    if (cs < 4.0 && a < rw - 0.45) paint += step(0.5, fract(u/0.9 + 0.25));
    if (cs > 147.2 && cs < 147.65 && u < -0.1 && u > -rw + 0.4) paint += 1.0;
    vec2 dm = vec2((cs - 118.0)/3.2, (u + 1.55)/0.62); float dd = abs(dm.x) + abs(dm.y);
    if (dd < 1.0 && dd > 0.82) paint += 1.0;
  }
#endif
  paint = clamp(paint, 0.0, 1.0) * (0.8 + 0.2*vnoise(p*6.0));
  c = mix(c, L(vec3(0.96, 0.96, 0.93)), paint);
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
vec3 sakuraGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
  vec3 g = grassCol(p, L(vec3(0.36, 0.60, 0.28)), L(vec3(0.62, 0.78, 0.37)));
  float pet = smoothstep(0.7, 0.8, vnoise(p*3.3)) * (1.0 - 0.6*smoothstep(rw + 6.0, rw + 20.0, abs(u)));
  return mix(g, L(vec3(1.0, 0.83, 0.89)), pet*0.85);
}
vec3 coastGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  if (u > 0.0) return grassCol(p, L(vec3(0.31, 0.60, 0.25)), L(vec3(0.52, 0.79, 0.32)));
  if (a < rw + 1.45) return L(vec3(0.73, 0.72, 0.69)) * (0.9 + 0.1*fbm2(p));
  if (a < rw + 2.08) return L(vec3(0.70, 0.70, 0.68)) * (0.82 + 0.12*vnoise(p*vec2(0.4, 5.0)));
  vec3 sand = mix(L(vec3(0.94, 0.87, 0.71)), L(vec3(0.85, 0.77, 0.62)), fbm2(p*0.2));
  return mix(sand, L(vec3(0.6, 0.55, 0.46)), 0.6*(1.0 - smoothstep(0.0, 0.9, vWY)));
}
vec3 countryGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  if (a < rw + 0.7) return L(vec3(0.63, 0.59, 0.51)) * (0.85 + 0.2*vnoise(p*3.0));
  if (a < rw + 2.1) return mix(L(vec3(0.27, 0.50, 0.24)), L(vec3(0.41, 0.63, 0.29)), vnoise(p*1.5));
  if (a < 135.0) {
    float pu = a - (rw + 2.1);
    vec2 q = vec2(s/30.0, pu/17.0), id = floor(q), f = fract(q);
    float h = hash12(id + (u > 0.0 ? 31.0 : 0.0));
    // rows of rice 33 cm apart, hills 16 cm apart along them. Anti-aliased: once a row is narrower than ~2 pixels it
    // fades to its average (the bare smoothstep used to crawl in moir\xE9 bands across the far fields as we drove)
    vec2 cg = vec2(pu / 0.33, s / 0.16), cf = fract(cg) - 0.5;
    float aa = clamp(max(fwidth(cg.x), fwidth(cg.y)) * 1.6 - 0.3, 0.0, 1.0);
    float rows = mix(smoothstep(0.30, 0.48, abs(cf.x)), 0.4, aa);
    vec3 field = mix(L(vec3(0.44, 0.66, 0.29)), L(vec3(0.58, 0.77, 0.36)), h) * (0.88 + 0.14*rows);
    if (h < 0.28) {
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
    else if (h > 0.86) field = L(vec3(0.36, 0.54, 0.25)) * (0.88 + 0.16*rows);
    float ridge = max(max(step(f.x, 0.025), step(0.975, f.x)), max(step(f.y, 0.04), step(0.96, f.y)));
    gWater *= 1.0 - ridge;
    return mix(field, L(vec3(0.48, 0.64, 0.32)), ridge) * (0.94 + 0.1*fbm2(p*0.03));
  }
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
`,o2=`
#ifdef Z_COUNTRY
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
#endif`,a2=`
if (uWet > 0.01) {
  float kind = vRK.y;
  float hard = ((kind > 0.5 && kind < 7.5) || kind > 9.5) ? 1.0 : 0.0;
  float fr = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 4.0);
  float isRoad = step(0.5, kind) * step(kind, 1.5);
  float puddle = smoothstep(0.6, 0.72, fbm2(vSU * vec2(0.22, 0.35) + 3.7)) * isRoad;
  vec2 rc = vSU * 1.6, fp = fract(rc) - 0.5; float ph = fract(uTime * 0.85 + hash12(floor(rc)));
  float ring = (1.0 - smoothstep(0.0, 0.045, abs(length(fp) - ph * 0.48))) * (1.0 - ph) * puddle;
  vec3 refl = mix(uSkyHor, uSkyZen, 0.35) * (0.75 - 0.4 * uNight);
  float k = uWet * hard * clamp(0.05 + fr * 0.55 + puddle * 0.6, 0.0, 0.9);
  if (uReflOn > 0.5 && k > 0.12) { // the lights and the street mirror in the wet road (skipped where it reflects little):
    vec2 suv = gl_FragCoord.xy / uReflRes;   // sample last frame's light above the horizon, where the reflected ray's scenery
    float my = uHorizon + (uHorizon - suv.y) * uReflK, st = mix(0.03, 0.012, puddle); // sits (uReflK corrects for the camera
    vec3 r = textureLod(uReflTex, vec2(suv.x, my), 0.0).rgb * 0.45 + textureLod(uReflTex, vec2(suv.x, my + st), 0.0).rgb * 0.33 // height), stretched
      + textureLod(uReflTex, vec2(suv.x, my + 2.2 * st), 0.0).rgb * 0.22;                       // into vertical streaks like rough wet asphalt
    refl = mix(refl, r, smoothstep(1.0, 0.9, my)); // (off the top of the screen: the sky colour as before)
  }
  outgoingLight = mix(outgoingLight * (1.0 - 0.38 * uWet * hard), refl, k) + ring * 0.1 * uWet * (refl + 0.05);
  outgoingLight *= 1.0 - 0.12 * uWet * (1.0 - hard);
}`,gp={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"};function vp(i){let e={};for(let t of i)e[gp[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),e}var up=new Map;function Ia(i){let e=[...new Set(i)].sort().join("+"),t=up.get(e);return t||(t=xp(vp(e.split("+")),e),up.set(e,t)),t}function xp(i=vp(Object.keys(gp)),e="all"){let t=new an({color:16777215,gradientMap:Kn});return t.defines=i,t.onBeforeCompile=n=>{n.uniforms.uSkyHor=We.uSkyHor,n.uniforms.uSkyZen=We.uSkyZen,n.uniforms.uWet=We.uWet,n.uniforms.uNight=We.uNight,n.uniforms.uSunDir=We.uSunDir,n.uniforms.uSunCol=We.uSunCol;for(let s of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])n.uniforms[s]=We[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),tr(n,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${r2}`,a2+o2,!1),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v17-"+e,t}function hp(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),tr(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function l2(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=We[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function c2(i){i.uniforms.uLightsOn=We.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function fp(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function vf(i){return i.onBeforeCompile=e=>tr(e),i.customProgramCacheKey=()=>"cs",i}var u2="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",h2=(i,e,t="")=>`
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
}`;function xf(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=We[o];s&&Object.assign(r.uniforms,s.uniforms),tr(r,u2+(s?s.pars:""),h2(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}function _p(i,e){let t={};t.ground=xp(),t.color=hp(new an({vertexColors:!0,gradientMap:Kn}),1.6,.1,"color-v3",fp),t.atlas=new an({vertexColors:!0,gradientMap:Kn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=a=>{fp(a),c2(a),tr(a)},t.atlas.customProgramCacheKey=()=>"atlas-v5",t.foliage=hp(new an({vertexColors:!0,gradientMap:su}),2.6,.24,"foliage-v2"),t.lamp=new on({color:15789798}),t.sig=new on({color:new Te(.15,1.7,1.1)}),t.sodium=new on({color:new Te(5,2.3,.65)}),t.decal=new an({vertexColors:!0,gradientMap:Kn,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=a=>tr(a),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new an({map:e,vertexColors:!0,gradientMap:su,alphaTest:.42,side:En}),t.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",ft.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),tr(a),l2(a),a.uniforms.uTuftV=We.uTuftV,a.uniforms.uWind=We.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec2 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y);
  float wgt = mix(0.03, 0.09 * clamp((uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x), 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v4"),t.wire=new on({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let o=new $n(n);return t.pool=new on({map:o,color:16762746,transparent:!0,opacity:0,blending:es,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=o,t}var f2=fe("#f2c230"),yp=fe("#26272c");function au(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=In(s,"rw"),a=n*(o+.8),c=Nt(s),u=c.city+c.sakura>.5;t.push({x:r.x+r.rx*a,z:r.z+r.rz*a,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function Mp(){let i=new Jt,e=vf(new an({vertexColors:!0,gradientMap:Kn})),t=new on({color:new Te(6,.45,.3)}),n=new on({color:new Te(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Jt,o=new Jt;r.add(o),o.position.set(-.42,1.02,-.02);let a=new _n,c=3.6;for(let m=0,v=0;v<c;m++,v+=.45)a.box(-Math.min(v+.45,c),-.065,-.065,-v,.065,.065,m%2?yp:f2);a.box(0,-.09,-.07,.38,.09,.07,yp);let u=new gt(a.build(),e);u.castShadow=!0,o.add(u);let h=[-.28,.28].map(m=>{let v=new gt(new Gs(.13,18),n);return v.position.set(m,2.75,-.1),v.rotation.y=Math.PI,r.add(v),v});return i.add(r),{root:r,pivot:o,arm:u,lamps:h,L:c}});return i.visible=!1,{group:i,update(r,o,a,c,u){i.visible=!!r,r&&r.forEach((h,m)=>{let v=s[m];v.root.position.set(h.x-o.x,h.y,h.z-o.z),v.root.rotation.y=h.yaw,v.arm.scale.x=(h.rw+.25)/v.L,v.pivot.rotation.z=-a*(Math.PI/2-.06);let g=Math.floor(u*2.5)%2;v.lamps[0].material=c&&g===0?t:n,v.lamps[1].material=c&&g===1?t:n})}}}function d2(){let t=()=>{let f=document.createElement("canvas");return f.width=1024,f.height=512,f},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),a='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let c=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,c);for(let f=0;f<1024;f+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(f,0,2,c);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,c-14,1024,14);let u=[.1,.36,.62,.88].map(f=>f*1024),h=(f,d,x,p)=>{let M=r.createLinearGradient(f,d,f+x*.3,d+p);M.addColorStop(0,"#5d7fae"),M.addColorStop(.6,"#9db7d6"),M.addColorStop(1,"#2f3f55"),r.fillStyle=M,r.fillRect(f,d,x,p),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(f+x*.2,d),r.lineTo(f+x*.38,d),r.lineTo(f+x*.1,d+p),r.lineTo(f-x*.08,d+p),r.fill(),o.fillStyle="#ffeccc",o.fillRect(f,d,x,p)};for(let f=0;f<u.length-1;f++){let d=u[f]+40,x=u[f+1]-40,p=3,M=(x-d)/p;for(let T=0;T<p;T++)r.fillStyle="#6b737c",r.fillRect(d+T*M+2,34,M-4,58),h(d+T*M+6,38,M-12,50)}for(let f of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(f+2,34,28,58),h(f+5,38,22,50);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,22,60,c-36),r.fillStyle="#7b828a",r.fillRect(f-1,22,2,c-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(f-30,22,60,c-36),h(f-24,34,20,46),h(f+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${a}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let m=0,v=176,g=256,_=256;r.fillStyle="#d3d7dc",r.fillRect(m,v,g,_),r.fillStyle="#20262e",r.fillRect(m+14,v+44,g-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(m+40,v+44),r.lineTo(m+80,v+44),r.lineTo(m+40,v+140),r.lineTo(m+14,v+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(m+g/2-4,v+44,8,96),r.fillStyle="#111",r.fillRect(m+50,v+12,g-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${a}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",m+g/2,v+26),r.fillStyle="#1f9a50",r.fillRect(m,v+150,g,18),r.fillStyle="#e8892b",r.fillRect(m,v+170,g,7);for(let f of[m+40,m+g-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(f,v+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(f+(f<m+g/2?28:-28),v+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(m,v+_-30,g,30),r.fillStyle="#3a3f46",r.font=`800 16px ${a}`,r.fillText("17",m+g/2,v+220),o.fillStyle="#111",o.fillRect(m,v,g,_),o.fillStyle="#ff9a2a",o.font=`800 18px ${a}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",m+g/2,v+26);for(let f of[m+40,m+g-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(f,v+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let b=f=>{let d=new $n(f);return d.colorSpace=jt,d.anisotropy=4,d},l=(f,d,x,p)=>({u0:f/1024,u1:(f+x)/1024,v0:1-(d+p)/512,v1:1-d/512});return{map:b(n),em:b(s),side:l(0,0,1024,c),sideR:{...l(0,0,1024,c),flip:!0},front:l(m,v,g,_),plain:l(342,202,28,28)}}function bp(){let i=d2(),e=vf(new an({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:Kn})),t=new _n({uv:!0}),n=[1,1,1],s=fe("#9aa1a9"),r=fe("#3b4047"),o=fe("#2a2d33"),a=19.5,c=.6,u=3,h=1.45,m=.95,v=4,g=4,_=.3,b=fe("#33363b"),l={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},f=(y,S,A,R,P,I,C,L=!1)=>t.box(y,S,A,R,P,I,C,l,L?{noBottom:!0}:null),d=(y,S,A,R,P,I)=>{let L=A-P/2,O=A+P/2;for(let H=0;H<12;H++){let W=H/12*Math.PI*2,D=(H+1)/12*Math.PI*2,z=y+Math.cos(W)*R,V=S+Math.sin(W)*R,ee=y+Math.cos(D)*R,le=S+Math.sin(D)*R;t.quad([z,V,L],[ee,le,L],[ee,le,O],[z,V,O],I,i.plain),t.quad([y,S,O],[z,V,O],[ee,le,O],[ee,le,O],I,i.plain),t.quad([y,S,L],[ee,le,L],[z,V,L],[z,V,L],I,i.plain)}},x=u*a+(u-1)*c;for(let y=0;y<u;y++){let S=-x/2+a/2+y*(a+c),A=S-a/2,R=S+a/2;t.quad([A,m,h],[R,m,h],[R,v,h],[A,v,h],n,i.side),t.quad([R,m,-h],[A,m,-h],[A,v,-h],[R,v,-h],n,i.side);let P=y===u-1,I=y===0;t.quad([R,m,h],[R,m,-h],[R,v,-h],[R,v,h],P?n:fe("#c9ced4"),P?i.front:i.plain),t.quad([A,m,-h],[A,m,h],[A,v,h],[A,v,-h],I?n:fe("#c9ced4"),I?i.front:i.plain);for(let C=0;C<g;C++)for(let L of[1,-1]){let O=C/g*Math.PI/2,H=(C+1)/g*Math.PI/2,W=L*h*Math.cos(O),D=v+_*Math.sin(O),z=L*h*Math.cos(H),V=v+_*Math.sin(H);t.quad([A,D,W],[R,D,W],[R,V,z],[A,V,z],s,i.plain);for(let ee of[A,R]){let le=[[ee,v,0],[ee,D,W],[ee,V,z]];t.quad(le[0],le[1],le[2],le[2],s,i.plain),t.quad(le[0],le[2],le[1],le[1],s,i.plain)}}for(let C of[1,-1])f(A,v-.02,C*h-.04,R,v+.05,C*h+.04,r);for(let C of[S-5.5,S+5.5])f(C-1.3,v+.2,-.8,C+1.3,v+.62,.8,fe("#c4c9cf"),!0);f(A+.3,.82,-h+.1,R-.3,m,h-.1,o);for(let[C,L,O,H]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])f(S+C-L/2,.82-O,-1.15+H*.2,S+C+L/2,.82,1.15+H*.2,H>0?o:r);for(let C of[S-7,S+7]){for(let L of[1,-1]){f(C-1.35,.32,L*.86,C+1.35,.56,L*1.02,r);for(let O of[-1.05,1.05])f(C+O-.17,.3,L*.84,C+O+.17,.58,L*1.06,o)}f(C-.35,.5,-1,C+.35,.8,1,r);for(let L of[-1.05,1.05])for(let O of[1,-1])d(C+L,.43,O*.6,.43,.13,b)}if(y<u-1&&f(R,m+.15,-.95,R+c,v-.1,.95,fe("#3a3e44")),y===0){let C=S-3,L=v+.7;t.box(C-.6,v+.26,-.6,C+.6,v+.42,.6,r),t.rod([C-.5,v+.42,0],[C,L+.9,0],.03,.03,4,r),t.rod([C+.5,v+.42,0],[C,L+.9,0],.03,.03,4,r),t.rod([C,L+.9,-.85],[C,L+.9,.85],.03,.03,4,r)}}let p=new gt(t.build(),e);p.castShadow=!0,p.receiveShadow=!0,p.frustumCulled=!1;let M=new Jt;M.add(p),M.visible=!1;let T={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:x},E={};return{group:M,st:T,start(y,S,A=16){Object.assign(T,{active:!0,sx:y,dir:S,speed:A,u:-S*290,ds:S>0?-2:2,cleared:!1}),M.visible=!0},update(y,S,A,R,P){if(!T.active)return;T.u+=T.dir*T.speed*y;let I=T.u-T.dir*T.length/2;if(!T.cleared&&(T.dir>0?I>P+1:I<-P-1)&&(T.cleared=!0),Math.abs(T.u)>330){T.active=!1,M.visible=!1;return}S.at(T.sx,E),M.position.set(E.x+E.fx*T.ds+E.rx*T.u-A.x,E.y+.34,E.z+E.fz*T.ds+E.rz*T.u-A.z),M.rotation.y=E.h+(T.dir>0?Math.PI:0),e.emissiveIntensity=.3+R*1.1}}}var p2='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',nr=2048,ir=4096;function uu(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var wp=uu(256,256);{let i=wp.getContext("2d"),e=i.createImageData(256,256),t=ln(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var _f=class{constructor(){this.cA=uu(nr,ir),this.cE=uu(nr/2,ir/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,nr/2,ir/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,nr,ir),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(wp,"repeat")}add(e,t,n,s){if(this.x+t+4>nr&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>ir)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let c of[this.a,this.e])c.save(),c===this.e&&c.scale(.5,.5),c.translate(o.x,o.y),c.beginPath(),c.rect(0,0,t,n),c.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let a=.5;return this.cells[e]={u0:(o.x+a)/nr,u1:(o.x+t-a)/nr,v0:1-(o.y+n-a)/ir,v1:1-(o.y+a)/ir,w:t,h:n},this.cells[e]}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new $n(n);return s.colorSpace=jt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Gn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function cn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Ln(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([a,c])=>o.addColorStop(a,c)),i.fillStyle=o,i.fillRect(e,t,n,s)}function io(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Ln(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}cn(i,e,t,n,.13)}function ts(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function q(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function so(i,e,t,n,s,r,o="#d9dde2",a="rgba(40,45,60,0.55)"){q(i,e-r,t-r,n+2*r,s+2*r,o),q(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=a,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function ns(i,e,t,n,s,r,o=0){let a=i.createLinearGradient(e,t,e+n*.35,t+s),c=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";a.addColorStop(0,c),a.addColorStop(.55,u),a.addColorStop(1,"#dbe9f6"),i.fillStyle=a,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let h=e+n*r();i.beginPath(),i.moveTo(h,t),i.lineTo(h+n*.18,t),i.lineTo(h-n*.25,t+s),i.lineTo(h-n*.43,t+s),i.fill(),i.restore()}function Sp(i,e,t,n,s,r="#efe6d2"){q(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Ln(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function hu(i,e,t=800){i.font=`${t} ${e}px ${p2}`}function Et(i,e,t,n,s,r,o,a=800,c=null){hu(i,r,a);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,hu(i,u,a);i.textAlign="center",i.textBaseline="middle",c&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=c,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function lu(i,e,t,n,s,r,o,a=800,c=null){let u=[...e],h=u.length,m=Math.min(r*1.05,(s-n)/h),v=Math.min(r,m*.95);hu(i,v,a),i.textAlign="center",i.textBaseline="middle",u.forEach((g,_)=>{let b=n+(s-n-m*h)/2+m*(_+.5);c&&(i.lineWidth=Math.max(2,v*.12),i.strokeStyle=c,i.strokeText(g,t,b)),i.fillStyle=o,i.fillText(g,t,b)})}function sr(i,e,t,n,s,r,o,a=!0){if(q(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Ln(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),a){i.fillStyle="#6a6a6a";for(let c=e+n*.2*o();c<e+n-4;c+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-c),h=s*(.12+o()*.25);i.fillRect(c,t+s-h,u,h)}}i.restore()}function m2(i,e,t,n,s,r,o){let a=i.getTransform();e.save(),e.drawImage(i.canvas,a.e+t,a.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",q(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,q(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Ln(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var Tp=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],cu=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],Ep=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],g2=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Ap(){let i=new _f,e=ln(2024),t=240,n=(l,f,d,x,p,M,T=!1)=>{io(l,i,d,x,"#ece8e0",0);let E=ln(M*31+(p?7:0)+5);if(M===0){let y=d*.14,S=x*.22,A=d*.72,R=x*.5;so(l,y,S,A,R,5),ns(l,y,S,A/2,R,E),ns(l,y+A/2,S,A/2,R,E);let P=E()<.8?A*(.18+E()*.25):0;P&&Sp(l,y+2,S+2,P,R-4,E()<.5?"#efe6d2":"#d9e4ea"),q(l,y+A/2-2,S,4,R,"#cfd4da"),q(l,y-8,S+R+5,A+16,6,"#d8d8d4"),ts(l,y-4,S+R+11,8,60),ts(l,y+A-4,S+R+11,8,60),p&&(sr(f,y,S,A,R,T?"#e6eeff":"#ffcf8f",E),P&&q(f,y+2,S+2,P,R-4,T?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),q(f,y+A/2-2,S,4,R,"#000"))}else if(M===1){for(let y of[.12,.56]){let S=d*y,A=x*.28,R=d*.3,P=x*.36;so(l,S,A,R,P,4),ns(l,S,A,R,P,E,1),l.fillStyle="rgba(255,255,255,0.35)",l.fillRect(S,A,R,P*.45),ts(l,S,A+P+6,R,40,.1),p&&E()<.8&&sr(f,S,A,R,P,E()<.5?"#ffd9a0":"#e8f0ff",E)}l.fillStyle="#c9c9c4",l.beginPath(),l.arc(d*.88,x*.2,9,0,7),l.fill()}else if(M===2){let y=d*.1,S=x*.12,A=d*.8,R=x*.84;so(l,y,S,A,R,4),ns(l,y,S,A/2,R,E),ns(l,y+A/2,S,A/2,R,E);let P=A*(.2+E()*.3);Sp(l,y+2,S+2,P,R-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),q(l,y+A/2-2,S,4,R,"#cfd4da"),p&&(sr(f,y,S,A,R,T?"#e6eeff":"#ffcb85",E),q(f,y+2,S+2,P,R-4,T?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),q(f,y+A/2-2,S,4,R,"#000"))}else if(M===3){io(l,i,d,x,"#dfe3e6",0);let y=x*.25,S=x*.55;ns(l,0,y,d,S,E,1);for(let A=0;A<=d;A+=d/4)q(l,A-2,y,4,S,"#8d98a6");if(q(l,0,y-4,d,4,"#8d98a6"),q(l,0,y+S,d,5,"#7d8796"),p)for(let A=0;A<4;A++)E()<.7&&sr(f,A*d/4+2,y,d/4-4,S,E()<.6?"#f2f6ff":"#ffe2b0",E)}else if(M===4){l.fillStyle="#6b4a35",l.fillRect(0,0,d,x);for(let P=0;P<x;P+=12)q(l,0,P,d,2,"rgba(30,18,10,0.35)"),q(l,0,P+2,d,1,"rgba(255,220,180,0.06)");cn(l,i,d,x,.15);let y=d*.18,S=x*.25,A=d*.64,R=x*.45;q(l,y-6,S-6,A+12,R+12,"#4a3020"),q(l,y,S,A,R,"#efe4c8"),l.fillStyle="#5a3a26";for(let P=1;P<6;P++)l.fillRect(y+P*A/6-1.5,S,3,R);for(let P=1;P<3;P++)l.fillRect(y,S+P*R/3-1.5,A,3);if(p){sr(f,y,S,A,R,"#ffc070",E,!1),f.fillStyle="#000";for(let P=1;P<6;P++)f.fillRect(y+P*A/6-1.5,S,3,R);for(let P=1;P<3;P++)f.fillRect(y,S+P*R/3-1.5,A,3)}}else if(M===5){q(l,d*.08,0,7,x,"#bdbdb6"),q(l,d*.08+5,0,2,x,"rgba(0,0,0,0.2)");let y=d*.55,S=x*.3,A=d*.22,R=x*.24;so(l,y,S,A,R,3),q(l,y,S,A,R,"#d6dfe4"),l.fillStyle="rgba(255,255,255,0.4)",l.fillRect(y,S,A,R/2),ts(l,y,S+R+4,A,50,.12),q(l,d*.22,x*.55,26,34,"#cfcfca"),q(l,d*.22+4,x*.55+6,18,12,"#9aa2a8"),p&&sr(f,y,S,A,R,T?"#eef2ff":"#fff0d8",E,!1)}else if(M===6){let y=d*.4,S=x*.35,A=d*.2,R=x*.28;so(l,y,S,A,R,3),ns(l,y,S,A,R,E,1),ts(l,y,S+R+4,A,70,.14),p&&sr(f,y,S,A,R,T?"#e8efff":"#ffd9a0",E)}};for(let l=0;l<7;l++)i.add("win"+l,t,t,(f,d,x,p)=>n(f,d,x,p,!1,l)),i.add("win"+l+"L",t,t,(f,d,x,p)=>n(f,d,x,p,!0,l));for(let l of[0,2,5,6])i.add("win"+l+"C",t,t,(f,d,x,p)=>n(f,d,x,p,!0,l,!0));i.add("plain",t,t,(l,f,d,x)=>{io(l,i,d,x,"#ece8e0"),ts(l,d*.3,0,12,x*.6,.06)}),i.add("concrete",t,t,(l,f,d,x)=>{io(l,i,d,x,"#d9d7d0",60);for(let p=0;p<6;p++)ts(l,p*41%d,0,10,x*.5,.07)});let s=288,r=(l,f,d,x,p,M,T)=>{let E=(S,A,R,P,I,C=0)=>{l.fillStyle=I,l.beginPath(),l.ellipse(S,A,R,P,C,0,7),l.fill()},y=S=>S[Math.floor(M()*S.length)];if(T==="bakery"){q(l,f,d,x,p,"#d9b98a"),Ln(l,f,d,x,p,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let S=d+p*.28;S<d+p*.72;S+=p*.2){q(l,f,S,x,5,"#8a5a32");for(let A=f+8;A<f+x-8;A+=15+M()*10){let R=7+M()*6,P=4+M()*3;E(A,S-P,R,P,y(["#c98a3e","#b4732e","#d9a256","#a4632a"])),E(A-R*.2,S-P*1.4,R*.5,P*.35,"rgba(255,230,180,0.5)")}}q(l,f+4,d+p*.8,x-8,p*.2,"#efe7d8"),q(l,f+4,d+p*.8,x-8,3,"#9a9a96");for(let S=f+14;S<f+x-10;S+=18)E(S,d+p*.9,6,4,y(["#e8b35a","#c06a3a","#f2d29a"]));q(l,f+x-64,d+10,52,22,"#7a3e1e"),Et(l,"\u713C\u304D\u305F\u3066",f+x-38,d+21,46,14,"#fff3dc",800)}else if(T==="books"){q(l,f,d,x,p,"#6f5a46");for(let S=d+6;S<d+p*.72;S+=p*.17){q(l,f,S+p*.15,x,4,"#4a3828");for(let A=f+3;A<f+x-4;){let R=3+M()*4,P=p*(.1+M()*.045);q(l,A,S+p*.15-P,R,P,y(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),A+=R+(M()<.1?4:.6)}}q(l,f+4,d+p*.76,x-8,p*.24,"#8a7560");for(let S=f+8;S<f+x-22;S+=24)q(l,S,d+p*.79,20,28,y(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),q(l,S+3,d+p*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(T==="florist"){q(l,f,d,x,p,"#e8e2d2"),Ln(l,f,d,x,p,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let S=0;S<7;S++){let A=f+8+M()*(x-16),R=p*(.15+M()*.25);for(let P=0;P<R;P+=3.5)E(A+Math.sin(P*.25+S)*4+(M()-.5)*6,d+4+P,3.4,1.8,y(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),M()*3)}for(let S=0;S<3;S++){let A=d+p*(.5+S*.17);q(l,f,A+14,x,4,"#9a8a76");for(let R=f+10+S*6;R<f+x-8;R+=19){let P=y(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let I=0;I<6;I++){l.strokeStyle="#4a7a3a",l.lineWidth=1.2,l.beginPath();let C=R+(M()-.5)*14;l.moveTo(R,A+10),l.lineTo(C,A-6-M()*8),l.stroke(),E(C,A-8-M()*8,3.2,3,P)}q(l,R-6,A+4,12,11,y(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(T==="clothes"){q(l,f,d,x,p,"#efece6"),Ln(l,f,d,x,p,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),q(l,f+6,d+p*.18,x-60,3,"#7a7a7a");for(let A=f+12;A<f+x-66;A+=13+M()*5){l.fillStyle=y(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let R=d+p*.18+3,P=p*(.3+M()*.2);l.beginPath(),l.moveTo(A-5,R),l.lineTo(A+5,R),l.lineTo(A+8,R+P),l.lineTo(A-8,R+P),l.closePath(),l.fill()}let S=f+x-32;E(S,d+p*.16,7,8,"#d8cfc4"),l.fillStyle=y(["#c84a5a","#4a6a9a","#e8d8b8"]),l.beginPath(),l.moveTo(S-14,d+p*.24),l.lineTo(S+14,d+p*.24),l.lineTo(S+18,d+p*.66),l.lineTo(S-18,d+p*.66),l.closePath(),l.fill(),q(l,S-2,d+p*.66,4,p*.24,"#8a8a8a"),q(l,f+8,d+p*.74,x*.55,6,"#8a6a4a");for(let A=f+12;A<f+x*.55;A+=14)q(l,A,d+p*.74-8,11,8,y(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let S=7;for(let A=d+p*.25;A<d+p;A+=p*.22)for(let R=f+3;R<f+x-6;R+=6+M()*8)e(),S=Math.imul(S,31)+Math.floor(M()*997+M()*61+M()*7)|0;T==="cafe"?h(l,f,d,x,p,ln(S>>>0)):u(l,f,d,x,p,ln(S>>>0),T==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],a=(l,f,d,x,p,M,T="bbccutp")=>{let E=f+1+M()*3;for(;E<d-4;){let y=T[Math.floor(M()*T.length)],S=o[Math.floor(M()*o.length)],A=M()<.5?"#f8f6f0":o[Math.floor(M()*o.length)],R={b:8+M()*6,c:6+M()*2,u:9+M()*2,t:5+M()*2,p:12+M()*5}[y],P=Math.min(p,{b:14+M()*12,c:11+M()*3,u:10+M()*3,t:18+M()*9,p:14+M()*8}[y]),I=2+Math.floor(M()*5);for(let C=0;C<I&&E+R<d-1;C++,E+=R+.6){let L=x-P;y==="t"?(q(l,E,L+P*.3,R,P*.7,S),q(l,E+R*.3,L+P*.1,R*.4,P*.22,S),q(l,E+R*.28,L,R*.44,P*.11,A==="#f8f6f0"?"#e8e8e4":"#d83a2a"),q(l,E,L+P*.5,R,P*.22,A)):y==="c"?(q(l,E,L,R,P,S),q(l,E,L,R,1.5,"#d8dce0"),q(l,E,L+P*.35,R,P*.3,A)):y==="u"?(l.fillStyle=S,l.beginPath(),l.moveTo(E,L+2),l.lineTo(E+R,L+2),l.lineTo(E+R-1.2,x),l.lineTo(E+1.2,x),l.fill(),q(l,E-.4,L,R+.8,2.2,"#f2efe6"),q(l,E+1,L+P*.45,R-2,P*.25,A)):y==="p"?(l.fillStyle=S,l.beginPath(),l.moveTo(E,x),l.lineTo(E,L+3),l.quadraticCurveTo(E+R/2,L-1.5,E+R,L+3),l.lineTo(E+R,x),l.fill(),q(l,E+1.5,L+P*.35,R-3,P*.35,A),q(l,E,L+2,R,1,"rgba(0,0,0,0.18)")):(q(l,E,L,R,P,S),q(l,E+1.5,L+P*.3,R-3,P*.4,A)),q(l,E,L+1,1,P-1,"rgba(255,255,255,0.28)"),q(l,E+R-1.3,L+1,1.3,P-1,"rgba(0,0,0,0.22)")}E+=1.5+M()*3}},c=(l,f,d,x,p)=>{Ln(l,f,x+4,d,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),q(l,f,x,d,4,"#d3d6da"),q(l,f,x+3.2,d,.8,"rgba(40,40,50,0.45)");for(let M=f+4+p()*10;M<f+d-6;M+=14+p()*16)q(l,M,x+.6,5,2.6,p()<.25?"#f2d23a":p()<.2?"#e84a3a":"#ffffff")},u=(l,f,d,x,p,M,T)=>{q(l,f,d,x,p,T?"#f3f1ea":"#ece5d8"),q(l,f,d,x,p*.13,T?"#f6f6f2":"#efebe2");for(let A of[.035,.085])q(l,f,d+p*A,x,2.4,"#ffffff"),Ln(l,f,d+p*A+2.4,x,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Ln(l,f,d+p*.13,x,p*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let A=0,R=f+18+M()*30;A<2&&R<f+x-40;A++,R+=90+M()*40)q(l,R+13,d+p*.13,1,6,"#888"),q(l,R,d+p*.13+6,28,9,o[Math.floor(M()*9)]),q(l,R+4,d+p*.13+9.5,20,2,"rgba(255,255,255,0.8)");let y=d+p*.25,S=p*.165;q(l,f,y-4,x,4,"#c9ccd0");for(let A=0;A<4;A++){let R=y+S*(A+1);Ln(l,f,R-S,x,S,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),a(l,f,f+x,R,S-6,M),c(l,f,x,R,M)}q(l,f,y+S*4+4,x,d+p-y-S*4-4,"#5c6068"),q(l,f,y+S*4+4,x,1.5,"#8a8e96");for(let A=f+2+M()*20;A<f+x;A+=70+M()*12)q(l,A,y-4,3,S*4+8,"#b4b8be"),q(l,A+2.2,y-4,.8,S*4+8,"rgba(0,0,0,0.3)");if(T){let A=d+p*.7;q(l,f,A+26,x,d+p-A-26,"#7a7e86"),q(l,f,A+26,x,2,"#a8acb2");for(let R=f+2;R<f+x-14;R+=15.5){let P=o[Math.floor(M()*o.length)],I=M()*2;q(l,R,A+I,14,26-I,P),q(l,R,A+I,14,5,M()<.6?"#ffffff":"#e8343a"),q(l,R+2,A+I+8,10,10,M()<.5?"#f2c8a8":o[Math.floor(M()*o.length)]),q(l,R+13,A+I,1,26-I,"rgba(0,0,0,0.25)")}}},h=(l,f,d,x,p,M)=>{q(l,f,d,x,p,"#b88a5e"),Ln(l,f,d,x,p,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let E=f;E<f+x;E+=9)q(l,E,d+p*.55,1,p*.45,"rgba(60,35,20,0.25)");let T=d+p*.3;for(let E=0;E<2;E++){let y=T+E*22;q(l,f+8,y,x*.55,3,"#6a4428"),a(l,f+10,f+x*.55+6,y,14,M,"ctu")}q(l,f+x*.64,d+p*.22,x*.28,p*.26,"#2e3a32"),q(l,f+x*.64,d+p*.22,x*.28,2,"#6a4428");for(let E=0;E<5;E++)q(l,f+x*.67,d+p*(.27+E*.04),x*(.12+M()*.1),1.6,"rgba(240,240,230,0.75)");q(l,f+4,d+p*.56,x-8,6,"#5a3820"),q(l,f+4,d+p*.56+6,x-8,p*.08,"#7a5232"),q(l,f+x*.3,d+p*.47,18,p*.09,"#c8ccd0"),q(l,f+x*.3+3,d+p*.47+3,12,5,"#3a3a40");for(let E=f+30+M()*20;E<f+x-20;E+=70+M()*20)q(l,E,d,1,p*.14,"#3a2a1e"),l.fillStyle="#2f3a36",l.beginPath(),l.moveTo(E-9,d+p*.2),l.quadraticCurveTo(E+.5,d+p*.12,E+10,d+p*.2),l.fill(),l.fillStyle="rgba(255,214,150,0.9)",l.beginPath(),l.ellipse(E+.5,d+p*.2,7,2,0,0,7),l.fill();for(let E=f+26+M()*16;E<f+x-26;E+=78+M()*20){q(l,E-16,d+p*.74,32,4,"#4a2e1c"),q(l,E-1.5,d+p*.74+4,3,p*.2,"#2e2420"),q(l,E-8,d+p*.94,16,2,"#2e2420");for(let y of[-24,24])q(l,E+y-6,d+p*.8,12,3,"#3a2618"),q(l,E+y+(y<0?-6:4),d+p*.66,2,p*.17,"#3a2618"),q(l,E+y-5,d+p*.83,1.6,p*.13,"#3a2618"),q(l,E+y+3.4,d+p*.83,1.6,p*.13,"#3a2618");l.fillStyle="#f4f0e8",l.beginPath(),l.ellipse(E-6,d+p*.74-1.5,3,1.5,0,0,7),l.fill()}},m=(l,f,d,x,p,M,T="")=>{let E=ln(M);if(io(l,i,d,x,"#e6e2da"),p==="glass"||p==="door"||p==="konbini"||p==="cafe"){let S=x*.22,A=d-12,R=x*.78-4;q(l,6,S,A,R,p==="konbini"?"#f6f4ea":p==="cafe"?"#7a5a40":"#8a7a68"),r(l,6,S,A,R,E,T||p),p==="konbini"&&q(l,6,S+4,A,5,"#ffffff"),p==="door"&&(q(l,d/2-30,S+18,60,24,"#fff"),Et(l,"\u55B6\u696D\u4E2D",d/2,S+30,54,18,"#c82828")),p==="glass"&&!T&&E()<.7&&(q(l,16,S+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),Et(l,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,S+44,40,16,"#c02020")),m2(l,f,6,S,A,R,p==="konbini"?"#e4eef8":p==="cafe"?"#f0a868":"#f2d2a6"),l.save(),l.globalAlpha=.35,ns(l,6,S,A,R,E),l.restore(),q(l,6,S,A,4,"#4a4e57"),q(f,6,S,A,4,"#000"),p==="door"&&(q(l,d/2-2,S,4,R,"#4a4e57"),q(f,d/2-2,S,4,R,"#000"),q(l,d/2-14,S+R*.45,3,40,"#c0c4c8"),q(l,d/2+11,S+R*.45,3,40,"#c0c4c8")),p==="cafe"&&(q(l,d*.62,x-70,46,62,"#2c3a30"),q(f,d*.62,x-70,46,62,"#000"),Et(l,"\u30E9\u30F3\u30C1",d*.62+23,x-50,40,13,"#fff",700))}else if(p==="shutter"){let S=x*.2,A=d-12,R=x*.8;q(l,6,S,A,R,"#b8bcc0");for(let P=S;P<S+R;P+=7)q(l,6,P,A,2,"rgba(60,64,72,0.35)"),q(l,6,P+2,A,1,"rgba(255,255,255,0.35)");q(l,6,S,A,10,"#8f949a"),cn(l,i,d,x,.12),E()<.5&&(q(l,d/2-40,S+R*.35,80,26,"#fff"),Et(l,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),d/2,S+R*.35+13,74,16,"#333",700))}else if(p==="noren"){q(l,0,0,d,x,"#5b3c28");for(let I=0;I<d;I+=10)q(l,I,x*.2,3,x*.8,"rgba(25,15,8,0.6)");cn(l,i,d,x,.15);let y=d*.12,S=x*.24,A=d*.76,R=x*.34,P=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);q(l,y,S,A,R,P);for(let I=1;I<3;I++)q(l,y+A*I/3-1,S+R*.25,2,R*.75,"rgba(255,255,255,0.25)");Et(l,e.pick(g2),d/2,S+R*.55,A*.9,46,"#f5f0e6",800),q(l,y,S,A,6,"#3a2a1c"),f.fillStyle="#ffae5c",f.fillRect(y,S+R,A,x-S-R),f.fillStyle="rgba(255,170,90,0.6)",f.fillRect(y,S,A,R),l.fillStyle="#d8352a",l.beginPath(),l.ellipse(d*.9,x*.36,13,19,0,0,7),l.fill(),Et(l,"\u9152",d*.9,x*.36,16,14,"#fff"),f.fillStyle="#ff6a3a",f.beginPath(),f.ellipse(d*.9,x*.36,13,19,0,0,7),f.fill()}else if(p==="house"){let y=d*.18,S=x*.3,A=d*.34,R=x*.7;q(l,y-6,S-6,A+12,R+6,"#9a9a96"),q(l,y,S,A,R,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),q(l,y+A-14,S+R*.5,4,22,"#d8d0c0"),q(l,y+6,S+10,A-12,R*.25,"rgba(255,255,255,0.18)"),q(l,d*.62,x*.48,30,22,"#cfcfca"),q(l,d*.62+6,x*.48+5,18,4,"#555");let P=d*.6,I=x*.22,C=d*.3,L=x*.2;so(l,P,I,C,L,3),ns(l,P,I,C,L,E,1);for(let O=0;O<3;O++)l.fillStyle="#7b5a43",l.fillRect(d*.6+O*22,x-26,16,18),l.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),l.beginPath(),l.arc(d*.6+O*22+8,x-32,11,0,7),l.fill();f.fillStyle="#ffd08a",f.beginPath(),f.arc(y+A+14,S+8,6,0,7),f.fill(),E()<.6&&(f.fillStyle="#ffcf8f",f.fillRect(P,I,C,L))}else if(p==="garage"){let S=x*.25,A=d-16,R=x*.75;q(l,8,S,A,R,"#efefec");for(let P=S;P<S+R;P+=9)q(l,8,P,A,1.5,"rgba(80,80,90,0.25)");cn(l,i,d,x,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((l,f)=>{i.add("shop_"+l,t,s,(d,x,p,M)=>m(d,x,p,M,l,100+f)),(l==="glass"||l==="noren"||l==="house")&&i.add("shop_"+l+"2",t,s,(d,x,p,M)=>m(d,x,p,M,l,200+f)),l==="glass"&&["bakery","books","florist","clothes"].forEach((d,x)=>i.add("shop_glass"+(x+3),t,s,(p,M,T,E)=>m(p,M,T,E,"glass",300+x,d)))});for(let l=0;l<14;l++)i.add("hs"+l,512,76,(f,d,x,p)=>{let[M,T]=cu[l%cu.length],E=Tp[l*7%Tp.length];q(f,0,0,x,p,M),q(f,0,0,x,5,"rgba(255,255,255,0.35)"),q(f,0,p-6,x,6,"rgba(0,0,0,0.18)"),l%3===0&&(q(f,12,12,p-24,p-24,T),Et(f,E[0],12+(p-24)/2,p/2,p-30,34,M)),Et(f,E,x/2+(l%3===0?24:0),p/2+2,x*.7,50,T,900),cn(f,i,x,p,.08),d.fillStyle=M==="#fff"||M==="#f5efe0"?"#d9d6cc":M,d.fillRect(0,0,x,p),d.globalAlpha=.9,Et(d,E,x/2+(l%3===0?24:0),p/2+2,x*.7,50,T==="#fff"?"#ffffff":T,900),d.globalAlpha=1});for(let[l,f,d]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+l,512,76,(x,p,M,T)=>{q(x,0,0,M,T,f),q(x,0,0,M,5,"rgba(255,255,255,0.35)"),q(x,0,T-6,M,6,"rgba(0,0,0,0.18)"),Et(x,l,M/2,T/2+2,M*.7,50,d,900),cn(x,i,M,T,.08),p.fillStyle=f,p.fillRect(0,0,M,T),p.globalAlpha=.9,Et(p,l,M/2,T/2+2,M*.7,50,d,900),p.globalAlpha=1});let v=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],g=(l,f,d,x,p,M)=>{l.beginPath(),l.moveTo(f+M,d),l.arcTo(f+x,d,f+x,d+p,M),l.arcTo(f+x,d+p,f,d+p,M),l.arcTo(f,d+p,f,d,M),l.arcTo(f,d,f+x,d,M),l.closePath()};for(let l=0;l<10;l++)i.add("vs"+l,72,288,(f,d,x,p)=>{let M=Ep[l%Ep.length],T=v[(l*5+2)%v.length],E=l%10===3||l%10===6||l%10===8,[y,S]=cu[(l*3+1)%cu.length],A=E?y==="#fff"||y==="#f5efe0"?"#2b2b33":y:"#fbf7ef",R=E?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][l%4];q(f,0,0,x,p,"#2a2b30"),g(f,3,3,x-6,p-6,8),f.fillStyle=A,f.fill(),Ln(f,3,3,x-6,p-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),f.save(),g(f,8,8,x-16,p-16,6),f.strokeStyle=T,f.globalAlpha=.55,f.lineWidth=7,f.stroke(),f.globalAlpha=1,f.strokeStyle="#fff6fb",f.lineWidth=2.2,f.stroke(),f.restore(),lu(f,M,x/2,18,p-18,50,R,900),cn(f,i,x,p,.06),q(d,0,0,x,p,"#000"),g(d,3,3,x-6,p-6,8),d.fillStyle=E?"#3a3a3e":"#4a4844",d.fill(),d.save(),g(d,8,8,x-16,p-16,6),d.strokeStyle=T,d.lineWidth=7,d.stroke(),d.strokeStyle="#ffffff",d.lineWidth=2.5,d.stroke(),d.restore(),lu(d,M,x/2,18,p-18,50,E?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([l,f,d],x)=>i.add("bb"+x,512,240,(p,M,T,E)=>{q(p,0,0,T,E,"#fbfaf5"),q(p,0,0,T,E*.62,d),Et(p,l,T/2,E*.32,T*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Et(p,f,T/2,E*.8,T*.85,52,"#333",800),cn(p,i,T,E,.08),q(M,0,0,T,E,"#555"),M.globalAlpha=.85,q(M,0,0,T,E*.62,d),Et(M,l,T/2,E*.32,T*.9,96,"#fff",900),M.globalAlpha=1})),i.add("konbini_band",480,72,(l,f,d,x)=>{q(l,0,0,d,x,"#fbfbf7"),q(l,0,x*.62,d,x*.14,"#2a9a4a"),q(l,0,x*.76,d,x*.12,"#f08a24"),q(l,0,x*.88,d,x*.12,"#2f6fd8"),Et(l,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,x*.32,d*.8,40,"#1d3d8a",900),f.fillStyle="#f3f6f0",f.fillRect(0,0,d,x),Et(f,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,x*.32,d*.8,40,"#1d3d8a",900)});for(let l=0;l<3;l++)i.add("vend"+l,128,234,(f,d,x,p)=>{let M=["#d8352a","#2f6fd8","#f4f4f0"][l];q(f,0,0,x,p,M),q(f,8,10,x-16,p*.55,"#eef4f8");let T=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let E=0;E<4;E++)for(let y=0;y<6;y++){let S=14+y*17,A=18+E*30;f.fillStyle=T[(E*6+y+l)%T.length],f.fillRect(S,A,11,20),f.fillStyle="rgba(255,255,255,0.5)",f.fillRect(S+2,A+2,3,14),f.fillStyle="#2a2a2a",f.fillRect(S,A+23,11,3)}q(f,10,p*.62,x-20,22,"#222"),q(f,x-34,p*.66,14,22,"#bbb"),q(f,14,p*.82,x-28,22,"#1b1b1b"),Et(f,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][l],x/2,p*.62+11,x-28,14,"#fff",700),cn(f,i,x,p,.08),d.fillStyle="#f2f8ff",d.fillRect(8,10,x-16,p*.55);for(let E=0;E<4;E++)for(let y=0;y<6;y++)d.fillStyle=T[(E*6+y+l)%T.length],d.fillRect(14+y*17,18+E*30,11,20);d.fillStyle="#9fd0ff",d.fillRect(10,p*.62,x-20,22)});i.add("ac",128,88,(l,f,d,x)=>{q(l,0,0,d,x,"#e9e9e4"),Ln(l,0,0,d,x,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),l.fillStyle="#9a9c9e",l.beginPath(),l.arc(d*.4,x*.5,x*.36,0,7),l.fill(),l.strokeStyle="#d6d6d2",l.lineWidth=2;for(let p=6;p<x*.36;p+=6)l.beginPath(),l.arc(d*.4,x*.5,p,0,7),l.stroke();for(let p=12;p<x-10;p+=6)q(l,d*.78,p,d*.16,2,"#b8b8b2")}),i.add("plate",128,64,(l,f,d,x)=>{q(l,0,0,d,x,"#f2cf3a"),l.strokeStyle="#2f5a2f",l.lineWidth=3,l.strokeRect(3,3,d-6,x-6),Et(l,"\u54C1\u5DDD 580",d/2,16,d*.6,14,"#2f5a2f",700),Et(l,"\u3042 12-34",d/2,42,d*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(l,f,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.moveTo(2,2),l.lineTo(d-2,2),l.lineTo(d/2,x-2),l.fill(),l.fillStyle="#d8231c",l.beginPath(),l.moveTo(10,7),l.lineTo(d-10,7),l.lineTo(d/2,x-12),l.fill(),Et(l,"\u6B62\u307E\u308C",d/2,34,d*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(l,f,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.fillStyle="#1e5bb8",l.beginPath(),l.arc(d/2,x/2,d/2-6,0,7),l.fill(),l.fillStyle="#fff",l.beginPath(),l.moveTo(d/2,22),l.lineTo(d/2+22,50),l.lineTo(d/2+8,50),l.lineTo(d/2+8,88),l.lineTo(d/2-8,88),l.lineTo(d/2-8,50),l.lineTo(d/2-22,50),l.fill()}),i.add("sign_speed",112,112,(l,f,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=12,l.beginPath(),l.arc(d/2,x/2,d/2-9,0,7),l.stroke(),Et(l,"30",d/2,x/2+2,d*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(l,f,d,x)=>{q(l,0,0,d,x,"#1d4f9a"),l.strokeStyle="#fff",l.lineWidth=2,l.strokeRect(3,3,d-6,x-6),lu(l,"\u672C\u753A\u4E8C\u4E01\u76EE",d/2,10,x-10,24,"#fff",700)});for(let l=0;l<4;l++)i.add("poster"+l,64,90,(f,d,x,p)=>{let M=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][l];q(f,0,0,x,p,M),q(f,4,4,x-8,p*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][l]),Et(f,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][l],x/2,p*.25,x-12,18,"#fff",900);for(let T=0;T<4;T++)q(f,8,p*.58+T*8,x-16-T%2*14,3,"rgba(60,60,60,0.5)")});for(let l=0;l<3;l++)i.add("bal"+l,t,88,(f,d,x,p)=>{let M=["#e9e3d6","#dfe6ea","#efe2dc"][l];if(io(f,i,x,p,M),l===1)for(let T=10;T<x-6;T+=x/6)q(f,T,10,x/6-8,p-20,"rgba(220,235,245,0.9)"),f.fillStyle="rgba(255,255,255,0.45)",f.fillRect(T,10,x/6-8,(p-20)*.4);else{q(f,0,0,x,7,"rgba(255,255,255,0.4)");for(let T=x/3;T<x;T+=x/3)q(f,T-1,0,2,p,"rgba(0,0,0,0.08)")}q(f,0,p-6,x,6,"rgba(0,0,0,0.12)"),ts(f,x*.3,p-6,10,10,.2)});i.add("kawara",272,256,(l,f,d,x)=>{q(l,0,0,d,x,"#58617a");for(let p=0;p<x;p+=16)Ln(l,0,p,d,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let p=-4;p<d;p+=20)q(l,p,0,2,x,"rgba(0,0,0,0.18)");cn(l,i,d,x,.12)}),i.add("wood",256,256,(l,f,d,x)=>{q(l,0,0,d,x,"#6d4c37");for(let p=0;p<x;p+=14)q(l,0,p,d,2,"rgba(25,15,8,0.4)"),q(l,0,p+2,d,1,"rgba(255,220,180,0.07)");cn(l,i,d,x,.16)}),i.add("block",256,128,(l,f,d,x)=>{q(l,0,0,d,x,"#c9c7bf");for(let p=0;p<x;p+=32)for(let M=p/32%2?-32:0;M<d;M+=64)l.strokeStyle="rgba(80,80,80,0.35)",l.lineWidth=2,l.strokeRect(M+1,p+1,62,30);for(let p=0;p<d;p+=64)l.fillStyle="rgba(70,70,70,0.25)",l.fillRect(p+20,40,24,16);cn(l,i,d,x,.15),ts(l,0,0,d,40,.1)}),i.add("lantern",64,96,(l,f,d,x)=>{l.fillStyle="#d8352a",l.beginPath(),l.ellipse(d/2,x/2,d/2-2,x/2-8,0,0,7),l.fill();for(let p=16;p<x-12;p+=7)q(l,4,p,d-8,1.5,"rgba(0,0,0,0.2)");q(l,d/2-14,2,28,8,"#222"),q(l,d/2-14,x-10,28,8,"#222"),Et(l,"\u796D",d/2,x/2,d*.6,28,"#fff",900),f.fillStyle="#ff6a35",f.beginPath(),f.ellipse(d/2,x/2,d/2-2,x/2-8,0,0,7),f.fill()}),i.add("busstop",96,96,(l,f,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=8,l.beginPath(),l.arc(d/2,x/2,d/2-6,0,7),l.stroke(),Et(l,"\u30D0\u30B9\u505C",d/2,x/2,d*.66,20,"#1d3d8a",900)}),i.add("white",16,16,l=>q(l,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(l,f,d,x)=>{l.save(),l.translate(d/2,x/2),l.rotate(Math.PI/4),l.fillStyle="#1b1b1b",l.fillRect(-41,-41,82,82),l.fillStyle="#f2c230",l.fillRect(-37,-37,74,74),l.restore(),l.fillStyle="#1b1b1b",l.fillRect(d/2-22,x/2-6,44,18),l.fillRect(d/2-16,x/2-16,18,12),l.fillRect(d/2+8,x/2-13,5,7),l.beginPath(),l.arc(d/2-12,x/2+15,5,0,7),l.arc(d/2+12,x/2+15,5,0,7),l.fill(),Et(l,"\u8E0F\u5207",d/2,x/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((l,f)=>i.add("bridge"+f,64,176,(d,x,p,M)=>{q(d,0,0,p,M,"#b9b5ab"),cn(d,i,p,M,.2),q(d,6,6,p-12,M-12,"#a7a398"),lu(d,l,p/2,14,M-14,34,"#3f3c37",800)})),i.add("signal",240,84,(l,f,d,x)=>{q(l,0,0,d,x,"#4a4d52"),q(l,0,0,d,5,"#5c6066"),cn(l,i,d,x,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([p,M])=>{l.fillStyle="#26282c",l.beginPath(),l.arc(M,x/2,33,0,7),l.fill(),l.fillStyle=p,l.beginPath(),l.arc(M,x/2,27,0,7),l.fill()})}),i.add("ped_sig",64,128,(l,f,d,x)=>{q(l,0,0,d,x,"#3d4045"),l.fillStyle="#5a1814",l.fillRect(8,8,d-16,x/2-12),l.fillStyle="#0d4f44",l.fillRect(8,x/2+4,d-16,x/2-12),l.fillStyle="rgba(255,255,255,0.18)",l.beginPath(),l.arc(d/2,x*.18,6,0,7),l.fill(),l.fillRect(d/2-5,x*.24,10,18)}),i.add("tomare",256,96,(l,f,d,x)=>{l.clearRect(0,0,d,x),l.fillStyle="rgba(244,244,238,0.012)",l.fillRect(0,0,d,x),Et(l,"\u6B62\u307E\u308C",d/2,x/2+4,d*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((l,f)=>i.add("hodokyo"+f,256,44,(d,x,p,M)=>{q(d,0,0,p,M,"#1f4f96"),d.strokeStyle="#fff",d.lineWidth=3,d.strokeRect(4,4,p-8,M-8),Et(d,l,p/2,M/2+1,p*.85,28,"#fff",800)}));let b=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];b.forEach(([l,f,d],x)=>{let p=b[(x+3)%4][0],M=b[(x+1)%4][0];i.add("ekimei"+x,320,124,(T,E,y,S)=>{q(T,0,0,y,S,"#3a3d42"),q(T,4,4,y-8,S-8,"#f8f8f3"),Et(T,f,y/2,20,y*.5,15,"#2b2b2b",700),Et(T,l,y/2,52,y*.6,40,"#151515",900),Et(T,d,y/2,80,y*.5,12,"#555",600),q(T,4,S-30,y-8,26,"#1f9a50"),T.fillStyle="#fff",hu(T,12,700),T.textBaseline="middle",T.textAlign="left",T.fillText("\u2190 "+p,12,S-17),T.textAlign="right",T.fillText(M+" \u2192",y-12,S-17),cn(T,i,y,S,.06),q(E,4,4,y-8,S-8,"#8a8a84")}),i.add("ekiplate"+x,220,48,(T,E,y,S)=>{q(T,0,0,y,S,"#4b3326"),cn(T,i,y,S,.2),Et(T,l+"\u99C5",y/2,S/2+1,y*.8,30,"#f3ead8",800)})});for(let l of["l","r"])i.add("chev_"+l,96,120,(f,d,x,p)=>{q(f,0,0,x,p,"#f4f4ef"),q(f,4,4,x-8,p-8,"#1e5bb8"),f.fillStyle="#f8f8f4",f.beginPath();let M=l==="r"?1:-1,T=x/2,E=p/2;f.moveTo(T-M*26,E-40),f.lineTo(T+M*22,E),f.lineTo(T-M*26,E+40),f.lineTo(T-M*8,E+40),f.lineTo(T+M*40,E),f.lineTo(T-M*8,E-40),f.closePath(),f.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((l,f)=>i.add("tunnel"+f,360,80,(d,x,p,M)=>{q(d,0,0,p,M,"#e9e7e0"),q(d,4,4,p-8,M-8,"#24403b"),cn(d,i,p,M,.08),Et(d,l,p/2,M*.42,p*.8,38,"#f4f2ea",800),Et(d,"L = 170 m",p/2,M*.8,p*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(l,f,d,x)=>{q(l,0,0,d,x,"#f6f6f2"),l.fillStyle="#d42a22";for(let p=-20;p<x;p+=26)l.beginPath(),l.moveTo(4,p),l.lineTo(d/2,p+20),l.lineTo(d-4,p),l.lineTo(d-4,p+11),l.lineTo(d/2,p+31),l.lineTo(4,p+11),l.closePath(),l.fill();l.strokeStyle="#222",l.lineWidth=3,l.strokeRect(1.5,1.5,d-3,x-3)}),i.add("xing_plate",128,48,(l,f,d,x)=>{q(l,0,0,d,x,"#f6f6f2"),l.strokeStyle="#d8231c",l.lineWidth=4,l.strokeRect(3,3,d-6,x-6),Et(l,"\u8E0F\u5207\u6CE8\u610F",d/2,x/2,d*.8,26,"#d8231c",900)}),i.add("rail",240,80,(l,f,d,x)=>{l.clearRect(0,0,d,x),q(l,0,0,d,7,"#e9ebee"),q(l,0,6,d,2,"rgba(60,70,80,0.5)"),q(l,0,x-6,d,6,"#d5d8dc");for(let p=3;p<d;p+=9)q(l,p,7,3,x-13,"#e2e5e9"),q(l,p+2,7,1,x-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(l,f,d,x)=>{let p=ln(4242);q(l,0,0,d,x,"#3d3f3c");let M=38,T=M/Math.SQRT2;l.save(),l.beginPath(),l.rect(0,22,d,x-22),l.clip();for(let E=-2;E*T<x+M;E++)for(let y=-2;y*M<d+M;y++){let S=y*M+(E%2?M/2:0),A=22+E*T,R=.52+p()*.17,P=Math.min(1,Math.max(0,(A-x*.55)/(x*.4))),I=Math.round(255*R*(1-.38*P)),C=`rgb(${I-4},${I-2},${I-9})`;l.fillStyle=C,l.beginPath(),l.moveTo(S,A-T+3.5),l.lineTo(S+T-3.5,A),l.lineTo(S,A+T-3.5),l.lineTo(S-T+3.5,A),l.closePath(),l.fill(),l.fillStyle="rgba(255,255,255,0.12)",l.beginPath(),l.moveTo(S,A-T+3.5),l.lineTo(S+T-3.5,A),l.lineTo(S,A),l.closePath(),l.fill(),P>.3&&p()<.5&&(l.fillStyle=`rgba(70,96,52,${.25+.3*p()})`,l.beginPath(),l.arc(S+(p()-.5)*10,A+6,4+p()*6,0,7),l.fill())}l.restore(),Ln(l,0,x*.55,d,x*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),q(l,0,0,d,22,"#8c8d87"),q(l,0,18,d,4,"rgba(0,0,0,0.3)"),q(l,0,0,d,3,"rgba(255,255,255,0.2)"),cn(l,i,d,x,.12)}),i.add("wrail",240,80,(l,f,d,x)=>{l.clearRect(0,0,d,x),q(l,0,0,d,9,"#6a4a34"),q(l,0,0,d,2,"rgba(255,225,190,0.25)"),q(l,0,8,d,2,"rgba(20,10,5,0.45)"),q(l,0,x-10,d,10,"#5e412e"),q(l,0,x-10,d,2,"rgba(255,225,190,0.18)");for(let p=4;p<d;p+=12)q(l,p,9,5,x-19,"#634632"),q(l,p,9,1.2,x-19,"rgba(255,225,190,0.18)"),q(l,p+4,9,1,x-19,"rgba(20,10,5,0.4)");cn(l,i,d,x,.15)}),i.add("woodwall",t,t,(l,f,d,x)=>{let p=ln(5151);q(l,0,0,d,x,"#5e4130");for(let M=0;M<x;M+=16){let T=p();q(l,0,M,d,16,T<.15?"#6b4b37":T<.3?"#553a2b":"#5e4130"),q(l,0,M,d,2,"rgba(255,220,180,0.12)"),q(l,0,M+14,d,2,"rgba(15,8,4,0.45)");for(let E=p()*80;E<d;E+=60+p()*90)q(l,E,M+2,1.5,12,"rgba(15,8,4,0.35)")}Ln(l,0,0,d,x,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),cn(l,i,d,x,.2)}),i}function Rp(i){let n=uu(1024,2560),s=n.getContext("2d"),r=ln(321),o={},a=512,c={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},u=(g,_,b)=>{let l=c[g],f=256,d=g==="pine",x=g==="sakura";s.save(),s.translate(_,b),s.beginPath(),s.rect(0,0,512,512),s.clip();let p=[[f,f,d?80:92]];for(let T=0;T<(d?10:14);T++){let E=r()*6.28,y=45+r()*120;p.push([f+Math.cos(E)*y,f+Math.sin(E)*y*(d?.42:.9),Math.min(34+r()*52,232-y)])}let M=x?2300:d?2600:2300;for(let T=0;T<M;T++){let E=p[Math.floor(r()*p.length)],y=r()*6.28,S=Math.sqrt(r())*E[2],A=E[0]+Math.cos(y)*S,R=E[1]+Math.sin(y)*S*(d?.45:1),P=S/E[2],I=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(P>.82?.5:0))));if(s.fillStyle=l[I],x){let C=7+r()*8;s.beginPath(),s.arc(A,R,C,0,7),s.fill(),r()<.25&&(s.fillStyle=l[4],s.beginPath(),s.arc(A-C*.3,R-C*.3,C*.4,0,7),s.fill())}else if(d)s.save(),s.translate(A,R),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(g==="momiji"){let C=8+r()*7;s.save(),s.translate(A,R),s.rotate(r()*6.28),s.beginPath();for(let L=0;L<10;L++){let O=L%2?C*.42:C,H=L/10*6.2832;s.lineTo(Math.cos(H)*O,Math.sin(H)*O)}s.closePath(),s.fill(),s.restore()}else if(g==="ginkgo"){let C=9+r()*7;s.save(),s.translate(A,R),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,C,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let C=9+r()*10;s.beginPath(),s.ellipse(A,R,C,C*.55,r()*6.28,0,7),s.fill()}}for(let T=0;T<90;T++){let E=r()*6.28,y=150+r()*85,S=f+Math.cos(E)*y,A=f+Math.sin(E)*y*(d?.45:.92);s.fillStyle=l[1+Math.floor(r()*4)],d?(s.save(),s.translate(S,A),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(S,A,x?6+r()*6:7+r()*6,0,7),s.fill())}if(x)for(let T=0;T<14;T++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let E=f+(r()-.5)*300,y=f+60+r()*120;s.beginPath(),s.moveTo(E,y),s.lineTo(E+(r()-.5)*40,y-20-r()*30),s.stroke()}s.restore(),o[g]={u0:_/1024,u1:(_+512)/1024,v0:1-(b+512)/2560,v1:1-b/2560}},h=(g,_,b,l)=>{s.save(),s.translate(_,b),s.beginPath(),s.rect(0,0,512,512),s.clip();let f=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],d=l?120:170;for(let x=0;x<d;x++){let p=256+(r()-.5)*(l?330:380)*Math.sqrt(r()),M=150+r()*(l?230:300)*(1-Math.abs(p-256)/300),T=(p-256)*.35+(r()-.5)*90,E=9+r()*9,y=p+T,S=512-M,A=Math.min(4,Math.floor(r()*2.2+M/380*2.6)),R=s.createLinearGradient(0,512,0,S);R.addColorStop(0,f[0]),R.addColorStop(.6,f[Math.max(1,A-1)]),R.addColorStop(1,f[A]),s.fillStyle=R,s.beginPath(),s.moveTo(p-E/2,512),s.quadraticCurveTo(p-E/2+T*.3,512-M*.55,y,S),s.quadraticCurveTo(p+E/2+T*.3,512-M*.5,p+E/2,512),s.fill()}if(l)for(let x=0;x<16;x++){let p=110+r()*290,M=150+r()*200,T=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(p+(r()-.5)*20,512),s.quadraticCurveTo(p+(r()-.5)*30,(M+512)/2,p,M),s.stroke(),T<.55){s.fillStyle="#fbfaf2";for(let E=0;E<12;E++){let y=E/12*6.283;s.beginPath(),s.ellipse(p+Math.cos(y)*11,M+Math.sin(y)*11,9,4.5,y,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(p,M,8,0,7),s.fill()}else if(T<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(p,M,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(p-3,M-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let E=0;E<6;E++)s.beginPath(),s.arc(p+(r()-.5)*16,M+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),o[g]={u0:_/1024,u1:(_+512)/1024,v0:1-(b+512)/2560,v1:1-b/2560}};((g,_,b)=>{let l=ln(97);s.save(),s.translate(_,b),s.beginPath(),s.rect(0,0,512,512),s.clip(),s.lineCap="round";let f=(d,x,p,M,T,E)=>{let y=d+Math.cos(p)*M,S=x+Math.sin(p)*M;if(s.strokeStyle=E>3?"#76605f":E>1?"#6c5458":"#62494f",s.lineWidth=T,s.beginPath(),s.moveTo(d,x),s.lineTo(y,S),s.stroke(),E<=0||T<.7)return;let A=2+(l()<.4?1:0);for(let R=0;R<A;R++){let P=p+(l()-.5)*1.1+(R-(A-1)/2)*.42;P=P*.8+-Math.PI/2*.2,f(y,S,P,M*(.62+l()*.2),T*.68,E-1)}};for(let d=0;d<6;d++)f(256+(l()-.5)*40,500,-Math.PI/2+(l()-.5)*.9,110+l()*50,5.6,6);s.restore(),o[g]={u0:_/1024,u1:(_+512)/1024,v0:1-(b+512)/2560,v1:1-b/2560}})("twigs",0,0),u("leafA",0,a),u("leafB",512,a),u("sakura",0,a+512),u("pine",512,a+512),u("momiji",0,a+1024),u("ginkgo",512,a+1024),h("grass",0,a+1536,!1),h("flowers",512,a+1536,!0);let v=new $n(n);return v.colorSpace=jt,v.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:v,cells:o,tuftV:[0,1-(a+1536)/2560]}}var un=[1,1,1],be={pole:fe("#b1b0a9"),metal:fe("#8d9198"),black:fe("#2a2b30"),yellow:fe("#f2c230"),white:fe("#f4f3ee"),trans:fe("#a0a3a8"),lampPole:fe("#727780"),lampHead:fe("#dcdcd6"),trunk:fe("#6a5444"),trunkDark:fe("#4b3a33"),leaf:fe("#86ba4c"),leafShade:fe("#2c6640"),sakura:fe("#ffd3e3"),sakuraShade:fe("#de94b4"),pine:fe("#55874c"),pineShade:fe("#1d4632"),cedar:fe("#41713e"),cedarShade:fe("#1b3e2a"),roof:fe("#bdbbb3"),parapet:fe("#dcdad2"),pipe:fe("#c4c4bf"),orange:fe("#f07a22"),red:fe("#d8352a"),vermilion:fe("#e2482c"),concrete:fe("#c9c7c0"),stone:fe("#a8a69e"),terracotta:fe("#b8653d"),rail:fe("#eeeeea")},Sf=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(fe),is=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(fe),Ip=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(fe),Tf=null;function Lp(i){Tf=i}var Ci=i=>Tf.uv(i),oo=Ci,Dp=(i,e)=>{let t=1;for(;Tf.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function pu(i,e,t,n,s=0){let r=new it().makeRotationY(s);r.setPosition(e,t,n);let o=new it().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var Ef=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let a=e[5];(a==="g"&&e[6]==="l"||a==="d"||a==="k"||a==="c"||a==="n")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},Kt=(i,e,t,n,s,r,o,a=un)=>{Ef(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],a,Ci(o)),i.litV=0},Pi=(i,e,t,n,s,r,o,a=un)=>{Ef(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],a,Ci(o)),i.litV=0},Ii=(i,e,t,n,s,r,o,a=un)=>{Ef(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],a,Ci(o)),i.litV=0},ro=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?Ci(r):void 0),v2=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function Np(i){return v2.map(e=>new k(e[0],e[1],e[2]).applyMatrix4(i))}function wf(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,be.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?be.black:be.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,be.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,be.metal);let o=[-.85,-.3,.3,.85],a=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,be.white);for(let u of a)s.cyl(0,r-1.65,u,.045,.03,.15,6,be.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,be.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,be.trans),s.box(-.06,7.2,.12,.06,7.35,.26,be.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,be.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,be.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,be.concrete);for(let u=2.4,h=0;u<r-2;u+=.45,h++)s.rod([0,u,0],[h%2?.3:-.3,u,0],.015,.015,3,be.metal);return i.atlas.setM(e),Kt(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&Kt(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...a.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new k(u[0],u[1],u[2]).applyMatrix4(e))}var fu=new k;function As(i,e,t,n,s,r){i.lamps&&(fu.set(t,n,s).applyMatrix4(e),i.lamps.push(fu.x,fu.y,fu.z,r))}function Af(i,e,t,n={}){let s=i.color;s.setM(e),As(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,be.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,be.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,be.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,be.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,un);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function Up(i,e,t=.04){let n=i.color;n.setM(e),As(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,be.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,be.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,be.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,un),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function La(i,e){let t=i.color;t.setM(e),As(i,e,0,3.5,0,.9),t.cyl(0,0,0,.07,.06,3.2,8,fe("#3a3a3e")),t.box(-.2,3.2,-.2,.2,3.25,.2,fe("#3a3a3e")),t.cyl(0,3.75,0,.26,.04,.3,8,fe("#3a3a3e")),i.lamp.setM(e),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,un),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],un,{u0:0,u1:1,v0:0,v1:1})}function Rf(i,e,t){let n=Math.floor(t()*3),s=[be.red,fe("#2f6fd8"),be.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,xn(s,.8)),i.atlas.setM(e),Kt(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function Mf(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,fe("#e6e6e1")),i.atlas.setM(e),Kt(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function Fp(i,e,t){let n=i.color;n.setM(e);let s=t.pick([fe("#c8ccd2"),fe("#c0392b"),fe("#2c6fb7"),fe("#2b2b2b"),fe("#e8c84a"),fe("#e98fb0")]);for(let o of[-.52,.52])for(let a=0;a<12;a++){let c=a/12*Math.PI*2,u=(a+1)/12*Math.PI*2;n.rod([o+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,be.black)}let r=(o,a)=>n.rod(o,a,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,be.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,be.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,be.metal)}function Bp(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,be.orange),t.cyl(0,.04,0,.16,.03,.68,10,be.orange),t.cyl(0,.32,0,.115,.095,.12,10,be.white,!1)}function Cf(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,be.terracotta),i.leaf.setM(e),Li(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}function Rs(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,be.metal),i.atlas.setM(e),n<0?Ii(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Pi(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function Pf(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?be.white:be.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,be.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,be.black),i.atlas.setM(e),t<0?Ii(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Pi(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function Op(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,fe("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,fe("#f0a020"))}function If(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,be.orange);let s=0,r=3.25,o=.42,a=14;for(let c=0;c<a;c++){let u=c/a*Math.PI*2,h=(c+1)/a*Math.PI*2,m=(v,g,_)=>[t*_,r+Math.sin(v)*g,s+Math.cos(v)*g-.25];ro(n,m(0,0,-.02),m(t>0?h:u,o,-.02),m(t>0?u:h,o,-.02),be.orange),ro(n,m(0,0,-.035),m(t>0?h:u,o*.86,-.035),m(t>0?u:h,o*.86,-.035),fe("#dfe9f2"))}}var Lf=null;function zp(i){Lf=i}var bf=1;function kp(i){bf=i}function Li(i,e,t,n,s,r,o,a,c,u,h,m,v=0){let g=Lf[o],_=1+(1-bf)*.35;a=Math.max(2,Math.round(a*bf));for(let b=0;b<a;b++){let l=c()*2-1,f=c()*2-1,d=c()*2-1;v&&(f=1.2+c());let x=Math.hypot(l,f,d)||1;l/=x,f/=x,d/=x;let p=-d,M=0,T=l;x=Math.hypot(p,T),x<.1&&(p=1,T=0,x=1),p/=x,T/=x;let E=f*T-d*M,y=d*p-l*T,S=l*M-f*p,A=Math.PI+(c()-.5)*.9,R=Math.cos(A),P=Math.sin(A),I=p*R+E*P,C=M*R+y*P,L=T*R+S*P,O=E*R-p*P,H=y*R-M*P,W=S*R-T*P,D=r*(1.3+c()*.45)*_/2,z=t+(c()-.5)*r*.6,V=n+(c()-.5)*r*(v?.15:.5),ee=s+(c()-.5)*r*.6,le=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Be,J])=>[z+(I*Be+O*J)*D,V+(C*Be+H*J)*D*(v?.6:1),ee+(L*Be+W*J)*D]),Xe=le.map(Be=>{let J=Be[0]-e[0],Z=Be[1]-e[1],Me=Be[2]-e[2],Le=Math.hypot(J,Z,Me)||1;J/=Le,Z/=Le,Me/=Le;let we=Be[0]-t,Ge=Be[1]-n,Ke=Be[2]-s;return Le=Math.hypot(we,Ge,Ke)||1,[J*.7+we/Le*.3,Z*.7+Ge/Le*.3+(v?.5:0),Me*.7+Ke/Le*.3]}),Ae=le.map(Be=>np(h,u,.45+.55*Math.max(0,Math.min(1,(Be[1]-m[0])/(m[1]-m[0])))));i.leaf.card(le,Xe,g,Ae)}}function Df(i,e,t,n="grass",s=1){let r=Lf[n],o=(.42+t()*.38)*s,a=o*1.2,c=t()*Math.PI,u=[0,1,0],h=[u,u,u,u],m=[.6,.64,.58],v=[1,1,1];i.leaf.setM(e);for(let g of[c,c+Math.PI/2]){let _=Math.cos(g)*a/2,b=Math.sin(g)*a/2;i.leaf.card([[-_,-.05,-b],[_,-.05,b],[_,o,b],[-_,o,-b]],h,r,[m,m,v,v])}}function x2(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,be.trunk);for(let u=0;u<3;u++){let h=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(h)*1.1*n,s*.68,Math.sin(h)*1.1*n],.09*n,.05*n,5,be.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",a=[s*.45,s*1.15],c=7+Math.floor(t()*3);for(let u=0;u<c;u++){let h=t()*6.28,m=(.6+t())*1.3*n;Li(i,r,Math.cos(h)*m,s*(.62+t()*.3),Math.sin(h)*m,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],a)}Li(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],a)}function _2(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,be.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,m=(2.2+t()*1.6)*n,v=[Math.cos(h)*m,s*(.62+t()*.18),Math.sin(h)*m];i.color.rod([0,s*.4,0],v,.12*n,.05*n,5,be.trunkDark),r.push(v),i.color.rod(v,[v[0]*1.25,v[1]+.9*n,v[2]*1.25],.05*n,.02*n,4,be.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],a=[s*.5,s*1.1],c=[.72,.62,.72];for(let u of r)for(let h=0;h<2;h++)Li(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],c,a);Li(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],c,a)}function y2(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,a=[r*.4,o*.45,.2],c=[r,o*.8,-.2];s.rod([0,0,0],a,.2*n,.15*n,6,be.trunkDark),s.rod(a,c,.15*n,.09*n,6,be.trunkDark),i.leaf.setM(e);let u=[[c[0],c[1]+.3,c[2],1.7],[a[0]+1.4*n,a[1]+.8,.5,1.3],[a[0]-1.3*n,a[1]+1.4,-.4,1.2],[c[0]+.9*n,c[1]-.6,.8,1.1]];for(let[h,m,v,g]of u)s.rod(h>a[0]?a:c,[h,m-.2,v],.07*n,.04*n,4,be.trunkDark),Li(i,[h,m-.8,v],h,m,v,g*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[m-.7,m+.5],1)}function M2(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,be.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,m=(1.8+t()*1.4)*n,v=[Math.cos(h)*m,s*(.55+t()*.2),Math.sin(h)*m];i.color.rod([0,s*.38,0],v,.09*n,.04*n,5,be.trunkDark),r.push(v)}i.leaf.setM(e);let o=[0,s*.7,0],a=[s*.45,s*1.1],c=[.62,.52,.56];for(let u of r)Li(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],c,a);Li(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],c,a)}function b2(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,be.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],a=[.68,.6,.52];for(let c=0;c<7;c++){let u=s*(.34+c*.09),h=(2.1-c*.24)*n,m=t()*6.28;Li(i,r,Math.cos(m)*h*.35,u,Math.sin(m)*h*.35,Math.max(.7,h)*1.05,"ginkgo",5,t,[1,1,1],a,o)}}function S2(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,fe("#eeece6"));for(let u=0;u<7;u++){let h=t.range(.4,r*.85),m=h/r;s.cyl(o*m,h,0,.135*n*(1-m*.6),.13*n*(1-m*.6),.05,7,fe("#2b2b30"),!1)}for(let u=0;u<7;u++){let h=r*(.45+t()*.5),m=t()*6.28,v=(.8+t()*1.6)*n,g=h/r;s.rod([o*g,h,0],[o*g+Math.cos(m)*v,h+v*.9,Math.sin(m)*v],.035*n,.012*n,4,fe("#8b7f78"))}let a=r*.7,c=(1.5+t()*.5)*n;i.leaf.setM(e),Li(i,[o*.7,a,0],o*.7,a,0,c,"twigs",3,t,[1,1,1],[.92,.9,.92],[a-c,a+c])}function T2(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,be.trunkDark),i.foliage.setM(e);let r=fe("#1d3a2c"),o=fe("#eef2f8"),a=fe("#d7e0ec");for(let c=0;c<4;c++){let u=s*(.16+c*.19),h=(1.9-c*.38)*n,m=s*.3;i.foliage.cyl(0,u,0,h,h*.3,m,9,r),i.foliage.cyl(0,u+m*.45,0,h*.72,.05,m*.62,9,c%2?o:a)}}function E2(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,be.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,be.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,be.cedar)}var Hp={broad:x2,sakura:_2,pine:y2,cedar:E2,maple:M2,ginkgo:b2,birch:S2,snowcedar:T2},Cp={};function Vp(i,e){let t=i+e,n=Cp[t];if(!n){let s={color:new _n,foliage:new _n,leaf:new _n({uv:!0})};Hp[i](s,new it,ln(1e3+e*77+i.length*13),1),n=Cp[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays()}}return n}function Gp(){for(let i in Hp)for(let e=0;e<4;e++)Vp(i,e)}function On(i,e,t,n,s=1){let r=Vp(t,Math.floor(n()*4)),o=e.clone().scale(new k(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o)}var w2=new Set(["win0","win2","win5","win6"]),Xi=(i,e,t)=>e<t?i+(e<t*.35&&w2.has(i)?"C":"L"):i;function Da(i,e,t,n,s,r,o){let a=Math.max(1,Math.round(t/3)),c=t/a;for(let u of[-1,1])for(let h=0;h<n.length-1;h++)for(let m=0;m<a;m++){let v=h>0&&r()<.3?Xi("win6",r(),o):r()<.2?"win5":"plain";(u>0?Pi:Ii)(i,u*e/2,m*c,(m+1)*c,n[h],n[h+1],v,s)}}function Na(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],be.roof);let o=.5,a=.15;if(i.box(-e/2,n,-.02,e/2,n+o,a,be.parapet),i.box(-e/2,n,t-a,e/2,n+o,t,be.parapet),i.box(-e/2,n,0,-e/2+a,n+o,t,be.parapet),i.box(e/2-a,n,0,e/2,n+o,t,be.parapet),s()<.4){let c=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[h,m]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(c+h-.05,n,u+m-.05,c+h+.05,n+1,u+m+.05,be.metal);i.cyl(c,n+1,u,.85,.85,1.3,12,fe("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,be.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,be.metal)}function du(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,be.black);let r="vs"+Math.floor(s()*10);Ii(i.atlas,e-.065,-.88,-.12,t,n,r),Pi(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,be.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,be.metal)}function ss(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,be.concrete,null,{noBottom:!0}),n.type){case"shop":return A2(i,e,t,n);case"machiya":return R2(i,e,t,n);case"apt":return C2(i,e,t,n);case"office":return P2(i,e,t,n);case"konbini":return I2(i,e,t,n);case"house":return D2(i,e,t,n);case"tower":return N2(i,e,t,n)}}var Wp=new Set(["glass","door","cafe","noren"]),Xp={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function A2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,m=3.6,v=3,g=m+(o-1)*v,_=Math.max(1,Math.round(s/3)),b=s/_,l=-s/2,f=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),d=[],x=0;for(let y=0;y<_;y++){let S=Dp(t,"shop_"+f[y%f.length]);d.push(S),!x&&S.startsWith("shop_glass")&&S.length>10&&(x=+S.slice(10))}for(let y=0;y<_;y++){let S=f[y%f.length];Kt(u,l+y*b,l+(y+1)*b,0,m,0,x&&S==="glass"?"shop_glass"+x:d[y]),Wp.has(S)&&As(i,e,l+(y+.5)*b,1.9,-.8,.7)}let p=t.pick([0,0,1,5,0,1]),M=[0,m];for(let y=1;y<o;y++)M.push(m+y*v);for(let y=1;y<o;y++)for(let S=0;S<_;S++){let A=S%2===1&&t()<.3?5:p;Kt(u,l+S*b,l+(S+1)*b,M[y],M[y+1],0,Xi("win"+A,t(),c),a)}Da(u,s,r,M,a,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,g,r],[-s/2,g,r],xn(a,.8)),Na(h,s,r,g,t);let T=s*.94;h.box(-T/2,m-.8,-.3,T/2,m+.08,-.02,be.black);let E="hs"+Math.floor(t()*14);if(Kt(u,-T/2,T/2,m-.8,m+.08,-.305,Xp[x]||E),t()<.55){let y=t.pick(Ip),S=m-.85;h.quad([s/2-.2,S-.35,-1.1],[-s/2+.2,S-.35,-1.1],[-s/2+.2,S,-.02],[s/2-.2,S,-.02],y),h.quad([s/2-.2,S-.6,-1.1],[-s/2+.2,S-.6,-1.1],[-s/2+.2,S-.35,-1.1],[s/2-.2,S-.35,-1.1],xn(y,.85))}if(o>=2&&t()<.85){let y=(t()<.5?1:-1)*(s/2-.35);du(i,y,m+.3,Math.min(g-.15,m+2.8),t)}for(let y=1;y<o;y++)if(t()<.4){let S=Math.floor(t()*_),A=l+S*b+.15,R=l+(S+1)*b-.15,P=M[y];h.box(A,P-.12,-.9,R,P,0,be.parapet),Kt(u,A,R,P,P+1,-.9,"rail"),Ii(u,A,-.9,0,P,P+1,"rail"),Pi(u,R,-.9,0,P,P+1,"rail"),t()<.45&&Kp(h,A+.1,R-.1,P+1.95,-.55,t),t()<.6&&Mf(i,e,(A+R)/2+.6,P,-.75)}else if(t()<.35){let S=Math.floor(t()*_);Mf(i,e,l+(S+.5)*b,M[y]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}h.cyl(l+.12,0,-.08,.05,.05,g,6,be.pipe,!1),h.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,fe("#d9d9d3")),o>=3&&t()<.18&&qp(i,s,g,r,t)}function R2(i,e,t,n){let{w:s,d:r,floors:o,litP:a}=n,c=i.atlas,u=i.color,h=3.6,m=2.9,v=h+(o-1)*m,g=-s/2,_=Math.max(2,Math.round(s/3)),b=s/_,l=fe("#5c4030"),f=fe("#3a2a20"),d=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),x=[],p=0;for(let D=0;D<_;D++){let z=Dp(t,"shop_"+d[D%d.length]);x.push(z),!p&&z.startsWith("shop_glass")&&z.length>10&&(p=+z.slice(10))}for(let D=0;D<_;D++){let z=d[D%d.length];Kt(c,g+D*b,g+(D+1)*b,0,h,0,p&&z==="glass"?"shop_glass"+p:x[D]),Wp.has(z)&&As(i,e,g+(D+.5)*b,1.9,-.8,.7)}let M=!!n.plaster,T=n.tint,E=[0,h];for(let D=1;D<o;D++)E.push(h+D*m);let y=M?t.pick([0,0,1,0,2]):4;for(let D=1;D<o;D++)for(let z=0;z<_;z++)Kt(c,g+z*b,g+(z+1)*b,E[D],E[D+1],0,Xi("win"+(M&&z%2===1&&t()<.3?5:y===2?0:y),t(),a),M?T:un);{let D=Math.max(1,Math.round(r/3)),z=r/D;for(let V of[-1,1])for(let ee=0;ee<E.length-1;ee++)for(let le=0;le<D;le++)(V>0?Pi:Ii)(c,V*s/2,le*z,(le+1)*z,E[ee],E[ee+1],M?ee>0&&t()<.35?Xi("win6",t(),a):"plain":ee>0&&t()<.45?Xi("win4",t(),a):"woodwall",M?T:un)}u.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],M?xn(T,.8):fe("#6a5240"));for(let D of[g,-g])u.box(D-.09,0,-.12,D+.09,v,.02,f);if(M)for(let D=2;D<o;D++)u.box(g,E[D]-.1,-.08,-g,E[D]+.06,0,f);let{RC:S,k:A}=Yp(i,n,s,r,v,t,!M),R=h+.34,P=1.05,I=.42,C=Math.max(2,Math.round((s+.3)/3));for(let D=0;D<C;D++){let z=g-.15+(s+.3)*D/C,V=g-.15+(s+.3)*(D+1)/C;c.quad([V,R-I,-P],[z,R-I,-P],[z,R,0],[V,R,0],S,A)}u.quad([g-.15,R-I-.03,-P],[-g+.15,R-I-.03,-P],[-g+.15,R-.1,0],[g-.15,R-.1,0],l);let L=s*.9,O=R-I+.02,H=O-.62;u.box(-L/2,H,-P-.02,L/2,O,-P+.07,f),Kt(c,-L/2,L/2,H,O,-P-.025,Xp[p]||"hs"+Math.floor(t()*14));for(let D of[-L/2+.25,L/2-.25])u.box(D-.03,O,-P+.02,D+.03,R-I*.1,-P+.06,f);i.sodium.setM(e),u.noShadow=!0;for(let D=0;D<_;D++){let z=g+(D+.5)*b;u.box(z-.008,H-.02,-.62,z+.008,R-I*.6,-.6,f),i.sodium.box(z-.06,H-.16,-.67,z+.06,H-.04,-.55,null)}u.noShadow=!1;let W=!1;if(t()<.5){W=!0;let D=t.pick(Ip),z=H-.12;u.quad([s/2-.2,z-.32,-.95],[-s/2+.2,z-.32,-.95],[-s/2+.2,z,-.02],[s/2-.2,z,-.02],D),u.quad([s/2-.2,z-.55,-.95],[-s/2+.2,z-.55,-.95],[-s/2+.2,z-.32,-.95],[s/2-.2,z-.32,-.95],xn(D,.85))}if(o>=2&&(!M||t()<.5)){let D=E[1]+.42,z=-.5,V=g+.12,ee=-g-.12;u.box(V,D-.07,z-.04,ee,D,0,l);for(let le=0;le<_;le++)Kt(c,g+.12+(s-.24)*le/_,g+.12+(s-.24)*(le+1)/_,D,D+.95,z,"wrail");Ii(c,V,z,0,D,D+.95,"wrail"),Pi(c,ee,z,0,D,D+.95,"wrail"),i.leaf.setM(e);for(let le=0;le<_;le++)if(t()<.7){let Xe=g+(le+.5)*b,Ae=Math.min(b*.7,1.6);u.noShadow=!0,u.box(Xe-Ae/2,D+.72,z-.2,Xe+Ae/2,D+.92,z-.02,fe("#7a5236")),u.noShadow=!1;for(let Be=Xe-Ae/2+.2;Be<Xe+Ae/2-.1;Be+=.32)Li(i,[Be,D+.95,z-.11],Be,D+1.05,z-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[D+.9,D+1.3])}}if(o>=2&&t()<.9){let D=t()<.5?1:-1;du(i,D*(s/2-.35),h+.6,Math.min(v-.2,h+2.7),t),s>7&&t()<.35&&du(i,-D*(s/2-.35),h+.8,Math.min(v-.2,h+2.5),t)}{let D=d.includes("noren")||d.includes("cafe"),z=W?0:D?2:t()<.3?1:0;i.sodium.setM(e);for(let V=0;V<z;V++){let ee=z===2?(V?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),le=H-.5;u.noShadow=!0,u.box(ee-.006,le+.42,-P+.12,ee+.006,H,-P+.14,f),i.sodium.cyl(ee,le,-P+.13,.11,.16,.18,10,null,!1),i.sodium.cyl(ee,le+.18,-P+.13,.16,.11,.18,10,null,!1),u.cyl(ee,le-.035,-P+.13,.1,.1,.04,8,f),u.cyl(ee,le+.355,-P+.13,.1,.1,.04,8,f),u.noShadow=!1}}for(let D=g+.45+t()*.4;D<-g-.3;D+=.7+t()*1.3)t()<.7&&Cf(i,e,t,D,-.4);i.color.setM(e),i.atlas.setM(e)}function qp(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,a=n*.3;for(let c of[-r*.35,r*.35])i.color.box(c-.06,t,a,c+.06,t+1.2+o,a+.12,be.metal);i.color.box(-r/2,t+1.2,a+.12,r/2,t+1.2+o,a+.3,be.metal),Kt(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,a+.115,"bb"+Math.floor(s()*4))}function C2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,m=3.2,v=2.95,g=m+(o-1)*v,_=Math.max(2,Math.round(s/3.2)),b=s/_,l=-s/2,f=[0,m];for(let p=1;p<o;p++)f.push(m+p*v);for(let p=0;p<_;p++)Kt(u,l+p*b,l+(p+1)*b,0,m,0,p===Math.floor(_/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),p===Math.floor(_/2)?un:a);let d="bal"+Math.floor(t()*3),x=xn(a,.97);for(let p=1;p<o;p++){let M=f[p];for(let T=0;T<_;T++)Kt(u,l+T*b,l+(T+1)*b,M,f[p+1],0,Xi("win2",t(),c),a);h.box(l,M-.15,-1.3,-l,M,0,x),h.box(l,M,-1.3,-l,M+1.1,-1.18,x,null,{noBottom:!0});for(let T=0;T<_;T++)Kt(u,l+T*b,l+(T+1)*b,M,M+1.1,-1.305,d,a);for(let T=0;T<=_;T++)h.box(l+T*b-.05,M,-1.18,l+T*b+.05,M+2.4,0,xn(a,.92));for(let T=0;T<_;T++){let E=t(),y=l+T*b+.2,S=l+(T+1)*b-.2;E<.34?Kp(h,y,S,M+2.02,-.98,t):E<.46&&B2(h,y+.25,Math.min(S-.25,y+1.9),M+1.1,-1.3,t)}i.atlas.setM(e);for(let T=0;T<_;T++)t()<.55&&(Mf(i,e,l+(T+.78)*b,M,-.55),i.atlas.setM(e),i.color.setM(e))}h.box(l,g-.15,-1.3,-l,g,0,x),Da(u,s,r,f,a,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,g,r],[-s/2,g,r],xn(a,.8)),Na(h,s,r,g,t,!0)}function P2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,m=4,v=3.4,g=m+(o-1)*v,_=Math.max(2,Math.round(s/3)),b=s/_,l=-s/2,f=[0,m];for(let d=1;d<o;d++)f.push(m+d*v);for(let d=0;d<_;d++)Kt(u,l+d*b,l+(d+1)*b,0,m,0,d===1?"shop_door":"shop_glass");for(let d=1;d<o;d++)for(let x=0;x<_;x++)Kt(u,l+x*b,l+(x+1)*b,f[d],f[d+1],0,Xi("win3",t(),c),a);Da(u,s,r,f,a,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,g,r],[-s/2,g,r],xn(a,.8)),Na(h,s,r,g,t,!0),t()<.6&&du(i,(t()<.5?1:-1)*(s/2-.3),m+.4,Math.min(g-.3,m+4.5),t),t()<.3&&qp(i,s,g,r,t)}function I2(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,a=i.color,c=4.4,u=-s/2,h=Math.max(3,Math.round(s/3)),m=s/h;for(let v=0;v<h;v++)Kt(o,u+v*m,u+(v+1)*m,0,3.4,0,"shop_konbini"),As(i,e,u+(v+.5)*m,1.9,-.8,.8);a.box(u,3.4,-.35,-u,c,0,be.white),Kt(o,u,-u,3.4,c,-.355,"konbini_band"),Da(o,s,r,[0,c],fe("#f2f2ee"),t,0),Na(a,s,r,c,t)}var Pp=(i,e)=>e?fe("#7a5a42"):i.tint,yf=null,L2=()=>{if(!yf){let i=Ci("kawara"),e=16/272*(i.u1-i.u0);yf={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return yf};function Yp(i,e,t,n,s,r,o){let a=i.atlas,c=i.color,u=!!e.snow,h=u?.75:.6,m=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),v=u?Ci("white"):L2(),g=u?fe("#f3f5fa"):fe("#c8ccd8"),_=u?fe("#e4e8f0"):fe("#3d4456"),b=u?1:Math.max(2,Math.round((t+2*h)/3)),l=x=>-t/2-h+(t+2*h)*x/b;for(let x=0;x<b;x++){let p=l(x),M=l(x+1);a.quad([M,s-.25,-h],[p,s-.25,-h],[p,s+m,n/2],[M,s+m,n/2],g,v),a.quad([p,s-.25,n+h],[M,s-.25,n+h],[M,s+m,n/2],[p,s+m,n/2],g,v)}let f=(x,p,M,T,E,y)=>{y<0?(c.quad([p,M,E],[x,M,E],[x,T,E],[p,T,E],_),c.quad([x,M,E],[p,M,E],[p,M,E+.08],[x,M,E+.08],_)):(c.quad([x,M,E],[p,M,E],[p,T,E],[x,T,E],_),c.quad([p,M,E],[x,M,E],[x,M,E-.08],[p,M,E-.08],_))};for(let[x,p]of[[-h,0],[n+h,n]])f(-t/2-h,t/2+h,s-.42,s-.22,x<0?x-.04:x+.04,x<0?-1:1),c.quad(x<0?[-t/2-h,s-.26,x]:[t/2+h,s-.26,x],x<0?[t/2+h,s-.26,x]:[-t/2-h,s-.26,x],x<0?[t/2+h,s-.26,p]:[-t/2-h,s-.26,p],x<0?[-t/2-h,s-.26,p]:[t/2+h,s-.26,p],xn(Pp(e,o),.62));for(let x of[-1,1]){let p=x*(t/2+h+.02),M=.2,T=[p,s-.25,-h],E=[p,s+m,n/2],y=[p,s-.25,n+h],S=A=>[A[0],A[1]-M,A[2]];x>0?(c.quad(S(E),S(T),T,E,_),c.quad(S(y),S(E),E,y,_)):(c.quad(S(T),S(E),E,T,_),c.quad(S(E),S(y),y,E,_))}let d=Pp(e,o);if(ro(c,[-t/2,s,0],[-t/2,s,n],[-t/2,s+m-.1,n/2],d),ro(c,[t/2,s,n],[t/2,s,0],[t/2,s+m-.1,n/2],d),c.box(-t/2-h,s+m-.05,n/2-.15,t/2+h,s+m+.18,n/2+.15,u?fe("#f6f7fb"):fe("#3d4456")),u){c.box(-t/2-h-.05,s-.42,-h-.1,t/2+h+.05,s-.12,-h+.3,fe("#eef1f7")),c.box(-t/2-h-.05,s-.42,n+h-.3,t/2+h+.05,s-.12,n+h+.1,fe("#eef1f7"));for(let x=-t/2;x<t/2;x+=.45+r()*.5)c.cyl(x,s-.42-.35,-h+.02,0,.04,.35,4,fe("#dfe8f3"),!1)}return{RC:g,k:v,fascia:f,nS:b}}function D2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,m=2.9,v=o*m,g=-s/2,_=t()<.5,b=Math.max(2,Math.round(s/3)),l=s/b,f=[];for(let E=0;E<=o;E++)f.push(E*m);let d=_?un:a;for(let E=0;E<o;E++)for(let y=0;y<b;y++){let S=_?"win4":"win0";E===0&&y===0?S="shop_house":S=Xi(S,t(),c),Kt(u,g+y*l,g+(y+1)*l,f[E],f[E+1],0,S,S==="shop_house"?un:d)}Da(u,s,r,f,_?fe("#9a7a62"):a,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],xn(a,.75));let{RC:x,k:p,fascia:M,nS:T}=Yp(i,n,s,r,v,t,_);if(o>1){let E=m+.05;for(let y=0;y<T;y++){let S=-s/2-.1+(s+.2)*y/T,A=-s/2-.1+(s+.2)*(y+1)/T;u.quad([A,E-.3,-.75],[S,E-.3,-.75],[S,E+.05,0],[A,E+.05,0],x,p)}M(-s/2-.1,s/2+.1,E-.42,E-.28,-.79,-1)}if(n.fence){let E=-n.fence,y=1.2;for(let[S,A]of[[-s/2,-1],[.4,s/2]])h.box(S,0,E-.08,A,y,E+.08,be.concrete),Kt(u,S,A,0,y,E-.085,"block")}}function N2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,m=3.4,v=o*m,g=Math.max(2,Math.round(s/6)),_=s/g,b=-s/2,l=t()<.5?"win3":"win2",f=[];for(let p=0;p<=o;p++)f.push(p*m);for(let p=0;p<o;p++)for(let M=0;M<g;M++)Kt(u,b+M*_,b+(M+1)*_,f[p],f[p+1],0,Xi(l,t(),c),a);let d=Math.max(1,Math.round(r/6)),x=r/d;for(let p of[-1,1])for(let M=0;M<o;M++)for(let T=0;T<d;T++)(p>0?Pi:Ii)(u,p*s/2,T*x,(T+1)*x,f[M],f[M+1],Xi(l,t(),c),a);Na(h,s,r,v,t,!0)}function Zp(i,e,t){let n=i.color;n.setM(e);let s=t.pick([fe("#f2f2ee"),fe("#c9cdd2"),fe("#2b2f38"),fe("#b33a32"),fe("#9fc6c0"),fe("#e7d9b4"),fe("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,xn(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,fe("#2a3346"));for(let[r,o]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,o-.11,r+.3,.6,o+.11,be.black)}function Nf(i,e,t,n){let s=i.color,r=fe("#8d9096"),o=fe("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let a=-n-.62,c=-n+.62;s.box(-.14,5.08,a,.14,5.56,c,o);let u=t*.141;i.atlas.setM(e),(t>0?Pi:Ii)(i.atlas,u,a,c,5.08,5.56,"signal");let h=t>0?c:a,m=t>0?-1:1;for(let g=0;g<3;g++){let _=h+m*(.2+g*.4);s.box(t>0?.14:-.36,5.47,_-.15,t>0?.36:-.14,5.5,_+.15,o)}let v=h+m*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,v-.11,t>0?.16:-.145,5.43,v+.11,un)}function $p(i,e,t,n){let s=i.color,r=fe("#3d6ea8"),o=fe("#e8eef2"),a=fe("#c7c5bf"),c=5.35;s.setM(e),s.box(-1.1,c-.65,-t,1.1,c,t,r);for(let u of[-1.1,1])s.box(u,c,-t,u+.1,c+1.1,t,o),s.box(u-.02,c+1.1,-t,u+.12,c+1.18,t,r);i.atlas.setM(e),Ii(i.atlas,-1.105,-2.2,2.2,c-.62,c-.06,n),Pi(i.atlas,1.105,-2.2,2.2,c-.62,c-.06,n),s.setM(e);for(let u of[-1,1]){let h=u*(t-1.65),m=u*(t-.15),v=Math.min(h,m),g=Math.max(h,m);s.box(-.45,.15,v+.3,.45,c-.65,g-.3,r);let _=20,b=(c-.15)/_;for(let l=0;l<_;l++)s.box(1.1+l*.3,.15,v,1.1+(l+1)*.3,c-(l+1)*b+.04,g,a);s.box(1.1,c-.1,v-.05,1.1+_*.3,c-.02,v+.05,r)}}function Jp(i,e,t,n,s,r,o){let a=i.color,c=1.22,u=3.55,h=6.7,m=fe("#c8c5bd"),v=fe("#ebe8de"),g=fe("#7a5a42"),_=fe("#5e4433"),b=fe("#4d5468");a.setM(e),a.box(t,-1.4,u,n,c,h,m,null,{noBottom:!0}),a.box(t,c,u,n,c+.025,u+.32,v),a.box(t,c,u+.6,n,c+.04,u+.9,be.yellow);let l=Math.sign(s-(t+n)/2),f=l>0?n:t,d=f+l*6.2,x=u+.9,p=h-.2,M=(D,z,V)=>[D,z,V];l>0?a.quad(M(d,.1,p),M(d,.1,x),M(f,c,x),M(f,c,p),m):a.quad(M(d,.1,x),M(d,.1,p),M(f,c,p),M(f,c,x),m);for(let D of[x,p]){let z=fe("#9aa0a6");a.rod([d,.1+.9,D],[f,c+.9,D],.03,.03,5,z);for(let V=0;V<=3;V++){let ee=d+(f-d)*V/3,le=.1+(c-.1)*V/3;a.box(ee-.03,le,D-.03,ee+.03,le+.9,D+.03,z)}}i.atlas.setM(e);for(let D=t;D<n-.01;D+=3){let z=Math.min(n,D+3);i.atlas.quad([D,-.6,h+.004],[z,-.6,h+.004],[z,c,h+.004],[D,c,h+.004],fe("#d8d4ca"),Ci("concrete"))}a.setM(e);for(let D=t+.4;D<n;D+=2)a.box(D-.05,c,h-.12,D+.05,c+1,h-.02,fe("#8f949a"));for(let D of[.45,.95])a.box(t,c+D,h-.1,n,c+D+.06,h-.04,fe("#8f949a"));let T=n-t,E=D=>l>0?n-T*D:t+T*D,y=E(.47),S=y-2.3,A=y+2.3,R=u+1.35,P=h-.25;a.box(S,c,P-.12,A,c+2.45,P,g);for(let D of[S,A-.12])a.box(D,c,R+.6,D+.12,c+2.45,P,_);for(let D of[S,A-.12])a.box(D,c,R,D+.12,c+2.45,R+.12,_);a.quad([A+.4,c+2.5,R-.45],[S-.4,c+2.5,R-.45],[S-.4,c+2.85,P+.35],[A+.4,c+2.85,P+.35],b),a.quad([S-.4,c+2.42,R-.45],[A+.4,c+2.42,R-.45],[A+.4,c+2.77,P+.35],[S-.4,c+2.77,P+.35],fe("#3a3f50")),a.box(S+.3,c+.42,P-.55,A-.3,c+.48,P-.15,fe("#8a6a4a"));for(let D of[S+.4,A-.5])a.box(D,c,P-.5,D+.08,c+.42,P-.2,be.metal);i.atlas.setM(e),i.atlas.quad([y-1.1,c+1.55,P+.005],[y+1.1,c+1.55,P+.005],[y+1.1,c+2.03,P+.005],[y-1.1,c+2.03,P+.005],un,Ci("ekiplate"+r));let I=E(.2),C=u+1.6,L=1.25,O=c+1.25,H=O+.95;a.setM(e);for(let D of[I-L+.12,I+L-.12])a.cyl(D,c,C,.05,.05,H-c+.05,8,fe("#6b7078"));a.box(I-L,O-.03,C-.03,I+L,H+.03,C+.03,fe("#3a3d42")),i.atlas.setM(e),i.atlas.quad([I-L,O,C+.035],[I+L,O,C+.035],[I+L,H,C+.035],[I-L,H,C+.035],un,Ci("ekimei"+r)),i.atlas.quad([I+L,O,C-.035],[I-L,O,C-.035],[I-L,H,C-.035],[I+L,H,C-.035],un,Ci("ekimei"+r)),a.setM(e);let W=y-l*4.2;a.box(W-.9,c+.42,h-1.25,W+.9,c+.47,h-.85,fe("#3b6ea8")),a.box(W-.9,c+.47,h-.88,W+.9,c+.9,h-.83,fe("#3b6ea8"));for(let D of[W-.75,W+.7])a.box(D,c,h-1.2,D+.06,c+.42,h-.9,be.metal);for(let D=t+3;D<n-1;D+=9)La(i,pu(e,D,c,h-.45))}var U2=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(fe),F2=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(fe);function Kp(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,be.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let a=.28+r()*.34,c=.36+r()*.42,u=r.pick(U2),h=s+(r()-.5)*.06;i.quad([o+a,n-c,h],[o,n-c,h],[o,n-.02,h],[o+a,n-.02,h],u),i.quad([o,n-c,h+.01],[o+a,n-c,h+.01],[o+a,n-.02,h+.01],[o,n-.02,h+.01],xn(u,.85)),r()<.4&&i.box(o+a*.45,n-.02,h-.02,o+a*.55,n+.06,h+.02,fe("#d8d8d0")),o+=a+.06+r()*.22}}function B2(i,e,t,n,s,r){let o=r.pick(F2),a=.11;i.box(e,n-.02,s-a,t,n+.09,s+.22,o),i.box(e,n-.72,s-a,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-a-.004,t-.08,n-.42,s-a+.01,xn(o,.86))}function jp(i,e){let t=i.color,n=fe("#a19f97"),s=fe("#6b4a35"),r=fe("#4f4a44"),o=fe("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,fe("#8d8b84"));for(let a of[-.52,.48])for(let c of[-.36,.32])t.box(a,.32,c,a+.05,1.5,c+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,xn(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let a of[-.32,.3])t.cyl(a,.32,-.18,.05,.06,.07,8,fe("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,fe("#5b8d3d"))}function Qp(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?be.black:be.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,be.black),t.box(-.5,2.55,-.06,.5,2.95,.02,be.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,be.black);t.box(-.78,-.9,-.34,.3,0,.34,be.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,fe("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,be.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new it().multiplyMatrices(e,new it().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?be.black:be.yellow)}t.setM(e),i.atlas.setM(e),Kt(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function em(i,e){let t=i.color;t.setM(e),t.box(-.4,0,-.4,.4,.25,.4,be.stone),t.cyl(0,.25,0,.14,.12,.95,8,be.stone),t.box(-.32,1.2,-.32,.32,1.3,.32,be.stone),t.box(-.26,1.3,-.26,.26,1.72,.26,xn(be.stone,1.05)),t.cyl(0,1.72,0,.55,.08,.38,6,xn(be.stone,.92)),i.lamp.setM(e),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,un),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,un)}function Uf(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,be.vermilion),s.cyl(0,0,r,.38,.38,.5,12,be.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,be.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,be.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,be.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,be.vermilion)}function tm(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,fe("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,fe("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,fe("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,fe("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,be.metal),n.box(1.1,0,.3,1.2,.42,.55,be.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,be.metal),i.atlas.setM(e),Ii(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Pi(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function nm(i,e,t,n=1){let s=i.color;s.setM(e);let r=xn(be.concrete,.85+t()*.15),o=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],a=.55*n;for(let c of o)s.rod([0,a,0],[c[0]*.95*n,a+c[1]*.95*n,c[2]*.95*n],.42*n,.26*n,7,r)}function im(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,fe("#8f8a80"),fe("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,be.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,be.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,be.black),t.cyl(0,18.6,0,1,.25,1.2,12,be.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,un)}function sm(i,e,t){let n=i.color;n.setM(e);let s=t.pick([fe("#f4f4f0"),fe("#3b6ea5"),fe("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),ro(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),ro(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,be.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,be.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,fe("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,be.metal)}function rm(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,be.stone),n.box(-.55,.5,.9,.55,1.5,1.8,fe("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],fe("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],fe("#4d5468")),Uf(i,pu(e,0,0,-.3,Math.PI/2),.75,2.2)}var Zt=60,Ff=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],om=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],am=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Bf=32,Ua=[.025,.026,.032],lm=[.05,.05,.065],rs=(i,e)=>(i%e+e)%e,Cs=(i,e)=>{let t=eo(i);return!!t&&Math.abs(i-t.s)<e},Of=(i,e)=>Math.abs(i-Math.round(i/150)*150)<e,Di=(i,e)=>{let t=mi(i);return!!t&&Math.abs(i-t.s)<e},ai=(i,e)=>{let t=Wi(i);return!!t&&Math.abs(i-t.s)<e},zf=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=n(r,o);this.P.push(a[0],a[1],a[2]),this.N.push(a[3],a[4],a[5]),this.SU.push(a[6],a[7]),this.ZW.push(a[8],a[9],a[10],a[11]),this.RK.push(a[12],a[13]),this.RV.push(a[14]||0),this.ZS.push(a[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let a=s+r*t+o,c=a+1,u=a+t,h=u+1;this.I.push(a,c,u,c,h,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,a=new Array(e*o);for(let u=0;u<e;u++)for(let h=0;h<o;h++)a[u*o+h]=n(u,h-s);let c=(u,h)=>a[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,h))];for(let u=0;u<e;u++)for(let h=s;h<s+t;h++){let m=c(u,h-1),v=c(u,h+1),g=c(u-1,h),_=c(u+1,h),b=a[u*o+h],l=v[0]-m[0],f=v[1]-m[1],d=v[2]-m[2],x=_[0]-g[0],p=_[1]-g[1],M=_[2]-g[2],T=f*M-d*p,E=d*x-l*M,y=l*p-f*x;E<0&&(T=-T,E=-E,y=-y);let S=Math.hypot(T,E,y)||1;b[3]=T/S,b[4]=E/S,b[5]=y/S}this.grid(e,t,(u,h)=>a[u*o+h+s])}build(){let e=new yt;return e.setAttribute("position",new Je(this.P,3)),e.setAttribute("normal",new Je(this.N,3)),e.setAttribute("su",new Je(this.SU,2)),e.setAttribute("zw",new Je(this.ZW,4)),e.setAttribute("rk",new Je(this.RK,2)),e.setAttribute("rv",new Je(this.RV,1)),e.setAttribute("zs",new Je(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},mu=class{constructor(e,t,n,s,r){this.path=t,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new Jt,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Zt),s=Math.floor((e+this.ahead)/Zt);for(let[o,a]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(a),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let a=o.pending.shift();a&&o.group.add(a),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let a=-1;for(let c=Math.max(0,n);c<=s;c++)if(!this.chunks.has(c)){a=c;break}if(a<0)return 0;a*Zt-e<320&&(t=Math.max(t,12)),this.job={c:a,it:this.gen(a)}}let o=this.job.it.next();if(o.done){let a=o.value;a.pending=a.group.children.slice(),a.group.clear(),this.chunks.set(this.job.c,a),this.group.add(a.group),this.reveal.push(a),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let a=o*Zt-e,c=r.group.children;for(let u=0;u<c.length;u++){let h=c[u],m=h.userData.detail;m&&(h.visible=m==="leaf"?a<s:a<t||n&&m==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Zt,s=n+Zt,r=t.at(n),o=r.x,a=r.z,c=ln(Math.floor(oi(e,777)*4294967295)),u={atlas:new _n({uv:!0,ao:!0,lit:!0}),color:new _n({ao:!0}),foliage:new _n,leaf:new _n({uv:!0}),lamp:new _n({color:!1}),sig:new _n({color:!1}),sodium:new _n({color:!1}),decal:new _n({uv:!0}),pool:new _n({uv:!0,color:!1})},h=new zf,m=[],v=[];u.lamps=[];let g={},_={},b=(A,R)=>{t.at(A,_);let P=In(A,"rw");return _.y+no(A,R,_.y,P)},l=A=>{let R=Nt(A);return[R.city,R.sakura,R.coast,R.country,R.snow]},f=(A,R,P)=>(t.at(A,g),[g.x+g.rx*R-o,P,g.z+g.rz*R-a]),d=(A,R,P,I=0,C=!0)=>{t.at(A,g);let L=g.h-Math.PI/2+(C&&R<0?Math.PI:0)+I,O=new it().makeRotationY(L);return O.setPosition(g.x+g.rx*R-o,P,g.z+g.rz*R-a),O.groundY=P,O},x=(A,R,P=0,I=0,C=!0)=>{let L=b(A,R),O=d(A,R,L+P,I,C);return O.groundY=L,O},p=A=>t.at(A,_).y,M=A=>In(A,"rw"),T=A=>{let R=Nt(A);return R.city+R.sakura>.5?R.city>=R.sakura?3:2.6:0};{let A=Wi(n+Zt/2),R=!!A&&A.s>n-40&&A.s<s+40,P=R?61:21,I=M(n+Zt/2),C=(()=>{let ee=[0,...om].map(le=>le);return am.forEach(le=>ee.push(le-I)),ee})(),L=[...C.slice().reverse().map(V=>-V),...C],O=L.length,H=Array.from({length:P},(V,ee)=>n+ee/(P-1)*Zt);{let V=mi(n+Zt/2);if(V)for(let ee of[V.s-sn,V.s+sn])ee>n+.1&&ee<s-.1&&H.push(ee-.03,ee+.03)}H.sort((V,ee)=>V-ee);let W=O/2,D=H.map(V=>(t.at(V,g),{s:V,f:{...g},rw:M(V),w:l(V),rb:R?lp(V):0})),z=Math.round(W/2);for(let[V,ee,le,Xe]of[[0,z,0,1],[z-1,W,1,0],[W,W+z+1,0,1],[W+z,O,1,0]])h.gridN(D.length,ee-V,(Ae,Be)=>{let J=D[Ae],Z=J.f,Me=V+Be,Le=L[Me],we=Le<0||Le===0&&Me<W?Le-J.rw:Le+J.rw,Ge=Z.y+no(J.s,we,Z.y,J.rw),Ke=Math.abs(we)>J.rw+.98?Math.min(1,eu/.5):0;return[Z.x+Z.rx*we-o,Ge,Z.z+Z.rz*we-a,0,1,0,rs(J.s,ws),we,J.w[0],J.w[1],J.w[2],J.w[3],J.rw,0,J.rb>0?J.rb:-Ke,J.w[4]]},le,Xe),yield}yield,h.grid(31,2,(R,P)=>{let I=n+R/30*Zt,C=M(I),L=P?C:-C;t.at(I,g);let O=g.y,H=(p(I+1)-p(I-1))/2,W=-H*g.fx,D=1,z=-H*g.fz,V=Math.hypot(W,D,z),ee=l(I);return[g.x+g.rx*L-o,O,g.z+g.rz*L-a,W/V,D/V,z/V,rs(I,ws),L,ee[0],ee[1],ee[2],ee[3],C,1,0,ee[4]]});{let A=[];for(let I=0;I<=30;I++){let C=n+I/30*Zt;A.push({s:C,sw:T(C)})}let R=[],P=null;for(let I of A)I.sw>0?(P||(P=[],R.push(P)),P.push(I)):P=null;for(let I of R)if(!(I.length<2))for(let C of[-1,1])h.grid(I.length,2,(L,O)=>{let{s:H,sw:W}=I[L],D=M(H),z=C*(O===(C>0?0:1)?D:D+W);t.at(H,g);let V=l(H);return[g.x+g.rx*z-o,g.y+.15,g.z+g.rz*z-a,0,1,0,rs(H,ws),z,V[0],V[1],V[2],V[3],D,2,0,V[4]]}),h.grid(I.length,2,(L,O)=>{let{s:H}=I[L],W=M(H),D=C*W,z=C>0?O:1-O;t.at(H,g);let V=l(H);return[g.x+g.rx*D-o,g.y+(z?.15:0),g.z+g.rz*D-a,-C*g.rx,0,-C*g.rz,rs(H,ws),D,V[0],V[1],V[2],V[3],W,3,0,V[4]]})}yield,yield*this.placePoles(e,n,s,c,u,d,b,f,p,M);{let A=Math.ceil((n-Qs)/js),R=Qr(A);R<s&&Ra(R)&&(yield*this.placeCrossing(u,h,R,d,p,M,b,T,o,a));let P=Math.ceil((n-to)/er),I=df(P);I<s&&pf(I)&&(yield*this.placeRiver(u,h,I,d,p,M,b,T,o,a,c,v));let C=mi(n+Zt/2);C&&C.s+tn>n&&C.s-tn<s&&(yield*this.placeTunnel(u,h,C,n,s,d,x,b,M,o,a,c))}yield;for(let A=n;A<s;A+=4){let R=en(A);(R==="coast"&&Nt(A).coast>.45||R==="mountain"&&Nt(A).mountain>.45)&&!Di(A+2,tn+4)&&this.guardrail(u,A,Math.min(A+4,s),f,p,M)}yield*this.placeCity(u,c,n,s,d,x,p,M,T,b,h,o,a),yield*this.placeSakura(u,c,n,s,d,x,p,M,b),this.placeCoast(u,c,n,s,d,x,p,M,b,m,f),yield,yield*this.placeCountry(u,c,n,s,d,x,p,M,b),yield*this.placeMountain(u,c,n,s,d,x,p,M,b),yield*this.placeSnow(u,c,n,s,d,x,p,M,b),yield*this.placeVerge(u,c,n,s,d,b,M),yield;let E=new Jt,y=(A,R,P,I,C=0,L)=>{if(!A)return null;let O=new gt(A,R);return O.castShadow=P,O.receiveShadow=I,O.renderOrder=C,L&&(O.userData.detail=L),E.add(O),O},S=new Set;for(let A of[n,n+20,n+40,s]){let R=jr(A);S.add(R.a),R.t>0&&S.add(R.b)}y(h.build(),Ia([...S]),!1,!0),yield,y(u.atlas.build(),this.M.atlas,!0,!0),yield;{let A=y(u.color.build(),this.M.color,!0,!0);A&&(A.customDepthMaterial=ou)}if(yield,y(u.foliage.build(),this.M.foliage,!0,!0),y(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),yield,y(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),y(u.sig.build(),this.M.sig,!1,!1,0,"small"),y(u.sodium.build(),this.M.sodium,!1,!1),y(u.decal.build(),this.M.decal,!1,!0,1,"small"),y(u.pool.build(),this.M.pool,!1,!1,2,"light"),m.length){let A=new yt,R=[],P=[],I=[];m.forEach((C,L)=>{for(let O of C)R.push(O[0],O[1],O[2]),P.push(O[3],O[4]);if(L>0){let O=(L-1)*2;I.push(O,O+2,O+1,O+1,O+2,O+3)}}),A.setAttribute("position",new Je(R,3)),A.setAttribute("su",new Je(P,2)),A.setIndex(I),A.computeBoundingSphere(),y(A,this.foamMat,!1,!1,1)}for(let A of v)y(A,this.riverMat,!1,!0);return E.position.set(o-this.origin.x,0,a-this.origin.z),{group:E,ox:o,oz:a,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*Bf+6,n=en(t);if(n==="sakura"||Cs(t,6)||ai(t,34)||Di(t,tn+12))return null;let s=In(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,a,c,u,h){let m=Math.ceil((t-6)/Bf),v=Math.floor((n-6-.001)/Bf);for(let g=m;g<=v;g++){let _=this.poleSpec(g);if(!_)continue;let b=_.z==="city"?u(_.s)+.15:a(_.s,_.u),l=o(_.s,_.u,b),f=ln(Math.floor(oi(g,31)*4294967295)),d=wf(r,l,f,{trans:f()<.45});_.z==="city"&&g%2===0&&Up(r,l,-.11),g%2&&(yield);let x=this.poleSpec(g+1);if(x){let p=x.z==="city"?u(x.s)+.15:a(x.s,x.u),M=Np(o(x.s,x.u,p));r.color.setM(new it);let T=[];for(let E=0;E<d.length;E++){let y=d[E],S=M[E],A=.35+f()*.4+(E>=7?.3:0);T.push(A),r.color.wire([y.x,y.y,y.z],[S.x,S.y,S.z],A,E>=7?.022:.015,Ua,10)}if(_.z!=="coast"&&f()<.38){let E=Math.floor(f()*4),y=d[E],S=M[E],A=1+Math.floor(f()*4),R=.18+f()*.5;for(let P=0;P<A;P++){let I=Math.min(.92,R+P*(.018+f()*.025)),C=y.x+(S.x-y.x)*I,L=y.z+(S.z-y.z)*I,O=y.y+(S.y-y.y)*I-T[E]*4*I*(1-I);r.color.box(C-.07,O+.015,L-.07,C+.07,O+.19,L+.07,lm),r.color.box(C-.045,O+.19,L-.045,C+.045,O+.27,L+.045,lm)}}}if(_.z==="city"){r.color.setM(new it);let p=1+Math.floor(f()*3);for(let M=0;M<p;M++){let T=d[7+M%2],E=(f()-.5)*14,y=h(_.s+E),S=f()<.55,A=S?-(y+3.15):y+3.15,R=c(_.s+E,A,u(_.s+E)+5.2+f()*2.5);r.color.wire([T.x,T.y,T.z],R,.25+f()*.4,.012,Ua,8)}}}}*intersection(e,t,n,s,r,o,a,c,u,h,m){let v=this.path.at(n,{}),g=o(n),_=a(n),b=c(n)||3,l=n-.5,f=Nt(n),d=[f.city,f.sakura,f.coast,f.country],x=(M,T,E)=>[v.x+v.fx*(M-.5)+v.rx*T-h,E,v.z+v.fz*(M-.5)+v.rz*T-m],p=_+b+.15;for(let M of[-1,1]){let T=M*(_+b),E=M*80;u.grid(21,2,(R,P)=>{let I=T+(E-T)*R/20,C=(P?-3:3)*M,L=x(C,I,g+.165);return[L[0],L[1],L[2],0,1,0,C*M,I,d[0],d[1],d[2],d[3],_,10]});{let R=M*(_+b+3.2),P=-M*1.35,I=1.15,C=.42,L=(O,H)=>x(P+M*O,R-M*H,g+.18);e.decal.setM(new it),e.decal.quad(L(-I,-C),L(I,-C),L(I,C),L(-I,C),[1,1,1],oo("tomare"))}for(let R of[-1,1]){let P=p+15+t()*3;for(;P<52;){let I=t.range(5.5,8.5),C=M*(P+I/2),L=t(),O=r(l+R*3.3,C,g+.14,R>0?Math.PI/2:-Math.PI/2,!1);ss(e,O,t,{type:L<.5?"house":"shop",w:I,d:t.range(7,10),floors:L<.5?2:t.int(2,3),tint:t.pick(is),litP:.45,fence:0}),P+=I+t.range(.2,1.2),yield}yield}let y=[30,54].map(R=>r(l+2.8,M*R,g+.15,-Math.PI/2,!1)),S=ln(Math.floor(oi(s,M>0?71:73)*4294967295)),A=y.map(R=>wf(e,R,S,{trans:S()<.4}));e.color.setM(new it);for(let R=0;R<7;R++){let P=A[0][R],I=A[1][R];e.color.wire([P.x,P.y,P.z],[I.x,I.y,I.z],.3+S()*.4,.014,Ua,10)}}Nf(e,r(n-9,-(_+.55),g+.15,0,!0),1,_+.55-1.6),Nf(e,r(n+8,_+.55,g+.15,0,!0),1,_+.55-1.6),s%3===1&&$p(e,r(n+15,0,g,0,!1),_+b+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(e,t,n,s,r,o,a,c,u,h){let m=this.path.at(n,{}),v=m.y,g=o(n),_=c(n),b=g+_+.2,l=150,f=v+.18,d=Nt(n),x=[d.city,d.sakura,d.coast,d.country],p=(L,O,H)=>[m.x+m.fx*L+m.rx*O-u,H,m.z+m.fz*L+m.rz*O-h],M=[7.6,4.7,-4.7,-7.6];for(let[L,O]of[[-l,-b],[b,l]])t.grid(25,M.length,(W,D)=>{let z=L+(O-L)*W/24,V=M[D],le=Math.abs(V)<5?f:Math.min(f-.05,a(n+V,z)-.03),Xe=p(V,z,le);return[Xe[0],Xe[1],Xe[2],0,1,0,V,z,x[0],x[1],x[2],x[3],g,5]});let T=(L,O,H)=>t.grid(2,2,(W,D)=>{let z=W?O:L,V=D?-3.3:3.3,ee=p(V,z,H);return[ee[0],ee[1],ee[2],0,1,0,V,z,x[0],x[1],x[2],x[3],g,6]});T(-g,g,v+.03),_>0&&(T(-b,-g,v+.165),T(g,b,v+.165));let E=(L,O,H,W)=>t.grid(2,2,(D,z)=>{let V=D?W:H,ee=z?O:L,le=p(ee,V,v+.025);return[le[0],le[1],le[2],0,1,0,ee,V,x[0],x[1],x[2],x[3],g,7]});E(-7.15,-7.6,-g+.3,-.12),E(7.6,7.15,.12,g-.3),yield;let y=s(n,0,v,-Math.PI/2,!1),S=e.color;S.setM(y);let A=[.42,.4,.38],R=[.3,.29,.28],P=[.55,.57,.6];for(let L of[-2,2])for(let O of[-.5335,.5335]){let H=-(L+O);for(let[W,D]of[[-l,-b],[b,l]])S.box(W,.26,H-.035,D,.34,H+.035,A);S.box(-b,0,H-.035,b,.04,H+.035,R)}let I=[-146,-104,-64,-26,26,64,104,146];for(let L of I){for(let O of[-4.95,4.95])S.box(L-.12,.18,O-.12,L+.12,7.4,O+.12,P);S.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,P);for(let O of[-2,2])S.box(L-.04,6.3,-O-.04,L+.04,6.95,-O+.04,P)}for(let L of[-2,2])for(let O=0;O<I.length-1;O++)S.wire([I[O],5.35,-L],[I[O+1],5.35,-L],.05,.011,Ua,6),S.wire([I[O],6.4,-L],[I[O+1],6.4,-L],.45,.011,Ua,8);yield;let C=Math.round((n-Qs)/js);if(d.country>.9&&oi(C,17)<.7){let L=oi(C,19)<.5?-1:1,O=L>0?g+9:-(g+9+46),H=L>0?g+9+46:-(g+9);Jp(e,y,O,H,L*(g+9),Math.abs(C)%4,ln(Math.floor(oi(C,23)*4294967295))),S.setM(y)}yield;for(let L of au(this.path,n)){let O=new it().makeRotationY(L.yaw);O.setPosition(L.x-u,L.y,L.z-h),Qp(e,O)}Rs(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85),Rs(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,a,c,u,h,m,v){let g=this.path.at(n,{}),_=g.y,b=o(n),l=c(n),f=Nt(n),d=[f.city,f.sakura,f.coast,f.country],x=f.sakura>.5,p=222,M=b+l+.5,T=_-Ca,E=(C,L,O)=>[g.x+g.fx*C+g.rx*L-u,O,g.z+g.fz*C+g.rz*L-h];{let C=[],L=[],O=[];for(let D=0;D<=74;D++){let z=-p+2*p*D/74;for(let V of[14.3,-14.3]){let ee=E(V,z,T);C.push(ee[0],ee[1],ee[2]),L.push(V,z)}if(D>0){let V=(D-1)*2;O.push(V,V+1,V+2,V+1,V+3,V+2)}}let W=new yt;W.setAttribute("position",new Je(C,3)),W.setAttribute("su",new Je(L,2)),W.setIndex(O),W.computeBoundingSphere(),v.push(W)}for(let[C,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[O,H]of[[-p,-(b+3.4)],[b+3.4,p]])t.grid(41,2,(W,D)=>{let z=O+(H-O)*W/40,V=D?L:C,ee=E(V,z,_+.38);return[ee[0],ee[1],ee[2],0,1,0,V,z,d[0],d[1],d[2],d[3],b,9,1]});yield;let y=s(n,0,_,0,!1),S=e.color,A=[.74,.73,.7],R=x?[.78,.2,.15]:[.55,.72,.64];S.setM(y),S.box(-24.5,-1,-M,24.5,-.03,M,A,null,{noBottom:!1});for(let C of[-1,1])S.box(-24.5,-1.3,C>0?M-.35:-M,24.5,-.95,C>0?M:-M+.35,[.62,.61,.58]);for(let C of[-8,8])S.box(C-.7,-Ca-1.4,-M+.6,C+.7,-1,M-.6,A);for(let C of[-25.7,25.7])S.box(C-1.2,-Ca+.4,-M-.4,C+1.2,-.05,M+.4,A);for(let C of[-24.5,24.5])S.box(C-.16,.004,-b,C+.16,.016,b,[.33,.32,.31]),S.box(C-.02,.016,-b,C+.02,.02,b,[.2,.19,.19]);let P=l>0?.15:0;for(let C of[-1,1]){let L=C*(M-.14);for(let O=-24;O<=24.01;O+=2)S.box(O-.06,P,L-.06,O+.06,P+1,L+.06,R);S.box(-24,P+.95,L-.08,24,P+1.08,L+.08,R),S.box(-24,P+.48,L-.03,24,P+.54,L+.03,R),S.box(-24,P+.06,L-.03,24,P+.12,L+.03,R)}let I="bridge"+Math.abs(Math.round(n/er))%4;for(let C of[-25,25])for(let L of[-1,1]){let O=L*(M-.1),H=[.7,.69,.65];S.box(C-.32,P,O-.32,C+.32,P+1.45,O+.32,H),S.box(C-.38,P+1.45,O-.38,C+.38,P+1.58,O+.38,[.62,.61,.57]),e.atlas.setM(y);let W=(C<0?-1:1)*.325,D=I;C<0?e.atlas.quad([C-.325,P+.3,O-.22],[C-.325,P+.3,O+.22],[C-.325,P+1.3,O+.22],[C-.325,P+1.3,O-.22],[1,1,1],oo(D)):e.atlas.quad([C+.325,P+.3,O+.22],[C+.325,P+.3,O-.22],[C+.325,P+1.3,O-.22],[C+.325,P+1.3,O+.22],[1,1,1],oo(D)),S.setM(y)}La(e,s(n-14,-(M-.45),_+P,0,!0)),La(e,s(n+14,M-.45,_+P,0,!0)),yield;{e.atlas.setM(new it);let C=oo("gogan"),L=2.4,O=150;for(let H of[-1,1])for(let W=-O;W<O-.01;W+=L){let D=W+L,z=E(H*13.9,W,T-.12),V=E(H*13.9,D,T-.12),ee=E(H*16.05,D,T+.72),le=E(H*16.05,W,T+.72),Xe=(V[1]-z[1])*(le[2]-z[2])-(V[2]-z[2])*(le[1]-z[1]),Ae=(V[0]-z[0])*(le[1]-z[1])-(V[1]-z[1])*(le[0]-z[0]),Be=E(0,(W+D)/2,T),J=Xe*(Be[0]-z[0])+Ae*(Be[2]-z[2])>0,Z={u0:C.u0,u1:C.u1,v0:C.v0,v1:C.v1};J?e.atlas.quad(z,V,ee,le,[1,1,1],Z):e.atlas.quad(V,z,le,ee,[1,1,1],{u0:C.u1,u1:C.u0,v0:C.v0,v1:C.v1})}for(let H of[-1,1])for(let W of[-1,1])for(let D=14+m()*3;D<125;D+=m.range(2.4,5)){if(m()<.35)continue;let z=H*(16.2+m()*1.1),V=W*D,ee=1+(m()<.4?1:0);for(let le=0;le<ee;le++){let Xe=E(z+H*m()*.6,V+(m()-.5)*.9,T+.7),Ae=new it().makeRotationY(m()*6.28);Ae.setPosition(Xe[0],Xe[1],Xe[2]),Df(e,Ae,m,"grass",m.range(1.9,2.8))}}}yield;for(let C of[-18,18])for(let L of[-1,1]){yield;for(let O=11+m()*4;O<(x?125:170);O+=x?m.range(8.5,11):m.range(18,34)){let H=n+C+(m()-.5)*1.5,W=L*O;On(e,s(H,W,a(H,W),m()*6,!1),x?"sakura":"broad",m,x?m.range(1,1.25):m.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,a,c,u,h,m,v){let g=this.path.at(n.s,{}),_=g.y,b=u(n.s),l=b+1.4,f=Nt(n.s),d=[f.city,f.sakura,f.coast,f.country],x=o(n.s,0,_,0,!1),p=e.color,M=Math.max(s,n.s-sn)-n.s,T=Math.min(r,n.s+sn)-n.s;if(T>M+.01){let D=Math.max(2,Math.ceil((T-M)/3)+1),z=[-(b+1.5),-b,-b*.5,0,b*.5,b,b+1.5];t.gridN(D,z.length,(Z,Me)=>{let Le=M+(T-M)*Z/(D-1),we=n.s+Le,Ge=z[Me],Ke=_+nu(Le,Ge);return[g.x+g.fx*Le+g.rx*Ge-h,Ke,g.z+g.fz*Le+g.rz*Ge-m,0,1,0,rs(we,ws),Ge,d[0],d[1],d[2],d[3],b,0,-1]});let V=[[-b,0],[-b,.2],[-l,.2],[-l,3.2]];for(let Z=1;Z<12;Z++){let Me=Math.PI*(1-Z/12);V.push([l*Math.cos(Me),3.2+3*Math.sin(Me)])}V.push([l,3.2],[l,.2],[b,.2],[b,0]);let ee=[.86,.82,.72],le=[.44,.45,.47],Xe=[.62,.61,.58],Ae=[];for(let Z=M;Z<T-.01;Z+=6)Ae.push(Z);Ae.push(T),p.setM(x);for(let Z=0;Z<Ae.length-1;Z++)for(let Me=0;Me<V.length-1;Me++){let[Le,we]=V[Me],[Ge,Ke]=V[Me+1],Oe=Math.max(we,Ke)<=.21?Xe:Math.abs(Le)>l-.01&&Math.abs(Ge)>l-.01?ee:le;p.quad([Ae[Z],we,Le],[Ae[Z+1],we,Le],[Ae[Z+1],Ke,Ge],[Ae[Z],Ke,Ge],Oe)}e.sodium.setM(x),e.sig.setM(x);let Be=l*Math.cos(Math.PI/6)-.12,J=3.2+3*Math.sin(Math.PI/6)-.08;for(let Z=Math.ceil((M+sn-3)/6)*6+3-sn;Z<T;Z+=6)for(let Me of[-1,1])e.sodium.box(Z-.45,J-.07,Me*Be-.13,Z+.45,J+.07,Me*Be+.13,null),As(e,x,Z,J-.1,Me*Be,1);for(let Z=Math.ceil((M+sn)/24)*24-sn;Z<T;Z+=24)e.sig.box(Z-.3,.95,-l+.01,Z+.3,1.2,-l+.06,null);for(let Z=Math.ceil((M+sn-30)/60)*60+30-sn;Z<T;Z+=60)for(let Me of[-1.15,1.15])p.box(Z-1.1,5.2,Me-.36,Z+1.1,5.78,Me+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),p.box(Z-.08,5.78,Me-.05,Z+.08,6.15,Me+.05,[.4,.4,.42]);yield}let E=(D,z)=>{let V=Math.sin(D*12.9898+z*78.233+n.k*37.719)*43758.5453;return V-Math.floor(V)},y=(D,z,V)=>[D[0]+(z[0]-D[0])*V,D[1]+(z[1]-D[1])*V,D[2]+(z[2]-D[2])*V],S=[.5,.5,.47],A=[.55,.53,.47],R=[.6,.6,.57],P=[.58,.58,.55],I=[.42,.42,.4],C=(D,z)=>{let V=E(D,z);return L?y([.26,.29,.08],[.42,.3,.09],V):y([.22,.29,.08],[.36,.36,.12],V)},L=f.mountain>.5,O=l+2.6,H=2.6;for(let D of[-1,1]){let z=n.s+D*sn,V=D*(sn+.08);if(z<s||z>=r)continue;let ee=[];for(let j of om)j>=1.44&&ee.push(b+j,-(b+j));for(let j of am)j>b+3.5&&j<b+21&&ee.push(j,-j);for(let j=0;j<=24;j++)ee.push(-l+2*l*j/24);ee.push(-l-.01,l+.01,-O,O),ee.sort((j,U)=>j-U);let le=j=>3.2+3*Math.sqrt(Math.max(0,1-(j/l)**2)),Xe=j=>Math.max(c(z-D*.03,j)-_,nu(D*(sn-.03),j)),Ae=j=>Math.abs(j)<=l+1e-6?le(j):c(z+D*.03,j)-_,Be=8.4;for(let j of ee)Math.abs(j)<=O&&(Be=Math.min(Be,Xe(j)-.4));let J=Be>6.6;p.setM(x);let Z=D,Me=(j,U,w,G,Y,B,ce,ye)=>{let oe=[V,w,j],he=[V,G,U],me=[V,B,U],Ce=[V,Y,j],xe=D<0?[oe,he,me,Ce]:[he,oe,Ce,me],_e=D<0?[ce,ce,ye,ye]:[ce,ce,ye,ye];for(let Ue of[0,1,2,0,2,3])p.vtx(xe[Ue][0],xe[Ue][1],xe[Ue][2],Z,0,0,0,0,_e[Ue])},Le=(j,U,w)=>j+(U-j)*w;for(let j=0;j<ee.length-1;j++){let U=ee[j],w=ee[j+1];if(w-U<1e-4)continue;let G=Xe(U),Y=Xe(w),B=Ae(U),ce=Ae(w);if(G-B<.01&&Y-ce<.01)continue;let ye=(U+w)/2,oe=J&&Math.abs(ye)<O,he=B,me=ce;if(oe){let Ue=y(S,[.46,.46,.44],E(Math.floor(ye/2.4),3.1)),je=.8+2.6*E(Math.floor(ye/.8),7.7),et=y(Ue,[.27,.27,.26],.35+.3*E(Math.floor(ye/.8),9.9)),X=Math.min(Be,G),Pe=Math.min(Be,Y),de=Math.max(B,X-je),De=Math.max(ce,Pe-je);if(Math.abs(ye)>l){let ke=Math.min(de,B+.9),Se=Math.min(De,ce+.9);Me(U,w,B,ce,ke,Se,y(Ue,[.25,.29,.18],.45),Ue),Me(U,w,ke,Se,de,De,Ue,Ue)}else Me(U,w,B,ce,de,De,Ue,Ue);if(Me(U,w,de,De,X,Pe,Ue,et),he=X,me=Pe,G-X<.01&&Y-Pe<.01)continue}let Ce=Math.floor(ye/H),xe=he,_e=me;for(let Ue=Math.floor(Math.min(xe,_e)/H)+1;xe<G-.01||_e<Y-.01;Ue++){let je=Ue*H,et=Math.min(G,Math.max(xe,je)),X=Math.min(Y,Math.max(_e,je)),Pe=C(Ce,Ue);if(Me(U,w,xe,_e,et,X,y(Pe,[.2,.22,.1],.25),Pe),xe=et,_e=X,Ue>60)break}}let we=Math.min(V,V+D*.12),Ge=Math.max(V,V+D*.12),Ke=j=>{for(let U=0;U<ee.length-1;U++)if(j>=ee[U]&&j<=ee[U+1]&&ee[U+1]>ee[U]){let w=(j-ee[U])/(ee[U+1]-ee[U]);return[Le(Ae(ee[U]),Ae(ee[U+1]),w),Le(Xe(ee[U]),Xe(ee[U+1]),w)]}return null},Oe=ee[0],mt=ee[ee.length-1];for(let j=Math.ceil(Oe/H)*H;j<mt;j+=H){let U=Ke(j);if(!U)continue;let w=(J&&Math.abs(j)<O?Math.max(Be+.3,U[0]):U[0])+.05,G=U[1]-.05;G-w>.4&&!(Math.abs(j)<=l+.3&&!J)&&p.box(we,w,j-.14,Ge,G,j+.14,A)}for(let j=1;j<60;j++){let U=j*H,w=null,G=()=>{w&&w[1]-w[0]>.3&&p.box(we,U-.14,w[0],Ge,U+.14,w[1],A),w=null},Y=!1;for(let B=0;B<ee.length-1;B++){let ce=ee[B],ye=ee[B+1];if(ye-ce<1e-4)continue;let oe=(ce+ye)/2,he=Math.max(Ae(ce),Ae(ye),J&&Math.abs(oe)<O?Be+.3:-1e9),me=Math.min(Xe(ce),Xe(ye));U>he+.2&&U<me-.2?(Y=!0,w?w[1]=ye:w=[ce,ye]):G()}if(G(),!Y&&U>30)break}J&&p.box(Math.min(V,V+D*.32),Be-.05,-O,Math.max(V,V+D*.32),Be+.3,O,R);let Q=V+D*.32,ge=j=>-l+2*l*j/24,Ee=j=>[ge(j),le(ge(j))],K=j=>[ge(j)*1.12,le(ge(j))+.6];for(let j=0;j<24;j++){let[U,w]=Ee(j),[G,Y]=Ee(j+1),[B,ce]=K(j),[ye,oe]=K(j+1);D<0?p.quad([Q,w,U],[Q,Y,G],[Q,oe,ye],[Q,ce,B],P):p.quad([Q,Y,G],[Q,w,U],[Q,ce,B],[Q,oe,ye],P),D<0?p.quad([V,w,U],[V,Y,G],[Q,Y,G],[Q,w,U],I):p.quad([V,Y,G],[V,w,U],[Q,w,U],[Q,Y,G],I),D<0?p.quad([V,oe,ye],[V,ce,B],[Q,ce,B],[Q,oe,ye],P):p.quad([V,ce,B],[V,oe,ye],[Q,oe,ye],[Q,ce,B],P)}for(let j of[-1,1])p.box(Math.min(V,Q),.2,j>0?l:-l*1.12,Math.max(V,Q),3.2,j>0?l*1.12:-l,P);e.atlas.setM(x);let te=1.9,re=7.05,se=7.85,F=V+D*.03,ve=oo("tunnel"+(f.coast>.5?1:Math.abs(n.k)%2?2:0));D<0?e.atlas.quad([F,re,-te],[F,re,te],[F,se,te],[F,se,-te],[1,1,1],ve):e.atlas.quad([F,re,te],[F,re,-te],[F,se,-te],[F,se,te],[1,1,1],ve)}yield;let W=f.mountain>.5;for(let D=Math.max(s,n.s-tn*.95)+v()*3;D<Math.min(r,n.s+tn*.95);D+=v.range(4,8)){let z=Math.abs(D-n.s)>sn-4?17:4;for(let V of[-1,1]){let ee=V*(b+v.range(z,50)),le=v();On(e,a(D,ee,-.3,v()*6,!1),W?le<.5?"maple":le<.8?"cedar":"ginkgo":le<.65?"pine":"broad",v,v.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,a,c,u){let h=m=>Nt(m).snow;if(!(h(n)<.3&&h(s)<.3)){for(let m of[-1,1]){for(let v=n+t()*20;v<s;v+=t.range(22,40)){if(h(v)<.6||t()<.5)continue;let g=m*t.range(18,90);ss(e,o(v,g,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(is),litP:.62,fence:0,snow:!0});for(let _=0;_<2+t()*3;_++)On(e,o(v+t.range(-9,9),g+m*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let v=n+t()*5;v<s;v+=t.range(3,7))h(v)<.5||(t()<.32&&On(e,o(v,m*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&On(e,o(v,m*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let m=Math.ceil(n/36)*36;m<s;m+=36){if(h(m)<.55)continue;let v=c(m);{let g=r(m,-(v+.95),a(m)+1.3),_=r(m+18,v+.95,a(m+18)+1.3);g.groundY=a(m),_.groundY=a(m+18),Pf(e,g,1),Pf(e,_,-1)}}}}*placeMountain(e,t,n,s,r,o,a,c,u){let h=m=>Nt(m).mountain;if(!(h(n)<.3&&h(s)<.3)){for(let m of[-1,1]){for(let v=n+t()*4;v<s;v+=t.range(4.5,8.5)){if(h(v)<.45||Di(v,tn+6))continue;let g=c(v),_=t();if(m>0){let b=_<.5?"maple":_<.72?"ginkgo":"cedar";On(e,o(v,g+t.range(17,70),-.25,t()*6,!1),b,t,t.range(.9,1.3))}else{let b=_<.55?"maple":_<.8?"cedar":"ginkgo";On(e,o(v,-(g+t.range(3.5,34)),-.25,t()*6,!1),b,t,t.range(.95,1.35))}}yield}for(let m=n+t()*4;m<s;m+=t.range(3,6)){if(h(m)<.5)continue;let v=t()<.7,g=-(c(m)+(v?t.range(108,205):t.range(36,100)));On(e,o(m,g,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new it);for(let m=Math.ceil(n/10)*10;m<s;m+=10){if(h(m)<.5||Di(m,tn+4))continue;let v=c(m),g=r(m,-(v+.95),a(m));Op(e,g)}for(let m=Math.ceil(n/14)*14;m<s;m+=14){if(h(m)<.6)continue;let v=this.path.curv(m);if(Math.abs(v)<1/230)continue;let g=c(m);v>0?Rs(e,r(m,g+.42,a(m)),"chev_l",-1,1.25,.58):Rs(e,r(m,-(g+1.15),a(m)),"chev_r",1,1.35,.58)}}}*placeVerge(e,t,n,s,r,o,a){for(let c of[-1,1]){for(let u=n+t()*1.2;u<s;u+=t.range(.55,1.5)){if(Cs(u,10)||ai(u,31)||Di(u,tn+4))continue;let h=en(u),m=a(u),v,g,_=.22,b=1;if(h==="country")v=m+(t()<.6?t.range(.2,.62):t.range(2.18,2.75)),g=.95;else if(h==="sakura")v=m+2.68+t()*1.3,g=.55,_=.3;else if(h==="coast"){if(c<0)continue;v=m+.95+t()*1.7,g=.75,_=.18}else{if(h==="snow")continue;if(h==="mountain")v=c<0?m+1+t()*.35:m+.25+t()*.2,g=c<0?.55:.18,_=.12,b=.85;else{if(Of(u,5))continue;v=m+3.02+t()*.1,g=.1,_=.08,b=.65}}if(t()>g)continue;let l=c*v;Df(e,r(u,l,o(u,l),t()*6.28,!1),t,t()<_?"flowers":"grass",b*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new it);let a=Math.max(1,Math.round((n-t)/2)),c=be.rail,u=[.62,.64,.66],h=[.74,.76,.79],m=[.95,.55,.16];for(let v=0;v<a;v++){let g=t+(n-t)*v/a,_=t+(n-t)*(v+1)/a,b=-(o(g)+.95),l=-(o(_)+.95),f=r(g),d=r(_);for(let p=0;p<Ff.length-1;p++){let[M,T]=Ff[p],[E,y]=Ff[p+1];e.color.quad(s(g,b+T,f+M),s(_,l+T,d+M),s(_,l+y,d+E),s(g,b+y,f+E),c)}e.color.quad(s(_,l+.05,d+.5),s(g,b+.05,f+.5),s(g,b+.05,f+.84),s(_,l+.05,d+.84),u),e.color.noShadow=!0;let x=s(g,b-.04,f);if(e.color.cyl(x[0],f,x[2],.055,.055,.8,6,h,!1),Math.round(g/2)%2===0){let p=s(g,b+.035,f+.64),M=s(g+.09,b+.035,f+.64);e.color.quad(M,p,[p[0],p[1]+.07,p[2]],[M[0],M[1]+.07,M[2]],m)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,a,c,u,h,m,v,g){for(let l of[-1,1]){let f=n+t()*2;for(;f<s-2;){{let C=Nt(f);if(C.city<.62||C.mountain>.1){f+=4;continue}}{let C=eo(f+6);if(C&&f<C.s+8.5&&f+14>C.s-8.5){f=Math.max(f+1,C.s+8.5);continue}}let d=rs(f,150);if(d>145.6||d<3.4){f+=1;continue}let x=c(f),p=u(f)||3,M=x+p+.15,T=t(),E=T<.7?"machiya":T<.75?"shop":T<.81?"apt":T<.83?"office":T<.88?"house":T<.92?"konbini":T<.96?"parking":"gap",y=E==="shop"?t.range(5,9):E==="machiya"?t.range(6,9.5):E==="apt"?t.range(10,16):E==="office"?t.range(10,14):E==="house"?t.range(7,9.5):E==="konbini"?t.range(12,14):E==="parking"?t.range(7,11):t.range(2,3.5);if(f+y>s){if(s-f<5||E==="konbini")break;y=s-f-.2}{let C=Math.ceil((f+4.4)/150)*150-4.4;if(f+y>C-.1){if(C-.1-f<4){f=C+7.9;continue}y=C-.1-f}}let S=f+y/2,A=a(S),R=t.pick(is),P=.42,I=E==="machiya"&&t()<.42;if(E==="parking"){let C=r(S,l*(M+3),A+.15);t()<.8&&Zp(e,pu(C,0,0,.5,(t()-.5)*.1),t),e.color.setM(C),e.color.box(-y/2,0,5.5,y/2,1.6,5.7,be.concrete)}else if(E!=="gap"){let C=r(S,l*M,A+.15),L={type:E,w:y,d:E==="apt"||E==="office"?t.range(10,14):t.range(8,12),floors:E==="shop"?t.int(2,4):E==="machiya"?t()<.7?2:3:E==="apt"?t.int(4,9):E==="office"?t.int(4,8):2,tint:I?Sf[Math.floor(t()*Sf.length)]:R,litP:P,plaster:I,fence:E==="house"&&t()<.5?1.2:0};if(ss(e,C,t,L),E!=="house"&&t()<.28&&Rf(e,r(S+(t()-.5)*(y-1.2),l*(M-.42),A+.15),t),(E==="shop"||E==="konbini"||E==="machiya")&&t()<.3)for(let O=0;O<1+t()*3;O++)Fp(e,r(S-y/2+.8+O*.55,l*(M-.75),A+.15,Math.PI/2+.1),t);if(E==="house"&&t()<.6)for(let O=0;O<2+t()*3;O++)Cf(e,r(S+1+O*.5,l*(M-.3),A+.15),t);if(t()<.03)for(let O=0;O<3;O++)Bp(e,r(S+O*.9,l*(x+.35),A))}f+=y+t.range(.05,.5),yield}for(let d=n+t()*10;d<s-8;d+=t.range(14,26)){if(Nt(d).city<.7||Nt(d).mountain>.1||t()<.3||Cs(d,18)||Of(d,15))continue;let x=c(d),p=r(d,l*(x+3.2+t.range(14,20)),a(d)+.1);ss(e,p,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(is),litP:.4})}if(Nt(n+30).city>.7&&Nt(n+30).mountain<.1&&t()<.65){let d=n+t()*Zt;if(Cs(d,24)||Of(d,20))continue;let x=r(d,l*t.range(55,150),a(d));ss(e,x,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(is),litP:.45})}}let _=Math.ceil(n/150),b=Math.floor((s-.01)/150);for(let l=_;l<=b;l++){let f=l*150;if(en(f)!=="city"||Nt(f).mountain>.1)continue;let d=c(f);yield*this.intersection(e,t,f,l,r,a,c,u,m,v,g),Rs(e,r(f-1,-(d+.4),a(f)+.15),"sign_blue",1),Rs(e,r(f-6,-(d+.4),a(f)+.15),"sign_stop",1,2.1,.75),If(e,r(f+7,d+.4,a(f)+.15),-1),l%3===0&&Rs(e,r(f+20,-(d+.4),a(f)+.15),"sign_speed",1)}}*placeSakura(e,t,n,s,r,o,a,c,u){for(let v of[-1,1]){for(let g=n+t()*4;g<s;g+=t.range(7.5,10)){if(Nt(g).sakura<.45||ai(g,30))continue;let _=c(g);On(e,o(g,v*(_+3.7),0,t()*6),"sakura",t,t.range(1.05,1.3)),t()<.45&&On(e,o(g+3,v*(_+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let g=n+(v>0?0:12);g<s;g+=24){if(en(g)!=="sakura"||ai(g,30))continue;let _=c(g);La(e,r(g,v*(_+2.25),a(g)+.15)),rs(g,48)<24&&em(e,r(g+6,v*(_+3),u(g+6,v*(_+3))))}for(let g=n+t()*15;g<s;g+=t.range(14,24)){if(en(g)!=="sakura"||t()<.35||ai(g,45))continue;let _=c(g);ss(e,o(g,v*(_+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(is),litP:.45,fence:t()<.6?1.4:0})}}let m=Math.floor((n+Zt/2)/480)*480+240;m>=n&&m<s&&en(m)==="sakura"&&!ai(m,60)&&Uf(e,r(m,0,a(m),0,!1),c(m)+1.6,6.4)}placeCoast(e,t,n,s,r,o,a,c,u,h,m){for(let _=0;_<=20;_++){let b=n+_/20*Zt;if(Nt(b).coast<.85||Di(b,tn*1.25)){h.length&&h[h.length-1]!==null&&h.push(null);continue}let f=c(b),d=f+11,x=f+19,p=m(b,-d,Es+.06),M=m(b,-x,Es+.06);h.push([[p[0],p[1],p[2],rs(b,ws),0],[M[0],M[1],M[2],rs(b,ws),1]])}let v=h.indexOf(null);v>=0&&(h.length=v),h.length<2&&(h.length=0);for(let _=n+t()*6;_<s;_+=t.range(5,9)){if(en(_)!=="coast"||Di(_,tn+6))continue;let b=c(_);t()<.7&&On(e,o(_,b+t.range(3.5,26),0,t()*6,!1),"pine",t,t.range(.9,1.3)),t()<.2&&On(e,o(_+2,-(b+t.range(3.5,7)),0,t()*6,!1),"pine",t,t.range(.8,1.1))}for(let _=n+4;_<s;_+=t.range(18,30)){if(en(_)!=="coast"||t()<.4||Di(_,tn*1.4))continue;let b=c(_),l=3+Math.floor(t()*5);for(let f=0;f<l;f++){let d=-(b+t.range(12,17)),x=_+t.range(-3,3);nm(e,r(x,d,Math.max(u(x,d),Es-.4)+t.range(-.2,.4),t()*6),t,t.range(.9,1.2))}}for(let _=n+12;_<s;_+=48){if(en(_)!=="coast"||Di(_,tn+4))continue;let b=c(_);Af(e,o(_,b+1),t)}if(en(n+30)==="coast"&&t()<.5){let _=n+t()*Zt,b=c(_);Di(_,tn+25)||ss(e,o(_,b+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick(is),litP:.5,fence:0})}if(en(n+30)==="coast"&&t()<.55){let _=n+t()*Zt;sm(e,r(_,-(c(_)+t.range(45,220)),Es-.25,t()*6,!1),t)}let g=Math.floor((n+Zt/2)/1500)*1500+700;g>=n&&g<s&&en(g)==="coast"&&!Di(g,tn*1.6)&&im(e,r(g,-(c(g)+75),Es-1,0,!1))}*placeCountry(e,t,n,s,r,o,a,c,u){for(let _ of[-1,1]){yield;for(let b=n+t()*20;b<s;b+=t.range(20,40)){if(en(b)!=="country"||t()<.55||Cs(b,16)||ai(b,48))continue;let l=_*t.range(16,95),f=o(b,l);ss(e,f,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(is),litP:.5,fence:0});for(let d=0;d<2+t()*3;d++){let x=l+_*t.range(6,14),p=b+t.range(-8,8);On(e,o(p,x,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let b=n+t()*8;b<s;b+=t.range(5,9)){if(en(b)!=="country"||Cs(b,7)||ai(b,36))continue;let l=_*t.range(140,210);On(e,o(b,l,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Cs(b+2,8)&&!ai(b+2,34)&&On(e,o(b+2,_*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let h=Math.floor((n+Zt/2)/600)*600+300;if(h>=n&&h<s&&en(h)==="country"&&!ai(h,40)){let _=c(h);tm(e,r(h,-(_+1.6),a(h)-.08),t)}let m=Math.floor((n+Zt/2)/700)*700+120;if(m>=n&&m<s&&en(m)==="country"&&!ai(m,40)){let _=c(m);Rf(e,r(m,-(_+.95),a(m)-.08),t),Af(e,r(m+2,-(_+.8),a(m)-.08),t)}let v=Math.floor((n+Zt/2)/900)*900+450;if(v>=n&&v<s&&en(v)==="country"&&!ai(v,40)){let _=c(v);rm(e,o(v,_+5),t)}let g=Math.floor((n+Zt/2)/380)*380+190;if(g>=n&&g<s&&en(g)==="country"&&!ai(g,40)&&!Cs(g,30)){let _=c(g),b=(oi(Math.round(g),5)<.5?-1:1)*(_+2.75);jp(e,o(g,b,0))}for(let _=n;_<s;_+=30){if(en(_)!=="country")continue;let b=this.path.curv(_);if(Math.abs(b)>1/450&&t()<.5){let l=b>0?-1:1,f=c(_);If(e,o(_,l*(f+.75)),l>0?-1:1)}}}};var ao=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new Te(e):e)),pe={zenith:new Te,horizon:new Te,sunCol:new Te,sunI:1,hemiSky:new Te,hemiGround:new Te,hemiI:1,fog:new Te,cLit:new Te,cShade:new Te,cRim:new Te,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new k,moonDir:new k,lightDir:new k,sunEl:0};function um(i){let e=0;for(;e<ao.length-2&&ao[e+1][0]<=i;)e++;let t=ao[e],n=ao[e+1],s=jc(zt((i-t[0])/(n[0]-t[0]),0,1)),r=(o,a)=>a.copy(t[o]).lerp(n[o],s);r(1,pe.zenith),r(2,pe.horizon),r(3,pe.sunCol),pe.sunI=Pt(t[4],n[4],s),r(5,pe.hemiSky),r(6,pe.hemiGround),pe.hemiI=Pt(t[7],n[7],s),r(8,pe.fog),r(9,pe.cLit),r(10,pe.cShade),r(11,pe.cRim),pe.night=Pt(t[12],n[12],s),pe.warm=Pt(t[13],n[13],s),pe.sunEl=hm(i,pe.sunDir,pe.moonDir,pe.lightDir)}function hm(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,zt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var z2=new k,k2=new k;function Hf(i,e){return hm((i%1+1)%1,z2,k2,e),e}var cm={zenith:[new Te("#7b8594"),new Te("#141a28")],horizon:[new Te("#b5bcc6"),new Te("#283042")],fog:[new Te("#a8b0ba"),new Te("#232b3c")],hemiSky:[new Te("#aab3bf"),new Te("#3c4866")],hemiGround:[new Te("#8b8983"),new Te("#1e2030")],cLit:[new Te("#d0d5dc"),new Te("#2c3240")],cShade:[new Te("#7c8593"),new Te("#151922")]},kf=new Te;function fm(i,e){if(pe.overcast=i,pe.rain=e,pe.bright=(1-pe.night)*(1-pe.warm)*(1-i),i<=.001)return;let t=pe.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])kf.copy(cm[n][0]).lerp(cm[n][1],t),pe[n].lerp(kf,i*(n==="cLit"||n==="cShade"?.75:.85));pe.sunI*=1-.82*i,pe.warm*=1-i,pe.cRim.multiplyScalar(1-i),pe.sunCol.lerp(kf.setRGB(.85,.87,.9),i*.6)}function dm(){let i=new _t({side:Cn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:pe.zenith},uHorizon:{value:pe.horizon},uSunDir:{value:pe.sunDir},uMoonDir:{value:pe.moonDir},uNoiseTex:We.uNoiseTex,uSunCol:{value:pe.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new Te},uOvercast:{value:0},uDeckLit:{value:new Te},uDeckDark:{value:new Te},uMilky:{value:0},uMetA:{value:new k(0,1,0)},uMetB:{value:new k(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright;
      varying vec3 vDir;
      ${gi}
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
        float band = 0.0;
        if (uMilky > 0.01 && e > -0.05) { // the Milky Way: a soft, clumpy band with dark dust lanes
          vec3 bn = normalize(vec3(0.62, 0.3, 0.72)), t1 = normalize(cross(bn, vec3(0.0, 1.0, 0.0))), t2 = cross(bn, t1);
          float v = dot(d, bn), ang = atan(dot(d, t2), dot(d, t1));
          band = exp(-(v * v) / 0.045);
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
      }`}),e=new gt(new la(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function H2(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let d=0;d<o;d++){let x=.06+i()*.05;t.push([(d/(o-1)-.5)*s+(i()-.5)*.03,.1+x*.5,(i()-.5)*.2,x])}let a=e?6:2,c=s*.82,u=.1+.09;for(let d=0;d<a;d++){let x=Math.max(1,Math.round(c/.11));for(let p=0;p<x;p++){let M=(x===1?0:p/(x-1)-.5)*c+(i()-.5)*.05+r*d;t.push([M,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,c*=e?.8:.66}let h=t.slice();for(let d of h){if(t.length>84)break;let x=1+Math.floor(i()*2);for(let p=0;p<x;p++){let M=.35+i()*2.4,T=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(M)*d[3]*.82,d[1]+Math.sin(M)*d[3]*.82,d[2]+.04,T])}}let m=t.slice(h.length);for(let d of h){if(d[1]<.1+.12||t.length>104)continue;let x=1+Math.floor(i()*2);for(let p=0;p<x;p++){let M=.3+i()*2.5,T=d[3]*(.3+i()*.4),E=d[3]*(.28+i()*.16);t.push([d[0]+Math.cos(M)*T,d[1]+Math.sin(M)*T,d[2]+Math.sqrt(d[3]*d[3]-T*T)-E*.6,E])}}for(let d of m){if(t.length>124)break;let x=1+Math.floor(i()*2);for(let p=0;p<x;p++){let M=.2+i()*2.7,T=d[3]*(.38+i()*.2);t.push([d[0]+Math.cos(M)*d[3]*.85,d[1]+Math.sin(M)*d[3]*.85,d[2]+.02,T])}}let v=t.slice(0,128),g=1e9,_=-1e9,b=-1e9;for(let d of v)g=Math.min(g,d[0]-d[3]*1.12),_=Math.max(_,d[0]+d[3]*1.12),b=Math.max(b,d[1]+d[3]*1.12);let l=Math.min(1,.92/(_-g),(.95-.1)/(b-.1)),f=(g+_)/2;for(let d of v)d[0]=(d[0]-f)*l,d[1]=.1+(d[1]-.1)*l,d[3]*=l;return v}function pm(i){let t={value:Array.from({length:128},()=>new St)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new _t({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:We.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${gi}
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
      }`,depthTest:!1,depthWrite:!1,blending:Vn}),r=new Ut(1024,1024,{generateMipmaps:!0,minFilter:Gn,magFilter:Ot,depthBuffer:!1}),o=new _t({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:We.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${gi}
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
      }`,depthTest:!1,depthWrite:!1,blending:Vn}),a=new gt(new nn(1,1),s),c=new Vs,u=new Qi;c.add(a);let h=new Ut(1024*2,1024*2,{generateMipmaps:!0,minFilter:Gn,magFilter:Ot}),m=i.getRenderTarget(),v=i.autoClear,g=ln(99);i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let _=[];for(let b=0;b<4;b++){let l=b%2===0,f=H2(g,l);f.forEach((d,x)=>t.value[x].set(d[0],d[1],d[2],d[3])),s.uniforms.uN.value=f.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=b*13.7,a.material=s,i.setRenderTarget(r),i.render(c,u),a.material=o,h.viewport.set(b%2*1024,Math.floor(b/2)*1024,1024,1024),i.setRenderTarget(h),i.render(c,u),_.push({cell:[b%2,Math.floor(b/2)],tall:l})}return h.viewport.set(0,0,1024*2,1024*2),i.autoClear=v,i.setRenderTarget(m),s.dispose(),o.dispose(),r.dispose(),a.geometry.dispose(),{tex:h.texture,kinds:_,rt:h}}function mm(i){let e=ln(5),t=22,n=[],s=new nn(1,1);s.translate(0,.5,0);let r=new Hn(new Float32Array(t*4),4),o=new Hn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let a=new _t({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new Te},uShade:{value:pe.cShade},uRim:{value:pe.cRim},uHaze:{value:pe.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),c=new ji(s,a,t);c.frustumCulled=!1,c.renderOrder=-5;for(let _=0;_<t;_++){let b=_<12,l=i.kinds[(_*3+(b?0:1))%i.kinds.length],f=b?l.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:_/t*Math.PI*2+e.range(-.15,.15),d:b?e.range(2600,3400):e.range(1300,2200),base:b?e.range(-60,60):e.range(260,700),size:f,cell:l.cell,haze:b?.45:.18})}let u=new it,h=new Tn,m=new k,v=new k,g=new k(0,1,0);return{group:c,update(_,b){let l=Math.atan2(pe.lightDir.x,pe.lightDir.z);for(let d of n)d.phi+=b*1.2/d.d;n.slice().sort((d,x)=>x.d-d.d).forEach((d,x)=>{m.set(_.x+Math.sin(d.phi)*d.d,_.y+d.base,_.z+Math.cos(d.phi)*d.d),h.setFromAxisAngle(g,d.phi+Math.PI),v.set(d.size,d.size,1),u.compose(m,h,v),c.setMatrixAt(x,u);let p=l-d.phi;p=Math.atan2(Math.sin(p),Math.cos(p));let M=Math.max(0,Math.min(1,(p+.35)/.7)),T=1-M*M*(3-2*M);r.setXYZW(x,d.cell[0],d.cell[1],T,d.haze),o.setX(x,.35+.9*Math.pow(Math.max(Math.cos(p),0),3)*(.4+pe.warm))}),c.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,a.uniforms.uOpacity.value=(1-pe.night*.35)*(1-pe.overcast*.55)*(1-.85*pe.rain),a.uniforms.uLit.value.copy(pe.cLit).multiplyScalar(1+.35*pe.bright)}}}function gm(){let i=new Jt;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],a=[];for(let m=0;m<=360;m++){let v=m/360*Math.PI*2,g=Math.sin(v)*t.R,_=Math.cos(v)*t.R,b=Qc(m/360*t.k*4,40+n*9),l=Math.pow(Math.max(0,b-.18)/.82,1.6),f=t.h*(.12+l);if(r.push(g,-60,_,g,-60+f,_),o.push(0,m/360,1,m/360),m<360){let d=m*2;a.push(d,d+1,d+2,d+1,d+3,d+2)}}let c=new yt;c.setAttribute("position",new Je(r,3)),c.setAttribute("hf",new Je(o,2)),c.setIndex(a);let u=new _t({side:En,fog:!1,uniforms:{uCol:{value:new Te(t.col)},uHaze:{value:pe.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:We.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${gi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),h=new gt(c,u);h.frustumCulled=!1,h.renderOrder=999,i.add(h)}),{group:i,update(t,n=0){i.position.set(t.x,0,t.z);for(let r of i.children)r.material.uniforms.uSnow.value=n;let s=(.35+.65*(1-pe.night))*(1-.35*pe.overcast);for(let r of i.children)r.material.uniforms.uLight.value=s}}}var lo={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function vm(i){let e=i.get("weather"),t={mode:lo[e]?e:"auto",kind:lo[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return lo[e]&&(t.ov=lo[e][0],t.rain=lo[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let a=Math.random();t.kind=t.kind==="clear"?a<.5?"cloudy":a<.72?"rain":"clear":t.kind==="cloudy"?a<.5?"clear":a<.85?"rain":"cloudy":a<.55?"cloudy":"clear"}let[s,r]=lo[t.kind];t.ov+=zt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=zt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var vi={uHeadPos:{value:new k},uHeadDir:{value:new k(0,0,1)},uHeadI:{value:0},uLampW:{value:[new St(0,-1e3,0,0),new St(0,-1e3,0,0)]},uLampCol:{value:new Te(1,.8,.52)}},gu=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function xm(){let e=new k(42,22,42),t=new nn(1,1),n=new ys;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let a=0;a<2400*4;a++)s[a]=Math.random();n.setAttribute("aOff",new Hn(s,4)),n.instanceCount=2400;let r=new _t({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uAmt:{value:0},uBox:{value:e},uCol:{value:new Te(1,1,1)},...vi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${gu}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new gt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,h){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*h,.33+.67*h,.42+.58*h)}}}function _m(){let e=new k(46,24,46),t=new nn(1,1);t.translate(0,.5,0);let n=new ys;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let a=0;a<2600;a++)s[a*4]=Math.random(),s[a*4+1]=Math.random(),s[a*4+2]=Math.random(),s[a*4+3]=Math.random();n.setAttribute("aOff",new Hn(s,4)),n.instanceCount=2600;let r=new _t({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uRain:{value:0},uBox:{value:e},uCol:{value:new Te(.8,.85,.95)},...vi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${gu}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new gt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,h){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*h,.12+.83*h,.16+.84*h)}}}var Wn=64,Vf=[2.2,1.3,2.6],V2=[-2.4,.35,-1.6];function ym(){let i=new Float32Array(Wn*3),e=new Float32Array(Wn*3),t=new Float32Array(Wn*4),n=new Float32Array(Wn),s=new Uint8Array(Wn),r=new Float32Array(Wn);for(let x=0;x<Wn;x++)t[x*4]=t[x*4+1]=1;let o=new nn(1,1),a=new ys;a.index=o.index,a.setAttribute("position",o.attributes.position),a.setAttribute("uv",o.attributes.uv),a.instanceCount=0;let c=new Float32Array(Wn*4),u=new Float32Array(Wn*4),h={uP:{value:c},uC:{value:u},uNoiseTex:We.uNoiseTex,uAmb:{value:new Te},uSun:{value:new Te},uTail:{value:new St},uCam:{value:new k},...vi},m=new _t({transparent:!0,depthWrite:!1,fog:!1,uniforms:h,vertexShader:`
      uniform vec4 uP[${Wn}], uC[${Wn}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${gu}
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
      }`}),v=new gt(a,m);v.frustumCulled=!1,v.renderOrder=4,v.visible=!1;let g=0,_=0,b=0,l=0,f=!1;function d(x,p,M,T,E,y,S,A,R,P,I){let C=g;g=(g+1)%Wn,i[C*3]=p,i[C*3+1]=M,i[C*3+2]=T,e[C*3]=E,e[C*3+1]=y,e[C*3+2]=S,t[C*4]=0,t[C*4+1]=A,t[C*4+2]=R,t[C*4+3]=P,n[C]=I,s[C]=x,r[C]=Math.random()}return{mesh:v,update(x,p,M,T,E,y,S,A,R,P,I){if(!I){if(f){for(let J=0;J<Wn;J++)t[J*4]=t[J*4+1];f=!1}v.visible=!1;return}let C=p.position,L=p.rotation.y,O=Math.cos(L),H=Math.sin(L),W=H*M,D=O*M,z=Math.min(1,Math.max(0,(M-2)/14)),V=E>.3?2:0,ee=V?E:T;for(_+=24*ee*z*x;_>=1;){_-=1;let J=(l^=1)?1:-1,Z=J*.67,Me=-1.28-Math.random()*.2,Le=Math.random(),we=Math.random(),Ge=1.6+1.6*Le,Ke=V?.5+.7*we:.9+1*we,Oe=J*(.3+.6*Math.random());d(V,C.x+Z*O+Me*H,C.y+.12,C.z-Z*H+Me*O,W*.55-H*Ge+Oe*O,Ke,D*.55-O*Ge-Oe*H,V?.45+.3*Le:.55+.35*Le,.2+.1*we,V?.7+.35*we:.8+.4*we,.5*(.5+.5*z)*Math.min(1,ee*1.5))}for(b+=(5+4*z)*y*x;b>=1;){b-=1;let J=Math.random();d(1,C.x-.42*O-1.78*H,C.y+.26,C.z+.42*H-1.78*O,W*.5-H*.8,.25+.2*J,D*.5-O*.8,1.3+.6*J,.14,.8+.4*Math.random(),.32*Math.min(1,y*1.5))}let le=0,Xe=Math.exp(-Vf[0]*x),Ae=Math.exp(-Vf[1]*x),Be=Math.exp(-Vf[2]*x);for(let J=0;J<Wn;J++){let Z=J*4;if(t[Z]>=t[Z+1])continue;let Me=t[Z]+=x,Le=t[Z+1];if(Me>=Le)continue;let we=s[J],Ge=we===0?Xe:we===1?Ae:Be,Ke=J*3,Oe=i[Ke]-P.x,mt=i[Ke+1]-P.y,Q=i[Ke+2]-P.z;if(Oe*Oe+mt*mt+Q*Q<20.25){t[Z]=Le;continue}e[Ke]*=Ge,e[Ke+1]=e[Ke+1]*Ge+V2[we]*x,e[Ke+2]*=Ge,i[Ke]+=e[Ke]*x,i[Ke+1]=Math.max(C.y+.05,i[Ke+1]+e[Ke+1]*x),i[Ke+2]+=e[Ke+2]*x;let ge=Me/Le,Ee=le*4;c[Ee]=i[Ke],c[Ee+1]=i[Ke+1],c[Ee+2]=i[Ke+2],c[Ee+3]=t[Z+2]+(t[Z+3]-t[Z+2])*Math.sqrt(ge),u[Ee]=n[J]*Math.min(1,ge*6)*(1-ge)*(1-ge),u[Ee+1]=we,u[Ee+2]=r[J],le++}f=le>0,v.visible=f,a.instanceCount=le,f&&(h.uAmb.value.copy(S),h.uSun.value.copy(A),h.uTail.value.copy(R),h.uCam.value.copy(P))},shift(x,p){for(let M=0;M<Wn;M++)i[M*3]-=x,i[M*3+2]-=p}}}var rr=24,G2=55,W2=12;function Mm(){let i=[],e=new Float32Array(rr*2*2),t=new Float32Array(rr*2*3);for(let u=0;u<rr;u++)if(e.set([u,-1,u,1],u*4),u<rr-1){let h=u*2;i.push(h,h+1,h+2,h+1,h+3,h+2)}let n=new yt;n.setAttribute("position",new Bt(t,3)),n.setAttribute("aI",new Bt(e,2)),n.setIndex(i);let s=new Float32Array(rr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new Te},uTime:{value:0},uNoiseTex:We.uNoiseTex},o=new _t({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${rr}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${gi}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),a=new gt(n,o);a.frustumCulled=!1,a.renderOrder=1,a.visible=!1;let c={};return{mesh:a,update(u,h,m,v,g,_,b,l){if(a.visible=_>.01,!!a.visible){for(let f=0;f<rr;f++)u.at(h+G2+f*W2,c),s[f*4]=c.x-m,s[f*4+1]=c.y,s[f*4+2]=c.z-v,s[f*4+3]=c.h;r.uW.value=g*.85,r.uHot.value=_,r.uTime.value=b,r.uSky.value.copy(l)}}}}var co=72;function X2(){let i=[],e=[],t=(s,r,o,a,c,u)=>{i.push(...s,...r,...o),e.push(a,c,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new yt;return n.setAttribute("position",new Je(i,3)),n.setAttribute("aWing",new Je(e,1)),n}function bm(){let i=X2(),e=new Hn(new Float32Array(co*3),3),t=new Hn(new Float32Array(co*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new _t({side:En,fog:!1,uniforms:{uTime:{value:0},uFog:{value:pe.fog},uFogD:{value:.002},uCam:{value:new k}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new ji(i,n,co);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},a=new it,c=new Tn,u=new Zn(0,0,0,"YXZ"),h=new k,m=new k,v=()=>r.reduce((b,l)=>b+l.birds.length,0);function g(b,l,f,d){let x=b==="small"?6+Math.floor(Math.random()*7):b==="crow"?3+Math.floor(Math.random()*5):4;if(v()+x>co)return;let p=45+Math.random()*85,M=(Math.random()-.5)*120,T=Math.random()<.5?1:-1,E=new k().copy(l).addScaledVector(f,p).addScaledVector(d,M-T*75);E.y=l.y+(b==="crow"?18+Math.random()*24:10+Math.random()*18);let y=b==="small"?11+Math.random()*4:8+Math.random()*3,S=new k().copy(d).multiplyScalar(T*y).addScaledVector(f,(Math.random()-.3)*y*.6),A=b==="small"?.8:1.45,R=Array.from({length:x},(P,I)=>({off:new k((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:b==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:b,c:E,vel:S,birds:R,size:A,life:60})}function _(b,l,f,d){if(r.some(M=>M.kind==="gull")||v()+4>co)return;let x=new k().copy(b).addScaledVector(l,70).addScaledVector(f,-d*45);x.y=b.y+18;let p=Array.from({length:4},(M,T)=>({off:new k,ph:Math.random()*6.28,fq:5.5,w:T/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:x,vel:new k,birds:p,size:1.25,life:1e9})}return{mesh:s,update(b,l,f,d,x,p,M,T,E){n.uniforms.uTime.value=l,n.uniforms.uCam.value.copy(f);let y=M>.35&&T<.3,S=pe.warm>.25&&pe.sunEl<.6&&M>.2;y&&(o.small-=b)<0&&(o.small=22+Math.random()*35,p.coast<.6&&g("small",f,d,x)),(S||y&&p.city+p.country>.6&&Math.random()<4e-4)&&(o.crow-=b)<0&&(o.crow=S?14+Math.random()*18:60,g("crow",f,d,x)),p.coast>.6&&y&&_(f,d,x,1);let A=[.1+.08*M,.11+.09*M,.15+.1*M],R=0;for(let P=r.length-1;P>=0;P--){let I=r[P];if(I.kind==="gull"?(I.c.lerp(h.copy(E).addScaledVector(d,60).addScaledVector(x,-42).setY(E.y+16),Math.min(1,b*.25)),(p.coast<.4||!y)&&(I.life=Math.min(I.life,8),I.c.y+=b*6)):I.c.addScaledVector(I.vel,b),I.life-=b,I.life<0||I.kind!=="gull"&&I.c.distanceTo(f)>300){r.splice(P,1);continue}for(let C of I.birds){if(R>=co)break;let L,O,H,W;I.kind==="gull"?(C.w+=b*(14/C.r),L=I.c.x+Math.cos(C.w)*C.r,H=I.c.z+Math.sin(C.w)*C.r,O=I.c.y+C.h+Math.sin(l*.4+C.ph)*2,W=Math.atan2(-Math.sin(C.w),Math.cos(C.w))):(L=I.c.x+C.off.x+Math.sin(l*.7+C.ph)*1.2,O=I.c.y+C.off.y+Math.sin(l*1.1+C.ph)*.6,H=I.c.z+C.off.z,W=Math.atan2(I.vel.x,I.vel.z)),u.set(0,W,Math.sin(l+C.ph)*.15),c.setFromEuler(u),m.setScalar(I.size),a.compose(h.set(L,O,H),c,m),s.setMatrixAt(R,a);let D=I.kind==="gull"?[.92*(.5+.5*M),.93*(.5+.5*M),.95*(.5+.5*M)]:I.kind==="crow"?[.05,.05,.07]:A;e.setXYZ(R,D[0],D[1],D[2]),t.setXY(R,C.fq,C.ph),R++}}s.count=R,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(b){n.uniforms.uFogD.value=b},shift(b,l){for(let f of r)f.c.x-=b,f.c.z-=l}}}function Sm(){let i=new _t({fog:!1,uniforms:{uNoiseTex:We.uNoiseTex,uTime:{value:0},uCam:{value:new k},uSunDir:{value:pe.lightDir},uSunCol:{value:pe.sunCol},uHorizon:{value:pe.horizon},uZenith:{value:pe.zenith},uFog:{value:pe.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${gi}
      float wh(vec2 p){ return vnoise(p * 0.18 + vec2(uTime * 0.05, uTime * 0.03)) * 0.6 + vnoise(p * 0.55 - vec2(uTime * 0.09, -uTime * 0.04)) * 0.4; }
      void main(){
        vec3 V = normalize(uCam - vW); float dist = length(uCam.xz - vW.xz);
        vec2 p = vW.xz;
        float e = 0.6, h0 = wh(p);
        vec3 N = normalize(vec3((h0 - wh(p + vec2(e, 0.0))) * 1.4, 1.0, (h0 - wh(p + vec2(0.0, e))) * 1.4));
        N = normalize(mix(N, vec3(0.0, 1.0, 0.0), smoothstep(80.0, 900.0, dist) * 0.8));
        float fres = pow(1.0 - max(dot(V, N), 0.0), 3.0);
        // on a bright day the sea is painted a deep, saturated blue (the reference art): bluer water that mirrors more of
        // the blue sky overhead and less of the pale horizon; dawn, dusk and night keep the old water and the horizon's glow
        vec3 deep = mix(mix(vec3(0.010, 0.10, 0.26), vec3(0.004, 0.11, 0.40), uBright), mix(vec3(0.03, 0.22, 0.40), vec3(0.02, 0.25, 0.62), uBright), 0.5 + 0.5 * vnoise(p * 0.02));
        vec3 sky = mix(uHorizon, uZenith, 0.25 + 0.45 * uBright);
        vec3 col = mix(deep, sky, clamp(fres * (1.15 - 0.3 * uBright) + 0.08 - 0.03 * uBright, 0.0, 1.0));
        // painted wave crests: thin light streaks
        float crest = smoothstep(0.78, 0.86, vnoise(vec2(p.x * 0.08, p.y * 0.5) + uTime * 0.04)) * (1.0 - smoothstep(60.0, 400.0, dist));
        col = mix(col, sky * 1.15, crest * 0.35);
        vec3 R = reflect(-V, N);
        float al = max(dot(R, uSunDir), 0.0);
        float spec = pow(al, 300.0) * 5.0;
        float broad = pow(al, 18.0);
        float spark = step(0.86, vnoise(p * 2.2 + vec2(uTime * 0.7, -uTime * 0.5))) * step(0.5, vnoise(p * 0.7 - uTime * 0.3));
        col += uSunCol * (spec + spark * broad * 3.0 + broad * 0.15) * (1.0 - uNight * 0.6) * uSpecK;
        float fd = dist * uFogD;
        col = mix(col, uFog, 1.0 - exp(-fd * fd));
        col = mix(uFog, col, uVis);
        gl_FragColor = vec4(col, 1.0);
      }`}),e=new gt(new nn(14e3,14e3),i);return e.rotation.x=-Math.PI/2,e.position.y=Es,e.renderOrder=998,e.frustumCulled=!1,{mesh:e,update(t,n,s,r=1){e.position.x=t.x,e.position.z=t.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(t),i.uniforms.uNight.value=pe.night,i.uniforms.uBright.value=pe.bright,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-pe.overcast*.85}}}function Tm(){return new _t({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new Te(1,1,1)},uNoiseTex:We.uNoiseTex},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${gi}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function Em(){return new _t({fog:!1,uniforms:{uNoiseTex:We.uNoiseTex,uTime:{value:0},uSunDir:{value:pe.lightDir},uSunCol:{value:pe.sunCol},uHorizon:{value:pe.horizon},uZenith:{value:pe.zenith},uFog:{value:pe.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${gi}
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
      }`})}var Fa=new k;function xi(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Fa.copy(e),Fa[n]=0,Fa.normalize();let u=.5*o/(o+a),h=1-Fa.angleTo(i)/c;return Math.sign(Fa[t])===1?h*u:a/(o+a)+u+u*(1-h)}var wn=class i extends Vt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new k,u=new k,h=new k(e,t,n).divideScalar(2).subScalar(r),m=this.attributes.position.array,v=this.attributes.normal.array,g=this.attributes.uv.array,_=m.length/6,b=new k,l=.5/o;for(let f=0,d=0;f<m.length;f+=3,d+=2)switch(c.fromArray(m,f),u.copy(c),u.x-=Math.sign(u.x)*l,u.y-=Math.sign(u.y)*l,u.z-=Math.sign(u.z)*l,u.normalize(),m[f+0]=h.x*Math.sign(c.x)+u.x*r,m[f+1]=h.y*Math.sign(c.y)+u.y*r,m[f+2]=h.z*Math.sign(c.z)+u.z*r,v[f+0]=u.x,v[f+1]=u.y,v[f+2]=u.z,Math.floor(f/_)){case 0:b.set(1,0,0),g[d+0]=xi(b,u,"z","y",r,n),g[d+1]=1-xi(b,u,"y","z",r,t);break;case 1:b.set(-1,0,0),g[d+0]=1-xi(b,u,"z","y",r,n),g[d+1]=1-xi(b,u,"y","z",r,t);break;case 2:b.set(0,1,0),g[d+0]=1-xi(b,u,"x","z",r,e),g[d+1]=xi(b,u,"z","x",r,n);break;case 3:b.set(0,-1,0),g[d+0]=1-xi(b,u,"x","z",r,e),g[d+1]=1-xi(b,u,"z","x",r,n);break;case 4:b.set(0,0,1),g[d+0]=1-xi(b,u,"x","y",r,e),g[d+1]=1-xi(b,u,"y","x",r,t);break;case 5:b.set(0,0,-1),g[d+0]=xi(b,u,"x","y",r,e),g[d+1]=1-xi(b,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Gf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new yt,u=0;for(let h=0;h<i.length;++h){let m=i[h],v=0;if(t!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in m.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(m.attributes[g]),v++}if(v!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in m.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[g]===void 0&&(o[g]=[]),o[g].push(m.morphAttributes[g])}if(e){let g;if(t)g=m.index.count;else if(m.attributes.position!==void 0)g=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,g,h),u+=g}}if(t){let h=0,m=[];for(let v=0;v<i.length;++v){let g=i[v].index;for(let _=0;_<g.count;++_)m.push(g.getX(_)+h);h+=i[v].attributes.position.count}c.setIndex(m)}for(let h in r){let m=wm(r[h]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,m)}for(let h in o){let m=o[h][0].length;if(m!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let v=0;v<m;++v){let g=[];for(let b=0;b<o[h].length;++b)g.push(o[h][b][v]);let _=wm(g);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}}return c}function wm(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Bt(o,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let m=c/t;for(let v=0,g=h.count;v<g;v++)for(let _=0;_<t;_++){let b=h.getComponent(v,_);a.setComponent(v+m,_,b)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function q2(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new $n(i);return n.colorSpace=jt,n}var Wf=4;function Y2(){let t=document.createElement("canvas");t.width=128*Wf,t.height=128;let n=t.getContext("2d"),s=(o,a,c,u,h)=>{n.beginPath(),n.moveTo(o+h,a),n.arcTo(o+c,a,o+c,a+u,h),n.arcTo(o+c,a+u,o,a+u,h),n.arcTo(o,a+u,o,a,h),n.arcTo(o,a,o+c,a,h),n.closePath(),n.fill()};for(let o=0;o<Wf;o++){let a=o*128,c=n.createLinearGradient(0,0,0,128);c.addColorStop(0,"#9fbfe6"),c.addColorStop(.45,"#4a6690"),c.addColorStop(1,"#1d2638"),n.fillStyle=c,n.fillRect(a,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(a+14,84,30,50,9),s(a+84,84,30,50,9),n.fillRect(a+6,112,116,16),s(a+52,92,24,40,7)),o===2&&(s(a+62,66,44,70,12),n.fillRect(a+50,118,70,10)),o===3&&(s(a+70,78,40,60,11),n.fillRect(a+56,120,64,8)),n.save(),n.beginPath(),n.rect(a,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(a+40,0),n.lineTo(a+68,0),n.lineTo(a+20,128),n.lineTo(a-8,128),n.fill(),n.restore()}let r=new $n(t);return r.colorSpace=jt,r}function Am(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/Wf)}return i}function Rm(){let i=new Jt,e=new Jt,t=new Jt;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new St,new St],s=new Te(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=xf(new an({color:"#ffffff",vertexColors:!0,gradientMap:su}),.85,.06,"paint-l",r),a=(Q,ge)=>Object.assign(new Te(Q),{gloss:ge}),c=a("#9fd8c8",1),u=a("#eeece4",.6),h=a("#2a2c33",.35),m=a("#1b1c20",.04),v=a("#c8ccd2",.8),g=a("#d4d8de",1.3),_=(Q,ge)=>{let Ee=Q.attributes.position.count,K=new Float32Array(Ee*4);for(let te=0;te<Ee;te++)K.set([ge.r,ge.g,ge.b,ge.gloss],te*4);return Q.setAttribute("color",new Je(K,4)),Q},b=xf(new an({color:"#ffffff",map:Y2(),gradientMap:Kn}),1.2,.08,"glass-l",r),l=new an({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:Kn}),f=new an({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:Kn}),d=new an({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:Kn}),x=new an({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:Kn}),p=new an({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:Kn}),M=new on({map:q2()}),T=new Map,E=[],y=!1,S=new it,A=new Zn,R=new Tn,P=new k(1,1,1),I=(Q,ge,Ee,K,te,re=0,se=0,F=0)=>{let ve=Q.index?Q.toNonIndexed():Q;if(ge.isColor&&(_(ve,ge),ge=o),A.set(re,se,F),R.setFromEuler(A),S.compose(new k(Ee,K,te),R,P),ve.applyMatrix4(S),y){E.push(ve);return}T.has(ge)||T.set(ge,[]),T.get(ge).push(ve)},C=a("#16171b",0),L=a("#2b3134",.15),O=a("#b9bfc6",.9),H=a("#4d5258",.4),W=a("#9a1c22",.6),D=1.7,z=.745,V=.3,ee=(Q,ge,Ee)=>{let K=Math.min(1,Math.max(0,(Ee-Q)/(ge-Q)));return K*K*(3-2*K)},le=Q=>Q<.8?1.8:Q<1.22?1.8-.6*ee(.8,1.22,Q):1.2-.1*((Q-1.22)/(D-1.22))**2,Xe=Q=>1-.085*ee(1.15,1.8,Q),Ae=(Q,ge)=>{let Ee=z-ge,K=V+ge*.6,te=le(Q)-ge*(Q<0?.4:1),re=Math.max(.05,.1-ge*.5),se=Math.max(.06,(Q<.8?.17:.13)-ge*.5),F=[[0,K],[(Ee-re)*.5,K],[Ee-re,K]];for(let j=1;j<4;j++){let U=-Math.PI/2+j/8*Math.PI;F.push([Ee-re+re*Math.cos(U),K+re+re*Math.sin(U)])}for(let j=0;j<=8;j++)F.push([Ee,K+re+j/8*(te-se-K-re)]);for(let j=1;j<5;j++){let U=j/10*Math.PI;F.push([Ee-se+se*Math.cos(U),te-se+se*Math.sin(U)])}F.push([Ee-se,te],[(Ee-se)*.5,te],[0,te]);let ve=F.map(([j,U])=>[j*Xe(U),U]);for(let j=F.length-2;j>0;j--)ve.push([-ve[j][0],ve[j][1]]);return ve};{let Q=[];for(let w=0;w<=6;w++){let G=w/6*Math.PI/2;Q.push([-D+.2*(1-Math.cos(G)),.2*(1-Math.sin(G))])}for(let w=-D+.2+.12;w<.78;w+=.13)Q.push([w,0]);for(let w=.8;w<1.225;w+=.06)Q.push([w,0]);for(let w of[1.3,1.39])Q.push([w,0]);for(let w=6;w>=0;w--){let G=w/6*Math.PI/2;Q.push([D-.22*(1-Math.cos(G)),.22*(1-Math.sin(G))])}let K=[],te=[],re=Q.map(([w,G])=>Ae(w,G)),se=re[0].length;re.forEach((w,G)=>w.forEach(([Y,B])=>K.push(Y,B,Q[G][0])));for(let w=0;w<re.length-1;w++)for(let G=0;G<se;G++){let Y=w*se+G,B=w*se+(G+1)%se,ce=Y+se,ye=B+se;te.push(Y,B,ce,B,ye,ce)}for(let[w,G]of[[0,-1],[re.length-1,1]]){let Y=K.length/3,B=re[w];K.push(0,(B[0][1]+B[se/2|0][1])/2,Q[w][0]);for(let ce=0;ce<se;ce++){let ye=w*se+ce,oe=w*se+(ce+1)%se;G<0?te.push(Y,oe,ye):te.push(Y,ye,oe)}}let F=new yt;F.setAttribute("position",new Je(K,3)),F.setIndex(te),F.computeVertexNormals();{let w=F.attributes.normal,G=se*10+12;if(w.getX(G)<0){for(let Y=0;Y<te.length;Y+=3){let B=te[Y+1];te[Y+1]=te[Y+2],te[Y+2]=B}F.setIndex(te),F.computeVertexNormals()}}F.setAttribute("uv",new Je(new Float32Array(K.length/3*2),2));let ve=F.toNonIndexed(),j=ve.attributes.position,U=new Float32Array(j.count*4);for(let w=0;w<j.count;w+=3){let G=(j.getY(w)+j.getY(w+1)+j.getY(w+2))/3,Y=(j.getZ(w)+j.getZ(w+1)+j.getZ(w+2))/3,B=G>1.665&&Y<.84&&Y>-1.52?u:c;for(let ce=0;ce<3;ce++)U.set([B.r,B.g,B.b,B.gloss],(w+ce)*4)}ve.setAttribute("color",new Je(U,4)),I(ve,o,0,0,0)}I(new wn(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let Be=(Q,ge,Ee,K,te)=>{let re=new yt,se=[],F=[],ve=[],j=[];for(let U=0;U<=Ee;U++)for(let w=0;w<=ge;w++){let G=w/ge,Y=U/Ee,B=Q(G,Y);se.push(B[0]+B[3]*.004,B[1]+B[4]*.004,B[2]+B[5]*.004),F.push(B[3],B[4],B[5]),ve.push(G,Y)}for(let U=0;U<Ee;U++)for(let w=0;w<ge;w++){let G=U*(ge+1)+w,Y=G+1,B=G+ge+1,ce=B+1;j.push(G,Y,ce,G,ce,B)}re.setAttribute("position",new Je(se,3)),re.setAttribute("normal",new Je(F,3)),re.setAttribute("uv",new Je(ve,2)),re.setIndex(j);{let U=new k().fromArray(se,0),w=new k().fromArray(se,3),G=new k().fromArray(se,(ge+1)*3),Y=new k().fromArray(F,0);if(w.sub(U).cross(G.sub(U)).dot(Y)<0){for(let B=0;B<j.length;B+=3){let ce=j[B+1];j[B+1]=j[B+2],j[B+2]=ce}re.setIndex(j)}}return Am(re,K,te)},J=Q=>{let Ee=z*(Xe(Q+.01)-Xe(Q-.01))/.02,K=Math.hypot(1,Ee);return[1/K,-Ee/K]},Z=Q=>{let ge=.8,Ee=1.22;for(let K=0;K<24;K++){let te=(ge+Ee)/2;le(te)>Q?ge=te:Ee=te}return ge};for(let Q of[-1,1]){let ge=Q<0,Ee=(K,te,re)=>I(Be((se,F)=>{let ve=1.21+F*.39,j=Q>0?te(ve)+(K(ve)-te(ve))*se:K(ve)+(te(ve)-K(ve))*se,[U,w]=J(ve);return[Q*z*Xe(ve),ve,j,Q*U,w,0]},1,6,re,!1),b,0,0,0);Ee(()=>.06,K=>Z(K)-.07,2),Ee(()=>-.72,()=>-.08,3),Ee(()=>-1.42,()=>-.84,0),I(new Vt(.012,.41,.07),h,Q*.731,1.405,-.01,0,0,-Q*.07),I(new Vt(.014,.022,2.42),C,Q*.748,1.2,-.26);for(let[K,te]of[[.8,.64],[-.06,.42],[-.76,.64]])I(new Vt(.008,1.17-te,.012),L,Q*.749,(te+1.17)/2,K);I(new Vt(.02,.028,.13),L,Q*.752,1.06,.06),I(new Vt(.02,.028,.13),L,Q*.752,1.06,-.2),I(new Vt(.01,.022,.62),L,Q*.749,1.155,-1.08);for(let K of[1.12,-1.12])I(new Gs(.345,18,0,Math.PI),C,Q*.749,.29,K,0,Q*Math.PI/2,0),I(new ca(.35,.024,5,18,Math.PI),h,Q*.752,.29,K,0,Q*Math.PI/2,0);I(new wn(.1,.12,.2,2,.04),c,Q*.83,1.24,1.02),I(new Vt(.07,.035,.05),h,Q*.775,1.2,1.03),I(new wn(.16,.4,.05,3,.075),g,Q*.56,.95,-1.703),I(new wn(.13,.37,.05,3,.062),l,Q*.56,.95,-1.716),I(new wn(.036,.27,.02,2,.016),f,Q*.56,.95,-1.742),I(new wn(.11,.06,.04,2,.02),x,Q*.56,.69,-1.707)}{let Q=new Or,ge=.52,Ee=1.15,K=1.66,te=.07;Q.moveTo(-ge+te,Ee),Q.lineTo(ge-te,Ee),Q.absarc(ge-te,Ee+te,te,-Math.PI/2,0),Q.lineTo(ge,K-te),Q.absarc(ge-te,K-te,te,0,Math.PI/2),Q.lineTo(-ge+te,K),Q.absarc(-ge+te,K-te,te,Math.PI/2,Math.PI),Q.lineTo(-ge,Ee+te),Q.absarc(-ge+te,Ee+te,te,Math.PI,Math.PI*1.5);let re=new aa(Q,6),se=re.attributes.position,F=re.attributes.uv;for(let ve=0;ve<se.count;ve++){let j=se.getX(ve),U=se.getY(ve),w=(U-Ee)/(K-Ee);F.setXY(ve,(j+ge)/(2*ge),w),se.setX(ve,j*(1-.08*w))}I(Am(re,1),b,0,0,-D-.004,0,Math.PI,0)}I(new wn(.36,.04,.03,2,.014),d,0,1.69,-1.712),I(Be((Q,ge)=>{let Ee=1.19-ge*.36,K=le(Ee),te=.56-.07*ge,re=.005,se=(le(Ee+re)-le(Ee-re))/(2*re),F=Math.hypot(1,se);return[(Q*2-1)*te,K,Ee,0,1/F,-se/F]},2,7,0,!1),b,0,0,0),I(new wn(.46,.25,.012,2,.05),a("#86bdb0",.6),0,.73,-1.701),I(new nn(.34,.17),M,0,.72,-1.709,0,Math.PI,0),I(new wn(.25,.034,.03,2,.013),g,0,.9,-1.708);for(let Q of[-1,1])I(new Vt(.01,.56,.006),L,Q*.47,.85,-1.703);I(new Vt(.95,.01,.006),L,0,.565,-1.703),I(new wn(1.5,.2,.26,3,.08),c,0,.44,-1.6),I(new wn(1.38,.08,.22,2,.03),h,0,.33,-1.61);for(let Q of[-1,1])I(new Vt(.13,.035,.01),W,Q*.56,.44,-1.731);I(new di(.036,.036,.12,12),g,.46,.29,-1.68,Math.PI/2,0,0),I(new di(.024,.024,.124,10),C,.46,.29,-1.68,Math.PI/2,0,0);for(let Q of[-1,1])I(new wn(.4,.26,.04,2,.06),h,Q*.42,.85,1.702),I(new di(.105,.105,.03,16),p,Q*.46,.85,1.72,Math.PI/2,0,0),I(new di(.055,.055,.03,12),p,Q*.3,.85,1.718,Math.PI/2,0,0),I(new wn(.1,.06,.04,2,.015),x,Q*.52,.66,1.705),I(new Vt(.46,.014,.014),C,Q*.25,1.215,1.2,-.3,Q*.12,0);I(new wn(.36,.12,.03,2,.03),C,0,.84,1.704);for(let Q=0;Q<3;Q++)I(new Vt(.32,.012,.012),L,0,.805+Q*.035,1.722);I(new wn(1.52,.24,.22,2,.07),h,0,.44,1.62),I(new Vt(.7,.07,.02),C,0,.4,1.732),I(new Vt(.34,.17,.01),a("#f0cc38",.3),0,.62,1.733),I(new Vt(.3,.05,.004),a("#2f5a2f",.1),0,.6,1.739),y=!0;for(let[Q,ge]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){I(new di(.29,.29,.19,24),m,Q,.29,ge,0,0,Math.PI/2),I(new di(.195,.195,.194,20),O,Q,.29,ge,0,0,Math.PI/2),I(new di(.155,.155,.198,16),H,Q,.29,ge,0,0,Math.PI/2);for(let Ee=0;Ee<5;Ee++){let K=Ee/5*Math.PI*2+.3;I(new Vt(.202,.03,.15),O,Q,.29-.085*Math.sin(K),ge+.085*Math.cos(K),K,0,0)}I(new di(.045,.045,.206,10),v,Q,.29,ge,0,0,Math.PI/2)}y=!1;for(let[Q,ge]of T){let Ee=new gt(Gf(ge),Q);Ee.castShadow=Q!==b&&Q!==M&&Q!==d&&Q!==p&&Q!==f,Ee.receiveShadow=!0,t.add(Ee)}{let Q=new gt(Gf(E),o);Q.castShadow=Q.receiveShadow=!0,i.add(Q)}{let Ee=document.createElement("canvas");Ee.width=48,Ee.height=96;let K=Ee.getContext("2d"),te=K.createImageData(48,96);for(let se=0;se<96;se++)for(let F=0;F<48;F++){let ve=Math.max(0,Math.abs((F+.5)/48-.5)*2.1-.62),j=Math.max(0,Math.abs((se+.5)/96-.5)*2.05-.78),U=Math.hypot(ve/.42,j/.24),w=Math.max(0,1-U),G=(se*48+F)*4;te.data[G]=te.data[G+1]=te.data[G+2]=Math.round(255*w*w*(3-2*w)),te.data[G+3]=255}K.putImageData(te,0,0);let re=new gt(new nn(2.2,4.1),new on({color:0,alphaMap:new $n(Ee),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));re.rotation.x=-Math.PI/2,re.position.y=.03,re.renderOrder=3,i.add(re)}let Me=new Jt;Me.position.set(.02,1.19,-1.716),t.add(Me);let Le=new Vt(.52,.026,.02);Le.translate(.27,0,0);let we=new gt(_(Le,h),o);we.rotation.z=.18,Me.add(we);let Ge=0,Ke=new da(16773328,0,70,.55,.65,1.2);Ke.position.set(0,.8,1.6),Ke.target.position.set(0,0,18),t.add(Ke,Ke.target);let Oe={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},mt=(Q,ge)=>ge*Math.tanh(Q/ge);return{group:i,lamps:n,lampCol:s,head:Ke,update(Q,ge,Ee,K=0,te=null){if(te){let re=mt(-te.lat*.016,.045),se=mt(-te.lon*.008,.03);Oe.rv+=((re-Oe.roll)*55-Oe.rv*8)*Q,Oe.roll+=Oe.rv*Q,Oe.pv+=((se-Oe.pitch)*60-Oe.pv*9)*Q+te.kick,Oe.pitch+=Oe.pv*Q,Oe.yv+=((te.road-Oe.y)*85-Oe.yv*8)*Q+te.jolt,Oe.y+=Oe.yv*Q,e.rotation.set(Oe.pitch,0,Oe.roll),e.position.y=.35+Oe.y}if(Oe.br+=((te?te.brake:0)-Oe.br)*Math.min(1,Q*14),l.emissiveIntensity=.35+Ee*3.2+Oe.br*(1.7+Ee*2),d.emissiveIntensity=Oe.br*(2.4+Ee*1.6),f.emissiveIntensity=1+Ee*3+Oe.br*(2+Ee*2),K>.15||Ge%2.6>.01){Ge+=Q;let re=Ge%2.6/2.6,se=ve=>ve*ve*(3-2*ve),F=re<.25?se(re/.25):re<.5?se(1-(re-.25)/.25):0;we.rotation.z=.18+F*2.5,K<=.15&&re>=.5&&(Ge=0)}Ke.intensity=Ee*60,p.emissiveIntensity=.15+Ee*2.6}}}var uo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Z2=new _s(-1,1,1,-1,0,1),Xf=class extends yt{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}},$2=new Xf,Ps=class{constructor(e){this._mesh=new gt($2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Z2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ho=class extends li{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Js.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ps(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ba=class extends li{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},vu=class extends li{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var xu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ie);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ho(uo),this.copyPass.material.blending=Vn,this.timer=new pa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ba!==void 0&&(o instanceof Ba?n=!0:o instanceof vu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var _u=class extends li{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Te}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Cm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var fo=class i extends li{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new Te(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,o,{type:pn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let m=new Ut(r,o,{type:pn,depthBuffer:!1});m.texture.name="UnrealBloomPass.h"+h,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);let v=new Ut(r,o,{type:pn,depthBuffer:!1});v.texture.name="UnrealBloomPass.v"+h,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),r=Math.round(r/2),o=Math.round(o/2)}let a=Cm;this.highPassUniforms=Js.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Js.clone(uo.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader,premultipliedAlpha:!0,blending:es,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Te,this._oldClearAlpha=1,this._basic=new on,this._fsQuad=new Ps(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],c=o+1<e?t[o+1]:0,u=a+c;s.push((o*a+(o+1)*c)/u),r.push(u)}return new _t({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new _t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};fo.BlurDirectionX=new Ie(1,0);fo.BlurDirectionY=new Ie(0,1);var qf=class extends li{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Ut(4,4,{type:pn,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),this.mat=new _t({uniforms:{tDiffuse:{value:null},uTexel:{value:new Ie(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new Ps(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},J2={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Ie(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Ie(1/1280,1/720)},uLo:{value:new k(-.014,0,.03)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    // tone mapping + sRGB output and the anime grade in ONE full-screen pass (was OutputPass + a separate grade pass)
    #include <tonemapping_pars_fragment>
    uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uSunVis, uDay, uWarm, uTime, uAspect, uVig, uSat; uniform vec3 uLo; varying vec2 vUv;
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
    }`};function Pm(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new Ie),a=new Ut(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:pn,samples:n}),c=new xu(i,a);c.addPass(new _u(e,t));let u=new qf;c.addPass(u);let h=new fo(new Ie(o.x*r*.5,o.y*r*.5),.42,.55,.86);c.addPass(h);let m=new ho(J2);m.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},m.material.toneMapped=!1,c.addPass(m);let v=c.render.bind(c);return c.render=g=>{m.uniforms.toneMappingExposure.value=i.toneMappingExposure,v(g)},{composer:c,bloom:h,grade:m,refl:u}}function Im(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let K=0;K<2;K++){let te=s.getChannelData(K);for(let re=0;re<n;re++)te[re]=(Math.random()*2-1)*Math.pow(1-re/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=900,a.Q.value=.3;let c=e.createGain();c.gain.value=.11,a.connect(c),c.connect(t),c.connect(r);let u=(K,te)=>{let re=e.createBuffer(1,e.sampleRate*K,e.sampleRate),se=re.getChannelData(0),F=0;for(let ve=0;ve<se.length;ve++)te?(F=(F+.02*(Math.random()*2-1))/1.02,se[ve]=F*3.5):se[ve]=Math.random()*2-1;return re},h=(K,te,re)=>{let se=e.createBufferSource();se.buffer=K,se.loop=!0;let F=e.createBiquadFilter();F.type=te,F.frequency.value=re;let ve=e.createGain();return ve.gain.value=0,se.connect(F),F.connect(ve),ve.connect(t),se.start(),{f:F,g:ve}},m=h(u(2,!0),"lowpass",400),v=h(u(3,!1),"lowpass",700);v.g.connect(r);let g=h(u(2,!1),"bandpass",5200);g.f.Q.value=6;let _=h(u(2,!0),"lowpass",240),b=h(u(3,!1),"bandpass",2600);b.f.Q.value=.35;let l=h(u(2,!0),"lowpass",520),f=h(u(2,!1),"bandpass",1500);f.f.Q.value=.7;let d=e.createBiquadFilter(),x=e.createGain(),p=e.createOscillator(),M=e.createOscillator(),T=e.createGain();p.type="sawtooth",M.type="triangle",d.type="lowpass",d.frequency.value=320,d.Q.value=.6,x.gain.value=0,T.gain.value=.5,p.connect(d),M.connect(T),T.connect(d),d.connect(x),x.connect(t),p.start(),M.start();let E=h(u(3,!1),"bandpass",750);E.f.Q.value=.6;let y=h(u(3,!0),"lowpass",420),S=h(u(2,!0),"lowpass",140),A=u(.03,!1),R=0;function P(K,te){let re=e.createBufferSource(),se=e.createBiquadFilter(),F=e.createGain();re.buffer=A,se.type="bandpass",se.frequency.value=1800+Math.random()*2600,se.Q.value=1.2,F.gain.setValueAtTime(te*(.02+Math.random()*.03),K),F.gain.exponentialRampToValueAtTime(1e-4,K+.03),re.connect(se),se.connect(F),F.connect(t),re.start(K),re.stop(K+.04)}let I=0,C=0;function L(K,te){let re=e.createOscillator(),se=e.createOscillator(),F=e.createGain(),ve=e.createBiquadFilter();ve.type="bandpass",ve.frequency.value=1150,ve.Q.value=2.2,re.type="square",re.frequency.value=745,se.type="triangle",se.frequency.value=1490,F.gain.setValueAtTime(0,K),F.gain.linearRampToValueAtTime(.085*te,K+.004),F.gain.exponentialRampToValueAtTime(1e-4,K+.3),re.connect(ve),se.connect(ve),ve.connect(F),F.connect(t),F.connect(r),re.start(K),se.start(K),re.stop(K+.33),se.stop(K+.33)}function O(K,te){let re=e.createOscillator(),se=e.createGain();re.type="sine",re.frequency.setValueAtTime(110,K),re.frequency.exponentialRampToValueAtTime(48,K+.12),se.gain.setValueAtTime(1e-4,K),se.gain.linearRampToValueAtTime(.22*te,K+.006),se.gain.exponentialRampToValueAtTime(1e-4,K+.17),re.connect(se),se.connect(t),re.start(K),re.stop(K+.2)}let H=e.createGain();H.gain.value=1,H.connect(t);let W=e.createGain();W.gain.value=.35,H.connect(W),W.connect(r);let D=(K=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return H;let te=e.createStereoPanner();return te.pan.value=K,te.connect(H),te};function z(K,te,re,se,F,ve,j="sine",U=0){let w=e.createOscillator(),G=e.createGain();if(w.type=j,w.frequency.setValueAtTime(te,K),w.frequency.exponentialRampToValueAtTime(re,K+se),U){let Y=e.createOscillator(),B=e.createGain();Y.frequency.value=U,B.gain.value=te*.012,Y.connect(B),B.connect(w.frequency),Y.start(K),Y.stop(K+se+.05)}return G.gain.setValueAtTime(1e-4,K),G.gain.linearRampToValueAtTime(F,K+Math.min(.04,se*.25)),G.gain.setValueAtTime(F,K+se*.7),G.gain.exponentialRampToValueAtTime(1e-4,K+se),w.connect(G),G.connect(ve),w.start(K),w.stop(K+se+.02),G}function V(K,te){let re=D(),se=2+Math.floor(Math.random()*4),F=3200+Math.random()*1500;for(let ve=0;ve<se;ve++){let j=K+ve*(.09+Math.random()*.07);z(j,F,F*(1.2+Math.random()*.3),.06,te*.022,re)}}function ee(K,te){let re=D();z(K,1120,1390,1,te*.03,re,"sine",5.5),z(K+1.15,2350,2150,.14,te*.03,re),z(K+1.32,1700,1520,.13,te*.028,re),z(K+1.5,2750,2480,.36,te*.032,re)}function le(K,te){let re=D(),se=1+Math.floor(Math.random()*3);for(let F=0;F<se;F++){let ve=K+F*.48,j=e.createOscillator(),U=e.createBiquadFilter(),w=e.createGain();j.type="sawtooth",j.frequency.setValueAtTime(560,ve),j.frequency.exponentialRampToValueAtTime(420,ve+.32),U.type="bandpass",U.frequency.value=1150,U.Q.value=1.6,w.gain.setValueAtTime(1e-4,ve),w.gain.linearRampToValueAtTime(te*.03,ve+.03),w.gain.exponentialRampToValueAtTime(1e-4,ve+.36),j.connect(U),U.connect(w),w.connect(re),j.start(ve),j.stop(ve+.4)}}function Xe(K,te){let re=D(),se=2+Math.floor(Math.random()*2);for(let F=0;F<se;F++)z(K+F*.42,1750,1150,.36,te*.022,re,"triangle",11)}function Ae(K,te){let re=D(),se=e.createOscillator(),F=e.createBiquadFilter(),ve=e.createGain(),j=240+Math.random()*220,U=5+Math.floor(Math.random()*4);se.type="square",se.frequency.value=j,F.type="bandpass",F.frequency.value=j*2.4,F.Q.value=3,ve.gain.setValueAtTime(1e-4,K);for(let w=0;w<U;w++){let G=K+w*.038;ve.gain.linearRampToValueAtTime(te*.014,G+.008),ve.gain.linearRampToValueAtTime(1e-4,G+.028)}se.connect(F),F.connect(ve),ve.connect(re),se.start(K),se.stop(K+U*.038+.05)}function Be(K,te){let re=D(),se=4300+Math.random()*700;for(let F=0;F<3;F++)z(K+F*.055,se,se*1.01,.035,te*.009,re)}function J(K,te){let re=D(0);for(let[se,F,ve]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let j=e.createOscillator(),U=e.createGain();j.type="sine",j.frequency.value=se,j.detune.value=(Math.random()-.5)*8,U.gain.setValueAtTime(1e-4,K),U.gain.linearRampToValueAtTime(te*.05*F,K+.03),U.gain.exponentialRampToValueAtTime(1e-4,K+ve),j.connect(U),U.connect(re),j.start(K),j.stop(K+ve+.1)}}function Z(K,te){let re=D();for(let se of[K,K+.22])z(se,2650,2600,.5,te*.018,re),z(se,3950,3900,.35,te*.008,re)}let Me={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Le=K=>K>1e-4?-Math.log(1-Math.random()*.98)/K:1e9,we=K=>440*Math.pow(2,(K-69)/12),Ge=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Ke=[72,74,76,79,81,84,86,88],Oe=0,mt=e.currentTime+.2,Q=e.currentTime+3;function ge(K){let te=Ge[Oe++%Ge.length],re=11;for(let se of te)for(let F of[-5,5]){let ve=e.createOscillator(),j=e.createGain();ve.type=F<0?"sine":"triangle",ve.frequency.value=we(se),ve.detune.value=F,j.gain.setValueAtTime(0,K),j.gain.linearRampToValueAtTime(.18,K+3.5),j.gain.setValueAtTime(.18,K+re-4),j.gain.linearRampToValueAtTime(0,K+re+1),ve.connect(j),j.connect(a),ve.start(K),ve.stop(K+re+1.2)}}function Ee(K){let te=Ke[Math.floor(Math.random()*Ke.length)],re=e.createOscillator(),se=e.createOscillator(),F=e.createGain(),ve=e.createGain();re.type=se.type="sine",re.frequency.value=we(te),se.frequency.value=we(te)*2.01,ve.gain.value=.25,se.connect(ve),ve.connect(F),F.gain.setValueAtTime(0,K),F.gain.linearRampToValueAtTime(.05,K+.02),F.gain.exponentialRampToValueAtTime(1e-4,K+4),re.connect(F),F.connect(r),F.connect(t),re.start(K),se.start(K),re.stop(K+4.2),se.stop(K+4.2)}return{ac:e,muted:!1,tyres:f,engG:x,bump(K){O(e.currentTime+.01,K)},update(K,te,re,se={}){let F=e.currentTime;if((se.bell||0)>.01)for(I<F&&(I=F+.02);I<F+.12;)L(I,se.bell),I+=.41;let ve=se.rain||0;b.g.gain.setTargetAtTime(ve*.05,F,.6),l.g.gain.setTargetAtTime(ve*.05,F,.6);let j=(se.wetRoad||0)*Math.min(1,K)**1.5,U=.8+.2*Math.sin(F*2.3)*Math.sin(F*.9+1);if(f.g.gain.setTargetAtTime(j*.045*U,F,.4),f.f.frequency.setTargetAtTime(900+1500*Math.min(K,2),F,.4),ve>.05&&se.roof)for(R<F&&(R=F+.02);R<F+.12;)P(R,ve),R+=.04+Math.random()*.12/ve;let w=se.water||0,G=.6+.4*Math.sin(F*1.3)*Math.sin(F*.37);E.g.gain.setTargetAtTime(w*.035*G,F,.25),E.f.frequency.setTargetAtTime(600+400*G,F,.25);let Y=.35+.65*Math.pow(.5+.5*Math.sin(F*.23)*Math.sin(F*.071+2),2),B=se.rush||0;y.g.gain.setTargetAtTime(((te.mountain||0)+(te.snow||0)*.7)*.06*Y+B*.055,F,.8),y.f.frequency.setTargetAtTime(260+420*Y+B*500,F,.8);let ce=se.train||0;if(_.g.gain.setTargetAtTime(ce*.16,F,.2),ce>.04)for(C<F&&(C=F+.02);C<F+.12;)O(C,ce),O(C+.15,ce*.8),C+=1.2;for(;mt<F+1;)ge(mt),mt+=8;Q<F+.5&&(Ee(Q),Q+=1.5+Math.random()*4.5);let ye=se.tunnel||0;{let X=se.speed||0,Pe=se.load||0,de=850+2400*(1-Math.exp(-X/15))+Math.max(0,X-25)*60+Pe*1300,De=de/40;p.frequency.setTargetAtTime(De,F,.25),M.frequency.setTargetAtTime(De*2,F,.25),d.frequency.setTargetAtTime(200+de*.08+Pe*260,F,.3),x.gain.setTargetAtTime((.008+.01*Math.min(1,X/15)+.024*Pe)*(1-.6*(se.rush||0))*(se.roof===!1?.5:1)*(1+.7*ye),F,.3)}m.g.gain.setTargetAtTime((.03+K*.06)*(1+1.6*ye),F,.35),m.f.frequency.setTargetAtTime((250+K*500)*(1+.5*ye),F,.35),S.g.gain.setTargetAtTime(ye*.07,F,.4),o.gain.setTargetAtTime(.55+.6*ye,F,.4);let oe=.5+.5*Math.sin(F*.55)*Math.sin(F*.21+1);v.g.gain.setTargetAtTime(te.coast*(.012+oe*.05),F,.3),v.f.frequency.setTargetAtTime(400+oe*900,F,.3);let he=1-Math.min(1,ve*1.4),me=1-re,Ce=se.dusk||0,xe=te.snow||0,_e=1-xe,Ue={sparrow:re*he*.22*(.3+te.city*.5+te.sakura+te.country*.8+te.coast*.2+(te.mountain||0)*.5)*(1-xe*.8),uguisu:re*he*te.sakura*.06,crow:he*(Ce*.14+re*(te.city+te.country+(te.mountain||0)*1.5+xe*2.5)*.012),gull:re*te.coast*he*.16,frog:me*(te.country*5+te.sakura*.6+te.coast*.3)*(1+ve*.6)*_e,cricket:me*he*(1.6-te.city*1.1+(te.mountain||0)*.8)*_e,bike:re*he*te.city*.014,bell:xe*.022+(te.mountain||0)*.006},je={sparrow:V,uguisu:ee,crow:le,gull:Xe,frog:Ae,cricket:Be,bike:Z,bell:J};for(let X in Ue)F<Me[X]||(Ue[X]>1e-4&&je[X](F+.05,.6+Math.random()*.4),Me[X]=F+Math.max(.12,Le(Ue[X]||1e-6)));let et=.5+.5*Math.sin(F*7)*Math.sin(F*.4);g.g.gain.setTargetAtTime((te.country+te.sakura*.3)*re*.006*et*(1-(te.snow||0)),F,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function Lm(i){let t=new nn(.075,.05),n=new on({color:16777215,side:En}),s=new ji(t,n,420);s.frustumCulled=!1,s.count=0;let r=new Te("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(p=>new Te(p));for(let p=0;p<420;p++)s.setColorAt(p,r);let a=Array.from({length:420},()=>({p:new k(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),c=new it,u=new Tn,h=new Zn,m=new k(1,1,1),v=new k,g=90,_=new Float32Array(g*3),b=Array.from({length:g},()=>({p:new k(1e9,0,0),ph:Math.random()*6.28})),l=new yt;l.setAttribute("position",new Bt(_,3));let f=new Fr({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:es,opacity:0}),d=new $o(l,f);d.frustumCulled=!1;let x=(p,M,T,E,y)=>{let S=y?8+Math.random()*42:-4+Math.random()*50,A=(Math.random()-.5)*40;p.p.set(M.x+T.x*S+E.x*A,M.y-1+Math.random()*9,M.z+T.z*S+E.z*A)};return{group:[s,d],shift(p,M){for(let T of a)T.p.x-=p,T.p.z-=M;for(let T of b)T.p.x-=p,T.p.z-=M},update(p,M,T,E,y,S,A,R,P,I=0){let C=Math.floor(420*Math.min(1,S*1.1+I*.55)),L=!1;s.count=C;for(let H=0;H<C;H++){let W=a[H];v.subVectors(W.p,T);let D=v.x*E.x+v.z*E.z,z=v.x*y.x+v.z*y.z;if(W.p.x>1e8||D<-6||D>55||Math.abs(z)>24||W.p.y<A-.5){x(W,T,E,y,W.p.x<1e8);let V=Math.random()*(S+I)<I;(V!==W.leaf||V)&&(W.leaf=V,s.setColorAt(H,V?o[Math.floor(Math.random()*o.length)]:r),L=!0)}W.p.y-=W.v*p,W.p.x+=Math.sin(M*.7+W.ph)*.4*p+.25*p,W.p.z+=Math.cos(M*.5+W.ph)*.3*p,h.set(M*W.sp+W.ph,M*W.sp*.7,W.ph),u.setFromEuler(h),m.setScalar(W.leaf?1.9:1),c.compose(W.p,u,m),s.setMatrixAt(H,c)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let O=R*P;if(f.opacity=O,d.visible=O>.01,d.visible){for(let H=0;H<g;H++){let W=b[H];v.subVectors(W.p,T);let D=v.x*E.x+v.z*E.z,z=v.x*y.x+v.z*y.z;if(W.p.x>1e8||D<-4||D>60||Math.abs(z)>30){let V=2+Math.random()*55,ee=(Math.random()-.5)*55;W.p.set(T.x+E.x*V+y.x*ee,A+.3+Math.random()*2.2,T.z+E.z*V+y.z*ee)}W.p.x+=Math.sin(M*.6+W.ph*3)*.3*p,W.p.y+=Math.sin(M*.9+W.ph)*.2*p,W.p.z+=Math.cos(M*.5+W.ph*2)*.3*p,_[H*3]=W.p.x,_[H*3+1]=W.p.y,_[H*3+2]=W.p.z}l.attributes.position.needsUpdate=!0}}}}var ht=new URLSearchParams(location.search),po=ht.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();po&&document.body.classList.add("embed");ht.has("shot")&&document.body.classList.add("shot");tp(ht.has("seed")?parseInt(ht.get("seed")):Math.random()*1e9|0);rp(ht.get("env")||"city");var An=i=>document.getElementById(i),mo=i=>{let e=An("loading");e&&(e.textContent=i)};async function K2(){await new Promise(ue=>setTimeout(ue,30));let i=An("c"),e=new Zc({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ht.get("q")||(po||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?po?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=jt,e.toneMapping=ma,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Xs,e.debug.checkShaderErrors=ht.has("debug");let r=new Vs;r.fog=new Xo(13032946,.0019,700);let o=new Rn(52,innerWidth/innerHeight,.5,7e3),a=new Vr(16777215,3);a.castShadow=!0;let c=n==="low"?1024:n==="mid"?1536:2048;a.shadow.mapSize.set(c,c),gf(ht.has("pcf")?parseInt(ht.get("pcf")):1);let u=62,h=a.shadow.camera,m=new it,v=new it;Object.assign(h,{left:-u,right:u,top:u,bottom:-u,near:1,far:420});let g=new k(0,1,0),_=new k,b=new k,l=new k,f=new k(0,1,0),d=new k(0,150,60),x=new k,p=new k,M=null,T=0,E=0,y=0;a.shadow.updateMatrices=function(){h.position.copy(d),h.lookAt(x),h.updateMatrixWorld(),h.updateProjectionMatrix(),v.multiplyMatrices(h.matrixWorldInverse,m).multiply(h.matrixWorld),h.projectionMatrix.multiply(v),h.projectionMatrixInverse.copy(h.projectionMatrix).invert(),this._updateMatrix(h,this.matrix,this._frustum)};let S=!0;a.shadow.bias=-4e-4;let A=()=>{a.shadow.normalBias=ht.has("nb")?parseFloat(ht.get("nb")):1.5*2*u/a.shadow.mapSize.x};A();{let[ue,ot]=(ht.get("graze")||"0,0.12").split(",").map(Number);dp(ue,ot)}r.add(a,a.target);let R=new Vr(16777215,0);R.castShadow=n!=="low"&&!ht.has("nocarsh");{let ue=ht.has("carsm")?parseInt(ht.get("carsm")):n==="high"?512:384;R.shadow.mapSize.set(ue,ue)}if(Object.assign(R.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),R.shadow.bias=-2e-4,R.shadow.normalBias=.025,r.add(R,R.target),R.castShadow){let ue=a.shadow.getFrustum(),ot=R.shadow.getFrustum();for(let $e of[gt,Zo]){let Dt=$e.prototype.intersectsFrustum;$e.prototype.intersectsFrustum=function(wt){return wt===ot?this.userData.car===!0:(wt!==ue||this.userData.car!==!0)&&Dt.call(this,wt)}}}let P=new ha(10799359,13154464,1.6);r.add(P),mo("painting the town\u2026"),await new Promise(ue=>setTimeout(ue,10));let I=Ap();Lp(I);let C=Rp(e);zp(C.cells),We.uTuftV.value.set(C.tuftV[0],C.tuftV[1]);let L=_p(I.textures(e),C.tex),O=mp();O.update(e,0,0,0,0),mo("painting the clouds\u2026"),await new Promise(ue=>setTimeout(ue,10)),kp(ht.has("leafd")?parseFloat(ht.get("leafd")):n==="high"?.72:.62),Gp();let H=new tu,W=Tm(),D=Em(),z=new mu(r,H,L,W,D),V=dm();r.add(V);let ee=mm(pm(e));r.add(ee.group);let le=gm();r.add(le.group);let Xe=Sm();r.add(Xe.mesh);let Ae=Rm();Ae.group.rotation.order="YXZ",r.add(Ae.group),Ae.group.traverse(ue=>{ue.userData.car=!0});let Be=Lm(L.glowTex);Be.group.forEach(ue=>r.add(ue));let J=ht.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),Z=Pm(e,r,o,{msaa:J==="msaa"?n==="high"?4:2:0,fxaa:J==="fxaa"});We.uReflTex.value=Z.refl.rt.texture;let Me=new k,Le=new k,we=ht.get("refl")||"auto",Ge=ht.has("backlit")?parseFloat(ht.get("backlit")):1,Ke=ht.has("lightson")?parseFloat(ht.get("lightson")):-1,Oe=new k,mt=ht.has("haze")?parseFloat(ht.get("haze")):1,Q=Mp();r.add(Q.group);let ge=bp();r.add(ge.group);let Ee=vm(ht),K=_m(),te=xm();r.add(K.mesh,te.mesh);let re=ym();r.add(re.mesh);let se=Mm();r.add(se.mesh);let F=new Te,ve=new Te,j=new St,U=bm();r.add(U.mesh);let w=Ee.W.rain,G=.4,Y=5.5,B={s:Math.max(100,parseFloat(ht.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:zt(parseFloat(ht.get("t"))||.4,0,.999),todPaused:ht.has("freeze"),dist:0,spray:ht.has("nospray")?0:1,cam:{low:1,eye:2,top:3,film:4}[ht.get("cam")]??(po?4:0)},ce=!1;mo("building the road\u2026"),await new Promise(ue=>setTimeout(ue,10));let ye=po?620:z.ahead;z.ahead=260;let oe=ht.has("detail")?parseFloat(ht.get("detail")):380,he=ht.has("farleaf")?parseFloat(ht.get("farleaf")):540;for(;z.update(B.s,1e9););z.flush(),z.ahead=ye;{mo("preparing the light\u2026"),await new Promise(wt=>setTimeout(wt,10));let ue=new Jt,ot=new yt;ot.setAttribute("position",new Je([0,0,0,.01,0,0,0,.01,0],3)),ot.setAttribute("normal",new Je([0,1,0,0,1,0,0,1,0],3)),ot.setAttribute("uv",new Je([0,0,1,0,0,1],2)),ot.setAttribute("color",new Je([1,1,1,1,1,1,1,1,1],3));let $e=[L.color,L.atlas,L.foliage,L.leaf,L.lamp,L.sig,L.sodium,L.decal,L.pool,W,D];for(let wt=0;wt<Gi.length;wt++)$e.push(Ia([Gi[wt]])),$e.push(Ia([Gi[wt],Gi[(wt+1)%Gi.length]]));for(let wt of $e){let ct=new gt(ot,wt);ct.castShadow=ct.receiveShadow=!0,ct.frustumCulled=!1,ue.add(ct)}ue.position.set(0,0,0),r.add(ue),a.target.position.set(0,0,0),a.position.set(0,150,60);let Dt=[K.mesh,te.mesh,re.mesh,se.mesh,ge.group,Q.group,Xe.mesh].filter(wt=>!wt.visible);for(let wt of Dt)wt.visible=!0;e.setRenderTarget(Z.composer.readBuffer),e.compile(r,o),e.render(r,o),e.setRenderTarget(null);for(let wt of Dt)wt.visible=!1;r.remove(ue),ot.dispose(),Z.bloom.enabled=Z.refl.enabled=!0,Z.composer.render(0),Z.bloom.enabled=Z.refl.enabled=!1}let me={k:Math.ceil((B.s-Qs)/js),phase:"idle",raise:1,decided:!1,t2:0},Ce={},xe={},_e={},Ue=new k,je=new k,et=new k,X=!1,Pe=new k,de=new k,De=An("spd"),ke=An("dist"),Se=An("clock"),nt=An("zone"),Qe=An("start"),It=An("hint"),lt=null,Xn=null,jn=0,Oa=0;function yu(ue){!ce||ue===Xn||(Xn=ue,nt.querySelector(".jp").textContent=Aa[ue].jp,nt.querySelector(".en").textContent=Aa[ue].en,nt.classList.add("on"),clearTimeout(jn),jn=setTimeout(()=>nt.classList.remove("on"),5200))}function or(){if(!ce){if(ce=!0,document.body.classList.remove("pre"),!ht.has("auto"))try{lt=Im(),lt&&lt.ac.resume()}catch{lt=null}Qe.style.opacity=0,setTimeout(()=>Qe.remove(),1500),po||(It.style.opacity=.75,setTimeout(()=>It.style.opacity=0,9e3))}}let yn={};addEventListener("keydown",ue=>{yn[ue.key]=!0,(ue.key==="m"||ue.key==="M")&&vo(),(ue.key==="t"||ue.key==="T")&&Ni(),(ue.key==="c"||ue.key==="C")&&_o(),(ue.key==="r"||ue.key==="R")&&Mo(),!ce&&(ue.key===" "||ue.key==="Enter")&&or()}),addEventListener("keyup",ue=>{yn[ue.key]=!1});let rn=null;i.addEventListener("pointerdown",ue=>{rn={id:ue.pointerId,x:ue.clientX,y:ue.clientY,sy:ue.clientY,sc:B.mult}});let go=ue=>zt(ue.sc*Math.exp(-((ue.y-ue.sy)/innerHeight)*3.4),G,Y);addEventListener("pointermove",ue=>{rn&&ue.pointerId===rn.id&&(rn.x=ue.clientX,rn.y=ue.clientY,B.mult=go(rn))}),addEventListener("pointerup",()=>{rn=null}),addEventListener("pointercancel",()=>{rn=null}),i.addEventListener("touchstart",ue=>{let ot=ue.changedTouches[0];rn={id:"touch",x:ot.clientX,y:ot.clientY,sy:ot.clientY,sc:B.mult},ue.preventDefault()},{passive:!1}),i.addEventListener("touchmove",ue=>{if(!rn)return;let ot=ue.changedTouches[0];rn.x=ot.clientX,rn.y=ot.clientY,B.mult=go(rn),ue.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{rn=null}),i.addEventListener("touchcancel",()=>{rn=null});function vo(){lt&&(lt.toggle(),An("snd").style.opacity=lt.muted?.4:1)}function Ni(){B.todPaused=!B.todPaused,An("tim").style.opacity=B.todPaused?.4:1}let Is=[0,1,2,4],xo={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function _o(){B.cam=Is[(Is.indexOf(B.cam)+1)%Is.length],An("cam").textContent=xo[B.cam]||"\u25D0",B.cam===4&&os()}let Ls=["chase","side","road","crane","eye","side","road"],kt={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function os(){let ue;do ue=Ls[Math.floor(Math.random()*Ls.length)];while(ue===kt.last);{let ot=mi(B.s+60);ot&&Math.abs(B.s+60-ot.s)<tn+120&&(ue=Math.random()<.6?"chase":"eye")}if(Object.assign(kt,{type:ue,last:ue,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),ue==="road"){let ot=B.s+40+Math.random()*18,$e=In(ot,"rw"),Dt=Math.random()<.6?-1:1,wt=Dt*($e+(Dt<0?.9:1.3)),ct=H.at(ot,{}),Ht=ct.y+no(ot,wt,ct.y,$e);kt.anchor={x:ct.x+ct.rx*wt,y:Math.max(Ht,ct.y)+1.05,z:ct.z+ct.rz*wt,s:ot}}X=!1}let yo={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function Mo(){An("wx").textContent=yo[Ee.cycle()]}An("wx").textContent=yo[Ee.W.mode],An("cam").textContent=xo[B.cam]||"\u25D0",B.cam===4&&os(),An("wx").onclick=ue=>{ue.stopPropagation(),Mo()},An("snd").onclick=ue=>{ue.stopPropagation(),vo()},An("tim").onclick=ue=>{ue.stopPropagation(),Ni()},An("cam").onclick=ue=>{ue.stopPropagation(),_o()};let za=0,Mu=ue=>{let ot=performance.now();ot-za<120||(za=ot,ue.cancelable&&ue.type!=="click"&&ue.preventDefault(),or())};for(let ue of["touchstart","pointerdown","mousedown","click"])Qe.addEventListener(ue,Mu,{passive:!1});let bu=()=>{lt&&lt.ac.state!=="running"&&lt.ac.resume()};for(let ue of["touchend","click","keydown"])addEventListener(ue,bu,{passive:!0});document.addEventListener("visibilitychange",()=>{lt&&(document.hidden?lt.ac.suspend():lt.ac.resume())});let Ds=!1,bo="",N=52,$=0;function ae(){let ue=innerWidth,ot=innerHeight,$e=ue/ot,Dt=ue+"x"+ot+"@"+s;Dt!==bo&&(bo=Dt,e.setPixelRatio(s),e.setSize(ue,ot,!1),Z.composer.setPixelRatio(s),Z.composer.setSize(ue,ot),o.aspect=$e,N=$e>=1?52:zt(2*Math.atan(Math.tan(34*Math.PI/180)/$e)*180/Math.PI,52,80),o.fov=N+$,o.updateProjectionMatrix(),Z.grade.uniforms.uAspect.value=$e,Z.grade.uniforms.uTexel.value.set(1/Z.composer.readBuffer.width,1/Z.composer.readBuffer.height),We.uReflRes.value.set(Z.composer.readBuffer.width,Z.composer.readBuffer.height))}addEventListener("resize",()=>{Ds=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Ds=!0}),ae();let ne=0;function ie(ue=!0){if(s>1.05)s=Math.max(1,s-.25),Ds=!0;else if(S)S=!1,Z.bloom.enabled=!1;else if(a.shadow.mapSize.x>1024)a.shadow.mapSize.set(1024,1024),A(),a.shadow.map&&(a.shadow.map.dispose(),a.shadow.map=null);else if(z.ahead>430)z.ahead=430;else return;if(ne++,ue)try{localStorage.setItem("icd-q",String(ne))}catch{}}try{let ue=parseInt(localStorage.getItem("icd-q")||"0");if(!ht.has("q"))for(let ot=0;ot<Math.min(ue,6);ot++)ie(!1);ne=Math.max(ne,ue||0)}catch{}let He=performance.now(),Fe=0,ze=0,Ye=0,Ze=()=>1-pe.night,vt=0,tt=0,Re=ht.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;Re&&(Re.gl=e.getContext(),Re.tq=Re.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let xt={p:-1,a:new k,b:new k,next:5},st={lat:0,lon:0,road:0,jolt:0,kick:0,u:B.u,vu:0,v:0,s:B.s,yaw:0,brake:0,rk:NaN,rb:null},Ft=new Te(3.6,2.8,1.8),Lt=[-2.5335,-1.4665,1.4665,2.5335],mn=[1.12,-1.12],qe=[-24.5,24.5];function Mn(ue){requestAnimationFrame(Mn);let ot=performance.now();Ds&&(Ds=!1,ae());let $e=Math.min(.05,Math.max(0,(ue-He)/1e3));He=ue,Fe+=$e,B.steer=0,(yn.ArrowLeft||yn.a||yn.A)&&(B.steer=-1),(yn.ArrowRight||yn.d||yn.D)&&(B.steer=1),(yn.ArrowUp||yn.w||yn.W)&&(B.mult=zt(B.mult*Math.exp($e*.9),G,Y)),(yn.ArrowDown||yn.s||yn.S)&&(B.mult=zt(B.mult*Math.exp(-$e*.9),G,Y)),rn&&Math.abs(rn.y-rn.sy)<30&&(B.steer=rn.x<innerWidth/2?-1:1),B.steer&&(B.lastInput=ue,B.uHome=B.u);let Dt=Qr(me.k);B.s-Dt>24&&(me.k++,Dt=Qr(me.k),Object.assign(me,{phase:"idle",raise:1,decided:!1}));let wt=Ra(Dt),ct=Dt-B.s;wt&&!me.decided&&ct<150&&(me.decided=!0,ct>75&&ce&&B.speed*B.speed/2.5<ct-14&&(ht.has("xing")||oi(me.k,99)<.8)&&(me.phase="warn",ge.start(Dt,oi(me.k,7)<.5?1:-1,16))),me.phase==="warn"?(me.raise=Math.max(0,me.raise-$e/6),ge.st.cleared&&(me.phase="clear",me.t2=0)):me.phase==="clear"?(me.raise=Math.max(0,me.raise-$e/6),(me.t2+=$e)>2.2&&(me.phase="raise")):me.phase==="raise"&&(me.raise=Math.min(1,me.raise+$e/5),me.raise>=1&&(me.phase="idle"));let Ht=me.phase==="warn"||me.phase==="clear"||me.phase==="raise"&&me.raise<.25,Qn=In(B.s,"speed")*B.mult*(ce?1:.55);if(me.phase!=="idle"&&me.raise<.8&&ct>0){let Ne=ct-11.2,rt=Ne>0?Math.sqrt(2*1.25*Ne):0;Qn=Math.min(Qn,rt),B.speed=Math.min(B.speed,rt)}ht.has("park")&&(Qn=0,B.speed=0),B.speed+=(Qn-B.speed)*Math.min(1,$e*.5),B.s+=B.speed*$e,B.dist+=B.speed*$e;let Rt=In(B.s,"rw");B.steer?B.u=zt(B.u+B.steer*$e*2.4,-Rt+.85,Rt-.85):ue-B.lastInput>3e3&&(B.u+=(zt(B.uHome,-Rt+.85,Rt-.85)+Math.sin(Fe/11)*.1-B.u)*Math.min(1,$e*.9)),!B.todPaused&&ce&&(B.tod=(B.tod+$e/480*(pe.night>.5?1.7:1))%1),um(B.tod),Ee.update($e);let Gt=Ee.W.ov,Dn=Ee.W.rain;fm(Gt,Dn),w=zt(w+(Dn>.25?$e/18:-$e/120),0,1);let So=performance.now();z.update(B.s,ce?3.5:14);let Yf=performance.now();if(H.at(B.s,Ce),Math.abs(Ce.x-z.origin.x)>900||Math.abs(Ce.z-z.origin.z)>900){let Ne=Math.round(Ce.x)-z.origin.x,rt=Math.round(Ce.z)-z.origin.z;z.setOrigin(Math.round(Ce.x),Math.round(Ce.z)),Ue.x-=Ne,Ue.z-=rt,je.x-=Ne,je.z-=rt,Be.shift&&Be.shift(Ne,rt),U.shift(Ne,rt),re.shift(Ne,rt)}let _i=z.origin.x,yi=z.origin.z,Dm=(H.at(B.s+1.5,_e).y-H.at(B.s-1.5,xe).y)/3,Nm=(_e.h-xe.h)/3;if(Ae.group.position.set(Ce.x+Ce.rx*B.u-_i,Ce.y+.01,Ce.z+Ce.rz*B.u-yi),$e>0){let Ne=st.vu+((B.u-st.u)/$e-st.vu)*Math.min(1,$e*6),rt=(Ne-st.vu)/$e;st.u=B.u,st.vu=Ne,st.lat=rt-B.speed*B.speed*Nm,st.lon+=((B.speed-st.v)/$e-st.lon)*Math.min(1,$e*8),st.v=B.speed;let at=me.phase!=="idle"&&ct>0&&ct<20&&B.speed<.5;if(st.brake=st.lon<-.6||at?1:st.lon>-.3?0:st.brake,st.yaw=-zt(Math.atan(Ne/Math.max(B.speed,6))*.8,-.1,.1),st.road=.004*Math.sin(B.s*.48)+.003*Math.sin(B.s*.86+1.3),st.jolt=st.kick=0,wt)for(let Tt=0;Tt<4;Tt++)for(let Wt=0;Wt<2;Wt++){let Xt=Dt+Lt[Tt]-mn[Wt];if(st.s<Xt&&B.s>=Xt){let qt=.05+Math.min(B.speed,25)*.004;st.jolt+=qt,st.kick+=Wt?qt*.9:-qt*.9,lt&&lt.bump(.25+Math.min(B.speed,25)/50)}}{let Tt=Math.round((B.s-to)/er);Tt!==st.rk&&(st.rk=Tt,st.rb=Wi(B.s));let Wt=st.rb;if(Wt)for(let Xt=0;Xt<2;Xt++)for(let qt=0;qt<2;qt++){let qn=Wt.s+qe[Xt]-mn[qt];if(st.s<qn&&B.s>=qn){let bn=.035+Math.min(B.speed,25)*.003;st.jolt+=bn,st.kick+=qt?bn*.9:-bn*.9,lt&&lt.bump(.2+Math.min(B.speed,25)/60)}}}st.s=B.s}Ae.group.rotation.set(-Math.atan(Dm),Ce.h+st.yaw,0);let Ns=mi(B.s);Ns&&Math.abs(B.s-Ns.s)<700?(H.at(Ns.s-sn,_e),We.uTunA.value.set(_e.x-_i,_e.y,_e.z-yi),H.at(Ns.s+sn,_e),We.uTunB.value.set(_e.x-_i,_e.y,_e.z-yi),We.uTunR.value=In(Ns.s,"rw")+1.7):(We.uTunA.value.set(0,-1e4,0),We.uTunB.value.set(0,-1e4,0));let Su=Ns&&Math.abs(B.s+1-Ns.s)<sn-1.5?1:0;tt+=(Su-tt)*Math.min(1,$e*(Su?1.6:.7)),We.uCarPos.value.set(Ae.group.position.x+Ce.fx*1.7,Ae.group.position.y+.8,Ae.group.position.z+Ce.fz*1.7),We.uCarFwd.value.set(Ce.fx,-.05,Ce.fz).normalize(),We.uHead.value=Su,Ae.update($e,B.speed,Math.max(pe.night,tt),Dn,st),Q.update(wt&&ct>-24&&ct<700?au(H,Dt):null,z.origin,me.raise,Ht,Fe),ge.update($e,H,z.origin,At(.15,.8,pe.night),In(Dt,"rw")+3.2);let Tu=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ht.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(ht.has("rig")){let[Ne,rt,at,Tt]=ht.get("rig").split(",").map(Number);Object.assign(Tu[0],{back:Ne,up:rt,ahead:at,lookY:Tt})}let Us=new k,To=6,Zf=B.cam===2;if(B.cam===4){kt.t+=$e;{let at=mi(B.s+30);at&&Math.abs(B.s+30-at.s)<tn+70&&kt.type!=="chase"&&kt.type!=="eye"&&(kt.type="chase",kt.t=0,kt.dur=20,X=!1)}(kt.t>kt.dur+(kt.type==="road"?8:0)||kt.type==="road"&&kt.anchor&&B.s>kt.anchor.s+24)&&os();let Ne=Ae.group.position,rt=kt.type;if(rt==="chase"||rt==="eye"){let at=Tu[rt==="eye"?2:0];Zf=rt==="eye",H.at(B.s-at.back,xe),H.at(B.s+at.ahead,_e),et.set(xe.x+xe.rx*B.u*at.cu-_i,xe.y+at.up,xe.z+xe.rz*B.u*at.cu-yi),Us.set(_e.x+_e.rx*B.u*at.lu-_i,_e.y+at.lookY,_e.z+_e.rz*B.u*at.lu-yi)}else if(rt==="side"){H.at(B.s+1.5,xe);let at=Nt(B.s),Tt=at.city+at.sakura>.5,Wt=In(B.s,"rw"),Xt=kt.sideSign>0?Wt+(Tt?1.45:3.4):-(Wt+1.5),qt=xe.y+no(B.s+1.5,Xt,xe.y,Wt);et.set(xe.x+xe.rx*Xt-_i,Math.max(qt+1.55,xe.y+1.25),xe.z+xe.rz*Xt-yi),Us.set(Ne.x+Ce.fx*2.5,Ne.y+.9,Ne.z+Ce.fz*2.5),To=4}else if(rt==="road"&&kt.anchor)et.set(kt.anchor.x-_i,kt.anchor.y,kt.anchor.z-yi),Us.set(Ne.x,Ne.y+.85,Ne.z),To=30;else{H.at(B.s-20,xe),H.at(B.s+34,_e);let at=14+Math.min(kt.t,20)*.35;et.set(xe.x+xe.rx*B.u*.4-_i,xe.y+at,xe.z+xe.rz*B.u*.4-yi),Us.set(_e.x-_i,_e.y+1,_e.z-yi),To=3}}else{let Ne=Tu[B.cam];H.at(B.s-Ne.back,xe),H.at(B.s+Ne.ahead,_e);let rt=B.u*Ne.cu,at=rt+(Ne.side||0);et.set(xe.x+xe.rx*at-_i,xe.y+Ne.up,xe.z+xe.rz*at-yi),Us.set(_e.x+_e.rx*B.u*Ne.lu-_i,_e.y+Ne.lookY,_e.z+_e.rz*B.u*Ne.lu-yi)}Ae.group.visible=!Zf,B.cam===3?o.up.set(Ce.fx,0,Ce.fz):o.up.set(0,1,0),X||(Ue.copy(et),je.copy(Us),X=!0);let $f=1+Math.max(0,B.speed-12)/12;Ue.lerp(et,1-Math.exp(-$e*To*$f)),je.lerp(Us,1-Math.exp(-$e*Math.min(To,8)*$f));{let Ne=B.cam===3?0:Math.min(zt((B.speed-16)*.22,0,11),Math.max(0,84-N));$+=(Ne-$)*Math.min(1,$e*1.5),Math.abs(o.fov-(N+$))>.02&&(o.fov=N+$,o.updateProjectionMatrix())}o.position.copy(Ue),o.lookAt(je),ht.has("yaw")&&o.rotateY(parseFloat(ht.get("yaw"))*Math.PI/180),ht.has("pitch")&&o.rotateX(parseFloat(ht.get("pitch"))*Math.PI/180),Pe.set(Ce.fx,0,Ce.fz),de.set(Ce.rx,0,Ce.rz);let $t=Nt(B.s),Eu=1+.25*pe.bright*(1-tt);a.color.copy(pe.sunCol),a.intensity=pe.sunI/Eu;{let Ne=pe.lightDir;if(g.angleTo(Ne)>.1){let bn=0;if(ce&&!B.todPaused)for(let zn=1;zn<=60&&!(Hf(B.tod+zn*.001,p).angleTo(Ne)>.09);zn++)bn=zn;Hf(B.tod+bn*.001,g),T=E=0}_.crossVectors(f,g).normalize(),b.crossVectors(g,_),l.set(Ae.group.position.x+Ce.fx*26,Ae.group.position.y,Ae.group.position.z+Ce.fz*26),a.target.position.copy(l),a.position.copy(l).addScaledVector(Ne,200);let rt=2*u/a.shadow.mapSize.x,at=g.x/g.y-Ne.x/Ne.y,Tt=g.z/g.y-Ne.z/Ne.y;rt!==y&&(y=rt,T=E=0);{let bn=Math.round(Ae.group.position.y);if(M===null)M=bn;else if(Math.abs(Ae.group.position.y-M)>3){let zn=bn-M;T-=zn*(at*_.x+Tt*_.z),E-=zn*(at*b.x+Tt*b.z),M=bn}}let Wt=z.origin.x,Xt=z.origin.z,qt=l.dot(_)+Wt*_.x+Xt*_.z-T,qn=l.dot(b)+Wt*b.x+Xt*b.z-E;l.addScaledVector(_,Math.round(qt/rt)*rt-qt).addScaledVector(b,Math.round(qn/rt)*rt-qn),x.copy(l),d.copy(l).addScaledVector(g,200),m.set(1,at,0,-M*at,0,1,0,0,0,Tt,1,-M*Tt,0,0,0,1)}R.target.position.set(Ae.group.position.x,Ae.group.position.y+.9,Ae.group.position.z),R.position.copy(R.target.position).addScaledVector(pe.lightDir,12),P.color.copy(pe.hemiSky),P.groundColor.copy(pe.hemiGround),P.intensity=pe.hemiI/Eu;{let Ne=(1-pe.night)*(1-Gt);if(Ne>.001){o.getWorldDirection(Oe);let rt=Oe.x,at=Oe.z,Tt=Math.hypot(rt,at)||1,Wt=pe.sunDir,Xt=0;for(let qn=-2;qn<=2;qn++){let bn=qn*.3,zn=Math.cos(bn),Fs=Math.sin(bn),lr=(rt*zn-at*Fs)/Tt,cr=(rt*Fs+at*zn)/Tt,Eo=Math.max(0,lr*Wt.x+cr*Wt.z),ur=Eo*Eo;Xt+=ur*ur*ur}let qt=Xt/5*(.1+.35*pe.warm)*1.4*Ne*mt;pe.fog.r+=pe.sunCol.r*qt,pe.fog.g+=pe.sunCol.g*qt,pe.fog.b+=pe.sunCol.b*qt}}r.fog.color.copy(pe.fog);let Jf=($t.city*.0022+$t.sakura*.0019+$t.coast*.0011+$t.country*.0014+$t.mountain*.0017+$t.snow*.0021)*(1+pe.night*.25);r.fog.near=Jf*(1+.55*Gt+.45*Dn),r.fog.far=z.ahead*.92,We.uSkyHor.value.copy(pe.horizon),We.uSkyZen.value.copy(pe.zenith),We.uTime.value=Fe,We.uWet.value=w*(1-$t.snow);{let Ne=We.uWet.value>.04&&n!=="low"&&tt<.5&&we!=="0";if(Z.refl.enabled=Ne&&we!=="taps",We.uReflOn.value=Ne&&we!=="copy"?1:0,Ne){o.getWorldDirection(Le),Le.y=0,Le.normalize(),Me.copy(o.position).addScaledVector(Le,1e4).project(o),We.uHorizon.value=Me.y*.5+.5;let rt=Math.max(.5,o.position.y-Ae.group.position.y);We.uReflK.value=zt(1-2*rt/(5+rt),.05,1)}}We.uOrigin.value.set(z.origin.x,z.origin.z),We.uWind.value=1+.8*Dn,We.uCloudSh.value=(1-Gt)*At(.04,.3,pe.sunEl)*(1-pe.night),We.uCloudSh.value>.001&&O.update(e,o.position.x,o.position.z,z.origin.x,z.origin.z);let ei=V.material.uniforms;if(ei.uBright.value=pe.bright,ei.uNight.value=pe.night,ei.uWarm.value=pe.warm,ei.uTime.value=Fe,ei.uCirrusCol.value.copy(pe.cLit).lerp(pe.horizon,.25),ei.uCirrus.value=.6*(1-Gt)*(1-.65*At(.4,.9,pe.night)),ei.uOvercast.value=Gt,ei.uMilky.value=At(.55,.95,pe.night)*(1-Gt),pe.night>.65&&Gt<.3&&xt.p<0&&(xt.next-=$e)<0){let Ne=Math.atan2(Ce.fx,Ce.fz)+(Math.random()-.5)*1.5,rt=.45+Math.random()*.6,at=.22+Math.random()*.2,Tt=(Math.random()-.5)*.6,Wt=(Xt,qt)=>new k(Math.cos(Xt)*Math.sin(qt),Math.sin(Xt),Math.cos(Xt)*Math.cos(qt));xt.a.copy(Wt(rt,Ne)),xt.b.copy(Wt(rt-at,Ne+Tt)),xt.p=0,xt.next=ht.has("meteors")?1:6+Math.random()*20}xt.p>=0&&(xt.p+=$e/.85,xt.p>1.3&&(xt.p=-1)),ei.uMetP.value=xt.p,ei.uMetA.value.copy(xt.a),ei.uMetB.value.copy(xt.b),ei.uDeckLit.value.copy(pe.horizon).lerp(pe.cLit,.35),ei.uDeckDark.value.copy(pe.zenith).lerp(pe.horizon,.25).multiplyScalar(.82),V.position.copy(o.position),ee.update(o.position,$e),le.update(o.position,Math.max($t.snow,Nt(B.s+600).snow*.7));let ka=0;for(let Ne of[-150,0,250,500,800])ka=Math.max(ka,Nt(B.s+Ne).coast);Xe.mesh.visible=ka>.001,Xe.update(o.position,Fe,Jf*.8,At(0,.35,ka)),D.uniforms.uTime.value=Fe,D.uniforms.uFogD.value=r.fog.near,D.uniforms.uNight.value=pe.night,D.uniforms.uSpecK.value=1-pe.overcast*.85,We.uSunDir.value.copy(pe.lightDir),We.uSunCol.value.copy(pe.sunCol),W.uniforms.uTime.value=Fe,W.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*Ze());let ci=At(.15,.8,pe.night);L.atlas.emissiveIntensity=.1+ci*1.05,We.uBacklit.value=Ge*1.6*(1-Gt)*(1-pe.night)*At(0,.08,pe.sunEl)*(1-At(.25,.55,pe.sunEl))*(1-tt),We.uLightsOn.value=Ke>=0?Ke:Math.max(At(.02,.75,pe.night),.3*Gt),L.lamp.color.setRGB(.85,.85,.8).lerp(Ft,ci),L.pool.opacity=ci*.42*(1+.8*w);{let Ne=Ae.group.position,rt=Ae.lamps,at=Math.max(ci,tt),Tt=0,Wt=0,Xt=0,qt=-1e3,qn=0,bn=0,zn=-1e3,Fs=0,lr=900,cr=900;if(at>.01){let Qf=Math.floor(B.s/Zt);for(let wu=Qf-1;wu<=Qf+1;wu++){let Va=z.chunks.get(wu);if(!Va||!Va.lamps)continue;let wo=Va.lamps,ed=Va.group.position;for(let hr=0;hr<wo.length;hr+=4){let Au=wo[hr]+ed.x,Ru=wo[hr+1],Cu=wo[hr+2]+ed.z,Pu=(Au-Ne.x)**2+(Ru-Ne.y)**2+(Cu-Ne.z)**2,Ga=wo[hr+3]/(1+.045*Pu);Ga>Tt?(Wt=Tt,cr=lr,bn=Xt,zn=qt,Fs=qn,Tt=Ga,lr=Pu,Xt=Au,qt=Ru,qn=Cu):Ga>Wt&&(Wt=Ga,cr=Pu,bn=Au,zn=Ru,Fs=Cu)}}o.updateMatrixWorld()}let Eo=at*Tt*(1+.045*lr)*(1-At(18,30,Math.sqrt(lr))),ur=at*Wt*(1+.045*cr)*(1-At(18,30,Math.sqrt(cr)));rt[0].set(Xt,qt,qn,1).applyMatrix4(o.matrixWorldInverse).w=Eo,rt[1].set(bn,zn,Fs,1).applyMatrix4(o.matrixWorldInverse).w=ur,Ae.lampCol.setRGB(1,.8-.32*tt,.52-.38*tt),vi.uLampW.value[0].set(Xt,qt,qn,Eo),vi.uLampW.value[1].set(bn,zn,Fs,ur),vi.uLampCol.value.copy(Ae.lampCol),Ae.head.getWorldPosition(vi.uHeadPos.value),Ae.head.target.getWorldPosition(Oe),vi.uHeadDir.value.copy(Oe).sub(vi.uHeadPos.value).normalize(),vi.uHeadI.value=Ae.head.intensity/60}L.pool.visible=L.pool.opacity>.003,z.lod(B.s,oe,ci>.15,he),We.uNight.value=ci,Z.bloom.strength=Pt(.32,.55,ci),Z.bloom.threshold=Pt(1.35,.95,ci),Z.bloom.radius=Pt(.55,.35,ci);{let Ne=Math.max(ci,tt,At(.25,.6,pe.warm)*(1-Gt));Z.bloom.enabled=S&&Ne>.02,Z.bloom.strength*=Math.min(1,Ne*4)}e.toneMappingExposure=Pt(1,1.15,ci)*(1+.35*tt)*Eu,et.copy(o.position).addScaledVector(pe.sunDir,1e3).project(o);let as=Z.grade.uniforms,Um=et.z<1?1:0,Fm=Math.max(Math.abs(et.x),Math.abs(et.y));as.uSun.value.set(et.x*.5+.5,et.y*.5+.5),as.uSunVis.value=Um*(1-At(1,1.9,Fm))*At(-.02,.15,pe.sunEl)*(1-pe.night)*(1-Gt)*(1-tt),as.uSat.value=1.22-.24*Gt,as.uVig.value=.55-.43*pe.bright,as.uLo.value.set(-.014+.026*pe.bright,0,.03),as.uDay.value=Ze(),as.uWarm.value=pe.warm,as.uTime.value=Fe,K.update(o.position,Fe,Dn*(1-tt)*(1-$t.snow),Ze());{let Ne=mi(B.s+190),rt=($t.city+$t.country+$t.coast)*(1-Gt)*(1-w)*At(.6,.9,pe.sunEl)*(B.mirage??1)*(Ne&&Math.abs(B.s+190-Ne.s)<330?0:1);se.update(H,B.s,z.origin.x,z.origin.z,In(B.s+150,"rw"),rt,Fe,pe.horizon)}{let Ne=zt($t.snow+$t.mountain*.6*Math.max(pe.night,1-At(.27,.36,B.tod)),0,1)*(1-tt);F.copy(pe.fog).multiplyScalar(.92),ve.copy(pe.sunCol).multiplyScalar(Math.min(1,pe.sunI/3)*(1-Gt)*.6);let rt=Math.cos(Ae.group.rotation.y),at=Math.sin(Ae.group.rotation.y),Tt=Ae.group.position;j.set(Tt.x-1.75*at,Tt.y+.95,Tt.z-1.75*rt,Math.max(pe.night,tt)*(.5+1.2*st.brake)),re.update($e,Ae.group,B.speed,We.uWet.value*(1-tt),$t.snow*(1-tt),Ne,F,ve,j,o.position,B.spray)}te.update(o.position,Fe,$t.snow*(.3+.7*Gt)*(1-tt),Ze()),U.setFog(r.fog.near),U.update($e,Fe,o.position,Pe,de,$t,Ze(),Dn,Ae.group.position);let Bm=performance.now();Be.update($e,Fe,o.position,Pe,de,$t.sakura*(1-tt),Ce.y,ci,($t.country+$t.sakura*.4)*(1-Dn)*(1-tt),$t.mountain*(1-tt));let Om=performance.now();if(lt){H.at(Dt,_e);let Ne=Math.hypot(_e.x-z.origin.x-o.position.x,_e.z-z.origin.z-o.position.z),rt=ge.st.active?ge.group.position.distanceTo(o.position):1e9,at=B.speed/15;lt.update(at<1.5?at:1.5+(at-1.5)*.4,$t,Ze(),{rush:zt((B.speed-25)/40,0,1),bell:Ht?Math.pow(zt(1-Ne/260,0,1),1.5):0,train:Math.pow(zt(1-rt/230,0,1),2),rain:Dn*(1-tt)*(1-$t.snow),wetRoad:We.uWet.value*(1-tt),speed:B.speed,load:zt(st.lon/3,0,1),roof:B.cam!==2,tunnel:tt,water:(()=>{let Tt=Wi(B.s);return Math.max(Tt?1-At(12,150,Math.abs(B.s-Tt.s)):0,$t.mountain*.45)})(),dusk:pe.warm*(B.tod>.5?1:.3)})}yu(en(B.s+40)),Re&&(e.info.autoReset=!1,e.info.reset());let Ha=null;Re&&Re.tq&&(Ha=Re.gl.createQuery(),Re.gl.beginQuery(Re.tq.TIME_ELAPSED_EXT,Ha));let Kf=performance.now();Z.composer.render($e);let jf=performance.now();if(Ha){let Ne=Re.gl;for(Ne.endQuery(Re.tq.TIME_ELAPSED_EXT),Re.pend.push(Ha);Re.pend.length&&Ne.getQueryParameter(Re.pend[0],Ne.QUERY_RESULT_AVAILABLE);){let rt=Re.pend.shift(),at=Ne.getQueryParameter(rt,Ne.QUERY_RESULT);Ne.deleteQuery(rt),Ne.getParameter(Re.tq.GPU_DISJOINT_EXT)||(Re.gpu=at/1e6,Re.gpuN++,Re.gpuSum+=Re.gpu,Re.gpu>Re.gpuMax&&(Re.gpuMax=Re.gpu))}}let ar=window.__pb||(window.__pb={world:0,parts:0,render:0});if(ar.world=ar.world*.95+(Yf-So)*.05,ar.parts=ar.parts*.95+(Om-Bm)*.05,ar.render=ar.render*.95+(jf-Kf)*.05,vt=vt*.95+(performance.now()-ot)*.05,window.__ft=vt,Re){let Ne=e.info,rt=performance.now()-ot,at={t:+Fe.toFixed(2),s:Math.round(B.s),total:+rt.toFixed(1),world:+(Yf-So).toFixed(1),render:+(jf-Kf).toFixed(1),gpu:+(Re.gpu||0).toFixed(1),progs:Ne.programs.length-Re.progs,geos:Ne.memory.geometries-Re.geos,tex:Ne.memory.textures-Re.tex,calls:Ne.render.calls,tris:Ne.render.triangles};at.progs>0&&ce&&(at.newProgs=Ne.programs.slice(-at.progs).map(Tt=>(Tt.name||"")+":"+String(Tt.cacheKey).slice(0,60))),Re.progs=Ne.programs.length,Re.geos=Ne.memory.geometries,Re.tex=Ne.memory.textures,Re.frames++,Re.sum+=rt,rt>Re.max&&(Re.max=rt),rt>12&&ce&&Re.spikes.push(at),Re.last=at}if((Oa+=$e)>.25){Oa=0,De.textContent=Math.round(B.speed*3.6),ke.textContent=(B.dist/1e3).toFixed(1);let Ne=Math.floor(B.tod*1440);Se.textContent=`${String(Math.floor(Ne/60)).padStart(2,"0")}:${String(Ne%60).padStart(2,"0")}`}ze++,ce&&ze>150&&$e>.03?Ye+=$e:Ye=Math.max(0,Ye-$e*.5),Ye>3&&!ht.has("q")&&(Ye=0,ie())}window.__dbg={renderer:e,st:B,scene:r,camera:o,world:z,TOD:pe,KEYS:ao,X:me,train:ge,weather:Ee,U:We,birds:U,cine:kt,post:Z,car:Ae,sun:a,M:L,clouds:ee,sky:V,mountains:le,shadowDir:g,CM:st,spray:re,get audio(){return lt}},mo(""),Qe.classList.add("ready"),ht.has("auto")&&or(),requestAnimationFrame(Mn)}K2().catch(i=>{console.error(i),mo("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
