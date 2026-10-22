var Dd=0,mh=1,Nd=2;var Ws=1,Ud=2,Gr=3,ys=0,Cn=1,Tn=2,Vn=0,Wr=1,Qi=2,gh=3,vh=4,Fd=5;var Xs=100,Bd=101,Od=102,zd=103,kd=104,Hd=200,Vd=201,Gd=202,Wd=203,xh=204,_h=205,Xd=206,qd=207,Yd=208,Zd=209,$d=210,Jd=211,Kd=212,jd=213,Qd=214,vl=0,xl=1,_l=2,Rr=3,yl=4,Ml=5,bl=6,Sl=7,yh=0,e0=1,t0=2,wi=0,Mh=1,bh=2,Sh=3,Th=4,Eh=5,wh=6,pa=7;var Ah=300,Ms=301,qs=302,tc=303,nc=304,ma=306,Cr=1e3,Fi=1001,Tl=1002,fn=1003,n0=1004;var ga=1005;var Ot=1006,ic=1007;var Gn=1008;var Fn=1009,Rh=1010,Ch=1011,Xr=1012,sc=1013,Ai=1014,pi=1015,pn=1016,rc=1017,oc=1018,qr=1020,Ph=35902,Ih=35899,Lh=1021,Dh=1022,Jn=1023,Bi=1026,bs=1027,Ys=1028,ac=1029,Ss=1030,lc=1031;var cc=1033,va=33776,xa=33777,_a=33778,ya=33779,uc=35840,hc=35841,fc=35842,dc=35843,pc=36196,mc=37492,gc=37496,vc=37488,xc=37489,Ma=37490,_c=37491,yc=37808,Mc=37809,bc=37810,Sc=37811,Tc=37812,Ec=37813,wc=37814,Ac=37815,Rc=37816,Cc=37817,Pc=37818,Ic=37819,Lc=37820,Dc=37821,Nc=36492,Uc=36494,Fc=36495,Bc=36283,Oc=36284,ba=36285,zc=36286;var Bo=2300,El=2301,ml=2302,ih=2303,sh=2400,rh=2401,oh=2402;var i0=3200;var kc=0,s0=1,Ri="",jt="srgb",Oo="srgb-linear",zo="linear",Ct="srgb";var gl=7680;var r0=519,o0=512,a0=513,l0=514,Hc=515,c0=516,u0=517,Vc=518,h0=519,f0=35044;var Nh="300 es",Ei=2e3,Pr=2001;function Bm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Om(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function d0(){let i=ko("canvas");return i.style.display="block",i}var Qf={},Ir=null;function Uh(...i){let e="THREE."+i.shift();Ir?Ir("log",e,...i):console.log(e,...i)}function p0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ut(...i){i=p0(i);let e="THREE."+i.shift();if(Ir)Ir("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dt(...i){i=p0(i);let e="THREE."+i.shift();if(Ir)Ir("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ks(...i){let e=i.join(" ");e in Qf||(Qf[e]=!0,ut(...i))}function m0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var g0={[vl]:xl,[_l]:bl,[yl]:Sl,[Rr]:Ml,[xl]:vl,[bl]:_l,[Sl]:yl,[Ml]:Rr},Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pu=Math.PI/180,Ho=180/Math.PI;function Yr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function zm(i,e){return(i%e+e)%e}function Iu(i,e,t){return(1-t)*i+t*e}function wo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Hh=class Hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hh.prototype.isVector2=!0;var Ie=Hh,Sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],u=n[s+1],h=n[s+2],m=n[s+3],g=r[o+0],v=r[o+1],_=r[o+2],S=r[o+3];if(m!==S||c!==g||u!==v||h!==_){let l=c*g+u*v+h*_+m*S;l<0&&(g=-g,v=-v,_=-_,S=-S,l=-l);let f=1-a;if(l<.9995){let d=Math.acos(l),x=Math.sin(d);f=Math.sin(f*d)/x,a=Math.sin(a*d)/x,c=c*f+g*a,u=u*f+v*a,h=h*f+_*a,m=m*f+S*a}else{c=c*f+g*a,u=u*f+v*a,h=h*f+_*a,m=m*f+S*a;let d=1/Math.sqrt(c*c+u*u+h*h+m*m);c*=d,u*=d,h*=d,m*=d}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],u=n[s+2],h=n[s+3],m=r[o],g=r[o+1],v=r[o+2],_=r[o+3];return e[t]=a*_+h*m+c*v-u*g,e[t+1]=c*_+h*g+u*m-a*v,e[t+2]=u*_+h*v+a*g-c*m,e[t+3]=h*_-a*m-c*g-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(s/2),m=a(r/2),g=c(n/2),v=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=g*h*m+u*v*_,this._y=u*v*m-g*h*_,this._z=u*h*_+g*v*m,this._w=u*h*m-g*v*_;break;case"YXZ":this._x=g*h*m+u*v*_,this._y=u*v*m-g*h*_,this._z=u*h*_-g*v*m,this._w=u*h*m+g*v*_;break;case"ZXY":this._x=g*h*m-u*v*_,this._y=u*v*m+g*h*_,this._z=u*h*_+g*v*m,this._w=u*h*m-g*v*_;break;case"ZYX":this._x=g*h*m-u*v*_,this._y=u*v*m+g*h*_,this._z=u*h*_-g*v*m,this._w=u*h*m+g*v*_;break;case"YZX":this._x=g*h*m+u*v*_,this._y=u*v*m+g*h*_,this._z=u*h*_-g*v*m,this._w=u*h*m-g*v*_;break;case"XZY":this._x=g*h*m-u*v*_,this._y=u*v*m-g*h*_,this._z=u*h*_+g*v*m,this._w=u*h*m+g*v*_;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],u=t[2],h=t[6],m=t[10],g=n+a+m;if(g>0){let v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(h-c)*v,this._y=(r-u)*v,this._z=(o-s)*v}else if(n>a&&n>m){let v=2*Math.sqrt(1+n-a-m);this._w=(h-c)/v,this._x=.25*v,this._y=(s+o)/v,this._z=(r+u)/v}else if(a>m){let v=2*Math.sqrt(1+a-n-m);this._w=(r-u)/v,this._x=(s+o)/v,this._y=.25*v,this._z=(c+h)/v}else{let v=2*Math.sqrt(1+m-n-a);this._w=(o-s)/v,this._x=(r+u)/v,this._y=(c+h)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+s*u-r*c,this._y=s*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-s*a,this._w=o*h-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let u=Math.acos(a),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vh=class Vh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*s-a*n),h=2*(a*t-r*s),m=2*(r*n-o*t);return this.x=t+c*u+o*m-a*h,this.y=n+c*h+a*u-r*m,this.z=s+c*m+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vh.prototype.isVector3=!0;var k=Vh,Lu=new k,ed=new Sn,Gh=class Gh{constructor(e,t,n,s,r,o,a,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u)}set(e,t,n,s,r,o,a,c,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],m=n[7],g=n[2],v=n[5],_=n[8],S=s[0],l=s[3],f=s[6],d=s[1],x=s[4],p=s[7],M=s[2],T=s[5],E=s[8];return r[0]=o*S+a*d+c*M,r[3]=o*l+a*x+c*T,r[6]=o*f+a*p+c*E,r[1]=u*S+h*d+m*M,r[4]=u*l+h*x+m*T,r[7]=u*f+h*p+m*E,r[2]=g*S+v*d+_*M,r[5]=g*l+v*x+_*T,r[8]=g*f+v*p+_*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*c+s*r*u-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],m=h*o-a*u,g=a*c-h*r,v=u*r-o*c,_=t*m+n*g+s*v;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return e[0]=m*S,e[1]=(s*u-h*n)*S,e[2]=(a*n-s*o)*S,e[3]=g*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-a*t)*S,e[6]=v*S,e[7]=(n*c-u*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-s*u,s*c,-s*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Du.makeScale(e,t)),this}rotate(e){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Du.makeRotation(-e)),this}translate(e,t){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Du.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gh.prototype.isMatrix3=!0;var pt=Gh,Du=new pt,td=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function km(){let i={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?zo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oo]:{primaries:e,whitePoint:n,transfer:zo,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}var bt=km();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fr,wl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=ko("canvas")),fr.width=e.width,fr.height=e.height;let s=fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ko("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hm=0,Lr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nu(s[o].image)):r.push(Nu(s[o]))}else r=Nu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Nu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}var Vm=0,Uu=new k,kn=class i extends Oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Fi,s=Fi,r=Ot,o=Gn,a=Jn,c=Fn,u=i.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Yr(),this.name="",this.source=new Lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uu).x}get height(){return this.source.getSize(Uu).y}get depth(){return this.source.getSize(Uu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Ah;kn.DEFAULT_ANISOTROPY=1;var Wh=class Wh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],h=c[4],m=c[8],g=c[1],v=c[5],_=c[9],S=c[2],l=c[6],f=c[10];if(Math.abs(h-g)<.01&&Math.abs(m-S)<.01&&Math.abs(_-l)<.01){if(Math.abs(h+g)<.1&&Math.abs(m+S)<.1&&Math.abs(_+l)<.1&&Math.abs(u+v+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(u+1)/2,p=(v+1)/2,M=(f+1)/2,T=(h+g)/4,E=(m+S)/4,y=(_+l)/4;return x>p&&x>M?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=E/n):p>M?p<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(p),n=T/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=E/r,s=y/r),this.set(n,s,r,t),this}let d=Math.sqrt((l-_)*(l-_)+(m-S)*(m-S)+(g-h)*(g-h));return Math.abs(d)<.001&&(d=1),this.x=(l-_)/d,this.y=(m-S)/d,this.z=(g-h)/d,this.w=Math.acos((u+v+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wh.prototype.isVector4=!0;var St=Wh,Al=class extends Oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new kn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Lr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ut=class extends Al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vo=class extends kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rl=class extends kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ec=class ec{constructor(e,t,n,s,r,o,a,c,u,h,m,g,v,_,S,l){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u,h,m,g,v,_,S,l)}set(e,t,n,s,r,o,a,c,u,h,m,g,v,_,S,l){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=u,f[6]=h,f[10]=m,f[14]=g,f[3]=v,f[7]=_,f[11]=S,f[15]=l,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ec().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let g=o*h,v=o*m,_=a*h,S=a*m;t[0]=c*h,t[4]=-c*m,t[8]=u,t[1]=v+_*u,t[5]=g-S*u,t[9]=-a*c,t[2]=S-g*u,t[6]=_+v*u,t[10]=o*c}else if(e.order==="YXZ"){let g=c*h,v=c*m,_=u*h,S=u*m;t[0]=g+S*a,t[4]=_*a-v,t[8]=o*u,t[1]=o*m,t[5]=o*h,t[9]=-a,t[2]=v*a-_,t[6]=S+g*a,t[10]=o*c}else if(e.order==="ZXY"){let g=c*h,v=c*m,_=u*h,S=u*m;t[0]=g-S*a,t[4]=-o*m,t[8]=_+v*a,t[1]=v+_*a,t[5]=o*h,t[9]=S-g*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let g=o*h,v=o*m,_=a*h,S=a*m;t[0]=c*h,t[4]=_*u-v,t[8]=g*u+S,t[1]=c*m,t[5]=S*u+g,t[9]=v*u-_,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let g=o*c,v=o*u,_=a*c,S=a*u;t[0]=c*h,t[4]=S-g*m,t[8]=_*m+v,t[1]=m,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=v*m+_,t[10]=g-S*m}else if(e.order==="XZY"){let g=o*c,v=o*u,_=a*c,S=a*u;t[0]=c*h,t[4]=-m,t[8]=u*h,t[1]=g*m+S,t[5]=o*h,t[9]=v*m-_,t[2]=_*m-v,t[6]=a*h,t[10]=S*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gm,e,Wm)}lookAt(e,t,n){let s=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),as.crossVectors(n,ei),as.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),as.crossVectors(n,ei)),as.normalize(),Ga.crossVectors(ei,as),s[0]=as.x,s[4]=Ga.x,s[8]=ei.x,s[1]=as.y,s[5]=Ga.y,s[9]=ei.y,s[2]=as.z,s[6]=Ga.z,s[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],m=n[5],g=n[9],v=n[13],_=n[2],S=n[6],l=n[10],f=n[14],d=n[3],x=n[7],p=n[11],M=n[15],T=s[0],E=s[4],y=s[8],b=s[12],w=s[1],R=s[5],P=s[9],I=s[13],C=s[2],L=s[6],D=s[10],z=s[14],W=s[3],O=s[7],H=s[11],V=s[15];return r[0]=o*T+a*w+c*C+u*W,r[4]=o*E+a*R+c*L+u*O,r[8]=o*y+a*P+c*D+u*H,r[12]=o*b+a*I+c*z+u*V,r[1]=h*T+m*w+g*C+v*W,r[5]=h*E+m*R+g*L+v*O,r[9]=h*y+m*P+g*D+v*H,r[13]=h*b+m*I+g*z+v*V,r[2]=_*T+S*w+l*C+f*W,r[6]=_*E+S*R+l*L+f*O,r[10]=_*y+S*P+l*D+f*H,r[14]=_*b+S*I+l*z+f*V,r[3]=d*T+x*w+p*C+M*W,r[7]=d*E+x*R+p*L+M*O,r[11]=d*y+x*P+p*D+M*H,r[15]=d*b+x*I+p*z+M*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],u=e[13],h=e[2],m=e[6],g=e[10],v=e[14],_=e[3],S=e[7],l=e[11],f=e[15],d=c*v-u*g,x=a*v-u*m,p=a*g-c*m,M=o*v-u*h,T=o*g-c*h,E=o*m-a*h;return t*(S*d-l*x+f*p)-n*(_*d-l*M+f*T)+s*(_*x-S*M+f*E)-r*(_*p-S*T+l*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],u=e[6],h=e[10];return t*(o*h-a*u)-n*(r*h-a*c)+s*(r*u-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],m=e[9],g=e[10],v=e[11],_=e[12],S=e[13],l=e[14],f=e[15],d=t*a-n*o,x=t*c-s*o,p=t*u-r*o,M=n*c-s*a,T=n*u-r*a,E=s*u-r*c,y=h*S-m*_,b=h*l-g*_,w=h*f-v*_,R=m*l-g*S,P=m*f-v*S,I=g*f-v*l,C=d*I-x*P+p*R+M*w-T*b+E*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return e[0]=(a*I-c*P+u*R)*L,e[1]=(s*P-n*I-r*R)*L,e[2]=(S*E-l*T+f*M)*L,e[3]=(g*T-m*E-v*M)*L,e[4]=(c*w-o*I-u*b)*L,e[5]=(t*I-s*w+r*b)*L,e[6]=(l*p-_*E-f*x)*L,e[7]=(h*E-g*p+v*x)*L,e[8]=(o*P-a*w+u*y)*L,e[9]=(n*w-t*P-r*y)*L,e[10]=(_*T-S*p+f*d)*L,e[11]=(m*p-h*T-v*d)*L,e[12]=(a*b-o*R-c*y)*L,e[13]=(t*R-n*b+s*y)*L,e[14]=(S*x-_*M-l*d)*L,e[15]=(h*M-m*x+g*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,h*a+n,h*c-s*o,0,u*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,u=r+r,h=o+o,m=a+a,g=r*u,v=r*h,_=r*m,S=o*h,l=o*m,f=a*m,d=c*u,x=c*h,p=c*m,M=n.x,T=n.y,E=n.z;return s[0]=(1-(S+f))*M,s[1]=(v+p)*M,s[2]=(_-x)*M,s[3]=0,s[4]=(v-p)*T,s[5]=(1-(g+f))*T,s[6]=(l+d)*T,s[7]=0,s[8]=(_+x)*E,s[9]=(l-d)*E,s[10]=(1-(g+S))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=dr.set(s[0],s[1],s[2]).length(),a=dr.set(s[4],s[5],s[6]).length(),c=dr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Mi.copy(this);let u=1/o,h=1/a,m=1/c;return Mi.elements[0]*=u,Mi.elements[1]*=u,Mi.elements[2]*=u,Mi.elements[4]*=h,Mi.elements[5]*=h,Mi.elements[6]*=h,Mi.elements[8]*=m,Mi.elements[9]*=m,Mi.elements[10]*=m,t.setFromRotationMatrix(Mi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Ei,c=!1){let u=this.elements,h=2*r/(t-e),m=2*r/(n-s),g=(t+e)/(t-e),v=(n+s)/(n-s),_,S;if(c)_=r/(o-r),S=o*r/(o-r);else if(a===Ei)_=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Pr)_=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=m,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ei,c=!1){let u=this.elements,h=2/(t-e),m=2/(n-s),g=-(t+e)/(t-e),v=-(n+s)/(n-s),_,S;if(c)_=1/(o-r),S=o/(o-r);else if(a===Ei)_=-2/(o-r),S=-(o+r)/(o-r);else if(a===Pr)_=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=g,u[1]=0,u[5]=m,u[9]=0,u[13]=v,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ec.prototype.isMatrix4=!0;var it=ec,dr=new k,Mi=new it,Gm=new k(0,0,0),Wm=new k(1,1,1),as=new k,Ga=new k,ei=new k,id=new it,sd=new Sn,Zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],h=s[9],m=s[2],g=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,v),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,v),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xm=0,rd=new k,pr=new Sn,Xi=new it,Wa=new k,Ao=new k,qm=new k,Ym=new Sn,od=new k(1,0,0),ad=new k(0,1,0),ld=new k(0,0,1),cd={type:"added"},Zm={type:"removed"},mr={type:"childadded",child:null},Fu={type:"childremoved",child:null},dn=class i extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Zn,n=new Sn,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new pt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(od,e)}rotateY(e){return this.rotateOnAxis(ad,e)}rotateZ(e){return this.rotateOnAxis(ld,e)}translateOnAxis(e,t){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(od,e)}translateY(e){return this.translateOnAxis(ad,e)}translateZ(e){return this.translateOnAxis(ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Ao,Wa,this.up):Xi.lookAt(Wa,Ao,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Xi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cd),mr.child=e,this.dispatchEvent(mr),mr.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cd),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let m=c[u];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),m=o(e.shapes),g=o(e.skeletons),v=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let u in a){let h=a[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new k(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},$m={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let S of e.hand.values()){let l=t.getJointPose(S,n),f=this._getHandJoint(u,S);l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=l.radius),f.visible=l!==null}let h=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],g=h.position.distanceTo(m.position),v=.02,_=.005;u.inputState.pinching&&g>v+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&g<=v-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($m)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},v0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Bu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=zm(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bu(o,r,e+1/3),this.g=Bu(o,r,e),this.b=Bu(o,r,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=v0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return bt.workingToColorSpace(Un.copy(this),e),Math.round(Mt(Un.r*255,0,255))*65536+Math.round(Mt(Un.g*255,0,255))*256+Math.round(Mt(Un.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Un.copy(this),t);let n=Un.r,s=Un.g,r=Un.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,u,h=(a+o)/2;if(a===o)c=0,u=0;else{let m=o-a;switch(u=h<=.5?m/(o+a):m/(2-o-a),o){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=jt){bt.workingToColorSpace(Un.copy(this),e);let t=Un.r,n=Un.g,s=Un.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Xa);let n=Iu(ls.h,Xa.h,t),s=Iu(ls.s,Xa.s,t),r=Iu(ls.l,Xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new Ee;Ee.NAMES=v0;var Wo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hs=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},bi=new k,qi=new k,Ou=new k,Yi=new k,gr=new k,vr=new k,ud=new k,zu=new k,ku=new k,Hu=new k,Vu=new St,Gu=new St,Wu=new St,fs=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bi.subVectors(e,t),s.cross(bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){bi.subVectors(s,t),qi.subVectors(n,t),Ou.subVectors(e,t);let o=bi.dot(bi),a=bi.dot(qi),c=bi.dot(Ou),u=qi.dot(qi),h=qi.dot(Ou),m=o*u-a*a;if(m===0)return r.set(0,0,0),null;let g=1/m,v=(u*c-a*h)*g,_=(o*h-a*c)*g;return r.set(1-v-_,_,v)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yi.x),c.addScaledVector(o,Yi.y),c.addScaledVector(a,Yi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Vu.setScalar(0),Gu.setScalar(0),Wu.setScalar(0),Vu.fromBufferAttribute(e,t),Gu.fromBufferAttribute(e,n),Wu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vu,r.x),o.addScaledVector(Gu,r.y),o.addScaledVector(Wu,r.z),o}static isFrontFacing(e,t,n,s){return bi.subVectors(n,t),qi.subVectors(e,t),bi.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),bi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;gr.subVectors(s,n),vr.subVectors(r,n),zu.subVectors(e,n);let c=gr.dot(zu),u=vr.dot(zu);if(c<=0&&u<=0)return t.copy(n);ku.subVectors(e,s);let h=gr.dot(ku),m=vr.dot(ku);if(h>=0&&m<=h)return t.copy(s);let g=c*m-h*u;if(g<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(gr,o);Hu.subVectors(e,r);let v=gr.dot(Hu),_=vr.dot(Hu);if(_>=0&&v<=_)return t.copy(r);let S=v*u-c*_;if(S<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(vr,a);let l=h*_-v*m;if(l<=0&&m-h>=0&&v-_>=0)return ud.subVectors(r,s),a=(m-h)/(m-h+(v-_)),t.copy(s).addScaledVector(ud,a);let f=1/(l+S+g);return o=S*f,a=g*f,t.copy(n).addScaledVector(gr,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Si):Si.fromBufferAttribute(r,o),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Ya.subVectors(this.max,Ro),xr.subVectors(e.a,Ro),_r.subVectors(e.b,Ro),yr.subVectors(e.c,Ro),cs.subVectors(_r,xr),us.subVectors(yr,_r),Fs.subVectors(xr,yr);let t=[0,-cs.z,cs.y,0,-us.z,us.y,0,-Fs.z,Fs.y,cs.z,0,-cs.x,us.z,0,-us.x,Fs.z,0,-Fs.x,-cs.y,cs.x,0,-us.y,us.x,0,-Fs.y,Fs.x,0];return!Xu(t,xr,_r,yr,Ya)||(t=[1,0,0,0,1,0,0,0,1],!Xu(t,xr,_r,yr,Ya))?!1:(Za.crossVectors(cs,us),t=[Za.x,Za.y,Za.z],Xu(t,xr,_r,yr,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new k,new k,new k,new k,new k,new k,new k,new k],Si=new k,qa=new hi,xr=new k,_r=new k,yr=new k,cs=new k,us=new k,Fs=new k,Ro=new k,Ya=new k,Za=new k,Bs=new k;function Xu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bs.fromArray(i,r);let a=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),c=e.dot(Bs),u=t.dot(Bs),h=n.dot(Bs);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}var hn=new k,$a=new Ie,Jm=0,Bt=class extends Oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=f0,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Xo=class extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qo=class extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Km=new hi,Co=new k,qu=new k,fi=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Km.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);let t=Co.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Co,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(qu)),this.expandByPoint(Co.copy(e.center).sub(qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jm=0,ui=new it,Yu=new dn,Mr=new k,ti=new hi,Po=new hi,bn=new k,yt=class i extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bm(e)?qo:Xo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(ti.min,Po.min),ti.expandByPoint(bn),bn.addVectors(ti.max,Po.max),ti.expandByPoint(bn)):(ti.expandByPoint(Po.min),ti.expandByPoint(Po.max))}ti.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)bn.fromBufferAttribute(a,u),c&&(Mr.fromBufferAttribute(e,u),bn.add(Mr)),s=Math.max(s,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new k,c[y]=new k;let u=new k,h=new k,m=new k,g=new Ie,v=new Ie,_=new Ie,S=new k,l=new k;function f(y,b,w){u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,b),m.fromBufferAttribute(n,w),g.fromBufferAttribute(r,y),v.fromBufferAttribute(r,b),_.fromBufferAttribute(r,w),h.sub(u),m.sub(u),v.sub(g),_.sub(g);let R=1/(v.x*_.y-_.x*v.y);isFinite(R)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(m,-v.y).multiplyScalar(R),l.copy(m).multiplyScalar(v.x).addScaledVector(h,-_.x).multiplyScalar(R),a[y].add(S),a[b].add(S),a[w].add(S),c[y].add(l),c[b].add(l),c[w].add(l))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let y=0,b=d.length;y<b;++y){let w=d[y],R=w.start,P=w.count;for(let I=R,C=R+P;I<C;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let x=new k,p=new k,M=new k,T=new k;function E(y){M.fromBufferAttribute(s,y),T.copy(M);let b=a[y];x.copy(b),x.sub(M.multiplyScalar(M.dot(b))).normalize(),p.crossVectors(T,b);let R=p.dot(c[y])<0?-1:1;o.setXYZW(y,x.x,x.y,x.z,R)}for(let y=0,b=d.length;y<b;++y){let w=d[y],R=w.start,P=w.count;for(let I=R,C=R+P;I<C;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);let s=new k,r=new k,o=new k,a=new k,c=new k,u=new k,h=new k,m=new k;if(e)for(let g=0,v=e.count;g<v;g+=3){let _=e.getX(g+0),S=e.getX(g+1),l=e.getX(g+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,l),h.subVectors(o,r),m.subVectors(s,r),h.cross(m),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,l),a.add(h),c.add(h),u.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(l,u.x,u.y,u.z)}else for(let g=0,v=t.count;g<v;g+=3)s.fromBufferAttribute(t,g+0),r.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),h.subVectors(o,r),m.subVectors(s,r),h.cross(m),n.setXYZ(g+0,h.x,h.y,h.z),n.setXYZ(g+1,h.x,h.y,h.z),n.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,c){let u=a.array,h=a.itemSize,m=a.normalized,g=new u.constructor(c.length*h),v=0,_=0;for(let S=0,l=c.length;S<l;S++){a.isInterleavedBufferAttribute?v=c[S]*a.data.stride+a.offset:v=c[S]*h;for(let f=0;f<h;f++)g[_++]=u[v++]}return new Bt(g,h,m)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],u=e(c,n);t.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let c=[],u=r[a];for(let h=0,m=u.length;h<m;h++){let g=u[h],v=e(g,n);c.push(v)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let m=0,g=u.length;m<g;m++){let v=u[m];h.push(v.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],m=r[u];for(let g=0,v=m.length;g<v;g++)h.push(m[g].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let m=o[u];this.addGroup(m.start,m.count,m.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Zu=new k,Qm=new k,eg=new pt,Ti=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zu.subVectors(n,t).cross(Qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Zu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||eg.getNormalMatrix(e),s=this.coplanarPoint(Zu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},tg=0,zi=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=Wr,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=_h,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gl,this.stencilZFail=gl,this.stencilZPass=gl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ti().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var $i=new k,$u=new k,Ja=new k,Ka=new k,Nr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$u.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),Ka.copy(this.origin).sub($u);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ja),a=Ka.dot(this.direction),c=-Ka.dot(Ja),u=Ka.lengthSq(),h=Math.abs(1-o*o),m,g,v,_;if(h>0)if(m=o*c-a,g=o*a-c,_=r*h,m>=0)if(g>=-_)if(g<=_){let S=1/h;m*=S,g*=S,v=m*(m+o*g+2*a)+g*(o*m+g+2*c)+u}else g=r,m=Math.max(0,-(o*g+a)),v=-m*m+g*(g+2*c)+u;else g=-r,m=Math.max(0,-(o*g+a)),v=-m*m+g*(g+2*c)+u;else g<=-_?(m=Math.max(0,-(-o*r+a)),g=m>0?-r:Math.min(Math.max(-r,-c),r),v=-m*m+g*(g+2*c)+u):g<=_?(m=0,g=Math.min(Math.max(-r,-c),r),v=g*(g+2*c)+u):(m=Math.max(0,-(o*r+a)),g=m>0?r:Math.min(Math.max(-r,-c),r),v=-m*m+g*(g+2*c)+u);else g=o>0?-r:r,m=Math.max(0,-(o*g+a)),v=-m*m+g*(g+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy($u).addScaledVector(Ja,g),v}intersectSphere(e,t){if(e.radius<0)return null;$i.subVectors(e.center,this.origin);let n=$i.dot(this.direction),s=$i.dot($i)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,u=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,g=this.origin;return u>=0?(n=(e.min.x-g.x)*u,s=(e.max.x-g.x)*u):(n=(e.max.x-g.x)*u,s=(e.min.x-g.x)*u),h>=0?(r=(e.min.y-g.y)*h,o=(e.max.y-g.y)*h):(r=(e.max.y-g.y)*h,o=(e.min.y-g.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(e.min.z-g.z)*m,c=(e.max.z-g.z)*m):(a=(e.max.z-g.z)*m,c=(e.min.z-g.z)*m),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,u=a.y,h=a.z,m=e.x-o.x,g=e.y-o.y,v=e.z-o.z,_=t.x-o.x,S=t.y-o.y,l=t.z-o.z,f=n.x-o.x,d=n.y-o.y,x=n.z-o.z,p=Math.abs(c),M=Math.abs(u),T=Math.abs(h),E,y,b,w,R,P,I,C,L,D,z,W;if(p>=M&&p>=T?(b=c,P=m,L=_,W=f,c>=0?(E=u,y=h,w=g,R=v,I=S,C=l,D=d,z=x):(E=h,y=u,w=v,R=g,I=l,C=S,D=x,z=d)):M>=T?(b=u,P=g,L=S,W=d,u>=0?(E=h,y=c,w=v,R=m,I=l,C=_,D=x,z=f):(E=c,y=h,w=m,R=v,I=_,C=l,D=f,z=x)):(b=h,P=v,L=l,W=x,h>=0?(E=c,y=u,w=m,R=g,I=_,C=S,D=f,z=d):(E=u,y=c,w=g,R=m,I=S,C=_,D=d,z=f)),b===0)return null;let O=E/b,H=y/b,V=1/b,ie=w-O*P,he=R-H*P,Qe=I-O*L,Re=C-H*L,He=D-O*W,J=z-H*W,Z=He*Re-J*Qe,Me=ie*J-he*He,Le=Qe*he-Re*ie;if(s){if(Z<0||Me<0||Le<0)return null}else if((Z<0||Me<0||Le<0)&&(Z>0||Me>0||Le>0))return null;let we=Z+Me+Le;if(we===0)return null;let Ge=V*(Z*P+Me*L+Le*W);return(we>0?Ge<0:Ge>0)?null:this.at(Ge/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hd=new it,Os=new Nr,ja=new fi,fd=new k,Qa=new k,el=new k,tl=new k,Ju=new k,nl=new k,dd=new k,il=new k,gt=class extends dn{constructor(e=new yt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){nl.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let h=a[c],m=r[c];h!==0&&(Ju.fromBufferAttribute(m,e),o?nl.addScaledVector(Ju,h):nl.addScaledVector(Ju.sub(t),h))}t.add(nl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(ja.containsPoint(Os.origin)===!1&&(Os.intersectSphere(ja,fd)===null||Os.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(hd.copy(r).invert(),Os.copy(e.ray).applyMatrix4(hd),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,g=r.groups,v=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=g.length;_<S;_++){let l=g[_],f=o[l.materialIndex],d=Math.max(l.start,v.start),x=Math.min(a.count,Math.min(l.start+l.count,v.start+v.count));for(let p=d,M=x;p<M;p+=3){let T=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);s=sl(this,f,e,n,u,h,m,T,E,y),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=l.materialIndex,t.push(s))}}else{let _=Math.max(0,v.start),S=Math.min(a.count,v.start+v.count);for(let l=_,f=S;l<f;l+=3){let d=a.getX(l),x=a.getX(l+1),p=a.getX(l+2);s=sl(this,o,e,n,u,h,m,d,x,p),s&&(s.faceIndex=Math.floor(l/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,S=g.length;_<S;_++){let l=g[_],f=o[l.materialIndex],d=Math.max(l.start,v.start),x=Math.min(c.count,Math.min(l.start+l.count,v.start+v.count));for(let p=d,M=x;p<M;p+=3){let T=p,E=p+1,y=p+2;s=sl(this,f,e,n,u,h,m,T,E,y),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=l.materialIndex,t.push(s))}}else{let _=Math.max(0,v.start),S=Math.min(c.count,v.start+v.count);for(let l=_,f=S;l<f;l+=3){let d=l,x=l+1,p=l+2;s=sl(this,o,e,n,u,h,m,d,x,p),s&&(s.faceIndex=Math.floor(l/3),t.push(s))}}}};function ng(i,e,t,n,s,r,o,a){let c;if(e.side===Cn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ys,a),c===null)return null;il.copy(a),il.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(il);return u<t.near||u>t.far?null:{distance:u,point:il.clone(),object:i}}function sl(i,e,t,n,s,r,o,a,c,u){i.getVertexPosition(a,Qa),i.getVertexPosition(c,el),i.getVertexPosition(u,tl);let h=ng(i,e,t,n,Qa,el,tl,dd);if(h){let m=new k;fs.getBarycoord(dd,Qa,el,tl,m),s&&(h.uv=fs.getInterpolatedAttribute(s,a,c,u,m,new Ie)),r&&(h.uv1=fs.getInterpolatedAttribute(r,a,c,u,m,new Ie)),o&&(h.normal=fs.getInterpolatedAttribute(o,a,c,u,m,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let g={a,b:c,c:u,normal:new k,materialIndex:0};fs.getNormal(Qa,el,tl,g.normal),h.face=g,h.barycoord=m}return h}var ds=class extends kn{constructor(e=null,t=1,n=1,s,r,o,a,c,u=fn,h=fn,m,g){super(null,o,a,c,u,h,s,r,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class extends Bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new it,pd=new it,rl=[],md=new hi,ig=new it,Io=new gt,Lo=new fi,Ki=class extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ig)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),md.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(md)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),Lo.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(Lo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lo.copy(this.boundingSphere),Lo.applyMatrix4(n),e.ray.intersectsSphere(Lo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,br),pd.multiplyMatrices(n,br),Io.matrixWorld=pd,Io.raycast(e,rl);for(let o=0,a=rl.length;o<a;o++){let c=rl[o];c.instanceId=r,c.object=this,t.push(c)}rl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Hn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ds(new Float32Array(s*this.count),s,this.count,Ys,pi));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zs=new fi,sg=new Ie(.5,.5),ol=new k,Ur=class{constructor(e=new Ti,t=new Ti,n=new Ti,s=new Ti,r=new Ti,o=new Ti){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],u=r[3],h=r[4],m=r[5],g=r[6],v=r[7],_=r[8],S=r[9],l=r[10],f=r[11],d=r[12],x=r[13],p=r[14],M=r[15];if(s[0].setComponents(u-o,v-h,f-_,M-d).normalize(),s[1].setComponents(u+o,v+h,f+_,M+d).normalize(),s[2].setComponents(u+a,v+m,f+S,M+x).normalize(),s[3].setComponents(u-a,v-m,f-S,M-x).normalize(),n)s[4].setComponents(c,g,l,p).normalize(),s[5].setComponents(u-c,v-g,f-l,M-p).normalize();else if(s[4].setComponents(u-c,v-g,f-l,M-p).normalize(),t===Ei)s[5].setComponents(u+c,v+g,f+l,M+p).normalize();else if(t===Pr)s[5].setComponents(c,g,l,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);let t=sg.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ol.x=s.normal.x>0?e.max.x:e.min.x,ol.y=s.normal.y>0?e.max.y:e.min.y,ol.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cl=class extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pl=new k,Il=new k,gd=new it,Do=new Nr,al=new fi,Ku=new k,vd=new k,Yo=class extends dn{constructor(e=new yt,t=new Cl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Pl.fromBufferAttribute(t,s-1),Il.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Pl.distanceTo(Il);e.setAttribute("lineDistance",new $e(n,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(s),al.radius+=r,e.ray.intersectsSphere(al)===!1)return;gd.copy(s).invert(),Do.copy(e.ray).applyMatrix4(gd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,g=n.attributes.position;if(h!==null){let v=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let S=v,l=_-1;S<l;S+=u){let f=h.getX(S),d=h.getX(S+1),x=ll(this,e,Do,c,f,d,S);x&&t.push(x)}if(this.isLineLoop){let S=h.getX(_-1),l=h.getX(v),f=ll(this,e,Do,c,S,l,_-1);f&&t.push(f)}}else{let v=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let S=v,l=_-1;S<l;S+=u){let f=ll(this,e,Do,c,S,S+1,S);f&&t.push(f)}if(this.isLineLoop){let S=ll(this,e,Do,c,_-1,v,_-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ll(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Pl.fromBufferAttribute(a,s),Il.fromBufferAttribute(a,r),t.distanceSqToSegment(Pl,Il,Ku,vd)>n)return;Ku.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Ku);if(!(u<e.near||u>e.far))return{distance:u,point:vd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Fr=class extends zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xd=new it,ah=new Nr,cl=new fi,ul=new k,Zo=class extends dn{constructor(e=new yt,t=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;xd.copy(s).invert(),ah.copy(e.ray).applyMatrix4(xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,m=n.attributes.position;if(u!==null){let g=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=g,S=v;_<S;_++){let l=u.getX(_);ul.fromBufferAttribute(m,l),_d(ul,l,c,s,e,t,this)}}else{let g=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=g,S=v;_<S;_++)ul.fromBufferAttribute(m,_),_d(ul,_,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _d(i,e,t,n,s,r,o){let a=ah.distanceSqToPoint(i);if(a<t){let c=new k;ah.closestPointToPoint(i,c),c.applyMatrix4(n);let u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var $o=class extends kn{constructor(e=[],t=Ms,n,s,r,o,a,c,u,h){super(e,t,n,s,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$n=class extends kn{constructor(e,t,n,s,r,o,a,c,u){super(e,t,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ps=class extends kn{constructor(e,t,n=Ai,s,r,o,a=fn,c=fn,u,h=Bi,m=1){if(h!==Bi&&h!==bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:e,height:t,depth:m};super(g,s,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ll=class extends ps{constructor(e,t=Ai,n=Ms,s,r,o=fn,a=fn,c,u=Bi){let h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Jo=class extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vt=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],u=[],h=[],m=[],g=0,v=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(m,2));function _(S,l,f,d,x,p,M,T,E,y,b){let w=p/E,R=M/y,P=p/2,I=M/2,C=T/2,L=E+1,D=y+1,z=0,W=0,O=new k;for(let H=0;H<D;H++){let V=H*R-I;for(let ie=0;ie<L;ie++){let he=ie*w-P;O[S]=he*d,O[l]=V*x,O[f]=C,u.push(O.x,O.y,O.z),O[S]=0,O[l]=0,O[f]=T>0?1:-1,h.push(O.x,O.y,O.z),m.push(ie/E),m.push(1-H/y),z+=1}}for(let H=0;H<y;H++)for(let V=0;V<E;V++){let ie=g+V+L*H,he=g+V+L*(H+1),Qe=g+(V+1)+L*(H+1),Re=g+(V+1)+L*H;c.push(ie,he,Re),c.push(he,Qe,Re),W+=6}a.addGroup(v,W,b),v+=W,g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Vs=class i extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],u=new k,h=new Ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let m=0,g=3;m<=t;m++,g+=3){let v=n+m/t*s;u.x=e*Math.cos(v),u.y=e*Math.sin(v),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[g]/e+1)/2,h.y=(o[g+1]/e+1)/2,c.push(h.x,h.y)}for(let m=1;m<=t;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},di=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],g=[],v=[],_=0,S=[],l=n/2,f=0;d(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(v,2));function d(){let p=new k,M=new k,T=0,E=(t-e)/n;for(let y=0;y<=r;y++){let b=[],w=y/r,R=w*(t-e)+e;for(let P=0;P<=s;P++){let I=P/s,C=I*c+a,L=Math.sin(C),D=Math.cos(C);M.x=R*L,M.y=-w*n+l,M.z=R*D,m.push(M.x,M.y,M.z),p.set(L,E,D).normalize(),g.push(p.x,p.y,p.z),v.push(I,1-w),b.push(_++)}S.push(b)}for(let y=0;y<s;y++)for(let b=0;b<r;b++){let w=S[b][y],R=S[b+1][y],P=S[b+1][y+1],I=S[b][y+1];(e>0||b!==0)&&(h.push(w,R,I),T+=3),(t>0||b!==r-1)&&(h.push(R,P,I),T+=3)}u.addGroup(f,T,0),f+=T}function x(p){let M=_,T=new Ie,E=new k,y=0,b=p===!0?e:t,w=p===!0?1:-1;for(let P=1;P<=s;P++)m.push(0,l*w,0),g.push(0,w,0),v.push(.5,.5),_++;let R=_;for(let P=0;P<=s;P++){let C=P/s*c+a,L=Math.cos(C),D=Math.sin(C);E.x=b*D,E.y=l*w,E.z=b*L,m.push(E.x,E.y,E.z),g.push(0,w,0),T.x=L*.5+.5,T.y=D*.5*w+.5,v.push(T.x,T.y),_++}for(let P=0;P<s;P++){let I=M+P,C=R+P;p===!0?h.push(C,C+1,I):h.push(C+1,C,I),y+=3}u.addGroup(f,y,p===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Dl=class i extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),u(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(d){let x=new k,p=new k,M=new k;for(let T=0;T<t.length;T+=3)v(t[T+0],x),v(t[T+1],p),v(t[T+2],M),c(x,p,M,d)}function c(d,x,p,M){let T=M+1,E=[];for(let y=0;y<=T;y++){E[y]=[];let b=d.clone().lerp(p,y/T),w=x.clone().lerp(p,y/T),R=T-y;for(let P=0;P<=R;P++)P===0&&y===T?E[y][P]=b:E[y][P]=b.clone().lerp(w,P/R)}for(let y=0;y<T;y++)for(let b=0;b<2*(T-y)-1;b++){let w=Math.floor(b/2);b%2===0?(g(E[y][w+1]),g(E[y+1][w]),g(E[y][w])):(g(E[y][w+1]),g(E[y+1][w+1]),g(E[y+1][w]))}}function u(d){let x=new k;for(let p=0;p<r.length;p+=3)x.x=r[p+0],x.y=r[p+1],x.z=r[p+2],x.normalize().multiplyScalar(d),r[p+0]=x.x,r[p+1]=x.y,r[p+2]=x.z}function h(){let d=new k;for(let x=0;x<r.length;x+=3){d.x=r[x+0],d.y=r[x+1],d.z=r[x+2];let p=l(d)/2/Math.PI+.5,M=f(d)/Math.PI+.5;o.push(p,1-M)}_(),m()}function m(){for(let d=0;d<o.length;d+=6){let x=o[d+0],p=o[d+2],M=o[d+4],T=Math.max(x,p,M),E=Math.min(x,p,M);T>.9&&E<.1&&(x<.2&&(o[d+0]+=1),p<.2&&(o[d+2]+=1),M<.2&&(o[d+4]+=1))}}function g(d){r.push(d.x,d.y,d.z)}function v(d,x){let p=d*3;x.x=e[p+0],x.y=e[p+1],x.z=e[p+2]}function _(){let d=new k,x=new k,p=new k,M=new k,T=new Ie,E=new Ie,y=new Ie;for(let b=0,w=0;b<r.length;b+=9,w+=6){d.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),p.set(r[b+6],r[b+7],r[b+8]),T.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),y.set(o[w+4],o[w+5]),M.copy(d).add(x).add(p).divideScalar(3);let R=l(M);S(T,w+0,d,R),S(E,w+2,x,R),S(y,w+4,p,R)}}function S(d,x,p,M){M<0&&d.x===1&&(o[x]=d.x-1),p.x===0&&p.z===0&&(o[x]=M/2/Math.PI+.5)}function l(d){return Math.atan2(d.z,-d.x)}function f(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,u;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],g=n[s+1]-h,v=(o-h)/g;return(s+v)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ie:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,s=[],r=[],o=[],a=new k,c=new it;for(let v=0;v<=e;v++){let _=v/e;s[v]=this.getTangentAt(_,new k)}r[0]=new k,o[0]=new k;let u=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),g=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),m<=u&&(u=m,n.set(0,1,0)),g<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let v=1;v<=e;v++){if(r[v]=r[v-1].clone(),o[v]=o[v-1].clone(),a.crossVectors(s[v-1],s[v]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Mt(s[v-1].dot(s[v]),-1,1));r[v].applyMatrix4(c.makeRotationAxis(a,_))}o[v].crossVectors(s[v],r[v])}if(t===!0){let v=Math.acos(Mt(r[0].dot(r[e]),-1,1));v/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(v=-v);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],v*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Br=class extends ni{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),g=c-this.aX,v=u-this.aY;c=g*h-v*m+this.aX,u=g*m+v*h+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Nl=class extends Br{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,u){s(o,a,u*(a-r),u*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,u,h,m){let g=(o-r)/u-(a-r)/(u+h)+(a-o)/h,v=(a-o)/h-(c-o)/(h+m)+(c-a)/m;g*=h,v*=h,s(o,a,g,v)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var yd=new k,Md=new k,ju=new Fh,Qu=new Fh,eh=new Fh,Ul=class extends ni{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let u,h;this.closed||a>0?u=s[(a-1)%r]:(Md.subVectors(s[0],s[1]).add(s[0]),u=Md);let m=s[a%r],g=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yd),this.curveType==="centripetal"||this.curveType==="chordal"){let v=this.curveType==="chordal"?.5:.25,_=Math.pow(u.distanceToSquared(m),v),S=Math.pow(m.distanceToSquared(g),v),l=Math.pow(g.distanceToSquared(h),v);S<1e-4&&(S=1),_<1e-4&&(_=S),l<1e-4&&(l=S),ju.initNonuniformCatmullRom(u.x,m.x,g.x,h.x,_,S,l),Qu.initNonuniformCatmullRom(u.y,m.y,g.y,h.y,_,S,l),eh.initNonuniformCatmullRom(u.z,m.z,g.z,h.z,_,S,l)}else this.curveType==="catmullrom"&&(ju.initCatmullRom(u.x,m.x,g.x,h.x,this.tension),Qu.initCatmullRom(u.y,m.y,g.y,h.y,this.tension),eh.initCatmullRom(u.z,m.z,g.z,h.z,this.tension));return n.set(ju.calc(c),Qu.calc(c),eh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function rg(i,e){let t=1-i;return t*t*e}function og(i,e){return 2*(1-i)*i*e}function ag(i,e){return i*i*e}function Uo(i,e,t,n){return rg(i,e)+og(i,t)+ag(i,n)}function lg(i,e){let t=1-i;return t*t*t*e}function cg(i,e){let t=1-i;return 3*t*t*i*e}function ug(i,e){return 3*(1-i)*i*i*e}function hg(i,e){return i*i*i*e}function Fo(i,e,t,n,s){return lg(i,e)+cg(i,t)+ug(i,n)+hg(i,s)}var Ko=class extends ni{constructor(e=new Ie,t=new Ie,n=new Ie,s=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fo(e,s.x,r.x,o.x,a.x),Fo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fl=class extends ni{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fo(e,s.x,r.x,o.x,a.x),Fo(e,s.y,r.y,o.y,a.y),Fo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jo=class extends ni{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bl=class extends ni{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends ni{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Uo(e,s.x,r.x,o.x),Uo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends ni{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Uo(e,s.x,r.x,o.x),Uo(e,s.y,r.y,o.y),Uo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],m=s[o>s.length-3?s.length-1:o+2];return n.set(bd(a,c.x,u.x,h.x,m.x),bd(a,c.y,u.y,h.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ie().fromArray(s))}return this}},Sd=Object.freeze({__proto__:null,ArcCurve:Nl,CatmullRomCurve3:Ul,CubicBezierCurve:Ko,CubicBezierCurve3:Fl,EllipseCurve:Br,LineCurve:jo,LineCurve3:Bl,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:Ol,SplineCurve:ea}),zl=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),u=c===0?0:1-o/c;return a.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let u=0;u<c.length;u++){let h=c[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Sd[s.type]().fromJSON(s))}return this}},ta=class extends zl{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new jo(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Qo(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ko(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s),new Ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ea(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let u=new Br(e,t,n,s,r,o,a,c);if(this.curves.length>0){let m=u.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(u);let h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Or=class extends ta{constructor(e){super(e),this.uuid=Yr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ta().fromJSON(s))}return this}};function fg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=x0(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,u;if(n&&(r=vg(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,m=c;for(let g=t;g<s;g+=t){let v=i[g],_=i[g+1];v<a&&(a=v),_<c&&(c=_),v>h&&(h=v),_>m&&(m=_)}u=Math.max(h-a,m-c),u=u!==0?32767/u:0}return na(r,o,t,a,c,u,0),o}function x0(i,e,t,n,s){let r;if(s===Rg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Td(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Td(o/n|0,i[o],i[o+1],r);return r&&zr(r,r.next)&&(sa(r),r=r.next),r}function Gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zr(t,t.next)||Qt(t.prev,t,t.next)===0)){if(sa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function na(i,e,t,n,s,r,o){if(!i)return;!o&&r&&bg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,u=i.next;if(r?pg(i,n,s,r):dg(i)){e.push(c.i,i.i,u.i),sa(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=mg(Gs(i),e),na(i,e,t,n,s,r,2)):o===2&&gg(i,e,t,n,s,r):na(Gs(i),e,t,n,s,r,1);break}}}function dg(i){let e=i.prev,t=i,n=i.next;if(Qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,u=n.y,h=Math.min(s,r,o),m=Math.min(a,c,u),g=Math.max(s,r,o),v=Math.max(a,c,u),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=g&&_.y>=m&&_.y<=v&&No(s,a,r,c,o,u,_.x,_.y)&&Qt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function pg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Qt(s,r,o)>=0)return!1;let a=s.x,c=r.x,u=o.x,h=s.y,m=r.y,g=o.y,v=Math.min(a,c,u),_=Math.min(h,m,g),S=Math.max(a,c,u),l=Math.max(h,m,g),f=lh(v,_,e,t,n),d=lh(S,l,e,t,n),x=i.prevZ,p=i.nextZ;for(;x&&x.z>=f&&p&&p.z<=d;){if(x.x>=v&&x.x<=S&&x.y>=_&&x.y<=l&&x!==s&&x!==o&&No(a,h,c,m,u,g,x.x,x.y)&&Qt(x.prev,x,x.next)>=0||(x=x.prevZ,p.x>=v&&p.x<=S&&p.y>=_&&p.y<=l&&p!==s&&p!==o&&No(a,h,c,m,u,g,p.x,p.y)&&Qt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;x&&x.z>=f;){if(x.x>=v&&x.x<=S&&x.y>=_&&x.y<=l&&x!==s&&x!==o&&No(a,h,c,m,u,g,x.x,x.y)&&Qt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;p&&p.z<=d;){if(p.x>=v&&p.x<=S&&p.y>=_&&p.y<=l&&p!==s&&p!==o&&No(a,h,c,m,u,g,p.x,p.y)&&Qt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function mg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!zr(n,s)&&y0(n,t,t.next,s)&&ia(n,s)&&ia(s,n)&&(e.push(n.i,t.i,s.i),sa(t),sa(t.next),t=i=s),t=t.next}while(t!==i);return Gs(t)}function gg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Eg(o,a)){let c=M0(o,a);o=Gs(o,o.next),c=Gs(c,c.next),na(o,e,t,n,s,r,0),na(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function vg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,u=x0(i,a,c,n,!1);u===u.next&&(u.steiner=!0),s.push(Tg(u))}s.sort(xg);for(let r=0;r<s.length;r++)t=_g(s[r],t);return t}function xg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function _g(i,e){let t=yg(i,e);if(!t)return e;let n=M0(t,i);return Gs(n,n.next),Gs(t,t.next)}function yg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(zr(i,t))return t;do{if(zr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let m=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=n&&m>r&&(r=m,o=t.x<t.next.x?t:t.next,m===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,u=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&_0(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)){let m=Math.abs(s-t.y)/(n-t.x);ia(t,i)&&(m<h||m===h&&(t.x>o.x||t.x===o.x&&Mg(o,t)))&&(o=t,h=m)}t=t.next}while(t!==a);return o}function Mg(i,e){return Qt(i.prev,i,e.prev)<0&&Qt(e.next,i,i.next)<0}function bg(i,e,t,n){let s=i;do s.z===0&&(s.z=lh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sg(s)}function Sg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function lh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Tg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _0(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function No(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&_0(i,e,t,n,s,r,o,a)}function Eg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!wg(i,e)&&(ia(i,e)&&ia(e,i)&&Ag(i,e)&&(Qt(i.prev,i,e.prev)||Qt(i,e.prev,e))||zr(i,e)&&Qt(i.prev,i,i.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zr(i,e){return i.x===e.x&&i.y===e.y}function y0(i,e,t,n){let s=fl(Qt(i,e,t)),r=fl(Qt(i,e,n)),o=fl(Qt(t,n,i)),a=fl(Qt(t,n,e));return!!(s!==r&&o!==a||s===0&&hl(i,t,e)||r===0&&hl(i,n,e)||o===0&&hl(t,i,n)||a===0&&hl(t,e,n))}function hl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fl(i){return i>0?1:i<0?-1:0}function wg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&y0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ia(i,e){return Qt(i.prev,i,i.next)<0?Qt(i,e,i.next)>=0&&Qt(i,i.prev,e)>=0:Qt(i,e,i.prev)<0||Qt(i,i.next,e)<0}function Ag(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function M0(i,e){let t=ch(i.i,i.x,i.y),n=ch(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Td(i,e,t,n){let s=ch(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function sa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ch(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var uh=class{static triangulate(e,t,n=2){return fg(e,t,n)}},Ar=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ed(e),wd(n,e);let o=e.length;t.forEach(Ed);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,wd(n,t[c]);let a=uh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ed(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ra=class i extends Dl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var nn=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),u=a+1,h=c+1,m=e/a,g=t/c,v=[],_=[],S=[],l=[];for(let f=0;f<h;f++){let d=f*g-o;for(let x=0;x<u;x++){let p=x*m-r;_.push(p,-d,0),S.push(0,0,1),l.push(x/a),l.push(1-f/c)}}for(let f=0;f<c;f++)for(let d=0;d<a;d++){let x=d+u*f,p=d+u*(f+1),M=d+1+u*(f+1),T=d+1+u*f;v.push(x,p,T),v.push(p,M,T)}this.setIndex(v),this.setAttribute("position",new $e(_,3)),this.setAttribute("normal",new $e(S,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var oa=class i extends yt{constructor(e=new Or([new Ie(0,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(r,3)),this.setAttribute("uv",new $e(o,2));function u(h){let m=s.length/3,g=h.extractPoints(t),v=g.shape,_=g.holes;Ar.isClockWise(v)===!1&&(v=v.reverse());for(let l=0,f=_.length;l<f;l++){let d=_[l];Ar.isClockWise(d)===!0&&(_[l]=d.reverse())}let S=Ar.triangulateShape(v,_);for(let l=0,f=_.length;l<f;l++){let d=_[l];v=v.concat(d)}for(let l=0,f=v.length;l<f;l++){let d=v[l];s.push(d.x,d.y,0),r.push(0,0,1),o.push(d.x,d.y)}for(let l=0,f=S.length;l<f;l++){let d=S[l],x=d[0]+m,p=d[1]+m,M=d[2]+m;n.push(x,p,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Cg(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Cg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var aa=class i extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),u=0,h=[],m=new k,g=new k,v=[],_=[],S=[],l=[];for(let f=0;f<=n;f++){let d=[],x=f/n,p=o+x*a,M=e*Math.cos(p),T=Math.sqrt(e*e-M*M),E=0;f===0&&o===0?E=.5/t:f===n&&c===Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){let b=y/t,w=s+b*r;m.x=-T*Math.cos(w),m.y=M,m.z=T*Math.sin(w),_.push(m.x,m.y,m.z),g.copy(m).normalize(),S.push(g.x,g.y,g.z),l.push(b+E,1-x),d.push(u++)}h.push(d)}for(let f=0;f<n;f++)for(let d=0;d<t;d++){let x=h[f][d+1],p=h[f][d],M=h[f+1][d],T=h[f+1][d+1];(f!==0||o>0)&&v.push(x,p,T),(f!==n-1||c<Math.PI)&&v.push(p,M,T)}this.setIndex(v),this.setAttribute("position",new $e(_,3)),this.setAttribute("normal",new $e(S,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var la=class i extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],h=[],m=[],g=new k,v=new k,_=new k;for(let S=0;S<=n;S++){let l=o+S/n*a;for(let f=0;f<=s;f++){let d=f/s*r;v.x=(e+t*Math.cos(l))*Math.cos(d),v.y=(e+t*Math.cos(l))*Math.sin(d),v.z=t*Math.sin(l),u.push(v.x,v.y,v.z),g.x=e*Math.cos(d),g.y=e*Math.sin(d),_.subVectors(v,g).normalize(),h.push(_.x,_.y,_.z),m.push(f/s),m.push(S/n)}}for(let S=1;S<=n;S++)for(let l=1;l<=s;l++){let f=(s+1)*S+l-1,d=(s+1)*(S-1)+l-1,x=(s+1)*(S-1)+l,p=(s+1)*S+l;c.push(f,d,p),c.push(d,x,p)}this.setIndex(c),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ad(s))s.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ad(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Bn(i){let e={};for(let t=0;t<i.length;t++){let n=Zs(i[t]);for(let s in n)e[s]=n[s]}return e}function Ad(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Pg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var $s={clone:Zs,merge:Bn},Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_t=class extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Pg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new it().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},kl=class extends _t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var an=class extends zi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kr=class extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hl=class extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function th(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ms=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vl=class extends ms{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rh:r=e,a=2*t-n;break;case oh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rh:o=e,c=2*n-t;break;case oh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=this._offsetPrev,m=this._offsetNext,g=this._weightPrev,v=this._weightNext,_=(n-t)/(s-t),S=_*_,l=S*_,f=-g*l+2*g*S-g*_,d=(1+g)*l+(-1.5-2*g)*S+(-.5+g)*_+1,x=(-1-v)*l+(1.5+v)*S+.5*_,p=v*l-v*S;for(let M=0;M!==a;++M)r[M]=f*o[h+M]+d*o[u+M]+x*o[c+M]+p*o[m+M];return r}},Gl=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=(n-t)/(s-t),m=1-h;for(let g=0;g!==a;++g)r[g]=o[u+g]*m+o[c+g]*h;return r}},Wl=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xl=class extends ms{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=this.inTangents,m=this.outTangents;if(!h||!m){let _=(n-t)/(s-t),S=1-_;for(let l=0;l!==a;++l)r[l]=o[u+l]*S+o[c+l]*_;return r}let g=a*2,v=e-1;for(let _=0;_!==a;++_){let S=o[u+_],l=o[c+_],f=v*g+_*2,d=m[f],x=m[f+1],p=e*g+_*2,M=h[p],T=h[p+1],E=Ng(n,t,d,M,s);r[_]=b0(E,S,x,T,l)}return r}};function b0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Dg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ng(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=b0(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Dg(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var ii=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),th(e.settings)&&(n.settings={inTangents:Sr(e.settings.inTangents,Array),outTangents:Sr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Bo:t=this.InterpolantFactoryMethodDiscrete;break;case El:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break;case ih:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ut("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return ml;case this.InterpolantFactoryMethodBezier:return ih}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;th(this.settings)&&(Rd(this.settings.inTangents,e),Rd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(dt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(dt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){dt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){dt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Om(s))for(let a=0,c=s.length;a!==c;++a){let u=s[a];if(isNaN(u)){dt("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ml,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(s)c=!0;else{let m=a*n,g=m-n,v=m+n;for(let _=0;_!==n;++_){let S=t[m+_];if(S!==t[g+_]||S!==t[v+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let m=a*n,g=o*n;for(let v=0;v!==n;++v)t[g+v]=t[m+v]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,th(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=El;var gs=class extends ii{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Bo;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}};ql.prototype.ValueTypeName="color";var Yl=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}};Yl.prototype.ValueTypeName="number";var Zl=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),u=e*a;for(let h=u+a;u!==h;u+=4)Sn.slerpFlat(r,0,o,u-a,o,u,c);return r}},ca=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Zl(this.times,this.values,this.getValueSize(),e)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends ii{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Bo;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}};$l.prototype.ValueTypeName="vector";var Jl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,m){return u.push(h,m),this},this.removeHandler=function(h){let m=u.indexOf(h);return m!==-1&&u.splice(m,2),this},this.getHandler=function(h){for(let m=0,g=u.length;m<g;m+=2){let v=u[m],_=u[m+1];if(v.global&&(v.lastIndex=0),v.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},S0=new Jl,Kl=class{constructor(e){this.manager=e!==void 0?e:S0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ua=class extends Hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nh=new it,Cd=new k,Pd=new k,ha=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){nh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(nh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Pr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),t.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dl=new k,pl=new Sn,Ui=new k,ji=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,pl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,pl,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(dl,pl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,pl,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hs=new k,Id=new Ie,Ld=new Ie,Rn=class extends ji{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,Id,Ld),t.subVectors(Ld,Id)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pu*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hh=class extends ha{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ho*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},fa=class extends Hr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var xs=class extends ji{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fh=class extends ha{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new fh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var _s=class extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Tr=-90,Er=1,jl=class extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(Tr,Er,e,t);s.layers=this.layers,this.add(s);let r=new Rn(Tr,Er,e,t);r.layers=this.layers,this.add(r);let o=new Rn(Tr,Er,e,t);o.layers=this.layers,this.add(o);let a=new Rn(Tr,Er,e,t);a.layers=this.layers,this.add(a);let c=new Rn(Tr,Er,e,t);c.layers=this.layers,this.add(c);let u=new Rn(Tr,Er,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let u of t)this.remove(u);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,u,h]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let l=!1;e.isWebGLRenderer===!0?l=e.state.buffers.depth.getReversed():l=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(m,g,v),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ql=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},da=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ug.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ug(){this._document.hidden===!1&&this.reset()}var Oh="\\[\\]\\.:\\/",Fg=new RegExp("["+Oh+"]","g"),zh="[^"+Oh+"]",Bg="[^"+Oh.replace("\\.","")+"]",Og=/((?:WC+[\/:])*)/.source.replace("WC",zh),zg=/(WCOD+)?/.source.replace("WCOD",Bg),kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zh),Hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zh),Vg=new RegExp("^"+Og+zg+kg+Hg+"$"),Gg=["material","materials","bones","map"],dh=class{constructor(e,t,n){let s=n||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fg,"")}static parseTrackName(e){let t=Vg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;dt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=dh;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J2=new Float32Array(1);var Xh=class Xh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Xh.prototype.isMatrix2=!0;var ph=Xh;function kh(i,e,t,n){let s=Wg(n);switch(t){case Lh:return i*e;case Ys:return i*e/s.components*s.byteLength;case ac:return i*e/s.components*s.byteLength;case Ss:return i*e*2/s.components*s.byteLength;case lc:return i*e*2/s.components*s.byteLength;case Dh:return i*e*3/s.components*s.byteLength;case Jn:return i*e*4/s.components*s.byteLength;case cc:return i*e*4/s.components*s.byteLength;case va:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:case dc:return Math.max(i,16)*Math.max(e,8)/4;case uc:case fc:return Math.max(i,8)*Math.max(e,8)/2;case pc:case mc:case vc:case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gc:case Ma:case _c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Nc:case Uc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bc:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ba:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wg(i){switch(i){case Fn:case Rh:return{byteLength:1,components:1};case Xr:case Ch:case pn:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case Ai:case sc:case pi:return{byteLength:4,components:1};case Ph:case Ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function X0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Kg(i){let e=new WeakMap;function t(a,c){let u=a.array,h=a.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(c,g),i.bufferData(c,u,h),a.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)v=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,c,u){let h=c.array,m=c.updateRanges;if(i.bindBuffer(u,a),m.length===0)i.bufferSubData(u,0,h);else{m.sort((v,_)=>v.start-_.start);let g=0;for(let v=1;v<m.length;v++){let _=m[g],S=m[v];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++g,m[g]=S)}m.length=g+1;for(let v=0,_=m.length;v<_;v++){let S=m[v];i.bufferSubData(u,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var jg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qg=`#ifdef USE_ALPHAHASH
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
#endif`,e1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s1=`#ifdef USE_AOMAP
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
#endif`,r1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o1=`#ifdef USE_BATCHING
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
#endif`,a1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h1=`#ifdef USE_IRIDESCENCE
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
#endif`,f1=`#ifdef USE_BUMPMAP
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
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,M1=`#define PI 3.141592653589793
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
} // validated`,b1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,S1=`vec3 transformedNormal = objectNormal;
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
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R1="gl_FragColor = linearToOutputTexel( gl_FragColor );",C1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P1=`#ifdef USE_ENVMAP
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
#endif`,I1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z1=`#ifdef USE_GRADIENTMAP
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
}`,k1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$1=`PhysicalMaterial material;
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
#endif`,J1=`uniform sampler2D dfgLUT;
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
}`,K1=`
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
#endif`,j1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ev=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lv=`#if defined( USE_POINTS_UV )
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
#endif`,cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`#ifdef USE_MORPHTARGETS
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
#endif`,mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mv=`#ifdef USE_NORMALMAP
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
#endif`,bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Av=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bv=`float getShadowMask() {
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
}`,Ov=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zv=`#ifdef USE_SKINNING
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
#endif`,kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hv=`#ifdef USE_SKINNING
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
#endif`,Vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qv=`#ifdef USE_TRANSMISSION
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
#endif`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qv=`uniform sampler2D t2D;
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`#include <common>
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
}`,rx=`#if DEPTH_PACKING == 3200
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
}`,ox=`#define DISTANCE
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
}`,ax=`#define DISTANCE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`uniform float scale;
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
}`,hx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,dx=`uniform vec3 diffuse;
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
}`,px=`#define LAMBERT
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define MATCAP
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
}`,vx=`#define MATCAP
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
}`,xx=`#define NORMAL
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
}`,_x=`#define NORMAL
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
}`,yx=`#define PHONG
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
}`,Mx=`#define PHONG
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
}`,bx=`#define STANDARD
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
}`,Sx=`#define STANDARD
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
}`,Tx=`#define TOON
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
}`,Ex=`#define TOON
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
}`,wx=`uniform float size;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Cx=`uniform vec3 color;
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
}`,Px=`uniform float rotation;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:jg,alphahash_pars_fragment:Qg,alphamap_fragment:e1,alphamap_pars_fragment:t1,alphatest_fragment:n1,alphatest_pars_fragment:i1,aomap_fragment:s1,aomap_pars_fragment:r1,batching_pars_vertex:o1,batching_vertex:a1,begin_vertex:l1,beginnormal_vertex:c1,bsdfs:u1,iridescence_fragment:h1,bumpmap_pars_fragment:f1,clipping_planes_fragment:d1,clipping_planes_pars_fragment:p1,clipping_planes_pars_vertex:m1,clipping_planes_vertex:g1,color_fragment:v1,color_pars_fragment:x1,color_pars_vertex:_1,color_vertex:y1,common:M1,cube_uv_reflection_fragment:b1,defaultnormal_vertex:S1,displacementmap_pars_vertex:T1,displacementmap_vertex:E1,emissivemap_fragment:w1,emissivemap_pars_fragment:A1,colorspace_fragment:R1,colorspace_pars_fragment:C1,envmap_fragment:P1,envmap_common_pars_fragment:I1,envmap_pars_fragment:L1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:W1,envmap_vertex:N1,fog_vertex:U1,fog_pars_vertex:F1,fog_fragment:B1,fog_pars_fragment:O1,gradientmap_pars_fragment:z1,lightmap_pars_fragment:k1,lights_lambert_fragment:H1,lights_lambert_pars_fragment:V1,lights_pars_begin:G1,lights_toon_fragment:X1,lights_toon_pars_fragment:q1,lights_phong_fragment:Y1,lights_phong_pars_fragment:Z1,lights_physical_fragment:$1,lights_physical_pars_fragment:J1,lights_fragment_begin:K1,lights_fragment_maps:j1,lights_fragment_end:Q1,lightprobes_pars_fragment:ev,logdepthbuf_fragment:tv,logdepthbuf_pars_fragment:nv,logdepthbuf_pars_vertex:iv,logdepthbuf_vertex:sv,map_fragment:rv,map_pars_fragment:ov,map_particle_fragment:av,map_particle_pars_fragment:lv,metalnessmap_fragment:cv,metalnessmap_pars_fragment:uv,morphinstance_vertex:hv,morphcolor_vertex:fv,morphnormal_vertex:dv,morphtarget_pars_vertex:pv,morphtarget_vertex:mv,normal_fragment_begin:gv,normal_fragment_maps:vv,normal_pars_fragment:xv,normal_pars_vertex:_v,normal_vertex:yv,normalmap_pars_fragment:Mv,clearcoat_normal_fragment_begin:bv,clearcoat_normal_fragment_maps:Sv,clearcoat_pars_fragment:Tv,iridescence_pars_fragment:Ev,opaque_fragment:wv,packing:Av,premultiplied_alpha_fragment:Rv,project_vertex:Cv,dithering_fragment:Pv,dithering_pars_fragment:Iv,roughnessmap_fragment:Lv,roughnessmap_pars_fragment:Dv,shadowmap_pars_fragment:Nv,shadowmap_pars_vertex:Uv,shadowmap_vertex:Fv,shadowmask_pars_fragment:Bv,skinbase_vertex:Ov,skinning_pars_vertex:zv,skinning_vertex:kv,skinnormal_vertex:Hv,specularmap_fragment:Vv,specularmap_pars_fragment:Gv,tonemapping_fragment:Wv,tonemapping_pars_fragment:Xv,transmission_fragment:qv,transmission_pars_fragment:Yv,uv_pars_fragment:Zv,uv_pars_vertex:$v,uv_vertex:Jv,worldpos_vertex:Kv,background_vert:jv,background_frag:Qv,backgroundCube_vert:ex,backgroundCube_frag:tx,cube_vert:nx,cube_frag:ix,depth_vert:sx,depth_frag:rx,distance_vert:ox,distance_frag:ax,equirect_vert:lx,equirect_frag:cx,linedashed_vert:ux,linedashed_frag:hx,meshbasic_vert:fx,meshbasic_frag:dx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:vx,meshnormal_vert:xx,meshnormal_frag:_x,meshphong_vert:yx,meshphong_frag:Mx,meshphysical_vert:bx,meshphysical_frag:Sx,meshtoon_vert:Tx,meshtoon_frag:Ex,points_vert:wx,points_frag:Ax,shadow_vert:Rx,shadow_frag:Cx,sprite_vert:Px,sprite_frag:Ix},Ve={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Hi={basic:{uniforms:Bn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Bn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Bn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Bn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Bn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Bn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Bn([Ve.points,Ve.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Bn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Bn([Ve.common,Ve.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Bn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Bn([Ve.sprite,Ve.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Bn([Ve.common,Ve.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Bn([Ve.lights,Ve.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Hi.physical={uniforms:Bn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Gc={r:0,b:0,g:0},Lx=new it,q0=new pt;q0.set(-1,0,0,0,1,0,0,0,1);function Dx(i,e,t,n,s,r){let o=new Ee(0),a=s===!0?0:1,c,u,h=null,m=0,g=null;function v(d){let x=d.isScene===!0?d.background:null;if(x&&x.isTexture){let p=d.backgroundBlurriness>0;x=e.get(x,p)}return x}function _(d){let x=!1,p=v(d);p===null?l(o,a):p&&p.isColor&&(l(p,1),x=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(d,x){let p=v(x);p&&(p.isCubeTexture||p.mapping===ma)?(u===void 0&&(u=new gt(new Vt(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:Zs(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=p,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(x.backgroundRotation)).transpose(),p.isCubeTexture&&p.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(q0),u.material.toneMapped=bt.getTransfer(p.colorSpace)!==Ct,(h!==p||m!==p.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=p,m=p.version,g=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new gt(new nn(2,2),new _t({name:"BackgroundMaterial",uniforms:Zs(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=bt.getTransfer(p.colorSpace)!==Ct,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||m!==p.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,h=p,m=p.version,g=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function l(d,x){d.getRGB(Gc,Bh(i)),t.buffers.color.setClear(Gc.r,Gc.g,Gc.b,x,r)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,x=1){o.set(d),a=x,l(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,l(o,a)},render:_,addToRenderList:S,dispose:f}}function Nx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,o=!1;function a(R,P,I,C,L){let D=!1,z=m(R,C,I,P);r!==z&&(r=z,u(r.object)),D=v(R,C,I,L),D&&_(R,C,I,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,p(R,P,I,C),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function u(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function m(R,P,I,C){let L=C.wireframe===!0,D=n[P.id];D===void 0&&(D={},n[P.id]=D);let z=R.isInstancedMesh===!0?R.id:0,W=D[z];W===void 0&&(W={},D[z]=W);let O=W[I.id];O===void 0&&(O={},W[I.id]=O);let H=O[L];return H===void 0&&(H=g(c()),O[L]=H),H}function g(R){let P=[],I=[],C=[];for(let L=0;L<t;L++)P[L]=0,I[L]=0,C[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:C,object:R,attributes:{},index:null}}function v(R,P,I,C){let L=r.attributes,D=P.attributes,z=0,W=I.getAttributes();for(let O in W)if(W[O].location>=0){let V=L[O],ie=D[O];if(ie===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),V===void 0||V.attribute!==ie||ie&&V.data!==ie.data)return!0;z++}return r.attributesNum!==z||r.index!==C}function _(R,P,I,C){let L={},D=P.attributes,z=0,W=I.getAttributes();for(let O in W)if(W[O].location>=0){let V=D[O];V===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(V=R.instanceColor));let ie={};ie.attribute=V,V&&V.data&&(ie.data=V.data),L[O]=ie,z++}r.attributes=L,r.attributesNum=z,r.index=C}function S(){let R=r.newAttributes;for(let P=0,I=R.length;P<I;P++)R[P]=0}function l(R){f(R,0)}function f(R,P){let I=r.newAttributes,C=r.enabledAttributes,L=r.attributeDivisors;I[R]=1,C[R]===0&&(i.enableVertexAttribArray(R),C[R]=1),L[R]!==P&&(i.vertexAttribDivisor(R,P),L[R]=P)}function d(){let R=r.newAttributes,P=r.enabledAttributes;for(let I=0,C=P.length;I<C;I++)P[I]!==R[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function x(R,P,I,C,L,D,z){z===!0?i.vertexAttribIPointer(R,P,I,L,D):i.vertexAttribPointer(R,P,I,C,L,D)}function p(R,P,I,C){S();let L=C.attributes,D=I.getAttributes(),z=P.defaultAttributeValues;for(let W in D){let O=D[W];if(O.location>=0){let H=L[W];if(H===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),H!==void 0){let V=H.normalized,ie=H.itemSize,he=e.get(H);if(he===void 0)continue;let Qe=he.buffer,Re=he.type,He=he.bytesPerElement,J=Re===i.INT||Re===i.UNSIGNED_INT||H.gpuType===sc;if(H.isInterleavedBufferAttribute){let Z=H.data,Me=Z.stride,Le=H.offset;if(Z.isInstancedInterleavedBuffer){for(let we=0;we<O.locationSize;we++)f(O.location+we,Z.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let we=0;we<O.locationSize;we++)l(O.location+we);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let we=0;we<O.locationSize;we++)x(O.location+we,ie/O.locationSize,Re,V,Me*He,(Le+ie/O.locationSize*we)*He,J)}else{if(H.isInstancedBufferAttribute){for(let Z=0;Z<O.locationSize;Z++)f(O.location+Z,H.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Z=0;Z<O.locationSize;Z++)l(O.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Z=0;Z<O.locationSize;Z++)x(O.location+Z,ie/O.locationSize,Re,V,ie*He,ie/O.locationSize*Z*He,J)}}else if(z!==void 0){let V=z[W];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(O.location,V);break;case 3:i.vertexAttrib3fv(O.location,V);break;case 4:i.vertexAttrib4fv(O.location,V);break;default:i.vertexAttrib1fv(O.location,V)}}}}d()}function M(){b();for(let R in n){let P=n[R];for(let I in P){let C=P[I];for(let L in C){let D=C[L];for(let z in D)h(D[z].object),delete D[z];delete C[L]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let P=n[R.id];for(let I in P){let C=P[I];for(let L in C){let D=C[L];for(let z in D)h(D[z].object),delete D[z];delete C[L]}}delete n[R.id]}function E(R){for(let P in n){let I=n[P];for(let C in I){let L=I[C];if(L[R.id]===void 0)continue;let D=L[R.id];for(let z in D)h(D[z].object),delete D[z];delete L[R.id]}}}function y(R){for(let P in n){let I=n[P],C=R.isInstancedMesh===!0?R.id:0,L=I[C];if(L!==void 0){for(let D in L){let z=L[D];for(let W in z)h(z[W].object),delete z[W];delete L[D]}delete I[C],Object.keys(I).length===0&&delete n[P]}}}function b(){w(),o=!0,r!==s&&(r=s,u(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:S,enableAttribute:l,disableUnusedAttributes:d}}function Ux(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];t.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Fx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Jn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let y=E===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Fn&&E!==pi&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(ut("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),l=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:l,maxAttributes:f,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:p,maxSamples:M,samples:T}}function Bx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ti,a=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){let v=m.length!==0||g||n!==0||s;return s=g,n=m.length,v},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,g){t=h(m,g,0)},this.setState=function(m,g,v){let _=m.clippingPlanes,S=m.clipIntersection,l=m.clipShadows,f=i.get(m);if(!s||_===null||_.length===0||r&&!l)r?h(null):u();else{let d=r?0:n,x=d*4,p=f.clippingState||null;c.value=p,p=h(_,g,x,v);for(let M=0;M!==x;++M)p[M]=t[M];f.clippingState=p,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=d}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,g,v,_){let S=m!==null?m.length:0,l=null;if(S!==0){if(l=c.value,_!==!0||l===null){let f=v+S*4,d=g.matrixWorldInverse;a.getNormalMatrix(d),(l===null||l.length<f)&&(l=new Float32Array(f));for(let x=0,p=v;x!==S;++x,p+=4)o.copy(m[x]).applyMatrix4(d,a),o.normal.toArray(l,p),l[p+3]=o.constant}c.value=l,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,l}}var $r=4,Ox=6,zx=20,kx=256,Sa=new xs,T0=new Ee,qh=null,Yh=0,Zh=0,$h=!1,Hx=new k,Js=new k,Xc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Hx}=r;qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qh,Yh,Zh),this._renderer.xr.enabled=$h,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:pn,format:Jn,colorSpace:Oo,depthBuffer:!1},s=E0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vx(r)),this._blurMaterial=Wx(r,e,t),this._ggxMaterial=Gx(r,e,t)}return s}_compileMaterial(e){let t=new gt(new yt,e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,n,s,r){let c=new Rn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(T0),m.toneMapping=wi,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new Vt,new on({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,l=S.material,f=!1,d=e.background;d?d.isColor&&(l.color.copy(d),e.background=null,f=!0):(l.color.copy(T0),f=!0);for(let x=0;x<6;x++){let p=x%3;p===0?(c.up.set(0,u[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):p===1?(c.up.set(0,0,u[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,u[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));let M=this._cubeSize;Zr(s,p*M,x>2?M:0,M,M),m.setRenderTarget(s),f&&m.render(S,c),m.render(e,c)}m.toneMapping=v,m.autoClear=g,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ms||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=A0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Zr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Sa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),m=Math.sqrt(u*u-h*h),g=u*1.25,v=m*g,{_lodMax:_}=this,S=this._sizeLods[n],l=3*S*(n>_-$r?n-_+$r:0),f=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=v,c.mipInt.value=_-t,Zr(r,l,f,3*S,2*S),s.setRenderTarget(r),s.render(a,Sa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Zr(e,l,f,3*S,2*S),s.setRenderTarget(e),s.render(a,Sa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let u=a.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],m=3*h*(s>this._lodMax-$r?s-this._lodMax+$r:0),g=4*(this._cubeSize-h);Zr(t,m,g,3*h,2*h),o.setRenderTarget(t),o.render(c,Sa)}};function Vx(i){let e=[],t=[],n=i,s=i-$r+1+Ox;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,u=1+a,h=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,g=6,v=3,_=new Float32Array(v*g*m),S=new Float32Array(v*g*m);for(let f=0;f<m;f++){let d=f%3*2/3-1,x=f>2?0:-1,p=[d,x,0,d+2/3,x,0,d+2/3,x+1,0,d,x,0,d+2/3,x+1,0,d,x+1,0];_.set(p,v*g*f);for(let M=0;M<g;M++){let T=h[M*2]*2-1,E=h[M*2+1]*2-1;f===0?Js.set(1,E,T):f===1?Js.set(-T,1,-E):f===2?Js.set(-T,E,1):f===3?Js.set(-1,E,-T):f===4?Js.set(-T,-1,E):Js.set(T,E,-1),Js.toArray(S,(f*g+M)*v)}}let l=new yt;l.setAttribute("position",new Bt(_,v)),l.setAttribute("outputDirection",new Bt(S,v)),t.push(new gt(l,null)),n>$r&&n--}return{lodMeshes:t,sizeLods:e}}function E0(i,e,t){let n=new Ut(i,e,t);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gx(i,e,t){return new _t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Wx(i,e,t){return new _t({name:"SphericalGaussianBlur",defines:{SAMPLES:zx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function w0(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function A0(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var qc=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $o(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new _t({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Vn});r.uniforms.tEquirect.value=t;let o=new gt(s,r),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Ot),new jl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Xx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(g,v=!1){return g==null?null:v?o(g):r(g)}function r(g){if(g&&g.isTexture){let v=g.mapping;if(v===tc||v===nc)if(e.has(g)){let _=e.get(g).texture;return a(_,g.mapping)}else{let _=g.image;if(_&&_.height>0){let S=new qc(_.height);return S.fromEquirectangularTexture(i,g),e.set(g,S),g.addEventListener("dispose",u),a(S.texture,g.mapping)}else return null}}return g}function o(g){if(g&&g.isTexture){let v=g.mapping,_=v===tc||v===nc,S=v===Ms||v===qs;if(_||S){let l=t.get(g),f=l!==void 0?l.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==f)return n===null&&(n=new Xc(i)),l=_?n.fromEquirectangular(g,l):n.fromCubemap(g,l),l.texture.pmremVersion=g.pmremVersion,t.set(g,l),l.texture;if(l!==void 0)return l.texture;{let d=g.image;return _&&d&&d.height>0||S&&d&&c(d)?(n===null&&(n=new Xc(i)),l=_?n.fromEquirectangular(g):n.fromCubemap(g),l.texture.pmremVersion=g.pmremVersion,t.set(g,l),g.addEventListener("dispose",h),l.texture):null}}}return g}function a(g,v){return v===tc?g.mapping=Ms:v===nc&&(g.mapping=qs),g}function c(g){let v=0,_=6;for(let S=0;S<_;S++)g[S]!==void 0&&v++;return v===_}function u(g){let v=g.target;v.removeEventListener("dispose",u);let _=e.get(v);_!==void 0&&(e.delete(v),_.dispose())}function h(g){let v=g.target;v.removeEventListener("dispose",h);let _=t.get(v);_!==void 0&&(t.delete(v),_.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function qx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ks("WebGLRenderer: "+n+" extension not supported."),s}}}function Yx(i,e,t,n){let s={},r=new WeakMap;function o(m){let g=m.target;g.index!==null&&e.remove(g.index);for(let _ in g.attributes)e.remove(g.attributes[_]);g.removeEventListener("dispose",o),delete s[g.id];let v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function a(m,g){return s[g.id]===!0||(g.addEventListener("dispose",o),s[g.id]=!0,t.memory.geometries++),g}function c(m){let g=m.attributes;for(let v in g)e.update(g[v],i.ARRAY_BUFFER)}function u(m){let g=[],v=m.index,_=m.attributes.position,S=0;if(_===void 0)return;if(v!==null){let d=v.array;S=v.version;for(let x=0,p=d.length;x<p;x+=3){let M=d[x+0],T=d[x+1],E=d[x+2];g.push(M,T,T,E,E,M)}}else{let d=_.array;S=_.version;for(let x=0,p=d.length/3-1;x<p;x+=3){let M=x+0,T=x+1,E=x+2;g.push(M,T,T,E,E,M)}}let l=new(_.count>=65535?qo:Xo)(g,1);l.version=S;let f=r.get(m);f&&e.remove(f),r.set(m,l)}function h(m){let g=r.get(m);if(g){let v=m.index;v!==null&&g.version<v.version&&u(m)}else u(m);return r.get(m)}return{get:a,update:c,getWireframeAttribute:h}}function Zx(i,e,t){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function c(m,g){i.drawElements(n,g,r,m*o),t.update(g,n,1)}function u(m,g,v){v!==0&&(i.drawElementsInstanced(n,g,r,m*o,v),t.update(g,n,v))}function h(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,m,0,v);let S=0;for(let l=0;l<v;l++)S+=g[l];t.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function $x(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:dt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jx(i,e,t){let n=new WeakMap,s=new St;function r(o,a,c){let u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=h!==void 0?h.length:0,g=n.get(a);if(g===void 0||g.count!==m){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};g!==void 0&&g.texture.dispose();let v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,l=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],d=a.morphAttributes.color||[],x=0;v===!0&&(x=1),_===!0&&(x=2),S===!0&&(x=3);let p=a.attributes.position.count*x,M=1;p>e.maxTextureSize&&(M=Math.ceil(p/e.maxTextureSize),p=e.maxTextureSize);let T=new Float32Array(p*M*4*m),E=new Vo(T,p,M,m);E.type=pi,E.needsUpdate=!0;let y=x*4;for(let w=0;w<m;w++){let R=l[w],P=f[w],I=d[w],C=p*M*4*w;for(let L=0;L<R.count;L++){let D=L*y;v===!0&&(s.fromBufferAttribute(R,L),T[C+D+0]=s.x,T[C+D+1]=s.y,T[C+D+2]=s.z,T[C+D+3]=0),_===!0&&(s.fromBufferAttribute(P,L),T[C+D+4]=s.x,T[C+D+5]=s.y,T[C+D+6]=s.z,T[C+D+7]=0),S===!0&&(s.fromBufferAttribute(I,L),T[C+D+8]=s.x,T[C+D+9]=s.y,T[C+D+10]=s.z,T[C+D+11]=I.itemSize===4?s.w:1)}}g={count:m,texture:E,size:new Ie(p,M)},n.set(a,g),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let S=0;S<u.length;S++)v+=u[S];let _=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function Kx(i,e,t,n,s){let r=new WeakMap;function o(u){let h=s.render.frame,m=u.geometry,g=e.get(u,m);if(r.get(g)!==h&&(e.update(g),r.set(g,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let v=u.skeleton;r.get(v)!==h&&(v.update(),r.set(v,h))}return g}function a(){r=new WeakMap}function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var jx={[Mh]:"LINEAR_TONE_MAPPING",[bh]:"REINHARD_TONE_MAPPING",[Sh]:"CINEON_TONE_MAPPING",[Th]:"ACES_FILMIC_TONE_MAPPING",[wh]:"AGX_TONE_MAPPING",[pa]:"NEUTRAL_TONE_MAPPING",[Eh]:"CUSTOM_TONE_MAPPING"};function Qx(i,e,t,n,s,r){let o=new Ut(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,u=new yt;u.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new $e([0,2,0,0,2,0],2));let h=new kl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new gt(u,h),g=new xs(-1,1,1,-1,0,1),v=null,_=null,S=!1,l,f=null,d=[],x=!1;this.setSize=function(p,M){o.setSize(p,M),a!==null&&a.setSize(p,M),c!==null&&c.setSize(p,M);for(let T=0;T<d.length;T++){let E=d[T];E.setSize&&E.setSize(p,M)}},this.setEffects=function(p){d=p,x=d.length>0&&d[0].isRenderPass===!0;let M=o.width,T=o.height;d.length>0&&a===null&&(a=new Ut(M,T,{type:pn,depthBuffer:!1,stencilBuffer:!1}),c=new Ut(M,T,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<d.length;E++){let y=d[E];y.setSize&&y.setSize(M,T)}},this.begin=function(p,M){if(S||p.toneMapping===wi&&d.length===0)return!1;if(f=M,M!==null){let T=M.width,E=M.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return x===!1&&p.setRenderTarget(o),l=p.toneMapping,p.toneMapping=wi,!0},this.hasRenderPass=function(){return x},this.end=function(p,M){p.toneMapping=l,S=!0;let T=o,E=a;for(let y=0;y<d.length;y++){let b=d[y];b.enabled!==!1&&(b.render(p,E,T,M),b.needsSwap!==!1&&(T=E,E=E===a?c:a))}if(v!==p.outputColorSpace||_!==p.toneMapping){v=p.outputColorSpace,_=p.toneMapping,h.defines={},bt.getTransfer(v)===Ct&&(h.defines.SRGB_TRANSFER="");let y=jx[_];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,p.setRenderTarget(f),p.render(m,g),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}var Y0=new kn,jh=new ps(1,1),Z0=new Vo,$0=new Rl,J0=new $o,R0=[],C0=[],P0=new Float32Array(16),I0=new Float32Array(9),L0=new Float32Array(4);function Kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=R0[s];if(r===void 0&&(r=new Float32Array(s),R0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $c(i,e){let t=C0[e];t===void 0&&(t=new Int32Array(e),C0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function e_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),vn(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),vn(t,e)}}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),vn(t,e)}}function s_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;L0.set(n),i.uniformMatrix2fv(this.addr,!1,L0),vn(t,n)}}function r_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;I0.set(n),i.uniformMatrix3fv(this.addr,!1,I0),vn(t,n)}}function o_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;P0.set(n),i.uniformMatrix4fv(this.addr,!1,P0),vn(t,n)}}function a_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),vn(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),vn(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),vn(t,e)}}function h_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),vn(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),vn(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),vn(t,e)}}function m_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jh.compareFunction=t.isReversedDepthBuffer()?Vc:Hc,r=jh):r=Y0,t.setTexture2D(e||r,s)}function g_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$0,s)}function v_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||J0,s)}function x_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Z0,s)}function __(i){switch(i){case 5126:return e_;case 35664:return t_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return u_;case 5125:return h_;case 36294:return f_;case 36295:return d_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return x_}}function y_(i,e){i.uniform1fv(this.addr,e)}function M_(i,e){let t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function b_(i,e){let t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function S_(i,e){let t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function T_(i,e){let t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function E_(i,e){let t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function w_(i,e){let t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function A_(i,e){i.uniform1iv(this.addr,e)}function R_(i,e){i.uniform2iv(this.addr,e)}function C_(i,e){i.uniform3iv(this.addr,e)}function P_(i,e){i.uniform4iv(this.addr,e)}function I_(i,e){i.uniform1uiv(this.addr,e)}function L_(i,e){i.uniform2uiv(this.addr,e)}function D_(i,e){i.uniform3uiv(this.addr,e)}function N_(i,e){i.uniform4uiv(this.addr,e)}function U_(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=jh:o=Y0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function F_(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||$0,r[o])}function B_(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||J0,r[o])}function O_(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Z0,r[o])}function z_(i){switch(i){case 5126:return y_;case 35664:return M_;case 35665:return b_;case 35666:return S_;case 35674:return T_;case 35675:return E_;case 35676:return w_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return P_;case 5125:return I_;case 36294:return L_;case 36295:return D_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return O_}}var Qh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=__(t.type)}},ef=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z_(t.type)}},tf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Jh=/(\w+)(\])?(\[|\.)?/g;function D0(i,e){i.seq.push(e),i.map[e.id]=e}function k_(i,e,t){let n=i.name,s=n.length;for(Jh.lastIndex=0;;){let r=Jh.exec(n),o=Jh.lastIndex,a=r[1],c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){D0(t,u===void 0?new Qh(a,i,e):new ef(a,i,e));break}else{let m=t.map[a];m===void 0&&(m=new tf(a),D0(t,m)),t=m}}}var Jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);k_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function N0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var H_=37297,V_=0;function G_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var U0=new pt;function W_(i){bt._getMatrix(U0,bt.workingColorSpace,i);let e=`mat3( ${U0.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case zo:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function F0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+G_(i.getShaderSource(e),a)}else return r}function X_(i,e){let t=W_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var q_={[Mh]:"Linear",[bh]:"Reinhard",[Sh]:"Cineon",[Th]:"ACESFilmic",[wh]:"AgX",[pa]:"Neutral",[Eh]:"Custom"};function Y_(i,e){let t=q_[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wc=new k;function Z_(){bt.getLuminanceCoefficients(Wc);let i=Wc.x.toFixed(4),e=Wc.y.toFixed(4),t=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function J_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function K_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ea(i){return i!==""}function B0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function O0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(i){return i.replace(j_,ey)}var Q_=new Map;function ey(i,e){let t=ft[e];if(t===void 0){let n=Q_.get(e);if(n!==void 0)t=ft[n],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nf(t)}var ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z0(i){return i.replace(ty,ny)}function ny(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function k0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var iy={[Ws]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function sy(i){return iy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ry={[Ms]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function oy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ry[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ay={[qs]:"ENVMAP_MODE_REFRACTION"};function ly(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ay[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cy={[yh]:"ENVMAP_BLENDING_MULTIPLY",[e0]:"ENVMAP_BLENDING_MIX",[t0]:"ENVMAP_BLENDING_ADD"};function uy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cy[i.combine]||"ENVMAP_BLENDING_NONE"}function hy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=sy(t),u=oy(t),h=ly(t),m=uy(t),g=hy(t),v=$_(t),_=J_(r),S=s.createProgram(),l,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ea).join(`
`),l.length>0&&(l+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ea).join(`
`),f.length>0&&(f+=`
`)):(l=[k0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),f=[k0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?ft.tonemapping_pars_fragment:"",t.toneMapping!==wi?Y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,X_("linearToOutputTexel",t.outputColorSpace),Z_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),o=nf(o),o=B0(o,t),o=O0(o,t),a=nf(a),a=B0(a,t),a=O0(a,t),o=z0(o),a=z0(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,l=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,f=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=d+l+o,p=d+f+a,M=N0(s,s.VERTEX_SHADER,x),T=N0(s,s.FRAGMENT_SHADER,p);s.attachShader(S,M),s.attachShader(S,T),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function E(R){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(S)||"",I=s.getShaderInfoLog(M)||"",C=s.getShaderInfoLog(T)||"",L=P.trim(),D=I.trim(),z=C.trim(),W=!0,O=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,M,T);else{let H=F0(s,M,"vertex"),V=F0(s,T,"fragment");dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+H+`
`+V)}else L!==""?ut("WebGLProgram: Program Info Log:",L):(D===""||z==="")&&(O=!1);O&&(R.diagnostics={runnable:W,programLog:L,vertexShader:{log:D,prefix:l},fragmentShader:{log:z,prefix:f}})}s.deleteShader(M),s.deleteShader(T),y=new Jr(s,S),b=K_(s,S)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(S,H_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V_++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=M,this.fragmentShader=T,this}var dy=0,sf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rf(e),t.set(e,n)),n}},rf=class{constructor(e){this.id=dy++,this.code=e,this.usedTimes=0}};function py(i){return i===Ss||i===Ma||i===ba}function my(i,e,t,n,s,r){let o=new Go,a=new sf,c=new Set,u=[],h=new Map,m=n.logarithmicDepthBuffer,g=n.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function S(y,b,w,R,P,I){let C=R.fog,L=P.geometry,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,W=e.get(y.envMap||D,z),O=W&&W.mapping===ma?W.image.height:null,H=v[y.type];y.precision!==null&&(g=n.getMaxPrecision(y.precision),g!==y.precision&&ut("WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ie=V!==void 0?V.length:0,he=0;L.morphAttributes.position!==void 0&&(he=1),L.morphAttributes.normal!==void 0&&(he=2),L.morphAttributes.color!==void 0&&(he=3);let Qe,Re,He,J;if(H){let It=Hi[H];Qe=It.vertexShader,Re=It.fragmentShader}else{Qe=y.vertexShader,Re=y.fragmentShader;let It=a.getVertexShaderStage(y),lt=a.getFragmentShaderStage(y);a.update(y,It,lt),He=It.id,J=lt.id}let Z=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Le=P.isInstancedMesh===!0,we=P.isBatchedMesh===!0,Ge=!!y.map,Je=!!y.matcap,Be=!!W,mt=!!y.aoMap,Q=!!y.lightMap,me=!!y.bumpMap&&y.wireframe===!1,Te=!!y.normalMap,K=!!y.displacementMap,ee=!!y.emissiveMap,re=!!y.metalnessMap,se=!!y.roughnessMap,F=y.anisotropy>0,ge=y.clearcoat>0,j=y.dispersion>0,U=y.retroreflectivity>0,A=y.iridescence>0,G=y.sheen>0,Y=y.transmission>0,B=F&&!!y.anisotropyMap,le=ge&&!!y.clearcoatMap,ye=ge&&!!y.clearcoatNormalMap,oe=ge&&!!y.clearcoatRoughnessMap,ue=A&&!!y.iridescenceMap,pe=A&&!!y.iridescenceThicknessMap,Ce=G&&!!y.sheenColorMap,xe=G&&!!y.sheenRoughnessMap,_e=!!y.specularMap,Ue=!!y.specularColorMap,Ke=!!y.specularIntensityMap,et=Y&&!!y.transmissionMap,X=Y&&!!y.thicknessMap,Pe=!!y.gradientMap,fe=!!y.alphaMap,De=y.alphaTest>0,ze=!!y.alphaHash,Se=!!y.extensions,tt=wi;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(tt=i.toneMapping);let je={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:Qe,fragmentShader:Re,defines:y.defines,customVertexShaderID:He,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:we,batchingColor:we&&P._colorsTexture!==null,instancing:Le,instancingColor:Le&&P.instanceColor!==null,instancingMorph:Le&&P.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:Je,envMap:Be,envMapMode:Be&&W.mapping,envMapCubeUVHeight:O,aoMap:mt,lightMap:Q,bumpMap:me,normalMap:Te,displacementMap:K,emissiveMap:ee,normalMapObjectSpace:Te&&y.normalMapType===s0,normalMapTangentSpace:Te&&y.normalMapType===kc,packedNormalMap:Te&&y.normalMapType===kc&&py(y.normalMap.format),metalnessMap:re,roughnessMap:se,anisotropy:F,anisotropyMap:B,clearcoat:ge,clearcoatMap:le,clearcoatNormalMap:ye,clearcoatRoughnessMap:oe,dispersion:j,retroreflection:U,iridescence:A,iridescenceMap:ue,iridescenceThicknessMap:pe,sheen:G,sheenColorMap:Ce,sheenRoughnessMap:xe,specularMap:_e,specularColorMap:Ue,specularIntensityMap:Ke,transmission:Y,transmissionMap:et,thicknessMap:X,gradientMap:Pe,opaque:y.transparent===!1&&y.blending===Wr&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:De,alphaHash:ze,combine:y.combine,mapUv:Ge&&_(y.map.channel),aoMapUv:mt&&_(y.aoMap.channel),lightMapUv:Q&&_(y.lightMap.channel),bumpMapUv:me&&_(y.bumpMap.channel),normalMapUv:Te&&_(y.normalMap.channel),displacementMapUv:K&&_(y.displacementMap.channel),emissiveMapUv:ee&&_(y.emissiveMap.channel),metalnessMapUv:re&&_(y.metalnessMap.channel),roughnessMapUv:se&&_(y.roughnessMap.channel),anisotropyMapUv:B&&_(y.anisotropyMap.channel),clearcoatMapUv:le&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(y.sheenRoughnessMap.channel),specularMapUv:_e&&_(y.specularMap.channel),specularColorMapUv:Ue&&_(y.specularColorMap.channel),specularIntensityMapUv:Ke&&_(y.specularIntensityMap.channel),transmissionMapUv:et&&_(y.transmissionMap.channel),thicknessMapUv:X&&_(y.thicknessMap.channel),alphaMapUv:fe&&_(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Te||F),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Ge||fe),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&Te===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Me,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:he,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&bt.getTransfer(y.map.colorSpace)===Ct,decodeVideoTextureEmissive:ee&&y.emissiveMap.isVideoTexture===!0&&bt.getTransfer(y.emissiveMap.colorSpace)===Ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tn,flipSided:y.side===Cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function l(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let w in y.defines)b.push(w),b.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(f(b,y),d(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function f(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function d(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function x(y){let b=v[y.type],w;if(b){let R=Hi[b];w=$s.clone(R.uniforms)}else w=y.uniforms;return w}function p(y,b){let w=h.get(b);return w!==void 0?++w.usedTimes:(w=new fy(i,b,y,s),u.push(w),h.set(b,w)),w}function M(y){if(--y.usedTimes===0){let b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function E(){a.dispose()}return{getParameters:S,getProgramCacheKey:l,getUniforms:x,acquireProgram:p,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:E}}function gy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function vy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function H0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function V0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(g){let v=0;return g.isInstancedMesh&&(v+=2),g.isSkinnedMesh&&(v+=1),v}function a(g,v,_,S,l,f){let d=i[e];return d===void 0?(d={id:g.id,object:g,geometry:v,material:_,materialVariant:o(g),groupOrder:S,renderOrder:g.renderOrder,z:l,group:f},i[e]=d):(d.id=g.id,d.object=g,d.geometry=v,d.material=_,d.materialVariant=o(g),d.groupOrder=S,d.renderOrder=g.renderOrder,d.z=l,d.group=f),e++,d}function c(g,v,_,S,l,f,d){d.reversedDepth===!0&&(l=-l);let x=a(g,v,_,S,l,f);_.transmission>0?n.push(x):_.transparent===!0?s.push(x):t.push(x)}function u(g,v,_,S,l,f){let d=a(g,v,_,S,l,f);_.transmission>0?n.unshift(d):_.transparent===!0?s.unshift(d):t.unshift(d)}function h(g,v){t.length>1&&t.sort(g||vy),n.length>1&&n.sort(v||H0),s.length>1&&s.sort(v||H0)}function m(){for(let g=e,v=i.length;g<v;g++){let _=i[g];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:m,sort:h}}function xy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new V0,i.set(n,[o])):s>=r.length?(o=new V0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function _y(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new Ee};break;case"SpotLight":t={position:new k,direction:new k,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function yy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var My=0;function by(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Sy(i){let e=new _y,t=yy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new k);let s=new k,r=new it,o=new it;function a(u){let h=0,m=0,g=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let v=0,_=0,S=0,l=0,f=0,d=0,x=0,p=0,M=0,T=0,E=0,y=0,b=0,w=0;u.sort(by);for(let P=0,I=u.length;P<I;P++){let C=u[P],L=C.color,D=C.intensity,z=C.distance,W=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ss?W=C.shadow.map.texture:W=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=L.r*D,m+=L.g*D,g+=L.b*D;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],D);w++}else if(C.isSunLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,V=t.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[_]=V,n.sunShadowMap[_]=W;let ie=H.getViewportCount();for(let he=0;he<ie;he++)n.sunShadowMatrix[S+he]=H.getMatrix(he),n.sunShadowCascade[S+he]=H._cascadeData[he];S+=ie,_++}n.sun[v]=O,v++}else if(C.isDirectionalLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,V=t.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,n.directionalShadow[l]=V,n.directionalShadowMap[l]=W,n.directionalShadowMatrix[l]=C.shadow.matrix,M++}n.directional[l]=O,l++}else if(C.isSpotLight){let O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(L).multiplyScalar(D),O.distance=z,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[d]=O;let H=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,H.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[d]=H.matrix,C.castShadow){let V=t.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,n.spotShadow[d]=V,n.spotShadowMap[d]=W,E++}d++}else if(C.isRectAreaLight){let O=e.get(C);O.color.copy(L).multiplyScalar(D),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=O,x++}else if(C.isPointLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let H=C.shadow,V=t.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,V.shadowCameraNear=H.camera.near,V.shadowCameraFar=H.camera.far,n.pointShadow[f]=V,n.pointShadowMap[f]=W,n.pointShadowMatrix[f]=C.shadow.matrix,T++}n.point[f]=O,f++}else if(C.isHemisphereLight){let O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(D),O.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[p]=O,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=g;let R=n.hash;(R.sunLength!==v||R.directionalLength!==l||R.pointLength!==f||R.spotLength!==d||R.rectAreaLength!==x||R.hemiLength!==p||R.numSunShadows!==_||R.numDirectionalShadows!==M||R.numPointShadows!==T||R.numSpotShadows!==E||R.numSpotMaps!==y||R.numLightProbes!==w)&&(n.sun.length=v,n.directional.length=l,n.spot.length=d,n.rectArea.length=x,n.point.length=f,n.hemi.length=p,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,R.sunLength=v,R.directionalLength=l,R.pointLength=f,R.spotLength=d,R.rectAreaLength=x,R.hemiLength=p,R.numSunShadows=_,R.numDirectionalShadows=M,R.numPointShadows=T,R.numSpotShadows=E,R.numSpotMaps=y,R.numLightProbes=w,n.version=My++)}function c(u,h){let m=0,g=0,v=0,_=0,S=0,l=0,f=h.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){let p=u[d];if(p.isSunLight){let M=n.sun[m];M.direction.setFromMatrixPosition(p.matrixWorld),M.direction.transformDirection(f),m++}else if(p.isDirectionalLight){let M=n.directional[g];M.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),g++}else if(p.isSpotLight){let M=n.spot[_];M.position.setFromMatrixPosition(p.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),_++}else if(p.isRectAreaLight){let M=n.rectArea[S];M.position.setFromMatrixPosition(p.matrixWorld),M.position.applyMatrix4(f),o.identity(),r.copy(p.matrixWorld),r.premultiply(f),o.extractRotation(r),M.halfWidth.set(p.width*.5,0,0),M.halfHeight.set(0,p.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),S++}else if(p.isPointLight){let M=n.point[v];M.position.setFromMatrixPosition(p.matrixWorld),M.position.applyMatrix4(f),v++}else if(p.isHemisphereLight){let M=n.hemi[l];M.direction.setFromMatrixPosition(p.matrixWorld),M.direction.transformDirection(f),l++}}}return{setup:a,setupView:c,state:n}}function G0(i){let e=new Sy(i),t=[],n=[],s=[];function r(g){m.camera=g,t.length=0,n.length=0,s.length=0}function o(g){t.push(g)}function a(g){n.push(g)}function c(g){s.push(g)}function u(){e.setup(t)}function h(g){e.setupView(t,g)}let m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Ty(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new G0(i),e.set(s,[a])):r>=o.length?(a=new G0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wy=`uniform sampler2D shadow_pass;
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
}`,Ay=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Ry=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],W0=new it,Ta=new k,Kh=new k;function Cy(i,e,t){let n=new Ur,s=new Ie,r=new Ie,o=new St,a=new kr,c=new Hl,u={},h=t.maxTextureSize,m={[ys]:Cn,[Cn]:ys,[Tn]:Tn},g=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Ey,fragmentShader:wy}),v=g.clone();v.defines.HORIZONTAL_PASS=1;let _=new yt;_.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new gt(_,g),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let f=this.type;this.render=function(T,E,y){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||T.length===0)return;this.type===Ud&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ws);let b=i.getRenderTarget(),w=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Vn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let I=f!==this.type;I&&E.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(L=>L.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,L=T.length;C<L;C++){let D=T[C],z=D.shadow;if(z===void 0){ut("WebGLShadowMap:",D,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let W=z.getFrameExtents();s.multiply(W),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,z.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=O,z.map===null||I===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Gr){if(D.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ut(s.x,s.y,{format:Ss,type:pn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),z.map.texture.name=D.name+".shadowMap",z.map.depthTexture=new ps(s.x,s.y,pi),z.map.depthTexture.name=D.name+".shadowMapDepth",z.map.depthTexture.format=Bi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=fn,z.map.depthTexture.magFilter=fn}else D.isPointLight?(z.map=new qc(s.x),z.map.depthTexture=new Ll(s.x,Ai)):(z.map=new Ut(s.x,s.y),z.map.depthTexture=new ps(s.x,s.y,Ai)),z.map.depthTexture.name=D.name+".shadowMap",z.map.depthTexture.format=Bi,this.type===Ws?(z.map.depthTexture.compareFunction=O?Vc:Hc,z.map.depthTexture.minFilter=Ot,z.map.depthTexture.magFilter=Ot):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=fn,z.map.depthTexture.magFilter=fn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let H=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();D.isPointLight!==!0&&z.updateMatrices(D,y);for(let V=0;V<H;V++){let ie=z.getCamera(V);if(D.isPointLight){let he=z.camera,Qe=z.matrix,Re=D.distance||he.far;Re!==he.far&&(he.far=Re,he.updateProjectionMatrix()),Ta.setFromMatrixPosition(D.matrixWorld),he.position.copy(Ta),Kh.copy(he.position),Kh.add(Ay[V]),he.up.copy(Ry[V]),he.lookAt(Kh),he.updateMatrixWorld(),Qe.makeTranslation(-Ta.x,-Ta.y,-Ta.z),W0.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),z._frustum.setFromProjectionMatrix(W0,he.coordinateSystem,he.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,V),i.clear();else{V===0&&(i.setRenderTarget(z.map),i.clear());let he=z.getViewport(V);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),P.viewport(o)}n=z.getFrustum(V),p(E,y,ie,D,this.type)}z.isPointLightShadow!==!0&&this.type===Gr&&d(z,y),z.needsUpdate=!1}f=this.type,l.needsUpdate=!1,i.setRenderTarget(b,w,R)};function d(T,E){let y=e.update(S);g.defines.VSM_SAMPLES!==T.blurSamples&&(g.defines.VSM_SAMPLES=T.blurSamples,v.defines.VSM_SAMPLES=T.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ut(s.x,s.y,{format:Ss,type:pn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),g.uniforms.shadow_pass.value=T.map.depthTexture,g.uniforms.resolution.value.set(T.map.width,T.map.height),g.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,y,g,S,null),v.uniforms.shadow_pass.value=T.mapPass.texture,v.uniforms.resolution.value.set(T.map.width,T.map.height),v.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,y,v,S,null)}function x(T,E,y,b){let w=null,R=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)w=R;else if(w=y.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=w.uuid,I=E.uuid,C=u[P];C===void 0&&(C={},u[P]=C);let L=C[I];L===void 0&&(L=w.clone(),C[I]=L,E.addEventListener("dispose",M)),w=L}if(w.visible=E.visible,w.wireframe=E.wireframe,b===Gr?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:m[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let P=i.properties.get(w);P.light=y}return w}function p(T,E,y,b,w){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Gr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let I=e.update(T),C=T.material;if(Array.isArray(C)){let L=I.groups;for(let D=0,z=L.length;D<z;D++){let W=L[D],O=C[W.materialIndex];if(O&&O.visible){let H=x(T,O,b,w);T.onBeforeShadow(i,T,E,y,I,H,W),i.renderBufferDirect(y,null,I,H,T,W),T.onAfterShadow(i,T,E,y,I,H,W)}}}else if(C.visible){let L=x(T,C,b,w);T.onBeforeShadow(i,T,E,y,I,L,null),i.renderBufferDirect(y,null,I,L,T,null),T.onAfterShadow(i,T,E,y,I,L,null)}}let P=T.children;for(let I=0,C=P.length;I<C;I++)p(P[I],E,y,b,w)}function M(T){T.target.removeEventListener("dispose",M);for(let y in u){let b=u[y],w=T.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function Py(i,e){function t(){let X=!1,Pe=new St,fe=null,De=new St(0,0,0,0);return{setMask:function(ze){fe!==ze&&!X&&(i.colorMask(ze,ze,ze,ze),fe=ze)},setLocked:function(ze){X=ze},setClear:function(ze,Se,tt,je,It){It===!0&&(ze*=je,Se*=je,tt*=je),Pe.set(ze,Se,tt,je),De.equals(Pe)===!1&&(i.clearColor(ze,Se,tt,je),De.copy(Pe))},reset:function(){X=!1,fe=null,De.set(-1,0,0,0)}}}function n(){let X=!1,Pe=!1,fe=null,De=null,ze=null;return{setReversed:function(Se){if(Pe!==Se){let tt=e.get("EXT_clip_control");Se?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Pe=Se;let je=ze;ze=null,this.setClear(je)}},getReversed:function(){return Pe},setTest:function(Se){Se?Z(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Se){fe!==Se&&!X&&(i.depthMask(Se),fe=Se)},setFunc:function(Se){if(Pe&&(Se=g0[Se]),De!==Se){switch(Se){case vl:i.depthFunc(i.NEVER);break;case xl:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=Se}},setLocked:function(Se){X=Se},setClear:function(Se){ze!==Se&&(ze=Se,Pe&&(Se=1-Se),i.clearDepth(Se))},reset:function(){X=!1,fe=null,De=null,ze=null,Pe=!1}}}function s(){let X=!1,Pe=null,fe=null,De=null,ze=null,Se=null,tt=null,je=null,It=null;return{setTest:function(lt){X||(lt?Z(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(lt){Pe!==lt&&!X&&(i.stencilMask(lt),Pe=lt)},setFunc:function(lt,Xn,jn){(fe!==lt||De!==Xn||ze!==jn)&&(i.stencilFunc(lt,Xn,jn),fe=lt,De=Xn,ze=jn)},setOp:function(lt,Xn,jn){(Se!==lt||tt!==Xn||je!==jn)&&(i.stencilOp(lt,Xn,jn),Se=lt,tt=Xn,je=jn)},setLocked:function(lt){X=lt},setClear:function(lt){It!==lt&&(i.clearStencil(lt),It=lt)},reset:function(){X=!1,Pe=null,fe=null,De=null,ze=null,Se=null,tt=null,je=null,It=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,u=new WeakMap,h={},m={},g={},v=new WeakMap,_=[],S=null,l=!1,f=null,d=null,x=null,p=null,M=null,T=null,E=null,y=new Ee(0,0,0),b=0,w=!1,R=null,P=null,I=null,C=null,L=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,W=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(O)[1]),z=W>=1):O.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),z=W>=2);let H=null,V={},ie=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),Qe=new St().fromArray(ie),Re=new St().fromArray(he);function He(X,Pe,fe,De){let ze=new Uint8Array(4),Se=i.createTexture();i.bindTexture(X,Se),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<fe;tt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(Pe+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return Se}let J={};J[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Rr),me(!1),Te(mh),Z(i.CULL_FACE),mt(Vn);function Z(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function Me(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function Le(X,Pe){return g[X]!==Pe?(i.bindFramebuffer(X,Pe),g[X]=Pe,X===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Pe),X===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function we(X,Pe){let fe=_,De=!1;if(X){fe=v.get(Pe),fe===void 0&&(fe=[],v.set(Pe,fe));let ze=X.textures;if(fe.length!==ze.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,tt=ze.length;Se<tt;Se++)fe[Se]=i.COLOR_ATTACHMENT0+Se;fe.length=ze.length,De=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,De=!0);De&&i.drawBuffers(fe)}function Ge(X){return S!==X?(i.useProgram(X),S=X,!0):!1}let Je={[Xs]:i.FUNC_ADD,[Bd]:i.FUNC_SUBTRACT,[Od]:i.FUNC_REVERSE_SUBTRACT};Je[zd]=i.MIN,Je[kd]=i.MAX;let Be={[Hd]:i.ZERO,[Vd]:i.ONE,[Gd]:i.SRC_COLOR,[xh]:i.SRC_ALPHA,[$d]:i.SRC_ALPHA_SATURATE,[Yd]:i.DST_COLOR,[Xd]:i.DST_ALPHA,[Wd]:i.ONE_MINUS_SRC_COLOR,[_h]:i.ONE_MINUS_SRC_ALPHA,[Zd]:i.ONE_MINUS_DST_COLOR,[qd]:i.ONE_MINUS_DST_ALPHA,[Jd]:i.CONSTANT_COLOR,[Kd]:i.ONE_MINUS_CONSTANT_COLOR,[jd]:i.CONSTANT_ALPHA,[Qd]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(X,Pe,fe,De,ze,Se,tt,je,It,lt){if(X===Vn){l===!0&&(Me(i.BLEND),l=!1);return}if(l===!1&&(Z(i.BLEND),l=!0),X!==Fd){if(X!==f||lt!==w){if((d!==Xs||M!==Xs)&&(i.blendEquation(i.FUNC_ADD),d=Xs,M=Xs),lt)switch(X){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFunc(i.ONE,i.ONE);break;case gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dt("WebGLState: Invalid blending: ",X);break}else switch(X){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gh:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",X);break}x=null,p=null,T=null,E=null,y.set(0,0,0),b=0,f=X,w=lt}return}ze=ze||Pe,Se=Se||fe,tt=tt||De,(Pe!==d||ze!==M)&&(i.blendEquationSeparate(Je[Pe],Je[ze]),d=Pe,M=ze),(fe!==x||De!==p||Se!==T||tt!==E)&&(i.blendFuncSeparate(Be[fe],Be[De],Be[Se],Be[tt]),x=fe,p=De,T=Se,E=tt),(je.equals(y)===!1||It!==b)&&(i.blendColor(je.r,je.g,je.b,It),y.copy(je),b=It),f=X,w=!1}function Q(X,Pe){X.side===Tn?Me(i.CULL_FACE):Z(i.CULL_FACE);let fe=X.side===Cn;Pe&&(fe=!fe),me(fe),X.blending===Wr&&X.transparent===!1?mt(Vn):mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let De=X.stencilWrite;a.setTest(De),De&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ee(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(X){R!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),R=X)}function Te(X){X!==Dd?(Z(i.CULL_FACE),X!==P&&(X===mh?i.cullFace(i.BACK):X===Nd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),P=X}function K(X){X!==I&&(z&&i.lineWidth(X),I=X)}function ee(X,Pe,fe){X?(Z(i.POLYGON_OFFSET_FILL),(C!==Pe||L!==fe)&&(C=Pe,L=fe,o.getReversed()&&(Pe=-Pe),i.polygonOffset(Pe,fe))):Me(i.POLYGON_OFFSET_FILL)}function re(X){X?Z(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function se(X){X===void 0&&(X=i.TEXTURE0+D-1),H!==X&&(i.activeTexture(X),H=X)}function F(X,Pe,fe){fe===void 0&&(H===null?fe=i.TEXTURE0+D-1:fe=H);let De=V[fe];De===void 0&&(De={type:void 0,texture:void 0},V[fe]=De),(De.type!==X||De.texture!==Pe)&&(H!==fe&&(i.activeTexture(fe),H=fe),i.bindTexture(X,Pe||J[X]),De.type=X,De.texture=Pe)}function ge(){let X=V[H];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function j(){try{i.compressedTexImage2D(...arguments)}catch(X){dt("WebGLState:",X)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(X){dt("WebGLState:",X)}}function A(){try{i.texSubImage2D(...arguments)}catch(X){dt("WebGLState:",X)}}function G(){try{i.texSubImage3D(...arguments)}catch(X){dt("WebGLState:",X)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(X){dt("WebGLState:",X)}}function B(){try{i.compressedTexSubImage3D(...arguments)}catch(X){dt("WebGLState:",X)}}function le(){try{i.texStorage2D(...arguments)}catch(X){dt("WebGLState:",X)}}function ye(){try{i.texStorage3D(...arguments)}catch(X){dt("WebGLState:",X)}}function oe(){try{i.texImage2D(...arguments)}catch(X){dt("WebGLState:",X)}}function ue(){try{i.texImage3D(...arguments)}catch(X){dt("WebGLState:",X)}}function pe(X){return m[X]!==void 0?m[X]:i.getParameter(X)}function Ce(X,Pe){m[X]!==Pe&&(i.pixelStorei(X,Pe),m[X]=Pe)}function xe(X){Qe.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Qe.copy(X))}function _e(X){Re.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Re.copy(X))}function Ue(X,Pe){let fe=u.get(Pe);fe===void 0&&(fe=new WeakMap,u.set(Pe,fe));let De=fe.get(X);De===void 0&&(De=i.getUniformBlockIndex(Pe,X.name),fe.set(X,De))}function Ke(X,Pe){let De=u.get(Pe).get(X);c.get(Pe)!==De&&(i.uniformBlockBinding(Pe,De,X.__bindingPointIndex),c.set(Pe,De))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},H=null,V={},g={},v=new WeakMap,_=[],S=null,l=!1,f=null,d=null,x=null,p=null,M=null,T=null,E=null,y=new Ee(0,0,0),b=0,w=!1,R=null,P=null,I=null,C=null,L=null,Qe.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:Me,bindFramebuffer:Le,drawBuffers:we,useProgram:Ge,setBlending:mt,setMaterial:Q,setFlipSided:me,setCullFace:Te,setLineWidth:K,setPolygonOffset:ee,setScissorTest:re,activeTexture:se,bindTexture:F,unbindTexture:ge,compressedTexImage2D:j,compressedTexImage3D:U,texImage2D:oe,texImage3D:ue,pixelStorei:Ce,getParameter:pe,updateUBOMapping:Ue,uniformBlockBinding:Ke,texStorage2D:le,texStorage3D:ye,texSubImage2D:A,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:B,scissor:xe,viewport:_e,reset:et}}function Iy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ie,h=new WeakMap,m=new Set,g,v=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,A){return _?new OffscreenCanvas(U,A):ko("canvas")}function l(U,A,G){let Y=1,B=j(U);if((B.width>G||B.height>G)&&(Y=G/Math.max(B.width,B.height)),Y<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let le=Math.floor(Y*B.width),ye=Math.floor(Y*B.height);g===void 0&&(g=S(le,ye));let oe=A?S(le,ye):g;return oe.width=le,oe.height=ye,oe.getContext("2d").drawImage(U,0,0,le,ye),ut("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+le+"x"+ye+")."),oe}else return"data"in U&&ut("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),U;return U}function f(U){return U.generateMipmaps}function d(U){i.generateMipmap(U)}function x(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(U,A,G,Y,B,le=!1){if(U!==null){if(i[U]!==void 0)return i[U];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ye;Y&&(ye=e.get("EXT_texture_norm16"),ye||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=A;if(A===i.RED&&(G===i.FLOAT&&(oe=i.R32F),G===i.HALF_FLOAT&&(oe=i.R16F),G===i.UNSIGNED_BYTE&&(oe=i.R8),G===i.UNSIGNED_SHORT&&ye&&(oe=ye.R16_EXT),G===i.SHORT&&ye&&(oe=ye.R16_SNORM_EXT)),A===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.R8UI),G===i.UNSIGNED_SHORT&&(oe=i.R16UI),G===i.UNSIGNED_INT&&(oe=i.R32UI),G===i.BYTE&&(oe=i.R8I),G===i.SHORT&&(oe=i.R16I),G===i.INT&&(oe=i.R32I)),A===i.RG&&(G===i.FLOAT&&(oe=i.RG32F),G===i.HALF_FLOAT&&(oe=i.RG16F),G===i.UNSIGNED_BYTE&&(oe=i.RG8),G===i.UNSIGNED_SHORT&&ye&&(oe=ye.RG16_EXT),G===i.SHORT&&ye&&(oe=ye.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RG8UI),G===i.UNSIGNED_SHORT&&(oe=i.RG16UI),G===i.UNSIGNED_INT&&(oe=i.RG32UI),G===i.BYTE&&(oe=i.RG8I),G===i.SHORT&&(oe=i.RG16I),G===i.INT&&(oe=i.RG32I)),A===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),G===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),G===i.UNSIGNED_INT&&(oe=i.RGB32UI),G===i.BYTE&&(oe=i.RGB8I),G===i.SHORT&&(oe=i.RGB16I),G===i.INT&&(oe=i.RGB32I)),A===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),G===i.UNSIGNED_INT&&(oe=i.RGBA32UI),G===i.BYTE&&(oe=i.RGBA8I),G===i.SHORT&&(oe=i.RGBA16I),G===i.INT&&(oe=i.RGBA32I)),A===i.RGB&&(G===i.UNSIGNED_SHORT&&ye&&(oe=ye.RGB16_EXT),G===i.SHORT&&ye&&(oe=ye.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),A===i.RGBA){let ue=le?zo:bt.getTransfer(B);G===i.FLOAT&&(oe=i.RGBA32F),G===i.HALF_FLOAT&&(oe=i.RGBA16F),G===i.UNSIGNED_BYTE&&(oe=ue===Ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ye&&(oe=ye.RGBA16_EXT),G===i.SHORT&&ye&&(oe=ye.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(U,A){let G;return U?A===null||A===Ai||A===qr?G=i.DEPTH24_STENCIL8:A===pi?G=i.DEPTH32F_STENCIL8:A===Xr&&(G=i.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ai||A===qr?G=i.DEPTH_COMPONENT24:A===pi?G=i.DEPTH_COMPONENT32F:A===Xr&&(G=i.DEPTH_COMPONENT16),G}function T(U,A){return f(U)===!0||U.isFramebufferTexture&&U.minFilter!==fn&&U.minFilter!==Ot?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function E(U){let A=U.target;A.removeEventListener("dispose",E),b(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&m.delete(A)}function y(U){let A=U.target;A.removeEventListener("dispose",y),R(A)}function b(U){let A=n.get(U);if(A.__webglInit===void 0)return;let G=U.source,Y=v.get(G);if(Y){let B=Y[A.__cacheKey];B.usedTimes--,B.usedTimes===0&&w(U),Object.keys(Y).length===0&&v.delete(G)}n.remove(U)}function w(U){let A=n.get(U);i.deleteTexture(A.__webglTexture);let G=U.source,Y=v.get(G);delete Y[A.__cacheKey],o.memory.textures--}function R(U){let A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let B=0;B<A.__webglFramebuffer[Y].length;B++)i.deleteFramebuffer(A.__webglFramebuffer[Y][B]);else i.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)i.deleteFramebuffer(A.__webglFramebuffer[Y]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let G=U.textures;for(let Y=0,B=G.length;Y<B;Y++){let le=n.get(G[Y]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(G[Y])}n.remove(U)}let P=0;function I(){P=0}function C(){return P}function L(U){P=U}function D(){let U=P;return U>=s.maxTextures&&ut("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,U}function z(U){let A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function W(U,A){let G=n.get(U);if(U.isVideoTexture&&F(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&G.__version!==U.version){let Y=U.image;if(Y===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(G,U,A);return}}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+A)}function O(U,A){let G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){Me(G,U,A);return}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+A)}function H(U,A){let G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){Me(G,U,A);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+A)}function V(U,A){let G=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&G.__version!==U.version){Le(G,U,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+A)}let ie={[Cr]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[Tl]:i.MIRRORED_REPEAT},he={[fn]:i.NEAREST,[n0]:i.NEAREST_MIPMAP_NEAREST,[ga]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[ic]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},Qe={[o0]:i.NEVER,[h0]:i.ALWAYS,[a0]:i.LESS,[Hc]:i.LEQUAL,[l0]:i.EQUAL,[Vc]:i.GEQUAL,[c0]:i.GREATER,[u0]:i.NOTEQUAL};function Re(U,A){if(A.type===pi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ot||A.magFilter===ic||A.magFilter===ga||A.magFilter===Gn||A.minFilter===Ot||A.minFilter===ic||A.minFilter===ga||A.minFilter===Gn)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ie[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ie[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ie[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,he[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,he[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Qe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===fn||A.minFilter!==ga&&A.minFilter!==Gn||A.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function He(U,A){let G=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",E));let Y=A.source,B=v.get(Y);B===void 0&&(B={},v.set(Y,B));let le=z(A);if(le!==U.__cacheKey){B[le]===void 0&&(B[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),B[le].usedTimes++;let ye=B[U.__cacheKey];ye!==void 0&&(B[U.__cacheKey].usedTimes--,ye.usedTimes===0&&w(A)),U.__cacheKey=le,U.__webglTexture=B[le].texture}return G}function J(U,A,G){return Math.floor(Math.floor(U/G)/A)}function Z(U,A,G,Y){let le=U.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,G,Y,A.data);else{le.sort((Ce,xe)=>Ce.start-xe.start);let ye=0;for(let Ce=1;Ce<le.length;Ce++){let xe=le[ye],_e=le[Ce],Ue=xe.start+xe.count,Ke=J(_e.start,A.width,4),et=J(xe.start,A.width,4);_e.start<=Ue+1&&Ke===et&&J(_e.start+_e.count-1,A.width,4)===Ke?xe.count=Math.max(xe.count,_e.start+_e.count-xe.start):(++ye,le[ye]=_e)}le.length=ye+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Ce=0,xe=le.length;Ce<xe;Ce++){let _e=le[Ce],Ue=Math.floor(_e.start/4),Ke=Math.ceil(_e.count/4),et=Ue%A.width,X=Math.floor(Ue/A.width),Pe=Ke,fe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,et,X,Pe,fe,G,Y,A.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function Me(U,A,G){let Y=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Y=i.TEXTURE_3D);let B=He(U,A),le=A.source;t.bindTexture(Y,U.__webglTexture,i.TEXTURE0+G);let ye=n.get(le);if(le.version!==ye.__version||B===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let fe=bt.getPrimaries(bt.workingColorSpace),De=A.colorSpace===Ri?null:bt.getPrimaries(A.colorSpace),ze=A.colorSpace===Ri||fe===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let ue=l(A.image,!1,s.maxTextureSize);ue=ge(A,ue);let pe=r.convert(A.format,A.colorSpace),Ce=r.convert(A.type),xe=p(A.internalFormat,pe,Ce,A.normalized,A.colorSpace,A.isVideoTexture);Re(Y,A);let _e,Ue=A.mipmaps,Ke=A.isVideoTexture!==!0,et=ye.__version===void 0||B===!0,X=le.dataReady,Pe=T(A,ue);if(A.isDepthTexture)xe=M(A.format===bs,A.type),et&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,xe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,xe,ue.width,ue.height,0,pe,Ce,null));else if(A.isDataTexture)if(Ue.length>0){Ke&&et&&t.texStorage2D(i.TEXTURE_2D,Pe,xe,Ue[0].width,Ue[0].height);for(let fe=0,De=Ue.length;fe<De;fe++)_e=Ue[fe],Ke?X&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,_e.width,_e.height,pe,Ce,_e.data):t.texImage2D(i.TEXTURE_2D,fe,xe,_e.width,_e.height,0,pe,Ce,_e.data);A.generateMipmaps=!1}else Ke?(et&&t.texStorage2D(i.TEXTURE_2D,Pe,xe,ue.width,ue.height),X&&Z(A,ue,pe,Ce)):t.texImage2D(i.TEXTURE_2D,0,xe,ue.width,ue.height,0,pe,Ce,ue.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ke&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,xe,Ue[0].width,Ue[0].height,ue.depth);for(let fe=0,De=Ue.length;fe<De;fe++)if(_e=Ue[fe],A.format!==Jn)if(pe!==null)if(Ke){if(X)if(A.layerUpdates.size>0){let ze=kh(_e.width,_e.height,A.format,A.type);for(let Se of A.layerUpdates){let tt=_e.data.subarray(Se*ze/_e.data.BYTES_PER_ELEMENT,(Se+1)*ze/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Se,_e.width,_e.height,1,pe,tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,ue.depth,pe,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,xe,_e.width,_e.height,ue.depth,0,_e.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,ue.depth,pe,Ce,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,xe,_e.width,_e.height,ue.depth,0,pe,Ce,_e.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Ke&&et&&t.texStorage2D(i.TEXTURE_2D,Pe,xe,Ue[0].width,Ue[0].height);for(let fe=0,De=Ue.length;fe<De;fe++)_e=Ue[fe],A.format!==Jn?pe!==null?Ke?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,_e.width,_e.height,pe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,xe,_e.width,_e.height,0,_e.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?X&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,_e.width,_e.height,pe,Ce,_e.data):t.texImage2D(i.TEXTURE_2D,fe,xe,_e.width,_e.height,0,pe,Ce,_e.data)}else if(A.isDataArrayTexture)if(Ke){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,xe,ue.width,ue.height,ue.depth),X)if(A.layerUpdates.size>0){let fe=kh(ue.width,ue.height,A.format,A.type);for(let De of A.layerUpdates){let ze=ue.data.subarray(De*fe/ue.data.BYTES_PER_ELEMENT,(De+1)*fe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,ue.width,ue.height,1,pe,Ce,ze)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,pe,Ce,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,ue.width,ue.height,ue.depth,0,pe,Ce,ue.data);else if(A.isData3DTexture)Ke?(et&&t.texStorage3D(i.TEXTURE_3D,Pe,xe,ue.width,ue.height,ue.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,pe,Ce,ue.data)):t.texImage3D(i.TEXTURE_3D,0,xe,ue.width,ue.height,ue.depth,0,pe,Ce,ue.data);else if(A.isFramebufferTexture){if(et)if(Ke)t.texStorage2D(i.TEXTURE_2D,Pe,xe,ue.width,ue.height);else{let fe=ue.width,De=ue.height;for(let ze=0;ze<Pe;ze++)t.texImage2D(i.TEXTURE_2D,ze,xe,fe,De,0,pe,Ce,null),fe>>=1,De>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let fe=i.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),ue.parentNode!==fe){fe.appendChild(ue),m.add(A),fe.onpaint=De=>{let ze=De.changedElements;for(let Se of m)ze.includes(Se.image)&&(Se.needsUpdate=!0)},fe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let ze=i.RGBA,Se=i.RGBA,tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,Se,tt,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ke&&et){let fe=j(Ue[0]);t.texStorage2D(i.TEXTURE_2D,Pe,xe,fe.width,fe.height)}for(let fe=0,De=Ue.length;fe<De;fe++)_e=Ue[fe],Ke?X&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,pe,Ce,_e):t.texImage2D(i.TEXTURE_2D,fe,xe,pe,Ce,_e);A.generateMipmaps=!1}else if(Ke){if(et){let fe=j(ue);t.texStorage2D(i.TEXTURE_2D,Pe,xe,fe.width,fe.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ce,ue)}else t.texImage2D(i.TEXTURE_2D,0,xe,pe,Ce,ue);f(A)&&d(Y),ye.__version=le.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Le(U,A,G){if(A.image.length!==6)return;let Y=He(U,A),B=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+G);let le=n.get(B);if(B.version!==le.__version||Y===!0){t.activeTexture(i.TEXTURE0+G);let ye=bt.getPrimaries(bt.workingColorSpace),oe=A.colorSpace===Ri?null:bt.getPrimaries(A.colorSpace),ue=A.colorSpace===Ri||ye===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let pe=A.isCompressedTexture||A.image[0].isCompressedTexture,Ce=A.image[0]&&A.image[0].isDataTexture,xe=[];for(let Se=0;Se<6;Se++)!pe&&!Ce?xe[Se]=l(A.image[Se],!0,s.maxCubemapSize):xe[Se]=Ce?A.image[Se].image:A.image[Se],xe[Se]=ge(A,xe[Se]);let _e=xe[0],Ue=r.convert(A.format,A.colorSpace),Ke=r.convert(A.type),et=p(A.internalFormat,Ue,Ke,A.normalized,A.colorSpace),X=A.isVideoTexture!==!0,Pe=le.__version===void 0||Y===!0,fe=B.dataReady,De=T(A,_e);Re(i.TEXTURE_CUBE_MAP,A);let ze;if(pe){X&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,et,_e.width,_e.height);for(let Se=0;Se<6;Se++){ze=xe[Se].mipmaps;for(let tt=0;tt<ze.length;tt++){let je=ze[tt];A.format!==Jn?Ue!==null?X?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,tt,0,0,je.width,je.height,Ue,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,tt,et,je.width,je.height,0,je.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,tt,0,0,je.width,je.height,Ue,Ke,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,tt,et,je.width,je.height,0,Ue,Ke,je.data)}}}else{if(ze=A.mipmaps,X&&Pe){ze.length>0&&De++;let Se=j(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,et,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ce){X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,xe[Se].width,xe[Se].height,Ue,Ke,xe[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,et,xe[Se].width,xe[Se].height,0,Ue,Ke,xe[Se].data);for(let tt=0;tt<ze.length;tt++){let It=ze[tt].image[Se].image;X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,tt+1,0,0,It.width,It.height,Ue,Ke,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,tt+1,et,It.width,It.height,0,Ue,Ke,It.data)}}else{X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ue,Ke,xe[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,et,Ue,Ke,xe[Se]);for(let tt=0;tt<ze.length;tt++){let je=ze[tt];X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,tt+1,0,0,Ue,Ke,je.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,tt+1,et,Ue,Ke,je.image[Se])}}}f(A)&&d(i.TEXTURE_CUBE_MAP),le.__version=B.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function we(U,A,G,Y,B,le){let ye=r.convert(G.format,G.colorSpace),oe=r.convert(G.type),ue=p(G.internalFormat,ye,oe,G.normalized,G.colorSpace),pe=n.get(A),Ce=n.get(G);if(Ce.__renderTarget=A,!pe.__hasExternalTextures){let xe=Math.max(1,A.width>>le),_e=Math.max(1,A.height>>le);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?t.texImage3D(B,le,ue,xe,_e,A.depth,0,ye,oe,null):t.texImage2D(B,le,ue,xe,_e,0,ye,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),se(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,B,Ce.__webglTexture,0,re(A)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,B,Ce.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(U,A,G){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){let Y=A.depthTexture,B=Y&&Y.isDepthTexture?Y.type:null,le=M(A.stencilBuffer,B),ye=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;se(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(A),le,A.width,A.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(A),le,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,le,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,U)}else{let Y=A.textures;for(let B=0;B<Y.length;B++){let le=Y[B],ye=r.convert(le.format,le.colorSpace),oe=r.convert(le.type),ue=p(le.internalFormat,ye,oe,le.normalized,le.colorSpace);se(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(A),ue,A.width,A.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(A),ue,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ue,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(U,A,G){let Y=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let B=n.get(A.depthTexture);if(B.__renderTarget=A,(!B.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Y){if(B.__webglInit===void 0&&(B.__webglInit=!0,A.depthTexture.addEventListener("dispose",E)),B.__webglTexture===void 0){B.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Re(i.TEXTURE_CUBE_MAP,A.depthTexture);let pe=r.convert(A.depthTexture.format),Ce=r.convert(A.depthTexture.type),xe;A.depthTexture.format===Bi?xe=i.DEPTH_COMPONENT24:A.depthTexture.format===bs&&(xe=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,xe,A.width,A.height,0,pe,Ce,null)}}else W(A.depthTexture,0);let le=B.__webglTexture,ye=re(A),oe=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ue=A.depthTexture.format===bs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Bi)se(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,oe,le,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,ue,oe,le,0);else if(A.depthTexture.format===bs)se(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,oe,le,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,ue,oe,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(U){let A=n.get(U),G=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){let Y=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Y){let B=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Y.removeEventListener("dispose",B)};Y.addEventListener("dispose",B),A.__depthDisposeCallback=B}A.__boundDepthTexture=Y}if(U.depthTexture&&!A.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)Je(A.__webglFramebuffer[Y],U,Y);else{let Y=U.texture.mipmaps;Y&&Y.length>0?Je(A.__webglFramebuffer[0],U,0):Je(A.__webglFramebuffer,U,0)}else if(G){A.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Y]),A.__webglDepthbuffer[Y]===void 0)A.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ge(A.__webglDepthbuffer[Y],U,!1);else{let B=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=A.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,le)}}else{let Y=U.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Ge(A.__webglDepthbuffer,U,!1);else{let B=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(U,A,G){let Y=n.get(U);A!==void 0&&we(Y.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Be(U)}function Q(U){let A=U.texture,G=n.get(U),Y=n.get(A);U.addEventListener("dispose",y);let B=U.textures,le=U.isWebGLCubeRenderTarget===!0,ye=B.length>1;if(ye||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=A.version,o.memory.textures++),le){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let ue=0;ue<A.mipmaps.length;ue++)G.__webglFramebuffer[oe][ue]=i.createFramebuffer()}else G.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<A.mipmaps.length;oe++)G.__webglFramebuffer[oe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ye)for(let oe=0,ue=B.length;oe<ue;oe++){let pe=n.get(B[oe]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&se(U)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<B.length;oe++){let ue=B[oe];G.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);let pe=r.convert(ue.format,ue.colorSpace),Ce=r.convert(ue.type),xe=p(ue.internalFormat,pe,Ce,ue.normalized,ue.colorSpace,U.isXRRenderTarget===!0),_e=re(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,xe,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(G.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Re(i.TEXTURE_CUBE_MAP,A);for(let oe=0;oe<6;oe++)if(A.mipmaps&&A.mipmaps.length>0)for(let ue=0;ue<A.mipmaps.length;ue++)we(G.__webglFramebuffer[oe][ue],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else we(G.__webglFramebuffer[oe],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);f(A)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let oe=0,ue=B.length;oe<ue;oe++){let pe=B[oe],Ce=n.get(pe),xe=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Ce.__webglTexture),Re(xe,pe),we(G.__webglFramebuffer,U,pe,i.COLOR_ATTACHMENT0+oe,xe,0),f(pe)&&d(xe)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(oe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),Re(oe,A),A.mipmaps&&A.mipmaps.length>0)for(let ue=0;ue<A.mipmaps.length;ue++)we(G.__webglFramebuffer[ue],U,A,i.COLOR_ATTACHMENT0,oe,ue);else we(G.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,oe,0);f(A)&&d(oe),t.unbindTexture()}U.depthBuffer&&Be(U)}function me(U){let A=U.textures;for(let G=0,Y=A.length;G<Y;G++){let B=A[G];if(f(B)){let le=x(U),ye=n.get(B).__webglTexture;t.bindTexture(le,ye),d(le),t.unbindTexture()}}}let Te=[],K=[];function ee(U){if(U.samples>0){if(se(U)===!1){let A=U.textures,G=U.width,Y=U.height,B=i.COLOR_BUFFER_BIT,le=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(U),oe=A.length>1;if(oe)for(let pe=0;pe<A.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let ue=U.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let pe=0;pe<A.length;pe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);let Ce=n.get(A[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,G,Y,0,0,G,Y,B,i.NEAREST),c===!0&&(Te.length=0,K.length=0,Te.push(i.COLOR_ATTACHMENT0+pe),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Te.push(le),K.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<A.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);let Ce=n.get(A[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){let A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function re(U){return Math.min(s.maxSamples,U.samples)}function se(U){let A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function F(U){let A=o.render.frame;h.get(U)!==A&&(h.set(U,A),U.update())}function ge(U,A){let G=U.colorSpace,Y=U.format,B=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||G!==Oo&&G!==Ri&&(bt.getTransfer(G)===Ct?(Y!==Jn||B!==Fn)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",G)),A}function j(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.getTextureUnits=C,this.setTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=mt,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=we,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ly(i,e){function t(n,s=Ri){let r,o=bt.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rh)return i.BYTE;if(n===Ch)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===sc)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===pi)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Lh)return i.ALPHA;if(n===Dh)return i.RGB;if(n===Jn)return i.RGBA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===Ys)return i.RED;if(n===ac)return i.RED_INTEGER;if(n===Ss)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===cc)return i.RGBA_INTEGER;if(n===va||n===xa||n===_a||n===ya)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uc||n===hc||n===fc||n===dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc||n===vc||n===xc||n===Ma||n===_c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pc||n===mc)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vc)return r.COMPRESSED_R11_EAC;if(n===xc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ma)return r.COMPRESSED_RG11_EAC;if(n===_c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yc||n===Mc||n===bc||n===Sc||n===Tc||n===Ec||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ec)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nc||n===Uc||n===Fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Nc)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===Oc||n===ba||n===zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ny=`
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

}`,of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Jo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _t({vertexShader:Dy,fragmentShader:Ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},af=class extends Oi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,m=null,g=null,v=null,_=null,S=typeof XRWebGLBinding<"u",l=new of,f={},d=t.getContextAttributes(),x=null,p=null,M=[],T=[],E=new Ie,y=null,b=null,w=new Rn;w.viewport=new St;let R=new Rn;R.viewport=new St;let P=[w,R],I=new Ql,C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Z=M[J];return Z===void 0&&(Z=new Dr,M[J]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(J){let Z=M[J];return Z===void 0&&(Z=new Dr,M[J]=Z),Z.getGripSpace()},this.getHand=function(J){let Z=M[J];return Z===void 0&&(Z=new Dr,M[J]=Z),Z.getHandSpace()};function D(J){let Z=T.indexOf(J.inputSource);if(Z===-1)return;let Me=M[Z];Me!==void 0&&(Me.update(J.inputSource,J.frame,u||o),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",W);for(let J=0;J<M.length;J++){let Z=T[J];Z!==null&&(T[J]=null,M[J].disconnect(Z))}C=null,L=null,l.reset();for(let J in f)delete f[J];if(e.setRenderTarget(x),v=null,g=null,m=null,s=null,p=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),b!==null){let J=b.camera;J.fov=b.fov,J.zoom=b.zoom,J.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m===null&&S&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",z),s.addEventListener("inputsourceschange",W),d.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Le=null,we=null;d.depth&&(we=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=d.stencil?bs:Bi,Le=d.stencil?qr:Ai);let Ge={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};m=this.getBinding(),g=m.createProjectionLayer(Ge),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),p=new Ut(g.textureWidth,g.textureHeight,{format:Jn,type:Fn,depthTexture:new ps(g.textureWidth,g.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Me={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),p=new Ut(v.framebufferWidth,v.framebufferHeight,{format:Jn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function W(J){for(let Z=0;Z<J.removed.length;Z++){let Me=J.removed[Z],Le=T.indexOf(Me);Le>=0&&(T[Le]=null,M[Le].disconnect(Me))}for(let Z=0;Z<J.added.length;Z++){let Me=J.added[Z],Le=T.indexOf(Me);if(Le===-1){for(let Ge=0;Ge<M.length;Ge++)if(Ge>=T.length){T.push(Me),Le=Ge;break}else if(T[Ge]===null){T[Ge]=Me,Le=Ge;break}if(Le===-1)break}let we=M[Le];we&&we.connect(Me)}}let O=new k,H=new k;function V(J,Z,Me){O.setFromMatrixPosition(Z.matrixWorld),H.setFromMatrixPosition(Me.matrixWorld);let Le=O.distanceTo(H),we=Z.projectionMatrix.elements,Ge=Me.projectionMatrix.elements,Je=we[14]/(we[10]-1),Be=we[14]/(we[10]+1),mt=(we[9]+1)/we[5],Q=(we[9]-1)/we[5],me=(we[8]-1)/we[0],Te=(Ge[8]+1)/Ge[0],K=Je*me,ee=Je*Te,re=Le/(-me+Te),se=re*-me;if(Z.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(se),J.translateZ(re),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let F=Je+re,ge=Be+re,j=K-se,U=ee+(Le-se),A=mt*Be/ge*F,G=Q*Be/ge*F;J.projectionMatrix.makePerspective(j,U,A,G,F,ge),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ie(J,Z){Z===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Z.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Z=J.near,Me=J.far;l.texture!==null&&(l.depthNear>0&&(Z=l.depthNear),l.depthFar>0&&(Me=l.depthFar)),I.near=R.near=w.near=Z,I.far=R.far=w.far=Me,(C!==I.near||L!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),C=I.near,L=I.far),I.layers.mask=J.layers.mask|6,w.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;let Le=J.parent,we=I.cameras;ie(I,Le);for(let Ge=0;Ge<we.length;Ge++)ie(we[Ge],Le);we.length===2?V(I,w,R):I.projectionMatrix.copy(w.projectionMatrix),b===null&&J.isPerspectiveCamera&&(b={camera:J,fov:J.fov,zoom:J.zoom}),he(J,I,Le)};function he(J,Z,Me){Me===null?J.matrix.copy(Z.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(Z.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ho*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(g===null&&v===null))return c},this.setFoveation=function(J){c=J,g!==null&&(g.fixedFoveation=J),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=J)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(I)},this.getCameraTexture=function(J){return f[J]};let Qe=null;function Re(J,Z){if(h=Z.getViewerPose(u||o),_=Z,h!==null){let Me=h.views;v!==null&&(e.setRenderTargetFramebuffer(p,v.framebuffer),e.setRenderTarget(p));let Le=!1;Me.length!==I.cameras.length&&(I.cameras.length=0,Le=!0);for(let Be=0;Be<Me.length;Be++){let mt=Me[Be],Q=null;if(v!==null)Q=v.getViewport(mt);else{let Te=m.getViewSubImage(g,mt);Q=Te.viewport,Be===0&&(e.setRenderTargetTextures(p,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(p))}let me=P[Be];me===void 0&&(me=new Rn,me.layers.enable(Be),me.viewport=new St,P[Be]=me),me.matrix.fromArray(mt.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(mt.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Q.x,Q.y,Q.width,Q.height),Be===0&&(I.matrix.copy(me.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Le===!0&&I.cameras.push(me)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){m=n.getBinding();let Be=m.getDepthInformation(Me[0]);Be&&Be.isValid&&Be.texture&&l.init(Be,s.renderState)}if(we&&we.includes("camera-access")&&S){e.state.unbindTexture(),m=n.getBinding();for(let Be=0;Be<Me.length;Be++){let mt=Me[Be].camera;if(mt){let Q=f[mt];Q||(Q=new Jo,f[mt]=Q);let me=m.getCameraImage(mt);Q.sourceTexture=me}}}}for(let Me=0;Me<M.length;Me++){let Le=T[Me],we=M[Me];Le!==null&&we!==void 0&&we.update(Le,Z,u||o)}Qe&&Qe(J,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}let He=new X0;He.setAnimationLoop(Re),this.setAnimationLoop=function(J){Qe=J},this.dispose=function(){}}},Uy=new it,K0=new pt;K0.set(-1,0,0,0,1,0,0,0,1);function Fy(i,e){function t(l,f){l.matrixAutoUpdate===!0&&l.updateMatrix(),f.value.copy(l.matrix)}function n(l,f){f.color.getRGB(l.fogColor.value,Bh(i)),f.isFog?(l.fogNear.value=f.near,l.fogFar.value=f.far):f.isFogExp2&&(l.fogDensity.value=f.density)}function s(l,f,d,x,p){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(l,f):f.isMeshLambertMaterial?(r(l,f),f.envMap&&(l.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(l,f),m(l,f)):f.isMeshPhongMaterial?(r(l,f),h(l,f),f.envMap&&(l.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(l,f),g(l,f),f.isMeshPhysicalMaterial&&v(l,f,p)):f.isMeshMatcapMaterial?(r(l,f),_(l,f)):f.isMeshDepthMaterial?r(l,f):f.isMeshDistanceMaterial?(r(l,f),S(l,f)):f.isMeshNormalMaterial?r(l,f):f.isLineBasicMaterial?(o(l,f),f.isLineDashedMaterial&&a(l,f)):f.isPointsMaterial?c(l,f,d,x):f.isSpriteMaterial?u(l,f):f.isShadowMaterial?(l.color.value.copy(f.color),l.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(l,f){l.opacity.value=f.opacity,f.color&&l.diffuse.value.copy(f.color),f.emissive&&l.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(l.map.value=f.map,t(f.map,l.mapTransform)),f.alphaMap&&(l.alphaMap.value=f.alphaMap,t(f.alphaMap,l.alphaMapTransform)),f.bumpMap&&(l.bumpMap.value=f.bumpMap,t(f.bumpMap,l.bumpMapTransform),l.bumpScale.value=f.bumpScale,f.side===Cn&&(l.bumpScale.value*=-1)),f.normalMap&&(l.normalMap.value=f.normalMap,t(f.normalMap,l.normalMapTransform),l.normalScale.value.copy(f.normalScale),f.side===Cn&&l.normalScale.value.negate()),f.displacementMap&&(l.displacementMap.value=f.displacementMap,t(f.displacementMap,l.displacementMapTransform),l.displacementScale.value=f.displacementScale,l.displacementBias.value=f.displacementBias),f.emissiveMap&&(l.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,l.emissiveMapTransform)),f.specularMap&&(l.specularMap.value=f.specularMap,t(f.specularMap,l.specularMapTransform)),f.alphaTest>0&&(l.alphaTest.value=f.alphaTest);let d=e.get(f),x=d.envMap,p=d.envMapRotation;x&&(l.envMap.value=x,l.envMapRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(p)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.envMapRotation.value.premultiply(K0),l.reflectivity.value=f.reflectivity,l.ior.value=f.ior,l.refractionRatio.value=f.refractionRatio),f.lightMap&&(l.lightMap.value=f.lightMap,l.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,l.lightMapTransform)),f.aoMap&&(l.aoMap.value=f.aoMap,l.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,l.aoMapTransform))}function o(l,f){l.diffuse.value.copy(f.color),l.opacity.value=f.opacity,f.map&&(l.map.value=f.map,t(f.map,l.mapTransform))}function a(l,f){l.dashSize.value=f.dashSize,l.totalSize.value=f.dashSize+f.gapSize,l.scale.value=f.scale}function c(l,f,d,x){l.diffuse.value.copy(f.color),l.opacity.value=f.opacity,l.size.value=f.size*d,l.scale.value=x*.5,f.map&&(l.map.value=f.map,t(f.map,l.uvTransform)),f.alphaMap&&(l.alphaMap.value=f.alphaMap,t(f.alphaMap,l.alphaMapTransform)),f.alphaTest>0&&(l.alphaTest.value=f.alphaTest)}function u(l,f){l.diffuse.value.copy(f.color),l.opacity.value=f.opacity,l.rotation.value=f.rotation,f.map&&(l.map.value=f.map,t(f.map,l.mapTransform)),f.alphaMap&&(l.alphaMap.value=f.alphaMap,t(f.alphaMap,l.alphaMapTransform)),f.alphaTest>0&&(l.alphaTest.value=f.alphaTest)}function h(l,f){l.specular.value.copy(f.specular),l.shininess.value=Math.max(f.shininess,1e-4)}function m(l,f){f.gradientMap&&(l.gradientMap.value=f.gradientMap)}function g(l,f){l.metalness.value=f.metalness,f.metalnessMap&&(l.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,l.metalnessMapTransform)),l.roughness.value=f.roughness,f.roughnessMap&&(l.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,l.roughnessMapTransform)),f.envMap&&(l.envMapIntensity.value=f.envMapIntensity)}function v(l,f,d){l.ior.value=f.ior,f.sheen>0&&(l.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),l.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(l.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,l.sheenColorMapTransform)),f.sheenRoughnessMap&&(l.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,l.sheenRoughnessMapTransform))),f.clearcoat>0&&(l.clearcoat.value=f.clearcoat,l.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(l.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,l.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(l.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Cn&&l.clearcoatNormalScale.value.negate())),f.dispersion>0&&(l.dispersion.value=f.dispersion),f.retroreflectivity>0&&(l.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(l.iridescence.value=f.iridescence,l.iridescenceIOR.value=f.iridescenceIOR,l.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(l.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,l.iridescenceMapTransform)),f.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),f.transmission>0&&(l.transmission.value=f.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),f.transmissionMap&&(l.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,l.transmissionMapTransform)),l.thickness.value=f.thickness,f.thicknessMap&&(l.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=f.attenuationDistance,l.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(l.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(l.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=f.specularIntensity,l.specularColor.value.copy(f.specularColor),f.specularColorMap&&(l.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,l.specularColorMapTransform)),f.specularIntensityMap&&(l.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,l.specularIntensityMapTransform))}function _(l,f){f.matcap&&(l.matcap.value=f.matcap)}function S(l,f){let d=e.get(f).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function By(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(p,M){let T=M.program;n.uniformBlockBinding(p,T)}function u(p,M){let T=s[p.id];T===void 0&&(l(p),T=h(p),s[p.id]=T,p.addEventListener("dispose",d));let E=M.program;n.updateUBOMapping(p,E);let y=e.render.frame;r[p.id]!==y&&(g(p),r[p.id]=y)}function h(p){let M=m();p.__bindingPointIndex=M;let T=i.createBuffer(),E=p.__size,y=p.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function m(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(p){let M=s[p.id],T=p.uniforms,E=p.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,b=T.length;y<b;y++){let w=T[y];if(Array.isArray(w))for(let R=0,P=w.length;R<P;R++)v(w[R],y,R,E);else v(w,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(p,M,T,E){if(S(p,M,T,E)===!0){let y=p.__offset,b=p.value;if(Array.isArray(b)){let w=0;for(let R=0;R<b.length;R++){let P=b[R],I=f(P);_(P,p.__data,w),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(w+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,p.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,p.__data)}}function _(p,M,T){typeof p=="number"||typeof p=="boolean"?M[0]=p:p.isMatrix3?(M[0]=p.elements[0],M[1]=p.elements[1],M[2]=p.elements[2],M[3]=0,M[4]=p.elements[3],M[5]=p.elements[4],M[6]=p.elements[5],M[7]=0,M[8]=p.elements[6],M[9]=p.elements[7],M[10]=p.elements[8],M[11]=0):ArrayBuffer.isView(p)?M.set(new p.constructor(p.buffer,p.byteOffset,M.length)):p.toArray(M,T)}function S(p,M,T,E){let y=p.value,b=M+"_"+T;if(E[b]===void 0)return typeof y=="number"||typeof y=="boolean"?E[b]=y:ArrayBuffer.isView(y)?E[b]=y.slice():E[b]=y.clone(),!0;{let w=E[b];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return E[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function l(p){let M=p.uniforms,T=0,E=16;for(let b=0,w=M.length;b<w;b++){let R=Array.isArray(M[b])?M[b]:[M[b]];for(let P=0,I=R.length;P<I;P++){let C=R[P],L=Array.isArray(C.value)?C.value:[C.value];for(let D=0,z=L.length;D<z;D++){let W=L[D],O=f(W),H=T%E,V=H%O.boundary,ie=H+V;T+=V,ie!==0&&E-ie<O.storage&&(T+=E-ie),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=O.storage}}}let y=T%E;return y>0&&(T+=E-y),p.__size=T,p.__cache={},this}function f(p){let M={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(M.boundary=4,M.storage=4):p.isVector2?(M.boundary=8,M.storage=8):p.isVector3||p.isColor?(M.boundary=16,M.storage=12):p.isVector4?(M.boundary=16,M.storage=16):p.isMatrix3?(M.boundary=48,M.storage=48):p.isMatrix4?(M.boundary=64,M.storage=64):p.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(M.boundary=16,M.storage=p.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",p),M}function d(p){let M=p.target;M.removeEventListener("dispose",d);let T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function x(){for(let p in s)i.deleteBuffer(s[p]);o=[],s={},r={}}return{bind:c,update:u,dispose:x}}var Oy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ki=null;function zy(){return ki===null&&(ki=new ds(Oy,16,16,Ss,pn),ki.name="DFG_LUT",ki.minFilter=Ot,ki.magFilter=Ot,ki.wrapS=Fi,ki.wrapT=Fi,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}var Yc=class{constructor(e={}){let{canvas:t=d0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:v=Fn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let S=v,l=new Set([cc,lc,ac]),f=new Set([Fn,Ai,Xr,qr,rc,oc]),d=new Uint32Array(4),x=new Int32Array(4),p=new k,M=null,T=null,E=[],y=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,R=!1,P=null,I=null,C=null,L=null;this._outputColorSpace=jt;let D=0,z=0,W=null,O=-1,H=null,V=new St,ie=new St,he=null,Qe=new Ee(0),Re=0,He=t.width,J=t.height,Z=1,Me=null,Le=null,we=new St(0,0,He,J),Ge=new St(0,0,He,J),Je=!1,Be=new Ur,mt=!1,Q=!1,me=new it,Te=new k,K=new St,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function se(){return W===null?Z:1}let F=n;function ge(N,$){return t.getContext(N,$)}let j,U,A,G,Y,B,le,ye,oe,ue,pe,Ce,xe,_e,Ue,Ke,et,X,Pe,fe,De,ze,Se;try{let N={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Xn,!1),F===null){let $="webgl2";if(F=ge($,N),F===null)throw ge($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(N){throw t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),dt("WebGLRenderer: "+N.message),N}function tt(){j=new qx(F),j.init(),De=new Ly(F,j),U=new Fx(F,j,e,De),A=new Py(F,j),U.reversedDepthBuffer&&g&&A.buffers.depth.setReversed(!0),I=F.createFramebuffer(),C=F.createFramebuffer(),L=F.createFramebuffer(),G=new $x(F),Y=new gy,B=new Iy(F,j,A,Y,U,De,G),le=new Xx(w),ye=new Kg(F),ze=new Nx(F,ye),oe=new Yx(F,ye,G,ze),ue=new Kx(F,oe,ye,ze,G),X=new Jx(F,U,B),Ue=new Bx(Y),pe=new my(w,le,j,U,ze,Ue),Ce=new Fy(w,Y),xe=new xy,_e=new Ty(j),et=new Dx(w,le,A,ue,_,c),Ke=new Cy(w,ue,U),Se=new By(F,G,U,A),Pe=new Ux(F,j,G),fe=new Zx(F,j,G),G.programs=pe.programs,w.capabilities=U,w.extensions=j,w.properties=Y,w.renderLists=xe,w.shadowMap=Ke,w.state=A,w.info=G}S!==Fn&&(b=new Qx(S,t.width,t.height,a,s,r));let je=new af(w,F);this.xr=je,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let N=j.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=j.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(N){N!==void 0&&(Z=N,this.setSize(He,J,!1))},this.getSize=function(N){return N.set(He,J)},this.setSize=function(N,$,ae=!0){if(je.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}He=N,J=$,t.width=Math.floor(N*Z),t.height=Math.floor($*Z),ae===!0&&(t.style.width=N+"px",t.style.height=$+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,N,$)},this.getDrawingBufferSize=function(N){return N.set(He*Z,J*Z).floor()},this.setDrawingBufferSize=function(N,$,ae){He=N,J=$,Z=ae,t.width=Math.floor(N*ae),t.height=Math.floor($*ae),this.setViewport(0,0,N,$)},this.setEffects=function(N){if(S===Fn){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let $=0;$<N.length;$++)if(N[$].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(V)},this.getViewport=function(N){return N.copy(we)},this.setViewport=function(N,$,ae,te){N.isVector4?we.set(N.x,N.y,N.z,N.w):we.set(N,$,ae,te),A.viewport(V.copy(we).multiplyScalar(Z).round())},this.getScissor=function(N){return N.copy(Ge)},this.setScissor=function(N,$,ae,te){N.isVector4?Ge.set(N.x,N.y,N.z,N.w):Ge.set(N,$,ae,te),A.scissor(ie.copy(Ge).multiplyScalar(Z).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(N){A.setScissorTest(Je=N)},this.setOpaqueSort=function(N){Me=N},this.setTransparentSort=function(N){Le=N},this.getClearColor=function(N){return N.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(N=!0,$=!0,ae=!0){let te=0;if(N){let ne=!1;if(W!==null){let ke=W.texture.format;ne=l.has(ke)}if(ne){let ke=W.texture.type,Fe=f.has(ke),Oe=et.getClearColor(),qe=et.getClearAlpha(),Ye=Oe.r,vt=Oe.g,nt=Oe.b;Fe?(d[0]=Ye,d[1]=vt,d[2]=nt,d[3]=qe,F.clearBufferuiv(F.COLOR,0,d)):(x[0]=Ye,x[1]=vt,x[2]=nt,x[3]=qe,F.clearBufferiv(F.COLOR,0,x))}else te|=F.COLOR_BUFFER_BIT}$&&(te|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),P=N},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),et.dispose(),xe.dispose(),_e.dispose(),Y.dispose(),le.dispose(),ue.dispose(),ze.dispose(),Se.dispose(),pe.dispose(),je.dispose(),je.removeEventListener("sessionstart",mo),je.removeEventListener("sessionend",go),Ni.stop()};function It(N){N.preventDefault(),Uh("WebGLRenderer: Context Lost."),R=!0}function lt(){Uh("WebGLRenderer: Context Restored."),R=!1;let N=G.autoReset,$=Ke.enabled,ae=Ke.autoUpdate,te=Ke.needsUpdate,ne=Ke.type;tt(),G.autoReset=N,Ke.enabled=$,Ke.autoUpdate=ae,Ke.needsUpdate=te,Ke.type=ne}function Xn(N){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function jn(N){let $=N.target;$.removeEventListener("dispose",jn),Ba($)}function Ba(N){yu(N),Y.remove(N)}function yu(N){let $=Y.get(N).programs;$!==void 0&&($.forEach(function(ae){pe.releaseProgram(ae)}),N.isShaderMaterial&&pe.releaseShaderCache(N))}this.renderBufferDirect=function(N,$,ae,te,ne,ke){$===null&&($=ee);let Fe=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Oe=Mu(N,$,ae,te,ne);A.setMaterial(te,Fe);let qe=ae.index,Ye=1;if(te.wireframe===!0){if(qe=oe.getWireframeAttribute(ae),qe===void 0)return;Ye=2}let vt=ae.drawRange,nt=ae.attributes.position,Ae=vt.start*Ye,xt=(vt.start+vt.count)*Ye;ke!==null&&(Ae=Math.max(Ae,ke.start*Ye),xt=Math.min(xt,(ke.start+ke.count)*Ye)),qe!==null?(Ae=Math.max(Ae,0),xt=Math.min(xt,qe.count)):nt!=null&&(Ae=Math.max(Ae,0),xt=Math.min(xt,nt.count));let st=xt-Ae;if(st<0||st===1/0)return;ze.setup(ne,te,Oe,ae,qe);let Ft,Lt=Pe;if(qe!==null&&(Ft=ye.get(qe),Lt=fe,Lt.setIndex(Ft)),ne.isMesh)te.wireframe===!0?(A.setLineWidth(te.wireframeLinewidth*se()),Lt.setMode(F.LINES)):Lt.setMode(F.TRIANGLES);else if(ne.isLine){let mn=te.linewidth;mn===void 0&&(mn=1),A.setLineWidth(mn*se()),ne.isLineSegments?Lt.setMode(F.LINES):ne.isLineLoop?Lt.setMode(F.LINE_LOOP):Lt.setMode(F.LINE_STRIP)}else ne.isPoints?Lt.setMode(F.POINTS):ne.isSprite&&Lt.setMode(F.TRIANGLES);if(ne.isBatchedMesh)if(j.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let mn=ne._multiDrawStarts,Xe=ne._multiDrawCounts,yn=ne._multiDrawCount,ce=qe?ye.get(qe).bytesPerElement:1,ot=Y.get(te).currentProgram.getUniforms();for(let Ze=0;Ze<yn;Ze++)ot.setValue(F,"_gl_DrawID",Ze),Lt.render(mn[Ze]/ce,Xe[Ze])}else if(ne.isInstancedMesh)Lt.renderInstances(Ae,st,ne.count);else if(ae.isInstancedBufferGeometry){let mn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Xe=Math.min(ae.instanceCount,mn);Lt.renderInstances(Ae,st,Xe)}else Lt.render(Ae,st)};function rr(N,$,ae,te){P!==null&&N.isNodeMaterial&&P.setObject(te,N),mt===!0&&Ue.setState(N,ae,!1),N.transparent===!0&&N.side===Tn&&N.forceSinglePass===!1?(N.side=Cn,N.needsUpdate=!0,os(N,$,te),N.side=ys,N.needsUpdate=!0,os(N,$,te),N.side=Tn):os(N,$,te)}this.compile=function(N,$,ae=null){ae===null&&(ae=N),P!==null&&P.renderStart(N,$,ae),T=_e.get(ae),T.init($),y.push(T),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(T.pushLight(ne),ne.castShadow&&T.pushShadow(ne))}),N!==ae&&N.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(T.pushLight(ne),ne.castShadow&&T.pushShadow(ne))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),Q=this.localClippingEnabled,mt=Ue.init(this.clippingPlanes,Q),mt===!0&&Ue.setGlobalState(this.clippingPlanes,$),P!==null&&Ke.render(T.state.shadowsArray,ae,$);let te=new Set;return N.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let ke=ne.material;if(ke)if(Array.isArray(ke))for(let Fe=0;Fe<ke.length;Fe++){let Oe=ke[Fe];rr(Oe,ae,$,ne),te.add(Oe)}else rr(ke,ae,$,ne),te.add(ke)}),T=y.pop(),P!==null&&P.renderEnd(),te},this.compileAsync=function(N,$,ae=null){let te=this.compile(N,$,ae);return new Promise(ne=>{function ke(){if(te.forEach(function(Fe){let qe=Y.get(Fe).currentProgram;(qe===void 0||qe.isReady())&&te.delete(Fe)}),te.size===0){ne(N);return}setTimeout(ke,10)}j.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let _n=null;function rn(N){_n&&_n(N)}function mo(){Ni.stop()}function go(){Ni.start()}let Ni=new X0;Ni.setAnimationLoop(rn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(N){_n=N,je.setAnimationLoop(N),N===null?Ni.stop():Ni.start()},je.addEventListener("sessionstart",mo),je.addEventListener("sessionend",go),this.render=function(N,$){if($!==void 0&&$.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(N,$);let ae=je.enabled===!0&&je.isPresenting===!0,te=b!==null&&(W===null||ae)&&b.begin(w,W);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera($),$=je.getCamera()),N.isScene===!0&&N.onBeforeRender(w,N,$,W),T=_e.get(N,y.length),T.init($),T.state.textureUnits=B.getTextureUnits(),y.push(T),me.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Be.setFromProjectionMatrix(me,Ei,$.reversedDepth),Q=this.localClippingEnabled,mt=Ue.init(this.clippingPlanes,Q),M=xe.get(N,E.length),M.init(),E.push(M),je.enabled===!0&&je.isPresenting===!0){let Fe=w.xr.getDepthSensingMesh();Fe!==null&&Ps(Fe,$,-1/0,w.sortObjects)}Ps(N,$,0,w.sortObjects),M.finish(),P!==null&&P.updateLights(T.state.lightsArray),w.sortObjects===!0&&M.sort(Me,Le),re=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,re&&et.addToRenderList(M,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Ue.beginShadows();let ne=T.state.shadowsArray;if(Ke.render(ne,N,$),mt===!0&&Ue.endShadows(),(te&&b.hasRenderPass())===!1){let Fe=M.opaque,Oe=M.transmissive;if(T.setupLights(),$.isArrayCamera){let qe=$.cameras;if(Oe.length>0)for(let Ye=0,vt=qe.length;Ye<vt;Ye++){let nt=qe[Ye];xo(Fe,Oe,N,nt)}re&&et.render(N);for(let Ye=0,vt=qe.length;Ye<vt;Ye++){let nt=qe[Ye];vo(M,N,nt,nt.viewport)}}else Oe.length>0&&xo(Fe,Oe,N,$),re&&et.render(N),vo(M,N,$)}W!==null&&z===0&&(B.updateMultisampleRenderTarget(W),B.updateRenderTargetMipmap(W)),te&&b.end(w),N.isScene===!0&&N.onAfterRender(w,N,$),ze.resetDefaultState(),O=-1,H=null,y.pop(),y.length>0?(T=y[y.length-1],B.setTextureUnits(T.state.textureUnits),mt===!0&&Ue.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,P!==null&&P.renderEnd()};function Ps(N,$,ae,te){if(N.visible===!1)return;if(N.layers.test($.layers)){if(N.isGroup)ae=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update($);else if(N.isLightProbeGrid)T.pushLightProbeGrid(N);else if(N.isLight)T.pushLight(N),N.castShadow&&T.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(Be)){te&&K.setFromMatrixPosition(N.matrixWorld).applyMatrix4(me);let Fe=ue.update(N),Oe=N.material;Oe.visible&&M.push(N,Fe,Oe,ae,K.z,null,$)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(Be))){let Fe=ue.update(N),Oe=N.material;if(te&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),K.copy(N.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),K.copy(Fe.boundingSphere.center)),K.applyMatrix4(N.matrixWorld).applyMatrix4(me)),Array.isArray(Oe)){let qe=Fe.groups;for(let Ye=0,vt=qe.length;Ye<vt;Ye++){let nt=qe[Ye],Ae=Oe[nt.materialIndex];Ae&&Ae.visible&&M.push(N,Fe,Ae,ae,K.z,nt,$)}}else Oe.visible&&M.push(N,Fe,Oe,ae,K.z,null,$)}}let ke=N.children;for(let Fe=0,Oe=ke.length;Fe<Oe;Fe++)Ps(ke[Fe],$,ae,te)}function vo(N,$,ae,te){let{opaque:ne,transmissive:ke,transparent:Fe}=N;T.setupLightsView(ae),mt===!0&&Ue.setGlobalState(w.clippingPlanes,ae),te&&A.viewport(V.copy(te)),ne.length>0&&Is(ne,$,ae),ke.length>0&&Is(ke,$,ae),Fe.length>0&&Is(Fe,$,ae),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function xo(N,$,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[te.id]===void 0){let Ae=j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[te.id]=new Ut(1,1,{generateMipmaps:!0,type:Ae?pn:Fn,minFilter:Gn,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let ke=T.state.transmissionRenderTarget[te.id],Fe=te.viewport||V;ke.setSize(Fe.z*w.transmissionResolutionScale,Fe.w*w.transmissionResolutionScale);let Oe=w.getRenderTarget(),qe=w.getActiveCubeFace(),Ye=w.getActiveMipmapLevel();w.setRenderTarget(ke),w.getClearColor(Qe),Re=w.getClearAlpha(),Re<1&&w.setClearColor(16777215,.5),w.clear(),re&&et.render(ae);let vt=w.toneMapping;w.toneMapping=wi;let nt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),T.setupLightsView(te),mt===!0&&Ue.setGlobalState(w.clippingPlanes,te),Is(N,ae,te),B.updateMultisampleRenderTarget(ke),B.updateRenderTargetMipmap(ke),j.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let xt=0,st=$.length;xt<st;xt++){let Ft=$[xt],{object:Lt,geometry:mn,material:Xe,group:yn}=Ft;if(Xe.side===Tn&&Lt.layers.test(te.layers)){let ce=Xe.side;Xe.side=Cn,Xe.needsUpdate=!0,kt(Lt,ae,te,mn,Xe,yn),Xe.side=ce,Xe.needsUpdate=!0,Ae=!0}}Ae===!0&&(B.updateMultisampleRenderTarget(ke),B.updateRenderTargetMipmap(ke))}w.setRenderTarget(Oe,qe,Ye),w.setClearColor(Qe,Re),nt!==void 0&&(te.viewport=nt),w.toneMapping=vt}function Is(N,$,ae){let te=$.isScene===!0?$.overrideMaterial:null;for(let ne=0,ke=N.length;ne<ke;ne++){let Fe=N[ne],{object:Oe,geometry:qe,group:Ye}=Fe,vt=Fe.material;vt.allowOverride===!0&&te!==null&&(vt=te),Oe.layers.test(ae.layers)&&kt(Oe,$,ae,qe,vt,Ye)}}function kt(N,$,ae,te,ne,ke){P!==null&&ne.isNodeMaterial&&P.setObject(N,ne),N.onBeforeRender(w,$,ae,te,ne,ke),N.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ne.onBeforeRender(w,$,ae,te,N,ke),ne.transparent===!0&&ne.side===Tn&&ne.forceSinglePass===!1?(ne.side=Cn,ne.needsUpdate=!0,w.renderBufferDirect(ae,$,te,ne,N,ke),ne.side=ys,ne.needsUpdate=!0,w.renderBufferDirect(ae,$,te,ne,N,ke),ne.side=Tn):w.renderBufferDirect(ae,$,te,ne,N,ke),N.onAfterRender(w,$,ae,te,ne,ke)}function os(N,$,ae){$.isScene!==!0&&($=ee);let te=Y.get(N),ne=T.state.lights,ke=T.state.shadowsArray,Fe=ne.state.version,Oe=pe.getParameters(N,ne.state,ke,$,ae,T.state.lightProbeGridArray),qe=pe.getProgramCacheKey(Oe),Ye=te.programs;te.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?$.environment:null,te.fog=$.fog;let vt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;te.envMap=le.get(N.envMap||te.environment,vt),te.envMapRotation=te.environment!==null&&N.envMap===null?$.environmentRotation:N.envMapRotation,Ye===void 0&&(N.addEventListener("dispose",jn),Ye=new Map,te.programs=Ye);let nt=Ye.get(qe);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Fe)return yo(N,Oe),nt}else Oe.uniforms=pe.getUniforms(N),P!==null&&N.isNodeMaterial&&P.build(N,ae,Oe),N.onBeforeCompile(Oe,w),nt=pe.acquireProgram(Oe,qe),Ye.set(qe,nt),te.uniforms=Oe.uniforms;let Ae=te.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ae.clippingPlanes=Ue.uniform),yo(N,Oe),te.needsLights=Ls(N),te.lightsStateVersion=Fe,te.needsLights&&(Ae.ambientLightColor.value=ne.state.ambient,Ae.lightProbe.value=ne.state.probe,Ae.sunLights.value=ne.state.sun,Ae.sunLightShadows.value=ne.state.sunShadow,Ae.directionalLights.value=ne.state.directional,Ae.directionalLightShadows.value=ne.state.directionalShadow,Ae.spotLights.value=ne.state.spot,Ae.spotLightShadows.value=ne.state.spotShadow,Ae.rectAreaLights.value=ne.state.rectArea,Ae.ltc_1.value=ne.state.rectAreaLTC1,Ae.ltc_2.value=ne.state.rectAreaLTC2,Ae.pointLights.value=ne.state.point,Ae.pointLightShadows.value=ne.state.pointShadow,Ae.hemisphereLights.value=ne.state.hemi,Ae.sunShadowMatrix.value=ne.state.sunShadowMatrix,Ae.sunShadowCascade.value=ne.state.sunShadowCascade,Ae.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ae.spotLightMatrix.value=ne.state.spotLightMatrix,Ae.spotLightMap.value=ne.state.spotLightMap,Ae.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=T.state.lightProbeGridArray.length>0,te.currentProgram=nt,te.uniformsList=null,nt}function _o(N){if(N.uniformsList===null){let $=N.currentProgram.getUniforms();N.uniformsList=Jr.seqWithValue($.seq,N.uniforms)}return N.uniformsList}function yo(N,$){let ae=Y.get(N);ae.outputColorSpace=$.outputColorSpace,ae.batching=$.batching,ae.batchingColor=$.batchingColor,ae.instancing=$.instancing,ae.instancingColor=$.instancingColor,ae.instancingMorph=$.instancingMorph,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function Oa(N,$){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;p.setFromMatrixPosition($.matrixWorld);for(let ae=0,te=N.length;ae<te;ae++){let ne=N[ae];if(ne.texture!==null&&ne.boundingBox.containsPoint(p))return ne}return null}function Mu(N,$,ae,te,ne){$.isScene!==!0&&($=ee),B.resetTextureUnits();let ke=$.fog,Fe=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?$.environment:null,Oe=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:bt.workingColorSpace,qe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ye=le.get(te.envMap||Fe,qe),vt=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,nt=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ae=!!ae.morphAttributes.position,xt=!!ae.morphAttributes.normal,st=!!ae.morphAttributes.color,Ft=wi;te.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ft=w.toneMapping);let Lt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,mn=Lt!==void 0?Lt.length:0,Xe=Y.get(te),yn=T.state.lights;if(mt===!0&&(Q===!0||N!==H)){let Rt=N===H&&te.id===O;Ue.setState(te,N,Rt)}let ce=!1;te.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==yn.state.version||Xe.outputColorSpace!==Oe||ne.isBatchedMesh&&Xe.batching===!1||!ne.isBatchedMesh&&Xe.batching===!0||ne.isBatchedMesh&&Xe.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&Xe.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&Xe.instancing===!1||!ne.isInstancedMesh&&Xe.instancing===!0||ne.isSkinnedMesh&&Xe.skinning===!1||!ne.isSkinnedMesh&&Xe.skinning===!0||ne.isInstancedMesh&&Xe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Xe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Xe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Xe.instancingMorph===!1&&ne.morphTexture!==null||Xe.envMap!==Ye||te.fog===!0&&Xe.fog!==ke||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ue.numPlanes||Xe.numIntersection!==Ue.numIntersection)||Xe.vertexAlphas!==vt||Xe.vertexTangents!==nt||Xe.morphTargets!==Ae||Xe.morphNormals!==xt||Xe.morphColors!==st||Xe.toneMapping!==Ft||Xe.morphTargetsCount!==mn||!!Xe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Xe.__version=te.version);let ot=Xe.currentProgram;ce===!0&&(ot=os(te,$,ne),P&&te.isNodeMaterial&&P.onUpdateProgram(te,ot,Xe));let Ze=!1,Dt=!1,wt=!1,ct=ot.getUniforms(),Ht=Xe.uniforms;if(A.useProgram(ot.program)&&(Ze=!0,Dt=!0,wt=!0),te.id!==O&&(O=te.id,Dt=!0),Xe.needsLights){let Rt=Oa(T.state.lightProbeGridArray,ne);Xe.lightProbeGrid!==Rt&&(Xe.lightProbeGrid=Rt,Dt=!0)}if(Ze||H!==N){A.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),ct.setValue(F,"projectionMatrix",N.projectionMatrix),ct.setValue(F,"viewMatrix",N.matrixWorldInverse);let Gt=ct.map.cameraPosition;Gt!==void 0&&Gt.setValue(F,Te.setFromMatrixPosition(N.matrixWorld)),U.logarithmicDepthBuffer&&ct.setValue(F,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&ct.setValue(F,"isOrthographic",N.isOrthographicCamera===!0),H!==N&&(H=N,Dt=!0,wt=!0)}if(Xe.needsLights&&(yn.state.sunShadowMap.length>0&&ct.setValue(F,"sunShadowMap",yn.state.sunShadowMap,B),yn.state.directionalShadowMap.length>0&&ct.setValue(F,"directionalShadowMap",yn.state.directionalShadowMap,B),yn.state.spotShadowMap.length>0&&ct.setValue(F,"spotShadowMap",yn.state.spotShadowMap,B),yn.state.pointShadowMap.length>0&&ct.setValue(F,"pointShadowMap",yn.state.pointShadowMap,B)),ne.isSkinnedMesh){ct.setOptional(F,ne,"bindMatrix"),ct.setOptional(F,ne,"bindMatrixInverse");let Rt=ne.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ct.setValue(F,"boneTexture",Rt.boneTexture,B))}ne.isBatchedMesh&&(ct.setOptional(F,ne,"batchingTexture"),ct.setValue(F,"batchingTexture",ne._matricesTexture,B),ct.setOptional(F,ne,"batchingIdTexture"),ct.setValue(F,"batchingIdTexture",ne._indirectTexture,B),ct.setOptional(F,ne,"batchingColorTexture"),ne._colorsTexture!==null&&ct.setValue(F,"batchingColorTexture",ne._colorsTexture,B));let Qn=ae.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&X.update(ne,ae,ot),(Dt||Xe.receiveShadow!==ne.receiveShadow)&&(Xe.receiveShadow=ne.receiveShadow,ct.setValue(F,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&$.environment!==null&&(Ht.envMapIntensity.value=$.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=zy()),Dt){if(ct.setValue(F,"toneMappingExposure",w.toneMappingExposure),Xe.needsLights&&bu(Ht,wt),ke&&te.fog===!0&&Ce.refreshFogUniforms(Ht,ke),Ce.refreshMaterialUniforms(Ht,te,Z,J,T.state.transmissionRenderTarget[N.id]),Xe.needsLights&&Xe.lightProbeGrid){let Rt=Xe.lightProbeGrid;Ht.probesSH.value=Rt.texture,Ht.probesMin.value.copy(Rt.boundingBox.min),Ht.probesMax.value.copy(Rt.boundingBox.max),Ht.probesResolution.value.copy(Rt.resolution)}Jr.upload(F,_o(Xe),Ht,B)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Jr.upload(F,_o(Xe),Ht,B),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&ct.setValue(F,"center",ne.center),ct.setValue(F,"modelViewMatrix",ne.modelViewMatrix),ct.setValue(F,"normalMatrix",ne.normalMatrix),ct.setValue(F,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){let Rt=te.uniformsGroups;for(let Gt=0,Dn=Rt.length;Gt<Dn;Gt++){let bo=Rt[Gt];Se.update(bo,ot),Se.bind(bo,ot)}}return ot}function bu(N,$){N.ambientLightColor.needsUpdate=$,N.lightProbe.needsUpdate=$,N.sunLights.needsUpdate=$,N.sunLightShadows.needsUpdate=$,N.directionalLights.needsUpdate=$,N.directionalLightShadows.needsUpdate=$,N.pointLights.needsUpdate=$,N.pointLightShadows.needsUpdate=$,N.spotLights.needsUpdate=$,N.spotLightShadows.needsUpdate=$,N.rectAreaLights.needsUpdate=$,N.hemisphereLights.needsUpdate=$}function Ls(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(N,$,ae){let te=Y.get(N);te.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Y.get(N.texture).__webglTexture=$,Y.get(N.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,$){let ae=Y.get(N);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(N,$=0,ae=0){W=N,D=$,z=ae;let te=null,ne=!1,ke=!1;if(N){let Oe=Y.get(N);if(Oe.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(F.FRAMEBUFFER,Oe.__webglFramebuffer),V.copy(N.viewport),ie.copy(N.scissor),he=N.scissorTest,A.viewport(V),A.scissor(ie),A.setScissorTest(he),O=-1;return}else if(Oe.__webglFramebuffer===void 0)B.setupRenderTarget(N);else if(Oe.__hasExternalTextures)B.rebindTextures(N,Y.get(N.texture).__webglTexture,Y.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let vt=N.depthTexture;if(Oe.__boundDepthTexture!==vt){if(vt!==null&&Y.has(vt)&&(N.width!==vt.image.width||N.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(N)}}let qe=N.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ke=!0);let Ye=Y.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ye[$])?te=Ye[$][ae]:te=Ye[$],ne=!0):N.samples>0&&B.useMultisampledRTT(N)===!1?te=Y.get(N).__webglMultisampledFramebuffer:Array.isArray(Ye)?te=Ye[ae]:te=Ye,V.copy(N.viewport),ie.copy(N.scissor),he=N.scissorTest}else V.copy(we).multiplyScalar(Z).floor(),ie.copy(Ge).multiplyScalar(Z).floor(),he=Je;if(ae!==0&&(te=I),A.bindFramebuffer(F.FRAMEBUFFER,te)&&A.drawBuffers(N,te),A.viewport(V),A.scissor(ie),A.setScissorTest(he),ne){let Oe=Y.get(N.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+$,Oe.__webglTexture,ae)}else if(ke){let Oe=$;for(let qe=0;qe<N.textures.length;qe++){let Ye=Y.get(N.textures[qe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+qe,Ye.__webglTexture,ae,Oe)}}else if(N!==null&&ae!==0){let Oe=Y.get(N.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,ae)}O=-1};function Mo(N){let $=Y.get(N);return($.__readFormat!==N.format||$.__readType!==N.type)&&($.__readFormat=N.format,$.__readType=N.type,$.__formatReadable=U.textureFormatReadable(N.format),$.__typeReadable=U.textureTypeReadable(N.type)),$}this.readRenderTargetPixels=function(N,$,ae,te,ne,ke,Fe,Oe=0){if(!(N&&N.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Y.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Fe!==void 0&&(qe=qe[Fe]),qe){A.bindFramebuffer(F.FRAMEBUFFER,qe);try{let Ye=N.textures[Oe],vt=Ye.format,nt=Ye.type;N.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Oe);let Ae=Mo(Ye);if(Ae.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=N.width-te&&ae>=0&&ae<=N.height-ne&&F.readPixels($,ae,te,ne,De.convert(vt),De.convert(nt),ke)}finally{let Ye=W!==null?Y.get(W).__webglFramebuffer:null;A.bindFramebuffer(F.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(N,$,ae,te,ne,ke,Fe,Oe=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Y.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Fe!==void 0&&(qe=qe[Fe]),qe)if($>=0&&$<=N.width-te&&ae>=0&&ae<=N.height-ne){A.bindFramebuffer(F.FRAMEBUFFER,qe);let Ye=N.textures[Oe],vt=Ye.format,nt=Ye.type;N.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Oe);let Ae=Mo(Ye);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.bufferData(F.PIXEL_PACK_BUFFER,ke.byteLength,F.STREAM_READ),F.readPixels($,ae,te,ne,De.convert(vt),De.convert(nt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let st=W!==null?Y.get(W).__webglFramebuffer:null;A.bindFramebuffer(F.FRAMEBUFFER,st);let Ft=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await m0(F,Ft,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ke),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(xt),F.deleteSync(Ft),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,$=null,ae=0){let te=Math.pow(2,-ae),ne=Math.floor(N.image.width*te),ke=Math.floor(N.image.height*te),Fe=$!==null?$.x:0,Oe=$!==null?$.y:0;B.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,ae,0,0,Fe,Oe,ne,ke),A.unbindTexture()},this.copyTextureToTexture=function(N,$,ae=null,te=null,ne=0,ke=0){let Fe,Oe,qe,Ye,vt,nt,Ae,xt,st,Ft=N.isCompressedTexture?N.mipmaps[ke]:N.image;if(ae!==null)Fe=ae.max.x-ae.min.x,Oe=ae.max.y-ae.min.y,qe=ae.isBox3?ae.max.z-ae.min.z:1,Ye=ae.min.x,vt=ae.min.y,nt=ae.isBox3?ae.min.z:0;else{let Ht=Math.pow(2,-ne);Fe=Math.floor(Ft.width*Ht),Oe=Math.floor(Ft.height*Ht),N.isDataArrayTexture?qe=Ft.depth:N.isData3DTexture?qe=Math.floor(Ft.depth*Ht):qe=1,Ye=0,vt=0,nt=0}te!==null?(Ae=te.x,xt=te.y,st=te.z):(Ae=0,xt=0,st=0);let Lt=De.convert($.format),mn=De.convert($.type),Xe;$.isData3DTexture?(B.setTexture3D($,0),Xe=F.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(B.setTexture2DArray($,0),Xe=F.TEXTURE_2D_ARRAY):(B.setTexture2D($,0),Xe=F.TEXTURE_2D),A.activeTexture(F.TEXTURE0),A.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);let yn=A.getParameter(F.UNPACK_ROW_LENGTH),ce=A.getParameter(F.UNPACK_IMAGE_HEIGHT),ot=A.getParameter(F.UNPACK_SKIP_PIXELS),Ze=A.getParameter(F.UNPACK_SKIP_ROWS),Dt=A.getParameter(F.UNPACK_SKIP_IMAGES);A.pixelStorei(F.UNPACK_ROW_LENGTH,Ft.width),A.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ft.height),A.pixelStorei(F.UNPACK_SKIP_PIXELS,Ye),A.pixelStorei(F.UNPACK_SKIP_ROWS,vt),A.pixelStorei(F.UNPACK_SKIP_IMAGES,nt);let wt=N.isDataArrayTexture||N.isData3DTexture,ct=$.isDataArrayTexture||$.isData3DTexture;if(N.isDepthTexture){let Ht=Y.get(N),Qn=Y.get($),Rt=Y.get(Ht.__renderTarget),Gt=Y.get(Qn.__renderTarget);A.bindFramebuffer(F.READ_FRAMEBUFFER,Rt.__webglFramebuffer),A.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Dn=0;Dn<qe;Dn++)wt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(N).__webglTexture,ne,nt+Dn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get($).__webglTexture,ke,st+Dn)),F.blitFramebuffer(Ye,vt,Fe,Oe,Ae,xt,Fe,Oe,F.DEPTH_BUFFER_BIT,F.NEAREST);A.bindFramebuffer(F.READ_FRAMEBUFFER,null),A.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ne!==0||N.isRenderTargetTexture||Y.has(N)){let Ht=Y.get(N),Qn=Y.get($);A.bindFramebuffer(F.READ_FRAMEBUFFER,C),A.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let Rt=0;Rt<qe;Rt++)wt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,ne,nt+Rt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ht.__webglTexture,ne),ct?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qn.__webglTexture,ke,st+Rt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qn.__webglTexture,ke),ne!==0?F.blitFramebuffer(Ye,vt,Fe,Oe,Ae,xt,Fe,Oe,F.COLOR_BUFFER_BIT,F.NEAREST):ct?F.copyTexSubImage3D(Xe,ke,Ae,xt,st+Rt,Ye,vt,Fe,Oe):F.copyTexSubImage2D(Xe,ke,Ae,xt,Ye,vt,Fe,Oe);A.bindFramebuffer(F.READ_FRAMEBUFFER,null),A.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ct?N.isDataTexture||N.isData3DTexture?F.texSubImage3D(Xe,ke,Ae,xt,st,Fe,Oe,qe,Lt,mn,Ft.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(Xe,ke,Ae,xt,st,Fe,Oe,qe,Lt,Ft.data):F.texSubImage3D(Xe,ke,Ae,xt,st,Fe,Oe,qe,Lt,mn,Ft):N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ke,Ae,xt,Fe,Oe,Lt,mn,Ft.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ke,Ae,xt,Ft.width,Ft.height,Lt,Ft.data):F.texSubImage2D(F.TEXTURE_2D,ke,Ae,xt,Fe,Oe,Lt,mn,Ft);A.pixelStorei(F.UNPACK_ROW_LENGTH,yn),A.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ce),A.pixelStorei(F.UNPACK_SKIP_PIXELS,ot),A.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),A.pixelStorei(F.UNPACK_SKIP_IMAGES,Dt),ke===0&&$.generateMipmaps&&F.generateMipmap(Xe),A.unbindTexture()},this.initRenderTarget=function(N){Y.get(N).__webglFramebuffer===void 0&&B.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?B.setTextureCube(N,0):N.isData3DTexture?B.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?B.setTexture2DArray(N,0):B.setTexture2D(N,0),A.unbindTexture()},this.resetState=function(){D=0,z=0,W=null,A.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var zt=(i,e,t)=>i<e?e:i>t?t:i,Pt=(i,e,t)=>i+(e-i)*t,Kc=i=>i*i*(3-2*i),At=(i,e,t)=>{let n=zt((t-i)/(e-i),0,1);return n*n*(3-2*n)},j0=1337;function Q0(i){j0=i|0}function ky(i){return i=i^j0|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var ri=(i,e)=>ky(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function si(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return Pt(ri(t,e),ri(t+1,e),s)}var jc=(i,e=0)=>si(i,e)*.55+si(i*2.03,e+7)*.3+si(i*4.1,e+13)*.15;function ln(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Jc=new Ee,de=i=>(Jc.set(i),[Jc.r,Jc.g,Jc.b]),ep=(i,e,t)=>[Pt(i[0],e[0],t),Pt(i[1],e[1],t),Pt(i[2],e[2],t)],En=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Gi=["city","sakura","coast","country","mountain","snow"],wa={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},lf=1500,tp=260,Ts=0,cf=0;function ip(i){cf=Math.max(0,Gi.indexOf(i))}function jr(i){let e=Math.floor(i/lf),t=i-e*lf,n=Kc(zt((t-(lf-tp))/tp,0,1)),s=Gi.length;return{a:Gi[((e+cf)%s+s)%s],b:Gi[((e+cf+1)%s+s)%s],t:n}}function Nt(i){let e=jr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var en=i=>{let e=jr(i);return e.t<.5?e.a:e.b};function In(i,e){let t=jr(i);return Pt(wa[t.a][e],wa[t.b][e],t.t)}var Ks=650,js=375,Qr=i=>i*Ks+js;function Aa(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Nt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var uf={x:new Map,r:new Map,t:new Map};function hf(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function eo(i){let e=Math.round((i-js)/Ks);return hf(uf.x,e,()=>{let t=Qr(e);return Aa(t)?{k:e,s:t}:null})}function Hy(i){let e=eo(i);return e?1-At(8,45,Math.abs(i-e.s)):0}var Qs=1150,to=820,Ra=4.6,ff=i=>i*Qs+to;function df(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Nt(i+t);if(n.country+n.sakura<.9)return!1}let e=eo(i);return!(e&&Math.abs(e.s-i)<170)}function Wi(i){let e=Math.round((i-to)/Qs);return hf(uf.r,e,()=>{let t=ff(e);return df(t)?{k:e,s:t}:null})}function Vy(i){let e=Wi(i);return e?1-At(30,70,Math.abs(i-e.s)):0}function Gy(i){let e=-Ra;return i<11?e-1.3:i<16?Pt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?Pt(e+.7,.35,(i-20)/5.5):.35}var sp=1050,rp=525,sn=85,tn=125,Wy=24,Xy=i=>i*sp+rp;function qy(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Nt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function mi(i){let e=Math.round((i-rp)/sp);return hf(uf.t,e,()=>{let t=Xy(e);return qy(t)?{k:e,s:t}:null})}function Yy(i){let e=mi(i);return e?1-At(sn+20,tn+25,Math.abs(i-e.s)):0}var Qc=0,tu=(i,e)=>{let t=i/tn;return Wy*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var Vi=2,eu=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(si(e/300,11)-.5)*2+(si(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*In(e,"curv")*(1-Math.max(Hy(e),Vy(e),Yy(e)))}elevRaw(e){return In(e,"base")+In(e,"hill")*(jc(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=eo(e);if(n){let o=1-At(8,45,Math.abs(e-n.s));o>0&&(t=Pt(t,this.elevRaw(n.s),o))}let s=Wi(e);if(s){let o=1-At(30,70,Math.abs(e-s.s));o>0&&(t=Pt(t,this.elevRaw(s.s),o))}let r=mi(e);if(r){let o=1-At(sn+10,tn+45,Math.abs(e-r.s));o>0&&(t=Pt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*Vi<e+Vi;){let t=this.X.length-1,n=t*Vi,s=this.curv(n+Vi/2)*Vi,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*Vi),this.Z.push(this.Z[t]+Math.cos(r+s/2)*Vi),this.H.push(r+s),this.Y.push(this.elev(n+Vi))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+Vi);let n=e/Vi,s=Math.floor(n),r=n-s;t.x=Pt(this.X[s],this.X[s+1],r),t.z=Pt(this.Z[s],this.Z[s+1],r),t.y=Pt(this.Y[s],this.Y[s+1],r),t.h=Pt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),a=Math.cos(t.h);return t.fx=o,t.fz=a,t.rx=-a,t.rz=o,t}};function np(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+At(45,190,r)*16*(.45+.55*si(e/160+(t>0?50:0),3));case"coast":{if(t>0)return r<s+.9?-.06:-.15+At(s+1.5,80,r)*24*(.5+.5*si(e/170,5))+At(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let o=r-(s+2);return(o<26?Pt(1.25,-1.6,o/26):Pt(-1.6,-7,zt((o-26)/20,0,1)))-n}case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let a=8+6*si(e/140,61),c=r-(s+1);return c<a?c:Math.min(a+(c-a)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+At(105,230,r)*95*(.6+.4*si(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Pt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(si(e/40+(t>0?3:0),71)-.5):.55+At(125,210,r)*40*(.45+.55*si(e/230+(t>0?11:0),73));case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+At(135,215,r)*36*(.4+.6*si(e/210+(t>0?9:0),7))}}function no(i,e,t,n){let s=jr(i),r=np(s.a,i,e,t,n),o=s.t>0?Pt(r,np(s.b,i,e,t,n),s.t):r;Qc=0;let a=Wi(i);if(a){let _=Math.abs(i-a.s);if(_>=36)return o;let S=_<29?Gy(_):Pt(.35,o,At(29,36,_));return Math.abs(e)<n+3.2&&(S=Math.min(S,-.08)),S}let c=mi(i);if(!c)return o;let u=i-c.s,h=Math.abs(u);if(h>=2*tn)return o;let m=Math.abs(e),g=tu(u,e),v;return h<sn?v=m<=n+1.46?-.25:Math.max(o,g):v=Math.max(o,Math.min(g,m<n+1?-.06:m-(n+1))),Qc=Math.max(0,v-o),v}function op(i){let e=Wi(i);return e?1-At(27,34,Math.abs(i-e.s)):0}var Ca=new k,nu=new k,Zy=[1,1,1],xn=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new it,this.nm=new pt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,a,c,u){this.n>=this.cap&&this.grow(this.n+1);let h=this.e,m=this.ne,g=this.n*3,v=this.P,_=this.bb,S=h[0]*e+h[4]*t+h[8]*n+h[12],l=h[1]*e+h[5]*t+h[9]*n+h[13],f=h[2]*e+h[6]*t+h[10]*n+h[14];v[g]=S,v[g+1]=l,v[g+2]=f,S<_[0]&&(_[0]=S),l<_[1]&&(_[1]=l),f<_[2]&&(_[2]=f),S>_[3]&&(_[3]=S),l>_[4]&&(_[4]=l),f>_[5]&&(_[5]=f);let d=m[0]*s+m[3]*r+m[6]*o,x=m[1]*s+m[4]*r+m[7]*o,p=m[2]*s+m[5]*r+m[8]*o,M=127/(Math.sqrt(d*d+x*x+p*p)||1);if(this.N[g]=Math.round(d*M),this.N[g+1]=Math.round(x*M),this.N[g+2]=Math.round(p*M),this.hasUV&&(this.U[this.n*2]=a,this.U[this.n*2+1]=c),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(l)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasColor){let T=u||Zy,E=this.Cl;E[g]=T[0]>=1?255:T[0]<=0?0:T[0]*255+.5,E[g+1]=T[1]>=1?255:T[1]<=0?0:T[1]*255+.5,E[g+2]=T[2]>=1?255:T[2]<=0?0:T[2]*255+.5}this.n++}quad(e,t,n,s,r,o){Ca.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),nu.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),nu.lengthSq()<1e-12&&nu.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Ca.cross(nu).normalize();let a=Ca.x,c=Ca.y,u=Ca.z,h=o?o.u0:0,m=o?o.u1:1,g=o?o.v0:0,v=o?o.v1:1;this.vtx(e[0],e[1],e[2],a,c,u,h,g,r),this.vtx(t[0],t[1],t[2],a,c,u,m,g,r),this.vtx(n[0],n[1],n[2],a,c,u,m,v,r),this.vtx(e[0],e[1],e[2],a,c,u,h,g,r),this.vtx(n[0],n[1],n[2],a,c,u,m,v,r),this.vtx(s[0],s[1],s[2],a,c,u,h,v,r)}box(e,t,n,s,r,o,a,c=null,u=null){let h=c||{},m=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],m.nz||a,h.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],m.pz||a,h.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],m.nx||a,h.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],m.px||a,h.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],m.py||a,h.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],m.ny||a,h.ny)}cyl(e,t,n,s,r,o,a,c,u=!0){let h=(s-r)/o;for(let m=0;m<a;m++){let g=m/a*Math.PI*2,v=(m+1)/a*Math.PI*2,_=Math.cos(g),S=Math.sin(g),l=Math.cos(v),f=Math.sin(v),d=[e+_*s,t,n+S*s],x=[e+l*s,t,n+f*s],p=[e+l*r,t+o,n+f*r],M=[e+_*r,t+o,n+S*r];this.vtx(d[0],d[1],d[2],_,h,S,0,0,c),this.vtx(M[0],M[1],M[2],_,h,S,0,0,c),this.vtx(p[0],p[1],p[2],l,h,f,0,0,c),this.vtx(d[0],d[1],d[2],_,h,S,0,0,c),this.vtx(p[0],p[1],p[2],l,h,f,0,0,c),this.vtx(x[0],x[1],x[2],l,h,f,0,0,c),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,c),this.vtx(p[0],p[1],p[2],0,1,0,0,0,c),this.vtx(M[0],M[1],M[2],0,1,0,0,0,c))}}rod(e,t,n,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],u=t[2]-e[2],h=Math.hypot(a,c,u);a/=h,c/=h,u/=h;let m=0,g=1,v=0;Math.abs(c)>.99&&(m=1,g=0);let _=c*v-u*g,S=u*m-a*v,l=a*g-c*m,f=Math.hypot(_,S,l);_/=f,S/=f,l/=f;let d=S*u-l*c,x=l*a-_*u,p=_*c-S*a;for(let M=0;M<r;M++){let T=M/r*Math.PI*2,E=(M+1)/r*Math.PI*2,y=Math.cos(T),b=Math.sin(T),w=Math.cos(E),R=Math.sin(E),P=_*y+d*b,I=S*y+x*b,C=l*y+p*b,L=_*w+d*R,D=S*w+x*R,z=l*w+p*R,W=[e[0]+P*n,e[1]+I*n,e[2]+C*n],O=[e[0]+L*n,e[1]+D*n,e[2]+z*n],H=[t[0]+L*s,t[1]+D*s,t[2]+z*s],V=[t[0]+P*s,t[1]+I*s,t[2]+C*s];this.vtx(W[0],W[1],W[2],P,I,C,0,0,o),this.vtx(O[0],O[1],O[2],L,D,z,0,0,o),this.vtx(H[0],H[1],H[2],L,D,z,0,0,o),this.vtx(W[0],W[1],W[2],P,I,C,0,0,o),this.vtx(H[0],H[1],H[2],L,D,z,0,0,o),this.vtx(V[0],V[1],V[2],P,I,C,0,0,o)}return h}blob(e,t,n,s,r,o,a=0,c=1){let u=ap[a%ap.length],h=u.attributes.position.array,m=u.attributes.normal.array,g=u.userData.disp;for(let v=0;v<h.length;v+=3){let _=1+g[v/3],S=Math.max(0,Math.min(1,m[v+1]*.5+.5)),l=[o[0]+(r[0]-o[0])*S,o[1]+(r[1]-o[1])*S,o[2]+(r[2]-o[2])*S];this.vtx(e+h[v]*s*_,t+h[v+1]*s*_*c,n+h[v+2]*s*_,m[v],m[v+1],m[v+2],0,0,l)}}wire(e,t,n,s,r,o=10){let a=e;this.noShadow=!0;for(let c=1;c<=o;c++){let u=c/o,h=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(a,h,s,s,3,r),a=h}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,a,c]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],a,c,s[o])}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,a=e.C,c=e.U,u=this.n,h=this.bb;for(let m=0;m<e.n*3;m+=3){let g=r[m],v=r[m+1],_=r[m+2],S=u*3+m,l=n[0]*g+n[4]*v+n[8]*_+n[12],f=n[1]*g+n[5]*v+n[9]*_+n[13],d=n[2]*g+n[6]*v+n[10]*_+n[14];this.P[S]=l,this.P[S+1]=f,this.P[S+2]=d,this.hasAO&&(this.A[u+m/3]=this.aoByte(f)),l<h[0]&&(h[0]=l),f<h[1]&&(h[1]=f),d<h[2]&&(h[2]=d),l>h[3]&&(h[3]=l),f>h[4]&&(h[4]=f),d>h[5]&&(h[5]=d);let x=o[m],p=o[m+1],M=o[m+2],T=s[0]*x+s[3]*p+s[6]*M,E=s[1]*x+s[4]*p+s[7]*M,y=s[2]*x+s[5]*p+s[8]*M,b=127/(Math.sqrt(T*T+E*E+y*y)||1);this.N[S]=Math.round(T*b),this.N[S+1]=Math.round(E*b),this.N[S+2]=Math.round(y*b)}this.hasColor&&(a?this.Cl.set(a,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(c?this.U.set(c,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.n+=e.n}build(){if(!this.n)return null;let e=new yt,t=this.n,n=this.bb;return e.setAttribute("position",new Bt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new Bt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new Bt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new Bt(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new Bt(this.Lt.slice(0,t),1,!0)),this.hasColor&&e.setAttribute("color",new Bt(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new hi(new k(n[0],n[1],n[2]),new k(n[3],n[4],n[5])),e.boundingSphere=e.boundingBox.getBoundingSphere(new fi),e}},ap=[0,1,2,3].map(i=>{let e=new ra(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,a)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(a*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});ft.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var $y=ft.shadowmap_pars_fragment;function mf(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;ft.shadowmap_pars_fragment=$y.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}mf(1);function hp(i,e){let t=i<e?`#define GRAZE_FADE
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var Es=4200,We={uSkyHor:{value:new Ee(.7,.8,.9)},uSkyZen:{value:new Ee(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Ie},uSunDir:{value:new k(0,1,0)},uSunCol:{value:new Ee(1,1,1)},uTuftV:{value:new Ie(0,.333)},uTunA:{value:new k(0,-1e4,0)},uTunB:{value:new k(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new k},uCarFwd:{value:new k(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:Jy()},uCloudTex:{value:null},uCloudOrg:{value:new Ie},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Ie(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function fp(i){let e=new ds(new Uint8Array(i),i.length,1,Ys);return e.minFilter=e.magFilter=fn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var Kn=fp([16,16,16,70,200,255,255,255]),iu=fp([28,40,70,130,200,240,255,255]);function Jy(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new ds(e,256,256,Jn);return s.wrapS=s.wrapT=Cr,s.magFilter=Ot,s.minFilter=Gn,s.generateMipmaps=!0,s.colorSpace=Ri,s.needsUpdate=!0,s}var gi=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,su=1600,pf=256,Ky=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/su).toFixed(8)} + 0.5).r * uCloudSh; }`,jy=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,Qy=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/su).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,e2=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,t2=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,n2=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,ru=new kr;ru.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};ru.customProgramCacheKey=()=>"propdepth";function dp(){let i=new Ut(pf,pf,{format:Ys,type:Fn,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),e=new _t({uniforms:{uCenter:{value:new Ie},uOrigin:We.uOrigin,uTime:We.uTime,uNoiseTex:We.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${su.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new gt(new nn(2,2),e),n=new ji;t.frustumCulled=!1,We.uCloudTex.value=i.texture,We.uCloudTex.rt=i;let s=su/pf;return{update(r,o,a,c,u){let h=Math.round((o+c)/s)*s-c,m=Math.round((a+u)/s)*s-u;e.uniforms.uCenter.value.set(h,m),We.uCloudOrg.value.set(h,m);let g=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(g)}}}function er(i,e="",t="",n=!0){i.uniforms.uOrigin=We.uOrigin,i.uniforms.uCloudSh=We.uCloudSh,i.uniforms.uTime=We.uTime,i.uniforms.uNoiseTex=We.uNoiseTex,i.uniforms.uCloudTex=We.uCloudTex,i.uniforms.uCloudOrg=We.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=We[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?Qy:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${gi}${Ky}${t2}${e}`).replace("#include <opaque_fragment>",`${n?e2:jy}${t}${n2}
#include <opaque_fragment>`)}var i2=`
// an anti-aliased line of half-width hw (world units) at d = 0, given d's screen-space footprint fw; fades out once it is
// thinner than a pixel
float crackLine(float d, float hw, float fw){ fw = max(fw, 1e-4); return clamp((hw - abs(d)) / fw + 0.5, 0.0, 1.0) * min(1.0, 2.0 * hw / fw); }
vec3 roadCol(float s, float u, float rw){
  float a = abs(u); vec2 p = vec2(s, u);
  vec3 c = L(vec3(0.63, 0.62, 0.61));
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
  vec3 base = mix(L(vec3(0.80, 0.77, 0.72)), L(vec3(0.72, 0.68, 0.64)), hash12(id));
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
  g = mix(g, L(vec3(0.68, 0.66, 0.40)), 0.4 * smoothstep(0.6, 0.85, vnoise(p * 0.02 + 7.3)));
  g *= 0.8 + 0.28 * vnoise(p * vec2(0.5, 0.7) + 1.7);
  return g * (0.9 + 0.18 * vnoise(p * vec2(2.4, 9.0) + 5.9));
}
vec3 sakuraGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
  vec3 g = grassCol(p, L(vec3(0.38, 0.58, 0.27)), L(vec3(0.60, 0.74, 0.37)));
  float pet = smoothstep(0.7, 0.8, vnoise(p*3.3)) * (1.0 - 0.6*smoothstep(rw + 6.0, rw + 20.0, abs(u)));
  return mix(g, L(vec3(1.0, 0.83, 0.89)), pet*0.85);
}
vec3 coastGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  if (u > 0.0) return grassCol(p, L(vec3(0.36, 0.55, 0.26)), L(vec3(0.58, 0.70, 0.36)));
  if (a < rw + 1.45) return L(vec3(0.73, 0.72, 0.69)) * (0.9 + 0.1*fbm2(p));
  if (a < rw + 2.08) return L(vec3(0.70, 0.70, 0.68)) * (0.82 + 0.12*vnoise(p*vec2(0.4, 5.0)));
  vec3 sand = mix(L(vec3(0.94, 0.87, 0.71)), L(vec3(0.85, 0.77, 0.62)), fbm2(p*0.2));
  return mix(sand, L(vec3(0.6, 0.55, 0.46)), 0.6*(1.0 - smoothstep(0.0, 0.9, vWY)));
}
vec3 countryGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  if (a < rw + 0.7) return L(vec3(0.63, 0.59, 0.51)) * (0.85 + 0.2*vnoise(p*3.0));
  if (a < rw + 2.1) return mix(L(vec3(0.30, 0.48, 0.22)), L(vec3(0.44, 0.60, 0.27)), vnoise(p*1.5));
  if (a < 135.0) {
    float pu = a - (rw + 2.1);
    vec2 q = vec2(s/30.0, pu/17.0), id = floor(q), f = fract(q);
    float h = hash12(id + (u > 0.0 ? 31.0 : 0.0));
    // rows of rice 33 cm apart, hills 16 cm apart along them. Anti-aliased: once a row is narrower than ~2 pixels it
    // fades to its average (the bare smoothstep used to crawl in moir\xE9 bands across the far fields as we drove)
    vec2 cg = vec2(pu / 0.33, s / 0.16), cf = fract(cg) - 0.5;
    float aa = clamp(max(fwidth(cg.x), fwidth(cg.y)) * 1.6 - 0.3, 0.0, 1.0);
    float rows = mix(smoothstep(0.30, 0.48, abs(cf.x)), 0.4, aa);
    vec3 field = mix(L(vec3(0.47, 0.66, 0.24)), L(vec3(0.62, 0.76, 0.32)), h) * (0.88 + 0.14*rows);
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
    else if (h > 0.86) field = L(vec3(0.40, 0.52, 0.22)) * (0.88 + 0.16*rows);
    float ridge = max(max(step(f.x, 0.025), step(0.975, f.x)), max(step(f.y, 0.04), step(0.96, f.y)));
    gWater *= 1.0 - ridge;
    return mix(field, L(vec3(0.52, 0.63, 0.30)), ridge) * (0.94 + 0.1*fbm2(p*0.03));
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
  vec3 g = mix(L(vec3(0.36, 0.56, 0.24)), L(vec3(0.56, 0.70, 0.30)), fbm2(p * 0.12)) * (0.88 + 0.16 * vnoise(p * 2.1));
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
`,s2=`
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
#endif`,r2=`
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
}`,pp={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"};function mp(i){let e={};for(let t of i)e[pp[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),e}var lp=new Map;function Pa(i){let e=[...new Set(i)].sort().join("+"),t=lp.get(e);return t||(t=gp(mp(e.split("+")),e),lp.set(e,t)),t}function gp(i=mp(Object.keys(pp)),e="all"){let t=new an({color:16777215,gradientMap:Kn});return t.defines=i,t.onBeforeCompile=n=>{n.uniforms.uSkyHor=We.uSkyHor,n.uniforms.uSkyZen=We.uSkyZen,n.uniforms.uWet=We.uWet,n.uniforms.uNight=We.uNight,n.uniforms.uSunDir=We.uSunDir,n.uniforms.uSunCol=We.uSunCol;for(let s of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])n.uniforms[s]=We[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),er(n,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${i2}`,r2+s2,!1),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v17-"+e,t}function cp(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),er(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function o2(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=We[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function a2(i){i.uniforms.uLightsOn=We.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function up(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function gf(i){return i.onBeforeCompile=e=>er(e),i.customProgramCacheKey=()=>"cs",i}var l2="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",c2=(i,e,t="")=>`
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
}`;function vf(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=We[o];s&&Object.assign(r.uniforms,s.uniforms),er(r,l2+(s?s.pars:""),c2(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}function vp(i,e){let t={};t.ground=gp(),t.color=cp(new an({vertexColors:!0,gradientMap:Kn}),1.6,.1,"color-v3",up),t.atlas=new an({vertexColors:!0,gradientMap:Kn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=a=>{up(a),a2(a),er(a)},t.atlas.customProgramCacheKey=()=>"atlas-v5",t.foliage=cp(new an({vertexColors:!0,gradientMap:iu}),2.6,.24,"foliage-v2"),t.lamp=new on({color:15789798}),t.sig=new on({color:new Ee(.15,1.7,1.1)}),t.sodium=new on({color:new Ee(5,2.3,.65)}),t.decal=new an({vertexColors:!0,gradientMap:Kn,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=a=>er(a),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new an({map:e,vertexColors:!0,gradientMap:iu,alphaTest:.42,side:Tn}),t.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",ft.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),er(a),o2(a),a.uniforms.uTuftV=We.uTuftV,a.uniforms.uWind=We.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec2 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y);
  float wgt = mix(0.03, 0.09 * clamp((uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x), 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v4"),t.wire=new on({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let o=new $n(n);return t.pool=new on({map:o,color:16762746,transparent:!0,opacity:0,blending:Qi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=o,t}var u2=de("#f2c230"),xp=de("#26272c");function ou(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=In(s,"rw"),a=n*(o+.8),c=Nt(s),u=c.city+c.sakura>.5;t.push({x:r.x+r.rx*a,z:r.z+r.rz*a,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function _p(){let i=new Jt,e=gf(new an({vertexColors:!0,gradientMap:Kn})),t=new on({color:new Ee(6,.45,.3)}),n=new on({color:new Ee(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Jt,o=new Jt;r.add(o),o.position.set(-.42,1.02,-.02);let a=new xn,c=3.6;for(let m=0,g=0;g<c;m++,g+=.45)a.box(-Math.min(g+.45,c),-.065,-.065,-g,.065,.065,m%2?xp:u2);a.box(0,-.09,-.07,.38,.09,.07,xp);let u=new gt(a.build(),e);u.castShadow=!0,o.add(u);let h=[-.28,.28].map(m=>{let g=new gt(new Vs(.13,18),n);return g.position.set(m,2.75,-.1),g.rotation.y=Math.PI,r.add(g),g});return i.add(r),{root:r,pivot:o,arm:u,lamps:h,L:c}});return i.visible=!1,{group:i,update(r,o,a,c,u){i.visible=!!r,r&&r.forEach((h,m)=>{let g=s[m];g.root.position.set(h.x-o.x,h.y,h.z-o.z),g.root.rotation.y=h.yaw,g.arm.scale.x=(h.rw+.25)/g.L,g.pivot.rotation.z=-a*(Math.PI/2-.06);let v=Math.floor(u*2.5)%2;g.lamps[0].material=c&&v===0?t:n,g.lamps[1].material=c&&v===1?t:n})}}}function h2(){let t=()=>{let f=document.createElement("canvas");return f.width=1024,f.height=512,f},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),a='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let c=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,c);for(let f=0;f<1024;f+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(f,0,2,c);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,c-14,1024,14);let u=[.1,.36,.62,.88].map(f=>f*1024),h=(f,d,x,p)=>{let M=r.createLinearGradient(f,d,f+x*.3,d+p);M.addColorStop(0,"#5d7fae"),M.addColorStop(.6,"#9db7d6"),M.addColorStop(1,"#2f3f55"),r.fillStyle=M,r.fillRect(f,d,x,p),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(f+x*.2,d),r.lineTo(f+x*.38,d),r.lineTo(f+x*.1,d+p),r.lineTo(f-x*.08,d+p),r.fill(),o.fillStyle="#ffeccc",o.fillRect(f,d,x,p)};for(let f=0;f<u.length-1;f++){let d=u[f]+40,x=u[f+1]-40,p=3,M=(x-d)/p;for(let T=0;T<p;T++)r.fillStyle="#6b737c",r.fillRect(d+T*M+2,34,M-4,58),h(d+T*M+6,38,M-12,50)}for(let f of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(f+2,34,28,58),h(f+5,38,22,50);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,22,60,c-36),r.fillStyle="#7b828a",r.fillRect(f-1,22,2,c-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(f-30,22,60,c-36),h(f-24,34,20,46),h(f+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${a}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let m=0,g=176,v=256,_=256;r.fillStyle="#d3d7dc",r.fillRect(m,g,v,_),r.fillStyle="#20262e",r.fillRect(m+14,g+44,v-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(m+40,g+44),r.lineTo(m+80,g+44),r.lineTo(m+40,g+140),r.lineTo(m+14,g+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(m+v/2-4,g+44,8,96),r.fillStyle="#111",r.fillRect(m+50,g+12,v-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${a}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",m+v/2,g+26),r.fillStyle="#1f9a50",r.fillRect(m,g+150,v,18),r.fillStyle="#e8892b",r.fillRect(m,g+170,v,7);for(let f of[m+40,m+v-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(f,g+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(f+(f<m+v/2?28:-28),g+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(m,g+_-30,v,30),r.fillStyle="#3a3f46",r.font=`800 16px ${a}`,r.fillText("17",m+v/2,g+220),o.fillStyle="#111",o.fillRect(m,g,v,_),o.fillStyle="#ff9a2a",o.font=`800 18px ${a}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",m+v/2,g+26);for(let f of[m+40,m+v-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(f,g+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let S=f=>{let d=new $n(f);return d.colorSpace=jt,d.anisotropy=4,d},l=(f,d,x,p)=>({u0:f/1024,u1:(f+x)/1024,v0:1-(d+p)/512,v1:1-d/512});return{map:S(n),em:S(s),side:l(0,0,1024,c),sideR:{...l(0,0,1024,c),flip:!0},front:l(m,g,v,_),plain:l(342,202,28,28)}}function yp(){let i=h2(),e=gf(new an({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:Kn})),t=new xn({uv:!0}),n=[1,1,1],s=de("#9aa1a9"),r=de("#3b4047"),o=de("#2a2d33"),a=19.5,c=.6,u=3,h=1.45,m=.95,g=4,v=4,_=.3,S=de("#33363b"),l={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},f=(y,b,w,R,P,I,C,L=!1)=>t.box(y,b,w,R,P,I,C,l,L?{noBottom:!0}:null),d=(y,b,w,R,P,I)=>{let L=w-P/2,D=w+P/2;for(let z=0;z<12;z++){let W=z/12*Math.PI*2,O=(z+1)/12*Math.PI*2,H=y+Math.cos(W)*R,V=b+Math.sin(W)*R,ie=y+Math.cos(O)*R,he=b+Math.sin(O)*R;t.quad([H,V,L],[ie,he,L],[ie,he,D],[H,V,D],I,i.plain),t.quad([y,b,D],[H,V,D],[ie,he,D],[ie,he,D],I,i.plain),t.quad([y,b,L],[ie,he,L],[H,V,L],[H,V,L],I,i.plain)}},x=u*a+(u-1)*c;for(let y=0;y<u;y++){let b=-x/2+a/2+y*(a+c),w=b-a/2,R=b+a/2;t.quad([w,m,h],[R,m,h],[R,g,h],[w,g,h],n,i.side),t.quad([R,m,-h],[w,m,-h],[w,g,-h],[R,g,-h],n,i.side);let P=y===u-1,I=y===0;t.quad([R,m,h],[R,m,-h],[R,g,-h],[R,g,h],P?n:de("#c9ced4"),P?i.front:i.plain),t.quad([w,m,-h],[w,m,h],[w,g,h],[w,g,-h],I?n:de("#c9ced4"),I?i.front:i.plain);for(let C=0;C<v;C++)for(let L of[1,-1]){let D=C/v*Math.PI/2,z=(C+1)/v*Math.PI/2,W=L*h*Math.cos(D),O=g+_*Math.sin(D),H=L*h*Math.cos(z),V=g+_*Math.sin(z);t.quad([w,O,W],[R,O,W],[R,V,H],[w,V,H],s,i.plain);for(let ie of[w,R]){let he=[[ie,g,0],[ie,O,W],[ie,V,H]];t.quad(he[0],he[1],he[2],he[2],s,i.plain),t.quad(he[0],he[2],he[1],he[1],s,i.plain)}}for(let C of[1,-1])f(w,g-.02,C*h-.04,R,g+.05,C*h+.04,r);for(let C of[b-5.5,b+5.5])f(C-1.3,g+.2,-.8,C+1.3,g+.62,.8,de("#c4c9cf"),!0);f(w+.3,.82,-h+.1,R-.3,m,h-.1,o);for(let[C,L,D,z]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])f(b+C-L/2,.82-D,-1.15+z*.2,b+C+L/2,.82,1.15+z*.2,z>0?o:r);for(let C of[b-7,b+7]){for(let L of[1,-1]){f(C-1.35,.32,L*.86,C+1.35,.56,L*1.02,r);for(let D of[-1.05,1.05])f(C+D-.17,.3,L*.84,C+D+.17,.58,L*1.06,o)}f(C-.35,.5,-1,C+.35,.8,1,r);for(let L of[-1.05,1.05])for(let D of[1,-1])d(C+L,.43,D*.6,.43,.13,S)}if(y<u-1&&f(R,m+.15,-.95,R+c,g-.1,.95,de("#3a3e44")),y===0){let C=b-3,L=g+.7;t.box(C-.6,g+.26,-.6,C+.6,g+.42,.6,r),t.rod([C-.5,g+.42,0],[C,L+.9,0],.03,.03,4,r),t.rod([C+.5,g+.42,0],[C,L+.9,0],.03,.03,4,r),t.rod([C,L+.9,-.85],[C,L+.9,.85],.03,.03,4,r)}}let p=new gt(t.build(),e);p.castShadow=!0,p.receiveShadow=!0,p.frustumCulled=!1;let M=new Jt;M.add(p),M.visible=!1;let T={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:x},E={};return{group:M,st:T,start(y,b,w=16){Object.assign(T,{active:!0,sx:y,dir:b,speed:w,u:-b*290,ds:b>0?-2:2,cleared:!1}),M.visible=!0},update(y,b,w,R,P){if(!T.active)return;T.u+=T.dir*T.speed*y;let I=T.u-T.dir*T.length/2;if(!T.cleared&&(T.dir>0?I>P+1:I<-P-1)&&(T.cleared=!0),Math.abs(T.u)>330){T.active=!1,M.visible=!1;return}b.at(T.sx,E),M.position.set(E.x+E.fx*T.ds+E.rx*T.u-w.x,E.y+.34,E.z+E.fz*T.ds+E.rz*T.u-w.z),M.rotation.y=E.h+(T.dir>0?Math.PI:0),e.emissiveIntensity=.3+R*1.1}}}var f2='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',tr=2048,nr=4096;function cu(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var Tp=cu(256,256);{let i=Tp.getContext("2d"),e=i.createImageData(256,256),t=ln(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var xf=class{constructor(){this.cA=cu(tr,nr),this.cE=cu(tr/2,nr/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,tr/2,nr/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,tr,nr),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Tp,"repeat")}add(e,t,n,s){if(this.x+t+4>tr&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>nr)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let c of[this.a,this.e])c.save(),c===this.e&&c.scale(.5,.5),c.translate(o.x,o.y),c.beginPath(),c.rect(0,0,t,n),c.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let a=.5;return this.cells[e]={u0:(o.x+a)/tr,u1:(o.x+t-a)/tr,v0:1-(o.y+n-a)/nr,v1:1-(o.y+a)/nr,w:t,h:n},this.cells[e]}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new $n(n);return s.colorSpace=jt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Gn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function cn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Ln(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([a,c])=>o.addColorStop(a,c)),i.fillStyle=o,i.fillRect(e,t,n,s)}function io(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Ln(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}cn(i,e,t,n,.13)}function es(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function q(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function so(i,e,t,n,s,r,o="#d9dde2",a="rgba(40,45,60,0.55)"){q(i,e-r,t-r,n+2*r,s+2*r,o),q(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=a,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function ts(i,e,t,n,s,r,o=0){let a=i.createLinearGradient(e,t,e+n*.35,t+s),c=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";a.addColorStop(0,c),a.addColorStop(.55,u),a.addColorStop(1,"#dbe9f6"),i.fillStyle=a,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let h=e+n*r();i.beginPath(),i.moveTo(h,t),i.lineTo(h+n*.18,t),i.lineTo(h-n*.25,t+s),i.lineTo(h-n*.43,t+s),i.fill(),i.restore()}function Mp(i,e,t,n,s,r="#efe6d2"){q(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Ln(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function uu(i,e,t=800){i.font=`${t} ${e}px ${f2}`}function Et(i,e,t,n,s,r,o,a=800,c=null){uu(i,r,a);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,uu(i,u,a);i.textAlign="center",i.textBaseline="middle",c&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=c,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function au(i,e,t,n,s,r,o,a=800,c=null){let u=[...e],h=u.length,m=Math.min(r*1.05,(s-n)/h),g=Math.min(r,m*.95);uu(i,g,a),i.textAlign="center",i.textBaseline="middle",u.forEach((v,_)=>{let S=n+(s-n-m*h)/2+m*(_+.5);c&&(i.lineWidth=Math.max(2,g*.12),i.strokeStyle=c,i.strokeText(v,t,S)),i.fillStyle=o,i.fillText(v,t,S)})}function ir(i,e,t,n,s,r,o,a=!0){if(q(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Ln(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),a){i.fillStyle="#6a6a6a";for(let c=e+n*.2*o();c<e+n-4;c+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-c),h=s*(.12+o()*.25);i.fillRect(c,t+s-h,u,h)}}i.restore()}function d2(i,e,t,n,s,r,o){let a=i.getTransform();e.save(),e.drawImage(i.canvas,a.e+t,a.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",q(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,q(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Ln(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var bp=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],lu=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],Sp=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],p2=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Ep(){let i=new xf,e=ln(2024),t=240,n=(l,f,d,x,p,M,T=!1)=>{io(l,i,d,x,"#ece8e0",0);let E=ln(M*31+(p?7:0)+5);if(M===0){let y=d*.14,b=x*.22,w=d*.72,R=x*.5;so(l,y,b,w,R,5),ts(l,y,b,w/2,R,E),ts(l,y+w/2,b,w/2,R,E);let P=E()<.8?w*(.18+E()*.25):0;P&&Mp(l,y+2,b+2,P,R-4,E()<.5?"#efe6d2":"#d9e4ea"),q(l,y+w/2-2,b,4,R,"#cfd4da"),q(l,y-8,b+R+5,w+16,6,"#d8d8d4"),es(l,y-4,b+R+11,8,60),es(l,y+w-4,b+R+11,8,60),p&&(ir(f,y,b,w,R,T?"#e6eeff":"#ffcf8f",E),P&&q(f,y+2,b+2,P,R-4,T?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),q(f,y+w/2-2,b,4,R,"#000"))}else if(M===1){for(let y of[.12,.56]){let b=d*y,w=x*.28,R=d*.3,P=x*.36;so(l,b,w,R,P,4),ts(l,b,w,R,P,E,1),l.fillStyle="rgba(255,255,255,0.35)",l.fillRect(b,w,R,P*.45),es(l,b,w+P+6,R,40,.1),p&&E()<.8&&ir(f,b,w,R,P,E()<.5?"#ffd9a0":"#e8f0ff",E)}l.fillStyle="#c9c9c4",l.beginPath(),l.arc(d*.88,x*.2,9,0,7),l.fill()}else if(M===2){let y=d*.1,b=x*.12,w=d*.8,R=x*.84;so(l,y,b,w,R,4),ts(l,y,b,w/2,R,E),ts(l,y+w/2,b,w/2,R,E);let P=w*(.2+E()*.3);Mp(l,y+2,b+2,P,R-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),q(l,y+w/2-2,b,4,R,"#cfd4da"),p&&(ir(f,y,b,w,R,T?"#e6eeff":"#ffcb85",E),q(f,y+2,b+2,P,R-4,T?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),q(f,y+w/2-2,b,4,R,"#000"))}else if(M===3){io(l,i,d,x,"#dfe3e6",0);let y=x*.25,b=x*.55;ts(l,0,y,d,b,E,1);for(let w=0;w<=d;w+=d/4)q(l,w-2,y,4,b,"#8d98a6");if(q(l,0,y-4,d,4,"#8d98a6"),q(l,0,y+b,d,5,"#7d8796"),p)for(let w=0;w<4;w++)E()<.7&&ir(f,w*d/4+2,y,d/4-4,b,E()<.6?"#f2f6ff":"#ffe2b0",E)}else if(M===4){l.fillStyle="#6b4a35",l.fillRect(0,0,d,x);for(let P=0;P<x;P+=12)q(l,0,P,d,2,"rgba(30,18,10,0.35)"),q(l,0,P+2,d,1,"rgba(255,220,180,0.06)");cn(l,i,d,x,.15);let y=d*.18,b=x*.25,w=d*.64,R=x*.45;q(l,y-6,b-6,w+12,R+12,"#4a3020"),q(l,y,b,w,R,"#efe4c8"),l.fillStyle="#5a3a26";for(let P=1;P<6;P++)l.fillRect(y+P*w/6-1.5,b,3,R);for(let P=1;P<3;P++)l.fillRect(y,b+P*R/3-1.5,w,3);if(p){ir(f,y,b,w,R,"#ffc070",E,!1),f.fillStyle="#000";for(let P=1;P<6;P++)f.fillRect(y+P*w/6-1.5,b,3,R);for(let P=1;P<3;P++)f.fillRect(y,b+P*R/3-1.5,w,3)}}else if(M===5){q(l,d*.08,0,7,x,"#bdbdb6"),q(l,d*.08+5,0,2,x,"rgba(0,0,0,0.2)");let y=d*.55,b=x*.3,w=d*.22,R=x*.24;so(l,y,b,w,R,3),q(l,y,b,w,R,"#d6dfe4"),l.fillStyle="rgba(255,255,255,0.4)",l.fillRect(y,b,w,R/2),es(l,y,b+R+4,w,50,.12),q(l,d*.22,x*.55,26,34,"#cfcfca"),q(l,d*.22+4,x*.55+6,18,12,"#9aa2a8"),p&&ir(f,y,b,w,R,T?"#eef2ff":"#fff0d8",E,!1)}else if(M===6){let y=d*.4,b=x*.35,w=d*.2,R=x*.28;so(l,y,b,w,R,3),ts(l,y,b,w,R,E,1),es(l,y,b+R+4,w,70,.14),p&&ir(f,y,b,w,R,T?"#e8efff":"#ffd9a0",E)}};for(let l=0;l<7;l++)i.add("win"+l,t,t,(f,d,x,p)=>n(f,d,x,p,!1,l)),i.add("win"+l+"L",t,t,(f,d,x,p)=>n(f,d,x,p,!0,l));for(let l of[0,2,5,6])i.add("win"+l+"C",t,t,(f,d,x,p)=>n(f,d,x,p,!0,l,!0));i.add("plain",t,t,(l,f,d,x)=>{io(l,i,d,x,"#ece8e0"),es(l,d*.3,0,12,x*.6,.06)}),i.add("concrete",t,t,(l,f,d,x)=>{io(l,i,d,x,"#d9d7d0",60);for(let p=0;p<6;p++)es(l,p*41%d,0,10,x*.5,.07)});let s=288,r=(l,f,d,x,p,M,T)=>{let E=(b,w,R,P,I,C=0)=>{l.fillStyle=I,l.beginPath(),l.ellipse(b,w,R,P,C,0,7),l.fill()},y=b=>b[Math.floor(M()*b.length)];if(T==="bakery"){q(l,f,d,x,p,"#d9b98a"),Ln(l,f,d,x,p,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let b=d+p*.28;b<d+p*.72;b+=p*.2){q(l,f,b,x,5,"#8a5a32");for(let w=f+8;w<f+x-8;w+=15+M()*10){let R=7+M()*6,P=4+M()*3;E(w,b-P,R,P,y(["#c98a3e","#b4732e","#d9a256","#a4632a"])),E(w-R*.2,b-P*1.4,R*.5,P*.35,"rgba(255,230,180,0.5)")}}q(l,f+4,d+p*.8,x-8,p*.2,"#efe7d8"),q(l,f+4,d+p*.8,x-8,3,"#9a9a96");for(let b=f+14;b<f+x-10;b+=18)E(b,d+p*.9,6,4,y(["#e8b35a","#c06a3a","#f2d29a"]));q(l,f+x-64,d+10,52,22,"#7a3e1e"),Et(l,"\u713C\u304D\u305F\u3066",f+x-38,d+21,46,14,"#fff3dc",800)}else if(T==="books"){q(l,f,d,x,p,"#6f5a46");for(let b=d+6;b<d+p*.72;b+=p*.17){q(l,f,b+p*.15,x,4,"#4a3828");for(let w=f+3;w<f+x-4;){let R=3+M()*4,P=p*(.1+M()*.045);q(l,w,b+p*.15-P,R,P,y(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),w+=R+(M()<.1?4:.6)}}q(l,f+4,d+p*.76,x-8,p*.24,"#8a7560");for(let b=f+8;b<f+x-22;b+=24)q(l,b,d+p*.79,20,28,y(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),q(l,b+3,d+p*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(T==="florist"){q(l,f,d,x,p,"#e8e2d2"),Ln(l,f,d,x,p,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let b=0;b<7;b++){let w=f+8+M()*(x-16),R=p*(.15+M()*.25);for(let P=0;P<R;P+=3.5)E(w+Math.sin(P*.25+b)*4+(M()-.5)*6,d+4+P,3.4,1.8,y(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),M()*3)}for(let b=0;b<3;b++){let w=d+p*(.5+b*.17);q(l,f,w+14,x,4,"#9a8a76");for(let R=f+10+b*6;R<f+x-8;R+=19){let P=y(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let I=0;I<6;I++){l.strokeStyle="#4a7a3a",l.lineWidth=1.2,l.beginPath();let C=R+(M()-.5)*14;l.moveTo(R,w+10),l.lineTo(C,w-6-M()*8),l.stroke(),E(C,w-8-M()*8,3.2,3,P)}q(l,R-6,w+4,12,11,y(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(T==="clothes"){q(l,f,d,x,p,"#efece6"),Ln(l,f,d,x,p,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),q(l,f+6,d+p*.18,x-60,3,"#7a7a7a");for(let w=f+12;w<f+x-66;w+=13+M()*5){l.fillStyle=y(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let R=d+p*.18+3,P=p*(.3+M()*.2);l.beginPath(),l.moveTo(w-5,R),l.lineTo(w+5,R),l.lineTo(w+8,R+P),l.lineTo(w-8,R+P),l.closePath(),l.fill()}let b=f+x-32;E(b,d+p*.16,7,8,"#d8cfc4"),l.fillStyle=y(["#c84a5a","#4a6a9a","#e8d8b8"]),l.beginPath(),l.moveTo(b-14,d+p*.24),l.lineTo(b+14,d+p*.24),l.lineTo(b+18,d+p*.66),l.lineTo(b-18,d+p*.66),l.closePath(),l.fill(),q(l,b-2,d+p*.66,4,p*.24,"#8a8a8a"),q(l,f+8,d+p*.74,x*.55,6,"#8a6a4a");for(let w=f+12;w<f+x*.55;w+=14)q(l,w,d+p*.74-8,11,8,y(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let b=7;for(let w=d+p*.25;w<d+p;w+=p*.22)for(let R=f+3;R<f+x-6;R+=6+M()*8)e(),b=Math.imul(b,31)+Math.floor(M()*997+M()*61+M()*7)|0;T==="cafe"?h(l,f,d,x,p,ln(b>>>0)):u(l,f,d,x,p,ln(b>>>0),T==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],a=(l,f,d,x,p,M,T="bbccutp")=>{let E=f+1+M()*3;for(;E<d-4;){let y=T[Math.floor(M()*T.length)],b=o[Math.floor(M()*o.length)],w=M()<.5?"#f8f6f0":o[Math.floor(M()*o.length)],R={b:8+M()*6,c:6+M()*2,u:9+M()*2,t:5+M()*2,p:12+M()*5}[y],P=Math.min(p,{b:14+M()*12,c:11+M()*3,u:10+M()*3,t:18+M()*9,p:14+M()*8}[y]),I=2+Math.floor(M()*5);for(let C=0;C<I&&E+R<d-1;C++,E+=R+.6){let L=x-P;y==="t"?(q(l,E,L+P*.3,R,P*.7,b),q(l,E+R*.3,L+P*.1,R*.4,P*.22,b),q(l,E+R*.28,L,R*.44,P*.11,w==="#f8f6f0"?"#e8e8e4":"#d83a2a"),q(l,E,L+P*.5,R,P*.22,w)):y==="c"?(q(l,E,L,R,P,b),q(l,E,L,R,1.5,"#d8dce0"),q(l,E,L+P*.35,R,P*.3,w)):y==="u"?(l.fillStyle=b,l.beginPath(),l.moveTo(E,L+2),l.lineTo(E+R,L+2),l.lineTo(E+R-1.2,x),l.lineTo(E+1.2,x),l.fill(),q(l,E-.4,L,R+.8,2.2,"#f2efe6"),q(l,E+1,L+P*.45,R-2,P*.25,w)):y==="p"?(l.fillStyle=b,l.beginPath(),l.moveTo(E,x),l.lineTo(E,L+3),l.quadraticCurveTo(E+R/2,L-1.5,E+R,L+3),l.lineTo(E+R,x),l.fill(),q(l,E+1.5,L+P*.35,R-3,P*.35,w),q(l,E,L+2,R,1,"rgba(0,0,0,0.18)")):(q(l,E,L,R,P,b),q(l,E+1.5,L+P*.3,R-3,P*.4,w)),q(l,E,L+1,1,P-1,"rgba(255,255,255,0.28)"),q(l,E+R-1.3,L+1,1.3,P-1,"rgba(0,0,0,0.22)")}E+=1.5+M()*3}},c=(l,f,d,x,p)=>{Ln(l,f,x+4,d,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),q(l,f,x,d,4,"#d3d6da"),q(l,f,x+3.2,d,.8,"rgba(40,40,50,0.45)");for(let M=f+4+p()*10;M<f+d-6;M+=14+p()*16)q(l,M,x+.6,5,2.6,p()<.25?"#f2d23a":p()<.2?"#e84a3a":"#ffffff")},u=(l,f,d,x,p,M,T)=>{q(l,f,d,x,p,T?"#f3f1ea":"#ece5d8"),q(l,f,d,x,p*.13,T?"#f6f6f2":"#efebe2");for(let w of[.035,.085])q(l,f,d+p*w,x,2.4,"#ffffff"),Ln(l,f,d+p*w+2.4,x,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Ln(l,f,d+p*.13,x,p*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let w=0,R=f+18+M()*30;w<2&&R<f+x-40;w++,R+=90+M()*40)q(l,R+13,d+p*.13,1,6,"#888"),q(l,R,d+p*.13+6,28,9,o[Math.floor(M()*9)]),q(l,R+4,d+p*.13+9.5,20,2,"rgba(255,255,255,0.8)");let y=d+p*.25,b=p*.165;q(l,f,y-4,x,4,"#c9ccd0");for(let w=0;w<4;w++){let R=y+b*(w+1);Ln(l,f,R-b,x,b,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),a(l,f,f+x,R,b-6,M),c(l,f,x,R,M)}q(l,f,y+b*4+4,x,d+p-y-b*4-4,"#5c6068"),q(l,f,y+b*4+4,x,1.5,"#8a8e96");for(let w=f+2+M()*20;w<f+x;w+=70+M()*12)q(l,w,y-4,3,b*4+8,"#b4b8be"),q(l,w+2.2,y-4,.8,b*4+8,"rgba(0,0,0,0.3)");if(T){let w=d+p*.7;q(l,f,w+26,x,d+p-w-26,"#7a7e86"),q(l,f,w+26,x,2,"#a8acb2");for(let R=f+2;R<f+x-14;R+=15.5){let P=o[Math.floor(M()*o.length)],I=M()*2;q(l,R,w+I,14,26-I,P),q(l,R,w+I,14,5,M()<.6?"#ffffff":"#e8343a"),q(l,R+2,w+I+8,10,10,M()<.5?"#f2c8a8":o[Math.floor(M()*o.length)]),q(l,R+13,w+I,1,26-I,"rgba(0,0,0,0.25)")}}},h=(l,f,d,x,p,M)=>{q(l,f,d,x,p,"#b88a5e"),Ln(l,f,d,x,p,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let E=f;E<f+x;E+=9)q(l,E,d+p*.55,1,p*.45,"rgba(60,35,20,0.25)");let T=d+p*.3;for(let E=0;E<2;E++){let y=T+E*22;q(l,f+8,y,x*.55,3,"#6a4428"),a(l,f+10,f+x*.55+6,y,14,M,"ctu")}q(l,f+x*.64,d+p*.22,x*.28,p*.26,"#2e3a32"),q(l,f+x*.64,d+p*.22,x*.28,2,"#6a4428");for(let E=0;E<5;E++)q(l,f+x*.67,d+p*(.27+E*.04),x*(.12+M()*.1),1.6,"rgba(240,240,230,0.75)");q(l,f+4,d+p*.56,x-8,6,"#5a3820"),q(l,f+4,d+p*.56+6,x-8,p*.08,"#7a5232"),q(l,f+x*.3,d+p*.47,18,p*.09,"#c8ccd0"),q(l,f+x*.3+3,d+p*.47+3,12,5,"#3a3a40");for(let E=f+30+M()*20;E<f+x-20;E+=70+M()*20)q(l,E,d,1,p*.14,"#3a2a1e"),l.fillStyle="#2f3a36",l.beginPath(),l.moveTo(E-9,d+p*.2),l.quadraticCurveTo(E+.5,d+p*.12,E+10,d+p*.2),l.fill(),l.fillStyle="rgba(255,214,150,0.9)",l.beginPath(),l.ellipse(E+.5,d+p*.2,7,2,0,0,7),l.fill();for(let E=f+26+M()*16;E<f+x-26;E+=78+M()*20){q(l,E-16,d+p*.74,32,4,"#4a2e1c"),q(l,E-1.5,d+p*.74+4,3,p*.2,"#2e2420"),q(l,E-8,d+p*.94,16,2,"#2e2420");for(let y of[-24,24])q(l,E+y-6,d+p*.8,12,3,"#3a2618"),q(l,E+y+(y<0?-6:4),d+p*.66,2,p*.17,"#3a2618"),q(l,E+y-5,d+p*.83,1.6,p*.13,"#3a2618"),q(l,E+y+3.4,d+p*.83,1.6,p*.13,"#3a2618");l.fillStyle="#f4f0e8",l.beginPath(),l.ellipse(E-6,d+p*.74-1.5,3,1.5,0,0,7),l.fill()}},m=(l,f,d,x,p,M,T="")=>{let E=ln(M);if(io(l,i,d,x,"#e6e2da"),p==="glass"||p==="door"||p==="konbini"||p==="cafe"){let b=x*.22,w=d-12,R=x*.78-4;q(l,6,b,w,R,p==="konbini"?"#f6f4ea":p==="cafe"?"#7a5a40":"#8a7a68"),r(l,6,b,w,R,E,T||p),p==="konbini"&&q(l,6,b+4,w,5,"#ffffff"),p==="door"&&(q(l,d/2-30,b+18,60,24,"#fff"),Et(l,"\u55B6\u696D\u4E2D",d/2,b+30,54,18,"#c82828")),p==="glass"&&!T&&E()<.7&&(q(l,16,b+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),Et(l,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,b+44,40,16,"#c02020")),d2(l,f,6,b,w,R,p==="konbini"?"#e4eef8":p==="cafe"?"#f0a868":"#f2d2a6"),l.save(),l.globalAlpha=.35,ts(l,6,b,w,R,E),l.restore(),q(l,6,b,w,4,"#4a4e57"),q(f,6,b,w,4,"#000"),p==="door"&&(q(l,d/2-2,b,4,R,"#4a4e57"),q(f,d/2-2,b,4,R,"#000"),q(l,d/2-14,b+R*.45,3,40,"#c0c4c8"),q(l,d/2+11,b+R*.45,3,40,"#c0c4c8")),p==="cafe"&&(q(l,d*.62,x-70,46,62,"#2c3a30"),q(f,d*.62,x-70,46,62,"#000"),Et(l,"\u30E9\u30F3\u30C1",d*.62+23,x-50,40,13,"#fff",700))}else if(p==="shutter"){let b=x*.2,w=d-12,R=x*.8;q(l,6,b,w,R,"#b8bcc0");for(let P=b;P<b+R;P+=7)q(l,6,P,w,2,"rgba(60,64,72,0.35)"),q(l,6,P+2,w,1,"rgba(255,255,255,0.35)");q(l,6,b,w,10,"#8f949a"),cn(l,i,d,x,.12),E()<.5&&(q(l,d/2-40,b+R*.35,80,26,"#fff"),Et(l,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),d/2,b+R*.35+13,74,16,"#333",700))}else if(p==="noren"){q(l,0,0,d,x,"#5b3c28");for(let I=0;I<d;I+=10)q(l,I,x*.2,3,x*.8,"rgba(25,15,8,0.6)");cn(l,i,d,x,.15);let y=d*.12,b=x*.24,w=d*.76,R=x*.34,P=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);q(l,y,b,w,R,P);for(let I=1;I<3;I++)q(l,y+w*I/3-1,b+R*.25,2,R*.75,"rgba(255,255,255,0.25)");Et(l,e.pick(p2),d/2,b+R*.55,w*.9,46,"#f5f0e6",800),q(l,y,b,w,6,"#3a2a1c"),f.fillStyle="#ffae5c",f.fillRect(y,b+R,w,x-b-R),f.fillStyle="rgba(255,170,90,0.6)",f.fillRect(y,b,w,R),l.fillStyle="#d8352a",l.beginPath(),l.ellipse(d*.9,x*.36,13,19,0,0,7),l.fill(),Et(l,"\u9152",d*.9,x*.36,16,14,"#fff"),f.fillStyle="#ff6a3a",f.beginPath(),f.ellipse(d*.9,x*.36,13,19,0,0,7),f.fill()}else if(p==="house"){let y=d*.18,b=x*.3,w=d*.34,R=x*.7;q(l,y-6,b-6,w+12,R+6,"#9a9a96"),q(l,y,b,w,R,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),q(l,y+w-14,b+R*.5,4,22,"#d8d0c0"),q(l,y+6,b+10,w-12,R*.25,"rgba(255,255,255,0.18)"),q(l,d*.62,x*.48,30,22,"#cfcfca"),q(l,d*.62+6,x*.48+5,18,4,"#555");let P=d*.6,I=x*.22,C=d*.3,L=x*.2;so(l,P,I,C,L,3),ts(l,P,I,C,L,E,1);for(let D=0;D<3;D++)l.fillStyle="#7b5a43",l.fillRect(d*.6+D*22,x-26,16,18),l.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),l.beginPath(),l.arc(d*.6+D*22+8,x-32,11,0,7),l.fill();f.fillStyle="#ffd08a",f.beginPath(),f.arc(y+w+14,b+8,6,0,7),f.fill(),E()<.6&&(f.fillStyle="#ffcf8f",f.fillRect(P,I,C,L))}else if(p==="garage"){let b=x*.25,w=d-16,R=x*.75;q(l,8,b,w,R,"#efefec");for(let P=b;P<b+R;P+=9)q(l,8,P,w,1.5,"rgba(80,80,90,0.25)");cn(l,i,d,x,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((l,f)=>{i.add("shop_"+l,t,s,(d,x,p,M)=>m(d,x,p,M,l,100+f)),(l==="glass"||l==="noren"||l==="house")&&i.add("shop_"+l+"2",t,s,(d,x,p,M)=>m(d,x,p,M,l,200+f)),l==="glass"&&["bakery","books","florist","clothes"].forEach((d,x)=>i.add("shop_glass"+(x+3),t,s,(p,M,T,E)=>m(p,M,T,E,"glass",300+x,d)))});for(let l=0;l<14;l++)i.add("hs"+l,512,76,(f,d,x,p)=>{let[M,T]=lu[l%lu.length],E=bp[l*7%bp.length];q(f,0,0,x,p,M),q(f,0,0,x,5,"rgba(255,255,255,0.35)"),q(f,0,p-6,x,6,"rgba(0,0,0,0.18)"),l%3===0&&(q(f,12,12,p-24,p-24,T),Et(f,E[0],12+(p-24)/2,p/2,p-30,34,M)),Et(f,E,x/2+(l%3===0?24:0),p/2+2,x*.7,50,T,900),cn(f,i,x,p,.08),d.fillStyle=M==="#fff"||M==="#f5efe0"?"#d9d6cc":M,d.fillRect(0,0,x,p),d.globalAlpha=.9,Et(d,E,x/2+(l%3===0?24:0),p/2+2,x*.7,50,T==="#fff"?"#ffffff":T,900),d.globalAlpha=1});for(let[l,f,d]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+l,512,76,(x,p,M,T)=>{q(x,0,0,M,T,f),q(x,0,0,M,5,"rgba(255,255,255,0.35)"),q(x,0,T-6,M,6,"rgba(0,0,0,0.18)"),Et(x,l,M/2,T/2+2,M*.7,50,d,900),cn(x,i,M,T,.08),p.fillStyle=f,p.fillRect(0,0,M,T),p.globalAlpha=.9,Et(p,l,M/2,T/2+2,M*.7,50,d,900),p.globalAlpha=1});let g=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],v=(l,f,d,x,p,M)=>{l.beginPath(),l.moveTo(f+M,d),l.arcTo(f+x,d,f+x,d+p,M),l.arcTo(f+x,d+p,f,d+p,M),l.arcTo(f,d+p,f,d,M),l.arcTo(f,d,f+x,d,M),l.closePath()};for(let l=0;l<10;l++)i.add("vs"+l,72,288,(f,d,x,p)=>{let M=Sp[l%Sp.length],T=g[(l*5+2)%g.length],E=l%10===3||l%10===6||l%10===8,[y,b]=lu[(l*3+1)%lu.length],w=E?y==="#fff"||y==="#f5efe0"?"#2b2b33":y:"#fbf7ef",R=E?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][l%4];q(f,0,0,x,p,"#2a2b30"),v(f,3,3,x-6,p-6,8),f.fillStyle=w,f.fill(),Ln(f,3,3,x-6,p-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),f.save(),v(f,8,8,x-16,p-16,6),f.strokeStyle=T,f.globalAlpha=.55,f.lineWidth=7,f.stroke(),f.globalAlpha=1,f.strokeStyle="#fff6fb",f.lineWidth=2.2,f.stroke(),f.restore(),au(f,M,x/2,18,p-18,50,R,900),cn(f,i,x,p,.06),q(d,0,0,x,p,"#000"),v(d,3,3,x-6,p-6,8),d.fillStyle=E?"#3a3a3e":"#4a4844",d.fill(),d.save(),v(d,8,8,x-16,p-16,6),d.strokeStyle=T,d.lineWidth=7,d.stroke(),d.strokeStyle="#ffffff",d.lineWidth=2.5,d.stroke(),d.restore(),au(d,M,x/2,18,p-18,50,E?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([l,f,d],x)=>i.add("bb"+x,512,240,(p,M,T,E)=>{q(p,0,0,T,E,"#fbfaf5"),q(p,0,0,T,E*.62,d),Et(p,l,T/2,E*.32,T*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Et(p,f,T/2,E*.8,T*.85,52,"#333",800),cn(p,i,T,E,.08),q(M,0,0,T,E,"#555"),M.globalAlpha=.85,q(M,0,0,T,E*.62,d),Et(M,l,T/2,E*.32,T*.9,96,"#fff",900),M.globalAlpha=1})),i.add("konbini_band",480,72,(l,f,d,x)=>{q(l,0,0,d,x,"#fbfbf7"),q(l,0,x*.62,d,x*.14,"#2a9a4a"),q(l,0,x*.76,d,x*.12,"#f08a24"),q(l,0,x*.88,d,x*.12,"#2f6fd8"),Et(l,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,x*.32,d*.8,40,"#1d3d8a",900),f.fillStyle="#f3f6f0",f.fillRect(0,0,d,x),Et(f,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,x*.32,d*.8,40,"#1d3d8a",900)});for(let l=0;l<3;l++)i.add("vend"+l,128,234,(f,d,x,p)=>{let M=["#d8352a","#2f6fd8","#f4f4f0"][l];q(f,0,0,x,p,M),q(f,8,10,x-16,p*.55,"#eef4f8");let T=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let E=0;E<4;E++)for(let y=0;y<6;y++){let b=14+y*17,w=18+E*30;f.fillStyle=T[(E*6+y+l)%T.length],f.fillRect(b,w,11,20),f.fillStyle="rgba(255,255,255,0.5)",f.fillRect(b+2,w+2,3,14),f.fillStyle="#2a2a2a",f.fillRect(b,w+23,11,3)}q(f,10,p*.62,x-20,22,"#222"),q(f,x-34,p*.66,14,22,"#bbb"),q(f,14,p*.82,x-28,22,"#1b1b1b"),Et(f,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][l],x/2,p*.62+11,x-28,14,"#fff",700),cn(f,i,x,p,.08),d.fillStyle="#f2f8ff",d.fillRect(8,10,x-16,p*.55);for(let E=0;E<4;E++)for(let y=0;y<6;y++)d.fillStyle=T[(E*6+y+l)%T.length],d.fillRect(14+y*17,18+E*30,11,20);d.fillStyle="#9fd0ff",d.fillRect(10,p*.62,x-20,22)});i.add("ac",128,88,(l,f,d,x)=>{q(l,0,0,d,x,"#e9e9e4"),Ln(l,0,0,d,x,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),l.fillStyle="#9a9c9e",l.beginPath(),l.arc(d*.4,x*.5,x*.36,0,7),l.fill(),l.strokeStyle="#d6d6d2",l.lineWidth=2;for(let p=6;p<x*.36;p+=6)l.beginPath(),l.arc(d*.4,x*.5,p,0,7),l.stroke();for(let p=12;p<x-10;p+=6)q(l,d*.78,p,d*.16,2,"#b8b8b2")}),i.add("plate",128,64,(l,f,d,x)=>{q(l,0,0,d,x,"#f2cf3a"),l.strokeStyle="#2f5a2f",l.lineWidth=3,l.strokeRect(3,3,d-6,x-6),Et(l,"\u54C1\u5DDD 580",d/2,16,d*.6,14,"#2f5a2f",700),Et(l,"\u3042 12-34",d/2,42,d*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(l,f,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.moveTo(2,2),l.lineTo(d-2,2),l.lineTo(d/2,x-2),l.fill(),l.fillStyle="#d8231c",l.beginPath(),l.moveTo(10,7),l.lineTo(d-10,7),l.lineTo(d/2,x-12),l.fill(),Et(l,"\u6B62\u307E\u308C",d/2,34,d*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(l,f,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.fillStyle="#1e5bb8",l.beginPath(),l.arc(d/2,x/2,d/2-6,0,7),l.fill(),l.fillStyle="#fff",l.beginPath(),l.moveTo(d/2,22),l.lineTo(d/2+22,50),l.lineTo(d/2+8,50),l.lineTo(d/2+8,88),l.lineTo(d/2-8,88),l.lineTo(d/2-8,50),l.lineTo(d/2-22,50),l.fill()}),i.add("sign_speed",112,112,(l,f,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=12,l.beginPath(),l.arc(d/2,x/2,d/2-9,0,7),l.stroke(),Et(l,"30",d/2,x/2+2,d*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(l,f,d,x)=>{q(l,0,0,d,x,"#1d4f9a"),l.strokeStyle="#fff",l.lineWidth=2,l.strokeRect(3,3,d-6,x-6),au(l,"\u672C\u753A\u4E8C\u4E01\u76EE",d/2,10,x-10,24,"#fff",700)});for(let l=0;l<4;l++)i.add("poster"+l,64,90,(f,d,x,p)=>{let M=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][l];q(f,0,0,x,p,M),q(f,4,4,x-8,p*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][l]),Et(f,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][l],x/2,p*.25,x-12,18,"#fff",900);for(let T=0;T<4;T++)q(f,8,p*.58+T*8,x-16-T%2*14,3,"rgba(60,60,60,0.5)")});for(let l=0;l<3;l++)i.add("bal"+l,t,88,(f,d,x,p)=>{let M=["#e9e3d6","#dfe6ea","#efe2dc"][l];if(io(f,i,x,p,M),l===1)for(let T=10;T<x-6;T+=x/6)q(f,T,10,x/6-8,p-20,"rgba(220,235,245,0.9)"),f.fillStyle="rgba(255,255,255,0.45)",f.fillRect(T,10,x/6-8,(p-20)*.4);else{q(f,0,0,x,7,"rgba(255,255,255,0.4)");for(let T=x/3;T<x;T+=x/3)q(f,T-1,0,2,p,"rgba(0,0,0,0.08)")}q(f,0,p-6,x,6,"rgba(0,0,0,0.12)"),es(f,x*.3,p-6,10,10,.2)});i.add("kawara",272,256,(l,f,d,x)=>{q(l,0,0,d,x,"#58617a");for(let p=0;p<x;p+=16)Ln(l,0,p,d,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let p=-4;p<d;p+=20)q(l,p,0,2,x,"rgba(0,0,0,0.18)");cn(l,i,d,x,.12)}),i.add("wood",256,256,(l,f,d,x)=>{q(l,0,0,d,x,"#6d4c37");for(let p=0;p<x;p+=14)q(l,0,p,d,2,"rgba(25,15,8,0.4)"),q(l,0,p+2,d,1,"rgba(255,220,180,0.07)");cn(l,i,d,x,.16)}),i.add("block",256,128,(l,f,d,x)=>{q(l,0,0,d,x,"#c9c7bf");for(let p=0;p<x;p+=32)for(let M=p/32%2?-32:0;M<d;M+=64)l.strokeStyle="rgba(80,80,80,0.35)",l.lineWidth=2,l.strokeRect(M+1,p+1,62,30);for(let p=0;p<d;p+=64)l.fillStyle="rgba(70,70,70,0.25)",l.fillRect(p+20,40,24,16);cn(l,i,d,x,.15),es(l,0,0,d,40,.1)}),i.add("lantern",64,96,(l,f,d,x)=>{l.fillStyle="#d8352a",l.beginPath(),l.ellipse(d/2,x/2,d/2-2,x/2-8,0,0,7),l.fill();for(let p=16;p<x-12;p+=7)q(l,4,p,d-8,1.5,"rgba(0,0,0,0.2)");q(l,d/2-14,2,28,8,"#222"),q(l,d/2-14,x-10,28,8,"#222"),Et(l,"\u796D",d/2,x/2,d*.6,28,"#fff",900),f.fillStyle="#ff6a35",f.beginPath(),f.ellipse(d/2,x/2,d/2-2,x/2-8,0,0,7),f.fill()}),i.add("busstop",96,96,(l,f,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=8,l.beginPath(),l.arc(d/2,x/2,d/2-6,0,7),l.stroke(),Et(l,"\u30D0\u30B9\u505C",d/2,x/2,d*.66,20,"#1d3d8a",900)}),i.add("white",16,16,l=>q(l,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(l,f,d,x)=>{l.save(),l.translate(d/2,x/2),l.rotate(Math.PI/4),l.fillStyle="#1b1b1b",l.fillRect(-41,-41,82,82),l.fillStyle="#f2c230",l.fillRect(-37,-37,74,74),l.restore(),l.fillStyle="#1b1b1b",l.fillRect(d/2-22,x/2-6,44,18),l.fillRect(d/2-16,x/2-16,18,12),l.fillRect(d/2+8,x/2-13,5,7),l.beginPath(),l.arc(d/2-12,x/2+15,5,0,7),l.arc(d/2+12,x/2+15,5,0,7),l.fill(),Et(l,"\u8E0F\u5207",d/2,x/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((l,f)=>i.add("bridge"+f,64,176,(d,x,p,M)=>{q(d,0,0,p,M,"#b9b5ab"),cn(d,i,p,M,.2),q(d,6,6,p-12,M-12,"#a7a398"),au(d,l,p/2,14,M-14,34,"#3f3c37",800)})),i.add("signal",240,84,(l,f,d,x)=>{q(l,0,0,d,x,"#4a4d52"),q(l,0,0,d,5,"#5c6066"),cn(l,i,d,x,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([p,M])=>{l.fillStyle="#26282c",l.beginPath(),l.arc(M,x/2,33,0,7),l.fill(),l.fillStyle=p,l.beginPath(),l.arc(M,x/2,27,0,7),l.fill()})}),i.add("ped_sig",64,128,(l,f,d,x)=>{q(l,0,0,d,x,"#3d4045"),l.fillStyle="#5a1814",l.fillRect(8,8,d-16,x/2-12),l.fillStyle="#0d4f44",l.fillRect(8,x/2+4,d-16,x/2-12),l.fillStyle="rgba(255,255,255,0.18)",l.beginPath(),l.arc(d/2,x*.18,6,0,7),l.fill(),l.fillRect(d/2-5,x*.24,10,18)}),i.add("tomare",256,96,(l,f,d,x)=>{l.clearRect(0,0,d,x),l.fillStyle="rgba(244,244,238,0.012)",l.fillRect(0,0,d,x),Et(l,"\u6B62\u307E\u308C",d/2,x/2+4,d*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((l,f)=>i.add("hodokyo"+f,256,44,(d,x,p,M)=>{q(d,0,0,p,M,"#1f4f96"),d.strokeStyle="#fff",d.lineWidth=3,d.strokeRect(4,4,p-8,M-8),Et(d,l,p/2,M/2+1,p*.85,28,"#fff",800)}));let S=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];S.forEach(([l,f,d],x)=>{let p=S[(x+3)%4][0],M=S[(x+1)%4][0];i.add("ekimei"+x,320,124,(T,E,y,b)=>{q(T,0,0,y,b,"#3a3d42"),q(T,4,4,y-8,b-8,"#f8f8f3"),Et(T,f,y/2,20,y*.5,15,"#2b2b2b",700),Et(T,l,y/2,52,y*.6,40,"#151515",900),Et(T,d,y/2,80,y*.5,12,"#555",600),q(T,4,b-30,y-8,26,"#1f9a50"),T.fillStyle="#fff",uu(T,12,700),T.textBaseline="middle",T.textAlign="left",T.fillText("\u2190 "+p,12,b-17),T.textAlign="right",T.fillText(M+" \u2192",y-12,b-17),cn(T,i,y,b,.06),q(E,4,4,y-8,b-8,"#8a8a84")}),i.add("ekiplate"+x,220,48,(T,E,y,b)=>{q(T,0,0,y,b,"#4b3326"),cn(T,i,y,b,.2),Et(T,l+"\u99C5",y/2,b/2+1,y*.8,30,"#f3ead8",800)})});for(let l of["l","r"])i.add("chev_"+l,96,120,(f,d,x,p)=>{q(f,0,0,x,p,"#f4f4ef"),q(f,4,4,x-8,p-8,"#1e5bb8"),f.fillStyle="#f8f8f4",f.beginPath();let M=l==="r"?1:-1,T=x/2,E=p/2;f.moveTo(T-M*26,E-40),f.lineTo(T+M*22,E),f.lineTo(T-M*26,E+40),f.lineTo(T-M*8,E+40),f.lineTo(T+M*40,E),f.lineTo(T-M*8,E-40),f.closePath(),f.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((l,f)=>i.add("tunnel"+f,360,80,(d,x,p,M)=>{q(d,0,0,p,M,"#e9e7e0"),q(d,4,4,p-8,M-8,"#24403b"),cn(d,i,p,M,.08),Et(d,l,p/2,M*.42,p*.8,38,"#f4f2ea",800),Et(d,"L = 170 m",p/2,M*.8,p*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(l,f,d,x)=>{q(l,0,0,d,x,"#f6f6f2"),l.fillStyle="#d42a22";for(let p=-20;p<x;p+=26)l.beginPath(),l.moveTo(4,p),l.lineTo(d/2,p+20),l.lineTo(d-4,p),l.lineTo(d-4,p+11),l.lineTo(d/2,p+31),l.lineTo(4,p+11),l.closePath(),l.fill();l.strokeStyle="#222",l.lineWidth=3,l.strokeRect(1.5,1.5,d-3,x-3)}),i.add("xing_plate",128,48,(l,f,d,x)=>{q(l,0,0,d,x,"#f6f6f2"),l.strokeStyle="#d8231c",l.lineWidth=4,l.strokeRect(3,3,d-6,x-6),Et(l,"\u8E0F\u5207\u6CE8\u610F",d/2,x/2,d*.8,26,"#d8231c",900)}),i.add("rail",240,80,(l,f,d,x)=>{l.clearRect(0,0,d,x),q(l,0,0,d,7,"#e9ebee"),q(l,0,6,d,2,"rgba(60,70,80,0.5)"),q(l,0,x-6,d,6,"#d5d8dc");for(let p=3;p<d;p+=9)q(l,p,7,3,x-13,"#e2e5e9"),q(l,p+2,7,1,x-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(l,f,d,x)=>{let p=ln(4242);q(l,0,0,d,x,"#3d3f3c");let M=38,T=M/Math.SQRT2;l.save(),l.beginPath(),l.rect(0,22,d,x-22),l.clip();for(let E=-2;E*T<x+M;E++)for(let y=-2;y*M<d+M;y++){let b=y*M+(E%2?M/2:0),w=22+E*T,R=.52+p()*.17,P=Math.min(1,Math.max(0,(w-x*.55)/(x*.4))),I=Math.round(255*R*(1-.38*P)),C=`rgb(${I-4},${I-2},${I-9})`;l.fillStyle=C,l.beginPath(),l.moveTo(b,w-T+3.5),l.lineTo(b+T-3.5,w),l.lineTo(b,w+T-3.5),l.lineTo(b-T+3.5,w),l.closePath(),l.fill(),l.fillStyle="rgba(255,255,255,0.12)",l.beginPath(),l.moveTo(b,w-T+3.5),l.lineTo(b+T-3.5,w),l.lineTo(b,w),l.closePath(),l.fill(),P>.3&&p()<.5&&(l.fillStyle=`rgba(70,96,52,${.25+.3*p()})`,l.beginPath(),l.arc(b+(p()-.5)*10,w+6,4+p()*6,0,7),l.fill())}l.restore(),Ln(l,0,x*.55,d,x*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),q(l,0,0,d,22,"#8c8d87"),q(l,0,18,d,4,"rgba(0,0,0,0.3)"),q(l,0,0,d,3,"rgba(255,255,255,0.2)"),cn(l,i,d,x,.12)}),i.add("wrail",240,80,(l,f,d,x)=>{l.clearRect(0,0,d,x),q(l,0,0,d,9,"#6a4a34"),q(l,0,0,d,2,"rgba(255,225,190,0.25)"),q(l,0,8,d,2,"rgba(20,10,5,0.45)"),q(l,0,x-10,d,10,"#5e412e"),q(l,0,x-10,d,2,"rgba(255,225,190,0.18)");for(let p=4;p<d;p+=12)q(l,p,9,5,x-19,"#634632"),q(l,p,9,1.2,x-19,"rgba(255,225,190,0.18)"),q(l,p+4,9,1,x-19,"rgba(20,10,5,0.4)");cn(l,i,d,x,.15)}),i.add("woodwall",t,t,(l,f,d,x)=>{let p=ln(5151);q(l,0,0,d,x,"#5e4130");for(let M=0;M<x;M+=16){let T=p();q(l,0,M,d,16,T<.15?"#6b4b37":T<.3?"#553a2b":"#5e4130"),q(l,0,M,d,2,"rgba(255,220,180,0.12)"),q(l,0,M+14,d,2,"rgba(15,8,4,0.45)");for(let E=p()*80;E<d;E+=60+p()*90)q(l,E,M+2,1.5,12,"rgba(15,8,4,0.35)")}Ln(l,0,0,d,x,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),cn(l,i,d,x,.2)}),i}function wp(i){let n=cu(1024,2560),s=n.getContext("2d"),r=ln(321),o={},a=512,c={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},u=(v,_,S)=>{let l=c[v],f=256,d=v==="pine",x=v==="sakura";s.save(),s.translate(_,S),s.beginPath(),s.rect(0,0,512,512),s.clip();let p=[[f,f,d?80:92]];for(let T=0;T<(d?10:14);T++){let E=r()*6.28,y=45+r()*120;p.push([f+Math.cos(E)*y,f+Math.sin(E)*y*(d?.42:.9),Math.min(34+r()*52,232-y)])}let M=x?2300:d?2600:2300;for(let T=0;T<M;T++){let E=p[Math.floor(r()*p.length)],y=r()*6.28,b=Math.sqrt(r())*E[2],w=E[0]+Math.cos(y)*b,R=E[1]+Math.sin(y)*b*(d?.45:1),P=b/E[2],I=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(P>.82?.5:0))));if(s.fillStyle=l[I],x){let C=7+r()*8;s.beginPath(),s.arc(w,R,C,0,7),s.fill(),r()<.25&&(s.fillStyle=l[4],s.beginPath(),s.arc(w-C*.3,R-C*.3,C*.4,0,7),s.fill())}else if(d)s.save(),s.translate(w,R),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(v==="momiji"){let C=8+r()*7;s.save(),s.translate(w,R),s.rotate(r()*6.28),s.beginPath();for(let L=0;L<10;L++){let D=L%2?C*.42:C,z=L/10*6.2832;s.lineTo(Math.cos(z)*D,Math.sin(z)*D)}s.closePath(),s.fill(),s.restore()}else if(v==="ginkgo"){let C=9+r()*7;s.save(),s.translate(w,R),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,C,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let C=9+r()*10;s.beginPath(),s.ellipse(w,R,C,C*.55,r()*6.28,0,7),s.fill()}}for(let T=0;T<90;T++){let E=r()*6.28,y=150+r()*85,b=f+Math.cos(E)*y,w=f+Math.sin(E)*y*(d?.45:.92);s.fillStyle=l[1+Math.floor(r()*4)],d?(s.save(),s.translate(b,w),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(b,w,x?6+r()*6:7+r()*6,0,7),s.fill())}if(x)for(let T=0;T<14;T++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let E=f+(r()-.5)*300,y=f+60+r()*120;s.beginPath(),s.moveTo(E,y),s.lineTo(E+(r()-.5)*40,y-20-r()*30),s.stroke()}s.restore(),o[v]={u0:_/1024,u1:(_+512)/1024,v0:1-(S+512)/2560,v1:1-S/2560}},h=(v,_,S,l)=>{s.save(),s.translate(_,S),s.beginPath(),s.rect(0,0,512,512),s.clip();let f=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],d=l?120:170;for(let x=0;x<d;x++){let p=256+(r()-.5)*(l?330:380)*Math.sqrt(r()),M=150+r()*(l?230:300)*(1-Math.abs(p-256)/300),T=(p-256)*.35+(r()-.5)*90,E=9+r()*9,y=p+T,b=512-M,w=Math.min(4,Math.floor(r()*2.2+M/380*2.6)),R=s.createLinearGradient(0,512,0,b);R.addColorStop(0,f[0]),R.addColorStop(.6,f[Math.max(1,w-1)]),R.addColorStop(1,f[w]),s.fillStyle=R,s.beginPath(),s.moveTo(p-E/2,512),s.quadraticCurveTo(p-E/2+T*.3,512-M*.55,y,b),s.quadraticCurveTo(p+E/2+T*.3,512-M*.5,p+E/2,512),s.fill()}if(l)for(let x=0;x<16;x++){let p=110+r()*290,M=150+r()*200,T=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(p+(r()-.5)*20,512),s.quadraticCurveTo(p+(r()-.5)*30,(M+512)/2,p,M),s.stroke(),T<.55){s.fillStyle="#fbfaf2";for(let E=0;E<12;E++){let y=E/12*6.283;s.beginPath(),s.ellipse(p+Math.cos(y)*11,M+Math.sin(y)*11,9,4.5,y,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(p,M,8,0,7),s.fill()}else if(T<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(p,M,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(p-3,M-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let E=0;E<6;E++)s.beginPath(),s.arc(p+(r()-.5)*16,M+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),o[v]={u0:_/1024,u1:(_+512)/1024,v0:1-(S+512)/2560,v1:1-S/2560}};((v,_,S)=>{let l=ln(97);s.save(),s.translate(_,S),s.beginPath(),s.rect(0,0,512,512),s.clip(),s.lineCap="round";let f=(d,x,p,M,T,E)=>{let y=d+Math.cos(p)*M,b=x+Math.sin(p)*M;if(s.strokeStyle=E>3?"#76605f":E>1?"#6c5458":"#62494f",s.lineWidth=T,s.beginPath(),s.moveTo(d,x),s.lineTo(y,b),s.stroke(),E<=0||T<.7)return;let w=2+(l()<.4?1:0);for(let R=0;R<w;R++){let P=p+(l()-.5)*1.1+(R-(w-1)/2)*.42;P=P*.8+-Math.PI/2*.2,f(y,b,P,M*(.62+l()*.2),T*.68,E-1)}};for(let d=0;d<6;d++)f(256+(l()-.5)*40,500,-Math.PI/2+(l()-.5)*.9,110+l()*50,5.6,6);s.restore(),o[v]={u0:_/1024,u1:(_+512)/1024,v0:1-(S+512)/2560,v1:1-S/2560}})("twigs",0,0),u("leafA",0,a),u("leafB",512,a),u("sakura",0,a+512),u("pine",512,a+512),u("momiji",0,a+1024),u("ginkgo",512,a+1024),h("grass",0,a+1536,!1),h("flowers",512,a+1536,!0);let g=new $n(n);return g.colorSpace=jt,g.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:g,cells:o,tuftV:[0,1-(a+1536)/2560]}}var un=[1,1,1],be={pole:de("#b1b0a9"),metal:de("#8d9198"),black:de("#2a2b30"),yellow:de("#f2c230"),white:de("#f4f3ee"),trans:de("#a0a3a8"),lampPole:de("#727780"),lampHead:de("#dcdcd6"),trunk:de("#6a5444"),trunkDark:de("#4b3a33"),leaf:de("#86ba4c"),leafShade:de("#2c6640"),sakura:de("#ffd3e3"),sakuraShade:de("#de94b4"),pine:de("#55874c"),pineShade:de("#1d4632"),cedar:de("#41713e"),cedarShade:de("#1b3e2a"),roof:de("#bdbbb3"),parapet:de("#dcdad2"),pipe:de("#c4c4bf"),orange:de("#f07a22"),red:de("#d8352a"),vermilion:de("#e2482c"),concrete:de("#c9c7c0"),stone:de("#a8a69e"),terracotta:de("#b8653d"),rail:de("#eeeeea")},is=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(de),Cp=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(de),bf=null;function Pp(i){bf=i}var Ci=i=>bf.uv(i),oo=Ci,Ip=(i,e)=>{let t=1;for(;bf.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function du(i,e,t,n,s=0){let r=new it().makeRotationY(s);r.setPosition(e,t,n);let o=new it().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var Sf=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let a=e[5];(a==="g"&&e[6]==="l"||a==="d"||a==="k"||a==="c"||a==="n")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},Kt=(i,e,t,n,s,r,o,a=un)=>{Sf(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],a,Ci(o)),i.litV=0},Pi=(i,e,t,n,s,r,o,a=un)=>{Sf(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],a,Ci(o)),i.litV=0},Ii=(i,e,t,n,s,r,o,a=un)=>{Sf(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],a,Ci(o)),i.litV=0},ro=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?Ci(r):void 0),m2=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function Lp(i){return m2.map(e=>new k(e[0],e[1],e[2]).applyMatrix4(i))}function Tf(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,be.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?be.black:be.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,be.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,be.metal);let o=[-.85,-.3,.3,.85],a=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,be.white);for(let u of a)s.cyl(0,r-1.65,u,.045,.03,.15,6,be.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,be.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,be.trans),s.box(-.06,7.2,.12,.06,7.35,.26,be.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,be.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,be.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,be.concrete);for(let u=2.4,h=0;u<r-2;u+=.45,h++)s.rod([0,u,0],[h%2?.3:-.3,u,0],.015,.015,3,be.metal);return i.atlas.setM(e),Kt(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&Kt(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...a.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new k(u[0],u[1],u[2]).applyMatrix4(e))}var hu=new k;function ws(i,e,t,n,s,r){i.lamps&&(hu.set(t,n,s).applyMatrix4(e),i.lamps.push(hu.x,hu.y,hu.z,r))}function Ef(i,e,t,n={}){let s=i.color;s.setM(e),ws(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,be.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,be.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,be.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,be.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,un);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function Dp(i,e,t=.04){let n=i.color;n.setM(e),ws(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,be.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,be.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,be.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,un),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function Ia(i,e){let t=i.color;t.setM(e),ws(i,e,0,3.5,0,.9),t.cyl(0,0,0,.07,.06,3.2,8,de("#3a3a3e")),t.box(-.2,3.2,-.2,.2,3.25,.2,de("#3a3a3e")),t.cyl(0,3.75,0,.26,.04,.3,8,de("#3a3a3e")),i.lamp.setM(e),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,un),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],un,{u0:0,u1:1,v0:0,v1:1})}function wf(i,e,t){let n=Math.floor(t()*3),s=[be.red,de("#2f6fd8"),be.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,En(s,.8)),i.atlas.setM(e),Kt(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function yf(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,de("#e6e6e1")),i.atlas.setM(e),Kt(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function Np(i,e,t){let n=i.color;n.setM(e);let s=t.pick([de("#c8ccd2"),de("#c0392b"),de("#2c6fb7"),de("#2b2b2b"),de("#e8c84a"),de("#e98fb0")]);for(let o of[-.52,.52])for(let a=0;a<12;a++){let c=a/12*Math.PI*2,u=(a+1)/12*Math.PI*2;n.rod([o+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,be.black)}let r=(o,a)=>n.rod(o,a,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,be.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,be.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,be.metal)}function Up(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,be.orange),t.cyl(0,.04,0,.16,.03,.68,10,be.orange),t.cyl(0,.32,0,.115,.095,.12,10,be.white,!1)}function Af(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,be.terracotta),i.leaf.setM(e),Li(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}function As(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,be.metal),i.atlas.setM(e),n<0?Ii(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Pi(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function Rf(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?be.white:be.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,be.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,be.black),i.atlas.setM(e),t<0?Ii(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Pi(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function Fp(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,de("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,de("#f0a020"))}function Cf(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,be.orange);let s=0,r=3.25,o=.42,a=14;for(let c=0;c<a;c++){let u=c/a*Math.PI*2,h=(c+1)/a*Math.PI*2,m=(g,v,_)=>[t*_,r+Math.sin(g)*v,s+Math.cos(g)*v-.25];ro(n,m(0,0,-.02),m(t>0?h:u,o,-.02),m(t>0?u:h,o,-.02),be.orange),ro(n,m(0,0,-.035),m(t>0?h:u,o*.86,-.035),m(t>0?u:h,o*.86,-.035),de("#dfe9f2"))}}var Pf=null;function Bp(i){Pf=i}var Mf=1;function Op(i){Mf=i}function Li(i,e,t,n,s,r,o,a,c,u,h,m,g=0){let v=Pf[o],_=1+(1-Mf)*.35;a=Math.max(2,Math.round(a*Mf));for(let S=0;S<a;S++){let l=c()*2-1,f=c()*2-1,d=c()*2-1;g&&(f=1.2+c());let x=Math.hypot(l,f,d)||1;l/=x,f/=x,d/=x;let p=-d,M=0,T=l;x=Math.hypot(p,T),x<.1&&(p=1,T=0,x=1),p/=x,T/=x;let E=f*T-d*M,y=d*p-l*T,b=l*M-f*p,w=Math.PI+(c()-.5)*.9,R=Math.cos(w),P=Math.sin(w),I=p*R+E*P,C=M*R+y*P,L=T*R+b*P,D=E*R-p*P,z=y*R-M*P,W=b*R-T*P,O=r*(1.3+c()*.45)*_/2,H=t+(c()-.5)*r*.6,V=n+(c()-.5)*r*(g?.15:.5),ie=s+(c()-.5)*r*.6,he=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([He,J])=>[H+(I*He+D*J)*O,V+(C*He+z*J)*O*(g?.6:1),ie+(L*He+W*J)*O]),Qe=he.map(He=>{let J=He[0]-e[0],Z=He[1]-e[1],Me=He[2]-e[2],Le=Math.hypot(J,Z,Me)||1;J/=Le,Z/=Le,Me/=Le;let we=He[0]-t,Ge=He[1]-n,Je=He[2]-s;return Le=Math.hypot(we,Ge,Je)||1,[J*.7+we/Le*.3,Z*.7+Ge/Le*.3+(g?.5:0),Me*.7+Je/Le*.3]}),Re=he.map(He=>ep(h,u,.45+.55*Math.max(0,Math.min(1,(He[1]-m[0])/(m[1]-m[0])))));i.leaf.card(he,Qe,v,Re)}}function If(i,e,t,n="grass",s=1){let r=Pf[n],o=(.42+t()*.38)*s,a=o*1.2,c=t()*Math.PI,u=[0,1,0],h=[u,u,u,u],m=[.6,.64,.58],g=[1,1,1];i.leaf.setM(e);for(let v of[c,c+Math.PI/2]){let _=Math.cos(v)*a/2,S=Math.sin(v)*a/2;i.leaf.card([[-_,-.05,-S],[_,-.05,S],[_,o,S],[-_,o,-S]],h,r,[m,m,g,g])}}function g2(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,be.trunk);for(let u=0;u<3;u++){let h=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(h)*1.1*n,s*.68,Math.sin(h)*1.1*n],.09*n,.05*n,5,be.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",a=[s*.45,s*1.15],c=7+Math.floor(t()*3);for(let u=0;u<c;u++){let h=t()*6.28,m=(.6+t())*1.3*n;Li(i,r,Math.cos(h)*m,s*(.62+t()*.3),Math.sin(h)*m,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],a)}Li(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],a)}function v2(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,be.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,m=(2.2+t()*1.6)*n,g=[Math.cos(h)*m,s*(.62+t()*.18),Math.sin(h)*m];i.color.rod([0,s*.4,0],g,.12*n,.05*n,5,be.trunkDark),r.push(g),i.color.rod(g,[g[0]*1.25,g[1]+.9*n,g[2]*1.25],.05*n,.02*n,4,be.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],a=[s*.5,s*1.1],c=[.72,.62,.72];for(let u of r)for(let h=0;h<2;h++)Li(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],c,a);Li(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],c,a)}function x2(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,a=[r*.4,o*.45,.2],c=[r,o*.8,-.2];s.rod([0,0,0],a,.2*n,.15*n,6,be.trunkDark),s.rod(a,c,.15*n,.09*n,6,be.trunkDark),i.leaf.setM(e);let u=[[c[0],c[1]+.3,c[2],1.7],[a[0]+1.4*n,a[1]+.8,.5,1.3],[a[0]-1.3*n,a[1]+1.4,-.4,1.2],[c[0]+.9*n,c[1]-.6,.8,1.1]];for(let[h,m,g,v]of u)s.rod(h>a[0]?a:c,[h,m-.2,g],.07*n,.04*n,4,be.trunkDark),Li(i,[h,m-.8,g],h,m,g,v*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[m-.7,m+.5],1)}function _2(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,be.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,m=(1.8+t()*1.4)*n,g=[Math.cos(h)*m,s*(.55+t()*.2),Math.sin(h)*m];i.color.rod([0,s*.38,0],g,.09*n,.04*n,5,be.trunkDark),r.push(g)}i.leaf.setM(e);let o=[0,s*.7,0],a=[s*.45,s*1.1],c=[.62,.52,.56];for(let u of r)Li(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],c,a);Li(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],c,a)}function y2(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,be.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],a=[.68,.6,.52];for(let c=0;c<7;c++){let u=s*(.34+c*.09),h=(2.1-c*.24)*n,m=t()*6.28;Li(i,r,Math.cos(m)*h*.35,u,Math.sin(m)*h*.35,Math.max(.7,h)*1.05,"ginkgo",5,t,[1,1,1],a,o)}}function M2(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,de("#eeece6"));for(let u=0;u<7;u++){let h=t.range(.4,r*.85),m=h/r;s.cyl(o*m,h,0,.135*n*(1-m*.6),.13*n*(1-m*.6),.05,7,de("#2b2b30"),!1)}for(let u=0;u<7;u++){let h=r*(.45+t()*.5),m=t()*6.28,g=(.8+t()*1.6)*n,v=h/r;s.rod([o*v,h,0],[o*v+Math.cos(m)*g,h+g*.9,Math.sin(m)*g],.035*n,.012*n,4,de("#8b7f78"))}let a=r*.7,c=(1.5+t()*.5)*n;i.leaf.setM(e),Li(i,[o*.7,a,0],o*.7,a,0,c,"twigs",3,t,[1,1,1],[.92,.9,.92],[a-c,a+c])}function b2(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,be.trunkDark),i.foliage.setM(e);let r=de("#1d3a2c"),o=de("#eef2f8"),a=de("#d7e0ec");for(let c=0;c<4;c++){let u=s*(.16+c*.19),h=(1.9-c*.38)*n,m=s*.3;i.foliage.cyl(0,u,0,h,h*.3,m,9,r),i.foliage.cyl(0,u+m*.45,0,h*.72,.05,m*.62,9,c%2?o:a)}}function S2(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,be.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,be.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,be.cedar)}var zp={broad:g2,sakura:v2,pine:x2,cedar:S2,maple:_2,ginkgo:y2,birch:M2,snowcedar:b2},Ap={};function kp(i,e){let t=i+e,n=Ap[t];if(!n){let s={color:new xn,foliage:new xn,leaf:new xn({uv:!0})};zp[i](s,new it,ln(1e3+e*77+i.length*13),1),n=Ap[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays()}}return n}function Hp(){for(let i in zp)for(let e=0;e<4;e++)kp(i,e)}function On(i,e,t,n,s=1){let r=kp(t,Math.floor(n()*4)),o=e.clone().scale(new k(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o)}var T2=new Set(["win0","win2","win5","win6"]),ns=(i,e,t)=>e<t?i+(e<t*.35&&T2.has(i)?"C":"L"):i;function La(i,e,t,n,s,r,o){let a=Math.max(1,Math.round(t/3)),c=t/a;for(let u of[-1,1])for(let h=0;h<n.length-1;h++)for(let m=0;m<a;m++){let g=h>0&&r()<.3?ns("win6",r(),o):r()<.2?"win5":"plain";(u>0?Pi:Ii)(i,u*e/2,m*c,(m+1)*c,n[h],n[h+1],g,s)}}function Da(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],be.roof);let o=.5,a=.15;if(i.box(-e/2,n,-.02,e/2,n+o,a,be.parapet),i.box(-e/2,n,t-a,e/2,n+o,t,be.parapet),i.box(-e/2,n,0,-e/2+a,n+o,t,be.parapet),i.box(e/2-a,n,0,e/2,n+o,t,be.parapet),s()<.4){let c=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[h,m]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(c+h-.05,n,u+m-.05,c+h+.05,n+1,u+m+.05,be.metal);i.cyl(c,n+1,u,.85,.85,1.3,12,de("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,be.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,be.metal)}function fu(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,be.black);let r="vs"+Math.floor(s()*10);Ii(i.atlas,e-.065,-.88,-.12,t,n,r),Pi(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,be.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,be.metal)}function ss(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,be.concrete,null,{noBottom:!0}),n.type){case"shop":return E2(i,e,t,n);case"machiya":return w2(i,e,t,n);case"apt":return A2(i,e,t,n);case"office":return R2(i,e,t,n);case"konbini":return C2(i,e,t,n);case"house":return I2(i,e,t,n);case"tower":return L2(i,e,t,n)}}var Vp=new Set(["glass","door","cafe","noren"]),Gp={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function E2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,m=3.6,g=3,v=m+(o-1)*g,_=Math.max(1,Math.round(s/3)),S=s/_,l=-s/2,f=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),d=[],x=0;for(let y=0;y<_;y++){let b=Ip(t,"shop_"+f[y%f.length]);d.push(b),!x&&b.startsWith("shop_glass")&&b.length>10&&(x=+b.slice(10))}for(let y=0;y<_;y++){let b=f[y%f.length];Kt(u,l+y*S,l+(y+1)*S,0,m,0,x&&b==="glass"?"shop_glass"+x:d[y]),Vp.has(b)&&ws(i,e,l+(y+.5)*S,1.9,-.8,.7)}let p=t.pick([0,0,1,5,0,1]),M=[0,m];for(let y=1;y<o;y++)M.push(m+y*g);for(let y=1;y<o;y++)for(let b=0;b<_;b++){let w=b%2===1&&t()<.3?5:p;Kt(u,l+b*S,l+(b+1)*S,M[y],M[y+1],0,ns("win"+w,t(),c),a)}La(u,s,r,M,a,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],En(a,.8)),Da(h,s,r,v,t);let T=s*.94;h.box(-T/2,m-.8,-.3,T/2,m+.08,-.02,be.black);let E="hs"+Math.floor(t()*14);if(Kt(u,-T/2,T/2,m-.8,m+.08,-.305,Gp[x]||E),t()<.55){let y=t.pick(Cp),b=m-.85;h.quad([s/2-.2,b-.35,-1.1],[-s/2+.2,b-.35,-1.1],[-s/2+.2,b,-.02],[s/2-.2,b,-.02],y),h.quad([s/2-.2,b-.6,-1.1],[-s/2+.2,b-.6,-1.1],[-s/2+.2,b-.35,-1.1],[s/2-.2,b-.35,-1.1],En(y,.85))}if(o>=2&&t()<.85){let y=(t()<.5?1:-1)*(s/2-.35);fu(i,y,m+.3,Math.min(v-.15,m+2.8),t)}for(let y=1;y<o;y++)if(t()<.4){let b=Math.floor(t()*_),w=l+b*S+.15,R=l+(b+1)*S-.15,P=M[y];h.box(w,P-.12,-.9,R,P,0,be.parapet),Kt(u,w,R,P,P+1,-.9,"rail"),Ii(u,w,-.9,0,P,P+1,"rail"),Pi(u,R,-.9,0,P,P+1,"rail"),t()<.45&&$p(h,w+.1,R-.1,P+1.95,-.55,t),t()<.6&&yf(i,e,(w+R)/2+.6,P,-.75)}else if(t()<.35){let b=Math.floor(t()*_);yf(i,e,l+(b+.5)*S,M[y]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}h.cyl(l+.12,0,-.08,.05,.05,v,6,be.pipe,!1),h.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,de("#d9d9d3")),o>=3&&t()<.18&&Wp(i,s,v,r,t)}function w2(i,e,t,n){let{w:s,d:r,floors:o,litP:a}=n,c=i.atlas,u=i.color,h=3.6,m=2.9,g=h+(o-1)*m,v=-s/2,_=Math.max(2,Math.round(s/3)),S=s/_,l=de("#5c4030"),f=de("#3a2a20"),d=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),x=[],p=0;for(let D=0;D<_;D++){let z=Ip(t,"shop_"+d[D%d.length]);x.push(z),!p&&z.startsWith("shop_glass")&&z.length>10&&(p=+z.slice(10))}for(let D=0;D<_;D++){let z=d[D%d.length];Kt(c,v+D*S,v+(D+1)*S,0,h,0,p&&z==="glass"?"shop_glass"+p:x[D]),Vp.has(z)&&ws(i,e,v+(D+.5)*S,1.9,-.8,.7)}let M=[0,h];for(let D=1;D<o;D++)M.push(h+D*m);for(let D=1;D<o;D++)for(let z=0;z<_;z++)Kt(c,v+z*S,v+(z+1)*S,M[D],M[D+1],0,ns("win4",t(),a),un);{let D=Math.max(1,Math.round(r/3)),z=r/D;for(let W of[-1,1])for(let O=0;O<M.length-1;O++)for(let H=0;H<D;H++)(W>0?Pi:Ii)(c,W*s/2,H*z,(H+1)*z,M[O],M[O+1],O>0&&t()<.45?ns("win4",t(),a):"woodwall",un)}u.quad([-s/2,0,r],[s/2,0,r],[s/2,g,r],[-s/2,g,r],de("#6a5240"));for(let D of[v,-v])u.box(D-.09,0,-.12,D+.09,g,.02,f);let{RC:T,k:E}=Xp(i,n,s,r,g,t,!0),y=h+.34,b=1.05,w=.42,R=Math.max(2,Math.round((s+.3)/3));for(let D=0;D<R;D++){let z=v-.15+(s+.3)*D/R,W=v-.15+(s+.3)*(D+1)/R;c.quad([W,y-w,-b],[z,y-w,-b],[z,y,0],[W,y,0],T,E)}u.quad([v-.15,y-w-.03,-b],[-v+.15,y-w-.03,-b],[-v+.15,y-.1,0],[v-.15,y-.1,0],l);let P=s*.9,I=y-w+.02,C=I-.62;u.box(-P/2,C,-b-.02,P/2,I,-b+.07,f),Kt(c,-P/2,P/2,C,I,-b-.025,Gp[p]||"hs"+Math.floor(t()*14));for(let D of[-P/2+.25,P/2-.25])u.box(D-.03,I,-b+.02,D+.03,y-w*.1,-b+.06,f);i.sodium.setM(e);for(let D=0;D<_;D++){let z=v+(D+.5)*S;u.box(z-.008,C-.02,-.62,z+.008,y-w*.6,-.6,f),i.sodium.box(z-.06,C-.16,-.67,z+.06,C-.04,-.55,null)}let L=!1;if(t()<.5){L=!0;let D=t.pick(Cp),z=C-.12;u.quad([s/2-.2,z-.32,-.95],[-s/2+.2,z-.32,-.95],[-s/2+.2,z,-.02],[s/2-.2,z,-.02],D),u.quad([s/2-.2,z-.55,-.95],[-s/2+.2,z-.55,-.95],[-s/2+.2,z-.32,-.95],[s/2-.2,z-.32,-.95],En(D,.85))}if(o>=2){let D=M[1]+.42,z=-.5,W=v+.12,O=-v-.12;u.box(W,D-.07,z-.04,O,D,0,l);for(let H=0;H<_;H++)Kt(c,v+.12+(s-.24)*H/_,v+.12+(s-.24)*(H+1)/_,D,D+.95,z,"wrail");Ii(c,W,z,0,D,D+.95,"wrail"),Pi(c,O,z,0,D,D+.95,"wrail"),i.leaf.setM(e);for(let H=0;H<_;H++)if(t()<.7){let V=v+(H+.5)*S,ie=Math.min(S*.7,1.6);u.box(V-ie/2,D+.72,z-.2,V+ie/2,D+.92,z-.02,de("#7a5236"));for(let he=V-ie/2+.2;he<V+ie/2-.1;he+=.32)Li(i,[he,D+.95,z-.11],he,D+1.05,z-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[D+.9,D+1.3])}}if(o>=2&&t()<.9){let D=t()<.5?1:-1;fu(i,D*(s/2-.35),h+.6,Math.min(g-.2,h+2.7),t),s>7&&t()<.35&&fu(i,-D*(s/2-.35),h+.8,Math.min(g-.2,h+2.5),t)}{let D=d.includes("noren")||d.includes("cafe"),z=L?0:D?2:t()<.3?1:0;i.sodium.setM(e);for(let W=0;W<z;W++){let O=z===2?(W?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),H=C-.5;u.box(O-.006,H+.42,-b+.12,O+.006,C,-b+.14,f),i.sodium.cyl(O,H,-b+.13,.11,.16,.18,10,null,!1),i.sodium.cyl(O,H+.18,-b+.13,.16,.11,.18,10,null,!1),u.cyl(O,H-.035,-b+.13,.1,.1,.04,8,f),u.cyl(O,H+.355,-b+.13,.1,.1,.04,8,f)}}for(let D=v+.45+t()*.4;D<-v-.3;D+=.7+t()*1.3)t()<.7&&Af(i,e,t,D,-.4);i.color.setM(e),i.atlas.setM(e)}function Wp(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,a=n*.3;for(let c of[-r*.35,r*.35])i.color.box(c-.06,t,a,c+.06,t+1.2+o,a+.12,be.metal);i.color.box(-r/2,t+1.2,a+.12,r/2,t+1.2+o,a+.3,be.metal),Kt(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,a+.115,"bb"+Math.floor(s()*4))}function A2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,m=3.2,g=2.95,v=m+(o-1)*g,_=Math.max(2,Math.round(s/3.2)),S=s/_,l=-s/2,f=[0,m];for(let p=1;p<o;p++)f.push(m+p*g);for(let p=0;p<_;p++)Kt(u,l+p*S,l+(p+1)*S,0,m,0,p===Math.floor(_/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),p===Math.floor(_/2)?un:a);let d="bal"+Math.floor(t()*3),x=En(a,.97);for(let p=1;p<o;p++){let M=f[p];for(let T=0;T<_;T++)Kt(u,l+T*S,l+(T+1)*S,M,f[p+1],0,ns("win2",t(),c),a);h.box(l,M-.15,-1.3,-l,M,0,x),h.box(l,M,-1.3,-l,M+1.1,-1.18,x,null,{noBottom:!0});for(let T=0;T<_;T++)Kt(u,l+T*S,l+(T+1)*S,M,M+1.1,-1.305,d,a);for(let T=0;T<=_;T++)h.box(l+T*S-.05,M,-1.18,l+T*S+.05,M+2.4,0,En(a,.92));for(let T=0;T<_;T++){let E=t(),y=l+T*S+.2,b=l+(T+1)*S-.2;E<.34?$p(h,y,b,M+2.02,-.98,t):E<.46&&U2(h,y+.25,Math.min(b-.25,y+1.9),M+1.1,-1.3,t)}i.atlas.setM(e);for(let T=0;T<_;T++)t()<.55&&(yf(i,e,l+(T+.78)*S,M,-.55),i.atlas.setM(e),i.color.setM(e))}h.box(l,v-.15,-1.3,-l,v,0,x),La(u,s,r,f,a,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],En(a,.8)),Da(h,s,r,v,t,!0)}function R2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,m=4,g=3.4,v=m+(o-1)*g,_=Math.max(2,Math.round(s/3)),S=s/_,l=-s/2,f=[0,m];for(let d=1;d<o;d++)f.push(m+d*g);for(let d=0;d<_;d++)Kt(u,l+d*S,l+(d+1)*S,0,m,0,d===1?"shop_door":"shop_glass");for(let d=1;d<o;d++)for(let x=0;x<_;x++)Kt(u,l+x*S,l+(x+1)*S,f[d],f[d+1],0,ns("win3",t(),c),a);La(u,s,r,f,a,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],En(a,.8)),Da(h,s,r,v,t,!0),t()<.6&&fu(i,(t()<.5?1:-1)*(s/2-.3),m+.4,Math.min(v-.3,m+4.5),t),t()<.3&&Wp(i,s,v,r,t)}function C2(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,a=i.color,c=4.4,u=-s/2,h=Math.max(3,Math.round(s/3)),m=s/h;for(let g=0;g<h;g++)Kt(o,u+g*m,u+(g+1)*m,0,3.4,0,"shop_konbini"),ws(i,e,u+(g+.5)*m,1.9,-.8,.8);a.box(u,3.4,-.35,-u,c,0,be.white),Kt(o,u,-u,3.4,c,-.355,"konbini_band"),La(o,s,r,[0,c],de("#f2f2ee"),t,0),Da(a,s,r,c,t)}var Rp=(i,e)=>e?de("#7a5a42"):i.tint,_f=null,P2=()=>{if(!_f){let i=Ci("kawara"),e=16/272*(i.u1-i.u0);_f={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return _f};function Xp(i,e,t,n,s,r,o){let a=i.atlas,c=i.color,u=!!e.snow,h=u?.75:.6,m=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),g=u?Ci("white"):P2(),v=u?de("#f3f5fa"):de("#c8ccd8"),_=u?de("#e4e8f0"):de("#3d4456"),S=u?1:Math.max(2,Math.round((t+2*h)/3)),l=x=>-t/2-h+(t+2*h)*x/S;for(let x=0;x<S;x++){let p=l(x),M=l(x+1);a.quad([M,s-.25,-h],[p,s-.25,-h],[p,s+m,n/2],[M,s+m,n/2],v,g),a.quad([p,s-.25,n+h],[M,s-.25,n+h],[M,s+m,n/2],[p,s+m,n/2],v,g)}let f=(x,p,M,T,E,y)=>{y<0?(c.quad([p,M,E],[x,M,E],[x,T,E],[p,T,E],_),c.quad([x,M,E],[p,M,E],[p,M,E+.08],[x,M,E+.08],_)):(c.quad([x,M,E],[p,M,E],[p,T,E],[x,T,E],_),c.quad([p,M,E],[x,M,E],[x,M,E-.08],[p,M,E-.08],_))};for(let[x,p]of[[-h,0],[n+h,n]])f(-t/2-h,t/2+h,s-.42,s-.22,x<0?x-.04:x+.04,x<0?-1:1),c.quad(x<0?[-t/2-h,s-.26,x]:[t/2+h,s-.26,x],x<0?[t/2+h,s-.26,x]:[-t/2-h,s-.26,x],x<0?[t/2+h,s-.26,p]:[-t/2-h,s-.26,p],x<0?[-t/2-h,s-.26,p]:[t/2+h,s-.26,p],En(Rp(e,o),.62));for(let x of[-1,1]){let p=x*(t/2+h+.02),M=.2,T=[p,s-.25,-h],E=[p,s+m,n/2],y=[p,s-.25,n+h],b=w=>[w[0],w[1]-M,w[2]];x>0?(c.quad(b(E),b(T),T,E,_),c.quad(b(y),b(E),E,y,_)):(c.quad(b(T),b(E),E,T,_),c.quad(b(E),b(y),y,E,_))}let d=Rp(e,o);if(ro(c,[-t/2,s,0],[-t/2,s,n],[-t/2,s+m-.1,n/2],d),ro(c,[t/2,s,n],[t/2,s,0],[t/2,s+m-.1,n/2],d),c.box(-t/2-h,s+m-.05,n/2-.15,t/2+h,s+m+.18,n/2+.15,u?de("#f6f7fb"):de("#3d4456")),u){c.box(-t/2-h-.05,s-.42,-h-.1,t/2+h+.05,s-.12,-h+.3,de("#eef1f7")),c.box(-t/2-h-.05,s-.42,n+h-.3,t/2+h+.05,s-.12,n+h+.1,de("#eef1f7"));for(let x=-t/2;x<t/2;x+=.45+r()*.5)c.cyl(x,s-.42-.35,-h+.02,0,.04,.35,4,de("#dfe8f3"),!1)}return{RC:v,k:g,fascia:f,nS:S}}function I2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,m=2.9,g=o*m,v=-s/2,_=t()<.5,S=Math.max(2,Math.round(s/3)),l=s/S,f=[];for(let E=0;E<=o;E++)f.push(E*m);let d=_?un:a;for(let E=0;E<o;E++)for(let y=0;y<S;y++){let b=_?"win4":"win0";E===0&&y===0?b="shop_house":b=ns(b,t(),c),Kt(u,v+y*l,v+(y+1)*l,f[E],f[E+1],0,b,b==="shop_house"?un:d)}La(u,s,r,f,_?de("#9a7a62"):a,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,g,r],[-s/2,g,r],En(a,.75));let{RC:x,k:p,fascia:M,nS:T}=Xp(i,n,s,r,g,t,_);if(o>1){let E=m+.05;for(let y=0;y<T;y++){let b=-s/2-.1+(s+.2)*y/T,w=-s/2-.1+(s+.2)*(y+1)/T;u.quad([w,E-.3,-.75],[b,E-.3,-.75],[b,E+.05,0],[w,E+.05,0],x,p)}M(-s/2-.1,s/2+.1,E-.42,E-.28,-.79,-1)}if(n.fence){let E=-n.fence,y=1.2;for(let[b,w]of[[-s/2,-1],[.4,s/2]])h.box(b,0,E-.08,w,y,E+.08,be.concrete),Kt(u,b,w,0,y,E-.085,"block")}}function L2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,m=3.4,g=o*m,v=Math.max(2,Math.round(s/6)),_=s/v,S=-s/2,l=t()<.5?"win3":"win2",f=[];for(let p=0;p<=o;p++)f.push(p*m);for(let p=0;p<o;p++)for(let M=0;M<v;M++)Kt(u,S+M*_,S+(M+1)*_,f[p],f[p+1],0,ns(l,t(),c),a);let d=Math.max(1,Math.round(r/6)),x=r/d;for(let p of[-1,1])for(let M=0;M<o;M++)for(let T=0;T<d;T++)(p>0?Pi:Ii)(u,p*s/2,T*x,(T+1)*x,f[M],f[M+1],ns(l,t(),c),a);Da(h,s,r,g,t,!0)}function qp(i,e,t){let n=i.color;n.setM(e);let s=t.pick([de("#f2f2ee"),de("#c9cdd2"),de("#2b2f38"),de("#b33a32"),de("#9fc6c0"),de("#e7d9b4"),de("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,En(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,de("#2a3346"));for(let[r,o]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,o-.11,r+.3,.6,o+.11,be.black)}function Lf(i,e,t,n){let s=i.color,r=de("#8d9096"),o=de("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let a=-n-.62,c=-n+.62;s.box(-.14,5.08,a,.14,5.56,c,o);let u=t*.141;i.atlas.setM(e),(t>0?Pi:Ii)(i.atlas,u,a,c,5.08,5.56,"signal");let h=t>0?c:a,m=t>0?-1:1;for(let v=0;v<3;v++){let _=h+m*(.2+v*.4);s.box(t>0?.14:-.36,5.47,_-.15,t>0?.36:-.14,5.5,_+.15,o)}let g=h+m*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,g-.11,t>0?.16:-.145,5.43,g+.11,un)}function Yp(i,e,t,n){let s=i.color,r=de("#3d6ea8"),o=de("#e8eef2"),a=de("#c7c5bf"),c=5.35;s.setM(e),s.box(-1.1,c-.65,-t,1.1,c,t,r);for(let u of[-1.1,1])s.box(u,c,-t,u+.1,c+1.1,t,o),s.box(u-.02,c+1.1,-t,u+.12,c+1.18,t,r);i.atlas.setM(e),Ii(i.atlas,-1.105,-2.2,2.2,c-.62,c-.06,n),Pi(i.atlas,1.105,-2.2,2.2,c-.62,c-.06,n),s.setM(e);for(let u of[-1,1]){let h=u*(t-1.65),m=u*(t-.15),g=Math.min(h,m),v=Math.max(h,m);s.box(-.45,.15,g+.3,.45,c-.65,v-.3,r);let _=20,S=(c-.15)/_;for(let l=0;l<_;l++)s.box(1.1+l*.3,.15,g,1.1+(l+1)*.3,c-(l+1)*S+.04,v,a);s.box(1.1,c-.1,g-.05,1.1+_*.3,c-.02,g+.05,r)}}function Zp(i,e,t,n,s,r,o){let a=i.color,c=1.22,u=3.55,h=6.7,m=de("#c8c5bd"),g=de("#ebe8de"),v=de("#7a5a42"),_=de("#5e4433"),S=de("#4d5468");a.setM(e),a.box(t,-1.4,u,n,c,h,m,null,{noBottom:!0}),a.box(t,c,u,n,c+.025,u+.32,g),a.box(t,c,u+.6,n,c+.04,u+.9,be.yellow);let l=Math.sign(s-(t+n)/2),f=l>0?n:t,d=f+l*6.2,x=u+.9,p=h-.2,M=(O,H,V)=>[O,H,V];l>0?a.quad(M(d,.1,p),M(d,.1,x),M(f,c,x),M(f,c,p),m):a.quad(M(d,.1,x),M(d,.1,p),M(f,c,p),M(f,c,x),m);for(let O of[x,p]){let H=de("#9aa0a6");a.rod([d,.1+.9,O],[f,c+.9,O],.03,.03,5,H);for(let V=0;V<=3;V++){let ie=d+(f-d)*V/3,he=.1+(c-.1)*V/3;a.box(ie-.03,he,O-.03,ie+.03,he+.9,O+.03,H)}}i.atlas.setM(e);for(let O=t;O<n-.01;O+=3){let H=Math.min(n,O+3);i.atlas.quad([O,-.6,h+.004],[H,-.6,h+.004],[H,c,h+.004],[O,c,h+.004],de("#d8d4ca"),Ci("concrete"))}a.setM(e);for(let O=t+.4;O<n;O+=2)a.box(O-.05,c,h-.12,O+.05,c+1,h-.02,de("#8f949a"));for(let O of[.45,.95])a.box(t,c+O,h-.1,n,c+O+.06,h-.04,de("#8f949a"));let T=n-t,E=O=>l>0?n-T*O:t+T*O,y=E(.47),b=y-2.3,w=y+2.3,R=u+1.35,P=h-.25;a.box(b,c,P-.12,w,c+2.45,P,v);for(let O of[b,w-.12])a.box(O,c,R+.6,O+.12,c+2.45,P,_);for(let O of[b,w-.12])a.box(O,c,R,O+.12,c+2.45,R+.12,_);a.quad([w+.4,c+2.5,R-.45],[b-.4,c+2.5,R-.45],[b-.4,c+2.85,P+.35],[w+.4,c+2.85,P+.35],S),a.quad([b-.4,c+2.42,R-.45],[w+.4,c+2.42,R-.45],[w+.4,c+2.77,P+.35],[b-.4,c+2.77,P+.35],de("#3a3f50")),a.box(b+.3,c+.42,P-.55,w-.3,c+.48,P-.15,de("#8a6a4a"));for(let O of[b+.4,w-.5])a.box(O,c,P-.5,O+.08,c+.42,P-.2,be.metal);i.atlas.setM(e),i.atlas.quad([y-1.1,c+1.55,P+.005],[y+1.1,c+1.55,P+.005],[y+1.1,c+2.03,P+.005],[y-1.1,c+2.03,P+.005],un,Ci("ekiplate"+r));let I=E(.2),C=u+1.6,L=1.25,D=c+1.25,z=D+.95;a.setM(e);for(let O of[I-L+.12,I+L-.12])a.cyl(O,c,C,.05,.05,z-c+.05,8,de("#6b7078"));a.box(I-L,D-.03,C-.03,I+L,z+.03,C+.03,de("#3a3d42")),i.atlas.setM(e),i.atlas.quad([I-L,D,C+.035],[I+L,D,C+.035],[I+L,z,C+.035],[I-L,z,C+.035],un,Ci("ekimei"+r)),i.atlas.quad([I+L,D,C-.035],[I-L,D,C-.035],[I-L,z,C-.035],[I+L,z,C-.035],un,Ci("ekimei"+r)),a.setM(e);let W=y-l*4.2;a.box(W-.9,c+.42,h-1.25,W+.9,c+.47,h-.85,de("#3b6ea8")),a.box(W-.9,c+.47,h-.88,W+.9,c+.9,h-.83,de("#3b6ea8"));for(let O of[W-.75,W+.7])a.box(O,c,h-1.2,O+.06,c+.42,h-.9,be.metal);for(let O=t+3;O<n-1;O+=9)Ia(i,du(e,O,c,h-.45))}var D2=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(de),N2=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(de);function $p(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,be.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let a=.28+r()*.34,c=.36+r()*.42,u=r.pick(D2),h=s+(r()-.5)*.06;i.quad([o+a,n-c,h],[o,n-c,h],[o,n-.02,h],[o+a,n-.02,h],u),i.quad([o,n-c,h+.01],[o+a,n-c,h+.01],[o+a,n-.02,h+.01],[o,n-.02,h+.01],En(u,.85)),r()<.4&&i.box(o+a*.45,n-.02,h-.02,o+a*.55,n+.06,h+.02,de("#d8d8d0")),o+=a+.06+r()*.22}}function U2(i,e,t,n,s,r){let o=r.pick(N2),a=.11;i.box(e,n-.02,s-a,t,n+.09,s+.22,o),i.box(e,n-.72,s-a,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-a-.004,t-.08,n-.42,s-a+.01,En(o,.86))}function Jp(i,e){let t=i.color,n=de("#a19f97"),s=de("#6b4a35"),r=de("#4f4a44"),o=de("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,de("#8d8b84"));for(let a of[-.52,.48])for(let c of[-.36,.32])t.box(a,.32,c,a+.05,1.5,c+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,En(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let a of[-.32,.3])t.cyl(a,.32,-.18,.05,.06,.07,8,de("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,de("#5b8d3d"))}function Kp(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?be.black:be.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,be.black),t.box(-.5,2.55,-.06,.5,2.95,.02,be.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,be.black);t.box(-.78,-.9,-.34,.3,0,.34,be.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,de("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,be.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new it().multiplyMatrices(e,new it().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?be.black:be.yellow)}t.setM(e),i.atlas.setM(e),Kt(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function jp(i,e){let t=i.color;t.setM(e),t.box(-.4,0,-.4,.4,.25,.4,be.stone),t.cyl(0,.25,0,.14,.12,.95,8,be.stone),t.box(-.32,1.2,-.32,.32,1.3,.32,be.stone),t.box(-.26,1.3,-.26,.26,1.72,.26,En(be.stone,1.05)),t.cyl(0,1.72,0,.55,.08,.38,6,En(be.stone,.92)),i.lamp.setM(e),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,un),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,un)}function Df(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,be.vermilion),s.cyl(0,0,r,.38,.38,.5,12,be.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,be.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,be.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,be.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,be.vermilion)}function Qp(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,de("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,de("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,de("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,de("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,be.metal),n.box(1.1,0,.3,1.2,.42,.55,be.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,be.metal),i.atlas.setM(e),Ii(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Pi(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function em(i,e,t,n=1){let s=i.color;s.setM(e);let r=En(be.concrete,.85+t()*.15),o=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],a=.55*n;for(let c of o)s.rod([0,a,0],[c[0]*.95*n,a+c[1]*.95*n,c[2]*.95*n],.42*n,.26*n,7,r)}function tm(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,de("#8f8a80"),de("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,be.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,be.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,be.black),t.cyl(0,18.6,0,1,.25,1.2,12,be.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,un)}function nm(i,e,t){let n=i.color;n.setM(e);let s=t.pick([de("#f4f4f0"),de("#3b6ea5"),de("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),ro(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),ro(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,be.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,be.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,de("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,be.metal)}function im(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,be.stone),n.box(-.55,.5,.9,.55,1.5,1.8,de("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],de("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],de("#4d5468")),Df(i,du(e,0,0,-.3,Math.PI/2),.75,2.2)}var Zt=60,Nf=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],sm=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],rm=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Uf=32,Na=[.025,.026,.032],om=[.05,.05,.065],rs=(i,e)=>(i%e+e)%e,Rs=(i,e)=>{let t=eo(i);return!!t&&Math.abs(i-t.s)<e},Ff=(i,e)=>Math.abs(i-Math.round(i/150)*150)<e,Di=(i,e)=>{let t=mi(i);return!!t&&Math.abs(i-t.s)<e},oi=(i,e)=>{let t=Wi(i);return!!t&&Math.abs(i-t.s)<e},Bf=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=n(r,o);this.P.push(a[0],a[1],a[2]),this.N.push(a[3],a[4],a[5]),this.SU.push(a[6],a[7]),this.ZW.push(a[8],a[9],a[10],a[11]),this.RK.push(a[12],a[13]),this.RV.push(a[14]||0),this.ZS.push(a[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let a=s+r*t+o,c=a+1,u=a+t,h=u+1;this.I.push(a,c,u,c,h,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,a=new Array(e*o);for(let u=0;u<e;u++)for(let h=0;h<o;h++)a[u*o+h]=n(u,h-s);let c=(u,h)=>a[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,h))];for(let u=0;u<e;u++)for(let h=s;h<s+t;h++){let m=c(u,h-1),g=c(u,h+1),v=c(u-1,h),_=c(u+1,h),S=a[u*o+h],l=g[0]-m[0],f=g[1]-m[1],d=g[2]-m[2],x=_[0]-v[0],p=_[1]-v[1],M=_[2]-v[2],T=f*M-d*p,E=d*x-l*M,y=l*p-f*x;E<0&&(T=-T,E=-E,y=-y);let b=Math.hypot(T,E,y)||1;S[3]=T/b,S[4]=E/b,S[5]=y/b}this.grid(e,t,(u,h)=>a[u*o+h+s])}build(){let e=new yt;return e.setAttribute("position",new $e(this.P,3)),e.setAttribute("normal",new $e(this.N,3)),e.setAttribute("su",new $e(this.SU,2)),e.setAttribute("zw",new $e(this.ZW,4)),e.setAttribute("rk",new $e(this.RK,2)),e.setAttribute("rv",new $e(this.RV,1)),e.setAttribute("zs",new $e(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},pu=class{constructor(e,t,n,s,r){this.path=t,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new Jt,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Zt),s=Math.floor((e+this.ahead)/Zt);for(let[o,a]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(a),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let a=o.pending.shift();a&&o.group.add(a),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let a=-1;for(let c=Math.max(0,n);c<=s;c++)if(!this.chunks.has(c)){a=c;break}if(a<0)return 0;a*Zt-e<320&&(t=Math.max(t,12)),this.job={c:a,it:this.gen(a)}}let o=this.job.it.next();if(o.done){let a=o.value;a.pending=a.group.children.slice(),a.group.clear(),this.chunks.set(this.job.c,a),this.group.add(a.group),this.reveal.push(a),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let a=o*Zt-e,c=r.group.children;for(let u=0;u<c.length;u++){let h=c[u],m=h.userData.detail;m&&(h.visible=m==="leaf"?a<s:a<t||n&&m==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Zt,s=n+Zt,r=t.at(n),o=r.x,a=r.z,c=ln(Math.floor(ri(e,777)*4294967295)),u={atlas:new xn({uv:!0,ao:!0,lit:!0}),color:new xn({ao:!0}),foliage:new xn,leaf:new xn({uv:!0}),lamp:new xn({color:!1}),sig:new xn({color:!1}),sodium:new xn({color:!1}),decal:new xn({uv:!0}),pool:new xn({uv:!0,color:!1})},h=new Bf,m=[],g=[];u.lamps=[];let v={},_={},S=(w,R)=>{t.at(w,_);let P=In(w,"rw");return _.y+no(w,R,_.y,P)},l=w=>{let R=Nt(w);return[R.city,R.sakura,R.coast,R.country,R.snow]},f=(w,R,P)=>(t.at(w,v),[v.x+v.rx*R-o,P,v.z+v.rz*R-a]),d=(w,R,P,I=0,C=!0)=>{t.at(w,v);let L=v.h-Math.PI/2+(C&&R<0?Math.PI:0)+I,D=new it().makeRotationY(L);return D.setPosition(v.x+v.rx*R-o,P,v.z+v.rz*R-a),D.groundY=P,D},x=(w,R,P=0,I=0,C=!0)=>{let L=S(w,R),D=d(w,R,L+P,I,C);return D.groundY=L,D},p=w=>t.at(w,_).y,M=w=>In(w,"rw"),T=w=>{let R=Nt(w);return R.city+R.sakura>.5?R.city>=R.sakura?3:2.6:0};{let w=Wi(n+Zt/2),R=!!w&&w.s>n-40&&w.s<s+40,P=R?61:21,I=M(n+Zt/2),C=(()=>{let ie=[0,...sm].map(he=>he);return rm.forEach(he=>ie.push(he-I)),ie})(),L=[...C.slice().reverse().map(V=>-V),...C],D=L.length,z=Array.from({length:P},(V,ie)=>n+ie/(P-1)*Zt);{let V=mi(n+Zt/2);if(V)for(let ie of[V.s-sn,V.s+sn])ie>n+.1&&ie<s-.1&&z.push(ie-.03,ie+.03)}z.sort((V,ie)=>V-ie);let W=D/2,O=z.map(V=>(t.at(V,v),{s:V,f:{...v},rw:M(V),w:l(V),rb:R?op(V):0})),H=Math.round(W/2);for(let[V,ie,he,Qe]of[[0,H,0,1],[H-1,W,1,0],[W,W+H+1,0,1],[W+H,D,1,0]])h.gridN(O.length,ie-V,(Re,He)=>{let J=O[Re],Z=J.f,Me=V+He,Le=L[Me],we=Le<0||Le===0&&Me<W?Le-J.rw:Le+J.rw,Ge=Z.y+no(J.s,we,Z.y,J.rw),Je=Math.abs(we)>J.rw+.98?Math.min(1,Qc/.5):0;return[Z.x+Z.rx*we-o,Ge,Z.z+Z.rz*we-a,0,1,0,rs(J.s,Es),we,J.w[0],J.w[1],J.w[2],J.w[3],J.rw,0,J.rb>0?J.rb:-Je,J.w[4]]},he,Qe),yield}yield,h.grid(31,2,(R,P)=>{let I=n+R/30*Zt,C=M(I),L=P?C:-C;t.at(I,v);let D=v.y,z=(p(I+1)-p(I-1))/2,W=-z*v.fx,O=1,H=-z*v.fz,V=Math.hypot(W,O,H),ie=l(I);return[v.x+v.rx*L-o,D,v.z+v.rz*L-a,W/V,O/V,H/V,rs(I,Es),L,ie[0],ie[1],ie[2],ie[3],C,1,0,ie[4]]});{let w=[];for(let I=0;I<=30;I++){let C=n+I/30*Zt;w.push({s:C,sw:T(C)})}let R=[],P=null;for(let I of w)I.sw>0?(P||(P=[],R.push(P)),P.push(I)):P=null;for(let I of R)if(!(I.length<2))for(let C of[-1,1])h.grid(I.length,2,(L,D)=>{let{s:z,sw:W}=I[L],O=M(z),H=C*(D===(C>0?0:1)?O:O+W);t.at(z,v);let V=l(z);return[v.x+v.rx*H-o,v.y+.15,v.z+v.rz*H-a,0,1,0,rs(z,Es),H,V[0],V[1],V[2],V[3],O,2,0,V[4]]}),h.grid(I.length,2,(L,D)=>{let{s:z}=I[L],W=M(z),O=C*W,H=C>0?D:1-D;t.at(z,v);let V=l(z);return[v.x+v.rx*O-o,v.y+(H?.15:0),v.z+v.rz*O-a,-C*v.rx,0,-C*v.rz,rs(z,Es),O,V[0],V[1],V[2],V[3],W,3,0,V[4]]})}yield,yield*this.placePoles(e,n,s,c,u,d,S,f,p,M);{let w=Math.ceil((n-js)/Ks),R=Qr(w);R<s&&Aa(R)&&(yield*this.placeCrossing(u,h,R,d,p,M,S,T,o,a));let P=Math.ceil((n-to)/Qs),I=ff(P);I<s&&df(I)&&(yield*this.placeRiver(u,h,I,d,p,M,S,T,o,a,c,g));let C=mi(n+Zt/2);C&&C.s+tn>n&&C.s-tn<s&&(yield*this.placeTunnel(u,h,C,n,s,d,x,S,M,o,a,c))}yield;for(let w=n;w<s;w+=4){let R=en(w);(R==="coast"&&Nt(w).coast>.45||R==="mountain"&&Nt(w).mountain>.45)&&!Di(w+2,tn+4)&&this.guardrail(u,w,Math.min(w+4,s),f,p,M)}yield*this.placeCity(u,c,n,s,d,x,p,M,T,S,h,o,a),yield*this.placeSakura(u,c,n,s,d,x,p,M,S),this.placeCoast(u,c,n,s,d,x,p,M,S,m,f),yield,yield*this.placeCountry(u,c,n,s,d,x,p,M,S),yield*this.placeMountain(u,c,n,s,d,x,p,M,S),yield*this.placeSnow(u,c,n,s,d,x,p,M,S),yield*this.placeVerge(u,c,n,s,d,S,M),yield;let E=new Jt,y=(w,R,P,I,C=0,L)=>{if(!w)return null;let D=new gt(w,R);return D.castShadow=P,D.receiveShadow=I,D.renderOrder=C,L&&(D.userData.detail=L),E.add(D),D},b=new Set;for(let w of[n,n+20,n+40,s]){let R=jr(w);b.add(R.a),R.t>0&&b.add(R.b)}y(h.build(),Pa([...b]),!1,!0),yield,y(u.atlas.build(),this.M.atlas,!0,!0),yield;{let w=y(u.color.build(),this.M.color,!0,!0);w&&(w.customDepthMaterial=ru)}if(yield,y(u.foliage.build(),this.M.foliage,!0,!0),y(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),yield,y(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),y(u.sig.build(),this.M.sig,!1,!1,0,"small"),y(u.sodium.build(),this.M.sodium,!1,!1),y(u.decal.build(),this.M.decal,!1,!0,1,"small"),y(u.pool.build(),this.M.pool,!1,!1,2,"light"),m.length){let w=new yt,R=[],P=[],I=[];m.forEach((C,L)=>{for(let D of C)R.push(D[0],D[1],D[2]),P.push(D[3],D[4]);if(L>0){let D=(L-1)*2;I.push(D,D+2,D+1,D+1,D+2,D+3)}}),w.setAttribute("position",new $e(R,3)),w.setAttribute("su",new $e(P,2)),w.setIndex(I),w.computeBoundingSphere(),y(w,this.foamMat,!1,!1,1)}for(let w of g)y(w,this.riverMat,!1,!0);return E.position.set(o-this.origin.x,0,a-this.origin.z),{group:E,ox:o,oz:a,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*Uf+6,n=en(t);if(n==="sakura"||Rs(t,6)||oi(t,34)||Di(t,tn+12))return null;let s=In(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,a,c,u,h){let m=Math.ceil((t-6)/Uf),g=Math.floor((n-6-.001)/Uf);for(let v=m;v<=g;v++){let _=this.poleSpec(v);if(!_)continue;let S=_.z==="city"?u(_.s)+.15:a(_.s,_.u),l=o(_.s,_.u,S),f=ln(Math.floor(ri(v,31)*4294967295)),d=Tf(r,l,f,{trans:f()<.45});_.z==="city"&&v%2===0&&Dp(r,l,-.11),v%2&&(yield);let x=this.poleSpec(v+1);if(x){let p=x.z==="city"?u(x.s)+.15:a(x.s,x.u),M=Lp(o(x.s,x.u,p));r.color.setM(new it);let T=[];for(let E=0;E<d.length;E++){let y=d[E],b=M[E],w=.35+f()*.4+(E>=7?.3:0);T.push(w),r.color.wire([y.x,y.y,y.z],[b.x,b.y,b.z],w,E>=7?.022:.015,Na,10)}if(_.z!=="coast"&&f()<.38){let E=Math.floor(f()*4),y=d[E],b=M[E],w=1+Math.floor(f()*4),R=.18+f()*.5;for(let P=0;P<w;P++){let I=Math.min(.92,R+P*(.018+f()*.025)),C=y.x+(b.x-y.x)*I,L=y.z+(b.z-y.z)*I,D=y.y+(b.y-y.y)*I-T[E]*4*I*(1-I);r.color.box(C-.07,D+.015,L-.07,C+.07,D+.19,L+.07,om),r.color.box(C-.045,D+.19,L-.045,C+.045,D+.27,L+.045,om)}}}if(_.z==="city"){r.color.setM(new it);let p=1+Math.floor(f()*3);for(let M=0;M<p;M++){let T=d[7+M%2],E=(f()-.5)*14,y=h(_.s+E),b=f()<.55,w=b?-(y+3.15):y+3.15,R=c(_.s+E,w,u(_.s+E)+5.2+f()*2.5);r.color.wire([T.x,T.y,T.z],R,.25+f()*.4,.012,Na,8)}}}}*intersection(e,t,n,s,r,o,a,c,u,h,m){let g=this.path.at(n,{}),v=o(n),_=a(n),S=c(n)||3,l=n-.5,f=Nt(n),d=[f.city,f.sakura,f.coast,f.country],x=(M,T,E)=>[g.x+g.fx*(M-.5)+g.rx*T-h,E,g.z+g.fz*(M-.5)+g.rz*T-m],p=_+S+.15;for(let M of[-1,1]){let T=M*(_+S),E=M*80;u.grid(21,2,(R,P)=>{let I=T+(E-T)*R/20,C=(P?-3:3)*M,L=x(C,I,v+.165);return[L[0],L[1],L[2],0,1,0,C*M,I,d[0],d[1],d[2],d[3],_,10]});{let R=M*(_+S+3.2),P=-M*1.35,I=1.15,C=.42,L=(D,z)=>x(P+M*D,R-M*z,v+.18);e.decal.setM(new it),e.decal.quad(L(-I,-C),L(I,-C),L(I,C),L(-I,C),[1,1,1],oo("tomare"))}for(let R of[-1,1]){let P=p+15+t()*3;for(;P<52;){let I=t.range(5.5,8.5),C=M*(P+I/2),L=t(),D=r(l+R*3.3,C,v+.14,R>0?Math.PI/2:-Math.PI/2,!1);ss(e,D,t,{type:L<.5?"house":"shop",w:I,d:t.range(7,10),floors:L<.5?2:t.int(2,3),tint:t.pick(is),litP:.45,fence:0}),P+=I+t.range(.2,1.2),yield}yield}let y=[30,54].map(R=>r(l+2.8,M*R,v+.15,-Math.PI/2,!1)),b=ln(Math.floor(ri(s,M>0?71:73)*4294967295)),w=y.map(R=>Tf(e,R,b,{trans:b()<.4}));e.color.setM(new it);for(let R=0;R<7;R++){let P=w[0][R],I=w[1][R];e.color.wire([P.x,P.y,P.z],[I.x,I.y,I.z],.3+b()*.4,.014,Na,10)}}Lf(e,r(n-9,-(_+.55),v+.15,0,!0),1,_+.55-1.6),Lf(e,r(n+8,_+.55,v+.15,0,!0),1,_+.55-1.6),s%3===1&&Yp(e,r(n+15,0,v,0,!1),_+S+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(e,t,n,s,r,o,a,c,u,h){let m=this.path.at(n,{}),g=m.y,v=o(n),_=c(n),S=v+_+.2,l=150,f=g+.18,d=Nt(n),x=[d.city,d.sakura,d.coast,d.country],p=(L,D,z)=>[m.x+m.fx*L+m.rx*D-u,z,m.z+m.fz*L+m.rz*D-h],M=[7.6,4.7,-4.7,-7.6];for(let[L,D]of[[-l,-S],[S,l]])t.grid(25,M.length,(W,O)=>{let H=L+(D-L)*W/24,V=M[O],he=Math.abs(V)<5?f:Math.min(f-.05,a(n+V,H)-.03),Qe=p(V,H,he);return[Qe[0],Qe[1],Qe[2],0,1,0,V,H,x[0],x[1],x[2],x[3],v,5]});let T=(L,D,z)=>t.grid(2,2,(W,O)=>{let H=W?D:L,V=O?-3.3:3.3,ie=p(V,H,z);return[ie[0],ie[1],ie[2],0,1,0,V,H,x[0],x[1],x[2],x[3],v,6]});T(-v,v,g+.03),_>0&&(T(-S,-v,g+.165),T(v,S,g+.165));let E=(L,D,z,W)=>t.grid(2,2,(O,H)=>{let V=O?W:z,ie=H?D:L,he=p(ie,V,g+.025);return[he[0],he[1],he[2],0,1,0,ie,V,x[0],x[1],x[2],x[3],v,7]});E(-7.15,-7.6,-v+.3,-.12),E(7.6,7.15,.12,v-.3),yield;let y=s(n,0,g,-Math.PI/2,!1),b=e.color;b.setM(y);let w=[.42,.4,.38],R=[.3,.29,.28],P=[.55,.57,.6];for(let L of[-2,2])for(let D of[-.5335,.5335]){let z=-(L+D);for(let[W,O]of[[-l,-S],[S,l]])b.box(W,.26,z-.035,O,.34,z+.035,w);b.box(-S,0,z-.035,S,.04,z+.035,R)}let I=[-146,-104,-64,-26,26,64,104,146];for(let L of I){for(let D of[-4.95,4.95])b.box(L-.12,.18,D-.12,L+.12,7.4,D+.12,P);b.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,P);for(let D of[-2,2])b.box(L-.04,6.3,-D-.04,L+.04,6.95,-D+.04,P)}for(let L of[-2,2])for(let D=0;D<I.length-1;D++)b.wire([I[D],5.35,-L],[I[D+1],5.35,-L],.05,.011,Na,6),b.wire([I[D],6.4,-L],[I[D+1],6.4,-L],.45,.011,Na,8);yield;let C=Math.round((n-js)/Ks);if(d.country>.9&&ri(C,17)<.7){let L=ri(C,19)<.5?-1:1,D=L>0?v+9:-(v+9+46),z=L>0?v+9+46:-(v+9);Zp(e,y,D,z,L*(v+9),Math.abs(C)%4,ln(Math.floor(ri(C,23)*4294967295))),b.setM(y)}yield;for(let L of ou(this.path,n)){let D=new it().makeRotationY(L.yaw);D.setPosition(L.x-u,L.y,L.z-h),Kp(e,D)}As(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85),As(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,a,c,u,h,m,g){let v=this.path.at(n,{}),_=v.y,S=o(n),l=c(n),f=Nt(n),d=[f.city,f.sakura,f.coast,f.country],x=f.sakura>.5,p=222,M=S+l+.5,T=_-Ra,E=(C,L,D)=>[v.x+v.fx*C+v.rx*L-u,D,v.z+v.fz*C+v.rz*L-h];{let C=[],L=[],D=[];for(let O=0;O<=74;O++){let H=-p+2*p*O/74;for(let V of[14.3,-14.3]){let ie=E(V,H,T);C.push(ie[0],ie[1],ie[2]),L.push(V,H)}if(O>0){let V=(O-1)*2;D.push(V,V+1,V+2,V+1,V+3,V+2)}}let W=new yt;W.setAttribute("position",new $e(C,3)),W.setAttribute("su",new $e(L,2)),W.setIndex(D),W.computeBoundingSphere(),g.push(W)}for(let[C,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[D,z]of[[-p,-(S+3.4)],[S+3.4,p]])t.grid(41,2,(W,O)=>{let H=D+(z-D)*W/40,V=O?L:C,ie=E(V,H,_+.38);return[ie[0],ie[1],ie[2],0,1,0,V,H,d[0],d[1],d[2],d[3],S,9,1]});yield;let y=s(n,0,_,0,!1),b=e.color,w=[.74,.73,.7],R=x?[.78,.2,.15]:[.55,.72,.64];b.setM(y),b.box(-24.5,-1,-M,24.5,-.03,M,w,null,{noBottom:!1});for(let C of[-1,1])b.box(-24.5,-1.3,C>0?M-.35:-M,24.5,-.95,C>0?M:-M+.35,[.62,.61,.58]);for(let C of[-8,8])b.box(C-.7,-Ra-1.4,-M+.6,C+.7,-1,M-.6,w);for(let C of[-25.7,25.7])b.box(C-1.2,-Ra+.4,-M-.4,C+1.2,-.05,M+.4,w);for(let C of[-24.5,24.5])b.box(C-.16,.004,-S,C+.16,.016,S,[.33,.32,.31]),b.box(C-.02,.016,-S,C+.02,.02,S,[.2,.19,.19]);let P=l>0?.15:0;for(let C of[-1,1]){let L=C*(M-.14);for(let D=-24;D<=24.01;D+=2)b.box(D-.06,P,L-.06,D+.06,P+1,L+.06,R);b.box(-24,P+.95,L-.08,24,P+1.08,L+.08,R),b.box(-24,P+.48,L-.03,24,P+.54,L+.03,R),b.box(-24,P+.06,L-.03,24,P+.12,L+.03,R)}let I="bridge"+Math.abs(Math.round(n/Qs))%4;for(let C of[-25,25])for(let L of[-1,1]){let D=L*(M-.1),z=[.7,.69,.65];b.box(C-.32,P,D-.32,C+.32,P+1.45,D+.32,z),b.box(C-.38,P+1.45,D-.38,C+.38,P+1.58,D+.38,[.62,.61,.57]),e.atlas.setM(y);let W=(C<0?-1:1)*.325,O=I;C<0?e.atlas.quad([C-.325,P+.3,D-.22],[C-.325,P+.3,D+.22],[C-.325,P+1.3,D+.22],[C-.325,P+1.3,D-.22],[1,1,1],oo(O)):e.atlas.quad([C+.325,P+.3,D+.22],[C+.325,P+.3,D-.22],[C+.325,P+1.3,D-.22],[C+.325,P+1.3,D+.22],[1,1,1],oo(O)),b.setM(y)}Ia(e,s(n-14,-(M-.45),_+P,0,!0)),Ia(e,s(n+14,M-.45,_+P,0,!0)),yield;{e.atlas.setM(new it);let C=oo("gogan"),L=2.4,D=150;for(let z of[-1,1])for(let W=-D;W<D-.01;W+=L){let O=W+L,H=E(z*13.9,W,T-.12),V=E(z*13.9,O,T-.12),ie=E(z*16.05,O,T+.72),he=E(z*16.05,W,T+.72),Qe=(V[1]-H[1])*(he[2]-H[2])-(V[2]-H[2])*(he[1]-H[1]),Re=(V[0]-H[0])*(he[1]-H[1])-(V[1]-H[1])*(he[0]-H[0]),He=E(0,(W+O)/2,T),J=Qe*(He[0]-H[0])+Re*(He[2]-H[2])>0,Z={u0:C.u0,u1:C.u1,v0:C.v0,v1:C.v1};J?e.atlas.quad(H,V,ie,he,[1,1,1],Z):e.atlas.quad(V,H,he,ie,[1,1,1],{u0:C.u1,u1:C.u0,v0:C.v0,v1:C.v1})}for(let z of[-1,1])for(let W of[-1,1])for(let O=14+m()*3;O<125;O+=m.range(2.4,5)){if(m()<.35)continue;let H=z*(16.2+m()*1.1),V=W*O,ie=1+(m()<.4?1:0);for(let he=0;he<ie;he++){let Qe=E(H+z*m()*.6,V+(m()-.5)*.9,T+.7),Re=new it().makeRotationY(m()*6.28);Re.setPosition(Qe[0],Qe[1],Qe[2]),If(e,Re,m,"grass",m.range(1.9,2.8))}}}yield;for(let C of[-18,18])for(let L of[-1,1]){yield;for(let D=11+m()*4;D<(x?125:170);D+=x?m.range(8.5,11):m.range(18,34)){let z=n+C+(m()-.5)*1.5,W=L*D;On(e,s(z,W,a(z,W),m()*6,!1),x?"sakura":"broad",m,x?m.range(1,1.25):m.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,a,c,u,h,m,g){let v=this.path.at(n.s,{}),_=v.y,S=u(n.s),l=S+1.4,f=Nt(n.s),d=[f.city,f.sakura,f.coast,f.country],x=o(n.s,0,_,0,!1),p=e.color,M=Math.max(s,n.s-sn)-n.s,T=Math.min(r,n.s+sn)-n.s;if(T>M+.01){let O=Math.max(2,Math.ceil((T-M)/3)+1),H=[-(S+1.5),-S,-S*.5,0,S*.5,S,S+1.5];t.gridN(O,H.length,(Z,Me)=>{let Le=M+(T-M)*Z/(O-1),we=n.s+Le,Ge=H[Me],Je=_+tu(Le,Ge);return[v.x+v.fx*Le+v.rx*Ge-h,Je,v.z+v.fz*Le+v.rz*Ge-m,0,1,0,rs(we,Es),Ge,d[0],d[1],d[2],d[3],S,0,-1]});let V=[[-S,0],[-S,.2],[-l,.2],[-l,3.2]];for(let Z=1;Z<12;Z++){let Me=Math.PI*(1-Z/12);V.push([l*Math.cos(Me),3.2+3*Math.sin(Me)])}V.push([l,3.2],[l,.2],[S,.2],[S,0]);let ie=[.86,.82,.72],he=[.44,.45,.47],Qe=[.62,.61,.58],Re=[];for(let Z=M;Z<T-.01;Z+=6)Re.push(Z);Re.push(T),p.setM(x);for(let Z=0;Z<Re.length-1;Z++)for(let Me=0;Me<V.length-1;Me++){let[Le,we]=V[Me],[Ge,Je]=V[Me+1],Be=Math.max(we,Je)<=.21?Qe:Math.abs(Le)>l-.01&&Math.abs(Ge)>l-.01?ie:he;p.quad([Re[Z],we,Le],[Re[Z+1],we,Le],[Re[Z+1],Je,Ge],[Re[Z],Je,Ge],Be)}e.sodium.setM(x),e.sig.setM(x);let He=l*Math.cos(Math.PI/6)-.12,J=3.2+3*Math.sin(Math.PI/6)-.08;for(let Z=Math.ceil((M+sn-3)/6)*6+3-sn;Z<T;Z+=6)for(let Me of[-1,1])e.sodium.box(Z-.45,J-.07,Me*He-.13,Z+.45,J+.07,Me*He+.13,null),ws(e,x,Z,J-.1,Me*He,1);for(let Z=Math.ceil((M+sn)/24)*24-sn;Z<T;Z+=24)e.sig.box(Z-.3,.95,-l+.01,Z+.3,1.2,-l+.06,null);for(let Z=Math.ceil((M+sn-30)/60)*60+30-sn;Z<T;Z+=60)for(let Me of[-1.15,1.15])p.box(Z-1.1,5.2,Me-.36,Z+1.1,5.78,Me+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),p.box(Z-.08,5.78,Me-.05,Z+.08,6.15,Me+.05,[.4,.4,.42]);yield}let E=(O,H)=>{let V=Math.sin(O*12.9898+H*78.233+n.k*37.719)*43758.5453;return V-Math.floor(V)},y=(O,H,V)=>[O[0]+(H[0]-O[0])*V,O[1]+(H[1]-O[1])*V,O[2]+(H[2]-O[2])*V],b=[.5,.5,.47],w=[.55,.53,.47],R=[.6,.6,.57],P=[.58,.58,.55],I=[.42,.42,.4],C=(O,H)=>{let V=E(O,H);return L?y([.26,.29,.08],[.42,.3,.09],V):y([.22,.29,.08],[.36,.36,.12],V)},L=f.mountain>.5,D=l+2.6,z=2.6;for(let O of[-1,1]){let H=n.s+O*sn,V=O*(sn+.08);if(H<s||H>=r)continue;let ie=[];for(let j of sm)j>=1.44&&ie.push(S+j,-(S+j));for(let j of rm)j>S+3.5&&j<S+21&&ie.push(j,-j);for(let j=0;j<=24;j++)ie.push(-l+2*l*j/24);ie.push(-l-.01,l+.01,-D,D),ie.sort((j,U)=>j-U);let he=j=>3.2+3*Math.sqrt(Math.max(0,1-(j/l)**2)),Qe=j=>Math.max(c(H-O*.03,j)-_,tu(O*(sn-.03),j)),Re=j=>Math.abs(j)<=l+1e-6?he(j):c(H+O*.03,j)-_,He=8.4;for(let j of ie)Math.abs(j)<=D&&(He=Math.min(He,Qe(j)-.4));let J=He>6.6;p.setM(x);let Z=O,Me=(j,U,A,G,Y,B,le,ye)=>{let oe=[V,A,j],ue=[V,G,U],pe=[V,B,U],Ce=[V,Y,j],xe=O<0?[oe,ue,pe,Ce]:[ue,oe,Ce,pe],_e=O<0?[le,le,ye,ye]:[le,le,ye,ye];for(let Ue of[0,1,2,0,2,3])p.vtx(xe[Ue][0],xe[Ue][1],xe[Ue][2],Z,0,0,0,0,_e[Ue])},Le=(j,U,A)=>j+(U-j)*A;for(let j=0;j<ie.length-1;j++){let U=ie[j],A=ie[j+1];if(A-U<1e-4)continue;let G=Qe(U),Y=Qe(A),B=Re(U),le=Re(A);if(G-B<.01&&Y-le<.01)continue;let ye=(U+A)/2,oe=J&&Math.abs(ye)<D,ue=B,pe=le;if(oe){let Ue=y(b,[.46,.46,.44],E(Math.floor(ye/2.4),3.1)),Ke=.8+2.6*E(Math.floor(ye/.8),7.7),et=y(Ue,[.27,.27,.26],.35+.3*E(Math.floor(ye/.8),9.9)),X=Math.min(He,G),Pe=Math.min(He,Y),fe=Math.max(B,X-Ke),De=Math.max(le,Pe-Ke);if(Math.abs(ye)>l){let ze=Math.min(fe,B+.9),Se=Math.min(De,le+.9);Me(U,A,B,le,ze,Se,y(Ue,[.25,.29,.18],.45),Ue),Me(U,A,ze,Se,fe,De,Ue,Ue)}else Me(U,A,B,le,fe,De,Ue,Ue);if(Me(U,A,fe,De,X,Pe,Ue,et),ue=X,pe=Pe,G-X<.01&&Y-Pe<.01)continue}let Ce=Math.floor(ye/z),xe=ue,_e=pe;for(let Ue=Math.floor(Math.min(xe,_e)/z)+1;xe<G-.01||_e<Y-.01;Ue++){let Ke=Ue*z,et=Math.min(G,Math.max(xe,Ke)),X=Math.min(Y,Math.max(_e,Ke)),Pe=C(Ce,Ue);if(Me(U,A,xe,_e,et,X,y(Pe,[.2,.22,.1],.25),Pe),xe=et,_e=X,Ue>60)break}}let we=Math.min(V,V+O*.12),Ge=Math.max(V,V+O*.12),Je=j=>{for(let U=0;U<ie.length-1;U++)if(j>=ie[U]&&j<=ie[U+1]&&ie[U+1]>ie[U]){let A=(j-ie[U])/(ie[U+1]-ie[U]);return[Le(Re(ie[U]),Re(ie[U+1]),A),Le(Qe(ie[U]),Qe(ie[U+1]),A)]}return null},Be=ie[0],mt=ie[ie.length-1];for(let j=Math.ceil(Be/z)*z;j<mt;j+=z){let U=Je(j);if(!U)continue;let A=(J&&Math.abs(j)<D?Math.max(He+.3,U[0]):U[0])+.05,G=U[1]-.05;G-A>.4&&!(Math.abs(j)<=l+.3&&!J)&&p.box(we,A,j-.14,Ge,G,j+.14,w)}for(let j=1;j<60;j++){let U=j*z,A=null,G=()=>{A&&A[1]-A[0]>.3&&p.box(we,U-.14,A[0],Ge,U+.14,A[1],w),A=null},Y=!1;for(let B=0;B<ie.length-1;B++){let le=ie[B],ye=ie[B+1];if(ye-le<1e-4)continue;let oe=(le+ye)/2,ue=Math.max(Re(le),Re(ye),J&&Math.abs(oe)<D?He+.3:-1e9),pe=Math.min(Qe(le),Qe(ye));U>ue+.2&&U<pe-.2?(Y=!0,A?A[1]=ye:A=[le,ye]):G()}if(G(),!Y&&U>30)break}J&&p.box(Math.min(V,V+O*.32),He-.05,-D,Math.max(V,V+O*.32),He+.3,D,R);let Q=V+O*.32,me=j=>-l+2*l*j/24,Te=j=>[me(j),he(me(j))],K=j=>[me(j)*1.12,he(me(j))+.6];for(let j=0;j<24;j++){let[U,A]=Te(j),[G,Y]=Te(j+1),[B,le]=K(j),[ye,oe]=K(j+1);O<0?p.quad([Q,A,U],[Q,Y,G],[Q,oe,ye],[Q,le,B],P):p.quad([Q,Y,G],[Q,A,U],[Q,le,B],[Q,oe,ye],P),O<0?p.quad([V,A,U],[V,Y,G],[Q,Y,G],[Q,A,U],I):p.quad([V,Y,G],[V,A,U],[Q,A,U],[Q,Y,G],I),O<0?p.quad([V,oe,ye],[V,le,B],[Q,le,B],[Q,oe,ye],P):p.quad([V,le,B],[V,oe,ye],[Q,oe,ye],[Q,le,B],P)}for(let j of[-1,1])p.box(Math.min(V,Q),.2,j>0?l:-l*1.12,Math.max(V,Q),3.2,j>0?l*1.12:-l,P);e.atlas.setM(x);let ee=1.9,re=7.05,se=7.85,F=V+O*.03,ge=oo("tunnel"+(f.coast>.5?1:Math.abs(n.k)%2?2:0));O<0?e.atlas.quad([F,re,-ee],[F,re,ee],[F,se,ee],[F,se,-ee],[1,1,1],ge):e.atlas.quad([F,re,ee],[F,re,-ee],[F,se,-ee],[F,se,ee],[1,1,1],ge)}yield;let W=f.mountain>.5;for(let O=Math.max(s,n.s-tn*.95)+g()*3;O<Math.min(r,n.s+tn*.95);O+=g.range(4,8)){let H=Math.abs(O-n.s)>sn-4?17:4;for(let V of[-1,1]){let ie=V*(S+g.range(H,50)),he=g();On(e,a(O,ie,-.3,g()*6,!1),W?he<.5?"maple":he<.8?"cedar":"ginkgo":he<.65?"pine":"broad",g,g.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,a,c,u){let h=m=>Nt(m).snow;if(!(h(n)<.3&&h(s)<.3)){for(let m of[-1,1]){for(let g=n+t()*20;g<s;g+=t.range(22,40)){if(h(g)<.6||t()<.5)continue;let v=m*t.range(18,90);ss(e,o(g,v,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(is),litP:.62,fence:0,snow:!0});for(let _=0;_<2+t()*3;_++)On(e,o(g+t.range(-9,9),v+m*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let g=n+t()*5;g<s;g+=t.range(3,7))h(g)<.5||(t()<.32&&On(e,o(g,m*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&On(e,o(g,m*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let m=Math.ceil(n/36)*36;m<s;m+=36){if(h(m)<.55)continue;let g=c(m);{let v=r(m,-(g+.95),a(m)+1.3),_=r(m+18,g+.95,a(m+18)+1.3);v.groundY=a(m),_.groundY=a(m+18),Rf(e,v,1),Rf(e,_,-1)}}}}*placeMountain(e,t,n,s,r,o,a,c,u){let h=m=>Nt(m).mountain;if(!(h(n)<.3&&h(s)<.3)){for(let m of[-1,1]){for(let g=n+t()*4;g<s;g+=t.range(4.5,8.5)){if(h(g)<.45||Di(g,tn+6))continue;let v=c(g),_=t();if(m>0){let S=_<.5?"maple":_<.72?"ginkgo":"cedar";On(e,o(g,v+t.range(17,70),-.25,t()*6,!1),S,t,t.range(.9,1.3))}else{let S=_<.55?"maple":_<.8?"cedar":"ginkgo";On(e,o(g,-(v+t.range(3.5,34)),-.25,t()*6,!1),S,t,t.range(.95,1.35))}}yield}for(let m=n+t()*4;m<s;m+=t.range(3,6)){if(h(m)<.5)continue;let g=t()<.7,v=-(c(m)+(g?t.range(108,205):t.range(36,100)));On(e,o(m,v,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new it);for(let m=Math.ceil(n/10)*10;m<s;m+=10){if(h(m)<.5||Di(m,tn+4))continue;let g=c(m),v=r(m,-(g+.95),a(m));Fp(e,v)}for(let m=Math.ceil(n/14)*14;m<s;m+=14){if(h(m)<.6)continue;let g=this.path.curv(m);if(Math.abs(g)<1/230)continue;let v=c(m);g>0?As(e,r(m,v+.42,a(m)),"chev_l",-1,1.25,.58):As(e,r(m,-(v+1.15),a(m)),"chev_r",1,1.35,.58)}}}*placeVerge(e,t,n,s,r,o,a){for(let c of[-1,1]){for(let u=n+t()*1.2;u<s;u+=t.range(.55,1.5)){if(Rs(u,10)||oi(u,31)||Di(u,tn+4))continue;let h=en(u),m=a(u),g,v,_=.22,S=1;if(h==="country")g=m+(t()<.6?t.range(.2,.62):t.range(2.18,2.75)),v=.95;else if(h==="sakura")g=m+2.68+t()*1.3,v=.55,_=.3;else if(h==="coast"){if(c<0)continue;g=m+.95+t()*1.7,v=.75,_=.18}else{if(h==="snow")continue;if(h==="mountain")g=c<0?m+1+t()*.35:m+.25+t()*.2,v=c<0?.55:.18,_=.12,S=.85;else{if(Ff(u,5))continue;g=m+3.02+t()*.1,v=.1,_=.08,S=.65}}if(t()>v)continue;let l=c*g;If(e,r(u,l,o(u,l),t()*6.28,!1),t,t()<_?"flowers":"grass",S*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new it);let a=Math.max(1,Math.round((n-t)/2)),c=be.rail,u=[.62,.64,.66],h=[.74,.76,.79],m=[.95,.55,.16];for(let g=0;g<a;g++){let v=t+(n-t)*g/a,_=t+(n-t)*(g+1)/a,S=-(o(v)+.95),l=-(o(_)+.95),f=r(v),d=r(_);for(let p=0;p<Nf.length-1;p++){let[M,T]=Nf[p],[E,y]=Nf[p+1];e.color.quad(s(v,S+T,f+M),s(_,l+T,d+M),s(_,l+y,d+E),s(v,S+y,f+E),c)}e.color.quad(s(_,l+.05,d+.5),s(v,S+.05,f+.5),s(v,S+.05,f+.84),s(_,l+.05,d+.84),u),e.color.noShadow=!0;let x=s(v,S-.04,f);if(e.color.cyl(x[0],f,x[2],.055,.055,.8,6,h,!1),Math.round(v/2)%2===0){let p=s(v,S+.035,f+.64),M=s(v+.09,S+.035,f+.64);e.color.quad(M,p,[p[0],p[1]+.07,p[2]],[M[0],M[1]+.07,M[2]],m)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,a,c,u,h,m,g,v){for(let l of[-1,1]){let f=n+t()*2;for(;f<s-2;){{let I=Nt(f);if(I.city<.62||I.mountain>.1){f+=4;continue}}{let I=eo(f+6);if(I&&f<I.s+8.5&&f+14>I.s-8.5){f=Math.max(f+1,I.s+8.5);continue}}let d=rs(f,150);if(d>145.6||d<3.4){f+=1;continue}let x=c(f),p=u(f)||3,M=x+p+.15,T=t(),E=T<.5?"machiya":T<.7?"shop":T<.77?"apt":T<.8?"office":T<.86?"house":T<.91?"konbini":T<.95?"parking":"gap",y=E==="shop"?t.range(5,9):E==="machiya"?t.range(6,9.5):E==="apt"?t.range(10,16):E==="office"?t.range(10,14):E==="house"?t.range(7,9.5):E==="konbini"?t.range(12,14):E==="parking"?t.range(7,11):t.range(2,3.5);if(f+y>s){if(s-f<5||E==="konbini")break;y=s-f-.2}{let I=Math.ceil((f+4.4)/150)*150-4.4;if(f+y>I-.1){if(I-.1-f<4){f=I+7.9;continue}y=I-.1-f}}let b=f+y/2,w=a(b),R=t.pick(is),P=.42;if(E==="parking"){let I=r(b,l*(M+3),w+.15);t()<.8&&qp(e,du(I,0,0,.5,(t()-.5)*.1),t),e.color.setM(I),e.color.box(-y/2,0,5.5,y/2,1.6,5.7,be.concrete)}else if(E!=="gap"){let I=r(b,l*M,w+.15),C={type:E,w:y,d:E==="apt"||E==="office"?t.range(10,14):t.range(8,12),floors:E==="shop"?t.int(2,4):E==="machiya"?t()<.75?2:3:E==="apt"?t.int(4,9):E==="office"?t.int(4,8):2,tint:R,litP:P,fence:E==="house"&&t()<.5?1.2:0};if(ss(e,I,t,C),E!=="house"&&t()<.28&&wf(e,r(b+(t()-.5)*(y-1.2),l*(M-.42),w+.15),t),(E==="shop"||E==="konbini"||E==="machiya")&&t()<.3)for(let L=0;L<1+t()*3;L++)Np(e,r(b-y/2+.8+L*.55,l*(M-.75),w+.15,Math.PI/2+.1),t);if(E==="house"&&t()<.6)for(let L=0;L<2+t()*3;L++)Af(e,r(b+1+L*.5,l*(M-.3),w+.15),t);if(t()<.03)for(let L=0;L<3;L++)Up(e,r(b+L*.9,l*(x+.35),w))}f+=y+t.range(.05,.5),yield}for(let d=n+t()*10;d<s-8;d+=t.range(14,26)){if(Nt(d).city<.7||Nt(d).mountain>.1||t()<.3||Rs(d,18)||Ff(d,15))continue;let x=c(d),p=r(d,l*(x+3.2+t.range(14,20)),a(d)+.1);ss(e,p,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(is),litP:.4})}if(Nt(n+30).city>.7&&Nt(n+30).mountain<.1&&t()<.65){let d=n+t()*Zt;if(Rs(d,24)||Ff(d,20))continue;let x=r(d,l*t.range(55,150),a(d));ss(e,x,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(is),litP:.45})}}let _=Math.ceil(n/150),S=Math.floor((s-.01)/150);for(let l=_;l<=S;l++){let f=l*150;if(en(f)!=="city"||Nt(f).mountain>.1)continue;let d=c(f);yield*this.intersection(e,t,f,l,r,a,c,u,m,g,v),As(e,r(f-1,-(d+.4),a(f)+.15),"sign_blue",1),As(e,r(f-6,-(d+.4),a(f)+.15),"sign_stop",1,2.1,.75),Cf(e,r(f+7,d+.4,a(f)+.15),-1),l%3===0&&As(e,r(f+20,-(d+.4),a(f)+.15),"sign_speed",1)}}*placeSakura(e,t,n,s,r,o,a,c,u){for(let g of[-1,1]){for(let v=n+t()*4;v<s;v+=t.range(7.5,10)){if(Nt(v).sakura<.45||oi(v,30))continue;let _=c(v);On(e,o(v,g*(_+3.7),0,t()*6),"sakura",t,t.range(1.05,1.3)),t()<.45&&On(e,o(v+3,g*(_+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let v=n+(g>0?0:12);v<s;v+=24){if(en(v)!=="sakura"||oi(v,30))continue;let _=c(v);Ia(e,r(v,g*(_+2.25),a(v)+.15)),rs(v,48)<24&&jp(e,r(v+6,g*(_+3),u(v+6,g*(_+3))))}for(let v=n+t()*15;v<s;v+=t.range(14,24)){if(en(v)!=="sakura"||t()<.35||oi(v,45))continue;let _=c(v);ss(e,o(v,g*(_+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(is),litP:.45,fence:t()<.6?1.4:0})}}let m=Math.floor((n+Zt/2)/480)*480+240;m>=n&&m<s&&en(m)==="sakura"&&!oi(m,60)&&Df(e,r(m,0,a(m),0,!1),c(m)+1.6,6.4)}placeCoast(e,t,n,s,r,o,a,c,u,h,m){for(let _=0;_<=20;_++){let S=n+_/20*Zt;if(Nt(S).coast<.85||Di(S,tn*1.25)){h.length&&h[h.length-1]!==null&&h.push(null);continue}let f=c(S),d=f+11,x=f+19,p=m(S,-d,Ts+.06),M=m(S,-x,Ts+.06);h.push([[p[0],p[1],p[2],rs(S,Es),0],[M[0],M[1],M[2],rs(S,Es),1]])}let g=h.indexOf(null);g>=0&&(h.length=g),h.length<2&&(h.length=0);for(let _=n+t()*6;_<s;_+=t.range(5,9)){if(en(_)!=="coast"||Di(_,tn+6))continue;let S=c(_);t()<.7&&On(e,o(_,S+t.range(3.5,26),0,t()*6,!1),"pine",t,t.range(.9,1.3)),t()<.2&&On(e,o(_+2,-(S+t.range(3.5,7)),0,t()*6,!1),"pine",t,t.range(.8,1.1))}for(let _=n+4;_<s;_+=t.range(18,30)){if(en(_)!=="coast"||t()<.4||Di(_,tn*1.4))continue;let S=c(_),l=3+Math.floor(t()*5);for(let f=0;f<l;f++){let d=-(S+t.range(12,17)),x=_+t.range(-3,3);em(e,r(x,d,Math.max(u(x,d),Ts-.4)+t.range(-.2,.4),t()*6),t,t.range(.9,1.2))}}for(let _=n+12;_<s;_+=48){if(en(_)!=="coast"||Di(_,tn+4))continue;let S=c(_);Ef(e,o(_,S+1),t)}if(en(n+30)==="coast"&&t()<.5){let _=n+t()*Zt,S=c(_);Di(_,tn+25)||ss(e,o(_,S+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick(is),litP:.5,fence:0})}if(en(n+30)==="coast"&&t()<.55){let _=n+t()*Zt;nm(e,r(_,-(c(_)+t.range(45,220)),Ts-.25,t()*6,!1),t)}let v=Math.floor((n+Zt/2)/1500)*1500+700;v>=n&&v<s&&en(v)==="coast"&&!Di(v,tn*1.6)&&tm(e,r(v,-(c(v)+75),Ts-1,0,!1))}*placeCountry(e,t,n,s,r,o,a,c,u){for(let _ of[-1,1]){yield;for(let S=n+t()*20;S<s;S+=t.range(20,40)){if(en(S)!=="country"||t()<.55||Rs(S,16)||oi(S,48))continue;let l=_*t.range(16,95),f=o(S,l);ss(e,f,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(is),litP:.5,fence:0});for(let d=0;d<2+t()*3;d++){let x=l+_*t.range(6,14),p=S+t.range(-8,8);On(e,o(p,x,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let S=n+t()*8;S<s;S+=t.range(5,9)){if(en(S)!=="country"||Rs(S,7)||oi(S,36))continue;let l=_*t.range(140,210);On(e,o(S,l,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Rs(S+2,8)&&!oi(S+2,34)&&On(e,o(S+2,_*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let h=Math.floor((n+Zt/2)/600)*600+300;if(h>=n&&h<s&&en(h)==="country"&&!oi(h,40)){let _=c(h);Qp(e,r(h,-(_+1.6),a(h)-.08),t)}let m=Math.floor((n+Zt/2)/700)*700+120;if(m>=n&&m<s&&en(m)==="country"&&!oi(m,40)){let _=c(m);wf(e,r(m,-(_+.95),a(m)-.08),t),Ef(e,r(m+2,-(_+.8),a(m)-.08),t)}let g=Math.floor((n+Zt/2)/900)*900+450;if(g>=n&&g<s&&en(g)==="country"&&!oi(g,40)){let _=c(g);im(e,o(g,_+5),t)}let v=Math.floor((n+Zt/2)/380)*380+190;if(v>=n&&v<s&&en(v)==="country"&&!oi(v,40)&&!Rs(v,30)){let _=c(v),S=(ri(Math.round(v),5)<.5?-1:1)*(_+2.75);Jp(e,o(v,S,0))}for(let _=n;_<s;_+=30){if(en(_)!=="country")continue;let S=this.path.curv(_);if(Math.abs(S)>1/450&&t()<.5){let l=S>0?-1:1,f=c(_);Cf(e,o(_,l*(f+.75)),l>0?-1:1)}}}};var mu=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3473d4","#cde3f8","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#cfe0ef","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new Ee(e):e)),ve={zenith:new Ee,horizon:new Ee,sunCol:new Ee,sunI:1,hemiSky:new Ee,hemiGround:new Ee,hemiI:1,fog:new Ee,cLit:new Ee,cShade:new Ee,cRim:new Ee,night:0,warm:0,overcast:0,rain:0,sunDir:new k,moonDir:new k,lightDir:new k,sunEl:0};function lm(i){let e=0;for(;e<mu.length-2&&mu[e+1][0]<=i;)e++;let t=mu[e],n=mu[e+1],s=Kc(zt((i-t[0])/(n[0]-t[0]),0,1)),r=(o,a)=>a.copy(t[o]).lerp(n[o],s);r(1,ve.zenith),r(2,ve.horizon),r(3,ve.sunCol),ve.sunI=Pt(t[4],n[4],s),r(5,ve.hemiSky),r(6,ve.hemiGround),ve.hemiI=Pt(t[7],n[7],s),r(8,ve.fog),r(9,ve.cLit),r(10,ve.cShade),r(11,ve.cRim),ve.night=Pt(t[12],n[12],s),ve.warm=Pt(t[13],n[13],s),ve.sunEl=cm(i,ve.sunDir,ve.moonDir,ve.lightDir)}function cm(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,zt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var B2=new k,O2=new k;function zf(i,e){return cm((i%1+1)%1,B2,O2,e),e}var am={zenith:[new Ee("#7b8594"),new Ee("#141a28")],horizon:[new Ee("#b5bcc6"),new Ee("#283042")],fog:[new Ee("#a8b0ba"),new Ee("#232b3c")],hemiSky:[new Ee("#aab3bf"),new Ee("#3c4866")],hemiGround:[new Ee("#8b8983"),new Ee("#1e2030")],cLit:[new Ee("#d0d5dc"),new Ee("#2c3240")],cShade:[new Ee("#7c8593"),new Ee("#151922")]},Of=new Ee;function um(i,e){if(ve.overcast=i,ve.rain=e,i<=.001)return;let t=ve.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Of.copy(am[n][0]).lerp(am[n][1],t),ve[n].lerp(Of,i*(n==="cLit"||n==="cShade"?.75:.85));ve.sunI*=1-.82*i,ve.warm*=1-i,ve.cRim.multiplyScalar(1-i),ve.sunCol.lerp(Of.setRGB(.85,.87,.9),i*.6)}function hm(){let i=new _t({side:Cn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ve.zenith},uHorizon:{value:ve.horizon},uSunDir:{value:ve.sunDir},uMoonDir:{value:ve.moonDir},uNoiseTex:We.uNoiseTex,uSunCol:{value:ve.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new Ee},uOvercast:{value:0},uDeckLit:{value:new Ee},uDeckDark:{value:new Ee},uMilky:{value:0},uMetA:{value:new k(0,1,0)},uMetB:{value:new k(0,1,0)},uMetP:{value:-1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP;
      varying vec3 vDir;
      ${gi}
      float hash13(vec3 p){ p = fract(p * .1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
      void main(){
        vec3 d = normalize(vDir); float e = d.y;
        float h = pow(clamp(1.0 - max(e, 0.0), 0.0, 1.0), 4.0);
        vec3 col = mix(uZenith, uHorizon, h);
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
      }`}),e=new gt(new aa(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function z2(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let d=0;d<o;d++){let x=.06+i()*.05;t.push([(d/(o-1)-.5)*s+(i()-.5)*.03,.1+x*.5,(i()-.5)*.2,x])}let a=e?6:2,c=s*.82,u=.1+.09;for(let d=0;d<a;d++){let x=Math.max(1,Math.round(c/.11));for(let p=0;p<x;p++){let M=(x===1?0:p/(x-1)-.5)*c+(i()-.5)*.05+r*d;t.push([M,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,c*=e?.8:.66}let h=t.slice();for(let d of h){if(t.length>84)break;let x=1+Math.floor(i()*2);for(let p=0;p<x;p++){let M=.35+i()*2.4,T=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(M)*d[3]*.82,d[1]+Math.sin(M)*d[3]*.82,d[2]+.04,T])}}let m=t.slice(h.length);for(let d of h){if(d[1]<.1+.12||t.length>104)continue;let x=1+Math.floor(i()*2);for(let p=0;p<x;p++){let M=.3+i()*2.5,T=d[3]*(.3+i()*.4),E=d[3]*(.28+i()*.16);t.push([d[0]+Math.cos(M)*T,d[1]+Math.sin(M)*T,d[2]+Math.sqrt(d[3]*d[3]-T*T)-E*.6,E])}}for(let d of m){if(t.length>124)break;let x=1+Math.floor(i()*2);for(let p=0;p<x;p++){let M=.2+i()*2.7,T=d[3]*(.38+i()*.2);t.push([d[0]+Math.cos(M)*d[3]*.85,d[1]+Math.sin(M)*d[3]*.85,d[2]+.02,T])}}let g=t.slice(0,128),v=1e9,_=-1e9,S=-1e9;for(let d of g)v=Math.min(v,d[0]-d[3]*1.12),_=Math.max(_,d[0]+d[3]*1.12),S=Math.max(S,d[1]+d[3]*1.12);let l=Math.min(1,.92/(_-v),(.95-.1)/(S-.1)),f=(v+_)/2;for(let d of g)d[0]=(d[0]-f)*l,d[1]=.1+(d[1]-.1)*l,d[3]*=l;return g}function fm(i){let t={value:Array.from({length:128},()=>new St)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new _t({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:We.uNoiseTex},vertexShader:n,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1,blending:Vn}),a=new gt(new nn(1,1),s),c=new Hs,u=new ji;c.add(a);let h=new Ut(1024*2,1024*2,{generateMipmaps:!0,minFilter:Gn,magFilter:Ot}),m=i.getRenderTarget(),g=i.autoClear,v=ln(99);i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let _=[];for(let S=0;S<4;S++){let l=S%2===0,f=z2(v,l);f.forEach((d,x)=>t.value[x].set(d[0],d[1],d[2],d[3])),s.uniforms.uN.value=f.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=S*13.7,a.material=s,i.setRenderTarget(r),i.render(c,u),a.material=o,h.viewport.set(S%2*1024,Math.floor(S/2)*1024,1024,1024),i.setRenderTarget(h),i.render(c,u),_.push({cell:[S%2,Math.floor(S/2)],tall:l})}return h.viewport.set(0,0,1024*2,1024*2),i.autoClear=g,i.setRenderTarget(m),s.dispose(),o.dispose(),r.dispose(),a.geometry.dispose(),{tex:h.texture,kinds:_,rt:h}}function dm(i){let e=ln(5),t=22,n=[],s=new nn(1,1);s.translate(0,.5,0);let r=new Hn(new Float32Array(t*4),4),o=new Hn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let a=new _t({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:ve.cLit},uShade:{value:ve.cShade},uRim:{value:ve.cRim},uHaze:{value:ve.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),c=new Ki(s,a,t);c.frustumCulled=!1,c.renderOrder=-5;for(let _=0;_<t;_++){let S=_<12,l=i.kinds[(_*3+(S?0:1))%i.kinds.length],f=S?l.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:_/t*Math.PI*2+e.range(-.15,.15),d:S?e.range(2600,3400):e.range(1300,2200),base:S?e.range(-60,60):e.range(260,700),size:f,cell:l.cell,haze:S?.45:.18})}let u=new it,h=new Sn,m=new k,g=new k,v=new k(0,1,0);return{group:c,update(_,S){let l=Math.atan2(ve.lightDir.x,ve.lightDir.z);for(let d of n)d.phi+=S*1.2/d.d;n.slice().sort((d,x)=>x.d-d.d).forEach((d,x)=>{m.set(_.x+Math.sin(d.phi)*d.d,_.y+d.base,_.z+Math.cos(d.phi)*d.d),h.setFromAxisAngle(v,d.phi+Math.PI),g.set(d.size,d.size,1),u.compose(m,h,g),c.setMatrixAt(x,u);let p=l-d.phi;p=Math.atan2(Math.sin(p),Math.cos(p));let M=Math.max(0,Math.min(1,(p+.35)/.7)),T=1-M*M*(3-2*M);r.setXYZW(x,d.cell[0],d.cell[1],T,d.haze),o.setX(x,.35+.9*Math.pow(Math.max(Math.cos(p),0),3)*(.4+ve.warm))}),c.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,a.uniforms.uOpacity.value=(1-ve.night*.35)*(1-ve.overcast*.55)*(1-.85*ve.rain)}}}function pm(){let i=new Jt;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],a=[];for(let m=0;m<=360;m++){let g=m/360*Math.PI*2,v=Math.sin(g)*t.R,_=Math.cos(g)*t.R,S=jc(m/360*t.k*4,40+n*9),l=Math.pow(Math.max(0,S-.18)/.82,1.6),f=t.h*(.12+l);if(r.push(v,-60,_,v,-60+f,_),o.push(0,m/360,1,m/360),m<360){let d=m*2;a.push(d,d+1,d+2,d+1,d+3,d+2)}}let c=new yt;c.setAttribute("position",new $e(r,3)),c.setAttribute("hf",new $e(o,2)),c.setIndex(a);let u=new _t({side:Tn,fog:!1,uniforms:{uCol:{value:new Ee(t.col)},uHaze:{value:ve.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:We.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${gi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),h=new gt(c,u);h.frustumCulled=!1,h.renderOrder=999,i.add(h)}),{group:i,update(t,n=0){i.position.set(t.x,0,t.z);for(let r of i.children)r.material.uniforms.uSnow.value=n;let s=(.35+.65*(1-ve.night))*(1-.35*ve.overcast);for(let r of i.children)r.material.uniforms.uLight.value=s}}}var ao={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function mm(i){let e=i.get("weather"),t={mode:ao[e]?e:"auto",kind:ao[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return ao[e]&&(t.ov=ao[e][0],t.rain=ao[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let a=Math.random();t.kind=t.kind==="clear"?a<.5?"cloudy":a<.72?"rain":"clear":t.kind==="cloudy"?a<.5?"clear":a<.85?"rain":"cloudy":a<.55?"cloudy":"clear"}let[s,r]=ao[t.kind];t.ov+=zt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=zt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var vi={uHeadPos:{value:new k},uHeadDir:{value:new k(0,0,1)},uHeadI:{value:0},uLampW:{value:[new St(0,-1e3,0,0),new St(0,-1e3,0,0)]},uLampCol:{value:new Ee(1,.8,.52)}},gu=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function gm(){let e=new k(42,22,42),t=new nn(1,1),n=new _s;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let a=0;a<2400*4;a++)s[a]=Math.random();n.setAttribute("aOff",new Hn(s,4)),n.instanceCount=2400;let r=new _t({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uAmt:{value:0},uBox:{value:e},uCol:{value:new Ee(1,1,1)},...vi},vertexShader:`
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new gt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,h){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*h,.33+.67*h,.42+.58*h)}}}function vm(){let e=new k(46,24,46),t=new nn(1,1);t.translate(0,.5,0);let n=new _s;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let a=0;a<2600;a++)s[a*4]=Math.random(),s[a*4+1]=Math.random(),s[a*4+2]=Math.random(),s[a*4+3]=Math.random();n.setAttribute("aOff",new Hn(s,4)),n.instanceCount=2600;let r=new _t({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uRain:{value:0},uBox:{value:e},uCol:{value:new Ee(.8,.85,.95)},...vi},vertexShader:`
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new gt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,h){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*h,.12+.83*h,.16+.84*h)}}}var Wn=64,kf=[2.2,1.3,2.6],k2=[-2.4,.35,-1.6];function xm(){let i=new Float32Array(Wn*3),e=new Float32Array(Wn*3),t=new Float32Array(Wn*4),n=new Float32Array(Wn),s=new Uint8Array(Wn),r=new Float32Array(Wn);for(let x=0;x<Wn;x++)t[x*4]=t[x*4+1]=1;let o=new nn(1,1),a=new _s;a.index=o.index,a.setAttribute("position",o.attributes.position),a.setAttribute("uv",o.attributes.uv),a.instanceCount=0;let c=new Float32Array(Wn*4),u=new Float32Array(Wn*4),h={uP:{value:c},uC:{value:u},uNoiseTex:We.uNoiseTex,uAmb:{value:new Ee},uSun:{value:new Ee},uTail:{value:new St},uCam:{value:new k},...vi},m=new _t({transparent:!0,depthWrite:!1,fog:!1,uniforms:h,vertexShader:`
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
      }`}),g=new gt(a,m);g.frustumCulled=!1,g.renderOrder=4,g.visible=!1;let v=0,_=0,S=0,l=0,f=!1;function d(x,p,M,T,E,y,b,w,R,P,I){let C=v;v=(v+1)%Wn,i[C*3]=p,i[C*3+1]=M,i[C*3+2]=T,e[C*3]=E,e[C*3+1]=y,e[C*3+2]=b,t[C*4]=0,t[C*4+1]=w,t[C*4+2]=R,t[C*4+3]=P,n[C]=I,s[C]=x,r[C]=Math.random()}return{mesh:g,update(x,p,M,T,E,y,b,w,R,P,I){if(!I){if(f){for(let J=0;J<Wn;J++)t[J*4]=t[J*4+1];f=!1}g.visible=!1;return}let C=p.position,L=p.rotation.y,D=Math.cos(L),z=Math.sin(L),W=z*M,O=D*M,H=Math.min(1,Math.max(0,(M-2)/14)),V=E>.3?2:0,ie=V?E:T;for(_+=24*ie*H*x;_>=1;){_-=1;let J=(l^=1)?1:-1,Z=J*.67,Me=-1.28-Math.random()*.2,Le=Math.random(),we=Math.random(),Ge=1.6+1.6*Le,Je=V?.5+.7*we:.9+1*we,Be=J*(.3+.6*Math.random());d(V,C.x+Z*D+Me*z,C.y+.12,C.z-Z*z+Me*D,W*.55-z*Ge+Be*D,Je,O*.55-D*Ge-Be*z,V?.45+.3*Le:.55+.35*Le,.2+.1*we,V?.7+.35*we:.8+.4*we,.5*(.5+.5*H)*Math.min(1,ie*1.5))}for(S+=(5+4*H)*y*x;S>=1;){S-=1;let J=Math.random();d(1,C.x-.42*D-1.78*z,C.y+.26,C.z+.42*z-1.78*D,W*.5-z*.8,.25+.2*J,O*.5-D*.8,1.3+.6*J,.14,.8+.4*Math.random(),.32*Math.min(1,y*1.5))}let he=0,Qe=Math.exp(-kf[0]*x),Re=Math.exp(-kf[1]*x),He=Math.exp(-kf[2]*x);for(let J=0;J<Wn;J++){let Z=J*4;if(t[Z]>=t[Z+1])continue;let Me=t[Z]+=x,Le=t[Z+1];if(Me>=Le)continue;let we=s[J],Ge=we===0?Qe:we===1?Re:He,Je=J*3,Be=i[Je]-P.x,mt=i[Je+1]-P.y,Q=i[Je+2]-P.z;if(Be*Be+mt*mt+Q*Q<20.25){t[Z]=Le;continue}e[Je]*=Ge,e[Je+1]=e[Je+1]*Ge+k2[we]*x,e[Je+2]*=Ge,i[Je]+=e[Je]*x,i[Je+1]=Math.max(C.y+.05,i[Je+1]+e[Je+1]*x),i[Je+2]+=e[Je+2]*x;let me=Me/Le,Te=he*4;c[Te]=i[Je],c[Te+1]=i[Je+1],c[Te+2]=i[Je+2],c[Te+3]=t[Z+2]+(t[Z+3]-t[Z+2])*Math.sqrt(me),u[Te]=n[J]*Math.min(1,me*6)*(1-me)*(1-me),u[Te+1]=we,u[Te+2]=r[J],he++}f=he>0,g.visible=f,a.instanceCount=he,f&&(h.uAmb.value.copy(b),h.uSun.value.copy(w),h.uTail.value.copy(R),h.uCam.value.copy(P))},shift(x,p){for(let M=0;M<Wn;M++)i[M*3]-=x,i[M*3+2]-=p}}}var sr=24,H2=55,V2=12;function _m(){let i=[],e=new Float32Array(sr*2*2),t=new Float32Array(sr*2*3);for(let u=0;u<sr;u++)if(e.set([u,-1,u,1],u*4),u<sr-1){let h=u*2;i.push(h,h+1,h+2,h+1,h+3,h+2)}let n=new yt;n.setAttribute("position",new Bt(t,3)),n.setAttribute("aI",new Bt(e,2)),n.setIndex(i);let s=new Float32Array(sr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new Ee},uTime:{value:0},uNoiseTex:We.uNoiseTex},o=new _t({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${sr}]; uniform float uW; varying vec3 vW; varying float vSide;
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
      }`}),a=new gt(n,o);a.frustumCulled=!1,a.renderOrder=1,a.visible=!1;let c={};return{mesh:a,update(u,h,m,g,v,_,S,l){if(a.visible=_>.01,!!a.visible){for(let f=0;f<sr;f++)u.at(h+H2+f*V2,c),s[f*4]=c.x-m,s[f*4+1]=c.y,s[f*4+2]=c.z-g,s[f*4+3]=c.h;r.uW.value=v*.85,r.uHot.value=_,r.uTime.value=S,r.uSky.value.copy(l)}}}}var lo=72;function G2(){let i=[],e=[],t=(s,r,o,a,c,u)=>{i.push(...s,...r,...o),e.push(a,c,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new yt;return n.setAttribute("position",new $e(i,3)),n.setAttribute("aWing",new $e(e,1)),n}function ym(){let i=G2(),e=new Hn(new Float32Array(lo*3),3),t=new Hn(new Float32Array(lo*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new _t({side:Tn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ve.fog},uFogD:{value:.002},uCam:{value:new k}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new Ki(i,n,lo);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},a=new it,c=new Sn,u=new Zn(0,0,0,"YXZ"),h=new k,m=new k,g=()=>r.reduce((S,l)=>S+l.birds.length,0);function v(S,l,f,d){let x=S==="small"?6+Math.floor(Math.random()*7):S==="crow"?3+Math.floor(Math.random()*5):4;if(g()+x>lo)return;let p=45+Math.random()*85,M=(Math.random()-.5)*120,T=Math.random()<.5?1:-1,E=new k().copy(l).addScaledVector(f,p).addScaledVector(d,M-T*75);E.y=l.y+(S==="crow"?18+Math.random()*24:10+Math.random()*18);let y=S==="small"?11+Math.random()*4:8+Math.random()*3,b=new k().copy(d).multiplyScalar(T*y).addScaledVector(f,(Math.random()-.3)*y*.6),w=S==="small"?.8:1.45,R=Array.from({length:x},(P,I)=>({off:new k((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:S==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:S,c:E,vel:b,birds:R,size:w,life:60})}function _(S,l,f,d){if(r.some(M=>M.kind==="gull")||g()+4>lo)return;let x=new k().copy(S).addScaledVector(l,70).addScaledVector(f,-d*45);x.y=S.y+18;let p=Array.from({length:4},(M,T)=>({off:new k,ph:Math.random()*6.28,fq:5.5,w:T/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:x,vel:new k,birds:p,size:1.25,life:1e9})}return{mesh:s,update(S,l,f,d,x,p,M,T,E){n.uniforms.uTime.value=l,n.uniforms.uCam.value.copy(f);let y=M>.35&&T<.3,b=ve.warm>.25&&ve.sunEl<.6&&M>.2;y&&(o.small-=S)<0&&(o.small=22+Math.random()*35,p.coast<.6&&v("small",f,d,x)),(b||y&&p.city+p.country>.6&&Math.random()<4e-4)&&(o.crow-=S)<0&&(o.crow=b?14+Math.random()*18:60,v("crow",f,d,x)),p.coast>.6&&y&&_(f,d,x,1);let w=[.1+.08*M,.11+.09*M,.15+.1*M],R=0;for(let P=r.length-1;P>=0;P--){let I=r[P];if(I.kind==="gull"?(I.c.lerp(h.copy(E).addScaledVector(d,60).addScaledVector(x,-42).setY(E.y+16),Math.min(1,S*.25)),(p.coast<.4||!y)&&(I.life=Math.min(I.life,8),I.c.y+=S*6)):I.c.addScaledVector(I.vel,S),I.life-=S,I.life<0||I.kind!=="gull"&&I.c.distanceTo(f)>300){r.splice(P,1);continue}for(let C of I.birds){if(R>=lo)break;let L,D,z,W;I.kind==="gull"?(C.w+=S*(14/C.r),L=I.c.x+Math.cos(C.w)*C.r,z=I.c.z+Math.sin(C.w)*C.r,D=I.c.y+C.h+Math.sin(l*.4+C.ph)*2,W=Math.atan2(-Math.sin(C.w),Math.cos(C.w))):(L=I.c.x+C.off.x+Math.sin(l*.7+C.ph)*1.2,D=I.c.y+C.off.y+Math.sin(l*1.1+C.ph)*.6,z=I.c.z+C.off.z,W=Math.atan2(I.vel.x,I.vel.z)),u.set(0,W,Math.sin(l+C.ph)*.15),c.setFromEuler(u),m.setScalar(I.size),a.compose(h.set(L,D,z),c,m),s.setMatrixAt(R,a);let O=I.kind==="gull"?[.92*(.5+.5*M),.93*(.5+.5*M),.95*(.5+.5*M)]:I.kind==="crow"?[.05,.05,.07]:w;e.setXYZ(R,O[0],O[1],O[2]),t.setXY(R,C.fq,C.ph),R++}}s.count=R,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(S){n.uniforms.uFogD.value=S},shift(S,l){for(let f of r)f.c.x-=S,f.c.z-=l}}}function Mm(){let i=new _t({fog:!1,uniforms:{uNoiseTex:We.uNoiseTex,uTime:{value:0},uCam:{value:new k},uSunDir:{value:ve.lightDir},uSunCol:{value:ve.sunCol},uHorizon:{value:ve.horizon},uZenith:{value:ve.zenith},uFog:{value:ve.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${gi}
      float wh(vec2 p){ return vnoise(p * 0.18 + vec2(uTime * 0.05, uTime * 0.03)) * 0.6 + vnoise(p * 0.55 - vec2(uTime * 0.09, -uTime * 0.04)) * 0.4; }
      void main(){
        vec3 V = normalize(uCam - vW); float dist = length(uCam.xz - vW.xz);
        vec2 p = vW.xz;
        float e = 0.6, h0 = wh(p);
        vec3 N = normalize(vec3((h0 - wh(p + vec2(e, 0.0))) * 1.4, 1.0, (h0 - wh(p + vec2(0.0, e))) * 1.4));
        N = normalize(mix(N, vec3(0.0, 1.0, 0.0), smoothstep(80.0, 900.0, dist) * 0.8));
        float fres = pow(1.0 - max(dot(V, N), 0.0), 3.0);
        vec3 deep = mix(vec3(0.010, 0.10, 0.26), vec3(0.03, 0.22, 0.40), 0.5 + 0.5 * vnoise(p * 0.02));
        vec3 sky = mix(uHorizon, uZenith, 0.25);
        vec3 col = mix(deep, sky, clamp(fres * 1.15 + 0.08, 0.0, 1.0));
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
      }`}),e=new gt(new nn(14e3,14e3),i);return e.rotation.x=-Math.PI/2,e.position.y=Ts,e.renderOrder=998,e.frustumCulled=!1,{mesh:e,update(t,n,s,r=1){e.position.x=t.x,e.position.z=t.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(t),i.uniforms.uNight.value=ve.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-ve.overcast*.85}}}function bm(){return new _t({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new Ee(1,1,1)},uNoiseTex:We.uNoiseTex},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${gi}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function Sm(){return new _t({fog:!1,uniforms:{uNoiseTex:We.uNoiseTex,uTime:{value:0},uSunDir:{value:ve.lightDir},uSunCol:{value:ve.sunCol},uHorizon:{value:ve.horizon},uZenith:{value:ve.zenith},uFog:{value:ve.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
      }`})}var Ua=new k;function xi(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ua.copy(e),Ua[n]=0,Ua.normalize();let u=.5*o/(o+a),h=1-Ua.angleTo(i)/c;return Math.sign(Ua[t])===1?h*u:a/(o+a)+u+u*(1-h)}var wn=class i extends Vt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new k,u=new k,h=new k(e,t,n).divideScalar(2).subScalar(r),m=this.attributes.position.array,g=this.attributes.normal.array,v=this.attributes.uv.array,_=m.length/6,S=new k,l=.5/o;for(let f=0,d=0;f<m.length;f+=3,d+=2)switch(c.fromArray(m,f),u.copy(c),u.x-=Math.sign(u.x)*l,u.y-=Math.sign(u.y)*l,u.z-=Math.sign(u.z)*l,u.normalize(),m[f+0]=h.x*Math.sign(c.x)+u.x*r,m[f+1]=h.y*Math.sign(c.y)+u.y*r,m[f+2]=h.z*Math.sign(c.z)+u.z*r,g[f+0]=u.x,g[f+1]=u.y,g[f+2]=u.z,Math.floor(f/_)){case 0:S.set(1,0,0),v[d+0]=xi(S,u,"z","y",r,n),v[d+1]=1-xi(S,u,"y","z",r,t);break;case 1:S.set(-1,0,0),v[d+0]=1-xi(S,u,"z","y",r,n),v[d+1]=1-xi(S,u,"y","z",r,t);break;case 2:S.set(0,1,0),v[d+0]=1-xi(S,u,"x","z",r,e),v[d+1]=xi(S,u,"z","x",r,n);break;case 3:S.set(0,-1,0),v[d+0]=1-xi(S,u,"x","z",r,e),v[d+1]=1-xi(S,u,"z","x",r,n);break;case 4:S.set(0,0,1),v[d+0]=1-xi(S,u,"x","y",r,e),v[d+1]=1-xi(S,u,"y","x",r,t);break;case 5:S.set(0,0,-1),v[d+0]=xi(S,u,"x","y",r,e),v[d+1]=1-xi(S,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Hf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new yt,u=0;for(let h=0;h<i.length;++h){let m=i[h],g=0;if(t!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let v in m.attributes){if(!n.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;r[v]===void 0&&(r[v]=[]),r[v].push(m.attributes[v]),g++}if(g!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let v in m.morphAttributes){if(!s.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[v]===void 0&&(o[v]=[]),o[v].push(m.morphAttributes[v])}if(e){let v;if(t)v=m.index.count;else if(m.attributes.position!==void 0)v=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,v,h),u+=v}}if(t){let h=0,m=[];for(let g=0;g<i.length;++g){let v=i[g].index;for(let _=0;_<v.count;++_)m.push(v.getX(_)+h);h+=i[g].attributes.position.count}c.setIndex(m)}for(let h in r){let m=Tm(r[h]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,m)}for(let h in o){let m=o[h][0].length;if(m!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let g=0;g<m;++g){let v=[];for(let S=0;S<o[h].length;++S)v.push(o[h][S][g]);let _=Tm(v);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}}return c}function Tm(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Bt(o,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let m=c/t;for(let g=0,v=h.count;g<v;g++)for(let _=0;_<t;_++){let S=h.getComponent(g,_);a.setComponent(g+m,_,S)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function W2(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new $n(i);return n.colorSpace=jt,n}var Vf=4;function X2(){let t=document.createElement("canvas");t.width=128*Vf,t.height=128;let n=t.getContext("2d"),s=(o,a,c,u,h)=>{n.beginPath(),n.moveTo(o+h,a),n.arcTo(o+c,a,o+c,a+u,h),n.arcTo(o+c,a+u,o,a+u,h),n.arcTo(o,a+u,o,a,h),n.arcTo(o,a,o+c,a,h),n.closePath(),n.fill()};for(let o=0;o<Vf;o++){let a=o*128,c=n.createLinearGradient(0,0,0,128);c.addColorStop(0,"#9fbfe6"),c.addColorStop(.45,"#4a6690"),c.addColorStop(1,"#1d2638"),n.fillStyle=c,n.fillRect(a,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(a+14,84,30,50,9),s(a+84,84,30,50,9),n.fillRect(a+6,112,116,16),s(a+52,92,24,40,7)),o===2&&(s(a+62,66,44,70,12),n.fillRect(a+50,118,70,10)),o===3&&(s(a+70,78,40,60,11),n.fillRect(a+56,120,64,8)),n.save(),n.beginPath(),n.rect(a,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(a+40,0),n.lineTo(a+68,0),n.lineTo(a+20,128),n.lineTo(a-8,128),n.fill(),n.restore()}let r=new $n(t);return r.colorSpace=jt,r}function Em(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/Vf)}return i}function wm(){let i=new Jt,e=new Jt,t=new Jt;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new St,new St],s=new Ee(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=vf(new an({color:"#ffffff",vertexColors:!0,gradientMap:iu}),.85,.06,"paint-l",r),a=(Q,me)=>Object.assign(new Ee(Q),{gloss:me}),c=a("#9fd8c8",1),u=a("#eeece4",.6),h=a("#2a2c33",.35),m=a("#1b1c20",.04),g=a("#c8ccd2",.8),v=a("#d4d8de",1.3),_=(Q,me)=>{let Te=Q.attributes.position.count,K=new Float32Array(Te*4);for(let ee=0;ee<Te;ee++)K.set([me.r,me.g,me.b,me.gloss],ee*4);return Q.setAttribute("color",new $e(K,4)),Q},S=vf(new an({color:"#ffffff",map:X2(),gradientMap:Kn}),1.2,.08,"glass-l",r),l=new an({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:Kn}),f=new an({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:Kn}),d=new an({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:Kn}),x=new an({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:Kn}),p=new an({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:Kn}),M=new on({map:W2()}),T=new Map,E=[],y=!1,b=new it,w=new Zn,R=new Sn,P=new k(1,1,1),I=(Q,me,Te,K,ee,re=0,se=0,F=0)=>{let ge=Q.index?Q.toNonIndexed():Q;if(me.isColor&&(_(ge,me),me=o),w.set(re,se,F),R.setFromEuler(w),b.compose(new k(Te,K,ee),R,P),ge.applyMatrix4(b),y){E.push(ge);return}T.has(me)||T.set(me,[]),T.get(me).push(ge)},C=a("#16171b",0),L=a("#2b3134",.15),D=a("#b9bfc6",.9),z=a("#4d5258",.4),W=a("#9a1c22",.6),O=1.7,H=.745,V=.3,ie=(Q,me,Te)=>{let K=Math.min(1,Math.max(0,(Te-Q)/(me-Q)));return K*K*(3-2*K)},he=Q=>Q<.8?1.8:Q<1.22?1.8-.6*ie(.8,1.22,Q):1.2-.1*((Q-1.22)/(O-1.22))**2,Qe=Q=>1-.085*ie(1.15,1.8,Q),Re=(Q,me)=>{let Te=H-me,K=V+me*.6,ee=he(Q)-me*(Q<0?.4:1),re=Math.max(.05,.1-me*.5),se=Math.max(.06,(Q<.8?.17:.13)-me*.5),F=[[0,K],[(Te-re)*.5,K],[Te-re,K]];for(let j=1;j<4;j++){let U=-Math.PI/2+j/8*Math.PI;F.push([Te-re+re*Math.cos(U),K+re+re*Math.sin(U)])}for(let j=0;j<=8;j++)F.push([Te,K+re+j/8*(ee-se-K-re)]);for(let j=1;j<5;j++){let U=j/10*Math.PI;F.push([Te-se+se*Math.cos(U),ee-se+se*Math.sin(U)])}F.push([Te-se,ee],[(Te-se)*.5,ee],[0,ee]);let ge=F.map(([j,U])=>[j*Qe(U),U]);for(let j=F.length-2;j>0;j--)ge.push([-ge[j][0],ge[j][1]]);return ge};{let Q=[];for(let A=0;A<=6;A++){let G=A/6*Math.PI/2;Q.push([-O+.2*(1-Math.cos(G)),.2*(1-Math.sin(G))])}for(let A=-O+.2+.12;A<.78;A+=.13)Q.push([A,0]);for(let A=.8;A<1.225;A+=.06)Q.push([A,0]);for(let A of[1.3,1.39])Q.push([A,0]);for(let A=6;A>=0;A--){let G=A/6*Math.PI/2;Q.push([O-.22*(1-Math.cos(G)),.22*(1-Math.sin(G))])}let K=[],ee=[],re=Q.map(([A,G])=>Re(A,G)),se=re[0].length;re.forEach((A,G)=>A.forEach(([Y,B])=>K.push(Y,B,Q[G][0])));for(let A=0;A<re.length-1;A++)for(let G=0;G<se;G++){let Y=A*se+G,B=A*se+(G+1)%se,le=Y+se,ye=B+se;ee.push(Y,B,le,B,ye,le)}for(let[A,G]of[[0,-1],[re.length-1,1]]){let Y=K.length/3,B=re[A];K.push(0,(B[0][1]+B[se/2|0][1])/2,Q[A][0]);for(let le=0;le<se;le++){let ye=A*se+le,oe=A*se+(le+1)%se;G<0?ee.push(Y,oe,ye):ee.push(Y,ye,oe)}}let F=new yt;F.setAttribute("position",new $e(K,3)),F.setIndex(ee),F.computeVertexNormals();{let A=F.attributes.normal,G=se*10+12;if(A.getX(G)<0){for(let Y=0;Y<ee.length;Y+=3){let B=ee[Y+1];ee[Y+1]=ee[Y+2],ee[Y+2]=B}F.setIndex(ee),F.computeVertexNormals()}}F.setAttribute("uv",new $e(new Float32Array(K.length/3*2),2));let ge=F.toNonIndexed(),j=ge.attributes.position,U=new Float32Array(j.count*4);for(let A=0;A<j.count;A+=3){let G=(j.getY(A)+j.getY(A+1)+j.getY(A+2))/3,Y=(j.getZ(A)+j.getZ(A+1)+j.getZ(A+2))/3,B=G>1.665&&Y<.84&&Y>-1.52?u:c;for(let le=0;le<3;le++)U.set([B.r,B.g,B.b,B.gloss],(A+le)*4)}ge.setAttribute("color",new $e(U,4)),I(ge,o,0,0,0)}I(new wn(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let He=(Q,me,Te,K,ee)=>{let re=new yt,se=[],F=[],ge=[],j=[];for(let U=0;U<=Te;U++)for(let A=0;A<=me;A++){let G=A/me,Y=U/Te,B=Q(G,Y);se.push(B[0]+B[3]*.004,B[1]+B[4]*.004,B[2]+B[5]*.004),F.push(B[3],B[4],B[5]),ge.push(G,Y)}for(let U=0;U<Te;U++)for(let A=0;A<me;A++){let G=U*(me+1)+A,Y=G+1,B=G+me+1,le=B+1;j.push(G,Y,le,G,le,B)}re.setAttribute("position",new $e(se,3)),re.setAttribute("normal",new $e(F,3)),re.setAttribute("uv",new $e(ge,2)),re.setIndex(j);{let U=new k().fromArray(se,0),A=new k().fromArray(se,3),G=new k().fromArray(se,(me+1)*3),Y=new k().fromArray(F,0);if(A.sub(U).cross(G.sub(U)).dot(Y)<0){for(let B=0;B<j.length;B+=3){let le=j[B+1];j[B+1]=j[B+2],j[B+2]=le}re.setIndex(j)}}return Em(re,K,ee)},J=Q=>{let Te=H*(Qe(Q+.01)-Qe(Q-.01))/.02,K=Math.hypot(1,Te);return[1/K,-Te/K]},Z=Q=>{let me=.8,Te=1.22;for(let K=0;K<24;K++){let ee=(me+Te)/2;he(ee)>Q?me=ee:Te=ee}return me};for(let Q of[-1,1]){let me=Q<0,Te=(K,ee,re)=>I(He((se,F)=>{let ge=1.21+F*.39,j=Q>0?ee(ge)+(K(ge)-ee(ge))*se:K(ge)+(ee(ge)-K(ge))*se,[U,A]=J(ge);return[Q*H*Qe(ge),ge,j,Q*U,A,0]},1,6,re,!1),S,0,0,0);Te(()=>.06,K=>Z(K)-.07,2),Te(()=>-.72,()=>-.08,3),Te(()=>-1.42,()=>-.84,0),I(new Vt(.012,.41,.07),h,Q*.731,1.405,-.01,0,0,-Q*.07),I(new Vt(.014,.022,2.42),C,Q*.748,1.2,-.26);for(let[K,ee]of[[.8,.64],[-.06,.42],[-.76,.64]])I(new Vt(.008,1.17-ee,.012),L,Q*.749,(ee+1.17)/2,K);I(new Vt(.02,.028,.13),L,Q*.752,1.06,.06),I(new Vt(.02,.028,.13),L,Q*.752,1.06,-.2),I(new Vt(.01,.022,.62),L,Q*.749,1.155,-1.08);for(let K of[1.12,-1.12])I(new Vs(.345,18,0,Math.PI),C,Q*.749,.29,K,0,Q*Math.PI/2,0),I(new la(.35,.024,5,18,Math.PI),h,Q*.752,.29,K,0,Q*Math.PI/2,0);I(new wn(.1,.12,.2,2,.04),c,Q*.83,1.24,1.02),I(new Vt(.07,.035,.05),h,Q*.775,1.2,1.03),I(new wn(.16,.4,.05,3,.075),v,Q*.56,.95,-1.703),I(new wn(.13,.37,.05,3,.062),l,Q*.56,.95,-1.716),I(new wn(.036,.27,.02,2,.016),f,Q*.56,.95,-1.742),I(new wn(.11,.06,.04,2,.02),x,Q*.56,.69,-1.707)}{let Q=new Or,me=.52,Te=1.15,K=1.66,ee=.07;Q.moveTo(-me+ee,Te),Q.lineTo(me-ee,Te),Q.absarc(me-ee,Te+ee,ee,-Math.PI/2,0),Q.lineTo(me,K-ee),Q.absarc(me-ee,K-ee,ee,0,Math.PI/2),Q.lineTo(-me+ee,K),Q.absarc(-me+ee,K-ee,ee,Math.PI/2,Math.PI),Q.lineTo(-me,Te+ee),Q.absarc(-me+ee,Te+ee,ee,Math.PI,Math.PI*1.5);let re=new oa(Q,6),se=re.attributes.position,F=re.attributes.uv;for(let ge=0;ge<se.count;ge++){let j=se.getX(ge),U=se.getY(ge),A=(U-Te)/(K-Te);F.setXY(ge,(j+me)/(2*me),A),se.setX(ge,j*(1-.08*A))}I(Em(re,1),S,0,0,-O-.004,0,Math.PI,0)}I(new wn(.36,.04,.03,2,.014),d,0,1.69,-1.712),I(He((Q,me)=>{let Te=1.19-me*.36,K=he(Te),ee=.56-.07*me,re=.005,se=(he(Te+re)-he(Te-re))/(2*re),F=Math.hypot(1,se);return[(Q*2-1)*ee,K,Te,0,1/F,-se/F]},2,7,0,!1),S,0,0,0),I(new wn(.46,.25,.012,2,.05),a("#86bdb0",.6),0,.73,-1.701),I(new nn(.34,.17),M,0,.72,-1.709,0,Math.PI,0),I(new wn(.25,.034,.03,2,.013),v,0,.9,-1.708);for(let Q of[-1,1])I(new Vt(.01,.56,.006),L,Q*.47,.85,-1.703);I(new Vt(.95,.01,.006),L,0,.565,-1.703),I(new wn(1.5,.2,.26,3,.08),c,0,.44,-1.6),I(new wn(1.38,.08,.22,2,.03),h,0,.33,-1.61);for(let Q of[-1,1])I(new Vt(.13,.035,.01),W,Q*.56,.44,-1.731);I(new di(.036,.036,.12,12),v,.46,.29,-1.68,Math.PI/2,0,0),I(new di(.024,.024,.124,10),C,.46,.29,-1.68,Math.PI/2,0,0);for(let Q of[-1,1])I(new wn(.4,.26,.04,2,.06),h,Q*.42,.85,1.702),I(new di(.105,.105,.03,16),p,Q*.46,.85,1.72,Math.PI/2,0,0),I(new di(.055,.055,.03,12),p,Q*.3,.85,1.718,Math.PI/2,0,0),I(new wn(.1,.06,.04,2,.015),x,Q*.52,.66,1.705),I(new Vt(.46,.014,.014),C,Q*.25,1.215,1.2,-.3,Q*.12,0);I(new wn(.36,.12,.03,2,.03),C,0,.84,1.704);for(let Q=0;Q<3;Q++)I(new Vt(.32,.012,.012),L,0,.805+Q*.035,1.722);I(new wn(1.52,.24,.22,2,.07),h,0,.44,1.62),I(new Vt(.7,.07,.02),C,0,.4,1.732),I(new Vt(.34,.17,.01),a("#f0cc38",.3),0,.62,1.733),I(new Vt(.3,.05,.004),a("#2f5a2f",.1),0,.6,1.739),y=!0;for(let[Q,me]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){I(new di(.29,.29,.19,24),m,Q,.29,me,0,0,Math.PI/2),I(new di(.195,.195,.194,20),D,Q,.29,me,0,0,Math.PI/2),I(new di(.155,.155,.198,16),z,Q,.29,me,0,0,Math.PI/2);for(let Te=0;Te<5;Te++){let K=Te/5*Math.PI*2+.3;I(new Vt(.202,.03,.15),D,Q,.29-.085*Math.sin(K),me+.085*Math.cos(K),K,0,0)}I(new di(.045,.045,.206,10),g,Q,.29,me,0,0,Math.PI/2)}y=!1;for(let[Q,me]of T){let Te=new gt(Hf(me),Q);Te.castShadow=Q!==S&&Q!==M&&Q!==d&&Q!==p&&Q!==f,Te.receiveShadow=!0,t.add(Te)}{let Q=new gt(Hf(E),o);Q.castShadow=Q.receiveShadow=!0,i.add(Q)}{let Te=document.createElement("canvas");Te.width=48,Te.height=96;let K=Te.getContext("2d"),ee=K.createImageData(48,96);for(let se=0;se<96;se++)for(let F=0;F<48;F++){let ge=Math.max(0,Math.abs((F+.5)/48-.5)*2.1-.62),j=Math.max(0,Math.abs((se+.5)/96-.5)*2.05-.78),U=Math.hypot(ge/.42,j/.24),A=Math.max(0,1-U),G=(se*48+F)*4;ee.data[G]=ee.data[G+1]=ee.data[G+2]=Math.round(255*A*A*(3-2*A)),ee.data[G+3]=255}K.putImageData(ee,0,0);let re=new gt(new nn(2.2,4.1),new on({color:0,alphaMap:new $n(Te),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));re.rotation.x=-Math.PI/2,re.position.y=.03,re.renderOrder=3,i.add(re)}let Me=new Jt;Me.position.set(.02,1.19,-1.716),t.add(Me);let Le=new Vt(.52,.026,.02);Le.translate(.27,0,0);let we=new gt(_(Le,h),o);we.rotation.z=.18,Me.add(we);let Ge=0,Je=new fa(16773328,0,70,.55,.65,1.2);Je.position.set(0,.8,1.6),Je.target.position.set(0,0,18),t.add(Je,Je.target);let Be={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},mt=(Q,me)=>me*Math.tanh(Q/me);return{group:i,lamps:n,lampCol:s,head:Je,update(Q,me,Te,K=0,ee=null){if(ee){let re=mt(-ee.lat*.016,.045),se=mt(-ee.lon*.008,.03);Be.rv+=((re-Be.roll)*55-Be.rv*8)*Q,Be.roll+=Be.rv*Q,Be.pv+=((se-Be.pitch)*60-Be.pv*9)*Q+ee.kick,Be.pitch+=Be.pv*Q,Be.yv+=((ee.road-Be.y)*85-Be.yv*8)*Q+ee.jolt,Be.y+=Be.yv*Q,e.rotation.set(Be.pitch,0,Be.roll),e.position.y=.35+Be.y}if(Be.br+=((ee?ee.brake:0)-Be.br)*Math.min(1,Q*14),l.emissiveIntensity=.35+Te*3.2+Be.br*(1.7+Te*2),d.emissiveIntensity=Be.br*(2.4+Te*1.6),f.emissiveIntensity=1+Te*3+Be.br*(2+Te*2),K>.15||Ge%2.6>.01){Ge+=Q;let re=Ge%2.6/2.6,se=ge=>ge*ge*(3-2*ge),F=re<.25?se(re/.25):re<.5?se(1-(re-.25)/.25):0;we.rotation.z=.18+F*2.5,K<=.15&&re>=.5&&(Ge=0)}Je.intensity=Te*60,p.emissiveIntensity=.15+Te*2.6}}}var co={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ai=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},q2=new xs(-1,1,1,-1,0,1),Gf=class extends yt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},Y2=new Gf,Cs=class{constructor(e){this._mesh=new gt(Y2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,q2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var uo=class extends ai{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$s.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Cs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fa=class extends ai{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},vu=class extends ai{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var xu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ie);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new uo(co),this.copyPass.material.blending=Vn,this.timer=new da}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fa!==void 0&&(o instanceof Fa?n=!0:o instanceof vu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var _u=class extends ai{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ee}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Am={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ho=class i extends ai{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new Ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,o,{type:pn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let m=new Ut(r,o,{type:pn,depthBuffer:!1});m.texture.name="UnrealBloomPass.h"+h,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);let g=new Ut(r,o,{type:pn,depthBuffer:!1});g.texture.name="UnrealBloomPass.v"+h,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),r=Math.round(r/2),o=Math.round(o/2)}let a=Am;this.highPassUniforms=$s.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=$s.clone(co.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:co.vertexShader,fragmentShader:co.fragmentShader,premultipliedAlpha:!0,blending:Qi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ee,this._oldClearAlpha=1,this._basic=new on,this._fsQuad=new Cs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],c=o+1<e?t[o+1]:0,u=a+c;s.push((o*a+(o+1)*c)/u),r.push(u)}return new _t({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};ho.BlurDirectionX=new Ie(1,0);ho.BlurDirectionY=new Ie(0,1);var Wf=class extends ai{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Ut(4,4,{type:pn,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),this.mat=new _t({uniforms:{tDiffuse:{value:null},uTexel:{value:new Ie(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new Cs(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},Z2={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Ie(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Ie(1/1280,1/720)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    // tone mapping + sRGB output and the anime grade in ONE full-screen pass (was OutputPass + a separate grade pass)
    #include <tonemapping_pars_fragment>
    uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uSunVis, uDay, uWarm, uTime, uAspect, uVig, uSat; varying vec2 vUv;
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
      c += vec3(-0.014, 0.0, 0.03) * (1.0 - l) + vec3(0.03, 0.014, -0.018) * l * uDay;
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
    }`};function Rm(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new Ie),a=new Ut(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:pn,samples:n}),c=new xu(i,a);c.addPass(new _u(e,t));let u=new Wf;c.addPass(u);let h=new ho(new Ie(o.x*r*.5,o.y*r*.5),.42,.55,.86);c.addPass(h);let m=new uo(Z2);m.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},m.material.toneMapped=!1,c.addPass(m);let g=c.render.bind(c);return c.render=v=>{m.uniforms.toneMappingExposure.value=i.toneMappingExposure,g(v)},{composer:c,bloom:h,grade:m,refl:u}}function Cm(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let K=0;K<2;K++){let ee=s.getChannelData(K);for(let re=0;re<n;re++)ee[re]=(Math.random()*2-1)*Math.pow(1-re/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=900,a.Q.value=.3;let c=e.createGain();c.gain.value=.11,a.connect(c),c.connect(t),c.connect(r);let u=(K,ee)=>{let re=e.createBuffer(1,e.sampleRate*K,e.sampleRate),se=re.getChannelData(0),F=0;for(let ge=0;ge<se.length;ge++)ee?(F=(F+.02*(Math.random()*2-1))/1.02,se[ge]=F*3.5):se[ge]=Math.random()*2-1;return re},h=(K,ee,re)=>{let se=e.createBufferSource();se.buffer=K,se.loop=!0;let F=e.createBiquadFilter();F.type=ee,F.frequency.value=re;let ge=e.createGain();return ge.gain.value=0,se.connect(F),F.connect(ge),ge.connect(t),se.start(),{f:F,g:ge}},m=h(u(2,!0),"lowpass",400),g=h(u(3,!1),"lowpass",700);g.g.connect(r);let v=h(u(2,!1),"bandpass",5200);v.f.Q.value=6;let _=h(u(2,!0),"lowpass",240),S=h(u(3,!1),"bandpass",2600);S.f.Q.value=.35;let l=h(u(2,!0),"lowpass",520),f=h(u(2,!1),"bandpass",1500);f.f.Q.value=.7;let d=e.createBiquadFilter(),x=e.createGain(),p=e.createOscillator(),M=e.createOscillator(),T=e.createGain();p.type="sawtooth",M.type="triangle",d.type="lowpass",d.frequency.value=320,d.Q.value=.6,x.gain.value=0,T.gain.value=.5,p.connect(d),M.connect(T),T.connect(d),d.connect(x),x.connect(t),p.start(),M.start();let E=h(u(3,!1),"bandpass",750);E.f.Q.value=.6;let y=h(u(3,!0),"lowpass",420),b=h(u(2,!0),"lowpass",140),w=u(.03,!1),R=0;function P(K,ee){let re=e.createBufferSource(),se=e.createBiquadFilter(),F=e.createGain();re.buffer=w,se.type="bandpass",se.frequency.value=1800+Math.random()*2600,se.Q.value=1.2,F.gain.setValueAtTime(ee*(.02+Math.random()*.03),K),F.gain.exponentialRampToValueAtTime(1e-4,K+.03),re.connect(se),se.connect(F),F.connect(t),re.start(K),re.stop(K+.04)}let I=0,C=0;function L(K,ee){let re=e.createOscillator(),se=e.createOscillator(),F=e.createGain(),ge=e.createBiquadFilter();ge.type="bandpass",ge.frequency.value=1150,ge.Q.value=2.2,re.type="square",re.frequency.value=745,se.type="triangle",se.frequency.value=1490,F.gain.setValueAtTime(0,K),F.gain.linearRampToValueAtTime(.085*ee,K+.004),F.gain.exponentialRampToValueAtTime(1e-4,K+.3),re.connect(ge),se.connect(ge),ge.connect(F),F.connect(t),F.connect(r),re.start(K),se.start(K),re.stop(K+.33),se.stop(K+.33)}function D(K,ee){let re=e.createOscillator(),se=e.createGain();re.type="sine",re.frequency.setValueAtTime(110,K),re.frequency.exponentialRampToValueAtTime(48,K+.12),se.gain.setValueAtTime(1e-4,K),se.gain.linearRampToValueAtTime(.22*ee,K+.006),se.gain.exponentialRampToValueAtTime(1e-4,K+.17),re.connect(se),se.connect(t),re.start(K),re.stop(K+.2)}let z=e.createGain();z.gain.value=1,z.connect(t);let W=e.createGain();W.gain.value=.35,z.connect(W),W.connect(r);let O=(K=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return z;let ee=e.createStereoPanner();return ee.pan.value=K,ee.connect(z),ee};function H(K,ee,re,se,F,ge,j="sine",U=0){let A=e.createOscillator(),G=e.createGain();if(A.type=j,A.frequency.setValueAtTime(ee,K),A.frequency.exponentialRampToValueAtTime(re,K+se),U){let Y=e.createOscillator(),B=e.createGain();Y.frequency.value=U,B.gain.value=ee*.012,Y.connect(B),B.connect(A.frequency),Y.start(K),Y.stop(K+se+.05)}return G.gain.setValueAtTime(1e-4,K),G.gain.linearRampToValueAtTime(F,K+Math.min(.04,se*.25)),G.gain.setValueAtTime(F,K+se*.7),G.gain.exponentialRampToValueAtTime(1e-4,K+se),A.connect(G),G.connect(ge),A.start(K),A.stop(K+se+.02),G}function V(K,ee){let re=O(),se=2+Math.floor(Math.random()*4),F=3200+Math.random()*1500;for(let ge=0;ge<se;ge++){let j=K+ge*(.09+Math.random()*.07);H(j,F,F*(1.2+Math.random()*.3),.06,ee*.022,re)}}function ie(K,ee){let re=O();H(K,1120,1390,1,ee*.03,re,"sine",5.5),H(K+1.15,2350,2150,.14,ee*.03,re),H(K+1.32,1700,1520,.13,ee*.028,re),H(K+1.5,2750,2480,.36,ee*.032,re)}function he(K,ee){let re=O(),se=1+Math.floor(Math.random()*3);for(let F=0;F<se;F++){let ge=K+F*.48,j=e.createOscillator(),U=e.createBiquadFilter(),A=e.createGain();j.type="sawtooth",j.frequency.setValueAtTime(560,ge),j.frequency.exponentialRampToValueAtTime(420,ge+.32),U.type="bandpass",U.frequency.value=1150,U.Q.value=1.6,A.gain.setValueAtTime(1e-4,ge),A.gain.linearRampToValueAtTime(ee*.03,ge+.03),A.gain.exponentialRampToValueAtTime(1e-4,ge+.36),j.connect(U),U.connect(A),A.connect(re),j.start(ge),j.stop(ge+.4)}}function Qe(K,ee){let re=O(),se=2+Math.floor(Math.random()*2);for(let F=0;F<se;F++)H(K+F*.42,1750,1150,.36,ee*.022,re,"triangle",11)}function Re(K,ee){let re=O(),se=e.createOscillator(),F=e.createBiquadFilter(),ge=e.createGain(),j=240+Math.random()*220,U=5+Math.floor(Math.random()*4);se.type="square",se.frequency.value=j,F.type="bandpass",F.frequency.value=j*2.4,F.Q.value=3,ge.gain.setValueAtTime(1e-4,K);for(let A=0;A<U;A++){let G=K+A*.038;ge.gain.linearRampToValueAtTime(ee*.014,G+.008),ge.gain.linearRampToValueAtTime(1e-4,G+.028)}se.connect(F),F.connect(ge),ge.connect(re),se.start(K),se.stop(K+U*.038+.05)}function He(K,ee){let re=O(),se=4300+Math.random()*700;for(let F=0;F<3;F++)H(K+F*.055,se,se*1.01,.035,ee*.009,re)}function J(K,ee){let re=O(0);for(let[se,F,ge]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let j=e.createOscillator(),U=e.createGain();j.type="sine",j.frequency.value=se,j.detune.value=(Math.random()-.5)*8,U.gain.setValueAtTime(1e-4,K),U.gain.linearRampToValueAtTime(ee*.05*F,K+.03),U.gain.exponentialRampToValueAtTime(1e-4,K+ge),j.connect(U),U.connect(re),j.start(K),j.stop(K+ge+.1)}}function Z(K,ee){let re=O();for(let se of[K,K+.22])H(se,2650,2600,.5,ee*.018,re),H(se,3950,3900,.35,ee*.008,re)}let Me={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Le=K=>K>1e-4?-Math.log(1-Math.random()*.98)/K:1e9,we=K=>440*Math.pow(2,(K-69)/12),Ge=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Je=[72,74,76,79,81,84,86,88],Be=0,mt=e.currentTime+.2,Q=e.currentTime+3;function me(K){let ee=Ge[Be++%Ge.length],re=11;for(let se of ee)for(let F of[-5,5]){let ge=e.createOscillator(),j=e.createGain();ge.type=F<0?"sine":"triangle",ge.frequency.value=we(se),ge.detune.value=F,j.gain.setValueAtTime(0,K),j.gain.linearRampToValueAtTime(.18,K+3.5),j.gain.setValueAtTime(.18,K+re-4),j.gain.linearRampToValueAtTime(0,K+re+1),ge.connect(j),j.connect(a),ge.start(K),ge.stop(K+re+1.2)}}function Te(K){let ee=Je[Math.floor(Math.random()*Je.length)],re=e.createOscillator(),se=e.createOscillator(),F=e.createGain(),ge=e.createGain();re.type=se.type="sine",re.frequency.value=we(ee),se.frequency.value=we(ee)*2.01,ge.gain.value=.25,se.connect(ge),ge.connect(F),F.gain.setValueAtTime(0,K),F.gain.linearRampToValueAtTime(.05,K+.02),F.gain.exponentialRampToValueAtTime(1e-4,K+4),re.connect(F),F.connect(r),F.connect(t),re.start(K),se.start(K),re.stop(K+4.2),se.stop(K+4.2)}return{ac:e,muted:!1,tyres:f,engG:x,bump(K){D(e.currentTime+.01,K)},update(K,ee,re,se={}){let F=e.currentTime;if((se.bell||0)>.01)for(I<F&&(I=F+.02);I<F+.12;)L(I,se.bell),I+=.41;let ge=se.rain||0;S.g.gain.setTargetAtTime(ge*.05,F,.6),l.g.gain.setTargetAtTime(ge*.05,F,.6);let j=(se.wetRoad||0)*Math.min(1,K)**1.5,U=.8+.2*Math.sin(F*2.3)*Math.sin(F*.9+1);if(f.g.gain.setTargetAtTime(j*.045*U,F,.4),f.f.frequency.setTargetAtTime(900+1500*Math.min(K,2),F,.4),ge>.05&&se.roof)for(R<F&&(R=F+.02);R<F+.12;)P(R,ge),R+=.04+Math.random()*.12/ge;let A=se.water||0,G=.6+.4*Math.sin(F*1.3)*Math.sin(F*.37);E.g.gain.setTargetAtTime(A*.035*G,F,.25),E.f.frequency.setTargetAtTime(600+400*G,F,.25);let Y=.35+.65*Math.pow(.5+.5*Math.sin(F*.23)*Math.sin(F*.071+2),2),B=se.rush||0;y.g.gain.setTargetAtTime(((ee.mountain||0)+(ee.snow||0)*.7)*.06*Y+B*.055,F,.8),y.f.frequency.setTargetAtTime(260+420*Y+B*500,F,.8);let le=se.train||0;if(_.g.gain.setTargetAtTime(le*.16,F,.2),le>.04)for(C<F&&(C=F+.02);C<F+.12;)D(C,le),D(C+.15,le*.8),C+=1.2;for(;mt<F+1;)me(mt),mt+=8;Q<F+.5&&(Te(Q),Q+=1.5+Math.random()*4.5);let ye=se.tunnel||0;{let X=se.speed||0,Pe=se.load||0,fe=850+2400*(1-Math.exp(-X/15))+Math.max(0,X-25)*60+Pe*1300,De=fe/40;p.frequency.setTargetAtTime(De,F,.25),M.frequency.setTargetAtTime(De*2,F,.25),d.frequency.setTargetAtTime(200+fe*.08+Pe*260,F,.3),x.gain.setTargetAtTime((.008+.01*Math.min(1,X/15)+.024*Pe)*(1-.6*(se.rush||0))*(se.roof===!1?.5:1)*(1+.7*ye),F,.3)}m.g.gain.setTargetAtTime((.03+K*.06)*(1+1.6*ye),F,.35),m.f.frequency.setTargetAtTime((250+K*500)*(1+.5*ye),F,.35),b.g.gain.setTargetAtTime(ye*.07,F,.4),o.gain.setTargetAtTime(.55+.6*ye,F,.4);let oe=.5+.5*Math.sin(F*.55)*Math.sin(F*.21+1);g.g.gain.setTargetAtTime(ee.coast*(.012+oe*.05),F,.3),g.f.frequency.setTargetAtTime(400+oe*900,F,.3);let ue=1-Math.min(1,ge*1.4),pe=1-re,Ce=se.dusk||0,xe=ee.snow||0,_e=1-xe,Ue={sparrow:re*ue*.22*(.3+ee.city*.5+ee.sakura+ee.country*.8+ee.coast*.2+(ee.mountain||0)*.5)*(1-xe*.8),uguisu:re*ue*ee.sakura*.06,crow:ue*(Ce*.14+re*(ee.city+ee.country+(ee.mountain||0)*1.5+xe*2.5)*.012),gull:re*ee.coast*ue*.16,frog:pe*(ee.country*5+ee.sakura*.6+ee.coast*.3)*(1+ge*.6)*_e,cricket:pe*ue*(1.6-ee.city*1.1+(ee.mountain||0)*.8)*_e,bike:re*ue*ee.city*.014,bell:xe*.022+(ee.mountain||0)*.006},Ke={sparrow:V,uguisu:ie,crow:he,gull:Qe,frog:Re,cricket:He,bike:Z,bell:J};for(let X in Ue)F<Me[X]||(Ue[X]>1e-4&&Ke[X](F+.05,.6+Math.random()*.4),Me[X]=F+Math.max(.12,Le(Ue[X]||1e-6)));let et=.5+.5*Math.sin(F*7)*Math.sin(F*.4);v.g.gain.setTargetAtTime((ee.country+ee.sakura*.3)*re*.006*et*(1-(ee.snow||0)),F,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function Pm(i){let t=new nn(.075,.05),n=new on({color:16777215,side:Tn}),s=new Ki(t,n,420);s.frustumCulled=!1,s.count=0;let r=new Ee("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(p=>new Ee(p));for(let p=0;p<420;p++)s.setColorAt(p,r);let a=Array.from({length:420},()=>({p:new k(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),c=new it,u=new Sn,h=new Zn,m=new k(1,1,1),g=new k,v=90,_=new Float32Array(v*3),S=Array.from({length:v},()=>({p:new k(1e9,0,0),ph:Math.random()*6.28})),l=new yt;l.setAttribute("position",new Bt(_,3));let f=new Fr({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Qi,opacity:0}),d=new Zo(l,f);d.frustumCulled=!1;let x=(p,M,T,E,y)=>{let b=y?8+Math.random()*42:-4+Math.random()*50,w=(Math.random()-.5)*40;p.p.set(M.x+T.x*b+E.x*w,M.y-1+Math.random()*9,M.z+T.z*b+E.z*w)};return{group:[s,d],shift(p,M){for(let T of a)T.p.x-=p,T.p.z-=M;for(let T of S)T.p.x-=p,T.p.z-=M},update(p,M,T,E,y,b,w,R,P,I=0){let C=Math.floor(420*Math.min(1,b*1.1+I*.55)),L=!1;s.count=C;for(let z=0;z<C;z++){let W=a[z];g.subVectors(W.p,T);let O=g.x*E.x+g.z*E.z,H=g.x*y.x+g.z*y.z;if(W.p.x>1e8||O<-6||O>55||Math.abs(H)>24||W.p.y<w-.5){x(W,T,E,y,W.p.x<1e8);let V=Math.random()*(b+I)<I;(V!==W.leaf||V)&&(W.leaf=V,s.setColorAt(z,V?o[Math.floor(Math.random()*o.length)]:r),L=!0)}W.p.y-=W.v*p,W.p.x+=Math.sin(M*.7+W.ph)*.4*p+.25*p,W.p.z+=Math.cos(M*.5+W.ph)*.3*p,h.set(M*W.sp+W.ph,M*W.sp*.7,W.ph),u.setFromEuler(h),m.setScalar(W.leaf?1.9:1),c.compose(W.p,u,m),s.setMatrixAt(z,c)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let D=R*P;if(f.opacity=D,d.visible=D>.01,d.visible){for(let z=0;z<v;z++){let W=S[z];g.subVectors(W.p,T);let O=g.x*E.x+g.z*E.z,H=g.x*y.x+g.z*y.z;if(W.p.x>1e8||O<-4||O>60||Math.abs(H)>30){let V=2+Math.random()*55,ie=(Math.random()-.5)*55;W.p.set(T.x+E.x*V+y.x*ie,w+.3+Math.random()*2.2,T.z+E.z*V+y.z*ie)}W.p.x+=Math.sin(M*.6+W.ph*3)*.3*p,W.p.y+=Math.sin(M*.9+W.ph)*.2*p,W.p.z+=Math.cos(M*.5+W.ph*2)*.3*p,_[z*3]=W.p.x,_[z*3+1]=W.p.y,_[z*3+2]=W.p.z}l.attributes.position.needsUpdate=!0}}}}var ht=new URLSearchParams(location.search),fo=ht.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();fo&&document.body.classList.add("embed");ht.has("shot")&&document.body.classList.add("shot");Q0(ht.has("seed")?parseInt(ht.get("seed")):Math.random()*1e9|0);ip(ht.get("env")||"city");var An=i=>document.getElementById(i),po=i=>{let e=An("loading");e&&(e.textContent=i)};async function $2(){await new Promise(ce=>setTimeout(ce,30));let i=An("c"),e=new Yc({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ht.get("q")||(fo||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?fo?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=jt,e.toneMapping=pa,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Ws,e.debug.checkShaderErrors=ht.has("debug");let r=new Hs;r.fog=new Wo(13032946,.0019,700);let o=new Rn(52,innerWidth/innerHeight,.5,7e3),a=new Vr(16777215,3);a.castShadow=!0;let c=n==="low"?1024:n==="mid"?1536:2048;a.shadow.mapSize.set(c,c),mf(ht.has("pcf")?parseInt(ht.get("pcf")):1);let u=62,h=a.shadow.camera,m=new it,g=new it;Object.assign(h,{left:-u,right:u,top:u,bottom:-u,near:1,far:420});let v=new k(0,1,0),_=new k,S=new k,l=new k,f=new k(0,1,0),d=new k(0,150,60),x=new k,p=new k,M=null,T=0,E=0,y=0;a.shadow.updateMatrices=function(){h.position.copy(d),h.lookAt(x),h.updateMatrixWorld(),h.updateProjectionMatrix(),g.multiplyMatrices(h.matrixWorldInverse,m).multiply(h.matrixWorld),h.projectionMatrix.multiply(g),h.projectionMatrixInverse.copy(h.projectionMatrix).invert(),this._updateMatrix(h,this.matrix,this._frustum)};let b=!0;a.shadow.bias=-4e-4;let w=()=>{a.shadow.normalBias=ht.has("nb")?parseFloat(ht.get("nb")):1.5*2*u/a.shadow.mapSize.x};w();{let[ce,ot]=(ht.get("graze")||"0,0.12").split(",").map(Number);hp(ce,ot)}r.add(a,a.target);let R=new Vr(16777215,0);R.castShadow=n!=="low"&&!ht.has("nocarsh");{let ce=ht.has("carsm")?parseInt(ht.get("carsm")):n==="high"?512:384;R.shadow.mapSize.set(ce,ce)}if(Object.assign(R.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),R.shadow.bias=-2e-4,R.shadow.normalBias=.025,r.add(R,R.target),R.castShadow){let ce=a.shadow.getFrustum(),ot=R.shadow.getFrustum();for(let Ze of[gt,Yo]){let Dt=Ze.prototype.intersectsFrustum;Ze.prototype.intersectsFrustum=function(wt){return wt===ot?this.userData.car===!0:(wt!==ce||this.userData.car!==!0)&&Dt.call(this,wt)}}}let P=new ua(10799359,13154464,1.6);r.add(P),po("painting the town\u2026"),await new Promise(ce=>setTimeout(ce,10));let I=Ep();Pp(I);let C=wp(e);Bp(C.cells),We.uTuftV.value.set(C.tuftV[0],C.tuftV[1]);let L=vp(I.textures(e),C.tex),D=dp();D.update(e,0,0,0,0),po("painting the clouds\u2026"),await new Promise(ce=>setTimeout(ce,10)),Op(ht.has("leafd")?parseFloat(ht.get("leafd")):n==="high"?.72:.62),Hp();let z=new eu,W=bm(),O=Sm(),H=new pu(r,z,L,W,O),V=hm();r.add(V);let ie=dm(fm(e));r.add(ie.group);let he=pm();r.add(he.group);let Qe=Mm();r.add(Qe.mesh);let Re=wm();Re.group.rotation.order="YXZ",r.add(Re.group),Re.group.traverse(ce=>{ce.userData.car=!0});let He=Pm(L.glowTex);He.group.forEach(ce=>r.add(ce));let J=ht.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),Z=Rm(e,r,o,{msaa:J==="msaa"?n==="high"?4:2:0,fxaa:J==="fxaa"});We.uReflTex.value=Z.refl.rt.texture;let Me=new k,Le=new k,we=ht.get("refl")||"auto",Ge=ht.has("backlit")?parseFloat(ht.get("backlit")):1,Je=ht.has("lightson")?parseFloat(ht.get("lightson")):-1,Be=new k,mt=ht.has("haze")?parseFloat(ht.get("haze")):1,Q=_p();r.add(Q.group);let me=yp();r.add(me.group);let Te=mm(ht),K=vm(),ee=gm();r.add(K.mesh,ee.mesh);let re=xm();r.add(re.mesh);let se=_m();r.add(se.mesh);let F=new Ee,ge=new Ee,j=new St,U=ym();r.add(U.mesh);let A=Te.W.rain,G=.4,Y=5.5,B={s:Math.max(100,parseFloat(ht.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:zt(parseFloat(ht.get("t"))||.4,0,.999),todPaused:ht.has("freeze"),dist:0,spray:ht.has("nospray")?0:1,cam:{low:1,eye:2,top:3,film:4}[ht.get("cam")]??(fo?4:0)},le=!1;po("building the road\u2026"),await new Promise(ce=>setTimeout(ce,10));let ye=fo?620:H.ahead;H.ahead=260;let oe=ht.has("detail")?parseFloat(ht.get("detail")):380,ue=ht.has("farleaf")?parseFloat(ht.get("farleaf")):540;for(;H.update(B.s,1e9););H.flush(),H.ahead=ye;{po("preparing the light\u2026"),await new Promise(wt=>setTimeout(wt,10));let ce=new Jt,ot=new yt;ot.setAttribute("position",new $e([0,0,0,.01,0,0,0,.01,0],3)),ot.setAttribute("normal",new $e([0,1,0,0,1,0,0,1,0],3)),ot.setAttribute("uv",new $e([0,0,1,0,0,1],2)),ot.setAttribute("color",new $e([1,1,1,1,1,1,1,1,1],3));let Ze=[L.color,L.atlas,L.foliage,L.leaf,L.lamp,L.sig,L.sodium,L.decal,L.pool,W,O];for(let wt=0;wt<Gi.length;wt++)Ze.push(Pa([Gi[wt]])),Ze.push(Pa([Gi[wt],Gi[(wt+1)%Gi.length]]));for(let wt of Ze){let ct=new gt(ot,wt);ct.castShadow=ct.receiveShadow=!0,ct.frustumCulled=!1,ce.add(ct)}ce.position.set(0,0,0),r.add(ce),a.target.position.set(0,0,0),a.position.set(0,150,60);let Dt=[K.mesh,ee.mesh,re.mesh,se.mesh,me.group,Q.group,Qe.mesh].filter(wt=>!wt.visible);for(let wt of Dt)wt.visible=!0;e.setRenderTarget(Z.composer.readBuffer),e.compile(r,o),e.render(r,o),e.setRenderTarget(null);for(let wt of Dt)wt.visible=!1;r.remove(ce),ot.dispose(),Z.bloom.enabled=Z.refl.enabled=!0,Z.composer.render(0),Z.bloom.enabled=Z.refl.enabled=!1}let pe={k:Math.ceil((B.s-js)/Ks),phase:"idle",raise:1,decided:!1,t2:0},Ce={},xe={},_e={},Ue=new k,Ke=new k,et=new k,X=!1,Pe=new k,fe=new k,De=An("spd"),ze=An("dist"),Se=An("clock"),tt=An("zone"),je=An("start"),It=An("hint"),lt=null,Xn=null,jn=0,Ba=0;function yu(ce){!le||ce===Xn||(Xn=ce,tt.querySelector(".jp").textContent=wa[ce].jp,tt.querySelector(".en").textContent=wa[ce].en,tt.classList.add("on"),clearTimeout(jn),jn=setTimeout(()=>tt.classList.remove("on"),5200))}function rr(){if(!le){if(le=!0,document.body.classList.remove("pre"),!ht.has("auto"))try{lt=Cm(),lt&&lt.ac.resume()}catch{lt=null}je.style.opacity=0,setTimeout(()=>je.remove(),1500),fo||(It.style.opacity=.75,setTimeout(()=>It.style.opacity=0,9e3))}}let _n={};addEventListener("keydown",ce=>{_n[ce.key]=!0,(ce.key==="m"||ce.key==="M")&&go(),(ce.key==="t"||ce.key==="T")&&Ni(),(ce.key==="c"||ce.key==="C")&&xo(),(ce.key==="r"||ce.key==="R")&&yo(),!le&&(ce.key===" "||ce.key==="Enter")&&rr()}),addEventListener("keyup",ce=>{_n[ce.key]=!1});let rn=null;i.addEventListener("pointerdown",ce=>{rn={id:ce.pointerId,x:ce.clientX,y:ce.clientY,sy:ce.clientY,sc:B.mult}});let mo=ce=>zt(ce.sc*Math.exp(-((ce.y-ce.sy)/innerHeight)*3.4),G,Y);addEventListener("pointermove",ce=>{rn&&ce.pointerId===rn.id&&(rn.x=ce.clientX,rn.y=ce.clientY,B.mult=mo(rn))}),addEventListener("pointerup",()=>{rn=null}),addEventListener("pointercancel",()=>{rn=null}),i.addEventListener("touchstart",ce=>{let ot=ce.changedTouches[0];rn={id:"touch",x:ot.clientX,y:ot.clientY,sy:ot.clientY,sc:B.mult},ce.preventDefault()},{passive:!1}),i.addEventListener("touchmove",ce=>{if(!rn)return;let ot=ce.changedTouches[0];rn.x=ot.clientX,rn.y=ot.clientY,B.mult=mo(rn),ce.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{rn=null}),i.addEventListener("touchcancel",()=>{rn=null});function go(){lt&&(lt.toggle(),An("snd").style.opacity=lt.muted?.4:1)}function Ni(){B.todPaused=!B.todPaused,An("tim").style.opacity=B.todPaused?.4:1}let Ps=[0,1,2,4],vo={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function xo(){B.cam=Ps[(Ps.indexOf(B.cam)+1)%Ps.length],An("cam").textContent=vo[B.cam]||"\u25D0",B.cam===4&&os()}let Is=["chase","side","road","crane","eye","side","road"],kt={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function os(){let ce;do ce=Is[Math.floor(Math.random()*Is.length)];while(ce===kt.last);{let ot=mi(B.s+60);ot&&Math.abs(B.s+60-ot.s)<tn+120&&(ce=Math.random()<.6?"chase":"eye")}if(Object.assign(kt,{type:ce,last:ce,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),ce==="road"){let ot=B.s+40+Math.random()*18,Ze=In(ot,"rw"),Dt=Math.random()<.6?-1:1,wt=Dt*(Ze+(Dt<0?.9:1.3)),ct=z.at(ot,{}),Ht=ct.y+no(ot,wt,ct.y,Ze);kt.anchor={x:ct.x+ct.rx*wt,y:Math.max(Ht,ct.y)+1.05,z:ct.z+ct.rz*wt,s:ot}}X=!1}let _o={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function yo(){An("wx").textContent=_o[Te.cycle()]}An("wx").textContent=_o[Te.W.mode],An("cam").textContent=vo[B.cam]||"\u25D0",B.cam===4&&os(),An("wx").onclick=ce=>{ce.stopPropagation(),yo()},An("snd").onclick=ce=>{ce.stopPropagation(),go()},An("tim").onclick=ce=>{ce.stopPropagation(),Ni()},An("cam").onclick=ce=>{ce.stopPropagation(),xo()};let Oa=0,Mu=ce=>{let ot=performance.now();ot-Oa<120||(Oa=ot,ce.cancelable&&ce.type!=="click"&&ce.preventDefault(),rr())};for(let ce of["touchstart","pointerdown","mousedown","click"])je.addEventListener(ce,Mu,{passive:!1});let bu=()=>{lt&&lt.ac.state!=="running"&&lt.ac.resume()};for(let ce of["touchend","click","keydown"])addEventListener(ce,bu,{passive:!0});document.addEventListener("visibilitychange",()=>{lt&&(document.hidden?lt.ac.suspend():lt.ac.resume())});let Ls=!1,Mo="",N=52,$=0;function ae(){let ce=innerWidth,ot=innerHeight,Ze=ce/ot,Dt=ce+"x"+ot+"@"+s;Dt!==Mo&&(Mo=Dt,e.setPixelRatio(s),e.setSize(ce,ot,!1),Z.composer.setPixelRatio(s),Z.composer.setSize(ce,ot),o.aspect=Ze,N=Ze>=1?52:zt(2*Math.atan(Math.tan(34*Math.PI/180)/Ze)*180/Math.PI,52,80),o.fov=N+$,o.updateProjectionMatrix(),Z.grade.uniforms.uAspect.value=Ze,Z.grade.uniforms.uTexel.value.set(1/Z.composer.readBuffer.width,1/Z.composer.readBuffer.height),We.uReflRes.value.set(Z.composer.readBuffer.width,Z.composer.readBuffer.height))}addEventListener("resize",()=>{Ls=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Ls=!0}),ae();let te=0;function ne(ce=!0){if(s>1.05)s=Math.max(1,s-.25),Ls=!0;else if(b)b=!1,Z.bloom.enabled=!1;else if(a.shadow.mapSize.x>1024)a.shadow.mapSize.set(1024,1024),w(),a.shadow.map&&(a.shadow.map.dispose(),a.shadow.map=null);else if(H.ahead>430)H.ahead=430;else return;if(te++,ce)try{localStorage.setItem("icd-q",String(te))}catch{}}try{let ce=parseInt(localStorage.getItem("icd-q")||"0");if(!ht.has("q"))for(let ot=0;ot<Math.min(ce,6);ot++)ne(!1);te=Math.max(te,ce||0)}catch{}let ke=performance.now(),Fe=0,Oe=0,qe=0,Ye=()=>1-ve.night,vt=0,nt=0,Ae=ht.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;Ae&&(Ae.gl=e.getContext(),Ae.tq=Ae.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let xt={p:-1,a:new k,b:new k,next:5},st={lat:0,lon:0,road:0,jolt:0,kick:0,u:B.u,vu:0,v:0,s:B.s,yaw:0,brake:0,rk:NaN,rb:null},Ft=new Ee(3.6,2.8,1.8),Lt=[-2.5335,-1.4665,1.4665,2.5335],mn=[1.12,-1.12],Xe=[-24.5,24.5];function yn(ce){requestAnimationFrame(yn);let ot=performance.now();Ls&&(Ls=!1,ae());let Ze=Math.min(.05,Math.max(0,(ce-ke)/1e3));ke=ce,Fe+=Ze,B.steer=0,(_n.ArrowLeft||_n.a||_n.A)&&(B.steer=-1),(_n.ArrowRight||_n.d||_n.D)&&(B.steer=1),(_n.ArrowUp||_n.w||_n.W)&&(B.mult=zt(B.mult*Math.exp(Ze*.9),G,Y)),(_n.ArrowDown||_n.s||_n.S)&&(B.mult=zt(B.mult*Math.exp(-Ze*.9),G,Y)),rn&&Math.abs(rn.y-rn.sy)<30&&(B.steer=rn.x<innerWidth/2?-1:1),B.steer&&(B.lastInput=ce,B.uHome=B.u);let Dt=Qr(pe.k);B.s-Dt>24&&(pe.k++,Dt=Qr(pe.k),Object.assign(pe,{phase:"idle",raise:1,decided:!1}));let wt=Aa(Dt),ct=Dt-B.s;wt&&!pe.decided&&ct<150&&(pe.decided=!0,ct>75&&le&&B.speed*B.speed/2.5<ct-14&&(ht.has("xing")||ri(pe.k,99)<.8)&&(pe.phase="warn",me.start(Dt,ri(pe.k,7)<.5?1:-1,16))),pe.phase==="warn"?(pe.raise=Math.max(0,pe.raise-Ze/6),me.st.cleared&&(pe.phase="clear",pe.t2=0)):pe.phase==="clear"?(pe.raise=Math.max(0,pe.raise-Ze/6),(pe.t2+=Ze)>2.2&&(pe.phase="raise")):pe.phase==="raise"&&(pe.raise=Math.min(1,pe.raise+Ze/5),pe.raise>=1&&(pe.phase="idle"));let Ht=pe.phase==="warn"||pe.phase==="clear"||pe.phase==="raise"&&pe.raise<.25,Qn=In(B.s,"speed")*B.mult*(le?1:.55);if(pe.phase!=="idle"&&pe.raise<.8&&ct>0){let Ne=ct-11.2,rt=Ne>0?Math.sqrt(2*1.25*Ne):0;Qn=Math.min(Qn,rt),B.speed=Math.min(B.speed,rt)}ht.has("park")&&(Qn=0,B.speed=0),B.speed+=(Qn-B.speed)*Math.min(1,Ze*.5),B.s+=B.speed*Ze,B.dist+=B.speed*Ze;let Rt=In(B.s,"rw");B.steer?B.u=zt(B.u+B.steer*Ze*2.4,-Rt+.85,Rt-.85):ce-B.lastInput>3e3&&(B.u+=(zt(B.uHome,-Rt+.85,Rt-.85)+Math.sin(Fe/11)*.1-B.u)*Math.min(1,Ze*.9)),!B.todPaused&&le&&(B.tod=(B.tod+Ze/480*(ve.night>.5?1.7:1))%1),lm(B.tod),Te.update(Ze);let Gt=Te.W.ov,Dn=Te.W.rain;um(Gt,Dn),A=zt(A+(Dn>.25?Ze/18:-Ze/120),0,1);let bo=performance.now();H.update(B.s,le?3.5:14);let Xf=performance.now();if(z.at(B.s,Ce),Math.abs(Ce.x-H.origin.x)>900||Math.abs(Ce.z-H.origin.z)>900){let Ne=Math.round(Ce.x)-H.origin.x,rt=Math.round(Ce.z)-H.origin.z;H.setOrigin(Math.round(Ce.x),Math.round(Ce.z)),Ue.x-=Ne,Ue.z-=rt,Ke.x-=Ne,Ke.z-=rt,He.shift&&He.shift(Ne,rt),U.shift(Ne,rt),re.shift(Ne,rt)}let _i=H.origin.x,yi=H.origin.z,Im=(z.at(B.s+1.5,_e).y-z.at(B.s-1.5,xe).y)/3,Lm=(_e.h-xe.h)/3;if(Re.group.position.set(Ce.x+Ce.rx*B.u-_i,Ce.y+.01,Ce.z+Ce.rz*B.u-yi),Ze>0){let Ne=st.vu+((B.u-st.u)/Ze-st.vu)*Math.min(1,Ze*6),rt=(Ne-st.vu)/Ze;st.u=B.u,st.vu=Ne,st.lat=rt-B.speed*B.speed*Lm,st.lon+=((B.speed-st.v)/Ze-st.lon)*Math.min(1,Ze*8),st.v=B.speed;let at=pe.phase!=="idle"&&ct>0&&ct<20&&B.speed<.5;if(st.brake=st.lon<-.6||at?1:st.lon>-.3?0:st.brake,st.yaw=-zt(Math.atan(Ne/Math.max(B.speed,6))*.8,-.1,.1),st.road=.004*Math.sin(B.s*.48)+.003*Math.sin(B.s*.86+1.3),st.jolt=st.kick=0,wt)for(let Tt=0;Tt<4;Tt++)for(let Wt=0;Wt<2;Wt++){let Xt=Dt+Lt[Tt]-mn[Wt];if(st.s<Xt&&B.s>=Xt){let qt=.05+Math.min(B.speed,25)*.004;st.jolt+=qt,st.kick+=Wt?qt*.9:-qt*.9,lt&&lt.bump(.25+Math.min(B.speed,25)/50)}}{let Tt=Math.round((B.s-to)/Qs);Tt!==st.rk&&(st.rk=Tt,st.rb=Wi(B.s));let Wt=st.rb;if(Wt)for(let Xt=0;Xt<2;Xt++)for(let qt=0;qt<2;qt++){let qn=Wt.s+Xe[Xt]-mn[qt];if(st.s<qn&&B.s>=qn){let Mn=.035+Math.min(B.speed,25)*.003;st.jolt+=Mn,st.kick+=qt?Mn*.9:-Mn*.9,lt&&lt.bump(.2+Math.min(B.speed,25)/60)}}}st.s=B.s}Re.group.rotation.set(-Math.atan(Im),Ce.h+st.yaw,0);let Ds=mi(B.s);Ds&&Math.abs(B.s-Ds.s)<700?(z.at(Ds.s-sn,_e),We.uTunA.value.set(_e.x-_i,_e.y,_e.z-yi),z.at(Ds.s+sn,_e),We.uTunB.value.set(_e.x-_i,_e.y,_e.z-yi),We.uTunR.value=In(Ds.s,"rw")+1.7):(We.uTunA.value.set(0,-1e4,0),We.uTunB.value.set(0,-1e4,0));let Su=Ds&&Math.abs(B.s+1-Ds.s)<sn-1.5?1:0;nt+=(Su-nt)*Math.min(1,Ze*(Su?1.6:.7)),We.uCarPos.value.set(Re.group.position.x+Ce.fx*1.7,Re.group.position.y+.8,Re.group.position.z+Ce.fz*1.7),We.uCarFwd.value.set(Ce.fx,-.05,Ce.fz).normalize(),We.uHead.value=Su,Re.update(Ze,B.speed,Math.max(ve.night,nt),Dn,st),Q.update(wt&&ct>-24&&ct<700?ou(z,Dt):null,H.origin,pe.raise,Ht,Fe),me.update(Ze,z,H.origin,At(.15,.8,ve.night),In(Dt,"rw")+3.2);let Tu=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ht.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(ht.has("rig")){let[Ne,rt,at,Tt]=ht.get("rig").split(",").map(Number);Object.assign(Tu[0],{back:Ne,up:rt,ahead:at,lookY:Tt})}let Ns=new k,So=6,qf=B.cam===2;if(B.cam===4){kt.t+=Ze;{let at=mi(B.s+30);at&&Math.abs(B.s+30-at.s)<tn+70&&kt.type!=="chase"&&kt.type!=="eye"&&(kt.type="chase",kt.t=0,kt.dur=20,X=!1)}(kt.t>kt.dur+(kt.type==="road"?8:0)||kt.type==="road"&&kt.anchor&&B.s>kt.anchor.s+24)&&os();let Ne=Re.group.position,rt=kt.type;if(rt==="chase"||rt==="eye"){let at=Tu[rt==="eye"?2:0];qf=rt==="eye",z.at(B.s-at.back,xe),z.at(B.s+at.ahead,_e),et.set(xe.x+xe.rx*B.u*at.cu-_i,xe.y+at.up,xe.z+xe.rz*B.u*at.cu-yi),Ns.set(_e.x+_e.rx*B.u*at.lu-_i,_e.y+at.lookY,_e.z+_e.rz*B.u*at.lu-yi)}else if(rt==="side"){z.at(B.s+1.5,xe);let at=Nt(B.s),Tt=at.city+at.sakura>.5,Wt=In(B.s,"rw"),Xt=kt.sideSign>0?Wt+(Tt?1.45:3.4):-(Wt+1.5),qt=xe.y+no(B.s+1.5,Xt,xe.y,Wt);et.set(xe.x+xe.rx*Xt-_i,Math.max(qt+1.55,xe.y+1.25),xe.z+xe.rz*Xt-yi),Ns.set(Ne.x+Ce.fx*2.5,Ne.y+.9,Ne.z+Ce.fz*2.5),So=4}else if(rt==="road"&&kt.anchor)et.set(kt.anchor.x-_i,kt.anchor.y,kt.anchor.z-yi),Ns.set(Ne.x,Ne.y+.85,Ne.z),So=30;else{z.at(B.s-20,xe),z.at(B.s+34,_e);let at=14+Math.min(kt.t,20)*.35;et.set(xe.x+xe.rx*B.u*.4-_i,xe.y+at,xe.z+xe.rz*B.u*.4-yi),Ns.set(_e.x-_i,_e.y+1,_e.z-yi),So=3}}else{let Ne=Tu[B.cam];z.at(B.s-Ne.back,xe),z.at(B.s+Ne.ahead,_e);let rt=B.u*Ne.cu,at=rt+(Ne.side||0);et.set(xe.x+xe.rx*at-_i,xe.y+Ne.up,xe.z+xe.rz*at-yi),Ns.set(_e.x+_e.rx*B.u*Ne.lu-_i,_e.y+Ne.lookY,_e.z+_e.rz*B.u*Ne.lu-yi)}Re.group.visible=!qf,B.cam===3?o.up.set(Ce.fx,0,Ce.fz):o.up.set(0,1,0),X||(Ue.copy(et),Ke.copy(Ns),X=!0);let Yf=1+Math.max(0,B.speed-12)/12;Ue.lerp(et,1-Math.exp(-Ze*So*Yf)),Ke.lerp(Ns,1-Math.exp(-Ze*Math.min(So,8)*Yf));{let Ne=B.cam===3?0:Math.min(zt((B.speed-16)*.22,0,11),Math.max(0,84-N));$+=(Ne-$)*Math.min(1,Ze*1.5),Math.abs(o.fov-(N+$))>.02&&(o.fov=N+$,o.updateProjectionMatrix())}o.position.copy(Ue),o.lookAt(Ke),ht.has("yaw")&&o.rotateY(parseFloat(ht.get("yaw"))*Math.PI/180),ht.has("pitch")&&o.rotateX(parseFloat(ht.get("pitch"))*Math.PI/180),Pe.set(Ce.fx,0,Ce.fz),fe.set(Ce.rx,0,Ce.rz);let $t=Nt(B.s);a.color.copy(ve.sunCol),a.intensity=ve.sunI;{let Ne=ve.lightDir;if(v.angleTo(Ne)>.1){let Mn=0;if(le&&!B.todPaused)for(let zn=1;zn<=60&&!(zf(B.tod+zn*.001,p).angleTo(Ne)>.09);zn++)Mn=zn;zf(B.tod+Mn*.001,v),T=E=0}_.crossVectors(f,v).normalize(),S.crossVectors(v,_),l.set(Re.group.position.x+Ce.fx*26,Re.group.position.y,Re.group.position.z+Ce.fz*26),a.target.position.copy(l),a.position.copy(l).addScaledVector(Ne,200);let rt=2*u/a.shadow.mapSize.x,at=v.x/v.y-Ne.x/Ne.y,Tt=v.z/v.y-Ne.z/Ne.y;rt!==y&&(y=rt,T=E=0);{let Mn=Math.round(Re.group.position.y);if(M===null)M=Mn;else if(Math.abs(Re.group.position.y-M)>3){let zn=Mn-M;T-=zn*(at*_.x+Tt*_.z),E-=zn*(at*S.x+Tt*S.z),M=Mn}}let Wt=H.origin.x,Xt=H.origin.z,qt=l.dot(_)+Wt*_.x+Xt*_.z-T,qn=l.dot(S)+Wt*S.x+Xt*S.z-E;l.addScaledVector(_,Math.round(qt/rt)*rt-qt).addScaledVector(S,Math.round(qn/rt)*rt-qn),x.copy(l),d.copy(l).addScaledVector(v,200),m.set(1,at,0,-M*at,0,1,0,0,0,Tt,1,-M*Tt,0,0,0,1)}R.target.position.set(Re.group.position.x,Re.group.position.y+.9,Re.group.position.z),R.position.copy(R.target.position).addScaledVector(ve.lightDir,12),P.color.copy(ve.hemiSky),P.groundColor.copy(ve.hemiGround),P.intensity=ve.hemiI;{let Ne=(1-ve.night)*(1-Gt);if(Ne>.001){o.getWorldDirection(Be);let rt=Be.x,at=Be.z,Tt=Math.hypot(rt,at)||1,Wt=ve.sunDir,Xt=0;for(let qn=-2;qn<=2;qn++){let Mn=qn*.3,zn=Math.cos(Mn),Us=Math.sin(Mn),lr=(rt*zn-at*Us)/Tt,cr=(rt*Us+at*zn)/Tt,To=Math.max(0,lr*Wt.x+cr*Wt.z),ur=To*To;Xt+=ur*ur*ur}let qt=Xt/5*(.1+.35*ve.warm)*1.4*Ne*mt;ve.fog.r+=ve.sunCol.r*qt,ve.fog.g+=ve.sunCol.g*qt,ve.fog.b+=ve.sunCol.b*qt}}r.fog.color.copy(ve.fog);let Zf=($t.city*.0022+$t.sakura*.0019+$t.coast*.0011+$t.country*.0014+$t.mountain*.0017+$t.snow*.0021)*(1+ve.night*.25);r.fog.near=Zf*(1+.55*Gt+.45*Dn),r.fog.far=H.ahead*.92,We.uSkyHor.value.copy(ve.horizon),We.uSkyZen.value.copy(ve.zenith),We.uTime.value=Fe,We.uWet.value=A*(1-$t.snow);{let Ne=We.uWet.value>.04&&n!=="low"&&nt<.5&&we!=="0";if(Z.refl.enabled=Ne&&we!=="taps",We.uReflOn.value=Ne&&we!=="copy"?1:0,Ne){o.getWorldDirection(Le),Le.y=0,Le.normalize(),Me.copy(o.position).addScaledVector(Le,1e4).project(o),We.uHorizon.value=Me.y*.5+.5;let rt=Math.max(.5,o.position.y-Re.group.position.y);We.uReflK.value=zt(1-2*rt/(5+rt),.05,1)}}We.uOrigin.value.set(H.origin.x,H.origin.z),We.uWind.value=1+.8*Dn,We.uCloudSh.value=(1-Gt)*At(.04,.3,ve.sunEl)*(1-ve.night),We.uCloudSh.value>.001&&D.update(e,o.position.x,o.position.z,H.origin.x,H.origin.z);let li=V.material.uniforms;if(li.uNight.value=ve.night,li.uWarm.value=ve.warm,li.uTime.value=Fe,li.uCirrusCol.value.copy(ve.cLit).lerp(ve.horizon,.25),li.uCirrus.value=.6*(1-Gt)*(1-.65*At(.4,.9,ve.night)),li.uOvercast.value=Gt,li.uMilky.value=At(.55,.95,ve.night)*(1-Gt),ve.night>.65&&Gt<.3&&xt.p<0&&(xt.next-=Ze)<0){let Ne=Math.atan2(Ce.fx,Ce.fz)+(Math.random()-.5)*1.5,rt=.45+Math.random()*.6,at=.22+Math.random()*.2,Tt=(Math.random()-.5)*.6,Wt=(Xt,qt)=>new k(Math.cos(Xt)*Math.sin(qt),Math.sin(Xt),Math.cos(Xt)*Math.cos(qt));xt.a.copy(Wt(rt,Ne)),xt.b.copy(Wt(rt-at,Ne+Tt)),xt.p=0,xt.next=ht.has("meteors")?1:6+Math.random()*20}xt.p>=0&&(xt.p+=Ze/.85,xt.p>1.3&&(xt.p=-1)),li.uMetP.value=xt.p,li.uMetA.value.copy(xt.a),li.uMetB.value.copy(xt.b),li.uDeckLit.value.copy(ve.horizon).lerp(ve.cLit,.35),li.uDeckDark.value.copy(ve.zenith).lerp(ve.horizon,.25).multiplyScalar(.82),V.position.copy(o.position),ie.update(o.position,Ze),he.update(o.position,Math.max($t.snow,Nt(B.s+600).snow*.7));let za=0;for(let Ne of[-150,0,250,500,800])za=Math.max(za,Nt(B.s+Ne).coast);Qe.mesh.visible=za>.001,Qe.update(o.position,Fe,Zf*.8,At(0,.35,za)),O.uniforms.uTime.value=Fe,O.uniforms.uFogD.value=r.fog.near,O.uniforms.uNight.value=ve.night,O.uniforms.uSpecK.value=1-ve.overcast*.85,We.uSunDir.value.copy(ve.lightDir),We.uSunCol.value.copy(ve.sunCol),W.uniforms.uTime.value=Fe,W.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*Ye());let ci=At(.15,.8,ve.night);L.atlas.emissiveIntensity=.1+ci*1.05,We.uBacklit.value=Ge*1.6*(1-Gt)*(1-ve.night)*At(0,.08,ve.sunEl)*(1-At(.25,.55,ve.sunEl))*(1-nt),We.uLightsOn.value=Je>=0?Je:Math.max(At(.02,.75,ve.night),.3*Gt),L.lamp.color.setRGB(.85,.85,.8).lerp(Ft,ci),L.pool.opacity=ci*.42*(1+.8*A);{let Ne=Re.group.position,rt=Re.lamps,at=Math.max(ci,nt),Tt=0,Wt=0,Xt=0,qt=-1e3,qn=0,Mn=0,zn=-1e3,Us=0,lr=900,cr=900;if(at>.01){let Kf=Math.floor(B.s/Zt);for(let Eu=Kf-1;Eu<=Kf+1;Eu++){let Ha=H.chunks.get(Eu);if(!Ha||!Ha.lamps)continue;let Eo=Ha.lamps,jf=Ha.group.position;for(let hr=0;hr<Eo.length;hr+=4){let wu=Eo[hr]+jf.x,Au=Eo[hr+1],Ru=Eo[hr+2]+jf.z,Cu=(wu-Ne.x)**2+(Au-Ne.y)**2+(Ru-Ne.z)**2,Va=Eo[hr+3]/(1+.045*Cu);Va>Tt?(Wt=Tt,cr=lr,Mn=Xt,zn=qt,Us=qn,Tt=Va,lr=Cu,Xt=wu,qt=Au,qn=Ru):Va>Wt&&(Wt=Va,cr=Cu,Mn=wu,zn=Au,Us=Ru)}}o.updateMatrixWorld()}let To=at*Tt*(1+.045*lr)*(1-At(18,30,Math.sqrt(lr))),ur=at*Wt*(1+.045*cr)*(1-At(18,30,Math.sqrt(cr)));rt[0].set(Xt,qt,qn,1).applyMatrix4(o.matrixWorldInverse).w=To,rt[1].set(Mn,zn,Us,1).applyMatrix4(o.matrixWorldInverse).w=ur,Re.lampCol.setRGB(1,.8-.32*nt,.52-.38*nt),vi.uLampW.value[0].set(Xt,qt,qn,To),vi.uLampW.value[1].set(Mn,zn,Us,ur),vi.uLampCol.value.copy(Re.lampCol),Re.head.getWorldPosition(vi.uHeadPos.value),Re.head.target.getWorldPosition(Be),vi.uHeadDir.value.copy(Be).sub(vi.uHeadPos.value).normalize(),vi.uHeadI.value=Re.head.intensity/60}L.pool.visible=L.pool.opacity>.003,H.lod(B.s,oe,ci>.15,ue),We.uNight.value=ci,Z.bloom.strength=Pt(.32,.55,ci),Z.bloom.threshold=Pt(1.35,.95,ci),Z.bloom.radius=Pt(.55,.35,ci);{let Ne=Math.max(ci,nt,At(.25,.6,ve.warm)*(1-Gt));Z.bloom.enabled=b&&Ne>.02,Z.bloom.strength*=Math.min(1,Ne*4)}e.toneMappingExposure=Pt(1,1.15,ci)*(1+.35*nt),et.copy(o.position).addScaledVector(ve.sunDir,1e3).project(o);let or=Z.grade.uniforms,Dm=et.z<1?1:0,Nm=Math.max(Math.abs(et.x),Math.abs(et.y));or.uSun.value.set(et.x*.5+.5,et.y*.5+.5),or.uSunVis.value=Dm*(1-At(1,1.9,Nm))*At(-.02,.15,ve.sunEl)*(1-ve.night)*(1-Gt)*(1-nt),or.uSat.value=1.1-.12*Gt,or.uDay.value=Ye(),or.uWarm.value=ve.warm,or.uTime.value=Fe,K.update(o.position,Fe,Dn*(1-nt)*(1-$t.snow),Ye());{let Ne=mi(B.s+190),rt=($t.city+$t.country+$t.coast)*(1-Gt)*(1-A)*At(.6,.9,ve.sunEl)*(B.mirage??1)*(Ne&&Math.abs(B.s+190-Ne.s)<330?0:1);se.update(z,B.s,H.origin.x,H.origin.z,In(B.s+150,"rw"),rt,Fe,ve.horizon)}{let Ne=zt($t.snow+$t.mountain*.6*Math.max(ve.night,1-At(.27,.36,B.tod)),0,1)*(1-nt);F.copy(ve.fog).multiplyScalar(.92),ge.copy(ve.sunCol).multiplyScalar(Math.min(1,ve.sunI/3)*(1-Gt)*.6);let rt=Math.cos(Re.group.rotation.y),at=Math.sin(Re.group.rotation.y),Tt=Re.group.position;j.set(Tt.x-1.75*at,Tt.y+.95,Tt.z-1.75*rt,Math.max(ve.night,nt)*(.5+1.2*st.brake)),re.update(Ze,Re.group,B.speed,We.uWet.value*(1-nt),$t.snow*(1-nt),Ne,F,ge,j,o.position,B.spray)}ee.update(o.position,Fe,$t.snow*(.3+.7*Gt)*(1-nt),Ye()),U.setFog(r.fog.near),U.update(Ze,Fe,o.position,Pe,fe,$t,Ye(),Dn,Re.group.position);let Um=performance.now();He.update(Ze,Fe,o.position,Pe,fe,$t.sakura*(1-nt),Ce.y,ci,($t.country+$t.sakura*.4)*(1-Dn)*(1-nt),$t.mountain*(1-nt));let Fm=performance.now();if(lt){z.at(Dt,_e);let Ne=Math.hypot(_e.x-H.origin.x-o.position.x,_e.z-H.origin.z-o.position.z),rt=me.st.active?me.group.position.distanceTo(o.position):1e9,at=B.speed/15;lt.update(at<1.5?at:1.5+(at-1.5)*.4,$t,Ye(),{rush:zt((B.speed-25)/40,0,1),bell:Ht?Math.pow(zt(1-Ne/260,0,1),1.5):0,train:Math.pow(zt(1-rt/230,0,1),2),rain:Dn*(1-nt)*(1-$t.snow),wetRoad:We.uWet.value*(1-nt),speed:B.speed,load:zt(st.lon/3,0,1),roof:B.cam!==2,tunnel:nt,water:(()=>{let Tt=Wi(B.s);return Math.max(Tt?1-At(12,150,Math.abs(B.s-Tt.s)):0,$t.mountain*.45)})(),dusk:ve.warm*(B.tod>.5?1:.3)})}yu(en(B.s+40)),Ae&&(e.info.autoReset=!1,e.info.reset());let ka=null;Ae&&Ae.tq&&(ka=Ae.gl.createQuery(),Ae.gl.beginQuery(Ae.tq.TIME_ELAPSED_EXT,ka));let $f=performance.now();Z.composer.render(Ze);let Jf=performance.now();if(ka){let Ne=Ae.gl;for(Ne.endQuery(Ae.tq.TIME_ELAPSED_EXT),Ae.pend.push(ka);Ae.pend.length&&Ne.getQueryParameter(Ae.pend[0],Ne.QUERY_RESULT_AVAILABLE);){let rt=Ae.pend.shift(),at=Ne.getQueryParameter(rt,Ne.QUERY_RESULT);Ne.deleteQuery(rt),Ne.getParameter(Ae.tq.GPU_DISJOINT_EXT)||(Ae.gpu=at/1e6,Ae.gpuN++,Ae.gpuSum+=Ae.gpu,Ae.gpu>Ae.gpuMax&&(Ae.gpuMax=Ae.gpu))}}let ar=window.__pb||(window.__pb={world:0,parts:0,render:0});if(ar.world=ar.world*.95+(Xf-bo)*.05,ar.parts=ar.parts*.95+(Fm-Um)*.05,ar.render=ar.render*.95+(Jf-$f)*.05,vt=vt*.95+(performance.now()-ot)*.05,window.__ft=vt,Ae){let Ne=e.info,rt=performance.now()-ot,at={t:+Fe.toFixed(2),s:Math.round(B.s),total:+rt.toFixed(1),world:+(Xf-bo).toFixed(1),render:+(Jf-$f).toFixed(1),gpu:+(Ae.gpu||0).toFixed(1),progs:Ne.programs.length-Ae.progs,geos:Ne.memory.geometries-Ae.geos,tex:Ne.memory.textures-Ae.tex,calls:Ne.render.calls,tris:Ne.render.triangles};at.progs>0&&le&&(at.newProgs=Ne.programs.slice(-at.progs).map(Tt=>(Tt.name||"")+":"+String(Tt.cacheKey).slice(0,60))),Ae.progs=Ne.programs.length,Ae.geos=Ne.memory.geometries,Ae.tex=Ne.memory.textures,Ae.frames++,Ae.sum+=rt,rt>Ae.max&&(Ae.max=rt),rt>12&&le&&Ae.spikes.push(at),Ae.last=at}if((Ba+=Ze)>.25){Ba=0,De.textContent=Math.round(B.speed*3.6),ze.textContent=(B.dist/1e3).toFixed(1);let Ne=Math.floor(B.tod*1440);Se.textContent=`${String(Math.floor(Ne/60)).padStart(2,"0")}:${String(Ne%60).padStart(2,"0")}`}Oe++,le&&Oe>150&&Ze>.03?qe+=Ze:qe=Math.max(0,qe-Ze*.5),qe>3&&!ht.has("q")&&(qe=0,ne())}window.__dbg={renderer:e,st:B,scene:r,camera:o,world:H,TOD:ve,X:pe,train:me,weather:Te,U:We,birds:U,cine:kt,post:Z,car:Re,sun:a,M:L,clouds:ie,sky:V,mountains:he,shadowDir:v,CM:st,spray:re,get audio(){return lt}},po(""),je.classList.add("ready"),ht.has("auto")&&rr(),requestAnimationFrame(yn)}$2().catch(i=>{console.error(i),po("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
