var _0=0,$h=1,y0=2;var dr=1,M0=2,uo=3,Qi=0,Un=1,mn=2,ei=0,ho=1,Oi=2,Kh=3,Jh=4,b0=5;var pr=100,S0=101,T0=102,E0=103,w0=104,A0=200,R0=201,C0=202,P0=203,jh=204,Qh=205,I0=206,L0=207,D0=208,N0=209,U0=210,F0=211,B0=212,O0=213,z0=214,Zl=0,$l=1,Kl=2,$r=3,Jl=4,jl=5,Ql=6,ec=7,ef=0,k0=1,H0=2,zi=0,tf=1,nf=2,sf=3,rf=4,of=5,af=6,Na=7;var lf=300,Us=301,mr=302,Lc=303,Dc=304,Ua=306,Cs=1e3,Zi=1001,tc=1002,xn=1003,V0=1004;var Fa=1005;var Lt=1006,Nc=1007;var Tn=1008;var Wn=1009,cf=1010,uf=1011,fo=1012,Uc=1013,ki=1014,bi=1015,Mn=1016,Fc=1017,Bc=1018,po=1020,hf=35902,ff=35899,df=1021,pf=1022,Xn=1023,$i=1026,Fs=1027,Bs=1028,Oc=1029,Os=1030,zc=1031;var kc=1033,Ba=33776,Oa=33777,za=33778,ka=33779,Hc=35840,Vc=35841,Gc=35842,Wc=35843,Xc=36196,qc=37492,Yc=37496,Zc=37488,$c=37489,Ha=37490,Kc=37491,Jc=37808,jc=37809,Qc=37810,eu=37811,tu=37812,nu=37813,iu=37814,su=37815,ru=37816,ou=37817,au=37818,lu=37819,cu=37820,uu=37821,hu=36492,fu=36494,du=36495,pu=36283,mu=36284,Va=36285,gu=36286;var ia=2300,nc=2301,Xl=2302,Bh=2303,Oh=2400,zh=2401,kh=2402;var G0=3200;var vu=0,W0=1,ti="",qt="srgb",sa="srgb-linear",ra="linear",Bt="srgb";var ql=7680;var X0=519,q0=512,Y0=513,Z0=514,xu=515,$0=516,K0=517,_u=518,J0=519,j0=35044;var mf="300 es",Ui=2e3,Kr=2001;function Zg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $g(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Q0(){let i=Jr("canvas");return i.style.display="block",i}var Od={},jr=null;function gf(...i){let e="THREE."+i.shift();jr?jr("log",e,...i):console.log(e,...i)}function ep(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ut(...i){i=ep(i);let e="THREE."+i.shift();if(jr)jr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function mt(...i){i=ep(i);let e="THREE."+i.shift();if(jr)jr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function lr(...i){let e=i.join(" ");e in Od||(Od[e]=!0,ut(...i))}function tp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var np={[Zl]:$l,[Kl]:Ql,[Jl]:ec,[$r]:jl,[$l]:Zl,[Ql]:Kl,[ec]:Jl,[jl]:$r},Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uh=Math.PI/180,oa=180/Math.PI;function mo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Kg(i,e){return(i%e+e)%e}function hh(i,e,t){return(1-t)*i+t*e}function qo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var bf=class bf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bf.prototype.isVector2=!0;var Pe=bf,_n=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],u=n[s+1],h=n[s+2],p=n[s+3],g=r[o+0],x=r[o+1],M=r[o+2],S=r[o+3];if(p!==S||c!==g||u!==x||h!==M){let l=c*g+u*x+h*M+p*S;l<0&&(g=-g,x=-x,M=-M,S=-S,l=-l);let f=1-a;if(l<.9995){let d=Math.acos(l),v=Math.sin(d);f=Math.sin(f*d)/v,a=Math.sin(a*d)/v,c=c*f+g*a,u=u*f+x*a,h=h*f+M*a,p=p*f+S*a}else{c=c*f+g*a,u=u*f+x*a,h=h*f+M*a,p=p*f+S*a;let d=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=d,u*=d,h*=d,p*=d}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],u=n[s+2],h=n[s+3],p=r[o],g=r[o+1],x=r[o+2],M=r[o+3];return e[t]=a*M+h*p+c*x-u*g,e[t+1]=c*M+h*g+u*p-a*x,e[t+2]=u*M+h*x+a*g-c*p,e[t+3]=h*M-a*p-c*g-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(s/2),p=a(r/2),g=c(n/2),x=c(s/2),M=c(r/2);switch(o){case"XYZ":this._x=g*h*p+u*x*M,this._y=u*x*p-g*h*M,this._z=u*h*M+g*x*p,this._w=u*h*p-g*x*M;break;case"YXZ":this._x=g*h*p+u*x*M,this._y=u*x*p-g*h*M,this._z=u*h*M-g*x*p,this._w=u*h*p+g*x*M;break;case"ZXY":this._x=g*h*p-u*x*M,this._y=u*x*p+g*h*M,this._z=u*h*M+g*x*p,this._w=u*h*p-g*x*M;break;case"ZYX":this._x=g*h*p-u*x*M,this._y=u*x*p+g*h*M,this._z=u*h*M-g*x*p,this._w=u*h*p+g*x*M;break;case"YZX":this._x=g*h*p+u*x*M,this._y=u*x*p+g*h*M,this._z=u*h*M-g*x*p,this._w=u*h*p-g*x*M;break;case"XZY":this._x=g*h*p-u*x*M,this._y=u*x*p-g*h*M,this._z=u*h*M+g*x*p,this._w=u*h*p+g*x*M;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],u=t[2],h=t[6],p=t[10],g=n+a+p;if(g>0){let x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(h-c)*x,this._y=(r-u)*x,this._z=(o-s)*x}else if(n>a&&n>p){let x=2*Math.sqrt(1+n-a-p);this._w=(h-c)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+u)/x}else if(a>p){let x=2*Math.sqrt(1+a-n-p);this._w=(r-u)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(c+h)/x}else{let x=2*Math.sqrt(1+p-n-a);this._w=(o-s)/x,this._x=(r+u)/x,this._y=(c+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+s*u-r*c,this._y=s*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-s*a,this._w=o*h-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let u=Math.acos(a),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sf=class Sf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*s-a*n),h=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+c*u+o*p-a*h,this.y=n+c*h+a*u-r*p,this.z=s+c*p+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sf.prototype.isVector3=!0;var k=Sf,fh=new k,zd=new _n,Tf=class Tf{constructor(e,t,n,s,r,o,a,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u)}set(e,t,n,s,r,o,a,c,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],p=n[7],g=n[2],x=n[5],M=n[8],S=s[0],l=s[3],f=s[6],d=s[1],v=s[4],m=s[7],_=s[2],T=s[5],E=s[8];return r[0]=o*S+a*d+c*_,r[3]=o*l+a*v+c*T,r[6]=o*f+a*m+c*E,r[1]=u*S+h*d+p*_,r[4]=u*l+h*v+p*T,r[7]=u*f+h*m+p*E,r[2]=g*S+x*d+M*_,r[5]=g*l+x*v+M*T,r[8]=g*f+x*m+M*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*c+s*r*u-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],p=h*o-a*u,g=a*c-h*r,x=u*r-o*c,M=t*p+n*g+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/M;return e[0]=p*S,e[1]=(s*u-h*n)*S,e[2]=(a*n-s*o)*S,e[3]=g*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-a*t)*S,e[6]=x*S,e[7]=(n*c-u*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-s*u,s*c,-s*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dh.makeScale(e,t)),this}rotate(e){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dh.makeRotation(-e)),this}translate(e,t){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tf.prototype.isMatrix3=!0;var vt=Tf,dh=new vt,kd=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jg(){let i={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Bt&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Bt&&(s.r=Yr(s.r),s.g=Yr(s.g),s.b=Yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?ra:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sa]:{primaries:e,whitePoint:n,transfer:ra,toXYZ:kd,fromXYZ:Hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:kd,fromXYZ:Hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var At=Jg();function hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Lr,ic=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lr===void 0&&(Lr=Jr("canvas")),Lr.width=e.width,Lr.height=e.height;let s=Lr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Lr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hs(t[n]/255)*255):t[n]=hs(t[n]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jg=0,Qr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ph(s[o].image)):r.push(ph(s[o]))}else r=ph(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ph(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ic.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}var Qg=0,mh=new k,Gn=class i extends Ki{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Zi,s=Zi,r=Lt,o=Tn,a=Xn,c=Wn,u=i.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=mo(),this.name="",this.source=new Qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=lf;Gn.DEFAULT_ANISOTROPY=1;var Ef=class Ef{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],h=c[4],p=c[8],g=c[1],x=c[5],M=c[9],S=c[2],l=c[6],f=c[10];if(Math.abs(h-g)<.01&&Math.abs(p-S)<.01&&Math.abs(M-l)<.01){if(Math.abs(h+g)<.1&&Math.abs(p+S)<.1&&Math.abs(M+l)<.1&&Math.abs(u+x+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(u+1)/2,m=(x+1)/2,_=(f+1)/2,T=(h+g)/4,E=(p+S)/4,y=(M+l)/4;return v>m&&v>_?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=E/n):m>_?m<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(m),n=T/s,r=y/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=E/r,s=y/r),this.set(n,s,r,t),this}let d=Math.sqrt((l-M)*(l-M)+(p-S)*(p-S)+(g-h)*(g-h));return Math.abs(d)<.001&&(d=1),this.x=(l-M)/d,this.y=(p-S)/d,this.z=(g-h)/d,this.w=Math.acos((u+x+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ef.prototype.isVector4=!0;var gt=Ef,sc=class extends Ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Gn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zt=class extends sc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},aa=class extends Gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rc=class extends Gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ic=class Ic{constructor(e,t,n,s,r,o,a,c,u,h,p,g,x,M,S,l){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u,h,p,g,x,M,S,l)}set(e,t,n,s,r,o,a,c,u,h,p,g,x,M,S,l){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=u,f[6]=h,f[10]=p,f[14]=g,f[3]=x,f[7]=M,f[11]=S,f[15]=l,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ic().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Dr.setFromMatrixColumn(e,0).length(),r=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let g=o*h,x=o*p,M=a*h,S=a*p;t[0]=c*h,t[4]=-c*p,t[8]=u,t[1]=x+M*u,t[5]=g-S*u,t[9]=-a*c,t[2]=S-g*u,t[6]=M+x*u,t[10]=o*c}else if(e.order==="YXZ"){let g=c*h,x=c*p,M=u*h,S=u*p;t[0]=g+S*a,t[4]=M*a-x,t[8]=o*u,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=x*a-M,t[6]=S+g*a,t[10]=o*c}else if(e.order==="ZXY"){let g=c*h,x=c*p,M=u*h,S=u*p;t[0]=g-S*a,t[4]=-o*p,t[8]=M+x*a,t[1]=x+M*a,t[5]=o*h,t[9]=S-g*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let g=o*h,x=o*p,M=a*h,S=a*p;t[0]=c*h,t[4]=M*u-x,t[8]=g*u+S,t[1]=c*p,t[5]=S*u+g,t[9]=x*u-M,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let g=o*c,x=o*u,M=a*c,S=a*u;t[0]=c*h,t[4]=S-g*p,t[8]=M*p+x,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=x*p+M,t[10]=g-S*p}else if(e.order==="XZY"){let g=o*c,x=o*u,M=a*c,S=a*u;t[0]=c*h,t[4]=-p,t[8]=u*h,t[1]=g*p+S,t[5]=o*h,t[9]=x*p-M,t[2]=M*p-x,t[6]=a*h,t[10]=S*p+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e1,e,t1)}lookAt(e,t,n){let s=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Ss.crossVectors(n,ui),Ss.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Ss.crossVectors(n,ui)),Ss.normalize(),_l.crossVectors(ui,Ss),s[0]=Ss.x,s[4]=_l.x,s[8]=ui.x,s[1]=Ss.y,s[5]=_l.y,s[9]=ui.y,s[2]=Ss.z,s[6]=_l.z,s[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],p=n[5],g=n[9],x=n[13],M=n[2],S=n[6],l=n[10],f=n[14],d=n[3],v=n[7],m=n[11],_=n[15],T=s[0],E=s[4],y=s[8],b=s[12],w=s[1],A=s[5],P=s[9],I=s[13],R=s[2],L=s[6],D=s[10],O=s[14],V=s[3],N=s[7],z=s[11],H=s[15];return r[0]=o*T+a*w+c*R+u*V,r[4]=o*E+a*A+c*L+u*N,r[8]=o*y+a*P+c*D+u*z,r[12]=o*b+a*I+c*O+u*H,r[1]=h*T+p*w+g*R+x*V,r[5]=h*E+p*A+g*L+x*N,r[9]=h*y+p*P+g*D+x*z,r[13]=h*b+p*I+g*O+x*H,r[2]=M*T+S*w+l*R+f*V,r[6]=M*E+S*A+l*L+f*N,r[10]=M*y+S*P+l*D+f*z,r[14]=M*b+S*I+l*O+f*H,r[3]=d*T+v*w+m*R+_*V,r[7]=d*E+v*A+m*L+_*N,r[11]=d*y+v*P+m*D+_*z,r[15]=d*b+v*I+m*O+_*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],u=e[13],h=e[2],p=e[6],g=e[10],x=e[14],M=e[3],S=e[7],l=e[11],f=e[15],d=c*x-u*g,v=a*x-u*p,m=a*g-c*p,_=o*x-u*h,T=o*g-c*h,E=o*p-a*h;return t*(S*d-l*v+f*m)-n*(M*d-l*_+f*T)+s*(M*v-S*_+f*E)-r*(M*m-S*T+l*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],u=e[6],h=e[10];return t*(o*h-a*u)-n*(r*h-a*c)+s*(r*u-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],p=e[9],g=e[10],x=e[11],M=e[12],S=e[13],l=e[14],f=e[15],d=t*a-n*o,v=t*c-s*o,m=t*u-r*o,_=n*c-s*a,T=n*u-r*a,E=s*u-r*c,y=h*S-p*M,b=h*l-g*M,w=h*f-x*M,A=p*l-g*S,P=p*f-x*S,I=g*f-x*l,R=d*I-v*P+m*A+_*w-T*b+E*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return e[0]=(a*I-c*P+u*A)*L,e[1]=(s*P-n*I-r*A)*L,e[2]=(S*E-l*T+f*_)*L,e[3]=(g*T-p*E-x*_)*L,e[4]=(c*w-o*I-u*b)*L,e[5]=(t*I-s*w+r*b)*L,e[6]=(l*m-M*E-f*v)*L,e[7]=(h*E-g*m+x*v)*L,e[8]=(o*P-a*w+u*y)*L,e[9]=(n*w-t*P-r*y)*L,e[10]=(M*T-S*m+f*d)*L,e[11]=(p*m-h*T-x*d)*L,e[12]=(a*b-o*A-c*y)*L,e[13]=(t*A-n*b+s*y)*L,e[14]=(S*v-M*_-l*d)*L,e[15]=(h*_-p*v+g*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,h*a+n,h*c-s*o,0,u*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,u=r+r,h=o+o,p=a+a,g=r*u,x=r*h,M=r*p,S=o*h,l=o*p,f=a*p,d=c*u,v=c*h,m=c*p,_=n.x,T=n.y,E=n.z;return s[0]=(1-(S+f))*_,s[1]=(x+m)*_,s[2]=(M-v)*_,s[3]=0,s[4]=(x-m)*T,s[5]=(1-(g+f))*T,s[6]=(l+d)*T,s[7]=0,s[8]=(M+v)*E,s[9]=(l-d)*E,s[10]=(1-(g+S))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Dr.set(s[0],s[1],s[2]).length(),a=Dr.set(s[4],s[5],s[6]).length(),c=Dr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ii.copy(this);let u=1/o,h=1/a,p=1/c;return Ii.elements[0]*=u,Ii.elements[1]*=u,Ii.elements[2]*=u,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=p,Ii.elements[9]*=p,Ii.elements[10]*=p,t.setFromRotationMatrix(Ii),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Ui,c=!1){let u=this.elements,h=2*r/(t-e),p=2*r/(n-s),g=(t+e)/(t-e),x=(n+s)/(n-s),M,S;if(c)M=r/(o-r),S=o*r/(o-r);else if(a===Ui)M=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Kr)M=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=p,u[9]=x,u[13]=0,u[2]=0,u[6]=0,u[10]=M,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ui,c=!1){let u=this.elements,h=2/(t-e),p=2/(n-s),g=-(t+e)/(t-e),x=-(n+s)/(n-s),M,S;if(c)M=1/(o-r),S=o/(o-r);else if(a===Ui)M=-2/(o-r),S=-(o+r)/(o-r);else if(a===Kr)M=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=g,u[1]=0,u[5]=p,u[9]=0,u[13]=x,u[2]=0,u[6]=0,u[10]=M,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ic.prototype.isMatrix4=!0;var et=Ic,Dr=new k,Ii=new et,e1=new k(0,0,0),t1=new k(1,1,1),Ss=new k,_l=new k,ui=new k,Vd=new et,Gd=new _n,oi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],h=s[9],p=s[2],g=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,x),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gd.setFromEuler(this),this.setFromQuaternion(Gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var la=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},n1=0,Wd=new k,Nr=new _n,os=new et,yl=new k,Yo=new k,i1=new k,s1=new _n,Xd=new k(1,0,0),qd=new k(0,1,0),Yd=new k(0,0,1),Zd={type:"added"},r1={type:"removed"},Ur={type:"childadded",child:null},gh={type:"childremoved",child:null},yn=class i extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new oi,n=new _n,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new vt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Xd,e)}rotateY(e){return this.rotateOnAxis(qd,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return Wd.copy(e).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xd,e)}translateY(e){return this.translateOnAxis(qd,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yl.copy(e):yl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Yo,yl,this.up):os.lookAt(yl,Yo,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Nr.setFromRotationMatrix(os),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zd),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r1),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zd),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,i1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,s1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let p=c[u];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),g=o(e.skeletons),x=o(e.animations),M=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),x.length>0&&(n.animations=x),M.length>0&&(n.nodes=M)}return n.object=s,n;function o(a){let c=[];for(let u in a){let h=a[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new k(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},o1={type:"move"},eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let S of e.hand.values()){let l=t.getJointPose(S,n),f=this._getHandJoint(u,S);l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=l.radius),f.visible=l!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],g=h.position.distanceTo(p.position),x=.02,M=.005;u.inputState.pinching&&g>x+M?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&g<=x-M&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function vh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=At.workingColorSpace){if(e=Kg(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vh(o,r,e+1/3),this.g=vh(o,r,e),this.b=vh(o,r,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return At.workingToColorSpace(Vn.copy(this),e),Math.round(wt(Vn.r*255,0,255))*65536+Math.round(wt(Vn.g*255,0,255))*256+Math.round(wt(Vn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Vn.copy(this),t);let n=Vn.r,s=Vn.g,r=Vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,u,h=(a+o)/2;if(a===o)c=0,u=0;else{let p=o-a;switch(u=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=qt){At.workingToColorSpace(Vn.copy(this),e);let t=Vn.r,n=Vn.g,s=Vn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+t,Ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ts),e.getHSL(Ml);let n=hh(Ts.h,Ml.h,t),s=hh(Ts.s,Ml.s,t),r=hh(Ts.l,Ml.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new _e;_e.NAMES=ip;var ca=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cr=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Li=new k,as=new k,xh=new k,ls=new k,Fr=new k,Br=new k,$d=new k,_h=new k,yh=new k,Mh=new k,bh=new gt,Sh=new gt,Th=new gt,Rs=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Li.subVectors(e,t),s.cross(Li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Li.subVectors(s,t),as.subVectors(n,t),xh.subVectors(e,t);let o=Li.dot(Li),a=Li.dot(as),c=Li.dot(xh),u=as.dot(as),h=as.dot(xh),p=o*u-a*a;if(p===0)return r.set(0,0,0),null;let g=1/p,x=(u*c-a*h)*g,M=(o*h-a*c)*g;return r.set(1-x-M,M,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ls)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ls.x),c.addScaledVector(o,ls.y),c.addScaledVector(a,ls.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return bh.setScalar(0),Sh.setScalar(0),Th.setScalar(0),bh.fromBufferAttribute(e,t),Sh.fromBufferAttribute(e,n),Th.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(bh,r.x),o.addScaledVector(Sh,r.y),o.addScaledVector(Th,r.z),o}static isFrontFacing(e,t,n,s){return Li.subVectors(n,t),as.subVectors(e,t),Li.cross(as).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Li.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Fr.subVectors(s,n),Br.subVectors(r,n),_h.subVectors(e,n);let c=Fr.dot(_h),u=Br.dot(_h);if(c<=0&&u<=0)return t.copy(n);yh.subVectors(e,s);let h=Fr.dot(yh),p=Br.dot(yh);if(h>=0&&p<=h)return t.copy(s);let g=c*p-h*u;if(g<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Fr,o);Mh.subVectors(e,r);let x=Fr.dot(Mh),M=Br.dot(Mh);if(M>=0&&x<=M)return t.copy(r);let S=x*u-c*M;if(S<=0&&u>=0&&M<=0)return a=u/(u-M),t.copy(n).addScaledVector(Br,a);let l=h*M-x*p;if(l<=0&&p-h>=0&&x-M>=0)return $d.subVectors(r,s),a=(p-h)/(p-h+(x-M)),t.copy(s).addScaledVector($d,a);let f=1/(l+S+g);return o=S*f,a=g*f,t.copy(n).addScaledVector(Fr,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_i=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Di):Di.fromBufferAttribute(r,o),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bl.copy(n.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Sl.subVectors(this.max,Zo),Or.subVectors(e.a,Zo),zr.subVectors(e.b,Zo),kr.subVectors(e.c,Zo),Es.subVectors(zr,Or),ws.subVectors(kr,zr),sr.subVectors(Or,kr);let t=[0,-Es.z,Es.y,0,-ws.z,ws.y,0,-sr.z,sr.y,Es.z,0,-Es.x,ws.z,0,-ws.x,sr.z,0,-sr.x,-Es.y,Es.x,0,-ws.y,ws.x,0,-sr.y,sr.x,0];return!Eh(t,Or,zr,kr,Sl)||(t=[1,0,0,0,1,0,0,0,1],!Eh(t,Or,zr,kr,Sl))?!1:(Tl.crossVectors(Es,ws),t=[Tl.x,Tl.y,Tl.z],Eh(t,Or,zr,kr,Sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},cs=[new k,new k,new k,new k,new k,new k,new k,new k],Di=new k,bl=new _i,Or=new k,zr=new k,kr=new k,Es=new k,ws=new k,sr=new k,Zo=new k,Sl=new k,Tl=new k,rr=new k;function Eh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rr.fromArray(i,r);let a=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),c=e.dot(rr),u=t.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}var vn=new k,El=new Pe,a1=0,Ut=class extends Ki{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=j0,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ri(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qo(t,this.array)),t}setX(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qo(t,this.array)),t}setY(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qo(t,this.array)),t}setW(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),n=ri(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),n=ri(n,this.array),s=ri(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),n=ri(n,this.array),s=ri(s,this.array),r=ri(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ua=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ha=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ze=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},l1=new _i,$o=new k,wh=new k,yi=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):l1.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);let t=$o.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($o,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(wh)),this.expandByPoint($o.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},c1=0,xi=new et,Ah=new yn,Hr=new k,hi=new _i,Ko=new _i,Pn=new k,yt=class i extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zg(e)?ha:ua)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,n){return xi.makeTranslation(e,t,n),this.applyMatrix4(xi),this}scale(e,t,n){return xi.makeScale(e,t,n),this.applyMatrix4(xi),this}lookAt(e){return Ah.lookAt(e),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hi.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ko.setFromBufferAttribute(a),this.morphTargetsRelative?(Pn.addVectors(hi.min,Ko.min),hi.expandByPoint(Pn),Pn.addVectors(hi.max,Ko.max),hi.expandByPoint(Pn)):(hi.expandByPoint(Ko.min),hi.expandByPoint(Ko.max))}hi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Pn.fromBufferAttribute(a,u),c&&(Hr.fromBufferAttribute(e,u),Pn.add(Hr)),s=Math.max(s,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new k,c[y]=new k;let u=new k,h=new k,p=new k,g=new Pe,x=new Pe,M=new Pe,S=new k,l=new k;function f(y,b,w){u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,b),p.fromBufferAttribute(n,w),g.fromBufferAttribute(r,y),x.fromBufferAttribute(r,b),M.fromBufferAttribute(r,w),h.sub(u),p.sub(u),x.sub(g),M.sub(g);let A=1/(x.x*M.y-M.x*x.y);isFinite(A)&&(S.copy(h).multiplyScalar(M.y).addScaledVector(p,-x.y).multiplyScalar(A),l.copy(p).multiplyScalar(x.x).addScaledVector(h,-M.x).multiplyScalar(A),a[y].add(S),a[b].add(S),a[w].add(S),c[y].add(l),c[b].add(l),c[w].add(l))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let y=0,b=d.length;y<b;++y){let w=d[y],A=w.start,P=w.count;for(let I=A,R=A+P;I<R;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let v=new k,m=new k,_=new k,T=new k;function E(y){_.fromBufferAttribute(s,y),T.copy(_);let b=a[y];v.copy(b),v.sub(_.multiplyScalar(_.dot(b))).normalize(),m.crossVectors(T,b);let A=m.dot(c[y])<0?-1:1;o.setXYZW(y,v.x,v.y,v.z,A)}for(let y=0,b=d.length;y<b;++y){let w=d[y],A=w.start,P=w.count;for(let I=A,R=A+P;I<R;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,x=n.count;g<x;g++)n.setXYZ(g,0,0,0);let s=new k,r=new k,o=new k,a=new k,c=new k,u=new k,h=new k,p=new k;if(e)for(let g=0,x=e.count;g<x;g+=3){let M=e.getX(g+0),S=e.getX(g+1),l=e.getX(g+2);s.fromBufferAttribute(t,M),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,l),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,l),a.add(h),c.add(h),u.add(h),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(l,u.x,u.y,u.z)}else for(let g=0,x=t.count;g<x;g+=3)s.fromBufferAttribute(t,g+0),r.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(g+0,h.x,h.y,h.z),n.setXYZ(g+1,h.x,h.y,h.z),n.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(a,c){let u=a.array,h=a.itemSize,p=a.normalized,g=new u.constructor(c.length*h),x=0,M=0;for(let S=0,l=c.length;S<l;S++){a.isInterleavedBufferAttribute?x=c[S]*a.data.stride+a.offset:x=c[S]*h;for(let f=0;f<h;f++)g[M++]=u[x++]}return new Ut(g,h,p)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],u=e(c,n);t.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let c=[],u=r[a];for(let h=0,p=u.length;h<p;h++){let g=u[h],x=e(g,n);c.push(x)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let p=0,g=u.length;p<g;p++){let x=u[p];h.push(x.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],p=r[u];for(let g=0,x=p.length;g<x;g++)h.push(p[g].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Rh=new k,u1=new k,h1=new vt,Ni=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Rh.subVectors(n,t).cross(u1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Rh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||h1.getNormalMatrix(e),s=this.coplanarPoint(Rh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},f1=0,Ji=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=ho,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=Qh,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ql,this.stencilZFail=ql,this.stencilZPass=ql,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var us=new k,Ch=new k,wl=new k,Al=new k,to=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,us)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=us.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(us.copy(this.origin).addScaledVector(this.direction,t),us.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ch.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),Al.copy(this.origin).sub(Ch);let r=e.distanceTo(t)*.5,o=-this.direction.dot(wl),a=Al.dot(this.direction),c=-Al.dot(wl),u=Al.lengthSq(),h=Math.abs(1-o*o),p,g,x,M;if(h>0)if(p=o*c-a,g=o*a-c,M=r*h,p>=0)if(g>=-M)if(g<=M){let S=1/h;p*=S,g*=S,x=p*(p+o*g+2*a)+g*(o*p+g+2*c)+u}else g=r,p=Math.max(0,-(o*g+a)),x=-p*p+g*(g+2*c)+u;else g=-r,p=Math.max(0,-(o*g+a)),x=-p*p+g*(g+2*c)+u;else g<=-M?(p=Math.max(0,-(-o*r+a)),g=p>0?-r:Math.min(Math.max(-r,-c),r),x=-p*p+g*(g+2*c)+u):g<=M?(p=0,g=Math.min(Math.max(-r,-c),r),x=g*(g+2*c)+u):(p=Math.max(0,-(o*r+a)),g=p>0?r:Math.min(Math.max(-r,-c),r),x=-p*p+g*(g+2*c)+u);else g=o>0?-r:r,p=Math.max(0,-(o*g+a)),x=-p*p+g*(g+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ch).addScaledVector(wl,g),x}intersectSphere(e,t){if(e.radius<0)return null;us.subVectors(e.center,this.origin);let n=us.dot(this.direction),s=us.dot(us)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,g=this.origin;return u>=0?(n=(e.min.x-g.x)*u,s=(e.max.x-g.x)*u):(n=(e.max.x-g.x)*u,s=(e.min.x-g.x)*u),h>=0?(r=(e.min.y-g.y)*h,o=(e.max.y-g.y)*h):(r=(e.max.y-g.y)*h,o=(e.min.y-g.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-g.z)*p,c=(e.max.z-g.z)*p):(a=(e.max.z-g.z)*p,c=(e.min.z-g.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,us)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,u=a.y,h=a.z,p=e.x-o.x,g=e.y-o.y,x=e.z-o.z,M=t.x-o.x,S=t.y-o.y,l=t.z-o.z,f=n.x-o.x,d=n.y-o.y,v=n.z-o.z,m=Math.abs(c),_=Math.abs(u),T=Math.abs(h),E,y,b,w,A,P,I,R,L,D,O,V;if(m>=_&&m>=T?(b=c,P=p,L=M,V=f,c>=0?(E=u,y=h,w=g,A=x,I=S,R=l,D=d,O=v):(E=h,y=u,w=x,A=g,I=l,R=S,D=v,O=d)):_>=T?(b=u,P=g,L=S,V=d,u>=0?(E=h,y=c,w=x,A=p,I=l,R=M,D=v,O=f):(E=c,y=h,w=p,A=x,I=M,R=l,D=f,O=v)):(b=h,P=x,L=l,V=v,h>=0?(E=c,y=u,w=p,A=g,I=M,R=S,D=f,O=d):(E=u,y=c,w=g,A=p,I=S,R=M,D=d,O=f)),b===0)return null;let N=E/b,z=y/b,H=1/b,Y=w-N*P,le=A-z*P,ze=I-N*L,Be=R-z*L,ye=D-N*V,$=O-z*V,J=ye*Be-$*ze,xe=Y*$-le*ye,ve=ze*le-Be*Y;if(s){if(J<0||xe<0||ve<0)return null}else if((J<0||xe<0||ve<0)&&(J>0||xe>0||ve>0))return null;let Ee=J+xe+ve;if(Ee===0)return null;let We=H*(J*P+xe*L+ve*V);return(Ee>0?We<0:We>0)?null:this.at(We/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},un=class extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kd=new et,or=new to,Rl=new yi,Jd=new k,Cl=new k,Pl=new k,Il=new k,Ph=new k,Ll=new k,jd=new k,Dl=new k,ht=class extends yn{constructor(e=new yt,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ll.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let h=a[c],p=r[c];h!==0&&(Ph.fromBufferAttribute(p,e),o?Ll.addScaledVector(Ph,h):Ll.addScaledVector(Ph.sub(t),h))}t.add(Ll)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(r),or.copy(e.ray).recast(e.near),!(Rl.containsPoint(or.origin)===!1&&(or.intersectSphere(Rl,Jd)===null||or.origin.distanceToSquared(Jd)>(e.far-e.near)**2))&&(Kd.copy(r).invert(),or.copy(e.ray).applyMatrix4(Kd),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,g=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,S=g.length;M<S;M++){let l=g[M],f=o[l.materialIndex],d=Math.max(l.start,x.start),v=Math.min(a.count,Math.min(l.start+l.count,x.start+x.count));for(let m=d,_=v;m<_;m+=3){let T=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);s=Nl(this,f,e,n,u,h,p,T,E,y),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=l.materialIndex,t.push(s))}}else{let M=Math.max(0,x.start),S=Math.min(a.count,x.start+x.count);for(let l=M,f=S;l<f;l+=3){let d=a.getX(l),v=a.getX(l+1),m=a.getX(l+2);s=Nl(this,o,e,n,u,h,p,d,v,m),s&&(s.faceIndex=Math.floor(l/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let M=0,S=g.length;M<S;M++){let l=g[M],f=o[l.materialIndex],d=Math.max(l.start,x.start),v=Math.min(c.count,Math.min(l.start+l.count,x.start+x.count));for(let m=d,_=v;m<_;m+=3){let T=m,E=m+1,y=m+2;s=Nl(this,f,e,n,u,h,p,T,E,y),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=l.materialIndex,t.push(s))}}else{let M=Math.max(0,x.start),S=Math.min(c.count,x.start+x.count);for(let l=M,f=S;l<f;l+=3){let d=l,v=l+1,m=l+2;s=Nl(this,o,e,n,u,h,p,d,v,m),s&&(s.faceIndex=Math.floor(l/3),t.push(s))}}}};function d1(i,e,t,n,s,r,o,a){let c;if(e.side===Un?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Qi,a),c===null)return null;Dl.copy(a),Dl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Dl);return u<t.near||u>t.far?null:{distance:u,point:Dl.clone(),object:i}}function Nl(i,e,t,n,s,r,o,a,c,u){i.getVertexPosition(a,Cl),i.getVertexPosition(c,Pl),i.getVertexPosition(u,Il);let h=d1(i,e,t,n,Cl,Pl,Il,jd);if(h){let p=new k;Rs.getBarycoord(jd,Cl,Pl,Il,p),s&&(h.uv=Rs.getInterpolatedAttribute(s,a,c,u,p,new Pe)),r&&(h.uv1=Rs.getInterpolatedAttribute(r,a,c,u,p,new Pe)),o&&(h.normal=Rs.getInterpolatedAttribute(o,a,c,u,p,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let g={a,b:c,c:u,normal:new k,materialIndex:0};Rs.getNormal(Cl,Pl,Il,g.normal),h.face=g,h.barycoord=p}return h}var Fi=class extends Gn{constructor(e=null,t=1,n=1,s,r,o,a,c,u=xn,h=xn,p,g){super(null,o,a,c,u,h,s,r,p,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vr=new et,Qd=new et,Ul=[],e0=new _i,p1=new et,Jo=new ht,jo=new yi,Bi=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,p1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),e0.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(e0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),jo.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(n),e.ray.intersectsSphere(jo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vr),Qd.multiplyMatrices(n,Vr),Jo.matrixWorld=Qd,Jo.raycast(e,Ul);for(let o=0,a=Ul.length;o<a;o++){let c=Ul[o];c.instanceId=r,c.object=this,t.push(c)}Ul.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Sn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fi(new Float32Array(s*this.count),s,this.count,Bs,bi));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ar=new yi,m1=new Pe(.5,.5),Fl=new k,no=class{constructor(e=new Ni,t=new Ni,n=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ui,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],u=r[3],h=r[4],p=r[5],g=r[6],x=r[7],M=r[8],S=r[9],l=r[10],f=r[11],d=r[12],v=r[13],m=r[14],_=r[15];if(s[0].setComponents(u-o,x-h,f-M,_-d).normalize(),s[1].setComponents(u+o,x+h,f+M,_+d).normalize(),s[2].setComponents(u+a,x+p,f+S,_+v).normalize(),s[3].setComponents(u-a,x-p,f-S,_-v).normalize(),n)s[4].setComponents(c,g,l,m).normalize(),s[5].setComponents(u-c,x-g,f-l,_-m).normalize();else if(s[4].setComponents(u-c,x-g,f-l,_-m).normalize(),t===Ui)s[5].setComponents(u+c,x+g,f+l,_+m).normalize();else if(t===Kr)s[5].setComponents(c,g,l,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);let t=m1.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Fl.x=s.normal.x>0?e.max.x:e.min.x,Fl.y=s.normal.y>0?e.max.y:e.min.y,Fl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oc=class extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ac=new k,lc=new k,t0=new et,Qo=new to,Bl=new yi,Ih=new k,n0=new k,fa=class extends yn{constructor(e=new yt,t=new oc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ac.fromBufferAttribute(t,s-1),lc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ac.distanceTo(lc);e.setAttribute("lineDistance",new Ze(n,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(s),Bl.radius+=r,e.ray.intersectsSphere(Bl)===!1)return;t0.copy(s).invert(),Qo.copy(e.ray).applyMatrix4(t0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,g=n.attributes.position;if(h!==null){let x=Math.max(0,o.start),M=Math.min(h.count,o.start+o.count);for(let S=x,l=M-1;S<l;S+=u){let f=h.getX(S),d=h.getX(S+1),v=Ol(this,e,Qo,c,f,d,S);v&&t.push(v)}if(this.isLineLoop){let S=h.getX(M-1),l=h.getX(x),f=Ol(this,e,Qo,c,S,l,M-1);f&&t.push(f)}}else{let x=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let S=x,l=M-1;S<l;S+=u){let f=Ol(this,e,Qo,c,S,S+1,S);f&&t.push(f)}if(this.isLineLoop){let S=Ol(this,e,Qo,c,M-1,x,M-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ol(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(ac.fromBufferAttribute(a,s),lc.fromBufferAttribute(a,r),t.distanceSqToSegment(ac,lc,Ih,n0)>n)return;Ih.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Ih);if(!(u<e.near||u>e.far))return{distance:u,point:n0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var io=class extends Ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},i0=new et,Hh=new to,zl=new yi,kl=new k,da=class extends yn{constructor(e=new yt,t=new io){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zl.copy(n.boundingSphere),zl.applyMatrix4(s),zl.radius+=r,e.ray.intersectsSphere(zl)===!1)return;i0.copy(s).invert(),Hh.copy(e.ray).applyMatrix4(i0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,p=n.attributes.position;if(u!==null){let g=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let M=g,S=x;M<S;M++){let l=u.getX(M);kl.fromBufferAttribute(p,l),s0(kl,l,c,s,e,t,this)}}else{let g=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let M=g,S=x;M<S;M++)kl.fromBufferAttribute(p,M),s0(kl,M,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function s0(i,e,t,n,s,r,o){let a=Hh.distanceSqToPoint(i);if(a<t){let c=new k;Hh.closestPointToPoint(i,c),c.applyMatrix4(n);let u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var pa=class extends Gn{constructor(e=[],t=Us,n,s,r,o,a,c,u,h){super(e,t,n,s,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qn=class extends Gn{constructor(e,t,n,s,r,o,a,c,u){super(e,t,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ps=class extends Gn{constructor(e,t,n=ki,s,r,o,a=xn,c=xn,u,h=$i,p=1){if(h!==$i&&h!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:e,height:t,depth:p};super(g,s,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},cc=class extends Ps{constructor(e,t=ki,n=Us,s,r,o=xn,a=xn,c,u=$i){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ma=class extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yt=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],u=[],h=[],p=[],g=0,x=0;M("z","y","x",-1,-1,n,t,e,o,r,0),M("z","y","x",1,-1,n,t,-e,o,r,1),M("x","z","y",1,1,e,n,t,s,o,2),M("x","z","y",1,-1,e,n,-t,s,o,3),M("x","y","z",1,-1,e,t,n,s,r,4),M("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(p,2));function M(S,l,f,d,v,m,_,T,E,y,b){let w=m/E,A=_/y,P=m/2,I=_/2,R=T/2,L=E+1,D=y+1,O=0,V=0,N=new k;for(let z=0;z<D;z++){let H=z*A-I;for(let Y=0;Y<L;Y++){let le=Y*w-P;N[S]=le*d,N[l]=H*v,N[f]=R,u.push(N.x,N.y,N.z),N[S]=0,N[l]=0,N[f]=T>0?1:-1,h.push(N.x,N.y,N.z),p.push(Y/E),p.push(1-z/y),O+=1}}for(let z=0;z<y;z++)for(let H=0;H<E;H++){let Y=g+H+L*z,le=g+H+L*(z+1),ze=g+(H+1)+L*(z+1),Be=g+(H+1)+L*z;c.push(Y,le,Be),c.push(le,ze,Be),V+=6}a.addGroup(x,V,b),x+=V,g+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ur=class i extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],u=new k,h=new Pe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,g=3;p<=t;p++,g+=3){let x=n+p/t*s;u.x=e*Math.cos(x),u.y=e*Math.sin(x),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[g]/e+1)/2,h.y=(o[g+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mi=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],g=[],x=[],M=0,S=[],l=n/2,f=0;d(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(g,3)),this.setAttribute("uv",new Ze(x,2));function d(){let m=new k,_=new k,T=0,E=(t-e)/n;for(let y=0;y<=r;y++){let b=[],w=y/r,A=w*(t-e)+e;for(let P=0;P<=s;P++){let I=P/s,R=I*c+a,L=Math.sin(R),D=Math.cos(R);_.x=A*L,_.y=-w*n+l,_.z=A*D,p.push(_.x,_.y,_.z),m.set(L,E,D).normalize(),g.push(m.x,m.y,m.z),x.push(I,1-w),b.push(M++)}S.push(b)}for(let y=0;y<s;y++)for(let b=0;b<r;b++){let w=S[b][y],A=S[b+1][y],P=S[b+1][y+1],I=S[b][y+1];(e>0||b!==0)&&(h.push(w,A,I),T+=3),(t>0||b!==r-1)&&(h.push(A,P,I),T+=3)}u.addGroup(f,T,0),f+=T}function v(m){let _=M,T=new Pe,E=new k,y=0,b=m===!0?e:t,w=m===!0?1:-1;for(let P=1;P<=s;P++)p.push(0,l*w,0),g.push(0,w,0),x.push(.5,.5),M++;let A=M;for(let P=0;P<=s;P++){let R=P/s*c+a,L=Math.cos(R),D=Math.sin(R);E.x=b*D,E.y=l*w,E.z=b*L,p.push(E.x,E.y,E.z),g.push(0,w,0),T.x=L*.5+.5,T.y=D*.5*w+.5,x.push(T.x,T.y),M++}for(let P=0;P<s;P++){let I=_+P,R=A+P;m===!0?h.push(R,R+1,I):h.push(R+1,R,I),y+=3}u.addGroup(f,y,m===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var uc=class i extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),u(n),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(d){let v=new k,m=new k,_=new k;for(let T=0;T<t.length;T+=3)x(t[T+0],v),x(t[T+1],m),x(t[T+2],_),c(v,m,_,d)}function c(d,v,m,_){let T=_+1,E=[];for(let y=0;y<=T;y++){E[y]=[];let b=d.clone().lerp(m,y/T),w=v.clone().lerp(m,y/T),A=T-y;for(let P=0;P<=A;P++)P===0&&y===T?E[y][P]=b:E[y][P]=b.clone().lerp(w,P/A)}for(let y=0;y<T;y++)for(let b=0;b<2*(T-y)-1;b++){let w=Math.floor(b/2);b%2===0?(g(E[y][w+1]),g(E[y+1][w]),g(E[y][w])):(g(E[y][w+1]),g(E[y+1][w+1]),g(E[y+1][w]))}}function u(d){let v=new k;for(let m=0;m<r.length;m+=3)v.x=r[m+0],v.y=r[m+1],v.z=r[m+2],v.normalize().multiplyScalar(d),r[m+0]=v.x,r[m+1]=v.y,r[m+2]=v.z}function h(){let d=new k;for(let v=0;v<r.length;v+=3){d.x=r[v+0],d.y=r[v+1],d.z=r[v+2];let m=l(d)/2/Math.PI+.5,_=f(d)/Math.PI+.5;o.push(m,1-_)}M(),p()}function p(){for(let d=0;d<o.length;d+=6){let v=o[d+0],m=o[d+2],_=o[d+4],T=Math.max(v,m,_),E=Math.min(v,m,_);T>.9&&E<.1&&(v<.2&&(o[d+0]+=1),m<.2&&(o[d+2]+=1),_<.2&&(o[d+4]+=1))}}function g(d){r.push(d.x,d.y,d.z)}function x(d,v){let m=d*3;v.x=e[m+0],v.y=e[m+1],v.z=e[m+2]}function M(){let d=new k,v=new k,m=new k,_=new k,T=new Pe,E=new Pe,y=new Pe;for(let b=0,w=0;b<r.length;b+=9,w+=6){d.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),m.set(r[b+6],r[b+7],r[b+8]),T.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),y.set(o[w+4],o[w+5]),_.copy(d).add(v).add(m).divideScalar(3);let A=l(_);S(T,w+0,d,A),S(E,w+2,v,A),S(y,w+4,m,A)}}function S(d,v,m,_){_<0&&d.x===1&&(o[v]=d.x-1),m.x===0&&m.z===0&&(o[v]=_/2/Math.PI+.5)}function l(d){return Math.atan2(d.z,-d.x)}function f(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,u;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],g=n[s+1]-h,x=(o-h)/g;return(s+x)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Pe:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,s=[],r=[],o=[],a=new k,c=new et;for(let x=0;x<=e;x++){let M=x/e;s[x]=this.getTangentAt(M,new k)}r[0]=new k,o[0]=new k;let u=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),g=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),g<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let x=1;x<=e;x++){if(r[x]=r[x-1].clone(),o[x]=o[x-1].clone(),a.crossVectors(s[x-1],s[x]),a.length()>Number.EPSILON){a.normalize();let M=Math.acos(wt(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(c.makeRotationAxis(a,M))}o[x].crossVectors(s[x],r[x])}if(t===!0){let x=Math.acos(wt(r[0].dot(r[e]),-1,1));x/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(x=-x);for(let M=1;M<=e;M++)r[M].applyMatrix4(c.makeRotationAxis(s[M],x*M)),o[M].crossVectors(s[M],r[M])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},so=class extends fi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),g=c-this.aX,x=u-this.aY;c=g*h-x*p+this.aX,u=g*p+x*h+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hc=class extends so{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vf(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,u){s(o,a,u*(a-r),u*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,u,h,p){let g=(o-r)/u-(a-r)/(u+h)+(a-o)/h,x=(a-o)/h-(c-o)/(h+p)+(c-a)/p;g*=h,x*=h,s(o,a,g,x)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var r0=new k,o0=new k,Lh=new vf,Dh=new vf,Nh=new vf,fc=class extends fi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let u,h;this.closed||a>0?u=s[(a-1)%r]:(o0.subVectors(s[0],s[1]).add(s[0]),u=o0);let p=s[a%r],g=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(r0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=r0),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,M=Math.pow(u.distanceToSquared(p),x),S=Math.pow(p.distanceToSquared(g),x),l=Math.pow(g.distanceToSquared(h),x);S<1e-4&&(S=1),M<1e-4&&(M=S),l<1e-4&&(l=S),Lh.initNonuniformCatmullRom(u.x,p.x,g.x,h.x,M,S,l),Dh.initNonuniformCatmullRom(u.y,p.y,g.y,h.y,M,S,l),Nh.initNonuniformCatmullRom(u.z,p.z,g.z,h.z,M,S,l)}else this.curveType==="catmullrom"&&(Lh.initCatmullRom(u.x,p.x,g.x,h.x,this.tension),Dh.initCatmullRom(u.y,p.y,g.y,h.y,this.tension),Nh.initCatmullRom(u.z,p.z,g.z,h.z,this.tension));return n.set(Lh.calc(c),Dh.calc(c),Nh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function a0(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function g1(i,e){let t=1-i;return t*t*e}function v1(i,e){return 2*(1-i)*i*e}function x1(i,e){return i*i*e}function ta(i,e,t,n){return g1(i,e)+v1(i,t)+x1(i,n)}function _1(i,e){let t=1-i;return t*t*t*e}function y1(i,e){let t=1-i;return 3*t*t*i*e}function M1(i,e){return 3*(1-i)*i*i*e}function b1(i,e){return i*i*i*e}function na(i,e,t,n,s){return _1(i,e)+y1(i,t)+M1(i,n)+b1(i,s)}var ga=class extends fi{constructor(e=new Pe,t=new Pe,n=new Pe,s=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Pe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(na(e,s.x,r.x,o.x,a.x),na(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dc=class extends fi{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(na(e,s.x,r.x,o.x,a.x),na(e,s.y,r.y,o.y,a.y),na(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends fi{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pc=class extends fi{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends fi{constructor(e=new Pe,t=new Pe,n=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Pe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ta(e,s.x,r.x,o.x),ta(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mc=class extends fi{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ta(e,s.x,r.x,o.x),ta(e,s.y,r.y,o.y),ta(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(a0(a,c.x,u.x,h.x,p.x),a0(a,c.y,u.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Pe().fromArray(s))}return this}},l0=Object.freeze({__proto__:null,ArcCurve:hc,CatmullRomCurve3:fc,CubicBezierCurve:ga,CubicBezierCurve3:dc,EllipseCurve:so,LineCurve:va,LineCurve3:pc,QuadraticBezierCurve:xa,QuadraticBezierCurve3:mc,SplineCurve:_a}),gc=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new l0[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),u=c===0?0:1-o/c;return a.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let u=0;u<c.length;u++){let h=c[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new l0[s.type]().fromJSON(s))}return this}},ya=class extends gc{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new va(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new xa(this.currentPoint.clone(),new Pe(e,t),new Pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ga(this.currentPoint.clone(),new Pe(e,t),new Pe(n,s),new Pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _a(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let u=new so(e,t,n,s,r,o,a,c);if(this.curves.length>0){let p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);let h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ro=class extends ya{constructor(e){super(e),this.uuid=mo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ya().fromJSON(s))}return this}};function S1(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,u;if(n&&(r=R1(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,p=c;for(let g=t;g<s;g+=t){let x=i[g],M=i[g+1];x<a&&(a=x),M<c&&(c=M),x>h&&(h=x),M>p&&(p=M)}u=Math.max(h-a,p-c),u=u!==0?32767/u:0}return Ma(r,o,t,a,c,u,0),o}function sp(i,e,t,n,s){let r;if(s===z1(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=c0(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=c0(o/n|0,i[o],i[o+1],r);return r&&oo(r,r.next)&&(Sa(r),r=r.next),r}function hr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(oo(t,t.next)||on(t.prev,t,t.next)===0)){if(Sa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ma(i,e,t,n,s,r,o){if(!i)return;!o&&r&&D1(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,u=i.next;if(r?E1(i,n,s,r):T1(i)){e.push(c.i,i.i,u.i),Sa(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=w1(hr(i),e),Ma(i,e,t,n,s,r,2)):o===2&&A1(i,e,t,n,s,r):Ma(hr(i),e,t,n,s,r,1);break}}}function T1(i){let e=i.prev,t=i,n=i.next;if(on(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,u=n.y,h=Math.min(s,r,o),p=Math.min(a,c,u),g=Math.max(s,r,o),x=Math.max(a,c,u),M=n.next;for(;M!==e;){if(M.x>=h&&M.x<=g&&M.y>=p&&M.y<=x&&ea(s,a,r,c,o,u,M.x,M.y)&&on(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function E1(i,e,t,n){let s=i.prev,r=i,o=i.next;if(on(s,r,o)>=0)return!1;let a=s.x,c=r.x,u=o.x,h=s.y,p=r.y,g=o.y,x=Math.min(a,c,u),M=Math.min(h,p,g),S=Math.max(a,c,u),l=Math.max(h,p,g),f=Vh(x,M,e,t,n),d=Vh(S,l,e,t,n),v=i.prevZ,m=i.nextZ;for(;v&&v.z>=f&&m&&m.z<=d;){if(v.x>=x&&v.x<=S&&v.y>=M&&v.y<=l&&v!==s&&v!==o&&ea(a,h,c,p,u,g,v.x,v.y)&&on(v.prev,v,v.next)>=0||(v=v.prevZ,m.x>=x&&m.x<=S&&m.y>=M&&m.y<=l&&m!==s&&m!==o&&ea(a,h,c,p,u,g,m.x,m.y)&&on(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;v&&v.z>=f;){if(v.x>=x&&v.x<=S&&v.y>=M&&v.y<=l&&v!==s&&v!==o&&ea(a,h,c,p,u,g,v.x,v.y)&&on(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;m&&m.z<=d;){if(m.x>=x&&m.x<=S&&m.y>=M&&m.y<=l&&m!==s&&m!==o&&ea(a,h,c,p,u,g,m.x,m.y)&&on(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function w1(i,e){let t=i;do{let n=t.prev,s=t.next.next;!oo(n,s)&&op(n,t,t.next,s)&&ba(n,s)&&ba(s,n)&&(e.push(n.i,t.i,s.i),Sa(t),Sa(t.next),t=i=s),t=t.next}while(t!==i);return hr(t)}function A1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&F1(o,a)){let c=ap(o,a);o=hr(o,o.next),c=hr(c,c.next),Ma(o,e,t,n,s,r,0),Ma(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function R1(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,u=sp(i,a,c,n,!1);u===u.next&&(u.steiner=!0),s.push(U1(u))}s.sort(C1);for(let r=0;r<s.length;r++)t=P1(s[r],t);return t}function C1(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function P1(i,e){let t=I1(i,e);if(!t)return e;let n=ap(t,i);return hr(n,n.next),hr(t,t.next)}function I1(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(oo(i,t))return t;do{if(oo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,u=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&rp(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);ba(t,i)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&L1(o,t)))&&(o=t,h=p)}t=t.next}while(t!==a);return o}function L1(i,e){return on(i.prev,i,e.prev)<0&&on(e.next,i,i.next)<0}function D1(i,e,t,n){let s=i;do s.z===0&&(s.z=Vh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,N1(s)}function N1(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Vh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function U1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ea(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&rp(i,e,t,n,s,r,o,a)}function F1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!B1(i,e)&&(ba(i,e)&&ba(e,i)&&O1(i,e)&&(on(i.prev,i,e.prev)||on(i,e.prev,e))||oo(i,e)&&on(i.prev,i,i.next)>0&&on(e.prev,e,e.next)>0)}function on(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function oo(i,e){return i.x===e.x&&i.y===e.y}function op(i,e,t,n){let s=Vl(on(i,e,t)),r=Vl(on(i,e,n)),o=Vl(on(t,n,i)),a=Vl(on(t,n,e));return!!(s!==r&&o!==a||s===0&&Hl(i,t,e)||r===0&&Hl(i,n,e)||o===0&&Hl(t,i,n)||a===0&&Hl(t,e,n))}function Hl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Vl(i){return i>0?1:i<0?-1:0}function B1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&op(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ba(i,e){return on(i.prev,i,i.next)<0?on(i,e,i.next)>=0&&on(i,i.prev,e)>=0:on(i,e,i.prev)<0||on(i,i.next,e)<0}function O1(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ap(i,e){let t=Gh(i.i,i.x,i.y),n=Gh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function c0(i,e,t,n){let s=Gh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Sa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function z1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Wh=class{static triangulate(e,t,n=2){return S1(e,t,n)}},Zr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];u0(e),h0(n,e);let o=e.length;t.forEach(u0);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,h0(n,t[c]);let a=Wh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function u0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function h0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ta=class i extends uc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var jt=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),u=a+1,h=c+1,p=e/a,g=t/c,x=[],M=[],S=[],l=[];for(let f=0;f<h;f++){let d=f*g-o;for(let v=0;v<u;v++){let m=v*p-r;M.push(m,-d,0),S.push(0,0,1),l.push(v/a),l.push(1-f/c)}}for(let f=0;f<c;f++)for(let d=0;d<a;d++){let v=d+u*f,m=d+u*(f+1),_=d+1+u*(f+1),T=d+1+u*f;x.push(v,m,T),x.push(m,_,T)}this.setIndex(x),this.setAttribute("position",new Ze(M,3)),this.setAttribute("normal",new Ze(S,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ea=class i extends yt{constructor(e=new ro([new Pe(0,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(r,3)),this.setAttribute("uv",new Ze(o,2));function u(h){let p=s.length/3,g=h.extractPoints(t),x=g.shape,M=g.holes;Zr.isClockWise(x)===!1&&(x=x.reverse());for(let l=0,f=M.length;l<f;l++){let d=M[l];Zr.isClockWise(d)===!0&&(M[l]=d.reverse())}let S=Zr.triangulateShape(x,M);for(let l=0,f=M.length;l<f;l++){let d=M[l];x=x.concat(d)}for(let l=0,f=x.length;l<f;l++){let d=x[l];s.push(d.x,d.y,0),r.push(0,0,1),o.push(d.x,d.y)}for(let l=0,f=S.length;l<f;l++){let d=S[l],v=d[0]+p,m=d[1]+p,_=d[2]+p;n.push(v,m,_),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return k1(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function k1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var wa=class i extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),u=0,h=[],p=new k,g=new k,x=[],M=[],S=[],l=[];for(let f=0;f<=n;f++){let d=[],v=f/n,m=o+v*a,_=e*Math.cos(m),T=Math.sqrt(e*e-_*_),E=0;f===0&&o===0?E=.5/t:f===n&&c===Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){let b=y/t,w=s+b*r;p.x=-T*Math.cos(w),p.y=_,p.z=T*Math.sin(w),M.push(p.x,p.y,p.z),g.copy(p).normalize(),S.push(g.x,g.y,g.z),l.push(b+E,1-v),d.push(u++)}h.push(d)}for(let f=0;f<n;f++)for(let d=0;d<t;d++){let v=h[f][d+1],m=h[f][d],_=h[f+1][d],T=h[f+1][d+1];(f!==0||o>0)&&x.push(v,m,T),(f!==n-1||c<Math.PI)&&x.push(m,_,T)}this.setIndex(x),this.setAttribute("position",new Ze(M,3)),this.setAttribute("normal",new Ze(S,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Aa=class i extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],h=[],p=[],g=new k,x=new k,M=new k;for(let S=0;S<=n;S++){let l=o+S/n*a;for(let f=0;f<=s;f++){let d=f/s*r;x.x=(e+t*Math.cos(l))*Math.cos(d),x.y=(e+t*Math.cos(l))*Math.sin(d),x.z=t*Math.sin(l),u.push(x.x,x.y,x.z),g.x=e*Math.cos(d),g.y=e*Math.sin(d),M.subVectors(x,g).normalize(),h.push(M.x,M.y,M.z),p.push(f/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let l=1;l<=s;l++){let f=(s+1)*S+l-1,d=(s+1)*(S-1)+l-1,v=(s+1)*(S-1)+l,m=(s+1)*S+l;c.push(f,d,m),c.push(d,v,m)}this.setIndex(c),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function gr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(f0(s))s.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(f0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function qn(i){let e={};for(let t=0;t<i.length;t++){let n=gr(i[t]);for(let s in n)e[s]=n[s]}return e}function f0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function H1(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var vr={clone:gr,merge:qn},V1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V1,this.fragmentShader=G1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=H1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new _e().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},vc=class extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var an=class extends Ji{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var fr=class extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=G0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xc=class extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Uh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Is=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_c=class extends Is{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zh:r=e,a=2*t-n;break;case kh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zh:o=e,c=2*n-t;break;case kh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=this._offsetPrev,p=this._offsetNext,g=this._weightPrev,x=this._weightNext,M=(n-t)/(s-t),S=M*M,l=S*M,f=-g*l+2*g*S-g*M,d=(1+g)*l+(-1.5-2*g)*S+(-.5+g)*M+1,v=(-1-x)*l+(1.5+x)*S+.5*M,m=x*l-x*S;for(let _=0;_!==a;++_)r[_]=f*o[h+_]+d*o[u+_]+v*o[c+_]+m*o[p+_];return r}},yc=class extends Is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=(n-t)/(s-t),p=1-h;for(let g=0;g!==a;++g)r[g]=o[u+g]*p+o[c+g]*h;return r}},Mc=class extends Is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bc=class extends Is{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=this.inTangents,p=this.outTangents;if(!h||!p){let M=(n-t)/(s-t),S=1-M;for(let l=0;l!==a;++l)r[l]=o[u+l]*S+o[c+l]*M;return r}let g=a*2,x=e-1;for(let M=0;M!==a;++M){let S=o[u+M],l=o[c+M],f=x*g+M*2,d=p[f],v=p[f+1],m=e*g+M*2,_=h[m],T=h[m+1],E=X1(n,t,d,_,s);r[M]=lp(E,S,v,T,l)}return r}};function lp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function W1(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function X1(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=lp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=W1(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var di=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Uh(e.settings)&&(n.settings={inTangents:Gr(e.settings.inTangents,Array),outTangents:Gr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ia:t=this.InterpolantFactoryMethodDiscrete;break;case nc:t=this.InterpolantFactoryMethodLinear;break;case Xl:t=this.InterpolantFactoryMethodSmooth;break;case Bh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ut("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return nc;case this.InterpolantFactoryMethodSmooth:return Xl;case this.InterpolantFactoryMethodBezier:return Bh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Uh(this.settings)&&(d0(this.settings.inTangents,e),d0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){mt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){mt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&$g(s))for(let a=0,c=s.length;a!==c;++a){let u=s[a];if(isNaN(u)){mt("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(s)c=!0;else{let p=a*n,g=p-n,x=p+n;for(let M=0;M!==n;++M){let S=t[p+M];if(S!==t[g+M]||S!==t[x+M]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,g=o*n;for(let x=0;x!==n;++x)t[g+x]=t[p+x]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Uh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function d0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=nc;var Ls=class extends di{constructor(e,t,n){super(e,t,n)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ia;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends di{constructor(e,t,n,s){super(e,t,n,s)}};Sc.prototype.ValueTypeName="color";var Tc=class extends di{constructor(e,t,n,s){super(e,t,n,s)}};Tc.prototype.ValueTypeName="number";var Ec=class extends Is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),u=e*a;for(let h=u+a;u!==h;u+=4)_n.slerpFlat(r,0,o,u-a,o,u,c);return r}},Ra=class extends di{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ec(this.times,this.values,this.getValueSize(),e)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends di{constructor(e,t,n){super(e,t,n)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=ia;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends di{constructor(e,t,n,s){super(e,t,n,s)}};wc.prototype.ValueTypeName="vector";var Yl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(p0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!p0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function p0(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ac=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,g=u.length;p<g;p+=2){let x=u[p],M=u[p+1];if(x.global&&(x.lastIndex=0),x.test(h))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cp=new Ac,ao=class{constructor(e){this.manager=e!==void 0?e:cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=new WeakMap,Rc=class extends ao{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Yl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let p=Wr.get(o);p===void 0&&(p=[],Wr.set(o,p)),p.push({onLoad:t,onError:s})}return o}let a=Jr("img");function c(){h(),t&&t(this);let p=Wr.get(this)||[];for(let g=0;g<p.length;g++){let x=p[g];x.onLoad&&x.onLoad(this)}Wr.delete(this),r.manager.itemEnd(e)}function u(p){h(),s&&s(p),Yl.remove(`image:${e}`);let g=Wr.get(this)||[];for(let x=0;x<g.length;x++){let M=g[x];M.onError&&M.onError(p)}Wr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Yl.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ca=class extends ao{constructor(e){super(e)}load(e,t,n,s){let r=new Gn,o=new Rc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},lo=class extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Pa=class extends lo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fh=new et,m0=new k,g0=new k,Ia=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;m0.setFromMatrixPosition(e.matrixWorld),t.position.copy(m0),g0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(g0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Fh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Kr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),t.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gl=new k,Wl=new _n,Yi=new k,fs=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Wl,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Wl,Yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Gl,Wl,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Wl,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},As=new k,v0=new Pe,x0=new Pe,Nn=class extends fs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(uh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(uh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,t){return this.getViewBounds(e,v0,x0),t.subVectors(x0,v0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(uh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xh=class extends Ia{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=oa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},La=class extends lo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var Ns=class extends fs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qh=class extends Ia{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},co=class extends lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new qh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ji=class extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Xr=-90,qr=1,Cc=class extends yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nn(Xr,qr,e,t);s.layers=this.layers,this.add(s);let r=new Nn(Xr,qr,e,t);r.layers=this.layers,this.add(r);let o=new Nn(Xr,qr,e,t);o.layers=this.layers,this.add(o);let a=new Nn(Xr,qr,e,t);a.layers=this.layers,this.add(a);let c=new Nn(Xr,qr,e,t);c.layers=this.layers,this.add(c);let u=new Nn(Xr,qr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let u of t)this.remove(u);if(e===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,u,h]=this.children,p=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let l=!1;e.isWebGLRenderer===!0?l=e.state.buffers.depth.getReversed():l=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,g,x),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},Pc=class extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Da=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=q1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function q1(){this._document.hidden===!1&&this.reset()}var _f="\\[\\]\\.:\\/",Y1=new RegExp("["+_f+"]","g"),yf="[^"+_f+"]",Z1="[^"+_f.replace("\\.","")+"]",$1=/((?:WC+[\/:])*)/.source.replace("WC",yf),K1=/(WCOD+)?/.source.replace("WCOD",Z1),J1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yf),j1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yf),Q1=new RegExp("^"+$1+K1+J1+j1+"$"),ev=["material","materials","bones","map"],Yh=class{constructor(e,t,n){let s=n||Jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Jt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Y1,"")}static parseTrackName(e){let t=Q1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ev.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;mt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Jt.Composite=Yh;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vb=new Float32Array(1);var wf=class wf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};wf.prototype.isMatrix2=!0;var Zh=wf;function Mf(i,e,t,n){let s=tv(n);switch(t){case df:return i*e;case Bs:return i*e/s.components*s.byteLength;case Oc:return i*e/s.components*s.byteLength;case Os:return i*e*2/s.components*s.byteLength;case zc:return i*e*2/s.components*s.byteLength;case pf:return i*e*3/s.components*s.byteLength;case Xn:return i*e*4/s.components*s.byteLength;case kc:return i*e*4/s.components*s.byteLength;case Ba:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Wc:return Math.max(i,16)*Math.max(e,8)/4;case Hc:case Gc:return Math.max(i,8)*Math.max(e,8)/2;case Xc:case qc:case Zc:case $c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yc:case Ha:case Kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case eu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case iu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case su:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ru:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ou:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case au:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case hu:case fu:case du:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pu:case mu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Va:case gu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tv(i){switch(i){case Wn:case cf:return{byteLength:1,components:1};case fo:case uf:case Mn:return{byteLength:2,components:1};case Fc:case Bc:return{byteLength:2,components:4};case ki:case Uc:case bi:return{byteLength:4,components:1};case hf:case ff:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ip(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lv(i){let e=new WeakMap;function t(a,c){let u=a.array,h=a.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(c,g),i.bufferData(c,u,h),a.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)x=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,u){let h=c.array,p=c.updateRanges;if(i.bindBuffer(u,a),p.length===0)i.bufferSubData(u,0,h);else{p.sort((x,M)=>x.start-M.start);let g=0;for(let x=1;x<p.length;x++){let M=p[g],S=p[x];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++g,p[g]=S)}p.length=g+1;for(let x=0,M=p.length;x<M;x++){let S=p[x];i.bufferSubData(u,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var cv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uv=`#ifdef USE_ALPHAHASH
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
#endif`,hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mv=`#ifdef USE_AOMAP
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
#endif`,gv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vv=`#ifdef USE_BATCHING
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
#endif`,xv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bv=`#ifdef USE_IRIDESCENCE
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
#endif`,Sv=`#ifdef USE_BUMPMAP
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
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lv=`#define PI 3.141592653589793
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
} // validated`,Dv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nv=`vec3 transformedNormal = objectNormal;
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
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xv=`#ifdef USE_ENVMAP
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
#endif`,qv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$v=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kv=`#ifdef USE_GRADIENTMAP
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
}`,Jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ex=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ox=`PhysicalMaterial material;
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
#endif`,ax=`uniform sampler2D dfgLUT;
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
}`,lx=`
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
#endif`,cx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_x=`#if defined( USE_POINTS_UV )
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
#endif`,yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`#ifdef USE_MORPHTARGETS
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
#endif`,wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lx=`#ifdef USE_NORMALMAP
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
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
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
}`,$x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kx=`#ifdef USE_SKINNING
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
#endif`,Jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jx=`#ifdef USE_SKINNING
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
#endif`,Qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i2=`#ifdef USE_TRANSMISSION
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
#endif`,s2=`#ifdef USE_TRANSMISSION
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
#endif`,r2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u2=`uniform sampler2D t2D;
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
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`#include <common>
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
}`,g2=`#if DEPTH_PACKING == 3200
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
}`,v2=`#define DISTANCE
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
}`,x2=`#define DISTANCE
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
}`,_2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`uniform float scale;
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
}`,b2=`uniform vec3 diffuse;
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
}`,S2=`#include <common>
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
}`,T2=`uniform vec3 diffuse;
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
}`,E2=`#define LAMBERT
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
}`,w2=`#define LAMBERT
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
}`,A2=`#define MATCAP
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
}`,R2=`#define MATCAP
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
}`,C2=`#define NORMAL
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
}`,P2=`#define NORMAL
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
}`,I2=`#define PHONG
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
}`,L2=`#define PHONG
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
}`,D2=`#define STANDARD
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
}`,N2=`#define STANDARD
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
}`,U2=`#define TOON
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
}`,F2=`#define TOON
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
}`,B2=`uniform float size;
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
}`,O2=`uniform vec3 diffuse;
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
}`,z2=`#include <common>
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
}`,k2=`uniform vec3 color;
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
}`,H2=`uniform float rotation;
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
}`,V2=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:cv,alphahash_pars_fragment:uv,alphamap_fragment:hv,alphamap_pars_fragment:fv,alphatest_fragment:dv,alphatest_pars_fragment:pv,aomap_fragment:mv,aomap_pars_fragment:gv,batching_pars_vertex:vv,batching_vertex:xv,begin_vertex:_v,beginnormal_vertex:yv,bsdfs:Mv,iridescence_fragment:bv,bumpmap_pars_fragment:Sv,clipping_planes_fragment:Tv,clipping_planes_pars_fragment:Ev,clipping_planes_pars_vertex:wv,clipping_planes_vertex:Av,color_fragment:Rv,color_pars_fragment:Cv,color_pars_vertex:Pv,color_vertex:Iv,common:Lv,cube_uv_reflection_fragment:Dv,defaultnormal_vertex:Nv,displacementmap_pars_vertex:Uv,displacementmap_vertex:Fv,emissivemap_fragment:Bv,emissivemap_pars_fragment:Ov,colorspace_fragment:zv,colorspace_pars_fragment:kv,envmap_fragment:Hv,envmap_common_pars_fragment:Vv,envmap_pars_fragment:Gv,envmap_pars_vertex:Wv,envmap_physical_pars_fragment:tx,envmap_vertex:Xv,fog_vertex:qv,fog_pars_vertex:Yv,fog_fragment:Zv,fog_pars_fragment:$v,gradientmap_pars_fragment:Kv,lightmap_pars_fragment:Jv,lights_lambert_fragment:jv,lights_lambert_pars_fragment:Qv,lights_pars_begin:ex,lights_toon_fragment:nx,lights_toon_pars_fragment:ix,lights_phong_fragment:sx,lights_phong_pars_fragment:rx,lights_physical_fragment:ox,lights_physical_pars_fragment:ax,lights_fragment_begin:lx,lights_fragment_maps:cx,lights_fragment_end:ux,lightprobes_pars_fragment:hx,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:dx,logdepthbuf_pars_vertex:px,logdepthbuf_vertex:mx,map_fragment:gx,map_pars_fragment:vx,map_particle_fragment:xx,map_particle_pars_fragment:_x,metalnessmap_fragment:yx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:bx,morphcolor_vertex:Sx,morphnormal_vertex:Tx,morphtarget_pars_vertex:Ex,morphtarget_vertex:wx,normal_fragment_begin:Ax,normal_fragment_maps:Rx,normal_pars_fragment:Cx,normal_pars_vertex:Px,normal_vertex:Ix,normalmap_pars_fragment:Lx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Nx,clearcoat_pars_fragment:Ux,iridescence_pars_fragment:Fx,opaque_fragment:Bx,packing:Ox,premultiplied_alpha_fragment:zx,project_vertex:kx,dithering_fragment:Hx,dithering_pars_fragment:Vx,roughnessmap_fragment:Gx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:qx,shadowmap_vertex:Yx,shadowmask_pars_fragment:Zx,skinbase_vertex:$x,skinning_pars_vertex:Kx,skinning_vertex:Jx,skinnormal_vertex:jx,specularmap_fragment:Qx,specularmap_pars_fragment:e2,tonemapping_fragment:t2,tonemapping_pars_fragment:n2,transmission_fragment:i2,transmission_pars_fragment:s2,uv_pars_fragment:r2,uv_pars_vertex:o2,uv_vertex:a2,worldpos_vertex:l2,background_vert:c2,background_frag:u2,backgroundCube_vert:h2,backgroundCube_frag:f2,cube_vert:d2,cube_frag:p2,depth_vert:m2,depth_frag:g2,distance_vert:v2,distance_frag:x2,equirect_vert:_2,equirect_frag:y2,linedashed_vert:M2,linedashed_frag:b2,meshbasic_vert:S2,meshbasic_frag:T2,meshlambert_vert:E2,meshlambert_frag:w2,meshmatcap_vert:A2,meshmatcap_frag:R2,meshnormal_vert:C2,meshnormal_frag:P2,meshphong_vert:I2,meshphong_frag:L2,meshphysical_vert:D2,meshphysical_frag:N2,meshtoon_vert:U2,meshtoon_frag:F2,points_vert:B2,points_frag:O2,shadow_vert:z2,shadow_frag:k2,sprite_vert:H2,sprite_frag:V2},Ge={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},ts={basic:{uniforms:qn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:qn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:qn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:qn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:qn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new _e(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:qn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:qn([Ge.points,Ge.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:qn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:qn([Ge.common,Ge.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:qn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:qn([Ge.sprite,Ge.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:qn([Ge.common,Ge.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:qn([Ge.lights,Ge.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ts.physical={uniforms:qn([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var yu={r:0,b:0,g:0},G2=new et,Lp=new vt;Lp.set(-1,0,0,0,1,0,0,0,1);function W2(i,e,t,n,s,r){let o=new _e(0),a=s===!0?0:1,c,u,h=null,p=0,g=null;function x(d){let v=d.isScene===!0?d.background:null;if(v&&v.isTexture){let m=d.backgroundBlurriness>0;v=e.get(v,m)}return v}function M(d){let v=!1,m=x(d);m===null?l(o,a):m&&m.isColor&&(l(m,1),v=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(d,v){let m=x(v);m&&(m.isCubeTexture||m.mapping===Ua)?(u===void 0&&(u=new ht(new Yt(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:gr(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(_,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=m,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(G2.makeRotationFromEuler(v.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Lp),u.material.toneMapped=At.getTransfer(m.colorSpace)!==Bt,(h!==m||p!==m.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=m,p=m.version,g=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new ht(new jt(2,2),new xt({name:"BackgroundMaterial",uniforms:gr(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=At.getTransfer(m.colorSpace)!==Bt,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||p!==m.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,h=m,p=m.version,g=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function l(d,v){d.getRGB(yu,xf(i)),t.buffers.color.setClear(yu.r,yu.g,yu.b,v,r)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,v=1){o.set(d),a=v,l(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,l(o,a)},render:M,addToRenderList:S,dispose:f}}function X2(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,o=!1;function a(A,P,I,R,L){let D=!1,O=p(A,R,I,P);r!==O&&(r=O,u(r.object)),D=x(A,R,I,L),D&&M(A,R,I,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,m(A,P,I,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function p(A,P,I,R){let L=R.wireframe===!0,D=n[P.id];D===void 0&&(D={},n[P.id]=D);let O=A.isInstancedMesh===!0?A.id:0,V=D[O];V===void 0&&(V={},D[O]=V);let N=V[I.id];N===void 0&&(N={},V[I.id]=N);let z=N[L];return z===void 0&&(z=g(c()),N[L]=z),z}function g(A){let P=[],I=[],R=[];for(let L=0;L<t;L++)P[L]=0,I[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:R,object:A,attributes:{},index:null}}function x(A,P,I,R){let L=r.attributes,D=P.attributes,O=0,V=I.getAttributes();for(let N in V)if(V[N].location>=0){let H=L[N],Y=D[N];if(Y===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor)),H===void 0||H.attribute!==Y||Y&&H.data!==Y.data)return!0;O++}return r.attributesNum!==O||r.index!==R}function M(A,P,I,R){let L={},D=P.attributes,O=0,V=I.getAttributes();for(let N in V)if(V[N].location>=0){let H=D[N];H===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(H=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(H=A.instanceColor));let Y={};Y.attribute=H,H&&H.data&&(Y.data=H.data),L[N]=Y,O++}r.attributes=L,r.attributesNum=O,r.index=R}function S(){let A=r.newAttributes;for(let P=0,I=A.length;P<I;P++)A[P]=0}function l(A){f(A,0)}function f(A,P){let I=r.newAttributes,R=r.enabledAttributes,L=r.attributeDivisors;I[A]=1,R[A]===0&&(i.enableVertexAttribArray(A),R[A]=1),L[A]!==P&&(i.vertexAttribDivisor(A,P),L[A]=P)}function d(){let A=r.newAttributes,P=r.enabledAttributes;for(let I=0,R=P.length;I<R;I++)P[I]!==A[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function v(A,P,I,R,L,D,O){O===!0?i.vertexAttribIPointer(A,P,I,L,D):i.vertexAttribPointer(A,P,I,R,L,D)}function m(A,P,I,R){S();let L=R.attributes,D=I.getAttributes(),O=P.defaultAttributeValues;for(let V in D){let N=D[V];if(N.location>=0){let z=L[V];if(z===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),z!==void 0){let H=z.normalized,Y=z.itemSize,le=e.get(z);if(le===void 0)continue;let ze=le.buffer,Be=le.type,ye=le.bytesPerElement,$=Be===i.INT||Be===i.UNSIGNED_INT||z.gpuType===Uc;if(z.isInterleavedBufferAttribute){let J=z.data,xe=J.stride,ve=z.offset;if(J.isInstancedInterleavedBuffer){for(let Ee=0;Ee<N.locationSize;Ee++)f(N.location+Ee,J.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ee=0;Ee<N.locationSize;Ee++)l(N.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Ee=0;Ee<N.locationSize;Ee++)v(N.location+Ee,Y/N.locationSize,Be,H,xe*ye,(ve+Y/N.locationSize*Ee)*ye,$)}else{if(z.isInstancedBufferAttribute){for(let J=0;J<N.locationSize;J++)f(N.location+J,z.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let J=0;J<N.locationSize;J++)l(N.location+J);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let J=0;J<N.locationSize;J++)v(N.location+J,Y/N.locationSize,Be,H,Y*ye,Y/N.locationSize*J*ye,$)}}else if(O!==void 0){let H=O[V];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(N.location,H);break;case 3:i.vertexAttrib3fv(N.location,H);break;case 4:i.vertexAttrib4fv(N.location,H);break;default:i.vertexAttrib1fv(N.location,H)}}}}d()}function _(){b();for(let A in n){let P=n[A];for(let I in P){let R=P[I];for(let L in R){let D=R[L];for(let O in D)h(D[O].object),delete D[O];delete R[L]}}delete n[A]}}function T(A){if(n[A.id]===void 0)return;let P=n[A.id];for(let I in P){let R=P[I];for(let L in R){let D=R[L];for(let O in D)h(D[O].object),delete D[O];delete R[L]}}delete n[A.id]}function E(A){for(let P in n){let I=n[P];for(let R in I){let L=I[R];if(L[A.id]===void 0)continue;let D=L[A.id];for(let O in D)h(D[O].object),delete D[O];delete L[A.id]}}}function y(A){for(let P in n){let I=n[P],R=A.isInstancedMesh===!0?A.id:0,L=I[R];if(L!==void 0){for(let D in L){let O=L[D];for(let V in O)h(O[V].object),delete O[V];delete L[D]}delete I[R],Object.keys(I).length===0&&delete n[P]}}}function b(){w(),o=!0,r!==s&&(r=s,u(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:_,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:S,enableAttribute:l,disableUnusedAttributes:d}}function q2(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];t.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Y2(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Xn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let y=E===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Wn&&E!==bi&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(ut("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),l=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:l,maxAttributes:f,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:m,maxSamples:_,samples:T}}function Z2(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ni,a=new vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){let x=p.length!==0||g||n!==0||s;return s=g,n=p.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,g){t=h(p,g,0)},this.setState=function(p,g,x){let M=p.clippingPlanes,S=p.clipIntersection,l=p.clipShadows,f=i.get(p);if(!s||M===null||M.length===0||r&&!l)r?h(null):u();else{let d=r?0:n,v=d*4,m=f.clippingState||null;c.value=m,m=h(M,g,v,x);for(let _=0;_!==v;++_)m[_]=t[_];f.clippingState=m,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=d}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,g,x,M){let S=p!==null?p.length:0,l=null;if(S!==0){if(l=c.value,M!==!0||l===null){let f=x+S*4,d=g.matrixWorldInverse;a.getNormalMatrix(d),(l===null||l.length<f)&&(l=new Float32Array(f));for(let v=0,m=x;v!==S;++v,m+=4)o.copy(p[v]).applyMatrix4(d,a),o.normal.toArray(l,m),l[m+3]=o.constant}c.value=l,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,l}}var vo=4,$2=6,K2=20,J2=256,Ga=new Ns,up=new _e,Af=null,Rf=0,Cf=0,Pf=!1,j2=new k,xr=new k,bu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=j2}=r;Af=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Af,Rf,Cf),this._renderer.xr.enabled=Pf,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Af=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Mn,format:Xn,colorSpace:sa,depthBuffer:!1},s=hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Q2(r)),this._blurMaterial=t_(r,e,t),this._ggxMaterial=e_(r,e,t)}return s}_compileMaterial(e){let t=new ht(new yt,e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,s,r){let c=new Nn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,x=p.toneMapping;p.getClearColor(up),p.toneMapping=zi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new Yt,new un({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,l=S.material,f=!1,d=e.background;d?d.isColor&&(l.color.copy(d),e.background=null,f=!0):(l.color.copy(up),f=!0);for(let v=0;v<6;v++){let m=v%3;m===0?(c.up.set(0,u[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):m===1?(c.up.set(0,0,u[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,u[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));let _=this._cubeSize;go(s,m*_,v>2?_:0,_,_),p.setRenderTarget(s),f&&p.render(S,c),p.render(e,c)}p.toneMapping=x,p.autoClear=g,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Us||e.mapping===mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;go(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ga)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),g=u*1.25,x=p*g,{_lodMax:M}=this,S=this._sizeLods[n],l=3*S*(n>M-vo?n-M+vo:0),f=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=x,c.mipInt.value=M-t,go(r,l,f,3*S,2*S),s.setRenderTarget(r),s.render(a,Ga),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=M-n,go(e,l,f,3*S,2*S),s.setRenderTarget(e),s.render(a,Ga)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let u=a.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-vo?s-this._lodMax+vo:0),g=4*(this._cubeSize-h);go(t,p,g,3*h,2*h),o.setRenderTarget(t),o.render(c,Ga)}};function Q2(i){let e=[],t=[],n=i,s=i-vo+1+$2;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,u=1+a,h=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,x=3,M=new Float32Array(x*g*p),S=new Float32Array(x*g*p);for(let f=0;f<p;f++){let d=f%3*2/3-1,v=f>2?0:-1,m=[d,v,0,d+2/3,v,0,d+2/3,v+1,0,d,v,0,d+2/3,v+1,0,d,v+1,0];M.set(m,x*g*f);for(let _=0;_<g;_++){let T=h[_*2]*2-1,E=h[_*2+1]*2-1;f===0?xr.set(1,E,T):f===1?xr.set(-T,1,-E):f===2?xr.set(-T,E,1):f===3?xr.set(-1,E,-T):f===4?xr.set(-T,-1,E):xr.set(T,E,-1),xr.toArray(S,(f*g+_)*x)}}let l=new yt;l.setAttribute("position",new Ut(M,x)),l.setAttribute("outputDirection",new Ut(S,x)),t.push(new ht(l,null)),n>vo&&n--}return{lodMeshes:t,sizeLods:e}}function hp(i,e,t){let n=new zt(i,e,t);return n.texture.mapping=Ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function e_(i,e,t){return new xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function t_(i,e,t){return new xt({name:"SphericalGaussianBlur",defines:{SAMPLES:K2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function fp(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function dp(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Eu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Su=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new pa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yt(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:ei});r.uniforms.tEquirect.value=t;let o=new ht(s,r),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=Lt),new Cc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function n_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(g,x=!1){return g==null?null:x?o(g):r(g)}function r(g){if(g&&g.isTexture){let x=g.mapping;if(x===Lc||x===Dc)if(e.has(g)){let M=e.get(g).texture;return a(M,g.mapping)}else{let M=g.image;if(M&&M.height>0){let S=new Su(M.height);return S.fromEquirectangularTexture(i,g),e.set(g,S),g.addEventListener("dispose",u),a(S.texture,g.mapping)}else return null}}return g}function o(g){if(g&&g.isTexture){let x=g.mapping,M=x===Lc||x===Dc,S=x===Us||x===mr;if(M||S){let l=t.get(g),f=l!==void 0?l.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==f)return n===null&&(n=new bu(i)),l=M?n.fromEquirectangular(g,l):n.fromCubemap(g,l),l.texture.pmremVersion=g.pmremVersion,t.set(g,l),l.texture;if(l!==void 0)return l.texture;{let d=g.image;return M&&d&&d.height>0||S&&d&&c(d)?(n===null&&(n=new bu(i)),l=M?n.fromEquirectangular(g):n.fromCubemap(g),l.texture.pmremVersion=g.pmremVersion,t.set(g,l),g.addEventListener("dispose",h),l.texture):null}}}return g}function a(g,x){return x===Lc?g.mapping=Us:x===Dc&&(g.mapping=mr),g}function c(g){let x=0,M=6;for(let S=0;S<M;S++)g[S]!==void 0&&x++;return x===M}function u(g){let x=g.target;x.removeEventListener("dispose",u);let M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function h(g){let x=g.target;x.removeEventListener("dispose",h);let M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function i_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&lr("WebGLRenderer: "+n+" extension not supported."),s}}}function s_(i,e,t,n){let s={},r=new WeakMap;function o(p){let g=p.target;g.index!==null&&e.remove(g.index);for(let M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",o),delete s[g.id];let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function a(p,g){return s[g.id]===!0||(g.addEventListener("dispose",o),s[g.id]=!0,t.memory.geometries++),g}function c(p){let g=p.attributes;for(let x in g)e.update(g[x],i.ARRAY_BUFFER)}function u(p){let g=[],x=p.index,M=p.attributes.position,S=0;if(M===void 0)return;if(x!==null){let d=x.array;S=x.version;for(let v=0,m=d.length;v<m;v+=3){let _=d[v+0],T=d[v+1],E=d[v+2];g.push(_,T,T,E,E,_)}}else{let d=M.array;S=M.version;for(let v=0,m=d.length/3-1;v<m;v+=3){let _=v+0,T=v+1,E=v+2;g.push(_,T,T,E,E,_)}}let l=new(M.count>=65535?ha:ua)(g,1);l.version=S;let f=r.get(p);f&&e.remove(f),r.set(p,l)}function h(p){let g=r.get(p);if(g){let x=p.index;x!==null&&g.version<x.version&&u(p)}else u(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function r_(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,g){i.drawElements(n,g,r,p*o),t.update(g,n,1)}function u(p,g,x){x!==0&&(i.drawElementsInstanced(n,g,r,p*o,x),t.update(g,n,x))}function h(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,p,0,x);let S=0;for(let l=0;l<x;l++)S+=g[l];t.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function o_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function a_(i,e,t){let n=new WeakMap,s=new gt;function r(o,a,c){let u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,g=n.get(a);if(g===void 0||g.count!==p){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};g!==void 0&&g.texture.dispose();let x=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,l=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],d=a.morphAttributes.color||[],v=0;x===!0&&(v=1),M===!0&&(v=2),S===!0&&(v=3);let m=a.attributes.position.count*v,_=1;m>e.maxTextureSize&&(_=Math.ceil(m/e.maxTextureSize),m=e.maxTextureSize);let T=new Float32Array(m*_*4*p),E=new aa(T,m,_,p);E.type=bi,E.needsUpdate=!0;let y=v*4;for(let w=0;w<p;w++){let A=l[w],P=f[w],I=d[w],R=m*_*4*w;for(let L=0;L<A.count;L++){let D=L*y;x===!0&&(s.fromBufferAttribute(A,L),T[R+D+0]=s.x,T[R+D+1]=s.y,T[R+D+2]=s.z,T[R+D+3]=0),M===!0&&(s.fromBufferAttribute(P,L),T[R+D+4]=s.x,T[R+D+5]=s.y,T[R+D+6]=s.z,T[R+D+7]=0),S===!0&&(s.fromBufferAttribute(I,L),T[R+D+8]=s.x,T[R+D+9]=s.y,T[R+D+10]=s.z,T[R+D+11]=I.itemSize===4?s.w:1)}}g={count:p,texture:E,size:new Pe(m,_)},n.set(a,g),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let S=0;S<u.length;S++)x+=u[S];let M=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function l_(i,e,t,n,s){let r=new WeakMap;function o(u){let h=s.render.frame,p=u.geometry,g=e.get(u,p);if(r.get(g)!==h&&(e.update(g),r.set(g,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let x=u.skeleton;r.get(x)!==h&&(x.update(),r.set(x,h))}return g}function a(){r=new WeakMap}function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var c_={[tf]:"LINEAR_TONE_MAPPING",[nf]:"REINHARD_TONE_MAPPING",[sf]:"CINEON_TONE_MAPPING",[rf]:"ACES_FILMIC_TONE_MAPPING",[af]:"AGX_TONE_MAPPING",[Na]:"NEUTRAL_TONE_MAPPING",[of]:"CUSTOM_TONE_MAPPING"};function u_(i,e,t,n,s,r){let o=new zt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,u=new yt;u.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ze([0,2,0,0,2,0],2));let h=new vc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ht(u,h),g=new Ns(-1,1,1,-1,0,1),x=null,M=null,S=!1,l,f=null,d=[],v=!1;this.setSize=function(m,_){o.setSize(m,_),a!==null&&a.setSize(m,_),c!==null&&c.setSize(m,_);for(let T=0;T<d.length;T++){let E=d[T];E.setSize&&E.setSize(m,_)}},this.setEffects=function(m){d=m,v=d.length>0&&d[0].isRenderPass===!0;let _=o.width,T=o.height;d.length>0&&a===null&&(a=new zt(_,T,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),c=new zt(_,T,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<d.length;E++){let y=d[E];y.setSize&&y.setSize(_,T)}},this.begin=function(m,_){if(S||m.toneMapping===zi&&d.length===0)return!1;if(f=_,_!==null){let T=_.width,E=_.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return v===!1&&m.setRenderTarget(o),l=m.toneMapping,m.toneMapping=zi,!0},this.hasRenderPass=function(){return v},this.end=function(m,_){m.toneMapping=l,S=!0;let T=o,E=a;for(let y=0;y<d.length;y++){let b=d[y];b.enabled!==!1&&(b.render(m,E,T,_),b.needsSwap!==!1&&(T=E,E=E===a?c:a))}if(x!==m.outputColorSpace||M!==m.toneMapping){x=m.outputColorSpace,M=m.toneMapping,h.defines={},At.getTransfer(x)===Bt&&(h.defines.SRGB_TRANSFER="");let y=c_[M];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,m.setRenderTarget(f),m.render(p,g),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}var Dp=new Gn,Df=new Ps(1,1),Np=new aa,Up=new rc,Fp=new pa,pp=[],mp=[],gp=new Float32Array(16),vp=new Float32Array(9),xp=new Float32Array(4);function _o(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pp[s];if(r===void 0&&(r=new Float32Array(s),pp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function En(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wu(i,e){let t=mp[e];t===void 0&&(t=new Int32Array(e),mp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2fv(this.addr,e),wn(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;i.uniform3fv(this.addr,e),wn(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4fv(this.addr,e),wn(t,e)}}function m_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(En(t,n))return;xp.set(n),i.uniformMatrix2fv(this.addr,!1,xp),wn(t,n)}}function g_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(En(t,n))return;vp.set(n),i.uniformMatrix3fv(this.addr,!1,vp),wn(t,n)}}function v_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(En(t,n))return;gp.set(n),i.uniformMatrix4fv(this.addr,!1,gp),wn(t,n)}}function x_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2iv(this.addr,e),wn(t,e)}}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;i.uniform3iv(this.addr,e),wn(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4iv(this.addr,e),wn(t,e)}}function b_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2uiv(this.addr,e),wn(t,e)}}function T_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;i.uniform3uiv(this.addr,e),wn(t,e)}}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4uiv(this.addr,e),wn(t,e)}}function w_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Df.compareFunction=t.isReversedDepthBuffer()?_u:xu,r=Df):r=Dp,t.setTexture2D(e||r,s)}function A_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Up,s)}function R_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fp,s)}function C_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Np,s)}function P_(i){switch(i){case 5126:return h_;case 35664:return f_;case 35665:return d_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return v_;case 5124:case 35670:return x_;case 35667:case 35671:return __;case 35668:case 35672:return y_;case 35669:case 35673:return M_;case 5125:return b_;case 36294:return S_;case 36295:return T_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}function I_(i,e){i.uniform1fv(this.addr,e)}function L_(i,e){let t=_o(e,this.size,2);i.uniform2fv(this.addr,t)}function D_(i,e){let t=_o(e,this.size,3);i.uniform3fv(this.addr,t)}function N_(i,e){let t=_o(e,this.size,4);i.uniform4fv(this.addr,t)}function U_(i,e){let t=_o(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function F_(i,e){let t=_o(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function B_(i,e){let t=_o(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function O_(i,e){i.uniform1iv(this.addr,e)}function z_(i,e){i.uniform2iv(this.addr,e)}function k_(i,e){i.uniform3iv(this.addr,e)}function H_(i,e){i.uniform4iv(this.addr,e)}function V_(i,e){i.uniform1uiv(this.addr,e)}function G_(i,e){i.uniform2uiv(this.addr,e)}function W_(i,e){i.uniform3uiv(this.addr,e)}function X_(i,e){i.uniform4uiv(this.addr,e)}function q_(i,e,t){let n=this.cache,s=e.length,r=wu(t,s);En(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Df:o=Dp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Y_(i,e,t){let n=this.cache,s=e.length,r=wu(t,s);En(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Up,r[o])}function Z_(i,e,t){let n=this.cache,s=e.length,r=wu(t,s);En(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Fp,r[o])}function $_(i,e,t){let n=this.cache,s=e.length,r=wu(t,s);En(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Np,r[o])}function K_(i){switch(i){case 5126:return I_;case 35664:return L_;case 35665:return D_;case 35666:return N_;case 35674:return U_;case 35675:return F_;case 35676:return B_;case 5124:case 35670:return O_;case 35667:case 35671:return z_;case 35668:case 35672:return k_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return G_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return $_}}var Nf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=P_(t.type)}},Uf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K_(t.type)}},Ff=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},If=/(\w+)(\])?(\[|\.)?/g;function _p(i,e){i.seq.push(e),i.map[e.id]=e}function J_(i,e,t){let n=i.name,s=n.length;for(If.lastIndex=0;;){let r=If.exec(n),o=If.lastIndex,a=r[1],c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){_p(t,u===void 0?new Nf(a,i,e):new Uf(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Ff(a),_p(t,p)),t=p}}}var xo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);J_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function yp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var j_=37297,Q_=0;function ey(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Mp=new vt;function ty(i){At._getMatrix(Mp,At.workingColorSpace,i);let e=`mat3( ${Mp.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(i)){case ra:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ey(i.getShaderSource(e),a)}else return r}function ny(i,e){let t=ty(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var iy={[tf]:"Linear",[nf]:"Reinhard",[sf]:"Cineon",[rf]:"ACESFilmic",[af]:"AgX",[Na]:"Neutral",[of]:"Custom"};function sy(i,e){let t=iy[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Mu=new k;function ry(){At.getLuminanceCoefficients(Mu);let i=Mu.x.toFixed(4),e=Mu.y.toFixed(4),t=Mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function ay(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ly(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xa(i){return i!==""}function Sp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(i){return i.replace(cy,hy)}var uy=new Map;function hy(i,e){let t=dt[e];if(t===void 0){let n=uy.get(e);if(n!==void 0)t=dt[n],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bf(t)}var fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(i){return i.replace(fy,dy)}function dy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var py={[dr]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function my(i){return py[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gy={[Us]:"ENVMAP_TYPE_CUBE",[mr]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE_UV"};function vy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":gy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var xy={[mr]:"ENVMAP_MODE_REFRACTION"};function _y(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":xy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yy={[ef]:"ENVMAP_BLENDING_MULTIPLY",[k0]:"ENVMAP_BLENDING_MIX",[H0]:"ENVMAP_BLENDING_ADD"};function My(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":yy[i.combine]||"ENVMAP_BLENDING_NONE"}function by(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=my(t),u=vy(t),h=_y(t),p=My(t),g=by(t),x=oy(t),M=ay(r),S=s.createProgram(),l,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xa).join(`
`),l.length>0&&(l+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xa).join(`
`),f.length>0&&(f+=`
`)):(l=[wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),f=[wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?dt.tonemapping_pars_fragment:"",t.toneMapping!==zi?sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,ny("linearToOutputTexel",t.outputColorSpace),ry(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),o=Bf(o),o=Sp(o,t),o=Tp(o,t),a=Bf(a),a=Sp(a,t),a=Tp(a,t),o=Ep(o),a=Ep(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,l=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,f=["#define varying in",t.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=d+l+o,m=d+f+a,_=yp(s,s.VERTEX_SHADER,v),T=yp(s,s.FRAGMENT_SHADER,m);s.attachShader(S,_),s.attachShader(S,T),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function E(A){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(S)||"",I=s.getShaderInfoLog(_)||"",R=s.getShaderInfoLog(T)||"",L=P.trim(),D=I.trim(),O=R.trim(),V=!0,N=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,_,T);else{let z=bp(s,_,"vertex"),H=bp(s,T,"fragment");mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+z+`
`+H)}else L!==""?ut("WebGLProgram: Program Info Log:",L):(D===""||O==="")&&(N=!1);N&&(A.diagnostics={runnable:V,programLog:L,vertexShader:{log:D,prefix:l},fragmentShader:{log:O,prefix:f}})}s.deleteShader(_),s.deleteShader(T),y=new xo(s,S),b=ly(s,S)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(S,j_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q_++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=_,this.fragmentShader=T,this}var Ty=0,Of=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zf(e),t.set(e,n)),n}},zf=class{constructor(e){this.id=Ty++,this.code=e,this.usedTimes=0}};function Ey(i){return i===Os||i===Ha||i===Va}function wy(i,e,t,n,s,r){let o=new la,a=new Of,c=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,g=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return c.add(y),y===0?"uv":`uv${y}`}function S(y,b,w,A,P,I){let R=A.fog,L=P.geometry,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=e.get(y.envMap||D,O),N=V&&V.mapping===Ua?V.image.height:null,z=x[y.type];y.precision!==null&&(g=n.getMaxPrecision(y.precision),g!==y.precision&&ut("WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let H=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Y=H!==void 0?H.length:0,le=0;L.morphAttributes.position!==void 0&&(le=1),L.morphAttributes.normal!==void 0&&(le=2),L.morphAttributes.color!==void 0&&(le=3);let ze,Be,ye,$;if(z){let rt=ts[z];ze=rt.vertexShader,Be=rt.fragmentShader}else{ze=y.vertexShader,Be=y.fragmentShader;let rt=a.getVertexShaderStage(y),tt=a.getFragmentShaderStage(y);a.update(y,rt,tt),ye=rt.id,$=tt.id}let J=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),ve=P.isInstancedMesh===!0,Ee=P.isBatchedMesh===!0,We=!!y.map,Ne=!!y.matcap,nt=!!V,He=!!y.aoMap,je=!!y.lightMap,ne=!!y.bumpMap&&y.wireframe===!1,be=!!y.normalMap,Q=!!y.displacementMap,ie=!!y.emissiveMap,ee=!!y.metalnessMap,ue=!!y.roughnessMap,B=y.anisotropy>0,ge=y.clearcoat>0,te=y.dispersion>0,U=y.retroreflectivity>0,C=y.iridescence>0,G=y.sheen>0,X=y.transmission>0,j=B&&!!y.anisotropyMap,oe=ge&&!!y.clearcoatMap,me=ge&&!!y.clearcoatNormalMap,ce=ge&&!!y.clearcoatRoughnessMap,fe=C&&!!y.iridescenceMap,Ie=C&&!!y.iridescenceThicknessMap,$e=G&&!!y.sheenColorMap,Ce=G&&!!y.sheenRoughnessMap,Le=!!y.specularMap,Fe=!!y.specularColorMap,Ke=!!y.specularIntensityMap,ct=X&&!!y.transmissionMap,q=X&&!!y.thicknessMap,W=!!y.gradientMap,de=!!y.alphaMap,Ue=y.alphaTest>0,Ve=!!y.alphaHash,Se=!!y.extensions,De=zi;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(De=i.toneMapping);let Ae={shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:ze,fragmentShader:Be,defines:y.defines,customVertexShaderID:ye,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ee,batchingColor:Ee&&P._colorsTexture!==null,instancing:ve,instancingColor:ve&&P.instanceColor!==null,instancingMorph:ve&&P.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:Ne,envMap:nt,envMapMode:nt&&V.mapping,envMapCubeUVHeight:N,aoMap:He,lightMap:je,bumpMap:ne,normalMap:be,displacementMap:Q,emissiveMap:ie,normalMapObjectSpace:be&&y.normalMapType===W0,normalMapTangentSpace:be&&y.normalMapType===vu,packedNormalMap:be&&y.normalMapType===vu&&Ey(y.normalMap.format),metalnessMap:ee,roughnessMap:ue,anisotropy:B,anisotropyMap:j,clearcoat:ge,clearcoatMap:oe,clearcoatNormalMap:me,clearcoatRoughnessMap:ce,dispersion:te,retroreflection:U,iridescence:C,iridescenceMap:fe,iridescenceThicknessMap:Ie,sheen:G,sheenColorMap:$e,sheenRoughnessMap:Ce,specularMap:Le,specularColorMap:Fe,specularIntensityMap:Ke,transmission:X,transmissionMap:ct,thicknessMap:q,gradientMap:W,opaque:y.transparent===!1&&y.blending===ho&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:Ue,alphaHash:Ve,combine:y.combine,mapUv:We&&M(y.map.channel),aoMapUv:He&&M(y.aoMap.channel),lightMapUv:je&&M(y.lightMap.channel),bumpMapUv:ne&&M(y.bumpMap.channel),normalMapUv:be&&M(y.normalMap.channel),displacementMapUv:Q&&M(y.displacementMap.channel),emissiveMapUv:ie&&M(y.emissiveMap.channel),metalnessMapUv:ee&&M(y.metalnessMap.channel),roughnessMapUv:ue&&M(y.roughnessMap.channel),anisotropyMapUv:j&&M(y.anisotropyMap.channel),clearcoatMapUv:oe&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&M(y.sheenRoughnessMap.channel),specularMapUv:Le&&M(y.specularMap.channel),specularColorMapUv:Fe&&M(y.specularColorMap.channel),specularIntensityMapUv:Ke&&M(y.specularIntensityMap.channel),transmissionMapUv:ct&&M(y.transmissionMap.channel),thicknessMapUv:q&&M(y.thicknessMap.channel),alphaMapUv:de&&M(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(be||B),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(We||de),fog:!!R,useFog:y.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&be===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xe,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:le,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&At.getTransfer(y.map.colorSpace)===Bt,decodeVideoTextureEmissive:ie&&y.emissiveMap.isVideoTexture===!0&&At.getTransfer(y.emissiveMap.colorSpace)===Bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===mn,flipSided:y.side===Un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function l(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let w in y.defines)b.push(w),b.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(f(b,y),d(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function f(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function d(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function v(y){let b=x[y.type],w;if(b){let A=ts[b];w=vr.clone(A.uniforms)}else w=y.uniforms;return w}function m(y,b){let w=h.get(b);return w!==void 0?++w.usedTimes:(w=new Sy(i,b,y,s),u.push(w),h.set(b,w)),w}function _(y){if(--y.usedTimes===0){let b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function E(){a.dispose()}return{getParameters:S,getProgramCacheKey:l,getUniforms:v,acquireProgram:m,releaseProgram:_,releaseShaderCache:T,programs:u,dispose:E}}function Ay(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ry(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ap(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function a(g,x,M,S,l,f){let d=i[e];return d===void 0?(d={id:g.id,object:g,geometry:x,material:M,materialVariant:o(g),groupOrder:S,renderOrder:g.renderOrder,z:l,group:f},i[e]=d):(d.id=g.id,d.object=g,d.geometry=x,d.material=M,d.materialVariant=o(g),d.groupOrder=S,d.renderOrder=g.renderOrder,d.z=l,d.group=f),e++,d}function c(g,x,M,S,l,f,d){d.reversedDepth===!0&&(l=-l);let v=a(g,x,M,S,l,f);M.transmission>0?n.push(v):M.transparent===!0?s.push(v):t.push(v)}function u(g,x,M,S,l,f){let d=a(g,x,M,S,l,f);M.transmission>0?n.unshift(d):M.transparent===!0?s.unshift(d):t.unshift(d)}function h(g,x){t.length>1&&t.sort(g||Ry),n.length>1&&n.sort(x||Ap),s.length>1&&s.sort(x||Ap)}function p(){for(let g=e,x=i.length;g<x;g++){let M=i[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:p,sort:h}}function Cy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Rp,i.set(n,[o])):s>=r.length?(o=new Rp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Py(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new _e};break;case"SpotLight":t={position:new k,direction:new k,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Iy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ly=0;function Dy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ny(i){let e=new Py,t=Iy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new k);let s=new k,r=new et,o=new et;function a(u){let h=0,p=0,g=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let x=0,M=0,S=0,l=0,f=0,d=0,v=0,m=0,_=0,T=0,E=0,y=0,b=0,w=0;u.sort(Dy);for(let P=0,I=u.length;P<I;P++){let R=u[P],L=R.color,D=R.intensity,O=R.distance,V=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Os?V=R.shadow.map.texture:V=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=L.r*D,p+=L.g*D,g+=L.b*D;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],D);w++}else if(R.isSunLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let z=R.shadow,H=t.get(R);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[M]=H,n.sunShadowMap[M]=V;let Y=z.getViewportCount();for(let le=0;le<Y;le++)n.sunShadowMatrix[S+le]=z.getMatrix(le),n.sunShadowCascade[S+le]=z._cascadeData[le];S+=Y,M++}n.sun[x]=N,x++}else if(R.isDirectionalLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let z=R.shadow,H=t.get(R);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,n.directionalShadow[l]=H,n.directionalShadowMap[l]=V,n.directionalShadowMatrix[l]=R.shadow.matrix,_++}n.directional[l]=N,l++}else if(R.isSpotLight){let N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(L).multiplyScalar(D),N.distance=O,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[d]=N;let z=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,z.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[d]=z.matrix,R.castShadow){let H=t.get(R);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,n.spotShadow[d]=H,n.spotShadowMap[d]=V,E++}d++}else if(R.isRectAreaLight){let N=e.get(R);N.color.copy(L).multiplyScalar(D),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[v]=N,v++}else if(R.isPointLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){let z=R.shadow,H=t.get(R);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,n.pointShadow[f]=H,n.pointShadowMap[f]=V,n.pointShadowMatrix[f]=R.shadow.matrix,T++}n.point[f]=N,f++}else if(R.isHemisphereLight){let N=e.get(R);N.skyColor.copy(R.color).multiplyScalar(D),N.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[m]=N,m++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=g;let A=n.hash;(A.sunLength!==x||A.directionalLength!==l||A.pointLength!==f||A.spotLength!==d||A.rectAreaLength!==v||A.hemiLength!==m||A.numSunShadows!==M||A.numDirectionalShadows!==_||A.numPointShadows!==T||A.numSpotShadows!==E||A.numSpotMaps!==y||A.numLightProbes!==w)&&(n.sun.length=x,n.directional.length=l,n.spot.length=d,n.rectArea.length=v,n.point.length=f,n.hemi.length=m,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,A.sunLength=x,A.directionalLength=l,A.pointLength=f,A.spotLength=d,A.rectAreaLength=v,A.hemiLength=m,A.numSunShadows=M,A.numDirectionalShadows=_,A.numPointShadows=T,A.numSpotShadows=E,A.numSpotMaps=y,A.numLightProbes=w,n.version=Ly++)}function c(u,h){let p=0,g=0,x=0,M=0,S=0,l=0,f=h.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){let m=u[d];if(m.isSunLight){let _=n.sun[p];_.direction.setFromMatrixPosition(m.matrixWorld),_.direction.transformDirection(f),p++}else if(m.isDirectionalLight){let _=n.directional[g];_.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(f),g++}else if(m.isSpotLight){let _=n.spot[M];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(f),M++}else if(m.isRectAreaLight){let _=n.rectArea[S];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),o.identity(),r.copy(m.matrixWorld),r.premultiply(f),o.extractRotation(r),_.halfWidth.set(m.width*.5,0,0),_.halfHeight.set(0,m.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),S++}else if(m.isPointLight){let _=n.point[x];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),x++}else if(m.isHemisphereLight){let _=n.hemi[l];_.direction.setFromMatrixPosition(m.matrixWorld),_.direction.transformDirection(f),l++}}}return{setup:a,setupView:c,state:n}}function Cp(i){let e=new Ny(i),t=[],n=[],s=[];function r(g){p.camera=g,t.length=0,n.length=0,s.length=0}function o(g){t.push(g)}function a(g){n.push(g)}function c(g){s.push(g)}function u(){e.setup(t)}function h(g){e.setupView(t,g)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Uy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Cp(i),e.set(s,[a])):r>=o.length?(a=new Cp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,By=`uniform sampler2D shadow_pass;
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
}`,Oy=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],zy=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Pp=new et,Wa=new k,Lf=new k;function ky(i,e,t){let n=new no,s=new Pe,r=new Pe,o=new gt,a=new fr,c=new xc,u={},h=t.maxTextureSize,p={[Qi]:Un,[Un]:Qi,[mn]:mn},g=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Fy,fragmentShader:By}),x=g.clone();x.defines.HORIZONTAL_PASS=1;let M=new yt;M.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ht(M,g),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let f=this.type;this.render=function(T,E,y){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||T.length===0)return;this.type===M0&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dr);let b=i.getRenderTarget(),w=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ei),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let I=f!==this.type;I&&E.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(L=>L.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,L=T.length;R<L;R++){let D=T[R],O=D.shadow;if(O===void 0){ut("WebGLShadowMap:",D,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let V=O.getFrameExtents();s.multiply(V),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,O.mapSize.y=r.y));let N=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=N,O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===uo){if(D.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new zt(s.x,s.y,{format:Os,type:Mn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),O.map.texture.name=D.name+".shadowMap",O.map.depthTexture=new Ps(s.x,s.y,bi),O.map.depthTexture.name=D.name+".shadowMapDepth",O.map.depthTexture.format=$i,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=xn,O.map.depthTexture.magFilter=xn}else D.isPointLight?(O.map=new Su(s.x),O.map.depthTexture=new cc(s.x,ki)):(O.map=new zt(s.x,s.y),O.map.depthTexture=new Ps(s.x,s.y,ki)),O.map.depthTexture.name=D.name+".shadowMap",O.map.depthTexture.format=$i,this.type===dr?(O.map.depthTexture.compareFunction=N?_u:xu,O.map.depthTexture.minFilter=Lt,O.map.depthTexture.magFilter=Lt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=xn,O.map.depthTexture.magFilter=xn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();D.isPointLight!==!0&&O.updateMatrices(D,y);for(let H=0;H<z;H++){let Y=O.getCamera(H);if(D.isPointLight){let le=O.camera,ze=O.matrix,Be=D.distance||le.far;Be!==le.far&&(le.far=Be,le.updateProjectionMatrix()),Wa.setFromMatrixPosition(D.matrixWorld),le.position.copy(Wa),Lf.copy(le.position),Lf.add(Oy[H]),le.up.copy(zy[H]),le.lookAt(Lf),le.updateMatrixWorld(),ze.makeTranslation(-Wa.x,-Wa.y,-Wa.z),Pp.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Pp,le.coordinateSystem,le.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,H),i.clear();else{H===0&&(i.setRenderTarget(O.map),i.clear());let le=O.getViewport(H);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),P.viewport(o)}n=O.getFrustum(H),m(E,y,Y,D,this.type)}O.isPointLightShadow!==!0&&this.type===uo&&d(O,y),O.needsUpdate=!1}f=this.type,l.needsUpdate=!1,i.setRenderTarget(b,w,A)};function d(T,E){let y=e.update(S);g.defines.VSM_SAMPLES!==T.blurSamples&&(g.defines.VSM_SAMPLES=T.blurSamples,x.defines.VSM_SAMPLES=T.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),T.mapPass===null?T.mapPass=new zt(s.x,s.y,{format:Os,type:Mn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),g.uniforms.shadow_pass.value=T.map.depthTexture,g.uniforms.resolution.value.set(T.map.width,T.map.height),g.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,y,g,S,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value.set(T.map.width,T.map.height),x.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,y,x,S,null)}function v(T,E,y,b){let w=null,A=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)w=A;else if(w=y.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=w.uuid,I=E.uuid,R=u[P];R===void 0&&(R={},u[P]=R);let L=R[I];L===void 0&&(L=w.clone(),R[I]=L,E.addEventListener("dispose",_)),w=L}if(w.visible=E.visible,w.wireframe=E.wireframe,b===uo?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:p[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let P=i.properties.get(w);P.light=y}return w}function m(T,E,y,b,w){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===uo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let I=e.update(T),R=T.material;if(Array.isArray(R)){let L=I.groups;for(let D=0,O=L.length;D<O;D++){let V=L[D],N=R[V.materialIndex];if(N&&N.visible){let z=v(T,N,b,w);T.onBeforeShadow(i,T,E,y,I,z,V),i.renderBufferDirect(y,null,I,z,T,V),T.onAfterShadow(i,T,E,y,I,z,V)}}}else if(R.visible){let L=v(T,R,b,w);T.onBeforeShadow(i,T,E,y,I,L,null),i.renderBufferDirect(y,null,I,L,T,null),T.onAfterShadow(i,T,E,y,I,L,null)}}let P=T.children;for(let I=0,R=P.length;I<R;I++)m(P[I],E,y,b,w)}function _(T){T.target.removeEventListener("dispose",_);for(let y in u){let b=u[y],w=T.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function Hy(i,e){function t(){let q=!1,W=new gt,de=null,Ue=new gt(0,0,0,0);return{setMask:function(Ve){de!==Ve&&!q&&(i.colorMask(Ve,Ve,Ve,Ve),de=Ve)},setLocked:function(Ve){q=Ve},setClear:function(Ve,Se,De,Ae,rt){rt===!0&&(Ve*=Ae,Se*=Ae,De*=Ae),W.set(Ve,Se,De,Ae),Ue.equals(W)===!1&&(i.clearColor(Ve,Se,De,Ae),Ue.copy(W))},reset:function(){q=!1,de=null,Ue.set(-1,0,0,0)}}}function n(){let q=!1,W=!1,de=null,Ue=null,Ve=null;return{setReversed:function(Se){if(W!==Se){let De=e.get("EXT_clip_control");Se?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),W=Se;let Ae=Ve;Ve=null,this.setClear(Ae)}},getReversed:function(){return W},setTest:function(Se){Se?J(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Se){de!==Se&&!q&&(i.depthMask(Se),de=Se)},setFunc:function(Se){if(W&&(Se=np[Se]),Ue!==Se){switch(Se){case Zl:i.depthFunc(i.NEVER);break;case $l:i.depthFunc(i.ALWAYS);break;case Kl:i.depthFunc(i.LESS);break;case $r:i.depthFunc(i.LEQUAL);break;case Jl:i.depthFunc(i.EQUAL);break;case jl:i.depthFunc(i.GEQUAL);break;case Ql:i.depthFunc(i.GREATER);break;case ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=Se}},setLocked:function(Se){q=Se},setClear:function(Se){Ve!==Se&&(Ve=Se,W&&(Se=1-Se),i.clearDepth(Se))},reset:function(){q=!1,de=null,Ue=null,Ve=null,W=!1}}}function s(){let q=!1,W=null,de=null,Ue=null,Ve=null,Se=null,De=null,Ae=null,rt=null;return{setTest:function(tt){q||(tt?J(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(tt){W!==tt&&!q&&(i.stencilMask(tt),W=tt)},setFunc:function(tt,li,Bn){(de!==tt||Ue!==li||Ve!==Bn)&&(i.stencilFunc(tt,li,Bn),de=tt,Ue=li,Ve=Bn)},setOp:function(tt,li,Bn){(Se!==tt||De!==li||Ae!==Bn)&&(i.stencilOp(tt,li,Bn),Se=tt,De=li,Ae=Bn)},setLocked:function(tt){q=tt},setClear:function(tt){rt!==tt&&(i.clearStencil(tt),rt=tt)},reset:function(){q=!1,W=null,de=null,Ue=null,Ve=null,Se=null,De=null,Ae=null,rt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,u=new WeakMap,h={},p={},g={},x=new WeakMap,M=[],S=null,l=!1,f=null,d=null,v=null,m=null,_=null,T=null,E=null,y=new _e(0,0,0),b=0,w=!1,A=null,P=null,I=null,R=null,L=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(N)[1]),O=V>=1):N.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),O=V>=2);let z=null,H={},Y=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),ze=new gt().fromArray(Y),Be=new gt().fromArray(le);function ye(q,W,de,Ue){let Ve=new Uint8Array(4),Se=i.createTexture();i.bindTexture(q,Se),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<de;De++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(W,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,Ve):i.texImage2D(W+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ve);return Se}let $={};$[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc($r),ne(!1),be($h),J(i.CULL_FACE),He(ei);function J(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function xe(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function ve(q,W){return g[q]!==W?(i.bindFramebuffer(q,W),g[q]=W,q===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=W),q===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=W),!0):!1}function Ee(q,W){let de=M,Ue=!1;if(q){de=x.get(W),de===void 0&&(de=[],x.set(W,de));let Ve=q.textures;if(de.length!==Ve.length||de[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,De=Ve.length;Se<De;Se++)de[Se]=i.COLOR_ATTACHMENT0+Se;de.length=Ve.length,Ue=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(de)}function We(q){return S!==q?(i.useProgram(q),S=q,!0):!1}let Ne={[pr]:i.FUNC_ADD,[S0]:i.FUNC_SUBTRACT,[T0]:i.FUNC_REVERSE_SUBTRACT};Ne[E0]=i.MIN,Ne[w0]=i.MAX;let nt={[A0]:i.ZERO,[R0]:i.ONE,[C0]:i.SRC_COLOR,[jh]:i.SRC_ALPHA,[U0]:i.SRC_ALPHA_SATURATE,[D0]:i.DST_COLOR,[I0]:i.DST_ALPHA,[P0]:i.ONE_MINUS_SRC_COLOR,[Qh]:i.ONE_MINUS_SRC_ALPHA,[N0]:i.ONE_MINUS_DST_COLOR,[L0]:i.ONE_MINUS_DST_ALPHA,[F0]:i.CONSTANT_COLOR,[B0]:i.ONE_MINUS_CONSTANT_COLOR,[O0]:i.CONSTANT_ALPHA,[z0]:i.ONE_MINUS_CONSTANT_ALPHA};function He(q,W,de,Ue,Ve,Se,De,Ae,rt,tt){if(q===ei){l===!0&&(xe(i.BLEND),l=!1);return}if(l===!1&&(J(i.BLEND),l=!0),q!==b0){if(q!==f||tt!==w){if((d!==pr||_!==pr)&&(i.blendEquation(i.FUNC_ADD),d=pr,_=pr),tt)switch(q){case ho:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oi:i.blendFunc(i.ONE,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",q);break}else switch(q){case ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kh:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jh:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",q);break}v=null,m=null,T=null,E=null,y.set(0,0,0),b=0,f=q,w=tt}return}Ve=Ve||W,Se=Se||de,De=De||Ue,(W!==d||Ve!==_)&&(i.blendEquationSeparate(Ne[W],Ne[Ve]),d=W,_=Ve),(de!==v||Ue!==m||Se!==T||De!==E)&&(i.blendFuncSeparate(nt[de],nt[Ue],nt[Se],nt[De]),v=de,m=Ue,T=Se,E=De),(Ae.equals(y)===!1||rt!==b)&&(i.blendColor(Ae.r,Ae.g,Ae.b,rt),y.copy(Ae),b=rt),f=q,w=!1}function je(q,W){q.side===mn?xe(i.CULL_FACE):J(i.CULL_FACE);let de=q.side===Un;W&&(de=!de),ne(de),q.blending===ho&&q.transparent===!1?He(ei):He(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);let Ue=q.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ie(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(q){A!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),A=q)}function be(q){q!==_0?(J(i.CULL_FACE),q!==P&&(q===$h?i.cullFace(i.BACK):q===y0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),P=q}function Q(q){q!==I&&(O&&i.lineWidth(q),I=q)}function ie(q,W,de){q?(J(i.POLYGON_OFFSET_FILL),(R!==W||L!==de)&&(R=W,L=de,o.getReversed()&&(W=-W),i.polygonOffset(W,de))):xe(i.POLYGON_OFFSET_FILL)}function ee(q){q?J(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function ue(q){q===void 0&&(q=i.TEXTURE0+D-1),z!==q&&(i.activeTexture(q),z=q)}function B(q,W,de){de===void 0&&(z===null?de=i.TEXTURE0+D-1:de=z);let Ue=H[de];Ue===void 0&&(Ue={type:void 0,texture:void 0},H[de]=Ue),(Ue.type!==q||Ue.texture!==W)&&(z!==de&&(i.activeTexture(de),z=de),i.bindTexture(q,W||$[q]),Ue.type=q,Ue.texture=W)}function ge(){let q=H[z];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function C(){try{i.texSubImage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function G(){try{i.texSubImage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function oe(){try{i.texStorage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function me(){try{i.texStorage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function ce(){try{i.texImage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function fe(){try{i.texImage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function Ie(q){return p[q]!==void 0?p[q]:i.getParameter(q)}function $e(q,W){p[q]!==W&&(i.pixelStorei(q,W),p[q]=W)}function Ce(q){ze.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),ze.copy(q))}function Le(q){Be.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Be.copy(q))}function Fe(q,W){let de=u.get(W);de===void 0&&(de=new WeakMap,u.set(W,de));let Ue=de.get(q);Ue===void 0&&(Ue=i.getUniformBlockIndex(W,q.name),de.set(q,Ue))}function Ke(q,W){let Ue=u.get(W).get(q);c.get(W)!==Ue&&(i.uniformBlockBinding(W,Ue,q.__bindingPointIndex),c.set(W,Ue))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},z=null,H={},g={},x=new WeakMap,M=[],S=null,l=!1,f=null,d=null,v=null,m=null,_=null,T=null,E=null,y=new _e(0,0,0),b=0,w=!1,A=null,P=null,I=null,R=null,L=null,ze.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:xe,bindFramebuffer:ve,drawBuffers:Ee,useProgram:We,setBlending:He,setMaterial:je,setFlipSided:ne,setCullFace:be,setLineWidth:Q,setPolygonOffset:ie,setScissorTest:ee,activeTexture:ue,bindTexture:B,unbindTexture:ge,compressedTexImage2D:te,compressedTexImage3D:U,texImage2D:ce,texImage3D:fe,pixelStorei:$e,getParameter:Ie,updateUBOMapping:Fe,uniformBlockBinding:Ke,texStorage2D:oe,texStorage3D:me,texSubImage2D:C,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:j,scissor:Ce,viewport:Le,reset:ct}}function Vy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Pe,h=new WeakMap,p=new Set,g,x=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,C){return M?new OffscreenCanvas(U,C):Jr("canvas")}function l(U,C,G){let X=1,j=te(U);if((j.width>G||j.height>G)&&(X=G/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let oe=Math.floor(X*j.width),me=Math.floor(X*j.height);g===void 0&&(g=S(oe,me));let ce=C?S(oe,me):g;return ce.width=oe,ce.height=me,ce.getContext("2d").drawImage(U,0,0,oe,me),ut("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+oe+"x"+me+")."),ce}else return"data"in U&&ut("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),U;return U}function f(U){return U.generateMipmaps}function d(U){i.generateMipmap(U)}function v(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function m(U,C,G,X,j,oe=!1){if(U!==null){if(i[U]!==void 0)return i[U];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let me;X&&(me=e.get("EXT_texture_norm16"),me||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=C;if(C===i.RED&&(G===i.FLOAT&&(ce=i.R32F),G===i.HALF_FLOAT&&(ce=i.R16F),G===i.UNSIGNED_BYTE&&(ce=i.R8),G===i.UNSIGNED_SHORT&&me&&(ce=me.R16_EXT),G===i.SHORT&&me&&(ce=me.R16_SNORM_EXT)),C===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ce=i.R8UI),G===i.UNSIGNED_SHORT&&(ce=i.R16UI),G===i.UNSIGNED_INT&&(ce=i.R32UI),G===i.BYTE&&(ce=i.R8I),G===i.SHORT&&(ce=i.R16I),G===i.INT&&(ce=i.R32I)),C===i.RG&&(G===i.FLOAT&&(ce=i.RG32F),G===i.HALF_FLOAT&&(ce=i.RG16F),G===i.UNSIGNED_BYTE&&(ce=i.RG8),G===i.UNSIGNED_SHORT&&me&&(ce=me.RG16_EXT),G===i.SHORT&&me&&(ce=me.RG16_SNORM_EXT)),C===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ce=i.RG8UI),G===i.UNSIGNED_SHORT&&(ce=i.RG16UI),G===i.UNSIGNED_INT&&(ce=i.RG32UI),G===i.BYTE&&(ce=i.RG8I),G===i.SHORT&&(ce=i.RG16I),G===i.INT&&(ce=i.RG32I)),C===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),G===i.UNSIGNED_INT&&(ce=i.RGB32UI),G===i.BYTE&&(ce=i.RGB8I),G===i.SHORT&&(ce=i.RGB16I),G===i.INT&&(ce=i.RGB32I)),C===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),G===i.UNSIGNED_INT&&(ce=i.RGBA32UI),G===i.BYTE&&(ce=i.RGBA8I),G===i.SHORT&&(ce=i.RGBA16I),G===i.INT&&(ce=i.RGBA32I)),C===i.RGB&&(G===i.UNSIGNED_SHORT&&me&&(ce=me.RGB16_EXT),G===i.SHORT&&me&&(ce=me.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),C===i.RGBA){let fe=oe?ra:At.getTransfer(j);G===i.FLOAT&&(ce=i.RGBA32F),G===i.HALF_FLOAT&&(ce=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ce=fe===Bt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&me&&(ce=me.RGBA16_EXT),G===i.SHORT&&me&&(ce=me.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function _(U,C){let G;return U?C===null||C===ki||C===po?G=i.DEPTH24_STENCIL8:C===bi?G=i.DEPTH32F_STENCIL8:C===fo&&(G=i.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ki||C===po?G=i.DEPTH_COMPONENT24:C===bi?G=i.DEPTH_COMPONENT32F:C===fo&&(G=i.DEPTH_COMPONENT16),G}function T(U,C){return f(U)===!0||U.isFramebufferTexture&&U.minFilter!==xn&&U.minFilter!==Lt?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function E(U){let C=U.target;C.removeEventListener("dispose",E),b(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&p.delete(C)}function y(U){let C=U.target;C.removeEventListener("dispose",y),A(C)}function b(U){let C=n.get(U);if(C.__webglInit===void 0)return;let G=U.source,X=x.get(G);if(X){let j=X[C.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(U),Object.keys(X).length===0&&x.delete(G)}n.remove(U)}function w(U){let C=n.get(U);i.deleteTexture(C.__webglTexture);let G=U.source,X=x.get(G);delete X[C.__cacheKey],o.memory.textures--}function A(U){let C=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(C.__webglFramebuffer[X]))for(let j=0;j<C.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(C.__webglFramebuffer[X][j]);else i.deleteFramebuffer(C.__webglFramebuffer[X]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[X])}else{if(Array.isArray(C.__webglFramebuffer))for(let X=0;X<C.__webglFramebuffer.length;X++)i.deleteFramebuffer(C.__webglFramebuffer[X]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let X=0;X<C.__webglColorRenderbuffer.length;X++)C.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[X]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let G=U.textures;for(let X=0,j=G.length;X<j;X++){let oe=n.get(G[X]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(G[X])}n.remove(U)}let P=0;function I(){P=0}function R(){return P}function L(U){P=U}function D(){let U=P;return U>=s.maxTextures&&ut("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,U}function O(U){let C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function V(U,C){let G=n.get(U);if(U.isVideoTexture&&B(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&G.__version!==U.version){let X=U.image;if(X===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(G,U,C);return}}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+C)}function N(U,C){let G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){xe(G,U,C);return}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+C)}function z(U,C){let G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){xe(G,U,C);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+C)}function H(U,C){let G=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&G.__version!==U.version){ve(G,U,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+C)}let Y={[Cs]:i.REPEAT,[Zi]:i.CLAMP_TO_EDGE,[tc]:i.MIRRORED_REPEAT},le={[xn]:i.NEAREST,[V0]:i.NEAREST_MIPMAP_NEAREST,[Fa]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[Nc]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},ze={[q0]:i.NEVER,[J0]:i.ALWAYS,[Y0]:i.LESS,[xu]:i.LEQUAL,[Z0]:i.EQUAL,[_u]:i.GEQUAL,[$0]:i.GREATER,[K0]:i.NOTEQUAL};function Be(U,C){if(C.type===bi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Lt||C.magFilter===Nc||C.magFilter===Fa||C.magFilter===Tn||C.minFilter===Lt||C.minFilter===Nc||C.minFilter===Fa||C.minFilter===Tn)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Y[C.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Y[C.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Y[C.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,le[C.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,le[C.minFilter]),C.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ze[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===xn||C.minFilter!==Fa&&C.minFilter!==Tn||C.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function ye(U,C){let G=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",E));let X=C.source,j=x.get(X);j===void 0&&(j={},x.set(X,j));let oe=O(C);if(oe!==U.__cacheKey){j[oe]===void 0&&(j[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),j[oe].usedTimes++;let me=j[U.__cacheKey];me!==void 0&&(j[U.__cacheKey].usedTimes--,me.usedTimes===0&&w(C)),U.__cacheKey=oe,U.__webglTexture=j[oe].texture}return G}function $(U,C,G){return Math.floor(Math.floor(U/G)/C)}function J(U,C,G,X){let oe=U.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,G,X,C.data);else{oe.sort(($e,Ce)=>$e.start-Ce.start);let me=0;for(let $e=1;$e<oe.length;$e++){let Ce=oe[me],Le=oe[$e],Fe=Ce.start+Ce.count,Ke=$(Le.start,C.width,4),ct=$(Ce.start,C.width,4);Le.start<=Fe+1&&Ke===ct&&$(Le.start+Le.count-1,C.width,4)===Ke?Ce.count=Math.max(Ce.count,Le.start+Le.count-Ce.start):(++me,oe[me]=Le)}oe.length=me+1;let ce=t.getParameter(i.UNPACK_ROW_LENGTH),fe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ie=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,C.width);for(let $e=0,Ce=oe.length;$e<Ce;$e++){let Le=oe[$e],Fe=Math.floor(Le.start/4),Ke=Math.ceil(Le.count/4),ct=Fe%C.width,q=Math.floor(Fe/C.width),W=Ke,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,ct,q,W,de,G,X,C.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function xe(U,C,G){let X=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(X=i.TEXTURE_3D);let j=ye(U,C),oe=C.source;t.bindTexture(X,U.__webglTexture,i.TEXTURE0+G);let me=n.get(oe);if(oe.version!==me.__version||j===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){let de=At.getPrimaries(At.workingColorSpace),Ue=C.colorSpace===ti?null:At.getPrimaries(C.colorSpace),Ve=C.colorSpace===ti||de===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment);let fe=l(C.image,!1,s.maxTextureSize);fe=ge(C,fe);let Ie=r.convert(C.format,C.colorSpace),$e=r.convert(C.type),Ce=m(C.internalFormat,Ie,$e,C.normalized,C.colorSpace,C.isVideoTexture);Be(X,C);let Le,Fe=C.mipmaps,Ke=C.isVideoTexture!==!0,ct=me.__version===void 0||j===!0,q=oe.dataReady,W=T(C,fe);if(C.isDepthTexture)Ce=_(C.format===Fs,C.type),ct&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,Ie,$e,null));else if(C.isDataTexture)if(Fe.length>0){Ke&&ct&&t.texStorage2D(i.TEXTURE_2D,W,Ce,Fe[0].width,Fe[0].height);for(let de=0,Ue=Fe.length;de<Ue;de++)Le=Fe[de],Ke?q&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Le.width,Le.height,Ie,$e,Le.data):t.texImage2D(i.TEXTURE_2D,de,Ce,Le.width,Le.height,0,Ie,$e,Le.data);C.generateMipmaps=!1}else Ke?(ct&&t.texStorage2D(i.TEXTURE_2D,W,Ce,fe.width,fe.height),q&&J(C,fe,Ie,$e)):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,Ie,$e,fe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ke&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,W,Ce,Fe[0].width,Fe[0].height,fe.depth);for(let de=0,Ue=Fe.length;de<Ue;de++)if(Le=Fe[de],C.format!==Xn)if(Ie!==null)if(Ke){if(q)if(C.layerUpdates.size>0){let Ve=Mf(Le.width,Le.height,C.format,C.type);for(let Se of C.layerUpdates){let De=Le.data.subarray(Se*Ve/Le.data.BYTES_PER_ELEMENT,(Se+1)*Ve/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,Se,Le.width,Le.height,1,Ie,De)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Le.width,Le.height,fe.depth,Ie,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Ce,Le.width,Le.height,fe.depth,0,Le.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Le.width,Le.height,fe.depth,Ie,$e,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Ce,Le.width,Le.height,fe.depth,0,Ie,$e,Le.data);C.layerUpdates.size>0&&C.clearLayerUpdates()}else{Ke&&ct&&t.texStorage2D(i.TEXTURE_2D,W,Ce,Fe[0].width,Fe[0].height);for(let de=0,Ue=Fe.length;de<Ue;de++)Le=Fe[de],C.format!==Xn?Ie!==null?Ke?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Le.width,Le.height,Ie,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Ce,Le.width,Le.height,0,Le.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?q&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Le.width,Le.height,Ie,$e,Le.data):t.texImage2D(i.TEXTURE_2D,de,Ce,Le.width,Le.height,0,Ie,$e,Le.data)}else if(C.isDataArrayTexture)if(Ke){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,W,Ce,fe.width,fe.height,fe.depth),q)if(C.layerUpdates.size>0){let de=Mf(fe.width,fe.height,C.format,C.type);for(let Ue of C.layerUpdates){let Ve=fe.data.subarray(Ue*de/fe.data.BYTES_PER_ELEMENT,(Ue+1)*de/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,fe.width,fe.height,1,Ie,$e,Ve)}C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ie,$e,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,Ie,$e,fe.data);else if(C.isData3DTexture)Ke?(ct&&t.texStorage3D(i.TEXTURE_3D,W,Ce,fe.width,fe.height,fe.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ie,$e,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,Ie,$e,fe.data);else if(C.isFramebufferTexture){if(ct)if(Ke)t.texStorage2D(i.TEXTURE_2D,W,Ce,fe.width,fe.height);else{let de=fe.width,Ue=fe.height;for(let Ve=0;Ve<W;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,Ce,de,Ue,0,Ie,$e,null),de>>=1,Ue>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),fe.parentNode!==de){de.appendChild(fe),p.add(C),de.onpaint=Ue=>{let Ve=Ue.changedElements;for(let Se of p)Ve.includes(Se.image)&&(Se.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,fe);else{let Ve=i.RGBA,Se=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ve,Se,De,fe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ke&&ct){let de=te(Fe[0]);t.texStorage2D(i.TEXTURE_2D,W,Ce,de.width,de.height)}for(let de=0,Ue=Fe.length;de<Ue;de++)Le=Fe[de],Ke?q&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ie,$e,Le):t.texImage2D(i.TEXTURE_2D,de,Ce,Ie,$e,Le);C.generateMipmaps=!1}else if(Ke){if(ct){let de=te(fe);t.texStorage2D(i.TEXTURE_2D,W,Ce,de.width,de.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,$e,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ce,Ie,$e,fe);f(C)&&d(X),me.__version=oe.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function ve(U,C,G){if(C.image.length!==6)return;let X=ye(U,C),j=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+G);let oe=n.get(j);if(j.version!==oe.__version||X===!0){t.activeTexture(i.TEXTURE0+G);let me=At.getPrimaries(At.workingColorSpace),ce=C.colorSpace===ti?null:At.getPrimaries(C.colorSpace),fe=C.colorSpace===ti||me===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ie=C.isCompressedTexture||C.image[0].isCompressedTexture,$e=C.image[0]&&C.image[0].isDataTexture,Ce=[];for(let Se=0;Se<6;Se++)!Ie&&!$e?Ce[Se]=l(C.image[Se],!0,s.maxCubemapSize):Ce[Se]=$e?C.image[Se].image:C.image[Se],Ce[Se]=ge(C,Ce[Se]);let Le=Ce[0],Fe=r.convert(C.format,C.colorSpace),Ke=r.convert(C.type),ct=m(C.internalFormat,Fe,Ke,C.normalized,C.colorSpace),q=C.isVideoTexture!==!0,W=oe.__version===void 0||X===!0,de=j.dataReady,Ue=T(C,Le);Be(i.TEXTURE_CUBE_MAP,C);let Ve;if(Ie){q&&W&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ct,Le.width,Le.height);for(let Se=0;Se<6;Se++){Ve=Ce[Se].mipmaps;for(let De=0;De<Ve.length;De++){let Ae=Ve[De];C.format!==Xn?Fe!==null?q?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,0,0,Ae.width,Ae.height,Fe,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,ct,Ae.width,Ae.height,0,Ae.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,0,0,Ae.width,Ae.height,Fe,Ke,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,ct,Ae.width,Ae.height,0,Fe,Ke,Ae.data)}}}else{if(Ve=C.mipmaps,q&&W){Ve.length>0&&Ue++;let Se=te(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ct,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if($e){q?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ce[Se].width,Ce[Se].height,Fe,Ke,Ce[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ct,Ce[Se].width,Ce[Se].height,0,Fe,Ke,Ce[Se].data);for(let De=0;De<Ve.length;De++){let rt=Ve[De].image[Se].image;q?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,0,0,rt.width,rt.height,Fe,Ke,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,ct,rt.width,rt.height,0,Fe,Ke,rt.data)}}else{q?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Fe,Ke,Ce[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ct,Fe,Ke,Ce[Se]);for(let De=0;De<Ve.length;De++){let Ae=Ve[De];q?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,0,0,Fe,Ke,Ae.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,ct,Fe,Ke,Ae.image[Se])}}}f(C)&&d(i.TEXTURE_CUBE_MAP),oe.__version=j.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function Ee(U,C,G,X,j,oe){let me=r.convert(G.format,G.colorSpace),ce=r.convert(G.type),fe=m(G.internalFormat,me,ce,G.normalized,G.colorSpace),Ie=n.get(C),$e=n.get(G);if($e.__renderTarget=C,!Ie.__hasExternalTextures){let Ce=Math.max(1,C.width>>oe),Le=Math.max(1,C.height>>oe);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,oe,fe,Ce,Le,C.depth,0,me,ce,null):t.texImage2D(j,oe,fe,Ce,Le,0,me,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ue(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,$e.__webglTexture,0,ee(C)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,$e.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(U,C,G){if(i.bindRenderbuffer(i.RENDERBUFFER,U),C.depthBuffer){let X=C.depthTexture,j=X&&X.isDepthTexture?X.type:null,oe=_(C.stencilBuffer,j),me=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(C),oe,C.width,C.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(C),oe,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,oe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,U)}else{let X=C.textures;for(let j=0;j<X.length;j++){let oe=X[j],me=r.convert(oe.format,oe.colorSpace),ce=r.convert(oe.type),fe=m(oe.internalFormat,me,ce,oe.normalized,oe.colorSpace);ue(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(C),fe,C.width,C.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(C),fe,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,fe,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(U,C,G){let X=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(C.depthTexture);if(j.__renderTarget=C,(!j.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,C.depthTexture.addEventListener("dispose",E)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Be(i.TEXTURE_CUBE_MAP,C.depthTexture);let Ie=r.convert(C.depthTexture.format),$e=r.convert(C.depthTexture.type),Ce;C.depthTexture.format===$i?Ce=i.DEPTH_COMPONENT24:C.depthTexture.format===Fs&&(Ce=i.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ce,C.width,C.height,0,Ie,$e,null)}}else V(C.depthTexture,0);let oe=j.__webglTexture,me=ee(C),ce=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,fe=C.depthTexture.format===Fs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(C.depthTexture.format===$i)ue(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ce,oe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ce,oe,0);else if(C.depthTexture.format===Fs)ue(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ce,oe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ce,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(U){let C=n.get(U),G=U.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==U.depthTexture){let X=U.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),X){let j=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),C.__depthDisposeCallback=j}C.__boundDepthTexture=X}if(U.depthTexture&&!C.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)Ne(C.__webglFramebuffer[X],U,X);else{let X=U.texture.mipmaps;X&&X.length>0?Ne(C.__webglFramebuffer[0],U,0):Ne(C.__webglFramebuffer,U,0)}else if(G){C.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[X]),C.__webglDepthbuffer[X]===void 0)C.__webglDepthbuffer[X]=i.createRenderbuffer(),We(C.__webglDepthbuffer[X],U,!1);else{let j=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=C.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,oe)}}else{let X=U.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),We(C.__webglDepthbuffer,U,!1);else{let j=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(U,C,G){let X=n.get(U);C!==void 0&&Ee(X.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&nt(U)}function je(U){let C=U.texture,G=n.get(U),X=n.get(C);U.addEventListener("dispose",y);let j=U.textures,oe=U.isWebGLCubeRenderTarget===!0,me=j.length>1;if(me||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=C.version,o.memory.textures++),oe){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let fe=0;fe<C.mipmaps.length;fe++)G.__webglFramebuffer[ce][fe]=i.createFramebuffer()}else G.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<C.mipmaps.length;ce++)G.__webglFramebuffer[ce]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(me)for(let ce=0,fe=j.length;ce<fe;ce++){let Ie=n.get(j[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&ue(U)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){let fe=j[ce];G.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);let Ie=r.convert(fe.format,fe.colorSpace),$e=r.convert(fe.type),Ce=m(fe.internalFormat,Ie,$e,fe.normalized,fe.colorSpace,U.isXRRenderTarget===!0),Le=ee(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Ce,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),We(G.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Be(i.TEXTURE_CUBE_MAP,C);for(let ce=0;ce<6;ce++)if(C.mipmaps&&C.mipmaps.length>0)for(let fe=0;fe<C.mipmaps.length;fe++)Ee(G.__webglFramebuffer[ce][fe],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else Ee(G.__webglFramebuffer[ce],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);f(C)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ce=0,fe=j.length;ce<fe;ce++){let Ie=j[ce],$e=n.get(Ie),Ce=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ce,$e.__webglTexture),Be(Ce,Ie),Ee(G.__webglFramebuffer,U,Ie,i.COLOR_ATTACHMENT0+ce,Ce,0),f(Ie)&&d(Ce)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ce=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,X.__webglTexture),Be(ce,C),C.mipmaps&&C.mipmaps.length>0)for(let fe=0;fe<C.mipmaps.length;fe++)Ee(G.__webglFramebuffer[fe],U,C,i.COLOR_ATTACHMENT0,ce,fe);else Ee(G.__webglFramebuffer,U,C,i.COLOR_ATTACHMENT0,ce,0);f(C)&&d(ce),t.unbindTexture()}U.depthBuffer&&nt(U)}function ne(U){let C=U.textures;for(let G=0,X=C.length;G<X;G++){let j=C[G];if(f(j)){let oe=v(U),me=n.get(j).__webglTexture;t.bindTexture(oe,me),d(oe),t.unbindTexture()}}}let be=[],Q=[];function ie(U){if(U.samples>0){if(ue(U)===!1){let C=U.textures,G=U.width,X=U.height,j=i.COLOR_BUFFER_BIT,oe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(U),ce=C.length>1;if(ce)for(let Ie=0;Ie<C.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let fe=U.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ie=0;Ie<C.length;Ie++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ie]);let $e=n.get(C[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,G,X,0,0,G,X,j,i.NEAREST),c===!0&&(be.length=0,Q.length=0,be.push(i.COLOR_ATTACHMENT0+Ie),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(be.push(oe),Q.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Ie=0;Ie<C.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ie]);let $e=n.get(C[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){let C=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function ee(U){return Math.min(s.maxSamples,U.samples)}function ue(U){let C=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function B(U){let C=o.render.frame;h.get(U)!==C&&(h.set(U,C),U.update())}function ge(U,C){let G=U.colorSpace,X=U.format,j=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||G!==sa&&G!==ti&&(At.getTransfer(G)===Bt?(X!==Xn||j!==Wn)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",G)),C}function te(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.getTextureUnits=R,this.setTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=H,this.rebindTextures=He,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Gy(i,e){function t(n,s=ti){let r,o=At.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ff)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cf)return i.BYTE;if(n===uf)return i.SHORT;if(n===fo)return i.UNSIGNED_SHORT;if(n===Uc)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===df)return i.ALPHA;if(n===pf)return i.RGB;if(n===Xn)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===Bs)return i.RED;if(n===Oc)return i.RED_INTEGER;if(n===Os)return i.RG;if(n===zc)return i.RG_INTEGER;if(n===kc)return i.RGBA_INTEGER;if(n===Ba||n===Oa||n===za||n===ka)if(o===Bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hc||n===Vc||n===Gc||n===Wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===qc||n===Yc||n===Zc||n===$c||n===Ha||n===Kc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xc||n===qc)return o===Bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zc)return r.COMPRESSED_R11_EAC;if(n===$c)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ha)return r.COMPRESSED_RG11_EAC;if(n===Kc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jc||n===jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au||n===lu||n===cu||n===uu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eu)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tu)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nu)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===iu)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===su)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ru)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ou)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===au)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lu)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cu)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uu)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hu||n===fu||n===du)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===hu)return o===Bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===du)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pu||n===mu||n===Va||n===gu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===po?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
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

}`,kf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xt({vertexShader:Wy,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hf=class extends Ki{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,p=null,g=null,x=null,M=null,S=typeof XRWebGLBinding<"u",l=new kf,f={},d=t.getContextAttributes(),v=null,m=null,_=[],T=[],E=new Pe,y=null,b=null,w=new Nn;w.viewport=new gt;let A=new Nn;A.viewport=new gt;let P=[w,A],I=new Pc,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=_[$];return J===void 0&&(J=new eo,_[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=_[$];return J===void 0&&(J=new eo,_[$]=J),J.getGripSpace()},this.getHand=function($){let J=_[$];return J===void 0&&(J=new eo,_[$]=J),J.getHandSpace()};function D($){let J=T.indexOf($.inputSource);if(J===-1)return;let xe=_[J];xe!==void 0&&(xe.update($.inputSource,$.frame,u||o),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",V);for(let $=0;$<_.length;$++){let J=T[$];J!==null&&(T[$]=null,_[$].disconnect(J))}R=null,L=null,l.reset();for(let $ in f)delete f[$];if(e.setRenderTarget(v),x=null,g=null,p=null,s=null,m=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),b!==null){let $=b.camera;$.fov=b.fov,$.zoom=b.zoom,$.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",O),s.addEventListener("inputsourceschange",V),d.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ve=null,Ee=null;d.depth&&(Ee=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=d.stencil?Fs:$i,ve=d.stencil?po:ki);let We={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};p=this.getBinding(),g=p.createProjectionLayer(We),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),m=new zt(g.textureWidth,g.textureHeight,{format:Xn,type:Wn,depthTexture:new Ps(g.textureWidth,g.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let xe={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),m=new zt(x.framebufferWidth,x.framebufferHeight,{format:Xn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function V($){for(let J=0;J<$.removed.length;J++){let xe=$.removed[J],ve=T.indexOf(xe);ve>=0&&(T[ve]=null,_[ve].disconnect(xe))}for(let J=0;J<$.added.length;J++){let xe=$.added[J],ve=T.indexOf(xe);if(ve===-1){for(let We=0;We<_.length;We++)if(We>=T.length){T.push(xe),ve=We;break}else if(T[We]===null){T[We]=xe,ve=We;break}if(ve===-1)break}let Ee=_[ve];Ee&&Ee.connect(xe)}}let N=new k,z=new k;function H($,J,xe){N.setFromMatrixPosition(J.matrixWorld),z.setFromMatrixPosition(xe.matrixWorld);let ve=N.distanceTo(z),Ee=J.projectionMatrix.elements,We=xe.projectionMatrix.elements,Ne=Ee[14]/(Ee[10]-1),nt=Ee[14]/(Ee[10]+1),He=(Ee[9]+1)/Ee[5],je=(Ee[9]-1)/Ee[5],ne=(Ee[8]-1)/Ee[0],be=(We[8]+1)/We[0],Q=Ne*ne,ie=Ne*be,ee=ve/(-ne+be),ue=ee*-ne;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ue),$.translateZ(ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let B=Ne+ee,ge=nt+ee,te=Q-ue,U=ie+(ve-ue),C=He*nt/ge*B,G=je*nt/ge*B;$.projectionMatrix.makePerspective(te,U,C,G,B,ge),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Y($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let J=$.near,xe=$.far;l.texture!==null&&(l.depthNear>0&&(J=l.depthNear),l.depthFar>0&&(xe=l.depthFar)),I.near=A.near=w.near=J,I.far=A.far=w.far=xe,(R!==I.near||L!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),R=I.near,L=I.far),I.layers.mask=$.layers.mask|6,w.layers.mask=I.layers.mask&-5,A.layers.mask=I.layers.mask&-3;let ve=$.parent,Ee=I.cameras;Y(I,ve);for(let We=0;We<Ee.length;We++)Y(Ee[We],ve);Ee.length===2?H(I,w,A):I.projectionMatrix.copy(w.projectionMatrix),b===null&&$.isPerspectiveCamera&&(b={camera:$,fov:$.fov,zoom:$.zoom}),le($,I,ve)};function le($,J,xe){xe===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=oa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(g===null&&x===null))return c},this.setFoveation=function($){c=$,g!==null&&(g.fixedFoveation=$),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=$)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(I)},this.getCameraTexture=function($){return f[$]};let ze=null;function Be($,J){if(h=J.getViewerPose(u||o),M=J,h!==null){let xe=h.views;x!==null&&(e.setRenderTargetFramebuffer(m,x.framebuffer),e.setRenderTarget(m));let ve=!1;xe.length!==I.cameras.length&&(I.cameras.length=0,ve=!0);for(let nt=0;nt<xe.length;nt++){let He=xe[nt],je=null;if(x!==null)je=x.getViewport(He);else{let be=p.getViewSubImage(g,He);je=be.viewport,nt===0&&(e.setRenderTargetTextures(m,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(m))}let ne=P[nt];ne===void 0&&(ne=new Nn,ne.layers.enable(nt),ne.viewport=new gt,P[nt]=ne),ne.matrix.fromArray(He.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(He.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(je.x,je.y,je.width,je.height),nt===0&&(I.matrix.copy(ne.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ve===!0&&I.cameras.push(ne)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let nt=p.getDepthInformation(xe[0]);nt&&nt.isValid&&nt.texture&&l.init(nt,s.renderState)}if(Ee&&Ee.includes("camera-access")&&S){e.state.unbindTexture(),p=n.getBinding();for(let nt=0;nt<xe.length;nt++){let He=xe[nt].camera;if(He){let je=f[He];je||(je=new ma,f[He]=je);let ne=p.getCameraImage(He);je.sourceTexture=ne}}}}for(let xe=0;xe<_.length;xe++){let ve=T[xe],Ee=_[xe];ve!==null&&Ee!==void 0&&Ee.update(ve,J,u||o)}ze&&ze($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),M=null}let ye=new Ip;ye.setAnimationLoop(Be),this.setAnimationLoop=function($){ze=$},this.dispose=function(){}}},qy=new et,Bp=new vt;Bp.set(-1,0,0,0,1,0,0,0,1);function Yy(i,e){function t(l,f){l.matrixAutoUpdate===!0&&l.updateMatrix(),f.value.copy(l.matrix)}function n(l,f){f.color.getRGB(l.fogColor.value,xf(i)),f.isFog?(l.fogNear.value=f.near,l.fogFar.value=f.far):f.isFogExp2&&(l.fogDensity.value=f.density)}function s(l,f,d,v,m){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(l,f):f.isMeshLambertMaterial?(r(l,f),f.envMap&&(l.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(l,f),p(l,f)):f.isMeshPhongMaterial?(r(l,f),h(l,f),f.envMap&&(l.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(l,f),g(l,f),f.isMeshPhysicalMaterial&&x(l,f,m)):f.isMeshMatcapMaterial?(r(l,f),M(l,f)):f.isMeshDepthMaterial?r(l,f):f.isMeshDistanceMaterial?(r(l,f),S(l,f)):f.isMeshNormalMaterial?r(l,f):f.isLineBasicMaterial?(o(l,f),f.isLineDashedMaterial&&a(l,f)):f.isPointsMaterial?c(l,f,d,v):f.isSpriteMaterial?u(l,f):f.isShadowMaterial?(l.color.value.copy(f.color),l.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(l,f){l.opacity.value=f.opacity,f.color&&l.diffuse.value.copy(f.color),f.emissive&&l.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(l.map.value=f.map,t(f.map,l.mapTransform)),f.alphaMap&&(l.alphaMap.value=f.alphaMap,t(f.alphaMap,l.alphaMapTransform)),f.bumpMap&&(l.bumpMap.value=f.bumpMap,t(f.bumpMap,l.bumpMapTransform),l.bumpScale.value=f.bumpScale,f.side===Un&&(l.bumpScale.value*=-1)),f.normalMap&&(l.normalMap.value=f.normalMap,t(f.normalMap,l.normalMapTransform),l.normalScale.value.copy(f.normalScale),f.side===Un&&l.normalScale.value.negate()),f.displacementMap&&(l.displacementMap.value=f.displacementMap,t(f.displacementMap,l.displacementMapTransform),l.displacementScale.value=f.displacementScale,l.displacementBias.value=f.displacementBias),f.emissiveMap&&(l.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,l.emissiveMapTransform)),f.specularMap&&(l.specularMap.value=f.specularMap,t(f.specularMap,l.specularMapTransform)),f.alphaTest>0&&(l.alphaTest.value=f.alphaTest);let d=e.get(f),v=d.envMap,m=d.envMapRotation;v&&(l.envMap.value=v,l.envMapRotation.value.setFromMatrix4(qy.makeRotationFromEuler(m)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.envMapRotation.value.premultiply(Bp),l.reflectivity.value=f.reflectivity,l.ior.value=f.ior,l.refractionRatio.value=f.refractionRatio),f.lightMap&&(l.lightMap.value=f.lightMap,l.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,l.lightMapTransform)),f.aoMap&&(l.aoMap.value=f.aoMap,l.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,l.aoMapTransform))}function o(l,f){l.diffuse.value.copy(f.color),l.opacity.value=f.opacity,f.map&&(l.map.value=f.map,t(f.map,l.mapTransform))}function a(l,f){l.dashSize.value=f.dashSize,l.totalSize.value=f.dashSize+f.gapSize,l.scale.value=f.scale}function c(l,f,d,v){l.diffuse.value.copy(f.color),l.opacity.value=f.opacity,l.size.value=f.size*d,l.scale.value=v*.5,f.map&&(l.map.value=f.map,t(f.map,l.uvTransform)),f.alphaMap&&(l.alphaMap.value=f.alphaMap,t(f.alphaMap,l.alphaMapTransform)),f.alphaTest>0&&(l.alphaTest.value=f.alphaTest)}function u(l,f){l.diffuse.value.copy(f.color),l.opacity.value=f.opacity,l.rotation.value=f.rotation,f.map&&(l.map.value=f.map,t(f.map,l.mapTransform)),f.alphaMap&&(l.alphaMap.value=f.alphaMap,t(f.alphaMap,l.alphaMapTransform)),f.alphaTest>0&&(l.alphaTest.value=f.alphaTest)}function h(l,f){l.specular.value.copy(f.specular),l.shininess.value=Math.max(f.shininess,1e-4)}function p(l,f){f.gradientMap&&(l.gradientMap.value=f.gradientMap)}function g(l,f){l.metalness.value=f.metalness,f.metalnessMap&&(l.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,l.metalnessMapTransform)),l.roughness.value=f.roughness,f.roughnessMap&&(l.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,l.roughnessMapTransform)),f.envMap&&(l.envMapIntensity.value=f.envMapIntensity)}function x(l,f,d){l.ior.value=f.ior,f.sheen>0&&(l.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),l.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(l.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,l.sheenColorMapTransform)),f.sheenRoughnessMap&&(l.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,l.sheenRoughnessMapTransform))),f.clearcoat>0&&(l.clearcoat.value=f.clearcoat,l.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(l.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,l.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(l.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Un&&l.clearcoatNormalScale.value.negate())),f.dispersion>0&&(l.dispersion.value=f.dispersion),f.retroreflectivity>0&&(l.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(l.iridescence.value=f.iridescence,l.iridescenceIOR.value=f.iridescenceIOR,l.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(l.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,l.iridescenceMapTransform)),f.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),f.transmission>0&&(l.transmission.value=f.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),f.transmissionMap&&(l.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,l.transmissionMapTransform)),l.thickness.value=f.thickness,f.thicknessMap&&(l.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=f.attenuationDistance,l.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(l.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(l.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=f.specularIntensity,l.specularColor.value.copy(f.specularColor),f.specularColorMap&&(l.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,l.specularColorMapTransform)),f.specularIntensityMap&&(l.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,l.specularIntensityMapTransform))}function M(l,f){f.matcap&&(l.matcap.value=f.matcap)}function S(l,f){let d=e.get(f).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(m,_){let T=_.program;n.uniformBlockBinding(m,T)}function u(m,_){let T=s[m.id];T===void 0&&(l(m),T=h(m),s[m.id]=T,m.addEventListener("dispose",d));let E=_.program;n.updateUBOMapping(m,E);let y=e.render.frame;r[m.id]!==y&&(g(m),r[m.id]=y)}function h(m){let _=p();m.__bindingPointIndex=_;let T=i.createBuffer(),E=m.__size,y=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function p(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(m){let _=s[m.id],T=m.uniforms,E=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let y=0,b=T.length;y<b;y++){let w=T[y];if(Array.isArray(w))for(let A=0,P=w.length;A<P;A++)x(w[A],y,A,E);else x(w,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(m,_,T,E){if(S(m,_,T,E)===!0){let y=m.__offset,b=m.value;if(Array.isArray(b)){let w=0;for(let A=0;A<b.length;A++){let P=b[A],I=f(P);M(P,m.__data,w),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(w+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(b,m.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,m.__data)}}function M(m,_,T){typeof m=="number"||typeof m=="boolean"?_[0]=m:m.isMatrix3?(_[0]=m.elements[0],_[1]=m.elements[1],_[2]=m.elements[2],_[3]=0,_[4]=m.elements[3],_[5]=m.elements[4],_[6]=m.elements[5],_[7]=0,_[8]=m.elements[6],_[9]=m.elements[7],_[10]=m.elements[8],_[11]=0):ArrayBuffer.isView(m)?_.set(new m.constructor(m.buffer,m.byteOffset,_.length)):m.toArray(_,T)}function S(m,_,T,E){let y=m.value,b=_+"_"+T;if(E[b]===void 0)return typeof y=="number"||typeof y=="boolean"?E[b]=y:ArrayBuffer.isView(y)?E[b]=y.slice():E[b]=y.clone(),!0;{let w=E[b];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return E[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function l(m){let _=m.uniforms,T=0,E=16;for(let b=0,w=_.length;b<w;b++){let A=Array.isArray(_[b])?_[b]:[_[b]];for(let P=0,I=A.length;P<I;P++){let R=A[P],L=Array.isArray(R.value)?R.value:[R.value];for(let D=0,O=L.length;D<O;D++){let V=L[D],N=f(V),z=T%E,H=z%N.boundary,Y=z+H;T+=H,Y!==0&&E-Y<N.storage&&(T+=E-Y),R.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=T,T+=N.storage}}}let y=T%E;return y>0&&(T+=E-y),m.__size=T,m.__cache={},this}function f(m){let _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",m),_}function d(m){let _=m.target;_.removeEventListener("dispose",d);let T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function v(){for(let m in s)i.deleteBuffer(s[m]);o=[],s={},r={}}return{bind:c,update:u,dispose:v}}var $y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),es=null;function Ky(){return es===null&&(es=new Fi($y,16,16,Os,Mn),es.name="DFG_LUT",es.minFilter=Lt,es.magFilter=Lt,es.wrapS=Zi,es.wrapT=Zi,es.generateMipmaps=!1,es.needsUpdate=!0),es}var Tu=class{constructor(e={}){let{canvas:t=Q0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1,outputBufferType:x=Wn}=e;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=o;let S=x,l=new Set([kc,zc,Oc]),f=new Set([Wn,ki,fo,po,Fc,Bc]),d=new Uint32Array(4),v=new Int32Array(4),m=new k,_=null,T=null,E=[],y=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,A=!1,P=null,I=null,R=null,L=null;this._outputColorSpace=qt;let D=0,O=0,V=null,N=-1,z=null,H=new gt,Y=new gt,le=null,ze=new _e(0),Be=0,ye=t.width,$=t.height,J=1,xe=null,ve=null,Ee=new gt(0,0,ye,$),We=new gt(0,0,ye,$),Ne=!1,nt=new no,He=!1,je=!1,ne=new et,be=new k,Q=new gt,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function ue(){return V===null?J:1}let B=n;function ge(F,K){return t.getContext(F,K)}let te,U,C,G,X,j,oe,me,ce,fe,Ie,$e,Ce,Le,Fe,Ke,ct,q,W,de,Ue,Ve,Se;try{let F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",li,!1),B===null){let K="webgl2";if(B=ge(K,F),B===null)throw ge(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(F){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",li,!1),mt("WebGLRenderer: "+F.message),F}function De(){te=new i_(B),te.init(),Ue=new Gy(B,te),U=new Y2(B,te,e,Ue),C=new Hy(B,te),U.reversedDepthBuffer&&g&&C.buffers.depth.setReversed(!0),I=B.createFramebuffer(),R=B.createFramebuffer(),L=B.createFramebuffer(),G=new o_(B),X=new Ay,j=new Vy(B,te,C,X,U,Ue,G),oe=new n_(w),me=new lv(B),Ve=new X2(B,me),ce=new s_(B,me,G,Ve),fe=new l_(B,ce,me,Ve,G),q=new a_(B,U,j),Fe=new Z2(X),Ie=new wy(w,oe,te,U,Ve,Fe),$e=new Yy(w,X),Ce=new Cy,Le=new Uy(te),ct=new W2(w,oe,C,fe,M,c),Ke=new ky(w,fe,U),Se=new Zy(B,G,U,C),W=new q2(B,te,G),de=new r_(B,te,G),G.programs=Ie.programs,w.capabilities=U,w.extensions=te,w.properties=X,w.renderLists=Ce,w.shadowMap=Ke,w.state=C,w.info=G}S!==Wn&&(b=new u_(S,t.width,t.height,a,s,r));let Ae=new Hf(w,B);this.xr=Ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let F=te.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=te.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(F){F!==void 0&&(J=F,this.setSize(ye,$,!1))},this.getSize=function(F){return F.set(ye,$)},this.setSize=function(F,K,he=!0){if(Ae.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=F,$=K,t.width=Math.floor(F*J),t.height=Math.floor(K*J),he===!0&&(t.style.width=F+"px",t.style.height=K+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,F,K)},this.getDrawingBufferSize=function(F){return F.set(ye*J,$*J).floor()},this.setDrawingBufferSize=function(F,K,he){ye=F,$=K,J=he,t.width=Math.floor(F*he),t.height=Math.floor(K*he),this.setViewport(0,0,F,K)},this.setEffects=function(F){if(S===Wn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let K=0;K<F.length;K++)if(F[K].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(H)},this.getViewport=function(F){return F.copy(Ee)},this.setViewport=function(F,K,he,se){F.isVector4?Ee.set(F.x,F.y,F.z,F.w):Ee.set(F,K,he,se),C.viewport(H.copy(Ee).multiplyScalar(J).round())},this.getScissor=function(F){return F.copy(We)},this.setScissor=function(F,K,he,se){F.isVector4?We.set(F.x,F.y,F.z,F.w):We.set(F,K,he,se),C.scissor(Y.copy(We).multiplyScalar(J).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(F){C.setScissorTest(Ne=F)},this.setOpaqueSort=function(F){xe=F},this.setTransparentSort=function(F){ve=F},this.getClearColor=function(F){return F.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(F=!0,K=!0,he=!0){let se=0;if(F){let re=!1;if(V!==null){let we=V.texture.format;re=l.has(we)}if(re){let we=V.texture.type,Xe=f.has(we),ke=ct.getClearColor(),Je=ct.getClearAlpha(),Qe=ke.r,bt=ke.g,Tt=ke.b;Xe?(d[0]=Qe,d[1]=bt,d[2]=Tt,d[3]=Je,B.clearBufferuiv(B.COLOR,0,d)):(v[0]=Qe,v[1]=bt,v[2]=Tt,v[3]=Je,B.clearBufferiv(B.COLOR,0,v))}else se|=B.COLOR_BUFFER_BIT}K&&(se|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(se|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&B.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),P=F},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",li,!1),ct.dispose(),Ce.dispose(),Le.dispose(),X.dispose(),oe.dispose(),fe.dispose(),Ve.dispose(),Se.dispose(),Ie.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",al),Ae.removeEventListener("sessionend",ll),ss.stop()};function rt(F){F.preventDefault(),gf("WebGLRenderer: Context Lost."),A=!0}function tt(){gf("WebGLRenderer: Context Restored."),A=!1;let F=G.autoReset,K=Ke.enabled,he=Ke.autoUpdate,se=Ke.needsUpdate,re=Ke.type;De(),G.autoReset=F,Ke.enabled=K,Ke.autoUpdate=he,Ke.needsUpdate=se,Ke.type=re}function li(F){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Bn(F){let K=F.target;K.removeEventListener("dispose",Bn),Ks(K)}function Ks(F){$n(F),X.remove(F)}function $n(F){let K=X.get(F).programs;K!==void 0&&(K.forEach(function(he){Ie.releaseProgram(he)}),F.isShaderMaterial&&Ie.releaseShaderCache(F))}this.renderBufferDirect=function(F,K,he,se,re,we){K===null&&(K=ie);let Xe=re.isMesh&&re.matrixWorld.determinantAffine()<0,ke=On(F,K,he,se,re);C.setMaterial(se,Xe);let Je=he.index,Qe=1;if(se.wireframe===!0){if(Je=ce.getWireframeAttribute(he),Je===void 0)return;Qe=2}let bt=he.drawRange,Tt=he.attributes.position,Ye=bt.start*Qe,Pt=(bt.start+bt.count)*Qe;we!==null&&(Ye=Math.max(Ye,we.start*Qe),Pt=Math.min(Pt,(we.start+we.count)*Qe)),Je!==null?(Ye=Math.max(Ye,0),Pt=Math.min(Pt,Je.count)):Tt!=null&&(Ye=Math.max(Ye,0),Pt=Math.min(Pt,Tt.count));let Wt=Pt-Ye;if(Wt<0||Wt===1/0)return;Ve.setup(re,se,ke,he,Je);let Nt,Ft=W;if(Je!==null&&(Nt=me.get(Je),Ft=de,Ft.setIndex(Nt)),re.isMesh)se.wireframe===!0?(C.setLineWidth(se.wireframeLinewidth*ue()),Ft.setMode(B.LINES)):Ft.setMode(B.TRIANGLES);else if(re.isLine){let pn=se.linewidth;pn===void 0&&(pn=1),C.setLineWidth(pn*ue()),re.isLineSegments?Ft.setMode(B.LINES):re.isLineLoop?Ft.setMode(B.LINE_LOOP):Ft.setMode(B.LINE_STRIP)}else re.isPoints?Ft.setMode(B.POINTS):re.isSprite&&Ft.setMode(B.TRIANGLES);if(re.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Ft.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{let pn=re._multiDrawStarts,qe=re._multiDrawCounts,Rn=re._multiDrawCount,ft=Je?me.get(Je).bytesPerElement:1,Kn=X.get(se).currentProgram.getUniforms();for(let zn=0;zn<Rn;zn++)Kn.setValue(B,"_gl_DrawID",zn),Ft.render(pn[zn]/ft,qe[zn])}else if(re.isInstancedMesh)Ft.renderInstances(Ye,Wt,re.count);else if(he.isInstancedBufferGeometry){let pn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,qe=Math.min(he.instanceCount,pn);Ft.renderInstances(Ye,Wt,qe)}else Ft.render(Ye,Wt)};function Js(F,K,he,se){P!==null&&F.isNodeMaterial&&P.setObject(se,F),He===!0&&Fe.setState(F,he,!1),F.transparent===!0&&F.side===mn&&F.forceSinglePass===!1?(F.side=Un,F.needsUpdate=!0,er(F,K,se),F.side=Qi,F.needsUpdate=!0,er(F,K,se),F.side=mn):er(F,K,se)}this.compile=function(F,K,he=null){he===null&&(he=F),P!==null&&P.renderStart(F,K,he),T=Le.get(he),T.init(K),y.push(T),he.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(T.pushLight(re),re.castShadow&&T.pushShadow(re))}),F!==he&&F.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(T.pushLight(re),re.castShadow&&T.pushShadow(re))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),je=this.localClippingEnabled,He=Fe.init(this.clippingPlanes,je),He===!0&&Fe.setGlobalState(this.clippingPlanes,K),P!==null&&Ke.render(T.state.shadowsArray,he,K);let se=new Set;return F.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;let we=re.material;if(we)if(Array.isArray(we))for(let Xe=0;Xe<we.length;Xe++){let ke=we[Xe];Js(ke,he,K,re),se.add(ke)}else Js(we,he,K,re),se.add(we)}),T=y.pop(),P!==null&&P.renderEnd(),se},this.compileAsync=function(F,K,he=null){let se=this.compile(F,K,he);return new Promise(re=>{function we(){if(se.forEach(function(Xe){let Je=X.get(Xe).currentProgram;(Je===void 0||Je.isReady())&&se.delete(Xe)}),se.size===0){re(F);return}setTimeout(we,10)}te.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let js=null;function Bo(F){js&&js(F)}function al(){ss.stop()}function ll(){ss.start()}let ss=new Ip;ss.setAnimationLoop(Bo),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(F){js=F,Ae.setAnimationLoop(F),F===null?ss.stop():ss.start()},Ae.addEventListener("sessionstart",al),Ae.addEventListener("sessionend",ll),this.render=function(F,K){if(K!==void 0&&K.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;P!==null&&P.renderStart(F,K);let he=Ae.enabled===!0&&Ae.isPresenting===!0,se=b!==null&&(V===null||he)&&b.begin(w,V);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(K),K=Ae.getCamera()),F.isScene===!0&&F.onBeforeRender(w,F,K,V),T=Le.get(F,y.length),T.init(K),T.state.textureUnits=j.getTextureUnits(),y.push(T),ne.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),nt.setFromProjectionMatrix(ne,Ui,K.reversedDepth),je=this.localClippingEnabled,He=Fe.init(this.clippingPlanes,je),_=Ce.get(F,E.length),_.init(),E.push(_),Ae.enabled===!0&&Ae.isPresenting===!0){let Xe=w.xr.getDepthSensingMesh();Xe!==null&&ys(Xe,K,-1/0,w.sortObjects)}ys(F,K,0,w.sortObjects),_.finish(),P!==null&&P.updateLights(T.state.lightsArray),w.sortObjects===!0&&_.sort(xe,ve),ee=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,ee&&ct.addToRenderList(_,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&Fe.beginShadows();let re=T.state.shadowsArray;if(Ke.render(re,F,K),He===!0&&Fe.endShadows(),(se&&b.hasRenderPass())===!1){let Xe=_.opaque,ke=_.transmissive;if(T.setupLights(),K.isArrayCamera){let Je=K.cameras;if(ke.length>0)for(let Qe=0,bt=Je.length;Qe<bt;Qe++){let Tt=Je[Qe];Oo(Xe,ke,F,Tt)}ee&&ct.render(F);for(let Qe=0,bt=Je.length;Qe<bt;Qe++){let Tt=Je[Qe];Qs(_,F,Tt,Tt.viewport)}}else ke.length>0&&Oo(Xe,ke,F,K),ee&&ct.render(F),Qs(_,F,K)}V!==null&&O===0&&(j.updateMultisampleRenderTarget(V),j.updateRenderTargetMipmap(V)),se&&b.end(w),F.isScene===!0&&F.onAfterRender(w,F,K),Ve.resetDefaultState(),N=-1,z=null,y.pop(),y.length>0?(T=y[y.length-1],j.setTextureUnits(T.state.textureUnits),He===!0&&Fe.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?_=E[E.length-1]:_=null,P!==null&&P.renderEnd()};function ys(F,K,he,se){if(F.visible===!1)return;if(F.layers.test(K.layers)){if(F.isGroup)he=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(K);else if(F.isLightProbeGrid)T.pushLightProbeGrid(F);else if(F.isLight)T.pushLight(F),F.castShadow&&T.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(nt)){se&&Q.setFromMatrixPosition(F.matrixWorld).applyMatrix4(ne);let Xe=fe.update(F),ke=F.material;ke.visible&&_.push(F,Xe,ke,he,Q.z,null,K)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(nt))){let Xe=fe.update(F),ke=F.material;if(se&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Q.copy(F.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Q.copy(Xe.boundingSphere.center)),Q.applyMatrix4(F.matrixWorld).applyMatrix4(ne)),Array.isArray(ke)){let Je=Xe.groups;for(let Qe=0,bt=Je.length;Qe<bt;Qe++){let Tt=Je[Qe],Ye=ke[Tt.materialIndex];Ye&&Ye.visible&&_.push(F,Xe,Ye,he,Q.z,Tt,K)}}else ke.visible&&_.push(F,Xe,ke,he,Q.z,null,K)}}let we=F.children;for(let Xe=0,ke=we.length;Xe<ke;Xe++)ys(we[Xe],K,he,se)}function Qs(F,K,he,se){let{opaque:re,transmissive:we,transparent:Xe}=F;T.setupLightsView(he),He===!0&&Fe.setGlobalState(w.clippingPlanes,he),se&&C.viewport(H.copy(se)),re.length>0&&$t(re,K,he),we.length>0&&$t(we,K,he),Xe.length>0&&$t(Xe,K,he),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function Oo(F,K,he,se){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[se.id]===void 0){let Ye=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[se.id]=new zt(1,1,{generateMipmaps:!0,type:Ye?Mn:Wn,minFilter:Tn,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:At.workingColorSpace})}let we=T.state.transmissionRenderTarget[se.id],Xe=se.viewport||H;we.setSize(Xe.z*w.transmissionResolutionScale,Xe.w*w.transmissionResolutionScale);let ke=w.getRenderTarget(),Je=w.getActiveCubeFace(),Qe=w.getActiveMipmapLevel();w.setRenderTarget(we),w.getClearColor(ze),Be=w.getClearAlpha(),Be<1&&w.setClearColor(16777215,.5),w.clear(),ee&&ct.render(he);let bt=w.toneMapping;w.toneMapping=zi;let Tt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),T.setupLightsView(se),He===!0&&Fe.setGlobalState(w.clippingPlanes,se),$t(F,he,se),j.updateMultisampleRenderTarget(we),j.updateRenderTargetMipmap(we),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Pt=0,Wt=K.length;Pt<Wt;Pt++){let Nt=K[Pt],{object:Ft,geometry:pn,material:qe,group:Rn}=Nt;if(qe.side===mn&&Ft.layers.test(se.layers)){let ft=qe.side;qe.side=Un,qe.needsUpdate=!0,zo(Ft,he,se,pn,qe,Rn),qe.side=ft,qe.needsUpdate=!0,Ye=!0}}Ye===!0&&(j.updateMultisampleRenderTarget(we),j.updateRenderTargetMipmap(we))}w.setRenderTarget(ke,Je,Qe),w.setClearColor(ze,Be),Tt!==void 0&&(se.viewport=Tt),w.toneMapping=bt}function $t(F,K,he){let se=K.isScene===!0?K.overrideMaterial:null;for(let re=0,we=F.length;re<we;re++){let Xe=F[re],{object:ke,geometry:Je,group:Qe}=Xe,bt=Xe.material;bt.allowOverride===!0&&se!==null&&(bt=se),ke.layers.test(he.layers)&&zo(ke,K,he,Je,bt,Qe)}}function zo(F,K,he,se,re,we){P!==null&&re.isNodeMaterial&&P.setObject(F,re),F.onBeforeRender(w,K,he,se,re,we),F.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),re.onBeforeRender(w,K,he,se,F,we),re.transparent===!0&&re.side===mn&&re.forceSinglePass===!1?(re.side=Un,re.needsUpdate=!0,w.renderBufferDirect(he,K,se,re,F,we),re.side=Qi,re.needsUpdate=!0,w.renderBufferDirect(he,K,se,re,F,we),re.side=mn):w.renderBufferDirect(he,K,se,re,F,we),F.onAfterRender(w,K,he,se,re,we)}function er(F,K,he){K.isScene!==!0&&(K=ie);let se=X.get(F),re=T.state.lights,we=T.state.shadowsArray,Xe=re.state.version,ke=Ie.getParameters(F,re.state,we,K,he,T.state.lightProbeGridArray),Je=Ie.getProgramCacheKey(ke),Qe=se.programs;se.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?K.environment:null,se.fog=K.fog;let bt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;se.envMap=oe.get(F.envMap||se.environment,bt),se.envMapRotation=se.environment!==null&&F.envMap===null?K.environmentRotation:F.envMapRotation,Qe===void 0&&(F.addEventListener("dispose",Bn),Qe=new Map,se.programs=Qe);let Tt=Qe.get(Je);if(Tt!==void 0){if(se.currentProgram===Tt&&se.lightsStateVersion===Xe)return cl(F,ke),Tt}else ke.uniforms=Ie.getUniforms(F),P!==null&&F.isNodeMaterial&&P.build(F,he,ke),F.onBeforeCompile(ke,w),Tt=Ie.acquireProgram(ke,Je),Qe.set(Je,Tt),se.uniforms=ke.uniforms;let Ye=se.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Ye.clippingPlanes=Fe.uniform),cl(F,ke),se.needsLights=ul(F),se.lightsStateVersion=Xe,se.needsLights&&(Ye.ambientLightColor.value=re.state.ambient,Ye.lightProbe.value=re.state.probe,Ye.sunLights.value=re.state.sun,Ye.sunLightShadows.value=re.state.sunShadow,Ye.directionalLights.value=re.state.directional,Ye.directionalLightShadows.value=re.state.directionalShadow,Ye.spotLights.value=re.state.spot,Ye.spotLightShadows.value=re.state.spotShadow,Ye.rectAreaLights.value=re.state.rectArea,Ye.ltc_1.value=re.state.rectAreaLTC1,Ye.ltc_2.value=re.state.rectAreaLTC2,Ye.pointLights.value=re.state.point,Ye.pointLightShadows.value=re.state.pointShadow,Ye.hemisphereLights.value=re.state.hemi,Ye.sunShadowMatrix.value=re.state.sunShadowMatrix,Ye.sunShadowCascade.value=re.state.sunShadowCascade,Ye.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ye.spotLightMatrix.value=re.state.spotLightMatrix,Ye.spotLightMap.value=re.state.spotLightMap,Ye.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=T.state.lightProbeGridArray.length>0,se.currentProgram=Tt,se.uniformsList=null,Tt}function ko(F){if(F.uniformsList===null){let K=F.currentProgram.getUniforms();F.uniformsList=xo.seqWithValue(K.seq,F.uniforms)}return F.uniformsList}function cl(F,K){let he=X.get(F);he.outputColorSpace=K.outputColorSpace,he.batching=K.batching,he.batchingColor=K.batchingColor,he.instancing=K.instancing,he.instancingColor=K.instancingColor,he.instancingMorph=K.instancingMorph,he.skinning=K.skinning,he.morphTargets=K.morphTargets,he.morphNormals=K.morphNormals,he.morphColors=K.morphColors,he.morphTargetsCount=K.morphTargetsCount,he.numClippingPlanes=K.numClippingPlanes,he.numIntersection=K.numClipIntersection,he.vertexAlphas=K.vertexAlphas,he.vertexTangents=K.vertexTangents,he.toneMapping=K.toneMapping}function Ho(F,K){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;m.setFromMatrixPosition(K.matrixWorld);for(let he=0,se=F.length;he<se;he++){let re=F[he];if(re.texture!==null&&re.boundingBox.containsPoint(m))return re}return null}function On(F,K,he,se,re){K.isScene!==!0&&(K=ie),j.resetTextureUnits();let we=K.fog,Xe=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?K.environment:null,ke=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:At.workingColorSpace,Je=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Qe=oe.get(se.envMap||Xe,Je),bt=se.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Tt=!!he.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ye=!!he.morphAttributes.position,Pt=!!he.morphAttributes.normal,Wt=!!he.morphAttributes.color,Nt=zi;se.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Nt=w.toneMapping);let Ft=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,pn=Ft!==void 0?Ft.length:0,qe=X.get(se),Rn=T.state.lights;if(He===!0&&(je===!0||F!==z)){let St=F===z&&se.id===N;Fe.setState(se,F,St)}let ft=!1;se.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Rn.state.version||qe.outputColorSpace!==ke||re.isBatchedMesh&&qe.batching===!1||!re.isBatchedMesh&&qe.batching===!0||re.isBatchedMesh&&qe.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&qe.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&qe.instancing===!1||!re.isInstancedMesh&&qe.instancing===!0||re.isSkinnedMesh&&qe.skinning===!1||!re.isSkinnedMesh&&qe.skinning===!0||re.isInstancedMesh&&qe.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&qe.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&qe.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&qe.instancingMorph===!1&&re.morphTexture!==null||qe.envMap!==Qe||se.fog===!0&&qe.fog!==we||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Fe.numPlanes||qe.numIntersection!==Fe.numIntersection)||qe.vertexAlphas!==bt||qe.vertexTangents!==Tt||qe.morphTargets!==Ye||qe.morphNormals!==Pt||qe.morphColors!==Wt||qe.toneMapping!==Nt||qe.morphTargetsCount!==pn||!!qe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,qe.__version=se.version);let Kn=qe.currentProgram;ft===!0&&(Kn=er(se,K,re),P&&se.isNodeMaterial&&P.onUpdateProgram(se,Kn,qe));let zn=!1,Jn=!1,qi=!1,lt=Kn.getUniforms(),en=qe.uniforms;if(C.useProgram(Kn.program)&&(zn=!0,Jn=!0,qi=!0),se.id!==N&&(N=se.id,Jn=!0),qe.needsLights){let St=Ho(T.state.lightProbeGridArray,re);qe.lightProbeGrid!==St&&(qe.lightProbeGrid=St,Jn=!0)}if(zn||z!==F){C.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),lt.setValue(B,"projectionMatrix",F.projectionMatrix),lt.setValue(B,"viewMatrix",F.matrixWorldInverse);let _t=lt.map.cameraPosition;_t!==void 0&&_t.setValue(B,be.setFromMatrixPosition(F.matrixWorld)),U.logarithmicDepthBuffer&&lt.setValue(B,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&lt.setValue(B,"isOrthographic",F.isOrthographicCamera===!0),z!==F&&(z=F,Jn=!0,qi=!0)}if(qe.needsLights&&(Rn.state.sunShadowMap.length>0&&lt.setValue(B,"sunShadowMap",Rn.state.sunShadowMap,j),Rn.state.directionalShadowMap.length>0&&lt.setValue(B,"directionalShadowMap",Rn.state.directionalShadowMap,j),Rn.state.spotShadowMap.length>0&&lt.setValue(B,"spotShadowMap",Rn.state.spotShadowMap,j),Rn.state.pointShadowMap.length>0&&lt.setValue(B,"pointShadowMap",Rn.state.pointShadowMap,j)),re.isSkinnedMesh){lt.setOptional(B,re,"bindMatrix"),lt.setOptional(B,re,"bindMatrixInverse");let St=re.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),lt.setValue(B,"boneTexture",St.boneTexture,j))}re.isBatchedMesh&&(lt.setOptional(B,re,"batchingTexture"),lt.setValue(B,"batchingTexture",re._matricesTexture,j),lt.setOptional(B,re,"batchingIdTexture"),lt.setValue(B,"batchingIdTexture",re._indirectTexture,j),lt.setOptional(B,re,"batchingColorTexture"),re._colorsTexture!==null&&lt.setValue(B,"batchingColorTexture",re._colorsTexture,j));let pt=he.morphAttributes;if((pt.position!==void 0||pt.normal!==void 0||pt.color!==void 0)&&q.update(re,he,Kn),(Jn||qe.receiveShadow!==re.receiveShadow)&&(qe.receiveShadow=re.receiveShadow,lt.setValue(B,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&K.environment!==null&&(en.envMapIntensity.value=K.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Ky()),Jn){if(lt.setValue(B,"toneMappingExposure",w.toneMappingExposure),qe.needsLights&&dn(en,qi),we&&se.fog===!0&&$e.refreshFogUniforms(en,we),$e.refreshMaterialUniforms(en,se,J,$,T.state.transmissionRenderTarget[F.id]),qe.needsLights&&qe.lightProbeGrid){let St=qe.lightProbeGrid;en.probesSH.value=St.texture,en.probesMin.value.copy(St.boundingBox.min),en.probesMax.value.copy(St.boundingBox.max),en.probesResolution.value.copy(St.resolution)}xo.upload(B,ko(qe),en,j)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(xo.upload(B,ko(qe),en,j),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&lt.setValue(B,"center",re.center),lt.setValue(B,"modelViewMatrix",re.modelViewMatrix),lt.setValue(B,"normalMatrix",re.normalMatrix),lt.setValue(B,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){let St=se.uniformsGroups;for(let _t=0,Ms=St.length;_t<Ms;_t++){let hl=St[_t];Se.update(hl,Kn),Se.bind(hl,Kn)}}return Kn}function dn(F,K){F.ambientLightColor.needsUpdate=K,F.lightProbe.needsUpdate=K,F.sunLights.needsUpdate=K,F.sunLightShadows.needsUpdate=K,F.directionalLights.needsUpdate=K,F.directionalLightShadows.needsUpdate=K,F.pointLights.needsUpdate=K,F.pointLightShadows.needsUpdate=K,F.spotLights.needsUpdate=K,F.spotLightShadows.needsUpdate=K,F.rectAreaLights.needsUpdate=K,F.hemisphereLights.needsUpdate=K}function ul(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(F,K,he){let se=X.get(F);se.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),X.get(F.texture).__webglTexture=K,X.get(F.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:he,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,K){let he=X.get(F);he.__webglFramebuffer=K,he.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(F,K=0,he=0){V=F,D=K,O=he;let se=null,re=!1,we=!1;if(F){let ke=X.get(F);if(ke.__useDefaultFramebuffer!==void 0){C.bindFramebuffer(B.FRAMEBUFFER,ke.__webglFramebuffer),H.copy(F.viewport),Y.copy(F.scissor),le=F.scissorTest,C.viewport(H),C.scissor(Y),C.setScissorTest(le),N=-1;return}else if(ke.__webglFramebuffer===void 0)j.setupRenderTarget(F);else if(ke.__hasExternalTextures)j.rebindTextures(F,X.get(F.texture).__webglTexture,X.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let bt=F.depthTexture;if(ke.__boundDepthTexture!==bt){if(bt!==null&&X.has(bt)&&(F.width!==bt.image.width||F.height!==bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(F)}}let Je=F.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(we=!0);let Qe=X.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Qe[K])?se=Qe[K][he]:se=Qe[K],re=!0):F.samples>0&&j.useMultisampledRTT(F)===!1?se=X.get(F).__webglMultisampledFramebuffer:Array.isArray(Qe)?se=Qe[he]:se=Qe,H.copy(F.viewport),Y.copy(F.scissor),le=F.scissorTest}else H.copy(Ee).multiplyScalar(J).floor(),Y.copy(We).multiplyScalar(J).floor(),le=Ne;if(he!==0&&(se=I),C.bindFramebuffer(B.FRAMEBUFFER,se)&&C.drawBuffers(F,se),C.viewport(H),C.scissor(Y),C.setScissorTest(le),re){let ke=X.get(F.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke.__webglTexture,he)}else if(we){let ke=K;for(let Je=0;Je<F.textures.length;Je++){let Qe=X.get(F.textures[Je]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Je,Qe.__webglTexture,he,ke)}}else if(F!==null&&he!==0){let ke=X.get(F.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ke.__webglTexture,he)}N=-1};function Vo(F){let K=X.get(F);return(K.__readFormat!==F.format||K.__readType!==F.type)&&(K.__readFormat=F.format,K.__readType=F.type,K.__formatReadable=U.textureFormatReadable(F.format),K.__typeReadable=U.textureTypeReadable(F.type)),K}this.readRenderTargetPixels=function(F,K,he,se,re,we,Xe,ke=0){if(!(F&&F.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=X.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je){C.bindFramebuffer(B.FRAMEBUFFER,Je);try{let Qe=F.textures[ke],bt=Qe.format,Tt=Qe.type;F.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ke);let Ye=Vo(Qe);if(Ye.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=F.width-se&&he>=0&&he<=F.height-re&&B.readPixels(K,he,se,re,Ue.convert(bt),Ue.convert(Tt),we)}finally{let Qe=V!==null?X.get(V).__webglFramebuffer:null;C.bindFramebuffer(B.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(F,K,he,se,re,we,Xe,ke=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=X.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je)if(K>=0&&K<=F.width-se&&he>=0&&he<=F.height-re){C.bindFramebuffer(B.FRAMEBUFFER,Je);let Qe=F.textures[ke],bt=Qe.format,Tt=Qe.type;F.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ke);let Ye=Vo(Qe);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Pt),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),B.readPixels(K,he,se,re,Ue.convert(bt),Ue.convert(Tt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Wt=V!==null?X.get(V).__webglFramebuffer:null;C.bindFramebuffer(B.FRAMEBUFFER,Wt);let Nt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await tp(B,Nt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Pt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Pt),B.deleteSync(Nt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,K=null,he=0){let se=Math.pow(2,-he),re=Math.floor(F.image.width*se),we=Math.floor(F.image.height*se),Xe=K!==null?K.x:0,ke=K!==null?K.y:0;j.setTexture2D(F,0),B.copyTexSubImage2D(B.TEXTURE_2D,he,0,0,Xe,ke,re,we),C.unbindTexture()},this.copyTextureToTexture=function(F,K,he=null,se=null,re=0,we=0){let Xe,ke,Je,Qe,bt,Tt,Ye,Pt,Wt,Nt=F.isCompressedTexture?F.mipmaps[we]:F.image;if(he!==null)Xe=he.max.x-he.min.x,ke=he.max.y-he.min.y,Je=he.isBox3?he.max.z-he.min.z:1,Qe=he.min.x,bt=he.min.y,Tt=he.isBox3?he.min.z:0;else{let en=Math.pow(2,-re);Xe=Math.floor(Nt.width*en),ke=Math.floor(Nt.height*en),F.isDataArrayTexture?Je=Nt.depth:F.isData3DTexture?Je=Math.floor(Nt.depth*en):Je=1,Qe=0,bt=0,Tt=0}se!==null?(Ye=se.x,Pt=se.y,Wt=se.z):(Ye=0,Pt=0,Wt=0);let Ft=Ue.convert(K.format),pn=Ue.convert(K.type),qe;K.isData3DTexture?(j.setTexture3D(K,0),qe=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(j.setTexture2DArray(K,0),qe=B.TEXTURE_2D_ARRAY):(j.setTexture2D(K,0),qe=B.TEXTURE_2D),C.activeTexture(B.TEXTURE0),C.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),C.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),C.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);let Rn=C.getParameter(B.UNPACK_ROW_LENGTH),ft=C.getParameter(B.UNPACK_IMAGE_HEIGHT),Kn=C.getParameter(B.UNPACK_SKIP_PIXELS),zn=C.getParameter(B.UNPACK_SKIP_ROWS),Jn=C.getParameter(B.UNPACK_SKIP_IMAGES);C.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),C.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),C.pixelStorei(B.UNPACK_SKIP_PIXELS,Qe),C.pixelStorei(B.UNPACK_SKIP_ROWS,bt),C.pixelStorei(B.UNPACK_SKIP_IMAGES,Tt);let qi=F.isDataArrayTexture||F.isData3DTexture,lt=K.isDataArrayTexture||K.isData3DTexture;if(F.isDepthTexture){let en=X.get(F),pt=X.get(K),St=X.get(en.__renderTarget),_t=X.get(pt.__renderTarget);C.bindFramebuffer(B.READ_FRAMEBUFFER,St.__webglFramebuffer),C.bindFramebuffer(B.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Ms=0;Ms<Je;Ms++)qi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(F).__webglTexture,re,Tt+Ms),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(K).__webglTexture,we,Wt+Ms)),B.blitFramebuffer(Qe,bt,Xe,ke,Ye,Pt,Xe,ke,B.DEPTH_BUFFER_BIT,B.NEAREST);C.bindFramebuffer(B.READ_FRAMEBUFFER,null),C.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(re!==0||F.isRenderTargetTexture||X.has(F)){let en=X.get(F),pt=X.get(K);C.bindFramebuffer(B.READ_FRAMEBUFFER,R),C.bindFramebuffer(B.DRAW_FRAMEBUFFER,L);for(let St=0;St<Je;St++)qi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,en.__webglTexture,re,Tt+St):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,en.__webglTexture,re),lt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pt.__webglTexture,we,Wt+St):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pt.__webglTexture,we),re!==0?B.blitFramebuffer(Qe,bt,Xe,ke,Ye,Pt,Xe,ke,B.COLOR_BUFFER_BIT,B.NEAREST):lt?B.copyTexSubImage3D(qe,we,Ye,Pt,Wt+St,Qe,bt,Xe,ke):B.copyTexSubImage2D(qe,we,Ye,Pt,Qe,bt,Xe,ke);C.bindFramebuffer(B.READ_FRAMEBUFFER,null),C.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else lt?F.isDataTexture||F.isData3DTexture?B.texSubImage3D(qe,we,Ye,Pt,Wt,Xe,ke,Je,Ft,pn,Nt.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(qe,we,Ye,Pt,Wt,Xe,ke,Je,Ft,Nt.data):B.texSubImage3D(qe,we,Ye,Pt,Wt,Xe,ke,Je,Ft,pn,Nt):F.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,we,Ye,Pt,Xe,ke,Ft,pn,Nt.data):F.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,we,Ye,Pt,Nt.width,Nt.height,Ft,Nt.data):B.texSubImage2D(B.TEXTURE_2D,we,Ye,Pt,Xe,ke,Ft,pn,Nt);C.pixelStorei(B.UNPACK_ROW_LENGTH,Rn),C.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft),C.pixelStorei(B.UNPACK_SKIP_PIXELS,Kn),C.pixelStorei(B.UNPACK_SKIP_ROWS,zn),C.pixelStorei(B.UNPACK_SKIP_IMAGES,Jn),we===0&&K.generateMipmaps&&B.generateMipmap(qe),C.unbindTexture()},this.initRenderTarget=function(F){X.get(F).__webglFramebuffer===void 0&&j.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?j.setTextureCube(F,0):F.isData3DTexture?j.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?j.setTexture2DArray(F,0):j.setTexture2D(F,0),C.unbindTexture()},this.resetState=function(){D=0,O=0,V=null,C.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};var kt=(i,e,t)=>i<e?e:i>t?t:i,Rt=(i,e,t)=>i+(e-i)*t,qa=i=>i*i*(3-2*i),It=(i,e,t)=>{let n=kt((t-i)/(e-i),0,1);return n*n*(3-2*n)},Op=1337;function zp(i){Op=i|0}function Jy(i){return i=i^Op|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var Yn=(i,e)=>Jy(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function pi(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return Rt(Yn(t,e),Yn(t+1,e),s)}var Ru=(i,e=0)=>pi(i,e)*.55+pi(i*2.03,e+7)*.3+pi(i*4.1,e+13)*.15;function Zt(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Au=new _e,pe=i=>(Au.set(i),[Au.r,Au.g,Au.b]),Vf=(i,e,t)=>[Rt(i[0],e[0],t),Rt(i[1],e[1],t),Rt(i[2],e[2],t)],An=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var mi=["city","sakura","coast","country","mountain","snow"],Ya={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},yo=1500,Cu=260,zs=0,Za=0;function Hp(i){Za=Math.max(0,mi.indexOf(i))}function ks(i){let e=Math.floor(i/yo),t=i-e*yo,n=qa(kt((t-(yo-Cu))/Cu,0,1)),s=mi.length;return{a:mi[((e+Za)%s+s)%s],b:mi[((e+Za+1)%s+s)%s],t:n}}function Dt(i){let e=ks(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var Qt=i=>{let e=ks(i);return e.t<.5?e.a:e.b};function Vp(i,e){let t=Math.floor(i/yo),n=i-t*yo,s=qa(kt((n-(yo-Cu))/Cu,0,1)),r=mi.length;return(mi[((t+Za)%r+r)%r]===e?1-s:0)+(mi[((t+Za+1)%r+r)%r]===e?s:0)}function In(i,e){let t=ks(i);return Rt(Ya[t.a][e],Ya[t.b][e],t.t)}var _r=650,yr=375,Mo=i=>i*_r+yr;function $a(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Dt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var Gf={x:new Map,r:new Map,t:new Map};function Wf(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function Hs(i){let e=Math.round((i-yr)/_r);return Wf(Gf.x,e,()=>{let t=Mo(e);return $a(t)?{k:e,s:t}:null})}function jy(i){let e=Hs(i);return e?1-It(8,45,Math.abs(i-e.s)):0}var Mr=1150,bo=820,Ka=4.6,Xf=i=>i*Mr+bo;function qf(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Dt(i+t);if(n.country+n.sakura<.9)return!1}let e=Hs(i);return!(e&&Math.abs(e.s-i)<170)}function Si(i){let e=Math.round((i-bo)/Mr);return Wf(Gf.r,e,()=>{let t=Xf(e);return qf(t)?{k:e,s:t}:null})}function Qy(i){let e=Si(i);return e?1-It(30,70,Math.abs(i-e.s)):0}function eM(i){let e=-Ka;return i<11?e-1.3:i<16?Rt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?Rt(e+.7,.35,(i-20)/5.5):.35}var Gp=1050,Wp=525,hn=85,ln=125,tM=24,nM=i=>i*Gp+Wp;function iM(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Dt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function Ti(i){let e=Math.round((i-Wp)/Gp);return Wf(Gf.t,e,()=>{let t=nM(e);return iM(t)?{k:e,s:t}:null})}function sM(i){let e=Ti(i);return e?1-It(hn+20,ln+25,Math.abs(i-e.s)):0}var Pu=0,Lu=(i,e)=>{let t=i/ln;return tM*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var ns=2,Iu=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(pi(e/300,11)-.5)*2+(pi(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*In(e,"curv")*(1-Math.max(jy(e),Qy(e),sM(e)))}elevRaw(e){return In(e,"base")+In(e,"hill")*(Ru(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=Hs(e);if(n){let o=1-It(8,45,Math.abs(e-n.s));o>0&&(t=Rt(t,this.elevRaw(n.s),o))}let s=Si(e);if(s){let o=1-It(30,70,Math.abs(e-s.s));o>0&&(t=Rt(t,this.elevRaw(s.s),o))}let r=Ti(e);if(r){let o=1-It(hn+10,ln+45,Math.abs(e-r.s));o>0&&(t=Rt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*ns<e+ns;){let t=this.X.length-1,n=t*ns,s=this.curv(n+ns/2)*ns,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*ns),this.Z.push(this.Z[t]+Math.cos(r+s/2)*ns),this.H.push(r+s),this.Y.push(this.elev(n+ns))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+ns);let n=e/ns,s=Math.floor(n),r=n-s;t.x=Rt(this.X[s],this.X[s+1],r),t.z=Rt(this.Z[s],this.Z[s+1],r),t.y=Rt(this.Y[s],this.Y[s+1],r),t.h=Rt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),a=Math.cos(t.h);return t.fx=o,t.fz=a,t.rx=-a,t.rz=o,t}};function kp(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+It(45,190,r)*16*(.45+.55*pi(e/160+(t>0?50:0),3));case"coast":{if(t>0)return r<s+.9?-.06:-.15+It(s+1.5,80,r)*24*(.5+.5*pi(e/170,5))+It(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let o=r-(s+2);return(o<26?Rt(1.25,-1.6,o/26):Rt(-1.6,-7,kt((o-26)/20,0,1)))-n}case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let a=8+6*pi(e/140,61),c=r-(s+1);return c<a?c:Math.min(a+(c-a)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+It(105,230,r)*95*(.6+.4*pi(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Rt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(pi(e/40+(t>0?3:0),71)-.5):.55+It(125,210,r)*40*(.45+.55*pi(e/230+(t>0?11:0),73));case"country":default:return r<s+2?-.08:r<s+2.6?-.08-(r-s-2)*.62:r<135?-.45:-.45+It(140,215,r)*7*(.4+.6*pi(e/210+(t>0?9:0),7))}}function Vs(i,e,t,n){let s=ks(i),r=kp(s.a,i,e,t,n),o=s.t>0?Rt(r,kp(s.b,i,e,t,n),s.t):r;Pu=0;let a=Si(i);if(a){let M=Math.abs(i-a.s);if(M>=36)return o;let S=M<29?eM(M):Rt(.35,o,It(29,36,M));return Math.abs(e)<n+3.2&&(S=Math.min(S,-.08)),S}let c=Ti(i);if(!c)return o;let u=i-c.s,h=Math.abs(u);if(h>=2*ln)return o;let p=Math.abs(e),g=Lu(u,e),x;return h<hn?x=p<=n+1.46?-.25:Math.max(o,g):x=Math.max(o,Math.min(g,p<n+1?-.06:p-(n+1))),Pu=Math.max(0,x-o),x}function Xp(i){let e=Si(i);return e?1-It(27,34,Math.abs(i-e.s)):0}var Ja=new k,Du=new k,rM=[1,1,1],oM=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],Yp=(()=>{let i=Math.tan(Math.PI/8),e=[[1,-i],[1,i],[i,1],[-i,1],[-1,i],[-1,-i],[-i,-1],[i,-1]],t=[];for(let n=1;n<7;n++)t.push(...e[0],...e[n],...e[n+1]);return t})(),Zp=(()=>{let i=[],e=[];for(let t=0;t<6;t++){let n=Math.PI/3*t-Math.PI/6,s=2/Math.sqrt(3);i.push([Math.cos(n)*s,Math.sin(n)*s])}for(let t=1;t<5;t++)e.push(...i[0],...i[t],...i[t+1]);return e})(),cn=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1,off:r=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.hasOff=r,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.O=null,this.offX=0,this.offY=0,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new et,this.nm=new vt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}if(this.hasOff){let o=new Float32Array(t*2);this.O&&o.set(this.O.subarray(0,n*2)),this.O=o}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,a,c,u){this.n>=this.cap&&this.grow(this.n+1);let h=this.e,p=this.ne,g=this.n*3,x=this.P,M=this.bb,S=h[0]*e+h[4]*t+h[8]*n+h[12],l=h[1]*e+h[5]*t+h[9]*n+h[13],f=h[2]*e+h[6]*t+h[10]*n+h[14];x[g]=S,x[g+1]=l,x[g+2]=f,S<M[0]&&(M[0]=S),l<M[1]&&(M[1]=l),f<M[2]&&(M[2]=f),S>M[3]&&(M[3]=S),l>M[4]&&(M[4]=l),f>M[5]&&(M[5]=f);let d=p[0]*s+p[3]*r+p[6]*o,v=p[1]*s+p[4]*r+p[7]*o,m=p[2]*s+p[5]*r+p[8]*o,_=127/(Math.sqrt(d*d+v*v+m*m)||1);if(this.N[g]=Math.round(d*_),this.N[g+1]=Math.round(v*_),this.N[g+2]=Math.round(m*_),this.hasUV&&(this.U[this.n*2]=a,this.U[this.n*2+1]=c),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(l)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasOff&&(this.O[this.n*2]=this.offX,this.O[this.n*2+1]=this.offY),this.hasColor){let T=u||rM,E=this.Cl;E[g]=T[0]>=1?255:T[0]<=0?0:T[0]*255+.5,E[g+1]=T[1]>=1?255:T[1]<=0?0:T[1]*255+.5,E[g+2]=T[2]>=1?255:T[2]<=0?0:T[2]*255+.5}this.n++}quad(e,t,n,s,r,o){Ja.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Du.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),Du.lengthSq()<1e-12&&Du.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Ja.cross(Du).normalize();let a=Ja.x,c=Ja.y,u=Ja.z,h=o?o.u0:0,p=o?o.u1:1,g=o?o.v0:0,x=o?o.v1:1;this.vtx(e[0],e[1],e[2],a,c,u,h,g,r),this.vtx(t[0],t[1],t[2],a,c,u,p,g,r),this.vtx(n[0],n[1],n[2],a,c,u,p,x,r),this.vtx(e[0],e[1],e[2],a,c,u,h,g,r),this.vtx(n[0],n[1],n[2],a,c,u,p,x,r),this.vtx(s[0],s[1],s[2],a,c,u,h,x,r)}box(e,t,n,s,r,o,a,c=null,u=null){let h=c||{},p=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],p.nz||a,h.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],p.pz||a,h.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],p.nx||a,h.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],p.px||a,h.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],p.py||a,h.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],p.ny||a,h.ny)}cyl(e,t,n,s,r,o,a,c,u=!0){let h=(s-r)/o;for(let p=0;p<a;p++){let g=p/a*Math.PI*2,x=(p+1)/a*Math.PI*2,M=Math.cos(g),S=Math.sin(g),l=Math.cos(x),f=Math.sin(x),d=[e+M*s,t,n+S*s],v=[e+l*s,t,n+f*s],m=[e+l*r,t+o,n+f*r],_=[e+M*r,t+o,n+S*r];this.vtx(d[0],d[1],d[2],M,h,S,0,0,c),this.vtx(_[0],_[1],_[2],M,h,S,0,0,c),this.vtx(m[0],m[1],m[2],l,h,f,0,0,c),this.vtx(d[0],d[1],d[2],M,h,S,0,0,c),this.vtx(m[0],m[1],m[2],l,h,f,0,0,c),this.vtx(v[0],v[1],v[2],l,h,f,0,0,c),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,c),this.vtx(m[0],m[1],m[2],0,1,0,0,0,c),this.vtx(_[0],_[1],_[2],0,1,0,0,0,c))}}rod(e,t,n,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],u=t[2]-e[2],h=Math.hypot(a,c,u);a/=h,c/=h,u/=h;let p=0,g=1,x=0;Math.abs(c)>.99&&(p=1,g=0);let M=c*x-u*g,S=u*p-a*x,l=a*g-c*p,f=Math.hypot(M,S,l);M/=f,S/=f,l/=f;let d=S*u-l*c,v=l*a-M*u,m=M*c-S*a;for(let _=0;_<r;_++){let T=_/r*Math.PI*2,E=(_+1)/r*Math.PI*2,y=Math.cos(T),b=Math.sin(T),w=Math.cos(E),A=Math.sin(E),P=M*y+d*b,I=S*y+v*b,R=l*y+m*b,L=M*w+d*A,D=S*w+v*A,O=l*w+m*A,V=[e[0]+P*n,e[1]+I*n,e[2]+R*n],N=[e[0]+L*n,e[1]+D*n,e[2]+O*n],z=[t[0]+L*s,t[1]+D*s,t[2]+O*s],H=[t[0]+P*s,t[1]+I*s,t[2]+R*s];this.vtx(V[0],V[1],V[2],P,I,R,0,0,o),this.vtx(N[0],N[1],N[2],L,D,O,0,0,o),this.vtx(z[0],z[1],z[2],L,D,O,0,0,o),this.vtx(V[0],V[1],V[2],P,I,R,0,0,o),this.vtx(z[0],z[1],z[2],L,D,O,0,0,o),this.vtx(H[0],H[1],H[2],P,I,R,0,0,o)}return h}blob(e,t,n,s,r,o,a=0,c=1){let u=qp[a%qp.length],h=u.attributes.position.array,p=u.attributes.normal.array,g=u.userData.disp;for(let x=0;x<h.length;x+=3){let M=1+g[x/3],S=Math.max(0,Math.min(1,p[x+1]*.5+.5)),l=[o[0]+(r[0]-o[0])*S,o[1]+(r[1]-o[1])*S,o[2]+(r[2]-o[2])*S];this.vtx(e+h[x]*s*M,t+h[x+1]*s*M*c,n+h[x+2]*s*M,p[x],p[x+1],p[x+2],0,0,l)}}wire(e,t,n,s,r,o=10){let a=e;this.noShadow=!0;for(let c=1;c<=o;c++){let u=c/o,h=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(a,h,s,s,3,r),a=h}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,a,c]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],a,c,s[o])}bill(e,t,n,s,r,o,a,c,u,h,p=oM,g=1){let x=(u.u1-u.u0)*.5,M=(u.v1-u.v0)*.5,S=u.u0+x,l=u.v0+M;for(let f=0;f<p.length;f+=2){let d=p[f],v=p[f+1];this.offX=d*a,this.offY=v*c,this.vtx(e,t,n,s,r,o,S+d*x*g,l+v*M*g,h)}this.offX=this.offY=0}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null,O:this.hasOff&&this.O?this.O.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,a=e.C,c=e.U,u=this.n,h=this.bb;for(let p=0;p<e.n*3;p+=3){let g=r[p],x=r[p+1],M=r[p+2],S=u*3+p,l=n[0]*g+n[4]*x+n[8]*M+n[12],f=n[1]*g+n[5]*x+n[9]*M+n[13],d=n[2]*g+n[6]*x+n[10]*M+n[14];this.P[S]=l,this.P[S+1]=f,this.P[S+2]=d,this.hasAO&&(this.A[u+p/3]=this.aoByte(f)),l<h[0]&&(h[0]=l),f<h[1]&&(h[1]=f),d<h[2]&&(h[2]=d),l>h[3]&&(h[3]=l),f>h[4]&&(h[4]=f),d>h[5]&&(h[5]=d);let v=o[p],m=o[p+1],_=o[p+2],T=s[0]*v+s[3]*m+s[6]*_,E=s[1]*v+s[4]*m+s[7]*_,y=s[2]*v+s[5]*m+s[8]*_,b=127/(Math.sqrt(T*T+E*E+y*y)||1);this.N[S]=Math.round(T*b),this.N[S+1]=Math.round(E*b),this.N[S+2]=Math.round(y*b)}if(this.hasColor&&(a?this.Cl.set(a,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(c?this.U.set(c,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.hasOff){let p=Math.hypot(n[0],n[1],n[2]),g=e.O;if(g)for(let x=0;x<e.n*2;x++)this.O[u*2+x]=g[x]*p;else this.O.fill(0,u*2,(u+e.n)*2)}this.n+=e.n}build(){if(!this.n)return null;let e=new yt,t=this.n,n=this.bb;if(e.setAttribute("position",new Ut(this.P.slice(0,t*3),3)),e.setAttribute("normal",new Ut(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new Ut(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new Ut(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new Ut(this.Lt.slice(0,t),1,!0)),this.hasOff&&e.setAttribute("aOff",new Ut(this.O.slice(0,t*2),2)),this.hasColor&&e.setAttribute("color",new Ut(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new _i(new k(n[0],n[1],n[2]),new k(n[3],n[4],n[5])),this.hasOff){let s=0;for(let r=0;r<t*2;r++){let o=Math.abs(this.O[r]);o>s&&(s=o)}e.boundingBox.expandByScalar(s*Math.SQRT2)}return e.boundingSphere=e.boundingBox.getBoundingSphere(new yi),e}},qp=[0,1,2,3].map(i=>{let e=new Ta(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,a)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(a*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});dt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var aM=dt.shadowmap_pars_fragment;function $f(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;dt.shadowmap_pars_fragment=aM.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}$f(1);function Qp(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";dt.shadowmap_pars_fragment=t+dt.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}dt.lights_fragment_begin=dt.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var ds=4200,Oe={uSkyHor:{value:new _e(.7,.8,.9)},uSkyZen:{value:new _e(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uSakWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Pe},uSunDir:{value:new k(0,1,0)},uSunCol:{value:new _e(1,1,1)},uTuftV:{value:new gt(.167,.333,.164,.165)},uGhShade:{value:new k(.3,.85,1.7)},uBlShade:{value:new k(7.5,3,2.3)},uTunA:{value:new k(0,-1e4,0)},uTunB:{value:new k(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new k},uCarFwd:{value:new k(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:lM()},uCloudTex:{value:null},uCloudOrg:{value:new Pe},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Pe(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function em(i){let e=new Fi(new Uint8Array(i),i.length,1,Bs);return e.minFilter=e.magFilter=xn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var ai=em([16,16,16,70,200,255,255,255]),ja=em([28,40,70,130,200,240,255,255]);function lM(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new Fi(e,256,256,Xn);return s.wrapS=s.wrapT=Cs,s.magFilter=Lt,s.minFilter=Tn,s.generateMipmaps=!0,s.colorSpace=ti,s.needsUpdate=!0,s}var Ei=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,Nu=1600,Yf=256,cM=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/Nu).toFixed(8)} + 0.5).r * uCloudSh; }`,uM=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,tm=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/Nu).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,nm=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,hM=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,fM=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,Uu=new fr;Uu.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};Uu.customProgramCacheKey=()=>"propdepth";function im(){let i=new zt(Yf,Yf,{format:Bs,type:Wn,depthBuffer:!1,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),e=new xt({uniforms:{uCenter:{value:new Pe},uOrigin:Oe.uOrigin,uTime:Oe.uTime,uNoiseTex:Oe.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${Nu.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new ht(new jt(2,2),e),n=new fs;t.frustumCulled=!1,Oe.uCloudTex.value=i.texture,Oe.uCloudTex.rt=i;let s=Nu/Yf;return{update(r,o,a,c,u){let h=Math.round((o+c)/s)*s-c,p=Math.round((a+u)/s)*s-u;e.uniforms.uCenter.value.set(h,p),Oe.uCloudOrg.value.set(h,p);let g=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(g)}}}function Gs(i,e="",t="",n=!0){i.uniforms.uOrigin=Oe.uOrigin,i.uniforms.uCloudSh=Oe.uCloudSh,i.uniforms.uTime=Oe.uTime,i.uniforms.uNoiseTex=Oe.uNoiseTex,i.uniforms.uCloudTex=Oe.uCloudTex,i.uniforms.uCloudOrg=Oe.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=Oe[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?tm:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Ei}${cM}${hM}${e}`).replace("#include <opaque_fragment>",`${n?nm:uM}${t}${fM}
#include <opaque_fragment>`)}var dM=`
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
#ifdef Z_SAKURA
// (only in the variants with the avenue: it needs petalsAt, and nothing else calls it)
vec3 sakuraGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
  // (the painting's lawns are a light, warm green in the sun: (167, 193, 70) against our (117, 172, 47))
  vec3 g = grassCol(p, L(vec3(0.44, 0.64, 0.27)), L(vec3(0.74, 0.84, 0.38)));
  // a few petals on the lawn, most under the avenue's trees (the painting's lawns are a clean green: they used to be
  // splashed with pink blotches)
  return mix(g, PETAL, petalsAt(p, 0.12 * (1.0 - 0.8 * smoothstep(rw + 5.0, rw + 12.0, abs(u)))));
}
#endif
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
  // the verge under its bank of tall grass (the clump cards, chunks.js placeBanks): dense grass in its own shade right
  // up to the asphalt, lighter towards the field (it used to be a gravel shoulder and a ditch)
  if (a < rw + 2.3) return mix(L(vec3(0.1, 0.25, 0.08)), L(vec3(0.3, 0.54, 0.18)), smoothstep(rw + 0.9, rw + 2.3, a) * (0.55 + 0.45 * vnoise(vec2(s * 1.4, u * 12.0) + 3.1)));
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
`,pM=`
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
#endif`,mM=`
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
}`,sm={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"};function rm(i){let e={};for(let t of i)e[sm[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),e}var $p=new Map;function Qa(i){let e=[...new Set(i)].sort().join("+"),t=$p.get(e);return t||(t=om(rm(e.split("+")),e),$p.set(e,t)),t}function om(i=rm(Object.keys(sm)),e="all"){let t=new an({color:16777215,gradientMap:ai});return t.defines=i,t.onBeforeCompile=n=>{n.uniforms.uSkyHor=Oe.uSkyHor,n.uniforms.uSkyZen=Oe.uSkyZen,n.uniforms.uWet=Oe.uWet,n.uniforms.uSakWet=Oe.uSakWet,n.uniforms.uNight=Oe.uNight,n.uniforms.uSunDir=Oe.uSunDir,n.uniforms.uSunCol=Oe.uSunCol;for(let s of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])n.uniforms[s]=Oe[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),Gs(n,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${dM}`,mM+pM,!1),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v18-"+e,t}function Kp(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),Gs(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function am(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=Oe[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function gM(i){i.uniforms.uLightsOn=Oe.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function Jp(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function Kf(i){return i.onBeforeCompile=e=>Gs(e),i.customProgramCacheKey=()=>"cs",i}var vM="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",xM=(i,e,t="")=>`
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
}`;function Jf(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=Oe[o];s&&Object.assign(r.uniforms,s.uniforms),Gs(r,vM+(s?s.pars:""),xM(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}var Ws=48;function lm(i,e){let t=new an({color:16777215,gradientMap:ja});return t.onBeforeCompile=n=>{Object.assign(n.uniforms,e,i);for(let s of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])n.uniforms[s]=Oe[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${tm}
uniform vec4 uG[${Ws}], uGM[${Ws/4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;
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
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${Ws-2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
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
  // the colour of the field plot it stands in (countryGround: the same hash of the same 30 \xD7 17 m plot), dark at the
  // root, sunlit at the tip
  vec2 pid = floor(vec2(mod(gs, ${ds.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`).replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`#include <project_vertex>
if (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
varying vec3 vBladeCol; varying float vCloud;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${nm}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>"grass-v4",t}function cm(i,e){let t={};t.ground=om(),t.color=Kp(new an({vertexColors:!0,gradientMap:ai}),1.6,.1,"color-v3",Jp),t.atlas=new an({vertexColors:!0,gradientMap:ai,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=a=>{Jp(a),gM(a),Gs(a)},t.atlas.customProgramCacheKey=()=>"atlas-v5",t.foliage=Kp(new an({vertexColors:!0,gradientMap:ja}),2.6,.24,"foliage-v2"),t.lamp=new un({color:15789798}),t.sig=new un({color:new _e(.15,1.7,1.1)}),t.sodium=new un({color:new _e(5,2.3,.65)}),t.decal=new an({vertexColors:!0,gradientMap:ai,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=a=>Gs(a),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new an({map:e,vertexColors:!0,gradientMap:ja,alphaTest:.42,side:mn}),t.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",dt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),Gs(a),am(a),a.uniforms.uTuftV=Oe.uTuftV,a.uniforms.uWind=Oe.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v5"),t.wire=new un({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let o=new Qn(n);return t.pool=new un({map:o,color:16762746,transparent:!0,opacity:0,blending:Oi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=o,t}function um(i,e,t){let s=new Uint8Array(64);for(let o=0;o<64;o++){let a=(o+.5)/64*2-1,c=Math.min(1,Math.max(0,(a-i)/(e-i))),u=c*c*(3-2*c);s[o]=Math.round(255*(t+(1-t)*u))}let r=new Fi(s,64,1,Bs);return r.minFilter=r.magFilter=Lt,r.generateMipmaps=!1,r.needsUpdate=!0,r}var _M=um(-.05,.5,.05),yM=um(-.5,.45,.12);function jp(i,e){i.uniforms.uTime=Oe.uTime,i.uniforms.uWind=Oe.uWind,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aOff; uniform float uWind;`+(e?" uniform float uTime;":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += bbR * (aOff.x + sw) + bbU * aOff.y; }`),e&&(i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`))}var Zf=(i,e,t)=>{let n=new _e().setRGB(i/255,e/255,t/255,qt);return`vec3(${n.r.toFixed(4)}, ${n.g.toFixed(4)}, ${n.b.toFixed(4)})`},MM=`diffuseColor.rgb *= mix(${Zf(62,38,34)}, mix(${Zf(205,105,150)}, ${Zf(255,232,242)}, smoothstep(0.3, 1.0, gTx.b)), smoothstep(0.1, 0.26, gTx.b));`;function jf(i,{blossom:e=!1}={}){let t=new an({map:i,vertexColors:!0,color:e?16777215:new _e().setRGB(.68,.85,.46,qt),gradientMap:e?yM:_M,alphaTest:.5,side:Qi});t.shadowSide=mn,t.onBeforeCompile=s=>{Gs(s),am(s),jp(s,!1),s.uniforms.uGhShade=e?Oe.uBlShade:Oe.uGhShade,s.vertexShader=s.vertexShader.replace("#include <shadowmap_vertex>",`#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGhShade;`).replace("#include <map_fragment>",`
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${e?MM:"diffuseColor.rgb *= gTx.b;"}
diffuseColor.a *= gTx.a;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, 0.72));`).replace("#include <aomap_fragment>",`#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`)},t.customProgramCacheKey=()=>e?"gblossom-v1":"gleaf-v1";let n=new fr;return n.onBeforeCompile=s=>jp(s,!0),n.customProgramCacheKey=()=>"gleaf-depth-v1",{mat:t,depth:n}}var bM=pe("#f2c230"),hm=pe("#26272c");function Fu(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=In(s,"rw"),a=n*(o+.8),c=Dt(s),u=c.city+c.sakura>.5;t.push({x:r.x+r.rx*a,z:r.z+r.rz*a,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function fm(){let i=new nn,e=Kf(new an({vertexColors:!0,gradientMap:ai})),t=new un({color:new _e(6,.45,.3)}),n=new un({color:new _e(.22,.03,.03)}),s=[0,1].map(()=>{let r=new nn,o=new nn;r.add(o),o.position.set(-.42,1.02,-.02);let a=new cn,c=3.6;for(let p=0,g=0;g<c;p++,g+=.45)a.box(-Math.min(g+.45,c),-.065,-.065,-g,.065,.065,p%2?hm:bM);a.box(0,-.09,-.07,.38,.09,.07,hm);let u=new ht(a.build(),e);u.castShadow=!0,o.add(u);let h=[-.28,.28].map(p=>{let g=new ht(new ur(.13,18),n);return g.position.set(p,2.75,-.1),g.rotation.y=Math.PI,r.add(g),g});return i.add(r),{root:r,pivot:o,arm:u,lamps:h,L:c}});return i.visible=!1,{group:i,update(r,o,a,c,u){i.visible=!!r,r&&r.forEach((h,p)=>{let g=s[p];g.root.position.set(h.x-o.x,h.y,h.z-o.z),g.root.rotation.y=h.yaw,g.arm.scale.x=(h.rw+.25)/g.L,g.pivot.rotation.z=-a*(Math.PI/2-.06);let x=Math.floor(u*2.5)%2;g.lamps[0].material=c&&x===0?t:n,g.lamps[1].material=c&&x===1?t:n})}}}function SM(){let t=()=>{let f=document.createElement("canvas");return f.width=1024,f.height=512,f},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),a='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let c=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,c);for(let f=0;f<1024;f+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(f,0,2,c);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,c-14,1024,14);let u=[.1,.36,.62,.88].map(f=>f*1024),h=(f,d,v,m)=>{let _=r.createLinearGradient(f,d,f+v*.3,d+m);_.addColorStop(0,"#5d7fae"),_.addColorStop(.6,"#9db7d6"),_.addColorStop(1,"#2f3f55"),r.fillStyle=_,r.fillRect(f,d,v,m),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(f+v*.2,d),r.lineTo(f+v*.38,d),r.lineTo(f+v*.1,d+m),r.lineTo(f-v*.08,d+m),r.fill(),o.fillStyle="#ffeccc",o.fillRect(f,d,v,m)};for(let f=0;f<u.length-1;f++){let d=u[f]+40,v=u[f+1]-40,m=3,_=(v-d)/m;for(let T=0;T<m;T++)r.fillStyle="#6b737c",r.fillRect(d+T*_+2,34,_-4,58),h(d+T*_+6,38,_-12,50)}for(let f of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(f+2,34,28,58),h(f+5,38,22,50);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,22,60,c-36),r.fillStyle="#7b828a",r.fillRect(f-1,22,2,c-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(f-30,22,60,c-36),h(f-24,34,20,46),h(f+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${a}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let p=0,g=176,x=256,M=256;r.fillStyle="#d3d7dc",r.fillRect(p,g,x,M),r.fillStyle="#20262e",r.fillRect(p+14,g+44,x-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(p+40,g+44),r.lineTo(p+80,g+44),r.lineTo(p+40,g+140),r.lineTo(p+14,g+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(p+x/2-4,g+44,8,96),r.fillStyle="#111",r.fillRect(p+50,g+12,x-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${a}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,g+26),r.fillStyle="#1f9a50",r.fillRect(p,g+150,x,18),r.fillStyle="#e8892b",r.fillRect(p,g+170,x,7);for(let f of[p+40,p+x-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(f,g+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(f+(f<p+x/2?28:-28),g+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(p,g+M-30,x,30),r.fillStyle="#3a3f46",r.font=`800 16px ${a}`,r.fillText("17",p+x/2,g+220),o.fillStyle="#111",o.fillRect(p,g,x,M),o.fillStyle="#ff9a2a",o.font=`800 18px ${a}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,g+26);for(let f of[p+40,p+x-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(f,g+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let S=f=>{let d=new Qn(f);return d.colorSpace=qt,d.anisotropy=4,d},l=(f,d,v,m)=>({u0:f/1024,u1:(f+v)/1024,v0:1-(d+m)/512,v1:1-d/512});return{map:S(n),em:S(s),side:l(0,0,1024,c),sideR:{...l(0,0,1024,c),flip:!0},front:l(p,g,x,M),plain:l(342,202,28,28)}}function dm(){let i=SM(),e=Kf(new an({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:ai})),t=new cn({uv:!0}),n=[1,1,1],s=pe("#9aa1a9"),r=pe("#3b4047"),o=pe("#2a2d33"),a=19.5,c=.6,u=3,h=1.45,p=.95,g=4,x=4,M=.3,S=pe("#33363b"),l={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},f=(y,b,w,A,P,I,R,L=!1)=>t.box(y,b,w,A,P,I,R,l,L?{noBottom:!0}:null),d=(y,b,w,A,P,I)=>{let L=w-P/2,D=w+P/2;for(let O=0;O<12;O++){let V=O/12*Math.PI*2,N=(O+1)/12*Math.PI*2,z=y+Math.cos(V)*A,H=b+Math.sin(V)*A,Y=y+Math.cos(N)*A,le=b+Math.sin(N)*A;t.quad([z,H,L],[Y,le,L],[Y,le,D],[z,H,D],I,i.plain),t.quad([y,b,D],[z,H,D],[Y,le,D],[Y,le,D],I,i.plain),t.quad([y,b,L],[Y,le,L],[z,H,L],[z,H,L],I,i.plain)}},v=u*a+(u-1)*c;for(let y=0;y<u;y++){let b=-v/2+a/2+y*(a+c),w=b-a/2,A=b+a/2;t.quad([w,p,h],[A,p,h],[A,g,h],[w,g,h],n,i.side),t.quad([A,p,-h],[w,p,-h],[w,g,-h],[A,g,-h],n,i.side);let P=y===u-1,I=y===0;t.quad([A,p,h],[A,p,-h],[A,g,-h],[A,g,h],P?n:pe("#c9ced4"),P?i.front:i.plain),t.quad([w,p,-h],[w,p,h],[w,g,h],[w,g,-h],I?n:pe("#c9ced4"),I?i.front:i.plain);for(let R=0;R<x;R++)for(let L of[1,-1]){let D=R/x*Math.PI/2,O=(R+1)/x*Math.PI/2,V=L*h*Math.cos(D),N=g+M*Math.sin(D),z=L*h*Math.cos(O),H=g+M*Math.sin(O);t.quad([w,N,V],[A,N,V],[A,H,z],[w,H,z],s,i.plain);for(let Y of[w,A]){let le=[[Y,g,0],[Y,N,V],[Y,H,z]];t.quad(le[0],le[1],le[2],le[2],s,i.plain),t.quad(le[0],le[2],le[1],le[1],s,i.plain)}}for(let R of[1,-1])f(w,g-.02,R*h-.04,A,g+.05,R*h+.04,r);for(let R of[b-5.5,b+5.5])f(R-1.3,g+.2,-.8,R+1.3,g+.62,.8,pe("#c4c9cf"),!0);f(w+.3,.82,-h+.1,A-.3,p,h-.1,o);for(let[R,L,D,O]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])f(b+R-L/2,.82-D,-1.15+O*.2,b+R+L/2,.82,1.15+O*.2,O>0?o:r);for(let R of[b-7,b+7]){for(let L of[1,-1]){f(R-1.35,.32,L*.86,R+1.35,.56,L*1.02,r);for(let D of[-1.05,1.05])f(R+D-.17,.3,L*.84,R+D+.17,.58,L*1.06,o)}f(R-.35,.5,-1,R+.35,.8,1,r);for(let L of[-1.05,1.05])for(let D of[1,-1])d(R+L,.43,D*.6,.43,.13,S)}if(y<u-1&&f(A,p+.15,-.95,A+c,g-.1,.95,pe("#3a3e44")),y===0){let R=b-3,L=g+.7;t.box(R-.6,g+.26,-.6,R+.6,g+.42,.6,r),t.rod([R-.5,g+.42,0],[R,L+.9,0],.03,.03,4,r),t.rod([R+.5,g+.42,0],[R,L+.9,0],.03,.03,4,r),t.rod([R,L+.9,-.85],[R,L+.9,.85],.03,.03,4,r)}}let m=new ht(t.build(),e);m.castShadow=!0,m.receiveShadow=!0,m.frustumCulled=!1;let _=new nn;_.add(m),_.visible=!1;let T={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:v},E={};return{group:_,st:T,start(y,b,w=16){Object.assign(T,{active:!0,sx:y,dir:b,speed:w,u:-b*290,ds:b>0?-2:2,cleared:!1}),_.visible=!0},update(y,b,w,A,P){if(!T.active)return;T.u+=T.dir*T.speed*y;let I=T.u-T.dir*T.length/2;if(!T.cleared&&(T.dir>0?I>P+1:I<-P-1)&&(T.cleared=!0),Math.abs(T.u)>330){T.active=!1,_.visible=!1;return}b.at(T.sx,E),_.position.set(E.x+E.fx*T.ds+E.rx*T.u-w.x,E.y+.34,E.z+E.fz*T.ds+E.rz*T.u-w.z),_.rotation.y=E.h+(T.dir>0?Math.PI:0),e.emissiveIntensity=.3+A*1.1}}}var TM='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',br=2048,Sr=4096;function zu(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var vm=zu(256,256);{let i=vm.getContext("2d"),e=i.createImageData(256,256),t=Zt(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var Qf=class{constructor(){this.cA=zu(br,Sr),this.cE=zu(br/2,Sr/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,br/2,Sr/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,br,Sr),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(vm,"repeat")}add(e,t,n,s){if(this.x+t+4>br&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>Sr)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let c of[this.a,this.e])c.save(),c===this.e&&c.scale(.5,.5),c.translate(o.x,o.y),c.beginPath(),c.rect(0,0,t,n),c.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let a=.5;return this.cells[e]={u0:(o.x+a)/br,u1:(o.x+t-a)/br,v0:1-(o.y+n-a)/Sr,v1:1-(o.y+a)/Sr,w:t,h:n},this.cells[e]}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new Qn(n);return s.colorSpace=qt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Tn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function gn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Fn(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([a,c])=>o.addColorStop(a,c)),i.fillStyle=o,i.fillRect(e,t,n,s)}function So(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Fn(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}gn(i,e,t,n,.13)}function ps(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function Z(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function To(i,e,t,n,s,r,o="#d9dde2",a="rgba(40,45,60,0.55)"){Z(i,e-r,t-r,n+2*r,s+2*r,o),Z(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=a,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function ms(i,e,t,n,s,r,o=0){let a=i.createLinearGradient(e,t,e+n*.35,t+s),c=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";a.addColorStop(0,c),a.addColorStop(.55,u),a.addColorStop(1,"#dbe9f6"),i.fillStyle=a,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let h=e+n*r();i.beginPath(),i.moveTo(h,t),i.lineTo(h+n*.18,t),i.lineTo(h-n*.25,t+s),i.lineTo(h-n*.43,t+s),i.fill(),i.restore()}function pm(i,e,t,n,s,r="#efe6d2"){Z(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Fn(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function ku(i,e,t=800){i.font=`${t} ${e}px ${TM}`}function Ct(i,e,t,n,s,r,o,a=800,c=null){ku(i,r,a);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,ku(i,u,a);i.textAlign="center",i.textBaseline="middle",c&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=c,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function Bu(i,e,t,n,s,r,o,a=800,c=null){let u=[...e],h=u.length,p=Math.min(r*1.05,(s-n)/h),g=Math.min(r,p*.95);ku(i,g,a),i.textAlign="center",i.textBaseline="middle",u.forEach((x,M)=>{let S=n+(s-n-p*h)/2+p*(M+.5);c&&(i.lineWidth=Math.max(2,g*.12),i.strokeStyle=c,i.strokeText(x,t,S)),i.fillStyle=o,i.fillText(x,t,S)})}function Tr(i,e,t,n,s,r,o,a=!0){if(Z(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Fn(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),a){i.fillStyle="#6a6a6a";for(let c=e+n*.2*o();c<e+n-4;c+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-c),h=s*(.12+o()*.25);i.fillRect(c,t+s-h,u,h)}}i.restore()}function EM(i,e,t,n,s,r,o){let a=i.getTransform();e.save(),e.drawImage(i.canvas,a.e+t,a.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",Z(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,Z(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Fn(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var mm=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Ou=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],gm=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],wM=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function xm(){let i=new Qf,e=Zt(2024),t=240,n=(l,f,d,v,m,_,T=!1)=>{So(l,i,d,v,"#ece8e0",0);let E=Zt(_*31+(m?7:0)+5);if(_===0){let y=d*.14,b=v*.22,w=d*.72,A=v*.5;To(l,y,b,w,A,5),ms(l,y,b,w/2,A,E),ms(l,y+w/2,b,w/2,A,E);let P=E()<.8?w*(.18+E()*.25):0;P&&pm(l,y+2,b+2,P,A-4,E()<.5?"#efe6d2":"#d9e4ea"),Z(l,y+w/2-2,b,4,A,"#cfd4da"),Z(l,y-8,b+A+5,w+16,6,"#d8d8d4"),ps(l,y-4,b+A+11,8,60),ps(l,y+w-4,b+A+11,8,60),m&&(Tr(f,y,b,w,A,T?"#e6eeff":"#ffcf8f",E),P&&Z(f,y+2,b+2,P,A-4,T?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),Z(f,y+w/2-2,b,4,A,"#000"))}else if(_===1){for(let y of[.12,.56]){let b=d*y,w=v*.28,A=d*.3,P=v*.36;To(l,b,w,A,P,4),ms(l,b,w,A,P,E,1),l.fillStyle="rgba(255,255,255,0.35)",l.fillRect(b,w,A,P*.45),ps(l,b,w+P+6,A,40,.1),m&&E()<.8&&Tr(f,b,w,A,P,E()<.5?"#ffd9a0":"#e8f0ff",E)}l.fillStyle="#c9c9c4",l.beginPath(),l.arc(d*.88,v*.2,9,0,7),l.fill()}else if(_===2){let y=d*.1,b=v*.12,w=d*.8,A=v*.84;To(l,y,b,w,A,4),ms(l,y,b,w/2,A,E),ms(l,y+w/2,b,w/2,A,E);let P=w*(.2+E()*.3);pm(l,y+2,b+2,P,A-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),Z(l,y+w/2-2,b,4,A,"#cfd4da"),m&&(Tr(f,y,b,w,A,T?"#e6eeff":"#ffcb85",E),Z(f,y+2,b+2,P,A-4,T?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),Z(f,y+w/2-2,b,4,A,"#000"))}else if(_===3){So(l,i,d,v,"#dfe3e6",0);let y=v*.25,b=v*.55;ms(l,0,y,d,b,E,1);for(let w=0;w<=d;w+=d/4)Z(l,w-2,y,4,b,"#8d98a6");if(Z(l,0,y-4,d,4,"#8d98a6"),Z(l,0,y+b,d,5,"#7d8796"),m)for(let w=0;w<4;w++)E()<.7&&Tr(f,w*d/4+2,y,d/4-4,b,E()<.6?"#f2f6ff":"#ffe2b0",E)}else if(_===4){l.fillStyle="#6b4a35",l.fillRect(0,0,d,v);for(let P=0;P<v;P+=12)Z(l,0,P,d,2,"rgba(30,18,10,0.35)"),Z(l,0,P+2,d,1,"rgba(255,220,180,0.06)");gn(l,i,d,v,.15);let y=d*.18,b=v*.25,w=d*.64,A=v*.45;Z(l,y-6,b-6,w+12,A+12,"#4a3020"),Z(l,y,b,w,A,"#efe4c8"),l.fillStyle="#5a3a26";for(let P=1;P<6;P++)l.fillRect(y+P*w/6-1.5,b,3,A);for(let P=1;P<3;P++)l.fillRect(y,b+P*A/3-1.5,w,3);if(m){Tr(f,y,b,w,A,"#ffc070",E,!1),f.fillStyle="#000";for(let P=1;P<6;P++)f.fillRect(y+P*w/6-1.5,b,3,A);for(let P=1;P<3;P++)f.fillRect(y,b+P*A/3-1.5,w,3)}}else if(_===5){Z(l,d*.08,0,7,v,"#bdbdb6"),Z(l,d*.08+5,0,2,v,"rgba(0,0,0,0.2)");let y=d*.55,b=v*.3,w=d*.22,A=v*.24;To(l,y,b,w,A,3),Z(l,y,b,w,A,"#d6dfe4"),l.fillStyle="rgba(255,255,255,0.4)",l.fillRect(y,b,w,A/2),ps(l,y,b+A+4,w,50,.12),Z(l,d*.22,v*.55,26,34,"#cfcfca"),Z(l,d*.22+4,v*.55+6,18,12,"#9aa2a8"),m&&Tr(f,y,b,w,A,T?"#eef2ff":"#fff0d8",E,!1)}else if(_===6){let y=d*.4,b=v*.35,w=d*.2,A=v*.28;To(l,y,b,w,A,3),ms(l,y,b,w,A,E,1),ps(l,y,b+A+4,w,70,.14),m&&Tr(f,y,b,w,A,T?"#e8efff":"#ffd9a0",E)}};for(let l=0;l<7;l++)i.add("win"+l,t,t,(f,d,v,m)=>n(f,d,v,m,!1,l)),i.add("win"+l+"L",t,t,(f,d,v,m)=>n(f,d,v,m,!0,l));for(let l of[0,2,5,6])i.add("win"+l+"C",t,t,(f,d,v,m)=>n(f,d,v,m,!0,l,!0));i.add("plain",t,t,(l,f,d,v)=>{So(l,i,d,v,"#ece8e0"),ps(l,d*.3,0,12,v*.6,.06)}),i.add("concrete",t,t,(l,f,d,v)=>{So(l,i,d,v,"#d9d7d0",60);for(let m=0;m<6;m++)ps(l,m*41%d,0,10,v*.5,.07)});let s=288,r=(l,f,d,v,m,_,T)=>{let E=(b,w,A,P,I,R=0)=>{l.fillStyle=I,l.beginPath(),l.ellipse(b,w,A,P,R,0,7),l.fill()},y=b=>b[Math.floor(_()*b.length)];if(T==="bakery"){Z(l,f,d,v,m,"#d9b98a"),Fn(l,f,d,v,m,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let b=d+m*.28;b<d+m*.72;b+=m*.2){Z(l,f,b,v,5,"#8a5a32");for(let w=f+8;w<f+v-8;w+=15+_()*10){let A=7+_()*6,P=4+_()*3;E(w,b-P,A,P,y(["#c98a3e","#b4732e","#d9a256","#a4632a"])),E(w-A*.2,b-P*1.4,A*.5,P*.35,"rgba(255,230,180,0.5)")}}Z(l,f+4,d+m*.8,v-8,m*.2,"#efe7d8"),Z(l,f+4,d+m*.8,v-8,3,"#9a9a96");for(let b=f+14;b<f+v-10;b+=18)E(b,d+m*.9,6,4,y(["#e8b35a","#c06a3a","#f2d29a"]));Z(l,f+v-64,d+10,52,22,"#7a3e1e"),Ct(l,"\u713C\u304D\u305F\u3066",f+v-38,d+21,46,14,"#fff3dc",800)}else if(T==="books"){Z(l,f,d,v,m,"#6f5a46");for(let b=d+6;b<d+m*.72;b+=m*.17){Z(l,f,b+m*.15,v,4,"#4a3828");for(let w=f+3;w<f+v-4;){let A=3+_()*4,P=m*(.1+_()*.045);Z(l,w,b+m*.15-P,A,P,y(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),w+=A+(_()<.1?4:.6)}}Z(l,f+4,d+m*.76,v-8,m*.24,"#8a7560");for(let b=f+8;b<f+v-22;b+=24)Z(l,b,d+m*.79,20,28,y(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),Z(l,b+3,d+m*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(T==="florist"){Z(l,f,d,v,m,"#e8e2d2"),Fn(l,f,d,v,m,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let b=0;b<7;b++){let w=f+8+_()*(v-16),A=m*(.15+_()*.25);for(let P=0;P<A;P+=3.5)E(w+Math.sin(P*.25+b)*4+(_()-.5)*6,d+4+P,3.4,1.8,y(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),_()*3)}for(let b=0;b<3;b++){let w=d+m*(.5+b*.17);Z(l,f,w+14,v,4,"#9a8a76");for(let A=f+10+b*6;A<f+v-8;A+=19){let P=y(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let I=0;I<6;I++){l.strokeStyle="#4a7a3a",l.lineWidth=1.2,l.beginPath();let R=A+(_()-.5)*14;l.moveTo(A,w+10),l.lineTo(R,w-6-_()*8),l.stroke(),E(R,w-8-_()*8,3.2,3,P)}Z(l,A-6,w+4,12,11,y(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(T==="clothes"){Z(l,f,d,v,m,"#efece6"),Fn(l,f,d,v,m,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),Z(l,f+6,d+m*.18,v-60,3,"#7a7a7a");for(let w=f+12;w<f+v-66;w+=13+_()*5){l.fillStyle=y(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let A=d+m*.18+3,P=m*(.3+_()*.2);l.beginPath(),l.moveTo(w-5,A),l.lineTo(w+5,A),l.lineTo(w+8,A+P),l.lineTo(w-8,A+P),l.closePath(),l.fill()}let b=f+v-32;E(b,d+m*.16,7,8,"#d8cfc4"),l.fillStyle=y(["#c84a5a","#4a6a9a","#e8d8b8"]),l.beginPath(),l.moveTo(b-14,d+m*.24),l.lineTo(b+14,d+m*.24),l.lineTo(b+18,d+m*.66),l.lineTo(b-18,d+m*.66),l.closePath(),l.fill(),Z(l,b-2,d+m*.66,4,m*.24,"#8a8a8a"),Z(l,f+8,d+m*.74,v*.55,6,"#8a6a4a");for(let w=f+12;w<f+v*.55;w+=14)Z(l,w,d+m*.74-8,11,8,y(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let b=7;for(let w=d+m*.25;w<d+m;w+=m*.22)for(let A=f+3;A<f+v-6;A+=6+_()*8)e(),b=Math.imul(b,31)+Math.floor(_()*997+_()*61+_()*7)|0;T==="cafe"?h(l,f,d,v,m,Zt(b>>>0)):u(l,f,d,v,m,Zt(b>>>0),T==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],a=(l,f,d,v,m,_,T="bbccutp")=>{let E=f+1+_()*3;for(;E<d-4;){let y=T[Math.floor(_()*T.length)],b=o[Math.floor(_()*o.length)],w=_()<.5?"#f8f6f0":o[Math.floor(_()*o.length)],A={b:8+_()*6,c:6+_()*2,u:9+_()*2,t:5+_()*2,p:12+_()*5}[y],P=Math.min(m,{b:14+_()*12,c:11+_()*3,u:10+_()*3,t:18+_()*9,p:14+_()*8}[y]),I=2+Math.floor(_()*5);for(let R=0;R<I&&E+A<d-1;R++,E+=A+.6){let L=v-P;y==="t"?(Z(l,E,L+P*.3,A,P*.7,b),Z(l,E+A*.3,L+P*.1,A*.4,P*.22,b),Z(l,E+A*.28,L,A*.44,P*.11,w==="#f8f6f0"?"#e8e8e4":"#d83a2a"),Z(l,E,L+P*.5,A,P*.22,w)):y==="c"?(Z(l,E,L,A,P,b),Z(l,E,L,A,1.5,"#d8dce0"),Z(l,E,L+P*.35,A,P*.3,w)):y==="u"?(l.fillStyle=b,l.beginPath(),l.moveTo(E,L+2),l.lineTo(E+A,L+2),l.lineTo(E+A-1.2,v),l.lineTo(E+1.2,v),l.fill(),Z(l,E-.4,L,A+.8,2.2,"#f2efe6"),Z(l,E+1,L+P*.45,A-2,P*.25,w)):y==="p"?(l.fillStyle=b,l.beginPath(),l.moveTo(E,v),l.lineTo(E,L+3),l.quadraticCurveTo(E+A/2,L-1.5,E+A,L+3),l.lineTo(E+A,v),l.fill(),Z(l,E+1.5,L+P*.35,A-3,P*.35,w),Z(l,E,L+2,A,1,"rgba(0,0,0,0.18)")):(Z(l,E,L,A,P,b),Z(l,E+1.5,L+P*.3,A-3,P*.4,w)),Z(l,E,L+1,1,P-1,"rgba(255,255,255,0.28)"),Z(l,E+A-1.3,L+1,1.3,P-1,"rgba(0,0,0,0.22)")}E+=1.5+_()*3}},c=(l,f,d,v,m)=>{Fn(l,f,v+4,d,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),Z(l,f,v,d,4,"#d3d6da"),Z(l,f,v+3.2,d,.8,"rgba(40,40,50,0.45)");for(let _=f+4+m()*10;_<f+d-6;_+=14+m()*16)Z(l,_,v+.6,5,2.6,m()<.25?"#f2d23a":m()<.2?"#e84a3a":"#ffffff")},u=(l,f,d,v,m,_,T)=>{Z(l,f,d,v,m,T?"#f3f1ea":"#ece5d8"),Z(l,f,d,v,m*.13,T?"#f6f6f2":"#efebe2");for(let w of[.035,.085])Z(l,f,d+m*w,v,2.4,"#ffffff"),Fn(l,f,d+m*w+2.4,v,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Fn(l,f,d+m*.13,v,m*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let w=0,A=f+18+_()*30;w<2&&A<f+v-40;w++,A+=90+_()*40)Z(l,A+13,d+m*.13,1,6,"#888"),Z(l,A,d+m*.13+6,28,9,o[Math.floor(_()*9)]),Z(l,A+4,d+m*.13+9.5,20,2,"rgba(255,255,255,0.8)");let y=d+m*.25,b=m*.165;Z(l,f,y-4,v,4,"#c9ccd0");for(let w=0;w<4;w++){let A=y+b*(w+1);Fn(l,f,A-b,v,b,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),a(l,f,f+v,A,b-6,_),c(l,f,v,A,_)}Z(l,f,y+b*4+4,v,d+m-y-b*4-4,"#5c6068"),Z(l,f,y+b*4+4,v,1.5,"#8a8e96");for(let w=f+2+_()*20;w<f+v;w+=70+_()*12)Z(l,w,y-4,3,b*4+8,"#b4b8be"),Z(l,w+2.2,y-4,.8,b*4+8,"rgba(0,0,0,0.3)");if(T){let w=d+m*.7;Z(l,f,w+26,v,d+m-w-26,"#7a7e86"),Z(l,f,w+26,v,2,"#a8acb2");for(let A=f+2;A<f+v-14;A+=15.5){let P=o[Math.floor(_()*o.length)],I=_()*2;Z(l,A,w+I,14,26-I,P),Z(l,A,w+I,14,5,_()<.6?"#ffffff":"#e8343a"),Z(l,A+2,w+I+8,10,10,_()<.5?"#f2c8a8":o[Math.floor(_()*o.length)]),Z(l,A+13,w+I,1,26-I,"rgba(0,0,0,0.25)")}}},h=(l,f,d,v,m,_)=>{Z(l,f,d,v,m,"#b88a5e"),Fn(l,f,d,v,m,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let E=f;E<f+v;E+=9)Z(l,E,d+m*.55,1,m*.45,"rgba(60,35,20,0.25)");let T=d+m*.3;for(let E=0;E<2;E++){let y=T+E*22;Z(l,f+8,y,v*.55,3,"#6a4428"),a(l,f+10,f+v*.55+6,y,14,_,"ctu")}Z(l,f+v*.64,d+m*.22,v*.28,m*.26,"#2e3a32"),Z(l,f+v*.64,d+m*.22,v*.28,2,"#6a4428");for(let E=0;E<5;E++)Z(l,f+v*.67,d+m*(.27+E*.04),v*(.12+_()*.1),1.6,"rgba(240,240,230,0.75)");Z(l,f+4,d+m*.56,v-8,6,"#5a3820"),Z(l,f+4,d+m*.56+6,v-8,m*.08,"#7a5232"),Z(l,f+v*.3,d+m*.47,18,m*.09,"#c8ccd0"),Z(l,f+v*.3+3,d+m*.47+3,12,5,"#3a3a40");for(let E=f+30+_()*20;E<f+v-20;E+=70+_()*20)Z(l,E,d,1,m*.14,"#3a2a1e"),l.fillStyle="#2f3a36",l.beginPath(),l.moveTo(E-9,d+m*.2),l.quadraticCurveTo(E+.5,d+m*.12,E+10,d+m*.2),l.fill(),l.fillStyle="rgba(255,214,150,0.9)",l.beginPath(),l.ellipse(E+.5,d+m*.2,7,2,0,0,7),l.fill();for(let E=f+26+_()*16;E<f+v-26;E+=78+_()*20){Z(l,E-16,d+m*.74,32,4,"#4a2e1c"),Z(l,E-1.5,d+m*.74+4,3,m*.2,"#2e2420"),Z(l,E-8,d+m*.94,16,2,"#2e2420");for(let y of[-24,24])Z(l,E+y-6,d+m*.8,12,3,"#3a2618"),Z(l,E+y+(y<0?-6:4),d+m*.66,2,m*.17,"#3a2618"),Z(l,E+y-5,d+m*.83,1.6,m*.13,"#3a2618"),Z(l,E+y+3.4,d+m*.83,1.6,m*.13,"#3a2618");l.fillStyle="#f4f0e8",l.beginPath(),l.ellipse(E-6,d+m*.74-1.5,3,1.5,0,0,7),l.fill()}},p=(l,f,d,v,m,_,T="")=>{let E=Zt(_);if(So(l,i,d,v,"#e6e2da"),m==="glass"||m==="door"||m==="konbini"||m==="cafe"){let b=v*.22,w=d-12,A=v*.78-4;Z(l,6,b,w,A,m==="konbini"?"#f6f4ea":m==="cafe"?"#7a5a40":"#8a7a68"),r(l,6,b,w,A,E,T||m),m==="konbini"&&Z(l,6,b+4,w,5,"#ffffff"),m==="door"&&(Z(l,d/2-30,b+18,60,24,"#fff"),Ct(l,"\u55B6\u696D\u4E2D",d/2,b+30,54,18,"#c82828")),m==="glass"&&!T&&E()<.7&&(Z(l,16,b+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),Ct(l,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,b+44,40,16,"#c02020")),EM(l,f,6,b,w,A,m==="konbini"?"#e4eef8":m==="cafe"?"#f0a868":"#f2d2a6"),l.save(),l.globalAlpha=.35,ms(l,6,b,w,A,E),l.restore(),Z(l,6,b,w,4,"#4a4e57"),Z(f,6,b,w,4,"#000"),m==="door"&&(Z(l,d/2-2,b,4,A,"#4a4e57"),Z(f,d/2-2,b,4,A,"#000"),Z(l,d/2-14,b+A*.45,3,40,"#c0c4c8"),Z(l,d/2+11,b+A*.45,3,40,"#c0c4c8")),m==="cafe"&&(Z(l,d*.62,v-70,46,62,"#2c3a30"),Z(f,d*.62,v-70,46,62,"#000"),Ct(l,"\u30E9\u30F3\u30C1",d*.62+23,v-50,40,13,"#fff",700))}else if(m==="shutter"){let b=v*.2,w=d-12,A=v*.8;Z(l,6,b,w,A,"#b8bcc0");for(let P=b;P<b+A;P+=7)Z(l,6,P,w,2,"rgba(60,64,72,0.35)"),Z(l,6,P+2,w,1,"rgba(255,255,255,0.35)");Z(l,6,b,w,10,"#8f949a"),gn(l,i,d,v,.12),E()<.5&&(Z(l,d/2-40,b+A*.35,80,26,"#fff"),Ct(l,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),d/2,b+A*.35+13,74,16,"#333",700))}else if(m==="noren"){Z(l,0,0,d,v,"#5b3c28");for(let I=0;I<d;I+=10)Z(l,I,v*.2,3,v*.8,"rgba(25,15,8,0.6)");gn(l,i,d,v,.15);let y=d*.12,b=v*.24,w=d*.76,A=v*.34,P=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);Z(l,y,b,w,A,P);for(let I=1;I<3;I++)Z(l,y+w*I/3-1,b+A*.25,2,A*.75,"rgba(255,255,255,0.25)");Ct(l,e.pick(wM),d/2,b+A*.55,w*.9,46,"#f5f0e6",800),Z(l,y,b,w,6,"#3a2a1c"),f.fillStyle="#ffae5c",f.fillRect(y,b+A,w,v-b-A),f.fillStyle="rgba(255,170,90,0.6)",f.fillRect(y,b,w,A),l.fillStyle="#d8352a",l.beginPath(),l.ellipse(d*.9,v*.36,13,19,0,0,7),l.fill(),Ct(l,"\u9152",d*.9,v*.36,16,14,"#fff"),f.fillStyle="#ff6a3a",f.beginPath(),f.ellipse(d*.9,v*.36,13,19,0,0,7),f.fill()}else if(m==="house"){let y=d*.18,b=v*.3,w=d*.34,A=v*.7;Z(l,y-6,b-6,w+12,A+6,"#9a9a96"),Z(l,y,b,w,A,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),Z(l,y+w-14,b+A*.5,4,22,"#d8d0c0"),Z(l,y+6,b+10,w-12,A*.25,"rgba(255,255,255,0.18)"),Z(l,d*.62,v*.48,30,22,"#cfcfca"),Z(l,d*.62+6,v*.48+5,18,4,"#555");let P=d*.6,I=v*.22,R=d*.3,L=v*.2;To(l,P,I,R,L,3),ms(l,P,I,R,L,E,1);for(let D=0;D<3;D++)l.fillStyle="#7b5a43",l.fillRect(d*.6+D*22,v-26,16,18),l.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),l.beginPath(),l.arc(d*.6+D*22+8,v-32,11,0,7),l.fill();f.fillStyle="#ffd08a",f.beginPath(),f.arc(y+w+14,b+8,6,0,7),f.fill(),E()<.6&&(f.fillStyle="#ffcf8f",f.fillRect(P,I,R,L))}else if(m==="garage"){let b=v*.25,w=d-16,A=v*.75;Z(l,8,b,w,A,"#efefec");for(let P=b;P<b+A;P+=9)Z(l,8,P,w,1.5,"rgba(80,80,90,0.25)");gn(l,i,d,v,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((l,f)=>{i.add("shop_"+l,t,s,(d,v,m,_)=>p(d,v,m,_,l,100+f)),(l==="glass"||l==="noren"||l==="house")&&i.add("shop_"+l+"2",t,s,(d,v,m,_)=>p(d,v,m,_,l,200+f)),l==="glass"&&["bakery","books","florist","clothes"].forEach((d,v)=>i.add("shop_glass"+(v+3),t,s,(m,_,T,E)=>p(m,_,T,E,"glass",300+v,d)))});for(let l=0;l<14;l++)i.add("hs"+l,512,76,(f,d,v,m)=>{let[_,T]=Ou[l%Ou.length],E=mm[l*7%mm.length];Z(f,0,0,v,m,_),Z(f,0,0,v,5,"rgba(255,255,255,0.35)"),Z(f,0,m-6,v,6,"rgba(0,0,0,0.18)"),l%3===0&&(Z(f,12,12,m-24,m-24,T),Ct(f,E[0],12+(m-24)/2,m/2,m-30,34,_)),Ct(f,E,v/2+(l%3===0?24:0),m/2+2,v*.7,50,T,900),gn(f,i,v,m,.08),d.fillStyle=_==="#fff"||_==="#f5efe0"?"#d9d6cc":_,d.fillRect(0,0,v,m),d.globalAlpha=.9,Ct(d,E,v/2+(l%3===0?24:0),m/2+2,v*.7,50,T==="#fff"?"#ffffff":T,900),d.globalAlpha=1});for(let[l,f,d]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+l,512,76,(v,m,_,T)=>{Z(v,0,0,_,T,f),Z(v,0,0,_,5,"rgba(255,255,255,0.35)"),Z(v,0,T-6,_,6,"rgba(0,0,0,0.18)"),Ct(v,l,_/2,T/2+2,_*.7,50,d,900),gn(v,i,_,T,.08),m.fillStyle=f,m.fillRect(0,0,_,T),m.globalAlpha=.9,Ct(m,l,_/2,T/2+2,_*.7,50,d,900),m.globalAlpha=1});let g=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],x=(l,f,d,v,m,_)=>{l.beginPath(),l.moveTo(f+_,d),l.arcTo(f+v,d,f+v,d+m,_),l.arcTo(f+v,d+m,f,d+m,_),l.arcTo(f,d+m,f,d,_),l.arcTo(f,d,f+v,d,_),l.closePath()};for(let l=0;l<10;l++)i.add("vs"+l,72,288,(f,d,v,m)=>{let _=gm[l%gm.length],T=g[(l*5+2)%g.length],E=l%10===3||l%10===6||l%10===8,[y,b]=Ou[(l*3+1)%Ou.length],w=E?y==="#fff"||y==="#f5efe0"?"#2b2b33":y:"#fbf7ef",A=E?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][l%4];Z(f,0,0,v,m,"#2a2b30"),x(f,3,3,v-6,m-6,8),f.fillStyle=w,f.fill(),Fn(f,3,3,v-6,m-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),f.save(),x(f,8,8,v-16,m-16,6),f.strokeStyle=T,f.globalAlpha=.55,f.lineWidth=7,f.stroke(),f.globalAlpha=1,f.strokeStyle="#fff6fb",f.lineWidth=2.2,f.stroke(),f.restore(),Bu(f,_,v/2,18,m-18,50,A,900),gn(f,i,v,m,.06),Z(d,0,0,v,m,"#000"),x(d,3,3,v-6,m-6,8),d.fillStyle=E?"#3a3a3e":"#4a4844",d.fill(),d.save(),x(d,8,8,v-16,m-16,6),d.strokeStyle=T,d.lineWidth=7,d.stroke(),d.strokeStyle="#ffffff",d.lineWidth=2.5,d.stroke(),d.restore(),Bu(d,_,v/2,18,m-18,50,E?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([l,f,d],v)=>i.add("bb"+v,512,240,(m,_,T,E)=>{Z(m,0,0,T,E,"#fbfaf5"),Z(m,0,0,T,E*.62,d),Ct(m,l,T/2,E*.32,T*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Ct(m,f,T/2,E*.8,T*.85,52,"#333",800),gn(m,i,T,E,.08),Z(_,0,0,T,E,"#555"),_.globalAlpha=.85,Z(_,0,0,T,E*.62,d),Ct(_,l,T/2,E*.32,T*.9,96,"#fff",900),_.globalAlpha=1})),i.add("konbini_band",480,72,(l,f,d,v)=>{Z(l,0,0,d,v,"#fbfbf7"),Z(l,0,v*.62,d,v*.14,"#2a9a4a"),Z(l,0,v*.76,d,v*.12,"#f08a24"),Z(l,0,v*.88,d,v*.12,"#2f6fd8"),Ct(l,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,v*.32,d*.8,40,"#1d3d8a",900),f.fillStyle="#f3f6f0",f.fillRect(0,0,d,v),Ct(f,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,v*.32,d*.8,40,"#1d3d8a",900)});for(let l=0;l<3;l++)i.add("vend"+l,128,234,(f,d,v,m)=>{let _=["#d8352a","#2f6fd8","#f4f4f0"][l];Z(f,0,0,v,m,_),Z(f,8,10,v-16,m*.55,"#eef4f8");let T=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let E=0;E<4;E++)for(let y=0;y<6;y++){let b=14+y*17,w=18+E*30;f.fillStyle=T[(E*6+y+l)%T.length],f.fillRect(b,w,11,20),f.fillStyle="rgba(255,255,255,0.5)",f.fillRect(b+2,w+2,3,14),f.fillStyle="#2a2a2a",f.fillRect(b,w+23,11,3)}Z(f,10,m*.62,v-20,22,"#222"),Z(f,v-34,m*.66,14,22,"#bbb"),Z(f,14,m*.82,v-28,22,"#1b1b1b"),Ct(f,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][l],v/2,m*.62+11,v-28,14,"#fff",700),gn(f,i,v,m,.08),d.fillStyle="#f2f8ff",d.fillRect(8,10,v-16,m*.55);for(let E=0;E<4;E++)for(let y=0;y<6;y++)d.fillStyle=T[(E*6+y+l)%T.length],d.fillRect(14+y*17,18+E*30,11,20);d.fillStyle="#9fd0ff",d.fillRect(10,m*.62,v-20,22)});i.add("ac",128,88,(l,f,d,v)=>{Z(l,0,0,d,v,"#e9e9e4"),Fn(l,0,0,d,v,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),l.fillStyle="#9a9c9e",l.beginPath(),l.arc(d*.4,v*.5,v*.36,0,7),l.fill(),l.strokeStyle="#d6d6d2",l.lineWidth=2;for(let m=6;m<v*.36;m+=6)l.beginPath(),l.arc(d*.4,v*.5,m,0,7),l.stroke();for(let m=12;m<v-10;m+=6)Z(l,d*.78,m,d*.16,2,"#b8b8b2")}),i.add("plate",128,64,(l,f,d,v)=>{Z(l,0,0,d,v,"#f2cf3a"),l.strokeStyle="#2f5a2f",l.lineWidth=3,l.strokeRect(3,3,d-6,v-6),Ct(l,"\u54C1\u5DDD 580",d/2,16,d*.6,14,"#2f5a2f",700),Ct(l,"\u3042 12-34",d/2,42,d*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(l,f,d,v)=>{l.fillStyle="#fff",l.beginPath(),l.moveTo(2,2),l.lineTo(d-2,2),l.lineTo(d/2,v-2),l.fill(),l.fillStyle="#d8231c",l.beginPath(),l.moveTo(10,7),l.lineTo(d-10,7),l.lineTo(d/2,v-12),l.fill(),Ct(l,"\u6B62\u307E\u308C",d/2,34,d*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(l,f,d,v)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,v/2,d/2-1,0,7),l.fill(),l.fillStyle="#1e5bb8",l.beginPath(),l.arc(d/2,v/2,d/2-6,0,7),l.fill(),l.fillStyle="#fff",l.beginPath(),l.moveTo(d/2,22),l.lineTo(d/2+22,50),l.lineTo(d/2+8,50),l.lineTo(d/2+8,88),l.lineTo(d/2-8,88),l.lineTo(d/2-8,50),l.lineTo(d/2-22,50),l.fill()}),i.add("sign_speed",112,112,(l,f,d,v)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,v/2,d/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=12,l.beginPath(),l.arc(d/2,v/2,d/2-9,0,7),l.stroke(),Ct(l,"30",d/2,v/2+2,d*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(l,f,d,v)=>{Z(l,0,0,d,v,"#1d4f9a"),l.strokeStyle="#fff",l.lineWidth=2,l.strokeRect(3,3,d-6,v-6),Bu(l,"\u672C\u753A\u4E8C\u4E01\u76EE",d/2,10,v-10,24,"#fff",700)});for(let l=0;l<4;l++)i.add("poster"+l,64,90,(f,d,v,m)=>{let _=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][l];Z(f,0,0,v,m,_),Z(f,4,4,v-8,m*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][l]),Ct(f,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][l],v/2,m*.25,v-12,18,"#fff",900);for(let T=0;T<4;T++)Z(f,8,m*.58+T*8,v-16-T%2*14,3,"rgba(60,60,60,0.5)")});for(let l=0;l<3;l++)i.add("bal"+l,t,88,(f,d,v,m)=>{let _=["#e9e3d6","#dfe6ea","#efe2dc"][l];if(So(f,i,v,m,_),l===1)for(let T=10;T<v-6;T+=v/6)Z(f,T,10,v/6-8,m-20,"rgba(220,235,245,0.9)"),f.fillStyle="rgba(255,255,255,0.45)",f.fillRect(T,10,v/6-8,(m-20)*.4);else{Z(f,0,0,v,7,"rgba(255,255,255,0.4)");for(let T=v/3;T<v;T+=v/3)Z(f,T-1,0,2,m,"rgba(0,0,0,0.08)")}Z(f,0,m-6,v,6,"rgba(0,0,0,0.12)"),ps(f,v*.3,m-6,10,10,.2)});i.add("kawara",272,256,(l,f,d,v)=>{Z(l,0,0,d,v,"#58617a");for(let m=0;m<v;m+=16)Fn(l,0,m,d,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let m=-4;m<d;m+=20)Z(l,m,0,2,v,"rgba(0,0,0,0.18)");gn(l,i,d,v,.12)}),i.add("wood",256,256,(l,f,d,v)=>{Z(l,0,0,d,v,"#6d4c37");for(let m=0;m<v;m+=14)Z(l,0,m,d,2,"rgba(25,15,8,0.4)"),Z(l,0,m+2,d,1,"rgba(255,220,180,0.07)");gn(l,i,d,v,.16)}),i.add("block",256,128,(l,f,d,v)=>{Z(l,0,0,d,v,"#c9c7bf");for(let m=0;m<v;m+=32)for(let _=m/32%2?-32:0;_<d;_+=64)l.strokeStyle="rgba(80,80,80,0.35)",l.lineWidth=2,l.strokeRect(_+1,m+1,62,30);for(let m=0;m<d;m+=64)l.fillStyle="rgba(70,70,70,0.25)",l.fillRect(m+20,40,24,16);gn(l,i,d,v,.15),ps(l,0,0,d,40,.1)}),i.add("lantern",64,96,(l,f,d,v)=>{l.fillStyle="#d8352a",l.beginPath(),l.ellipse(d/2,v/2,d/2-2,v/2-8,0,0,7),l.fill();for(let m=16;m<v-12;m+=7)Z(l,4,m,d-8,1.5,"rgba(0,0,0,0.2)");Z(l,d/2-14,2,28,8,"#222"),Z(l,d/2-14,v-10,28,8,"#222"),Ct(l,"\u796D",d/2,v/2,d*.6,28,"#fff",900),f.fillStyle="#ff6a35",f.beginPath(),f.ellipse(d/2,v/2,d/2-2,v/2-8,0,0,7),f.fill()}),i.add("busstop",96,96,(l,f,d,v)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,v/2,d/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=8,l.beginPath(),l.arc(d/2,v/2,d/2-6,0,7),l.stroke(),Ct(l,"\u30D0\u30B9\u505C",d/2,v/2,d*.66,20,"#1d3d8a",900)}),i.add("white",16,16,l=>Z(l,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(l,f,d,v)=>{l.save(),l.translate(d/2,v/2),l.rotate(Math.PI/4),l.fillStyle="#1b1b1b",l.fillRect(-41,-41,82,82),l.fillStyle="#f2c230",l.fillRect(-37,-37,74,74),l.restore(),l.fillStyle="#1b1b1b",l.fillRect(d/2-22,v/2-6,44,18),l.fillRect(d/2-16,v/2-16,18,12),l.fillRect(d/2+8,v/2-13,5,7),l.beginPath(),l.arc(d/2-12,v/2+15,5,0,7),l.arc(d/2+12,v/2+15,5,0,7),l.fill(),Ct(l,"\u8E0F\u5207",d/2,v/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((l,f)=>i.add("bridge"+f,64,176,(d,v,m,_)=>{Z(d,0,0,m,_,"#b9b5ab"),gn(d,i,m,_,.2),Z(d,6,6,m-12,_-12,"#a7a398"),Bu(d,l,m/2,14,_-14,34,"#3f3c37",800)})),i.add("signal",240,84,(l,f,d,v)=>{Z(l,0,0,d,v,"#4a4d52"),Z(l,0,0,d,5,"#5c6066"),gn(l,i,d,v,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([m,_])=>{l.fillStyle="#26282c",l.beginPath(),l.arc(_,v/2,33,0,7),l.fill(),l.fillStyle=m,l.beginPath(),l.arc(_,v/2,27,0,7),l.fill()})}),i.add("ped_sig",64,128,(l,f,d,v)=>{Z(l,0,0,d,v,"#3d4045"),l.fillStyle="#5a1814",l.fillRect(8,8,d-16,v/2-12),l.fillStyle="#0d4f44",l.fillRect(8,v/2+4,d-16,v/2-12),l.fillStyle="rgba(255,255,255,0.18)",l.beginPath(),l.arc(d/2,v*.18,6,0,7),l.fill(),l.fillRect(d/2-5,v*.24,10,18)}),i.add("tomare",256,96,(l,f,d,v)=>{l.clearRect(0,0,d,v),l.fillStyle="rgba(244,244,238,0.012)",l.fillRect(0,0,d,v),Ct(l,"\u6B62\u307E\u308C",d/2,v/2+4,d*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((l,f)=>i.add("hodokyo"+f,256,44,(d,v,m,_)=>{Z(d,0,0,m,_,"#1f4f96"),d.strokeStyle="#fff",d.lineWidth=3,d.strokeRect(4,4,m-8,_-8),Ct(d,l,m/2,_/2+1,m*.85,28,"#fff",800)}));let S=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];S.forEach(([l,f,d],v)=>{let m=S[(v+3)%4][0],_=S[(v+1)%4][0];i.add("ekimei"+v,320,124,(T,E,y,b)=>{Z(T,0,0,y,b,"#3a3d42"),Z(T,4,4,y-8,b-8,"#f8f8f3"),Ct(T,f,y/2,20,y*.5,15,"#2b2b2b",700),Ct(T,l,y/2,52,y*.6,40,"#151515",900),Ct(T,d,y/2,80,y*.5,12,"#555",600),Z(T,4,b-30,y-8,26,"#1f9a50"),T.fillStyle="#fff",ku(T,12,700),T.textBaseline="middle",T.textAlign="left",T.fillText("\u2190 "+m,12,b-17),T.textAlign="right",T.fillText(_+" \u2192",y-12,b-17),gn(T,i,y,b,.06),Z(E,4,4,y-8,b-8,"#8a8a84")}),i.add("ekiplate"+v,220,48,(T,E,y,b)=>{Z(T,0,0,y,b,"#4b3326"),gn(T,i,y,b,.2),Ct(T,l+"\u99C5",y/2,b/2+1,y*.8,30,"#f3ead8",800)})});for(let l of["l","r"])i.add("chev_"+l,96,120,(f,d,v,m)=>{Z(f,0,0,v,m,"#f4f4ef"),Z(f,4,4,v-8,m-8,"#1e5bb8"),f.fillStyle="#f8f8f4",f.beginPath();let _=l==="r"?1:-1,T=v/2,E=m/2;f.moveTo(T-_*26,E-40),f.lineTo(T+_*22,E),f.lineTo(T-_*26,E+40),f.lineTo(T-_*8,E+40),f.lineTo(T+_*40,E),f.lineTo(T-_*8,E-40),f.closePath(),f.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((l,f)=>i.add("tunnel"+f,360,80,(d,v,m,_)=>{Z(d,0,0,m,_,"#e9e7e0"),Z(d,4,4,m-8,_-8,"#24403b"),gn(d,i,m,_,.08),Ct(d,l,m/2,_*.42,m*.8,38,"#f4f2ea",800),Ct(d,"L = 170 m",m/2,_*.8,m*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(l,f,d,v)=>{Z(l,0,0,d,v,"#f6f6f2"),l.fillStyle="#d42a22";for(let m=-20;m<v;m+=26)l.beginPath(),l.moveTo(4,m),l.lineTo(d/2,m+20),l.lineTo(d-4,m),l.lineTo(d-4,m+11),l.lineTo(d/2,m+31),l.lineTo(4,m+11),l.closePath(),l.fill();l.strokeStyle="#222",l.lineWidth=3,l.strokeRect(1.5,1.5,d-3,v-3)}),i.add("xing_plate",128,48,(l,f,d,v)=>{Z(l,0,0,d,v,"#f6f6f2"),l.strokeStyle="#d8231c",l.lineWidth=4,l.strokeRect(3,3,d-6,v-6),Ct(l,"\u8E0F\u5207\u6CE8\u610F",d/2,v/2,d*.8,26,"#d8231c",900)}),i.add("rail",240,80,(l,f,d,v)=>{l.clearRect(0,0,d,v),Z(l,0,0,d,7,"#e9ebee"),Z(l,0,6,d,2,"rgba(60,70,80,0.5)"),Z(l,0,v-6,d,6,"#d5d8dc");for(let m=3;m<d;m+=9)Z(l,m,7,3,v-13,"#e2e5e9"),Z(l,m+2,7,1,v-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(l,f,d,v)=>{let m=Zt(4242);Z(l,0,0,d,v,"#3d3f3c");let _=38,T=_/Math.SQRT2;l.save(),l.beginPath(),l.rect(0,22,d,v-22),l.clip();for(let E=-2;E*T<v+_;E++)for(let y=-2;y*_<d+_;y++){let b=y*_+(E%2?_/2:0),w=22+E*T,A=.52+m()*.17,P=Math.min(1,Math.max(0,(w-v*.55)/(v*.4))),I=Math.round(255*A*(1-.38*P)),R=`rgb(${I-4},${I-2},${I-9})`;l.fillStyle=R,l.beginPath(),l.moveTo(b,w-T+3.5),l.lineTo(b+T-3.5,w),l.lineTo(b,w+T-3.5),l.lineTo(b-T+3.5,w),l.closePath(),l.fill(),l.fillStyle="rgba(255,255,255,0.12)",l.beginPath(),l.moveTo(b,w-T+3.5),l.lineTo(b+T-3.5,w),l.lineTo(b,w),l.closePath(),l.fill(),P>.3&&m()<.5&&(l.fillStyle=`rgba(70,96,52,${.25+.3*m()})`,l.beginPath(),l.arc(b+(m()-.5)*10,w+6,4+m()*6,0,7),l.fill())}l.restore(),Fn(l,0,v*.55,d,v*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),Z(l,0,0,d,22,"#8c8d87"),Z(l,0,18,d,4,"rgba(0,0,0,0.3)"),Z(l,0,0,d,3,"rgba(255,255,255,0.2)"),gn(l,i,d,v,.12)}),i.add("wrail",240,80,(l,f,d,v)=>{l.clearRect(0,0,d,v),Z(l,0,0,d,9,"#6a4a34"),Z(l,0,0,d,2,"rgba(255,225,190,0.25)"),Z(l,0,8,d,2,"rgba(20,10,5,0.45)"),Z(l,0,v-10,d,10,"#5e412e"),Z(l,0,v-10,d,2,"rgba(255,225,190,0.18)");for(let m=4;m<d;m+=12)Z(l,m,9,5,v-19,"#634632"),Z(l,m,9,1.2,v-19,"rgba(255,225,190,0.18)"),Z(l,m+4,9,1,v-19,"rgba(20,10,5,0.4)");gn(l,i,d,v,.15)}),i.add("woodwall",t,t,(l,f,d,v)=>{let m=Zt(5151);Z(l,0,0,d,v,"#5e4130");for(let _=0;_<v;_+=16){let T=m();Z(l,0,_,d,16,T<.15?"#6b4b37":T<.3?"#553a2b":"#5e4130"),Z(l,0,_,d,2,"rgba(255,220,180,0.12)"),Z(l,0,_+14,d,2,"rgba(15,8,4,0.45)");for(let E=m()*80;E<d;E+=60+m()*90)Z(l,E,_+2,1.5,12,"rgba(15,8,4,0.35)")}Fn(l,0,0,d,v,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),gn(l,i,d,v,.2)}),i}function _m(i){let n=zu(1024,3072),s=n.getContext("2d"),r=Zt(321),o={},a=512,c={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},u=(l,f,d)=>{let v=c[l],m=256,_=l==="pine",T=l==="sakura";s.save(),s.translate(f,d),s.beginPath(),s.rect(0,0,512,512),s.clip();let E=[[m,m,_?80:92]];for(let b=0;b<(_?10:14);b++){let w=r()*6.28,A=45+r()*120;E.push([m+Math.cos(w)*A,m+Math.sin(w)*A*(_?.42:.9),Math.min(34+r()*52,232-A)])}let y=T?2300:_?2600:2300;for(let b=0;b<y;b++){let w=E[Math.floor(r()*E.length)],A=r()*6.28,P=Math.sqrt(r())*w[2],I=w[0]+Math.cos(A)*P,R=w[1]+Math.sin(A)*P*(_?.45:1),L=P/w[2],D=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(L>.82?.5:0))));if(s.fillStyle=v[D],T){let O=7+r()*8;s.beginPath(),s.arc(I,R,O,0,7),s.fill(),r()<.25&&(s.fillStyle=v[4],s.beginPath(),s.arc(I-O*.3,R-O*.3,O*.4,0,7),s.fill())}else if(_)s.save(),s.translate(I,R),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(l==="momiji"){let O=8+r()*7;s.save(),s.translate(I,R),s.rotate(r()*6.28),s.beginPath();for(let V=0;V<10;V++){let N=V%2?O*.42:O,z=V/10*6.2832;s.lineTo(Math.cos(z)*N,Math.sin(z)*N)}s.closePath(),s.fill(),s.restore()}else if(l==="ginkgo"){let O=9+r()*7;s.save(),s.translate(I,R),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,O,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let O=9+r()*10;s.beginPath(),s.ellipse(I,R,O,O*.55,r()*6.28,0,7),s.fill()}}for(let b=0;b<90;b++){let w=r()*6.28,A=150+r()*85,P=m+Math.cos(w)*A,I=m+Math.sin(w)*A*(_?.45:.92);s.fillStyle=v[1+Math.floor(r()*4)],_?(s.save(),s.translate(P,I),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(P,I,T?6+r()*6:7+r()*6,0,7),s.fill())}if(T)for(let b=0;b<14;b++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let w=m+(r()-.5)*300,A=m+60+r()*120;s.beginPath(),s.moveTo(w,A),s.lineTo(w+(r()-.5)*40,A-20-r()*30),s.stroke()}s.restore(),o[l]={u0:f/1024,u1:(f+512)/1024,v0:1-(d+512)/3072,v1:1-d/3072}},h=(l,f,d,v)=>{s.save(),s.translate(f,d),s.beginPath(),s.rect(0,0,512,512),s.clip();let m=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],_=v?120:170;for(let T=0;T<_;T++){let E=256+(r()-.5)*(v?330:380)*Math.sqrt(r()),y=150+r()*(v?230:300)*(1-Math.abs(E-256)/300),b=(E-256)*.35+(r()-.5)*90,w=9+r()*9,A=E+b,P=512-y,I=Math.min(4,Math.floor(r()*2.2+y/380*2.6)),R=s.createLinearGradient(0,512,0,P);R.addColorStop(0,m[0]),R.addColorStop(.6,m[Math.max(1,I-1)]),R.addColorStop(1,m[I]),s.fillStyle=R,s.beginPath(),s.moveTo(E-w/2,512),s.quadraticCurveTo(E-w/2+b*.3,512-y*.55,A,P),s.quadraticCurveTo(E+w/2+b*.3,512-y*.5,E+w/2,512),s.fill()}if(v)for(let T=0;T<16;T++){let E=110+r()*290,y=150+r()*200,b=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(E+(r()-.5)*20,512),s.quadraticCurveTo(E+(r()-.5)*30,(y+512)/2,E,y),s.stroke(),b<.55){s.fillStyle="#fbfaf2";for(let w=0;w<12;w++){let A=w/12*6.283;s.beginPath(),s.ellipse(E+Math.cos(A)*11,y+Math.sin(A)*11,9,4.5,A,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(E,y,8,0,7),s.fill()}else if(b<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(E,y,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(E-3,y-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let w=0;w<6;w++)s.beginPath(),s.arc(E+(r()-.5)*16,y+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),o[l]={u0:f/1024,u1:(f+512)/1024,v0:1-(d+512)/3072,v1:1-d/3072}},p=(l,f,d)=>{let v=Zt(97);s.save(),s.translate(f,d),s.beginPath(),s.rect(0,0,512,512),s.clip(),s.lineCap="round";let m=(_,T,E,y,b,w)=>{let A=_+Math.cos(E)*y,P=T+Math.sin(E)*y;if(s.strokeStyle=w>3?"#76605f":w>1?"#6c5458":"#62494f",s.lineWidth=b,s.beginPath(),s.moveTo(_,T),s.lineTo(A,P),s.stroke(),w<=0||b<.7)return;let I=2+(v()<.4?1:0);for(let R=0;R<I;R++){let L=E+(v()-.5)*1.1+(R-(I-1)/2)*.42;L=L*.8+-Math.PI/2*.2,m(A,P,L,y*(.62+v()*.2),b*.68,w-1)}};for(let _=0;_<6;_++)m(256+(v()-.5)*40,500,-Math.PI/2+(v()-.5)*.9,110+v()*50,5.6,6);s.restore(),o[l]={u0:f/1024,u1:(f+512)/1024,v0:1-(d+512)/3072,v1:1-d/3072}},g=(l,f,d,v,m)=>{let _=Zt(v),T=1024,E=504;s.save(),s.translate(f,d+8),s.beginPath(),s.rect(0,0,512,E),s.clip(),s.scale(.5,1);let y=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],b=L=>{let D=L/T;return(.5+.5*Math.min(1,D/.45)**.8)*(1-.4*Math.max(0,(D-.9)/.1))},w=(L,D,O,V)=>{D=Math.min(D,E*.985);let N=L+O,z=E-D,H=L+O*.25,Y=E-D*.62-Math.abs(O)*.35;s.moveTo(L-V/2,E),s.quadraticCurveTo(H-V*.42,Y,N,z),s.quadraticCurveTo(H+V*.42,Y+V*.5,L+V/2,E),s.closePath()},A=[];for(let L=24+_()*24;L<T-20;L+=(L<T*.25?56:44)+_()*26)A.push(L);let P=()=>A[Math.floor(_()*A.length)],I=(L,D,O,V,N,z,H,Y,le)=>{let ze=y.map(()=>[]);for(let Be=0;Be<L;Be++){let ye=P(),$=ye+(_()-.5)*34,J=b($),xe=$/T,ve=E*(D+_()*(O-D))*J*1.12,Ee=(_()-.5)*V+($-T*.45)*.12;ze[Math.min(8,Y+Math.floor(_()*(le-Y+1)+xe*1.2))].push([$,ve,Ee,N+_()*(z-N)])}ze.forEach((Be,ye)=>{if(!Be.length)return;let $=s.createLinearGradient(0,E,0,E*(1-O*.8));$.addColorStop(0,y[H]),$.addColorStop(.55,y[Math.round((H+ye)/2)]),$.addColorStop(1,y[ye]),s.fillStyle=$,s.beginPath();for(let J of Be)w(J[0],J[1],J[2],J[3]);s.fill()})};I(360,.25,.55,150,12,22,0,2,3),I(240,.4,.78,260,10,17,1,4,6);let R=[];for(let L=0;L<4;L++){let D=T*(.14+_()*.74),O=b(D);R.push({fx:D,fy:Math.max(56,E-E*(.56+_()*.38)*O*1.05),kind:_()<m?0:1,sz:.85+_()*.4,tilt:.72+_()*.28,rot:_()*6.28,sx:D+(_()-.5)*60})}s.lineCap="round";for(let L of R)s.strokeStyle="#2c6623",s.lineWidth=6,s.beginPath(),s.moveTo(L.sx,E),s.quadraticCurveTo((L.sx+L.fx)/2+(_()-.5)*40,(E+L.fy)/2,L.fx,L.fy+8),s.stroke();I(150,.5,.92,330,9,16,2,6,7);for(let L of R){if(s.save(),s.translate(L.fx,L.fy),s.scale(1,L.tilt),L.kind===0){let D=38*L.sz;for(let O=0;O<16;O++){let V=L.rot+O/16*6.283;s.fillStyle=Math.sin(V)>.4?"#e2e3ea":"#fdfdf6",s.beginPath(),s.ellipse(Math.cos(V)*D*.56,Math.sin(V)*D*.56,D*.48,D*.14,V,0,7),s.fill()}s.fillStyle="#f2b51a",s.beginPath(),s.arc(0,0,D*.28,0,7),s.fill(),s.fillStyle="#fbe060",s.beginPath(),s.arc(-D*.07,-D*.07,D*.14,0,7),s.fill()}else{let D=40*L.sz;for(let O=0;O<5;O++){let V=L.rot+O/5*6.283;s.fillStyle="#fccc1e",s.beginPath(),s.ellipse(Math.cos(V)*D*.52,Math.sin(V)*D*.52,D*.52,D*.38,V,0,7),s.fill()}for(let O=0;O<5;O++){let V=L.rot+O/5*6.283;s.fillStyle="#ffe873",s.beginPath(),s.ellipse(Math.cos(V)*D*.62,Math.sin(V)*D*.62-3,D*.26,D*.15,V,0,7),s.fill()}s.fillStyle="#e39b14",s.beginPath(),s.arc(0,0,D*.2,0,7),s.fill()}s.restore()}I(40,.42,.85,280,8,14,3,6,7),s.restore(),o[l]={u0:f/1024,u1:(f+512)/1024,v0:1-(d+512)/3072,v1:1-(d+8)/3072}};p("twigs",0,0),u("leafA",0,a),u("leafB",512,a),u("sakura",0,a+512),u("pine",512,a+512),u("momiji",0,a+1024),u("ginkgo",512,a+1024),h("grass",0,a+1536,!1),h("flowers",512,a+1536,!0),g("bankA",0,a+2048,4111,.7),g("bankB",512,a+2048,4127,.35);let x=new Qn(n);x.colorSpace=qt,x.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let M=1-(a+2048)/3072,S=1-(a+2056)/3072;return{tex:x,cells:o,tuftV:[M,1-(a+1536)/3072,S,(M+S)/2]}}var fn=[1,1,1],Me={pole:pe("#b1b0a9"),metal:pe("#8d9198"),black:pe("#2a2b30"),yellow:pe("#f2c230"),white:pe("#f4f3ee"),trans:pe("#a0a3a8"),lampPole:pe("#727780"),lampHead:pe("#dcdcd6"),trunk:pe("#6a5444"),trunkDark:pe("#4b3a33"),bark:pe("#7a6556"),leaf:pe("#86ba4c"),leafShade:pe("#2c6640"),sakura:pe("#ffd3e3"),sakuraShade:pe("#de94b4"),pine:pe("#55874c"),pineShade:pe("#1d4632"),cedar:pe("#41713e"),cedarShade:pe("#1b3e2a"),roof:pe("#bdbbb3"),parapet:pe("#dcdad2"),pipe:pe("#c4c4bf"),orange:pe("#f07a22"),red:pe("#d8352a"),vermilion:pe("#e2482c"),concrete:pe("#c9c7c0"),stone:pe("#a8a69e"),terracotta:pe("#b8653d"),rail:pe("#eeeeea")},nd=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(pe),gs=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(pe),Tm=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(pe),id=null;function Em(i){id=i}var Hi=i=>id.uv(i),Ao=Hi,wm=(i,e)=>{let t=1;for(;id.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function Wu(i,e,t,n,s=0){let r=new et().makeRotationY(s);r.setPosition(e,t,n);let o=new et().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var sd=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let a=e[5];(a==="g"&&e[6]==="l"||a==="d"||a==="k"||a==="c"||a==="n")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},sn=(i,e,t,n,s,r,o,a=fn)=>{sd(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],a,Hi(o)),i.litV=0},Vi=(i,e,t,n,s,r,o,a=fn)=>{sd(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],a,Hi(o)),i.litV=0},Gi=(i,e,t,n,s,r,o,a=fn)=>{sd(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],a,Hi(o)),i.litV=0},wo=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?Hi(r):void 0),AM=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function Am(i){return AM.map(e=>new k(e[0],e[1],e[2]).applyMatrix4(i))}function rd(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,Me.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?Me.black:Me.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,Me.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,Me.metal);let o=[-.85,-.3,.3,.85],a=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,Me.white);for(let u of a)s.cyl(0,r-1.65,u,.045,.03,.15,6,Me.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,Me.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,Me.trans),s.box(-.06,7.2,.12,.06,7.35,.26,Me.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,Me.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,Me.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,Me.concrete);for(let u=2.4,h=0;u<r-2;u+=.45,h++)s.rod([0,u,0],[h%2?.3:-.3,u,0],.015,.015,3,Me.metal);return i.atlas.setM(e),sn(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&sn(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...a.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new k(u[0],u[1],u[2]).applyMatrix4(e))}var Hu=new k;function Xs(i,e,t,n,s,r){i.lamps&&(Hu.set(t,n,s).applyMatrix4(e),i.lamps.push(Hu.x,Hu.y,Hu.z,r))}function od(i,e,t,n={}){let s=i.color;s.setM(e),Xs(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,Me.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,Me.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,Me.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,Me.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,fn);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],fn,{u0:0,u1:1,v0:0,v1:1})}function Rm(i,e,t=.04){let n=i.color;n.setM(e),Xs(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,Me.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,Me.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,Me.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,fn),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],fn,{u0:0,u1:1,v0:0,v1:1})}function Eo(i,e,t,n,s,r,o=!1,a=!1){let c=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let u=0;u<4;u++){let[h,p]=c[u],[g,x]=c[(u+1)%4];i.quad([h*n,e,p*n],[h*s,t,p*s],[g*s,t,x*s],[g*n,e,x*n],r)}o&&s>.001&&i.quad([-s,t,-s],[-s,t,s],[s,t,s],[s,t,-s],r),a&&i.quad([-n,e,-n],[n,e,-n],[n,e,n],[-n,e,n],r)}var RM=pe("#202127");function el(i,e){let t=i.color;t.setM(e),Xs(i,e,0,3.4,0,.9);let n=RM,s={noBottom:!0};t.cyl(0,0,0,.12,.1,.28,6,n),t.cyl(0,.28,0,.065,.05,2.8,6,n,!1),Eo(t,3.04,3.17,.05,.17,n,!0);for(let[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.box(r*.155-.018,3.17,o*.155-.018,r*.155+.018,3.6,o*.155+.018,n,null,s);t.box(-.165,3.6,-.165,.165,3.64,.165,n,null,s),Eo(t,3.64,3.84,.23,.05,n),Eo(t,3.6,3.64,.2,.23,n,!1,!0),t.cyl(0,3.84,0,.035,0,.12,4,n,!1),i.lamp.setM(e),i.lamp.box(-.14,3.17,-.14,.14,3.6,.14,fn),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],fn,{u0:0,u1:1,v0:0,v1:1})}function ad(i,e,t){let n=Math.floor(t()*3),s=[Me.red,pe("#2f6fd8"),Me.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,An(s,.8)),i.atlas.setM(e),sn(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function td(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,pe("#e6e6e1")),i.atlas.setM(e),sn(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function Cm(i,e,t){let n=i.color;n.setM(e);let s=t.pick([pe("#c8ccd2"),pe("#c0392b"),pe("#2c6fb7"),pe("#2b2b2b"),pe("#e8c84a"),pe("#e98fb0")]);for(let o of[-.52,.52])for(let a=0;a<12;a++){let c=a/12*Math.PI*2,u=(a+1)/12*Math.PI*2;n.rod([o+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,Me.black)}let r=(o,a)=>n.rod(o,a,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,Me.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,Me.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,Me.metal)}function Pm(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,Me.orange),t.cyl(0,.04,0,.16,.03,.68,10,Me.orange),t.cyl(0,.32,0,.115,.095,.12,10,Me.white,!1)}function ld(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,Me.terracotta),i.leaf.setM(e),Wi(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}function qs(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,Me.metal),i.atlas.setM(e),n<0?Gi(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Vi(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function cd(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?Me.white:Me.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,Me.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,Me.black),i.atlas.setM(e),t<0?Gi(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Vi(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function Im(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,pe("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,pe("#f0a020"))}function ud(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,Me.orange);let s=0,r=3.25,o=.42,a=14;for(let c=0;c<a;c++){let u=c/a*Math.PI*2,h=(c+1)/a*Math.PI*2,p=(g,x,M)=>[t*M,r+Math.sin(g)*x,s+Math.cos(g)*x-.25];wo(n,p(0,0,-.02),p(t>0?h:u,o,-.02),p(t>0?u:h,o,-.02),Me.orange),wo(n,p(0,0,-.035),p(t>0?h:u,o*.86,-.035),p(t>0?u:h,o*.86,-.035),pe("#dfe9f2"))}}var Xu=null;function Lm(i){Xu=i}var Vu=1;function Dm(i){Vu=i}function Wi(i,e,t,n,s,r,o,a,c,u,h,p,g=0){let x=Xu[o],M=1+(1-Vu)*.35;a=Math.max(2,Math.round(a*Vu));for(let S=0;S<a;S++){let l=c()*2-1,f=c()*2-1,d=c()*2-1;g&&(f=1.2+c());let v=Math.hypot(l,f,d)||1;l/=v,f/=v,d/=v;let m=-d,_=0,T=l;v=Math.hypot(m,T),v<.1&&(m=1,T=0,v=1),m/=v,T/=v;let E=f*T-d*_,y=d*m-l*T,b=l*_-f*m,w=Math.PI+(c()-.5)*.9,A=Math.cos(w),P=Math.sin(w),I=m*A+E*P,R=_*A+y*P,L=T*A+b*P,D=E*A-m*P,O=y*A-_*P,V=b*A-T*P,N=r*(1.3+c()*.45)*M/2,z=t+(c()-.5)*r*.6,H=n+(c()-.5)*r*(g?.15:.5),Y=s+(c()-.5)*r*.6,le=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([ye,$])=>[z+(I*ye+D*$)*N,H+(R*ye+O*$)*N*(g?.6:1),Y+(L*ye+V*$)*N]),ze=le.map(ye=>{let $=ye[0]-e[0],J=ye[1]-e[1],xe=ye[2]-e[2],ve=Math.hypot($,J,xe)||1;$/=ve,J/=ve,xe/=ve;let Ee=ye[0]-t,We=ye[1]-n,Ne=ye[2]-s;return ve=Math.hypot(Ee,We,Ne)||1,[$*.7+Ee/ve*.3,J*.7+We/ve*.3+(g?.5:0),xe*.7+Ne/ve*.3]}),Be=le.map(ye=>Vf(h,u,.45+.55*Math.max(0,Math.min(1,(ye[1]-p[0])/(p[1]-p[0])))));i.leaf.card(le,ze,x,Be)}}function hd(i,e,t,n="grass",s=1){let r=Xu[n],o=(.42+t()*.38)*s,a=o*1.2,c=t()*Math.PI,u=[0,1,0],h=[u,u,u,u],p=[.6,.64,.58],g=[1,1,1];i.leaf.setM(e);for(let x of[c,c+Math.PI/2]){let M=Math.cos(x)*a/2,S=Math.sin(x)*a/2;i.leaf.card([[-M,-.05,-S],[M,-.05,S],[M,o,S],[-M,o,-S]],h,r,[p,p,g,g])}}var CM=[.62,.68,.74],Nm=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],PM=[0,1,2,0,2,3,0,3,4],IM=Nm.map(([,i])=>Vf(CM,fn,i));function fd(i,e,t,n,s,r,o,a=1){let c=Xu[o()<.5?"bankA":"bankB"],u=.82*a,h=(u+.06)*2.03,p=i.leaf;for(let g of PM){let[x,M]=Nm[g],S=(x-.5)*h;p.vtx(e+s*S,t+M*(u+.06)-.06,n+r*S,0,1,0,c.u0+(c.u1-c.u0)*x,c.v0+(c.v1-c.v0)*M,IM[g])}}var Um=()=>Vu>.7?.9:1.25;function LM(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,Me.trunk);for(let u=0;u<3;u++){let h=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(h)*1.1*n,s*.68,Math.sin(h)*1.1*n],.09*n,.05*n,5,Me.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",a=[s*.45,s*1.15],c=7+Math.floor(t()*3);for(let u=0;u<c;u++){let h=t()*6.28,p=(.6+t())*1.3*n;Wi(i,r,Math.cos(h)*p,s*(.62+t()*.3),Math.sin(h)*p,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],a)}Wi(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],a)}function ym(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,Me.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(2.2+t()*1.6)*n,g=[Math.cos(h)*p,s*(.62+t()*.18),Math.sin(h)*p];i.color.rod([0,s*.4,0],g,.12*n,.05*n,5,Me.trunkDark),r.push(g),i.color.rod(g,[g[0]*1.25,g[1]+.9*n,g[2]*1.25],.05*n,.02*n,4,Me.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],a=[s*.5,s*1.1],c=[.72,.62,.72];for(let u of r)for(let h=0;h<2;h++)Wi(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],c,a);Wi(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],c,a)}function DM(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,a=[r*.4,o*.45,.2],c=[r,o*.8,-.2];s.rod([0,0,0],a,.2*n,.15*n,6,Me.trunkDark),s.rod(a,c,.15*n,.09*n,6,Me.trunkDark),i.leaf.setM(e);let u=[[c[0],c[1]+.3,c[2],1.7],[a[0]+1.4*n,a[1]+.8,.5,1.3],[a[0]-1.3*n,a[1]+1.4,-.4,1.2],[c[0]+.9*n,c[1]-.6,.8,1.1]];for(let[h,p,g,x]of u)s.rod(h>a[0]?a:c,[h,p-.2,g],.07*n,.04*n,4,Me.trunkDark),Wi(i,[h,p-.8,g],h,p,g,x*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[p-.7,p+.5],1)}function NM(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,Me.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(1.8+t()*1.4)*n,g=[Math.cos(h)*p,s*(.55+t()*.2),Math.sin(h)*p];i.color.rod([0,s*.38,0],g,.09*n,.04*n,5,Me.trunkDark),r.push(g)}i.leaf.setM(e);let o=[0,s*.7,0],a=[s*.45,s*1.1],c=[.62,.52,.56];for(let u of r)Wi(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],c,a);Wi(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],c,a)}function UM(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,Me.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],a=[.68,.6,.52];for(let c=0;c<7;c++){let u=s*(.34+c*.09),h=(2.1-c*.24)*n,p=t()*6.28;Wi(i,r,Math.cos(p)*h*.35,u,Math.sin(p)*h*.35,Math.max(.7,h)*1.05,"ginkgo",5,t,[1,1,1],a,o)}}function FM(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,pe("#eeece6"));for(let u=0;u<7;u++){let h=t.range(.4,r*.85),p=h/r;s.cyl(o*p,h,0,.135*n*(1-p*.6),.13*n*(1-p*.6),.05,7,pe("#2b2b30"),!1)}for(let u=0;u<7;u++){let h=r*(.45+t()*.5),p=t()*6.28,g=(.8+t()*1.6)*n,x=h/r;s.rod([o*x,h,0],[o*x+Math.cos(p)*g,h+g*.9,Math.sin(p)*g],.035*n,.012*n,4,pe("#8b7f78"))}let a=r*.7,c=(1.5+t()*.5)*n;i.leaf.setM(e),Wi(i,[o*.7,a,0],o*.7,a,0,c,"twigs",3,t,[1,1,1],[.92,.9,.92],[a-c,a+c])}function BM(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Me.trunkDark),i.foliage.setM(e);let r=pe("#1d3a2c"),o=pe("#eef2f8"),a=pe("#d7e0ec");for(let c=0;c<4;c++){let u=s*(.16+c*.19),h=(1.9-c*.38)*n,p=s*.3;i.foliage.cyl(0,u,0,h,h*.3,p,9,r),i.foliage.cyl(0,u+p*.45,0,h*.72,.05,p*.62,9,c%2?o:a)}}function OM(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Me.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,Me.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,Me.cedar)}var wi={cells:null,bcells:null};function zM(i,e,t,n=1){let s=t()<.3?1.22:1,r=t.range(6.2,8)*n*s,o=i.color;o.setM(e);let a=r*t.range(.3,.38);o.cyl(0,0,0,.27*n*s,.2*n*s,a,8,Me.trunk);let c=r*.64,u=t.range(2.6,3.2)*n*s,h=t.range(2,2.5)*n*s,p=n*s,g=[],x=5+Math.floor(t()*3);for(let v=0;v<x;v++){let m=v/x*6.283+t()*.6,_=t.range(-.15,.75),T=Math.sqrt(1-_*_);g.push([Math.cos(m)*T,_,Math.sin(m)*T])}g.push([0,1,0]);let M=[[0,c+.15*h,0,1.76*p,1]],S=26+Math.floor(t()*7);for(let v=0;v<S;v++){let m=t()*2-1,_=t.range(-.55,1),T=t()*2-1,E=Math.hypot(m,_,T)||1;m/=E,_/=E,T/=E;let y=g[0],b=-2;for(let A of g){let P=A[0]*m+A[1]*_+A[2]*T;P>b&&(b=P,y=A)}m=m*.45+y[0]*.55,_=_*.45+y[1]*.55,T=T*.45+y[2]*.55,E=Math.hypot(m,_,T)||1,m/=E,_/=E,T/=E;let w=t.range(.78,.95);M.push([m*u*w,c+_*h*w,T*u*w,t.range(.8,1.1)*p,0])}for(let v=0;v<4;v++){let m=g[v%x];o.rod([0,a*.9,0],[m[0]*u*.55,c+Math.min(0,m[1])*h*.4-.3*n,m[2]*u*.55],.15*p,.06*n,6,Me.trunk)}let l=t(),f=l<.5?[1,1,.92+l*.16]:[1-(l-.5)*.12,1,.9],d=i.gleaf;d.setM(e);for(let[v,m,_,T,E]of M){let y=v,b=(m-c)*(u/h)+.1*u,w=_,A=Math.hypot(y,b,w)||1;y/=A,b/=A,w/=A,E&&(y=w=0,b=-1);let P=Math.min(1,Math.max(0,(m-(c-h))/(2*h))),I=E?.55:.72+.28*P,R=T/.8*.88;d.bill(v,m,_,y,b,w,R,R,wi.cells[Math.floor(t()*wi.cells.length)],[f[0]*I,f[1]*I,f[2]*I],Yp,.88)}}function Mm(i,e,t,n=1,s=!1){let r=i.color;r.setM(e);let o=s?1:0,a=t.range(2.2,2.7)*n,c=t.range(.3,.35)*n,u=[t.range(-.15,.15)*n,a,o*.3*n];r.rod([0,0,0],u,c,c*.8,7,Me.bark),r.cyl(0,0,0,c*1.25,c,.35*n,7,Me.bark,!1);let h=t.range(6.3,6.9)*n,p=-o*.5*n,g=t.range(4,4.5)*n,x=t.range(3.6,4)*n,M=t.range(1.7,2)*n,S=t()<.35?4:3,l=s?-Math.PI/2+t.range(-.35,.35):t()*6.283;for(let E=0;E<S;E++){let y=l+E/S*6.283+t.range(-.3,.3),b=Math.cos(y),w=Math.sin(y),A=t.range(.32,.46),P=[u[0]+b*g*A,h-M*t.range(.35,.55),u[2]*.5+p*.4+w*x*A],I=[u[0]+(P[0]-u[0])*.45+b*.25*n,a+(P[1]-a)*.55,u[2]+(P[2]-u[2])*.45+w*.25*n],R=(O,V,N)=>{let z=Math.hypot(V[0]-O[0],V[1]-O[1],V[2]-O[2])||1;return[V[0]-(V[0]-O[0])/z*N,V[1]-(V[1]-O[1])/z*N,V[2]-(V[2]-O[2])/z*N]};r.rod(u,I,c*.62,c*.46,6,Me.bark),r.rod(R(u,I,c*.5),P,c*.47,c*.3,5,Me.bark);let L=R(I,P,c*.35),D=E%2?1:2;for(let O=0;O<D;O++){let V=(O?1:-1)*t.range(.3,.9),N=t.range(1.2,1.9)*n;r.rod(L,[P[0]+Math.cos(y+V)*N,P[1]+t.range(.7,1.2)*n,P[2]+Math.sin(y+V)*N],c*.27,.04*n,4,Me.bark)}}let f=[],d=6+Math.floor(t()*2);for(let E=0;E<d;E++){let y=E/d*6.283+t()*.5,b=t.range(-.2,.6),w=Math.sqrt(1-b*b);f.push([Math.cos(y)*w,b,Math.sin(y)*w])}f.push([0,1,0]);let v=[[-g*.3,h,p,1.75*n,1],[g*.3,h,p,1.75*n,1]],m=21+Math.floor(t()*4);for(let E=0;E<m;E++){let y=t()*2-1,b=t.range(-.3,1),w=t()*2-1,A=Math.hypot(y,b,w)||1;y/=A,b/=A,w/=A;let P=f[0],I=-2;for(let L of f){let D=L[0]*y+L[1]*b+L[2]*w;D>I&&(I=D,P=L)}y=y*.5+P[0]*.5,b=b*.5+P[1]*.5,w=w*.5+P[2]*.5,A=Math.hypot(y,b,w)||1,y/=A,b/=A,w/=A;let R=t.range(.8,.95);v.push([y*g*R,h+b*M*R,p+w*x*R,t.range(1,1.3)*n,0])}let _=[1,t.range(.96,1.03),t.range(.97,1.02)],T=i.gblossom;T.setM(e);for(let[E,y,b,w,A]of v){let P=E/g,I=(y-h)/M+.12,R=(b-p)/x,L=Math.hypot(P,I,R)||1;P/=L,I/=L,R/=L,A&&(P=R=0,I=-1);let D=Math.min(1,Math.max(0,(y-(h-M))/(2*M))),O=A?.62:.8+.2*D,V=w/.8*.86;T.bill(E,y,b,P,I,R,V,V,wi.bcells[Math.floor(t()*wi.bcells.length)],[_[0]*O,_[1]*O,_[2]*O],Zp,.86)}}var Fm={broad:(i,e,t,n)=>(wi.cells?zM:LM)(i,e,t,n),sakura:(i,e,t,n)=>wi.bcells?Mm(i,e,t,n):ym(i,e,t,n),sakuraAve:(i,e,t,n)=>wi.bcells?Mm(i,e,t,n,!0):ym(i,e,t,n),pine:DM,cedar:OM,maple:NM,ginkgo:UM,birch:FM,snowcedar:BM},bm={};function Bm(i,e){let t=i+e,n=bm[t];if(!n){let s={color:new cn,foliage:new cn,leaf:new cn({uv:!0}),gleaf:new cn({uv:!0,off:!0}),gblossom:new cn({uv:!0,off:!0})};Fm[i](s,new et,Zt(1e3+e*77+i.length*13),1),n=bm[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays(),g:s.gleaf.toArrays(),b:s.gblossom.toArrays()}}return n}function Om(){for(let i in Fm)for(let e=0;e<4;e++)Bm(i,e)}function Zn(i,e,t,n,s=1){let r=Bm(t,Math.floor(n()*4)),o=e.clone().scale(new k(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o),r.g.n&&i.gleaf.stamp(r.g,o),r.b.n&&i.gblossom.stamp(r.b,o)}var kM=new Set(["win0","win2","win5","win6"]),is=(i,e,t)=>e<t?i+(e<t*.35&&kM.has(i)?"C":"L"):i;function tl(i,e,t,n,s,r,o){let a=Math.max(1,Math.round(t/3)),c=t/a;for(let u of[-1,1])for(let h=0;h<n.length-1;h++)for(let p=0;p<a;p++){let g=h>0&&r()<.3?is("win6",r(),o):r()<.2?"win5":"plain";(u>0?Vi:Gi)(i,u*e/2,p*c,(p+1)*c,n[h],n[h+1],g,s)}}function nl(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],Me.roof);let o=.5,a=.15;if(i.box(-e/2,n,-.02,e/2,n+o,a,Me.parapet),i.box(-e/2,n,t-a,e/2,n+o,t,Me.parapet),i.box(-e/2,n,0,-e/2+a,n+o,t,Me.parapet),i.box(e/2-a,n,0,e/2,n+o,t,Me.parapet),s()<.4){let c=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[h,p]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(c+h-.05,n,u+p-.05,c+h+.05,n+1,u+p+.05,Me.metal);i.cyl(c,n+1,u,.85,.85,1.3,12,pe("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,Me.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,Me.metal)}function Gu(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,Me.black);let r="vs"+Math.floor(s()*10);Gi(i.atlas,e-.065,-.88,-.12,t,n,r),Vi(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,Me.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,Me.metal)}function vs(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,Me.concrete,null,{noBottom:!0}),n.type){case"shop":return HM(i,e,t,n);case"machiya":return VM(i,e,t,n);case"apt":return GM(i,e,t,n);case"office":return WM(i,e,t,n);case"konbini":return XM(i,e,t,n);case"house":return YM(i,e,t,n);case"tower":return ZM(i,e,t,n)}}var zm=new Set(["glass","door","cafe","noren"]),km={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function HM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,p=3.6,g=3,x=p+(o-1)*g,M=Math.max(1,Math.round(s/3)),S=s/M,l=-s/2,f=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),d=[],v=0;for(let y=0;y<M;y++){let b=wm(t,"shop_"+f[y%f.length]);d.push(b),!v&&b.startsWith("shop_glass")&&b.length>10&&(v=+b.slice(10))}for(let y=0;y<M;y++){let b=f[y%f.length];sn(u,l+y*S,l+(y+1)*S,0,p,0,v&&b==="glass"?"shop_glass"+v:d[y]),zm.has(b)&&Xs(i,e,l+(y+.5)*S,1.9,-.8,.7)}let m=t.pick([0,0,1,5,0,1]),_=[0,p];for(let y=1;y<o;y++)_.push(p+y*g);for(let y=1;y<o;y++)for(let b=0;b<M;b++){let w=b%2===1&&t()<.3?5:m;sn(u,l+b*S,l+(b+1)*S,_[y],_[y+1],0,is("win"+w,t(),c),a)}tl(u,s,r,_,a,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],An(a,.8)),nl(h,s,r,x,t);let T=s*.94;h.box(-T/2,p-.8,-.3,T/2,p+.08,-.02,Me.black);let E="hs"+Math.floor(t()*14);if(sn(u,-T/2,T/2,p-.8,p+.08,-.305,km[v]||E),t()<.55){let y=t.pick(Tm),b=p-.85;h.quad([s/2-.2,b-.35,-1.1],[-s/2+.2,b-.35,-1.1],[-s/2+.2,b,-.02],[s/2-.2,b,-.02],y),h.quad([s/2-.2,b-.6,-1.1],[-s/2+.2,b-.6,-1.1],[-s/2+.2,b-.35,-1.1],[s/2-.2,b-.35,-1.1],An(y,.85))}if(o>=2&&t()<.85){let y=(t()<.5?1:-1)*(s/2-.35);Gu(i,y,p+.3,Math.min(x-.15,p+2.8),t)}for(let y=1;y<o;y++)if(t()<.4){let b=Math.floor(t()*M),w=l+b*S+.15,A=l+(b+1)*S-.15,P=_[y];h.box(w,P-.12,-.9,A,P,0,Me.parapet),sn(u,w,A,P,P+1,-.9,"rail"),Gi(u,w,-.9,0,P,P+1,"rail"),Vi(u,A,-.9,0,P,P+1,"rail"),t()<.45&&qm(h,w+.1,A-.1,P+1.95,-.55,t),t()<.6&&td(i,e,(w+A)/2+.6,P,-.75)}else if(t()<.35){let b=Math.floor(t()*M);td(i,e,l+(b+.5)*S,_[y]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}h.cyl(l+.12,0,-.08,.05,.05,x,6,Me.pipe,!1),h.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,pe("#d9d9d3")),o>=3&&t()<.18&&Hm(i,s,x,r,t)}function VM(i,e,t,n){let{w:s,d:r,floors:o,litP:a}=n,c=i.atlas,u=i.color,h=3.6,p=2.9,g=h+(o-1)*p,x=-s/2,M=Math.max(2,Math.round(s/3)),S=s/M,l=pe("#5c4030"),f=pe("#3a2a20"),d=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),v=[],m=0;for(let N=0;N<M;N++){let z=wm(t,"shop_"+d[N%d.length]);v.push(z),!m&&z.startsWith("shop_glass")&&z.length>10&&(m=+z.slice(10))}for(let N=0;N<M;N++){let z=d[N%d.length];sn(c,x+N*S,x+(N+1)*S,0,h,0,m&&z==="glass"?"shop_glass"+m:v[N]),zm.has(z)&&Xs(i,e,x+(N+.5)*S,1.9,-.8,.7)}let _=!!n.plaster,T=n.tint,E=[0,h];for(let N=1;N<o;N++)E.push(h+N*p);let y=_?t.pick([0,0,1,0,2]):4;for(let N=1;N<o;N++)for(let z=0;z<M;z++)sn(c,x+z*S,x+(z+1)*S,E[N],E[N+1],0,is("win"+(_&&z%2===1&&t()<.3?5:y===2?0:y),t(),a),_?T:fn);{let N=Math.max(1,Math.round(r/3)),z=r/N;for(let H of[-1,1])for(let Y=0;Y<E.length-1;Y++)for(let le=0;le<N;le++)(H>0?Vi:Gi)(c,H*s/2,le*z,(le+1)*z,E[Y],E[Y+1],_?Y>0&&t()<.35?is("win6",t(),a):"plain":Y>0&&t()<.45?is("win4",t(),a):"woodwall",_?T:fn)}u.quad([-s/2,0,r],[s/2,0,r],[s/2,g,r],[-s/2,g,r],_?An(T,.8):pe("#6a5240"));for(let N of[x,-x])u.box(N-.09,0,-.12,N+.09,g,.02,f);if(_)for(let N=2;N<o;N++)u.box(x,E[N]-.1,-.08,-x,E[N]+.06,0,f);let{RC:b,k:w}=Vm(i,n,s,r,g,t,!_),A=h+.34,P=1.05,I=.42,R=Math.max(2,Math.round((s+.3)/3));for(let N=0;N<R;N++){let z=x-.15+(s+.3)*N/R,H=x-.15+(s+.3)*(N+1)/R;c.quad([H,A-I,-P],[z,A-I,-P],[z,A,0],[H,A,0],b,w)}u.quad([x-.15,A-I-.03,-P],[-x+.15,A-I-.03,-P],[-x+.15,A-.1,0],[x-.15,A-.1,0],l);let L=s*.9,D=A-I+.02,O=D-.62;u.box(-L/2,O,-P-.02,L/2,D,-P+.07,f),sn(c,-L/2,L/2,O,D,-P-.025,km[m]||"hs"+Math.floor(t()*14));for(let N of[-L/2+.25,L/2-.25])u.box(N-.03,D,-P+.02,N+.03,A-I*.1,-P+.06,f);i.sodium.setM(e),u.noShadow=!0;for(let N=0;N<M;N++){let z=x+(N+.5)*S;u.box(z-.008,O-.02,-.62,z+.008,A-I*.6,-.6,f),i.sodium.box(z-.06,O-.16,-.67,z+.06,O-.04,-.55,null)}u.noShadow=!1;let V=!1;if(t()<.5){V=!0;let N=t.pick(Tm),z=O-.12;u.quad([s/2-.2,z-.32,-.95],[-s/2+.2,z-.32,-.95],[-s/2+.2,z,-.02],[s/2-.2,z,-.02],N),u.quad([s/2-.2,z-.55,-.95],[-s/2+.2,z-.55,-.95],[-s/2+.2,z-.32,-.95],[s/2-.2,z-.32,-.95],An(N,.85))}if(o>=2&&(!_||t()<.5)){let N=E[1]+.42,z=-.5,H=x+.12,Y=-x-.12;u.box(H,N-.07,z-.04,Y,N,0,l);for(let le=0;le<M;le++)sn(c,x+.12+(s-.24)*le/M,x+.12+(s-.24)*(le+1)/M,N,N+.95,z,"wrail");Gi(c,H,z,0,N,N+.95,"wrail"),Vi(c,Y,z,0,N,N+.95,"wrail"),i.leaf.setM(e);for(let le=0;le<M;le++)if(t()<.7){let ze=x+(le+.5)*S,Be=Math.min(S*.7,1.6);u.noShadow=!0,u.box(ze-Be/2,N+.72,z-.2,ze+Be/2,N+.92,z-.02,pe("#7a5236")),u.noShadow=!1;for(let ye=ze-Be/2+.2;ye<ze+Be/2-.1;ye+=.32)Wi(i,[ye,N+.95,z-.11],ye,N+1.05,z-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[N+.9,N+1.3])}}if(o>=2&&t()<.9){let N=t()<.5?1:-1;Gu(i,N*(s/2-.35),h+.6,Math.min(g-.2,h+2.7),t),s>7&&t()<.35&&Gu(i,-N*(s/2-.35),h+.8,Math.min(g-.2,h+2.5),t)}{let N=d.includes("noren")||d.includes("cafe"),z=V?0:N?2:t()<.3?1:0;i.sodium.setM(e);for(let H=0;H<z;H++){let Y=z===2?(H?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),le=O-.5;u.noShadow=!0,u.box(Y-.006,le+.42,-P+.12,Y+.006,O,-P+.14,f),i.sodium.cyl(Y,le,-P+.13,.11,.16,.18,10,null,!1),i.sodium.cyl(Y,le+.18,-P+.13,.16,.11,.18,10,null,!1),u.cyl(Y,le-.035,-P+.13,.1,.1,.04,8,f),u.cyl(Y,le+.355,-P+.13,.1,.1,.04,8,f),u.noShadow=!1}}for(let N=x+.45+t()*.4;N<-x-.3;N+=.7+t()*1.3)t()<.7&&ld(i,e,t,N,-.4);i.color.setM(e),i.atlas.setM(e)}function Hm(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,a=n*.3;for(let c of[-r*.35,r*.35])i.color.box(c-.06,t,a,c+.06,t+1.2+o,a+.12,Me.metal);i.color.box(-r/2,t+1.2,a+.12,r/2,t+1.2+o,a+.3,Me.metal),sn(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,a+.115,"bb"+Math.floor(s()*4))}function GM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,p=3.2,g=2.95,x=p+(o-1)*g,M=Math.max(2,Math.round(s/3.2)),S=s/M,l=-s/2,f=[0,p];for(let m=1;m<o;m++)f.push(p+m*g);for(let m=0;m<M;m++)sn(u,l+m*S,l+(m+1)*S,0,p,0,m===Math.floor(M/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),m===Math.floor(M/2)?fn:a);let d="bal"+Math.floor(t()*3),v=An(a,.97);for(let m=1;m<o;m++){let _=f[m];for(let T=0;T<M;T++)sn(u,l+T*S,l+(T+1)*S,_,f[m+1],0,is("win2",t(),c),a);h.box(l,_-.15,-1.3,-l,_,0,v),h.box(l,_,-1.3,-l,_+1.1,-1.18,v,null,{noBottom:!0});for(let T=0;T<M;T++)sn(u,l+T*S,l+(T+1)*S,_,_+1.1,-1.305,d,a);for(let T=0;T<=M;T++)h.box(l+T*S-.05,_,-1.18,l+T*S+.05,_+2.4,0,An(a,.92));for(let T=0;T<M;T++){let E=t(),y=l+T*S+.2,b=l+(T+1)*S-.2;E<.34?qm(h,y,b,_+2.02,-.98,t):E<.46&&JM(h,y+.25,Math.min(b-.25,y+1.9),_+1.1,-1.3,t)}i.atlas.setM(e);for(let T=0;T<M;T++)t()<.55&&(td(i,e,l+(T+.78)*S,_,-.55),i.atlas.setM(e),i.color.setM(e))}h.box(l,x-.15,-1.3,-l,x,0,v),tl(u,s,r,f,a,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],An(a,.8)),nl(h,s,r,x,t,!0)}function WM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,p=4,g=3.4,x=p+(o-1)*g,M=Math.max(2,Math.round(s/3)),S=s/M,l=-s/2,f=[0,p];for(let d=1;d<o;d++)f.push(p+d*g);for(let d=0;d<M;d++)sn(u,l+d*S,l+(d+1)*S,0,p,0,d===1?"shop_door":"shop_glass");for(let d=1;d<o;d++)for(let v=0;v<M;v++)sn(u,l+v*S,l+(v+1)*S,f[d],f[d+1],0,is("win3",t(),c),a);tl(u,s,r,f,a,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],An(a,.8)),nl(h,s,r,x,t,!0),t()<.6&&Gu(i,(t()<.5?1:-1)*(s/2-.3),p+.4,Math.min(x-.3,p+4.5),t),t()<.3&&Hm(i,s,x,r,t)}function XM(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,a=i.color,c=4.4,u=-s/2,h=Math.max(3,Math.round(s/3)),p=s/h;for(let g=0;g<h;g++)sn(o,u+g*p,u+(g+1)*p,0,3.4,0,"shop_konbini"),Xs(i,e,u+(g+.5)*p,1.9,-.8,.8);a.box(u,3.4,-.35,-u,c,0,Me.white),sn(o,u,-u,3.4,c,-.355,"konbini_band"),tl(o,s,r,[0,c],pe("#f2f2ee"),t,0),nl(a,s,r,c,t)}var Sm=(i,e)=>e?pe("#7a5a42"):i.tint,ed=null,qM=()=>{if(!ed){let i=Hi("kawara"),e=16/272*(i.u1-i.u0);ed={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return ed};function Vm(i,e,t,n,s,r,o){let a=i.atlas,c=i.color,u=!!e.snow,h=u?.75:.6,p=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),g=u?Hi("white"):qM(),x=u?pe("#f3f5fa"):pe("#c8ccd8"),M=u?pe("#e4e8f0"):pe("#3d4456"),S=u?1:Math.max(2,Math.round((t+2*h)/3)),l=v=>-t/2-h+(t+2*h)*v/S;for(let v=0;v<S;v++){let m=l(v),_=l(v+1);a.quad([_,s-.25,-h],[m,s-.25,-h],[m,s+p,n/2],[_,s+p,n/2],x,g),a.quad([m,s-.25,n+h],[_,s-.25,n+h],[_,s+p,n/2],[m,s+p,n/2],x,g)}let f=(v,m,_,T,E,y)=>{y<0?(c.quad([m,_,E],[v,_,E],[v,T,E],[m,T,E],M),c.quad([v,_,E],[m,_,E],[m,_,E+.08],[v,_,E+.08],M)):(c.quad([v,_,E],[m,_,E],[m,T,E],[v,T,E],M),c.quad([m,_,E],[v,_,E],[v,_,E-.08],[m,_,E-.08],M))};for(let[v,m]of[[-h,0],[n+h,n]])f(-t/2-h,t/2+h,s-.42,s-.22,v<0?v-.04:v+.04,v<0?-1:1),c.quad(v<0?[-t/2-h,s-.26,v]:[t/2+h,s-.26,v],v<0?[t/2+h,s-.26,v]:[-t/2-h,s-.26,v],v<0?[t/2+h,s-.26,m]:[-t/2-h,s-.26,m],v<0?[-t/2-h,s-.26,m]:[t/2+h,s-.26,m],An(Sm(e,o),.62));for(let v of[-1,1]){let m=v*(t/2+h+.02),_=.2,T=[m,s-.25,-h],E=[m,s+p,n/2],y=[m,s-.25,n+h],b=w=>[w[0],w[1]-_,w[2]];v>0?(c.quad(b(E),b(T),T,E,M),c.quad(b(y),b(E),E,y,M)):(c.quad(b(T),b(E),E,T,M),c.quad(b(E),b(y),y,E,M))}let d=Sm(e,o);if(wo(c,[-t/2,s,0],[-t/2,s,n],[-t/2,s+p-.1,n/2],d),wo(c,[t/2,s,n],[t/2,s,0],[t/2,s+p-.1,n/2],d),c.box(-t/2-h,s+p-.05,n/2-.15,t/2+h,s+p+.18,n/2+.15,u?pe("#f6f7fb"):pe("#3d4456")),u){c.box(-t/2-h-.05,s-.42,-h-.1,t/2+h+.05,s-.12,-h+.3,pe("#eef1f7")),c.box(-t/2-h-.05,s-.42,n+h-.3,t/2+h+.05,s-.12,n+h+.1,pe("#eef1f7"));for(let v=-t/2;v<t/2;v+=.45+r()*.5)c.cyl(v,s-.42-.35,-h+.02,0,.04,.35,4,pe("#dfe8f3"),!1)}return{RC:x,k:g,fascia:f,nS:S}}function YM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,p=2.9,g=o*p,x=-s/2,M=t()<.5,S=Math.max(2,Math.round(s/3)),l=s/S,f=[];for(let E=0;E<=o;E++)f.push(E*p);let d=M?fn:a;for(let E=0;E<o;E++)for(let y=0;y<S;y++){let b=M?"win4":"win0";E===0&&y===0?b="shop_house":b=is(b,t(),c),sn(u,x+y*l,x+(y+1)*l,f[E],f[E+1],0,b,b==="shop_house"?fn:d)}tl(u,s,r,f,M?pe("#9a7a62"):a,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,g,r],[-s/2,g,r],An(a,.75));let{RC:v,k:m,fascia:_,nS:T}=Vm(i,n,s,r,g,t,M);if(o>1){let E=p+.05;for(let y=0;y<T;y++){let b=-s/2-.1+(s+.2)*y/T,w=-s/2-.1+(s+.2)*(y+1)/T;u.quad([w,E-.3,-.75],[b,E-.3,-.75],[b,E+.05,0],[w,E+.05,0],v,m)}_(-s/2-.1,s/2+.1,E-.42,E-.28,-.79,-1)}if(n.fence){let E=-n.fence,y=1.2;for(let[b,w]of[[-s/2,-1],[.4,s/2]])h.box(b,0,E-.08,w,y,E+.08,Me.concrete),sn(u,b,w,0,y,E-.085,"block")}}function ZM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,h=i.color,p=3.4,g=o*p,x=Math.max(2,Math.round(s/6)),M=s/x,S=-s/2,l=t()<.5?"win3":"win2",f=[];for(let m=0;m<=o;m++)f.push(m*p);for(let m=0;m<o;m++)for(let _=0;_<x;_++)sn(u,S+_*M,S+(_+1)*M,f[m],f[m+1],0,is(l,t(),c),a);let d=Math.max(1,Math.round(r/6)),v=r/d;for(let m of[-1,1])for(let _=0;_<o;_++)for(let T=0;T<d;T++)(m>0?Vi:Gi)(u,m*s/2,T*v,(T+1)*v,f[_],f[_+1],is(l,t(),c),a);nl(h,s,r,g,t,!0)}function Gm(i,e,t){let n=i.color;n.setM(e);let s=t.pick([pe("#f2f2ee"),pe("#c9cdd2"),pe("#2b2f38"),pe("#b33a32"),pe("#9fc6c0"),pe("#e7d9b4"),pe("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,An(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,pe("#2a3346"));for(let[r,o]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,o-.11,r+.3,.6,o+.11,Me.black)}function dd(i,e,t,n){let s=i.color,r=pe("#8d9096"),o=pe("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let a=-n-.62,c=-n+.62;s.box(-.14,5.08,a,.14,5.56,c,o);let u=t*.141;i.atlas.setM(e),(t>0?Vi:Gi)(i.atlas,u,a,c,5.08,5.56,"signal");let h=t>0?c:a,p=t>0?-1:1;for(let x=0;x<3;x++){let M=h+p*(.2+x*.4);s.box(t>0?.14:-.36,5.47,M-.15,t>0?.36:-.14,5.5,M+.15,o)}let g=h+p*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,g-.11,t>0?.16:-.145,5.43,g+.11,fn)}function Wm(i,e,t,n){let s=i.color,r=pe("#3d6ea8"),o=pe("#e8eef2"),a=pe("#c7c5bf"),c=5.35;s.setM(e),s.box(-1.1,c-.65,-t,1.1,c,t,r);for(let u of[-1.1,1])s.box(u,c,-t,u+.1,c+1.1,t,o),s.box(u-.02,c+1.1,-t,u+.12,c+1.18,t,r);i.atlas.setM(e),Gi(i.atlas,-1.105,-2.2,2.2,c-.62,c-.06,n),Vi(i.atlas,1.105,-2.2,2.2,c-.62,c-.06,n),s.setM(e);for(let u of[-1,1]){let h=u*(t-1.65),p=u*(t-.15),g=Math.min(h,p),x=Math.max(h,p);s.box(-.45,.15,g+.3,.45,c-.65,x-.3,r);let M=20,S=(c-.15)/M;for(let l=0;l<M;l++)s.box(1.1+l*.3,.15,g,1.1+(l+1)*.3,c-(l+1)*S+.04,x,a);s.box(1.1,c-.1,g-.05,1.1+M*.3,c-.02,g+.05,r)}}function Xm(i,e,t,n,s,r,o){let a=i.color,c=1.22,u=3.55,h=6.7,p=pe("#c8c5bd"),g=pe("#ebe8de"),x=pe("#7a5a42"),M=pe("#5e4433"),S=pe("#4d5468");a.setM(e),a.box(t,-1.4,u,n,c,h,p,null,{noBottom:!0}),a.box(t,c,u,n,c+.025,u+.32,g),a.box(t,c,u+.6,n,c+.04,u+.9,Me.yellow);let l=Math.sign(s-(t+n)/2),f=l>0?n:t,d=f+l*6.2,v=u+.9,m=h-.2,_=(N,z,H)=>[N,z,H];l>0?a.quad(_(d,.1,m),_(d,.1,v),_(f,c,v),_(f,c,m),p):a.quad(_(d,.1,v),_(d,.1,m),_(f,c,m),_(f,c,v),p);for(let N of[v,m]){let z=pe("#9aa0a6");a.rod([d,.1+.9,N],[f,c+.9,N],.03,.03,5,z);for(let H=0;H<=3;H++){let Y=d+(f-d)*H/3,le=.1+(c-.1)*H/3;a.box(Y-.03,le,N-.03,Y+.03,le+.9,N+.03,z)}}i.atlas.setM(e);for(let N=t;N<n-.01;N+=3){let z=Math.min(n,N+3);i.atlas.quad([N,-.6,h+.004],[z,-.6,h+.004],[z,c,h+.004],[N,c,h+.004],pe("#d8d4ca"),Hi("concrete"))}a.setM(e);for(let N=t+.4;N<n;N+=2)a.box(N-.05,c,h-.12,N+.05,c+1,h-.02,pe("#8f949a"));for(let N of[.45,.95])a.box(t,c+N,h-.1,n,c+N+.06,h-.04,pe("#8f949a"));let T=n-t,E=N=>l>0?n-T*N:t+T*N,y=E(.47),b=y-2.3,w=y+2.3,A=u+1.35,P=h-.25;a.box(b,c,P-.12,w,c+2.45,P,x);for(let N of[b,w-.12])a.box(N,c,A+.6,N+.12,c+2.45,P,M);for(let N of[b,w-.12])a.box(N,c,A,N+.12,c+2.45,A+.12,M);a.quad([w+.4,c+2.5,A-.45],[b-.4,c+2.5,A-.45],[b-.4,c+2.85,P+.35],[w+.4,c+2.85,P+.35],S),a.quad([b-.4,c+2.42,A-.45],[w+.4,c+2.42,A-.45],[w+.4,c+2.77,P+.35],[b-.4,c+2.77,P+.35],pe("#3a3f50")),a.box(b+.3,c+.42,P-.55,w-.3,c+.48,P-.15,pe("#8a6a4a"));for(let N of[b+.4,w-.5])a.box(N,c,P-.5,N+.08,c+.42,P-.2,Me.metal);i.atlas.setM(e),i.atlas.quad([y-1.1,c+1.55,P+.005],[y+1.1,c+1.55,P+.005],[y+1.1,c+2.03,P+.005],[y-1.1,c+2.03,P+.005],fn,Hi("ekiplate"+r));let I=E(.2),R=u+1.6,L=1.25,D=c+1.25,O=D+.95;a.setM(e);for(let N of[I-L+.12,I+L-.12])a.cyl(N,c,R,.05,.05,O-c+.05,8,pe("#6b7078"));a.box(I-L,D-.03,R-.03,I+L,O+.03,R+.03,pe("#3a3d42")),i.atlas.setM(e),i.atlas.quad([I-L,D,R+.035],[I+L,D,R+.035],[I+L,O,R+.035],[I-L,O,R+.035],fn,Hi("ekimei"+r)),i.atlas.quad([I+L,D,R-.035],[I-L,D,R-.035],[I-L,O,R-.035],[I+L,O,R-.035],fn,Hi("ekimei"+r)),a.setM(e);let V=y-l*4.2;a.box(V-.9,c+.42,h-1.25,V+.9,c+.47,h-.85,pe("#3b6ea8")),a.box(V-.9,c+.47,h-.88,V+.9,c+.9,h-.83,pe("#3b6ea8"));for(let N of[V-.75,V+.7])a.box(N,c,h-1.2,N+.06,c+.42,h-.9,Me.metal);for(let N=t+3;N<n-1;N+=9)el(i,Wu(e,N,c,h-.45))}var $M=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(pe),KM=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(pe);function qm(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,Me.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let a=.28+r()*.34,c=.36+r()*.42,u=r.pick($M),h=s+(r()-.5)*.06;i.quad([o+a,n-c,h],[o,n-c,h],[o,n-.02,h],[o+a,n-.02,h],u),i.quad([o,n-c,h+.01],[o+a,n-c,h+.01],[o+a,n-.02,h+.01],[o,n-.02,h+.01],An(u,.85)),r()<.4&&i.box(o+a*.45,n-.02,h-.02,o+a*.55,n+.06,h+.02,pe("#d8d8d0")),o+=a+.06+r()*.22}}function JM(i,e,t,n,s,r){let o=r.pick(KM),a=.11;i.box(e,n-.02,s-a,t,n+.09,s+.22,o),i.box(e,n-.72,s-a,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-a-.004,t-.08,n-.42,s-a+.01,An(o,.86))}function Ym(i,e){let t=i.color,n=pe("#a19f97"),s=pe("#6b4a35"),r=pe("#4f4a44"),o=pe("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,pe("#8d8b84"));for(let a of[-.52,.48])for(let c of[-.36,.32])t.box(a,.32,c,a+.05,1.5,c+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,An(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let a of[-.32,.3])t.cyl(a,.32,-.18,.05,.06,.07,8,pe("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,pe("#5b8d3d"))}function Zm(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?Me.black:Me.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,Me.black),t.box(-.5,2.55,-.06,.5,2.95,.02,Me.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,Me.black);t.box(-.78,-.9,-.34,.3,0,.34,Me.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,pe("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,Me.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new et().multiplyMatrices(e,new et().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?Me.black:Me.yellow)}t.setM(e),i.atlas.setM(e),sn(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function $m(i,e){let t=i.color;t.setM(e);let n=Me.stone,s=An(Me.stone,1.06),r=An(Me.stone,.92);t.box(-.36,0,-.36,.36,.18,.36,r),t.box(-.26,.18,-.26,.26,.26,.26,n),t.box(-.13,.26,-.13,.13,1,.13,n),Eo(t,1,1.1,.16,.3,s,!0,!0),t.box(-.2,1.1,-.2,.2,1.48,.2,s),Eo(t,1.48,1.54,.25,.35,r,!1,!0),Eo(t,1.54,1.78,.35,.07,r),t.cyl(0,1.78,0,.07,.04,.1,6,n),t.cyl(0,1.88,0,.05,0,.08,6,n),i.lamp.setM(e),i.lamp.box(-.1,1.2,-.205,.1,1.38,-.195,fn),i.lamp.box(-.1,1.2,.195,.1,1.38,.205,fn)}function pd(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,Me.vermilion),s.cyl(0,0,r,.38,.38,.5,12,Me.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,Me.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,Me.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,Me.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,Me.vermilion)}function Km(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,pe("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,pe("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,pe("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,pe("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,Me.metal),n.box(1.1,0,.3,1.2,.42,.55,Me.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,Me.metal),i.atlas.setM(e),Gi(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Vi(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function Jm(i,e,t,n=1){let s=i.color;s.setM(e);let r=An(Me.concrete,.85+t()*.15),o=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],a=.55*n;for(let c of o)s.rod([0,a,0],[c[0]*.95*n,a+c[1]*.95*n,c[2]*.95*n],.42*n,.26*n,7,r)}function jm(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,pe("#8f8a80"),pe("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,Me.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,Me.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,Me.black),t.cyl(0,18.6,0,1,.25,1.2,12,Me.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,fn)}function Qm(i,e,t){let n=i.color;n.setM(e);let s=t.pick([pe("#f4f4f0"),pe("#3b6ea5"),pe("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),wo(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),wo(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,Me.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,Me.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,pe("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,Me.metal)}function eg(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,Me.stone),n.box(-.55,.5,.9,.55,1.5,1.8,pe("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],pe("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],pe("#4d5468")),pd(i,Wu(e,0,0,-.3,Math.PI/2),.75,2.2)}var Ro=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new _e(e):e)),ae={zenith:new _e,horizon:new _e,sunCol:new _e,sunI:1,hemiSky:new _e,hemiGround:new _e,hemiI:1,fog:new _e,cLit:new _e,cShade:new _e,cRim:new _e,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new k,moonDir:new k,lightDir:new k,sunEl:0};function ng(i){let e=0;for(;e<Ro.length-2&&Ro[e+1][0]<=i;)e++;let t=Ro[e],n=Ro[e+1],s=qa(kt((i-t[0])/(n[0]-t[0]),0,1)),r=(o,a)=>a.copy(t[o]).lerp(n[o],s);r(1,ae.zenith),r(2,ae.horizon),r(3,ae.sunCol),ae.sunI=Rt(t[4],n[4],s),r(5,ae.hemiSky),r(6,ae.hemiGround),ae.hemiI=Rt(t[7],n[7],s),r(8,ae.fog),r(9,ae.cLit),r(10,ae.cShade),r(11,ae.cRim),ae.night=Rt(t[12],n[12],s),ae.warm=Rt(t[13],n[13],s),ae.sunEl=ig(i,ae.sunDir,ae.moonDir,ae.lightDir)}function ig(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,kt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var QM=new k,eb=new k;function gd(i,e){return ig((i%1+1)%1,QM,eb,e),e}var tg={zenith:[new _e("#7b8594"),new _e("#141a28")],horizon:[new _e("#b5bcc6"),new _e("#283042")],fog:[new _e("#a8b0ba"),new _e("#232b3c")],hemiSky:[new _e("#aab3bf"),new _e("#3c4866")],hemiGround:[new _e("#8b8983"),new _e("#1e2030")],cLit:[new _e("#d0d5dc"),new _e("#2c3240")],cShade:[new _e("#7c8593"),new _e("#151922")]},md=new _e;function sg(i,e){if(ae.overcast=i,ae.rain=e,ae.bright=(1-ae.night)*(1-ae.warm)*(1-i),i<=.001)return;let t=ae.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])md.copy(tg[n][0]).lerp(tg[n][1],t),ae[n].lerp(md,i*(n==="cLit"||n==="cShade"?.75:.85));ae.sunI*=1-.82*i,ae.warm*=1-i,ae.cRim.multiplyScalar(1-i),ae.sunCol.lerp(md.setRGB(.85,.87,.9),i*.6)}function rg(){let i=new xt({side:Un,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ae.zenith},uHorizon:{value:ae.horizon},uSunDir:{value:ae.sunDir},uMoonDir:{value:ae.moonDir},uNoiseTex:Oe.uNoiseTex,uSunCol:{value:ae.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new _e},uOvercast:{value:0},uDeckLit:{value:new _e},uDeckDark:{value:new _e},uMilky:{value:0},uMetA:{value:new k(0,1,0)},uMetB:{value:new k(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright;
      varying vec3 vDir;
      ${Ei}
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
      }`}),e=new ht(new wa(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function tb(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let d=0;d<o;d++){let v=.06+i()*.05;t.push([(d/(o-1)-.5)*s+(i()-.5)*.03,.1+v*.5,(i()-.5)*.2,v])}let a=e?6:2,c=s*.82,u=.1+.09;for(let d=0;d<a;d++){let v=Math.max(1,Math.round(c/.11));for(let m=0;m<v;m++){let _=(v===1?0:m/(v-1)-.5)*c+(i()-.5)*.05+r*d;t.push([_,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,c*=e?.8:.66}let h=t.slice();for(let d of h){if(t.length>84)break;let v=1+Math.floor(i()*2);for(let m=0;m<v;m++){let _=.35+i()*2.4,T=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(_)*d[3]*.82,d[1]+Math.sin(_)*d[3]*.82,d[2]+.04,T])}}let p=t.slice(h.length);for(let d of h){if(d[1]<.1+.12||t.length>104)continue;let v=1+Math.floor(i()*2);for(let m=0;m<v;m++){let _=.3+i()*2.5,T=d[3]*(.3+i()*.4),E=d[3]*(.28+i()*.16);t.push([d[0]+Math.cos(_)*T,d[1]+Math.sin(_)*T,d[2]+Math.sqrt(d[3]*d[3]-T*T)-E*.6,E])}}for(let d of p){if(t.length>124)break;let v=1+Math.floor(i()*2);for(let m=0;m<v;m++){let _=.2+i()*2.7,T=d[3]*(.38+i()*.2);t.push([d[0]+Math.cos(_)*d[3]*.85,d[1]+Math.sin(_)*d[3]*.85,d[2]+.02,T])}}let g=t.slice(0,128),x=1e9,M=-1e9,S=-1e9;for(let d of g)x=Math.min(x,d[0]-d[3]*1.12),M=Math.max(M,d[0]+d[3]*1.12),S=Math.max(S,d[1]+d[3]*1.12);let l=Math.min(1,.92/(M-x),(.95-.1)/(S-.1)),f=(x+M)/2;for(let d of g)d[0]=(d[0]-f)*l,d[1]=.1+(d[1]-.1)*l,d[3]*=l;return g}function og(i){let t={value:Array.from({length:128},()=>new gt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new xt({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:Oe.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Ei}
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
      }`,depthTest:!1,depthWrite:!1,blending:ei}),r=new zt(1024,1024,{generateMipmaps:!0,minFilter:Tn,magFilter:Lt,depthBuffer:!1}),o=new xt({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:Oe.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${Ei}
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
      }`,depthTest:!1,depthWrite:!1,blending:ei}),a=new ht(new jt(1,1),s),c=new cr,u=new fs;c.add(a);let h=new zt(1024*2,1024*2,{generateMipmaps:!0,minFilter:Tn,magFilter:Lt}),p=i.getRenderTarget(),g=i.autoClear,x=Zt(99);i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let M=[];for(let S=0;S<4;S++){let l=S%2===0,f=tb(x,l);f.forEach((d,v)=>t.value[v].set(d[0],d[1],d[2],d[3])),s.uniforms.uN.value=f.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=S*13.7,a.material=s,i.setRenderTarget(r),i.render(c,u),a.material=o,h.viewport.set(S%2*1024,Math.floor(S/2)*1024,1024,1024),i.setRenderTarget(h),i.render(c,u),M.push({cell:[S%2,Math.floor(S/2)],tall:l})}return h.viewport.set(0,0,1024*2,1024*2),i.autoClear=g,i.setRenderTarget(p),s.dispose(),o.dispose(),r.dispose(),a.geometry.dispose(),{tex:h.texture,kinds:M,rt:h}}function ag(i){let e=Zt(5),t=22,n=[],s=new jt(1,1);s.translate(0,.5,0);let r=new Sn(new Float32Array(t*4),4),o=new Sn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let a=new xt({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new _e},uShade:{value:ae.cShade},uRim:{value:ae.cRim},uHaze:{value:ae.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),c=new Bi(s,a,t);c.frustumCulled=!1,c.renderOrder=-5;for(let M=0;M<t;M++){let S=M<12,l=i.kinds[(M*3+(S?0:1))%i.kinds.length],f=S?l.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:M/t*Math.PI*2+e.range(-.15,.15),d:S?e.range(2600,3400):e.range(1300,2200),base:S?e.range(-60,60):e.range(260,700),size:f,cell:l.cell,haze:S?.45:.18})}let u=new et,h=new _n,p=new k,g=new k,x=new k(0,1,0);return{group:c,update(M,S){let l=Math.atan2(ae.lightDir.x,ae.lightDir.z);for(let d of n)d.phi+=S*1.2/d.d;n.slice().sort((d,v)=>v.d-d.d).forEach((d,v)=>{p.set(M.x+Math.sin(d.phi)*d.d,M.y+d.base,M.z+Math.cos(d.phi)*d.d),h.setFromAxisAngle(x,d.phi+Math.PI),g.set(d.size,d.size,1),u.compose(p,h,g),c.setMatrixAt(v,u);let m=l-d.phi;m=Math.atan2(Math.sin(m),Math.cos(m));let _=Math.max(0,Math.min(1,(m+.35)/.7)),T=1-_*_*(3-2*_);r.setXYZW(v,d.cell[0],d.cell[1],T,d.haze),o.setX(v,.35+.9*Math.pow(Math.max(Math.cos(m),0),3)*(.4+ae.warm))}),c.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,a.uniforms.uOpacity.value=(1-ae.night*.35)*(1-ae.overcast*.55)*(1-.85*ae.rain),a.uniforms.uLit.value.copy(ae.cLit).multiplyScalar(1+.35*ae.bright)}}}function lg(){let i=new nn;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],a=[];for(let p=0;p<=360;p++){let g=p/360*Math.PI*2,x=Math.sin(g)*t.R,M=Math.cos(g)*t.R,S=Ru(p/360*t.k*4,40+n*9),l=Math.pow(Math.max(0,S-.18)/.82,1.6),f=t.h*(.12+l);if(r.push(x,-60,M,x,-60+f,M),o.push(0,p/360,1,p/360),p<360){let d=p*2;a.push(d,d+1,d+2,d+1,d+3,d+2)}}let c=new yt;c.setAttribute("position",new Ze(r,3)),c.setAttribute("hf",new Ze(o,2)),c.setIndex(a);let u=new xt({side:mn,fog:!1,uniforms:{uCol:{value:new _e(t.col)},uHaze:{value:ae.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:Oe.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Ei}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),h=new ht(c,u);h.frustumCulled=!1,h.renderOrder=999,i.add(h)}),{group:i,update(t,n=0,s=1){if(i.visible=s>.002,!i.visible)return;i.position.set(t.x,0,t.z),i.scale.y=Math.min(1,s);for(let o of i.children)o.material.uniforms.uSnow.value=n;let r=(.35+.65*(1-ae.night))*(1-.35*ae.overcast);for(let o of i.children)o.material.uniforms.uLight.value=r}}}var Zu="./assets/",cg=`
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
}`,ug={value:new Pe(1280,720)};function hg(i){i.getDrawingBufferSize(ug.value)}function fg(i){let e=i.grade.uniforms;return{toneMappingExposure:e.toneMappingExposure,uSat:e.uSat,uVig:e.uVig,uDay:e.uDay,uLo:e.uLo,uGRes:ug}}async function dg(i,e,t){let n=e.files[t]?t:"hi",s=await fetch(i+e.files[n]);if(!s.ok)throw new Error(e.files[n]+" "+s.status);let r=await s.blob();if(e.bytes&&e.bytes[n]&&r.size!==e.bytes[n])throw new Error(e.files[n]+" is "+r.size+" bytes, not "+e.bytes[n]);let o=URL.createObjectURL(r),a;try{a=await new Ca().loadAsync(o)}catch(c){throw URL.revokeObjectURL(o),c}return a.onUpdate=()=>{URL.revokeObjectURL(o),a.onUpdate=null},a.colorSpace=ti,a.generateMipmaps=!0,a.minFilter=Tn,a.magFilter=Lt,{tex:a,file:n}}async function $u(i,e,t){let n,s=new Promise(r=>{n=setTimeout(()=>r(null),e)});try{return await Promise.race([i,s])}catch(r){return console.warn(t,r.message||r),null}finally{clearTimeout(n)}}async function pg(i,e=15e3){let t=Zu+"clouds/";return $u((async()=>{let n=await fetch(t+"clouds.json");if(!n.ok)throw new Error("clouds.json "+n.status);let s=await n.json(),r=(s.clouds||[]).filter(a=>a.u1>a.u0&&a.v1>a.v0&&a.w>0&&a.h>0&&a.lum&&a.lum[1]>a.lum[0]);if(!r.length)throw new Error("no clouds listed");let{tex:o}=await dg(t,s,i);return{tex:o,list:r,tier:i}})(),e,"painted clouds unavailable, keeping the procedural ones:")}var qu=[["tower",10,[4300,4800],[-1.6,-.4],[22,33],["tower"],.3],["bank",8,[4820,4960],[-1.2,.2],[5,8.5],["wide","mid"],.42],["mid",8,[3500,4200],[-1,2],[9,15],["mid","wide","tower"],.26],["high",7,[2300,3200],[11,27],[6,11],["mid","wide","tower"],0]],nb=140*Math.PI/180,Yu=Math.PI/180,Zs=i=>Math.atan2(Math.sin(i),Math.cos(i));function ib(i,e){let t=Zt(e),n=[],s=t()*Math.PI*2,r=Math.PI*2/qu[0][1];for(let[c,u,h,p,g,x,M]of qu)for(let S=0;S<u;S++){let l;c==="tower"?l=s+S*r+t.range(-.22,.22)*r:c==="mid"?l=s+(S+.5)*r*(qu[0][1]/u)+t.range(-.2,.2)*r:c==="high"?l=s+(S*(qu[0][1]/u)+.5)*r+t.range(-.3,.3)*r:l=s+(S+t())/u*Math.PI*2,n.push({role:c,kinds:x,phi:l,d:t.range(h[0],h[1]),e0:t.range(p[0],p[1])*Yu,ah:t.range(g[0],g[1])*Yu,haze:M,k:-1,flip:!1})}let o=i.map(()=>[]),a=n.map((c,u)=>u);for(let c=a.length-1;c>0;c--){let u=Math.floor(t()*(c+1)),h=a[c];a[c]=a[u],a[u]=h}for(let c of a){let u=n[c],h=-1,p=1e9;i.forEach((g,x)=>{let M=u.kinds.indexOf(g.kind);if(M<0)return;let l=(o[x].some(f=>Math.abs(Zs(f-u.phi))<nb)?1e3:0)+o[x].length*10+M*4+t();l<p&&(p=l,h=x)}),h<0&&(h=Math.floor(t()*i.length)),u.k=h,o[h].push(u.phi)}for(let c of n){let u=i[c.k],h=c.d*Math.tan(c.e0);c.y0=h,c.h=c.d*Math.tan(c.e0+c.ah)-h,c.w=c.h*u.w/u.h,c.half=Math.atan2(c.w/2,c.d)}return n.sort((c,u)=>u.d-c.d)}function mg(i,e,t=5){let n=i.list,s=ib(n,t),r=s.length,o=new jt(1,1);o.translate(0,.5,0);let a=new Sn(new Float32Array(r*4),4),c=new Sn(new Float32Array(r*4),4),u=new Sn(new Float32Array(r),1);o.setAttribute("aRect",a),o.setAttribute("aInfo",c),o.setAttribute("aRim",u),s.forEach((_,T)=>{let E=n[_.k];a.setXYZW(T,E.u0,E.v0,E.u1-E.u0,E.v1-E.v0),c.setXYZW(T,0,E.lum[0],1/Math.max(.05,E.lum[1]-E.lum[0]),_.haze)});let h=new xt({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new _e},uShade:{value:ae.cShade},uRimCol:{value:ae.cRim},uHaze:{value:ae.horizon},uPaint:{value:1},uOpacity:{value:1},uRimLod:{value:i.tier==="hi"?3:2},...fg(e)},vertexShader:`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:cg+`
      uniform sampler2D map; uniform vec3 uLit, uShade, uRimCol, uHaze; uniform float uPaint, uOpacity, uRimLod;
      varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vec4 t = texture2D(map, vUv);
        if (t.a < 0.004) discard;
        vec3 c = vec3(0.0);
        if (uPaint < 0.999) { // the time-of-day palette, keeping the brushwork (the painted luminance) and a silver lining
          float k = clamp((dot(t.rgb, vec3(0.299, 0.587, 0.114)) - vInfo.y) * vInfo.z, 0.0, 1.0);
          float rim = 1.0 - smoothstep(0.35, 0.95, textureLod(map, vUv, uRimLod).a);
          c = mix(uShade, uLit, k) + uRimCol * rim * smoothstep(0.35, 0.8, k) * vRim;
        }
        if (uPaint > 0.001) c = mix(c, clamp(ungrade(t.rgb), 0.0, 2.0), uPaint); // a bright day: the painting itself
        c = mix(c, uHaze, vInfo.w * (1.0 - smoothstep(0.0, 0.45, vY)));         // the far feet melt into the horizon haze
        gl_FragColor = vec4(c, 1.0) * (t.a * uOpacity);
      }`}),p=new Bi(o,h,r);p.frustumCulled=!1,p.renderOrder=-5;let g=new et,x=new _n,M=new k,S=new k,l=new k(0,1,0),f=new k,d=!0;function v(_,T){let E=s.filter(R=>R.role==="tower").sort((R,L)=>Zs(R.phi-_)-Zs(L.phi-_)),y=null,b=1e9;for(let R=0;R<E.length;R++){let L=E[R],D=E[(R+1)%E.length],O=T==="center"?L.phi:L.phi+Zs(D.phi-L.phi)/2,V=Math.abs(Zs(O-_));V<b&&(b=V,y=T==="center"?[L,L,O]:[L,D,O])}if(!y)return;let[w,A,P]=y,I=Zs(_-P);for(let R of s)R.phi+=I;for(let R of new Set([w,A])){let L=Math.max(R.ah,31*Yu),D=R.d*Math.tan(R.e0+L)-R.y0;R.w*=D/R.h,R.h=D,R.ah=L,R.half=Math.atan2(R.w/2,R.d)}}let m={mesh:p,count:r,opening:"flank",layout:s,update(_,T){let E=_.position,y=Math.atan2(ae.lightDir.x,ae.lightDir.z);_.getWorldDirection(f);let b=Math.atan2(f.x,f.z),w=Math.atan(Math.tan(_.fov*Yu/2)*_.aspect);d&&v(b,m.opening);for(let P=0;P<r;P++){let I=s[P];I.phi+=T*1.2/I.d,M.set(E.x+Math.sin(I.phi)*I.d,E.y+I.y0,E.z+Math.cos(I.phi)*I.d),x.setFromAxisAngle(l,I.phi+Math.PI),S.set(I.w,I.h,1),g.compose(M,x,S),p.setMatrixAt(P,g);let R=Zs(y-I.phi),L=R>0!==n[I.k].litLeft;L!==I.flip&&Math.abs(Math.sin(R))>.2&&(d||Math.abs(Zs(I.phi-b))>w+I.half+.05)&&(I.flip=L),c.setX(P,I.flip?1:0);let D=Math.max(Math.cos(R),0);u.setX(P,.35+.9*D*D*D*(.4+ae.warm))}d=!1,p.instanceMatrix.needsUpdate=!0,c.needsUpdate=!0,u.needsUpdate=!0;let A=h.uniforms;{let P=Math.min(Math.max((ae.bright-.55)/.4,0),1);A.uPaint.value=P*P*(3-2*P)}A.uLit.value.copy(ae.cLit).multiplyScalar(1+.35*ae.bright),A.uOpacity.value=(1-ae.night*.35)*(1-ae.overcast*.55)*(1-.85*ae.rain)}};return m}async function gg(i,e=15e3){let t=Zu+"band/";return $u((async()=>{let n=await fetch(t+"band.json");if(!n.ok)throw new Error("band.json "+n.status);let s=await n.json(),{tex:r,file:o}=await dg(t,s,i),a={};for(let[c,u]of Object.entries(s.zones&&s.zones[o]||{}))u.v1>u.v0&&u.e1>u.e0&&(a[c]=new gt(u.v0,u.v1,Math.tan(u.e0*Math.PI/180),Math.tan(u.e1*Math.PI/180)));if(!Object.keys(a).length)throw new Error("no zones listed");return r.wrapS=Cs,{tex:r,zones:a,period:s.period||120,tier:o}})(),e,"painted horizon unavailable, keeping the mountain rings:")}var il=2500,sb=-8,Er=new k,Ys=new _e,vd=new _e("#fff5dd").multiplyScalar(3.35),xd=new _e("#8fb1ec").multiplyScalar(1.35*2);function vg(i,e,t){let n=i.zones,s=Math.max(...Object.values(n).map(m=>m.w)),r=192,o=360/i.period,a=new Float32Array((r+1)*6),c=new Float32Array((r+1)*4),u=[],h=Math.tan(sb*Math.PI/180),p=s+.004;for(let m=0;m<=r;m++){let _=m/r*Math.PI*2,T=Math.sin(_)*il,E=Math.cos(_)*il;if(a.set([T,h*il,E,T,p*il,E],m*6),c.set([-(m/r)*o,h,-(m/r)*o,p],m*4),m<r){let y=m*2;u.push(y,y+2,y+1,y+1,y+2,y+3)}}let g=new yt;g.setAttribute("position",new Ut(a,3)),g.setAttribute("uv",new Ut(c,2)),g.setIndex(u);let x=Math.PI/180,M=(e.composer.readBuffer.samples||0)>0,S=new xt({fog:!1,side:mn,alphaToCoverage:M,defines:M?{A2C:1}:{},uniforms:{map:{value:i.tex},uRowA:{value:new gt},uRowB:{value:new gt},uMix:{value:0},uAlpha:{value:1},uRot:{value:0},uLightC:{value:new _e(1,1,1)},uPaint:{value:1},uFogC:{value:t},uHaze:{value:0},uHz:{value:Math.tan(.8*x)},uGnd:{value:new k(2.8,.0014,700)},uSpan:{value:new Pe(h,p)},...fg(e)},vertexShader:`
      uniform vec2 uSpan; varying vec2 vUv;
      void main(){
        float y = uv.y > 0.0 ? uSpan.y : uSpan.x; vUv = vec2(uv.x, y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, y * ${il.toFixed(1)}, position.z, 1.0);
      }`,fragmentShader:cg+`
      uniform sampler2D map; uniform vec4 uRowA, uRowB; uniform float uMix, uAlpha, uRot, uHaze, uHz, uPaint; uniform vec3 uLightC, uFogC, uGnd;
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
        // a bright day: the painting itself; otherwise its colours relit (a plain linear relight, bounded: the inverse grade
        // would blow its pale peaks up past the bloom threshold at dusk)
        vec3 c = pgSrgbToLin(t.rgb) * 0.8 * uLightC;
        if (uPaint > 0.001) c = mix(c, ungrade(t.rgb), uPaint);
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
      }`}),l=new ht(g,S);l.frustumCulled=!1,l.renderOrder=999;let f=S.uniforms,d=new k,v=!0;return{mesh:l,zones:n,hero:.125,update(m,_,T=2.8,E=.0014,y=700){let b=n[_.a],w=n[_.b],A=_.t,P=0;if(b&&w?(f.uRowA.value.copy(b),f.uRowB.value.copy(w),f.uMix.value=b===w?0:A,P=1):(b||w)&&(f.uRowA.value.copy(b||w),f.uMix.value=0,P=b?1-A:A),f.uAlpha.value=P,l.visible=P>.002,!l.visible)return 0;l.position.copy(m.position),f.uGnd.value.set(T,E,y),f.uSpan.value.set(Math.max(h,-Math.tan(Math.atan(T/140)+.3*x)),Math.max(b?b.w:0,w?w.w:0)+.003),v&&(m.getWorldDirection(d),f.uRot.value=this.hero+Math.atan2(d.x,d.z)/(Math.PI*2)*o,v=!1),Ys.copy(ae.sunCol).multiplyScalar(ae.sunI),Er.set(Ys.r,Ys.g,Ys.b),Ys.copy(ae.hemiSky).multiplyScalar(ae.hemiI*2),Er.x+=Ys.r,Er.y+=Ys.g,Er.z+=Ys.b;let I=Math.min(Math.max((ae.bright-.55)/.4,0),1),R=I*I*(3-2*I);f.uLightC.value.setRGB(Er.x/(vd.r+xd.r),Er.y/(vd.g+xd.g),Er.z/(vd.b+xd.b)),f.uPaint.value=R;let L=Math.max(4*f.uMix.value*(1-f.uMix.value),Math.min(1,2*(1-P))),D=M?0:.45*L*L*L;return f.uHaze.value=1-(1-(1-(1-.12*ae.warm-.25*ae.night)*(1-.55*ae.overcast)*(1-.6*ae.rain))*(1-R))*(1-D),P}}}async function rb(i){let e=new Uint8Array(i),t=new DataView(i),n=[137,80,78,71,13,10,26,10];if(e.length<33||n.some((g,x)=>e[x]!==g))throw new Error("not a PNG");let s=8,r=0,o=0,a=[];for(;s+12<=e.length;){let g=t.getUint32(s),x=String.fromCharCode(e[s+4],e[s+5],e[s+6],e[s+7]);if(s+12+g>e.length)throw new Error("PNG truncated");if(x==="IHDR"){if(r=t.getUint32(s+8),o=t.getUint32(s+12),e[s+16]!==8||e[s+17]!==6||e[s+20]!==0)throw new Error("PNG is not 8-bit RGBA")}else if(x==="IDAT")a.push(e.subarray(s+8,s+8+g));else if(x==="IEND")break;s+=12+g}if(!r||!o||!a.length)throw new Error("PNG has no image");let c=new Uint8Array(await new Response(new Blob(a).stream().pipeThrough(new DecompressionStream("deflate"))).arrayBuffer()),u=r*4,h=new Uint8Array(u*o),p=new Uint8Array(u);if(c.length<(u+1)*o)throw new Error("PNG data short");for(let g=0;g<o;g++){let x=c[g*(u+1)],M=g*(u+1)+1,S=(o-1-g)*u,l=g?h.subarray(S+u,S+2*u):p,f=h.subarray(S,S+u),d=c.subarray(M,M+u);if(x===0)f.set(d);else if(x===1){for(let v=0;v<4;v++)f[v]=d[v];for(let v=4;v<u;v++)f[v]=d[v]+f[v-4]}else if(x===2)for(let v=0;v<u;v++)f[v]=d[v]+l[v];else if(x===3){for(let v=0;v<4;v++)f[v]=d[v]+(l[v]>>1);for(let v=4;v<u;v++)f[v]=d[v]+(f[v-4]+l[v]>>1)}else if(x===4){for(let v=0;v<4;v++)f[v]=d[v]+l[v];for(let v=4;v<u;v++){let m=f[v-4],_=l[v],T=l[v-4],E=Math.abs(_-T),y=Math.abs(m-T),b=Math.abs(m+_-T-T);f[v]=d[v]+(E<=y&&E<=b?m:y<=b?_:T)}}else throw new Error("PNG filter "+x)}return{w:r,h:o,data:h}}function ob(i,e,t,n,s,r=.5){let o=[{data:t,width:i,height:e}],a=Math.floor(r*255)+1,c=new Uint32Array(256),u=[],h=(M,S,l,f,d,v)=>{c.fill(0);for(let m=0;m<v;m++){let _=((f+m)*S+l)*4+3;for(let T=0;T<d;T++)c[M[_+T*4]]++}};for(let M=0;M<s;M++)for(let S=0;S<n;S++){let l=i/n,f=e/s;h(t,i,S*l,M*f,l,f);let d=0;for(let v=a;v<256;v++)d+=c[v];u.push(d/(l*f))}let p=i,g=e,x=t;for(;p>1&&g>1;){let M=p>>1,S=g>>1,l=new Uint8Array(M*S*4),f=p*4;for(let m=0;m<S;m++){let _=m*2*f,T=m*M*4;for(let E=0;E<M;E++,_+=8)for(let y=0;y<4;y++,T++)l[T]=x[_+y]+x[_+y+4]+x[_+y+f]+x[_+y+f+4]+2>>2}let d=M/n,v=S/s;if(d>=2&&v>=2&&d===Math.floor(d)&&v===Math.floor(v))for(let m=0;m<s;m++)for(let _=0;_<n;_++){h(l,M,_*d,m*v,d,v);let T=Math.round(u[m*n+_]*d*v),E=255,y=c[255];for(;E>1&&y<T;)y+=c[--E];let b=T>0?Math.min(6,Math.max(.5,a/E)):1;if(b!==1)for(let w=0;w<v;w++){let A=((m*v+w)*M+_*d)*4+3;for(let P=0;P<d;P++)l[A+P*4]=Math.min(255,Math.round(l[A+P*4]*b))}}o.push({data:l,width:M,height:S}),x=l,p=M,g=S}return o}async function xg(i,e=15e3){let t=Zu+"trees/";return $u((async()=>{if(typeof DecompressionStream>"u")throw new Error("no DecompressionStream");let n=await fetch(t+"crowns.json");if(!n.ok)throw new Error("crowns.json "+n.status);let s=await n.json(),r=s.files[i]?i:"hi",o=await fetch(t+s.files[r]);if(!o.ok)throw new Error(s.files[r]+" "+o.status);let a=await o.arrayBuffer();if(s.bytes&&s.bytes[r]&&a.byteLength!==s.bytes[r])throw new Error(s.files[r]+" is "+a.byteLength+" bytes, not "+s.bytes[r]);let c=await rb(a),u=s.cols,h=s.rows;if(!(u>0&&h>0)||c.w%u||c.h%h)throw new Error("bad atlas layout");let p=(s.cells||[]).filter(M=>M.col<u&&M.row<h).map(M=>{let S=.5/c.w,l=.5/c.h;return{kind:M.kind,u0:M.col/u+S,u1:(M.col+1)/u-S,v0:1-(M.row+1)/h+l,v1:1-M.row/h-l}});if(!p.some(M=>M.kind==="leaf"))throw new Error("no leaf clusters listed");let g=ob(c.w,c.h,c.data,u,h,.5),x=new Fi(c.data,c.w,c.h,Xn);return x.mipmaps=g,x.generateMipmaps=!1,x.minFilter=Tn,x.magFilter=Lt,x.colorSpace=ti,x.needsUpdate=!0,{tex:x,cells:p,tier:r}})(),e,"painted tree crowns unavailable, keeping the card crowns:")}var Ht=60,_d=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],_g=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],yg=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],yd=32,sl=[.025,.026,.032],Mg=[.05,.05,.065],bg=new et,xs=(i,e)=>(i%e+e)%e,_s=(i,e)=>{let t=Hs(i);return!!t&&Math.abs(i-t.s)<e},Md=(i,e)=>Math.abs(i-Math.round(i/150)*150)<e,Xi=(i,e)=>{let t=Ti(i);return!!t&&Math.abs(i-t.s)<e},ni=(i,e)=>{let t=Si(i);return!!t&&Math.abs(i-t.s)<e},bd=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=n(r,o);this.P.push(a[0],a[1],a[2]),this.N.push(a[3],a[4],a[5]),this.SU.push(a[6],a[7]),this.ZW.push(a[8],a[9],a[10],a[11]),this.RK.push(a[12],a[13]),this.RV.push(a[14]||0),this.ZS.push(a[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let a=s+r*t+o,c=a+1,u=a+t,h=u+1;this.I.push(a,c,u,c,h,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,a=new Array(e*o);for(let u=0;u<e;u++)for(let h=0;h<o;h++)a[u*o+h]=n(u,h-s);let c=(u,h)=>a[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,h))];for(let u=0;u<e;u++)for(let h=s;h<s+t;h++){let p=c(u,h-1),g=c(u,h+1),x=c(u-1,h),M=c(u+1,h),S=a[u*o+h],l=g[0]-p[0],f=g[1]-p[1],d=g[2]-p[2],v=M[0]-x[0],m=M[1]-x[1],_=M[2]-x[2],T=f*_-d*m,E=d*v-l*_,y=l*m-f*v;E<0&&(T=-T,E=-E,y=-y);let b=Math.hypot(T,E,y)||1;S[3]=T/b,S[4]=E/b,S[5]=y/b}this.grid(e,t,(u,h)=>a[u*o+h+s])}build(){let e=new yt;return e.setAttribute("position",new Ze(this.P,3)),e.setAttribute("normal",new Ze(this.N,3)),e.setAttribute("su",new Ze(this.SU,2)),e.setAttribute("zw",new Ze(this.ZW,4)),e.setAttribute("rk",new Ze(this.RK,2)),e.setAttribute("rv",new Ze(this.RV,1)),e.setAttribute("zs",new Ze(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},Ku=class{constructor(e,t,n,s,r){this.path=t,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new nn,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Ht),s=Math.floor((e+this.ahead)/Ht);for(let[o,a]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(a),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let a=o.pending.shift();a&&o.group.add(a),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let a=-1;for(let c=Math.max(0,n);c<=s;c++)if(!this.chunks.has(c)){a=c;break}if(a<0)return 0;a*Ht-e<320&&(t=Math.max(t,12)),this.job={c:a,it:this.gen(a)}}let o=this.job.it.next();if(o.done){let a=o.value;a.pending=a.group.children.slice(),a.group.clear(),this.chunks.set(this.job.c,a),this.group.add(a.group),this.reveal.push(a),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let a=o*Ht-e,c=r.group.children;for(let u=0;u<c.length;u++){let h=c[u],p=h.userData.detail;p&&(h.visible=p==="leaf"?a<s:a<t||n&&p==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Ht,s=n+Ht,r=t.at(n),o=r.x,a=r.z,c=Zt(Math.floor(Yn(e,777)*4294967295)),u={atlas:new cn({uv:!0,ao:!0,lit:!0}),color:new cn({ao:!0}),foliage:new cn,leaf:new cn({uv:!0}),lamp:new cn({color:!1}),sig:new cn({color:!1}),sodium:new cn({color:!1}),decal:new cn({uv:!0}),pool:new cn({uv:!0,color:!1}),gleaf:new cn({uv:!0,off:!0}),gblossom:new cn({uv:!0,off:!0})},h=new bd,p=[],g=[];u.lamps=[];let x={},M={},S=(w,A)=>{t.at(w,M);let P=In(w,"rw");return M.y+Vs(w,A,M.y,P)},l=w=>{let A=Dt(w);return[A.city,A.sakura,A.coast,A.country,A.snow]},f=(w,A,P)=>(t.at(w,x),[x.x+x.rx*A-o,P,x.z+x.rz*A-a]),d=(w,A,P,I=0,R=!0)=>{t.at(w,x);let L=x.h-Math.PI/2+(R&&A<0?Math.PI:0)+I,D=new et().makeRotationY(L);return D.setPosition(x.x+x.rx*A-o,P,x.z+x.rz*A-a),D.groundY=P,D},v=(w,A,P=0,I=0,R=!0)=>{let L=S(w,A),D=d(w,A,L+P,I,R);return D.groundY=L,D},m=w=>t.at(w,M).y,_=w=>In(w,"rw"),T=w=>{let A=Dt(w);return A.city+A.sakura>.5?A.city>=A.sakura?3:2.6:0};{let w=Si(n+Ht/2),A=!!w&&w.s>n-40&&w.s<s+40,P=A?61:21,I=_(n+Ht/2),R=(()=>{let Y=[0,..._g].map(le=>le);return yg.forEach(le=>Y.push(le-I)),Y})(),L=[...R.slice().reverse().map(H=>-H),...R],D=L.length,O=Array.from({length:P},(H,Y)=>n+Y/(P-1)*Ht);{let H=Ti(n+Ht/2);if(H)for(let Y of[H.s-hn,H.s+hn])Y>n+.1&&Y<s-.1&&O.push(Y-.03,Y+.03)}O.sort((H,Y)=>H-Y);let V=D/2,N=O.map(H=>(t.at(H,x),{s:H,f:{...x},rw:_(H),w:l(H),rb:A?Xp(H):0})),z=Math.round(V/2);for(let[H,Y,le,ze]of[[0,z,0,1],[z-1,V,1,0],[V,V+z+1,0,1],[V+z,D,1,0]])h.gridN(N.length,Y-H,(Be,ye)=>{let $=N[Be],J=$.f,xe=H+ye,ve=L[xe],Ee=ve<0||ve===0&&xe<V?ve-$.rw:ve+$.rw,We=J.y+Vs($.s,Ee,J.y,$.rw),Ne=Math.abs(Ee)>$.rw+.98?Math.min(1,Pu/.5):0;return[J.x+J.rx*Ee-o,We,J.z+J.rz*Ee-a,0,1,0,xs($.s,ds),Ee,$.w[0],$.w[1],$.w[2],$.w[3],$.rw,0,$.rb>0?$.rb:-Ne,$.w[4]]},le,ze),yield}yield,h.grid(31,2,(A,P)=>{let I=n+A/30*Ht,R=_(I),L=P?R:-R;t.at(I,x);let D=x.y,O=(m(I+1)-m(I-1))/2,V=-O*x.fx,N=1,z=-O*x.fz,H=Math.hypot(V,N,z),Y=l(I);return[x.x+x.rx*L-o,D,x.z+x.rz*L-a,V/H,N/H,z/H,xs(I,ds),L,Y[0],Y[1],Y[2],Y[3],R,1,0,Y[4]]});{let w=[];for(let I=0;I<=30;I++){let R=n+I/30*Ht;w.push({s:R,sw:T(R)})}let A=[],P=null;for(let I of w)I.sw>0?(P||(P=[],A.push(P)),P.push(I)):P=null;for(let I of A)if(!(I.length<2))for(let R of[-1,1])h.grid(I.length,2,(L,D)=>{let{s:O,sw:V}=I[L],N=_(O),z=R*(D===(R>0?0:1)?N:N+V);t.at(O,x);let H=l(O);return[x.x+x.rx*z-o,x.y+.15,x.z+x.rz*z-a,0,1,0,xs(O,ds),z,H[0],H[1],H[2],H[3],N,2,0,H[4]]}),h.grid(I.length,2,(L,D)=>{let{s:O}=I[L],V=_(O),N=R*V,z=R>0?D:1-D;t.at(O,x);let H=l(O);return[x.x+x.rx*N-o,x.y+(z?.15:0),x.z+x.rz*N-a,-R*x.rx,0,-R*x.rz,xs(O,ds),N,H[0],H[1],H[2],H[3],V,3,0,H[4]]})}yield,yield*this.placePoles(e,n,s,c,u,d,S,f,m,_);{let w=Math.ceil((n-yr)/_r),A=Mo(w);A<s&&$a(A)&&(yield*this.placeCrossing(u,h,A,d,m,_,S,T,o,a));let P=Math.ceil((n-bo)/Mr),I=Xf(P);I<s&&qf(I)&&(yield*this.placeRiver(u,h,I,d,m,_,S,T,o,a,c,g));let R=Ti(n+Ht/2);R&&R.s+ln>n&&R.s-ln<s&&(yield*this.placeTunnel(u,h,R,n,s,d,v,S,_,o,a,c))}yield;for(let w=n;w<s;w+=4){let A=Qt(w);(A==="coast"&&Dt(w).coast>.45||A==="mountain"&&Dt(w).mountain>.45)&&!Xi(w+2,ln+4)&&this.guardrail(u,w,Math.min(w+4,s),f,m,_)}yield*this.placeCity(u,c,n,s,d,v,m,_,T,S,h,o,a),yield*this.placeSakura(u,c,n,s,d,v,m,_,S),this.placeCoast(u,c,n,s,d,v,m,_,S,p,f),yield,yield*this.placeCountry(u,c,n,s,d,v,m,_,S),yield*this.placeMountain(u,c,n,s,d,v,m,_,S),yield*this.placeSnow(u,c,n,s,d,v,m,_,S),yield*this.placeVerge(u,c,n,s,d,S,_,e,o,a),yield;let E=new nn,y=(w,A,P,I,R=0,L)=>{if(!w)return null;let D=new ht(w,A);return D.castShadow=P,D.receiveShadow=I,D.renderOrder=R,L&&(D.userData.detail=L),E.add(D),D},b=new Set;for(let w of[n,n+20,n+40,s]){let A=ks(w);b.add(A.a),A.t>0&&b.add(A.b)}y(h.build(),Qa([...b]),!1,!0),yield,y(u.atlas.build(),this.M.atlas,!0,!0),yield;{let w=y(u.color.build(),this.M.color,!0,!0);w&&(w.customDepthMaterial=Uu)}if(yield,y(u.foliage.build(),this.M.foliage,!0,!0),y(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),this.M.gleaf){let w=y(u.gleaf.build(),this.M.gleaf,!0,!0,0,"leaf");w&&(w.customDepthMaterial=this.M.gleafDepth)}if(this.M.gblossom){let w=y(u.gblossom.build(),this.M.gblossom,!0,!1,0,"leaf");w&&(w.customDepthMaterial=this.M.gleafDepth)}if(yield,y(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),y(u.sig.build(),this.M.sig,!1,!1,0,"small"),y(u.sodium.build(),this.M.sodium,!1,!1),y(u.decal.build(),this.M.decal,!1,!0,1,"small"),y(u.pool.build(),this.M.pool,!1,!1,2,"light"),p.length){let w=new yt,A=[],P=[],I=[];p.forEach((R,L)=>{for(let D of R)A.push(D[0],D[1],D[2]),P.push(D[3],D[4]);if(L>0){let D=(L-1)*2;I.push(D,D+2,D+1,D+1,D+2,D+3)}}),w.setAttribute("position",new Ze(A,3)),w.setAttribute("su",new Ze(P,2)),w.setIndex(I),w.computeBoundingSphere(),y(w,this.foamMat,!1,!1,1)}for(let w of g)y(w,this.riverMat,!1,!0);return E.position.set(o-this.origin.x,0,a-this.origin.z),{group:E,ox:o,oz:a,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*yd+6,n=Qt(t);if(n==="sakura"||_s(t,6)||ni(t,34)||Xi(t,ln+12))return null;let s=In(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,a,c,u,h){let p=Math.ceil((t-6)/yd),g=Math.floor((n-6-.001)/yd);for(let x=p;x<=g;x++){let M=this.poleSpec(x);if(!M)continue;let S=M.z==="city"?u(M.s)+.15:a(M.s,M.u),l=o(M.s,M.u,S),f=Zt(Math.floor(Yn(x,31)*4294967295)),d=rd(r,l,f,{trans:f()<.45});M.z==="city"&&x%2===0&&Rm(r,l,-.11),x%2&&(yield);let v=this.poleSpec(x+1);if(v){let m=v.z==="city"?u(v.s)+.15:a(v.s,v.u),_=Am(o(v.s,v.u,m));r.color.setM(new et);let T=[];for(let E=0;E<d.length;E++){let y=d[E],b=_[E],w=.35+f()*.4+(E>=7?.3:0);T.push(w),r.color.wire([y.x,y.y,y.z],[b.x,b.y,b.z],w,E>=7?.022:.015,sl,10)}if(M.z!=="coast"&&f()<.38){let E=Math.floor(f()*4),y=d[E],b=_[E],w=1+Math.floor(f()*4),A=.18+f()*.5;for(let P=0;P<w;P++){let I=Math.min(.92,A+P*(.018+f()*.025)),R=y.x+(b.x-y.x)*I,L=y.z+(b.z-y.z)*I,D=y.y+(b.y-y.y)*I-T[E]*4*I*(1-I);r.color.box(R-.07,D+.015,L-.07,R+.07,D+.19,L+.07,Mg),r.color.box(R-.045,D+.19,L-.045,R+.045,D+.27,L+.045,Mg)}}}if(M.z==="city"){r.color.setM(new et);let m=1+Math.floor(f()*3);for(let _=0;_<m;_++){let T=d[7+_%2],E=(f()-.5)*14,y=h(M.s+E),b=f()<.55,w=b?-(y+3.15):y+3.15,A=c(M.s+E,w,u(M.s+E)+5.2+f()*2.5);r.color.wire([T.x,T.y,T.z],A,.25+f()*.4,.012,sl,8)}}}}*intersection(e,t,n,s,r,o,a,c,u,h,p){let g=this.path.at(n,{}),x=o(n),M=a(n),S=c(n)||3,l=n-.5,f=Dt(n),d=[f.city,f.sakura,f.coast,f.country],v=(_,T,E)=>[g.x+g.fx*(_-.5)+g.rx*T-h,E,g.z+g.fz*(_-.5)+g.rz*T-p],m=M+S+.15;for(let _ of[-1,1]){let T=_*(M+S),E=_*80;u.grid(21,2,(A,P)=>{let I=T+(E-T)*A/20,R=(P?-3:3)*_,L=v(R,I,x+.165);return[L[0],L[1],L[2],0,1,0,R*_,I,d[0],d[1],d[2],d[3],M,10]});{let A=_*(M+S+3.2),P=-_*1.35,I=1.15,R=.42,L=(D,O)=>v(P+_*D,A-_*O,x+.18);e.decal.setM(new et),e.decal.quad(L(-I,-R),L(I,-R),L(I,R),L(-I,R),[1,1,1],Ao("tomare"))}for(let A of[-1,1]){let P=m+15+t()*3;for(;P<52;){let I=t.range(5.5,8.5),R=_*(P+I/2),L=t(),D=r(l+A*3.3,R,x+.14,A>0?Math.PI/2:-Math.PI/2,!1);vs(e,D,t,{type:L<.5?"house":"shop",w:I,d:t.range(7,10),floors:L<.5?2:t.int(2,3),tint:t.pick(gs),litP:.45,fence:0}),P+=I+t.range(.2,1.2),yield}yield}let y=[30,54].map(A=>r(l+2.8,_*A,x+.15,-Math.PI/2,!1)),b=Zt(Math.floor(Yn(s,_>0?71:73)*4294967295)),w=y.map(A=>rd(e,A,b,{trans:b()<.4}));e.color.setM(new et);for(let A=0;A<7;A++){let P=w[0][A],I=w[1][A];e.color.wire([P.x,P.y,P.z],[I.x,I.y,I.z],.3+b()*.4,.014,sl,10)}}dd(e,r(n-9,-(M+.55),x+.15,0,!0),1,M+.55-1.6),dd(e,r(n+8,M+.55,x+.15,0,!0),1,M+.55-1.6),s%3===1&&Wm(e,r(n+15,0,x,0,!1),M+S+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(e,t,n,s,r,o,a,c,u,h){let p=this.path.at(n,{}),g=p.y,x=o(n),M=c(n),S=x+M+.2,l=150,f=g+.18,d=Dt(n),v=[d.city,d.sakura,d.coast,d.country],m=(L,D,O)=>[p.x+p.fx*L+p.rx*D-u,O,p.z+p.fz*L+p.rz*D-h],_=[7.6,4.7,-4.7,-7.6];for(let[L,D]of[[-l,-S],[S,l]])t.grid(25,_.length,(V,N)=>{let z=L+(D-L)*V/24,H=_[N],le=Math.abs(H)<5?f:Math.min(f-.05,a(n+H,z)-.03),ze=m(H,z,le);return[ze[0],ze[1],ze[2],0,1,0,H,z,v[0],v[1],v[2],v[3],x,5]});let T=(L,D,O)=>t.grid(2,2,(V,N)=>{let z=V?D:L,H=N?-3.3:3.3,Y=m(H,z,O);return[Y[0],Y[1],Y[2],0,1,0,H,z,v[0],v[1],v[2],v[3],x,6]});T(-x,x,g+.03),M>0&&(T(-S,-x,g+.165),T(x,S,g+.165));let E=(L,D,O,V)=>t.grid(2,2,(N,z)=>{let H=N?V:O,Y=z?D:L,le=m(Y,H,g+.025);return[le[0],le[1],le[2],0,1,0,Y,H,v[0],v[1],v[2],v[3],x,7]});E(-7.15,-7.6,-x+.3,-.12),E(7.6,7.15,.12,x-.3),yield;let y=s(n,0,g,-Math.PI/2,!1),b=e.color;b.setM(y);let w=[.42,.4,.38],A=[.3,.29,.28],P=[.55,.57,.6];for(let L of[-2,2])for(let D of[-.5335,.5335]){let O=-(L+D);for(let[V,N]of[[-l,-S],[S,l]])b.box(V,.26,O-.035,N,.34,O+.035,w);b.box(-S,0,O-.035,S,.04,O+.035,A)}let I=[-146,-104,-64,-26,26,64,104,146];for(let L of I){for(let D of[-4.95,4.95])b.box(L-.12,.18,D-.12,L+.12,7.4,D+.12,P);b.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,P);for(let D of[-2,2])b.box(L-.04,6.3,-D-.04,L+.04,6.95,-D+.04,P)}for(let L of[-2,2])for(let D=0;D<I.length-1;D++)b.wire([I[D],5.35,-L],[I[D+1],5.35,-L],.05,.011,sl,6),b.wire([I[D],6.4,-L],[I[D+1],6.4,-L],.45,.011,sl,8);yield;let R=Math.round((n-yr)/_r);if(d.country>.9&&Yn(R,17)<.7){let L=Yn(R,19)<.5?-1:1,D=L>0?x+9:-(x+9+46),O=L>0?x+9+46:-(x+9);Xm(e,y,D,O,L*(x+9),Math.abs(R)%4,Zt(Math.floor(Yn(R,23)*4294967295))),b.setM(y)}yield;for(let L of Fu(this.path,n)){let D=new et().makeRotationY(L.yaw);D.setPosition(L.x-u,L.y,L.z-h),Zm(e,D)}qs(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(M>0?1:0)),"sign_xing",1,2.2,.85),qs(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(M>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,a,c,u,h,p,g){let x=this.path.at(n,{}),M=x.y,S=o(n),l=c(n),f=Dt(n),d=[f.city,f.sakura,f.coast,f.country],v=f.sakura>.5,m=222,_=S+l+.5,T=M-Ka,E=(R,L,D)=>[x.x+x.fx*R+x.rx*L-u,D,x.z+x.fz*R+x.rz*L-h];{let R=[],L=[],D=[];for(let N=0;N<=74;N++){let z=-m+2*m*N/74;for(let H of[14.3,-14.3]){let Y=E(H,z,T);R.push(Y[0],Y[1],Y[2]),L.push(H,z)}if(N>0){let H=(N-1)*2;D.push(H,H+1,H+2,H+1,H+3,H+2)}}let V=new yt;V.setAttribute("position",new Ze(R,3)),V.setAttribute("su",new Ze(L,2)),V.setIndex(D),V.computeBoundingSphere(),g.push(V)}for(let[R,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[D,O]of[[-m,-(S+3.4)],[S+3.4,m]])t.grid(41,2,(V,N)=>{let z=D+(O-D)*V/40,H=N?L:R,Y=E(H,z,M+.38);return[Y[0],Y[1],Y[2],0,1,0,H,z,d[0],d[1],d[2],d[3],S,9,1]});yield;let y=s(n,0,M,0,!1),b=e.color,w=[.74,.73,.7],A=v?[.78,.2,.15]:[.55,.72,.64];b.setM(y),b.box(-24.5,-1,-_,24.5,-.03,_,w,null,{noBottom:!1});for(let R of[-1,1])b.box(-24.5,-1.3,R>0?_-.35:-_,24.5,-.95,R>0?_:-_+.35,[.62,.61,.58]);for(let R of[-8,8])b.box(R-.7,-Ka-1.4,-_+.6,R+.7,-1,_-.6,w);for(let R of[-25.7,25.7])b.box(R-1.2,-Ka+.4,-_-.4,R+1.2,-.05,_+.4,w);for(let R of[-24.5,24.5])b.box(R-.16,.004,-S,R+.16,.016,S,[.33,.32,.31]),b.box(R-.02,.016,-S,R+.02,.02,S,[.2,.19,.19]);let P=l>0?.15:0;for(let R of[-1,1]){let L=R*(_-.14);for(let D=-24;D<=24.01;D+=2)b.box(D-.06,P,L-.06,D+.06,P+1,L+.06,A);b.box(-24,P+.95,L-.08,24,P+1.08,L+.08,A),b.box(-24,P+.48,L-.03,24,P+.54,L+.03,A),b.box(-24,P+.06,L-.03,24,P+.12,L+.03,A)}let I="bridge"+Math.abs(Math.round(n/Mr))%4;for(let R of[-25,25])for(let L of[-1,1]){let D=L*(_-.1),O=[.7,.69,.65];b.box(R-.32,P,D-.32,R+.32,P+1.45,D+.32,O),b.box(R-.38,P+1.45,D-.38,R+.38,P+1.58,D+.38,[.62,.61,.57]),e.atlas.setM(y);let V=(R<0?-1:1)*.325,N=I;R<0?e.atlas.quad([R-.325,P+.3,D-.22],[R-.325,P+.3,D+.22],[R-.325,P+1.3,D+.22],[R-.325,P+1.3,D-.22],[1,1,1],Ao(N)):e.atlas.quad([R+.325,P+.3,D+.22],[R+.325,P+.3,D-.22],[R+.325,P+1.3,D-.22],[R+.325,P+1.3,D+.22],[1,1,1],Ao(N)),b.setM(y)}el(e,s(n-14,-(_-.45),M+P,0,!0)),el(e,s(n+14,_-.45,M+P,0,!0)),yield;{e.atlas.setM(new et);let R=Ao("gogan"),L=2.4,D=150;for(let O of[-1,1])for(let V=-D;V<D-.01;V+=L){let N=V+L,z=E(O*13.9,V,T-.12),H=E(O*13.9,N,T-.12),Y=E(O*16.05,N,T+.72),le=E(O*16.05,V,T+.72),ze=(H[1]-z[1])*(le[2]-z[2])-(H[2]-z[2])*(le[1]-z[1]),Be=(H[0]-z[0])*(le[1]-z[1])-(H[1]-z[1])*(le[0]-z[0]),ye=E(0,(V+N)/2,T),$=ze*(ye[0]-z[0])+Be*(ye[2]-z[2])>0,J={u0:R.u0,u1:R.u1,v0:R.v0,v1:R.v1};$?e.atlas.quad(z,H,Y,le,[1,1,1],J):e.atlas.quad(H,z,le,Y,[1,1,1],{u0:R.u1,u1:R.u0,v0:R.v0,v1:R.v1})}for(let O of[-1,1])for(let V of[-1,1])for(let N=14+p()*3;N<125;N+=p.range(2.4,5)){if(p()<.35)continue;let z=O*(16.2+p()*1.1),H=V*N,Y=1+(p()<.4?1:0);for(let le=0;le<Y;le++){let ze=E(z+O*p()*.6,H+(p()-.5)*.9,T+.7),Be=new et().makeRotationY(p()*6.28);Be.setPosition(ze[0],ze[1],ze[2]),hd(e,Be,p,"grass",p.range(1.9,2.8))}}}yield;for(let R of[-18,18])for(let L of[-1,1]){yield;for(let D=11+p()*4;D<(v?125:170);D+=v?p.range(8.5,11):p.range(18,34)){let O=n+R+(p()-.5)*1.5,V=L*D;Zn(e,s(O,V,a(O,V),p()*6,!1),v?"sakura":"broad",p,v?p.range(1,1.25):p.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,a,c,u,h,p,g){let x=this.path.at(n.s,{}),M=x.y,S=u(n.s),l=S+1.4,f=Dt(n.s),d=[f.city,f.sakura,f.coast,f.country],v=o(n.s,0,M,0,!1),m=e.color,_=Math.max(s,n.s-hn)-n.s,T=Math.min(r,n.s+hn)-n.s;if(T>_+.01){let N=Math.max(2,Math.ceil((T-_)/3)+1),z=[-(S+1.5),-S,-S*.5,0,S*.5,S,S+1.5];t.gridN(N,z.length,(J,xe)=>{let ve=_+(T-_)*J/(N-1),Ee=n.s+ve,We=z[xe],Ne=M+Lu(ve,We);return[x.x+x.fx*ve+x.rx*We-h,Ne,x.z+x.fz*ve+x.rz*We-p,0,1,0,xs(Ee,ds),We,d[0],d[1],d[2],d[3],S,0,-1]});let H=[[-S,0],[-S,.2],[-l,.2],[-l,3.2]];for(let J=1;J<12;J++){let xe=Math.PI*(1-J/12);H.push([l*Math.cos(xe),3.2+3*Math.sin(xe)])}H.push([l,3.2],[l,.2],[S,.2],[S,0]);let Y=[.86,.82,.72],le=[.44,.45,.47],ze=[.62,.61,.58],Be=[];for(let J=_;J<T-.01;J+=6)Be.push(J);Be.push(T),m.setM(v);for(let J=0;J<Be.length-1;J++)for(let xe=0;xe<H.length-1;xe++){let[ve,Ee]=H[xe],[We,Ne]=H[xe+1],nt=Math.max(Ee,Ne)<=.21?ze:Math.abs(ve)>l-.01&&Math.abs(We)>l-.01?Y:le;m.quad([Be[J],Ee,ve],[Be[J+1],Ee,ve],[Be[J+1],Ne,We],[Be[J],Ne,We],nt)}e.sodium.setM(v),e.sig.setM(v);let ye=l*Math.cos(Math.PI/6)-.12,$=3.2+3*Math.sin(Math.PI/6)-.08;for(let J=Math.ceil((_+hn-3)/6)*6+3-hn;J<T;J+=6)for(let xe of[-1,1])e.sodium.box(J-.45,$-.07,xe*ye-.13,J+.45,$+.07,xe*ye+.13,null),Xs(e,v,J,$-.1,xe*ye,1);for(let J=Math.ceil((_+hn)/24)*24-hn;J<T;J+=24)e.sig.box(J-.3,.95,-l+.01,J+.3,1.2,-l+.06,null);for(let J=Math.ceil((_+hn-30)/60)*60+30-hn;J<T;J+=60)for(let xe of[-1.15,1.15])m.box(J-1.1,5.2,xe-.36,J+1.1,5.78,xe+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),m.box(J-.08,5.78,xe-.05,J+.08,6.15,xe+.05,[.4,.4,.42]);yield}let E=(N,z)=>{let H=Math.sin(N*12.9898+z*78.233+n.k*37.719)*43758.5453;return H-Math.floor(H)},y=(N,z,H)=>[N[0]+(z[0]-N[0])*H,N[1]+(z[1]-N[1])*H,N[2]+(z[2]-N[2])*H],b=[.5,.5,.47],w=[.55,.53,.47],A=[.6,.6,.57],P=[.58,.58,.55],I=[.42,.42,.4],R=(N,z)=>{let H=E(N,z);return L?y([.26,.29,.08],[.42,.3,.09],H):y([.22,.29,.08],[.36,.36,.12],H)},L=f.mountain>.5,D=l+2.6,O=2.6;for(let N of[-1,1]){let z=n.s+N*hn,H=N*(hn+.08);if(z<s||z>=r)continue;let Y=[];for(let te of _g)te>=1.44&&Y.push(S+te,-(S+te));for(let te of yg)te>S+3.5&&te<S+21&&Y.push(te,-te);for(let te=0;te<=24;te++)Y.push(-l+2*l*te/24);Y.push(-l-.01,l+.01,-D,D),Y.sort((te,U)=>te-U);let le=te=>3.2+3*Math.sqrt(Math.max(0,1-(te/l)**2)),ze=te=>Math.max(c(z-N*.03,te)-M,Lu(N*(hn-.03),te)),Be=te=>Math.abs(te)<=l+1e-6?le(te):c(z+N*.03,te)-M,ye=8.4;for(let te of Y)Math.abs(te)<=D&&(ye=Math.min(ye,ze(te)-.4));let $=ye>6.6;m.setM(v);let J=N,xe=(te,U,C,G,X,j,oe,me)=>{let ce=[H,C,te],fe=[H,G,U],Ie=[H,j,U],$e=[H,X,te],Ce=N<0?[ce,fe,Ie,$e]:[fe,ce,$e,Ie],Le=N<0?[oe,oe,me,me]:[oe,oe,me,me];for(let Fe of[0,1,2,0,2,3])m.vtx(Ce[Fe][0],Ce[Fe][1],Ce[Fe][2],J,0,0,0,0,Le[Fe])},ve=(te,U,C)=>te+(U-te)*C;for(let te=0;te<Y.length-1;te++){let U=Y[te],C=Y[te+1];if(C-U<1e-4)continue;let G=ze(U),X=ze(C),j=Be(U),oe=Be(C);if(G-j<.01&&X-oe<.01)continue;let me=(U+C)/2,ce=$&&Math.abs(me)<D,fe=j,Ie=oe;if(ce){let Fe=y(b,[.46,.46,.44],E(Math.floor(me/2.4),3.1)),Ke=.8+2.6*E(Math.floor(me/.8),7.7),ct=y(Fe,[.27,.27,.26],.35+.3*E(Math.floor(me/.8),9.9)),q=Math.min(ye,G),W=Math.min(ye,X),de=Math.max(j,q-Ke),Ue=Math.max(oe,W-Ke);if(Math.abs(me)>l){let Ve=Math.min(de,j+.9),Se=Math.min(Ue,oe+.9);xe(U,C,j,oe,Ve,Se,y(Fe,[.25,.29,.18],.45),Fe),xe(U,C,Ve,Se,de,Ue,Fe,Fe)}else xe(U,C,j,oe,de,Ue,Fe,Fe);if(xe(U,C,de,Ue,q,W,Fe,ct),fe=q,Ie=W,G-q<.01&&X-W<.01)continue}let $e=Math.floor(me/O),Ce=fe,Le=Ie;for(let Fe=Math.floor(Math.min(Ce,Le)/O)+1;Ce<G-.01||Le<X-.01;Fe++){let Ke=Fe*O,ct=Math.min(G,Math.max(Ce,Ke)),q=Math.min(X,Math.max(Le,Ke)),W=R($e,Fe);if(xe(U,C,Ce,Le,ct,q,y(W,[.2,.22,.1],.25),W),Ce=ct,Le=q,Fe>60)break}}let Ee=Math.min(H,H+N*.12),We=Math.max(H,H+N*.12),Ne=te=>{for(let U=0;U<Y.length-1;U++)if(te>=Y[U]&&te<=Y[U+1]&&Y[U+1]>Y[U]){let C=(te-Y[U])/(Y[U+1]-Y[U]);return[ve(Be(Y[U]),Be(Y[U+1]),C),ve(ze(Y[U]),ze(Y[U+1]),C)]}return null},nt=Y[0],He=Y[Y.length-1];for(let te=Math.ceil(nt/O)*O;te<He;te+=O){let U=Ne(te);if(!U)continue;let C=($&&Math.abs(te)<D?Math.max(ye+.3,U[0]):U[0])+.05,G=U[1]-.05;G-C>.4&&!(Math.abs(te)<=l+.3&&!$)&&m.box(Ee,C,te-.14,We,G,te+.14,w)}for(let te=1;te<60;te++){let U=te*O,C=null,G=()=>{C&&C[1]-C[0]>.3&&m.box(Ee,U-.14,C[0],We,U+.14,C[1],w),C=null},X=!1;for(let j=0;j<Y.length-1;j++){let oe=Y[j],me=Y[j+1];if(me-oe<1e-4)continue;let ce=(oe+me)/2,fe=Math.max(Be(oe),Be(me),$&&Math.abs(ce)<D?ye+.3:-1e9),Ie=Math.min(ze(oe),ze(me));U>fe+.2&&U<Ie-.2?(X=!0,C?C[1]=me:C=[oe,me]):G()}if(G(),!X&&U>30)break}$&&m.box(Math.min(H,H+N*.32),ye-.05,-D,Math.max(H,H+N*.32),ye+.3,D,A);let je=H+N*.32,ne=te=>-l+2*l*te/24,be=te=>[ne(te),le(ne(te))],Q=te=>[ne(te)*1.12,le(ne(te))+.6];for(let te=0;te<24;te++){let[U,C]=be(te),[G,X]=be(te+1),[j,oe]=Q(te),[me,ce]=Q(te+1);N<0?m.quad([je,C,U],[je,X,G],[je,ce,me],[je,oe,j],P):m.quad([je,X,G],[je,C,U],[je,oe,j],[je,ce,me],P),N<0?m.quad([H,C,U],[H,X,G],[je,X,G],[je,C,U],I):m.quad([H,X,G],[H,C,U],[je,C,U],[je,X,G],I),N<0?m.quad([H,ce,me],[H,oe,j],[je,oe,j],[je,ce,me],P):m.quad([H,oe,j],[H,ce,me],[je,ce,me],[je,oe,j],P)}for(let te of[-1,1])m.box(Math.min(H,je),.2,te>0?l:-l*1.12,Math.max(H,je),3.2,te>0?l*1.12:-l,P);e.atlas.setM(v);let ie=1.9,ee=7.05,ue=7.85,B=H+N*.03,ge=Ao("tunnel"+(f.coast>.5?1:Math.abs(n.k)%2?2:0));N<0?e.atlas.quad([B,ee,-ie],[B,ee,ie],[B,ue,ie],[B,ue,-ie],[1,1,1],ge):e.atlas.quad([B,ee,ie],[B,ee,-ie],[B,ue,-ie],[B,ue,ie],[1,1,1],ge)}yield;let V=f.mountain>.5;for(let N=Math.max(s,n.s-ln*.95)+g()*3;N<Math.min(r,n.s+ln*.95);N+=g.range(4,8)){let z=Math.abs(N-n.s)>hn-4?17:4;for(let H of[-1,1]){let Y=H*(S+g.range(z,50)),le=g();Zn(e,a(N,Y,-.3,g()*6,!1),V?le<.5?"maple":le<.8?"cedar":"ginkgo":le<.65?"pine":"broad",g,g.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,a,c,u){let h=p=>Dt(p).snow;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let g=n+t()*20;g<s;g+=t.range(22,40)){if(h(g)<.6||t()<.5)continue;let x=p*t.range(18,90);vs(e,o(g,x,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(gs),litP:.62,fence:0,snow:!0});for(let M=0;M<2+t()*3;M++)Zn(e,o(g+t.range(-9,9),x+p*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let g=n+t()*5;g<s;g+=t.range(3,7))h(g)<.5||(t()<.32&&Zn(e,o(g,p*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&Zn(e,o(g,p*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let p=Math.ceil(n/36)*36;p<s;p+=36){if(h(p)<.55)continue;let g=c(p);{let x=r(p,-(g+.95),a(p)+1.3),M=r(p+18,g+.95,a(p+18)+1.3);x.groundY=a(p),M.groundY=a(p+18),cd(e,x,1),cd(e,M,-1)}}}}*placeMountain(e,t,n,s,r,o,a,c,u){let h=p=>Dt(p).mountain;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let g=n+t()*4;g<s;g+=t.range(4.5,8.5)){if(h(g)<.45||Xi(g,ln+6))continue;let x=c(g),M=t();if(p>0){let S=M<.5?"maple":M<.72?"ginkgo":"cedar";Zn(e,o(g,x+t.range(17,70),-.25,t()*6,!1),S,t,t.range(.9,1.3))}else{let S=M<.55?"maple":M<.8?"cedar":"ginkgo";Zn(e,o(g,-(x+t.range(3.5,34)),-.25,t()*6,!1),S,t,t.range(.95,1.35))}}yield}for(let p=n+t()*4;p<s;p+=t.range(3,6)){if(h(p)<.5)continue;let g=t()<.7,x=-(c(p)+(g?t.range(108,205):t.range(36,100)));Zn(e,o(p,x,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new et);for(let p=Math.ceil(n/10)*10;p<s;p+=10){if(h(p)<.5||Xi(p,ln+4))continue;let g=c(p),x=r(p,-(g+.95),a(p));Im(e,x)}for(let p=Math.ceil(n/14)*14;p<s;p+=14){if(h(p)<.6)continue;let g=this.path.curv(p);if(Math.abs(g)<1/230)continue;let x=c(p);g>0?qs(e,r(p,x+.42,a(p)),"chev_l",-1,1.25,.58):qs(e,r(p,-(x+1.15),a(p)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,s,r,o,a){let c=this.path,u={},h=Zt(Math.floor(Yn(t,1789)*4294967295)),p=Um(),g=Math.floor((n+Ht/2)/600)*600+300,x=Math.floor((n+Ht/2)/700)*700+120,M=Math.floor((n+Ht/2)/380)*380+190,S=Yn(Math.round(M),5)<.5?-1:1;for(let f of[-1,1]){e.leaf.setM(bg);for(let d=n+h()*p;d<s;d+=p*h.range(.75,1.25)){if(Qt(d)!=="country"||_s(d,10)||ni(d,31)||f<0&&(Math.abs(d-g)<2.9||d>x-1.3&&d<x+2.7)||f===S&&Math.abs(d-M)<1.6)continue;c.at(d,u);let v=a(d),m=f*(v+.95+(h()-.5)*.36),_=u.y+Vs(d,m,u.y,v),T=(h()-.5)*.8,E=Math.cos(T)*f,y=Math.sin(T)*f;fd(e,u.x+u.rx*m-r,_,u.z+u.rz*m-o,u.rx*E+u.fx*y,u.rz*E+u.fz*y,h,h.range(.85,1.15))}yield}let l=Zt(Math.floor(Yn(t,2417)*4294967295));for(let f of[-1,1]){e.leaf.setM(bg);for(let d=n+l()*8;d<s;d+=l.range(8,14)){if(Dt(d).sakura<.6||ni(d,31))continue;let v=2+Math.floor(l()*4),m=f*(a(d)+2.85+l()*.5);c.at(d,u);let _=u.y+Vs(d,m,u.y,a(d));for(let T=0;T<v;T++){let E=T*.5+l()*.2,y=m+f*(l()-.5)*.35,b=(l()-.5)*1.2,w=Math.cos(b)*f,A=Math.sin(b)*f;fd(e,u.x+u.fx*E+u.rx*y-r,_,u.z+u.fz*E+u.rz*y-o,u.rx*w+u.fx*A,u.rz*w+u.fz*A,l,l.range(.42,.58))}}}}*placeVerge(e,t,n,s,r,o,a,c,u,h){yield*this.placeBanks(e,c,n,s,u,h,a);for(let p of[-1,1]){for(let g=n+t()*1.2;g<s;g+=t.range(.55,1.5)){if(_s(g,10)||ni(g,31)||Xi(g,ln+4))continue;let x=Qt(g),M=a(g),S,l,f=.22,d=1;if(x==="country")S=M+t.range(2.05,2.8),l=.25,f=.35;else if(x==="sakura")S=M+2.68+t()*1.3,l=.55,f=.3;else if(x==="coast"){if(p<0)continue;S=M+.95+t()*1.7,l=.75,f=.18}else{if(x==="snow")continue;if(x==="mountain")S=p<0?M+1+t()*.35:M+.25+t()*.2,l=p<0?.55:.18,f=.12,d=.85;else{if(Md(g,5))continue;S=M+3.02+t()*.1,l=.1,f=.08,d=.65}}if(t()>l)continue;let v=p*S;hd(e,r(g,v,o(g,v),t()*6.28,!1),t,t()<f?"flowers":"grass",d*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new et);let a=Math.max(1,Math.round((n-t)/2)),c=Me.rail,u=[.62,.64,.66],h=[.74,.76,.79],p=[.95,.55,.16];for(let g=0;g<a;g++){let x=t+(n-t)*g/a,M=t+(n-t)*(g+1)/a,S=-(o(x)+.95),l=-(o(M)+.95),f=r(x),d=r(M);for(let m=0;m<_d.length-1;m++){let[_,T]=_d[m],[E,y]=_d[m+1];e.color.quad(s(x,S+T,f+_),s(M,l+T,d+_),s(M,l+y,d+E),s(x,S+y,f+E),c)}e.color.quad(s(M,l+.05,d+.5),s(x,S+.05,f+.5),s(x,S+.05,f+.84),s(M,l+.05,d+.84),u),e.color.noShadow=!0;let v=s(x,S-.04,f);if(e.color.cyl(v[0],f,v[2],.055,.055,.8,6,h,!1),Math.round(x/2)%2===0){let m=s(x,S+.035,f+.64),_=s(x+.09,S+.035,f+.64);e.color.quad(_,m,[m[0],m[1]+.07,m[2]],[_[0],_[1]+.07,_[2]],p)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,a,c,u,h,p,g,x){for(let l of[-1,1]){let f=n+t()*2;for(;f<s-2;){{let R=Dt(f);if(R.city<.62||R.mountain>.1){f+=4;continue}}{let R=Hs(f+6);if(R&&f<R.s+8.5&&f+14>R.s-8.5){f=Math.max(f+1,R.s+8.5);continue}}let d=xs(f,150);if(d>145.6||d<3.4){f+=1;continue}let v=c(f),m=u(f)||3,_=v+m+.15,T=t(),E=T<.7?"machiya":T<.75?"shop":T<.81?"apt":T<.83?"office":T<.88?"house":T<.92?"konbini":T<.96?"parking":"gap",y=E==="shop"?t.range(5,9):E==="machiya"?t.range(6,9.5):E==="apt"?t.range(10,16):E==="office"?t.range(10,14):E==="house"?t.range(7,9.5):E==="konbini"?t.range(12,14):E==="parking"?t.range(7,11):t.range(2,3.5);if(f+y>s){if(s-f<5||E==="konbini")break;y=s-f-.2}{let R=Math.ceil((f+4.4)/150)*150-4.4;if(f+y>R-.1){if(R-.1-f<4){f=R+7.9;continue}y=R-.1-f}}let b=f+y/2,w=a(b),A=t.pick(gs),P=.42,I=E==="machiya"&&t()<.42;if(E==="parking"){let R=r(b,l*(_+3),w+.15);t()<.8&&Gm(e,Wu(R,0,0,.5,(t()-.5)*.1),t),e.color.setM(R),e.color.box(-y/2,0,5.5,y/2,1.6,5.7,Me.concrete)}else if(E!=="gap"){let R=r(b,l*_,w+.15),L={type:E,w:y,d:E==="apt"||E==="office"?t.range(10,14):t.range(8,12),floors:E==="shop"?t.int(2,4):E==="machiya"?t()<.7?2:3:E==="apt"?t.int(4,9):E==="office"?t.int(4,8):2,tint:I?nd[Math.floor(t()*nd.length)]:A,litP:P,plaster:I,fence:E==="house"&&t()<.5?1.2:0};if(vs(e,R,t,L),E!=="house"&&t()<.28&&ad(e,r(b+(t()-.5)*(y-1.2),l*(_-.42),w+.15),t),(E==="shop"||E==="konbini"||E==="machiya")&&t()<.3)for(let D=0;D<1+t()*3;D++)Cm(e,r(b-y/2+.8+D*.55,l*(_-.75),w+.15,Math.PI/2+.1),t);if(E==="house"&&t()<.6)for(let D=0;D<2+t()*3;D++)ld(e,r(b+1+D*.5,l*(_-.3),w+.15),t);if(t()<.03)for(let D=0;D<3;D++)Pm(e,r(b+D*.9,l*(v+.35),w))}f+=y+t.range(.05,.5),yield}for(let d=n+t()*10;d<s-8;d+=t.range(14,26)){if(Dt(d).city<.7||Dt(d).mountain>.1||t()<.3||_s(d,18)||Md(d,15))continue;let v=c(d),m=r(d,l*(v+3.2+t.range(14,20)),a(d)+.1);vs(e,m,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(gs),litP:.4})}if(Dt(n+30).city>.7&&Dt(n+30).mountain<.1&&t()<.65){let d=n+t()*Ht;if(_s(d,24)||Md(d,20))continue;let v=r(d,l*t.range(55,150),a(d));vs(e,v,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(gs),litP:.45})}}let M=Math.ceil(n/150),S=Math.floor((s-.01)/150);for(let l=M;l<=S;l++){let f=l*150;if(Qt(f)!=="city"||Dt(f).mountain>.1)continue;let d=c(f);yield*this.intersection(e,t,f,l,r,a,c,u,p,g,x),qs(e,r(f-1,-(d+.4),a(f)+.15),"sign_blue",1),qs(e,r(f-6,-(d+.4),a(f)+.15),"sign_stop",1,2.1,.75),ud(e,r(f+7,d+.4,a(f)+.15),-1),l%3===0&&qs(e,r(f+20,-(d+.4),a(f)+.15),"sign_speed",1)}}*placeSakura(e,t,n,s,r,o,a,c,u){for(let g of[-1,1]){for(let x=n+t()*4;x<s;x+=t.range(7.5,10)){if(Dt(x).sakura<.45||ni(x,30))continue;let M=c(x);Zn(e,o(x,g*(M+3.7),0,wi.bcells?(t()-.5)*.6:t()*6),"sakuraAve",t,t.range(1.05,1.3)),t()<.45&&Zn(e,o(x+3,g*(M+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let x=n+(g>0?0:12);x<s;x+=24){if(Qt(x)!=="sakura"||ni(x,30))continue;let M=c(x);el(e,r(x,g*(M+2.25),a(x)+.15)),xs(x,48)<24&&$m(e,r(x+6,g*(M+3),u(x+6,g*(M+3))))}for(let x=n+t()*15;x<s;x+=t.range(14,24)){if(Qt(x)!=="sakura"||t()<.35||ni(x,45))continue;let M=c(x);vs(e,o(x,g*(M+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(gs),litP:.45,fence:t()<.6?1.4:0})}}let p=Math.floor((n+Ht/2)/480)*480+240;p>=n&&p<s&&Qt(p)==="sakura"&&!ni(p,60)&&pd(e,r(p,0,a(p),0,!1),c(p)+1.6,6.4)}placeCoast(e,t,n,s,r,o,a,c,u,h,p){for(let M=0;M<=20;M++){let S=n+M/20*Ht;if(Dt(S).coast<.85||Xi(S,ln*1.25)){h.length&&h[h.length-1]!==null&&h.push(null);continue}let f=c(S),d=f+11,v=f+19,m=p(S,-d,zs+.06),_=p(S,-v,zs+.06);h.push([[m[0],m[1],m[2],xs(S,ds),0],[_[0],_[1],_[2],xs(S,ds),1]])}let g=h.indexOf(null);g>=0&&(h.length=g),h.length<2&&(h.length=0);for(let M=n+t()*6;M<s;M+=t.range(5,9)){if(Qt(M)!=="coast"||Xi(M,ln+6))continue;let S=c(M);t()<.7&&Zn(e,o(M,S+t.range(3.5,26),0,t()*6,!1),"pine",t,t.range(.9,1.3)),t()<.2&&Zn(e,o(M+2,-(S+t.range(3.5,7)),0,t()*6,!1),"pine",t,t.range(.8,1.1))}for(let M=n+4;M<s;M+=t.range(18,30)){if(Qt(M)!=="coast"||t()<.4||Xi(M,ln*1.4))continue;let S=c(M),l=3+Math.floor(t()*5);for(let f=0;f<l;f++){let d=-(S+t.range(12,17)),v=M+t.range(-3,3);Jm(e,r(v,d,Math.max(u(v,d),zs-.4)+t.range(-.2,.4),t()*6),t,t.range(.9,1.2))}}for(let M=n+12;M<s;M+=48){if(Qt(M)!=="coast"||Xi(M,ln+4))continue;let S=c(M);od(e,o(M,S+1),t)}if(Qt(n+30)==="coast"&&t()<.5){let M=n+t()*Ht,S=c(M);Xi(M,ln+25)||vs(e,o(M,S+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick(gs),litP:.5,fence:0})}if(Qt(n+30)==="coast"&&t()<.55){let M=n+t()*Ht;Qm(e,r(M,-(c(M)+t.range(45,220)),zs-.25,t()*6,!1),t)}let x=Math.floor((n+Ht/2)/1500)*1500+700;x>=n&&x<s&&Qt(x)==="coast"&&!Xi(x,ln*1.6)&&jm(e,r(x,-(c(x)+75),zs-1,0,!1))}*placeCountry(e,t,n,s,r,o,a,c,u){for(let M of[-1,1]){yield;for(let S=n+t()*20;S<s;S+=t.range(20,40)){if(Qt(S)!=="country"||t()<.55||_s(S,16)||ni(S,48))continue;let l=M*t.range(16,95),f=o(S,l);vs(e,f,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(gs),litP:.5,fence:0});for(let d=0;d<2+t()*3;d++){let v=l+M*t.range(6,14),m=S+t.range(-8,8);Zn(e,o(m,v,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let S=n+t()*8;S<s;S+=t.range(5,9)){if(Qt(S)!=="country"||_s(S,7)||ni(S,36))continue;let l=M*t.range(140,210);Zn(e,o(S,l,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!_s(S+2,8)&&!ni(S+2,34)&&Zn(e,o(S+2,M*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let h=Math.floor((n+Ht/2)/600)*600+300;if(h>=n&&h<s&&Qt(h)==="country"&&!ni(h,40)){let M=c(h);Km(e,r(h,-(M+1.6),a(h)-.08),t)}let p=Math.floor((n+Ht/2)/700)*700+120;if(p>=n&&p<s&&Qt(p)==="country"&&!ni(p,40)){let M=c(p);ad(e,r(p,-(M+.95),a(p)-.08),t),od(e,r(p+2,-(M+.8),a(p)-.08),t)}let g=Math.floor((n+Ht/2)/900)*900+450;if(g>=n&&g<s&&Qt(g)==="country"&&!ni(g,40)){let M=c(g);eg(e,o(g,M+5),t)}let x=Math.floor((n+Ht/2)/380)*380+190;if(x>=n&&x<s&&Qt(x)==="country"&&!ni(x,40)&&!_s(x,30)){let M=c(x),S=(Yn(Math.round(x),5)<.5?-1:1)*(M+2.75);Ym(e,o(x,S,0))}for(let M=n;M<s;M+=30){if(Qt(M)!=="country")continue;let S=this.path.curv(M);if(Math.abs(S)>1/450&&t()<.5){let l=S>0?-1:1,f=c(M);ud(e,o(M,l*(f+.75)),l>0?-1:1)}}}};var Co={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function Sg(i){let e=i.get("weather"),t={mode:Co[e]?e:"auto",kind:Co[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return Co[e]&&(t.ov=Co[e][0],t.rain=Co[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let a=Math.random();t.kind=t.kind==="clear"?a<.5?"cloudy":a<.72?"rain":"clear":t.kind==="cloudy"?a<.5?"clear":a<.85?"rain":"cloudy":a<.55?"cloudy":"clear"}let[s,r]=Co[t.kind];t.ov+=kt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=kt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var Ai={uHeadPos:{value:new k},uHeadDir:{value:new k(0,0,1)},uHeadI:{value:0},uLampW:{value:[new gt(0,-1e3,0,0),new gt(0,-1e3,0,0)]},uLampCol:{value:new _e(1,.8,.52)}},Ju=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function Tg(){let e=new k(42,22,42),t=new jt(1,1),n=new ji;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let a=0;a<2400*4;a++)s[a]=Math.random();n.setAttribute("aOff",new Sn(s,4)),n.instanceCount=2400;let r=new xt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uAmt:{value:0},uBox:{value:e},uCol:{value:new _e(1,1,1)},...Ai},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Ju}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new ht(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,h){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*h,.33+.67*h,.42+.58*h)}}}function Eg(){let e=new k(46,24,46),t=new jt(1,1);t.translate(0,.5,0);let n=new ji;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let a=0;a<2600;a++)s[a*4]=Math.random(),s[a*4+1]=Math.random(),s[a*4+2]=Math.random(),s[a*4+3]=Math.random();n.setAttribute("aOff",new Sn(s,4)),n.instanceCount=2600;let r=new xt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uRain:{value:0},uBox:{value:e},uCol:{value:new _e(.8,.85,.95)},...Ai},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Ju}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new ht(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,h){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*h,.12+.83*h,.16+.84*h)}}}var ii=64,Sd=[2.2,1.3,2.6],ab=[-2.4,.35,-1.6];function wg(){let i=new Float32Array(ii*3),e=new Float32Array(ii*3),t=new Float32Array(ii*4),n=new Float32Array(ii),s=new Uint8Array(ii),r=new Float32Array(ii);for(let v=0;v<ii;v++)t[v*4]=t[v*4+1]=1;let o=new jt(1,1),a=new ji;a.index=o.index,a.setAttribute("position",o.attributes.position),a.setAttribute("uv",o.attributes.uv),a.instanceCount=0;let c=new Float32Array(ii*4),u=new Float32Array(ii*4),h={uP:{value:c},uC:{value:u},uNoiseTex:Oe.uNoiseTex,uAmb:{value:new _e},uSun:{value:new _e},uTail:{value:new gt},uCam:{value:new k},...Ai},p=new xt({transparent:!0,depthWrite:!1,fog:!1,uniforms:h,vertexShader:`
      uniform vec4 uP[${ii}], uC[${ii}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${Ju}
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
      }`}),g=new ht(a,p);g.frustumCulled=!1,g.renderOrder=4,g.visible=!1;let x=0,M=0,S=0,l=0,f=!1;function d(v,m,_,T,E,y,b,w,A,P,I){let R=x;x=(x+1)%ii,i[R*3]=m,i[R*3+1]=_,i[R*3+2]=T,e[R*3]=E,e[R*3+1]=y,e[R*3+2]=b,t[R*4]=0,t[R*4+1]=w,t[R*4+2]=A,t[R*4+3]=P,n[R]=I,s[R]=v,r[R]=Math.random()}return{mesh:g,update(v,m,_,T,E,y,b,w,A,P,I){if(!I){if(f){for(let $=0;$<ii;$++)t[$*4]=t[$*4+1];f=!1}g.visible=!1;return}let R=m.position,L=m.rotation.y,D=Math.cos(L),O=Math.sin(L),V=O*_,N=D*_,z=Math.min(1,Math.max(0,(_-2)/14)),H=E>.3?2:0,Y=H?E:T;for(M+=24*Y*z*v;M>=1;){M-=1;let $=(l^=1)?1:-1,J=$*.67,xe=-1.28-Math.random()*.2,ve=Math.random(),Ee=Math.random(),We=1.6+1.6*ve,Ne=H?.5+.7*Ee:.9+1*Ee,nt=$*(.3+.6*Math.random());d(H,R.x+J*D+xe*O,R.y+.12,R.z-J*O+xe*D,V*.55-O*We+nt*D,Ne,N*.55-D*We-nt*O,H?.45+.3*ve:.55+.35*ve,.2+.1*Ee,H?.7+.35*Ee:.8+.4*Ee,.5*(.5+.5*z)*Math.min(1,Y*1.5))}for(S+=(5+4*z)*y*v;S>=1;){S-=1;let $=Math.random();d(1,R.x-.42*D-1.78*O,R.y+.26,R.z+.42*O-1.78*D,V*.5-O*.8,.25+.2*$,N*.5-D*.8,1.3+.6*$,.14,.8+.4*Math.random(),.32*Math.min(1,y*1.5))}let le=0,ze=Math.exp(-Sd[0]*v),Be=Math.exp(-Sd[1]*v),ye=Math.exp(-Sd[2]*v);for(let $=0;$<ii;$++){let J=$*4;if(t[J]>=t[J+1])continue;let xe=t[J]+=v,ve=t[J+1];if(xe>=ve)continue;let Ee=s[$],We=Ee===0?ze:Ee===1?Be:ye,Ne=$*3,nt=i[Ne]-P.x,He=i[Ne+1]-P.y,je=i[Ne+2]-P.z;if(nt*nt+He*He+je*je<20.25){t[J]=ve;continue}e[Ne]*=We,e[Ne+1]=e[Ne+1]*We+ab[Ee]*v,e[Ne+2]*=We,i[Ne]+=e[Ne]*v,i[Ne+1]=Math.max(R.y+.05,i[Ne+1]+e[Ne+1]*v),i[Ne+2]+=e[Ne+2]*v;let ne=xe/ve,be=le*4;c[be]=i[Ne],c[be+1]=i[Ne+1],c[be+2]=i[Ne+2],c[be+3]=t[J+2]+(t[J+3]-t[J+2])*Math.sqrt(ne),u[be]=n[$]*Math.min(1,ne*6)*(1-ne)*(1-ne),u[be+1]=Ee,u[be+2]=r[$],le++}f=le>0,g.visible=f,a.instanceCount=le,f&&(h.uAmb.value.copy(b),h.uSun.value.copy(w),h.uTail.value.copy(A),h.uCam.value.copy(P))},shift(v,m){for(let _=0;_<ii;_++)i[_*3]-=v,i[_*3+2]-=m}}}var wr=24,lb=55,cb=12;function Ag(){let i=[],e=new Float32Array(wr*2*2),t=new Float32Array(wr*2*3);for(let u=0;u<wr;u++)if(e.set([u,-1,u,1],u*4),u<wr-1){let h=u*2;i.push(h,h+1,h+2,h+1,h+3,h+2)}let n=new yt;n.setAttribute("position",new Ut(t,3)),n.setAttribute("aI",new Ut(e,2)),n.setIndex(i);let s=new Float32Array(wr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new _e},uTime:{value:0},uNoiseTex:Oe.uNoiseTex},o=new xt({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${wr}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${Ei}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),a=new ht(n,o);a.frustumCulled=!1,a.renderOrder=1,a.visible=!1;let c={};return{mesh:a,update(u,h,p,g,x,M,S,l){if(a.visible=M>.01,!!a.visible){for(let f=0;f<wr;f++)u.at(h+lb+f*cb,c),s[f*4]=c.x-p,s[f*4+1]=c.y,s[f*4+2]=c.z-g,s[f*4+3]=c.h;r.uW.value=x*.85,r.uHot.value=M,r.uTime.value=S,r.uSky.value.copy(l)}}}}var Po=1.6;function Rg(i,e=null){let t=i==="high",[n,s,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,a=t?16:14,c=[4,Math.round(s*.4),Math.round(s*.65),s].filter((I,R,L)=>!R||I>L[R-1]),u=[s,Math.round((s+r)/2),r],h=(I,R)=>{let L=new ji;return L.setAttribute("position",new Ze(I,3)),L.setIndex(R),L},p=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],g=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],x=new Float32Array(Ws*4),M=new Float32Array(Ws),S={uG:{value:x},uGM:{value:M},uGP:{value:new gt(0,1/Po,3.1,0)},uGQ:{value:new gt(0,1.05,3,0)},uRingD:{value:new gt(s,r,0,0)}},l=[],f=(I,R,L)=>{let D={uRing:{value:new gt(0,0,L?2*n:n,L)},uRingC:{value:new gt(0,0,0,0)}},O=h(...L?g:p);O.instanceCount=0;let V=new ht(O,lm(D,S));V.frustumCulled=!1,V.castShadow=!1,V.receiveShadow=!1,V.visible=!1,l.push({mesh:V,u:D,dA:I,dB:R,size:L?2*n:n,W:L?a:o,last:R===s||R===r})};for(let I=0;I<c.length-1;I++)f(c[I],c[I+1],0);for(let I=0;I<u.length-1;I++)f(u[I],u[I+1],1);let d=new Int32Array(64).fill(-2147483648),v=new Float32Array(64),m=new Uint8Array(64),_=I=>{let R=I&63;if(d[R]!==I){d[R]=I;let L=I*Po,D=Hs(L),O=Si(L),V=Dt(L).country,N=Math.min(1,Math.max(0,(V-.97)/.025))*(D?Math.min(1,Math.max(0,(Math.abs(L-D.s)-13)/7)):1)*(O?Math.min(1,Math.max(0,(Math.abs(L-O.s)-38)/10)):1);v[R]=N>0?3+4*Math.round(N*15):0,m[R]=V>0?1:0}return R},T=I=>v[_(I)],E=I=>m[_(I)],y={},b=NaN,w=NaN,A=NaN,P=0;return{meshes:l.map(I=>I.mesh),hide(){for(let I=0;I<l.length;I++)l[I].mesh.visible=!1},warm(I){for(let R of l)R.mesh.visible=I,I&&(R.u.uRing.value.y=1,R.u.uRingC.value.set(1,1,R.W,0),R.mesh.geometry.instanceCount=2)},update(I,R,L,D,O,V,N){let z=Math.floor((R-3)/Po);if(!E(z)&&!E(z+Ws-1))P=0;else{if(z!==b||D!==w||O!==A){b=z,w=D,A=O,P=0;for(let H=0;H<Ws;H++)I.at((z+H)*Po,y),x[H*4]=y.x-D,x[H*4+1]=y.y,x[H*4+2]=y.z-O,x[H*4+3]=y.h,P|=M[H]=T(z+H)}S.uGP.value.set(z*Po,1/Po,V,R),S.uGQ.value.set(L,N,3,0)}for(let H=0;H<l.length;H++){let Y=l[H];if(!P){Y.mesh.visible=!1;continue}let le=Math.floor((R+Y.dA)/Y.size),ze=Math.floor((R+Y.dB)/Y.size)+(Y.last?1:0),Be=N*Y.dB+3,ye=V+2.6,$=Math.min(Y.W,Math.max(0,Be-(ye+L))),J=Math.min(Y.W,Math.max(0,Be-(ye-L))),xe=$>0?Math.ceil($/Y.size)+1:0,ve=J>0?Math.ceil(J/Y.size)+1:0;Y.u.uRing.value.x=le,Y.u.uRing.value.y=ze-le,Y.u.uRingC.value.set(xe,ve,Y.W,0),Y.mesh.geometry.instanceCount=(ze-le)*(xe+ve),Y.mesh.visible=Y.mesh.geometry.instanceCount>0}}}}var Io=72;function ub(){let i=[],e=[],t=(s,r,o,a,c,u)=>{i.push(...s,...r,...o),e.push(a,c,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new yt;return n.setAttribute("position",new Ze(i,3)),n.setAttribute("aWing",new Ze(e,1)),n}function Cg(){let i=ub(),e=new Sn(new Float32Array(Io*3),3),t=new Sn(new Float32Array(Io*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new xt({side:mn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ae.fog},uFogD:{value:.002},uCam:{value:new k}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new Bi(i,n,Io);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},a=new et,c=new _n,u=new oi(0,0,0,"YXZ"),h=new k,p=new k,g=()=>r.reduce((S,l)=>S+l.birds.length,0);function x(S,l,f,d){let v=S==="small"?6+Math.floor(Math.random()*7):S==="crow"?3+Math.floor(Math.random()*5):4;if(g()+v>Io)return;let m=45+Math.random()*85,_=(Math.random()-.5)*120,T=Math.random()<.5?1:-1,E=new k().copy(l).addScaledVector(f,m).addScaledVector(d,_-T*75);E.y=l.y+(S==="crow"?18+Math.random()*24:10+Math.random()*18);let y=S==="small"?11+Math.random()*4:8+Math.random()*3,b=new k().copy(d).multiplyScalar(T*y).addScaledVector(f,(Math.random()-.3)*y*.6),w=S==="small"?.8:1.45,A=Array.from({length:v},(P,I)=>({off:new k((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:S==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:S,c:E,vel:b,birds:A,size:w,life:60})}function M(S,l,f,d){if(r.some(_=>_.kind==="gull")||g()+4>Io)return;let v=new k().copy(S).addScaledVector(l,70).addScaledVector(f,-d*45);v.y=S.y+18;let m=Array.from({length:4},(_,T)=>({off:new k,ph:Math.random()*6.28,fq:5.5,w:T/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:v,vel:new k,birds:m,size:1.25,life:1e9})}return{mesh:s,update(S,l,f,d,v,m,_,T,E){n.uniforms.uTime.value=l,n.uniforms.uCam.value.copy(f);let y=_>.35&&T<.3,b=ae.warm>.25&&ae.sunEl<.6&&_>.2;y&&(o.small-=S)<0&&(o.small=22+Math.random()*35,m.coast<.6&&x("small",f,d,v)),(b||y&&m.city+m.country>.6&&Math.random()<4e-4)&&(o.crow-=S)<0&&(o.crow=b?14+Math.random()*18:60,x("crow",f,d,v)),m.coast>.6&&y&&M(f,d,v,1);let w=[.1+.08*_,.11+.09*_,.15+.1*_],A=0;for(let P=r.length-1;P>=0;P--){let I=r[P];if(I.kind==="gull"?(I.c.lerp(h.copy(E).addScaledVector(d,60).addScaledVector(v,-42).setY(E.y+16),Math.min(1,S*.25)),(m.coast<.4||!y)&&(I.life=Math.min(I.life,8),I.c.y+=S*6)):I.c.addScaledVector(I.vel,S),I.life-=S,I.life<0||I.kind!=="gull"&&I.c.distanceTo(f)>300){r.splice(P,1);continue}for(let R of I.birds){if(A>=Io)break;let L,D,O,V;I.kind==="gull"?(R.w+=S*(14/R.r),L=I.c.x+Math.cos(R.w)*R.r,O=I.c.z+Math.sin(R.w)*R.r,D=I.c.y+R.h+Math.sin(l*.4+R.ph)*2,V=Math.atan2(-Math.sin(R.w),Math.cos(R.w))):(L=I.c.x+R.off.x+Math.sin(l*.7+R.ph)*1.2,D=I.c.y+R.off.y+Math.sin(l*1.1+R.ph)*.6,O=I.c.z+R.off.z,V=Math.atan2(I.vel.x,I.vel.z)),u.set(0,V,Math.sin(l+R.ph)*.15),c.setFromEuler(u),p.setScalar(I.size),a.compose(h.set(L,D,O),c,p),s.setMatrixAt(A,a);let N=I.kind==="gull"?[.92*(.5+.5*_),.93*(.5+.5*_),.95*(.5+.5*_)]:I.kind==="crow"?[.05,.05,.07]:w;e.setXYZ(A,N[0],N[1],N[2]),t.setXY(A,R.fq,R.ph),A++}}s.count=A,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(S){n.uniforms.uFogD.value=S},shift(S,l){for(let f of r)f.c.x-=S,f.c.z-=l}}}function Pg(){let i=new xt({fog:!1,uniforms:{uNoiseTex:Oe.uNoiseTex,uTime:{value:0},uCam:{value:new k},uSunDir:{value:ae.lightDir},uSunCol:{value:ae.sunCol},uHorizon:{value:ae.horizon},uZenith:{value:ae.zenith},uFog:{value:ae.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${Ei}
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
      }`}),e=new ht(new jt(14e3,14e3),i);return e.rotation.x=-Math.PI/2,e.position.y=zs,e.renderOrder=998,e.frustumCulled=!1,{mesh:e,update(t,n,s,r=1){e.position.x=t.x,e.position.z=t.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(t),i.uniforms.uNight.value=ae.night,i.uniforms.uBright.value=ae.bright,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-ae.overcast*.85}}}function Ig(){return new xt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new _e(1,1,1)},uNoiseTex:Oe.uNoiseTex},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${Ei}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function Lg(){return new xt({fog:!1,uniforms:{uNoiseTex:Oe.uNoiseTex,uTime:{value:0},uSunDir:{value:ae.lightDir},uSunCol:{value:ae.sunCol},uHorizon:{value:ae.horizon},uZenith:{value:ae.zenith},uFog:{value:ae.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${Ei}
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
      }`})}var rl=new k;function Ri(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;rl.copy(e),rl[n]=0,rl.normalize();let u=.5*o/(o+a),h=1-rl.angleTo(i)/c;return Math.sign(rl[t])===1?h*u:a/(o+a)+u+u*(1-h)}var Ln=class i extends Yt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new k,u=new k,h=new k(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,g=this.attributes.normal.array,x=this.attributes.uv.array,M=p.length/6,S=new k,l=.5/o;for(let f=0,d=0;f<p.length;f+=3,d+=2)switch(c.fromArray(p,f),u.copy(c),u.x-=Math.sign(u.x)*l,u.y-=Math.sign(u.y)*l,u.z-=Math.sign(u.z)*l,u.normalize(),p[f+0]=h.x*Math.sign(c.x)+u.x*r,p[f+1]=h.y*Math.sign(c.y)+u.y*r,p[f+2]=h.z*Math.sign(c.z)+u.z*r,g[f+0]=u.x,g[f+1]=u.y,g[f+2]=u.z,Math.floor(f/M)){case 0:S.set(1,0,0),x[d+0]=Ri(S,u,"z","y",r,n),x[d+1]=1-Ri(S,u,"y","z",r,t);break;case 1:S.set(-1,0,0),x[d+0]=1-Ri(S,u,"z","y",r,n),x[d+1]=1-Ri(S,u,"y","z",r,t);break;case 2:S.set(0,1,0),x[d+0]=1-Ri(S,u,"x","z",r,e),x[d+1]=Ri(S,u,"z","x",r,n);break;case 3:S.set(0,-1,0),x[d+0]=1-Ri(S,u,"x","z",r,e),x[d+1]=1-Ri(S,u,"z","x",r,n);break;case 4:S.set(0,0,1),x[d+0]=1-Ri(S,u,"x","y",r,e),x[d+1]=1-Ri(S,u,"y","x",r,t);break;case 5:S.set(0,0,-1),x[d+0]=Ri(S,u,"x","y",r,e),x[d+1]=1-Ri(S,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function ju(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new yt,u=0;for(let h=0;h<i.length;++h){let p=i[h],g=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in p.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(p.attributes[x]),g++}if(g!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in p.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[x]===void 0&&(o[x]=[]),o[x].push(p.morphAttributes[x])}if(e){let x;if(t)x=p.index.count;else if(p.attributes.position!==void 0)x=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,x,h),u+=x}}if(t){let h=0,p=[];for(let g=0;g<i.length;++g){let x=i[g].index;for(let M=0;M<x.count;++M)p.push(x.getX(M)+h);h+=i[g].attributes.position.count}c.setIndex(p)}for(let h in r){let p=Dg(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let g=0;g<p;++g){let x=[];for(let S=0;S<o[h].length;++S)x.push(o[h][S][g]);let M=Dg(x);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(M)}}}return c}function Dg(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ut(o,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=c/t;for(let g=0,x=h.count;g<x;g++)for(let M=0;M<t;M++){let S=h.getComponent(g,M);a.setComponent(g+p,M,S)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function hb(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new Qn(i);return n.colorSpace=qt,n}var Td=4;function fb(){let t=document.createElement("canvas");t.width=128*Td,t.height=128;let n=t.getContext("2d"),s=(o,a,c,u,h)=>{n.beginPath(),n.moveTo(o+h,a),n.arcTo(o+c,a,o+c,a+u,h),n.arcTo(o+c,a+u,o,a+u,h),n.arcTo(o,a+u,o,a,h),n.arcTo(o,a,o+c,a,h),n.closePath(),n.fill()};for(let o=0;o<Td;o++){let a=o*128,c=n.createLinearGradient(0,0,0,128);c.addColorStop(0,"#9fbfe6"),c.addColorStop(.45,"#4a6690"),c.addColorStop(1,"#1d2638"),n.fillStyle=c,n.fillRect(a,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(a+14,84,30,50,9),s(a+84,84,30,50,9),n.fillRect(a+6,112,116,16),s(a+52,92,24,40,7)),o===2&&(s(a+62,66,44,70,12),n.fillRect(a+50,118,70,10)),o===3&&(s(a+70,78,40,60,11),n.fillRect(a+56,120,64,8)),n.save(),n.beginPath(),n.rect(a,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(a+40,0),n.lineTo(a+68,0),n.lineTo(a+20,128),n.lineTo(a-8,128),n.fill(),n.restore()}let r=new Qn(t);return r.colorSpace=qt,r}function Ng(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/Td)}return i}function Ug(){let i=new nn,e=new nn,t=new nn;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new gt,new gt],s=new _e(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=Jf(new an({color:"#ffffff",vertexColors:!0,gradientMap:ja}),.85,.06,"paint-l",r),a=(ne,be)=>Object.assign(new _e(ne),{gloss:be}),c=a("#9fd8c8",1),u=a("#eeece4",.6),h=a("#2a2c33",.35),p=a("#1b1c20",.04),g=a("#c8ccd2",.8),x=a("#d4d8de",1.3),M=(ne,be)=>{let Q=ne.attributes.position.count,ie=new Float32Array(Q*4);for(let ee=0;ee<Q;ee++)ie.set([be.r,be.g,be.b,be.gloss],ee*4);return ne.setAttribute("color",new Ze(ie,4)),ne},S=Jf(new an({color:"#ffffff",map:fb(),gradientMap:ai}),1.2,.08,"glass-l",r),l=new an({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:ai}),f=new an({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:ai}),d=new an({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:ai}),v=new an({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:ai}),m=new an({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:ai}),_=new un({map:hb()}),T=new Map,E=[],y=!1,b=new et,w=new oi,A=new _n,P=new k(1,1,1),I=(ne,be,Q,ie,ee,ue=0,B=0,ge=0)=>{let te=ne.index?ne.toNonIndexed():ne;if(be.isColor&&(M(te,be),be=o),w.set(ue,B,ge),A.setFromEuler(w),b.compose(new k(Q,ie,ee),A,P),te.applyMatrix4(b),y){E.push(te);return}T.has(be)||T.set(be,[]),T.get(be).push(te)},R=a("#16171b",0),L=a("#2b3134",.15),D=a("#b9bfc6",.9),O=a("#4d5258",.4),V=a("#9a1c22",.6),N=1.7,z=.745,H=.3,Y=(ne,be,Q)=>{let ie=Math.min(1,Math.max(0,(Q-ne)/(be-ne)));return ie*ie*(3-2*ie)},le=ne=>ne<.8?1.8:ne<1.22?1.8-.6*Y(.8,1.22,ne):1.2-.1*((ne-1.22)/(N-1.22))**2,ze=ne=>1-.085*Y(1.15,1.8,ne),Be=(ne,be)=>{let Q=z-be,ie=H+be*.6,ee=le(ne)-be*(ne<0?.4:1),ue=Math.max(.05,.1-be*.5),B=Math.max(.06,(ne<.8?.17:.13)-be*.5),ge=[[0,ie],[(Q-ue)*.5,ie],[Q-ue,ie]];for(let U=1;U<4;U++){let C=-Math.PI/2+U/8*Math.PI;ge.push([Q-ue+ue*Math.cos(C),ie+ue+ue*Math.sin(C)])}for(let U=0;U<=8;U++)ge.push([Q,ie+ue+U/8*(ee-B-ie-ue)]);for(let U=1;U<5;U++){let C=U/10*Math.PI;ge.push([Q-B+B*Math.cos(C),ee-B+B*Math.sin(C)])}ge.push([Q-B,ee],[(Q-B)*.5,ee],[0,ee]);let te=ge.map(([U,C])=>[U*ze(C),C]);for(let U=ge.length-2;U>0;U--)te.push([-te[U][0],te[U][1]]);return te};{let ne=[];for(let G=0;G<=6;G++){let X=G/6*Math.PI/2;ne.push([-N+.2*(1-Math.cos(X)),.2*(1-Math.sin(X))])}for(let G=-N+.2+.12;G<.78;G+=.13)ne.push([G,0]);for(let G=.8;G<1.225;G+=.06)ne.push([G,0]);for(let G of[1.3,1.39])ne.push([G,0]);for(let G=6;G>=0;G--){let X=G/6*Math.PI/2;ne.push([N-.22*(1-Math.cos(X)),.22*(1-Math.sin(X))])}let ie=[],ee=[],ue=ne.map(([G,X])=>Be(G,X)),B=ue[0].length;ue.forEach((G,X)=>G.forEach(([j,oe])=>ie.push(j,oe,ne[X][0])));for(let G=0;G<ue.length-1;G++)for(let X=0;X<B;X++){let j=G*B+X,oe=G*B+(X+1)%B,me=j+B,ce=oe+B;ee.push(j,oe,me,oe,ce,me)}for(let[G,X]of[[0,-1],[ue.length-1,1]]){let j=ie.length/3,oe=ue[G];ie.push(0,(oe[0][1]+oe[B/2|0][1])/2,ne[G][0]);for(let me=0;me<B;me++){let ce=G*B+me,fe=G*B+(me+1)%B;X<0?ee.push(j,fe,ce):ee.push(j,ce,fe)}}let ge=new yt;ge.setAttribute("position",new Ze(ie,3)),ge.setIndex(ee),ge.computeVertexNormals();{let G=ge.attributes.normal,X=B*10+12;if(G.getX(X)<0){for(let j=0;j<ee.length;j+=3){let oe=ee[j+1];ee[j+1]=ee[j+2],ee[j+2]=oe}ge.setIndex(ee),ge.computeVertexNormals()}}ge.setAttribute("uv",new Ze(new Float32Array(ie.length/3*2),2));let te=ge.toNonIndexed(),U=te.attributes.position,C=new Float32Array(U.count*4);for(let G=0;G<U.count;G+=3){let X=(U.getY(G)+U.getY(G+1)+U.getY(G+2))/3,j=(U.getZ(G)+U.getZ(G+1)+U.getZ(G+2))/3,oe=X>1.665&&j<.84&&j>-1.52?u:c;for(let me=0;me<3;me++)C.set([oe.r,oe.g,oe.b,oe.gloss],(G+me)*4)}te.setAttribute("color",new Ze(C,4)),I(te,o,0,0,0)}I(new Ln(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let ye=(ne,be,Q,ie,ee)=>{let ue=new yt,B=[],ge=[],te=[],U=[];for(let C=0;C<=Q;C++)for(let G=0;G<=be;G++){let X=G/be,j=C/Q,oe=ne(X,j);B.push(oe[0]+oe[3]*.004,oe[1]+oe[4]*.004,oe[2]+oe[5]*.004),ge.push(oe[3],oe[4],oe[5]),te.push(X,j)}for(let C=0;C<Q;C++)for(let G=0;G<be;G++){let X=C*(be+1)+G,j=X+1,oe=X+be+1,me=oe+1;U.push(X,j,me,X,me,oe)}ue.setAttribute("position",new Ze(B,3)),ue.setAttribute("normal",new Ze(ge,3)),ue.setAttribute("uv",new Ze(te,2)),ue.setIndex(U);{let C=new k().fromArray(B,0),G=new k().fromArray(B,3),X=new k().fromArray(B,(be+1)*3),j=new k().fromArray(ge,0);if(G.sub(C).cross(X.sub(C)).dot(j)<0){for(let oe=0;oe<U.length;oe+=3){let me=U[oe+1];U[oe+1]=U[oe+2],U[oe+2]=me}ue.setIndex(U)}}return Ng(ue,ie,ee)},$=ne=>{let Q=z*(ze(ne+.01)-ze(ne-.01))/.02,ie=Math.hypot(1,Q);return[1/ie,-Q/ie]},J=ne=>{let be=.8,Q=1.22;for(let ie=0;ie<24;ie++){let ee=(be+Q)/2;le(ee)>ne?be=ee:Q=ee}return be};for(let ne of[-1,1]){let be=ne<0,Q=(ie,ee,ue)=>I(ye((B,ge)=>{let te=1.21+ge*.39,U=ne>0?ee(te)+(ie(te)-ee(te))*B:ie(te)+(ee(te)-ie(te))*B,[C,G]=$(te);return[ne*z*ze(te),te,U,ne*C,G,0]},1,6,ue,!1),S,0,0,0);Q(()=>.06,ie=>J(ie)-.07,2),Q(()=>-.72,()=>-.08,3),Q(()=>-1.42,()=>-.84,0),I(new Yt(.012,.41,.07),h,ne*.731,1.405,-.01,0,0,-ne*.07),I(new Yt(.014,.022,2.42),R,ne*.748,1.2,-.26);for(let[ie,ee]of[[.8,.64],[-.06,.42],[-.76,.64]])I(new Yt(.008,1.17-ee,.012),L,ne*.749,(ee+1.17)/2,ie);I(new Yt(.02,.028,.13),L,ne*.752,1.06,.06),I(new Yt(.02,.028,.13),L,ne*.752,1.06,-.2),I(new Yt(.01,.022,.62),L,ne*.749,1.155,-1.08);for(let ie of[1.12,-1.12])I(new ur(.345,18,0,Math.PI),R,ne*.749,.29,ie,0,ne*Math.PI/2,0),I(new Aa(.35,.024,5,18,Math.PI),h,ne*.752,.29,ie,0,ne*Math.PI/2,0);I(new Ln(.1,.12,.2,2,.04),c,ne*.83,1.24,1.02),I(new Yt(.07,.035,.05),h,ne*.775,1.2,1.03),I(new Ln(.16,.4,.05,3,.075),x,ne*.56,.95,-1.703),I(new Ln(.13,.37,.05,3,.062),l,ne*.56,.95,-1.716),I(new Ln(.036,.27,.02,2,.016),f,ne*.56,.95,-1.742),I(new Ln(.11,.06,.04,2,.02),v,ne*.56,.69,-1.707)}{let ne=new ro,be=.52,Q=1.15,ie=1.66,ee=.07;ne.moveTo(-be+ee,Q),ne.lineTo(be-ee,Q),ne.absarc(be-ee,Q+ee,ee,-Math.PI/2,0),ne.lineTo(be,ie-ee),ne.absarc(be-ee,ie-ee,ee,0,Math.PI/2),ne.lineTo(-be+ee,ie),ne.absarc(-be+ee,ie-ee,ee,Math.PI/2,Math.PI),ne.lineTo(-be,Q+ee),ne.absarc(-be+ee,Q+ee,ee,Math.PI,Math.PI*1.5);let ue=new Ea(ne,6),B=ue.attributes.position,ge=ue.attributes.uv;for(let te=0;te<B.count;te++){let U=B.getX(te),C=B.getY(te),G=(C-Q)/(ie-Q);ge.setXY(te,(U+be)/(2*be),G),B.setX(te,U*(1-.08*G))}I(Ng(ue,1),S,0,0,-N-.004,0,Math.PI,0)}I(new Ln(.36,.04,.03,2,.014),d,0,1.69,-1.712),I(ye((ne,be)=>{let Q=1.19-be*.36,ie=le(Q),ee=.56-.07*be,ue=.005,B=(le(Q+ue)-le(Q-ue))/(2*ue),ge=Math.hypot(1,B);return[(ne*2-1)*ee,ie,Q,0,1/ge,-B/ge]},2,7,0,!1),S,0,0,0),I(new Ln(.46,.25,.012,2,.05),a("#86bdb0",.6),0,.73,-1.701),I(new jt(.34,.17),_,0,.72,-1.709,0,Math.PI,0),I(new Ln(.25,.034,.03,2,.013),x,0,.9,-1.708);for(let ne of[-1,1])I(new Yt(.01,.56,.006),L,ne*.47,.85,-1.703);I(new Yt(.95,.01,.006),L,0,.565,-1.703),I(new Ln(1.5,.2,.26,3,.08),c,0,.44,-1.6),I(new Ln(1.38,.08,.22,2,.03),h,0,.33,-1.61);for(let ne of[-1,1])I(new Yt(.13,.035,.01),V,ne*.56,.44,-1.731);I(new Mi(.036,.036,.12,12),x,.46,.29,-1.68,Math.PI/2,0,0),I(new Mi(.024,.024,.124,10),R,.46,.29,-1.68,Math.PI/2,0,0);for(let ne of[-1,1])I(new Ln(.4,.26,.04,2,.06),h,ne*.42,.85,1.702),I(new Mi(.105,.105,.03,16),m,ne*.46,.85,1.72,Math.PI/2,0,0),I(new Mi(.055,.055,.03,12),m,ne*.3,.85,1.718,Math.PI/2,0,0),I(new Ln(.1,.06,.04,2,.015),v,ne*.52,.66,1.705),I(new Yt(.46,.014,.014),R,ne*.25,1.215,1.2,-.3,ne*.12,0);I(new Ln(.36,.12,.03,2,.03),R,0,.84,1.704);for(let ne=0;ne<3;ne++)I(new Yt(.32,.012,.012),L,0,.805+ne*.035,1.722);I(new Ln(1.52,.24,.22,2,.07),h,0,.44,1.62),I(new Yt(.7,.07,.02),R,0,.4,1.732),I(new Yt(.34,.17,.01),a("#f0cc38",.3),0,.62,1.733),I(new Yt(.3,.05,.004),a("#2f5a2f",.1),0,.6,1.739),y=!0;for(let[ne,be]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){I(new Mi(.29,.29,.19,24),p,ne,.29,be,0,0,Math.PI/2),I(new Mi(.195,.195,.194,20),D,ne,.29,be,0,0,Math.PI/2),I(new Mi(.155,.155,.198,16),O,ne,.29,be,0,0,Math.PI/2);for(let Q=0;Q<5;Q++){let ie=Q/5*Math.PI*2+.3;I(new Yt(.202,.03,.15),D,ne,.29-.085*Math.sin(ie),be+.085*Math.cos(ie),ie,0,0)}I(new Mi(.045,.045,.206,10),g,ne,.29,be,0,0,Math.PI/2)}y=!1;for(let[ne,be]of T){let Q=new ht(ju(be),ne);Q.castShadow=ne!==S&&ne!==_&&ne!==d&&ne!==m&&ne!==f,Q.receiveShadow=!0,t.add(Q)}{let ne=new ht(ju(E),o);ne.castShadow=ne.receiveShadow=!0,i.add(ne)}{let Q=document.createElement("canvas");Q.width=48,Q.height=96;let ie=Q.getContext("2d"),ee=ie.createImageData(48,96);for(let B=0;B<96;B++)for(let ge=0;ge<48;ge++){let te=Math.max(0,Math.abs((ge+.5)/48-.5)*2.1-.62),U=Math.max(0,Math.abs((B+.5)/96-.5)*2.05-.78),C=Math.hypot(te/.42,U/.24),G=Math.max(0,1-C),X=(B*48+ge)*4;ee.data[X]=ee.data[X+1]=ee.data[X+2]=Math.round(255*G*G*(3-2*G)),ee.data[X+3]=255}ie.putImageData(ee,0,0);let ue=new ht(new jt(2.2,4.1),new un({color:0,alphaMap:new Qn(Q),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));ue.rotation.x=-Math.PI/2,ue.position.y=.03,ue.renderOrder=3,i.add(ue)}let xe=(()=>{let Q=document.createElement("canvas");Q.width=16,Q.height=64;let ie=Q.getContext("2d"),ee=ie.createImageData(16,64);for(let ue=0;ue<64;ue++)for(let B=0;B<16;B++){let ge=1-(ue+.5)/64,te=((B+.5)/16-.5)*2,U=Math.exp(-te*te*5)*Math.min(1,ge/.06)*Math.pow(1-ge,1.6)*(.78+.22*Math.sin(ge*31+te*2)),C=(ue*16+B)*4;ee.data[C]=ee.data[C+1]=ee.data[C+2]=Math.round(255*Math.max(0,U)),ee.data[C+3]=255}return ie.putImageData(ee,0,0),new un({map:new Qn(Q),color:16726576,transparent:!0,opacity:0,blending:Oi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})})();{let ne=[];for(let Q of[-.56,.56]){let ie=new jt(.22,1.5);ie.rotateX(-Math.PI/2),ie.translate(Q,.035,-1.72-.75),ne.push(ie)}let be=new ht(ju(ne),xe);be.renderOrder=3,be.visible=!1,i.add(be),xe.mesh=be}let ve=new nn;ve.position.set(.02,1.19,-1.716),t.add(ve);let Ee=new Yt(.52,.026,.02);Ee.translate(.27,0,0);let We=new ht(M(Ee,h),o);We.rotation.z=.18,ve.add(We);let Ne=0,nt=new La(16773328,0,70,.55,.65,1.2);nt.position.set(0,.8,1.6),nt.target.position.set(0,0,18),t.add(nt,nt.target);let He={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},je=(ne,be)=>be*Math.tanh(ne/be);return{group:i,lamps:n,lampCol:s,head:nt,update(ne,be,Q,ie=0,ee=null,ue=0){if(ee){let B=je(-ee.lat*.016,.045),ge=je(-ee.lon*.008,.03);He.rv+=((B-He.roll)*55-He.rv*8)*ne,He.roll+=He.rv*ne,He.pv+=((ge-He.pitch)*60-He.pv*9)*ne+ee.kick,He.pitch+=He.pv*ne,He.yv+=((ee.road-He.y)*85-He.yv*8)*ne+ee.jolt,He.y+=He.yv*ne,e.rotation.set(He.pitch,0,He.roll),e.position.y=.35+He.y}if(He.br+=((ee?ee.brake:0)-He.br)*Math.min(1,ne*14),l.emissiveIntensity=.35+Q*3.2+He.br*(1.7+Q*2),d.emissiveIntensity=He.br*(2.4+Q*1.6),f.emissiveIntensity=1+Q*3+He.br*(2+Q*2),xe.opacity=ue*Math.min(1,.22+l.emissiveIntensity*.22),xe.mesh.visible=xe.opacity>.01,ie>.15||Ne%2.6>.01){Ne+=ne;let B=Ne%2.6/2.6,ge=U=>U*U*(3-2*U),te=B<.25?ge(B/.25):B<.5?ge(1-(B-.25)/.25):0;We.rotation.z=.18+te*2.5,ie<=.15&&B>=.5&&(Ne=0)}nt.intensity=Q*60,m.emissiveIntensity=.15+Q*2.6}}}var Lo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var gi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},db=new Ns(-1,1,1,-1,0,1),Ed=class extends yt{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}},pb=new Ed,$s=class{constructor(e){this._mesh=new ht(pb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,db)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Do=class extends gi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vr.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $s(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ol=class extends gi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Qu=class extends gi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var eh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Pe);this._width=n.width,this._height=n.height,t=new zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Do(Lo),this.copyPass.material.blending=ei,this.timer=new Da}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ol!==void 0&&(o instanceof ol?n=!0:o instanceof Qu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var th=class extends gi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new _e}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Fg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var No=class i extends gi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new _e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new zt(r,o,{type:Mn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new zt(r,o,{type:Mn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let g=new zt(r,o,{type:Mn,depthBuffer:!1});g.texture.name="UnrealBloomPass.v"+h,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),r=Math.round(r/2),o=Math.round(o/2)}let a=Fg;this.highPassUniforms=vr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Pe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vr.clone(Lo.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:Lo.vertexShader,fragmentShader:Lo.fragmentShader,premultipliedAlpha:!0,blending:Oi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _e,this._oldClearAlpha=1,this._basic=new un,this._fsQuad=new $s(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Pe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],c=o+1<e?t[o+1]:0,u=a+c;s.push((o*a+(o+1)*c)/u),r.push(u)}return new xt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};No.BlurDirectionX=new Pe(1,0);No.BlurDirectionY=new Pe(0,1);var wd=class extends gi{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new zt(4,4,{type:Mn,depthBuffer:!1,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),this.mat=new xt({uniforms:{tDiffuse:{value:null},uTexel:{value:new Pe(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new $s(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},mb={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Pe(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Pe(1/1280,1/720)},uLo:{value:new k(-.014,0,.03)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function Bg(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new Pe),a=new zt(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:Mn,samples:n}),c=new eh(i,a);c.addPass(new th(e,t));let u=new wd;c.addPass(u);let h=new No(new Pe(o.x*r*.5,o.y*r*.5),.42,.55,.86);c.addPass(h);let p=new Do(mb);p.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},p.material.toneMapped=!1,c.addPass(p);let g=c.render.bind(c);return c.render=x=>{p.uniforms.toneMappingExposure.value=i.toneMappingExposure,g(x)},{composer:c,bloom:h,grade:p,refl:u}}function Og(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let Q=0;Q<2;Q++){let ie=s.getChannelData(Q);for(let ee=0;ee<n;ee++)ie[ee]=(Math.random()*2-1)*Math.pow(1-ee/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=900,a.Q.value=.3;let c=e.createGain();c.gain.value=.11,a.connect(c),c.connect(t),c.connect(r);let u=(Q,ie)=>{let ee=e.createBuffer(1,e.sampleRate*Q,e.sampleRate),ue=ee.getChannelData(0),B=0;for(let ge=0;ge<ue.length;ge++)ie?(B=(B+.02*(Math.random()*2-1))/1.02,ue[ge]=B*3.5):ue[ge]=Math.random()*2-1;return ee},h=(Q,ie,ee)=>{let ue=e.createBufferSource();ue.buffer=Q,ue.loop=!0;let B=e.createBiquadFilter();B.type=ie,B.frequency.value=ee;let ge=e.createGain();return ge.gain.value=0,ue.connect(B),B.connect(ge),ge.connect(t),ue.start(),{f:B,g:ge}},p=h(u(2,!0),"lowpass",400),g=h(u(3,!1),"lowpass",700);g.g.connect(r);let x=h(u(2,!1),"bandpass",5200);x.f.Q.value=6;let M=h(u(2,!0),"lowpass",240),S=h(u(3,!1),"bandpass",2600);S.f.Q.value=.35;let l=h(u(2,!0),"lowpass",520),f=h(u(2,!1),"bandpass",1500);f.f.Q.value=.7;let d=e.createBiquadFilter(),v=e.createGain(),m=e.createOscillator(),_=e.createOscillator(),T=e.createGain();m.type="sawtooth",_.type="triangle",d.type="lowpass",d.frequency.value=320,d.Q.value=.6,v.gain.value=0,T.gain.value=.5,m.connect(d),_.connect(T),T.connect(d),d.connect(v),v.connect(t),m.start(),_.start();let E=h(u(3,!1),"bandpass",750);E.f.Q.value=.6;let y=h(u(3,!0),"lowpass",420),b=h(u(2,!0),"lowpass",140),w=u(.03,!1),A=0;function P(Q,ie){let ee=e.createBufferSource(),ue=e.createBiquadFilter(),B=e.createGain();ee.buffer=w,ue.type="bandpass",ue.frequency.value=1800+Math.random()*2600,ue.Q.value=1.2,B.gain.setValueAtTime(ie*(.02+Math.random()*.03),Q),B.gain.exponentialRampToValueAtTime(1e-4,Q+.03),ee.connect(ue),ue.connect(B),B.connect(t),ee.start(Q),ee.stop(Q+.04)}let I=0,R=0;function L(Q,ie){let ee=e.createOscillator(),ue=e.createOscillator(),B=e.createGain(),ge=e.createBiquadFilter();ge.type="bandpass",ge.frequency.value=1150,ge.Q.value=2.2,ee.type="square",ee.frequency.value=745,ue.type="triangle",ue.frequency.value=1490,B.gain.setValueAtTime(0,Q),B.gain.linearRampToValueAtTime(.085*ie,Q+.004),B.gain.exponentialRampToValueAtTime(1e-4,Q+.3),ee.connect(ge),ue.connect(ge),ge.connect(B),B.connect(t),B.connect(r),ee.start(Q),ue.start(Q),ee.stop(Q+.33),ue.stop(Q+.33)}function D(Q,ie){let ee=e.createOscillator(),ue=e.createGain();ee.type="sine",ee.frequency.setValueAtTime(110,Q),ee.frequency.exponentialRampToValueAtTime(48,Q+.12),ue.gain.setValueAtTime(1e-4,Q),ue.gain.linearRampToValueAtTime(.22*ie,Q+.006),ue.gain.exponentialRampToValueAtTime(1e-4,Q+.17),ee.connect(ue),ue.connect(t),ee.start(Q),ee.stop(Q+.2)}let O=e.createGain();O.gain.value=1,O.connect(t);let V=e.createGain();V.gain.value=.35,O.connect(V),V.connect(r);let N=(Q=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return O;let ie=e.createStereoPanner();return ie.pan.value=Q,ie.connect(O),ie};function z(Q,ie,ee,ue,B,ge,te="sine",U=0){let C=e.createOscillator(),G=e.createGain();if(C.type=te,C.frequency.setValueAtTime(ie,Q),C.frequency.exponentialRampToValueAtTime(ee,Q+ue),U){let X=e.createOscillator(),j=e.createGain();X.frequency.value=U,j.gain.value=ie*.012,X.connect(j),j.connect(C.frequency),X.start(Q),X.stop(Q+ue+.05)}return G.gain.setValueAtTime(1e-4,Q),G.gain.linearRampToValueAtTime(B,Q+Math.min(.04,ue*.25)),G.gain.setValueAtTime(B,Q+ue*.7),G.gain.exponentialRampToValueAtTime(1e-4,Q+ue),C.connect(G),G.connect(ge),C.start(Q),C.stop(Q+ue+.02),G}function H(Q,ie){let ee=N(),ue=2+Math.floor(Math.random()*4),B=3200+Math.random()*1500;for(let ge=0;ge<ue;ge++){let te=Q+ge*(.09+Math.random()*.07);z(te,B,B*(1.2+Math.random()*.3),.06,ie*.022,ee)}}function Y(Q,ie){let ee=N();z(Q,1120,1390,1,ie*.03,ee,"sine",5.5),z(Q+1.15,2350,2150,.14,ie*.03,ee),z(Q+1.32,1700,1520,.13,ie*.028,ee),z(Q+1.5,2750,2480,.36,ie*.032,ee)}function le(Q,ie){let ee=N(),ue=1+Math.floor(Math.random()*3);for(let B=0;B<ue;B++){let ge=Q+B*.48,te=e.createOscillator(),U=e.createBiquadFilter(),C=e.createGain();te.type="sawtooth",te.frequency.setValueAtTime(560,ge),te.frequency.exponentialRampToValueAtTime(420,ge+.32),U.type="bandpass",U.frequency.value=1150,U.Q.value=1.6,C.gain.setValueAtTime(1e-4,ge),C.gain.linearRampToValueAtTime(ie*.03,ge+.03),C.gain.exponentialRampToValueAtTime(1e-4,ge+.36),te.connect(U),U.connect(C),C.connect(ee),te.start(ge),te.stop(ge+.4)}}function ze(Q,ie){let ee=N(),ue=2+Math.floor(Math.random()*2);for(let B=0;B<ue;B++)z(Q+B*.42,1750,1150,.36,ie*.022,ee,"triangle",11)}function Be(Q,ie){let ee=N(),ue=e.createOscillator(),B=e.createBiquadFilter(),ge=e.createGain(),te=240+Math.random()*220,U=5+Math.floor(Math.random()*4);ue.type="square",ue.frequency.value=te,B.type="bandpass",B.frequency.value=te*2.4,B.Q.value=3,ge.gain.setValueAtTime(1e-4,Q);for(let C=0;C<U;C++){let G=Q+C*.038;ge.gain.linearRampToValueAtTime(ie*.014,G+.008),ge.gain.linearRampToValueAtTime(1e-4,G+.028)}ue.connect(B),B.connect(ge),ge.connect(ee),ue.start(Q),ue.stop(Q+U*.038+.05)}function ye(Q,ie){let ee=N(),ue=4300+Math.random()*700;for(let B=0;B<3;B++)z(Q+B*.055,ue,ue*1.01,.035,ie*.009,ee)}function $(Q,ie){let ee=N(0);for(let[ue,B,ge]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let te=e.createOscillator(),U=e.createGain();te.type="sine",te.frequency.value=ue,te.detune.value=(Math.random()-.5)*8,U.gain.setValueAtTime(1e-4,Q),U.gain.linearRampToValueAtTime(ie*.05*B,Q+.03),U.gain.exponentialRampToValueAtTime(1e-4,Q+ge),te.connect(U),U.connect(ee),te.start(Q),te.stop(Q+ge+.1)}}function J(Q,ie){let ee=N();for(let ue of[Q,Q+.22])z(ue,2650,2600,.5,ie*.018,ee),z(ue,3950,3900,.35,ie*.008,ee)}let xe={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},ve=Q=>Q>1e-4?-Math.log(1-Math.random()*.98)/Q:1e9,Ee=Q=>440*Math.pow(2,(Q-69)/12),We=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Ne=[72,74,76,79,81,84,86,88],nt=0,He=e.currentTime+.2,je=e.currentTime+3;function ne(Q){let ie=We[nt++%We.length],ee=11;for(let ue of ie)for(let B of[-5,5]){let ge=e.createOscillator(),te=e.createGain();ge.type=B<0?"sine":"triangle",ge.frequency.value=Ee(ue),ge.detune.value=B,te.gain.setValueAtTime(0,Q),te.gain.linearRampToValueAtTime(.18,Q+3.5),te.gain.setValueAtTime(.18,Q+ee-4),te.gain.linearRampToValueAtTime(0,Q+ee+1),ge.connect(te),te.connect(a),ge.start(Q),ge.stop(Q+ee+1.2)}}function be(Q){let ie=Ne[Math.floor(Math.random()*Ne.length)],ee=e.createOscillator(),ue=e.createOscillator(),B=e.createGain(),ge=e.createGain();ee.type=ue.type="sine",ee.frequency.value=Ee(ie),ue.frequency.value=Ee(ie)*2.01,ge.gain.value=.25,ue.connect(ge),ge.connect(B),B.gain.setValueAtTime(0,Q),B.gain.linearRampToValueAtTime(.05,Q+.02),B.gain.exponentialRampToValueAtTime(1e-4,Q+4),ee.connect(B),B.connect(r),B.connect(t),ee.start(Q),ue.start(Q),ee.stop(Q+4.2),ue.stop(Q+4.2)}return{ac:e,muted:!1,tyres:f,engG:v,bump(Q){D(e.currentTime+.01,Q)},update(Q,ie,ee,ue={}){let B=e.currentTime;if((ue.bell||0)>.01)for(I<B&&(I=B+.02);I<B+.12;)L(I,ue.bell),I+=.41;let ge=ue.rain||0;S.g.gain.setTargetAtTime(ge*.05,B,.6),l.g.gain.setTargetAtTime(ge*.05,B,.6);let te=(ue.wetRoad||0)*Math.min(1,Q)**1.5,U=.8+.2*Math.sin(B*2.3)*Math.sin(B*.9+1);if(f.g.gain.setTargetAtTime(te*.045*U,B,.4),f.f.frequency.setTargetAtTime(900+1500*Math.min(Q,2),B,.4),ge>.05&&ue.roof)for(A<B&&(A=B+.02);A<B+.12;)P(A,ge),A+=.04+Math.random()*.12/ge;let C=ue.water||0,G=.6+.4*Math.sin(B*1.3)*Math.sin(B*.37);E.g.gain.setTargetAtTime(C*.035*G,B,.25),E.f.frequency.setTargetAtTime(600+400*G,B,.25);let X=.35+.65*Math.pow(.5+.5*Math.sin(B*.23)*Math.sin(B*.071+2),2),j=ue.rush||0;y.g.gain.setTargetAtTime(((ie.mountain||0)+(ie.snow||0)*.7)*.06*X+j*.055,B,.8),y.f.frequency.setTargetAtTime(260+420*X+j*500,B,.8);let oe=ue.train||0;if(M.g.gain.setTargetAtTime(oe*.16,B,.2),oe>.04)for(R<B&&(R=B+.02);R<B+.12;)D(R,oe),D(R+.15,oe*.8),R+=1.2;for(;He<B+1;)ne(He),He+=8;je<B+.5&&(be(je),je+=1.5+Math.random()*4.5);let me=ue.tunnel||0;{let q=ue.speed||0,W=ue.load||0,de=850+2400*(1-Math.exp(-q/15))+Math.max(0,q-25)*60+W*1300,Ue=de/40;m.frequency.setTargetAtTime(Ue,B,.25),_.frequency.setTargetAtTime(Ue*2,B,.25),d.frequency.setTargetAtTime(200+de*.08+W*260,B,.3),v.gain.setTargetAtTime((.008+.01*Math.min(1,q/15)+.024*W)*(1-.6*(ue.rush||0))*(ue.roof===!1?.5:1)*(1+.7*me),B,.3)}p.g.gain.setTargetAtTime((.03+Q*.06)*(1+1.6*me),B,.35),p.f.frequency.setTargetAtTime((250+Q*500)*(1+.5*me),B,.35),b.g.gain.setTargetAtTime(me*.07,B,.4),o.gain.setTargetAtTime(.55+.6*me,B,.4);let ce=.5+.5*Math.sin(B*.55)*Math.sin(B*.21+1);g.g.gain.setTargetAtTime(ie.coast*(.012+ce*.05),B,.3),g.f.frequency.setTargetAtTime(400+ce*900,B,.3);let fe=1-Math.min(1,ge*1.4),Ie=1-ee,$e=ue.dusk||0,Ce=ie.snow||0,Le=1-Ce,Fe={sparrow:ee*fe*.22*(.3+ie.city*.5+ie.sakura+ie.country*.8+ie.coast*.2+(ie.mountain||0)*.5)*(1-Ce*.8),uguisu:ee*fe*ie.sakura*.06,crow:fe*($e*.14+ee*(ie.city+ie.country+(ie.mountain||0)*1.5+Ce*2.5)*.012),gull:ee*ie.coast*fe*.16,frog:Ie*(ie.country*5+ie.sakura*.6+ie.coast*.3)*(1+ge*.6)*Le,cricket:Ie*fe*(1.6-ie.city*1.1+(ie.mountain||0)*.8)*Le,bike:ee*fe*ie.city*.014,bell:Ce*.022+(ie.mountain||0)*.006},Ke={sparrow:H,uguisu:Y,crow:le,gull:ze,frog:Be,cricket:ye,bike:J,bell:$};for(let q in Fe)B<xe[q]||(Fe[q]>1e-4&&Ke[q](B+.05,.6+Math.random()*.4),xe[q]=B+Math.max(.12,ve(Fe[q]||1e-6)));let ct=.5+.5*Math.sin(B*7)*Math.sin(B*.4);x.g.gain.setTargetAtTime((ie.country+ie.sakura*.3)*ee*.006*ct*(1-(ie.snow||0)),B,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function zg(i){let t=new jt(.075,.05),n=new un({color:16777215,side:mn}),s=new Bi(t,n,420);s.frustumCulled=!1,s.count=0;let r=new _e("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(m=>new _e(m));for(let m=0;m<420;m++)s.setColorAt(m,r);let a=Array.from({length:420},()=>({p:new k(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),c=new et,u=new _n,h=new oi,p=new k(1,1,1),g=new k,x=90,M=new Float32Array(x*3),S=Array.from({length:x},()=>({p:new k(1e9,0,0),ph:Math.random()*6.28})),l=new yt;l.setAttribute("position",new Ut(M,3));let f=new io({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Oi,opacity:0}),d=new da(l,f);d.frustumCulled=!1;let v=(m,_,T,E,y)=>{let b=y?8+Math.random()*42:-4+Math.random()*50,w=(Math.random()-.5)*40;m.p.set(_.x+T.x*b+E.x*w,_.y-1+Math.random()*9,_.z+T.z*b+E.z*w)};return{group:[s,d],shift(m,_){for(let T of a)T.p.x-=m,T.p.z-=_;for(let T of S)T.p.x-=m,T.p.z-=_},update(m,_,T,E,y,b,w,A,P,I=0){let R=Math.floor(420*Math.min(1,b*1.1+I*.55));n.color.setScalar(1-.72*A);let L=!1;s.count=R;for(let O=0;O<R;O++){let V=a[O];g.subVectors(V.p,T);let N=g.x*E.x+g.z*E.z,z=g.x*y.x+g.z*y.z;if(V.p.x>1e8||N<-6||N>55||Math.abs(z)>24||V.p.y<w-.5){v(V,T,E,y,V.p.x<1e8);let H=Math.random()*(b+I)<I;(H!==V.leaf||H)&&(V.leaf=H,s.setColorAt(O,H?o[Math.floor(Math.random()*o.length)]:r),L=!0)}V.p.y-=V.v*m,V.p.x+=Math.sin(_*.7+V.ph)*.4*m+.25*m,V.p.z+=Math.cos(_*.5+V.ph)*.3*m,h.set(_*V.sp+V.ph,_*V.sp*.7,V.ph),u.setFromEuler(h),p.setScalar(V.leaf?1.9:1),c.compose(V.p,u,p),s.setMatrixAt(O,c)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let D=A*P;if(f.opacity=D,d.visible=D>.01,d.visible){for(let O=0;O<x;O++){let V=S[O];g.subVectors(V.p,T);let N=g.x*E.x+g.z*E.z,z=g.x*y.x+g.z*y.z;if(V.p.x>1e8||N<-4||N>60||Math.abs(z)>30){let H=2+Math.random()*55,Y=(Math.random()-.5)*55;V.p.set(T.x+E.x*H+y.x*Y,w+.3+Math.random()*2.2,T.z+E.z*H+y.z*Y)}V.p.x+=Math.sin(_*.6+V.ph*3)*.3*m,V.p.y+=Math.sin(_*.9+V.ph)*.2*m,V.p.z+=Math.cos(_*.5+V.ph*2)*.3*m,M[O*3]=V.p.x,M[O*3+1]=V.p.y,M[O*3+2]=V.p.z}l.attributes.position.needsUpdate=!0}}}}var at=new URLSearchParams(location.search),Uo=at.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();Uo&&document.body.classList.add("embed");at.has("shot")&&document.body.classList.add("shot");zp(at.has("seed")?parseInt(at.get("seed")):Math.random()*1e9|0);Hp(at.get("env")||"city");var Dn=i=>document.getElementById(i),Fo=i=>{let e=Dn("loading");e&&(e.textContent=i)};async function gb(){await new Promise(Te=>setTimeout(Te,30));let i=Dn("c"),e=new Tu({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=at.get("q")||(Uo||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?Uo?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=qt,e.toneMapping=Na,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=dr,e.debug.checkShaderErrors=at.has("debug");let r=at.get("clouds")||"painted",o=n==="high"&&innerHeight*s>=900?"hi":"lo",a=r==="old"?Promise.resolve(null):pg(o),c=gg(o),u=xg(n==="high"&&innerHeight*s>=560?"hi":"lo"),h=new cr;h.fog=new ca(13032946,.0019,700);let p=new Nn(52,innerWidth/innerHeight,.5,7e3),g=new co(16777215,3);g.castShadow=!0;let x=n==="low"?1024:n==="mid"?1536:2048;g.shadow.mapSize.set(x,x),$f(at.has("pcf")?parseInt(at.get("pcf")):1);let M=62,S=g.shadow.camera,l=new et,f=new et;Object.assign(S,{left:-M,right:M,top:M,bottom:-M,near:1,far:420});let d=new k(0,1,0),v=new k,m=new k,_=new k,T=new k(0,1,0),E=new k(0,150,60),y=new k,b=new k,w=null,A=0,P=0,I=0;g.shadow.updateMatrices=function(){S.position.copy(E),S.lookAt(y),S.updateMatrixWorld(),S.updateProjectionMatrix(),f.multiplyMatrices(S.matrixWorldInverse,l).multiply(S.matrixWorld),S.projectionMatrix.multiply(f),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),this._updateMatrix(S,this.matrix,this._frustum)};let R=!0;g.shadow.bias=-4e-4;let L=()=>{g.shadow.normalBias=at.has("nb")?parseFloat(at.get("nb")):1.5*2*M/g.shadow.mapSize.x};L();{let[Te,Mt]=(at.get("graze")||"0,0.12").split(",").map(Number);Qp(Te,Mt)}h.add(g,g.target);let D=new co(16777215,0);D.castShadow=n!=="low"&&!at.has("nocarsh");{let Te=at.has("carsm")?parseInt(at.get("carsm")):n==="high"?512:384;D.shadow.mapSize.set(Te,Te)}if(Object.assign(D.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),D.shadow.bias=-2e-4,D.shadow.normalBias=.025,h.add(D,D.target),D.castShadow){let Te=g.shadow.getFrustum(),Mt=D.shadow.getFrustum();for(let it of[ht,fa]){let tn=it.prototype.intersectsFrustum;it.prototype.intersectsFrustum=function(Ot){return Ot===Mt?this.userData.car===!0:(Ot!==Te||this.userData.car!==!0)&&tn.call(this,Ot)}}}let O=new Pa(10799359,13154464,1.6);h.add(O),Fo("painting the town\u2026"),await new Promise(Te=>setTimeout(Te,10));let V=xm();Em(V);let N=_m(e);Lm(N.cells),Oe.uTuftV.value.set(...N.tuftV);let z=cm(V.textures(e),N.tex),H=im();H.update(e,0,0,0,0),Fo("painting the clouds\u2026"),await new Promise(Te=>setTimeout(Te,10)),Dm(at.has("leafd")?parseFloat(at.get("leafd")):n==="high"?.72:.62);{let Te=await u;if(Te){wi.cells=Te.cells.filter(tn=>tn.kind==="leaf"),Te.tex.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy());let Mt=jf(Te.tex);z.gleaf=Mt.mat,z.gleafDepth=Mt.depth;let it=Te.cells.filter(tn=>tn.kind==="blossom");it.length&&(wi.bcells=it,z.gblossom=jf(Te.tex,{blossom:!0}).mat)}}Om();let Y=new Iu,le=Ig(),ze=Lg(),Be=Rg(n,at.has("grass")?at.get("grass").split(",").map(Number):null);for(let Te of Be.meshes)h.add(Te);let ye=new Ku(h,Y,z,le,ze),$=rg();h.add($);let J=lg();h.add(J.group);let xe=Pg();h.add(xe.mesh);let ve=Ug();ve.group.rotation.order="YXZ",h.add(ve.group),ve.group.traverse(Te=>{Te.userData.car=!0});let Ee=zg(z.glowTex);Ee.group.forEach(Te=>h.add(Te));let We=at.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),Ne=Bg(e,h,p,{msaa:We==="msaa"?n==="high"?4:2:0,fxaa:We==="fxaa"});Oe.uReflTex.value=Ne.refl.rt.texture;let nt=await a,He=nt?mg(nt,Ne):null;He&&h.add(He.mesh);let je=!He||r==="both"?ag(og(e)):null;je&&h.add(je.group);let ne=await c,be=ne?vg(ne,Ne,h.fog.color):null;be&&h.add(be.mesh);let Q=new k,ie=new k,ee=at.get("refl")||"auto",ue=at.has("backlit")?parseFloat(at.get("backlit")):1,B=[7.5,3,2.3],ge=[1.7,1.15,1],te=.7,U=at.has("lightson")?parseFloat(at.get("lightson")):-1,C=new k,G=at.has("haze")?parseFloat(at.get("haze")):1,X=fm();h.add(X.group);let j=dm();h.add(j.group);let oe=Sg(at),me=Eg(),ce=Tg();h.add(me.mesh,ce.mesh);let fe=wg();h.add(fe.mesh);let Ie=Ag();h.add(Ie.mesh);let $e=new _e,Ce=new _e,Le=new gt,Fe=Cg();h.add(Fe.mesh);let Ke=oe.W.rain,ct=.4,q=5.5,W={s:Math.max(100,parseFloat(at.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:kt(parseFloat(at.get("t"))||.4,0,.999),todPaused:at.has("freeze"),dist:0,spray:at.has("nospray")?0:1,grass:1,pclouds:1,band:1,cam:{low:1,eye:2,top:3,film:4}[at.get("cam")]??(Uo?4:0)},de=!1;He&&(He.opening=["sakura","city"].includes(Qt(W.s))?"center":"flank"),Fo("building the road\u2026"),await new Promise(Te=>setTimeout(Te,10));let Ue=Uo?620:ye.ahead;ye.ahead=260;let Ve=at.has("detail")?parseFloat(at.get("detail")):380,Se=at.has("farleaf")?parseFloat(at.get("farleaf")):540;for(;ye.update(W.s,1e9););ye.flush(),ye.ahead=Ue;{Fo("preparing the light\u2026"),await new Promise(Ot=>setTimeout(Ot,10));let Te=new nn,Mt=new yt;Mt.setAttribute("position",new Ze([0,0,0,.01,0,0,0,.01,0],3)),Mt.setAttribute("normal",new Ze([0,1,0,0,1,0,0,1,0],3)),Mt.setAttribute("uv",new Ze([0,0,1,0,0,1],2)),Mt.setAttribute("color",new Ze([1,1,1,1,1,1,1,1,1],3));let it=[z.color,z.atlas,z.foliage,z.leaf,z.lamp,z.sig,z.sodium,z.decal,z.pool,le,ze,...z.gleaf?[z.gleaf]:[],...z.gblossom?[z.gblossom]:[]];for(let Ot=0;Ot<mi.length;Ot++)it.push(Qa([mi[Ot]])),it.push(Qa([mi[Ot],mi[(Ot+1)%mi.length]]));for(let Ot of it){let rn=new ht(Mt,Ot);rn.castShadow=rn.receiveShadow=!0,rn.frustumCulled=!1,(Ot===z.gleaf||Ot===z.gblossom)&&(rn.customDepthMaterial=z.gleafDepth),Te.add(rn)}Te.position.set(0,0,0),h.add(Te),g.target.position.set(0,0,0),g.position.set(0,150,60);let tn=[me.mesh,ce.mesh,fe.mesh,Ie.mesh,j.group,X.group,xe.mesh].filter(Ot=>!Ot.visible);for(let Ot of tn)Ot.visible=!0;Be.warm(!0),e.setRenderTarget(Ne.composer.readBuffer),e.compile(h,p),e.render(h,p),e.setRenderTarget(null);for(let Ot of tn)Ot.visible=!1;Be.warm(!1),h.remove(Te),Mt.dispose(),Ne.bloom.enabled=Ne.refl.enabled=!0,Ne.composer.render(0),Ne.bloom.enabled=Ne.refl.enabled=!1}let De={k:Math.ceil((W.s-yr)/_r),phase:"idle",raise:1,decided:!1,t2:0},Ae={},rt={},tt={},li=at.has("yaw")||at.get("cam")==="top",Bn=new k,Ks=new k,$n=new k,Js=!1,js=new k,Bo=new k,al=Dn("spd"),ll=Dn("dist"),ss=Dn("clock"),ys=Dn("zone"),Qs=Dn("start"),Oo=Dn("hint"),$t=null,zo=null,er=0,ko=0;function cl(Te){!de||Te===zo||(zo=Te,ys.querySelector(".jp").textContent=Ya[Te].jp,ys.querySelector(".en").textContent=Ya[Te].en,ys.classList.add("on"),clearTimeout(er),er=setTimeout(()=>ys.classList.remove("on"),5200))}function Ho(){if(!de){if(de=!0,document.body.classList.remove("pre"),!at.has("auto"))try{$t=Og(),$t&&$t.ac.resume()}catch{$t=null}Qs.style.opacity=0,setTimeout(()=>Qs.remove(),1500),Uo||(Oo.style.opacity=.75,setTimeout(()=>Oo.style.opacity=0,9e3))}}let On={};addEventListener("keydown",Te=>{On[Te.key]=!0,(Te.key==="m"||Te.key==="M")&&Vo(),(Te.key==="t"||Te.key==="T")&&F(),(Te.key==="c"||Te.key==="C")&&se(),(Te.key==="r"||Te.key==="R")&&Je(),!de&&(Te.key===" "||Te.key==="Enter")&&Ho()}),addEventListener("keyup",Te=>{On[Te.key]=!1});let dn=null;i.addEventListener("pointerdown",Te=>{dn={id:Te.pointerId,x:Te.clientX,y:Te.clientY,sy:Te.clientY,sc:W.mult}});let ul=Te=>kt(Te.sc*Math.exp(-((Te.y-Te.sy)/innerHeight)*3.4),ct,q);addEventListener("pointermove",Te=>{dn&&Te.pointerId===dn.id&&(dn.x=Te.clientX,dn.y=Te.clientY,W.mult=ul(dn))}),addEventListener("pointerup",()=>{dn=null}),addEventListener("pointercancel",()=>{dn=null}),i.addEventListener("touchstart",Te=>{let Mt=Te.changedTouches[0];dn={id:"touch",x:Mt.clientX,y:Mt.clientY,sy:Mt.clientY,sc:W.mult},Te.preventDefault()},{passive:!1}),i.addEventListener("touchmove",Te=>{if(!dn)return;let Mt=Te.changedTouches[0];dn.x=Mt.clientX,dn.y=Mt.clientY,W.mult=ul(dn),Te.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{dn=null}),i.addEventListener("touchcancel",()=>{dn=null});function Vo(){$t&&($t.toggle(),Dn("snd").style.opacity=$t.muted?.4:1)}function F(){W.todPaused=!W.todPaused,Dn("tim").style.opacity=W.todPaused?.4:1}let K=[0,1,2,4],he={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function se(){W.cam=K[(K.indexOf(W.cam)+1)%K.length],Dn("cam").textContent=he[W.cam]||"\u25D0",W.cam===4&&Xe()}let re=["chase","side","road","crane","eye","side","road"],we={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function Xe(){let Te;do Te=re[Math.floor(Math.random()*re.length)];while(Te===we.last);{let Mt=Ti(W.s+60);Mt&&Math.abs(W.s+60-Mt.s)<ln+120&&(Te=Math.random()<.6?"chase":"eye")}if(Object.assign(we,{type:Te,last:Te,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),Te==="road"){let Mt=W.s+40+Math.random()*18,it=In(Mt,"rw"),tn=Math.random()<.6?-1:1,Ot=tn*(it+(tn<0?.9:1.3)),rn=Y.at(Mt,{}),fl=rn.y+Vs(Mt,Ot,rn.y,it);we.anchor={x:rn.x+rn.rx*Ot,y:Math.max(fl,rn.y)+1.05,z:rn.z+rn.rz*Ot,s:Mt}}Js=!1}let ke={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function Je(){Dn("wx").textContent=ke[oe.cycle()]}Dn("wx").textContent=ke[oe.W.mode],Dn("cam").textContent=he[W.cam]||"\u25D0",W.cam===4&&Xe(),Dn("wx").onclick=Te=>{Te.stopPropagation(),Je()},Dn("snd").onclick=Te=>{Te.stopPropagation(),Vo()},Dn("tim").onclick=Te=>{Te.stopPropagation(),F()},Dn("cam").onclick=Te=>{Te.stopPropagation(),se()};let Qe=0,bt=Te=>{let Mt=performance.now();Mt-Qe<120||(Qe=Mt,Te.cancelable&&Te.type!=="click"&&Te.preventDefault(),Ho())};for(let Te of["touchstart","pointerdown","mousedown","click"])Qs.addEventListener(Te,bt,{passive:!1});let Tt=()=>{$t&&$t.ac.state!=="running"&&$t.ac.resume()};for(let Te of["touchend","click","keydown"])addEventListener(Te,Tt,{passive:!0});document.addEventListener("visibilitychange",()=>{$t&&(document.hidden?$t.ac.suspend():$t.ac.resume())});let Ye=!1,Pt="",Wt=52,Nt=0;function Ft(){let Te=innerWidth,Mt=innerHeight,it=Te/Mt,tn=Te+"x"+Mt+"@"+s;tn!==Pt&&(Pt=tn,e.setPixelRatio(s),e.setSize(Te,Mt,!1),Ne.composer.setPixelRatio(s),Ne.composer.setSize(Te,Mt),p.aspect=it,Wt=it>=1?52:kt(2*Math.atan(Math.tan(34*Math.PI/180)/it)*180/Math.PI,52,80),p.fov=Wt+Nt,p.updateProjectionMatrix(),Ne.grade.uniforms.uAspect.value=it,Ne.grade.uniforms.uTexel.value.set(1/Ne.composer.readBuffer.width,1/Ne.composer.readBuffer.height),Oe.uReflRes.value.set(Ne.composer.readBuffer.width,Ne.composer.readBuffer.height),hg(e))}addEventListener("resize",()=>{Ye=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Ye=!0}),Ft();let pn=0;function qe(Te=!0){if(s>1.05)s=Math.max(1,s-.25),Ye=!0;else if(R)R=!1,Ne.bloom.enabled=!1;else if(g.shadow.mapSize.x>1024)g.shadow.mapSize.set(1024,1024),L(),g.shadow.map&&(g.shadow.map.dispose(),g.shadow.map=null);else if(ye.ahead>430)ye.ahead=430;else return;if(pn++,Te)try{localStorage.setItem("icd-q",String(pn))}catch{}}try{let Te=parseInt(localStorage.getItem("icd-q")||"0");if(!at.has("q"))for(let Mt=0;Mt<Math.min(Te,6);Mt++)qe(!1);pn=Math.max(pn,Te||0)}catch{}let Rn=performance.now(),ft=0,Kn=0,zn=0,Jn=()=>1-ae.night,qi=0,lt=0,en=0,pt=at.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;pt&&(pt.gl=e.getContext(),pt.tq=pt.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let St={p:-1,a:new k,b:new k,next:5},_t={lat:0,lon:0,road:0,jolt:0,kick:0,u:W.u,vu:0,v:0,s:W.s,yaw:0,brake:0,rk:NaN,rb:null},Ms=new _e(3.6,2.8,1.8),hl=[-2.5335,-1.4665,1.4665,2.5335],Ad=[1.12,-1.12],kg=[-24.5,24.5];function Rd(Te){requestAnimationFrame(Rd);let Mt=performance.now();Ye&&(Ye=!1,Ft());let it=Math.min(.05,Math.max(0,(Te-Rn)/1e3));Rn=Te,ft+=it,W.steer=0,(On.ArrowLeft||On.a||On.A)&&(W.steer=-1),(On.ArrowRight||On.d||On.D)&&(W.steer=1),(On.ArrowUp||On.w||On.W)&&(W.mult=kt(W.mult*Math.exp(it*.9),ct,q)),(On.ArrowDown||On.s||On.S)&&(W.mult=kt(W.mult*Math.exp(-it*.9),ct,q)),dn&&Math.abs(dn.y-dn.sy)<30&&(W.steer=dn.x<innerWidth/2?-1:1),W.steer&&(W.lastInput=Te,W.uHome=W.u);let tn=Mo(De.k);W.s-tn>24&&(De.k++,tn=Mo(De.k),Object.assign(De,{phase:"idle",raise:1,decided:!1}));let Ot=$a(tn),rn=tn-W.s;Ot&&!De.decided&&rn<150&&(De.decided=!0,rn>75&&de&&W.speed*W.speed/2.5<rn-14&&(at.has("xing")||Yn(De.k,99)<.8)&&(De.phase="warn",j.start(tn,Yn(De.k,7)<.5?1:-1,16))),De.phase==="warn"?(De.raise=Math.max(0,De.raise-it/6),j.st.cleared&&(De.phase="clear",De.t2=0)):De.phase==="clear"?(De.raise=Math.max(0,De.raise-it/6),(De.t2+=it)>2.2&&(De.phase="raise")):De.phase==="raise"&&(De.raise=Math.min(1,De.raise+it/5),De.raise>=1&&(De.phase="idle"));let fl=De.phase==="warn"||De.phase==="clear"||De.phase==="raise"&&De.raise<.25,dl=In(W.s,"speed")*W.mult*(de?1:.55);if(De.phase!=="idle"&&De.raise<.8&&rn>0){let Re=rn-11.2,st=Re>0?Math.sqrt(2*1.25*Re):0;dl=Math.min(dl,st),W.speed=Math.min(W.speed,st)}at.has("park")&&(dl=0,W.speed=0),W.speed+=(dl-W.speed)*Math.min(1,it*.5),W.s+=W.speed*it,W.dist+=W.speed*it;let pl=In(W.s,"rw");W.steer?W.u=kt(W.u+W.steer*it*2.4,-pl+.85,pl-.85):Te-W.lastInput>3e3&&(W.u+=(kt(W.uHome,-pl+.85,pl-.85)+Math.sin(ft/11)*.1-W.u)*Math.min(1,it*.9)),!W.todPaused&&de&&(W.tod=(W.tod+it/480*(ae.night>.5?1.7:1))%1),ng(W.tod),oe.update(it);let kn=oe.W.ov,rs=oe.W.rain;sg(kn,rs),Ke=kt(Ke+(rs>.25?it/18:-it/120),0,1);let Cd=performance.now();ye.update(W.s,de?3.5:14);let Pd=performance.now();if(Y.at(W.s,Ae),Math.abs(Ae.x-ye.origin.x)>900||Math.abs(Ae.z-ye.origin.z)>900){let Re=Math.round(Ae.x)-ye.origin.x,st=Math.round(Ae.z)-ye.origin.z;ye.setOrigin(Math.round(Ae.x),Math.round(Ae.z)),Bn.x-=Re,Bn.z-=st,Ks.x-=Re,Ks.z-=st,Ee.shift&&Ee.shift(Re,st),Fe.shift(Re,st),fe.shift(Re,st)}let Ci=ye.origin.x,Pi=ye.origin.z,Hg=(Y.at(W.s+1.5,tt).y-Y.at(W.s-1.5,rt).y)/3,Vg=(tt.h-rt.h)/3;if(ve.group.position.set(Ae.x+Ae.rx*W.u-Ci,Ae.y+.01,Ae.z+Ae.rz*W.u-Pi),it>0){let Re=_t.vu+((W.u-_t.u)/it-_t.vu)*Math.min(1,it*6),st=(Re-_t.vu)/it;_t.u=W.u,_t.vu=Re,_t.lat=st-W.speed*W.speed*Vg,_t.lon+=((W.speed-_t.v)/it-_t.lon)*Math.min(1,it*8),_t.v=W.speed;let ot=De.phase!=="idle"&&rn>0&&rn<20&&W.speed<.5;if(_t.brake=_t.lon<-.6||ot?1:_t.lon>-.3?0:_t.brake,_t.yaw=-kt(Math.atan(Re/Math.max(W.speed,6))*.8,-.1,.1),_t.road=.004*Math.sin(W.s*.48)+.003*Math.sin(W.s*.86+1.3),_t.jolt=_t.kick=0,Ot)for(let Et=0;Et<4;Et++)for(let Vt=0;Vt<2;Vt++){let Gt=tn+hl[Et]-Ad[Vt];if(_t.s<Gt&&W.s>=Gt){let Kt=.05+Math.min(W.speed,25)*.004;_t.jolt+=Kt,_t.kick+=Vt?Kt*.9:-Kt*.9,$t&&$t.bump(.25+Math.min(W.speed,25)/50)}}{let Et=Math.round((W.s-bo)/Mr);Et!==_t.rk&&(_t.rk=Et,_t.rb=Si(W.s));let Vt=_t.rb;if(Vt)for(let Gt=0;Gt<2;Gt++)for(let Kt=0;Kt<2;Kt++){let si=Vt.s+kg[Gt]-Ad[Kt];if(_t.s<si&&W.s>=si){let Cn=.035+Math.min(W.speed,25)*.003;_t.jolt+=Cn,_t.kick+=Kt?Cn*.9:-Cn*.9,$t&&$t.bump(.2+Math.min(W.speed,25)/60)}}}_t.s=W.s}ve.group.rotation.set(-Math.atan(Hg),Ae.h+_t.yaw,0);let tr=Ti(W.s);tr&&Math.abs(W.s-tr.s)<700?(Y.at(tr.s-hn,tt),Oe.uTunA.value.set(tt.x-Ci,tt.y,tt.z-Pi),Y.at(tr.s+hn,tt),Oe.uTunB.value.set(tt.x-Ci,tt.y,tt.z-Pi),Oe.uTunR.value=In(tr.s,"rw")+1.7):(Oe.uTunA.value.set(0,-1e4,0),Oe.uTunB.value.set(0,-1e4,0));let nh=tr&&Math.abs(W.s+1-tr.s)<hn-1.5?1:0;lt+=(nh-lt)*Math.min(1,it*(nh?1.6:.7)),Oe.uCarPos.value.set(ve.group.position.x+Ae.fx*1.7,ve.group.position.y+.8,ve.group.position.z+Ae.fz*1.7),Oe.uCarFwd.value.set(Ae.fx,-.05,Ae.fz).normalize(),Oe.uHead.value=nh,ve.update(it,W.speed,Math.max(ae.night,lt),rs,_t,en),X.update(Ot&&rn>-24&&rn<700?Fu(Y,tn):null,ye.origin,De.raise,fl,ft),j.update(it,Y,ye.origin,It(.15,.8,ae.night),In(tn,"rw")+3.2);let ih=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(at.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(at.has("rig")){let[Re,st,ot,Et]=at.get("rig").split(",").map(Number);Object.assign(ih[0],{back:Re,up:st,ahead:ot,lookY:Et})}let nr=new k,Go=6,Id=W.cam===2;if(W.cam===4){we.t+=it;{let ot=Ti(W.s+30);ot&&Math.abs(W.s+30-ot.s)<ln+70&&we.type!=="chase"&&we.type!=="eye"&&(we.type="chase",we.t=0,we.dur=20,Js=!1)}(we.t>we.dur+(we.type==="road"?8:0)||we.type==="road"&&we.anchor&&W.s>we.anchor.s+24)&&Xe();let Re=ve.group.position,st=we.type;if(st==="chase"||st==="eye"){let ot=ih[st==="eye"?2:0];Id=st==="eye",Y.at(W.s-ot.back,rt),Y.at(W.s+ot.ahead,tt),$n.set(rt.x+rt.rx*W.u*ot.cu-Ci,rt.y+ot.up,rt.z+rt.rz*W.u*ot.cu-Pi),nr.set(tt.x+tt.rx*W.u*ot.lu-Ci,tt.y+ot.lookY,tt.z+tt.rz*W.u*ot.lu-Pi)}else if(st==="side"){Y.at(W.s+1.5,rt);let ot=Dt(W.s),Et=ot.city+ot.sakura>.5,Vt=In(W.s,"rw"),Gt=we.sideSign>0?Vt+(Et?1.45:3.4):-(Vt+1.5),Kt=rt.y+Vs(W.s+1.5,Gt,rt.y,Vt);$n.set(rt.x+rt.rx*Gt-Ci,Math.max(Kt+1.55,rt.y+1.25),rt.z+rt.rz*Gt-Pi),nr.set(Re.x+Ae.fx*2.5,Re.y+.9,Re.z+Ae.fz*2.5),Go=4}else if(st==="road"&&we.anchor)$n.set(we.anchor.x-Ci,we.anchor.y,we.anchor.z-Pi),nr.set(Re.x,Re.y+.85,Re.z),Go=30;else{Y.at(W.s-20,rt),Y.at(W.s+34,tt);let ot=14+Math.min(we.t,20)*.35;$n.set(rt.x+rt.rx*W.u*.4-Ci,rt.y+ot,rt.z+rt.rz*W.u*.4-Pi),nr.set(tt.x-Ci,tt.y+1,tt.z-Pi),Go=3}}else{let Re=ih[W.cam];Y.at(W.s-Re.back,rt),Y.at(W.s+Re.ahead,tt);let st=W.u*Re.cu,ot=st+(Re.side||0);$n.set(rt.x+rt.rx*ot-Ci,rt.y+Re.up,rt.z+rt.rz*ot-Pi),nr.set(tt.x+tt.rx*W.u*Re.lu-Ci,tt.y+Re.lookY,tt.z+tt.rz*W.u*Re.lu-Pi)}ve.group.visible=!Id,W.cam===3?p.up.set(Ae.fx,0,Ae.fz):p.up.set(0,1,0),Js||(Bn.copy($n),Ks.copy(nr),Js=!0);let Ld=1+Math.max(0,W.speed-12)/12;Bn.lerp($n,1-Math.exp(-it*Go*Ld)),Ks.lerp(nr,1-Math.exp(-it*Math.min(Go,8)*Ld));{let Re=W.cam===3?0:Math.min(kt((W.speed-16)*.22,0,11),Math.max(0,84-Wt));Nt+=(Re-Nt)*Math.min(1,it*1.5),Math.abs(p.fov-(Wt+Nt))>.02&&(p.fov=Wt+Nt,p.updateProjectionMatrix())}p.position.copy(Bn),p.lookAt(Ks),at.has("yaw")&&p.rotateY(parseFloat(at.get("yaw"))*Math.PI/180),at.has("pitch")&&p.rotateX(parseFloat(at.get("pitch"))*Math.PI/180),js.set(Ae.fx,0,Ae.fz),Bo.set(Ae.rx,0,Ae.rz);{let Re=ve.group.position,st=p.position.x-Re.x,ot=p.position.z-Re.z,Et=W.cam===4&&we.type!=="chase"&&we.type!=="eye",Vt=W.s+st*Ae.fx+ot*Ae.fz-(Et?10:0),Gt=Et||li?40:Math.tan(p.fov*Math.PI/360)*p.aspect*1.08;Be.update(Y,Vt,W.u+st*Ae.rx+ot*Ae.rz,ye.origin.x,ye.origin.z,In(W.s,"rw"),Gt),W.grass||Be.hide()}let Xt=Dt(W.s),sh=1+.25*ae.bright*(1-lt);g.color.copy(ae.sunCol),g.intensity=ae.sunI/sh;{let Re=ae.lightDir;if(d.angleTo(Re)>.1){let Cn=0;if(de&&!W.todPaused)for(let jn=1;jn<=60&&!(gd(W.tod+jn*.001,b).angleTo(Re)>.09);jn++)Cn=jn;gd(W.tod+Cn*.001,d),A=P=0}v.crossVectors(T,d).normalize(),m.crossVectors(d,v),_.set(ve.group.position.x+Ae.fx*26,ve.group.position.y,ve.group.position.z+Ae.fz*26),g.target.position.copy(_),g.position.copy(_).addScaledVector(Re,200);let st=2*M/g.shadow.mapSize.x,ot=d.x/d.y-Re.x/Re.y,Et=d.z/d.y-Re.z/Re.y;st!==I&&(I=st,A=P=0);{let Cn=Math.round(ve.group.position.y);if(w===null)w=Cn;else if(Math.abs(ve.group.position.y-w)>3){let jn=Cn-w;A-=jn*(ot*v.x+Et*v.z),P-=jn*(ot*m.x+Et*m.z),w=Cn}}let Vt=ye.origin.x,Gt=ye.origin.z,Kt=_.dot(v)+Vt*v.x+Gt*v.z-A,si=_.dot(m)+Vt*m.x+Gt*m.z-P;_.addScaledVector(v,Math.round(Kt/st)*st-Kt).addScaledVector(m,Math.round(si/st)*st-si),y.copy(_),E.copy(_).addScaledVector(d,200),l.set(1,ot,0,-w*ot,0,1,0,0,0,Et,1,-w*Et,0,0,0,1)}D.target.position.set(ve.group.position.x,ve.group.position.y+.9,ve.group.position.z),D.position.copy(D.target.position).addScaledVector(ae.lightDir,12),O.color.copy(ae.hemiSky),O.groundColor.copy(ae.hemiGround),O.intensity=ae.hemiI/sh;{let Re=(1-ae.night)*(1-kn);if(Re>.001){p.getWorldDirection(C);let st=C.x,ot=C.z,Et=Math.hypot(st,ot)||1,Vt=ae.sunDir,Gt=0;for(let si=-2;si<=2;si++){let Cn=si*.3,jn=Math.cos(Cn),ir=Math.sin(Cn),Rr=(st*jn-ot*ir)/Et,Cr=(st*ir+ot*jn)/Et,Wo=Math.max(0,Rr*Vt.x+Cr*Vt.z),Pr=Wo*Wo;Gt+=Pr*Pr*Pr}let Kt=Gt/5*(.1+.35*ae.warm)*1.4*Re*G;ae.fog.r+=ae.sunCol.r*Kt,ae.fog.g+=ae.sunCol.g*Kt,ae.fog.b+=ae.sunCol.b*Kt}}h.fog.color.copy(ae.fog);let Dd=(Xt.city*.0022+Xt.sakura*.0019+Xt.coast*.0011+Xt.country*.0014+Xt.mountain*.0017+Xt.snow*.0021)*(1+ae.night*.25);h.fog.near=Dd*(1+.55*kn+.45*rs),h.fog.far=ye.ahead*.92,Oe.uSkyHor.value.copy(ae.horizon),Oe.uSkyZen.value.copy(ae.zenith),Oe.uTime.value=ft,Oe.uWet.value=Ke*(1-Xt.snow),Oe.uSakWet.value=te,en=Math.max(Oe.uWet.value,Oe.uSakWet.value*Xt.sakura)*(1-lt);{let Re=(Oe.uWet.value>.04||Oe.uSakWet.value*Math.max(Xt.sakura,Vp(W.s+120,"sakura"))>.04)&&n!=="low"&&lt<.5&&ee!=="0";if(Ne.refl.enabled=Re&&ee!=="taps",Oe.uReflOn.value=Re&&ee!=="copy"?1:0,Re){p.getWorldDirection(ie),ie.y=0,ie.normalize(),Q.copy(p.position).addScaledVector(ie,1e4).project(p),Oe.uHorizon.value=Q.y*.5+.5;let st=Math.max(.5,p.position.y-ve.group.position.y);Oe.uReflK.value=kt(1-2*st/(5+st),.05,1)}}Oe.uOrigin.value.set(ye.origin.x,ye.origin.z),Oe.uWind.value=1+.8*rs,Oe.uCloudSh.value=(1-kn)*It(.04,.3,ae.sunEl)*(1-ae.night),Oe.uCloudSh.value>.001&&H.update(e,p.position.x,p.position.z,ye.origin.x,ye.origin.z);let ci=$.material.uniforms;if(ci.uBright.value=ae.bright,ci.uNight.value=ae.night,ci.uWarm.value=ae.warm,ci.uTime.value=ft,ci.uCirrusCol.value.copy(ae.cLit).lerp(ae.horizon,.25),ci.uCirrus.value=.6*(1-kn)*(1-.65*It(.4,.9,ae.night)),ci.uOvercast.value=kn,ci.uMilky.value=It(.55,.95,ae.night)*(1-kn),ae.night>.65&&kn<.3&&St.p<0&&(St.next-=it)<0){let Re=Math.atan2(Ae.fx,Ae.fz)+(Math.random()-.5)*1.5,st=.45+Math.random()*.6,ot=.22+Math.random()*.2,Et=(Math.random()-.5)*.6,Vt=(Gt,Kt)=>new k(Math.cos(Gt)*Math.sin(Kt),Math.sin(Gt),Math.cos(Gt)*Math.cos(Kt));St.a.copy(Vt(st,Re)),St.b.copy(Vt(st-ot,Re+Et)),St.p=0,St.next=at.has("meteors")?1:6+Math.random()*20}St.p>=0&&(St.p+=it/.85,St.p>1.3&&(St.p=-1)),ci.uMetP.value=St.p,ci.uMetA.value.copy(St.a),ci.uMetB.value.copy(St.b),ci.uDeckLit.value.copy(ae.horizon).lerp(ae.cLit,.35),ci.uDeckDark.value.copy(ae.zenith).lerp(ae.horizon,.25).multiplyScalar(.82),$.position.copy(p.position);{let Re=!!He&&(W.pclouds!==0||!je);He&&(He.mesh.visible=Re,Re&&He.update(p,it)),je&&(je.group.visible=!Re,Re||je.update(p.position,it))}let Gg=be&&W.band!==0?be.update(p,ks(W.s+200),Math.max(1,p.position.y-Ae.y+.45),h.fog.near,h.fog.far):0;be&&W.band===0&&(be.mesh.visible=!1),J.update(p.position,Math.max(Xt.snow,Dt(W.s+600).snow*.7),1-Gg);let ml=0;for(let Re of[-150,0,250,500,800])ml=Math.max(ml,Dt(W.s+Re).coast);xe.mesh.visible=ml>.001,xe.update(p.position,ft,Dd*.8,It(0,.35,ml)),ze.uniforms.uTime.value=ft,ze.uniforms.uFogD.value=h.fog.near,ze.uniforms.uNight.value=ae.night,ze.uniforms.uSpecK.value=1-ae.overcast*.85,Oe.uSunDir.value.copy(ae.lightDir),Oe.uSunCol.value.copy(ae.sunCol),le.uniforms.uTime.value=ft,le.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*Jn());let vi=It(.15,.8,ae.night);z.atlas.emissiveIntensity=.1+vi*1.05,Oe.uBacklit.value=ue*1.6*(1-kn)*(1-ae.night)*It(0,.08,ae.sunEl)*(1-It(.25,.55,ae.sunEl))*(1-lt),Oe.uGhShade.value.set(Rt(.8,.3,ae.bright),Rt(.8,.85,ae.bright),Rt(.8,1.7,ae.bright)),Oe.uBlShade.value.set(Rt(ge[0],B[0],ae.bright),Rt(ge[1],B[1],ae.bright),Rt(ge[2],B[2],ae.bright)),Oe.uLightsOn.value=U>=0?U:Math.max(It(.02,.75,ae.night),.3*kn),z.lamp.color.setRGB(.9,.86,.74).lerp(Ms,vi),z.pool.opacity=vi*.42*(1+.8*Ke);{let Re=ve.group.position,st=ve.lamps,ot=Math.max(vi,lt),Et=0,Vt=0,Gt=0,Kt=-1e3,si=0,Cn=0,jn=-1e3,ir=0,Rr=900,Cr=900;if(ot>.01){let Fd=Math.floor(W.s/Ht);for(let rh=Fd-1;rh<=Fd+1;rh++){let vl=ye.chunks.get(rh);if(!vl||!vl.lamps)continue;let Xo=vl.lamps,Bd=vl.group.position;for(let Ir=0;Ir<Xo.length;Ir+=4){let oh=Xo[Ir]+Bd.x,ah=Xo[Ir+1],lh=Xo[Ir+2]+Bd.z,ch=(oh-Re.x)**2+(ah-Re.y)**2+(lh-Re.z)**2,xl=Xo[Ir+3]/(1+.045*ch);xl>Et?(Vt=Et,Cr=Rr,Cn=Gt,jn=Kt,ir=si,Et=xl,Rr=ch,Gt=oh,Kt=ah,si=lh):xl>Vt&&(Vt=xl,Cr=ch,Cn=oh,jn=ah,ir=lh)}}p.updateMatrixWorld()}let Wo=ot*Et*(1+.045*Rr)*(1-It(18,30,Math.sqrt(Rr))),Pr=ot*Vt*(1+.045*Cr)*(1-It(18,30,Math.sqrt(Cr)));st[0].set(Gt,Kt,si,1).applyMatrix4(p.matrixWorldInverse).w=Wo,st[1].set(Cn,jn,ir,1).applyMatrix4(p.matrixWorldInverse).w=Pr,ve.lampCol.setRGB(1,.8-.32*lt,.52-.38*lt),Ai.uLampW.value[0].set(Gt,Kt,si,Wo),Ai.uLampW.value[1].set(Cn,jn,ir,Pr),Ai.uLampCol.value.copy(ve.lampCol),ve.head.getWorldPosition(Ai.uHeadPos.value),ve.head.target.getWorldPosition(C),Ai.uHeadDir.value.copy(C).sub(Ai.uHeadPos.value).normalize(),Ai.uHeadI.value=ve.head.intensity/60}z.pool.visible=z.pool.opacity>.003,ye.lod(W.s,Ve,vi>.15,Se),Oe.uNight.value=vi,Ne.bloom.strength=Rt(.32,.55,vi),Ne.bloom.threshold=Rt(1.35,.95,vi),Ne.bloom.radius=Rt(.55,.35,vi);{let Re=Math.max(vi,lt,It(.25,.6,ae.warm)*(1-kn));Ne.bloom.enabled=R&&Re>.02,Ne.bloom.strength*=Math.min(1,Re*4)}e.toneMappingExposure=Rt(1,1.15,vi)*(1+.35*lt)*sh,$n.copy(p.position).addScaledVector(ae.sunDir,1e3).project(p);let bs=Ne.grade.uniforms,Wg=$n.z<1?1:0,Xg=Math.max(Math.abs($n.x),Math.abs($n.y));bs.uSun.value.set($n.x*.5+.5,$n.y*.5+.5),bs.uSunVis.value=Wg*(1-It(1,1.9,Xg))*It(-.02,.15,ae.sunEl)*(1-ae.night)*(1-kn)*(1-lt),bs.uSat.value=1.22-.24*kn,bs.uVig.value=.55-.43*ae.bright,bs.uLo.value.set(-.014+.026*ae.bright,0,.03),bs.uDay.value=Jn(),bs.uWarm.value=ae.warm,bs.uTime.value=ft,me.update(p.position,ft,rs*(1-lt)*(1-Xt.snow),Jn());{let Re=Ti(W.s+190),st=(Xt.city+Xt.country+Xt.coast)*(1-kn)*(1-Ke)*It(.6,.9,ae.sunEl)*(W.mirage??1)*(Re&&Math.abs(W.s+190-Re.s)<330?0:1);Ie.update(Y,W.s,ye.origin.x,ye.origin.z,In(W.s+150,"rw"),st,ft,ae.horizon)}{let Re=kt(Xt.snow+Xt.mountain*.6*Math.max(ae.night,1-It(.27,.36,W.tod)),0,1)*(1-lt);$e.copy(ae.fog).multiplyScalar(.92),Ce.copy(ae.sunCol).multiplyScalar(Math.min(1,ae.sunI/3)*(1-kn)*.6);let st=Math.cos(ve.group.rotation.y),ot=Math.sin(ve.group.rotation.y),Et=ve.group.position;Le.set(Et.x-1.75*ot,Et.y+.95,Et.z-1.75*st,Math.max(ae.night,lt)*(.5+1.2*_t.brake)),fe.update(it,ve.group,W.speed,Oe.uWet.value*(1-lt),Xt.snow*(1-lt),Re,$e,Ce,Le,p.position,W.spray)}ce.update(p.position,ft,Xt.snow*(.3+.7*kn)*(1-lt),Jn()),Fe.setFog(h.fog.near),Fe.update(it,ft,p.position,js,Bo,Xt,Jn(),rs,ve.group.position);let qg=performance.now();Ee.update(it,ft,p.position,js,Bo,Xt.sakura*(1-lt),Ae.y,vi,(Xt.country+Xt.sakura*.4)*(1-rs)*(1-lt),Xt.mountain*(1-lt));let Yg=performance.now();if($t){Y.at(tn,tt);let Re=Math.hypot(tt.x-ye.origin.x-p.position.x,tt.z-ye.origin.z-p.position.z),st=j.st.active?j.group.position.distanceTo(p.position):1e9,ot=W.speed/15;$t.update(ot<1.5?ot:1.5+(ot-1.5)*.4,Xt,Jn(),{rush:kt((W.speed-25)/40,0,1),bell:fl?Math.pow(kt(1-Re/260,0,1),1.5):0,train:Math.pow(kt(1-st/230,0,1),2),rain:rs*(1-lt)*(1-Xt.snow),wetRoad:Oe.uWet.value*(1-lt),speed:W.speed,load:kt(_t.lon/3,0,1),roof:W.cam!==2,tunnel:lt,water:(()=>{let Et=Si(W.s);return Math.max(Et?1-It(12,150,Math.abs(W.s-Et.s)):0,Xt.mountain*.45)})(),dusk:ae.warm*(W.tod>.5?1:.3)})}cl(Qt(W.s+40)),pt&&(e.info.autoReset=!1,e.info.reset());let gl=null;pt&&pt.tq&&(gl=pt.gl.createQuery(),pt.gl.beginQuery(pt.tq.TIME_ELAPSED_EXT,gl));let Nd=performance.now();Ne.composer.render(it);let Ud=performance.now();if(gl){let Re=pt.gl;for(Re.endQuery(pt.tq.TIME_ELAPSED_EXT),pt.pend.push(gl);pt.pend.length&&Re.getQueryParameter(pt.pend[0],Re.QUERY_RESULT_AVAILABLE);){let st=pt.pend.shift(),ot=Re.getQueryParameter(st,Re.QUERY_RESULT);Re.deleteQuery(st),Re.getParameter(pt.tq.GPU_DISJOINT_EXT)||(pt.gpu=ot/1e6,pt.gpuN++,pt.gpuSum+=pt.gpu,pt.gpu>pt.gpuMax&&(pt.gpuMax=pt.gpu))}}let Ar=window.__pb||(window.__pb={world:0,parts:0,render:0});if(Ar.world=Ar.world*.95+(Pd-Cd)*.05,Ar.parts=Ar.parts*.95+(Yg-qg)*.05,Ar.render=Ar.render*.95+(Ud-Nd)*.05,qi=qi*.95+(performance.now()-Mt)*.05,window.__ft=qi,pt){let Re=e.info,st=performance.now()-Mt,ot={t:+ft.toFixed(2),s:Math.round(W.s),total:+st.toFixed(1),world:+(Pd-Cd).toFixed(1),render:+(Ud-Nd).toFixed(1),gpu:+(pt.gpu||0).toFixed(1),progs:Re.programs.length-pt.progs,geos:Re.memory.geometries-pt.geos,tex:Re.memory.textures-pt.tex,calls:Re.render.calls,tris:Re.render.triangles};ot.progs>0&&de&&(ot.newProgs=Re.programs.slice(-ot.progs).map(Et=>(Et.name||"")+":"+String(Et.cacheKey).slice(0,60))),pt.progs=Re.programs.length,pt.geos=Re.memory.geometries,pt.tex=Re.memory.textures,pt.frames++,pt.sum+=st,st>pt.max&&(pt.max=st),st>12&&de&&pt.spikes.push(ot),pt.last=ot}if((ko+=it)>.25){ko=0,al.textContent=Math.round(W.speed*3.6),ll.textContent=(W.dist/1e3).toFixed(1);let Re=Math.floor(W.tod*1440);ss.textContent=`${String(Math.floor(Re/60)).padStart(2,"0")}:${String(Re%60).padStart(2,"0")}`}Kn++,de&&Kn>150&&it>.03?zn+=it:zn=Math.max(0,zn-it*.5),zn>3&&!at.has("q")&&(zn=0,qe())}window.__dbg={renderer:e,st:W,scene:h,camera:p,world:ye,TOD:ae,KEYS:Ro,X:De,train:j,weather:oe,U:Oe,birds:Fe,cine:we,post:Ne,car:ve,sun:g,M:z,clouds:je,pclouds:He,band:be,sky:$,mountains:J,shadowDir:d,CM:_t,spray:fe,grass:Be,get audio(){return $t}},Fo(""),Qs.classList.add("ready"),at.has("auto")&&Ho(),requestAnimationFrame(Rd)}gb().catch(i=>{console.error(i),Fo("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
