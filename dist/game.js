var Qd=0,_f=1,ep=2;var wr=1,tp=2,Ao=3,gs=0,Gn=1,bn=2,si=0,Ro=1,is=2,bf=3,Mf=4,np=5;var Ar=100,ip=101,sp=102,rp=103,op=104,ap=200,lp=201,cp=202,up=203,Sf=204,Ef=205,hp=206,fp=207,dp=208,pp=209,mp=210,gp=211,vp=212,xp=213,yp=214,pc=0,mc=1,gc=2,ho=3,vc=4,xc=5,yc=6,_c=7,Tf=0,_p=1,bp=2,ss=0,wf=1,Af=2,Rf=3,Cf=4,Pf=5,If=6,ja=7;var Lf=300,er=301,Rr=302,jc=303,Qc=304,Qa=306,Is=1e3,hs=1001,bc=1002,wn=1003,Mp=1004;var el=1005;var Ot=1006,eu=1007;var Pn=1008;var $n=1009,Df=1010,Nf=1011,Co=1012,tu=1013,rs=1014,Bi=1015,Rn=1016,nu=1017,iu=1018,Po=1020,Uf=35902,Ff=35899,Bf=1021,Of=1022,Jn=1023,fs=1026,tr=1027,nr=1028,su=1029,ir=1030,ru=1031;var ou=1033,tl=33776,nl=33777,il=33778,sl=33779,au=35840,lu=35841,cu=35842,uu=35843,hu=36196,fu=37492,du=37496,pu=37488,mu=37489,rl=37490,gu=37491,vu=37808,xu=37809,yu=37810,_u=37811,bu=37812,Mu=37813,Su=37814,Eu=37815,Tu=37816,wu=37817,Au=37818,Ru=37819,Cu=37820,Pu=37821,Iu=36492,Lu=36494,Du=36495,Nu=36283,Uu=36284,ol=36285,Fu=36286;var ba=2300,Mc=2301,hc=2302,lf=2303,cf=2400,uf=2401,hf=2402;var Sp=3200;var Bu=0,Ep=1,ri="",qt="srgb",Ma="srgb-linear",Sa="linear",Ht="srgb";var fc=7680;var Tp=519,wp=512,Ap=513,Rp=514,Ou=515,Cp=516,Pp=517,zu=518,Ip=519,Lp=35044;var zf="300 es",es=2e3,fo=2001;function Y1(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Z1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dp(){let i=po("canvas");return i.style.display="block",i}var xd={},mo=null;function kf(...i){let e="THREE."+i.shift();mo?mo("log",e,...i):console.log(e,...i)}function Np(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function lt(...i){i=Np(i);let e="THREE."+i.shift();if(mo)mo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ft(...i){i=Np(i);let e="THREE."+i.shift();if(mo)mo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Mr(...i){let e=i.join(" ");e in xd||(xd[e]=!0,lt(...i))}function Up(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Fp={[pc]:mc,[gc]:yc,[vc]:_c,[ho]:xc,[mc]:pc,[yc]:gc,[_c]:vc,[xc]:ho},ds=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nh=Math.PI/180,Ea=180/Math.PI;function Io(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function K1(i,e){return(i%e+e)%e}function Uh(i,e,t){return(1-t)*i+t*e}function ua(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var qf=class qf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qf.prototype.isVector2=!0;var Le=qf,vn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let a=n[s+0],u=n[s+1],h=n[s+2],p=n[s+3],m=r[o+0],x=r[o+1],y=r[o+2],S=r[o+3];if(p!==S||a!==m||u!==x||h!==y){let c=a*m+u*x+h*y+p*S;c<0&&(m=-m,x=-x,y=-y,S=-S,c=-c);let f=1-l;if(c<.9995){let d=Math.acos(c),v=Math.sin(d);f=Math.sin(f*d)/v,l=Math.sin(l*d)/v,a=a*f+m*l,u=u*f+x*l,h=h*f+y*l,p=p*f+S*l}else{a=a*f+m*l,u=u*f+x*l,h=h*f+y*l,p=p*f+S*l;let d=1/Math.sqrt(a*a+u*u+h*h+p*p);a*=d,u*=d,h*=d,p*=d}}e[t]=a,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],a=n[s+1],u=n[s+2],h=n[s+3],p=r[o],m=r[o+1],x=r[o+2],y=r[o+3];return e[t]=l*y+h*p+a*x-u*m,e[t+1]=a*y+h*m+u*p-l*x,e[t+2]=u*y+h*x+l*m-a*p,e[t+3]=h*y-l*p-a*m-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,a=Math.sin,u=l(n/2),h=l(s/2),p=l(r/2),m=a(n/2),x=a(s/2),y=a(r/2);switch(o){case"XYZ":this._x=m*h*p+u*x*y,this._y=u*x*p-m*h*y,this._z=u*h*y+m*x*p,this._w=u*h*p-m*x*y;break;case"YXZ":this._x=m*h*p+u*x*y,this._y=u*x*p-m*h*y,this._z=u*h*y-m*x*p,this._w=u*h*p+m*x*y;break;case"ZXY":this._x=m*h*p-u*x*y,this._y=u*x*p+m*h*y,this._z=u*h*y+m*x*p,this._w=u*h*p-m*x*y;break;case"ZYX":this._x=m*h*p-u*x*y,this._y=u*x*p+m*h*y,this._z=u*h*y-m*x*p,this._w=u*h*p+m*x*y;break;case"YZX":this._x=m*h*p+u*x*y,this._y=u*x*p+m*h*y,this._z=u*h*y-m*x*p,this._w=u*h*p-m*x*y;break;case"XZY":this._x=m*h*p-u*x*y,this._y=u*x*p-m*h*y,this._z=u*h*y+m*x*p,this._w=u*h*p+m*x*y;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],a=t[9],u=t[2],h=t[6],p=t[10],m=n+l+p;if(m>0){let x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(h-a)*x,this._y=(r-u)*x,this._z=(o-s)*x}else if(n>l&&n>p){let x=2*Math.sqrt(1+n-l-p);this._w=(h-a)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+u)/x}else if(l>p){let x=2*Math.sqrt(1+l-n-p);this._w=(r-u)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(a+h)/x}else{let x=2*Math.sqrt(1+p-n-l);this._w=(o-s)/x,this._x=(r+u)/x,this._y=(a+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,a=t._y,u=t._z,h=t._w;return this._x=n*h+o*l+s*u-r*a,this._y=s*h+o*a+r*l-n*u,this._z=r*h+o*u+n*a-s*l,this._w=o*h-n*l-s*a-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let a=1-t;if(l<.9995){let u=Math.acos(l),h=Math.sin(u);a=Math.sin(a*u)/h,t=Math.sin(t*u)/h,this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yf=class Yf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,a=e.w,u=2*(o*s-l*n),h=2*(l*t-r*s),p=2*(r*n-o*t);return this.x=t+a*u+o*p-l*h,this.y=n+a*h+l*u-r*p,this.z=s+a*p+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,a=t.z;return this.x=s*a-r*l,this.y=r*o-n*a,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yf.prototype.isVector3=!0;var k=Yf,Fh=new k,yd=new vn,Zf=class Zf{constructor(e,t,n,s,r,o,l,a,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,u)}set(e,t,n,s,r,o,l,a,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=a,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],a=n[6],u=n[1],h=n[4],p=n[7],m=n[2],x=n[5],y=n[8],S=s[0],c=s[3],f=s[6],d=s[1],v=s[4],g=s[7],b=s[2],M=s[5],T=s[8];return r[0]=o*S+l*d+a*b,r[3]=o*c+l*v+a*M,r[6]=o*f+l*g+a*T,r[1]=u*S+h*d+p*b,r[4]=u*c+h*v+p*M,r[7]=u*f+h*g+p*T,r[2]=m*S+x*d+y*b,r[5]=m*c+x*v+y*M,r[8]=m*f+x*g+y*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8];return t*o*h-t*l*u-n*r*h+n*l*a+s*r*u-s*o*a}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8],p=h*o-l*u,m=l*a-h*r,x=u*r-o*a,y=t*p+n*m+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/y;return e[0]=p*S,e[1]=(s*u-h*n)*S,e[2]=(l*n-s*o)*S,e[3]=m*S,e[4]=(h*t-s*a)*S,e[5]=(s*r-l*t)*S,e[6]=x*S,e[7]=(n*a-u*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let a=Math.cos(r),u=Math.sin(r);return this.set(n*a,n*u,-n*(a*o+u*l)+o+e,-s*u,s*a,-s*(-u*o+a*l)+l+t,0,0,1),this}scale(e,t){return Mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bh.makeScale(e,t)),this}rotate(e){return Mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bh.makeRotation(-e)),this}translate(e,t){return Mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zf.prototype.isMatrix3=!0;var pt=Zf,Bh=new pt,_d=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $1(){let i={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ht&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ht&&(s.r=co(s.r),s.g=co(s.g),s.b=co(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?Sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ma]:{primaries:e,whitePoint:n,transfer:Sa,toXYZ:_d,fromXYZ:bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Ht,toXYZ:_d,fromXYZ:bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var Lt=$1();function Ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zr,Sc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zr===void 0&&(Zr=po("canvas")),Zr.width=e.width,Zr.height=e.height;let s=Zr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Zr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=po("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ps(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ps(t[n]/255)*255):t[n]=Ps(t[n]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},J1=0,go=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Oh(s[o].image)):r.push(Oh(s[o]))}else r=Oh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Oh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}var j1=0,zh=new k,Zn=class i extends ds{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hs,s=hs,r=Ot,o=Pn,l=Jn,a=$n,u=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=Io(),this.name="",this.source=new go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Lf;Zn.DEFAULT_ANISOTROPY=1;var Kf=class Kf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,a=e.elements,u=a[0],h=a[4],p=a[8],m=a[1],x=a[5],y=a[9],S=a[2],c=a[6],f=a[10];if(Math.abs(h-m)<.01&&Math.abs(p-S)<.01&&Math.abs(y-c)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+S)<.1&&Math.abs(y+c)<.1&&Math.abs(u+x+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(u+1)/2,g=(x+1)/2,b=(f+1)/2,M=(h+m)/4,T=(p+S)/4,_=(y+c)/4;return v>g&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=M/n,r=T/n):g>b?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=M/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=T/r,s=_/r),this.set(n,s,r,t),this}let d=Math.sqrt((c-y)*(c-y)+(p-S)*(p-S)+(m-h)*(m-h));return Math.abs(d)<.001&&(d=1),this.x=(c-y)/d,this.y=(p-S)/d,this.z=(m-h)/d,this.w=Math.acos((u+x+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kf.prototype.isVector4=!0;var dt=Kf,Ec=class extends ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Zn(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new go(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ta=class extends Zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tc=class extends Zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Jc=class Jc{constructor(e,t,n,s,r,o,l,a,u,h,p,m,x,y,S,c){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,u,h,p,m,x,y,S,c)}set(e,t,n,s,r,o,l,a,u,h,p,m,x,y,S,c){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=l,f[13]=a,f[2]=u,f[6]=h,f[10]=p,f[14]=m,f[3]=x,f[7]=y,f[11]=S,f[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Kr.setFromMatrixColumn(e,0).length(),r=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(s),u=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let m=o*h,x=o*p,y=l*h,S=l*p;t[0]=a*h,t[4]=-a*p,t[8]=u,t[1]=x+y*u,t[5]=m-S*u,t[9]=-l*a,t[2]=S-m*u,t[6]=y+x*u,t[10]=o*a}else if(e.order==="YXZ"){let m=a*h,x=a*p,y=u*h,S=u*p;t[0]=m+S*l,t[4]=y*l-x,t[8]=o*u,t[1]=o*p,t[5]=o*h,t[9]=-l,t[2]=x*l-y,t[6]=S+m*l,t[10]=o*a}else if(e.order==="ZXY"){let m=a*h,x=a*p,y=u*h,S=u*p;t[0]=m-S*l,t[4]=-o*p,t[8]=y+x*l,t[1]=x+y*l,t[5]=o*h,t[9]=S-m*l,t[2]=-o*u,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){let m=o*h,x=o*p,y=l*h,S=l*p;t[0]=a*h,t[4]=y*u-x,t[8]=m*u+S,t[1]=a*p,t[5]=S*u+m,t[9]=x*u-y,t[2]=-u,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){let m=o*a,x=o*u,y=l*a,S=l*u;t[0]=a*h,t[4]=S-m*p,t[8]=y*p+x,t[1]=p,t[5]=o*h,t[9]=-l*h,t[2]=-u*h,t[6]=x*p+y,t[10]=m-S*p}else if(e.order==="XZY"){let m=o*a,x=o*u,y=l*a,S=l*u;t[0]=a*h,t[4]=-p,t[8]=u*h,t[1]=m*p+S,t[5]=o*h,t[9]=x*p-y,t[2]=y*p-x,t[6]=l*h,t[10]=S*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q1,e,ev)}lookAt(e,t,n){let s=this.elements;return Mi.subVectors(e,t),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Vs.crossVectors(n,Mi),Vs.lengthSq()===0&&(Math.abs(n.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Vs.crossVectors(n,Mi)),Vs.normalize(),zl.crossVectors(Mi,Vs),s[0]=Vs.x,s[4]=zl.x,s[8]=Mi.x,s[1]=Vs.y,s[5]=zl.y,s[9]=Mi.y,s[2]=Vs.z,s[6]=zl.z,s[10]=Mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],a=n[8],u=n[12],h=n[1],p=n[5],m=n[9],x=n[13],y=n[2],S=n[6],c=n[10],f=n[14],d=n[3],v=n[7],g=n[11],b=n[15],M=s[0],T=s[4],_=s[8],E=s[12],w=s[1],A=s[5],C=s[9],I=s[13],R=s[2],L=s[6],D=s[10],O=s[14],H=s[3],B=s[7],V=s[11],z=s[15];return r[0]=o*M+l*w+a*R+u*H,r[4]=o*T+l*A+a*L+u*B,r[8]=o*_+l*C+a*D+u*V,r[12]=o*E+l*I+a*O+u*z,r[1]=h*M+p*w+m*R+x*H,r[5]=h*T+p*A+m*L+x*B,r[9]=h*_+p*C+m*D+x*V,r[13]=h*E+p*I+m*O+x*z,r[2]=y*M+S*w+c*R+f*H,r[6]=y*T+S*A+c*L+f*B,r[10]=y*_+S*C+c*D+f*V,r[14]=y*E+S*I+c*O+f*z,r[3]=d*M+v*w+g*R+b*H,r[7]=d*T+v*A+g*L+b*B,r[11]=d*_+v*C+g*D+b*V,r[15]=d*E+v*I+g*O+b*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],a=e[9],u=e[13],h=e[2],p=e[6],m=e[10],x=e[14],y=e[3],S=e[7],c=e[11],f=e[15],d=a*x-u*m,v=l*x-u*p,g=l*m-a*p,b=o*x-u*h,M=o*m-a*h,T=o*p-l*h;return t*(S*d-c*v+f*g)-n*(y*d-c*b+f*M)+s*(y*v-S*b+f*T)-r*(y*g-S*M+c*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],a=e[2],u=e[6],h=e[10];return t*(o*h-l*u)-n*(r*h-l*a)+s*(r*u-o*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8],p=e[9],m=e[10],x=e[11],y=e[12],S=e[13],c=e[14],f=e[15],d=t*l-n*o,v=t*a-s*o,g=t*u-r*o,b=n*a-s*l,M=n*u-r*l,T=s*u-r*a,_=h*S-p*y,E=h*c-m*y,w=h*f-x*y,A=p*c-m*S,C=p*f-x*S,I=m*f-x*c,R=d*I-v*C+g*A+b*w-M*E+T*_;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return e[0]=(l*I-a*C+u*A)*L,e[1]=(s*C-n*I-r*A)*L,e[2]=(S*T-c*M+f*b)*L,e[3]=(m*M-p*T-x*b)*L,e[4]=(a*w-o*I-u*E)*L,e[5]=(t*I-s*w+r*E)*L,e[6]=(c*g-y*T-f*v)*L,e[7]=(h*T-m*g+x*v)*L,e[8]=(o*C-l*w+u*_)*L,e[9]=(n*w-t*C-r*_)*L,e[10]=(y*M-S*g+f*d)*L,e[11]=(p*g-h*M-x*d)*L,e[12]=(l*E-o*A-a*_)*L,e[13]=(t*A-n*E+s*_)*L,e[14]=(S*v-y*b-c*d)*L,e[15]=(h*b-p*v+m*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,a=e.z,u=r*o,h=r*l;return this.set(u*o+n,u*l-s*a,u*a+s*l,0,u*l+s*a,h*l+n,h*a-s*o,0,u*a-s*l,h*a+s*o,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,a=t._w,u=r+r,h=o+o,p=l+l,m=r*u,x=r*h,y=r*p,S=o*h,c=o*p,f=l*p,d=a*u,v=a*h,g=a*p,b=n.x,M=n.y,T=n.z;return s[0]=(1-(S+f))*b,s[1]=(x+g)*b,s[2]=(y-v)*b,s[3]=0,s[4]=(x-g)*M,s[5]=(1-(m+f))*M,s[6]=(c+d)*M,s[7]=0,s[8]=(y+v)*T,s[9]=(c-d)*T,s[10]=(1-(m+S))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Kr.set(s[0],s[1],s[2]).length(),l=Kr.set(s[4],s[5],s[6]).length(),a=Kr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),$i.copy(this);let u=1/o,h=1/l,p=1/a;return $i.elements[0]*=u,$i.elements[1]*=u,$i.elements[2]*=u,$i.elements[4]*=h,$i.elements[5]*=h,$i.elements[6]*=h,$i.elements[8]*=p,$i.elements[9]*=p,$i.elements[10]*=p,t.setFromRotationMatrix($i),n.x=o,n.y=l,n.z=a,this}makePerspective(e,t,n,s,r,o,l=es,a=!1){let u=this.elements,h=2*r/(t-e),p=2*r/(n-s),m=(t+e)/(t-e),x=(n+s)/(n-s),y,S;if(a)y=r/(o-r),S=o*r/(o-r);else if(l===es)y=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(l===fo)y=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=p,u[9]=x,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=es,a=!1){let u=this.elements,h=2/(t-e),p=2/(n-s),m=-(t+e)/(t-e),x=-(n+s)/(n-s),y,S;if(a)y=1/(o-r),S=o/(o-r);else if(l===es)y=-2/(o-r),S=-(o+r)/(o-r);else if(l===fo)y=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=p,u[9]=0,u[13]=x,u[2]=0,u[6]=0,u[10]=y,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Jc.prototype.isMatrix4=!0;var Qe=Jc,Kr=new k,$i=new Qe,Q1=new k(0,0,0),ev=new k(1,1,1),Vs=new k,zl=new k,Mi=new k,Md=new Qe,Sd=new vn,Kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],a=s[1],u=s[5],h=s[9],p=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(a,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,x),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Md,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sd.setFromEuler(this),this.setFromQuaternion(Sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tv=0,Ed=new k,$r=new vn,Ts=new Qe,kl=new k,ha=new k,nv=new k,iv=new vn,Td=new k(1,0,0),wd=new k(0,1,0),Ad=new k(0,0,1),Rd={type:"added"},sv={type:"removed"},Jr={type:"childadded",child:null},kh={type:"childremoved",child:null},An=class i extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Kn,n=new vn,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new pt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Td,e)}rotateY(e){return this.rotateOnAxis(wd,e)}rotateZ(e){return this.rotateOnAxis(Ad,e)}translateOnAxis(e,t){return Ed.copy(e).applyQuaternion(this.quaternion),this.position.add(Ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Td,e)}translateY(e){return this.translateOnAxis(wd,e)}translateZ(e){return this.translateOnAxis(Ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ts.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kl.copy(e):kl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ts.lookAt(ha,kl,this.up):Ts.lookAt(kl,ha,this.up),this.quaternion.setFromRotationMatrix(Ts),s&&(Ts.extractRotation(s.matrixWorld),$r.setFromRotationMatrix(Ts),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rd),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sv),kh.child=e,this.dispatchEvent(kh),kh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ts.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ts.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ts),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rd),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,nv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let a=l.shapes;if(Array.isArray(a))for(let u=0,h=a.length;u<h;u++){let p=a[u];r(e.shapes,p)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let a=0,u=this.material.length;a<u;a++)l.push(r(e.materials,this.material[a]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let a=this.animations[l];s.animations.push(r(e.animations,a))}}if(t){let l=o(e.geometries),a=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),x=o(e.animations),y=o(e.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(l){let a=[];for(let u in l){let h=l[u];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};An.DEFAULT_UP=new k(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},rv={type:"move"},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,a=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let S of e.hand.values()){let c=t.getJointPose(S,n),f=this._getHandJoint(u,S);c!==null&&(f.matrix.fromArray(c.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=c.radius),f.visible=c!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=h.position.distanceTo(p.position),x=.02,y=.005;u.inputState.pinching&&m>x+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=x-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return l!==null&&(l.visible=s!==null),a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gs={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Hh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Lt.workingColorSpace){if(e=K1(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Hh(o,r,e+1/3),this.g=Hh(o,r,e),this.b=Hh(o,r,e-1/3)}return Lt.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=Bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Lt.workingToColorSpace(Yn.copy(this),e),Math.round(wt(Yn.r*255,0,255))*65536+Math.round(wt(Yn.g*255,0,255))*256+Math.round(wt(Yn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Yn.copy(this),t);let n=Yn.r,s=Yn.g,r=Yn.b,o=Math.max(n,s,r),l=Math.min(n,s,r),a,u,h=(l+o)/2;if(l===o)a=0,u=0;else{let p=o-l;switch(u=h<=.5?p/(o+l):p/(2-o-l),o){case n:a=(s-r)/p+(s<r?6:0);break;case s:a=(r-n)/p+2;break;case r:a=(n-s)/p+4;break}a/=6}return e.h=a,e.s=u,e.l=h,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Yn.copy(this),t),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=qt){Lt.workingToColorSpace(Yn.copy(this),e);let t=Yn.r,n=Yn.g,s=Yn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gs),this.setHSL(Gs.h+e,Gs.s+t,Gs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gs),e.getHSL(Hl);let n=Uh(Gs.h,Hl.h,t),s=Uh(Gs.s,Hl.s,t),r=Uh(Gs.l,Hl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yn=new _e;_e.NAMES=Bp;var Aa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sr=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ji=new k,ws=new k,Vh=new k,As=new k,jr=new k,Qr=new k,Cd=new k,Gh=new k,Wh=new k,Xh=new k,qh=new dt,Yh=new dt,Zh=new dt,Ys=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ji.subVectors(e,t),s.cross(Ji);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ji.subVectors(s,t),ws.subVectors(n,t),Vh.subVectors(e,t);let o=Ji.dot(Ji),l=Ji.dot(ws),a=Ji.dot(Vh),u=ws.dot(ws),h=ws.dot(Vh),p=o*u-l*l;if(p===0)return r.set(0,0,0),null;let m=1/p,x=(u*a-l*h)*m,y=(o*h-l*a)*m;return r.set(1-x-y,y,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,As)===null?!1:As.x>=0&&As.y>=0&&As.x+As.y<=1}static getInterpolation(e,t,n,s,r,o,l,a){return this.getBarycoord(e,t,n,s,As)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,As.x),a.addScaledVector(o,As.y),a.addScaledVector(l,As.z),a)}static getInterpolatedAttribute(e,t,n,s,r,o){return qh.setScalar(0),Yh.setScalar(0),Zh.setScalar(0),qh.fromBufferAttribute(e,t),Yh.fromBufferAttribute(e,n),Zh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(qh,r.x),o.addScaledVector(Yh,r.y),o.addScaledVector(Zh,r.z),o}static isFrontFacing(e,t,n,s){return Ji.subVectors(n,t),ws.subVectors(e,t),Ji.cross(ws).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),ws.subVectors(this.a,this.b),Ji.cross(ws).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;jr.subVectors(s,n),Qr.subVectors(r,n),Gh.subVectors(e,n);let a=jr.dot(Gh),u=Qr.dot(Gh);if(a<=0&&u<=0)return t.copy(n);Wh.subVectors(e,s);let h=jr.dot(Wh),p=Qr.dot(Wh);if(h>=0&&p<=h)return t.copy(s);let m=a*p-h*u;if(m<=0&&a>=0&&h<=0)return o=a/(a-h),t.copy(n).addScaledVector(jr,o);Xh.subVectors(e,r);let x=jr.dot(Xh),y=Qr.dot(Xh);if(y>=0&&x<=y)return t.copy(r);let S=x*u-a*y;if(S<=0&&u>=0&&y<=0)return l=u/(u-y),t.copy(n).addScaledVector(Qr,l);let c=h*y-x*p;if(c<=0&&p-h>=0&&x-y>=0)return Cd.subVectors(r,s),l=(p-h)/(p-h+(x-y)),t.copy(s).addScaledVector(Cd,l);let f=1/(c+S+m);return o=S*f,l=m*f,t.copy(n).addScaledVector(jr,o).addScaledVector(Qr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ji):ji.fromBufferAttribute(r,o),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vl.copy(n.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Gl.subVectors(this.max,fa),eo.subVectors(e.a,fa),to.subVectors(e.b,fa),no.subVectors(e.c,fa),Ws.subVectors(to,eo),Xs.subVectors(no,to),xr.subVectors(eo,no);let t=[0,-Ws.z,Ws.y,0,-Xs.z,Xs.y,0,-xr.z,xr.y,Ws.z,0,-Ws.x,Xs.z,0,-Xs.x,xr.z,0,-xr.x,-Ws.y,Ws.x,0,-Xs.y,Xs.x,0,-xr.y,xr.x,0];return!Kh(t,eo,to,no,Gl)||(t=[1,0,0,0,1,0,0,0,1],!Kh(t,eo,to,no,Gl))?!1:(Wl.crossVectors(Ws,Xs),t=[Wl.x,Wl.y,Wl.z],Kh(t,eo,to,no,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Rs=[new k,new k,new k,new k,new k,new k,new k,new k],ji=new k,Vl=new pi,eo=new k,to=new k,no=new k,Ws=new k,Xs=new k,xr=new k,fa=new k,Gl=new k,Wl=new k,yr=new k;function Kh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){yr.fromArray(i,r);let l=s.x*Math.abs(yr.x)+s.y*Math.abs(yr.y)+s.z*Math.abs(yr.z),a=e.dot(yr),u=t.dot(yr),h=n.dot(yr);if(Math.max(-Math.max(a,u,h),Math.min(a,u,h))>l)return!1}return!0}var Tn=new k,Xl=new Le,ov=0,Mt=class extends ds{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ov++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ua(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=di(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),n=di(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),n=di(n,this.array),s=di(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),n=di(n,this.array),s=di(s,this.array),r=di(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ra=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ca=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},av=new pi,da=new k,$h=new k,mi=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):av.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);let t=da.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(da,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add($h)),this.expandByPoint(da.copy(e.center).sub($h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lv=0,Ui=new Qe,Jh=new An,io=new k,Si=new pi,pa=new pi,Fn=new k,mt=class i extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y1(e)?Ca:Ra)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,t,n){return Ui.makeTranslation(e,t,n),this.applyMatrix4(Ui),this}scale(e,t,n){return Ui.makeScale(e,t,n),this.applyMatrix4(Ui),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];pa.setFromBufferAttribute(l),this.morphTargetsRelative?(Fn.addVectors(Si.min,pa.min),Si.expandByPoint(Fn),Fn.addVectors(Si.max,pa.max),Si.expandByPoint(Fn)):(Si.expandByPoint(pa.min),Si.expandByPoint(pa.max))}Si.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Fn));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],a=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Fn.fromBufferAttribute(l,u),a&&(io.fromBufferAttribute(e,u),Fn.add(io)),s=Math.max(s,n.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],a=[];for(let _=0;_<n.count;_++)l[_]=new k,a[_]=new k;let u=new k,h=new k,p=new k,m=new Le,x=new Le,y=new Le,S=new k,c=new k;function f(_,E,w){u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),p.fromBufferAttribute(n,w),m.fromBufferAttribute(r,_),x.fromBufferAttribute(r,E),y.fromBufferAttribute(r,w),h.sub(u),p.sub(u),x.sub(m),y.sub(m);let A=1/(x.x*y.y-y.x*x.y);isFinite(A)&&(S.copy(h).multiplyScalar(y.y).addScaledVector(p,-x.y).multiplyScalar(A),c.copy(p).multiplyScalar(x.x).addScaledVector(h,-y.x).multiplyScalar(A),l[_].add(S),l[E].add(S),l[w].add(S),a[_].add(c),a[E].add(c),a[w].add(c))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let _=0,E=d.length;_<E;++_){let w=d[_],A=w.start,C=w.count;for(let I=A,R=A+C;I<R;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let v=new k,g=new k,b=new k,M=new k;function T(_){b.fromBufferAttribute(s,_),M.copy(b);let E=l[_];v.copy(E),v.sub(b.multiplyScalar(b.dot(E))).normalize(),g.crossVectors(M,E);let A=g.dot(a[_])<0?-1:1;o.setXYZW(_,v.x,v.y,v.z,A)}for(let _=0,E=d.length;_<E;++_){let w=d[_],A=w.start,C=w.count;for(let I=A,R=A+C;I<R;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);let s=new k,r=new k,o=new k,l=new k,a=new k,u=new k,h=new k,p=new k;if(e)for(let m=0,x=e.count;m<x;m+=3){let y=e.getX(m+0),S=e.getX(m+1),c=e.getX(m+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,c),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),l.fromBufferAttribute(n,y),a.fromBufferAttribute(n,S),u.fromBufferAttribute(n,c),l.add(h),a.add(h),u.add(h),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(c,u.x,u.y,u.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(l,a){let u=l.array,h=l.itemSize,p=l.normalized,m=new u.constructor(a.length*h),x=0,y=0;for(let S=0,c=a.length;S<c;S++){l.isInterleavedBufferAttribute?x=a[S]*l.data.stride+l.offset:x=a[S]*h;for(let f=0;f<h;f++)m[y++]=u[x++]}return new Mt(m,h,p)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let a=s[l],u=e(a,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let a=[],u=r[l];for(let h=0,p=u.length;h<p;h++){let m=u[h],x=e(m,n);a.push(x)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,a=o.length;l<a;l++){let u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let u in a)a[u]!==void 0&&(e[u]=a[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let a in n){let u=n[a];e.data.attributes[a]=u.toJSON(e.data)}let s={},r=!1;for(let a in this.morphAttributes){let u=this.morphAttributes[a],h=[];for(let p=0,m=u.length;p<m;p++){let x=u[p];h.push(x.toJSON(e.data))}h.length>0&&(s[a]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],p=r[u];for(let m=0,x=p.length;m<x;m++)h.push(p[m].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var jh=new k,cv=new k,uv=new pt,Qi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=jh.subVectors(n,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(jh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||uv.getNormalMatrix(e),s=this.coplanarPoint(jh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hv=0,ps=class extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=Ro,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sf,this.blendDst=Ef,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fc,this.stencilZFail=fc,this.stencilZPass=fc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let a=r[l];delete a.metadata,o.push(a)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Qi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Cs=new k,Qh=new k,ql=new k,Yl=new k,xo=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Cs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cs.copy(this.origin).addScaledVector(this.direction,t),Cs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qh.copy(e).add(t).multiplyScalar(.5),ql.copy(t).sub(e).normalize(),Yl.copy(this.origin).sub(Qh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ql),l=Yl.dot(this.direction),a=-Yl.dot(ql),u=Yl.lengthSq(),h=Math.abs(1-o*o),p,m,x,y;if(h>0)if(p=o*a-l,m=o*l-a,y=r*h,p>=0)if(m>=-y)if(m<=y){let S=1/h;p*=S,m*=S,x=p*(p+o*m+2*l)+m*(o*p+m+2*a)+u}else m=r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;else m=-r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;else m<=-y?(p=Math.max(0,-(-o*r+l)),m=p>0?-r:Math.min(Math.max(-r,-a),r),x=-p*p+m*(m+2*a)+u):m<=y?(p=0,m=Math.min(Math.max(-r,-a),r),x=m*(m+2*a)+u):(p=Math.max(0,-(o*r+l)),m=p>0?r:Math.min(Math.max(-r,-a),r),x=-p*p+m*(m+2*a)+u);else m=o>0?-r:r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Qh).addScaledVector(ql,m),x}intersectSphere(e,t){if(e.radius<0)return null;Cs.subVectors(e.center,this.origin);let n=Cs.dot(this.direction),s=Cs.dot(Cs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,a,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),h>=0?(r=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(l=(e.min.z-m.z)*p,a=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,a=(e.min.z-m.z)*p),n>a||l>s)||((l>n||n!==n)&&(n=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Cs)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,a=l.x,u=l.y,h=l.z,p=e.x-o.x,m=e.y-o.y,x=e.z-o.z,y=t.x-o.x,S=t.y-o.y,c=t.z-o.z,f=n.x-o.x,d=n.y-o.y,v=n.z-o.z,g=Math.abs(a),b=Math.abs(u),M=Math.abs(h),T,_,E,w,A,C,I,R,L,D,O,H;if(g>=b&&g>=M?(E=a,C=p,L=y,H=f,a>=0?(T=u,_=h,w=m,A=x,I=S,R=c,D=d,O=v):(T=h,_=u,w=x,A=m,I=c,R=S,D=v,O=d)):b>=M?(E=u,C=m,L=S,H=d,u>=0?(T=h,_=a,w=x,A=p,I=c,R=y,D=v,O=f):(T=a,_=h,w=p,A=x,I=y,R=c,D=f,O=v)):(E=h,C=x,L=c,H=v,h>=0?(T=a,_=u,w=p,A=m,I=y,R=S,D=f,O=d):(T=u,_=a,w=m,A=p,I=S,R=y,D=d,O=f)),E===0)return null;let B=T/E,V=_/E,z=1/E,q=w-B*C,ee=A-V*C,Ee=I-B*L,we=R-V*L,Me=D-B*H,W=O-V*H,J=Me*we-W*Ee,ve=q*W-ee*Me,Pe=Ee*ee-we*q;if(s){if(J<0||ve<0||Pe<0)return null}else if((J<0||ve<0||Pe<0)&&(J>0||ve>0||Pe>0))return null;let ie=J+ve+Pe;if(ie===0)return null;let xe=z*(J*C+ve*L+Pe*H);return(ie>0?xe<0:xe>0)?null:this.at(xe/ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pd=new Qe,_r=new xo,Zl=new mi,Id=new k,Kl=new k,$l=new k,Jl=new k,ef=new k,jl=new k,Ld=new k,Ql=new k,ct=class extends An{constructor(e=new mt,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){jl.set(0,0,0);for(let a=0,u=r.length;a<u;a++){let h=l[a],p=r[a];h!==0&&(ef.fromBufferAttribute(p,e),o?jl.addScaledVector(ef,h):jl.addScaledVector(ef.sub(t),h))}t.add(jl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(r),_r.copy(e.ray).recast(e.near),!(Zl.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Zl,Id)===null||_r.origin.distanceToSquared(Id)>(e.far-e.near)**2))&&(Pd.copy(r).invert(),_r.copy(e.ray).applyMatrix4(Pd),!(n.boundingBox!==null&&_r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_r)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,m=r.groups,x=r.drawRange;if(l!==null)if(Array.isArray(o))for(let y=0,S=m.length;y<S;y++){let c=m[y],f=o[c.materialIndex],d=Math.max(c.start,x.start),v=Math.min(l.count,Math.min(c.start+c.count,x.start+x.count));for(let g=d,b=v;g<b;g+=3){let M=l.getX(g),T=l.getX(g+1),_=l.getX(g+2);s=ec(this,f,e,n,u,h,p,M,T,_),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),S=Math.min(l.count,x.start+x.count);for(let c=y,f=S;c<f;c+=3){let d=l.getX(c),v=l.getX(c+1),g=l.getX(c+2);s=ec(this,o,e,n,u,h,p,d,v,g),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(o))for(let y=0,S=m.length;y<S;y++){let c=m[y],f=o[c.materialIndex],d=Math.max(c.start,x.start),v=Math.min(a.count,Math.min(c.start+c.count,x.start+x.count));for(let g=d,b=v;g<b;g+=3){let M=g,T=g+1,_=g+2;s=ec(this,f,e,n,u,h,p,M,T,_),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),S=Math.min(a.count,x.start+x.count);for(let c=y,f=S;c<f;c+=3){let d=c,v=c+1,g=c+2;s=ec(this,o,e,n,u,h,p,d,v,g),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}}};function fv(i,e,t,n,s,r,o,l){let a;if(e.side===Gn?a=n.intersectTriangle(o,r,s,!0,l):a=n.intersectTriangle(s,r,o,e.side===gs,l),a===null)return null;Ql.copy(l),Ql.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Ql);return u<t.near||u>t.far?null:{distance:u,point:Ql.clone(),object:i}}function ec(i,e,t,n,s,r,o,l,a,u){i.getVertexPosition(l,Kl),i.getVertexPosition(a,$l),i.getVertexPosition(u,Jl);let h=fv(i,e,t,n,Kl,$l,Jl,Ld);if(h){let p=new k;Ys.getBarycoord(Ld,Kl,$l,Jl,p),s&&(h.uv=Ys.getInterpolatedAttribute(s,l,a,u,p,new Le)),r&&(h.uv1=Ys.getInterpolatedAttribute(r,l,a,u,p,new Le)),o&&(h.normal=Ys.getInterpolatedAttribute(o,l,a,u,p,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a:l,b:a,c:u,normal:new k,materialIndex:0};Ys.getNormal(Kl,$l,Jl,m.normal),h.face=m,h.barycoord=p}return h}var ts=class extends Zn{constructor(e=null,t=1,n=1,s,r,o,l,a,u=wn,h=wn,p,m){super(null,o,l,a,u,h,s,r,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},so=new Qe,Dd=new Qe,tc=[],Nd=new pi,dv=new Qe,ma=new ct,ga=new mi,ns=class extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,so),Nd.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(Nd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,so),ga.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ma.geometry=this.geometry,ma.material=this.material,ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(n),e.ray.intersectsSphere(ga)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,so),Dd.multiplyMatrices(n,so),ma.matrixWorld=Dd,ma.raycast(e,tc);for(let o=0,l=tc.length;o<l;o++){let a=tc[o];a.instanceId=r,a.object=this,t.push(a)}tc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ts(new Float32Array(s*this.count),s,this.count,nr,Bi));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let l=this.geometry.morphTargetsRelative?1:1-o,a=s*e;return r[a]=l,r.set(n,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},br=new mi,pv=new Le(.5,.5),nc=new k,yo=class{constructor(e=new Qi,t=new Qi,n=new Qi,s=new Qi,r=new Qi,o=new Qi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=es,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],a=r[2],u=r[3],h=r[4],p=r[5],m=r[6],x=r[7],y=r[8],S=r[9],c=r[10],f=r[11],d=r[12],v=r[13],g=r[14],b=r[15];if(s[0].setComponents(u-o,x-h,f-y,b-d).normalize(),s[1].setComponents(u+o,x+h,f+y,b+d).normalize(),s[2].setComponents(u+l,x+p,f+S,b+v).normalize(),s[3].setComponents(u-l,x-p,f-S,b-v).normalize(),n)s[4].setComponents(a,m,c,g).normalize(),s[5].setComponents(u-a,x-m,f-c,b-g).normalize();else if(s[4].setComponents(u-a,x-m,f-c,b-g).normalize(),t===es)s[5].setComponents(u+a,x+m,f+c,b+g).normalize();else if(t===fo)s[5].setComponents(a,m,c,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);let t=pv.distanceTo(e.center);return br.radius=.7071067811865476+t,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(nc.x=s.normal.x>0?e.max.x:e.min.x,nc.y=s.normal.y>0?e.max.y:e.min.y,nc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(nc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var wc=class extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ac=new k,Rc=new k,Ud=new Qe,va=new xo,ic=new mi,tf=new k,Fd=new k,Pa=class extends An{constructor(e=new mt,t=new wc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ac.fromBufferAttribute(t,s-1),Rc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ac.distanceTo(Rc);e.setAttribute("lineDistance",new Je(n,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(s),ic.radius+=r,e.ray.intersectsSphere(ic)===!1)return;Ud.copy(s).invert(),va.copy(e.ray).applyMatrix4(Ud);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let x=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let S=x,c=y-1;S<c;S+=u){let f=h.getX(S),d=h.getX(S+1),v=sc(this,e,va,a,f,d,S);v&&t.push(v)}if(this.isLineLoop){let S=h.getX(y-1),c=h.getX(x),f=sc(this,e,va,a,S,c,y-1);f&&t.push(f)}}else{let x=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let S=x,c=y-1;S<c;S+=u){let f=sc(this,e,va,a,S,S+1,S);f&&t.push(f)}if(this.isLineLoop){let S=sc(this,e,va,a,y-1,x,y-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function sc(i,e,t,n,s,r,o){let l=i.geometry.attributes.position;if(Ac.fromBufferAttribute(l,s),Rc.fromBufferAttribute(l,r),t.distanceSqToSegment(Ac,Rc,tf,Fd)>n)return;tf.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(tf);if(!(u<e.near||u>e.far))return{distance:u,point:Fd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var _o=class extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bd=new Qe,ff=new xo,rc=new mi,oc=new k,Ia=class extends An{constructor(e=new mt,t=new _o){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(s),rc.radius+=r,e.ray.intersectsSphere(rc)===!1)return;Bd.copy(s).invert(),ff.copy(e.ray).applyMatrix4(Bd);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=n.index,p=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let y=m,S=x;y<S;y++){let c=u.getX(y);oc.fromBufferAttribute(p,c),Od(oc,c,a,s,e,t,this)}}else{let m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let y=m,S=x;y<S;y++)oc.fromBufferAttribute(p,y),Od(oc,y,a,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Od(i,e,t,n,s,r,o){let l=ff.distanceSqToPoint(i);if(l<t){let a=new k;ff.closestPointToPoint(i,a),a.applyMatrix4(n);let u=s.ray.origin.distanceTo(a);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var La=class extends Zn{constructor(e=[],t=er,n,s,r,o,l,a,u,h){super(e,t,n,s,r,o,l,a,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ii=class extends Zn{constructor(e,t,n,s,r,o,l,a,u){super(e,t,n,s,r,o,l,a,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zs=class extends Zn{constructor(e,t,n=rs,s,r,o,l=wn,a=wn,u,h=fs,p=1){if(h!==fs&&h!==tr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:p};super(m,s,r,o,l,a,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new go(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Cc=class extends Zs{constructor(e,t=rs,n=er,s,r,o=wn,l=wn,a,u=fs){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,a,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Da=class extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qt=class i extends mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let a=[],u=[],h=[],p=[],m=0,x=0;y("z","y","x",-1,-1,n,t,e,o,r,0),y("z","y","x",1,-1,n,t,-e,o,r,1),y("x","z","y",1,1,e,n,t,s,o,2),y("x","z","y",1,-1,e,n,-t,s,o,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(a),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(p,2));function y(S,c,f,d,v,g,b,M,T,_,E){let w=g/T,A=b/_,C=g/2,I=b/2,R=M/2,L=T+1,D=_+1,O=0,H=0,B=new k;for(let V=0;V<D;V++){let z=V*A-I;for(let q=0;q<L;q++){let ee=q*w-C;B[S]=ee*d,B[c]=z*v,B[f]=R,u.push(B.x,B.y,B.z),B[S]=0,B[c]=0,B[f]=M>0?1:-1,h.push(B.x,B.y,B.z),p.push(q/T),p.push(1-V/_),O+=1}}for(let V=0;V<_;V++)for(let z=0;z<T;z++){let q=m+z+L*V,ee=m+z+L*(V+1),Ee=m+(z+1)+L*(V+1),we=m+(z+1)+L*V;a.push(q,ee,we),a.push(ee,Ee,we),H+=6}l.addGroup(x,H,E),x+=H,m+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Er=class i extends mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],a=[],u=new k,h=new Le;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){let x=n+p/t*s;u.x=e*Math.cos(x),u.y=e*Math.sin(x),o.push(u.x,u.y,u.z),l.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,a.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Fi=class i extends mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],m=[],x=[],y=0,S=[],c=n/2,f=0;d(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Je(p,3)),this.setAttribute("normal",new Je(m,3)),this.setAttribute("uv",new Je(x,2));function d(){let g=new k,b=new k,M=0,T=(t-e)/n;for(let _=0;_<=r;_++){let E=[],w=_/r,A=w*(t-e)+e;for(let C=0;C<=s;C++){let I=C/s,R=I*a+l,L=Math.sin(R),D=Math.cos(R);b.x=A*L,b.y=-w*n+c,b.z=A*D,p.push(b.x,b.y,b.z),g.set(L,T,D).normalize(),m.push(g.x,g.y,g.z),x.push(I,1-w),E.push(y++)}S.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let w=S[E][_],A=S[E+1][_],C=S[E+1][_+1],I=S[E][_+1];(e>0||E!==0)&&(h.push(w,A,I),M+=3),(t>0||E!==r-1)&&(h.push(A,C,I),M+=3)}u.addGroup(f,M,0),f+=M}function v(g){let b=y,M=new Le,T=new k,_=0,E=g===!0?e:t,w=g===!0?1:-1;for(let C=1;C<=s;C++)p.push(0,c*w,0),m.push(0,w,0),x.push(.5,.5),y++;let A=y;for(let C=0;C<=s;C++){let R=C/s*a+l,L=Math.cos(R),D=Math.sin(R);T.x=E*D,T.y=c*w,T.z=E*L,p.push(T.x,T.y,T.z),m.push(0,w,0),M.x=L*.5+.5,M.y=D*.5*w+.5,x.push(M.x,M.y),y++}for(let C=0;C<s;C++){let I=b+C,R=A+C;g===!0?h.push(R,R+1,I):h.push(R+1,R,I),_+=3}u.addGroup(f,_,g===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Pc=class i extends mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),u(n),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(d){let v=new k,g=new k,b=new k;for(let M=0;M<t.length;M+=3)x(t[M+0],v),x(t[M+1],g),x(t[M+2],b),a(v,g,b,d)}function a(d,v,g,b){let M=b+1,T=[];for(let _=0;_<=M;_++){T[_]=[];let E=d.clone().lerp(g,_/M),w=v.clone().lerp(g,_/M),A=M-_;for(let C=0;C<=A;C++)C===0&&_===M?T[_][C]=E:T[_][C]=E.clone().lerp(w,C/A)}for(let _=0;_<M;_++)for(let E=0;E<2*(M-_)-1;E++){let w=Math.floor(E/2);E%2===0?(m(T[_][w+1]),m(T[_+1][w]),m(T[_][w])):(m(T[_][w+1]),m(T[_+1][w+1]),m(T[_+1][w]))}}function u(d){let v=new k;for(let g=0;g<r.length;g+=3)v.x=r[g+0],v.y=r[g+1],v.z=r[g+2],v.normalize().multiplyScalar(d),r[g+0]=v.x,r[g+1]=v.y,r[g+2]=v.z}function h(){let d=new k;for(let v=0;v<r.length;v+=3){d.x=r[v+0],d.y=r[v+1],d.z=r[v+2];let g=c(d)/2/Math.PI+.5,b=f(d)/Math.PI+.5;o.push(g,1-b)}y(),p()}function p(){for(let d=0;d<o.length;d+=6){let v=o[d+0],g=o[d+2],b=o[d+4],M=Math.max(v,g,b),T=Math.min(v,g,b);M>.9&&T<.1&&(v<.2&&(o[d+0]+=1),g<.2&&(o[d+2]+=1),b<.2&&(o[d+4]+=1))}}function m(d){r.push(d.x,d.y,d.z)}function x(d,v){let g=d*3;v.x=e[g+0],v.y=e[g+1],v.z=e[g+2]}function y(){let d=new k,v=new k,g=new k,b=new k,M=new Le,T=new Le,_=new Le;for(let E=0,w=0;E<r.length;E+=9,w+=6){d.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),g.set(r[E+6],r[E+7],r[E+8]),M.set(o[w+0],o[w+1]),T.set(o[w+2],o[w+3]),_.set(o[w+4],o[w+5]),b.copy(d).add(v).add(g).divideScalar(3);let A=c(b);S(M,w+0,d,A),S(T,w+2,v,A),S(_,w+4,g,A)}}function S(d,v,g,b){b<0&&d.x===1&&(o[v]=d.x-1),g.x===0&&g.z===0&&(o[v]=b/2/Math.PI+.5)}function c(d){return Math.atan2(d.z,-d.x)}function f(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,a=r-1,u;for(;l<=a;)if(s=Math.floor(l+(a-l)/2),u=n[s]-o,u<0)l=s+1;else if(u>0)a=s-1;else{a=s;break}if(s=a,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,x=(o-h)/m;return(s+x)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),a=t||(o.isVector2?new Le:new k);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,s=[],r=[],o=[],l=new k,a=new Qe;for(let x=0;x<=e;x++){let y=x/e;s[x]=this.getTangentAt(y,new k)}r[0]=new k,o[0]=new k;let u=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),m<=u&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let x=1;x<=e;x++){if(r[x]=r[x-1].clone(),o[x]=o[x-1].clone(),l.crossVectors(s[x-1],s[x]),l.length()>Number.EPSILON){l.normalize();let y=Math.acos(wt(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(a.makeRotationAxis(l,y))}o[x].crossVectors(s[x],r[x])}if(t===!0){let x=Math.acos(wt(r[0].dot(r[e]),-1,1));x/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(x=-x);for(let y=1;y<=e;y++)r[y].applyMatrix4(a.makeRotationAxis(s[y],x*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},bo=class extends Ei{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new Le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=a-this.aX,x=u-this.aY;a=m*h-x*p+this.aX,u=m*p+x*h+this.aY}return n.set(a,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ic=class extends bo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hf(){let i=0,e=0,t=0,n=0;function s(r,o,l,a){i=r,e=l,t=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,u){s(o,l,u*(l-r),u*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,u,h,p){let m=(o-r)/u-(l-r)/(u+h)+(l-o)/h,x=(l-o)/h-(a-o)/(h+p)+(a-l)/p;m*=h,x*=h,s(o,l,m,x)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var zd=new k,kd=new k,nf=new Hf,sf=new Hf,rf=new Hf,Lc=class extends Ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let u,h;this.closed||l>0?u=s[(l-1)%r]:(kd.subVectors(s[0],s[1]).add(s[0]),u=kd);let p=s[l%r],m=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(zd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zd),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,y=Math.pow(u.distanceToSquared(p),x),S=Math.pow(p.distanceToSquared(m),x),c=Math.pow(m.distanceToSquared(h),x);S<1e-4&&(S=1),y<1e-4&&(y=S),c<1e-4&&(c=S),nf.initNonuniformCatmullRom(u.x,p.x,m.x,h.x,y,S,c),sf.initNonuniformCatmullRom(u.y,p.y,m.y,h.y,y,S,c),rf.initNonuniformCatmullRom(u.z,p.z,m.z,h.z,y,S,c)}else this.curveType==="catmullrom"&&(nf.initCatmullRom(u.x,p.x,m.x,h.x,this.tension),sf.initCatmullRom(u.y,p.y,m.y,h.y,this.tension),rf.initCatmullRom(u.z,p.z,m.z,h.z,this.tension));return n.set(nf.calc(a),sf.calc(a),rf.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Hd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,a=i*l;return(2*t-2*n+r+o)*a+(-3*t+3*n-2*r-o)*l+r*i+t}function mv(i,e){let t=1-i;return t*t*e}function gv(i,e){return 2*(1-i)*i*e}function vv(i,e){return i*i*e}function ya(i,e,t,n){return mv(i,e)+gv(i,t)+vv(i,n)}function xv(i,e){let t=1-i;return t*t*t*e}function yv(i,e){let t=1-i;return 3*t*t*i*e}function _v(i,e){return 3*(1-i)*i*i*e}function bv(i,e){return i*i*i*e}function _a(i,e,t,n,s){return xv(i,e)+yv(i,t)+_v(i,n)+bv(i,s)}var Na=class extends Ei{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(_a(e,s.x,r.x,o.x,l.x),_a(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dc=class extends Ei{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(_a(e,s.x,r.x,o.x,l.x),_a(e,s.y,r.y,o.y,l.y),_a(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ua=class extends Ei{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends Ei{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends Ei{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ya(e,s.x,r.x,o.x),ya(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uc=class extends Ei{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ya(e,s.x,r.x,o.x),ya(e,s.y,r.y,o.y),ya(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,a=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Hd(l,a.x,u.x,h.x,p.x),Hd(l,a.y,u.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Le().fromArray(s))}return this}},Vd=Object.freeze({__proto__:null,ArcCurve:Ic,CatmullRomCurve3:Lc,CubicBezierCurve:Na,CubicBezierCurve3:Dc,EllipseCurve:bo,LineCurve:Ua,LineCurve3:Nc,QuadraticBezierCurve:Fa,QuadraticBezierCurve3:Uc,SplineCurve:Ba}),Fc=class extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],a=l.getLength(),u=a===0?0:1-o/a;return l.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let u=0;u<a.length;u++){let h=a[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Vd[s.type]().fromJSON(s))}return this}},Oa=class extends Fc{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ua(this.currentPoint.clone(),new Le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Fa(this.currentPoint.clone(),new Le(e,t),new Le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new Na(this.currentPoint.clone(),new Le(e,t),new Le(n,s),new Le(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ba(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,a){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,r,o,l,a),this}absellipse(e,t,n,s,r,o,l,a){let u=new bo(e,t,n,s,r,o,l,a);if(this.curves.length>0){let p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);let h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mo=class extends Oa{constructor(e){super(e),this.uuid=Io(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Oa().fromJSON(s))}return this}};function Mv(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Op(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,a,u;if(n&&(r=Av(i,e,r,t)),i.length>80*t){l=i[0],a=i[1];let h=l,p=a;for(let m=t;m<s;m+=t){let x=i[m],y=i[m+1];x<l&&(l=x),y<a&&(a=y),x>h&&(h=x),y>p&&(p=y)}u=Math.max(h-l,p-a),u=u!==0?32767/u:0}return za(r,o,t,l,a,u,0),o}function Op(i,e,t,n,s){let r;if(s===Ov(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Gd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Gd(o/n|0,i[o],i[o+1],r);return r&&So(r,r.next)&&(Ha(r),r=r.next),r}function Tr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(So(t,t.next)||mn(t.prev,t,t.next)===0)){if(Ha(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function za(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Lv(i,n,s,r);let l=i;for(;i.prev!==i.next;){let a=i.prev,u=i.next;if(r?Ev(i,n,s,r):Sv(i)){e.push(a.i,i.i,u.i),Ha(i),i=u.next,l=u.next;continue}if(i=u,i===l){o?o===1?(i=Tv(Tr(i),e),za(i,e,t,n,s,r,2)):o===2&&wv(i,e,t,n,s,r):za(Tr(i),e,t,n,s,r,1);break}}}function Sv(i){let e=i.prev,t=i,n=i.next;if(mn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,a=t.y,u=n.y,h=Math.min(s,r,o),p=Math.min(l,a,u),m=Math.max(s,r,o),x=Math.max(l,a,u),y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=m&&y.y>=p&&y.y<=x&&xa(s,l,r,a,o,u,y.x,y.y)&&mn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Ev(i,e,t,n){let s=i.prev,r=i,o=i.next;if(mn(s,r,o)>=0)return!1;let l=s.x,a=r.x,u=o.x,h=s.y,p=r.y,m=o.y,x=Math.min(l,a,u),y=Math.min(h,p,m),S=Math.max(l,a,u),c=Math.max(h,p,m),f=df(x,y,e,t,n),d=df(S,c,e,t,n),v=i.prevZ,g=i.nextZ;for(;v&&v.z>=f&&g&&g.z<=d;){if(v.x>=x&&v.x<=S&&v.y>=y&&v.y<=c&&v!==s&&v!==o&&xa(l,h,a,p,u,m,v.x,v.y)&&mn(v.prev,v,v.next)>=0||(v=v.prevZ,g.x>=x&&g.x<=S&&g.y>=y&&g.y<=c&&g!==s&&g!==o&&xa(l,h,a,p,u,m,g.x,g.y)&&mn(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;v&&v.z>=f;){if(v.x>=x&&v.x<=S&&v.y>=y&&v.y<=c&&v!==s&&v!==o&&xa(l,h,a,p,u,m,v.x,v.y)&&mn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;g&&g.z<=d;){if(g.x>=x&&g.x<=S&&g.y>=y&&g.y<=c&&g!==s&&g!==o&&xa(l,h,a,p,u,m,g.x,g.y)&&mn(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Tv(i,e){let t=i;do{let n=t.prev,s=t.next.next;!So(n,s)&&kp(n,t,t.next,s)&&ka(n,s)&&ka(s,n)&&(e.push(n.i,t.i,s.i),Ha(t),Ha(t.next),t=i=s),t=t.next}while(t!==i);return Tr(t)}function wv(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Uv(o,l)){let a=Hp(o,l);o=Tr(o,o.next),a=Tr(a,a.next),za(o,e,t,n,s,r,0),za(a,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function Av(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,a=r<o-1?e[r+1]*n:i.length,u=Op(i,l,a,n,!1);u===u.next&&(u.steiner=!0),s.push(Nv(u))}s.sort(Rv);for(let r=0;r<s.length;r++)t=Cv(s[r],t);return t}function Rv(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Cv(i,e){let t=Pv(i,e);if(!t)return e;let n=Hp(t,i);return Tr(n,n.next),Tr(t,t.next)}function Pv(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(So(i,t))return t;do{if(So(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,a=o.x,u=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=a&&n!==t.x&&zp(s<u?n:r,s,a,u,s<u?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);ka(t,i)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&Iv(o,t)))&&(o=t,h=p)}t=t.next}while(t!==l);return o}function Iv(i,e){return mn(i.prev,i,e.prev)<0&&mn(e.next,i,i.next)<0}function Lv(i,e,t,n){let s=i;do s.z===0&&(s.z=df(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Dv(s)}function Dv(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let u=0;u<t&&(l++,o=o.nextZ,!!o);u++);let a=t;for(;l>0||a>0&&o;)l!==0&&(a===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,a--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function df(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Nv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function zp(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function xa(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&zp(i,e,t,n,s,r,o,l)}function Uv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Fv(i,e)&&(ka(i,e)&&ka(e,i)&&Bv(i,e)&&(mn(i.prev,i,e.prev)||mn(i,e.prev,e))||So(i,e)&&mn(i.prev,i,i.next)>0&&mn(e.prev,e,e.next)>0)}function mn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function So(i,e){return i.x===e.x&&i.y===e.y}function kp(i,e,t,n){let s=lc(mn(i,e,t)),r=lc(mn(i,e,n)),o=lc(mn(t,n,i)),l=lc(mn(t,n,e));return!!(s!==r&&o!==l||s===0&&ac(i,t,e)||r===0&&ac(i,n,e)||o===0&&ac(t,i,n)||l===0&&ac(t,e,n))}function ac(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function lc(i){return i>0?1:i<0?-1:0}function Fv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&kp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ka(i,e){return mn(i.prev,i,i.next)<0?mn(i,e,i.next)>=0&&mn(i,i.prev,e)>=0:mn(i,e,i.prev)<0||mn(i,i.next,e)<0}function Bv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Hp(i,e){let t=pf(i.i,i.x,i.y),n=pf(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Gd(i,e,t,n){let s=pf(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ha(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pf(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ov(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var mf=class{static triangulate(e,t,n=2){return Mv(e,t,n)}},uo=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Wd(e),Xd(n,e);let o=e.length;t.forEach(Wd);for(let a=0;a<t.length;a++)s.push(o),o+=t[a].length,Xd(n,t[a]);let l=mf.triangulate(n,s);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}};function Wd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Xd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Va=class i extends Pc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var rn=class i extends mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),a=Math.floor(s),u=l+1,h=a+1,p=e/l,m=t/a,x=[],y=[],S=[],c=[];for(let f=0;f<h;f++){let d=f*m-o;for(let v=0;v<u;v++){let g=v*p-r;y.push(g,-d,0),S.push(0,0,1),c.push(v/l),c.push(1-f/a)}}for(let f=0;f<a;f++)for(let d=0;d<l;d++){let v=d+u*f,g=d+u*(f+1),b=d+1+u*(f+1),M=d+1+u*f;x.push(v,g,M),x.push(g,b,M)}this.setIndex(x),this.setAttribute("position",new Je(y,3)),this.setAttribute("normal",new Je(S,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ga=class i extends mt{constructor(e=new Mo([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],l=0,a=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(l,a,h),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(o,2));function u(h){let p=s.length/3,m=h.extractPoints(t),x=m.shape,y=m.holes;uo.isClockWise(x)===!1&&(x=x.reverse());for(let c=0,f=y.length;c<f;c++){let d=y[c];uo.isClockWise(d)===!0&&(y[c]=d.reverse())}let S=uo.triangulateShape(x,y);for(let c=0,f=y.length;c<f;c++){let d=y[c];x=x.concat(d)}for(let c=0,f=x.length;c<f;c++){let d=x[c];s.push(d.x,d.y,0),r.push(0,0,1),o.push(d.x,d.y)}for(let c=0,f=S.length;c<f;c++){let d=S[c],v=d[0]+p,g=d[1]+p,b=d[2]+p;n.push(v,g,b),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return zv(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function zv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Wa=class i extends mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let a=Math.min(o+l,Math.PI),u=0,h=[],p=new k,m=new k,x=[],y=[],S=[],c=[];for(let f=0;f<=n;f++){let d=[],v=f/n,g=o+v*l,b=e*Math.cos(g),M=Math.sqrt(e*e-b*b),T=0;f===0&&o===0?T=.5/t:f===n&&a===Math.PI&&(T=-.5/t);for(let _=0;_<=t;_++){let E=_/t,w=s+E*r;p.x=-M*Math.cos(w),p.y=b,p.z=M*Math.sin(w),y.push(p.x,p.y,p.z),m.copy(p).normalize(),S.push(m.x,m.y,m.z),c.push(E+T,1-v),d.push(u++)}h.push(d)}for(let f=0;f<n;f++)for(let d=0;d<t;d++){let v=h[f][d+1],g=h[f][d],b=h[f+1][d],M=h[f+1][d+1];(f!==0||o>0)&&x.push(v,g,M),(f!==n-1||a<Math.PI)&&x.push(g,b,M)}this.setIndex(x),this.setAttribute("position",new Je(y,3)),this.setAttribute("normal",new Je(S,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xa=class i extends mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let a=[],u=[],h=[],p=[],m=new k,x=new k,y=new k;for(let S=0;S<=n;S++){let c=o+S/n*l;for(let f=0;f<=s;f++){let d=f/s*r;x.x=(e+t*Math.cos(c))*Math.cos(d),x.y=(e+t*Math.cos(c))*Math.sin(d),x.z=t*Math.sin(c),u.push(x.x,x.y,x.z),m.x=e*Math.cos(d),m.y=e*Math.sin(d),y.subVectors(x,m).normalize(),h.push(y.x,y.y,y.z),p.push(f/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let c=1;c<=s;c++){let f=(s+1)*S+c-1,d=(s+1)*(S-1)+c-1,v=(s+1)*(S-1)+c,g=(s+1)*S+c;a.push(f,d,g),a.push(d,v,g)}this.setIndex(a),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Cr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(qd(s))s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(qd(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function jn(i){let e={};for(let t=0;t<i.length;t++){let n=Cr(i[t]);for(let s in n)e[s]=n[s]}return e}function qd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kv(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}var Pr={clone:Cr,merge:jn},Hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ut=class extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hv,this.fragmentShader=Vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=kv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new _e().setHex(s.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Bc=class extends ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var gn=class extends ps{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bu,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ks=class extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oc=class extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ro(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function of(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $s=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zc=class extends $s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cf,endingEnd:cf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],a=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case uf:r=e,l=2*t-n;break;case hf:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(a===void 0)switch(this.getSettings_().endingEnd){case uf:o=e,a=2*n-t;break;case hf:o=1,a=n+s[1]-s[0];break;default:o=e-1,a=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(a-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,x=this._weightNext,y=(n-t)/(s-t),S=y*y,c=S*y,f=-m*c+2*m*S-m*y,d=(1+m)*c+(-1.5-2*m)*S+(-.5+m)*y+1,v=(-1-x)*c+(1.5+x)*S+.5*y,g=x*c-x*S;for(let b=0;b!==l;++b)r[b]=f*o[h+b]+d*o[u+b]+v*o[a+b]+g*o[p+b];return r}},kc=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=(n-t)/(s-t),p=1-h;for(let m=0;m!==l;++m)r[m]=o[u+m]*p+o[a+m]*h;return r}},Hc=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vc=class extends $s{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=this.inTangents,p=this.outTangents;if(!h||!p){let y=(n-t)/(s-t),S=1-y;for(let c=0;c!==l;++c)r[c]=o[u+c]*S+o[a+c]*y;return r}let m=l*2,x=e-1;for(let y=0;y!==l;++y){let S=o[u+y],c=o[a+y],f=x*m+y*2,d=p[f],v=p[f+1],g=e*m+y*2,b=h[g],M=h[g+1],T=Wv(n,t,d,b,s);r[y]=Vp(T,S,v,M,c)}return r}};function Vp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Gv(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Wv(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=Vp(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let a=Gv(r,e,t,n,s);if(Math.abs(a)<1e-10)break;r=Math.max(0,Math.min(1,r-l/a))}return r}var Ti=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),of(e.settings)&&(n.settings={inTangents:ro(e.settings.inTangents,Array),outTangents:ro(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case Mc:t=this.InterpolantFactoryMethodLinear;break;case hc:t=this.InterpolantFactoryMethodSmooth;break;case lf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return lt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return Mc;case this.InterpolantFactoryMethodSmooth:return hc;case this.InterpolantFactoryMethodBezier:return lf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;of(this.settings)&&(Yd(this.settings.inTangents,e),Yd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let a=n[l];if(typeof a=="number"&&isNaN(a)){ft("KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(o!==null&&o>a){ft("KeyframeTrack: Out of order keys.",this,l,a,o),e=!1;break}o=a}if(s!==void 0&&Z1(s))for(let l=0,a=s.length;l!==a;++l){let u=s[l];if(isNaN(u)){ft("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hc,r=e.length-1,o=1;for(let l=1;l<r;++l){let a=!1,u=e[l],h=e[l+1];if(u!==h&&(l!==1||u!==e[0]))if(s)a=!0;else{let p=l*n,m=p-n,x=p+n;for(let y=0;y!==n;++y){let S=t[p+y];if(S!==t[m+y]||S!==t[x+y]){a=!0;break}}}if(a){if(l!==o){e[o]=e[l];let p=l*n,m=o*n;for(let x=0;x!==n;++x)t[m+x]=t[p+x]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,a=o*n,u=0;u!==n;++u)t[a+u]=t[l+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,of(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Mc;var Js=class extends Ti{constructor(e,t,n){super(e,t,n)}};Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=ba;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}};Gc.prototype.ValueTypeName="color";var Wc=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}};Wc.prototype.ValueTypeName="number";var Xc=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(n-t)/(s-t),u=e*l;for(let h=u+l;u!==h;u+=4)vn.slerpFlat(r,0,o,u-l,o,u,a);return r}},qa=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}};qa.prototype.ValueTypeName="quaternion";qa.prototype.InterpolantFactoryMethodSmooth=void 0;var js=class extends Ti{constructor(e,t,n){super(e,t,n)}};js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=ba;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}};qc.prototype.ValueTypeName="vector";var dc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Zd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Zd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Zd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Yc=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,a,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=u.length;p<m;p+=2){let x=u[p],y=u[p+1];if(x.global&&(x.lastIndex=0),x.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gp=new Yc,Eo=class{constructor(e){this.manager=e!==void 0?e:Gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var oo=new WeakMap,Zc=class extends Eo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=dc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let p=oo.get(o);p===void 0&&(p=[],oo.set(o,p)),p.push({onLoad:t,onError:s})}return o}let l=po("img");function a(){h(),t&&t(this);let p=oo.get(this)||[];for(let m=0;m<p.length;m++){let x=p[m];x.onLoad&&x.onLoad(this)}oo.delete(this),r.manager.itemEnd(e)}function u(p){h(),s&&s(p),dc.remove(`image:${e}`);let m=oo.get(this)||[];for(let x=0;x<m.length;x++){let y=m[x];y.onError&&y.onError(p)}oo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",a,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),dc.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}};var Ya=class extends Eo{constructor(e){super(e)}load(e,t,n,s){let r=new Zn,o=new Zc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},To=class extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Za=class extends To{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},af=new Qe,Kd=new k,$d=new k,Ka=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),$d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($d),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){af.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(af,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,a=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===fo||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},cc=new k,uc=new vn,us=new k,Ls=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=es,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cc,uc,us),us.x===1&&us.y===1&&us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,uc,us.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cc,uc,us),us.x===1&&us.y===1&&us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,uc,us.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qs=new k,Jd=new Le,jd=new Le,Vn=class extends Ls{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Nh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(Nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qs.x,qs.y).multiplyScalar(-e/qs.z),qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qs.x,qs.y).multiplyScalar(-e/qs.z)}getViewSize(e,t){return this.getViewBounds(e,Jd,jd),t.subVectors(jd,Jd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Nh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let a=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/a,t-=o.offsetY*n/u,s*=o.width/a,n*=o.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gf=class extends Ka{constructor(){super(new Vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ea*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},$a=class extends To{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var Qs=class extends Ls{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,a=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vf=class extends Ka{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wo=class extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new vf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ms=class extends mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ao=-90,lo=1,Kc=class extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vn(ao,lo,e,t);s.layers=this.layers,this.add(s);let r=new Vn(ao,lo,e,t);r.layers=this.layers,this.add(r);let o=new Vn(ao,lo,e,t);o.layers=this.layers,this.add(o);let l=new Vn(ao,lo,e,t);l.layers=this.layers,this.add(l);let a=new Vn(ao,lo,e,t);a.layers=this.layers,this.add(a);let u=new Vn(ao,lo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,a]=t;for(let u of t)this.remove(u);if(e===es)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,a,u,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let c=!1;e.isWebGLRenderer===!0?c=e.state.buffers.depth.getReversed():c=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,4,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,m,x),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},$c=class extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ja=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Xv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Xv(){this._document.hidden===!1&&this.reset()}var Gf="\\[\\]\\.:\\/",qv=new RegExp("["+Gf+"]","g"),Wf="[^"+Gf+"]",Yv="[^"+Gf.replace("\\.","")+"]",Zv=/((?:WC+[\/:])*)/.source.replace("WC",Wf),Kv=/(WCOD+)?/.source.replace("WCOD",Yv),$v=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wf),Jv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wf),jv=new RegExp("^"+Zv+Kv+$v+Jv+"$"),Qv=["material","materials","bones","map"],xf=class{constructor(e,t,n){let s=n||sn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},sn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qv,"")}static parseTrackName(e){let t=jv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let a=n(l.children);if(a)return a}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=xf;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qS=new Float32Array(1);var $f=class $f{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};$f.prototype.isMatrix2=!0;var yf=$f;function Xf(i,e,t,n){let s=ex(n);switch(t){case Bf:return i*e;case nr:return i*e/s.components*s.byteLength;case su:return i*e/s.components*s.byteLength;case ir:return i*e*2/s.components*s.byteLength;case ru:return i*e*2/s.components*s.byteLength;case Of:return i*e*3/s.components*s.byteLength;case Jn:return i*e*4/s.components*s.byteLength;case ou:return i*e*4/s.components*s.byteLength;case tl:case nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case il:case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lu:case uu:return Math.max(i,16)*Math.max(e,8)/4;case au:case cu:return Math.max(i,8)*Math.max(e,8)/2;case hu:case fu:case pu:case mu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case du:case rl:case gu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _u:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Su:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Au:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ru:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Iu:case Lu:case Du:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nu:case Uu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ol:case Fu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ex(i){switch(i){case $n:case Df:return{byteLength:1,components:1};case Co:case Nf:case Rn:return{byteLength:2,components:1};case nu:case iu:return{byteLength:2,components:4};case rs:case tu:case Bi:return{byteLength:4,components:1};case Uf:case Ff:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function hm(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ax(i){let e=new WeakMap;function t(l,a){let u=l.array,h=l.usage,p=u.byteLength,m=i.createBuffer();i.bindBuffer(a,m),i.bufferData(a,u,h),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)x=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,a,u){let h=a.array,p=a.updateRanges;if(i.bindBuffer(u,l),p.length===0)i.bufferSubData(u,0,h);else{p.sort((x,y)=>x.start-y.start);let m=0;for(let x=1;x<p.length;x++){let y=p[m],S=p[x];S.start<=y.start+y.count+1?y.count=Math.max(y.count,S.start+S.count-y.start):(++m,p[m]=S)}p.length=m+1;for(let x=0,y=p.length;x<y;x++){let S=p[x];i.bufferSubData(u,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let a=e.get(l);a&&(i.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,a));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,a),u.version=l.version}}return{get:s,remove:r,update:o}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cx=`#ifdef USE_ALPHAHASH
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
#endif`,ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
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
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
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
#endif`,vx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bx=`#ifdef USE_IRIDESCENCE
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
#endif`,Mx=`#ifdef USE_BUMPMAP
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ix=`#define PI 3.141592653589793
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
} // validated`,Lx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dx=`vec3 transformedNormal = objectNormal;
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
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kx=`#ifdef USE_GRADIENTMAP
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
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,e2=`#ifdef USE_ENVMAP
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
#endif`,t2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r2=`PhysicalMaterial material;
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
#endif`,o2=`uniform sampler2D dfgLUT;
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
}`,a2=`
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
#endif`,l2=`#if defined( RE_IndirectDiffuse )
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
#endif`,c2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,h2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x2=`#if defined( USE_POINTS_UV )
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
#endif`,y2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E2=`#ifdef USE_MORPHTARGETS
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
#endif`,T2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I2=`#ifdef USE_NORMALMAP
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
#endif`,L2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y2=`float getShadowMask() {
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
}`,Z2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K2=`#ifdef USE_SKINNING
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
#endif`,$2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J2=`#ifdef USE_SKINNING
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
#endif`,j2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ty=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ny=`#ifdef USE_TRANSMISSION
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
#endif`,iy=`#ifdef USE_TRANSMISSION
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cy=`uniform sampler2D t2D;
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`#include <common>
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
}`,my=`#if DEPTH_PACKING == 3200
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
}`,gy=`#define DISTANCE
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
}`,vy=`#define DISTANCE
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`uniform float scale;
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
}`,by=`uniform vec3 diffuse;
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
}`,My=`#include <common>
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
}`,Sy=`uniform vec3 diffuse;
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
}`,Ey=`#define LAMBERT
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
}`,Ty=`#define LAMBERT
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
}`,wy=`#define MATCAP
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
}`,Ay=`#define MATCAP
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
}`,Ry=`#define NORMAL
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
}`,Cy=`#define NORMAL
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
}`,Py=`#define PHONG
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
}`,Iy=`#define PHONG
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
}`,Ly=`#define STANDARD
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
}`,Dy=`#define STANDARD
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
}`,Ny=`#define TOON
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
}`,Uy=`#define TOON
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
}`,Fy=`uniform float size;
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
}`,By=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,zy=`uniform vec3 color;
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
}`,ky=`uniform float rotation;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:lx,alphahash_pars_fragment:cx,alphamap_fragment:ux,alphamap_pars_fragment:hx,alphatest_fragment:fx,alphatest_pars_fragment:dx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:vx,begin_vertex:xx,beginnormal_vertex:yx,bsdfs:_x,iridescence_fragment:bx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:Ex,clipping_planes_pars_vertex:Tx,clipping_planes_vertex:wx,color_fragment:Ax,color_pars_fragment:Rx,color_pars_vertex:Cx,color_vertex:Px,common:Ix,cube_uv_reflection_fragment:Lx,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Nx,displacementmap_vertex:Ux,emissivemap_fragment:Fx,emissivemap_pars_fragment:Bx,colorspace_fragment:Ox,colorspace_pars_fragment:zx,envmap_fragment:kx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Vx,envmap_pars_vertex:Gx,envmap_physical_pars_fragment:e2,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:qx,fog_fragment:Yx,fog_pars_fragment:Zx,gradientmap_pars_fragment:Kx,lightmap_pars_fragment:$x,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:jx,lights_pars_begin:Qx,lights_toon_fragment:t2,lights_toon_pars_fragment:n2,lights_phong_fragment:i2,lights_phong_pars_fragment:s2,lights_physical_fragment:r2,lights_physical_pars_fragment:o2,lights_fragment_begin:a2,lights_fragment_maps:l2,lights_fragment_end:c2,lightprobes_pars_fragment:u2,logdepthbuf_fragment:h2,logdepthbuf_pars_fragment:f2,logdepthbuf_pars_vertex:d2,logdepthbuf_vertex:p2,map_fragment:m2,map_pars_fragment:g2,map_particle_fragment:v2,map_particle_pars_fragment:x2,metalnessmap_fragment:y2,metalnessmap_pars_fragment:_2,morphinstance_vertex:b2,morphcolor_vertex:M2,morphnormal_vertex:S2,morphtarget_pars_vertex:E2,morphtarget_vertex:T2,normal_fragment_begin:w2,normal_fragment_maps:A2,normal_pars_fragment:R2,normal_pars_vertex:C2,normal_vertex:P2,normalmap_pars_fragment:I2,clearcoat_normal_fragment_begin:L2,clearcoat_normal_fragment_maps:D2,clearcoat_pars_fragment:N2,iridescence_pars_fragment:U2,opaque_fragment:F2,packing:B2,premultiplied_alpha_fragment:O2,project_vertex:z2,dithering_fragment:k2,dithering_pars_fragment:H2,roughnessmap_fragment:V2,roughnessmap_pars_fragment:G2,shadowmap_pars_fragment:W2,shadowmap_pars_vertex:X2,shadowmap_vertex:q2,shadowmask_pars_fragment:Y2,skinbase_vertex:Z2,skinning_pars_vertex:K2,skinning_vertex:$2,skinnormal_vertex:J2,specularmap_fragment:j2,specularmap_pars_fragment:Q2,tonemapping_fragment:ey,tonemapping_pars_fragment:ty,transmission_fragment:ny,transmission_pars_fragment:iy,uv_pars_fragment:sy,uv_pars_vertex:ry,uv_vertex:oy,worldpos_vertex:ay,background_vert:ly,background_frag:cy,backgroundCube_vert:uy,backgroundCube_frag:hy,cube_vert:fy,cube_frag:dy,depth_vert:py,depth_frag:my,distance_vert:gy,distance_frag:vy,equirect_vert:xy,equirect_frag:yy,linedashed_vert:_y,linedashed_frag:by,meshbasic_vert:My,meshbasic_frag:Sy,meshlambert_vert:Ey,meshlambert_frag:Ty,meshmatcap_vert:wy,meshmatcap_frag:Ay,meshnormal_vert:Ry,meshnormal_frag:Cy,meshphong_vert:Py,meshphong_frag:Iy,meshphysical_vert:Ly,meshphysical_frag:Dy,meshtoon_vert:Ny,meshtoon_frag:Uy,points_vert:Fy,points_frag:By,shadow_vert:Oy,shadow_frag:zy,sprite_vert:ky,sprite_frag:Hy},Ye={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},xs={basic:{uniforms:jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:jn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:jn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new _e(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:jn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:jn([Ye.points,Ye.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:jn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:jn([Ye.common,Ye.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:jn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:jn([Ye.sprite,Ye.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:jn([Ye.common,Ye.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:jn([Ye.lights,Ye.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};xs.physical={uniforms:jn([xs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var ku={r:0,b:0,g:0},Vy=new Qe,fm=new pt;fm.set(-1,0,0,0,1,0,0,0,1);function Gy(i,e,t,n,s,r){let o=new _e(0),l=s===!0?0:1,a,u,h=null,p=0,m=null;function x(d){let v=d.isScene===!0?d.background:null;if(v&&v.isTexture){let g=d.backgroundBlurriness>0;v=e.get(v,g)}return v}function y(d){let v=!1,g=x(d);g===null?c(o,l):g&&g.isColor&&(c(g,1),v=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(d,v){let g=x(v);g&&(g.isCubeTexture||g.mapping===Qa)?(u===void 0&&(u=new ct(new Qt(1,1,1),new ut({name:"BackgroundCubeMaterial",uniforms:Cr(xs.backgroundCube.uniforms),vertexShader:xs.backgroundCube.vertexShader,fragmentShader:xs.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vy.makeRotationFromEuler(v.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(fm),u.material.toneMapped=Lt.getTransfer(g.colorSpace)!==Ht,(h!==g||p!==g.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,p=g.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(a===void 0&&(a=new ct(new rn(2,2),new ut({name:"BackgroundMaterial",uniforms:Cr(xs.background.uniforms),vertexShader:xs.background.vertexShader,fragmentShader:xs.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=g,a.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,a.material.toneMapped=Lt.getTransfer(g.colorSpace)!==Ht,g.matrixAutoUpdate===!0&&g.updateMatrix(),a.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||p!==g.version||m!==i.toneMapping)&&(a.material.needsUpdate=!0,h=g,p=g.version,m=i.toneMapping),a.layers.enableAll(),d.unshift(a,a.geometry,a.material,0,0,null))}function c(d,v){d.getRGB(ku,Vf(i)),t.buffers.color.setClear(ku.r,ku.g,ku.b,v,r)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,v=1){o.set(d),l=v,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,c(o,l)},render:y,addToRenderList:S,dispose:f}}function Wy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function l(A,C,I,R,L){let D=!1,O=p(A,R,I,C);r!==O&&(r=O,u(r.object)),D=x(A,R,I,L),D&&y(A,R,I,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,g(A,C,I,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function a(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function p(A,C,I,R){let L=R.wireframe===!0,D=n[C.id];D===void 0&&(D={},n[C.id]=D);let O=A.isInstancedMesh===!0?A.id:0,H=D[O];H===void 0&&(H={},D[O]=H);let B=H[I.id];B===void 0&&(B={},H[I.id]=B);let V=B[L];return V===void 0&&(V=m(a()),B[L]=V),V}function m(A){let C=[],I=[],R=[];for(let L=0;L<t;L++)C[L]=0,I[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:R,object:A,attributes:{},index:null}}function x(A,C,I,R){let L=r.attributes,D=C.attributes,O=0,H=I.getAttributes();for(let B in H)if(H[B].location>=0){let z=L[B],q=D[B];if(q===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(q=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(q=A.instanceColor)),z===void 0||z.attribute!==q||q&&z.data!==q.data)return!0;O++}return r.attributesNum!==O||r.index!==R}function y(A,C,I,R){let L={},D=C.attributes,O=0,H=I.getAttributes();for(let B in H)if(H[B].location>=0){let z=D[B];z===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(z=A.instanceColor));let q={};q.attribute=z,z&&z.data&&(q.data=z.data),L[B]=q,O++}r.attributes=L,r.attributesNum=O,r.index=R}function S(){let A=r.newAttributes;for(let C=0,I=A.length;C<I;C++)A[C]=0}function c(A){f(A,0)}function f(A,C){let I=r.newAttributes,R=r.enabledAttributes,L=r.attributeDivisors;I[A]=1,R[A]===0&&(i.enableVertexAttribArray(A),R[A]=1),L[A]!==C&&(i.vertexAttribDivisor(A,C),L[A]=C)}function d(){let A=r.newAttributes,C=r.enabledAttributes;for(let I=0,R=C.length;I<R;I++)C[I]!==A[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function v(A,C,I,R,L,D,O){O===!0?i.vertexAttribIPointer(A,C,I,L,D):i.vertexAttribPointer(A,C,I,R,L,D)}function g(A,C,I,R){S();let L=R.attributes,D=I.getAttributes(),O=C.defaultAttributeValues;for(let H in D){let B=D[H];if(B.location>=0){let V=L[H];if(V===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(V=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(V=A.instanceColor)),V!==void 0){let z=V.normalized,q=V.itemSize,ee=e.get(V);if(ee===void 0)continue;let Ee=ee.buffer,we=ee.type,Me=ee.bytesPerElement,W=we===i.INT||we===i.UNSIGNED_INT||V.gpuType===tu;if(V.isInterleavedBufferAttribute){let J=V.data,ve=J.stride,Pe=V.offset;if(J.isInstancedInterleavedBuffer){for(let ie=0;ie<B.locationSize;ie++)f(B.location+ie,J.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ie=0;ie<B.locationSize;ie++)c(B.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let ie=0;ie<B.locationSize;ie++)v(B.location+ie,q/B.locationSize,we,z,ve*Me,(Pe+q/B.locationSize*ie)*Me,W)}else{if(V.isInstancedBufferAttribute){for(let J=0;J<B.locationSize;J++)f(B.location+J,V.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let J=0;J<B.locationSize;J++)c(B.location+J);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let J=0;J<B.locationSize;J++)v(B.location+J,q/B.locationSize,we,z,q*Me,q/B.locationSize*J*Me,W)}}else if(O!==void 0){let z=O[H];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(B.location,z);break;case 3:i.vertexAttrib3fv(B.location,z);break;case 4:i.vertexAttrib4fv(B.location,z);break;default:i.vertexAttrib1fv(B.location,z)}}}}d()}function b(){E();for(let A in n){let C=n[A];for(let I in C){let R=C[I];for(let L in R){let D=R[L];for(let O in D)h(D[O].object),delete D[O];delete R[L]}}delete n[A]}}function M(A){if(n[A.id]===void 0)return;let C=n[A.id];for(let I in C){let R=C[I];for(let L in R){let D=R[L];for(let O in D)h(D[O].object),delete D[O];delete R[L]}}delete n[A.id]}function T(A){for(let C in n){let I=n[C];for(let R in I){let L=I[R];if(L[A.id]===void 0)continue;let D=L[A.id];for(let O in D)h(D[O].object),delete D[O];delete L[A.id]}}}function _(A){for(let C in n){let I=n[C],R=A.isInstancedMesh===!0?A.id:0,L=I[R];if(L!==void 0){for(let D in L){let O=L[D];for(let H in O)h(O[H].object),delete O[H];delete L[D]}delete I[R],Object.keys(I).length===0&&delete n[C]}}}function E(){w(),o=!0,r!==s&&(r=s,u(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:E,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:c,disableUnusedAttributes:d}}function Xy(i,e,t){let n;function s(a){n=a}function r(a,u){i.drawArrays(n,a,u),t.update(u,n,1)}function o(a,u,h){h!==0&&(i.drawArraysInstanced(n,a,u,h),t.update(u,n,h))}function l(a,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,u,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x];t.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function qy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Jn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(T){let _=T===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==$n&&T!==Bi&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function a(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",h=a(u);h!==u&&(lt("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),c=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:c,maxAttributes:f,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:g,maxSamples:b,samples:M}}function Yy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Qi,l=new pt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){let x=p.length!==0||m||n!==0||s;return s=m,n=p.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,x){let y=p.clippingPlanes,S=p.clipIntersection,c=p.clipShadows,f=i.get(p);if(!s||y===null||y.length===0||r&&!c)r?h(null):u();else{let d=r?0:n,v=d*4,g=f.clippingState||null;a.value=g,g=h(y,m,v,x);for(let b=0;b!==v;++b)g[b]=t[b];f.clippingState=g,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=d}};function u(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,x,y){let S=p!==null?p.length:0,c=null;if(S!==0){if(c=a.value,y!==!0||c===null){let f=x+S*4,d=m.matrixWorldInverse;l.getNormalMatrix(d),(c===null||c.length<f)&&(c=new Float32Array(f));for(let v=0,g=x;v!==S;++v,g+=4)o.copy(p[v]).applyMatrix4(d,l),o.normal.toArray(c,g),c[g+3]=o.constant}a.value=c,a.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,c}}var Do=4,Zy=6,Ky=20,$y=256,al=new Qs,Wp=new _e,Jf=null,jf=0,Qf=0,e0=!1,Jy=new k,Ir=new k,Vu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=Jy}=r;Jf=this._renderer.getRenderTarget(),jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),e0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a,l),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jf,jf,Qf),this._renderer.xr.enabled=e0,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jf=this._renderer.getRenderTarget(),jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),e0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Rn,format:Jn,colorSpace:Ma,depthBuffer:!1},s=Xp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jy(r)),this._blurMaterial=e_(r,e,t),this._ggxMaterial=Qy(r,e,t)}return s}_compileMaterial(e){let t=new ct(new mt,e);this._renderer.compile(t,al)}_sceneToCubeUV(e,t,n,s,r){let a=new Vn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,x=p.toneMapping;p.getClearColor(Wp),p.toneMapping=ss,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new Qt,new xn({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,c=S.material,f=!1,d=e.background;d?d.isColor&&(c.color.copy(d),e.background=null,f=!0):(c.color.copy(Wp),f=!0);for(let v=0;v<6;v++){let g=v%3;g===0?(a.up.set(0,u[v],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+h[v],r.y,r.z)):g===1?(a.up.set(0,0,u[v]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+h[v],r.z)):(a.up.set(0,u[v],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+h[v]));let b=this._cubeSize;Lo(s,g*b,v>2?b:0,b,b),p.setRenderTarget(s),f&&p.render(S,a),p.render(e,a)}p.toneMapping=x,p.autoClear=m,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===er||e.mapping===Rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let a=this._cubeSize;Lo(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(o,al)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let a=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),m=u*1.25,x=p*m,{_lodMax:y}=this,S=this._sizeLods[n],c=3*S*(n>y-Do?n-y+Do:0),f=4*(this._cubeSize-S);a.envMap.value=e.texture,a.roughness.value=x,a.mipInt.value=y-t,Lo(r,c,f,3*S,2*S),s.setRenderTarget(r),s.render(l,al),a.envMap.value=r.texture,a.roughness.value=0,a.mipInt.value=y-n,Lo(e,c,f,3*S,2*S),s.setRenderTarget(e),s.render(l,al)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,a=this._lodMeshes[s];a.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Do?s-this._lodMax+Do:0),m=4*(this._cubeSize-h);Lo(t,p,m,3*h,2*h),o.setRenderTarget(t),o.render(a,al)}};function jy(i){let e=[],t=[],n=i,s=i-Do+1+Zy;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),a=-l,u=1+l,h=[a,a,u,a,u,u,a,a,u,u,a,u],p=6,m=6,x=3,y=new Float32Array(x*m*p),S=new Float32Array(x*m*p);for(let f=0;f<p;f++){let d=f%3*2/3-1,v=f>2?0:-1,g=[d,v,0,d+2/3,v,0,d+2/3,v+1,0,d,v,0,d+2/3,v+1,0,d,v+1,0];y.set(g,x*m*f);for(let b=0;b<m;b++){let M=h[b*2]*2-1,T=h[b*2+1]*2-1;f===0?Ir.set(1,T,M):f===1?Ir.set(-M,1,-T):f===2?Ir.set(-M,T,1):f===3?Ir.set(-1,T,-M):f===4?Ir.set(-M,-1,T):Ir.set(M,T,-1),Ir.toArray(S,(f*m+b)*x)}}let c=new mt;c.setAttribute("position",new Mt(y,x)),c.setAttribute("outputDirection",new Mt(S,x)),t.push(new ct(c,null)),n>Do&&n--}return{lodMeshes:t,sizeLods:e}}function Xp(i,e,t){let n=new Yt(i,e,t);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Qy(i,e,t){return new ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$y,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function e_(i,e,t){return new ut({name:"SphericalGaussianBlur",defines:{SAMPLES:Ky,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function qp(){return new ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Yp(){return new ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Xu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Gu=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new La(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new ut({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:si});r.uniforms.tEquirect.value=t;let o=new ct(s,r),l=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Ot),new Kc(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function t_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(m,x=!1){return m==null?null:x?o(m):r(m)}function r(m){if(m&&m.isTexture){let x=m.mapping;if(x===jc||x===Qc)if(e.has(m)){let y=e.get(m).texture;return l(y,m.mapping)}else{let y=m.image;if(y&&y.height>0){let S=new Gu(y.height);return S.fromEquirectangularTexture(i,m),e.set(m,S),m.addEventListener("dispose",u),l(S.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){let x=m.mapping,y=x===jc||x===Qc,S=x===er||x===Rr;if(y||S){let c=t.get(m),f=c!==void 0?c.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==f)return n===null&&(n=new Vu(i)),c=y?n.fromEquirectangular(m,c):n.fromCubemap(m,c),c.texture.pmremVersion=m.pmremVersion,t.set(m,c),c.texture;if(c!==void 0)return c.texture;{let d=m.image;return y&&d&&d.height>0||S&&d&&a(d)?(n===null&&(n=new Vu(i)),c=y?n.fromEquirectangular(m):n.fromCubemap(m),c.texture.pmremVersion=m.pmremVersion,t.set(m,c),m.addEventListener("dispose",h),c.texture):null}}}return m}function l(m,x){return x===jc?m.mapping=er:x===Qc&&(m.mapping=Rr),m}function a(m){let x=0,y=6;for(let S=0;S<y;S++)m[S]!==void 0&&x++;return x===y}function u(m){let x=m.target;x.removeEventListener("dispose",u);let y=e.get(x);y!==void 0&&(e.delete(x),y.dispose())}function h(m){let x=m.target;x.removeEventListener("dispose",h);let y=t.get(x);y!==void 0&&(t.delete(x),y.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function n_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Mr("WebGLRenderer: "+n+" extension not supported."),s}}}function i_(i,e,t,n){let s={},r=new WeakMap;function o(p){let m=p.target;m.index!==null&&e.remove(m.index);for(let y in m.attributes)e.remove(m.attributes[y]);m.removeEventListener("dispose",o),delete s[m.id];let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function a(p){let m=p.attributes;for(let x in m)e.update(m[x],i.ARRAY_BUFFER)}function u(p){let m=[],x=p.index,y=p.attributes.position,S=0;if(y===void 0)return;if(x!==null){let d=x.array;S=x.version;for(let v=0,g=d.length;v<g;v+=3){let b=d[v+0],M=d[v+1],T=d[v+2];m.push(b,M,M,T,T,b)}}else{let d=y.array;S=y.version;for(let v=0,g=d.length/3-1;v<g;v+=3){let b=v+0,M=v+1,T=v+2;m.push(b,M,M,T,T,b)}}let c=new(y.count>=65535?Ca:Ra)(m,1);c.version=S;let f=r.get(p);f&&e.remove(f),r.set(p,c)}function h(p){let m=r.get(p);if(m){let x=p.index;x!==null&&m.version<x.version&&u(p)}else u(p);return r.get(p)}return{get:l,update:a,getWireframeAttribute:h}}function s_(i,e,t){let n;function s(p){n=p}let r,o;function l(p){r=p.type,o=p.bytesPerElement}function a(p,m){i.drawElements(n,m,r,p*o),t.update(m,n,1)}function u(p,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,p*o,x),t.update(m,n,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,x);let S=0;for(let c=0;c<x;c++)S+=m[c];t.update(S,n,1)}this.setMode=s,this.setIndex=l,this.render=a,this.renderInstances=u,this.renderMultiDraw=h}function r_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function o_(i,e,t){let n=new WeakMap,s=new dt;function r(o,l,a){let u=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0,m=n.get(l);if(m===void 0||m.count!==p){let E=function(){T.dispose(),n.delete(l),l.removeEventListener("dispose",E)};m!==void 0&&m.texture.dispose();let x=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,S=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],d=l.morphAttributes.color||[],v=0;x===!0&&(v=1),y===!0&&(v=2),S===!0&&(v=3);let g=l.attributes.position.count*v,b=1;g>e.maxTextureSize&&(b=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let M=new Float32Array(g*b*4*p),T=new Ta(M,g,b,p);T.type=Bi,T.needsUpdate=!0;let _=v*4;for(let w=0;w<p;w++){let A=c[w],C=f[w],I=d[w],R=g*b*4*w;for(let L=0;L<A.count;L++){let D=L*_;x===!0&&(s.fromBufferAttribute(A,L),M[R+D+0]=s.x,M[R+D+1]=s.y,M[R+D+2]=s.z,M[R+D+3]=0),y===!0&&(s.fromBufferAttribute(C,L),M[R+D+4]=s.x,M[R+D+5]=s.y,M[R+D+6]=s.z,M[R+D+7]=0),S===!0&&(s.fromBufferAttribute(I,L),M[R+D+8]=s.x,M[R+D+9]=s.y,M[R+D+10]=s.z,M[R+D+11]=I.itemSize===4?s.w:1)}}m={count:p,texture:T,size:new Le(g,b)},n.set(l,m),l.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let S=0;S<u.length;S++)x+=u[S];let y=l.morphTargetsRelative?1:1-x;a.getUniforms().setValue(i,"morphTargetBaseInfluence",y),a.getUniforms().setValue(i,"morphTargetInfluences",u)}a.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),a.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function a_(i,e,t,n,s){let r=new WeakMap;function o(u){let h=s.render.frame,p=u.geometry,m=e.get(u,p);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let x=u.skeleton;r.get(x)!==h&&(x.update(),r.set(x,h))}return m}function l(){r=new WeakMap}function a(u){let h=u.target;h.removeEventListener("dispose",a),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var l_={[wf]:"LINEAR_TONE_MAPPING",[Af]:"REINHARD_TONE_MAPPING",[Rf]:"CINEON_TONE_MAPPING",[Cf]:"ACES_FILMIC_TONE_MAPPING",[If]:"AGX_TONE_MAPPING",[ja]:"NEUTRAL_TONE_MAPPING",[Pf]:"CUSTOM_TONE_MAPPING"};function c_(i,e,t,n,s,r){let o=new Yt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,a=null,u=new mt;u.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Je([0,2,0,0,2,0],2));let h=new Bc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ct(u,h),m=new Qs(-1,1,1,-1,0,1),x=null,y=null,S=!1,c,f=null,d=[],v=!1;this.setSize=function(g,b){o.setSize(g,b),l!==null&&l.setSize(g,b),a!==null&&a.setSize(g,b);for(let M=0;M<d.length;M++){let T=d[M];T.setSize&&T.setSize(g,b)}},this.setEffects=function(g){d=g,v=d.length>0&&d[0].isRenderPass===!0;let b=o.width,M=o.height;d.length>0&&l===null&&(l=new Yt(b,M,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),a=new Yt(b,M,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<d.length;T++){let _=d[T];_.setSize&&_.setSize(b,M)}},this.begin=function(g,b){if(S||g.toneMapping===ss&&d.length===0)return!1;if(f=b,b!==null){let M=b.width,T=b.height;(o.width!==M||o.height!==T)&&this.setSize(M,T)}return v===!1&&g.setRenderTarget(o),c=g.toneMapping,g.toneMapping=ss,!0},this.hasRenderPass=function(){return v},this.end=function(g,b){g.toneMapping=c,S=!0;let M=o,T=l;for(let _=0;_<d.length;_++){let E=d[_];E.enabled!==!1&&(E.render(g,T,M,b),E.needsSwap!==!1&&(M=T,T=T===l?a:l))}if(x!==g.outputColorSpace||y!==g.toneMapping){x=g.outputColorSpace,y=g.toneMapping,h.defines={},Lt.getTransfer(x)===Ht&&(h.defines.SRGB_TRANSFER="");let _=l_[y];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,g.setRenderTarget(f),g.render(p,m),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),a!==null&&a.dispose(),u.dispose(),h.dispose()}}var dm=new Zn,i0=new Zs(1,1),pm=new Ta,mm=new Tc,gm=new La,Zp=[],Kp=[],$p=new Float32Array(16),Jp=new Float32Array(9),jp=new Float32Array(4);function Uo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Zp[s];if(r===void 0&&(r=new Float32Array(s),Zp[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function In(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qu(i,e){let t=Kp[e];t===void 0&&(t=new Int32Array(e),Kp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function u_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;i.uniform2fv(this.addr,e),Ln(t,e)}}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;i.uniform3fv(this.addr,e),Ln(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;i.uniform4fv(this.addr,e),Ln(t,e)}}function p_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,n))return;jp.set(n),i.uniformMatrix2fv(this.addr,!1,jp),Ln(t,n)}}function m_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,n))return;Jp.set(n),i.uniformMatrix3fv(this.addr,!1,Jp),Ln(t,n)}}function g_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,n))return;$p.set(n),i.uniformMatrix4fv(this.addr,!1,$p),Ln(t,n)}}function v_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;i.uniform2iv(this.addr,e),Ln(t,e)}}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;i.uniform3iv(this.addr,e),Ln(t,e)}}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;i.uniform4iv(this.addr,e),Ln(t,e)}}function b_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;i.uniform2uiv(this.addr,e),Ln(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;i.uniform3uiv(this.addr,e),Ln(t,e)}}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;i.uniform4uiv(this.addr,e),Ln(t,e)}}function T_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(i0.compareFunction=t.isReversedDepthBuffer()?zu:Ou,r=i0):r=dm,t.setTexture2D(e||r,s)}function w_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mm,s)}function A_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||gm,s)}function R_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pm,s)}function C_(i){switch(i){case 5126:return u_;case 35664:return h_;case 35665:return f_;case 35666:return d_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return v_;case 35667:case 35671:return x_;case 35668:case 35672:return y_;case 35669:case 35673:return __;case 5125:return b_;case 36294:return M_;case 36295:return S_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}function P_(i,e){i.uniform1fv(this.addr,e)}function I_(i,e){let t=Uo(e,this.size,2);i.uniform2fv(this.addr,t)}function L_(i,e){let t=Uo(e,this.size,3);i.uniform3fv(this.addr,t)}function D_(i,e){let t=Uo(e,this.size,4);i.uniform4fv(this.addr,t)}function N_(i,e){let t=Uo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function U_(i,e){let t=Uo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function F_(i,e){let t=Uo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function B_(i,e){i.uniform1iv(this.addr,e)}function O_(i,e){i.uniform2iv(this.addr,e)}function z_(i,e){i.uniform3iv(this.addr,e)}function k_(i,e){i.uniform4iv(this.addr,e)}function H_(i,e){i.uniform1uiv(this.addr,e)}function V_(i,e){i.uniform2uiv(this.addr,e)}function G_(i,e){i.uniform3uiv(this.addr,e)}function W_(i,e){i.uniform4uiv(this.addr,e)}function X_(i,e,t){let n=this.cache,s=e.length,r=qu(t,s);In(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=i0:o=dm;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function q_(i,e,t){let n=this.cache,s=e.length,r=qu(t,s);In(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||mm,r[o])}function Y_(i,e,t){let n=this.cache,s=e.length,r=qu(t,s);In(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||gm,r[o])}function Z_(i,e,t){let n=this.cache,s=e.length,r=qu(t,s);In(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||pm,r[o])}function K_(i){switch(i){case 5126:return P_;case 35664:return I_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return B_;case 35667:case 35671:return O_;case 35668:case 35672:return z_;case 35669:case 35673:return k_;case 5125:return H_;case 36294:return V_;case 36295:return G_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}var s0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}},r0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K_(t.type)}},o0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},t0=/(\w+)(\])?(\[|\.)?/g;function Qp(i,e){i.seq.push(e),i.map[e.id]=e}function $_(i,e,t){let n=i.name,s=n.length;for(t0.lastIndex=0;;){let r=t0.exec(n),o=t0.lastIndex,l=r[1],a=r[2]==="]",u=r[3];if(a&&(l=l|0),u===void 0||u==="["&&o+2===s){Qp(t,u===void 0?new s0(l,i,e):new r0(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new o0(l),Qp(t,p)),t=p}}}var No=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),a=e.getUniformLocation(t,l.name);$_(l,a,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function em(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var J_=37297,j_=0;function Q_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var tm=new pt;function eb(i){Lt._getMatrix(tm,Lt.workingColorSpace,i);let e=`mat3( ${tm.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(i)){case Sa:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Q_(i.getShaderSource(e),l)}else return r}function tb(i,e){let t=eb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var nb={[wf]:"Linear",[Af]:"Reinhard",[Rf]:"Cineon",[Cf]:"ACESFilmic",[If]:"AgX",[ja]:"Neutral",[Pf]:"Custom"};function ib(i,e){let t=nb[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Hu=new k;function sb(){Lt.getLuminanceCoefficients(Hu);let i=Hu.x.toFixed(4),e=Hu.y.toFixed(4),t=Hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function ob(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ab(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function cl(i){return i!==""}function im(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function a0(i){return i.replace(lb,ub)}var cb=new Map;function ub(i,e){let t=ht[e];if(t===void 0){let n=cb.get(e);if(n!==void 0)t=ht[n],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return a0(t)}var hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rm(i){return i.replace(hb,fb)}function fb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function om(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var db={[wr]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function pb(i){return db[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mb={[er]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[Qa]:"ENVMAP_TYPE_CUBE_UV"};function gb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":mb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var vb={[Rr]:"ENVMAP_MODE_REFRACTION"};function xb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":vb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yb={[Tf]:"ENVMAP_BLENDING_MULTIPLY",[_p]:"ENVMAP_BLENDING_MIX",[bp]:"ENVMAP_BLENDING_ADD"};function _b(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":yb[i.combine]||"ENVMAP_BLENDING_NONE"}function bb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,a=pb(t),u=gb(t),h=xb(t),p=_b(t),m=bb(t),x=rb(t),y=ob(r),S=s.createProgram(),c,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(cl).join(`
`),c.length>0&&(c+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(cl).join(`
`),f.length>0&&(f+=`
`)):(c=[om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),f=[om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?ht.tonemapping_pars_fragment:"",t.toneMapping!==ss?ib("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,tb("linearToOutputTexel",t.outputColorSpace),sb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cl).join(`
`)),o=a0(o),o=im(o,t),o=sm(o,t),l=a0(l),l=im(l,t),l=sm(l,t),o=rm(o),l=rm(l),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,c=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,f=["#define varying in",t.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=d+c+o,g=d+f+l,b=em(s,s.VERTEX_SHADER,v),M=em(s,s.FRAGMENT_SHADER,g);s.attachShader(S,b),s.attachShader(S,M),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function T(A){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(S)||"",I=s.getShaderInfoLog(b)||"",R=s.getShaderInfoLog(M)||"",L=C.trim(),D=I.trim(),O=R.trim(),H=!0,B=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,b,M);else{let V=nm(s,b,"vertex"),z=nm(s,M,"fragment");ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+V+`
`+z)}else L!==""?lt("WebGLProgram: Program Info Log:",L):(D===""||O==="")&&(B=!1);B&&(A.diagnostics={runnable:H,programLog:L,vertexShader:{log:D,prefix:c},fragmentShader:{log:O,prefix:f}})}s.deleteShader(b),s.deleteShader(M),_=new No(s,S),E=ab(s,S)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(S,J_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j_++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=M,this}var Sb=0,l0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new c0(e),t.set(e,n)),n}},c0=class{constructor(e){this.id=Sb++,this.code=e,this.usedTimes=0}};function Eb(i){return i===ir||i===rl||i===ol}function Tb(i,e,t,n,s,r){let o=new wa,l=new l0,a=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,m=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return a.add(_),_===0?"uv":`uv${_}`}function S(_,E,w,A,C,I){let R=A.fog,L=C.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||D,O),B=H&&H.mapping===Qa?H.image.height:null,V=x[_.type];_.precision!==null&&(m=n.getMaxPrecision(_.precision),m!==_.precision&&lt("WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,q=z!==void 0?z.length:0,ee=0;L.morphAttributes.position!==void 0&&(ee=1),L.morphAttributes.normal!==void 0&&(ee=2),L.morphAttributes.color!==void 0&&(ee=3);let Ee,we,Me,W;if(V){let Gt=xs[V];Ee=Gt.vertexShader,we=Gt.fragmentShader}else{Ee=_.vertexShader,we=_.fragmentShader;let Gt=l.getVertexShaderStage(_),Ct=l.getFragmentShaderStage(_);l.update(_,Gt,Ct),Me=Gt.id,W=Ct.id}let J=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Pe=C.isInstancedMesh===!0,ie=C.isBatchedMesh===!0,xe=!!_.map,Be=!!_.matcap,ze=!!H,Ae=!!_.aoMap,Ge=!!_.lightMap,te=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,j=!!_.displacementMap,ce=!!_.emissiveMap,se=!!_.metalnessMap,ne=!!_.roughnessMap,F=_.anisotropy>0,be=_.clearcoat>0,K=_.dispersion>0,N=_.retroreflectivity>0,P=_.iridescence>0,G=_.sheen>0,Z=_.transmission>0,Q=F&&!!_.anisotropyMap,he=be&&!!_.clearcoatMap,me=be&&!!_.clearcoatNormalMap,fe=be&&!!_.clearcoatRoughnessMap,pe=P&&!!_.iridescenceMap,De=P&&!!_.iridescenceThicknessMap,Ke=G&&!!_.sheenColorMap,Ne=G&&!!_.sheenRoughnessMap,Ue=!!_.specularMap,Oe=!!_.specularColorMap,tt=!!_.specularIntensityMap,at=Z&&!!_.transmissionMap,Y=Z&&!!_.thicknessMap,Ie=!!_.gradientMap,ge=!!_.alphaMap,Fe=_.alphaTest>0,He=!!_.alphaHash,Re=!!_.extensions,nt=ss;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(nt=i.toneMapping);let et={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:Ee,fragmentShader:we,defines:_.defines,customVertexShaderID:Me,customFragmentShaderID:W,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:ie,batchingColor:ie&&C._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&C.instanceColor!==null,instancingMorph:Pe&&C.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:xe,matcap:Be,envMap:ze,envMapMode:ze&&H.mapping,envMapCubeUVHeight:B,aoMap:Ae,lightMap:Ge,bumpMap:te,normalMap:de,displacementMap:j,emissiveMap:ce,normalMapObjectSpace:de&&_.normalMapType===Ep,normalMapTangentSpace:de&&_.normalMapType===Bu,packedNormalMap:de&&_.normalMapType===Bu&&Eb(_.normalMap.format),metalnessMap:se,roughnessMap:ne,anisotropy:F,anisotropyMap:Q,clearcoat:be,clearcoatMap:he,clearcoatNormalMap:me,clearcoatRoughnessMap:fe,dispersion:K,retroreflection:N,iridescence:P,iridescenceMap:pe,iridescenceThicknessMap:De,sheen:G,sheenColorMap:Ke,sheenRoughnessMap:Ne,specularMap:Ue,specularColorMap:Oe,specularIntensityMap:tt,transmission:Z,transmissionMap:at,thicknessMap:Y,gradientMap:Ie,opaque:_.transparent===!1&&_.blending===Ro&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:Fe,alphaHash:He,combine:_.combine,mapUv:xe&&y(_.map.channel),aoMapUv:Ae&&y(_.aoMap.channel),lightMapUv:Ge&&y(_.lightMap.channel),bumpMapUv:te&&y(_.bumpMap.channel),normalMapUv:de&&y(_.normalMap.channel),displacementMapUv:j&&y(_.displacementMap.channel),emissiveMapUv:ce&&y(_.emissiveMap.channel),metalnessMapUv:se&&y(_.metalnessMap.channel),roughnessMapUv:ne&&y(_.roughnessMap.channel),anisotropyMapUv:Q&&y(_.anisotropyMap.channel),clearcoatMapUv:he&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:me&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:De&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(_.sheenRoughnessMap.channel),specularMapUv:Ue&&y(_.specularMap.channel),specularColorMapUv:Oe&&y(_.specularColorMap.channel),specularIntensityMapUv:tt&&y(_.specularIntensityMap.channel),transmissionMapUv:at&&y(_.transmissionMap.channel),thicknessMapUv:Y&&y(_.thicknessMap.channel),alphaMapUv:ge&&y(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(de||F),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(xe||ge),fog:!!R,useFog:_.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ee,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:xe&&_.map.isVideoTexture===!0&&Lt.getTransfer(_.map.colorSpace)===Ht,decodeVideoTextureEmissive:ce&&_.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(_.emissiveMap.colorSpace)===Ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bn,flipSided:_.side===Gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Re&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&_.extensions.multiDraw===!0||ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return et.vertexUv1s=a.has(1),et.vertexUv2s=a.has(2),et.vertexUv3s=a.has(3),a.clear(),et}function c(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)E.push(w),E.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(f(E,_),d(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function f(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function d(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let E=x[_.type],w;if(E){let A=xs[E];w=Pr.clone(A.uniforms)}else w=_.uniforms;return w}function g(_,E){let w=h.get(E);return w!==void 0?++w.usedTimes:(w=new Mb(i,E,_,s),u.push(w),h.set(E,w)),w}function b(_){if(--_.usedTimes===0){let E=u.indexOf(_);u[E]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){l.remove(_)}function T(){l.dispose()}return{getParameters:S,getProgramCacheKey:c,getUniforms:v,acquireProgram:g,releaseProgram:b,releaseShaderCache:M,programs:u,dispose:T}}function wb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,a){i.get(o)[l]=a}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ab(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function am(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function l(m,x,y,S,c,f){let d=i[e];return d===void 0?(d={id:m.id,object:m,geometry:x,material:y,materialVariant:o(m),groupOrder:S,renderOrder:m.renderOrder,z:c,group:f},i[e]=d):(d.id=m.id,d.object=m,d.geometry=x,d.material=y,d.materialVariant=o(m),d.groupOrder=S,d.renderOrder=m.renderOrder,d.z=c,d.group=f),e++,d}function a(m,x,y,S,c,f,d){d.reversedDepth===!0&&(c=-c);let v=l(m,x,y,S,c,f);y.transmission>0?n.push(v):y.transparent===!0?s.push(v):t.push(v)}function u(m,x,y,S,c,f){let d=l(m,x,y,S,c,f);y.transmission>0?n.unshift(d):y.transparent===!0?s.unshift(d):t.unshift(d)}function h(m,x){t.length>1&&t.sort(m||Ab),n.length>1&&n.sort(x||am),s.length>1&&s.sort(x||am)}function p(){for(let m=e,x=i.length;m<x;m++){let y=i[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:u,finish:p,sort:h}}function Rb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new lm,i.set(n,[o])):s>=r.length?(o=new lm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new _e};break;case"SpotLight":t={position:new k,direction:new k,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Pb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ib=0;function Lb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Db(i){let e=new Cb,t=Pb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new k);let s=new k,r=new Qe,o=new Qe;function l(u){let h=0,p=0,m=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let x=0,y=0,S=0,c=0,f=0,d=0,v=0,g=0,b=0,M=0,T=0,_=0,E=0,w=0;u.sort(Lb);for(let C=0,I=u.length;C<I;C++){let R=u[C],L=R.color,D=R.intensity,O=R.distance,H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ir?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=L.r*D,p+=L.g*D,m+=L.b*D;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],D);w++}else if(R.isSunLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,z=t.get(R);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[y]=z,n.sunShadowMap[y]=H;let q=V.getViewportCount();for(let ee=0;ee<q;ee++)n.sunShadowMatrix[S+ee]=V.getMatrix(ee),n.sunShadowCascade[S+ee]=V._cascadeData[ee];S+=q,y++}n.sun[x]=B,x++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,z=t.get(R);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,n.directionalShadow[c]=z,n.directionalShadowMap[c]=H,n.directionalShadowMatrix[c]=R.shadow.matrix,b++}n.directional[c]=B,c++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(L).multiplyScalar(D),B.distance=O,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[d]=B;let V=R.shadow;if(R.map&&(n.spotLightMap[_]=R.map,_++,V.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[d]=V.matrix,R.castShadow){let z=t.get(R);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,n.spotShadow[d]=z,n.spotShadowMap[d]=H,T++}d++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(L).multiplyScalar(D),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[v]=B,v++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let V=R.shadow,z=t.get(R);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,n.pointShadow[f]=z,n.pointShadowMap[f]=H,n.pointShadowMatrix[f]=R.shadow.matrix,M++}n.point[f]=B,f++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(D),B.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[g]=B,g++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ye.LTC_FLOAT_1,n.rectAreaLTC2=Ye.LTC_FLOAT_2):(n.rectAreaLTC1=Ye.LTC_HALF_1,n.rectAreaLTC2=Ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=m;let A=n.hash;(A.sunLength!==x||A.directionalLength!==c||A.pointLength!==f||A.spotLength!==d||A.rectAreaLength!==v||A.hemiLength!==g||A.numSunShadows!==y||A.numDirectionalShadows!==b||A.numPointShadows!==M||A.numSpotShadows!==T||A.numSpotMaps!==_||A.numLightProbes!==w)&&(n.sun.length=x,n.directional.length=c,n.spot.length=d,n.rectArea.length=v,n.point.length=f,n.hemi.length=g,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,A.sunLength=x,A.directionalLength=c,A.pointLength=f,A.spotLength=d,A.rectAreaLength=v,A.hemiLength=g,A.numSunShadows=y,A.numDirectionalShadows=b,A.numPointShadows=M,A.numSpotShadows=T,A.numSpotMaps=_,A.numLightProbes=w,n.version=Ib++)}function a(u,h){let p=0,m=0,x=0,y=0,S=0,c=0,f=h.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){let g=u[d];if(g.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(g.matrixWorld),b.direction.transformDirection(f),p++}else if(g.isDirectionalLight){let b=n.directional[m];b.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(g.isSpotLight){let b=n.spot[y];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),y++}else if(g.isRectAreaLight){let b=n.rectArea[S];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(g.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(g.width*.5,0,0),b.halfHeight.set(0,g.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),S++}else if(g.isPointLight){let b=n.point[x];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(f),x++}else if(g.isHemisphereLight){let b=n.hemi[c];b.direction.setFromMatrixPosition(g.matrixWorld),b.direction.transformDirection(f),c++}}}return{setup:l,setupView:a,state:n}}function cm(i){let e=new Db(i),t=[],n=[],s=[];function r(m){p.camera=m,t.length=0,n.length=0,s.length=0}function o(m){t.push(m)}function l(m){n.push(m)}function a(m){s.push(m)}function u(){e.setup(t)}function h(m){e.setupView(t,m)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:a}}function Nb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new cm(i),e.set(s,[l])):r>=o.length?(l=new cm(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fb=`uniform sampler2D shadow_pass;
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
}`,Bb=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Ob=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],um=new Qe,ll=new k,n0=new k;function zb(i,e,t){let n=new yo,s=new Le,r=new Le,o=new dt,l=new Ks,a=new Oc,u={},h=t.maxTextureSize,p={[gs]:Gn,[Gn]:gs,[bn]:bn},m=new ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Ub,fragmentShader:Fb}),x=m.clone();x.defines.HORIZONTAL_PASS=1;let y=new mt;y.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ct(y,m),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let f=this.type;this.render=function(M,T,_){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||M.length===0)return;this.type===tp&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);let E=i.getRenderTarget(),w=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),C=i.state;C.setBlending(si),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let I=f!==this.type;I&&T.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(L=>L.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,L=M.length;R<L;R++){let D=M[R],O=D.shadow;if(O===void 0){lt("WebGLShadowMap:",D,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let H=O.getFrameExtents();s.multiply(H),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,O.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=B,O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ao){if(D.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Yt(s.x,s.y,{format:ir,type:Rn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),O.map.texture.name=D.name+".shadowMap",O.map.depthTexture=new Zs(s.x,s.y,Bi),O.map.depthTexture.name=D.name+".shadowMapDepth",O.map.depthTexture.format=fs,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=wn,O.map.depthTexture.magFilter=wn}else D.isPointLight?(O.map=new Gu(s.x),O.map.depthTexture=new Cc(s.x,rs)):(O.map=new Yt(s.x,s.y),O.map.depthTexture=new Zs(s.x,s.y,rs)),O.map.depthTexture.name=D.name+".shadowMap",O.map.depthTexture.format=fs,this.type===wr?(O.map.depthTexture.compareFunction=B?zu:Ou,O.map.depthTexture.minFilter=Ot,O.map.depthTexture.magFilter=Ot):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=wn,O.map.depthTexture.magFilter=wn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let V=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();D.isPointLight!==!0&&O.updateMatrices(D,_);for(let z=0;z<V;z++){let q=O.getCamera(z);if(D.isPointLight){let ee=O.camera,Ee=O.matrix,we=D.distance||ee.far;we!==ee.far&&(ee.far=we,ee.updateProjectionMatrix()),ll.setFromMatrixPosition(D.matrixWorld),ee.position.copy(ll),n0.copy(ee.position),n0.add(Bb[z]),ee.up.copy(Ob[z]),ee.lookAt(n0),ee.updateMatrixWorld(),Ee.makeTranslation(-ll.x,-ll.y,-ll.z),um.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),O._frustum.setFromProjectionMatrix(um,ee.coordinateSystem,ee.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,z),i.clear();else{z===0&&(i.setRenderTarget(O.map),i.clear());let ee=O.getViewport(z);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),C.viewport(o)}n=O.getFrustum(z),g(T,_,q,D,this.type)}O.isPointLightShadow!==!0&&this.type===Ao&&d(O,_),O.needsUpdate=!1}f=this.type,c.needsUpdate=!1,i.setRenderTarget(E,w,A)};function d(M,T){let _=e.update(S);m.defines.VSM_SAMPLES!==M.blurSamples&&(m.defines.VSM_SAMPLES=M.blurSamples,x.defines.VSM_SAMPLES=M.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),M.mapPass===null?M.mapPass=new Yt(s.x,s.y,{format:ir,type:Rn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),m.uniforms.shadow_pass.value=M.map.depthTexture,m.uniforms.resolution.value.set(M.map.width,M.map.height),m.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,_,m,S,null),x.uniforms.shadow_pass.value=M.mapPass.texture,x.uniforms.resolution.value.set(M.map.width,M.map.height),x.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,_,x,S,null)}function v(M,T,_,E){let w=null,A=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)w=A;else if(w=_.isPointLight===!0?a:l,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let C=w.uuid,I=T.uuid,R=u[C];R===void 0&&(R={},u[C]=R);let L=R[I];L===void 0&&(L=w.clone(),R[I]=L,T.addEventListener("dispose",b)),w=L}if(w.visible=T.visible,w.wireframe=T.wireframe,E===Ao?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:p[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,_.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let C=i.properties.get(w);C.light=_}return w}function g(M,T,_,E,w){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===Ao)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let I=e.update(M),R=M.material;if(Array.isArray(R)){let L=I.groups;for(let D=0,O=L.length;D<O;D++){let H=L[D],B=R[H.materialIndex];if(B&&B.visible){let V=v(M,B,E,w);M.onBeforeShadow(i,M,T,_,I,V,H),i.renderBufferDirect(_,null,I,V,M,H),M.onAfterShadow(i,M,T,_,I,V,H)}}}else if(R.visible){let L=v(M,R,E,w);M.onBeforeShadow(i,M,T,_,I,L,null),i.renderBufferDirect(_,null,I,L,M,null),M.onAfterShadow(i,M,T,_,I,L,null)}}let C=M.children;for(let I=0,R=C.length;I<R;I++)g(C[I],T,_,E,w)}function b(M){M.target.removeEventListener("dispose",b);for(let _ in u){let E=u[_],w=M.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function kb(i,e){function t(){let Y=!1,Ie=new dt,ge=null,Fe=new dt(0,0,0,0);return{setMask:function(He){ge!==He&&!Y&&(i.colorMask(He,He,He,He),ge=He)},setLocked:function(He){Y=He},setClear:function(He,Re,nt,et,Gt){Gt===!0&&(He*=et,Re*=et,nt*=et),Ie.set(He,Re,nt,et),Fe.equals(Ie)===!1&&(i.clearColor(He,Re,nt,et),Fe.copy(Ie))},reset:function(){Y=!1,ge=null,Fe.set(-1,0,0,0)}}}function n(){let Y=!1,Ie=!1,ge=null,Fe=null,He=null;return{setReversed:function(Re){if(Ie!==Re){let nt=e.get("EXT_clip_control");Re?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Ie=Re;let et=He;He=null,this.setClear(et)}},getReversed:function(){return Ie},setTest:function(Re){Re?J(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(Re){ge!==Re&&!Y&&(i.depthMask(Re),ge=Re)},setFunc:function(Re){if(Ie&&(Re=Fp[Re]),Fe!==Re){switch(Re){case pc:i.depthFunc(i.NEVER);break;case mc:i.depthFunc(i.ALWAYS);break;case gc:i.depthFunc(i.LESS);break;case ho:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case xc:i.depthFunc(i.GEQUAL);break;case yc:i.depthFunc(i.GREATER);break;case _c:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Fe=Re}},setLocked:function(Re){Y=Re},setClear:function(Re){He!==Re&&(He=Re,Ie&&(Re=1-Re),i.clearDepth(Re))},reset:function(){Y=!1,ge=null,Fe=null,He=null,Ie=!1}}}function s(){let Y=!1,Ie=null,ge=null,Fe=null,He=null,Re=null,nt=null,et=null,Gt=null;return{setTest:function(Ct){Y||(Ct?J(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Ct){Ie!==Ct&&!Y&&(i.stencilMask(Ct),Ie=Ct)},setFunc:function(Ct,Hn,ci){(ge!==Ct||Fe!==Hn||He!==ci)&&(i.stencilFunc(Ct,Hn,ci),ge=Ct,Fe=Hn,He=ci)},setOp:function(Ct,Hn,ci){(Re!==Ct||nt!==Hn||et!==ci)&&(i.stencilOp(Ct,Hn,ci),Re=Ct,nt=Hn,et=ci)},setLocked:function(Ct){Y=Ct},setClear:function(Ct){Gt!==Ct&&(i.clearStencil(Ct),Gt=Ct)},reset:function(){Y=!1,Ie=null,ge=null,Fe=null,He=null,Re=null,nt=null,et=null,Gt=null}}}let r=new t,o=new n,l=new s,a=new WeakMap,u=new WeakMap,h={},p={},m={},x=new WeakMap,y=[],S=null,c=!1,f=null,d=null,v=null,g=null,b=null,M=null,T=null,_=new _e(0,0,0),E=0,w=!1,A=null,C=null,I=null,R=null,L=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,H=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=H>=2);let V=null,z={},q=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),Ee=new dt().fromArray(q),we=new dt().fromArray(ee);function Me(Y,Ie,ge,Fe){let He=new Uint8Array(4),Re=i.createTexture();i.bindTexture(Y,Re),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<ge;nt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,He):i.texImage2D(Ie+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,He);return Re}let W={};W[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),J(i.DEPTH_TEST),o.setFunc(ho),te(!1),de(_f),J(i.CULL_FACE),Ae(si);function J(Y){h[Y]!==!0&&(i.enable(Y),h[Y]=!0)}function ve(Y){h[Y]!==!1&&(i.disable(Y),h[Y]=!1)}function Pe(Y,Ie){return m[Y]!==Ie?(i.bindFramebuffer(Y,Ie),m[Y]=Ie,Y===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ie),Y===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function ie(Y,Ie){let ge=y,Fe=!1;if(Y){ge=x.get(Ie),ge===void 0&&(ge=[],x.set(Ie,ge));let He=Y.textures;if(ge.length!==He.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,nt=He.length;Re<nt;Re++)ge[Re]=i.COLOR_ATTACHMENT0+Re;ge.length=He.length,Fe=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,Fe=!0);Fe&&i.drawBuffers(ge)}function xe(Y){return S!==Y?(i.useProgram(Y),S=Y,!0):!1}let Be={[Ar]:i.FUNC_ADD,[ip]:i.FUNC_SUBTRACT,[sp]:i.FUNC_REVERSE_SUBTRACT};Be[rp]=i.MIN,Be[op]=i.MAX;let ze={[ap]:i.ZERO,[lp]:i.ONE,[cp]:i.SRC_COLOR,[Sf]:i.SRC_ALPHA,[mp]:i.SRC_ALPHA_SATURATE,[dp]:i.DST_COLOR,[hp]:i.DST_ALPHA,[up]:i.ONE_MINUS_SRC_COLOR,[Ef]:i.ONE_MINUS_SRC_ALPHA,[pp]:i.ONE_MINUS_DST_COLOR,[fp]:i.ONE_MINUS_DST_ALPHA,[gp]:i.CONSTANT_COLOR,[vp]:i.ONE_MINUS_CONSTANT_COLOR,[xp]:i.CONSTANT_ALPHA,[yp]:i.ONE_MINUS_CONSTANT_ALPHA};function Ae(Y,Ie,ge,Fe,He,Re,nt,et,Gt,Ct){if(Y===si){c===!0&&(ve(i.BLEND),c=!1);return}if(c===!1&&(J(i.BLEND),c=!0),Y!==np){if(Y!==f||Ct!==w){if((d!==Ar||b!==Ar)&&(i.blendEquation(i.FUNC_ADD),d=Ar,b=Ar),Ct)switch(Y){case Ro:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFunc(i.ONE,i.ONE);break;case bf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bf:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mf:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",Y);break}v=null,g=null,M=null,T=null,_.set(0,0,0),E=0,f=Y,w=Ct}return}He=He||Ie,Re=Re||ge,nt=nt||Fe,(Ie!==d||He!==b)&&(i.blendEquationSeparate(Be[Ie],Be[He]),d=Ie,b=He),(ge!==v||Fe!==g||Re!==M||nt!==T)&&(i.blendFuncSeparate(ze[ge],ze[Fe],ze[Re],ze[nt]),v=ge,g=Fe,M=Re,T=nt),(et.equals(_)===!1||Gt!==E)&&(i.blendColor(et.r,et.g,et.b,Gt),_.copy(et),E=Gt),f=Y,w=!1}function Ge(Y,Ie){Y.side===bn?ve(i.CULL_FACE):J(i.CULL_FACE);let ge=Y.side===Gn;Ie&&(ge=!ge),te(ge),Y.blending===Ro&&Y.transparent===!1?Ae(si):Ae(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let Fe=Y.stencilWrite;l.setTest(Fe),Fe&&(l.setMask(Y.stencilWriteMask),l.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),l.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ce(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(Y){A!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),A=Y)}function de(Y){Y!==Qd?(J(i.CULL_FACE),Y!==C&&(Y===_f?i.cullFace(i.BACK):Y===ep?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),C=Y}function j(Y){Y!==I&&(O&&i.lineWidth(Y),I=Y)}function ce(Y,Ie,ge){Y?(J(i.POLYGON_OFFSET_FILL),(R!==Ie||L!==ge)&&(R=Ie,L=ge,o.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,ge))):ve(i.POLYGON_OFFSET_FILL)}function se(Y){Y?J(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function ne(Y){Y===void 0&&(Y=i.TEXTURE0+D-1),V!==Y&&(i.activeTexture(Y),V=Y)}function F(Y,Ie,ge){ge===void 0&&(V===null?ge=i.TEXTURE0+D-1:ge=V);let Fe=z[ge];Fe===void 0&&(Fe={type:void 0,texture:void 0},z[ge]=Fe),(Fe.type!==Y||Fe.texture!==Ie)&&(V!==ge&&(i.activeTexture(ge),V=ge),i.bindTexture(Y,Ie||W[Y]),Fe.type=Y,Fe.texture=Ie)}function be(){let Y=z[V];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function K(){try{i.compressedTexImage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function P(){try{i.texSubImage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function G(){try{i.texSubImage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function he(){try{i.texStorage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function me(){try{i.texStorage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function fe(){try{i.texImage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function pe(){try{i.texImage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function De(Y){return p[Y]!==void 0?p[Y]:i.getParameter(Y)}function Ke(Y,Ie){p[Y]!==Ie&&(i.pixelStorei(Y,Ie),p[Y]=Ie)}function Ne(Y){Ee.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Ee.copy(Y))}function Ue(Y){we.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function Oe(Y,Ie){let ge=u.get(Ie);ge===void 0&&(ge=new WeakMap,u.set(Ie,ge));let Fe=ge.get(Y);Fe===void 0&&(Fe=i.getUniformBlockIndex(Ie,Y.name),ge.set(Y,Fe))}function tt(Y,Ie){let Fe=u.get(Ie).get(Y);a.get(Ie)!==Fe&&(i.uniformBlockBinding(Ie,Fe,Y.__bindingPointIndex),a.set(Ie,Fe))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},V=null,z={},m={},x=new WeakMap,y=[],S=null,c=!1,f=null,d=null,v=null,g=null,b=null,M=null,T=null,_=new _e(0,0,0),E=0,w=!1,A=null,C=null,I=null,R=null,L=null,Ee.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:J,disable:ve,bindFramebuffer:Pe,drawBuffers:ie,useProgram:xe,setBlending:Ae,setMaterial:Ge,setFlipSided:te,setCullFace:de,setLineWidth:j,setPolygonOffset:ce,setScissorTest:se,activeTexture:ne,bindTexture:F,unbindTexture:be,compressedTexImage2D:K,compressedTexImage3D:N,texImage2D:fe,texImage3D:pe,pixelStorei:Ke,getParameter:De,updateUBOMapping:Oe,uniformBlockBinding:tt,texStorage2D:he,texStorage3D:me,texSubImage2D:P,texSubImage3D:G,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:Ne,viewport:Ue,reset:at}}function Hb(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Le,h=new WeakMap,p=new Set,m,x=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,P){return y?new OffscreenCanvas(N,P):po("canvas")}function c(N,P,G){let Z=1,Q=K(N);if((Q.width>G||Q.height>G)&&(Z=G/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let he=Math.floor(Z*Q.width),me=Math.floor(Z*Q.height);m===void 0&&(m=S(he,me));let fe=P?S(he,me):m;return fe.width=he,fe.height=me,fe.getContext("2d").drawImage(N,0,0,he,me),lt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+he+"x"+me+")."),fe}else return"data"in N&&lt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),N;return N}function f(N){return N.generateMipmaps}function d(N){i.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(N,P,G,Z,Q,he=!1){if(N!==null){if(i[N]!==void 0)return i[N];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let me;Z&&(me=e.get("EXT_texture_norm16"),me||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=P;if(P===i.RED&&(G===i.FLOAT&&(fe=i.R32F),G===i.HALF_FLOAT&&(fe=i.R16F),G===i.UNSIGNED_BYTE&&(fe=i.R8),G===i.UNSIGNED_SHORT&&me&&(fe=me.R16_EXT),G===i.SHORT&&me&&(fe=me.R16_SNORM_EXT)),P===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(fe=i.R8UI),G===i.UNSIGNED_SHORT&&(fe=i.R16UI),G===i.UNSIGNED_INT&&(fe=i.R32UI),G===i.BYTE&&(fe=i.R8I),G===i.SHORT&&(fe=i.R16I),G===i.INT&&(fe=i.R32I)),P===i.RG&&(G===i.FLOAT&&(fe=i.RG32F),G===i.HALF_FLOAT&&(fe=i.RG16F),G===i.UNSIGNED_BYTE&&(fe=i.RG8),G===i.UNSIGNED_SHORT&&me&&(fe=me.RG16_EXT),G===i.SHORT&&me&&(fe=me.RG16_SNORM_EXT)),P===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(fe=i.RG8UI),G===i.UNSIGNED_SHORT&&(fe=i.RG16UI),G===i.UNSIGNED_INT&&(fe=i.RG32UI),G===i.BYTE&&(fe=i.RG8I),G===i.SHORT&&(fe=i.RG16I),G===i.INT&&(fe=i.RG32I)),P===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(fe=i.RGB8UI),G===i.UNSIGNED_SHORT&&(fe=i.RGB16UI),G===i.UNSIGNED_INT&&(fe=i.RGB32UI),G===i.BYTE&&(fe=i.RGB8I),G===i.SHORT&&(fe=i.RGB16I),G===i.INT&&(fe=i.RGB32I)),P===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(fe=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(fe=i.RGBA16UI),G===i.UNSIGNED_INT&&(fe=i.RGBA32UI),G===i.BYTE&&(fe=i.RGBA8I),G===i.SHORT&&(fe=i.RGBA16I),G===i.INT&&(fe=i.RGBA32I)),P===i.RGB&&(G===i.UNSIGNED_SHORT&&me&&(fe=me.RGB16_EXT),G===i.SHORT&&me&&(fe=me.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(fe=i.R11F_G11F_B10F)),P===i.RGBA){let pe=he?Sa:Lt.getTransfer(Q);G===i.FLOAT&&(fe=i.RGBA32F),G===i.HALF_FLOAT&&(fe=i.RGBA16F),G===i.UNSIGNED_BYTE&&(fe=pe===Ht?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&me&&(fe=me.RGBA16_EXT),G===i.SHORT&&me&&(fe=me.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(N,P){let G;return N?P===null||P===rs||P===Po?G=i.DEPTH24_STENCIL8:P===Bi?G=i.DEPTH32F_STENCIL8:P===Co&&(G=i.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===rs||P===Po?G=i.DEPTH_COMPONENT24:P===Bi?G=i.DEPTH_COMPONENT32F:P===Co&&(G=i.DEPTH_COMPONENT16),G}function M(N,P){return f(N)===!0||N.isFramebufferTexture&&N.minFilter!==wn&&N.minFilter!==Ot?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function T(N){let P=N.target;P.removeEventListener("dispose",T),E(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&p.delete(P)}function _(N){let P=N.target;P.removeEventListener("dispose",_),A(P)}function E(N){let P=n.get(N);if(P.__webglInit===void 0)return;let G=N.source,Z=x.get(G);if(Z){let Q=Z[P.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(N),Object.keys(Z).length===0&&x.delete(G)}n.remove(N)}function w(N){let P=n.get(N);i.deleteTexture(P.__webglTexture);let G=N.source,Z=x.get(G);delete Z[P.__cacheKey],o.memory.textures--}function A(N){let P=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(P.__webglFramebuffer[Z]))for(let Q=0;Q<P.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(P.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(P.__webglFramebuffer[Z]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[Z])}else{if(Array.isArray(P.__webglFramebuffer))for(let Z=0;Z<P.__webglFramebuffer.length;Z++)i.deleteFramebuffer(P.__webglFramebuffer[Z]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let Z=0;Z<P.__webglColorRenderbuffer.length;Z++)P.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[Z]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let G=N.textures;for(let Z=0,Q=G.length;Z<Q;Z++){let he=n.get(G[Z]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(N)}let C=0;function I(){C=0}function R(){return C}function L(N){C=N}function D(){let N=C;return N>=s.maxTextures&&lt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,N}function O(N){let P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function H(N,P){let G=n.get(N);if(N.isVideoTexture&&F(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){let Z=N.image;if(Z===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(G,N,P);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+P)}function B(N,P){let G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ve(G,N,P);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+P)}function V(N,P){let G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ve(G,N,P);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+P)}function z(N,P){let G=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){Pe(G,N,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+P)}let q={[Is]:i.REPEAT,[hs]:i.CLAMP_TO_EDGE,[bc]:i.MIRRORED_REPEAT},ee={[wn]:i.NEAREST,[Mp]:i.NEAREST_MIPMAP_NEAREST,[el]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[eu]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},Ee={[wp]:i.NEVER,[Ip]:i.ALWAYS,[Ap]:i.LESS,[Ou]:i.LEQUAL,[Rp]:i.EQUAL,[zu]:i.GEQUAL,[Cp]:i.GREATER,[Pp]:i.NOTEQUAL};function we(N,P){if(P.type===Bi&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Ot||P.magFilter===eu||P.magFilter===el||P.magFilter===Pn||P.minFilter===Ot||P.minFilter===eu||P.minFilter===el||P.minFilter===Pn)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,q[P.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,q[P.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,q[P.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ee[P.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ee[P.minFilter]),P.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Ee[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===wn||P.minFilter!==el&&P.minFilter!==Pn||P.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Me(N,P){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",T));let Z=P.source,Q=x.get(Z);Q===void 0&&(Q={},x.set(Z,Q));let he=O(P);if(he!==N.__cacheKey){Q[he]===void 0&&(Q[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[he].usedTimes++;let me=Q[N.__cacheKey];me!==void 0&&(Q[N.__cacheKey].usedTimes--,me.usedTimes===0&&w(P)),N.__cacheKey=he,N.__webglTexture=Q[he].texture}return G}function W(N,P,G){return Math.floor(Math.floor(N/G)/P)}function J(N,P,G,Z){let he=N.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,G,Z,P.data);else{he.sort((Ke,Ne)=>Ke.start-Ne.start);let me=0;for(let Ke=1;Ke<he.length;Ke++){let Ne=he[me],Ue=he[Ke],Oe=Ne.start+Ne.count,tt=W(Ue.start,P.width,4),at=W(Ne.start,P.width,4);Ue.start<=Oe+1&&tt===at&&W(Ue.start+Ue.count-1,P.width,4)===tt?Ne.count=Math.max(Ne.count,Ue.start+Ue.count-Ne.start):(++me,he[me]=Ue)}he.length=me+1;let fe=t.getParameter(i.UNPACK_ROW_LENGTH),pe=t.getParameter(i.UNPACK_SKIP_PIXELS),De=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let Ke=0,Ne=he.length;Ke<Ne;Ke++){let Ue=he[Ke],Oe=Math.floor(Ue.start/4),tt=Math.ceil(Ue.count/4),at=Oe%P.width,Y=Math.floor(Oe/P.width),Ie=tt,ge=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(i.TEXTURE_2D,0,at,Y,Ie,ge,G,Z,P.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,fe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function ve(N,P,G){let Z=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(Z=i.TEXTURE_3D);let Q=Me(N,P),he=P.source;t.bindTexture(Z,N.__webglTexture,i.TEXTURE0+G);let me=n.get(he);if(he.version!==me.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let ge=Lt.getPrimaries(Lt.workingColorSpace),Fe=P.colorSpace===ri?null:Lt.getPrimaries(P.colorSpace),He=P.colorSpace===ri||ge===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment);let pe=c(P.image,!1,s.maxTextureSize);pe=be(P,pe);let De=r.convert(P.format,P.colorSpace),Ke=r.convert(P.type),Ne=g(P.internalFormat,De,Ke,P.normalized,P.colorSpace,P.isVideoTexture);we(Z,P);let Ue,Oe=P.mipmaps,tt=P.isVideoTexture!==!0,at=me.__version===void 0||Q===!0,Y=he.dataReady,Ie=M(P,pe);if(P.isDepthTexture)Ne=b(P.format===tr,P.type),at&&(tt?t.texStorage2D(i.TEXTURE_2D,1,Ne,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Ne,pe.width,pe.height,0,De,Ke,null));else if(P.isDataTexture)if(Oe.length>0){tt&&at&&t.texStorage2D(i.TEXTURE_2D,Ie,Ne,Oe[0].width,Oe[0].height);for(let ge=0,Fe=Oe.length;ge<Fe;ge++)Ue=Oe[ge],tt?Y&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,De,Ke,Ue.data):t.texImage2D(i.TEXTURE_2D,ge,Ne,Ue.width,Ue.height,0,De,Ke,Ue.data);P.generateMipmaps=!1}else tt?(at&&t.texStorage2D(i.TEXTURE_2D,Ie,Ne,pe.width,pe.height),Y&&J(P,pe,De,Ke)):t.texImage2D(i.TEXTURE_2D,0,Ne,pe.width,pe.height,0,De,Ke,pe.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){tt&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ne,Oe[0].width,Oe[0].height,pe.depth);for(let ge=0,Fe=Oe.length;ge<Fe;ge++)if(Ue=Oe[ge],P.format!==Jn)if(De!==null)if(tt){if(Y)if(P.layerUpdates.size>0){let He=Xf(Ue.width,Ue.height,P.format,P.type);for(let Re of P.layerUpdates){let nt=Ue.data.subarray(Re*He/Ue.data.BYTES_PER_ELEMENT,(Re+1)*He/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,Re,Ue.width,Ue.height,1,De,nt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Ue.width,Ue.height,pe.depth,De,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ne,Ue.width,Ue.height,pe.depth,0,Ue.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Ue.width,Ue.height,pe.depth,De,Ke,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ne,Ue.width,Ue.height,pe.depth,0,De,Ke,Ue.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{tt&&at&&t.texStorage2D(i.TEXTURE_2D,Ie,Ne,Oe[0].width,Oe[0].height);for(let ge=0,Fe=Oe.length;ge<Fe;ge++)Ue=Oe[ge],P.format!==Jn?De!==null?tt?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,De,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ne,Ue.width,Ue.height,0,Ue.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?Y&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,De,Ke,Ue.data):t.texImage2D(i.TEXTURE_2D,ge,Ne,Ue.width,Ue.height,0,De,Ke,Ue.data)}else if(P.isDataArrayTexture)if(tt){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ne,pe.width,pe.height,pe.depth),Y)if(P.layerUpdates.size>0){let ge=Xf(pe.width,pe.height,P.format,P.type);for(let Fe of P.layerUpdates){let He=pe.data.subarray(Fe*ge/pe.data.BYTES_PER_ELEMENT,(Fe+1)*ge/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,pe.width,pe.height,1,De,Ke,He)}P.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,De,Ke,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,pe.width,pe.height,pe.depth,0,De,Ke,pe.data);else if(P.isData3DTexture)tt?(at&&t.texStorage3D(i.TEXTURE_3D,Ie,Ne,pe.width,pe.height,pe.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,De,Ke,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,pe.width,pe.height,pe.depth,0,De,Ke,pe.data);else if(P.isFramebufferTexture){if(at)if(tt)t.texStorage2D(i.TEXTURE_2D,Ie,Ne,pe.width,pe.height);else{let ge=pe.width,Fe=pe.height;for(let He=0;He<Ie;He++)t.texImage2D(i.TEXTURE_2D,He,Ne,ge,Fe,0,De,Ke,null),ge>>=1,Fe>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in i){let ge=i.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),pe.parentNode!==ge){ge.appendChild(pe),p.add(P),ge.onpaint=Fe=>{let He=Fe.changedElements;for(let Re of p)He.includes(Re.image)&&(Re.needsUpdate=!0)},ge.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pe);else{let He=i.RGBA,Re=i.RGBA,nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,He,Re,nt,pe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(tt&&at){let ge=K(Oe[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Ne,ge.width,ge.height)}for(let ge=0,Fe=Oe.length;ge<Fe;ge++)Ue=Oe[ge],tt?Y&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,De,Ke,Ue):t.texImage2D(i.TEXTURE_2D,ge,Ne,De,Ke,Ue);P.generateMipmaps=!1}else if(tt){if(at){let ge=K(pe);t.texStorage2D(i.TEXTURE_2D,Ie,Ne,ge.width,ge.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Ke,pe)}else t.texImage2D(i.TEXTURE_2D,0,Ne,De,Ke,pe);f(P)&&d(Z),me.__version=he.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function Pe(N,P,G){if(P.image.length!==6)return;let Z=Me(N,P),Q=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+G);let he=n.get(Q);if(Q.version!==he.__version||Z===!0){t.activeTexture(i.TEXTURE0+G);let me=Lt.getPrimaries(Lt.workingColorSpace),fe=P.colorSpace===ri?null:Lt.getPrimaries(P.colorSpace),pe=P.colorSpace===ri||me===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let De=P.isCompressedTexture||P.image[0].isCompressedTexture,Ke=P.image[0]&&P.image[0].isDataTexture,Ne=[];for(let Re=0;Re<6;Re++)!De&&!Ke?Ne[Re]=c(P.image[Re],!0,s.maxCubemapSize):Ne[Re]=Ke?P.image[Re].image:P.image[Re],Ne[Re]=be(P,Ne[Re]);let Ue=Ne[0],Oe=r.convert(P.format,P.colorSpace),tt=r.convert(P.type),at=g(P.internalFormat,Oe,tt,P.normalized,P.colorSpace),Y=P.isVideoTexture!==!0,Ie=he.__version===void 0||Z===!0,ge=Q.dataReady,Fe=M(P,Ue);we(i.TEXTURE_CUBE_MAP,P);let He;if(De){Y&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,at,Ue.width,Ue.height);for(let Re=0;Re<6;Re++){He=Ne[Re].mipmaps;for(let nt=0;nt<He.length;nt++){let et=He[nt];P.format!==Jn?Oe!==null?Y?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt,0,0,et.width,et.height,Oe,et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt,at,et.width,et.height,0,et.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt,0,0,et.width,et.height,Oe,tt,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt,at,et.width,et.height,0,Oe,tt,et.data)}}}else{if(He=P.mipmaps,Y&&Ie){He.length>0&&Fe++;let Re=K(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,at,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(Ke){Y?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Ne[Re].width,Ne[Re].height,Oe,tt,Ne[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,at,Ne[Re].width,Ne[Re].height,0,Oe,tt,Ne[Re].data);for(let nt=0;nt<He.length;nt++){let Gt=He[nt].image[Re].image;Y?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt+1,0,0,Gt.width,Gt.height,Oe,tt,Gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt+1,at,Gt.width,Gt.height,0,Oe,tt,Gt.data)}}else{Y?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Oe,tt,Ne[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,at,Oe,tt,Ne[Re]);for(let nt=0;nt<He.length;nt++){let et=He[nt];Y?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt+1,0,0,Oe,tt,et.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt+1,at,Oe,tt,et.image[Re])}}}f(P)&&d(i.TEXTURE_CUBE_MAP),he.__version=Q.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function ie(N,P,G,Z,Q,he){let me=r.convert(G.format,G.colorSpace),fe=r.convert(G.type),pe=g(G.internalFormat,me,fe,G.normalized,G.colorSpace),De=n.get(P),Ke=n.get(G);if(Ke.__renderTarget=P,!De.__hasExternalTextures){let Ne=Math.max(1,P.width>>he),Ue=Math.max(1,P.height>>he);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,he,pe,Ne,Ue,P.depth,0,me,fe,null):t.texImage2D(Q,he,pe,Ne,Ue,0,me,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),ne(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,Ke.__webglTexture,0,se(P)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,Ke.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(N,P,G){if(i.bindRenderbuffer(i.RENDERBUFFER,N),P.depthBuffer){let Z=P.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,he=b(P.stencilBuffer,Q),me=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ne(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(P),he,P.width,P.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(P),he,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,he,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,N)}else{let Z=P.textures;for(let Q=0;Q<Z.length;Q++){let he=Z[Q],me=r.convert(he.format,he.colorSpace),fe=r.convert(he.type),pe=g(he.internalFormat,me,fe,he.normalized,he.colorSpace);ne(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(P),pe,P.width,P.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(P),pe,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,pe,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(N,P,G){let Z=P.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(P.depthTexture);if(Q.__renderTarget=P,(!Q.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,P.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),we(i.TEXTURE_CUBE_MAP,P.depthTexture);let De=r.convert(P.depthTexture.format),Ke=r.convert(P.depthTexture.type),Ne;P.depthTexture.format===fs?Ne=i.DEPTH_COMPONENT24:P.depthTexture.format===tr&&(Ne=i.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ne,P.width,P.height,0,De,Ke,null)}}else H(P.depthTexture,0);let he=Q.__webglTexture,me=se(P),fe=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,pe=P.depthTexture.format===tr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===fs)ne(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,fe,he,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,pe,fe,he,0);else if(P.depthTexture.format===tr)ne(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,fe,he,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,pe,fe,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(N){let P=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==N.depthTexture){let Z=N.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),Z){let Q=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),P.__depthDisposeCallback=Q}P.__boundDepthTexture=Z}if(N.depthTexture&&!P.__autoAllocateDepthBuffer)if(G)for(let Z=0;Z<6;Z++)Be(P.__webglFramebuffer[Z],N,Z);else{let Z=N.texture.mipmaps;Z&&Z.length>0?Be(P.__webglFramebuffer[0],N,0):Be(P.__webglFramebuffer,N,0)}else if(G){P.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[Z]),P.__webglDepthbuffer[Z]===void 0)P.__webglDepthbuffer[Z]=i.createRenderbuffer(),xe(P.__webglDepthbuffer[Z],N,!1);else{let Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=P.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,he)}}else{let Z=N.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),xe(P.__webglDepthbuffer,N,!1);else{let Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(N,P,G){let Z=n.get(N);P!==void 0&&ie(Z.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ze(N)}function Ge(N){let P=N.texture,G=n.get(N),Z=n.get(P);N.addEventListener("dispose",_);let Q=N.textures,he=N.isWebGLCubeRenderTarget===!0,me=Q.length>1;if(me||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=P.version,o.memory.textures++),he){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(P.mipmaps&&P.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let pe=0;pe<P.mipmaps.length;pe++)G.__webglFramebuffer[fe][pe]=i.createFramebuffer()}else G.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<P.mipmaps.length;fe++)G.__webglFramebuffer[fe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(me)for(let fe=0,pe=Q.length;fe<pe;fe++){let De=n.get(Q[fe]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ne(N)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){let pe=Q[fe];G.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);let De=r.convert(pe.format,pe.colorSpace),Ke=r.convert(pe.type),Ne=g(pe.internalFormat,De,Ke,pe.normalized,pe.colorSpace,N.isXRRenderTarget===!0),Ue=se(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Ne,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),we(i.TEXTURE_CUBE_MAP,P);for(let fe=0;fe<6;fe++)if(P.mipmaps&&P.mipmaps.length>0)for(let pe=0;pe<P.mipmaps.length;pe++)ie(G.__webglFramebuffer[fe][pe],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else ie(G.__webglFramebuffer[fe],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);f(P)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let fe=0,pe=Q.length;fe<pe;fe++){let De=Q[fe],Ke=n.get(De),Ne=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ne=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Ke.__webglTexture),we(Ne,De),ie(G.__webglFramebuffer,N,De,i.COLOR_ATTACHMENT0+fe,Ne,0),f(De)&&d(Ne)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),we(fe,P),P.mipmaps&&P.mipmaps.length>0)for(let pe=0;pe<P.mipmaps.length;pe++)ie(G.__webglFramebuffer[pe],N,P,i.COLOR_ATTACHMENT0,fe,pe);else ie(G.__webglFramebuffer,N,P,i.COLOR_ATTACHMENT0,fe,0);f(P)&&d(fe),t.unbindTexture()}N.depthBuffer&&ze(N)}function te(N){let P=N.textures;for(let G=0,Z=P.length;G<Z;G++){let Q=P[G];if(f(Q)){let he=v(N),me=n.get(Q).__webglTexture;t.bindTexture(he,me),d(he),t.unbindTexture()}}}let de=[],j=[];function ce(N){if(N.samples>0){if(ne(N)===!1){let P=N.textures,G=N.width,Z=N.height,Q=i.COLOR_BUFFER_BIT,he=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(N),fe=P.length>1;if(fe)for(let De=0;De<P.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let pe=N.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let De=0;De<P.length;De++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[De]);let Ke=n.get(P[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,Q,i.NEAREST),a===!0&&(de.length=0,j.length=0,de.push(i.COLOR_ATTACHMENT0+De),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(de.push(he),j.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let De=0;De<P.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,me.__webglColorRenderbuffer[De]);let Ke=n.get(P[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&a){let P=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function se(N){return Math.min(s.maxSamples,N.samples)}function ne(N){let P=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function F(N){let P=o.render.frame;h.get(N)!==P&&(h.set(N,P),N.update())}function be(N,P){let G=N.colorSpace,Z=N.format,Q=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==Ma&&G!==ri&&(Lt.getTransfer(G)===Ht?(Z!==Jn||Q!==$n)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",G)),P}function K(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.getTextureUnits=R,this.setTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=Ae,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Vb(i,e){function t(n,s=ri){let r,o=Lt.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===nu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===iu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ff)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Df)return i.BYTE;if(n===Nf)return i.SHORT;if(n===Co)return i.UNSIGNED_SHORT;if(n===tu)return i.INT;if(n===rs)return i.UNSIGNED_INT;if(n===Bi)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===Bf)return i.ALPHA;if(n===Of)return i.RGB;if(n===Jn)return i.RGBA;if(n===fs)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===nr)return i.RED;if(n===su)return i.RED_INTEGER;if(n===ir)return i.RG;if(n===ru)return i.RG_INTEGER;if(n===ou)return i.RGBA_INTEGER;if(n===tl||n===nl||n===il||n===sl)if(o===Ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===il)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===au||n===lu||n===cu||n===uu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===au)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hu||n===fu||n===du||n===pu||n===mu||n===rl||n===gu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hu||n===fu)return o===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===du)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pu)return r.COMPRESSED_R11_EAC;if(n===mu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===rl)return r.COMPRESSED_RG11_EAC;if(n===gu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vu||n===xu||n===yu||n===_u||n===bu||n===Mu||n===Su||n===Eu||n===Tu||n===wu||n===Au||n===Ru||n===Cu||n===Pu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_u)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Su)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Au)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ru)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Iu||n===Lu||n===Du)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Iu)return o===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Du)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nu||n===Uu||n===ol||n===Fu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Po?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Gb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wb=`
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

}`,u0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Da(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ut({vertexShader:Gb,fragmentShader:Wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},h0=class extends ds{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",a=1,u=null,h=null,p=null,m=null,x=null,y=null,S=typeof XRWebGLBinding<"u",c=new u0,f={},d=t.getContextAttributes(),v=null,g=null,b=[],M=[],T=new Le,_=null,E=null,w=new Vn;w.viewport=new dt;let A=new Vn;A.viewport=new dt;let C=[w,A],I=new $c,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=b[W];return J===void 0&&(J=new vo,b[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=b[W];return J===void 0&&(J=new vo,b[W]=J),J.getGripSpace()},this.getHand=function(W){let J=b[W];return J===void 0&&(J=new vo,b[W]=J),J.getHandSpace()};function D(W){let J=M.indexOf(W.inputSource);if(J===-1)return;let ve=b[J];ve!==void 0&&(ve.update(W.inputSource,W.frame,u||o),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let W=0;W<b.length;W++){let J=M[W];J!==null&&(M[W]=null,b[W].disconnect(J))}R=null,L=null,c.reset();for(let W in f)delete f[W];if(e.setRenderTarget(v),x=null,m=null,p=null,s=null,g=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),E!==null){let W=E.camera;W.fov=E.fov,W.zoom=E.zoom,W.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){l=W,n.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),d.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Pe=null,ie=null;d.depth&&(ie=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=d.stencil?tr:fs,Pe=d.stencil?Po:rs);let xe={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};p=this.getBinding(),m=p.createProjectionLayer(xe),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),g=new Yt(m.textureWidth,m.textureHeight,{format:Jn,type:$n,depthTexture:new Zs(m.textureWidth,m.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let ve={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),g=new Yt(x.framebufferWidth,x.framebufferHeight,{format:Jn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(a),u=null,o=await s.requestReferenceSpace(l),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function H(W){for(let J=0;J<W.removed.length;J++){let ve=W.removed[J],Pe=M.indexOf(ve);Pe>=0&&(M[Pe]=null,b[Pe].disconnect(ve))}for(let J=0;J<W.added.length;J++){let ve=W.added[J],Pe=M.indexOf(ve);if(Pe===-1){for(let xe=0;xe<b.length;xe++)if(xe>=M.length){M.push(ve),Pe=xe;break}else if(M[xe]===null){M[xe]=ve,Pe=xe;break}if(Pe===-1)break}let ie=b[Pe];ie&&ie.connect(ve)}}let B=new k,V=new k;function z(W,J,ve){B.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(ve.matrixWorld);let Pe=B.distanceTo(V),ie=J.projectionMatrix.elements,xe=ve.projectionMatrix.elements,Be=ie[14]/(ie[10]-1),ze=ie[14]/(ie[10]+1),Ae=(ie[9]+1)/ie[5],Ge=(ie[9]-1)/ie[5],te=(ie[8]-1)/ie[0],de=(xe[8]+1)/xe[0],j=Be*te,ce=Be*de,se=Pe/(-te+de),ne=se*-te;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ne),W.translateZ(se),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ie[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let F=Be+se,be=ze+se,K=j-ne,N=ce+(Pe-ne),P=Ae*ze/be*F,G=Ge*ze/be*F;W.projectionMatrix.makePerspective(K,N,P,G,F,be),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function q(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let J=W.near,ve=W.far;c.texture!==null&&(c.depthNear>0&&(J=c.depthNear),c.depthFar>0&&(ve=c.depthFar)),I.near=A.near=w.near=J,I.far=A.far=w.far=ve,(R!==I.near||L!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),R=I.near,L=I.far),I.layers.mask=W.layers.mask|6,w.layers.mask=I.layers.mask&-5,A.layers.mask=I.layers.mask&-3;let Pe=W.parent,ie=I.cameras;q(I,Pe);for(let xe=0;xe<ie.length;xe++)q(ie[xe],Pe);ie.length===2?z(I,w,A):I.projectionMatrix.copy(w.projectionMatrix),E===null&&W.isPerspectiveCamera&&(E={camera:W,fov:W.fov,zoom:W.zoom}),ee(W,I,Pe)};function ee(W,J,ve){ve===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ea*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(m===null&&x===null))return a},this.setFoveation=function(W){a=W,m!==null&&(m.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(I)},this.getCameraTexture=function(W){return f[W]};let Ee=null;function we(W,J){if(h=J.getViewerPose(u||o),y=J,h!==null){let ve=h.views;x!==null&&(e.setRenderTargetFramebuffer(g,x.framebuffer),e.setRenderTarget(g));let Pe=!1;ve.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let ze=0;ze<ve.length;ze++){let Ae=ve[ze],Ge=null;if(x!==null)Ge=x.getViewport(Ae);else{let de=p.getViewSubImage(m,Ae);Ge=de.viewport,ze===0&&(e.setRenderTargetTextures(g,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(g))}let te=C[ze];te===void 0&&(te=new Vn,te.layers.enable(ze),te.viewport=new dt,C[ze]=te),te.matrix.fromArray(Ae.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Ae.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),ze===0&&(I.matrix.copy(te.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push(te)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let ze=p.getDepthInformation(ve[0]);ze&&ze.isValid&&ze.texture&&c.init(ze,s.renderState)}if(ie&&ie.includes("camera-access")&&S){e.state.unbindTexture(),p=n.getBinding();for(let ze=0;ze<ve.length;ze++){let Ae=ve[ze].camera;if(Ae){let Ge=f[Ae];Ge||(Ge=new Da,f[Ae]=Ge);let te=p.getCameraImage(Ae);Ge.sourceTexture=te}}}}for(let ve=0;ve<b.length;ve++){let Pe=M[ve],ie=b[ve];Pe!==null&&ie!==void 0&&ie.update(Pe,J,u||o)}Ee&&Ee(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),y=null}let Me=new hm;Me.setAnimationLoop(we),this.setAnimationLoop=function(W){Ee=W},this.dispose=function(){}}},Xb=new Qe,vm=new pt;vm.set(-1,0,0,0,1,0,0,0,1);function qb(i,e){function t(c,f){c.matrixAutoUpdate===!0&&c.updateMatrix(),f.value.copy(c.matrix)}function n(c,f){f.color.getRGB(c.fogColor.value,Vf(i)),f.isFog?(c.fogNear.value=f.near,c.fogFar.value=f.far):f.isFogExp2&&(c.fogDensity.value=f.density)}function s(c,f,d,v,g){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(c,f):f.isMeshLambertMaterial?(r(c,f),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(c,f),p(c,f)):f.isMeshPhongMaterial?(r(c,f),h(c,f),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(c,f),m(c,f),f.isMeshPhysicalMaterial&&x(c,f,g)):f.isMeshMatcapMaterial?(r(c,f),y(c,f)):f.isMeshDepthMaterial?r(c,f):f.isMeshDistanceMaterial?(r(c,f),S(c,f)):f.isMeshNormalMaterial?r(c,f):f.isLineBasicMaterial?(o(c,f),f.isLineDashedMaterial&&l(c,f)):f.isPointsMaterial?a(c,f,d,v):f.isSpriteMaterial?u(c,f):f.isShadowMaterial?(c.color.value.copy(f.color),c.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(c,f){c.opacity.value=f.opacity,f.color&&c.diffuse.value.copy(f.color),f.emissive&&c.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(c.map.value=f.map,t(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.bumpMap&&(c.bumpMap.value=f.bumpMap,t(f.bumpMap,c.bumpMapTransform),c.bumpScale.value=f.bumpScale,f.side===Gn&&(c.bumpScale.value*=-1)),f.normalMap&&(c.normalMap.value=f.normalMap,t(f.normalMap,c.normalMapTransform),c.normalScale.value.copy(f.normalScale),f.side===Gn&&c.normalScale.value.negate()),f.displacementMap&&(c.displacementMap.value=f.displacementMap,t(f.displacementMap,c.displacementMapTransform),c.displacementScale.value=f.displacementScale,c.displacementBias.value=f.displacementBias),f.emissiveMap&&(c.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,c.emissiveMapTransform)),f.specularMap&&(c.specularMap.value=f.specularMap,t(f.specularMap,c.specularMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest);let d=e.get(f),v=d.envMap,g=d.envMapRotation;v&&(c.envMap.value=v,c.envMapRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(g)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(vm),c.reflectivity.value=f.reflectivity,c.ior.value=f.ior,c.refractionRatio.value=f.refractionRatio),f.lightMap&&(c.lightMap.value=f.lightMap,c.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,c.lightMapTransform)),f.aoMap&&(c.aoMap.value=f.aoMap,c.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,c.aoMapTransform))}function o(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,f.map&&(c.map.value=f.map,t(f.map,c.mapTransform))}function l(c,f){c.dashSize.value=f.dashSize,c.totalSize.value=f.dashSize+f.gapSize,c.scale.value=f.scale}function a(c,f,d,v){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.size.value=f.size*d,c.scale.value=v*.5,f.map&&(c.map.value=f.map,t(f.map,c.uvTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function u(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.rotation.value=f.rotation,f.map&&(c.map.value=f.map,t(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function h(c,f){c.specular.value.copy(f.specular),c.shininess.value=Math.max(f.shininess,1e-4)}function p(c,f){f.gradientMap&&(c.gradientMap.value=f.gradientMap)}function m(c,f){c.metalness.value=f.metalness,f.metalnessMap&&(c.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,c.metalnessMapTransform)),c.roughness.value=f.roughness,f.roughnessMap&&(c.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,c.roughnessMapTransform)),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)}function x(c,f,d){c.ior.value=f.ior,f.sheen>0&&(c.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),c.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(c.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,c.sheenColorMapTransform)),f.sheenRoughnessMap&&(c.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,c.sheenRoughnessMapTransform))),f.clearcoat>0&&(c.clearcoat.value=f.clearcoat,c.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(c.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,c.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(c.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Gn&&c.clearcoatNormalScale.value.negate())),f.dispersion>0&&(c.dispersion.value=f.dispersion),f.retroreflectivity>0&&(c.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(c.iridescence.value=f.iridescence,c.iridescenceIOR.value=f.iridescenceIOR,c.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(c.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,c.iridescenceMapTransform)),f.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),f.transmission>0&&(c.transmission.value=f.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),f.transmissionMap&&(c.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,c.transmissionMapTransform)),c.thickness.value=f.thickness,f.thicknessMap&&(c.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=f.attenuationDistance,c.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(c.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(c.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=f.specularIntensity,c.specularColor.value.copy(f.specularColor),f.specularColorMap&&(c.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,c.specularColorMapTransform)),f.specularIntensityMap&&(c.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,c.specularIntensityMapTransform))}function y(c,f){f.matcap&&(c.matcap.value=f.matcap)}function S(c,f){let d=e.get(f).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yb(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(g,b){let M=b.program;n.uniformBlockBinding(g,M)}function u(g,b){let M=s[g.id];M===void 0&&(c(g),M=h(g),s[g.id]=M,g.addEventListener("dispose",d));let T=b.program;n.updateUBOMapping(g,T);let _=e.render.frame;r[g.id]!==_&&(m(g),r[g.id]=_)}function h(g){let b=p();g.__bindingPointIndex=b;let M=i.createBuffer(),T=g.__size,_=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function p(){for(let g=0;g<l;g++)if(o.indexOf(g)===-1)return o.push(g),g;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(g){let b=s[g.id],M=g.uniforms,T=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,E=M.length;_<E;_++){let w=M[_];if(Array.isArray(w))for(let A=0,C=w.length;A<C;A++)x(w[A],_,A,T);else x(w,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(g,b,M,T){if(S(g,b,M,T)===!0){let _=g.__offset,E=g.value;if(Array.isArray(E)){let w=0;for(let A=0;A<E.length;A++){let C=E[A],I=f(C);y(C,g.__data,w),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(w+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(E,g.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,g.__data)}}function y(g,b,M){typeof g=="number"||typeof g=="boolean"?b[0]=g:g.isMatrix3?(b[0]=g.elements[0],b[1]=g.elements[1],b[2]=g.elements[2],b[3]=0,b[4]=g.elements[3],b[5]=g.elements[4],b[6]=g.elements[5],b[7]=0,b[8]=g.elements[6],b[9]=g.elements[7],b[10]=g.elements[8],b[11]=0):ArrayBuffer.isView(g)?b.set(new g.constructor(g.buffer,g.byteOffset,b.length)):g.toArray(b,M)}function S(g,b,M,T){let _=g.value,E=b+"_"+M;if(T[E]===void 0)return typeof _=="number"||typeof _=="boolean"?T[E]=_:ArrayBuffer.isView(_)?T[E]=_.slice():T[E]=_.clone(),!0;{let w=T[E];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return T[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function c(g){let b=g.uniforms,M=0,T=16;for(let E=0,w=b.length;E<w;E++){let A=Array.isArray(b[E])?b[E]:[b[E]];for(let C=0,I=A.length;C<I;C++){let R=A[C],L=Array.isArray(R.value)?R.value:[R.value];for(let D=0,O=L.length;D<O;D++){let H=L[D],B=f(H),V=M%T,z=V%B.boundary,q=V+z;M+=z,q!==0&&T-q<B.storage&&(M+=T-q),R.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=M,M+=B.storage}}}let _=M%T;return _>0&&(M+=T-_),g.__size=M,g.__cache={},this}function f(g){let b={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(b.boundary=4,b.storage=4):g.isVector2?(b.boundary=8,b.storage=8):g.isVector3||g.isColor?(b.boundary=16,b.storage=12):g.isVector4?(b.boundary=16,b.storage=16):g.isMatrix3?(b.boundary=48,b.storage=48):g.isMatrix4?(b.boundary=64,b.storage=64):g.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(b.boundary=16,b.storage=g.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",g),b}function d(g){let b=g.target;b.removeEventListener("dispose",d);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function v(){for(let g in s)i.deleteBuffer(s[g]);o=[],s={},r={}}return{bind:a,update:u,dispose:v}}var Zb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vs=null;function Kb(){return vs===null&&(vs=new ts(Zb,16,16,ir,Rn),vs.name="DFG_LUT",vs.minFilter=Ot,vs.magFilter=Ot,vs.wrapS=hs,vs.wrapT=hs,vs.generateMipmaps=!1,vs.needsUpdate=!0),vs}var Wu=class{constructor(e={}){let{canvas:t=Dp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:x=$n}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=o;let S=x,c=new Set([ou,ru,su]),f=new Set([$n,rs,Co,Po,nu,iu]),d=new Uint32Array(4),v=new Int32Array(4),g=new k,b=null,M=null,T=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,A=!1,C=null,I=null,R=null,L=null;this._outputColorSpace=qt;let D=0,O=0,H=null,B=-1,V=null,z=new dt,q=new dt,ee=null,Ee=new _e(0),we=0,Me=t.width,W=t.height,J=1,ve=null,Pe=null,ie=new dt(0,0,Me,W),xe=new dt(0,0,Me,W),Be=!1,ze=new yo,Ae=!1,Ge=!1,te=new Qe,de=new k,j=new dt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function ne(){return H===null?J:1}let F=n;function be(U,$){return t.getContext(U,$)}let K,N,P,G,Z,Q,he,me,fe,pe,De,Ke,Ne,Ue,Oe,tt,at,Y,Ie,ge,Fe,He,Re;try{let U={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Ct,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),F===null){let $="webgl2";if(F=be($,U),F===null)throw be($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(U){throw t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),ft("WebGLRenderer: "+U.message),U}function nt(){K=new n_(F),K.init(),Fe=new Vb(F,K),N=new qy(F,K,e,Fe),P=new kb(F,K),N.reversedDepthBuffer&&m&&P.buffers.depth.setReversed(!0),I=F.createFramebuffer(),R=F.createFramebuffer(),L=F.createFramebuffer(),G=new r_(F),Z=new wb,Q=new Hb(F,K,P,Z,N,Fe,G),he=new t_(w),me=new ax(F),He=new Wy(F,me),fe=new i_(F,me,G,He),pe=new a_(F,fe,me,He,G),Y=new o_(F,N,Q),Oe=new Yy(Z),De=new Tb(w,he,K,N,He,Oe),Ke=new qb(w,Z),Ne=new Rb,Ue=new Nb(K),at=new Gy(w,he,P,pe,y,a),tt=new zb(w,pe,N),Re=new Yb(F,G,N,P),Ie=new Xy(F,K,G),ge=new s_(F,K,G),G.programs=De.programs,w.capabilities=N,w.extensions=K,w.properties=Z,w.renderLists=Ne,w.shadowMap=tt,w.state=P,w.info=G}S!==$n&&(E=new c_(S,t.width,t.height,l,s,r));let et=new h0(w,F);this.xr=et,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let U=K.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=K.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(U){U!==void 0&&(J=U,this.setSize(Me,W,!1))},this.getSize=function(U){return U.set(Me,W)},this.setSize=function(U,$,re=!0){if(et.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=U,W=$,t.width=Math.floor(U*J),t.height=Math.floor($*J),re===!0&&(t.style.width=U+"px",t.style.height=$+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,U,$)},this.getDrawingBufferSize=function(U){return U.set(Me*J,W*J).floor()},this.setDrawingBufferSize=function(U,$,re){Me=U,W=$,J=re,t.width=Math.floor(U*re),t.height=Math.floor($*re),this.setViewport(0,0,U,$)},this.setEffects=function(U){if(S===$n){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let $=0;$<U.length;$++)if(U[$].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(z)},this.getViewport=function(U){return U.copy(ie)},this.setViewport=function(U,$,re,ae){U.isVector4?ie.set(U.x,U.y,U.z,U.w):ie.set(U,$,re,ae),P.viewport(z.copy(ie).multiplyScalar(J).round())},this.getScissor=function(U){return U.copy(xe)},this.setScissor=function(U,$,re,ae){U.isVector4?xe.set(U.x,U.y,U.z,U.w):xe.set(U,$,re,ae),P.scissor(q.copy(xe).multiplyScalar(J).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(U){P.setScissorTest(Be=U)},this.setOpaqueSort=function(U){ve=U},this.setTransparentSort=function(U){Pe=U},this.getClearColor=function(U){return U.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(U=!0,$=!0,re=!0){let ae=0;if(U){let le=!1;if(H!==null){let qe=H.texture.format;le=c.has(qe)}if(le){let qe=H.texture.type,$e=f.has(qe),We=at.getClearColor(),Xe=at.getClearAlpha(),Ve=We.r,xt=We.g,bt=We.b;$e?(d[0]=Ve,d[1]=xt,d[2]=bt,d[3]=Xe,F.clearBufferuiv(F.COLOR,0,d)):(v[0]=Ve,v[1]=xt,v[2]=bt,v[3]=Xe,F.clearBufferiv(F.COLOR,0,v))}else ae|=F.COLOR_BUFFER_BIT}$&&(ae|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ae|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&F.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),C=U},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),at.dispose(),Ne.dispose(),Ue.dispose(),Z.dispose(),he.dispose(),pe.dispose(),He.dispose(),Re.dispose(),De.dispose(),et.dispose(),et.removeEventListener("sessionstart",Ll),et.removeEventListener("sessionend",Pt),vt.stop()};function Gt(U){U.preventDefault(),kf("WebGLRenderer: Context Lost."),A=!0}function Ct(){kf("WebGLRenderer: Context Restored."),A=!1;let U=G.autoReset,$=tt.enabled,re=tt.autoUpdate,ae=tt.needsUpdate,le=tt.type;nt(),G.autoReset=U,tt.enabled=$,tt.autoUpdate=re,tt.needsUpdate=ae,tt.type=le}function Hn(U){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function ci(U){let $=U.target;$.removeEventListener("dispose",ci),ta($)}function ta(U){ue(U),Z.remove(U)}function ue(U){let $=Z.get(U).programs;$!==void 0&&($.forEach(function(re){De.releaseProgram(re)}),U.isShaderMaterial&&De.releaseShaderCache(U))}this.renderBufferDirect=function(U,$,re,ae,le,qe){$===null&&($=ce);let $e=le.isMesh&&le.matrixWorld.determinantAffine()<0,We=Mh(U,$,re,ae,le);P.setMaterial(ae,$e);let Xe=re.index,Ve=1;if(ae.wireframe===!0){if(Xe=fe.getWireframeAttribute(re),Xe===void 0)return;Ve=2}let xt=re.drawRange,bt=re.attributes.position,je=xt.start*Ve,Ut=(xt.start+xt.count)*Ve;qe!==null&&(je=Math.max(je,qe.start*Ve),Ut=Math.min(Ut,(qe.start+qe.count)*Ve)),Xe!==null?(je=Math.max(je,0),Ut=Math.min(Ut,Xe.count)):bt!=null&&(je=Math.max(je,0),Ut=Math.min(Ut,bt.count));let pn=Ut-je;if(pn<0||pn===1/0)return;He.setup(le,ae,We,re,Xe);let Xt,kt=Ie;if(Xe!==null&&(Xt=me.get(Xe),kt=ge,kt.setIndex(Xt)),le.isMesh)ae.wireframe===!0?(P.setLineWidth(ae.wireframeLinewidth*ne()),kt.setMode(F.LINES)):kt.setMode(F.TRIANGLES);else if(le.isLine){let _t=ae.linewidth;_t===void 0&&(_t=1),P.setLineWidth(_t*ne()),le.isLineSegments?kt.setMode(F.LINES):le.isLineLoop?kt.setMode(F.LINE_LOOP):kt.setMode(F.LINE_STRIP)}else le.isPoints?kt.setMode(F.POINTS):le.isSprite&&kt.setMode(F.TRIANGLES);if(le.isBatchedMesh)if(K.get("WEBGL_multi_draw"))kt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{let _t=le._multiDrawStarts,Ze=le._multiDrawCounts,Nn=le._multiDrawCount,It=Xe?me.get(Xe).bytesPerElement:1,ei=Z.get(ae).currentProgram.getUniforms();for(let Li=0;Li<Nn;Li++)ei.setValue(F,"_gl_DrawID",Li),kt.render(_t[Li]/It,Ze[Li])}else if(le.isInstancedMesh)kt.renderInstances(je,pn,le.count);else if(re.isInstancedBufferGeometry){let _t=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ze=Math.min(re.instanceCount,_t);kt.renderInstances(je,pn,Ze)}else kt.render(je,pn)};function Qn(U,$,re,ae){C!==null&&U.isNodeMaterial&&C.setObject(ae,U),Ae===!0&&Oe.setState(U,re,!1),U.transparent===!0&&U.side===bn&&U.forceSinglePass===!1?(U.side=Gn,U.needsUpdate=!0,Dn(U,$,ae),U.side=gs,U.needsUpdate=!0,Dn(U,$,ae),U.side=bn):Dn(U,$,ae)}this.compile=function(U,$,re=null){re===null&&(re=U),C!==null&&C.renderStart(U,$,re),M=Ue.get(re),M.init($),_.push(M),re.traverseVisible(function(le){le.isLight&&le.layers.test($.layers)&&(M.pushLight(le),le.castShadow&&M.pushShadow(le))}),U!==re&&U.traverseVisible(function(le){le.isLight&&le.layers.test($.layers)&&(M.pushLight(le),le.castShadow&&M.pushShadow(le))}),M.setupLights(),C!==null&&C.updateLights(M.state.lightsArray),Ge=this.localClippingEnabled,Ae=Oe.init(this.clippingPlanes,Ge),Ae===!0&&Oe.setGlobalState(this.clippingPlanes,$),C!==null&&tt.render(M.state.shadowsArray,re,$);let ae=new Set;return U.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;let qe=le.material;if(qe)if(Array.isArray(qe))for(let $e=0;$e<qe.length;$e++){let We=qe[$e];Qn(We,re,$,le),ae.add(We)}else Qn(qe,re,$,le),ae.add(qe)}),M=_.pop(),C!==null&&C.renderEnd(),ae},this.compileAsync=function(U,$,re=null){let ae=this.compile(U,$,re);return new Promise(le=>{function qe(){if(ae.forEach(function($e){let Xe=Z.get($e).currentProgram;(Xe===void 0||Xe.isReady())&&ae.delete($e)}),ae.size===0){le(U);return}setTimeout(qe,10)}K.get("KHR_parallel_shader_compile")!==null?qe():setTimeout(qe,10)})};let na=null;function bh(U){na&&na(U)}function Ll(){vt.stop()}function Pt(){vt.start()}let vt=new hm;vt.setAnimationLoop(bh),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(U){na=U,et.setAnimationLoop(U),U===null?vt.stop():vt.start()},et.addEventListener("sessionstart",Ll),et.addEventListener("sessionend",Pt),this.render=function(U,$){if($!==void 0&&$.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;C!==null&&C.renderStart(U,$);let re=et.enabled===!0&&et.isPresenting===!0,ae=E!==null&&(H===null||re)&&E.begin(w,H);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera($),$=et.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,$,H),M=Ue.get(U,_.length),M.init($),M.state.textureUnits=Q.getTextureUnits(),_.push(M),te.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ze.setFromProjectionMatrix(te,es,$.reversedDepth),Ge=this.localClippingEnabled,Ae=Oe.init(this.clippingPlanes,Ge),b=Ne.get(U,T.length),b.init(),T.push(b),et.enabled===!0&&et.isPresenting===!0){let $e=w.xr.getDepthSensingMesh();$e!==null&&Ft($e,$,-1/0,w.sortObjects)}Ft(U,$,0,w.sortObjects),b.finish(),C!==null&&C.updateLights(M.state.lightsArray),w.sortObjects===!0&&b.sort(ve,Pe),se=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,se&&at.addToRenderList(b,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ae===!0&&Oe.beginShadows();let le=M.state.shadowsArray;if(tt.render(le,U,$),Ae===!0&&Oe.endShadows(),(ae&&E.hasRenderPass())===!1){let $e=b.opaque,We=b.transmissive;if(M.setupLights(),$.isArrayCamera){let Xe=$.cameras;if(We.length>0)for(let Ve=0,xt=Xe.length;Ve<xt;Ve++){let bt=Xe[Ve];Dl($e,We,U,bt)}se&&at.render(U);for(let Ve=0,xt=Xe.length;Ve<xt;Ve++){let bt=Xe[Ve];Bt(b,U,bt,bt.viewport)}}else We.length>0&&Dl($e,We,U,$),se&&at.render(U),Bt(b,U,$)}H!==null&&O===0&&(Q.updateMultisampleRenderTarget(H),Q.updateRenderTargetMipmap(H)),ae&&E.end(w),U.isScene===!0&&U.onAfterRender(w,U,$),He.resetDefaultState(),B=-1,V=null,_.pop(),_.length>0?(M=_[_.length-1],Q.setTextureUnits(M.state.textureUnits),Ae===!0&&Oe.setGlobalState(w.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,C!==null&&C.renderEnd()};function Ft(U,$,re,ae){if(U.visible===!1)return;if(U.layers.test($.layers)){if(U.isGroup)re=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update($);else if(U.isLightProbeGrid)M.pushLightProbeGrid(U);else if(U.isLight)M.pushLight(U),U.castShadow&&M.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(ze)){ae&&j.setFromMatrixPosition(U.matrixWorld).applyMatrix4(te);let $e=pe.update(U),We=U.material;We.visible&&b.push(U,$e,We,re,j.z,null,$)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(ze))){let $e=pe.update(U),We=U.material;if(ae&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),j.copy(U.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),j.copy($e.boundingSphere.center)),j.applyMatrix4(U.matrixWorld).applyMatrix4(te)),Array.isArray(We)){let Xe=$e.groups;for(let Ve=0,xt=Xe.length;Ve<xt;Ve++){let bt=Xe[Ve],je=We[bt.materialIndex];je&&je.visible&&b.push(U,$e,je,re,j.z,bt,$)}}else We.visible&&b.push(U,$e,We,re,j.z,null,$)}}let qe=U.children;for(let $e=0,We=qe.length;$e<We;$e++)Ft(qe[$e],$,re,ae)}function Bt(U,$,re,ae){let{opaque:le,transmissive:qe,transparent:$e}=U;M.setupLightsView(re),Ae===!0&&Oe.setGlobalState(w.clippingPlanes,re),ae&&P.viewport(z.copy(ae)),le.length>0&&ls(le,$,re),qe.length>0&&ls(qe,$,re),$e.length>0&&ls($e,$,re),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Dl(U,$,re,ae){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[ae.id]===void 0){let je=K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[ae.id]=new Yt(1,1,{generateMipmaps:!0,type:je?Rn:$n,minFilter:Pn,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}let qe=M.state.transmissionRenderTarget[ae.id],$e=ae.viewport||z;qe.setSize($e.z*w.transmissionResolutionScale,$e.w*w.transmissionResolutionScale);let We=w.getRenderTarget(),Xe=w.getActiveCubeFace(),Ve=w.getActiveMipmapLevel();w.setRenderTarget(qe),w.getClearColor(Ee),we=w.getClearAlpha(),we<1&&w.setClearColor(16777215,.5),w.clear(),se&&at.render(re);let xt=w.toneMapping;w.toneMapping=ss;let bt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),M.setupLightsView(ae),Ae===!0&&Oe.setGlobalState(w.clippingPlanes,ae),ls(U,re,ae),Q.updateMultisampleRenderTarget(qe),Q.updateRenderTargetMipmap(qe),K.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ut=0,pn=$.length;Ut<pn;Ut++){let Xt=$[Ut],{object:kt,geometry:_t,material:Ze,group:Nn}=Xt;if(Ze.side===bn&&kt.layers.test(ae.layers)){let It=Ze.side;Ze.side=Gn,Ze.needsUpdate=!0,ks(kt,re,ae,_t,Ze,Nn),Ze.side=It,Ze.needsUpdate=!0,je=!0}}je===!0&&(Q.updateMultisampleRenderTarget(qe),Q.updateRenderTargetMipmap(qe))}w.setRenderTarget(We,Xe,Ve),w.setClearColor(Ee,we),bt!==void 0&&(ae.viewport=bt),w.toneMapping=xt}function ls(U,$,re){let ae=$.isScene===!0?$.overrideMaterial:null;for(let le=0,qe=U.length;le<qe;le++){let $e=U[le],{object:We,geometry:Xe,group:Ve}=$e,xt=$e.material;xt.allowOverride===!0&&ae!==null&&(xt=ae),We.layers.test(re.layers)&&ks(We,$,re,Xe,xt,Ve)}}function ks(U,$,re,ae,le,qe){C!==null&&le.isNodeMaterial&&C.setObject(U,le),U.onBeforeRender(w,$,re,ae,le,qe),U.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),le.onBeforeRender(w,$,re,ae,U,qe),le.transparent===!0&&le.side===bn&&le.forceSinglePass===!1?(le.side=Gn,le.needsUpdate=!0,w.renderBufferDirect(re,$,ae,le,U,qe),le.side=gs,le.needsUpdate=!0,w.renderBufferDirect(re,$,ae,le,U,qe),le.side=bn):w.renderBufferDirect(re,$,ae,le,U,qe),U.onAfterRender(w,$,re,ae,le,qe)}function Dn(U,$,re){$.isScene!==!0&&($=ce);let ae=Z.get(U),le=M.state.lights,qe=M.state.shadowsArray,$e=le.state.version,We=De.getParameters(U,le.state,qe,$,re,M.state.lightProbeGridArray),Xe=De.getProgramCacheKey(We),Ve=ae.programs;ae.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?$.environment:null,ae.fog=$.fog;let xt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;ae.envMap=he.get(U.envMap||ae.environment,xt),ae.envMapRotation=ae.environment!==null&&U.envMap===null?$.environmentRotation:U.envMapRotation,Ve===void 0&&(U.addEventListener("dispose",ci),Ve=new Map,ae.programs=Ve);let bt=Ve.get(Xe);if(bt!==void 0){if(ae.currentProgram===bt&&ae.lightsStateVersion===$e)return Vr(U,We),bt}else We.uniforms=De.getUniforms(U),C!==null&&U.isNodeMaterial&&C.build(U,re,We),U.onBeforeCompile(We,w),bt=De.acquireProgram(We,Xe),Ve.set(Xe,bt),ae.uniforms=We.uniforms;let je=ae.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(je.clippingPlanes=Oe.uniform),Vr(U,We),ae.needsLights=Eh(U),ae.lightsStateVersion=$e,ae.needsLights&&(je.ambientLightColor.value=le.state.ambient,je.lightProbe.value=le.state.probe,je.sunLights.value=le.state.sun,je.sunLightShadows.value=le.state.sunShadow,je.directionalLights.value=le.state.directional,je.directionalLightShadows.value=le.state.directionalShadow,je.spotLights.value=le.state.spot,je.spotLightShadows.value=le.state.spotShadow,je.rectAreaLights.value=le.state.rectArea,je.ltc_1.value=le.state.rectAreaLTC1,je.ltc_2.value=le.state.rectAreaLTC2,je.pointLights.value=le.state.point,je.pointLightShadows.value=le.state.pointShadow,je.hemisphereLights.value=le.state.hemi,je.sunShadowMatrix.value=le.state.sunShadowMatrix,je.sunShadowCascade.value=le.state.sunShadowCascade,je.directionalShadowMatrix.value=le.state.directionalShadowMatrix,je.spotLightMatrix.value=le.state.spotLightMatrix,je.spotLightMap.value=le.state.spotLightMap,je.pointShadowMatrix.value=le.state.pointShadowMatrix),ae.lightProbeGrid=M.state.lightProbeGridArray.length>0,ae.currentProgram=bt,ae.uniformsList=null,bt}function dr(U){if(U.uniformsList===null){let $=U.currentProgram.getUniforms();U.uniformsList=No.seqWithValue($.seq,U.uniforms)}return U.uniformsList}function Vr(U,$){let re=Z.get(U);re.outputColorSpace=$.outputColorSpace,re.batching=$.batching,re.batchingColor=$.batchingColor,re.instancing=$.instancing,re.instancingColor=$.instancingColor,re.instancingMorph=$.instancingMorph,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}function ia(U,$){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;g.setFromMatrixPosition($.matrixWorld);for(let re=0,ae=U.length;re<ae;re++){let le=U[re];if(le.texture!==null&&le.boundingBox.containsPoint(g))return le}return null}function Mh(U,$,re,ae,le){$.isScene!==!0&&($=ce),Q.resetTextureUnits();let qe=$.fog,$e=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?$.environment:null,We=H===null?w.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Lt.workingColorSpace,Xe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Ve=he.get(ae.envMap||$e,Xe),xt=ae.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,bt=!!re.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),je=!!re.morphAttributes.position,Ut=!!re.morphAttributes.normal,pn=!!re.morphAttributes.color,Xt=ss;ae.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Xt=w.toneMapping);let kt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,_t=kt!==void 0?kt.length:0,Ze=Z.get(ae),Nn=M.state.lights;if(Ae===!0&&(Ge===!0||U!==V)){let Wt=U===V&&ae.id===B;Oe.setState(ae,U,Wt)}let It=!1;ae.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Nn.state.version||Ze.outputColorSpace!==We||le.isBatchedMesh&&Ze.batching===!1||!le.isBatchedMesh&&Ze.batching===!0||le.isBatchedMesh&&Ze.batchingColor===!0&&le._colorsTexture===null||le.isBatchedMesh&&Ze.batchingColor===!1&&le._colorsTexture!==null||le.isInstancedMesh&&Ze.instancing===!1||!le.isInstancedMesh&&Ze.instancing===!0||le.isSkinnedMesh&&Ze.skinning===!1||!le.isSkinnedMesh&&Ze.skinning===!0||le.isInstancedMesh&&Ze.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Ze.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Ze.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Ze.instancingMorph===!1&&le.morphTexture!==null||Ze.envMap!==Ve||ae.fog===!0&&Ze.fog!==qe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Oe.numPlanes||Ze.numIntersection!==Oe.numIntersection)||Ze.vertexAlphas!==xt||Ze.vertexTangents!==bt||Ze.morphTargets!==je||Ze.morphNormals!==Ut||Ze.morphColors!==pn||Ze.toneMapping!==Xt||Ze.morphTargetsCount!==_t||!!Ze.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(It=!0):(It=!0,Ze.__version=ae.version);let ei=Ze.currentProgram;It===!0&&(ei=Dn(ae,$,le),C&&ae.isNodeMaterial&&C.onUpdateProgram(ae,ei,Ze));let Li=!1,cs=!1,Di=!1,zt=ei.getUniforms(),Zt=Ze.uniforms;if(P.useProgram(ei.program)&&(Li=!0,cs=!0,Di=!0),ae.id!==B&&(B=ae.id,cs=!0),Ze.needsLights){let Wt=ia(M.state.lightProbeGridArray,le);Ze.lightProbeGrid!==Wt&&(Ze.lightProbeGrid=Wt,cs=!0)}if(Li||V!==U){P.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),zt.setValue(F,"projectionMatrix",U.projectionMatrix),zt.setValue(F,"viewMatrix",U.matrixWorldInverse);let yi=zt.map.cameraPosition;yi!==void 0&&yi.setValue(F,de.setFromMatrixPosition(U.matrixWorld)),N.logarithmicDepthBuffer&&zt.setValue(F,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&zt.setValue(F,"isOrthographic",U.isOrthographicCamera===!0),V!==U&&(V=U,cs=!0,Di=!0)}if(Ze.needsLights&&(Nn.state.sunShadowMap.length>0&&zt.setValue(F,"sunShadowMap",Nn.state.sunShadowMap,Q),Nn.state.directionalShadowMap.length>0&&zt.setValue(F,"directionalShadowMap",Nn.state.directionalShadowMap,Q),Nn.state.spotShadowMap.length>0&&zt.setValue(F,"spotShadowMap",Nn.state.spotShadowMap,Q),Nn.state.pointShadowMap.length>0&&zt.setValue(F,"pointShadowMap",Nn.state.pointShadowMap,Q)),le.isSkinnedMesh){zt.setOptional(F,le,"bindMatrix"),zt.setOptional(F,le,"bindMatrixInverse");let Wt=le.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),zt.setValue(F,"boneTexture",Wt.boneTexture,Q))}le.isBatchedMesh&&(zt.setOptional(F,le,"batchingTexture"),zt.setValue(F,"batchingTexture",le._matricesTexture,Q),zt.setOptional(F,le,"batchingIdTexture"),zt.setValue(F,"batchingIdTexture",le._indirectTexture,Q),zt.setOptional(F,le,"batchingColorTexture"),le._colorsTexture!==null&&zt.setValue(F,"batchingColorTexture",le._colorsTexture,Q));let ui=re.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&Y.update(le,re,ei),(cs||Ze.receiveShadow!==le.receiveShadow)&&(Ze.receiveShadow=le.receiveShadow,zt.setValue(F,"receiveShadow",le.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&$.environment!==null&&(Zt.envMapIntensity.value=$.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=Kb()),cs){if(zt.setValue(F,"toneMappingExposure",w.toneMappingExposure),Ze.needsLights&&Sh(Zt,Di),qe&&ae.fog===!0&&Ke.refreshFogUniforms(Zt,qe),Ke.refreshMaterialUniforms(Zt,ae,J,W,M.state.transmissionRenderTarget[U.id]),Ze.needsLights&&Ze.lightProbeGrid){let Wt=Ze.lightProbeGrid;Zt.probesSH.value=Wt.texture,Zt.probesMin.value.copy(Wt.boundingBox.min),Zt.probesMax.value.copy(Wt.boundingBox.max),Zt.probesResolution.value.copy(Wt.resolution)}No.upload(F,dr(Ze),Zt,Q)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(No.upload(F,dr(Ze),Zt,Q),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&zt.setValue(F,"center",le.center),zt.setValue(F,"modelViewMatrix",le.modelViewMatrix),zt.setValue(F,"normalMatrix",le.normalMatrix),zt.setValue(F,"modelMatrix",le.matrixWorld),ae.uniformsGroups!==void 0){let Wt=ae.uniformsGroups;for(let yi=0,Ss=Wt.length;yi<Ss;yi++){let sa=Wt[yi];Re.update(sa,ei),Re.bind(sa,ei)}}return ei}function Sh(U,$){U.ambientLightColor.needsUpdate=$,U.lightProbe.needsUpdate=$,U.sunLights.needsUpdate=$,U.sunLightShadows.needsUpdate=$,U.directionalLights.needsUpdate=$,U.directionalLightShadows.needsUpdate=$,U.pointLights.needsUpdate=$,U.pointLightShadows.needsUpdate=$,U.spotLights.needsUpdate=$,U.spotLightShadows.needsUpdate=$,U.rectAreaLights.needsUpdate=$,U.hemisphereLights.needsUpdate=$}function Eh(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(U,$,re){let ae=Z.get(U);ae.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Z.get(U.texture).__webglTexture=$,Z.get(U.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:re,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,$){let re=Z.get(U);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(U,$=0,re=0){H=U,D=$,O=re;let ae=null,le=!1,qe=!1;if(U){let We=Z.get(U);if(We.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(F.FRAMEBUFFER,We.__webglFramebuffer),z.copy(U.viewport),q.copy(U.scissor),ee=U.scissorTest,P.viewport(z),P.scissor(q),P.setScissorTest(ee),B=-1;return}else if(We.__webglFramebuffer===void 0)Q.setupRenderTarget(U);else if(We.__hasExternalTextures)Q.rebindTextures(U,Z.get(U.texture).__webglTexture,Z.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let xt=U.depthTexture;if(We.__boundDepthTexture!==xt){if(xt!==null&&Z.has(xt)&&(U.width!==xt.image.width||U.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(U)}}let Xe=U.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(qe=!0);let Ve=Z.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Ve[$])?ae=Ve[$][re]:ae=Ve[$],le=!0):U.samples>0&&Q.useMultisampledRTT(U)===!1?ae=Z.get(U).__webglMultisampledFramebuffer:Array.isArray(Ve)?ae=Ve[re]:ae=Ve,z.copy(U.viewport),q.copy(U.scissor),ee=U.scissorTest}else z.copy(ie).multiplyScalar(J).floor(),q.copy(xe).multiplyScalar(J).floor(),ee=Be;if(re!==0&&(ae=I),P.bindFramebuffer(F.FRAMEBUFFER,ae)&&P.drawBuffers(U,ae),P.viewport(z),P.scissor(q),P.setScissorTest(ee),le){let We=Z.get(U.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+$,We.__webglTexture,re)}else if(qe){let We=$;for(let Xe=0;Xe<U.textures.length;Xe++){let Ve=Z.get(U.textures[Xe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Xe,Ve.__webglTexture,re,We)}}else if(U!==null&&re!==0){let We=Z.get(U.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,We.__webglTexture,re)}B=-1};function pr(U){let $=Z.get(U);return($.__readFormat!==U.format||$.__readType!==U.type)&&($.__readFormat=U.format,$.__readType=U.type,$.__formatReadable=N.textureFormatReadable(U.format),$.__typeReadable=N.textureTypeReadable(U.type)),$}this.readRenderTargetPixels=function(U,$,re,ae,le,qe,$e,We=0){if(!(U&&U.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Z.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&$e!==void 0&&(Xe=Xe[$e]),Xe){P.bindFramebuffer(F.FRAMEBUFFER,Xe);try{let Ve=U.textures[We],xt=Ve.format,bt=Ve.type;U.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+We);let je=pr(Ve);if(je.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=U.width-ae&&re>=0&&re<=U.height-le&&F.readPixels($,re,ae,le,Fe.convert(xt),Fe.convert(bt),qe)}finally{let Ve=H!==null?Z.get(H).__webglFramebuffer:null;P.bindFramebuffer(F.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(U,$,re,ae,le,qe,$e,We=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Z.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&$e!==void 0&&(Xe=Xe[$e]),Xe)if($>=0&&$<=U.width-ae&&re>=0&&re<=U.height-le){P.bindFramebuffer(F.FRAMEBUFFER,Xe);let Ve=U.textures[We],xt=Ve.format,bt=Ve.type;U.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+We);let je=pr(Ve);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ut=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ut),F.bufferData(F.PIXEL_PACK_BUFFER,qe.byteLength,F.STREAM_READ),F.readPixels($,re,ae,le,Fe.convert(xt),Fe.convert(bt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let pn=H!==null?Z.get(H).__webglFramebuffer:null;P.bindFramebuffer(F.FRAMEBUFFER,pn);let Xt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Up(F,Xt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ut),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,qe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ut),F.deleteSync(Xt),qe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,$=null,re=0){let ae=Math.pow(2,-re),le=Math.floor(U.image.width*ae),qe=Math.floor(U.image.height*ae),$e=$!==null?$.x:0,We=$!==null?$.y:0;Q.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,re,0,0,$e,We,le,qe),P.unbindTexture()},this.copyTextureToTexture=function(U,$,re=null,ae=null,le=0,qe=0){let $e,We,Xe,Ve,xt,bt,je,Ut,pn,Xt=U.isCompressedTexture?U.mipmaps[qe]:U.image;if(re!==null)$e=re.max.x-re.min.x,We=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,Ve=re.min.x,xt=re.min.y,bt=re.isBox3?re.min.z:0;else{let Zt=Math.pow(2,-le);$e=Math.floor(Xt.width*Zt),We=Math.floor(Xt.height*Zt),U.isDataArrayTexture?Xe=Xt.depth:U.isData3DTexture?Xe=Math.floor(Xt.depth*Zt):Xe=1,Ve=0,xt=0,bt=0}ae!==null?(je=ae.x,Ut=ae.y,pn=ae.z):(je=0,Ut=0,pn=0);let kt=Fe.convert($.format),_t=Fe.convert($.type),Ze;$.isData3DTexture?(Q.setTexture3D($,0),Ze=F.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Q.setTexture2DArray($,0),Ze=F.TEXTURE_2D_ARRAY):(Q.setTexture2D($,0),Ze=F.TEXTURE_2D),P.activeTexture(F.TEXTURE0),P.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),P.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),P.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);let Nn=P.getParameter(F.UNPACK_ROW_LENGTH),It=P.getParameter(F.UNPACK_IMAGE_HEIGHT),ei=P.getParameter(F.UNPACK_SKIP_PIXELS),Li=P.getParameter(F.UNPACK_SKIP_ROWS),cs=P.getParameter(F.UNPACK_SKIP_IMAGES);P.pixelStorei(F.UNPACK_ROW_LENGTH,Xt.width),P.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Xt.height),P.pixelStorei(F.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(F.UNPACK_SKIP_ROWS,xt),P.pixelStorei(F.UNPACK_SKIP_IMAGES,bt);let Di=U.isDataArrayTexture||U.isData3DTexture,zt=$.isDataArrayTexture||$.isData3DTexture;if(U.isDepthTexture){let Zt=Z.get(U),ui=Z.get($),Wt=Z.get(Zt.__renderTarget),yi=Z.get(ui.__renderTarget);P.bindFramebuffer(F.READ_FRAMEBUFFER,Wt.__webglFramebuffer),P.bindFramebuffer(F.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Ss=0;Ss<Xe;Ss++)Di&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(U).__webglTexture,le,bt+Ss),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get($).__webglTexture,qe,pn+Ss)),F.blitFramebuffer(Ve,xt,$e,We,je,Ut,$e,We,F.DEPTH_BUFFER_BIT,F.NEAREST);P.bindFramebuffer(F.READ_FRAMEBUFFER,null),P.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(le!==0||U.isRenderTargetTexture||Z.has(U)){let Zt=Z.get(U),ui=Z.get($);P.bindFramebuffer(F.READ_FRAMEBUFFER,R),P.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let Wt=0;Wt<Xe;Wt++)Di?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.__webglTexture,le,bt+Wt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zt.__webglTexture,le),zt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ui.__webglTexture,qe,pn+Wt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ui.__webglTexture,qe),le!==0?F.blitFramebuffer(Ve,xt,$e,We,je,Ut,$e,We,F.COLOR_BUFFER_BIT,F.NEAREST):zt?F.copyTexSubImage3D(Ze,qe,je,Ut,pn+Wt,Ve,xt,$e,We):F.copyTexSubImage2D(Ze,qe,je,Ut,Ve,xt,$e,We);P.bindFramebuffer(F.READ_FRAMEBUFFER,null),P.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else zt?U.isDataTexture||U.isData3DTexture?F.texSubImage3D(Ze,qe,je,Ut,pn,$e,We,Xe,kt,_t,Xt.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(Ze,qe,je,Ut,pn,$e,We,Xe,kt,Xt.data):F.texSubImage3D(Ze,qe,je,Ut,pn,$e,We,Xe,kt,_t,Xt):U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,qe,je,Ut,$e,We,kt,_t,Xt.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,qe,je,Ut,Xt.width,Xt.height,kt,Xt.data):F.texSubImage2D(F.TEXTURE_2D,qe,je,Ut,$e,We,kt,_t,Xt);P.pixelStorei(F.UNPACK_ROW_LENGTH,Nn),P.pixelStorei(F.UNPACK_IMAGE_HEIGHT,It),P.pixelStorei(F.UNPACK_SKIP_PIXELS,ei),P.pixelStorei(F.UNPACK_SKIP_ROWS,Li),P.pixelStorei(F.UNPACK_SKIP_IMAGES,cs),qe===0&&$.generateMipmaps&&F.generateMipmap(Ze),P.unbindTexture()},this.initRenderTarget=function(U){Z.get(U).__webglFramebuffer===void 0&&Q.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?Q.setTextureCube(U,0):U.isData3DTexture?Q.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Q.setTexture2DArray(U,0):Q.setTexture2D(U,0),P.unbindTexture()},this.resetState=function(){D=0,O=0,H=null,P.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return es}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}};var Jt=(i,e,t)=>i<e?e:i>t?t:i,yt=(i,e,t)=>i+(e-i)*t,ul=i=>i*i*(3-2*i),Tt=(i,e,t)=>{let n=Jt((t-i)/(e-i),0,1);return n*n*(3-2*n)},xm=1337;function ym(i){xm=i|0}function $b(i){return i=i^xm|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var yn=(i,e)=>$b(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function wi(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return yt(yn(t,e),yn(t+1,e),s)}var Zu=(i,e=0)=>wi(i,e)*.55+wi(i*2.03,e+7)*.3+wi(i*4.1,e+13)*.15;function At(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Yu=new _e,ye=i=>(Yu.set(i),[Yu.r,Yu.g,Yu.b]),f0=(i,e,t)=>[yt(i[0],e[0],t),yt(i[1],e[1],t),yt(i[2],e[2],t)],Bn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Ai=["city","sakura","coast","country","mountain","snow"],hl={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:.25,base:1.05,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Fo=1500,Ku=260,os=0,dl=2,Jb=-2.2,fl=0;function bm(i){fl=Math.max(0,Ai.indexOf(i))}function sr(i){let e=Math.floor(i/Fo),t=i-e*Fo,n=ul(Jt((t-(Fo-Ku))/Ku,0,1)),s=Ai.length;return{a:Ai[((e+fl)%s+s)%s],b:Ai[((e+fl+1)%s+s)%s],t:n}}function Dt(i){let e=sr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var fn=i=>{let e=sr(i);return e.t<.5?e.a:e.b};function Mm(i,e){let t=Math.floor(i/Fo),n=i-t*Fo,s=ul(Jt((n-(Fo-Ku))/Ku,0,1)),r=Ai.length;return(Ai[((t+fl)%r+r)%r]===e?1-s:0)+(Ai[((t+fl+1)%r+r)%r]===e?s:0)}function On(i,e){let t=sr(i);return yt(hl[t.a][e],hl[t.b][e],t.t)}var Lr=650,Dr=375,Bo=i=>i*Lr+Dr;function pl(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Dt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var d0={x:new Map,r:new Map,t:new Map};function p0(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function rr(i){let e=Math.round((i-Dr)/Lr);return p0(d0.x,e,()=>{let t=Bo(e);return pl(t)?{k:e,s:t}:null})}function jb(i){let e=rr(i);return e?1-Tt(8,45,Math.abs(i-e.s)):0}var Nr=1150,Oo=820,ml=4.6,m0=i=>i*Nr+Oo;function g0(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Dt(i+t);if(n.country+n.sakura<.9)return!1}let e=rr(i);return!(e&&Math.abs(e.s-i)<170)}function Oi(i){let e=Math.round((i-Oo)/Nr);return p0(d0.r,e,()=>{let t=m0(e);return g0(t)?{k:e,s:t}:null})}function Qb(i){let e=Oi(i);return e?1-Tt(30,70,Math.abs(i-e.s)):0}function eM(i){let e=-ml;return i<11?e-1.3:i<16?yt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?yt(e+.7,.35,(i-20)/5.5):.35}var Sm=1050,Em=525,_n=85,on=125,tM=24,nM=i=>i*Sm+Em;function iM(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Dt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function zi(i){let e=Math.round((i-Em)/Sm);return p0(d0.t,e,()=>{let t=nM(e);return iM(t)?{k:e,s:t}:null})}function sM(i){let e=zi(i);return e?1-Tt(_n+20,on+25,Math.abs(i-e.s)):0}var $u=0,ju=(i,e)=>{let t=i/on;return tM*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var ys=2,Ju=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(wi(e/300,11)-.5)*2+(wi(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*On(e,"curv")*(1-Math.max(jb(e),Qb(e),sM(e)))}elevRaw(e){return On(e,"base")+On(e,"hill")*(Zu(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=rr(e);if(n){let o=1-Tt(8,45,Math.abs(e-n.s));o>0&&(t=yt(t,this.elevRaw(n.s),o))}let s=Oi(e);if(s){let o=1-Tt(30,70,Math.abs(e-s.s));o>0&&(t=yt(t,this.elevRaw(s.s),o))}let r=zi(e);if(r){let o=1-Tt(_n+10,on+45,Math.abs(e-r.s));o>0&&(t=yt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*ys<e+ys;){let t=this.X.length-1,n=t*ys,s=this.curv(n+ys/2)*ys,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*ys),this.Z.push(this.Z[t]+Math.cos(r+s/2)*ys),this.H.push(r+s),this.Y.push(this.elev(n+ys))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+ys);let n=e/ys,s=Math.floor(n),r=n-s;t.x=yt(this.X[s],this.X[s+1],r),t.z=yt(this.Z[s],this.Z[s+1],r),t.y=yt(this.Y[s],this.Y[s+1],r),t.h=yt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),l=Math.cos(t.h);return t.fx=o,t.fz=l,t.rx=-l,t.rz=o,t}};function _m(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Tt(45,190,r)*16*(.45+.55*wi(e/160+(t>0?50:0),3));case"coast":return t>0?r<s+.9?-.06:-.15+Tt(s+1.5,80,r)*24*(.5+.5*wi(e/170,5))+Tt(80,200,r)*30:r<s+1.5?-.06:r<s+1.95?-.04:Jb-Math.min(r-(s+2),40)*.13-n;case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*wi(e/140,61),a=r-(s+1);return a<l?a:Math.min(l+(a-l)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+Tt(105,230,r)*95*(.6+.4*wi(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?yt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(wi(e/40+(t>0?3:0),71)-.5):.55+Tt(125,210,r)*40*(.45+.55*wi(e/230+(t>0?11:0),73));case"country":default:return r<s+2?-.08:r<s+2.6?-.08-(r-s-2)*.62:r<135?-.45:-.45+Tt(140,215,r)*7*(.4+.6*wi(e/210+(t>0?9:0),7))}}function _s(i,e,t,n){let s=sr(i),r=_m(s.a,i,e,t,n),o=s.t;e<0&&o>0&&(s.b==="coast"?o=Tt(.25,.9,o):s.a==="coast"&&(o=Tt(.1,.75,o)));let l=s.t>0?yt(r,_m(s.b,i,e,t,n),o):r;$u=0;let a=Oi(i);if(a){let S=Math.abs(i-a.s);if(S>=36)return l;let c=S<29?eM(S):yt(.35,l,Tt(29,36,S));return Math.abs(e)<n+3.2&&(c=Math.min(c,-.08)),c}let u=zi(i);if(!u)return l;let h=i-u.s,p=Math.abs(h);if(p>=2*on)return l;let m=Math.abs(e),x=ju(h,e),y;return p<_n?y=m<=n+1.46?-.25:Math.max(l,x):y=Math.max(l,Math.min(x,m<n+1?-.06:m-(n+1))),$u=Math.max(0,y-l),y}function Tm(i){let e=Oi(i);return e?1-Tt(27,34,Math.abs(i-e.s)):0}var gl=new k,Qu=new k,rM=[1,1,1],oM=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],Am=(()=>{let i=Math.tan(Math.PI/8),e=[[1,-i],[1,i],[i,1],[-i,1],[-1,i],[-1,-i],[-i,-1],[i,-1]],t=[];for(let n=1;n<7;n++)t.push(...e[0],...e[n],...e[n+1]);return t})(),Rm=(()=>{let i=[],e=[];for(let t=0;t<6;t++){let n=Math.PI/3*t-Math.PI/6,s=2/Math.sqrt(3);i.push([Math.cos(n)*s,Math.sin(n)*s])}for(let t=1;t<5;t++)e.push(...i[0],...i[t],...i[t+1]);return e})(),dn=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1,off:r=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.hasOff=r,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.O=null,this.offX=0,this.offY=0,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new Qe,this.nm=new pt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}if(this.hasOff){let o=new Float32Array(t*2);this.O&&o.set(this.O.subarray(0,n*2)),this.O=o}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,l,a,u){this.n>=this.cap&&this.grow(this.n+1);let h=this.e,p=this.ne,m=this.n*3,x=this.P,y=this.bb,S=h[0]*e+h[4]*t+h[8]*n+h[12],c=h[1]*e+h[5]*t+h[9]*n+h[13],f=h[2]*e+h[6]*t+h[10]*n+h[14];x[m]=S,x[m+1]=c,x[m+2]=f,S<y[0]&&(y[0]=S),c<y[1]&&(y[1]=c),f<y[2]&&(y[2]=f),S>y[3]&&(y[3]=S),c>y[4]&&(y[4]=c),f>y[5]&&(y[5]=f);let d=p[0]*s+p[3]*r+p[6]*o,v=p[1]*s+p[4]*r+p[7]*o,g=p[2]*s+p[5]*r+p[8]*o,b=127/(Math.sqrt(d*d+v*v+g*g)||1);if(this.N[m]=Math.round(d*b),this.N[m+1]=Math.round(v*b),this.N[m+2]=Math.round(g*b),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=a),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(c)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasOff&&(this.O[this.n*2]=this.offX,this.O[this.n*2+1]=this.offY),this.hasColor){let M=u||rM,T=this.Cl;T[m]=M[0]>=1?255:M[0]<=0?0:M[0]*255+.5,T[m+1]=M[1]>=1?255:M[1]<=0?0:M[1]*255+.5,T[m+2]=M[2]>=1?255:M[2]<=0?0:M[2]*255+.5}this.n++}quad(e,t,n,s,r,o){gl.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Qu.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),Qu.lengthSq()<1e-12&&Qu.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),gl.cross(Qu).normalize();let l=gl.x,a=gl.y,u=gl.z,h=o?o.u0:0,p=o?o.u1:1,m=o?o.v0:0,x=o?o.v1:1;this.vtx(e[0],e[1],e[2],l,a,u,h,m,r),this.vtx(t[0],t[1],t[2],l,a,u,p,m,r),this.vtx(n[0],n[1],n[2],l,a,u,p,x,r),this.vtx(e[0],e[1],e[2],l,a,u,h,m,r),this.vtx(n[0],n[1],n[2],l,a,u,p,x,r),this.vtx(s[0],s[1],s[2],l,a,u,h,x,r)}box(e,t,n,s,r,o,l,a=null,u=null){let h=a||{},p=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],p.nz||l,h.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],p.pz||l,h.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],p.nx||l,h.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],p.px||l,h.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],p.py||l,h.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],p.ny||l,h.ny)}cyl(e,t,n,s,r,o,l,a,u=!0){let h=(s-r)/o;for(let p=0;p<l;p++){let m=p/l*Math.PI*2,x=(p+1)/l*Math.PI*2,y=Math.cos(m),S=Math.sin(m),c=Math.cos(x),f=Math.sin(x),d=[e+y*s,t,n+S*s],v=[e+c*s,t,n+f*s],g=[e+c*r,t+o,n+f*r],b=[e+y*r,t+o,n+S*r];this.vtx(d[0],d[1],d[2],y,h,S,0,0,a),this.vtx(b[0],b[1],b[2],y,h,S,0,0,a),this.vtx(g[0],g[1],g[2],c,h,f,0,0,a),this.vtx(d[0],d[1],d[2],y,h,S,0,0,a),this.vtx(g[0],g[1],g[2],c,h,f,0,0,a),this.vtx(v[0],v[1],v[2],c,h,f,0,0,a),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,a),this.vtx(g[0],g[1],g[2],0,1,0,0,0,a),this.vtx(b[0],b[1],b[2],0,1,0,0,0,a))}}rod(e,t,n,s,r,o){let l=t[0]-e[0],a=t[1]-e[1],u=t[2]-e[2],h=Math.hypot(l,a,u);l/=h,a/=h,u/=h;let p=0,m=1,x=0;Math.abs(a)>.99&&(p=1,m=0);let y=a*x-u*m,S=u*p-l*x,c=l*m-a*p,f=Math.hypot(y,S,c);y/=f,S/=f,c/=f;let d=S*u-c*a,v=c*l-y*u,g=y*a-S*l;for(let b=0;b<r;b++){let M=b/r*Math.PI*2,T=(b+1)/r*Math.PI*2,_=Math.cos(M),E=Math.sin(M),w=Math.cos(T),A=Math.sin(T),C=y*_+d*E,I=S*_+v*E,R=c*_+g*E,L=y*w+d*A,D=S*w+v*A,O=c*w+g*A,H=[e[0]+C*n,e[1]+I*n,e[2]+R*n],B=[e[0]+L*n,e[1]+D*n,e[2]+O*n],V=[t[0]+L*s,t[1]+D*s,t[2]+O*s],z=[t[0]+C*s,t[1]+I*s,t[2]+R*s];this.vtx(H[0],H[1],H[2],C,I,R,0,0,o),this.vtx(B[0],B[1],B[2],L,D,O,0,0,o),this.vtx(V[0],V[1],V[2],L,D,O,0,0,o),this.vtx(H[0],H[1],H[2],C,I,R,0,0,o),this.vtx(V[0],V[1],V[2],L,D,O,0,0,o),this.vtx(z[0],z[1],z[2],C,I,R,0,0,o)}return h}blob(e,t,n,s,r,o,l=0,a=1){let u=wm[l%wm.length],h=u.attributes.position.array,p=u.attributes.normal.array,m=u.userData.disp;for(let x=0;x<h.length;x+=3){let y=1+m[x/3],S=Math.max(0,Math.min(1,p[x+1]*.5+.5)),c=[o[0]+(r[0]-o[0])*S,o[1]+(r[1]-o[1])*S,o[2]+(r[2]-o[2])*S];this.vtx(e+h[x]*s*y,t+h[x+1]*s*y*a,n+h[x+2]*s*y,p[x],p[x+1],p[x+2],0,0,c)}}wire(e,t,n,s,r,o=10){let l=e;this.noShadow=!0;for(let a=1;a<=o;a++){let u=a/o,h=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(l,h,s,s,3,r),l=h}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,l,a]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],l,a,s[o])}bill(e,t,n,s,r,o,l,a,u,h,p=oM,m=1){let x=(u.u1-u.u0)*.5,y=(u.v1-u.v0)*.5,S=u.u0+x,c=u.v0+y;for(let f=0;f<p.length;f+=2){let d=p[f],v=p[f+1];this.offX=d*l,this.offY=v*a,this.vtx(e,t,n,s,r,o,S+d*x*m,c+v*y*m,h)}this.offX=this.offY=0}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null,O:this.hasOff&&this.O?this.O.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,l=e.C,a=e.U,u=this.n,h=this.bb;for(let p=0;p<e.n*3;p+=3){let m=r[p],x=r[p+1],y=r[p+2],S=u*3+p,c=n[0]*m+n[4]*x+n[8]*y+n[12],f=n[1]*m+n[5]*x+n[9]*y+n[13],d=n[2]*m+n[6]*x+n[10]*y+n[14];this.P[S]=c,this.P[S+1]=f,this.P[S+2]=d,this.hasAO&&(this.A[u+p/3]=this.aoByte(f)),c<h[0]&&(h[0]=c),f<h[1]&&(h[1]=f),d<h[2]&&(h[2]=d),c>h[3]&&(h[3]=c),f>h[4]&&(h[4]=f),d>h[5]&&(h[5]=d);let v=o[p],g=o[p+1],b=o[p+2],M=s[0]*v+s[3]*g+s[6]*b,T=s[1]*v+s[4]*g+s[7]*b,_=s[2]*v+s[5]*g+s[8]*b,E=127/(Math.sqrt(M*M+T*T+_*_)||1);this.N[S]=Math.round(M*E),this.N[S+1]=Math.round(T*E),this.N[S+2]=Math.round(_*E)}if(this.hasColor&&(l?this.Cl.set(l,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(a?this.U.set(a,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.hasOff){let p=Math.hypot(n[0],n[1],n[2]),m=e.O;if(m)for(let x=0;x<e.n*2;x++)this.O[u*2+x]=m[x]*p;else this.O.fill(0,u*2,(u+e.n)*2)}this.n+=e.n}build(){if(!this.n)return null;let e=new mt,t=this.n,n=this.bb;if(e.setAttribute("position",new Mt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new Mt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new Mt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new Mt(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new Mt(this.Lt.slice(0,t),1,!0)),this.hasOff&&e.setAttribute("aOff",new Mt(this.O.slice(0,t*2),2)),this.hasColor&&e.setAttribute("color",new Mt(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new pi(new k(n[0],n[1],n[2]),new k(n[3],n[4],n[5])),this.hasOff){let s=0;for(let r=0;r<t*2;r++){let o=Math.abs(this.O[r]);o>s&&(s=o)}e.boundingBox.expandByScalar(s*Math.SQRT2)}return e.boundingSphere=e.boundingBox.getBoundingSphere(new mi),e}},wm=[0,1,2,3].map(i=>{let e=new Va(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,l)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});ht.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var aM=ht.shadowmap_pars_fragment;function y0(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;ht.shadowmap_pars_fragment=aM.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}y0(1);function Nm(i,e){let t=i<e?`#define GRAZE_FADE
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var Ri=4200,ke={uSkyHor:{value:new _e(.7,.8,.9)},uSkyZen:{value:new _e(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uSakWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Le},uSunDir:{value:new k(0,1,0)},uSunCol:{value:new _e(1,1,1)},uTuftV:{value:new dt(.167,.333,.164,.165)},uGhShade:{value:new k(.3,.85,1.7)},uBlShade:{value:new k(7.5,3,2.3)},uTunA:{value:new k(0,-1e4,0)},uTunB:{value:new k(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new k},uCarFwd:{value:new k(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:lM()},uCloudTex:{value:null},uCloudOrg:{value:new Le},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Le(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function Um(i){let e=new ts(new Uint8Array(i),i.length,1,nr);return e.minFilter=e.magFilter=wn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var gi=Um([16,16,16,70,200,255,255,255]),vl=Um([28,40,70,130,200,240,255,255]);function lM(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new ts(e,256,256,Jn);return s.wrapS=s.wrapT=Is,s.magFilter=Ot,s.minFilter=Pn,s.generateMipmaps=!0,s.colorSpace=ri,s.needsUpdate=!0,s}var Ci=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,eh=1600,v0=256,cM=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/eh).toFixed(8)} + 0.5).r * uCloudSh; }`,uM=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,Fm=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/eh).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,Bm=`
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
  } }`,th=new Ks;th.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};th.customProgramCacheKey=()=>"propdepth";function Om(){let i=new Yt(v0,v0,{format:nr,type:$n,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),e=new ut({uniforms:{uCenter:{value:new Le},uOrigin:ke.uOrigin,uTime:ke.uTime,uNoiseTex:ke.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${eh.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new ct(new rn(2,2),e),n=new Ls;t.frustumCulled=!1,ke.uCloudTex.value=i.texture,ke.uCloudTex.rt=i;let s=eh/v0;return{update(r,o,l,a,u){let h=Math.round((o+a)/s)*s-a,p=Math.round((l+u)/s)*s-u;e.uniforms.uCenter.value.set(h,p),ke.uCloudOrg.value.set(h,p);let m=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(m)}}}function or(i,e="",t="",n=!0){i.uniforms.uOrigin=ke.uOrigin,i.uniforms.uCloudSh=ke.uCloudSh,i.uniforms.uTime=ke.uTime,i.uniforms.uNoiseTex=ke.uNoiseTex,i.uniforms.uCloudTex=ke.uCloudTex,i.uniforms.uCloudOrg=ke.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=ke[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?Fm:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Ci}${cM}${hM}${e}`).replace("#include <opaque_fragment>",`${n?Bm:uM}${t}${fM}
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
`,pM=`
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
}`,zm={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"},vi={tex:null,uFieldK:{value:new Le(1/12,1/21)},uFieldC:{value:new k(1,1,1)},uFieldCo:{value:new k(1,1,1)},uFieldSa:{value:new k(1,1,1)},uFieldM:{value:new k(.16,.32,.05)}};function km(i){let e={};for(let t of i)e[zm[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),vi.tex&&(i.includes("country")||i.includes("coast")||i.includes("sakura"))&&(e.F_PAINT=""),e}var Cm=new Map;function xl(i){let e=[...new Set(i)].sort().join("+"),t=Cm.get(e);return t||(t=Hm(km(e.split("+")),e),Cm.set(e,t)),t}function Hm(i=km(Object.keys(zm)),e="all"){let t=new gn({color:16777215,gradientMap:gi});t.defines=i;let n=i.F_PAINT!==void 0;return t.onBeforeCompile=s=>{s.uniforms.uSkyHor=ke.uSkyHor,s.uniforms.uSkyZen=ke.uSkyZen,s.uniforms.uWet=ke.uWet,s.uniforms.uSakWet=ke.uSakWet,s.uniforms.uNight=ke.uNight,s.uniforms.uSunDir=ke.uSunDir,s.uniforms.uSunCol=ke.uSunCol;for(let r of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])s.uniforms[r]=ke[r];if(n){s.uniforms.uFieldTex={value:vi.tex};for(let r of["uFieldK","uFieldC","uFieldCo","uFieldSa","uFieldM"])s.uniforms[r]=vi[r]}s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),or(s,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${dM}`,mM+pM,!1),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v20-"+e+(n?"-fp":""),t}function Pm(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),or(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function Vm(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=ke[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function gM(i){i.uniforms.uLightsOn=ke.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function Im(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function _0(i){return i.onBeforeCompile=e=>or(e),i.customProgramCacheKey=()=>"cs",i}var vM="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",xM=(i,e,t="")=>`
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
}`;function b0(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=ke[o];s&&Object.assign(r.uniforms,s.uniforms),or(r,vM+(s?s.pars:""),xM(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}var ar=48;function Gm(i,e){let t=new gn({color:16777215,gradientMap:vl}),n=!!vi.tex;return t.onBeforeCompile=s=>{Object.assign(s.uniforms,e,i);for(let r of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])s.uniforms[r]=ke[r];n&&(s.uniforms.uFieldC=vi.uFieldC,s.uniforms.uFieldM=vi.uFieldM),s.vertexShader=s.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${Fm}
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
  float gsw = mod(gs, ${Ri.toFixed(1)}), gpu = abs(gu) - uGP.z - 2.1;
  float tone = 0.55 * (gHash(floor(vec2(gsw / 30.0, gpu / 34.0)) + (side > 0.0 ? 31.0 : 0.0)) - 0.5) * smoothstep(9.0, 30.0, gpu)
             + 0.4 * (vnoiseV(vec2(gsw, gu) * 0.018 + 5.3) - 0.5);
  vec3 plot = uFieldM * uFieldC * vec3(0.86, 0.87, 0.48) * (1.0 + tone * vec3(1.8, 1.0, 0.2)) * (0.9 + 0.2 * nz);`:`
  vec2 pid = floor(vec2(mod(gs, ${Ri.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);`}
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`).replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`#include <project_vertex>
if (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
varying vec3 vBladeCol; varying float vCloud;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${Bm}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>n?"grass-v5-fp":"grass-v5",t}function Lm(i,e,t=!1){i.uniforms.uPMap={value:e.map},t||(i.uniforms.uPEm={value:e.emissive}),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uPMap;${t?"":" uniform sampler2D uPEm;"}`).replace("#include <map_fragment>",`
bool pgP = vMapUv.x > 1.5;
vec4 sampledDiffuseColor;
if (pgP) sampledDiffuseColor = texture2D(uPMap, vMapUv - vec2(2.0, 0.0));
else sampledDiffuseColor = texture2D(map, vMapUv);
diffuseColor *= sampledDiffuseColor;`),t||(i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`
vec4 emissiveColor;
if (pgP) emissiveColor = texture2D(uPEm, vEmissiveMapUv - vec2(2.0, 0.0));
else emissiveColor = texture2D(emissiveMap, vEmissiveMapUv);
totalEmissiveRadiance *= emissiveColor.rgb;`))}function Wm(i,e,t){let n={};n.ground=Hm(),n.color=Pm(new gn({vertexColors:!0,gradientMap:gi}),1.6,.1,"color-v3",Im),n.atlas=new gn({vertexColors:!0,gradientMap:gi,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),n.atlas.onBeforeCompile=a=>{Im(a),gM(a),or(a),Lm(a,t)},n.atlas.customProgramCacheKey=()=>"atlas-v7",n.atlasDepth=new Ks,n.atlasDepth.onBeforeCompile=a=>Lm(a,t,!0),n.atlasDepth.customProgramCacheKey=()=>"atlasdepth-v2",n.ptex=t,n.foliage=Pm(new gn({vertexColors:!0,gradientMap:vl}),2.6,.24,"foliage-v2"),n.lamp=new xn({color:15789798}),n.sig=new xn({color:new _e(.15,1.7,1.1)}),n.sodium=new xn({color:new _e(5,2.3,.65)}),n.decal=new gn({vertexColors:!0,gradientMap:gi,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),n.decal.onBeforeCompile=a=>or(a),n.decal.customProgramCacheKey=()=>"decal-v1",e&&(n.leaf=new gn({map:e,vertexColors:!0,gradientMap:vl,alphaTest:.42,side:bn}),n.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",ht.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),or(a),Vm(a),a.uniforms.uTuftV=ke.uTuftV,a.uniforms.uWind=ke.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},n.leaf.customProgramCacheKey=()=>"leaf-v5"),n.wire=new xn({color:2303020});let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.4,"rgba(255,255,255,0.45)"),o.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=o,r.fillRect(0,0,128,128);let l=new ii(s);return n.pool=new xn({map:l,color:16762746,transparent:!0,opacity:0,blending:is,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),n.glowTex=l,n}function Xm(i,e,t){let s=new Uint8Array(64);for(let o=0;o<64;o++){let l=(o+.5)/64*2-1,a=Math.min(1,Math.max(0,(l-i)/(e-i))),u=a*a*(3-2*a);s[o]=Math.round(255*(t+(1-t)*u))}let r=new ts(s,64,1,nr);return r.minFilter=r.magFilter=Ot,r.generateMipmaps=!1,r.needsUpdate=!0,r}var yM=Xm(-.05,.5,.05),_M=Xm(-.5,.45,.12);function Dm(i,e){i.uniforms.uTime=ke.uTime,i.uniforms.uWind=ke.uWind,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aOff; uniform float uWind;`+(e?" uniform float uTime;":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += bbR * (aOff.x + sw) + bbU * aOff.y; }`),e&&(i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`))}var x0=(i,e,t)=>{let n=new _e().setRGB(i/255,e/255,t/255,qt);return`vec3(${n.r.toFixed(4)}, ${n.g.toFixed(4)}, ${n.b.toFixed(4)})`},bM=`diffuseColor.rgb *= mix(${x0(62,38,34)}, mix(${x0(205,105,150)}, ${x0(255,232,242)}, smoothstep(0.3, 1.0, gTx.b)), smoothstep(0.1, 0.26, gTx.b));`;function M0(i,{blossom:e=!1}={}){let t=new gn({map:i,vertexColors:!0,color:e?16777215:new _e().setRGB(.68,.85,.46,qt),gradientMap:e?_M:yM,alphaTest:.5,side:gs});t.shadowSide=bn,t.onBeforeCompile=s=>{or(s),Vm(s),Dm(s,!1),s.uniforms.uGhShade=e?ke.uBlShade:ke.uGhShade,s.vertexShader=s.vertexShader.replace("#include <shadowmap_vertex>",`#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGhShade;`).replace("#include <map_fragment>",`
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${e?bM:"diffuseColor.rgb *= gTx.b;"}
diffuseColor.a *= gTx.a;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, 0.72));`).replace("#include <aomap_fragment>",`#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`)},t.customProgramCacheKey=()=>e?"gblossom-v1":"gleaf-v1";let n=new Ks;return n.onBeforeCompile=s=>Dm(s,!0),n.customProgramCacheKey=()=>"gleaf-depth-v1",{mat:t,depth:n}}var MM=ye("#f2c230"),qm=ye("#26272c");function nh(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=On(s,"rw"),l=n*(o+.8),a=Dt(s),u=a.city+a.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function Ym(){let i=new hn,e=_0(new gn({vertexColors:!0,gradientMap:gi})),t=new xn({color:new _e(6,.45,.3)}),n=new xn({color:new _e(.22,.03,.03)}),s=[0,1].map(()=>{let r=new hn,o=new hn;r.add(o),o.position.set(-.42,1.02,-.02);let l=new dn,a=3.6;for(let p=0,m=0;m<a;p++,m+=.45)l.box(-Math.min(m+.45,a),-.065,-.065,-m,.065,.065,p%2?qm:MM);l.box(0,-.09,-.07,.38,.09,.07,qm);let u=new ct(l.build(),e);u.castShadow=!0,o.add(u);let h=[-.28,.28].map(p=>{let m=new ct(new Er(.13,18),n);return m.position.set(p,2.75,-.1),m.rotation.y=Math.PI,r.add(m),m});return i.add(r),{root:r,pivot:o,arm:u,lamps:h,L:a}});return i.visible=!1,{group:i,update(r,o,l,a,u){i.visible=!!r,r&&r.forEach((h,p)=>{let m=s[p];m.root.position.set(h.x-o.x,h.y,h.z-o.z),m.root.rotation.y=h.yaw,m.arm.scale.x=(h.rw+.25)/m.L,m.pivot.rotation.z=-l*(Math.PI/2-.06);let x=Math.floor(u*2.5)%2;m.lamps[0].material=a&&x===0?t:n,m.lamps[1].material=a&&x===1?t:n})}}}function SM(){let t=()=>{let f=document.createElement("canvas");return f.width=1024,f.height=512,f},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let a=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,a);for(let f=0;f<1024;f+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(f,0,2,a);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,a-14,1024,14);let u=[.1,.36,.62,.88].map(f=>f*1024),h=(f,d,v,g)=>{let b=r.createLinearGradient(f,d,f+v*.3,d+g);b.addColorStop(0,"#5d7fae"),b.addColorStop(.6,"#9db7d6"),b.addColorStop(1,"#2f3f55"),r.fillStyle=b,r.fillRect(f,d,v,g),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(f+v*.2,d),r.lineTo(f+v*.38,d),r.lineTo(f+v*.1,d+g),r.lineTo(f-v*.08,d+g),r.fill(),o.fillStyle="#ffeccc",o.fillRect(f,d,v,g)};for(let f=0;f<u.length-1;f++){let d=u[f]+40,v=u[f+1]-40,g=3,b=(v-d)/g;for(let M=0;M<g;M++)r.fillStyle="#6b737c",r.fillRect(d+M*b+2,34,b-4,58),h(d+M*b+6,38,b-12,50)}for(let f of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(f+2,34,28,58),h(f+5,38,22,50);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,22,60,a-36),r.fillStyle="#7b828a",r.fillRect(f-1,22,2,a-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(f-30,22,60,a-36),h(f-24,34,20,46),h(f+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let p=0,m=176,x=256,y=256;r.fillStyle="#d3d7dc",r.fillRect(p,m,x,y),r.fillStyle="#20262e",r.fillRect(p+14,m+44,x-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(p+40,m+44),r.lineTo(p+80,m+44),r.lineTo(p+40,m+140),r.lineTo(p+14,m+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(p+x/2-4,m+44,8,96),r.fillStyle="#111",r.fillRect(p+50,m+12,x-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,m+26),r.fillStyle="#1f9a50",r.fillRect(p,m+150,x,18),r.fillStyle="#e8892b",r.fillRect(p,m+170,x,7);for(let f of[p+40,p+x-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(f,m+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(f+(f<p+x/2?28:-28),m+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(p,m+y-30,x,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",p+x/2,m+220),o.fillStyle="#111",o.fillRect(p,m,x,y),o.fillStyle="#ff9a2a",o.font=`800 18px ${l}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,m+26);for(let f of[p+40,p+x-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(f,m+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let S=f=>{let d=new ii(f);return d.colorSpace=qt,d.anisotropy=4,d},c=(f,d,v,g)=>({u0:f/1024,u1:(f+v)/1024,v0:1-(d+g)/512,v1:1-d/512});return{map:S(n),em:S(s),side:c(0,0,1024,a),sideR:{...c(0,0,1024,a),flip:!0},front:c(p,m,x,y),plain:c(342,202,28,28)}}function Zm(){let i=SM(),e=_0(new gn({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:gi})),t=new dn({uv:!0}),n=[1,1,1],s=ye("#9aa1a9"),r=ye("#3b4047"),o=ye("#2a2d33"),l=19.5,a=.6,u=3,h=1.45,p=.95,m=4,x=4,y=.3,S=ye("#33363b"),c={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},f=(_,E,w,A,C,I,R,L=!1)=>t.box(_,E,w,A,C,I,R,c,L?{noBottom:!0}:null),d=(_,E,w,A,C,I)=>{let L=w-C/2,D=w+C/2;for(let O=0;O<12;O++){let H=O/12*Math.PI*2,B=(O+1)/12*Math.PI*2,V=_+Math.cos(H)*A,z=E+Math.sin(H)*A,q=_+Math.cos(B)*A,ee=E+Math.sin(B)*A;t.quad([V,z,L],[q,ee,L],[q,ee,D],[V,z,D],I,i.plain),t.quad([_,E,D],[V,z,D],[q,ee,D],[q,ee,D],I,i.plain),t.quad([_,E,L],[q,ee,L],[V,z,L],[V,z,L],I,i.plain)}},v=u*l+(u-1)*a;for(let _=0;_<u;_++){let E=-v/2+l/2+_*(l+a),w=E-l/2,A=E+l/2;t.quad([w,p,h],[A,p,h],[A,m,h],[w,m,h],n,i.side),t.quad([A,p,-h],[w,p,-h],[w,m,-h],[A,m,-h],n,i.side);let C=_===u-1,I=_===0;t.quad([A,p,h],[A,p,-h],[A,m,-h],[A,m,h],C?n:ye("#c9ced4"),C?i.front:i.plain),t.quad([w,p,-h],[w,p,h],[w,m,h],[w,m,-h],I?n:ye("#c9ced4"),I?i.front:i.plain);for(let R=0;R<x;R++)for(let L of[1,-1]){let D=R/x*Math.PI/2,O=(R+1)/x*Math.PI/2,H=L*h*Math.cos(D),B=m+y*Math.sin(D),V=L*h*Math.cos(O),z=m+y*Math.sin(O);t.quad([w,B,H],[A,B,H],[A,z,V],[w,z,V],s,i.plain);for(let q of[w,A]){let ee=[[q,m,0],[q,B,H],[q,z,V]];t.quad(ee[0],ee[1],ee[2],ee[2],s,i.plain),t.quad(ee[0],ee[2],ee[1],ee[1],s,i.plain)}}for(let R of[1,-1])f(w,m-.02,R*h-.04,A,m+.05,R*h+.04,r);for(let R of[E-5.5,E+5.5])f(R-1.3,m+.2,-.8,R+1.3,m+.62,.8,ye("#c4c9cf"),!0);f(w+.3,.82,-h+.1,A-.3,p,h-.1,o);for(let[R,L,D,O]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])f(E+R-L/2,.82-D,-1.15+O*.2,E+R+L/2,.82,1.15+O*.2,O>0?o:r);for(let R of[E-7,E+7]){for(let L of[1,-1]){f(R-1.35,.32,L*.86,R+1.35,.56,L*1.02,r);for(let D of[-1.05,1.05])f(R+D-.17,.3,L*.84,R+D+.17,.58,L*1.06,o)}f(R-.35,.5,-1,R+.35,.8,1,r);for(let L of[-1.05,1.05])for(let D of[1,-1])d(R+L,.43,D*.6,.43,.13,S)}if(_<u-1&&f(A,p+.15,-.95,A+a,m-.1,.95,ye("#3a3e44")),_===0){let R=E-3,L=m+.7;t.box(R-.6,m+.26,-.6,R+.6,m+.42,.6,r),t.rod([R-.5,m+.42,0],[R,L+.9,0],.03,.03,4,r),t.rod([R+.5,m+.42,0],[R,L+.9,0],.03,.03,4,r),t.rod([R,L+.9,-.85],[R,L+.9,.85],.03,.03,4,r)}}let g=new ct(t.build(),e);g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1;let b=new hn;b.add(g),b.visible=!1;let M={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:v},T={};return{group:b,st:M,start(_,E,w=16){Object.assign(M,{active:!0,sx:_,dir:E,speed:w,u:-E*290,ds:E>0?-2:2,cleared:!1}),b.visible=!0},update(_,E,w,A,C){if(!M.active)return;M.u+=M.dir*M.speed*_;let I=M.u-M.dir*M.length/2;if(!M.cleared&&(M.dir>0?I>C+1:I<-C-1)&&(M.cleared=!0),Math.abs(M.u)>330){M.active=!1,b.visible=!1;return}E.at(M.sx,T),b.position.set(T.x+T.fx*M.ds+T.rx*M.u-w.x,T.y+.34,T.z+T.fz*M.ds+T.rz*M.u-w.z),b.rotation.y=T.h+(M.dir>0?Math.PI:0),e.emissiveIntensity=.3+A*1.1}}}var EM='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',Us=2048,TM=4096;function sh(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var jm=sh(256,256);{let i=jm.getContext("2d"),e=i.createImageData(256,256),t=At(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var rh=class{constructor(e=TM,t=0,n={}){let s=this.H=e;this.cA=sh(Us,s),this.cE=sh(Us/2,s/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,Us/2,s/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,Us,s),this.x=0,this.y=0,this.rowH=0,this.cells=n,this.uOff=t,this.grain=this.a.createPattern(jm,"repeat")}add(e,t,n,s){if(this.x+t+4>Us&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>this.H)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let h of[this.a,this.e])h.save(),h===this.e&&h.scale(.5,.5),h.translate(o.x,o.y),h.beginPath(),h.rect(0,0,t,n),h.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5,a=this.H,u=this.uOff;return this.cells[e]={u0:u+(o.x+l)/Us,u1:u+(o.x+t-l)/Us,v0:1-(o.y+n-l)/a,v1:1-(o.y+l)/a,w:t,h:n,px:o.x,py:o.y},this.cells[e]}paintCell(e,t,n,s,r,o,l){let a=this.cells[e];!a||a.u0>1.5!=this.uOff>1.5||(this.a.drawImage(t,n,s,r,o,a.px,a.py,a.w,a.h),l>=0?this.e.drawImage(t,n,l,r,o,a.px/2,a.py/2,a.w/2,a.h/2):(this.e.fillStyle="#000",this.e.fillRect(a.px/2,a.py/2,a.w/2,a.h/2)))}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new ii(n);return s.colorSpace=qt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Pn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function an(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Sn(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,a])=>o.addColorStop(l,a)),i.fillStyle=o,i.fillRect(e,t,n,s)}function zo(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Sn(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}an(i,e,t,n,.13)}function Ds(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function X(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function ko(i,e,t,n,s,r,o="#d9dde2",l="rgba(40,45,60,0.55)"){X(i,e-r,t-r,n+2*r,s+2*r,o),X(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function Ns(i,e,t,n,s,r,o=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),a=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";l.addColorStop(0,a),l.addColorStop(.55,u),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let h=e+n*r();i.beginPath(),i.moveTo(h,t),i.lineTo(h+n*.18,t),i.lineTo(h-n*.25,t+s),i.lineTo(h-n*.43,t+s),i.fill(),i.restore()}function Km(i,e,t,n,s,r="#efe6d2"){X(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Sn(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function oh(i,e,t=800){i.font=`${t} ${e}px ${EM}`}function Rt(i,e,t,n,s,r,o,l=800,a=null){oh(i,r,l);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,oh(i,u,l);i.textAlign="center",i.textBaseline="middle",a&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=a,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function Fr(i,e,t,n,s,r,o,l=800,a=null){let u=[...e],h=u.length,p=Math.min(r*1.05,(s-n)/h),m=Math.min(r,p*.95);oh(i,m,l),i.textAlign="center",i.textBaseline="middle",u.forEach((x,y)=>{let S=n+(s-n-p*h)/2+p*(y+.5);a&&(i.lineWidth=Math.max(2,m*.12),i.strokeStyle=a,i.strokeText(x,t,S)),i.fillStyle=o,i.fillText(x,t,S)})}function Ur(i,e,t,n,s,r,o,l=!0){if(X(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Sn(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let a=e+n*.2*o();a<e+n-4;a+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-a),h=s*(.12+o()*.25);i.fillRect(a,t+s-h,u,h)}}i.restore()}function wM(i,e,t,n,s,r,o){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",X(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,X(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Sn(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var $m=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],ih=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],Jm=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],AM=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Qm(){let i=new rh,e=At(2024),t=240,n=(c,f,d,v,g,b,M=!1)=>{zo(c,i,d,v,"#ece8e0",0);let T=At(b*31+(g?7:0)+5);if(b===0){let _=d*.14,E=v*.22,w=d*.72,A=v*.5;ko(c,_,E,w,A,5),Ns(c,_,E,w/2,A,T),Ns(c,_+w/2,E,w/2,A,T);let C=T()<.8?w*(.18+T()*.25):0;C&&Km(c,_+2,E+2,C,A-4,T()<.5?"#efe6d2":"#d9e4ea"),X(c,_+w/2-2,E,4,A,"#cfd4da"),X(c,_-8,E+A+5,w+16,6,"#d8d8d4"),Ds(c,_-4,E+A+11,8,60),Ds(c,_+w-4,E+A+11,8,60),g&&(Ur(f,_,E,w,A,M?"#e6eeff":"#ffcf8f",T),C&&X(f,_+2,E+2,C,A-4,M?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),X(f,_+w/2-2,E,4,A,"#000"))}else if(b===1){for(let _ of[.12,.56]){let E=d*_,w=v*.28,A=d*.3,C=v*.36;ko(c,E,w,A,C,4),Ns(c,E,w,A,C,T,1),c.fillStyle="rgba(255,255,255,0.35)",c.fillRect(E,w,A,C*.45),Ds(c,E,w+C+6,A,40,.1),g&&T()<.8&&Ur(f,E,w,A,C,T()<.5?"#ffd9a0":"#e8f0ff",T)}c.fillStyle="#c9c9c4",c.beginPath(),c.arc(d*.88,v*.2,9,0,7),c.fill()}else if(b===2){let _=d*.1,E=v*.12,w=d*.8,A=v*.84;ko(c,_,E,w,A,4),Ns(c,_,E,w/2,A,T),Ns(c,_+w/2,E,w/2,A,T);let C=w*(.2+T()*.3);Km(c,_+2,E+2,C,A-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),X(c,_+w/2-2,E,4,A,"#cfd4da"),g&&(Ur(f,_,E,w,A,M?"#e6eeff":"#ffcb85",T),X(f,_+2,E+2,C,A-4,M?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),X(f,_+w/2-2,E,4,A,"#000"))}else if(b===3){zo(c,i,d,v,"#dfe3e6",0);let _=v*.25,E=v*.55;Ns(c,0,_,d,E,T,1);for(let w=0;w<=d;w+=d/4)X(c,w-2,_,4,E,"#8d98a6");if(X(c,0,_-4,d,4,"#8d98a6"),X(c,0,_+E,d,5,"#7d8796"),g)for(let w=0;w<4;w++)T()<.7&&Ur(f,w*d/4+2,_,d/4-4,E,T()<.6?"#f2f6ff":"#ffe2b0",T)}else if(b===4){c.fillStyle="#6b4a35",c.fillRect(0,0,d,v);for(let C=0;C<v;C+=12)X(c,0,C,d,2,"rgba(30,18,10,0.35)"),X(c,0,C+2,d,1,"rgba(255,220,180,0.06)");an(c,i,d,v,.15);let _=d*.18,E=v*.25,w=d*.64,A=v*.45;X(c,_-6,E-6,w+12,A+12,"#4a3020"),X(c,_,E,w,A,"#efe4c8"),c.fillStyle="#5a3a26";for(let C=1;C<6;C++)c.fillRect(_+C*w/6-1.5,E,3,A);for(let C=1;C<3;C++)c.fillRect(_,E+C*A/3-1.5,w,3);if(g){Ur(f,_,E,w,A,"#ffc070",T,!1),f.fillStyle="#000";for(let C=1;C<6;C++)f.fillRect(_+C*w/6-1.5,E,3,A);for(let C=1;C<3;C++)f.fillRect(_,E+C*A/3-1.5,w,3)}}else if(b===5){X(c,d*.08,0,7,v,"#bdbdb6"),X(c,d*.08+5,0,2,v,"rgba(0,0,0,0.2)");let _=d*.55,E=v*.3,w=d*.22,A=v*.24;ko(c,_,E,w,A,3),X(c,_,E,w,A,"#d6dfe4"),c.fillStyle="rgba(255,255,255,0.4)",c.fillRect(_,E,w,A/2),Ds(c,_,E+A+4,w,50,.12),X(c,d*.22,v*.55,26,34,"#cfcfca"),X(c,d*.22+4,v*.55+6,18,12,"#9aa2a8"),g&&Ur(f,_,E,w,A,M?"#eef2ff":"#fff0d8",T,!1)}else if(b===6){let _=d*.4,E=v*.35,w=d*.2,A=v*.28;ko(c,_,E,w,A,3),Ns(c,_,E,w,A,T,1),Ds(c,_,E+A+4,w,70,.14),g&&Ur(f,_,E,w,A,M?"#e8efff":"#ffd9a0",T)}};for(let c=0;c<7;c++)i.add("win"+c,t,t,(f,d,v,g)=>n(f,d,v,g,!1,c)),i.add("win"+c+"L",t,t,(f,d,v,g)=>n(f,d,v,g,!0,c));for(let c of[0,2,5,6])i.add("win"+c+"C",t,t,(f,d,v,g)=>n(f,d,v,g,!0,c,!0));i.add("plain",t,t,(c,f,d,v)=>{zo(c,i,d,v,"#ece8e0"),Ds(c,d*.3,0,12,v*.6,.06)}),i.add("concrete",t,t,(c,f,d,v)=>{zo(c,i,d,v,"#d9d7d0",60);for(let g=0;g<6;g++)Ds(c,g*41%d,0,10,v*.5,.07)});let s=288,r=(c,f,d,v,g,b,M)=>{let T=(E,w,A,C,I,R=0)=>{c.fillStyle=I,c.beginPath(),c.ellipse(E,w,A,C,R,0,7),c.fill()},_=E=>E[Math.floor(b()*E.length)];if(M==="bakery"){X(c,f,d,v,g,"#d9b98a"),Sn(c,f,d,v,g,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let E=d+g*.28;E<d+g*.72;E+=g*.2){X(c,f,E,v,5,"#8a5a32");for(let w=f+8;w<f+v-8;w+=15+b()*10){let A=7+b()*6,C=4+b()*3;T(w,E-C,A,C,_(["#c98a3e","#b4732e","#d9a256","#a4632a"])),T(w-A*.2,E-C*1.4,A*.5,C*.35,"rgba(255,230,180,0.5)")}}X(c,f+4,d+g*.8,v-8,g*.2,"#efe7d8"),X(c,f+4,d+g*.8,v-8,3,"#9a9a96");for(let E=f+14;E<f+v-10;E+=18)T(E,d+g*.9,6,4,_(["#e8b35a","#c06a3a","#f2d29a"]));X(c,f+v-64,d+10,52,22,"#7a3e1e"),Rt(c,"\u713C\u304D\u305F\u3066",f+v-38,d+21,46,14,"#fff3dc",800)}else if(M==="books"){X(c,f,d,v,g,"#6f5a46");for(let E=d+6;E<d+g*.72;E+=g*.17){X(c,f,E+g*.15,v,4,"#4a3828");for(let w=f+3;w<f+v-4;){let A=3+b()*4,C=g*(.1+b()*.045);X(c,w,E+g*.15-C,A,C,_(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),w+=A+(b()<.1?4:.6)}}X(c,f+4,d+g*.76,v-8,g*.24,"#8a7560");for(let E=f+8;E<f+v-22;E+=24)X(c,E,d+g*.79,20,28,_(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),X(c,E+3,d+g*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(M==="florist"){X(c,f,d,v,g,"#e8e2d2"),Sn(c,f,d,v,g,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let E=0;E<7;E++){let w=f+8+b()*(v-16),A=g*(.15+b()*.25);for(let C=0;C<A;C+=3.5)T(w+Math.sin(C*.25+E)*4+(b()-.5)*6,d+4+C,3.4,1.8,_(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),b()*3)}for(let E=0;E<3;E++){let w=d+g*(.5+E*.17);X(c,f,w+14,v,4,"#9a8a76");for(let A=f+10+E*6;A<f+v-8;A+=19){let C=_(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let I=0;I<6;I++){c.strokeStyle="#4a7a3a",c.lineWidth=1.2,c.beginPath();let R=A+(b()-.5)*14;c.moveTo(A,w+10),c.lineTo(R,w-6-b()*8),c.stroke(),T(R,w-8-b()*8,3.2,3,C)}X(c,A-6,w+4,12,11,_(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(M==="clothes"){X(c,f,d,v,g,"#efece6"),Sn(c,f,d,v,g,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),X(c,f+6,d+g*.18,v-60,3,"#7a7a7a");for(let w=f+12;w<f+v-66;w+=13+b()*5){c.fillStyle=_(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let A=d+g*.18+3,C=g*(.3+b()*.2);c.beginPath(),c.moveTo(w-5,A),c.lineTo(w+5,A),c.lineTo(w+8,A+C),c.lineTo(w-8,A+C),c.closePath(),c.fill()}let E=f+v-32;T(E,d+g*.16,7,8,"#d8cfc4"),c.fillStyle=_(["#c84a5a","#4a6a9a","#e8d8b8"]),c.beginPath(),c.moveTo(E-14,d+g*.24),c.lineTo(E+14,d+g*.24),c.lineTo(E+18,d+g*.66),c.lineTo(E-18,d+g*.66),c.closePath(),c.fill(),X(c,E-2,d+g*.66,4,g*.24,"#8a8a8a"),X(c,f+8,d+g*.74,v*.55,6,"#8a6a4a");for(let w=f+12;w<f+v*.55;w+=14)X(c,w,d+g*.74-8,11,8,_(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let E=7;for(let w=d+g*.25;w<d+g;w+=g*.22)for(let A=f+3;A<f+v-6;A+=6+b()*8)e(),E=Math.imul(E,31)+Math.floor(b()*997+b()*61+b()*7)|0;M==="cafe"?h(c,f,d,v,g,At(E>>>0)):u(c,f,d,v,g,At(E>>>0),M==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],l=(c,f,d,v,g,b,M="bbccutp")=>{let T=f+1+b()*3;for(;T<d-4;){let _=M[Math.floor(b()*M.length)],E=o[Math.floor(b()*o.length)],w=b()<.5?"#f8f6f0":o[Math.floor(b()*o.length)],A={b:8+b()*6,c:6+b()*2,u:9+b()*2,t:5+b()*2,p:12+b()*5}[_],C=Math.min(g,{b:14+b()*12,c:11+b()*3,u:10+b()*3,t:18+b()*9,p:14+b()*8}[_]),I=2+Math.floor(b()*5);for(let R=0;R<I&&T+A<d-1;R++,T+=A+.6){let L=v-C;_==="t"?(X(c,T,L+C*.3,A,C*.7,E),X(c,T+A*.3,L+C*.1,A*.4,C*.22,E),X(c,T+A*.28,L,A*.44,C*.11,w==="#f8f6f0"?"#e8e8e4":"#d83a2a"),X(c,T,L+C*.5,A,C*.22,w)):_==="c"?(X(c,T,L,A,C,E),X(c,T,L,A,1.5,"#d8dce0"),X(c,T,L+C*.35,A,C*.3,w)):_==="u"?(c.fillStyle=E,c.beginPath(),c.moveTo(T,L+2),c.lineTo(T+A,L+2),c.lineTo(T+A-1.2,v),c.lineTo(T+1.2,v),c.fill(),X(c,T-.4,L,A+.8,2.2,"#f2efe6"),X(c,T+1,L+C*.45,A-2,C*.25,w)):_==="p"?(c.fillStyle=E,c.beginPath(),c.moveTo(T,v),c.lineTo(T,L+3),c.quadraticCurveTo(T+A/2,L-1.5,T+A,L+3),c.lineTo(T+A,v),c.fill(),X(c,T+1.5,L+C*.35,A-3,C*.35,w),X(c,T,L+2,A,1,"rgba(0,0,0,0.18)")):(X(c,T,L,A,C,E),X(c,T+1.5,L+C*.3,A-3,C*.4,w)),X(c,T,L+1,1,C-1,"rgba(255,255,255,0.28)"),X(c,T+A-1.3,L+1,1.3,C-1,"rgba(0,0,0,0.22)")}T+=1.5+b()*3}},a=(c,f,d,v,g)=>{Sn(c,f,v+4,d,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),X(c,f,v,d,4,"#d3d6da"),X(c,f,v+3.2,d,.8,"rgba(40,40,50,0.45)");for(let b=f+4+g()*10;b<f+d-6;b+=14+g()*16)X(c,b,v+.6,5,2.6,g()<.25?"#f2d23a":g()<.2?"#e84a3a":"#ffffff")},u=(c,f,d,v,g,b,M)=>{X(c,f,d,v,g,M?"#f3f1ea":"#ece5d8"),X(c,f,d,v,g*.13,M?"#f6f6f2":"#efebe2");for(let w of[.035,.085])X(c,f,d+g*w,v,2.4,"#ffffff"),Sn(c,f,d+g*w+2.4,v,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Sn(c,f,d+g*.13,v,g*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let w=0,A=f+18+b()*30;w<2&&A<f+v-40;w++,A+=90+b()*40)X(c,A+13,d+g*.13,1,6,"#888"),X(c,A,d+g*.13+6,28,9,o[Math.floor(b()*9)]),X(c,A+4,d+g*.13+9.5,20,2,"rgba(255,255,255,0.8)");let _=d+g*.25,E=g*.165;X(c,f,_-4,v,4,"#c9ccd0");for(let w=0;w<4;w++){let A=_+E*(w+1);Sn(c,f,A-E,v,E,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),l(c,f,f+v,A,E-6,b),a(c,f,v,A,b)}X(c,f,_+E*4+4,v,d+g-_-E*4-4,"#5c6068"),X(c,f,_+E*4+4,v,1.5,"#8a8e96");for(let w=f+2+b()*20;w<f+v;w+=70+b()*12)X(c,w,_-4,3,E*4+8,"#b4b8be"),X(c,w+2.2,_-4,.8,E*4+8,"rgba(0,0,0,0.3)");if(M){let w=d+g*.7;X(c,f,w+26,v,d+g-w-26,"#7a7e86"),X(c,f,w+26,v,2,"#a8acb2");for(let A=f+2;A<f+v-14;A+=15.5){let C=o[Math.floor(b()*o.length)],I=b()*2;X(c,A,w+I,14,26-I,C),X(c,A,w+I,14,5,b()<.6?"#ffffff":"#e8343a"),X(c,A+2,w+I+8,10,10,b()<.5?"#f2c8a8":o[Math.floor(b()*o.length)]),X(c,A+13,w+I,1,26-I,"rgba(0,0,0,0.25)")}}},h=(c,f,d,v,g,b)=>{X(c,f,d,v,g,"#b88a5e"),Sn(c,f,d,v,g,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let T=f;T<f+v;T+=9)X(c,T,d+g*.55,1,g*.45,"rgba(60,35,20,0.25)");let M=d+g*.3;for(let T=0;T<2;T++){let _=M+T*22;X(c,f+8,_,v*.55,3,"#6a4428"),l(c,f+10,f+v*.55+6,_,14,b,"ctu")}X(c,f+v*.64,d+g*.22,v*.28,g*.26,"#2e3a32"),X(c,f+v*.64,d+g*.22,v*.28,2,"#6a4428");for(let T=0;T<5;T++)X(c,f+v*.67,d+g*(.27+T*.04),v*(.12+b()*.1),1.6,"rgba(240,240,230,0.75)");X(c,f+4,d+g*.56,v-8,6,"#5a3820"),X(c,f+4,d+g*.56+6,v-8,g*.08,"#7a5232"),X(c,f+v*.3,d+g*.47,18,g*.09,"#c8ccd0"),X(c,f+v*.3+3,d+g*.47+3,12,5,"#3a3a40");for(let T=f+30+b()*20;T<f+v-20;T+=70+b()*20)X(c,T,d,1,g*.14,"#3a2a1e"),c.fillStyle="#2f3a36",c.beginPath(),c.moveTo(T-9,d+g*.2),c.quadraticCurveTo(T+.5,d+g*.12,T+10,d+g*.2),c.fill(),c.fillStyle="rgba(255,214,150,0.9)",c.beginPath(),c.ellipse(T+.5,d+g*.2,7,2,0,0,7),c.fill();for(let T=f+26+b()*16;T<f+v-26;T+=78+b()*20){X(c,T-16,d+g*.74,32,4,"#4a2e1c"),X(c,T-1.5,d+g*.74+4,3,g*.2,"#2e2420"),X(c,T-8,d+g*.94,16,2,"#2e2420");for(let _ of[-24,24])X(c,T+_-6,d+g*.8,12,3,"#3a2618"),X(c,T+_+(_<0?-6:4),d+g*.66,2,g*.17,"#3a2618"),X(c,T+_-5,d+g*.83,1.6,g*.13,"#3a2618"),X(c,T+_+3.4,d+g*.83,1.6,g*.13,"#3a2618");c.fillStyle="#f4f0e8",c.beginPath(),c.ellipse(T-6,d+g*.74-1.5,3,1.5,0,0,7),c.fill()}},p=(c,f,d,v,g,b,M="")=>{let T=At(b);if(zo(c,i,d,v,"#e6e2da"),g==="glass"||g==="door"||g==="konbini"||g==="cafe"){let E=v*.22,w=d-12,A=v*.78-4;X(c,6,E,w,A,g==="konbini"?"#f6f4ea":g==="cafe"?"#7a5a40":"#8a7a68"),r(c,6,E,w,A,T,M||g),g==="konbini"&&X(c,6,E+4,w,5,"#ffffff"),g==="door"&&(X(c,d/2-30,E+18,60,24,"#fff"),Rt(c,"\u55B6\u696D\u4E2D",d/2,E+30,54,18,"#c82828")),g==="glass"&&!M&&T()<.7&&(X(c,16,E+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),Rt(c,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,E+44,40,16,"#c02020")),wM(c,f,6,E,w,A,g==="konbini"?"#e4eef8":g==="cafe"?"#f0a868":"#f2d2a6"),c.save(),c.globalAlpha=.35,Ns(c,6,E,w,A,T),c.restore(),X(c,6,E,w,4,"#4a4e57"),X(f,6,E,w,4,"#000"),g==="door"&&(X(c,d/2-2,E,4,A,"#4a4e57"),X(f,d/2-2,E,4,A,"#000"),X(c,d/2-14,E+A*.45,3,40,"#c0c4c8"),X(c,d/2+11,E+A*.45,3,40,"#c0c4c8")),g==="cafe"&&(X(c,d*.62,v-70,46,62,"#2c3a30"),X(f,d*.62,v-70,46,62,"#000"),Rt(c,"\u30E9\u30F3\u30C1",d*.62+23,v-50,40,13,"#fff",700))}else if(g==="shutter"){let E=v*.2,w=d-12,A=v*.8;X(c,6,E,w,A,"#b8bcc0");for(let C=E;C<E+A;C+=7)X(c,6,C,w,2,"rgba(60,64,72,0.35)"),X(c,6,C+2,w,1,"rgba(255,255,255,0.35)");X(c,6,E,w,10,"#8f949a"),an(c,i,d,v,.12),T()<.5&&(X(c,d/2-40,E+A*.35,80,26,"#fff"),Rt(c,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),d/2,E+A*.35+13,74,16,"#333",700))}else if(g==="noren"){X(c,0,0,d,v,"#5b3c28");for(let I=0;I<d;I+=10)X(c,I,v*.2,3,v*.8,"rgba(25,15,8,0.6)");an(c,i,d,v,.15);let _=d*.12,E=v*.24,w=d*.76,A=v*.34,C=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);X(c,_,E,w,A,C);for(let I=1;I<3;I++)X(c,_+w*I/3-1,E+A*.25,2,A*.75,"rgba(255,255,255,0.25)");Rt(c,e.pick(AM),d/2,E+A*.55,w*.9,46,"#f5f0e6",800),X(c,_,E,w,6,"#3a2a1c"),f.fillStyle="#ffae5c",f.fillRect(_,E+A,w,v-E-A),f.fillStyle="rgba(255,170,90,0.6)",f.fillRect(_,E,w,A),c.fillStyle="#d8352a",c.beginPath(),c.ellipse(d*.9,v*.36,13,19,0,0,7),c.fill(),Rt(c,"\u9152",d*.9,v*.36,16,14,"#fff"),f.fillStyle="#ff6a3a",f.beginPath(),f.ellipse(d*.9,v*.36,13,19,0,0,7),f.fill()}else if(g==="house"){let _=d*.18,E=v*.3,w=d*.34,A=v*.7;X(c,_-6,E-6,w+12,A+6,"#9a9a96"),X(c,_,E,w,A,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),X(c,_+w-14,E+A*.5,4,22,"#d8d0c0"),X(c,_+6,E+10,w-12,A*.25,"rgba(255,255,255,0.18)"),X(c,d*.62,v*.48,30,22,"#cfcfca"),X(c,d*.62+6,v*.48+5,18,4,"#555");let C=d*.6,I=v*.22,R=d*.3,L=v*.2;ko(c,C,I,R,L,3),Ns(c,C,I,R,L,T,1);for(let D=0;D<3;D++)c.fillStyle="#7b5a43",c.fillRect(d*.6+D*22,v-26,16,18),c.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),c.beginPath(),c.arc(d*.6+D*22+8,v-32,11,0,7),c.fill();f.fillStyle="#ffd08a",f.beginPath(),f.arc(_+w+14,E+8,6,0,7),f.fill(),T()<.6&&(f.fillStyle="#ffcf8f",f.fillRect(C,I,R,L))}else if(g==="garage"){let E=v*.25,w=d-16,A=v*.75;X(c,8,E,w,A,"#efefec");for(let C=E;C<E+A;C+=9)X(c,8,C,w,1.5,"rgba(80,80,90,0.25)");an(c,i,d,v,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((c,f)=>{i.add("shop_"+c,t,s,(d,v,g,b)=>p(d,v,g,b,c,100+f)),(c==="glass"||c==="noren"||c==="house")&&i.add("shop_"+c+"2",t,s,(d,v,g,b)=>p(d,v,g,b,c,200+f)),c==="glass"&&["bakery","books","florist","clothes"].forEach((d,v)=>i.add("shop_glass"+(v+3),t,s,(g,b,M,T)=>p(g,b,M,T,"glass",300+v,d)))});for(let c=0;c<14;c++)i.add("hs"+c,512,76,(f,d,v,g)=>{let[b,M]=ih[c%ih.length],T=$m[c*7%$m.length];X(f,0,0,v,g,b),X(f,0,0,v,5,"rgba(255,255,255,0.35)"),X(f,0,g-6,v,6,"rgba(0,0,0,0.18)"),c%3===0&&(X(f,12,12,g-24,g-24,M),Rt(f,T[0],12+(g-24)/2,g/2,g-30,34,b)),Rt(f,T,v/2+(c%3===0?24:0),g/2+2,v*.7,50,M,900),an(f,i,v,g,.08),d.fillStyle=b==="#fff"||b==="#f5efe0"?"#d9d6cc":b,d.fillRect(0,0,v,g),d.globalAlpha=.9,Rt(d,T,v/2+(c%3===0?24:0),g/2+2,v*.7,50,M==="#fff"?"#ffffff":M,900),d.globalAlpha=1});for(let[c,f,d]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+c,512,76,(v,g,b,M)=>{X(v,0,0,b,M,f),X(v,0,0,b,5,"rgba(255,255,255,0.35)"),X(v,0,M-6,b,6,"rgba(0,0,0,0.18)"),Rt(v,c,b/2,M/2+2,b*.7,50,d,900),an(v,i,b,M,.08),g.fillStyle=f,g.fillRect(0,0,b,M),g.globalAlpha=.9,Rt(g,c,b/2,M/2+2,b*.7,50,d,900),g.globalAlpha=1});let m=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],x=(c,f,d,v,g,b)=>{c.beginPath(),c.moveTo(f+b,d),c.arcTo(f+v,d,f+v,d+g,b),c.arcTo(f+v,d+g,f,d+g,b),c.arcTo(f,d+g,f,d,b),c.arcTo(f,d,f+v,d,b),c.closePath()};for(let c=0;c<10;c++)i.add("vs"+c,72,288,(f,d,v,g)=>{let b=Jm[c%Jm.length],M=m[(c*5+2)%m.length],T=c%10===3||c%10===6||c%10===8,[_,E]=ih[(c*3+1)%ih.length],w=T?_==="#fff"||_==="#f5efe0"?"#2b2b33":_:"#fbf7ef",A=T?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][c%4];X(f,0,0,v,g,"#2a2b30"),x(f,3,3,v-6,g-6,8),f.fillStyle=w,f.fill(),Sn(f,3,3,v-6,g-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),f.save(),x(f,8,8,v-16,g-16,6),f.strokeStyle=M,f.globalAlpha=.55,f.lineWidth=7,f.stroke(),f.globalAlpha=1,f.strokeStyle="#fff6fb",f.lineWidth=2.2,f.stroke(),f.restore(),Fr(f,b,v/2,18,g-18,50,A,900),an(f,i,v,g,.06),X(d,0,0,v,g,"#000"),x(d,3,3,v-6,g-6,8),d.fillStyle=T?"#3a3a3e":"#4a4844",d.fill(),d.save(),x(d,8,8,v-16,g-16,6),d.strokeStyle=M,d.lineWidth=7,d.stroke(),d.strokeStyle="#ffffff",d.lineWidth=2.5,d.stroke(),d.restore(),Fr(d,b,v/2,18,g-18,50,T?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([c,f,d],v)=>i.add("bb"+v,512,240,(g,b,M,T)=>{X(g,0,0,M,T,"#fbfaf5"),X(g,0,0,M,T*.62,d),Rt(g,c,M/2,T*.32,M*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Rt(g,f,M/2,T*.8,M*.85,52,"#333",800),an(g,i,M,T,.08),X(b,0,0,M,T,"#555"),b.globalAlpha=.85,X(b,0,0,M,T*.62,d),Rt(b,c,M/2,T*.32,M*.9,96,"#fff",900),b.globalAlpha=1})),i.add("konbini_band",480,72,(c,f,d,v)=>{X(c,0,0,d,v,"#fbfbf7"),X(c,0,v*.62,d,v*.14,"#2a9a4a"),X(c,0,v*.76,d,v*.12,"#f08a24"),X(c,0,v*.88,d,v*.12,"#2f6fd8"),Rt(c,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,v*.32,d*.8,40,"#1d3d8a",900),f.fillStyle="#f3f6f0",f.fillRect(0,0,d,v),Rt(f,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,v*.32,d*.8,40,"#1d3d8a",900)});for(let c=0;c<3;c++)i.add("vend"+c,128,234,(f,d,v,g)=>{let b=["#d8352a","#2f6fd8","#f4f4f0"][c];X(f,0,0,v,g,b),X(f,8,10,v-16,g*.55,"#eef4f8");let M=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let T=0;T<4;T++)for(let _=0;_<6;_++){let E=14+_*17,w=18+T*30;f.fillStyle=M[(T*6+_+c)%M.length],f.fillRect(E,w,11,20),f.fillStyle="rgba(255,255,255,0.5)",f.fillRect(E+2,w+2,3,14),f.fillStyle="#2a2a2a",f.fillRect(E,w+23,11,3)}X(f,10,g*.62,v-20,22,"#222"),X(f,v-34,g*.66,14,22,"#bbb"),X(f,14,g*.82,v-28,22,"#1b1b1b"),Rt(f,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][c],v/2,g*.62+11,v-28,14,"#fff",700),an(f,i,v,g,.08),d.fillStyle="#f2f8ff",d.fillRect(8,10,v-16,g*.55);for(let T=0;T<4;T++)for(let _=0;_<6;_++)d.fillStyle=M[(T*6+_+c)%M.length],d.fillRect(14+_*17,18+T*30,11,20);d.fillStyle="#9fd0ff",d.fillRect(10,g*.62,v-20,22)});i.add("ac",128,88,(c,f,d,v)=>{X(c,0,0,d,v,"#e9e9e4"),Sn(c,0,0,d,v,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),c.fillStyle="#9a9c9e",c.beginPath(),c.arc(d*.4,v*.5,v*.36,0,7),c.fill(),c.strokeStyle="#d6d6d2",c.lineWidth=2;for(let g=6;g<v*.36;g+=6)c.beginPath(),c.arc(d*.4,v*.5,g,0,7),c.stroke();for(let g=12;g<v-10;g+=6)X(c,d*.78,g,d*.16,2,"#b8b8b2")}),i.add("plate",128,64,(c,f,d,v)=>{X(c,0,0,d,v,"#f2cf3a"),c.strokeStyle="#2f5a2f",c.lineWidth=3,c.strokeRect(3,3,d-6,v-6),Rt(c,"\u54C1\u5DDD 580",d/2,16,d*.6,14,"#2f5a2f",700),Rt(c,"\u3042 12-34",d/2,42,d*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(c,f,d,v)=>{c.fillStyle="#fff",c.beginPath(),c.moveTo(2,2),c.lineTo(d-2,2),c.lineTo(d/2,v-2),c.fill(),c.fillStyle="#d8231c",c.beginPath(),c.moveTo(10,7),c.lineTo(d-10,7),c.lineTo(d/2,v-12),c.fill(),Rt(c,"\u6B62\u307E\u308C",d/2,34,d*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(c,f,d,v)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,v/2,d/2-1,0,7),c.fill(),c.fillStyle="#1e5bb8",c.beginPath(),c.arc(d/2,v/2,d/2-6,0,7),c.fill(),c.fillStyle="#fff",c.beginPath(),c.moveTo(d/2,22),c.lineTo(d/2+22,50),c.lineTo(d/2+8,50),c.lineTo(d/2+8,88),c.lineTo(d/2-8,88),c.lineTo(d/2-8,50),c.lineTo(d/2-22,50),c.fill()}),i.add("sign_speed",112,112,(c,f,d,v)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,v/2,d/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=12,c.beginPath(),c.arc(d/2,v/2,d/2-9,0,7),c.stroke(),Rt(c,"30",d/2,v/2+2,d*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(c,f,d,v)=>{X(c,0,0,d,v,"#1d4f9a"),c.strokeStyle="#fff",c.lineWidth=2,c.strokeRect(3,3,d-6,v-6),Fr(c,"\u672C\u753A\u4E8C\u4E01\u76EE",d/2,10,v-10,24,"#fff",700)});for(let c=0;c<4;c++)i.add("poster"+c,64,90,(f,d,v,g)=>{let b=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][c];X(f,0,0,v,g,b),X(f,4,4,v-8,g*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][c]),Rt(f,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][c],v/2,g*.25,v-12,18,"#fff",900);for(let M=0;M<4;M++)X(f,8,g*.58+M*8,v-16-M%2*14,3,"rgba(60,60,60,0.5)")});for(let c=0;c<3;c++)i.add("bal"+c,t,88,(f,d,v,g)=>{let b=["#e9e3d6","#dfe6ea","#efe2dc"][c];if(zo(f,i,v,g,b),c===1)for(let M=10;M<v-6;M+=v/6)X(f,M,10,v/6-8,g-20,"rgba(220,235,245,0.9)"),f.fillStyle="rgba(255,255,255,0.45)",f.fillRect(M,10,v/6-8,(g-20)*.4);else{X(f,0,0,v,7,"rgba(255,255,255,0.4)");for(let M=v/3;M<v;M+=v/3)X(f,M-1,0,2,g,"rgba(0,0,0,0.08)")}X(f,0,g-6,v,6,"rgba(0,0,0,0.12)"),Ds(f,v*.3,g-6,10,10,.2)});i.add("kawara",272,256,(c,f,d,v)=>{X(c,0,0,d,v,"#58617a");for(let g=0;g<v;g+=16)Sn(c,0,g,d,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let g=-4;g<d;g+=20)X(c,g,0,2,v,"rgba(0,0,0,0.18)");an(c,i,d,v,.12)}),i.add("wood",256,256,(c,f,d,v)=>{X(c,0,0,d,v,"#6d4c37");for(let g=0;g<v;g+=14)X(c,0,g,d,2,"rgba(25,15,8,0.4)"),X(c,0,g+2,d,1,"rgba(255,220,180,0.07)");an(c,i,d,v,.16)}),i.add("block",256,128,(c,f,d,v)=>{X(c,0,0,d,v,"#c9c7bf");for(let g=0;g<v;g+=32)for(let b=g/32%2?-32:0;b<d;b+=64)c.strokeStyle="rgba(80,80,80,0.35)",c.lineWidth=2,c.strokeRect(b+1,g+1,62,30);for(let g=0;g<d;g+=64)c.fillStyle="rgba(70,70,70,0.25)",c.fillRect(g+20,40,24,16);an(c,i,d,v,.15),Ds(c,0,0,d,40,.1)}),i.add("lantern",64,96,(c,f,d,v)=>{c.fillStyle="#d8352a",c.beginPath(),c.ellipse(d/2,v/2,d/2-2,v/2-8,0,0,7),c.fill();for(let g=16;g<v-12;g+=7)X(c,4,g,d-8,1.5,"rgba(0,0,0,0.2)");X(c,d/2-14,2,28,8,"#222"),X(c,d/2-14,v-10,28,8,"#222"),Rt(c,"\u796D",d/2,v/2,d*.6,28,"#fff",900),f.fillStyle="#ff6a35",f.beginPath(),f.ellipse(d/2,v/2,d/2-2,v/2-8,0,0,7),f.fill()}),i.add("busstop",96,96,(c,f,d,v)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,v/2,d/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=8,c.beginPath(),c.arc(d/2,v/2,d/2-6,0,7),c.stroke(),Rt(c,"\u30D0\u30B9\u505C",d/2,v/2,d*.66,20,"#1d3d8a",900)}),i.add("white",16,16,c=>X(c,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(c,f,d,v)=>{c.save(),c.translate(d/2,v/2),c.rotate(Math.PI/4),c.fillStyle="#1b1b1b",c.fillRect(-41,-41,82,82),c.fillStyle="#f2c230",c.fillRect(-37,-37,74,74),c.restore(),c.fillStyle="#1b1b1b",c.fillRect(d/2-22,v/2-6,44,18),c.fillRect(d/2-16,v/2-16,18,12),c.fillRect(d/2+8,v/2-13,5,7),c.beginPath(),c.arc(d/2-12,v/2+15,5,0,7),c.arc(d/2+12,v/2+15,5,0,7),c.fill(),Rt(c,"\u8E0F\u5207",d/2,v/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((c,f)=>i.add("bridge"+f,64,176,(d,v,g,b)=>{X(d,0,0,g,b,"#b9b5ab"),an(d,i,g,b,.2),X(d,6,6,g-12,b-12,"#a7a398"),Fr(d,c,g/2,14,b-14,34,"#3f3c37",800)})),i.add("signal",240,84,(c,f,d,v)=>{X(c,0,0,d,v,"#4a4d52"),X(c,0,0,d,5,"#5c6066"),an(c,i,d,v,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([g,b])=>{c.fillStyle="#26282c",c.beginPath(),c.arc(b,v/2,33,0,7),c.fill(),c.fillStyle=g,c.beginPath(),c.arc(b,v/2,27,0,7),c.fill()})}),i.add("ped_sig",64,128,(c,f,d,v)=>{X(c,0,0,d,v,"#3d4045"),c.fillStyle="#5a1814",c.fillRect(8,8,d-16,v/2-12),c.fillStyle="#0d4f44",c.fillRect(8,v/2+4,d-16,v/2-12),c.fillStyle="rgba(255,255,255,0.18)",c.beginPath(),c.arc(d/2,v*.18,6,0,7),c.fill(),c.fillRect(d/2-5,v*.24,10,18)}),i.add("tomare",256,96,(c,f,d,v)=>{c.clearRect(0,0,d,v),c.fillStyle="rgba(244,244,238,0.012)",c.fillRect(0,0,d,v),Rt(c,"\u6B62\u307E\u308C",d/2,v/2+4,d*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((c,f)=>i.add("hodokyo"+f,256,44,(d,v,g,b)=>{X(d,0,0,g,b,"#1f4f96"),d.strokeStyle="#fff",d.lineWidth=3,d.strokeRect(4,4,g-8,b-8),Rt(d,c,g/2,b/2+1,g*.85,28,"#fff",800)}));let S=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];S.forEach(([c,f,d],v)=>{let g=S[(v+3)%4][0],b=S[(v+1)%4][0];i.add("ekimei"+v,320,124,(M,T,_,E)=>{X(M,0,0,_,E,"#3a3d42"),X(M,4,4,_-8,E-8,"#f8f8f3"),Rt(M,f,_/2,20,_*.5,15,"#2b2b2b",700),Rt(M,c,_/2,52,_*.6,40,"#151515",900),Rt(M,d,_/2,80,_*.5,12,"#555",600),X(M,4,E-30,_-8,26,"#1f9a50"),M.fillStyle="#fff",oh(M,12,700),M.textBaseline="middle",M.textAlign="left",M.fillText("\u2190 "+g,12,E-17),M.textAlign="right",M.fillText(b+" \u2192",_-12,E-17),an(M,i,_,E,.06),X(T,4,4,_-8,E-8,"#8a8a84")}),i.add("ekiplate"+v,220,48,(M,T,_,E)=>{X(M,0,0,_,E,"#4b3326"),an(M,i,_,E,.2),Rt(M,c+"\u99C5",_/2,E/2+1,_*.8,30,"#f3ead8",800)})});for(let c of["l","r"])i.add("chev_"+c,96,120,(f,d,v,g)=>{X(f,0,0,v,g,"#f4f4ef"),X(f,4,4,v-8,g-8,"#1e5bb8"),f.fillStyle="#f8f8f4",f.beginPath();let b=c==="r"?1:-1,M=v/2,T=g/2;f.moveTo(M-b*26,T-40),f.lineTo(M+b*22,T),f.lineTo(M-b*26,T+40),f.lineTo(M-b*8,T+40),f.lineTo(M+b*40,T),f.lineTo(M-b*8,T-40),f.closePath(),f.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((c,f)=>i.add("tunnel"+f,360,80,(d,v,g,b)=>{X(d,0,0,g,b,"#e9e7e0"),X(d,4,4,g-8,b-8,"#24403b"),an(d,i,g,b,.08),Rt(d,c,g/2,b*.42,g*.8,38,"#f4f2ea",800),Rt(d,"L = 170 m",g/2,b*.8,g*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(c,f,d,v)=>{X(c,0,0,d,v,"#f6f6f2"),c.fillStyle="#d42a22";for(let g=-20;g<v;g+=26)c.beginPath(),c.moveTo(4,g),c.lineTo(d/2,g+20),c.lineTo(d-4,g),c.lineTo(d-4,g+11),c.lineTo(d/2,g+31),c.lineTo(4,g+11),c.closePath(),c.fill();c.strokeStyle="#222",c.lineWidth=3,c.strokeRect(1.5,1.5,d-3,v-3)}),i.add("xing_plate",128,48,(c,f,d,v)=>{X(c,0,0,d,v,"#f6f6f2"),c.strokeStyle="#d8231c",c.lineWidth=4,c.strokeRect(3,3,d-6,v-6),Rt(c,"\u8E0F\u5207\u6CE8\u610F",d/2,v/2,d*.8,26,"#d8231c",900)}),i.add("rail",240,80,(c,f,d,v)=>{c.clearRect(0,0,d,v),X(c,0,0,d,7,"#e9ebee"),X(c,0,6,d,2,"rgba(60,70,80,0.5)"),X(c,0,v-6,d,6,"#d5d8dc");for(let g=3;g<d;g+=9)X(c,g,7,3,v-13,"#e2e5e9"),X(c,g+2,7,1,v-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(c,f,d,v)=>{let g=At(4242);X(c,0,0,d,v,"#3d3f3c");let b=38,M=b/Math.SQRT2;c.save(),c.beginPath(),c.rect(0,22,d,v-22),c.clip();for(let T=-2;T*M<v+b;T++)for(let _=-2;_*b<d+b;_++){let E=_*b+(T%2?b/2:0),w=22+T*M,A=.52+g()*.17,C=Math.min(1,Math.max(0,(w-v*.55)/(v*.4))),I=Math.round(255*A*(1-.38*C)),R=`rgb(${I-4},${I-2},${I-9})`;c.fillStyle=R,c.beginPath(),c.moveTo(E,w-M+3.5),c.lineTo(E+M-3.5,w),c.lineTo(E,w+M-3.5),c.lineTo(E-M+3.5,w),c.closePath(),c.fill(),c.fillStyle="rgba(255,255,255,0.12)",c.beginPath(),c.moveTo(E,w-M+3.5),c.lineTo(E+M-3.5,w),c.lineTo(E,w),c.closePath(),c.fill(),C>.3&&g()<.5&&(c.fillStyle=`rgba(70,96,52,${.25+.3*g()})`,c.beginPath(),c.arc(E+(g()-.5)*10,w+6,4+g()*6,0,7),c.fill())}c.restore(),Sn(c,0,v*.55,d,v*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),X(c,0,0,d,22,"#8c8d87"),X(c,0,18,d,4,"rgba(0,0,0,0.3)"),X(c,0,0,d,3,"rgba(255,255,255,0.2)"),an(c,i,d,v,.12)}),i.add("wrail",240,80,(c,f,d,v)=>{c.clearRect(0,0,d,v),X(c,0,0,d,9,"#6a4a34"),X(c,0,0,d,2,"rgba(255,225,190,0.25)"),X(c,0,8,d,2,"rgba(20,10,5,0.45)"),X(c,0,v-10,d,10,"#5e412e"),X(c,0,v-10,d,2,"rgba(255,225,190,0.18)");for(let g=4;g<d;g+=12)X(c,g,9,5,v-19,"#634632"),X(c,g,9,1.2,v-19,"rgba(255,225,190,0.18)"),X(c,g+4,9,1,v-19,"rgba(20,10,5,0.4)");an(c,i,d,v,.15)}),i.add("woodwall",t,t,(c,f,d,v)=>{let g=At(5151);X(c,0,0,d,v,"#5e4130");for(let b=0;b<v;b+=16){let M=g();X(c,0,b,d,16,M<.15?"#6b4b37":M<.3?"#553a2b":"#5e4130"),X(c,0,b,d,2,"rgba(255,220,180,0.12)"),X(c,0,b+14,d,2,"rgba(15,8,4,0.45)");for(let T=g()*80;T<d;T+=60+g()*90)X(c,T,b+2,1.5,12,"rgba(15,8,4,0.35)")}Sn(c,0,0,d,v,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),an(c,i,d,v,.2)}),i}var RM=11,CM=[7,8,9,10,11],PM=[["\u713C\u304D\u9CE5","#fbf6f2","#c8102e","#ff4fd8",1],["\u5C45\u9152\u5C4B","#fdf8ee","#c41e2a",null,1],["\u305D\u3070","#fbf7ef","#1f2a6e","#3fd8ff",1],["\u6D0B\u54C1\u5E97","#2a8a5a","#ffffff",null,0],["\u30B9\u30CA\u30C3\u30AF","#2a1f4a","#ff8ae8","#b45cff",0],["\u30AB\u30E9\u30AA\u30B1","#c8287a","#ffffff","#ffd0f0",0],["\u4E2D\u83EF\u6599\u7406","#1f4fa8","#ffffff",null,0],["\u30E9\u30FC\u30E1\u30F3","#c8241c","#fff6d8","#ffc94a",0],["\u55AB\u8336","#fdf4e4","#6a3a1e","#ffb84a",1],["\u713C\u8089","#fbf6f2","#b8186a","#b45cff",1],["\u713C\u304D\u9CE5","#fbf4fb","#a0128a","#b45cff",1]],yl=(i,e,t,n,s,r)=>{i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()};function IM(i,e,t,n,s,[r,o,l,a,u]){let h=n/160,p=6*h,m=12*h;X(e,0,0,n,s,"#2a2b30"),yl(e,p*.5,p*.5,n-p,s-p,m),e.fillStyle=o,e.fill(),e.save(),yl(e,p*.5,p*.5,n-p,s-p,m),e.clip();let x=e.createRadialGradient(n/2,s/2,n*.1,n/2,s/2,s*.62);x.addColorStop(0,u?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.12)"),x.addColorStop(1,"rgba(0,0,0,0.14)"),e.fillStyle=x,e.fillRect(0,0,n,s),e.restore();let y=(d,v,g,b)=>{d.save(),yl(d,p+5*h,p+5*h,n-2*p-10*h,s-2*p-10*h,m*.8),d.shadowColor=v,d.shadowBlur=g*h,d.strokeStyle=v,d.lineWidth=6*h,d.stroke(),d.shadowBlur=0,d.strokeStyle=b,d.lineWidth=2.2*h,d.stroke(),d.restore()};a?y(e,a,10,"#fff4fb"):(e.save(),yl(e,p+5*h,p+5*h,n-2*p-10*h,s-2*p-10*h,m*.8),e.strokeStyle=l,e.globalAlpha=.7,e.lineWidth=3*h,e.stroke(),e.restore());let S=p+20*h,c=s-p-20*h,f=Math.min(n*.62,(c-S)/[...r].length);Fr(e,r,n/2,S,c,f,l,900,u?"rgba(255,255,255,0.9)":"rgba(0,0,0,0.25)"),an(e,i,n,s,.05),X(t,0,0,n,s,"#000"),yl(t,p*.5,p*.5,n-p,s-p,m),t.fillStyle=u?"#b4aea4":a&&o==="#2a1f4a"?"#100c1c":o,t.globalAlpha=u?1:.55,t.fill(),t.globalAlpha=1,a&&y(t,a,12,"#ffffff"),Fr(t,r,n/2,S,c,f,u||o==="#2a1f4a"?l:"#ffffff",900),u&&(t.save(),t.globalCompositeOperation="multiply",Fr(t,r,n/2,S,c,f,"#8a8a8a",900),t.restore())}function LM(i,e,t,n,s){let r=At(7331),o=s/1.26/(n/3);e.clearRect(0,0,n,s);let l=11,a=n/l,u=.15*(s/1.26);X(e,0,0,n,s-u*.5,"#4d5f92");for(let h=0;h<l;h++){let p=h*a,m=e.createLinearGradient(p,0,p+a,0);m.addColorStop(0,"#2c3760"),m.addColorStop(.18,"#5a70a8"),m.addColorStop(.45,"#9fb4e0"),m.addColorStop(.7,"#6a80b8"),m.addColorStop(1,"#33416e"),e.fillStyle=m,e.fillRect(p,0,a,s-u*.5)}for(let h=s-u*.5-52;h>0;h-=52)Sn(e,0,h,n,10,[[0,"rgba(20,26,50,0.45)"],[1,"rgba(20,26,50,0)"]]),X(e,0,h-2,n,2,"rgba(200,215,240,0.35)");for(let h=0;h<l;h++){let p=(h+.5)*a,m=s-u*.5,x=a*.47;e.save(),e.translate(p,m),e.scale(1,o),e.fillStyle="#26305a",e.beginPath(),e.arc(0,0,x,0,7),e.fill(),e.fillStyle="#5c72aa",e.beginPath(),e.arc(0,0,x*.8,0,7),e.fill(),e.fillStyle="rgba(190,206,240,0.8)",e.beginPath(),e.arc(-x*.2,-x*.25,x*.38,0,7),e.fill(),e.fillStyle="#3a4878",e.beginPath(),e.arc(0,0,x*.22,0,7),e.fill(),e.restore()}e.save(),e.globalCompositeOperation="source-atop",e.globalAlpha=.12,e.fillStyle=i.grain,e.fillRect(0,0,n,s),e.restore();for(let h=0;h<40;h++)e.fillStyle=r()<.5?"rgba(255,255,255,0.08)":"rgba(0,0,20,0.1)",e.fillRect(r()*n,r()*(s-u),a*(.5+r()),3+r()*6)}function DM(i,e,t,n,s,r){X(e,0,0,n,s,"#1c2b5e"),X(e,0,0,n,4,"rgba(255,255,255,0.3)"),X(e,0,s-5,n,5,"rgba(0,0,0,0.25)"),e.strokeStyle="#d9b44a",e.lineWidth=2,e.strokeRect(7,7,n-14,s-14),Rt(e,r,n/2,s/2+2,n*.66,52,"#f6d35a",900,"rgba(60,40,0,0.5)"),an(e,i,n,s,.06),X(t,0,0,n,s,"#0a1024"),Rt(t,r,n/2,s/2+2,n*.66,52,"#f0c850",900)}function NM(i,e,t,n,s,r,o){let l=At(r),a=n/360;X(e,0,0,n,s,"#4b3426"),Sn(e,0,0,n,s,[[0,"rgba(255,230,200,0.08)"],[1,"rgba(0,0,0,0.2)"]]);let u=n*.12,h=s*(o?.3:.17),p=n*.76,m=s*(o?.62:.56);for(let x of[e,t])X(x,u,h,p,m,"#e9b56c"),Sn(x,u,h,p,m,[[0,"rgba(255,240,200,0.55)"],[1,"rgba(110,60,25,0.4)"]]);if(!o)for(let x=h+m*.32;x<h+m-6*a;x+=m*.22){for(let y=u+4*a;y<u+p-10*a;y+=(9+l()*12)*a){let S=(10+l()*12)*a;X(e,y,x-S,7*a,S,["#c0503a","#3a6ab0","#e8c050","#5a9a50","#d07a9a"][Math.floor(l()*5)])}X(e,u,x,p,5*a,"#6e4a30")}o&&(X(e,u,h-s*.12,p,s*.16,"#28356a"),X(t,u,h-s*.12,p,s*.16,"#000")),X(e,u+p/2-4*a,h,8*a,m,"#4b3426"),X(t,u+p/2-4*a,h,8*a,m,"#000"),X(e,0,h+m,n,6*a,"#3a281d"),an(e,i,n,s,.15)}function UM(i,e,t,n,s,r,o){let l=n/360;if(X(e,0,0,n,s,r?"#5e4130":"#ece2cc"),r)for(let m=0;m<s;m+=16*l)X(e,0,m,n,2*l,"rgba(15,8,4,0.4)");for(let m of[0,n-14*l])X(e,m,0,14*l,s,"#4b3426");X(e,0,s-12*l,n,12*l,"#3a281d");let a=n*.2,u=s*.22,h=n*.6,p=s*.46;X(e,a-8*l,u-8*l,h+16*l,p+16*l,"#4a3020"),Sn(e,a,u,h,p,[[0,"#4f78b8"],[1,"#a6c8ec"]]),X(e,a+h/2-3*l,u,6*l,p,"#4a3020"),o&&(X(t,a,u,h,p,"#ffcf8f"),X(t,a+h/2-3*l,u,6*l,p,"#000")),an(e,i,n,s,.12)}function FM(i){let e=0,t=0,n=0;for(let[s,r]of i)e+s+4>Us&&(e=0,t+=n+4,n=0),e+=s+4,n=Math.max(n,r);return t+n}function eg(i,e,t,n){let s=e==="hi"?1:.5,r=[360*s,432*s],o=[360*s,348*s],l=[160*s,384*s],a=[512,76],u=[],h=[],p=[];for(let c=0;c<RM;c++)u.push(["shop_p"+c,r,(f,d,v,g,b)=>NM(f,d,v,g,b,6100+c,c===2||c===7||c===10)]);for(let c of CM)for(let f of[!1,!0])h.push(["win"+c+(f?"L":""),o,(d,v,g,b,M)=>UM(d,v,g,b,M,c===8||c===11,f)]);PM.forEach((c,f)=>p.push(["vsB"+f,l,(d,v,g,b,M)=>IM(d,v,g,b,M,c)]));let m=[...u.slice(0,5),p[0],...u.slice(5,10),p[1],u[10],...h.slice(0,4),p[2],...h.slice(4,9),p[3],h[9],...p.slice(4),["hsN_\u6D0B\u54C1\u5E97",a,(c,f,d,v,g)=>DM(c,f,d,v,g,"\u6D0B\u54C1\u5E97")],["kawaraC",[240,256],LM]],x=FM(m.map(c=>c[1])),y=Math.ceil((x+(n?16+n.rows:4))/4)*4,S=new rh(y,2,i.cells);for(let[c,[f,d],v]of m)S.add(c,f,d,(g,b,M,T)=>v(S,g,b,M,T));if(t){let c=t.img.width,f=t.img.height;for(let d of t.tiles)S.paintCell(d.name,t.img,d.x*c,d.y*f,d.w*c,d.h*f,d.ey<0?-1:d.ey*f)}return S.houses=!!n&&BM(S,n),S}function BM(i,e){let n=i.y+i.rowH+4+12;if(n+e.rows>i.H)return!1;i.x=0,i.y=n,i.rowH=0,i.a.clearRect(0,n-8,Us,i.H-n+8);try{for(let s of e.tiles)i.add(s.name,s.w,s.h,(r,o,l,a)=>{r.clearRect(0,0,l,a),r.drawImage(e.img,s.x,s.y,s.w,s.h,0,0,l,a),o.drawImage(e.img,s.x,s.ey,s.w,s.h,0,0,l,a)})}catch(s){return console.warn("painted houses:",s.message),!1}return!0}function tg(i){let l=sh(1024,3328),a=l.getContext("2d"),u=At(321),h={},p={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},m=(b,M,T)=>{let _=p[b],E=256,w=b==="pine",A=b==="sakura";a.save(),a.translate(M,T),a.beginPath(),a.rect(0,0,512,512),a.clip();let C=[[E,E,w?80:92]];for(let R=0;R<(w?10:14);R++){let L=u()*6.28,D=45+u()*120;C.push([E+Math.cos(L)*D,E+Math.sin(L)*D*(w?.42:.9),Math.min(34+u()*52,232-D)])}let I=A?2300:w?2600:2300;for(let R=0;R<I;R++){let L=C[Math.floor(u()*C.length)],D=u()*6.28,O=Math.sqrt(u())*L[2],H=L[0]+Math.cos(D)*O,B=L[1]+Math.sin(D)*O*(w?.45:1),V=O/L[2],z=Math.min(4,Math.max(0,Math.floor(.55+u()*2.7+(V>.82?.5:0))));if(a.fillStyle=_[z],A){let q=7+u()*8;a.beginPath(),a.arc(H,B,q,0,7),a.fill(),u()<.25&&(a.fillStyle=_[4],a.beginPath(),a.arc(H-q*.3,B-q*.3,q*.4,0,7),a.fill())}else if(w)a.save(),a.translate(H,B),a.rotate((u()-.5)*1.2),a.fillRect(-11,-1.6,22,3.2),a.restore();else if(b==="momiji"){let q=8+u()*7;a.save(),a.translate(H,B),a.rotate(u()*6.28),a.beginPath();for(let ee=0;ee<10;ee++){let Ee=ee%2?q*.42:q,we=ee/10*6.2832;a.lineTo(Math.cos(we)*Ee,Math.sin(we)*Ee)}a.closePath(),a.fill(),a.restore()}else if(b==="ginkgo"){let q=9+u()*7;a.save(),a.translate(H,B),a.rotate(u()*6.28),a.beginPath(),a.moveTo(0,0),a.arc(0,0,q,-.95,.95),a.closePath(),a.fill(),a.restore()}else{let q=9+u()*10;a.beginPath(),a.ellipse(H,B,q,q*.55,u()*6.28,0,7),a.fill()}}for(let R=0;R<90;R++){let L=u()*6.28,D=150+u()*85,O=E+Math.cos(L)*D,H=E+Math.sin(L)*D*(w?.45:.92);a.fillStyle=_[1+Math.floor(u()*4)],w?(a.save(),a.translate(O,H),a.rotate((u()-.5)*1.2),a.fillRect(-9,-1.6,18,3.2),a.restore()):(a.beginPath(),a.arc(O,H,A?6+u()*6:7+u()*6,0,7),a.fill())}if(A)for(let R=0;R<14;R++){a.strokeStyle="rgba(150,90,100,0.35)",a.lineWidth=1.5;let L=E+(u()-.5)*300,D=E+60+u()*120;a.beginPath(),a.moveTo(L,D),a.lineTo(L+(u()-.5)*40,D-20-u()*30),a.stroke()}a.restore(),h[b]={u0:M/1024,u1:(M+512)/1024,v0:1-(T+512)/3328,v1:1-T/3328}},x=(b,M,T,_)=>{a.save(),a.translate(M,T),a.beginPath(),a.rect(0,0,512,512),a.clip();let E=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],w=_?120:170;for(let A=0;A<w;A++){let C=256+(u()-.5)*(_?330:380)*Math.sqrt(u()),I=150+u()*(_?230:300)*(1-Math.abs(C-256)/300),R=(C-256)*.35+(u()-.5)*90,L=9+u()*9,D=C+R,O=512-I,H=Math.min(4,Math.floor(u()*2.2+I/380*2.6)),B=a.createLinearGradient(0,512,0,O);B.addColorStop(0,E[0]),B.addColorStop(.6,E[Math.max(1,H-1)]),B.addColorStop(1,E[H]),a.fillStyle=B,a.beginPath(),a.moveTo(C-L/2,512),a.quadraticCurveTo(C-L/2+R*.3,512-I*.55,D,O),a.quadraticCurveTo(C+L/2+R*.3,512-I*.5,C+L/2,512),a.fill()}if(_)for(let A=0;A<16;A++){let C=110+u()*290,I=150+u()*200,R=u();if(a.strokeStyle="#3e7334",a.lineWidth=5,a.beginPath(),a.moveTo(C+(u()-.5)*20,512),a.quadraticCurveTo(C+(u()-.5)*30,(I+512)/2,C,I),a.stroke(),R<.55){a.fillStyle="#fbfaf2";for(let L=0;L<12;L++){let D=L/12*6.283;a.beginPath(),a.ellipse(C+Math.cos(D)*11,I+Math.sin(D)*11,9,4.5,D,0,7),a.fill()}a.fillStyle="#f2c230",a.beginPath(),a.arc(C,I,8,0,7),a.fill()}else if(R<.85)a.fillStyle="#f6c62e",a.beginPath(),a.arc(C,I,15,0,7),a.fill(),a.fillStyle="#ffe27a",a.beginPath(),a.arc(C-3,I-3,8,0,7),a.fill();else{a.fillStyle="#9b7fd6";for(let L=0;L<6;L++)a.beginPath(),a.arc(C+(u()-.5)*16,I+(u()-.5)*16,6,0,7),a.fill()}}a.restore(),h[b]={u0:M/1024,u1:(M+512)/1024,v0:1-(T+512)/3328,v1:1-T/3328}},y=(b,M,T)=>{let _=At(97);a.save(),a.translate(M,T),a.beginPath(),a.rect(0,0,512,512),a.clip(),a.lineCap="round";let E=(w,A,C,I,R,L)=>{let D=w+Math.cos(C)*I,O=A+Math.sin(C)*I;if(a.strokeStyle=L>3?"#76605f":L>1?"#6c5458":"#62494f",a.lineWidth=R,a.beginPath(),a.moveTo(w,A),a.lineTo(D,O),a.stroke(),L<=0||R<.7)return;let H=2+(_()<.4?1:0);for(let B=0;B<H;B++){let V=C+(_()-.5)*1.1+(B-(H-1)/2)*.42;V=V*.8+-Math.PI/2*.2,E(D,O,V,I*(.62+_()*.2),R*.68,L-1)}};for(let w=0;w<6;w++)E(256+(_()-.5)*40,500,-Math.PI/2+(_()-.5)*.9,110+_()*50,5.6,6);a.restore(),h[b]={u0:M/1024,u1:(M+512)/1024,v0:1-(T+512)/3328,v1:1-T/3328}},S=(b,M,T,_,E,w=4,A=!1)=>{let C=At(_),I=1024,R=504,L=A?246/504:1;a.save(),a.translate(M,T+8*L),a.beginPath(),a.rect(0,0,512,R*L),a.clip(),a.scale(.5,L);let D=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],O=ee=>{let Ee=ee/I;return(.5+.5*Math.min(1,Ee/.45)**.8)*(1-.4*Math.max(0,(Ee-.9)/.1))},H=(ee,Ee,we,Me)=>{Ee=Math.min(Ee,R*.985);let W=ee+we,J=R-Ee,ve=ee+we*.25,Pe=R-Ee*.62-Math.abs(we)*.35;a.moveTo(ee-Me/2,R),a.quadraticCurveTo(ve-Me*.42,Pe,W,J),a.quadraticCurveTo(ve+Me*.42,Pe+Me*.5,ee+Me/2,R),a.closePath()},B=[];for(let ee=24+C()*24;ee<I-20;ee+=(ee<I*.25?56:44)+C()*26)B.push(ee);let V=()=>B[Math.floor(C()*B.length)],z=(ee,Ee,we,Me,W,J,ve,Pe,ie)=>{let xe=D.map(()=>[]);for(let Be=0;Be<ee;Be++){let ze=V(),Ae=ze+(C()-.5)*34,Ge=O(Ae),te=Ae/I,de=R*(Ee+C()*(we-Ee))*Ge*1.12,j=(C()-.5)*Me+(Ae-I*.45)*.12;xe[Math.min(8,Pe+Math.floor(C()*(ie-Pe+1)+te*1.2))].push([Ae,de,j,W+C()*(J-W)])}xe.forEach((Be,ze)=>{if(!Be.length)return;let Ae=a.createLinearGradient(0,R,0,R*(1-we*.8));Ae.addColorStop(0,D[ve]),Ae.addColorStop(.55,D[Math.round((ve+ze)/2)]),Ae.addColorStop(1,D[ze]),a.fillStyle=Ae,a.beginPath();for(let Ge of Be)H(Ge[0],Ge[1],Ge[2],Ge[3]);a.fill()})};z(360,.25,.55,150,12,22,0,2,3),z(240,.4,.78,260,10,17,1,4,6);let q=[];for(let ee=0;ee<w;ee++){let Ee=I*(.14+C()*.74),we=O(Ee);q.push({fx:Ee,fy:Math.max(56,R-R*(.56+C()*.38)*we*1.05),kind:C()<E?0:1,sz:.85+C()*.4,tilt:.72+C()*.28,rot:C()*6.28,sx:Ee+(C()-.5)*60})}a.lineCap="round";for(let ee of q)a.strokeStyle="#2c6623",a.lineWidth=6,a.beginPath(),a.moveTo(ee.sx,R),a.quadraticCurveTo((ee.sx+ee.fx)/2+(C()-.5)*40,(R+ee.fy)/2,ee.fx,ee.fy+8),a.stroke();z(150,.5,.92,330,9,16,2,6,7);for(let ee of q){if(a.save(),a.translate(ee.fx,ee.fy),a.scale(1,ee.tilt),ee.kind===0){let Ee=38*ee.sz;for(let we=0;we<16;we++){let Me=ee.rot+we/16*6.283;a.fillStyle=Math.sin(Me)>.4?"#e2e3ea":"#fdfdf6",a.beginPath(),a.ellipse(Math.cos(Me)*Ee*.56,Math.sin(Me)*Ee*.56,Ee*.48,Ee*.14,Me,0,7),a.fill()}a.fillStyle="#f2b51a",a.beginPath(),a.arc(0,0,Ee*.28,0,7),a.fill(),a.fillStyle="#fbe060",a.beginPath(),a.arc(-Ee*.07,-Ee*.07,Ee*.14,0,7),a.fill()}else{let Ee=40*ee.sz;for(let we=0;we<5;we++){let Me=ee.rot+we/5*6.283;a.fillStyle="#fccc1e",a.beginPath(),a.ellipse(Math.cos(Me)*Ee*.52,Math.sin(Me)*Ee*.52,Ee*.52,Ee*.38,Me,0,7),a.fill()}for(let we=0;we<5;we++){let Me=ee.rot+we/5*6.283;a.fillStyle="#ffe873",a.beginPath(),a.ellipse(Math.cos(Me)*Ee*.62,Math.sin(Me)*Ee*.62-3,Ee*.26,Ee*.15,Me,0,7),a.fill()}a.fillStyle="#e39b14",a.beginPath(),a.arc(0,0,Ee*.2,0,7),a.fill()}a.restore()}z(40,.42,.85,280,8,14,3,6,7),a.restore(),h[b]={u0:M/1024,u1:(M+512)/1024,v0:1-(T+512*L)/3328,v1:1-(T+8*L)/3328}},c=(b,M,T,_)=>{let E=At(_),w=["#173d1d","#21512a","#2f6a33","#46853c","#64a048","#8dbd58","#b6d872"];a.save(),a.translate(M,T),a.beginPath(),a.rect(0,0,512,512),a.clip();let A=[];for(let C=0;C<15;C++){let I=(C+E()*.6)/15,R=40+I*432,L=500-300*Math.sqrt(Math.max(0,1-((R-256)/232)**2));A.push([R,L+60+E()*50,54+E()*46])}for(let C=0;C<2600;C++){let I=A[Math.floor(E()*A.length)],R=E()*6.283,L=Math.sqrt(E())*I[2],D=I[0]+Math.cos(R)*L,O=Math.min(505,I[1]+Math.sin(R)*L*.85),H=Math.sin(R)<-.2?1:0,B=Math.max(0,Math.min(6,Math.floor(E()*2.4+(1-O/512)*3.2+H*1.3+L/I[2]*.8)));a.fillStyle=w[B],a.beginPath(),a.ellipse(D,O,7+E()*7,4+E()*4,E()*6.28,0,7),a.fill()}for(let C=0;C<130;C++){let I=A[Math.floor(E()*A.length)],R=-Math.PI*(.1+E()*.8),L=(.35+E()*.6)*I[2],D=I[0]+Math.cos(R)*L,O=I[1]+Math.sin(R)*L*.85;if(O>470)continue;let H=6+E()*5,B=E()*6.28,V=E()<.12;a.fillStyle=V?"#f3d2dc":"#fbfbf6";for(let z=0;z<5;z++){let q=B+z/5*6.283;a.beginPath(),a.ellipse(D+Math.cos(q)*H*.55,O+Math.sin(q)*H*.5,H*.5,H*.36,q,0,7),a.fill()}a.fillStyle="#d9b628",a.beginPath(),a.arc(D,O,H*.22,0,7),a.fill()}a.restore(),h[b]={u0:M/1024,u1:(M+512)/1024,v0:1-(T+512)/3328,v1:1-T/3328}},f=(b,M,T,_)=>{let E=At(_),w=1024,A=512;a.save(),a.translate(M,T),a.beginPath(),a.rect(0,0,512,250),a.clip(),a.scale(.5,250/512);let C=["#0c2a12","#143a19","#1f4f23","#2e682f","#46843a","#66a047","#8ebd58","#b6d874"],I=O=>Math.max(0,1-((O-w/2)/(w*.47))**2)**.6,R=(O,H,B,V)=>{let z=O+B,q=A-H,ee=O+B*.3,Ee=A-H*.6;a.moveTo(O-V/2,A),a.quadraticCurveTo(ee-V*.5,Ee,z,q),a.quadraticCurveTo(ee+V*.5,Ee+V*.4,O+V/2,A),a.closePath()},L=(O,H,B,V,z,q,ee)=>{let Ee=C.map(()=>[]);for(let we=0;we<O;we++){let Me=w/2+(E()-.5)*w*.8*Math.sqrt(E()),W=I(Me),J=A*.9*W*(H+E()*(B-H)),ve=(Me-w/2)*.22+(E()-.5)*120,Pe=Math.min(7,q+Math.floor(E()*(ee-q+1)));W>.03&&Ee[Pe].push([Me,J,ve,V+E()*(z-V)])}Ee.forEach((we,Me)=>{if(!we.length)return;let W=a.createLinearGradient(0,A,0,A*.1);W.addColorStop(0,C[Math.max(0,Me-3)]),W.addColorStop(1,C[Me]),a.fillStyle=W,a.beginPath();for(let J of we)R(J[0],J[1],J[2],J[3]);a.fill()})};L(150,.35,.7,26,46,1,3),L(110,.5,.92,22,38,3,5);let D=[["#d27ac4","#f4bce6"],["#9f74da","#d2b6f4"],["#fbfbf6","#ffffff"],["#ea88b2","#fcc8de"]];for(let O=0;O<48;O++){let H=w/2+(E()-.5)*w*.84,B=I(H),V=A-A*.9*B*(.55+E()*.42),[z,q]=D[Math.floor(E()*D.length)],ee=22+E()*12,Ee=E()*6.28;if(!(B<.15)){a.fillStyle=z;for(let we=0;we<5;we++){let Me=Ee+we*1.2566;a.beginPath(),a.ellipse(H+Math.cos(Me)*ee*.55,V+Math.sin(Me)*ee*.45,ee*.52,ee*.36,Me,0,7),a.fill()}a.fillStyle=q;for(let we=0;we<5;we++){let Me=Ee+we*1.2566;a.beginPath(),a.ellipse(H+Math.cos(Me)*ee*.45,V+Math.sin(Me)*ee*.35-3,ee*.25,ee*.16,Me,0,7),a.fill()}a.fillStyle=z==="#fbfbf6"?"#f2b51a":"#6e2f62",a.beginPath(),a.arc(H,V,ee*.18,0,7),a.fill()}}L(34,.4,.75,20,34,4,6),a.restore(),h[b]={u0:M/1024,u1:(M+512)/1024,v0:1-(T+250)/3328,v1:1-T/3328}};y("twigs",0,0),c("flowerbush",512,0,6151),m("leafA",0,512),m("leafB",512,512),m("sakura",0,1024),m("pine",512,1024),m("momiji",0,1536),m("ginkgo",512,1536),x("grass",0,2304,!1),x("flowers",512,2304,!0),S("bankA",0,2816,4111,.7),S("bankB",512,2816,4127,.35),f("bedA",0,2048,7741),S("bankC",512,2048,4133,0,0,!0);let d=new ii(l);d.colorSpace=qt,d.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let v=1-2816/3328,g=1-2824/3328;return{tex:d,cells:h,tuftV:[v,1-2304/3328,g,(v+g)/2]}}var cn=[1,1,1],Te={pole:ye("#b1b0a9"),metal:ye("#8d9198"),black:ye("#2a2b30"),yellow:ye("#f2c230"),white:ye("#f4f3ee"),trans:ye("#a0a3a8"),lampPole:ye("#727780"),lampHead:ye("#dcdcd6"),trunk:ye("#6a5444"),trunkDark:ye("#4b3a33"),bark:ye("#7a6556"),leaf:ye("#86ba4c"),leafShade:ye("#2c6640"),sakura:ye("#ffd3e3"),sakuraShade:ye("#de94b4"),pine:ye("#55874c"),pineShade:ye("#1d4632"),cedar:ye("#41713e"),cedarShade:ye("#1b3e2a"),roof:ye("#bdbbb3"),parapet:ye("#dcdad2"),pipe:ye("#c4c4bf"),orange:ye("#f07a22"),red:ye("#d8352a"),vermilion:ye("#e2482c"),concrete:ye("#c9c7c0"),stone:ye("#a8a69e"),terracotta:ye("#b8653d"),rail:ye("#eeeeea")},R0=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(ye),Fs=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(ye),OM=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(ye),ng=["#c62f2a","#2b46a6","#7b3c9e","#b8336f","#a8282a","#273b86"].map(ye),lh=null;function fg(i){lh=i}var oi=i=>lh.uv(i),Go=oi,dg=(i,e)=>{let t=1;for(;lh.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function pg(i,e,t,n,s=0){let r=new Qe().makeRotationY(s);r.setPosition(e,t,n);let o=new Qe().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var C0=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let l=e[5];(l==="g"&&e[6]==="l"||l==="d"||l==="k"||l==="c"||l==="n"||l==="p")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},ln=(i,e,t,n,s,r,o,l=cn)=>{C0(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,oi(o)),i.litV=0},Hi=(i,e,t,n,s,r,o,l=cn)=>{C0(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,oi(o)),i.litV=0},Vi=(i,e,t,n,s,r,o,l=cn)=>{C0(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,oi(o)),i.litV=0},Vo=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?oi(r):void 0),zM=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function mg(i){return zM.map(e=>new k(e[0],e[1],e[2]).applyMatrix4(i))}function P0(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,Te.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?Te.black:Te.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,Te.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,Te.metal);let o=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,Te.white);for(let u of l)s.cyl(0,r-1.65,u,.045,.03,.15,6,Te.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,Te.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,Te.trans),s.box(-.06,7.2,.12,.06,7.35,.26,Te.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,Te.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,Te.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,Te.concrete);for(let u=2.4,h=0;u<r-2;u+=.45,h++)s.rod([0,u,0],[h%2?.3:-.3,u,0],.015,.015,3,Te.metal);return i.atlas.setM(e),ln(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&ln(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...l.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new k(u[0],u[1],u[2]).applyMatrix4(e))}var ah=new k;function lr(i,e,t,n,s,r){i.lamps&&(ah.set(t,n,s).applyMatrix4(e),i.lamps.push(ah.x,ah.y,ah.z,r))}function I0(i,e,t,n={}){let s=i.color;s.setM(e),lr(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,Te.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,Te.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,Te.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,Te.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,cn);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],cn,{u0:0,u1:1,v0:0,v1:1})}function gg(i,e,t=.04){let n=i.color;n.setM(e),lr(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,Te.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,Te.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,Te.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,cn),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],cn,{u0:0,u1:1,v0:0,v1:1})}function Ho(i,e,t,n,s,r,o=!1,l=!1){let a=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let u=0;u<4;u++){let[h,p]=a[u],[m,x]=a[(u+1)%4];i.quad([h*n,e,p*n],[h*s,t,p*s],[m*s,t,x*s],[m*n,e,x*n],r)}o&&s>.001&&i.quad([-s,t,-s],[-s,t,s],[s,t,s],[s,t,-s],r),l&&i.quad([-n,e,-n],[n,e,-n],[n,e,n],[-n,e,n],r)}var kM=ye("#202127");function Ml(i,e){let t=i.color;t.setM(e),lr(i,e,0,3.4,0,.9);let n=kM,s={noBottom:!0};t.cyl(0,0,0,.12,.1,.28,6,n),t.cyl(0,.28,0,.065,.05,2.8,6,n,!1),Ho(t,3.04,3.17,.05,.17,n,!0);for(let[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.box(r*.155-.018,3.17,o*.155-.018,r*.155+.018,3.6,o*.155+.018,n,null,s);t.box(-.165,3.6,-.165,.165,3.64,.165,n,null,s),Ho(t,3.64,3.84,.23,.05,n),Ho(t,3.6,3.64,.2,.23,n,!1,!0),t.cyl(0,3.84,0,.035,0,.12,4,n,!1),i.lamp.setM(e),i.lamp.box(-.14,3.17,-.14,.14,3.6,.14,cn),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],cn,{u0:0,u1:1,v0:0,v1:1})}function L0(i,e,t){let n=Math.floor(t()*3),s=[Te.red,ye("#2f6fd8"),Te.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,Bn(s,.8)),i.atlas.setM(e),ln(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function w0(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,ye("#e6e6e1")),i.atlas.setM(e),ln(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function vg(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ye("#c8ccd2"),ye("#c0392b"),ye("#2c6fb7"),ye("#2b2b2b"),ye("#e8c84a"),ye("#e98fb0")]);for(let o of[-.52,.52])for(let l=0;l<12;l++){let a=l/12*Math.PI*2,u=(l+1)/12*Math.PI*2;n.rod([o+Math.cos(a)*.33,.34+Math.sin(a)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,Te.black)}let r=(o,l)=>n.rod(o,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,Te.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,Te.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,Te.metal)}function xg(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,Te.orange),t.cyl(0,.04,0,.16,.03,.68,10,Te.orange),t.cyl(0,.32,0,.115,.095,.12,10,Te.white,!1)}function D0(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,Te.terracotta),i.leaf.setM(e),Gi(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}var HM=[[.35,.455],[.455,.56],[.56,.665]],ig=ye("#6b4a32");function sg(i,e,t,n,s){let r=i.color,o=i.atlas,l=.62,a=oi("shop_p1"),u=a.u1-a.u0,h=a.v1-a.v0;r.setM(e),o.setM(e);for(let p of[-1,1])r.box(t+p*l-.03,0,n-.32,t+p*l+.03,1.32,n+.24,ig);for(let p=0,m=Math.floor(s()*3);p<3;p++){let x=.2+p*.4,y=x+.36,S=n-.26+p*.16,c=S+.14,[f,d]=HM[(p+m)%3];o.quad([t+l,x,S],[t-l,x,S],[t-l,y,c],[t+l,y,c],cn,{u0:a.u0+u*.14,u1:a.u0+u*.86,v0:a.v1-h*d,v1:a.v1-h*f}),r.box(t-l,x-.05,S-.06,t+l,x,S+.12,ig)}}function yg(i,e,t,n=.8){i.leaf.setM(e),Gi(i,[0,n*.3,0],0,n*.6,0,n,t()<.5?"leafA":"leafB",7,t,[1,1,1],[.5,.58,.66],[0,n*1.4])}function cr(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,Te.metal),i.atlas.setM(e),n<0?Vi(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Hi(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function N0(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?Te.white:Te.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,Te.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,Te.black),i.atlas.setM(e),t<0?Vi(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Hi(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function _g(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,ye("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,ye("#f0a020"))}function U0(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,Te.orange);let s=0,r=3.25,o=.42,l=14;for(let a=0;a<l;a++){let u=a/l*Math.PI*2,h=(a+1)/l*Math.PI*2,p=(m,x,y)=>[t*y,r+Math.sin(m)*x,s+Math.cos(m)*x-.25];Vo(n,p(0,0,-.02),p(t>0?h:u,o,-.02),p(t>0?u:h,o,-.02),Te.orange),Vo(n,p(0,0,-.035),p(t>0?h:u,o*.86,-.035),p(t>0?u:h,o*.86,-.035),ye("#dfe9f2"))}}var Wo=null;function bg(i){Wo=i}var bl=1;function Mg(i){bl=i}function Gi(i,e,t,n,s,r,o,l,a,u,h,p,m=0){let x=Wo[o],y=1+(1-bl)*.35;l=Math.max(2,Math.round(l*bl));for(let S=0;S<l;S++){let c=a()*2-1,f=a()*2-1,d=a()*2-1;m&&(f=1.2+a());let v=Math.hypot(c,f,d)||1;c/=v,f/=v,d/=v;let g=-d,b=0,M=c;v=Math.hypot(g,M),v<.1&&(g=1,M=0,v=1),g/=v,M/=v;let T=f*M-d*b,_=d*g-c*M,E=c*b-f*g,w=Math.PI+(a()-.5)*.9,A=Math.cos(w),C=Math.sin(w),I=g*A+T*C,R=b*A+_*C,L=M*A+E*C,D=T*A-g*C,O=_*A-b*C,H=E*A-M*C,B=r*(1.3+a()*.45)*y/2,V=t+(a()-.5)*r*.6,z=n+(a()-.5)*r*(m?.15:.5),q=s+(a()-.5)*r*.6,ee=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Me,W])=>[V+(I*Me+D*W)*B,z+(R*Me+O*W)*B*(m?.6:1),q+(L*Me+H*W)*B]),Ee=ee.map(Me=>{let W=Me[0]-e[0],J=Me[1]-e[1],ve=Me[2]-e[2],Pe=Math.hypot(W,J,ve)||1;W/=Pe,J/=Pe,ve/=Pe;let ie=Me[0]-t,xe=Me[1]-n,Be=Me[2]-s;return Pe=Math.hypot(ie,xe,Be)||1,[W*.7+ie/Pe*.3,J*.7+xe/Pe*.3+(m?.5:0),ve*.7+Be/Pe*.3]}),we=ee.map(Me=>f0(h,u,.45+.55*Math.max(0,Math.min(1,(Me[1]-p[0])/(p[1]-p[0])))));i.leaf.card(ee,Ee,x,we)}}function F0(i,e,t,n="grass",s=1){let r=Wo[n],o=(.42+t()*.38)*s,l=o*1.2,a=t()*Math.PI,u=[0,1,0],h=[u,u,u,u],p=[.6,.64,.58],m=[1,1,1];i.leaf.setM(e);for(let x of[a,a+Math.PI/2]){let y=Math.cos(x)*l/2,S=Math.sin(x)*l/2;i.leaf.card([[-y,-.05,-S],[y,-.05,S],[y,o,S],[-y,o,-S]],h,r,[p,p,m,m])}}function Sl(i,e,t,n=1){let s=Wo.flowerbush;if(!s)return;let r=(.8+t()*.35)*n,o=r*1.7,l=t()*Math.PI,a=[0,1,0],u=[a,a,a,a],h=[.6,.64,.6],p=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let x=Math.cos(m)*o/2,y=Math.sin(m)*o/2;i.leaf.card([[-x,-.06,-y],[x,-.06,y],[x,r,y],[-x,r,-y]],u,s,[h,h,p,p])}}function ch(i,e,t,n=1){let s=Wo.bedA;if(!s)return;let r=(.36+t()*.16)*n,o=r*2,l=t()*Math.PI,a=[0,1,0],u=[a,a,a,a],h=[.6,.64,.6],p=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let x=Math.cos(m)*o/2,y=Math.sin(m)*o/2;i.leaf.card([[-x,-.04,-y],[x,-.04,y],[x,r,y],[-x,r,-y]],u,s,[h,h,p,p])}}var VM=[.62,.68,.74],Sg=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],GM=[0,1,2,0,2,3,0,3,4],WM=Sg.map(([,i])=>f0(VM,cn,i));function B0(i,e,t,n,s,r,o,l=1,a=null){let u=Wo[a||(o()<.5?"bankA":"bankB")],h=.82*l,p=(h+.06)*2.03,m=i.leaf;for(let x of GM){let[y,S]=Sg[x],c=(y-.5)*p;m.vtx(e+s*c,t+S*(h+.06)-.06,n+r*c,0,1,0,u.u0+(u.u1-u.u0)*y,u.v0+(u.v1-u.v0)*S,WM[x])}}var Eg=()=>bl>.7?.9:1.25;function XM(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,Te.trunk);for(let u=0;u<3;u++){let h=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(h)*1.1*n,s*.68,Math.sin(h)*1.1*n],.09*n,.05*n,5,Te.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],a=7+Math.floor(t()*3);for(let u=0;u<a;u++){let h=t()*6.28,p=(.6+t())*1.3*n;Gi(i,r,Math.cos(h)*p,s*(.62+t()*.3),Math.sin(h)*p,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],l)}Gi(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],l)}function rg(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,Te.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(2.2+t()*1.6)*n,m=[Math.cos(h)*p,s*(.62+t()*.18),Math.sin(h)*p];i.color.rod([0,s*.4,0],m,.12*n,.05*n,5,Te.trunkDark),r.push(m),i.color.rod(m,[m[0]*1.25,m[1]+.9*n,m[2]*1.25],.05*n,.02*n,4,Te.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],l=[s*.5,s*1.1],a=[.72,.62,.72];for(let u of r)for(let h=0;h<2;h++)Gi(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],a,l);Gi(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],a,l)}function qM(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,l=[r*.4,o*.45,.2],a=[r,o*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,Te.trunkDark),s.rod(l,a,.15*n,.09*n,6,Te.trunkDark),i.leaf.setM(e);let u=[[a[0],a[1]+.3,a[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[a[0]+.9*n,a[1]-.6,.8,1.1]];for(let[h,p,m,x]of u)s.rod(h>l[0]?l:a,[h,p-.2,m],.07*n,.04*n,4,Te.trunkDark),Gi(i,[h,p-.8,m],h,p,m,x*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[p-.7,p+.5],1)}function YM(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,Te.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(1.8+t()*1.4)*n,m=[Math.cos(h)*p,s*(.55+t()*.2),Math.sin(h)*p];i.color.rod([0,s*.38,0],m,.09*n,.04*n,5,Te.trunkDark),r.push(m)}i.leaf.setM(e);let o=[0,s*.7,0],l=[s*.45,s*1.1],a=[.62,.52,.56];for(let u of r)Gi(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],a,l);Gi(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],a,l)}function ZM(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,Te.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],l=[.68,.6,.52];for(let a=0;a<7;a++){let u=s*(.34+a*.09),h=(2.1-a*.24)*n,p=t()*6.28;Gi(i,r,Math.cos(p)*h*.35,u,Math.sin(p)*h*.35,Math.max(.7,h)*1.05,"ginkgo",5,t,[1,1,1],l,o)}}function KM(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,ye("#eeece6"));for(let u=0;u<7;u++){let h=t.range(.4,r*.85),p=h/r;s.cyl(o*p,h,0,.135*n*(1-p*.6),.13*n*(1-p*.6),.05,7,ye("#2b2b30"),!1)}for(let u=0;u<7;u++){let h=r*(.45+t()*.5),p=t()*6.28,m=(.8+t()*1.6)*n,x=h/r;s.rod([o*x,h,0],[o*x+Math.cos(p)*m,h+m*.9,Math.sin(p)*m],.035*n,.012*n,4,ye("#8b7f78"))}let l=r*.7,a=(1.5+t()*.5)*n;i.leaf.setM(e),Gi(i,[o*.7,l,0],o*.7,l,0,a,"twigs",3,t,[1,1,1],[.92,.9,.92],[l-a,l+a])}function $M(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Te.trunkDark),i.foliage.setM(e);let r=ye("#1d3a2c"),o=ye("#eef2f8"),l=ye("#d7e0ec");for(let a=0;a<4;a++){let u=s*(.16+a*.19),h=(1.9-a*.38)*n,p=s*.3;i.foliage.cyl(0,u,0,h,h*.3,p,9,r),i.foliage.cyl(0,u+p*.45,0,h*.72,.05,p*.62,9,a%2?o:l)}}function JM(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Te.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,Te.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,Te.cedar)}var ki={cells:null,bcells:null};function jM(i,e,t,n=1){let s=t()<.3?1.22:1,r=t.range(6.2,8)*n*s,o=i.color;o.setM(e);let l=r*t.range(.3,.38);o.cyl(0,0,0,.27*n*s,.2*n*s,l,8,Te.trunk);let a=r*.64,u=t.range(2.6,3.2)*n*s,h=t.range(2,2.5)*n*s,p=n*s,m=[],x=5+Math.floor(t()*3);for(let v=0;v<x;v++){let g=v/x*6.283+t()*.6,b=t.range(-.15,.75),M=Math.sqrt(1-b*b);m.push([Math.cos(g)*M,b,Math.sin(g)*M])}m.push([0,1,0]);let y=[[0,a+.15*h,0,1.76*p,1]],S=26+Math.floor(t()*7);for(let v=0;v<S;v++){let g=t()*2-1,b=t.range(-.55,1),M=t()*2-1,T=Math.hypot(g,b,M)||1;g/=T,b/=T,M/=T;let _=m[0],E=-2;for(let A of m){let C=A[0]*g+A[1]*b+A[2]*M;C>E&&(E=C,_=A)}g=g*.45+_[0]*.55,b=b*.45+_[1]*.55,M=M*.45+_[2]*.55,T=Math.hypot(g,b,M)||1,g/=T,b/=T,M/=T;let w=t.range(.78,.95);y.push([g*u*w,a+b*h*w,M*u*w,t.range(.8,1.1)*p,0])}for(let v=0;v<4;v++){let g=m[v%x];o.rod([0,l*.9,0],[g[0]*u*.55,a+Math.min(0,g[1])*h*.4-.3*n,g[2]*u*.55],.15*p,.06*n,6,Te.trunk)}let c=t(),f=c<.5?[1,1,.92+c*.16]:[1-(c-.5)*.12,1,.9],d=i.gleaf;d.setM(e);for(let[v,g,b,M,T]of y){let _=v,E=(g-a)*(u/h)+.1*u,w=b,A=Math.hypot(_,E,w)||1;_/=A,E/=A,w/=A,T&&(_=w=0,E=-1);let C=Math.min(1,Math.max(0,(g-(a-h))/(2*h))),I=T?.55:.72+.28*C,R=M/.8*.88;d.bill(v,g,b,_,E,w,R,R,ki.cells[Math.floor(t()*ki.cells.length)],[f[0]*I,f[1]*I,f[2]*I],Am,.88)}}function og(i,e,t,n=1,s=!1){let r=i.color;r.setM(e);let o=s?1:0,l=t.range(2.2,2.7)*n,a=t.range(.3,.35)*n,u=[t.range(-.15,.15)*n,l,o*.3*n];r.rod([0,0,0],u,a,a*.8,7,Te.bark),r.cyl(0,0,0,a*1.25,a,.35*n,7,Te.bark,!1);let h=t.range(6.3,6.9)*n,p=-o*.5*n,m=t.range(4,4.5)*n,x=t.range(3.6,4)*n,y=t.range(1.7,2)*n,S=t()<.35?4:3,c=s?-Math.PI/2+t.range(-.35,.35):t()*6.283;for(let T=0;T<S;T++){let _=c+T/S*6.283+t.range(-.3,.3),E=Math.cos(_),w=Math.sin(_),A=t.range(.32,.46),C=[u[0]+E*m*A,h-y*t.range(.35,.55),u[2]*.5+p*.4+w*x*A],I=[u[0]+(C[0]-u[0])*.45+E*.25*n,l+(C[1]-l)*.55,u[2]+(C[2]-u[2])*.45+w*.25*n],R=(O,H,B)=>{let V=Math.hypot(H[0]-O[0],H[1]-O[1],H[2]-O[2])||1;return[H[0]-(H[0]-O[0])/V*B,H[1]-(H[1]-O[1])/V*B,H[2]-(H[2]-O[2])/V*B]};r.rod(u,I,a*.62,a*.46,6,Te.bark),r.rod(R(u,I,a*.5),C,a*.47,a*.3,5,Te.bark);let L=R(I,C,a*.35),D=T%2?1:2;for(let O=0;O<D;O++){let H=(O?1:-1)*t.range(.3,.9),B=t.range(1.2,1.9)*n;r.rod(L,[C[0]+Math.cos(_+H)*B,C[1]+t.range(.7,1.2)*n,C[2]+Math.sin(_+H)*B],a*.27,.04*n,4,Te.bark)}}let f=[],d=6+Math.floor(t()*2);for(let T=0;T<d;T++){let _=T/d*6.283+t()*.5,E=t.range(-.2,.6),w=Math.sqrt(1-E*E);f.push([Math.cos(_)*w,E,Math.sin(_)*w])}f.push([0,1,0]);let v=[[-m*.3,h,p,1.75*n,1],[m*.3,h,p,1.75*n,1]],g=21+Math.floor(t()*4);for(let T=0;T<g;T++){let _=t()*2-1,E=t.range(-.3,1),w=t()*2-1,A=Math.hypot(_,E,w)||1;_/=A,E/=A,w/=A;let C=f[0],I=-2;for(let L of f){let D=L[0]*_+L[1]*E+L[2]*w;D>I&&(I=D,C=L)}_=_*.5+C[0]*.5,E=E*.5+C[1]*.5,w=w*.5+C[2]*.5,A=Math.hypot(_,E,w)||1,_/=A,E/=A,w/=A;let R=t.range(.8,.95);v.push([_*m*R,h+E*y*R,p+w*x*R,t.range(1,1.3)*n,0])}let b=[1,t.range(.96,1.03),t.range(.97,1.02)],M=i.gblossom;M.setM(e);for(let[T,_,E,w,A]of v){let C=T/m,I=(_-h)/y+.12,R=(E-p)/x,L=Math.hypot(C,I,R)||1;C/=L,I/=L,R/=L,A&&(C=R=0,I=-1);let D=Math.min(1,Math.max(0,(_-(h-y))/(2*y))),O=A?.62:.8+.2*D,H=w/.8*.86;M.bill(T,_,E,C,I,R,H,H,ki.bcells[Math.floor(t()*ki.bcells.length)],[b[0]*O,b[1]*O,b[2]*O],Rm,.86)}}var Tg={broad:(i,e,t,n)=>(ki.cells?jM:XM)(i,e,t,n),sakura:(i,e,t,n)=>ki.bcells?og(i,e,t,n):rg(i,e,t,n),sakuraAve:(i,e,t,n)=>ki.bcells?og(i,e,t,n,!0):rg(i,e,t,n),pine:qM,cedar:JM,maple:YM,ginkgo:ZM,birch:KM,snowcedar:$M},ag={};function wg(i,e){let t=i+e,n=ag[t];if(!n){let s={color:new dn,foliage:new dn,leaf:new dn({uv:!0}),gleaf:new dn({uv:!0,off:!0}),gblossom:new dn({uv:!0,off:!0})};Tg[i](s,new Qe,At(1e3+e*77+i.length*13),1),n=ag[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays(),g:s.gleaf.toArrays(),b:s.gblossom.toArrays()}}return n}function Ag(){for(let i in Tg)for(let e=0;e<4;e++)wg(i,e)}function Wn(i,e,t,n,s=1){let r=wg(t,Math.floor(n()*4)),o=e.clone().scale(new k(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o),r.g.n&&i.gleaf.stamp(r.g,o),r.b.n&&i.gblossom.stamp(r.b,o)}var QM=new Set(["win0","win2","win5","win6"]),bs=(i,e,t)=>e<t?i+(e<t*.35&&QM.has(i)?"C":"L"):i;function El(i,e,t,n,s,r,o){let l=Math.max(1,Math.round(t/3)),a=t/l;for(let u of[-1,1])for(let h=0;h<n.length-1;h++)for(let p=0;p<l;p++){let m=h>0&&r()<.3?bs("win6",r(),o):r()<.2?"win5":"plain";(u>0?Hi:Vi)(i,u*e/2,p*a,(p+1)*a,n[h],n[h+1],m,s)}}function Tl(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],Te.roof);let o=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+o,l,Te.parapet),i.box(-e/2,n,t-l,e/2,n+o,t,Te.parapet),i.box(-e/2,n,0,-e/2+l,n+o,t,Te.parapet),i.box(e/2-l,n,0,e/2,n+o,t,Te.parapet),s()<.4){let a=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[h,p]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(a+h-.05,n,u+p-.05,a+h+.05,n+1,u+p+.05,Te.metal);i.cyl(a,n+1,u,.85,.85,1.3,12,ye("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,Te.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,Te.metal)}function O0(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,Te.black);let r="vs"+Math.floor(s()*10);Vi(i.atlas,e-.065,-.88,-.12,t,n,r),Hi(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,Te.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,Te.metal)}var S0=ye("#d9d6cf");function eS(i,e,t,n,s,r=""){let o=Math.floor(s()*10),l=r||"vsB"+o,a=Math.min(1.15,(n-t)*.417),u=-.14,h=u-a,p=.1,m=i.color;m.quad([e+p,t,h],[e-p,t,h],[e-p,n,h],[e+p,n,h],S0),m.quad([e-p,n,u],[e+p,n,u],[e+p,n,h],[e-p,n,h],S0),m.quad([e-p,t,h],[e+p,t,h],[e+p,t,u],[e-p,t,u],S0),Vi(i.atlas,e-p,h,u,t,n,l),Hi(i.atlas,e+p,h,u,t,n,l);for(let x of[t+.28,n-.34])i.color.box(e-.03,x,u,e+.03,x+.06,0,Te.metal)}function Wi(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,Te.concrete,null,{noBottom:!0}),n.type){case"shop":return sS(i,e,t,n);case"machiya":return rS(i,e,t,n);case"apt":return oS(i,e,t,n);case"office":return aS(i,e,t,n);case"konbini":return lS(i,e,t,n);case"house":return n.ptype?fS(i,e,t,n):uS(i,e,t,n);case"tower":return dS(i,e,t,n)}}var Rg=new Set(["glass","door","cafe","noren"]),lg=["shop_p0","shop_p3","shop_p4","shop_p5","shop_p6","shop_p8","shop_p9"],tS=["shop_p2","shop_p2","shop_p7","shop_p10"],nS={shop_p1:"hs9",shop_p3:"hs7",shop_p4:"hs5",shop_p5:"hs_\u82B1\u5C4B",shop_p6:"hsN_\u6D0B\u54C1\u5E97",shop_p8:"hs13",shop_p9:"hs12"},iS={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function sS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.6,m=3,x=p+(o-1)*m,y=Math.max(1,Math.round(s/3)),S=s/y,c=-s/2,f=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),d=[],v=0;for(let _=0;_<y;_++){let E=dg(t,"shop_"+f[_%f.length]);d.push(E),!v&&E.startsWith("shop_glass")&&E.length>10&&(v=+E.slice(10))}for(let _=0;_<y;_++){let E=f[_%f.length];ln(u,c+_*S,c+(_+1)*S,0,p,0,v&&E==="glass"?"shop_glass"+v:d[_]),Rg.has(E)&&lr(i,e,c+(_+.5)*S,1.9,-.8,.7)}let g=t.pick([0,0,1,5,0,1]),b=[0,p];for(let _=1;_<o;_++)b.push(p+_*m);for(let _=1;_<o;_++)for(let E=0;E<y;E++){let w=E%2===1&&t()<.3?5:g;ln(u,c+E*S,c+(E+1)*S,b[_],b[_+1],0,bs("win"+w,t(),a),l)}El(u,s,r,b,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],Bn(l,.8)),Tl(h,s,r,x,t);let M=s*.94;h.box(-M/2,p-.8,-.3,M/2,p+.08,-.02,Te.black);let T="hs"+Math.floor(t()*14);if(ln(u,-M/2,M/2,p-.8,p+.08,-.305,iS[v]||T),t()<.55){let _=t.pick(OM),E=p-.85;h.quad([s/2-.2,E-.35,-1.1],[-s/2+.2,E-.35,-1.1],[-s/2+.2,E,-.02],[s/2-.2,E,-.02],_),h.quad([s/2-.2,E-.6,-1.1],[-s/2+.2,E-.6,-1.1],[-s/2+.2,E-.35,-1.1],[s/2-.2,E-.35,-1.1],Bn(_,.85))}if(o>=2&&t()<.85){let _=(t()<.5?1:-1)*(s/2-.35);O0(i,_,p+.3,Math.min(x-.15,p+2.8),t)}for(let _=1;_<o;_++)if(t()<.4){let E=Math.floor(t()*y),w=c+E*S+.15,A=c+(E+1)*S-.15,C=b[_];h.box(w,C-.12,-.9,A,C,0,Te.parapet),ln(u,w,A,C,C+1,-.9,"rail"),Vi(u,w,-.9,0,C,C+1,"rail"),Hi(u,A,-.9,0,C,C+1,"rail"),t()<.45&&Ng(h,w+.1,A-.1,C+1.95,-.55,t),t()<.6&&w0(i,e,(w+A)/2+.6,C,-.75)}else if(t()<.35){let E=Math.floor(t()*y);w0(i,e,c+(E+.5)*S,b[_]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}h.cyl(c+.12,0,-.08,.05,.05,x,6,Te.pipe,!1),h.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,ye("#d9d9d3")),o>=3&&t()<.18&&Cg(i,s,x,r,t)}function rS(i,e,t,n){let{w:s,d:r,floors:o,litP:l}=n,a=i.atlas,u=i.color,h=3.6,p=2.9,m=h+(o-1)*p,x=-s/2,y=Math.max(2,Math.round(s/3)),S=s/y,c=ye("#5c4030"),f=ye("#3a2a20"),d=t.pick([["glass","door","glass"],["noren","door"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),v=n.at!==void 0&&Math.abs(n.at-(n.side<0?139:146))<s/2&&o>=2?n.side:0;v&&(d=["glass","door","glass"]);let g=At(Math.floor((i.atlas.e[12]*71.3+i.atlas.e[14]*37.9)*977)^11101),b=t.pick(["shop_p0","shop_p0","shop_p1","shop_p3"]),M=[],T=v?v<0?"shop_p1":"shop_p6":b==="shop_p1"?b:lg[Math.floor(g()*lg.length)],_=g.pick(tS),E=g()<.65?g.pick(["shop_p7","shop_p10"]):"";for(let ie=0;ie<y;ie++){let xe=d[ie%d.length];M.push(xe==="glass"?T:xe==="door"?_:xe==="cafe"?"shop_p3":(Be=>xe==="noren"&&E||Be)(dg(t,"shop_"+xe)))}let w=t(),A=w<.5?"":d.includes("glass")&&b==="shop_p1"?"hs9":d.includes("cafe")||d.includes("glass")&&b==="shop_p3"?"hs7":"",C=M.includes("shop_p7")?"hs0":M.includes("shop_p10")?"hs3":"",I=v?v>0?"hsN_\u6D0B\u54C1\u5E97":"hs9":d.includes("glass")&&w>=.2?nS[T]||C:d.includes("cafe")&&w>=.5?"hs7":w>=.2?C:"";for(let ie=0;ie<y;ie++){let xe=d[ie%d.length];ln(a,x+ie*S,x+(ie+1)*S,0,h,0,M[ie]),Rg.has(xe)&&lr(i,e,x+(ie+.5)*S,1.9,-.8,.7)}let R=!!n.plaster,L=n.tint,D=[0,h];for(let ie=1;ie<o;ie++)D.push(h+ie*p);let O=R?g.pick(["win7","win7","win9","win10"]):g.pick(["win8","win8","win11"]);for(let ie=1;ie<o;ie++)for(let xe=0;xe<y;xe++){let Be=R&&xe%2===1&&t()<.3?"win5":O;ln(a,x+xe*S,x+(xe+1)*S,D[ie],D[ie+1],0,bs(Be,t(),l),Be==="win5"?L:cn)}{let ie=Math.max(1,Math.round(r/3)),xe=r/ie;for(let Be of[-1,1])for(let ze=0;ze<D.length-1;ze++)for(let Ae=0;Ae<ie;Ae++){let Ge=R?ze>0?bs(t()<.5?"win7":"win6",t(),l):"plain":ze>0&&t()<.45?bs("win4",t(),l):"woodwall";(Be>0?Hi:Vi)(a,Be*s/2,Ae*xe,(Ae+1)*xe,D[ze],D[ze+1],Ge,R&&Ge[3]!=="7"?L:cn)}}u.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],R?Bn(L,.8):ye("#6a5240"));for(let ie of[x,-x])u.box(ie-.09,0,-.12,ie+.09,m,.02,f);if(R)for(let ie=2;ie<o;ie++)u.box(x,D[ie]-.1,-.08,-x,D[ie]+.06,0,f);let{RC:H,k:B}=Pg(i,n,s,r,m,t,!R),V=h+.62,z=1.05,q=.7,ee=Math.max(2,Math.round((s+.3)/3)),Ee=lh.has("kawaraC")?oi("kawaraC"):null;for(let ie=0;ie<ee;ie++){let xe=x-.15+(s+.3)*ie/ee,Be=x-.15+(s+.3)*(ie+1)/ee;a.quad([Be,V-q,-z],[xe,V-q,-z],[xe,V,0],[Be,V,0],Ee?cn:H,Ee||B)}u.quad([x-.15,V-q-.03,-z],[-x+.15,V-q-.03,-z],[-x+.15,V-.1,0],[x-.15,V-.1,0],c);let we=Math.min(s*.9,4.4),Me=V-q+.02,W=Me-.62;u.box(-we/2,W,-z-.02,we/2,Me,-z+.07,f);{let ie=A?"":"hs"+Math.floor(t()*14);ln(a,-we/2,we/2,W,Me,-z-.025,I||ie||"hs"+Math.floor(g()*14))}for(let ie of[-we/2+.25,we/2-.25])u.box(ie-.03,Me,-z+.02,ie+.03,V-q*.1,-z+.06,f);i.sodium.setM(e),u.noShadow=!0;for(let ie=0;ie<y;ie++){let xe=x+(ie+.5)*S;u.box(xe-.008,W-.02,-.62,xe+.008,V-q*.6,-.6,f),i.sodium.box(xe-.06,W-.16,-.67,xe+.06,W-.04,-.55,null)}u.noShadow=!1;let J=!1;if(t()<.5||v){J=!0;let ie=v?ng[0]:t.pick(ng),xe=W-.12;u.quad([s/2-.2,xe-.32,-.95],[-s/2+.2,xe-.32,-.95],[-s/2+.2,xe,-.02],[s/2-.2,xe,-.02],ie),u.quad([s/2-.2,xe-.55,-.95],[-s/2+.2,xe-.55,-.95],[-s/2+.2,xe-.32,-.95],[s/2-.2,xe-.32,-.95],Bn(ie,.85))}if(o>=2&&(!R||t()<.5)){let ie=D[1]+.42,xe=-.5,Be=x+.12,ze=-x-.12;u.box(Be,ie-.07,xe-.04,ze,ie,0,c);for(let Ae=0;Ae<y;Ae++)ln(a,x+.12+(s-.24)*Ae/y,x+.12+(s-.24)*(Ae+1)/y,ie,ie+.95,xe,"wrail");Vi(a,Be,xe,0,ie,ie+.95,"wrail"),Hi(a,ze,xe,0,ie,ie+.95,"wrail"),i.leaf.setM(e);for(let Ae=0;Ae<y;Ae++)if(t()<.7){let Ge=x+(Ae+.5)*S,te=Math.min(S*.7,1.6);u.noShadow=!0,u.box(Ge-te/2,ie+.72,xe-.2,Ge+te/2,ie+.92,xe-.02,ye("#7a5236")),u.noShadow=!1;for(let de=Ge-te/2+.2;de<Ge+te/2-.1;de+=.32)Gi(i,[de,ie+.95,xe-.11],de,ie+1.05,xe-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[ie+.9,ie+1.3])}}if(o>=2&&(t()<.9||v)){let ie=t()<.5?1:-1,xe=v||ie;eS(i,xe*(s/2-.35),V+.1,Math.min(m-.2,V+2.8),t,v?v<0?"vsB10":"vsB0":""),s>7&&t()<.35&&O0(i,-xe*(s/2-.35),h+.8,Math.min(m-.2,h+2.5),t)}{let ie=d.includes("noren")||d.includes("cafe"),xe=J?0:ie?2:t()<.3?1:0;i.sodium.setM(e);for(let Be=0;Be<xe;Be++){let ze=xe===2?(Be?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),Ae=W-.5;u.noShadow=!0,u.box(ze-.006,Ae+.42,-z+.12,ze+.006,W,-z+.14,f),i.sodium.cyl(ze,Ae,-z+.13,.11,.16,.18,10,null,!1),i.sodium.cyl(ze,Ae+.18,-z+.13,.16,.11,.18,10,null,!1),u.cyl(ze,Ae-.035,-z+.13,.1,.1,.04,8,f),u.cyl(ze,Ae+.355,-z+.13,.1,.1,.04,8,f),u.noShadow=!1}}let ve=1e9,Pe=1e9;T==="shop_p1"&&d.includes("glass")&&(ve=x+(d.indexOf("glass")+.5)*S,sg(i,e,ve,-.62,t)),v<0&&y>=3&&(Pe=x+2.5*S,sg(i,e,Pe,-.62,t));for(let ie=x+.45+t()*.4;ie<-x-.3;ie+=.7+t()*1.3)t()<.7&&Math.abs(ie-ve)>.95&&Math.abs(ie-Pe)>.95&&D0(i,e,t,ie,-.4);i.color.setM(e),i.atlas.setM(e)}function Cg(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,l=n*.3;for(let a of[-r*.35,r*.35])i.color.box(a-.06,t,l,a+.06,t+1.2+o,l+.12,Te.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+o,l+.3,Te.metal),ln(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,l+.115,"bb"+Math.floor(s()*4))}function oS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.2,m=2.95,x=p+(o-1)*m,y=Math.max(2,Math.round(s/3.2)),S=s/y,c=-s/2,f=[0,p];for(let g=1;g<o;g++)f.push(p+g*m);for(let g=0;g<y;g++)ln(u,c+g*S,c+(g+1)*S,0,p,0,g===Math.floor(y/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),g===Math.floor(y/2)?cn:l);let d="bal"+Math.floor(t()*3),v=Bn(l,.97);for(let g=1;g<o;g++){let b=f[g];for(let M=0;M<y;M++)ln(u,c+M*S,c+(M+1)*S,b,f[g+1],0,bs("win2",t(),a),l);h.box(c,b-.15,-1.3,-c,b,0,v),h.box(c,b,-1.3,-c,b+1.1,-1.18,v,null,{noBottom:!0});for(let M=0;M<y;M++)ln(u,c+M*S,c+(M+1)*S,b,b+1.1,-1.305,d,l);for(let M=0;M<=y;M++)h.box(c+M*S-.05,b,-1.18,c+M*S+.05,b+2.4,0,Bn(l,.92));for(let M=0;M<y;M++){let T=t(),_=c+M*S+.2,E=c+(M+1)*S-.2;T<.34?Ng(h,_,E,b+2.02,-.98,t):T<.46&&gS(h,_+.25,Math.min(E-.25,_+1.9),b+1.1,-1.3,t)}i.atlas.setM(e);for(let M=0;M<y;M++)t()<.55&&(w0(i,e,c+(M+.78)*S,b,-.55),i.atlas.setM(e),i.color.setM(e))}h.box(c,x-.15,-1.3,-c,x,0,v),El(u,s,r,f,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],Bn(l,.8)),Tl(h,s,r,x,t,!0)}function aS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=4,m=3.4,x=p+(o-1)*m,y=Math.max(2,Math.round(s/3)),S=s/y,c=-s/2,f=[0,p];for(let d=1;d<o;d++)f.push(p+d*m);for(let d=0;d<y;d++)ln(u,c+d*S,c+(d+1)*S,0,p,0,d===1?"shop_door":"shop_glass");for(let d=1;d<o;d++)for(let v=0;v<y;v++)ln(u,c+v*S,c+(v+1)*S,f[d],f[d+1],0,bs("win3",t(),a),l);El(u,s,r,f,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],Bn(l,.8)),Tl(h,s,r,x,t,!0),t()<.6&&O0(i,(t()<.5?1:-1)*(s/2-.3),p+.4,Math.min(x-.3,p+4.5),t),t()<.3&&Cg(i,s,x,r,t)}function lS(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,l=i.color,a=4.4,u=-s/2,h=Math.max(3,Math.round(s/3)),p=s/h;for(let m=0;m<h;m++)ln(o,u+m*p,u+(m+1)*p,0,3.4,0,"shop_konbini"),lr(i,e,u+(m+.5)*p,1.9,-.8,.8);l.box(u,3.4,-.35,-u,a,0,Te.white),ln(o,u,-u,3.4,a,-.355,"konbini_band"),El(o,s,r,[0,a],ye("#f2f2ee"),t,0),Tl(l,s,r,a,t)}var cg=(i,e)=>e?ye("#7a5a42"):i.tint,E0=null,cS=()=>{if(!E0){let i=oi("kawara"),e=16/272*(i.u1-i.u0);E0={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return E0};function Pg(i,e,t,n,s,r,o){let l=i.atlas,a=i.color,u=!!e.snow,h=u?.75:.6,p=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),m=u?oi("white"):cS(),x=u?ye("#f3f5fa"):ye("#c8ccd8"),y=u?ye("#e4e8f0"):ye("#3d4456"),S=u?1:Math.max(2,Math.round((t+2*h)/3)),c=v=>-t/2-h+(t+2*h)*v/S;for(let v=0;v<S;v++){let g=c(v),b=c(v+1);l.quad([b,s-.25,-h],[g,s-.25,-h],[g,s+p,n/2],[b,s+p,n/2],x,m),l.quad([g,s-.25,n+h],[b,s-.25,n+h],[b,s+p,n/2],[g,s+p,n/2],x,m)}let f=(v,g,b,M,T,_)=>{_<0?(a.quad([g,b,T],[v,b,T],[v,M,T],[g,M,T],y),a.quad([v,b,T],[g,b,T],[g,b,T+.08],[v,b,T+.08],y)):(a.quad([v,b,T],[g,b,T],[g,M,T],[v,M,T],y),a.quad([g,b,T],[v,b,T],[v,b,T-.08],[g,b,T-.08],y))};for(let[v,g]of[[-h,0],[n+h,n]])f(-t/2-h,t/2+h,s-.42,s-.22,v<0?v-.04:v+.04,v<0?-1:1),a.quad(v<0?[-t/2-h,s-.26,v]:[t/2+h,s-.26,v],v<0?[t/2+h,s-.26,v]:[-t/2-h,s-.26,v],v<0?[t/2+h,s-.26,g]:[-t/2-h,s-.26,g],v<0?[-t/2-h,s-.26,g]:[t/2+h,s-.26,g],Bn(cg(e,o),.62));for(let v of[-1,1]){let g=v*(t/2+h+.02),b=.2,M=[g,s-.25,-h],T=[g,s+p,n/2],_=[g,s-.25,n+h],E=w=>[w[0],w[1]-b,w[2]];v>0?(a.quad(E(T),E(M),M,T,y),a.quad(E(_),E(T),T,_,y)):(a.quad(E(M),E(T),T,M,y),a.quad(E(T),E(_),_,T,y))}let d=cg(e,o);if(Vo(a,[-t/2,s,0],[-t/2,s,n],[-t/2,s+p-.1,n/2],d),Vo(a,[t/2,s,n],[t/2,s,0],[t/2,s+p-.1,n/2],d),a.box(-t/2-h,s+p-.05,n/2-.15,t/2+h,s+p+.18,n/2+.15,u?ye("#f6f7fb"):ye("#3d4456")),u){a.box(-t/2-h-.05,s-.42,-h-.1,t/2+h+.05,s-.12,-h+.3,ye("#eef1f7")),a.box(-t/2-h-.05,s-.42,n+h-.3,t/2+h+.05,s-.12,n+h+.1,ye("#eef1f7"));for(let v=-t/2;v<t/2;v+=.45+r()*.5)a.cyl(v,s-.42-.35,-h+.02,0,.04,.35,4,ye("#dfe8f3"),!1)}return{RC:x,k:m,fascia:f,nS:S}}function uS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=2.9,m=o*p,x=-s/2,y=t()<.5,S=Math.max(2,Math.round(s/3)),c=s/S,f=[];for(let T=0;T<=o;T++)f.push(T*p);let d=y?cn:l;for(let T=0;T<o;T++)for(let _=0;_<S;_++){let E=y?"win4":"win0";T===0&&_===0?E="shop_house":E=bs(E,t(),a),ln(u,x+_*c,x+(_+1)*c,f[T],f[T+1],0,E,E==="shop_house"?cn:d)}El(u,s,r,f,y?ye("#9a7a62"):l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],Bn(l,.75));let{RC:v,k:g,fascia:b,nS:M}=Pg(i,n,s,r,m,t,y);if(o>1){let T=p+.05;for(let _=0;_<M;_++){let E=-s/2-.1+(s+.2)*_/M,w=-s/2-.1+(s+.2)*(_+1)/M;u.quad([w,T-.3,-.75],[E,T-.3,-.75],[E,T+.05,0],[w,T+.05,0],v,g)}b(-s/2-.1,s/2+.1,T-.42,T-.28,-.79,-1)}if(n.fence){let T=-n.fence,_=1.2;for(let[E,w]of[[-s/2,-1],[.4,s/2]])h.box(E,0,T-.08,w,_,T+.08,Te.concrete),ln(u,E,w,0,_,T-.085,"block")}}var A0={byZone:null};function Ig(i){let e={};for(let t of i)for(let n of t.zones)(e[n]||(e[n]=[])).push(t);A0.byZone=e}function uh(i,e){let t=A0.byZone&&A0.byZone[i];return t?t[Math.floor(e()*t.length)]:null}var _l={u0:0,u1:0,v0:0,v1:0},as=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],ug=(i,e)=>{for(let t=0;t<4;t++)as[t][0]=i[e+t*3],as[t][1]=i[e+t*3+1],as[t][2]=i[e+t*3+2]},hS=(i,e,t)=>{let n=Math.sin(e*12.9898+t*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;return 24+Math.floor((n-Math.floor(n))*231)};function fS(i,e,t,n){let s=n.ptype,r=i.atlas,o=i.color,l=oi(s.f),a=oi(s.s);for(let u of s.pieces){let h=u.t==="f"?l:a,p=h.u1-h.u0,m=h.v1-h.v0;_l.u0=h.u0+u.uv[0]*p,_l.u1=h.u0+u.uv[2]*p,_l.v1=h.v1-u.uv[1]*m,_l.v0=h.v1-u.uv[3]*m,ug(u.p,0),u.lit&&r.hasLit&&(r.litV=s.day?6:hS(r,u.p[0]+u.p[2],u.p[1])),r.quad(as[0],as[1],as[2],as[3],cn,_l),r.litV=0}o.noShadow=!0;for(let u of s.soffits)ug(u,0),o.quad(as[0],as[1],as[2],as[3],s.soffit);if(o.noShadow=!1,n.fence){let u=-n.fence,h=1.1,p=s.ww+1;for(let[m,x]of[[-p/2,-1],[.4,p/2]])o.box(m,0,u-.08,x,h,u+.08,Te.concrete),ln(r,m,x,0,h,u-.085,"block")}}function dS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.4,m=o*p,x=Math.max(2,Math.round(s/6)),y=s/x,S=-s/2,c=t()<.5?"win3":"win2",f=[];for(let g=0;g<=o;g++)f.push(g*p);for(let g=0;g<o;g++)for(let b=0;b<x;b++)ln(u,S+b*y,S+(b+1)*y,f[g],f[g+1],0,bs(c,t(),a),l);let d=Math.max(1,Math.round(r/6)),v=r/d;for(let g of[-1,1])for(let b=0;b<o;b++)for(let M=0;M<d;M++)(g>0?Hi:Vi)(u,g*s/2,M*v,(M+1)*v,f[b],f[b+1],bs(c,t(),a),l);Tl(h,s,r,m,t,!0)}function z0(i,e,t,n){let s=i.color,r=ye("#8d9096"),o=ye("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,a=-n+.62;s.box(-.14,5.08,l,.14,5.56,a,o);let u=t*.141;i.atlas.setM(e),(t>0?Hi:Vi)(i.atlas,u,l,a,5.08,5.56,"signal");let h=t>0?a:l,p=t>0?-1:1;for(let x=0;x<3;x++){let y=h+p*(.2+x*.4);s.box(t>0?.14:-.36,5.47,y-.15,t>0?.36:-.14,5.5,y+.15,o)}let m=h+p*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,m-.11,t>0?.16:-.145,5.43,m+.11,cn)}function Lg(i,e,t,n){let s=i.color,r=ye("#3d6ea8"),o=ye("#e8eef2"),l=ye("#c7c5bf"),a=5.35;s.setM(e),s.box(-1.1,a-.65,-t,1.1,a,t,r);for(let u of[-1.1,1])s.box(u,a,-t,u+.1,a+1.1,t,o),s.box(u-.02,a+1.1,-t,u+.12,a+1.18,t,r);i.atlas.setM(e),Vi(i.atlas,-1.105,-2.2,2.2,a-.62,a-.06,n),Hi(i.atlas,1.105,-2.2,2.2,a-.62,a-.06,n),s.setM(e);for(let u of[-1,1]){let h=u*(t-1.65),p=u*(t-.15),m=Math.min(h,p),x=Math.max(h,p);s.box(-.45,.15,m+.3,.45,a-.65,x-.3,r);let y=20,S=(a-.15)/y;for(let c=0;c<y;c++)s.box(1.1+c*.3,.15,m,1.1+(c+1)*.3,a-(c+1)*S+.04,x,l);s.box(1.1,a-.1,m-.05,1.1+y*.3,a-.02,m+.05,r)}}function Dg(i,e,t,n,s,r,o){let l=i.color,a=1.22,u=3.55,h=6.7,p=ye("#c8c5bd"),m=ye("#ebe8de"),x=ye("#7a5a42"),y=ye("#5e4433"),S=ye("#4d5468");l.setM(e),l.box(t,-1.4,u,n,a,h,p,null,{noBottom:!0}),l.box(t,a,u,n,a+.025,u+.32,m),l.box(t,a,u+.6,n,a+.04,u+.9,Te.yellow);let c=Math.sign(s-(t+n)/2),f=c>0?n:t,d=f+c*6.2,v=u+.9,g=h-.2,b=(B,V,z)=>[B,V,z];c>0?l.quad(b(d,.1,g),b(d,.1,v),b(f,a,v),b(f,a,g),p):l.quad(b(d,.1,v),b(d,.1,g),b(f,a,g),b(f,a,v),p);for(let B of[v,g]){let V=ye("#9aa0a6");l.rod([d,.1+.9,B],[f,a+.9,B],.03,.03,5,V);for(let z=0;z<=3;z++){let q=d+(f-d)*z/3,ee=.1+(a-.1)*z/3;l.box(q-.03,ee,B-.03,q+.03,ee+.9,B+.03,V)}}i.atlas.setM(e);for(let B=t;B<n-.01;B+=3){let V=Math.min(n,B+3);i.atlas.quad([B,-.6,h+.004],[V,-.6,h+.004],[V,a,h+.004],[B,a,h+.004],ye("#d8d4ca"),oi("concrete"))}l.setM(e);for(let B=t+.4;B<n;B+=2)l.box(B-.05,a,h-.12,B+.05,a+1,h-.02,ye("#8f949a"));for(let B of[.45,.95])l.box(t,a+B,h-.1,n,a+B+.06,h-.04,ye("#8f949a"));let M=n-t,T=B=>c>0?n-M*B:t+M*B,_=T(.47),E=_-2.3,w=_+2.3,A=u+1.35,C=h-.25;l.box(E,a,C-.12,w,a+2.45,C,x);for(let B of[E,w-.12])l.box(B,a,A+.6,B+.12,a+2.45,C,y);for(let B of[E,w-.12])l.box(B,a,A,B+.12,a+2.45,A+.12,y);l.quad([w+.4,a+2.5,A-.45],[E-.4,a+2.5,A-.45],[E-.4,a+2.85,C+.35],[w+.4,a+2.85,C+.35],S),l.quad([E-.4,a+2.42,A-.45],[w+.4,a+2.42,A-.45],[w+.4,a+2.77,C+.35],[E-.4,a+2.77,C+.35],ye("#3a3f50")),l.box(E+.3,a+.42,C-.55,w-.3,a+.48,C-.15,ye("#8a6a4a"));for(let B of[E+.4,w-.5])l.box(B,a,C-.5,B+.08,a+.42,C-.2,Te.metal);i.atlas.setM(e),i.atlas.quad([_-1.1,a+1.55,C+.005],[_+1.1,a+1.55,C+.005],[_+1.1,a+2.03,C+.005],[_-1.1,a+2.03,C+.005],cn,oi("ekiplate"+r));let I=T(.2),R=u+1.6,L=1.25,D=a+1.25,O=D+.95;l.setM(e);for(let B of[I-L+.12,I+L-.12])l.cyl(B,a,R,.05,.05,O-a+.05,8,ye("#6b7078"));l.box(I-L,D-.03,R-.03,I+L,O+.03,R+.03,ye("#3a3d42")),i.atlas.setM(e),i.atlas.quad([I-L,D,R+.035],[I+L,D,R+.035],[I+L,O,R+.035],[I-L,O,R+.035],cn,oi("ekimei"+r)),i.atlas.quad([I+L,D,R-.035],[I-L,D,R-.035],[I-L,O,R-.035],[I+L,O,R-.035],cn,oi("ekimei"+r)),l.setM(e);let H=_-c*4.2;l.box(H-.9,a+.42,h-1.25,H+.9,a+.47,h-.85,ye("#3b6ea8")),l.box(H-.9,a+.47,h-.88,H+.9,a+.9,h-.83,ye("#3b6ea8"));for(let B of[H-.75,H+.7])l.box(B,a,h-1.2,B+.06,a+.42,h-.9,Te.metal);for(let B=t+3;B<n-1;B+=9)Ml(i,pg(e,B,a,h-.45))}var pS=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(ye),mS=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(ye);function Ng(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,Te.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let l=.28+r()*.34,a=.36+r()*.42,u=r.pick(pS),h=s+(r()-.5)*.06;i.quad([o+l,n-a,h],[o,n-a,h],[o,n-.02,h],[o+l,n-.02,h],u),i.quad([o,n-a,h+.01],[o+l,n-a,h+.01],[o+l,n-.02,h+.01],[o,n-.02,h+.01],Bn(u,.85)),r()<.4&&i.box(o+l*.45,n-.02,h-.02,o+l*.55,n+.06,h+.02,ye("#d8d8d0")),o+=l+.06+r()*.22}}function gS(i,e,t,n,s,r){let o=r.pick(mS),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,o),i.box(e,n-.72,s-l,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,Bn(o,.86))}function Ug(i,e){let t=i.color,n=ye("#a19f97"),s=ye("#6b4a35"),r=ye("#4f4a44"),o=ye("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,ye("#8d8b84"));for(let l of[-.52,.48])for(let a of[-.36,.32])t.box(l,.32,a,l+.05,1.5,a+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,Bn(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,ye("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,ye("#5b8d3d"))}function Fg(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?Te.black:Te.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,Te.black),t.box(-.5,2.55,-.06,.5,2.95,.02,Te.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,Te.black);t.box(-.78,-.9,-.34,.3,0,.34,Te.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,ye("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,Te.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new Qe().multiplyMatrices(e,new Qe().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?Te.black:Te.yellow)}t.setM(e),i.atlas.setM(e),ln(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function Bg(i,e){let t=i.color;t.setM(e);let n=Te.stone,s=Bn(Te.stone,1.06),r=Bn(Te.stone,.92);t.box(-.36,0,-.36,.36,.18,.36,r),t.box(-.26,.18,-.26,.26,.26,.26,n),t.box(-.13,.26,-.13,.13,1,.13,n),Ho(t,1,1.1,.16,.3,s,!0,!0),t.box(-.2,1.1,-.2,.2,1.48,.2,s),Ho(t,1.48,1.54,.25,.35,r,!1,!0),Ho(t,1.54,1.78,.35,.07,r),t.cyl(0,1.78,0,.07,.04,.1,6,n),t.cyl(0,1.88,0,.05,0,.08,6,n),i.lamp.setM(e),i.lamp.box(-.1,1.2,-.205,.1,1.38,-.195,cn),i.lamp.box(-.1,1.2,.195,.1,1.38,.205,cn)}function k0(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,Te.vermilion),s.cyl(0,0,r,.38,.38,.5,12,Te.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,Te.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,Te.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,Te.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,Te.vermilion)}function Og(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,ye("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,ye("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,ye("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,ye("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,Te.metal),n.box(1.1,0,.3,1.2,.42,.55,Te.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,Te.metal),i.atlas.setM(e),Vi(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Hi(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}var vS=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],xS=ye("#a7a7aa"),yS=[1,.94,.87],hg={};function zg(i,e){let t=i*16+e,n=hg[t];if(!n){let s=new dn,r=Bn(xS,yS[i]),o=.4,l=.25;for(let a of vS){let u=0,h=1,p=0;Math.abs(a[1])>.99&&(u=1,h=0);let m=a[1]*p-a[2]*h,x=a[2]*u-a[0]*p,y=a[0]*h-a[1]*u,S=Math.hypot(m,x,y);m/=S,x/=S,y/=S;let c=x*a[2]-y*a[1],f=y*a[0]-m*a[2],d=m*a[1]-x*a[0],v=[];for(let b=0;b<=e;b++){let M=b/e*Math.PI*2,T=Math.cos(M),_=Math.sin(M);v.push([m*T+c*_,x*T+f*_,y*T+d*_])}let g=(o-l)/1;for(let b=0;b<e;b++){let M=v[b],T=v[b+1],_=[M[0]*o,M[1]*o,M[2]*o],E=[T[0]*o,T[1]*o,T[2]*o],w=[a[0]+T[0]*l,a[1]+T[1]*l,a[2]+T[2]*l],A=[a[0]+M[0]*l,a[1]+M[1]*l,a[2]+M[2]*l],C=[M[0]+a[0]*g,M[1]+a[1]*g,M[2]+a[2]*g],I=[T[0]+a[0]*g,T[1]+a[1]*g,T[2]+a[2]*g];s.vtx(_[0],_[1],_[2],C[0],C[1],C[2],0,0,r),s.vtx(w[0],w[1],w[2],I[0],I[1],I[2],0,0,r),s.vtx(E[0],E[1],E[2],I[0],I[1],I[2],0,0,r),s.vtx(_[0],_[1],_[2],C[0],C[1],C[2],0,0,r),s.vtx(A[0],A[1],A[2],C[0],C[1],C[2],0,0,r),s.vtx(w[0],w[1],w[2],I[0],I[1],I[2],0,0,r),s.vtx(a[0],a[1],a[2],a[0],a[1],a[2],0,0,r),s.vtx(w[0],w[1],w[2],a[0],a[1],a[2],0,0,r),s.vtx(A[0],A[1],A[2],a[0],a[1],a[2],0,0,r)}}n=hg[t]=s.toArrays()}return n}var _S=new vn,T0=new Kn,bS=new k,MS=new k;function H0(i,e,t,n,s,r,o=0,l=.6){s()<l?T0.set((s()-.5)*.4,s()*6.283,(s()-.5)*.4):T0.set(s()*6.283,s()*6.283,s()*6.283);let a=new Qe().compose(bS.set(e,t,n),_S.setFromEuler(T0),MS.set(r,r,r));a.groundY=o,i.color.stamp(zg(Math.floor(s()*3),bl>.7?8:6),a)}function kg(){for(let i=0;i<3;i++)for(let e of[6,8])zg(i,e)}function Hg(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,ye("#8f8a80"),ye("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,Te.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,Te.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,Te.black),t.cyl(0,18.6,0,1,.25,1.2,12,Te.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,cn)}function Vg(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ye("#f4f4f0"),ye("#3b6ea5"),ye("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),Vo(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),Vo(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,Te.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,Te.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,ye("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,Te.metal)}function Gg(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,Te.stone),n.box(-.55,.5,.9,.55,1.5,1.8,ye("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],ye("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],ye("#4d5468")),k0(i,pg(e,0,0,-.3,Math.PI/2),.75,2.2)}var Xo=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new _e(e):e)),oe={zenith:new _e,horizon:new _e,sunCol:new _e,sunI:1,hemiSky:new _e,hemiGround:new _e,hemiI:1,fog:new _e,cLit:new _e,cShade:new _e,cRim:new _e,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new k,moonDir:new k,lightDir:new k,sunEl:0};function Xg(i){let e=0;for(;e<Xo.length-2&&Xo[e+1][0]<=i;)e++;let t=Xo[e],n=Xo[e+1],s=ul(Jt((i-t[0])/(n[0]-t[0]),0,1)),r=(o,l)=>l.copy(t[o]).lerp(n[o],s);r(1,oe.zenith),r(2,oe.horizon),r(3,oe.sunCol),oe.sunI=yt(t[4],n[4],s),r(5,oe.hemiSky),r(6,oe.hemiGround),oe.hemiI=yt(t[7],n[7],s),r(8,oe.fog),r(9,oe.cLit),r(10,oe.cShade),r(11,oe.cRim),oe.night=yt(t[12],n[12],s),oe.warm=yt(t[13],n[13],s),oe.sunEl=qg(i,oe.sunDir,oe.moonDir,oe.lightDir)}function qg(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Jt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var ES=new k,TS=new k;function G0(i,e){return qg((i%1+1)%1,ES,TS,e),e}var Wg={zenith:[new _e("#7b8594"),new _e("#141a28")],horizon:[new _e("#b5bcc6"),new _e("#283042")],fog:[new _e("#a8b0ba"),new _e("#232b3c")],hemiSky:[new _e("#aab3bf"),new _e("#3c4866")],hemiGround:[new _e("#8b8983"),new _e("#1e2030")],cLit:[new _e("#d0d5dc"),new _e("#2c3240")],cShade:[new _e("#7c8593"),new _e("#151922")]},V0=new _e;function Yg(i,e){if(oe.overcast=i,oe.rain=e,oe.bright=(1-oe.night)*(1-oe.warm)*(1-i),i<=.001)return;let t=oe.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])V0.copy(Wg[n][0]).lerp(Wg[n][1],t),oe[n].lerp(V0,i*(n==="cLit"||n==="cShade"?.75:.85));oe.sunI*=1-.82*i,oe.warm*=1-i,oe.cRim.multiplyScalar(1-i),oe.sunCol.lerp(V0.setRGB(.85,.87,.9),i*.6)}function Zg(){let i=new ut({side:Gn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:oe.zenith},uHorizon:{value:oe.horizon},uSunDir:{value:oe.sunDir},uMoonDir:{value:oe.moonDir},uNoiseTex:ke.uNoiseTex,uSunCol:{value:oe.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new _e},uOvercast:{value:0},uDeckLit:{value:new _e},uDeckDark:{value:new _e},uMilky:{value:0},uMetA:{value:new k(0,1,0)},uMetB:{value:new k(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright;
      varying vec3 vDir;
      ${Ci}
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
      }`}),e=new ct(new Wa(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function wS(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let d=0;d<o;d++){let v=.06+i()*.05;t.push([(d/(o-1)-.5)*s+(i()-.5)*.03,.1+v*.5,(i()-.5)*.2,v])}let l=e?6:2,a=s*.82,u=.1+.09;for(let d=0;d<l;d++){let v=Math.max(1,Math.round(a/.11));for(let g=0;g<v;g++){let b=(v===1?0:g/(v-1)-.5)*a+(i()-.5)*.05+r*d;t.push([b,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,a*=e?.8:.66}let h=t.slice();for(let d of h){if(t.length>84)break;let v=1+Math.floor(i()*2);for(let g=0;g<v;g++){let b=.35+i()*2.4,M=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(b)*d[3]*.82,d[1]+Math.sin(b)*d[3]*.82,d[2]+.04,M])}}let p=t.slice(h.length);for(let d of h){if(d[1]<.1+.12||t.length>104)continue;let v=1+Math.floor(i()*2);for(let g=0;g<v;g++){let b=.3+i()*2.5,M=d[3]*(.3+i()*.4),T=d[3]*(.28+i()*.16);t.push([d[0]+Math.cos(b)*M,d[1]+Math.sin(b)*M,d[2]+Math.sqrt(d[3]*d[3]-M*M)-T*.6,T])}}for(let d of p){if(t.length>124)break;let v=1+Math.floor(i()*2);for(let g=0;g<v;g++){let b=.2+i()*2.7,M=d[3]*(.38+i()*.2);t.push([d[0]+Math.cos(b)*d[3]*.85,d[1]+Math.sin(b)*d[3]*.85,d[2]+.02,M])}}let m=t.slice(0,128),x=1e9,y=-1e9,S=-1e9;for(let d of m)x=Math.min(x,d[0]-d[3]*1.12),y=Math.max(y,d[0]+d[3]*1.12),S=Math.max(S,d[1]+d[3]*1.12);let c=Math.min(1,.92/(y-x),(.95-.1)/(S-.1)),f=(x+y)/2;for(let d of m)d[0]=(d[0]-f)*c,d[1]=.1+(d[1]-.1)*c,d[3]*=c;return m}function Kg(i){let t={value:Array.from({length:128},()=>new dt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new ut({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:ke.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Ci}
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
      }`,depthTest:!1,depthWrite:!1,blending:si}),r=new Yt(1024,1024,{generateMipmaps:!0,minFilter:Pn,magFilter:Ot,depthBuffer:!1}),o=new ut({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:ke.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${Ci}
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
      }`,depthTest:!1,depthWrite:!1,blending:si}),l=new ct(new rn(1,1),s),a=new Sr,u=new Ls;a.add(l);let h=new Yt(1024*2,1024*2,{generateMipmaps:!0,minFilter:Pn,magFilter:Ot}),p=i.getRenderTarget(),m=i.autoClear,x=At(99);i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let y=[];for(let S=0;S<4;S++){let c=S%2===0,f=wS(x,c);f.forEach((d,v)=>t.value[v].set(d[0],d[1],d[2],d[3])),s.uniforms.uN.value=f.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=S*13.7,l.material=s,i.setRenderTarget(r),i.render(a,u),l.material=o,h.viewport.set(S%2*1024,Math.floor(S/2)*1024,1024,1024),i.setRenderTarget(h),i.render(a,u),y.push({cell:[S%2,Math.floor(S/2)],tall:c})}return h.viewport.set(0,0,1024*2,1024*2),i.autoClear=m,i.setRenderTarget(p),s.dispose(),o.dispose(),r.dispose(),l.geometry.dispose(),{tex:h.texture,kinds:y,rt:h}}function $g(i){let e=At(5),t=22,n=[],s=new rn(1,1);s.translate(0,.5,0);let r=new Cn(new Float32Array(t*4),4),o=new Cn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let l=new ut({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new _e},uShade:{value:oe.cShade},uRim:{value:oe.cRim},uHaze:{value:oe.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),a=new ns(s,l,t);a.frustumCulled=!1,a.renderOrder=-5;for(let y=0;y<t;y++){let S=y<12,c=i.kinds[(y*3+(S?0:1))%i.kinds.length],f=S?c.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:y/t*Math.PI*2+e.range(-.15,.15),d:S?e.range(2600,3400):e.range(1300,2200),base:S?e.range(-60,60):e.range(260,700),size:f,cell:c.cell,haze:S?.45:.18})}let u=new Qe,h=new vn,p=new k,m=new k,x=new k(0,1,0);return{group:a,update(y,S){let c=Math.atan2(oe.lightDir.x,oe.lightDir.z);for(let d of n)d.phi+=S*1.2/d.d;n.slice().sort((d,v)=>v.d-d.d).forEach((d,v)=>{p.set(y.x+Math.sin(d.phi)*d.d,y.y+d.base,y.z+Math.cos(d.phi)*d.d),h.setFromAxisAngle(x,d.phi+Math.PI),m.set(d.size,d.size,1),u.compose(p,h,m),a.setMatrixAt(v,u);let g=c-d.phi;g=Math.atan2(Math.sin(g),Math.cos(g));let b=Math.max(0,Math.min(1,(g+.35)/.7)),M=1-b*b*(3-2*b);r.setXYZW(v,d.cell[0],d.cell[1],M,d.haze),o.setX(v,.35+.9*Math.pow(Math.max(Math.cos(g),0),3)*(.4+oe.warm))}),a.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,l.uniforms.uOpacity.value=(1-oe.night*.35)*(1-oe.overcast*.55)*(1-.85*oe.rain),l.uniforms.uLit.value.copy(oe.cLit).multiplyScalar(1+.35*oe.bright)}}}function Jg(){let i=new hn;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],l=[];for(let p=0;p<=360;p++){let m=p/360*Math.PI*2,x=Math.sin(m)*t.R,y=Math.cos(m)*t.R,S=Zu(p/360*t.k*4,40+n*9),c=Math.pow(Math.max(0,S-.18)/.82,1.6),f=t.h*(.12+c);if(r.push(x,-60,y,x,-60+f,y),o.push(0,p/360,1,p/360),p<360){let d=p*2;l.push(d,d+1,d+2,d+1,d+3,d+2)}}let a=new mt;a.setAttribute("position",new Je(r,3)),a.setAttribute("hf",new Je(o,2)),a.setIndex(l);let u=new ut({side:bn,fog:!1,uniforms:{uCol:{value:new _e(t.col)},uHaze:{value:oe.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:ke.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Ci}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),h=new ct(a,u);h.frustumCulled=!1,h.renderOrder=999,i.add(h)}),{group:i,update(t,n=0,s=1){if(i.visible=s>.002,!i.visible)return;i.position.set(t.x,0,t.z),i.scale.y=Math.min(1,s);for(let o of i.children)o.material.uniforms.uSnow.value=n;let r=(.35+.65*(1-oe.night))*(1-.35*oe.overcast);for(let o of i.children)o.material.uniforms.uLight.value=r}}}var Or="./assets/",jg=`
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
}`,Bs=[.299,.587,.114],qo=[.03,.014,-.018],AS=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),xi=[0,0,0],W0=(i,e,t,n,s,r)=>{let o=i-e*(1-n)-t*n*s;return Math.min(.985,Math.max(0,AS(Math.min(1,Math.max(0,n+(o-n)/r)))))};function Qg(i,e,t,n,s){let r=i.toneMappingExposure.value,o=i.uSat.value,l=i.uLo.value,a=i.uDay.value,u=e/255,h=t/255,p=n/255,m=l.x*Bs[0]+l.y*Bs[1]+l.z*Bs[2],x=(qo[0]*Bs[0]+qo[1]*Bs[1]+qo[2]*Bs[2])*a,y=(u*Bs[0]+h*Bs[1]+p*Bs[2]-m)/(1-m+x);xi[0]=W0(u,l.x,qo[0],y,a,o),xi[1]=W0(h,l.y,qo[1],y,a,o),xi[2]=W0(p,l.z,qo[2],y,a,o);let S=.76,c=.24,f=Math.max(xi[0],xi[1],xi[2]);if(f>=S){let g=c*c/(1-f)-c+S,b=1-1/(.15*(g-f)+1),M=g/f;for(let T=0;T<3;T++)xi[T]=(xi[T]-b*f)/Math.max(1-b,.001)*M}let d=Math.min(xi[0],xi[1],xi[2]),v=d<.04?Math.sqrt(Math.max(d,0)/6.25)-d:.04;return s.setRGB((xi[0]+v)/r,(xi[1]+v)/r,(xi[2]+v)/r)}var e1={value:new Le(1280,720)};function t1(i){i.getDrawingBufferSize(e1.value)}function n1(i){let e=i.grade.uniforms;return{toneMappingExposure:e.toneMappingExposure,uSat:e.uSat,uVig:e.uVig,uDay:e.uDay,uLo:e.uLo,uGRes:e1}}async function Y0(i,e,t){let n=e.files[t]?t:"hi",s=await fetch(i+e.files[n]);if(!s.ok)throw new Error(e.files[n]+" "+s.status);let r=await s.blob();if(e.bytes&&e.bytes[n]&&r.size!==e.bytes[n])throw new Error(e.files[n]+" is "+r.size+" bytes, not "+e.bytes[n]);let o=URL.createObjectURL(r),l;try{l=await new Ya().loadAsync(o)}catch(a){throw URL.revokeObjectURL(o),a}return l.onUpdate=()=>{URL.revokeObjectURL(o),l.onUpdate=null},l.colorSpace=ri,l.generateMipmaps=!0,l.minFilter=Pn,l.magFilter=Ot,{tex:l,file:n}}async function zr(i,e,t){let n,s=new Promise(r=>{n=setTimeout(()=>r(null),e)});try{return await Promise.race([i,s])}catch(r){return console.warn(t,r.message||r),null}finally{clearTimeout(n)}}async function i1(i,e=15e3){let t=Or+"clouds/";return zr((async()=>{let n=await fetch(t+"clouds.json");if(!n.ok)throw new Error("clouds.json "+n.status);let s=await n.json(),r=(s.clouds||[]).filter(l=>l.u1>l.u0&&l.v1>l.v0&&l.w>0&&l.h>0&&l.lum&&l.lum[1]>l.lum[0]);if(!r.length)throw new Error("no clouds listed");let{tex:o}=await Y0(t,s,i);return{tex:o,list:r,tier:i}})(),e,"painted clouds unavailable, keeping the procedural ones:")}async function s1(i,e=15e3){let t=Or+"fronts/";return zr((async()=>{let n=await fetch(t+"fronts2.json");if(!n.ok)throw new Error("fronts2.json "+n.status);let s=await n.json(),r=(s.tiles||[]).filter(h=>h.name&&h.w>0&&h.h>0&&h.x>=0&&h.x+h.w<=1&&h.y>=0&&h.y+h.h<=1&&h.ey+h.h<=1);if(!r.length)throw new Error("no fronts listed");let o=s.files&&s.files[i]?i:"hi",l=await fetch(t+s.files[o]);if(!l.ok)throw new Error(s.files[o]+" "+l.status);let a=await l.blob();if(s.bytes&&s.bytes[o]&&a.size!==s.bytes[o])throw new Error(s.files[o]+" is "+a.size+" bytes, not "+s.bytes[o]);let u=await createImageBitmap(a);if(s.size&&s.size[o]&&(u.width!==s.size[o][0]||u.height!==s.size[o][1]))throw new Error(s.files[o]+" has the wrong size");return{img:u,tiles:r,tier:o}})(),e,"painted fronts unavailable, keeping the procedural shopfronts:")}async function r1(i,e=15e3){let t=Or+"houses/";return zr((async()=>{let n=await fetch(t+"houses.json");if(!n.ok)throw new Error("houses.json "+n.status);let s=await n.json(),r=s.files&&s.files[i]?i:"hi",o=s.tiles&&s.tiles[r]||[],l=(s.types||[]).filter(p=>p.f&&p.s&&p.pieces&&p.pieces.length&&o.some(m=>m.name===p.f)&&o.some(m=>m.name===p.s));if(!l.length||!(s.rows&&s.rows[r]>0))throw new Error("no houses listed");let a=await fetch(t+s.files[r]);if(!a.ok)throw new Error(s.files[r]+" "+a.status);let u=await a.blob();if(s.bytes&&s.bytes[r]&&u.size!==s.bytes[r])throw new Error(s.files[r]+" is "+u.size+" bytes, not "+s.bytes[r]);let h=await createImageBitmap(u,{premultiplyAlpha:"none"});if(s.size&&s.size[r]&&(h.width!==s.size[r][0]||h.height!==s.size[r][1]))throw new Error(s.files[r]+" has the wrong size");if(o.some(p=>!(p.w>0&&p.h>0&&p.x>=0&&p.x+p.w<=h.width&&p.ey+p.h<=h.height)))throw new Error("a tile lies outside the sheet");return{img:h,tiles:o,types:l,rows:s.rows[r],tier:r}})(),e,"painted houses unavailable, keeping the procedural ones:")}async function o1(i,e=15e3){let t=Or+"fields/";return zr((async()=>{let n=await fetch(t+"fields.json");if(!n.ok)throw new Error("fields.json "+n.status);let s=await n.json();if(!(s.tile&&s.tile[0]>0&&s.tile[1]>0&&Math.abs(Ri/s.tile[1]-Math.round(Ri/s.tile[1]))<1e-6))throw new Error("bad tile size");if(!(s.mean&&s.mean.length===3))throw new Error("no average colour listed");let{tex:r,file:o}=await Y0(t,s,i);return r.colorSpace=qt,r.wrapS=r.wrapT=Is,{tex:r,tile:s.tile,mean:s.mean,tier:o}})(),e,"painted fields unavailable, keeping the procedural paddies:")}var hh=[["tower",10,[4300,4800],[-1.6,-.4],[22,33],["tower"],.3],["bank",8,[4820,4960],[-1.2,.2],[5,8.5],["wide","mid"],.42],["mid",8,[3500,4200],[-1,2],[9,15],["mid","wide","tower"],.26],["high",7,[2300,3200],[11,27],[6,11],["mid","wide","tower"],0]],RS=140*Math.PI/180,fh=Math.PI/180,hr=i=>Math.atan2(Math.sin(i),Math.cos(i));function CS(i,e){let t=At(e),n=[],s=t()*Math.PI*2,r=Math.PI*2/hh[0][1];for(let[a,u,h,p,m,x,y]of hh)for(let S=0;S<u;S++){let c;a==="tower"?c=s+S*r+t.range(-.22,.22)*r:a==="mid"?c=s+(S+.5)*r*(hh[0][1]/u)+t.range(-.2,.2)*r:a==="high"?c=s+(S*(hh[0][1]/u)+.5)*r+t.range(-.3,.3)*r:c=s+(S+t())/u*Math.PI*2,n.push({role:a,kinds:x,phi:c,d:t.range(h[0],h[1]),e0:t.range(p[0],p[1])*fh,ah:t.range(m[0],m[1])*fh,haze:y,k:-1,flip:!1})}let o=i.map(()=>[]),l=n.map((a,u)=>u);for(let a=l.length-1;a>0;a--){let u=Math.floor(t()*(a+1)),h=l[a];l[a]=l[u],l[u]=h}for(let a of l){let u=n[a],h=-1,p=1e9;i.forEach((m,x)=>{let y=u.kinds.indexOf(m.kind);if(y<0)return;let c=(o[x].some(f=>Math.abs(hr(f-u.phi))<RS)?1e3:0)+o[x].length*10+y*4+t();c<p&&(p=c,h=x)}),h<0&&(h=Math.floor(t()*i.length)),u.k=h,o[h].push(u.phi)}for(let a of n){let u=i[a.k],h=a.d*Math.tan(a.e0);a.y0=h,a.h=a.d*Math.tan(a.e0+a.ah)-h,a.w=a.h*u.w/u.h,a.half=Math.atan2(a.w/2,a.d)}return n.sort((a,u)=>u.d-a.d)}function a1(i,e,t=5){let n=i.list,s=CS(n,t),r=s.length,o=new rn(1,1);o.translate(0,.5,0);let l=new Cn(new Float32Array(r*4),4),a=new Cn(new Float32Array(r*4),4),u=new Cn(new Float32Array(r),1);o.setAttribute("aRect",l),o.setAttribute("aInfo",a),o.setAttribute("aRim",u),s.forEach((b,M)=>{let T=n[b.k];l.setXYZW(M,T.u0,T.v0,T.u1-T.u0,T.v1-T.v0),a.setXYZW(M,0,T.lum[0],1/Math.max(.05,T.lum[1]-T.lum[0]),b.haze)});let h=new ut({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new _e},uShade:{value:oe.cShade},uRimCol:{value:oe.cRim},uHaze:{value:oe.horizon},uPaint:{value:1},uOpacity:{value:1},uRimLod:{value:i.tier==="hi"?3:2},...n1(e)},vertexShader:`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:jg+`
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
      }`}),p=new ns(o,h,r);p.frustumCulled=!1,p.renderOrder=-5;let m=new Qe,x=new vn,y=new k,S=new k,c=new k(0,1,0),f=new k,d=!0;function v(b,M){let T=s.filter(R=>R.role==="tower").sort((R,L)=>hr(R.phi-b)-hr(L.phi-b)),_=null,E=1e9;for(let R=0;R<T.length;R++){let L=T[R],D=T[(R+1)%T.length],O=M==="center"?L.phi:L.phi+hr(D.phi-L.phi)/2,H=Math.abs(hr(O-b));H<E&&(E=H,_=M==="center"?[L,L,O]:[L,D,O])}if(!_)return;let[w,A,C]=_,I=hr(b-C);for(let R of s)R.phi+=I;for(let R of new Set([w,A])){let L=Math.max(R.ah,31*fh),D=R.d*Math.tan(R.e0+L)-R.y0;R.w*=D/R.h,R.h=D,R.ah=L,R.half=Math.atan2(R.w/2,R.d)}}let g={mesh:p,count:r,opening:"flank",layout:s,update(b,M){let T=b.position,_=Math.atan2(oe.lightDir.x,oe.lightDir.z);b.getWorldDirection(f);let E=Math.atan2(f.x,f.z),w=Math.atan(Math.tan(b.fov*fh/2)*b.aspect);d&&v(E,g.opening);for(let C=0;C<r;C++){let I=s[C];I.phi+=M*1.2/I.d,y.set(T.x+Math.sin(I.phi)*I.d,T.y+I.y0,T.z+Math.cos(I.phi)*I.d),x.setFromAxisAngle(c,I.phi+Math.PI),S.set(I.w,I.h,1),m.compose(y,x,S),p.setMatrixAt(C,m);let R=hr(_-I.phi),L=R>0!==n[I.k].litLeft;L!==I.flip&&Math.abs(Math.sin(R))>.2&&(d||Math.abs(hr(I.phi-E))>w+I.half+.05)&&(I.flip=L),a.setX(C,I.flip?1:0);let D=Math.max(Math.cos(R),0);u.setX(C,.35+.9*D*D*D*(.4+oe.warm))}d=!1,p.instanceMatrix.needsUpdate=!0,a.needsUpdate=!0,u.needsUpdate=!0;let A=h.uniforms;{let C=Math.min(Math.max((oe.bright-.55)/.4,0),1);A.uPaint.value=C*C*(3-2*C)}A.uLit.value.copy(oe.cLit).multiplyScalar(1+.35*oe.bright),A.uOpacity.value=(1-oe.night*.35)*(1-oe.overcast*.55)*(1-.85*oe.rain)}};return g}async function l1(i,e=15e3){let t=Or+"band/";return zr((async()=>{let n=await fetch(t+"band2.json");if(!n.ok)throw new Error("band2.json "+n.status);let s=await n.json(),{tex:r,file:o}=await Y0(t,s,i),l={};for(let[a,u]of Object.entries(s.zones&&s.zones[o]||{}))u.v1>u.v0&&u.e1>u.e0&&(l[a]=new dt(u.v0,u.v1,Math.tan(u.e0*Math.PI/180),Math.tan(u.e1*Math.PI/180)));if(!Object.keys(l).length)throw new Error("no zones listed");return r.wrapS=Is,{tex:r,zones:l,period:s.period||120,tier:o}})(),e,"painted horizon unavailable, keeping the mountain rings:")}var wl=2500,PS=-8,Br=new k,ur=new _e,X0=new _e("#fff5dd").multiplyScalar(3.35),q0=new _e("#8fb1ec").multiplyScalar(1.35*2);function c1(i,e,t){let n=i.zones,s=Math.max(...Object.values(n).map(g=>g.w)),r=192,o=360/i.period,l=new Float32Array((r+1)*6),a=new Float32Array((r+1)*4),u=[],h=Math.tan(PS*Math.PI/180),p=s+.004;for(let g=0;g<=r;g++){let b=g/r*Math.PI*2,M=Math.sin(b)*wl,T=Math.cos(b)*wl;if(l.set([M,h*wl,T,M,p*wl,T],g*6),a.set([-(g/r)*o,h,-(g/r)*o,p],g*4),g<r){let _=g*2;u.push(_,_+2,_+1,_+1,_+2,_+3)}}let m=new mt;m.setAttribute("position",new Mt(l,3)),m.setAttribute("uv",new Mt(a,2)),m.setIndex(u);let x=Math.PI/180,y=(e.composer.readBuffer.samples||0)>0,S=new ut({fog:!1,side:bn,alphaToCoverage:y,defines:y?{A2C:1}:{},uniforms:{map:{value:i.tex},uRowA:{value:new dt},uRowB:{value:new dt},uMix:{value:0},uAlpha:{value:1},uRot:{value:0},uLightC:{value:new _e(1,1,1)},uPaint:{value:1},uFogC:{value:t},uHaze:{value:0},uHz:{value:Math.tan(.8*x)},uGnd:{value:new k(2.8,.0014,700)},uSpan:{value:new Le(h,p)},...n1(e)},vertexShader:`
      uniform vec2 uSpan; varying vec2 vUv;
      void main(){
        float y = uv.y > 0.0 ? uSpan.y : uSpan.x; vUv = vec2(uv.x, y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, y * ${wl.toFixed(1)}, position.z, 1.0);
      }`,fragmentShader:jg+`
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
      }`}),c=new ct(m,S);c.frustumCulled=!1,c.renderOrder=999;let f=S.uniforms,d=new k,v=!0;return{mesh:c,zones:n,hero:.125,update(g,b,M=2.8,T=.0014,_=700){let E=n[b.a],w=n[b.b],A=b.t,C=0;if(E&&w?(f.uRowA.value.copy(E),f.uRowB.value.copy(w),f.uMix.value=E===w?0:A,C=1):(E||w)&&(f.uRowA.value.copy(E||w),f.uMix.value=0,C=E?1-A:A),f.uAlpha.value=C,c.visible=C>.002,!c.visible)return 0;c.position.copy(g.position),f.uGnd.value.set(M,T,_),f.uSpan.value.set(Math.max(h,-Math.tan(Math.atan(M/140)+.3*x)),Math.max(E?E.w:0,w?w.w:0)+.003),v&&(g.getWorldDirection(d),f.uRot.value=this.hero+Math.atan2(d.x,d.z)/(Math.PI*2)*o,v=!1),ur.copy(oe.sunCol).multiplyScalar(oe.sunI),Br.set(ur.r,ur.g,ur.b),ur.copy(oe.hemiSky).multiplyScalar(oe.hemiI*2),Br.x+=ur.r,Br.y+=ur.g,Br.z+=ur.b;let I=Math.min(Math.max((oe.bright-.55)/.4,0),1),R=I*I*(3-2*I);f.uLightC.value.setRGB(Br.x/(X0.r+q0.r),Br.y/(X0.g+q0.g),Br.z/(X0.b+q0.b)),f.uPaint.value=R;let L=Math.max(4*f.uMix.value*(1-f.uMix.value),Math.min(1,2*(1-C))),D=y?0:.45*L*L*L;return f.uHaze.value=1-(1-(1-(1-.12*oe.warm-.25*oe.night)*(1-.55*oe.overcast)*(1-.6*oe.rain))*(1-R))*(1-D),C}}}async function IS(i){let e=new Uint8Array(i),t=new DataView(i),n=[137,80,78,71,13,10,26,10];if(e.length<33||n.some((m,x)=>e[x]!==m))throw new Error("not a PNG");let s=8,r=0,o=0,l=[];for(;s+12<=e.length;){let m=t.getUint32(s),x=String.fromCharCode(e[s+4],e[s+5],e[s+6],e[s+7]);if(s+12+m>e.length)throw new Error("PNG truncated");if(x==="IHDR"){if(r=t.getUint32(s+8),o=t.getUint32(s+12),e[s+16]!==8||e[s+17]!==6||e[s+20]!==0)throw new Error("PNG is not 8-bit RGBA")}else if(x==="IDAT")l.push(e.subarray(s+8,s+8+m));else if(x==="IEND")break;s+=12+m}if(!r||!o||!l.length)throw new Error("PNG has no image");let a=new Uint8Array(await new Response(new Blob(l).stream().pipeThrough(new DecompressionStream("deflate"))).arrayBuffer()),u=r*4,h=new Uint8Array(u*o),p=new Uint8Array(u);if(a.length<(u+1)*o)throw new Error("PNG data short");for(let m=0;m<o;m++){let x=a[m*(u+1)],y=m*(u+1)+1,S=(o-1-m)*u,c=m?h.subarray(S+u,S+2*u):p,f=h.subarray(S,S+u),d=a.subarray(y,y+u);if(x===0)f.set(d);else if(x===1){for(let v=0;v<4;v++)f[v]=d[v];for(let v=4;v<u;v++)f[v]=d[v]+f[v-4]}else if(x===2)for(let v=0;v<u;v++)f[v]=d[v]+c[v];else if(x===3){for(let v=0;v<4;v++)f[v]=d[v]+(c[v]>>1);for(let v=4;v<u;v++)f[v]=d[v]+(f[v-4]+c[v]>>1)}else if(x===4){for(let v=0;v<4;v++)f[v]=d[v]+c[v];for(let v=4;v<u;v++){let g=f[v-4],b=c[v],M=c[v-4],T=Math.abs(b-M),_=Math.abs(g-M),E=Math.abs(g+b-M-M);f[v]=d[v]+(T<=_&&T<=E?g:_<=E?b:M)}}else throw new Error("PNG filter "+x)}return{w:r,h:o,data:h}}function LS(i,e,t,n,s,r=.5){let o=[{data:t,width:i,height:e}],l=Math.floor(r*255)+1,a=new Uint32Array(256),u=[],h=(y,S,c,f,d,v)=>{a.fill(0);for(let g=0;g<v;g++){let b=((f+g)*S+c)*4+3;for(let M=0;M<d;M++)a[y[b+M*4]]++}};for(let y=0;y<s;y++)for(let S=0;S<n;S++){let c=i/n,f=e/s;h(t,i,S*c,y*f,c,f);let d=0;for(let v=l;v<256;v++)d+=a[v];u.push(d/(c*f))}let p=i,m=e,x=t;for(;p>1&&m>1;){let y=p>>1,S=m>>1,c=new Uint8Array(y*S*4),f=p*4;for(let g=0;g<S;g++){let b=g*2*f,M=g*y*4;for(let T=0;T<y;T++,b+=8)for(let _=0;_<4;_++,M++)c[M]=x[b+_]+x[b+_+4]+x[b+_+f]+x[b+_+f+4]+2>>2}let d=y/n,v=S/s;if(d>=2&&v>=2&&d===Math.floor(d)&&v===Math.floor(v))for(let g=0;g<s;g++)for(let b=0;b<n;b++){h(c,y,b*d,g*v,d,v);let M=Math.round(u[g*n+b]*d*v),T=255,_=a[255];for(;T>1&&_<M;)_+=a[--T];let E=M>0?Math.min(6,Math.max(.5,l/T)):1;if(E!==1)for(let w=0;w<v;w++){let A=((g*v+w)*y+b*d)*4+3;for(let C=0;C<d;C++)c[A+C*4]=Math.min(255,Math.round(c[A+C*4]*E))}}o.push({data:c,width:y,height:S}),x=c,p=y,m=S}return o}async function u1(i,e=15e3){let t=Or+"trees/";return zr((async()=>{if(typeof DecompressionStream>"u")throw new Error("no DecompressionStream");let n=await fetch(t+"crowns.json");if(!n.ok)throw new Error("crowns.json "+n.status);let s=await n.json(),r=s.files[i]?i:"hi",o=await fetch(t+s.files[r]);if(!o.ok)throw new Error(s.files[r]+" "+o.status);let l=await o.arrayBuffer();if(s.bytes&&s.bytes[r]&&l.byteLength!==s.bytes[r])throw new Error(s.files[r]+" is "+l.byteLength+" bytes, not "+s.bytes[r]);let a=await IS(l),u=s.cols,h=s.rows;if(!(u>0&&h>0)||a.w%u||a.h%h)throw new Error("bad atlas layout");let p=(s.cells||[]).filter(y=>y.col<u&&y.row<h).map(y=>{let S=.5/a.w,c=.5/a.h;return{kind:y.kind,u0:y.col/u+S,u1:(y.col+1)/u-S,v0:1-(y.row+1)/h+c,v1:1-y.row/h-c}});if(!p.some(y=>y.kind==="leaf"))throw new Error("no leaf clusters listed");let m=LS(a.w,a.h,a.data,u,h,.5),x=new ts(a.data,a.w,a.h,Jn);return x.mipmaps=m,x.generateMipmaps=!1,x.minFilter=Pn,x.magFilter=Ot,x.colorSpace=ri,x.needsUpdate=!0,{tex:x,cells:p,tier:r}})(),e,"painted tree crowns unavailable, keeping the card crowns:")}var Al={T:6.5,LAM:11,LZ:42},Z0=`
float shorePhase(float s, float d){ return uTime * ${(1/Al.T).toFixed(7)} + d * ${(1/Al.LAM).toFixed(7)} - s * ${(1/Al.LZ).toFixed(7)}; }`,DS=`
vec4 vnoise4(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0); }`,Rl={uNoiseTex:ke.uNoiseTex,uTime:{value:0},uCam:{value:new k},uSunDir:{value:oe.lightDir},uSunCol:{value:oe.sunCol},uHorizon:{value:oe.horizon},uZenith:{value:oe.zenith},uFog:{value:oe.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0},uPaint:{value:0},uPTrough:{value:new _e},uPMid:{value:new _e},uPFace:{value:new _e},uPFar:{value:new _e},uPHz:{value:new _e},uFoamLit:{value:new _e(1,1,1)},uFoamShade:{value:new _e(.5,.6,.8)}},NS={trough:[0,98,182],mid:[10,132,218],face:[42,158,236],far:[66,170,246],hz:[118,188,243],foam:[246,251,254],foamShade:[160,205,240]},f1=`
uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright, uPaint; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog;
uniform vec3 uPTrough, uPMid, uPFace, uPFar, uPHz, uFoamLit, uFoamShade;
${Ci}
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
}`;function d1(){let i=new ut({fog:!1,uniforms:Rl,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${f1}
      varying vec3 vW;
      void main(){ gl_FragColor = vec4(mix(uFog, seaColour(vW), uVis), 1.0); }`}),e=new ct(new rn(14e3,14e3),i);e.rotation.x=-Math.PI/2,e.position.y=os,e.renderOrder=998,e.frustumCulled=!1;let t=Rl;return{mesh:e,update(n,s,r,o=1,l=null){e.position.x=n.x,e.position.z=n.z,t.uTime.value=s,t.uCam.value.copy(n),t.uNight.value=oe.night,t.uBright.value=oe.bright,t.uFogD.value=r,t.uVis.value=o,t.uSpecK.value=1-oe.overcast*.85;let a=Math.min(Math.max((oe.bright-.55)/.4,0),1),u=l?a*a*(3-2*a):0;t.uPaint.value=u;let h=1+.25*oe.bright,p=1/(Math.PI*h),m=oe.sunCol,x=oe.hemiSky,y=oe.sunI*.8,S=oe.hemiI;if(t.uFoamLit.value.setRGB((m.r*y+x.r*S)*p,(m.g*y+x.g*S)*p,(m.b*y+x.b*S)*p),t.uFoamShade.value.setRGB(x.r*S*.9*p,x.g*S*.9*p,x.b*S*.9*p),u>0){let c=NS;kr(l,c.trough,t.uPTrough.value),kr(l,c.mid,t.uPMid.value),kr(l,c.face,t.uPFace.value),kr(l,c.far,t.uPFar.value),kr(l,c.hz,t.uPHz.value),t.uFoamLit.value.lerp(kr(l,c.foam,h1),u),t.uFoamShade.value.lerp(kr(l,c.foamShade,h1),u)}}}}var h1=new _e,kr=(i,e,t)=>Qg(i,e[0],e[1],e[2],t);function p1(i=!1){return new ut({fog:!1,defines:i?{SHORE_LITE:""}:{},uniforms:Rl,vertexShader:"attribute vec2 su; attribute vec2 hf; varying vec2 vSU; varying vec2 vHF; varying vec3 vW; void main(){ vSU = su; vHF = hf; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${f1}${DS}${Z0}
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
      }`})}function m1(){return new ut({fog:!1,uniforms:{uNoiseTex:ke.uNoiseTex,uTime:{value:0},uSunDir:{value:oe.lightDir},uSunCol:{value:oe.sunCol},uHorizon:{value:oe.horizon},uZenith:{value:oe.zenith},uFog:{value:oe.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${Ci}
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
      }`})}var dh={n:8};function g1(){return new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:Rl,vertexShader:`
      uniform float uTime, uVis; attribute vec4 aB; attribute vec3 aC;
      varying vec2 vUv; varying vec3 vK;
      ${Z0}
      float h11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
      void main(){
        float seed = aB.w, s = aC.z;
        float ph = shorePhase(s, aB.z) - 0.02 - 0.08 * fract(seed * 7.13);        // each puff a moment after the wave arrives
        float wave = floor(ph), str = h11(wave * 7.37 + floor(s / 12.0) * 1.13);   // how hard this wave hits here
        float age = fract(ph) * ${Al.T.toFixed(2)}, dur = 1.15 + 1.1 * str, k = age / dur;
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
      ${Ci}
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
      }`})}function v1(i){let e=i.length/8;if(!e)return null;let t=new Float32Array(e*12),n=new Float32Array(e*16),s=new Float32Array(e*12),r=new Uint16Array(e*6),o=[-1,1,1,-1],l=[-1,-1,1,1],a=1/0,u=1/0,h=1/0,p=-1/0,m=-1/0,x=-1/0;for(let S=0;S<e;S++){let c=S*8;for(let f=0;f<4;f++){let d=S*4+f;t[d*3]=i[c],t[d*3+1]=i[c+1],t[d*3+2]=i[c+2],n[d*4]=i[c+3],n[d*4+1]=i[c+4],n[d*4+2]=i[c+5],n[d*4+3]=i[c+6],s[d*3]=o[f],s[d*3+1]=l[f],s[d*3+2]=i[c+7]}r.set([S*4,S*4+1,S*4+2,S*4,S*4+2,S*4+3],S*6),a=Math.min(a,i[c]),u=Math.min(u,i[c+1]),h=Math.min(h,i[c+2]),p=Math.max(p,i[c]),m=Math.max(m,i[c+1]),x=Math.max(x,i[c+2])}let y=new mt;return y.setAttribute("position",new Mt(t,3)),y.setAttribute("aB",new Mt(n,4)),y.setAttribute("aC",new Mt(s,3)),y.setIndex(new Mt(r,1)),y.boundingBox=new pi(new k(a-6,u-1,h-6),new k(p+6,m+6,x+6)),y.boundingSphere=y.boundingBox.getBoundingSphere(new mi),y}var Vt=60,K0=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],x1=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],y1=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Os=32,$0=[-.2,2.2,5.5,10,17,27,38],Cl=[.025,.026,.032],_1=[.05,.05,.065],b1=new Qe,Ms=(i,e)=>(i%e+e)%e,zs=(i,e)=>{let t=rr(i);return!!t&&Math.abs(i-t.s)<e},ph=i=>Ms(i,4)===0,US=i=>Ms(i,2)===0,ed=1.4,M1=i=>ph(i)?4.4:ed+.9,J0=i=>ph(i)?3.4:ed-.1,j0=(i,e)=>Math.abs(i-Math.round(i/300)*300)<e,Pi=(i,e)=>{let t=zi(i);return!!t&&Math.abs(i-t.s)<e},ai=(i,e)=>{let t=Oi(i);return!!t&&Math.abs(i-t.s)<e},Q0=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let l=n(r,o);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let l=s+r*t+o,a=l+1,u=l+t,h=u+1;this.I.push(l,a,u,a,h,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,l=new Array(e*o);for(let u=0;u<e;u++)for(let h=0;h<o;h++)l[u*o+h]=n(u,h-s);let a=(u,h)=>l[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,h))];for(let u=0;u<e;u++)for(let h=s;h<s+t;h++){let p=a(u,h-1),m=a(u,h+1),x=a(u-1,h),y=a(u+1,h),S=l[u*o+h],c=m[0]-p[0],f=m[1]-p[1],d=m[2]-p[2],v=y[0]-x[0],g=y[1]-x[1],b=y[2]-x[2],M=f*b-d*g,T=d*v-c*b,_=c*g-f*v;T<0&&(M=-M,T=-T,_=-_);let E=Math.hypot(M,T,_)||1;S[3]=M/E,S[4]=T/E,S[5]=_/E}this.grid(e,t,(u,h)=>l[u*o+h+s])}build(){let e=new mt;return e.setAttribute("position",new Je(this.P,3)),e.setAttribute("normal",new Je(this.N,3)),e.setAttribute("su",new Je(this.SU,2)),e.setAttribute("zw",new Je(this.ZW,4)),e.setAttribute("rk",new Je(this.RK,2)),e.setAttribute("rv",new Je(this.RV,1)),e.setAttribute("zs",new Je(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},mh=class{constructor(e,t,n,s){this.path=t,this.M=n,this.riverMat=s,this.heapCache=new Map,this.group=new hn,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Vt),s=Math.floor((e+this.ahead)/Vt);for(let[o,l]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(l),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let l=o.pending.shift();l&&o.group.add(l),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let a=Math.max(0,n);a<=s;a++)if(!this.chunks.has(a)){l=a;break}if(l<0)return 0;l*Vt-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let o=this.job.it.next();if(o.done){let l=o.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let l=o*Vt-e,a=r.group.children;for(let u=0;u<a.length;u++){let h=a[u],p=h.userData.detail;p&&(h.visible=p==="leaf"?l<s:l<t||n&&p==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Vt,s=n+Vt,r=t.at(n),o=r.x,l=r.z,a=At(Math.floor(yn(e,777)*4294967295)),u={atlas:new dn({uv:!0,ao:!0,lit:!0}),color:new dn({ao:!0}),foliage:new dn,leaf:new dn({uv:!0}),lamp:new dn({color:!1}),sig:new dn({color:!1}),sodium:new dn({color:!1}),decal:new dn({uv:!0}),pool:new dn({uv:!0,color:!1}),gleaf:new dn({uv:!0,off:!0}),gblossom:new dn({uv:!0,off:!0})},h=new Q0,p={rows:[],puffs:[]},m=[];u.lamps=[];let x={},y={},S=(w,A)=>{t.at(w,y);let C=On(w,"rw");return y.y+_s(w,A,y.y,C)},c=w=>{let A=Dt(w);return[A.city,A.sakura,A.coast,A.country,A.snow]},f=(w,A,C)=>(t.at(w,x),[x.x+x.rx*A-o,C,x.z+x.rz*A-l]),d=(w,A,C,I=0,R=!0)=>{t.at(w,x);let L=x.h-Math.PI/2+(R&&A<0?Math.PI:0)+I,D=new Qe().makeRotationY(L);return D.setPosition(x.x+x.rx*A-o,C,x.z+x.rz*A-l),D.groundY=C,D},v=(w,A,C=0,I=0,R=!0)=>{let L=S(w,A),D=d(w,A,L+C,I,R);return D.groundY=L,D},g=w=>t.at(w,y).y,b=w=>On(w,"rw"),M=w=>{let A=Dt(w);return A.city+A.sakura>.5?A.city>=A.sakura?3:2.6:0};{let w=Oi(n+Vt/2),A=!!w&&w.s>n-40&&w.s<s+40,C=A?61:21,I=b(n+Vt/2),R=(()=>{let q=[0,...x1].map(ee=>ee);return y1.forEach(ee=>q.push(ee-I)),q})(),L=[...R.slice().reverse().map(z=>-z),...R],D=L.length,O=Array.from({length:C},(z,q)=>n+q/(C-1)*Vt);{let z=zi(n+Vt/2);if(z)for(let q of[z.s-_n,z.s+_n])q>n+.1&&q<s-.1&&O.push(q-.03,q+.03)}O.sort((z,q)=>z-q);let H=D/2,B=O.map(z=>(t.at(z,x),{s:z,f:{...x},rw:b(z),w:c(z),rb:A?Tm(z):0})),V=Math.round(H/2);for(let[z,q,ee,Ee]of[[0,V,0,1],[V-1,H,1,0],[H,H+V+1,0,1],[H+V,D,1,0]])h.gridN(B.length,q-z,(we,Me)=>{let W=B[we],J=W.f,ve=z+Me,Pe=L[ve],ie=Pe===0&&W.w[2]>0?.15:0,xe=Pe<0||Pe===0&&ve<H?Pe-W.rw+ie:Pe+W.rw-ie,Be=J.y+_s(W.s,xe,J.y,W.rw),ze=Math.abs(xe)>W.rw+.98?Math.min(1,$u/.5):0;return[J.x+J.rx*xe-o,Be,J.z+J.rz*xe-l,0,1,0,Ms(W.s,Ri),xe,W.w[0],W.w[1],W.w[2],W.w[3],W.rw,0,W.rb>0?W.rb:-ze,W.w[4]]},ee,Ee),yield}yield,h.grid(31,2,(A,C)=>{let I=n+A/30*Vt,R=b(I),L=C?R:-R;t.at(I,x);let D=x.y,O=(g(I+1)-g(I-1))/2,H=-O*x.fx,B=1,V=-O*x.fz,z=Math.hypot(H,B,V),q=c(I);return[x.x+x.rx*L-o,D,x.z+x.rz*L-l,H/z,B/z,V/z,Ms(I,Ri),L,q[0],q[1],q[2],q[3],R,1,0,q[4]]});{let w=[];for(let I=0;I<=30;I++){let R=n+I/30*Vt;w.push({s:R,sw:M(R)})}let A=[],C=null;for(let I of w)I.sw>0?(C||(C=[],A.push(C)),C.push(I)):C=null;for(let I of A)if(!(I.length<2))for(let R of[-1,1])h.grid(I.length,2,(L,D)=>{let{s:O,sw:H}=I[L],B=b(O),V=R*(D===(R>0?0:1)?B:B+H);t.at(O,x);let z=c(O);return[x.x+x.rx*V-o,x.y+.15,x.z+x.rz*V-l,0,1,0,Ms(O,Ri),V,z[0],z[1],z[2],z[3],B,2,0,z[4]]}),h.grid(I.length,2,(L,D)=>{let{s:O}=I[L],H=b(O),B=R*H,V=R>0?D:1-D;t.at(O,x);let z=c(O);return[x.x+x.rx*B-o,x.y+(V?.15:0),x.z+x.rz*B-l,-R*x.rx,0,-R*x.rz,Ms(O,Ri),B,z[0],z[1],z[2],z[3],H,3,0,z[4]]})}yield,yield*this.placePoles(e,n,s,a,u,d,S,f,g,b);{let w=Math.ceil((n-Dr)/Lr),A=Bo(w);A<s&&pl(A)&&(yield*this.placeCrossing(u,h,A,d,g,b,S,M,o,l));let C=Math.ceil((n-Oo)/Nr),I=m0(C);I<s&&g0(I)&&(yield*this.placeRiver(u,h,I,d,g,b,S,M,o,l,a,m));let R=zi(n+Vt/2);R&&R.s+on>n&&R.s-on<s&&(yield*this.placeTunnel(u,h,R,n,s,d,v,S,b,o,l,a))}yield;for(let w=n;w<s;w+=4){let A=fn(w);(A==="coast"&&Dt(w).coast>.45||A==="mountain"&&Dt(w).mountain>.45)&&!Pi(w+2,on+4)&&this.guardrail(u,w,Math.min(w+4,s),f,g,b)}yield*this.placeCity(u,a,n,s,d,v,g,b,M,S,h,o,l),yield*this.placeSakura(u,a,n,s,d,v,g,b,S),yield*this.placeCoast(u,a,e,n,s,d,v,b,p,f),yield,yield*this.placeCountry(u,a,n,s,d,v,g,b,S),yield*this.placeMountain(u,a,n,s,d,v,g,b,S),yield*this.placeSnow(u,a,n,s,d,v,g,b,S),yield*this.placeVerge(u,a,n,s,d,S,b,e,o,l),yield;let T=new hn,_=(w,A,C,I,R=0,L)=>{if(!w)return null;let D=new ct(w,A);return D.castShadow=C,D.receiveShadow=I,D.renderOrder=R,L&&(D.userData.detail=L),T.add(D),D},E=new Set;for(let w of[n,n+20,n+40,s]){let A=sr(w);E.add(A.a),A.t>0&&E.add(A.b)}_(h.build(),xl([...E]),!1,!0),yield;{let w=_(u.atlas.build(),this.M.atlas,!0,!0);w&&(w.customDepthMaterial=this.M.atlasDepth)}yield;{let w=_(u.color.build(),this.M.color,!0,!0);w&&(w.customDepthMaterial=th)}if(yield,_(u.foliage.build(),this.M.foliage,!0,!0),_(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),this.M.gleaf){let w=_(u.gleaf.build(),this.M.gleaf,!0,!0,0,"leaf");w&&(w.customDepthMaterial=this.M.gleafDepth)}if(this.M.gblossom){let w=_(u.gblossom.build(),this.M.gblossom,!0,!1,0,"leaf");w&&(w.customDepthMaterial=this.M.gleafDepth)}if(yield,_(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),_(u.sig.build(),this.M.sig,!1,!1,0,"small"),_(u.sodium.build(),this.M.sodium,!1,!1),_(u.decal.build(),this.M.decal,!1,!0,1,"small"),_(u.pool.build(),this.M.pool,!1,!1,2,"light"),p.rows.length>1){let w=p.rows,A=$0.length,C=w.length*A,I=new Float32Array(C*3),R=new Float32Array(C*2),L=new Float32Array(C*2),D=[];w.forEach((H,B)=>{for(let V=0;V<A;V++){let z=B*A+V,q=V*7;I.set(H.subarray(q,q+3),z*3),R[z*2]=H[q+3],R[z*2+1]=H[q+4],L[z*2]=H[q+5],L[z*2+1]=H[q+6]}if(B>0)for(let V=0;V<A-1;V++){let z=(B-1)*A+V,q=z+A;D.push(z,q,z+1,z+1,q,q+1)}});let O=new mt;O.setAttribute("position",new Mt(I,3)),O.setAttribute("su",new Mt(R,2)),O.setAttribute("hf",new Mt(L,2)),O.setIndex(D),O.computeBoundingSphere(),_(O,this.M.shore,!1,!1,997)}p.puffs.length&&_(v1(p.puffs),this.M.surf,!1,!1,2,"small");for(let w of m)_(w,this.riverMat,!1,!0);return T.position.set(o-this.origin.x,0,l-this.origin.z),{group:T,ox:o,oz:l,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*Os+6,n=fn(t);if(n==="sakura"||zs(t,6)||ai(t,34)||Pi(t,on+12))return null;let s=On(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,l,a,u,h){let p=Math.ceil((t-6)/Os),m=Math.floor((n-6-.001)/Os);for(let x=p;x<=m;x++){let y=this.poleSpec(x);if(!y)continue;let S=y.z==="city"?u(y.s)+.15:l(y.s,y.u),c=o(y.s,y.u,S),f=At(Math.floor(yn(x,31)*4294967295)),d=P0(r,c,f,{trans:f()<.45});y.z==="city"&&x%2===0&&gg(r,c,-.11),x%2&&(yield);let v=this.poleSpec(x+1);if(v){let g=v.z==="city"?u(v.s)+.15:l(v.s,v.u),b=mg(o(v.s,v.u,g));r.color.setM(new Qe);let M=[];for(let T=0;T<d.length;T++){let _=d[T],E=b[T],w=.35+f()*.4+(T>=7?.3:0);M.push(w),r.color.wire([_.x,_.y,_.z],[E.x,E.y,E.z],w,T>=7?.022:.015,Cl,10)}if(y.z!=="coast"&&f()<.38){let T=Math.floor(f()*4),_=d[T],E=b[T],w=1+Math.floor(f()*4),A=.18+f()*.5;for(let C=0;C<w;C++){let I=Math.min(.92,A+C*(.018+f()*.025)),R=_.x+(E.x-_.x)*I,L=_.z+(E.z-_.z)*I,D=_.y+(E.y-_.y)*I-M[T]*4*I*(1-I);r.color.box(R-.07,D+.015,L-.07,R+.07,D+.19,L+.07,_1),r.color.box(R-.045,D+.19,L-.045,R+.045,D+.27,L+.045,_1)}}}if(y.z==="city"){r.color.setM(new Qe);let g=1+Math.floor(f()*3);for(let b=0;b<g;b++){let M=d[7+b%2],T=(f()-.5)*14,_=h(y.s+T),E=f()<.55,w=E?-(_+3.15):_+3.15,A=a(y.s+T,w,u(y.s+T)+5.2+f()*2.5);r.color.wire([M.x,M.y,M.z],A,.25+f()*.4,.012,Cl,8)}}}}*intersection(e,t,n,s,r,o,l,a,u,h,p){let m=this.path.at(n,{}),x=o(n),y=l(n),S=a(n)||3,c=n-.5,f=Dt(n),d=[f.city,f.sakura,f.coast,f.country],v=(T,_,E)=>[m.x+m.fx*(T-.5)+m.rx*_-h,E,m.z+m.fz*(T-.5)+m.rz*_-p],g=y+S+.15,b=ph(s),M=b?3:ed;for(let T of[-1,1]){let _=T*(y+S),E=T*80;if(u.grid(21,2,(I,R)=>{let L=_+(E-_)*I/20,D=(R?-M:M)*T,O=v(D,L,x+.165);return[O[0],O[1],O[2],0,1,0,D*T,L,d[0],d[1],d[2],d[3],y,10]}),b){let I=T*(y+S+3.2),R=-T*1.35,L=1.15,D=.42,O=(H,B)=>v(R+T*H,I-T*B,x+.18);e.decal.setM(new Qe),e.decal.quad(O(-L,-D),O(L,-D),O(L,D),O(-L,D),[1,1,1],Go("tomare"))}for(let I of[-1,1]){let R=g+15+t()*3;for(;R<52;){let L=t.range(5.5,8.5),D=T*(R+L/2),O=t(),H=r(c+I*(M+.3),D,x+.14,I>0?Math.PI/2:-Math.PI/2,!1);Wi(e,H,t,{type:O<.5?"house":"shop",w:L,d:t.range(7,10),floors:O<.5?2:t.int(2,3),tint:t.pick(Fs),litP:.45,fence:0}),R+=L+t.range(.2,1.2),yield}yield}let w=[30,54].map(I=>r(c+M-.2,T*I,x+.15,-Math.PI/2,!1)),A=At(Math.floor(yn(s,T>0?71:73)*4294967295)),C=w.map(I=>P0(e,I,A,{trans:A()<.4}));e.color.setM(new Qe);for(let I=0;I<7;I++){let R=C[0][I],L=C[1][I];e.color.wire([R.x,R.y,R.z],[L.x,L.y,L.z],.3+A()*.4,.014,Cl,10)}}b&&(z0(e,r(n-9,-(y+.55),x+.15,0,!0),1,y+.55-1.6),z0(e,r(n+8,y+.55,x+.15,0,!0),1,y+.55-1.6),s%8===0&&Lg(e,r(n+15,0,x,0,!1),y+S+.1,"hodokyo"+Math.abs(s/8)%3))}*placeCrossing(e,t,n,s,r,o,l,a,u,h){let p=this.path.at(n,{}),m=p.y,x=o(n),y=a(n),S=x+y+.2,c=150,f=m+.18,d=Dt(n),v=[d.city,d.sakura,d.coast,d.country],g=(L,D,O)=>[p.x+p.fx*L+p.rx*D-u,O,p.z+p.fz*L+p.rz*D-h],b=[7.6,4.7,-4.7,-7.6];for(let[L,D]of[[-c,-S],[S,c]])t.grid(25,b.length,(H,B)=>{let V=L+(D-L)*H/24,z=b[B],ee=Math.abs(z)<5?f:Math.min(f-.05,l(n+z,V)-.03),Ee=g(z,V,ee);return[Ee[0],Ee[1],Ee[2],0,1,0,z,V,v[0],v[1],v[2],v[3],x,5]});let M=(L,D,O)=>t.grid(2,2,(H,B)=>{let V=H?D:L,z=B?-3.3:3.3,q=g(z,V,O);return[q[0],q[1],q[2],0,1,0,z,V,v[0],v[1],v[2],v[3],x,6]});M(-x,x,m+.03),y>0&&(M(-S,-x,m+.165),M(x,S,m+.165));let T=(L,D,O,H)=>t.grid(2,2,(B,V)=>{let z=B?H:O,q=V?D:L,ee=g(q,z,m+.025);return[ee[0],ee[1],ee[2],0,1,0,q,z,v[0],v[1],v[2],v[3],x,7]});T(-7.15,-7.6,-x+.3,-.12),T(7.6,7.15,.12,x-.3),yield;let _=s(n,0,m,-Math.PI/2,!1),E=e.color;E.setM(_);let w=[.42,.4,.38],A=[.3,.29,.28],C=[.55,.57,.6];for(let L of[-2,2])for(let D of[-.5335,.5335]){let O=-(L+D);for(let[H,B]of[[-c,-S],[S,c]])E.box(H,.26,O-.035,B,.34,O+.035,w);E.box(-S,0,O-.035,S,.04,O+.035,A)}let I=[-146,-104,-64,-26,26,64,104,146];for(let L of I){for(let D of[-4.95,4.95])E.box(L-.12,.18,D-.12,L+.12,7.4,D+.12,C);E.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,C);for(let D of[-2,2])E.box(L-.04,6.3,-D-.04,L+.04,6.95,-D+.04,C)}for(let L of[-2,2])for(let D=0;D<I.length-1;D++)E.wire([I[D],5.35,-L],[I[D+1],5.35,-L],.05,.011,Cl,6),E.wire([I[D],6.4,-L],[I[D+1],6.4,-L],.45,.011,Cl,8);yield;let R=Math.round((n-Dr)/Lr);if(d.country>.9&&yn(R,17)<.7){let L=yn(R,19)<.5?-1:1,D=L>0?x+9:-(x+9+46),O=L>0?x+9+46:-(x+9);Dg(e,_,D,O,L*(x+9),Math.abs(R)%4,At(Math.floor(yn(R,23)*4294967295))),E.setM(_)}yield;for(let L of nh(this.path,n)){let D=new Qe().makeRotationY(L.yaw);D.setPosition(L.x-u,L.y,L.z-h),Fg(e,D)}cr(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(y>0?1:0)),"sign_xing",1,2.2,.85),cr(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(y>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,l,a,u,h,p,m){let x=this.path.at(n,{}),y=x.y,S=o(n),c=a(n),f=Dt(n),d=[f.city,f.sakura,f.coast,f.country],v=f.sakura>.5,g=222,b=S+c+.5,M=y-ml,T=(R,L,D)=>[x.x+x.fx*R+x.rx*L-u,D,x.z+x.fz*R+x.rz*L-h];{let R=[],L=[],D=[];for(let B=0;B<=74;B++){let V=-g+2*g*B/74;for(let z of[14.3,-14.3]){let q=T(z,V,M);R.push(q[0],q[1],q[2]),L.push(z,V)}if(B>0){let z=(B-1)*2;D.push(z,z+1,z+2,z+1,z+3,z+2)}}let H=new mt;H.setAttribute("position",new Je(R,3)),H.setAttribute("su",new Je(L,2)),H.setIndex(D),H.computeBoundingSphere(),m.push(H)}for(let[R,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[D,O]of[[-g,-(S+3.4)],[S+3.4,g]])t.grid(41,2,(H,B)=>{let V=D+(O-D)*H/40,z=B?L:R,q=T(z,V,y+.38);return[q[0],q[1],q[2],0,1,0,z,V,d[0],d[1],d[2],d[3],S,9,1]});yield;let _=s(n,0,y,0,!1),E=e.color,w=[.74,.73,.7],A=v?[.78,.2,.15]:[.55,.72,.64];E.setM(_),E.box(-24.5,-1,-b,24.5,-.03,b,w,null,{noBottom:!1});for(let R of[-1,1])E.box(-24.5,-1.3,R>0?b-.35:-b,24.5,-.95,R>0?b:-b+.35,[.62,.61,.58]);for(let R of[-8,8])E.box(R-.7,-ml-1.4,-b+.6,R+.7,-1,b-.6,w);for(let R of[-25.7,25.7])E.box(R-1.2,-ml+.4,-b-.4,R+1.2,-.05,b+.4,w);for(let R of[-24.5,24.5])E.box(R-.16,.004,-S,R+.16,.016,S,[.33,.32,.31]),E.box(R-.02,.016,-S,R+.02,.02,S,[.2,.19,.19]);let C=c>0?.15:0;for(let R of[-1,1]){let L=R*(b-.14);for(let D=-24;D<=24.01;D+=2)E.box(D-.06,C,L-.06,D+.06,C+1,L+.06,A);E.box(-24,C+.95,L-.08,24,C+1.08,L+.08,A),E.box(-24,C+.48,L-.03,24,C+.54,L+.03,A),E.box(-24,C+.06,L-.03,24,C+.12,L+.03,A)}let I="bridge"+Math.abs(Math.round(n/Nr))%4;for(let R of[-25,25])for(let L of[-1,1]){let D=L*(b-.1),O=[.7,.69,.65];E.box(R-.32,C,D-.32,R+.32,C+1.45,D+.32,O),E.box(R-.38,C+1.45,D-.38,R+.38,C+1.58,D+.38,[.62,.61,.57]),e.atlas.setM(_);let H=(R<0?-1:1)*.325,B=I;R<0?e.atlas.quad([R-.325,C+.3,D-.22],[R-.325,C+.3,D+.22],[R-.325,C+1.3,D+.22],[R-.325,C+1.3,D-.22],[1,1,1],Go(B)):e.atlas.quad([R+.325,C+.3,D+.22],[R+.325,C+.3,D-.22],[R+.325,C+1.3,D-.22],[R+.325,C+1.3,D+.22],[1,1,1],Go(B)),E.setM(_)}Ml(e,s(n-14,-(b-.45),y+C,0,!0)),Ml(e,s(n+14,b-.45,y+C,0,!0)),yield;{e.atlas.setM(new Qe);let R=Go("gogan"),L=2.4,D=150;for(let O of[-1,1])for(let H=-D;H<D-.01;H+=L){let B=H+L,V=T(O*13.9,H,M-.12),z=T(O*13.9,B,M-.12),q=T(O*16.05,B,M+.72),ee=T(O*16.05,H,M+.72),Ee=(z[1]-V[1])*(ee[2]-V[2])-(z[2]-V[2])*(ee[1]-V[1]),we=(z[0]-V[0])*(ee[1]-V[1])-(z[1]-V[1])*(ee[0]-V[0]),Me=T(0,(H+B)/2,M),W=Ee*(Me[0]-V[0])+we*(Me[2]-V[2])>0,J={u0:R.u0,u1:R.u1,v0:R.v0,v1:R.v1};W?e.atlas.quad(V,z,q,ee,[1,1,1],J):e.atlas.quad(z,V,ee,q,[1,1,1],{u0:R.u1,u1:R.u0,v0:R.v0,v1:R.v1})}for(let O of[-1,1])for(let H of[-1,1])for(let B=14+p()*3;B<125;B+=p.range(2.4,5)){if(p()<.35)continue;let V=O*(16.2+p()*1.1),z=H*B,q=1+(p()<.4?1:0);for(let ee=0;ee<q;ee++){let Ee=T(V+O*p()*.6,z+(p()-.5)*.9,M+.7),we=new Qe().makeRotationY(p()*6.28);we.setPosition(Ee[0],Ee[1],Ee[2]),F0(e,we,p,"grass",p.range(1.9,2.8))}}}yield;for(let R of[-18,18])for(let L of[-1,1]){yield;for(let D=11+p()*4;D<(v?125:170);D+=v?p.range(8.5,11):p.range(18,34)){let O=n+R+(p()-.5)*1.5,H=L*D;Wn(e,s(O,H,l(O,H),p()*6,!1),v?"sakura":"broad",p,v?p.range(1,1.25):p.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,l,a,u,h,p,m){let x=this.path.at(n.s,{}),y=x.y,S=u(n.s),c=S+1.4,f=Dt(n.s),d=[f.city,f.sakura,f.coast,f.country],v=o(n.s,0,y,0,!1),g=e.color,b=Math.max(s,n.s-_n)-n.s,M=Math.min(r,n.s+_n)-n.s;if(M>b+.01){let B=Math.max(2,Math.ceil((M-b)/3)+1),V=[-(S+1.5),-S,-S*.5,0,S*.5,S,S+1.5];t.gridN(B,V.length,(J,ve)=>{let Pe=b+(M-b)*J/(B-1),ie=n.s+Pe,xe=V[ve],Be=y+ju(Pe,xe);return[x.x+x.fx*Pe+x.rx*xe-h,Be,x.z+x.fz*Pe+x.rz*xe-p,0,1,0,Ms(ie,Ri),xe,d[0],d[1],d[2],d[3],S,0,-1]});let z=[[-S,0],[-S,.2],[-c,.2],[-c,3.2]];for(let J=1;J<12;J++){let ve=Math.PI*(1-J/12);z.push([c*Math.cos(ve),3.2+3*Math.sin(ve)])}z.push([c,3.2],[c,.2],[S,.2],[S,0]);let q=[.86,.82,.72],ee=[.44,.45,.47],Ee=[.62,.61,.58],we=[];for(let J=b;J<M-.01;J+=6)we.push(J);we.push(M),g.setM(v);for(let J=0;J<we.length-1;J++)for(let ve=0;ve<z.length-1;ve++){let[Pe,ie]=z[ve],[xe,Be]=z[ve+1],ze=Math.max(ie,Be)<=.21?Ee:Math.abs(Pe)>c-.01&&Math.abs(xe)>c-.01?q:ee;g.quad([we[J],ie,Pe],[we[J+1],ie,Pe],[we[J+1],Be,xe],[we[J],Be,xe],ze)}e.sodium.setM(v),e.sig.setM(v);let Me=c*Math.cos(Math.PI/6)-.12,W=3.2+3*Math.sin(Math.PI/6)-.08;for(let J=Math.ceil((b+_n-3)/6)*6+3-_n;J<M;J+=6)for(let ve of[-1,1])e.sodium.box(J-.45,W-.07,ve*Me-.13,J+.45,W+.07,ve*Me+.13,null),lr(e,v,J,W-.1,ve*Me,1);for(let J=Math.ceil((b+_n)/24)*24-_n;J<M;J+=24)e.sig.box(J-.3,.95,-c+.01,J+.3,1.2,-c+.06,null);for(let J=Math.ceil((b+_n-30)/60)*60+30-_n;J<M;J+=60)for(let ve of[-1.15,1.15])g.box(J-1.1,5.2,ve-.36,J+1.1,5.78,ve+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),g.box(J-.08,5.78,ve-.05,J+.08,6.15,ve+.05,[.4,.4,.42]);yield}let T=(B,V)=>{let z=Math.sin(B*12.9898+V*78.233+n.k*37.719)*43758.5453;return z-Math.floor(z)},_=(B,V,z)=>[B[0]+(V[0]-B[0])*z,B[1]+(V[1]-B[1])*z,B[2]+(V[2]-B[2])*z],E=[.5,.5,.47],w=[.55,.53,.47],A=[.6,.6,.57],C=[.58,.58,.55],I=[.42,.42,.4],R=(B,V)=>{let z=T(B,V);return L?_([.26,.29,.08],[.42,.3,.09],z):_([.22,.29,.08],[.36,.36,.12],z)},L=f.mountain>.5,D=c+2.6,O=2.6;for(let B of[-1,1]){let V=n.s+B*_n,z=B*(_n+.08);if(V<s||V>=r)continue;let q=[];for(let K of x1)K>=1.44&&q.push(S+K,-(S+K));for(let K of y1)K>S+3.5&&K<S+21&&q.push(K,-K);for(let K=0;K<=24;K++)q.push(-c+2*c*K/24);q.push(-c-.01,c+.01,-D,D),q.sort((K,N)=>K-N);let ee=K=>3.2+3*Math.sqrt(Math.max(0,1-(K/c)**2)),Ee=K=>Math.max(a(V-B*.03,K)-y,ju(B*(_n-.03),K)),we=K=>Math.abs(K)<=c+1e-6?ee(K):a(V+B*.03,K)-y,Me=8.4;for(let K of q)Math.abs(K)<=D&&(Me=Math.min(Me,Ee(K)-.4));let W=Me>6.6;g.setM(v);let J=B,ve=(K,N,P,G,Z,Q,he,me)=>{let fe=[z,P,K],pe=[z,G,N],De=[z,Q,N],Ke=[z,Z,K],Ne=B<0?[fe,pe,De,Ke]:[pe,fe,Ke,De],Ue=B<0?[he,he,me,me]:[he,he,me,me];for(let Oe of[0,1,2,0,2,3])g.vtx(Ne[Oe][0],Ne[Oe][1],Ne[Oe][2],J,0,0,0,0,Ue[Oe])},Pe=(K,N,P)=>K+(N-K)*P;for(let K=0;K<q.length-1;K++){let N=q[K],P=q[K+1];if(P-N<1e-4)continue;let G=Ee(N),Z=Ee(P),Q=we(N),he=we(P);if(G-Q<.01&&Z-he<.01)continue;let me=(N+P)/2,fe=W&&Math.abs(me)<D,pe=Q,De=he;if(fe){let Oe=_(E,[.46,.46,.44],T(Math.floor(me/2.4),3.1)),tt=.8+2.6*T(Math.floor(me/.8),7.7),at=_(Oe,[.27,.27,.26],.35+.3*T(Math.floor(me/.8),9.9)),Y=Math.min(Me,G),Ie=Math.min(Me,Z),ge=Math.max(Q,Y-tt),Fe=Math.max(he,Ie-tt);if(Math.abs(me)>c){let He=Math.min(ge,Q+.9),Re=Math.min(Fe,he+.9);ve(N,P,Q,he,He,Re,_(Oe,[.25,.29,.18],.45),Oe),ve(N,P,He,Re,ge,Fe,Oe,Oe)}else ve(N,P,Q,he,ge,Fe,Oe,Oe);if(ve(N,P,ge,Fe,Y,Ie,Oe,at),pe=Y,De=Ie,G-Y<.01&&Z-Ie<.01)continue}let Ke=Math.floor(me/O),Ne=pe,Ue=De;for(let Oe=Math.floor(Math.min(Ne,Ue)/O)+1;Ne<G-.01||Ue<Z-.01;Oe++){let tt=Oe*O,at=Math.min(G,Math.max(Ne,tt)),Y=Math.min(Z,Math.max(Ue,tt)),Ie=R(Ke,Oe);if(ve(N,P,Ne,Ue,at,Y,_(Ie,[.2,.22,.1],.25),Ie),Ne=at,Ue=Y,Oe>60)break}}let ie=Math.min(z,z+B*.12),xe=Math.max(z,z+B*.12),Be=K=>{for(let N=0;N<q.length-1;N++)if(K>=q[N]&&K<=q[N+1]&&q[N+1]>q[N]){let P=(K-q[N])/(q[N+1]-q[N]);return[Pe(we(q[N]),we(q[N+1]),P),Pe(Ee(q[N]),Ee(q[N+1]),P)]}return null},ze=q[0],Ae=q[q.length-1];for(let K=Math.ceil(ze/O)*O;K<Ae;K+=O){let N=Be(K);if(!N)continue;let P=(W&&Math.abs(K)<D?Math.max(Me+.3,N[0]):N[0])+.05,G=N[1]-.05;G-P>.4&&!(Math.abs(K)<=c+.3&&!W)&&g.box(ie,P,K-.14,xe,G,K+.14,w)}for(let K=1;K<60;K++){let N=K*O,P=null,G=()=>{P&&P[1]-P[0]>.3&&g.box(ie,N-.14,P[0],xe,N+.14,P[1],w),P=null},Z=!1;for(let Q=0;Q<q.length-1;Q++){let he=q[Q],me=q[Q+1];if(me-he<1e-4)continue;let fe=(he+me)/2,pe=Math.max(we(he),we(me),W&&Math.abs(fe)<D?Me+.3:-1e9),De=Math.min(Ee(he),Ee(me));N>pe+.2&&N<De-.2?(Z=!0,P?P[1]=me:P=[he,me]):G()}if(G(),!Z&&N>30)break}W&&g.box(Math.min(z,z+B*.32),Me-.05,-D,Math.max(z,z+B*.32),Me+.3,D,A);let Ge=z+B*.32,te=K=>-c+2*c*K/24,de=K=>[te(K),ee(te(K))],j=K=>[te(K)*1.12,ee(te(K))+.6];for(let K=0;K<24;K++){let[N,P]=de(K),[G,Z]=de(K+1),[Q,he]=j(K),[me,fe]=j(K+1);B<0?g.quad([Ge,P,N],[Ge,Z,G],[Ge,fe,me],[Ge,he,Q],C):g.quad([Ge,Z,G],[Ge,P,N],[Ge,he,Q],[Ge,fe,me],C),B<0?g.quad([z,P,N],[z,Z,G],[Ge,Z,G],[Ge,P,N],I):g.quad([z,Z,G],[z,P,N],[Ge,P,N],[Ge,Z,G],I),B<0?g.quad([z,fe,me],[z,he,Q],[Ge,he,Q],[Ge,fe,me],C):g.quad([z,he,Q],[z,fe,me],[Ge,fe,me],[Ge,he,Q],C)}for(let K of[-1,1])g.box(Math.min(z,Ge),.2,K>0?c:-c*1.12,Math.max(z,Ge),3.2,K>0?c*1.12:-c,C);e.atlas.setM(v);let ce=1.9,se=7.05,ne=7.85,F=z+B*.03,be=Go("tunnel"+(f.coast>.5?1:Math.abs(n.k)%2?2:0));B<0?e.atlas.quad([F,se,-ce],[F,se,ce],[F,ne,ce],[F,ne,-ce],[1,1,1],be):e.atlas.quad([F,se,ce],[F,se,-ce],[F,ne,-ce],[F,ne,ce],[1,1,1],be)}yield;let H=f.mountain>.5;for(let B=Math.max(s,n.s-on*.95)+m()*3;B<Math.min(r,n.s+on*.95);B+=m.range(4,8)){let V=Math.abs(B-n.s)>_n-4?17:4;for(let z of[-1,1]){let q=z*(S+m.range(V,50)),ee=m();Wn(e,l(B,q,-.3,m()*6,!1),H?ee<.5?"maple":ee<.8?"cedar":"ginkgo":ee<.65?"pine":"broad",m,m.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,l,a,u){let h=p=>Dt(p).snow;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*20;m<s;m+=t.range(22,40)){if(h(m)<.6||t()<.5)continue;let x=p*t.range(18,90);Wi(e,o(m,x,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(Fs),litP:.62,fence:0,snow:!0});for(let y=0;y<2+t()*3;y++)Wn(e,o(m+t.range(-9,9),x+p*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let m=n+t()*5;m<s;m+=t.range(3,7))h(m)<.5||(t()<.32&&Wn(e,o(m,p*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&Wn(e,o(m,p*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let p=Math.ceil(n/36)*36;p<s;p+=36){if(h(p)<.55)continue;let m=a(p);{let x=r(p,-(m+.95),l(p)+1.3),y=r(p+18,m+.95,l(p+18)+1.3);x.groundY=l(p),y.groundY=l(p+18),N0(e,x,1),N0(e,y,-1)}}}}*placeMountain(e,t,n,s,r,o,l,a,u){let h=p=>Dt(p).mountain;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*4;m<s;m+=t.range(4.5,8.5)){if(h(m)<.45||Pi(m,on+6))continue;let x=a(m),y=t();if(p>0){let S=y<.5?"maple":y<.72?"ginkgo":"cedar";Wn(e,o(m,x+t.range(17,70),-.25,t()*6,!1),S,t,t.range(.9,1.3))}else{let S=y<.55?"maple":y<.8?"cedar":"ginkgo";Wn(e,o(m,-(x+t.range(3.5,34)),-.25,t()*6,!1),S,t,t.range(.95,1.35))}}yield}for(let p=n+t()*4;p<s;p+=t.range(3,6)){if(h(p)<.5)continue;let m=t()<.7,x=-(a(p)+(m?t.range(108,205):t.range(36,100)));Wn(e,o(p,x,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new Qe);for(let p=Math.ceil(n/10)*10;p<s;p+=10){if(h(p)<.5||Pi(p,on+4))continue;let m=a(p),x=r(p,-(m+.95),l(p));_g(e,x)}for(let p=Math.ceil(n/14)*14;p<s;p+=14){if(h(p)<.6)continue;let m=this.path.curv(p);if(Math.abs(m)<1/230)continue;let x=a(p);m>0?cr(e,r(p,x+.42,l(p)),"chev_l",-1,1.25,.58):cr(e,r(p,-(x+1.15),l(p)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,s,r,o,l){let a=this.path,u={},h=At(Math.floor(yn(t,1789)*4294967295)),p=Eg(),m=Math.floor((n+Vt/2)/600)*600+300,x=Math.floor((n+Vt/2)/700)*700+120,y=Math.floor((n+Vt/2)/380)*380+190,S=yn(Math.round(y),5)<.5?-1:1;for(let v of[-1,1]){e.leaf.setM(b1);for(let g=n+h()*p;g<s;g+=p*h.range(.75,1.25)){if(fn(g)!=="country"||zs(g,10)||ai(g,31)||v<0&&(Math.abs(g-m)<2.9||g>x-1.3&&g<x+2.7)||v===S&&Math.abs(g-y)<1.6)continue;a.at(g,u);let b=l(g),M=v*(b+.95+(h()-.5)*.36),T=u.y+_s(g,M,u.y,b),_=(h()-.5)*.8,E=Math.cos(_)*v,w=Math.sin(_)*v;B0(e,u.x+u.rx*M-r,T,u.z+u.rz*M-o,u.rx*E+u.fx*w,u.rz*E+u.fz*w,h,h.range(.85,1.15))}yield}let c=At(Math.floor(yn(t,1811)*4294967295)),f=p>1?p*1.35:p;e.leaf.setM(b1);for(let v=n+c()*f;v<s;v+=f*c.range(.75,1.25)){if(Dt(v).coast<.6||Pi(v,on+6))continue;let g=v-6-Math.round((v-6)/Os)*Os;if(Math.abs(g)<.9||Math.abs(v-(n+12))<.8)continue;a.at(v,u);let b=l(v),M=b+.95+(c()-.5)*.3,T=u.y+_s(v,M,u.y,b),_=(c()-.5)*.8,E=Math.cos(_),w=Math.sin(_);B0(e,u.x+u.rx*M-r,T,u.z+u.rz*M-o,u.rx*E+u.fx*w,u.rz*E+u.fz*w,c,c.range(.62,.85),"bankC")}for(let v=n+c()*14;v<s;v+=c.range(14,30)){if(Dt(v).coast<.6||Pi(v,on+6))continue;let g=v-6-Math.round((v-6)/Os)*Os;if(Math.abs(g)<1.4||Math.abs(v-(n+12))<1.2)continue;a.at(v,u);let b=l(v),M=b+c.range(1.3,2.3),T=u.y+_s(v,M,u.y,b),_=new Qe().makeRotationY(c()*6.28);_.setPosition(u.x+u.rx*M-r,T,u.z+u.rz*M-o),ch(e,_,c,c.range(1.1,1.4))}let d=At(Math.floor(yn(t,2417)*4294967295));for(let v of[-1,1])for(let g=n+d()*8;g<s;g+=d.range(8,14)){if(Dt(g).sakura<.6||ai(g,31))continue;let b=1+Math.floor(d()*3),M=v*(l(g)+2.95+d()*.4);a.at(g,u);let T=u.y+_s(g,M,u.y,l(g));for(let _=0;_<b;_++){let E=_*.75+d()*.25,w=M+v*(d()-.5)*.3,A=new Qe().makeRotationY(d()*6.28);A.setPosition(u.x+u.fx*E+u.rx*w-r,T,u.z+u.fz*E+u.rz*w-o),d()<.5?ch(e,A,d,d.range(1.05,1.35)):Sl(e,A,d,d.range(.45,.6))}}}*placeVerge(e,t,n,s,r,o,l,a,u,h){yield*this.placeBanks(e,a,n,s,u,h,l);for(let p of[-1,1]){for(let m=n+t()*1.2;m<s;m+=t.range(.55,1.5)){if(zs(m,10)||ai(m,31)||Pi(m,on+4))continue;let x=fn(m),y=l(m),S,c,f=.22,d=1;if(x==="country")S=y+t.range(2.05,2.8),c=.25,f=.35;else if(x==="sakura")S=y+2.68+t()*1.3,c=.55,f=.3;else if(x==="coast"){if(p<0)continue;S=y+.95+t()*1.7,c=.75,f=.18}else{if(x==="snow")continue;if(x==="mountain")S=p<0?y+1+t()*.35:y+.25+t()*.2,c=p<0?.55:.18,f=.12,d=.85;else{if(j0(m,5))continue;S=y+3.02+t()*.1,c=.1,f=.08,d=.65}}if(t()>c)continue;let v=p*S;F0(e,r(m,v,o(m,v),t()*6.28,!1),t,t()<f?"flowers":"grass",d*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new Qe);let l=Math.max(1,Math.round((n-t)/2)),a=Te.rail,u=[.62,.64,.66],h=[.74,.76,.79],p=[.95,.55,.16];for(let m=0;m<l;m++){let x=t+(n-t)*m/l,y=t+(n-t)*(m+1)/l,S=-(o(x)+.95),c=-(o(y)+.95),f=r(x),d=r(y);for(let g=0;g<K0.length-1;g++){let[b,M]=K0[g],[T,_]=K0[g+1];e.color.quad(s(x,S+M,f+b),s(y,c+M,d+b),s(y,c+_,d+T),s(x,S+_,f+T),a)}e.color.quad(s(y,c+.05,d+.5),s(x,S+.05,f+.5),s(x,S+.05,f+.84),s(y,c+.05,d+.84),u),e.color.noShadow=!0;let v=s(x,S-.04,f);if(e.color.cyl(v[0],f,v[2],.055,.055,.8,6,h,!1),Math.round(x/2)%2===0){let g=s(x,S+.035,f+.64),b=s(x+.09,S+.035,f+.64);e.color.quad(b,g,[g[0],g[1]+.07,g[2]],[b[0],b[1]+.07,b[2]],p)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,l,a,u,h,p,m,x){for(let c of[-1,1]){let f=n+t()*2;for(;f<s-2;){{let L=Dt(f);if(L.city<.62||L.mountain>.1){f+=4;continue}}{let L=rr(f+6);if(L&&f<L.s+8.5&&f+14>L.s-8.5){f=Math.max(f+1,L.s+8.5);continue}}let d=2*Math.round(f/300),v=d*150;if(f>v-M1(d)&&f<v+J0(d)){f=v+J0(d)+.05;continue}let g=a(f),b=u(f)||3,M=g+b+.15,T=t(),_=f<420||T<.84?"machiya":T<.89?"shop":T<.93?"apt":T<.96?"konbini":"house",E=_==="shop"?t.range(5,9):_==="machiya"?t.range(6,9.5):_==="apt"?t.range(10,16):_==="house"?t.range(7,9.5):t.range(12,14);if(f+E>s){if(s-f<5||_==="konbini")break;E=s-f-.2}{let L=f<v?d:d+2,D=L*150-M1(L);if(f+E>D-.1){if(D-.1-f<4){f=L*150+J0(L)+.05;continue}E=D-.1-f}}let w=f+E/2,A=l(w),C=t.pick(Fs),I=.42,R=_==="machiya"&&t()<.6;{let L=r(w,c*M,A+.15),D={type:_,w:E,at:w,side:c,d:_==="apt"?t.range(10,14):t.range(8,12),floors:_==="shop"?t.int(2,4):_==="machiya"?t()<.7?2:3:_==="apt"?t.int(4,9):2,tint:R?R0[Math.floor(t()*R0.length)]:C,litP:I,plaster:R,fence:_==="house"&&t()<.5?1.2:0};if(Wi(e,L,t,D),_!=="house"&&t()<.28&&L0(e,r(w+(t()-.5)*(E-1.2),c*(M-.42),A+.15),t),(_==="shop"||_==="konbini"||_==="machiya")&&t()<.3)for(let O=0;O<1+t()*3;O++)vg(e,r(w-E/2+.8+O*.55,c*(M-.75),A+.15,Math.PI/2+.1),t);if(_==="house"&&t()<.6)for(let O=0;O<2+t()*3;O++)D0(e,r(w+1+O*.5,c*(M-.3),A+.15),t);if(t()<.03)for(let O=0;O<3;O++)xg(e,r(w+O*.9,c*(g+.35),A))}f+=E+t.range(.05,.5),yield}for(let d=n+t()*10;d<s-8;d+=t.range(14,26)){if(Dt(d).city<.7||Dt(d).mountain>.1||t()<.3||zs(d,18)||j0(d,15))continue;let v=a(d),g=r(d,c*(v+3.2+t.range(14,20)),l(d)+.1);Wi(e,g,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(Fs),litP:.4})}if(Dt(n+30).city>.7&&Dt(n+30).mountain<.1&&t()<.65){let d=n+t()*Vt;if(zs(d,24)||j0(d,20))continue;let v=r(d,c*t.range(55,150),l(d));Wi(e,v,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(Fs),litP:.45})}}let y=Math.ceil(n/150),S=Math.floor((s-.01)/150);for(let c=y;c<=S;c++){let f=c*150;if(!US(c)||fn(f)!=="city"||Dt(f).mountain>.1)continue;let d=a(f);yield*this.intersection(e,t,f,c,r,l,a,u,p,m,x),ph(c)&&(cr(e,r(f-1,-(d+.4),l(f)+.15),"sign_blue",1),cr(e,r(f-6,-(d+.4),l(f)+.15),"sign_stop",1,2.1,.75),U0(e,r(f+7,d+.4,l(f)+.15),-1),c%8===4&&cr(e,r(f+20,-(d+.4),l(f)+.15),"sign_speed",1))}}houseGarden(e,t,n,s,r,o,l,a,u,h){let p=o.ww/2;if(a)for(let m=-p-.6;m<p+.6;m+=t.range(1.2,1.9)){if(Math.abs(m)<.9&&a===1&&t()<.7)continue;let x=l(n+m,s-r*t.range(1.1,1.7),0,t()*6,!1);a===2&&t()<.6?Sl(e,x,t,t.range(.75,1)):yg(e,x,t,t.range(.5,.75))}for(let m=0;m<u;m++){let x=(m%2?-1:1)*(t()<.5?1:-1);Wn(e,l(n+x*(p+t.range(3.2,5.5)),s+r*t.range(1,o.wd),0,t()*6),"broad",t,t.range(.9,1.25))}for(let m=0;m<h;m++)Wn(e,l(n+t.range(-p-2,p+2),s+r*(o.wd+t.range(3.5,7)),0,t()*6),"broad",t,t.range(.95,1.3))}*placeSakura(e,t,n,s,r,o,l,a,u){let h=At(Math.floor(yn(Math.round(n/Vt),2423)*4294967295));for(let x of[-1,1]){for(let y=n+t()*4;y<s;y+=t.range(7.5,10)){if(Dt(y).sakura<.45||ai(y,30))continue;let S=a(y);if(Wn(e,o(y,x*(S+3.7),0,ki.bcells?(t()-.5)*.6:t()*6),"sakuraAve",t,t.range(1.05,1.3)),Dt(y).sakura>.6&&h()<.65)for(let c=0,f=2+(h()<.4?1:0),d=h()*6.28;c<f;c++){let v=d+c/f*6.28+(h()-.5)*1.2,g=h.range(.75,1.15),b=Math.max(S+2.9,S+3.7+Math.sin(v)*g*.8),M=o(y+Math.cos(v)*g,x*b,0,h()*6.28,!1);h()<.6?ch(e,M,h,h.range(1.2,1.55)):Sl(e,M,h,h.range(.5,.65))}t()<.45&&Wn(e,o(y+3,x*(S+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let y=n+(x>0?0:12);y<s;y+=24){if(fn(y)!=="sakura"||ai(y,30))continue;let S=a(y);Ml(e,r(y,x*(S+2.25),l(y)+.15)),Ms(y,48)<24&&Bg(e,r(y+6,x*(S+3),u(y+6,x*(S+3))))}for(let y=n+t()*15;y<s;y+=t.range(14,24)){if(fn(y)!=="sakura"||t()<.35||ai(y,45))continue;let S=a(y),c=uh("sakura",t);if(!c){Wi(e,o(y,x*(S+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(Fs),litP:.45,fence:t()<.6?1.4:0});continue}let f=x*(S+t.range(19,26)),d=t()<.45?1.4:0;Wi(e,o(y,f),t,{type:"house",w:c.ww,d:c.wd,ptype:c,fence:d}),this.houseGarden(e,t,y,f,x,c,o,d?0:1,0,0)}}let m=Math.floor((n+Vt/2)/480)*480+240;m>=n&&m<s&&fn(m)==="sakura"&&!ai(m,60)&&k0(e,r(m,0,l(m),0,!1),a(m)+1.6,6.4)}coastWall(e){return Dt(e).coast>=.7&&!Pi(e,on+14)}coastHeaps(e){let t=this.heapCache.get(e);if(t)return t;t=[];let n=At(Math.floor(yn(e,5501)*4294967295)),s=e*Vt,r=s+Vt;for(let o=s+1+n()*12;o<r-3;o+=n.range(12,26)){let l=n.range(1.25,1.5),a=n.range(4.5,11),u=n()<.4?3:2,h=Math.min(o+a,r-.5);!this.coastWall(o)||!this.coastWall(h)||t.push({sa:o,sb:h,L:l,rows:u,dOut:(.8+(u-1)*1.45+.95)*l})}return this.heapCache.size>48&&this.heapCache.clear(),this.heapCache.set(e,t),t}*placeCoast(e,t,n,s,r,o,l,a,u,h){let p=this.path,m={},x=this.coastHeaps(n),y=At(Math.floor(yn(n,5507)*4294967295));for(let M of x){let T=M.L;for(let w=0;w<M.rows;w++){let A=.8*T+w*1.45*T,C=(w===0?.28:w===1?0:-.3)*T;for(let I=M.sa+y()*.7*T;I<M.sb;I+=1.5*T*y.range(.88,1.12)){let R=a(I),L=h(I,-(R+dl+A+(y()-.5)*.45*T),0);if(H0(e,L[0],os+C+(y()-.5)*.3*T,L[2],y,T*y.range(.92,1.08),os-.7,w===0?.8:.45),w===0&&M.rows>1&&y()<.4){let D=h(I+.7*T,-(R+dl+A+.72*T),0);H0(e,D[0],os+1.05*T,D[2],y,T*y.range(.9,1),os-.7)}}}let _=Math.max(3,Math.round(dh.n*(M.sb-M.sa+2)/7)),E=Ms(s,Ri)-s;for(let w=0;w<_;w++){let A=M.sa+(M.sb-M.sa)*(w+.5)/_+(y()-.5)*1.4,C=a(A);p.at(A,m);let I=h(A,-(C+dl+M.dOut*(.45+.55*y())-.3),os+.35);u.puffs.push(I[0],I[1],I[2],-m.rx,-m.rz,M.dOut,y(),A+E)}}x.length&&(yield);let S=[...this.coastHeaps(n-1),...x,...this.coastHeaps(n+1)],c=Ms(s,Ri),f=[];for(let M=0;M<=10;M++)f.push(s+M*6);for(let M of S)for(let T of[M.sa-3.2,M.sa-.4,M.sb+.4,M.sb+3.2])T>s+.5&&T<r-.5&&f.push(T);f.sort((M,T)=>M-T);for(let M=0;M<f.length;M++){let T=f[M];if(M>0&&T-f[M-1]<.6)continue;if(!this.coastWall(T)){if(u.rows.length)break;continue}let _=1;for(let A=1;A<=3;A++)if(!this.coastWall(T-2*A)||!this.coastWall(T+2*A)){_=(A-1)/3;break}let E=a(T),w=new Float32Array($0.length*7);$0.forEach((A,C)=>{let I=h(T,-(E+dl+A),os+.03),R=0;for(let L of S)R=Math.max(R,(1-Tt(.4,3.2,Math.max(L.sa-T,T-L.sb,0)))*(1-Tt(.2,3.4,A-L.dOut)));w.set([I[0],I[1],I[2],c+(T-s),A,R,_],C*7)}),u.rows.push(w)}u.rows.length&&(yield);let d=At(Math.floor(yn(n,5531)*4294967295)),v=null;if(fn(s+30)==="coast"&&d()<.5){let M=s+d()*Vt,T=a(M);Pi(M,on+25)||(v={s:M,rw:T,T:uh("coast",d),u:T+d.range(11,17)})}for(let M=s+t()*6;M<r;M+=t.range(5,9)){if(fn(M)!=="coast"||Pi(M,on+6))continue;let T=a(M),_=t();if(_>=.58)continue;let E=T+t.range(4.5,30);v&&v.T&&Math.abs(M-v.s)<v.T.ww/2+2.5&&E>v.u-3.5&&E<v.u+v.T.wd+2.5||Wn(e,l(M,E,0,t()*6,!1),_<.48?"broad":"pine",t,t.range(1,1.4))}for(let M=s+4;M<r;)M+=t.range(18,30);for(let M=s+12;M<r;M+=48){if(fn(M)!=="coast"||Pi(M,on+4))continue;let T=a(M);I0(e,l(M,T+1),t)}let g=At(Math.floor(yn(n,5519)*4294967295));for(let M=s+g()*5;M<r;M+=g.range(5,11)){if(Dt(M).coast<.6||Pi(M,on+6))continue;let T=1+Math.floor(g()*2.4);for(let _=0;_<T;_++){let E=M+_*g.range(1.1,1.8),w=a(E)+g.range(1.4,2.5),A=g()*6.28,C=g.range(1.05,1.45),I=E-6-Math.round((E-6)/Os)*Os,R=E-12-Math.round((E-12)/48)*48;Math.abs(I)<1.4||Math.abs(R)<1.2||Sl(e,l(E,w,0,A,!1),g,C)}}if(v){let{s:M,rw:T,T:_,u:E}=v;_?(Wi(e,l(M,E),d,{type:"house",w:_.ww,d:_.wd,ptype:_}),this.houseGarden(e,d,M,E,1,_,l,2,1,1)):Wi(e,l(M,T+d.range(9,16)),d,{type:"house",w:d.range(7,10),d:8,floors:d()<.5?2:1,tint:d.pick(Fs),litP:.5,fence:0})}if(fn(s+30)==="coast"&&t()<.55){let M=s+t()*Vt;Vg(e,o(M,-(a(M)+t.range(45,220)),os-.25,t()*6,!1),t)}let b=Math.floor((s+Vt/2)/1500)*1500+700;b>=s&&b<r&&fn(b)==="coast"&&!Pi(b,on*1.6)&&Hg(e,o(b,-(a(b)+75),os-1,0,!1))}*placeCountry(e,t,n,s,r,o,l,a,u){for(let y of[-1,1]){yield;for(let S=n+t()*20;S<s;S+=t.range(20,40)){if(fn(S)!=="country"||t()<.55||zs(S,16)||ai(S,48))continue;let c=y*t.range(16,95),f=o(S,c),d=uh("country",t);if(d){Wi(e,f,t,{type:"house",w:d.ww,d:d.wd,ptype:d}),this.houseGarden(e,t,S,c,y,d,o,1,2,2);continue}Wi(e,f,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(Fs),litP:.5,fence:0});for(let v=0;v<2+t()*3;v++){let g=c+y*t.range(6,14),b=S+t.range(-8,8);Wn(e,o(b,g,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let S=n+t()*8;S<s;S+=t.range(5,9)){if(fn(S)!=="country"||zs(S,7)||ai(S,36))continue;let c=y*t.range(140,210);Wn(e,o(S,c,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!zs(S+2,8)&&!ai(S+2,34)&&Wn(e,o(S+2,y*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let h=Math.floor((n+Vt/2)/600)*600+300;if(h>=n&&h<s&&fn(h)==="country"&&!ai(h,40)){let y=a(h);Og(e,r(h,-(y+1.6),l(h)-.08),t)}let p=Math.floor((n+Vt/2)/700)*700+120;if(p>=n&&p<s&&fn(p)==="country"&&!ai(p,40)){let y=a(p);L0(e,r(p,-(y+.95),l(p)-.08),t),I0(e,r(p+2,-(y+.8),l(p)-.08),t)}let m=Math.floor((n+Vt/2)/900)*900+450;if(m>=n&&m<s&&fn(m)==="country"&&!ai(m,40)){let y=a(m);Gg(e,o(m,y+5),t)}let x=Math.floor((n+Vt/2)/380)*380+190;if(x>=n&&x<s&&fn(x)==="country"&&!ai(x,40)&&!zs(x,30)){let y=a(x),S=(yn(Math.round(x),5)<.5?-1:1)*(y+2.75);Ug(e,o(x,S,0))}for(let y=n;y<s;y+=30){if(fn(y)!=="country")continue;let S=this.path.curv(y);if(Math.abs(S)>1/450&&t()<.5){let c=S>0?-1:1,f=a(y);U0(e,o(y,c*(f+.75)),c>0?-1:1)}}}};var Yo={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function S1(i){let e=i.get("weather"),t={mode:Yo[e]?e:"auto",kind:Yo[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return Yo[e]&&(t.ov=Yo[e][0],t.rain=Yo[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=Yo[t.kind];t.ov+=Jt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=Jt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var Xi={uHeadPos:{value:new k},uHeadDir:{value:new k(0,0,1)},uHeadI:{value:0},uLampW:{value:[new dt(0,-1e3,0,0),new dt(0,-1e3,0,0)]},uLampCol:{value:new _e(1,.8,.52)}},gh=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function E1(){let e=new k(42,22,42),t=new rn(1,1),n=new ms;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new Cn(s,4)),n.instanceCount=2400;let r=new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uAmt:{value:0},uBox:{value:e},uCol:{value:new _e(1,1,1)},...Xi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${gh}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new ct(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,u,h){o.visible=u>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*h,.33+.67*h,.42+.58*h)}}}function T1(){let e=new k(46,24,46),t=new rn(1,1);t.translate(0,.5,0);let n=new ms;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new Cn(s,4)),n.instanceCount=2600;let r=new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uRain:{value:0},uBox:{value:e},uCol:{value:new _e(.8,.85,.95)},...Xi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${gh}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new ct(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,u,h){o.visible=u>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*h,.12+.83*h,.16+.84*h)}}}var li=64,td=[2.2,1.3,2.6],FS=[-2.4,.35,-1.6];function w1(){let i=new Float32Array(li*3),e=new Float32Array(li*3),t=new Float32Array(li*4),n=new Float32Array(li),s=new Uint8Array(li),r=new Float32Array(li);for(let v=0;v<li;v++)t[v*4]=t[v*4+1]=1;let o=new rn(1,1),l=new ms;l.index=o.index,l.setAttribute("position",o.attributes.position),l.setAttribute("uv",o.attributes.uv),l.instanceCount=0;let a=new Float32Array(li*4),u=new Float32Array(li*4),h={uP:{value:a},uC:{value:u},uNoiseTex:ke.uNoiseTex,uAmb:{value:new _e},uSun:{value:new _e},uTail:{value:new dt},uCam:{value:new k},...Xi},p=new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:h,vertexShader:`
      uniform vec4 uP[${li}], uC[${li}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${gh}
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
      }`}),m=new ct(l,p);m.frustumCulled=!1,m.renderOrder=4,m.visible=!1;let x=0,y=0,S=0,c=0,f=!1;function d(v,g,b,M,T,_,E,w,A,C,I){let R=x;x=(x+1)%li,i[R*3]=g,i[R*3+1]=b,i[R*3+2]=M,e[R*3]=T,e[R*3+1]=_,e[R*3+2]=E,t[R*4]=0,t[R*4+1]=w,t[R*4+2]=A,t[R*4+3]=C,n[R]=I,s[R]=v,r[R]=Math.random()}return{mesh:m,update(v,g,b,M,T,_,E,w,A,C,I){if(!I){if(f){for(let W=0;W<li;W++)t[W*4]=t[W*4+1];f=!1}m.visible=!1;return}let R=g.position,L=g.rotation.y,D=Math.cos(L),O=Math.sin(L),H=O*b,B=D*b,V=Math.min(1,Math.max(0,(b-2)/14)),z=T>.3?2:0,q=z?T:M;for(y+=24*q*V*v;y>=1;){y-=1;let W=(c^=1)?1:-1,J=W*.67,ve=-1.28-Math.random()*.2,Pe=Math.random(),ie=Math.random(),xe=1.6+1.6*Pe,Be=z?.5+.7*ie:.9+1*ie,ze=W*(.3+.6*Math.random());d(z,R.x+J*D+ve*O,R.y+.12,R.z-J*O+ve*D,H*.55-O*xe+ze*D,Be,B*.55-D*xe-ze*O,z?.45+.3*Pe:.55+.35*Pe,.2+.1*ie,z?.7+.35*ie:.8+.4*ie,.5*(.5+.5*V)*Math.min(1,q*1.5))}for(S+=(5+4*V)*_*v;S>=1;){S-=1;let W=Math.random();d(1,R.x-.42*D-1.78*O,R.y+.26,R.z+.42*O-1.78*D,H*.5-O*.8,.25+.2*W,B*.5-D*.8,1.3+.6*W,.14,.8+.4*Math.random(),.32*Math.min(1,_*1.5))}let ee=0,Ee=Math.exp(-td[0]*v),we=Math.exp(-td[1]*v),Me=Math.exp(-td[2]*v);for(let W=0;W<li;W++){let J=W*4;if(t[J]>=t[J+1])continue;let ve=t[J]+=v,Pe=t[J+1];if(ve>=Pe)continue;let ie=s[W],xe=ie===0?Ee:ie===1?we:Me,Be=W*3,ze=i[Be]-C.x,Ae=i[Be+1]-C.y,Ge=i[Be+2]-C.z;if(ze*ze+Ae*Ae+Ge*Ge<20.25){t[J]=Pe;continue}e[Be]*=xe,e[Be+1]=e[Be+1]*xe+FS[ie]*v,e[Be+2]*=xe,i[Be]+=e[Be]*v,i[Be+1]=Math.max(R.y+.05,i[Be+1]+e[Be+1]*v),i[Be+2]+=e[Be+2]*v;let te=ve/Pe,de=ee*4;a[de]=i[Be],a[de+1]=i[Be+1],a[de+2]=i[Be+2],a[de+3]=t[J+2]+(t[J+3]-t[J+2])*Math.sqrt(te),u[de]=n[W]*Math.min(1,te*6)*(1-te)*(1-te),u[de+1]=ie,u[de+2]=r[W],ee++}f=ee>0,m.visible=f,l.instanceCount=ee,f&&(h.uAmb.value.copy(E),h.uSun.value.copy(w),h.uTail.value.copy(A),h.uCam.value.copy(C))},shift(v,g){for(let b=0;b<li;b++)i[b*3]-=v,i[b*3+2]-=g}}}var Hr=24,BS=55,OS=12;function A1(){let i=[],e=new Float32Array(Hr*2*2),t=new Float32Array(Hr*2*3);for(let u=0;u<Hr;u++)if(e.set([u,-1,u,1],u*4),u<Hr-1){let h=u*2;i.push(h,h+1,h+2,h+1,h+3,h+2)}let n=new mt;n.setAttribute("position",new Mt(t,3)),n.setAttribute("aI",new Mt(e,2)),n.setIndex(i);let s=new Float32Array(Hr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new _e},uTime:{value:0},uNoiseTex:ke.uNoiseTex},o=new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${Hr}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${Ci}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),l=new ct(n,o);l.frustumCulled=!1,l.renderOrder=1,l.visible=!1;let a={};return{mesh:l,update(u,h,p,m,x,y,S,c){if(l.visible=y>.01,!!l.visible){for(let f=0;f<Hr;f++)u.at(h+BS+f*OS,a),s[f*4]=a.x-p,s[f*4+1]=a.y,s[f*4+2]=a.z-m,s[f*4+3]=a.h;r.uW.value=x*.85,r.uHot.value=y,r.uTime.value=S,r.uSky.value.copy(c)}}}}var Zo=1.6;function R1(i,e=null){let t=i==="high",[n,s,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,l=t?16:14,a=[4,Math.round(s*.4),Math.round(s*.65),s].filter((I,R,L)=>!R||I>L[R-1]),u=[s,Math.round((s+r)/2),r],h=(I,R)=>{let L=new ms;return L.setAttribute("position",new Je(I,3)),L.setIndex(R),L},p=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],m=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],x=new Float32Array(ar*4),y=new Float32Array(ar),S={uG:{value:x},uGM:{value:y},uGP:{value:new dt(0,1/Zo,3.1,0)},uGQ:{value:new dt(0,1.05,3,0)},uRingD:{value:new dt(s,r,0,0)}},c=[],f=(I,R,L)=>{let D={uRing:{value:new dt(0,0,L?2*n:n,L)},uRingC:{value:new dt(0,0,0,0)}},O=h(...L?m:p);O.instanceCount=0;let H=new ct(O,Gm(D,S));H.frustumCulled=!1,H.castShadow=!1,H.receiveShadow=!1,H.visible=!1,c.push({mesh:H,u:D,dA:I,dB:R,size:L?2*n:n,W:L?l:o,last:R===s||R===r})};for(let I=0;I<a.length-1;I++)f(a[I],a[I+1],0);for(let I=0;I<u.length-1;I++)f(u[I],u[I+1],1);let d=new Int32Array(64).fill(-2147483648),v=new Float32Array(64),g=new Uint8Array(64),b=I=>{let R=I&63;if(d[R]!==I){d[R]=I;let L=I*Zo,D=rr(L),O=Oi(L),H=Dt(L).country,B=Math.min(1,Math.max(0,(H-.97)/.025))*(D?Math.min(1,Math.max(0,(Math.abs(L-D.s)-13)/7)):1)*(O?Math.min(1,Math.max(0,(Math.abs(L-O.s)-38)/10)):1);v[R]=B>0?3+4*Math.round(B*15):0,g[R]=H>0?1:0}return R},M=I=>v[b(I)],T=I=>g[b(I)],_={},E=NaN,w=NaN,A=NaN,C=0;return{meshes:c.map(I=>I.mesh),hide(){for(let I=0;I<c.length;I++)c[I].mesh.visible=!1},warm(I){for(let R of c)R.mesh.visible=I,I&&(R.u.uRing.value.y=1,R.u.uRingC.value.set(1,1,R.W,0),R.mesh.geometry.instanceCount=2)},update(I,R,L,D,O,H,B){let V=Math.floor((R-3)/Zo);if(!T(V)&&!T(V+ar-1))C=0;else{if(V!==E||D!==w||O!==A){E=V,w=D,A=O,C=0;for(let z=0;z<ar;z++)I.at((V+z)*Zo,_),x[z*4]=_.x-D,x[z*4+1]=_.y,x[z*4+2]=_.z-O,x[z*4+3]=_.h,C|=y[z]=M(V+z)}S.uGP.value.set(V*Zo,1/Zo,H,R),S.uGQ.value.set(L,B,3,0)}for(let z=0;z<c.length;z++){let q=c[z];if(!C){q.mesh.visible=!1;continue}let ee=Math.floor((R+q.dA)/q.size),Ee=Math.floor((R+q.dB)/q.size)+(q.last?1:0),we=B*q.dB+3,Me=H+2.6,W=Math.min(q.W,Math.max(0,we-(Me+L))),J=Math.min(q.W,Math.max(0,we-(Me-L))),ve=W>0?Math.ceil(W/q.size)+1:0,Pe=J>0?Math.ceil(J/q.size)+1:0;q.u.uRing.value.x=ee,q.u.uRing.value.y=Ee-ee,q.u.uRingC.value.set(ve,Pe,q.W,0),q.mesh.geometry.instanceCount=(Ee-ee)*(ve+Pe),q.mesh.visible=q.mesh.geometry.instanceCount>0}}}}var Ko=72;function zS(){let i=[],e=[],t=(s,r,o,l,a,u)=>{i.push(...s,...r,...o),e.push(l,a,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new mt;return n.setAttribute("position",new Je(i,3)),n.setAttribute("aWing",new Je(e,1)),n}function C1(){let i=zS(),e=new Cn(new Float32Array(Ko*3),3),t=new Cn(new Float32Array(Ko*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new ut({side:bn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:oe.fog},uFogD:{value:.002},uCam:{value:new k}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new ns(i,n,Ko);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},l=new Qe,a=new vn,u=new Kn(0,0,0,"YXZ"),h=new k,p=new k,m=()=>r.reduce((S,c)=>S+c.birds.length,0);function x(S,c,f,d){let v=S==="small"?6+Math.floor(Math.random()*7):S==="crow"?3+Math.floor(Math.random()*5):4;if(m()+v>Ko)return;let g=45+Math.random()*85,b=(Math.random()-.5)*120,M=Math.random()<.5?1:-1,T=new k().copy(c).addScaledVector(f,g).addScaledVector(d,b-M*75);T.y=c.y+(S==="crow"?18+Math.random()*24:10+Math.random()*18);let _=S==="small"?11+Math.random()*4:8+Math.random()*3,E=new k().copy(d).multiplyScalar(M*_).addScaledVector(f,(Math.random()-.3)*_*.6),w=S==="small"?.8:1.45,A=Array.from({length:v},(C,I)=>({off:new k((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:S==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:S,c:T,vel:E,birds:A,size:w,life:60})}function y(S,c,f,d){if(r.some(b=>b.kind==="gull")||m()+4>Ko)return;let v=new k().copy(S).addScaledVector(c,70).addScaledVector(f,-d*45);v.y=S.y+18;let g=Array.from({length:4},(b,M)=>({off:new k,ph:Math.random()*6.28,fq:5.5,w:M/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:v,vel:new k,birds:g,size:1.25,life:1e9})}return{mesh:s,update(S,c,f,d,v,g,b,M,T){n.uniforms.uTime.value=c,n.uniforms.uCam.value.copy(f);let _=b>.35&&M<.3,E=oe.warm>.25&&oe.sunEl<.6&&b>.2;_&&(o.small-=S)<0&&(o.small=22+Math.random()*35,g.coast<.6&&x("small",f,d,v)),(E||_&&g.city+g.country>.6&&Math.random()<4e-4)&&(o.crow-=S)<0&&(o.crow=E?14+Math.random()*18:60,x("crow",f,d,v)),g.coast>.6&&_&&y(f,d,v,1);let w=[.1+.08*b,.11+.09*b,.15+.1*b],A=0;for(let C=r.length-1;C>=0;C--){let I=r[C];if(I.kind==="gull"?(I.c.lerp(h.copy(T).addScaledVector(d,60).addScaledVector(v,-42).setY(T.y+16),Math.min(1,S*.25)),(g.coast<.4||!_)&&(I.life=Math.min(I.life,8),I.c.y+=S*6)):I.c.addScaledVector(I.vel,S),I.life-=S,I.life<0||I.kind!=="gull"&&I.c.distanceTo(f)>300){r.splice(C,1);continue}for(let R of I.birds){if(A>=Ko)break;let L,D,O,H;I.kind==="gull"?(R.w+=S*(14/R.r),L=I.c.x+Math.cos(R.w)*R.r,O=I.c.z+Math.sin(R.w)*R.r,D=I.c.y+R.h+Math.sin(c*.4+R.ph)*2,H=Math.atan2(-Math.sin(R.w),Math.cos(R.w))):(L=I.c.x+R.off.x+Math.sin(c*.7+R.ph)*1.2,D=I.c.y+R.off.y+Math.sin(c*1.1+R.ph)*.6,O=I.c.z+R.off.z,H=Math.atan2(I.vel.x,I.vel.z)),u.set(0,H,Math.sin(c+R.ph)*.15),a.setFromEuler(u),p.setScalar(I.size),l.compose(h.set(L,D,O),a,p),s.setMatrixAt(A,l);let B=I.kind==="gull"?[.92*(.5+.5*b),.93*(.5+.5*b),.95*(.5+.5*b)]:I.kind==="crow"?[.05,.05,.07]:w;e.setXYZ(A,B[0],B[1],B[2]),t.setXY(A,R.fq,R.ph),A++}}s.count=A,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(S){n.uniforms.uFogD.value=S},shift(S,c){for(let f of r)f.c.x-=S,f.c.z-=c}}}var Pl=new k;function qi(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),a=Math.PI/4;Pl.copy(e),Pl[n]=0,Pl.normalize();let u=.5*o/(o+l),h=1-Pl.angleTo(i)/a;return Math.sign(Pl[t])===1?h*u:l/(o+l)+u+u*(1-h)}var zn=class i extends Qt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let a=new k,u=new k,h=new k(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,m=this.attributes.normal.array,x=this.attributes.uv.array,y=p.length/6,S=new k,c=.5/o;for(let f=0,d=0;f<p.length;f+=3,d+=2)switch(a.fromArray(p,f),u.copy(a),u.x-=Math.sign(u.x)*c,u.y-=Math.sign(u.y)*c,u.z-=Math.sign(u.z)*c,u.normalize(),p[f+0]=h.x*Math.sign(a.x)+u.x*r,p[f+1]=h.y*Math.sign(a.y)+u.y*r,p[f+2]=h.z*Math.sign(a.z)+u.z*r,m[f+0]=u.x,m[f+1]=u.y,m[f+2]=u.z,Math.floor(f/y)){case 0:S.set(1,0,0),x[d+0]=qi(S,u,"z","y",r,n),x[d+1]=1-qi(S,u,"y","z",r,t);break;case 1:S.set(-1,0,0),x[d+0]=1-qi(S,u,"z","y",r,n),x[d+1]=1-qi(S,u,"y","z",r,t);break;case 2:S.set(0,1,0),x[d+0]=1-qi(S,u,"x","z",r,e),x[d+1]=qi(S,u,"z","x",r,n);break;case 3:S.set(0,-1,0),x[d+0]=1-qi(S,u,"x","z",r,e),x[d+1]=1-qi(S,u,"z","x",r,n);break;case 4:S.set(0,0,1),x[d+0]=1-qi(S,u,"x","y",r,e),x[d+1]=1-qi(S,u,"y","x",r,t);break;case 5:S.set(0,0,-1),x[d+0]=qi(S,u,"x","y",r,e),x[d+1]=1-qi(S,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function vh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,a=new mt,u=0;for(let h=0;h<i.length;++h){let p=i[h],m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in p.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(p.attributes[x]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in p.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[x]===void 0&&(o[x]=[]),o[x].push(p.morphAttributes[x])}if(e){let x;if(t)x=p.index.count;else if(p.attributes.position!==void 0)x=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(u,x,h),u+=x}}if(t){let h=0,p=[];for(let m=0;m<i.length;++m){let x=i[m].index;for(let y=0;y<x.count;++y)p.push(x.getX(y)+h);h+=i[m].attributes.position.count}a.setIndex(p)}for(let h in r){let p=P1(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let m=0;m<p;++m){let x=[];for(let S=0;S<o[h].length;++S)x.push(o[h][S][m]);let y=P1(x);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(y)}}}return a}function P1(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),l=new Mt(o,t,n),a=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=a/t;for(let m=0,x=h.count;m<x;m++)for(let y=0;y<t;y++){let S=h.getComponent(m,y);l.setComponent(m+p,y,S)}}else o.set(h.array,a);a+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function kS(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new ii(i);return n.colorSpace=qt,n}var nd=4;function HS(){let t=document.createElement("canvas");t.width=128*nd,t.height=128;let n=t.getContext("2d"),s=(o,l,a,u,h)=>{n.beginPath(),n.moveTo(o+h,l),n.arcTo(o+a,l,o+a,l+u,h),n.arcTo(o+a,l+u,o,l+u,h),n.arcTo(o,l+u,o,l,h),n.arcTo(o,l,o+a,l,h),n.closePath(),n.fill()};for(let o=0;o<nd;o++){let l=o*128,a=n.createLinearGradient(0,0,0,128);a.addColorStop(0,"#9fbfe6"),a.addColorStop(.45,"#4a6690"),a.addColorStop(1,"#1d2638"),n.fillStyle=a,n.fillRect(l,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(l+14,84,30,50,9),s(l+84,84,30,50,9),n.fillRect(l+6,112,116,16),s(l+52,92,24,40,7)),o===2&&(s(l+62,66,44,70,12),n.fillRect(l+50,118,70,10)),o===3&&(s(l+70,78,40,60,11),n.fillRect(l+56,120,64,8)),n.save(),n.beginPath(),n.rect(l,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(l+40,0),n.lineTo(l+68,0),n.lineTo(l+20,128),n.lineTo(l-8,128),n.fill(),n.restore()}let r=new ii(t);return r.colorSpace=qt,r}function I1(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/nd)}return i}function L1(){let i=new hn,e=new hn,t=new hn;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new dt,new dt],s=new _e(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=b0(new gn({color:"#ffffff",vertexColors:!0,gradientMap:vl}),.85,.06,"paint-l",r),l=(te,de)=>Object.assign(new _e(te),{gloss:de}),a=l("#9fd8c8",1),u=l("#eeece4",.6),h=l("#2a2c33",.35),p=l("#1b1c20",.04),m=l("#c8ccd2",.8),x=l("#d4d8de",1.3),y=(te,de)=>{let j=te.attributes.position.count,ce=new Float32Array(j*4);for(let se=0;se<j;se++)ce.set([de.r,de.g,de.b,de.gloss],se*4);return te.setAttribute("color",new Je(ce,4)),te},S=b0(new gn({color:"#ffffff",map:HS(),gradientMap:gi}),1.2,.08,"glass-l",r),c=new gn({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:gi}),f=new gn({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:gi}),d=new gn({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:gi}),v=new gn({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:gi}),g=new gn({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:gi}),b=new xn({map:kS()}),M=new Map,T=[],_=!1,E=new Qe,w=new Kn,A=new vn,C=new k(1,1,1),I=(te,de,j,ce,se,ne=0,F=0,be=0)=>{let K=te.index?te.toNonIndexed():te;if(de.isColor&&(y(K,de),de=o),w.set(ne,F,be),A.setFromEuler(w),E.compose(new k(j,ce,se),A,C),K.applyMatrix4(E),_){T.push(K);return}M.has(de)||M.set(de,[]),M.get(de).push(K)},R=l("#16171b",0),L=l("#2b3134",.15),D=l("#b9bfc6",.9),O=l("#4d5258",.4),H=l("#9a1c22",.6),B=1.7,V=.745,z=.3,q=(te,de,j)=>{let ce=Math.min(1,Math.max(0,(j-te)/(de-te)));return ce*ce*(3-2*ce)},ee=te=>te<.8?1.8:te<1.22?1.8-.6*q(.8,1.22,te):1.2-.1*((te-1.22)/(B-1.22))**2,Ee=te=>1-.085*q(1.15,1.8,te),we=(te,de)=>{let j=V-de,ce=z+de*.6,se=ee(te)-de*(te<0?.4:1),ne=Math.max(.05,.1-de*.5),F=Math.max(.06,(te<.8?.17:.13)-de*.5),be=[[0,ce],[(j-ne)*.5,ce],[j-ne,ce]];for(let N=1;N<4;N++){let P=-Math.PI/2+N/8*Math.PI;be.push([j-ne+ne*Math.cos(P),ce+ne+ne*Math.sin(P)])}for(let N=0;N<=8;N++)be.push([j,ce+ne+N/8*(se-F-ce-ne)]);for(let N=1;N<5;N++){let P=N/10*Math.PI;be.push([j-F+F*Math.cos(P),se-F+F*Math.sin(P)])}be.push([j-F,se],[(j-F)*.5,se],[0,se]);let K=be.map(([N,P])=>[N*Ee(P),P]);for(let N=be.length-2;N>0;N--)K.push([-K[N][0],K[N][1]]);return K};{let te=[];for(let G=0;G<=6;G++){let Z=G/6*Math.PI/2;te.push([-B+.2*(1-Math.cos(Z)),.2*(1-Math.sin(Z))])}for(let G=-B+.2+.12;G<.78;G+=.13)te.push([G,0]);for(let G=.8;G<1.225;G+=.06)te.push([G,0]);for(let G of[1.3,1.39])te.push([G,0]);for(let G=6;G>=0;G--){let Z=G/6*Math.PI/2;te.push([B-.22*(1-Math.cos(Z)),.22*(1-Math.sin(Z))])}let ce=[],se=[],ne=te.map(([G,Z])=>we(G,Z)),F=ne[0].length;ne.forEach((G,Z)=>G.forEach(([Q,he])=>ce.push(Q,he,te[Z][0])));for(let G=0;G<ne.length-1;G++)for(let Z=0;Z<F;Z++){let Q=G*F+Z,he=G*F+(Z+1)%F,me=Q+F,fe=he+F;se.push(Q,he,me,he,fe,me)}for(let[G,Z]of[[0,-1],[ne.length-1,1]]){let Q=ce.length/3,he=ne[G];ce.push(0,(he[0][1]+he[F/2|0][1])/2,te[G][0]);for(let me=0;me<F;me++){let fe=G*F+me,pe=G*F+(me+1)%F;Z<0?se.push(Q,pe,fe):se.push(Q,fe,pe)}}let be=new mt;be.setAttribute("position",new Je(ce,3)),be.setIndex(se),be.computeVertexNormals();{let G=be.attributes.normal,Z=F*10+12;if(G.getX(Z)<0){for(let Q=0;Q<se.length;Q+=3){let he=se[Q+1];se[Q+1]=se[Q+2],se[Q+2]=he}be.setIndex(se),be.computeVertexNormals()}}be.setAttribute("uv",new Je(new Float32Array(ce.length/3*2),2));let K=be.toNonIndexed(),N=K.attributes.position,P=new Float32Array(N.count*4);for(let G=0;G<N.count;G+=3){let Z=(N.getY(G)+N.getY(G+1)+N.getY(G+2))/3,Q=(N.getZ(G)+N.getZ(G+1)+N.getZ(G+2))/3,he=Z>1.665&&Q<.84&&Q>-1.52?u:a;for(let me=0;me<3;me++)P.set([he.r,he.g,he.b,he.gloss],(G+me)*4)}K.setAttribute("color",new Je(P,4)),I(K,o,0,0,0)}I(new zn(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let Me=(te,de,j,ce,se)=>{let ne=new mt,F=[],be=[],K=[],N=[];for(let P=0;P<=j;P++)for(let G=0;G<=de;G++){let Z=G/de,Q=P/j,he=te(Z,Q);F.push(he[0]+he[3]*.004,he[1]+he[4]*.004,he[2]+he[5]*.004),be.push(he[3],he[4],he[5]),K.push(Z,Q)}for(let P=0;P<j;P++)for(let G=0;G<de;G++){let Z=P*(de+1)+G,Q=Z+1,he=Z+de+1,me=he+1;N.push(Z,Q,me,Z,me,he)}ne.setAttribute("position",new Je(F,3)),ne.setAttribute("normal",new Je(be,3)),ne.setAttribute("uv",new Je(K,2)),ne.setIndex(N);{let P=new k().fromArray(F,0),G=new k().fromArray(F,3),Z=new k().fromArray(F,(de+1)*3),Q=new k().fromArray(be,0);if(G.sub(P).cross(Z.sub(P)).dot(Q)<0){for(let he=0;he<N.length;he+=3){let me=N[he+1];N[he+1]=N[he+2],N[he+2]=me}ne.setIndex(N)}}return I1(ne,ce,se)},W=te=>{let j=V*(Ee(te+.01)-Ee(te-.01))/.02,ce=Math.hypot(1,j);return[1/ce,-j/ce]},J=te=>{let de=.8,j=1.22;for(let ce=0;ce<24;ce++){let se=(de+j)/2;ee(se)>te?de=se:j=se}return de};for(let te of[-1,1]){let de=te<0,j=(ce,se,ne)=>I(Me((F,be)=>{let K=1.21+be*.39,N=te>0?se(K)+(ce(K)-se(K))*F:ce(K)+(se(K)-ce(K))*F,[P,G]=W(K);return[te*V*Ee(K),K,N,te*P,G,0]},1,6,ne,!1),S,0,0,0);j(()=>.06,ce=>J(ce)-.07,2),j(()=>-.72,()=>-.08,3),j(()=>-1.42,()=>-.84,0),I(new Qt(.012,.41,.07),h,te*.731,1.405,-.01,0,0,-te*.07),I(new Qt(.014,.022,2.42),R,te*.748,1.2,-.26);for(let[ce,se]of[[.8,.64],[-.06,.42],[-.76,.64]])I(new Qt(.008,1.17-se,.012),L,te*.749,(se+1.17)/2,ce);I(new Qt(.02,.028,.13),L,te*.752,1.06,.06),I(new Qt(.02,.028,.13),L,te*.752,1.06,-.2),I(new Qt(.01,.022,.62),L,te*.749,1.155,-1.08);for(let ce of[1.12,-1.12])I(new Er(.345,18,0,Math.PI),R,te*.749,.29,ce,0,te*Math.PI/2,0),I(new Xa(.35,.024,5,18,Math.PI),h,te*.752,.29,ce,0,te*Math.PI/2,0);I(new zn(.1,.12,.2,2,.04),a,te*.83,1.24,1.02),I(new Qt(.07,.035,.05),h,te*.775,1.2,1.03),I(new zn(.16,.4,.05,3,.075),x,te*.56,.95,-1.703),I(new zn(.13,.37,.05,3,.062),c,te*.56,.95,-1.716),I(new zn(.036,.27,.02,2,.016),f,te*.56,.95,-1.742),I(new zn(.11,.06,.04,2,.02),v,te*.56,.69,-1.707)}{let te=new Mo,de=.52,j=1.15,ce=1.66,se=.07;te.moveTo(-de+se,j),te.lineTo(de-se,j),te.absarc(de-se,j+se,se,-Math.PI/2,0),te.lineTo(de,ce-se),te.absarc(de-se,ce-se,se,0,Math.PI/2),te.lineTo(-de+se,ce),te.absarc(-de+se,ce-se,se,Math.PI/2,Math.PI),te.lineTo(-de,j+se),te.absarc(-de+se,j+se,se,Math.PI,Math.PI*1.5);let ne=new Ga(te,6),F=ne.attributes.position,be=ne.attributes.uv;for(let K=0;K<F.count;K++){let N=F.getX(K),P=F.getY(K),G=(P-j)/(ce-j);be.setXY(K,(N+de)/(2*de),G),F.setX(K,N*(1-.08*G))}I(I1(ne,1),S,0,0,-B-.004,0,Math.PI,0)}I(new zn(.36,.04,.03,2,.014),d,0,1.69,-1.712),I(Me((te,de)=>{let j=1.19-de*.36,ce=ee(j),se=.56-.07*de,ne=.005,F=(ee(j+ne)-ee(j-ne))/(2*ne),be=Math.hypot(1,F);return[(te*2-1)*se,ce,j,0,1/be,-F/be]},2,7,0,!1),S,0,0,0),I(new zn(.46,.25,.012,2,.05),l("#86bdb0",.6),0,.73,-1.701),I(new rn(.34,.17),b,0,.72,-1.709,0,Math.PI,0),I(new zn(.25,.034,.03,2,.013),x,0,.9,-1.708);for(let te of[-1,1])I(new Qt(.01,.56,.006),L,te*.47,.85,-1.703);I(new Qt(.95,.01,.006),L,0,.565,-1.703),I(new zn(1.5,.2,.26,3,.08),a,0,.44,-1.6),I(new zn(1.38,.08,.22,2,.03),h,0,.33,-1.61);for(let te of[-1,1])I(new Qt(.13,.035,.01),H,te*.56,.44,-1.731);I(new Fi(.036,.036,.12,12),x,.46,.29,-1.68,Math.PI/2,0,0),I(new Fi(.024,.024,.124,10),R,.46,.29,-1.68,Math.PI/2,0,0);for(let te of[-1,1])I(new zn(.4,.26,.04,2,.06),h,te*.42,.85,1.702),I(new Fi(.105,.105,.03,16),g,te*.46,.85,1.72,Math.PI/2,0,0),I(new Fi(.055,.055,.03,12),g,te*.3,.85,1.718,Math.PI/2,0,0),I(new zn(.1,.06,.04,2,.015),v,te*.52,.66,1.705),I(new Qt(.46,.014,.014),R,te*.25,1.215,1.2,-.3,te*.12,0);I(new zn(.36,.12,.03,2,.03),R,0,.84,1.704);for(let te=0;te<3;te++)I(new Qt(.32,.012,.012),L,0,.805+te*.035,1.722);I(new zn(1.52,.24,.22,2,.07),h,0,.44,1.62),I(new Qt(.7,.07,.02),R,0,.4,1.732),I(new Qt(.34,.17,.01),l("#f0cc38",.3),0,.62,1.733),I(new Qt(.3,.05,.004),l("#2f5a2f",.1),0,.6,1.739),_=!0;for(let[te,de]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){I(new Fi(.29,.29,.19,24),p,te,.29,de,0,0,Math.PI/2),I(new Fi(.195,.195,.194,20),D,te,.29,de,0,0,Math.PI/2),I(new Fi(.155,.155,.198,16),O,te,.29,de,0,0,Math.PI/2);for(let j=0;j<5;j++){let ce=j/5*Math.PI*2+.3;I(new Qt(.202,.03,.15),D,te,.29-.085*Math.sin(ce),de+.085*Math.cos(ce),ce,0,0)}I(new Fi(.045,.045,.206,10),m,te,.29,de,0,0,Math.PI/2)}_=!1;for(let[te,de]of M){let j=new ct(vh(de),te);j.castShadow=te!==S&&te!==b&&te!==d&&te!==g&&te!==f,j.receiveShadow=!0,t.add(j)}{let te=new ct(vh(T),o);te.castShadow=te.receiveShadow=!0,i.add(te)}{let j=document.createElement("canvas");j.width=48,j.height=96;let ce=j.getContext("2d"),se=ce.createImageData(48,96);for(let F=0;F<96;F++)for(let be=0;be<48;be++){let K=Math.max(0,Math.abs((be+.5)/48-.5)*2.1-.62),N=Math.max(0,Math.abs((F+.5)/96-.5)*2.05-.78),P=Math.hypot(K/.42,N/.24),G=Math.max(0,1-P),Z=(F*48+be)*4;se.data[Z]=se.data[Z+1]=se.data[Z+2]=Math.round(255*G*G*(3-2*G)),se.data[Z+3]=255}ce.putImageData(se,0,0);let ne=new ct(new rn(2.2,4.1),new xn({color:0,alphaMap:new ii(j),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));ne.rotation.x=-Math.PI/2,ne.position.y=.03,ne.renderOrder=3,i.add(ne)}let ve=(()=>{let j=document.createElement("canvas");j.width=16,j.height=64;let ce=j.getContext("2d"),se=ce.createImageData(16,64);for(let ne=0;ne<64;ne++)for(let F=0;F<16;F++){let be=1-(ne+.5)/64,K=((F+.5)/16-.5)*2,N=Math.exp(-K*K*5)*Math.min(1,be/.06)*Math.pow(1-be,1.6)*(.78+.22*Math.sin(be*31+K*2)),P=(ne*16+F)*4;se.data[P]=se.data[P+1]=se.data[P+2]=Math.round(255*Math.max(0,N)),se.data[P+3]=255}return ce.putImageData(se,0,0),new xn({map:new ii(j),color:16726576,transparent:!0,opacity:0,blending:is,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})})();{let te=[];for(let j of[-.56,.56]){let ce=new rn(.22,1.5);ce.rotateX(-Math.PI/2),ce.translate(j,.035,-1.72-.75),te.push(ce)}let de=new ct(vh(te),ve);de.renderOrder=3,de.visible=!1,i.add(de),ve.mesh=de}let Pe=new hn;Pe.position.set(.02,1.19,-1.716),t.add(Pe);let ie=new Qt(.52,.026,.02);ie.translate(.27,0,0);let xe=new ct(y(ie,h),o);xe.rotation.z=.18,Pe.add(xe);let Be=0,ze=new $a(16773328,0,70,.55,.65,1.2);ze.position.set(0,.8,1.6),ze.target.position.set(0,0,18),t.add(ze,ze.target);let Ae={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},Ge=(te,de)=>de*Math.tanh(te/de);return{group:i,lamps:n,lampCol:s,head:ze,update(te,de,j,ce=0,se=null,ne=0){if(se){let F=Ge(-se.lat*.016,.045),be=Ge(-se.lon*.008,.03);Ae.rv+=((F-Ae.roll)*55-Ae.rv*8)*te,Ae.roll+=Ae.rv*te,Ae.pv+=((be-Ae.pitch)*60-Ae.pv*9)*te+se.kick,Ae.pitch+=Ae.pv*te,Ae.yv+=((se.road-Ae.y)*85-Ae.yv*8)*te+se.jolt,Ae.y+=Ae.yv*te,e.rotation.set(Ae.pitch,0,Ae.roll),e.position.y=.35+Ae.y}if(Ae.br+=((se?se.brake:0)-Ae.br)*Math.min(1,te*14),c.emissiveIntensity=.35+j*3.2+Ae.br*(1.7+j*2),d.emissiveIntensity=Ae.br*(2.4+j*1.6),f.emissiveIntensity=1+j*3+Ae.br*(2+j*2),ve.opacity=ne*Math.min(1,.22+c.emissiveIntensity*.22),ve.mesh.visible=ve.opacity>.01,ce>.15||Be%2.6>.01){Be+=te;let F=Be%2.6/2.6,be=N=>N*N*(3-2*N),K=F<.25?be(F/.25):F<.5?be(1-(F-.25)/.25):0;xe.rotation.z=.18+K*2.5,ce<=.15&&F>=.5&&(Be=0)}ze.intensity=j*60,g.emissiveIntensity=.15+j*2.6}}}var $o={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ii=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},VS=new Qs(-1,1,1,-1,0,1),id=class extends mt{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}},GS=new id,fr=class{constructor(e){this._mesh=new ct(GS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,VS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Jo=class extends Ii{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pr.clone(e.uniforms),this.material=new ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new fr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Il=class extends Ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},xh=class extends Ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var yh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Le);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jo($o),this.copyPass.material.blending=si,this.timer=new Ja}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Il!==void 0&&(o instanceof Il?n=!0:o instanceof xh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var _h=class extends Ii{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new _e}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var D1={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var jo=class i extends Ii{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new _e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,o,{type:Rn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new Yt(r,o,{type:Rn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new Yt(r,o,{type:Rn,depthBuffer:!1});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let l=D1;this.highPassUniforms=Pr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ut({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pr.clone($o.uniforms),this.blendMaterial=new ut({uniforms:this.copyUniforms,vertexShader:$o.vertexShader,fragmentShader:$o.fragmentShader,premultipliedAlpha:!0,blending:is,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _e,this._oldClearAlpha=1,this._basic=new xn,this._fsQuad=new fr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[a];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let l=t[o],a=o+1<e?t[o+1]:0,u=l+a;s.push((o*l+(o+1)*a)/u),r.push(u)}return new ut({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};jo.BlurDirectionX=new Le(1,0);jo.BlurDirectionY=new Le(0,1);var sd=class extends Ii{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Yt(4,4,{type:Rn,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),this.mat=new ut({uniforms:{tDiffuse:{value:null},uTexel:{value:new Le(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new fr(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},WS={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Le(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Le(1/1280,1/720)},uLo:{value:new k(-.014,0,.03)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function N1(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new Le),l=new Yt(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:Rn,samples:n}),a=new yh(i,l);a.addPass(new _h(e,t));let u=new sd;a.addPass(u);let h=new jo(new Le(o.x*r*.5,o.y*r*.5),.42,.55,.86);a.addPass(h);let p=new Jo(WS);p.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},p.material.toneMapped=!1,a.addPass(p);let m=a.render.bind(a);return a.render=x=>{p.uniforms.toneMappingExposure.value=i.toneMappingExposure,m(x)},{composer:a,bloom:h,grade:p,refl:u}}function U1(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let j=0;j<2;j++){let ce=s.getChannelData(j);for(let se=0;se<n;se++)ce[se]=(Math.random()*2-1)*Math.pow(1-se/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let a=e.createGain();a.gain.value=.11,l.connect(a),a.connect(t),a.connect(r);let u=(j,ce)=>{let se=e.createBuffer(1,e.sampleRate*j,e.sampleRate),ne=se.getChannelData(0),F=0;for(let be=0;be<ne.length;be++)ce?(F=(F+.02*(Math.random()*2-1))/1.02,ne[be]=F*3.5):ne[be]=Math.random()*2-1;return se},h=(j,ce,se)=>{let ne=e.createBufferSource();ne.buffer=j,ne.loop=!0;let F=e.createBiquadFilter();F.type=ce,F.frequency.value=se;let be=e.createGain();return be.gain.value=0,ne.connect(F),F.connect(be),be.connect(t),ne.start(),{f:F,g:be}},p=h(u(2,!0),"lowpass",400),m=h(u(3,!1),"lowpass",700);m.g.connect(r);let x=h(u(2,!1),"bandpass",5200);x.f.Q.value=6;let y=h(u(2,!0),"lowpass",240),S=h(u(3,!1),"bandpass",2600);S.f.Q.value=.35;let c=h(u(2,!0),"lowpass",520),f=h(u(2,!1),"bandpass",1500);f.f.Q.value=.7;let d=e.createBiquadFilter(),v=e.createGain(),g=e.createOscillator(),b=e.createOscillator(),M=e.createGain();g.type="sawtooth",b.type="triangle",d.type="lowpass",d.frequency.value=320,d.Q.value=.6,v.gain.value=0,M.gain.value=.5,g.connect(d),b.connect(M),M.connect(d),d.connect(v),v.connect(t),g.start(),b.start();let T=h(u(3,!1),"bandpass",750);T.f.Q.value=.6;let _=h(u(3,!0),"lowpass",420),E=h(u(2,!0),"lowpass",140),w=u(.03,!1),A=0;function C(j,ce){let se=e.createBufferSource(),ne=e.createBiquadFilter(),F=e.createGain();se.buffer=w,ne.type="bandpass",ne.frequency.value=1800+Math.random()*2600,ne.Q.value=1.2,F.gain.setValueAtTime(ce*(.02+Math.random()*.03),j),F.gain.exponentialRampToValueAtTime(1e-4,j+.03),se.connect(ne),ne.connect(F),F.connect(t),se.start(j),se.stop(j+.04)}let I=0,R=0;function L(j,ce){let se=e.createOscillator(),ne=e.createOscillator(),F=e.createGain(),be=e.createBiquadFilter();be.type="bandpass",be.frequency.value=1150,be.Q.value=2.2,se.type="square",se.frequency.value=745,ne.type="triangle",ne.frequency.value=1490,F.gain.setValueAtTime(0,j),F.gain.linearRampToValueAtTime(.085*ce,j+.004),F.gain.exponentialRampToValueAtTime(1e-4,j+.3),se.connect(be),ne.connect(be),be.connect(F),F.connect(t),F.connect(r),se.start(j),ne.start(j),se.stop(j+.33),ne.stop(j+.33)}function D(j,ce){let se=e.createOscillator(),ne=e.createGain();se.type="sine",se.frequency.setValueAtTime(110,j),se.frequency.exponentialRampToValueAtTime(48,j+.12),ne.gain.setValueAtTime(1e-4,j),ne.gain.linearRampToValueAtTime(.22*ce,j+.006),ne.gain.exponentialRampToValueAtTime(1e-4,j+.17),se.connect(ne),ne.connect(t),se.start(j),se.stop(j+.2)}let O=e.createGain();O.gain.value=1,O.connect(t);let H=e.createGain();H.gain.value=.35,O.connect(H),H.connect(r);let B=(j=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return O;let ce=e.createStereoPanner();return ce.pan.value=j,ce.connect(O),ce};function V(j,ce,se,ne,F,be,K="sine",N=0){let P=e.createOscillator(),G=e.createGain();if(P.type=K,P.frequency.setValueAtTime(ce,j),P.frequency.exponentialRampToValueAtTime(se,j+ne),N){let Z=e.createOscillator(),Q=e.createGain();Z.frequency.value=N,Q.gain.value=ce*.012,Z.connect(Q),Q.connect(P.frequency),Z.start(j),Z.stop(j+ne+.05)}return G.gain.setValueAtTime(1e-4,j),G.gain.linearRampToValueAtTime(F,j+Math.min(.04,ne*.25)),G.gain.setValueAtTime(F,j+ne*.7),G.gain.exponentialRampToValueAtTime(1e-4,j+ne),P.connect(G),G.connect(be),P.start(j),P.stop(j+ne+.02),G}function z(j,ce){let se=B(),ne=2+Math.floor(Math.random()*4),F=3200+Math.random()*1500;for(let be=0;be<ne;be++){let K=j+be*(.09+Math.random()*.07);V(K,F,F*(1.2+Math.random()*.3),.06,ce*.022,se)}}function q(j,ce){let se=B();V(j,1120,1390,1,ce*.03,se,"sine",5.5),V(j+1.15,2350,2150,.14,ce*.03,se),V(j+1.32,1700,1520,.13,ce*.028,se),V(j+1.5,2750,2480,.36,ce*.032,se)}function ee(j,ce){let se=B(),ne=1+Math.floor(Math.random()*3);for(let F=0;F<ne;F++){let be=j+F*.48,K=e.createOscillator(),N=e.createBiquadFilter(),P=e.createGain();K.type="sawtooth",K.frequency.setValueAtTime(560,be),K.frequency.exponentialRampToValueAtTime(420,be+.32),N.type="bandpass",N.frequency.value=1150,N.Q.value=1.6,P.gain.setValueAtTime(1e-4,be),P.gain.linearRampToValueAtTime(ce*.03,be+.03),P.gain.exponentialRampToValueAtTime(1e-4,be+.36),K.connect(N),N.connect(P),P.connect(se),K.start(be),K.stop(be+.4)}}function Ee(j,ce){let se=B(),ne=2+Math.floor(Math.random()*2);for(let F=0;F<ne;F++)V(j+F*.42,1750,1150,.36,ce*.022,se,"triangle",11)}function we(j,ce){let se=B(),ne=e.createOscillator(),F=e.createBiquadFilter(),be=e.createGain(),K=240+Math.random()*220,N=5+Math.floor(Math.random()*4);ne.type="square",ne.frequency.value=K,F.type="bandpass",F.frequency.value=K*2.4,F.Q.value=3,be.gain.setValueAtTime(1e-4,j);for(let P=0;P<N;P++){let G=j+P*.038;be.gain.linearRampToValueAtTime(ce*.014,G+.008),be.gain.linearRampToValueAtTime(1e-4,G+.028)}ne.connect(F),F.connect(be),be.connect(se),ne.start(j),ne.stop(j+N*.038+.05)}function Me(j,ce){let se=B(),ne=4300+Math.random()*700;for(let F=0;F<3;F++)V(j+F*.055,ne,ne*1.01,.035,ce*.009,se)}function W(j,ce){let se=B(0);for(let[ne,F,be]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let K=e.createOscillator(),N=e.createGain();K.type="sine",K.frequency.value=ne,K.detune.value=(Math.random()-.5)*8,N.gain.setValueAtTime(1e-4,j),N.gain.linearRampToValueAtTime(ce*.05*F,j+.03),N.gain.exponentialRampToValueAtTime(1e-4,j+be),K.connect(N),N.connect(se),K.start(j),K.stop(j+be+.1)}}function J(j,ce){let se=B();for(let ne of[j,j+.22])V(ne,2650,2600,.5,ce*.018,se),V(ne,3950,3900,.35,ce*.008,se)}let ve={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Pe=j=>j>1e-4?-Math.log(1-Math.random()*.98)/j:1e9,ie=j=>440*Math.pow(2,(j-69)/12),xe=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Be=[72,74,76,79,81,84,86,88],ze=0,Ae=e.currentTime+.2,Ge=e.currentTime+3;function te(j){let ce=xe[ze++%xe.length],se=11;for(let ne of ce)for(let F of[-5,5]){let be=e.createOscillator(),K=e.createGain();be.type=F<0?"sine":"triangle",be.frequency.value=ie(ne),be.detune.value=F,K.gain.setValueAtTime(0,j),K.gain.linearRampToValueAtTime(.18,j+3.5),K.gain.setValueAtTime(.18,j+se-4),K.gain.linearRampToValueAtTime(0,j+se+1),be.connect(K),K.connect(l),be.start(j),be.stop(j+se+1.2)}}function de(j){let ce=Be[Math.floor(Math.random()*Be.length)],se=e.createOscillator(),ne=e.createOscillator(),F=e.createGain(),be=e.createGain();se.type=ne.type="sine",se.frequency.value=ie(ce),ne.frequency.value=ie(ce)*2.01,be.gain.value=.25,ne.connect(be),be.connect(F),F.gain.setValueAtTime(0,j),F.gain.linearRampToValueAtTime(.05,j+.02),F.gain.exponentialRampToValueAtTime(1e-4,j+4),se.connect(F),F.connect(r),F.connect(t),se.start(j),ne.start(j),se.stop(j+4.2),ne.stop(j+4.2)}return{ac:e,muted:!1,tyres:f,engG:v,bump(j){D(e.currentTime+.01,j)},update(j,ce,se,ne={}){let F=e.currentTime;if((ne.bell||0)>.01)for(I<F&&(I=F+.02);I<F+.12;)L(I,ne.bell),I+=.41;let be=ne.rain||0;S.g.gain.setTargetAtTime(be*.05,F,.6),c.g.gain.setTargetAtTime(be*.05,F,.6);let K=(ne.wetRoad||0)*Math.min(1,j)**1.5,N=.8+.2*Math.sin(F*2.3)*Math.sin(F*.9+1);if(f.g.gain.setTargetAtTime(K*.045*N,F,.4),f.f.frequency.setTargetAtTime(900+1500*Math.min(j,2),F,.4),be>.05&&ne.roof)for(A<F&&(A=F+.02);A<F+.12;)C(A,be),A+=.04+Math.random()*.12/be;let P=ne.water||0,G=.6+.4*Math.sin(F*1.3)*Math.sin(F*.37);T.g.gain.setTargetAtTime(P*.035*G,F,.25),T.f.frequency.setTargetAtTime(600+400*G,F,.25);let Z=.35+.65*Math.pow(.5+.5*Math.sin(F*.23)*Math.sin(F*.071+2),2),Q=ne.rush||0;_.g.gain.setTargetAtTime(((ce.mountain||0)+(ce.snow||0)*.7)*.06*Z+Q*.055,F,.8),_.f.frequency.setTargetAtTime(260+420*Z+Q*500,F,.8);let he=ne.train||0;if(y.g.gain.setTargetAtTime(he*.16,F,.2),he>.04)for(R<F&&(R=F+.02);R<F+.12;)D(R,he),D(R+.15,he*.8),R+=1.2;for(;Ae<F+1;)te(Ae),Ae+=8;Ge<F+.5&&(de(Ge),Ge+=1.5+Math.random()*4.5);let me=ne.tunnel||0;{let Y=ne.speed||0,Ie=ne.load||0,ge=850+2400*(1-Math.exp(-Y/15))+Math.max(0,Y-25)*60+Ie*1300,Fe=ge/40;g.frequency.setTargetAtTime(Fe,F,.25),b.frequency.setTargetAtTime(Fe*2,F,.25),d.frequency.setTargetAtTime(200+ge*.08+Ie*260,F,.3),v.gain.setTargetAtTime((.008+.01*Math.min(1,Y/15)+.024*Ie)*(1-.6*(ne.rush||0))*(ne.roof===!1?.5:1)*(1+.7*me),F,.3)}p.g.gain.setTargetAtTime((.03+j*.06)*(1+1.6*me),F,.35),p.f.frequency.setTargetAtTime((250+j*500)*(1+.5*me),F,.35),E.g.gain.setTargetAtTime(me*.07,F,.4),o.gain.setTargetAtTime(.55+.6*me,F,.4);let fe=.5+.5*Math.sin(F*.55)*Math.sin(F*.21+1);m.g.gain.setTargetAtTime(ce.coast*(.012+fe*.05),F,.3),m.f.frequency.setTargetAtTime(400+fe*900,F,.3);let pe=1-Math.min(1,be*1.4),De=1-se,Ke=ne.dusk||0,Ne=ce.snow||0,Ue=1-Ne,Oe={sparrow:se*pe*.22*(.3+ce.city*.5+ce.sakura+ce.country*.8+ce.coast*.2+(ce.mountain||0)*.5)*(1-Ne*.8),uguisu:se*pe*ce.sakura*.06,crow:pe*(Ke*.14+se*(ce.city+ce.country+(ce.mountain||0)*1.5+Ne*2.5)*.012),gull:se*ce.coast*pe*.16,frog:De*(ce.country*5+ce.sakura*.6+ce.coast*.3)*(1+be*.6)*Ue,cricket:De*pe*(1.6-ce.city*1.1+(ce.mountain||0)*.8)*Ue,bike:se*pe*ce.city*.014,bell:Ne*.022+(ce.mountain||0)*.006},tt={sparrow:z,uguisu:q,crow:ee,gull:Ee,frog:we,cricket:Me,bike:J,bell:W};for(let Y in Oe)F<ve[Y]||(Oe[Y]>1e-4&&tt[Y](F+.05,.6+Math.random()*.4),ve[Y]=F+Math.max(.12,Pe(Oe[Y]||1e-6)));let at=.5+.5*Math.sin(F*7)*Math.sin(F*.4);x.g.gain.setTargetAtTime((ce.country+ce.sakura*.3)*se*.006*at*(1-(ce.snow||0)),F,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function F1(i){let t=new rn(.075,.05),n=new xn({color:16777215,side:bn}),s=new ns(t,n,420);s.frustumCulled=!1,s.count=0;let r=new _e("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(g=>new _e(g));for(let g=0;g<420;g++)s.setColorAt(g,r);let l=Array.from({length:420},()=>({p:new k(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),a=new Qe,u=new vn,h=new Kn,p=new k(1,1,1),m=new k,x=90,y=new Float32Array(x*3),S=Array.from({length:x},()=>({p:new k(1e9,0,0),ph:Math.random()*6.28})),c=new mt;c.setAttribute("position",new Mt(y,3));let f=new _o({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:is,opacity:0}),d=new Ia(c,f);d.frustumCulled=!1;let v=(g,b,M,T,_)=>{let E=_?8+Math.random()*42:-4+Math.random()*50,w=(Math.random()-.5)*40;g.p.set(b.x+M.x*E+T.x*w,b.y-1+Math.random()*9,b.z+M.z*E+T.z*w)};return{group:[s,d],shift(g,b){for(let M of l)M.p.x-=g,M.p.z-=b;for(let M of S)M.p.x-=g,M.p.z-=b},update(g,b,M,T,_,E,w,A,C,I=0){let R=Math.floor(420*Math.min(1,E*1.1+I*.55));n.color.setScalar(1-.72*A);let L=!1;s.count=R;for(let O=0;O<R;O++){let H=l[O];m.subVectors(H.p,M);let B=m.x*T.x+m.z*T.z,V=m.x*_.x+m.z*_.z;if(H.p.x>1e8||B<-6||B>55||Math.abs(V)>24||H.p.y<w-.5){v(H,M,T,_,H.p.x<1e8);let z=Math.random()*(E+I)<I;(z!==H.leaf||z)&&(H.leaf=z,s.setColorAt(O,z?o[Math.floor(Math.random()*o.length)]:r),L=!0)}H.p.y-=H.v*g,H.p.x+=Math.sin(b*.7+H.ph)*.4*g+.25*g,H.p.z+=Math.cos(b*.5+H.ph)*.3*g,h.set(b*H.sp+H.ph,b*H.sp*.7,H.ph),u.setFromEuler(h),p.setScalar(H.leaf?1.9:1),a.compose(H.p,u,p),s.setMatrixAt(O,a)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let D=A*C;if(f.opacity=D,d.visible=D>.01,d.visible){for(let O=0;O<x;O++){let H=S[O];m.subVectors(H.p,M);let B=m.x*T.x+m.z*T.z,V=m.x*_.x+m.z*_.z;if(H.p.x>1e8||B<-4||B>60||Math.abs(V)>30){let z=2+Math.random()*55,q=(Math.random()-.5)*55;H.p.set(M.x+T.x*z+_.x*q,w+.3+Math.random()*2.2,M.z+T.z*z+_.z*q)}H.p.x+=Math.sin(b*.6+H.ph*3)*.3*g,H.p.y+=Math.sin(b*.9+H.ph)*.2*g,H.p.z+=Math.cos(b*.5+H.ph*2)*.3*g,y[O*3]=H.p.x,y[O*3+1]=H.p.y,y[O*3+2]=H.p.z}c.attributes.position.needsUpdate=!0}}}}var ot=new URLSearchParams(location.search),Qo=ot.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();Qo&&document.body.classList.add("embed");ot.has("shot")&&document.body.classList.add("shot");ym(ot.has("seed")?parseInt(ot.get("seed")):Math.random()*1e9|0);bm(ot.get("env")||"city");var kn=i=>document.getElementById(i),ea=i=>{let e=kn("loading");e&&(e.textContent=i)};async function XS(){await new Promise(Se=>setTimeout(Se,30));let i=kn("c"),e=new Wu({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ot.get("q")||(Qo||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?Qo?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=qt,e.toneMapping=ja,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=wr,e.debug.checkShaderErrors=ot.has("debug");let r=ot.get("clouds")||"painted",o=n==="high"&&innerHeight*s>=900?"hi":"lo",l=r==="old"?Promise.resolve(null):i1(o),a=l1(o),u=u1(n==="high"&&innerHeight*s>=560?"hi":"lo"),h=o1(o),p=s1(n==="high"&&innerHeight*s>=560?"hi":"lo"),m=n==="high"&&innerHeight*s>=560?"hi":"lo",x=r1(m),y=new Sr;y.fog=new Aa(13032946,.0019,700);let S=new Vn(52,innerWidth/innerHeight,.5,7e3),c=new wo(16777215,3);c.castShadow=!0;let f=n==="low"?1024:n==="mid"?1536:2048;c.shadow.mapSize.set(f,f),y0(ot.has("pcf")?parseInt(ot.get("pcf")):1);let d=62,v=c.shadow.camera,g=new Qe,b=new Qe;Object.assign(v,{left:-d,right:d,top:d,bottom:-d,near:1,far:420});let M=new k(0,1,0),T=new k,_=new k,E=new k,w=new k(0,1,0),A=new k(0,150,60),C=new k,I=new k,R=null,L=0,D=0,O=0;c.shadow.updateMatrices=function(){v.position.copy(A),v.lookAt(C),v.updateMatrixWorld(),v.updateProjectionMatrix(),b.multiplyMatrices(v.matrixWorldInverse,g).multiply(v.matrixWorld),v.projectionMatrix.multiply(b),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),this._updateMatrix(v,this.matrix,this._frustum)};let H=!0;c.shadow.bias=-4e-4;let B=()=>{c.shadow.normalBias=ot.has("nb")?parseFloat(ot.get("nb")):1.5*2*d/c.shadow.mapSize.x};B();{let[Se,gt]=(ot.get("graze")||"0,0.12").split(",").map(Number);Nm(Se,gt)}y.add(c,c.target);let V=new wo(16777215,0);V.castShadow=n!=="low"&&!ot.has("nocarsh");{let Se=ot.has("carsm")?parseInt(ot.get("carsm")):n==="high"?512:384;V.shadow.mapSize.set(Se,Se)}if(Object.assign(V.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),V.shadow.bias=-2e-4,V.shadow.normalBias=.025,y.add(V,V.target),V.castShadow){let Se=c.shadow.getFrustum(),gt=V.shadow.getFrustum();for(let it of[ct,Pa]){let un=it.prototype.intersectsFrustum;it.prototype.intersectsFrustum=function(ti){return ti===gt?this.userData.car===!0:(ti!==Se||this.userData.car!==!0)&&un.call(this,ti)}}}let z=new Za(10799359,13154464,1.6);y.add(z),ea("painting the town\u2026"),await new Promise(Se=>setTimeout(Se,10));let q=Qm();fg(q);let ee=await p,Ee=await x,we=eg(q,m,ee,Ee);we.houses&&Ig(Ee.types),ee&&ee.img.close(),Ee&&Ee.img.close();let Me=tg(e);bg(Me.cells),ke.uTuftV.value.set(...Me.tuftV);let W=Wm(q.textures(e),Me.tex,we.textures(e)),J=Om();J.update(e,0,0,0,0),ea("painting the clouds\u2026"),await new Promise(Se=>setTimeout(Se,10)),Mg(ot.has("leafd")?parseFloat(ot.get("leafd")):n==="high"?.72:.62);{let Se=await u;if(Se){ki.cells=Se.cells.filter(un=>un.kind==="leaf"),Se.tex.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy());let gt=M0(Se.tex);W.gleaf=gt.mat,W.gleafDepth=gt.depth;let it=Se.cells.filter(un=>un.kind==="blossom");it.length&&(ki.bcells=it,W.gblossom=M0(Se.tex,{blossom:!0}).mat)}}Ag(),kg();let ve=[2.1,1.75,3.2],Pe=[1.42,1.47,1.74],ie=[.95,1.05,1.8],xe=[.91,1.34,1.2],Be=[1.88,1.28,2],ze=[1.97,1.54,1.62];{let Se=await h;Se&&(Se.tex.anisotropy=Math.min(n==="high"?16:4,e.capabilities.getMaxAnisotropy()),vi.tex=Se.tex,vi.uFieldK.value.set(1/Se.tile[0],1/Se.tile[1]),vi.uFieldM.value.set(...Se.mean))}let Ae=new Ju;W.shore=p1(n!=="high"),W.surf=g1(),dh.n=n==="high"?8:4;let Ge=m1(),te=R1(n,ot.has("grass")?ot.get("grass").split(",").map(Number):null);for(let Se of te.meshes)y.add(Se);let de=new mh(y,Ae,W,Ge),j=Zg();y.add(j);let ce=Jg();y.add(ce.group);let se=d1();y.add(se.mesh);let ne=L1();ne.group.rotation.order="YXZ",y.add(ne.group),ne.group.traverse(Se=>{Se.userData.car=!0});let F=F1(W.glowTex);F.group.forEach(Se=>y.add(Se));let be=ot.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),K=N1(e,y,S,{msaa:be==="msaa"?n==="high"?4:2:0,fxaa:be==="fxaa"});ke.uReflTex.value=K.refl.rt.texture;let N=await l,P=N?a1(N,K):null;P&&y.add(P.mesh);let G=!P||r==="both"?$g(Kg(e)):null;G&&y.add(G.group);let Z=await a,Q=Z?c1(Z,K,y.fog.color):null;Q&&y.add(Q.mesh);let he=new k,me=new k,fe=ot.get("refl")||"auto",pe=ot.has("backlit")?parseFloat(ot.get("backlit")):1,De=[7.5,3,2.3],Ke=[1.7,1.15,1],Ne=.7,Ue=ot.has("lightson")?parseFloat(ot.get("lightson")):-1,Oe=new k,tt=ot.has("haze")?parseFloat(ot.get("haze")):1,at=Ym();y.add(at.group);let Y=Zm();y.add(Y.group);let Ie=S1(ot),ge=T1(),Fe=E1();y.add(ge.mesh,Fe.mesh);let He=w1();y.add(He.mesh);let Re=A1();y.add(Re.mesh);let nt=new _e,et=new _e,Gt=new dt,Ct=C1();y.add(Ct.mesh);let Hn=Ie.W.rain,ci=.4,ta=5.5,ue={s:Math.max(100,parseFloat(ot.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Jt(parseFloat(ot.get("t"))||.4,0,.999),todPaused:ot.has("freeze"),dist:0,spray:ot.has("nospray")?0:1,grass:1,pclouds:1,band:1,cam:{low:1,eye:2,top:3,film:4}[ot.get("cam")]??(Qo?4:0)},Qn=!1;P&&(P.opening=["sakura","city"].includes(fn(ue.s))?"center":"flank"),ea("building the road\u2026"),await new Promise(Se=>setTimeout(Se,10));let na=Qo?620:de.ahead;de.ahead=260;let bh=ot.has("detail")?parseFloat(ot.get("detail")):380,Ll=ot.has("farleaf")?parseFloat(ot.get("farleaf")):540;for(;de.update(ue.s,1e9););de.flush(),de.ahead=na;{ea("preparing the light\u2026"),await new Promise(tn=>setTimeout(tn,10));let Se=new hn,gt=new mt;gt.setAttribute("position",new Je([0,0,0,.01,0,0,0,.01,0],3)),gt.setAttribute("normal",new Je([0,1,0,0,1,0,0,1,0],3)),gt.setAttribute("uv",new Je([0,0,1,0,0,1],2)),gt.setAttribute("color",new Je([1,1,1,1,1,1,1,1,1],3));let it=new mt;it.setAttribute("position",gt.attributes.position);let un=new Set([W.shore,W.surf,Ge]),ti=[W.color,W.atlas,W.foliage,W.leaf,W.lamp,W.sig,W.sodium,W.decal,W.pool,W.shore,W.surf,Ge,...W.gleaf?[W.gleaf]:[],...W.gblossom?[W.gblossom]:[]];for(let tn=0;tn<Ai.length;tn++)ti.push(xl([Ai[tn]])),ti.push(xl([Ai[tn],Ai[(tn+1)%Ai.length]]));for(let tn of ti){let Yi=new ct(un.has(tn)?it:gt,tn);Yi.castShadow=Yi.receiveShadow=!un.has(tn),Yi.frustumCulled=!1,(tn===W.gleaf||tn===W.gblossom)&&(Yi.customDepthMaterial=W.gleafDepth),tn===W.atlas&&(Yi.customDepthMaterial=W.atlasDepth),Se.add(Yi)}Se.position.set(0,0,0),y.add(Se),c.target.position.set(0,0,0),c.position.set(0,150,60);let En=[ge.mesh,Fe.mesh,He.mesh,Re.mesh,Y.group,at.group,se.mesh].filter(tn=>!tn.visible);for(let tn of En)tn.visible=!0;te.warm(!0),e.setRenderTarget(K.composer.readBuffer),e.compile(y,S),e.render(y,S),e.setRenderTarget(null);for(let tn of En)tn.visible=!1;te.warm(!1),y.remove(Se),gt.dispose(),it.dispose(),K.bloom.enabled=K.refl.enabled=!0,K.composer.render(0),K.bloom.enabled=K.refl.enabled=!1}let Pt={k:Math.ceil((ue.s-Dr)/Lr),phase:"idle",raise:1,decided:!1,t2:0},vt={},Ft={},Bt={},Dl=ot.has("yaw")||ot.get("cam")==="top",ls=new k,ks=new k,Dn=new k,dr=!1,Vr=new k,ia=new k,Mh=kn("spd"),Sh=kn("dist"),Eh=kn("clock"),pr=kn("zone"),U=kn("start"),$=kn("hint"),re=null,ae=null,le=0,qe=0;function $e(Se){!Qn||Se===ae||(ae=Se,pr.querySelector(".jp").textContent=hl[Se].jp,pr.querySelector(".en").textContent=hl[Se].en,pr.classList.add("on"),clearTimeout(le),le=setTimeout(()=>pr.classList.remove("on"),5200))}function We(){if(!Qn){if(Qn=!0,document.body.classList.remove("pre"),!ot.has("auto"))try{re=U1(),re&&re.ac.resume()}catch{re=null}U.style.opacity=0,setTimeout(()=>U.remove(),1500),Qo||($.style.opacity=.75,setTimeout(()=>$.style.opacity=0,9e3))}}let Xe={};addEventListener("keydown",Se=>{Xe[Se.key]=!0,(Se.key==="m"||Se.key==="M")&&bt(),(Se.key==="t"||Se.key==="T")&&je(),(Se.key==="c"||Se.key==="C")&&Xt(),(Se.key==="r"||Se.key==="R")&&It(),!Qn&&(Se.key===" "||Se.key==="Enter")&&We()}),addEventListener("keyup",Se=>{Xe[Se.key]=!1});let Ve=null;i.addEventListener("pointerdown",Se=>{Ve={id:Se.pointerId,x:Se.clientX,y:Se.clientY,sy:Se.clientY,sc:ue.mult}});let xt=Se=>Jt(Se.sc*Math.exp(-((Se.y-Se.sy)/innerHeight)*3.4),ci,ta);addEventListener("pointermove",Se=>{Ve&&Se.pointerId===Ve.id&&(Ve.x=Se.clientX,Ve.y=Se.clientY,ue.mult=xt(Ve))}),addEventListener("pointerup",()=>{Ve=null}),addEventListener("pointercancel",()=>{Ve=null}),i.addEventListener("touchstart",Se=>{let gt=Se.changedTouches[0];Ve={id:"touch",x:gt.clientX,y:gt.clientY,sy:gt.clientY,sc:ue.mult},Se.preventDefault()},{passive:!1}),i.addEventListener("touchmove",Se=>{if(!Ve)return;let gt=Se.changedTouches[0];Ve.x=gt.clientX,Ve.y=gt.clientY,ue.mult=xt(Ve),Se.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{Ve=null}),i.addEventListener("touchcancel",()=>{Ve=null});function bt(){re&&(re.toggle(),kn("snd").style.opacity=re.muted?.4:1)}function je(){ue.todPaused=!ue.todPaused,kn("tim").style.opacity=ue.todPaused?.4:1}let Ut=[0,1,2,4],pn={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function Xt(){ue.cam=Ut[(Ut.indexOf(ue.cam)+1)%Ut.length],kn("cam").textContent=pn[ue.cam]||"\u25D0",ue.cam===4&&Ze()}let kt=["chase","side","road","crane","eye","side","road"],_t={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function Ze(){let Se;do Se=kt[Math.floor(Math.random()*kt.length)];while(Se===_t.last);{let gt=zi(ue.s+60);gt&&Math.abs(ue.s+60-gt.s)<on+120&&(Se=Math.random()<.6?"chase":"eye")}if(Object.assign(_t,{type:Se,last:Se,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),Se==="road"){let gt=ue.s+40+Math.random()*18,it=On(gt,"rw"),un=Math.random()<.6?-1:1,ti=un*(it+(un<0?.9:1.3)),En=Ae.at(gt,{}),tn=En.y+_s(gt,ti,En.y,it);_t.anchor={x:En.x+En.rx*ti,y:Math.max(tn,En.y)+1.05,z:En.z+En.rz*ti,s:gt}}dr=!1}let Nn={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function It(){kn("wx").textContent=Nn[Ie.cycle()]}kn("wx").textContent=Nn[Ie.W.mode],kn("cam").textContent=pn[ue.cam]||"\u25D0",ue.cam===4&&Ze(),kn("wx").onclick=Se=>{Se.stopPropagation(),It()},kn("snd").onclick=Se=>{Se.stopPropagation(),bt()},kn("tim").onclick=Se=>{Se.stopPropagation(),je()},kn("cam").onclick=Se=>{Se.stopPropagation(),Xt()};let ei=0,Li=Se=>{let gt=performance.now();gt-ei<120||(ei=gt,Se.cancelable&&Se.type!=="click"&&Se.preventDefault(),We())};for(let Se of["touchstart","pointerdown","mousedown","click"])U.addEventListener(Se,Li,{passive:!1});let cs=()=>{re&&re.ac.state!=="running"&&re.ac.resume()};for(let Se of["touchend","click","keydown"])addEventListener(Se,cs,{passive:!0});document.addEventListener("visibilitychange",()=>{re&&(document.hidden?re.ac.suspend():re.ac.resume())});let Di=!1,zt="",Zt=52,ui=0;function Wt(){let Se=innerWidth,gt=innerHeight,it=Se/gt,un=Se+"x"+gt+"@"+s;un!==zt&&(zt=un,e.setPixelRatio(s),e.setSize(Se,gt,!1),K.composer.setPixelRatio(s),K.composer.setSize(Se,gt),S.aspect=it,Zt=it>=1?52:Jt(2*Math.atan(Math.tan(34*Math.PI/180)/it)*180/Math.PI,52,80),S.fov=Zt+ui,S.updateProjectionMatrix(),K.grade.uniforms.uAspect.value=it,K.grade.uniforms.uTexel.value.set(1/K.composer.readBuffer.width,1/K.composer.readBuffer.height),ke.uReflRes.value.set(K.composer.readBuffer.width,K.composer.readBuffer.height),t1(e))}addEventListener("resize",()=>{Di=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Di=!0}),Wt();let yi=0;function Ss(Se=!0){if(s>1.05)s=Math.max(1,s-.25),Di=!0;else if(H)H=!1,K.bloom.enabled=!1;else if(c.shadow.mapSize.x>1024)c.shadow.mapSize.set(1024,1024),B(),c.shadow.map&&(c.shadow.map.dispose(),c.shadow.map=null);else if(de.ahead>430)de.ahead=430;else return;if(yi++,Se)try{localStorage.setItem("icd-q",String(yi))}catch{}}try{let Se=parseInt(localStorage.getItem("icd-q")||"0");if(!ot.has("q"))for(let gt=0;gt<Math.min(Se,6);gt++)Ss(!1);yi=Math.max(yi,Se||0)}catch{}let sa=performance.now(),hi=0,rd=0,ra=0,oa=()=>1-oe.night,Th=0,en=0,od=0,St=ot.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;St&&(St.gl=e.getContext(),St.tq=St.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let _i={p:-1,a:new k,b:new k,next:5},Nt={lat:0,lon:0,road:0,jolt:0,kick:0,u:ue.u,vu:0,v:0,s:ue.s,yaw:0,brake:0,rk:NaN,rb:null},B1=new _e(3.6,2.8,1.8),O1=[-2.5335,-1.4665,1.4665,2.5335],ad=[1.12,-1.12],z1=[-24.5,24.5];function ld(Se){requestAnimationFrame(ld);let gt=performance.now();Di&&(Di=!1,Wt());let it=Math.min(.05,Math.max(0,(Se-sa)/1e3));sa=Se,hi+=it,ue.steer=0,(Xe.ArrowLeft||Xe.a||Xe.A)&&(ue.steer=-1),(Xe.ArrowRight||Xe.d||Xe.D)&&(ue.steer=1),(Xe.ArrowUp||Xe.w||Xe.W)&&(ue.mult=Jt(ue.mult*Math.exp(it*.9),ci,ta)),(Xe.ArrowDown||Xe.s||Xe.S)&&(ue.mult=Jt(ue.mult*Math.exp(-it*.9),ci,ta)),Ve&&Math.abs(Ve.y-Ve.sy)<30&&(ue.steer=Ve.x<innerWidth/2?-1:1),ue.steer&&(ue.lastInput=Se,ue.uHome=ue.u);let un=Bo(Pt.k);ue.s-un>24&&(Pt.k++,un=Bo(Pt.k),Object.assign(Pt,{phase:"idle",raise:1,decided:!1}));let ti=pl(un),En=un-ue.s;ti&&!Pt.decided&&En<150&&(Pt.decided=!0,En>75&&Qn&&ue.speed*ue.speed/2.5<En-14&&(ot.has("xing")||yn(Pt.k,99)<.8)&&(Pt.phase="warn",Y.start(un,yn(Pt.k,7)<.5?1:-1,16))),Pt.phase==="warn"?(Pt.raise=Math.max(0,Pt.raise-it/6),Y.st.cleared&&(Pt.phase="clear",Pt.t2=0)):Pt.phase==="clear"?(Pt.raise=Math.max(0,Pt.raise-it/6),(Pt.t2+=it)>2.2&&(Pt.phase="raise")):Pt.phase==="raise"&&(Pt.raise=Math.min(1,Pt.raise+it/5),Pt.raise>=1&&(Pt.phase="idle"));let tn=Pt.phase==="warn"||Pt.phase==="clear"||Pt.phase==="raise"&&Pt.raise<.25,Yi=On(ue.s,"speed")*ue.mult*(Qn?1:.55);if(Pt.phase!=="idle"&&Pt.raise<.8&&En>0){let Ce=En-11.2,st=Ce>0?Math.sqrt(2*1.25*Ce):0;Yi=Math.min(Yi,st),ue.speed=Math.min(ue.speed,st)}ot.has("park")&&(Yi=0,ue.speed=0),ue.speed+=(Yi-ue.speed)*Math.min(1,it*.5),ue.s+=ue.speed*it,ue.dist+=ue.speed*it;let Nl=On(ue.s,"rw");ue.steer?ue.u=Jt(ue.u+ue.steer*it*2.4,-Nl+.85,Nl-.85):Se-ue.lastInput>3e3&&(ue.u+=(Jt(ue.uHome,-Nl+.85,Nl-.85)+Math.sin(hi/11)*.1-ue.u)*Math.min(1,it*.9)),!ue.todPaused&&Qn&&(ue.tod=(ue.tod+it/480*(oe.night>.5?1.7:1))%1),Xg(ue.tod),Ie.update(it);let Xn=Ie.W.ov,Es=Ie.W.rain;Yg(Xn,Es),Hn=Jt(Hn+(Es>.25?it/18:-it/120),0,1);let cd=performance.now();de.update(ue.s,Qn?3.5:14);let ud=performance.now();if(Ae.at(ue.s,vt),Math.abs(vt.x-de.origin.x)>900||Math.abs(vt.z-de.origin.z)>900){let Ce=Math.round(vt.x)-de.origin.x,st=Math.round(vt.z)-de.origin.z;de.setOrigin(Math.round(vt.x),Math.round(vt.z)),ls.x-=Ce,ls.z-=st,ks.x-=Ce,ks.z-=st,F.shift&&F.shift(Ce,st),Ct.shift(Ce,st),He.shift(Ce,st)}let Zi=de.origin.x,Ki=de.origin.z,k1=(Ae.at(ue.s+1.5,Bt).y-Ae.at(ue.s-1.5,Ft).y)/3,H1=(Bt.h-Ft.h)/3;if(ne.group.position.set(vt.x+vt.rx*ue.u-Zi,vt.y+.01,vt.z+vt.rz*ue.u-Ki),it>0){let Ce=Nt.vu+((ue.u-Nt.u)/it-Nt.vu)*Math.min(1,it*6),st=(Ce-Nt.vu)/it;Nt.u=ue.u,Nt.vu=Ce,Nt.lat=st-ue.speed*ue.speed*H1,Nt.lon+=((ue.speed-Nt.v)/it-Nt.lon)*Math.min(1,it*8),Nt.v=ue.speed;let rt=Pt.phase!=="idle"&&En>0&&En<20&&ue.speed<.5;if(Nt.brake=Nt.lon<-.6||rt?1:Nt.lon>-.3?0:Nt.brake,Nt.yaw=-Jt(Math.atan(Ce/Math.max(ue.speed,6))*.8,-.1,.1),Nt.road=.004*Math.sin(ue.s*.48)+.003*Math.sin(ue.s*.86+1.3),Nt.jolt=Nt.kick=0,ti)for(let Et=0;Et<4;Et++)for(let Kt=0;Kt<2;Kt++){let $t=un+O1[Et]-ad[Kt];if(Nt.s<$t&&ue.s>=$t){let nn=.05+Math.min(ue.speed,25)*.004;Nt.jolt+=nn,Nt.kick+=Kt?nn*.9:-nn*.9,re&&re.bump(.25+Math.min(ue.speed,25)/50)}}{let Et=Math.round((ue.s-Oo)/Nr);Et!==Nt.rk&&(Nt.rk=Et,Nt.rb=Oi(ue.s));let Kt=Nt.rb;if(Kt)for(let $t=0;$t<2;$t++)for(let nn=0;nn<2;nn++){let fi=Kt.s+z1[$t]-ad[nn];if(Nt.s<fi&&ue.s>=fi){let Un=.035+Math.min(ue.speed,25)*.003;Nt.jolt+=Un,Nt.kick+=nn?Un*.9:-Un*.9,re&&re.bump(.2+Math.min(ue.speed,25)/60)}}}Nt.s=ue.s}ne.group.rotation.set(-Math.atan(k1),vt.h+Nt.yaw,0);let mr=zi(ue.s);mr&&Math.abs(ue.s-mr.s)<700?(Ae.at(mr.s-_n,Bt),ke.uTunA.value.set(Bt.x-Zi,Bt.y,Bt.z-Ki),Ae.at(mr.s+_n,Bt),ke.uTunB.value.set(Bt.x-Zi,Bt.y,Bt.z-Ki),ke.uTunR.value=On(mr.s,"rw")+1.7):(ke.uTunA.value.set(0,-1e4,0),ke.uTunB.value.set(0,-1e4,0));let wh=mr&&Math.abs(ue.s+1-mr.s)<_n-1.5?1:0;en+=(wh-en)*Math.min(1,it*(wh?1.6:.7)),ke.uCarPos.value.set(ne.group.position.x+vt.fx*1.7,ne.group.position.y+.8,ne.group.position.z+vt.fz*1.7),ke.uCarFwd.value.set(vt.fx,-.05,vt.fz).normalize(),ke.uHead.value=wh,ne.update(it,ue.speed,Math.max(oe.night,en),Es,Nt,od),at.update(ti&&En>-24&&En<700?nh(Ae,un):null,de.origin,Pt.raise,tn,hi),Y.update(it,Ae,de.origin,Tt(.15,.8,oe.night),On(un,"rw")+3.2);let Ah=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ot.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(ot.has("rig")){let[Ce,st,rt,Et]=ot.get("rig").split(",").map(Number);Object.assign(Ah[0],{back:Ce,up:st,ahead:rt,lookY:Et})}let gr=new k,aa=6,hd=ue.cam===2;if(ue.cam===4){_t.t+=it;{let rt=zi(ue.s+30);rt&&Math.abs(ue.s+30-rt.s)<on+70&&_t.type!=="chase"&&_t.type!=="eye"&&(_t.type="chase",_t.t=0,_t.dur=20,dr=!1)}(_t.t>_t.dur+(_t.type==="road"?8:0)||_t.type==="road"&&_t.anchor&&ue.s>_t.anchor.s+24)&&Ze();let Ce=ne.group.position,st=_t.type;if(st==="chase"||st==="eye"){let rt=Ah[st==="eye"?2:0];hd=st==="eye",Ae.at(ue.s-rt.back,Ft),Ae.at(ue.s+rt.ahead,Bt),Dn.set(Ft.x+Ft.rx*ue.u*rt.cu-Zi,Ft.y+rt.up,Ft.z+Ft.rz*ue.u*rt.cu-Ki),gr.set(Bt.x+Bt.rx*ue.u*rt.lu-Zi,Bt.y+rt.lookY,Bt.z+Bt.rz*ue.u*rt.lu-Ki)}else if(st==="side"){Ae.at(ue.s+1.5,Ft);let rt=Dt(ue.s),Et=rt.city+rt.sakura>.5,Kt=On(ue.s,"rw"),$t=_t.sideSign>0?Kt+(Et?1.45:3.4):-(Kt+1.5),nn=Ft.y+_s(ue.s+1.5,$t,Ft.y,Kt);Dn.set(Ft.x+Ft.rx*$t-Zi,Math.max(nn+1.55,Ft.y+1.25),Ft.z+Ft.rz*$t-Ki),gr.set(Ce.x+vt.fx*2.5,Ce.y+.9,Ce.z+vt.fz*2.5),aa=4}else if(st==="road"&&_t.anchor)Dn.set(_t.anchor.x-Zi,_t.anchor.y,_t.anchor.z-Ki),gr.set(Ce.x,Ce.y+.85,Ce.z),aa=30;else{Ae.at(ue.s-20,Ft),Ae.at(ue.s+34,Bt);let rt=14+Math.min(_t.t,20)*.35;Dn.set(Ft.x+Ft.rx*ue.u*.4-Zi,Ft.y+rt,Ft.z+Ft.rz*ue.u*.4-Ki),gr.set(Bt.x-Zi,Bt.y+1,Bt.z-Ki),aa=3}}else{let Ce=Ah[ue.cam];Ae.at(ue.s-Ce.back,Ft),Ae.at(ue.s+Ce.ahead,Bt);let st=ue.u*Ce.cu,rt=st+(Ce.side||0);Dn.set(Ft.x+Ft.rx*rt-Zi,Ft.y+Ce.up,Ft.z+Ft.rz*rt-Ki),gr.set(Bt.x+Bt.rx*ue.u*Ce.lu-Zi,Bt.y+Ce.lookY,Bt.z+Bt.rz*ue.u*Ce.lu-Ki)}ne.group.visible=!hd,ue.cam===3?S.up.set(vt.fx,0,vt.fz):S.up.set(0,1,0),dr||(ls.copy(Dn),ks.copy(gr),dr=!0);let fd=1+Math.max(0,ue.speed-12)/12;ls.lerp(Dn,1-Math.exp(-it*aa*fd)),ks.lerp(gr,1-Math.exp(-it*Math.min(aa,8)*fd));{let Ce=ue.cam===3?0:Math.min(Jt((ue.speed-16)*.22,0,11),Math.max(0,84-Zt));ui+=(Ce-ui)*Math.min(1,it*1.5),Math.abs(S.fov-(Zt+ui))>.02&&(S.fov=Zt+ui,S.updateProjectionMatrix())}S.position.copy(ls),S.lookAt(ks),ot.has("yaw")&&S.rotateY(parseFloat(ot.get("yaw"))*Math.PI/180),ot.has("pitch")&&S.rotateX(parseFloat(ot.get("pitch"))*Math.PI/180),Vr.set(vt.fx,0,vt.fz),ia.set(vt.rx,0,vt.rz);{let Ce=ne.group.position,st=S.position.x-Ce.x,rt=S.position.z-Ce.z,Et=ue.cam===4&&_t.type!=="chase"&&_t.type!=="eye",Kt=ue.s+st*vt.fx+rt*vt.fz-(Et?10:0),$t=Et||Dl?40:Math.tan(S.fov*Math.PI/360)*S.aspect*1.08;te.update(Ae,Kt,ue.u+st*vt.rx+rt*vt.rz,de.origin.x,de.origin.z,On(ue.s,"rw"),$t),ue.grass||te.hide()}let jt=Dt(ue.s),Rh=1+.25*oe.bright*(1-en);c.color.copy(oe.sunCol),c.intensity=oe.sunI/Rh;{let Ce=oe.lightDir;if(M.angleTo(Ce)>.1){let Un=0;if(Qn&&!ue.todPaused)for(let ni=1;ni<=60&&!(G0(ue.tod+ni*.001,I).angleTo(Ce)>.09);ni++)Un=ni;G0(ue.tod+Un*.001,M),L=D=0}T.crossVectors(w,M).normalize(),_.crossVectors(M,T),E.set(ne.group.position.x+vt.fx*26,ne.group.position.y,ne.group.position.z+vt.fz*26),c.target.position.copy(E),c.position.copy(E).addScaledVector(Ce,200);let st=2*d/c.shadow.mapSize.x,rt=M.x/M.y-Ce.x/Ce.y,Et=M.z/M.y-Ce.z/Ce.y;st!==O&&(O=st,L=D=0);{let Un=Math.round(ne.group.position.y);if(R===null)R=Un;else if(Math.abs(ne.group.position.y-R)>3){let ni=Un-R;L-=ni*(rt*T.x+Et*T.z),D-=ni*(rt*_.x+Et*_.z),R=Un}}let Kt=de.origin.x,$t=de.origin.z,nn=E.dot(T)+Kt*T.x+$t*T.z-L,fi=E.dot(_)+Kt*_.x+$t*_.z-D;E.addScaledVector(T,Math.round(nn/st)*st-nn).addScaledVector(_,Math.round(fi/st)*st-fi),C.copy(E),A.copy(E).addScaledVector(M,200),g.set(1,rt,0,-R*rt,0,1,0,0,0,Et,1,-R*Et,0,0,0,1)}V.target.position.set(ne.group.position.x,ne.group.position.y+.9,ne.group.position.z),V.position.copy(V.target.position).addScaledVector(oe.lightDir,12),z.color.copy(oe.hemiSky),z.groundColor.copy(oe.hemiGround),z.intensity=oe.hemiI/Rh;{let Ce=(1-oe.night)*(1-Xn);if(Ce>.001){S.getWorldDirection(Oe);let st=Oe.x,rt=Oe.z,Et=Math.hypot(st,rt)||1,Kt=oe.sunDir,$t=0;for(let fi=-2;fi<=2;fi++){let Un=fi*.3,ni=Math.cos(Un),vr=Math.sin(Un),Wr=(st*ni-rt*vr)/Et,Xr=(st*vr+rt*ni)/Et,la=Math.max(0,Wr*Kt.x+Xr*Kt.z),qr=la*la;$t+=qr*qr*qr}let nn=$t/5*(.1+.35*oe.warm)*1.4*Ce*tt;oe.fog.r+=oe.sunCol.r*nn,oe.fog.g+=oe.sunCol.g*nn,oe.fog.b+=oe.sunCol.b*nn}}y.fog.color.copy(oe.fog);let dd=(jt.city*.0022+jt.sakura*.0019+jt.coast*.0011+jt.country*.0014+jt.mountain*.0017+jt.snow*.0021)*(1+oe.night*.25);y.fog.near=dd*(1+.55*Xn+.45*Es),y.fog.far=de.ahead*.92,ke.uSkyHor.value.copy(oe.horizon),ke.uSkyZen.value.copy(oe.zenith),ke.uTime.value=hi,ke.uWet.value=Hn*(1-jt.snow),ke.uSakWet.value=Ne,od=Math.max(ke.uWet.value,ke.uSakWet.value*jt.sakura)*(1-en);{let Ce=(ke.uWet.value>.04||ke.uSakWet.value*Math.max(jt.sakura,Mm(ue.s+120,"sakura"))>.04)&&n!=="low"&&en<.5&&fe!=="0";if(K.refl.enabled=Ce&&fe!=="taps",ke.uReflOn.value=Ce&&fe!=="copy"?1:0,Ce){S.getWorldDirection(me),me.y=0,me.normalize(),he.copy(S.position).addScaledVector(me,1e4).project(S),ke.uHorizon.value=he.y*.5+.5;let st=Math.max(.5,S.position.y-ne.group.position.y);ke.uReflK.value=Jt(1-2*st/(5+st),.05,1)}}ke.uOrigin.value.set(de.origin.x,de.origin.z),ke.uWind.value=1+.8*Es,ke.uCloudSh.value=(1-Xn)*Tt(.04,.3,oe.sunEl)*(1-oe.night),ke.uCloudSh.value>.001&&J.update(e,S.position.x,S.position.z,de.origin.x,de.origin.z);let bi=j.material.uniforms;if(bi.uBright.value=oe.bright,bi.uNight.value=oe.night,bi.uWarm.value=oe.warm,bi.uTime.value=hi,bi.uCirrusCol.value.copy(oe.cLit).lerp(oe.horizon,.25),bi.uCirrus.value=.6*(1-Xn)*(1-.65*Tt(.4,.9,oe.night)),bi.uOvercast.value=Xn,bi.uMilky.value=Tt(.55,.95,oe.night)*(1-Xn),oe.night>.65&&Xn<.3&&_i.p<0&&(_i.next-=it)<0){let Ce=Math.atan2(vt.fx,vt.fz)+(Math.random()-.5)*1.5,st=.45+Math.random()*.6,rt=.22+Math.random()*.2,Et=(Math.random()-.5)*.6,Kt=($t,nn)=>new k(Math.cos($t)*Math.sin(nn),Math.sin($t),Math.cos($t)*Math.cos(nn));_i.a.copy(Kt(st,Ce)),_i.b.copy(Kt(st-rt,Ce+Et)),_i.p=0,_i.next=ot.has("meteors")?1:6+Math.random()*20}_i.p>=0&&(_i.p+=it/.85,_i.p>1.3&&(_i.p=-1)),bi.uMetP.value=_i.p,bi.uMetA.value.copy(_i.a),bi.uMetB.value.copy(_i.b),bi.uDeckLit.value.copy(oe.horizon).lerp(oe.cLit,.35),bi.uDeckDark.value.copy(oe.zenith).lerp(oe.horizon,.25).multiplyScalar(.82),j.position.copy(S.position);{let Ce=!!P&&(ue.pclouds!==0||!G);P&&(P.mesh.visible=Ce,Ce&&P.update(S,it)),G&&(G.group.visible=!Ce,Ce||G.update(S.position,it))}let V1=Q&&ue.band!==0?Q.update(S,sr(ue.s+200),Math.max(1,S.position.y-vt.y+.45),y.fog.near,y.fog.far):0;Q&&ue.band===0&&(Q.mesh.visible=!1),ce.update(S.position,Math.max(jt.snow,Dt(ue.s+600).snow*.7),1-V1);let Ul=0;for(let Ce of[-150,0,250,500,800])Ul=Math.max(Ul,Dt(ue.s+Ce).coast);se.mesh.visible=Ul>.001,se.update(S.position,hi,dd*.8,Tt(0,.35,Ul),K.grade.uniforms),Ge.uniforms.uTime.value=hi,Ge.uniforms.uFogD.value=y.fog.near,Ge.uniforms.uNight.value=oe.night,Ge.uniforms.uSpecK.value=1-oe.overcast*.85,ke.uSunDir.value.copy(oe.lightDir),ke.uSunCol.value.copy(oe.sunCol);let Ni=Tt(.15,.8,oe.night);if(W.atlas.emissiveIntensity=.1+Ni*1.05,ke.uBacklit.value=pe*1.6*(1-Xn)*(1-oe.night)*Tt(0,.08,oe.sunEl)*(1-Tt(.25,.55,oe.sunEl))*(1-en),ke.uGhShade.value.set(yt(.8,.3,oe.bright),yt(.8,.85,oe.bright),yt(.8,1.7,oe.bright)),vi.tex){let Ce=oe.bright;vi.uFieldC.value.set(yt(Pe[0],ve[0],Ce),yt(Pe[1],ve[1],Ce),yt(Pe[2],ve[2],Ce)),vi.uFieldCo.value.set(yt(xe[0],ie[0],Ce),yt(xe[1],ie[1],Ce),yt(xe[2],ie[2],Ce)),vi.uFieldSa.value.set(yt(ze[0],Be[0],Ce),yt(ze[1],Be[1],Ce),yt(ze[2],Be[2],Ce))}ke.uBlShade.value.set(yt(Ke[0],De[0],oe.bright),yt(Ke[1],De[1],oe.bright),yt(Ke[2],De[2],oe.bright)),ke.uLightsOn.value=Ue>=0?Ue:Math.max(Tt(.02,.75,oe.night),.3*Xn),W.lamp.color.setRGB(.9,.86,.74).lerp(B1,Ni),W.pool.opacity=Ni*.42*(1+.8*Hn);{let Ce=ne.group.position,st=ne.lamps,rt=Math.max(Ni,en),Et=0,Kt=0,$t=0,nn=-1e3,fi=0,Un=0,ni=-1e3,vr=0,Wr=900,Xr=900;if(rt>.01){let gd=Math.floor(ue.s/Vt);for(let Ch=gd-1;Ch<=gd+1;Ch++){let Bl=de.chunks.get(Ch);if(!Bl||!Bl.lamps)continue;let ca=Bl.lamps,vd=Bl.group.position;for(let Yr=0;Yr<ca.length;Yr+=4){let Ph=ca[Yr]+vd.x,Ih=ca[Yr+1],Lh=ca[Yr+2]+vd.z,Dh=(Ph-Ce.x)**2+(Ih-Ce.y)**2+(Lh-Ce.z)**2,Ol=ca[Yr+3]/(1+.045*Dh);Ol>Et?(Kt=Et,Xr=Wr,Un=$t,ni=nn,vr=fi,Et=Ol,Wr=Dh,$t=Ph,nn=Ih,fi=Lh):Ol>Kt&&(Kt=Ol,Xr=Dh,Un=Ph,ni=Ih,vr=Lh)}}S.updateMatrixWorld()}let la=rt*Et*(1+.045*Wr)*(1-Tt(18,30,Math.sqrt(Wr))),qr=rt*Kt*(1+.045*Xr)*(1-Tt(18,30,Math.sqrt(Xr)));st[0].set($t,nn,fi,1).applyMatrix4(S.matrixWorldInverse).w=la,st[1].set(Un,ni,vr,1).applyMatrix4(S.matrixWorldInverse).w=qr,ne.lampCol.setRGB(1,.8-.32*en,.52-.38*en),Xi.uLampW.value[0].set($t,nn,fi,la),Xi.uLampW.value[1].set(Un,ni,vr,qr),Xi.uLampCol.value.copy(ne.lampCol),ne.head.getWorldPosition(Xi.uHeadPos.value),ne.head.target.getWorldPosition(Oe),Xi.uHeadDir.value.copy(Oe).sub(Xi.uHeadPos.value).normalize(),Xi.uHeadI.value=ne.head.intensity/60}W.pool.visible=W.pool.opacity>.003,de.lod(ue.s,bh,Ni>.15,Ll),ke.uNight.value=Ni,K.bloom.strength=yt(.32,.55,Ni),K.bloom.threshold=yt(1.35,.95,Ni),K.bloom.radius=yt(.55,.35,Ni);{let Ce=Math.max(Ni,en,Tt(.25,.6,oe.warm)*(1-Xn));K.bloom.enabled=H&&Ce>.02,K.bloom.strength*=Math.min(1,Ce*4)}e.toneMappingExposure=yt(1,1.15,Ni)*(1+.35*en)*Rh,Dn.copy(S.position).addScaledVector(oe.sunDir,1e3).project(S);let Hs=K.grade.uniforms,G1=Dn.z<1?1:0,W1=Math.max(Math.abs(Dn.x),Math.abs(Dn.y));Hs.uSun.value.set(Dn.x*.5+.5,Dn.y*.5+.5),Hs.uSunVis.value=G1*(1-Tt(1,1.9,W1))*Tt(-.02,.15,oe.sunEl)*(1-oe.night)*(1-Xn)*(1-en),Hs.uSat.value=1.22-.24*Xn,Hs.uVig.value=.55-.43*oe.bright,Hs.uLo.value.set(-.014+.026*oe.bright,0,.03),Hs.uDay.value=oa(),Hs.uWarm.value=oe.warm,Hs.uTime.value=hi,ge.update(S.position,hi,Es*(1-en)*(1-jt.snow),oa());{let Ce=zi(ue.s+190),st=(jt.city+jt.country+jt.coast)*(1-Xn)*(1-Hn)*Tt(.6,.9,oe.sunEl)*(ue.mirage??1)*(Ce&&Math.abs(ue.s+190-Ce.s)<330?0:1);Re.update(Ae,ue.s,de.origin.x,de.origin.z,On(ue.s+150,"rw"),st,hi,oe.horizon)}{let Ce=Jt(jt.snow+jt.mountain*.6*Math.max(oe.night,1-Tt(.27,.36,ue.tod)),0,1)*(1-en);nt.copy(oe.fog).multiplyScalar(.92),et.copy(oe.sunCol).multiplyScalar(Math.min(1,oe.sunI/3)*(1-Xn)*.6);let st=Math.cos(ne.group.rotation.y),rt=Math.sin(ne.group.rotation.y),Et=ne.group.position;Gt.set(Et.x-1.75*rt,Et.y+.95,Et.z-1.75*st,Math.max(oe.night,en)*(.5+1.2*Nt.brake)),He.update(it,ne.group,ue.speed,ke.uWet.value*(1-en),jt.snow*(1-en),Ce,nt,et,Gt,S.position,ue.spray)}Fe.update(S.position,hi,jt.snow*(.3+.7*Xn)*(1-en),oa()),Ct.setFog(y.fog.near),Ct.update(it,hi,S.position,Vr,ia,jt,oa(),Es,ne.group.position);let X1=performance.now();F.update(it,hi,S.position,Vr,ia,jt.sakura*(1-en),vt.y,Ni,(jt.country+jt.sakura*.4)*(1-Es)*(1-en),jt.mountain*(1-en));let q1=performance.now();if(re){Ae.at(un,Bt);let Ce=Math.hypot(Bt.x-de.origin.x-S.position.x,Bt.z-de.origin.z-S.position.z),st=Y.st.active?Y.group.position.distanceTo(S.position):1e9,rt=ue.speed/15;re.update(rt<1.5?rt:1.5+(rt-1.5)*.4,jt,oa(),{rush:Jt((ue.speed-25)/40,0,1),bell:tn?Math.pow(Jt(1-Ce/260,0,1),1.5):0,train:Math.pow(Jt(1-st/230,0,1),2),rain:Es*(1-en)*(1-jt.snow),wetRoad:ke.uWet.value*(1-en),speed:ue.speed,load:Jt(Nt.lon/3,0,1),roof:ue.cam!==2,tunnel:en,water:(()=>{let Et=Oi(ue.s);return Math.max(Et?1-Tt(12,150,Math.abs(ue.s-Et.s)):0,jt.mountain*.45)})(),dusk:oe.warm*(ue.tod>.5?1:.3)})}$e(fn(ue.s+40)),St&&(e.info.autoReset=!1,e.info.reset());let Fl=null;St&&St.tq&&(Fl=St.gl.createQuery(),St.gl.beginQuery(St.tq.TIME_ELAPSED_EXT,Fl));let pd=performance.now();K.composer.render(it);let md=performance.now();if(Fl){let Ce=St.gl;for(Ce.endQuery(St.tq.TIME_ELAPSED_EXT),St.pend.push(Fl);St.pend.length&&Ce.getQueryParameter(St.pend[0],Ce.QUERY_RESULT_AVAILABLE);){let st=St.pend.shift(),rt=Ce.getQueryParameter(st,Ce.QUERY_RESULT);Ce.deleteQuery(st),Ce.getParameter(St.tq.GPU_DISJOINT_EXT)||(St.gpu=rt/1e6,St.gpuN++,St.gpuSum+=St.gpu,St.gpu>St.gpuMax&&(St.gpuMax=St.gpu))}}let Gr=window.__pb||(window.__pb={world:0,parts:0,render:0});if(Gr.world=Gr.world*.95+(ud-cd)*.05,Gr.parts=Gr.parts*.95+(q1-X1)*.05,Gr.render=Gr.render*.95+(md-pd)*.05,Th=Th*.95+(performance.now()-gt)*.05,window.__ft=Th,St){let Ce=e.info,st=performance.now()-gt,rt={t:+hi.toFixed(2),s:Math.round(ue.s),total:+st.toFixed(1),world:+(ud-cd).toFixed(1),render:+(md-pd).toFixed(1),gpu:+(St.gpu||0).toFixed(1),progs:Ce.programs.length-St.progs,geos:Ce.memory.geometries-St.geos,tex:Ce.memory.textures-St.tex,calls:Ce.render.calls,tris:Ce.render.triangles};rt.progs>0&&Qn&&(rt.newProgs=Ce.programs.slice(-rt.progs).map(Et=>(Et.name||"")+":"+String(Et.cacheKey).slice(0,60))),St.progs=Ce.programs.length,St.geos=Ce.memory.geometries,St.tex=Ce.memory.textures,St.frames++,St.sum+=st,st>St.max&&(St.max=st),st>12&&Qn&&St.spikes.push(rt),St.last=rt}if((qe+=it)>.25){qe=0,Mh.textContent=Math.round(ue.speed*3.6),Sh.textContent=(ue.dist/1e3).toFixed(1);let Ce=Math.floor(ue.tod*1440);Eh.textContent=`${String(Math.floor(Ce/60)).padStart(2,"0")}:${String(Ce%60).padStart(2,"0")}`}rd++,Qn&&rd>150&&it>.03?ra+=it:ra=Math.max(0,ra-it*.5),ra>3&&!ot.has("q")&&(ra=0,Ss())}window.__dbg={renderer:e,st:ue,scene:y,camera:S,world:de,TOD:oe,KEYS:Xo,X:Pt,train:Y,weather:Ie,U:ke,birds:Ct,cine:_t,post:K,car:ne,sun:c,M:W,clouds:G,pclouds:P,band:Q,sky:j,mountains:ce,shadowDir:M,CM:Nt,spray:He,grass:te,get audio(){return re}},ea(""),U.classList.add("ready"),ot.has("auto")&&We(),requestAnimationFrame(ld)}XS().catch(i=>{console.error(i),ea("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
