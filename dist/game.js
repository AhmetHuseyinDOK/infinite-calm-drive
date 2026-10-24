var Z0=0,gf=1,K0=2;var wr=1,$0=2,Ro=3,ds=0,Xn=1,Sn=2,ri=0,Co=1,Qi=2,vf=3,xf=4,J0=5;var Ar=100,j0=101,Q0=102,ep=103,tp=104,np=200,ip=201,sp=202,rp=203,yf=204,_f=205,op=206,ap=207,lp=208,cp=209,up=210,hp=211,fp=212,dp=213,pp=214,hc=0,fc=1,dc=2,fo=3,pc=4,mc=5,gc=6,vc=7,bf=0,mp=1,gp=2,es=0,Mf=1,Sf=2,Tf=3,Ef=4,wf=5,Af=6,Za=7;var Rf=300,er=301,Rr=302,Kc=303,$c=304,Ka=306,Is=1e3,ls=1001,xc=1002,An=1003,vp=1004;var $a=1005;var Bt=1006,Jc=1007;var Ln=1008;var Qn=1009,Cf=1010,Pf=1011,Po=1012,jc=1013,ts=1014,Ui=1015,Cn=1016,Qc=1017,eu=1018,Io=1020,If=35902,Lf=35899,Df=1021,Nf=1022,ei=1023,cs=1026,tr=1027,nr=1028,tu=1029,ir=1030,nu=1031;var iu=1033,Ja=33776,ja=33777,Qa=33778,el=33779,su=35840,ru=35841,ou=35842,au=35843,lu=36196,cu=37492,uu=37496,hu=37488,fu=37489,tl=37490,du=37491,pu=37808,mu=37809,gu=37810,vu=37811,xu=37812,yu=37813,_u=37814,bu=37815,Mu=37816,Su=37817,Tu=37818,Eu=37819,wu=37820,Au=37821,Ru=36492,Cu=36494,Pu=36495,Iu=36283,Lu=36284,nl=36285,Du=36286;var va=2300,yc=2301,lc=2302,sf=2303,rf=2400,of=2401,af=2402;var xp=3200;var Nu=0,yp=1,oi="",qt="srgb",xa="srgb-linear",ya="linear",Vt="srgb";var cc=7680;var _p=519,bp=512,Mp=513,Sp=514,Uu=515,Tp=516,Ep=517,Fu=518,wp=519,Ap=35044;var Uf="300 es",$i=2e3,po=2001;function k1(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function H1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rp(){let i=mo("canvas");return i.style.display="block",i}var d0={},go=null;function Ff(...i){let e="THREE."+i.shift();go?go("log",e,...i):console.log(e,...i)}function Cp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function lt(...i){i=Cp(i);let e="THREE."+i.shift();if(go)go("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ft(...i){i=Cp(i);let e="THREE."+i.shift();if(go)go("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function br(...i){let e=i.join(" ");e in d0||(d0[e]=!0,lt(...i))}function Pp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ip={[hc]:fc,[dc]:gc,[pc]:vc,[fo]:mc,[fc]:hc,[gc]:dc,[vc]:pc,[mc]:fo},us=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ph=Math.PI/180,_a=180/Math.PI;function Lo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kn[i&255]+Kn[i>>8&255]+Kn[i>>16&255]+Kn[i>>24&255]+"-"+Kn[e&255]+Kn[e>>8&255]+"-"+Kn[e>>16&15|64]+Kn[e>>24&255]+"-"+Kn[t&63|128]+Kn[t>>8&255]+"-"+Kn[t>>16&255]+Kn[t>>24&255]+Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function V1(i,e){return(i%e+e)%e}function Ih(i,e,t){return(1-t)*i+t*e}function oa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vf=class Vf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vf.prototype.isVector2=!0;var Le=Vf,xn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let a=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],p=r[o+0],g=r[o+1],_=r[o+2],S=r[o+3];if(d!==S||a!==p||c!==g||h!==_){let M=a*p+c*g+h*_+d*S;M<0&&(p=-p,g=-g,_=-_,S=-S,M=-M);let y=1-l;if(M<.9995){let u=Math.acos(M),x=Math.sin(u);y=Math.sin(y*u)/x,l=Math.sin(l*u)/x,a=a*y+p*l,c=c*y+g*l,h=h*y+_*l,d=d*y+S*l}else{a=a*y+p*l,c=c*y+g*l,h=h*y+_*l,d=d*y+S*l;let u=1/Math.sqrt(a*a+c*c+h*h+d*d);a*=u,c*=u,h*=u,d*=u}}e[t]=a,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],a=n[s+1],c=n[s+2],h=n[s+3],d=r[o],p=r[o+1],g=r[o+2],_=r[o+3];return e[t]=l*_+h*d+a*g-c*p,e[t+1]=a*_+h*p+c*d-l*g,e[t+2]=c*_+h*g+l*p-a*d,e[t+3]=h*_-l*d-a*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,a=Math.sin,c=l(n/2),h=l(s/2),d=l(r/2),p=a(n/2),g=a(s/2),_=a(r/2);switch(o){case"XYZ":this._x=p*h*d+c*g*_,this._y=c*g*d-p*h*_,this._z=c*h*_+p*g*d,this._w=c*h*d-p*g*_;break;case"YXZ":this._x=p*h*d+c*g*_,this._y=c*g*d-p*h*_,this._z=c*h*_-p*g*d,this._w=c*h*d+p*g*_;break;case"ZXY":this._x=p*h*d-c*g*_,this._y=c*g*d+p*h*_,this._z=c*h*_+p*g*d,this._w=c*h*d-p*g*_;break;case"ZYX":this._x=p*h*d-c*g*_,this._y=c*g*d+p*h*_,this._z=c*h*_-p*g*d,this._w=c*h*d+p*g*_;break;case"YZX":this._x=p*h*d+c*g*_,this._y=c*g*d+p*h*_,this._z=c*h*_-p*g*d,this._w=c*h*d-p*g*_;break;case"XZY":this._x=p*h*d-c*g*_,this._y=c*g*d-p*h*_,this._z=c*h*_+p*g*d,this._w=c*h*d+p*g*_;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],a=t[9],c=t[2],h=t[6],d=t[10],p=n+l+d;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-a)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>l&&n>d){let g=2*Math.sqrt(1+n-l-d);this._w=(h-a)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(l>d){let g=2*Math.sqrt(1+l-n-d);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(a+h)/g}else{let g=2*Math.sqrt(1+d-n-l);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(a+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,a=t._y,c=t._z,h=t._w;return this._x=n*h+o*l+s*c-r*a,this._y=s*h+o*a+r*l-n*c,this._z=r*h+o*c+n*a-s*l,this._w=o*h-n*l-s*a-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let a=1-t;if(l<.9995){let c=Math.acos(l),h=Math.sin(c);a=Math.sin(a*c)/h,t=Math.sin(t*c)/h,this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gf=class Gf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(p0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(p0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,a=e.w,c=2*(o*s-l*n),h=2*(l*t-r*s),d=2*(r*n-o*t);return this.x=t+a*c+o*d-l*h,this.y=n+a*h+l*c-r*d,this.z=s+a*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,a=t.z;return this.x=s*a-r*l,this.y=r*o-n*a,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lh.copy(this).projectOnVector(e),this.sub(Lh)}reflect(e){return this.sub(Lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gf.prototype.isVector3=!0;var H=Gf,Lh=new H,p0=new xn,Wf=class Wf{constructor(e,t,n,s,r,o,l,a,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,c)}set(e,t,n,s,r,o,l,a,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=a,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],a=n[6],c=n[1],h=n[4],d=n[7],p=n[2],g=n[5],_=n[8],S=s[0],M=s[3],y=s[6],u=s[1],x=s[4],f=s[7],m=s[2],v=s[5],E=s[8];return r[0]=o*S+l*u+a*m,r[3]=o*M+l*x+a*v,r[6]=o*y+l*f+a*E,r[1]=c*S+h*u+d*m,r[4]=c*M+h*x+d*v,r[7]=c*y+h*f+d*E,r[2]=p*S+g*u+_*m,r[5]=p*M+g*x+_*v,r[8]=p*y+g*f+_*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8];return t*o*h-t*l*c-n*r*h+n*l*a+s*r*c-s*o*a}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8],d=h*o-l*c,p=l*a-h*r,g=c*r-o*a,_=t*d+n*p+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return e[0]=d*S,e[1]=(s*c-h*n)*S,e[2]=(l*n-s*o)*S,e[3]=p*S,e[4]=(h*t-s*a)*S,e[5]=(s*r-l*t)*S,e[6]=g*S,e[7]=(n*a-c*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let a=Math.cos(r),c=Math.sin(r);return this.set(n*a,n*c,-n*(a*o+c*l)+o+e,-s*c,s*a,-s*(-c*o+a*l)+l+t,0,0,1),this}scale(e,t){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wf.prototype.isMatrix3=!0;var pt=Wf,Dh=new pt,m0=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g0=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G1(){let i={enabled:!0,workingColorSpace:xa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Vt&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vt&&(s.r=uo(s.r),s.g=uo(s.g),s.b=uo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xa]:{primaries:e,whitePoint:n,transfer:ya,toXYZ:m0,fromXYZ:g0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Vt,toXYZ:m0,fromXYZ:g0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var Rt=G1();function Ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function uo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Kr,_c=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=mo("canvas")),Kr.width=e.width,Kr.height=e.height;let s=Kr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Kr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ps(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ps(t[n]/255)*255):t[n]=Ps(t[n]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},W1=0,vo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Nh(s[o].image)):r.push(Nh(s[o]))}else r=Nh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Nh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_c.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}var X1=0,Uh=new H,Jn=class i extends us{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ls,s=ls,r=Bt,o=Ln,l=ei,a=Qn,c=i.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=Lo(),this.name="",this.source=new vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case ls:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case ls:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Rf;Jn.DEFAULT_ANISOTROPY=1;var Xf=class Xf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,a=e.elements,c=a[0],h=a[4],d=a[8],p=a[1],g=a[5],_=a[9],S=a[2],M=a[6],y=a[10];if(Math.abs(h-p)<.01&&Math.abs(d-S)<.01&&Math.abs(_-M)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+S)<.1&&Math.abs(_+M)<.1&&Math.abs(c+g+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,f=(g+1)/2,m=(y+1)/2,v=(h+p)/4,E=(d+S)/4,b=(_+M)/4;return x>f&&x>m?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=v/n,r=E/n):f>m?f<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(f),n=v/s,r=b/s):m<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(m),n=E/r,s=b/r),this.set(n,s,r,t),this}let u=Math.sqrt((M-_)*(M-_)+(d-S)*(d-S)+(p-h)*(p-h));return Math.abs(u)<.001&&(u=1),this.x=(M-_)/u,this.y=(d-S)/u,this.z=(p-h)/u,this.w=Math.acos((c+g+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xf.prototype.isVector4=!0;var dt=Xf,bc=class extends us{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Jn(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends bc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ba=class extends Jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mc=class extends Jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Zc=class Zc{constructor(e,t,n,s,r,o,l,a,c,h,d,p,g,_,S,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,c,h,d,p,g,_,S,M)}set(e,t,n,s,r,o,l,a,c,h,d,p,g,_,S,M){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=s,y[1]=r,y[5]=o,y[9]=l,y[13]=a,y[2]=c,y[6]=h,y[10]=d,y[14]=p,y[3]=g,y[7]=_,y[11]=S,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/$r.setFromMatrixColumn(e,0).length(),r=1/$r.setFromMatrixColumn(e,1).length(),o=1/$r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=o*h,g=o*d,_=l*h,S=l*d;t[0]=a*h,t[4]=-a*d,t[8]=c,t[1]=g+_*c,t[5]=p-S*c,t[9]=-l*a,t[2]=S-p*c,t[6]=_+g*c,t[10]=o*a}else if(e.order==="YXZ"){let p=a*h,g=a*d,_=c*h,S=c*d;t[0]=p+S*l,t[4]=_*l-g,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-l,t[2]=g*l-_,t[6]=S+p*l,t[10]=o*a}else if(e.order==="ZXY"){let p=a*h,g=a*d,_=c*h,S=c*d;t[0]=p-S*l,t[4]=-o*d,t[8]=_+g*l,t[1]=g+_*l,t[5]=o*h,t[9]=S-p*l,t[2]=-o*c,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){let p=o*h,g=o*d,_=l*h,S=l*d;t[0]=a*h,t[4]=_*c-g,t[8]=p*c+S,t[1]=a*d,t[5]=S*c+p,t[9]=g*c-_,t[2]=-c,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){let p=o*a,g=o*c,_=l*a,S=l*c;t[0]=a*h,t[4]=S-p*d,t[8]=_*d+g,t[1]=d,t[5]=o*h,t[9]=-l*h,t[2]=-c*h,t[6]=g*d+_,t[10]=p-S*d}else if(e.order==="XZY"){let p=o*a,g=o*c,_=l*a,S=l*c;t[0]=a*h,t[4]=-d,t[8]=c*h,t[1]=p*d+S,t[5]=o*h,t[9]=g*d-_,t[2]=_*d-g,t[6]=l*h,t[10]=S*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q1,e,Y1)}lookAt(e,t,n){let s=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Gs.crossVectors(n,bi),Gs.lengthSq()===0&&(Math.abs(n.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Gs.crossVectors(n,bi)),Gs.normalize(),Fl.crossVectors(bi,Gs),s[0]=Gs.x,s[4]=Fl.x,s[8]=bi.x,s[1]=Gs.y,s[5]=Fl.y,s[9]=bi.y,s[2]=Gs.z,s[6]=Fl.z,s[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],a=n[8],c=n[12],h=n[1],d=n[5],p=n[9],g=n[13],_=n[2],S=n[6],M=n[10],y=n[14],u=n[3],x=n[7],f=n[11],m=n[15],v=s[0],E=s[4],b=s[8],T=s[12],C=s[1],R=s[5],P=s[9],A=s[13],w=s[2],L=s[6],D=s[10],U=s[14],V=s[3],z=s[7],O=s[11],k=s[15];return r[0]=o*v+l*C+a*w+c*V,r[4]=o*E+l*R+a*L+c*z,r[8]=o*b+l*P+a*D+c*O,r[12]=o*T+l*A+a*U+c*k,r[1]=h*v+d*C+p*w+g*V,r[5]=h*E+d*R+p*L+g*z,r[9]=h*b+d*P+p*D+g*O,r[13]=h*T+d*A+p*U+g*k,r[2]=_*v+S*C+M*w+y*V,r[6]=_*E+S*R+M*L+y*z,r[10]=_*b+S*P+M*D+y*O,r[14]=_*T+S*A+M*U+y*k,r[3]=u*v+x*C+f*w+m*V,r[7]=u*E+x*R+f*L+m*z,r[11]=u*b+x*P+f*D+m*O,r[15]=u*T+x*A+f*U+m*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],a=e[9],c=e[13],h=e[2],d=e[6],p=e[10],g=e[14],_=e[3],S=e[7],M=e[11],y=e[15],u=a*g-c*p,x=l*g-c*d,f=l*p-a*d,m=o*g-c*h,v=o*p-a*h,E=o*d-l*h;return t*(S*u-M*x+y*f)-n*(_*u-M*m+y*v)+s*(_*x-S*m+y*E)-r*(_*f-S*v+M*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],a=e[2],c=e[6],h=e[10];return t*(o*h-l*c)-n*(r*h-l*a)+s*(r*c-o*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8],d=e[9],p=e[10],g=e[11],_=e[12],S=e[13],M=e[14],y=e[15],u=t*l-n*o,x=t*a-s*o,f=t*c-r*o,m=n*a-s*l,v=n*c-r*l,E=s*c-r*a,b=h*S-d*_,T=h*M-p*_,C=h*y-g*_,R=d*M-p*S,P=d*y-g*S,A=p*y-g*M,w=u*A-x*P+f*R+m*C-v*T+E*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/w;return e[0]=(l*A-a*P+c*R)*L,e[1]=(s*P-n*A-r*R)*L,e[2]=(S*E-M*v+y*m)*L,e[3]=(p*v-d*E-g*m)*L,e[4]=(a*C-o*A-c*T)*L,e[5]=(t*A-s*C+r*T)*L,e[6]=(M*f-_*E-y*x)*L,e[7]=(h*E-p*f+g*x)*L,e[8]=(o*P-l*C+c*b)*L,e[9]=(n*C-t*P-r*b)*L,e[10]=(_*v-S*f+y*u)*L,e[11]=(d*f-h*v-g*u)*L,e[12]=(l*T-o*R-a*b)*L,e[13]=(t*R-n*T+s*b)*L,e[14]=(S*x-_*m-M*u)*L,e[15]=(h*m-d*x+p*u)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,a=e.z,c=r*o,h=r*l;return this.set(c*o+n,c*l-s*a,c*a+s*l,0,c*l+s*a,h*l+n,h*a-s*o,0,c*a-s*l,h*a+s*o,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,a=t._w,c=r+r,h=o+o,d=l+l,p=r*c,g=r*h,_=r*d,S=o*h,M=o*d,y=l*d,u=a*c,x=a*h,f=a*d,m=n.x,v=n.y,E=n.z;return s[0]=(1-(S+y))*m,s[1]=(g+f)*m,s[2]=(_-x)*m,s[3]=0,s[4]=(g-f)*v,s[5]=(1-(p+y))*v,s[6]=(M+u)*v,s[7]=0,s[8]=(_+x)*E,s[9]=(M-u)*E,s[10]=(1-(p+S))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=$r.set(s[0],s[1],s[2]).length(),l=$r.set(s[4],s[5],s[6]).length(),a=$r.set(s[8],s[9],s[10]).length();r<0&&(o=-o),qi.copy(this);let c=1/o,h=1/l,d=1/a;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=h,qi.elements[5]*=h,qi.elements[6]*=h,qi.elements[8]*=d,qi.elements[9]*=d,qi.elements[10]*=d,t.setFromRotationMatrix(qi),n.x=o,n.y=l,n.z=a,this}makePerspective(e,t,n,s,r,o,l=$i,a=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),p=(t+e)/(t-e),g=(n+s)/(n-s),_,S;if(a)_=r/(o-r),S=o*r/(o-r);else if(l===$i)_=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(l===po)_=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=$i,a=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),p=-(t+e)/(t-e),g=-(n+s)/(n-s),_,S;if(a)_=1/(o-r),S=o/(o-r);else if(l===$i)_=-2/(o-r),S=-(o+r)/(o-r);else if(l===po)_=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Zc.prototype.isMatrix4=!0;var et=Zc,$r=new H,qi=new et,q1=new H(0,0,0),Y1=new H(1,1,1),Gs=new H,Fl=new H,bi=new H,v0=new et,x0=new xn,jn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],a=s[1],c=s[5],h=s[9],d=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return v0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(v0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return x0.setFromEuler(this),this.setFromQuaternion(x0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var Ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Z1=0,y0=new H,Jr=new xn,Es=new et,Bl=new H,aa=new H,K1=new H,$1=new xn,_0=new H(1,0,0),b0=new H(0,1,0),M0=new H(0,0,1),S0={type:"added"},J1={type:"removed"},jr={type:"childadded",child:null},Fh={type:"childremoved",child:null},Rn=class i extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new jn,n=new xn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new pt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(_0,e)}rotateY(e){return this.rotateOnAxis(b0,e)}rotateZ(e){return this.rotateOnAxis(M0,e)}translateOnAxis(e,t){return y0.copy(e).applyQuaternion(this.quaternion),this.position.add(y0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_0,e)}translateY(e){return this.translateOnAxis(b0,e)}translateZ(e){return this.translateOnAxis(M0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Es.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bl.copy(e):Bl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Es.lookAt(aa,Bl,this.up):Es.lookAt(Bl,aa,this.up),this.quaternion.setFromRotationMatrix(Es),s&&(Es.extractRotation(s.matrixWorld),Jr.setFromRotationMatrix(Es),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(S0),jr.child=e,this.dispatchEvent(jr),jr.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J1),Fh.child=e,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Es.multiply(e.parent.matrixWorld)),e.applyMatrix4(Es),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(S0),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,K1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,$1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let a=l.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){let d=a[c];r(e.shapes,d)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let a=0,c=this.material.length;a<c;a++)l.push(r(e.materials,this.material[a]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let a=this.animations[l];s.animations.push(r(e.animations,a))}}if(t){let l=o(e.geometries),a=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),g=o(e.animations),_=o(e.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(l){let a=[];for(let c in l){let h=l[c];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rn.DEFAULT_UP=new H(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},j1={type:"move"},xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let S of e.hand.values()){let M=t.getJointPose(S,n),y=this._getHandJoint(c,S);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),g=.02,_=.005;c.inputState.pinching&&p>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(j1)))}return l!==null&&(l.visible=s!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ws={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function Bh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Rt.workingColorSpace){if(e=V1(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bh(o,r,e+1/3),this.g=Bh(o,r,e),this.b=Bh(o,r,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=Lp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Rt.workingToColorSpace($n.copy(this),e),Math.round(At($n.r*255,0,255))*65536+Math.round(At($n.g*255,0,255))*256+Math.round(At($n.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace($n.copy(this),t);let n=$n.r,s=$n.g,r=$n.b,o=Math.max(n,s,r),l=Math.min(n,s,r),a,c,h=(l+o)/2;if(l===o)a=0,c=0;else{let d=o-l;switch(c=h<=.5?d/(o+l):d/(2-o-l),o){case n:a=(s-r)/d+(s<r?6:0);break;case s:a=(r-n)/d+2;break;case r:a=(n-s)/d+4;break}a/=6}return e.h=a,e.s=c,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace($n.copy(this),t),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=qt){Rt.workingToColorSpace($n.copy(this),e);let t=$n.r,n=$n.g,s=$n.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ws),this.setHSL(Ws.h+e,Ws.s+t,Ws.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ws),e.getHSL(Ol);let n=Ih(Ws.h,Ol.h,t),s=Ih(Ws.s,Ol.s,t),r=Ih(Ws.l,Ol.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$n=new _e;_e.NAMES=Lp;var Sa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mr=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Yi=new H,ws=new H,Oh=new H,As=new H,Qr=new H,eo=new H,T0=new H,zh=new H,kh=new H,Hh=new H,Vh=new dt,Gh=new dt,Wh=new dt,Zs=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yi.subVectors(e,t),s.cross(Yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yi.subVectors(s,t),ws.subVectors(n,t),Oh.subVectors(e,t);let o=Yi.dot(Yi),l=Yi.dot(ws),a=Yi.dot(Oh),c=ws.dot(ws),h=ws.dot(Oh),d=o*c-l*l;if(d===0)return r.set(0,0,0),null;let p=1/d,g=(c*a-l*h)*p,_=(o*h-l*a)*p;return r.set(1-g-_,_,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,As)===null?!1:As.x>=0&&As.y>=0&&As.x+As.y<=1}static getInterpolation(e,t,n,s,r,o,l,a){return this.getBarycoord(e,t,n,s,As)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,As.x),a.addScaledVector(o,As.y),a.addScaledVector(l,As.z),a)}static getInterpolatedAttribute(e,t,n,s,r,o){return Vh.setScalar(0),Gh.setScalar(0),Wh.setScalar(0),Vh.fromBufferAttribute(e,t),Gh.fromBufferAttribute(e,n),Wh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vh,r.x),o.addScaledVector(Gh,r.y),o.addScaledVector(Wh,r.z),o}static isFrontFacing(e,t,n,s){return Yi.subVectors(n,t),ws.subVectors(e,t),Yi.cross(ws).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),ws.subVectors(this.a,this.b),Yi.cross(ws).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;Qr.subVectors(s,n),eo.subVectors(r,n),zh.subVectors(e,n);let a=Qr.dot(zh),c=eo.dot(zh);if(a<=0&&c<=0)return t.copy(n);kh.subVectors(e,s);let h=Qr.dot(kh),d=eo.dot(kh);if(h>=0&&d<=h)return t.copy(s);let p=a*d-h*c;if(p<=0&&a>=0&&h<=0)return o=a/(a-h),t.copy(n).addScaledVector(Qr,o);Hh.subVectors(e,r);let g=Qr.dot(Hh),_=eo.dot(Hh);if(_>=0&&g<=_)return t.copy(r);let S=g*c-a*_;if(S<=0&&c>=0&&_<=0)return l=c/(c-_),t.copy(n).addScaledVector(eo,l);let M=h*_-g*d;if(M<=0&&d-h>=0&&g-_>=0)return T0.subVectors(r,s),l=(d-h)/(d-h+(g-_)),t.copy(s).addScaledVector(T0,l);let y=1/(M+S+p);return o=S*y,l=p*y,t.copy(n).addScaledVector(Qr,o).addScaledVector(eo,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fi=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Zi):Zi.fromBufferAttribute(r,o),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zl.copy(n.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),kl.subVectors(this.max,la),to.subVectors(e.a,la),no.subVectors(e.b,la),io.subVectors(e.c,la),Xs.subVectors(no,to),qs.subVectors(io,no),vr.subVectors(to,io);let t=[0,-Xs.z,Xs.y,0,-qs.z,qs.y,0,-vr.z,vr.y,Xs.z,0,-Xs.x,qs.z,0,-qs.x,vr.z,0,-vr.x,-Xs.y,Xs.x,0,-qs.y,qs.x,0,-vr.y,vr.x,0];return!Xh(t,to,no,io,kl)||(t=[1,0,0,0,1,0,0,0,1],!Xh(t,to,no,io,kl))?!1:(Hl.crossVectors(Xs,qs),t=[Hl.x,Hl.y,Hl.z],Xh(t,to,no,io,kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Rs=[new H,new H,new H,new H,new H,new H,new H,new H],Zi=new H,zl=new fi,to=new H,no=new H,io=new H,Xs=new H,qs=new H,vr=new H,la=new H,kl=new H,Hl=new H,xr=new H;function Xh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xr.fromArray(i,r);let l=s.x*Math.abs(xr.x)+s.y*Math.abs(xr.y)+s.z*Math.abs(xr.z),a=e.dot(xr),c=t.dot(xr),h=n.dot(xr);if(Math.max(-Math.max(a,c,h),Math.min(a,c,h))>l)return!1}return!0}var wn=new H,Vl=new Le,Q1=0,bt=class extends us{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ap,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix3(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),n=hi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),n=hi(n,this.array),s=hi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),n=hi(n,this.array),s=hi(s,this.array),r=hi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ta=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ea=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ev=new fi,ca=new H,qh=new H,di=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ev.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);let t=ca.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ca,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(qh)),this.expandByPoint(ca.copy(e.center).sub(qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tv=0,Di=new et,Yh=new Rn,so=new H,Mi=new fi,ua=new fi,On=new H,mt=class i extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k1(e)?Ea:Ta)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,n){return Di.makeTranslation(e,t,n),this.applyMatrix4(Di),this}scale(e,t,n){return Di.makeScale(e,t,n),this.applyMatrix4(Di),this}lookAt(e){return Yh.lookAt(e),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mi.setFromBufferAttribute(r),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];ua.setFromBufferAttribute(l),this.morphTargetsRelative?(On.addVectors(Mi.min,ua.min),Mi.expandByPoint(On),On.addVectors(Mi.max,ua.max),Mi.expandByPoint(On)):(Mi.expandByPoint(ua.min),Mi.expandByPoint(ua.max))}Mi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)On.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(On));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],a=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)On.fromBufferAttribute(l,c),a&&(so.fromBufferAttribute(e,c),On.add(so)),s=Math.max(s,n.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],a=[];for(let b=0;b<n.count;b++)l[b]=new H,a[b]=new H;let c=new H,h=new H,d=new H,p=new Le,g=new Le,_=new Le,S=new H,M=new H;function y(b,T,C){c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,T),_.fromBufferAttribute(r,C),h.sub(c),d.sub(c),g.sub(p),_.sub(p);let R=1/(g.x*_.y-_.x*g.y);isFinite(R)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(R),M.copy(d).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(R),l[b].add(S),l[T].add(S),l[C].add(S),a[b].add(M),a[T].add(M),a[C].add(M))}let u=this.groups;u.length===0&&(u=[{start:0,count:e.count}]);for(let b=0,T=u.length;b<T;++b){let C=u[b],R=C.start,P=C.count;for(let A=R,w=R+P;A<w;A+=3)y(e.getX(A+0),e.getX(A+1),e.getX(A+2))}let x=new H,f=new H,m=new H,v=new H;function E(b){m.fromBufferAttribute(s,b),v.copy(m);let T=l[b];x.copy(T),x.sub(m.multiplyScalar(m.dot(T))).normalize(),f.crossVectors(v,T);let R=f.dot(a[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,R)}for(let b=0,T=u.length;b<T;++b){let C=u[b],R=C.start,P=C.count;for(let A=R,w=R+P;A<w;A+=3)E(e.getX(A+0)),E(e.getX(A+1)),E(e.getX(A+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);let s=new H,r=new H,o=new H,l=new H,a=new H,c=new H,h=new H,d=new H;if(e)for(let p=0,g=e.count;p<g;p+=3){let _=e.getX(p+0),S=e.getX(p+1),M=e.getX(p+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,M),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),l.fromBufferAttribute(n,_),a.fromBufferAttribute(n,S),c.fromBufferAttribute(n,M),l.add(h),a.add(h),c.add(h),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)On.fromBufferAttribute(e,t),On.normalize(),e.setXYZ(t,On.x,On.y,On.z)}toNonIndexed(){function e(l,a){let c=l.array,h=l.itemSize,d=l.normalized,p=new c.constructor(a.length*h),g=0,_=0;for(let S=0,M=a.length;S<M;S++){l.isInterleavedBufferAttribute?g=a[S]*l.data.stride+l.offset:g=a[S]*h;for(let y=0;y<h;y++)p[_++]=c[g++]}return new bt(p,h,d)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let a=s[l],c=e(a,n);t.setAttribute(l,c)}let r=this.morphAttributes;for(let l in r){let a=[],c=r[l];for(let h=0,d=c.length;h<d;h++){let p=c[h],g=e(p,n);a.push(g)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,a=o.length;l<a;l++){let c=o[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let a in n){let c=n[a];e.data.attributes[a]=c.toJSON(e.data)}let s={},r=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],h=[];for(let d=0,p=c.length;d<p;d++){let g=c[d];h.push(g.toJSON(e.data))}h.length>0&&(s[a]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let p=0,g=d.length;p<g;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Zh=new H,nv=new H,iv=new pt,Ki=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zh.subVectors(n,t).cross(nv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||iv.getNormalMatrix(e),s=this.coplanarPoint(Zh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},sv=0,hs=class extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=Co,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=_f,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cc,this.stencilZFail=cc,this.stencilZPass=cc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let a=r[l];delete a.metadata,o.push(a)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ki().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Cs=new H,Kh=new H,Gl=new H,Wl=new H,yo=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Cs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cs.copy(this.origin).addScaledVector(this.direction,t),Cs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Kh.copy(e).add(t).multiplyScalar(.5),Gl.copy(t).sub(e).normalize(),Wl.copy(this.origin).sub(Kh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Gl),l=Wl.dot(this.direction),a=-Wl.dot(Gl),c=Wl.lengthSq(),h=Math.abs(1-o*o),d,p,g,_;if(h>0)if(d=o*a-l,p=o*l-a,_=r*h,d>=0)if(p>=-_)if(p<=_){let S=1/h;d*=S,p*=S,g=d*(d+o*p+2*l)+p*(o*d+p+2*a)+c}else p=r,d=Math.max(0,-(o*p+l)),g=-d*d+p*(p+2*a)+c;else p=-r,d=Math.max(0,-(o*p+l)),g=-d*d+p*(p+2*a)+c;else p<=-_?(d=Math.max(0,-(-o*r+l)),p=d>0?-r:Math.min(Math.max(-r,-a),r),g=-d*d+p*(p+2*a)+c):p<=_?(d=0,p=Math.min(Math.max(-r,-a),r),g=p*(p+2*a)+c):(d=Math.max(0,-(o*r+l)),p=d>0?r:Math.min(Math.max(-r,-a),r),g=-d*d+p*(p+2*a)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+l)),g=-d*d+p*(p+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Kh).addScaledVector(Gl,p),g}intersectSphere(e,t){if(e.radius<0)return null;Cs.subVectors(e.center,this.origin);let n=Cs.dot(this.direction),s=Cs.dot(Cs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,a,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(l=(e.min.z-p.z)*d,a=(e.max.z-p.z)*d):(l=(e.max.z-p.z)*d,a=(e.min.z-p.z)*d),n>a||l>s)||((l>n||n!==n)&&(n=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Cs)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,a=l.x,c=l.y,h=l.z,d=e.x-o.x,p=e.y-o.y,g=e.z-o.z,_=t.x-o.x,S=t.y-o.y,M=t.z-o.z,y=n.x-o.x,u=n.y-o.y,x=n.z-o.z,f=Math.abs(a),m=Math.abs(c),v=Math.abs(h),E,b,T,C,R,P,A,w,L,D,U,V;if(f>=m&&f>=v?(T=a,P=d,L=_,V=y,a>=0?(E=c,b=h,C=p,R=g,A=S,w=M,D=u,U=x):(E=h,b=c,C=g,R=p,A=M,w=S,D=x,U=u)):m>=v?(T=c,P=p,L=S,V=u,c>=0?(E=h,b=a,C=g,R=d,A=M,w=_,D=x,U=y):(E=a,b=h,C=d,R=g,A=_,w=M,D=y,U=x)):(T=h,P=g,L=M,V=x,h>=0?(E=a,b=c,C=d,R=p,A=_,w=S,D=y,U=u):(E=c,b=a,C=p,R=d,A=S,w=_,D=u,U=y)),T===0)return null;let z=E/T,O=b/T,k=1/T,W=C-z*P,$=R-O*P,le=A-z*L,Me=w-O*L,be=D-z*V,K=U-O*V,j=be*Me-K*le,xe=W*K-$*be,Ce=le*$-Me*W;if(s){if(j<0||xe<0||Ce<0)return null}else if((j<0||xe<0||Ce<0)&&(j>0||xe>0||Ce>0))return null;let Ae=j+xe+Ce;if(Ae===0)return null;let Pe=k*(j*P+xe*L+Ce*V);return(Ae>0?Pe<0:Pe>0)?null:this.at(Pe/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},E0=new et,yr=new yo,Xl=new di,w0=new H,ql=new H,Yl=new H,Zl=new H,$h=new H,Kl=new H,A0=new H,$l=new H,ct=class extends Rn{constructor(e=new mt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Kl.set(0,0,0);for(let a=0,c=r.length;a<c;a++){let h=l[a],d=r[a];h!==0&&($h.fromBufferAttribute(d,e),o?Kl.addScaledVector($h,h):Kl.addScaledVector($h.sub(t),h))}t.add(Kl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xl.copy(n.boundingSphere),Xl.applyMatrix4(r),yr.copy(e.ray).recast(e.near),!(Xl.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Xl,w0)===null||yr.origin.distanceToSquared(w0)>(e.far-e.near)**2))&&(E0.copy(r).invert(),yr.copy(e.ray).applyMatrix4(E0),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,g=r.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,S=p.length;_<S;_++){let M=p[_],y=o[M.materialIndex],u=Math.max(M.start,g.start),x=Math.min(l.count,Math.min(M.start+M.count,g.start+g.count));for(let f=u,m=x;f<m;f+=3){let v=l.getX(f),E=l.getX(f+1),b=l.getX(f+2);s=Jl(this,y,e,n,c,h,d,v,E,b),s&&(s.faceIndex=Math.floor(f/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{let _=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let M=_,y=S;M<y;M+=3){let u=l.getX(M),x=l.getX(M+1),f=l.getX(M+2);s=Jl(this,o,e,n,c,h,d,u,x,f),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(o))for(let _=0,S=p.length;_<S;_++){let M=p[_],y=o[M.materialIndex],u=Math.max(M.start,g.start),x=Math.min(a.count,Math.min(M.start+M.count,g.start+g.count));for(let f=u,m=x;f<m;f+=3){let v=f,E=f+1,b=f+2;s=Jl(this,y,e,n,c,h,d,v,E,b),s&&(s.faceIndex=Math.floor(f/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{let _=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let M=_,y=S;M<y;M+=3){let u=M,x=M+1,f=M+2;s=Jl(this,o,e,n,c,h,d,u,x,f),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}}};function rv(i,e,t,n,s,r,o,l){let a;if(e.side===Xn?a=n.intersectTriangle(o,r,s,!0,l):a=n.intersectTriangle(s,r,o,e.side===ds,l),a===null)return null;$l.copy(l),$l.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($l);return c<t.near||c>t.far?null:{distance:c,point:$l.clone(),object:i}}function Jl(i,e,t,n,s,r,o,l,a,c){i.getVertexPosition(l,ql),i.getVertexPosition(a,Yl),i.getVertexPosition(c,Zl);let h=rv(i,e,t,n,ql,Yl,Zl,A0);if(h){let d=new H;Zs.getBarycoord(A0,ql,Yl,Zl,d),s&&(h.uv=Zs.getInterpolatedAttribute(s,l,a,c,d,new Le)),r&&(h.uv1=Zs.getInterpolatedAttribute(r,l,a,c,d,new Le)),o&&(h.normal=Zs.getInterpolatedAttribute(o,l,a,c,d,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:l,b:a,c,normal:new H,materialIndex:0};Zs.getNormal(ql,Yl,Zl,p.normal),h.face=p,h.barycoord=d}return h}var Ji=class extends Jn{constructor(e=null,t=1,n=1,s,r,o,l,a,c=An,h=An,d,p){super(null,o,l,a,c,h,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var In=class extends bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ro=new et,R0=new et,jl=[],C0=new fi,ov=new et,ha=new ct,fa=new di,ji=class extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new In(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ov)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ro),C0.copy(e.boundingBox).applyMatrix4(ro),this.boundingBox.union(C0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ro),fa.copy(e.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(n),e.ray.intersectsSphere(fa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ro),R0.multiplyMatrices(n,ro),ha.matrixWorld=R0,ha.raycast(e,jl);for(let o=0,l=jl.length;o<l;o++){let a=jl[o];a.instanceId=r,a.object=this,t.push(a)}jl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new In(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ji(new Float32Array(s*this.count),s,this.count,nr,Ui));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let l=this.geometry.morphTargetsRelative?1:1-o,a=s*e;return r[a]=l,r.set(n,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_r=new di,av=new Le(.5,.5),Ql=new H,_o=class{constructor(e=new Ki,t=new Ki,n=new Ki,s=new Ki,r=new Ki,o=new Ki){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],a=r[2],c=r[3],h=r[4],d=r[5],p=r[6],g=r[7],_=r[8],S=r[9],M=r[10],y=r[11],u=r[12],x=r[13],f=r[14],m=r[15];if(s[0].setComponents(c-o,g-h,y-_,m-u).normalize(),s[1].setComponents(c+o,g+h,y+_,m+u).normalize(),s[2].setComponents(c+l,g+d,y+S,m+x).normalize(),s[3].setComponents(c-l,g-d,y-S,m-x).normalize(),n)s[4].setComponents(a,p,M,f).normalize(),s[5].setComponents(c-a,g-p,y-M,m-f).normalize();else if(s[4].setComponents(c-a,g-p,y-M,m-f).normalize(),t===$i)s[5].setComponents(c+a,g+p,y+M,m+f).normalize();else if(t===po)s[5].setComponents(a,p,M,f).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);let t=av.distanceTo(e.center);return _r.radius=.7071067811865476+t,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ql.x=s.normal.x>0?e.max.x:e.min.x,Ql.y=s.normal.y>0?e.max.y:e.min.y,Ql.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Sc=class extends hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Tc=new H,Ec=new H,P0=new et,da=new yo,ec=new di,Jh=new H,I0=new H,wa=class extends Rn{constructor(e=new mt,t=new Sc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Tc.fromBufferAttribute(t,s-1),Ec.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Tc.distanceTo(Ec);e.setAttribute("lineDistance",new Je(n,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(s),ec.radius+=r,e.ray.intersectsSphere(ec)===!1)return;P0.copy(s).invert(),da.copy(e.ray).applyMatrix4(P0);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let g=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let S=g,M=_-1;S<M;S+=c){let y=h.getX(S),u=h.getX(S+1),x=tc(this,e,da,a,y,u,S);x&&t.push(x)}if(this.isLineLoop){let S=h.getX(_-1),M=h.getX(g),y=tc(this,e,da,a,S,M,_-1);y&&t.push(y)}}else{let g=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let S=g,M=_-1;S<M;S+=c){let y=tc(this,e,da,a,S,S+1,S);y&&t.push(y)}if(this.isLineLoop){let S=tc(this,e,da,a,_-1,g,_-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function tc(i,e,t,n,s,r,o){let l=i.geometry.attributes.position;if(Tc.fromBufferAttribute(l,s),Ec.fromBufferAttribute(l,r),t.distanceSqToSegment(Tc,Ec,Jh,I0)>n)return;Jh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Jh);if(!(c<e.near||c>e.far))return{distance:c,point:I0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var bo=class extends hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},L0=new et,lf=new yo,nc=new di,ic=new H,Aa=class extends Rn{constructor(e=new mt,t=new bo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(s),nc.radius+=r,e.ray.intersectsSphere(nc)===!1)return;L0.copy(s).invert(),lf.copy(e.ray).applyMatrix4(L0);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=n.index,d=n.attributes.position;if(c!==null){let p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=p,S=g;_<S;_++){let M=c.getX(_);ic.fromBufferAttribute(d,M),D0(ic,M,a,s,e,t,this)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,S=g;_<S;_++)ic.fromBufferAttribute(d,_),D0(ic,_,a,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function D0(i,e,t,n,s,r,o){let l=lf.distanceSqToPoint(i);if(l<t){let a=new H;lf.closestPointToPoint(i,a),a.applyMatrix4(n);let c=s.ray.origin.distanceTo(a);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ra=class extends Jn{constructor(e=[],t=er,n,s,r,o,l,a,c,h){super(e,t,n,s,r,o,l,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},si=class extends Jn{constructor(e,t,n,s,r,o,l,a,c){super(e,t,n,s,r,o,l,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ks=class extends Jn{constructor(e,t,n=ts,s,r,o,l=An,a=An,c,h=cs,d=1){if(h!==cs&&h!==tr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,s,r,o,l,a,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wc=class extends Ks{constructor(e,t=ts,n=er,s,r,o=An,l=An,a,c=cs){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,a,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ca=class extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qt=class i extends mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let a=[],c=[],h=[],d=[],p=0,g=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(a),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(d,2));function _(S,M,y,u,x,f,m,v,E,b,T){let C=f/E,R=m/b,P=f/2,A=m/2,w=v/2,L=E+1,D=b+1,U=0,V=0,z=new H;for(let O=0;O<D;O++){let k=O*R-A;for(let W=0;W<L;W++){let $=W*C-P;z[S]=$*u,z[M]=k*x,z[y]=w,c.push(z.x,z.y,z.z),z[S]=0,z[M]=0,z[y]=v>0?1:-1,h.push(z.x,z.y,z.z),d.push(W/E),d.push(1-O/b),U+=1}}for(let O=0;O<b;O++)for(let k=0;k<E;k++){let W=p+k+L*O,$=p+k+L*(O+1),le=p+(k+1)+L*(O+1),Me=p+(k+1)+L*O;a.push(W,$,Me),a.push($,le,Me),V+=6}l.addGroup(g,V,T),g+=V,p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Sr=class i extends mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],a=[],c=new H,h=new Le;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let g=n+d/t*s;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),l.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,a.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ni=class i extends mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],g=[],_=0,S=[],M=n/2,y=0;u(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(p,3)),this.setAttribute("uv",new Je(g,2));function u(){let f=new H,m=new H,v=0,E=(t-e)/n;for(let b=0;b<=r;b++){let T=[],C=b/r,R=C*(t-e)+e;for(let P=0;P<=s;P++){let A=P/s,w=A*a+l,L=Math.sin(w),D=Math.cos(w);m.x=R*L,m.y=-C*n+M,m.z=R*D,d.push(m.x,m.y,m.z),f.set(L,E,D).normalize(),p.push(f.x,f.y,f.z),g.push(A,1-C),T.push(_++)}S.push(T)}for(let b=0;b<s;b++)for(let T=0;T<r;T++){let C=S[T][b],R=S[T+1][b],P=S[T+1][b+1],A=S[T][b+1];(e>0||T!==0)&&(h.push(C,R,A),v+=3),(t>0||T!==r-1)&&(h.push(R,P,A),v+=3)}c.addGroup(y,v,0),y+=v}function x(f){let m=_,v=new Le,E=new H,b=0,T=f===!0?e:t,C=f===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,M*C,0),p.push(0,C,0),g.push(.5,.5),_++;let R=_;for(let P=0;P<=s;P++){let w=P/s*a+l,L=Math.cos(w),D=Math.sin(w);E.x=T*D,E.y=M*C,E.z=T*L,d.push(E.x,E.y,E.z),p.push(0,C,0),v.x=L*.5+.5,v.y=D*.5*C+.5,g.push(v.x,v.y),_++}for(let P=0;P<s;P++){let A=m+P,w=R+P;f===!0?h.push(w,w+1,A):h.push(w+1,w,A),b+=3}c.addGroup(y,b,f===!0?1:2),y+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ac=class i extends mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),c(n),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(u){let x=new H,f=new H,m=new H;for(let v=0;v<t.length;v+=3)g(t[v+0],x),g(t[v+1],f),g(t[v+2],m),a(x,f,m,u)}function a(u,x,f,m){let v=m+1,E=[];for(let b=0;b<=v;b++){E[b]=[];let T=u.clone().lerp(f,b/v),C=x.clone().lerp(f,b/v),R=v-b;for(let P=0;P<=R;P++)P===0&&b===v?E[b][P]=T:E[b][P]=T.clone().lerp(C,P/R)}for(let b=0;b<v;b++)for(let T=0;T<2*(v-b)-1;T++){let C=Math.floor(T/2);T%2===0?(p(E[b][C+1]),p(E[b+1][C]),p(E[b][C])):(p(E[b][C+1]),p(E[b+1][C+1]),p(E[b+1][C]))}}function c(u){let x=new H;for(let f=0;f<r.length;f+=3)x.x=r[f+0],x.y=r[f+1],x.z=r[f+2],x.normalize().multiplyScalar(u),r[f+0]=x.x,r[f+1]=x.y,r[f+2]=x.z}function h(){let u=new H;for(let x=0;x<r.length;x+=3){u.x=r[x+0],u.y=r[x+1],u.z=r[x+2];let f=M(u)/2/Math.PI+.5,m=y(u)/Math.PI+.5;o.push(f,1-m)}_(),d()}function d(){for(let u=0;u<o.length;u+=6){let x=o[u+0],f=o[u+2],m=o[u+4],v=Math.max(x,f,m),E=Math.min(x,f,m);v>.9&&E<.1&&(x<.2&&(o[u+0]+=1),f<.2&&(o[u+2]+=1),m<.2&&(o[u+4]+=1))}}function p(u){r.push(u.x,u.y,u.z)}function g(u,x){let f=u*3;x.x=e[f+0],x.y=e[f+1],x.z=e[f+2]}function _(){let u=new H,x=new H,f=new H,m=new H,v=new Le,E=new Le,b=new Le;for(let T=0,C=0;T<r.length;T+=9,C+=6){u.set(r[T+0],r[T+1],r[T+2]),x.set(r[T+3],r[T+4],r[T+5]),f.set(r[T+6],r[T+7],r[T+8]),v.set(o[C+0],o[C+1]),E.set(o[C+2],o[C+3]),b.set(o[C+4],o[C+5]),m.copy(u).add(x).add(f).divideScalar(3);let R=M(m);S(v,C+0,u,R),S(E,C+2,x,R),S(b,C+4,f,R)}}function S(u,x,f,m){m<0&&u.x===1&&(o[x]=u.x-1),f.x===0&&f.z===0&&(o[x]=m/2/Math.PI+.5)}function M(u){return Math.atan2(u.z,-u.x)}function y(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,a=r-1,c;for(;l<=a;)if(s=Math.floor(l+(a-l)/2),c=n[s]-o,c<0)l=s+1;else if(c>0)a=s-1;else{a=s;break}if(s=a,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,g=(o-h)/p;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),a=t||(o.isVector2?new Le:new H);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,s=[],r=[],o=[],l=new H,a=new et;for(let g=0;g<=e;g++){let _=g/e;s[g]=this.getTangentAt(_,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),l.crossVectors(s[g-1],s[g]),l.length()>Number.EPSILON){l.normalize();let _=Math.acos(At(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(a.makeRotationAxis(l,_))}o[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(At(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(g=-g);for(let _=1;_<=e;_++)r[_].applyMatrix4(a.makeRotationAxis(s[_],g*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Mo=class extends Si{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new Le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=a-this.aX,g=c-this.aY;a=p*h-g*d+this.aX,c=p*d+g*h+this.aY}return n.set(a,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rc=class extends Mo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Bf(){let i=0,e=0,t=0,n=0;function s(r,o,l,a){i=r,e=l,t=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,c){s(o,l,c*(l-r),c*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,c,h,d){let p=(o-r)/c-(l-r)/(c+h)+(l-o)/h,g=(l-o)/h-(a-o)/(h+d)+(a-l)/d;p*=h,g*=h,s(o,l,p,g)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var N0=new H,U0=new H,jh=new Bf,Qh=new Bf,ef=new Bf,Cc=class extends Si{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new H){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let c,h;this.closed||l>0?c=s[(l-1)%r]:(U0.subVectors(s[0],s[1]).add(s[0]),c=U0);let d=s[l%r],p=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(N0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=N0),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),g),S=Math.pow(d.distanceToSquared(p),g),M=Math.pow(p.distanceToSquared(h),g);S<1e-4&&(S=1),_<1e-4&&(_=S),M<1e-4&&(M=S),jh.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,_,S,M),Qh.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,_,S,M),ef.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,_,S,M)}else this.curveType==="catmullrom"&&(jh.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),Qh.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),ef.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return n.set(jh.calc(a),Qh.calc(a),ef.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function F0(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,a=i*l;return(2*t-2*n+r+o)*a+(-3*t+3*n-2*r-o)*l+r*i+t}function lv(i,e){let t=1-i;return t*t*e}function cv(i,e){return 2*(1-i)*i*e}function uv(i,e){return i*i*e}function ma(i,e,t,n){return lv(i,e)+cv(i,t)+uv(i,n)}function hv(i,e){let t=1-i;return t*t*t*e}function fv(i,e){let t=1-i;return 3*t*t*i*e}function dv(i,e){return 3*(1-i)*i*i*e}function pv(i,e){return i*i*i*e}function ga(i,e,t,n,s){return hv(i,e)+fv(i,t)+dv(i,n)+pv(i,s)}var Pa=class extends Si{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(ga(e,s.x,r.x,o.x,l.x),ga(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pc=class extends Si{constructor(e=new H,t=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(ga(e,s.x,r.x,o.x,l.x),ga(e,s.y,r.y,o.y,l.y),ga(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ia=class extends Si{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ic=class extends Si{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends Si{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ma(e,s.x,r.x,o.x),ma(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=class extends Si{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ma(e,s.x,r.x,o.x),ma(e,s.y,r.y,o.y),ma(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,a=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(F0(l,a.x,c.x,h.x,d.x),F0(l,a.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Le().fromArray(s))}return this}},B0=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:Cc,CubicBezierCurve:Pa,CubicBezierCurve3:Pc,EllipseCurve:Mo,LineCurve:Ia,LineCurve3:Ic,QuadraticBezierCurve:La,QuadraticBezierCurve3:Lc,SplineCurve:Da}),Dc=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new B0[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],a=l.getLength(),c=a===0?0:1-o/a;return l.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let c=0;c<a.length;c++){let h=a[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new B0[s.type]().fromJSON(s))}return this}},Na=class extends Dc{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ia(this.currentPoint.clone(),new Le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new La(this.currentPoint.clone(),new Le(e,t),new Le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new Pa(this.currentPoint.clone(),new Le(e,t),new Le(n,s),new Le(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Da(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,a){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,l,a),this}absellipse(e,t,n,s,r,o,l,a){let c=new Mo(e,t,n,s,r,o,l,a);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},So=class extends Na{constructor(e){super(e),this.uuid=Lo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Na().fromJSON(s))}return this}};function mv(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Dp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,a,c;if(n&&(r=_v(i,e,r,t)),i.length>80*t){l=i[0],a=i[1];let h=l,d=a;for(let p=t;p<s;p+=t){let g=i[p],_=i[p+1];g<l&&(l=g),_<a&&(a=_),g>h&&(h=g),_>d&&(d=_)}c=Math.max(h-l,d-a),c=c!==0?32767/c:0}return Ua(r,o,t,l,a,c,0),o}function Dp(i,e,t,n,s){let r;if(s===Iv(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=O0(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=O0(o/n|0,i[o],i[o+1],r);return r&&To(r,r.next)&&(Ba(r),r=r.next),r}function Tr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(To(t,t.next)||gn(t.prev,t,t.next)===0)){if(Ba(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ua(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ev(i,n,s,r);let l=i;for(;i.prev!==i.next;){let a=i.prev,c=i.next;if(r?vv(i,n,s,r):gv(i)){e.push(a.i,i.i,c.i),Ba(i),i=c.next,l=c.next;continue}if(i=c,i===l){o?o===1?(i=xv(Tr(i),e),Ua(i,e,t,n,s,r,2)):o===2&&yv(i,e,t,n,s,r):Ua(Tr(i),e,t,n,s,r,1);break}}}function gv(i){let e=i.prev,t=i,n=i.next;if(gn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,a=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(l,a,c),p=Math.max(s,r,o),g=Math.max(l,a,c),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=p&&_.y>=d&&_.y<=g&&pa(s,l,r,a,o,c,_.x,_.y)&&gn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function vv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(gn(s,r,o)>=0)return!1;let l=s.x,a=r.x,c=o.x,h=s.y,d=r.y,p=o.y,g=Math.min(l,a,c),_=Math.min(h,d,p),S=Math.max(l,a,c),M=Math.max(h,d,p),y=cf(g,_,e,t,n),u=cf(S,M,e,t,n),x=i.prevZ,f=i.nextZ;for(;x&&x.z>=y&&f&&f.z<=u;){if(x.x>=g&&x.x<=S&&x.y>=_&&x.y<=M&&x!==s&&x!==o&&pa(l,h,a,d,c,p,x.x,x.y)&&gn(x.prev,x,x.next)>=0||(x=x.prevZ,f.x>=g&&f.x<=S&&f.y>=_&&f.y<=M&&f!==s&&f!==o&&pa(l,h,a,d,c,p,f.x,f.y)&&gn(f.prev,f,f.next)>=0))return!1;f=f.nextZ}for(;x&&x.z>=y;){if(x.x>=g&&x.x<=S&&x.y>=_&&x.y<=M&&x!==s&&x!==o&&pa(l,h,a,d,c,p,x.x,x.y)&&gn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;f&&f.z<=u;){if(f.x>=g&&f.x<=S&&f.y>=_&&f.y<=M&&f!==s&&f!==o&&pa(l,h,a,d,c,p,f.x,f.y)&&gn(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function xv(i,e){let t=i;do{let n=t.prev,s=t.next.next;!To(n,s)&&Up(n,t,t.next,s)&&Fa(n,s)&&Fa(s,n)&&(e.push(n.i,t.i,s.i),Ba(t),Ba(t.next),t=i=s),t=t.next}while(t!==i);return Tr(t)}function yv(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Rv(o,l)){let a=Fp(o,l);o=Tr(o,o.next),a=Tr(a,a.next),Ua(o,e,t,n,s,r,0),Ua(a,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function _v(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,a=r<o-1?e[r+1]*n:i.length,c=Dp(i,l,a,n,!1);c===c.next&&(c.steiner=!0),s.push(Av(c))}s.sort(bv);for(let r=0;r<s.length;r++)t=Mv(s[r],t);return t}function bv(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Mv(i,e){let t=Sv(i,e);if(!t)return e;let n=Fp(t,i);return Tr(n,n.next),Tr(t,t.next)}function Sv(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(To(i,t))return t;do{if(To(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,a=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=a&&n!==t.x&&Np(s<c?n:r,s,a,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Fa(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Tv(o,t)))&&(o=t,h=d)}t=t.next}while(t!==l);return o}function Tv(i,e){return gn(i.prev,i,e.prev)<0&&gn(e.next,i,i.next)<0}function Ev(i,e,t,n){let s=i;do s.z===0&&(s.z=cf(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wv(s)}function wv(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let c=0;c<t&&(l++,o=o.nextZ,!!o);c++);let a=t;for(;l>0||a>0&&o;)l!==0&&(a===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,a--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function cf(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Av(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Np(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function pa(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&Np(i,e,t,n,s,r,o,l)}function Rv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Cv(i,e)&&(Fa(i,e)&&Fa(e,i)&&Pv(i,e)&&(gn(i.prev,i,e.prev)||gn(i,e.prev,e))||To(i,e)&&gn(i.prev,i,i.next)>0&&gn(e.prev,e,e.next)>0)}function gn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function To(i,e){return i.x===e.x&&i.y===e.y}function Up(i,e,t,n){let s=rc(gn(i,e,t)),r=rc(gn(i,e,n)),o=rc(gn(t,n,i)),l=rc(gn(t,n,e));return!!(s!==r&&o!==l||s===0&&sc(i,t,e)||r===0&&sc(i,n,e)||o===0&&sc(t,i,n)||l===0&&sc(t,e,n))}function sc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function rc(i){return i>0?1:i<0?-1:0}function Cv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Up(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fa(i,e){return gn(i.prev,i,i.next)<0?gn(i,e,i.next)>=0&&gn(i,i.prev,e)>=0:gn(i,e,i.prev)<0||gn(i,i.next,e)<0}function Pv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fp(i,e){let t=uf(i.i,i.x,i.y),n=uf(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function O0(i,e,t,n){let s=uf(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ba(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uf(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Iv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var hf=class{static triangulate(e,t,n=2){return mv(e,t,n)}},ho=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];z0(e),k0(n,e);let o=e.length;t.forEach(z0);for(let a=0;a<t.length;a++)s.push(o),o+=t[a].length,k0(n,t[a]);let l=hf.triangulate(n,s);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}};function z0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function k0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Oa=class i extends Ac{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var sn=class i extends mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),a=Math.floor(s),c=l+1,h=a+1,d=e/l,p=t/a,g=[],_=[],S=[],M=[];for(let y=0;y<h;y++){let u=y*p-o;for(let x=0;x<c;x++){let f=x*d-r;_.push(f,-u,0),S.push(0,0,1),M.push(x/l),M.push(1-y/a)}}for(let y=0;y<a;y++)for(let u=0;u<l;u++){let x=u+c*y,f=u+c*(y+1),m=u+1+c*(y+1),v=u+1+c*y;g.push(x,f,v),g.push(f,m,v)}this.setIndex(g),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(S,3)),this.setAttribute("uv",new Je(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var za=class i extends mt{constructor(e=new So([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],l=0,a=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(l,a,h),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(o,2));function c(h){let d=s.length/3,p=h.extractPoints(t),g=p.shape,_=p.holes;ho.isClockWise(g)===!1&&(g=g.reverse());for(let M=0,y=_.length;M<y;M++){let u=_[M];ho.isClockWise(u)===!0&&(_[M]=u.reverse())}let S=ho.triangulateShape(g,_);for(let M=0,y=_.length;M<y;M++){let u=_[M];g=g.concat(u)}for(let M=0,y=g.length;M<y;M++){let u=g[M];s.push(u.x,u.y,0),r.push(0,0,1),o.push(u.x,u.y)}for(let M=0,y=S.length;M<y;M++){let u=S[M],x=u[0]+d,f=u[1]+d,m=u[2]+d;n.push(x,f,m),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Lv(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Lv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ka=class i extends mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let a=Math.min(o+l,Math.PI),c=0,h=[],d=new H,p=new H,g=[],_=[],S=[],M=[];for(let y=0;y<=n;y++){let u=[],x=y/n,f=o+x*l,m=e*Math.cos(f),v=Math.sqrt(e*e-m*m),E=0;y===0&&o===0?E=.5/t:y===n&&a===Math.PI&&(E=-.5/t);for(let b=0;b<=t;b++){let T=b/t,C=s+T*r;d.x=-v*Math.cos(C),d.y=m,d.z=v*Math.sin(C),_.push(d.x,d.y,d.z),p.copy(d).normalize(),S.push(p.x,p.y,p.z),M.push(T+E,1-x),u.push(c++)}h.push(u)}for(let y=0;y<n;y++)for(let u=0;u<t;u++){let x=h[y][u+1],f=h[y][u],m=h[y+1][u],v=h[y+1][u+1];(y!==0||o>0)&&g.push(x,f,v),(y!==n-1||a<Math.PI)&&g.push(f,m,v)}this.setIndex(g),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(S,3)),this.setAttribute("uv",new Je(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ha=class i extends mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let a=[],c=[],h=[],d=[],p=new H,g=new H,_=new H;for(let S=0;S<=n;S++){let M=o+S/n*l;for(let y=0;y<=s;y++){let u=y/s*r;g.x=(e+t*Math.cos(M))*Math.cos(u),g.y=(e+t*Math.cos(M))*Math.sin(u),g.z=t*Math.sin(M),c.push(g.x,g.y,g.z),p.x=e*Math.cos(u),p.y=e*Math.sin(u),_.subVectors(g,p).normalize(),h.push(_.x,_.y,_.z),d.push(y/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let M=1;M<=s;M++){let y=(s+1)*S+M-1,u=(s+1)*(S-1)+M-1,x=(s+1)*(S-1)+M,f=(s+1)*S+M;a.push(y,u,f),a.push(u,x,f)}this.setIndex(a),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Cr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(H0(s))s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(H0(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ti(i){let e={};for(let t=0;t<i.length;t++){let n=Cr(i[t]);for(let s in n)e[s]=n[s]}return e}function H0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dv(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Of(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}var Pr={clone:Cr,merge:ti},Nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ut=class extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nv,this.fragmentShader=Uv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=Dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new _e().setHex(s.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Nc=class extends ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var vn=class extends hs{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Er=class extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uc=class extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function oo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function tf(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $s=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fc=class extends $s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rf,endingEnd:rf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],a=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case of:r=e,l=2*t-n;break;case af:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(a===void 0)switch(this.getSettings_().endingEnd){case of:o=e,a=2*n-t;break;case af:o=1,a=n+s[1]-s[0];break;default:o=e-1,a=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-l),this._weightNext=c/(a-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,g=this._weightNext,_=(n-t)/(s-t),S=_*_,M=S*_,y=-p*M+2*p*S-p*_,u=(1+p)*M+(-1.5-2*p)*S+(-.5+p)*_+1,x=(-1-g)*M+(1.5+g)*S+.5*_,f=g*M-g*S;for(let m=0;m!==l;++m)r[m]=y*o[h+m]+u*o[c+m]+x*o[a+m]+f*o[d+m];return r}},Bc=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=(n-t)/(s-t),d=1-h;for(let p=0;p!==l;++p)r[p]=o[c+p]*d+o[a+p]*h;return r}},Oc=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zc=class extends $s{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-t)/(s-t),S=1-_;for(let M=0;M!==l;++M)r[M]=o[c+M]*S+o[a+M]*_;return r}let p=l*2,g=e-1;for(let _=0;_!==l;++_){let S=o[c+_],M=o[a+_],y=g*p+_*2,u=d[y],x=d[y+1],f=e*p+_*2,m=h[f],v=h[f+1],E=Bv(n,t,u,m,s);r[_]=Bp(E,S,x,v,M)}return r}};function Bp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Fv(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Bv(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=Bp(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let a=Fv(r,e,t,n,s);if(Math.abs(a)<1e-10)break;r=Math.max(0,Math.min(1,r-l/a))}return r}var Ti=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oo(t,this.TimeBufferType),this.values=oo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oo(e.times,Array),values:oo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),tf(e.settings)&&(n.settings={inTangents:oo(e.settings.inTangents,Array),outTangents:oo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case va:t=this.InterpolantFactoryMethodDiscrete;break;case yc:t=this.InterpolantFactoryMethodLinear;break;case lc:t=this.InterpolantFactoryMethodSmooth;break;case sf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return lt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return lc;case this.InterpolantFactoryMethodBezier:return sf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;tf(this.settings)&&(V0(this.settings.inTangents,e),V0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let a=n[l];if(typeof a=="number"&&isNaN(a)){ft("KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(o!==null&&o>a){ft("KeyframeTrack: Out of order keys.",this,l,a,o),e=!1;break}o=a}if(s!==void 0&&H1(s))for(let l=0,a=s.length;l!==a;++l){let c=s[l];if(isNaN(c)){ft("KeyframeTrack: Value is not a valid number.",this,l,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===lc,r=e.length-1,o=1;for(let l=1;l<r;++l){let a=!1,c=e[l],h=e[l+1];if(c!==h&&(l!==1||c!==e[0]))if(s)a=!0;else{let d=l*n,p=d-n,g=d+n;for(let _=0;_!==n;++_){let S=t[d+_];if(S!==t[p+_]||S!==t[g+_]){a=!0;break}}}if(a){if(l!==o){e[o]=e[l];let d=l*n,p=o*n;for(let g=0;g!==n;++g)t[p+g]=t[d+g]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,a=o*n,c=0;c!==n;++c)t[a+c]=t[l+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,tf(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function V0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=yc;var Js=class extends Ti{constructor(e,t,n){super(e,t,n)}};Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=va;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}};kc.prototype.ValueTypeName="color";var Hc=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}};Hc.prototype.ValueTypeName="number";var Vc=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(n-t)/(s-t),c=e*l;for(let h=c+l;c!==h;c+=4)xn.slerpFlat(r,0,o,c-l,o,c,a);return r}},Va=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Vc(this.times,this.values,this.getValueSize(),e)}};Va.prototype.ValueTypeName="quaternion";Va.prototype.InterpolantFactoryMethodSmooth=void 0;var js=class extends Ti{constructor(e,t,n){super(e,t,n)}};js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=va;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}};Gc.prototype.ValueTypeName="vector";var uc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(G0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!G0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function G0(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Wc=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,a,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){let g=c[d],_=c[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Op=new Wc,Eo=class{constructor(e){this.manager=e!==void 0?e:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ao=new WeakMap,Xc=class extends Eo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=uc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=ao.get(o);d===void 0&&(d=[],ao.set(o,d)),d.push({onLoad:t,onError:s})}return o}let l=mo("img");function a(){h(),t&&t(this);let d=ao.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onLoad&&g.onLoad(this)}ao.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),uc.remove(`image:${e}`);let p=ao.get(this)||[];for(let g=0;g<p.length;g++){let _=p[g];_.onError&&_.onError(d)}ao.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",a,!1),l.removeEventListener("error",c,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),uc.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}};var Ga=class extends Eo{constructor(e){super(e)}load(e,t,n,s){let r=new Jn,o=new Xc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},wo=class extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wa=class extends wo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nf=new et,W0=new H,X0=new H,Xa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;W0.setFromMatrixPosition(e.matrixWorld),t.position.copy(W0),X0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(X0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){nf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(nf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,a=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===po||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(nf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oc=new H,ac=new xn,as=new H,Ls=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oc,ac,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,ac,as.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(oc,ac,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,ac,as.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ys=new H,q0=new Le,Y0=new Le,Wn=class extends Ls{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ph*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(Ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ys.x,Ys.y).multiplyScalar(-e/Ys.z),Ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ys.x,Ys.y).multiplyScalar(-e/Ys.z)}getViewSize(e,t){return this.getViewBounds(e,q0,Y0),t.subVectors(Y0,q0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ph*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let a=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/a,t-=o.offsetY*n/c,s*=o.width/a,n*=o.height/c}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ff=class extends Xa{constructor(){super(new Wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=_a*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},qa=class extends wo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ff}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var Qs=class extends Ls{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,a=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},df=class extends Xa{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ao=class extends wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new df}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var fs=class extends mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var lo=-90,co=1,qc=class extends Rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wn(lo,co,e,t);s.layers=this.layers,this.add(s);let r=new Wn(lo,co,e,t);r.layers=this.layers,this.add(r);let o=new Wn(lo,co,e,t);o.layers=this.layers,this.add(o);let l=new Wn(lo,co,e,t);l.layers=this.layers,this.add(l);let a=new Wn(lo,co,e,t);a.layers=this.layers,this.add(a);let c=new Wn(lo,co,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,a]=t;for(let c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,a,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,4,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,p,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Yc=class extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ya=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ov.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ov(){this._document.hidden===!1&&this.reset()}var zf="\\[\\]\\.:\\/",zv=new RegExp("["+zf+"]","g"),kf="[^"+zf+"]",kv="[^"+zf.replace("\\.","")+"]",Hv=/((?:WC+[\/:])*)/.source.replace("WC",kf),Vv=/(WCOD+)?/.source.replace("WCOD",kv),Gv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kf),Wv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kf),Xv=new RegExp("^"+Hv+Vv+Gv+Wv+"$"),qv=["material","materials","bones","map"],pf=class{constructor(e,t,n){let s=n||nn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},nn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zv,"")}static parseTrackName(e){let t=Xv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let a=n(l.children);if(a)return a}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=pf;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RS=new Float32Array(1);var qf=class qf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};qf.prototype.isMatrix2=!0;var mf=qf;function Hf(i,e,t,n){let s=Yv(n);switch(t){case Df:return i*e;case nr:return i*e/s.components*s.byteLength;case tu:return i*e/s.components*s.byteLength;case ir:return i*e*2/s.components*s.byteLength;case nu:return i*e*2/s.components*s.byteLength;case Nf:return i*e*3/s.components*s.byteLength;case ei:return i*e*4/s.components*s.byteLength;case iu:return i*e*4/s.components*s.byteLength;case Ja:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qa:case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ru:case au:return Math.max(i,16)*Math.max(e,8)/4;case su:case ou:return Math.max(i,8)*Math.max(e,8)/2;case lu:case cu:case hu:case fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uu:case tl:case du:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _u:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Su:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Au:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ru:case Cu:case Pu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Iu:case Lu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nl:case Du:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yv(i){switch(i){case Qn:case Cf:return{byteLength:1,components:1};case Po:case Pf:case Cn:return{byteLength:2,components:1};case Qc:case eu:return{byteLength:2,components:4};case ts:case jc:case Ui:return{byteLength:4,components:1};case If:case Lf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function om(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ex(i){let e=new WeakMap;function t(l,a){let c=l.array,h=l.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(a,p),i.bufferData(a,c,h),l.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,a,c){let h=a.array,d=a.updateRanges;if(i.bindBuffer(c,l),d.length===0)i.bufferSubData(c,0,h);else{d.sort((g,_)=>g.start-_.start);let p=0;for(let g=1;g<d.length;g++){let _=d[p],S=d[g];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++p,d[p]=S)}d.length=p+1;for(let g=0,_=d.length;g<_;g++){let S=d[g];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let a=e.get(l);a&&(i.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let c=e.get(l);if(c===void 0)e.set(l,t(l,a));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,a),c.version=l.version}}return{get:s,remove:r,update:o}}var tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nx=`#ifdef USE_ALPHAHASH
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
#endif`,ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ax=`#ifdef USE_AOMAP
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
#endif`,lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cx=`#ifdef USE_BATCHING
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
#endif`,ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,px=`#ifdef USE_IRIDESCENCE
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
#endif`,mx=`#ifdef USE_BUMPMAP
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
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tx=`#define PI 3.141592653589793
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
} // validated`,Ex=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vx=`#ifdef USE_GRADIENTMAP
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
}`,Gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jx=`PhysicalMaterial material;
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
#endif`,Qx=`uniform sampler2D dfgLUT;
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
}`,e2=`
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
#endif`,t2=`#if defined( RE_IndirectDiffuse )
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
#endif`,n2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,s2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h2=`#if defined( USE_POINTS_UV )
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
#endif`,f2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v2=`#ifdef USE_MORPHTARGETS
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
#endif`,x2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,T2=`#ifdef USE_NORMALMAP
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
#endif`,E2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k2=`float getShadowMask() {
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
}`,H2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V2=`#ifdef USE_SKINNING
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
#endif`,G2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W2=`#ifdef USE_SKINNING
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
#endif`,X2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K2=`#ifdef USE_TRANSMISSION
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
#endif`,$2=`#ifdef USE_TRANSMISSION
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
#endif`,J2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ny=`uniform sampler2D t2D;
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
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`#include <common>
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
}`,ly=`#if DEPTH_PACKING == 3200
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
}`,cy=`#define DISTANCE
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
}`,uy=`#define DISTANCE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`uniform float scale;
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#include <common>
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
}`,gy=`uniform vec3 diffuse;
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
}`,vy=`#define LAMBERT
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
}`,xy=`#define LAMBERT
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
}`,yy=`#define MATCAP
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
}`,_y=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,My=`#define NORMAL
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
}`,Sy=`#define PHONG
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
}`,Ty=`#define PHONG
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
}`,Ey=`#define STANDARD
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
}`,wy=`#define STANDARD
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
}`,Ay=`#define TOON
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
}`,Ry=`#define TOON
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
}`,Cy=`uniform float size;
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
}`,Py=`uniform vec3 diffuse;
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
}`,Iy=`#include <common>
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
}`,Ly=`uniform vec3 color;
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
}`,Dy=`uniform float rotation;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:tx,alphahash_pars_fragment:nx,alphamap_fragment:ix,alphamap_pars_fragment:sx,alphatest_fragment:rx,alphatest_pars_fragment:ox,aomap_fragment:ax,aomap_pars_fragment:lx,batching_pars_vertex:cx,batching_vertex:ux,begin_vertex:hx,beginnormal_vertex:fx,bsdfs:dx,iridescence_fragment:px,bumpmap_pars_fragment:mx,clipping_planes_fragment:gx,clipping_planes_pars_fragment:vx,clipping_planes_pars_vertex:xx,clipping_planes_vertex:yx,color_fragment:_x,color_pars_fragment:bx,color_pars_vertex:Mx,color_vertex:Sx,common:Tx,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:wx,displacementmap_pars_vertex:Ax,displacementmap_vertex:Rx,emissivemap_fragment:Cx,emissivemap_pars_fragment:Px,colorspace_fragment:Ix,colorspace_pars_fragment:Lx,envmap_fragment:Dx,envmap_common_pars_fragment:Nx,envmap_pars_fragment:Ux,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:Yx,envmap_vertex:Bx,fog_vertex:Ox,fog_pars_vertex:zx,fog_fragment:kx,fog_pars_fragment:Hx,gradientmap_pars_fragment:Vx,lightmap_pars_fragment:Gx,lights_lambert_fragment:Wx,lights_lambert_pars_fragment:Xx,lights_pars_begin:qx,lights_toon_fragment:Zx,lights_toon_pars_fragment:Kx,lights_phong_fragment:$x,lights_phong_pars_fragment:Jx,lights_physical_fragment:jx,lights_physical_pars_fragment:Qx,lights_fragment_begin:e2,lights_fragment_maps:t2,lights_fragment_end:n2,lightprobes_pars_fragment:i2,logdepthbuf_fragment:s2,logdepthbuf_pars_fragment:r2,logdepthbuf_pars_vertex:o2,logdepthbuf_vertex:a2,map_fragment:l2,map_pars_fragment:c2,map_particle_fragment:u2,map_particle_pars_fragment:h2,metalnessmap_fragment:f2,metalnessmap_pars_fragment:d2,morphinstance_vertex:p2,morphcolor_vertex:m2,morphnormal_vertex:g2,morphtarget_pars_vertex:v2,morphtarget_vertex:x2,normal_fragment_begin:y2,normal_fragment_maps:_2,normal_pars_fragment:b2,normal_pars_vertex:M2,normal_vertex:S2,normalmap_pars_fragment:T2,clearcoat_normal_fragment_begin:E2,clearcoat_normal_fragment_maps:w2,clearcoat_pars_fragment:A2,iridescence_pars_fragment:R2,opaque_fragment:C2,packing:P2,premultiplied_alpha_fragment:I2,project_vertex:L2,dithering_fragment:D2,dithering_pars_fragment:N2,roughnessmap_fragment:U2,roughnessmap_pars_fragment:F2,shadowmap_pars_fragment:B2,shadowmap_pars_vertex:O2,shadowmap_vertex:z2,shadowmask_pars_fragment:k2,skinbase_vertex:H2,skinning_pars_vertex:V2,skinning_vertex:G2,skinnormal_vertex:W2,specularmap_fragment:X2,specularmap_pars_fragment:q2,tonemapping_fragment:Y2,tonemapping_pars_fragment:Z2,transmission_fragment:K2,transmission_pars_fragment:$2,uv_pars_fragment:J2,uv_pars_vertex:j2,uv_vertex:Q2,worldpos_vertex:ey,background_vert:ty,background_frag:ny,backgroundCube_vert:iy,backgroundCube_frag:sy,cube_vert:ry,cube_frag:oy,depth_vert:ay,depth_frag:ly,distance_vert:cy,distance_frag:uy,equirect_vert:hy,equirect_frag:fy,linedashed_vert:dy,linedashed_frag:py,meshbasic_vert:my,meshbasic_frag:gy,meshlambert_vert:vy,meshlambert_frag:xy,meshmatcap_vert:yy,meshmatcap_frag:_y,meshnormal_vert:by,meshnormal_frag:My,meshphong_vert:Sy,meshphong_frag:Ty,meshphysical_vert:Ey,meshphysical_frag:wy,meshtoon_vert:Ay,meshtoon_frag:Ry,points_vert:Cy,points_frag:Py,shadow_vert:Iy,shadow_frag:Ly,sprite_vert:Dy,sprite_frag:Ny},Ge={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ms={basic:{uniforms:ti([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:ti([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:ti([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:ti([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:ti([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new _e(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:ti([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:ti([Ge.points,Ge.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:ti([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:ti([Ge.common,Ge.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:ti([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:ti([Ge.sprite,Ge.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:ti([Ge.common,Ge.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:ti([Ge.lights,Ge.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};ms.physical={uniforms:ti([ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Bu={r:0,b:0,g:0},Uy=new et,am=new pt;am.set(-1,0,0,0,1,0,0,0,1);function Fy(i,e,t,n,s,r){let o=new _e(0),l=s===!0?0:1,a,c,h=null,d=0,p=null;function g(u){let x=u.isScene===!0?u.background:null;if(x&&x.isTexture){let f=u.backgroundBlurriness>0;x=e.get(x,f)}return x}function _(u){let x=!1,f=g(u);f===null?M(o,l):f&&f.isColor&&(M(f,1),x=!0);let m=i.xr.getEnvironmentBlendMode();m==="additive"?t.buffers.color.setClear(0,0,0,1,r):m==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(u,x){let f=g(x);f&&(f.isCubeTexture||f.mapping===Ka)?(c===void 0&&(c=new ct(new Qt(1,1,1),new ut({name:"BackgroundCubeMaterial",uniforms:Cr(ms.backgroundCube.uniforms),vertexShader:ms.backgroundCube.vertexShader,fragmentShader:ms.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(m,v,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=f,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(x.backgroundRotation)).transpose(),f.isCubeTexture&&f.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(am),c.material.toneMapped=Rt.getTransfer(f.colorSpace)!==Vt,(h!==f||d!==f.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=f,d=f.version,p=i.toneMapping),c.layers.enableAll(),u.unshift(c,c.geometry,c.material,0,0,null)):f&&f.isTexture&&(a===void 0&&(a=new ct(new sn(2,2),new ut({name:"BackgroundMaterial",uniforms:Cr(ms.background.uniforms),vertexShader:ms.background.vertexShader,fragmentShader:ms.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=f,a.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,a.material.toneMapped=Rt.getTransfer(f.colorSpace)!==Vt,f.matrixAutoUpdate===!0&&f.updateMatrix(),a.material.uniforms.uvTransform.value.copy(f.matrix),(h!==f||d!==f.version||p!==i.toneMapping)&&(a.material.needsUpdate=!0,h=f,d=f.version,p=i.toneMapping),a.layers.enableAll(),u.unshift(a,a.geometry,a.material,0,0,null))}function M(u,x){u.getRGB(Bu,Of(i)),t.buffers.color.setClear(Bu.r,Bu.g,Bu.b,x,r)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(u,x=1){o.set(u),l=x,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(u){l=u,M(o,l)},render:_,addToRenderList:S,dispose:y}}function By(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function l(R,P,A,w,L){let D=!1,U=d(R,w,A,P);r!==U&&(r=U,c(r.object)),D=g(R,w,A,L),D&&_(R,w,A,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,f(R,P,A,w),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function a(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function d(R,P,A,w){let L=w.wireframe===!0,D=n[P.id];D===void 0&&(D={},n[P.id]=D);let U=R.isInstancedMesh===!0?R.id:0,V=D[U];V===void 0&&(V={},D[U]=V);let z=V[A.id];z===void 0&&(z={},V[A.id]=z);let O=z[L];return O===void 0&&(O=p(a()),z[L]=O),O}function p(R){let P=[],A=[],w=[];for(let L=0;L<t;L++)P[L]=0,A[L]=0,w[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:A,attributeDivisors:w,object:R,attributes:{},index:null}}function g(R,P,A,w){let L=r.attributes,D=P.attributes,U=0,V=A.getAttributes();for(let z in V)if(V[z].location>=0){let k=L[z],W=D[z];if(W===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),k===void 0||k.attribute!==W||W&&k.data!==W.data)return!0;U++}return r.attributesNum!==U||r.index!==w}function _(R,P,A,w){let L={},D=P.attributes,U=0,V=A.getAttributes();for(let z in V)if(V[z].location>=0){let k=D[z];k===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(k=R.instanceColor));let W={};W.attribute=k,k&&k.data&&(W.data=k.data),L[z]=W,U++}r.attributes=L,r.attributesNum=U,r.index=w}function S(){let R=r.newAttributes;for(let P=0,A=R.length;P<A;P++)R[P]=0}function M(R){y(R,0)}function y(R,P){let A=r.newAttributes,w=r.enabledAttributes,L=r.attributeDivisors;A[R]=1,w[R]===0&&(i.enableVertexAttribArray(R),w[R]=1),L[R]!==P&&(i.vertexAttribDivisor(R,P),L[R]=P)}function u(){let R=r.newAttributes,P=r.enabledAttributes;for(let A=0,w=P.length;A<w;A++)P[A]!==R[A]&&(i.disableVertexAttribArray(A),P[A]=0)}function x(R,P,A,w,L,D,U){U===!0?i.vertexAttribIPointer(R,P,A,L,D):i.vertexAttribPointer(R,P,A,w,L,D)}function f(R,P,A,w){S();let L=w.attributes,D=A.getAttributes(),U=P.defaultAttributeValues;for(let V in D){let z=D[V];if(z.location>=0){let O=L[V];if(O===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),O!==void 0){let k=O.normalized,W=O.itemSize,$=e.get(O);if($===void 0)continue;let le=$.buffer,Me=$.type,be=$.bytesPerElement,K=Me===i.INT||Me===i.UNSIGNED_INT||O.gpuType===jc;if(O.isInterleavedBufferAttribute){let j=O.data,xe=j.stride,Ce=O.offset;if(j.isInstancedInterleavedBuffer){for(let Ae=0;Ae<z.locationSize;Ae++)y(z.location+Ae,j.meshPerAttribute);R.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ae=0;Ae<z.locationSize;Ae++)M(z.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Ae=0;Ae<z.locationSize;Ae++)x(z.location+Ae,W/z.locationSize,Me,k,xe*be,(Ce+W/z.locationSize*Ae)*be,K)}else{if(O.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)y(z.location+j,O.meshPerAttribute);R.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let j=0;j<z.locationSize;j++)M(z.location+j);i.bindBuffer(i.ARRAY_BUFFER,le);for(let j=0;j<z.locationSize;j++)x(z.location+j,W/z.locationSize,Me,k,W*be,W/z.locationSize*j*be,K)}}else if(U!==void 0){let k=U[V];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(z.location,k);break;case 3:i.vertexAttrib3fv(z.location,k);break;case 4:i.vertexAttrib4fv(z.location,k);break;default:i.vertexAttrib1fv(z.location,k)}}}}u()}function m(){T();for(let R in n){let P=n[R];for(let A in P){let w=P[A];for(let L in w){let D=w[L];for(let U in D)h(D[U].object),delete D[U];delete w[L]}}delete n[R]}}function v(R){if(n[R.id]===void 0)return;let P=n[R.id];for(let A in P){let w=P[A];for(let L in w){let D=w[L];for(let U in D)h(D[U].object),delete D[U];delete w[L]}}delete n[R.id]}function E(R){for(let P in n){let A=n[P];for(let w in A){let L=A[w];if(L[R.id]===void 0)continue;let D=L[R.id];for(let U in D)h(D[U].object),delete D[U];delete L[R.id]}}}function b(R){for(let P in n){let A=n[P],w=R.isInstancedMesh===!0?R.id:0,L=A[w];if(L!==void 0){for(let D in L){let U=L[D];for(let V in U)h(U[V].object),delete U[V];delete L[D]}delete A[w],Object.keys(A).length===0&&delete n[P]}}}function T(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:T,resetDefaultState:C,dispose:m,releaseStatesOfGeometry:v,releaseStatesOfObject:b,releaseStatesOfProgram:E,initAttributes:S,enableAttribute:M,disableUnusedAttributes:u}}function Oy(i,e,t){let n;function s(a){n=a}function r(a,c){i.drawArrays(n,a,c),t.update(c,n,1)}function o(a,c,h){h!==0&&(i.drawArraysInstanced(n,a,c,h),t.update(c,n,h))}function l(a,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function zy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==ei&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(E){let b=E===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Qn&&E!==Ui&&!b&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function a(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=a(c);h!==c&&(lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),f=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),m=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:u,maxVaryings:x,maxFragmentUniforms:f,maxSamples:m,samples:v}}function ky(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ki,l=new pt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let g=d.length!==0||p||n!==0||s;return s=p,n=d.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,g){let _=d.clippingPlanes,S=d.clipIntersection,M=d.clipShadows,y=i.get(d);if(!s||_===null||_.length===0||r&&!M)r?h(null):c();else{let u=r?0:n,x=u*4,f=y.clippingState||null;a.value=f,f=h(_,p,x,g);for(let m=0;m!==x;++m)f[m]=t[m];y.clippingState=f,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=u}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,g,_){let S=d!==null?d.length:0,M=null;if(S!==0){if(M=a.value,_!==!0||M===null){let y=g+S*4,u=p.matrixWorldInverse;l.getNormalMatrix(u),(M===null||M.length<y)&&(M=new Float32Array(y));for(let x=0,f=g;x!==S;++x,f+=4)o.copy(d[x]).applyMatrix4(u,l),o.normal.toArray(M,f),M[f+3]=o.constant}a.value=M,a.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,M}}var No=4,Hy=6,Vy=20,Gy=256,il=new Qs,zp=new _e,Yf=null,Zf=0,Kf=0,$f=!1,Wy=new H,Ir=new H,zu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=Wy}=r;Yf=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),$f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a,l),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yf,Zf,Kf),this._renderer.xr.enabled=$f,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yf=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),$f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Cn,format:ei,colorSpace:xa,depthBuffer:!1},s=kp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xy(r)),this._blurMaterial=Yy(r,e,t),this._ggxMaterial=qy(r,e,t)}return s}_compileMaterial(e){let t=new ct(new mt,e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,n,s,r){let a=new Wn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,g=d.toneMapping;d.getClearColor(zp),d.toneMapping=es,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new Qt,new yn({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,M=S.material,y=!1,u=e.background;u?u.isColor&&(M.color.copy(u),e.background=null,y=!0):(M.color.copy(zp),y=!0);for(let x=0;x<6;x++){let f=x%3;f===0?(a.up.set(0,c[x],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+h[x],r.y,r.z)):f===1?(a.up.set(0,0,c[x]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+h[x],r.z)):(a.up.set(0,c[x],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+h[x]));let m=this._cubeSize;Do(s,f*m,x>2?m:0,m,m),d.setRenderTarget(s),y&&d.render(S,a),d.render(e,a)}d.toneMapping=g,d.autoClear=p,e.background=u}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===er||e.mapping===Rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let a=this._cubeSize;Do(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(o,il)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let a=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),p=c*1.25,g=d*p,{_lodMax:_}=this,S=this._sizeLods[n],M=3*S*(n>_-No?n-_+No:0),y=4*(this._cubeSize-S);a.envMap.value=e.texture,a.roughness.value=g,a.mipInt.value=_-t,Do(r,M,y,3*S,2*S),s.setRenderTarget(r),s.render(l,il),a.envMap.value=r.texture,a.roughness.value=0,a.mipInt.value=_-n,Do(e,M,y,3*S,2*S),s.setRenderTarget(e),s.render(l,il)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,a=this._lodMeshes[s];a.material=l;let c=l.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-No?s-this._lodMax+No:0),p=4*(this._cubeSize-h);Do(t,d,p,3*h,2*h),o.setRenderTarget(t),o.render(a,il)}};function Xy(i){let e=[],t=[],n=i,s=i-No+1+Hy;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),a=-l,c=1+l,h=[a,a,c,a,c,c,a,a,c,c,a,c],d=6,p=6,g=3,_=new Float32Array(g*p*d),S=new Float32Array(g*p*d);for(let y=0;y<d;y++){let u=y%3*2/3-1,x=y>2?0:-1,f=[u,x,0,u+2/3,x,0,u+2/3,x+1,0,u,x,0,u+2/3,x+1,0,u,x+1,0];_.set(f,g*p*y);for(let m=0;m<p;m++){let v=h[m*2]*2-1,E=h[m*2+1]*2-1;y===0?Ir.set(1,E,v):y===1?Ir.set(-v,1,-E):y===2?Ir.set(-v,E,1):y===3?Ir.set(-1,E,-v):y===4?Ir.set(-v,-1,E):Ir.set(v,E,-1),Ir.toArray(S,(y*p+m)*g)}}let M=new mt;M.setAttribute("position",new bt(_,g)),M.setAttribute("outputDirection",new bt(S,g)),t.push(new ct(M,null)),n>No&&n--}return{lodMeshes:t,sizeLods:e}}function kp(i,e,t){let n=new Yt(i,e,t);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qy(i,e,t){return new ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Yy(i,e,t){return new ut({name:"SphericalGaussianBlur",defines:{SAMPLES:Vy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Hp(){return new ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Vp(){return new ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Vu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ku=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new ut({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:ri});r.uniforms.tEquirect.value=t;let o=new ct(s,r),l=t.minFilter;return t.minFilter===Ln&&(t.minFilter=Bt),new qc(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Zy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,g=!1){return p==null?null:g?o(p):r(p)}function r(p){if(p&&p.isTexture){let g=p.mapping;if(g===Kc||g===$c)if(e.has(p)){let _=e.get(p).texture;return l(_,p.mapping)}else{let _=p.image;if(_&&_.height>0){let S=new ku(_.height);return S.fromEquirectangularTexture(i,p),e.set(p,S),p.addEventListener("dispose",c),l(S.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){let g=p.mapping,_=g===Kc||g===$c,S=g===er||g===Rr;if(_||S){let M=t.get(p),y=M!==void 0?M.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==y)return n===null&&(n=new zu(i)),M=_?n.fromEquirectangular(p,M):n.fromCubemap(p,M),M.texture.pmremVersion=p.pmremVersion,t.set(p,M),M.texture;if(M!==void 0)return M.texture;{let u=p.image;return _&&u&&u.height>0||S&&u&&a(u)?(n===null&&(n=new zu(i)),M=_?n.fromEquirectangular(p):n.fromCubemap(p),M.texture.pmremVersion=p.pmremVersion,t.set(p,M),p.addEventListener("dispose",h),M.texture):null}}}return p}function l(p,g){return g===Kc?p.mapping=er:g===$c&&(p.mapping=Rr),p}function a(p){let g=0,_=6;for(let S=0;S<_;S++)p[S]!==void 0&&g++;return g===_}function c(p){let g=p.target;g.removeEventListener("dispose",c);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function h(p){let g=p.target;g.removeEventListener("dispose",h);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ky(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&br("WebGLRenderer: "+n+" extension not supported."),s}}}function $y(i,e,t,n){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let _ in p.attributes)e.remove(p.attributes[_]);p.removeEventListener("dispose",o),delete s[p.id];let g=r.get(p);g&&(e.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function a(d){let p=d.attributes;for(let g in p)e.update(p[g],i.ARRAY_BUFFER)}function c(d){let p=[],g=d.index,_=d.attributes.position,S=0;if(_===void 0)return;if(g!==null){let u=g.array;S=g.version;for(let x=0,f=u.length;x<f;x+=3){let m=u[x+0],v=u[x+1],E=u[x+2];p.push(m,v,v,E,E,m)}}else{let u=_.array;S=_.version;for(let x=0,f=u.length/3-1;x<f;x+=3){let m=x+0,v=x+1,E=x+2;p.push(m,v,v,E,E,m)}}let M=new(_.count>=65535?Ea:Ta)(p,1);M.version=S;let y=r.get(d);y&&e.remove(y),r.set(d,M)}function h(d){let p=r.get(d);if(p){let g=d.index;g!==null&&p.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:l,update:a,getWireframeAttribute:h}}function Jy(i,e,t){let n;function s(d){n=d}let r,o;function l(d){r=d.type,o=d.bytesPerElement}function a(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let S=0;for(let M=0;M<g;M++)S+=p[M];t.update(S,n,1)}this.setMode=s,this.setIndex=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function jy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qy(i,e,t){let n=new WeakMap,s=new dt;function r(o,l,a){let c=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(l);if(p===void 0||p.count!==d){let T=function(){E.dispose(),n.delete(l),l.removeEventListener("dispose",T)};p!==void 0&&p.texture.dispose();let g=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,S=l.morphAttributes.color!==void 0,M=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],u=l.morphAttributes.color||[],x=0;g===!0&&(x=1),_===!0&&(x=2),S===!0&&(x=3);let f=l.attributes.position.count*x,m=1;f>e.maxTextureSize&&(m=Math.ceil(f/e.maxTextureSize),f=e.maxTextureSize);let v=new Float32Array(f*m*4*d),E=new ba(v,f,m,d);E.type=Ui,E.needsUpdate=!0;let b=x*4;for(let C=0;C<d;C++){let R=M[C],P=y[C],A=u[C],w=f*m*4*C;for(let L=0;L<R.count;L++){let D=L*b;g===!0&&(s.fromBufferAttribute(R,L),v[w+D+0]=s.x,v[w+D+1]=s.y,v[w+D+2]=s.z,v[w+D+3]=0),_===!0&&(s.fromBufferAttribute(P,L),v[w+D+4]=s.x,v[w+D+5]=s.y,v[w+D+6]=s.z,v[w+D+7]=0),S===!0&&(s.fromBufferAttribute(A,L),v[w+D+8]=s.x,v[w+D+9]=s.y,v[w+D+10]=s.z,v[w+D+11]=A.itemSize===4?s.w:1)}}p={count:d,texture:E,size:new Le(f,m)},n.set(l,p),l.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let S=0;S<c.length;S++)g+=c[S];let _=l.morphTargetsRelative?1:1-g;a.getUniforms().setValue(i,"morphTargetBaseInfluence",_),a.getUniforms().setValue(i,"morphTargetInfluences",c)}a.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),a.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function e_(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,p=e.get(c,d);if(r.get(p)!==h&&(e.update(p),r.set(p,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return p}function l(){r=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var t_={[Mf]:"LINEAR_TONE_MAPPING",[Sf]:"REINHARD_TONE_MAPPING",[Tf]:"CINEON_TONE_MAPPING",[Ef]:"ACES_FILMIC_TONE_MAPPING",[Af]:"AGX_TONE_MAPPING",[Za]:"NEUTRAL_TONE_MAPPING",[wf]:"CUSTOM_TONE_MAPPING"};function n_(i,e,t,n,s,r){let o=new Yt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,a=null,c=new mt;c.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Je([0,2,0,0,2,0],2));let h=new Nc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ct(c,h),p=new Qs(-1,1,1,-1,0,1),g=null,_=null,S=!1,M,y=null,u=[],x=!1;this.setSize=function(f,m){o.setSize(f,m),l!==null&&l.setSize(f,m),a!==null&&a.setSize(f,m);for(let v=0;v<u.length;v++){let E=u[v];E.setSize&&E.setSize(f,m)}},this.setEffects=function(f){u=f,x=u.length>0&&u[0].isRenderPass===!0;let m=o.width,v=o.height;u.length>0&&l===null&&(l=new Yt(m,v,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),a=new Yt(m,v,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<u.length;E++){let b=u[E];b.setSize&&b.setSize(m,v)}},this.begin=function(f,m){if(S||f.toneMapping===es&&u.length===0)return!1;if(y=m,m!==null){let v=m.width,E=m.height;(o.width!==v||o.height!==E)&&this.setSize(v,E)}return x===!1&&f.setRenderTarget(o),M=f.toneMapping,f.toneMapping=es,!0},this.hasRenderPass=function(){return x},this.end=function(f,m){f.toneMapping=M,S=!0;let v=o,E=l;for(let b=0;b<u.length;b++){let T=u[b];T.enabled!==!1&&(T.render(f,E,v,m),T.needsSwap!==!1&&(v=E,E=E===l?a:l))}if(g!==f.outputColorSpace||_!==f.toneMapping){g=f.outputColorSpace,_=f.toneMapping,h.defines={},Rt.getTransfer(g)===Vt&&(h.defines.SRGB_TRANSFER="");let b=t_[_];b&&(h.defines[b]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,f.setRenderTarget(y),f.render(d,p),y=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),a!==null&&a.dispose(),c.dispose(),h.dispose()}}var lm=new Jn,Qf=new Ks(1,1),cm=new ba,um=new Mc,hm=new Ra,Gp=[],Wp=[],Xp=new Float32Array(16),qp=new Float32Array(9),Yp=new Float32Array(4);function Fo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gp[s];if(r===void 0&&(r=new Float32Array(s),Gp[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function Dn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gu(i,e){let t=Wp[e];t===void 0&&(t=new Int32Array(e),Wp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function i_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;i.uniform2fv(this.addr,e),Nn(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dn(t,e))return;i.uniform3fv(this.addr,e),Nn(t,e)}}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;i.uniform4fv(this.addr,e),Nn(t,e)}}function a_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(Dn(t,n))return;Yp.set(n),i.uniformMatrix2fv(this.addr,!1,Yp),Nn(t,n)}}function l_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(Dn(t,n))return;qp.set(n),i.uniformMatrix3fv(this.addr,!1,qp),Nn(t,n)}}function c_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(Dn(t,n))return;Xp.set(n),i.uniformMatrix4fv(this.addr,!1,Xp),Nn(t,n)}}function u_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;i.uniform2iv(this.addr,e),Nn(t,e)}}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;i.uniform3iv(this.addr,e),Nn(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;i.uniform4iv(this.addr,e),Nn(t,e)}}function p_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;i.uniform2uiv(this.addr,e),Nn(t,e)}}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;i.uniform3uiv(this.addr,e),Nn(t,e)}}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;i.uniform4uiv(this.addr,e),Nn(t,e)}}function x_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qf.compareFunction=t.isReversedDepthBuffer()?Fu:Uu,r=Qf):r=lm,t.setTexture2D(e||r,s)}function y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||um,s)}function __(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hm,s)}function b_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cm,s)}function M_(i){switch(i){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return o_;case 35674:return a_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return u_;case 35667:case 35671:return h_;case 35668:case 35672:return f_;case 35669:case 35673:return d_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return b_}}function S_(i,e){i.uniform1fv(this.addr,e)}function T_(i,e){let t=Fo(e,this.size,2);i.uniform2fv(this.addr,t)}function E_(i,e){let t=Fo(e,this.size,3);i.uniform3fv(this.addr,t)}function w_(i,e){let t=Fo(e,this.size,4);i.uniform4fv(this.addr,t)}function A_(i,e){let t=Fo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function R_(i,e){let t=Fo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function C_(i,e){let t=Fo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function P_(i,e){i.uniform1iv(this.addr,e)}function I_(i,e){i.uniform2iv(this.addr,e)}function L_(i,e){i.uniform3iv(this.addr,e)}function D_(i,e){i.uniform4iv(this.addr,e)}function N_(i,e){i.uniform1uiv(this.addr,e)}function U_(i,e){i.uniform2uiv(this.addr,e)}function F_(i,e){i.uniform3uiv(this.addr,e)}function B_(i,e){i.uniform4uiv(this.addr,e)}function O_(i,e,t){let n=this.cache,s=e.length,r=Gu(t,s);Dn(n,r)||(i.uniform1iv(this.addr,r),Nn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Qf:o=lm;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function z_(i,e,t){let n=this.cache,s=e.length,r=Gu(t,s);Dn(n,r)||(i.uniform1iv(this.addr,r),Nn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||um,r[o])}function k_(i,e,t){let n=this.cache,s=e.length,r=Gu(t,s);Dn(n,r)||(i.uniform1iv(this.addr,r),Nn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hm,r[o])}function H_(i,e,t){let n=this.cache,s=e.length,r=Gu(t,s);Dn(n,r)||(i.uniform1iv(this.addr,r),Nn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||cm,r[o])}function V_(i){switch(i){case 5126:return S_;case 35664:return T_;case 35665:return E_;case 35666:return w_;case 35674:return A_;case 35675:return R_;case 35676:return C_;case 5124:case 35670:return P_;case 35667:case 35671:return I_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return N_;case 36294:return U_;case 36295:return F_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return H_}}var ed=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M_(t.type)}},td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V_(t.type)}},nd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},Jf=/(\w+)(\])?(\[|\.)?/g;function Zp(i,e){i.seq.push(e),i.map[e.id]=e}function G_(i,e,t){let n=i.name,s=n.length;for(Jf.lastIndex=0;;){let r=Jf.exec(n),o=Jf.lastIndex,l=r[1],a=r[2]==="]",c=r[3];if(a&&(l=l|0),c===void 0||c==="["&&o+2===s){Zp(t,c===void 0?new ed(l,i,e):new td(l,i,e));break}else{let d=t.map[l];d===void 0&&(d=new nd(l),Zp(t,d)),t=d}}}var Uo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),a=e.getUniformLocation(t,l.name);G_(l,a,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Kp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var W_=37297,X_=0;function q_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var $p=new pt;function Y_(i){Rt._getMatrix($p,Rt.workingColorSpace,i);let e=`mat3( ${$p.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(i)){case ya:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+q_(i.getShaderSource(e),l)}else return r}function Z_(i,e){let t=Y_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var K_={[Mf]:"Linear",[Sf]:"Reinhard",[Tf]:"Cineon",[Ef]:"ACESFilmic",[Af]:"AgX",[Za]:"Neutral",[wf]:"Custom"};function $_(i,e){let t=K_[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ou=new H;function J_(){Rt.getLuminanceCoefficients(Ou);let i=Ou.x.toFixed(4),e=Ou.y.toFixed(4),t=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function Q_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function eb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function rl(i){return i!==""}function jp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tb=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(i){return i.replace(tb,ib)}var nb=new Map;function ib(i,e){let t=ht[e];if(t===void 0){let n=nb.get(e);if(n!==void 0)t=ht[n],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return id(t)}var sb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(i){return i.replace(sb,rb)}function rb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var ob={[wr]:"SHADOWMAP_TYPE_PCF",[Ro]:"SHADOWMAP_TYPE_VSM"};function ab(i){return ob[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lb={[er]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE_UV"};function cb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":lb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ub={[Rr]:"ENVMAP_MODE_REFRACTION"};function hb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ub[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fb={[bf]:"ENVMAP_BLENDING_MULTIPLY",[mp]:"ENVMAP_BLENDING_MIX",[gp]:"ENVMAP_BLENDING_ADD"};function db(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fb[i.combine]||"ENVMAP_BLENDING_NONE"}function pb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,a=ab(t),c=cb(t),h=hb(t),d=db(t),p=pb(t),g=j_(t),_=Q_(r),S=s.createProgram(),M,y,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rl).join(`
`),y.length>0&&(y+=`
`)):(M=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),y=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?ht.tonemapping_pars_fragment:"",t.toneMapping!==es?$_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Z_("linearToOutputTexel",t.outputColorSpace),J_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rl).join(`
`)),o=id(o),o=jp(o,t),o=Qp(o,t),l=id(l),l=jp(l,t),l=Qp(l,t),o=em(o),l=em(l),t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,M=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",t.glslVersion===Uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let x=u+M+o,f=u+y+l,m=Kp(s,s.VERTEX_SHADER,x),v=Kp(s,s.FRAGMENT_SHADER,f);s.attachShader(S,m),s.attachShader(S,v),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function E(R){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(S)||"",A=s.getShaderInfoLog(m)||"",w=s.getShaderInfoLog(v)||"",L=P.trim(),D=A.trim(),U=w.trim(),V=!0,z=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,m,v);else{let O=Jp(s,m,"vertex"),k=Jp(s,v,"fragment");ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+O+`
`+k)}else L!==""?lt("WebGLProgram: Program Info Log:",L):(D===""||U==="")&&(z=!1);z&&(R.diagnostics={runnable:V,programLog:L,vertexShader:{log:D,prefix:M},fragmentShader:{log:U,prefix:y}})}s.deleteShader(m),s.deleteShader(v),b=new Uo(s,S),T=eb(s,S)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(S,W_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X_++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=m,this.fragmentShader=v,this}var gb=0,sd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rd(e),t.set(e,n)),n}},rd=class{constructor(e){this.id=gb++,this.code=e,this.usedTimes=0}};function vb(i){return i===ir||i===tl||i===nl}function xb(i,e,t,n,s,r){let o=new Ma,l=new sd,a=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,p=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return a.add(b),b===0?"uv":`uv${b}`}function S(b,T,C,R,P,A){let w=R.fog,L=P.geometry,D=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?R.environment:null,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,V=e.get(b.envMap||D,U),z=V&&V.mapping===Ka?V.image.height:null,O=g[b.type];b.precision!==null&&(p=n.getMaxPrecision(b.precision),p!==b.precision&&lt("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let k=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,W=k!==void 0?k.length:0,$=0;L.morphAttributes.position!==void 0&&($=1),L.morphAttributes.normal!==void 0&&($=2),L.morphAttributes.color!==void 0&&($=3);let le,Me,be,K;if(O){let kt=ms[O];le=kt.vertexShader,Me=kt.fragmentShader}else{le=b.vertexShader,Me=b.fragmentShader;let kt=l.getVertexShaderStage(b),Nt=l.getFragmentShaderStage(b);l.update(b,kt,Nt),be=kt.id,K=Nt.id}let j=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ce=P.isInstancedMesh===!0,Ae=P.isBatchedMesh===!0,Pe=!!b.map,We=!!b.matcap,Xe=!!V,we=!!b.aoMap,Ze=!!b.lightMap,te=!!b.bumpMap&&b.wireframe===!1,Te=!!b.normalMap,X=!!b.displacementMap,ae=!!b.emissiveMap,ie=!!b.metalnessMap,ne=!!b.roughnessMap,B=b.anisotropy>0,pe=b.clearcoat>0,ee=b.dispersion>0,N=b.retroreflectivity>0,I=b.iridescence>0,G=b.sheen>0,q=b.transmission>0,Q=B&&!!b.anisotropyMap,ue=pe&&!!b.clearcoatMap,ge=pe&&!!b.clearcoatNormalMap,he=pe&&!!b.clearcoatRoughnessMap,de=I&&!!b.iridescenceMap,Ue=I&&!!b.iridescenceThicknessMap,qe=G&&!!b.sheenColorMap,De=G&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,Fe=!!b.specularColorMap,Ke=!!b.specularIntensityMap,at=q&&!!b.transmissionMap,Z=q&&!!b.thicknessMap,Ie=!!b.gradientMap,me=!!b.alphaMap,Be=b.alphaTest>0,He=!!b.alphaHash,Ee=!!b.extensions,tt=es;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(tt=i.toneMapping);let $e={shaderID:O,shaderType:b.type,shaderName:b.name,vertexShader:le,fragmentShader:Me,defines:b.defines,customVertexShaderID:be,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&P._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&P.instanceColor!==null,instancingMorph:Ce&&P.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Pe,matcap:We,envMap:Xe,envMapMode:Xe&&V.mapping,envMapCubeUVHeight:z,aoMap:we,lightMap:Ze,bumpMap:te,normalMap:Te,displacementMap:X,emissiveMap:ae,normalMapObjectSpace:Te&&b.normalMapType===yp,normalMapTangentSpace:Te&&b.normalMapType===Nu,packedNormalMap:Te&&b.normalMapType===Nu&&vb(b.normalMap.format),metalnessMap:ie,roughnessMap:ne,anisotropy:B,anisotropyMap:Q,clearcoat:pe,clearcoatMap:ue,clearcoatNormalMap:ge,clearcoatRoughnessMap:he,dispersion:ee,retroreflection:N,iridescence:I,iridescenceMap:de,iridescenceThicknessMap:Ue,sheen:G,sheenColorMap:qe,sheenRoughnessMap:De,specularMap:Ne,specularColorMap:Fe,specularIntensityMap:Ke,transmission:q,transmissionMap:at,thicknessMap:Z,gradientMap:Ie,opaque:b.transparent===!1&&b.blending===Co&&b.alphaToCoverage===!1,alphaMap:me,alphaTest:Be,alphaHash:He,combine:b.combine,mapUv:Pe&&_(b.map.channel),aoMapUv:we&&_(b.aoMap.channel),lightMapUv:Ze&&_(b.lightMap.channel),bumpMapUv:te&&_(b.bumpMap.channel),normalMapUv:Te&&_(b.normalMap.channel),displacementMapUv:X&&_(b.displacementMap.channel),emissiveMapUv:ae&&_(b.emissiveMap.channel),metalnessMapUv:ie&&_(b.metalnessMap.channel),roughnessMapUv:ne&&_(b.roughnessMap.channel),anisotropyMapUv:Q&&_(b.anisotropyMap.channel),clearcoatMapUv:ue&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(b.sheenRoughnessMap.channel),specularMapUv:Ne&&_(b.specularMap.channel),specularColorMapUv:Fe&&_(b.specularColorMap.channel),specularIntensityMapUv:Ke&&_(b.specularIntensityMap.channel),transmissionMapUv:at&&_(b.transmissionMap.channel),thicknessMapUv:Z&&_(b.thicknessMap.channel),alphaMapUv:me&&_(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Te||B),vertexNormals:!!L.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Pe||me),fog:!!w,useFog:b.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||L.attributes.normal===void 0&&Te===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:$,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:A.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&Rt.getTransfer(b.map.colorSpace)===Vt,decodeVideoTextureEmissive:ae&&b.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(b.emissiveMap.colorSpace)===Vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Sn,flipSided:b.side===Xn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ee&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&b.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=a.has(1),$e.vertexUv2s=a.has(2),$e.vertexUv3s=a.has(3),a.clear(),$e}function M(b){let T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)T.push(C),T.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(y(T,b),u(T,b),T.push(i.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function y(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numSunLights),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numSunLightShadows),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function u(b,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function x(b){let T=g[b.type],C;if(T){let R=ms[T];C=Pr.clone(R.uniforms)}else C=b.uniforms;return C}function f(b,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new mb(i,T,b,s),c.push(C),h.set(T,C)),C}function m(b){if(--b.usedTimes===0){let T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),h.delete(b.cacheKey),b.destroy()}}function v(b){l.remove(b)}function E(){l.dispose()}return{getParameters:S,getProgramCacheKey:M,getUniforms:x,acquireProgram:f,releaseProgram:m,releaseShaderCache:v,programs:c,dispose:E}}function yb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,a){i.get(o)[l]=a}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function _b(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function im(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(p){let g=0;return p.isInstancedMesh&&(g+=2),p.isSkinnedMesh&&(g+=1),g}function l(p,g,_,S,M,y){let u=i[e];return u===void 0?(u={id:p.id,object:p,geometry:g,material:_,materialVariant:o(p),groupOrder:S,renderOrder:p.renderOrder,z:M,group:y},i[e]=u):(u.id=p.id,u.object=p,u.geometry=g,u.material=_,u.materialVariant=o(p),u.groupOrder=S,u.renderOrder=p.renderOrder,u.z=M,u.group=y),e++,u}function a(p,g,_,S,M,y,u){u.reversedDepth===!0&&(M=-M);let x=l(p,g,_,S,M,y);_.transmission>0?n.push(x):_.transparent===!0?s.push(x):t.push(x)}function c(p,g,_,S,M,y){let u=l(p,g,_,S,M,y);_.transmission>0?n.unshift(u):_.transparent===!0?s.unshift(u):t.unshift(u)}function h(p,g){t.length>1&&t.sort(p||_b),n.length>1&&n.sort(g||nm),s.length>1&&s.sort(g||nm)}function d(){for(let p=e,g=i.length;p<g;p++){let _=i[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:d,sort:h}}function bb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new im,i.set(n,[o])):s>=r.length?(o=new im,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new _e};break;case"SpotLight":t={position:new H,direction:new H,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Sb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Tb=0;function Eb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wb(i){let e=new Mb,t=Sb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new et,o=new et;function l(c){let h=0,d=0,p=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let g=0,_=0,S=0,M=0,y=0,u=0,x=0,f=0,m=0,v=0,E=0,b=0,T=0,C=0;c.sort(Eb);for(let P=0,A=c.length;P<A;P++){let w=c[P],L=w.color,D=w.intensity,U=w.distance,V=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===ir?V=w.shadow.map.texture:V=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=L.r*D,d+=L.g*D,p+=L.b*D;else if(w.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(w.sh.coefficients[z],D);C++}else if(w.isSunLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let O=w.shadow,k=t.get(w);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[_]=k,n.sunShadowMap[_]=V;let W=O.getViewportCount();for(let $=0;$<W;$++)n.sunShadowMatrix[S+$]=O.getMatrix($),n.sunShadowCascade[S+$]=O._cascadeData[$];S+=W,_++}n.sun[g]=z,g++}else if(w.isDirectionalLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let O=w.shadow,k=t.get(w);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.directionalShadow[M]=k,n.directionalShadowMap[M]=V,n.directionalShadowMatrix[M]=w.shadow.matrix,m++}n.directional[M]=z,M++}else if(w.isSpotLight){let z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(L).multiplyScalar(D),z.distance=U,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,n.spot[u]=z;let O=w.shadow;if(w.map&&(n.spotLightMap[b]=w.map,b++,O.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[u]=O.matrix,w.castShadow){let k=t.get(w);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.spotShadow[u]=k,n.spotShadowMap[u]=V,E++}u++}else if(w.isRectAreaLight){let z=e.get(w);z.color.copy(L).multiplyScalar(D),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),n.rectArea[x]=z,x++}else if(w.isPointLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){let O=w.shadow,k=t.get(w);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,k.shadowCameraNear=O.camera.near,k.shadowCameraFar=O.camera.far,n.pointShadow[y]=k,n.pointShadowMap[y]=V,n.pointShadowMatrix[y]=w.shadow.matrix,v++}n.point[y]=z,y++}else if(w.isHemisphereLight){let z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(D),z.groundColor.copy(w.groundColor).multiplyScalar(D),n.hemi[f]=z,f++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let R=n.hash;(R.sunLength!==g||R.directionalLength!==M||R.pointLength!==y||R.spotLength!==u||R.rectAreaLength!==x||R.hemiLength!==f||R.numSunShadows!==_||R.numDirectionalShadows!==m||R.numPointShadows!==v||R.numSpotShadows!==E||R.numSpotMaps!==b||R.numLightProbes!==C)&&(n.sun.length=g,n.directional.length=M,n.spot.length=u,n.rectArea.length=x,n.point.length=y,n.hemi.length=f,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.directionalShadowMatrix.length=m,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,R.sunLength=g,R.directionalLength=M,R.pointLength=y,R.spotLength=u,R.rectAreaLength=x,R.hemiLength=f,R.numSunShadows=_,R.numDirectionalShadows=m,R.numPointShadows=v,R.numSpotShadows=E,R.numSpotMaps=b,R.numLightProbes=C,n.version=Tb++)}function a(c,h){let d=0,p=0,g=0,_=0,S=0,M=0,y=h.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){let f=c[u];if(f.isSunLight){let m=n.sun[d];m.direction.setFromMatrixPosition(f.matrixWorld),m.direction.transformDirection(y),d++}else if(f.isDirectionalLight){let m=n.directional[p];m.direction.setFromMatrixPosition(f.matrixWorld),s.setFromMatrixPosition(f.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(y),p++}else if(f.isSpotLight){let m=n.spot[_];m.position.setFromMatrixPosition(f.matrixWorld),m.position.applyMatrix4(y),m.direction.setFromMatrixPosition(f.matrixWorld),s.setFromMatrixPosition(f.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(y),_++}else if(f.isRectAreaLight){let m=n.rectArea[S];m.position.setFromMatrixPosition(f.matrixWorld),m.position.applyMatrix4(y),o.identity(),r.copy(f.matrixWorld),r.premultiply(y),o.extractRotation(r),m.halfWidth.set(f.width*.5,0,0),m.halfHeight.set(0,f.height*.5,0),m.halfWidth.applyMatrix4(o),m.halfHeight.applyMatrix4(o),S++}else if(f.isPointLight){let m=n.point[g];m.position.setFromMatrixPosition(f.matrixWorld),m.position.applyMatrix4(y),g++}else if(f.isHemisphereLight){let m=n.hemi[M];m.direction.setFromMatrixPosition(f.matrixWorld),m.direction.transformDirection(y),M++}}}return{setup:l,setupView:a,state:n}}function sm(i){let e=new wb(i),t=[],n=[],s=[];function r(p){d.camera=p,t.length=0,n.length=0,s.length=0}function o(p){t.push(p)}function l(p){n.push(p)}function a(p){s.push(p)}function c(){e.setup(t)}function h(p){e.setupView(t,p)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:a}}function Ab(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new sm(i),e.set(s,[l])):r>=o.length?(l=new sm(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var Rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cb=`uniform sampler2D shadow_pass;
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
}`,Pb=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Ib=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],rm=new et,sl=new H,jf=new H;function Lb(i,e,t){let n=new _o,s=new Le,r=new Le,o=new dt,l=new Er,a=new Uc,c={},h=t.maxTextureSize,d={[ds]:Xn,[Xn]:ds,[Sn]:Sn},p=new ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Rb,fragmentShader:Cb}),g=p.clone();g.defines.HORIZONTAL_PASS=1;let _=new mt;_.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ct(_,p),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let y=this.type;this.render=function(v,E,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||v.length===0)return;this.type===$0&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ri),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let A=y!==this.type;A&&E.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(L=>L.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,L=v.length;w<L;w++){let D=v[w],U=D.shadow;if(U===void 0){lt("WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let V=U.getFrameExtents();s.multiply(V),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,U.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=z,U.map===null||A===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ro){if(D.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Yt(s.x,s.y,{format:ir,type:Cn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),U.map.texture.name=D.name+".shadowMap",U.map.depthTexture=new Ks(s.x,s.y,Ui),U.map.depthTexture.name=D.name+".shadowMapDepth",U.map.depthTexture.format=cs,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=An,U.map.depthTexture.magFilter=An}else D.isPointLight?(U.map=new ku(s.x),U.map.depthTexture=new wc(s.x,ts)):(U.map=new Yt(s.x,s.y),U.map.depthTexture=new Ks(s.x,s.y,ts)),U.map.depthTexture.name=D.name+".shadowMap",U.map.depthTexture.format=cs,this.type===wr?(U.map.depthTexture.compareFunction=z?Fu:Uu,U.map.depthTexture.minFilter=Bt,U.map.depthTexture.magFilter=Bt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=An,U.map.depthTexture.magFilter=An);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let O=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();D.isPointLight!==!0&&U.updateMatrices(D,b);for(let k=0;k<O;k++){let W=U.getCamera(k);if(D.isPointLight){let $=U.camera,le=U.matrix,Me=D.distance||$.far;Me!==$.far&&($.far=Me,$.updateProjectionMatrix()),sl.setFromMatrixPosition(D.matrixWorld),$.position.copy(sl),jf.copy($.position),jf.add(Pb[k]),$.up.copy(Ib[k]),$.lookAt(jf),$.updateMatrixWorld(),le.makeTranslation(-sl.x,-sl.y,-sl.z),rm.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),U._frustum.setFromProjectionMatrix(rm,$.coordinateSystem,$.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,k),i.clear();else{k===0&&(i.setRenderTarget(U.map),i.clear());let $=U.getViewport(k);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),P.viewport(o)}n=U.getFrustum(k),f(E,b,W,D,this.type)}U.isPointLightShadow!==!0&&this.type===Ro&&u(U,b),U.needsUpdate=!1}y=this.type,M.needsUpdate=!1,i.setRenderTarget(T,C,R)};function u(v,E){let b=e.update(S);p.defines.VSM_SAMPLES!==v.blurSamples&&(p.defines.VSM_SAMPLES=v.blurSamples,g.defines.VSM_SAMPLES=v.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),v.mapPass===null?v.mapPass=new Yt(s.x,s.y,{format:ir,type:Cn}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),p.uniforms.shadow_pass.value=v.map.depthTexture,p.uniforms.resolution.value.set(v.map.width,v.map.height),p.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(E,null,b,p,S,null),g.uniforms.shadow_pass.value=v.mapPass.texture,g.uniforms.resolution.value.set(v.map.width,v.map.height),g.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(E,null,b,g,S,null)}function x(v,E,b,T){let C=null,R=b.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(R!==void 0)C=R;else if(C=b.isPointLight===!0?a:l,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=C.uuid,A=E.uuid,w=c[P];w===void 0&&(w={},c[P]=w);let L=w[A];L===void 0&&(L=C.clone(),w[A]=L,E.addEventListener("dispose",m)),C=L}if(C.visible=E.visible,C.wireframe=E.wireframe,T===Ro?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let P=i.properties.get(C);P.light=b}return C}function f(v,E,b,T,C){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===Ro)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,v.matrixWorld);let A=e.update(v),w=v.material;if(Array.isArray(w)){let L=A.groups;for(let D=0,U=L.length;D<U;D++){let V=L[D],z=w[V.materialIndex];if(z&&z.visible){let O=x(v,z,T,C);v.onBeforeShadow(i,v,E,b,A,O,V),i.renderBufferDirect(b,null,A,O,v,V),v.onAfterShadow(i,v,E,b,A,O,V)}}}else if(w.visible){let L=x(v,w,T,C);v.onBeforeShadow(i,v,E,b,A,L,null),i.renderBufferDirect(b,null,A,L,v,null),v.onAfterShadow(i,v,E,b,A,L,null)}}let P=v.children;for(let A=0,w=P.length;A<w;A++)f(P[A],E,b,T,C)}function m(v){v.target.removeEventListener("dispose",m);for(let b in c){let T=c[b],C=v.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Db(i,e){function t(){let Z=!1,Ie=new dt,me=null,Be=new dt(0,0,0,0);return{setMask:function(He){me!==He&&!Z&&(i.colorMask(He,He,He,He),me=He)},setLocked:function(He){Z=He},setClear:function(He,Ee,tt,$e,kt){kt===!0&&(He*=$e,Ee*=$e,tt*=$e),Ie.set(He,Ee,tt,$e),Be.equals(Ie)===!1&&(i.clearColor(He,Ee,tt,$e),Be.copy(Ie))},reset:function(){Z=!1,me=null,Be.set(-1,0,0,0)}}}function n(){let Z=!1,Ie=!1,me=null,Be=null,He=null;return{setReversed:function(Ee){if(Ie!==Ee){let tt=e.get("EXT_clip_control");Ee?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Ie=Ee;let $e=He;He=null,this.setClear($e)}},getReversed:function(){return Ie},setTest:function(Ee){Ee?j(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Ee){me!==Ee&&!Z&&(i.depthMask(Ee),me=Ee)},setFunc:function(Ee){if(Ie&&(Ee=Ip[Ee]),Be!==Ee){switch(Ee){case hc:i.depthFunc(i.NEVER);break;case fc:i.depthFunc(i.ALWAYS);break;case dc:i.depthFunc(i.LESS);break;case fo:i.depthFunc(i.LEQUAL);break;case pc:i.depthFunc(i.EQUAL);break;case mc:i.depthFunc(i.GEQUAL);break;case gc:i.depthFunc(i.GREATER);break;case vc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Be=Ee}},setLocked:function(Ee){Z=Ee},setClear:function(Ee){He!==Ee&&(He=Ee,Ie&&(Ee=1-Ee),i.clearDepth(Ee))},reset:function(){Z=!1,me=null,Be=null,He=null,Ie=!1}}}function s(){let Z=!1,Ie=null,me=null,Be=null,He=null,Ee=null,tt=null,$e=null,kt=null;return{setTest:function(Nt){Z||(Nt?j(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Nt){Ie!==Nt&&!Z&&(i.stencilMask(Nt),Ie=Nt)},setFunc:function(Nt,se,dn){(me!==Nt||Be!==se||He!==dn)&&(i.stencilFunc(Nt,se,dn),me=Nt,Be=se,He=dn)},setOp:function(Nt,se,dn){(Ee!==Nt||tt!==se||$e!==dn)&&(i.stencilOp(Nt,se,dn),Ee=Nt,tt=se,$e=dn)},setLocked:function(Nt){Z=Nt},setClear:function(Nt){kt!==Nt&&(i.clearStencil(Nt),kt=Nt)},reset:function(){Z=!1,Ie=null,me=null,Be=null,He=null,Ee=null,tt=null,$e=null,kt=null}}}let r=new t,o=new n,l=new s,a=new WeakMap,c=new WeakMap,h={},d={},p={},g=new WeakMap,_=[],S=null,M=!1,y=null,u=null,x=null,f=null,m=null,v=null,E=null,b=new _e(0,0,0),T=0,C=!1,R=null,P=null,A=null,w=null,L=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,V=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=V>=2);let O=null,k={},W=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),le=new dt().fromArray(W),Me=new dt().fromArray($);function be(Z,Ie,me,Be){let He=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(Z,Ee),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<me;tt++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,Be,0,i.RGBA,i.UNSIGNED_BYTE,He):i.texImage2D(Ie+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,He);return Ee}let K={};K[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),j(i.DEPTH_TEST),o.setFunc(fo),te(!1),Te(gf),j(i.CULL_FACE),we(ri);function j(Z){h[Z]!==!0&&(i.enable(Z),h[Z]=!0)}function xe(Z){h[Z]!==!1&&(i.disable(Z),h[Z]=!1)}function Ce(Z,Ie){return p[Z]!==Ie?(i.bindFramebuffer(Z,Ie),p[Z]=Ie,Z===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ie),Z===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ae(Z,Ie){let me=_,Be=!1;if(Z){me=g.get(Ie),me===void 0&&(me=[],g.set(Ie,me));let He=Z.textures;if(me.length!==He.length||me[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,tt=He.length;Ee<tt;Ee++)me[Ee]=i.COLOR_ATTACHMENT0+Ee;me.length=He.length,Be=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Be=!0);Be&&i.drawBuffers(me)}function Pe(Z){return S!==Z?(i.useProgram(Z),S=Z,!0):!1}let We={[Ar]:i.FUNC_ADD,[j0]:i.FUNC_SUBTRACT,[Q0]:i.FUNC_REVERSE_SUBTRACT};We[ep]=i.MIN,We[tp]=i.MAX;let Xe={[np]:i.ZERO,[ip]:i.ONE,[sp]:i.SRC_COLOR,[yf]:i.SRC_ALPHA,[up]:i.SRC_ALPHA_SATURATE,[lp]:i.DST_COLOR,[op]:i.DST_ALPHA,[rp]:i.ONE_MINUS_SRC_COLOR,[_f]:i.ONE_MINUS_SRC_ALPHA,[cp]:i.ONE_MINUS_DST_COLOR,[ap]:i.ONE_MINUS_DST_ALPHA,[hp]:i.CONSTANT_COLOR,[fp]:i.ONE_MINUS_CONSTANT_COLOR,[dp]:i.CONSTANT_ALPHA,[pp]:i.ONE_MINUS_CONSTANT_ALPHA};function we(Z,Ie,me,Be,He,Ee,tt,$e,kt,Nt){if(Z===ri){M===!0&&(xe(i.BLEND),M=!1);return}if(M===!1&&(j(i.BLEND),M=!0),Z!==J0){if(Z!==y||Nt!==C){if((u!==Ar||m!==Ar)&&(i.blendEquation(i.FUNC_ADD),u=Ar,m=Ar),Nt)switch(Z){case Co:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFunc(i.ONE,i.ONE);break;case vf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Co:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vf:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xf:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",Z);break}x=null,f=null,v=null,E=null,b.set(0,0,0),T=0,y=Z,C=Nt}return}He=He||Ie,Ee=Ee||me,tt=tt||Be,(Ie!==u||He!==m)&&(i.blendEquationSeparate(We[Ie],We[He]),u=Ie,m=He),(me!==x||Be!==f||Ee!==v||tt!==E)&&(i.blendFuncSeparate(Xe[me],Xe[Be],Xe[Ee],Xe[tt]),x=me,f=Be,v=Ee,E=tt),($e.equals(b)===!1||kt!==T)&&(i.blendColor($e.r,$e.g,$e.b,kt),b.copy($e),T=kt),y=Z,C=!1}function Ze(Z,Ie){Z.side===Sn?xe(i.CULL_FACE):j(i.CULL_FACE);let me=Z.side===Xn;Ie&&(me=!me),te(me),Z.blending===Co&&Z.transparent===!1?we(ri):we(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let Be=Z.stencilWrite;l.setTest(Be),Be&&(l.setMask(Z.stencilWriteMask),l.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),l.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ae(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(Z){R!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),R=Z)}function Te(Z){Z!==Z0?(j(i.CULL_FACE),Z!==P&&(Z===gf?i.cullFace(i.BACK):Z===K0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),P=Z}function X(Z){Z!==A&&(U&&i.lineWidth(Z),A=Z)}function ae(Z,Ie,me){Z?(j(i.POLYGON_OFFSET_FILL),(w!==Ie||L!==me)&&(w=Ie,L=me,o.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,me))):xe(i.POLYGON_OFFSET_FILL)}function ie(Z){Z?j(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function ne(Z){Z===void 0&&(Z=i.TEXTURE0+D-1),O!==Z&&(i.activeTexture(Z),O=Z)}function B(Z,Ie,me){me===void 0&&(O===null?me=i.TEXTURE0+D-1:me=O);let Be=k[me];Be===void 0&&(Be={type:void 0,texture:void 0},k[me]=Be),(Be.type!==Z||Be.texture!==Ie)&&(O!==me&&(i.activeTexture(me),O=me),i.bindTexture(Z,Ie||K[Z]),Be.type=Z,Be.texture=Ie)}function pe(){let Z=k[O];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(Z){ft("WebGLState:",Z)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(Z){ft("WebGLState:",Z)}}function I(){try{i.texSubImage2D(...arguments)}catch(Z){ft("WebGLState:",Z)}}function G(){try{i.texSubImage3D(...arguments)}catch(Z){ft("WebGLState:",Z)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){ft("WebGLState:",Z)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){ft("WebGLState:",Z)}}function ue(){try{i.texStorage2D(...arguments)}catch(Z){ft("WebGLState:",Z)}}function ge(){try{i.texStorage3D(...arguments)}catch(Z){ft("WebGLState:",Z)}}function he(){try{i.texImage2D(...arguments)}catch(Z){ft("WebGLState:",Z)}}function de(){try{i.texImage3D(...arguments)}catch(Z){ft("WebGLState:",Z)}}function Ue(Z){return d[Z]!==void 0?d[Z]:i.getParameter(Z)}function qe(Z,Ie){d[Z]!==Ie&&(i.pixelStorei(Z,Ie),d[Z]=Ie)}function De(Z){le.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),le.copy(Z))}function Ne(Z){Me.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),Me.copy(Z))}function Fe(Z,Ie){let me=c.get(Ie);me===void 0&&(me=new WeakMap,c.set(Ie,me));let Be=me.get(Z);Be===void 0&&(Be=i.getUniformBlockIndex(Ie,Z.name),me.set(Z,Be))}function Ke(Z,Ie){let Be=c.get(Ie).get(Z);a.get(Ie)!==Be&&(i.uniformBlockBinding(Ie,Be,Z.__bindingPointIndex),a.set(Ie,Be))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},O=null,k={},p={},g=new WeakMap,_=[],S=null,M=!1,y=null,u=null,x=null,f=null,m=null,v=null,E=null,b=new _e(0,0,0),T=0,C=!1,R=null,P=null,A=null,w=null,L=null,le.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:j,disable:xe,bindFramebuffer:Ce,drawBuffers:Ae,useProgram:Pe,setBlending:we,setMaterial:Ze,setFlipSided:te,setCullFace:Te,setLineWidth:X,setPolygonOffset:ae,setScissorTest:ie,activeTexture:ne,bindTexture:B,unbindTexture:pe,compressedTexImage2D:ee,compressedTexImage3D:N,texImage2D:he,texImage3D:de,pixelStorei:qe,getParameter:Ue,updateUBOMapping:Fe,uniformBlockBinding:Ke,texStorage2D:ue,texStorage3D:ge,texSubImage2D:I,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:De,viewport:Ne,reset:at}}function Nb(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,h=new WeakMap,d=new Set,p,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,I){return _?new OffscreenCanvas(N,I):mo("canvas")}function M(N,I,G){let q=1,Q=ee(N);if((Q.width>G||Q.height>G)&&(q=G/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ue=Math.floor(q*Q.width),ge=Math.floor(q*Q.height);p===void 0&&(p=S(ue,ge));let he=I?S(ue,ge):p;return he.width=ue,he.height=ge,he.getContext("2d").drawImage(N,0,0,ue,ge),lt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+ge+")."),he}else return"data"in N&&lt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),N;return N}function y(N){return N.generateMipmaps}function u(N){i.generateMipmap(N)}function x(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function f(N,I,G,q,Q,ue=!1){if(N!==null){if(i[N]!==void 0)return i[N];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ge;q&&(ge=e.get("EXT_texture_norm16"),ge||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=I;if(I===i.RED&&(G===i.FLOAT&&(he=i.R32F),G===i.HALF_FLOAT&&(he=i.R16F),G===i.UNSIGNED_BYTE&&(he=i.R8),G===i.UNSIGNED_SHORT&&ge&&(he=ge.R16_EXT),G===i.SHORT&&ge&&(he=ge.R16_SNORM_EXT)),I===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(he=i.R8UI),G===i.UNSIGNED_SHORT&&(he=i.R16UI),G===i.UNSIGNED_INT&&(he=i.R32UI),G===i.BYTE&&(he=i.R8I),G===i.SHORT&&(he=i.R16I),G===i.INT&&(he=i.R32I)),I===i.RG&&(G===i.FLOAT&&(he=i.RG32F),G===i.HALF_FLOAT&&(he=i.RG16F),G===i.UNSIGNED_BYTE&&(he=i.RG8),G===i.UNSIGNED_SHORT&&ge&&(he=ge.RG16_EXT),G===i.SHORT&&ge&&(he=ge.RG16_SNORM_EXT)),I===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(he=i.RG8UI),G===i.UNSIGNED_SHORT&&(he=i.RG16UI),G===i.UNSIGNED_INT&&(he=i.RG32UI),G===i.BYTE&&(he=i.RG8I),G===i.SHORT&&(he=i.RG16I),G===i.INT&&(he=i.RG32I)),I===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(he=i.RGB8UI),G===i.UNSIGNED_SHORT&&(he=i.RGB16UI),G===i.UNSIGNED_INT&&(he=i.RGB32UI),G===i.BYTE&&(he=i.RGB8I),G===i.SHORT&&(he=i.RGB16I),G===i.INT&&(he=i.RGB32I)),I===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),G===i.UNSIGNED_INT&&(he=i.RGBA32UI),G===i.BYTE&&(he=i.RGBA8I),G===i.SHORT&&(he=i.RGBA16I),G===i.INT&&(he=i.RGBA32I)),I===i.RGB&&(G===i.UNSIGNED_SHORT&&ge&&(he=ge.RGB16_EXT),G===i.SHORT&&ge&&(he=ge.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),I===i.RGBA){let de=ue?ya:Rt.getTransfer(Q);G===i.FLOAT&&(he=i.RGBA32F),G===i.HALF_FLOAT&&(he=i.RGBA16F),G===i.UNSIGNED_BYTE&&(he=de===Vt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ge&&(he=ge.RGBA16_EXT),G===i.SHORT&&ge&&(he=ge.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function m(N,I){let G;return N?I===null||I===ts||I===Io?G=i.DEPTH24_STENCIL8:I===Ui?G=i.DEPTH32F_STENCIL8:I===Po&&(G=i.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===ts||I===Io?G=i.DEPTH_COMPONENT24:I===Ui?G=i.DEPTH_COMPONENT32F:I===Po&&(G=i.DEPTH_COMPONENT16),G}function v(N,I){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==An&&N.minFilter!==Bt?Math.log2(Math.max(I.width,I.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?I.mipmaps.length:1}function E(N){let I=N.target;I.removeEventListener("dispose",E),T(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function b(N){let I=N.target;I.removeEventListener("dispose",b),R(I)}function T(N){let I=n.get(N);if(I.__webglInit===void 0)return;let G=N.source,q=g.get(G);if(q){let Q=q[I.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(N),Object.keys(q).length===0&&g.delete(G)}n.remove(N)}function C(N){let I=n.get(N);i.deleteTexture(I.__webglTexture);let G=N.source,q=g.get(G);delete q[I.__cacheKey],o.memory.textures--}function R(N){let I=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(I.__webglFramebuffer[q]))for(let Q=0;Q<I.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(I.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(I.__webglFramebuffer[q]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[q])}else{if(Array.isArray(I.__webglFramebuffer))for(let q=0;q<I.__webglFramebuffer.length;q++)i.deleteFramebuffer(I.__webglFramebuffer[q]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let q=0;q<I.__webglColorRenderbuffer.length;q++)I.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[q]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let G=N.textures;for(let q=0,Q=G.length;q<Q;q++){let ue=n.get(G[q]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(G[q])}n.remove(N)}let P=0;function A(){P=0}function w(){return P}function L(N){P=N}function D(){let N=P;return N>=s.maxTextures&&lt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,N}function U(N){let I=[];return I.push(N.wrapS),I.push(N.wrapT),I.push(N.wrapR||0),I.push(N.magFilter),I.push(N.minFilter),I.push(N.anisotropy),I.push(N.internalFormat),I.push(N.format),I.push(N.type),I.push(N.generateMipmaps),I.push(N.premultiplyAlpha),I.push(N.flipY),I.push(N.unpackAlignment),I.push(N.colorSpace),I.join()}function V(N,I){let G=n.get(N);if(N.isVideoTexture&&B(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){let q=N.image;if(q===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(G,N,I);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+I)}function z(N,I){let G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){xe(G,N,I);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+I)}function O(N,I){let G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){xe(G,N,I);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+I)}function k(N,I){let G=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){Ce(G,N,I);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+I)}let W={[Is]:i.REPEAT,[ls]:i.CLAMP_TO_EDGE,[xc]:i.MIRRORED_REPEAT},$={[An]:i.NEAREST,[vp]:i.NEAREST_MIPMAP_NEAREST,[$a]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[Jc]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},le={[bp]:i.NEVER,[wp]:i.ALWAYS,[Mp]:i.LESS,[Uu]:i.LEQUAL,[Sp]:i.EQUAL,[Fu]:i.GEQUAL,[Tp]:i.GREATER,[Ep]:i.NOTEQUAL};function Me(N,I){if(I.type===Ui&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===Bt||I.magFilter===Jc||I.magFilter===$a||I.magFilter===Ln||I.minFilter===Bt||I.minFilter===Jc||I.minFilter===$a||I.minFilter===Ln)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,W[I.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,W[I.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,W[I.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,$[I.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,$[I.minFilter]),I.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,le[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===An||I.minFilter!==$a&&I.minFilter!==Ln||I.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function be(N,I){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,I.addEventListener("dispose",E));let q=I.source,Q=g.get(q);Q===void 0&&(Q={},g.set(q,Q));let ue=U(I);if(ue!==N.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[ue].usedTimes++;let ge=Q[N.__cacheKey];ge!==void 0&&(Q[N.__cacheKey].usedTimes--,ge.usedTimes===0&&C(I)),N.__cacheKey=ue,N.__webglTexture=Q[ue].texture}return G}function K(N,I,G){return Math.floor(Math.floor(N/G)/I)}function j(N,I,G,q){let ue=N.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,G,q,I.data);else{ue.sort((qe,De)=>qe.start-De.start);let ge=0;for(let qe=1;qe<ue.length;qe++){let De=ue[ge],Ne=ue[qe],Fe=De.start+De.count,Ke=K(Ne.start,I.width,4),at=K(De.start,I.width,4);Ne.start<=Fe+1&&Ke===at&&K(Ne.start+Ne.count-1,I.width,4)===Ke?De.count=Math.max(De.count,Ne.start+Ne.count-De.start):(++ge,ue[ge]=Ne)}ue.length=ge+1;let he=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),Ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,I.width);for(let qe=0,De=ue.length;qe<De;qe++){let Ne=ue[qe],Fe=Math.floor(Ne.start/4),Ke=Math.ceil(Ne.count/4),at=Fe%I.width,Z=Math.floor(Fe/I.width),Ie=Ke,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,at,Z,Ie,me,G,q,I.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,he),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ue)}}function xe(N,I,G){let q=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(q=i.TEXTURE_3D);let Q=be(N,I),ue=I.source;t.bindTexture(q,N.__webglTexture,i.TEXTURE0+G);let ge=n.get(ue);if(ue.version!==ge.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let me=Rt.getPrimaries(Rt.workingColorSpace),Be=I.colorSpace===oi?null:Rt.getPrimaries(I.colorSpace),He=I.colorSpace===oi||me===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment);let de=M(I.image,!1,s.maxTextureSize);de=pe(I,de);let Ue=r.convert(I.format,I.colorSpace),qe=r.convert(I.type),De=f(I.internalFormat,Ue,qe,I.normalized,I.colorSpace,I.isVideoTexture);Me(q,I);let Ne,Fe=I.mipmaps,Ke=I.isVideoTexture!==!0,at=ge.__version===void 0||Q===!0,Z=ue.dataReady,Ie=v(I,de);if(I.isDepthTexture)De=m(I.format===tr,I.type),at&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,De,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,De,de.width,de.height,0,Ue,qe,null));else if(I.isDataTexture)if(Fe.length>0){Ke&&at&&t.texStorage2D(i.TEXTURE_2D,Ie,De,Fe[0].width,Fe[0].height);for(let me=0,Be=Fe.length;me<Be;me++)Ne=Fe[me],Ke?Z&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Ue,qe,Ne.data):t.texImage2D(i.TEXTURE_2D,me,De,Ne.width,Ne.height,0,Ue,qe,Ne.data);I.generateMipmaps=!1}else Ke?(at&&t.texStorage2D(i.TEXTURE_2D,Ie,De,de.width,de.height),Z&&j(I,de,Ue,qe)):t.texImage2D(i.TEXTURE_2D,0,De,de.width,de.height,0,Ue,qe,de.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Ke&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,De,Fe[0].width,Fe[0].height,de.depth);for(let me=0,Be=Fe.length;me<Be;me++)if(Ne=Fe[me],I.format!==ei)if(Ue!==null)if(Ke){if(Z)if(I.layerUpdates.size>0){let He=Hf(Ne.width,Ne.height,I.format,I.type);for(let Ee of I.layerUpdates){let tt=Ne.data.subarray(Ee*He/Ne.data.BYTES_PER_ELEMENT,(Ee+1)*He/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Ee,Ne.width,Ne.height,1,Ue,tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ne.width,Ne.height,de.depth,Ue,Ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,De,Ne.width,Ne.height,de.depth,0,Ne.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ne.width,Ne.height,de.depth,Ue,qe,Ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,De,Ne.width,Ne.height,de.depth,0,Ue,qe,Ne.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{Ke&&at&&t.texStorage2D(i.TEXTURE_2D,Ie,De,Fe[0].width,Fe[0].height);for(let me=0,Be=Fe.length;me<Be;me++)Ne=Fe[me],I.format!==ei?Ue!==null?Ke?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Ue,Ne.data):t.compressedTexImage2D(i.TEXTURE_2D,me,De,Ne.width,Ne.height,0,Ne.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Z&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Ue,qe,Ne.data):t.texImage2D(i.TEXTURE_2D,me,De,Ne.width,Ne.height,0,Ue,qe,Ne.data)}else if(I.isDataArrayTexture)if(Ke){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,De,de.width,de.height,de.depth),Z)if(I.layerUpdates.size>0){let me=Hf(de.width,de.height,I.format,I.type);for(let Be of I.layerUpdates){let He=de.data.subarray(Be*me/de.data.BYTES_PER_ELEMENT,(Be+1)*me/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,de.width,de.height,1,Ue,qe,He)}I.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ue,qe,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,de.width,de.height,de.depth,0,Ue,qe,de.data);else if(I.isData3DTexture)Ke?(at&&t.texStorage3D(i.TEXTURE_3D,Ie,De,de.width,de.height,de.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ue,qe,de.data)):t.texImage3D(i.TEXTURE_3D,0,De,de.width,de.height,de.depth,0,Ue,qe,de.data);else if(I.isFramebufferTexture){if(at)if(Ke)t.texStorage2D(i.TEXTURE_2D,Ie,De,de.width,de.height);else{let me=de.width,Be=de.height;for(let He=0;He<Ie;He++)t.texImage2D(i.TEXTURE_2D,He,De,me,Be,0,Ue,qe,null),me>>=1,Be>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),de.parentNode!==me){me.appendChild(de),d.add(I),me.onpaint=Be=>{let He=Be.changedElements;for(let Ee of d)He.includes(Ee.image)&&(Ee.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let He=i.RGBA,Ee=i.RGBA,tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,He,Ee,tt,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ke&&at){let me=ee(Fe[0]);t.texStorage2D(i.TEXTURE_2D,Ie,De,me.width,me.height)}for(let me=0,Be=Fe.length;me<Be;me++)Ne=Fe[me],Ke?Z&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ue,qe,Ne):t.texImage2D(i.TEXTURE_2D,me,De,Ue,qe,Ne);I.generateMipmaps=!1}else if(Ke){if(at){let me=ee(de);t.texStorage2D(i.TEXTURE_2D,Ie,De,me.width,me.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ue,qe,de)}else t.texImage2D(i.TEXTURE_2D,0,De,Ue,qe,de);y(I)&&u(q),ge.__version=ue.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function Ce(N,I,G){if(I.image.length!==6)return;let q=be(N,I),Q=I.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+G);let ue=n.get(Q);if(Q.version!==ue.__version||q===!0){t.activeTexture(i.TEXTURE0+G);let ge=Rt.getPrimaries(Rt.workingColorSpace),he=I.colorSpace===oi?null:Rt.getPrimaries(I.colorSpace),de=I.colorSpace===oi||ge===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ue=I.isCompressedTexture||I.image[0].isCompressedTexture,qe=I.image[0]&&I.image[0].isDataTexture,De=[];for(let Ee=0;Ee<6;Ee++)!Ue&&!qe?De[Ee]=M(I.image[Ee],!0,s.maxCubemapSize):De[Ee]=qe?I.image[Ee].image:I.image[Ee],De[Ee]=pe(I,De[Ee]);let Ne=De[0],Fe=r.convert(I.format,I.colorSpace),Ke=r.convert(I.type),at=f(I.internalFormat,Fe,Ke,I.normalized,I.colorSpace),Z=I.isVideoTexture!==!0,Ie=ue.__version===void 0||q===!0,me=Q.dataReady,Be=v(I,Ne);Me(i.TEXTURE_CUBE_MAP,I);let He;if(Ue){Z&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,at,Ne.width,Ne.height);for(let Ee=0;Ee<6;Ee++){He=De[Ee].mipmaps;for(let tt=0;tt<He.length;tt++){let $e=He[tt];I.format!==ei?Fe!==null?Z?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,tt,0,0,$e.width,$e.height,Fe,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,tt,at,$e.width,$e.height,0,$e.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,tt,0,0,$e.width,$e.height,Fe,Ke,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,tt,at,$e.width,$e.height,0,Fe,Ke,$e.data)}}}else{if(He=I.mipmaps,Z&&Ie){He.length>0&&Be++;let Ee=ee(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,at,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(qe){Z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,De[Ee].width,De[Ee].height,Fe,Ke,De[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,De[Ee].width,De[Ee].height,0,Fe,Ke,De[Ee].data);for(let tt=0;tt<He.length;tt++){let kt=He[tt].image[Ee].image;Z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,tt+1,0,0,kt.width,kt.height,Fe,Ke,kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,tt+1,at,kt.width,kt.height,0,Fe,Ke,kt.data)}}else{Z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Fe,Ke,De[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Fe,Ke,De[Ee]);for(let tt=0;tt<He.length;tt++){let $e=He[tt];Z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,tt+1,0,0,Fe,Ke,$e.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,tt+1,at,Fe,Ke,$e.image[Ee])}}}y(I)&&u(i.TEXTURE_CUBE_MAP),ue.__version=Q.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function Ae(N,I,G,q,Q,ue){let ge=r.convert(G.format,G.colorSpace),he=r.convert(G.type),de=f(G.internalFormat,ge,he,G.normalized,G.colorSpace),Ue=n.get(I),qe=n.get(G);if(qe.__renderTarget=I,!Ue.__hasExternalTextures){let De=Math.max(1,I.width>>ue),Ne=Math.max(1,I.height>>ue);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ue,de,De,Ne,I.depth,0,ge,he,null):t.texImage2D(Q,ue,de,De,Ne,0,ge,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),ne(I)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,qe.__webglTexture,0,ie(I)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,qe.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(N,I,G){if(i.bindRenderbuffer(i.RENDERBUFFER,N),I.depthBuffer){let q=I.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ue=m(I.stencilBuffer,Q),ge=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ne(I)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(I),ue,I.width,I.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(I),ue,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,ue,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,N)}else{let q=I.textures;for(let Q=0;Q<q.length;Q++){let ue=q[Q],ge=r.convert(ue.format,ue.colorSpace),he=r.convert(ue.type),de=f(ue.internalFormat,ge,he,ue.normalized,ue.colorSpace);ne(I)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(I),de,I.width,I.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(I),de,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,de,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(N,I,G){let q=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(I.depthTexture);if(Q.__renderTarget=I,(!Q.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,I.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Me(i.TEXTURE_CUBE_MAP,I.depthTexture);let Ue=r.convert(I.depthTexture.format),qe=r.convert(I.depthTexture.type),De;I.depthTexture.format===cs?De=i.DEPTH_COMPONENT24:I.depthTexture.format===tr&&(De=i.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,De,I.width,I.height,0,Ue,qe,null)}}else V(I.depthTexture,0);let ue=Q.__webglTexture,ge=ie(I),he=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,de=I.depthTexture.format===tr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(I.depthTexture.format===cs)ne(I)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,he,ue,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,de,he,ue,0);else if(I.depthTexture.format===tr)ne(I)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,he,ue,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,de,he,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(N){let I=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==N.depthTexture){let q=N.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),q){let Q=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),I.__depthDisposeCallback=Q}I.__boundDepthTexture=q}if(N.depthTexture&&!I.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)We(I.__webglFramebuffer[q],N,q);else{let q=N.texture.mipmaps;q&&q.length>0?We(I.__webglFramebuffer[0],N,0):We(I.__webglFramebuffer,N,0)}else if(G){I.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[q]),I.__webglDepthbuffer[q]===void 0)I.__webglDepthbuffer[q]=i.createRenderbuffer(),Pe(I.__webglDepthbuffer[q],N,!1);else{let Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=I.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}else{let q=N.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),Pe(I.__webglDepthbuffer,N,!1);else{let Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(N,I,G){let q=n.get(N);I!==void 0&&Ae(q.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Xe(N)}function Ze(N){let I=N.texture,G=n.get(N),q=n.get(I);N.addEventListener("dispose",b);let Q=N.textures,ue=N.isWebGLCubeRenderTarget===!0,ge=Q.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=I.version,o.memory.textures++),ue){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(I.mipmaps&&I.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let de=0;de<I.mipmaps.length;de++)G.__webglFramebuffer[he][de]=i.createFramebuffer()}else G.__webglFramebuffer[he]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<I.mipmaps.length;he++)G.__webglFramebuffer[he]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ge)for(let he=0,de=Q.length;he<de;he++){let Ue=n.get(Q[he]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ne(N)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){let de=Q[he];G.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[he]);let Ue=r.convert(de.format,de.colorSpace),qe=r.convert(de.type),De=f(de.internalFormat,Ue,qe,de.normalized,de.colorSpace,N.isXRRenderTarget===!0),Ne=ie(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,De,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,G.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Me(i.TEXTURE_CUBE_MAP,I);for(let he=0;he<6;he++)if(I.mipmaps&&I.mipmaps.length>0)for(let de=0;de<I.mipmaps.length;de++)Ae(G.__webglFramebuffer[he][de],N,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,de);else Ae(G.__webglFramebuffer[he],N,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(I)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let he=0,de=Q.length;he<de;he++){let Ue=Q[he],qe=n.get(Ue),De=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(De,qe.__webglTexture),Me(De,Ue),Ae(G.__webglFramebuffer,N,Ue,i.COLOR_ATTACHMENT0+he,De,0),y(Ue)&&u(De)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(he=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,q.__webglTexture),Me(he,I),I.mipmaps&&I.mipmaps.length>0)for(let de=0;de<I.mipmaps.length;de++)Ae(G.__webglFramebuffer[de],N,I,i.COLOR_ATTACHMENT0,he,de);else Ae(G.__webglFramebuffer,N,I,i.COLOR_ATTACHMENT0,he,0);y(I)&&u(he),t.unbindTexture()}N.depthBuffer&&Xe(N)}function te(N){let I=N.textures;for(let G=0,q=I.length;G<q;G++){let Q=I[G];if(y(Q)){let ue=x(N),ge=n.get(Q).__webglTexture;t.bindTexture(ue,ge),u(ue),t.unbindTexture()}}}let Te=[],X=[];function ae(N){if(N.samples>0){if(ne(N)===!1){let I=N.textures,G=N.width,q=N.height,Q=i.COLOR_BUFFER_BIT,ue=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(N),he=I.length>1;if(he)for(let Ue=0;Ue<I.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let de=N.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ue=0;Ue<I.length;Ue++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ue]);let qe=n.get(I[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,G,q,0,0,G,q,Q,i.NEAREST),a===!0&&(Te.length=0,X.length=0,Te.push(i.COLOR_ATTACHMENT0+Ue),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Te.push(ue),X.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Ue=0;Ue<I.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ue]);let qe=n.get(I[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&a){let I=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function ie(N){return Math.min(s.maxSamples,N.samples)}function ne(N){let I=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function B(N){let I=o.render.frame;h.get(N)!==I&&(h.set(N,I),N.update())}function pe(N,I){let G=N.colorSpace,q=N.format,Q=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==xa&&G!==oi&&(Rt.getTransfer(G)===Vt?(q!==ei||Q!==Qn)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",G)),I}function ee(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=A,this.getTextureUnits=w,this.setTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=k,this.rebindTextures=we,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ub(i,e){function t(n,s=oi){let r,o=Rt.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===Qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===eu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===If)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cf)return i.BYTE;if(n===Pf)return i.SHORT;if(n===Po)return i.UNSIGNED_SHORT;if(n===jc)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===Ui)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===Df)return i.ALPHA;if(n===Nf)return i.RGB;if(n===ei)return i.RGBA;if(n===cs)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===nr)return i.RED;if(n===tu)return i.RED_INTEGER;if(n===ir)return i.RG;if(n===nu)return i.RG_INTEGER;if(n===iu)return i.RGBA_INTEGER;if(n===Ja||n===ja||n===Qa||n===el)if(o===Vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===el)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===su||n===ru||n===ou||n===au)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===su)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ru)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ou)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===au)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lu||n===cu||n===uu||n===hu||n===fu||n===tl||n===du)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lu||n===cu)return o===Vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hu)return r.COMPRESSED_R11_EAC;if(n===fu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tl)return r.COMPRESSED_RG11_EAC;if(n===du)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pu||n===mu||n===gu||n===vu||n===xu||n===yu||n===_u||n===bu||n===Mu||n===Su||n===Tu||n===Eu||n===wu||n===Au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_u)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Su)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Au)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ru||n===Cu||n===Pu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ru)return o===Vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Iu||n===Lu||n===nl||n===Du)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Iu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Du)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Io?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bb=`
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

}`,od=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ut({vertexShader:Fb,fragmentShader:Bb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ad=class extends us{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",a=1,c=null,h=null,d=null,p=null,g=null,_=null,S=typeof XRWebGLBinding<"u",M=new od,y={},u=t.getContextAttributes(),x=null,f=null,m=[],v=[],E=new Le,b=null,T=null,C=new Wn;C.viewport=new dt;let R=new Wn;R.viewport=new dt;let P=[C,R],A=new Yc,w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=m[K];return j===void 0&&(j=new xo,m[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=m[K];return j===void 0&&(j=new xo,m[K]=j),j.getGripSpace()},this.getHand=function(K){let j=m[K];return j===void 0&&(j=new xo,m[K]=j),j.getHandSpace()};function D(K){let j=v.indexOf(K.inputSource);if(j===-1)return;let xe=m[j];xe!==void 0&&(xe.update(K.inputSource,K.frame,c||o),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",V);for(let K=0;K<m.length;K++){let j=v[K];j!==null&&(v[K]=null,m[K].disconnect(j))}w=null,L=null,M.reset();for(let K in y)delete y[K];if(e.setRenderTarget(x),g=null,p=null,d=null,s=null,f=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(E.width,E.height,!1),T!==null){let K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,n.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",U),s.addEventListener("inputsourceschange",V),u.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(E),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ce=null,Ae=null;u.depth&&(Ae=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=u.stencil?tr:cs,Ce=u.stencil?Io:ts);let Pe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(Pe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new Yt(p.textureWidth,p.textureHeight,{format:ei,type:Qn,depthTexture:new Ks(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let xe={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),f=new Yt(g.framebufferWidth,g.framebufferHeight,{format:ei,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(a),c=null,o=await s.requestReferenceSpace(l),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(K){for(let j=0;j<K.removed.length;j++){let xe=K.removed[j],Ce=v.indexOf(xe);Ce>=0&&(v[Ce]=null,m[Ce].disconnect(xe))}for(let j=0;j<K.added.length;j++){let xe=K.added[j],Ce=v.indexOf(xe);if(Ce===-1){for(let Pe=0;Pe<m.length;Pe++)if(Pe>=v.length){v.push(xe),Ce=Pe;break}else if(v[Pe]===null){v[Pe]=xe,Ce=Pe;break}if(Ce===-1)break}let Ae=m[Ce];Ae&&Ae.connect(xe)}}let z=new H,O=new H;function k(K,j,xe){z.setFromMatrixPosition(j.matrixWorld),O.setFromMatrixPosition(xe.matrixWorld);let Ce=z.distanceTo(O),Ae=j.projectionMatrix.elements,Pe=xe.projectionMatrix.elements,We=Ae[14]/(Ae[10]-1),Xe=Ae[14]/(Ae[10]+1),we=(Ae[9]+1)/Ae[5],Ze=(Ae[9]-1)/Ae[5],te=(Ae[8]-1)/Ae[0],Te=(Pe[8]+1)/Pe[0],X=We*te,ae=We*Te,ie=Ce/(-te+Te),ne=ie*-te;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ne),K.translateZ(ie),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let B=We+ie,pe=Xe+ie,ee=X-ne,N=ae+(Ce-ne),I=we*Xe/pe*B,G=Ze*Xe/pe*B;K.projectionMatrix.makePerspective(ee,N,I,G,B,pe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function W(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let j=K.near,xe=K.far;M.texture!==null&&(M.depthNear>0&&(j=M.depthNear),M.depthFar>0&&(xe=M.depthFar)),A.near=R.near=C.near=j,A.far=R.far=C.far=xe,(w!==A.near||L!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),w=A.near,L=A.far),A.layers.mask=K.layers.mask|6,C.layers.mask=A.layers.mask&-5,R.layers.mask=A.layers.mask&-3;let Ce=K.parent,Ae=A.cameras;W(A,Ce);for(let Pe=0;Pe<Ae.length;Pe++)W(Ae[Pe],Ce);Ae.length===2?k(A,C,R):A.projectionMatrix.copy(C.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),$(K,A,Ce)};function $(K,j,xe){xe===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_a*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(p===null&&g===null))return a},this.setFoveation=function(K){a=K,p!==null&&(p.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)},this.getCameraTexture=function(K){return y[K]};let le=null;function Me(K,j){if(h=j.getViewerPose(c||o),_=j,h!==null){let xe=h.views;g!==null&&(e.setRenderTargetFramebuffer(f,g.framebuffer),e.setRenderTarget(f));let Ce=!1;xe.length!==A.cameras.length&&(A.cameras.length=0,Ce=!0);for(let Xe=0;Xe<xe.length;Xe++){let we=xe[Xe],Ze=null;if(g!==null)Ze=g.getViewport(we);else{let Te=d.getViewSubImage(p,we);Ze=Te.viewport,Xe===0&&(e.setRenderTargetTextures(f,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(f))}let te=P[Xe];te===void 0&&(te=new Wn,te.layers.enable(Xe),te.viewport=new dt,P[Xe]=te),te.matrix.fromArray(we.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(we.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Xe===0&&(A.matrix.copy(te.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ce===!0&&A.cameras.push(te)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let Xe=d.getDepthInformation(xe[0]);Xe&&Xe.isValid&&Xe.texture&&M.init(Xe,s.renderState)}if(Ae&&Ae.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let Xe=0;Xe<xe.length;Xe++){let we=xe[Xe].camera;if(we){let Ze=y[we];Ze||(Ze=new Ca,y[we]=Ze);let te=d.getCameraImage(we);Ze.sourceTexture=te}}}}for(let xe=0;xe<m.length;xe++){let Ce=v[xe],Ae=m[xe];Ce!==null&&Ae!==void 0&&Ae.update(Ce,j,c||o)}le&&le(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}let be=new om;be.setAnimationLoop(Me),this.setAnimationLoop=function(K){le=K},this.dispose=function(){}}},Ob=new et,fm=new pt;fm.set(-1,0,0,0,1,0,0,0,1);function zb(i,e){function t(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function n(M,y){y.color.getRGB(M.fogColor.value,Of(i)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function s(M,y,u,x,f){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?r(M,y):y.isMeshLambertMaterial?(r(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(r(M,y),d(M,y)):y.isMeshPhongMaterial?(r(M,y),h(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(r(M,y),p(M,y),y.isMeshPhysicalMaterial&&g(M,y,f)):y.isMeshMatcapMaterial?(r(M,y),_(M,y)):y.isMeshDepthMaterial?r(M,y):y.isMeshDistanceMaterial?(r(M,y),S(M,y)):y.isMeshNormalMaterial?r(M,y):y.isLineBasicMaterial?(o(M,y),y.isLineDashedMaterial&&l(M,y)):y.isPointsMaterial?a(M,y,u,x):y.isSpriteMaterial?c(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function r(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,t(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Xn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,t(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Xn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,t(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,t(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);let u=e.get(y),x=u.envMap,f=u.envMapRotation;x&&(M.envMap.value=x,M.envMapRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(f)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(fm),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,M.aoMapTransform))}function o(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform))}function l(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function a(M,y,u,x){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*u,M.scale.value=x*.5,y.map&&(M.map.value=y.map,t(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function c(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function h(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function d(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function p(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function g(M,y,u){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.retroreflectivity>0&&(M.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=u.texture,M.transmissionSamplerSize.value.set(u.width,u.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,M.specularIntensityMapTransform))}function _(M,y){y.matcap&&(M.matcap.value=y.matcap)}function S(M,y){let u=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(u.matrixWorld),M.nearDistance.value=u.shadow.camera.near,M.farDistance.value=u.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kb(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(f,m){let v=m.program;n.uniformBlockBinding(f,v)}function c(f,m){let v=s[f.id];v===void 0&&(M(f),v=h(f),s[f.id]=v,f.addEventListener("dispose",u));let E=m.program;n.updateUBOMapping(f,E);let b=e.render.frame;r[f.id]!==b&&(p(f),r[f.id]=b)}function h(f){let m=d();f.__bindingPointIndex=m;let v=i.createBuffer(),E=f.__size,b=f.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,m,v),v}function d(){for(let f=0;f<l;f++)if(o.indexOf(f)===-1)return o.push(f),f;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(f){let m=s[f.id],v=f.uniforms,E=f.__cache;i.bindBuffer(i.UNIFORM_BUFFER,m);for(let b=0,T=v.length;b<T;b++){let C=v[b];if(Array.isArray(C))for(let R=0,P=C.length;R<P;R++)g(C[R],b,R,E);else g(C,b,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(f,m,v,E){if(S(f,m,v,E)===!0){let b=f.__offset,T=f.value;if(Array.isArray(T)){let C=0;for(let R=0;R<T.length;R++){let P=T[R],A=y(P);_(P,f.__data,C),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(C+=A.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,f.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,f.__data)}}function _(f,m,v){typeof f=="number"||typeof f=="boolean"?m[0]=f:f.isMatrix3?(m[0]=f.elements[0],m[1]=f.elements[1],m[2]=f.elements[2],m[3]=0,m[4]=f.elements[3],m[5]=f.elements[4],m[6]=f.elements[5],m[7]=0,m[8]=f.elements[6],m[9]=f.elements[7],m[10]=f.elements[8],m[11]=0):ArrayBuffer.isView(f)?m.set(new f.constructor(f.buffer,f.byteOffset,m.length)):f.toArray(m,v)}function S(f,m,v,E){let b=f.value,T=m+"_"+v;if(E[T]===void 0)return typeof b=="number"||typeof b=="boolean"?E[T]=b:ArrayBuffer.isView(b)?E[T]=b.slice():E[T]=b.clone(),!0;{let C=E[T];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return E[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(C.equals(b)===!1)return C.copy(b),!0}}return!1}function M(f){let m=f.uniforms,v=0,E=16;for(let T=0,C=m.length;T<C;T++){let R=Array.isArray(m[T])?m[T]:[m[T]];for(let P=0,A=R.length;P<A;P++){let w=R[P],L=Array.isArray(w.value)?w.value:[w.value];for(let D=0,U=L.length;D<U;D++){let V=L[D],z=y(V),O=v%E,k=O%z.boundary,W=O+k;v+=k,W!==0&&E-W<z.storage&&(v+=E-W),w.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=v,v+=z.storage}}}let b=v%E;return b>0&&(v+=E-b),f.__size=v,f.__cache={},this}function y(f){let m={boundary:0,storage:0};return typeof f=="number"||typeof f=="boolean"?(m.boundary=4,m.storage=4):f.isVector2?(m.boundary=8,m.storage=8):f.isVector3||f.isColor?(m.boundary=16,m.storage=12):f.isVector4?(m.boundary=16,m.storage=16):f.isMatrix3?(m.boundary=48,m.storage=48):f.isMatrix4?(m.boundary=64,m.storage=64):f.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(f)?(m.boundary=16,m.storage=f.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",f),m}function u(f){let m=f.target;m.removeEventListener("dispose",u);let v=o.indexOf(m.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[m.id]),delete s[m.id],delete r[m.id]}function x(){for(let f in s)i.deleteBuffer(s[f]);o=[],s={},r={}}return{bind:a,update:c,dispose:x}}var Hb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ps=null;function Vb(){return ps===null&&(ps=new Ji(Hb,16,16,ir,Cn),ps.name="DFG_LUT",ps.minFilter=Bt,ps.magFilter=Bt,ps.wrapS=ls,ps.wrapT=ls,ps.generateMipmaps=!1,ps.needsUpdate=!0),ps}var Hu=class{constructor(e={}){let{canvas:t=Rp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:g=Qn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let S=g,M=new Set([iu,nu,tu]),y=new Set([Qn,ts,Po,Io,Qc,eu]),u=new Uint32Array(4),x=new Int32Array(4),f=new H,m=null,v=null,E=[],b=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,P=null,A=null,w=null,L=null;this._outputColorSpace=qt;let D=0,U=0,V=null,z=-1,O=null,k=new dt,W=new dt,$=null,le=new _e(0),Me=0,be=t.width,K=t.height,j=1,xe=null,Ce=null,Ae=new dt(0,0,be,K),Pe=new dt(0,0,be,K),We=!1,Xe=new _o,we=!1,Ze=!1,te=new et,Te=new H,X=new dt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function ne(){return V===null?j:1}let B=n;function pe(F,J){return t.getContext(F,J)}let ee,N,I,G,q,Q,ue,ge,he,de,Ue,qe,De,Ne,Fe,Ke,at,Z,Ie,me,Be,He,Ee;try{let F={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",kt,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",se,!1),B===null){let J="webgl2";if(B=pe(J,F),B===null)throw pe(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(F){throw t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ft("WebGLRenderer: "+F.message),F}function tt(){ee=new Ky(B),ee.init(),Be=new Ub(B,ee),N=new zy(B,ee,e,Be),I=new Db(B,ee),N.reversedDepthBuffer&&p&&I.buffers.depth.setReversed(!0),A=B.createFramebuffer(),w=B.createFramebuffer(),L=B.createFramebuffer(),G=new jy(B),q=new yb,Q=new Nb(B,ee,I,q,N,Be,G),ue=new Zy(C),ge=new ex(B),He=new By(B,ge),he=new $y(B,ge,G,He),de=new e_(B,he,ge,He,G),Z=new Qy(B,N,Q),Fe=new ky(q),Ue=new xb(C,ue,ee,N,He,Fe),qe=new zb(C,q),De=new bb,Ne=new Ab(ee),at=new Fy(C,ue,I,de,_,a),Ke=new Lb(C,de,N),Ee=new kb(B,G,N,I),Ie=new Oy(B,ee,G),me=new Jy(B,ee,G),G.programs=Ue.programs,C.capabilities=N,C.extensions=ee,C.properties=q,C.renderLists=De,C.shadowMap=Ke,C.state=I,C.info=G}S!==Qn&&(T=new n_(S,t.width,t.height,l,s,r));let $e=new ad(C,B);this.xr=$e,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let F=ee.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=ee.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(F){F!==void 0&&(j=F,this.setSize(be,K,!1))},this.getSize=function(F){return F.set(be,K)},this.setSize=function(F,J,fe=!0){if($e.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}be=F,K=J,t.width=Math.floor(F*j),t.height=Math.floor(J*j),fe===!0&&(t.style.width=F+"px",t.style.height=J+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,F,J)},this.getDrawingBufferSize=function(F){return F.set(be*j,K*j).floor()},this.setDrawingBufferSize=function(F,J,fe){be=F,K=J,j=fe,t.width=Math.floor(F*fe),t.height=Math.floor(J*fe),this.setViewport(0,0,F,J)},this.setEffects=function(F){if(S===Qn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let J=0;J<F.length;J++)if(F[J].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(k)},this.getViewport=function(F){return F.copy(Ae)},this.setViewport=function(F,J,fe,ce){F.isVector4?Ae.set(F.x,F.y,F.z,F.w):Ae.set(F,J,fe,ce),I.viewport(k.copy(Ae).multiplyScalar(j).round())},this.getScissor=function(F){return F.copy(Pe)},this.setScissor=function(F,J,fe,ce){F.isVector4?Pe.set(F.x,F.y,F.z,F.w):Pe.set(F,J,fe,ce),I.scissor(W.copy(Pe).multiplyScalar(j).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(F){I.setScissorTest(We=F)},this.setOpaqueSort=function(F){xe=F},this.setTransparentSort=function(F){Ce=F},this.getClearColor=function(F){return F.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(F=!0,J=!0,fe=!0){let ce=0;if(F){let oe=!1;if(V!==null){let Oe=V.texture.format;oe=M.has(Oe)}if(oe){let Oe=V.texture.type,ze=y.has(Oe),Ve=at.getClearColor(),je=at.getClearAlpha(),nt=Ve.r,vt=Ve.g,_t=Ve.b;ze?(u[0]=nt,u[1]=vt,u[2]=_t,u[3]=je,B.clearBufferuiv(B.COLOR,0,u)):(x[0]=nt,x[1]=vt,x[2]=_t,x[3]=je,B.clearBufferiv(B.COLOR,0,x))}else ce|=B.COLOR_BUFFER_BIT}J&&(ce|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ce|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&B.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),P=F},this.dispose=function(){t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",se,!1),at.dispose(),De.dispose(),Ne.dispose(),q.dispose(),ue.dispose(),de.dispose(),He.dispose(),Ee.dispose(),Ue.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",Ot),$e.removeEventListener("sessionend",Ft),_s.stop()};function kt(F){F.preventDefault(),Ff("WebGLRenderer: Context Lost."),R=!0}function Nt(){Ff("WebGLRenderer: Context Restored."),R=!1;let F=G.autoReset,J=Ke.enabled,fe=Ke.autoUpdate,ce=Ke.needsUpdate,oe=Ke.type;tt(),G.autoReset=F,Ke.enabled=J,Ke.autoUpdate=fe,Ke.needsUpdate=ce,Ke.type=oe}function se(F){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function dn(F){let J=F.target;J.removeEventListener("dispose",dn),xh(J)}function xh(F){yh(F),q.remove(F)}function yh(F){let J=q.get(F).programs;J!==void 0&&(J.forEach(function(fe){Ue.releaseProgram(fe)}),F.isShaderMaterial&&Ue.releaseShaderCache(F))}this.renderBufferDirect=function(F,J,fe,ce,oe,Oe){J===null&&(J=ae);let ze=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Ve=Vr(F,J,fe,ce,oe);I.setMaterial(ce,ze);let je=fe.index,nt=1;if(ce.wireframe===!0){if(je=he.getWireframeAttribute(fe),je===void 0)return;nt=2}let vt=fe.drawRange,_t=fe.attributes.position,Qe=vt.start*nt,Ut=(vt.start+vt.count)*nt;Oe!==null&&(Qe=Math.max(Qe,Oe.start*nt),Ut=Math.min(Ut,(Oe.start+Oe.count)*nt)),je!==null?(Qe=Math.max(Qe,0),Ut=Math.min(Ut,je.count)):_t!=null&&(Qe=Math.max(Qe,0),Ut=Math.min(Ut,_t.count));let gt=Ut-Qe;if(gt<0||gt===1/0)return;He.setup(oe,ce,Ve,fe,je);let Wt,Ht=Ie;if(je!==null&&(Wt=ge.get(je),Ht=me,Ht.setIndex(Wt)),oe.isMesh)ce.wireframe===!0?(I.setLineWidth(ce.wireframeLinewidth*ne()),Ht.setMode(B.LINES)):Ht.setMode(B.TRIANGLES);else if(oe.isLine){let Pn=ce.linewidth;Pn===void 0&&(Pn=1),I.setLineWidth(Pn*ne()),oe.isLineSegments?Ht.setMode(B.LINES):oe.isLineLoop?Ht.setMode(B.LINE_LOOP):Ht.setMode(B.LINE_STRIP)}else oe.isPoints?Ht.setMode(B.POINTS):oe.isSprite&&Ht.setMode(B.TRIANGLES);if(oe.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))Ht.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let Pn=oe._multiDrawStarts,Ye=oe._multiDrawCounts,Gn=oe._multiDrawCount,Pt=je?ge.get(je).bytesPerElement:1,Fn=q.get(ce).currentProgram.getUniforms();for(let xi=0;xi<Gn;xi++)Fn.setValue(B,"_gl_DrawID",xi),Ht.render(Pn[xi]/Pt,Ye[xi])}else if(oe.isInstancedMesh)Ht.renderInstances(Qe,gt,oe.count);else if(fe.isInstancedBufferGeometry){let Pn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ye=Math.min(fe.instanceCount,Pn);Ht.renderInstances(Qe,gt,Ye)}else Ht.render(Qe,gt)};function Al(F,J,fe,ce){P!==null&&F.isNodeMaterial&&P.setObject(ce,F),we===!0&&Fe.setState(F,fe,!1),F.transparent===!0&&F.side===Sn&&F.forceSinglePass===!1?(F.side=Xn,F.needsUpdate=!0,ks(F,J,ce),F.side=ds,F.needsUpdate=!0,ks(F,J,ce),F.side=Sn):ks(F,J,ce)}this.compile=function(F,J,fe=null){fe===null&&(fe=F),P!==null&&P.renderStart(F,J,fe),v=Ne.get(fe),v.init(J),b.push(v),fe.traverseVisible(function(oe){oe.isLight&&oe.layers.test(J.layers)&&(v.pushLight(oe),oe.castShadow&&v.pushShadow(oe))}),F!==fe&&F.traverseVisible(function(oe){oe.isLight&&oe.layers.test(J.layers)&&(v.pushLight(oe),oe.castShadow&&v.pushShadow(oe))}),v.setupLights(),P!==null&&P.updateLights(v.state.lightsArray),Ze=this.localClippingEnabled,we=Fe.init(this.clippingPlanes,Ze),we===!0&&Fe.setGlobalState(this.clippingPlanes,J),P!==null&&Ke.render(v.state.shadowsArray,fe,J);let ce=new Set;return F.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let Oe=oe.material;if(Oe)if(Array.isArray(Oe))for(let ze=0;ze<Oe.length;ze++){let Ve=Oe[ze];Al(Ve,fe,J,oe),ce.add(Ve)}else Al(Oe,fe,J,oe),ce.add(Oe)}),v=b.pop(),P!==null&&P.renderEnd(),ce},this.compileAsync=function(F,J,fe=null){let ce=this.compile(F,J,fe);return new Promise(oe=>{function Oe(){if(ce.forEach(function(ze){let je=q.get(ze).currentProgram;(je===void 0||je.isReady())&&ce.delete(ze)}),ce.size===0){oe(F);return}setTimeout(Oe,10)}ee.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Et=null;function wt(F){Et&&Et(F)}function Ot(){_s.stop()}function Ft(){_s.start()}let _s=new om;_s.setAnimationLoop(wt),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(F){Et=F,$e.setAnimationLoop(F),F===null?_s.stop():_s.start()},$e.addEventListener("sessionstart",Ot),$e.addEventListener("sessionend",Ft),this.render=function(F,J){if(J!==void 0&&J.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(F,J);let fe=$e.enabled===!0&&$e.isPresenting===!0,ce=T!==null&&(V===null||fe)&&T.begin(C,V);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(J),J=$e.getCamera()),F.isScene===!0&&F.onBeforeRender(C,F,J,V),v=Ne.get(F,b.length),v.init(J),v.state.textureUnits=Q.getTextureUnits(),b.push(v),te.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Xe.setFromProjectionMatrix(te,$i,J.reversedDepth),Ze=this.localClippingEnabled,we=Fe.init(this.clippingPlanes,Ze),m=De.get(F,E.length),m.init(),E.push(m),$e.enabled===!0&&$e.isPresenting===!0){let ze=C.xr.getDepthSensingMesh();ze!==null&&bs(ze,J,-1/0,C.sortObjects)}bs(F,J,0,C.sortObjects),m.finish(),P!==null&&P.updateLights(v.state.lightsArray),C.sortObjects===!0&&m.sort(xe,Ce),ie=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,ie&&at.addToRenderList(m,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&Fe.beginShadows();let oe=v.state.shadowsArray;if(Ke.render(oe,F,J),we===!0&&Fe.endShadows(),(ce&&T.hasRenderPass())===!1){let ze=m.opaque,Ve=m.transmissive;if(v.setupLights(),J.isArrayCamera){let je=J.cameras;if(Ve.length>0)for(let nt=0,vt=je.length;nt<vt;nt++){let _t=je[nt];Yn(ze,Ve,F,_t)}ie&&at.render(F);for(let nt=0,vt=je.length;nt<vt;nt++){let _t=je[nt];zs(m,F,_t,_t.viewport)}}else Ve.length>0&&Yn(ze,Ve,F,J),ie&&at.render(F),zs(m,F,J)}V!==null&&U===0&&(Q.updateMultisampleRenderTarget(V),Q.updateRenderTargetMipmap(V)),ce&&T.end(C),F.isScene===!0&&F.onAfterRender(C,F,J),He.resetDefaultState(),z=-1,O=null,b.pop(),b.length>0?(v=b[b.length-1],Q.setTextureUnits(v.state.textureUnits),we===!0&&Fe.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,P!==null&&P.renderEnd()};function bs(F,J,fe,ce){if(F.visible===!1)return;if(F.layers.test(J.layers)){if(F.isGroup)fe=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(J);else if(F.isLightProbeGrid)v.pushLightProbeGrid(F);else if(F.isLight)v.pushLight(F),F.castShadow&&v.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(Xe)){ce&&X.setFromMatrixPosition(F.matrixWorld).applyMatrix4(te);let ze=de.update(F),Ve=F.material;Ve.visible&&m.push(F,ze,Ve,fe,X.z,null,J)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(Xe))){let ze=de.update(F),Ve=F.material;if(ce&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),X.copy(F.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),X.copy(ze.boundingSphere.center)),X.applyMatrix4(F.matrixWorld).applyMatrix4(te)),Array.isArray(Ve)){let je=ze.groups;for(let nt=0,vt=je.length;nt<vt;nt++){let _t=je[nt],Qe=Ve[_t.materialIndex];Qe&&Qe.visible&&m.push(F,ze,Qe,fe,X.z,_t,J)}}else Ve.visible&&m.push(F,ze,Ve,fe,X.z,null,J)}}let Oe=F.children;for(let ze=0,Ve=Oe.length;ze<Ve;ze++)bs(Oe[ze],J,fe,ce)}function zs(F,J,fe,ce){let{opaque:oe,transmissive:Oe,transparent:ze}=F;v.setupLightsView(fe),we===!0&&Fe.setGlobalState(C.clippingPlanes,fe),ce&&I.viewport(k.copy(ce)),oe.length>0&&Ms(oe,J,fe),Oe.length>0&&Ms(Oe,J,fe),ze.length>0&&Ms(ze,J,fe),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Yn(F,J,fe,ce){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[ce.id]===void 0){let Qe=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[ce.id]=new Yt(1,1,{generateMipmaps:!0,type:Qe?Cn:Qn,minFilter:Ln,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let Oe=v.state.transmissionRenderTarget[ce.id],ze=ce.viewport||k;Oe.setSize(ze.z*C.transmissionResolutionScale,ze.w*C.transmissionResolutionScale);let Ve=C.getRenderTarget(),je=C.getActiveCubeFace(),nt=C.getActiveMipmapLevel();C.setRenderTarget(Oe),C.getClearColor(le),Me=C.getClearAlpha(),Me<1&&C.setClearColor(16777215,.5),C.clear(),ie&&at.render(fe);let vt=C.toneMapping;C.toneMapping=es;let _t=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),v.setupLightsView(ce),we===!0&&Fe.setGlobalState(C.clippingPlanes,ce),Ms(F,fe,ce),Q.updateMultisampleRenderTarget(Oe),Q.updateRenderTargetMipmap(Oe),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ut=0,gt=J.length;Ut<gt;Ut++){let Wt=J[Ut],{object:Ht,geometry:Pn,material:Ye,group:Gn}=Wt;if(Ye.side===Sn&&Ht.layers.test(ce.layers)){let Pt=Ye.side;Ye.side=Xn,Ye.needsUpdate=!0,Hr(Ht,fe,ce,Pn,Ye,Gn),Ye.side=Pt,Ye.needsUpdate=!0,Qe=!0}}Qe===!0&&(Q.updateMultisampleRenderTarget(Oe),Q.updateRenderTargetMipmap(Oe))}C.setRenderTarget(Ve,je,nt),C.setClearColor(le,Me),_t!==void 0&&(ce.viewport=_t),C.toneMapping=vt}function Ms(F,J,fe){let ce=J.isScene===!0?J.overrideMaterial:null;for(let oe=0,Oe=F.length;oe<Oe;oe++){let ze=F[oe],{object:Ve,geometry:je,group:nt}=ze,vt=ze.material;vt.allowOverride===!0&&ce!==null&&(vt=ce),Ve.layers.test(fe.layers)&&Hr(Ve,J,fe,je,vt,nt)}}function Hr(F,J,fe,ce,oe,Oe){P!==null&&oe.isNodeMaterial&&P.setObject(F,oe),F.onBeforeRender(C,J,fe,ce,oe,Oe),F.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),oe.onBeforeRender(C,J,fe,ce,F,Oe),oe.transparent===!0&&oe.side===Sn&&oe.forceSinglePass===!1?(oe.side=Xn,oe.needsUpdate=!0,C.renderBufferDirect(fe,J,ce,oe,F,Oe),oe.side=ds,oe.needsUpdate=!0,C.renderBufferDirect(fe,J,ce,oe,F,Oe),oe.side=Sn):C.renderBufferDirect(fe,J,ce,oe,F,Oe),F.onAfterRender(C,J,fe,ce,oe,Oe)}function ks(F,J,fe){J.isScene!==!0&&(J=ae);let ce=q.get(F),oe=v.state.lights,Oe=v.state.shadowsArray,ze=oe.state.version,Ve=Ue.getParameters(F,oe.state,Oe,J,fe,v.state.lightProbeGridArray),je=Ue.getProgramCacheKey(Ve),nt=ce.programs;ce.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?J.environment:null,ce.fog=J.fog;let vt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;ce.envMap=ue.get(F.envMap||ce.environment,vt),ce.envMapRotation=ce.environment!==null&&F.envMap===null?J.environmentRotation:F.envMapRotation,nt===void 0&&(F.addEventListener("dispose",dn),nt=new Map,ce.programs=nt);let _t=nt.get(je);if(_t!==void 0){if(ce.currentProgram===_t&&ce.lightsStateVersion===ze)return Cl(F,Ve),_t}else Ve.uniforms=Ue.getUniforms(F),P!==null&&F.isNodeMaterial&&P.build(F,fe,Ve),F.onBeforeCompile(Ve,C),_t=Ue.acquireProgram(Ve,je),nt.set(je,_t),ce.uniforms=Ve.uniforms;let Qe=ce.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Qe.clippingPlanes=Fe.uniform),Cl(F,Ve),ce.needsLights=Pl(F),ce.lightsStateVersion=ze,ce.needsLights&&(Qe.ambientLightColor.value=oe.state.ambient,Qe.lightProbe.value=oe.state.probe,Qe.sunLights.value=oe.state.sun,Qe.sunLightShadows.value=oe.state.sunShadow,Qe.directionalLights.value=oe.state.directional,Qe.directionalLightShadows.value=oe.state.directionalShadow,Qe.spotLights.value=oe.state.spot,Qe.spotLightShadows.value=oe.state.spotShadow,Qe.rectAreaLights.value=oe.state.rectArea,Qe.ltc_1.value=oe.state.rectAreaLTC1,Qe.ltc_2.value=oe.state.rectAreaLTC2,Qe.pointLights.value=oe.state.point,Qe.pointLightShadows.value=oe.state.pointShadow,Qe.hemisphereLights.value=oe.state.hemi,Qe.sunShadowMatrix.value=oe.state.sunShadowMatrix,Qe.sunShadowCascade.value=oe.state.sunShadowCascade,Qe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Qe.spotLightMatrix.value=oe.state.spotLightMatrix,Qe.spotLightMap.value=oe.state.spotLightMap,Qe.pointShadowMatrix.value=oe.state.pointShadowMatrix),ce.lightProbeGrid=v.state.lightProbeGridArray.length>0,ce.currentProgram=_t,ce.uniformsList=null,_t}function Rl(F){if(F.uniformsList===null){let J=F.currentProgram.getUniforms();F.uniformsList=Uo.seqWithValue(J.seq,F.uniforms)}return F.uniformsList}function Cl(F,J){let fe=q.get(F);fe.outputColorSpace=J.outputColorSpace,fe.batching=J.batching,fe.batchingColor=J.batchingColor,fe.instancing=J.instancing,fe.instancingColor=J.instancingColor,fe.instancingMorph=J.instancingMorph,fe.skinning=J.skinning,fe.morphTargets=J.morphTargets,fe.morphNormals=J.morphNormals,fe.morphColors=J.morphColors,fe.morphTargetsCount=J.morphTargetsCount,fe.numClippingPlanes=J.numClippingPlanes,fe.numIntersection=J.numClipIntersection,fe.vertexAlphas=J.vertexAlphas,fe.vertexTangents=J.vertexTangents,fe.toneMapping=J.toneMapping}function _h(F,J){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;f.setFromMatrixPosition(J.matrixWorld);for(let fe=0,ce=F.length;fe<ce;fe++){let oe=F[fe];if(oe.texture!==null&&oe.boundingBox.containsPoint(f))return oe}return null}function Vr(F,J,fe,ce,oe){J.isScene!==!0&&(J=ae),Q.resetTextureUnits();let Oe=J.fog,ze=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?J.environment:null,Ve=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Rt.workingColorSpace,je=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,nt=ue.get(ce.envMap||ze,je),vt=ce.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,_t=!!fe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Qe=!!fe.morphAttributes.position,Ut=!!fe.morphAttributes.normal,gt=!!fe.morphAttributes.color,Wt=es;ce.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Wt=C.toneMapping);let Ht=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Pn=Ht!==void 0?Ht.length:0,Ye=q.get(ce),Gn=v.state.lights;if(we===!0&&(Ze===!0||F!==O)){let Xt=F===O&&ce.id===z;Fe.setState(ce,F,Xt)}let Pt=!1;ce.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Gn.state.version||Ye.outputColorSpace!==Ve||oe.isBatchedMesh&&Ye.batching===!1||!oe.isBatchedMesh&&Ye.batching===!0||oe.isBatchedMesh&&Ye.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&Ye.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&Ye.instancing===!1||!oe.isInstancedMesh&&Ye.instancing===!0||oe.isSkinnedMesh&&Ye.skinning===!1||!oe.isSkinnedMesh&&Ye.skinning===!0||oe.isInstancedMesh&&Ye.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ye.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ye.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ye.instancingMorph===!1&&oe.morphTexture!==null||Ye.envMap!==nt||ce.fog===!0&&Ye.fog!==Oe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Fe.numPlanes||Ye.numIntersection!==Fe.numIntersection)||Ye.vertexAlphas!==vt||Ye.vertexTangents!==_t||Ye.morphTargets!==Qe||Ye.morphNormals!==Ut||Ye.morphColors!==gt||Ye.toneMapping!==Wt||Ye.morphTargetsCount!==Pn||!!Ye.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,Ye.__version=ce.version);let Fn=Ye.currentProgram;Pt===!0&&(Fn=ks(ce,J,oe),P&&ce.isNodeMaterial&&P.onUpdateProgram(ce,Fn,Ye));let xi=!1,ci=!1,Ii=!1,zt=Fn.getUniforms(),Jt=Ye.uniforms;if(I.useProgram(Fn.program)&&(xi=!0,ci=!0,Ii=!0),ce.id!==z&&(z=ce.id,ci=!0),Ye.needsLights){let Xt=_h(v.state.lightProbeGridArray,oe);Ye.lightProbeGrid!==Xt&&(Ye.lightProbeGrid=Xt,ci=!0)}if(xi||O!==F){I.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),zt.setValue(B,"projectionMatrix",F.projectionMatrix),zt.setValue(B,"viewMatrix",F.matrixWorldInverse);let mn=zt.map.cameraPosition;mn!==void 0&&mn.setValue(B,Te.setFromMatrixPosition(F.matrixWorld)),N.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&zt.setValue(B,"isOrthographic",F.isOrthographicCamera===!0),O!==F&&(O=F,ci=!0,Ii=!0)}if(Ye.needsLights&&(Gn.state.sunShadowMap.length>0&&zt.setValue(B,"sunShadowMap",Gn.state.sunShadowMap,Q),Gn.state.directionalShadowMap.length>0&&zt.setValue(B,"directionalShadowMap",Gn.state.directionalShadowMap,Q),Gn.state.spotShadowMap.length>0&&zt.setValue(B,"spotShadowMap",Gn.state.spotShadowMap,Q),Gn.state.pointShadowMap.length>0&&zt.setValue(B,"pointShadowMap",Gn.state.pointShadowMap,Q)),oe.isSkinnedMesh){zt.setOptional(B,oe,"bindMatrix"),zt.setOptional(B,oe,"bindMatrixInverse");let Xt=oe.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),zt.setValue(B,"boneTexture",Xt.boneTexture,Q))}oe.isBatchedMesh&&(zt.setOptional(B,oe,"batchingTexture"),zt.setValue(B,"batchingTexture",oe._matricesTexture,Q),zt.setOptional(B,oe,"batchingIdTexture"),zt.setValue(B,"batchingIdTexture",oe._indirectTexture,Q),zt.setOptional(B,oe,"batchingColorTexture"),oe._colorsTexture!==null&&zt.setValue(B,"batchingColorTexture",oe._colorsTexture,Q));let Gi=fe.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Z.update(oe,fe,Fn),(ci||Ye.receiveShadow!==oe.receiveShadow)&&(Ye.receiveShadow=oe.receiveShadow,zt.setValue(B,"receiveShadow",oe.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&J.environment!==null&&(Jt.envMapIntensity.value=J.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=Vb()),ci){if(zt.setValue(B,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&Gr(Jt,Ii),Oe&&ce.fog===!0&&qe.refreshFogUniforms(Jt,Oe),qe.refreshMaterialUniforms(Jt,ce,j,K,v.state.transmissionRenderTarget[F.id]),Ye.needsLights&&Ye.lightProbeGrid){let Xt=Ye.lightProbeGrid;Jt.probesSH.value=Xt.texture,Jt.probesMin.value.copy(Xt.boundingBox.min),Jt.probesMax.value.copy(Xt.boundingBox.max),Jt.probesResolution.value.copy(Xt.resolution)}Uo.upload(B,Rl(Ye),Jt,Q)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Uo.upload(B,Rl(Ye),Jt,Q),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&zt.setValue(B,"center",oe.center),zt.setValue(B,"modelViewMatrix",oe.modelViewMatrix),zt.setValue(B,"normalMatrix",oe.normalMatrix),zt.setValue(B,"modelMatrix",oe.matrixWorld),ce.uniformsGroups!==void 0){let Xt=ce.uniformsGroups;for(let mn=0,Ss=Xt.length;mn<Ss;mn++){let Hs=Xt[mn];Ee.update(Hs,Fn),Ee.bind(Hs,Fn)}}return Fn}function Gr(F,J){F.ambientLightColor.needsUpdate=J,F.lightProbe.needsUpdate=J,F.sunLights.needsUpdate=J,F.sunLightShadows.needsUpdate=J,F.directionalLights.needsUpdate=J,F.directionalLightShadows.needsUpdate=J,F.pointLights.needsUpdate=J,F.pointLightShadows.needsUpdate=J,F.spotLights.needsUpdate=J,F.spotLightShadows.needsUpdate=J,F.rectAreaLights.needsUpdate=J,F.hemisphereLights.needsUpdate=J}function Pl(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(F,J,fe){let ce=q.get(F);ce.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),q.get(F.texture).__webglTexture=J,q.get(F.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:fe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,J){let fe=q.get(F);fe.__webglFramebuffer=J,fe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(F,J=0,fe=0){V=F,D=J,U=fe;let ce=null,oe=!1,Oe=!1;if(F){let Ve=q.get(F);if(Ve.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(B.FRAMEBUFFER,Ve.__webglFramebuffer),k.copy(F.viewport),W.copy(F.scissor),$=F.scissorTest,I.viewport(k),I.scissor(W),I.setScissorTest($),z=-1;return}else if(Ve.__webglFramebuffer===void 0)Q.setupRenderTarget(F);else if(Ve.__hasExternalTextures)Q.rebindTextures(F,q.get(F.texture).__webglTexture,q.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let vt=F.depthTexture;if(Ve.__boundDepthTexture!==vt){if(vt!==null&&q.has(vt)&&(F.width!==vt.image.width||F.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(F)}}let je=F.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Oe=!0);let nt=q.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(nt[J])?ce=nt[J][fe]:ce=nt[J],oe=!0):F.samples>0&&Q.useMultisampledRTT(F)===!1?ce=q.get(F).__webglMultisampledFramebuffer:Array.isArray(nt)?ce=nt[fe]:ce=nt,k.copy(F.viewport),W.copy(F.scissor),$=F.scissorTest}else k.copy(Ae).multiplyScalar(j).floor(),W.copy(Pe).multiplyScalar(j).floor(),$=We;if(fe!==0&&(ce=A),I.bindFramebuffer(B.FRAMEBUFFER,ce)&&I.drawBuffers(F,ce),I.viewport(k),I.scissor(W),I.setScissorTest($),oe){let Ve=q.get(F.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ve.__webglTexture,fe)}else if(Oe){let Ve=J;for(let je=0;je<F.textures.length;je++){let nt=q.get(F.textures[je]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+je,nt.__webglTexture,fe,Ve)}}else if(F!==null&&fe!==0){let Ve=q.get(F.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ve.__webglTexture,fe)}z=-1};function pn(F){let J=q.get(F);return(J.__readFormat!==F.format||J.__readType!==F.type)&&(J.__readFormat=F.format,J.__readType=F.type,J.__formatReadable=N.textureFormatReadable(F.format),J.__typeReadable=N.textureTypeReadable(F.type)),J}this.readRenderTargetPixels=function(F,J,fe,ce,oe,Oe,ze,Ve=0){if(!(F&&F.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=q.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&ze!==void 0&&(je=je[ze]),je){I.bindFramebuffer(B.FRAMEBUFFER,je);try{let nt=F.textures[Ve],vt=nt.format,_t=nt.type;F.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ve);let Qe=pn(nt);if(Qe.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=F.width-ce&&fe>=0&&fe<=F.height-oe&&B.readPixels(J,fe,ce,oe,Be.convert(vt),Be.convert(_t),Oe)}finally{let nt=V!==null?q.get(V).__webglFramebuffer:null;I.bindFramebuffer(B.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(F,J,fe,ce,oe,Oe,ze,Ve=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=q.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&ze!==void 0&&(je=je[ze]),je)if(J>=0&&J<=F.width-ce&&fe>=0&&fe<=F.height-oe){I.bindFramebuffer(B.FRAMEBUFFER,je);let nt=F.textures[Ve],vt=nt.format,_t=nt.type;F.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ve);let Qe=pn(nt);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.bufferData(B.PIXEL_PACK_BUFFER,Oe.byteLength,B.STREAM_READ),B.readPixels(J,fe,ce,oe,Be.convert(vt),Be.convert(_t),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let gt=V!==null?q.get(V).__webglFramebuffer:null;I.bindFramebuffer(B.FRAMEBUFFER,gt);let Wt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Pp(B,Wt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Oe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Ut),B.deleteSync(Wt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,J=null,fe=0){let ce=Math.pow(2,-fe),oe=Math.floor(F.image.width*ce),Oe=Math.floor(F.image.height*ce),ze=J!==null?J.x:0,Ve=J!==null?J.y:0;Q.setTexture2D(F,0),B.copyTexSubImage2D(B.TEXTURE_2D,fe,0,0,ze,Ve,oe,Oe),I.unbindTexture()},this.copyTextureToTexture=function(F,J,fe=null,ce=null,oe=0,Oe=0){let ze,Ve,je,nt,vt,_t,Qe,Ut,gt,Wt=F.isCompressedTexture?F.mipmaps[Oe]:F.image;if(fe!==null)ze=fe.max.x-fe.min.x,Ve=fe.max.y-fe.min.y,je=fe.isBox3?fe.max.z-fe.min.z:1,nt=fe.min.x,vt=fe.min.y,_t=fe.isBox3?fe.min.z:0;else{let Jt=Math.pow(2,-oe);ze=Math.floor(Wt.width*Jt),Ve=Math.floor(Wt.height*Jt),F.isDataArrayTexture?je=Wt.depth:F.isData3DTexture?je=Math.floor(Wt.depth*Jt):je=1,nt=0,vt=0,_t=0}ce!==null?(Qe=ce.x,Ut=ce.y,gt=ce.z):(Qe=0,Ut=0,gt=0);let Ht=Be.convert(J.format),Pn=Be.convert(J.type),Ye;J.isData3DTexture?(Q.setTexture3D(J,0),Ye=B.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Q.setTexture2DArray(J,0),Ye=B.TEXTURE_2D_ARRAY):(Q.setTexture2D(J,0),Ye=B.TEXTURE_2D),I.activeTexture(B.TEXTURE0),I.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),I.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),I.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment);let Gn=I.getParameter(B.UNPACK_ROW_LENGTH),Pt=I.getParameter(B.UNPACK_IMAGE_HEIGHT),Fn=I.getParameter(B.UNPACK_SKIP_PIXELS),xi=I.getParameter(B.UNPACK_SKIP_ROWS),ci=I.getParameter(B.UNPACK_SKIP_IMAGES);I.pixelStorei(B.UNPACK_ROW_LENGTH,Wt.width),I.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Wt.height),I.pixelStorei(B.UNPACK_SKIP_PIXELS,nt),I.pixelStorei(B.UNPACK_SKIP_ROWS,vt),I.pixelStorei(B.UNPACK_SKIP_IMAGES,_t);let Ii=F.isDataArrayTexture||F.isData3DTexture,zt=J.isDataArrayTexture||J.isData3DTexture;if(F.isDepthTexture){let Jt=q.get(F),Gi=q.get(J),Xt=q.get(Jt.__renderTarget),mn=q.get(Gi.__renderTarget);I.bindFramebuffer(B.READ_FRAMEBUFFER,Xt.__webglFramebuffer),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let Ss=0;Ss<je;Ss++)Ii&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(F).__webglTexture,oe,_t+Ss),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(J).__webglTexture,Oe,gt+Ss)),B.blitFramebuffer(nt,vt,ze,Ve,Qe,Ut,ze,Ve,B.DEPTH_BUFFER_BIT,B.NEAREST);I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(oe!==0||F.isRenderTargetTexture||q.has(F)){let Jt=q.get(F),Gi=q.get(J);I.bindFramebuffer(B.READ_FRAMEBUFFER,w),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,L);for(let Xt=0;Xt<je;Xt++)Ii?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Jt.__webglTexture,oe,_t+Xt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Jt.__webglTexture,oe),zt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gi.__webglTexture,Oe,gt+Xt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Gi.__webglTexture,Oe),oe!==0?B.blitFramebuffer(nt,vt,ze,Ve,Qe,Ut,ze,Ve,B.COLOR_BUFFER_BIT,B.NEAREST):zt?B.copyTexSubImage3D(Ye,Oe,Qe,Ut,gt+Xt,nt,vt,ze,Ve):B.copyTexSubImage2D(Ye,Oe,Qe,Ut,nt,vt,ze,Ve);I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else zt?F.isDataTexture||F.isData3DTexture?B.texSubImage3D(Ye,Oe,Qe,Ut,gt,ze,Ve,je,Ht,Pn,Wt.data):J.isCompressedArrayTexture?B.compressedTexSubImage3D(Ye,Oe,Qe,Ut,gt,ze,Ve,je,Ht,Wt.data):B.texSubImage3D(Ye,Oe,Qe,Ut,gt,ze,Ve,je,Ht,Pn,Wt):F.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Oe,Qe,Ut,ze,Ve,Ht,Pn,Wt.data):F.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Oe,Qe,Ut,Wt.width,Wt.height,Ht,Wt.data):B.texSubImage2D(B.TEXTURE_2D,Oe,Qe,Ut,ze,Ve,Ht,Pn,Wt);I.pixelStorei(B.UNPACK_ROW_LENGTH,Gn),I.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pt),I.pixelStorei(B.UNPACK_SKIP_PIXELS,Fn),I.pixelStorei(B.UNPACK_SKIP_ROWS,xi),I.pixelStorei(B.UNPACK_SKIP_IMAGES,ci),Oe===0&&J.generateMipmaps&&B.generateMipmap(Ye),I.unbindTexture()},this.initRenderTarget=function(F){q.get(F).__webglFramebuffer===void 0&&Q.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?Q.setTextureCube(F,0):F.isData3DTexture?Q.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?Q.setTexture2DArray(F,0):Q.setTexture2D(F,0),I.unbindTexture()},this.resetState=function(){D=0,U=0,V=null,I.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}};var $t=(i,e,t)=>i<e?e:i>t?t:i,yt=(i,e,t)=>i+(e-i)*t,ol=i=>i*i*(3-2*i),Tt=(i,e,t)=>{let n=$t((t-i)/(e-i),0,1);return n*n*(3-2*n)},dm=1337;function pm(i){dm=i|0}function Gb(i){return i=i^dm|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var _n=(i,e)=>Gb(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function Ei(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return yt(_n(t,e),_n(t+1,e),s)}var Xu=(i,e=0)=>Ei(i,e)*.55+Ei(i*2.03,e+7)*.3+Ei(i*4.1,e+13)*.15;function Lt(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Wu=new _e,ve=i=>(Wu.set(i),[Wu.r,Wu.g,Wu.b]),ld=(i,e,t)=>[yt(i[0],e[0],t),yt(i[1],e[1],t),yt(i[2],e[2],t)],zn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var wi=["city","sakura","coast","country","mountain","snow"],al={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:.25,base:1.05,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Bo=1500,qu=260,ns=0,cl=2,Wb=-2.2,ll=0;function gm(i){ll=Math.max(0,wi.indexOf(i))}function sr(i){let e=Math.floor(i/Bo),t=i-e*Bo,n=ol($t((t-(Bo-qu))/qu,0,1)),s=wi.length;return{a:wi[((e+ll)%s+s)%s],b:wi[((e+ll+1)%s+s)%s],t:n}}function Ct(i){let e=sr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var un=i=>{let e=sr(i);return e.t<.5?e.a:e.b};function vm(i,e){let t=Math.floor(i/Bo),n=i-t*Bo,s=ol($t((n-(Bo-qu))/qu,0,1)),r=wi.length;return(wi[((t+ll)%r+r)%r]===e?1-s:0)+(wi[((t+ll+1)%r+r)%r]===e?s:0)}function kn(i,e){let t=sr(i);return yt(al[t.a][e],al[t.b][e],t.t)}var Lr=650,Dr=375,Oo=i=>i*Lr+Dr;function ul(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Ct(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var cd={x:new Map,r:new Map,t:new Map};function ud(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function rr(i){let e=Math.round((i-Dr)/Lr);return ud(cd.x,e,()=>{let t=Oo(e);return ul(t)?{k:e,s:t}:null})}function Xb(i){let e=rr(i);return e?1-Tt(8,45,Math.abs(i-e.s)):0}var Nr=1150,zo=820,hl=4.6,hd=i=>i*Nr+zo;function fd(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Ct(i+t);if(n.country+n.sakura<.9)return!1}let e=rr(i);return!(e&&Math.abs(e.s-i)<170)}function Fi(i){let e=Math.round((i-zo)/Nr);return ud(cd.r,e,()=>{let t=hd(e);return fd(t)?{k:e,s:t}:null})}function qb(i){let e=Fi(i);return e?1-Tt(30,70,Math.abs(i-e.s)):0}function Yb(i){let e=-hl;return i<11?e-1.3:i<16?yt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?yt(e+.7,.35,(i-20)/5.5):.35}var xm=1050,ym=525,bn=85,rn=125,Zb=24,Kb=i=>i*xm+ym;function $b(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Ct(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function Bi(i){let e=Math.round((i-ym)/xm);return ud(cd.t,e,()=>{let t=Kb(e);return $b(t)?{k:e,s:t}:null})}function Jb(i){let e=Bi(i);return e?1-Tt(bn+20,rn+25,Math.abs(i-e.s)):0}var Yu=0,Ku=(i,e)=>{let t=i/rn;return Zb*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var gs=2,Zu=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(Ei(e/300,11)-.5)*2+(Ei(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*kn(e,"curv")*(1-Math.max(Xb(e),qb(e),Jb(e)))}elevRaw(e){return kn(e,"base")+kn(e,"hill")*(Xu(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=rr(e);if(n){let o=1-Tt(8,45,Math.abs(e-n.s));o>0&&(t=yt(t,this.elevRaw(n.s),o))}let s=Fi(e);if(s){let o=1-Tt(30,70,Math.abs(e-s.s));o>0&&(t=yt(t,this.elevRaw(s.s),o))}let r=Bi(e);if(r){let o=1-Tt(bn+10,rn+45,Math.abs(e-r.s));o>0&&(t=yt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*gs<e+gs;){let t=this.X.length-1,n=t*gs,s=this.curv(n+gs/2)*gs,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*gs),this.Z.push(this.Z[t]+Math.cos(r+s/2)*gs),this.H.push(r+s),this.Y.push(this.elev(n+gs))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+gs);let n=e/gs,s=Math.floor(n),r=n-s;t.x=yt(this.X[s],this.X[s+1],r),t.z=yt(this.Z[s],this.Z[s+1],r),t.y=yt(this.Y[s],this.Y[s+1],r),t.h=yt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),l=Math.cos(t.h);return t.fx=o,t.fz=l,t.rx=-l,t.rz=o,t}};function mm(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Tt(45,190,r)*16*(.45+.55*Ei(e/160+(t>0?50:0),3));case"coast":return t>0?r<s+.9?-.06:-.15+Tt(s+1.5,80,r)*24*(.5+.5*Ei(e/170,5))+Tt(80,200,r)*30:r<s+1.5?-.06:r<s+1.95?-.04:Wb-Math.min(r-(s+2),40)*.13-n;case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*Ei(e/140,61),a=r-(s+1);return a<l?a:Math.min(l+(a-l)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+Tt(105,230,r)*95*(.6+.4*Ei(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?yt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(Ei(e/40+(t>0?3:0),71)-.5):.55+Tt(125,210,r)*40*(.45+.55*Ei(e/230+(t>0?11:0),73));case"country":default:return r<s+2?-.08:r<s+2.6?-.08-(r-s-2)*.62:r<135?-.45:-.45+Tt(140,215,r)*7*(.4+.6*Ei(e/210+(t>0?9:0),7))}}function vs(i,e,t,n){let s=sr(i),r=mm(s.a,i,e,t,n),o=s.t;e<0&&o>0&&(s.b==="coast"?o=Tt(.25,.9,o):s.a==="coast"&&(o=Tt(.1,.75,o)));let l=s.t>0?yt(r,mm(s.b,i,e,t,n),o):r;Yu=0;let a=Fi(i);if(a){let S=Math.abs(i-a.s);if(S>=36)return l;let M=S<29?Yb(S):yt(.35,l,Tt(29,36,S));return Math.abs(e)<n+3.2&&(M=Math.min(M,-.08)),M}let c=Bi(i);if(!c)return l;let h=i-c.s,d=Math.abs(h);if(d>=2*rn)return l;let p=Math.abs(e),g=Ku(h,e),_;return d<bn?_=p<=n+1.46?-.25:Math.max(l,g):_=Math.max(l,Math.min(g,p<n+1?-.06:p-(n+1))),Yu=Math.max(0,_-l),_}function _m(i){let e=Fi(i);return e?1-Tt(27,34,Math.abs(i-e.s)):0}var fl=new H,$u=new H,jb=[1,1,1],Qb=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],Mm=(()=>{let i=Math.tan(Math.PI/8),e=[[1,-i],[1,i],[i,1],[-i,1],[-1,i],[-1,-i],[-i,-1],[i,-1]],t=[];for(let n=1;n<7;n++)t.push(...e[0],...e[n],...e[n+1]);return t})(),Sm=(()=>{let i=[],e=[];for(let t=0;t<6;t++){let n=Math.PI/3*t-Math.PI/6,s=2/Math.sqrt(3);i.push([Math.cos(n)*s,Math.sin(n)*s])}for(let t=1;t<5;t++)e.push(...i[0],...i[t],...i[t+1]);return e})(),hn=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1,off:r=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.hasOff=r,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.O=null,this.offX=0,this.offY=0,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new et,this.nm=new pt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}if(this.hasOff){let o=new Float32Array(t*2);this.O&&o.set(this.O.subarray(0,n*2)),this.O=o}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,l,a,c){this.n>=this.cap&&this.grow(this.n+1);let h=this.e,d=this.ne,p=this.n*3,g=this.P,_=this.bb,S=h[0]*e+h[4]*t+h[8]*n+h[12],M=h[1]*e+h[5]*t+h[9]*n+h[13],y=h[2]*e+h[6]*t+h[10]*n+h[14];g[p]=S,g[p+1]=M,g[p+2]=y,S<_[0]&&(_[0]=S),M<_[1]&&(_[1]=M),y<_[2]&&(_[2]=y),S>_[3]&&(_[3]=S),M>_[4]&&(_[4]=M),y>_[5]&&(_[5]=y);let u=d[0]*s+d[3]*r+d[6]*o,x=d[1]*s+d[4]*r+d[7]*o,f=d[2]*s+d[5]*r+d[8]*o,m=127/(Math.sqrt(u*u+x*x+f*f)||1);if(this.N[p]=Math.round(u*m),this.N[p+1]=Math.round(x*m),this.N[p+2]=Math.round(f*m),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=a),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(M)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasOff&&(this.O[this.n*2]=this.offX,this.O[this.n*2+1]=this.offY),this.hasColor){let v=c||jb,E=this.Cl;E[p]=v[0]>=1?255:v[0]<=0?0:v[0]*255+.5,E[p+1]=v[1]>=1?255:v[1]<=0?0:v[1]*255+.5,E[p+2]=v[2]>=1?255:v[2]<=0?0:v[2]*255+.5}this.n++}quad(e,t,n,s,r,o){fl.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),$u.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),$u.lengthSq()<1e-12&&$u.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),fl.cross($u).normalize();let l=fl.x,a=fl.y,c=fl.z,h=o?o.u0:0,d=o?o.u1:1,p=o?o.v0:0,g=o?o.v1:1;this.vtx(e[0],e[1],e[2],l,a,c,h,p,r),this.vtx(t[0],t[1],t[2],l,a,c,d,p,r),this.vtx(n[0],n[1],n[2],l,a,c,d,g,r),this.vtx(e[0],e[1],e[2],l,a,c,h,p,r),this.vtx(n[0],n[1],n[2],l,a,c,d,g,r),this.vtx(s[0],s[1],s[2],l,a,c,h,g,r)}box(e,t,n,s,r,o,l,a=null,c=null){let h=a||{},d=c||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],d.nz||l,h.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],d.pz||l,h.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],d.nx||l,h.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],d.px||l,h.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],d.py||l,h.py),c&&c.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],d.ny||l,h.ny)}cyl(e,t,n,s,r,o,l,a,c=!0){let h=(s-r)/o;for(let d=0;d<l;d++){let p=d/l*Math.PI*2,g=(d+1)/l*Math.PI*2,_=Math.cos(p),S=Math.sin(p),M=Math.cos(g),y=Math.sin(g),u=[e+_*s,t,n+S*s],x=[e+M*s,t,n+y*s],f=[e+M*r,t+o,n+y*r],m=[e+_*r,t+o,n+S*r];this.vtx(u[0],u[1],u[2],_,h,S,0,0,a),this.vtx(m[0],m[1],m[2],_,h,S,0,0,a),this.vtx(f[0],f[1],f[2],M,h,y,0,0,a),this.vtx(u[0],u[1],u[2],_,h,S,0,0,a),this.vtx(f[0],f[1],f[2],M,h,y,0,0,a),this.vtx(x[0],x[1],x[2],M,h,y,0,0,a),c&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,a),this.vtx(f[0],f[1],f[2],0,1,0,0,0,a),this.vtx(m[0],m[1],m[2],0,1,0,0,0,a))}}rod(e,t,n,s,r,o){let l=t[0]-e[0],a=t[1]-e[1],c=t[2]-e[2],h=Math.hypot(l,a,c);l/=h,a/=h,c/=h;let d=0,p=1,g=0;Math.abs(a)>.99&&(d=1,p=0);let _=a*g-c*p,S=c*d-l*g,M=l*p-a*d,y=Math.hypot(_,S,M);_/=y,S/=y,M/=y;let u=S*c-M*a,x=M*l-_*c,f=_*a-S*l;for(let m=0;m<r;m++){let v=m/r*Math.PI*2,E=(m+1)/r*Math.PI*2,b=Math.cos(v),T=Math.sin(v),C=Math.cos(E),R=Math.sin(E),P=_*b+u*T,A=S*b+x*T,w=M*b+f*T,L=_*C+u*R,D=S*C+x*R,U=M*C+f*R,V=[e[0]+P*n,e[1]+A*n,e[2]+w*n],z=[e[0]+L*n,e[1]+D*n,e[2]+U*n],O=[t[0]+L*s,t[1]+D*s,t[2]+U*s],k=[t[0]+P*s,t[1]+A*s,t[2]+w*s];this.vtx(V[0],V[1],V[2],P,A,w,0,0,o),this.vtx(z[0],z[1],z[2],L,D,U,0,0,o),this.vtx(O[0],O[1],O[2],L,D,U,0,0,o),this.vtx(V[0],V[1],V[2],P,A,w,0,0,o),this.vtx(O[0],O[1],O[2],L,D,U,0,0,o),this.vtx(k[0],k[1],k[2],P,A,w,0,0,o)}return h}blob(e,t,n,s,r,o,l=0,a=1){let c=bm[l%bm.length],h=c.attributes.position.array,d=c.attributes.normal.array,p=c.userData.disp;for(let g=0;g<h.length;g+=3){let _=1+p[g/3],S=Math.max(0,Math.min(1,d[g+1]*.5+.5)),M=[o[0]+(r[0]-o[0])*S,o[1]+(r[1]-o[1])*S,o[2]+(r[2]-o[2])*S];this.vtx(e+h[g]*s*_,t+h[g+1]*s*_*a,n+h[g+2]*s*_,d[g],d[g+1],d[g+2],0,0,M)}}wire(e,t,n,s,r,o=10){let l=e;this.noShadow=!0;for(let a=1;a<=o;a++){let c=a/o,h=[e[0]+(t[0]-e[0])*c,e[1]+(t[1]-e[1])*c-n*4*c*(1-c),e[2]+(t[2]-e[2])*c];this.rod(l,h,s,s,3,r),l=h}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,l,a]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],l,a,s[o])}bill(e,t,n,s,r,o,l,a,c,h,d=Qb,p=1){let g=(c.u1-c.u0)*.5,_=(c.v1-c.v0)*.5,S=c.u0+g,M=c.v0+_;for(let y=0;y<d.length;y+=2){let u=d[y],x=d[y+1];this.offX=u*l,this.offY=x*a,this.vtx(e,t,n,s,r,o,S+u*g*p,M+x*_*p,h)}this.offX=this.offY=0}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null,O:this.hasOff&&this.O?this.O.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,l=e.C,a=e.U,c=this.n,h=this.bb;for(let d=0;d<e.n*3;d+=3){let p=r[d],g=r[d+1],_=r[d+2],S=c*3+d,M=n[0]*p+n[4]*g+n[8]*_+n[12],y=n[1]*p+n[5]*g+n[9]*_+n[13],u=n[2]*p+n[6]*g+n[10]*_+n[14];this.P[S]=M,this.P[S+1]=y,this.P[S+2]=u,this.hasAO&&(this.A[c+d/3]=this.aoByte(y)),M<h[0]&&(h[0]=M),y<h[1]&&(h[1]=y),u<h[2]&&(h[2]=u),M>h[3]&&(h[3]=M),y>h[4]&&(h[4]=y),u>h[5]&&(h[5]=u);let x=o[d],f=o[d+1],m=o[d+2],v=s[0]*x+s[3]*f+s[6]*m,E=s[1]*x+s[4]*f+s[7]*m,b=s[2]*x+s[5]*f+s[8]*m,T=127/(Math.sqrt(v*v+E*E+b*b)||1);this.N[S]=Math.round(v*T),this.N[S+1]=Math.round(E*T),this.N[S+2]=Math.round(b*T)}if(this.hasColor&&(l?this.Cl.set(l,c*3):this.Cl.fill(255,c*3,(c+e.n)*3)),this.hasUV&&(a?this.U.set(a,c*2):this.U.fill(0,c*2,(c+e.n)*2)),this.hasOff){let d=Math.hypot(n[0],n[1],n[2]),p=e.O;if(p)for(let g=0;g<e.n*2;g++)this.O[c*2+g]=p[g]*d;else this.O.fill(0,c*2,(c+e.n)*2)}this.n+=e.n}build(){if(!this.n)return null;let e=new mt,t=this.n,n=this.bb;if(e.setAttribute("position",new bt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new bt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new bt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new bt(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new bt(this.Lt.slice(0,t),1,!0)),this.hasOff&&e.setAttribute("aOff",new bt(this.O.slice(0,t*2),2)),this.hasColor&&e.setAttribute("color",new bt(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new fi(new H(n[0],n[1],n[2]),new H(n[3],n[4],n[5])),this.hasOff){let s=0;for(let r=0;r<t*2;r++){let o=Math.abs(this.O[r]);o>s&&(s=o)}e.boundingBox.expandByScalar(s*Math.SQRT2)}return e.boundingSphere=e.boundingBox.getBoundingSphere(new di),e}},bm=[0,1,2,3].map(i=>{let e=new Oa(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,l)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});ht.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var eM=ht.shadowmap_pars_fragment;function md(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;ht.shadowmap_pars_fragment=eM.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}md(1);function Rm(i,e){let t=i<e?`#define GRAZE_FADE
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var Ai=4200,ke={uSkyHor:{value:new _e(.7,.8,.9)},uSkyZen:{value:new _e(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uSakWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Le},uSunDir:{value:new H(0,1,0)},uSunCol:{value:new _e(1,1,1)},uTuftV:{value:new dt(.167,.333,.164,.165)},uGhShade:{value:new H(.3,.85,1.7)},uBlShade:{value:new H(7.5,3,2.3)},uTunA:{value:new H(0,-1e4,0)},uTunB:{value:new H(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new H},uCarFwd:{value:new H(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:tM()},uCloudTex:{value:null},uCloudOrg:{value:new Le},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Le(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function Cm(i){let e=new Ji(new Uint8Array(i),i.length,1,nr);return e.minFilter=e.magFilter=An,e.generateMipmaps=!1,e.needsUpdate=!0,e}var pi=Cm([16,16,16,70,200,255,255,255]),dl=Cm([28,40,70,130,200,240,255,255]);function tM(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new Ji(e,256,256,ei);return s.wrapS=s.wrapT=Is,s.magFilter=Bt,s.minFilter=Ln,s.generateMipmaps=!0,s.colorSpace=oi,s.needsUpdate=!0,s}var Ri=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,Ju=1600,dd=256,nM=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/Ju).toFixed(8)} + 0.5).r * uCloudSh; }`,iM=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,Pm=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/Ju).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,Im=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,sM=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,rM=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,ju=new Er;ju.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};ju.customProgramCacheKey=()=>"propdepth";function Lm(){let i=new Yt(dd,dd,{format:nr,type:Qn,depthBuffer:!1,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),e=new ut({uniforms:{uCenter:{value:new Le},uOrigin:ke.uOrigin,uTime:ke.uTime,uNoiseTex:ke.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${Ju.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new ct(new sn(2,2),e),n=new Ls;t.frustumCulled=!1,ke.uCloudTex.value=i.texture,ke.uCloudTex.rt=i;let s=Ju/dd;return{update(r,o,l,a,c){let h=Math.round((o+a)/s)*s-a,d=Math.round((l+c)/s)*s-c;e.uniforms.uCenter.value.set(h,d),ke.uCloudOrg.value.set(h,d);let p=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(p)}}}function or(i,e="",t="",n=!0){i.uniforms.uOrigin=ke.uOrigin,i.uniforms.uCloudSh=ke.uCloudSh,i.uniforms.uTime=ke.uTime,i.uniforms.uNoiseTex=ke.uNoiseTex,i.uniforms.uCloudTex=ke.uCloudTex,i.uniforms.uCloudOrg=ke.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=ke[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?Pm:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Ri}${nM}${sM}${e}`).replace("#include <opaque_fragment>",`${n?Im:iM}${t}${rM}
#include <opaque_fragment>`)}var oM=`
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
#ifdef Z_CITY
  c *= mix(vec3(1.0), vec3(0.70, 0.68, 0.80), city); // the shopping street's asphalt: darker, a violet grey, as in the city painting
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
`,aM=`
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
#endif`,lM=`
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
}`,Dm={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"},mi={tex:null,uFieldK:{value:new Le(1/12,1/21)},uFieldC:{value:new H(1,1,1)},uFieldCo:{value:new H(1,1,1)},uFieldSa:{value:new H(1,1,1)},uFieldM:{value:new H(.16,.32,.05)}};function Nm(i){let e={};for(let t of i)e[Dm[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),mi.tex&&(i.includes("country")||i.includes("coast")||i.includes("sakura"))&&(e.F_PAINT=""),e}var Tm=new Map;function pl(i){let e=[...new Set(i)].sort().join("+"),t=Tm.get(e);return t||(t=Um(Nm(e.split("+")),e),Tm.set(e,t)),t}function Um(i=Nm(Object.keys(Dm)),e="all"){let t=new vn({color:16777215,gradientMap:pi});t.defines=i;let n=i.F_PAINT!==void 0;return t.onBeforeCompile=s=>{s.uniforms.uSkyHor=ke.uSkyHor,s.uniforms.uSkyZen=ke.uSkyZen,s.uniforms.uWet=ke.uWet,s.uniforms.uSakWet=ke.uSakWet,s.uniforms.uNight=ke.uNight,s.uniforms.uSunDir=ke.uSunDir,s.uniforms.uSunCol=ke.uSunCol;for(let r of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])s.uniforms[r]=ke[r];if(n){s.uniforms.uFieldTex={value:mi.tex};for(let r of["uFieldK","uFieldC","uFieldCo","uFieldSa","uFieldM"])s.uniforms[r]=mi[r]}s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),or(s,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${oM}`,lM+aM,!1),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v20-"+e+(n?"-fp":""),t}function Em(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),or(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function Fm(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=ke[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function cM(i){i.uniforms.uLightsOn=ke.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function wm(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function gd(i){return i.onBeforeCompile=e=>or(e),i.customProgramCacheKey=()=>"cs",i}var uM="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",hM=(i,e,t="")=>`
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
}`;function vd(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=ke[o];s&&Object.assign(r.uniforms,s.uniforms),or(r,uM+(s?s.pars:""),hM(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}var ar=48;function Bm(i,e){let t=new vn({color:16777215,gradientMap:dl}),n=!!mi.tex;return t.onBeforeCompile=s=>{Object.assign(s.uniforms,e,i);for(let r of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])s.uniforms[r]=ke[r];n&&(s.uniforms.uFieldC=mi.uFieldC,s.uniforms.uFieldM=mi.uFieldM),s.vertexShader=s.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${Pm}
uniform vec4 uG[${ar}], uGM[${ar/4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;${n?`
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
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${ar-2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
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
  float gsw = mod(gs, ${Ai.toFixed(1)}), gpu = abs(gu) - uGP.z - 2.1;
  float tone = 0.55 * (gHash(floor(vec2(gsw / 30.0, gpu / 34.0)) + (side > 0.0 ? 31.0 : 0.0)) - 0.5) * smoothstep(9.0, 30.0, gpu)
             + 0.4 * (vnoiseV(vec2(gsw, gu) * 0.018 + 5.3) - 0.5);
  vec3 plot = uFieldM * uFieldC * vec3(0.86, 0.87, 0.48) * (1.0 + tone * vec3(1.8, 1.0, 0.2)) * (0.9 + 0.2 * nz);`:`
  vec2 pid = floor(vec2(mod(gs, ${Ai.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);`}
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`).replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`#include <project_vertex>
if (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
varying vec3 vBladeCol; varying float vCloud;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${Im}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>n?"grass-v5-fp":"grass-v5",t}function Om(i,e){let t={};t.ground=Um(),t.color=Em(new vn({vertexColors:!0,gradientMap:pi}),1.6,.1,"color-v3",wm),t.atlas=new vn({vertexColors:!0,gradientMap:pi,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=l=>{wm(l),cM(l),or(l)},t.atlas.customProgramCacheKey=()=>"atlas-v5",t.foliage=Em(new vn({vertexColors:!0,gradientMap:dl}),2.6,.24,"foliage-v2"),t.lamp=new yn({color:15789798}),t.sig=new yn({color:new _e(.15,1.7,1.1)}),t.sodium=new yn({color:new _e(5,2.3,.65)}),t.decal=new vn({vertexColors:!0,gradientMap:pi,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=l=>or(l),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new vn({map:e,vertexColors:!0,gradientMap:dl,alphaTest:.42,side:Sn}),t.leaf.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",ht.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),or(l),Fm(l),l.uniforms.uTuftV=ke.uTuftV,l.uniforms.uWind=ke.uWind,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),l.fragmentShader=l.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v5"),t.wire=new yn({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let o=new si(n);return t.pool=new yn({map:o,color:16762746,transparent:!0,opacity:0,blending:Qi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=o,t}function zm(i,e,t){let s=new Uint8Array(64);for(let o=0;o<64;o++){let l=(o+.5)/64*2-1,a=Math.min(1,Math.max(0,(l-i)/(e-i))),c=a*a*(3-2*a);s[o]=Math.round(255*(t+(1-t)*c))}let r=new Ji(s,64,1,nr);return r.minFilter=r.magFilter=Bt,r.generateMipmaps=!1,r.needsUpdate=!0,r}var fM=zm(-.05,.5,.05),dM=zm(-.5,.45,.12);function Am(i,e){i.uniforms.uTime=ke.uTime,i.uniforms.uWind=ke.uWind,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aOff; uniform float uWind;`+(e?" uniform float uTime;":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += bbR * (aOff.x + sw) + bbU * aOff.y; }`),e&&(i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`))}var pd=(i,e,t)=>{let n=new _e().setRGB(i/255,e/255,t/255,qt);return`vec3(${n.r.toFixed(4)}, ${n.g.toFixed(4)}, ${n.b.toFixed(4)})`},pM=`diffuseColor.rgb *= mix(${pd(62,38,34)}, mix(${pd(205,105,150)}, ${pd(255,232,242)}, smoothstep(0.3, 1.0, gTx.b)), smoothstep(0.1, 0.26, gTx.b));`;function xd(i,{blossom:e=!1}={}){let t=new vn({map:i,vertexColors:!0,color:e?16777215:new _e().setRGB(.68,.85,.46,qt),gradientMap:e?dM:fM,alphaTest:.5,side:ds});t.shadowSide=Sn,t.onBeforeCompile=s=>{or(s),Fm(s),Am(s,!1),s.uniforms.uGhShade=e?ke.uBlShade:ke.uGhShade,s.vertexShader=s.vertexShader.replace("#include <shadowmap_vertex>",`#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGhShade;`).replace("#include <map_fragment>",`
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${e?pM:"diffuseColor.rgb *= gTx.b;"}
diffuseColor.a *= gTx.a;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, 0.72));`).replace("#include <aomap_fragment>",`#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`)},t.customProgramCacheKey=()=>e?"gblossom-v1":"gleaf-v1";let n=new Er;return n.onBeforeCompile=s=>Am(s,!0),n.customProgramCacheKey=()=>"gleaf-depth-v1",{mat:t,depth:n}}var mM=ve("#f2c230"),km=ve("#26272c");function Qu(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=kn(s,"rw"),l=n*(o+.8),a=Ct(s),c=a.city+a.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(c?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function Hm(){let i=new cn,e=gd(new vn({vertexColors:!0,gradientMap:pi})),t=new yn({color:new _e(6,.45,.3)}),n=new yn({color:new _e(.22,.03,.03)}),s=[0,1].map(()=>{let r=new cn,o=new cn;r.add(o),o.position.set(-.42,1.02,-.02);let l=new hn,a=3.6;for(let d=0,p=0;p<a;d++,p+=.45)l.box(-Math.min(p+.45,a),-.065,-.065,-p,.065,.065,d%2?km:mM);l.box(0,-.09,-.07,.38,.09,.07,km);let c=new ct(l.build(),e);c.castShadow=!0,o.add(c);let h=[-.28,.28].map(d=>{let p=new ct(new Sr(.13,18),n);return p.position.set(d,2.75,-.1),p.rotation.y=Math.PI,r.add(p),p});return i.add(r),{root:r,pivot:o,arm:c,lamps:h,L:a}});return i.visible=!1,{group:i,update(r,o,l,a,c){i.visible=!!r,r&&r.forEach((h,d)=>{let p=s[d];p.root.position.set(h.x-o.x,h.y,h.z-o.z),p.root.rotation.y=h.yaw,p.arm.scale.x=(h.rw+.25)/p.L,p.pivot.rotation.z=-l*(Math.PI/2-.06);let g=Math.floor(c*2.5)%2;p.lamps[0].material=a&&g===0?t:n,p.lamps[1].material=a&&g===1?t:n})}}}function gM(){let t=()=>{let y=document.createElement("canvas");return y.width=1024,y.height=512,y},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let a=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,a);for(let y=0;y<1024;y+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(y,0,2,a);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,a-14,1024,14);let c=[.1,.36,.62,.88].map(y=>y*1024),h=(y,u,x,f)=>{let m=r.createLinearGradient(y,u,y+x*.3,u+f);m.addColorStop(0,"#5d7fae"),m.addColorStop(.6,"#9db7d6"),m.addColorStop(1,"#2f3f55"),r.fillStyle=m,r.fillRect(y,u,x,f),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(y+x*.2,u),r.lineTo(y+x*.38,u),r.lineTo(y+x*.1,u+f),r.lineTo(y-x*.08,u+f),r.fill(),o.fillStyle="#ffeccc",o.fillRect(y,u,x,f)};for(let y=0;y<c.length-1;y++){let u=c[y]+40,x=c[y+1]-40,f=3,m=(x-u)/f;for(let v=0;v<f;v++)r.fillStyle="#6b737c",r.fillRect(u+v*m+2,34,m-4,58),h(u+v*m+6,38,m-12,50)}for(let y of[c[0]-70,c[3]+40])r.fillStyle="#6b737c",r.fillRect(y+2,34,28,58),h(y+5,38,22,50);for(let y of c)r.fillStyle="#c3c8ce",r.fillRect(y-30,22,60,a-36),r.fillStyle="#7b828a",r.fillRect(y-1,22,2,a-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(y-30,22,60,a-36),h(y-24,34,20,46),h(y+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let y of c)r.fillStyle="#c3c8ce",r.fillRect(y-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",c[1]+40,136);let d=0,p=176,g=256,_=256;r.fillStyle="#d3d7dc",r.fillRect(d,p,g,_),r.fillStyle="#20262e",r.fillRect(d+14,p+44,g-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(d+40,p+44),r.lineTo(d+80,p+44),r.lineTo(d+40,p+140),r.lineTo(d+14,p+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(d+g/2-4,p+44,8,96),r.fillStyle="#111",r.fillRect(d+50,p+12,g-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",d+g/2,p+26),r.fillStyle="#1f9a50",r.fillRect(d,p+150,g,18),r.fillStyle="#e8892b",r.fillRect(d,p+170,g,7);for(let y of[d+40,d+g-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(y,p+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(y+(y<d+g/2?28:-28),p+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(d,p+_-30,g,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",d+g/2,p+220),o.fillStyle="#111",o.fillRect(d,p,g,_),o.fillStyle="#ff9a2a",o.font=`800 18px ${l}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",d+g/2,p+26);for(let y of[d+40,d+g-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(y,p+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let S=y=>{let u=new si(y);return u.colorSpace=qt,u.anisotropy=4,u},M=(y,u,x,f)=>({u0:y/1024,u1:(y+x)/1024,v0:1-(u+f)/512,v1:1-u/512});return{map:S(n),em:S(s),side:M(0,0,1024,a),sideR:{...M(0,0,1024,a),flip:!0},front:M(d,p,g,_),plain:M(342,202,28,28)}}function Vm(){let i=gM(),e=gd(new vn({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:pi})),t=new hn({uv:!0}),n=[1,1,1],s=ve("#9aa1a9"),r=ve("#3b4047"),o=ve("#2a2d33"),l=19.5,a=.6,c=3,h=1.45,d=.95,p=4,g=4,_=.3,S=ve("#33363b"),M={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},y=(b,T,C,R,P,A,w,L=!1)=>t.box(b,T,C,R,P,A,w,M,L?{noBottom:!0}:null),u=(b,T,C,R,P,A)=>{let L=C-P/2,D=C+P/2;for(let U=0;U<12;U++){let V=U/12*Math.PI*2,z=(U+1)/12*Math.PI*2,O=b+Math.cos(V)*R,k=T+Math.sin(V)*R,W=b+Math.cos(z)*R,$=T+Math.sin(z)*R;t.quad([O,k,L],[W,$,L],[W,$,D],[O,k,D],A,i.plain),t.quad([b,T,D],[O,k,D],[W,$,D],[W,$,D],A,i.plain),t.quad([b,T,L],[W,$,L],[O,k,L],[O,k,L],A,i.plain)}},x=c*l+(c-1)*a;for(let b=0;b<c;b++){let T=-x/2+l/2+b*(l+a),C=T-l/2,R=T+l/2;t.quad([C,d,h],[R,d,h],[R,p,h],[C,p,h],n,i.side),t.quad([R,d,-h],[C,d,-h],[C,p,-h],[R,p,-h],n,i.side);let P=b===c-1,A=b===0;t.quad([R,d,h],[R,d,-h],[R,p,-h],[R,p,h],P?n:ve("#c9ced4"),P?i.front:i.plain),t.quad([C,d,-h],[C,d,h],[C,p,h],[C,p,-h],A?n:ve("#c9ced4"),A?i.front:i.plain);for(let w=0;w<g;w++)for(let L of[1,-1]){let D=w/g*Math.PI/2,U=(w+1)/g*Math.PI/2,V=L*h*Math.cos(D),z=p+_*Math.sin(D),O=L*h*Math.cos(U),k=p+_*Math.sin(U);t.quad([C,z,V],[R,z,V],[R,k,O],[C,k,O],s,i.plain);for(let W of[C,R]){let $=[[W,p,0],[W,z,V],[W,k,O]];t.quad($[0],$[1],$[2],$[2],s,i.plain),t.quad($[0],$[2],$[1],$[1],s,i.plain)}}for(let w of[1,-1])y(C,p-.02,w*h-.04,R,p+.05,w*h+.04,r);for(let w of[T-5.5,T+5.5])y(w-1.3,p+.2,-.8,w+1.3,p+.62,.8,ve("#c4c9cf"),!0);y(C+.3,.82,-h+.1,R-.3,d,h-.1,o);for(let[w,L,D,U]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])y(T+w-L/2,.82-D,-1.15+U*.2,T+w+L/2,.82,1.15+U*.2,U>0?o:r);for(let w of[T-7,T+7]){for(let L of[1,-1]){y(w-1.35,.32,L*.86,w+1.35,.56,L*1.02,r);for(let D of[-1.05,1.05])y(w+D-.17,.3,L*.84,w+D+.17,.58,L*1.06,o)}y(w-.35,.5,-1,w+.35,.8,1,r);for(let L of[-1.05,1.05])for(let D of[1,-1])u(w+L,.43,D*.6,.43,.13,S)}if(b<c-1&&y(R,d+.15,-.95,R+a,p-.1,.95,ve("#3a3e44")),b===0){let w=T-3,L=p+.7;t.box(w-.6,p+.26,-.6,w+.6,p+.42,.6,r),t.rod([w-.5,p+.42,0],[w,L+.9,0],.03,.03,4,r),t.rod([w+.5,p+.42,0],[w,L+.9,0],.03,.03,4,r),t.rod([w,L+.9,-.85],[w,L+.9,.85],.03,.03,4,r)}}let f=new ct(t.build(),e);f.castShadow=!0,f.receiveShadow=!0,f.frustumCulled=!1;let m=new cn;m.add(f),m.visible=!1;let v={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:x},E={};return{group:m,st:v,start(b,T,C=16){Object.assign(v,{active:!0,sx:b,dir:T,speed:C,u:-T*290,ds:T>0?-2:2,cleared:!1}),m.visible=!0},update(b,T,C,R,P){if(!v.active)return;v.u+=v.dir*v.speed*b;let A=v.u-v.dir*v.length/2;if(!v.cleared&&(v.dir>0?A>P+1:A<-P-1)&&(v.cleared=!0),Math.abs(v.u)>330){v.active=!1,m.visible=!1;return}T.at(v.sx,E),m.position.set(E.x+E.fx*v.ds+E.rx*v.u-C.x,E.y+.34,E.z+E.fz*v.ds+E.rz*v.u-C.z),m.rotation.y=E.h+(v.dir>0?Math.PI:0),e.emissiveIntensity=.3+R*1.1}}}var vM='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',lr=2048,xM=4096;function nh(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var qm=nh(256,256);{let i=qm.getContext("2d"),e=i.createImageData(256,256),t=Lt(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var yd=class{constructor(e=0){let t=this.H=xM+e;this.cA=nh(lr,t),this.cE=nh(lr/2,t/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,lr/2,t/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,lr,t),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(qm,"repeat")}add(e,t,n,s){if(this.x+t+4>lr&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>this.H)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let c of[this.a,this.e])c.save(),c===this.e&&c.scale(.5,.5),c.translate(o.x,o.y),c.beginPath(),c.rect(0,0,t,n),c.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5,a=this.H;return this.cells[e]={u0:(o.x+l)/lr,u1:(o.x+t-l)/lr,v0:1-(o.y+n-l)/a,v1:1-(o.y+l)/a,w:t,h:n,px:o.x,py:o.y},this.cells[e]}paintCell(e,t,n,s,r,o,l){let a=this.cells[e];a&&(this.a.drawImage(t,n,s,r,o,a.px,a.py,a.w,a.h),this.e.drawImage(t,n,l,r,o,a.px/2,a.py/2,a.w/2,a.h/2))}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new si(n);return s.colorSpace=qt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Ln,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function Mn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Un(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,a])=>o.addColorStop(l,a)),i.fillStyle=o,i.fillRect(e,t,n,s)}function ko(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Un(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}Mn(i,e,t,n,.13)}function Ds(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function Y(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function Ho(i,e,t,n,s,r,o="#d9dde2",l="rgba(40,45,60,0.55)"){Y(i,e-r,t-r,n+2*r,s+2*r,o),Y(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function Ns(i,e,t,n,s,r,o=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),a=o?"#4f78b8":"#5f93d6",c=o?"#86a9d4":"#a6c8ec";l.addColorStop(0,a),l.addColorStop(.55,c),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let h=e+n*r();i.beginPath(),i.moveTo(h,t),i.lineTo(h+n*.18,t),i.lineTo(h-n*.25,t+s),i.lineTo(h-n*.43,t+s),i.fill(),i.restore()}function Gm(i,e,t,n,s,r="#efe6d2"){Y(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Un(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function ih(i,e,t=800){i.font=`${t} ${e}px ${vM}`}function Dt(i,e,t,n,s,r,o,l=800,a=null){ih(i,r,l);let c=r;for(;i.measureText(e).width>s&&c>6;)c-=1,ih(i,c,l);i.textAlign="center",i.textBaseline="middle",a&&(i.lineWidth=Math.max(2,c*.12),i.strokeStyle=a,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function eh(i,e,t,n,s,r,o,l=800,a=null){let c=[...e],h=c.length,d=Math.min(r*1.05,(s-n)/h),p=Math.min(r,d*.95);ih(i,p,l),i.textAlign="center",i.textBaseline="middle",c.forEach((g,_)=>{let S=n+(s-n-d*h)/2+d*(_+.5);a&&(i.lineWidth=Math.max(2,p*.12),i.strokeStyle=a,i.strokeText(g,t,S)),i.fillStyle=o,i.fillText(g,t,S)})}function Ur(i,e,t,n,s,r,o,l=!0){if(Y(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Un(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let a=e+n*.2*o();a<e+n-4;a+=n*(.18+o()*.3)){let c=Math.min(n*(.1+o()*.2),e+n-a),h=s*(.12+o()*.25);i.fillRect(a,t+s-h,c,h)}}i.restore()}function yM(i,e,t,n,s,r,o){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",Y(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,Y(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Un(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var Wm=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],th=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],Xm=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],_M=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Ym(i=0){let e=new yd(i),t=Lt(2024),n=240,s=(u,x,f,m,v,E,b=!1)=>{ko(u,e,f,m,"#ece8e0",0);let T=Lt(E*31+(v?7:0)+5);if(E===0){let C=f*.14,R=m*.22,P=f*.72,A=m*.5;Ho(u,C,R,P,A,5),Ns(u,C,R,P/2,A,T),Ns(u,C+P/2,R,P/2,A,T);let w=T()<.8?P*(.18+T()*.25):0;w&&Gm(u,C+2,R+2,w,A-4,T()<.5?"#efe6d2":"#d9e4ea"),Y(u,C+P/2-2,R,4,A,"#cfd4da"),Y(u,C-8,R+A+5,P+16,6,"#d8d8d4"),Ds(u,C-4,R+A+11,8,60),Ds(u,C+P-4,R+A+11,8,60),v&&(Ur(x,C,R,P,A,b?"#e6eeff":"#ffcf8f",T),w&&Y(x,C+2,R+2,w,A-4,b?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),Y(x,C+P/2-2,R,4,A,"#000"))}else if(E===1){for(let C of[.12,.56]){let R=f*C,P=m*.28,A=f*.3,w=m*.36;Ho(u,R,P,A,w,4),Ns(u,R,P,A,w,T,1),u.fillStyle="rgba(255,255,255,0.35)",u.fillRect(R,P,A,w*.45),Ds(u,R,P+w+6,A,40,.1),v&&T()<.8&&Ur(x,R,P,A,w,T()<.5?"#ffd9a0":"#e8f0ff",T)}u.fillStyle="#c9c9c4",u.beginPath(),u.arc(f*.88,m*.2,9,0,7),u.fill()}else if(E===2){let C=f*.1,R=m*.12,P=f*.8,A=m*.84;Ho(u,C,R,P,A,4),Ns(u,C,R,P/2,A,T),Ns(u,C+P/2,R,P/2,A,T);let w=P*(.2+T()*.3);Gm(u,C+2,R+2,w,A-4,t.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),Y(u,C+P/2-2,R,4,A,"#cfd4da"),v&&(Ur(x,C,R,P,A,b?"#e6eeff":"#ffcb85",T),Y(x,C+2,R+2,w,A-4,b?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),Y(x,C+P/2-2,R,4,A,"#000"))}else if(E===3){ko(u,e,f,m,"#dfe3e6",0);let C=m*.25,R=m*.55;Ns(u,0,C,f,R,T,1);for(let P=0;P<=f;P+=f/4)Y(u,P-2,C,4,R,"#8d98a6");if(Y(u,0,C-4,f,4,"#8d98a6"),Y(u,0,C+R,f,5,"#7d8796"),v)for(let P=0;P<4;P++)T()<.7&&Ur(x,P*f/4+2,C,f/4-4,R,T()<.6?"#f2f6ff":"#ffe2b0",T)}else if(E===4){u.fillStyle="#6b4a35",u.fillRect(0,0,f,m);for(let w=0;w<m;w+=12)Y(u,0,w,f,2,"rgba(30,18,10,0.35)"),Y(u,0,w+2,f,1,"rgba(255,220,180,0.06)");Mn(u,e,f,m,.15);let C=f*.18,R=m*.25,P=f*.64,A=m*.45;Y(u,C-6,R-6,P+12,A+12,"#4a3020"),Y(u,C,R,P,A,"#efe4c8"),u.fillStyle="#5a3a26";for(let w=1;w<6;w++)u.fillRect(C+w*P/6-1.5,R,3,A);for(let w=1;w<3;w++)u.fillRect(C,R+w*A/3-1.5,P,3);if(v){Ur(x,C,R,P,A,"#ffc070",T,!1),x.fillStyle="#000";for(let w=1;w<6;w++)x.fillRect(C+w*P/6-1.5,R,3,A);for(let w=1;w<3;w++)x.fillRect(C,R+w*A/3-1.5,P,3)}}else if(E===5){Y(u,f*.08,0,7,m,"#bdbdb6"),Y(u,f*.08+5,0,2,m,"rgba(0,0,0,0.2)");let C=f*.55,R=m*.3,P=f*.22,A=m*.24;Ho(u,C,R,P,A,3),Y(u,C,R,P,A,"#d6dfe4"),u.fillStyle="rgba(255,255,255,0.4)",u.fillRect(C,R,P,A/2),Ds(u,C,R+A+4,P,50,.12),Y(u,f*.22,m*.55,26,34,"#cfcfca"),Y(u,f*.22+4,m*.55+6,18,12,"#9aa2a8"),v&&Ur(x,C,R,P,A,b?"#eef2ff":"#fff0d8",T,!1)}else if(E===6){let C=f*.4,R=m*.35,P=f*.2,A=m*.28;Ho(u,C,R,P,A,3),Ns(u,C,R,P,A,T,1),Ds(u,C,R+A+4,P,70,.14),v&&Ur(x,C,R,P,A,b?"#e8efff":"#ffd9a0",T)}};for(let u=0;u<7;u++)e.add("win"+u,n,n,(x,f,m,v)=>s(x,f,m,v,!1,u)),e.add("win"+u+"L",n,n,(x,f,m,v)=>s(x,f,m,v,!0,u));for(let u of[0,2,5,6])e.add("win"+u+"C",n,n,(x,f,m,v)=>s(x,f,m,v,!0,u,!0));e.add("plain",n,n,(u,x,f,m)=>{ko(u,e,f,m,"#ece8e0"),Ds(u,f*.3,0,12,m*.6,.06)}),e.add("concrete",n,n,(u,x,f,m)=>{ko(u,e,f,m,"#d9d7d0",60);for(let v=0;v<6;v++)Ds(u,v*41%f,0,10,m*.5,.07)});let r=288,o=(u,x,f,m,v,E,b)=>{let T=(R,P,A,w,L,D=0)=>{u.fillStyle=L,u.beginPath(),u.ellipse(R,P,A,w,D,0,7),u.fill()},C=R=>R[Math.floor(E()*R.length)];if(b==="bakery"){Y(u,x,f,m,v,"#d9b98a"),Un(u,x,f,m,v,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let R=f+v*.28;R<f+v*.72;R+=v*.2){Y(u,x,R,m,5,"#8a5a32");for(let P=x+8;P<x+m-8;P+=15+E()*10){let A=7+E()*6,w=4+E()*3;T(P,R-w,A,w,C(["#c98a3e","#b4732e","#d9a256","#a4632a"])),T(P-A*.2,R-w*1.4,A*.5,w*.35,"rgba(255,230,180,0.5)")}}Y(u,x+4,f+v*.8,m-8,v*.2,"#efe7d8"),Y(u,x+4,f+v*.8,m-8,3,"#9a9a96");for(let R=x+14;R<x+m-10;R+=18)T(R,f+v*.9,6,4,C(["#e8b35a","#c06a3a","#f2d29a"]));Y(u,x+m-64,f+10,52,22,"#7a3e1e"),Dt(u,"\u713C\u304D\u305F\u3066",x+m-38,f+21,46,14,"#fff3dc",800)}else if(b==="books"){Y(u,x,f,m,v,"#6f5a46");for(let R=f+6;R<f+v*.72;R+=v*.17){Y(u,x,R+v*.15,m,4,"#4a3828");for(let P=x+3;P<x+m-4;){let A=3+E()*4,w=v*(.1+E()*.045);Y(u,P,R+v*.15-w,A,w,C(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),P+=A+(E()<.1?4:.6)}}Y(u,x+4,f+v*.76,m-8,v*.24,"#8a7560");for(let R=x+8;R<x+m-22;R+=24)Y(u,R,f+v*.79,20,28,C(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),Y(u,R+3,f+v*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(b==="florist"){Y(u,x,f,m,v,"#e8e2d2"),Un(u,x,f,m,v,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let R=0;R<7;R++){let P=x+8+E()*(m-16),A=v*(.15+E()*.25);for(let w=0;w<A;w+=3.5)T(P+Math.sin(w*.25+R)*4+(E()-.5)*6,f+4+w,3.4,1.8,C(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),E()*3)}for(let R=0;R<3;R++){let P=f+v*(.5+R*.17);Y(u,x,P+14,m,4,"#9a8a76");for(let A=x+10+R*6;A<x+m-8;A+=19){let w=C(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let L=0;L<6;L++){u.strokeStyle="#4a7a3a",u.lineWidth=1.2,u.beginPath();let D=A+(E()-.5)*14;u.moveTo(A,P+10),u.lineTo(D,P-6-E()*8),u.stroke(),T(D,P-8-E()*8,3.2,3,w)}Y(u,A-6,P+4,12,11,C(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(b==="clothes"){Y(u,x,f,m,v,"#efece6"),Un(u,x,f,m,v,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),Y(u,x+6,f+v*.18,m-60,3,"#7a7a7a");for(let P=x+12;P<x+m-66;P+=13+E()*5){u.fillStyle=C(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let A=f+v*.18+3,w=v*(.3+E()*.2);u.beginPath(),u.moveTo(P-5,A),u.lineTo(P+5,A),u.lineTo(P+8,A+w),u.lineTo(P-8,A+w),u.closePath(),u.fill()}let R=x+m-32;T(R,f+v*.16,7,8,"#d8cfc4"),u.fillStyle=C(["#c84a5a","#4a6a9a","#e8d8b8"]),u.beginPath(),u.moveTo(R-14,f+v*.24),u.lineTo(R+14,f+v*.24),u.lineTo(R+18,f+v*.66),u.lineTo(R-18,f+v*.66),u.closePath(),u.fill(),Y(u,R-2,f+v*.66,4,v*.24,"#8a8a8a"),Y(u,x+8,f+v*.74,m*.55,6,"#8a6a4a");for(let P=x+12;P<x+m*.55;P+=14)Y(u,P,f+v*.74-8,11,8,C(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let R=7;for(let P=f+v*.25;P<f+v;P+=v*.22)for(let A=x+3;A<x+m-6;A+=6+E()*8)t(),R=Math.imul(R,31)+Math.floor(E()*997+E()*61+E()*7)|0;b==="cafe"?d(u,x,f,m,v,Lt(R>>>0)):h(u,x,f,m,v,Lt(R>>>0),b==="konbini")}},l=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],a=(u,x,f,m,v,E,b="bbccutp")=>{let T=x+1+E()*3;for(;T<f-4;){let C=b[Math.floor(E()*b.length)],R=l[Math.floor(E()*l.length)],P=E()<.5?"#f8f6f0":l[Math.floor(E()*l.length)],A={b:8+E()*6,c:6+E()*2,u:9+E()*2,t:5+E()*2,p:12+E()*5}[C],w=Math.min(v,{b:14+E()*12,c:11+E()*3,u:10+E()*3,t:18+E()*9,p:14+E()*8}[C]),L=2+Math.floor(E()*5);for(let D=0;D<L&&T+A<f-1;D++,T+=A+.6){let U=m-w;C==="t"?(Y(u,T,U+w*.3,A,w*.7,R),Y(u,T+A*.3,U+w*.1,A*.4,w*.22,R),Y(u,T+A*.28,U,A*.44,w*.11,P==="#f8f6f0"?"#e8e8e4":"#d83a2a"),Y(u,T,U+w*.5,A,w*.22,P)):C==="c"?(Y(u,T,U,A,w,R),Y(u,T,U,A,1.5,"#d8dce0"),Y(u,T,U+w*.35,A,w*.3,P)):C==="u"?(u.fillStyle=R,u.beginPath(),u.moveTo(T,U+2),u.lineTo(T+A,U+2),u.lineTo(T+A-1.2,m),u.lineTo(T+1.2,m),u.fill(),Y(u,T-.4,U,A+.8,2.2,"#f2efe6"),Y(u,T+1,U+w*.45,A-2,w*.25,P)):C==="p"?(u.fillStyle=R,u.beginPath(),u.moveTo(T,m),u.lineTo(T,U+3),u.quadraticCurveTo(T+A/2,U-1.5,T+A,U+3),u.lineTo(T+A,m),u.fill(),Y(u,T+1.5,U+w*.35,A-3,w*.35,P),Y(u,T,U+2,A,1,"rgba(0,0,0,0.18)")):(Y(u,T,U,A,w,R),Y(u,T+1.5,U+w*.3,A-3,w*.4,P)),Y(u,T,U+1,1,w-1,"rgba(255,255,255,0.28)"),Y(u,T+A-1.3,U+1,1.3,w-1,"rgba(0,0,0,0.22)")}T+=1.5+E()*3}},c=(u,x,f,m,v)=>{Un(u,x,m+4,f,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),Y(u,x,m,f,4,"#d3d6da"),Y(u,x,m+3.2,f,.8,"rgba(40,40,50,0.45)");for(let E=x+4+v()*10;E<x+f-6;E+=14+v()*16)Y(u,E,m+.6,5,2.6,v()<.25?"#f2d23a":v()<.2?"#e84a3a":"#ffffff")},h=(u,x,f,m,v,E,b)=>{Y(u,x,f,m,v,b?"#f3f1ea":"#ece5d8"),Y(u,x,f,m,v*.13,b?"#f6f6f2":"#efebe2");for(let P of[.035,.085])Y(u,x,f+v*P,m,2.4,"#ffffff"),Un(u,x,f+v*P+2.4,m,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Un(u,x,f+v*.13,m,v*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let P=0,A=x+18+E()*30;P<2&&A<x+m-40;P++,A+=90+E()*40)Y(u,A+13,f+v*.13,1,6,"#888"),Y(u,A,f+v*.13+6,28,9,l[Math.floor(E()*9)]),Y(u,A+4,f+v*.13+9.5,20,2,"rgba(255,255,255,0.8)");let C=f+v*.25,R=v*.165;Y(u,x,C-4,m,4,"#c9ccd0");for(let P=0;P<4;P++){let A=C+R*(P+1);Un(u,x,A-R,m,R,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),a(u,x,x+m,A,R-6,E),c(u,x,m,A,E)}Y(u,x,C+R*4+4,m,f+v-C-R*4-4,"#5c6068"),Y(u,x,C+R*4+4,m,1.5,"#8a8e96");for(let P=x+2+E()*20;P<x+m;P+=70+E()*12)Y(u,P,C-4,3,R*4+8,"#b4b8be"),Y(u,P+2.2,C-4,.8,R*4+8,"rgba(0,0,0,0.3)");if(b){let P=f+v*.7;Y(u,x,P+26,m,f+v-P-26,"#7a7e86"),Y(u,x,P+26,m,2,"#a8acb2");for(let A=x+2;A<x+m-14;A+=15.5){let w=l[Math.floor(E()*l.length)],L=E()*2;Y(u,A,P+L,14,26-L,w),Y(u,A,P+L,14,5,E()<.6?"#ffffff":"#e8343a"),Y(u,A+2,P+L+8,10,10,E()<.5?"#f2c8a8":l[Math.floor(E()*l.length)]),Y(u,A+13,P+L,1,26-L,"rgba(0,0,0,0.25)")}}},d=(u,x,f,m,v,E)=>{Y(u,x,f,m,v,"#b88a5e"),Un(u,x,f,m,v,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let T=x;T<x+m;T+=9)Y(u,T,f+v*.55,1,v*.45,"rgba(60,35,20,0.25)");let b=f+v*.3;for(let T=0;T<2;T++){let C=b+T*22;Y(u,x+8,C,m*.55,3,"#6a4428"),a(u,x+10,x+m*.55+6,C,14,E,"ctu")}Y(u,x+m*.64,f+v*.22,m*.28,v*.26,"#2e3a32"),Y(u,x+m*.64,f+v*.22,m*.28,2,"#6a4428");for(let T=0;T<5;T++)Y(u,x+m*.67,f+v*(.27+T*.04),m*(.12+E()*.1),1.6,"rgba(240,240,230,0.75)");Y(u,x+4,f+v*.56,m-8,6,"#5a3820"),Y(u,x+4,f+v*.56+6,m-8,v*.08,"#7a5232"),Y(u,x+m*.3,f+v*.47,18,v*.09,"#c8ccd0"),Y(u,x+m*.3+3,f+v*.47+3,12,5,"#3a3a40");for(let T=x+30+E()*20;T<x+m-20;T+=70+E()*20)Y(u,T,f,1,v*.14,"#3a2a1e"),u.fillStyle="#2f3a36",u.beginPath(),u.moveTo(T-9,f+v*.2),u.quadraticCurveTo(T+.5,f+v*.12,T+10,f+v*.2),u.fill(),u.fillStyle="rgba(255,214,150,0.9)",u.beginPath(),u.ellipse(T+.5,f+v*.2,7,2,0,0,7),u.fill();for(let T=x+26+E()*16;T<x+m-26;T+=78+E()*20){Y(u,T-16,f+v*.74,32,4,"#4a2e1c"),Y(u,T-1.5,f+v*.74+4,3,v*.2,"#2e2420"),Y(u,T-8,f+v*.94,16,2,"#2e2420");for(let C of[-24,24])Y(u,T+C-6,f+v*.8,12,3,"#3a2618"),Y(u,T+C+(C<0?-6:4),f+v*.66,2,v*.17,"#3a2618"),Y(u,T+C-5,f+v*.83,1.6,v*.13,"#3a2618"),Y(u,T+C+3.4,f+v*.83,1.6,v*.13,"#3a2618");u.fillStyle="#f4f0e8",u.beginPath(),u.ellipse(T-6,f+v*.74-1.5,3,1.5,0,0,7),u.fill()}},p=(u,x,f,m,v,E,b="")=>{let T=Lt(E);if(ko(u,e,f,m,"#e6e2da"),v==="glass"||v==="door"||v==="konbini"||v==="cafe"){let R=m*.22,P=f-12,A=m*.78-4;Y(u,6,R,P,A,v==="konbini"?"#f6f4ea":v==="cafe"?"#7a5a40":"#8a7a68"),o(u,6,R,P,A,T,b||v),v==="konbini"&&Y(u,6,R+4,P,5,"#ffffff"),v==="door"&&(Y(u,f/2-30,R+18,60,24,"#fff"),Dt(u,"\u55B6\u696D\u4E2D",f/2,R+30,54,18,"#c82828")),v==="glass"&&!b&&T()<.7&&(Y(u,16,R+14,44,60,t.pick(["#f6d34a","#fff","#ff8aa0"])),Dt(u,t.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,R+44,40,16,"#c02020")),yM(u,x,6,R,P,A,v==="konbini"?"#e4eef8":v==="cafe"?"#f0a868":"#f2d2a6"),u.save(),u.globalAlpha=.35,Ns(u,6,R,P,A,T),u.restore(),Y(u,6,R,P,4,"#4a4e57"),Y(x,6,R,P,4,"#000"),v==="door"&&(Y(u,f/2-2,R,4,A,"#4a4e57"),Y(x,f/2-2,R,4,A,"#000"),Y(u,f/2-14,R+A*.45,3,40,"#c0c4c8"),Y(u,f/2+11,R+A*.45,3,40,"#c0c4c8")),v==="cafe"&&(Y(u,f*.62,m-70,46,62,"#2c3a30"),Y(x,f*.62,m-70,46,62,"#000"),Dt(u,"\u30E9\u30F3\u30C1",f*.62+23,m-50,40,13,"#fff",700))}else if(v==="shutter"){let R=m*.2,P=f-12,A=m*.8;Y(u,6,R,P,A,"#b8bcc0");for(let w=R;w<R+A;w+=7)Y(u,6,w,P,2,"rgba(60,64,72,0.35)"),Y(u,6,w+2,P,1,"rgba(255,255,255,0.35)");Y(u,6,R,P,10,"#8f949a"),Mn(u,e,f,m,.12),T()<.5&&(Y(u,f/2-40,R+A*.35,80,26,"#fff"),Dt(u,t.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),f/2,R+A*.35+13,74,16,"#333",700))}else if(v==="noren"){Y(u,0,0,f,m,"#5b3c28");for(let L=0;L<f;L+=10)Y(u,L,m*.2,3,m*.8,"rgba(25,15,8,0.6)");Mn(u,e,f,m,.15);let C=f*.12,R=m*.24,P=f*.76,A=m*.34,w=t.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);Y(u,C,R,P,A,w);for(let L=1;L<3;L++)Y(u,C+P*L/3-1,R+A*.25,2,A*.75,"rgba(255,255,255,0.25)");Dt(u,t.pick(_M),f/2,R+A*.55,P*.9,46,"#f5f0e6",800),Y(u,C,R,P,6,"#3a2a1c"),x.fillStyle="#ffae5c",x.fillRect(C,R+A,P,m-R-A),x.fillStyle="rgba(255,170,90,0.6)",x.fillRect(C,R,P,A),u.fillStyle="#d8352a",u.beginPath(),u.ellipse(f*.9,m*.36,13,19,0,0,7),u.fill(),Dt(u,"\u9152",f*.9,m*.36,16,14,"#fff"),x.fillStyle="#ff6a3a",x.beginPath(),x.ellipse(f*.9,m*.36,13,19,0,0,7),x.fill()}else if(v==="house"){let C=f*.18,R=m*.3,P=f*.34,A=m*.7;Y(u,C-6,R-6,P+12,A+6,"#9a9a96"),Y(u,C,R,P,A,t.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),Y(u,C+P-14,R+A*.5,4,22,"#d8d0c0"),Y(u,C+6,R+10,P-12,A*.25,"rgba(255,255,255,0.18)"),Y(u,f*.62,m*.48,30,22,"#cfcfca"),Y(u,f*.62+6,m*.48+5,18,4,"#555");let w=f*.6,L=m*.22,D=f*.3,U=m*.2;Ho(u,w,L,D,U,3),Ns(u,w,L,D,U,T,1);for(let V=0;V<3;V++)u.fillStyle="#7b5a43",u.fillRect(f*.6+V*22,m-26,16,18),u.fillStyle=t.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),u.beginPath(),u.arc(f*.6+V*22+8,m-32,11,0,7),u.fill();x.fillStyle="#ffd08a",x.beginPath(),x.arc(C+P+14,R+8,6,0,7),x.fill(),T()<.6&&(x.fillStyle="#ffcf8f",x.fillRect(w,L,D,U))}else if(v==="garage"){let R=m*.25,P=f-16,A=m*.75;Y(u,8,R,P,A,"#efefec");for(let w=R;w<R+A;w+=9)Y(u,8,w,P,1.5,"rgba(80,80,90,0.25)");Mn(u,e,f,m,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((u,x)=>{e.add("shop_"+u,n,r,(f,m,v,E)=>p(f,m,v,E,u,100+x)),(u==="glass"||u==="noren"||u==="house")&&e.add("shop_"+u+"2",n,r,(f,m,v,E)=>p(f,m,v,E,u,200+x)),u==="glass"&&["bakery","books","florist","clothes"].forEach((f,m)=>e.add("shop_glass"+(m+3),n,r,(v,E,b,T)=>p(v,E,b,T,"glass",300+m,f)))});for(let u=0;u<14;u++)e.add("hs"+u,512,76,(x,f,m,v)=>{let[E,b]=th[u%th.length],T=Wm[u*7%Wm.length];Y(x,0,0,m,v,E),Y(x,0,0,m,5,"rgba(255,255,255,0.35)"),Y(x,0,v-6,m,6,"rgba(0,0,0,0.18)"),u%3===0&&(Y(x,12,12,v-24,v-24,b),Dt(x,T[0],12+(v-24)/2,v/2,v-30,34,E)),Dt(x,T,m/2+(u%3===0?24:0),v/2+2,m*.7,50,b,900),Mn(x,e,m,v,.08),f.fillStyle=E==="#fff"||E==="#f5efe0"?"#d9d6cc":E,f.fillRect(0,0,m,v),f.globalAlpha=.9,Dt(f,T,m/2+(u%3===0?24:0),v/2+2,m*.7,50,b==="#fff"?"#ffffff":b,900),f.globalAlpha=1});for(let[u,x,f]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])e.add("hs_"+u,512,76,(m,v,E,b)=>{Y(m,0,0,E,b,x),Y(m,0,0,E,5,"rgba(255,255,255,0.35)"),Y(m,0,b-6,E,6,"rgba(0,0,0,0.18)"),Dt(m,u,E/2,b/2+2,E*.7,50,f,900),Mn(m,e,E,b,.08),v.fillStyle=x,v.fillRect(0,0,E,b),v.globalAlpha=.9,Dt(v,u,E/2,b/2+2,E*.7,50,f,900),v.globalAlpha=1});let g=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],_=(u,x,f,m,v,E)=>{u.beginPath(),u.moveTo(x+E,f),u.arcTo(x+m,f,x+m,f+v,E),u.arcTo(x+m,f+v,x,f+v,E),u.arcTo(x,f+v,x,f,E),u.arcTo(x,f,x+m,f,E),u.closePath()};for(let u=0;u<10;u++)e.add("vs"+u,72,288,(x,f,m,v)=>{let E=Xm[u%Xm.length],b=g[(u*5+2)%g.length],T=u%10===3||u%10===6||u%10===8,[C,R]=th[(u*3+1)%th.length],P=T?C==="#fff"||C==="#f5efe0"?"#2b2b33":C:"#fbf7ef",A=T?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][u%4];Y(x,0,0,m,v,"#2a2b30"),_(x,3,3,m-6,v-6,8),x.fillStyle=P,x.fill(),Un(x,3,3,m-6,v-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),x.save(),_(x,8,8,m-16,v-16,6),x.strokeStyle=b,x.globalAlpha=.55,x.lineWidth=7,x.stroke(),x.globalAlpha=1,x.strokeStyle="#fff6fb",x.lineWidth=2.2,x.stroke(),x.restore(),eh(x,E,m/2,18,v-18,50,A,900),Mn(x,e,m,v,.06),Y(f,0,0,m,v,"#000"),_(f,3,3,m-6,v-6,8),f.fillStyle=T?"#3a3a3e":"#4a4844",f.fill(),f.save(),_(f,8,8,m-16,v-16,6),f.strokeStyle=b,f.lineWidth=7,f.stroke(),f.strokeStyle="#ffffff",f.lineWidth=2.5,f.stroke(),f.restore(),eh(f,E,m/2,18,v-18,50,T?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([u,x,f],m)=>e.add("bb"+m,512,240,(v,E,b,T)=>{Y(v,0,0,b,T,"#fbfaf5"),Y(v,0,0,b,T*.62,f),Dt(v,u,b/2,T*.32,b*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Dt(v,x,b/2,T*.8,b*.85,52,"#333",800),Mn(v,e,b,T,.08),Y(E,0,0,b,T,"#555"),E.globalAlpha=.85,Y(E,0,0,b,T*.62,f),Dt(E,u,b/2,T*.32,b*.9,96,"#fff",900),E.globalAlpha=1})),e.add("konbini_band",480,72,(u,x,f,m)=>{Y(u,0,0,f,m,"#fbfbf7"),Y(u,0,m*.62,f,m*.14,"#2a9a4a"),Y(u,0,m*.76,f,m*.12,"#f08a24"),Y(u,0,m*.88,f,m*.12,"#2f6fd8"),Dt(u,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",f/2,m*.32,f*.8,40,"#1d3d8a",900),x.fillStyle="#f3f6f0",x.fillRect(0,0,f,m),Dt(x,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",f/2,m*.32,f*.8,40,"#1d3d8a",900)});for(let u=0;u<3;u++)e.add("vend"+u,128,234,(x,f,m,v)=>{let E=["#d8352a","#2f6fd8","#f4f4f0"][u];Y(x,0,0,m,v,E),Y(x,8,10,m-16,v*.55,"#eef4f8");let b=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let T=0;T<4;T++)for(let C=0;C<6;C++){let R=14+C*17,P=18+T*30;x.fillStyle=b[(T*6+C+u)%b.length],x.fillRect(R,P,11,20),x.fillStyle="rgba(255,255,255,0.5)",x.fillRect(R+2,P+2,3,14),x.fillStyle="#2a2a2a",x.fillRect(R,P+23,11,3)}Y(x,10,v*.62,m-20,22,"#222"),Y(x,m-34,v*.66,14,22,"#bbb"),Y(x,14,v*.82,m-28,22,"#1b1b1b"),Dt(x,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][u],m/2,v*.62+11,m-28,14,"#fff",700),Mn(x,e,m,v,.08),f.fillStyle="#f2f8ff",f.fillRect(8,10,m-16,v*.55);for(let T=0;T<4;T++)for(let C=0;C<6;C++)f.fillStyle=b[(T*6+C+u)%b.length],f.fillRect(14+C*17,18+T*30,11,20);f.fillStyle="#9fd0ff",f.fillRect(10,v*.62,m-20,22)});e.add("ac",128,88,(u,x,f,m)=>{Y(u,0,0,f,m,"#e9e9e4"),Un(u,0,0,f,m,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),u.fillStyle="#9a9c9e",u.beginPath(),u.arc(f*.4,m*.5,m*.36,0,7),u.fill(),u.strokeStyle="#d6d6d2",u.lineWidth=2;for(let v=6;v<m*.36;v+=6)u.beginPath(),u.arc(f*.4,m*.5,v,0,7),u.stroke();for(let v=12;v<m-10;v+=6)Y(u,f*.78,v,f*.16,2,"#b8b8b2")}),e.add("plate",128,64,(u,x,f,m)=>{Y(u,0,0,f,m,"#f2cf3a"),u.strokeStyle="#2f5a2f",u.lineWidth=3,u.strokeRect(3,3,f-6,m-6),Dt(u,"\u54C1\u5DDD 580",f/2,16,f*.6,14,"#2f5a2f",700),Dt(u,"\u3042 12-34",f/2,42,f*.85,28,"#2f5a2f",800)}),e.add("sign_stop",128,112,(u,x,f,m)=>{u.fillStyle="#fff",u.beginPath(),u.moveTo(2,2),u.lineTo(f-2,2),u.lineTo(f/2,m-2),u.fill(),u.fillStyle="#d8231c",u.beginPath(),u.moveTo(10,7),u.lineTo(f-10,7),u.lineTo(f/2,m-12),u.fill(),Dt(u,"\u6B62\u307E\u308C",f/2,34,f*.62,30,"#fff",900)}),e.add("sign_blue",112,112,(u,x,f,m)=>{u.fillStyle="#fff",u.beginPath(),u.arc(f/2,m/2,f/2-1,0,7),u.fill(),u.fillStyle="#1e5bb8",u.beginPath(),u.arc(f/2,m/2,f/2-6,0,7),u.fill(),u.fillStyle="#fff",u.beginPath(),u.moveTo(f/2,22),u.lineTo(f/2+22,50),u.lineTo(f/2+8,50),u.lineTo(f/2+8,88),u.lineTo(f/2-8,88),u.lineTo(f/2-8,50),u.lineTo(f/2-22,50),u.fill()}),e.add("sign_speed",112,112,(u,x,f,m)=>{u.fillStyle="#fff",u.beginPath(),u.arc(f/2,m/2,f/2-1,0,7),u.fill(),u.strokeStyle="#d8231c",u.lineWidth=12,u.beginPath(),u.arc(f/2,m/2,f/2-9,0,7),u.stroke(),Dt(u,"30",f/2,m/2+2,f*.6,50,"#1e4ea8",900)}),e.add("pole_plate",48,144,(u,x,f,m)=>{Y(u,0,0,f,m,"#1d4f9a"),u.strokeStyle="#fff",u.lineWidth=2,u.strokeRect(3,3,f-6,m-6),eh(u,"\u672C\u753A\u4E8C\u4E01\u76EE",f/2,10,m-10,24,"#fff",700)});for(let u=0;u<4;u++)e.add("poster"+u,64,90,(x,f,m,v)=>{let E=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][u];Y(x,0,0,m,v,E),Y(x,4,4,m-8,v*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][u]),Dt(x,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][u],m/2,v*.25,m-12,18,"#fff",900);for(let b=0;b<4;b++)Y(x,8,v*.58+b*8,m-16-b%2*14,3,"rgba(60,60,60,0.5)")});for(let u=0;u<3;u++)e.add("bal"+u,n,88,(x,f,m,v)=>{let E=["#e9e3d6","#dfe6ea","#efe2dc"][u];if(ko(x,e,m,v,E),u===1)for(let b=10;b<m-6;b+=m/6)Y(x,b,10,m/6-8,v-20,"rgba(220,235,245,0.9)"),x.fillStyle="rgba(255,255,255,0.45)",x.fillRect(b,10,m/6-8,(v-20)*.4);else{Y(x,0,0,m,7,"rgba(255,255,255,0.4)");for(let b=m/3;b<m;b+=m/3)Y(x,b-1,0,2,v,"rgba(0,0,0,0.08)")}Y(x,0,v-6,m,6,"rgba(0,0,0,0.12)"),Ds(x,m*.3,v-6,10,10,.2)});e.add("kawara",272,256,(u,x,f,m)=>{Y(u,0,0,f,m,"#58617a");for(let v=0;v<m;v+=16)Un(u,0,v,f,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let v=-4;v<f;v+=20)Y(u,v,0,2,m,"rgba(0,0,0,0.18)");Mn(u,e,f,m,.12)}),e.add("wood",256,256,(u,x,f,m)=>{Y(u,0,0,f,m,"#6d4c37");for(let v=0;v<m;v+=14)Y(u,0,v,f,2,"rgba(25,15,8,0.4)"),Y(u,0,v+2,f,1,"rgba(255,220,180,0.07)");Mn(u,e,f,m,.16)}),e.add("block",256,128,(u,x,f,m)=>{Y(u,0,0,f,m,"#c9c7bf");for(let v=0;v<m;v+=32)for(let E=v/32%2?-32:0;E<f;E+=64)u.strokeStyle="rgba(80,80,80,0.35)",u.lineWidth=2,u.strokeRect(E+1,v+1,62,30);for(let v=0;v<f;v+=64)u.fillStyle="rgba(70,70,70,0.25)",u.fillRect(v+20,40,24,16);Mn(u,e,f,m,.15),Ds(u,0,0,f,40,.1)}),e.add("lantern",64,96,(u,x,f,m)=>{u.fillStyle="#d8352a",u.beginPath(),u.ellipse(f/2,m/2,f/2-2,m/2-8,0,0,7),u.fill();for(let v=16;v<m-12;v+=7)Y(u,4,v,f-8,1.5,"rgba(0,0,0,0.2)");Y(u,f/2-14,2,28,8,"#222"),Y(u,f/2-14,m-10,28,8,"#222"),Dt(u,"\u796D",f/2,m/2,f*.6,28,"#fff",900),x.fillStyle="#ff6a35",x.beginPath(),x.ellipse(f/2,m/2,f/2-2,m/2-8,0,0,7),x.fill()}),e.add("busstop",96,96,(u,x,f,m)=>{u.fillStyle="#fff",u.beginPath(),u.arc(f/2,m/2,f/2-1,0,7),u.fill(),u.strokeStyle="#d8231c",u.lineWidth=8,u.beginPath(),u.arc(f/2,m/2,f/2-6,0,7),u.stroke(),Dt(u,"\u30D0\u30B9\u505C",f/2,m/2,f*.66,20,"#1d3d8a",900)}),e.add("white",16,16,u=>Y(u,0,0,16,16,"#ffffff")),e.add("sign_xing",120,120,(u,x,f,m)=>{u.save(),u.translate(f/2,m/2),u.rotate(Math.PI/4),u.fillStyle="#1b1b1b",u.fillRect(-41,-41,82,82),u.fillStyle="#f2c230",u.fillRect(-37,-37,74,74),u.restore(),u.fillStyle="#1b1b1b",u.fillRect(f/2-22,m/2-6,44,18),u.fillRect(f/2-16,m/2-16,18,12),u.fillRect(f/2+8,m/2-13,5,7),u.beginPath(),u.arc(f/2-12,m/2+15,5,0,7),u.arc(f/2+12,m/2+15,5,0,7),u.fill(),Dt(u,"\u8E0F\u5207",f/2,m/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((u,x)=>e.add("bridge"+x,64,176,(f,m,v,E)=>{Y(f,0,0,v,E,"#b9b5ab"),Mn(f,e,v,E,.2),Y(f,6,6,v-12,E-12,"#a7a398"),eh(f,u,v/2,14,E-14,34,"#3f3c37",800)})),e.add("signal",240,84,(u,x,f,m)=>{Y(u,0,0,f,m,"#4a4d52"),Y(u,0,0,f,5,"#5c6066"),Mn(u,e,f,m,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([v,E])=>{u.fillStyle="#26282c",u.beginPath(),u.arc(E,m/2,33,0,7),u.fill(),u.fillStyle=v,u.beginPath(),u.arc(E,m/2,27,0,7),u.fill()})}),e.add("ped_sig",64,128,(u,x,f,m)=>{Y(u,0,0,f,m,"#3d4045"),u.fillStyle="#5a1814",u.fillRect(8,8,f-16,m/2-12),u.fillStyle="#0d4f44",u.fillRect(8,m/2+4,f-16,m/2-12),u.fillStyle="rgba(255,255,255,0.18)",u.beginPath(),u.arc(f/2,m*.18,6,0,7),u.fill(),u.fillRect(f/2-5,m*.24,10,18)}),e.add("tomare",256,96,(u,x,f,m)=>{u.clearRect(0,0,f,m),u.fillStyle="rgba(244,244,238,0.012)",u.fillRect(0,0,f,m),Dt(u,"\u6B62\u307E\u308C",f/2,m/2+4,f*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((u,x)=>e.add("hodokyo"+x,256,44,(f,m,v,E)=>{Y(f,0,0,v,E,"#1f4f96"),f.strokeStyle="#fff",f.lineWidth=3,f.strokeRect(4,4,v-8,E-8),Dt(f,u,v/2,E/2+1,v*.85,28,"#fff",800)}));let M=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];M.forEach(([u,x,f],m)=>{let v=M[(m+3)%4][0],E=M[(m+1)%4][0];e.add("ekimei"+m,320,124,(b,T,C,R)=>{Y(b,0,0,C,R,"#3a3d42"),Y(b,4,4,C-8,R-8,"#f8f8f3"),Dt(b,x,C/2,20,C*.5,15,"#2b2b2b",700),Dt(b,u,C/2,52,C*.6,40,"#151515",900),Dt(b,f,C/2,80,C*.5,12,"#555",600),Y(b,4,R-30,C-8,26,"#1f9a50"),b.fillStyle="#fff",ih(b,12,700),b.textBaseline="middle",b.textAlign="left",b.fillText("\u2190 "+v,12,R-17),b.textAlign="right",b.fillText(E+" \u2192",C-12,R-17),Mn(b,e,C,R,.06),Y(T,4,4,C-8,R-8,"#8a8a84")}),e.add("ekiplate"+m,220,48,(b,T,C,R)=>{Y(b,0,0,C,R,"#4b3326"),Mn(b,e,C,R,.2),Dt(b,u+"\u99C5",C/2,R/2+1,C*.8,30,"#f3ead8",800)})});for(let u of["l","r"])e.add("chev_"+u,96,120,(x,f,m,v)=>{Y(x,0,0,m,v,"#f4f4ef"),Y(x,4,4,m-8,v-8,"#1e5bb8"),x.fillStyle="#f8f8f4",x.beginPath();let E=u==="r"?1:-1,b=m/2,T=v/2;x.moveTo(b-E*26,T-40),x.lineTo(b+E*22,T),x.lineTo(b-E*26,T+40),x.lineTo(b-E*8,T+40),x.lineTo(b+E*40,T),x.lineTo(b-E*8,T-40),x.closePath(),x.fill()});["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((u,x)=>e.add("tunnel"+x,360,80,(f,m,v,E)=>{Y(f,0,0,v,E,"#e9e7e0"),Y(f,4,4,v-8,E-8,"#24403b"),Mn(f,e,v,E,.08),Dt(f,u,v/2,E*.42,v*.8,38,"#f4f2ea",800),Dt(f,"L = 170 m",v/2,E*.8,v*.4,13,"#c9d6cf",600)})),e.add("yabane",64,112,(u,x,f,m)=>{Y(u,0,0,f,m,"#f6f6f2"),u.fillStyle="#d42a22";for(let v=-20;v<m;v+=26)u.beginPath(),u.moveTo(4,v),u.lineTo(f/2,v+20),u.lineTo(f-4,v),u.lineTo(f-4,v+11),u.lineTo(f/2,v+31),u.lineTo(4,v+11),u.closePath(),u.fill();u.strokeStyle="#222",u.lineWidth=3,u.strokeRect(1.5,1.5,f-3,m-3)}),e.add("xing_plate",128,48,(u,x,f,m)=>{Y(u,0,0,f,m,"#f6f6f2"),u.strokeStyle="#d8231c",u.lineWidth=4,u.strokeRect(3,3,f-6,m-6),Dt(u,"\u8E0F\u5207\u6CE8\u610F",f/2,m/2,f*.8,26,"#d8231c",900)}),e.add("rail",240,80,(u,x,f,m)=>{u.clearRect(0,0,f,m),Y(u,0,0,f,7,"#e9ebee"),Y(u,0,6,f,2,"rgba(60,70,80,0.5)"),Y(u,0,m-6,f,6,"#d5d8dc");for(let v=3;v<f;v+=9)Y(u,v,7,3,m-13,"#e2e5e9"),Y(u,v+2,7,1,m-13,"rgba(70,80,90,0.45)")}),e.add("gogan",256,224,(u,x,f,m)=>{let v=Lt(4242);Y(u,0,0,f,m,"#3d3f3c");let E=38,b=E/Math.SQRT2;u.save(),u.beginPath(),u.rect(0,22,f,m-22),u.clip();for(let T=-2;T*b<m+E;T++)for(let C=-2;C*E<f+E;C++){let R=C*E+(T%2?E/2:0),P=22+T*b,A=.52+v()*.17,w=Math.min(1,Math.max(0,(P-m*.55)/(m*.4))),L=Math.round(255*A*(1-.38*w)),D=`rgb(${L-4},${L-2},${L-9})`;u.fillStyle=D,u.beginPath(),u.moveTo(R,P-b+3.5),u.lineTo(R+b-3.5,P),u.lineTo(R,P+b-3.5),u.lineTo(R-b+3.5,P),u.closePath(),u.fill(),u.fillStyle="rgba(255,255,255,0.12)",u.beginPath(),u.moveTo(R,P-b+3.5),u.lineTo(R+b-3.5,P),u.lineTo(R,P),u.closePath(),u.fill(),w>.3&&v()<.5&&(u.fillStyle=`rgba(70,96,52,${.25+.3*v()})`,u.beginPath(),u.arc(R+(v()-.5)*10,P+6,4+v()*6,0,7),u.fill())}u.restore(),Un(u,0,m*.55,f,m*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),Y(u,0,0,f,22,"#8c8d87"),Y(u,0,18,f,4,"rgba(0,0,0,0.3)"),Y(u,0,0,f,3,"rgba(255,255,255,0.2)"),Mn(u,e,f,m,.12)}),e.add("wrail",240,80,(u,x,f,m)=>{u.clearRect(0,0,f,m),Y(u,0,0,f,9,"#6a4a34"),Y(u,0,0,f,2,"rgba(255,225,190,0.25)"),Y(u,0,8,f,2,"rgba(20,10,5,0.45)"),Y(u,0,m-10,f,10,"#5e412e"),Y(u,0,m-10,f,2,"rgba(255,225,190,0.18)");for(let v=4;v<f;v+=12)Y(u,v,9,5,m-19,"#634632"),Y(u,v,9,1.2,m-19,"rgba(255,225,190,0.18)"),Y(u,v+4,9,1,m-19,"rgba(20,10,5,0.4)");Mn(u,e,f,m,.15)}),e.add("woodwall",n,n,(u,x,f,m)=>{let v=Lt(5151);Y(u,0,0,f,m,"#5e4130");for(let E=0;E<m;E+=16){let b=v();Y(u,0,E,f,16,b<.15?"#6b4b37":b<.3?"#553a2b":"#5e4130"),Y(u,0,E,f,2,"rgba(255,220,180,0.12)"),Y(u,0,E+14,f,2,"rgba(15,8,4,0.45)");for(let T=v()*80;T<f;T+=60+v()*90)Y(u,T,E+2,1.5,12,"rgba(15,8,4,0.35)")}Un(u,0,0,f,m,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),Mn(u,e,f,m,.2)});let y=(u,x,f,m,v,E)=>{let b=Lt(v),T=E===2;Y(u,0,0,f,m,"#4b3426"),Un(u,0,0,f,m,[[0,"rgba(255,230,200,0.08)"],[1,"rgba(0,0,0,0.2)"]]);let C=f*.12,R=m*(T?.3:.17),P=f*.76,A=m*(T?.62:.56);for(let w of[u,x])Y(w,C,R,P,A,"#e9b56c"),Un(w,C,R,P,A,[[0,"rgba(255,240,200,0.55)"],[1,"rgba(110,60,25,0.4)"]]);if(!T)for(let w=R+A*.32;w<R+A-6;w+=A*.22){for(let L=C+4;L<C+P-10;L+=9+b()*12){let D=10+b()*12;Y(u,L,w-D,7,D,["#c0503a","#3a6ab0","#e8c050","#5a9a50","#d07a9a"][Math.floor(b()*5)])}Y(u,C,w,P,5,"#6e4a30")}T&&(Y(u,C,R-m*.12,P,m*.16,"#28356a"),Y(x,C,R-m*.12,P,m*.16,"#000")),Y(u,C+P/2-4,R,8,A,"#4b3426"),Y(x,C+P/2-4,R,8,A,"#000"),Y(u,0,R+A,f,6,"#3a281d"),Mn(u,e,f,m,.15)};for(let u=0;u<4;u++)e.add("shop_p"+u,360,432,(x,f,m,v)=>y(x,f,m,v,6100+u,u));for(let[u,x]of[["win7",0],["win8",4]])e.add(u,360,348,(f,m,v,E)=>s(f,m,v,E,!1,x)),e.add(u+"L",360,348,(f,m,v,E)=>s(f,m,v,E,!0,x));return e}function Zm(i,e){let t=e.img.width,n=e.img.height;for(let s of e.tiles)i.paintCell(s.name,e.img,s.x*t,s.y*n,s.w*t,s.h*n,s.ey*n)}var Km={hi:1152,lo:512};function $m(i,e){let n=i.y+i.rowH+4+12;if(n+e.rows>i.H)return!1;i.x=0,i.y=n,i.rowH=0,i.a.clearRect(0,n-8,lr,i.H-n+8);try{for(let s of e.tiles)i.add(s.name,s.w,s.h,(r,o,l,a)=>{r.clearRect(0,0,l,a),r.drawImage(e.img,s.x,s.y,s.w,s.h,0,0,l,a),o.drawImage(e.img,s.x,s.ey,s.w,s.h,0,0,l,a)})}catch(s){return console.warn("painted houses:",s.message),!1}return!0}function Jm(i){let l=nh(1024,3328),a=l.getContext("2d"),c=Lt(321),h={},d={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},p=(m,v,E)=>{let b=d[m],T=256,C=m==="pine",R=m==="sakura";a.save(),a.translate(v,E),a.beginPath(),a.rect(0,0,512,512),a.clip();let P=[[T,T,C?80:92]];for(let w=0;w<(C?10:14);w++){let L=c()*6.28,D=45+c()*120;P.push([T+Math.cos(L)*D,T+Math.sin(L)*D*(C?.42:.9),Math.min(34+c()*52,232-D)])}let A=R?2300:C?2600:2300;for(let w=0;w<A;w++){let L=P[Math.floor(c()*P.length)],D=c()*6.28,U=Math.sqrt(c())*L[2],V=L[0]+Math.cos(D)*U,z=L[1]+Math.sin(D)*U*(C?.45:1),O=U/L[2],k=Math.min(4,Math.max(0,Math.floor(.55+c()*2.7+(O>.82?.5:0))));if(a.fillStyle=b[k],R){let W=7+c()*8;a.beginPath(),a.arc(V,z,W,0,7),a.fill(),c()<.25&&(a.fillStyle=b[4],a.beginPath(),a.arc(V-W*.3,z-W*.3,W*.4,0,7),a.fill())}else if(C)a.save(),a.translate(V,z),a.rotate((c()-.5)*1.2),a.fillRect(-11,-1.6,22,3.2),a.restore();else if(m==="momiji"){let W=8+c()*7;a.save(),a.translate(V,z),a.rotate(c()*6.28),a.beginPath();for(let $=0;$<10;$++){let le=$%2?W*.42:W,Me=$/10*6.2832;a.lineTo(Math.cos(Me)*le,Math.sin(Me)*le)}a.closePath(),a.fill(),a.restore()}else if(m==="ginkgo"){let W=9+c()*7;a.save(),a.translate(V,z),a.rotate(c()*6.28),a.beginPath(),a.moveTo(0,0),a.arc(0,0,W,-.95,.95),a.closePath(),a.fill(),a.restore()}else{let W=9+c()*10;a.beginPath(),a.ellipse(V,z,W,W*.55,c()*6.28,0,7),a.fill()}}for(let w=0;w<90;w++){let L=c()*6.28,D=150+c()*85,U=T+Math.cos(L)*D,V=T+Math.sin(L)*D*(C?.45:.92);a.fillStyle=b[1+Math.floor(c()*4)],C?(a.save(),a.translate(U,V),a.rotate((c()-.5)*1.2),a.fillRect(-9,-1.6,18,3.2),a.restore()):(a.beginPath(),a.arc(U,V,R?6+c()*6:7+c()*6,0,7),a.fill())}if(R)for(let w=0;w<14;w++){a.strokeStyle="rgba(150,90,100,0.35)",a.lineWidth=1.5;let L=T+(c()-.5)*300,D=T+60+c()*120;a.beginPath(),a.moveTo(L,D),a.lineTo(L+(c()-.5)*40,D-20-c()*30),a.stroke()}a.restore(),h[m]={u0:v/1024,u1:(v+512)/1024,v0:1-(E+512)/3328,v1:1-E/3328}},g=(m,v,E,b)=>{a.save(),a.translate(v,E),a.beginPath(),a.rect(0,0,512,512),a.clip();let T=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],C=b?120:170;for(let R=0;R<C;R++){let P=256+(c()-.5)*(b?330:380)*Math.sqrt(c()),A=150+c()*(b?230:300)*(1-Math.abs(P-256)/300),w=(P-256)*.35+(c()-.5)*90,L=9+c()*9,D=P+w,U=512-A,V=Math.min(4,Math.floor(c()*2.2+A/380*2.6)),z=a.createLinearGradient(0,512,0,U);z.addColorStop(0,T[0]),z.addColorStop(.6,T[Math.max(1,V-1)]),z.addColorStop(1,T[V]),a.fillStyle=z,a.beginPath(),a.moveTo(P-L/2,512),a.quadraticCurveTo(P-L/2+w*.3,512-A*.55,D,U),a.quadraticCurveTo(P+L/2+w*.3,512-A*.5,P+L/2,512),a.fill()}if(b)for(let R=0;R<16;R++){let P=110+c()*290,A=150+c()*200,w=c();if(a.strokeStyle="#3e7334",a.lineWidth=5,a.beginPath(),a.moveTo(P+(c()-.5)*20,512),a.quadraticCurveTo(P+(c()-.5)*30,(A+512)/2,P,A),a.stroke(),w<.55){a.fillStyle="#fbfaf2";for(let L=0;L<12;L++){let D=L/12*6.283;a.beginPath(),a.ellipse(P+Math.cos(D)*11,A+Math.sin(D)*11,9,4.5,D,0,7),a.fill()}a.fillStyle="#f2c230",a.beginPath(),a.arc(P,A,8,0,7),a.fill()}else if(w<.85)a.fillStyle="#f6c62e",a.beginPath(),a.arc(P,A,15,0,7),a.fill(),a.fillStyle="#ffe27a",a.beginPath(),a.arc(P-3,A-3,8,0,7),a.fill();else{a.fillStyle="#9b7fd6";for(let L=0;L<6;L++)a.beginPath(),a.arc(P+(c()-.5)*16,A+(c()-.5)*16,6,0,7),a.fill()}}a.restore(),h[m]={u0:v/1024,u1:(v+512)/1024,v0:1-(E+512)/3328,v1:1-E/3328}},_=(m,v,E)=>{let b=Lt(97);a.save(),a.translate(v,E),a.beginPath(),a.rect(0,0,512,512),a.clip(),a.lineCap="round";let T=(C,R,P,A,w,L)=>{let D=C+Math.cos(P)*A,U=R+Math.sin(P)*A;if(a.strokeStyle=L>3?"#76605f":L>1?"#6c5458":"#62494f",a.lineWidth=w,a.beginPath(),a.moveTo(C,R),a.lineTo(D,U),a.stroke(),L<=0||w<.7)return;let V=2+(b()<.4?1:0);for(let z=0;z<V;z++){let O=P+(b()-.5)*1.1+(z-(V-1)/2)*.42;O=O*.8+-Math.PI/2*.2,T(D,U,O,A*(.62+b()*.2),w*.68,L-1)}};for(let C=0;C<6;C++)T(256+(b()-.5)*40,500,-Math.PI/2+(b()-.5)*.9,110+b()*50,5.6,6);a.restore(),h[m]={u0:v/1024,u1:(v+512)/1024,v0:1-(E+512)/3328,v1:1-E/3328}},S=(m,v,E,b,T,C=4,R=!1)=>{let P=Lt(b),A=1024,w=504,L=R?246/504:1;a.save(),a.translate(v,E+8*L),a.beginPath(),a.rect(0,0,512,w*L),a.clip(),a.scale(.5,L);let D=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],U=$=>{let le=$/A;return(.5+.5*Math.min(1,le/.45)**.8)*(1-.4*Math.max(0,(le-.9)/.1))},V=($,le,Me,be)=>{le=Math.min(le,w*.985);let K=$+Me,j=w-le,xe=$+Me*.25,Ce=w-le*.62-Math.abs(Me)*.35;a.moveTo($-be/2,w),a.quadraticCurveTo(xe-be*.42,Ce,K,j),a.quadraticCurveTo(xe+be*.42,Ce+be*.5,$+be/2,w),a.closePath()},z=[];for(let $=24+P()*24;$<A-20;$+=($<A*.25?56:44)+P()*26)z.push($);let O=()=>z[Math.floor(P()*z.length)],k=($,le,Me,be,K,j,xe,Ce,Ae)=>{let Pe=D.map(()=>[]);for(let We=0;We<$;We++){let Xe=O(),we=Xe+(P()-.5)*34,Ze=U(we),te=we/A,Te=w*(le+P()*(Me-le))*Ze*1.12,X=(P()-.5)*be+(we-A*.45)*.12;Pe[Math.min(8,Ce+Math.floor(P()*(Ae-Ce+1)+te*1.2))].push([we,Te,X,K+P()*(j-K)])}Pe.forEach((We,Xe)=>{if(!We.length)return;let we=a.createLinearGradient(0,w,0,w*(1-Me*.8));we.addColorStop(0,D[xe]),we.addColorStop(.55,D[Math.round((xe+Xe)/2)]),we.addColorStop(1,D[Xe]),a.fillStyle=we,a.beginPath();for(let Ze of We)V(Ze[0],Ze[1],Ze[2],Ze[3]);a.fill()})};k(360,.25,.55,150,12,22,0,2,3),k(240,.4,.78,260,10,17,1,4,6);let W=[];for(let $=0;$<C;$++){let le=A*(.14+P()*.74),Me=U(le);W.push({fx:le,fy:Math.max(56,w-w*(.56+P()*.38)*Me*1.05),kind:P()<T?0:1,sz:.85+P()*.4,tilt:.72+P()*.28,rot:P()*6.28,sx:le+(P()-.5)*60})}a.lineCap="round";for(let $ of W)a.strokeStyle="#2c6623",a.lineWidth=6,a.beginPath(),a.moveTo($.sx,w),a.quadraticCurveTo(($.sx+$.fx)/2+(P()-.5)*40,(w+$.fy)/2,$.fx,$.fy+8),a.stroke();k(150,.5,.92,330,9,16,2,6,7);for(let $ of W){if(a.save(),a.translate($.fx,$.fy),a.scale(1,$.tilt),$.kind===0){let le=38*$.sz;for(let Me=0;Me<16;Me++){let be=$.rot+Me/16*6.283;a.fillStyle=Math.sin(be)>.4?"#e2e3ea":"#fdfdf6",a.beginPath(),a.ellipse(Math.cos(be)*le*.56,Math.sin(be)*le*.56,le*.48,le*.14,be,0,7),a.fill()}a.fillStyle="#f2b51a",a.beginPath(),a.arc(0,0,le*.28,0,7),a.fill(),a.fillStyle="#fbe060",a.beginPath(),a.arc(-le*.07,-le*.07,le*.14,0,7),a.fill()}else{let le=40*$.sz;for(let Me=0;Me<5;Me++){let be=$.rot+Me/5*6.283;a.fillStyle="#fccc1e",a.beginPath(),a.ellipse(Math.cos(be)*le*.52,Math.sin(be)*le*.52,le*.52,le*.38,be,0,7),a.fill()}for(let Me=0;Me<5;Me++){let be=$.rot+Me/5*6.283;a.fillStyle="#ffe873",a.beginPath(),a.ellipse(Math.cos(be)*le*.62,Math.sin(be)*le*.62-3,le*.26,le*.15,be,0,7),a.fill()}a.fillStyle="#e39b14",a.beginPath(),a.arc(0,0,le*.2,0,7),a.fill()}a.restore()}k(40,.42,.85,280,8,14,3,6,7),a.restore(),h[m]={u0:v/1024,u1:(v+512)/1024,v0:1-(E+512*L)/3328,v1:1-(E+8*L)/3328}},M=(m,v,E,b)=>{let T=Lt(b),C=["#173d1d","#21512a","#2f6a33","#46853c","#64a048","#8dbd58","#b6d872"];a.save(),a.translate(v,E),a.beginPath(),a.rect(0,0,512,512),a.clip();let R=[];for(let P=0;P<15;P++){let A=(P+T()*.6)/15,w=40+A*432,L=500-300*Math.sqrt(Math.max(0,1-((w-256)/232)**2));R.push([w,L+60+T()*50,54+T()*46])}for(let P=0;P<2600;P++){let A=R[Math.floor(T()*R.length)],w=T()*6.283,L=Math.sqrt(T())*A[2],D=A[0]+Math.cos(w)*L,U=Math.min(505,A[1]+Math.sin(w)*L*.85),V=Math.sin(w)<-.2?1:0,z=Math.max(0,Math.min(6,Math.floor(T()*2.4+(1-U/512)*3.2+V*1.3+L/A[2]*.8)));a.fillStyle=C[z],a.beginPath(),a.ellipse(D,U,7+T()*7,4+T()*4,T()*6.28,0,7),a.fill()}for(let P=0;P<130;P++){let A=R[Math.floor(T()*R.length)],w=-Math.PI*(.1+T()*.8),L=(.35+T()*.6)*A[2],D=A[0]+Math.cos(w)*L,U=A[1]+Math.sin(w)*L*.85;if(U>470)continue;let V=6+T()*5,z=T()*6.28,O=T()<.12;a.fillStyle=O?"#f3d2dc":"#fbfbf6";for(let k=0;k<5;k++){let W=z+k/5*6.283;a.beginPath(),a.ellipse(D+Math.cos(W)*V*.55,U+Math.sin(W)*V*.5,V*.5,V*.36,W,0,7),a.fill()}a.fillStyle="#d9b628",a.beginPath(),a.arc(D,U,V*.22,0,7),a.fill()}a.restore(),h[m]={u0:v/1024,u1:(v+512)/1024,v0:1-(E+512)/3328,v1:1-E/3328}},y=(m,v,E,b)=>{let T=Lt(b),C=1024,R=512;a.save(),a.translate(v,E),a.beginPath(),a.rect(0,0,512,250),a.clip(),a.scale(.5,250/512);let P=["#0c2a12","#143a19","#1f4f23","#2e682f","#46843a","#66a047","#8ebd58","#b6d874"],A=U=>Math.max(0,1-((U-C/2)/(C*.47))**2)**.6,w=(U,V,z,O)=>{let k=U+z,W=R-V,$=U+z*.3,le=R-V*.6;a.moveTo(U-O/2,R),a.quadraticCurveTo($-O*.5,le,k,W),a.quadraticCurveTo($+O*.5,le+O*.4,U+O/2,R),a.closePath()},L=(U,V,z,O,k,W,$)=>{let le=P.map(()=>[]);for(let Me=0;Me<U;Me++){let be=C/2+(T()-.5)*C*.8*Math.sqrt(T()),K=A(be),j=R*.9*K*(V+T()*(z-V)),xe=(be-C/2)*.22+(T()-.5)*120,Ce=Math.min(7,W+Math.floor(T()*($-W+1)));K>.03&&le[Ce].push([be,j,xe,O+T()*(k-O)])}le.forEach((Me,be)=>{if(!Me.length)return;let K=a.createLinearGradient(0,R,0,R*.1);K.addColorStop(0,P[Math.max(0,be-3)]),K.addColorStop(1,P[be]),a.fillStyle=K,a.beginPath();for(let j of Me)w(j[0],j[1],j[2],j[3]);a.fill()})};L(150,.35,.7,26,46,1,3),L(110,.5,.92,22,38,3,5);let D=[["#d27ac4","#f4bce6"],["#9f74da","#d2b6f4"],["#fbfbf6","#ffffff"],["#ea88b2","#fcc8de"]];for(let U=0;U<48;U++){let V=C/2+(T()-.5)*C*.84,z=A(V),O=R-R*.9*z*(.55+T()*.42),[k,W]=D[Math.floor(T()*D.length)],$=22+T()*12,le=T()*6.28;if(!(z<.15)){a.fillStyle=k;for(let Me=0;Me<5;Me++){let be=le+Me*1.2566;a.beginPath(),a.ellipse(V+Math.cos(be)*$*.55,O+Math.sin(be)*$*.45,$*.52,$*.36,be,0,7),a.fill()}a.fillStyle=W;for(let Me=0;Me<5;Me++){let be=le+Me*1.2566;a.beginPath(),a.ellipse(V+Math.cos(be)*$*.45,O+Math.sin(be)*$*.35-3,$*.25,$*.16,be,0,7),a.fill()}a.fillStyle=k==="#fbfbf6"?"#f2b51a":"#6e2f62",a.beginPath(),a.arc(V,O,$*.18,0,7),a.fill()}}L(34,.4,.75,20,34,4,6),a.restore(),h[m]={u0:v/1024,u1:(v+512)/1024,v0:1-(E+250)/3328,v1:1-E/3328}};_("twigs",0,0),M("flowerbush",512,0,6151),p("leafA",0,512),p("leafB",512,512),p("sakura",0,1024),p("pine",512,1024),p("momiji",0,1536),p("ginkgo",512,1536),g("grass",0,2304,!1),g("flowers",512,2304,!0),S("bankA",0,2816,4111,.7),S("bankB",512,2816,4127,.35),y("bedA",0,2048,7741),S("bankC",512,2048,4133,0,0,!0);let u=new si(l);u.colorSpace=qt,u.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let x=1-2816/3328,f=1-2824/3328;return{tex:u,cells:h,tuftV:[x,1-2304/3328,f,(x+f)/2]}}var fn=[1,1,1],Se={pole:ve("#b1b0a9"),metal:ve("#8d9198"),black:ve("#2a2b30"),yellow:ve("#f2c230"),white:ve("#f4f3ee"),trans:ve("#a0a3a8"),lampPole:ve("#727780"),lampHead:ve("#dcdcd6"),trunk:ve("#6a5444"),trunkDark:ve("#4b3a33"),bark:ve("#7a6556"),leaf:ve("#86ba4c"),leafShade:ve("#2c6640"),sakura:ve("#ffd3e3"),sakuraShade:ve("#de94b4"),pine:ve("#55874c"),pineShade:ve("#1d4632"),cedar:ve("#41713e"),cedarShade:ve("#1b3e2a"),roof:ve("#bdbbb3"),parapet:ve("#dcdad2"),pipe:ve("#c4c4bf"),orange:ve("#f07a22"),red:ve("#d8352a"),vermilion:ve("#e2482c"),concrete:ve("#c9c7c0"),stone:ve("#a8a69e"),terracotta:ve("#b8653d"),rail:ve("#eeeeea")},Td=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(ve),Us=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(ve),bM=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(ve),MM=["#c62f2a","#2b46a6","#7b3c9e","#b8336f","#a8282a","#273b86"].map(ve),Ed=null;function rg(i){Ed=i}var gi=i=>Ed.uv(i),Wo=gi,og=(i,e)=>{let t=1;for(;Ed.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function ag(i,e,t,n,s=0){let r=new et().makeRotationY(s);r.setPosition(e,t,n);let o=new et().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var wd=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let l=e[5];(l==="g"&&e[6]==="l"||l==="d"||l==="k"||l==="c"||l==="n"||l==="p")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},on=(i,e,t,n,s,r,o,l=fn)=>{wd(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,gi(o)),i.litV=0},ss=(i,e,t,n,s,r,o,l=fn)=>{wd(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,gi(o)),i.litV=0},rs=(i,e,t,n,s,r,o,l=fn)=>{wd(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,gi(o)),i.litV=0},Go=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?gi(r):void 0),SM=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function lg(i){return SM.map(e=>new H(e[0],e[1],e[2]).applyMatrix4(i))}function Ad(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,Se.pole);for(let c=0;c<5;c++)s.cyl(0,.25+c*.3,0,.185,.185,.15,10,c%2?Se.black:Se.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,Se.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,Se.metal);let o=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let c of o)s.cyl(0,r-.53,c,.05,.035,.17,6,Se.white);for(let c of l)s.cyl(0,r-1.65,c,.045,.03,.15,6,Se.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,Se.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,Se.trans),s.box(-.06,7.2,.12,.06,7.35,.26,Se.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,Se.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,Se.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,Se.concrete);for(let c=2.4,h=0;c<r-2;c+=.45,h++)s.rod([0,c,0],[h%2?.3:-.3,c,0],.015,.015,3,Se.metal);return i.atlas.setM(e),on(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&on(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(c=>[0,r-.4,c]),...l.map(c=>[0,r-1.52,c]),[0,5.72,-.3],[0,5.72,.3]].map(c=>new H(c[0],c[1],c[2]).applyMatrix4(e))}var sh=new H;function cr(i,e,t,n,s,r){i.lamps&&(sh.set(t,n,s).applyMatrix4(e),i.lamps.push(sh.x,sh.y,sh.z,r))}function Rd(i,e,t,n={}){let s=i.color;s.setM(e),cr(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,Se.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,Se.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,Se.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,Se.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,fn);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],fn,{u0:0,u1:1,v0:0,v1:1})}function cg(i,e,t=.04){let n=i.color;n.setM(e),cr(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,Se.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,Se.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,Se.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,fn),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],fn,{u0:0,u1:1,v0:0,v1:1})}function Vo(i,e,t,n,s,r,o=!1,l=!1){let a=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let c=0;c<4;c++){let[h,d]=a[c],[p,g]=a[(c+1)%4];i.quad([h*n,e,d*n],[h*s,t,d*s],[p*s,t,g*s],[p*n,e,g*n],r)}o&&s>.001&&i.quad([-s,t,-s],[-s,t,s],[s,t,s],[s,t,-s],r),l&&i.quad([-n,e,-n],[n,e,-n],[n,e,n],[-n,e,n],r)}var TM=ve("#202127");function vl(i,e){let t=i.color;t.setM(e),cr(i,e,0,3.4,0,.9);let n=TM,s={noBottom:!0};t.cyl(0,0,0,.12,.1,.28,6,n),t.cyl(0,.28,0,.065,.05,2.8,6,n,!1),Vo(t,3.04,3.17,.05,.17,n,!0);for(let[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.box(r*.155-.018,3.17,o*.155-.018,r*.155+.018,3.6,o*.155+.018,n,null,s);t.box(-.165,3.6,-.165,.165,3.64,.165,n,null,s),Vo(t,3.64,3.84,.23,.05,n),Vo(t,3.6,3.64,.2,.23,n,!1,!0),t.cyl(0,3.84,0,.035,0,.12,4,n,!1),i.lamp.setM(e),i.lamp.box(-.14,3.17,-.14,.14,3.6,.14,fn),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],fn,{u0:0,u1:1,v0:0,v1:1})}function Cd(i,e,t){let n=Math.floor(t()*3),s=[Se.red,ve("#2f6fd8"),Se.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,zn(s,.8)),i.atlas.setM(e),on(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function Md(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,ve("#e6e6e1")),i.atlas.setM(e),on(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function ug(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ve("#c8ccd2"),ve("#c0392b"),ve("#2c6fb7"),ve("#2b2b2b"),ve("#e8c84a"),ve("#e98fb0")]);for(let o of[-.52,.52])for(let l=0;l<12;l++){let a=l/12*Math.PI*2,c=(l+1)/12*Math.PI*2;n.rod([o+Math.cos(a)*.33,.34+Math.sin(a)*.33,0],[o+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],.022,.022,3,Se.black)}let r=(o,l)=>n.rod(o,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,Se.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,Se.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,Se.metal)}function hg(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,Se.orange),t.cyl(0,.04,0,.16,.03,.68,10,Se.orange),t.cyl(0,.32,0,.115,.095,.12,10,Se.white,!1)}function Pd(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,Se.terracotta),i.leaf.setM(e),zi(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}var EM=[[.35,.455],[.455,.56],[.56,.665]],jm=ve("#6b4a32");function wM(i,e,t,n,s){let r=i.color,o=i.atlas,l=.62,a=gi("shop_p1"),c=a.u1-a.u0,h=a.v1-a.v0;r.setM(e),o.setM(e);for(let d of[-1,1])r.box(t+d*l-.03,0,n-.32,t+d*l+.03,1.32,n+.24,jm);for(let d=0,p=Math.floor(s()*3);d<3;d++){let g=.2+d*.4,_=g+.36,S=n-.26+d*.16,M=S+.14,[y,u]=EM[(d+p)%3];o.quad([t+l,g,S],[t-l,g,S],[t-l,_,M],[t+l,_,M],fn,{u0:a.u0+c*.14,u1:a.u0+c*.86,v0:a.v1-h*u,v1:a.v1-h*y}),r.box(t-l,g-.05,S-.06,t+l,g,S+.12,jm)}}function fg(i,e,t,n=.8){i.leaf.setM(e),zi(i,[0,n*.3,0],0,n*.6,0,n,t()<.5?"leafA":"leafB",7,t,[1,1,1],[.5,.58,.66],[0,n*1.4])}function ur(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,Se.metal),i.atlas.setM(e),n<0?rs(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):ss(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function Id(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?Se.white:Se.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,Se.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,Se.black),i.atlas.setM(e),t<0?rs(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):ss(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function dg(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,ve("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,ve("#f0a020"))}function Ld(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,Se.orange);let s=0,r=3.25,o=.42,l=14;for(let a=0;a<l;a++){let c=a/l*Math.PI*2,h=(a+1)/l*Math.PI*2,d=(p,g,_)=>[t*_,r+Math.sin(p)*g,s+Math.cos(p)*g-.25];Go(n,d(0,0,-.02),d(t>0?h:c,o,-.02),d(t>0?c:h,o,-.02),Se.orange),Go(n,d(0,0,-.035),d(t>0?h:c,o*.86,-.035),d(t>0?c:h,o*.86,-.035),ve("#dfe9f2"))}}var Xo=null;function pg(i){Xo=i}var gl=1;function mg(i){gl=i}function zi(i,e,t,n,s,r,o,l,a,c,h,d,p=0){let g=Xo[o],_=1+(1-gl)*.35;l=Math.max(2,Math.round(l*gl));for(let S=0;S<l;S++){let M=a()*2-1,y=a()*2-1,u=a()*2-1;p&&(y=1.2+a());let x=Math.hypot(M,y,u)||1;M/=x,y/=x,u/=x;let f=-u,m=0,v=M;x=Math.hypot(f,v),x<.1&&(f=1,v=0,x=1),f/=x,v/=x;let E=y*v-u*m,b=u*f-M*v,T=M*m-y*f,C=Math.PI+(a()-.5)*.9,R=Math.cos(C),P=Math.sin(C),A=f*R+E*P,w=m*R+b*P,L=v*R+T*P,D=E*R-f*P,U=b*R-m*P,V=T*R-v*P,z=r*(1.3+a()*.45)*_/2,O=t+(a()-.5)*r*.6,k=n+(a()-.5)*r*(p?.15:.5),W=s+(a()-.5)*r*.6,$=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([be,K])=>[O+(A*be+D*K)*z,k+(w*be+U*K)*z*(p?.6:1),W+(L*be+V*K)*z]),le=$.map(be=>{let K=be[0]-e[0],j=be[1]-e[1],xe=be[2]-e[2],Ce=Math.hypot(K,j,xe)||1;K/=Ce,j/=Ce,xe/=Ce;let Ae=be[0]-t,Pe=be[1]-n,We=be[2]-s;return Ce=Math.hypot(Ae,Pe,We)||1,[K*.7+Ae/Ce*.3,j*.7+Pe/Ce*.3+(p?.5:0),xe*.7+We/Ce*.3]}),Me=$.map(be=>ld(h,c,.45+.55*Math.max(0,Math.min(1,(be[1]-d[0])/(d[1]-d[0])))));i.leaf.card($,le,g,Me)}}function Dd(i,e,t,n="grass",s=1){let r=Xo[n],o=(.42+t()*.38)*s,l=o*1.2,a=t()*Math.PI,c=[0,1,0],h=[c,c,c,c],d=[.6,.64,.58],p=[1,1,1];i.leaf.setM(e);for(let g of[a,a+Math.PI/2]){let _=Math.cos(g)*l/2,S=Math.sin(g)*l/2;i.leaf.card([[-_,-.05,-S],[_,-.05,S],[_,o,S],[-_,o,-S]],h,r,[d,d,p,p])}}function xl(i,e,t,n=1){let s=Xo.flowerbush;if(!s)return;let r=(.8+t()*.35)*n,o=r*1.7,l=t()*Math.PI,a=[0,1,0],c=[a,a,a,a],h=[.6,.64,.6],d=[1,1,1];i.leaf.setM(e);for(let p of[l,l+Math.PI/2]){let g=Math.cos(p)*o/2,_=Math.sin(p)*o/2;i.leaf.card([[-g,-.06,-_],[g,-.06,_],[g,r,_],[-g,r,-_]],c,s,[h,h,d,d])}}function oh(i,e,t,n=1){let s=Xo.bedA;if(!s)return;let r=(.36+t()*.16)*n,o=r*2,l=t()*Math.PI,a=[0,1,0],c=[a,a,a,a],h=[.6,.64,.6],d=[1,1,1];i.leaf.setM(e);for(let p of[l,l+Math.PI/2]){let g=Math.cos(p)*o/2,_=Math.sin(p)*o/2;i.leaf.card([[-g,-.04,-_],[g,-.04,_],[g,r,_],[-g,r,-_]],c,s,[h,h,d,d])}}var AM=[.62,.68,.74],gg=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],RM=[0,1,2,0,2,3,0,3,4],CM=gg.map(([,i])=>ld(AM,fn,i));function Nd(i,e,t,n,s,r,o,l=1,a=null){let c=Xo[a||(o()<.5?"bankA":"bankB")],h=.82*l,d=(h+.06)*2.03,p=i.leaf;for(let g of RM){let[_,S]=gg[g],M=(_-.5)*d;p.vtx(e+s*M,t+S*(h+.06)-.06,n+r*M,0,1,0,c.u0+(c.u1-c.u0)*_,c.v0+(c.v1-c.v0)*S,CM[g])}}var vg=()=>gl>.7?.9:1.25;function PM(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,Se.trunk);for(let c=0;c<3;c++){let h=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(h)*1.1*n,s*.68,Math.sin(h)*1.1*n],.09*n,.05*n,5,Se.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],a=7+Math.floor(t()*3);for(let c=0;c<a;c++){let h=t()*6.28,d=(.6+t())*1.3*n;zi(i,r,Math.cos(h)*d,s*(.62+t()*.3),Math.sin(h)*d,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],l)}zi(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],l)}function Qm(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,Se.trunkDark);let r=[];for(let c=0;c<5;c++){let h=c/5*6.28+t()*.8,d=(2.2+t()*1.6)*n,p=[Math.cos(h)*d,s*(.62+t()*.18),Math.sin(h)*d];i.color.rod([0,s*.4,0],p,.12*n,.05*n,5,Se.trunkDark),r.push(p),i.color.rod(p,[p[0]*1.25,p[1]+.9*n,p[2]*1.25],.05*n,.02*n,4,Se.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],l=[s*.5,s*1.1],a=[.72,.62,.72];for(let c of r)for(let h=0;h<2;h++)zi(i,o,c[0]+(t()-.5)*1.4*n,c[1]+t()*.9*n,c[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],a,l);zi(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],a,l)}function IM(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,l=[r*.4,o*.45,.2],a=[r,o*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,Se.trunkDark),s.rod(l,a,.15*n,.09*n,6,Se.trunkDark),i.leaf.setM(e);let c=[[a[0],a[1]+.3,a[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[a[0]+.9*n,a[1]-.6,.8,1.1]];for(let[h,d,p,g]of c)s.rod(h>l[0]?l:a,[h,d-.2,p],.07*n,.04*n,4,Se.trunkDark),zi(i,[h,d-.8,p],h,d,p,g*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[d-.7,d+.5],1)}function LM(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,Se.trunkDark);let r=[];for(let c=0;c<5;c++){let h=c/5*6.28+t()*.8,d=(1.8+t()*1.4)*n,p=[Math.cos(h)*d,s*(.55+t()*.2),Math.sin(h)*d];i.color.rod([0,s*.38,0],p,.09*n,.04*n,5,Se.trunkDark),r.push(p)}i.leaf.setM(e);let o=[0,s*.7,0],l=[s*.45,s*1.1],a=[.62,.52,.56];for(let c of r)zi(i,o,c[0],c[1]+.4*n,c[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],a,l);zi(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],a,l)}function DM(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,Se.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],l=[.68,.6,.52];for(let a=0;a<7;a++){let c=s*(.34+a*.09),h=(2.1-a*.24)*n,d=t()*6.28;zi(i,r,Math.cos(d)*h*.35,c,Math.sin(d)*h*.35,Math.max(.7,h)*1.05,"ginkgo",5,t,[1,1,1],l,o)}}function NM(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,ve("#eeece6"));for(let c=0;c<7;c++){let h=t.range(.4,r*.85),d=h/r;s.cyl(o*d,h,0,.135*n*(1-d*.6),.13*n*(1-d*.6),.05,7,ve("#2b2b30"),!1)}for(let c=0;c<7;c++){let h=r*(.45+t()*.5),d=t()*6.28,p=(.8+t()*1.6)*n,g=h/r;s.rod([o*g,h,0],[o*g+Math.cos(d)*p,h+p*.9,Math.sin(d)*p],.035*n,.012*n,4,ve("#8b7f78"))}let l=r*.7,a=(1.5+t()*.5)*n;i.leaf.setM(e),zi(i,[o*.7,l,0],o*.7,l,0,a,"twigs",3,t,[1,1,1],[.92,.9,.92],[l-a,l+a])}function UM(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Se.trunkDark),i.foliage.setM(e);let r=ve("#1d3a2c"),o=ve("#eef2f8"),l=ve("#d7e0ec");for(let a=0;a<4;a++){let c=s*(.16+a*.19),h=(1.9-a*.38)*n,d=s*.3;i.foliage.cyl(0,c,0,h,h*.3,d,9,r),i.foliage.cyl(0,c+d*.45,0,h*.72,.05,d*.62,9,a%2?o:l)}}function FM(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Se.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,Se.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,Se.cedar)}var Oi={cells:null,bcells:null};function BM(i,e,t,n=1){let s=t()<.3?1.22:1,r=t.range(6.2,8)*n*s,o=i.color;o.setM(e);let l=r*t.range(.3,.38);o.cyl(0,0,0,.27*n*s,.2*n*s,l,8,Se.trunk);let a=r*.64,c=t.range(2.6,3.2)*n*s,h=t.range(2,2.5)*n*s,d=n*s,p=[],g=5+Math.floor(t()*3);for(let x=0;x<g;x++){let f=x/g*6.283+t()*.6,m=t.range(-.15,.75),v=Math.sqrt(1-m*m);p.push([Math.cos(f)*v,m,Math.sin(f)*v])}p.push([0,1,0]);let _=[[0,a+.15*h,0,1.76*d,1]],S=26+Math.floor(t()*7);for(let x=0;x<S;x++){let f=t()*2-1,m=t.range(-.55,1),v=t()*2-1,E=Math.hypot(f,m,v)||1;f/=E,m/=E,v/=E;let b=p[0],T=-2;for(let R of p){let P=R[0]*f+R[1]*m+R[2]*v;P>T&&(T=P,b=R)}f=f*.45+b[0]*.55,m=m*.45+b[1]*.55,v=v*.45+b[2]*.55,E=Math.hypot(f,m,v)||1,f/=E,m/=E,v/=E;let C=t.range(.78,.95);_.push([f*c*C,a+m*h*C,v*c*C,t.range(.8,1.1)*d,0])}for(let x=0;x<4;x++){let f=p[x%g];o.rod([0,l*.9,0],[f[0]*c*.55,a+Math.min(0,f[1])*h*.4-.3*n,f[2]*c*.55],.15*d,.06*n,6,Se.trunk)}let M=t(),y=M<.5?[1,1,.92+M*.16]:[1-(M-.5)*.12,1,.9],u=i.gleaf;u.setM(e);for(let[x,f,m,v,E]of _){let b=x,T=(f-a)*(c/h)+.1*c,C=m,R=Math.hypot(b,T,C)||1;b/=R,T/=R,C/=R,E&&(b=C=0,T=-1);let P=Math.min(1,Math.max(0,(f-(a-h))/(2*h))),A=E?.55:.72+.28*P,w=v/.8*.88;u.bill(x,f,m,b,T,C,w,w,Oi.cells[Math.floor(t()*Oi.cells.length)],[y[0]*A,y[1]*A,y[2]*A],Mm,.88)}}function eg(i,e,t,n=1,s=!1){let r=i.color;r.setM(e);let o=s?1:0,l=t.range(2.2,2.7)*n,a=t.range(.3,.35)*n,c=[t.range(-.15,.15)*n,l,o*.3*n];r.rod([0,0,0],c,a,a*.8,7,Se.bark),r.cyl(0,0,0,a*1.25,a,.35*n,7,Se.bark,!1);let h=t.range(6.3,6.9)*n,d=-o*.5*n,p=t.range(4,4.5)*n,g=t.range(3.6,4)*n,_=t.range(1.7,2)*n,S=t()<.35?4:3,M=s?-Math.PI/2+t.range(-.35,.35):t()*6.283;for(let E=0;E<S;E++){let b=M+E/S*6.283+t.range(-.3,.3),T=Math.cos(b),C=Math.sin(b),R=t.range(.32,.46),P=[c[0]+T*p*R,h-_*t.range(.35,.55),c[2]*.5+d*.4+C*g*R],A=[c[0]+(P[0]-c[0])*.45+T*.25*n,l+(P[1]-l)*.55,c[2]+(P[2]-c[2])*.45+C*.25*n],w=(U,V,z)=>{let O=Math.hypot(V[0]-U[0],V[1]-U[1],V[2]-U[2])||1;return[V[0]-(V[0]-U[0])/O*z,V[1]-(V[1]-U[1])/O*z,V[2]-(V[2]-U[2])/O*z]};r.rod(c,A,a*.62,a*.46,6,Se.bark),r.rod(w(c,A,a*.5),P,a*.47,a*.3,5,Se.bark);let L=w(A,P,a*.35),D=E%2?1:2;for(let U=0;U<D;U++){let V=(U?1:-1)*t.range(.3,.9),z=t.range(1.2,1.9)*n;r.rod(L,[P[0]+Math.cos(b+V)*z,P[1]+t.range(.7,1.2)*n,P[2]+Math.sin(b+V)*z],a*.27,.04*n,4,Se.bark)}}let y=[],u=6+Math.floor(t()*2);for(let E=0;E<u;E++){let b=E/u*6.283+t()*.5,T=t.range(-.2,.6),C=Math.sqrt(1-T*T);y.push([Math.cos(b)*C,T,Math.sin(b)*C])}y.push([0,1,0]);let x=[[-p*.3,h,d,1.75*n,1],[p*.3,h,d,1.75*n,1]],f=21+Math.floor(t()*4);for(let E=0;E<f;E++){let b=t()*2-1,T=t.range(-.3,1),C=t()*2-1,R=Math.hypot(b,T,C)||1;b/=R,T/=R,C/=R;let P=y[0],A=-2;for(let L of y){let D=L[0]*b+L[1]*T+L[2]*C;D>A&&(A=D,P=L)}b=b*.5+P[0]*.5,T=T*.5+P[1]*.5,C=C*.5+P[2]*.5,R=Math.hypot(b,T,C)||1,b/=R,T/=R,C/=R;let w=t.range(.8,.95);x.push([b*p*w,h+T*_*w,d+C*g*w,t.range(1,1.3)*n,0])}let m=[1,t.range(.96,1.03),t.range(.97,1.02)],v=i.gblossom;v.setM(e);for(let[E,b,T,C,R]of x){let P=E/p,A=(b-h)/_+.12,w=(T-d)/g,L=Math.hypot(P,A,w)||1;P/=L,A/=L,w/=L,R&&(P=w=0,A=-1);let D=Math.min(1,Math.max(0,(b-(h-_))/(2*_))),U=R?.62:.8+.2*D,V=C/.8*.86;v.bill(E,b,T,P,A,w,V,V,Oi.bcells[Math.floor(t()*Oi.bcells.length)],[m[0]*U,m[1]*U,m[2]*U],Sm,.86)}}var xg={broad:(i,e,t,n)=>(Oi.cells?BM:PM)(i,e,t,n),sakura:(i,e,t,n)=>Oi.bcells?eg(i,e,t,n):Qm(i,e,t,n),sakuraAve:(i,e,t,n)=>Oi.bcells?eg(i,e,t,n,!0):Qm(i,e,t,n),pine:IM,cedar:FM,maple:LM,ginkgo:DM,birch:NM,snowcedar:UM},tg={};function yg(i,e){let t=i+e,n=tg[t];if(!n){let s={color:new hn,foliage:new hn,leaf:new hn({uv:!0}),gleaf:new hn({uv:!0,off:!0}),gblossom:new hn({uv:!0,off:!0})};xg[i](s,new et,Lt(1e3+e*77+i.length*13),1),n=tg[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays(),g:s.gleaf.toArrays(),b:s.gblossom.toArrays()}}return n}function _g(){for(let i in xg)for(let e=0;e<4;e++)yg(i,e)}function qn(i,e,t,n,s=1){let r=yg(t,Math.floor(n()*4)),o=e.clone().scale(new H(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o),r.g.n&&i.gleaf.stamp(r.g,o),r.b.n&&i.gblossom.stamp(r.b,o)}var OM=new Set(["win0","win2","win5","win6"]),xs=(i,e,t)=>e<t?i+(e<t*.35&&OM.has(i)?"C":"L"):i;function yl(i,e,t,n,s,r,o){let l=Math.max(1,Math.round(t/3)),a=t/l;for(let c of[-1,1])for(let h=0;h<n.length-1;h++)for(let d=0;d<l;d++){let p=h>0&&r()<.3?xs("win6",r(),o):r()<.2?"win5":"plain";(c>0?ss:rs)(i,c*e/2,d*a,(d+1)*a,n[h],n[h+1],p,s)}}function _l(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],Se.roof);let o=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+o,l,Se.parapet),i.box(-e/2,n,t-l,e/2,n+o,t,Se.parapet),i.box(-e/2,n,0,-e/2+l,n+o,t,Se.parapet),i.box(e/2-l,n,0,e/2,n+o,t,Se.parapet),s()<.4){let a=(s()-.5)*e*.5,c=t*(.4+s()*.3);for(let[h,d]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(a+h-.05,n,c+d-.05,a+h+.05,n+1,c+d+.05,Se.metal);i.cyl(a,n+1,c,.85,.85,1.3,12,ve("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,Se.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,Se.metal)}function rh(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,Se.black);let r="vs"+Math.floor(s()*10);rs(i.atlas,e-.065,-.88,-.12,t,n,r),ss(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,Se.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,Se.metal)}function ki(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,Se.concrete,null,{noBottom:!0}),n.type){case"shop":return kM(i,e,t,n);case"machiya":return HM(i,e,t,n);case"apt":return VM(i,e,t,n);case"office":return GM(i,e,t,n);case"konbini":return WM(i,e,t,n);case"house":return n.ptype?ZM(i,e,t,n):qM(i,e,t,n);case"tower":return KM(i,e,t,n)}}var bg=new Set(["glass","door","cafe","noren"]),zM={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function kM(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,c=i.atlas,h=i.color,d=3.6,p=3,g=d+(o-1)*p,_=Math.max(1,Math.round(s/3)),S=s/_,M=-s/2,y=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),u=[],x=0;for(let b=0;b<_;b++){let T=og(t,"shop_"+y[b%y.length]);u.push(T),!x&&T.startsWith("shop_glass")&&T.length>10&&(x=+T.slice(10))}for(let b=0;b<_;b++){let T=y[b%y.length];on(c,M+b*S,M+(b+1)*S,0,d,0,x&&T==="glass"?"shop_glass"+x:u[b]),bg.has(T)&&cr(i,e,M+(b+.5)*S,1.9,-.8,.7)}let f=t.pick([0,0,1,5,0,1]),m=[0,d];for(let b=1;b<o;b++)m.push(d+b*p);for(let b=1;b<o;b++)for(let T=0;T<_;T++){let C=T%2===1&&t()<.3?5:f;on(c,M+T*S,M+(T+1)*S,m[b],m[b+1],0,xs("win"+C,t(),a),l)}yl(c,s,r,m,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,g,r],[-s/2,g,r],zn(l,.8)),_l(h,s,r,g,t);let v=s*.94;h.box(-v/2,d-.8,-.3,v/2,d+.08,-.02,Se.black);let E="hs"+Math.floor(t()*14);if(on(c,-v/2,v/2,d-.8,d+.08,-.305,zM[x]||E),t()<.55){let b=t.pick(bM),T=d-.85;h.quad([s/2-.2,T-.35,-1.1],[-s/2+.2,T-.35,-1.1],[-s/2+.2,T,-.02],[s/2-.2,T,-.02],b),h.quad([s/2-.2,T-.6,-1.1],[-s/2+.2,T-.6,-1.1],[-s/2+.2,T-.35,-1.1],[s/2-.2,T-.35,-1.1],zn(b,.85))}if(o>=2&&t()<.85){let b=(t()<.5?1:-1)*(s/2-.35);rh(i,b,d+.3,Math.min(g-.15,d+2.8),t)}for(let b=1;b<o;b++)if(t()<.4){let T=Math.floor(t()*_),C=M+T*S+.15,R=M+(T+1)*S-.15,P=m[b];h.box(C,P-.12,-.9,R,P,0,Se.parapet),on(c,C,R,P,P+1,-.9,"rail"),rs(c,C,-.9,0,P,P+1,"rail"),ss(c,R,-.9,0,P,P+1,"rail"),t()<.45&&Ag(h,C+.1,R-.1,P+1.95,-.55,t),t()<.6&&Md(i,e,(C+R)/2+.6,P,-.75)}else if(t()<.35){let T=Math.floor(t()*_);Md(i,e,M+(T+.5)*S,m[b]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}h.cyl(M+.12,0,-.08,.05,.05,g,6,Se.pipe,!1),h.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,ve("#d9d9d3")),o>=3&&t()<.18&&Mg(i,s,g,r,t)}function HM(i,e,t,n){let{w:s,d:r,floors:o,litP:l}=n,a=i.atlas,c=i.color,h=3.6,d=2.9,p=h+(o-1)*d,g=-s/2,_=Math.max(2,Math.round(s/3)),S=s/_,M=ve("#5c4030"),y=ve("#3a2a20"),u=t.pick([["glass","door","glass"],["noren","door"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),x=t.pick(["shop_p0","shop_p0","shop_p1","shop_p3"]),f=[];for(let O=0;O<_;O++){let k=u[O%u.length];f.push(k==="glass"?x:k==="door"?"shop_p2":k==="cafe"?"shop_p3":og(t,"shop_"+k))}let m=t()<.5?"":u.includes("glass")&&x==="shop_p1"?"hs9":u.includes("cafe")||u.includes("glass")&&x==="shop_p3"?"hs7":"";for(let O=0;O<_;O++){let k=u[O%u.length];on(a,g+O*S,g+(O+1)*S,0,h,0,f[O]),bg.has(k)&&cr(i,e,g+(O+.5)*S,1.9,-.8,.7)}let v=!!n.plaster,E=n.tint,b=[0,h];for(let O=1;O<o;O++)b.push(h+O*d);for(let O=1;O<o;O++)for(let k=0;k<_;k++){let W=v?k%2===1&&t()<.3?"win5":"win7":"win8";on(a,g+k*S,g+(k+1)*S,b[O],b[O+1],0,xs(W,t(),l),W==="win5"?E:fn)}{let O=Math.max(1,Math.round(r/3)),k=r/O;for(let W of[-1,1])for(let $=0;$<b.length-1;$++)for(let le=0;le<O;le++){let Me=v?$>0?xs(t()<.5?"win7":"win6",t(),l):"plain":$>0&&t()<.45?xs("win4",t(),l):"woodwall";(W>0?ss:rs)(a,W*s/2,le*k,(le+1)*k,b[$],b[$+1],Me,v&&Me[3]!=="7"?E:fn)}}c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],v?zn(E,.8):ve("#6a5240"));for(let O of[g,-g])c.box(O-.09,0,-.12,O+.09,p,.02,y);if(v)for(let O=2;O<o;O++)c.box(g,b[O]-.1,-.08,-g,b[O]+.06,0,y);let{RC:T,k:C}=Sg(i,n,s,r,p,t,!v),R=h+.62,P=1.05,A=.7,w=Math.max(2,Math.round((s+.3)/3));for(let O=0;O<w;O++){let k=g-.15+(s+.3)*O/w,W=g-.15+(s+.3)*(O+1)/w;a.quad([W,R-A,-P],[k,R-A,-P],[k,R,0],[W,R,0],T,C)}c.quad([g-.15,R-A-.03,-P],[-g+.15,R-A-.03,-P],[-g+.15,R-.1,0],[g-.15,R-.1,0],M);let L=Math.min(s*.9,4.4),D=R-A+.02,U=D-.62;c.box(-L/2,U,-P-.02,L/2,D,-P+.07,y),on(a,-L/2,L/2,U,D,-P-.025,m||"hs"+Math.floor(t()*14));for(let O of[-L/2+.25,L/2-.25])c.box(O-.03,D,-P+.02,O+.03,R-A*.1,-P+.06,y);i.sodium.setM(e),c.noShadow=!0;for(let O=0;O<_;O++){let k=g+(O+.5)*S;c.box(k-.008,U-.02,-.62,k+.008,R-A*.6,-.6,y),i.sodium.box(k-.06,U-.16,-.67,k+.06,U-.04,-.55,null)}c.noShadow=!1;let V=!1;if(t()<.5){V=!0;let O=t.pick(MM),k=U-.12;c.quad([s/2-.2,k-.32,-.95],[-s/2+.2,k-.32,-.95],[-s/2+.2,k,-.02],[s/2-.2,k,-.02],O),c.quad([s/2-.2,k-.55,-.95],[-s/2+.2,k-.55,-.95],[-s/2+.2,k-.32,-.95],[s/2-.2,k-.32,-.95],zn(O,.85))}if(o>=2&&(!v||t()<.5)){let O=b[1]+.42,k=-.5,W=g+.12,$=-g-.12;c.box(W,O-.07,k-.04,$,O,0,M);for(let le=0;le<_;le++)on(a,g+.12+(s-.24)*le/_,g+.12+(s-.24)*(le+1)/_,O,O+.95,k,"wrail");rs(a,W,k,0,O,O+.95,"wrail"),ss(a,$,k,0,O,O+.95,"wrail"),i.leaf.setM(e);for(let le=0;le<_;le++)if(t()<.7){let Me=g+(le+.5)*S,be=Math.min(S*.7,1.6);c.noShadow=!0,c.box(Me-be/2,O+.72,k-.2,Me+be/2,O+.92,k-.02,ve("#7a5236")),c.noShadow=!1;for(let K=Me-be/2+.2;K<Me+be/2-.1;K+=.32)zi(i,[K,O+.95,k-.11],K,O+1.05,k-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[O+.9,O+1.3])}}if(o>=2&&t()<.9){let O=t()<.5?1:-1;rh(i,O*(s/2-.35),h+.6,Math.min(p-.2,h+2.7),t),s>7&&t()<.35&&rh(i,-O*(s/2-.35),h+.8,Math.min(p-.2,h+2.5),t)}{let O=u.includes("noren")||u.includes("cafe"),k=V?0:O?2:t()<.3?1:0;i.sodium.setM(e);for(let W=0;W<k;W++){let $=k===2?(W?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),le=U-.5;c.noShadow=!0,c.box($-.006,le+.42,-P+.12,$+.006,U,-P+.14,y),i.sodium.cyl($,le,-P+.13,.11,.16,.18,10,null,!1),i.sodium.cyl($,le+.18,-P+.13,.16,.11,.18,10,null,!1),c.cyl($,le-.035,-P+.13,.1,.1,.04,8,y),c.cyl($,le+.355,-P+.13,.1,.1,.04,8,y),c.noShadow=!1}}let z=1e9;x==="shop_p1"&&u.includes("glass")&&(z=g+(u.indexOf("glass")+.5)*S,wM(i,e,z,-.62,t));for(let O=g+.45+t()*.4;O<-g-.3;O+=.7+t()*1.3)t()<.7&&Math.abs(O-z)>.95&&Pd(i,e,t,O,-.4);i.color.setM(e),i.atlas.setM(e)}function Mg(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,l=n*.3;for(let a of[-r*.35,r*.35])i.color.box(a-.06,t,l,a+.06,t+1.2+o,l+.12,Se.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+o,l+.3,Se.metal),on(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,l+.115,"bb"+Math.floor(s()*4))}function VM(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,c=i.atlas,h=i.color,d=3.2,p=2.95,g=d+(o-1)*p,_=Math.max(2,Math.round(s/3.2)),S=s/_,M=-s/2,y=[0,d];for(let f=1;f<o;f++)y.push(d+f*p);for(let f=0;f<_;f++)on(c,M+f*S,M+(f+1)*S,0,d,0,f===Math.floor(_/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),f===Math.floor(_/2)?fn:l);let u="bal"+Math.floor(t()*3),x=zn(l,.97);for(let f=1;f<o;f++){let m=y[f];for(let v=0;v<_;v++)on(c,M+v*S,M+(v+1)*S,m,y[f+1],0,xs("win2",t(),a),l);h.box(M,m-.15,-1.3,-M,m,0,x),h.box(M,m,-1.3,-M,m+1.1,-1.18,x,null,{noBottom:!0});for(let v=0;v<_;v++)on(c,M+v*S,M+(v+1)*S,m,m+1.1,-1.305,u,l);for(let v=0;v<=_;v++)h.box(M+v*S-.05,m,-1.18,M+v*S+.05,m+2.4,0,zn(l,.92));for(let v=0;v<_;v++){let E=t(),b=M+v*S+.2,T=M+(v+1)*S-.2;E<.34?Ag(h,b,T,m+2.02,-.98,t):E<.46&&jM(h,b+.25,Math.min(T-.25,b+1.9),m+1.1,-1.3,t)}i.atlas.setM(e);for(let v=0;v<_;v++)t()<.55&&(Md(i,e,M+(v+.78)*S,m,-.55),i.atlas.setM(e),i.color.setM(e))}h.box(M,g-.15,-1.3,-M,g,0,x),yl(c,s,r,y,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,g,r],[-s/2,g,r],zn(l,.8)),_l(h,s,r,g,t,!0)}function GM(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,c=i.atlas,h=i.color,d=4,p=3.4,g=d+(o-1)*p,_=Math.max(2,Math.round(s/3)),S=s/_,M=-s/2,y=[0,d];for(let u=1;u<o;u++)y.push(d+u*p);for(let u=0;u<_;u++)on(c,M+u*S,M+(u+1)*S,0,d,0,u===1?"shop_door":"shop_glass");for(let u=1;u<o;u++)for(let x=0;x<_;x++)on(c,M+x*S,M+(x+1)*S,y[u],y[u+1],0,xs("win3",t(),a),l);yl(c,s,r,y,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,g,r],[-s/2,g,r],zn(l,.8)),_l(h,s,r,g,t,!0),t()<.6&&rh(i,(t()<.5?1:-1)*(s/2-.3),d+.4,Math.min(g-.3,d+4.5),t),t()<.3&&Mg(i,s,g,r,t)}function WM(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,l=i.color,a=4.4,c=-s/2,h=Math.max(3,Math.round(s/3)),d=s/h;for(let p=0;p<h;p++)on(o,c+p*d,c+(p+1)*d,0,3.4,0,"shop_konbini"),cr(i,e,c+(p+.5)*d,1.9,-.8,.8);l.box(c,3.4,-.35,-c,a,0,Se.white),on(o,c,-c,3.4,a,-.355,"konbini_band"),yl(o,s,r,[0,a],ve("#f2f2ee"),t,0),_l(l,s,r,a,t)}var ng=(i,e)=>e?ve("#7a5a42"):i.tint,_d=null,XM=()=>{if(!_d){let i=gi("kawara"),e=16/272*(i.u1-i.u0);_d={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return _d};function Sg(i,e,t,n,s,r,o){let l=i.atlas,a=i.color,c=!!e.snow,h=c?.75:.6,d=c?Math.min(3.4,n*.46):Math.min(2.4,n*.32),p=c?gi("white"):XM(),g=c?ve("#f3f5fa"):ve("#c8ccd8"),_=c?ve("#e4e8f0"):ve("#3d4456"),S=c?1:Math.max(2,Math.round((t+2*h)/3)),M=x=>-t/2-h+(t+2*h)*x/S;for(let x=0;x<S;x++){let f=M(x),m=M(x+1);l.quad([m,s-.25,-h],[f,s-.25,-h],[f,s+d,n/2],[m,s+d,n/2],g,p),l.quad([f,s-.25,n+h],[m,s-.25,n+h],[m,s+d,n/2],[f,s+d,n/2],g,p)}let y=(x,f,m,v,E,b)=>{b<0?(a.quad([f,m,E],[x,m,E],[x,v,E],[f,v,E],_),a.quad([x,m,E],[f,m,E],[f,m,E+.08],[x,m,E+.08],_)):(a.quad([x,m,E],[f,m,E],[f,v,E],[x,v,E],_),a.quad([f,m,E],[x,m,E],[x,m,E-.08],[f,m,E-.08],_))};for(let[x,f]of[[-h,0],[n+h,n]])y(-t/2-h,t/2+h,s-.42,s-.22,x<0?x-.04:x+.04,x<0?-1:1),a.quad(x<0?[-t/2-h,s-.26,x]:[t/2+h,s-.26,x],x<0?[t/2+h,s-.26,x]:[-t/2-h,s-.26,x],x<0?[t/2+h,s-.26,f]:[-t/2-h,s-.26,f],x<0?[-t/2-h,s-.26,f]:[t/2+h,s-.26,f],zn(ng(e,o),.62));for(let x of[-1,1]){let f=x*(t/2+h+.02),m=.2,v=[f,s-.25,-h],E=[f,s+d,n/2],b=[f,s-.25,n+h],T=C=>[C[0],C[1]-m,C[2]];x>0?(a.quad(T(E),T(v),v,E,_),a.quad(T(b),T(E),E,b,_)):(a.quad(T(v),T(E),E,v,_),a.quad(T(E),T(b),b,E,_))}let u=ng(e,o);if(Go(a,[-t/2,s,0],[-t/2,s,n],[-t/2,s+d-.1,n/2],u),Go(a,[t/2,s,n],[t/2,s,0],[t/2,s+d-.1,n/2],u),a.box(-t/2-h,s+d-.05,n/2-.15,t/2+h,s+d+.18,n/2+.15,c?ve("#f6f7fb"):ve("#3d4456")),c){a.box(-t/2-h-.05,s-.42,-h-.1,t/2+h+.05,s-.12,-h+.3,ve("#eef1f7")),a.box(-t/2-h-.05,s-.42,n+h-.3,t/2+h+.05,s-.12,n+h+.1,ve("#eef1f7"));for(let x=-t/2;x<t/2;x+=.45+r()*.5)a.cyl(x,s-.42-.35,-h+.02,0,.04,.35,4,ve("#dfe8f3"),!1)}return{RC:g,k:p,fascia:y,nS:S}}function qM(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,c=i.atlas,h=i.color,d=2.9,p=o*d,g=-s/2,_=t()<.5,S=Math.max(2,Math.round(s/3)),M=s/S,y=[];for(let E=0;E<=o;E++)y.push(E*d);let u=_?fn:l;for(let E=0;E<o;E++)for(let b=0;b<S;b++){let T=_?"win4":"win0";E===0&&b===0?T="shop_house":T=xs(T,t(),a),on(c,g+b*M,g+(b+1)*M,y[E],y[E+1],0,T,T==="shop_house"?fn:u)}yl(c,s,r,y,_?ve("#9a7a62"):l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],zn(l,.75));let{RC:x,k:f,fascia:m,nS:v}=Sg(i,n,s,r,p,t,_);if(o>1){let E=d+.05;for(let b=0;b<v;b++){let T=-s/2-.1+(s+.2)*b/v,C=-s/2-.1+(s+.2)*(b+1)/v;c.quad([C,E-.3,-.75],[T,E-.3,-.75],[T,E+.05,0],[C,E+.05,0],x,f)}m(-s/2-.1,s/2+.1,E-.42,E-.28,-.79,-1)}if(n.fence){let E=-n.fence,b=1.2;for(let[T,C]of[[-s/2,-1],[.4,s/2]])h.box(T,0,E-.08,C,b,E+.08,Se.concrete),on(c,T,C,0,b,E-.085,"block")}}var Sd={byZone:null};function Tg(i){let e={};for(let t of i)for(let n of t.zones)(e[n]||(e[n]=[])).push(t);Sd.byZone=e}function ah(i,e){let t=Sd.byZone&&Sd.byZone[i];return t?t[Math.floor(e()*t.length)]:null}var ml={u0:0,u1:0,v0:0,v1:0},is=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],ig=(i,e)=>{for(let t=0;t<4;t++)is[t][0]=i[e+t*3],is[t][1]=i[e+t*3+1],is[t][2]=i[e+t*3+2]},YM=(i,e,t)=>{let n=Math.sin(e*12.9898+t*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;return 24+Math.floor((n-Math.floor(n))*231)};function ZM(i,e,t,n){let s=n.ptype,r=i.atlas,o=i.color,l=gi(s.f),a=gi(s.s);for(let c of s.pieces){let h=c.t==="f"?l:a,d=h.u1-h.u0,p=h.v1-h.v0;ml.u0=h.u0+c.uv[0]*d,ml.u1=h.u0+c.uv[2]*d,ml.v1=h.v1-c.uv[1]*p,ml.v0=h.v1-c.uv[3]*p,ig(c.p,0),c.lit&&r.hasLit&&(r.litV=s.day?6:YM(r,c.p[0]+c.p[2],c.p[1])),r.quad(is[0],is[1],is[2],is[3],fn,ml),r.litV=0}o.noShadow=!0;for(let c of s.soffits)ig(c,0),o.quad(is[0],is[1],is[2],is[3],s.soffit);if(o.noShadow=!1,n.fence){let c=-n.fence,h=1.1,d=s.ww+1;for(let[p,g]of[[-d/2,-1],[.4,d/2]])o.box(p,0,c-.08,g,h,c+.08,Se.concrete),on(r,p,g,0,h,c-.085,"block")}}function KM(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,c=i.atlas,h=i.color,d=3.4,p=o*d,g=Math.max(2,Math.round(s/6)),_=s/g,S=-s/2,M=t()<.5?"win3":"win2",y=[];for(let f=0;f<=o;f++)y.push(f*d);for(let f=0;f<o;f++)for(let m=0;m<g;m++)on(c,S+m*_,S+(m+1)*_,y[f],y[f+1],0,xs(M,t(),a),l);let u=Math.max(1,Math.round(r/6)),x=r/u;for(let f of[-1,1])for(let m=0;m<o;m++)for(let v=0;v<u;v++)(f>0?ss:rs)(c,f*s/2,v*x,(v+1)*x,y[m],y[m+1],xs(M,t(),a),l);_l(h,s,r,p,t,!0)}function Ud(i,e,t,n){let s=i.color,r=ve("#8d9096"),o=ve("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,a=-n+.62;s.box(-.14,5.08,l,.14,5.56,a,o);let c=t*.141;i.atlas.setM(e),(t>0?ss:rs)(i.atlas,c,l,a,5.08,5.56,"signal");let h=t>0?a:l,d=t>0?-1:1;for(let g=0;g<3;g++){let _=h+d*(.2+g*.4);s.box(t>0?.14:-.36,5.47,_-.15,t>0?.36:-.14,5.5,_+.15,o)}let p=h+d*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,p-.11,t>0?.16:-.145,5.43,p+.11,fn)}function Eg(i,e,t,n){let s=i.color,r=ve("#3d6ea8"),o=ve("#e8eef2"),l=ve("#c7c5bf"),a=5.35;s.setM(e),s.box(-1.1,a-.65,-t,1.1,a,t,r);for(let c of[-1.1,1])s.box(c,a,-t,c+.1,a+1.1,t,o),s.box(c-.02,a+1.1,-t,c+.12,a+1.18,t,r);i.atlas.setM(e),rs(i.atlas,-1.105,-2.2,2.2,a-.62,a-.06,n),ss(i.atlas,1.105,-2.2,2.2,a-.62,a-.06,n),s.setM(e);for(let c of[-1,1]){let h=c*(t-1.65),d=c*(t-.15),p=Math.min(h,d),g=Math.max(h,d);s.box(-.45,.15,p+.3,.45,a-.65,g-.3,r);let _=20,S=(a-.15)/_;for(let M=0;M<_;M++)s.box(1.1+M*.3,.15,p,1.1+(M+1)*.3,a-(M+1)*S+.04,g,l);s.box(1.1,a-.1,p-.05,1.1+_*.3,a-.02,p+.05,r)}}function wg(i,e,t,n,s,r,o){let l=i.color,a=1.22,c=3.55,h=6.7,d=ve("#c8c5bd"),p=ve("#ebe8de"),g=ve("#7a5a42"),_=ve("#5e4433"),S=ve("#4d5468");l.setM(e),l.box(t,-1.4,c,n,a,h,d,null,{noBottom:!0}),l.box(t,a,c,n,a+.025,c+.32,p),l.box(t,a,c+.6,n,a+.04,c+.9,Se.yellow);let M=Math.sign(s-(t+n)/2),y=M>0?n:t,u=y+M*6.2,x=c+.9,f=h-.2,m=(z,O,k)=>[z,O,k];M>0?l.quad(m(u,.1,f),m(u,.1,x),m(y,a,x),m(y,a,f),d):l.quad(m(u,.1,x),m(u,.1,f),m(y,a,f),m(y,a,x),d);for(let z of[x,f]){let O=ve("#9aa0a6");l.rod([u,.1+.9,z],[y,a+.9,z],.03,.03,5,O);for(let k=0;k<=3;k++){let W=u+(y-u)*k/3,$=.1+(a-.1)*k/3;l.box(W-.03,$,z-.03,W+.03,$+.9,z+.03,O)}}i.atlas.setM(e);for(let z=t;z<n-.01;z+=3){let O=Math.min(n,z+3);i.atlas.quad([z,-.6,h+.004],[O,-.6,h+.004],[O,a,h+.004],[z,a,h+.004],ve("#d8d4ca"),gi("concrete"))}l.setM(e);for(let z=t+.4;z<n;z+=2)l.box(z-.05,a,h-.12,z+.05,a+1,h-.02,ve("#8f949a"));for(let z of[.45,.95])l.box(t,a+z,h-.1,n,a+z+.06,h-.04,ve("#8f949a"));let v=n-t,E=z=>M>0?n-v*z:t+v*z,b=E(.47),T=b-2.3,C=b+2.3,R=c+1.35,P=h-.25;l.box(T,a,P-.12,C,a+2.45,P,g);for(let z of[T,C-.12])l.box(z,a,R+.6,z+.12,a+2.45,P,_);for(let z of[T,C-.12])l.box(z,a,R,z+.12,a+2.45,R+.12,_);l.quad([C+.4,a+2.5,R-.45],[T-.4,a+2.5,R-.45],[T-.4,a+2.85,P+.35],[C+.4,a+2.85,P+.35],S),l.quad([T-.4,a+2.42,R-.45],[C+.4,a+2.42,R-.45],[C+.4,a+2.77,P+.35],[T-.4,a+2.77,P+.35],ve("#3a3f50")),l.box(T+.3,a+.42,P-.55,C-.3,a+.48,P-.15,ve("#8a6a4a"));for(let z of[T+.4,C-.5])l.box(z,a,P-.5,z+.08,a+.42,P-.2,Se.metal);i.atlas.setM(e),i.atlas.quad([b-1.1,a+1.55,P+.005],[b+1.1,a+1.55,P+.005],[b+1.1,a+2.03,P+.005],[b-1.1,a+2.03,P+.005],fn,gi("ekiplate"+r));let A=E(.2),w=c+1.6,L=1.25,D=a+1.25,U=D+.95;l.setM(e);for(let z of[A-L+.12,A+L-.12])l.cyl(z,a,w,.05,.05,U-a+.05,8,ve("#6b7078"));l.box(A-L,D-.03,w-.03,A+L,U+.03,w+.03,ve("#3a3d42")),i.atlas.setM(e),i.atlas.quad([A-L,D,w+.035],[A+L,D,w+.035],[A+L,U,w+.035],[A-L,U,w+.035],fn,gi("ekimei"+r)),i.atlas.quad([A+L,D,w-.035],[A-L,D,w-.035],[A-L,U,w-.035],[A+L,U,w-.035],fn,gi("ekimei"+r)),l.setM(e);let V=b-M*4.2;l.box(V-.9,a+.42,h-1.25,V+.9,a+.47,h-.85,ve("#3b6ea8")),l.box(V-.9,a+.47,h-.88,V+.9,a+.9,h-.83,ve("#3b6ea8"));for(let z of[V-.75,V+.7])l.box(z,a,h-1.2,z+.06,a+.42,h-.9,Se.metal);for(let z=t+3;z<n-1;z+=9)vl(i,ag(e,z,a,h-.45))}var $M=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(ve),JM=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(ve);function Ag(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,Se.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let l=.28+r()*.34,a=.36+r()*.42,c=r.pick($M),h=s+(r()-.5)*.06;i.quad([o+l,n-a,h],[o,n-a,h],[o,n-.02,h],[o+l,n-.02,h],c),i.quad([o,n-a,h+.01],[o+l,n-a,h+.01],[o+l,n-.02,h+.01],[o,n-.02,h+.01],zn(c,.85)),r()<.4&&i.box(o+l*.45,n-.02,h-.02,o+l*.55,n+.06,h+.02,ve("#d8d8d0")),o+=l+.06+r()*.22}}function jM(i,e,t,n,s,r){let o=r.pick(JM),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,o),i.box(e,n-.72,s-l,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,zn(o,.86))}function Rg(i,e){let t=i.color,n=ve("#a19f97"),s=ve("#6b4a35"),r=ve("#4f4a44"),o=ve("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,ve("#8d8b84"));for(let l of[-.52,.48])for(let a of[-.36,.32])t.box(l,.32,a,l+.05,1.5,a+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,zn(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,ve("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,ve("#5b8d3d"))}function Cg(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?Se.black:Se.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,Se.black),t.box(-.5,2.55,-.06,.5,2.95,.02,Se.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,Se.black);t.box(-.78,-.9,-.34,.3,0,.34,Se.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,ve("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,Se.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new et().multiplyMatrices(e,new et().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?Se.black:Se.yellow)}t.setM(e),i.atlas.setM(e),on(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function Pg(i,e){let t=i.color;t.setM(e);let n=Se.stone,s=zn(Se.stone,1.06),r=zn(Se.stone,.92);t.box(-.36,0,-.36,.36,.18,.36,r),t.box(-.26,.18,-.26,.26,.26,.26,n),t.box(-.13,.26,-.13,.13,1,.13,n),Vo(t,1,1.1,.16,.3,s,!0,!0),t.box(-.2,1.1,-.2,.2,1.48,.2,s),Vo(t,1.48,1.54,.25,.35,r,!1,!0),Vo(t,1.54,1.78,.35,.07,r),t.cyl(0,1.78,0,.07,.04,.1,6,n),t.cyl(0,1.88,0,.05,0,.08,6,n),i.lamp.setM(e),i.lamp.box(-.1,1.2,-.205,.1,1.38,-.195,fn),i.lamp.box(-.1,1.2,.195,.1,1.38,.205,fn)}function Fd(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,Se.vermilion),s.cyl(0,0,r,.38,.38,.5,12,Se.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,Se.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,Se.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,Se.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,Se.vermilion)}function Ig(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,ve("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,ve("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,ve("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,ve("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,Se.metal),n.box(1.1,0,.3,1.2,.42,.55,Se.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,Se.metal),i.atlas.setM(e),rs(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),ss(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}var QM=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],eS=ve("#a7a7aa"),tS=[1,.94,.87],sg={};function Lg(i,e){let t=i*16+e,n=sg[t];if(!n){let s=new hn,r=zn(eS,tS[i]),o=.4,l=.25;for(let a of QM){let c=0,h=1,d=0;Math.abs(a[1])>.99&&(c=1,h=0);let p=a[1]*d-a[2]*h,g=a[2]*c-a[0]*d,_=a[0]*h-a[1]*c,S=Math.hypot(p,g,_);p/=S,g/=S,_/=S;let M=g*a[2]-_*a[1],y=_*a[0]-p*a[2],u=p*a[1]-g*a[0],x=[];for(let m=0;m<=e;m++){let v=m/e*Math.PI*2,E=Math.cos(v),b=Math.sin(v);x.push([p*E+M*b,g*E+y*b,_*E+u*b])}let f=(o-l)/1;for(let m=0;m<e;m++){let v=x[m],E=x[m+1],b=[v[0]*o,v[1]*o,v[2]*o],T=[E[0]*o,E[1]*o,E[2]*o],C=[a[0]+E[0]*l,a[1]+E[1]*l,a[2]+E[2]*l],R=[a[0]+v[0]*l,a[1]+v[1]*l,a[2]+v[2]*l],P=[v[0]+a[0]*f,v[1]+a[1]*f,v[2]+a[2]*f],A=[E[0]+a[0]*f,E[1]+a[1]*f,E[2]+a[2]*f];s.vtx(b[0],b[1],b[2],P[0],P[1],P[2],0,0,r),s.vtx(C[0],C[1],C[2],A[0],A[1],A[2],0,0,r),s.vtx(T[0],T[1],T[2],A[0],A[1],A[2],0,0,r),s.vtx(b[0],b[1],b[2],P[0],P[1],P[2],0,0,r),s.vtx(R[0],R[1],R[2],P[0],P[1],P[2],0,0,r),s.vtx(C[0],C[1],C[2],A[0],A[1],A[2],0,0,r),s.vtx(a[0],a[1],a[2],a[0],a[1],a[2],0,0,r),s.vtx(C[0],C[1],C[2],a[0],a[1],a[2],0,0,r),s.vtx(R[0],R[1],R[2],a[0],a[1],a[2],0,0,r)}}n=sg[t]=s.toArrays()}return n}var nS=new xn,bd=new jn,iS=new H,sS=new H;function Bd(i,e,t,n,s,r,o=0,l=.6){s()<l?bd.set((s()-.5)*.4,s()*6.283,(s()-.5)*.4):bd.set(s()*6.283,s()*6.283,s()*6.283);let a=new et().compose(iS.set(e,t,n),nS.setFromEuler(bd),sS.set(r,r,r));a.groundY=o,i.color.stamp(Lg(Math.floor(s()*3),gl>.7?8:6),a)}function Dg(){for(let i=0;i<3;i++)for(let e of[6,8])Lg(i,e)}function Ng(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,ve("#8f8a80"),ve("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,Se.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,Se.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,Se.black),t.cyl(0,18.6,0,1,.25,1.2,12,Se.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,fn)}function Ug(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ve("#f4f4f0"),ve("#3b6ea5"),ve("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),Go(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),Go(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,Se.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,Se.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,ve("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,Se.metal)}function Fg(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,Se.stone),n.box(-.55,.5,.9,.55,1.5,1.8,ve("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],ve("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],ve("#4d5468")),Fd(i,ag(e,0,0,-.3,Math.PI/2),.75,2.2)}var qo=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new _e(e):e)),re={zenith:new _e,horizon:new _e,sunCol:new _e,sunI:1,hemiSky:new _e,hemiGround:new _e,hemiI:1,fog:new _e,cLit:new _e,cShade:new _e,cRim:new _e,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new H,moonDir:new H,lightDir:new H,sunEl:0};function Og(i){let e=0;for(;e<qo.length-2&&qo[e+1][0]<=i;)e++;let t=qo[e],n=qo[e+1],s=ol($t((i-t[0])/(n[0]-t[0]),0,1)),r=(o,l)=>l.copy(t[o]).lerp(n[o],s);r(1,re.zenith),r(2,re.horizon),r(3,re.sunCol),re.sunI=yt(t[4],n[4],s),r(5,re.hemiSky),r(6,re.hemiGround),re.hemiI=yt(t[7],n[7],s),r(8,re.fog),r(9,re.cLit),r(10,re.cShade),r(11,re.cRim),re.night=yt(t[12],n[12],s),re.warm=yt(t[13],n[13],s),re.sunEl=zg(i,re.sunDir,re.moonDir,re.lightDir)}function zg(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,$t((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var oS=new H,aS=new H;function zd(i,e){return zg((i%1+1)%1,oS,aS,e),e}var Bg={zenith:[new _e("#7b8594"),new _e("#141a28")],horizon:[new _e("#b5bcc6"),new _e("#283042")],fog:[new _e("#a8b0ba"),new _e("#232b3c")],hemiSky:[new _e("#aab3bf"),new _e("#3c4866")],hemiGround:[new _e("#8b8983"),new _e("#1e2030")],cLit:[new _e("#d0d5dc"),new _e("#2c3240")],cShade:[new _e("#7c8593"),new _e("#151922")]},Od=new _e;function kg(i,e){if(re.overcast=i,re.rain=e,re.bright=(1-re.night)*(1-re.warm)*(1-i),i<=.001)return;let t=re.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Od.copy(Bg[n][0]).lerp(Bg[n][1],t),re[n].lerp(Od,i*(n==="cLit"||n==="cShade"?.75:.85));re.sunI*=1-.82*i,re.warm*=1-i,re.cRim.multiplyScalar(1-i),re.sunCol.lerp(Od.setRGB(.85,.87,.9),i*.6)}function Hg(){let i=new ut({side:Xn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:re.zenith},uHorizon:{value:re.horizon},uSunDir:{value:re.sunDir},uMoonDir:{value:re.moonDir},uNoiseTex:ke.uNoiseTex,uSunCol:{value:re.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new _e},uOvercast:{value:0},uDeckLit:{value:new _e},uDeckDark:{value:new _e},uMilky:{value:0},uMetA:{value:new H(0,1,0)},uMetB:{value:new H(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright;
      varying vec3 vDir;
      ${Ri}
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
      }`}),e=new ct(new ka(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function lS(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let u=0;u<o;u++){let x=.06+i()*.05;t.push([(u/(o-1)-.5)*s+(i()-.5)*.03,.1+x*.5,(i()-.5)*.2,x])}let l=e?6:2,a=s*.82,c=.1+.09;for(let u=0;u<l;u++){let x=Math.max(1,Math.round(a/.11));for(let f=0;f<x;f++){let m=(x===1?0:f/(x-1)-.5)*a+(i()-.5)*.05+r*u;t.push([m,c+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}c+=e?.115:.075,a*=e?.8:.66}let h=t.slice();for(let u of h){if(t.length>84)break;let x=1+Math.floor(i()*2);for(let f=0;f<x;f++){let m=.35+i()*2.4,v=u[3]*(.35+i()*.2);t.push([u[0]+Math.cos(m)*u[3]*.82,u[1]+Math.sin(m)*u[3]*.82,u[2]+.04,v])}}let d=t.slice(h.length);for(let u of h){if(u[1]<.1+.12||t.length>104)continue;let x=1+Math.floor(i()*2);for(let f=0;f<x;f++){let m=.3+i()*2.5,v=u[3]*(.3+i()*.4),E=u[3]*(.28+i()*.16);t.push([u[0]+Math.cos(m)*v,u[1]+Math.sin(m)*v,u[2]+Math.sqrt(u[3]*u[3]-v*v)-E*.6,E])}}for(let u of d){if(t.length>124)break;let x=1+Math.floor(i()*2);for(let f=0;f<x;f++){let m=.2+i()*2.7,v=u[3]*(.38+i()*.2);t.push([u[0]+Math.cos(m)*u[3]*.85,u[1]+Math.sin(m)*u[3]*.85,u[2]+.02,v])}}let p=t.slice(0,128),g=1e9,_=-1e9,S=-1e9;for(let u of p)g=Math.min(g,u[0]-u[3]*1.12),_=Math.max(_,u[0]+u[3]*1.12),S=Math.max(S,u[1]+u[3]*1.12);let M=Math.min(1,.92/(_-g),(.95-.1)/(S-.1)),y=(g+_)/2;for(let u of p)u[0]=(u[0]-y)*M,u[1]=.1+(u[1]-.1)*M,u[3]*=M;return p}function Vg(i){let t={value:Array.from({length:128},()=>new dt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new ut({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:ke.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Ri}
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
      }`,depthTest:!1,depthWrite:!1,blending:ri}),r=new Yt(1024,1024,{generateMipmaps:!0,minFilter:Ln,magFilter:Bt,depthBuffer:!1}),o=new ut({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:ke.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${Ri}
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
      }`,depthTest:!1,depthWrite:!1,blending:ri}),l=new ct(new sn(1,1),s),a=new Mr,c=new Ls;a.add(l);let h=new Yt(1024*2,1024*2,{generateMipmaps:!0,minFilter:Ln,magFilter:Bt}),d=i.getRenderTarget(),p=i.autoClear,g=Lt(99);i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let _=[];for(let S=0;S<4;S++){let M=S%2===0,y=lS(g,M);y.forEach((u,x)=>t.value[x].set(u[0],u[1],u[2],u[3])),s.uniforms.uN.value=y.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=S*13.7,l.material=s,i.setRenderTarget(r),i.render(a,c),l.material=o,h.viewport.set(S%2*1024,Math.floor(S/2)*1024,1024,1024),i.setRenderTarget(h),i.render(a,c),_.push({cell:[S%2,Math.floor(S/2)],tall:M})}return h.viewport.set(0,0,1024*2,1024*2),i.autoClear=p,i.setRenderTarget(d),s.dispose(),o.dispose(),r.dispose(),l.geometry.dispose(),{tex:h.texture,kinds:_,rt:h}}function Gg(i){let e=Lt(5),t=22,n=[],s=new sn(1,1);s.translate(0,.5,0);let r=new In(new Float32Array(t*4),4),o=new In(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let l=new ut({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new _e},uShade:{value:re.cShade},uRim:{value:re.cRim},uHaze:{value:re.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),a=new ji(s,l,t);a.frustumCulled=!1,a.renderOrder=-5;for(let _=0;_<t;_++){let S=_<12,M=i.kinds[(_*3+(S?0:1))%i.kinds.length],y=S?M.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:_/t*Math.PI*2+e.range(-.15,.15),d:S?e.range(2600,3400):e.range(1300,2200),base:S?e.range(-60,60):e.range(260,700),size:y,cell:M.cell,haze:S?.45:.18})}let c=new et,h=new xn,d=new H,p=new H,g=new H(0,1,0);return{group:a,update(_,S){let M=Math.atan2(re.lightDir.x,re.lightDir.z);for(let u of n)u.phi+=S*1.2/u.d;n.slice().sort((u,x)=>x.d-u.d).forEach((u,x)=>{d.set(_.x+Math.sin(u.phi)*u.d,_.y+u.base,_.z+Math.cos(u.phi)*u.d),h.setFromAxisAngle(g,u.phi+Math.PI),p.set(u.size,u.size,1),c.compose(d,h,p),a.setMatrixAt(x,c);let f=M-u.phi;f=Math.atan2(Math.sin(f),Math.cos(f));let m=Math.max(0,Math.min(1,(f+.35)/.7)),v=1-m*m*(3-2*m);r.setXYZW(x,u.cell[0],u.cell[1],v,u.haze),o.setX(x,.35+.9*Math.pow(Math.max(Math.cos(f),0),3)*(.4+re.warm))}),a.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,l.uniforms.uOpacity.value=(1-re.night*.35)*(1-re.overcast*.55)*(1-.85*re.rain),l.uniforms.uLit.value.copy(re.cLit).multiplyScalar(1+.35*re.bright)}}}function Wg(){let i=new cn;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],l=[];for(let d=0;d<=360;d++){let p=d/360*Math.PI*2,g=Math.sin(p)*t.R,_=Math.cos(p)*t.R,S=Xu(d/360*t.k*4,40+n*9),M=Math.pow(Math.max(0,S-.18)/.82,1.6),y=t.h*(.12+M);if(r.push(g,-60,_,g,-60+y,_),o.push(0,d/360,1,d/360),d<360){let u=d*2;l.push(u,u+1,u+2,u+1,u+3,u+2)}}let a=new mt;a.setAttribute("position",new Je(r,3)),a.setAttribute("hf",new Je(o,2)),a.setIndex(l);let c=new ut({side:Sn,fog:!1,uniforms:{uCol:{value:new _e(t.col)},uHaze:{value:re.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:ke.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Ri}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),h=new ct(a,c);h.frustumCulled=!1,h.renderOrder=999,i.add(h)}),{group:i,update(t,n=0,s=1){if(i.visible=s>.002,!i.visible)return;i.position.set(t.x,0,t.z),i.scale.y=Math.min(1,s);for(let o of i.children)o.material.uniforms.uSnow.value=n;let r=(.35+.65*(1-re.night))*(1-.35*re.overcast);for(let o of i.children)o.material.uniforms.uLight.value=r}}}var Br="./assets/",Xg=`
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
}`,Fs=[.299,.587,.114],Yo=[.03,.014,-.018],cS=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),vi=[0,0,0],kd=(i,e,t,n,s,r)=>{let o=i-e*(1-n)-t*n*s;return Math.min(.985,Math.max(0,cS(Math.min(1,Math.max(0,n+(o-n)/r)))))};function qg(i,e,t,n,s){let r=i.toneMappingExposure.value,o=i.uSat.value,l=i.uLo.value,a=i.uDay.value,c=e/255,h=t/255,d=n/255,p=l.x*Fs[0]+l.y*Fs[1]+l.z*Fs[2],g=(Yo[0]*Fs[0]+Yo[1]*Fs[1]+Yo[2]*Fs[2])*a,_=(c*Fs[0]+h*Fs[1]+d*Fs[2]-p)/(1-p+g);vi[0]=kd(c,l.x,Yo[0],_,a,o),vi[1]=kd(h,l.y,Yo[1],_,a,o),vi[2]=kd(d,l.z,Yo[2],_,a,o);let S=.76,M=.24,y=Math.max(vi[0],vi[1],vi[2]);if(y>=S){let f=M*M/(1-y)-M+S,m=1-1/(.15*(f-y)+1),v=f/y;for(let E=0;E<3;E++)vi[E]=(vi[E]-m*y)/Math.max(1-m,.001)*v}let u=Math.min(vi[0],vi[1],vi[2]),x=u<.04?Math.sqrt(Math.max(u,0)/6.25)-u:.04;return s.setRGB((vi[0]+x)/r,(vi[1]+x)/r,(vi[2]+x)/r)}var Yg={value:new Le(1280,720)};function Zg(i){i.getDrawingBufferSize(Yg.value)}function Kg(i){let e=i.grade.uniforms;return{toneMappingExposure:e.toneMappingExposure,uSat:e.uSat,uVig:e.uVig,uDay:e.uDay,uLo:e.uLo,uGRes:Yg}}async function Gd(i,e,t){let n=e.files[t]?t:"hi",s=await fetch(i+e.files[n]);if(!s.ok)throw new Error(e.files[n]+" "+s.status);let r=await s.blob();if(e.bytes&&e.bytes[n]&&r.size!==e.bytes[n])throw new Error(e.files[n]+" is "+r.size+" bytes, not "+e.bytes[n]);let o=URL.createObjectURL(r),l;try{l=await new Ga().loadAsync(o)}catch(a){throw URL.revokeObjectURL(o),a}return l.onUpdate=()=>{URL.revokeObjectURL(o),l.onUpdate=null},l.colorSpace=oi,l.generateMipmaps=!0,l.minFilter=Ln,l.magFilter=Bt,{tex:l,file:n}}async function Or(i,e,t){let n,s=new Promise(r=>{n=setTimeout(()=>r(null),e)});try{return await Promise.race([i,s])}catch(r){return console.warn(t,r.message||r),null}finally{clearTimeout(n)}}async function $g(i,e=15e3){let t=Br+"clouds/";return Or((async()=>{let n=await fetch(t+"clouds.json");if(!n.ok)throw new Error("clouds.json "+n.status);let s=await n.json(),r=(s.clouds||[]).filter(l=>l.u1>l.u0&&l.v1>l.v0&&l.w>0&&l.h>0&&l.lum&&l.lum[1]>l.lum[0]);if(!r.length)throw new Error("no clouds listed");let{tex:o}=await Gd(t,s,i);return{tex:o,list:r,tier:i}})(),e,"painted clouds unavailable, keeping the procedural ones:")}async function Jg(i,e=15e3){let t=Br+"fronts/";return Or((async()=>{let n=await fetch(t+"fronts.json");if(!n.ok)throw new Error("fronts.json "+n.status);let s=await n.json(),r=(s.tiles||[]).filter(h=>h.name&&h.w>0&&h.h>0&&h.x>=0&&h.x+h.w<=1&&h.ey+h.h<=1);if(!r.length)throw new Error("no fronts listed");let o=s.files&&s.files[i]?i:"hi",l=await fetch(t+s.files[o]);if(!l.ok)throw new Error(s.files[o]+" "+l.status);let a=await l.blob();if(s.bytes&&s.bytes[o]&&a.size!==s.bytes[o])throw new Error(s.files[o]+" is "+a.size+" bytes, not "+s.bytes[o]);let c=await createImageBitmap(a);if(s.size&&s.size[o]&&(c.width!==s.size[o][0]||c.height!==s.size[o][1]))throw new Error(s.files[o]+" has the wrong size");return{img:c,tiles:r,tier:o}})(),e,"painted fronts unavailable, keeping the procedural shopfronts:")}async function jg(i,e=15e3){let t=Br+"houses/";return Or((async()=>{let n=await fetch(t+"houses.json");if(!n.ok)throw new Error("houses.json "+n.status);let s=await n.json(),r=s.files&&s.files[i]?i:"hi",o=s.tiles&&s.tiles[r]||[],l=(s.types||[]).filter(d=>d.f&&d.s&&d.pieces&&d.pieces.length&&o.some(p=>p.name===d.f)&&o.some(p=>p.name===d.s));if(!l.length||!(s.rows&&s.rows[r]>0))throw new Error("no houses listed");let a=await fetch(t+s.files[r]);if(!a.ok)throw new Error(s.files[r]+" "+a.status);let c=await a.blob();if(s.bytes&&s.bytes[r]&&c.size!==s.bytes[r])throw new Error(s.files[r]+" is "+c.size+" bytes, not "+s.bytes[r]);let h=await createImageBitmap(c,{premultiplyAlpha:"none"});if(s.size&&s.size[r]&&(h.width!==s.size[r][0]||h.height!==s.size[r][1]))throw new Error(s.files[r]+" has the wrong size");if(o.some(d=>!(d.w>0&&d.h>0&&d.x>=0&&d.x+d.w<=h.width&&d.ey+d.h<=h.height)))throw new Error("a tile lies outside the sheet");return{img:h,tiles:o,types:l,rows:s.rows[r],tier:r}})(),e,"painted houses unavailable, keeping the procedural ones:")}async function Qg(i,e=15e3){let t=Br+"fields/";return Or((async()=>{let n=await fetch(t+"fields.json");if(!n.ok)throw new Error("fields.json "+n.status);let s=await n.json();if(!(s.tile&&s.tile[0]>0&&s.tile[1]>0&&Math.abs(Ai/s.tile[1]-Math.round(Ai/s.tile[1]))<1e-6))throw new Error("bad tile size");if(!(s.mean&&s.mean.length===3))throw new Error("no average colour listed");let{tex:r,file:o}=await Gd(t,s,i);return r.colorSpace=qt,r.wrapS=r.wrapT=Is,{tex:r,tile:s.tile,mean:s.mean,tier:o}})(),e,"painted fields unavailable, keeping the procedural paddies:")}var lh=[["tower",10,[4300,4800],[-1.6,-.4],[22,33],["tower"],.3],["bank",8,[4820,4960],[-1.2,.2],[5,8.5],["wide","mid"],.42],["mid",8,[3500,4200],[-1,2],[9,15],["mid","wide","tower"],.26],["high",7,[2300,3200],[11,27],[6,11],["mid","wide","tower"],0]],uS=140*Math.PI/180,ch=Math.PI/180,fr=i=>Math.atan2(Math.sin(i),Math.cos(i));function hS(i,e){let t=Lt(e),n=[],s=t()*Math.PI*2,r=Math.PI*2/lh[0][1];for(let[a,c,h,d,p,g,_]of lh)for(let S=0;S<c;S++){let M;a==="tower"?M=s+S*r+t.range(-.22,.22)*r:a==="mid"?M=s+(S+.5)*r*(lh[0][1]/c)+t.range(-.2,.2)*r:a==="high"?M=s+(S*(lh[0][1]/c)+.5)*r+t.range(-.3,.3)*r:M=s+(S+t())/c*Math.PI*2,n.push({role:a,kinds:g,phi:M,d:t.range(h[0],h[1]),e0:t.range(d[0],d[1])*ch,ah:t.range(p[0],p[1])*ch,haze:_,k:-1,flip:!1})}let o=i.map(()=>[]),l=n.map((a,c)=>c);for(let a=l.length-1;a>0;a--){let c=Math.floor(t()*(a+1)),h=l[a];l[a]=l[c],l[c]=h}for(let a of l){let c=n[a],h=-1,d=1e9;i.forEach((p,g)=>{let _=c.kinds.indexOf(p.kind);if(_<0)return;let M=(o[g].some(y=>Math.abs(fr(y-c.phi))<uS)?1e3:0)+o[g].length*10+_*4+t();M<d&&(d=M,h=g)}),h<0&&(h=Math.floor(t()*i.length)),c.k=h,o[h].push(c.phi)}for(let a of n){let c=i[a.k],h=a.d*Math.tan(a.e0);a.y0=h,a.h=a.d*Math.tan(a.e0+a.ah)-h,a.w=a.h*c.w/c.h,a.half=Math.atan2(a.w/2,a.d)}return n.sort((a,c)=>c.d-a.d)}function e1(i,e,t=5){let n=i.list,s=hS(n,t),r=s.length,o=new sn(1,1);o.translate(0,.5,0);let l=new In(new Float32Array(r*4),4),a=new In(new Float32Array(r*4),4),c=new In(new Float32Array(r),1);o.setAttribute("aRect",l),o.setAttribute("aInfo",a),o.setAttribute("aRim",c),s.forEach((m,v)=>{let E=n[m.k];l.setXYZW(v,E.u0,E.v0,E.u1-E.u0,E.v1-E.v0),a.setXYZW(v,0,E.lum[0],1/Math.max(.05,E.lum[1]-E.lum[0]),m.haze)});let h=new ut({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new _e},uShade:{value:re.cShade},uRimCol:{value:re.cRim},uHaze:{value:re.horizon},uPaint:{value:1},uOpacity:{value:1},uRimLod:{value:i.tier==="hi"?3:2},...Kg(e)},vertexShader:`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:Xg+`
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
      }`}),d=new ji(o,h,r);d.frustumCulled=!1,d.renderOrder=-5;let p=new et,g=new xn,_=new H,S=new H,M=new H(0,1,0),y=new H,u=!0;function x(m,v){let E=s.filter(w=>w.role==="tower").sort((w,L)=>fr(w.phi-m)-fr(L.phi-m)),b=null,T=1e9;for(let w=0;w<E.length;w++){let L=E[w],D=E[(w+1)%E.length],U=v==="center"?L.phi:L.phi+fr(D.phi-L.phi)/2,V=Math.abs(fr(U-m));V<T&&(T=V,b=v==="center"?[L,L,U]:[L,D,U])}if(!b)return;let[C,R,P]=b,A=fr(m-P);for(let w of s)w.phi+=A;for(let w of new Set([C,R])){let L=Math.max(w.ah,31*ch),D=w.d*Math.tan(w.e0+L)-w.y0;w.w*=D/w.h,w.h=D,w.ah=L,w.half=Math.atan2(w.w/2,w.d)}}let f={mesh:d,count:r,opening:"flank",layout:s,update(m,v){let E=m.position,b=Math.atan2(re.lightDir.x,re.lightDir.z);m.getWorldDirection(y);let T=Math.atan2(y.x,y.z),C=Math.atan(Math.tan(m.fov*ch/2)*m.aspect);u&&x(T,f.opening);for(let P=0;P<r;P++){let A=s[P];A.phi+=v*1.2/A.d,_.set(E.x+Math.sin(A.phi)*A.d,E.y+A.y0,E.z+Math.cos(A.phi)*A.d),g.setFromAxisAngle(M,A.phi+Math.PI),S.set(A.w,A.h,1),p.compose(_,g,S),d.setMatrixAt(P,p);let w=fr(b-A.phi),L=w>0!==n[A.k].litLeft;L!==A.flip&&Math.abs(Math.sin(w))>.2&&(u||Math.abs(fr(A.phi-T))>C+A.half+.05)&&(A.flip=L),a.setX(P,A.flip?1:0);let D=Math.max(Math.cos(w),0);c.setX(P,.35+.9*D*D*D*(.4+re.warm))}u=!1,d.instanceMatrix.needsUpdate=!0,a.needsUpdate=!0,c.needsUpdate=!0;let R=h.uniforms;{let P=Math.min(Math.max((re.bright-.55)/.4,0),1);R.uPaint.value=P*P*(3-2*P)}R.uLit.value.copy(re.cLit).multiplyScalar(1+.35*re.bright),R.uOpacity.value=(1-re.night*.35)*(1-re.overcast*.55)*(1-.85*re.rain)}};return f}async function t1(i,e=15e3){let t=Br+"band/";return Or((async()=>{let n=await fetch(t+"band.json");if(!n.ok)throw new Error("band.json "+n.status);let s=await n.json(),{tex:r,file:o}=await Gd(t,s,i),l={};for(let[a,c]of Object.entries(s.zones&&s.zones[o]||{}))c.v1>c.v0&&c.e1>c.e0&&(l[a]=new dt(c.v0,c.v1,Math.tan(c.e0*Math.PI/180),Math.tan(c.e1*Math.PI/180)));if(!Object.keys(l).length)throw new Error("no zones listed");return r.wrapS=Is,{tex:r,zones:l,period:s.period||120,tier:o}})(),e,"painted horizon unavailable, keeping the mountain rings:")}var bl=2500,fS=-8,Fr=new H,hr=new _e,Hd=new _e("#fff5dd").multiplyScalar(3.35),Vd=new _e("#8fb1ec").multiplyScalar(1.35*2);function n1(i,e,t){let n=i.zones,s=Math.max(...Object.values(n).map(f=>f.w)),r=192,o=360/i.period,l=new Float32Array((r+1)*6),a=new Float32Array((r+1)*4),c=[],h=Math.tan(fS*Math.PI/180),d=s+.004;for(let f=0;f<=r;f++){let m=f/r*Math.PI*2,v=Math.sin(m)*bl,E=Math.cos(m)*bl;if(l.set([v,h*bl,E,v,d*bl,E],f*6),a.set([-(f/r)*o,h,-(f/r)*o,d],f*4),f<r){let b=f*2;c.push(b,b+2,b+1,b+1,b+2,b+3)}}let p=new mt;p.setAttribute("position",new bt(l,3)),p.setAttribute("uv",new bt(a,2)),p.setIndex(c);let g=Math.PI/180,_=(e.composer.readBuffer.samples||0)>0,S=new ut({fog:!1,side:Sn,alphaToCoverage:_,defines:_?{A2C:1}:{},uniforms:{map:{value:i.tex},uRowA:{value:new dt},uRowB:{value:new dt},uMix:{value:0},uAlpha:{value:1},uRot:{value:0},uLightC:{value:new _e(1,1,1)},uPaint:{value:1},uFogC:{value:t},uHaze:{value:0},uHz:{value:Math.tan(.8*g)},uGnd:{value:new H(2.8,.0014,700)},uSpan:{value:new Le(h,d)},...Kg(e)},vertexShader:`
      uniform vec2 uSpan; varying vec2 vUv;
      void main(){
        float y = uv.y > 0.0 ? uSpan.y : uSpan.x; vUv = vec2(uv.x, y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, y * ${bl.toFixed(1)}, position.z, 1.0);
      }`,fragmentShader:Xg+`
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
      }`}),M=new ct(p,S);M.frustumCulled=!1,M.renderOrder=999;let y=S.uniforms,u=new H,x=!0;return{mesh:M,zones:n,hero:.125,update(f,m,v=2.8,E=.0014,b=700){let T=n[m.a],C=n[m.b],R=m.t,P=0;if(T&&C?(y.uRowA.value.copy(T),y.uRowB.value.copy(C),y.uMix.value=T===C?0:R,P=1):(T||C)&&(y.uRowA.value.copy(T||C),y.uMix.value=0,P=T?1-R:R),y.uAlpha.value=P,M.visible=P>.002,!M.visible)return 0;M.position.copy(f.position),y.uGnd.value.set(v,E,b),y.uSpan.value.set(Math.max(h,-Math.tan(Math.atan(v/140)+.3*g)),Math.max(T?T.w:0,C?C.w:0)+.003),x&&(f.getWorldDirection(u),y.uRot.value=this.hero+Math.atan2(u.x,u.z)/(Math.PI*2)*o,x=!1),hr.copy(re.sunCol).multiplyScalar(re.sunI),Fr.set(hr.r,hr.g,hr.b),hr.copy(re.hemiSky).multiplyScalar(re.hemiI*2),Fr.x+=hr.r,Fr.y+=hr.g,Fr.z+=hr.b;let A=Math.min(Math.max((re.bright-.55)/.4,0),1),w=A*A*(3-2*A);y.uLightC.value.setRGB(Fr.x/(Hd.r+Vd.r),Fr.y/(Hd.g+Vd.g),Fr.z/(Hd.b+Vd.b)),y.uPaint.value=w;let L=Math.max(4*y.uMix.value*(1-y.uMix.value),Math.min(1,2*(1-P))),D=_?0:.45*L*L*L;return y.uHaze.value=1-(1-(1-(1-.12*re.warm-.25*re.night)*(1-.55*re.overcast)*(1-.6*re.rain))*(1-w))*(1-D),P}}}async function dS(i){let e=new Uint8Array(i),t=new DataView(i),n=[137,80,78,71,13,10,26,10];if(e.length<33||n.some((p,g)=>e[g]!==p))throw new Error("not a PNG");let s=8,r=0,o=0,l=[];for(;s+12<=e.length;){let p=t.getUint32(s),g=String.fromCharCode(e[s+4],e[s+5],e[s+6],e[s+7]);if(s+12+p>e.length)throw new Error("PNG truncated");if(g==="IHDR"){if(r=t.getUint32(s+8),o=t.getUint32(s+12),e[s+16]!==8||e[s+17]!==6||e[s+20]!==0)throw new Error("PNG is not 8-bit RGBA")}else if(g==="IDAT")l.push(e.subarray(s+8,s+8+p));else if(g==="IEND")break;s+=12+p}if(!r||!o||!l.length)throw new Error("PNG has no image");let a=new Uint8Array(await new Response(new Blob(l).stream().pipeThrough(new DecompressionStream("deflate"))).arrayBuffer()),c=r*4,h=new Uint8Array(c*o),d=new Uint8Array(c);if(a.length<(c+1)*o)throw new Error("PNG data short");for(let p=0;p<o;p++){let g=a[p*(c+1)],_=p*(c+1)+1,S=(o-1-p)*c,M=p?h.subarray(S+c,S+2*c):d,y=h.subarray(S,S+c),u=a.subarray(_,_+c);if(g===0)y.set(u);else if(g===1){for(let x=0;x<4;x++)y[x]=u[x];for(let x=4;x<c;x++)y[x]=u[x]+y[x-4]}else if(g===2)for(let x=0;x<c;x++)y[x]=u[x]+M[x];else if(g===3){for(let x=0;x<4;x++)y[x]=u[x]+(M[x]>>1);for(let x=4;x<c;x++)y[x]=u[x]+(y[x-4]+M[x]>>1)}else if(g===4){for(let x=0;x<4;x++)y[x]=u[x]+M[x];for(let x=4;x<c;x++){let f=y[x-4],m=M[x],v=M[x-4],E=Math.abs(m-v),b=Math.abs(f-v),T=Math.abs(f+m-v-v);y[x]=u[x]+(E<=b&&E<=T?f:b<=T?m:v)}}else throw new Error("PNG filter "+g)}return{w:r,h:o,data:h}}function pS(i,e,t,n,s,r=.5){let o=[{data:t,width:i,height:e}],l=Math.floor(r*255)+1,a=new Uint32Array(256),c=[],h=(_,S,M,y,u,x)=>{a.fill(0);for(let f=0;f<x;f++){let m=((y+f)*S+M)*4+3;for(let v=0;v<u;v++)a[_[m+v*4]]++}};for(let _=0;_<s;_++)for(let S=0;S<n;S++){let M=i/n,y=e/s;h(t,i,S*M,_*y,M,y);let u=0;for(let x=l;x<256;x++)u+=a[x];c.push(u/(M*y))}let d=i,p=e,g=t;for(;d>1&&p>1;){let _=d>>1,S=p>>1,M=new Uint8Array(_*S*4),y=d*4;for(let f=0;f<S;f++){let m=f*2*y,v=f*_*4;for(let E=0;E<_;E++,m+=8)for(let b=0;b<4;b++,v++)M[v]=g[m+b]+g[m+b+4]+g[m+b+y]+g[m+b+y+4]+2>>2}let u=_/n,x=S/s;if(u>=2&&x>=2&&u===Math.floor(u)&&x===Math.floor(x))for(let f=0;f<s;f++)for(let m=0;m<n;m++){h(M,_,m*u,f*x,u,x);let v=Math.round(c[f*n+m]*u*x),E=255,b=a[255];for(;E>1&&b<v;)b+=a[--E];let T=v>0?Math.min(6,Math.max(.5,l/E)):1;if(T!==1)for(let C=0;C<x;C++){let R=((f*x+C)*_+m*u)*4+3;for(let P=0;P<u;P++)M[R+P*4]=Math.min(255,Math.round(M[R+P*4]*T))}}o.push({data:M,width:_,height:S}),g=M,d=_,p=S}return o}async function i1(i,e=15e3){let t=Br+"trees/";return Or((async()=>{if(typeof DecompressionStream>"u")throw new Error("no DecompressionStream");let n=await fetch(t+"crowns.json");if(!n.ok)throw new Error("crowns.json "+n.status);let s=await n.json(),r=s.files[i]?i:"hi",o=await fetch(t+s.files[r]);if(!o.ok)throw new Error(s.files[r]+" "+o.status);let l=await o.arrayBuffer();if(s.bytes&&s.bytes[r]&&l.byteLength!==s.bytes[r])throw new Error(s.files[r]+" is "+l.byteLength+" bytes, not "+s.bytes[r]);let a=await dS(l),c=s.cols,h=s.rows;if(!(c>0&&h>0)||a.w%c||a.h%h)throw new Error("bad atlas layout");let d=(s.cells||[]).filter(_=>_.col<c&&_.row<h).map(_=>{let S=.5/a.w,M=.5/a.h;return{kind:_.kind,u0:_.col/c+S,u1:(_.col+1)/c-S,v0:1-(_.row+1)/h+M,v1:1-_.row/h-M}});if(!d.some(_=>_.kind==="leaf"))throw new Error("no leaf clusters listed");let p=pS(a.w,a.h,a.data,c,h,.5),g=new Ji(a.data,a.w,a.h,ei);return g.mipmaps=p,g.generateMipmaps=!1,g.minFilter=Ln,g.magFilter=Bt,g.colorSpace=oi,g.needsUpdate=!0,{tex:g,cells:d,tier:r}})(),e,"painted tree crowns unavailable, keeping the card crowns:")}var Ml={T:6.5,LAM:11,LZ:42},Wd=`
float shorePhase(float s, float d){ return uTime * ${(1/Ml.T).toFixed(7)} + d * ${(1/Ml.LAM).toFixed(7)} - s * ${(1/Ml.LZ).toFixed(7)}; }`,mS=`
vec4 vnoise4(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0); }`,Sl={uNoiseTex:ke.uNoiseTex,uTime:{value:0},uCam:{value:new H},uSunDir:{value:re.lightDir},uSunCol:{value:re.sunCol},uHorizon:{value:re.horizon},uZenith:{value:re.zenith},uFog:{value:re.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0},uPaint:{value:0},uPTrough:{value:new _e},uPMid:{value:new _e},uPFace:{value:new _e},uPFar:{value:new _e},uPHz:{value:new _e},uFoamLit:{value:new _e(1,1,1)},uFoamShade:{value:new _e(.5,.6,.8)}},gS={trough:[0,98,182],mid:[10,132,218],face:[42,158,236],far:[66,170,246],hz:[118,188,243],foam:[246,251,254],foamShade:[160,205,240]},r1=`
uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright, uPaint; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog;
uniform vec3 uPTrough, uPMid, uPFace, uPFar, uPHz, uFoamLit, uFoamShade;
${Ri}
float wh(vec2 p){ return vnoise(p * 0.18 + vec2(uTime * 0.05, uTime * 0.03)) * 0.6 + vnoise(p * 0.55 - vec2(uTime * 0.09, -uTime * 0.04)) * 0.4; }
vec3 seaColour(vec3 w){
  vec3 V = normalize(uCam - w); float dist = length(uCam.xz - w.xz);
  vec2 p = w.xz;
  float e = 0.6, h0 = wh(p);
  vec3 N = normalize(vec3((h0 - wh(p + vec2(e, 0.0))) * 1.4, 1.0, (h0 - wh(p + vec2(0.0, e))) * 1.4));
  N = normalize(mix(N, vec3(0.0, 1.0, 0.0), smoothstep(80.0, 900.0, dist) * 0.8));
  vec3 R = reflect(-V, N);
  float al = max(dot(R, uSunDir), 0.0);
  float spec = pow(al, 300.0) * 5.0;
  float broad = pow(al, 18.0);
  float spark = step(0.86, vnoise(p * 2.2 + vec2(uTime * 0.7, -uTime * 0.5))) * step(0.5, vnoise(p * 0.7 - uTime * 0.3));
  vec3 glint = uSunCol * (spec + spark * broad * 3.0 + broad * 0.15) * (1.0 - uNight * 0.6) * uSpecK;
  vec3 col = vec3(0.0);
  if (uPaint < 0.999) {
    float fres = pow(1.0 - max(dot(V, N), 0.0), 3.0);
    // on a bright day the sea is painted a deep, saturated blue (the reference art): bluer water that mirrors more of
    // the blue sky overhead and less of the pale horizon; dawn, dusk and night keep the old water and the horizon's glow
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
    // the painted sea: the waves' slope towards us in three flat tones (navy troughs, the deep azure, faces lit by the
    // sky), white caps on the bigger crests, all paling into the far sea and a light azure at the far shore. The tones
    // blend to their average once a wave is under a pixel or two (fwidth), so the far sea doesn't sparkle. (Near the
    // camera, where the water along the wall paints the waves, the open sea is the plain azure: its tones would be big
    // blotches there, e.g. where a zone's end leaves the sea without its wall)
    vec2 tc = (uCam.xz - w.xz) / max(dist, 1e-3);
    float k = dot(N.xz, tc), aw = fwidth(k) + 0.004, nf = smoothstep(25.0, 70.0, dist);
    float dark = (1.0 - smoothstep(-0.075 - aw, -0.075 + aw, k)) * nf, lite = smoothstep(0.085 - aw, 0.085 + aw, k) * nf;
    vec3 pc = mix(mix(uPMid, uPTrough, dark), uPFace, lite);
    // (white caps only out on the open sea: near the shore the water along the wall has its own breaking crests)
    float hc = h0 + 0.32 * (vnoise(p * 1.3 + vec2(-uTime * 0.21, uTime * 0.13)) - 0.5), cw = fwidth(hc) * 1.5 + 0.01;
    float cap = smoothstep(0.76 - cw, 0.76 + cw, hc) * smoothstep(45.0, 80.0, dist) * (1.0 - 0.6 * smoothstep(300.0, 1100.0, dist));
    pc = mix(pc, uPFar, smoothstep(15.0, 260.0, dist));
    pc = mix(pc, uFoamLit, cap * 0.85) + glint;
    pc = mix(pc, uPHz, smoothstep(300.0, 2300.0, dist));
    col = mix(col, pc, uPaint);
  }
  return col;
}`;function o1(){let i=new ut({fog:!1,uniforms:Sl,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${r1}
      varying vec3 vW;
      void main(){ gl_FragColor = vec4(mix(uFog, seaColour(vW), uVis), 1.0); }`}),e=new ct(new sn(14e3,14e3),i);e.rotation.x=-Math.PI/2,e.position.y=ns,e.renderOrder=998,e.frustumCulled=!1;let t=Sl;return{mesh:e,update(n,s,r,o=1,l=null){e.position.x=n.x,e.position.z=n.z,t.uTime.value=s,t.uCam.value.copy(n),t.uNight.value=re.night,t.uBright.value=re.bright,t.uFogD.value=r,t.uVis.value=o,t.uSpecK.value=1-re.overcast*.85;let a=Math.min(Math.max((re.bright-.55)/.4,0),1),c=l?a*a*(3-2*a):0;t.uPaint.value=c;let h=1+.25*re.bright,d=1/(Math.PI*h),p=re.sunCol,g=re.hemiSky,_=re.sunI*.8,S=re.hemiI;if(t.uFoamLit.value.setRGB((p.r*_+g.r*S)*d,(p.g*_+g.g*S)*d,(p.b*_+g.b*S)*d),t.uFoamShade.value.setRGB(g.r*S*.9*d,g.g*S*.9*d,g.b*S*.9*d),c>0){let M=gS;zr(l,M.trough,t.uPTrough.value),zr(l,M.mid,t.uPMid.value),zr(l,M.face,t.uPFace.value),zr(l,M.far,t.uPFar.value),zr(l,M.hz,t.uPHz.value),t.uFoamLit.value.lerp(zr(l,M.foam,s1),c),t.uFoamShade.value.lerp(zr(l,M.foamShade,s1),c)}}}}var s1=new _e,zr=(i,e,t)=>qg(i,e[0],e[1],e[2],t);function a1(i=!1){return new ut({fog:!1,defines:i?{SHORE_LITE:""}:{},uniforms:Sl,vertexShader:"attribute vec2 su; attribute vec2 hf; varying vec2 vSU; varying vec2 vHF; varying vec3 vW; void main(){ vSU = su; vHF = hf; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${r1}${mS}${Wd}
      varying vec2 vSU; varying vec2 vHF; varying vec3 vW;
      vec4 vnoise4g(vec2 p, vec2 gx, vec2 gy){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, gx / 256.0, gy / 256.0); }
      void main(){
        vec3 sea = seaColour(vW);
        float s = vSU.x, d = max(vSU.y, 0.0), dist = length(uCam - vW);
        // the lace's coordinates and their footprint on screen first, in uniform control flow (the lace is only read
        // where there is foam). Along the road the noise repeats every 4200 m, as s does (256 cells): no seam where s wraps
        vec2 pB = vec2(s * 0.26, d * 0.85 - uTime * 0.11), bx = dFdx(pB), by = dFdy(pB);
        vec2 pC = vec2(s * 0.85, d * 2.6) + vec2(uTime * 0.06, -uTime * 0.23), cx = dFdx(pC), cy = dFdy(pC);
        vec4 nA = vnoise4(vec2(s * 0.0609524, d * 0.08 + uTime * 0.01));
        float ph = shorePhase(s, d) + (nA.x - 0.5) * 0.6;     // the crests wander a little
        float f = fract(ph), wave = floor(ph), fw = fwidth(ph);
        // each wave breaks along stretches of the wall of its own (and more of it the nearer it comes)
        float brk = smoothstep(0.25, 0.55, vnoiseL(vec2(s * 0.0609524 + wave * 17.31, wave * 3.7)));
        float zone = 1.0 - smoothstep(7.0, 31.0, d), in0 = smoothstep(0.0, fw * 1.5 + 1e-4, f);
        // the breaking crest: a bright line along its front, lace trailing out to sea behind it
        float lw = 0.03 + 0.035 * nA.y;
        float line = (1.0 - smoothstep(lw, lw + fw * 1.5, f)) * in0;
        float trail = (1.0 - smoothstep(0.03, 0.27, f)) * in0;
        float crest = max(line, trail * 0.62) * brk * zone;
        // the wall: a band of foam that swells as each wave hits it (the backwash), and foam boiling round the tetrapods
        float hit = 1.0 - smoothstep(0.0, 0.3, fract(shorePhase(s, 0.0) + (nA.x - 0.5) * 0.6));
        float amt = max(crest, (1.0 - smoothstep(0.3, 1.2 + 2.8 * hit, d)) * (0.6 + 0.4 * hit));
        amt = max(amt, vHF.x * (0.6 + 0.4 * (1.0 - smoothstep(0.0, 0.4, f))));
        // the painted look (a bright day): each wave's face lighter as it rears up towards its crest, its back and the
        // trough behind it a deep navy; the bigger the wave (where it breaks), the more so
        float face = smoothstep(0.55, 0.96, f) * (1.0 - smoothstep(1.0 - fw * 1.5 - 1e-4, 1.0, f));
        float trough = smoothstep(0.1, 0.28, f) * (1.0 - smoothstep(0.48, 0.66, f));
        float wa = max(face * 0.72, trough * 0.62) * (0.55 + 0.45 * brk) * (1.0 - smoothstep(24.0, 38.0, d)) * uPaint;
        // the lace: two scales of noise (one on phones), drawn out along the crests. Where there is a lot of foam it is
        // solid with a few holes; where there is less, a web of thin lines (the noise's middle contours) thinning out
        float a = 0.0; vec3 foam = uFoamLit;
        if (amt > 0.08) {
          vec4 nB = vnoise4g(pB, bx, by);
          #ifdef SHORE_LITE
          float lace = nB.x, la = 0.012 + 0.3 * (length(bx) + length(by)), lt = nB.y;
          #else
          vec4 nC = vnoise4g(pC, cx, cy);
          float lace = nB.x * 0.6 + nC.x * 0.4, la = 0.012 + 0.18 * (length(bx) + length(by)) + 0.12 * (length(cx) + length(cy)), lt = nC.y;
          #endif
          float th = mix(0.86, 0.3, amt), web = abs(lace - 0.5), ww = 0.075 * amt;
          a = max(smoothstep(th - la, th + la, lace), 1.0 - smoothstep(ww - la, ww + la, web)) * smoothstep(0.08, 0.2, amt);
          foam = mix(uFoamShade, uFoamLit, clamp(0.45 + 0.8 * (lt - 0.35) + 0.4 * crest, 0.0, 1.0));
        }
        // it all fades out with the sea's fog, towards the end of the built world and towards the strip's ends
        float fd = dist * uFogD, k = exp(-fd * fd) * (1.0 - smoothstep(420.0, 700.0, dist)) * vHF.y;
        vec3 col = mix(sea, mix(uPTrough, uPFace, face), wa * k);
        col = mix(col, foam, a * k);
        gl_FragColor = vec4(mix(uFog, col, uVis), 1.0);
      }`})}function l1(){return new ut({fog:!1,uniforms:{uNoiseTex:ke.uNoiseTex,uTime:{value:0},uSunDir:{value:re.lightDir},uSunCol:{value:re.sunCol},uHorizon:{value:re.horizon},uZenith:{value:re.zenith},uFog:{value:re.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${Ri}
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
      }`})}var uh={n:8};function c1(){return new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:Sl,vertexShader:`
      uniform float uTime, uVis; attribute vec4 aB; attribute vec3 aC;
      varying vec2 vUv; varying vec3 vK;
      ${Wd}
      float h11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
      void main(){
        float seed = aB.w, s = aC.z;
        float ph = shorePhase(s, aB.z) - 0.02 - 0.08 * fract(seed * 7.13);        // each puff a moment after the wave arrives
        float wave = floor(ph), str = h11(wave * 7.37 + floor(s / 12.0) * 1.13);   // how hard this wave hits here
        float age = fract(ph) * ${Ml.T.toFixed(2)}, dur = 1.15 + 1.1 * str, k = age / dur;
        float h1 = fract(seed * 13.7), h2 = fract(seed * 71.3), h3 = fract(seed * 3.31), h4 = fract(seed * 27.9);
        vec2 o = aB.xy;
        float up = (4.2 + 3.6 * h1) * (0.6 + 0.5 * str), vin = 0.6 + 1.8 * h2, side = (h3 - 0.5) * 3.0;
        vec2 hv = -o * vin + vec2(-o.y, o.x) * side;
        vec3 p = position + vec3(hv.x * age, up * age - 4.9 * age * age, hv.y * age);
        p.y = max(p.y, position.y - 0.15);
        float size = (0.55 + 1.5 * sqrt(min(k, 1.0))) * (0.75 + 0.55 * h4) * (0.7 + 0.45 * str);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float near = smoothstep(2.5, 7.0, -mv.z);   // (right by the camera it thins out and shrinks: big cards cost fill)
        mv.xy += aC.xy * size * (0.4 + 0.6 * near) * vec2(1.0, 1.25); // (a little taller than wide: spray thrown up)
        vUv = aC.xy; vK = vec3(k, uVis * near * smoothstep(0.0, 0.06, k) * (1.0 - smoothstep(0.7, 1.0, k)), seed);
        gl_Position = k < 1.0 && str > 0.25 ? projectionMatrix * mv : vec4(2.0, 2.0, 2.0, 1.0);
      }`,fragmentShader:`
      uniform vec3 uFoamLit, uFoamShade; varying vec2 vUv; varying vec3 vK;
      ${Ri}
      vec4 vnoise4g(vec2 p, vec2 gx, vec2 gy){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, gx / 256.0, gy / 256.0); }
      void main(){
        float r2 = dot(vUv, vUv);
        // (the card's corners hold nothing: out before the noise is read)
        vec2 pa = vUv * 2.2 + vK.z * 97.0, pb = vUv * 5.5 + vK.z * 53.0, ga = dFdx(pa), gb = dFdx(pb), ha = dFdy(pa), hb = dFdy(pb);
        float fw = 0.75 * fwidth(r2) + 0.3 * (length(ga) + length(ha) + length(gb) + length(hb)); // (m's footprint: taken before any discard)
        if (r2 > 0.98 || vK.y < 0.01) discard;
        vec4 n = vnoise4g(pa, ga, ha), n2 = vnoise4g(pb, gb, hb);
        float lace = n.x * 0.5 + n2.x * 0.5;
        // white lace with a ragged edge, eroding into droplets as the splash falls apart
        float m = (1.0 - r2) * 0.75 + (lace - 0.5) * 1.3 - (0.2 + 0.55 * vK.x);
        float a = smoothstep(0.0, fw + 0.03, m) * vK.y * 0.92;
        if (a < 0.01) discard;
        vec3 col = mix(uFoamShade, uFoamLit, clamp(0.45 + 0.6 * vUv.y + 0.5 * (n2.y - 0.5), 0.0, 1.0));
        gl_FragColor = vec4(col, a);
      }`})}function u1(i){let e=i.length/8;if(!e)return null;let t=new Float32Array(e*12),n=new Float32Array(e*16),s=new Float32Array(e*12),r=new Uint16Array(e*6),o=[-1,1,1,-1],l=[-1,-1,1,1],a=1/0,c=1/0,h=1/0,d=-1/0,p=-1/0,g=-1/0;for(let S=0;S<e;S++){let M=S*8;for(let y=0;y<4;y++){let u=S*4+y;t[u*3]=i[M],t[u*3+1]=i[M+1],t[u*3+2]=i[M+2],n[u*4]=i[M+3],n[u*4+1]=i[M+4],n[u*4+2]=i[M+5],n[u*4+3]=i[M+6],s[u*3]=o[y],s[u*3+1]=l[y],s[u*3+2]=i[M+7]}r.set([S*4,S*4+1,S*4+2,S*4,S*4+2,S*4+3],S*6),a=Math.min(a,i[M]),c=Math.min(c,i[M+1]),h=Math.min(h,i[M+2]),d=Math.max(d,i[M]),p=Math.max(p,i[M+1]),g=Math.max(g,i[M+2])}let _=new mt;return _.setAttribute("position",new bt(t,3)),_.setAttribute("aB",new bt(n,4)),_.setAttribute("aC",new bt(s,3)),_.setIndex(new bt(r,1)),_.boundingBox=new fi(new H(a-6,c-1,h-6),new H(d+6,p+6,g+6)),_.boundingSphere=_.boundingBox.getBoundingSphere(new di),_}var Gt=60,Xd=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],h1=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],f1=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Bs=32,qd=[-.2,2.2,5.5,10,17,27,38],Tl=[.025,.026,.032],d1=[.05,.05,.065],p1=new et,ys=(i,e)=>(i%e+e)%e,Os=(i,e)=>{let t=rr(i);return!!t&&Math.abs(i-t.s)<e},hh=i=>ys(i,4)===0,vS=i=>ys(i,2)===0,$d=1.4,m1=i=>hh(i)?4.4:$d+.9,Yd=i=>hh(i)?3.4:$d-.1,Zd=(i,e)=>Math.abs(i-Math.round(i/300)*300)<e,Ci=(i,e)=>{let t=Bi(i);return!!t&&Math.abs(i-t.s)<e},ai=(i,e)=>{let t=Fi(i);return!!t&&Math.abs(i-t.s)<e},Kd=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let l=n(r,o);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let l=s+r*t+o,a=l+1,c=l+t,h=c+1;this.I.push(l,a,c,a,h,c)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,l=new Array(e*o);for(let c=0;c<e;c++)for(let h=0;h<o;h++)l[c*o+h]=n(c,h-s);let a=(c,h)=>l[Math.min(e-1,Math.max(0,c))*o+Math.min(o-1,Math.max(0,h))];for(let c=0;c<e;c++)for(let h=s;h<s+t;h++){let d=a(c,h-1),p=a(c,h+1),g=a(c-1,h),_=a(c+1,h),S=l[c*o+h],M=p[0]-d[0],y=p[1]-d[1],u=p[2]-d[2],x=_[0]-g[0],f=_[1]-g[1],m=_[2]-g[2],v=y*m-u*f,E=u*x-M*m,b=M*f-y*x;E<0&&(v=-v,E=-E,b=-b);let T=Math.hypot(v,E,b)||1;S[3]=v/T,S[4]=E/T,S[5]=b/T}this.grid(e,t,(c,h)=>l[c*o+h+s])}build(){let e=new mt;return e.setAttribute("position",new Je(this.P,3)),e.setAttribute("normal",new Je(this.N,3)),e.setAttribute("su",new Je(this.SU,2)),e.setAttribute("zw",new Je(this.ZW,4)),e.setAttribute("rk",new Je(this.RK,2)),e.setAttribute("rv",new Je(this.RV,1)),e.setAttribute("zs",new Je(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},fh=class{constructor(e,t,n,s){this.path=t,this.M=n,this.riverMat=s,this.heapCache=new Map,this.group=new cn,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Gt),s=Math.floor((e+this.ahead)/Gt);for(let[o,l]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(l),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let l=o.pending.shift();l&&o.group.add(l),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let a=Math.max(0,n);a<=s;a++)if(!this.chunks.has(a)){l=a;break}if(l<0)return 0;l*Gt-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let o=this.job.it.next();if(o.done){let l=o.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let l=o*Gt-e,a=r.group.children;for(let c=0;c<a.length;c++){let h=a[c],d=h.userData.detail;d&&(h.visible=d==="leaf"?l<s:l<t||n&&d==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Gt,s=n+Gt,r=t.at(n),o=r.x,l=r.z,a=Lt(Math.floor(_n(e,777)*4294967295)),c={atlas:new hn({uv:!0,ao:!0,lit:!0}),color:new hn({ao:!0}),foliage:new hn,leaf:new hn({uv:!0}),lamp:new hn({color:!1}),sig:new hn({color:!1}),sodium:new hn({color:!1}),decal:new hn({uv:!0}),pool:new hn({uv:!0,color:!1}),gleaf:new hn({uv:!0,off:!0}),gblossom:new hn({uv:!0,off:!0})},h=new Kd,d={rows:[],puffs:[]},p=[];c.lamps=[];let g={},_={},S=(C,R)=>{t.at(C,_);let P=kn(C,"rw");return _.y+vs(C,R,_.y,P)},M=C=>{let R=Ct(C);return[R.city,R.sakura,R.coast,R.country,R.snow]},y=(C,R,P)=>(t.at(C,g),[g.x+g.rx*R-o,P,g.z+g.rz*R-l]),u=(C,R,P,A=0,w=!0)=>{t.at(C,g);let L=g.h-Math.PI/2+(w&&R<0?Math.PI:0)+A,D=new et().makeRotationY(L);return D.setPosition(g.x+g.rx*R-o,P,g.z+g.rz*R-l),D.groundY=P,D},x=(C,R,P=0,A=0,w=!0)=>{let L=S(C,R),D=u(C,R,L+P,A,w);return D.groundY=L,D},f=C=>t.at(C,_).y,m=C=>kn(C,"rw"),v=C=>{let R=Ct(C);return R.city+R.sakura>.5?R.city>=R.sakura?3:2.6:0};{let C=Fi(n+Gt/2),R=!!C&&C.s>n-40&&C.s<s+40,P=R?61:21,A=m(n+Gt/2),w=(()=>{let W=[0,...h1].map($=>$);return f1.forEach($=>W.push($-A)),W})(),L=[...w.slice().reverse().map(k=>-k),...w],D=L.length,U=Array.from({length:P},(k,W)=>n+W/(P-1)*Gt);{let k=Bi(n+Gt/2);if(k)for(let W of[k.s-bn,k.s+bn])W>n+.1&&W<s-.1&&U.push(W-.03,W+.03)}U.sort((k,W)=>k-W);let V=D/2,z=U.map(k=>(t.at(k,g),{s:k,f:{...g},rw:m(k),w:M(k),rb:R?_m(k):0})),O=Math.round(V/2);for(let[k,W,$,le]of[[0,O,0,1],[O-1,V,1,0],[V,V+O+1,0,1],[V+O,D,1,0]])h.gridN(z.length,W-k,(Me,be)=>{let K=z[Me],j=K.f,xe=k+be,Ce=L[xe],Ae=Ce===0&&K.w[2]>0?.15:0,Pe=Ce<0||Ce===0&&xe<V?Ce-K.rw+Ae:Ce+K.rw-Ae,We=j.y+vs(K.s,Pe,j.y,K.rw),Xe=Math.abs(Pe)>K.rw+.98?Math.min(1,Yu/.5):0;return[j.x+j.rx*Pe-o,We,j.z+j.rz*Pe-l,0,1,0,ys(K.s,Ai),Pe,K.w[0],K.w[1],K.w[2],K.w[3],K.rw,0,K.rb>0?K.rb:-Xe,K.w[4]]},$,le),yield}yield,h.grid(31,2,(R,P)=>{let A=n+R/30*Gt,w=m(A),L=P?w:-w;t.at(A,g);let D=g.y,U=(f(A+1)-f(A-1))/2,V=-U*g.fx,z=1,O=-U*g.fz,k=Math.hypot(V,z,O),W=M(A);return[g.x+g.rx*L-o,D,g.z+g.rz*L-l,V/k,z/k,O/k,ys(A,Ai),L,W[0],W[1],W[2],W[3],w,1,0,W[4]]});{let C=[];for(let A=0;A<=30;A++){let w=n+A/30*Gt;C.push({s:w,sw:v(w)})}let R=[],P=null;for(let A of C)A.sw>0?(P||(P=[],R.push(P)),P.push(A)):P=null;for(let A of R)if(!(A.length<2))for(let w of[-1,1])h.grid(A.length,2,(L,D)=>{let{s:U,sw:V}=A[L],z=m(U),O=w*(D===(w>0?0:1)?z:z+V);t.at(U,g);let k=M(U);return[g.x+g.rx*O-o,g.y+.15,g.z+g.rz*O-l,0,1,0,ys(U,Ai),O,k[0],k[1],k[2],k[3],z,2,0,k[4]]}),h.grid(A.length,2,(L,D)=>{let{s:U}=A[L],V=m(U),z=w*V,O=w>0?D:1-D;t.at(U,g);let k=M(U);return[g.x+g.rx*z-o,g.y+(O?.15:0),g.z+g.rz*z-l,-w*g.rx,0,-w*g.rz,ys(U,Ai),z,k[0],k[1],k[2],k[3],V,3,0,k[4]]})}yield,yield*this.placePoles(e,n,s,a,c,u,S,y,f,m);{let C=Math.ceil((n-Dr)/Lr),R=Oo(C);R<s&&ul(R)&&(yield*this.placeCrossing(c,h,R,u,f,m,S,v,o,l));let P=Math.ceil((n-zo)/Nr),A=hd(P);A<s&&fd(A)&&(yield*this.placeRiver(c,h,A,u,f,m,S,v,o,l,a,p));let w=Bi(n+Gt/2);w&&w.s+rn>n&&w.s-rn<s&&(yield*this.placeTunnel(c,h,w,n,s,u,x,S,m,o,l,a))}yield;for(let C=n;C<s;C+=4){let R=un(C);(R==="coast"&&Ct(C).coast>.45||R==="mountain"&&Ct(C).mountain>.45)&&!Ci(C+2,rn+4)&&this.guardrail(c,C,Math.min(C+4,s),y,f,m)}yield*this.placeCity(c,a,n,s,u,x,f,m,v,S,h,o,l),yield*this.placeSakura(c,a,n,s,u,x,f,m,S),yield*this.placeCoast(c,a,e,n,s,u,x,m,d,y),yield,yield*this.placeCountry(c,a,n,s,u,x,f,m,S),yield*this.placeMountain(c,a,n,s,u,x,f,m,S),yield*this.placeSnow(c,a,n,s,u,x,f,m,S),yield*this.placeVerge(c,a,n,s,u,S,m,e,o,l),yield;let E=new cn,b=(C,R,P,A,w=0,L)=>{if(!C)return null;let D=new ct(C,R);return D.castShadow=P,D.receiveShadow=A,D.renderOrder=w,L&&(D.userData.detail=L),E.add(D),D},T=new Set;for(let C of[n,n+20,n+40,s]){let R=sr(C);T.add(R.a),R.t>0&&T.add(R.b)}b(h.build(),pl([...T]),!1,!0),yield,b(c.atlas.build(),this.M.atlas,!0,!0),yield;{let C=b(c.color.build(),this.M.color,!0,!0);C&&(C.customDepthMaterial=ju)}if(yield,b(c.foliage.build(),this.M.foliage,!0,!0),b(c.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),this.M.gleaf){let C=b(c.gleaf.build(),this.M.gleaf,!0,!0,0,"leaf");C&&(C.customDepthMaterial=this.M.gleafDepth)}if(this.M.gblossom){let C=b(c.gblossom.build(),this.M.gblossom,!0,!1,0,"leaf");C&&(C.customDepthMaterial=this.M.gleafDepth)}if(yield,b(c.lamp.build(),this.M.lamp,!1,!1,0,"light"),b(c.sig.build(),this.M.sig,!1,!1,0,"small"),b(c.sodium.build(),this.M.sodium,!1,!1),b(c.decal.build(),this.M.decal,!1,!0,1,"small"),b(c.pool.build(),this.M.pool,!1,!1,2,"light"),d.rows.length>1){let C=d.rows,R=qd.length,P=C.length*R,A=new Float32Array(P*3),w=new Float32Array(P*2),L=new Float32Array(P*2),D=[];C.forEach((V,z)=>{for(let O=0;O<R;O++){let k=z*R+O,W=O*7;A.set(V.subarray(W,W+3),k*3),w[k*2]=V[W+3],w[k*2+1]=V[W+4],L[k*2]=V[W+5],L[k*2+1]=V[W+6]}if(z>0)for(let O=0;O<R-1;O++){let k=(z-1)*R+O,W=k+R;D.push(k,W,k+1,k+1,W,W+1)}});let U=new mt;U.setAttribute("position",new bt(A,3)),U.setAttribute("su",new bt(w,2)),U.setAttribute("hf",new bt(L,2)),U.setIndex(D),U.computeBoundingSphere(),b(U,this.M.shore,!1,!1,997)}d.puffs.length&&b(u1(d.puffs),this.M.surf,!1,!1,2,"small");for(let C of p)b(C,this.riverMat,!1,!0);return E.position.set(o-this.origin.x,0,l-this.origin.z),{group:E,ox:o,oz:l,s0:n,lamps:new Float32Array(c.lamps)}}poleSpec(e){let t=e*Bs+6,n=un(t);if(n==="sakura"||Os(t,6)||ai(t,34)||Ci(t,rn+12))return null;let s=kn(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,l,a,c,h){let d=Math.ceil((t-6)/Bs),p=Math.floor((n-6-.001)/Bs);for(let g=d;g<=p;g++){let _=this.poleSpec(g);if(!_)continue;let S=_.z==="city"?c(_.s)+.15:l(_.s,_.u),M=o(_.s,_.u,S),y=Lt(Math.floor(_n(g,31)*4294967295)),u=Ad(r,M,y,{trans:y()<.45});_.z==="city"&&g%2===0&&cg(r,M,-.11),g%2&&(yield);let x=this.poleSpec(g+1);if(x){let f=x.z==="city"?c(x.s)+.15:l(x.s,x.u),m=lg(o(x.s,x.u,f));r.color.setM(new et);let v=[];for(let E=0;E<u.length;E++){let b=u[E],T=m[E],C=.35+y()*.4+(E>=7?.3:0);v.push(C),r.color.wire([b.x,b.y,b.z],[T.x,T.y,T.z],C,E>=7?.022:.015,Tl,10)}if(_.z!=="coast"&&y()<.38){let E=Math.floor(y()*4),b=u[E],T=m[E],C=1+Math.floor(y()*4),R=.18+y()*.5;for(let P=0;P<C;P++){let A=Math.min(.92,R+P*(.018+y()*.025)),w=b.x+(T.x-b.x)*A,L=b.z+(T.z-b.z)*A,D=b.y+(T.y-b.y)*A-v[E]*4*A*(1-A);r.color.box(w-.07,D+.015,L-.07,w+.07,D+.19,L+.07,d1),r.color.box(w-.045,D+.19,L-.045,w+.045,D+.27,L+.045,d1)}}}if(_.z==="city"){r.color.setM(new et);let f=1+Math.floor(y()*3);for(let m=0;m<f;m++){let v=u[7+m%2],E=(y()-.5)*14,b=h(_.s+E),T=y()<.55,C=T?-(b+3.15):b+3.15,R=a(_.s+E,C,c(_.s+E)+5.2+y()*2.5);r.color.wire([v.x,v.y,v.z],R,.25+y()*.4,.012,Tl,8)}}}}*intersection(e,t,n,s,r,o,l,a,c,h,d){let p=this.path.at(n,{}),g=o(n),_=l(n),S=a(n)||3,M=n-.5,y=Ct(n),u=[y.city,y.sakura,y.coast,y.country],x=(E,b,T)=>[p.x+p.fx*(E-.5)+p.rx*b-h,T,p.z+p.fz*(E-.5)+p.rz*b-d],f=_+S+.15,m=hh(s),v=m?3:$d;for(let E of[-1,1]){let b=E*(_+S),T=E*80;if(c.grid(21,2,(A,w)=>{let L=b+(T-b)*A/20,D=(w?-v:v)*E,U=x(D,L,g+.165);return[U[0],U[1],U[2],0,1,0,D*E,L,u[0],u[1],u[2],u[3],_,10]}),m){let A=E*(_+S+3.2),w=-E*1.35,L=1.15,D=.42,U=(V,z)=>x(w+E*V,A-E*z,g+.18);e.decal.setM(new et),e.decal.quad(U(-L,-D),U(L,-D),U(L,D),U(-L,D),[1,1,1],Wo("tomare"))}for(let A of[-1,1]){let w=f+15+t()*3;for(;w<52;){let L=t.range(5.5,8.5),D=E*(w+L/2),U=t(),V=r(M+A*(v+.3),D,g+.14,A>0?Math.PI/2:-Math.PI/2,!1);ki(e,V,t,{type:U<.5?"house":"shop",w:L,d:t.range(7,10),floors:U<.5?2:t.int(2,3),tint:t.pick(Us),litP:.45,fence:0}),w+=L+t.range(.2,1.2),yield}yield}let C=[30,54].map(A=>r(M+v-.2,E*A,g+.15,-Math.PI/2,!1)),R=Lt(Math.floor(_n(s,E>0?71:73)*4294967295)),P=C.map(A=>Ad(e,A,R,{trans:R()<.4}));e.color.setM(new et);for(let A=0;A<7;A++){let w=P[0][A],L=P[1][A];e.color.wire([w.x,w.y,w.z],[L.x,L.y,L.z],.3+R()*.4,.014,Tl,10)}}m&&(Ud(e,r(n-9,-(_+.55),g+.15,0,!0),1,_+.55-1.6),Ud(e,r(n+8,_+.55,g+.15,0,!0),1,_+.55-1.6),s%8===0&&Eg(e,r(n+15,0,g,0,!1),_+S+.1,"hodokyo"+Math.abs(s/8)%3))}*placeCrossing(e,t,n,s,r,o,l,a,c,h){let d=this.path.at(n,{}),p=d.y,g=o(n),_=a(n),S=g+_+.2,M=150,y=p+.18,u=Ct(n),x=[u.city,u.sakura,u.coast,u.country],f=(L,D,U)=>[d.x+d.fx*L+d.rx*D-c,U,d.z+d.fz*L+d.rz*D-h],m=[7.6,4.7,-4.7,-7.6];for(let[L,D]of[[-M,-S],[S,M]])t.grid(25,m.length,(V,z)=>{let O=L+(D-L)*V/24,k=m[z],$=Math.abs(k)<5?y:Math.min(y-.05,l(n+k,O)-.03),le=f(k,O,$);return[le[0],le[1],le[2],0,1,0,k,O,x[0],x[1],x[2],x[3],g,5]});let v=(L,D,U)=>t.grid(2,2,(V,z)=>{let O=V?D:L,k=z?-3.3:3.3,W=f(k,O,U);return[W[0],W[1],W[2],0,1,0,k,O,x[0],x[1],x[2],x[3],g,6]});v(-g,g,p+.03),_>0&&(v(-S,-g,p+.165),v(g,S,p+.165));let E=(L,D,U,V)=>t.grid(2,2,(z,O)=>{let k=z?V:U,W=O?D:L,$=f(W,k,p+.025);return[$[0],$[1],$[2],0,1,0,W,k,x[0],x[1],x[2],x[3],g,7]});E(-7.15,-7.6,-g+.3,-.12),E(7.6,7.15,.12,g-.3),yield;let b=s(n,0,p,-Math.PI/2,!1),T=e.color;T.setM(b);let C=[.42,.4,.38],R=[.3,.29,.28],P=[.55,.57,.6];for(let L of[-2,2])for(let D of[-.5335,.5335]){let U=-(L+D);for(let[V,z]of[[-M,-S],[S,M]])T.box(V,.26,U-.035,z,.34,U+.035,C);T.box(-S,0,U-.035,S,.04,U+.035,R)}let A=[-146,-104,-64,-26,26,64,104,146];for(let L of A){for(let D of[-4.95,4.95])T.box(L-.12,.18,D-.12,L+.12,7.4,D+.12,P);T.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,P);for(let D of[-2,2])T.box(L-.04,6.3,-D-.04,L+.04,6.95,-D+.04,P)}for(let L of[-2,2])for(let D=0;D<A.length-1;D++)T.wire([A[D],5.35,-L],[A[D+1],5.35,-L],.05,.011,Tl,6),T.wire([A[D],6.4,-L],[A[D+1],6.4,-L],.45,.011,Tl,8);yield;let w=Math.round((n-Dr)/Lr);if(u.country>.9&&_n(w,17)<.7){let L=_n(w,19)<.5?-1:1,D=L>0?g+9:-(g+9+46),U=L>0?g+9+46:-(g+9);wg(e,b,D,U,L*(g+9),Math.abs(w)%4,Lt(Math.floor(_n(w,23)*4294967295))),T.setM(b)}yield;for(let L of Qu(this.path,n)){let D=new et().makeRotationY(L.yaw);D.setPosition(L.x-c,L.y,L.z-h),Cg(e,D)}ur(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85),ur(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,l,a,c,h,d,p){let g=this.path.at(n,{}),_=g.y,S=o(n),M=a(n),y=Ct(n),u=[y.city,y.sakura,y.coast,y.country],x=y.sakura>.5,f=222,m=S+M+.5,v=_-hl,E=(w,L,D)=>[g.x+g.fx*w+g.rx*L-c,D,g.z+g.fz*w+g.rz*L-h];{let w=[],L=[],D=[];for(let z=0;z<=74;z++){let O=-f+2*f*z/74;for(let k of[14.3,-14.3]){let W=E(k,O,v);w.push(W[0],W[1],W[2]),L.push(k,O)}if(z>0){let k=(z-1)*2;D.push(k,k+1,k+2,k+1,k+3,k+2)}}let V=new mt;V.setAttribute("position",new Je(w,3)),V.setAttribute("su",new Je(L,2)),V.setIndex(D),V.computeBoundingSphere(),p.push(V)}for(let[w,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[D,U]of[[-f,-(S+3.4)],[S+3.4,f]])t.grid(41,2,(V,z)=>{let O=D+(U-D)*V/40,k=z?L:w,W=E(k,O,_+.38);return[W[0],W[1],W[2],0,1,0,k,O,u[0],u[1],u[2],u[3],S,9,1]});yield;let b=s(n,0,_,0,!1),T=e.color,C=[.74,.73,.7],R=x?[.78,.2,.15]:[.55,.72,.64];T.setM(b),T.box(-24.5,-1,-m,24.5,-.03,m,C,null,{noBottom:!1});for(let w of[-1,1])T.box(-24.5,-1.3,w>0?m-.35:-m,24.5,-.95,w>0?m:-m+.35,[.62,.61,.58]);for(let w of[-8,8])T.box(w-.7,-hl-1.4,-m+.6,w+.7,-1,m-.6,C);for(let w of[-25.7,25.7])T.box(w-1.2,-hl+.4,-m-.4,w+1.2,-.05,m+.4,C);for(let w of[-24.5,24.5])T.box(w-.16,.004,-S,w+.16,.016,S,[.33,.32,.31]),T.box(w-.02,.016,-S,w+.02,.02,S,[.2,.19,.19]);let P=M>0?.15:0;for(let w of[-1,1]){let L=w*(m-.14);for(let D=-24;D<=24.01;D+=2)T.box(D-.06,P,L-.06,D+.06,P+1,L+.06,R);T.box(-24,P+.95,L-.08,24,P+1.08,L+.08,R),T.box(-24,P+.48,L-.03,24,P+.54,L+.03,R),T.box(-24,P+.06,L-.03,24,P+.12,L+.03,R)}let A="bridge"+Math.abs(Math.round(n/Nr))%4;for(let w of[-25,25])for(let L of[-1,1]){let D=L*(m-.1),U=[.7,.69,.65];T.box(w-.32,P,D-.32,w+.32,P+1.45,D+.32,U),T.box(w-.38,P+1.45,D-.38,w+.38,P+1.58,D+.38,[.62,.61,.57]),e.atlas.setM(b);let V=(w<0?-1:1)*.325,z=A;w<0?e.atlas.quad([w-.325,P+.3,D-.22],[w-.325,P+.3,D+.22],[w-.325,P+1.3,D+.22],[w-.325,P+1.3,D-.22],[1,1,1],Wo(z)):e.atlas.quad([w+.325,P+.3,D+.22],[w+.325,P+.3,D-.22],[w+.325,P+1.3,D-.22],[w+.325,P+1.3,D+.22],[1,1,1],Wo(z)),T.setM(b)}vl(e,s(n-14,-(m-.45),_+P,0,!0)),vl(e,s(n+14,m-.45,_+P,0,!0)),yield;{e.atlas.setM(new et);let w=Wo("gogan"),L=2.4,D=150;for(let U of[-1,1])for(let V=-D;V<D-.01;V+=L){let z=V+L,O=E(U*13.9,V,v-.12),k=E(U*13.9,z,v-.12),W=E(U*16.05,z,v+.72),$=E(U*16.05,V,v+.72),le=(k[1]-O[1])*($[2]-O[2])-(k[2]-O[2])*($[1]-O[1]),Me=(k[0]-O[0])*($[1]-O[1])-(k[1]-O[1])*($[0]-O[0]),be=E(0,(V+z)/2,v),K=le*(be[0]-O[0])+Me*(be[2]-O[2])>0,j={u0:w.u0,u1:w.u1,v0:w.v0,v1:w.v1};K?e.atlas.quad(O,k,W,$,[1,1,1],j):e.atlas.quad(k,O,$,W,[1,1,1],{u0:w.u1,u1:w.u0,v0:w.v0,v1:w.v1})}for(let U of[-1,1])for(let V of[-1,1])for(let z=14+d()*3;z<125;z+=d.range(2.4,5)){if(d()<.35)continue;let O=U*(16.2+d()*1.1),k=V*z,W=1+(d()<.4?1:0);for(let $=0;$<W;$++){let le=E(O+U*d()*.6,k+(d()-.5)*.9,v+.7),Me=new et().makeRotationY(d()*6.28);Me.setPosition(le[0],le[1],le[2]),Dd(e,Me,d,"grass",d.range(1.9,2.8))}}}yield;for(let w of[-18,18])for(let L of[-1,1]){yield;for(let D=11+d()*4;D<(x?125:170);D+=x?d.range(8.5,11):d.range(18,34)){let U=n+w+(d()-.5)*1.5,V=L*D;qn(e,s(U,V,l(U,V),d()*6,!1),x?"sakura":"broad",d,x?d.range(1,1.25):d.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,l,a,c,h,d,p){let g=this.path.at(n.s,{}),_=g.y,S=c(n.s),M=S+1.4,y=Ct(n.s),u=[y.city,y.sakura,y.coast,y.country],x=o(n.s,0,_,0,!1),f=e.color,m=Math.max(s,n.s-bn)-n.s,v=Math.min(r,n.s+bn)-n.s;if(v>m+.01){let z=Math.max(2,Math.ceil((v-m)/3)+1),O=[-(S+1.5),-S,-S*.5,0,S*.5,S,S+1.5];t.gridN(z,O.length,(j,xe)=>{let Ce=m+(v-m)*j/(z-1),Ae=n.s+Ce,Pe=O[xe],We=_+Ku(Ce,Pe);return[g.x+g.fx*Ce+g.rx*Pe-h,We,g.z+g.fz*Ce+g.rz*Pe-d,0,1,0,ys(Ae,Ai),Pe,u[0],u[1],u[2],u[3],S,0,-1]});let k=[[-S,0],[-S,.2],[-M,.2],[-M,3.2]];for(let j=1;j<12;j++){let xe=Math.PI*(1-j/12);k.push([M*Math.cos(xe),3.2+3*Math.sin(xe)])}k.push([M,3.2],[M,.2],[S,.2],[S,0]);let W=[.86,.82,.72],$=[.44,.45,.47],le=[.62,.61,.58],Me=[];for(let j=m;j<v-.01;j+=6)Me.push(j);Me.push(v),f.setM(x);for(let j=0;j<Me.length-1;j++)for(let xe=0;xe<k.length-1;xe++){let[Ce,Ae]=k[xe],[Pe,We]=k[xe+1],Xe=Math.max(Ae,We)<=.21?le:Math.abs(Ce)>M-.01&&Math.abs(Pe)>M-.01?W:$;f.quad([Me[j],Ae,Ce],[Me[j+1],Ae,Ce],[Me[j+1],We,Pe],[Me[j],We,Pe],Xe)}e.sodium.setM(x),e.sig.setM(x);let be=M*Math.cos(Math.PI/6)-.12,K=3.2+3*Math.sin(Math.PI/6)-.08;for(let j=Math.ceil((m+bn-3)/6)*6+3-bn;j<v;j+=6)for(let xe of[-1,1])e.sodium.box(j-.45,K-.07,xe*be-.13,j+.45,K+.07,xe*be+.13,null),cr(e,x,j,K-.1,xe*be,1);for(let j=Math.ceil((m+bn)/24)*24-bn;j<v;j+=24)e.sig.box(j-.3,.95,-M+.01,j+.3,1.2,-M+.06,null);for(let j=Math.ceil((m+bn-30)/60)*60+30-bn;j<v;j+=60)for(let xe of[-1.15,1.15])f.box(j-1.1,5.2,xe-.36,j+1.1,5.78,xe+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),f.box(j-.08,5.78,xe-.05,j+.08,6.15,xe+.05,[.4,.4,.42]);yield}let E=(z,O)=>{let k=Math.sin(z*12.9898+O*78.233+n.k*37.719)*43758.5453;return k-Math.floor(k)},b=(z,O,k)=>[z[0]+(O[0]-z[0])*k,z[1]+(O[1]-z[1])*k,z[2]+(O[2]-z[2])*k],T=[.5,.5,.47],C=[.55,.53,.47],R=[.6,.6,.57],P=[.58,.58,.55],A=[.42,.42,.4],w=(z,O)=>{let k=E(z,O);return L?b([.26,.29,.08],[.42,.3,.09],k):b([.22,.29,.08],[.36,.36,.12],k)},L=y.mountain>.5,D=M+2.6,U=2.6;for(let z of[-1,1]){let O=n.s+z*bn,k=z*(bn+.08);if(O<s||O>=r)continue;let W=[];for(let ee of h1)ee>=1.44&&W.push(S+ee,-(S+ee));for(let ee of f1)ee>S+3.5&&ee<S+21&&W.push(ee,-ee);for(let ee=0;ee<=24;ee++)W.push(-M+2*M*ee/24);W.push(-M-.01,M+.01,-D,D),W.sort((ee,N)=>ee-N);let $=ee=>3.2+3*Math.sqrt(Math.max(0,1-(ee/M)**2)),le=ee=>Math.max(a(O-z*.03,ee)-_,Ku(z*(bn-.03),ee)),Me=ee=>Math.abs(ee)<=M+1e-6?$(ee):a(O+z*.03,ee)-_,be=8.4;for(let ee of W)Math.abs(ee)<=D&&(be=Math.min(be,le(ee)-.4));let K=be>6.6;f.setM(x);let j=z,xe=(ee,N,I,G,q,Q,ue,ge)=>{let he=[k,I,ee],de=[k,G,N],Ue=[k,Q,N],qe=[k,q,ee],De=z<0?[he,de,Ue,qe]:[de,he,qe,Ue],Ne=z<0?[ue,ue,ge,ge]:[ue,ue,ge,ge];for(let Fe of[0,1,2,0,2,3])f.vtx(De[Fe][0],De[Fe][1],De[Fe][2],j,0,0,0,0,Ne[Fe])},Ce=(ee,N,I)=>ee+(N-ee)*I;for(let ee=0;ee<W.length-1;ee++){let N=W[ee],I=W[ee+1];if(I-N<1e-4)continue;let G=le(N),q=le(I),Q=Me(N),ue=Me(I);if(G-Q<.01&&q-ue<.01)continue;let ge=(N+I)/2,he=K&&Math.abs(ge)<D,de=Q,Ue=ue;if(he){let Fe=b(T,[.46,.46,.44],E(Math.floor(ge/2.4),3.1)),Ke=.8+2.6*E(Math.floor(ge/.8),7.7),at=b(Fe,[.27,.27,.26],.35+.3*E(Math.floor(ge/.8),9.9)),Z=Math.min(be,G),Ie=Math.min(be,q),me=Math.max(Q,Z-Ke),Be=Math.max(ue,Ie-Ke);if(Math.abs(ge)>M){let He=Math.min(me,Q+.9),Ee=Math.min(Be,ue+.9);xe(N,I,Q,ue,He,Ee,b(Fe,[.25,.29,.18],.45),Fe),xe(N,I,He,Ee,me,Be,Fe,Fe)}else xe(N,I,Q,ue,me,Be,Fe,Fe);if(xe(N,I,me,Be,Z,Ie,Fe,at),de=Z,Ue=Ie,G-Z<.01&&q-Ie<.01)continue}let qe=Math.floor(ge/U),De=de,Ne=Ue;for(let Fe=Math.floor(Math.min(De,Ne)/U)+1;De<G-.01||Ne<q-.01;Fe++){let Ke=Fe*U,at=Math.min(G,Math.max(De,Ke)),Z=Math.min(q,Math.max(Ne,Ke)),Ie=w(qe,Fe);if(xe(N,I,De,Ne,at,Z,b(Ie,[.2,.22,.1],.25),Ie),De=at,Ne=Z,Fe>60)break}}let Ae=Math.min(k,k+z*.12),Pe=Math.max(k,k+z*.12),We=ee=>{for(let N=0;N<W.length-1;N++)if(ee>=W[N]&&ee<=W[N+1]&&W[N+1]>W[N]){let I=(ee-W[N])/(W[N+1]-W[N]);return[Ce(Me(W[N]),Me(W[N+1]),I),Ce(le(W[N]),le(W[N+1]),I)]}return null},Xe=W[0],we=W[W.length-1];for(let ee=Math.ceil(Xe/U)*U;ee<we;ee+=U){let N=We(ee);if(!N)continue;let I=(K&&Math.abs(ee)<D?Math.max(be+.3,N[0]):N[0])+.05,G=N[1]-.05;G-I>.4&&!(Math.abs(ee)<=M+.3&&!K)&&f.box(Ae,I,ee-.14,Pe,G,ee+.14,C)}for(let ee=1;ee<60;ee++){let N=ee*U,I=null,G=()=>{I&&I[1]-I[0]>.3&&f.box(Ae,N-.14,I[0],Pe,N+.14,I[1],C),I=null},q=!1;for(let Q=0;Q<W.length-1;Q++){let ue=W[Q],ge=W[Q+1];if(ge-ue<1e-4)continue;let he=(ue+ge)/2,de=Math.max(Me(ue),Me(ge),K&&Math.abs(he)<D?be+.3:-1e9),Ue=Math.min(le(ue),le(ge));N>de+.2&&N<Ue-.2?(q=!0,I?I[1]=ge:I=[ue,ge]):G()}if(G(),!q&&N>30)break}K&&f.box(Math.min(k,k+z*.32),be-.05,-D,Math.max(k,k+z*.32),be+.3,D,R);let Ze=k+z*.32,te=ee=>-M+2*M*ee/24,Te=ee=>[te(ee),$(te(ee))],X=ee=>[te(ee)*1.12,$(te(ee))+.6];for(let ee=0;ee<24;ee++){let[N,I]=Te(ee),[G,q]=Te(ee+1),[Q,ue]=X(ee),[ge,he]=X(ee+1);z<0?f.quad([Ze,I,N],[Ze,q,G],[Ze,he,ge],[Ze,ue,Q],P):f.quad([Ze,q,G],[Ze,I,N],[Ze,ue,Q],[Ze,he,ge],P),z<0?f.quad([k,I,N],[k,q,G],[Ze,q,G],[Ze,I,N],A):f.quad([k,q,G],[k,I,N],[Ze,I,N],[Ze,q,G],A),z<0?f.quad([k,he,ge],[k,ue,Q],[Ze,ue,Q],[Ze,he,ge],P):f.quad([k,ue,Q],[k,he,ge],[Ze,he,ge],[Ze,ue,Q],P)}for(let ee of[-1,1])f.box(Math.min(k,Ze),.2,ee>0?M:-M*1.12,Math.max(k,Ze),3.2,ee>0?M*1.12:-M,P);e.atlas.setM(x);let ae=1.9,ie=7.05,ne=7.85,B=k+z*.03,pe=Wo("tunnel"+(y.coast>.5?1:Math.abs(n.k)%2?2:0));z<0?e.atlas.quad([B,ie,-ae],[B,ie,ae],[B,ne,ae],[B,ne,-ae],[1,1,1],pe):e.atlas.quad([B,ie,ae],[B,ie,-ae],[B,ne,-ae],[B,ne,ae],[1,1,1],pe)}yield;let V=y.mountain>.5;for(let z=Math.max(s,n.s-rn*.95)+p()*3;z<Math.min(r,n.s+rn*.95);z+=p.range(4,8)){let O=Math.abs(z-n.s)>bn-4?17:4;for(let k of[-1,1]){let W=k*(S+p.range(O,50)),$=p();qn(e,l(z,W,-.3,p()*6,!1),V?$<.5?"maple":$<.8?"cedar":"ginkgo":$<.65?"pine":"broad",p,p.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,l,a,c){let h=d=>Ct(d).snow;if(!(h(n)<.3&&h(s)<.3)){for(let d of[-1,1]){for(let p=n+t()*20;p<s;p+=t.range(22,40)){if(h(p)<.6||t()<.5)continue;let g=d*t.range(18,90);ki(e,o(p,g,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(Us),litP:.62,fence:0,snow:!0});for(let _=0;_<2+t()*3;_++)qn(e,o(p+t.range(-9,9),g+d*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let p=n+t()*5;p<s;p+=t.range(3,7))h(p)<.5||(t()<.32&&qn(e,o(p,d*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&qn(e,o(p,d*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let d=Math.ceil(n/36)*36;d<s;d+=36){if(h(d)<.55)continue;let p=a(d);{let g=r(d,-(p+.95),l(d)+1.3),_=r(d+18,p+.95,l(d+18)+1.3);g.groundY=l(d),_.groundY=l(d+18),Id(e,g,1),Id(e,_,-1)}}}}*placeMountain(e,t,n,s,r,o,l,a,c){let h=d=>Ct(d).mountain;if(!(h(n)<.3&&h(s)<.3)){for(let d of[-1,1]){for(let p=n+t()*4;p<s;p+=t.range(4.5,8.5)){if(h(p)<.45||Ci(p,rn+6))continue;let g=a(p),_=t();if(d>0){let S=_<.5?"maple":_<.72?"ginkgo":"cedar";qn(e,o(p,g+t.range(17,70),-.25,t()*6,!1),S,t,t.range(.9,1.3))}else{let S=_<.55?"maple":_<.8?"cedar":"ginkgo";qn(e,o(p,-(g+t.range(3.5,34)),-.25,t()*6,!1),S,t,t.range(.95,1.35))}}yield}for(let d=n+t()*4;d<s;d+=t.range(3,6)){if(h(d)<.5)continue;let p=t()<.7,g=-(a(d)+(p?t.range(108,205):t.range(36,100)));qn(e,o(d,g,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new et);for(let d=Math.ceil(n/10)*10;d<s;d+=10){if(h(d)<.5||Ci(d,rn+4))continue;let p=a(d),g=r(d,-(p+.95),l(d));dg(e,g)}for(let d=Math.ceil(n/14)*14;d<s;d+=14){if(h(d)<.6)continue;let p=this.path.curv(d);if(Math.abs(p)<1/230)continue;let g=a(d);p>0?ur(e,r(d,g+.42,l(d)),"chev_l",-1,1.25,.58):ur(e,r(d,-(g+1.15),l(d)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,s,r,o,l){let a=this.path,c={},h=Lt(Math.floor(_n(t,1789)*4294967295)),d=vg(),p=Math.floor((n+Gt/2)/600)*600+300,g=Math.floor((n+Gt/2)/700)*700+120,_=Math.floor((n+Gt/2)/380)*380+190,S=_n(Math.round(_),5)<.5?-1:1;for(let x of[-1,1]){e.leaf.setM(p1);for(let f=n+h()*d;f<s;f+=d*h.range(.75,1.25)){if(un(f)!=="country"||Os(f,10)||ai(f,31)||x<0&&(Math.abs(f-p)<2.9||f>g-1.3&&f<g+2.7)||x===S&&Math.abs(f-_)<1.6)continue;a.at(f,c);let m=l(f),v=x*(m+.95+(h()-.5)*.36),E=c.y+vs(f,v,c.y,m),b=(h()-.5)*.8,T=Math.cos(b)*x,C=Math.sin(b)*x;Nd(e,c.x+c.rx*v-r,E,c.z+c.rz*v-o,c.rx*T+c.fx*C,c.rz*T+c.fz*C,h,h.range(.85,1.15))}yield}let M=Lt(Math.floor(_n(t,1811)*4294967295)),y=d>1?d*1.35:d;e.leaf.setM(p1);for(let x=n+M()*y;x<s;x+=y*M.range(.75,1.25)){if(Ct(x).coast<.6||Ci(x,rn+6))continue;let f=x-6-Math.round((x-6)/Bs)*Bs;if(Math.abs(f)<.9||Math.abs(x-(n+12))<.8)continue;a.at(x,c);let m=l(x),v=m+.95+(M()-.5)*.3,E=c.y+vs(x,v,c.y,m),b=(M()-.5)*.8,T=Math.cos(b),C=Math.sin(b);Nd(e,c.x+c.rx*v-r,E,c.z+c.rz*v-o,c.rx*T+c.fx*C,c.rz*T+c.fz*C,M,M.range(.62,.85),"bankC")}for(let x=n+M()*14;x<s;x+=M.range(14,30)){if(Ct(x).coast<.6||Ci(x,rn+6))continue;let f=x-6-Math.round((x-6)/Bs)*Bs;if(Math.abs(f)<1.4||Math.abs(x-(n+12))<1.2)continue;a.at(x,c);let m=l(x),v=m+M.range(1.3,2.3),E=c.y+vs(x,v,c.y,m),b=new et().makeRotationY(M()*6.28);b.setPosition(c.x+c.rx*v-r,E,c.z+c.rz*v-o),oh(e,b,M,M.range(1.1,1.4))}let u=Lt(Math.floor(_n(t,2417)*4294967295));for(let x of[-1,1])for(let f=n+u()*8;f<s;f+=u.range(8,14)){if(Ct(f).sakura<.6||ai(f,31))continue;let m=1+Math.floor(u()*3),v=x*(l(f)+2.95+u()*.4);a.at(f,c);let E=c.y+vs(f,v,c.y,l(f));for(let b=0;b<m;b++){let T=b*.75+u()*.25,C=v+x*(u()-.5)*.3,R=new et().makeRotationY(u()*6.28);R.setPosition(c.x+c.fx*T+c.rx*C-r,E,c.z+c.fz*T+c.rz*C-o),u()<.5?oh(e,R,u,u.range(1.05,1.35)):xl(e,R,u,u.range(.45,.6))}}}*placeVerge(e,t,n,s,r,o,l,a,c,h){yield*this.placeBanks(e,a,n,s,c,h,l);for(let d of[-1,1]){for(let p=n+t()*1.2;p<s;p+=t.range(.55,1.5)){if(Os(p,10)||ai(p,31)||Ci(p,rn+4))continue;let g=un(p),_=l(p),S,M,y=.22,u=1;if(g==="country")S=_+t.range(2.05,2.8),M=.25,y=.35;else if(g==="sakura")S=_+2.68+t()*1.3,M=.55,y=.3;else if(g==="coast"){if(d<0)continue;S=_+.95+t()*1.7,M=.75,y=.18}else{if(g==="snow")continue;if(g==="mountain")S=d<0?_+1+t()*.35:_+.25+t()*.2,M=d<0?.55:.18,y=.12,u=.85;else{if(Zd(p,5))continue;S=_+3.02+t()*.1,M=.1,y=.08,u=.65}}if(t()>M)continue;let x=d*S;Dd(e,r(p,x,o(p,x),t()*6.28,!1),t,t()<y?"flowers":"grass",u*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new et);let l=Math.max(1,Math.round((n-t)/2)),a=Se.rail,c=[.62,.64,.66],h=[.74,.76,.79],d=[.95,.55,.16];for(let p=0;p<l;p++){let g=t+(n-t)*p/l,_=t+(n-t)*(p+1)/l,S=-(o(g)+.95),M=-(o(_)+.95),y=r(g),u=r(_);for(let f=0;f<Xd.length-1;f++){let[m,v]=Xd[f],[E,b]=Xd[f+1];e.color.quad(s(g,S+v,y+m),s(_,M+v,u+m),s(_,M+b,u+E),s(g,S+b,y+E),a)}e.color.quad(s(_,M+.05,u+.5),s(g,S+.05,y+.5),s(g,S+.05,y+.84),s(_,M+.05,u+.84),c),e.color.noShadow=!0;let x=s(g,S-.04,y);if(e.color.cyl(x[0],y,x[2],.055,.055,.8,6,h,!1),Math.round(g/2)%2===0){let f=s(g,S+.035,y+.64),m=s(g+.09,S+.035,y+.64);e.color.quad(m,f,[f[0],f[1]+.07,f[2]],[m[0],m[1]+.07,m[2]],d)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,l,a,c,h,d,p,g){for(let M of[-1,1]){let y=n+t()*2;for(;y<s-2;){{let L=Ct(y);if(L.city<.62||L.mountain>.1){y+=4;continue}}{let L=rr(y+6);if(L&&y<L.s+8.5&&y+14>L.s-8.5){y=Math.max(y+1,L.s+8.5);continue}}let u=2*Math.round(y/300),x=u*150;if(y>x-m1(u)&&y<x+Yd(u)){y=x+Yd(u)+.05;continue}let f=a(y),m=c(y)||3,v=f+m+.15,E=t(),b=y<420||E<.84?"machiya":E<.89?"shop":E<.93?"apt":E<.96?"konbini":"house",T=b==="shop"?t.range(5,9):b==="machiya"?t.range(6,9.5):b==="apt"?t.range(10,16):b==="house"?t.range(7,9.5):t.range(12,14);if(y+T>s){if(s-y<5||b==="konbini")break;T=s-y-.2}{let L=y<x?u:u+2,D=L*150-m1(L);if(y+T>D-.1){if(D-.1-y<4){y=L*150+Yd(L)+.05;continue}T=D-.1-y}}let C=y+T/2,R=l(C),P=t.pick(Us),A=.42,w=b==="machiya"&&t()<.6;{let L=r(C,M*v,R+.15),D={type:b,w:T,d:b==="apt"?t.range(10,14):t.range(8,12),floors:b==="shop"?t.int(2,4):b==="machiya"?t()<.7?2:3:b==="apt"?t.int(4,9):2,tint:w?Td[Math.floor(t()*Td.length)]:P,litP:A,plaster:w,fence:b==="house"&&t()<.5?1.2:0};if(ki(e,L,t,D),b!=="house"&&t()<.28&&Cd(e,r(C+(t()-.5)*(T-1.2),M*(v-.42),R+.15),t),(b==="shop"||b==="konbini"||b==="machiya")&&t()<.3)for(let U=0;U<1+t()*3;U++)ug(e,r(C-T/2+.8+U*.55,M*(v-.75),R+.15,Math.PI/2+.1),t);if(b==="house"&&t()<.6)for(let U=0;U<2+t()*3;U++)Pd(e,r(C+1+U*.5,M*(v-.3),R+.15),t);if(t()<.03)for(let U=0;U<3;U++)hg(e,r(C+U*.9,M*(f+.35),R))}y+=T+t.range(.05,.5),yield}for(let u=n+t()*10;u<s-8;u+=t.range(14,26)){if(Ct(u).city<.7||Ct(u).mountain>.1||t()<.3||Os(u,18)||Zd(u,15))continue;let x=a(u),f=r(u,M*(x+3.2+t.range(14,20)),l(u)+.1);ki(e,f,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(Us),litP:.4})}if(Ct(n+30).city>.7&&Ct(n+30).mountain<.1&&t()<.65){let u=n+t()*Gt;if(Os(u,24)||Zd(u,20))continue;let x=r(u,M*t.range(55,150),l(u));ki(e,x,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(Us),litP:.45})}}let _=Math.ceil(n/150),S=Math.floor((s-.01)/150);for(let M=_;M<=S;M++){let y=M*150;if(!vS(M)||un(y)!=="city"||Ct(y).mountain>.1)continue;let u=a(y);yield*this.intersection(e,t,y,M,r,l,a,c,d,p,g),hh(M)&&(ur(e,r(y-1,-(u+.4),l(y)+.15),"sign_blue",1),ur(e,r(y-6,-(u+.4),l(y)+.15),"sign_stop",1,2.1,.75),Ld(e,r(y+7,u+.4,l(y)+.15),-1),M%8===4&&ur(e,r(y+20,-(u+.4),l(y)+.15),"sign_speed",1))}}houseGarden(e,t,n,s,r,o,l,a,c,h){let d=o.ww/2;if(a)for(let p=-d-.6;p<d+.6;p+=t.range(1.2,1.9)){if(Math.abs(p)<.9&&a===1&&t()<.7)continue;let g=l(n+p,s-r*t.range(1.1,1.7),0,t()*6,!1);a===2&&t()<.6?xl(e,g,t,t.range(.75,1)):fg(e,g,t,t.range(.5,.75))}for(let p=0;p<c;p++){let g=(p%2?-1:1)*(t()<.5?1:-1);qn(e,l(n+g*(d+t.range(3.2,5.5)),s+r*t.range(1,o.wd),0,t()*6),"broad",t,t.range(.9,1.25))}for(let p=0;p<h;p++)qn(e,l(n+t.range(-d-2,d+2),s+r*(o.wd+t.range(3.5,7)),0,t()*6),"broad",t,t.range(.95,1.3))}*placeSakura(e,t,n,s,r,o,l,a,c){let h=Lt(Math.floor(_n(Math.round(n/Gt),2423)*4294967295));for(let g of[-1,1]){for(let _=n+t()*4;_<s;_+=t.range(7.5,10)){if(Ct(_).sakura<.45||ai(_,30))continue;let S=a(_);if(qn(e,o(_,g*(S+3.7),0,Oi.bcells?(t()-.5)*.6:t()*6),"sakuraAve",t,t.range(1.05,1.3)),Ct(_).sakura>.6&&h()<.65)for(let M=0,y=2+(h()<.4?1:0),u=h()*6.28;M<y;M++){let x=u+M/y*6.28+(h()-.5)*1.2,f=h.range(.75,1.15),m=Math.max(S+2.9,S+3.7+Math.sin(x)*f*.8),v=o(_+Math.cos(x)*f,g*m,0,h()*6.28,!1);h()<.6?oh(e,v,h,h.range(1.2,1.55)):xl(e,v,h,h.range(.5,.65))}t()<.45&&qn(e,o(_+3,g*(S+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let _=n+(g>0?0:12);_<s;_+=24){if(un(_)!=="sakura"||ai(_,30))continue;let S=a(_);vl(e,r(_,g*(S+2.25),l(_)+.15)),ys(_,48)<24&&Pg(e,r(_+6,g*(S+3),c(_+6,g*(S+3))))}for(let _=n+t()*15;_<s;_+=t.range(14,24)){if(un(_)!=="sakura"||t()<.35||ai(_,45))continue;let S=a(_),M=ah("sakura",t);if(!M){ki(e,o(_,g*(S+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(Us),litP:.45,fence:t()<.6?1.4:0});continue}let y=g*(S+t.range(19,26)),u=t()<.45?1.4:0;ki(e,o(_,y),t,{type:"house",w:M.ww,d:M.wd,ptype:M,fence:u}),this.houseGarden(e,t,_,y,g,M,o,u?0:1,0,0)}}let p=Math.floor((n+Gt/2)/480)*480+240;p>=n&&p<s&&un(p)==="sakura"&&!ai(p,60)&&Fd(e,r(p,0,l(p),0,!1),a(p)+1.6,6.4)}coastWall(e){return Ct(e).coast>=.7&&!Ci(e,rn+14)}coastHeaps(e){let t=this.heapCache.get(e);if(t)return t;t=[];let n=Lt(Math.floor(_n(e,5501)*4294967295)),s=e*Gt,r=s+Gt;for(let o=s+1+n()*12;o<r-3;o+=n.range(12,26)){let l=n.range(1.25,1.5),a=n.range(4.5,11),c=n()<.4?3:2,h=Math.min(o+a,r-.5);!this.coastWall(o)||!this.coastWall(h)||t.push({sa:o,sb:h,L:l,rows:c,dOut:(.8+(c-1)*1.45+.95)*l})}return this.heapCache.size>48&&this.heapCache.clear(),this.heapCache.set(e,t),t}*placeCoast(e,t,n,s,r,o,l,a,c,h){let d=this.path,p={},g=this.coastHeaps(n),_=Lt(Math.floor(_n(n,5507)*4294967295));for(let v of g){let E=v.L;for(let C=0;C<v.rows;C++){let R=.8*E+C*1.45*E,P=(C===0?.28:C===1?0:-.3)*E;for(let A=v.sa+_()*.7*E;A<v.sb;A+=1.5*E*_.range(.88,1.12)){let w=a(A),L=h(A,-(w+cl+R+(_()-.5)*.45*E),0);if(Bd(e,L[0],ns+P+(_()-.5)*.3*E,L[2],_,E*_.range(.92,1.08),ns-.7,C===0?.8:.45),C===0&&v.rows>1&&_()<.4){let D=h(A+.7*E,-(w+cl+R+.72*E),0);Bd(e,D[0],ns+1.05*E,D[2],_,E*_.range(.9,1),ns-.7)}}}let b=Math.max(3,Math.round(uh.n*(v.sb-v.sa+2)/7)),T=ys(s,Ai)-s;for(let C=0;C<b;C++){let R=v.sa+(v.sb-v.sa)*(C+.5)/b+(_()-.5)*1.4,P=a(R);d.at(R,p);let A=h(R,-(P+cl+v.dOut*(.45+.55*_())-.3),ns+.35);c.puffs.push(A[0],A[1],A[2],-p.rx,-p.rz,v.dOut,_(),R+T)}}g.length&&(yield);let S=[...this.coastHeaps(n-1),...g,...this.coastHeaps(n+1)],M=ys(s,Ai),y=[];for(let v=0;v<=10;v++)y.push(s+v*6);for(let v of S)for(let E of[v.sa-3.2,v.sa-.4,v.sb+.4,v.sb+3.2])E>s+.5&&E<r-.5&&y.push(E);y.sort((v,E)=>v-E);for(let v=0;v<y.length;v++){let E=y[v];if(v>0&&E-y[v-1]<.6)continue;if(!this.coastWall(E)){if(c.rows.length)break;continue}let b=1;for(let R=1;R<=3;R++)if(!this.coastWall(E-2*R)||!this.coastWall(E+2*R)){b=(R-1)/3;break}let T=a(E),C=new Float32Array(qd.length*7);qd.forEach((R,P)=>{let A=h(E,-(T+cl+R),ns+.03),w=0;for(let L of S)w=Math.max(w,(1-Tt(.4,3.2,Math.max(L.sa-E,E-L.sb,0)))*(1-Tt(.2,3.4,R-L.dOut)));C.set([A[0],A[1],A[2],M+(E-s),R,w,b],P*7)}),c.rows.push(C)}c.rows.length&&(yield);let u=Lt(Math.floor(_n(n,5531)*4294967295)),x=null;if(un(s+30)==="coast"&&u()<.5){let v=s+u()*Gt,E=a(v);Ci(v,rn+25)||(x={s:v,rw:E,T:ah("coast",u),u:E+u.range(11,17)})}for(let v=s+t()*6;v<r;v+=t.range(5,9)){if(un(v)!=="coast"||Ci(v,rn+6))continue;let E=a(v),b=t();if(b>=.58)continue;let T=E+t.range(4.5,30);x&&x.T&&Math.abs(v-x.s)<x.T.ww/2+2.5&&T>x.u-3.5&&T<x.u+x.T.wd+2.5||qn(e,l(v,T,0,t()*6,!1),b<.48?"broad":"pine",t,t.range(1,1.4))}for(let v=s+4;v<r;)v+=t.range(18,30);for(let v=s+12;v<r;v+=48){if(un(v)!=="coast"||Ci(v,rn+4))continue;let E=a(v);Rd(e,l(v,E+1),t)}let f=Lt(Math.floor(_n(n,5519)*4294967295));for(let v=s+f()*5;v<r;v+=f.range(5,11)){if(Ct(v).coast<.6||Ci(v,rn+6))continue;let E=1+Math.floor(f()*2.4);for(let b=0;b<E;b++){let T=v+b*f.range(1.1,1.8),C=a(T)+f.range(1.4,2.5),R=f()*6.28,P=f.range(1.05,1.45),A=T-6-Math.round((T-6)/Bs)*Bs,w=T-12-Math.round((T-12)/48)*48;Math.abs(A)<1.4||Math.abs(w)<1.2||xl(e,l(T,C,0,R,!1),f,P)}}if(x){let{s:v,rw:E,T:b,u:T}=x;b?(ki(e,l(v,T),u,{type:"house",w:b.ww,d:b.wd,ptype:b}),this.houseGarden(e,u,v,T,1,b,l,2,1,1)):ki(e,l(v,E+u.range(9,16)),u,{type:"house",w:u.range(7,10),d:8,floors:u()<.5?2:1,tint:u.pick(Us),litP:.5,fence:0})}if(un(s+30)==="coast"&&t()<.55){let v=s+t()*Gt;Ug(e,o(v,-(a(v)+t.range(45,220)),ns-.25,t()*6,!1),t)}let m=Math.floor((s+Gt/2)/1500)*1500+700;m>=s&&m<r&&un(m)==="coast"&&!Ci(m,rn*1.6)&&Ng(e,o(m,-(a(m)+75),ns-1,0,!1))}*placeCountry(e,t,n,s,r,o,l,a,c){for(let _ of[-1,1]){yield;for(let S=n+t()*20;S<s;S+=t.range(20,40)){if(un(S)!=="country"||t()<.55||Os(S,16)||ai(S,48))continue;let M=_*t.range(16,95),y=o(S,M),u=ah("country",t);if(u){ki(e,y,t,{type:"house",w:u.ww,d:u.wd,ptype:u}),this.houseGarden(e,t,S,M,_,u,o,1,2,2);continue}ki(e,y,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(Us),litP:.5,fence:0});for(let x=0;x<2+t()*3;x++){let f=M+_*t.range(6,14),m=S+t.range(-8,8);qn(e,o(m,f,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let S=n+t()*8;S<s;S+=t.range(5,9)){if(un(S)!=="country"||Os(S,7)||ai(S,36))continue;let M=_*t.range(140,210);qn(e,o(S,M,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Os(S+2,8)&&!ai(S+2,34)&&qn(e,o(S+2,_*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let h=Math.floor((n+Gt/2)/600)*600+300;if(h>=n&&h<s&&un(h)==="country"&&!ai(h,40)){let _=a(h);Ig(e,r(h,-(_+1.6),l(h)-.08),t)}let d=Math.floor((n+Gt/2)/700)*700+120;if(d>=n&&d<s&&un(d)==="country"&&!ai(d,40)){let _=a(d);Cd(e,r(d,-(_+.95),l(d)-.08),t),Rd(e,r(d+2,-(_+.8),l(d)-.08),t)}let p=Math.floor((n+Gt/2)/900)*900+450;if(p>=n&&p<s&&un(p)==="country"&&!ai(p,40)){let _=a(p);Fg(e,o(p,_+5),t)}let g=Math.floor((n+Gt/2)/380)*380+190;if(g>=n&&g<s&&un(g)==="country"&&!ai(g,40)&&!Os(g,30)){let _=a(g),S=(_n(Math.round(g),5)<.5?-1:1)*(_+2.75);Rg(e,o(g,S,0))}for(let _=n;_<s;_+=30){if(un(_)!=="country")continue;let S=this.path.curv(_);if(Math.abs(S)>1/450&&t()<.5){let M=S>0?-1:1,y=a(_);Ld(e,o(_,M*(y+.75)),M>0?-1:1)}}}};var Zo={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function g1(i){let e=i.get("weather"),t={mode:Zo[e]?e:"auto",kind:Zo[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return Zo[e]&&(t.ov=Zo[e][0],t.rain=Zo[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=Zo[t.kind];t.ov+=$t(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=$t(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var Hi={uHeadPos:{value:new H},uHeadDir:{value:new H(0,0,1)},uHeadI:{value:0},uLampW:{value:[new dt(0,-1e3,0,0),new dt(0,-1e3,0,0)]},uLampCol:{value:new _e(1,.8,.52)}},dh=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function v1(){let e=new H(42,22,42),t=new sn(1,1),n=new fs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new In(s,4)),n.instanceCount=2400;let r=new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uAmt:{value:0},uBox:{value:e},uCol:{value:new _e(1,1,1)},...Hi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${dh}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new ct(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,c,h){o.visible=c>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=c,r.uniforms.uCol.value.setRGB(.3+.7*h,.33+.67*h,.42+.58*h)}}}function x1(){let e=new H(46,24,46),t=new sn(1,1);t.translate(0,.5,0);let n=new fs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new In(s,4)),n.instanceCount=2600;let r=new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uRain:{value:0},uBox:{value:e},uCol:{value:new _e(.8,.85,.95)},...Hi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${dh}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new ct(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,c,h){o.visible=c>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=c,r.uniforms.uCol.value.setRGB(.1+.8*h,.12+.83*h,.16+.84*h)}}}var li=64,Jd=[2.2,1.3,2.6],xS=[-2.4,.35,-1.6];function y1(){let i=new Float32Array(li*3),e=new Float32Array(li*3),t=new Float32Array(li*4),n=new Float32Array(li),s=new Uint8Array(li),r=new Float32Array(li);for(let x=0;x<li;x++)t[x*4]=t[x*4+1]=1;let o=new sn(1,1),l=new fs;l.index=o.index,l.setAttribute("position",o.attributes.position),l.setAttribute("uv",o.attributes.uv),l.instanceCount=0;let a=new Float32Array(li*4),c=new Float32Array(li*4),h={uP:{value:a},uC:{value:c},uNoiseTex:ke.uNoiseTex,uAmb:{value:new _e},uSun:{value:new _e},uTail:{value:new dt},uCam:{value:new H},...Hi},d=new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:h,vertexShader:`
      uniform vec4 uP[${li}], uC[${li}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${dh}
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
      }`}),p=new ct(l,d);p.frustumCulled=!1,p.renderOrder=4,p.visible=!1;let g=0,_=0,S=0,M=0,y=!1;function u(x,f,m,v,E,b,T,C,R,P,A){let w=g;g=(g+1)%li,i[w*3]=f,i[w*3+1]=m,i[w*3+2]=v,e[w*3]=E,e[w*3+1]=b,e[w*3+2]=T,t[w*4]=0,t[w*4+1]=C,t[w*4+2]=R,t[w*4+3]=P,n[w]=A,s[w]=x,r[w]=Math.random()}return{mesh:p,update(x,f,m,v,E,b,T,C,R,P,A){if(!A){if(y){for(let K=0;K<li;K++)t[K*4]=t[K*4+1];y=!1}p.visible=!1;return}let w=f.position,L=f.rotation.y,D=Math.cos(L),U=Math.sin(L),V=U*m,z=D*m,O=Math.min(1,Math.max(0,(m-2)/14)),k=E>.3?2:0,W=k?E:v;for(_+=24*W*O*x;_>=1;){_-=1;let K=(M^=1)?1:-1,j=K*.67,xe=-1.28-Math.random()*.2,Ce=Math.random(),Ae=Math.random(),Pe=1.6+1.6*Ce,We=k?.5+.7*Ae:.9+1*Ae,Xe=K*(.3+.6*Math.random());u(k,w.x+j*D+xe*U,w.y+.12,w.z-j*U+xe*D,V*.55-U*Pe+Xe*D,We,z*.55-D*Pe-Xe*U,k?.45+.3*Ce:.55+.35*Ce,.2+.1*Ae,k?.7+.35*Ae:.8+.4*Ae,.5*(.5+.5*O)*Math.min(1,W*1.5))}for(S+=(5+4*O)*b*x;S>=1;){S-=1;let K=Math.random();u(1,w.x-.42*D-1.78*U,w.y+.26,w.z+.42*U-1.78*D,V*.5-U*.8,.25+.2*K,z*.5-D*.8,1.3+.6*K,.14,.8+.4*Math.random(),.32*Math.min(1,b*1.5))}let $=0,le=Math.exp(-Jd[0]*x),Me=Math.exp(-Jd[1]*x),be=Math.exp(-Jd[2]*x);for(let K=0;K<li;K++){let j=K*4;if(t[j]>=t[j+1])continue;let xe=t[j]+=x,Ce=t[j+1];if(xe>=Ce)continue;let Ae=s[K],Pe=Ae===0?le:Ae===1?Me:be,We=K*3,Xe=i[We]-P.x,we=i[We+1]-P.y,Ze=i[We+2]-P.z;if(Xe*Xe+we*we+Ze*Ze<20.25){t[j]=Ce;continue}e[We]*=Pe,e[We+1]=e[We+1]*Pe+xS[Ae]*x,e[We+2]*=Pe,i[We]+=e[We]*x,i[We+1]=Math.max(w.y+.05,i[We+1]+e[We+1]*x),i[We+2]+=e[We+2]*x;let te=xe/Ce,Te=$*4;a[Te]=i[We],a[Te+1]=i[We+1],a[Te+2]=i[We+2],a[Te+3]=t[j+2]+(t[j+3]-t[j+2])*Math.sqrt(te),c[Te]=n[K]*Math.min(1,te*6)*(1-te)*(1-te),c[Te+1]=Ae,c[Te+2]=r[K],$++}y=$>0,p.visible=y,l.instanceCount=$,y&&(h.uAmb.value.copy(T),h.uSun.value.copy(C),h.uTail.value.copy(R),h.uCam.value.copy(P))},shift(x,f){for(let m=0;m<li;m++)i[m*3]-=x,i[m*3+2]-=f}}}var kr=24,yS=55,_S=12;function _1(){let i=[],e=new Float32Array(kr*2*2),t=new Float32Array(kr*2*3);for(let c=0;c<kr;c++)if(e.set([c,-1,c,1],c*4),c<kr-1){let h=c*2;i.push(h,h+1,h+2,h+1,h+3,h+2)}let n=new mt;n.setAttribute("position",new bt(t,3)),n.setAttribute("aI",new bt(e,2)),n.setIndex(i);let s=new Float32Array(kr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new _e},uTime:{value:0},uNoiseTex:ke.uNoiseTex},o=new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${kr}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${Ri}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),l=new ct(n,o);l.frustumCulled=!1,l.renderOrder=1,l.visible=!1;let a={};return{mesh:l,update(c,h,d,p,g,_,S,M){if(l.visible=_>.01,!!l.visible){for(let y=0;y<kr;y++)c.at(h+yS+y*_S,a),s[y*4]=a.x-d,s[y*4+1]=a.y,s[y*4+2]=a.z-p,s[y*4+3]=a.h;r.uW.value=g*.85,r.uHot.value=_,r.uTime.value=S,r.uSky.value.copy(M)}}}}var Ko=1.6;function b1(i,e=null){let t=i==="high",[n,s,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,l=t?16:14,a=[4,Math.round(s*.4),Math.round(s*.65),s].filter((A,w,L)=>!w||A>L[w-1]),c=[s,Math.round((s+r)/2),r],h=(A,w)=>{let L=new fs;return L.setAttribute("position",new Je(A,3)),L.setIndex(w),L},d=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],p=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],g=new Float32Array(ar*4),_=new Float32Array(ar),S={uG:{value:g},uGM:{value:_},uGP:{value:new dt(0,1/Ko,3.1,0)},uGQ:{value:new dt(0,1.05,3,0)},uRingD:{value:new dt(s,r,0,0)}},M=[],y=(A,w,L)=>{let D={uRing:{value:new dt(0,0,L?2*n:n,L)},uRingC:{value:new dt(0,0,0,0)}},U=h(...L?p:d);U.instanceCount=0;let V=new ct(U,Bm(D,S));V.frustumCulled=!1,V.castShadow=!1,V.receiveShadow=!1,V.visible=!1,M.push({mesh:V,u:D,dA:A,dB:w,size:L?2*n:n,W:L?l:o,last:w===s||w===r})};for(let A=0;A<a.length-1;A++)y(a[A],a[A+1],0);for(let A=0;A<c.length-1;A++)y(c[A],c[A+1],1);let u=new Int32Array(64).fill(-2147483648),x=new Float32Array(64),f=new Uint8Array(64),m=A=>{let w=A&63;if(u[w]!==A){u[w]=A;let L=A*Ko,D=rr(L),U=Fi(L),V=Ct(L).country,z=Math.min(1,Math.max(0,(V-.97)/.025))*(D?Math.min(1,Math.max(0,(Math.abs(L-D.s)-13)/7)):1)*(U?Math.min(1,Math.max(0,(Math.abs(L-U.s)-38)/10)):1);x[w]=z>0?3+4*Math.round(z*15):0,f[w]=V>0?1:0}return w},v=A=>x[m(A)],E=A=>f[m(A)],b={},T=NaN,C=NaN,R=NaN,P=0;return{meshes:M.map(A=>A.mesh),hide(){for(let A=0;A<M.length;A++)M[A].mesh.visible=!1},warm(A){for(let w of M)w.mesh.visible=A,A&&(w.u.uRing.value.y=1,w.u.uRingC.value.set(1,1,w.W,0),w.mesh.geometry.instanceCount=2)},update(A,w,L,D,U,V,z){let O=Math.floor((w-3)/Ko);if(!E(O)&&!E(O+ar-1))P=0;else{if(O!==T||D!==C||U!==R){T=O,C=D,R=U,P=0;for(let k=0;k<ar;k++)A.at((O+k)*Ko,b),g[k*4]=b.x-D,g[k*4+1]=b.y,g[k*4+2]=b.z-U,g[k*4+3]=b.h,P|=_[k]=v(O+k)}S.uGP.value.set(O*Ko,1/Ko,V,w),S.uGQ.value.set(L,z,3,0)}for(let k=0;k<M.length;k++){let W=M[k];if(!P){W.mesh.visible=!1;continue}let $=Math.floor((w+W.dA)/W.size),le=Math.floor((w+W.dB)/W.size)+(W.last?1:0),Me=z*W.dB+3,be=V+2.6,K=Math.min(W.W,Math.max(0,Me-(be+L))),j=Math.min(W.W,Math.max(0,Me-(be-L))),xe=K>0?Math.ceil(K/W.size)+1:0,Ce=j>0?Math.ceil(j/W.size)+1:0;W.u.uRing.value.x=$,W.u.uRing.value.y=le-$,W.u.uRingC.value.set(xe,Ce,W.W,0),W.mesh.geometry.instanceCount=(le-$)*(xe+Ce),W.mesh.visible=W.mesh.geometry.instanceCount>0}}}}var $o=72;function bS(){let i=[],e=[],t=(s,r,o,l,a,c)=>{i.push(...s,...r,...o),e.push(l,a,c)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new mt;return n.setAttribute("position",new Je(i,3)),n.setAttribute("aWing",new Je(e,1)),n}function M1(){let i=bS(),e=new In(new Float32Array($o*3),3),t=new In(new Float32Array($o*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new ut({side:Sn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:re.fog},uFogD:{value:.002},uCam:{value:new H}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new ji(i,n,$o);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},l=new et,a=new xn,c=new jn(0,0,0,"YXZ"),h=new H,d=new H,p=()=>r.reduce((S,M)=>S+M.birds.length,0);function g(S,M,y,u){let x=S==="small"?6+Math.floor(Math.random()*7):S==="crow"?3+Math.floor(Math.random()*5):4;if(p()+x>$o)return;let f=45+Math.random()*85,m=(Math.random()-.5)*120,v=Math.random()<.5?1:-1,E=new H().copy(M).addScaledVector(y,f).addScaledVector(u,m-v*75);E.y=M.y+(S==="crow"?18+Math.random()*24:10+Math.random()*18);let b=S==="small"?11+Math.random()*4:8+Math.random()*3,T=new H().copy(u).multiplyScalar(v*b).addScaledVector(y,(Math.random()-.3)*b*.6),C=S==="small"?.8:1.45,R=Array.from({length:x},(P,A)=>({off:new H((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:S==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:S,c:E,vel:T,birds:R,size:C,life:60})}function _(S,M,y,u){if(r.some(m=>m.kind==="gull")||p()+4>$o)return;let x=new H().copy(S).addScaledVector(M,70).addScaledVector(y,-u*45);x.y=S.y+18;let f=Array.from({length:4},(m,v)=>({off:new H,ph:Math.random()*6.28,fq:5.5,w:v/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:x,vel:new H,birds:f,size:1.25,life:1e9})}return{mesh:s,update(S,M,y,u,x,f,m,v,E){n.uniforms.uTime.value=M,n.uniforms.uCam.value.copy(y);let b=m>.35&&v<.3,T=re.warm>.25&&re.sunEl<.6&&m>.2;b&&(o.small-=S)<0&&(o.small=22+Math.random()*35,f.coast<.6&&g("small",y,u,x)),(T||b&&f.city+f.country>.6&&Math.random()<4e-4)&&(o.crow-=S)<0&&(o.crow=T?14+Math.random()*18:60,g("crow",y,u,x)),f.coast>.6&&b&&_(y,u,x,1);let C=[.1+.08*m,.11+.09*m,.15+.1*m],R=0;for(let P=r.length-1;P>=0;P--){let A=r[P];if(A.kind==="gull"?(A.c.lerp(h.copy(E).addScaledVector(u,60).addScaledVector(x,-42).setY(E.y+16),Math.min(1,S*.25)),(f.coast<.4||!b)&&(A.life=Math.min(A.life,8),A.c.y+=S*6)):A.c.addScaledVector(A.vel,S),A.life-=S,A.life<0||A.kind!=="gull"&&A.c.distanceTo(y)>300){r.splice(P,1);continue}for(let w of A.birds){if(R>=$o)break;let L,D,U,V;A.kind==="gull"?(w.w+=S*(14/w.r),L=A.c.x+Math.cos(w.w)*w.r,U=A.c.z+Math.sin(w.w)*w.r,D=A.c.y+w.h+Math.sin(M*.4+w.ph)*2,V=Math.atan2(-Math.sin(w.w),Math.cos(w.w))):(L=A.c.x+w.off.x+Math.sin(M*.7+w.ph)*1.2,D=A.c.y+w.off.y+Math.sin(M*1.1+w.ph)*.6,U=A.c.z+w.off.z,V=Math.atan2(A.vel.x,A.vel.z)),c.set(0,V,Math.sin(M+w.ph)*.15),a.setFromEuler(c),d.setScalar(A.size),l.compose(h.set(L,D,U),a,d),s.setMatrixAt(R,l);let z=A.kind==="gull"?[.92*(.5+.5*m),.93*(.5+.5*m),.95*(.5+.5*m)]:A.kind==="crow"?[.05,.05,.07]:C;e.setXYZ(R,z[0],z[1],z[2]),t.setXY(R,w.fq,w.ph),R++}}s.count=R,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(S){n.uniforms.uFogD.value=S},shift(S,M){for(let y of r)y.c.x-=S,y.c.z-=M}}}var El=new H;function Vi(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),a=Math.PI/4;El.copy(e),El[n]=0,El.normalize();let c=.5*o/(o+l),h=1-El.angleTo(i)/a;return Math.sign(El[t])===1?h*c:l/(o+l)+c+c*(1-h)}var Hn=class i extends Qt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let a=new H,c=new H,h=new H(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,p=this.attributes.normal.array,g=this.attributes.uv.array,_=d.length/6,S=new H,M=.5/o;for(let y=0,u=0;y<d.length;y+=3,u+=2)switch(a.fromArray(d,y),c.copy(a),c.x-=Math.sign(c.x)*M,c.y-=Math.sign(c.y)*M,c.z-=Math.sign(c.z)*M,c.normalize(),d[y+0]=h.x*Math.sign(a.x)+c.x*r,d[y+1]=h.y*Math.sign(a.y)+c.y*r,d[y+2]=h.z*Math.sign(a.z)+c.z*r,p[y+0]=c.x,p[y+1]=c.y,p[y+2]=c.z,Math.floor(y/_)){case 0:S.set(1,0,0),g[u+0]=Vi(S,c,"z","y",r,n),g[u+1]=1-Vi(S,c,"y","z",r,t);break;case 1:S.set(-1,0,0),g[u+0]=1-Vi(S,c,"z","y",r,n),g[u+1]=1-Vi(S,c,"y","z",r,t);break;case 2:S.set(0,1,0),g[u+0]=1-Vi(S,c,"x","z",r,e),g[u+1]=Vi(S,c,"z","x",r,n);break;case 3:S.set(0,-1,0),g[u+0]=1-Vi(S,c,"x","z",r,e),g[u+1]=1-Vi(S,c,"z","x",r,n);break;case 4:S.set(0,0,1),g[u+0]=1-Vi(S,c,"x","y",r,e),g[u+1]=1-Vi(S,c,"y","x",r,t);break;case 5:S.set(0,0,-1),g[u+0]=Vi(S,c,"x","y",r,e),g[u+1]=1-Vi(S,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function ph(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,a=new mt,c=0;for(let h=0;h<i.length;++h){let d=i[h],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in d.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(d.attributes[g]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in d.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[g]===void 0&&(o[g]=[]),o[g].push(d.morphAttributes[g])}if(e){let g;if(t)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(c,g,h),c+=g}}if(t){let h=0,d=[];for(let p=0;p<i.length;++p){let g=i[p].index;for(let _=0;_<g.count;++_)d.push(g.getX(_)+h);h+=i[p].attributes.position.count}a.setIndex(d)}for(let h in r){let d=S1(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let p=0;p<d;++p){let g=[];for(let S=0;S<o[h].length;++S)g.push(o[h][S][p]);let _=S1(g);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(_)}}}return a}function S1(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),l=new bt(o,t,n),a=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=a/t;for(let p=0,g=h.count;p<g;p++)for(let _=0;_<t;_++){let S=h.getComponent(p,_);l.setComponent(p+d,_,S)}}else o.set(h.array,a);a+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function MS(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new si(i);return n.colorSpace=qt,n}var jd=4;function SS(){let t=document.createElement("canvas");t.width=128*jd,t.height=128;let n=t.getContext("2d"),s=(o,l,a,c,h)=>{n.beginPath(),n.moveTo(o+h,l),n.arcTo(o+a,l,o+a,l+c,h),n.arcTo(o+a,l+c,o,l+c,h),n.arcTo(o,l+c,o,l,h),n.arcTo(o,l,o+a,l,h),n.closePath(),n.fill()};for(let o=0;o<jd;o++){let l=o*128,a=n.createLinearGradient(0,0,0,128);a.addColorStop(0,"#9fbfe6"),a.addColorStop(.45,"#4a6690"),a.addColorStop(1,"#1d2638"),n.fillStyle=a,n.fillRect(l,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(l+14,84,30,50,9),s(l+84,84,30,50,9),n.fillRect(l+6,112,116,16),s(l+52,92,24,40,7)),o===2&&(s(l+62,66,44,70,12),n.fillRect(l+50,118,70,10)),o===3&&(s(l+70,78,40,60,11),n.fillRect(l+56,120,64,8)),n.save(),n.beginPath(),n.rect(l,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(l+40,0),n.lineTo(l+68,0),n.lineTo(l+20,128),n.lineTo(l-8,128),n.fill(),n.restore()}let r=new si(t);return r.colorSpace=qt,r}function T1(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/jd)}return i}function E1(){let i=new cn,e=new cn,t=new cn;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new dt,new dt],s=new _e(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=vd(new vn({color:"#ffffff",vertexColors:!0,gradientMap:dl}),.85,.06,"paint-l",r),l=(te,Te)=>Object.assign(new _e(te),{gloss:Te}),a=l("#9fd8c8",1),c=l("#eeece4",.6),h=l("#2a2c33",.35),d=l("#1b1c20",.04),p=l("#c8ccd2",.8),g=l("#d4d8de",1.3),_=(te,Te)=>{let X=te.attributes.position.count,ae=new Float32Array(X*4);for(let ie=0;ie<X;ie++)ae.set([Te.r,Te.g,Te.b,Te.gloss],ie*4);return te.setAttribute("color",new Je(ae,4)),te},S=vd(new vn({color:"#ffffff",map:SS(),gradientMap:pi}),1.2,.08,"glass-l",r),M=new vn({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:pi}),y=new vn({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:pi}),u=new vn({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:pi}),x=new vn({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:pi}),f=new vn({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:pi}),m=new yn({map:MS()}),v=new Map,E=[],b=!1,T=new et,C=new jn,R=new xn,P=new H(1,1,1),A=(te,Te,X,ae,ie,ne=0,B=0,pe=0)=>{let ee=te.index?te.toNonIndexed():te;if(Te.isColor&&(_(ee,Te),Te=o),C.set(ne,B,pe),R.setFromEuler(C),T.compose(new H(X,ae,ie),R,P),ee.applyMatrix4(T),b){E.push(ee);return}v.has(Te)||v.set(Te,[]),v.get(Te).push(ee)},w=l("#16171b",0),L=l("#2b3134",.15),D=l("#b9bfc6",.9),U=l("#4d5258",.4),V=l("#9a1c22",.6),z=1.7,O=.745,k=.3,W=(te,Te,X)=>{let ae=Math.min(1,Math.max(0,(X-te)/(Te-te)));return ae*ae*(3-2*ae)},$=te=>te<.8?1.8:te<1.22?1.8-.6*W(.8,1.22,te):1.2-.1*((te-1.22)/(z-1.22))**2,le=te=>1-.085*W(1.15,1.8,te),Me=(te,Te)=>{let X=O-Te,ae=k+Te*.6,ie=$(te)-Te*(te<0?.4:1),ne=Math.max(.05,.1-Te*.5),B=Math.max(.06,(te<.8?.17:.13)-Te*.5),pe=[[0,ae],[(X-ne)*.5,ae],[X-ne,ae]];for(let N=1;N<4;N++){let I=-Math.PI/2+N/8*Math.PI;pe.push([X-ne+ne*Math.cos(I),ae+ne+ne*Math.sin(I)])}for(let N=0;N<=8;N++)pe.push([X,ae+ne+N/8*(ie-B-ae-ne)]);for(let N=1;N<5;N++){let I=N/10*Math.PI;pe.push([X-B+B*Math.cos(I),ie-B+B*Math.sin(I)])}pe.push([X-B,ie],[(X-B)*.5,ie],[0,ie]);let ee=pe.map(([N,I])=>[N*le(I),I]);for(let N=pe.length-2;N>0;N--)ee.push([-ee[N][0],ee[N][1]]);return ee};{let te=[];for(let G=0;G<=6;G++){let q=G/6*Math.PI/2;te.push([-z+.2*(1-Math.cos(q)),.2*(1-Math.sin(q))])}for(let G=-z+.2+.12;G<.78;G+=.13)te.push([G,0]);for(let G=.8;G<1.225;G+=.06)te.push([G,0]);for(let G of[1.3,1.39])te.push([G,0]);for(let G=6;G>=0;G--){let q=G/6*Math.PI/2;te.push([z-.22*(1-Math.cos(q)),.22*(1-Math.sin(q))])}let ae=[],ie=[],ne=te.map(([G,q])=>Me(G,q)),B=ne[0].length;ne.forEach((G,q)=>G.forEach(([Q,ue])=>ae.push(Q,ue,te[q][0])));for(let G=0;G<ne.length-1;G++)for(let q=0;q<B;q++){let Q=G*B+q,ue=G*B+(q+1)%B,ge=Q+B,he=ue+B;ie.push(Q,ue,ge,ue,he,ge)}for(let[G,q]of[[0,-1],[ne.length-1,1]]){let Q=ae.length/3,ue=ne[G];ae.push(0,(ue[0][1]+ue[B/2|0][1])/2,te[G][0]);for(let ge=0;ge<B;ge++){let he=G*B+ge,de=G*B+(ge+1)%B;q<0?ie.push(Q,de,he):ie.push(Q,he,de)}}let pe=new mt;pe.setAttribute("position",new Je(ae,3)),pe.setIndex(ie),pe.computeVertexNormals();{let G=pe.attributes.normal,q=B*10+12;if(G.getX(q)<0){for(let Q=0;Q<ie.length;Q+=3){let ue=ie[Q+1];ie[Q+1]=ie[Q+2],ie[Q+2]=ue}pe.setIndex(ie),pe.computeVertexNormals()}}pe.setAttribute("uv",new Je(new Float32Array(ae.length/3*2),2));let ee=pe.toNonIndexed(),N=ee.attributes.position,I=new Float32Array(N.count*4);for(let G=0;G<N.count;G+=3){let q=(N.getY(G)+N.getY(G+1)+N.getY(G+2))/3,Q=(N.getZ(G)+N.getZ(G+1)+N.getZ(G+2))/3,ue=q>1.665&&Q<.84&&Q>-1.52?c:a;for(let ge=0;ge<3;ge++)I.set([ue.r,ue.g,ue.b,ue.gloss],(G+ge)*4)}ee.setAttribute("color",new Je(I,4)),A(ee,o,0,0,0)}A(new Hn(1.42,.08,2.62,3,.038),c,0,1.815,-.44);let be=(te,Te,X,ae,ie)=>{let ne=new mt,B=[],pe=[],ee=[],N=[];for(let I=0;I<=X;I++)for(let G=0;G<=Te;G++){let q=G/Te,Q=I/X,ue=te(q,Q);B.push(ue[0]+ue[3]*.004,ue[1]+ue[4]*.004,ue[2]+ue[5]*.004),pe.push(ue[3],ue[4],ue[5]),ee.push(q,Q)}for(let I=0;I<X;I++)for(let G=0;G<Te;G++){let q=I*(Te+1)+G,Q=q+1,ue=q+Te+1,ge=ue+1;N.push(q,Q,ge,q,ge,ue)}ne.setAttribute("position",new Je(B,3)),ne.setAttribute("normal",new Je(pe,3)),ne.setAttribute("uv",new Je(ee,2)),ne.setIndex(N);{let I=new H().fromArray(B,0),G=new H().fromArray(B,3),q=new H().fromArray(B,(Te+1)*3),Q=new H().fromArray(pe,0);if(G.sub(I).cross(q.sub(I)).dot(Q)<0){for(let ue=0;ue<N.length;ue+=3){let ge=N[ue+1];N[ue+1]=N[ue+2],N[ue+2]=ge}ne.setIndex(N)}}return T1(ne,ae,ie)},K=te=>{let X=O*(le(te+.01)-le(te-.01))/.02,ae=Math.hypot(1,X);return[1/ae,-X/ae]},j=te=>{let Te=.8,X=1.22;for(let ae=0;ae<24;ae++){let ie=(Te+X)/2;$(ie)>te?Te=ie:X=ie}return Te};for(let te of[-1,1]){let Te=te<0,X=(ae,ie,ne)=>A(be((B,pe)=>{let ee=1.21+pe*.39,N=te>0?ie(ee)+(ae(ee)-ie(ee))*B:ae(ee)+(ie(ee)-ae(ee))*B,[I,G]=K(ee);return[te*O*le(ee),ee,N,te*I,G,0]},1,6,ne,!1),S,0,0,0);X(()=>.06,ae=>j(ae)-.07,2),X(()=>-.72,()=>-.08,3),X(()=>-1.42,()=>-.84,0),A(new Qt(.012,.41,.07),h,te*.731,1.405,-.01,0,0,-te*.07),A(new Qt(.014,.022,2.42),w,te*.748,1.2,-.26);for(let[ae,ie]of[[.8,.64],[-.06,.42],[-.76,.64]])A(new Qt(.008,1.17-ie,.012),L,te*.749,(ie+1.17)/2,ae);A(new Qt(.02,.028,.13),L,te*.752,1.06,.06),A(new Qt(.02,.028,.13),L,te*.752,1.06,-.2),A(new Qt(.01,.022,.62),L,te*.749,1.155,-1.08);for(let ae of[1.12,-1.12])A(new Sr(.345,18,0,Math.PI),w,te*.749,.29,ae,0,te*Math.PI/2,0),A(new Ha(.35,.024,5,18,Math.PI),h,te*.752,.29,ae,0,te*Math.PI/2,0);A(new Hn(.1,.12,.2,2,.04),a,te*.83,1.24,1.02),A(new Qt(.07,.035,.05),h,te*.775,1.2,1.03),A(new Hn(.16,.4,.05,3,.075),g,te*.56,.95,-1.703),A(new Hn(.13,.37,.05,3,.062),M,te*.56,.95,-1.716),A(new Hn(.036,.27,.02,2,.016),y,te*.56,.95,-1.742),A(new Hn(.11,.06,.04,2,.02),x,te*.56,.69,-1.707)}{let te=new So,Te=.52,X=1.15,ae=1.66,ie=.07;te.moveTo(-Te+ie,X),te.lineTo(Te-ie,X),te.absarc(Te-ie,X+ie,ie,-Math.PI/2,0),te.lineTo(Te,ae-ie),te.absarc(Te-ie,ae-ie,ie,0,Math.PI/2),te.lineTo(-Te+ie,ae),te.absarc(-Te+ie,ae-ie,ie,Math.PI/2,Math.PI),te.lineTo(-Te,X+ie),te.absarc(-Te+ie,X+ie,ie,Math.PI,Math.PI*1.5);let ne=new za(te,6),B=ne.attributes.position,pe=ne.attributes.uv;for(let ee=0;ee<B.count;ee++){let N=B.getX(ee),I=B.getY(ee),G=(I-X)/(ae-X);pe.setXY(ee,(N+Te)/(2*Te),G),B.setX(ee,N*(1-.08*G))}A(T1(ne,1),S,0,0,-z-.004,0,Math.PI,0)}A(new Hn(.36,.04,.03,2,.014),u,0,1.69,-1.712),A(be((te,Te)=>{let X=1.19-Te*.36,ae=$(X),ie=.56-.07*Te,ne=.005,B=($(X+ne)-$(X-ne))/(2*ne),pe=Math.hypot(1,B);return[(te*2-1)*ie,ae,X,0,1/pe,-B/pe]},2,7,0,!1),S,0,0,0),A(new Hn(.46,.25,.012,2,.05),l("#86bdb0",.6),0,.73,-1.701),A(new sn(.34,.17),m,0,.72,-1.709,0,Math.PI,0),A(new Hn(.25,.034,.03,2,.013),g,0,.9,-1.708);for(let te of[-1,1])A(new Qt(.01,.56,.006),L,te*.47,.85,-1.703);A(new Qt(.95,.01,.006),L,0,.565,-1.703),A(new Hn(1.5,.2,.26,3,.08),a,0,.44,-1.6),A(new Hn(1.38,.08,.22,2,.03),h,0,.33,-1.61);for(let te of[-1,1])A(new Qt(.13,.035,.01),V,te*.56,.44,-1.731);A(new Ni(.036,.036,.12,12),g,.46,.29,-1.68,Math.PI/2,0,0),A(new Ni(.024,.024,.124,10),w,.46,.29,-1.68,Math.PI/2,0,0);for(let te of[-1,1])A(new Hn(.4,.26,.04,2,.06),h,te*.42,.85,1.702),A(new Ni(.105,.105,.03,16),f,te*.46,.85,1.72,Math.PI/2,0,0),A(new Ni(.055,.055,.03,12),f,te*.3,.85,1.718,Math.PI/2,0,0),A(new Hn(.1,.06,.04,2,.015),x,te*.52,.66,1.705),A(new Qt(.46,.014,.014),w,te*.25,1.215,1.2,-.3,te*.12,0);A(new Hn(.36,.12,.03,2,.03),w,0,.84,1.704);for(let te=0;te<3;te++)A(new Qt(.32,.012,.012),L,0,.805+te*.035,1.722);A(new Hn(1.52,.24,.22,2,.07),h,0,.44,1.62),A(new Qt(.7,.07,.02),w,0,.4,1.732),A(new Qt(.34,.17,.01),l("#f0cc38",.3),0,.62,1.733),A(new Qt(.3,.05,.004),l("#2f5a2f",.1),0,.6,1.739),b=!0;for(let[te,Te]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){A(new Ni(.29,.29,.19,24),d,te,.29,Te,0,0,Math.PI/2),A(new Ni(.195,.195,.194,20),D,te,.29,Te,0,0,Math.PI/2),A(new Ni(.155,.155,.198,16),U,te,.29,Te,0,0,Math.PI/2);for(let X=0;X<5;X++){let ae=X/5*Math.PI*2+.3;A(new Qt(.202,.03,.15),D,te,.29-.085*Math.sin(ae),Te+.085*Math.cos(ae),ae,0,0)}A(new Ni(.045,.045,.206,10),p,te,.29,Te,0,0,Math.PI/2)}b=!1;for(let[te,Te]of v){let X=new ct(ph(Te),te);X.castShadow=te!==S&&te!==m&&te!==u&&te!==f&&te!==y,X.receiveShadow=!0,t.add(X)}{let te=new ct(ph(E),o);te.castShadow=te.receiveShadow=!0,i.add(te)}{let X=document.createElement("canvas");X.width=48,X.height=96;let ae=X.getContext("2d"),ie=ae.createImageData(48,96);for(let B=0;B<96;B++)for(let pe=0;pe<48;pe++){let ee=Math.max(0,Math.abs((pe+.5)/48-.5)*2.1-.62),N=Math.max(0,Math.abs((B+.5)/96-.5)*2.05-.78),I=Math.hypot(ee/.42,N/.24),G=Math.max(0,1-I),q=(B*48+pe)*4;ie.data[q]=ie.data[q+1]=ie.data[q+2]=Math.round(255*G*G*(3-2*G)),ie.data[q+3]=255}ae.putImageData(ie,0,0);let ne=new ct(new sn(2.2,4.1),new yn({color:0,alphaMap:new si(X),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));ne.rotation.x=-Math.PI/2,ne.position.y=.03,ne.renderOrder=3,i.add(ne)}let xe=(()=>{let X=document.createElement("canvas");X.width=16,X.height=64;let ae=X.getContext("2d"),ie=ae.createImageData(16,64);for(let ne=0;ne<64;ne++)for(let B=0;B<16;B++){let pe=1-(ne+.5)/64,ee=((B+.5)/16-.5)*2,N=Math.exp(-ee*ee*5)*Math.min(1,pe/.06)*Math.pow(1-pe,1.6)*(.78+.22*Math.sin(pe*31+ee*2)),I=(ne*16+B)*4;ie.data[I]=ie.data[I+1]=ie.data[I+2]=Math.round(255*Math.max(0,N)),ie.data[I+3]=255}return ae.putImageData(ie,0,0),new yn({map:new si(X),color:16726576,transparent:!0,opacity:0,blending:Qi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})})();{let te=[];for(let X of[-.56,.56]){let ae=new sn(.22,1.5);ae.rotateX(-Math.PI/2),ae.translate(X,.035,-1.72-.75),te.push(ae)}let Te=new ct(ph(te),xe);Te.renderOrder=3,Te.visible=!1,i.add(Te),xe.mesh=Te}let Ce=new cn;Ce.position.set(.02,1.19,-1.716),t.add(Ce);let Ae=new Qt(.52,.026,.02);Ae.translate(.27,0,0);let Pe=new ct(_(Ae,h),o);Pe.rotation.z=.18,Ce.add(Pe);let We=0,Xe=new qa(16773328,0,70,.55,.65,1.2);Xe.position.set(0,.8,1.6),Xe.target.position.set(0,0,18),t.add(Xe,Xe.target);let we={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},Ze=(te,Te)=>Te*Math.tanh(te/Te);return{group:i,lamps:n,lampCol:s,head:Xe,update(te,Te,X,ae=0,ie=null,ne=0){if(ie){let B=Ze(-ie.lat*.016,.045),pe=Ze(-ie.lon*.008,.03);we.rv+=((B-we.roll)*55-we.rv*8)*te,we.roll+=we.rv*te,we.pv+=((pe-we.pitch)*60-we.pv*9)*te+ie.kick,we.pitch+=we.pv*te,we.yv+=((ie.road-we.y)*85-we.yv*8)*te+ie.jolt,we.y+=we.yv*te,e.rotation.set(we.pitch,0,we.roll),e.position.y=.35+we.y}if(we.br+=((ie?ie.brake:0)-we.br)*Math.min(1,te*14),M.emissiveIntensity=.35+X*3.2+we.br*(1.7+X*2),u.emissiveIntensity=we.br*(2.4+X*1.6),y.emissiveIntensity=1+X*3+we.br*(2+X*2),xe.opacity=ne*Math.min(1,.22+M.emissiveIntensity*.22),xe.mesh.visible=xe.opacity>.01,ae>.15||We%2.6>.01){We+=te;let B=We%2.6/2.6,pe=N=>N*N*(3-2*N),ee=B<.25?pe(B/.25):B<.5?pe(1-(B-.25)/.25):0;Pe.rotation.z=.18+ee*2.5,ae<=.15&&B>=.5&&(We=0)}Xe.intensity=X*60,f.emissiveIntensity=.15+X*2.6}}}var Jo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},TS=new Qs(-1,1,1,-1,0,1),Qd=class extends mt{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}},ES=new Qd,dr=class{constructor(e){this._mesh=new ct(ES,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,TS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var jo=class extends Pi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pr.clone(e.uniforms),this.material=new ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new dr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var wl=class extends Pi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},mh=class extends Pi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var gh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Le);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jo(Jo),this.copyPass.material.blending=ri,this.timer=new Ya}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}wl!==void 0&&(o instanceof wl?n=!0:o instanceof mh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var vh=class extends Pi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new _e}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var w1={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Qo=class i extends Pi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new _e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,o,{type:Cn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Yt(r,o,{type:Cn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Yt(r,o,{type:Cn,depthBuffer:!1});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let l=w1;this.highPassUniforms=Pr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ut({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pr.clone(Jo.uniforms),this.blendMaterial=new ut({uniforms:this.copyUniforms,vertexShader:Jo.vertexShader,fragmentShader:Jo.fragmentShader,premultipliedAlpha:!0,blending:Qi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _e,this._oldClearAlpha=1,this._basic=new yn,this._fsQuad=new dr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[a];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let l=t[o],a=o+1<e?t[o+1]:0,c=l+a;s.push((o*l+(o+1)*a)/c),r.push(c)}return new ut({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Qo.BlurDirectionX=new Le(1,0);Qo.BlurDirectionY=new Le(0,1);var e0=class extends Pi{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Yt(4,4,{type:Cn,depthBuffer:!1,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),this.mat=new ut({uniforms:{tDiffuse:{value:null},uTexel:{value:new Le(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new dr(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},wS={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Le(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Le(1/1280,1/720)},uLo:{value:new H(-.014,0,.03)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function A1(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new Le),l=new Yt(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:Cn,samples:n}),a=new gh(i,l);a.addPass(new vh(e,t));let c=new e0;a.addPass(c);let h=new Qo(new Le(o.x*r*.5,o.y*r*.5),.42,.55,.86);a.addPass(h);let d=new jo(wS);d.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},d.material.toneMapped=!1,a.addPass(d);let p=a.render.bind(a);return a.render=g=>{d.uniforms.toneMappingExposure.value=i.toneMappingExposure,p(g)},{composer:a,bloom:h,grade:d,refl:c}}function R1(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let X=0;X<2;X++){let ae=s.getChannelData(X);for(let ie=0;ie<n;ie++)ae[ie]=(Math.random()*2-1)*Math.pow(1-ie/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let a=e.createGain();a.gain.value=.11,l.connect(a),a.connect(t),a.connect(r);let c=(X,ae)=>{let ie=e.createBuffer(1,e.sampleRate*X,e.sampleRate),ne=ie.getChannelData(0),B=0;for(let pe=0;pe<ne.length;pe++)ae?(B=(B+.02*(Math.random()*2-1))/1.02,ne[pe]=B*3.5):ne[pe]=Math.random()*2-1;return ie},h=(X,ae,ie)=>{let ne=e.createBufferSource();ne.buffer=X,ne.loop=!0;let B=e.createBiquadFilter();B.type=ae,B.frequency.value=ie;let pe=e.createGain();return pe.gain.value=0,ne.connect(B),B.connect(pe),pe.connect(t),ne.start(),{f:B,g:pe}},d=h(c(2,!0),"lowpass",400),p=h(c(3,!1),"lowpass",700);p.g.connect(r);let g=h(c(2,!1),"bandpass",5200);g.f.Q.value=6;let _=h(c(2,!0),"lowpass",240),S=h(c(3,!1),"bandpass",2600);S.f.Q.value=.35;let M=h(c(2,!0),"lowpass",520),y=h(c(2,!1),"bandpass",1500);y.f.Q.value=.7;let u=e.createBiquadFilter(),x=e.createGain(),f=e.createOscillator(),m=e.createOscillator(),v=e.createGain();f.type="sawtooth",m.type="triangle",u.type="lowpass",u.frequency.value=320,u.Q.value=.6,x.gain.value=0,v.gain.value=.5,f.connect(u),m.connect(v),v.connect(u),u.connect(x),x.connect(t),f.start(),m.start();let E=h(c(3,!1),"bandpass",750);E.f.Q.value=.6;let b=h(c(3,!0),"lowpass",420),T=h(c(2,!0),"lowpass",140),C=c(.03,!1),R=0;function P(X,ae){let ie=e.createBufferSource(),ne=e.createBiquadFilter(),B=e.createGain();ie.buffer=C,ne.type="bandpass",ne.frequency.value=1800+Math.random()*2600,ne.Q.value=1.2,B.gain.setValueAtTime(ae*(.02+Math.random()*.03),X),B.gain.exponentialRampToValueAtTime(1e-4,X+.03),ie.connect(ne),ne.connect(B),B.connect(t),ie.start(X),ie.stop(X+.04)}let A=0,w=0;function L(X,ae){let ie=e.createOscillator(),ne=e.createOscillator(),B=e.createGain(),pe=e.createBiquadFilter();pe.type="bandpass",pe.frequency.value=1150,pe.Q.value=2.2,ie.type="square",ie.frequency.value=745,ne.type="triangle",ne.frequency.value=1490,B.gain.setValueAtTime(0,X),B.gain.linearRampToValueAtTime(.085*ae,X+.004),B.gain.exponentialRampToValueAtTime(1e-4,X+.3),ie.connect(pe),ne.connect(pe),pe.connect(B),B.connect(t),B.connect(r),ie.start(X),ne.start(X),ie.stop(X+.33),ne.stop(X+.33)}function D(X,ae){let ie=e.createOscillator(),ne=e.createGain();ie.type="sine",ie.frequency.setValueAtTime(110,X),ie.frequency.exponentialRampToValueAtTime(48,X+.12),ne.gain.setValueAtTime(1e-4,X),ne.gain.linearRampToValueAtTime(.22*ae,X+.006),ne.gain.exponentialRampToValueAtTime(1e-4,X+.17),ie.connect(ne),ne.connect(t),ie.start(X),ie.stop(X+.2)}let U=e.createGain();U.gain.value=1,U.connect(t);let V=e.createGain();V.gain.value=.35,U.connect(V),V.connect(r);let z=(X=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return U;let ae=e.createStereoPanner();return ae.pan.value=X,ae.connect(U),ae};function O(X,ae,ie,ne,B,pe,ee="sine",N=0){let I=e.createOscillator(),G=e.createGain();if(I.type=ee,I.frequency.setValueAtTime(ae,X),I.frequency.exponentialRampToValueAtTime(ie,X+ne),N){let q=e.createOscillator(),Q=e.createGain();q.frequency.value=N,Q.gain.value=ae*.012,q.connect(Q),Q.connect(I.frequency),q.start(X),q.stop(X+ne+.05)}return G.gain.setValueAtTime(1e-4,X),G.gain.linearRampToValueAtTime(B,X+Math.min(.04,ne*.25)),G.gain.setValueAtTime(B,X+ne*.7),G.gain.exponentialRampToValueAtTime(1e-4,X+ne),I.connect(G),G.connect(pe),I.start(X),I.stop(X+ne+.02),G}function k(X,ae){let ie=z(),ne=2+Math.floor(Math.random()*4),B=3200+Math.random()*1500;for(let pe=0;pe<ne;pe++){let ee=X+pe*(.09+Math.random()*.07);O(ee,B,B*(1.2+Math.random()*.3),.06,ae*.022,ie)}}function W(X,ae){let ie=z();O(X,1120,1390,1,ae*.03,ie,"sine",5.5),O(X+1.15,2350,2150,.14,ae*.03,ie),O(X+1.32,1700,1520,.13,ae*.028,ie),O(X+1.5,2750,2480,.36,ae*.032,ie)}function $(X,ae){let ie=z(),ne=1+Math.floor(Math.random()*3);for(let B=0;B<ne;B++){let pe=X+B*.48,ee=e.createOscillator(),N=e.createBiquadFilter(),I=e.createGain();ee.type="sawtooth",ee.frequency.setValueAtTime(560,pe),ee.frequency.exponentialRampToValueAtTime(420,pe+.32),N.type="bandpass",N.frequency.value=1150,N.Q.value=1.6,I.gain.setValueAtTime(1e-4,pe),I.gain.linearRampToValueAtTime(ae*.03,pe+.03),I.gain.exponentialRampToValueAtTime(1e-4,pe+.36),ee.connect(N),N.connect(I),I.connect(ie),ee.start(pe),ee.stop(pe+.4)}}function le(X,ae){let ie=z(),ne=2+Math.floor(Math.random()*2);for(let B=0;B<ne;B++)O(X+B*.42,1750,1150,.36,ae*.022,ie,"triangle",11)}function Me(X,ae){let ie=z(),ne=e.createOscillator(),B=e.createBiquadFilter(),pe=e.createGain(),ee=240+Math.random()*220,N=5+Math.floor(Math.random()*4);ne.type="square",ne.frequency.value=ee,B.type="bandpass",B.frequency.value=ee*2.4,B.Q.value=3,pe.gain.setValueAtTime(1e-4,X);for(let I=0;I<N;I++){let G=X+I*.038;pe.gain.linearRampToValueAtTime(ae*.014,G+.008),pe.gain.linearRampToValueAtTime(1e-4,G+.028)}ne.connect(B),B.connect(pe),pe.connect(ie),ne.start(X),ne.stop(X+N*.038+.05)}function be(X,ae){let ie=z(),ne=4300+Math.random()*700;for(let B=0;B<3;B++)O(X+B*.055,ne,ne*1.01,.035,ae*.009,ie)}function K(X,ae){let ie=z(0);for(let[ne,B,pe]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let ee=e.createOscillator(),N=e.createGain();ee.type="sine",ee.frequency.value=ne,ee.detune.value=(Math.random()-.5)*8,N.gain.setValueAtTime(1e-4,X),N.gain.linearRampToValueAtTime(ae*.05*B,X+.03),N.gain.exponentialRampToValueAtTime(1e-4,X+pe),ee.connect(N),N.connect(ie),ee.start(X),ee.stop(X+pe+.1)}}function j(X,ae){let ie=z();for(let ne of[X,X+.22])O(ne,2650,2600,.5,ae*.018,ie),O(ne,3950,3900,.35,ae*.008,ie)}let xe={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Ce=X=>X>1e-4?-Math.log(1-Math.random()*.98)/X:1e9,Ae=X=>440*Math.pow(2,(X-69)/12),Pe=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],We=[72,74,76,79,81,84,86,88],Xe=0,we=e.currentTime+.2,Ze=e.currentTime+3;function te(X){let ae=Pe[Xe++%Pe.length],ie=11;for(let ne of ae)for(let B of[-5,5]){let pe=e.createOscillator(),ee=e.createGain();pe.type=B<0?"sine":"triangle",pe.frequency.value=Ae(ne),pe.detune.value=B,ee.gain.setValueAtTime(0,X),ee.gain.linearRampToValueAtTime(.18,X+3.5),ee.gain.setValueAtTime(.18,X+ie-4),ee.gain.linearRampToValueAtTime(0,X+ie+1),pe.connect(ee),ee.connect(l),pe.start(X),pe.stop(X+ie+1.2)}}function Te(X){let ae=We[Math.floor(Math.random()*We.length)],ie=e.createOscillator(),ne=e.createOscillator(),B=e.createGain(),pe=e.createGain();ie.type=ne.type="sine",ie.frequency.value=Ae(ae),ne.frequency.value=Ae(ae)*2.01,pe.gain.value=.25,ne.connect(pe),pe.connect(B),B.gain.setValueAtTime(0,X),B.gain.linearRampToValueAtTime(.05,X+.02),B.gain.exponentialRampToValueAtTime(1e-4,X+4),ie.connect(B),B.connect(r),B.connect(t),ie.start(X),ne.start(X),ie.stop(X+4.2),ne.stop(X+4.2)}return{ac:e,muted:!1,tyres:y,engG:x,bump(X){D(e.currentTime+.01,X)},update(X,ae,ie,ne={}){let B=e.currentTime;if((ne.bell||0)>.01)for(A<B&&(A=B+.02);A<B+.12;)L(A,ne.bell),A+=.41;let pe=ne.rain||0;S.g.gain.setTargetAtTime(pe*.05,B,.6),M.g.gain.setTargetAtTime(pe*.05,B,.6);let ee=(ne.wetRoad||0)*Math.min(1,X)**1.5,N=.8+.2*Math.sin(B*2.3)*Math.sin(B*.9+1);if(y.g.gain.setTargetAtTime(ee*.045*N,B,.4),y.f.frequency.setTargetAtTime(900+1500*Math.min(X,2),B,.4),pe>.05&&ne.roof)for(R<B&&(R=B+.02);R<B+.12;)P(R,pe),R+=.04+Math.random()*.12/pe;let I=ne.water||0,G=.6+.4*Math.sin(B*1.3)*Math.sin(B*.37);E.g.gain.setTargetAtTime(I*.035*G,B,.25),E.f.frequency.setTargetAtTime(600+400*G,B,.25);let q=.35+.65*Math.pow(.5+.5*Math.sin(B*.23)*Math.sin(B*.071+2),2),Q=ne.rush||0;b.g.gain.setTargetAtTime(((ae.mountain||0)+(ae.snow||0)*.7)*.06*q+Q*.055,B,.8),b.f.frequency.setTargetAtTime(260+420*q+Q*500,B,.8);let ue=ne.train||0;if(_.g.gain.setTargetAtTime(ue*.16,B,.2),ue>.04)for(w<B&&(w=B+.02);w<B+.12;)D(w,ue),D(w+.15,ue*.8),w+=1.2;for(;we<B+1;)te(we),we+=8;Ze<B+.5&&(Te(Ze),Ze+=1.5+Math.random()*4.5);let ge=ne.tunnel||0;{let Z=ne.speed||0,Ie=ne.load||0,me=850+2400*(1-Math.exp(-Z/15))+Math.max(0,Z-25)*60+Ie*1300,Be=me/40;f.frequency.setTargetAtTime(Be,B,.25),m.frequency.setTargetAtTime(Be*2,B,.25),u.frequency.setTargetAtTime(200+me*.08+Ie*260,B,.3),x.gain.setTargetAtTime((.008+.01*Math.min(1,Z/15)+.024*Ie)*(1-.6*(ne.rush||0))*(ne.roof===!1?.5:1)*(1+.7*ge),B,.3)}d.g.gain.setTargetAtTime((.03+X*.06)*(1+1.6*ge),B,.35),d.f.frequency.setTargetAtTime((250+X*500)*(1+.5*ge),B,.35),T.g.gain.setTargetAtTime(ge*.07,B,.4),o.gain.setTargetAtTime(.55+.6*ge,B,.4);let he=.5+.5*Math.sin(B*.55)*Math.sin(B*.21+1);p.g.gain.setTargetAtTime(ae.coast*(.012+he*.05),B,.3),p.f.frequency.setTargetAtTime(400+he*900,B,.3);let de=1-Math.min(1,pe*1.4),Ue=1-ie,qe=ne.dusk||0,De=ae.snow||0,Ne=1-De,Fe={sparrow:ie*de*.22*(.3+ae.city*.5+ae.sakura+ae.country*.8+ae.coast*.2+(ae.mountain||0)*.5)*(1-De*.8),uguisu:ie*de*ae.sakura*.06,crow:de*(qe*.14+ie*(ae.city+ae.country+(ae.mountain||0)*1.5+De*2.5)*.012),gull:ie*ae.coast*de*.16,frog:Ue*(ae.country*5+ae.sakura*.6+ae.coast*.3)*(1+pe*.6)*Ne,cricket:Ue*de*(1.6-ae.city*1.1+(ae.mountain||0)*.8)*Ne,bike:ie*de*ae.city*.014,bell:De*.022+(ae.mountain||0)*.006},Ke={sparrow:k,uguisu:W,crow:$,gull:le,frog:Me,cricket:be,bike:j,bell:K};for(let Z in Fe)B<xe[Z]||(Fe[Z]>1e-4&&Ke[Z](B+.05,.6+Math.random()*.4),xe[Z]=B+Math.max(.12,Ce(Fe[Z]||1e-6)));let at=.5+.5*Math.sin(B*7)*Math.sin(B*.4);g.g.gain.setTargetAtTime((ae.country+ae.sakura*.3)*ie*.006*at*(1-(ae.snow||0)),B,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function C1(i){let t=new sn(.075,.05),n=new yn({color:16777215,side:Sn}),s=new ji(t,n,420);s.frustumCulled=!1,s.count=0;let r=new _e("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(f=>new _e(f));for(let f=0;f<420;f++)s.setColorAt(f,r);let l=Array.from({length:420},()=>({p:new H(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),a=new et,c=new xn,h=new jn,d=new H(1,1,1),p=new H,g=90,_=new Float32Array(g*3),S=Array.from({length:g},()=>({p:new H(1e9,0,0),ph:Math.random()*6.28})),M=new mt;M.setAttribute("position",new bt(_,3));let y=new bo({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Qi,opacity:0}),u=new Aa(M,y);u.frustumCulled=!1;let x=(f,m,v,E,b)=>{let T=b?8+Math.random()*42:-4+Math.random()*50,C=(Math.random()-.5)*40;f.p.set(m.x+v.x*T+E.x*C,m.y-1+Math.random()*9,m.z+v.z*T+E.z*C)};return{group:[s,u],shift(f,m){for(let v of l)v.p.x-=f,v.p.z-=m;for(let v of S)v.p.x-=f,v.p.z-=m},update(f,m,v,E,b,T,C,R,P,A=0){let w=Math.floor(420*Math.min(1,T*1.1+A*.55));n.color.setScalar(1-.72*R);let L=!1;s.count=w;for(let U=0;U<w;U++){let V=l[U];p.subVectors(V.p,v);let z=p.x*E.x+p.z*E.z,O=p.x*b.x+p.z*b.z;if(V.p.x>1e8||z<-6||z>55||Math.abs(O)>24||V.p.y<C-.5){x(V,v,E,b,V.p.x<1e8);let k=Math.random()*(T+A)<A;(k!==V.leaf||k)&&(V.leaf=k,s.setColorAt(U,k?o[Math.floor(Math.random()*o.length)]:r),L=!0)}V.p.y-=V.v*f,V.p.x+=Math.sin(m*.7+V.ph)*.4*f+.25*f,V.p.z+=Math.cos(m*.5+V.ph)*.3*f,h.set(m*V.sp+V.ph,m*V.sp*.7,V.ph),c.setFromEuler(h),d.setScalar(V.leaf?1.9:1),a.compose(V.p,c,d),s.setMatrixAt(U,a)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let D=R*P;if(y.opacity=D,u.visible=D>.01,u.visible){for(let U=0;U<g;U++){let V=S[U];p.subVectors(V.p,v);let z=p.x*E.x+p.z*E.z,O=p.x*b.x+p.z*b.z;if(V.p.x>1e8||z<-4||z>60||Math.abs(O)>30){let k=2+Math.random()*55,W=(Math.random()-.5)*55;V.p.set(v.x+E.x*k+b.x*W,C+.3+Math.random()*2.2,v.z+E.z*k+b.z*W)}V.p.x+=Math.sin(m*.6+V.ph*3)*.3*f,V.p.y+=Math.sin(m*.9+V.ph)*.2*f,V.p.z+=Math.cos(m*.5+V.ph*2)*.3*f,_[U*3]=V.p.x,_[U*3+1]=V.p.y,_[U*3+2]=V.p.z}M.attributes.position.needsUpdate=!0}}}}var ot=new URLSearchParams(location.search),ea=ot.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();ea&&document.body.classList.add("embed");ot.has("shot")&&document.body.classList.add("shot");pm(ot.has("seed")?parseInt(ot.get("seed")):Math.random()*1e9|0);gm(ot.get("env")||"city");var Vn=i=>document.getElementById(i),ta=i=>{let e=Vn("loading");e&&(e.textContent=i)};async function AS(){await new Promise(ye=>setTimeout(ye,30));let i=Vn("c"),e=new Hu({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ot.get("q")||(ea||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?ea?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=qt,e.toneMapping=Za,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=wr,e.debug.checkShaderErrors=ot.has("debug");let r=ot.get("clouds")||"painted",o=n==="high"&&innerHeight*s>=900?"hi":"lo",l=r==="old"?Promise.resolve(null):$g(o),a=t1(o),c=i1(n==="high"&&innerHeight*s>=560?"hi":"lo"),h=Qg(o),d=Jg(n==="high"&&innerHeight*s>=560?"hi":"lo"),p=n==="high"&&innerHeight*s>=560?"hi":"lo",g=jg(p),_=new Mr;_.fog=new Sa(13032946,.0019,700);let S=new Wn(52,innerWidth/innerHeight,.5,7e3),M=new Ao(16777215,3);M.castShadow=!0;let y=n==="low"?1024:n==="mid"?1536:2048;M.shadow.mapSize.set(y,y),md(ot.has("pcf")?parseInt(ot.get("pcf")):1);let u=62,x=M.shadow.camera,f=new et,m=new et;Object.assign(x,{left:-u,right:u,top:u,bottom:-u,near:1,far:420});let v=new H(0,1,0),E=new H,b=new H,T=new H,C=new H(0,1,0),R=new H(0,150,60),P=new H,A=new H,w=null,L=0,D=0,U=0;M.shadow.updateMatrices=function(){x.position.copy(R),x.lookAt(P),x.updateMatrixWorld(),x.updateProjectionMatrix(),m.multiplyMatrices(x.matrixWorldInverse,f).multiply(x.matrixWorld),x.projectionMatrix.multiply(m),x.projectionMatrixInverse.copy(x.projectionMatrix).invert(),this._updateMatrix(x,this.matrix,this._frustum)};let V=!0;M.shadow.bias=-4e-4;let z=()=>{M.shadow.normalBias=ot.has("nb")?parseFloat(ot.get("nb")):1.5*2*u/M.shadow.mapSize.x};z();{let[ye,xt]=(ot.get("graze")||"0,0.12").split(",").map(Number);Rm(ye,xt)}_.add(M,M.target);let O=new Ao(16777215,0);O.castShadow=n!=="low"&&!ot.has("nocarsh");{let ye=ot.has("carsm")?parseInt(ot.get("carsm")):n==="high"?512:384;O.shadow.mapSize.set(ye,ye)}if(Object.assign(O.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),O.shadow.bias=-2e-4,O.shadow.normalBias=.025,_.add(O,O.target),O.castShadow){let ye=M.shadow.getFrustum(),xt=O.shadow.getFrustum();for(let it of[ct,wa]){let an=it.prototype.intersectsFrustum;it.prototype.intersectsFrustum=function(ni){return ni===xt?this.userData.car===!0:(ni!==ye||this.userData.car!==!0)&&an.call(this,ni)}}}let k=new Wa(10799359,13154464,1.6);_.add(k),ta("painting the town\u2026"),await new Promise(ye=>setTimeout(ye,10));let W=Ym(Km[p]);rg(W);{let ye=await d;ye&&(Zm(W,ye),ye.img.close())}{let ye=await g;ye&&($m(W,ye)&&Tg(ye.types),ye.img.close())}let $=Jm(e);pg($.cells),ke.uTuftV.value.set(...$.tuftV);let le=Om(W.textures(e),$.tex),Me=Lm();Me.update(e,0,0,0,0),ta("painting the clouds\u2026"),await new Promise(ye=>setTimeout(ye,10)),mg(ot.has("leafd")?parseFloat(ot.get("leafd")):n==="high"?.72:.62);{let ye=await c;if(ye){Oi.cells=ye.cells.filter(an=>an.kind==="leaf"),ye.tex.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy());let xt=xd(ye.tex);le.gleaf=xt.mat,le.gleafDepth=xt.depth;let it=ye.cells.filter(an=>an.kind==="blossom");it.length&&(Oi.bcells=it,le.gblossom=xd(ye.tex,{blossom:!0}).mat)}}_g(),Dg();let be=[2.1,1.75,3.2],K=[1.42,1.47,1.74],j=[.95,1.05,1.8],xe=[.91,1.34,1.2],Ce=[1.88,1.28,2],Ae=[1.97,1.54,1.62];{let ye=await h;ye&&(ye.tex.anisotropy=Math.min(n==="high"?16:4,e.capabilities.getMaxAnisotropy()),mi.tex=ye.tex,mi.uFieldK.value.set(1/ye.tile[0],1/ye.tile[1]),mi.uFieldM.value.set(...ye.mean))}let Pe=new Zu;le.shore=a1(n!=="high"),le.surf=c1(),uh.n=n==="high"?8:4;let We=l1(),Xe=b1(n,ot.has("grass")?ot.get("grass").split(",").map(Number):null);for(let ye of Xe.meshes)_.add(ye);let we=new fh(_,Pe,le,We),Ze=Hg();_.add(Ze);let te=Wg();_.add(te.group);let Te=o1();_.add(Te.mesh);let X=E1();X.group.rotation.order="YXZ",_.add(X.group),X.group.traverse(ye=>{ye.userData.car=!0});let ae=C1(le.glowTex);ae.group.forEach(ye=>_.add(ye));let ie=ot.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),ne=A1(e,_,S,{msaa:ie==="msaa"?n==="high"?4:2:0,fxaa:ie==="fxaa"});ke.uReflTex.value=ne.refl.rt.texture;let B=await l,pe=B?e1(B,ne):null;pe&&_.add(pe.mesh);let ee=!pe||r==="both"?Gg(Vg(e)):null;ee&&_.add(ee.group);let N=await a,I=N?n1(N,ne,_.fog.color):null;I&&_.add(I.mesh);let G=new H,q=new H,Q=ot.get("refl")||"auto",ue=ot.has("backlit")?parseFloat(ot.get("backlit")):1,ge=[7.5,3,2.3],he=[1.7,1.15,1],de=.7,Ue=ot.has("lightson")?parseFloat(ot.get("lightson")):-1,qe=new H,De=ot.has("haze")?parseFloat(ot.get("haze")):1,Ne=Hm();_.add(Ne.group);let Fe=Vm();_.add(Fe.group);let Ke=g1(ot),at=x1(),Z=v1();_.add(at.mesh,Z.mesh);let Ie=y1();_.add(Ie.mesh);let me=_1();_.add(me.mesh);let Be=new _e,He=new _e,Ee=new dt,tt=M1();_.add(tt.mesh);let $e=Ke.W.rain,kt=.4,Nt=5.5,se={s:Math.max(100,parseFloat(ot.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:$t(parseFloat(ot.get("t"))||.4,0,.999),todPaused:ot.has("freeze"),dist:0,spray:ot.has("nospray")?0:1,grass:1,pclouds:1,band:1,cam:{low:1,eye:2,top:3,film:4}[ot.get("cam")]??(ea?4:0)},dn=!1;pe&&(pe.opening=["sakura","city"].includes(un(se.s))?"center":"flank"),ta("building the road\u2026"),await new Promise(ye=>setTimeout(ye,10));let xh=ea?620:we.ahead;we.ahead=260;let yh=ot.has("detail")?parseFloat(ot.get("detail")):380,Al=ot.has("farleaf")?parseFloat(ot.get("farleaf")):540;for(;we.update(se.s,1e9););we.flush(),we.ahead=xh;{ta("preparing the light\u2026"),await new Promise(ln=>setTimeout(ln,10));let ye=new cn,xt=new mt;xt.setAttribute("position",new Je([0,0,0,.01,0,0,0,.01,0],3)),xt.setAttribute("normal",new Je([0,1,0,0,1,0,0,1,0],3)),xt.setAttribute("uv",new Je([0,0,1,0,0,1],2)),xt.setAttribute("color",new Je([1,1,1,1,1,1,1,1,1],3));let it=new mt;it.setAttribute("position",xt.attributes.position);let an=new Set([le.shore,le.surf,We]),ni=[le.color,le.atlas,le.foliage,le.leaf,le.lamp,le.sig,le.sodium,le.decal,le.pool,le.shore,le.surf,We,...le.gleaf?[le.gleaf]:[],...le.gblossom?[le.gblossom]:[]];for(let ln=0;ln<wi.length;ln++)ni.push(pl([wi[ln]])),ni.push(pl([wi[ln],wi[(ln+1)%wi.length]]));for(let ln of ni){let os=new ct(an.has(ln)?it:xt,ln);os.castShadow=os.receiveShadow=!an.has(ln),os.frustumCulled=!1,(ln===le.gleaf||ln===le.gblossom)&&(os.customDepthMaterial=le.gleafDepth),ye.add(os)}ye.position.set(0,0,0),_.add(ye),M.target.position.set(0,0,0),M.position.set(0,150,60);let En=[at.mesh,Z.mesh,Ie.mesh,me.mesh,Fe.group,Ne.group,Te.mesh].filter(ln=>!ln.visible);for(let ln of En)ln.visible=!0;Xe.warm(!0),e.setRenderTarget(ne.composer.readBuffer),e.compile(_,S),e.render(_,S),e.setRenderTarget(null);for(let ln of En)ln.visible=!1;Xe.warm(!1),_.remove(ye),xt.dispose(),it.dispose(),ne.bloom.enabled=ne.refl.enabled=!0,ne.composer.render(0),ne.bloom.enabled=ne.refl.enabled=!1}let Et={k:Math.ceil((se.s-Dr)/Lr),phase:"idle",raise:1,decided:!1,t2:0},wt={},Ot={},Ft={},_s=ot.has("yaw")||ot.get("cam")==="top",bs=new H,zs=new H,Yn=new H,Ms=!1,Hr=new H,ks=new H,Rl=Vn("spd"),Cl=Vn("dist"),_h=Vn("clock"),Vr=Vn("zone"),Gr=Vn("start"),Pl=Vn("hint"),pn=null,F=null,J=0,fe=0;function ce(ye){!dn||ye===F||(F=ye,Vr.querySelector(".jp").textContent=al[ye].jp,Vr.querySelector(".en").textContent=al[ye].en,Vr.classList.add("on"),clearTimeout(J),J=setTimeout(()=>Vr.classList.remove("on"),5200))}function oe(){if(!dn){if(dn=!0,document.body.classList.remove("pre"),!ot.has("auto"))try{pn=R1(),pn&&pn.ac.resume()}catch{pn=null}Gr.style.opacity=0,setTimeout(()=>Gr.remove(),1500),ea||(Pl.style.opacity=.75,setTimeout(()=>Pl.style.opacity=0,9e3))}}let Oe={};addEventListener("keydown",ye=>{Oe[ye.key]=!0,(ye.key==="m"||ye.key==="M")&&je(),(ye.key==="t"||ye.key==="T")&&nt(),(ye.key==="c"||ye.key==="C")&&Qe(),(ye.key==="r"||ye.key==="R")&&Pn(),!dn&&(ye.key===" "||ye.key==="Enter")&&oe()}),addEventListener("keyup",ye=>{Oe[ye.key]=!1});let ze=null;i.addEventListener("pointerdown",ye=>{ze={id:ye.pointerId,x:ye.clientX,y:ye.clientY,sy:ye.clientY,sc:se.mult}});let Ve=ye=>$t(ye.sc*Math.exp(-((ye.y-ye.sy)/innerHeight)*3.4),kt,Nt);addEventListener("pointermove",ye=>{ze&&ye.pointerId===ze.id&&(ze.x=ye.clientX,ze.y=ye.clientY,se.mult=Ve(ze))}),addEventListener("pointerup",()=>{ze=null}),addEventListener("pointercancel",()=>{ze=null}),i.addEventListener("touchstart",ye=>{let xt=ye.changedTouches[0];ze={id:"touch",x:xt.clientX,y:xt.clientY,sy:xt.clientY,sc:se.mult},ye.preventDefault()},{passive:!1}),i.addEventListener("touchmove",ye=>{if(!ze)return;let xt=ye.changedTouches[0];ze.x=xt.clientX,ze.y=xt.clientY,se.mult=Ve(ze),ye.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{ze=null}),i.addEventListener("touchcancel",()=>{ze=null});function je(){pn&&(pn.toggle(),Vn("snd").style.opacity=pn.muted?.4:1)}function nt(){se.todPaused=!se.todPaused,Vn("tim").style.opacity=se.todPaused?.4:1}let vt=[0,1,2,4],_t={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function Qe(){se.cam=vt[(vt.indexOf(se.cam)+1)%vt.length],Vn("cam").textContent=_t[se.cam]||"\u25D0",se.cam===4&&Wt()}let Ut=["chase","side","road","crane","eye","side","road"],gt={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function Wt(){let ye;do ye=Ut[Math.floor(Math.random()*Ut.length)];while(ye===gt.last);{let xt=Bi(se.s+60);xt&&Math.abs(se.s+60-xt.s)<rn+120&&(ye=Math.random()<.6?"chase":"eye")}if(Object.assign(gt,{type:ye,last:ye,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),ye==="road"){let xt=se.s+40+Math.random()*18,it=kn(xt,"rw"),an=Math.random()<.6?-1:1,ni=an*(it+(an<0?.9:1.3)),En=Pe.at(xt,{}),ln=En.y+vs(xt,ni,En.y,it);gt.anchor={x:En.x+En.rx*ni,y:Math.max(ln,En.y)+1.05,z:En.z+En.rz*ni,s:xt}}Ms=!1}let Ht={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function Pn(){Vn("wx").textContent=Ht[Ke.cycle()]}Vn("wx").textContent=Ht[Ke.W.mode],Vn("cam").textContent=_t[se.cam]||"\u25D0",se.cam===4&&Wt(),Vn("wx").onclick=ye=>{ye.stopPropagation(),Pn()},Vn("snd").onclick=ye=>{ye.stopPropagation(),je()},Vn("tim").onclick=ye=>{ye.stopPropagation(),nt()},Vn("cam").onclick=ye=>{ye.stopPropagation(),Qe()};let Ye=0,Gn=ye=>{let xt=performance.now();xt-Ye<120||(Ye=xt,ye.cancelable&&ye.type!=="click"&&ye.preventDefault(),oe())};for(let ye of["touchstart","pointerdown","mousedown","click"])Gr.addEventListener(ye,Gn,{passive:!1});let Pt=()=>{pn&&pn.ac.state!=="running"&&pn.ac.resume()};for(let ye of["touchend","click","keydown"])addEventListener(ye,Pt,{passive:!0});document.addEventListener("visibilitychange",()=>{pn&&(document.hidden?pn.ac.suspend():pn.ac.resume())});let Fn=!1,xi="",ci=52,Ii=0;function zt(){let ye=innerWidth,xt=innerHeight,it=ye/xt,an=ye+"x"+xt+"@"+s;an!==xi&&(xi=an,e.setPixelRatio(s),e.setSize(ye,xt,!1),ne.composer.setPixelRatio(s),ne.composer.setSize(ye,xt),S.aspect=it,ci=it>=1?52:$t(2*Math.atan(Math.tan(34*Math.PI/180)/it)*180/Math.PI,52,80),S.fov=ci+Ii,S.updateProjectionMatrix(),ne.grade.uniforms.uAspect.value=it,ne.grade.uniforms.uTexel.value.set(1/ne.composer.readBuffer.width,1/ne.composer.readBuffer.height),ke.uReflRes.value.set(ne.composer.readBuffer.width,ne.composer.readBuffer.height),Zg(e))}addEventListener("resize",()=>{Fn=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Fn=!0}),zt();let Jt=0;function Gi(ye=!0){if(s>1.05)s=Math.max(1,s-.25),Fn=!0;else if(V)V=!1,ne.bloom.enabled=!1;else if(M.shadow.mapSize.x>1024)M.shadow.mapSize.set(1024,1024),z(),M.shadow.map&&(M.shadow.map.dispose(),M.shadow.map=null);else if(we.ahead>430)we.ahead=430;else return;if(Jt++,ye)try{localStorage.setItem("icd-q",String(Jt))}catch{}}try{let ye=parseInt(localStorage.getItem("icd-q")||"0");if(!ot.has("q"))for(let xt=0;xt<Math.min(ye,6);xt++)Gi(!1);Jt=Math.max(Jt,ye||0)}catch{}let Xt=performance.now(),mn=0,Ss=0,Hs=0,na=()=>1-re.night,bh=0,en=0,t0=0,Mt=ot.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;Mt&&(Mt.gl=e.getContext(),Mt.tq=Mt.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let yi={p:-1,a:new H,b:new H,next:5},It={lat:0,lon:0,road:0,jolt:0,kick:0,u:se.u,vu:0,v:0,s:se.s,yaw:0,brake:0,rk:NaN,rb:null},P1=new _e(3.6,2.8,1.8),I1=[-2.5335,-1.4665,1.4665,2.5335],n0=[1.12,-1.12],L1=[-24.5,24.5];function i0(ye){requestAnimationFrame(i0);let xt=performance.now();Fn&&(Fn=!1,zt());let it=Math.min(.05,Math.max(0,(ye-Xt)/1e3));Xt=ye,mn+=it,se.steer=0,(Oe.ArrowLeft||Oe.a||Oe.A)&&(se.steer=-1),(Oe.ArrowRight||Oe.d||Oe.D)&&(se.steer=1),(Oe.ArrowUp||Oe.w||Oe.W)&&(se.mult=$t(se.mult*Math.exp(it*.9),kt,Nt)),(Oe.ArrowDown||Oe.s||Oe.S)&&(se.mult=$t(se.mult*Math.exp(-it*.9),kt,Nt)),ze&&Math.abs(ze.y-ze.sy)<30&&(se.steer=ze.x<innerWidth/2?-1:1),se.steer&&(se.lastInput=ye,se.uHome=se.u);let an=Oo(Et.k);se.s-an>24&&(Et.k++,an=Oo(Et.k),Object.assign(Et,{phase:"idle",raise:1,decided:!1}));let ni=ul(an),En=an-se.s;ni&&!Et.decided&&En<150&&(Et.decided=!0,En>75&&dn&&se.speed*se.speed/2.5<En-14&&(ot.has("xing")||_n(Et.k,99)<.8)&&(Et.phase="warn",Fe.start(an,_n(Et.k,7)<.5?1:-1,16))),Et.phase==="warn"?(Et.raise=Math.max(0,Et.raise-it/6),Fe.st.cleared&&(Et.phase="clear",Et.t2=0)):Et.phase==="clear"?(Et.raise=Math.max(0,Et.raise-it/6),(Et.t2+=it)>2.2&&(Et.phase="raise")):Et.phase==="raise"&&(Et.raise=Math.min(1,Et.raise+it/5),Et.raise>=1&&(Et.phase="idle"));let ln=Et.phase==="warn"||Et.phase==="clear"||Et.phase==="raise"&&Et.raise<.25,os=kn(se.s,"speed")*se.mult*(dn?1:.55);if(Et.phase!=="idle"&&Et.raise<.8&&En>0){let Re=En-11.2,st=Re>0?Math.sqrt(2*1.25*Re):0;os=Math.min(os,st),se.speed=Math.min(se.speed,st)}ot.has("park")&&(os=0,se.speed=0),se.speed+=(os-se.speed)*Math.min(1,it*.5),se.s+=se.speed*it,se.dist+=se.speed*it;let Il=kn(se.s,"rw");se.steer?se.u=$t(se.u+se.steer*it*2.4,-Il+.85,Il-.85):ye-se.lastInput>3e3&&(se.u+=($t(se.uHome,-Il+.85,Il-.85)+Math.sin(mn/11)*.1-se.u)*Math.min(1,it*.9)),!se.todPaused&&dn&&(se.tod=(se.tod+it/480*(re.night>.5?1.7:1))%1),Og(se.tod),Ke.update(it);let Zn=Ke.W.ov,Ts=Ke.W.rain;kg(Zn,Ts),$e=$t($e+(Ts>.25?it/18:-it/120),0,1);let s0=performance.now();we.update(se.s,dn?3.5:14);let r0=performance.now();if(Pe.at(se.s,wt),Math.abs(wt.x-we.origin.x)>900||Math.abs(wt.z-we.origin.z)>900){let Re=Math.round(wt.x)-we.origin.x,st=Math.round(wt.z)-we.origin.z;we.setOrigin(Math.round(wt.x),Math.round(wt.z)),bs.x-=Re,bs.z-=st,zs.x-=Re,zs.z-=st,ae.shift&&ae.shift(Re,st),tt.shift(Re,st),Ie.shift(Re,st)}let Wi=we.origin.x,Xi=we.origin.z,D1=(Pe.at(se.s+1.5,Ft).y-Pe.at(se.s-1.5,Ot).y)/3,N1=(Ft.h-Ot.h)/3;if(X.group.position.set(wt.x+wt.rx*se.u-Wi,wt.y+.01,wt.z+wt.rz*se.u-Xi),it>0){let Re=It.vu+((se.u-It.u)/it-It.vu)*Math.min(1,it*6),st=(Re-It.vu)/it;It.u=se.u,It.vu=Re,It.lat=st-se.speed*se.speed*N1,It.lon+=((se.speed-It.v)/it-It.lon)*Math.min(1,it*8),It.v=se.speed;let rt=Et.phase!=="idle"&&En>0&&En<20&&se.speed<.5;if(It.brake=It.lon<-.6||rt?1:It.lon>-.3?0:It.brake,It.yaw=-$t(Math.atan(Re/Math.max(se.speed,6))*.8,-.1,.1),It.road=.004*Math.sin(se.s*.48)+.003*Math.sin(se.s*.86+1.3),It.jolt=It.kick=0,ni)for(let St=0;St<4;St++)for(let Zt=0;Zt<2;Zt++){let Kt=an+I1[St]-n0[Zt];if(It.s<Kt&&se.s>=Kt){let tn=.05+Math.min(se.speed,25)*.004;It.jolt+=tn,It.kick+=Zt?tn*.9:-tn*.9,pn&&pn.bump(.25+Math.min(se.speed,25)/50)}}{let St=Math.round((se.s-zo)/Nr);St!==It.rk&&(It.rk=St,It.rb=Fi(se.s));let Zt=It.rb;if(Zt)for(let Kt=0;Kt<2;Kt++)for(let tn=0;tn<2;tn++){let ui=Zt.s+L1[Kt]-n0[tn];if(It.s<ui&&se.s>=ui){let Bn=.035+Math.min(se.speed,25)*.003;It.jolt+=Bn,It.kick+=tn?Bn*.9:-Bn*.9,pn&&pn.bump(.2+Math.min(se.speed,25)/60)}}}It.s=se.s}X.group.rotation.set(-Math.atan(D1),wt.h+It.yaw,0);let pr=Bi(se.s);pr&&Math.abs(se.s-pr.s)<700?(Pe.at(pr.s-bn,Ft),ke.uTunA.value.set(Ft.x-Wi,Ft.y,Ft.z-Xi),Pe.at(pr.s+bn,Ft),ke.uTunB.value.set(Ft.x-Wi,Ft.y,Ft.z-Xi),ke.uTunR.value=kn(pr.s,"rw")+1.7):(ke.uTunA.value.set(0,-1e4,0),ke.uTunB.value.set(0,-1e4,0));let Mh=pr&&Math.abs(se.s+1-pr.s)<bn-1.5?1:0;en+=(Mh-en)*Math.min(1,it*(Mh?1.6:.7)),ke.uCarPos.value.set(X.group.position.x+wt.fx*1.7,X.group.position.y+.8,X.group.position.z+wt.fz*1.7),ke.uCarFwd.value.set(wt.fx,-.05,wt.fz).normalize(),ke.uHead.value=Mh,X.update(it,se.speed,Math.max(re.night,en),Ts,It,t0),Ne.update(ni&&En>-24&&En<700?Qu(Pe,an):null,we.origin,Et.raise,ln,mn),Fe.update(it,Pe,we.origin,Tt(.15,.8,re.night),kn(an,"rw")+3.2);let Sh=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ot.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(ot.has("rig")){let[Re,st,rt,St]=ot.get("rig").split(",").map(Number);Object.assign(Sh[0],{back:Re,up:st,ahead:rt,lookY:St})}let mr=new H,ia=6,o0=se.cam===2;if(se.cam===4){gt.t+=it;{let rt=Bi(se.s+30);rt&&Math.abs(se.s+30-rt.s)<rn+70&&gt.type!=="chase"&&gt.type!=="eye"&&(gt.type="chase",gt.t=0,gt.dur=20,Ms=!1)}(gt.t>gt.dur+(gt.type==="road"?8:0)||gt.type==="road"&&gt.anchor&&se.s>gt.anchor.s+24)&&Wt();let Re=X.group.position,st=gt.type;if(st==="chase"||st==="eye"){let rt=Sh[st==="eye"?2:0];o0=st==="eye",Pe.at(se.s-rt.back,Ot),Pe.at(se.s+rt.ahead,Ft),Yn.set(Ot.x+Ot.rx*se.u*rt.cu-Wi,Ot.y+rt.up,Ot.z+Ot.rz*se.u*rt.cu-Xi),mr.set(Ft.x+Ft.rx*se.u*rt.lu-Wi,Ft.y+rt.lookY,Ft.z+Ft.rz*se.u*rt.lu-Xi)}else if(st==="side"){Pe.at(se.s+1.5,Ot);let rt=Ct(se.s),St=rt.city+rt.sakura>.5,Zt=kn(se.s,"rw"),Kt=gt.sideSign>0?Zt+(St?1.45:3.4):-(Zt+1.5),tn=Ot.y+vs(se.s+1.5,Kt,Ot.y,Zt);Yn.set(Ot.x+Ot.rx*Kt-Wi,Math.max(tn+1.55,Ot.y+1.25),Ot.z+Ot.rz*Kt-Xi),mr.set(Re.x+wt.fx*2.5,Re.y+.9,Re.z+wt.fz*2.5),ia=4}else if(st==="road"&&gt.anchor)Yn.set(gt.anchor.x-Wi,gt.anchor.y,gt.anchor.z-Xi),mr.set(Re.x,Re.y+.85,Re.z),ia=30;else{Pe.at(se.s-20,Ot),Pe.at(se.s+34,Ft);let rt=14+Math.min(gt.t,20)*.35;Yn.set(Ot.x+Ot.rx*se.u*.4-Wi,Ot.y+rt,Ot.z+Ot.rz*se.u*.4-Xi),mr.set(Ft.x-Wi,Ft.y+1,Ft.z-Xi),ia=3}}else{let Re=Sh[se.cam];Pe.at(se.s-Re.back,Ot),Pe.at(se.s+Re.ahead,Ft);let st=se.u*Re.cu,rt=st+(Re.side||0);Yn.set(Ot.x+Ot.rx*rt-Wi,Ot.y+Re.up,Ot.z+Ot.rz*rt-Xi),mr.set(Ft.x+Ft.rx*se.u*Re.lu-Wi,Ft.y+Re.lookY,Ft.z+Ft.rz*se.u*Re.lu-Xi)}X.group.visible=!o0,se.cam===3?S.up.set(wt.fx,0,wt.fz):S.up.set(0,1,0),Ms||(bs.copy(Yn),zs.copy(mr),Ms=!0);let a0=1+Math.max(0,se.speed-12)/12;bs.lerp(Yn,1-Math.exp(-it*ia*a0)),zs.lerp(mr,1-Math.exp(-it*Math.min(ia,8)*a0));{let Re=se.cam===3?0:Math.min($t((se.speed-16)*.22,0,11),Math.max(0,84-ci));Ii+=(Re-Ii)*Math.min(1,it*1.5),Math.abs(S.fov-(ci+Ii))>.02&&(S.fov=ci+Ii,S.updateProjectionMatrix())}S.position.copy(bs),S.lookAt(zs),ot.has("yaw")&&S.rotateY(parseFloat(ot.get("yaw"))*Math.PI/180),ot.has("pitch")&&S.rotateX(parseFloat(ot.get("pitch"))*Math.PI/180),Hr.set(wt.fx,0,wt.fz),ks.set(wt.rx,0,wt.rz);{let Re=X.group.position,st=S.position.x-Re.x,rt=S.position.z-Re.z,St=se.cam===4&&gt.type!=="chase"&&gt.type!=="eye",Zt=se.s+st*wt.fx+rt*wt.fz-(St?10:0),Kt=St||_s?40:Math.tan(S.fov*Math.PI/360)*S.aspect*1.08;Xe.update(Pe,Zt,se.u+st*wt.rx+rt*wt.rz,we.origin.x,we.origin.z,kn(se.s,"rw"),Kt),se.grass||Xe.hide()}let jt=Ct(se.s),Th=1+.25*re.bright*(1-en);M.color.copy(re.sunCol),M.intensity=re.sunI/Th;{let Re=re.lightDir;if(v.angleTo(Re)>.1){let Bn=0;if(dn&&!se.todPaused)for(let ii=1;ii<=60&&!(zd(se.tod+ii*.001,A).angleTo(Re)>.09);ii++)Bn=ii;zd(se.tod+Bn*.001,v),L=D=0}E.crossVectors(C,v).normalize(),b.crossVectors(v,E),T.set(X.group.position.x+wt.fx*26,X.group.position.y,X.group.position.z+wt.fz*26),M.target.position.copy(T),M.position.copy(T).addScaledVector(Re,200);let st=2*u/M.shadow.mapSize.x,rt=v.x/v.y-Re.x/Re.y,St=v.z/v.y-Re.z/Re.y;st!==U&&(U=st,L=D=0);{let Bn=Math.round(X.group.position.y);if(w===null)w=Bn;else if(Math.abs(X.group.position.y-w)>3){let ii=Bn-w;L-=ii*(rt*E.x+St*E.z),D-=ii*(rt*b.x+St*b.z),w=Bn}}let Zt=we.origin.x,Kt=we.origin.z,tn=T.dot(E)+Zt*E.x+Kt*E.z-L,ui=T.dot(b)+Zt*b.x+Kt*b.z-D;T.addScaledVector(E,Math.round(tn/st)*st-tn).addScaledVector(b,Math.round(ui/st)*st-ui),P.copy(T),R.copy(T).addScaledVector(v,200),f.set(1,rt,0,-w*rt,0,1,0,0,0,St,1,-w*St,0,0,0,1)}O.target.position.set(X.group.position.x,X.group.position.y+.9,X.group.position.z),O.position.copy(O.target.position).addScaledVector(re.lightDir,12),k.color.copy(re.hemiSky),k.groundColor.copy(re.hemiGround),k.intensity=re.hemiI/Th;{let Re=(1-re.night)*(1-Zn);if(Re>.001){S.getWorldDirection(qe);let st=qe.x,rt=qe.z,St=Math.hypot(st,rt)||1,Zt=re.sunDir,Kt=0;for(let ui=-2;ui<=2;ui++){let Bn=ui*.3,ii=Math.cos(Bn),gr=Math.sin(Bn),Xr=(st*ii-rt*gr)/St,qr=(st*gr+rt*ii)/St,sa=Math.max(0,Xr*Zt.x+qr*Zt.z),Yr=sa*sa;Kt+=Yr*Yr*Yr}let tn=Kt/5*(.1+.35*re.warm)*1.4*Re*De;re.fog.r+=re.sunCol.r*tn,re.fog.g+=re.sunCol.g*tn,re.fog.b+=re.sunCol.b*tn}}_.fog.color.copy(re.fog);let l0=(jt.city*.0022+jt.sakura*.0019+jt.coast*.0011+jt.country*.0014+jt.mountain*.0017+jt.snow*.0021)*(1+re.night*.25);_.fog.near=l0*(1+.55*Zn+.45*Ts),_.fog.far=we.ahead*.92,ke.uSkyHor.value.copy(re.horizon),ke.uSkyZen.value.copy(re.zenith),ke.uTime.value=mn,ke.uWet.value=$e*(1-jt.snow),ke.uSakWet.value=de,t0=Math.max(ke.uWet.value,ke.uSakWet.value*jt.sakura)*(1-en);{let Re=(ke.uWet.value>.04||ke.uSakWet.value*Math.max(jt.sakura,vm(se.s+120,"sakura"))>.04)&&n!=="low"&&en<.5&&Q!=="0";if(ne.refl.enabled=Re&&Q!=="taps",ke.uReflOn.value=Re&&Q!=="copy"?1:0,Re){S.getWorldDirection(q),q.y=0,q.normalize(),G.copy(S.position).addScaledVector(q,1e4).project(S),ke.uHorizon.value=G.y*.5+.5;let st=Math.max(.5,S.position.y-X.group.position.y);ke.uReflK.value=$t(1-2*st/(5+st),.05,1)}}ke.uOrigin.value.set(we.origin.x,we.origin.z),ke.uWind.value=1+.8*Ts,ke.uCloudSh.value=(1-Zn)*Tt(.04,.3,re.sunEl)*(1-re.night),ke.uCloudSh.value>.001&&Me.update(e,S.position.x,S.position.z,we.origin.x,we.origin.z);let _i=Ze.material.uniforms;if(_i.uBright.value=re.bright,_i.uNight.value=re.night,_i.uWarm.value=re.warm,_i.uTime.value=mn,_i.uCirrusCol.value.copy(re.cLit).lerp(re.horizon,.25),_i.uCirrus.value=.6*(1-Zn)*(1-.65*Tt(.4,.9,re.night)),_i.uOvercast.value=Zn,_i.uMilky.value=Tt(.55,.95,re.night)*(1-Zn),re.night>.65&&Zn<.3&&yi.p<0&&(yi.next-=it)<0){let Re=Math.atan2(wt.fx,wt.fz)+(Math.random()-.5)*1.5,st=.45+Math.random()*.6,rt=.22+Math.random()*.2,St=(Math.random()-.5)*.6,Zt=(Kt,tn)=>new H(Math.cos(Kt)*Math.sin(tn),Math.sin(Kt),Math.cos(Kt)*Math.cos(tn));yi.a.copy(Zt(st,Re)),yi.b.copy(Zt(st-rt,Re+St)),yi.p=0,yi.next=ot.has("meteors")?1:6+Math.random()*20}yi.p>=0&&(yi.p+=it/.85,yi.p>1.3&&(yi.p=-1)),_i.uMetP.value=yi.p,_i.uMetA.value.copy(yi.a),_i.uMetB.value.copy(yi.b),_i.uDeckLit.value.copy(re.horizon).lerp(re.cLit,.35),_i.uDeckDark.value.copy(re.zenith).lerp(re.horizon,.25).multiplyScalar(.82),Ze.position.copy(S.position);{let Re=!!pe&&(se.pclouds!==0||!ee);pe&&(pe.mesh.visible=Re,Re&&pe.update(S,it)),ee&&(ee.group.visible=!Re,Re||ee.update(S.position,it))}let U1=I&&se.band!==0?I.update(S,sr(se.s+200),Math.max(1,S.position.y-wt.y+.45),_.fog.near,_.fog.far):0;I&&se.band===0&&(I.mesh.visible=!1),te.update(S.position,Math.max(jt.snow,Ct(se.s+600).snow*.7),1-U1);let Ll=0;for(let Re of[-150,0,250,500,800])Ll=Math.max(Ll,Ct(se.s+Re).coast);Te.mesh.visible=Ll>.001,Te.update(S.position,mn,l0*.8,Tt(0,.35,Ll),ne.grade.uniforms),We.uniforms.uTime.value=mn,We.uniforms.uFogD.value=_.fog.near,We.uniforms.uNight.value=re.night,We.uniforms.uSpecK.value=1-re.overcast*.85,ke.uSunDir.value.copy(re.lightDir),ke.uSunCol.value.copy(re.sunCol);let Li=Tt(.15,.8,re.night);if(le.atlas.emissiveIntensity=.1+Li*1.05,ke.uBacklit.value=ue*1.6*(1-Zn)*(1-re.night)*Tt(0,.08,re.sunEl)*(1-Tt(.25,.55,re.sunEl))*(1-en),ke.uGhShade.value.set(yt(.8,.3,re.bright),yt(.8,.85,re.bright),yt(.8,1.7,re.bright)),mi.tex){let Re=re.bright;mi.uFieldC.value.set(yt(K[0],be[0],Re),yt(K[1],be[1],Re),yt(K[2],be[2],Re)),mi.uFieldCo.value.set(yt(xe[0],j[0],Re),yt(xe[1],j[1],Re),yt(xe[2],j[2],Re)),mi.uFieldSa.value.set(yt(Ae[0],Ce[0],Re),yt(Ae[1],Ce[1],Re),yt(Ae[2],Ce[2],Re))}ke.uBlShade.value.set(yt(he[0],ge[0],re.bright),yt(he[1],ge[1],re.bright),yt(he[2],ge[2],re.bright)),ke.uLightsOn.value=Ue>=0?Ue:Math.max(Tt(.02,.75,re.night),.3*Zn),le.lamp.color.setRGB(.9,.86,.74).lerp(P1,Li),le.pool.opacity=Li*.42*(1+.8*$e);{let Re=X.group.position,st=X.lamps,rt=Math.max(Li,en),St=0,Zt=0,Kt=0,tn=-1e3,ui=0,Bn=0,ii=-1e3,gr=0,Xr=900,qr=900;if(rt>.01){let h0=Math.floor(se.s/Gt);for(let Eh=h0-1;Eh<=h0+1;Eh++){let Nl=we.chunks.get(Eh);if(!Nl||!Nl.lamps)continue;let ra=Nl.lamps,f0=Nl.group.position;for(let Zr=0;Zr<ra.length;Zr+=4){let wh=ra[Zr]+f0.x,Ah=ra[Zr+1],Rh=ra[Zr+2]+f0.z,Ch=(wh-Re.x)**2+(Ah-Re.y)**2+(Rh-Re.z)**2,Ul=ra[Zr+3]/(1+.045*Ch);Ul>St?(Zt=St,qr=Xr,Bn=Kt,ii=tn,gr=ui,St=Ul,Xr=Ch,Kt=wh,tn=Ah,ui=Rh):Ul>Zt&&(Zt=Ul,qr=Ch,Bn=wh,ii=Ah,gr=Rh)}}S.updateMatrixWorld()}let sa=rt*St*(1+.045*Xr)*(1-Tt(18,30,Math.sqrt(Xr))),Yr=rt*Zt*(1+.045*qr)*(1-Tt(18,30,Math.sqrt(qr)));st[0].set(Kt,tn,ui,1).applyMatrix4(S.matrixWorldInverse).w=sa,st[1].set(Bn,ii,gr,1).applyMatrix4(S.matrixWorldInverse).w=Yr,X.lampCol.setRGB(1,.8-.32*en,.52-.38*en),Hi.uLampW.value[0].set(Kt,tn,ui,sa),Hi.uLampW.value[1].set(Bn,ii,gr,Yr),Hi.uLampCol.value.copy(X.lampCol),X.head.getWorldPosition(Hi.uHeadPos.value),X.head.target.getWorldPosition(qe),Hi.uHeadDir.value.copy(qe).sub(Hi.uHeadPos.value).normalize(),Hi.uHeadI.value=X.head.intensity/60}le.pool.visible=le.pool.opacity>.003,we.lod(se.s,yh,Li>.15,Al),ke.uNight.value=Li,ne.bloom.strength=yt(.32,.55,Li),ne.bloom.threshold=yt(1.35,.95,Li),ne.bloom.radius=yt(.55,.35,Li);{let Re=Math.max(Li,en,Tt(.25,.6,re.warm)*(1-Zn));ne.bloom.enabled=V&&Re>.02,ne.bloom.strength*=Math.min(1,Re*4)}e.toneMappingExposure=yt(1,1.15,Li)*(1+.35*en)*Th,Yn.copy(S.position).addScaledVector(re.sunDir,1e3).project(S);let Vs=ne.grade.uniforms,F1=Yn.z<1?1:0,B1=Math.max(Math.abs(Yn.x),Math.abs(Yn.y));Vs.uSun.value.set(Yn.x*.5+.5,Yn.y*.5+.5),Vs.uSunVis.value=F1*(1-Tt(1,1.9,B1))*Tt(-.02,.15,re.sunEl)*(1-re.night)*(1-Zn)*(1-en),Vs.uSat.value=1.22-.24*Zn,Vs.uVig.value=.55-.43*re.bright,Vs.uLo.value.set(-.014+.026*re.bright,0,.03),Vs.uDay.value=na(),Vs.uWarm.value=re.warm,Vs.uTime.value=mn,at.update(S.position,mn,Ts*(1-en)*(1-jt.snow),na());{let Re=Bi(se.s+190),st=(jt.city+jt.country+jt.coast)*(1-Zn)*(1-$e)*Tt(.6,.9,re.sunEl)*(se.mirage??1)*(Re&&Math.abs(se.s+190-Re.s)<330?0:1);me.update(Pe,se.s,we.origin.x,we.origin.z,kn(se.s+150,"rw"),st,mn,re.horizon)}{let Re=$t(jt.snow+jt.mountain*.6*Math.max(re.night,1-Tt(.27,.36,se.tod)),0,1)*(1-en);Be.copy(re.fog).multiplyScalar(.92),He.copy(re.sunCol).multiplyScalar(Math.min(1,re.sunI/3)*(1-Zn)*.6);let st=Math.cos(X.group.rotation.y),rt=Math.sin(X.group.rotation.y),St=X.group.position;Ee.set(St.x-1.75*rt,St.y+.95,St.z-1.75*st,Math.max(re.night,en)*(.5+1.2*It.brake)),Ie.update(it,X.group,se.speed,ke.uWet.value*(1-en),jt.snow*(1-en),Re,Be,He,Ee,S.position,se.spray)}Z.update(S.position,mn,jt.snow*(.3+.7*Zn)*(1-en),na()),tt.setFog(_.fog.near),tt.update(it,mn,S.position,Hr,ks,jt,na(),Ts,X.group.position);let O1=performance.now();ae.update(it,mn,S.position,Hr,ks,jt.sakura*(1-en),wt.y,Li,(jt.country+jt.sakura*.4)*(1-Ts)*(1-en),jt.mountain*(1-en));let z1=performance.now();if(pn){Pe.at(an,Ft);let Re=Math.hypot(Ft.x-we.origin.x-S.position.x,Ft.z-we.origin.z-S.position.z),st=Fe.st.active?Fe.group.position.distanceTo(S.position):1e9,rt=se.speed/15;pn.update(rt<1.5?rt:1.5+(rt-1.5)*.4,jt,na(),{rush:$t((se.speed-25)/40,0,1),bell:ln?Math.pow($t(1-Re/260,0,1),1.5):0,train:Math.pow($t(1-st/230,0,1),2),rain:Ts*(1-en)*(1-jt.snow),wetRoad:ke.uWet.value*(1-en),speed:se.speed,load:$t(It.lon/3,0,1),roof:se.cam!==2,tunnel:en,water:(()=>{let St=Fi(se.s);return Math.max(St?1-Tt(12,150,Math.abs(se.s-St.s)):0,jt.mountain*.45)})(),dusk:re.warm*(se.tod>.5?1:.3)})}ce(un(se.s+40)),Mt&&(e.info.autoReset=!1,e.info.reset());let Dl=null;Mt&&Mt.tq&&(Dl=Mt.gl.createQuery(),Mt.gl.beginQuery(Mt.tq.TIME_ELAPSED_EXT,Dl));let c0=performance.now();ne.composer.render(it);let u0=performance.now();if(Dl){let Re=Mt.gl;for(Re.endQuery(Mt.tq.TIME_ELAPSED_EXT),Mt.pend.push(Dl);Mt.pend.length&&Re.getQueryParameter(Mt.pend[0],Re.QUERY_RESULT_AVAILABLE);){let st=Mt.pend.shift(),rt=Re.getQueryParameter(st,Re.QUERY_RESULT);Re.deleteQuery(st),Re.getParameter(Mt.tq.GPU_DISJOINT_EXT)||(Mt.gpu=rt/1e6,Mt.gpuN++,Mt.gpuSum+=Mt.gpu,Mt.gpu>Mt.gpuMax&&(Mt.gpuMax=Mt.gpu))}}let Wr=window.__pb||(window.__pb={world:0,parts:0,render:0});if(Wr.world=Wr.world*.95+(r0-s0)*.05,Wr.parts=Wr.parts*.95+(z1-O1)*.05,Wr.render=Wr.render*.95+(u0-c0)*.05,bh=bh*.95+(performance.now()-xt)*.05,window.__ft=bh,Mt){let Re=e.info,st=performance.now()-xt,rt={t:+mn.toFixed(2),s:Math.round(se.s),total:+st.toFixed(1),world:+(r0-s0).toFixed(1),render:+(u0-c0).toFixed(1),gpu:+(Mt.gpu||0).toFixed(1),progs:Re.programs.length-Mt.progs,geos:Re.memory.geometries-Mt.geos,tex:Re.memory.textures-Mt.tex,calls:Re.render.calls,tris:Re.render.triangles};rt.progs>0&&dn&&(rt.newProgs=Re.programs.slice(-rt.progs).map(St=>(St.name||"")+":"+String(St.cacheKey).slice(0,60))),Mt.progs=Re.programs.length,Mt.geos=Re.memory.geometries,Mt.tex=Re.memory.textures,Mt.frames++,Mt.sum+=st,st>Mt.max&&(Mt.max=st),st>12&&dn&&Mt.spikes.push(rt),Mt.last=rt}if((fe+=it)>.25){fe=0,Rl.textContent=Math.round(se.speed*3.6),Cl.textContent=(se.dist/1e3).toFixed(1);let Re=Math.floor(se.tod*1440);_h.textContent=`${String(Math.floor(Re/60)).padStart(2,"0")}:${String(Re%60).padStart(2,"0")}`}Ss++,dn&&Ss>150&&it>.03?Hs+=it:Hs=Math.max(0,Hs-it*.5),Hs>3&&!ot.has("q")&&(Hs=0,Gi())}window.__dbg={renderer:e,st:se,scene:_,camera:S,world:we,TOD:re,KEYS:qo,X:Et,train:Fe,weather:Ke,U:ke,birds:tt,cine:gt,post:ne,car:X,sun:M,M:le,clouds:ee,pclouds:pe,band:I,sky:Ze,mountains:te,shadowDir:v,CM:It,spray:Ie,grass:Xe,get audio(){return pn}},ta(""),Gr.classList.add("ready"),ot.has("auto")&&oe(),requestAnimationFrame(i0)}AS().catch(i=>{console.error(i),ta("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
