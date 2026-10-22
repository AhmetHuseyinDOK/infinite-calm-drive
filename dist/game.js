var Ld=0,ph=1,Dd=2;var Ws=1,Nd=2,Gr=3,_s=0,Cn=1,Tn=2,kn=0,Wr=1,Qi=2,mh=3,gh=4,Ud=5;var Xs=100,Fd=101,Bd=102,Od=103,zd=104,kd=200,Hd=201,Vd=202,Gd=203,vh=204,xh=205,Wd=206,Xd=207,qd=208,Yd=209,Zd=210,$d=211,Jd=212,Kd=213,jd=214,vl=0,xl=1,_l=2,Rr=3,yl=4,Ml=5,bl=6,Sl=7,_h=0,Qd=1,e0=2,Ei=0,yh=1,Mh=2,bh=3,Sh=4,Th=5,Eh=6,ma=7;var wh=300,ys=301,qs=302,tc=303,nc=304,ga=306,Cr=1e3,Di=1001,Tl=1002,cn=1003,t0=1004;var va=1005;var zt=1006,ic=1007;var Hn=1008;var Nn=1009,Ah=1010,Rh=1011,Xr=1012,sc=1013,wi=1014,di=1015,hn=1016,rc=1017,oc=1018,qr=1020,Ch=35902,Ph=35899,Ih=1021,Lh=1022,$n=1023,Ni=1026,Ms=1027,Ys=1028,ac=1029,bs=1030,lc=1031;var cc=1033,xa=33776,_a=33777,ya=33778,Ma=33779,uc=35840,hc=35841,fc=35842,dc=35843,pc=36196,mc=37492,gc=37496,vc=37488,xc=37489,ba=37490,_c=37491,yc=37808,Mc=37809,bc=37810,Sc=37811,Tc=37812,Ec=37813,wc=37814,Ac=37815,Rc=37816,Cc=37817,Pc=37818,Ic=37819,Lc=37820,Dc=37821,Nc=36492,Uc=36494,Fc=36495,Bc=36283,Oc=36284,Sa=36285,zc=36286;var Oo=2300,El=2301,ml=2302,nh=2303,ih=2400,sh=2401,rh=2402;var n0=3200;var kc=0,i0=1,Ai="",jt="srgb",zo="srgb-linear",ko="linear",It="srgb";var gl=7680;var s0=519,r0=512,o0=513,a0=514,Hc=515,l0=516,c0=517,Vc=518,u0=519,h0=35044;var Dh="300 es",Ti=2e3,Pr=2001;function Fm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function f0(){let i=Ho("canvas");return i.style.display="block",i}var jf={},Ir=null;function Nh(...i){let e="THREE."+i.shift();Ir?Ir("log",e,...i):console.log(e,...i)}function d0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ct(...i){i=d0(i);let e="THREE."+i.shift();if(Ir)Ir("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ft(...i){i=d0(i);let e="THREE."+i.shift();if(Ir)Ir("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ks(...i){let e=i.join(" ");e in jf||(jf[e]=!0,ct(...i))}function p0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var m0={[vl]:xl,[_l]:bl,[yl]:Sl,[Rr]:Ml,[xl]:vl,[bl]:_l,[Sl]:yl,[Ml]:Rr},Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Cu=Math.PI/180,Vo=180/Math.PI;function Yr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Om(i,e){return(i%e+e)%e}function Pu(i,e,t){return(1-t)*i+t*e}function Ao(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var kh=class kh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kh.prototype.isVector2=!0;var Ie=kh,Sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],u=n[s+1],d=n[s+2],p=n[s+3],v=r[o+0],m=r[o+1],l=r[o+2],x=r[o+3];if(p!==x||c!==v||u!==m||d!==l){let f=c*v+u*m+d*l+p*x;f<0&&(v=-v,m=-m,l=-l,x=-x,f=-f);let h=1-a;if(f<.9995){let g=Math.acos(f),b=Math.sin(g);h=Math.sin(h*g)/b,a=Math.sin(a*g)/b,c=c*h+v*a,u=u*h+m*a,d=d*h+l*a,p=p*h+x*a}else{c=c*h+v*a,u=u*h+m*a,d=d*h+l*a,p=p*h+x*a;let g=1/Math.sqrt(c*c+u*u+d*d+p*p);c*=g,u*=g,d*=g,p*=g}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],u=n[s+2],d=n[s+3],p=r[o],v=r[o+1],m=r[o+2],l=r[o+3];return e[t]=a*l+d*p+c*m-u*v,e[t+1]=c*l+d*v+u*p-a*m,e[t+2]=u*l+d*m+a*v-c*p,e[t+3]=d*l-a*p-c*v-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),d=a(s/2),p=a(r/2),v=c(n/2),m=c(s/2),l=c(r/2);switch(o){case"XYZ":this._x=v*d*p+u*m*l,this._y=u*m*p-v*d*l,this._z=u*d*l+v*m*p,this._w=u*d*p-v*m*l;break;case"YXZ":this._x=v*d*p+u*m*l,this._y=u*m*p-v*d*l,this._z=u*d*l-v*m*p,this._w=u*d*p+v*m*l;break;case"ZXY":this._x=v*d*p-u*m*l,this._y=u*m*p+v*d*l,this._z=u*d*l+v*m*p,this._w=u*d*p-v*m*l;break;case"ZYX":this._x=v*d*p-u*m*l,this._y=u*m*p+v*d*l,this._z=u*d*l-v*m*p,this._w=u*d*p+v*m*l;break;case"YZX":this._x=v*d*p+u*m*l,this._y=u*m*p+v*d*l,this._z=u*d*l-v*m*p,this._w=u*d*p-v*m*l;break;case"XZY":this._x=v*d*p-u*m*l,this._y=u*m*p-v*d*l,this._z=u*d*l+v*m*p,this._w=u*d*p+v*m*l;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],u=t[2],d=t[6],p=t[10],v=n+a+p;if(v>0){let m=.5/Math.sqrt(v+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-u)*m,this._z=(o-s)*m}else if(n>a&&n>p){let m=2*Math.sqrt(1+n-a-p);this._w=(d-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+u)/m}else if(a>p){let m=2*Math.sqrt(1+a-n-p);this._w=(r-u)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+d)/m}else{let m=2*Math.sqrt(1+p-n-a);this._w=(o-s)/m,this._x=(r+u)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,u=t._z,d=t._w;return this._x=n*d+o*a+s*u-r*c,this._y=s*d+o*c+r*a-n*u,this._z=r*d+o*u+n*c-s*a,this._w=o*d-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let u=Math.acos(a),d=Math.sin(u);c=Math.sin(c*u)/d,t=Math.sin(t*u)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hh=class Hh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*s-a*n),d=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+c*u+o*p-a*d,this.y=n+c*d+a*u-r*p,this.z=s+c*p+r*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Iu.copy(this).projectOnVector(e),this.sub(Iu)}reflect(e){return this.sub(Iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hh.prototype.isVector3=!0;var z=Hh,Iu=new z,Qf=new Sn,Vh=class Vh{constructor(e,t,n,s,r,o,a,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u)}set(e,t,n,s,r,o,a,c,u){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],d=n[4],p=n[7],v=n[2],m=n[5],l=n[8],x=s[0],f=s[3],h=s[6],g=s[1],b=s[4],y=s[7],M=s[2],S=s[5],T=s[8];return r[0]=o*x+a*g+c*M,r[3]=o*f+a*b+c*S,r[6]=o*h+a*y+c*T,r[1]=u*x+d*g+p*M,r[4]=u*f+d*b+p*S,r[7]=u*h+d*y+p*T,r[2]=v*x+m*g+l*M,r[5]=v*f+m*b+l*S,r[8]=v*h+m*y+l*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],d=e[8];return t*o*d-t*a*u-n*r*d+n*a*c+s*r*u-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],d=e[8],p=d*o-a*u,v=a*c-d*r,m=u*r-o*c,l=t*p+n*v+s*m;if(l===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/l;return e[0]=p*x,e[1]=(s*u-d*n)*x,e[2]=(a*n-s*o)*x,e[3]=v*x,e[4]=(d*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*c-u*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-s*u,s*c,-s*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lu.makeScale(e,t)),this}rotate(e){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lu.makeRotation(-e)),this}translate(e,t){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vh.prototype.isMatrix3=!0;var dt=Vh,Lu=new dt,ed=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zm(){let i={enabled:!0,workingColorSpace:zo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===It&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zo]:{primaries:e,whitePoint:n,transfer:ko,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:It,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}var St=zm();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fr,wl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=Ho("canvas")),fr.width=e.width,fr.height=e.height;let s=fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ho("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},km=0,Lr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Du(s[o].image)):r.push(Du(s[o]))}else r=Du(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Du(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}var Hm=0,Nu=new z,On=class i extends Ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Di,s=Di,r=zt,o=Hn,a=$n,c=Nn,u=i.DEFAULT_ANISOTROPY,d=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Yr(),this.name="",this.source=new Lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nu).x}get height(){return this.source.getSize(Nu).y}get depth(){return this.source.getSize(Nu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=wh;On.DEFAULT_ANISOTROPY=1;var Gh=class Gh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],d=c[4],p=c[8],v=c[1],m=c[5],l=c[9],x=c[2],f=c[6],h=c[10];if(Math.abs(d-v)<.01&&Math.abs(p-x)<.01&&Math.abs(l-f)<.01){if(Math.abs(d+v)<.1&&Math.abs(p+x)<.1&&Math.abs(l+f)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(u+1)/2,y=(m+1)/2,M=(h+1)/2,S=(d+v)/4,T=(p+x)/4,_=(l+f)/4;return b>y&&b>M?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=T/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=_/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=T/r,s=_/r),this.set(n,s,r,t),this}let g=Math.sqrt((f-l)*(f-l)+(p-x)*(p-x)+(v-d)*(v-d));return Math.abs(g)<.001&&(g=1),this.x=(f-l)/g,this.y=(p-x)/g,this.z=(v-d)/g,this.w=Math.acos((u+m+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gh.prototype.isVector4=!0;var Tt=Gh,Al=class extends Ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new On(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Lr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends Al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Go=class extends On{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rl=class extends On{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ec=class ec{constructor(e,t,n,s,r,o,a,c,u,d,p,v,m,l,x,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u,d,p,v,m,l,x,f)}set(e,t,n,s,r,o,a,c,u,d,p,v,m,l,x,f){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=u,h[6]=d,h[10]=p,h[14]=v,h[3]=m,h[7]=l,h[11]=x,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ec().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let v=o*d,m=o*p,l=a*d,x=a*p;t[0]=c*d,t[4]=-c*p,t[8]=u,t[1]=m+l*u,t[5]=v-x*u,t[9]=-a*c,t[2]=x-v*u,t[6]=l+m*u,t[10]=o*c}else if(e.order==="YXZ"){let v=c*d,m=c*p,l=u*d,x=u*p;t[0]=v+x*a,t[4]=l*a-m,t[8]=o*u,t[1]=o*p,t[5]=o*d,t[9]=-a,t[2]=m*a-l,t[6]=x+v*a,t[10]=o*c}else if(e.order==="ZXY"){let v=c*d,m=c*p,l=u*d,x=u*p;t[0]=v-x*a,t[4]=-o*p,t[8]=l+m*a,t[1]=m+l*a,t[5]=o*d,t[9]=x-v*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let v=o*d,m=o*p,l=a*d,x=a*p;t[0]=c*d,t[4]=l*u-m,t[8]=v*u+x,t[1]=c*p,t[5]=x*u+v,t[9]=m*u-l,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let v=o*c,m=o*u,l=a*c,x=a*u;t[0]=c*d,t[4]=x-v*p,t[8]=l*p+m,t[1]=p,t[5]=o*d,t[9]=-a*d,t[2]=-u*d,t[6]=m*p+l,t[10]=v-x*p}else if(e.order==="XZY"){let v=o*c,m=o*u,l=a*c,x=a*u;t[0]=c*d,t[4]=-p,t[8]=u*d,t[1]=v*p+x,t[5]=o*d,t[9]=m*p-l,t[2]=l*p-m,t[6]=a*d,t[10]=x*p+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vm,e,Gm)}lookAt(e,t,n){let s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),os.crossVectors(n,Qn),os.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),os.crossVectors(n,Qn)),os.normalize(),Ga.crossVectors(Qn,os),s[0]=os.x,s[4]=Ga.x,s[8]=Qn.x,s[1]=os.y,s[5]=Ga.y,s[9]=Qn.y,s[2]=os.z,s[6]=Ga.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],d=n[1],p=n[5],v=n[9],m=n[13],l=n[2],x=n[6],f=n[10],h=n[14],g=n[3],b=n[7],y=n[11],M=n[15],S=s[0],T=s[4],_=s[8],E=s[12],A=s[1],P=s[5],N=s[9],I=s[13],R=s[2],C=s[6],U=s[10],k=s[14],W=s[3],O=s[7],V=s[11],H=s[15];return r[0]=o*S+a*A+c*R+u*W,r[4]=o*T+a*P+c*C+u*O,r[8]=o*_+a*N+c*U+u*V,r[12]=o*E+a*I+c*k+u*H,r[1]=d*S+p*A+v*R+m*W,r[5]=d*T+p*P+v*C+m*O,r[9]=d*_+p*N+v*U+m*V,r[13]=d*E+p*I+v*k+m*H,r[2]=l*S+x*A+f*R+h*W,r[6]=l*T+x*P+f*C+h*O,r[10]=l*_+x*N+f*U+h*V,r[14]=l*E+x*I+f*k+h*H,r[3]=g*S+b*A+y*R+M*W,r[7]=g*T+b*P+y*C+M*O,r[11]=g*_+b*N+y*U+M*V,r[15]=g*E+b*I+y*k+M*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],u=e[13],d=e[2],p=e[6],v=e[10],m=e[14],l=e[3],x=e[7],f=e[11],h=e[15],g=c*m-u*v,b=a*m-u*p,y=a*v-c*p,M=o*m-u*d,S=o*v-c*d,T=o*p-a*d;return t*(x*g-f*b+h*y)-n*(l*g-f*M+h*S)+s*(l*b-x*M+h*T)-r*(l*y-x*S+f*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],u=e[6],d=e[10];return t*(o*d-a*u)-n*(r*d-a*c)+s*(r*u-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],d=e[8],p=e[9],v=e[10],m=e[11],l=e[12],x=e[13],f=e[14],h=e[15],g=t*a-n*o,b=t*c-s*o,y=t*u-r*o,M=n*c-s*a,S=n*u-r*a,T=s*u-r*c,_=d*x-p*l,E=d*f-v*l,A=d*h-m*l,P=p*f-v*x,N=p*h-m*x,I=v*h-m*f,R=g*I-b*N+y*P+M*A-S*E+T*_;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=(a*I-c*N+u*P)*C,e[1]=(s*N-n*I-r*P)*C,e[2]=(x*T-f*S+h*M)*C,e[3]=(v*S-p*T-m*M)*C,e[4]=(c*A-o*I-u*E)*C,e[5]=(t*I-s*A+r*E)*C,e[6]=(f*y-l*T-h*b)*C,e[7]=(d*T-v*y+m*b)*C,e[8]=(o*N-a*A+u*_)*C,e[9]=(n*A-t*N-r*_)*C,e[10]=(l*S-x*y+h*g)*C,e[11]=(p*y-d*S-m*g)*C,e[12]=(a*E-o*P-c*_)*C,e[13]=(t*P-n*E+s*_)*C,e[14]=(x*b-l*M-f*g)*C,e[15]=(d*M-p*b+v*g)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,u=r*o,d=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,d*a+n,d*c-s*o,0,u*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,u=r+r,d=o+o,p=a+a,v=r*u,m=r*d,l=r*p,x=o*d,f=o*p,h=a*p,g=c*u,b=c*d,y=c*p,M=n.x,S=n.y,T=n.z;return s[0]=(1-(x+h))*M,s[1]=(m+y)*M,s[2]=(l-b)*M,s[3]=0,s[4]=(m-y)*S,s[5]=(1-(v+h))*S,s[6]=(f+g)*S,s[7]=0,s[8]=(l+b)*T,s[9]=(f-g)*T,s[10]=(1-(v+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=dr.set(s[0],s[1],s[2]).length(),a=dr.set(s[4],s[5],s[6]).length(),c=dr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yi.copy(this);let u=1/o,d=1/a,p=1/c;return yi.elements[0]*=u,yi.elements[1]*=u,yi.elements[2]*=u,yi.elements[4]*=d,yi.elements[5]*=d,yi.elements[6]*=d,yi.elements[8]*=p,yi.elements[9]*=p,yi.elements[10]*=p,t.setFromRotationMatrix(yi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Ti,c=!1){let u=this.elements,d=2*r/(t-e),p=2*r/(n-s),v=(t+e)/(t-e),m=(n+s)/(n-s),l,x;if(c)l=r/(o-r),x=o*r/(o-r);else if(a===Ti)l=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Pr)l=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=v,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=l,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ti,c=!1){let u=this.elements,d=2/(t-e),p=2/(n-s),v=-(t+e)/(t-e),m=-(n+s)/(n-s),l,x;if(c)l=1/(o-r),x=o/(o-r);else if(a===Ti)l=-2/(o-r),x=-(o+r)/(o-r);else if(a===Pr)l=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=0,u[12]=v,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=l,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ec.prototype.isMatrix4=!0;var st=ec,dr=new z,yi=new st,Vm=new z(0,0,0),Gm=new z(1,1,1),os=new z,Ga=new z,Qn=new z,nd=new st,id=new Sn,Yn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],d=s[9],p=s[2],v=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(v,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(v,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(v,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return id.setFromEuler(this),this.setFromQuaternion(id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Wo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wm=0,sd=new z,pr=new Sn,Xi=new st,Wa=new z,Ro=new z,Xm=new z,qm=new Sn,rd=new z(1,0,0),od=new z(0,1,0),ad=new z(0,0,1),ld={type:"added"},Ym={type:"removed"},mr={type:"childadded",child:null},Uu={type:"childremoved",child:null},un=class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new Yn,n=new Sn,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new dt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(rd,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rd,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Ro,Wa,this.up):Xi.lookAt(Wa,Ro,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Xi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),mr.child=e,this.dispatchEvent(mr),mr.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ym),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,Xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){let p=c[u];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),u=o(e.textures),d=o(e.images),p=o(e.shapes),v=o(e.skeletons),m=o(e.animations),l=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),v.length>0&&(n.skeletons=v),m.length>0&&(n.animations=m),l.length>0&&(n.nodes=l)}return n.object=s,n;function o(a){let c=[];for(let u in a){let d=a[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new z(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zm={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,n),h=this._getHandJoint(u,x);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}let d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],v=d.position.distanceTo(p.position),m=.02,l=.005;u.inputState.pinching&&v>m+l?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&v<=m-l&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},g0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Fu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=St.workingColorSpace){if(e=Om(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fu(o,r,e+1/3),this.g=Fu(o,r,e),this.b=Fu(o,r,e-1/3)}return St.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=g0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return St.workingToColorSpace(Dn.copy(this),e),Math.round(Mt(Dn.r*255,0,255))*65536+Math.round(Mt(Dn.g*255,0,255))*256+Math.round(Mt(Dn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(Dn.copy(this),t);let n=Dn.r,s=Dn.g,r=Dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,u,d=(a+o)/2;if(a===o)c=0,u=0;else{let p=o-a;switch(u=d<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=jt){St.workingToColorSpace(Dn.copy(this),e);let t=Dn.r,n=Dn.g,s=Dn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Xa);let n=Pu(as.h,Xa.h,t),s=Pu(as.s,Xa.s,t),r=Pu(as.l,Xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new Ee;Ee.NAMES=g0;var Xo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hs=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mi=new z,qi=new z,Bu=new z,Yi=new z,gr=new z,vr=new z,cd=new z,Ou=new z,zu=new z,ku=new z,Hu=new Tt,Vu=new Tt,Gu=new Tt,hs=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mi.subVectors(e,t),s.cross(Mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mi.subVectors(s,t),qi.subVectors(n,t),Bu.subVectors(e,t);let o=Mi.dot(Mi),a=Mi.dot(qi),c=Mi.dot(Bu),u=qi.dot(qi),d=qi.dot(Bu),p=o*u-a*a;if(p===0)return r.set(0,0,0),null;let v=1/p,m=(u*c-a*d)*v,l=(o*d-a*c)*v;return r.set(1-m-l,l,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yi.x),c.addScaledVector(o,Yi.y),c.addScaledVector(a,Yi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Hu.setScalar(0),Vu.setScalar(0),Gu.setScalar(0),Hu.fromBufferAttribute(e,t),Vu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Hu,r.x),o.addScaledVector(Vu,r.y),o.addScaledVector(Gu,r.z),o}static isFrontFacing(e,t,n,s){return Mi.subVectors(n,t),qi.subVectors(e,t),Mi.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),Mi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;gr.subVectors(s,n),vr.subVectors(r,n),Ou.subVectors(e,n);let c=gr.dot(Ou),u=vr.dot(Ou);if(c<=0&&u<=0)return t.copy(n);zu.subVectors(e,s);let d=gr.dot(zu),p=vr.dot(zu);if(d>=0&&p<=d)return t.copy(s);let v=c*p-d*u;if(v<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(gr,o);ku.subVectors(e,r);let m=gr.dot(ku),l=vr.dot(ku);if(l>=0&&m<=l)return t.copy(r);let x=m*u-c*l;if(x<=0&&u>=0&&l<=0)return a=u/(u-l),t.copy(n).addScaledVector(vr,a);let f=d*l-m*p;if(f<=0&&p-d>=0&&m-l>=0)return cd.subVectors(r,s),a=(p-d)/(p-d+(m-l)),t.copy(s).addScaledVector(cd,a);let h=1/(f+x+v);return o=x*h,a=v*h,t.copy(n).addScaledVector(gr,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(r,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),Ya.subVectors(this.max,Co),xr.subVectors(e.a,Co),_r.subVectors(e.b,Co),yr.subVectors(e.c,Co),ls.subVectors(_r,xr),cs.subVectors(yr,_r),Fs.subVectors(xr,yr);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Fs.z,Fs.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Fs.z,0,-Fs.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Fs.y,Fs.x,0];return!Wu(t,xr,_r,yr,Ya)||(t=[1,0,0,0,1,0,0,0,1],!Wu(t,xr,_r,yr,Ya))?!1:(Za.crossVectors(ls,cs),t=[Za.x,Za.y,Za.z],Wu(t,xr,_r,yr,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new z,new z,new z,new z,new z,new z,new z,new z],bi=new z,qa=new ui,xr=new z,_r=new z,yr=new z,ls=new z,cs=new z,Fs=new z,Co=new z,Ya=new z,Za=new z,Bs=new z;function Wu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bs.fromArray(i,r);let a=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),c=e.dot(Bs),u=t.dot(Bs),d=n.dot(Bs);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>a)return!1}return!0}var ln=new z,$a=new Ie,$m=0,Ot=class extends Ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$m++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=h0,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ao(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),n=qn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),n=qn(n,this.array),s=qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),n=qn(n,this.array),s=qn(s,this.array),r=qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var qo=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Yo=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jm=new ui,Po=new z,Xu=new z,hi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);let t=Po.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Po,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Xu)),this.expandByPoint(Po.copy(e.center).sub(Xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Km=0,ci=new st,qu=new un,Mr=new z,ei=new ui,Io=new ui,bn=new z,yt=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fm(e)?Yo:qo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return qu.lookAt(e),qu.updateMatrix(),this.applyMatrix4(qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(ei.min,Io.min),ei.expandByPoint(bn),bn.addVectors(ei.max,Io.max),ei.expandByPoint(bn)):(ei.expandByPoint(Io.min),ei.expandByPoint(Io.max))}ei.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)bn.fromBufferAttribute(a,u),c&&(Mr.fromBufferAttribute(e,u),bn.add(Mr)),s=Math.max(s,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new z,c[_]=new z;let u=new z,d=new z,p=new z,v=new Ie,m=new Ie,l=new Ie,x=new z,f=new z;function h(_,E,A){u.fromBufferAttribute(n,_),d.fromBufferAttribute(n,E),p.fromBufferAttribute(n,A),v.fromBufferAttribute(r,_),m.fromBufferAttribute(r,E),l.fromBufferAttribute(r,A),d.sub(u),p.sub(u),m.sub(v),l.sub(v);let P=1/(m.x*l.y-l.x*m.y);isFinite(P)&&(x.copy(d).multiplyScalar(l.y).addScaledVector(p,-m.y).multiplyScalar(P),f.copy(p).multiplyScalar(m.x).addScaledVector(d,-l.x).multiplyScalar(P),a[_].add(x),a[E].add(x),a[A].add(x),c[_].add(f),c[E].add(f),c[A].add(f))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let _=0,E=g.length;_<E;++_){let A=g[_],P=A.start,N=A.count;for(let I=P,R=P+N;I<R;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let b=new z,y=new z,M=new z,S=new z;function T(_){M.fromBufferAttribute(s,_),S.copy(M);let E=a[_];b.copy(E),b.sub(M.multiplyScalar(M.dot(E))).normalize(),y.crossVectors(S,E);let P=y.dot(c[_])<0?-1:1;o.setXYZW(_,b.x,b.y,b.z,P)}for(let _=0,E=g.length;_<E;++_){let A=g[_],P=A.start,N=A.count;for(let I=P,R=P+N;I<R;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,m=n.count;v<m;v++)n.setXYZ(v,0,0,0);let s=new z,r=new z,o=new z,a=new z,c=new z,u=new z,d=new z,p=new z;if(e)for(let v=0,m=e.count;v<m;v+=3){let l=e.getX(v+0),x=e.getX(v+1),f=e.getX(v+2);s.fromBufferAttribute(t,l),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,f),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),a.fromBufferAttribute(n,l),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,f),a.add(d),c.add(d),u.add(d),n.setXYZ(l,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,u.x,u.y,u.z)}else for(let v=0,m=t.count;v<m;v+=3)s.fromBufferAttribute(t,v+0),r.fromBufferAttribute(t,v+1),o.fromBufferAttribute(t,v+2),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),n.setXYZ(v+0,d.x,d.y,d.z),n.setXYZ(v+1,d.x,d.y,d.z),n.setXYZ(v+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,c){let u=a.array,d=a.itemSize,p=a.normalized,v=new u.constructor(c.length*d),m=0,l=0;for(let x=0,f=c.length;x<f;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*d;for(let h=0;h<d;h++)v[l++]=u[m++]}return new Ot(v,d,p)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],u=e(c,n);t.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let c=[],u=r[a];for(let d=0,p=u.length;d<p;d++){let v=u[d],m=e(v,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],d=[];for(let p=0,v=u.length;p<v;p++){let m=u[p];d.push(m.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let d=s[u];this.setAttribute(u,d.clone(t))}let r=e.morphAttributes;for(let u in r){let d=[],p=r[u];for(let v=0,m=p.length;v<m;v++)d.push(p[v].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,d=o.length;u<d;u++){let p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Yu=new z,jm=new z,Qm=new dt,Si=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Yu.subVectors(n,t).cross(jm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Yu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qm.getNormalMatrix(e),s=this.coplanarPoint(Yu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},eg=0,Fi=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=Wr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=xh,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gl,this.stencilZFail=gl,this.stencilZPass=gl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Si().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var $i=new z,Zu=new z,Ja=new z,Ka=new z,Nr=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zu.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),Ka.copy(this.origin).sub(Zu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ja),a=Ka.dot(this.direction),c=-Ka.dot(Ja),u=Ka.lengthSq(),d=Math.abs(1-o*o),p,v,m,l;if(d>0)if(p=o*c-a,v=o*a-c,l=r*d,p>=0)if(v>=-l)if(v<=l){let x=1/d;p*=x,v*=x,m=p*(p+o*v+2*a)+v*(o*p+v+2*c)+u}else v=r,p=Math.max(0,-(o*v+a)),m=-p*p+v*(v+2*c)+u;else v=-r,p=Math.max(0,-(o*v+a)),m=-p*p+v*(v+2*c)+u;else v<=-l?(p=Math.max(0,-(-o*r+a)),v=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+v*(v+2*c)+u):v<=l?(p=0,v=Math.min(Math.max(-r,-c),r),m=v*(v+2*c)+u):(p=Math.max(0,-(o*r+a)),v=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+v*(v+2*c)+u);else v=o>0?-r:r,p=Math.max(0,-(o*v+a)),m=-p*p+v*(v+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Zu).addScaledVector(Ja,v),m}intersectSphere(e,t){if(e.radius<0)return null;$i.subVectors(e.center,this.origin);let n=$i.dot(this.direction),s=$i.dot($i)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,v=this.origin;return u>=0?(n=(e.min.x-v.x)*u,s=(e.max.x-v.x)*u):(n=(e.max.x-v.x)*u,s=(e.min.x-v.x)*u),d>=0?(r=(e.min.y-v.y)*d,o=(e.max.y-v.y)*d):(r=(e.max.y-v.y)*d,o=(e.min.y-v.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-v.z)*p,c=(e.max.z-v.z)*p):(a=(e.max.z-v.z)*p,c=(e.min.z-v.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,u=a.y,d=a.z,p=e.x-o.x,v=e.y-o.y,m=e.z-o.z,l=t.x-o.x,x=t.y-o.y,f=t.z-o.z,h=n.x-o.x,g=n.y-o.y,b=n.z-o.z,y=Math.abs(c),M=Math.abs(u),S=Math.abs(d),T,_,E,A,P,N,I,R,C,U,k,W;if(y>=M&&y>=S?(E=c,N=p,C=l,W=h,c>=0?(T=u,_=d,A=v,P=m,I=x,R=f,U=g,k=b):(T=d,_=u,A=m,P=v,I=f,R=x,U=b,k=g)):M>=S?(E=u,N=v,C=x,W=g,u>=0?(T=d,_=c,A=m,P=p,I=f,R=l,U=b,k=h):(T=c,_=d,A=p,P=m,I=l,R=f,U=h,k=b)):(E=d,N=m,C=f,W=b,d>=0?(T=c,_=u,A=p,P=v,I=l,R=x,U=h,k=g):(T=u,_=c,A=v,P=p,I=x,R=l,U=g,k=h)),E===0)return null;let O=T/E,V=_/E,H=1/E,ie=A-O*N,fe=P-V*N,et=I-O*C,Re=R-V*C,He=U-O*W,J=k-V*W,Y=He*Re-J*et,Me=ie*J-fe*He,Le=et*fe-Re*ie;if(s){if(Y<0||Me<0||Le<0)return null}else if((Y<0||Me<0||Le<0)&&(Y>0||Me>0||Le>0))return null;let we=Y+Me+Le;if(we===0)return null;let We=H*(Y*N+Me*C+Le*W);return(we>0?We<0:We>0)?null:this.at(We/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ud=new st,Os=new Nr,ja=new hi,hd=new z,Qa=new z,el=new z,tl=new z,$u=new z,nl=new z,fd=new z,il=new z,mt=class extends un{constructor(e=new yt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){nl.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let d=a[c],p=r[c];d!==0&&($u.fromBufferAttribute(p,e),o?nl.addScaledVector($u,d):nl.addScaledVector($u.sub(t),d))}t.add(nl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(ja.containsPoint(Os.origin)===!1&&(Os.intersectSphere(ja,hd)===null||Os.origin.distanceToSquared(hd)>(e.far-e.near)**2))&&(ud.copy(r).invert(),Os.copy(e.ray).applyMatrix4(ud),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,v=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let l=0,x=v.length;l<x;l++){let f=v[l],h=o[f.materialIndex],g=Math.max(f.start,m.start),b=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let y=g,M=b;y<M;y+=3){let S=a.getX(y),T=a.getX(y+1),_=a.getX(y+2);s=sl(this,h,e,n,u,d,p,S,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let l=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=l,h=x;f<h;f+=3){let g=a.getX(f),b=a.getX(f+1),y=a.getX(f+2);s=sl(this,o,e,n,u,d,p,g,b,y),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let l=0,x=v.length;l<x;l++){let f=v[l],h=o[f.materialIndex],g=Math.max(f.start,m.start),b=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let y=g,M=b;y<M;y+=3){let S=y,T=y+1,_=y+2;s=sl(this,h,e,n,u,d,p,S,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let l=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let f=l,h=x;f<h;f+=3){let g=f,b=f+1,y=f+2;s=sl(this,o,e,n,u,d,p,g,b,y),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function tg(i,e,t,n,s,r,o,a){let c;if(e.side===Cn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===_s,a),c===null)return null;il.copy(a),il.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(il);return u<t.near||u>t.far?null:{distance:u,point:il.clone(),object:i}}function sl(i,e,t,n,s,r,o,a,c,u){i.getVertexPosition(a,Qa),i.getVertexPosition(c,el),i.getVertexPosition(u,tl);let d=tg(i,e,t,n,Qa,el,tl,fd);if(d){let p=new z;hs.getBarycoord(fd,Qa,el,tl,p),s&&(d.uv=hs.getInterpolatedAttribute(s,a,c,u,p,new Ie)),r&&(d.uv1=hs.getInterpolatedAttribute(r,a,c,u,p,new Ie)),o&&(d.normal=hs.getInterpolatedAttribute(o,a,c,u,p,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let v={a,b:c,c:u,normal:new z,materialIndex:0};hs.getNormal(Qa,el,tl,v.normal),d.face=v,d.barycoord=p}return d}var fs=class extends On{constructor(e=null,t=1,n=1,s,r,o,a,c,u=cn,d=cn,p,v){super(null,o,a,c,u,d,s,r,p,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new st,dd=new st,rl=[],pd=new ui,ng=new st,Lo=new mt,Do=new hi,Ki=class extends mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ng)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),pd.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(pd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),Do.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(Do)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(n),e.ray.intersectsSphere(Do)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,br),dd.multiplyMatrices(n,br),Lo.matrixWorld=dd,Lo.raycast(e,rl);for(let o=0,a=rl.length;o<a;o++){let c=rl[o];c.instanceId=r,c.object=this,t.push(c)}rl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fs(new Float32Array(s*this.count),s,this.count,Ys,di));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zs=new hi,ig=new Ie(.5,.5),ol=new z,Ur=class{constructor(e=new Si,t=new Si,n=new Si,s=new Si,r=new Si,o=new Si){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],u=r[3],d=r[4],p=r[5],v=r[6],m=r[7],l=r[8],x=r[9],f=r[10],h=r[11],g=r[12],b=r[13],y=r[14],M=r[15];if(s[0].setComponents(u-o,m-d,h-l,M-g).normalize(),s[1].setComponents(u+o,m+d,h+l,M+g).normalize(),s[2].setComponents(u+a,m+p,h+x,M+b).normalize(),s[3].setComponents(u-a,m-p,h-x,M-b).normalize(),n)s[4].setComponents(c,v,f,y).normalize(),s[5].setComponents(u-c,m-v,h-f,M-y).normalize();else if(s[4].setComponents(u-c,m-v,h-f,M-y).normalize(),t===Ti)s[5].setComponents(u+c,m+v,h+f,M+y).normalize();else if(t===Pr)s[5].setComponents(c,v,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);let t=ig.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ol.x=s.normal.x>0?e.max.x:e.min.x,ol.y=s.normal.y>0?e.max.y:e.min.y,ol.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cl=class extends Fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pl=new z,Il=new z,md=new st,No=new Nr,al=new hi,Ju=new z,gd=new z,Zo=class extends un{constructor(e=new yt,t=new Cl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Pl.fromBufferAttribute(t,s-1),Il.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Pl.distanceTo(Il);e.setAttribute("lineDistance",new Je(n,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(s),al.radius+=r,e.ray.intersectsSphere(al)===!1)return;md.copy(s).invert(),No.copy(e.ray).applyMatrix4(md);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,d=n.index,v=n.attributes.position;if(d!==null){let m=Math.max(0,o.start),l=Math.min(d.count,o.start+o.count);for(let x=m,f=l-1;x<f;x+=u){let h=d.getX(x),g=d.getX(x+1),b=ll(this,e,No,c,h,g,x);b&&t.push(b)}if(this.isLineLoop){let x=d.getX(l-1),f=d.getX(m),h=ll(this,e,No,c,x,f,l-1);h&&t.push(h)}}else{let m=Math.max(0,o.start),l=Math.min(v.count,o.start+o.count);for(let x=m,f=l-1;x<f;x+=u){let h=ll(this,e,No,c,x,x+1,x);h&&t.push(h)}if(this.isLineLoop){let x=ll(this,e,No,c,l-1,m,l-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ll(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Pl.fromBufferAttribute(a,s),Il.fromBufferAttribute(a,r),t.distanceSqToSegment(Pl,Il,Ju,gd)>n)return;Ju.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Ju);if(!(u<e.near||u>e.far))return{distance:u,point:gd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Fr=class extends Fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vd=new st,oh=new Nr,cl=new hi,ul=new z,$o=class extends un{constructor(e=new yt,t=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;vd.copy(s).invert(),oh.copy(e.ray).applyMatrix4(vd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,p=n.attributes.position;if(u!==null){let v=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let l=v,x=m;l<x;l++){let f=u.getX(l);ul.fromBufferAttribute(p,f),xd(ul,f,c,s,e,t,this)}}else{let v=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let l=v,x=m;l<x;l++)ul.fromBufferAttribute(p,l),xd(ul,l,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xd(i,e,t,n,s,r,o){let a=oh.distanceSqToPoint(i);if(a<t){let c=new z;oh.closestPointToPoint(i,c),c.applyMatrix4(n);let u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Jo=class extends On{constructor(e=[],t=ys,n,s,r,o,a,c,u,d){super(e,t,n,s,r,o,a,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zn=class extends On{constructor(e,t,n,s,r,o,a,c,u){super(e,t,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ds=class extends On{constructor(e,t,n=wi,s,r,o,a=cn,c=cn,u,d=Ni,p=1){if(d!==Ni&&d!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let v={width:e,height:t,depth:p};super(v,s,r,o,a,c,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ll=class extends ds{constructor(e,t=wi,n=ys,s,r,o=cn,a=cn,c,u=Ni){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,s,r,o,a,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ko=class extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gt=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],u=[],d=[],p=[],v=0,m=0;l("z","y","x",-1,-1,n,t,e,o,r,0),l("z","y","x",1,-1,n,t,-e,o,r,1),l("x","z","y",1,1,e,n,t,s,o,2),l("x","z","y",1,-1,e,n,-t,s,o,3),l("x","y","z",1,-1,e,t,n,s,r,4),l("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function l(x,f,h,g,b,y,M,S,T,_,E){let A=y/T,P=M/_,N=y/2,I=M/2,R=S/2,C=T+1,U=_+1,k=0,W=0,O=new z;for(let V=0;V<U;V++){let H=V*P-I;for(let ie=0;ie<C;ie++){let fe=ie*A-N;O[x]=fe*g,O[f]=H*b,O[h]=R,u.push(O.x,O.y,O.z),O[x]=0,O[f]=0,O[h]=S>0?1:-1,d.push(O.x,O.y,O.z),p.push(ie/T),p.push(1-V/_),k+=1}}for(let V=0;V<_;V++)for(let H=0;H<T;H++){let ie=v+H+C*V,fe=v+H+C*(V+1),et=v+(H+1)+C*(V+1),Re=v+(H+1)+C*V;c.push(ie,fe,Re),c.push(fe,et,Re),W+=6}a.addGroup(m,W,E),m+=W,v+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Vs=class i extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],u=new z,d=new Ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,v=3;p<=t;p++,v+=3){let m=n+p/t*s;u.x=e*Math.cos(m),u.y=e*Math.sin(m),o.push(u.x,u.y,u.z),a.push(0,0,1),d.x=(o[v]/e+1)/2,d.y=(o[v+1]/e+1)/2,c.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},fi=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let d=[],p=[],v=[],m=[],l=0,x=[],f=n/2,h=0;g(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new Je(p,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(m,2));function g(){let y=new z,M=new z,S=0,T=(t-e)/n;for(let _=0;_<=r;_++){let E=[],A=_/r,P=A*(t-e)+e;for(let N=0;N<=s;N++){let I=N/s,R=I*c+a,C=Math.sin(R),U=Math.cos(R);M.x=P*C,M.y=-A*n+f,M.z=P*U,p.push(M.x,M.y,M.z),y.set(C,T,U).normalize(),v.push(y.x,y.y,y.z),m.push(I,1-A),E.push(l++)}x.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let A=x[E][_],P=x[E+1][_],N=x[E+1][_+1],I=x[E][_+1];(e>0||E!==0)&&(d.push(A,P,I),S+=3),(t>0||E!==r-1)&&(d.push(P,N,I),S+=3)}u.addGroup(h,S,0),h+=S}function b(y){let M=l,S=new Ie,T=new z,_=0,E=y===!0?e:t,A=y===!0?1:-1;for(let N=1;N<=s;N++)p.push(0,f*A,0),v.push(0,A,0),m.push(.5,.5),l++;let P=l;for(let N=0;N<=s;N++){let R=N/s*c+a,C=Math.cos(R),U=Math.sin(R);T.x=E*U,T.y=f*A,T.z=E*C,p.push(T.x,T.y,T.z),v.push(0,A,0),S.x=C*.5+.5,S.y=U*.5*A+.5,m.push(S.x,S.y),l++}for(let N=0;N<s;N++){let I=M+N,R=P+N;y===!0?d.push(R,R+1,I):d.push(R+1,R,I),_+=3}u.addGroup(h,_,y===!0?1:2),h+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Dl=class i extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),u(n),d(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(g){let b=new z,y=new z,M=new z;for(let S=0;S<t.length;S+=3)m(t[S+0],b),m(t[S+1],y),m(t[S+2],M),c(b,y,M,g)}function c(g,b,y,M){let S=M+1,T=[];for(let _=0;_<=S;_++){T[_]=[];let E=g.clone().lerp(y,_/S),A=b.clone().lerp(y,_/S),P=S-_;for(let N=0;N<=P;N++)N===0&&_===S?T[_][N]=E:T[_][N]=E.clone().lerp(A,N/P)}for(let _=0;_<S;_++)for(let E=0;E<2*(S-_)-1;E++){let A=Math.floor(E/2);E%2===0?(v(T[_][A+1]),v(T[_+1][A]),v(T[_][A])):(v(T[_][A+1]),v(T[_+1][A+1]),v(T[_+1][A]))}}function u(g){let b=new z;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(g),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function d(){let g=new z;for(let b=0;b<r.length;b+=3){g.x=r[b+0],g.y=r[b+1],g.z=r[b+2];let y=f(g)/2/Math.PI+.5,M=h(g)/Math.PI+.5;o.push(y,1-M)}l(),p()}function p(){for(let g=0;g<o.length;g+=6){let b=o[g+0],y=o[g+2],M=o[g+4],S=Math.max(b,y,M),T=Math.min(b,y,M);S>.9&&T<.1&&(b<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),M<.2&&(o[g+4]+=1))}}function v(g){r.push(g.x,g.y,g.z)}function m(g,b){let y=g*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function l(){let g=new z,b=new z,y=new z,M=new z,S=new Ie,T=new Ie,_=new Ie;for(let E=0,A=0;E<r.length;E+=9,A+=6){g.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),S.set(o[A+0],o[A+1]),T.set(o[A+2],o[A+3]),_.set(o[A+4],o[A+5]),M.copy(g).add(b).add(y).divideScalar(3);let P=f(M);x(S,A+0,g,P),x(T,A+2,b,P),x(_,A+4,y,P)}}function x(g,b,y,M){M<0&&g.x===1&&(o[b]=g.x-1),y.x===0&&y.z===0&&(o[b]=M/2/Math.PI+.5)}function f(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ct("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,u;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let d=n[s],v=n[s+1]-d,m=(o-d)/v;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ie:new z);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,s=[],r=[],o=[],a=new z,c=new st;for(let m=0;m<=e;m++){let l=m/e;s[m]=this.getTangentAt(l,new z)}r[0]=new z,o[0]=new z;let u=Number.MAX_VALUE,d=Math.abs(s[0].x),p=Math.abs(s[0].y),v=Math.abs(s[0].z);d<=u&&(u=d,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),v<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let l=Math.acos(Mt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,l))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Mt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let l=1;l<=e;l++)r[l].applyMatrix4(c.makeRotationAxis(s[l],m*l)),o[l].crossVectors(s[l],r[l])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Br=class extends ti{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),v=c-this.aX,m=u-this.aY;c=v*d-m*p+this.aX,u=v*p+m*d+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Nl=class extends Br{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Uh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,u){s(o,a,u*(a-r),u*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,u,d,p){let v=(o-r)/u-(a-r)/(u+d)+(a-o)/d,m=(a-o)/d-(c-o)/(d+p)+(c-a)/p;v*=d,m*=d,s(o,a,v,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var _d=new z,yd=new z,Ku=new Uh,ju=new Uh,Qu=new Uh,Ul=class extends ti{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let u,d;this.closed||a>0?u=s[(a-1)%r]:(yd.subVectors(s[0],s[1]).add(s[0]),u=yd);let p=s[a%r],v=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(_d.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=_d),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,l=Math.pow(u.distanceToSquared(p),m),x=Math.pow(p.distanceToSquared(v),m),f=Math.pow(v.distanceToSquared(d),m);x<1e-4&&(x=1),l<1e-4&&(l=x),f<1e-4&&(f=x),Ku.initNonuniformCatmullRom(u.x,p.x,v.x,d.x,l,x,f),ju.initNonuniformCatmullRom(u.y,p.y,v.y,d.y,l,x,f),Qu.initNonuniformCatmullRom(u.z,p.z,v.z,d.z,l,x,f)}else this.curveType==="catmullrom"&&(Ku.initCatmullRom(u.x,p.x,v.x,d.x,this.tension),ju.initCatmullRom(u.y,p.y,v.y,d.y,this.tension),Qu.initCatmullRom(u.z,p.z,v.z,d.z,this.tension));return n.set(Ku.calc(c),ju.calc(c),Qu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Md(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function sg(i,e){let t=1-i;return t*t*e}function rg(i,e){return 2*(1-i)*i*e}function og(i,e){return i*i*e}function Fo(i,e,t,n){return sg(i,e)+rg(i,t)+og(i,n)}function ag(i,e){let t=1-i;return t*t*t*e}function lg(i,e){let t=1-i;return 3*t*t*i*e}function cg(i,e){return 3*(1-i)*i*i*e}function ug(i,e){return i*i*i*e}function Bo(i,e,t,n,s){return ag(i,e)+lg(i,t)+cg(i,n)+ug(i,s)}var jo=class extends ti{constructor(e=new Ie,t=new Ie,n=new Ie,s=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bo(e,s.x,r.x,o.x,a.x),Bo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fl=class extends ti{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bo(e,s.x,r.x,o.x,a.x),Bo(e,s.y,r.y,o.y,a.y),Bo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qo=class extends ti{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bl=class extends ti{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends ti{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fo(e,s.x,r.x,o.x),Fo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends ti{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fo(e,s.x,r.x,o.x),Fo(e,s.y,r.y,o.y),Fo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],u=s[o],d=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Md(a,c.x,u.x,d.x,p.x),Md(a,c.y,u.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ie().fromArray(s))}return this}},bd=Object.freeze({__proto__:null,ArcCurve:Nl,CatmullRomCurve3:Ul,CubicBezierCurve:jo,CubicBezierCurve3:Fl,EllipseCurve:Br,LineCurve:Qo,LineCurve3:Bl,QuadraticBezierCurve:ea,QuadraticBezierCurve3:Ol,SplineCurve:ta}),zl=class extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),u=c===0?0:1-o/c;return a.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let u=0;u<c.length;u++){let d=c[u];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new bd[s.type]().fromJSON(s))}return this}},na=class extends zl{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qo(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ea(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new jo(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s),new Ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ta(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+u,t+d,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let u=new Br(e,t,n,s,r,o,a,c);if(this.curves.length>0){let p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);let d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Or=class extends na{constructor(e){super(e),this.uuid=Yr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new na().fromJSON(s))}return this}};function hg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=v0(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,u;if(n&&(r=gg(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let d=a,p=c;for(let v=t;v<s;v+=t){let m=i[v],l=i[v+1];m<a&&(a=m),l<c&&(c=l),m>d&&(d=m),l>p&&(p=l)}u=Math.max(d-a,p-c),u=u!==0?32767/u:0}return ia(r,o,t,a,c,u,0),o}function v0(i,e,t,n,s){let r;if(s===Ag(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Sd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Sd(o/n|0,i[o],i[o+1],r);return r&&zr(r,r.next)&&(ra(r),r=r.next),r}function Gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zr(t,t.next)||Qt(t.prev,t,t.next)===0)){if(ra(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ia(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Mg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,u=i.next;if(r?dg(i,n,s,r):fg(i)){e.push(c.i,i.i,u.i),ra(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=pg(Gs(i),e),ia(i,e,t,n,s,r,2)):o===2&&mg(i,e,t,n,s,r):ia(Gs(i),e,t,n,s,r,1);break}}}function fg(i){let e=i.prev,t=i,n=i.next;if(Qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,u=n.y,d=Math.min(s,r,o),p=Math.min(a,c,u),v=Math.max(s,r,o),m=Math.max(a,c,u),l=n.next;for(;l!==e;){if(l.x>=d&&l.x<=v&&l.y>=p&&l.y<=m&&Uo(s,a,r,c,o,u,l.x,l.y)&&Qt(l.prev,l,l.next)>=0)return!1;l=l.next}return!0}function dg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Qt(s,r,o)>=0)return!1;let a=s.x,c=r.x,u=o.x,d=s.y,p=r.y,v=o.y,m=Math.min(a,c,u),l=Math.min(d,p,v),x=Math.max(a,c,u),f=Math.max(d,p,v),h=ah(m,l,e,t,n),g=ah(x,f,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=h&&y&&y.z<=g;){if(b.x>=m&&b.x<=x&&b.y>=l&&b.y<=f&&b!==s&&b!==o&&Uo(a,d,c,p,u,v,b.x,b.y)&&Qt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=m&&y.x<=x&&y.y>=l&&y.y<=f&&y!==s&&y!==o&&Uo(a,d,c,p,u,v,y.x,y.y)&&Qt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=h;){if(b.x>=m&&b.x<=x&&b.y>=l&&b.y<=f&&b!==s&&b!==o&&Uo(a,d,c,p,u,v,b.x,b.y)&&Qt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=g;){if(y.x>=m&&y.x<=x&&y.y>=l&&y.y<=f&&y!==s&&y!==o&&Uo(a,d,c,p,u,v,y.x,y.y)&&Qt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function pg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!zr(n,s)&&_0(n,t,t.next,s)&&sa(n,s)&&sa(s,n)&&(e.push(n.i,t.i,s.i),ra(t),ra(t.next),t=i=s),t=t.next}while(t!==i);return Gs(t)}function mg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tg(o,a)){let c=y0(o,a);o=Gs(o,o.next),c=Gs(c,c.next),ia(o,e,t,n,s,r,0),ia(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,u=v0(i,a,c,n,!1);u===u.next&&(u.steiner=!0),s.push(Sg(u))}s.sort(vg);for(let r=0;r<s.length;r++)t=xg(s[r],t);return t}function vg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function xg(i,e){let t=_g(i,e);if(!t)return e;let n=y0(t,i);return Gs(n,n.next),Gs(t,t.next)}function _g(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(zr(i,t))return t;do{if(zr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,u=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&x0(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);sa(t,i)&&(p<d||p===d&&(t.x>o.x||t.x===o.x&&yg(o,t)))&&(o=t,d=p)}t=t.next}while(t!==a);return o}function yg(i,e){return Qt(i.prev,i,e.prev)<0&&Qt(e.next,i,i.next)<0}function Mg(i,e,t,n){let s=i;do s.z===0&&(s.z=ah(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bg(s)}function bg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ah(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Sg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function x0(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Uo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&x0(i,e,t,n,s,r,o,a)}function Tg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Eg(i,e)&&(sa(i,e)&&sa(e,i)&&wg(i,e)&&(Qt(i.prev,i,e.prev)||Qt(i,e.prev,e))||zr(i,e)&&Qt(i.prev,i,i.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zr(i,e){return i.x===e.x&&i.y===e.y}function _0(i,e,t,n){let s=fl(Qt(i,e,t)),r=fl(Qt(i,e,n)),o=fl(Qt(t,n,i)),a=fl(Qt(t,n,e));return!!(s!==r&&o!==a||s===0&&hl(i,t,e)||r===0&&hl(i,n,e)||o===0&&hl(t,i,n)||a===0&&hl(t,e,n))}function hl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fl(i){return i>0?1:i<0?-1:0}function Eg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&_0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function sa(i,e){return Qt(i.prev,i,i.next)<0?Qt(i,e,i.next)>=0&&Qt(i,i.prev,e)>=0:Qt(i,e,i.prev)<0||Qt(i,i.next,e)<0}function wg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function y0(i,e){let t=lh(i.i,i.x,i.y),n=lh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sd(i,e,t,n){let s=lh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ra(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ag(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ch=class{static triangulate(e,t,n=2){return hg(e,t,n)}},Ar=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Td(e),Ed(n,e);let o=e.length;t.forEach(Td);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Ed(n,t[c]);let a=ch.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Td(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ed(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var oa=class i extends Dl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var nn=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),u=a+1,d=c+1,p=e/a,v=t/c,m=[],l=[],x=[],f=[];for(let h=0;h<d;h++){let g=h*v-o;for(let b=0;b<u;b++){let y=b*p-r;l.push(y,-g,0),x.push(0,0,1),f.push(b/a),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let g=0;g<a;g++){let b=g+u*h,y=g+u*(h+1),M=g+1+u*(h+1),S=g+1+u*h;m.push(b,y,S),m.push(y,M,S)}this.setIndex(m),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var aa=class i extends yt{constructor(e=new Or([new Ie(0,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let d=0;d<e.length;d++)u(e[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(o,2));function u(d){let p=s.length/3,v=d.extractPoints(t),m=v.shape,l=v.holes;Ar.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,h=l.length;f<h;f++){let g=l[f];Ar.isClockWise(g)===!0&&(l[f]=g.reverse())}let x=Ar.triangulateShape(m,l);for(let f=0,h=l.length;f<h;f++){let g=l[f];m=m.concat(g)}for(let f=0,h=m.length;f<h;f++){let g=m[f];s.push(g.x,g.y,0),r.push(0,0,1),o.push(g.x,g.y)}for(let f=0,h=x.length;f<h;f++){let g=x[f],b=g[0]+p,y=g[1]+p,M=g[2]+p;n.push(b,y,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Rg(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Rg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var la=class i extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),u=0,d=[],p=new z,v=new z,m=[],l=[],x=[],f=[];for(let h=0;h<=n;h++){let g=[],b=h/n,y=o+b*a,M=e*Math.cos(y),S=Math.sqrt(e*e-M*M),T=0;h===0&&o===0?T=.5/t:h===n&&c===Math.PI&&(T=-.5/t);for(let _=0;_<=t;_++){let E=_/t,A=s+E*r;p.x=-S*Math.cos(A),p.y=M,p.z=S*Math.sin(A),l.push(p.x,p.y,p.z),v.copy(p).normalize(),x.push(v.x,v.y,v.z),f.push(E+T,1-b),g.push(u++)}d.push(g)}for(let h=0;h<n;h++)for(let g=0;g<t;g++){let b=d[h][g+1],y=d[h][g],M=d[h+1][g],S=d[h+1][g+1];(h!==0||o>0)&&m.push(b,y,S),(h!==n-1||c<Math.PI)&&m.push(y,M,S)}this.setIndex(m),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ca=class i extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],d=[],p=[],v=new z,m=new z,l=new z;for(let x=0;x<=n;x++){let f=o+x/n*a;for(let h=0;h<=s;h++){let g=h/s*r;m.x=(e+t*Math.cos(f))*Math.cos(g),m.y=(e+t*Math.cos(f))*Math.sin(g),m.z=t*Math.sin(f),u.push(m.x,m.y,m.z),v.x=e*Math.cos(g),v.y=e*Math.sin(g),l.subVectors(m,v).normalize(),d.push(l.x,l.y,l.z),p.push(h/s),p.push(x/n)}}for(let x=1;x<=n;x++)for(let f=1;f<=s;f++){let h=(s+1)*x+f-1,g=(s+1)*(x-1)+f-1,b=(s+1)*(x-1)+f,y=(s+1)*x+f;c.push(h,g,y),c.push(g,b,y)}this.setIndex(c),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(wd(s))s.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Un(i){let e={};for(let t=0;t<i.length;t++){let n=Zs(i[t]);for(let s in n)e[s]=n[s]}return e}function wd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}var $s={clone:Zs,merge:Un},Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pg,this.fragmentShader=Ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Cg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new st().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},kl=class extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var an=class extends Fi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kr=class extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hl=class extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function eh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ps=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vl=class extends ps{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sh:r=e,a=2*t-n;break;case rh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sh:o=e,c=2*n-t;break;case rh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let u=(n-t)*.5,d=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,d=this._offsetPrev,p=this._offsetNext,v=this._weightPrev,m=this._weightNext,l=(n-t)/(s-t),x=l*l,f=x*l,h=-v*f+2*v*x-v*l,g=(1+v)*f+(-1.5-2*v)*x+(-.5+v)*l+1,b=(-1-m)*f+(1.5+m)*x+.5*l,y=m*f-m*x;for(let M=0;M!==a;++M)r[M]=h*o[d+M]+g*o[u+M]+b*o[c+M]+y*o[p+M];return r}},Gl=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,d=(n-t)/(s-t),p=1-d;for(let v=0;v!==a;++v)r[v]=o[u+v]*p+o[c+v]*d;return r}},Wl=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xl=class extends ps{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,d=this.inTangents,p=this.outTangents;if(!d||!p){let l=(n-t)/(s-t),x=1-l;for(let f=0;f!==a;++f)r[f]=o[u+f]*x+o[c+f]*l;return r}let v=a*2,m=e-1;for(let l=0;l!==a;++l){let x=o[u+l],f=o[c+l],h=m*v+l*2,g=p[h],b=p[h+1],y=e*v+l*2,M=d[y],S=d[y+1],T=Dg(n,t,g,M,s);r[l]=M0(T,x,b,S,f)}return r}};function M0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Lg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Dg(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=M0(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Lg(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var ni=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),eh(e.settings)&&(n.settings={inTangents:Sr(e.settings.inTangents,Array),outTangents:Sr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Oo:t=this.InterpolantFactoryMethodDiscrete;break;case El:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break;case nh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ct("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return ml;case this.InterpolantFactoryMethodBezier:return nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;eh(this.settings)&&(Ad(this.settings.inTangents,e),Ad(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ft("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ft("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Bm(s))for(let a=0,c=s.length;a!==c;++a){let u=s[a];if(isNaN(u)){ft("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ml,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,u=e[a],d=e[a+1];if(u!==d&&(a!==1||u!==e[0]))if(s)c=!0;else{let p=a*n,v=p-n,m=p+n;for(let l=0;l!==n;++l){let x=t[p+l];if(x!==t[v+l]||x!==t[m+l]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,v=o*n;for(let m=0;m!==n;++m)t[v+m]=t[p+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,eh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ad(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=El;var ms=class extends ni{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Oo;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends ni{constructor(e,t,n,s){super(e,t,n,s)}};ql.prototype.ValueTypeName="color";var Yl=class extends ni{constructor(e,t,n,s){super(e,t,n,s)}};Yl.prototype.ValueTypeName="number";var Zl=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),u=e*a;for(let d=u+a;u!==d;u+=4)Sn.slerpFlat(r,0,o,u-a,o,u,c);return r}},ua=class extends ni{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Zl(this.times,this.values,this.getValueSize(),e)}};ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends ni{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Oo;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends ni{constructor(e,t,n,s){super(e,t,n,s)}};$l.prototype.ValueTypeName="vector";var Jl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return u.push(d,p),this},this.removeHandler=function(d){let p=u.indexOf(d);return p!==-1&&u.splice(p,2),this},this.getHandler=function(d){for(let p=0,v=u.length;p<v;p+=2){let m=u[p],l=u[p+1];if(m.global&&(m.lastIndex=0),m.test(d))return l}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},b0=new Jl,Kl=class{constructor(e){this.manager=e!==void 0?e:b0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ha=class extends Hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},th=new st,Rd=new z,Cd=new z,fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rd),Cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){th.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(th,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Pr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),t.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dl=new z,pl=new Sn,Li=new z,ji=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,pl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,pl,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(dl,pl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,pl,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new z,Pd=new Ie,Id=new Ie,Rn=class extends ji{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(Cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,Pd,Id),t.subVectors(Id,Pd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cu*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},uh=class extends fa{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Vo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},da=class extends Hr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new uh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var vs=class extends ji{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hh=class extends fa{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new hh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var xs=class extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Tr=-90,Er=1,jl=class extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(Tr,Er,e,t);s.layers=this.layers,this.add(s);let r=new Rn(Tr,Er,e,t);r.layers=this.layers,this.add(r);let o=new Rn(Tr,Er,e,t);o.layers=this.layers,this.add(o);let a=new Rn(Tr,Er,e,t);a.layers=this.layers,this.add(a);let c=new Rn(Tr,Er,e,t);c.layers=this.layers,this.add(c);let u=new Rn(Tr,Er,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let u of t)this.remove(u);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,u,d]=this.children,p=e.getRenderTarget(),v=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),l=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,v,m),e.xr.enabled=l,n.texture.needsPMREMUpdate=!0}},Ql=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},pa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ng.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ng(){this._document.hidden===!1&&this.reset()}var Bh="\\[\\]\\.:\\/",Ug=new RegExp("["+Bh+"]","g"),Oh="[^"+Bh+"]",Fg="[^"+Bh.replace("\\.","")+"]",Bg=/((?:WC+[\/:])*)/.source.replace("WC",Oh),Og=/(WCOD+)?/.source.replace("WCOD",Fg),zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),Hg=new RegExp("^"+Bg+Og+zg+kg+"$"),Vg=["material","materials","bones","map"],fh=class{constructor(e,t,n){let s=n||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ug,"")}static parseTrackName(e){let t=Hg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=fh;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $2=new Float32Array(1);var Wh=class Wh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Wh.prototype.isMatrix2=!0;var dh=Wh;function zh(i,e,t,n){let s=Gg(n);switch(t){case Ih:return i*e;case Ys:return i*e/s.components*s.byteLength;case ac:return i*e/s.components*s.byteLength;case bs:return i*e*2/s.components*s.byteLength;case lc:return i*e*2/s.components*s.byteLength;case Lh:return i*e*3/s.components*s.byteLength;case $n:return i*e*4/s.components*s.byteLength;case cc:return i*e*4/s.components*s.byteLength;case xa:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:case dc:return Math.max(i,16)*Math.max(e,8)/4;case uc:case fc:return Math.max(i,8)*Math.max(e,8)/2;case pc:case mc:case vc:case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gc:case ba:case _c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Nc:case Uc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bc:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sa:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gg(i){switch(i){case Nn:case Ah:return{byteLength:1,components:1};case Xr:case Rh:case hn:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case wi:case sc:case di:return{byteLength:4,components:1};case Ch:case Ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function W0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jg(i){let e=new WeakMap;function t(a,c){let u=a.array,d=a.usage,p=u.byteLength,v=i.createBuffer();i.bindBuffer(c,v),i.bufferData(c,u,d),a.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,u){let d=c.array,p=c.updateRanges;if(i.bindBuffer(u,a),p.length===0)i.bufferSubData(u,0,d);else{p.sort((m,l)=>m.start-l.start);let v=0;for(let m=1;m<p.length;m++){let l=p[v],x=p[m];x.start<=l.start+l.count+1?l.count=Math.max(l.count,x.start+x.count-l.start):(++v,p[v]=x)}p.length=v+1;for(let m=0,l=p.length;m<l;m++){let x=p[m];i.bufferSubData(u,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
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
#endif`,Qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
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
#endif`,s1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r1=`#ifdef USE_BATCHING
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
#endif`,o1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u1=`#ifdef USE_IRIDESCENCE
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
#endif`,h1=`#ifdef USE_BUMPMAP
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
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,y1=`#define PI 3.141592653589793
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
} // validated`,M1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b1=`vec3 transformedNormal = objectNormal;
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
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A1="gl_FragColor = linearToOutputTexel( gl_FragColor );",R1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
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
#endif`,L1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O1=`#ifdef USE_GRADIENTMAP
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
}`,z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,G1=`#ifdef USE_ENVMAP
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
#endif`,W1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z1=`PhysicalMaterial material;
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
#endif`,$1=`uniform sampler2D dfgLUT;
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
}`,J1=`
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
#endif`,K1=`#if defined( RE_IndirectDiffuse )
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
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ov=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,av=`#if defined( USE_POINTS_UV )
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
#endif`,lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dv=`#ifdef USE_MORPHTARGETS
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
#endif`,pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yv=`#ifdef USE_NORMALMAP
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
#endif`,Mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fv=`float getShadowMask() {
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
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,zv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,Hv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,qv=`#ifdef USE_TRANSMISSION
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jv=`uniform sampler2D t2D;
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`#include <common>
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
}`,sx=`#if DEPTH_PACKING == 3200
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
}`,rx=`#define DISTANCE
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
}`,ox=`#define DISTANCE
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`uniform float scale;
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
}`,ux=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,fx=`uniform vec3 diffuse;
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
}`,dx=`#define LAMBERT
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
}`,px=`#define LAMBERT
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
}`,mx=`#define MATCAP
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
}`,gx=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,xx=`#define NORMAL
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
}`,_x=`#define PHONG
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
}`,yx=`#define PHONG
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
}`,Mx=`#define STANDARD
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
}`,bx=`#define STANDARD
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
}`,Sx=`#define TOON
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
}`,Tx=`#define TOON
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
}`,Ex=`uniform float size;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Ax=`#include <common>
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
}`,Rx=`uniform vec3 color;
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
}`,Cx=`uniform float rotation;
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
}`,Px=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Kg,alphahash_pars_fragment:jg,alphamap_fragment:Qg,alphamap_pars_fragment:e1,alphatest_fragment:t1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:s1,batching_pars_vertex:r1,batching_vertex:o1,begin_vertex:a1,beginnormal_vertex:l1,bsdfs:c1,iridescence_fragment:u1,bumpmap_pars_fragment:h1,clipping_planes_fragment:f1,clipping_planes_pars_fragment:d1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:g1,color_pars_fragment:v1,color_pars_vertex:x1,color_vertex:_1,common:y1,cube_uv_reflection_fragment:M1,defaultnormal_vertex:b1,displacementmap_pars_vertex:S1,displacementmap_vertex:T1,emissivemap_fragment:E1,emissivemap_pars_fragment:w1,colorspace_fragment:A1,colorspace_pars_fragment:R1,envmap_fragment:C1,envmap_common_pars_fragment:P1,envmap_pars_fragment:I1,envmap_pars_vertex:L1,envmap_physical_pars_fragment:G1,envmap_vertex:D1,fog_vertex:N1,fog_pars_vertex:U1,fog_fragment:F1,fog_pars_fragment:B1,gradientmap_pars_fragment:O1,lightmap_pars_fragment:z1,lights_lambert_fragment:k1,lights_lambert_pars_fragment:H1,lights_pars_begin:V1,lights_toon_fragment:W1,lights_toon_pars_fragment:X1,lights_phong_fragment:q1,lights_phong_pars_fragment:Y1,lights_physical_fragment:Z1,lights_physical_pars_fragment:$1,lights_fragment_begin:J1,lights_fragment_maps:K1,lights_fragment_end:j1,lightprobes_pars_fragment:Q1,logdepthbuf_fragment:ev,logdepthbuf_pars_fragment:tv,logdepthbuf_pars_vertex:nv,logdepthbuf_vertex:iv,map_fragment:sv,map_pars_fragment:rv,map_particle_fragment:ov,map_particle_pars_fragment:av,metalnessmap_fragment:lv,metalnessmap_pars_fragment:cv,morphinstance_vertex:uv,morphcolor_vertex:hv,morphnormal_vertex:fv,morphtarget_pars_vertex:dv,morphtarget_vertex:pv,normal_fragment_begin:mv,normal_fragment_maps:gv,normal_pars_fragment:vv,normal_pars_vertex:xv,normal_vertex:_v,normalmap_pars_fragment:yv,clearcoat_normal_fragment_begin:Mv,clearcoat_normal_fragment_maps:bv,clearcoat_pars_fragment:Sv,iridescence_pars_fragment:Tv,opaque_fragment:Ev,packing:wv,premultiplied_alpha_fragment:Av,project_vertex:Rv,dithering_fragment:Cv,dithering_pars_fragment:Pv,roughnessmap_fragment:Iv,roughnessmap_pars_fragment:Lv,shadowmap_pars_fragment:Dv,shadowmap_pars_vertex:Nv,shadowmap_vertex:Uv,shadowmask_pars_fragment:Fv,skinbase_vertex:Bv,skinning_pars_vertex:Ov,skinning_vertex:zv,skinnormal_vertex:kv,specularmap_fragment:Hv,specularmap_pars_fragment:Vv,tonemapping_fragment:Gv,tonemapping_pars_fragment:Wv,transmission_fragment:Xv,transmission_pars_fragment:qv,uv_pars_fragment:Yv,uv_pars_vertex:Zv,uv_vertex:$v,worldpos_vertex:Jv,background_vert:Kv,background_frag:jv,backgroundCube_vert:Qv,backgroundCube_frag:ex,cube_vert:tx,cube_frag:nx,depth_vert:ix,depth_frag:sx,distance_vert:rx,distance_frag:ox,equirect_vert:ax,equirect_frag:lx,linedashed_vert:cx,linedashed_frag:ux,meshbasic_vert:hx,meshbasic_frag:fx,meshlambert_vert:dx,meshlambert_frag:px,meshmatcap_vert:mx,meshmatcap_frag:gx,meshnormal_vert:vx,meshnormal_frag:xx,meshphong_vert:_x,meshphong_frag:yx,meshphysical_vert:Mx,meshphysical_frag:bx,meshtoon_vert:Sx,meshtoon_frag:Tx,points_vert:Ex,points_frag:wx,shadow_vert:Ax,shadow_frag:Rx,sprite_vert:Cx,sprite_frag:Px},Ve={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Oi={basic:{uniforms:Un([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Un([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Un([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Un([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Un([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Un([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Un([Ve.points,Ve.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Un([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Un([Ve.common,Ve.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Un([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Un([Ve.sprite,Ve.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Un([Ve.common,Ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Un([Ve.lights,Ve.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Oi.physical={uniforms:Un([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Gc={r:0,b:0,g:0},Ix=new st,X0=new dt;X0.set(-1,0,0,0,1,0,0,0,1);function Lx(i,e,t,n,s,r){let o=new Ee(0),a=s===!0?0:1,c,u,d=null,p=0,v=null;function m(g){let b=g.isScene===!0?g.background:null;if(b&&b.isTexture){let y=g.backgroundBlurriness>0;b=e.get(b,y)}return b}function l(g){let b=!1,y=m(g);y===null?f(o,a):y&&y.isColor&&(f(y,1),b=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(g,b){let y=m(b);y&&(y.isCubeTexture||y.mapping===ga)?(u===void 0&&(u=new mt(new Gt(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Zs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(X0),u.material.toneMapped=St.getTransfer(y.colorSpace)!==It,(d!==y||p!==y.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,p=y.version,v=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new mt(new nn(2,2),new xt({name:"BackgroundMaterial",uniforms:Zs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=St.getTransfer(y.colorSpace)!==It,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||v!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,p=y.version,v=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,b){g.getRGB(Gc,Fh(i)),t.buffers.color.setClear(Gc.r,Gc.g,Gc.b,b,r)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,b=1){o.set(g),a=b,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,f(o,a)},render:l,addToRenderList:x,dispose:h}}function Dx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=v(null),r=s,o=!1;function a(P,N,I,R,C){let U=!1,k=p(P,R,I,N);r!==k&&(r=k,u(r.object)),U=m(P,R,I,C),U&&l(P,R,I,C),C!==null&&e.update(C,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,y(P,N,I,R),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function c(){return i.createVertexArray()}function u(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function p(P,N,I,R){let C=R.wireframe===!0,U=n[N.id];U===void 0&&(U={},n[N.id]=U);let k=P.isInstancedMesh===!0?P.id:0,W=U[k];W===void 0&&(W={},U[k]=W);let O=W[I.id];O===void 0&&(O={},W[I.id]=O);let V=O[C];return V===void 0&&(V=v(c()),O[C]=V),V}function v(P){let N=[],I=[],R=[];for(let C=0;C<t;C++)N[C]=0,I[C]=0,R[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:R,object:P,attributes:{},index:null}}function m(P,N,I,R){let C=r.attributes,U=N.attributes,k=0,W=I.getAttributes();for(let O in W)if(W[O].location>=0){let H=C[O],ie=U[O];if(ie===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),H===void 0||H.attribute!==ie||ie&&H.data!==ie.data)return!0;k++}return r.attributesNum!==k||r.index!==R}function l(P,N,I,R){let C={},U=N.attributes,k=0,W=I.getAttributes();for(let O in W)if(W[O].location>=0){let H=U[O];H===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));let ie={};ie.attribute=H,H&&H.data&&(ie.data=H.data),C[O]=ie,k++}r.attributes=C,r.attributesNum=k,r.index=R}function x(){let P=r.newAttributes;for(let N=0,I=P.length;N<I;N++)P[N]=0}function f(P){h(P,0)}function h(P,N){let I=r.newAttributes,R=r.enabledAttributes,C=r.attributeDivisors;I[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),C[P]!==N&&(i.vertexAttribDivisor(P,N),C[P]=N)}function g(){let P=r.newAttributes,N=r.enabledAttributes;for(let I=0,R=N.length;I<R;I++)N[I]!==P[I]&&(i.disableVertexAttribArray(I),N[I]=0)}function b(P,N,I,R,C,U,k){k===!0?i.vertexAttribIPointer(P,N,I,C,U):i.vertexAttribPointer(P,N,I,R,C,U)}function y(P,N,I,R){x();let C=R.attributes,U=I.getAttributes(),k=N.defaultAttributeValues;for(let W in U){let O=U[W];if(O.location>=0){let V=C[W];if(V===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){let H=V.normalized,ie=V.itemSize,fe=e.get(V);if(fe===void 0)continue;let et=fe.buffer,Re=fe.type,He=fe.bytesPerElement,J=Re===i.INT||Re===i.UNSIGNED_INT||V.gpuType===sc;if(V.isInterleavedBufferAttribute){let Y=V.data,Me=Y.stride,Le=V.offset;if(Y.isInstancedInterleavedBuffer){for(let we=0;we<O.locationSize;we++)h(O.location+we,Y.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let we=0;we<O.locationSize;we++)f(O.location+we);i.bindBuffer(i.ARRAY_BUFFER,et);for(let we=0;we<O.locationSize;we++)b(O.location+we,ie/O.locationSize,Re,H,Me*He,(Le+ie/O.locationSize*we)*He,J)}else{if(V.isInstancedBufferAttribute){for(let Y=0;Y<O.locationSize;Y++)h(O.location+Y,V.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Y=0;Y<O.locationSize;Y++)f(O.location+Y);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Y=0;Y<O.locationSize;Y++)b(O.location+Y,ie/O.locationSize,Re,H,ie*He,ie/O.locationSize*Y*He,J)}}else if(k!==void 0){let H=k[W];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(O.location,H);break;case 3:i.vertexAttrib3fv(O.location,H);break;case 4:i.vertexAttrib4fv(O.location,H);break;default:i.vertexAttrib1fv(O.location,H)}}}}g()}function M(){E();for(let P in n){let N=n[P];for(let I in N){let R=N[I];for(let C in R){let U=R[C];for(let k in U)d(U[k].object),delete U[k];delete R[C]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let I in N){let R=N[I];for(let C in R){let U=R[C];for(let k in U)d(U[k].object),delete U[k];delete R[C]}}delete n[P.id]}function T(P){for(let N in n){let I=n[N];for(let R in I){let C=I[R];if(C[P.id]===void 0)continue;let U=C[P.id];for(let k in U)d(U[k].object),delete U[k];delete C[P.id]}}}function _(P){for(let N in n){let I=n[N],R=P.isInstancedMesh===!0?P.id:0,C=I[R];if(C!==void 0){for(let U in C){let k=C[U];for(let W in k)d(k[W].object),delete k[W];delete C[U]}delete I[R],Object.keys(I).length===0&&delete n[N]}}}function E(){A(),o=!0,r!==s&&(r=s,u(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:f,disableUnusedAttributes:g}}function Nx(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];t.update(v,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ux(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==$n&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let _=T===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Nn&&T!==di&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",d=c(u);d!==u&&(ct("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let p=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&v===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),l=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:v,maxTextures:m,maxVertexTextures:l,maxTextureSize:x,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:g,maxVaryings:b,maxFragmentUniforms:y,maxSamples:M,samples:S}}function Fx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Si,a=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,v){let m=p.length!==0||v||n!==0||s;return s=v,n=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,v){t=d(p,v,0)},this.setState=function(p,v,m){let l=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,h=i.get(p);if(!s||l===null||l.length===0||r&&!f)r?d(null):u();else{let g=r?0:n,b=g*4,y=h.clippingState||null;c.value=y,y=d(l,v,b,m);for(let M=0;M!==b;++M)y[M]=t[M];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,v,m,l){let x=p!==null?p.length:0,f=null;if(x!==0){if(f=c.value,l!==!0||f===null){let h=m+x*4,g=v.matrixWorldInverse;a.getNormalMatrix(g),(f===null||f.length<h)&&(f=new Float32Array(h));for(let b=0,y=m;b!==x;++b,y+=4)o.copy(p[b]).applyMatrix4(g,a),o.normal.toArray(f,y),f[y+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}var $r=4,Bx=6,Ox=20,zx=256,Ta=new vs,S0=new Ee,Xh=null,qh=0,Yh=0,Zh=!1,kx=new z,Js=new z,Xc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=kx}=r;Xh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,qh,Yh),this._renderer.xr.enabled=Zh,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:hn,format:$n,colorSpace:zo,depthBuffer:!1},s=T0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Hx(r)),this._blurMaterial=Gx(r,e,t),this._ggxMaterial=Vx(r,e,t)}return s}_compileMaterial(e){let t=new mt(new yt,e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,s,r){let c=new Rn(90,1,t,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,m=p.toneMapping;p.getClearColor(S0),p.toneMapping=Ei,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new Gt,new on({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,f=x.material,h=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,h=!0):(f.color.copy(S0),h=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,u[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[b],r.y,r.z)):y===1?(c.up.set(0,0,u[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[b],r.z)):(c.up.set(0,u[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[b]));let M=this._cubeSize;Zr(s,y*M,b>2?M:0,M,M),p.setRenderTarget(s),h&&p.render(x,c),p.render(e,c)}p.toneMapping=m,p.autoClear=v,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ys||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=w0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Zr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ta)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,u=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(u*u-d*d),v=u*1.25,m=p*v,{_lodMax:l}=this,x=this._sizeLods[n],f=3*x*(n>l-$r?n-l+$r:0),h=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=l-t,Zr(r,f,h,3*x,2*x),s.setRenderTarget(r),s.render(a,Ta),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=l-n,Zr(e,f,h,3*x,2*x),s.setRenderTarget(e),s.render(a,Ta)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let u=a.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],p=3*d*(s>this._lodMax-$r?s-this._lodMax+$r:0),v=4*(this._cubeSize-d);Zr(t,p,v,3*d,2*d),o.setRenderTarget(t),o.render(c,Ta)}};function Hx(i){let e=[],t=[],n=i,s=i-$r+1+Bx;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,u=1+a,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,v=6,m=3,l=new Float32Array(m*v*p),x=new Float32Array(m*v*p);for(let h=0;h<p;h++){let g=h%3*2/3-1,b=h>2?0:-1,y=[g,b,0,g+2/3,b,0,g+2/3,b+1,0,g,b,0,g+2/3,b+1,0,g,b+1,0];l.set(y,m*v*h);for(let M=0;M<v;M++){let S=d[M*2]*2-1,T=d[M*2+1]*2-1;h===0?Js.set(1,T,S):h===1?Js.set(-S,1,-T):h===2?Js.set(-S,T,1):h===3?Js.set(-1,T,-S):h===4?Js.set(-S,-1,T):Js.set(S,T,-1),Js.toArray(x,(h*v+M)*m)}}let f=new yt;f.setAttribute("position",new Ot(l,m)),f.setAttribute("outputDirection",new Ot(x,m)),t.push(new mt(f,null)),n>$r&&n--}return{lodMeshes:t,sizeLods:e}}function T0(i,e,t){let n=new Ft(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Vx(i,e,t){return new xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Gx(i,e,t){return new xt({name:"SphericalGaussianBlur",defines:{SAMPLES:Ox,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function E0(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function w0(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var qc=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:kn});r.uniforms.tEquirect.value=t;let o=new mt(s,r),a=t.minFilter;return t.minFilter===Hn&&(t.minFilter=zt),new jl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Wx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(v,m=!1){return v==null?null:m?o(v):r(v)}function r(v){if(v&&v.isTexture){let m=v.mapping;if(m===tc||m===nc)if(e.has(v)){let l=e.get(v).texture;return a(l,v.mapping)}else{let l=v.image;if(l&&l.height>0){let x=new qc(l.height);return x.fromEquirectangularTexture(i,v),e.set(v,x),v.addEventListener("dispose",u),a(x.texture,v.mapping)}else return null}}return v}function o(v){if(v&&v.isTexture){let m=v.mapping,l=m===tc||m===nc,x=m===ys||m===qs;if(l||x){let f=t.get(v),h=f!==void 0?f.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==h)return n===null&&(n=new Xc(i)),f=l?n.fromEquirectangular(v,f):n.fromCubemap(v,f),f.texture.pmremVersion=v.pmremVersion,t.set(v,f),f.texture;if(f!==void 0)return f.texture;{let g=v.image;return l&&g&&g.height>0||x&&g&&c(g)?(n===null&&(n=new Xc(i)),f=l?n.fromEquirectangular(v):n.fromCubemap(v),f.texture.pmremVersion=v.pmremVersion,t.set(v,f),v.addEventListener("dispose",d),f.texture):null}}}return v}function a(v,m){return m===tc?v.mapping=ys:m===nc&&(v.mapping=qs),v}function c(v){let m=0,l=6;for(let x=0;x<l;x++)v[x]!==void 0&&m++;return m===l}function u(v){let m=v.target;m.removeEventListener("dispose",u);let l=e.get(m);l!==void 0&&(e.delete(m),l.dispose())}function d(v){let m=v.target;m.removeEventListener("dispose",d);let l=t.get(m);l!==void 0&&(t.delete(m),l.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Xx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ks("WebGLRenderer: "+n+" extension not supported."),s}}}function qx(i,e,t,n){let s={},r=new WeakMap;function o(p){let v=p.target;v.index!==null&&e.remove(v.index);for(let l in v.attributes)e.remove(v.attributes[l]);v.removeEventListener("dispose",o),delete s[v.id];let m=r.get(v);m&&(e.remove(m),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function a(p,v){return s[v.id]===!0||(v.addEventListener("dispose",o),s[v.id]=!0,t.memory.geometries++),v}function c(p){let v=p.attributes;for(let m in v)e.update(v[m],i.ARRAY_BUFFER)}function u(p){let v=[],m=p.index,l=p.attributes.position,x=0;if(l===void 0)return;if(m!==null){let g=m.array;x=m.version;for(let b=0,y=g.length;b<y;b+=3){let M=g[b+0],S=g[b+1],T=g[b+2];v.push(M,S,S,T,T,M)}}else{let g=l.array;x=l.version;for(let b=0,y=g.length/3-1;b<y;b+=3){let M=b+0,S=b+1,T=b+2;v.push(M,S,S,T,T,M)}}let f=new(l.count>=65535?Yo:qo)(v,1);f.version=x;let h=r.get(p);h&&e.remove(h),r.set(p,f)}function d(p){let v=r.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&u(p)}else u(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:d}}function Yx(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,v){i.drawElements(n,v,r,p*o),t.update(v,n,1)}function u(p,v,m){m!==0&&(i.drawElementsInstanced(n,v,r,p*o,m),t.update(v,n,m))}function d(p,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,r,p,0,m);let x=0;for(let f=0;f<m;f++)x+=v[f];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function Zx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $x(i,e,t){let n=new WeakMap,s=new Tt;function r(o,a,c){let u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0,v=n.get(a);if(v===void 0||v.count!==p){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};v!==void 0&&v.texture.dispose();let m=a.morphAttributes.position!==void 0,l=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],b=0;m===!0&&(b=1),l===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*M*4*p),T=new Go(S,y,M,p);T.type=di,T.needsUpdate=!0;let _=b*4;for(let A=0;A<p;A++){let P=f[A],N=h[A],I=g[A],R=y*M*4*A;for(let C=0;C<P.count;C++){let U=C*_;m===!0&&(s.fromBufferAttribute(P,C),S[R+U+0]=s.x,S[R+U+1]=s.y,S[R+U+2]=s.z,S[R+U+3]=0),l===!0&&(s.fromBufferAttribute(N,C),S[R+U+4]=s.x,S[R+U+5]=s.y,S[R+U+6]=s.z,S[R+U+7]=0),x===!0&&(s.fromBufferAttribute(I,C),S[R+U+8]=s.x,S[R+U+9]=s.y,S[R+U+10]=s.z,S[R+U+11]=I.itemSize===4?s.w:1)}}v={count:p,texture:T,size:new Ie(y,M)},n.set(a,v),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let x=0;x<u.length;x++)m+=u[x];let l=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",l),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:r}}function Jx(i,e,t,n,s){let r=new WeakMap;function o(u){let d=s.render.frame,p=u.geometry,v=e.get(u,p);if(r.get(v)!==d&&(e.update(v),r.set(v,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==d&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){let m=u.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return v}function a(){r=new WeakMap}function c(u){let d=u.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var Kx={[yh]:"LINEAR_TONE_MAPPING",[Mh]:"REINHARD_TONE_MAPPING",[bh]:"CINEON_TONE_MAPPING",[Sh]:"ACES_FILMIC_TONE_MAPPING",[Eh]:"AGX_TONE_MAPPING",[ma]:"NEUTRAL_TONE_MAPPING",[Th]:"CUSTOM_TONE_MAPPING"};function jx(i,e,t,n,s,r){let o=new Ft(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,u=new yt;u.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Je([0,2,0,0,2,0],2));let d=new kl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new mt(u,d),v=new vs(-1,1,1,-1,0,1),m=null,l=null,x=!1,f,h=null,g=[],b=!1;this.setSize=function(y,M){o.setSize(y,M),a!==null&&a.setSize(y,M),c!==null&&c.setSize(y,M);for(let S=0;S<g.length;S++){let T=g[S];T.setSize&&T.setSize(y,M)}},this.setEffects=function(y){g=y,b=g.length>0&&g[0].isRenderPass===!0;let M=o.width,S=o.height;g.length>0&&a===null&&(a=new Ft(M,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}),c=new Ft(M,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<g.length;T++){let _=g[T];_.setSize&&_.setSize(M,S)}},this.begin=function(y,M){if(x||y.toneMapping===Ei&&g.length===0)return!1;if(h=M,M!==null){let S=M.width,T=M.height;(o.width!==S||o.height!==T)&&this.setSize(S,T)}return b===!1&&y.setRenderTarget(o),f=y.toneMapping,y.toneMapping=Ei,!0},this.hasRenderPass=function(){return b},this.end=function(y,M){y.toneMapping=f,x=!0;let S=o,T=a;for(let _=0;_<g.length;_++){let E=g[_];E.enabled!==!1&&(E.render(y,T,S,M),E.needsSwap!==!1&&(S=T,T=T===a?c:a))}if(m!==y.outputColorSpace||l!==y.toneMapping){m=y.outputColorSpace,l=y.toneMapping,d.defines={},St.getTransfer(m)===It&&(d.defines.SRGB_TRANSFER="");let _=Kx[l];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(h),y.render(p,v),h=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var q0=new On,Kh=new ds(1,1),Y0=new Go,Z0=new Rl,$0=new Jo,A0=[],R0=[],C0=new Float32Array(16),P0=new Float32Array(9),I0=new Float32Array(4);function Kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=A0[s];if(r===void 0&&(r=new Float32Array(s),A0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $c(i,e){let t=R0[e];t===void 0&&(t=new Int32Array(e),R0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function i_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;I0.set(n),i.uniformMatrix2fv(this.addr,!1,I0),gn(t,n)}}function s_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;P0.set(n),i.uniformMatrix3fv(this.addr,!1,P0),gn(t,n)}}function r_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;C0.set(n),i.uniformMatrix4fv(this.addr,!1,C0),gn(t,n)}}function o_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function u_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function p_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kh.compareFunction=t.isReversedDepthBuffer()?Vc:Hc,r=Kh):r=q0,t.setTexture2D(e||r,s)}function m_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Z0,s)}function g_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$0,s)}function v_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Y0,s)}function x_(i){switch(i){case 5126:return Qx;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return o_;case 35667:case 35671:return a_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return u_;case 36294:return h_;case 36295:return f_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return v_}}function __(i,e){i.uniform1fv(this.addr,e)}function y_(i,e){let t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function M_(i,e){let t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function b_(i,e){let t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function S_(i,e){let t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function T_(i,e){let t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function E_(i,e){let t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function w_(i,e){i.uniform1iv(this.addr,e)}function A_(i,e){i.uniform2iv(this.addr,e)}function R_(i,e){i.uniform3iv(this.addr,e)}function C_(i,e){i.uniform4iv(this.addr,e)}function P_(i,e){i.uniform1uiv(this.addr,e)}function I_(i,e){i.uniform2uiv(this.addr,e)}function L_(i,e){i.uniform3uiv(this.addr,e)}function D_(i,e){i.uniform4uiv(this.addr,e)}function N_(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Kh:o=q0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function U_(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Z0,r[o])}function F_(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||$0,r[o])}function B_(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Y0,r[o])}function O_(i){switch(i){case 5126:return __;case 35664:return y_;case 35665:return M_;case 35666:return b_;case 35674:return S_;case 35675:return T_;case 35676:return E_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return I_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return B_}}var jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=x_(t.type)}},Qh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O_(t.type)}},ef=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},$h=/(\w+)(\])?(\[|\.)?/g;function L0(i,e){i.seq.push(e),i.map[e.id]=e}function z_(i,e,t){let n=i.name,s=n.length;for($h.lastIndex=0;;){let r=$h.exec(n),o=$h.lastIndex,a=r[1],c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){L0(t,u===void 0?new jh(a,i,e):new Qh(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new ef(a),L0(t,p)),t=p}}}var Jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);z_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function D0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var k_=37297,H_=0;function V_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var N0=new dt;function G_(i){St._getMatrix(N0,St.workingColorSpace,i);let e=`mat3( ${N0.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case ko:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function U0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+V_(i.getShaderSource(e),a)}else return r}function W_(i,e){let t=G_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var X_={[yh]:"Linear",[Mh]:"Reinhard",[bh]:"Cineon",[Sh]:"ACESFilmic",[Eh]:"AgX",[ma]:"Neutral",[Th]:"Custom"};function q_(i,e){let t=X_[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wc=new z;function Y_(){St.getLuminanceCoefficients(Wc);let i=Wc.x.toFixed(4),e=Wc.y.toFixed(4),t=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function $_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wa(i){return i!==""}function F0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var K_=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(i){return i.replace(K_,Q_)}var j_=new Map;function Q_(i,e){let t=ht[e];if(t===void 0){let n=j_.get(e);if(n!==void 0)t=ht[n],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tf(t)}var ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O0(i){return i.replace(ey,ty)}function ty(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function z0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var ny={[Ws]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function iy(i){return ny[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sy={[ys]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE_UV"};function ry(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":sy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var oy={[qs]:"ENVMAP_MODE_REFRACTION"};function ay(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":oy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ly={[_h]:"ENVMAP_BLENDING_MULTIPLY",[Qd]:"ENVMAP_BLENDING_MIX",[e0]:"ENVMAP_BLENDING_ADD"};function cy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ly[i.combine]||"ENVMAP_BLENDING_NONE"}function uy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function hy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=iy(t),u=ry(t),d=ay(t),p=cy(t),v=uy(t),m=Z_(t),l=$_(r),x=s.createProgram(),f,h,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,l].filter(wa).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,l].filter(wa).join(`
`),h.length>0&&(h+=`
`)):(f=[z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,l,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),h=[z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,l,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?ht.tonemapping_pars_fragment:"",t.toneMapping!==Ei?q_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,W_("linearToOutputTexel",t.outputColorSpace),Y_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),o=tf(o),o=F0(o,t),o=B0(o,t),a=tf(a),a=F0(a,t),a=B0(a,t),o=O0(o),a=O0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let b=g+f+o,y=g+h+a,M=D0(s,s.VERTEX_SHADER,b),S=D0(s,s.FRAGMENT_SHADER,y);s.attachShader(x,M),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",I=s.getShaderInfoLog(M)||"",R=s.getShaderInfoLog(S)||"",C=N.trim(),U=I.trim(),k=R.trim(),W=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,S);else{let V=U0(s,M,"vertex"),H=U0(s,S,"fragment");ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+V+`
`+H)}else C!==""?ct("WebGLProgram: Program Info Log:",C):(U===""||k==="")&&(O=!1);O&&(P.diagnostics={runnable:W,programLog:C,vertexShader:{log:U,prefix:f},fragmentShader:{log:k,prefix:h}})}s.deleteShader(M),s.deleteShader(S),_=new Jr(s,x),E=J_(s,x)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,k_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}var fy=0,nf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sf(e),t.set(e,n)),n}},sf=class{constructor(e){this.id=fy++,this.code=e,this.usedTimes=0}};function dy(i){return i===bs||i===ba||i===Sa}function py(i,e,t,n,s,r){let o=new Wo,a=new nf,c=new Set,u=[],d=new Map,p=n.logarithmicDepthBuffer,v=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function l(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,E,A,P,N,I){let R=P.fog,C=N.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=e.get(_.envMap||U,k),O=W&&W.mapping===ga?W.image.height:null,V=m[_.type];_.precision!==null&&(v=n.getMaxPrecision(_.precision),v!==_.precision&&ct("WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));let H=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ie=H!==void 0?H.length:0,fe=0;C.morphAttributes.position!==void 0&&(fe=1),C.morphAttributes.normal!==void 0&&(fe=2),C.morphAttributes.color!==void 0&&(fe=3);let et,Re,He,J;if(V){let Dt=Oi[V];et=Dt.vertexShader,Re=Dt.fragmentShader}else{et=_.vertexShader,Re=_.fragmentShader;let Dt=a.getVertexShaderStage(_),lt=a.getFragmentShaderStage(_);a.update(_,Dt,lt),He=Dt.id,J=lt.id}let Y=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Le=N.isInstancedMesh===!0,we=N.isBatchedMesh===!0,We=!!_.map,Ke=!!_.matcap,Be=!!W,pt=!!_.aoMap,Q=!!_.lightMap,pe=!!_.bumpMap&&_.wireframe===!1,Te=!!_.normalMap,K=!!_.displacementMap,ee=!!_.emissiveMap,re=!!_.metalnessMap,se=!!_.roughnessMap,F=_.anisotropy>0,me=_.clearcoat>0,j=_.dispersion>0,D=_.retroreflectivity>0,w=_.iridescence>0,G=_.sheen>0,q=_.transmission>0,B=F&&!!_.anisotropyMap,le=me&&!!_.clearcoatMap,_e=me&&!!_.clearcoatNormalMap,oe=me&&!!_.clearcoatRoughnessMap,ce=w&&!!_.iridescenceMap,de=w&&!!_.iridescenceThicknessMap,Ce=G&&!!_.sheenColorMap,ve=G&&!!_.sheenRoughnessMap,xe=!!_.specularMap,Ue=!!_.specularColorMap,je=!!_.specularIntensityMap,tt=q&&!!_.transmissionMap,X=q&&!!_.thicknessMap,Pe=!!_.gradientMap,he=!!_.alphaMap,De=_.alphaTest>0,ze=!!_.alphaHash,Se=!!_.extensions,nt=Ei;_.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(nt=i.toneMapping);let Qe={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:Re,defines:_.defines,customVertexShaderID:He,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:we,batchingColor:we&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:Ke,envMap:Be,envMapMode:Be&&W.mapping,envMapCubeUVHeight:O,aoMap:pt,lightMap:Q,bumpMap:pe,normalMap:Te,displacementMap:K,emissiveMap:ee,normalMapObjectSpace:Te&&_.normalMapType===i0,normalMapTangentSpace:Te&&_.normalMapType===kc,packedNormalMap:Te&&_.normalMapType===kc&&dy(_.normalMap.format),metalnessMap:re,roughnessMap:se,anisotropy:F,anisotropyMap:B,clearcoat:me,clearcoatMap:le,clearcoatNormalMap:_e,clearcoatRoughnessMap:oe,dispersion:j,retroreflection:D,iridescence:w,iridescenceMap:ce,iridescenceThicknessMap:de,sheen:G,sheenColorMap:Ce,sheenRoughnessMap:ve,specularMap:xe,specularColorMap:Ue,specularIntensityMap:je,transmission:q,transmissionMap:tt,thicknessMap:X,gradientMap:Pe,opaque:_.transparent===!1&&_.blending===Wr&&_.alphaToCoverage===!1,alphaMap:he,alphaTest:De,alphaHash:ze,combine:_.combine,mapUv:We&&l(_.map.channel),aoMapUv:pt&&l(_.aoMap.channel),lightMapUv:Q&&l(_.lightMap.channel),bumpMapUv:pe&&l(_.bumpMap.channel),normalMapUv:Te&&l(_.normalMap.channel),displacementMapUv:K&&l(_.displacementMap.channel),emissiveMapUv:ee&&l(_.emissiveMap.channel),metalnessMapUv:re&&l(_.metalnessMap.channel),roughnessMapUv:se&&l(_.roughnessMap.channel),anisotropyMapUv:B&&l(_.anisotropyMap.channel),clearcoatMapUv:le&&l(_.clearcoatMap.channel),clearcoatNormalMapUv:_e&&l(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&l(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&l(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&l(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&l(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&l(_.sheenRoughnessMap.channel),specularMapUv:xe&&l(_.specularMap.channel),specularColorMapUv:Ue&&l(_.specularColorMap.channel),specularIntensityMapUv:je&&l(_.specularIntensityMap.channel),transmissionMapUv:tt&&l(_.transmissionMap.channel),thicknessMapUv:X&&l(_.thicknessMap.channel),alphaMapUv:he&&l(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Te||F),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(We||he),fog:!!R,useFog:_.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&Te===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:fe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&St.getTransfer(_.map.colorSpace)===It,decodeVideoTextureEmissive:ee&&_.emissiveMap.isVideoTexture===!0&&St.getTransfer(_.emissiveMap.colorSpace)===It,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Tn,flipSided:_.side===Cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&_.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function f(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)E.push(A),E.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(h(E,_),g(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function h(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function g(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let E=m[_.type],A;if(E){let P=Oi[E];A=$s.clone(P.uniforms)}else A=_.uniforms;return A}function y(_,E){let A=d.get(E);return A!==void 0?++A.usedTimes:(A=new hy(i,E,_,s),u.push(A),d.set(E,A)),A}function M(_){if(--_.usedTimes===0){let E=u.indexOf(_);u[E]=u[u.length-1],u.pop(),d.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:S,programs:u,dispose:T}}function my(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function gy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function k0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function H0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(v){let m=0;return v.isInstancedMesh&&(m+=2),v.isSkinnedMesh&&(m+=1),m}function a(v,m,l,x,f,h){let g=i[e];return g===void 0?(g={id:v.id,object:v,geometry:m,material:l,materialVariant:o(v),groupOrder:x,renderOrder:v.renderOrder,z:f,group:h},i[e]=g):(g.id=v.id,g.object=v,g.geometry=m,g.material=l,g.materialVariant=o(v),g.groupOrder=x,g.renderOrder=v.renderOrder,g.z=f,g.group=h),e++,g}function c(v,m,l,x,f,h,g){g.reversedDepth===!0&&(f=-f);let b=a(v,m,l,x,f,h);l.transmission>0?n.push(b):l.transparent===!0?s.push(b):t.push(b)}function u(v,m,l,x,f,h){let g=a(v,m,l,x,f,h);l.transmission>0?n.unshift(g):l.transparent===!0?s.unshift(g):t.unshift(g)}function d(v,m){t.length>1&&t.sort(v||gy),n.length>1&&n.sort(m||k0),s.length>1&&s.sort(m||k0)}function p(){for(let v=e,m=i.length;v<m;v++){let l=i[v];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:p,sort:d}}function vy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new H0,i.set(n,[o])):s>=r.length?(o=new H0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function xy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ee};break;case"SpotLight":t={position:new z,direction:new z,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function _y(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var yy=0;function My(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function by(i){let e=new xy,t=_y(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new z);let s=new z,r=new st,o=new st;function a(u){let d=0,p=0,v=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let m=0,l=0,x=0,f=0,h=0,g=0,b=0,y=0,M=0,S=0,T=0,_=0,E=0,A=0;u.sort(My);for(let N=0,I=u.length;N<I;N++){let R=u[N],C=R.color,U=R.intensity,k=R.distance,W=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===bs?W=R.shadow.map.texture:W=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=C.r*U,p+=C.g*U,v+=C.b*U;else if(R.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(R.sh.coefficients[O],U);A++}else if(R.isSunLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,H=t.get(R);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[l]=H,n.sunShadowMap[l]=W;let ie=V.getViewportCount();for(let fe=0;fe<ie;fe++)n.sunShadowMatrix[x+fe]=V.getMatrix(fe),n.sunShadowCascade[x+fe]=V._cascadeData[fe];x+=ie,l++}n.sun[m]=O,m++}else if(R.isDirectionalLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,H=t.get(R);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=R.shadow.matrix,M++}n.directional[f]=O,f++}else if(R.isSpotLight){let O=e.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(C).multiplyScalar(U),O.distance=k,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,n.spot[g]=O;let V=R.shadow;if(R.map&&(n.spotLightMap[_]=R.map,_++,V.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[g]=V.matrix,R.castShadow){let H=t.get(R);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=W,T++}g++}else if(R.isRectAreaLight){let O=e.get(R);O.color.copy(C).multiplyScalar(U),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),n.rectArea[b]=O,b++}else if(R.isPointLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){let V=R.shadow,H=t.get(R);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,n.pointShadow[h]=H,n.pointShadowMap[h]=W,n.pointShadowMatrix[h]=R.shadow.matrix,S++}n.point[h]=O,h++}else if(R.isHemisphereLight){let O=e.get(R);O.skyColor.copy(R.color).multiplyScalar(U),O.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[y]=O,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=v;let P=n.hash;(P.sunLength!==m||P.directionalLength!==f||P.pointLength!==h||P.spotLength!==g||P.rectAreaLength!==b||P.hemiLength!==y||P.numSunShadows!==l||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==T||P.numSpotMaps!==_||P.numLightProbes!==A)&&(n.sun.length=m,n.directional.length=f,n.spot.length=g,n.rectArea.length=b,n.point.length=h,n.hemi.length=y,n.sunShadow.length=l,n.sunShadowMap.length=l,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.sunLength=m,P.directionalLength=f,P.pointLength=h,P.spotLength=g,P.rectAreaLength=b,P.hemiLength=y,P.numSunShadows=l,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=T,P.numSpotMaps=_,P.numLightProbes=A,n.version=yy++)}function c(u,d){let p=0,v=0,m=0,l=0,x=0,f=0,h=d.matrixWorldInverse;for(let g=0,b=u.length;g<b;g++){let y=u[g];if(y.isSunLight){let M=n.sun[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),p++}else if(y.isDirectionalLight){let M=n.directional[v];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),v++}else if(y.isSpotLight){let M=n.spot[l];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),l++}else if(y.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),o.identity(),r.copy(y.matrixWorld),r.premultiply(h),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let M=n.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),m++}else if(y.isHemisphereLight){let M=n.hemi[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),f++}}}return{setup:a,setupView:c,state:n}}function V0(i){let e=new by(i),t=[],n=[],s=[];function r(v){p.camera=v,t.length=0,n.length=0,s.length=0}function o(v){t.push(v)}function a(v){n.push(v)}function c(v){s.push(v)}function u(){e.setup(t)}function d(v){e.setupView(t,v)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Sy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new V0(i),e.set(s,[a])):r>=o.length?(a=new V0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ey=`uniform sampler2D shadow_pass;
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
}`,wy=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Ay=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],G0=new st,Ea=new z,Jh=new z;function Ry(i,e,t){let n=new Ur,s=new Ie,r=new Ie,o=new Tt,a=new kr,c=new Hl,u={},d=t.maxTextureSize,p={[_s]:Cn,[Cn]:_s,[Tn]:Tn},v=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Ty,fragmentShader:Ey}),m=v.clone();m.defines.HORIZONTAL_PASS=1;let l=new yt;l.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(l,v),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let h=this.type;this.render=function(S,T,_){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;this.type===Nd&&(ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ws);let E=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(kn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let I=h!==this.type;I&&T.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(C=>C.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,C=S.length;R<C;R++){let U=S[R],k=U.shadow;if(k===void 0){ct("WebGLShadowMap:",U,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let W=k.getFrameExtents();s.multiply(W),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/W.x),s.x=r.x*W.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/W.y),s.y=r.y*W.y,k.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=O,k.map===null||I===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Gr){if(U.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ft(s.x,s.y,{format:bs,type:hn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),k.map.texture.name=U.name+".shadowMap",k.map.depthTexture=new ds(s.x,s.y,di),k.map.depthTexture.name=U.name+".shadowMapDepth",k.map.depthTexture.format=Ni,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=cn,k.map.depthTexture.magFilter=cn}else U.isPointLight?(k.map=new qc(s.x),k.map.depthTexture=new Ll(s.x,wi)):(k.map=new Ft(s.x,s.y),k.map.depthTexture=new ds(s.x,s.y,wi)),k.map.depthTexture.name=U.name+".shadowMap",k.map.depthTexture.format=Ni,this.type===Ws?(k.map.depthTexture.compareFunction=O?Vc:Hc,k.map.depthTexture.minFilter=zt,k.map.depthTexture.magFilter=zt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=cn,k.map.depthTexture.magFilter=cn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let V=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();U.isPointLight!==!0&&k.updateMatrices(U,_);for(let H=0;H<V;H++){let ie=k.getCamera(H);if(U.isPointLight){let fe=k.camera,et=k.matrix,Re=U.distance||fe.far;Re!==fe.far&&(fe.far=Re,fe.updateProjectionMatrix()),Ea.setFromMatrixPosition(U.matrixWorld),fe.position.copy(Ea),Jh.copy(fe.position),Jh.add(wy[H]),fe.up.copy(Ay[H]),fe.lookAt(Jh),fe.updateMatrixWorld(),et.makeTranslation(-Ea.x,-Ea.y,-Ea.z),G0.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(G0,fe.coordinateSystem,fe.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,H),i.clear();else{H===0&&(i.setRenderTarget(k.map),i.clear());let fe=k.getViewport(H);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),N.viewport(o)}n=k.getFrustum(H),y(T,_,ie,U,this.type)}k.isPointLightShadow!==!0&&this.type===Gr&&g(k,_),k.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(E,A,P)};function g(S,T){let _=e.update(x);v.defines.VSM_SAMPLES!==S.blurSamples&&(v.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,v.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ft(s.x,s.y,{format:bs,type:hn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),v.uniforms.shadow_pass.value=S.map.depthTexture,v.uniforms.resolution.value.set(S.map.width,S.map.height),v.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,_,v,x,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,_,m,x,null)}function b(S,T,_,E){let A=null,P=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)A=P;else if(A=_.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let N=A.uuid,I=T.uuid,R=u[N];R===void 0&&(R={},u[N]=R);let C=R[I];C===void 0&&(C=A.clone(),R[I]=C,T.addEventListener("dispose",M)),A=C}if(A.visible=T.visible,A.wireframe=T.wireframe,E===Gr?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:p[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=i.properties.get(A);N.light=_}return A}function y(S,T,_,E,A){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Gr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let I=e.update(S),R=S.material;if(Array.isArray(R)){let C=I.groups;for(let U=0,k=C.length;U<k;U++){let W=C[U],O=R[W.materialIndex];if(O&&O.visible){let V=b(S,O,E,A);S.onBeforeShadow(i,S,T,_,I,V,W),i.renderBufferDirect(_,null,I,V,S,W),S.onAfterShadow(i,S,T,_,I,V,W)}}}else if(R.visible){let C=b(S,R,E,A);S.onBeforeShadow(i,S,T,_,I,C,null),i.renderBufferDirect(_,null,I,C,S,null),S.onAfterShadow(i,S,T,_,I,C,null)}}let N=S.children;for(let I=0,R=N.length;I<R;I++)y(N[I],T,_,E,A)}function M(S){S.target.removeEventListener("dispose",M);for(let _ in u){let E=u[_],A=S.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function Cy(i,e){function t(){let X=!1,Pe=new Tt,he=null,De=new Tt(0,0,0,0);return{setMask:function(ze){he!==ze&&!X&&(i.colorMask(ze,ze,ze,ze),he=ze)},setLocked:function(ze){X=ze},setClear:function(ze,Se,nt,Qe,Dt){Dt===!0&&(ze*=Qe,Se*=Qe,nt*=Qe),Pe.set(ze,Se,nt,Qe),De.equals(Pe)===!1&&(i.clearColor(ze,Se,nt,Qe),De.copy(Pe))},reset:function(){X=!1,he=null,De.set(-1,0,0,0)}}}function n(){let X=!1,Pe=!1,he=null,De=null,ze=null;return{setReversed:function(Se){if(Pe!==Se){let nt=e.get("EXT_clip_control");Se?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Pe=Se;let Qe=ze;ze=null,this.setClear(Qe)}},getReversed:function(){return Pe},setTest:function(Se){Se?Y(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Se){he!==Se&&!X&&(i.depthMask(Se),he=Se)},setFunc:function(Se){if(Pe&&(Se=m0[Se]),De!==Se){switch(Se){case vl:i.depthFunc(i.NEVER);break;case xl:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=Se}},setLocked:function(Se){X=Se},setClear:function(Se){ze!==Se&&(ze=Se,Pe&&(Se=1-Se),i.clearDepth(Se))},reset:function(){X=!1,he=null,De=null,ze=null,Pe=!1}}}function s(){let X=!1,Pe=null,he=null,De=null,ze=null,Se=null,nt=null,Qe=null,Dt=null;return{setTest:function(lt){X||(lt?Y(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(lt){Pe!==lt&&!X&&(i.stencilMask(lt),Pe=lt)},setFunc:function(lt,Wn,Kn){(he!==lt||De!==Wn||ze!==Kn)&&(i.stencilFunc(lt,Wn,Kn),he=lt,De=Wn,ze=Kn)},setOp:function(lt,Wn,Kn){(Se!==lt||nt!==Wn||Qe!==Kn)&&(i.stencilOp(lt,Wn,Kn),Se=lt,nt=Wn,Qe=Kn)},setLocked:function(lt){X=lt},setClear:function(lt){Dt!==lt&&(i.clearStencil(lt),Dt=lt)},reset:function(){X=!1,Pe=null,he=null,De=null,ze=null,Se=null,nt=null,Qe=null,Dt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,u=new WeakMap,d={},p={},v={},m=new WeakMap,l=[],x=null,f=!1,h=null,g=null,b=null,y=null,M=null,S=null,T=null,_=new Ee(0,0,0),E=0,A=!1,P=null,N=null,I=null,R=null,C=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,W=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(O)[1]),k=W>=1):O.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),k=W>=2);let V=null,H={},ie=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),et=new Tt().fromArray(ie),Re=new Tt().fromArray(fe);function He(X,Pe,he,De){let ze=new Uint8Array(4),Se=i.createTexture();i.bindTexture(X,Se),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<he;nt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(Pe+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return Se}let J={};J[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(Rr),pe(!1),Te(ph),Y(i.CULL_FACE),pt(kn);function Y(X){d[X]!==!0&&(i.enable(X),d[X]=!0)}function Me(X){d[X]!==!1&&(i.disable(X),d[X]=!1)}function Le(X,Pe){return v[X]!==Pe?(i.bindFramebuffer(X,Pe),v[X]=Pe,X===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Pe),X===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function we(X,Pe){let he=l,De=!1;if(X){he=m.get(Pe),he===void 0&&(he=[],m.set(Pe,he));let ze=X.textures;if(he.length!==ze.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,nt=ze.length;Se<nt;Se++)he[Se]=i.COLOR_ATTACHMENT0+Se;he.length=ze.length,De=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,De=!0);De&&i.drawBuffers(he)}function We(X){return x!==X?(i.useProgram(X),x=X,!0):!1}let Ke={[Xs]:i.FUNC_ADD,[Fd]:i.FUNC_SUBTRACT,[Bd]:i.FUNC_REVERSE_SUBTRACT};Ke[Od]=i.MIN,Ke[zd]=i.MAX;let Be={[kd]:i.ZERO,[Hd]:i.ONE,[Vd]:i.SRC_COLOR,[vh]:i.SRC_ALPHA,[Zd]:i.SRC_ALPHA_SATURATE,[qd]:i.DST_COLOR,[Wd]:i.DST_ALPHA,[Gd]:i.ONE_MINUS_SRC_COLOR,[xh]:i.ONE_MINUS_SRC_ALPHA,[Yd]:i.ONE_MINUS_DST_COLOR,[Xd]:i.ONE_MINUS_DST_ALPHA,[$d]:i.CONSTANT_COLOR,[Jd]:i.ONE_MINUS_CONSTANT_COLOR,[Kd]:i.CONSTANT_ALPHA,[jd]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(X,Pe,he,De,ze,Se,nt,Qe,Dt,lt){if(X===kn){f===!0&&(Me(i.BLEND),f=!1);return}if(f===!1&&(Y(i.BLEND),f=!0),X!==Ud){if(X!==h||lt!==A){if((g!==Xs||M!==Xs)&&(i.blendEquation(i.FUNC_ADD),g=Xs,M=Xs),lt)switch(X){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",X);break}else switch(X){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mh:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",X);break}b=null,y=null,S=null,T=null,_.set(0,0,0),E=0,h=X,A=lt}return}ze=ze||Pe,Se=Se||he,nt=nt||De,(Pe!==g||ze!==M)&&(i.blendEquationSeparate(Ke[Pe],Ke[ze]),g=Pe,M=ze),(he!==b||De!==y||Se!==S||nt!==T)&&(i.blendFuncSeparate(Be[he],Be[De],Be[Se],Be[nt]),b=he,y=De,S=Se,T=nt),(Qe.equals(_)===!1||Dt!==E)&&(i.blendColor(Qe.r,Qe.g,Qe.b,Dt),_.copy(Qe),E=Dt),h=X,A=!1}function Q(X,Pe){X.side===Tn?Me(i.CULL_FACE):Y(i.CULL_FACE);let he=X.side===Cn;Pe&&(he=!he),pe(he),X.blending===Wr&&X.transparent===!1?pt(kn):pt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let De=X.stencilWrite;a.setTest(De),De&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ee(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(X){P!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),P=X)}function Te(X){X!==Ld?(Y(i.CULL_FACE),X!==N&&(X===ph?i.cullFace(i.BACK):X===Dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),N=X}function K(X){X!==I&&(k&&i.lineWidth(X),I=X)}function ee(X,Pe,he){X?(Y(i.POLYGON_OFFSET_FILL),(R!==Pe||C!==he)&&(R=Pe,C=he,o.getReversed()&&(Pe=-Pe),i.polygonOffset(Pe,he))):Me(i.POLYGON_OFFSET_FILL)}function re(X){X?Y(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function se(X){X===void 0&&(X=i.TEXTURE0+U-1),V!==X&&(i.activeTexture(X),V=X)}function F(X,Pe,he){he===void 0&&(V===null?he=i.TEXTURE0+U-1:he=V);let De=H[he];De===void 0&&(De={type:void 0,texture:void 0},H[he]=De),(De.type!==X||De.texture!==Pe)&&(V!==he&&(i.activeTexture(he),V=he),i.bindTexture(X,Pe||J[X]),De.type=X,De.texture=Pe)}function me(){let X=H[V];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function j(){try{i.compressedTexImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function w(){try{i.texSubImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function G(){try{i.texSubImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function B(){try{i.compressedTexSubImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function le(){try{i.texStorage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function _e(){try{i.texStorage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function oe(){try{i.texImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function ce(){try{i.texImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function de(X){return p[X]!==void 0?p[X]:i.getParameter(X)}function Ce(X,Pe){p[X]!==Pe&&(i.pixelStorei(X,Pe),p[X]=Pe)}function ve(X){et.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),et.copy(X))}function xe(X){Re.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Re.copy(X))}function Ue(X,Pe){let he=u.get(Pe);he===void 0&&(he=new WeakMap,u.set(Pe,he));let De=he.get(X);De===void 0&&(De=i.getUniformBlockIndex(Pe,X.name),he.set(X,De))}function je(X,Pe){let De=u.get(Pe).get(X);c.get(Pe)!==De&&(i.uniformBlockBinding(Pe,De,X.__bindingPointIndex),c.set(Pe,De))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},V=null,H={},v={},m=new WeakMap,l=[],x=null,f=!1,h=null,g=null,b=null,y=null,M=null,S=null,T=null,_=new Ee(0,0,0),E=0,A=!1,P=null,N=null,I=null,R=null,C=null,et.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:Me,bindFramebuffer:Le,drawBuffers:we,useProgram:We,setBlending:pt,setMaterial:Q,setFlipSided:pe,setCullFace:Te,setLineWidth:K,setPolygonOffset:ee,setScissorTest:re,activeTexture:se,bindTexture:F,unbindTexture:me,compressedTexImage2D:j,compressedTexImage3D:D,texImage2D:oe,texImage3D:ce,pixelStorei:Ce,getParameter:de,updateUBOMapping:Ue,uniformBlockBinding:je,texStorage2D:le,texStorage3D:_e,texSubImage2D:w,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:B,scissor:ve,viewport:xe,reset:tt}}function Py(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ie,d=new WeakMap,p=new Set,v,m=new WeakMap,l=!1;try{l=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,w){return l?new OffscreenCanvas(D,w):Ho("canvas")}function f(D,w,G){let q=1,B=j(D);if((B.width>G||B.height>G)&&(q=G/Math.max(B.width,B.height)),q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let le=Math.floor(q*B.width),_e=Math.floor(q*B.height);v===void 0&&(v=x(le,_e));let oe=w?x(le,_e):v;return oe.width=le,oe.height=_e,oe.getContext("2d").drawImage(D,0,0,le,_e),ct("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+le+"x"+_e+")."),oe}else return"data"in D&&ct("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),D;return D}function h(D){return D.generateMipmaps}function g(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,w,G,q,B,le=!1){if(D!==null){if(i[D]!==void 0)return i[D];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let _e;q&&(_e=e.get("EXT_texture_norm16"),_e||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=w;if(w===i.RED&&(G===i.FLOAT&&(oe=i.R32F),G===i.HALF_FLOAT&&(oe=i.R16F),G===i.UNSIGNED_BYTE&&(oe=i.R8),G===i.UNSIGNED_SHORT&&_e&&(oe=_e.R16_EXT),G===i.SHORT&&_e&&(oe=_e.R16_SNORM_EXT)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.R8UI),G===i.UNSIGNED_SHORT&&(oe=i.R16UI),G===i.UNSIGNED_INT&&(oe=i.R32UI),G===i.BYTE&&(oe=i.R8I),G===i.SHORT&&(oe=i.R16I),G===i.INT&&(oe=i.R32I)),w===i.RG&&(G===i.FLOAT&&(oe=i.RG32F),G===i.HALF_FLOAT&&(oe=i.RG16F),G===i.UNSIGNED_BYTE&&(oe=i.RG8),G===i.UNSIGNED_SHORT&&_e&&(oe=_e.RG16_EXT),G===i.SHORT&&_e&&(oe=_e.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RG8UI),G===i.UNSIGNED_SHORT&&(oe=i.RG16UI),G===i.UNSIGNED_INT&&(oe=i.RG32UI),G===i.BYTE&&(oe=i.RG8I),G===i.SHORT&&(oe=i.RG16I),G===i.INT&&(oe=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),G===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),G===i.UNSIGNED_INT&&(oe=i.RGB32UI),G===i.BYTE&&(oe=i.RGB8I),G===i.SHORT&&(oe=i.RGB16I),G===i.INT&&(oe=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),G===i.UNSIGNED_INT&&(oe=i.RGBA32UI),G===i.BYTE&&(oe=i.RGBA8I),G===i.SHORT&&(oe=i.RGBA16I),G===i.INT&&(oe=i.RGBA32I)),w===i.RGB&&(G===i.UNSIGNED_SHORT&&_e&&(oe=_e.RGB16_EXT),G===i.SHORT&&_e&&(oe=_e.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),w===i.RGBA){let ce=le?ko:St.getTransfer(B);G===i.FLOAT&&(oe=i.RGBA32F),G===i.HALF_FLOAT&&(oe=i.RGBA16F),G===i.UNSIGNED_BYTE&&(oe=ce===It?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&_e&&(oe=_e.RGBA16_EXT),G===i.SHORT&&_e&&(oe=_e.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(D,w){let G;return D?w===null||w===wi||w===qr?G=i.DEPTH24_STENCIL8:w===di?G=i.DEPTH32F_STENCIL8:w===Xr&&(G=i.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===wi||w===qr?G=i.DEPTH_COMPONENT24:w===di?G=i.DEPTH_COMPONENT32F:w===Xr&&(G=i.DEPTH_COMPONENT16),G}function S(D,w){return h(D)===!0||D.isFramebufferTexture&&D.minFilter!==cn&&D.minFilter!==zt?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function T(D){let w=D.target;w.removeEventListener("dispose",T),E(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&p.delete(w)}function _(D){let w=D.target;w.removeEventListener("dispose",_),P(w)}function E(D){let w=n.get(D);if(w.__webglInit===void 0)return;let G=D.source,q=m.get(G);if(q){let B=q[w.__cacheKey];B.usedTimes--,B.usedTimes===0&&A(D),Object.keys(q).length===0&&m.delete(G)}n.remove(D)}function A(D){let w=n.get(D);i.deleteTexture(w.__webglTexture);let G=D.source,q=m.get(G);delete q[w.__cacheKey],o.memory.textures--}function P(D){let w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(w.__webglFramebuffer[q]))for(let B=0;B<w.__webglFramebuffer[q].length;B++)i.deleteFramebuffer(w.__webglFramebuffer[q][B]);else i.deleteFramebuffer(w.__webglFramebuffer[q]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[q])}else{if(Array.isArray(w.__webglFramebuffer))for(let q=0;q<w.__webglFramebuffer.length;q++)i.deleteFramebuffer(w.__webglFramebuffer[q]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let q=0;q<w.__webglColorRenderbuffer.length;q++)w.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[q]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let G=D.textures;for(let q=0,B=G.length;q<B;q++){let le=n.get(G[q]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(G[q])}n.remove(D)}let N=0;function I(){N=0}function R(){return N}function C(D){N=D}function U(){let D=N;return D>=s.maxTextures&&ct("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,D}function k(D){let w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function W(D,w){let G=n.get(D);if(D.isVideoTexture&&F(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){let q=D.image;if(q===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(G,D,w);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function O(D,w){let G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){Me(G,D,w);return}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function V(D,w){let G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){Me(G,D,w);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function H(D,w){let G=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&G.__version!==D.version){Le(G,D,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}let ie={[Cr]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[Tl]:i.MIRRORED_REPEAT},fe={[cn]:i.NEAREST,[t0]:i.NEAREST_MIPMAP_NEAREST,[va]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[ic]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},et={[r0]:i.NEVER,[u0]:i.ALWAYS,[o0]:i.LESS,[Hc]:i.LEQUAL,[a0]:i.EQUAL,[Vc]:i.GEQUAL,[l0]:i.GREATER,[c0]:i.NOTEQUAL};function Re(D,w){if(w.type===di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===zt||w.magFilter===ic||w.magFilter===va||w.magFilter===Hn||w.minFilter===zt||w.minFilter===ic||w.minFilter===va||w.minFilter===Hn)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ie[w.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ie[w.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ie[w.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,fe[w.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,fe[w.minFilter]),w.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,et[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===cn||w.minFilter!==va&&w.minFilter!==Hn||w.type===di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function He(D,w){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",T));let q=w.source,B=m.get(q);B===void 0&&(B={},m.set(q,B));let le=k(w);if(le!==D.__cacheKey){B[le]===void 0&&(B[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),B[le].usedTimes++;let _e=B[D.__cacheKey];_e!==void 0&&(B[D.__cacheKey].usedTimes--,_e.usedTimes===0&&A(w)),D.__cacheKey=le,D.__webglTexture=B[le].texture}return G}function J(D,w,G){return Math.floor(Math.floor(D/G)/w)}function Y(D,w,G,q){let le=D.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,G,q,w.data);else{le.sort((Ce,ve)=>Ce.start-ve.start);let _e=0;for(let Ce=1;Ce<le.length;Ce++){let ve=le[_e],xe=le[Ce],Ue=ve.start+ve.count,je=J(xe.start,w.width,4),tt=J(ve.start,w.width,4);xe.start<=Ue+1&&je===tt&&J(xe.start+xe.count-1,w.width,4)===je?ve.count=Math.max(ve.count,xe.start+xe.count-ve.start):(++_e,le[_e]=xe)}le.length=_e+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ce=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Ce=0,ve=le.length;Ce<ve;Ce++){let xe=le[Ce],Ue=Math.floor(xe.start/4),je=Math.ceil(xe.count/4),tt=Ue%w.width,X=Math.floor(Ue/w.width),Pe=je,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,tt,X,Pe,he,G,q,w.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function Me(D,w,G){let q=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(q=i.TEXTURE_3D);let B=He(D,w),le=w.source;t.bindTexture(q,D.__webglTexture,i.TEXTURE0+G);let _e=n.get(le);if(le.version!==_e.__version||B===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let he=St.getPrimaries(St.workingColorSpace),De=w.colorSpace===Ai?null:St.getPrimaries(w.colorSpace),ze=w.colorSpace===Ai||he===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ce=f(w.image,!1,s.maxTextureSize);ce=me(w,ce);let de=r.convert(w.format,w.colorSpace),Ce=r.convert(w.type),ve=y(w.internalFormat,de,Ce,w.normalized,w.colorSpace,w.isVideoTexture);Re(q,w);let xe,Ue=w.mipmaps,je=w.isVideoTexture!==!0,tt=_e.__version===void 0||B===!0,X=le.dataReady,Pe=S(w,ce);if(w.isDepthTexture)ve=M(w.format===Ms,w.type),tt&&(je?t.texStorage2D(i.TEXTURE_2D,1,ve,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,ve,ce.width,ce.height,0,de,Ce,null));else if(w.isDataTexture)if(Ue.length>0){je&&tt&&t.texStorage2D(i.TEXTURE_2D,Pe,ve,Ue[0].width,Ue[0].height);for(let he=0,De=Ue.length;he<De;he++)xe=Ue[he],je?X&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,xe.width,xe.height,de,Ce,xe.data):t.texImage2D(i.TEXTURE_2D,he,ve,xe.width,xe.height,0,de,Ce,xe.data);w.generateMipmaps=!1}else je?(tt&&t.texStorage2D(i.TEXTURE_2D,Pe,ve,ce.width,ce.height),X&&Y(w,ce,de,Ce)):t.texImage2D(i.TEXTURE_2D,0,ve,ce.width,ce.height,0,de,Ce,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){je&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,ve,Ue[0].width,Ue[0].height,ce.depth);for(let he=0,De=Ue.length;he<De;he++)if(xe=Ue[he],w.format!==$n)if(de!==null)if(je){if(X)if(w.layerUpdates.size>0){let ze=zh(xe.width,xe.height,w.format,w.type);for(let Se of w.layerUpdates){let nt=xe.data.subarray(Se*ze/xe.data.BYTES_PER_ELEMENT,(Se+1)*ze/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Se,xe.width,xe.height,1,de,nt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,xe.width,xe.height,ce.depth,de,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,ve,xe.width,xe.height,ce.depth,0,xe.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,xe.width,xe.height,ce.depth,de,Ce,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,ve,xe.width,xe.height,ce.depth,0,de,Ce,xe.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{je&&tt&&t.texStorage2D(i.TEXTURE_2D,Pe,ve,Ue[0].width,Ue[0].height);for(let he=0,De=Ue.length;he<De;he++)xe=Ue[he],w.format!==$n?de!==null?je?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,xe.width,xe.height,de,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,he,ve,xe.width,xe.height,0,xe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?X&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,xe.width,xe.height,de,Ce,xe.data):t.texImage2D(i.TEXTURE_2D,he,ve,xe.width,xe.height,0,de,Ce,xe.data)}else if(w.isDataArrayTexture)if(je){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,ve,ce.width,ce.height,ce.depth),X)if(w.layerUpdates.size>0){let he=zh(ce.width,ce.height,w.format,w.type);for(let De of w.layerUpdates){let ze=ce.data.subarray(De*he/ce.data.BYTES_PER_ELEMENT,(De+1)*he/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,ce.width,ce.height,1,de,Ce,ze)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,de,Ce,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ce.width,ce.height,ce.depth,0,de,Ce,ce.data);else if(w.isData3DTexture)je?(tt&&t.texStorage3D(i.TEXTURE_3D,Pe,ve,ce.width,ce.height,ce.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,de,Ce,ce.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ce.width,ce.height,ce.depth,0,de,Ce,ce.data);else if(w.isFramebufferTexture){if(tt)if(je)t.texStorage2D(i.TEXTURE_2D,Pe,ve,ce.width,ce.height);else{let he=ce.width,De=ce.height;for(let ze=0;ze<Pe;ze++)t.texImage2D(i.TEXTURE_2D,ze,ve,he,De,0,de,Ce,null),he>>=1,De>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ce.parentNode!==he){he.appendChild(ce),p.add(w),he.onpaint=De=>{let ze=De.changedElements;for(let Se of p)ze.includes(Se.image)&&(Se.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ce);else{let ze=i.RGBA,Se=i.RGBA,nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,Se,nt,ce)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(je&&tt){let he=j(Ue[0]);t.texStorage2D(i.TEXTURE_2D,Pe,ve,he.width,he.height)}for(let he=0,De=Ue.length;he<De;he++)xe=Ue[he],je?X&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,de,Ce,xe):t.texImage2D(i.TEXTURE_2D,he,ve,de,Ce,xe);w.generateMipmaps=!1}else if(je){if(tt){let he=j(ce);t.texStorage2D(i.TEXTURE_2D,Pe,ve,he.width,he.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ce,ce)}else t.texImage2D(i.TEXTURE_2D,0,ve,de,Ce,ce);h(w)&&g(q),_e.__version=le.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Le(D,w,G){if(w.image.length!==6)return;let q=He(D,w),B=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+G);let le=n.get(B);if(B.version!==le.__version||q===!0){t.activeTexture(i.TEXTURE0+G);let _e=St.getPrimaries(St.workingColorSpace),oe=w.colorSpace===Ai?null:St.getPrimaries(w.colorSpace),ce=w.colorSpace===Ai||_e===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let de=w.isCompressedTexture||w.image[0].isCompressedTexture,Ce=w.image[0]&&w.image[0].isDataTexture,ve=[];for(let Se=0;Se<6;Se++)!de&&!Ce?ve[Se]=f(w.image[Se],!0,s.maxCubemapSize):ve[Se]=Ce?w.image[Se].image:w.image[Se],ve[Se]=me(w,ve[Se]);let xe=ve[0],Ue=r.convert(w.format,w.colorSpace),je=r.convert(w.type),tt=y(w.internalFormat,Ue,je,w.normalized,w.colorSpace),X=w.isVideoTexture!==!0,Pe=le.__version===void 0||q===!0,he=B.dataReady,De=S(w,xe);Re(i.TEXTURE_CUBE_MAP,w);let ze;if(de){X&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,tt,xe.width,xe.height);for(let Se=0;Se<6;Se++){ze=ve[Se].mipmaps;for(let nt=0;nt<ze.length;nt++){let Qe=ze[nt];w.format!==$n?Ue!==null?X?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt,0,0,Qe.width,Qe.height,Ue,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt,tt,Qe.width,Qe.height,0,Qe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt,0,0,Qe.width,Qe.height,Ue,je,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt,tt,Qe.width,Qe.height,0,Ue,je,Qe.data)}}}else{if(ze=w.mipmaps,X&&Pe){ze.length>0&&De++;let Se=j(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,tt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ce){X?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ve[Se].width,ve[Se].height,Ue,je,ve[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,tt,ve[Se].width,ve[Se].height,0,Ue,je,ve[Se].data);for(let nt=0;nt<ze.length;nt++){let Dt=ze[nt].image[Se].image;X?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt+1,0,0,Dt.width,Dt.height,Ue,je,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt+1,tt,Dt.width,Dt.height,0,Ue,je,Dt.data)}}else{X?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ue,je,ve[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,tt,Ue,je,ve[Se]);for(let nt=0;nt<ze.length;nt++){let Qe=ze[nt];X?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt+1,0,0,Ue,je,Qe.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt+1,tt,Ue,je,Qe.image[Se])}}}h(w)&&g(i.TEXTURE_CUBE_MAP),le.__version=B.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function we(D,w,G,q,B,le){let _e=r.convert(G.format,G.colorSpace),oe=r.convert(G.type),ce=y(G.internalFormat,_e,oe,G.normalized,G.colorSpace),de=n.get(w),Ce=n.get(G);if(Ce.__renderTarget=w,!de.__hasExternalTextures){let ve=Math.max(1,w.width>>le),xe=Math.max(1,w.height>>le);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?t.texImage3D(B,le,ce,ve,xe,w.depth,0,_e,oe,null):t.texImage2D(B,le,ce,ve,xe,0,_e,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),se(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,B,Ce.__webglTexture,0,re(w)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,B,Ce.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(D,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,D),w.depthBuffer){let q=w.depthTexture,B=q&&q.isDepthTexture?q.type:null,le=M(w.stencilBuffer,B),_e=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;se(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(w),le,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(w),le,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,D)}else{let q=w.textures;for(let B=0;B<q.length;B++){let le=q[B],_e=r.convert(le.format,le.colorSpace),oe=r.convert(le.type),ce=y(le.internalFormat,_e,oe,le.normalized,le.colorSpace);se(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(w),ce,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(w),ce,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ce,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(D,w,G){let q=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let B=n.get(w.depthTexture);if(B.__renderTarget=w,(!B.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q){if(B.__webglInit===void 0&&(B.__webglInit=!0,w.depthTexture.addEventListener("dispose",T)),B.__webglTexture===void 0){B.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Re(i.TEXTURE_CUBE_MAP,w.depthTexture);let de=r.convert(w.depthTexture.format),Ce=r.convert(w.depthTexture.type),ve;w.depthTexture.format===Ni?ve=i.DEPTH_COMPONENT24:w.depthTexture.format===Ms&&(ve=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ve,w.width,w.height,0,de,Ce,null)}}else W(w.depthTexture,0);let le=B.__webglTexture,_e=re(w),oe=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ce=w.depthTexture.format===Ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ni)se(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,le,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,le,0);else if(w.depthTexture.format===Ms)se(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,le,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(D){let w=n.get(D),G=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){let q=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),q){let B=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,q.removeEventListener("dispose",B)};q.addEventListener("dispose",B),w.__depthDisposeCallback=B}w.__boundDepthTexture=q}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)Ke(w.__webglFramebuffer[q],D,q);else{let q=D.texture.mipmaps;q&&q.length>0?Ke(w.__webglFramebuffer[0],D,0):Ke(w.__webglFramebuffer,D,0)}else if(G){w.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[q]),w.__webglDepthbuffer[q]===void 0)w.__webglDepthbuffer[q]=i.createRenderbuffer(),We(w.__webglDepthbuffer[q],D,!1);else{let B=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,le)}}else{let q=D.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),We(w.__webglDepthbuffer,D,!1);else{let B=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(D,w,G){let q=n.get(D);w!==void 0&&we(q.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Be(D)}function Q(D){let w=D.texture,G=n.get(D),q=n.get(w);D.addEventListener("dispose",_);let B=D.textures,le=D.isWebGLCubeRenderTarget===!0,_e=B.length>1;if(_e||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=w.version,o.memory.textures++),le){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let ce=0;ce<w.mipmaps.length;ce++)G.__webglFramebuffer[oe][ce]=i.createFramebuffer()}else G.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)G.__webglFramebuffer[oe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(_e)for(let oe=0,ce=B.length;oe<ce;oe++){let de=n.get(B[oe]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&se(D)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<B.length;oe++){let ce=B[oe];G.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);let de=r.convert(ce.format,ce.colorSpace),Ce=r.convert(ce.type),ve=y(ce.internalFormat,de,Ce,ce.normalized,ce.colorSpace,D.isXRRenderTarget===!0),xe=re(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ve,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),We(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Re(i.TEXTURE_CUBE_MAP,w);for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)we(G.__webglFramebuffer[oe][ce],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else we(G.__webglFramebuffer[oe],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);h(w)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let oe=0,ce=B.length;oe<ce;oe++){let de=B[oe],Ce=n.get(de),ve=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ve=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ce.__webglTexture),Re(ve,de),we(G.__webglFramebuffer,D,de,i.COLOR_ATTACHMENT0+oe,ve,0),h(de)&&g(ve)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(oe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,q.__webglTexture),Re(oe,w),w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)we(G.__webglFramebuffer[ce],D,w,i.COLOR_ATTACHMENT0,oe,ce);else we(G.__webglFramebuffer,D,w,i.COLOR_ATTACHMENT0,oe,0);h(w)&&g(oe),t.unbindTexture()}D.depthBuffer&&Be(D)}function pe(D){let w=D.textures;for(let G=0,q=w.length;G<q;G++){let B=w[G];if(h(B)){let le=b(D),_e=n.get(B).__webglTexture;t.bindTexture(le,_e),g(le),t.unbindTexture()}}}let Te=[],K=[];function ee(D){if(D.samples>0){if(se(D)===!1){let w=D.textures,G=D.width,q=D.height,B=i.COLOR_BUFFER_BIT,le=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(D),oe=w.length>1;if(oe)for(let de=0;de<w.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let ce=D.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let de=0;de<w.length;de++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);let Ce=n.get(w[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,G,q,0,0,G,q,B,i.NEAREST),c===!0&&(Te.length=0,K.length=0,Te.push(i.COLOR_ATTACHMENT0+de),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(Te.push(le),K.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<w.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);let Ce=n.get(w[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&c){let w=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function re(D){return Math.min(s.maxSamples,D.samples)}function se(D){let w=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function F(D){let w=o.render.frame;d.get(D)!==w&&(d.set(D,w),D.update())}function me(D,w){let G=D.colorSpace,q=D.format,B=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==zo&&G!==Ai&&(St.getTransfer(G)===It?(q!==$n||B!==Nn)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",G)),w}function j(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.getTextureUnits=R,this.setTextureUnits=C,this.setTexture2D=W,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=H,this.rebindTextures=pt,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=we,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Iy(i,e){function t(n,s=Ai){let r,o=St.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ah)return i.BYTE;if(n===Rh)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===sc)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===Ih)return i.ALPHA;if(n===Lh)return i.RGB;if(n===$n)return i.RGBA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===Ys)return i.RED;if(n===ac)return i.RED_INTEGER;if(n===bs)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===cc)return i.RGBA_INTEGER;if(n===xa||n===_a||n===ya||n===Ma)if(o===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uc||n===hc||n===fc||n===dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc||n===vc||n===xc||n===ba||n===_c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pc||n===mc)return o===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vc)return r.COMPRESSED_R11_EAC;if(n===xc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ba)return r.COMPRESSED_RG11_EAC;if(n===_c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yc||n===Mc||n===bc||n===Sc||n===Tc||n===Ec||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ec)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nc||n===Uc||n===Fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Nc)return o===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===Oc||n===Sa||n===zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dy=`
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

}`,rf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xt({vertexShader:Ly,fragmentShader:Dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},of=class extends Ui{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,u=null,d=null,p=null,v=null,m=null,l=null,x=typeof XRWebGLBinding<"u",f=new rf,h={},g=t.getContextAttributes(),b=null,y=null,M=[],S=[],T=new Ie,_=null,E=null,A=new Rn;A.viewport=new Tt;let P=new Rn;P.viewport=new Tt;let N=[A,P],I=new Ql,R=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Y=M[J];return Y===void 0&&(Y=new Dr,M[J]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(J){let Y=M[J];return Y===void 0&&(Y=new Dr,M[J]=Y),Y.getGripSpace()},this.getHand=function(J){let Y=M[J];return Y===void 0&&(Y=new Dr,M[J]=Y),Y.getHandSpace()};function U(J){let Y=S.indexOf(J.inputSource);if(Y===-1)return;let Me=M[Y];Me!==void 0&&(Me.update(J.inputSource,J.frame,u||o),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",W);for(let J=0;J<M.length;J++){let Y=S[J];Y!==null&&(S[J]=null,M[J].disconnect(Y))}R=null,C=null,f.reset();for(let J in h)delete h[J];if(e.setRenderTarget(b),m=null,v=null,p=null,s=null,y=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),E!==null){let J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return v!==null?v:m},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return l},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",k),s.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Le=null,we=null;g.depth&&(we=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=g.stencil?Ms:Ni,Le=g.stencil?qr:wi);let We={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};p=this.getBinding(),v=p.createProjectionLayer(We),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),y=new Ft(v.textureWidth,v.textureHeight,{format:$n,type:Nn,depthTexture:new ds(v.textureWidth,v.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{let Me={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Ft(m.framebufferWidth,m.framebufferHeight,{format:$n,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function W(J){for(let Y=0;Y<J.removed.length;Y++){let Me=J.removed[Y],Le=S.indexOf(Me);Le>=0&&(S[Le]=null,M[Le].disconnect(Me))}for(let Y=0;Y<J.added.length;Y++){let Me=J.added[Y],Le=S.indexOf(Me);if(Le===-1){for(let We=0;We<M.length;We++)if(We>=S.length){S.push(Me),Le=We;break}else if(S[We]===null){S[We]=Me,Le=We;break}if(Le===-1)break}let we=M[Le];we&&we.connect(Me)}}let O=new z,V=new z;function H(J,Y,Me){O.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(Me.matrixWorld);let Le=O.distanceTo(V),we=Y.projectionMatrix.elements,We=Me.projectionMatrix.elements,Ke=we[14]/(we[10]-1),Be=we[14]/(we[10]+1),pt=(we[9]+1)/we[5],Q=(we[9]-1)/we[5],pe=(we[8]-1)/we[0],Te=(We[8]+1)/We[0],K=Ke*pe,ee=Ke*Te,re=Le/(-pe+Te),se=re*-pe;if(Y.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(se),J.translateZ(re),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(Y.projectionMatrix),J.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let F=Ke+re,me=Be+re,j=K-se,D=ee+(Le-se),w=pt*Be/me*F,G=Q*Be/me*F;J.projectionMatrix.makePerspective(j,D,w,G,F,me),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ie(J,Y){Y===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Y.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Y=J.near,Me=J.far;f.texture!==null&&(f.depthNear>0&&(Y=f.depthNear),f.depthFar>0&&(Me=f.depthFar)),I.near=P.near=A.near=Y,I.far=P.far=A.far=Me,(R!==I.near||C!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),R=I.near,C=I.far),I.layers.mask=J.layers.mask|6,A.layers.mask=I.layers.mask&-5,P.layers.mask=I.layers.mask&-3;let Le=J.parent,we=I.cameras;ie(I,Le);for(let We=0;We<we.length;We++)ie(we[We],Le);we.length===2?H(I,A,P):I.projectionMatrix.copy(A.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),fe(J,I,Le)};function fe(J,Y,Me){Me===null?J.matrix.copy(Y.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(Y.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Y.projectionMatrix),J.projectionMatrixInverse.copy(Y.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Vo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(v===null&&m===null))return c},this.setFoveation=function(J){c=J,v!==null&&(v.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(I)},this.getCameraTexture=function(J){return h[J]};let et=null;function Re(J,Y){if(d=Y.getViewerPose(u||o),l=Y,d!==null){let Me=d.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Le=!1;Me.length!==I.cameras.length&&(I.cameras.length=0,Le=!0);for(let Be=0;Be<Me.length;Be++){let pt=Me[Be],Q=null;if(m!==null)Q=m.getViewport(pt);else{let Te=p.getViewSubImage(v,pt);Q=Te.viewport,Be===0&&(e.setRenderTargetTextures(y,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(y))}let pe=N[Be];pe===void 0&&(pe=new Rn,pe.layers.enable(Be),pe.viewport=new Tt,N[Be]=pe),pe.matrix.fromArray(pt.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(pt.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Q.x,Q.y,Q.width,Q.height),Be===0&&(I.matrix.copy(pe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Le===!0&&I.cameras.push(pe)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=n.getBinding();let Be=p.getDepthInformation(Me[0]);Be&&Be.isValid&&Be.texture&&f.init(Be,s.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),p=n.getBinding();for(let Be=0;Be<Me.length;Be++){let pt=Me[Be].camera;if(pt){let Q=h[pt];Q||(Q=new Ko,h[pt]=Q);let pe=p.getCameraImage(pt);Q.sourceTexture=pe}}}}for(let Me=0;Me<M.length;Me++){let Le=S[Me],we=M[Me];Le!==null&&we!==void 0&&we.update(Le,Y,u||o)}et&&et(J,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),l=null}let He=new W0;He.setAnimationLoop(Re),this.setAnimationLoop=function(J){et=J},this.dispose=function(){}}},Ny=new st,J0=new dt;J0.set(-1,0,0,0,1,0,0,0,1);function Uy(i,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Fh(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,g,b,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(f,h):h.isMeshLambertMaterial?(r(f,h),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(f,h),p(f,h)):h.isMeshPhongMaterial?(r(f,h),d(f,h),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(f,h),v(f,h),h.isMeshPhysicalMaterial&&m(f,h,y)):h.isMeshMatcapMaterial?(r(f,h),l(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),x(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?c(f,h,g,b):h.isSpriteMaterial?u(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Cn&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Cn&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);let g=e.get(h),b=g.envMap,y=g.envMapRotation;b&&(f.envMap.value=b,f.envMapRotation.value.setFromMatrix4(Ny.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(J0),f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,g,b){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*g,f.scale.value=b*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function d(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function v(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,g){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Cn&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.retroreflectivity>0&&(f.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function l(f,h){h.matcap&&(f.matcap.value=h.matcap)}function x(f,h){let g=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(g.matrixWorld),f.nearDistance.value=g.shadow.camera.near,f.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let S=M.program;n.uniformBlockBinding(y,S)}function u(y,M){let S=s[y.id];S===void 0&&(f(y),S=d(y),s[y.id]=S,y.addEventListener("dispose",g));let T=M.program;n.updateUBOMapping(y,T);let _=e.render.frame;r[y.id]!==_&&(v(y),r[y.id]=_)}function d(y){let M=p();y.__bindingPointIndex=M;let S=i.createBuffer(),T=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function p(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(y){let M=s[y.id],S=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,E=S.length;_<E;_++){let A=S[_];if(Array.isArray(A))for(let P=0,N=A.length;P<N;P++)m(A[P],_,P,T);else m(A,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,M,S,T){if(x(y,M,S,T)===!0){let _=y.__offset,E=y.value;if(Array.isArray(E)){let A=0;for(let P=0;P<E.length;P++){let N=E[P],I=h(N);l(N,y.__data,A),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(A+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else l(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function l(y,M,S){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,S)}function x(y,M,S,T){let _=y.value,E=M+"_"+S;if(T[E]===void 0)return typeof _=="number"||typeof _=="boolean"?T[E]=_:ArrayBuffer.isView(_)?T[E]=_.slice():T[E]=_.clone(),!0;{let A=T[E];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return T[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function f(y){let M=y.uniforms,S=0,T=16;for(let E=0,A=M.length;E<A;E++){let P=Array.isArray(M[E])?M[E]:[M[E]];for(let N=0,I=P.length;N<I;N++){let R=P[N],C=Array.isArray(R.value)?R.value:[R.value];for(let U=0,k=C.length;U<k;U++){let W=C[U],O=h(W),V=S%T,H=V%O.boundary,ie=V+H;S+=H,ie!==0&&T-ie<O.storage&&(S+=T-ie),R.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=O.storage}}}let _=S%T;return _>0&&(S+=T-_),y.__size=S,y.__cache={},this}function h(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){let M=y.target;M.removeEventListener("dispose",g);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function b(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:u,dispose:b}}var By=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function Oy(){return Bi===null&&(Bi=new fs(By,16,16,bs,hn),Bi.name="DFG_LUT",Bi.minFilter=zt,Bi.magFilter=zt,Bi.wrapS=Di,Bi.wrapT=Di,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var Yc=class{constructor(e={}){let{canvas:t=f0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:v=!1,outputBufferType:m=Nn}=e;this.isWebGLRenderer=!0;let l;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");l=n.getContextAttributes().alpha}else l=o;let x=m,f=new Set([cc,lc,ac]),h=new Set([Nn,wi,Xr,qr,rc,oc]),g=new Uint32Array(4),b=new Int32Array(4),y=new z,M=null,S=null,T=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,N=null,I=null,R=null,C=null;this._outputColorSpace=jt;let U=0,k=0,W=null,O=-1,V=null,H=new Tt,ie=new Tt,fe=null,et=new Ee(0),Re=0,He=t.width,J=t.height,Y=1,Me=null,Le=null,we=new Tt(0,0,He,J),We=new Tt(0,0,He,J),Ke=!1,Be=new Ur,pt=!1,Q=!1,pe=new st,Te=new z,K=new Tt,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function se(){return W===null?Y:1}let F=n;function me(L,Z){return t.getContext(L,Z)}let j,D,w,G,q,B,le,_e,oe,ce,de,Ce,ve,xe,Ue,je,tt,X,Pe,he,De,ze,Se;try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Wn,!1),F===null){let Z="webgl2";if(F=me(Z,L),F===null)throw me(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(L){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),ft("WebGLRenderer: "+L.message),L}function nt(){j=new Xx(F),j.init(),De=new Iy(F,j),D=new Ux(F,j,e,De),w=new Cy(F,j),D.reversedDepthBuffer&&v&&w.buffers.depth.setReversed(!0),I=F.createFramebuffer(),R=F.createFramebuffer(),C=F.createFramebuffer(),G=new Zx(F),q=new my,B=new Py(F,j,w,q,D,De,G),le=new Wx(A),_e=new Jg(F),ze=new Dx(F,_e),oe=new qx(F,_e,G,ze),ce=new Jx(F,oe,_e,ze,G),X=new $x(F,D,B),Ue=new Fx(q),de=new py(A,le,j,D,ze,Ue),Ce=new Uy(A,q),ve=new vy,xe=new Sy(j),tt=new Lx(A,le,w,ce,l,c),je=new Ry(A,ce,D),Se=new Fy(F,G,D,w),Pe=new Nx(F,j,G),he=new Yx(F,j,G),G.programs=de.programs,A.capabilities=D,A.extensions=j,A.properties=q,A.renderLists=ve,A.shadowMap=je,A.state=w,A.info=G}x!==Nn&&(E=new jx(x,t.width,t.height,a,s,r));let Qe=new of(A,F);this.xr=Qe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let L=j.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=j.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(He,J,!1))},this.getSize=function(L){return L.set(He,J)},this.setSize=function(L,Z,ae=!0){if(Qe.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}He=L,J=Z,t.width=Math.floor(L*Y),t.height=Math.floor(Z*Y),ae===!0&&(t.style.width=L+"px",t.style.height=Z+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(He*Y,J*Y).floor()},this.setDrawingBufferSize=function(L,Z,ae){He=L,J=Z,Y=ae,t.width=Math.floor(L*ae),t.height=Math.floor(Z*ae),this.setViewport(0,0,L,Z)},this.setEffects=function(L){if(x===Nn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let Z=0;Z<L.length;Z++)if(L[Z].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(H)},this.getViewport=function(L){return L.copy(we)},this.setViewport=function(L,Z,ae,te){L.isVector4?we.set(L.x,L.y,L.z,L.w):we.set(L,Z,ae,te),w.viewport(H.copy(we).multiplyScalar(Y).round())},this.getScissor=function(L){return L.copy(We)},this.setScissor=function(L,Z,ae,te){L.isVector4?We.set(L.x,L.y,L.z,L.w):We.set(L,Z,ae,te),w.scissor(ie.copy(We).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(L){w.setScissorTest(Ke=L)},this.setOpaqueSort=function(L){Me=L},this.setTransparentSort=function(L){Le=L},this.getClearColor=function(L){return L.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(L=!0,Z=!0,ae=!0){let te=0;if(L){let ne=!1;if(W!==null){let ke=W.texture.format;ne=f.has(ke)}if(ne){let ke=W.texture.type,Fe=h.has(ke),Oe=tt.getClearColor(),Ye=tt.getClearAlpha(),$e=Oe.r,gt=Oe.g,it=Oe.b;Fe?(g[0]=$e,g[1]=gt,g[2]=it,g[3]=Ye,F.clearBufferuiv(F.COLOR,0,g)):(b[0]=$e,b[1]=gt,b[2]=it,b[3]=Ye,F.clearBufferiv(F.COLOR,0,b))}else te|=F.COLOR_BUFFER_BIT}Z&&(te|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),N=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),tt.dispose(),ve.dispose(),xe.dispose(),q.dispose(),le.dispose(),ce.dispose(),ze.dispose(),Se.dispose(),de.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",go),Qe.removeEventListener("sessionend",vo),Ii.stop()};function Dt(L){L.preventDefault(),Nh("WebGLRenderer: Context Lost."),P=!0}function lt(){Nh("WebGLRenderer: Context Restored."),P=!1;let L=G.autoReset,Z=je.enabled,ae=je.autoUpdate,te=je.needsUpdate,ne=je.type;nt(),G.autoReset=L,je.enabled=Z,je.autoUpdate=ae,je.needsUpdate=te,je.type=ne}function Wn(L){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Kn(L){let Z=L.target;Z.removeEventListener("dispose",Kn),Ba(Z)}function Ba(L){_u(L),q.remove(L)}function _u(L){let Z=q.get(L).programs;Z!==void 0&&(Z.forEach(function(ae){de.releaseProgram(ae)}),L.isShaderMaterial&&de.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,ae,te,ne,ke){Z===null&&(Z=ee);let Fe=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Oe=yu(L,Z,ae,te,ne);w.setMaterial(te,Fe);let Ye=ae.index,$e=1;if(te.wireframe===!0){if(Ye=oe.getWireframeAttribute(ae),Ye===void 0)return;$e=2}let gt=ae.drawRange,it=ae.attributes.position,Ae=gt.start*$e,vt=(gt.start+gt.count)*$e;ke!==null&&(Ae=Math.max(Ae,ke.start*$e),vt=Math.min(vt,(ke.start+ke.count)*$e)),Ye!==null?(Ae=Math.max(Ae,0),vt=Math.min(vt,Ye.count)):it!=null&&(Ae=Math.max(Ae,0),vt=Math.min(vt,it.count));let rt=vt-Ae;if(rt<0||rt===1/0)return;ze.setup(ne,te,Oe,ae,Ye);let Bt,Pt=Pe;if(Ye!==null&&(Bt=_e.get(Ye),Pt=he,Pt.setIndex(Bt)),ne.isMesh)te.wireframe===!0?(w.setLineWidth(te.wireframeLinewidth*se()),Pt.setMode(F.LINES)):Pt.setMode(F.TRIANGLES);else if(ne.isLine){let _n=te.linewidth;_n===void 0&&(_n=1),w.setLineWidth(_n*se()),ne.isLineSegments?Pt.setMode(F.LINES):ne.isLineLoop?Pt.setMode(F.LINE_LOOP):Pt.setMode(F.LINE_STRIP)}else ne.isPoints?Pt.setMode(F.POINTS):ne.isSprite&&Pt.setMode(F.TRIANGLES);if(ne.isBatchedMesh)if(j.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let _n=ne._multiDrawStarts,Xe=ne._multiDrawCounts,ye=ne._multiDrawCount,Ge=Ye?_e.get(Ye).bytesPerElement:1,Ze=q.get(te).currentProgram.getUniforms();for(let Ct=0;Ct<ye;Ct++)Ze.setValue(F,"_gl_DrawID",Ct),Pt.render(_n[Ct]/Ge,Xe[Ct])}else if(ne.isInstancedMesh)Pt.renderInstances(Ae,rt,ne.count);else if(ae.isInstancedBufferGeometry){let _n=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Xe=Math.min(ae.instanceCount,_n);Pt.renderInstances(Ae,rt,Xe)}else Pt.render(Ae,rt)};function rr(L,Z,ae,te){N!==null&&L.isNodeMaterial&&N.setObject(te,L),pt===!0&&Ue.setState(L,ae,!1),L.transparent===!0&&L.side===Tn&&L.forceSinglePass===!1?(L.side=Cn,L.needsUpdate=!0,rs(L,Z,te),L.side=_s,L.needsUpdate=!0,rs(L,Z,te),L.side=Tn):rs(L,Z,te)}this.compile=function(L,Z,ae=null){ae===null&&(ae=L),N!==null&&N.renderStart(L,Z,ae),S=xe.get(ae),S.init(Z),_.push(S),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(S.pushLight(ne),ne.castShadow&&S.pushShadow(ne))}),L!==ae&&L.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(S.pushLight(ne),ne.castShadow&&S.pushShadow(ne))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),Q=this.localClippingEnabled,pt=Ue.init(this.clippingPlanes,Q),pt===!0&&Ue.setGlobalState(this.clippingPlanes,Z),N!==null&&je.render(S.state.shadowsArray,ae,Z);let te=new Set;return L.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let ke=ne.material;if(ke)if(Array.isArray(ke))for(let Fe=0;Fe<ke.length;Fe++){let Oe=ke[Fe];rr(Oe,ae,Z,ne),te.add(Oe)}else rr(ke,ae,Z,ne),te.add(ke)}),S=_.pop(),N!==null&&N.renderEnd(),te},this.compileAsync=function(L,Z,ae=null){let te=this.compile(L,Z,ae);return new Promise(ne=>{function ke(){if(te.forEach(function(Fe){let Ye=q.get(Fe).currentProgram;(Ye===void 0||Ye.isReady())&&te.delete(Fe)}),te.size===0){ne(L);return}setTimeout(ke,10)}j.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let xn=null;function rn(L){xn&&xn(L)}function go(){Ii.stop()}function vo(){Ii.start()}let Ii=new W0;Ii.setAnimationLoop(rn),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(L){xn=L,Qe.setAnimationLoop(L),L===null?Ii.stop():Ii.start()},Qe.addEventListener("sessionstart",go),Qe.addEventListener("sessionend",vo),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(L,Z);let ae=Qe.enabled===!0&&Qe.isPresenting===!0,te=E!==null&&(W===null||ae)&&E.begin(A,W);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(Z),Z=Qe.getCamera()),L.isScene===!0&&L.onBeforeRender(A,L,Z,W),S=xe.get(L,_.length),S.init(Z),S.state.textureUnits=B.getTextureUnits(),_.push(S),pe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Be.setFromProjectionMatrix(pe,Ti,Z.reversedDepth),Q=this.localClippingEnabled,pt=Ue.init(this.clippingPlanes,Q),M=ve.get(L,T.length),M.init(),T.push(M),Qe.enabled===!0&&Qe.isPresenting===!0){let Fe=A.xr.getDepthSensingMesh();Fe!==null&&Ps(Fe,Z,-1/0,A.sortObjects)}Ps(L,Z,0,A.sortObjects),M.finish(),N!==null&&N.updateLights(S.state.lightsArray),A.sortObjects===!0&&M.sort(Me,Le),re=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,re&&tt.addToRenderList(M,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&Ue.beginShadows();let ne=S.state.shadowsArray;if(je.render(ne,L,Z),pt===!0&&Ue.endShadows(),(te&&E.hasRenderPass())===!1){let Fe=M.opaque,Oe=M.transmissive;if(S.setupLights(),Z.isArrayCamera){let Ye=Z.cameras;if(Oe.length>0)for(let $e=0,gt=Ye.length;$e<gt;$e++){let it=Ye[$e];_o(Fe,Oe,L,it)}re&&tt.render(L);for(let $e=0,gt=Ye.length;$e<gt;$e++){let it=Ye[$e];xo(M,L,it,it.viewport)}}else Oe.length>0&&_o(Fe,Oe,L,Z),re&&tt.render(L),xo(M,L,Z)}W!==null&&k===0&&(B.updateMultisampleRenderTarget(W),B.updateRenderTargetMipmap(W)),te&&E.end(A),L.isScene===!0&&L.onAfterRender(A,L,Z),ze.resetDefaultState(),O=-1,V=null,_.pop(),_.length>0?(S=_[_.length-1],B.setTextureUnits(S.state.textureUnits),pt===!0&&Ue.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?M=T[T.length-1]:M=null,N!==null&&N.renderEnd()};function Ps(L,Z,ae,te){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)ae=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLightProbeGrid)S.pushLightProbeGrid(L);else if(L.isLight)S.pushLight(L),L.castShadow&&S.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(Be)){te&&K.setFromMatrixPosition(L.matrixWorld).applyMatrix4(pe);let Fe=ce.update(L),Oe=L.material;Oe.visible&&M.push(L,Fe,Oe,ae,K.z,null,Z)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(Be))){let Fe=ce.update(L),Oe=L.material;if(te&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),K.copy(L.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),K.copy(Fe.boundingSphere.center)),K.applyMatrix4(L.matrixWorld).applyMatrix4(pe)),Array.isArray(Oe)){let Ye=Fe.groups;for(let $e=0,gt=Ye.length;$e<gt;$e++){let it=Ye[$e],Ae=Oe[it.materialIndex];Ae&&Ae.visible&&M.push(L,Fe,Ae,ae,K.z,it,Z)}}else Oe.visible&&M.push(L,Fe,Oe,ae,K.z,null,Z)}}let ke=L.children;for(let Fe=0,Oe=ke.length;Fe<Oe;Fe++)Ps(ke[Fe],Z,ae,te)}function xo(L,Z,ae,te){let{opaque:ne,transmissive:ke,transparent:Fe}=L;S.setupLightsView(ae),pt===!0&&Ue.setGlobalState(A.clippingPlanes,ae),te&&w.viewport(H.copy(te)),ne.length>0&&Is(ne,Z,ae),ke.length>0&&Is(ke,Z,ae),Fe.length>0&&Is(Fe,Z,ae),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function _o(L,Z,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[te.id]===void 0){let Ae=j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[te.id]=new Ft(1,1,{generateMipmaps:!0,type:Ae?hn:Nn,minFilter:Hn,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:St.workingColorSpace})}let ke=S.state.transmissionRenderTarget[te.id],Fe=te.viewport||H;ke.setSize(Fe.z*A.transmissionResolutionScale,Fe.w*A.transmissionResolutionScale);let Oe=A.getRenderTarget(),Ye=A.getActiveCubeFace(),$e=A.getActiveMipmapLevel();A.setRenderTarget(ke),A.getClearColor(et),Re=A.getClearAlpha(),Re<1&&A.setClearColor(16777215,.5),A.clear(),re&&tt.render(ae);let gt=A.toneMapping;A.toneMapping=Ei;let it=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),S.setupLightsView(te),pt===!0&&Ue.setGlobalState(A.clippingPlanes,te),Is(L,ae,te),B.updateMultisampleRenderTarget(ke),B.updateRenderTargetMipmap(ke),j.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let vt=0,rt=Z.length;vt<rt;vt++){let Bt=Z[vt],{object:Pt,geometry:_n,material:Xe,group:ye}=Bt;if(Xe.side===Tn&&Pt.layers.test(te.layers)){let Ge=Xe.side;Xe.side=Cn,Xe.needsUpdate=!0,Ht(Pt,ae,te,_n,Xe,ye),Xe.side=Ge,Xe.needsUpdate=!0,Ae=!0}}Ae===!0&&(B.updateMultisampleRenderTarget(ke),B.updateRenderTargetMipmap(ke))}A.setRenderTarget(Oe,Ye,$e),A.setClearColor(et,Re),it!==void 0&&(te.viewport=it),A.toneMapping=gt}function Is(L,Z,ae){let te=Z.isScene===!0?Z.overrideMaterial:null;for(let ne=0,ke=L.length;ne<ke;ne++){let Fe=L[ne],{object:Oe,geometry:Ye,group:$e}=Fe,gt=Fe.material;gt.allowOverride===!0&&te!==null&&(gt=te),Oe.layers.test(ae.layers)&&Ht(Oe,Z,ae,Ye,gt,$e)}}function Ht(L,Z,ae,te,ne,ke){N!==null&&ne.isNodeMaterial&&N.setObject(L,ne),L.onBeforeRender(A,Z,ae,te,ne,ke),L.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ne.onBeforeRender(A,Z,ae,te,L,ke),ne.transparent===!0&&ne.side===Tn&&ne.forceSinglePass===!1?(ne.side=Cn,ne.needsUpdate=!0,A.renderBufferDirect(ae,Z,te,ne,L,ke),ne.side=_s,ne.needsUpdate=!0,A.renderBufferDirect(ae,Z,te,ne,L,ke),ne.side=Tn):A.renderBufferDirect(ae,Z,te,ne,L,ke),L.onAfterRender(A,Z,ae,te,ne,ke)}function rs(L,Z,ae){Z.isScene!==!0&&(Z=ee);let te=q.get(L),ne=S.state.lights,ke=S.state.shadowsArray,Fe=ne.state.version,Oe=de.getParameters(L,ne.state,ke,Z,ae,S.state.lightProbeGridArray),Ye=de.getProgramCacheKey(Oe),$e=te.programs;te.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?Z.environment:null,te.fog=Z.fog;let gt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;te.envMap=le.get(L.envMap||te.environment,gt),te.envMapRotation=te.environment!==null&&L.envMap===null?Z.environmentRotation:L.envMapRotation,$e===void 0&&(L.addEventListener("dispose",Kn),$e=new Map,te.programs=$e);let it=$e.get(Ye);if(it!==void 0){if(te.currentProgram===it&&te.lightsStateVersion===Fe)return Mo(L,Oe),it}else Oe.uniforms=de.getUniforms(L),N!==null&&L.isNodeMaterial&&N.build(L,ae,Oe),L.onBeforeCompile(Oe,A),it=de.acquireProgram(Oe,Ye),$e.set(Ye,it),te.uniforms=Oe.uniforms;let Ae=te.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ae.clippingPlanes=Ue.uniform),Mo(L,Oe),te.needsLights=Ls(L),te.lightsStateVersion=Fe,te.needsLights&&(Ae.ambientLightColor.value=ne.state.ambient,Ae.lightProbe.value=ne.state.probe,Ae.sunLights.value=ne.state.sun,Ae.sunLightShadows.value=ne.state.sunShadow,Ae.directionalLights.value=ne.state.directional,Ae.directionalLightShadows.value=ne.state.directionalShadow,Ae.spotLights.value=ne.state.spot,Ae.spotLightShadows.value=ne.state.spotShadow,Ae.rectAreaLights.value=ne.state.rectArea,Ae.ltc_1.value=ne.state.rectAreaLTC1,Ae.ltc_2.value=ne.state.rectAreaLTC2,Ae.pointLights.value=ne.state.point,Ae.pointLightShadows.value=ne.state.pointShadow,Ae.hemisphereLights.value=ne.state.hemi,Ae.sunShadowMatrix.value=ne.state.sunShadowMatrix,Ae.sunShadowCascade.value=ne.state.sunShadowCascade,Ae.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ae.spotLightMatrix.value=ne.state.spotLightMatrix,Ae.spotLightMap.value=ne.state.spotLightMap,Ae.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=S.state.lightProbeGridArray.length>0,te.currentProgram=it,te.uniformsList=null,it}function yo(L){if(L.uniformsList===null){let Z=L.currentProgram.getUniforms();L.uniformsList=Jr.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function Mo(L,Z){let ae=q.get(L);ae.outputColorSpace=Z.outputColorSpace,ae.batching=Z.batching,ae.batchingColor=Z.batchingColor,ae.instancing=Z.instancing,ae.instancingColor=Z.instancingColor,ae.instancingMorph=Z.instancingMorph,ae.skinning=Z.skinning,ae.morphTargets=Z.morphTargets,ae.morphNormals=Z.morphNormals,ae.morphColors=Z.morphColors,ae.morphTargetsCount=Z.morphTargetsCount,ae.numClippingPlanes=Z.numClippingPlanes,ae.numIntersection=Z.numClipIntersection,ae.vertexAlphas=Z.vertexAlphas,ae.vertexTangents=Z.vertexTangents,ae.toneMapping=Z.toneMapping}function Oa(L,Z){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;y.setFromMatrixPosition(Z.matrixWorld);for(let ae=0,te=L.length;ae<te;ae++){let ne=L[ae];if(ne.texture!==null&&ne.boundingBox.containsPoint(y))return ne}return null}function yu(L,Z,ae,te,ne){Z.isScene!==!0&&(Z=ee),B.resetTextureUnits();let ke=Z.fog,Fe=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?Z.environment:null,Oe=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:St.workingColorSpace,Ye=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,$e=le.get(te.envMap||Fe,Ye),gt=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,it=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ae=!!ae.morphAttributes.position,vt=!!ae.morphAttributes.normal,rt=!!ae.morphAttributes.color,Bt=Ei;te.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Bt=A.toneMapping);let Pt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,_n=Pt!==void 0?Pt.length:0,Xe=q.get(te),ye=S.state.lights;if(pt===!0&&(Q===!0||L!==V)){let _t=L===V&&te.id===O;Ue.setState(te,L,_t)}let Ge=!1;te.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ye.state.version||Xe.outputColorSpace!==Oe||ne.isBatchedMesh&&Xe.batching===!1||!ne.isBatchedMesh&&Xe.batching===!0||ne.isBatchedMesh&&Xe.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&Xe.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&Xe.instancing===!1||!ne.isInstancedMesh&&Xe.instancing===!0||ne.isSkinnedMesh&&Xe.skinning===!1||!ne.isSkinnedMesh&&Xe.skinning===!0||ne.isInstancedMesh&&Xe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Xe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Xe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Xe.instancingMorph===!1&&ne.morphTexture!==null||Xe.envMap!==$e||te.fog===!0&&Xe.fog!==ke||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ue.numPlanes||Xe.numIntersection!==Ue.numIntersection)||Xe.vertexAlphas!==gt||Xe.vertexTangents!==it||Xe.morphTargets!==Ae||Xe.morphNormals!==vt||Xe.morphColors!==rt||Xe.toneMapping!==Bt||Xe.morphTargetsCount!==_n||!!Xe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ge=!0):(Ge=!0,Xe.__version=te.version);let Ze=Xe.currentProgram;Ge===!0&&(Ze=rs(te,Z,ne),N&&te.isNodeMaterial&&N.onUpdateProgram(te,Ze,Xe));let Ct=!1,bt=!1,Nt=!1,At=Ze.getUniforms(),Vt=Xe.uniforms;if(w.useProgram(Ze.program)&&(Ct=!0,bt=!0,Nt=!0),te.id!==O&&(O=te.id,bt=!0),Xe.needsLights){let _t=Oa(S.state.lightProbeGridArray,ne);Xe.lightProbeGrid!==_t&&(Xe.lightProbeGrid=_t,bt=!0)}if(Ct||V!==L){w.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),At.setValue(F,"projectionMatrix",L.projectionMatrix),At.setValue(F,"viewMatrix",L.matrixWorldInverse);let yn=At.map.cameraPosition;yn!==void 0&&yn.setValue(F,Te.setFromMatrixPosition(L.matrixWorld)),D.logarithmicDepthBuffer&&At.setValue(F,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&At.setValue(F,"isOrthographic",L.isOrthographicCamera===!0),V!==L&&(V=L,bt=!0,Nt=!0)}if(Xe.needsLights&&(ye.state.sunShadowMap.length>0&&At.setValue(F,"sunShadowMap",ye.state.sunShadowMap,B),ye.state.directionalShadowMap.length>0&&At.setValue(F,"directionalShadowMap",ye.state.directionalShadowMap,B),ye.state.spotShadowMap.length>0&&At.setValue(F,"spotShadowMap",ye.state.spotShadowMap,B),ye.state.pointShadowMap.length>0&&At.setValue(F,"pointShadowMap",ye.state.pointShadowMap,B)),ne.isSkinnedMesh){At.setOptional(F,ne,"bindMatrix"),At.setOptional(F,ne,"bindMatrixInverse");let _t=ne.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),At.setValue(F,"boneTexture",_t.boneTexture,B))}ne.isBatchedMesh&&(At.setOptional(F,ne,"batchingTexture"),At.setValue(F,"batchingTexture",ne._matricesTexture,B),At.setOptional(F,ne,"batchingIdTexture"),At.setValue(F,"batchingIdTexture",ne._indirectTexture,B),At.setOptional(F,ne,"batchingColorTexture"),ne._colorsTexture!==null&&At.setValue(F,"batchingColorTexture",ne._colorsTexture,B));let jn=ae.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&X.update(ne,ae,Ze),(bt||Xe.receiveShadow!==ne.receiveShadow)&&(Xe.receiveShadow=ne.receiveShadow,At.setValue(F,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&Z.environment!==null&&(Vt.envMapIntensity.value=Z.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Oy()),bt){if(At.setValue(F,"toneMappingExposure",A.toneMappingExposure),Xe.needsLights&&Mu(Vt,Nt),ke&&te.fog===!0&&Ce.refreshFogUniforms(Vt,ke),Ce.refreshMaterialUniforms(Vt,te,Y,J,S.state.transmissionRenderTarget[L.id]),Xe.needsLights&&Xe.lightProbeGrid){let _t=Xe.lightProbeGrid;Vt.probesSH.value=_t.texture,Vt.probesMin.value.copy(_t.boundingBox.min),Vt.probesMax.value.copy(_t.boundingBox.max),Vt.probesResolution.value.copy(_t.resolution)}Jr.upload(F,yo(Xe),Vt,B)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Jr.upload(F,yo(Xe),Vt,B),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&At.setValue(F,"center",ne.center),At.setValue(F,"modelViewMatrix",ne.modelViewMatrix),At.setValue(F,"normalMatrix",ne.normalMatrix),At.setValue(F,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){let _t=te.uniformsGroups;for(let yn=0,Wi=_t.length;yn<Wi;yn++){let So=_t[yn];Se.update(So,Ze),Se.bind(So,Ze)}}return Ze}function Mu(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.sunLights.needsUpdate=Z,L.sunLightShadows.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function Ls(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(L,Z,ae){let te=q.get(L);te.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),q.get(L.texture).__webglTexture=Z,q.get(L.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Z){let ae=q.get(L);ae.__webglFramebuffer=Z,ae.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(L,Z=0,ae=0){W=L,U=Z,k=ae;let te=null,ne=!1,ke=!1;if(L){let Oe=q.get(L);if(Oe.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(F.FRAMEBUFFER,Oe.__webglFramebuffer),H.copy(L.viewport),ie.copy(L.scissor),fe=L.scissorTest,w.viewport(H),w.scissor(ie),w.setScissorTest(fe),O=-1;return}else if(Oe.__webglFramebuffer===void 0)B.setupRenderTarget(L);else if(Oe.__hasExternalTextures)B.rebindTextures(L,q.get(L.texture).__webglTexture,q.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let gt=L.depthTexture;if(Oe.__boundDepthTexture!==gt){if(gt!==null&&q.has(gt)&&(L.width!==gt.image.width||L.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(L)}}let Ye=L.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(ke=!0);let $e=q.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray($e[Z])?te=$e[Z][ae]:te=$e[Z],ne=!0):L.samples>0&&B.useMultisampledRTT(L)===!1?te=q.get(L).__webglMultisampledFramebuffer:Array.isArray($e)?te=$e[ae]:te=$e,H.copy(L.viewport),ie.copy(L.scissor),fe=L.scissorTest}else H.copy(we).multiplyScalar(Y).floor(),ie.copy(We).multiplyScalar(Y).floor(),fe=Ke;if(ae!==0&&(te=I),w.bindFramebuffer(F.FRAMEBUFFER,te)&&w.drawBuffers(L,te),w.viewport(H),w.scissor(ie),w.setScissorTest(fe),ne){let Oe=q.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Oe.__webglTexture,ae)}else if(ke){let Oe=Z;for(let Ye=0;Ye<L.textures.length;Ye++){let $e=q.get(L.textures[Ye]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ye,$e.__webglTexture,ae,Oe)}}else if(L!==null&&ae!==0){let Oe=q.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,ae)}O=-1};function bo(L){let Z=q.get(L);return(Z.__readFormat!==L.format||Z.__readType!==L.type)&&(Z.__readFormat=L.format,Z.__readType=L.type,Z.__formatReadable=D.textureFormatReadable(L.format),Z.__typeReadable=D.textureTypeReadable(L.type)),Z}this.readRenderTargetPixels=function(L,Z,ae,te,ne,ke,Fe,Oe=0){if(!(L&&L.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=q.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ye=Ye[Fe]),Ye){w.bindFramebuffer(F.FRAMEBUFFER,Ye);try{let $e=L.textures[Oe],gt=$e.format,it=$e.type;L.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Oe);let Ae=bo($e);if(Ae.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-te&&ae>=0&&ae<=L.height-ne&&F.readPixels(Z,ae,te,ne,De.convert(gt),De.convert(it),ke)}finally{let $e=W!==null?q.get(W).__webglFramebuffer:null;w.bindFramebuffer(F.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(L,Z,ae,te,ne,ke,Fe,Oe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=q.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ye=Ye[Fe]),Ye)if(Z>=0&&Z<=L.width-te&&ae>=0&&ae<=L.height-ne){w.bindFramebuffer(F.FRAMEBUFFER,Ye);let $e=L.textures[Oe],gt=$e.format,it=$e.type;L.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Oe);let Ae=bo($e);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.bufferData(F.PIXEL_PACK_BUFFER,ke.byteLength,F.STREAM_READ),F.readPixels(Z,ae,te,ne,De.convert(gt),De.convert(it),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let rt=W!==null?q.get(W).__webglFramebuffer:null;w.bindFramebuffer(F.FRAMEBUFFER,rt);let Bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await p0(F,Bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ke),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(vt),F.deleteSync(Bt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Z=null,ae=0){let te=Math.pow(2,-ae),ne=Math.floor(L.image.width*te),ke=Math.floor(L.image.height*te),Fe=Z!==null?Z.x:0,Oe=Z!==null?Z.y:0;B.setTexture2D(L,0),F.copyTexSubImage2D(F.TEXTURE_2D,ae,0,0,Fe,Oe,ne,ke),w.unbindTexture()},this.copyTextureToTexture=function(L,Z,ae=null,te=null,ne=0,ke=0){let Fe,Oe,Ye,$e,gt,it,Ae,vt,rt,Bt=L.isCompressedTexture?L.mipmaps[ke]:L.image;if(ae!==null)Fe=ae.max.x-ae.min.x,Oe=ae.max.y-ae.min.y,Ye=ae.isBox3?ae.max.z-ae.min.z:1,$e=ae.min.x,gt=ae.min.y,it=ae.isBox3?ae.min.z:0;else{let Vt=Math.pow(2,-ne);Fe=Math.floor(Bt.width*Vt),Oe=Math.floor(Bt.height*Vt),L.isDataArrayTexture?Ye=Bt.depth:L.isData3DTexture?Ye=Math.floor(Bt.depth*Vt):Ye=1,$e=0,gt=0,it=0}te!==null?(Ae=te.x,vt=te.y,rt=te.z):(Ae=0,vt=0,rt=0);let Pt=De.convert(Z.format),_n=De.convert(Z.type),Xe;Z.isData3DTexture?(B.setTexture3D(Z,0),Xe=F.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(B.setTexture2DArray(Z,0),Xe=F.TEXTURE_2D_ARRAY):(B.setTexture2D(Z,0),Xe=F.TEXTURE_2D),w.activeTexture(F.TEXTURE0),w.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),w.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),w.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment);let ye=w.getParameter(F.UNPACK_ROW_LENGTH),Ge=w.getParameter(F.UNPACK_IMAGE_HEIGHT),Ze=w.getParameter(F.UNPACK_SKIP_PIXELS),Ct=w.getParameter(F.UNPACK_SKIP_ROWS),bt=w.getParameter(F.UNPACK_SKIP_IMAGES);w.pixelStorei(F.UNPACK_ROW_LENGTH,Bt.width),w.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Bt.height),w.pixelStorei(F.UNPACK_SKIP_PIXELS,$e),w.pixelStorei(F.UNPACK_SKIP_ROWS,gt),w.pixelStorei(F.UNPACK_SKIP_IMAGES,it);let Nt=L.isDataArrayTexture||L.isData3DTexture,At=Z.isDataArrayTexture||Z.isData3DTexture;if(L.isDepthTexture){let Vt=q.get(L),jn=q.get(Z),_t=q.get(Vt.__renderTarget),yn=q.get(jn.__renderTarget);w.bindFramebuffer(F.READ_FRAMEBUFFER,_t.__webglFramebuffer),w.bindFramebuffer(F.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let Wi=0;Wi<Ye;Wi++)Nt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(L).__webglTexture,ne,it+Wi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(Z).__webglTexture,ke,rt+Wi)),F.blitFramebuffer($e,gt,Fe,Oe,Ae,vt,Fe,Oe,F.DEPTH_BUFFER_BIT,F.NEAREST);w.bindFramebuffer(F.READ_FRAMEBUFFER,null),w.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ne!==0||L.isRenderTargetTexture||q.has(L)){let Vt=q.get(L),jn=q.get(Z);w.bindFramebuffer(F.READ_FRAMEBUFFER,R),w.bindFramebuffer(F.DRAW_FRAMEBUFFER,C);for(let _t=0;_t<Ye;_t++)Nt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.__webglTexture,ne,it+_t):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Vt.__webglTexture,ne),At?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jn.__webglTexture,ke,rt+_t):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,jn.__webglTexture,ke),ne!==0?F.blitFramebuffer($e,gt,Fe,Oe,Ae,vt,Fe,Oe,F.COLOR_BUFFER_BIT,F.NEAREST):At?F.copyTexSubImage3D(Xe,ke,Ae,vt,rt+_t,$e,gt,Fe,Oe):F.copyTexSubImage2D(Xe,ke,Ae,vt,$e,gt,Fe,Oe);w.bindFramebuffer(F.READ_FRAMEBUFFER,null),w.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else At?L.isDataTexture||L.isData3DTexture?F.texSubImage3D(Xe,ke,Ae,vt,rt,Fe,Oe,Ye,Pt,_n,Bt.data):Z.isCompressedArrayTexture?F.compressedTexSubImage3D(Xe,ke,Ae,vt,rt,Fe,Oe,Ye,Pt,Bt.data):F.texSubImage3D(Xe,ke,Ae,vt,rt,Fe,Oe,Ye,Pt,_n,Bt):L.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ke,Ae,vt,Fe,Oe,Pt,_n,Bt.data):L.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ke,Ae,vt,Bt.width,Bt.height,Pt,Bt.data):F.texSubImage2D(F.TEXTURE_2D,ke,Ae,vt,Fe,Oe,Pt,_n,Bt);w.pixelStorei(F.UNPACK_ROW_LENGTH,ye),w.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ge),w.pixelStorei(F.UNPACK_SKIP_PIXELS,Ze),w.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),w.pixelStorei(F.UNPACK_SKIP_IMAGES,bt),ke===0&&Z.generateMipmaps&&F.generateMipmap(Xe),w.unbindTexture()},this.initRenderTarget=function(L){q.get(L).__webglFramebuffer===void 0&&B.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?B.setTextureCube(L,0):L.isData3DTexture?B.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?B.setTexture2DArray(L,0):B.setTexture2D(L,0),w.unbindTexture()},this.resetState=function(){U=0,k=0,W=null,w.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}};var kt=(i,e,t)=>i<e?e:i>t?t:i,Lt=(i,e,t)=>i+(e-i)*t,Kc=i=>i*i*(3-2*i),Rt=(i,e,t)=>{let n=kt((t-i)/(e-i),0,1);return n*n*(3-2*n)},K0=1337;function j0(i){K0=i|0}function zy(i){return i=i^K0|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var si=(i,e)=>zy(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function ii(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return Lt(si(t,e),si(t+1,e),s)}var jc=(i,e=0)=>ii(i,e)*.55+ii(i*2.03,e+7)*.3+ii(i*4.1,e+13)*.15;function fn(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Jc=new Ee,ue=i=>(Jc.set(i),[Jc.r,Jc.g,Jc.b]),Q0=(i,e,t)=>[Lt(i[0],e[0],t),Lt(i[1],e[1],t),Lt(i[2],e[2],t)],En=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var ki=["city","sakura","coast","country","mountain","snow"],Aa={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},af=1500,ep=260,Ss=0,lf=0;function np(i){lf=Math.max(0,ki.indexOf(i))}function jr(i){let e=Math.floor(i/af),t=i-e*af,n=Kc(kt((t-(af-ep))/ep,0,1)),s=ki.length;return{a:ki[((e+lf)%s+s)%s],b:ki[((e+lf+1)%s+s)%s],t:n}}function Ut(i){let e=jr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var en=i=>{let e=jr(i);return e.t<.5?e.a:e.b};function In(i,e){let t=jr(i);return Lt(Aa[t.a][e],Aa[t.b][e],t.t)}var Ks=650,js=375,Qr=i=>i*Ks+js;function Ra(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Ut(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var cf={x:new Map,r:new Map,t:new Map};function uf(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function eo(i){let e=Math.round((i-js)/Ks);return uf(cf.x,e,()=>{let t=Qr(e);return Ra(t)?{k:e,s:t}:null})}function ky(i){let e=eo(i);return e?1-Rt(8,45,Math.abs(i-e.s)):0}var Qs=1150,to=820,Ca=4.6,hf=i=>i*Qs+to;function ff(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Ut(i+t);if(n.country+n.sakura<.9)return!1}let e=eo(i);return!(e&&Math.abs(e.s-i)<170)}function Hi(i){let e=Math.round((i-to)/Qs);return uf(cf.r,e,()=>{let t=hf(e);return ff(t)?{k:e,s:t}:null})}function Hy(i){let e=Hi(i);return e?1-Rt(30,70,Math.abs(i-e.s)):0}function Vy(i){let e=-Ca;return i<11?e-1.3:i<16?Lt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?Lt(e+.7,.35,(i-20)/5.5):.35}var ip=1050,sp=525,sn=85,tn=125,Gy=24,Wy=i=>i*ip+sp;function Xy(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Ut(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function pi(i){let e=Math.round((i-sp)/ip);return uf(cf.t,e,()=>{let t=Wy(e);return Xy(t)?{k:e,s:t}:null})}function qy(i){let e=pi(i);return e?1-Rt(sn+20,tn+25,Math.abs(i-e.s)):0}var Qc=0,tu=(i,e)=>{let t=i/tn;return Gy*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var zi=2,eu=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(ii(e/300,11)-.5)*2+(ii(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*In(e,"curv")*(1-Math.max(ky(e),Hy(e),qy(e)))}elevRaw(e){return In(e,"base")+In(e,"hill")*(jc(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=eo(e);if(n){let o=1-Rt(8,45,Math.abs(e-n.s));o>0&&(t=Lt(t,this.elevRaw(n.s),o))}let s=Hi(e);if(s){let o=1-Rt(30,70,Math.abs(e-s.s));o>0&&(t=Lt(t,this.elevRaw(s.s),o))}let r=pi(e);if(r){let o=1-Rt(sn+10,tn+45,Math.abs(e-r.s));o>0&&(t=Lt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*zi<e+zi;){let t=this.X.length-1,n=t*zi,s=this.curv(n+zi/2)*zi,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*zi),this.Z.push(this.Z[t]+Math.cos(r+s/2)*zi),this.H.push(r+s),this.Y.push(this.elev(n+zi))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+zi);let n=e/zi,s=Math.floor(n),r=n-s;t.x=Lt(this.X[s],this.X[s+1],r),t.z=Lt(this.Z[s],this.Z[s+1],r),t.y=Lt(this.Y[s],this.Y[s+1],r),t.h=Lt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),a=Math.cos(t.h);return t.fx=o,t.fz=a,t.rx=-a,t.rz=o,t}};function tp(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Rt(45,190,r)*16*(.45+.55*ii(e/160+(t>0?50:0),3));case"coast":{if(t>0)return r<s+.9?-.06:-.15+Rt(s+1.5,80,r)*24*(.5+.5*ii(e/170,5))+Rt(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let o=r-(s+2);return(o<26?Lt(1.25,-1.6,o/26):Lt(-1.6,-7,kt((o-26)/20,0,1)))-n}case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let a=8+6*ii(e/140,61),c=r-(s+1);return c<a?c:Math.min(a+(c-a)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+Rt(105,230,r)*95*(.6+.4*ii(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Lt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(ii(e/40+(t>0?3:0),71)-.5):.55+Rt(125,210,r)*40*(.45+.55*ii(e/230+(t>0?11:0),73));case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+Rt(135,215,r)*36*(.4+.6*ii(e/210+(t>0?9:0),7))}}function no(i,e,t,n){let s=jr(i),r=tp(s.a,i,e,t,n),o=s.t>0?Lt(r,tp(s.b,i,e,t,n),s.t):r;Qc=0;let a=Hi(i);if(a){let l=Math.abs(i-a.s);if(l>=36)return o;let x=l<29?Vy(l):Lt(.35,o,Rt(29,36,l));return Math.abs(e)<n+3.2&&(x=Math.min(x,-.08)),x}let c=pi(i);if(!c)return o;let u=i-c.s,d=Math.abs(u);if(d>=2*tn)return o;let p=Math.abs(e),v=tu(u,e),m;return d<sn?m=p<=n+1.46?-.25:Math.max(o,v):m=Math.max(o,Math.min(v,p<n+1?-.06:p-(n+1))),Qc=Math.max(0,m-o),m}function rp(i){let e=Hi(i);return e?1-Rt(27,34,Math.abs(i-e.s)):0}var Pa=new z,nu=new z,Yy=[1,1,1],vn=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new st,this.nm=new dt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,a,c,u){this.n>=this.cap&&this.grow(this.n+1);let d=this.e,p=this.ne,v=this.n*3,m=this.P,l=this.bb,x=d[0]*e+d[4]*t+d[8]*n+d[12],f=d[1]*e+d[5]*t+d[9]*n+d[13],h=d[2]*e+d[6]*t+d[10]*n+d[14];m[v]=x,m[v+1]=f,m[v+2]=h,x<l[0]&&(l[0]=x),f<l[1]&&(l[1]=f),h<l[2]&&(l[2]=h),x>l[3]&&(l[3]=x),f>l[4]&&(l[4]=f),h>l[5]&&(l[5]=h);let g=p[0]*s+p[3]*r+p[6]*o,b=p[1]*s+p[4]*r+p[7]*o,y=p[2]*s+p[5]*r+p[8]*o,M=127/(Math.sqrt(g*g+b*b+y*y)||1);if(this.N[v]=Math.round(g*M),this.N[v+1]=Math.round(b*M),this.N[v+2]=Math.round(y*M),this.hasUV&&(this.U[this.n*2]=a,this.U[this.n*2+1]=c),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(f)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasColor){let S=u||Yy,T=this.Cl;T[v]=S[0]>=1?255:S[0]<=0?0:S[0]*255+.5,T[v+1]=S[1]>=1?255:S[1]<=0?0:S[1]*255+.5,T[v+2]=S[2]>=1?255:S[2]<=0?0:S[2]*255+.5}this.n++}quad(e,t,n,s,r,o){Pa.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),nu.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),nu.lengthSq()<1e-12&&nu.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Pa.cross(nu).normalize();let a=Pa.x,c=Pa.y,u=Pa.z,d=o?o.u0:0,p=o?o.u1:1,v=o?o.v0:0,m=o?o.v1:1;this.vtx(e[0],e[1],e[2],a,c,u,d,v,r),this.vtx(t[0],t[1],t[2],a,c,u,p,v,r),this.vtx(n[0],n[1],n[2],a,c,u,p,m,r),this.vtx(e[0],e[1],e[2],a,c,u,d,v,r),this.vtx(n[0],n[1],n[2],a,c,u,p,m,r),this.vtx(s[0],s[1],s[2],a,c,u,d,m,r)}box(e,t,n,s,r,o,a,c=null,u=null){let d=c||{},p=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],p.nz||a,d.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],p.pz||a,d.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],p.nx||a,d.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],p.px||a,d.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],p.py||a,d.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],p.ny||a,d.ny)}cyl(e,t,n,s,r,o,a,c,u=!0){let d=(s-r)/o;for(let p=0;p<a;p++){let v=p/a*Math.PI*2,m=(p+1)/a*Math.PI*2,l=Math.cos(v),x=Math.sin(v),f=Math.cos(m),h=Math.sin(m),g=[e+l*s,t,n+x*s],b=[e+f*s,t,n+h*s],y=[e+f*r,t+o,n+h*r],M=[e+l*r,t+o,n+x*r];this.vtx(g[0],g[1],g[2],l,d,x,0,0,c),this.vtx(M[0],M[1],M[2],l,d,x,0,0,c),this.vtx(y[0],y[1],y[2],f,d,h,0,0,c),this.vtx(g[0],g[1],g[2],l,d,x,0,0,c),this.vtx(y[0],y[1],y[2],f,d,h,0,0,c),this.vtx(b[0],b[1],b[2],f,d,h,0,0,c),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,c),this.vtx(y[0],y[1],y[2],0,1,0,0,0,c),this.vtx(M[0],M[1],M[2],0,1,0,0,0,c))}}rod(e,t,n,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],u=t[2]-e[2],d=Math.hypot(a,c,u);a/=d,c/=d,u/=d;let p=0,v=1,m=0;Math.abs(c)>.99&&(p=1,v=0);let l=c*m-u*v,x=u*p-a*m,f=a*v-c*p,h=Math.hypot(l,x,f);l/=h,x/=h,f/=h;let g=x*u-f*c,b=f*a-l*u,y=l*c-x*a;for(let M=0;M<r;M++){let S=M/r*Math.PI*2,T=(M+1)/r*Math.PI*2,_=Math.cos(S),E=Math.sin(S),A=Math.cos(T),P=Math.sin(T),N=l*_+g*E,I=x*_+b*E,R=f*_+y*E,C=l*A+g*P,U=x*A+b*P,k=f*A+y*P,W=[e[0]+N*n,e[1]+I*n,e[2]+R*n],O=[e[0]+C*n,e[1]+U*n,e[2]+k*n],V=[t[0]+C*s,t[1]+U*s,t[2]+k*s],H=[t[0]+N*s,t[1]+I*s,t[2]+R*s];this.vtx(W[0],W[1],W[2],N,I,R,0,0,o),this.vtx(O[0],O[1],O[2],C,U,k,0,0,o),this.vtx(V[0],V[1],V[2],C,U,k,0,0,o),this.vtx(W[0],W[1],W[2],N,I,R,0,0,o),this.vtx(V[0],V[1],V[2],C,U,k,0,0,o),this.vtx(H[0],H[1],H[2],N,I,R,0,0,o)}return d}blob(e,t,n,s,r,o,a=0,c=1){let u=op[a%op.length],d=u.attributes.position.array,p=u.attributes.normal.array,v=u.userData.disp;for(let m=0;m<d.length;m+=3){let l=1+v[m/3],x=Math.max(0,Math.min(1,p[m+1]*.5+.5)),f=[o[0]+(r[0]-o[0])*x,o[1]+(r[1]-o[1])*x,o[2]+(r[2]-o[2])*x];this.vtx(e+d[m]*s*l,t+d[m+1]*s*l*c,n+d[m+2]*s*l,p[m],p[m+1],p[m+2],0,0,f)}}wire(e,t,n,s,r,o=10){let a=e;this.noShadow=!0;for(let c=1;c<=o;c++){let u=c/o,d=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(a,d,s,s,3,r),a=d}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,a,c]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],a,c,s[o])}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,a=e.C,c=e.U,u=this.n,d=this.bb;for(let p=0;p<e.n*3;p+=3){let v=r[p],m=r[p+1],l=r[p+2],x=u*3+p,f=n[0]*v+n[4]*m+n[8]*l+n[12],h=n[1]*v+n[5]*m+n[9]*l+n[13],g=n[2]*v+n[6]*m+n[10]*l+n[14];this.P[x]=f,this.P[x+1]=h,this.P[x+2]=g,this.hasAO&&(this.A[u+p/3]=this.aoByte(h)),f<d[0]&&(d[0]=f),h<d[1]&&(d[1]=h),g<d[2]&&(d[2]=g),f>d[3]&&(d[3]=f),h>d[4]&&(d[4]=h),g>d[5]&&(d[5]=g);let b=o[p],y=o[p+1],M=o[p+2],S=s[0]*b+s[3]*y+s[6]*M,T=s[1]*b+s[4]*y+s[7]*M,_=s[2]*b+s[5]*y+s[8]*M,E=127/(Math.sqrt(S*S+T*T+_*_)||1);this.N[x]=Math.round(S*E),this.N[x+1]=Math.round(T*E),this.N[x+2]=Math.round(_*E)}this.hasColor&&(a?this.Cl.set(a,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(c?this.U.set(c,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.n+=e.n}build(){if(!this.n)return null;let e=new yt,t=this.n,n=this.bb;return e.setAttribute("position",new Ot(this.P.slice(0,t*3),3)),e.setAttribute("normal",new Ot(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new Ot(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new Ot(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new Ot(this.Lt.slice(0,t),1,!0)),this.hasColor&&e.setAttribute("color",new Ot(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new ui(new z(n[0],n[1],n[2]),new z(n[3],n[4],n[5])),e.boundingSphere=e.boundingBox.getBoundingSphere(new hi),e}},op=[0,1,2,3].map(i=>{let e=new oa(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,a)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(a*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});ht.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var Zy=ht.shadowmap_pars_fragment;function pf(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;ht.shadowmap_pars_fragment=Zy.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}pf(1);function up(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";ht.shadowmap_pars_fragment=t+ht.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}ht.lights_fragment_begin=ht.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var Ts=4200,qe={uSkyHor:{value:new Ee(.7,.8,.9)},uSkyZen:{value:new Ee(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Ie},uSunDir:{value:new z(0,1,0)},uSunCol:{value:new Ee(1,1,1)},uTuftV:{value:new Ie(0,.333)},uTunA:{value:new z(0,-1e4,0)},uTunB:{value:new z(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new z},uCarFwd:{value:new z(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:$y()},uCloudTex:{value:null},uCloudOrg:{value:new Ie},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Ie(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function hp(i){let e=new fs(new Uint8Array(i),i.length,1,Ys);return e.minFilter=e.magFilter=cn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var Jn=hp([16,16,16,70,200,255,255,255]),iu=hp([28,40,70,130,200,240,255,255]);function $y(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new fs(e,256,256,$n);return s.wrapS=s.wrapT=Cr,s.magFilter=zt,s.minFilter=Hn,s.generateMipmaps=!0,s.colorSpace=Ai,s.needsUpdate=!0,s}var mi=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,su=1600,df=256,Jy=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/su).toFixed(8)} + 0.5).r * uCloudSh; }`,Ky=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,jy=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/su).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,Qy=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,e2=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,t2=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,ru=new kr;ru.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};ru.customProgramCacheKey=()=>"propdepth";function fp(){let i=new Ft(df,df,{format:Ys,type:Nn,depthBuffer:!1,minFilter:zt,magFilter:zt,generateMipmaps:!1}),e=new xt({uniforms:{uCenter:{value:new Ie},uOrigin:qe.uOrigin,uTime:qe.uTime,uNoiseTex:qe.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${su.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new mt(new nn(2,2),e),n=new ji;t.frustumCulled=!1,qe.uCloudTex.value=i.texture,qe.uCloudTex.rt=i;let s=su/df;return{update(r,o,a,c,u){let d=Math.round((o+c)/s)*s-c,p=Math.round((a+u)/s)*s-u;e.uniforms.uCenter.value.set(d,p),qe.uCloudOrg.value.set(d,p);let v=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(v)}}}function er(i,e="",t="",n=!0){i.uniforms.uOrigin=qe.uOrigin,i.uniforms.uCloudSh=qe.uCloudSh,i.uniforms.uTime=qe.uTime,i.uniforms.uNoiseTex=qe.uNoiseTex,i.uniforms.uCloudTex=qe.uCloudTex,i.uniforms.uCloudOrg=qe.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=qe[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?jy:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${mi}${Jy}${e2}${e}`).replace("#include <opaque_fragment>",`${n?Qy:Ky}${t}${t2}
#include <opaque_fragment>`)}var n2=`
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
`,i2=`
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
#endif`,s2=`
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
}`,dp={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"};function pp(i){let e={};for(let t of i)e[dp[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),e}var ap=new Map;function Ia(i){let e=[...new Set(i)].sort().join("+"),t=ap.get(e);return t||(t=mp(pp(e.split("+")),e),ap.set(e,t)),t}function mp(i=pp(Object.keys(dp)),e="all"){let t=new an({color:16777215,gradientMap:Jn});return t.defines=i,t.onBeforeCompile=n=>{n.uniforms.uSkyHor=qe.uSkyHor,n.uniforms.uSkyZen=qe.uSkyZen,n.uniforms.uWet=qe.uWet,n.uniforms.uNight=qe.uNight,n.uniforms.uSunDir=qe.uSunDir,n.uniforms.uSunCol=qe.uSunCol;for(let s of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])n.uniforms[s]=qe[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),er(n,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${n2}`,s2+i2,!1),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v17-"+e,t}function lp(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),er(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function r2(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=qe[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function o2(i){i.uniforms.uLightsOn=qe.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function cp(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function mf(i){return i.onBeforeCompile=e=>er(e),i.customProgramCacheKey=()=>"cs",i}var a2="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",l2=(i,e,t="")=>`
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
}`;function gf(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=qe[o];s&&Object.assign(r.uniforms,s.uniforms),er(r,a2+(s?s.pars:""),l2(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}function gp(i,e){let t={};t.ground=mp(),t.color=lp(new an({vertexColors:!0,gradientMap:Jn}),1.6,.1,"color-v3",cp),t.atlas=new an({vertexColors:!0,gradientMap:Jn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=a=>{cp(a),o2(a),er(a)},t.atlas.customProgramCacheKey=()=>"atlas-v4",t.foliage=lp(new an({vertexColors:!0,gradientMap:iu}),2.6,.24,"foliage-v2"),t.lamp=new on({color:15789798}),t.sig=new on({color:new Ee(.15,1.7,1.1)}),t.sodium=new on({color:new Ee(5,2.3,.65)}),t.decal=new an({vertexColors:!0,gradientMap:Jn,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=a=>er(a),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new an({map:e,vertexColors:!0,gradientMap:iu,alphaTest:.42,side:Tn}),t.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",ht.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),er(a),r2(a),a.uniforms.uTuftV=qe.uTuftV,a.uniforms.uWind=qe.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec2 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y);
  float wgt = mix(0.03, 0.09 * clamp((uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x), 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v4"),t.wire=new on({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let o=new Zn(n);return t.pool=new on({map:o,color:16762746,transparent:!0,opacity:0,blending:Qi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=o,t}var c2=ue("#f2c230"),vp=ue("#26272c");function ou(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=In(s,"rw"),a=n*(o+.8),c=Ut(s),u=c.city+c.sakura>.5;t.push({x:r.x+r.rx*a,z:r.z+r.rz*a,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function xp(){let i=new Jt,e=mf(new an({vertexColors:!0,gradientMap:Jn})),t=new on({color:new Ee(6,.45,.3)}),n=new on({color:new Ee(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Jt,o=new Jt;r.add(o),o.position.set(-.42,1.02,-.02);let a=new vn,c=3.6;for(let p=0,v=0;v<c;p++,v+=.45)a.box(-Math.min(v+.45,c),-.065,-.065,-v,.065,.065,p%2?vp:c2);a.box(0,-.09,-.07,.38,.09,.07,vp);let u=new mt(a.build(),e);u.castShadow=!0,o.add(u);let d=[-.28,.28].map(p=>{let v=new mt(new Vs(.13,18),n);return v.position.set(p,2.75,-.1),v.rotation.y=Math.PI,r.add(v),v});return i.add(r),{root:r,pivot:o,arm:u,lamps:d,L:c}});return i.visible=!1,{group:i,update(r,o,a,c,u){i.visible=!!r,r&&r.forEach((d,p)=>{let v=s[p];v.root.position.set(d.x-o.x,d.y,d.z-o.z),v.root.rotation.y=d.yaw,v.arm.scale.x=(d.rw+.25)/v.L,v.pivot.rotation.z=-a*(Math.PI/2-.06);let m=Math.floor(u*2.5)%2;v.lamps[0].material=c&&m===0?t:n,v.lamps[1].material=c&&m===1?t:n})}}}function u2(){let t=()=>{let h=document.createElement("canvas");return h.width=1024,h.height=512,h},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),a='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let c=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,c);for(let h=0;h<1024;h+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(h,0,2,c);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,c-14,1024,14);let u=[.1,.36,.62,.88].map(h=>h*1024),d=(h,g,b,y)=>{let M=r.createLinearGradient(h,g,h+b*.3,g+y);M.addColorStop(0,"#5d7fae"),M.addColorStop(.6,"#9db7d6"),M.addColorStop(1,"#2f3f55"),r.fillStyle=M,r.fillRect(h,g,b,y),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(h+b*.2,g),r.lineTo(h+b*.38,g),r.lineTo(h+b*.1,g+y),r.lineTo(h-b*.08,g+y),r.fill(),o.fillStyle="#ffeccc",o.fillRect(h,g,b,y)};for(let h=0;h<u.length-1;h++){let g=u[h]+40,b=u[h+1]-40,y=3,M=(b-g)/y;for(let S=0;S<y;S++)r.fillStyle="#6b737c",r.fillRect(g+S*M+2,34,M-4,58),d(g+S*M+6,38,M-12,50)}for(let h of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(h+2,34,28,58),d(h+5,38,22,50);for(let h of u)r.fillStyle="#c3c8ce",r.fillRect(h-30,22,60,c-36),r.fillStyle="#7b828a",r.fillRect(h-1,22,2,c-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(h-30,22,60,c-36),d(h-24,34,20,46),d(h+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let h of u)r.fillStyle="#c3c8ce",r.fillRect(h-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${a}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let p=0,v=176,m=256,l=256;r.fillStyle="#d3d7dc",r.fillRect(p,v,m,l),r.fillStyle="#20262e",r.fillRect(p+14,v+44,m-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(p+40,v+44),r.lineTo(p+80,v+44),r.lineTo(p+40,v+140),r.lineTo(p+14,v+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(p+m/2-4,v+44,8,96),r.fillStyle="#111",r.fillRect(p+50,v+12,m-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${a}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",p+m/2,v+26),r.fillStyle="#1f9a50",r.fillRect(p,v+150,m,18),r.fillStyle="#e8892b",r.fillRect(p,v+170,m,7);for(let h of[p+40,p+m-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(h,v+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(h+(h<p+m/2?28:-28),v+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(p,v+l-30,m,30),r.fillStyle="#3a3f46",r.font=`800 16px ${a}`,r.fillText("17",p+m/2,v+220),o.fillStyle="#111",o.fillRect(p,v,m,l),o.fillStyle="#ff9a2a",o.font=`800 18px ${a}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",p+m/2,v+26);for(let h of[p+40,p+m-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(h,v+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let x=h=>{let g=new Zn(h);return g.colorSpace=jt,g.anisotropy=4,g},f=(h,g,b,y)=>({u0:h/1024,u1:(h+b)/1024,v0:1-(g+y)/512,v1:1-g/512});return{map:x(n),em:x(s),side:f(0,0,1024,c),sideR:{...f(0,0,1024,c),flip:!0},front:f(p,v,m,l),plain:f(342,202,28,28)}}function _p(){let i=u2(),e=mf(new an({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:Jn})),t=new vn({uv:!0}),n=[1,1,1],s=ue("#9aa1a9"),r=ue("#3b4047"),o=ue("#2a2d33"),a=19.5,c=.6,u=3,d=1.45,p=.95,v=4,m=4,l=.3,x=ue("#33363b"),f={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},h=(_,E,A,P,N,I,R,C=!1)=>t.box(_,E,A,P,N,I,R,f,C?{noBottom:!0}:null),g=(_,E,A,P,N,I)=>{let C=A-N/2,U=A+N/2;for(let k=0;k<12;k++){let W=k/12*Math.PI*2,O=(k+1)/12*Math.PI*2,V=_+Math.cos(W)*P,H=E+Math.sin(W)*P,ie=_+Math.cos(O)*P,fe=E+Math.sin(O)*P;t.quad([V,H,C],[ie,fe,C],[ie,fe,U],[V,H,U],I,i.plain),t.quad([_,E,U],[V,H,U],[ie,fe,U],[ie,fe,U],I,i.plain),t.quad([_,E,C],[ie,fe,C],[V,H,C],[V,H,C],I,i.plain)}},b=u*a+(u-1)*c;for(let _=0;_<u;_++){let E=-b/2+a/2+_*(a+c),A=E-a/2,P=E+a/2;t.quad([A,p,d],[P,p,d],[P,v,d],[A,v,d],n,i.side),t.quad([P,p,-d],[A,p,-d],[A,v,-d],[P,v,-d],n,i.side);let N=_===u-1,I=_===0;t.quad([P,p,d],[P,p,-d],[P,v,-d],[P,v,d],N?n:ue("#c9ced4"),N?i.front:i.plain),t.quad([A,p,-d],[A,p,d],[A,v,d],[A,v,-d],I?n:ue("#c9ced4"),I?i.front:i.plain);for(let R=0;R<m;R++)for(let C of[1,-1]){let U=R/m*Math.PI/2,k=(R+1)/m*Math.PI/2,W=C*d*Math.cos(U),O=v+l*Math.sin(U),V=C*d*Math.cos(k),H=v+l*Math.sin(k);t.quad([A,O,W],[P,O,W],[P,H,V],[A,H,V],s,i.plain);for(let ie of[A,P]){let fe=[[ie,v,0],[ie,O,W],[ie,H,V]];t.quad(fe[0],fe[1],fe[2],fe[2],s,i.plain),t.quad(fe[0],fe[2],fe[1],fe[1],s,i.plain)}}for(let R of[1,-1])h(A,v-.02,R*d-.04,P,v+.05,R*d+.04,r);for(let R of[E-5.5,E+5.5])h(R-1.3,v+.2,-.8,R+1.3,v+.62,.8,ue("#c4c9cf"),!0);h(A+.3,.82,-d+.1,P-.3,p,d-.1,o);for(let[R,C,U,k]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])h(E+R-C/2,.82-U,-1.15+k*.2,E+R+C/2,.82,1.15+k*.2,k>0?o:r);for(let R of[E-7,E+7]){for(let C of[1,-1]){h(R-1.35,.32,C*.86,R+1.35,.56,C*1.02,r);for(let U of[-1.05,1.05])h(R+U-.17,.3,C*.84,R+U+.17,.58,C*1.06,o)}h(R-.35,.5,-1,R+.35,.8,1,r);for(let C of[-1.05,1.05])for(let U of[1,-1])g(R+C,.43,U*.6,.43,.13,x)}if(_<u-1&&h(P,p+.15,-.95,P+c,v-.1,.95,ue("#3a3e44")),_===0){let R=E-3,C=v+.7;t.box(R-.6,v+.26,-.6,R+.6,v+.42,.6,r),t.rod([R-.5,v+.42,0],[R,C+.9,0],.03,.03,4,r),t.rod([R+.5,v+.42,0],[R,C+.9,0],.03,.03,4,r),t.rod([R,C+.9,-.85],[R,C+.9,.85],.03,.03,4,r)}}let y=new mt(t.build(),e);y.castShadow=!0,y.receiveShadow=!0,y.frustumCulled=!1;let M=new Jt;M.add(y),M.visible=!1;let S={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:b},T={};return{group:M,st:S,start(_,E,A=16){Object.assign(S,{active:!0,sx:_,dir:E,speed:A,u:-E*290,ds:E>0?-2:2,cleared:!1}),M.visible=!0},update(_,E,A,P,N){if(!S.active)return;S.u+=S.dir*S.speed*_;let I=S.u-S.dir*S.length/2;if(!S.cleared&&(S.dir>0?I>N+1:I<-N-1)&&(S.cleared=!0),Math.abs(S.u)>330){S.active=!1,M.visible=!1;return}E.at(S.sx,T),M.position.set(T.x+T.fx*S.ds+T.rx*S.u-A.x,T.y+.34,T.z+T.fz*S.ds+T.rz*S.u-A.z),M.rotation.y=T.h+(S.dir>0?Math.PI:0),e.emissiveIntensity=.3+P*1.1}}}var h2='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',tr=2048,nr=4096;function cu(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var Sp=cu(256,256);{let i=Sp.getContext("2d"),e=i.createImageData(256,256),t=fn(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var vf=class{constructor(){this.cA=cu(tr,nr),this.cE=cu(tr/2,nr/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,tr/2,nr/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,tr,nr),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Sp,"repeat")}add(e,t,n,s){if(this.x+t+4>tr&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>nr)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let c of[this.a,this.e])c.save(),c===this.e&&c.scale(.5,.5),c.translate(o.x,o.y),c.beginPath(),c.rect(0,0,t,n),c.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let a=.5;return this.cells[e]={u0:(o.x+a)/tr,u1:(o.x+t-a)/tr,v0:1-(o.y+n-a)/nr,v1:1-(o.y+a)/nr,w:t,h:n},this.cells[e]}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new Zn(n);return s.colorSpace=jt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Hn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function dn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Vn(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([a,c])=>o.addColorStop(a,c)),i.fillStyle=o,i.fillRect(e,t,n,s)}function io(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Vn(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}dn(i,e,t,n,.13)}function es(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function $(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function so(i,e,t,n,s,r,o="#d9dde2",a="rgba(40,45,60,0.55)"){$(i,e-r,t-r,n+2*r,s+2*r,o),$(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=a,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function ts(i,e,t,n,s,r,o=0){let a=i.createLinearGradient(e,t,e+n*.35,t+s),c=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";a.addColorStop(0,c),a.addColorStop(.55,u),a.addColorStop(1,"#dbe9f6"),i.fillStyle=a,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let d=e+n*r();i.beginPath(),i.moveTo(d,t),i.lineTo(d+n*.18,t),i.lineTo(d-n*.25,t+s),i.lineTo(d-n*.43,t+s),i.fill(),i.restore()}function yp(i,e,t,n,s,r="#efe6d2"){$(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Vn(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function uu(i,e,t=800){i.font=`${t} ${e}px ${h2}`}function wt(i,e,t,n,s,r,o,a=800,c=null){uu(i,r,a);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,uu(i,u,a);i.textAlign="center",i.textBaseline="middle",c&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=c,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function au(i,e,t,n,s,r,o,a=800,c=null){let u=[...e],d=u.length,p=Math.min(r*1.05,(s-n)/d),v=Math.min(r,p*.95);uu(i,v,a),i.textAlign="center",i.textBaseline="middle",u.forEach((m,l)=>{let x=n+(s-n-p*d)/2+p*(l+.5);c&&(i.lineWidth=Math.max(2,v*.12),i.strokeStyle=c,i.strokeText(m,t,x)),i.fillStyle=o,i.fillText(m,t,x)})}function ir(i,e,t,n,s,r,o,a=!0){if($(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Vn(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),a){i.fillStyle="#6a6a6a";for(let c=e+n*.2*o();c<e+n-4;c+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-c),d=s*(.12+o()*.25);i.fillRect(c,t+s-d,u,d)}}i.restore()}function f2(i,e,t,n,s,r,o){let a=i.getTransform();e.save(),e.drawImage(i.canvas,a.e+t,a.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",$(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,$(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Vn(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var Mp=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],lu=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],bp=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],d2=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Tp(){let i=new vf,e=fn(2024),t=240,n=(l,x,f,h,g,b,y=!1)=>{io(l,i,f,h,"#ece8e0",0);let M=fn(b*31+(g?7:0)+5);if(b===0){let S=f*.14,T=h*.22,_=f*.72,E=h*.5;so(l,S,T,_,E,5),ts(l,S,T,_/2,E,M),ts(l,S+_/2,T,_/2,E,M);let A=M()<.8?_*(.18+M()*.25):0;A&&yp(l,S+2,T+2,A,E-4,M()<.5?"#efe6d2":"#d9e4ea"),$(l,S+_/2-2,T,4,E,"#cfd4da"),$(l,S-8,T+E+5,_+16,6,"#d8d8d4"),es(l,S-4,T+E+11,8,60),es(l,S+_-4,T+E+11,8,60),g&&(ir(x,S,T,_,E,y?"#e6eeff":"#ffcf8f",M),A&&$(x,S+2,T+2,A,E-4,y?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),$(x,S+_/2-2,T,4,E,"#000"))}else if(b===1){for(let S of[.12,.56]){let T=f*S,_=h*.28,E=f*.3,A=h*.36;so(l,T,_,E,A,4),ts(l,T,_,E,A,M,1),l.fillStyle="rgba(255,255,255,0.35)",l.fillRect(T,_,E,A*.45),es(l,T,_+A+6,E,40,.1),g&&M()<.8&&ir(x,T,_,E,A,M()<.5?"#ffd9a0":"#e8f0ff",M)}l.fillStyle="#c9c9c4",l.beginPath(),l.arc(f*.88,h*.2,9,0,7),l.fill()}else if(b===2){let S=f*.1,T=h*.12,_=f*.8,E=h*.84;so(l,S,T,_,E,4),ts(l,S,T,_/2,E,M),ts(l,S+_/2,T,_/2,E,M);let A=_*(.2+M()*.3);yp(l,S+2,T+2,A,E-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),$(l,S+_/2-2,T,4,E,"#cfd4da"),g&&(ir(x,S,T,_,E,y?"#e6eeff":"#ffcb85",M),$(x,S+2,T+2,A,E-4,y?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),$(x,S+_/2-2,T,4,E,"#000"))}else if(b===3){io(l,i,f,h,"#dfe3e6",0);let S=h*.25,T=h*.55;ts(l,0,S,f,T,M,1);for(let _=0;_<=f;_+=f/4)$(l,_-2,S,4,T,"#8d98a6");if($(l,0,S-4,f,4,"#8d98a6"),$(l,0,S+T,f,5,"#7d8796"),g)for(let _=0;_<4;_++)M()<.7&&ir(x,_*f/4+2,S,f/4-4,T,M()<.6?"#f2f6ff":"#ffe2b0",M)}else if(b===4){l.fillStyle="#6b4a35",l.fillRect(0,0,f,h);for(let A=0;A<h;A+=12)$(l,0,A,f,2,"rgba(30,18,10,0.35)"),$(l,0,A+2,f,1,"rgba(255,220,180,0.06)");dn(l,i,f,h,.15);let S=f*.18,T=h*.25,_=f*.64,E=h*.45;$(l,S-6,T-6,_+12,E+12,"#4a3020"),$(l,S,T,_,E,"#efe4c8"),l.fillStyle="#5a3a26";for(let A=1;A<6;A++)l.fillRect(S+A*_/6-1.5,T,3,E);for(let A=1;A<3;A++)l.fillRect(S,T+A*E/3-1.5,_,3);if(g){ir(x,S,T,_,E,"#ffc070",M,!1),x.fillStyle="#000";for(let A=1;A<6;A++)x.fillRect(S+A*_/6-1.5,T,3,E);for(let A=1;A<3;A++)x.fillRect(S,T+A*E/3-1.5,_,3)}}else if(b===5){$(l,f*.08,0,7,h,"#bdbdb6"),$(l,f*.08+5,0,2,h,"rgba(0,0,0,0.2)");let S=f*.55,T=h*.3,_=f*.22,E=h*.24;so(l,S,T,_,E,3),$(l,S,T,_,E,"#d6dfe4"),l.fillStyle="rgba(255,255,255,0.4)",l.fillRect(S,T,_,E/2),es(l,S,T+E+4,_,50,.12),$(l,f*.22,h*.55,26,34,"#cfcfca"),$(l,f*.22+4,h*.55+6,18,12,"#9aa2a8"),g&&ir(x,S,T,_,E,y?"#eef2ff":"#fff0d8",M,!1)}else if(b===6){let S=f*.4,T=h*.35,_=f*.2,E=h*.28;so(l,S,T,_,E,3),ts(l,S,T,_,E,M,1),es(l,S,T+E+4,_,70,.14),g&&ir(x,S,T,_,E,y?"#e8efff":"#ffd9a0",M)}};for(let l=0;l<7;l++)i.add("win"+l,t,t,(x,f,h,g)=>n(x,f,h,g,!1,l)),i.add("win"+l+"L",t,t,(x,f,h,g)=>n(x,f,h,g,!0,l));for(let l of[0,2,5,6])i.add("win"+l+"C",t,t,(x,f,h,g)=>n(x,f,h,g,!0,l,!0));i.add("plain",t,t,(l,x,f,h)=>{io(l,i,f,h,"#ece8e0"),es(l,f*.3,0,12,h*.6,.06)}),i.add("concrete",t,t,(l,x,f,h)=>{io(l,i,f,h,"#d9d7d0",60);for(let g=0;g<6;g++)es(l,g*41%f,0,10,h*.5,.07)});let s=288,r=(l,x,f,h,g,b,y)=>{let M=(T,_,E,A,P,N=0)=>{l.fillStyle=P,l.beginPath(),l.ellipse(T,_,E,A,N,0,7),l.fill()},S=T=>T[Math.floor(b()*T.length)];if(y==="bakery"){$(l,x,f,h,g,"#d9b98a"),Vn(l,x,f,h,g,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let T=f+g*.28;T<f+g*.72;T+=g*.2){$(l,x,T,h,5,"#8a5a32");for(let _=x+8;_<x+h-8;_+=15+b()*10){let E=7+b()*6,A=4+b()*3;M(_,T-A,E,A,S(["#c98a3e","#b4732e","#d9a256","#a4632a"])),M(_-E*.2,T-A*1.4,E*.5,A*.35,"rgba(255,230,180,0.5)")}}$(l,x+4,f+g*.8,h-8,g*.2,"#efe7d8"),$(l,x+4,f+g*.8,h-8,3,"#9a9a96");for(let T=x+14;T<x+h-10;T+=18)M(T,f+g*.9,6,4,S(["#e8b35a","#c06a3a","#f2d29a"]));$(l,x+h-64,f+10,52,22,"#7a3e1e"),wt(l,"\u713C\u304D\u305F\u3066",x+h-38,f+21,46,14,"#fff3dc",800)}else if(y==="books"){$(l,x,f,h,g,"#6f5a46");for(let T=f+6;T<f+g*.72;T+=g*.17){$(l,x,T+g*.15,h,4,"#4a3828");for(let _=x+3;_<x+h-4;){let E=3+b()*4,A=g*(.1+b()*.045);$(l,_,T+g*.15-A,E,A,S(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),_+=E+(b()<.1?4:.6)}}$(l,x+4,f+g*.76,h-8,g*.24,"#8a7560");for(let T=x+8;T<x+h-22;T+=24)$(l,T,f+g*.79,20,28,S(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),$(l,T+3,f+g*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(y==="florist"){$(l,x,f,h,g,"#e8e2d2"),Vn(l,x,f,h,g,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let T=0;T<7;T++){let _=x+8+b()*(h-16),E=g*(.15+b()*.25);for(let A=0;A<E;A+=3.5)M(_+Math.sin(A*.25+T)*4+(b()-.5)*6,f+4+A,3.4,1.8,S(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),b()*3)}for(let T=0;T<3;T++){let _=f+g*(.5+T*.17);$(l,x,_+14,h,4,"#9a8a76");for(let E=x+10+T*6;E<x+h-8;E+=19){let A=S(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let P=0;P<6;P++){l.strokeStyle="#4a7a3a",l.lineWidth=1.2,l.beginPath();let N=E+(b()-.5)*14;l.moveTo(E,_+10),l.lineTo(N,_-6-b()*8),l.stroke(),M(N,_-8-b()*8,3.2,3,A)}$(l,E-6,_+4,12,11,S(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(y==="clothes"){$(l,x,f,h,g,"#efece6"),Vn(l,x,f,h,g,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),$(l,x+6,f+g*.18,h-60,3,"#7a7a7a");for(let _=x+12;_<x+h-66;_+=13+b()*5){l.fillStyle=S(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let E=f+g*.18+3,A=g*(.3+b()*.2);l.beginPath(),l.moveTo(_-5,E),l.lineTo(_+5,E),l.lineTo(_+8,E+A),l.lineTo(_-8,E+A),l.closePath(),l.fill()}let T=x+h-32;M(T,f+g*.16,7,8,"#d8cfc4"),l.fillStyle=S(["#c84a5a","#4a6a9a","#e8d8b8"]),l.beginPath(),l.moveTo(T-14,f+g*.24),l.lineTo(T+14,f+g*.24),l.lineTo(T+18,f+g*.66),l.lineTo(T-18,f+g*.66),l.closePath(),l.fill(),$(l,T-2,f+g*.66,4,g*.24,"#8a8a8a"),$(l,x+8,f+g*.74,h*.55,6,"#8a6a4a");for(let _=x+12;_<x+h*.55;_+=14)$(l,_,f+g*.74-8,11,8,S(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let T=7;for(let _=f+g*.25;_<f+g;_+=g*.22)for(let E=x+3;E<x+h-6;E+=6+b()*8)e(),T=Math.imul(T,31)+Math.floor(b()*997+b()*61+b()*7)|0;y==="cafe"?d(l,x,f,h,g,fn(T>>>0)):u(l,x,f,h,g,fn(T>>>0),y==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],a=(l,x,f,h,g,b,y="bbccutp")=>{let M=x+1+b()*3;for(;M<f-4;){let S=y[Math.floor(b()*y.length)],T=o[Math.floor(b()*o.length)],_=b()<.5?"#f8f6f0":o[Math.floor(b()*o.length)],E={b:8+b()*6,c:6+b()*2,u:9+b()*2,t:5+b()*2,p:12+b()*5}[S],A=Math.min(g,{b:14+b()*12,c:11+b()*3,u:10+b()*3,t:18+b()*9,p:14+b()*8}[S]),P=2+Math.floor(b()*5);for(let N=0;N<P&&M+E<f-1;N++,M+=E+.6){let I=h-A;S==="t"?($(l,M,I+A*.3,E,A*.7,T),$(l,M+E*.3,I+A*.1,E*.4,A*.22,T),$(l,M+E*.28,I,E*.44,A*.11,_==="#f8f6f0"?"#e8e8e4":"#d83a2a"),$(l,M,I+A*.5,E,A*.22,_)):S==="c"?($(l,M,I,E,A,T),$(l,M,I,E,1.5,"#d8dce0"),$(l,M,I+A*.35,E,A*.3,_)):S==="u"?(l.fillStyle=T,l.beginPath(),l.moveTo(M,I+2),l.lineTo(M+E,I+2),l.lineTo(M+E-1.2,h),l.lineTo(M+1.2,h),l.fill(),$(l,M-.4,I,E+.8,2.2,"#f2efe6"),$(l,M+1,I+A*.45,E-2,A*.25,_)):S==="p"?(l.fillStyle=T,l.beginPath(),l.moveTo(M,h),l.lineTo(M,I+3),l.quadraticCurveTo(M+E/2,I-1.5,M+E,I+3),l.lineTo(M+E,h),l.fill(),$(l,M+1.5,I+A*.35,E-3,A*.35,_),$(l,M,I+2,E,1,"rgba(0,0,0,0.18)")):($(l,M,I,E,A,T),$(l,M+1.5,I+A*.3,E-3,A*.4,_)),$(l,M,I+1,1,A-1,"rgba(255,255,255,0.28)"),$(l,M+E-1.3,I+1,1.3,A-1,"rgba(0,0,0,0.22)")}M+=1.5+b()*3}},c=(l,x,f,h,g)=>{Vn(l,x,h+4,f,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),$(l,x,h,f,4,"#d3d6da"),$(l,x,h+3.2,f,.8,"rgba(40,40,50,0.45)");for(let b=x+4+g()*10;b<x+f-6;b+=14+g()*16)$(l,b,h+.6,5,2.6,g()<.25?"#f2d23a":g()<.2?"#e84a3a":"#ffffff")},u=(l,x,f,h,g,b,y)=>{$(l,x,f,h,g,y?"#f3f1ea":"#ece5d8"),$(l,x,f,h,g*.13,y?"#f6f6f2":"#efebe2");for(let _ of[.035,.085])$(l,x,f+g*_,h,2.4,"#ffffff"),Vn(l,x,f+g*_+2.4,h,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Vn(l,x,f+g*.13,h,g*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let _=0,E=x+18+b()*30;_<2&&E<x+h-40;_++,E+=90+b()*40)$(l,E+13,f+g*.13,1,6,"#888"),$(l,E,f+g*.13+6,28,9,o[Math.floor(b()*9)]),$(l,E+4,f+g*.13+9.5,20,2,"rgba(255,255,255,0.8)");let S=f+g*.25,T=g*.165;$(l,x,S-4,h,4,"#c9ccd0");for(let _=0;_<4;_++){let E=S+T*(_+1);Vn(l,x,E-T,h,T,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),a(l,x,x+h,E,T-6,b),c(l,x,h,E,b)}$(l,x,S+T*4+4,h,f+g-S-T*4-4,"#5c6068"),$(l,x,S+T*4+4,h,1.5,"#8a8e96");for(let _=x+2+b()*20;_<x+h;_+=70+b()*12)$(l,_,S-4,3,T*4+8,"#b4b8be"),$(l,_+2.2,S-4,.8,T*4+8,"rgba(0,0,0,0.3)");if(y){let _=f+g*.7;$(l,x,_+26,h,f+g-_-26,"#7a7e86"),$(l,x,_+26,h,2,"#a8acb2");for(let E=x+2;E<x+h-14;E+=15.5){let A=o[Math.floor(b()*o.length)],P=b()*2;$(l,E,_+P,14,26-P,A),$(l,E,_+P,14,5,b()<.6?"#ffffff":"#e8343a"),$(l,E+2,_+P+8,10,10,b()<.5?"#f2c8a8":o[Math.floor(b()*o.length)]),$(l,E+13,_+P,1,26-P,"rgba(0,0,0,0.25)")}}},d=(l,x,f,h,g,b)=>{$(l,x,f,h,g,"#b88a5e"),Vn(l,x,f,h,g,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let M=x;M<x+h;M+=9)$(l,M,f+g*.55,1,g*.45,"rgba(60,35,20,0.25)");let y=f+g*.3;for(let M=0;M<2;M++){let S=y+M*22;$(l,x+8,S,h*.55,3,"#6a4428"),a(l,x+10,x+h*.55+6,S,14,b,"ctu")}$(l,x+h*.64,f+g*.22,h*.28,g*.26,"#2e3a32"),$(l,x+h*.64,f+g*.22,h*.28,2,"#6a4428");for(let M=0;M<5;M++)$(l,x+h*.67,f+g*(.27+M*.04),h*(.12+b()*.1),1.6,"rgba(240,240,230,0.75)");$(l,x+4,f+g*.56,h-8,6,"#5a3820"),$(l,x+4,f+g*.56+6,h-8,g*.08,"#7a5232"),$(l,x+h*.3,f+g*.47,18,g*.09,"#c8ccd0"),$(l,x+h*.3+3,f+g*.47+3,12,5,"#3a3a40");for(let M=x+30+b()*20;M<x+h-20;M+=70+b()*20)$(l,M,f,1,g*.14,"#3a2a1e"),l.fillStyle="#2f3a36",l.beginPath(),l.moveTo(M-9,f+g*.2),l.quadraticCurveTo(M+.5,f+g*.12,M+10,f+g*.2),l.fill(),l.fillStyle="rgba(255,214,150,0.9)",l.beginPath(),l.ellipse(M+.5,f+g*.2,7,2,0,0,7),l.fill();for(let M=x+26+b()*16;M<x+h-26;M+=78+b()*20){$(l,M-16,f+g*.74,32,4,"#4a2e1c"),$(l,M-1.5,f+g*.74+4,3,g*.2,"#2e2420"),$(l,M-8,f+g*.94,16,2,"#2e2420");for(let S of[-24,24])$(l,M+S-6,f+g*.8,12,3,"#3a2618"),$(l,M+S+(S<0?-6:4),f+g*.66,2,g*.17,"#3a2618"),$(l,M+S-5,f+g*.83,1.6,g*.13,"#3a2618"),$(l,M+S+3.4,f+g*.83,1.6,g*.13,"#3a2618");l.fillStyle="#f4f0e8",l.beginPath(),l.ellipse(M-6,f+g*.74-1.5,3,1.5,0,0,7),l.fill()}},p=(l,x,f,h,g,b,y="")=>{let M=fn(b);if(io(l,i,f,h,"#e6e2da"),g==="glass"||g==="door"||g==="konbini"||g==="cafe"){let T=h*.22,_=f-12,E=h*.78-4;$(l,6,T,_,E,g==="konbini"?"#f6f4ea":g==="cafe"?"#7a5a40":"#8a7a68"),r(l,6,T,_,E,M,y||g),g==="konbini"&&$(l,6,T+4,_,5,"#ffffff"),g==="door"&&($(l,f/2-30,T+18,60,24,"#fff"),wt(l,"\u55B6\u696D\u4E2D",f/2,T+30,54,18,"#c82828")),g==="glass"&&!y&&M()<.7&&($(l,16,T+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),wt(l,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,T+44,40,16,"#c02020")),f2(l,x,6,T,_,E,g==="konbini"?"#e4eef8":g==="cafe"?"#f0a868":"#f2d2a6"),l.save(),l.globalAlpha=.35,ts(l,6,T,_,E,M),l.restore(),$(l,6,T,_,4,"#4a4e57"),$(x,6,T,_,4,"#000"),g==="door"&&($(l,f/2-2,T,4,E,"#4a4e57"),$(x,f/2-2,T,4,E,"#000"),$(l,f/2-14,T+E*.45,3,40,"#c0c4c8"),$(l,f/2+11,T+E*.45,3,40,"#c0c4c8")),g==="cafe"&&($(l,f*.62,h-70,46,62,"#2c3a30"),$(x,f*.62,h-70,46,62,"#000"),wt(l,"\u30E9\u30F3\u30C1",f*.62+23,h-50,40,13,"#fff",700))}else if(g==="shutter"){let T=h*.2,_=f-12,E=h*.8;$(l,6,T,_,E,"#b8bcc0");for(let A=T;A<T+E;A+=7)$(l,6,A,_,2,"rgba(60,64,72,0.35)"),$(l,6,A+2,_,1,"rgba(255,255,255,0.35)");$(l,6,T,_,10,"#8f949a"),dn(l,i,f,h,.12),M()<.5&&($(l,f/2-40,T+E*.35,80,26,"#fff"),wt(l,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),f/2,T+E*.35+13,74,16,"#333",700))}else if(g==="noren"){$(l,0,0,f,h,"#5b3c28");for(let P=0;P<f;P+=10)$(l,P,h*.2,3,h*.8,"rgba(25,15,8,0.6)");dn(l,i,f,h,.15);let S=f*.12,T=h*.24,_=f*.76,E=h*.34,A=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);$(l,S,T,_,E,A);for(let P=1;P<3;P++)$(l,S+_*P/3-1,T+E*.25,2,E*.75,"rgba(255,255,255,0.25)");wt(l,e.pick(d2),f/2,T+E*.55,_*.9,46,"#f5f0e6",800),$(l,S,T,_,6,"#3a2a1c"),x.fillStyle="#ffae5c",x.fillRect(S,T+E,_,h-T-E),x.fillStyle="rgba(255,170,90,0.6)",x.fillRect(S,T,_,E),l.fillStyle="#d8352a",l.beginPath(),l.ellipse(f*.9,h*.36,13,19,0,0,7),l.fill(),wt(l,"\u9152",f*.9,h*.36,16,14,"#fff"),x.fillStyle="#ff6a3a",x.beginPath(),x.ellipse(f*.9,h*.36,13,19,0,0,7),x.fill()}else if(g==="house"){let S=f*.18,T=h*.3,_=f*.34,E=h*.7;$(l,S-6,T-6,_+12,E+6,"#9a9a96"),$(l,S,T,_,E,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),$(l,S+_-14,T+E*.5,4,22,"#d8d0c0"),$(l,S+6,T+10,_-12,E*.25,"rgba(255,255,255,0.18)"),$(l,f*.62,h*.48,30,22,"#cfcfca"),$(l,f*.62+6,h*.48+5,18,4,"#555");let A=f*.6,P=h*.22,N=f*.3,I=h*.2;so(l,A,P,N,I,3),ts(l,A,P,N,I,M,1);for(let R=0;R<3;R++)l.fillStyle="#7b5a43",l.fillRect(f*.6+R*22,h-26,16,18),l.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),l.beginPath(),l.arc(f*.6+R*22+8,h-32,11,0,7),l.fill();x.fillStyle="#ffd08a",x.beginPath(),x.arc(S+_+14,T+8,6,0,7),x.fill(),M()<.6&&(x.fillStyle="#ffcf8f",x.fillRect(A,P,N,I))}else if(g==="garage"){let T=h*.25,_=f-16,E=h*.75;$(l,8,T,_,E,"#efefec");for(let A=T;A<T+E;A+=9)$(l,8,A,_,1.5,"rgba(80,80,90,0.25)");dn(l,i,f,h,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((l,x)=>{i.add("shop_"+l,t,s,(f,h,g,b)=>p(f,h,g,b,l,100+x)),(l==="glass"||l==="noren"||l==="house")&&i.add("shop_"+l+"2",t,s,(f,h,g,b)=>p(f,h,g,b,l,200+x)),l==="glass"&&["bakery","books","florist","clothes"].forEach((f,h)=>i.add("shop_glass"+(h+3),t,s,(g,b,y,M)=>p(g,b,y,M,"glass",300+h,f)))});for(let l=0;l<14;l++)i.add("hs"+l,512,76,(x,f,h,g)=>{let[b,y]=lu[l%lu.length],M=Mp[l*7%Mp.length];$(x,0,0,h,g,b),$(x,0,0,h,5,"rgba(255,255,255,0.35)"),$(x,0,g-6,h,6,"rgba(0,0,0,0.18)"),l%3===0&&($(x,12,12,g-24,g-24,y),wt(x,M[0],12+(g-24)/2,g/2,g-30,34,b)),wt(x,M,h/2+(l%3===0?24:0),g/2+2,h*.7,50,y,900),dn(x,i,h,g,.08),f.fillStyle=b==="#fff"||b==="#f5efe0"?"#d9d6cc":b,f.fillRect(0,0,h,g),f.globalAlpha=.9,wt(f,M,h/2+(l%3===0?24:0),g/2+2,h*.7,50,y==="#fff"?"#ffffff":y,900),f.globalAlpha=1});for(let[l,x,f]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+l,512,76,(h,g,b,y)=>{$(h,0,0,b,y,x),$(h,0,0,b,5,"rgba(255,255,255,0.35)"),$(h,0,y-6,b,6,"rgba(0,0,0,0.18)"),wt(h,l,b/2,y/2+2,b*.7,50,f,900),dn(h,i,b,y,.08),g.fillStyle=x,g.fillRect(0,0,b,y),g.globalAlpha=.9,wt(g,l,b/2,y/2+2,b*.7,50,f,900),g.globalAlpha=1});for(let l=0;l<10;l++)i.add("vs"+l,72,288,(x,f,h,g)=>{let[b,y]=lu[(l*3+1)%lu.length],M=bp[l%bp.length];$(x,0,0,h,g,b),x.strokeStyle="rgba(0,0,0,0.3)",x.lineWidth=4,x.strokeRect(2,2,h-4,g-4),au(x,M,h/2,12,g-12,56,y,900),dn(x,i,h,g,.08),$(f,0,0,h,g,b==="#fff"?"#e8e8e8":b),au(f,M,h/2,12,g-12,56,y==="#fff"?"#fff":y,900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([l,x,f],h)=>i.add("bb"+h,512,240,(g,b,y,M)=>{$(g,0,0,y,M,"#fbfaf5"),$(g,0,0,y,M*.62,f),wt(g,l,y/2,M*.32,y*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),wt(g,x,y/2,M*.8,y*.85,52,"#333",800),dn(g,i,y,M,.08),$(b,0,0,y,M,"#555"),b.globalAlpha=.85,$(b,0,0,y,M*.62,f),wt(b,l,y/2,M*.32,y*.9,96,"#fff",900),b.globalAlpha=1})),i.add("konbini_band",480,72,(l,x,f,h)=>{$(l,0,0,f,h,"#fbfbf7"),$(l,0,h*.62,f,h*.14,"#2a9a4a"),$(l,0,h*.76,f,h*.12,"#f08a24"),$(l,0,h*.88,f,h*.12,"#2f6fd8"),wt(l,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",f/2,h*.32,f*.8,40,"#1d3d8a",900),x.fillStyle="#f3f6f0",x.fillRect(0,0,f,h),wt(x,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",f/2,h*.32,f*.8,40,"#1d3d8a",900)});for(let l=0;l<3;l++)i.add("vend"+l,128,234,(x,f,h,g)=>{let b=["#d8352a","#2f6fd8","#f4f4f0"][l];$(x,0,0,h,g,b),$(x,8,10,h-16,g*.55,"#eef4f8");let y=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let M=0;M<4;M++)for(let S=0;S<6;S++){let T=14+S*17,_=18+M*30;x.fillStyle=y[(M*6+S+l)%y.length],x.fillRect(T,_,11,20),x.fillStyle="rgba(255,255,255,0.5)",x.fillRect(T+2,_+2,3,14),x.fillStyle="#2a2a2a",x.fillRect(T,_+23,11,3)}$(x,10,g*.62,h-20,22,"#222"),$(x,h-34,g*.66,14,22,"#bbb"),$(x,14,g*.82,h-28,22,"#1b1b1b"),wt(x,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][l],h/2,g*.62+11,h-28,14,"#fff",700),dn(x,i,h,g,.08),f.fillStyle="#f2f8ff",f.fillRect(8,10,h-16,g*.55);for(let M=0;M<4;M++)for(let S=0;S<6;S++)f.fillStyle=y[(M*6+S+l)%y.length],f.fillRect(14+S*17,18+M*30,11,20);f.fillStyle="#9fd0ff",f.fillRect(10,g*.62,h-20,22)});i.add("ac",128,88,(l,x,f,h)=>{$(l,0,0,f,h,"#e9e9e4"),Vn(l,0,0,f,h,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),l.fillStyle="#9a9c9e",l.beginPath(),l.arc(f*.4,h*.5,h*.36,0,7),l.fill(),l.strokeStyle="#d6d6d2",l.lineWidth=2;for(let g=6;g<h*.36;g+=6)l.beginPath(),l.arc(f*.4,h*.5,g,0,7),l.stroke();for(let g=12;g<h-10;g+=6)$(l,f*.78,g,f*.16,2,"#b8b8b2")}),i.add("plate",128,64,(l,x,f,h)=>{$(l,0,0,f,h,"#f2cf3a"),l.strokeStyle="#2f5a2f",l.lineWidth=3,l.strokeRect(3,3,f-6,h-6),wt(l,"\u54C1\u5DDD 580",f/2,16,f*.6,14,"#2f5a2f",700),wt(l,"\u3042 12-34",f/2,42,f*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(l,x,f,h)=>{l.fillStyle="#fff",l.beginPath(),l.moveTo(2,2),l.lineTo(f-2,2),l.lineTo(f/2,h-2),l.fill(),l.fillStyle="#d8231c",l.beginPath(),l.moveTo(10,7),l.lineTo(f-10,7),l.lineTo(f/2,h-12),l.fill(),wt(l,"\u6B62\u307E\u308C",f/2,34,f*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(l,x,f,h)=>{l.fillStyle="#fff",l.beginPath(),l.arc(f/2,h/2,f/2-1,0,7),l.fill(),l.fillStyle="#1e5bb8",l.beginPath(),l.arc(f/2,h/2,f/2-6,0,7),l.fill(),l.fillStyle="#fff",l.beginPath(),l.moveTo(f/2,22),l.lineTo(f/2+22,50),l.lineTo(f/2+8,50),l.lineTo(f/2+8,88),l.lineTo(f/2-8,88),l.lineTo(f/2-8,50),l.lineTo(f/2-22,50),l.fill()}),i.add("sign_speed",112,112,(l,x,f,h)=>{l.fillStyle="#fff",l.beginPath(),l.arc(f/2,h/2,f/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=12,l.beginPath(),l.arc(f/2,h/2,f/2-9,0,7),l.stroke(),wt(l,"30",f/2,h/2+2,f*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(l,x,f,h)=>{$(l,0,0,f,h,"#1d4f9a"),l.strokeStyle="#fff",l.lineWidth=2,l.strokeRect(3,3,f-6,h-6),au(l,"\u672C\u753A\u4E8C\u4E01\u76EE",f/2,10,h-10,24,"#fff",700)});for(let l=0;l<4;l++)i.add("poster"+l,64,90,(x,f,h,g)=>{let b=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][l];$(x,0,0,h,g,b),$(x,4,4,h-8,g*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][l]),wt(x,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][l],h/2,g*.25,h-12,18,"#fff",900);for(let y=0;y<4;y++)$(x,8,g*.58+y*8,h-16-y%2*14,3,"rgba(60,60,60,0.5)")});for(let l=0;l<3;l++)i.add("bal"+l,t,88,(x,f,h,g)=>{let b=["#e9e3d6","#dfe6ea","#efe2dc"][l];if(io(x,i,h,g,b),l===1)for(let y=10;y<h-6;y+=h/6)$(x,y,10,h/6-8,g-20,"rgba(220,235,245,0.9)"),x.fillStyle="rgba(255,255,255,0.45)",x.fillRect(y,10,h/6-8,(g-20)*.4);else{$(x,0,0,h,7,"rgba(255,255,255,0.4)");for(let y=h/3;y<h;y+=h/3)$(x,y-1,0,2,g,"rgba(0,0,0,0.08)")}$(x,0,g-6,h,6,"rgba(0,0,0,0.12)"),es(x,h*.3,g-6,10,10,.2)});i.add("kawara",272,256,(l,x,f,h)=>{$(l,0,0,f,h,"#58617a");for(let g=0;g<h;g+=16)Vn(l,0,g,f,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let g=-4;g<f;g+=20)$(l,g,0,2,h,"rgba(0,0,0,0.18)");dn(l,i,f,h,.12)}),i.add("wood",256,256,(l,x,f,h)=>{$(l,0,0,f,h,"#6d4c37");for(let g=0;g<h;g+=14)$(l,0,g,f,2,"rgba(25,15,8,0.4)"),$(l,0,g+2,f,1,"rgba(255,220,180,0.07)");dn(l,i,f,h,.16)}),i.add("block",256,128,(l,x,f,h)=>{$(l,0,0,f,h,"#c9c7bf");for(let g=0;g<h;g+=32)for(let b=g/32%2?-32:0;b<f;b+=64)l.strokeStyle="rgba(80,80,80,0.35)",l.lineWidth=2,l.strokeRect(b+1,g+1,62,30);for(let g=0;g<f;g+=64)l.fillStyle="rgba(70,70,70,0.25)",l.fillRect(g+20,40,24,16);dn(l,i,f,h,.15),es(l,0,0,f,40,.1)}),i.add("lantern",64,96,(l,x,f,h)=>{l.fillStyle="#d8352a",l.beginPath(),l.ellipse(f/2,h/2,f/2-2,h/2-8,0,0,7),l.fill();for(let g=16;g<h-12;g+=7)$(l,4,g,f-8,1.5,"rgba(0,0,0,0.2)");$(l,f/2-14,2,28,8,"#222"),$(l,f/2-14,h-10,28,8,"#222"),wt(l,"\u796D",f/2,h/2,f*.6,28,"#fff",900),x.fillStyle="#ff6a35",x.beginPath(),x.ellipse(f/2,h/2,f/2-2,h/2-8,0,0,7),x.fill()}),i.add("busstop",96,96,(l,x,f,h)=>{l.fillStyle="#fff",l.beginPath(),l.arc(f/2,h/2,f/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=8,l.beginPath(),l.arc(f/2,h/2,f/2-6,0,7),l.stroke(),wt(l,"\u30D0\u30B9\u505C",f/2,h/2,f*.66,20,"#1d3d8a",900)}),i.add("white",16,16,l=>$(l,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(l,x,f,h)=>{l.save(),l.translate(f/2,h/2),l.rotate(Math.PI/4),l.fillStyle="#1b1b1b",l.fillRect(-41,-41,82,82),l.fillStyle="#f2c230",l.fillRect(-37,-37,74,74),l.restore(),l.fillStyle="#1b1b1b",l.fillRect(f/2-22,h/2-6,44,18),l.fillRect(f/2-16,h/2-16,18,12),l.fillRect(f/2+8,h/2-13,5,7),l.beginPath(),l.arc(f/2-12,h/2+15,5,0,7),l.arc(f/2+12,h/2+15,5,0,7),l.fill(),wt(l,"\u8E0F\u5207",f/2,h/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((l,x)=>i.add("bridge"+x,64,176,(f,h,g,b)=>{$(f,0,0,g,b,"#b9b5ab"),dn(f,i,g,b,.2),$(f,6,6,g-12,b-12,"#a7a398"),au(f,l,g/2,14,b-14,34,"#3f3c37",800)})),i.add("signal",240,84,(l,x,f,h)=>{$(l,0,0,f,h,"#4a4d52"),$(l,0,0,f,5,"#5c6066"),dn(l,i,f,h,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([g,b])=>{l.fillStyle="#26282c",l.beginPath(),l.arc(b,h/2,33,0,7),l.fill(),l.fillStyle=g,l.beginPath(),l.arc(b,h/2,27,0,7),l.fill()})}),i.add("ped_sig",64,128,(l,x,f,h)=>{$(l,0,0,f,h,"#3d4045"),l.fillStyle="#5a1814",l.fillRect(8,8,f-16,h/2-12),l.fillStyle="#0d4f44",l.fillRect(8,h/2+4,f-16,h/2-12),l.fillStyle="rgba(255,255,255,0.18)",l.beginPath(),l.arc(f/2,h*.18,6,0,7),l.fill(),l.fillRect(f/2-5,h*.24,10,18)}),i.add("tomare",256,96,(l,x,f,h)=>{l.clearRect(0,0,f,h),l.fillStyle="rgba(244,244,238,0.012)",l.fillRect(0,0,f,h),wt(l,"\u6B62\u307E\u308C",f/2,h/2+4,f*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((l,x)=>i.add("hodokyo"+x,256,44,(f,h,g,b)=>{$(f,0,0,g,b,"#1f4f96"),f.strokeStyle="#fff",f.lineWidth=3,f.strokeRect(4,4,g-8,b-8),wt(f,l,g/2,b/2+1,g*.85,28,"#fff",800)}));let m=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];m.forEach(([l,x,f],h)=>{let g=m[(h+3)%4][0],b=m[(h+1)%4][0];i.add("ekimei"+h,320,124,(y,M,S,T)=>{$(y,0,0,S,T,"#3a3d42"),$(y,4,4,S-8,T-8,"#f8f8f3"),wt(y,x,S/2,20,S*.5,15,"#2b2b2b",700),wt(y,l,S/2,52,S*.6,40,"#151515",900),wt(y,f,S/2,80,S*.5,12,"#555",600),$(y,4,T-30,S-8,26,"#1f9a50"),y.fillStyle="#fff",uu(y,12,700),y.textBaseline="middle",y.textAlign="left",y.fillText("\u2190 "+g,12,T-17),y.textAlign="right",y.fillText(b+" \u2192",S-12,T-17),dn(y,i,S,T,.06),$(M,4,4,S-8,T-8,"#8a8a84")}),i.add("ekiplate"+h,220,48,(y,M,S,T)=>{$(y,0,0,S,T,"#4b3326"),dn(y,i,S,T,.2),wt(y,l+"\u99C5",S/2,T/2+1,S*.8,30,"#f3ead8",800)})});for(let l of["l","r"])i.add("chev_"+l,96,120,(x,f,h,g)=>{$(x,0,0,h,g,"#f4f4ef"),$(x,4,4,h-8,g-8,"#1e5bb8"),x.fillStyle="#f8f8f4",x.beginPath();let b=l==="r"?1:-1,y=h/2,M=g/2;x.moveTo(y-b*26,M-40),x.lineTo(y+b*22,M),x.lineTo(y-b*26,M+40),x.lineTo(y-b*8,M+40),x.lineTo(y+b*40,M),x.lineTo(y-b*8,M-40),x.closePath(),x.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((l,x)=>i.add("tunnel"+x,360,80,(f,h,g,b)=>{$(f,0,0,g,b,"#e9e7e0"),$(f,4,4,g-8,b-8,"#24403b"),dn(f,i,g,b,.08),wt(f,l,g/2,b*.42,g*.8,38,"#f4f2ea",800),wt(f,"L = 170 m",g/2,b*.8,g*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(l,x,f,h)=>{$(l,0,0,f,h,"#f6f6f2"),l.fillStyle="#d42a22";for(let g=-20;g<h;g+=26)l.beginPath(),l.moveTo(4,g),l.lineTo(f/2,g+20),l.lineTo(f-4,g),l.lineTo(f-4,g+11),l.lineTo(f/2,g+31),l.lineTo(4,g+11),l.closePath(),l.fill();l.strokeStyle="#222",l.lineWidth=3,l.strokeRect(1.5,1.5,f-3,h-3)}),i.add("xing_plate",128,48,(l,x,f,h)=>{$(l,0,0,f,h,"#f6f6f2"),l.strokeStyle="#d8231c",l.lineWidth=4,l.strokeRect(3,3,f-6,h-6),wt(l,"\u8E0F\u5207\u6CE8\u610F",f/2,h/2,f*.8,26,"#d8231c",900)}),i.add("rail",240,80,(l,x,f,h)=>{l.clearRect(0,0,f,h),$(l,0,0,f,7,"#e9ebee"),$(l,0,6,f,2,"rgba(60,70,80,0.5)"),$(l,0,h-6,f,6,"#d5d8dc");for(let g=3;g<f;g+=9)$(l,g,7,3,h-13,"#e2e5e9"),$(l,g+2,7,1,h-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(l,x,f,h)=>{let g=fn(4242);$(l,0,0,f,h,"#3d3f3c");let b=38,y=b/Math.SQRT2;l.save(),l.beginPath(),l.rect(0,22,f,h-22),l.clip();for(let M=-2;M*y<h+b;M++)for(let S=-2;S*b<f+b;S++){let T=S*b+(M%2?b/2:0),_=22+M*y,E=.52+g()*.17,A=Math.min(1,Math.max(0,(_-h*.55)/(h*.4))),P=Math.round(255*E*(1-.38*A)),N=`rgb(${P-4},${P-2},${P-9})`;l.fillStyle=N,l.beginPath(),l.moveTo(T,_-y+3.5),l.lineTo(T+y-3.5,_),l.lineTo(T,_+y-3.5),l.lineTo(T-y+3.5,_),l.closePath(),l.fill(),l.fillStyle="rgba(255,255,255,0.12)",l.beginPath(),l.moveTo(T,_-y+3.5),l.lineTo(T+y-3.5,_),l.lineTo(T,_),l.closePath(),l.fill(),A>.3&&g()<.5&&(l.fillStyle=`rgba(70,96,52,${.25+.3*g()})`,l.beginPath(),l.arc(T+(g()-.5)*10,_+6,4+g()*6,0,7),l.fill())}l.restore(),Vn(l,0,h*.55,f,h*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),$(l,0,0,f,22,"#8c8d87"),$(l,0,18,f,4,"rgba(0,0,0,0.3)"),$(l,0,0,f,3,"rgba(255,255,255,0.2)"),dn(l,i,f,h,.12)}),i.add("wrail",240,80,(l,x,f,h)=>{l.clearRect(0,0,f,h),$(l,0,0,f,9,"#6a4a34"),$(l,0,0,f,2,"rgba(255,225,190,0.25)"),$(l,0,8,f,2,"rgba(20,10,5,0.45)"),$(l,0,h-10,f,10,"#5e412e"),$(l,0,h-10,f,2,"rgba(255,225,190,0.18)");for(let g=4;g<f;g+=12)$(l,g,9,5,h-19,"#634632"),$(l,g,9,1.2,h-19,"rgba(255,225,190,0.18)"),$(l,g+4,9,1,h-19,"rgba(20,10,5,0.4)");dn(l,i,f,h,.15)}),i}function Ep(i){let n=cu(1024,2560),s=n.getContext("2d"),r=fn(321),o={},a=512,c={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},u=(m,l,x)=>{let f=c[m],h=256,g=m==="pine",b=m==="sakura";s.save(),s.translate(l,x),s.beginPath(),s.rect(0,0,512,512),s.clip();let y=[[h,h,g?80:92]];for(let S=0;S<(g?10:14);S++){let T=r()*6.28,_=45+r()*120;y.push([h+Math.cos(T)*_,h+Math.sin(T)*_*(g?.42:.9),Math.min(34+r()*52,232-_)])}let M=b?2300:g?2600:2300;for(let S=0;S<M;S++){let T=y[Math.floor(r()*y.length)],_=r()*6.28,E=Math.sqrt(r())*T[2],A=T[0]+Math.cos(_)*E,P=T[1]+Math.sin(_)*E*(g?.45:1),N=E/T[2],I=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(N>.82?.5:0))));if(s.fillStyle=f[I],b){let R=7+r()*8;s.beginPath(),s.arc(A,P,R,0,7),s.fill(),r()<.25&&(s.fillStyle=f[4],s.beginPath(),s.arc(A-R*.3,P-R*.3,R*.4,0,7),s.fill())}else if(g)s.save(),s.translate(A,P),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(m==="momiji"){let R=8+r()*7;s.save(),s.translate(A,P),s.rotate(r()*6.28),s.beginPath();for(let C=0;C<10;C++){let U=C%2?R*.42:R,k=C/10*6.2832;s.lineTo(Math.cos(k)*U,Math.sin(k)*U)}s.closePath(),s.fill(),s.restore()}else if(m==="ginkgo"){let R=9+r()*7;s.save(),s.translate(A,P),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,R,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let R=9+r()*10;s.beginPath(),s.ellipse(A,P,R,R*.55,r()*6.28,0,7),s.fill()}}for(let S=0;S<90;S++){let T=r()*6.28,_=150+r()*85,E=h+Math.cos(T)*_,A=h+Math.sin(T)*_*(g?.45:.92);s.fillStyle=f[1+Math.floor(r()*4)],g?(s.save(),s.translate(E,A),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(E,A,b?6+r()*6:7+r()*6,0,7),s.fill())}if(b)for(let S=0;S<14;S++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let T=h+(r()-.5)*300,_=h+60+r()*120;s.beginPath(),s.moveTo(T,_),s.lineTo(T+(r()-.5)*40,_-20-r()*30),s.stroke()}s.restore(),o[m]={u0:l/1024,u1:(l+512)/1024,v0:1-(x+512)/2560,v1:1-x/2560}},d=(m,l,x,f)=>{s.save(),s.translate(l,x),s.beginPath(),s.rect(0,0,512,512),s.clip();let h=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],g=f?120:170;for(let b=0;b<g;b++){let y=256+(r()-.5)*(f?330:380)*Math.sqrt(r()),M=150+r()*(f?230:300)*(1-Math.abs(y-256)/300),S=(y-256)*.35+(r()-.5)*90,T=9+r()*9,_=y+S,E=512-M,A=Math.min(4,Math.floor(r()*2.2+M/380*2.6)),P=s.createLinearGradient(0,512,0,E);P.addColorStop(0,h[0]),P.addColorStop(.6,h[Math.max(1,A-1)]),P.addColorStop(1,h[A]),s.fillStyle=P,s.beginPath(),s.moveTo(y-T/2,512),s.quadraticCurveTo(y-T/2+S*.3,512-M*.55,_,E),s.quadraticCurveTo(y+T/2+S*.3,512-M*.5,y+T/2,512),s.fill()}if(f)for(let b=0;b<16;b++){let y=110+r()*290,M=150+r()*200,S=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(y+(r()-.5)*20,512),s.quadraticCurveTo(y+(r()-.5)*30,(M+512)/2,y,M),s.stroke(),S<.55){s.fillStyle="#fbfaf2";for(let T=0;T<12;T++){let _=T/12*6.283;s.beginPath(),s.ellipse(y+Math.cos(_)*11,M+Math.sin(_)*11,9,4.5,_,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(y,M,8,0,7),s.fill()}else if(S<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(y,M,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(y-3,M-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let T=0;T<6;T++)s.beginPath(),s.arc(y+(r()-.5)*16,M+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),o[m]={u0:l/1024,u1:(l+512)/1024,v0:1-(x+512)/2560,v1:1-x/2560}};((m,l,x)=>{let f=fn(97);s.save(),s.translate(l,x),s.beginPath(),s.rect(0,0,512,512),s.clip(),s.lineCap="round";let h=(g,b,y,M,S,T)=>{let _=g+Math.cos(y)*M,E=b+Math.sin(y)*M;if(s.strokeStyle=T>3?"#76605f":T>1?"#6c5458":"#62494f",s.lineWidth=S,s.beginPath(),s.moveTo(g,b),s.lineTo(_,E),s.stroke(),T<=0||S<.7)return;let A=2+(f()<.4?1:0);for(let P=0;P<A;P++){let N=y+(f()-.5)*1.1+(P-(A-1)/2)*.42;N=N*.8+-Math.PI/2*.2,h(_,E,N,M*(.62+f()*.2),S*.68,T-1)}};for(let g=0;g<6;g++)h(256+(f()-.5)*40,500,-Math.PI/2+(f()-.5)*.9,110+f()*50,5.6,6);s.restore(),o[m]={u0:l/1024,u1:(l+512)/1024,v0:1-(x+512)/2560,v1:1-x/2560}})("twigs",0,0),u("leafA",0,a),u("leafB",512,a),u("sakura",0,a+512),u("pine",512,a+512),u("momiji",0,a+1024),u("ginkgo",512,a+1024),d("grass",0,a+1536,!1),d("flowers",512,a+1536,!0);let v=new Zn(n);return v.colorSpace=jt,v.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:v,cells:o,tuftV:[0,1-(a+1536)/2560]}}var pn=[1,1,1],be={pole:ue("#b1b0a9"),metal:ue("#8d9198"),black:ue("#2a2b30"),yellow:ue("#f2c230"),white:ue("#f4f3ee"),trans:ue("#a0a3a8"),lampPole:ue("#727780"),lampHead:ue("#dcdcd6"),trunk:ue("#6a5444"),trunkDark:ue("#4b3a33"),leaf:ue("#86ba4c"),leafShade:ue("#2c6640"),sakura:ue("#ffd3e3"),sakuraShade:ue("#de94b4"),pine:ue("#55874c"),pineShade:ue("#1d4632"),cedar:ue("#41713e"),cedarShade:ue("#1b3e2a"),roof:ue("#bdbbb3"),parapet:ue("#dcdad2"),pipe:ue("#c4c4bf"),orange:ue("#f07a22"),red:ue("#d8352a"),vermilion:ue("#e2482c"),concrete:ue("#c9c7c0"),stone:ue("#a8a69e"),terracotta:ue("#b8653d"),rail:ue("#eeeeea")},ns=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(ue),Rp=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(ue),Mf=null;function Cp(i){Mf=i}var Ri=i=>Mf.uv(i),oo=Ri,Pp=(i,e)=>{let t=1;for(;Mf.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function fu(i,e,t,n,s=0){let r=new st().makeRotationY(s);r.setPosition(e,t,n);let o=new st().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var bf=(i,e,t,n)=>{if(!i.hasLit||e.charCodeAt(0)!==119)return;let s=e.charCodeAt(e.length-1);if(s!==76&&s!==67)return;let r=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((r-Math.floor(r))*231)},Kt=(i,e,t,n,s,r,o,a=pn)=>{bf(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],a,Ri(o)),i.litV=0},Vi=(i,e,t,n,s,r,o,a=pn)=>{bf(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],a,Ri(o)),i.litV=0},Gi=(i,e,t,n,s,r,o,a=pn)=>{bf(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],a,Ri(o)),i.litV=0},ro=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?Ri(r):void 0),p2=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function Ip(i){return p2.map(e=>new z(e[0],e[1],e[2]).applyMatrix4(i))}function Sf(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,be.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?be.black:be.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,be.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,be.metal);let o=[-.85,-.3,.3,.85],a=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,be.white);for(let u of a)s.cyl(0,r-1.65,u,.045,.03,.15,6,be.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,be.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,be.trans),s.box(-.06,7.2,.12,.06,7.35,.26,be.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,be.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,be.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,be.concrete);for(let u=2.4,d=0;u<r-2;u+=.45,d++)s.rod([0,u,0],[d%2?.3:-.3,u,0],.015,.015,3,be.metal);return i.atlas.setM(e),Kt(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&Kt(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...a.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new z(u[0],u[1],u[2]).applyMatrix4(e))}var hu=new z;function ws(i,e,t,n,s,r){i.lamps&&(hu.set(t,n,s).applyMatrix4(e),i.lamps.push(hu.x,hu.y,hu.z,r))}function Tf(i,e,t,n={}){let s=i.color;s.setM(e),ws(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,be.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,be.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,be.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,be.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,pn);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],pn,{u0:0,u1:1,v0:0,v1:1})}function Lp(i,e,t=.04){let n=i.color;n.setM(e),ws(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,be.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,be.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,be.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,pn),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],pn,{u0:0,u1:1,v0:0,v1:1})}function La(i,e){let t=i.color;t.setM(e),ws(i,e,0,3.5,0,.9),t.cyl(0,0,0,.07,.06,3.2,8,ue("#3a3a3e")),t.box(-.2,3.2,-.2,.2,3.25,.2,ue("#3a3a3e")),t.cyl(0,3.75,0,.26,.04,.3,8,ue("#3a3a3e")),i.lamp.setM(e),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,pn),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],pn,{u0:0,u1:1,v0:0,v1:1})}function Ef(i,e,t){let n=Math.floor(t()*3),s=[be.red,ue("#2f6fd8"),be.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,En(s,.8)),i.atlas.setM(e),Kt(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function _f(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,ue("#e6e6e1")),i.atlas.setM(e),Kt(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function Dp(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ue("#c8ccd2"),ue("#c0392b"),ue("#2c6fb7"),ue("#2b2b2b"),ue("#e8c84a"),ue("#e98fb0")]);for(let o of[-.52,.52])for(let a=0;a<12;a++){let c=a/12*Math.PI*2,u=(a+1)/12*Math.PI*2;n.rod([o+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,be.black)}let r=(o,a)=>n.rod(o,a,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,be.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,be.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,be.metal)}function Np(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,be.orange),t.cyl(0,.04,0,.16,.03,.68,10,be.orange),t.cyl(0,.32,0,.115,.095,.12,10,be.white,!1)}function wf(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,be.terracotta),i.leaf.setM(e),Ci(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}function As(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,be.metal),i.atlas.setM(e),n<0?Gi(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Vi(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function Af(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?be.white:be.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,be.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,be.black),i.atlas.setM(e),t<0?Gi(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Vi(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function Up(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,ue("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,ue("#f0a020"))}function Rf(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,be.orange);let s=0,r=3.25,o=.42,a=14;for(let c=0;c<a;c++){let u=c/a*Math.PI*2,d=(c+1)/a*Math.PI*2,p=(v,m,l)=>[t*l,r+Math.sin(v)*m,s+Math.cos(v)*m-.25];ro(n,p(0,0,-.02),p(t>0?d:u,o,-.02),p(t>0?u:d,o,-.02),be.orange),ro(n,p(0,0,-.035),p(t>0?d:u,o*.86,-.035),p(t>0?u:d,o*.86,-.035),ue("#dfe9f2"))}}var Cf=null;function Fp(i){Cf=i}var yf=1;function Bp(i){yf=i}function Ci(i,e,t,n,s,r,o,a,c,u,d,p,v=0){let m=Cf[o],l=1+(1-yf)*.35;a=Math.max(2,Math.round(a*yf));for(let x=0;x<a;x++){let f=c()*2-1,h=c()*2-1,g=c()*2-1;v&&(h=1.2+c());let b=Math.hypot(f,h,g)||1;f/=b,h/=b,g/=b;let y=-g,M=0,S=f;b=Math.hypot(y,S),b<.1&&(y=1,S=0,b=1),y/=b,S/=b;let T=h*S-g*M,_=g*y-f*S,E=f*M-h*y,A=Math.PI+(c()-.5)*.9,P=Math.cos(A),N=Math.sin(A),I=y*P+T*N,R=M*P+_*N,C=S*P+E*N,U=T*P-y*N,k=_*P-M*N,W=E*P-S*N,O=r*(1.3+c()*.45)*l/2,V=t+(c()-.5)*r*.6,H=n+(c()-.5)*r*(v?.15:.5),ie=s+(c()-.5)*r*.6,fe=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([He,J])=>[V+(I*He+U*J)*O,H+(R*He+k*J)*O*(v?.6:1),ie+(C*He+W*J)*O]),et=fe.map(He=>{let J=He[0]-e[0],Y=He[1]-e[1],Me=He[2]-e[2],Le=Math.hypot(J,Y,Me)||1;J/=Le,Y/=Le,Me/=Le;let we=He[0]-t,We=He[1]-n,Ke=He[2]-s;return Le=Math.hypot(we,We,Ke)||1,[J*.7+we/Le*.3,Y*.7+We/Le*.3+(v?.5:0),Me*.7+Ke/Le*.3]}),Re=fe.map(He=>Q0(d,u,.45+.55*Math.max(0,Math.min(1,(He[1]-p[0])/(p[1]-p[0])))));i.leaf.card(fe,et,m,Re)}}function Pf(i,e,t,n="grass",s=1){let r=Cf[n],o=(.42+t()*.38)*s,a=o*1.2,c=t()*Math.PI,u=[0,1,0],d=[u,u,u,u],p=[.6,.64,.58],v=[1,1,1];i.leaf.setM(e);for(let m of[c,c+Math.PI/2]){let l=Math.cos(m)*a/2,x=Math.sin(m)*a/2;i.leaf.card([[-l,-.05,-x],[l,-.05,x],[l,o,x],[-l,o,-x]],d,r,[p,p,v,v])}}function m2(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,be.trunk);for(let u=0;u<3;u++){let d=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(d)*1.1*n,s*.68,Math.sin(d)*1.1*n],.09*n,.05*n,5,be.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",a=[s*.45,s*1.15],c=7+Math.floor(t()*3);for(let u=0;u<c;u++){let d=t()*6.28,p=(.6+t())*1.3*n;Ci(i,r,Math.cos(d)*p,s*(.62+t()*.3),Math.sin(d)*p,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],a)}Ci(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],a)}function g2(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,be.trunkDark);let r=[];for(let u=0;u<5;u++){let d=u/5*6.28+t()*.8,p=(2.2+t()*1.6)*n,v=[Math.cos(d)*p,s*(.62+t()*.18),Math.sin(d)*p];i.color.rod([0,s*.4,0],v,.12*n,.05*n,5,be.trunkDark),r.push(v),i.color.rod(v,[v[0]*1.25,v[1]+.9*n,v[2]*1.25],.05*n,.02*n,4,be.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],a=[s*.5,s*1.1],c=[.72,.62,.72];for(let u of r)for(let d=0;d<2;d++)Ci(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],c,a);Ci(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],c,a)}function v2(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,a=[r*.4,o*.45,.2],c=[r,o*.8,-.2];s.rod([0,0,0],a,.2*n,.15*n,6,be.trunkDark),s.rod(a,c,.15*n,.09*n,6,be.trunkDark),i.leaf.setM(e);let u=[[c[0],c[1]+.3,c[2],1.7],[a[0]+1.4*n,a[1]+.8,.5,1.3],[a[0]-1.3*n,a[1]+1.4,-.4,1.2],[c[0]+.9*n,c[1]-.6,.8,1.1]];for(let[d,p,v,m]of u)s.rod(d>a[0]?a:c,[d,p-.2,v],.07*n,.04*n,4,be.trunkDark),Ci(i,[d,p-.8,v],d,p,v,m*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[p-.7,p+.5],1)}function x2(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,be.trunkDark);let r=[];for(let u=0;u<5;u++){let d=u/5*6.28+t()*.8,p=(1.8+t()*1.4)*n,v=[Math.cos(d)*p,s*(.55+t()*.2),Math.sin(d)*p];i.color.rod([0,s*.38,0],v,.09*n,.04*n,5,be.trunkDark),r.push(v)}i.leaf.setM(e);let o=[0,s*.7,0],a=[s*.45,s*1.1],c=[.62,.52,.56];for(let u of r)Ci(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],c,a);Ci(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],c,a)}function _2(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,be.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],a=[.68,.6,.52];for(let c=0;c<7;c++){let u=s*(.34+c*.09),d=(2.1-c*.24)*n,p=t()*6.28;Ci(i,r,Math.cos(p)*d*.35,u,Math.sin(p)*d*.35,Math.max(.7,d)*1.05,"ginkgo",5,t,[1,1,1],a,o)}}function y2(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,ue("#eeece6"));for(let u=0;u<7;u++){let d=t.range(.4,r*.85),p=d/r;s.cyl(o*p,d,0,.135*n*(1-p*.6),.13*n*(1-p*.6),.05,7,ue("#2b2b30"),!1)}for(let u=0;u<7;u++){let d=r*(.45+t()*.5),p=t()*6.28,v=(.8+t()*1.6)*n,m=d/r;s.rod([o*m,d,0],[o*m+Math.cos(p)*v,d+v*.9,Math.sin(p)*v],.035*n,.012*n,4,ue("#8b7f78"))}let a=r*.7,c=(1.5+t()*.5)*n;i.leaf.setM(e),Ci(i,[o*.7,a,0],o*.7,a,0,c,"twigs",3,t,[1,1,1],[.92,.9,.92],[a-c,a+c])}function M2(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,be.trunkDark),i.foliage.setM(e);let r=ue("#1d3a2c"),o=ue("#eef2f8"),a=ue("#d7e0ec");for(let c=0;c<4;c++){let u=s*(.16+c*.19),d=(1.9-c*.38)*n,p=s*.3;i.foliage.cyl(0,u,0,d,d*.3,p,9,r),i.foliage.cyl(0,u+p*.45,0,d*.72,.05,p*.62,9,c%2?o:a)}}function b2(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,be.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,be.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,be.cedar)}var Op={broad:m2,sakura:g2,pine:v2,cedar:b2,maple:x2,ginkgo:_2,birch:y2,snowcedar:M2},wp={};function zp(i,e){let t=i+e,n=wp[t];if(!n){let s={color:new vn,foliage:new vn,leaf:new vn({uv:!0})};Op[i](s,new st,fn(1e3+e*77+i.length*13),1),n=wp[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays()}}return n}function kp(){for(let i in Op)for(let e=0;e<4;e++)zp(i,e)}function Fn(i,e,t,n,s=1){let r=zp(t,Math.floor(n()*4)),o=e.clone().scale(new z(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o)}var S2=new Set(["win0","win2","win5","win6"]),Es=(i,e,t)=>e<t?i+(e<t*.35&&S2.has(i)?"C":"L"):i;function ao(i,e,t,n,s,r,o){let a=Math.max(1,Math.round(t/3)),c=t/a;for(let u of[-1,1])for(let d=0;d<n.length-1;d++)for(let p=0;p<a;p++){let v=d>0&&r()<.3?Es("win6",r(),o):r()<.2?"win5":"plain";(u>0?Vi:Gi)(i,u*e/2,p*c,(p+1)*c,n[d],n[d+1],v,s)}}function Da(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],be.roof);let o=.5,a=.15;if(i.box(-e/2,n,-.02,e/2,n+o,a,be.parapet),i.box(-e/2,n,t-a,e/2,n+o,t,be.parapet),i.box(-e/2,n,0,-e/2+a,n+o,t,be.parapet),i.box(e/2-a,n,0,e/2,n+o,t,be.parapet),s()<.4){let c=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[d,p]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(c+d-.05,n,u+p-.05,c+d+.05,n+1,u+p+.05,be.metal);i.cyl(c,n+1,u,.85,.85,1.3,12,ue("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,be.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,be.metal)}function If(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,be.black);let r="vs"+Math.floor(s()*10);Gi(i.atlas,e-.065,-.88,-.12,t,n,r),Vi(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,be.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,be.metal)}function is(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,be.concrete,null,{noBottom:!0}),n.type){case"shop":return T2(i,e,t,n);case"machiya":return E2(i,e,t,n);case"apt":return w2(i,e,t,n);case"office":return A2(i,e,t,n);case"konbini":return R2(i,e,t,n);case"house":return P2(i,e,t,n);case"tower":return I2(i,e,t,n)}}var Hp=new Set(["glass","door","cafe","noren"]),Vp={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function T2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,d=i.color,p=3.6,v=3,m=p+(o-1)*v,l=Math.max(1,Math.round(s/3)),x=s/l,f=-s/2,h=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),g=[],b=0;for(let _=0;_<l;_++){let E=Pp(t,"shop_"+h[_%h.length]);g.push(E),!b&&E.startsWith("shop_glass")&&E.length>10&&(b=+E.slice(10))}for(let _=0;_<l;_++){let E=h[_%h.length];Kt(u,f+_*x,f+(_+1)*x,0,p,0,b&&E==="glass"?"shop_glass"+b:g[_]),Hp.has(E)&&ws(i,e,f+(_+.5)*x,1.9,-.8,.7)}let y=t.pick([0,0,1,5,0,1]),M=[0,p];for(let _=1;_<o;_++)M.push(p+_*v);for(let _=1;_<o;_++)for(let E=0;E<l;E++){let A=E%2===1&&t()<.3?5:y;Kt(u,f+E*x,f+(E+1)*x,M[_],M[_+1],0,Es("win"+A,t(),c),a)}ao(u,s,r,M,a,t,c),d.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],En(a,.8)),Da(d,s,r,m,t);let S=s*.94;d.box(-S/2,p-.8,-.3,S/2,p+.08,-.02,be.black);let T="hs"+Math.floor(t()*14);if(Kt(u,-S/2,S/2,p-.8,p+.08,-.305,Vp[b]||T),t()<.55){let _=t.pick(Rp),E=p-.85;d.quad([s/2-.2,E-.35,-1.1],[-s/2+.2,E-.35,-1.1],[-s/2+.2,E,-.02],[s/2-.2,E,-.02],_),d.quad([s/2-.2,E-.6,-1.1],[-s/2+.2,E-.6,-1.1],[-s/2+.2,E-.35,-1.1],[s/2-.2,E-.35,-1.1],En(_,.85))}if(o>=2&&t()<.65){let _=(t()<.5?1:-1)*(s/2-.35);If(i,_,p+.3,Math.min(m-.15,p+2.8),t)}for(let _=1;_<o;_++)if(t()<.4){let E=Math.floor(t()*l),A=f+E*x+.15,P=f+(E+1)*x-.15,N=M[_];d.box(A,N-.12,-.9,P,N,0,be.parapet),Kt(u,A,P,N,N+1,-.9,"rail"),Gi(u,A,-.9,0,N,N+1,"rail"),Vi(u,P,-.9,0,N,N+1,"rail"),t()<.45&&Zp(d,A+.1,P-.1,N+1.95,-.55,t),t()<.6&&_f(i,e,(A+P)/2+.6,N,-.75)}else if(t()<.35){let E=Math.floor(t()*l);_f(i,e,f+(E+.5)*x,M[_]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}d.cyl(f+.12,0,-.08,.05,.05,m,6,be.pipe,!1),d.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,ue("#d9d9d3")),o>=3&&t()<.18&&Gp(i,s,m,r,t)}function E2(i,e,t,n){let{w:s,d:r,floors:o,litP:a}=n,c=i.atlas,u=i.color,d=3.6,p=2.9,v=d+(o-1)*p,m=-s/2,l=Math.max(2,Math.round(s/3)),x=s/l,f=ue("#5c4030"),h=ue("#3a2a20"),g=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),b=[],y=0;for(let C=0;C<l;C++){let U=Pp(t,"shop_"+g[C%g.length]);b.push(U),!y&&U.startsWith("shop_glass")&&U.length>10&&(y=+U.slice(10))}for(let C=0;C<l;C++){let U=g[C%g.length];Kt(c,m+C*x,m+(C+1)*x,0,d,0,y&&U==="glass"?"shop_glass"+y:b[C]),Hp.has(U)&&ws(i,e,m+(C+.5)*x,1.9,-.8,.7)}let M=[0,d];for(let C=1;C<o;C++)M.push(d+C*p);for(let C=1;C<o;C++)for(let U=0;U<l;U++)Kt(c,m+U*x,m+(U+1)*x,M[C],M[C+1],0,Es("win4",t(),a),pn);ao(c,s,r,M,ue("#9a7a62"),t,a),u.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],ue("#6a5240"));for(let C of[m,-m])u.box(C-.09,0,-.12,C+.09,v,.02,h);let{RC:S,k:T}=Wp(i,n,s,r,v,t,!0),_=d+.34,E=1.05,A=.42,P=Math.max(2,Math.round((s+.3)/3));for(let C=0;C<P;C++){let U=m-.15+(s+.3)*C/P,k=m-.15+(s+.3)*(C+1)/P;c.quad([k,_-A,-E],[U,_-A,-E],[U,_,0],[k,_,0],S,T)}u.quad([m-.15,_-A-.03,-E],[-m+.15,_-A-.03,-E],[-m+.15,_-.1,0],[m-.15,_-.1,0],f);let N=s*.9,I=_-A+.02,R=I-.62;u.box(-N/2,R,-E-.02,N/2,I,-E+.07,h),Kt(c,-N/2,N/2,R,I,-E-.025,Vp[y]||"hs"+Math.floor(t()*14));for(let C of[-N/2+.25,N/2-.25])u.box(C-.03,I,-E+.02,C+.03,_-A*.1,-E+.06,h);i.sodium.setM(e);for(let C=0;C<l;C++){let U=m+(C+.5)*x;u.box(U-.008,R-.02,-.62,U+.008,_-A*.6,-.6,h),i.sodium.box(U-.06,R-.16,-.67,U+.06,R-.04,-.55,null)}if(t()<.5){let C=t.pick(Rp),U=R-.12;u.quad([s/2-.2,U-.32,-.95],[-s/2+.2,U-.32,-.95],[-s/2+.2,U,-.02],[s/2-.2,U,-.02],C),u.quad([s/2-.2,U-.55,-.95],[-s/2+.2,U-.55,-.95],[-s/2+.2,U-.32,-.95],[s/2-.2,U-.32,-.95],En(C,.85))}if(o>=2){let C=M[1]+.42,U=-.5,k=m+.12,W=-m-.12;u.box(k,C-.07,U-.04,W,C,0,f);for(let O=0;O<l;O++)Kt(c,m+.12+(s-.24)*O/l,m+.12+(s-.24)*(O+1)/l,C,C+.95,U,"wrail");Gi(c,k,U,0,C,C+.95,"wrail"),Vi(c,W,U,0,C,C+.95,"wrail"),i.leaf.setM(e);for(let O=0;O<l;O++)if(t()<.7){let V=m+(O+.5)*x,H=Math.min(x*.7,1.6);u.box(V-H/2,C+.72,U-.2,V+H/2,C+.92,U-.02,ue("#7a5236"));for(let ie=V-H/2+.2;ie<V+H/2-.1;ie+=.32)Ci(i,[ie,C+.95,U-.11],ie,C+1.05,U-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[C+.9,C+1.3])}}if(o>=2&&t()<.6){let C=(t()<.5?1:-1)*(s/2-.35);If(i,C,d+.6,Math.min(v-.2,d+2.7),t)}for(let C=m+.45+t()*.4;C<-m-.3;C+=.7+t()*1.3)t()<.7&&wf(i,e,t,C,-.4);i.color.setM(e),i.atlas.setM(e)}function Gp(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,a=n*.3;for(let c of[-r*.35,r*.35])i.color.box(c-.06,t,a,c+.06,t+1.2+o,a+.12,be.metal);i.color.box(-r/2,t+1.2,a+.12,r/2,t+1.2+o,a+.3,be.metal),Kt(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,a+.115,"bb"+Math.floor(s()*4))}function w2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,d=i.color,p=3.2,v=2.95,m=p+(o-1)*v,l=Math.max(2,Math.round(s/3.2)),x=s/l,f=-s/2,h=[0,p];for(let y=1;y<o;y++)h.push(p+y*v);for(let y=0;y<l;y++)Kt(u,f+y*x,f+(y+1)*x,0,p,0,y===Math.floor(l/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),y===Math.floor(l/2)?pn:a);let g="bal"+Math.floor(t()*3),b=En(a,.97);for(let y=1;y<o;y++){let M=h[y];for(let S=0;S<l;S++)Kt(u,f+S*x,f+(S+1)*x,M,h[y+1],0,Es("win2",t(),c),a);d.box(f,M-.15,-1.3,-f,M,0,b),d.box(f,M,-1.3,-f,M+1.1,-1.18,b,null,{noBottom:!0});for(let S=0;S<l;S++)Kt(u,f+S*x,f+(S+1)*x,M,M+1.1,-1.305,g,a);for(let S=0;S<=l;S++)d.box(f+S*x-.05,M,-1.18,f+S*x+.05,M+2.4,0,En(a,.92));for(let S=0;S<l;S++){let T=t(),_=f+S*x+.2,E=f+(S+1)*x-.2;T<.34?Zp(d,_,E,M+2.02,-.98,t):T<.46&&N2(d,_+.25,Math.min(E-.25,_+1.9),M+1.1,-1.3,t)}i.atlas.setM(e);for(let S=0;S<l;S++)t()<.55&&(_f(i,e,f+(S+.78)*x,M,-.55),i.atlas.setM(e),i.color.setM(e))}d.box(f,m-.15,-1.3,-f,m,0,b),ao(u,s,r,h,a,t,c),d.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],En(a,.8)),Da(d,s,r,m,t,!0)}function A2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,d=i.color,p=4,v=3.4,m=p+(o-1)*v,l=Math.max(2,Math.round(s/3)),x=s/l,f=-s/2,h=[0,p];for(let g=1;g<o;g++)h.push(p+g*v);for(let g=0;g<l;g++)Kt(u,f+g*x,f+(g+1)*x,0,p,0,g===1?"shop_door":"shop_glass");for(let g=1;g<o;g++)for(let b=0;b<l;b++)Kt(u,f+b*x,f+(b+1)*x,h[g],h[g+1],0,Es("win3",t(),c),a);ao(u,s,r,h,a,t,c),d.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],En(a,.8)),Da(d,s,r,m,t,!0),t()<.6&&If(i,(t()<.5?1:-1)*(s/2-.3),p+.4,Math.min(m-.3,p+4.5),t),t()<.3&&Gp(i,s,m,r,t)}function R2(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,a=i.color,c=4.4,u=-s/2,d=Math.max(3,Math.round(s/3)),p=s/d;for(let v=0;v<d;v++)Kt(o,u+v*p,u+(v+1)*p,0,3.4,0,"shop_konbini"),ws(i,e,u+(v+.5)*p,1.9,-.8,.8);a.box(u,3.4,-.35,-u,c,0,be.white),Kt(o,u,-u,3.4,c,-.355,"konbini_band"),ao(o,s,r,[0,c],ue("#f2f2ee"),t,0),Da(a,s,r,c,t)}var Ap=(i,e)=>e?ue("#7a5a42"):i.tint,xf=null,C2=()=>{if(!xf){let i=Ri("kawara"),e=16/272*(i.u1-i.u0);xf={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return xf};function Wp(i,e,t,n,s,r,o){let a=i.atlas,c=i.color,u=!!e.snow,d=u?.75:.6,p=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),v=u?Ri("white"):C2(),m=u?ue("#f3f5fa"):ue("#c8ccd8"),l=u?ue("#e4e8f0"):ue("#3d4456"),x=u?1:Math.max(2,Math.round((t+2*d)/3)),f=b=>-t/2-d+(t+2*d)*b/x;for(let b=0;b<x;b++){let y=f(b),M=f(b+1);a.quad([M,s-.25,-d],[y,s-.25,-d],[y,s+p,n/2],[M,s+p,n/2],m,v),a.quad([y,s-.25,n+d],[M,s-.25,n+d],[M,s+p,n/2],[y,s+p,n/2],m,v)}let h=(b,y,M,S,T,_)=>{_<0?(c.quad([y,M,T],[b,M,T],[b,S,T],[y,S,T],l),c.quad([b,M,T],[y,M,T],[y,M,T+.08],[b,M,T+.08],l)):(c.quad([b,M,T],[y,M,T],[y,S,T],[b,S,T],l),c.quad([y,M,T],[b,M,T],[b,M,T-.08],[y,M,T-.08],l))};for(let[b,y]of[[-d,0],[n+d,n]])h(-t/2-d,t/2+d,s-.42,s-.22,b<0?b-.04:b+.04,b<0?-1:1),c.quad(b<0?[-t/2-d,s-.26,b]:[t/2+d,s-.26,b],b<0?[t/2+d,s-.26,b]:[-t/2-d,s-.26,b],b<0?[t/2+d,s-.26,y]:[-t/2-d,s-.26,y],b<0?[-t/2-d,s-.26,y]:[t/2+d,s-.26,y],En(Ap(e,o),.62));for(let b of[-1,1]){let y=b*(t/2+d+.02),M=.2,S=[y,s-.25,-d],T=[y,s+p,n/2],_=[y,s-.25,n+d],E=A=>[A[0],A[1]-M,A[2]];b>0?(c.quad(E(T),E(S),S,T,l),c.quad(E(_),E(T),T,_,l)):(c.quad(E(S),E(T),T,S,l),c.quad(E(T),E(_),_,T,l))}let g=Ap(e,o);if(ro(c,[-t/2,s,0],[-t/2,s,n],[-t/2,s+p-.1,n/2],g),ro(c,[t/2,s,n],[t/2,s,0],[t/2,s+p-.1,n/2],g),c.box(-t/2-d,s+p-.05,n/2-.15,t/2+d,s+p+.18,n/2+.15,u?ue("#f6f7fb"):ue("#3d4456")),u){c.box(-t/2-d-.05,s-.42,-d-.1,t/2+d+.05,s-.12,-d+.3,ue("#eef1f7")),c.box(-t/2-d-.05,s-.42,n+d-.3,t/2+d+.05,s-.12,n+d+.1,ue("#eef1f7"));for(let b=-t/2;b<t/2;b+=.45+r()*.5)c.cyl(b,s-.42-.35,-d+.02,0,.04,.35,4,ue("#dfe8f3"),!1)}return{RC:m,k:v,fascia:h,nS:x}}function P2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,d=i.color,p=2.9,v=o*p,m=-s/2,l=t()<.5,x=Math.max(2,Math.round(s/3)),f=s/x,h=[];for(let T=0;T<=o;T++)h.push(T*p);let g=l?pn:a;for(let T=0;T<o;T++)for(let _=0;_<x;_++){let E=l?"win4":"win0";T===0&&_===0?E="shop_house":E=Es(E,t(),c),Kt(u,m+_*f,m+(_+1)*f,h[T],h[T+1],0,E,E==="shop_house"?pn:g)}ao(u,s,r,h,l?ue("#9a7a62"):a,t,c),d.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],En(a,.75));let{RC:b,k:y,fascia:M,nS:S}=Wp(i,n,s,r,v,t,l);if(o>1){let T=p+.05;for(let _=0;_<S;_++){let E=-s/2-.1+(s+.2)*_/S,A=-s/2-.1+(s+.2)*(_+1)/S;u.quad([A,T-.3,-.75],[E,T-.3,-.75],[E,T+.05,0],[A,T+.05,0],b,y)}M(-s/2-.1,s/2+.1,T-.42,T-.28,-.79,-1)}if(n.fence){let T=-n.fence,_=1.2;for(let[E,A]of[[-s/2,-1],[.4,s/2]])d.box(E,0,T-.08,A,_,T+.08,be.concrete),Kt(u,E,A,0,_,T-.085,"block")}}function I2(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,d=i.color,p=3.4,v=o*p,m=Math.max(2,Math.round(s/6)),l=s/m,x=-s/2,f=t()<.5?"win3":"win2",h=[];for(let y=0;y<=o;y++)h.push(y*p);for(let y=0;y<o;y++)for(let M=0;M<m;M++)Kt(u,x+M*l,x+(M+1)*l,h[y],h[y+1],0,Es(f,t(),c),a);let g=Math.max(1,Math.round(r/6)),b=r/g;for(let y of[-1,1])for(let M=0;M<o;M++)for(let S=0;S<g;S++)(y>0?Vi:Gi)(u,y*s/2,S*b,(S+1)*b,h[M],h[M+1],Es(f,t(),c),a);Da(d,s,r,v,t,!0)}function Xp(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ue("#f2f2ee"),ue("#c9cdd2"),ue("#2b2f38"),ue("#b33a32"),ue("#9fc6c0"),ue("#e7d9b4"),ue("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,En(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,ue("#2a3346"));for(let[r,o]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,o-.11,r+.3,.6,o+.11,be.black)}function Lf(i,e,t,n){let s=i.color,r=ue("#8d9096"),o=ue("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let a=-n-.62,c=-n+.62;s.box(-.14,5.08,a,.14,5.56,c,o);let u=t*.141;i.atlas.setM(e),(t>0?Vi:Gi)(i.atlas,u,a,c,5.08,5.56,"signal");let d=t>0?c:a,p=t>0?-1:1;for(let m=0;m<3;m++){let l=d+p*(.2+m*.4);s.box(t>0?.14:-.36,5.47,l-.15,t>0?.36:-.14,5.5,l+.15,o)}let v=d+p*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,v-.11,t>0?.16:-.145,5.43,v+.11,pn)}function qp(i,e,t,n){let s=i.color,r=ue("#3d6ea8"),o=ue("#e8eef2"),a=ue("#c7c5bf"),c=5.35;s.setM(e),s.box(-1.1,c-.65,-t,1.1,c,t,r);for(let u of[-1.1,1])s.box(u,c,-t,u+.1,c+1.1,t,o),s.box(u-.02,c+1.1,-t,u+.12,c+1.18,t,r);i.atlas.setM(e),Gi(i.atlas,-1.105,-2.2,2.2,c-.62,c-.06,n),Vi(i.atlas,1.105,-2.2,2.2,c-.62,c-.06,n),s.setM(e);for(let u of[-1,1]){let d=u*(t-1.65),p=u*(t-.15),v=Math.min(d,p),m=Math.max(d,p);s.box(-.45,.15,v+.3,.45,c-.65,m-.3,r);let l=20,x=(c-.15)/l;for(let f=0;f<l;f++)s.box(1.1+f*.3,.15,v,1.1+(f+1)*.3,c-(f+1)*x+.04,m,a);s.box(1.1,c-.1,v-.05,1.1+l*.3,c-.02,v+.05,r)}}function Yp(i,e,t,n,s,r,o){let a=i.color,c=1.22,u=3.55,d=6.7,p=ue("#c8c5bd"),v=ue("#ebe8de"),m=ue("#7a5a42"),l=ue("#5e4433"),x=ue("#4d5468");a.setM(e),a.box(t,-1.4,u,n,c,d,p,null,{noBottom:!0}),a.box(t,c,u,n,c+.025,u+.32,v),a.box(t,c,u+.6,n,c+.04,u+.9,be.yellow);let f=Math.sign(s-(t+n)/2),h=f>0?n:t,g=h+f*6.2,b=u+.9,y=d-.2,M=(O,V,H)=>[O,V,H];f>0?a.quad(M(g,.1,y),M(g,.1,b),M(h,c,b),M(h,c,y),p):a.quad(M(g,.1,b),M(g,.1,y),M(h,c,y),M(h,c,b),p);for(let O of[b,y]){let V=ue("#9aa0a6");a.rod([g,.1+.9,O],[h,c+.9,O],.03,.03,5,V);for(let H=0;H<=3;H++){let ie=g+(h-g)*H/3,fe=.1+(c-.1)*H/3;a.box(ie-.03,fe,O-.03,ie+.03,fe+.9,O+.03,V)}}i.atlas.setM(e);for(let O=t;O<n-.01;O+=3){let V=Math.min(n,O+3);i.atlas.quad([O,-.6,d+.004],[V,-.6,d+.004],[V,c,d+.004],[O,c,d+.004],ue("#d8d4ca"),Ri("concrete"))}a.setM(e);for(let O=t+.4;O<n;O+=2)a.box(O-.05,c,d-.12,O+.05,c+1,d-.02,ue("#8f949a"));for(let O of[.45,.95])a.box(t,c+O,d-.1,n,c+O+.06,d-.04,ue("#8f949a"));let S=n-t,T=O=>f>0?n-S*O:t+S*O,_=T(.47),E=_-2.3,A=_+2.3,P=u+1.35,N=d-.25;a.box(E,c,N-.12,A,c+2.45,N,m);for(let O of[E,A-.12])a.box(O,c,P+.6,O+.12,c+2.45,N,l);for(let O of[E,A-.12])a.box(O,c,P,O+.12,c+2.45,P+.12,l);a.quad([A+.4,c+2.5,P-.45],[E-.4,c+2.5,P-.45],[E-.4,c+2.85,N+.35],[A+.4,c+2.85,N+.35],x),a.quad([E-.4,c+2.42,P-.45],[A+.4,c+2.42,P-.45],[A+.4,c+2.77,N+.35],[E-.4,c+2.77,N+.35],ue("#3a3f50")),a.box(E+.3,c+.42,N-.55,A-.3,c+.48,N-.15,ue("#8a6a4a"));for(let O of[E+.4,A-.5])a.box(O,c,N-.5,O+.08,c+.42,N-.2,be.metal);i.atlas.setM(e),i.atlas.quad([_-1.1,c+1.55,N+.005],[_+1.1,c+1.55,N+.005],[_+1.1,c+2.03,N+.005],[_-1.1,c+2.03,N+.005],pn,Ri("ekiplate"+r));let I=T(.2),R=u+1.6,C=1.25,U=c+1.25,k=U+.95;a.setM(e);for(let O of[I-C+.12,I+C-.12])a.cyl(O,c,R,.05,.05,k-c+.05,8,ue("#6b7078"));a.box(I-C,U-.03,R-.03,I+C,k+.03,R+.03,ue("#3a3d42")),i.atlas.setM(e),i.atlas.quad([I-C,U,R+.035],[I+C,U,R+.035],[I+C,k,R+.035],[I-C,k,R+.035],pn,Ri("ekimei"+r)),i.atlas.quad([I+C,U,R-.035],[I-C,U,R-.035],[I-C,k,R-.035],[I+C,k,R-.035],pn,Ri("ekimei"+r)),a.setM(e);let W=_-f*4.2;a.box(W-.9,c+.42,d-1.25,W+.9,c+.47,d-.85,ue("#3b6ea8")),a.box(W-.9,c+.47,d-.88,W+.9,c+.9,d-.83,ue("#3b6ea8"));for(let O of[W-.75,W+.7])a.box(O,c,d-1.2,O+.06,c+.42,d-.9,be.metal);for(let O=t+3;O<n-1;O+=9)La(i,fu(e,O,c,d-.45))}var L2=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(ue),D2=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(ue);function Zp(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,be.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let a=.28+r()*.34,c=.36+r()*.42,u=r.pick(L2),d=s+(r()-.5)*.06;i.quad([o+a,n-c,d],[o,n-c,d],[o,n-.02,d],[o+a,n-.02,d],u),i.quad([o,n-c,d+.01],[o+a,n-c,d+.01],[o+a,n-.02,d+.01],[o,n-.02,d+.01],En(u,.85)),r()<.4&&i.box(o+a*.45,n-.02,d-.02,o+a*.55,n+.06,d+.02,ue("#d8d8d0")),o+=a+.06+r()*.22}}function N2(i,e,t,n,s,r){let o=r.pick(D2),a=.11;i.box(e,n-.02,s-a,t,n+.09,s+.22,o),i.box(e,n-.72,s-a,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-a-.004,t-.08,n-.42,s-a+.01,En(o,.86))}function $p(i,e){let t=i.color,n=ue("#a19f97"),s=ue("#6b4a35"),r=ue("#4f4a44"),o=ue("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,ue("#8d8b84"));for(let a of[-.52,.48])for(let c of[-.36,.32])t.box(a,.32,c,a+.05,1.5,c+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,En(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let a of[-.32,.3])t.cyl(a,.32,-.18,.05,.06,.07,8,ue("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,ue("#5b8d3d"))}function Jp(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?be.black:be.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,be.black),t.box(-.5,2.55,-.06,.5,2.95,.02,be.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,be.black);t.box(-.78,-.9,-.34,.3,0,.34,be.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,ue("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,be.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new st().multiplyMatrices(e,new st().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?be.black:be.yellow)}t.setM(e),i.atlas.setM(e),Kt(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function Kp(i,e){let t=i.color;t.setM(e),t.box(-.4,0,-.4,.4,.25,.4,be.stone),t.cyl(0,.25,0,.14,.12,.95,8,be.stone),t.box(-.32,1.2,-.32,.32,1.3,.32,be.stone),t.box(-.26,1.3,-.26,.26,1.72,.26,En(be.stone,1.05)),t.cyl(0,1.72,0,.55,.08,.38,6,En(be.stone,.92)),i.lamp.setM(e),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,pn),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,pn)}function Df(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,be.vermilion),s.cyl(0,0,r,.38,.38,.5,12,be.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,be.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,be.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,be.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,be.vermilion)}function jp(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,ue("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,ue("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,ue("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,ue("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,be.metal),n.box(1.1,0,.3,1.2,.42,.55,be.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,be.metal),i.atlas.setM(e),Gi(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Vi(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function Qp(i,e,t,n=1){let s=i.color;s.setM(e);let r=En(be.concrete,.85+t()*.15),o=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],a=.55*n;for(let c of o)s.rod([0,a,0],[c[0]*.95*n,a+c[1]*.95*n,c[2]*.95*n],.42*n,.26*n,7,r)}function em(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,ue("#8f8a80"),ue("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,be.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,be.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,be.black),t.cyl(0,18.6,0,1,.25,1.2,12,be.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,pn)}function tm(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ue("#f4f4f0"),ue("#3b6ea5"),ue("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),ro(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),ro(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,be.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,be.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,ue("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,be.metal)}function nm(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,be.stone),n.box(-.55,.5,.9,.55,1.5,1.8,ue("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],ue("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],ue("#4d5468")),Df(i,fu(e,0,0,-.3,Math.PI/2),.75,2.2)}var Zt=60,Nf=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],im=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],sm=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Uf=32,Na=[.025,.026,.032],rm=[.05,.05,.065],ss=(i,e)=>(i%e+e)%e,Rs=(i,e)=>{let t=eo(i);return!!t&&Math.abs(i-t.s)<e},Ff=(i,e)=>Math.abs(i-Math.round(i/150)*150)<e,Pi=(i,e)=>{let t=pi(i);return!!t&&Math.abs(i-t.s)<e},ri=(i,e)=>{let t=Hi(i);return!!t&&Math.abs(i-t.s)<e},Bf=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=n(r,o);this.P.push(a[0],a[1],a[2]),this.N.push(a[3],a[4],a[5]),this.SU.push(a[6],a[7]),this.ZW.push(a[8],a[9],a[10],a[11]),this.RK.push(a[12],a[13]),this.RV.push(a[14]||0),this.ZS.push(a[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let a=s+r*t+o,c=a+1,u=a+t,d=u+1;this.I.push(a,c,u,c,d,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,a=new Array(e*o);for(let u=0;u<e;u++)for(let d=0;d<o;d++)a[u*o+d]=n(u,d-s);let c=(u,d)=>a[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,d))];for(let u=0;u<e;u++)for(let d=s;d<s+t;d++){let p=c(u,d-1),v=c(u,d+1),m=c(u-1,d),l=c(u+1,d),x=a[u*o+d],f=v[0]-p[0],h=v[1]-p[1],g=v[2]-p[2],b=l[0]-m[0],y=l[1]-m[1],M=l[2]-m[2],S=h*M-g*y,T=g*b-f*M,_=f*y-h*b;T<0&&(S=-S,T=-T,_=-_);let E=Math.hypot(S,T,_)||1;x[3]=S/E,x[4]=T/E,x[5]=_/E}this.grid(e,t,(u,d)=>a[u*o+d+s])}build(){let e=new yt;return e.setAttribute("position",new Je(this.P,3)),e.setAttribute("normal",new Je(this.N,3)),e.setAttribute("su",new Je(this.SU,2)),e.setAttribute("zw",new Je(this.ZW,4)),e.setAttribute("rk",new Je(this.RK,2)),e.setAttribute("rv",new Je(this.RV,1)),e.setAttribute("zs",new Je(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},du=class{constructor(e,t,n,s,r){this.path=t,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new Jt,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Zt),s=Math.floor((e+this.ahead)/Zt);for(let[o,a]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(a),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let a=o.pending.shift();a&&o.group.add(a),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let a=-1;for(let c=Math.max(0,n);c<=s;c++)if(!this.chunks.has(c)){a=c;break}if(a<0)return 0;a*Zt-e<320&&(t=Math.max(t,12)),this.job={c:a,it:this.gen(a)}}let o=this.job.it.next();if(o.done){let a=o.value;a.pending=a.group.children.slice(),a.group.clear(),this.chunks.set(this.job.c,a),this.group.add(a.group),this.reveal.push(a),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let a=o*Zt-e,c=r.group.children;for(let u=0;u<c.length;u++){let d=c[u],p=d.userData.detail;p&&(d.visible=p==="leaf"?a<s:a<t||n&&p==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Zt,s=n+Zt,r=t.at(n),o=r.x,a=r.z,c=fn(Math.floor(si(e,777)*4294967295)),u={atlas:new vn({uv:!0,ao:!0,lit:!0}),color:new vn({ao:!0}),foliage:new vn,leaf:new vn({uv:!0}),lamp:new vn({color:!1}),sig:new vn({color:!1}),sodium:new vn({color:!1}),decal:new vn({uv:!0}),pool:new vn({uv:!0,color:!1})},d=new Bf,p=[],v=[];u.lamps=[];let m={},l={},x=(A,P)=>{t.at(A,l);let N=In(A,"rw");return l.y+no(A,P,l.y,N)},f=A=>{let P=Ut(A);return[P.city,P.sakura,P.coast,P.country,P.snow]},h=(A,P,N)=>(t.at(A,m),[m.x+m.rx*P-o,N,m.z+m.rz*P-a]),g=(A,P,N,I=0,R=!0)=>{t.at(A,m);let C=m.h-Math.PI/2+(R&&P<0?Math.PI:0)+I,U=new st().makeRotationY(C);return U.setPosition(m.x+m.rx*P-o,N,m.z+m.rz*P-a),U.groundY=N,U},b=(A,P,N=0,I=0,R=!0)=>{let C=x(A,P),U=g(A,P,C+N,I,R);return U.groundY=C,U},y=A=>t.at(A,l).y,M=A=>In(A,"rw"),S=A=>{let P=Ut(A);return P.city+P.sakura>.5?P.city>=P.sakura?3:2.6:0};{let A=Hi(n+Zt/2),P=!!A&&A.s>n-40&&A.s<s+40,N=P?61:21,I=M(n+Zt/2),R=(()=>{let ie=[0,...im].map(fe=>fe);return sm.forEach(fe=>ie.push(fe-I)),ie})(),C=[...R.slice().reverse().map(H=>-H),...R],U=C.length,k=Array.from({length:N},(H,ie)=>n+ie/(N-1)*Zt);{let H=pi(n+Zt/2);if(H)for(let ie of[H.s-sn,H.s+sn])ie>n+.1&&ie<s-.1&&k.push(ie-.03,ie+.03)}k.sort((H,ie)=>H-ie);let W=U/2,O=k.map(H=>(t.at(H,m),{s:H,f:{...m},rw:M(H),w:f(H),rb:P?rp(H):0})),V=Math.round(W/2);for(let[H,ie,fe,et]of[[0,V,0,1],[V-1,W,1,0],[W,W+V+1,0,1],[W+V,U,1,0]])d.gridN(O.length,ie-H,(Re,He)=>{let J=O[Re],Y=J.f,Me=H+He,Le=C[Me],we=Le<0||Le===0&&Me<W?Le-J.rw:Le+J.rw,We=Y.y+no(J.s,we,Y.y,J.rw),Ke=Math.abs(we)>J.rw+.98?Math.min(1,Qc/.5):0;return[Y.x+Y.rx*we-o,We,Y.z+Y.rz*we-a,0,1,0,ss(J.s,Ts),we,J.w[0],J.w[1],J.w[2],J.w[3],J.rw,0,J.rb>0?J.rb:-Ke,J.w[4]]},fe,et),yield}yield,d.grid(31,2,(P,N)=>{let I=n+P/30*Zt,R=M(I),C=N?R:-R;t.at(I,m);let U=m.y,k=(y(I+1)-y(I-1))/2,W=-k*m.fx,O=1,V=-k*m.fz,H=Math.hypot(W,O,V),ie=f(I);return[m.x+m.rx*C-o,U,m.z+m.rz*C-a,W/H,O/H,V/H,ss(I,Ts),C,ie[0],ie[1],ie[2],ie[3],R,1,0,ie[4]]});{let A=[];for(let I=0;I<=30;I++){let R=n+I/30*Zt;A.push({s:R,sw:S(R)})}let P=[],N=null;for(let I of A)I.sw>0?(N||(N=[],P.push(N)),N.push(I)):N=null;for(let I of P)if(!(I.length<2))for(let R of[-1,1])d.grid(I.length,2,(C,U)=>{let{s:k,sw:W}=I[C],O=M(k),V=R*(U===(R>0?0:1)?O:O+W);t.at(k,m);let H=f(k);return[m.x+m.rx*V-o,m.y+.15,m.z+m.rz*V-a,0,1,0,ss(k,Ts),V,H[0],H[1],H[2],H[3],O,2,0,H[4]]}),d.grid(I.length,2,(C,U)=>{let{s:k}=I[C],W=M(k),O=R*W,V=R>0?U:1-U;t.at(k,m);let H=f(k);return[m.x+m.rx*O-o,m.y+(V?.15:0),m.z+m.rz*O-a,-R*m.rx,0,-R*m.rz,ss(k,Ts),O,H[0],H[1],H[2],H[3],W,3,0,H[4]]})}yield,yield*this.placePoles(e,n,s,c,u,g,x,h,y,M);{let A=Math.ceil((n-js)/Ks),P=Qr(A);P<s&&Ra(P)&&(yield*this.placeCrossing(u,d,P,g,y,M,x,S,o,a));let N=Math.ceil((n-to)/Qs),I=hf(N);I<s&&ff(I)&&(yield*this.placeRiver(u,d,I,g,y,M,x,S,o,a,c,v));let R=pi(n+Zt/2);R&&R.s+tn>n&&R.s-tn<s&&(yield*this.placeTunnel(u,d,R,n,s,g,b,x,M,o,a,c))}yield;for(let A=n;A<s;A+=4){let P=en(A);(P==="coast"&&Ut(A).coast>.45||P==="mountain"&&Ut(A).mountain>.45)&&!Pi(A+2,tn+4)&&this.guardrail(u,A,Math.min(A+4,s),h,y,M)}yield*this.placeCity(u,c,n,s,g,b,y,M,S,x,d,o,a),yield*this.placeSakura(u,c,n,s,g,b,y,M,x),this.placeCoast(u,c,n,s,g,b,y,M,x,p,h),yield,yield*this.placeCountry(u,c,n,s,g,b,y,M,x),yield*this.placeMountain(u,c,n,s,g,b,y,M,x),yield*this.placeSnow(u,c,n,s,g,b,y,M,x),yield*this.placeVerge(u,c,n,s,g,x,M),yield;let T=new Jt,_=(A,P,N,I,R=0,C)=>{if(!A)return null;let U=new mt(A,P);return U.castShadow=N,U.receiveShadow=I,U.renderOrder=R,C&&(U.userData.detail=C),T.add(U),U},E=new Set;for(let A of[n,n+20,n+40,s]){let P=jr(A);E.add(P.a),P.t>0&&E.add(P.b)}_(d.build(),Ia([...E]),!1,!0),yield,_(u.atlas.build(),this.M.atlas,!0,!0),yield;{let A=_(u.color.build(),this.M.color,!0,!0);A&&(A.customDepthMaterial=ru)}if(yield,_(u.foliage.build(),this.M.foliage,!0,!0),_(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),yield,_(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),_(u.sig.build(),this.M.sig,!1,!1,0,"small"),_(u.sodium.build(),this.M.sodium,!1,!1),_(u.decal.build(),this.M.decal,!1,!0,1,"small"),_(u.pool.build(),this.M.pool,!1,!1,2,"light"),p.length){let A=new yt,P=[],N=[],I=[];p.forEach((R,C)=>{for(let U of R)P.push(U[0],U[1],U[2]),N.push(U[3],U[4]);if(C>0){let U=(C-1)*2;I.push(U,U+2,U+1,U+1,U+2,U+3)}}),A.setAttribute("position",new Je(P,3)),A.setAttribute("su",new Je(N,2)),A.setIndex(I),A.computeBoundingSphere(),_(A,this.foamMat,!1,!1,1)}for(let A of v)_(A,this.riverMat,!1,!0);return T.position.set(o-this.origin.x,0,a-this.origin.z),{group:T,ox:o,oz:a,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*Uf+6,n=en(t);if(n==="sakura"||Rs(t,6)||ri(t,34)||Pi(t,tn+12))return null;let s=In(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,a,c,u,d){let p=Math.ceil((t-6)/Uf),v=Math.floor((n-6-.001)/Uf);for(let m=p;m<=v;m++){let l=this.poleSpec(m);if(!l)continue;let x=l.z==="city"?u(l.s)+.15:a(l.s,l.u),f=o(l.s,l.u,x),h=fn(Math.floor(si(m,31)*4294967295)),g=Sf(r,f,h,{trans:h()<.45});l.z==="city"&&m%2===0&&Lp(r,f,-.11),m%2&&(yield);let b=this.poleSpec(m+1);if(b){let y=b.z==="city"?u(b.s)+.15:a(b.s,b.u),M=Ip(o(b.s,b.u,y));r.color.setM(new st);let S=[];for(let T=0;T<g.length;T++){let _=g[T],E=M[T],A=.35+h()*.4+(T>=7?.3:0);S.push(A),r.color.wire([_.x,_.y,_.z],[E.x,E.y,E.z],A,T>=7?.022:.015,Na,10)}if(l.z!=="coast"&&h()<.38){let T=Math.floor(h()*4),_=g[T],E=M[T],A=1+Math.floor(h()*4),P=.18+h()*.5;for(let N=0;N<A;N++){let I=Math.min(.92,P+N*(.018+h()*.025)),R=_.x+(E.x-_.x)*I,C=_.z+(E.z-_.z)*I,U=_.y+(E.y-_.y)*I-S[T]*4*I*(1-I);r.color.box(R-.07,U+.015,C-.07,R+.07,U+.19,C+.07,rm),r.color.box(R-.045,U+.19,C-.045,R+.045,U+.27,C+.045,rm)}}}if(l.z==="city"){r.color.setM(new st);let y=1+Math.floor(h()*3);for(let M=0;M<y;M++){let S=g[7+M%2],T=(h()-.5)*14,_=d(l.s+T),E=h()<.55,A=E?-(_+3.15):_+3.15,P=c(l.s+T,A,u(l.s+T)+5.2+h()*2.5);r.color.wire([S.x,S.y,S.z],P,.25+h()*.4,.012,Na,8)}}}}*intersection(e,t,n,s,r,o,a,c,u,d,p){let v=this.path.at(n,{}),m=o(n),l=a(n),x=c(n)||3,f=n-.5,h=Ut(n),g=[h.city,h.sakura,h.coast,h.country],b=(M,S,T)=>[v.x+v.fx*(M-.5)+v.rx*S-d,T,v.z+v.fz*(M-.5)+v.rz*S-p],y=l+x+.15;for(let M of[-1,1]){let S=M*(l+x),T=M*80;u.grid(21,2,(P,N)=>{let I=S+(T-S)*P/20,R=(N?-3:3)*M,C=b(R,I,m+.165);return[C[0],C[1],C[2],0,1,0,R*M,I,g[0],g[1],g[2],g[3],l,10]});{let P=M*(l+x+3.2),N=-M*1.35,I=1.15,R=.42,C=(U,k)=>b(N+M*U,P-M*k,m+.18);e.decal.setM(new st),e.decal.quad(C(-I,-R),C(I,-R),C(I,R),C(-I,R),[1,1,1],oo("tomare"))}for(let P of[-1,1]){let N=y+15+t()*3;for(;N<52;){let I=t.range(5.5,8.5),R=M*(N+I/2),C=t(),U=r(f+P*3.3,R,m+.14,P>0?Math.PI/2:-Math.PI/2,!1);is(e,U,t,{type:C<.5?"house":"shop",w:I,d:t.range(7,10),floors:C<.5?2:t.int(2,3),tint:t.pick(ns),litP:.45,fence:0}),N+=I+t.range(.2,1.2),yield}yield}let _=[30,54].map(P=>r(f+2.8,M*P,m+.15,-Math.PI/2,!1)),E=fn(Math.floor(si(s,M>0?71:73)*4294967295)),A=_.map(P=>Sf(e,P,E,{trans:E()<.4}));e.color.setM(new st);for(let P=0;P<7;P++){let N=A[0][P],I=A[1][P];e.color.wire([N.x,N.y,N.z],[I.x,I.y,I.z],.3+E()*.4,.014,Na,10)}}Lf(e,r(n-9,-(l+.55),m+.15,0,!0),1,l+.55-1.6),Lf(e,r(n+8,l+.55,m+.15,0,!0),1,l+.55-1.6),s%3===1&&qp(e,r(n+15,0,m,0,!1),l+x+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(e,t,n,s,r,o,a,c,u,d){let p=this.path.at(n,{}),v=p.y,m=o(n),l=c(n),x=m+l+.2,f=150,h=v+.18,g=Ut(n),b=[g.city,g.sakura,g.coast,g.country],y=(C,U,k)=>[p.x+p.fx*C+p.rx*U-u,k,p.z+p.fz*C+p.rz*U-d],M=[7.6,4.7,-4.7,-7.6];for(let[C,U]of[[-f,-x],[x,f]])t.grid(25,M.length,(W,O)=>{let V=C+(U-C)*W/24,H=M[O],fe=Math.abs(H)<5?h:Math.min(h-.05,a(n+H,V)-.03),et=y(H,V,fe);return[et[0],et[1],et[2],0,1,0,H,V,b[0],b[1],b[2],b[3],m,5]});let S=(C,U,k)=>t.grid(2,2,(W,O)=>{let V=W?U:C,H=O?-3.3:3.3,ie=y(H,V,k);return[ie[0],ie[1],ie[2],0,1,0,H,V,b[0],b[1],b[2],b[3],m,6]});S(-m,m,v+.03),l>0&&(S(-x,-m,v+.165),S(m,x,v+.165));let T=(C,U,k,W)=>t.grid(2,2,(O,V)=>{let H=O?W:k,ie=V?U:C,fe=y(ie,H,v+.025);return[fe[0],fe[1],fe[2],0,1,0,ie,H,b[0],b[1],b[2],b[3],m,7]});T(-7.15,-7.6,-m+.3,-.12),T(7.6,7.15,.12,m-.3),yield;let _=s(n,0,v,-Math.PI/2,!1),E=e.color;E.setM(_);let A=[.42,.4,.38],P=[.3,.29,.28],N=[.55,.57,.6];for(let C of[-2,2])for(let U of[-.5335,.5335]){let k=-(C+U);for(let[W,O]of[[-f,-x],[x,f]])E.box(W,.26,k-.035,O,.34,k+.035,A);E.box(-x,0,k-.035,x,.04,k+.035,P)}let I=[-146,-104,-64,-26,26,64,104,146];for(let C of I){for(let U of[-4.95,4.95])E.box(C-.12,.18,U-.12,C+.12,7.4,U+.12,N);E.box(C-.1,6.95,-5.15,C+.1,7.2,5.15,N);for(let U of[-2,2])E.box(C-.04,6.3,-U-.04,C+.04,6.95,-U+.04,N)}for(let C of[-2,2])for(let U=0;U<I.length-1;U++)E.wire([I[U],5.35,-C],[I[U+1],5.35,-C],.05,.011,Na,6),E.wire([I[U],6.4,-C],[I[U+1],6.4,-C],.45,.011,Na,8);yield;let R=Math.round((n-js)/Ks);if(g.country>.9&&si(R,17)<.7){let C=si(R,19)<.5?-1:1,U=C>0?m+9:-(m+9+46),k=C>0?m+9+46:-(m+9);Yp(e,_,U,k,C*(m+9),Math.abs(R)%4,fn(Math.floor(si(R,23)*4294967295))),E.setM(_)}yield;for(let C of ou(this.path,n)){let U=new st().makeRotationY(C.yaw);U.setPosition(C.x-u,C.y,C.z-d),Jp(e,U)}As(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(l>0?1:0)),"sign_xing",1,2.2,.85),As(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(l>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,a,c,u,d,p,v){let m=this.path.at(n,{}),l=m.y,x=o(n),f=c(n),h=Ut(n),g=[h.city,h.sakura,h.coast,h.country],b=h.sakura>.5,y=222,M=x+f+.5,S=l-Ca,T=(R,C,U)=>[m.x+m.fx*R+m.rx*C-u,U,m.z+m.fz*R+m.rz*C-d];{let R=[],C=[],U=[];for(let O=0;O<=74;O++){let V=-y+2*y*O/74;for(let H of[14.3,-14.3]){let ie=T(H,V,S);R.push(ie[0],ie[1],ie[2]),C.push(H,V)}if(O>0){let H=(O-1)*2;U.push(H,H+1,H+2,H+1,H+3,H+2)}}let W=new yt;W.setAttribute("position",new Je(R,3)),W.setAttribute("su",new Je(C,2)),W.setIndex(U),W.computeBoundingSphere(),v.push(W)}for(let[R,C]of[[28.9,25.7],[-25.7,-28.9]])for(let[U,k]of[[-y,-(x+3.4)],[x+3.4,y]])t.grid(41,2,(W,O)=>{let V=U+(k-U)*W/40,H=O?C:R,ie=T(H,V,l+.38);return[ie[0],ie[1],ie[2],0,1,0,H,V,g[0],g[1],g[2],g[3],x,9,1]});yield;let _=s(n,0,l,0,!1),E=e.color,A=[.74,.73,.7],P=b?[.78,.2,.15]:[.55,.72,.64];E.setM(_),E.box(-24.5,-1,-M,24.5,-.03,M,A,null,{noBottom:!1});for(let R of[-1,1])E.box(-24.5,-1.3,R>0?M-.35:-M,24.5,-.95,R>0?M:-M+.35,[.62,.61,.58]);for(let R of[-8,8])E.box(R-.7,-Ca-1.4,-M+.6,R+.7,-1,M-.6,A);for(let R of[-25.7,25.7])E.box(R-1.2,-Ca+.4,-M-.4,R+1.2,-.05,M+.4,A);for(let R of[-24.5,24.5])E.box(R-.16,.004,-x,R+.16,.016,x,[.33,.32,.31]),E.box(R-.02,.016,-x,R+.02,.02,x,[.2,.19,.19]);let N=f>0?.15:0;for(let R of[-1,1]){let C=R*(M-.14);for(let U=-24;U<=24.01;U+=2)E.box(U-.06,N,C-.06,U+.06,N+1,C+.06,P);E.box(-24,N+.95,C-.08,24,N+1.08,C+.08,P),E.box(-24,N+.48,C-.03,24,N+.54,C+.03,P),E.box(-24,N+.06,C-.03,24,N+.12,C+.03,P)}let I="bridge"+Math.abs(Math.round(n/Qs))%4;for(let R of[-25,25])for(let C of[-1,1]){let U=C*(M-.1),k=[.7,.69,.65];E.box(R-.32,N,U-.32,R+.32,N+1.45,U+.32,k),E.box(R-.38,N+1.45,U-.38,R+.38,N+1.58,U+.38,[.62,.61,.57]),e.atlas.setM(_);let W=(R<0?-1:1)*.325,O=I;R<0?e.atlas.quad([R-.325,N+.3,U-.22],[R-.325,N+.3,U+.22],[R-.325,N+1.3,U+.22],[R-.325,N+1.3,U-.22],[1,1,1],oo(O)):e.atlas.quad([R+.325,N+.3,U+.22],[R+.325,N+.3,U-.22],[R+.325,N+1.3,U-.22],[R+.325,N+1.3,U+.22],[1,1,1],oo(O)),E.setM(_)}La(e,s(n-14,-(M-.45),l+N,0,!0)),La(e,s(n+14,M-.45,l+N,0,!0)),yield;{e.atlas.setM(new st);let R=oo("gogan"),C=2.4,U=150;for(let k of[-1,1])for(let W=-U;W<U-.01;W+=C){let O=W+C,V=T(k*13.9,W,S-.12),H=T(k*13.9,O,S-.12),ie=T(k*16.05,O,S+.72),fe=T(k*16.05,W,S+.72),et=(H[1]-V[1])*(fe[2]-V[2])-(H[2]-V[2])*(fe[1]-V[1]),Re=(H[0]-V[0])*(fe[1]-V[1])-(H[1]-V[1])*(fe[0]-V[0]),He=T(0,(W+O)/2,S),J=et*(He[0]-V[0])+Re*(He[2]-V[2])>0,Y={u0:R.u0,u1:R.u1,v0:R.v0,v1:R.v1};J?e.atlas.quad(V,H,ie,fe,[1,1,1],Y):e.atlas.quad(H,V,fe,ie,[1,1,1],{u0:R.u1,u1:R.u0,v0:R.v0,v1:R.v1})}for(let k of[-1,1])for(let W of[-1,1])for(let O=14+p()*3;O<125;O+=p.range(2.4,5)){if(p()<.35)continue;let V=k*(16.2+p()*1.1),H=W*O,ie=1+(p()<.4?1:0);for(let fe=0;fe<ie;fe++){let et=T(V+k*p()*.6,H+(p()-.5)*.9,S+.7),Re=new st().makeRotationY(p()*6.28);Re.setPosition(et[0],et[1],et[2]),Pf(e,Re,p,"grass",p.range(1.9,2.8))}}}yield;for(let R of[-18,18])for(let C of[-1,1]){yield;for(let U=11+p()*4;U<(b?125:170);U+=b?p.range(8.5,11):p.range(18,34)){let k=n+R+(p()-.5)*1.5,W=C*U;Fn(e,s(k,W,a(k,W),p()*6,!1),b?"sakura":"broad",p,b?p.range(1,1.25):p.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,a,c,u,d,p,v){let m=this.path.at(n.s,{}),l=m.y,x=u(n.s),f=x+1.4,h=Ut(n.s),g=[h.city,h.sakura,h.coast,h.country],b=o(n.s,0,l,0,!1),y=e.color,M=Math.max(s,n.s-sn)-n.s,S=Math.min(r,n.s+sn)-n.s;if(S>M+.01){let O=Math.max(2,Math.ceil((S-M)/3)+1),V=[-(x+1.5),-x,-x*.5,0,x*.5,x,x+1.5];t.gridN(O,V.length,(Y,Me)=>{let Le=M+(S-M)*Y/(O-1),we=n.s+Le,We=V[Me],Ke=l+tu(Le,We);return[m.x+m.fx*Le+m.rx*We-d,Ke,m.z+m.fz*Le+m.rz*We-p,0,1,0,ss(we,Ts),We,g[0],g[1],g[2],g[3],x,0,-1]});let H=[[-x,0],[-x,.2],[-f,.2],[-f,3.2]];for(let Y=1;Y<12;Y++){let Me=Math.PI*(1-Y/12);H.push([f*Math.cos(Me),3.2+3*Math.sin(Me)])}H.push([f,3.2],[f,.2],[x,.2],[x,0]);let ie=[.86,.82,.72],fe=[.44,.45,.47],et=[.62,.61,.58],Re=[];for(let Y=M;Y<S-.01;Y+=6)Re.push(Y);Re.push(S),y.setM(b);for(let Y=0;Y<Re.length-1;Y++)for(let Me=0;Me<H.length-1;Me++){let[Le,we]=H[Me],[We,Ke]=H[Me+1],Be=Math.max(we,Ke)<=.21?et:Math.abs(Le)>f-.01&&Math.abs(We)>f-.01?ie:fe;y.quad([Re[Y],we,Le],[Re[Y+1],we,Le],[Re[Y+1],Ke,We],[Re[Y],Ke,We],Be)}e.sodium.setM(b),e.sig.setM(b);let He=f*Math.cos(Math.PI/6)-.12,J=3.2+3*Math.sin(Math.PI/6)-.08;for(let Y=Math.ceil((M+sn-3)/6)*6+3-sn;Y<S;Y+=6)for(let Me of[-1,1])e.sodium.box(Y-.45,J-.07,Me*He-.13,Y+.45,J+.07,Me*He+.13,null),ws(e,b,Y,J-.1,Me*He,1);for(let Y=Math.ceil((M+sn)/24)*24-sn;Y<S;Y+=24)e.sig.box(Y-.3,.95,-f+.01,Y+.3,1.2,-f+.06,null);for(let Y=Math.ceil((M+sn-30)/60)*60+30-sn;Y<S;Y+=60)for(let Me of[-1.15,1.15])y.box(Y-1.1,5.2,Me-.36,Y+1.1,5.78,Me+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),y.box(Y-.08,5.78,Me-.05,Y+.08,6.15,Me+.05,[.4,.4,.42]);yield}let T=(O,V)=>{let H=Math.sin(O*12.9898+V*78.233+n.k*37.719)*43758.5453;return H-Math.floor(H)},_=(O,V,H)=>[O[0]+(V[0]-O[0])*H,O[1]+(V[1]-O[1])*H,O[2]+(V[2]-O[2])*H],E=[.5,.5,.47],A=[.55,.53,.47],P=[.6,.6,.57],N=[.58,.58,.55],I=[.42,.42,.4],R=(O,V)=>{let H=T(O,V);return C?_([.26,.29,.08],[.42,.3,.09],H):_([.22,.29,.08],[.36,.36,.12],H)},C=h.mountain>.5,U=f+2.6,k=2.6;for(let O of[-1,1]){let V=n.s+O*sn,H=O*(sn+.08);if(V<s||V>=r)continue;let ie=[];for(let j of im)j>=1.44&&ie.push(x+j,-(x+j));for(let j of sm)j>x+3.5&&j<x+21&&ie.push(j,-j);for(let j=0;j<=24;j++)ie.push(-f+2*f*j/24);ie.push(-f-.01,f+.01,-U,U),ie.sort((j,D)=>j-D);let fe=j=>3.2+3*Math.sqrt(Math.max(0,1-(j/f)**2)),et=j=>Math.max(c(V-O*.03,j)-l,tu(O*(sn-.03),j)),Re=j=>Math.abs(j)<=f+1e-6?fe(j):c(V+O*.03,j)-l,He=8.4;for(let j of ie)Math.abs(j)<=U&&(He=Math.min(He,et(j)-.4));let J=He>6.6;y.setM(b);let Y=O,Me=(j,D,w,G,q,B,le,_e)=>{let oe=[H,w,j],ce=[H,G,D],de=[H,B,D],Ce=[H,q,j],ve=O<0?[oe,ce,de,Ce]:[ce,oe,Ce,de],xe=O<0?[le,le,_e,_e]:[le,le,_e,_e];for(let Ue of[0,1,2,0,2,3])y.vtx(ve[Ue][0],ve[Ue][1],ve[Ue][2],Y,0,0,0,0,xe[Ue])},Le=(j,D,w)=>j+(D-j)*w;for(let j=0;j<ie.length-1;j++){let D=ie[j],w=ie[j+1];if(w-D<1e-4)continue;let G=et(D),q=et(w),B=Re(D),le=Re(w);if(G-B<.01&&q-le<.01)continue;let _e=(D+w)/2,oe=J&&Math.abs(_e)<U,ce=B,de=le;if(oe){let Ue=_(E,[.46,.46,.44],T(Math.floor(_e/2.4),3.1)),je=.8+2.6*T(Math.floor(_e/.8),7.7),tt=_(Ue,[.27,.27,.26],.35+.3*T(Math.floor(_e/.8),9.9)),X=Math.min(He,G),Pe=Math.min(He,q),he=Math.max(B,X-je),De=Math.max(le,Pe-je);if(Math.abs(_e)>f){let ze=Math.min(he,B+.9),Se=Math.min(De,le+.9);Me(D,w,B,le,ze,Se,_(Ue,[.25,.29,.18],.45),Ue),Me(D,w,ze,Se,he,De,Ue,Ue)}else Me(D,w,B,le,he,De,Ue,Ue);if(Me(D,w,he,De,X,Pe,Ue,tt),ce=X,de=Pe,G-X<.01&&q-Pe<.01)continue}let Ce=Math.floor(_e/k),ve=ce,xe=de;for(let Ue=Math.floor(Math.min(ve,xe)/k)+1;ve<G-.01||xe<q-.01;Ue++){let je=Ue*k,tt=Math.min(G,Math.max(ve,je)),X=Math.min(q,Math.max(xe,je)),Pe=R(Ce,Ue);if(Me(D,w,ve,xe,tt,X,_(Pe,[.2,.22,.1],.25),Pe),ve=tt,xe=X,Ue>60)break}}let we=Math.min(H,H+O*.12),We=Math.max(H,H+O*.12),Ke=j=>{for(let D=0;D<ie.length-1;D++)if(j>=ie[D]&&j<=ie[D+1]&&ie[D+1]>ie[D]){let w=(j-ie[D])/(ie[D+1]-ie[D]);return[Le(Re(ie[D]),Re(ie[D+1]),w),Le(et(ie[D]),et(ie[D+1]),w)]}return null},Be=ie[0],pt=ie[ie.length-1];for(let j=Math.ceil(Be/k)*k;j<pt;j+=k){let D=Ke(j);if(!D)continue;let w=(J&&Math.abs(j)<U?Math.max(He+.3,D[0]):D[0])+.05,G=D[1]-.05;G-w>.4&&!(Math.abs(j)<=f+.3&&!J)&&y.box(we,w,j-.14,We,G,j+.14,A)}for(let j=1;j<60;j++){let D=j*k,w=null,G=()=>{w&&w[1]-w[0]>.3&&y.box(we,D-.14,w[0],We,D+.14,w[1],A),w=null},q=!1;for(let B=0;B<ie.length-1;B++){let le=ie[B],_e=ie[B+1];if(_e-le<1e-4)continue;let oe=(le+_e)/2,ce=Math.max(Re(le),Re(_e),J&&Math.abs(oe)<U?He+.3:-1e9),de=Math.min(et(le),et(_e));D>ce+.2&&D<de-.2?(q=!0,w?w[1]=_e:w=[le,_e]):G()}if(G(),!q&&D>30)break}J&&y.box(Math.min(H,H+O*.32),He-.05,-U,Math.max(H,H+O*.32),He+.3,U,P);let Q=H+O*.32,pe=j=>-f+2*f*j/24,Te=j=>[pe(j),fe(pe(j))],K=j=>[pe(j)*1.12,fe(pe(j))+.6];for(let j=0;j<24;j++){let[D,w]=Te(j),[G,q]=Te(j+1),[B,le]=K(j),[_e,oe]=K(j+1);O<0?y.quad([Q,w,D],[Q,q,G],[Q,oe,_e],[Q,le,B],N):y.quad([Q,q,G],[Q,w,D],[Q,le,B],[Q,oe,_e],N),O<0?y.quad([H,w,D],[H,q,G],[Q,q,G],[Q,w,D],I):y.quad([H,q,G],[H,w,D],[Q,w,D],[Q,q,G],I),O<0?y.quad([H,oe,_e],[H,le,B],[Q,le,B],[Q,oe,_e],N):y.quad([H,le,B],[H,oe,_e],[Q,oe,_e],[Q,le,B],N)}for(let j of[-1,1])y.box(Math.min(H,Q),.2,j>0?f:-f*1.12,Math.max(H,Q),3.2,j>0?f*1.12:-f,N);e.atlas.setM(b);let ee=1.9,re=7.05,se=7.85,F=H+O*.03,me=oo("tunnel"+(h.coast>.5?1:Math.abs(n.k)%2?2:0));O<0?e.atlas.quad([F,re,-ee],[F,re,ee],[F,se,ee],[F,se,-ee],[1,1,1],me):e.atlas.quad([F,re,ee],[F,re,-ee],[F,se,-ee],[F,se,ee],[1,1,1],me)}yield;let W=h.mountain>.5;for(let O=Math.max(s,n.s-tn*.95)+v()*3;O<Math.min(r,n.s+tn*.95);O+=v.range(4,8)){let V=Math.abs(O-n.s)>sn-4?17:4;for(let H of[-1,1]){let ie=H*(x+v.range(V,50)),fe=v();Fn(e,a(O,ie,-.3,v()*6,!1),W?fe<.5?"maple":fe<.8?"cedar":"ginkgo":fe<.65?"pine":"broad",v,v.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,a,c,u){let d=p=>Ut(p).snow;if(!(d(n)<.3&&d(s)<.3)){for(let p of[-1,1]){for(let v=n+t()*20;v<s;v+=t.range(22,40)){if(d(v)<.6||t()<.5)continue;let m=p*t.range(18,90);is(e,o(v,m,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(ns),litP:.62,fence:0,snow:!0});for(let l=0;l<2+t()*3;l++)Fn(e,o(v+t.range(-9,9),m+p*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let v=n+t()*5;v<s;v+=t.range(3,7))d(v)<.5||(t()<.32&&Fn(e,o(v,p*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&Fn(e,o(v,p*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let p=Math.ceil(n/36)*36;p<s;p+=36){if(d(p)<.55)continue;let v=c(p);{let m=r(p,-(v+.95),a(p)+1.3),l=r(p+18,v+.95,a(p+18)+1.3);m.groundY=a(p),l.groundY=a(p+18),Af(e,m,1),Af(e,l,-1)}}}}*placeMountain(e,t,n,s,r,o,a,c,u){let d=p=>Ut(p).mountain;if(!(d(n)<.3&&d(s)<.3)){for(let p of[-1,1]){for(let v=n+t()*4;v<s;v+=t.range(4.5,8.5)){if(d(v)<.45||Pi(v,tn+6))continue;let m=c(v),l=t();if(p>0){let x=l<.5?"maple":l<.72?"ginkgo":"cedar";Fn(e,o(v,m+t.range(17,70),-.25,t()*6,!1),x,t,t.range(.9,1.3))}else{let x=l<.55?"maple":l<.8?"cedar":"ginkgo";Fn(e,o(v,-(m+t.range(3.5,34)),-.25,t()*6,!1),x,t,t.range(.95,1.35))}}yield}for(let p=n+t()*4;p<s;p+=t.range(3,6)){if(d(p)<.5)continue;let v=t()<.7,m=-(c(p)+(v?t.range(108,205):t.range(36,100)));Fn(e,o(p,m,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new st);for(let p=Math.ceil(n/10)*10;p<s;p+=10){if(d(p)<.5||Pi(p,tn+4))continue;let v=c(p),m=r(p,-(v+.95),a(p));Up(e,m)}for(let p=Math.ceil(n/14)*14;p<s;p+=14){if(d(p)<.6)continue;let v=this.path.curv(p);if(Math.abs(v)<1/230)continue;let m=c(p);v>0?As(e,r(p,m+.42,a(p)),"chev_l",-1,1.25,.58):As(e,r(p,-(m+1.15),a(p)),"chev_r",1,1.35,.58)}}}*placeVerge(e,t,n,s,r,o,a){for(let c of[-1,1]){for(let u=n+t()*1.2;u<s;u+=t.range(.55,1.5)){if(Rs(u,10)||ri(u,31)||Pi(u,tn+4))continue;let d=en(u),p=a(u),v,m,l=.22,x=1;if(d==="country")v=p+(t()<.6?t.range(.2,.62):t.range(2.18,2.75)),m=.95;else if(d==="sakura")v=p+2.68+t()*1.3,m=.55,l=.3;else if(d==="coast"){if(c<0)continue;v=p+.95+t()*1.7,m=.75,l=.18}else{if(d==="snow")continue;if(d==="mountain")v=c<0?p+1+t()*.35:p+.25+t()*.2,m=c<0?.55:.18,l=.12,x=.85;else{if(Ff(u,5))continue;v=p+3.02+t()*.1,m=.1,l=.08,x=.65}}if(t()>m)continue;let f=c*v;Pf(e,r(u,f,o(u,f),t()*6.28,!1),t,t()<l?"flowers":"grass",x*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new st);let a=Math.max(1,Math.round((n-t)/2)),c=be.rail,u=[.62,.64,.66],d=[.74,.76,.79],p=[.95,.55,.16];for(let v=0;v<a;v++){let m=t+(n-t)*v/a,l=t+(n-t)*(v+1)/a,x=-(o(m)+.95),f=-(o(l)+.95),h=r(m),g=r(l);for(let y=0;y<Nf.length-1;y++){let[M,S]=Nf[y],[T,_]=Nf[y+1];e.color.quad(s(m,x+S,h+M),s(l,f+S,g+M),s(l,f+_,g+T),s(m,x+_,h+T),c)}e.color.quad(s(l,f+.05,g+.5),s(m,x+.05,h+.5),s(m,x+.05,h+.84),s(l,f+.05,g+.84),u),e.color.noShadow=!0;let b=s(m,x-.04,h);if(e.color.cyl(b[0],h,b[2],.055,.055,.8,6,d,!1),Math.round(m/2)%2===0){let y=s(m,x+.035,h+.64),M=s(m+.09,x+.035,h+.64);e.color.quad(M,y,[y[0],y[1]+.07,y[2]],[M[0],M[1]+.07,M[2]],p)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,a,c,u,d,p,v,m){for(let f of[-1,1]){let h=n+t()*2;for(;h<s-2;){{let I=Ut(h);if(I.city<.62||I.mountain>.1){h+=4;continue}}{let I=eo(h+6);if(I&&h<I.s+8.5&&h+14>I.s-8.5){h=Math.max(h+1,I.s+8.5);continue}}let g=ss(h,150);if(g>145.6||g<3.4){h+=1;continue}let b=c(h),y=u(h)||3,M=b+y+.15,S=t(),T=S<.5?"machiya":S<.7?"shop":S<.77?"apt":S<.8?"office":S<.86?"house":S<.91?"konbini":S<.95?"parking":"gap",_=T==="shop"?t.range(5,9):T==="machiya"?t.range(6,9.5):T==="apt"?t.range(10,16):T==="office"?t.range(10,14):T==="house"?t.range(7,9.5):T==="konbini"?t.range(12,14):T==="parking"?t.range(7,11):t.range(2,3.5);if(h+_>s){if(s-h<5||T==="konbini")break;_=s-h-.2}{let I=Math.ceil((h+4.4)/150)*150-4.4;if(h+_>I-.1){if(I-.1-h<4){h=I+7.9;continue}_=I-.1-h}}let E=h+_/2,A=a(E),P=t.pick(ns),N=.42;if(T==="parking"){let I=r(E,f*(M+3),A+.15);t()<.8&&Xp(e,fu(I,0,0,.5,(t()-.5)*.1),t),e.color.setM(I),e.color.box(-_/2,0,5.5,_/2,1.6,5.7,be.concrete)}else if(T!=="gap"){let I=r(E,f*M,A+.15),R={type:T,w:_,d:T==="apt"||T==="office"?t.range(10,14):t.range(8,12),floors:T==="shop"?t.int(2,4):T==="machiya"?t()<.75?2:3:T==="apt"?t.int(4,9):T==="office"?t.int(4,8):2,tint:P,litP:N,fence:T==="house"&&t()<.5?1.2:0};if(is(e,I,t,R),T!=="house"&&t()<.28&&Ef(e,r(E+(t()-.5)*(_-1.2),f*(M-.42),A+.15),t),(T==="shop"||T==="konbini"||T==="machiya")&&t()<.3)for(let C=0;C<1+t()*3;C++)Dp(e,r(E-_/2+.8+C*.55,f*(M-.75),A+.15,Math.PI/2+.1),t);if(T==="house"&&t()<.6)for(let C=0;C<2+t()*3;C++)wf(e,r(E+1+C*.5,f*(M-.3),A+.15),t);if(t()<.03)for(let C=0;C<3;C++)Np(e,r(E+C*.9,f*(b+.35),A))}h+=_+t.range(.05,.5),yield}for(let g=n+t()*10;g<s-8;g+=t.range(14,26)){if(Ut(g).city<.7||Ut(g).mountain>.1||t()<.3||Rs(g,18)||Ff(g,15))continue;let b=c(g),y=r(g,f*(b+3.2+t.range(14,20)),a(g)+.1);is(e,y,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(ns),litP:.4})}if(Ut(n+30).city>.7&&Ut(n+30).mountain<.1&&t()<.65){let g=n+t()*Zt;if(Rs(g,24)||Ff(g,20))continue;let b=r(g,f*t.range(55,150),a(g));is(e,b,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(ns),litP:.45})}}let l=Math.ceil(n/150),x=Math.floor((s-.01)/150);for(let f=l;f<=x;f++){let h=f*150;if(en(h)!=="city"||Ut(h).mountain>.1)continue;let g=c(h);yield*this.intersection(e,t,h,f,r,a,c,u,p,v,m),As(e,r(h-1,-(g+.4),a(h)+.15),"sign_blue",1),As(e,r(h-6,-(g+.4),a(h)+.15),"sign_stop",1,2.1,.75),Rf(e,r(h+7,g+.4,a(h)+.15),-1),f%3===0&&As(e,r(h+20,-(g+.4),a(h)+.15),"sign_speed",1)}}*placeSakura(e,t,n,s,r,o,a,c,u){for(let v of[-1,1]){for(let m=n+t()*4;m<s;m+=t.range(7.5,10)){if(Ut(m).sakura<.45||ri(m,30))continue;let l=c(m);Fn(e,o(m,v*(l+3.7),0,t()*6),"sakura",t,t.range(1.05,1.3)),t()<.45&&Fn(e,o(m+3,v*(l+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let m=n+(v>0?0:12);m<s;m+=24){if(en(m)!=="sakura"||ri(m,30))continue;let l=c(m);La(e,r(m,v*(l+2.25),a(m)+.15)),ss(m,48)<24&&Kp(e,r(m+6,v*(l+3),u(m+6,v*(l+3))))}for(let m=n+t()*15;m<s;m+=t.range(14,24)){if(en(m)!=="sakura"||t()<.35||ri(m,45))continue;let l=c(m);is(e,o(m,v*(l+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(ns),litP:.45,fence:t()<.6?1.4:0})}}let p=Math.floor((n+Zt/2)/480)*480+240;p>=n&&p<s&&en(p)==="sakura"&&!ri(p,60)&&Df(e,r(p,0,a(p),0,!1),c(p)+1.6,6.4)}placeCoast(e,t,n,s,r,o,a,c,u,d,p){for(let l=0;l<=20;l++){let x=n+l/20*Zt;if(Ut(x).coast<.85||Pi(x,tn*1.25)){d.length&&d[d.length-1]!==null&&d.push(null);continue}let h=c(x),g=h+11,b=h+19,y=p(x,-g,Ss+.06),M=p(x,-b,Ss+.06);d.push([[y[0],y[1],y[2],ss(x,Ts),0],[M[0],M[1],M[2],ss(x,Ts),1]])}let v=d.indexOf(null);v>=0&&(d.length=v),d.length<2&&(d.length=0);for(let l=n+t()*6;l<s;l+=t.range(5,9)){if(en(l)!=="coast"||Pi(l,tn+6))continue;let x=c(l);t()<.7&&Fn(e,o(l,x+t.range(3.5,26),0,t()*6,!1),"pine",t,t.range(.9,1.3)),t()<.2&&Fn(e,o(l+2,-(x+t.range(3.5,7)),0,t()*6,!1),"pine",t,t.range(.8,1.1))}for(let l=n+4;l<s;l+=t.range(18,30)){if(en(l)!=="coast"||t()<.4||Pi(l,tn*1.4))continue;let x=c(l),f=3+Math.floor(t()*5);for(let h=0;h<f;h++){let g=-(x+t.range(12,17)),b=l+t.range(-3,3);Qp(e,r(b,g,Math.max(u(b,g),Ss-.4)+t.range(-.2,.4),t()*6),t,t.range(.9,1.2))}}for(let l=n+12;l<s;l+=48){if(en(l)!=="coast"||Pi(l,tn+4))continue;let x=c(l);Tf(e,o(l,x+1),t)}if(en(n+30)==="coast"&&t()<.5){let l=n+t()*Zt,x=c(l);Pi(l,tn+25)||is(e,o(l,x+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick(ns),litP:.5,fence:0})}if(en(n+30)==="coast"&&t()<.55){let l=n+t()*Zt;tm(e,r(l,-(c(l)+t.range(45,220)),Ss-.25,t()*6,!1),t)}let m=Math.floor((n+Zt/2)/1500)*1500+700;m>=n&&m<s&&en(m)==="coast"&&!Pi(m,tn*1.6)&&em(e,r(m,-(c(m)+75),Ss-1,0,!1))}*placeCountry(e,t,n,s,r,o,a,c,u){for(let l of[-1,1]){yield;for(let x=n+t()*20;x<s;x+=t.range(20,40)){if(en(x)!=="country"||t()<.55||Rs(x,16)||ri(x,48))continue;let f=l*t.range(16,95),h=o(x,f);is(e,h,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(ns),litP:.5,fence:0});for(let g=0;g<2+t()*3;g++){let b=f+l*t.range(6,14),y=x+t.range(-8,8);Fn(e,o(y,b,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let x=n+t()*8;x<s;x+=t.range(5,9)){if(en(x)!=="country"||Rs(x,7)||ri(x,36))continue;let f=l*t.range(140,210);Fn(e,o(x,f,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Rs(x+2,8)&&!ri(x+2,34)&&Fn(e,o(x+2,l*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let d=Math.floor((n+Zt/2)/600)*600+300;if(d>=n&&d<s&&en(d)==="country"&&!ri(d,40)){let l=c(d);jp(e,r(d,-(l+1.6),a(d)-.08),t)}let p=Math.floor((n+Zt/2)/700)*700+120;if(p>=n&&p<s&&en(p)==="country"&&!ri(p,40)){let l=c(p);Ef(e,r(p,-(l+.95),a(p)-.08),t),Tf(e,r(p+2,-(l+.8),a(p)-.08),t)}let v=Math.floor((n+Zt/2)/900)*900+450;if(v>=n&&v<s&&en(v)==="country"&&!ri(v,40)){let l=c(v);nm(e,o(v,l+5),t)}let m=Math.floor((n+Zt/2)/380)*380+190;if(m>=n&&m<s&&en(m)==="country"&&!ri(m,40)&&!Rs(m,30)){let l=c(m),x=(si(Math.round(m),5)<.5?-1:1)*(l+2.75);$p(e,o(m,x,0))}for(let l=n;l<s;l+=30){if(en(l)!=="country")continue;let x=this.path.curv(l);if(Math.abs(x)>1/450&&t()<.5){let f=x>0?-1:1,h=c(l);Rf(e,o(l,f*(h+.75)),f>0?-1:1)}}}};var pu=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3473d4","#cde3f8","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#cfe0ef","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new Ee(e):e)),ge={zenith:new Ee,horizon:new Ee,sunCol:new Ee,sunI:1,hemiSky:new Ee,hemiGround:new Ee,hemiI:1,fog:new Ee,cLit:new Ee,cShade:new Ee,cRim:new Ee,night:0,warm:0,overcast:0,rain:0,sunDir:new z,moonDir:new z,lightDir:new z,sunEl:0};function am(i){let e=0;for(;e<pu.length-2&&pu[e+1][0]<=i;)e++;let t=pu[e],n=pu[e+1],s=Kc(kt((i-t[0])/(n[0]-t[0]),0,1)),r=(o,a)=>a.copy(t[o]).lerp(n[o],s);r(1,ge.zenith),r(2,ge.horizon),r(3,ge.sunCol),ge.sunI=Lt(t[4],n[4],s),r(5,ge.hemiSky),r(6,ge.hemiGround),ge.hemiI=Lt(t[7],n[7],s),r(8,ge.fog),r(9,ge.cLit),r(10,ge.cShade),r(11,ge.cRim),ge.night=Lt(t[12],n[12],s),ge.warm=Lt(t[13],n[13],s),ge.sunEl=lm(i,ge.sunDir,ge.moonDir,ge.lightDir)}function lm(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,kt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var F2=new z,B2=new z;function zf(i,e){return lm((i%1+1)%1,F2,B2,e),e}var om={zenith:[new Ee("#7b8594"),new Ee("#141a28")],horizon:[new Ee("#b5bcc6"),new Ee("#283042")],fog:[new Ee("#a8b0ba"),new Ee("#232b3c")],hemiSky:[new Ee("#aab3bf"),new Ee("#3c4866")],hemiGround:[new Ee("#8b8983"),new Ee("#1e2030")],cLit:[new Ee("#d0d5dc"),new Ee("#2c3240")],cShade:[new Ee("#7c8593"),new Ee("#151922")]},Of=new Ee;function cm(i,e){if(ge.overcast=i,ge.rain=e,i<=.001)return;let t=ge.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Of.copy(om[n][0]).lerp(om[n][1],t),ge[n].lerp(Of,i*(n==="cLit"||n==="cShade"?.75:.85));ge.sunI*=1-.82*i,ge.warm*=1-i,ge.cRim.multiplyScalar(1-i),ge.sunCol.lerp(Of.setRGB(.85,.87,.9),i*.6)}function um(){let i=new xt({side:Cn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ge.zenith},uHorizon:{value:ge.horizon},uSunDir:{value:ge.sunDir},uMoonDir:{value:ge.moonDir},uNoiseTex:qe.uNoiseTex,uSunCol:{value:ge.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new Ee},uOvercast:{value:0},uDeckLit:{value:new Ee},uDeckDark:{value:new Ee},uMilky:{value:0},uMetA:{value:new z(0,1,0)},uMetB:{value:new z(0,1,0)},uMetP:{value:-1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP;
      varying vec3 vDir;
      ${mi}
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
      }`}),e=new mt(new la(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function O2(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let g=0;g<o;g++){let b=.06+i()*.05;t.push([(g/(o-1)-.5)*s+(i()-.5)*.03,.1+b*.5,(i()-.5)*.2,b])}let a=e?6:2,c=s*.82,u=.1+.09;for(let g=0;g<a;g++){let b=Math.max(1,Math.round(c/.11));for(let y=0;y<b;y++){let M=(b===1?0:y/(b-1)-.5)*c+(i()-.5)*.05+r*g;t.push([M,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,c*=e?.8:.66}let d=t.slice();for(let g of d){if(t.length>84)break;let b=1+Math.floor(i()*2);for(let y=0;y<b;y++){let M=.35+i()*2.4,S=g[3]*(.35+i()*.2);t.push([g[0]+Math.cos(M)*g[3]*.82,g[1]+Math.sin(M)*g[3]*.82,g[2]+.04,S])}}let p=t.slice(d.length);for(let g of d){if(g[1]<.1+.12||t.length>104)continue;let b=1+Math.floor(i()*2);for(let y=0;y<b;y++){let M=.3+i()*2.5,S=g[3]*(.3+i()*.4),T=g[3]*(.28+i()*.16);t.push([g[0]+Math.cos(M)*S,g[1]+Math.sin(M)*S,g[2]+Math.sqrt(g[3]*g[3]-S*S)-T*.6,T])}}for(let g of p){if(t.length>124)break;let b=1+Math.floor(i()*2);for(let y=0;y<b;y++){let M=.2+i()*2.7,S=g[3]*(.38+i()*.2);t.push([g[0]+Math.cos(M)*g[3]*.85,g[1]+Math.sin(M)*g[3]*.85,g[2]+.02,S])}}let v=t.slice(0,128),m=1e9,l=-1e9,x=-1e9;for(let g of v)m=Math.min(m,g[0]-g[3]*1.12),l=Math.max(l,g[0]+g[3]*1.12),x=Math.max(x,g[1]+g[3]*1.12);let f=Math.min(1,.92/(l-m),(.95-.1)/(x-.1)),h=(m+l)/2;for(let g of v)g[0]=(g[0]-h)*f,g[1]=.1+(g[1]-.1)*f,g[3]*=f;return v}function hm(i){let t={value:Array.from({length:128},()=>new Tt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new xt({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:qe.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${mi}
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
      }`,depthTest:!1,depthWrite:!1,blending:kn}),r=new Ft(1024,1024,{generateMipmaps:!0,minFilter:Hn,magFilter:zt,depthBuffer:!1}),o=new xt({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:qe.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${mi}
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
      }`,depthTest:!1,depthWrite:!1,blending:kn}),a=new mt(new nn(1,1),s),c=new Hs,u=new ji;c.add(a);let d=new Ft(1024*2,1024*2,{generateMipmaps:!0,minFilter:Hn,magFilter:zt}),p=i.getRenderTarget(),v=i.autoClear,m=fn(99);i.setRenderTarget(d),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let l=[];for(let x=0;x<4;x++){let f=x%2===0,h=O2(m,f);h.forEach((g,b)=>t.value[b].set(g[0],g[1],g[2],g[3])),s.uniforms.uN.value=h.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=x*13.7,a.material=s,i.setRenderTarget(r),i.render(c,u),a.material=o,d.viewport.set(x%2*1024,Math.floor(x/2)*1024,1024,1024),i.setRenderTarget(d),i.render(c,u),l.push({cell:[x%2,Math.floor(x/2)],tall:f})}return d.viewport.set(0,0,1024*2,1024*2),i.autoClear=v,i.setRenderTarget(p),s.dispose(),o.dispose(),r.dispose(),a.geometry.dispose(),{tex:d.texture,kinds:l,rt:d}}function fm(i){let e=fn(5),t=22,n=[],s=new nn(1,1);s.translate(0,.5,0);let r=new zn(new Float32Array(t*4),4),o=new zn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let a=new xt({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:ge.cLit},uShade:{value:ge.cShade},uRim:{value:ge.cRim},uHaze:{value:ge.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),c=new Ki(s,a,t);c.frustumCulled=!1,c.renderOrder=-5;for(let l=0;l<t;l++){let x=l<12,f=i.kinds[(l*3+(x?0:1))%i.kinds.length],h=x?f.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:l/t*Math.PI*2+e.range(-.15,.15),d:x?e.range(2600,3400):e.range(1300,2200),base:x?e.range(-60,60):e.range(260,700),size:h,cell:f.cell,haze:x?.45:.18})}let u=new st,d=new Sn,p=new z,v=new z,m=new z(0,1,0);return{group:c,update(l,x){let f=Math.atan2(ge.lightDir.x,ge.lightDir.z);for(let g of n)g.phi+=x*1.2/g.d;n.slice().sort((g,b)=>b.d-g.d).forEach((g,b)=>{p.set(l.x+Math.sin(g.phi)*g.d,l.y+g.base,l.z+Math.cos(g.phi)*g.d),d.setFromAxisAngle(m,g.phi+Math.PI),v.set(g.size,g.size,1),u.compose(p,d,v),c.setMatrixAt(b,u);let y=f-g.phi;y=Math.atan2(Math.sin(y),Math.cos(y));let M=Math.max(0,Math.min(1,(y+.35)/.7)),S=1-M*M*(3-2*M);r.setXYZW(b,g.cell[0],g.cell[1],S,g.haze),o.setX(b,.35+.9*Math.pow(Math.max(Math.cos(y),0),3)*(.4+ge.warm))}),c.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,a.uniforms.uOpacity.value=(1-ge.night*.35)*(1-ge.overcast*.55)*(1-.85*ge.rain)}}}function dm(){let i=new Jt;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],a=[];for(let p=0;p<=360;p++){let v=p/360*Math.PI*2,m=Math.sin(v)*t.R,l=Math.cos(v)*t.R,x=jc(p/360*t.k*4,40+n*9),f=Math.pow(Math.max(0,x-.18)/.82,1.6),h=t.h*(.12+f);if(r.push(m,-60,l,m,-60+h,l),o.push(0,p/360,1,p/360),p<360){let g=p*2;a.push(g,g+1,g+2,g+1,g+3,g+2)}}let c=new yt;c.setAttribute("position",new Je(r,3)),c.setAttribute("hf",new Je(o,2)),c.setIndex(a);let u=new xt({side:Tn,fog:!1,uniforms:{uCol:{value:new Ee(t.col)},uHaze:{value:ge.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:qe.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${mi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),d=new mt(c,u);d.frustumCulled=!1,d.renderOrder=999,i.add(d)}),{group:i,update(t,n=0){i.position.set(t.x,0,t.z);for(let r of i.children)r.material.uniforms.uSnow.value=n;let s=(.35+.65*(1-ge.night))*(1-.35*ge.overcast);for(let r of i.children)r.material.uniforms.uLight.value=s}}}var lo={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function pm(i){let e=i.get("weather"),t={mode:lo[e]?e:"auto",kind:lo[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return lo[e]&&(t.ov=lo[e][0],t.rain=lo[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let a=Math.random();t.kind=t.kind==="clear"?a<.5?"cloudy":a<.72?"rain":"clear":t.kind==="cloudy"?a<.5?"clear":a<.85?"rain":"cloudy":a<.55?"cloudy":"clear"}let[s,r]=lo[t.kind];t.ov+=kt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=kt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var gi={uHeadPos:{value:new z},uHeadDir:{value:new z(0,0,1)},uHeadI:{value:0},uLampW:{value:[new Tt(0,-1e3,0,0),new Tt(0,-1e3,0,0)]},uLampCol:{value:new Ee(1,.8,.52)}},mu=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function mm(){let e=new z(42,22,42),t=new nn(1,1),n=new xs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let a=0;a<2400*4;a++)s[a]=Math.random();n.setAttribute("aOff",new zn(s,4)),n.instanceCount=2400;let r=new xt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new z},uAmt:{value:0},uBox:{value:e},uCol:{value:new Ee(1,1,1)},...gi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${mu}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new mt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,d){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*d,.33+.67*d,.42+.58*d)}}}function gm(){let e=new z(46,24,46),t=new nn(1,1);t.translate(0,.5,0);let n=new xs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let a=0;a<2600;a++)s[a*4]=Math.random(),s[a*4+1]=Math.random(),s[a*4+2]=Math.random(),s[a*4+3]=Math.random();n.setAttribute("aOff",new zn(s,4)),n.instanceCount=2600;let r=new xt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new z},uRain:{value:0},uBox:{value:e},uCol:{value:new Ee(.8,.85,.95)},...gi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${mu}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new mt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,d){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*d,.12+.83*d,.16+.84*d)}}}var Gn=64,kf=[2.2,1.3,2.6],z2=[-2.4,.35,-1.6];function vm(){let i=new Float32Array(Gn*3),e=new Float32Array(Gn*3),t=new Float32Array(Gn*4),n=new Float32Array(Gn),s=new Uint8Array(Gn),r=new Float32Array(Gn);for(let b=0;b<Gn;b++)t[b*4]=t[b*4+1]=1;let o=new nn(1,1),a=new xs;a.index=o.index,a.setAttribute("position",o.attributes.position),a.setAttribute("uv",o.attributes.uv),a.instanceCount=0;let c=new Float32Array(Gn*4),u=new Float32Array(Gn*4),d={uP:{value:c},uC:{value:u},uNoiseTex:qe.uNoiseTex,uAmb:{value:new Ee},uSun:{value:new Ee},uTail:{value:new Tt},uCam:{value:new z},...gi},p=new xt({transparent:!0,depthWrite:!1,fog:!1,uniforms:d,vertexShader:`
      uniform vec4 uP[${Gn}], uC[${Gn}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${mu}
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
      }`}),v=new mt(a,p);v.frustumCulled=!1,v.renderOrder=4,v.visible=!1;let m=0,l=0,x=0,f=0,h=!1;function g(b,y,M,S,T,_,E,A,P,N,I){let R=m;m=(m+1)%Gn,i[R*3]=y,i[R*3+1]=M,i[R*3+2]=S,e[R*3]=T,e[R*3+1]=_,e[R*3+2]=E,t[R*4]=0,t[R*4+1]=A,t[R*4+2]=P,t[R*4+3]=N,n[R]=I,s[R]=b,r[R]=Math.random()}return{mesh:v,update(b,y,M,S,T,_,E,A,P,N,I){if(!I){if(h){for(let J=0;J<Gn;J++)t[J*4]=t[J*4+1];h=!1}v.visible=!1;return}let R=y.position,C=y.rotation.y,U=Math.cos(C),k=Math.sin(C),W=k*M,O=U*M,V=Math.min(1,Math.max(0,(M-2)/14)),H=T>.3?2:0,ie=H?T:S;for(l+=24*ie*V*b;l>=1;){l-=1;let J=(f^=1)?1:-1,Y=J*.67,Me=-1.28-Math.random()*.2,Le=Math.random(),we=Math.random(),We=1.6+1.6*Le,Ke=H?.5+.7*we:.9+1*we,Be=J*(.3+.6*Math.random());g(H,R.x+Y*U+Me*k,R.y+.12,R.z-Y*k+Me*U,W*.55-k*We+Be*U,Ke,O*.55-U*We-Be*k,H?.45+.3*Le:.55+.35*Le,.2+.1*we,H?.7+.35*we:.8+.4*we,.5*(.5+.5*V)*Math.min(1,ie*1.5))}for(x+=(5+4*V)*_*b;x>=1;){x-=1;let J=Math.random();g(1,R.x-.42*U-1.78*k,R.y+.26,R.z+.42*k-1.78*U,W*.5-k*.8,.25+.2*J,O*.5-U*.8,1.3+.6*J,.14,.8+.4*Math.random(),.32*Math.min(1,_*1.5))}let fe=0,et=Math.exp(-kf[0]*b),Re=Math.exp(-kf[1]*b),He=Math.exp(-kf[2]*b);for(let J=0;J<Gn;J++){let Y=J*4;if(t[Y]>=t[Y+1])continue;let Me=t[Y]+=b,Le=t[Y+1];if(Me>=Le)continue;let we=s[J],We=we===0?et:we===1?Re:He,Ke=J*3,Be=i[Ke]-N.x,pt=i[Ke+1]-N.y,Q=i[Ke+2]-N.z;if(Be*Be+pt*pt+Q*Q<20.25){t[Y]=Le;continue}e[Ke]*=We,e[Ke+1]=e[Ke+1]*We+z2[we]*b,e[Ke+2]*=We,i[Ke]+=e[Ke]*b,i[Ke+1]=Math.max(R.y+.05,i[Ke+1]+e[Ke+1]*b),i[Ke+2]+=e[Ke+2]*b;let pe=Me/Le,Te=fe*4;c[Te]=i[Ke],c[Te+1]=i[Ke+1],c[Te+2]=i[Ke+2],c[Te+3]=t[Y+2]+(t[Y+3]-t[Y+2])*Math.sqrt(pe),u[Te]=n[J]*Math.min(1,pe*6)*(1-pe)*(1-pe),u[Te+1]=we,u[Te+2]=r[J],fe++}h=fe>0,v.visible=h,a.instanceCount=fe,h&&(d.uAmb.value.copy(E),d.uSun.value.copy(A),d.uTail.value.copy(P),d.uCam.value.copy(N))},shift(b,y){for(let M=0;M<Gn;M++)i[M*3]-=b,i[M*3+2]-=y}}}var sr=24,k2=55,H2=12;function xm(){let i=[],e=new Float32Array(sr*2*2),t=new Float32Array(sr*2*3);for(let u=0;u<sr;u++)if(e.set([u,-1,u,1],u*4),u<sr-1){let d=u*2;i.push(d,d+1,d+2,d+1,d+3,d+2)}let n=new yt;n.setAttribute("position",new Ot(t,3)),n.setAttribute("aI",new Ot(e,2)),n.setIndex(i);let s=new Float32Array(sr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new Ee},uTime:{value:0},uNoiseTex:qe.uNoiseTex},o=new xt({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${sr}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${mi}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),a=new mt(n,o);a.frustumCulled=!1,a.renderOrder=1,a.visible=!1;let c={};return{mesh:a,update(u,d,p,v,m,l,x,f){if(a.visible=l>.01,!!a.visible){for(let h=0;h<sr;h++)u.at(d+k2+h*H2,c),s[h*4]=c.x-p,s[h*4+1]=c.y,s[h*4+2]=c.z-v,s[h*4+3]=c.h;r.uW.value=m*.85,r.uHot.value=l,r.uTime.value=x,r.uSky.value.copy(f)}}}}var co=72;function V2(){let i=[],e=[],t=(s,r,o,a,c,u)=>{i.push(...s,...r,...o),e.push(a,c,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new yt;return n.setAttribute("position",new Je(i,3)),n.setAttribute("aWing",new Je(e,1)),n}function _m(){let i=V2(),e=new zn(new Float32Array(co*3),3),t=new zn(new Float32Array(co*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new xt({side:Tn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ge.fog},uFogD:{value:.002},uCam:{value:new z}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new Ki(i,n,co);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},a=new st,c=new Sn,u=new Yn(0,0,0,"YXZ"),d=new z,p=new z,v=()=>r.reduce((x,f)=>x+f.birds.length,0);function m(x,f,h,g){let b=x==="small"?6+Math.floor(Math.random()*7):x==="crow"?3+Math.floor(Math.random()*5):4;if(v()+b>co)return;let y=45+Math.random()*85,M=(Math.random()-.5)*120,S=Math.random()<.5?1:-1,T=new z().copy(f).addScaledVector(h,y).addScaledVector(g,M-S*75);T.y=f.y+(x==="crow"?18+Math.random()*24:10+Math.random()*18);let _=x==="small"?11+Math.random()*4:8+Math.random()*3,E=new z().copy(g).multiplyScalar(S*_).addScaledVector(h,(Math.random()-.3)*_*.6),A=x==="small"?.8:1.45,P=Array.from({length:b},(N,I)=>({off:new z((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:x==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:x,c:T,vel:E,birds:P,size:A,life:60})}function l(x,f,h,g){if(r.some(M=>M.kind==="gull")||v()+4>co)return;let b=new z().copy(x).addScaledVector(f,70).addScaledVector(h,-g*45);b.y=x.y+18;let y=Array.from({length:4},(M,S)=>({off:new z,ph:Math.random()*6.28,fq:5.5,w:S/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:b,vel:new z,birds:y,size:1.25,life:1e9})}return{mesh:s,update(x,f,h,g,b,y,M,S,T){n.uniforms.uTime.value=f,n.uniforms.uCam.value.copy(h);let _=M>.35&&S<.3,E=ge.warm>.25&&ge.sunEl<.6&&M>.2;_&&(o.small-=x)<0&&(o.small=22+Math.random()*35,y.coast<.6&&m("small",h,g,b)),(E||_&&y.city+y.country>.6&&Math.random()<4e-4)&&(o.crow-=x)<0&&(o.crow=E?14+Math.random()*18:60,m("crow",h,g,b)),y.coast>.6&&_&&l(h,g,b,1);let A=[.1+.08*M,.11+.09*M,.15+.1*M],P=0;for(let N=r.length-1;N>=0;N--){let I=r[N];if(I.kind==="gull"?(I.c.lerp(d.copy(T).addScaledVector(g,60).addScaledVector(b,-42).setY(T.y+16),Math.min(1,x*.25)),(y.coast<.4||!_)&&(I.life=Math.min(I.life,8),I.c.y+=x*6)):I.c.addScaledVector(I.vel,x),I.life-=x,I.life<0||I.kind!=="gull"&&I.c.distanceTo(h)>300){r.splice(N,1);continue}for(let R of I.birds){if(P>=co)break;let C,U,k,W;I.kind==="gull"?(R.w+=x*(14/R.r),C=I.c.x+Math.cos(R.w)*R.r,k=I.c.z+Math.sin(R.w)*R.r,U=I.c.y+R.h+Math.sin(f*.4+R.ph)*2,W=Math.atan2(-Math.sin(R.w),Math.cos(R.w))):(C=I.c.x+R.off.x+Math.sin(f*.7+R.ph)*1.2,U=I.c.y+R.off.y+Math.sin(f*1.1+R.ph)*.6,k=I.c.z+R.off.z,W=Math.atan2(I.vel.x,I.vel.z)),u.set(0,W,Math.sin(f+R.ph)*.15),c.setFromEuler(u),p.setScalar(I.size),a.compose(d.set(C,U,k),c,p),s.setMatrixAt(P,a);let O=I.kind==="gull"?[.92*(.5+.5*M),.93*(.5+.5*M),.95*(.5+.5*M)]:I.kind==="crow"?[.05,.05,.07]:A;e.setXYZ(P,O[0],O[1],O[2]),t.setXY(P,R.fq,R.ph),P++}}s.count=P,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(x){n.uniforms.uFogD.value=x},shift(x,f){for(let h of r)h.c.x-=x,h.c.z-=f}}}function ym(){let i=new xt({fog:!1,uniforms:{uNoiseTex:qe.uNoiseTex,uTime:{value:0},uCam:{value:new z},uSunDir:{value:ge.lightDir},uSunCol:{value:ge.sunCol},uHorizon:{value:ge.horizon},uZenith:{value:ge.zenith},uFog:{value:ge.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${mi}
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
      }`}),e=new mt(new nn(14e3,14e3),i);return e.rotation.x=-Math.PI/2,e.position.y=Ss,e.renderOrder=998,e.frustumCulled=!1,{mesh:e,update(t,n,s,r=1){e.position.x=t.x,e.position.z=t.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(t),i.uniforms.uNight.value=ge.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-ge.overcast*.85}}}function Mm(){return new xt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new Ee(1,1,1)},uNoiseTex:qe.uNoiseTex},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${mi}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function bm(){return new xt({fog:!1,uniforms:{uNoiseTex:qe.uNoiseTex,uTime:{value:0},uSunDir:{value:ge.lightDir},uSunCol:{value:ge.sunCol},uHorizon:{value:ge.horizon},uZenith:{value:ge.zenith},uFog:{value:ge.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${mi}
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
      }`})}var Ua=new z;function vi(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ua.copy(e),Ua[n]=0,Ua.normalize();let u=.5*o/(o+a),d=1-Ua.angleTo(i)/c;return Math.sign(Ua[t])===1?d*u:a/(o+a)+u+u*(1-d)}var wn=class i extends Gt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new z,u=new z,d=new z(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,v=this.attributes.normal.array,m=this.attributes.uv.array,l=p.length/6,x=new z,f=.5/o;for(let h=0,g=0;h<p.length;h+=3,g+=2)switch(c.fromArray(p,h),u.copy(c),u.x-=Math.sign(u.x)*f,u.y-=Math.sign(u.y)*f,u.z-=Math.sign(u.z)*f,u.normalize(),p[h+0]=d.x*Math.sign(c.x)+u.x*r,p[h+1]=d.y*Math.sign(c.y)+u.y*r,p[h+2]=d.z*Math.sign(c.z)+u.z*r,v[h+0]=u.x,v[h+1]=u.y,v[h+2]=u.z,Math.floor(h/l)){case 0:x.set(1,0,0),m[g+0]=vi(x,u,"z","y",r,n),m[g+1]=1-vi(x,u,"y","z",r,t);break;case 1:x.set(-1,0,0),m[g+0]=1-vi(x,u,"z","y",r,n),m[g+1]=1-vi(x,u,"y","z",r,t);break;case 2:x.set(0,1,0),m[g+0]=1-vi(x,u,"x","z",r,e),m[g+1]=vi(x,u,"z","x",r,n);break;case 3:x.set(0,-1,0),m[g+0]=1-vi(x,u,"x","z",r,e),m[g+1]=1-vi(x,u,"z","x",r,n);break;case 4:x.set(0,0,1),m[g+0]=1-vi(x,u,"x","y",r,e),m[g+1]=1-vi(x,u,"y","x",r,t);break;case 5:x.set(0,0,-1),m[g+0]=vi(x,u,"x","y",r,e),m[g+1]=1-vi(x,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Hf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new yt,u=0;for(let d=0;d<i.length;++d){let p=i[d],v=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in p.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(p.attributes[m]),v++}if(v!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in p.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(p.morphAttributes[m])}if(e){let m;if(t)m=p.index.count;else if(p.attributes.position!==void 0)m=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,m,d),u+=m}}if(t){let d=0,p=[];for(let v=0;v<i.length;++v){let m=i[v].index;for(let l=0;l<m.count;++l)p.push(m.getX(l)+d);d+=i[v].attributes.position.count}c.setIndex(p)}for(let d in r){let p=Sm(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,p)}for(let d in o){let p=o[d][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let v=0;v<p;++v){let m=[];for(let x=0;x<o[d].length;++x)m.push(o[d][x][v]);let l=Sm(m);if(!l)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(l)}}}return c}function Sm(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let d=i[u];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let o=new e(r),a=new Ot(o,t,n),c=0;for(let u=0;u<i.length;++u){let d=i[u];if(d.isInterleavedBufferAttribute){let p=c/t;for(let v=0,m=d.count;v<m;v++)for(let l=0;l<t;l++){let x=d.getComponent(v,l);a.setComponent(v+p,l,x)}}else o.set(d.array,c);c+=d.count*t}return s!==void 0&&(a.gpuType=s),a}function G2(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new Zn(i);return n.colorSpace=jt,n}var Vf=4;function W2(){let t=document.createElement("canvas");t.width=128*Vf,t.height=128;let n=t.getContext("2d"),s=(o,a,c,u,d)=>{n.beginPath(),n.moveTo(o+d,a),n.arcTo(o+c,a,o+c,a+u,d),n.arcTo(o+c,a+u,o,a+u,d),n.arcTo(o,a+u,o,a,d),n.arcTo(o,a,o+c,a,d),n.closePath(),n.fill()};for(let o=0;o<Vf;o++){let a=o*128,c=n.createLinearGradient(0,0,0,128);c.addColorStop(0,"#9fbfe6"),c.addColorStop(.45,"#4a6690"),c.addColorStop(1,"#1d2638"),n.fillStyle=c,n.fillRect(a,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(a+14,84,30,50,9),s(a+84,84,30,50,9),n.fillRect(a+6,112,116,16),s(a+52,92,24,40,7)),o===2&&(s(a+62,66,44,70,12),n.fillRect(a+50,118,70,10)),o===3&&(s(a+70,78,40,60,11),n.fillRect(a+56,120,64,8)),n.save(),n.beginPath(),n.rect(a,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(a+40,0),n.lineTo(a+68,0),n.lineTo(a+20,128),n.lineTo(a-8,128),n.fill(),n.restore()}let r=new Zn(t);return r.colorSpace=jt,r}function Tm(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/Vf)}return i}function Em(){let i=new Jt,e=new Jt,t=new Jt;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new Tt,new Tt],s=new Ee(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=gf(new an({color:"#ffffff",vertexColors:!0,gradientMap:iu}),.85,.06,"paint-l",r),a=(Q,pe)=>Object.assign(new Ee(Q),{gloss:pe}),c=a("#9fd8c8",1),u=a("#eeece4",.6),d=a("#2a2c33",.35),p=a("#1b1c20",.04),v=a("#c8ccd2",.8),m=a("#d4d8de",1.3),l=(Q,pe)=>{let Te=Q.attributes.position.count,K=new Float32Array(Te*4);for(let ee=0;ee<Te;ee++)K.set([pe.r,pe.g,pe.b,pe.gloss],ee*4);return Q.setAttribute("color",new Je(K,4)),Q},x=gf(new an({color:"#ffffff",map:W2(),gradientMap:Jn}),1.2,.08,"glass-l",r),f=new an({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:Jn}),h=new an({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:Jn}),g=new an({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:Jn}),b=new an({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:Jn}),y=new an({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:Jn}),M=new on({map:G2()}),S=new Map,T=[],_=!1,E=new st,A=new Yn,P=new Sn,N=new z(1,1,1),I=(Q,pe,Te,K,ee,re=0,se=0,F=0)=>{let me=Q.index?Q.toNonIndexed():Q;if(pe.isColor&&(l(me,pe),pe=o),A.set(re,se,F),P.setFromEuler(A),E.compose(new z(Te,K,ee),P,N),me.applyMatrix4(E),_){T.push(me);return}S.has(pe)||S.set(pe,[]),S.get(pe).push(me)},R=a("#16171b",0),C=a("#2b3134",.15),U=a("#b9bfc6",.9),k=a("#4d5258",.4),W=a("#9a1c22",.6),O=1.7,V=.745,H=.3,ie=(Q,pe,Te)=>{let K=Math.min(1,Math.max(0,(Te-Q)/(pe-Q)));return K*K*(3-2*K)},fe=Q=>Q<.8?1.8:Q<1.22?1.8-.6*ie(.8,1.22,Q):1.2-.1*((Q-1.22)/(O-1.22))**2,et=Q=>1-.085*ie(1.15,1.8,Q),Re=(Q,pe)=>{let Te=V-pe,K=H+pe*.6,ee=fe(Q)-pe*(Q<0?.4:1),re=Math.max(.05,.1-pe*.5),se=Math.max(.06,(Q<.8?.17:.13)-pe*.5),F=[[0,K],[(Te-re)*.5,K],[Te-re,K]];for(let j=1;j<4;j++){let D=-Math.PI/2+j/8*Math.PI;F.push([Te-re+re*Math.cos(D),K+re+re*Math.sin(D)])}for(let j=0;j<=8;j++)F.push([Te,K+re+j/8*(ee-se-K-re)]);for(let j=1;j<5;j++){let D=j/10*Math.PI;F.push([Te-se+se*Math.cos(D),ee-se+se*Math.sin(D)])}F.push([Te-se,ee],[(Te-se)*.5,ee],[0,ee]);let me=F.map(([j,D])=>[j*et(D),D]);for(let j=F.length-2;j>0;j--)me.push([-me[j][0],me[j][1]]);return me};{let Q=[];for(let w=0;w<=6;w++){let G=w/6*Math.PI/2;Q.push([-O+.2*(1-Math.cos(G)),.2*(1-Math.sin(G))])}for(let w=-O+.2+.12;w<.78;w+=.13)Q.push([w,0]);for(let w=.8;w<1.225;w+=.06)Q.push([w,0]);for(let w of[1.3,1.39])Q.push([w,0]);for(let w=6;w>=0;w--){let G=w/6*Math.PI/2;Q.push([O-.22*(1-Math.cos(G)),.22*(1-Math.sin(G))])}let K=[],ee=[],re=Q.map(([w,G])=>Re(w,G)),se=re[0].length;re.forEach((w,G)=>w.forEach(([q,B])=>K.push(q,B,Q[G][0])));for(let w=0;w<re.length-1;w++)for(let G=0;G<se;G++){let q=w*se+G,B=w*se+(G+1)%se,le=q+se,_e=B+se;ee.push(q,B,le,B,_e,le)}for(let[w,G]of[[0,-1],[re.length-1,1]]){let q=K.length/3,B=re[w];K.push(0,(B[0][1]+B[se/2|0][1])/2,Q[w][0]);for(let le=0;le<se;le++){let _e=w*se+le,oe=w*se+(le+1)%se;G<0?ee.push(q,oe,_e):ee.push(q,_e,oe)}}let F=new yt;F.setAttribute("position",new Je(K,3)),F.setIndex(ee),F.computeVertexNormals();{let w=F.attributes.normal,G=se*10+12;if(w.getX(G)<0){for(let q=0;q<ee.length;q+=3){let B=ee[q+1];ee[q+1]=ee[q+2],ee[q+2]=B}F.setIndex(ee),F.computeVertexNormals()}}F.setAttribute("uv",new Je(new Float32Array(K.length/3*2),2));let me=F.toNonIndexed(),j=me.attributes.position,D=new Float32Array(j.count*4);for(let w=0;w<j.count;w+=3){let G=(j.getY(w)+j.getY(w+1)+j.getY(w+2))/3,q=(j.getZ(w)+j.getZ(w+1)+j.getZ(w+2))/3,B=G>1.665&&q<.84&&q>-1.52?u:c;for(let le=0;le<3;le++)D.set([B.r,B.g,B.b,B.gloss],(w+le)*4)}me.setAttribute("color",new Je(D,4)),I(me,o,0,0,0)}I(new wn(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let He=(Q,pe,Te,K,ee)=>{let re=new yt,se=[],F=[],me=[],j=[];for(let D=0;D<=Te;D++)for(let w=0;w<=pe;w++){let G=w/pe,q=D/Te,B=Q(G,q);se.push(B[0]+B[3]*.004,B[1]+B[4]*.004,B[2]+B[5]*.004),F.push(B[3],B[4],B[5]),me.push(G,q)}for(let D=0;D<Te;D++)for(let w=0;w<pe;w++){let G=D*(pe+1)+w,q=G+1,B=G+pe+1,le=B+1;j.push(G,q,le,G,le,B)}re.setAttribute("position",new Je(se,3)),re.setAttribute("normal",new Je(F,3)),re.setAttribute("uv",new Je(me,2)),re.setIndex(j);{let D=new z().fromArray(se,0),w=new z().fromArray(se,3),G=new z().fromArray(se,(pe+1)*3),q=new z().fromArray(F,0);if(w.sub(D).cross(G.sub(D)).dot(q)<0){for(let B=0;B<j.length;B+=3){let le=j[B+1];j[B+1]=j[B+2],j[B+2]=le}re.setIndex(j)}}return Tm(re,K,ee)},J=Q=>{let Te=V*(et(Q+.01)-et(Q-.01))/.02,K=Math.hypot(1,Te);return[1/K,-Te/K]},Y=Q=>{let pe=.8,Te=1.22;for(let K=0;K<24;K++){let ee=(pe+Te)/2;fe(ee)>Q?pe=ee:Te=ee}return pe};for(let Q of[-1,1]){let pe=Q<0,Te=(K,ee,re)=>I(He((se,F)=>{let me=1.21+F*.39,j=Q>0?ee(me)+(K(me)-ee(me))*se:K(me)+(ee(me)-K(me))*se,[D,w]=J(me);return[Q*V*et(me),me,j,Q*D,w,0]},1,6,re,!1),x,0,0,0);Te(()=>.06,K=>Y(K)-.07,2),Te(()=>-.72,()=>-.08,3),Te(()=>-1.42,()=>-.84,0),I(new Gt(.012,.41,.07),d,Q*.731,1.405,-.01,0,0,-Q*.07),I(new Gt(.014,.022,2.42),R,Q*.748,1.2,-.26);for(let[K,ee]of[[.8,.64],[-.06,.42],[-.76,.64]])I(new Gt(.008,1.17-ee,.012),C,Q*.749,(ee+1.17)/2,K);I(new Gt(.02,.028,.13),C,Q*.752,1.06,.06),I(new Gt(.02,.028,.13),C,Q*.752,1.06,-.2),I(new Gt(.01,.022,.62),C,Q*.749,1.155,-1.08);for(let K of[1.12,-1.12])I(new Vs(.345,18,0,Math.PI),R,Q*.749,.29,K,0,Q*Math.PI/2,0),I(new ca(.35,.024,5,18,Math.PI),d,Q*.752,.29,K,0,Q*Math.PI/2,0);I(new wn(.1,.12,.2,2,.04),c,Q*.83,1.24,1.02),I(new Gt(.07,.035,.05),d,Q*.775,1.2,1.03),I(new wn(.16,.4,.05,3,.075),m,Q*.56,.95,-1.703),I(new wn(.13,.37,.05,3,.062),f,Q*.56,.95,-1.716),I(new wn(.036,.27,.02,2,.016),h,Q*.56,.95,-1.742),I(new wn(.11,.06,.04,2,.02),b,Q*.56,.69,-1.707)}{let Q=new Or,pe=.52,Te=1.15,K=1.66,ee=.07;Q.moveTo(-pe+ee,Te),Q.lineTo(pe-ee,Te),Q.absarc(pe-ee,Te+ee,ee,-Math.PI/2,0),Q.lineTo(pe,K-ee),Q.absarc(pe-ee,K-ee,ee,0,Math.PI/2),Q.lineTo(-pe+ee,K),Q.absarc(-pe+ee,K-ee,ee,Math.PI/2,Math.PI),Q.lineTo(-pe,Te+ee),Q.absarc(-pe+ee,Te+ee,ee,Math.PI,Math.PI*1.5);let re=new aa(Q,6),se=re.attributes.position,F=re.attributes.uv;for(let me=0;me<se.count;me++){let j=se.getX(me),D=se.getY(me),w=(D-Te)/(K-Te);F.setXY(me,(j+pe)/(2*pe),w),se.setX(me,j*(1-.08*w))}I(Tm(re,1),x,0,0,-O-.004,0,Math.PI,0)}I(new wn(.36,.04,.03,2,.014),g,0,1.69,-1.712),I(He((Q,pe)=>{let Te=1.19-pe*.36,K=fe(Te),ee=.56-.07*pe,re=.005,se=(fe(Te+re)-fe(Te-re))/(2*re),F=Math.hypot(1,se);return[(Q*2-1)*ee,K,Te,0,1/F,-se/F]},2,7,0,!1),x,0,0,0),I(new wn(.46,.25,.012,2,.05),a("#86bdb0",.6),0,.73,-1.701),I(new nn(.34,.17),M,0,.72,-1.709,0,Math.PI,0),I(new wn(.25,.034,.03,2,.013),m,0,.9,-1.708);for(let Q of[-1,1])I(new Gt(.01,.56,.006),C,Q*.47,.85,-1.703);I(new Gt(.95,.01,.006),C,0,.565,-1.703),I(new wn(1.5,.2,.26,3,.08),c,0,.44,-1.6),I(new wn(1.38,.08,.22,2,.03),d,0,.33,-1.61);for(let Q of[-1,1])I(new Gt(.13,.035,.01),W,Q*.56,.44,-1.731);I(new fi(.036,.036,.12,12),m,.46,.29,-1.68,Math.PI/2,0,0),I(new fi(.024,.024,.124,10),R,.46,.29,-1.68,Math.PI/2,0,0);for(let Q of[-1,1])I(new wn(.4,.26,.04,2,.06),d,Q*.42,.85,1.702),I(new fi(.105,.105,.03,16),y,Q*.46,.85,1.72,Math.PI/2,0,0),I(new fi(.055,.055,.03,12),y,Q*.3,.85,1.718,Math.PI/2,0,0),I(new wn(.1,.06,.04,2,.015),b,Q*.52,.66,1.705),I(new Gt(.46,.014,.014),R,Q*.25,1.215,1.2,-.3,Q*.12,0);I(new wn(.36,.12,.03,2,.03),R,0,.84,1.704);for(let Q=0;Q<3;Q++)I(new Gt(.32,.012,.012),C,0,.805+Q*.035,1.722);I(new wn(1.52,.24,.22,2,.07),d,0,.44,1.62),I(new Gt(.7,.07,.02),R,0,.4,1.732),I(new Gt(.34,.17,.01),a("#f0cc38",.3),0,.62,1.733),I(new Gt(.3,.05,.004),a("#2f5a2f",.1),0,.6,1.739),_=!0;for(let[Q,pe]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){I(new fi(.29,.29,.19,24),p,Q,.29,pe,0,0,Math.PI/2),I(new fi(.195,.195,.194,20),U,Q,.29,pe,0,0,Math.PI/2),I(new fi(.155,.155,.198,16),k,Q,.29,pe,0,0,Math.PI/2);for(let Te=0;Te<5;Te++){let K=Te/5*Math.PI*2+.3;I(new Gt(.202,.03,.15),U,Q,.29-.085*Math.sin(K),pe+.085*Math.cos(K),K,0,0)}I(new fi(.045,.045,.206,10),v,Q,.29,pe,0,0,Math.PI/2)}_=!1;for(let[Q,pe]of S){let Te=new mt(Hf(pe),Q);Te.castShadow=Q!==x&&Q!==M&&Q!==g&&Q!==y&&Q!==h,Te.receiveShadow=!0,t.add(Te)}{let Q=new mt(Hf(T),o);Q.castShadow=Q.receiveShadow=!0,i.add(Q)}{let Te=document.createElement("canvas");Te.width=48,Te.height=96;let K=Te.getContext("2d"),ee=K.createImageData(48,96);for(let se=0;se<96;se++)for(let F=0;F<48;F++){let me=Math.max(0,Math.abs((F+.5)/48-.5)*2.1-.62),j=Math.max(0,Math.abs((se+.5)/96-.5)*2.05-.78),D=Math.hypot(me/.42,j/.24),w=Math.max(0,1-D),G=(se*48+F)*4;ee.data[G]=ee.data[G+1]=ee.data[G+2]=Math.round(255*w*w*(3-2*w)),ee.data[G+3]=255}K.putImageData(ee,0,0);let re=new mt(new nn(2.2,4.1),new on({color:0,alphaMap:new Zn(Te),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));re.rotation.x=-Math.PI/2,re.position.y=.03,re.renderOrder=3,i.add(re)}let Me=new Jt;Me.position.set(.02,1.19,-1.716),t.add(Me);let Le=new Gt(.52,.026,.02);Le.translate(.27,0,0);let we=new mt(l(Le,d),o);we.rotation.z=.18,Me.add(we);let We=0,Ke=new da(16773328,0,70,.55,.65,1.2);Ke.position.set(0,.8,1.6),Ke.target.position.set(0,0,18),t.add(Ke,Ke.target);let Be={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},pt=(Q,pe)=>pe*Math.tanh(Q/pe);return{group:i,lamps:n,lampCol:s,head:Ke,update(Q,pe,Te,K=0,ee=null){if(ee){let re=pt(-ee.lat*.016,.045),se=pt(-ee.lon*.008,.03);Be.rv+=((re-Be.roll)*55-Be.rv*8)*Q,Be.roll+=Be.rv*Q,Be.pv+=((se-Be.pitch)*60-Be.pv*9)*Q+ee.kick,Be.pitch+=Be.pv*Q,Be.yv+=((ee.road-Be.y)*85-Be.yv*8)*Q+ee.jolt,Be.y+=Be.yv*Q,e.rotation.set(Be.pitch,0,Be.roll),e.position.y=.35+Be.y}if(Be.br+=((ee?ee.brake:0)-Be.br)*Math.min(1,Q*14),f.emissiveIntensity=.35+Te*3.2+Be.br*(1.7+Te*2),g.emissiveIntensity=Be.br*(2.4+Te*1.6),h.emissiveIntensity=1+Te*3+Be.br*(2+Te*2),K>.15||We%2.6>.01){We+=Q;let re=We%2.6/2.6,se=me=>me*me*(3-2*me),F=re<.25?se(re/.25):re<.5?se(1-(re-.25)/.25):0;we.rotation.z=.18+F*2.5,K<=.15&&re>=.5&&(We=0)}Ke.intensity=Te*60,y.emissiveIntensity=.15+Te*2.6}}}var uo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var oi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},X2=new vs(-1,1,1,-1,0,1),Gf=class extends yt{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}},q2=new Gf,Cs=class{constructor(e){this._mesh=new mt(q2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,X2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ho=class extends oi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$s.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Cs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fa=class extends oi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},gu=class extends oi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var vu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ie);this._width=n.width,this._height=n.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ho(uo),this.copyPass.material.blending=kn,this.timer=new pa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fa!==void 0&&(o instanceof Fa?n=!0:o instanceof gu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var xu=class extends oi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ee}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var wm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var fo=class i extends oi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new Ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(r,o,{type:hn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let p=new Ft(r,o,{type:hn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let v=new Ft(r,o,{type:hn,depthBuffer:!1});v.texture.name="UnrealBloomPass.v"+d,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),r=Math.round(r/2),o=Math.round(o/2)}let a=wm;this.highPassUniforms=$s.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=$s.clone(uo.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader,premultipliedAlpha:!0,blending:Qi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ee,this._oldClearAlpha=1,this._basic=new on,this._fsQuad=new Cs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],c=o+1<e?t[o+1]:0,u=a+c;s.push((o*a+(o+1)*c)/u),r.push(u)}return new xt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};fo.BlurDirectionX=new Ie(1,0);fo.BlurDirectionY=new Ie(0,1);var Wf=class extends oi{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Ft(4,4,{type:hn,depthBuffer:!1,minFilter:zt,magFilter:zt,generateMipmaps:!1}),this.mat=new xt({uniforms:{tDiffuse:{value:null},uTexel:{value:new Ie(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new Cs(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},Y2={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Ie(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Ie(1/1280,1/720)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function Am(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new Ie),a=new Ft(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:hn,samples:n}),c=new vu(i,a);c.addPass(new xu(e,t));let u=new Wf;c.addPass(u);let d=new fo(new Ie(o.x*r*.5,o.y*r*.5),.42,.55,.86);c.addPass(d);let p=new ho(Y2);p.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},p.material.toneMapped=!1,c.addPass(p);let v=c.render.bind(c);return c.render=m=>{p.uniforms.toneMappingExposure.value=i.toneMappingExposure,v(m)},{composer:c,bloom:d,grade:p,refl:u}}function Rm(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let K=0;K<2;K++){let ee=s.getChannelData(K);for(let re=0;re<n;re++)ee[re]=(Math.random()*2-1)*Math.pow(1-re/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=900,a.Q.value=.3;let c=e.createGain();c.gain.value=.11,a.connect(c),c.connect(t),c.connect(r);let u=(K,ee)=>{let re=e.createBuffer(1,e.sampleRate*K,e.sampleRate),se=re.getChannelData(0),F=0;for(let me=0;me<se.length;me++)ee?(F=(F+.02*(Math.random()*2-1))/1.02,se[me]=F*3.5):se[me]=Math.random()*2-1;return re},d=(K,ee,re)=>{let se=e.createBufferSource();se.buffer=K,se.loop=!0;let F=e.createBiquadFilter();F.type=ee,F.frequency.value=re;let me=e.createGain();return me.gain.value=0,se.connect(F),F.connect(me),me.connect(t),se.start(),{f:F,g:me}},p=d(u(2,!0),"lowpass",400),v=d(u(3,!1),"lowpass",700);v.g.connect(r);let m=d(u(2,!1),"bandpass",5200);m.f.Q.value=6;let l=d(u(2,!0),"lowpass",240),x=d(u(3,!1),"bandpass",2600);x.f.Q.value=.35;let f=d(u(2,!0),"lowpass",520),h=d(u(2,!1),"bandpass",1500);h.f.Q.value=.7;let g=e.createBiquadFilter(),b=e.createGain(),y=e.createOscillator(),M=e.createOscillator(),S=e.createGain();y.type="sawtooth",M.type="triangle",g.type="lowpass",g.frequency.value=320,g.Q.value=.6,b.gain.value=0,S.gain.value=.5,y.connect(g),M.connect(S),S.connect(g),g.connect(b),b.connect(t),y.start(),M.start();let T=d(u(3,!1),"bandpass",750);T.f.Q.value=.6;let _=d(u(3,!0),"lowpass",420),E=d(u(2,!0),"lowpass",140),A=u(.03,!1),P=0;function N(K,ee){let re=e.createBufferSource(),se=e.createBiquadFilter(),F=e.createGain();re.buffer=A,se.type="bandpass",se.frequency.value=1800+Math.random()*2600,se.Q.value=1.2,F.gain.setValueAtTime(ee*(.02+Math.random()*.03),K),F.gain.exponentialRampToValueAtTime(1e-4,K+.03),re.connect(se),se.connect(F),F.connect(t),re.start(K),re.stop(K+.04)}let I=0,R=0;function C(K,ee){let re=e.createOscillator(),se=e.createOscillator(),F=e.createGain(),me=e.createBiquadFilter();me.type="bandpass",me.frequency.value=1150,me.Q.value=2.2,re.type="square",re.frequency.value=745,se.type="triangle",se.frequency.value=1490,F.gain.setValueAtTime(0,K),F.gain.linearRampToValueAtTime(.085*ee,K+.004),F.gain.exponentialRampToValueAtTime(1e-4,K+.3),re.connect(me),se.connect(me),me.connect(F),F.connect(t),F.connect(r),re.start(K),se.start(K),re.stop(K+.33),se.stop(K+.33)}function U(K,ee){let re=e.createOscillator(),se=e.createGain();re.type="sine",re.frequency.setValueAtTime(110,K),re.frequency.exponentialRampToValueAtTime(48,K+.12),se.gain.setValueAtTime(1e-4,K),se.gain.linearRampToValueAtTime(.22*ee,K+.006),se.gain.exponentialRampToValueAtTime(1e-4,K+.17),re.connect(se),se.connect(t),re.start(K),re.stop(K+.2)}let k=e.createGain();k.gain.value=1,k.connect(t);let W=e.createGain();W.gain.value=.35,k.connect(W),W.connect(r);let O=(K=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return k;let ee=e.createStereoPanner();return ee.pan.value=K,ee.connect(k),ee};function V(K,ee,re,se,F,me,j="sine",D=0){let w=e.createOscillator(),G=e.createGain();if(w.type=j,w.frequency.setValueAtTime(ee,K),w.frequency.exponentialRampToValueAtTime(re,K+se),D){let q=e.createOscillator(),B=e.createGain();q.frequency.value=D,B.gain.value=ee*.012,q.connect(B),B.connect(w.frequency),q.start(K),q.stop(K+se+.05)}return G.gain.setValueAtTime(1e-4,K),G.gain.linearRampToValueAtTime(F,K+Math.min(.04,se*.25)),G.gain.setValueAtTime(F,K+se*.7),G.gain.exponentialRampToValueAtTime(1e-4,K+se),w.connect(G),G.connect(me),w.start(K),w.stop(K+se+.02),G}function H(K,ee){let re=O(),se=2+Math.floor(Math.random()*4),F=3200+Math.random()*1500;for(let me=0;me<se;me++){let j=K+me*(.09+Math.random()*.07);V(j,F,F*(1.2+Math.random()*.3),.06,ee*.022,re)}}function ie(K,ee){let re=O();V(K,1120,1390,1,ee*.03,re,"sine",5.5),V(K+1.15,2350,2150,.14,ee*.03,re),V(K+1.32,1700,1520,.13,ee*.028,re),V(K+1.5,2750,2480,.36,ee*.032,re)}function fe(K,ee){let re=O(),se=1+Math.floor(Math.random()*3);for(let F=0;F<se;F++){let me=K+F*.48,j=e.createOscillator(),D=e.createBiquadFilter(),w=e.createGain();j.type="sawtooth",j.frequency.setValueAtTime(560,me),j.frequency.exponentialRampToValueAtTime(420,me+.32),D.type="bandpass",D.frequency.value=1150,D.Q.value=1.6,w.gain.setValueAtTime(1e-4,me),w.gain.linearRampToValueAtTime(ee*.03,me+.03),w.gain.exponentialRampToValueAtTime(1e-4,me+.36),j.connect(D),D.connect(w),w.connect(re),j.start(me),j.stop(me+.4)}}function et(K,ee){let re=O(),se=2+Math.floor(Math.random()*2);for(let F=0;F<se;F++)V(K+F*.42,1750,1150,.36,ee*.022,re,"triangle",11)}function Re(K,ee){let re=O(),se=e.createOscillator(),F=e.createBiquadFilter(),me=e.createGain(),j=240+Math.random()*220,D=5+Math.floor(Math.random()*4);se.type="square",se.frequency.value=j,F.type="bandpass",F.frequency.value=j*2.4,F.Q.value=3,me.gain.setValueAtTime(1e-4,K);for(let w=0;w<D;w++){let G=K+w*.038;me.gain.linearRampToValueAtTime(ee*.014,G+.008),me.gain.linearRampToValueAtTime(1e-4,G+.028)}se.connect(F),F.connect(me),me.connect(re),se.start(K),se.stop(K+D*.038+.05)}function He(K,ee){let re=O(),se=4300+Math.random()*700;for(let F=0;F<3;F++)V(K+F*.055,se,se*1.01,.035,ee*.009,re)}function J(K,ee){let re=O(0);for(let[se,F,me]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let j=e.createOscillator(),D=e.createGain();j.type="sine",j.frequency.value=se,j.detune.value=(Math.random()-.5)*8,D.gain.setValueAtTime(1e-4,K),D.gain.linearRampToValueAtTime(ee*.05*F,K+.03),D.gain.exponentialRampToValueAtTime(1e-4,K+me),j.connect(D),D.connect(re),j.start(K),j.stop(K+me+.1)}}function Y(K,ee){let re=O();for(let se of[K,K+.22])V(se,2650,2600,.5,ee*.018,re),V(se,3950,3900,.35,ee*.008,re)}let Me={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Le=K=>K>1e-4?-Math.log(1-Math.random()*.98)/K:1e9,we=K=>440*Math.pow(2,(K-69)/12),We=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Ke=[72,74,76,79,81,84,86,88],Be=0,pt=e.currentTime+.2,Q=e.currentTime+3;function pe(K){let ee=We[Be++%We.length],re=11;for(let se of ee)for(let F of[-5,5]){let me=e.createOscillator(),j=e.createGain();me.type=F<0?"sine":"triangle",me.frequency.value=we(se),me.detune.value=F,j.gain.setValueAtTime(0,K),j.gain.linearRampToValueAtTime(.18,K+3.5),j.gain.setValueAtTime(.18,K+re-4),j.gain.linearRampToValueAtTime(0,K+re+1),me.connect(j),j.connect(a),me.start(K),me.stop(K+re+1.2)}}function Te(K){let ee=Ke[Math.floor(Math.random()*Ke.length)],re=e.createOscillator(),se=e.createOscillator(),F=e.createGain(),me=e.createGain();re.type=se.type="sine",re.frequency.value=we(ee),se.frequency.value=we(ee)*2.01,me.gain.value=.25,se.connect(me),me.connect(F),F.gain.setValueAtTime(0,K),F.gain.linearRampToValueAtTime(.05,K+.02),F.gain.exponentialRampToValueAtTime(1e-4,K+4),re.connect(F),F.connect(r),F.connect(t),re.start(K),se.start(K),re.stop(K+4.2),se.stop(K+4.2)}return{ac:e,muted:!1,tyres:h,engG:b,bump(K){U(e.currentTime+.01,K)},update(K,ee,re,se={}){let F=e.currentTime;if((se.bell||0)>.01)for(I<F&&(I=F+.02);I<F+.12;)C(I,se.bell),I+=.41;let me=se.rain||0;x.g.gain.setTargetAtTime(me*.05,F,.6),f.g.gain.setTargetAtTime(me*.05,F,.6);let j=(se.wetRoad||0)*Math.min(1,K)**1.5,D=.8+.2*Math.sin(F*2.3)*Math.sin(F*.9+1);if(h.g.gain.setTargetAtTime(j*.045*D,F,.4),h.f.frequency.setTargetAtTime(900+1500*Math.min(K,2),F,.4),me>.05&&se.roof)for(P<F&&(P=F+.02);P<F+.12;)N(P,me),P+=.04+Math.random()*.12/me;let w=se.water||0,G=.6+.4*Math.sin(F*1.3)*Math.sin(F*.37);T.g.gain.setTargetAtTime(w*.035*G,F,.25),T.f.frequency.setTargetAtTime(600+400*G,F,.25);let q=.35+.65*Math.pow(.5+.5*Math.sin(F*.23)*Math.sin(F*.071+2),2),B=se.rush||0;_.g.gain.setTargetAtTime(((ee.mountain||0)+(ee.snow||0)*.7)*.06*q+B*.055,F,.8),_.f.frequency.setTargetAtTime(260+420*q+B*500,F,.8);let le=se.train||0;if(l.g.gain.setTargetAtTime(le*.16,F,.2),le>.04)for(R<F&&(R=F+.02);R<F+.12;)U(R,le),U(R+.15,le*.8),R+=1.2;for(;pt<F+1;)pe(pt),pt+=8;Q<F+.5&&(Te(Q),Q+=1.5+Math.random()*4.5);let _e=se.tunnel||0;{let X=se.speed||0,Pe=se.load||0,he=850+2400*(1-Math.exp(-X/15))+Math.max(0,X-25)*60+Pe*1300,De=he/40;y.frequency.setTargetAtTime(De,F,.25),M.frequency.setTargetAtTime(De*2,F,.25),g.frequency.setTargetAtTime(200+he*.08+Pe*260,F,.3),b.gain.setTargetAtTime((.008+.01*Math.min(1,X/15)+.024*Pe)*(1-.6*(se.rush||0))*(se.roof===!1?.5:1)*(1+.7*_e),F,.3)}p.g.gain.setTargetAtTime((.03+K*.06)*(1+1.6*_e),F,.35),p.f.frequency.setTargetAtTime((250+K*500)*(1+.5*_e),F,.35),E.g.gain.setTargetAtTime(_e*.07,F,.4),o.gain.setTargetAtTime(.55+.6*_e,F,.4);let oe=.5+.5*Math.sin(F*.55)*Math.sin(F*.21+1);v.g.gain.setTargetAtTime(ee.coast*(.012+oe*.05),F,.3),v.f.frequency.setTargetAtTime(400+oe*900,F,.3);let ce=1-Math.min(1,me*1.4),de=1-re,Ce=se.dusk||0,ve=ee.snow||0,xe=1-ve,Ue={sparrow:re*ce*.22*(.3+ee.city*.5+ee.sakura+ee.country*.8+ee.coast*.2+(ee.mountain||0)*.5)*(1-ve*.8),uguisu:re*ce*ee.sakura*.06,crow:ce*(Ce*.14+re*(ee.city+ee.country+(ee.mountain||0)*1.5+ve*2.5)*.012),gull:re*ee.coast*ce*.16,frog:de*(ee.country*5+ee.sakura*.6+ee.coast*.3)*(1+me*.6)*xe,cricket:de*ce*(1.6-ee.city*1.1+(ee.mountain||0)*.8)*xe,bike:re*ce*ee.city*.014,bell:ve*.022+(ee.mountain||0)*.006},je={sparrow:H,uguisu:ie,crow:fe,gull:et,frog:Re,cricket:He,bike:Y,bell:J};for(let X in Ue)F<Me[X]||(Ue[X]>1e-4&&je[X](F+.05,.6+Math.random()*.4),Me[X]=F+Math.max(.12,Le(Ue[X]||1e-6)));let tt=.5+.5*Math.sin(F*7)*Math.sin(F*.4);m.g.gain.setTargetAtTime((ee.country+ee.sakura*.3)*re*.006*tt*(1-(ee.snow||0)),F,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function Cm(i){let t=new nn(.075,.05),n=new on({color:16777215,side:Tn}),s=new Ki(t,n,420);s.frustumCulled=!1,s.count=0;let r=new Ee("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(y=>new Ee(y));for(let y=0;y<420;y++)s.setColorAt(y,r);let a=Array.from({length:420},()=>({p:new z(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),c=new st,u=new Sn,d=new Yn,p=new z(1,1,1),v=new z,m=90,l=new Float32Array(m*3),x=Array.from({length:m},()=>({p:new z(1e9,0,0),ph:Math.random()*6.28})),f=new yt;f.setAttribute("position",new Ot(l,3));let h=new Fr({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Qi,opacity:0}),g=new $o(f,h);g.frustumCulled=!1;let b=(y,M,S,T,_)=>{let E=_?8+Math.random()*42:-4+Math.random()*50,A=(Math.random()-.5)*40;y.p.set(M.x+S.x*E+T.x*A,M.y-1+Math.random()*9,M.z+S.z*E+T.z*A)};return{group:[s,g],shift(y,M){for(let S of a)S.p.x-=y,S.p.z-=M;for(let S of x)S.p.x-=y,S.p.z-=M},update(y,M,S,T,_,E,A,P,N,I=0){let R=Math.floor(420*Math.min(1,E*1.1+I*.55)),C=!1;s.count=R;for(let k=0;k<R;k++){let W=a[k];v.subVectors(W.p,S);let O=v.x*T.x+v.z*T.z,V=v.x*_.x+v.z*_.z;if(W.p.x>1e8||O<-6||O>55||Math.abs(V)>24||W.p.y<A-.5){b(W,S,T,_,W.p.x<1e8);let H=Math.random()*(E+I)<I;(H!==W.leaf||H)&&(W.leaf=H,s.setColorAt(k,H?o[Math.floor(Math.random()*o.length)]:r),C=!0)}W.p.y-=W.v*y,W.p.x+=Math.sin(M*.7+W.ph)*.4*y+.25*y,W.p.z+=Math.cos(M*.5+W.ph)*.3*y,d.set(M*W.sp+W.ph,M*W.sp*.7,W.ph),u.setFromEuler(d),p.setScalar(W.leaf?1.9:1),c.compose(W.p,u,p),s.setMatrixAt(k,c)}s.instanceMatrix.needsUpdate=!0,C&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let U=P*N;if(h.opacity=U,g.visible=U>.01,g.visible){for(let k=0;k<m;k++){let W=x[k];v.subVectors(W.p,S);let O=v.x*T.x+v.z*T.z,V=v.x*_.x+v.z*_.z;if(W.p.x>1e8||O<-4||O>60||Math.abs(V)>30){let H=2+Math.random()*55,ie=(Math.random()-.5)*55;W.p.set(S.x+T.x*H+_.x*ie,A+.3+Math.random()*2.2,S.z+T.z*H+_.z*ie)}W.p.x+=Math.sin(M*.6+W.ph*3)*.3*y,W.p.y+=Math.sin(M*.9+W.ph)*.2*y,W.p.z+=Math.cos(M*.5+W.ph*2)*.3*y,l[k*3]=W.p.x,l[k*3+1]=W.p.y,l[k*3+2]=W.p.z}f.attributes.position.needsUpdate=!0}}}}var ut=new URLSearchParams(location.search),po=ut.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();po&&document.body.classList.add("embed");ut.has("shot")&&document.body.classList.add("shot");j0(ut.has("seed")?parseInt(ut.get("seed")):Math.random()*1e9|0);np(ut.get("env")||"city");var An=i=>document.getElementById(i),mo=i=>{let e=An("loading");e&&(e.textContent=i)};async function Z2(){await new Promise(ye=>setTimeout(ye,30));let i=An("c"),e=new Yc({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ut.get("q")||(po||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?po?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=jt,e.toneMapping=ma,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Ws,e.debug.checkShaderErrors=ut.has("debug");let r=new Hs;r.fog=new Xo(13032946,.0019,700);let o=new Rn(52,innerWidth/innerHeight,.5,7e3),a=new Vr(16777215,3);a.castShadow=!0;let c=n==="low"?1024:n==="mid"?1536:2048;a.shadow.mapSize.set(c,c),pf(ut.has("pcf")?parseInt(ut.get("pcf")):1);let u=62,d=a.shadow.camera,p=new st,v=new st;Object.assign(d,{left:-u,right:u,top:u,bottom:-u,near:1,far:420});let m=new z(0,1,0),l=new z,x=new z,f=new z,h=new z(0,1,0),g=new z(0,150,60),b=new z,y=new z,M=null,S=0,T=0,_=0;a.shadow.updateMatrices=function(){d.position.copy(g),d.lookAt(b),d.updateMatrixWorld(),d.updateProjectionMatrix(),v.multiplyMatrices(d.matrixWorldInverse,p).multiply(d.matrixWorld),d.projectionMatrix.multiply(v),d.projectionMatrixInverse.copy(d.projectionMatrix).invert(),this._updateMatrix(d,this.matrix,this._frustum)};let E=!0;a.shadow.bias=-4e-4;let A=()=>{a.shadow.normalBias=ut.has("nb")?parseFloat(ut.get("nb")):1.5*2*u/a.shadow.mapSize.x};A();{let[ye,Ge]=(ut.get("graze")||"0,0.12").split(",").map(Number);up(ye,Ge)}r.add(a,a.target);let P=new Vr(16777215,0);P.castShadow=n!=="low"&&!ut.has("nocarsh");{let ye=ut.has("carsm")?parseInt(ut.get("carsm")):n==="high"?512:384;P.shadow.mapSize.set(ye,ye)}if(Object.assign(P.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),P.shadow.bias=-2e-4,P.shadow.normalBias=.025,r.add(P,P.target),P.castShadow){let ye=a.shadow.getFrustum(),Ge=P.shadow.getFrustum();for(let Ze of[mt,Zo]){let Ct=Ze.prototype.intersectsFrustum;Ze.prototype.intersectsFrustum=function(bt){return bt===Ge?this.userData.car===!0:(bt!==ye||this.userData.car!==!0)&&Ct.call(this,bt)}}}let N=new ha(10799359,13154464,1.6);r.add(N),mo("painting the town\u2026"),await new Promise(ye=>setTimeout(ye,10));let I=Tp();Cp(I);let R=Ep(e);Fp(R.cells),qe.uTuftV.value.set(R.tuftV[0],R.tuftV[1]);let C=gp(I.textures(e),R.tex),U=fp();U.update(e,0,0,0,0),mo("painting the clouds\u2026"),await new Promise(ye=>setTimeout(ye,10)),Bp(ut.has("leafd")?parseFloat(ut.get("leafd")):n==="high"?.72:.62),kp();let k=new eu,W=Mm(),O=bm(),V=new du(r,k,C,W,O),H=um();r.add(H);let ie=fm(hm(e));r.add(ie.group);let fe=dm();r.add(fe.group);let et=ym();r.add(et.mesh);let Re=Em();Re.group.rotation.order="YXZ",r.add(Re.group),Re.group.traverse(ye=>{ye.userData.car=!0});let He=Cm(C.glowTex);He.group.forEach(ye=>r.add(ye));let J=ut.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),Y=Am(e,r,o,{msaa:J==="msaa"?n==="high"?4:2:0,fxaa:J==="fxaa"});qe.uReflTex.value=Y.refl.rt.texture;let Me=new z,Le=new z,we=ut.get("refl")||"auto",We=ut.has("backlit")?parseFloat(ut.get("backlit")):1,Ke=ut.has("lightson")?parseFloat(ut.get("lightson")):-1,Be=new z,pt=ut.has("haze")?parseFloat(ut.get("haze")):1,Q=xp();r.add(Q.group);let pe=_p();r.add(pe.group);let Te=pm(ut),K=gm(),ee=mm();r.add(K.mesh,ee.mesh);let re=vm();r.add(re.mesh);let se=xm();r.add(se.mesh);let F=new Ee,me=new Ee,j=new Tt,D=_m();r.add(D.mesh);let w=Te.W.rain,G=.4,q=5.5,B={s:Math.max(100,parseFloat(ut.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:kt(parseFloat(ut.get("t"))||.4,0,.999),todPaused:ut.has("freeze"),dist:0,spray:ut.has("nospray")?0:1,cam:{low:1,eye:2,top:3,film:4}[ut.get("cam")]??(po?4:0)},le=!1;mo("building the road\u2026"),await new Promise(ye=>setTimeout(ye,10));let _e=po?620:V.ahead;V.ahead=260;let oe=ut.has("detail")?parseFloat(ut.get("detail")):380,ce=ut.has("farleaf")?parseFloat(ut.get("farleaf")):540;for(;V.update(B.s,1e9););V.flush(),V.ahead=_e;{mo("preparing the light\u2026"),await new Promise(bt=>setTimeout(bt,10));let ye=new Jt,Ge=new yt;Ge.setAttribute("position",new Je([0,0,0,.01,0,0,0,.01,0],3)),Ge.setAttribute("normal",new Je([0,1,0,0,1,0,0,1,0],3)),Ge.setAttribute("uv",new Je([0,0,1,0,0,1],2)),Ge.setAttribute("color",new Je([1,1,1,1,1,1,1,1,1],3));let Ze=[C.color,C.atlas,C.foliage,C.leaf,C.lamp,C.sig,C.sodium,C.decal,C.pool,W,O];for(let bt=0;bt<ki.length;bt++)Ze.push(Ia([ki[bt]])),Ze.push(Ia([ki[bt],ki[(bt+1)%ki.length]]));for(let bt of Ze){let Nt=new mt(Ge,bt);Nt.castShadow=Nt.receiveShadow=!0,Nt.frustumCulled=!1,ye.add(Nt)}ye.position.set(0,0,0),r.add(ye),a.target.position.set(0,0,0),a.position.set(0,150,60);let Ct=[K.mesh,ee.mesh,re.mesh,se.mesh,pe.group,Q.group,et.mesh].filter(bt=>!bt.visible);for(let bt of Ct)bt.visible=!0;e.setRenderTarget(Y.composer.readBuffer),e.compile(r,o),e.render(r,o),e.setRenderTarget(null);for(let bt of Ct)bt.visible=!1;r.remove(ye),Ge.dispose(),Y.bloom.enabled=Y.refl.enabled=!0,Y.composer.render(0),Y.bloom.enabled=Y.refl.enabled=!1}let de={k:Math.ceil((B.s-js)/Ks),phase:"idle",raise:1,decided:!1,t2:0},Ce={},ve={},xe={},Ue=new z,je=new z,tt=new z,X=!1,Pe=new z,he=new z,De=An("spd"),ze=An("dist"),Se=An("clock"),nt=An("zone"),Qe=An("start"),Dt=An("hint"),lt=null,Wn=null,Kn=0,Ba=0;function _u(ye){!le||ye===Wn||(Wn=ye,nt.querySelector(".jp").textContent=Aa[ye].jp,nt.querySelector(".en").textContent=Aa[ye].en,nt.classList.add("on"),clearTimeout(Kn),Kn=setTimeout(()=>nt.classList.remove("on"),5200))}function rr(){if(!le){if(le=!0,document.body.classList.remove("pre"),!ut.has("auto"))try{lt=Rm(),lt&&lt.ac.resume()}catch{lt=null}Qe.style.opacity=0,setTimeout(()=>Qe.remove(),1500),po||(Dt.style.opacity=.75,setTimeout(()=>Dt.style.opacity=0,9e3))}}let xn={};addEventListener("keydown",ye=>{xn[ye.key]=!0,(ye.key==="m"||ye.key==="M")&&vo(),(ye.key==="t"||ye.key==="T")&&Ii(),(ye.key==="c"||ye.key==="C")&&_o(),(ye.key==="r"||ye.key==="R")&&Mo(),!le&&(ye.key===" "||ye.key==="Enter")&&rr()}),addEventListener("keyup",ye=>{xn[ye.key]=!1});let rn=null;i.addEventListener("pointerdown",ye=>{rn={id:ye.pointerId,x:ye.clientX,y:ye.clientY,sy:ye.clientY,sc:B.mult}});let go=ye=>kt(ye.sc*Math.exp(-((ye.y-ye.sy)/innerHeight)*3.4),G,q);addEventListener("pointermove",ye=>{rn&&ye.pointerId===rn.id&&(rn.x=ye.clientX,rn.y=ye.clientY,B.mult=go(rn))}),addEventListener("pointerup",()=>{rn=null}),addEventListener("pointercancel",()=>{rn=null}),i.addEventListener("touchstart",ye=>{let Ge=ye.changedTouches[0];rn={id:"touch",x:Ge.clientX,y:Ge.clientY,sy:Ge.clientY,sc:B.mult},ye.preventDefault()},{passive:!1}),i.addEventListener("touchmove",ye=>{if(!rn)return;let Ge=ye.changedTouches[0];rn.x=Ge.clientX,rn.y=Ge.clientY,B.mult=go(rn),ye.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{rn=null}),i.addEventListener("touchcancel",()=>{rn=null});function vo(){lt&&(lt.toggle(),An("snd").style.opacity=lt.muted?.4:1)}function Ii(){B.todPaused=!B.todPaused,An("tim").style.opacity=B.todPaused?.4:1}let Ps=[0,1,2,4],xo={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function _o(){B.cam=Ps[(Ps.indexOf(B.cam)+1)%Ps.length],An("cam").textContent=xo[B.cam]||"\u25D0",B.cam===4&&rs()}let Is=["chase","side","road","crane","eye","side","road"],Ht={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function rs(){let ye;do ye=Is[Math.floor(Math.random()*Is.length)];while(ye===Ht.last);{let Ge=pi(B.s+60);Ge&&Math.abs(B.s+60-Ge.s)<tn+120&&(ye=Math.random()<.6?"chase":"eye")}if(Object.assign(Ht,{type:ye,last:ye,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),ye==="road"){let Ge=B.s+40+Math.random()*18,Ze=In(Ge,"rw"),Ct=Math.random()<.6?-1:1,bt=Ct*(Ze+(Ct<0?.9:1.3)),Nt=k.at(Ge,{}),At=Nt.y+no(Ge,bt,Nt.y,Ze);Ht.anchor={x:Nt.x+Nt.rx*bt,y:Math.max(At,Nt.y)+1.05,z:Nt.z+Nt.rz*bt,s:Ge}}X=!1}let yo={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function Mo(){An("wx").textContent=yo[Te.cycle()]}An("wx").textContent=yo[Te.W.mode],An("cam").textContent=xo[B.cam]||"\u25D0",B.cam===4&&rs(),An("wx").onclick=ye=>{ye.stopPropagation(),Mo()},An("snd").onclick=ye=>{ye.stopPropagation(),vo()},An("tim").onclick=ye=>{ye.stopPropagation(),Ii()},An("cam").onclick=ye=>{ye.stopPropagation(),_o()};let Oa=0,yu=ye=>{let Ge=performance.now();Ge-Oa<120||(Oa=Ge,ye.cancelable&&ye.type!=="click"&&ye.preventDefault(),rr())};for(let ye of["touchstart","pointerdown","mousedown","click"])Qe.addEventListener(ye,yu,{passive:!1});let Mu=()=>{lt&&lt.ac.state!=="running"&&lt.ac.resume()};for(let ye of["touchend","click","keydown"])addEventListener(ye,Mu,{passive:!0});document.addEventListener("visibilitychange",()=>{lt&&(document.hidden?lt.ac.suspend():lt.ac.resume())});let Ls=!1,bo="",L=52,Z=0;function ae(){let ye=innerWidth,Ge=innerHeight,Ze=ye/Ge,Ct=ye+"x"+Ge+"@"+s;Ct!==bo&&(bo=Ct,e.setPixelRatio(s),e.setSize(ye,Ge,!1),Y.composer.setPixelRatio(s),Y.composer.setSize(ye,Ge),o.aspect=Ze,L=Ze>=1?52:kt(2*Math.atan(Math.tan(34*Math.PI/180)/Ze)*180/Math.PI,52,80),o.fov=L+Z,o.updateProjectionMatrix(),Y.grade.uniforms.uAspect.value=Ze,Y.grade.uniforms.uTexel.value.set(1/Y.composer.readBuffer.width,1/Y.composer.readBuffer.height),qe.uReflRes.value.set(Y.composer.readBuffer.width,Y.composer.readBuffer.height))}addEventListener("resize",()=>{Ls=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Ls=!0}),ae();let te=0;function ne(ye=!0){if(s>1.05)s=Math.max(1,s-.25),Ls=!0;else if(E)E=!1,Y.bloom.enabled=!1;else if(a.shadow.mapSize.x>1024)a.shadow.mapSize.set(1024,1024),A(),a.shadow.map&&(a.shadow.map.dispose(),a.shadow.map=null);else if(V.ahead>430)V.ahead=430;else return;if(te++,ye)try{localStorage.setItem("icd-q",String(te))}catch{}}try{let ye=parseInt(localStorage.getItem("icd-q")||"0");if(!ut.has("q"))for(let Ge=0;Ge<Math.min(ye,6);Ge++)ne(!1);te=Math.max(te,ye||0)}catch{}let ke=performance.now(),Fe=0,Oe=0,Ye=0,$e=()=>1-ge.night,gt=0,it=0,Ae=ut.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;Ae&&(Ae.gl=e.getContext(),Ae.tq=Ae.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let vt={p:-1,a:new z,b:new z,next:5},rt={lat:0,lon:0,road:0,jolt:0,kick:0,u:B.u,vu:0,v:0,s:B.s,yaw:0,brake:0,rk:NaN,rb:null},Bt=[-2.5335,-1.4665,1.4665,2.5335],Pt=[1.12,-1.12],_n=[-24.5,24.5];function Xe(ye){requestAnimationFrame(Xe);let Ge=performance.now();Ls&&(Ls=!1,ae());let Ze=Math.min(.05,Math.max(0,(ye-ke)/1e3));ke=ye,Fe+=Ze,B.steer=0,(xn.ArrowLeft||xn.a||xn.A)&&(B.steer=-1),(xn.ArrowRight||xn.d||xn.D)&&(B.steer=1),(xn.ArrowUp||xn.w||xn.W)&&(B.mult=kt(B.mult*Math.exp(Ze*.9),G,q)),(xn.ArrowDown||xn.s||xn.S)&&(B.mult=kt(B.mult*Math.exp(-Ze*.9),G,q)),rn&&Math.abs(rn.y-rn.sy)<30&&(B.steer=rn.x<innerWidth/2?-1:1),B.steer&&(B.lastInput=ye,B.uHome=B.u);let Ct=Qr(de.k);B.s-Ct>24&&(de.k++,Ct=Qr(de.k),Object.assign(de,{phase:"idle",raise:1,decided:!1}));let bt=Ra(Ct),Nt=Ct-B.s;bt&&!de.decided&&Nt<150&&(de.decided=!0,Nt>75&&le&&B.speed*B.speed/2.5<Nt-14&&(ut.has("xing")||si(de.k,99)<.8)&&(de.phase="warn",pe.start(Ct,si(de.k,7)<.5?1:-1,16))),de.phase==="warn"?(de.raise=Math.max(0,de.raise-Ze/6),pe.st.cleared&&(de.phase="clear",de.t2=0)):de.phase==="clear"?(de.raise=Math.max(0,de.raise-Ze/6),(de.t2+=Ze)>2.2&&(de.phase="raise")):de.phase==="raise"&&(de.raise=Math.min(1,de.raise+Ze/5),de.raise>=1&&(de.phase="idle"));let At=de.phase==="warn"||de.phase==="clear"||de.phase==="raise"&&de.raise<.25,Vt=In(B.s,"speed")*B.mult*(le?1:.55);if(de.phase!=="idle"&&de.raise<.8&&Nt>0){let Ne=Nt-11.2,ot=Ne>0?Math.sqrt(2*1.25*Ne):0;Vt=Math.min(Vt,ot),B.speed=Math.min(B.speed,ot)}ut.has("park")&&(Vt=0,B.speed=0),B.speed+=(Vt-B.speed)*Math.min(1,Ze*.5),B.s+=B.speed*Ze,B.dist+=B.speed*Ze;let jn=In(B.s,"rw");B.steer?B.u=kt(B.u+B.steer*Ze*2.4,-jn+.85,jn-.85):ye-B.lastInput>3e3&&(B.u+=(kt(B.uHome,-jn+.85,jn-.85)+Math.sin(Fe/11)*.1-B.u)*Math.min(1,Ze*.9)),!B.todPaused&&le&&(B.tod=(B.tod+Ze/480*(ge.night>.5?1.7:1))%1),am(B.tod),Te.update(Ze);let _t=Te.W.ov,yn=Te.W.rain;cm(_t,yn),w=kt(w+(yn>.25?Ze/18:-Ze/120),0,1);let Wi=performance.now();V.update(B.s,le?3.5:14);let So=performance.now();if(k.at(B.s,Ce),Math.abs(Ce.x-V.origin.x)>900||Math.abs(Ce.z-V.origin.z)>900){let Ne=Math.round(Ce.x)-V.origin.x,ot=Math.round(Ce.z)-V.origin.z;V.setOrigin(Math.round(Ce.x),Math.round(Ce.z)),Ue.x-=Ne,Ue.z-=ot,je.x-=Ne,je.z-=ot,He.shift&&He.shift(Ne,ot),D.shift(Ne,ot),re.shift(Ne,ot)}let xi=V.origin.x,_i=V.origin.z,Pm=(k.at(B.s+1.5,xe).y-k.at(B.s-1.5,ve).y)/3,Im=(xe.h-ve.h)/3;if(Re.group.position.set(Ce.x+Ce.rx*B.u-xi,Ce.y+.01,Ce.z+Ce.rz*B.u-_i),Ze>0){let Ne=rt.vu+((B.u-rt.u)/Ze-rt.vu)*Math.min(1,Ze*6),ot=(Ne-rt.vu)/Ze;rt.u=B.u,rt.vu=Ne,rt.lat=ot-B.speed*B.speed*Im,rt.lon+=((B.speed-rt.v)/Ze-rt.lon)*Math.min(1,Ze*8),rt.v=B.speed;let at=de.phase!=="idle"&&Nt>0&&Nt<20&&B.speed<.5;if(rt.brake=rt.lon<-.6||at?1:rt.lon>-.3?0:rt.brake,rt.yaw=-kt(Math.atan(Ne/Math.max(B.speed,6))*.8,-.1,.1),rt.road=.004*Math.sin(B.s*.48)+.003*Math.sin(B.s*.86+1.3),rt.jolt=rt.kick=0,bt)for(let Et=0;Et<4;Et++)for(let Wt=0;Wt<2;Wt++){let Xt=Ct+Bt[Et]-Pt[Wt];if(rt.s<Xt&&B.s>=Xt){let qt=.05+Math.min(B.speed,25)*.004;rt.jolt+=qt,rt.kick+=Wt?qt*.9:-qt*.9,lt&&lt.bump(.25+Math.min(B.speed,25)/50)}}{let Et=Math.round((B.s-to)/Qs);Et!==rt.rk&&(rt.rk=Et,rt.rb=Hi(B.s));let Wt=rt.rb;if(Wt)for(let Xt=0;Xt<2;Xt++)for(let qt=0;qt<2;qt++){let Xn=Wt.s+_n[Xt]-Pt[qt];if(rt.s<Xn&&B.s>=Xn){let Mn=.035+Math.min(B.speed,25)*.003;rt.jolt+=Mn,rt.kick+=qt?Mn*.9:-Mn*.9,lt&&lt.bump(.2+Math.min(B.speed,25)/60)}}}rt.s=B.s}Re.group.rotation.set(-Math.atan(Pm),Ce.h+rt.yaw,0);let Ds=pi(B.s);Ds&&Math.abs(B.s-Ds.s)<700?(k.at(Ds.s-sn,xe),qe.uTunA.value.set(xe.x-xi,xe.y,xe.z-_i),k.at(Ds.s+sn,xe),qe.uTunB.value.set(xe.x-xi,xe.y,xe.z-_i),qe.uTunR.value=In(Ds.s,"rw")+1.7):(qe.uTunA.value.set(0,-1e4,0),qe.uTunB.value.set(0,-1e4,0));let bu=Ds&&Math.abs(B.s+1-Ds.s)<sn-1.5?1:0;it+=(bu-it)*Math.min(1,Ze*(bu?1.6:.7)),qe.uCarPos.value.set(Re.group.position.x+Ce.fx*1.7,Re.group.position.y+.8,Re.group.position.z+Ce.fz*1.7),qe.uCarFwd.value.set(Ce.fx,-.05,Ce.fz).normalize(),qe.uHead.value=bu,Re.update(Ze,B.speed,Math.max(ge.night,it),yn,rt),Q.update(bt&&Nt>-24&&Nt<700?ou(k,Ct):null,V.origin,de.raise,At,Fe),pe.update(Ze,k,V.origin,Rt(.15,.8,ge.night),In(Ct,"rw")+3.2);let Su=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ut.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(ut.has("rig")){let[Ne,ot,at,Et]=ut.get("rig").split(",").map(Number);Object.assign(Su[0],{back:Ne,up:ot,ahead:at,lookY:Et})}let Ns=new z,To=6,Xf=B.cam===2;if(B.cam===4){Ht.t+=Ze;{let at=pi(B.s+30);at&&Math.abs(B.s+30-at.s)<tn+70&&Ht.type!=="chase"&&Ht.type!=="eye"&&(Ht.type="chase",Ht.t=0,Ht.dur=20,X=!1)}(Ht.t>Ht.dur+(Ht.type==="road"?8:0)||Ht.type==="road"&&Ht.anchor&&B.s>Ht.anchor.s+24)&&rs();let Ne=Re.group.position,ot=Ht.type;if(ot==="chase"||ot==="eye"){let at=Su[ot==="eye"?2:0];Xf=ot==="eye",k.at(B.s-at.back,ve),k.at(B.s+at.ahead,xe),tt.set(ve.x+ve.rx*B.u*at.cu-xi,ve.y+at.up,ve.z+ve.rz*B.u*at.cu-_i),Ns.set(xe.x+xe.rx*B.u*at.lu-xi,xe.y+at.lookY,xe.z+xe.rz*B.u*at.lu-_i)}else if(ot==="side"){k.at(B.s+1.5,ve);let at=Ut(B.s),Et=at.city+at.sakura>.5,Wt=In(B.s,"rw"),Xt=Ht.sideSign>0?Wt+(Et?1.45:3.4):-(Wt+1.5),qt=ve.y+no(B.s+1.5,Xt,ve.y,Wt);tt.set(ve.x+ve.rx*Xt-xi,Math.max(qt+1.55,ve.y+1.25),ve.z+ve.rz*Xt-_i),Ns.set(Ne.x+Ce.fx*2.5,Ne.y+.9,Ne.z+Ce.fz*2.5),To=4}else if(ot==="road"&&Ht.anchor)tt.set(Ht.anchor.x-xi,Ht.anchor.y,Ht.anchor.z-_i),Ns.set(Ne.x,Ne.y+.85,Ne.z),To=30;else{k.at(B.s-20,ve),k.at(B.s+34,xe);let at=14+Math.min(Ht.t,20)*.35;tt.set(ve.x+ve.rx*B.u*.4-xi,ve.y+at,ve.z+ve.rz*B.u*.4-_i),Ns.set(xe.x-xi,xe.y+1,xe.z-_i),To=3}}else{let Ne=Su[B.cam];k.at(B.s-Ne.back,ve),k.at(B.s+Ne.ahead,xe);let ot=B.u*Ne.cu,at=ot+(Ne.side||0);tt.set(ve.x+ve.rx*at-xi,ve.y+Ne.up,ve.z+ve.rz*at-_i),Ns.set(xe.x+xe.rx*B.u*Ne.lu-xi,xe.y+Ne.lookY,xe.z+xe.rz*B.u*Ne.lu-_i)}Re.group.visible=!Xf,B.cam===3?o.up.set(Ce.fx,0,Ce.fz):o.up.set(0,1,0),X||(Ue.copy(tt),je.copy(Ns),X=!0);let qf=1+Math.max(0,B.speed-12)/12;Ue.lerp(tt,1-Math.exp(-Ze*To*qf)),je.lerp(Ns,1-Math.exp(-Ze*Math.min(To,8)*qf));{let Ne=B.cam===3?0:Math.min(kt((B.speed-16)*.22,0,11),Math.max(0,84-L));Z+=(Ne-Z)*Math.min(1,Ze*1.5),Math.abs(o.fov-(L+Z))>.02&&(o.fov=L+Z,o.updateProjectionMatrix())}o.position.copy(Ue),o.lookAt(je),ut.has("yaw")&&o.rotateY(parseFloat(ut.get("yaw"))*Math.PI/180),ut.has("pitch")&&o.rotateX(parseFloat(ut.get("pitch"))*Math.PI/180),Pe.set(Ce.fx,0,Ce.fz),he.set(Ce.rx,0,Ce.rz);let $t=Ut(B.s);a.color.copy(ge.sunCol),a.intensity=ge.sunI;{let Ne=ge.lightDir;if(m.angleTo(Ne)>.1){let Mn=0;if(le&&!B.todPaused)for(let Bn=1;Bn<=60&&!(zf(B.tod+Bn*.001,y).angleTo(Ne)>.09);Bn++)Mn=Bn;zf(B.tod+Mn*.001,m),S=T=0}l.crossVectors(h,m).normalize(),x.crossVectors(m,l),f.set(Re.group.position.x+Ce.fx*26,Re.group.position.y,Re.group.position.z+Ce.fz*26),a.target.position.copy(f),a.position.copy(f).addScaledVector(Ne,200);let ot=2*u/a.shadow.mapSize.x,at=m.x/m.y-Ne.x/Ne.y,Et=m.z/m.y-Ne.z/Ne.y;ot!==_&&(_=ot,S=T=0);{let Mn=Math.round(Re.group.position.y);if(M===null)M=Mn;else if(Math.abs(Re.group.position.y-M)>3){let Bn=Mn-M;S-=Bn*(at*l.x+Et*l.z),T-=Bn*(at*x.x+Et*x.z),M=Mn}}let Wt=V.origin.x,Xt=V.origin.z,qt=f.dot(l)+Wt*l.x+Xt*l.z-S,Xn=f.dot(x)+Wt*x.x+Xt*x.z-T;f.addScaledVector(l,Math.round(qt/ot)*ot-qt).addScaledVector(x,Math.round(Xn/ot)*ot-Xn),b.copy(f),g.copy(f).addScaledVector(m,200),p.set(1,at,0,-M*at,0,1,0,0,0,Et,1,-M*Et,0,0,0,1)}P.target.position.set(Re.group.position.x,Re.group.position.y+.9,Re.group.position.z),P.position.copy(P.target.position).addScaledVector(ge.lightDir,12),N.color.copy(ge.hemiSky),N.groundColor.copy(ge.hemiGround),N.intensity=ge.hemiI;{let Ne=(1-ge.night)*(1-_t);if(Ne>.001){o.getWorldDirection(Be);let ot=Be.x,at=Be.z,Et=Math.hypot(ot,at)||1,Wt=ge.sunDir,Xt=0;for(let Xn=-2;Xn<=2;Xn++){let Mn=Xn*.3,Bn=Math.cos(Mn),Us=Math.sin(Mn),lr=(ot*Bn-at*Us)/Et,cr=(ot*Us+at*Bn)/Et,Eo=Math.max(0,lr*Wt.x+cr*Wt.z),ur=Eo*Eo;Xt+=ur*ur*ur}let qt=Xt/5*(.1+.35*ge.warm)*1.4*Ne*pt;ge.fog.r+=ge.sunCol.r*qt,ge.fog.g+=ge.sunCol.g*qt,ge.fog.b+=ge.sunCol.b*qt}}r.fog.color.copy(ge.fog);let Yf=($t.city*.0022+$t.sakura*.0019+$t.coast*.0011+$t.country*.0014+$t.mountain*.0017+$t.snow*.0021)*(1+ge.night*.25);r.fog.near=Yf*(1+.55*_t+.45*yn),r.fog.far=V.ahead*.92,qe.uSkyHor.value.copy(ge.horizon),qe.uSkyZen.value.copy(ge.zenith),qe.uTime.value=Fe,qe.uWet.value=w*(1-$t.snow);{let Ne=qe.uWet.value>.04&&n!=="low"&&it<.5&&we!=="0";if(Y.refl.enabled=Ne&&we!=="taps",qe.uReflOn.value=Ne&&we!=="copy"?1:0,Ne){o.getWorldDirection(Le),Le.y=0,Le.normalize(),Me.copy(o.position).addScaledVector(Le,1e4).project(o),qe.uHorizon.value=Me.y*.5+.5;let ot=Math.max(.5,o.position.y-Re.group.position.y);qe.uReflK.value=kt(1-2*ot/(5+ot),.05,1)}}qe.uOrigin.value.set(V.origin.x,V.origin.z),qe.uWind.value=1+.8*yn,qe.uCloudSh.value=(1-_t)*Rt(.04,.3,ge.sunEl)*(1-ge.night),qe.uCloudSh.value>.001&&U.update(e,o.position.x,o.position.z,V.origin.x,V.origin.z);let ai=H.material.uniforms;if(ai.uNight.value=ge.night,ai.uWarm.value=ge.warm,ai.uTime.value=Fe,ai.uCirrusCol.value.copy(ge.cLit).lerp(ge.horizon,.25),ai.uCirrus.value=.6*(1-_t)*(1-.65*Rt(.4,.9,ge.night)),ai.uOvercast.value=_t,ai.uMilky.value=Rt(.55,.95,ge.night)*(1-_t),ge.night>.65&&_t<.3&&vt.p<0&&(vt.next-=Ze)<0){let Ne=Math.atan2(Ce.fx,Ce.fz)+(Math.random()-.5)*1.5,ot=.45+Math.random()*.6,at=.22+Math.random()*.2,Et=(Math.random()-.5)*.6,Wt=(Xt,qt)=>new z(Math.cos(Xt)*Math.sin(qt),Math.sin(Xt),Math.cos(Xt)*Math.cos(qt));vt.a.copy(Wt(ot,Ne)),vt.b.copy(Wt(ot-at,Ne+Et)),vt.p=0,vt.next=ut.has("meteors")?1:6+Math.random()*20}vt.p>=0&&(vt.p+=Ze/.85,vt.p>1.3&&(vt.p=-1)),ai.uMetP.value=vt.p,ai.uMetA.value.copy(vt.a),ai.uMetB.value.copy(vt.b),ai.uDeckLit.value.copy(ge.horizon).lerp(ge.cLit,.35),ai.uDeckDark.value.copy(ge.zenith).lerp(ge.horizon,.25).multiplyScalar(.82),H.position.copy(o.position),ie.update(o.position,Ze),fe.update(o.position,Math.max($t.snow,Ut(B.s+600).snow*.7));let za=0;for(let Ne of[-150,0,250,500,800])za=Math.max(za,Ut(B.s+Ne).coast);et.mesh.visible=za>.001,et.update(o.position,Fe,Yf*.8,Rt(0,.35,za)),O.uniforms.uTime.value=Fe,O.uniforms.uFogD.value=r.fog.near,O.uniforms.uNight.value=ge.night,O.uniforms.uSpecK.value=1-ge.overcast*.85,qe.uSunDir.value.copy(ge.lightDir),qe.uSunCol.value.copy(ge.sunCol),W.uniforms.uTime.value=Fe,W.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*$e());let li=Rt(.15,.8,ge.night);C.atlas.emissiveIntensity=.1+li*1.05,qe.uBacklit.value=We*1.6*(1-_t)*(1-ge.night)*Rt(0,.08,ge.sunEl)*(1-Rt(.25,.55,ge.sunEl))*(1-it),qe.uLightsOn.value=Ke>=0?Ke:Math.max(Rt(.02,.75,ge.night),.3*_t),C.lamp.color.setRGB(.85,.85,.8).lerp(new Ee(3.6,2.8,1.8),li),C.pool.opacity=li*.42*(1+.8*w);{let Ne=Re.group.position,ot=Re.lamps,at=Math.max(li,it),Et=0,Wt=0,Xt=0,qt=-1e3,Xn=0,Mn=0,Bn=-1e3,Us=0,lr=900,cr=900;if(at>.01){let Jf=Math.floor(B.s/Zt);for(let Tu=Jf-1;Tu<=Jf+1;Tu++){let Ha=V.chunks.get(Tu);if(!Ha||!Ha.lamps)continue;let wo=Ha.lamps,Kf=Ha.group.position;for(let hr=0;hr<wo.length;hr+=4){let Eu=wo[hr]+Kf.x,wu=wo[hr+1],Au=wo[hr+2]+Kf.z,Ru=(Eu-Ne.x)**2+(wu-Ne.y)**2+(Au-Ne.z)**2,Va=wo[hr+3]/(1+.045*Ru);Va>Et?(Wt=Et,cr=lr,Mn=Xt,Bn=qt,Us=Xn,Et=Va,lr=Ru,Xt=Eu,qt=wu,Xn=Au):Va>Wt&&(Wt=Va,cr=Ru,Mn=Eu,Bn=wu,Us=Au)}}o.updateMatrixWorld()}let Eo=at*Et*(1+.045*lr)*(1-Rt(18,30,Math.sqrt(lr))),ur=at*Wt*(1+.045*cr)*(1-Rt(18,30,Math.sqrt(cr)));ot[0].set(Xt,qt,Xn,1).applyMatrix4(o.matrixWorldInverse).w=Eo,ot[1].set(Mn,Bn,Us,1).applyMatrix4(o.matrixWorldInverse).w=ur,Re.lampCol.setRGB(1,.8-.32*it,.52-.38*it),gi.uLampW.value[0].set(Xt,qt,Xn,Eo),gi.uLampW.value[1].set(Mn,Bn,Us,ur),gi.uLampCol.value.copy(Re.lampCol),Re.head.getWorldPosition(gi.uHeadPos.value),Re.head.target.getWorldPosition(Be),gi.uHeadDir.value.copy(Be).sub(gi.uHeadPos.value).normalize(),gi.uHeadI.value=Re.head.intensity/60}C.pool.visible=C.pool.opacity>.003,V.lod(B.s,oe,li>.15,ce),qe.uNight.value=li,Y.bloom.strength=Lt(.32,.55,li),Y.bloom.threshold=Lt(1.35,.95,li),Y.bloom.radius=Lt(.55,.35,li);{let Ne=Math.max(li,it,Rt(.25,.6,ge.warm)*(1-_t));Y.bloom.enabled=E&&Ne>.02,Y.bloom.strength*=Math.min(1,Ne*4)}e.toneMappingExposure=Lt(1,1.15,li)*(1+.35*it),tt.copy(o.position).addScaledVector(ge.sunDir,1e3).project(o);let or=Y.grade.uniforms,Lm=tt.z<1?1:0,Dm=Math.max(Math.abs(tt.x),Math.abs(tt.y));or.uSun.value.set(tt.x*.5+.5,tt.y*.5+.5),or.uSunVis.value=Lm*(1-Rt(1,1.9,Dm))*Rt(-.02,.15,ge.sunEl)*(1-ge.night)*(1-_t)*(1-it),or.uSat.value=1.1-.12*_t,or.uDay.value=$e(),or.uWarm.value=ge.warm,or.uTime.value=Fe,K.update(o.position,Fe,yn*(1-it)*(1-$t.snow),$e());{let Ne=pi(B.s+190),ot=($t.city+$t.country+$t.coast)*(1-_t)*(1-w)*Rt(.6,.9,ge.sunEl)*(B.mirage??1)*(Ne&&Math.abs(B.s+190-Ne.s)<330?0:1);se.update(k,B.s,V.origin.x,V.origin.z,In(B.s+150,"rw"),ot,Fe,ge.horizon)}{let Ne=kt($t.snow+$t.mountain*.6*Math.max(ge.night,1-Rt(.27,.36,B.tod)),0,1)*(1-it);F.copy(ge.fog).multiplyScalar(.92),me.copy(ge.sunCol).multiplyScalar(Math.min(1,ge.sunI/3)*(1-_t)*.6);let ot=Math.cos(Re.group.rotation.y),at=Math.sin(Re.group.rotation.y),Et=Re.group.position;j.set(Et.x-1.75*at,Et.y+.95,Et.z-1.75*ot,Math.max(ge.night,it)*(.5+1.2*rt.brake)),re.update(Ze,Re.group,B.speed,qe.uWet.value*(1-it),$t.snow*(1-it),Ne,F,me,j,o.position,B.spray)}ee.update(o.position,Fe,$t.snow*(.3+.7*_t)*(1-it),$e()),D.setFog(r.fog.near),D.update(Ze,Fe,o.position,Pe,he,$t,$e(),yn,Re.group.position);let Nm=performance.now();He.update(Ze,Fe,o.position,Pe,he,$t.sakura*(1-it),Ce.y,li,($t.country+$t.sakura*.4)*(1-yn)*(1-it),$t.mountain*(1-it));let Um=performance.now();if(lt){k.at(Ct,xe);let Ne=Math.hypot(xe.x-V.origin.x-o.position.x,xe.z-V.origin.z-o.position.z),ot=pe.st.active?pe.group.position.distanceTo(o.position):1e9,at=B.speed/15;lt.update(at<1.5?at:1.5+(at-1.5)*.4,$t,$e(),{rush:kt((B.speed-25)/40,0,1),bell:At?Math.pow(kt(1-Ne/260,0,1),1.5):0,train:Math.pow(kt(1-ot/230,0,1),2),rain:yn*(1-it)*(1-$t.snow),wetRoad:qe.uWet.value*(1-it),speed:B.speed,load:kt(rt.lon/3,0,1),roof:B.cam!==2,tunnel:it,water:(()=>{let Et=Hi(B.s);return Math.max(Et?1-Rt(12,150,Math.abs(B.s-Et.s)):0,$t.mountain*.45)})(),dusk:ge.warm*(B.tod>.5?1:.3)})}_u(en(B.s+40)),Ae&&(e.info.autoReset=!1,e.info.reset());let ka=null;Ae&&Ae.tq&&(ka=Ae.gl.createQuery(),Ae.gl.beginQuery(Ae.tq.TIME_ELAPSED_EXT,ka));let Zf=performance.now();Y.composer.render(Ze);let $f=performance.now();if(ka){let Ne=Ae.gl;for(Ne.endQuery(Ae.tq.TIME_ELAPSED_EXT),Ae.pend.push(ka);Ae.pend.length&&Ne.getQueryParameter(Ae.pend[0],Ne.QUERY_RESULT_AVAILABLE);){let ot=Ae.pend.shift(),at=Ne.getQueryParameter(ot,Ne.QUERY_RESULT);Ne.deleteQuery(ot),Ne.getParameter(Ae.tq.GPU_DISJOINT_EXT)||(Ae.gpu=at/1e6,Ae.gpuN++,Ae.gpuSum+=Ae.gpu,Ae.gpu>Ae.gpuMax&&(Ae.gpuMax=Ae.gpu))}}let ar=window.__pb||(window.__pb={world:0,parts:0,render:0});if(ar.world=ar.world*.95+(So-Wi)*.05,ar.parts=ar.parts*.95+(Um-Nm)*.05,ar.render=ar.render*.95+($f-Zf)*.05,gt=gt*.95+(performance.now()-Ge)*.05,window.__ft=gt,Ae){let Ne=e.info,ot=performance.now()-Ge,at={t:+Fe.toFixed(2),s:Math.round(B.s),total:+ot.toFixed(1),world:+(So-Wi).toFixed(1),render:+($f-Zf).toFixed(1),gpu:+(Ae.gpu||0).toFixed(1),progs:Ne.programs.length-Ae.progs,geos:Ne.memory.geometries-Ae.geos,tex:Ne.memory.textures-Ae.tex,calls:Ne.render.calls,tris:Ne.render.triangles};at.progs>0&&le&&(at.newProgs=Ne.programs.slice(-at.progs).map(Et=>(Et.name||"")+":"+String(Et.cacheKey).slice(0,60))),Ae.progs=Ne.programs.length,Ae.geos=Ne.memory.geometries,Ae.tex=Ne.memory.textures,Ae.frames++,Ae.sum+=ot,ot>Ae.max&&(Ae.max=ot),ot>12&&le&&Ae.spikes.push(at),Ae.last=at}if((Ba+=Ze)>.25){Ba=0,De.textContent=Math.round(B.speed*3.6),ze.textContent=(B.dist/1e3).toFixed(1);let Ne=Math.floor(B.tod*1440);Se.textContent=`${String(Math.floor(Ne/60)).padStart(2,"0")}:${String(Ne%60).padStart(2,"0")}`}Oe++,le&&Oe>150&&Ze>.03?Ye+=Ze:Ye=Math.max(0,Ye-Ze*.5),Ye>3&&!ut.has("q")&&(Ye=0,ne())}window.__dbg={renderer:e,st:B,scene:r,camera:o,world:V,TOD:ge,X:de,train:pe,weather:Te,U:qe,birds:D,cine:Ht,post:Y,car:Re,sun:a,M:C,clouds:ie,sky:H,mountains:fe,shadowDir:m,CM:rt,spray:re,get audio(){return lt}},mo(""),Qe.classList.add("ready"),ut.has("auto")&&rr(),requestAnimationFrame(Xe)}Z2().catch(i=>{console.error(i),mo("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
